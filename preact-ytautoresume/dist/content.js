//content.js

/* 
    video:{
        videolink,
        time,
        duration,
        title,
        channel,
        complete:boolean,
        doNotResume:boolean,
    }
*/
/* 
    settings:{
        pauseResume: boolean,
        minWatchTime: value in seconds,
        minVideoLength: value in seconds,
        markPlayedTime: value in seconds,
    }
*/
const DEBUG = true;
var nvarray = {videos:[]};
var initialLinkIsVideo;
var directLoopDone;
var ytNavLoop;
var previousURL;
var previousTitle;
var previousChannel;
var userSettings;
var doNotResume = false;
var blacklist = false;
var grabTitleComplete = false;
$(document).ready(async function(){
    initStorage()
    .then(()=>getUserSettings())
    .then((usettings)=>{userSettings = usettings})
    .then(()=>{
        DEBUG && console.log("CHECK PAUSED SETTING: " + userSettings.pauseResume);
        DEBUG && console.log("CHECK MIN WATCH TIME SETTING: " + userSettings.minWatchTime);
        DEBUG && console.log("CHECK MIN VID LENGTH SETTING: " + userSettings.minVideoLength);
        if(!userSettings.pauseResume){
            DEBUG && console.log("document ready, starting");
            ytNavLoop = false;
            if(checkWatchable(window.location.href)){
                initialLinkIsVideo = true;
                injectPlayerButton()
                .then(()=>{
                    if(!grabTitleComplete){
                        grabTitle().then(()=>{
                            return;
                        })
                    } else{return;}
                })
                .then(()=>{
                    $("#YTAutoResumePlayerSwitch").click(()=>{
                        var icon =  $("#YTAutoResumeSwitchIcon");
                        var button = $("#YTAutoResumePlayerSwitch");
                        DEBUG && console.log("button.prop: " + $(button).prop("checked"));
                        var video = document.querySelector("video");
                        var markPlayed = false;
                            var timeRemaining = video.duration - video.currentTime;
                            if(timeRemaining < userSettings.markPlayedTime){
                                markPlayed=true;
                                DEBUG && console.log("marking played");
                            }
                            else{
                                markPlayed=false;
                            }
                        if($(button).prop("checked")){
                            blacklist = true;
                            $(button).prop("checked",false);
                            $(icon).attr("src", chrome.runtime.getURL("icons/playericon_inactive.svg"));
                            $("#YTAutoResumePlayerSwitch").attr("title","Video will not auto-resume");
                            setTime({videolink: window.location.href, time: document.querySelector("video").currentTime,
                                duration: document.querySelector("video").duration,
                                title: $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent,
                                channel: $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent,
                                complete:markPlayed, doNotResume:true})
                                .then(()=>{
                                    DEBUG && console.log("Video blacklisted successfully");
                                });
                        }
                        else{
                            blacklist = false;
                            $(button).prop("checked",true);
                            $(icon).attr("src",chrome.runtime.getURL("icons/playericon.svg"));
                            $("#YTAutoResumePlayerSwitch").attr("title","Video will auto-resume");
                            setTime({videolink: window.location.href, time: document.querySelector("video").currentTime,
                                duration: document.querySelector("video").duration,
                                title: $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent,
                                channel: $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent,
                                complete:markPlayed, doNotResume:false})
                                .then(()=>{
                                    DEBUG && console.log("Video removecd from blacklist successfully");
                                });
                            
                        }
                        
                    })
                });
            }
            else{initialLinkIsVideo = false};
        
            document.addEventListener('yt-navigate-finish',async ()=>{
                DEBUG && console.log("yt-navigate-finish EVENT DETECTED.")
                if(initialLinkIsVideo){
                    DEBUG && console.log("SETTING initialLinkIsVideo FALSE AND STARTING mainVideoProcess()");
                    initialLinkIsVideo = false;
                    waitYtNav().then(()=>{
                        DEBUG && console.log("ytnav set. startin mvp process in event listener loop");
                    })
                    .then(async ()=>{
                        mainVideoProcess().then(()=>{
                            return;
                        })
                    })
                }
                else{
                    DEBUG && console.log("initialLinkIsVideo never triggered. starting mvp");
                    ytNavLoop = true;
                    mainVideoProcess().then(()=>{
                        return;
                    })
                }
            })
        
            if(initialLinkIsVideo &&  !ytNavLoop){
                DEBUG && console.log("RUNNING DIRECT LOOP");
                mainVideoProcess().then(()=>
                {
                    DEBUG && console.log("initial link loop complete. setting ytnav true");
                    ytNavLoop = true;
                    return;
                });
            }
        }
        else{
            DEBUG && console.log("paused");
        }
    });
}
);
function injectPlayerButton(){
    //TODO implement setting override feature for switch. 
    //TODO ie. flipping the switch on a video that does not meet the user settings forces auto-resume anyway
    return new Promise((resolve)=>{
        checkBlacklist(window.location.href).then((blacklisted)=>{
            var imgSrc;
            /* {blacklisted?imgSrc = chrome.runtime.getURL("icons/playericon.svg")
                        :imgSrc = chrome.runtime.getURL("icons/playericon_inactive.svg")}; */
            if(blacklisted){
                imgSrc = chrome.runtime.getURL("icons/playericon_inactive.svg");
            }
            else{
                imgSrc = imgSrc = chrome.runtime.getURL("icons/playericon.svg");
            }
            DEBUG && console.log("starting image src:" + imgSrc);
            var button = $(
                `<button class="ytp-button YTAutoResume" name="YTAutoResumeSwitch" id="YTAutoResumePlayerSwitch" title="Video will auto-resume"
                aria-label="Video will auto-resume" style="vertical-align: top;">
                    <img id="YTAutoResumeSwitchIcon" src="${imgSrc}"
                     style="height: 84%; display: block; margin: auto;">
                </button>`
            );
            $(button).prop("checked",!blacklisted);
            $("div.ytp-right-controls").prepend(button);
            resolve();
        })
    })
    
}


function getUserSettings(){
    return new Promise((resolve)=>{
        chrome.storage.local.get("settings",(data)=>{
            resolve(data.settings);
        })
    })
}
function initStorage(){
    return new Promise(function(resolve){
        Promise.all([initDB(),initSettings()]).then((values)=>{
            resolve();
        });
    })
    
}
function initDB(){
    return new Promise((resolve)=>{
        var bytesUsed;
        chrome.storage.local.getBytesInUse("videos", function(bytes){
            bytesUsed = bytes;
        
            DEBUG && console.log("BYTES USED: " + bytesUsed);
            if(bytesUsed == 0 || bytesUsed == undefined){
                DEBUG && console.log("BYTES USED ZERO OR undefined");
                chrome.storage.local.set(nvarray,()=>{resolve();});  
            }
            else{
                DEBUG && console.log("Storage not empty");
                resolve();
            }
            
        });
    })
   
}
function initSettings(){
    return new Promise((resolve)=>{
        chrome.storage.local.getBytesInUse("settings",(bytes)=>{
            if(bytes == undefined || bytes == 0){
                DEBUG && console.log("Settings BYTES USED ZERO OR undefined");
                chrome.storage.local.set(
                {
                    settings:{
                        pauseResume:false,
                        minWatchTime:60,
                        minVideoLength:480,
                        markPlayedTime:60,
                    }
                },()=>{resolve();})
            }
            else{
                DEBUG && console.log("Settings storage not empty");
                resolve();
            }
            
        })
    })
    
}
function extractWatchID(link){
    var start = 0;
    var end = 0;
    for(var i=0;i<link.length;i++){
        if(link[i]=='v' && link[i+1] == '='){
            start = i+2;
        }
        else if(link[i] =='&'){
            end = i;
            break;
        }
        else if(i==link.length-1){
            end=i+1;
        }
    }
    var result = link.slice(start,end);
    return result;
}
function grabTitle(){
    var videoTitle;
    var cN;
    return new Promise(function(resolve,reject){
        if(!checkWatchable(window.location.href)){
            DEBUG && console.log("rejecting grabTitle. link not watchable");
            reject();
        };
        videoTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0];
        if(videoTitle==null || videoTitle==undefined || videoTitle.textContent==""){
            DEBUG && console.log("VIDEO TITLE OR CHANNEL NAME IS NULL. TRYING AGAIN IN ONE SECOND.");
            var interval = setInterval(()=>{
                videoTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0];
                cN = $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0];
                if(!(videoTitle==null || videoTitle==undefined)){
                    grabTitleComplete = true;
                    resolve(videoTitle);
                    clearInterval(interval);
                }
            },2000)
        }
        else{
            DEBUG && console.log("resolving, videotitle -" + videoTitle.textContent);
            grabTitleComplete=true;
            resolve(videoTitle);
        }
    });
}
function checkWatchable(link){
    if(window.location.href.indexOf("watch?") > -1 && window.location.href.indexOf("?t=")>-1){
        DEBUG && console.log("IGNORING TIMESTAMPED LINK");
        return false;
    }
    
    else if (window.location.href.indexOf("watch?") > -1) {
        return true;
    }
    else{
        DEBUG && console.log("NOT A WATCHABLE LINK");
        return false;
    }
}

function waitYtNav(){

    return new Promise(function(resolve){
        var ytNavInterval = setInterval(()=>{
            DEBUG && console.log("ytnav waiting");
            if(ytNavLoop == true){
                DEBUG && console.log("ytnav waiting");
                resolve();
                clearInterval(ytNavInterval);
            }
        },1000)
    })
}

function checkStoredLinks(link){
    var result = -1;
    var resultFound = false;
    return new Promise(function(resolve,reject){
        chrome.storage.local.get("videos",function(data){
            DEBUG && console.log("videos.length at checkStoredLinks: "+ data.videos.length);
            if(data.videos.legnth != 0)
            {
                for(var i=0;i<data.videos.length;i++){
                    if(extractWatchID(data.videos[i].videolink) == extractWatchID(link)){
                        DEBUG && console.log("link == videolink; INDEX: " + i);
                        DEBUG && console.log("MATCH FOUND: " + data.videos[i].title + ", " + data.videos[i].channel);
                        result = i;
                        resultFound=true;
                        DEBUG && console.log("resolving checkStoredLinks");
                        resolve(data.videos[i]);
                        break;
                    }
                }
            }
            if(!resultFound){
                DEBUG && console.log("rejecting checkStoredLinks");
                reject(-1);
            };
        });
    });
}
function addNewVideo(video){
    return new Promise(function(resolve){
        DEBUG && console.log("ADDING LINK: " + video.videolink);
        var currentVideos = [];
        var newVideo = {videolink:video.videolink, time:-1,
            duration: video.duration, title:video.title, channel:video.channel}
        chrome.storage.local.get("videos", async function(data){
            currentVideos = data;
            currentVideos.videos.push(newVideo);
            chrome.storage.local.set(currentVideos,()=>{resolve();});
        });
        
    })
    
}

function setTime(video){
    return new Promise(function(resolve){
        var currentVideos = [];
        var videoFound = false;
        chrome.storage.local.get("videos", (data)=>{
            currentVideos = data;
            for(var i=0;i<currentVideos.videos.length;i++){
                if(extractWatchID(currentVideos.videos[i].videolink) == extractWatchID(video.videolink)){
                    currentVideos.videos.splice(i,1);
                    currentVideos.videos.push(video);          
                    chrome.storage.local.set(currentVideos,()=>{return;});
                    videoFound = true;
                    break;
                }
            }
            if(!videoFound){
                addNewVideo(video);
            }
            resolve();
        });
        
    })

}
function checkDuration(){
    const video = document.querySelector("video");
    if(video.duration < userSettings.minVideoLength){
        DEBUG && console.log("Video does not meet user's minVideoLength setting");
        return false;
    }
    else{
        DEBUG && console.log("Video meets user's minVideoLength setting");
        return true;
    }
}
function checkBlacklist(link){
    return new Promise((resolve)=>{
        chrome.storage.local.get("videos",(data)=>{
            for(var i=0;i<data.videos.length;i++){
                if(data.videos[i].videolink==link &&
                data.videos[i].doNotResume!=undefined &&
                data.videos.doNotResume==true){
                    DEBUG && console.log("VIDEO IS BLACKLISTED");
                    resolve(true);
                }
            }
            DEBUG && console.log("VIDEO IS NOT BLACKLISTED");
            resolve(false);
        });
    })
}
async function mainVideoProcess(){
    grabTitleComplete = false;
    return new Promise(async function(resolve){
        var currentURL = window.location.href;
        if(checkWatchable(window.location.href) && checkDuration()/*  && (checkBlacklist(window.location.href)==false) */){
            let grabTitlePromise = grabTitle();
                if(!initialLinkIsVideo && !ytNavLoop){resolve();}
            grabTitlePromise.then(function(videoTitle){
                grabTitleComplete = true;
                if(!initialLinkIsVideo && !ytNavLoop){resolve();}
                if(checkWatchable(window.location.href)){
                    var channelName = $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent;
                    var vTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent;
                    DEBUG && console.log("Video Title: " + vTitle);
                    DEBUG && console.log("Channel Name: " + channelName);
                    DEBUG && console.log("Current URL: " + currentURL);
                }
                //return;
                return;
            },()=>{DEBUG && console.log("grabtitlepromise reject")})
            .then(()=>{
                if(!initialLinkIsVideo && !ytNavLoop){
                    resolve();
                }
                return checkStoredLinks(window.location.href);
            })
            .then(
                (vid)=>{
                    if(!initialLinkIsVideo && !ytNavLoop){
                        resolve();
                    }
                    if(vid.time>userSettings.minWatchTime && !vid.complete && !vid.doNotResume){
                        document.querySelector("video").currentTime = vid.time;
                    }
                    else{
                        DEBUG && console.log("Video does not meet user's minWatchTime or video is complete. Not Auto Resuming.");
                    }

                    if(vid.doNotResume){
                        blacklist=true;
                        DEBUG && console.log("Video is blacklisted");
                    }
                    DEBUG && console.log("returning from cslPromise")

                },
                async ()=>{
                    DEBUG && console.log("New video, setting blacklist to false by default");
                    blacklist = false;
                    if(!initialLinkIsVideo && !ytNavLoop){
                            resolve();
                        }
                    var duration;
                    var currentTime;
                    var video = document.querySelector("video");
                    if(Number.isNaN(video.duration) || video.duration <0){duration = 0}
                    else{duration = video.duration};

                    if(Number.isNaN(video.currentTime) || video.currentTime < 0){currentTime = 0}
                    else{currentTime = video.currentTime};

                    /* var newVid = {videolink: window.location.href, time: currentTime, duration: duration,
                        title: $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent,
                        channel: $("yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent};
                    addNewVideo(newVid).then(()=>{ return;}) */
                    return;
                }
            )
            .then(async ()=>{
                if(!initialLinkIsVideo && !ytNavLoop){
                    resolve();
                }
                DEBUG && console.log("starting from videolink");
                var timeCheck = true;
                var lastTitle;
                try{
                    lastTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent;
                }catch(err){DEBUG && console.log("caught last title err")}
                document.querySelector("video").ontimeupdate = async function(){     
                    if(!initialLinkIsVideo && !ytNavLoop){
                        resolve();
                    }   
                    currentURL = window.location.href;
                    DEBUG && console.log("ontimeupdate");
                    var videoTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent;
                    var channelName = $("yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent;
                    if(!Number.isNaN(document.querySelector("video").duration) && document.querySelector("video").duration!=0 
                        && !(document.querySelector("video").currentTime<0) && channelName!=null && videoTitle!=null
                        ){
                        ct = document.querySelector("video").currentTime;
                        if($("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent!=lastTitle){
                            lastTitle = $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent;
                                
                                if(initialLinkIsVideo && !ytNavLoop){
                                    DEBUG && console.log("TITLE CHANGE DURING INITIAL LINK LOOP. RESOLVING.");
                                    resolve();
                                }
                                else if(!initialLinkIsVideo && !ytNavLoop){
                                    DEBUG && console.log("TITLE CHANGE DURING TRADEOFF.RESOLVING.");
                                    resolve();
                                }
                        }
                        else if(!initialLinkIsVideo && !ytNavLoop){
                            resolve();
                        }
                        else if(timeCheck && !blacklist){
                            var video = document.querySelector("video");
                            var markPlayed = false;
                            var timeRemaining = video.duration - video.currentTime;
                            if(timeRemaining < userSettings.markPlayedTime){
                                markPlayed=true;
                                DEBUG && console.log("marking played");
                            }
                            else{
                                markPlayed=false;
                            }
                            DEBUG && console.log("TC - " + document.querySelector("video").currentTime + "/" 
                            + document.querySelector("video").duration +", " 
                            + $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent + ", "
                            + $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent);
                            //if(document.querySelector("video").currentTime > userSettings.minWatchTime){
                                setTime({videolink: window.location.href, time: document.querySelector("video").currentTime,
                                duration: document.querySelector("video").duration,
                                title: $("h1.title.style-scope.ytd-video-primary-info-renderer")[0].textContent,
                                channel: $("ytd-video-owner-renderer.style-scope.ytd-video-secondary-info-renderer yt-formatted-string#text.style-scope.ytd-channel-name")[0].textContent,
                                complete:markPlayed, doNotResume:false})
                                .then(()=>{return});
                            //}
                        }
                    }
                    else if(!initialLinkIsVideo && !ytNavLoop){
                        resolve();
                    }
                    
                };
            })
        }
        else{
            DEBUG && console.log("NOT WATCHABLE OR DOES NOT MEET USER CRITERIA: RESOLVING");
        }
    });
}