(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),i=n(6860),a=n(379),o=n(8206);e.exports=function(e){return r(e)||i(e)||a(e)||o()}},1234:function(e,t,n){"use strict";var r=n(5893);t.Z=function(){return(0,r.jsxs)("nav",{className:"fixed z-20 w-full h-20 bg-opacity-100 select-none md:flex md:justify-between",children:[(0,r.jsx)("div",{className:"flex mx-8 my-auto text-white",children:"LOGO comes here"}),(0,r.jsxs)("div",{className:"justify-between my-auto text-white md:mx-8 md:flex",children:[(0,r.jsx)("div",{className:"md:mx-4 ",children:"Home."}),(0,r.jsx)("div",{className:"md:mx-4 nav",children:"Projects."}),(0,r.jsx)("div",{className:"md:mx-4",children:"Teams."}),(0,r.jsx)("div",{className:"md:mx-4",children:"About."}),(0,r.jsx)("div",{className:"md:mx-4",children:"Contact."})]})]})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},2775:function(e,t,n){"use strict";var r=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(3244))&&a.__esModule?a:{default:a},s=n(3398),u=n(1165),d=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var d=h[s];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var l=i.props[d],f=r[d]||new Set;"name"===d&&o||!f.has(l)?(f.add(l),r[d]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=m},3244:function(e,t,n){"use strict";var r=n(319),i=n(4575),a=n(3913),o=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){o(n,e);var t=u(n);function n(e){var a;return i(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},5730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(9008),a=n(1234),o=function(){return(0,r.jsxs)("div",{className:"text-white w-2/3 mx-auto text-center my-40 text-4xl",children:["MEET OUR MENTORS",(0,r.jsxs)("div",{className:"grid grid-cols-3 my-16 gap-4",children:[(0,r.jsx)("div",{children:"1"}),(0,r.jsx)("div",{children:"2"}),(0,r.jsx)("div",{children:"3"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-4 gap-4",children:[(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"}),(0,r.jsx)("div",{children:"4"})]})]})};function c(){return(0,r.jsxs)("div",{className:"w-screen bg-black bg-cover body",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Criss Robotics"}),(0,r.jsx)("meta",{name:"description",content:"Space Engineering|BITS PIlani"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(o,{})]})}},5559:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Mentors",function(){return n(5730)}])},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=5559,e(e.s=t);var t}));var t=e.O();_N_E=t}]);