(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),n=c.n(r),s=c(19),i=c.n(s),j=c(8),l=c(17),o=c.n(l),u=c(18),d=c(10),b=c(64),p=c(62),O=c(63),h=c(60),x=c(39),m=(c(50),x.a.initializeApp({apiKey:"AIzaSyAdGUPPj3uPsx9UghiCqk11wgKtJh4MKZI",authDomain:"capella-1ebb8.firebaseapp.com",databaseURL:"https://capella-1ebb8.firebaseio.com",projectId:"capella-1ebb8",storageBucket:"capella-1ebb8.appspot.com",messagingSenderId:"280869192644",appId:"1:280869192644:web:aa64076d741926fdb5da91",measurementId:"G-031W4R6940"})),f=m.auth(),v=n.a.createContext();function w(){return Object(r.useContext)(v)}function g(e){var t=e.children,c=Object(r.useState)(),n=Object(d.a)(c,2),s=n[0],i=n[1],j=Object(r.useState)(!0),l=Object(d.a)(j,2),o=l[0],u=l[1];Object(r.useEffect)((function(){return f.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var b={currentUser:s,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(a.jsx)(v.Provider,{value:b,children:!o&&t})}var y=c(7);c(22);function k(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),s=w().signup,i=Object(r.useState)(""),l=Object(d.a)(i,2),x=l[0],m=l[1],f=Object(r.useState)(!1),v=Object(d.a)(f,2),g=v[0],k=v[1],N=Object(y.g)();function P(){return(P=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",m("Passwords do not match"));case 3:return c.prev=3,m(""),k(!0),c.next=8,s(e.current.value,t.current.value);case 8:N.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),m("Failed to create an account");case 14:k(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return c(32),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(b.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),x&&Object(a.jsx)(p.a,{variant:"danger",children:x}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Email",ref:e,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password-confirm",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password Confirmation",ref:n,required:!0})}),Object(a.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/login",children:"Log In"})]})]})}var N=c(61),P=function(){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.c,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.c,{to:"/learn",children:"Learn"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.c,{to:"/marketplace",children:"Marketplace"})})]})},S=c(23),C=c(24),R=c(27),I=c(25),U=function(e){Object(R.a)(c,e);var t=Object(I.a)(c);function c(){var e;Object(S.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Good evening! I'm Dr. Dashboard"})})}}]),c}(r.Component);function E(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(P,{}),Object(a.jsx)(U,{})]})}function G(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=w().login,s=Object(r.useState)(""),i=Object(d.a)(s,2),l=i[0],x=i[1],m=Object(r.useState)(!1),f=Object(d.a)(m,2),v=f[0],g=f[1],k=Object(y.g)();function N(){return(N=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,x(""),g(!0),c.next=6,n(e.current.value,t.current.value);case 6:k.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),x("Failed to log in");case 12:g(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return c(32),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(b.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),l&&Object(a.jsx)(p.a,{variant:"danger",children:l}),Object(a.jsxs)(O.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{className:"form-input",type:"email",placeholder:"Email...",ref:e,required:!0})}),Object(a.jsx)(O.a.Group,{id:"password",children:Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password...",ref:t,required:!0})}),Object(a.jsx)(h.a,{disabled:v,className:"w-100",type:"submit",children:"Log In"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(j.c,{className:"links",to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/signup",children:"Sign Up"})]})]})}var L=c(28),A=c(43);function F(e){var t=e.component,c=Object(A.a)(e,["component"]),r=w().currentUser;return Object(a.jsx)(y.b,Object(L.a)(Object(L.a)({},c),{},{render:function(e){return r?Object(a.jsx)(t,Object(L.a)({},e)):Object(a.jsx)(y.a,{to:"/login"})}}))}function q(){var e=Object(r.useRef)(),t=w().resetPassword,n=Object(r.useState)(""),s=Object(d.a)(n,2),i=s[0],l=s[1],x=Object(r.useState)(""),m=Object(d.a)(x,2),f=m[0],v=m[1],g=Object(r.useState)(!1),y=Object(d.a)(g,2),k=y[0],N=y[1];function P(){return(P=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,v(""),l(""),N(!0),c.next=7,t(e.current.value);case 7:v("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),l("Failed to reset password");case 13:N(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return c(32),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(b.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),i&&Object(a.jsx)(p.a,{variant:"danger",children:i}),f&&Object(a.jsx)(p.a,{variant:"success",children:f}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsx)(O.a.Group,{id:"email",children:Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Email",ref:e,required:!0})}),Object(a.jsx)(h.a,{disabled:k,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(j.c,{className:"links",to:"/login",children:"Login"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(a.jsx)(j.c,{className:"links",to:"/signup",children:"Sign Up"})]})]})}function D(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=w(),s=n.currentUser,i=n.updatePassword,l=n.updateEmail,o=Object(r.useState)(""),u=Object(d.a)(o,2),x=u[0],m=u[1],f=Object(r.useState)(!1),v=Object(d.a)(f,2),g=v[0],k=v[1],N=Object(y.g)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(b.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),x&&Object(a.jsx)(p.a,{variant:"danger",children:x}),Object(a.jsxs)(O.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return m("Passwords do not match");var r=[];k(!0),m(""),e.current.value!==s.email&&r.push(l(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){N.push("/")})).catch((function(){m("Failed to update account")})).finally((function(){k(!1)}))},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(a.jsxs)(O.a.Group,{id:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(a.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(a.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(a.jsx)(O.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(a.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(a.jsx)("div",{className:"w-100 text-center mt-2",children:Object(a.jsx)(j.c,{to:"/",children:"Cancel"})})]})}var B=function(e){Object(R.a)(c,e);var t=Object(I.a)(c);function c(){var e;Object(S.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(P,{}),Object(a.jsx)("h1",{children:"Hello, I'm Learn"})]})}}]),c}(r.Component);var J=function(){return Object(a.jsx)(j.b,{children:Object(a.jsx)(g,{children:Object(a.jsxs)(y.d,{children:[Object(a.jsx)(F,{exact:!0,path:"/",component:E}),Object(a.jsx)(F,{path:"/learn",component:B}),Object(a.jsx)(N.a,{className:"login-container",children:Object(a.jsxs)("div",{className:"inner-container",children:[Object(a.jsx)(F,{path:"/update-profile",component:D}),Object(a.jsx)(y.b,{path:"/signup",component:k}),Object(a.jsx)(y.b,{path:"/login",component:G}),Object(a.jsx)(y.b,{path:"/forgot-password",component:q})]})})]})})})};var K=function(){return Object(a.jsx)(J,{})};c(57);i.a.render(Object(a.jsx)(j.a,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.1ca5fc60.chunk.js.map