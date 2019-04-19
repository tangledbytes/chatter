(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),c=a.n(s),o=(a(80),a(10)),i=a(11),l=a(13),u=a(12),m=a(14),p=a(6),h=a(19),d=a(4),f=a(32),v=a.n(f),g=a(16),E=a.n(g),b=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},y=function(e){return{type:"SET_CURRENT_USER",payload:e}},_=function(){return function(e){localStorage.removeItem("jwt"),b(!1),e(y({}))}},w=a(18),O=a(69),k=a(70),j={isAuthenticated:!1,user:{}},S={},x=Object(w.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_CURRENT_USER":return Object(k.a)({},e,{isAuthenticated:0!==Object.keys(t.payload).length,user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),N=[O.a],F=Object(w.e)(x,{},Object(w.d)(w.a.apply(void 0,N))),R=function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{to:e.to},e.children))},C=a(33),I=a.n(C),U=Object(d.b)(function(e){return{auth:e.auth}},{logoutUser:_})(Object(h.f)(function(e){var t=e.auth.isAuthenticated;return r.a.createElement("nav",{className:I.a.navbar},r.a.createElement("div",{className:I.a.navItems},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},"Chatter")),r.a.createElement("div",{className:I.a.div},t?r.a.createElement("button",{onClick:function(){e.history.push("/"),e.logoutUser()},style:{backgroundColor:"transparent",fontFamily:"inherit",color:"inherit",border:"none",fontSize:"1.1rem",cursor:"pointer",outline:"none"}},"Logout"):r.a.createElement(R,{to:e.link},e.name))))})),A=a(72),P=a.n(A),D=function(e){return r.a.createElement("footer",{className:P.a.footer},r.a.createElement("p",null,"Property of Utkarsh Srivastava \xa9 ",(new Date).getFullYear()))},W=a(15),T=a(23),L=a(34),B=a.n(L),z=a(46),H=a.n(z),G=function(e){return r.a.createElement("div",{style:{display:e.display,width:e.width,marginRight:e.marginRight}},r.a.createElement("label",{htmlFor:e.name,className:H.a.for},e.label),r.a.createElement("input",{ref:e.refs?e.refs:null,type:e.type,value:e.message,className:H.a.Input,name:e.name,disabled:!1===e.active,onChange:function(t){return e.press?e.press(t,e.name):null}}))},M=a(35),Y=a.n(M),J=function(e){switch(e.type){case"success":return r.a.createElement("button",{className:Y.a.success,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);case"danger":return r.a.createElement("button",{className:Y.a.danger,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);default:return r.a.createElement("button",{className:Y.a.default,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name)}},K=a(73),V=a.n(K),q=function(e){return r.a.createElement("form",{className:V.a.Form,style:{height:e.height,width:e.width}},e.children)},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",auth:!1},a.submit=function(e){e.preventDefault(),a.props.loginUser({username:a.state.username,password:a.state.password})},a.save=function(e,t){a.setState(Object(W.a)({},t,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/chatter")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/chatter"),e.errors&&console.log(e.errors)}},{key:"render",value:function(){return r.a.createElement("div",{className:B.a.placeForm},r.a.createElement("div",{className:B.a.image},r.a.createElement("div",{className:B.a.Welcome},"Welcome to the chatter.",r.a.createElement("br",null)," Connect to your friends around the globe.")),r.a.createElement(q,{height:"30rem",width:"80%"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Login")),r.a.createElement("h2",null,"Log In"),r.a.createElement("div",{style:{fontSize:"1rem",margin:"-0.5rem 0 1.5rem 0"}},"to continue to the Chatter app"),r.a.createElement(G,{type:"text",name:"username",label:"Username",press:this.save}),r.a.createElement(G,{type:"password",name:"password",label:"Password",press:this.save}),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/sign-up",style:{textDecoration:"none"}},"Don't have an account yet?")),r.a.createElement(J,{name:"Login",click:this.submit}),this.state.auth?r.a.createElement(h.a,{to:"/chatter"}):null))}}]),t}(r.a.Component),X=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){console.log(e),E.a.post("/api/login",e).then(function(e){console.log(e);var a=e.data.token;localStorage.setItem("jwt",a),b(a);var n=v()(a);t(y(n))}).catch(function(e){t({type:"GET_ERRORS",payload:e.response.data})})}}})(Q),Z=a(47),$=a.n(Z),ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",password2:"",match:!0},a.submit=function(e){e.preventDefault(),a.state.match&&a.props.registerUser({username:a.state.username,password:a.state.password},a.props.history)},a.inputCheck=function(){a.state.password!==a.state.password2?a.setState({match:!1}):a.setState({match:!0})},a.save=function(e,t){a.setState(Object(W.a)({},t,e.target.value),function(){"password2"===t&&a.inputCheck()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/chatter")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&console.log("OH MY GOD!!")}},{key:"render",value:function(){return r.a.createElement("div",{className:$.a.placeForm},r.a.createElement(q,{height:"38rem",width:"80vw"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"SignUp")),this.state.match?null:r.a.createElement("div",{className:$.a.flash},"Passwords don't match"),r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",{style:{fontSize:"1rem",margin:"-0.5rem 0 1.5rem 0"}},"And enjoy our exclusive chat service for free!"),r.a.createElement(G,{type:"text",name:"username",label:"Username",press:this.save}),r.a.createElement(G,{type:"password",name:"password",label:"Password",press:this.save}),r.a.createElement(G,{type:"password",name:"password2",label:"Confirm Password",press:this.save}),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},"Already have an account?")),r.a.createElement(J,{name:"Sign Up",type:"success",click:this.submit})))}}]),t}(r.a.Component),te=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){E.a.post("/api/sign-up",e).then(function(e){return t.push("/")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(h.f)(ee)),ae=function(e){var t=function(t){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.props.auth.isAuthenticated||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),a}(r.a.Component);return Object(d.b)(function(e){return{auth:e.auth}})(Object(h.f)(t))},ne=a(17),re=a.n(ne),se=a(74),ce=a.n(se),oe=a(36),ie=a.n(oe),le=function(e){var t=e.by?ie.a.msg_out:ie.a.msg_in;return r.a.createElement("div",{className:ie.a.msg},r.a.createElement("div",{className:t},r.a.createElement("div",null,e.children)))},ue=(a(142),function(e){return r.a.createElement("button",{className:"friend",onClick:function(t){return e.onClick(t.target.id)},id:e.id},e.children)}),me=ce.a.connect("/"),pe=function(e,t,a){me.emit("private",{message:a,sender:e,reciever:t})},he=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).recieveFriends=function(){E.a.get("/api/chatter/friends",{params:{username:a.props.auth.user}}).then(function(e){return a.setState({friends:e.data})}).catch(function(e){return console.log(e)})},a.state={reciever:"",message:"",messageLog:[],searchField:"",friends:{},newFriend:""},a.textInput=r.a.createRef(),a.messageEnd=r.a.createRef(),a.setReciever=function(e){a.setState({reciever:e})},a.newFriend=function(e){a.setState({newFriend:e.target.value}),"Enter"===e.key&&(E.a.post("/api/chatter/friends",{friend:a.state.newFriend,username:a.props.auth.user.username}).then(function(e){console.log(e),a.recieveFriends()}).catch(function(e){return console.log(e)}),e.target.value="")},a.press=function(e,t){a.setState(Object(W.a)({},t,e.target.value))},a.chat=function(e){a.state.message&&(pe(a.props.auth.user.username,a.state.reciever,a.state.message),a.setState(function(e,t){var n=a.state.friends[a.state.reciever];return Object(W.a)({},n,e.friends[e.reciever].push({sender:a.props.auth.user.username,reciever:e.reciever,message:e.message}))}),a.textInput.current.value="",a.setState({message:""}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.auth.user.username,me.emit("connected",e),me.on("message",function(e){t.setState(function(a,n){var r=t.state.friends[e.sender];return Object(W.a)({},r,a.friends[e.sender].push(e))})}),this.recieveFriends()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:re.a.wrapper},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Chatter: Welcome to chatter")),r.a.createElement("div",{className:re.a.list},r.a.createElement("input",{type:"text",name:"reciever",className:re.a.addFriends,placeholder:"Add username of your friend",onChange:this.newFriend,onKeyPress:this.newFriend}),r.a.createElement("div",{className:re.a.friends},Object.keys(this.state.friends).map(function(t,a){return r.a.createElement(ue,{key:a,onClick:e.setReciever,id:t},t)}))),r.a.createElement("div",{className:re.a.view},r.a.createElement("div",{className:re.a.nameField},this.state.reciever?'You are talking to "'.concat(this.state.reciever,'"'):"Start talking to friends right now! It's elegant!"),r.a.createElement("div",{className:re.a.msgBlock},this.state.friends[this.state.reciever]?this.state.friends[this.state.reciever].map(function(t,a){return r.a.createElement(le,{key:a,by:t.sender===e.props.auth.user.username?1:0,refs:e.messageEnd},t.message)}):null),r.a.createElement("div",{className:re.a.msgBox},r.a.createElement(G,{refs:this.textInput,type:"text",name:"message",label:"",value:this.state.message,display:"inline-block",width:"75%",marginRight:"1rem",active:!!this.state.reciever,press:this.press}),r.a.createElement(J,{type:"success",name:"Sends",display:"inline",click:this.chat}))))}}]),t}(r.a.Component),de=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},null)(he),fe=(a(143),function(){return r.a.createElement("div",{className:"errorPage"},"ERROR 404: Page not found")});a(144);if(localStorage.getItem("jwt")){b(localStorage.getItem("jwt"));var ve=v()(localStorage.getItem("jwt"));F.dispatch(y(ve)),Date.now()/1e3>ve.exp&&(F.dispatch(_()),window.location.href="/")}var ge=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:F},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,render:function(){return r.a.createElement(U,{name:"Sign Up",link:"/sign-up"})}}),r.a.createElement(h.b,{path:"/sign-up",exact:!0,render:function(){return r.a.createElement(U,{name:"Login",link:"/"})}}),r.a.createElement(h.b,{exact:!0,path:"/chatter",render:function(){return r.a.createElement(U,{name:"Signout",link:"/"})}}),r.a.createElement(h.b,{path:"/*",exact:!0,render:function(){return r.a.createElement(U,{name:"Login",link:"/"})}})),r.a.createElement("main",{className:"container"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:X}),r.a.createElement(h.b,{path:"/sign-up",exact:!0,component:te}),r.a.createElement(h.b,{exact:!0,path:"/chatter",component:ae(de)}),r.a.createElement(h.b,{path:"/*",exact:!0,component:fe}))),r.a.createElement(D,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports={wrapper:"chatter_wrapper__KRsEg",list:"chatter_list__1LFmQ",view:"chatter_view__1vJbZ",addFriends:"chatter_addFriends__2Hw3Y",nameField:"chatter_nameField__3XGu_",msgBlock:"chatter_msgBlock__34ima",msgBox:"chatter_msgBox__3JaTK"}},33:function(e,t,a){e.exports={navbar:"navbar_navbar__1q8X2",navItems:"navbar_navItems__1Wi18",div:"navbar_div__355Pz"}},34:function(e,t,a){e.exports={placeForm:"login_placeForm__1pTeG",image:"login_image__3fpwt",Welcome:"login_Welcome__pm-bk"}},35:function(e,t,a){e.exports={default:"button_default__WnKnV",danger:"button_danger__1sY6T",success:"button_success__3OsO1"}},36:function(e,t,a){e.exports={msg:"message_msg__3weeh",msg_out:"message_msg_out__2kHHP",msg_in:"message_msg_in__3gOgq"}},46:function(e,t,a){e.exports={Input:"input_Input__DtkgV",for:"input_for__1QN3l"}},47:function(e,t,a){e.exports={placeForm:"signup_placeForm__2z8P4"}},72:function(e,t,a){e.exports={footer:"footer_footer__Vr4ZL"}},73:function(e,t,a){e.exports={Form:"form_Form__16rR8"}},75:function(e,t,a){e.exports=a(145)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.d5bc3064.chunk.js.map