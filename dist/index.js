var r=require("@falconjs.io/falcon");var e=function(e){var t=e.span,o=e.offset,n=e.children,a=e.prefix;void 0===a&&(a="flcn-grid-col");var s=e.order,f=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&-1===e.indexOf(o)&&(t[o]=r[o]);return t}(e,["span","offset","children","prefix","order"]),i="flcn-col ";f.class&&(i=f.class+" ");return["xs","sm","md","lg","xl"].map(function(r){if(f[r]){var e={};"number"==typeof f[r]?e.span=f[r]:"object"==typeof f[r]&&(e=f[r]||{}),delete f[r],void 0!==e.span&&(i+=a+"-"+r+"-"+e.span+" "),(e.offset||0===e.offset)&&(i+=a+"-"+r+"-offset-"+e.offset+" "),(e.order||0===e.order)&&(i+=a+"-"+r+"-order-"+e.order)}}),t&&(i+=a+"-"+t+" "),o&&(i+=a+"-offset-"+o+" "),s&&(i+=a+"-order-"+s+" "),r.h("div",Object.assign({},f,{class:i}),n)};e.defaultProps={offset:0};module.exports={Col:e,Row:function(e){var t=e.justify;void 0===t&&(t="start");var o=e.vertical;void 0===o&&(o="top");var n=e.gutter;void 0===n&&(n=0);var a=e.style,s=e.children,f=e.prefix;void 0===f&&(f="flcn-grid-row");var i=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&-1===e.indexOf(o)&&(t[o]=r[o]);return t}(e,["justify","vertical","className","gutter","style","children","prefix"]),l="flcn-row ";l+=f+" ",l+=f+"-"+t+" "||t+" ",l+=f+"-"+o+" "||o+" ";var c=n>0?Object.assign({},{marginLeft:n/-2,marginRight:n/-2},a):a,d=s.map(function(r){return r?(r.props&&n>0&&(r.props.style={paddingLeft:n/2+"px",paddingRight:n/2+"px"}),r):null});return r.h("div",Object.assign({},i,{style:c,class:l}),d)}};
//# sourceMappingURL=index.js.map