(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=n(r(196)),a=n(r(218)),i=n(r(7)),u=n(r(57)),l=n(r(58)),c=n(r(4)),s=n(r(0)),f=r(23),p=r(143);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/alberta-unofficial-statistics/"+e)}var T={activeClassName:c.default.string,activeStyle:c.default.object},E=function(e){function t(t){var r;r=e.call(this,t)||this,(0,l.default)((0,u.default)((0,u.default)(r)),"defaultGetProps",function(e){return e.isCurrent?{className:[r.props.className,r.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},r.props.style,r.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),r.state={IOSupported:n},r.handleRef=r.handleRef.bind((0,u.default)((0,u.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},r.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},r.handleRef=function(e){var t,r,n,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,r=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())})})).observe(t))},r.render=function(){var e=this,t=this.props,r=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,u=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),T=t.replace,E=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var h=d(r);return s.default.createElement(f.Link,(0,a.default)({to:h,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(r).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(r,{state:c,replace:T})),!0}},E))},t}(s.default.Component);E.propTypes=(0,a.default)({},T,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var h=s.default.forwardRef(function(e,t){return s.default.createElement(E,(0,a.default)({innerRef:t},e))});t.default=h;var y=function(e,t){window.___navigate(d(e),t)};t.navigate=y;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},170:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r(0)),i=f(r(4)),u=f(r(220)),l=f(r(222)),c=r(225),s=r(198);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var d,T,E,h=(0,u.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)(function(){return null}),y=(d=h,E=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,a=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},a,((t={})[o.type]=u,t.titleAttributes=n({},i),t));case s.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},i)});case s.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},i)})}return n({},a,((r={})[o.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach(function(t){var o;r=n({},r,((o={})[t]=e[t],o))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),u=(0,c.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:u,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=d.peek,T.rewind=function(){var e=d.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},174:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(0),i=(n=a)&&n.__esModule?n:{default:n},u=r(219);var l={left:[u.RibbonStyle.leftStyle,u.RibbonStyleWrapper.leftStyle],right:[u.RibbonStyle.rightStyle,u.RibbonStyleWrapper.rightStyle],"left-bottom":[u.RibbonStyle.leftBottomStyle,u.RibbonStyleWrapper.leftBottomStyle],"right-bottom":[u.RibbonStyle.rightBottomStyle,u.RibbonStyleWrapper.rightBottomStyle]},c={red:u.RibbonStyle.redColor,orange:u.RibbonStyle.orangeColor,black:u.RibbonStyle.blackColor,green:u.RibbonStyle.greenColor};t.default=e.RibbonStyle=function(e){var t=e.position,r=void 0===t?"right":t,n=e.href,a=e.target,s=e.color,f=void 0===s?"red":s,p=e.className,d=void 0===p?"":p,T=e.children,E=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["position","href","target","color","className","children"]),h=l[r]||[u.RibbonStyle.rightStyle,u.RibbonStyleWrapper.rightStyle],y=c[f]||u.RibbonStyle.redColor;h[0]===u.RibbonStyle.rightStyle&&(r="right");var b=o({},u.RibbonStyle.baseStyle,h[0],y),A=o({},u.RibbonStyleWrapper.baseStyle,h[1]);return i.default.createElement("div",o({},E,{className:"github-fork-ribbon-wrapper "+r+" "+d,style:A}),i.default.createElement("div",{className:"github-fork-ribbon",style:b},i.default.createElement("a",{href:n,target:a,style:u.RibbonStyle.urlStyle,rel:"noopener"},T)))}}).call(this,r(76))},196:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},197:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(!1===(o=r?r.call(n,s,f,c):void 0)||void 0===o&&s!==f)return!1}return!0}},198:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},218:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RibbonStyle={baseStyle:{position:"absolute",padding:"2px 0",backgroundColor:"#a00",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))",WebkitBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",MozBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",boxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",font:'700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',zIndex:"9999",pointerEvents:"auto"},urlStyle:{color:"#fff",textDecoration:"none",textShadow:"0 -1px rgba(0, 0, 0, 0.5)",textAlign:"center",width:"200px",lineHeight:"20px",display:"inline-block",padding:"2px 0",borderWidth:"1px 0",borderStyle:"dashed",borderColor:"rgba(255, 255, 255, 0.7)"},redColor:{backgroundColor:"#a00"},orangeColor:{backgroundColor:"#f80"},blackColor:{backgroundColor:"#333"},greenColor:{backgroundColor:"#090"},leftStyle:{top:"42px",left:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"},rightStyle:{top:"42px",right:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},leftBottomStyle:{top:"80px",left:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},rightBottomStyle:{top:"80px",right:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"}},t.RibbonStyleWrapper={baseStyle:{width:"150px",height:"150px",position:"absolute",overflow:"hidden",top:0,zIndex:"9999",pointerEvents:"none"},fixedStyle:{position:"fixed"},leftStyle:{left:0},rightStyle:{right:0},leftBottomStyle:{position:"fixed",top:"inherit",bottom:0,left:0},rightBottomStyle:{position:"fixed",top:"inherit",bottom:0,right:0}}},220:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(0),a=n(o),i=n(r(221)),u=n(r(197));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l=[],c=void 0;function s(){c=e(l.map(function(e){return e.props})),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return c},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},t.prototype.render=function(){return a.createElement(n,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=i.canUseDOM,f}}},221:function(e,t,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},222:function(e,t,r){var n=Array.prototype.slice,o=r(223),a=r(224),i=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:function(e,t,r){var c,s;if(u(e)||u(t))return!1;if(e.prototype!==t.prototype)return!1;if(a(e))return!!a(t)&&(e=n.call(e),t=n.call(t),i(e,t,r));if(l(e)){if(!l(t))return!1;if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}try{var f=o(e),p=o(t)}catch(d){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),c=f.length-1;c>=0;c--)if(f[c]!=p[c])return!1;for(c=f.length-1;c>=0;c--)if(s=f[c],!i(e[s],t[s],r))return!1;return typeof e==typeof t}(e,t,r))};function u(e){return null==e}function l(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},223:function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}(e.exports="function"==typeof Object.keys?Object.keys:r).shim=r},224:function(e,t){var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=r?n:o).supported=n,t.unsupported=o},225:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(0)),i=l(r(54)),u=r(198);function l(e){return e&&e.__esModule?e:{default:e}}var c,s=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,u.TAG_NAMES.TITLE),r=h(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return h(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t},[])},E=function(e,t,r){var o={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&m("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var n={};r.filter(function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||r===u.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===u.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==u.TAG_PROPERTIES.INNER_HTML&&l!==u.TAG_PROPERTIES.CSS_TEXT&&l!==u.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(n),l=0;l<a.length;l++){var c=a[l],s=(0,i.default)({},o[c],n[c]);o[c]=s}return e},[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},y=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout(function(){y(e)},0)}),b=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,m=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;O(u.TAG_NAMES.BODY,n),O(u.TAG_NAMES.HTML,o),R(p,d);var T={baseTag:P(u.TAG_NAMES.BASE,r),linkTags:P(u.TAG_NAMES.LINK,a),metaTags:P(u.TAG_NAMES.META,i),noscriptTags:P(u.TAG_NAMES.NOSCRIPT,l),scriptTags:P(u.TAG_NAMES.SCRIPT,s),styleTags:P(u.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)}),t&&t(),c(e,E,h)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=a.indexOf(c);-1!==f&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)r.removeAttribute(a[p]);o.length===a.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,r.isEqualNode(e)})?o.splice(i,1):a.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:a}},w=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[u.REACT_TAG_MAP[r]||r]=e[r],t},t)},C=function(e,t,r){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[u.HELMET_ATTRIBUTE]=!0,o=M(r,n),[a.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=w(r),a=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,n)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,o=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=u.REACT_TAG_MAP[e]||e;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]}),a.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+s(n[t],r)+'"';return e?e+" "+o:o},""),a=n.innerHTML||n.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[u.HTML_TAG_MAP[r]||r]=e[r],t},t)},t.handleClientStateChange=function(e){g&&S(g),e.defer?g=A(function(){v(e,function(){g=null})}):(v(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,n),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,n),link:C(u.TAG_NAMES.LINK,a,n),meta:C(u.TAG_NAMES.META,i,n),noscript:C(u.TAG_NAMES.NOSCRIPT,l,n),script:C(u.TAG_NAMES.SCRIPT,c,n),style:C(u.TAG_NAMES.STYLE,s,n),title:C(u.TAG_NAMES.TITLE,{title:p,titleAttributes:d},n)}},t.reducePropsToState=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:d(u.ATTRIBUTE_NAMES.BODY,e),defer:h(e,u.HELMET_PROPS.DEFER),encode:h(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=m}).call(this,r(76))}}]);
//# sourceMappingURL=0-77408169d9437472eb11.js.map