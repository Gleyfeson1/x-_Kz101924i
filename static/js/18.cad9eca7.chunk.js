(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[18],{167:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),l=t(11),i=t(10),c=t(0),s=t.n(c),o=t(67),d=t(60),m=t(21),u=t(55),p=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement(o.a,null,s.a.createElement(d.a,null,s.a.createElement(u.a,{title:"Hello Card",isOption:!0},s.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')))))}}]),t}(c.Component);a.default=p},55:function(e,a,t){"use strict";var n=t(17),r=t(8),l=t(9),i=t(11),c=t(10),s=t(0),o=t.n(s),d=t(94),m=t(70),u=t(181),p=t(53),h=t.n(p),f=t(21),E=t(50),C=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(l.a)(t,[{key:"render",value:function(){var e,a,t,r,l,i=this,c=[];return this.state.isOption&&(t=o.a.createElement("div",{className:"card-header-right"},o.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},o.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},o.a.createElement("i",{className:"feather icon-more-horizontal"})),o.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){i.setState((function(e){return{fullCard:!e.fullCard}}))}},o.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),o.a.createElement("a",{href:E.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){i.setState((function(e){return{collapseCard:!e.collapseCard}}))}},o.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),o.a.createElement("a",{href:E.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},o.a.createElement("i",{className:"feather icon-refresh-cw"}),o.a.createElement("a",{href:E.a.BLANK_LINK}," Reload ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},o.a.createElement("i",{className:"feather icon-trash"}),o.a.createElement("a",{href:E.a.BLANK_LINK}," Remove ")))))),r=o.a.createElement(m.a.Header,null,o.a.createElement(m.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(c=[].concat(Object(n.a)(c),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[].concat(Object(n.a)(c),["card-load"]),a=o.a.createElement("div",{className:"card-loader"},o.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[].concat(Object(n.a)(c),["d-none"])),this.props.cardClass&&(c=[].concat(Object(n.a)(c),[this.props.cardClass])),l=o.a.createElement(m.a,{className:c.join(" "),style:e},r,o.a.createElement(u.a,{in:!this.state.collapseCard},o.a.createElement("div",null,o.a.createElement(m.a.Body,null,this.props.children))),a),o.a.createElement(f.a,null,l)}}]),t}(s.Component);a.a=h()(C)}}]);
//# sourceMappingURL=18.cad9eca7.chunk.js.map