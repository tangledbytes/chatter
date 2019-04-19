(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),c=a.n(s),o=(a(81),a(10)),i=a(11),l=a(13),u=a(12),m=a(14),h=a(6),p=a(19),d=a(4),f=a(33),v=a.n(f),g=a(17),b=a.n(g),E=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},_=function(e){return{type:"SET_CURRENT_USER",payload:e}},y=function(){return function(e){localStorage.removeItem("jwt"),E(!1),e(_({}))}},w=a(18),k=a(69),O=a(70),j=a(71),S={isAuthenticated:!1,user:{}},N={},x=Object(w.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_CURRENT_USER":return Object(j.a)({},e,{isAuthenticated:0!==Object.keys(t.payload).length,user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),C=[k.a],R=Object(w.createStore)(x,{},Object(O.composeWithDevTools)(w.applyMiddleware.apply(void 0,C))),F=function(e){return r.a.createElement("div",null,r.a.createElement(h.b,{to:e.to},e.children))},A=a(34),I=a.n(A),U=Object(d.b)(function(e){return{auth:e.auth}},{logoutUser:y})(Object(p.f)(function(e){var t=e.auth.isAuthenticated;return r.a.createElement("nav",{className:I.a.navbar},r.a.createElement("div",{className:I.a.navItems},r.a.createElement("div",null,r.a.createElement(h.b,{to:"/"},"Chatter")),r.a.createElement("div",{className:I.a.div},t?r.a.createElement("button",{onClick:function(){e.history.push("/"),e.logoutUser()},style:{backgroundColor:"transparent",fontFamily:"inherit",color:"inherit",border:"none",fontSize:"1.1rem",cursor:"pointer",outline:"none"}},"Logout"):r.a.createElement(F,{to:e.link},e.name))))})),W=a(73),D=a.n(W),P=function(e){return r.a.createElement("footer",{className:D.a.footer},r.a.createElement("p",null,"Property of Utkarsh Srivastava \xa9 ",(new Date).getFullYear()))},M=a(15),T=a(23),B=a(26),L=a.n(B),z=a(47),H=a.n(z),G=function(e){return r.a.createElement("div",{style:{display:e.display,width:e.width,marginRight:e.marginRight}},r.a.createElement("label",{htmlFor:e.name,className:H.a.for},e.label),r.a.createElement("input",{ref:e.refs?e.refs:null,type:e.type,value:e.message,className:H.a.Input,name:e.name,disabled:!1===e.active,onChange:function(t){return e.press?e.press(t,e.name):null}}))},K=a(35),Y=a.n(K),J=function(e){switch(e.type){case"success":return r.a.createElement("button",{className:Y.a.success,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);case"danger":return r.a.createElement("button",{className:Y.a.danger,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);default:return r.a.createElement("button",{className:Y.a.default,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name)}},q=a(74),Q=a.n(q),V=function(e){return r.a.createElement("form",{className:Q.a.Form,style:{height:e.height,width:e.width}},e.children)},X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",auth:!1},a.submit=function(e){e.preventDefault(),a.props.loginUser({username:a.state.username,password:a.state.password})},a.save=function(e,t){a.setState(Object(M.a)({},t,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/chatter")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated?this.props.history.push("/chatter"):e.errors&&console.log(e.errors)}},{key:"render",value:function(){return r.a.createElement("div",{className:L.a.placeForm},r.a.createElement("div",{className:L.a.image},r.a.createElement("div",{className:L.a.Welcome},"Welcome to the chatter.",r.a.createElement("br",null)," Connect to your friends around the globe.")),r.a.createElement(V,{height:"30rem",width:"80%"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Chatter: Login")),this.props.errors.error?r.a.createElement("div",{className:L.a.flash},this.props.errors.error):null,r.a.createElement("h2",null,"Log In"),r.a.createElement("div",{style:{fontSize:"1rem",margin:"-0.5rem 0 1.5rem 0"}},"to continue to the Chatter app"),r.a.createElement(G,{type:"text",name:"username",label:"Username",press:this.save}),r.a.createElement(G,{type:"password",name:"password",label:"Password",press:this.save}),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/sign-up",style:{textDecoration:"none"}},"Don't have an account yet?")),r.a.createElement(J,{name:"Login",click:this.submit}),this.state.auth?r.a.createElement(p.a,{to:"/chatter"}):null))}}]),t}(r.a.Component),Z=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){b.a.post("/api/login",e).then(function(e){console.log(e.data);var a=e.data.token;localStorage.setItem("jwt",a),E(a);var n=v()(a);t(_(n))}).catch(function(e){t({type:"GET_ERRORS",payload:e.response.data})})}}})(X),$=a(36),ee=a.n($),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",password2:"",match:!0},a.submit=function(e){e.preventDefault(),a.state.match&&a.state.username&&a.props.registerUser({username:a.state.username,password:a.state.password},a.props.history)},a.inputCheck=function(){a.state.password!==a.state.password2?a.setState({match:!1}):a.setState({match:!0})},a.save=function(e,t){a.setState(Object(M.a)({},t,e.target.value),function(){"password2"===t&&a.inputCheck()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/chatter")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&console.log("OH MY GOD!!")}},{key:"render",value:function(){return r.a.createElement("div",{className:ee.a.placeForm},r.a.createElement(V,{height:"38rem",width:"80vw"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"SignUp")),this.props.errors.errors?r.a.createElement("div",{className:ee.a.flash},this.props.errors.errors):null,this.state.match?null:r.a.createElement("div",{className:ee.a.flash},"Passwords don't match"),r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",{style:{fontSize:"1rem",margin:"-0.5rem 0 1.5rem 0"}},"And enjoy our exclusive chat service for free!"),r.a.createElement(G,{type:"text",name:"username",label:"Username",press:this.save}),r.a.createElement(G,{type:"password",name:"password",label:"Password",press:this.save}),r.a.createElement(G,{type:"password",name:"password2",label:"Confirm Password",press:this.save}),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/",style:{textDecoration:"none"}},"Already have an account?")),r.a.createElement(J,{name:"Sign Up",type:"success",click:this.submit})))}}]),t}(r.a.Component),ae=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){b.a.post("/api/sign-up",e).then(function(e){return t.push("/")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(p.f)(te)),ne=function(e){var t=function(t){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.props.auth.isAuthenticated||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),a}(r.a.Component);return Object(d.b)(function(e){return{auth:e.auth}})(Object(p.f)(t))},re=a(16),se=a.n(re),ce=a(75),oe=a.n(ce),ie=a(37),le=a.n(ie),ue=function(e){var t=e.by?le.a.msg_out:le.a.msg_in;return r.a.createElement("div",{className:le.a.msg},r.a.createElement("div",{className:t},r.a.createElement("div",null,e.children)))},me=(a(143),function(e){return r.a.createElement("button",{className:"friend",onClick:function(t){return e.onClick(t.target.id)},id:e.id},e.children)}),he=oe.a.connect("/"),pe=function(e,t,a){he.emit("private",{message:a,sender:e,reciever:t})},de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).recieveFriends=function(){b.a.get("/api/chatter/friends",{params:{username:a.props.auth.user}}).then(function(e){return a.setState({friends:e.data})}).catch(function(e){return console.log(e)})},a.state={reciever:"",message:"",messageLog:[],searchField:"",friends:{},newFriend:"",showChatsMob:!1},a.textInput=r.a.createRef(),a.messageEnd=r.a.createRef(),a.setReciever=function(e){a.setState({reciever:e}),window.screen.width<=800&&a.setState({showChatsMob:!0})},a.newFriend=function(e){a.setState({newFriend:e.target.value}),"Enter"===e.key&&(b.a.post("/api/chatter/friends",{friend:a.state.newFriend,username:a.props.auth.user.username}).then(function(e){console.log(e),a.recieveFriends()}).catch(function(e){return console.log(e)}),e.target.value="")},a.press=function(e,t){a.setState(Object(M.a)({},t,e.target.value))},a.chat=function(e){a.state.message&&(pe(a.props.auth.user.username,a.state.reciever,a.state.message),a.setState(function(e,t){var n=a.state.friends[a.state.reciever];return Object(M.a)({},n,e.friends[e.reciever].push({sender:a.props.auth.user.username,reciever:e.reciever,message:e.message}))}),a.textInput.current.value="",a.setState({message:""}))},a.show=function(){a.setState({showChatsMob:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.auth.user.username,he.emit("connected",e),he.on("message",function(e){t.setState(function(a,n){var r=t.state.friends[e.sender];return Object(M.a)({},r,a.friends[e.sender].push(e))})}),this.recieveFriends()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:se.a.wrapper},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Chatter: Welcome to chatter")),r.a.createElement("div",{className:se.a.list,style:this.state.showChatsMob?{display:"none"}:{display:"inherit"}},r.a.createElement("input",{type:"text",name:"reciever",className:se.a.addFriends,placeholder:"Add username of your friend",onChange:this.newFriend,onKeyPress:this.newFriend}),r.a.createElement("div",{className:se.a.friends},Object.keys(this.state.friends).map(function(t,a){return r.a.createElement(me,{key:a,onClick:e.setReciever,id:t},t)}))),r.a.createElement("div",{className:se.a.view,style:this.state.showChatsMob?{display:"inherit"}:null},r.a.createElement("div",{className:se.a.nameField},r.a.createElement("div",null,r.a.createElement("button",{className:se.a.chatter_mob,onClick:this.show,style:{border:"none",outline:"none",backgroundColor:"transparent",color:"white"}},"Back")),this.state.reciever?'You are talking to "'.concat(this.state.reciever,'"'):"Start talking to friends right now! It's elegant!"),r.a.createElement("div",{className:se.a.msgBlock},this.state.friends[this.state.reciever]?this.state.friends[this.state.reciever].map(function(t,a){return r.a.createElement(ue,{key:a,by:t.sender===e.props.auth.user.username?1:0,refs:e.messageEnd},t.message)}):null),r.a.createElement("div",{className:se.a.msgBox},r.a.createElement(G,{refs:this.textInput,type:"text",name:"message",label:"",value:this.state.message,display:"inline-block",width:"75%",marginRight:"0.8rem",active:!!this.state.reciever,press:this.press}),r.a.createElement(J,{type:"success",name:"Sends",display:"inline",click:this.chat}))))}}]),t}(r.a.Component),fe=Object(d.b)(function(e){return{auth:e.auth,errors:e.errors}},null)(de),ve=(a(144),function(){return r.a.createElement("div",{className:"errorPage"},"ERROR 404: Page not found")});a(145);if(localStorage.getItem("jwt")){E(localStorage.getItem("jwt"));var ge=v()(localStorage.getItem("jwt"));R.dispatch(_(ge)),Date.now()/1e3>ge.exp&&(R.dispatch(y()),window.location.href="/")}var be=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:R},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(U,{name:"Sign Up",link:"/sign-up"})}}),r.a.createElement(p.b,{path:"/sign-up",exact:!0,render:function(){return r.a.createElement(U,{name:"Login",link:"/"})}}),r.a.createElement(p.b,{exact:!0,path:"/chatter",render:function(){return r.a.createElement(U,{name:"Signout",link:"/"})}}),r.a.createElement(p.b,{path:"/*",exact:!0,render:function(){return r.a.createElement(U,{name:"Login",link:"/"})}})),r.a.createElement("main",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:Z}),r.a.createElement(p.b,{path:"/sign-up",exact:!0,component:ae}),r.a.createElement(p.b,{exact:!0,path:"/chatter",component:ne(fe)}),r.a.createElement(p.b,{path:"/*",exact:!0,component:ve}))),r.a.createElement(P,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e,t,a){e.exports={wrapper:"chatter_wrapper__KRsEg",list:"chatter_list__1LFmQ",view:"chatter_view__1vJbZ",addFriends:"chatter_addFriends__2Hw3Y",nameField:"chatter_nameField__3XGu_",msgBlock:"chatter_msgBlock__34ima",msgBox:"chatter_msgBox__3JaTK",chatter_mob:"chatter_chatter_mob__1dQ44",display:"chatter_display__tkmAW"}},26:function(e,t,a){e.exports={placeForm:"login_placeForm__1pTeG",image:"login_image__3fpwt",Welcome:"login_Welcome__pm-bk",flash:"login_flash__294Kb"}},34:function(e,t,a){e.exports={navbar:"navbar_navbar__1q8X2",navItems:"navbar_navItems__1Wi18",div:"navbar_div__355Pz"}},35:function(e,t,a){e.exports={default:"button_default__WnKnV",danger:"button_danger__1sY6T",success:"button_success__3OsO1"}},36:function(e,t,a){e.exports={placeForm:"signup_placeForm__2z8P4",flash:"signup_flash__l7Nqt"}},37:function(e,t,a){e.exports={msg:"message_msg__3weeh",msg_out:"message_msg_out__2kHHP",msg_in:"message_msg_in__3gOgq"}},47:function(e,t,a){e.exports={Input:"input_Input__DtkgV",for:"input_for__1QN3l"}},73:function(e,t,a){e.exports={footer:"footer_footer__Vr4ZL"}},74:function(e,t,a){e.exports={Form:"form_Form__16rR8"}},76:function(e,t,a){e.exports=a(146)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.4e8cef42.chunk.js.map