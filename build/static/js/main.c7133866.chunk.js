(this.webpackJsonpmodulo5=this.webpackJsonpmodulo5||[]).push([[0],{44:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(35),i=t.n(o),c=t(12),s=t(9),l=t(6),u=t.n(l),p=t(41),d=t(10),f=t(17),m=t(18),b=t(20),g=t(19),x=t(21),h=t(13),v=t(36),y=t.n(v).a.create({baseURL:"https://api.github.com"}),E=t(2),j=t(3);function w(){var n=Object(E.a)(["\n    max-width: 700px;\n    background-color: #FFF;\n    padding: 30px;\n    border-radius: 4px;\n    box-shadow: rgba(0,0,0,0.1);\n    margin: 80px auto;\n\n    h1 {\n        font-size: 20px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        svg {\n            margin-right: 10px;\n        }\n    }\n"]);return w=function(){return n},n}var O=j.c.div(w());function k(){var n=Object(E.a)(["\n    list-style: none;\n    margin-top: 30px;\n\n    li {\n        padding: 15px 0;\n        display: flex;\n        flex-direction: row;\n        justify-content:space-between;\n\n    & + li {\n        border-top: 1px solid #eee;\n    }\n\n        a {\n            color: '#7159c1';\n            text-decoration: none;\n        }\n    }\n"]);return k=function(){return n},n}function F(){var n=Object(E.a)(["\n        svg {\n            animation: "," 2s linear infinite;\n        }\n    "]);return F=function(){return n},n}function S(){var n=Object(E.a)(["\n    background: #7159c1;\n    border: 0;\n    padding: 0 15px;\n    margin-left: 10px;\n    border-radius: 4px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &[disabled] {\n        cursor: not-allowed;\n        opacity: 0.6;\n    }\n\n    ","\n"]);return S=function(){return n},n}function z(){var n=Object(E.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n"]);return z=function(){return n},n}function I(){var n=Object(E.a)(["\n    margin-top: 30px;\n    display: flex;\n    flex-direction: row;\n\n    input {\n        flex: 1;\n        border: 1px solid ",";\n        padding: 10px 15px;\n        border-radius: 4px;\n        font-size: 16px;\n\n        transition: border 0.25s ease-out;\n    }\n"]);return I=function(){return n},n}var C=j.c.form(I(),(function(n){return n.error?"#ff6b6b":"#eee"})),R=Object(j.d)(z()),_=j.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(S(),(function(n){return n.loading&&Object(j.b)(F(),R)})),A=j.c.ul(k()),D=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={newRepo:"",repositories:[],loading:!1,error:null},t.handleInputChange=function(n){t.setState({newRepo:n.target.value})},t.handleSubmit=function(){var n=Object(d.a)(u.a.mark((function n(e){var r,a,o,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.setState({loading:!0,error:!1}),n.prev=2,r=t.state,a=r.newRepo,o=r.repositories,""!==a){n.next=6;break}throw"Voc\xea precisa indicar um reposit\xf3rio";case 6:if(!o.find((function(n){return n.name===a}))){n.next=9;break}throw"Reposit\xf3rio Duplicado";case 9:return n.next=11,y.get("/repos/".concat(a));case 11:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(p.a)(o),[c]),newRepo:""}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),t.setState({error:!0});case 19:return n.prev=19,t.setState({loading:!1}),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[2,16,19,22]])})));return function(e){return n.apply(this,arguments)}}(),t}return Object(x.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("repositories");n&&this.setState({repositories:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.repositories;e.repositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.loading,r=n.repositories,o=n.error;return a.a.createElement(O,null,a.a.createElement("h1",null,a.a.createElement(h.a,null),"Reposit\xf3rios"),a.a.createElement(C,{onSubmit:this.handleSubmit,error:o},a.a.createElement("input",{type:"text",placeholder:"Adicionar reposit\xf3rio",value:e,onChange:this.handleInputChange}),a.a.createElement(_,{loading:t},t?a.a.createElement(h.c,{color:"#FFF",size:14}):a.a.createElement(h.b,{color:"#FFF",size:14}))),a.a.createElement(A,null,r.map((function(n){return a.a.createElement("li",{key:n.name},a.a.createElement("span",null,n.name),a.a.createElement(c.b,{to:"/repository/".concat(encodeURIComponent(n.name))},"Detalhes"))}))))}}]),e}(r.Component),P=t(42);function U(){var n=Object(E.a)(["\n  padding-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n\n  button {\n    transition: opacity 0.25s ease-out;\n    border-radius: 4px;\n    outline: 0;\n    border: 0;\n    padding: 8px;\n\n    &:disabled {\n      opacity: 0.35;\n      cursor: not-allowed;\n    }\n  }\n"]);return U=function(){return n},n}function J(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 15px;\n  button {\n    border-radius: 4px;\n    outline: 0;\n    border: 0;\n    padding: 8px;\n    margin: 0 0 0.25rem;\n\n    &:nth-child(",") {\n      background: #576574;\n      color: white;\n    }\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(E.a)(["\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid #eee;\n  list-style: none;\n\n  li {\n    display: flex;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n\n    & + li {\n      margin-top: 10px\n    }\n\n    img {\n      width: 36px;\n      height: 36px;\n      border-radius: 50%;\n      border: 2px solid #eee;\n    }\n\n    div {\n      flex: 1;\n      margin-left: 15px;\n\n      strong {\n        font-size: 16px;\n\n        a {\n          text-decoration: none;\n          color: #333;\n\n          &:hover {\n            color: #7159c1;\n          }\n        }\n\n        span {\n          background: #eee;\n          color: #333;\n          border-radius: 3px;\n          font-size: 12px;\n          font-weight: 600;\n          height: 20px;\n          padding: 3px 4px;\n          margin-left: 10px;\n        }\n      }\n\n      p {\n        margin-top: 5px;\n        font-size: 12px;\n        color: #999;\n      }\n    }\n  }\n"]);return M=function(){return n},n}function N(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: #7159c1;\n    font-size: 16px;\n    text-decoration: none;\n  }\n\n  img {\n    width: 120px;\n    border-radius: 50%;\n    margin-top: 20px;\n  }\n\n  h1 {\n    font-size: 24px;\n    margin-top: 10px;\n  }\n\n  p {\n    color: #666;\n    margin-top: 5px;\n    font-size: 14px;\n    text-align: center;\n    max-width: 400px;\n  }\n"]);return N=function(){return n},n}function V(){var n=Object(E.a)(["\n    svg {\n      animation: "," 2s linear infinite;\n      margin-right: 10px;\n    }\n  "]);return V=function(){return n},n}function B(){var n=Object(E.a)(["\n  color: #FFF;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n\n  ","\n"]);return B=function(){return n},n}function H(){var n=Object(E.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n"]);return H=function(){return n},n}var L=Object(j.d)(H()),T=j.c.div(B(),(function(n){return n.loading&&Object(j.b)(V(),L)})),q=j.c.header(N()),G=j.c.ul(M()),K=j.c.div(J(),(function(n){return n.active+1})),Q=j.c.div(U()),W=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={repository:{},issues:[],loading:!0,filters:[{state:"all",label:"Todas",active:!0},{state:"open",label:"Abertas",active:!1},{state:"closed",label:"Fechadas",active:!1}],filterIndex:0,page:1},t.loadIssues=Object(d.a)(u.a.mark((function n(){var e,r,a,o,i,c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.props.match,r=t.state,a=r.filters,o=r.filterIndex,i=r.page,c=decodeURIComponent(e.params.repository),n.next=5,y.get("/repos/".concat(c,"/issues"),{params:{state:a[o].state,per_page:5,page:i}});case 5:s=n.sent,t.setState({issues:s.data});case 7:case"end":return n.stop()}}),n)}))),t.handleFilterClick=function(){var n=Object(d.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setState({filterIndex:e});case 2:t.loadIssues();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.handlePage=function(){var n=Object(d.a)(u.a.mark((function n(e){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state.page,n.next=3,t.setState({page:"back"===e?r-1:r+1});case 3:t.loadIssues();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t}return Object(x.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=Object(d.a)(u.a.mark((function n(){var e,t,r,a,o,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match,t=this.state.filters,r=decodeURIComponent(e.params.repository),n.next=5,Promise.all([y.get("/repos/".concat(r)),y.get("/repos/".concat(r,"/issues"),{params:{state:t.find((function(n){return n.active})).state,per_page:5}})]);case 5:a=n.sent,o=Object(P.a)(a,2),i=o[0],c=o[1],this.setState({repository:i.data,issues:c.data,loading:!1});case 10:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.state,t=e.repository,r=e.issues,o=e.loading,i=e.filters,s=e.filterIndex,l=e.page;return o?a.a.createElement(T,{loading:o},o?a.a.createElement(h.c,{color:"#FFF",size:14}):"","Carregando"):a.a.createElement(O,null,a.a.createElement(q,null,a.a.createElement(c.b,{to:"/"},"Voltar aos reposit\xf3rios"),a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("h1",null,t.name),a.a.createElement("p",null,t.description)),a.a.createElement(G,null,a.a.createElement(K,{active:s},i.map((function(e,t){return a.a.createElement("button",{key:e.label,onClick:function(){return n.handleFilterClick(t)}},e.label)}))),r.map((function(n){return a.a.createElement("li",{key:String(n.id)},a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.login}),a.a.createElement("div",null,a.a.createElement("strong",null,a.a.createElement("a",{href:n.html_url,target:"_blank"},n.title),n.labels.map((function(n){return a.a.createElement("span",{key:String(n.id)},n.name)}))),a.a.createElement("p",null,n.user.login)))}))),a.a.createElement(Q,null,a.a.createElement("button",{type:"button",disabled:l<2,onClick:function(){return n.handlePage("back")}},"Anterior"),a.a.createElement("span",null,"P\xe1gina ",l),a.a.createElement("button",{type:"button",onClick:function(){return n.handlePage("next")}},"Pr\xf3ximo")))}}]),e}(r.Component);function X(){return a.a.createElement(c.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0,component:D}),a.a.createElement(s.a,{path:"/repository/:repository",component:W})))}function Y(){var n=Object(E.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #app {\n        min-height: 100%;\n    }\n\n    body {\n        background: #7159c1;\n        -webkit-font-smoothing: antialiased !important;\n    }\n\n    body, input, button {\n        color: #222;\n        font-size: 14px;\n        font-family: Arial, Helvetica, sans-serif;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return Y=function(){return n},n}var Z=Object(j.a)(Y());var $=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,null),a.a.createElement(X,null))};i.a.render(a.a.createElement($,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c7133866.chunk.js.map