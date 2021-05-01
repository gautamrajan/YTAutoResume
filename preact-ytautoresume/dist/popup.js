(()=>{var e={704:(e,n,t)=>{(n=t(645)(!1)).push([e.id,"div.header-bar{\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n}\n\ndiv.header-bar /* #ClearListButton */button{\n    margin-bottom:5px;\n    border-radius: 10px;\n    border: none;\n    background-color: rgba(99, 99, 99, 0.781);\n    color: #ffffff;\n}\ndiv.header-bar /* #ClearListButton */button:active{\n    background-color: rgba(158, 158, 158, 0.781);\n}\nh1{\n    margin-top:10px;\n    margin-bottom: 5px;\n    color: #ffffff;\n    /* border: 1px solid black; */\n}\n\n",""]),e.exports=n},798:(e,n,t)=>{(n=t(645)(!1)).push([e.id,".main-list{\n    /* background:red; */\n    border-top: 1px solid #aaaaaa;  \n    margin-right:0px;\n    padding-top: 2px;\n    max-width:350px;\n    max-height:380px;\n    display:block;\n    overflow: hidden;\n    overflow-y:auto;\n    /* scrollbar-width: thin; */\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.main-list::-webkit-scrollbar {\n    /* background:red; */\n    width:8px;\n    margin-top:10px;\n\n}\n\n.main-list::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n    border-radius:3px;\n    margin-top:10px;\n}\n\n.main-list::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG) ;\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\n.main-list-element{\n    align-items: flex-start;\n    display:flex;\n    margin-top: 8px;\n    margin-bottom:8px;\n    min-width: 200px;\n    height:90px;\n    border: 2px solid #aaaaaa;\n    border-radius: 5px;\n}\n\n.main-list-element img{\n    line-height:3px;\n}\n\n.main-list-element div.element-body{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height:90px;\n    min-width:65.2%;\n}\n\n.main-list-element div.element-body info{\n    flex-direction: column;\n    align-items: flex-start;\n\n}\n\n.main-list-element div.element-body info videoTitle{\n    \n    \n    vertical-align:top;\n    margin-top:6px;\n    margin-left: 6px;\n    font-size: 13px;\n    font-weight:500;\n    max-width:188px; \n\n\n    display:-webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n    overflow: hidden;\n}\n.main-list-element div.element-body info subtext{\n\n    display: inline-block;\n    text-decoration: underline;\n    vertical-align:top;\n    margin-top:3px;\n    margin-left: 6px;\n    margin-bottom:0px;\n    color: #ffffff;\n    font-size: 11px;\n    max-width:210px;\n    max-height: 19px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.main-list-element div.time-display{\n    display:flex;\n    flex-direction:column;\n    justify-content: flex-end;\n    height:30px;\n    vertical-align:bottom;\n    \n}\n.main-list-element div.element-body timeInfo{\n    display:flex;\n    justify-content:space-between;\n    margin-left: 6px;\n    margin-right:6px;\n    padding-right: 6px;\n    margin-top:3px;\n    margin-bottom: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 13px;\n    color: #ffffff;                        \n}\n.main-list a{\n    text-decoration: none;\n    color: #ffffff;\n}\n.main-list a:visited{\n    text-decoration:none;\n}\n.main-list a:hover{\n    color: #cfcfcf;\n}\n.main-list a:active{\n    color: #8d8d8d;\n}\n\n.main-list-element div.element-body bar{\n    background: red;\n\n    margin-top:4px;\n    display: inline-block;\n    height:3px;\n    max-width:226px;\n\n}",""]),e.exports=n},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,o,r,i=e[1]||"",l=e[3];if(!l)return i;if(n&&"function"==typeof btoa){var a=(t=l,o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),u=l.sources.map((function(e){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([a]).join("\n")}return[i].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},379:(e,n,t)=>{"use strict";var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],u=n.base?a[0]+n.base:a[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var f=l(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:h(p,n),references:1}),o.push(s)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var c,s=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var i=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(i,l[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var _=null,d=0;function h(e,n){var t,o,r;if(n.singleton){var i=d++;t=_||(_=u(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=u(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var u=a(e,n),c=0;c<t.length;c++){var s=l(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=u}}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e,n,o,r,i={},l=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function s(e,n,t){var o,r,i,l=arguments,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?r=n[i]:a[i]=n[i];if(arguments.length>3)for(t=[t],i=3;i<arguments.length;i++)t.push(l[i]);if(null!=t&&(a.children=t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return f(e,a,o,r,null)}function f(n,t,o,r,i){var l={type:n,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++e.__v:i};return null!=e.vnode&&e.vnode(l),l}function p(e){return e.children}function _(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function h(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return h(e)}}function m(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!y.__r++||r!==e.debounceRendering)&&((r=e.debounceRendering)||o)(y)}function y(){for(var e;y.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,o,r,i,l;e.__d&&(i=(r=(n=e).__v).__e,(l=n.__P)&&(t=[],(o=u({},r)).__v=r.__v+1,P(l,r,o,n.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?d(r):i,r.__h),O(t,r),r.__e!=i&&h(r)))}))}function v(e,n,t,o,r,a,u,c,s,_){var h,m,y,v,x,w,k,S=o&&o.__k||l,O=S.length;for(t.__k=[],h=0;h<n.length;h++)if(null!=(v=t.__k[h]=null==(v=n[h])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(p,{children:v},null,null,null):v.__b>0?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(y=S[h])||y&&v.key==y.key&&v.type===y.type)S[h]=void 0;else for(m=0;m<O;m++){if((y=S[m])&&v.key==y.key&&v.type===y.type){S[m]=void 0;break}y=null}P(e,v,y=y||i,r,a,u,c,s,_),x=v.__e,(m=v.ref)&&y.ref!=m&&(k||(k=[]),y.ref&&k.push(y.ref,null,v),k.push(m,v.__c||x,v)),null!=x?(null==w&&(w=x),"function"==typeof v.type&&null!=v.__k&&v.__k===y.__k?v.__d=s=b(v,s,e):s=g(e,v,y,S,x,s),_||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&y.__e==s&&s.parentNode!=e&&(s=d(y))}for(t.__e=w,h=O;h--;)null!=S[h]&&("function"==typeof t.type&&null!=S[h].__e&&S[h].__e==t.__d&&(t.__d=d(o,h+1)),R(S[h],S[h]));if(k)for(h=0;h<k.length;h++)C(k[h],k[++h],k[++h])}function b(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,n="function"==typeof r.type?b(r,n,t):g(t,r,r,e.__k,r.__e,n));return n}function g(e,n,t,o,r,i){var l,a,u;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<o.length;u+=2)if(a==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function x(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||a.test(n)?t:t+"px"}function w(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||x(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?S:k,i):e.removeEventListener(n,i?S:k,i);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function k(n){this.l[n.type+!1](e.event?e.event(n):n)}function S(n){this.l[n.type+!0](e.event?e.event(n):n)}function P(n,t,o,r,i,l,a,c,s){var f,d,h,m,y,b,g,x,w,k,S,P=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(s=o.__h,c=t.__e=o.__e,t.__h=null,l=[c]),(f=e.__b)&&f(t);try{e:if("function"==typeof P){if(x=t.props,w=(f=P.contextType)&&r[f.__c],k=f?w?w.props.value:f.__:r,o.__c?g=(d=t.__c=o.__c).__=d.__E:("prototype"in P&&P.prototype.render?t.__c=d=new P(x,k):(t.__c=d=new _(x,k),d.constructor=P,d.render=E),w&&w.sub(d),d.props=x,d.state||(d.state={}),d.context=k,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=P.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=u({},d.__s)),u(d.__s,P.getDerivedStateFromProps(x,d.__s))),m=d.props,y=d.state,h)null==P.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==P.getDerivedStateFromProps&&x!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(x,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(x,d.__s,k)||t.__v===o.__v){d.props=x,d.state=d.__s,t.__v!==o.__v&&(d.__d=!1),d.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(x,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,y,b)}))}d.context=k,d.props=x,d.state=d.__s,(f=e.__r)&&f(t),d.__d=!1,d.__v=t,d.__P=n,f=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=u(u({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(m,y)),S=null!=f&&f.type===p&&null==f.key?f.props.children:f,v(n,Array.isArray(S)?S:[S],t,o,r,i,l,a,c,s),d.base=t.__e,t.__h=null,d.__h.length&&a.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=j(o.__e,t,o,r,i,l,a,s);(f=e.diffed)&&f(t)}catch(n){t.__v=null,(s||null!=l)&&(t.__e=c,t.__h=!!s,l[l.indexOf(c)]=null),e.__e(n,t,o)}}function O(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function j(e,n,t,o,r,a,u,s){var f,p,_,d,h=t.props,m=n.props,y=n.type,b=0;if("svg"===y&&(r=!0),null!=a)for(;b<a.length;b++)if((f=a[b])&&(f===e||(y?f.localName==y:3==f.nodeType))){e=f,a[b]=null;break}if(null==e){if(null===y)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),a=null,s=!1}if(null===y)h===m||s&&e.data===m||(e.data=m);else{if(a=a&&l.slice.call(e.childNodes),p=(h=t.props||i).dangerouslySetInnerHTML,_=m.dangerouslySetInnerHTML,!s){if(null!=a)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||w(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||w(e,i,n[i],t[i],o)}(e,m,h,r,s),_)n.__k=[];else if(b=n.props.children,v(e,Array.isArray(b)?b:[b],n,t,o,r&&"foreignObject"!==y,a,u,e.firstChild,s),null!=a)for(b=a.length;b--;)null!=a[b]&&c(a[b]);s||("value"in m&&void 0!==(b=m.value)&&(b!==e.value||"progress"===y&&!b)&&w(e,"value",b,h.value,!1),"checked"in m&&void 0!==(b=m.checked)&&b!==e.checked&&w(e,"checked",b,h.checked,!1))}return e}function C(n,t,o){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,o)}}function R(n,t,o){var r,i,l;if(e.unmount&&e.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||C(r,null,t)),o||"function"==typeof n.type||(o=null!=(i=n.__e)),n.__e=n.__d=void 0,null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){e.__e(n,t)}r.base=r.__P=null}if(r=n.__k)for(l=0;l<r.length;l++)r[l]&&R(r[l],t,o);null!=i&&c(i)}function E(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e},__v:0},_.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},t),this.props)),e&&u(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},_.prototype.render=p,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var T=t(379),B=t.n(T),L=t(704),N=t.n(L);B()(N(),{insert:"head",singleton:!1}),N().locals;var M=t(798),D=t.n(M);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function W(e,n){return(W=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e,n){return!n||"object"!==U(n)&&"function"!=typeof n?G(e):n}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}B()(D(),{insert:"head",singleton:!1}),D().locals;var z=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&W(e,n)}(l,e);var n,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=H(o);if(r){var t=H(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return I(this,e)});function l(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),F(G(e=i.call(this)),"generateList",(function(){var n=[];chrome.storage.local.get("videos",(function(t){if(console.log("HERE"),null!=t.videos&&0!=t.videos.length){t.videos.length>=4&&e.setState({maxBarWidth:211,marginRight:7});for(var o=t.videos.length-1;!(o<0);o--)n.push(e.generateListElement(t.videos[o]))}e.setState({listReady:!0,listElements:n})}))})),F(G(e),"returnList",(function(){return s(p,null,e.state.listElements)})),F(G(e),"generateListElement",(function(n){return s("a",{className:"main-list-element",href:n.videolink,target:"_blank",title:n.title},s("img",{src:"https://img.youtube.com/vi/".concat($(n.videolink),"/default.jpg"),width:"120",height:"90"}),s("div",{className:"element-body"},s("info",null,s("videoTitle",{width:"".concat(e.state.titleWidth,"px")},n.title),s("subtext",null,n.channel)),s("div",{className:"time-display"},s("timeInfo",null,n.time<0?s("currentTime",null,"0:00"):s("currentTime",null,V(n.time)),s("duration",null,V(n.duration))),s("bar",{style:"width:".concat(Math.round(n.time/n.duration*e.state.maxBarWidth),"px")}))))})),e.state={listReady:!1,listElements:[],maxBarWidth:226,marginRight:0,titleWidth:188},e}return n=l,(t=[{key:"componentDidMount",value:function(){this.generateList()}},{key:"render",value:function(){if(this.state.listReady)return s("div",{className:"main-list",id:"main-list"},this.returnList(),s("style",{jsx:!0},"\n                        .main-list-element{\n                            margin-right:".concat(this.state.marginRight,"\n                        }  \n                    ")));s("div",null,"LOADING...")}}])&&A(n.prototype,t),l}(_);function V(e){var n=Math.floor(e),t=Math.floor(n/3600),o=Math.floor(n/60)%60,r=n%60;return 0==t?(o=o.toString())+":"+(r=r<10?"0"+r.toString():r.toString()):(t=t.toString())+":"+(o=o<10?"0"+o.toString():o.toString())+":"+(r=r<10?"0"+r.toString():r.toString())}function $(e){for(var n=0,t=0,o=0;o<e.length;o++)if("v"==e[o]&&"="==e[o+1])n=o+2;else{if("&"==e[o]){t=o;break}o==e.length-1&&(t=o+1)}var r=e.slice(n,t);return console.log("start: "+n+", end: "+t),console.log("extractWatchID:  "+r),r}function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,n){return(K=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function Q(e,n){return!n||"object"!==J(n)&&"function"!=typeof n?X(e):n}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&K(e,n)}(l,e);var n,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=Y(o);if(r){var t=Y(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Q(this,e)});function l(){var e,n,t,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),o=function(){new Promise((function(n){chrome.storage.local.set({settings:{pauseResume:!e.state.paused}})})).then(e.setState({paused:!e.state.paused}))},(t="handlePause")in(n=X(e=i.call(this)))?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,new Promise((function(e){chrome.storage.local.getBytesInUse("settings",(function(n){null!=n&&0!=n||chrome.storage.local.set({settings:{pauseResume:!1}}),e()}))})).then((function(){chrome.storage.local.get("settings",(function(n){e.state={paused:n.settings.pauseResume,settingsPage:!1}}))})),e}return n=l,(t=[{key:"render",value:function(){return s("div",{className:"HomeContainer"},s("div",{className:"header-bar"},s("h1",null,"Videos in progress"),s("button",{id:"Pause",onClick:this.handlePause},this.state.paused?"Pause":"Unpause"),s("button",{type:"button",id:"ClearListButton"}," Clear List ")),s(z,null),s("style",{jsx:!0},"\n                    {/* #Pause{\n                        display:flex;\n                        flex-direction:column;\n                        justify-content:center;\n                        align-items:center;\n                        background:none;\n                        background-color:transparent;\n                        border:none;\n                        height:25px;\n                        width:25px;\n                        margin-bottom:3px;\n                        font-size:20px;\n                        color:rgba(99, 99, 99, 0.781);\n                    }   \n                    #Pause:active{\n                        color:rgba(158, 158, 158, 0.781)\n                    } */}\n                "))}}])&&q(n.prototype,t),l}(_);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(e,n){return(te=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function oe(e,n){return!n||"object"!==ee(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&te(e,n)}(l,e);var n,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=re(o);if(r){var t=re(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return oe(this,e)});function l(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),i.call(this)}return n=l,(t=[{key:"render",value:function(){return s("div",{className:"AppContainer"},s(Z,null),s("style",{jsx:!0},"\n                    html{\n                        --scrollbarBG: /* #CFD8DC */transparent;\n                        --thumbBG: /* #90A4AE */#d3d3d3; \n                    }\n\n                    title{\n                        text-overflow: ellipsis;\n                        text-align: start;\n                    }\n\n                    body{\n                        /* min-width: 350px; */\n                        margin-top:0;   \n                        width:350px;\n                        min-height: 380px;\n                        background-color: #181818;\n                    }\n                "))}}])&&ne(n.prototype,t),l}(_);!function(n,t,o){var r,a,u;e.__&&e.__(n,t),a=(r="function"==typeof o)?null:o&&o.__k||t.__k,u=[],P(t,n=(!r&&o||t).__k=s(p,null,[n]),a||i,i,void 0!==t.ownerSVGElement,!r&&o?[o]:a?null:t.firstChild?l.slice.call(t.childNodes):null,u,!r&&o?o:a?a.__e:t.firstChild,r),O(u,n)}(s(ie,null),document.body)})()})();