(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{49:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(39),r=a.n(s),l=(a(49),a(12)),o=a(4),i=a.p+"static/media/launchpadlogo.965e01d3.jpeg",u=a(0);var j=function(){return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"left-nav",children:Object(u.jsx)("img",{className:"logo-source",src:i})}),Object(u.jsxs)("div",{className:"right-nav",children:[Object(u.jsx)(l.b,{to:"/account",className:"button",children:"account"}),Object(u.jsx)(l.b,{to:"/register",className:"button",children:"sign up"})]})]})},d=a(5),b=a.n(d),h=a(8),p=a(7),f=a(9),O=a(3),m=a(15),x=a.n(m);function v(){return window.localStorage.getItem("token")}function g(){var e=v();if(!e)return!1;var t=e.split(".");return!(t.length<3)&&JSON.parse(atob(t[1]))}function N(){var e=g();return!!e&&Math.round(Date.now()/1e3)<e.exp}var w="myherokubackendurl.herokuapp.com/api";function y(e){return x.a.post("".concat(w,"/auth/register/"),e)}function C(){var e={headers:{Authorization:"Bearer ".concat(v())}};return x.a.get("".concat(w,"/auth/profile/"),e)}function S(e,t){var a={headers:{Authorization:"Bearer ".concat(v())}};return x.a.post("".concat(w,"/launches/").concat(t,"/updates/"),e,a)}function k(e,t,a){return x()({method:"POST",url:"".concat(w,"/launches/").concat(e,"/updates/").concat(t,"/").concat(a,"/"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v())}})}function A(e){return x.a.get("".concat(w,"/launches/").concat(e))}var R={username:"",password:""};var T=function(){var e=Object(o.f)(),t=c.a.useState(R),a=Object(O.a)(t,2),n=a[0],s=a[1],r=function(e){s(Object(f.a)(Object(f.a)({},n),{},Object(p.a)({},e.target.name,e.target.value))),console.log(n)},l=function(){var t=Object(h.a)(b.a.mark((function t(a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,r=n,x.a.post("".concat(w,"/auth/login/"),r);case 4:(c=t.sent)&&(s=c.data.token,window.localStorage.setItem("token",s),console.log(c.data.token),e.push("/")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}var s,r}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"log-in-wrapper",children:[Object(u.jsxs)("div",{className:"username-container",children:[Object(u.jsx)("label",{children:"username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"enter your username here",onChange:r})]}),Object(u.jsxs)("div",{className:"password-container",children:[Object(u.jsx)("label",{children:"password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"enter your password here",onChange:r})]}),Object(u.jsx)("div",{className:"submit-container",children:Object(u.jsx)("input",{type:"submit",value:"log in",onClick:l})})]})},P={username:"",email:"",avatar:"",password:"",password_confirmation:""};var _=function(){var e=c.a.useState(P),t=Object(O.a)(e,2),a=t[0],n=t[1];function s(e){n(Object(f.a)(Object(f.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}function r(){return(r=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y(a);case 4:(n=e.sent)&&console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"enter a username",onChange:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"avatar"}),Object(u.jsx)("input",{type:"text",name:"avatar",placeholder:"pic an image for an avatar",onChange:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"email"}),Object(u.jsx)("input",{type:"text",name:"email",placeholder:"enter an email",onChange:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"password"}),Object(u.jsx)("input",{type:"text",name:"password",placeholder:"enter a password",onChange:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"password confirmation"}),Object(u.jsx)("input",{type:"text",name:"password_confirmation",placeholder:"confirm your password",onChange:s})]}),Object(u.jsx)("input",{type:"submit",onClick:function(e){return r.apply(this,arguments)},value:"submit"})]})};var I=function(){var e=c.a.useState(),t=Object(O.a)(e,2),a=t[0],n=t[1],s=c.a.useState(),r=Object(O.a)(s,2),o=r[0],i=r[1];return c.a.useEffect((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(w,"/launches/"));case 3:(t=e.sent)||console.log("there aint nothing here"),n(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.useEffect((function(){var e=[];a?(a.map((function(t){var a=t.dateTime.split(" ")[2].split("-"),n=a[0],c=a[1],s=a[2].split("T"),r=s[0],l=s[1];"01"===c?c="January":"02"===c?c="Februrary":"03"===c?c="March":"04"===c?c="April":"05"===c?c="May":"06"===c?c="June":"07"===c?c="July":"08"===c?c="August":"09"===c?c="September":"10"===c?c="October":"11"===c?c="November":"12"===c&&(c="December"),console.log(l),e.push({year:"".concat(n),month:"".concat(c),day:"".concat(r),payload:"".concat(t.payloadName),rocket:"".concat(t.rocketConfig)})})),i(e)):console.log("notloaded")}),[a]),Object(u.jsxs)("section",{className:"launch-wrapper",children:[Object(u.jsx)("div",{className:"listLaunch-title",children:Object(u.jsx)("h1",{children:"Upcoming launches"})}),Object(u.jsxs)("div",{className:"launch-categories",children:[Object(u.jsx)("h1",{children:"date"}),Object(u.jsx)("h1",{children:"payload"}),Object(u.jsx)("h1",{children:"rocket"})]}),Object(u.jsx)("div",{className:"launch-list",children:o?o.map((function(e,t){return Object(u.jsxs)(l.b,{className:"launch-truncated",to:"/launches/".concat(a[t].id),children:[Object(u.jsxs)("div",{className:"datePayload-segment",children:[Object(u.jsx)("h1",{children:e.month}),Object(u.jsx)("h1",{className:"day-launch",children:e.day}),Object(u.jsx)("h1",{children:e.payload})]}),Object(u.jsx)("div",{className:"rocket-segment",children:Object(u.jsx)("h1",{children:e.rocket})})]},t)})):Object(u.jsx)("h1",{children:"loading"})})]})};var E=function(){var e=c.a.useState(),t=Object(O.a)(e,2),a=t[0],n=t[1],s=c.a.useState(),r=Object(O.a)(s,2),o=r[0],i=r[1];return c.a.useState((function(){i(N())}),[]),c.a.useEffect((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:(t=e.sent)||console.log("no user"),console.log(t.data),n(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[o]),console.log(a),Object(u.jsxs)("section",{className:"dash-wrapper",children:[Object(u.jsxs)("div",{className:"dash-left",children:[Object(u.jsx)("div",{className:"user-profile-dash",children:a?Object(u.jsxs)("div",{className:"user-info",children:[Object(u.jsx)("div",{className:"user-avatar"}),Object(u.jsx)("h1",{children:"".concat(a.username)}),Object(u.jsx)("h1",{children:"".concat(a.email)}),Object(u.jsx)("h1",{children:"updates posted: ".concat(a.updatesPosted.length)})]}):Object(u.jsx)(l.b,{to:"/login",className:"button",children:"log in"})}),Object(u.jsx)("div",{className:"follow-dash"})]}),Object(u.jsx)("div",{className:"dash-right",children:Object(u.jsx)(I,{})})]})};var F=function(){var e=Object(o.f)();return Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"button",onClick:function(){window.localStorage.removeItem("token"),e.push("/")},children:"logout"})})},H=a(28),D=a(18);var L=function(e){var t=e.update,a=t.updateText,n=t.updateSource,s=t.updateUser,r=t.updateType,o=t.dateCreated,i=t.mostReliable,j=c.a.useState(),d=Object(O.a)(j,2),p=d[0],f=d[1],m=c.a.useState(),x=Object(O.a)(m,2),v=x[0],w=x[1],y=c.a.useState(),C=Object(O.a)(y,2),S=C[0],A=C[1],R=N(),T=g(),P=c.a.useState("on"),_=Object(O.a)(P,2),I=_[0],E=_[1],F=c.a.useState("on"),L=Object(O.a)(F,2),J=L[0],M=L[1],z=c.a.useState("on"),U=Object(O.a)(z,2),B=U[0],W=U[1],X=c.a.useState("on"),G=Object(O.a)(X,2),q=G[0],K=G[1],Q=c.a.useState(!1),V=Object(O.a)(Q,2),Y=V[0],Z=V[1],$=c.a.useState(!0),ee=Object(O.a)($,2),te=ee[0],ae=ee[1],ne=c.a.useState(!0),ce=Object(O.a)(ne,2),se=ce[0],re=ce[1],le=c.a.useState(!0),oe=Object(O.a)(le,2),ie=oe[0],ue=oe[1],je=c.a.useState(!0),de=Object(O.a)(je,2),be=de[0],he=de[1];c.a.useEffect((function(){"reliable"===i?(f(D.b),w("reliable-tick")):"unreliable"===i?(f(D.e),w("unreliable-cross")):"official"===i?(f(D.b),w("official-tick")):"false"===i&&(f(D.e),w("false-cross")),"launch status"===r?A(D.d):"time change"===r?A(D.c):"general announcement"===r&&A(D.a),t.reliableArray.includes(T.sub)&&(M("off"),K("off"),W("off"),ae(!1),re(!1),he(!1)),t.unreliableArray.includes(T.sub)&&(E("off"),K("off"),W("off"),ue(!1),ae(!1),re(!1)),t.officialArray.includes(T.sub)&&(E("off"),K("off"),M("off"),re(!1),he(!1),ue(!1)),t.falseArray.includes(T.sub)&&(E("off"),W("off"),M("off"),he(!1),ue(!1),ae(!1)),console.log(Y)}),[R,i,r,t,T,Y]);var pe=function(){console.log("you cant do that")},fe=function(){var e=Object(h.a)(b.a.mark((function e(a){var n,c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.target.value,c=t.updateId,s=t.updateLaunch,!a.target.className.includes("on")){e.next=17;break}if("on"!==q&&"on"!==B&&"on"!==I&&"on"!==J){e.next=17;break}return e.prev=6,e.next=9,k(s,c,n);case 9:(r=e.sent)||console.log("cant do that"),console.log(r.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:!1===Y?(Z(!0),"reliable"===n&&(M("off"),K("off"),W("off"),ae(!1),re(!1),he(!1)),"unreliable"===n&&(E("off"),K("off"),W("off"),ue(!1),ae(!1),re(!1)),"official"===n&&(E("off"),K("off"),M("off"),re(!1),he(!1),ue(!1)),"false"===n&&(E("off"),W("off"),M("off"),he(!1),ue(!1),ae(!1))):(Z(!1),"reliable"===n&&(M("on"),K("on"),W("on"),ae(!0),re(!0),he(!0)),"unreliable"===n&&(E("on"),K("on"),W("on"),ue(!0),ae(!0),re(!0)),"official"===n&&(E("on"),K("on"),M("on"),re(!0),he(!0),ue(!0)),"false"===n&&(E("on"),W("on"),M("on"),he(!0),ue(!0),ae(!0)));case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"update-instance",children:[Object(u.jsxs)("div",{className:"user-detail",children:[Object(u.jsx)("h1",{children:"".concat(s)}),Object(u.jsxs)("div",{className:"update-icons",children:[S&&Object(u.jsx)(H.a,{className:"type-icon",icon:S}),v&&Object(u.jsx)(H.a,{className:"".concat(v," rel-icon"),icon:p})]})]}),Object(u.jsxs)("div",{className:"info-tab",children:[Object(u.jsxs)("div",{className:"update-data",children:[Object(u.jsx)("h1",{children:"".concat(a)}),Object(u.jsxs)("a",{href:"".concat(n),children:[" ","".concat(n)]})]}),Object(u.jsx)("div",{className:"extra-details",children:Object(u.jsxs)("h2",{children:[Object(u.jsx)("strong",{children:"created at"})," ".concat(o)]})})]}),Object(u.jsx)("div",{className:"verify-buttons",children:R?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"button-o ".concat(B),value:"official",onClick:function(e){return te?fe(e):pe()},children:"official"}),Object(u.jsx)("button",{className:"button-r ".concat(I),value:"reliable",onClick:function(e){return ie?fe(e):pe()},children:"reliable"}),Object(u.jsx)("button",{className:"button-u ".concat(J),value:"unreliable",onClick:function(e){return be?fe(e):pe()},children:"un-reliable"}),Object(u.jsx)("button",{className:"button-f ".concat(q),value:"false",onClick:function(e){return se?fe(e):pe()},children:"false"})]}):Object(u.jsx)("div",{className:"verify-placeholder",children:Object(u.jsx)(l.b,{to:"/login",className:"login-link",children:"sign in to rate"})})})]})};var J=function(e){var t=c.a.useState(null),a=Object(O.a)(t,2),n=a[0],s=a[1],r=e.launch,l=c.a.useState(),o=Object(O.a)(l,2),i=o[0],j=o[1],d=c.a.useState(),b=Object(O.a)(d,2),h=b[0],p=b[1],f=[],m=[],x=[],v=[],g=[],N=[],w=[];c.a.useEffect((function(){r?(s(r.updates),console.log("got the updates")):console.log("no data on updates set")}),[r]),c.a.useEffect((function(){var e=[];n?(n.map((function(t){var a={updateLaunch:"",updateId:"",updateText:"",updateSource:"",updateUser:"",updateType:"",dateCreated:"",reliableCount:"",unreliableCount:"",officialCount:"",falseCount:"",totalCount:"",mostReliable:"",mostReliableCount:"",reliableArray:[],unreliableArray:[],officialArray:[],falseArray:[]};a.updateLaunch=t.launch,a.updateId=t.id,a.dateCreated=t.createdAt,a.updateText=t.update,a.updateSource=t.source,a.updateUser=t.owner.username,a.realibleCount=t.reliable.length,a.unrealibleCount=t.unreliable.length,a.officialCount=t.official.length,a.falseCount=t.false.length,a.totalCount=t.reliable.length+t.unreliable.length+t.official.length+t.false.length,t.reliable.map((function(e){a.reliableArray.push(e)})),t.unreliable.map((function(e){a.unreliableArray.push(e)})),t.official.map((function(e){a.officialArray.push(e)})),t.false.map((function(e){a.falseArray.push(e)})),t.launchStatus?a.updateType="launch status":t.timeChange?a.updateType="time change":t.generalAnnouncement&&(a.updateType="general announcement");var n=Math.max(t.reliable.length,t.unreliable.length,t.official.length,t.false.length);a.mostReliableCount=n,0!==n?n===t.reliable.length?a.mostReliable="reliable":n===t.unreliable.length?a.mostReliable="unreliable":n===t.official.length?a.mostReliable="official":n===t.false.length&&(a.mostReliable="false"):a.mostReliable="not verified";var c=t.createdAt.split(".");a.dateCreated=c[0],e.push(a),f.push(a),w.push(a)})),j(e),f.sort((function(e,t){return t.totalCount-e.totalCount})),p(f),e.map((function(e){"reliable"===e.mostReliable?m.push(e):"unreliable"===e.mostReliable?x.push(e):"official"===e.mostReliable?v.push(e):"false"===e.mostReliable?g.push(e):"not verified"===e.mostReliable&&N.push(e)})),m.sort((function(e,t){return e.mostReliableCount-t.mostReliableCount})),x.sort((function(e,t){return e.mostReliableCount-t.mostReliableCount})),v.sort((function(e,t){return e.mostReliableCount-t.mostReliableCount})),g.sort((function(e,t){return e.mostReliableCount-t.mostReliableCount}))):console.log("no data")}),[n]);var y=c.a.useState("on"),C=Object(O.a)(y,2),S=C[0],k=C[1],A=c.a.useState("off"),R=Object(O.a)(A,2),T=R[0],P=R[1],_=c.a.useState("off"),I=Object(O.a)(_,2),E=I[0],F=I[1],H=function(e){var t=e.target.value;"popular"===t&&(k("on"),P("off"),F("off")),"recent"===t&&(k("off"),P("on"),F("off")),"all"===t&&(k("off"),P("off"),F("on"))};return Object(u.jsxs)("section",{className:"updates-wrapper",children:[Object(u.jsxs)("div",{className:"update-selectors",children:[Object(u.jsx)("button",{className:"button-popular ".concat(S),value:"popular",onClick:H,children:"popular"}),Object(u.jsx)("button",{className:"button-recent ".concat(T),value:"recent",onClick:H,children:"recent"}),Object(u.jsx)("button",{className:"button-all ".concat(E),value:"all",onClick:H,children:"all"})]}),"on"===E&&Object(u.jsx)("div",{className:"all-updates",children:Object(u.jsx)("div",{className:"update-list",children:i&&i.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(L,{update:e},t)})}))})}),"on"===S&&Object(u.jsx)("div",{className:"popular-updates",children:Object(u.jsx)("div",{className:"update-list",children:h&&h.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(L,{update:e},t)})}))})}),"on"===T&&Object(u.jsx)("div",{className:"recent-updates"})]})};var M=function(e){var t=e.auth,a=Object(o.g)().launchId,n=c.a.useState({update:"",source:"",launch_status:null,time_change:null,general_announcements:null}),s=Object(O.a)(n,2),r=s[0],l=s[1],i=function(e){var t;if("launch-status"===e.target.value)l(Object(f.a)(Object(f.a)({},r),{},(t={},Object(p.a)(t,"launch_status",!0),Object(p.a)(t,"general_announcements",!1),Object(p.a)(t,"time_change",!1),t)));else if("general-announcements"===e.target.value){var a;l(Object(f.a)(Object(f.a)({},r),{},(a={},Object(p.a)(a,"launch_status",!1),Object(p.a)(a,"general_announcements",!0),Object(p.a)(a,"time_change",!1),a)))}else if("time-change"===e.target.value){var n;l(Object(f.a)(Object(f.a)({},r),{},(n={},Object(p.a)(n,"launch_status",!1),Object(p.a)(n,"general_announcements",!1),Object(p.a)(n,"time_change",!0),n)))}},j=function(e){l(Object(f.a)(Object(f.a)({},r),{},Object(p.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(r),e.prev=2,e.next=5,S(r,a);case 5:n=e.sent,console.log(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{children:[Object(u.jsx)("div",{className:"recent updates"}),Object(u.jsx)("div",{className:"top updates"}),Object(u.jsxs)("div",{className:"update-submit",children:[t?Object(u.jsxs)("form",{className:"update-form",children:[Object(u.jsx)("div",{className:"update-create-tab",children:Object(u.jsx)("h1",{children:"post an update"})}),Object(u.jsxs)("div",{className:"update-type-container",children:[Object(u.jsx)("input",{type:"radio",name:"update-type",id:"launch-status",value:"launch-status",onClick:i}),Object(u.jsx)("label",{htmlFor:"launch-status",children:"launch status"}),Object(u.jsx)("input",{type:"radio",name:"update-type",id:"launch-time-change",value:"time-change",onClick:i}),Object(u.jsx)("label",{htmlFor:"launch-time-change",children:"time change"}),Object(u.jsx)("input",{type:"radio",name:"update-type",id:"general-announcement",value:"general-announcements",onClick:i}),Object(u.jsx)("label",{htmlFor:"general-annoucement",children:"general announcement"})]}),Object(u.jsx)("div",{className:"describe-container",children:Object(u.jsx)("textarea",{name:"update",placeholder:"write your update here",rows:"4",cols:"50",onChange:j})}),Object(u.jsx)("div",{className:"source-container",children:Object(u.jsx)("input",{type:"text",name:"source",placeholder:"write the source here",onChange:j})}),Object(u.jsx)("div",{className:"submit-container ",children:Object(u.jsx)("input",{className:"button",type:"submit",value:"submit",onClick:d})})]}):Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"lots a beans"})}),Object(u.jsx)("form",{})]})]})},z=a(42);var U=function(e){var t=c.a.useState(),a=Object(O.a)(t,2),n=a[0],s=a[1],r=c.a.useState(),l=Object(O.a)(r,2),o=l[0],i=l[1],j=c.a.useState(),d=Object(O.a)(j,2),p=d[0],f=d[1],m=c.a.useState(),v=Object(O.a)(m,2),g=v[0],N=v[1],w=e.launch,y=c.a.useState(),C=Object(O.a)(y,2),S=C[0],k=C[1],A=c.a.useState(),R=Object(O.a)(A,2),T=R[0],P=R[1],_=c.a.useState(),I=Object(O.a)(_,2),E=I[0],F=I[1];return c.a.useEffect((function(){if(w){k(w.dateTime.split(" ")[2]);var e=w.location.split(" ");s(e[0]),i(e[1])}}),[w]),c.a.useEffect((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,c,s,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o,"&lon=").concat(n,"&exclude={part}&appid=").concat("d1d67e56848063c7551e2b1865a1612b"));case 3:(t=e.sent)&&(a=t.data,c=a.timezone_offset,s=new Date(S),r=s.setHours(0,0,0,0),(l=t.data.daily.find((function(e){return new Date(1e3*(e.dt-c)).setHours(0,0,0,0)===r})))&&(f(l.weather[0].description),N("http://openweathermap.org/img/wn/".concat(l.weather[0].icon,"@2x.png"))),P(t.data.daily[0].weather[0].description),F("http://openweathermap.org/img/wn/".concat(t.data.daily[0].weather[0].icon,"@2x.png"))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[w,n,o,p,g]),Object(u.jsxs)("section",{className:"info-wrapper",children:[Object(u.jsx)("div",{className:"title-header",children:w&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"".concat(w.launchName)}),Object(u.jsx)("h2",{children:"".concat(w.launchProvider)})]})}),Object(u.jsx)("div",{className:"data-header",children:w&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Payload Mission"}),Object(u.jsx)("h2",{children:"".concat(w.payloadMission)})]})}),Object(u.jsxs)("div",{className:"count-down",children:[Object(u.jsx)("h1",{children:"T-  "}),Object(u.jsx)(z.a,{className:"countdown",date:"".concat(S)})]}),Object(u.jsx)("div",{className:"weather-wrapper",children:g?Object(u.jsxs)("div",{className:"weather-icon",children:[Object(u.jsx)("h1",{children:"weather on day of launch"}),Object(u.jsx)("img",{src:g}),Object(u.jsx)("div",{children:p})]}):Object(u.jsxs)("div",{className:"weather-icon",children:[Object(u.jsx)("h1",{children:"Current Weather at launch Site"}),Object(u.jsx)("img",{src:E}),Object(u.jsx)("div",{children:T})]})})]})},B=a(44);var W=function(e){var t=e.launch,a=c.a.useState(),n=Object(O.a)(a,2),s=n[0],r=n[1],l=c.a.useState(),o=Object(O.a)(l,2),i=o[0],j=o[1],d=c.a.useState(),b=Object(O.a)(d,2),h=b[0],p=b[1],f=[{launchProvider:"Indian Space Research Organization",twitterHandle:"isro"},{launchProvider:"Rocket Lab Ltd",twitterHandle:"Rocketlab"},{launchProvider:"China Aerospace Science and Industry Corporation",twitterHandle:"CGWIC"},{launchProvider:"United Launch Alliance",twitterHandle:"ulalaunch"},{launchProvider:"SpaceX",twitterHandle:"SpaceX"},{launchProvider:"Arianespace",twitterHandle:"Arianespace"},{launchProvider:"TiSPACE",twitterHandle:"LaunchService"}];return c.a.useEffect((function(){if(t?p(t.launchProvider):j(!0),h){var e=f.find((function(e){return e.launchProvider===h})).twitterHandle;r(e)}}),[h,i,t]),Object(u.jsx)(u.Fragment,{children:s&&Object(u.jsx)(B.a,{sourceType:"profile",screenName:s,options:{height:300}})})};var X=function(){var e=c.a.useState(),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(o.g)().launchId,r=N();return c.a.useState((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(s);case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"launch-page",children:[Object(u.jsx)("div",{className:"3D-wrapper"}),Object(u.jsxs)("div",{className:"launch-info",children:[Object(u.jsx)("div",{className:"top-tab",children:Object(u.jsx)("h1",{children:"launch info"})}),Object(u.jsx)(U,{launch:a}),Object(u.jsx)(W,{launch:a})]}),Object(u.jsxs)("div",{className:"update-section",children:[Object(u.jsx)(J,{launch:a}),Object(u.jsx)(M,{auth:r?Object(u.jsx)("h1",{children:"log in to create an update"}):null})]})]})};var G=function(){return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(T,{})}),Object(u.jsx)(o.a,{path:"/register",children:Object(u.jsx)(_,{})}),Object(u.jsx)(o.a,{path:"/account",children:Object(u.jsx)(F,{})}),Object(u.jsx)(o.a,{path:"/launches/:launchId",children:Object(u.jsx)(X,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(E,{})})]})]})};r.a.render(Object(u.jsx)(G,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ed16b0c2.chunk.js.map