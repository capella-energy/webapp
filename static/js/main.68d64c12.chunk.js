(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{31:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),n=c.n(a),s=c(19),i=c.n(s),j=c(8),l=c(17),o=c.n(l),u=c(18),d=c(10),b=c(64),p=c(62),O=c(63),h=c(60),x=c(39),m=(c(50),x.a.initializeApp({apiKey:"AIzaSyAdGUPPj3uPsx9UghiCqk11wgKtJh4MKZI",authDomain:"capella-1ebb8.firebaseapp.com",databaseURL:"https://capella-1ebb8.firebaseio.com",projectId:"capella-1ebb8",storageBucket:"capella-1ebb8.appspot.com",messagingSenderId:"280869192644",appId:"1:280869192644:web:aa64076d741926fdb5da91",measurementId:"G-031W4R6940"})),f=m.auth(),v=n.a.createContext();function w(){return Object(a.useContext)(v)}function g(e){var t=e.children,c=Object(a.useState)(),n=Object(d.a)(c,2),s=n[0],i=n[1],j=Object(a.useState)(!0),l=Object(d.a)(j,2),o=l[0],u=l[1];Object(a.useEffect)((function(){return f.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var b={currentUser:s,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(r.jsx)(v.Provider,{value:b,children:!o&&t})}var y=c(7);c(31);function P(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),s=w().signup,i=Object(a.useState)(""),l=Object(d.a)(i,2),x=l[0],m=l[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),g=v[0],P=v[1],k=Object(y.g)();function N(){return(N=Object(u.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",m("Passwords do not match"));case 3:return c.prev=3,m(""),P(!0),c.next=8,s(e.current.value,t.current.value);case 8:k.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),m("Failed to create an account");case 14:P(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return c(37),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),x&&Object(r.jsx)(p.a,{variant:"danger",children:x}),Object(r.jsxs)(O.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(r.jsx)(O.a.Group,{id:"email",children:Object(r.jsx)(O.a.Control,{type:"email",placeholder:"Email",ref:e,required:!0})}),Object(r.jsx)(O.a.Group,{id:"password",children:Object(r.jsx)(O.a.Control,{type:"password",placeholder:"Password",ref:t,required:!0})}),Object(r.jsx)(O.a.Group,{id:"password-confirm",children:Object(r.jsx)(O.a.Control,{type:"password",placeholder:"Password Confirmation",ref:n,required:!0})}),Object(r.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(r.jsx)(j.c,{className:"links",to:"/login",children:"Log In"})]})]})}var k=c(61),N=function(){return Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(j.c,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.c,{to:"/learn",children:"Learn"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.c,{to:"/marketplace",children:"Marketplace"})})]})},S=c(22),C=c(23),R=c(26),I=c(24),L=function(e){Object(R.a)(c,e);var t=Object(I.a)(c);function c(){var e;Object(S.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Good evening! I'm Dr. Dashboard"})})}}]),c}(a.Component);function U(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsx)(L,{})]})}function E(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=w().login,s=Object(a.useState)(""),i=Object(d.a)(s,2),l=i[0],x=i[1],m=Object(a.useState)(!1),f=Object(d.a)(m,2),v=f[0],g=f[1],P=Object(y.g)();function k(){return(k=Object(u.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,x(""),g(!0),c.next=6,n(e.current.value,t.current.value);case 6:P.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),x("Failed to log in");case 12:g(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return c(37),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),l&&Object(r.jsx)(p.a,{variant:"danger",children:l}),Object(r.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(r.jsx)(O.a.Group,{id:"email",children:Object(r.jsx)(O.a.Control,{className:"form-input",type:"email",placeholder:"Email...",ref:e,required:!0})}),Object(r.jsx)(O.a.Group,{id:"password",children:Object(r.jsx)(O.a.Control,{type:"password",placeholder:"Password...",ref:t,required:!0})}),Object(r.jsx)(h.a,{disabled:v,className:"w-100",type:"submit",children:"Log In"})]}),Object(r.jsx)("div",{className:"w-100 text-center mt-3",children:Object(r.jsx)(j.c,{className:"links",to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(r.jsx)(j.c,{className:"links",to:"/signup",children:"Sign Up"})]})]})}var G=c(27),A=c(43);function F(e){var t=e.component,c=Object(A.a)(e,["component"]),a=w().currentUser;return Object(r.jsx)(y.b,Object(G.a)(Object(G.a)({},c),{},{render:function(e){return a?Object(r.jsx)(t,Object(G.a)({},e)):Object(r.jsx)(y.a,{to:"/login"})}}))}function q(){var e=Object(a.useRef)(),t=w().resetPassword,c=Object(a.useState)(""),n=Object(d.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)(""),x=Object(d.a)(l,2),m=x[0],f=x[1],v=Object(a.useState)(!1),g=Object(d.a)(v,2),y=g[0],P=g[1];function k(){return(k=Object(u.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,f(""),i(""),P(!0),c.next=7,t(e.current.value);case 7:f("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),i("Failed to reset password");case 13:P(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(r.jsx)(p.a,{variant:"danger",children:s}),m&&Object(r.jsx)(p.a,{variant:"success",children:m}),Object(r.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(r.jsx)(h.a,{disabled:y,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(r.jsx)("div",{className:"w-100 text-center mt-3",children:Object(r.jsx)(j.c,{to:"/login",children:"Login"})})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(r.jsx)(j.c,{to:"/signup",children:"Sign Up"})]})]})}function D(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=w(),s=n.currentUser,i=n.updatePassword,l=n.updateEmail,o=Object(a.useState)(""),u=Object(d.a)(o,2),x=u[0],m=u[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),g=v[0],P=v[1],k=Object(y.g)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{children:Object(r.jsxs)(b.a.Body,{children:[Object(r.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),x&&Object(r.jsx)(p.a,{variant:"danger",children:x}),Object(r.jsxs)(O.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==c.current.value)return m("Passwords do not match");var a=[];P(!0),m(""),e.current.value!==s.email&&a.push(l(e.current.value)),t.current.value&&a.push(i(t.current.value)),Promise.all(a).then((function(){k.push("/")})).catch((function(){m("Failed to update account")})).finally((function(){P(!1)}))},children:[Object(r.jsxs)(O.a.Group,{id:"email",children:[Object(r.jsx)(O.a.Label,{children:"Email"}),Object(r.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(r.jsxs)(O.a.Group,{id:"password",children:[Object(r.jsx)(O.a.Label,{children:"Password"}),Object(r.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(r.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(r.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(r.jsx)(O.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(r.jsx)(h.a,{disabled:g,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(r.jsx)("div",{className:"w-100 text-center mt-2",children:Object(r.jsx)(j.c,{to:"/",children:"Cancel"})})]})}var B=function(e){Object(R.a)(c,e);var t=Object(I.a)(c);function c(){var e;Object(S.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsx)("h1",{children:"Hello, I'm Learn"})]})}}]),c}(a.Component);var J=function(){return Object(r.jsx)(j.b,{children:Object(r.jsx)(g,{children:Object(r.jsxs)(y.d,{children:[Object(r.jsx)(F,{exact:!0,path:"/",component:U}),Object(r.jsx)(F,{path:"/learn",component:B}),Object(r.jsx)(k.a,{className:"login-container",children:Object(r.jsxs)("div",{className:"inner-container",children:[Object(r.jsx)(F,{path:"/update-profile",component:D}),Object(r.jsx)(y.b,{path:"/signup",component:P}),Object(r.jsx)(y.b,{path:"/login",component:E}),Object(r.jsx)(y.b,{path:"/forgot-password",component:q})]})})]})})})};var K=function(){return Object(r.jsx)(J,{})};c(57);i.a.render(Object(r.jsx)(j.a,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.68d64c12.chunk.js.map