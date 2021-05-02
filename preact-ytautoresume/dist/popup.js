(()=>{var n={704:(n,e,t)=>{(e=t(645)(!1)).push([n.id,"div.header-bar{\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n}\n\ndiv.header-bar /* #ClearListButton */button{\n    margin-bottom:5px;\n    border-radius: 10px;\n    border: none;\n    background-color: rgba(99, 99, 99, 0.781);\n    color: #ffffff;\n}\ndiv.header-bar button+button{\n    margin-left: 5px;\n}\ndiv.header-bar /* #ClearListButton */button:active{\n    background-color: rgba(158, 158, 158, 0.781);\n}\nh1{\n    margin-top:10px;\n    margin-bottom: 5px;\n    color: #ffffff;\n    /* border: 1px solid black; */\n}\n\n",""]),n.exports=e},798:(n,e,t)=>{(e=t(645)(!1)).push([n.id,".main-list{\n    /* background:red; */\n    border-top: 1px solid #aaaaaa;  \n    margin-right:0px;\n    padding-top: 2px;\n    max-width:350px;\n    max-height:380px;\n    display:block;\n    overflow: hidden;\n    overflow-y:auto;\n    /* scrollbar-width: thin;*/\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.main-list::-webkit-scrollbar {\n    /* background:red; */\n    width:8px;\n    margin-top:10px;\n}\n\n.main-list::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n    border-radius:3px;\n    margin-top:10px;\n}\n\n.main-list::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG) ;\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\n.main-list-element{\n    align-items: flex-start;\n    display:flex;\n    margin-top: 8px;\n    margin-bottom:8px;\n    min-width: 200px;\n    height:90px;\n    border: 2px solid #aaaaaa;\n    border-radius: 5px;\n}\n\n.main-list-element img{\n    line-height:3px;\n}\n\n.main-list-element div.element-body{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height:90px;\n    min-width:65.2%;\n}\n\n.main-list-element div.element-body info{\n    flex-direction: column;\n    align-items: flex-start;\n\n}\n\n.main-list-element div.element-body info videoTitle{\n    \n    \n    vertical-align:top;\n    margin-top:6px;\n    margin-left: 6px;\n    font-size: 13px;\n    font-weight:500;\n    max-width:188px; \n\n\n    display:-webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n    overflow: hidden;\n}\n.main-list-element div.element-body info subtext{\n\n    display: inline-block;\n    text-decoration: underline;\n    vertical-align:top;\n    margin-top:3px;\n    margin-left: 6px;\n    margin-bottom:0px;\n    color: #ffffff;\n    font-size: 11px;\n    max-width:210px;\n    max-height: 19px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.main-list-element div.time-display{\n    display:flex;\n    flex-direction:column;\n    justify-content: flex-end;\n    height:30px;\n    vertical-align:bottom;\n    \n}\n.main-list-element div.element-body timeInfo{\n    display:flex;\n    justify-content:space-between;\n    margin-left: 6px;\n    margin-right:6px;\n    padding-right: 6px;\n    margin-top:3px;\n    margin-bottom: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 13px;\n    color: #ffffff;                        \n}\n.main-list a{\n    text-decoration: none;\n    color: #ffffff;\n}\n.main-list a:visited{\n    text-decoration:none;\n}\n.main-list a:hover{\n    color: #cfcfcf;\n}\n.main-list a:active{\n    color: #8d8d8d;\n}\n\n.main-list-element div.element-body bar{\n    background: red;\n\n    margin-top:4px;\n    display: inline-block;\n    height:3px;\n    max-width:226px;\n\n}",""]),n.exports=e},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,o,r,i=n[1]||"",l=n[3];if(!l)return i;if(e&&"function"==typeof btoa){var a=(t=l,o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),u=l.sources.map((function(n){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(n," */")}));return[i].concat(u).concat([a]).join("\n")}return[i].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},379:(n,e,t)=>{"use strict";var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function l(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],u=e.base?a[0]+e.base:a[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var f=l(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:h(p,e),references:1}),o.push(s)}return o}function u(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var l=r(n.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var c,s=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),l=n.childNodes;l[e]&&n.removeChild(l[e]),l.length?n.insertBefore(i,l[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var d=null,_=0;function h(n,e){var t,o,r;if(e.singleton){var i=_++;t=d||(d=u(e)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=u(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var u=a(n,e),c=0;c<t.length;c++){var s=l(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=u}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n,e,o,r,i={},l=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(n,e){for(var t in e)n[t]=e[t];return n}function c(n){var e=n.parentNode;e&&e.removeChild(n)}function s(n,e,t){var o,r,i,l=arguments,a={};for(i in e)"key"==i?o=e[i]:"ref"==i?r=e[i]:a[i]=e[i];if(arguments.length>3)for(t=[t],i=3;i<arguments.length;i++)t.push(l[i]);if(null!=t&&(a.children=t),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===a[i]&&(a[i]=n.defaultProps[i]);return f(n,a,o,r,null)}function f(e,t,o,r,i){var l={type:e,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++n.__v:i};return null!=n.vnode&&n.vnode(l),l}function p(n){return n.children}function d(n,e){this.props=n,this.context=e}function _(n,e){if(null==e)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?_(n):null}function h(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return h(n)}}function m(t){(!t.__d&&(t.__d=!0)&&e.push(t)&&!y.__r++||r!==n.debounceRendering)&&((r=n.debounceRendering)||o)(y)}function y(){for(var n;y.__r=e.length;)n=e.sort((function(n,e){return n.__v.__b-e.__v.__b})),e=[],n.some((function(n){var e,t,o,r,i,l;n.__d&&(i=(r=(e=n).__v).__e,(l=e.__P)&&(t=[],(o=u({},r)).__v=r.__v+1,O(l,r,o,e.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?_(r):i,r.__h),P(t,r),r.__e!=i&&h(r)))}))}function b(n,e,t,o,r,a,u,c,s,d){var h,m,y,b,x,w,k,S=o&&o.__k||l,P=S.length;for(t.__k=[],h=0;h<e.length;h++)if(null!=(b=t.__k[h]=null==(b=e[h])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?f(null,b,null,null,b):Array.isArray(b)?f(p,{children:b},null,null,null):b.__b>0?f(b.type,b.props,b.key,null,b.__v):b)){if(b.__=t,b.__b=t.__b+1,null===(y=S[h])||y&&b.key==y.key&&b.type===y.type)S[h]=void 0;else for(m=0;m<P;m++){if((y=S[m])&&b.key==y.key&&b.type===y.type){S[m]=void 0;break}y=null}O(n,b,y=y||i,r,a,u,c,s,d),x=b.__e,(m=b.ref)&&y.ref!=m&&(k||(k=[]),y.ref&&k.push(y.ref,null,b),k.push(m,b.__c||x,b)),null!=x?(null==w&&(w=x),"function"==typeof b.type&&null!=b.__k&&b.__k===y.__k?b.__d=s=v(b,s,n):s=g(n,b,y,S,x,s),d||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):n.value=""):s&&y.__e==s&&s.parentNode!=n&&(s=_(y))}for(t.__e=w,h=P;h--;)null!=S[h]&&("function"==typeof t.type&&null!=S[h].__e&&S[h].__e==t.__d&&(t.__d=_(o,h+1)),C(S[h],S[h]));if(k)for(h=0;h<k.length;h++)R(k[h],k[++h],k[++h])}function v(n,e,t){var o,r;for(o=0;o<n.__k.length;o++)(r=n.__k[o])&&(r.__=n,e="function"==typeof r.type?v(r,e,t):g(t,r,r,n.__k,r.__e,e));return e}function g(n,e,t,o,r,i){var l,a,u;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==t||r!=i||null==r.parentNode)n:if(null==i||i.parentNode!==n)n.appendChild(r),l=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<o.length;u+=2)if(a==r)break n;n.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function x(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||a.test(e)?t:t+"px"}function w(n,e,t,o,r){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof o&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||x(n.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||x(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o||n.addEventListener(e,i?S:k,i):n.removeEventListener(e,i?S:k,i);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null!=t&&(!1!==t||"a"===e[0]&&"r"===e[1])?n.setAttribute(e,t):n.removeAttribute(e))}}function k(e){this.l[e.type+!1](n.event?n.event(e):e)}function S(e){this.l[e.type+!0](n.event?n.event(e):e)}function O(e,t,o,r,i,l,a,c,s){var f,_,h,m,y,v,g,x,w,k,S,O=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(s=o.__h,c=t.__e=o.__e,t.__h=null,l=[c]),(f=n.__b)&&f(t);try{n:if("function"==typeof O){if(x=t.props,w=(f=O.contextType)&&r[f.__c],k=f?w?w.props.value:f.__:r,o.__c?g=(_=t.__c=o.__c).__=_.__E:("prototype"in O&&O.prototype.render?t.__c=_=new O(x,k):(t.__c=_=new d(x,k),_.constructor=O,_.render=E),w&&w.sub(_),_.props=x,_.state||(_.state={}),_.context=k,_.__n=r,h=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=O.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=u({},_.__s)),u(_.__s,O.getDerivedStateFromProps(x,_.__s))),m=_.props,y=_.state,h)null==O.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==O.getDerivedStateFromProps&&x!==m&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(x,k),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(x,_.__s,k)||t.__v===o.__v){_.props=x,_.state=_.__s,t.__v!==o.__v&&(_.__d=!1),_.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(n){n&&(n.__=t)})),_.__h.length&&a.push(_);break n}null!=_.componentWillUpdate&&_.componentWillUpdate(x,_.__s,k),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(m,y,v)}))}_.context=k,_.props=x,_.state=_.__s,(f=n.__r)&&f(t),_.__d=!1,_.__v=t,_.__P=e,f=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(r=u(u({},r),_.getChildContext())),h||null==_.getSnapshotBeforeUpdate||(v=_.getSnapshotBeforeUpdate(m,y)),S=null!=f&&f.type===p&&null==f.key?f.props.children:f,b(e,Array.isArray(S)?S:[S],t,o,r,i,l,a,c,s),_.base=t.__e,t.__h=null,_.__h.length&&a.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=j(o.__e,t,o,r,i,l,a,s);(f=n.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=c,t.__h=!!s,l[l.indexOf(c)]=null),n.__e(e,t,o)}}function P(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(n){n.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function j(n,e,t,o,r,a,u,s){var f,p,d,_,h=t.props,m=e.props,y=e.type,v=0;if("svg"===y&&(r=!0),null!=a)for(;v<a.length;v++)if((f=a[v])&&(f===n||(y?f.localName==y:3==f.nodeType))){n=f,a[v]=null;break}if(null==n){if(null===y)return document.createTextNode(m);n=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),a=null,s=!1}if(null===y)h===m||s&&n.data===m||(n.data=m);else{if(a=a&&l.slice.call(n.childNodes),p=(h=t.props||i).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!s){if(null!=a)for(h={},_=0;_<n.attributes.length;_++)h[n.attributes[_].name]=n.attributes[_].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===n.innerHTML)||(n.innerHTML=d&&d.__html||""))}if(function(n,e,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in e||w(n,i,null,t[i],o);for(i in e)r&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===e[i]||w(n,i,e[i],t[i],o)}(n,m,h,r,s),d)e.__k=[];else if(v=e.props.children,b(n,Array.isArray(v)?v:[v],e,t,o,r&&"foreignObject"!==y,a,u,n.firstChild,s),null!=a)for(v=a.length;v--;)null!=a[v]&&c(a[v]);s||("value"in m&&void 0!==(v=m.value)&&(v!==n.value||"progress"===y&&!v)&&w(n,"value",v,h.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==n.checked&&w(n,"checked",v,h.checked,!1))}return n}function R(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function C(e,t,o){var r,i,l;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||R(r,null,t)),o||"function"==typeof e.type||(o=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&C(r[l],t,o);null!=i&&c(i)}function E(n,e,t){return this.constructor(n,t)}n={__e:function(n,e){for(var t,o,r;e=e.__;)if((t=e.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n),r=t.__d),r)return t.__E=t}catch(e){n=e}throw n},__v:0},d.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof n&&(n=n(u({},t),this.props)),n&&u(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),m(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},d.prototype.render=p,e=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var T=t(379),B=t.n(T),N=t(704),M=t.n(N);B()(M(),{insert:"head",singleton:!1}),M().locals;var L=t(798),I=t.n(L);function D(n){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function U(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function A(n,e){return(A=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function W(n,e){return!e||"object"!==D(e)&&"function"!=typeof e?G(n):e}function G(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function H(n){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function F(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}B()(I(),{insert:"head",singleton:!1}),I().locals;var V=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&A(n,e)}(l,n);var e,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=H(o);if(r){var t=H(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return W(this,n)});function l(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),F(G(n=i.call(this)),"generateList",(function(){var e=[];return new Promise((function(t){chrome.storage.local.get("videos",(function(o){if(console.log("HERE"),null!=o.videos&&0!=o.videos.length)if(o.videos.length>=4)console.log("videos length greater than 4"),n.setState({maxBarWidth:211,marginRight:7},(function(){for(var r=o.videos.length-1;!(r<0);r--)e.push(n.generateListElement(o.videos[r]));t(e)}));else{for(var r=o.videos.length-1;!(r<0);r--)e.push(n.generateListElement(o.videos[r]));t(e)}}))}))})),F(G(n),"returnList",(function(){return s(p,null,n.state.listElements)})),F(G(n),"generateListElement",(function(e){return console.log("MARGIN-RIGHT:"+n.state.marginRight),s("a",{className:"main-list-element",href:e.videolink,target:"_blank",title:e.title,style:"margin-right: ".concat(n.state.marginRight,"px;")},s("img",{src:"https://img.youtube.com/vi/".concat($(e.videolink),"/default.jpg"),width:"120",height:"90"}),s("div",{className:"element-body"},s("info",null,s("videoTitle",{width:"".concat(n.state.titleWidth,"px")},e.title),s("subtext",null,e.channel)),s("div",{className:"time-display"},s("timeInfo",null,e.time<0?s("currentTime",null,"0:00"):s("currentTime",null,z(e.time)),s("duration",null,z(e.duration))),s("bar",{style:"width:".concat(Math.round(e.time/e.duration*n.state.maxBarWidth),"px")}))))})),n.state={listReady:!1,listElements:[],maxBarWidth:226,marginRight:0,titleWidth:188},n}return e=l,(t=[{key:"componentDidMount",value:function(){var n=this;this.generateList().then((function(e){n.setState({listReady:!0,listElements:e})}))}},{key:"render",value:function(){if(this.state.listReady)return s("div",{className:"main-list",id:"main-list"},this.returnList(),s("style",{jsx:!0},"\n                        .main-list-element{\n                            margin-right:".concat(this.state.marginRight,"\n                        }  \n                    ")));s("div",null,"LOADING...")}}])&&U(e.prototype,t),l}(d);function z(n){var e=Math.floor(n),t=Math.floor(e/3600),o=Math.floor(e/60)%60,r=e%60;return 0==t?(o=o.toString())+":"+(r=r<10?"0"+r.toString():r.toString()):(t=t.toString())+":"+(o=o<10?"0"+o.toString():o.toString())+":"+(r=r<10?"0"+r.toString():r.toString())}function $(n){for(var e=0,t=0,o=0;o<n.length;o++)if("v"==n[o]&&"="==n[o+1])e=o+2;else{if("&"==n[o]){t=o;break}o==n.length-1&&(t=o+1)}var r=n.slice(e,t);return console.log("start: "+e+", end: "+t),console.log("extractWatchID:  "+r),r}function J(n){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Y(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function q(n,e){return(q=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function K(n,e){return!e||"object"!==J(e)&&"function"!=typeof e?Q(n):e}function Q(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function X(n){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var Z=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&q(n,e)}(l,n);var e,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=X(o);if(r){var t=X(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return K(this,n)});function l(){var n,e,t,o;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),o=function(){n.setState({goBack:!0})},(t="goBack")in(e=Q(n=i.call(this)))?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,n.state={goBack:!1},n}return e=l,(t=[{key:"render",value:function(){return this.state.goBack?s(un,null):s("div",{className:"SettingsContainer"},s("div",{className:"header-bar"},s("h1",null,"Settings"),s("button",{id:"backButton",onClick:this.goBack},s("i",{class:"fa fa-chevron-left"}))),s("form",{className:"SettingsPanel"},s("div",{className:"Setting MinVideoLength"},s("label",{for:"MinVideoLengthInput"},"Only resume videos longer than: "),s("div",{className:"MinVideoLength InputContainer"},s("input",{type:"number",name:"MinVideoLengthInput",id:"MinVideoLengthInput"})," minutes"))),s("style",{jsx:!0},"\n                        .fa-chevron-left{\n                            color:#ffffff;\n                        }\n                        .SettingsContainer{\n                            display:block;\n                            max-width:350px;\n                            min-height:430px;\n                        }\n                        div.header-bar{\n                            display: flex;\n                            flex-direction: row;\n                            align-items: flex-end;\n                            flex-wrap: nowrap;\n                            justify-content: space-between;\n                            border-bottom: 1px solid #aaaaaa;  \n                            vertical-align: middle;\n                            text-align: center;\n                        }\n                        div.header-bar button{\n                            font-size:20px;\n                            margin-bottom:5px;\n                            border-radius: 10px;\n                            border: none;\n                            color: #ffffff;\n                            background-color: transparent;\n                            {/* background-color: rgba(99, 99, 99, 0.781); */}\n                        }\n                        div.header-bar button:active{\n                            background-color: rgba(158, 158, 158, 0.781);\n                        }\n                        h1{\n                            margin-top:10px;\n                            margin-bottom: 5px;\n                            color: #ffffff;\n                            /* border: 1px solid black; */\n                        }\n                        .SettingsPanel{\n                            margin-top:10px;\n                        }\n                        .Setting {\n                            display: flex;\n                            flex-direction:row;\n                            justify-content:space-between;\n                            align-items:center;\n                            color: #ffffff;\n                            font-size:15px;\n                        }\n                        .InputContainer{\n                            display:inline-flex;\n                            justify-content:flex-end;\n                            align-items:center;\n                            flex-direction:row;\n                            max-width:50%;\n                        }\n                        #MinVideoLengthInput{\n                            width:40%;\n                            height:50%;\n                            margin-right:3px;\n                        }\n                    "))}}])&&Y(e.prototype,t),l}(d);function nn(n){return(nn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function en(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function tn(n,e){return(tn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function on(n,e){return!e||"object"!==nn(e)&&"function"!=typeof e?rn(n):e}function rn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ln(n){return(ln=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function an(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var un=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&tn(n,e)}(l,n);var e,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=ln(o);if(r){var t=ln(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return on(this,n)});function l(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),an(rn(n=i.call(this)),"moveToSettingsPage",(function(){n.setState({settingsPage:!0})})),an(rn(n),"handlePause",(function(){var e;e=0==n.state.paused,chrome.storage.local.set({settings:{pauseResume:e}},(function(){n.setState({paused:e})}))})),n.state={dataReady:!1,settingsPage:!1,paused:!1},n}return e=l,(t=[{key:"componentDidMount",value:function(){var n=this;new Promise((function(n){chrome.storage.local.getBytesInUse("settings",(function(e){console.log("INIT SETTINGS DB"),null==e||0==e?(console.log("BYTES==0 OR UNDEFINED"),chrome.storage.local.set({settings:{pauseResume:!1}},(function(){n()}))):(console.log("BYTES!=0"),n())}))})).then((function(){chrome.storage.local.get("settings",(function(e){console.log("in constructor, data.settings.pauseResume = "+e.settings.pauseResume),n.setState({paused:e.settings.pauseResume,dataReady:!0})}))}))}},{key:"render",value:function(){var n,e=this.state.paused,t=this.state.settingsPage;return console.log(e),n=e?"Unpause":"Pause",this.state.dataReady?t?s(Z,null):s("div",{className:"HomeContainer"},s("div",{className:"header-bar"},s("h1",null,"Videos in progress"),s("div",{className:"button-container"},s("button",{id:"Pause",onClick:this.handlePause},n),s("button",{type:"button",id:"Settings",onClick:this.moveToSettingsPage},"Settings"))),s(V,null)):null}}])&&en(e.prototype,t),l}(d);function cn(n){return(cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function sn(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function fn(n,e){return(fn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function pn(n,e){return!e||"object"!==cn(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function dn(n){return(dn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var _n=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&fn(n,e)}(l,n);var e,t,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=dn(o);if(r){var t=dn(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return pn(this,n)});function l(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),i.call(this)}return e=l,(t=[{key:"render",value:function(){return s("div",{className:"AppContainer"},s(un,null),s("style",{jsx:!0},"\n                    html{\n                        --scrollbarBG: /* #CFD8DC */transparent;\n                        --thumbBG: /* #90A4AE */#d3d3d3; \n                    }\n\n                    title{\n                        text-overflow: ellipsis;\n                        text-align: start;\n                    }\n\n                    body{\n                        /* min-width: 350px; */\n                        margin-top:0;   \n                        width:350px;\n                        /*min-height: 380px;*/\n                        min-height:430px;\n                        background-color: #181818;\n                    }\n                "))}}])&&sn(e.prototype,t),l}(d);!function(e,t,o){var r,a,u;n.__&&n.__(e,t),a=(r="function"==typeof o)?null:o&&o.__k||t.__k,u=[],O(t,e=(!r&&o||t).__k=s(p,null,[e]),a||i,i,void 0!==t.ownerSVGElement,!r&&o?[o]:a?null:t.firstChild?l.slice.call(t.childNodes):null,u,!r&&o?o:a?a.__e:t.firstChild,r),P(u,e)}(s(_n,null),document.body)})()})();