(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{30:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),r=c.n(n),s=c(20),i=c.n(s),j=c(9),l=c(18),o=c.n(l),u=c(19),b=c(10),d=c(70),p=c(68),O=c(69),h=c(66),x=c(38),m=(c(54),x.a.initializeApp({apiKey:"AIzaSyAdGUPPj3uPsx9UghiCqk11wgKtJh4MKZI",authDomain:"capella-1ebb8.firebaseapp.com",databaseURL:"https://capella-1ebb8.firebaseio.com",projectId:"capella-1ebb8",storageBucket:"capella-1ebb8.appspot.com",messagingSenderId:"280869192644",appId:"1:280869192644:web:aa64076d741926fdb5da91",measurementId:"G-031W4R6940"})),f=m.auth(),v=r.a.createContext();function w(){return Object(n.useContext)(v)}function g(e){var t=e.children,c=Object(n.useState)(),r=Object(b.a)(c,2),s=r[0],i=r[1],j=Object(n.useState)(!0),l=Object(b.a)(j,2),o=l[0],u=l[1];Object(n.useEffect)((function(){return f.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var d={currentUser:s,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(a.jsx)(v.Provider,{value:d,children:!o&&t})}var N=c(8);c(30);function y(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),s=w().signup,i=Object(n.useState)(""),l=Object(b.a)(i,2),x=l[0],m=l[1],f=Object(n.useState)(!1),v=Object(b.a)(f,2),g=v[0],y=v[1],k=Object(N.g)();function P(){return(P=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===r.current.value){c.next=3;break}return c.abrupt("return",m("Passwords do not match"));case 3:return c.prev=3,m(""),y(!0),c.next=8,s(e.current.value,t.current.value);case 8:k.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),m("Failed to create an account");case 14:y(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return c(24),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),x&&Object(a.jsx)(p.a,{variant:"danger",children:x}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Email",ref:e,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password-confirm",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password Confirmation",ref:r,required:!0})}),Object(a.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/login",children:"Log In"})]})]})}var k=c(67),P=c(33),S=c(21),C=c(42),R=[{title:"Home",path:"/",icon:Object(a.jsx)(S.b,{}),cName:"nav-text"},{title:"Learn",path:"/learn",icon:Object(a.jsx)(S.a,{}),cName:"nav-text"},{title:"Marketplace",path:"/marketplace",icon:Object(a.jsx)(S.c,{}),cName:"nav-text"},{title:"Profile",path:"/update-profile",icon:Object(a.jsx)(C.a,{}),cName:"nav-text"}],U=(c(61),c(0));c(24);var E=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],r=t[1],s=function(){return r(!c)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(U.b.Provider,{value:{color:"#fff"},children:[Object(a.jsx)("div",{className:"navbar",children:Object(a.jsx)(j.c,{to:"#",className:"bars",children:Object(a.jsx)(P.a,{onClick:s})})}),Object(a.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(a.jsxs)("ul",{className:"nav-menu-items",onClick:s,children:[Object(a.jsx)("li",{className:"navbar-toggle",children:Object(a.jsx)(j.c,{to:"#",className:"bars",children:Object(a.jsx)(S.d,{})})}),R.map((function(e,t){return Object(a.jsx)("li",{className:e.cName,children:Object(a.jsxs)(j.c,{to:e.path,children:[e.icon,Object(a.jsx)("span",{children:e.title})]})},t)}))]})})]})})};function L(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{}),Object(a.jsx)("h1",{children:"Dashboard"})]})}function G(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{}),Object(a.jsx)("h1",{children:"Marketplace"})]})}function I(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=w().login,s=Object(n.useState)(""),i=Object(b.a)(s,2),l=i[0],x=i[1],m=Object(n.useState)(!1),f=Object(b.a)(m,2),v=f[0],g=f[1],y=Object(N.g)();function k(){return(k=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,x(""),g(!0),c.next=6,r(e.current.value,t.current.value);case 6:y.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),x("Failed to log in");case 12:g(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return c(24),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),l&&Object(a.jsx)(p.a,{variant:"danger",children:l}),Object(a.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{className:"form-input",type:"email",placeholder:"Email",ref:e,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})}),Object(a.jsx)(h.a,{disabled:v,className:"w-100",type:"submit",children:"Log In"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(j.c,{className:"links",to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/signup",children:"Sign Up"})]})]})}var F=c(26),q=c(46);function A(e){var t=e.component,c=Object(q.a)(e,["component"]),n=w().currentUser;return Object(a.jsx)(N.b,Object(F.a)(Object(F.a)({},c),{},{render:function(e){return n?Object(a.jsx)(t,Object(F.a)({},e)):Object(a.jsx)(N.a,{to:"/login"})}}))}function B(){var e=Object(n.useRef)(),t=w().resetPassword,r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],x=Object(n.useState)(""),m=Object(b.a)(x,2),f=m[0],v=m[1],g=Object(n.useState)(!1),N=Object(b.a)(g,2),y=N[0],k=N[1];function P(){return(P=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,v(""),l(""),k(!0),c.next=7,t(e.current.value);case 7:v("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),l("Failed to reset password");case 13:k(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return c(24),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),i&&Object(a.jsx)(p.a,{variant:"danger",children:i}),f&&Object(a.jsx)(p.a,{variant:"success",children:f}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Email",ref:e,required:!0})}),Object(a.jsx)(h.a,{disabled:y,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(j.c,{className:"links",to:"/login",children:"Login"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/signup",children:"Sign Up"})]})]})}function D(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=w(),s=r.currentUser,i=r.updatePassword,l=r.updateEmail,o=Object(n.useState)(""),u=Object(b.a)(o,2),x=u[0],m=u[1],f=Object(n.useState)(!1),v=Object(b.a)(f,2),g=v[0],y=v[1],k=Object(N.g)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),x&&Object(a.jsx)(p.a,{variant:"danger",children:x}),Object(a.jsxs)(O.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return m("Passwords do not match");var n=[];y(!0),m(""),e.current.value!==s.email&&n.push(l(e.current.value)),t.current.value&&n.push(i(t.current.value)),Promise.all(n).then((function(){k.push("/")})).catch((function(){m("Failed to update account")})).finally((function(){y(!1)}))},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(a.jsxs)(O.a.Group,{id:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(a.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(a.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(a.jsx)(O.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(a.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(a.jsx)("div",{className:"w-100 text-center mt-2",children:Object(a.jsx)(j.c,{to:"/",children:"Cancel"})})]})}var J=c(43),K=c(44),M=c(47),W=c(45),z=function(e){Object(M.a)(c,e);var t=Object(W.a)(c);function c(){var e;Object(J.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(K.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{}),Object(a.jsx)("h1",{children:"Learn"})]})}}]),c}(n.Component);var H=function(){return Object(a.jsx)(j.b,{children:Object(a.jsx)(g,{children:Object(a.jsxs)(N.d,{children:[Object(a.jsx)(A,{exact:!0,path:"/",component:L}),Object(a.jsx)(A,{path:"/learn",component:z}),Object(a.jsx)(A,{path:"/marketplace",component:G}),Object(a.jsx)(A,{path:"/update-profile",component:D}),Object(a.jsx)(k.a,{className:"login-container",children:Object(a.jsxs)("div",{className:"inner-container",children:[Object(a.jsx)(N.b,{path:"/signup",component:y}),Object(a.jsx)(N.b,{path:"/login",component:I}),Object(a.jsx)(N.b,{path:"/forgot-password",component:B})]})})]})})})};c(62);var V=function(){return Object(a.jsx)(H,{})};c(63);i.a.render(Object(a.jsx)(j.a,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.8903b9e1.chunk.js.map