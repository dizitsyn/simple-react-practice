(this["webpackJsonpsimple-react-practice"]=this["webpackJsonpsimple-react-practice"]||[]).push([[0],{14:function(e,o,t){"use strict";t.r(o);var r=t(1),c=t.n(r),l=t(4),n=t.n(l),a=t(5),i=t(6),s=t(8),b=t(7),u=t(2),j=t.n(u),C=t(0),v=function(e){Object(s.a)(t,e);var o=Object(b.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=o.call.apply(o,[this].concat(c))).state={activeColorIndx:0},e.activeColorStyle=function(o){var t=[j.a.colorItem];return o===e.state.activeColorIndx&&t.push(j.a.activeColor),t.join(" ")},e.setActiveColor=function(o){e.setState({activeColorIndx:o})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,o=this.state.activeColorIndx,t=this.props.colors,r=t[o].label;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Color Picker"}),Object(C.jsxs)("span",{children:["Color: ",r]}),Object(C.jsx)("ul",{className:j.a.colorList,children:t.map((function(o,t){var r=o.label,c=o.color;return Object(C.jsx)("li",{children:Object(C.jsx)("button",{style:{backgroundColor:c},className:e.activeColorStyle(t),onClick:function(){return e.setActiveColor(t)}})},r)}))})]})}}]),t}(r.Component),d=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],p=function(){return Object(C.jsx)(v,{colors:d})};n.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(p,{})}),document.getElementById("root"))},2:function(e,o,t){e.exports={colorList:"ColorPicker_colorList__WzOC-",colorItem:"ColorPicker_colorItem__HLyw3",activeColor:"ColorPicker_activeColor__1Qf1g"}}},[[14,1,2]]]);
//# sourceMappingURL=main.80354bf0.chunk.js.map