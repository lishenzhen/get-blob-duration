"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(u,o){try{var i=t[u](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}("next")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.createElement("video"),r=new Promise(function(e){return n.addEventListener("loadedmetadata",function(){n.duration===1/0?(n.currentTime=Number.MAX_SAFE_INTEGER,n.ontimeupdate=function(){n.ontimeupdate=null,e(n.duration),n.currentTime=0}):e(n.duration)})}),n.src=window.URL.createObjectURL(t),e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();
//# sourceMappingURL=getBlobDuration.js.map
