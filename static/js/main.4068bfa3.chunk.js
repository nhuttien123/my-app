(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{287:function(e,t,r){"use strict";r.r(t);var n,a,c,i,s=r(0),o=r.n(s),l=r(32),u=r.n(l),j=r(38),d=r(28),b=r(30),m=r(24),p=r.n(m),O=r(37),h=r(65),g=r.n(h),f={getUser:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang/login",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createUser:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=Object(d.b)("user/getUser",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getUser(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(d.c)({name:"user",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(n={},Object(b.a)(n,x.pending,(function(e,t){e.data=[],e.loading=!0})),Object(b.a)(n,x.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(n,x.rejected,(function(e,t){e.loading=!1,e.error=t.error})),n)}).reducer,v={getProduct:function(){var e=Object(O.a)(p.a.mark((function e(t){var r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,n=t.page,a=t.sort,e.prev=1,null!=r){e.next=8;break}return e.next=5,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products?filter=&page=".concat(n,"&limit=6&sortBy=price&order=").concat(a)).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 8:return e.next=10,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products?filter=".concat(r,"&page=").concat(n,"&limit=6&sortBy=price&order=").concat(a)).then((function(e){return e.data}));case 10:return e.abrupt("return",e.sent);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),getProductID:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=Object(d.b)("product/getProduct",function(){var e=Object(O.a)(p.a.mark((function e(t){var r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.page,a=t.sort,e.next=3,v.getProduct({name:r,page:n,sort:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(d.c)({name:"product",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(a={},Object(b.a)(a,w.pending,(function(e,t){e.loading=!0})),Object(b.a)(a,w.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(a,w.rejected,(function(e,t){e.loading=!1,e.error=t.error})),a)}).reducer,k=Object(d.b)("productDetail/getProductDetail",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getProductID(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(d.c)({name:"productDetail",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(c={},Object(b.a)(c,k.pending,(function(e,t){e.loading=!0})),Object(b.a)(c,k.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(c,k.rejected,(function(e,t){e.loading=!1,e.error=t.error})),c)}).reducer,P=Object(d.b)("create_user/createUser",function(){var e=Object(O.a)(p.a.mark((function e(t,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.createUser(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),C={products:I,userLogin:y,userRegister:Object(d.c)({name:"create_user",initialState:{response:null,loading:null,error:null},reducers:{},extraReducers:(i={},Object(b.a)(i,P.pending,(function(e,t){e.response=null,e.loading=!0})),Object(b.a)(i,P.fulfilled,(function(e,t){var r=t.payload;console.log(r),e.response=r,e.loading=!1,e.error=null})),Object(b.a)(i,P.rejected,(function(e,t){e.loading=!1,e.error=t.error})),i)}).reducer,detail:S},N=Object(d.a)({reducer:C}),q=r(165),L=r(42),T=r(21),U=r(289),R=r(68),F=r(295),E=r(294),J=r(117),A=r(33),D=r(296),K=r(297),z=r(298),$=r(6);var _=function(e){var t=e.count,r=U.a.Header,n=Object($.jsx)(R.a,{children:Object($.jsx)(R.a.Item,{icon:Object($.jsx)(D.a,{}),onClick:function(){localStorage.removeItem("accessKey"),sessionStorage.removeItem("cartItem"),window.location.replace("/my-app")},children:Object($.jsx)(F.b,{align:"center",children:" Log-out"})},"3")});return Object(s.useEffect)((function(){}),[]),Object($.jsx)(r,{style:{zIndex:1,width:"100%"},children:Object($.jsxs)(R.a,{theme:"dark",mode:"horizontal",children:[Object($.jsx)(R.a.Item,{style:{fontSize:"1.1rem"},children:Object($.jsx)(A.b,{to:"/my-app/",children:"Home"})},"1"),Object($.jsx)(R.a.Item,{icon:Object($.jsx)(K.a,{style:{fontSize:"1.1rem"}}),children:Object($.jsx)(A.b,{to:"/my-app/cart",children:Object($.jsx)(E.a,{count:t,children:Object($.jsx)("span",{style:{color:"white"},children:"Cart"})})})},"2"),Object($.jsx)(J.a,{overlay:n,placement:"bottomRight",arrow:!0,children:Object($.jsx)(R.a.Item,{icon:Object($.jsx)(z.a,{style:{fontSize:"1.1rem"}}),children:localStorage.accessKey},"3")})]})})},B=(r(266),r(88)),H=r(49),V=r(291),G=r(293),M=r(55),Q=r(96),W=r(48);var X=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.userLogin})),r=t.data,n=t.loading,a=r.status;Object(s.useEffect)((function(){if(a)if("success"===a){var e=r.response;localStorage.setItem("accessKey",[e.useName]),W.b.success("Login success !"),setTimeout((function(){window.location.replace("/my-app/")}),1500)}else"wrong-pass"===a?W.b.error("Password incorrect"):"not-found"===a&&W.b.error("Username incorrect")}),[a,r.response,e]);var c=JSON.parse(localStorage.getItem("rememberToken"));return Object($.jsx)(B.a,{justify:"center",style:{paddingTop:"5rem"},children:Object($.jsxs)(H.a,{span:8,children:[Object($.jsx)("h1",{style:{textAlign:"center"},children:"Login"}),Object($.jsxs)(V.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(t){if(Object(d.d)(e(x({Username:t.username,Password:t.password}))),1==t.remember){var r={name:t.username,pass:t.password};localStorage.setItem("rememberToken",JSON.stringify(r))}else localStorage.removeItem("rememberToken")},autoComplete:"off",children:[Object($.jsx)(V.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],initialValue:c?c.name:"",children:Object($.jsx)(G.a,{})}),Object($.jsx)(V.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],initialValue:c?c.pass:"",children:Object($.jsx)(G.a.Password,{})}),Object($.jsxs)(V.a.Item,{children:[n?Object($.jsx)(M.a,{type:"primary",htmlType:"submit",disabled:!0,loading:!0,children:"Checking"}):Object($.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"}),Object($.jsx)(A.b,{to:"/my-app/register",style:{marginLeft:"1rem"},children:"Register"})]}),Object($.jsx)(V.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object($.jsx)(Q.a,{children:"Remember me"})})]})]})})};var Y=function(){return Object($.jsx)("h1",{children:"404 Error"})};var Z=function(){var e=Object(j.b)(),t=Object(T.f)(),r=Object(j.c)((function(e){return e.userRegister})),n=r.response,a=r.loading;return Object(s.useEffect)((function(){n&&(console.log(typeof n),"object"===typeof n?(W.b.success("Register success !"),setTimeout((function(){t("/my-app/login")}),1500)):"string"===typeof n&&W.b.error("Username already exist !"))}),[n,t]),Object($.jsx)(B.a,{justify:"center",style:{paddingTop:"5rem"},children:Object($.jsxs)(H.a,{span:8,children:[Object($.jsx)("h1",{style:{textAlign:"center"},children:"Register"}),Object($.jsxs)(V.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(t){t.password!=t.re_password?W.b.error("Re-password incorrect",{position:"top-center"}):Object(d.d)(e(P({TenKhachHang:t.fullname,Username:t.username,Password:t.re_password,Email:t.email,Phone:"NULL",Avatar:"NULL"})))},autoComplete:"off",children:[Object($.jsx)(V.a.Item,{label:"Fullname",name:"fullname",rules:[{required:!0,message:"Please input your fullname!"}],children:Object($.jsx)(G.a,{})}),Object($.jsx)(V.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object($.jsx)(G.a,{})}),Object($.jsx)(V.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object($.jsx)(G.a.Password,{})}),Object($.jsx)(V.a.Item,{label:"Re_Password",name:"re_password",rules:[{required:!0,message:"Please input your re-password!"}],children:Object($.jsx)(G.a.Password,{})}),Object($.jsx)(V.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:Object($.jsx)(G.a,{})}),Object($.jsxs)(V.a.Item,{children:[a?Object($.jsx)(M.a,{type:"primary",htmlType:"submit",disabled:!0,children:"Checking"}):Object($.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"}),Object($.jsx)(A.b,{to:"/my-app/login",style:{marginLeft:"1rem"},children:"back"})]})]})]})})},ee=r(31),te=r(159),re=r(116),ne=r(292);var ae=function(e){var t=e.data,r=e.addCart,n=ne.a.Meta;return Object($.jsx)($.Fragment,{children:Object($.jsx)(H.a,{xl:8,lg:8,md:12,sm:12,xs:24,children:Object($.jsx)("div",{className:"site-card-border-less-wrapper",children:Object($.jsx)(ne.a,{style:{width:"100%"},hoverable:!0,cover:Object($.jsx)(A.b,{to:"/product/"+t.id,children:Object($.jsx)("img",{alt:"example",src:t.images,style:{width:"100%",height:"16rem"}})}),actions:[Object($.jsx)(K.a,{onClick:function(){return r(t.id,t.price,t.images,t.name)}},"setting")],children:Object($.jsx)(n,{title:t.name,description:t.price.toLocaleString("vi-vn")+"$"})})})})})},ce=r(89),ie=r.n(ce);var se=function(e){var t=e.addCart,r=Object(j.b)(),n=Object(T.f)(),a=Object(j.c)((function(e){return e.products})),c=a.data,i=a.loading,l=new URLSearchParams(window.location.search),u=l.get("page"),b=l.get("order"),m=l.get("key"),p=ie.a.parse(window.location.search);u||(u=1);var O=window.location.pathname,h=o.a.useState(1),g=Object(L.a)(h,2),f=g[0],x=g[1],y=Object(s.useState)({Key:m,Page:u,Sort:b}),v=Object(L.a)(y,2),I=v[0],k=v[1];Object(s.useEffect)((function(){Object(d.d)(r(w({name:I.Key,page:I.Page,sort:I.Sort})))}),[r,I]);var S=function(){var e=Object(ee.a)(Object(ee.a)({},p),{},{page:Number(u)-1});n({search:ie.a.stringify(e)}),k(Object(ee.a)(Object(ee.a)({},I),{},{Page:Number(u)-1}))},P=function(e){var t=Object(ee.a)(Object(ee.a)({},p),{},{order:e});n({search:ie.a.stringify(t)}),k(Object(ee.a)(Object(ee.a)({},I),{},{Page:u,Sort:e}))};return Object($.jsx)(te.a,{spinning:i,size:"middle",style:{marginTop:"5rem"},children:Object($.jsxs)(B.a,{gutter:[16,26],children:[Object($.jsxs)(H.a,{xl:4,style:{margin:"0 auto",position:"relative"},children:[Object($.jsx)("h1",{children:"Filter"}),Object($.jsxs)(re.a.Group,{onChange:function(e){var t=Object(ee.a)(Object(ee.a)({},p),{},{key:e.target.value,page:1});n({search:ie.a.stringify(t)}),k(Object(ee.a)(Object(ee.a)({},I),{},{Page:1,Key:e.target.value})),x(e.target.value)},value:f,children:[Object($.jsx)(re.a,{value:"cat",children:"Cat"}),Object($.jsx)(re.a,{value:"dog",children:"Dog"}),Object($.jsx)(re.a,{value:"small",children:"0 - 30.000$"}),Object($.jsx)(re.a,{value:"medium",children:"30.000$ - 60.000$"}),Object($.jsx)(re.a,{value:"high",children:"60.000$ - 100.000$"})]}),Object($.jsx)(M.a,{onClick:function(){b?(n("".concat(O,"?order=").concat(b)),k({Page:1,Sort:b})):(n(O),k({Page:1,Key:""})),x("")},style:{marginTop:"1rem"},children:"Cancel Filter"})]}),Object($.jsxs)(H.a,{xl:20,children:[Object($.jsxs)("div",{style:{margin:"0 auto",width:"10rem",display:"block",marginBottom:"1rem"},children:[1==u?Object($.jsx)(M.a,{onClick:S,disabled:!0,children:"Prev"}):Object($.jsx)(M.a,{onClick:S,children:"Prev"}),0==(c||[]).length?Object($.jsx)(M.a,{disabled:!0,children:"Next"}):Object($.jsx)(M.a,{onClick:function(){var e=Object(ee.a)(Object(ee.a)({},p),{},{page:Number(u)+1});n({search:ie.a.stringify(e)}),k(Object(ee.a)(Object(ee.a)({},I),{},{Page:Number(u)+1}))},children:"Next"})]}),Object($.jsx)("div",{children:Object($.jsxs)("h3",{children:["Sort by:"," ",Object($.jsx)("span",{style:{cursor:"pointer",paddingLeft:"1rem",textDecoration:"underline"},onClick:function(){return P("asc")},children:"Low to high"}),Object($.jsx)("span",{style:{cursor:"pointer",paddingLeft:"1rem",textDecoration:"underline"},onClick:function(){return P("desc")},children:"High to low"})]})}),Object($.jsx)(B.a,{gutter:[16,16],children:0==(c||[]).length?Object($.jsx)("div",{style:{margin:"0 auto",marginTop:"3rem"},children:Object($.jsx)("h1",{children:"End page"})}):(c||[]).map((function(e){return Object($.jsx)(ae,{data:e,addCart:t},e.id)}))})]})]})})},oe=r(290),le=r(299);var ue=function(e){var t=e.data,r=Object(s.useRef)(),n=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object($.jsx)("a",{children:e})}},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Price",dataIndex:"price",key:"price"},{title:"Action",key:"action",render:function(r,n){return Object($.jsxs)(F.b,{size:"middle",children:[t.quantity<1?Object($.jsx)(M.a,{disabled:!0,children:"-"}):Object($.jsx)(M.a,{onClick:function(){return e.minus(n.id)},children:"-"}),Object($.jsx)(M.a,{onClick:function(){return e.plus(n.id)},children:"+"}),Object($.jsx)(M.a,{onClick:function(){return e.remove(n.id)},children:Object($.jsx)(le.a,{})})]})}}],a=[{key:t.idItem,id:t.idItem,name:t.name,quantity:Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("p",{children:[" ",t.quantity]}),"Update quatity:",Object($.jsx)("input",{type:"number",min:"1",defaultValue:t.quantity,ref:r,onChange:function(){return e.change(t.idItem,r.current.value)},style:{marginLeft:"1rem"}})]}),price:t.quantity*t.price.toLocaleString("vi-vn")+"$"}];return Object($.jsx)(oe.a,{columns:n,dataSource:a})};var je=function(e){var t=e.removeCartItem,r=e.plus,n=e.minus,a=e.change,c=Object(s.useState)([]),i=Object(L.a)(c,2),o=i[0],l=i[1];Object(s.useEffect)((function(){u()}),[]);var u=function(){var e=JSON.parse(sessionStorage.getItem("cartItem"));e&&l(e)},j=function(e){t(e),u()},d=function(e){r(e),u()},b=function(e){n(e),u()},m=function(e,t){a(e,t),u()};return Object($.jsx)($.Fragment,{children:0!=(o||[]).length&&sessionStorage.cartItem?(o||[]).map((function(e){return Object($.jsx)(ue,{style:{width:"100%"},remove:j,plus:d,minus:b,change:m,data:e,children:" "},e.idItem)})):Object($.jsx)("h1",{style:{textAlign:"center"},children:"No item"})})};var de=function(e){console.log(e);var t=window.location.pathname.split("/product/").splice(1).toString(),r=Object(j.c)((function(e){return e.detail})),n=r.loading,a=r.data,c=Object(j.b)();return console.log(a),Object(s.useEffect)((function(){c(k(t))}),[c,t]),Object($.jsx)(te.a,{spinning:n,children:Object($.jsxs)(B.a,{children:[Object($.jsx)(H.a,{xl:12,children:Object($.jsx)("img",{src:a.images,style:{width:"100%"},alt:""})}),Object($.jsx)(H.a,{xl:12,children:Object($.jsxs)("div",{style:{margin:"0 auto",display:"block",width:"100%",textAlign:"center"},children:[Object($.jsx)("h1",{children:a.name}),Object($.jsxs)("h2",{children:["Price ",a.price,"$"]}),Object($.jsx)(M.a,{onClick:function(){return e.addCart(a.id,a.price,a.images,a.name)},children:"Add to cart"})]})})]})})},be=r(300);var me=function(){return Object($.jsxs)("div",{style:{textAlign:"center",marginTop:"10rem"},children:[Object($.jsx)("h1",{style:{fontSize:"4rem"},children:"Welcome !!!"}),Object($.jsxs)(A.b,{to:"/my-app/login",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:["login to app",Object($.jsx)(be.a,{style:{marginLeft:"1rem"}})]})]})};r(286);var pe=function(e){var t=U.a.Content,r=window.location.pathname.split("/"),n=localStorage.getItem("accessKey"),a=Object(s.useState)([]),c=Object(L.a)(a,2),i=c[0],o=c[1];Object(s.useEffect)((function(){u()}));var l=JSON.parse(sessionStorage.getItem("cartItem")),u=function(){if(l){var e=[];l.map((function(t){return e.push(t.quantity)}));var t=e.reduce((function(e,t){return e+t}));o(t)}},j=function(e,t,r,n){var a={idItem:e,quantity:1,price:t,image:r,name:n};if(null!=l){var c=l.find((function(t){return t.idItem==e}));c?c.quantity+=1:l=[].concat(Object(q.a)(l),[a])}else l=[a];sessionStorage.setItem("cartItem",JSON.stringify(l)),u()};return n?Object($.jsxs)("div",{children:[Object($.jsx)(W.a,{position:"top-center"}),"login"===r[1]?null:Object($.jsx)(_,{count:i}),Object($.jsx)(t,{className:"site-layout",style:{padding:"0 50px",marginTop:20},children:Object($.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object($.jsxs)(T.c,{children:[Object($.jsx)(T.a,{path:"/my-app/",element:Object($.jsx)(se,{addCart:j})}),Object($.jsx)(T.a,{path:"/my-app/cart",element:Object($.jsx)(je,{removeCartItem:function(e){(l||[]).map((function(t,r){(l||[]).length<=1?(sessionStorage.removeItem("cartItem"),o(0)):t.idItem==e&&(l.splice(r,1),sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))},plus:function(e){(l||[]).map((function(t){t.idItem==e&&(t.quantity++,sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))},minus:function(e){(l||[]).map((function(t,r){t.idItem==e&&(t.quantity--,sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))},change:function(e,t){(l||[]).map((function(r){r.idItem==e&&(Number(t)<1||(r.quantity=Number(t),sessionStorage.setItem("cartItem",JSON.stringify(l)),u()))}))}})}),Object($.jsx)(T.a,{path:"/product/:id",element:Object($.jsx)(de,{addCart:j})}),Object($.jsx)(T.a,{path:"*",element:Object($.jsx)(Y,{})})]})})})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(W.a,{position:"top-center"}),Object($.jsxs)(T.c,{children:[Object($.jsx)(T.a,{path:"/my-app/",element:Object($.jsx)(me,{})}),Object($.jsx)(T.a,{path:"/my-app/login",element:Object($.jsx)(X,{})}),Object($.jsx)(T.a,{path:"/my-app/register",element:Object($.jsx)(Z,{})}),Object($.jsx)(T.a,{path:"*",element:Object($.jsx)(Y,{})})]})]})};var Oe=function(){return Object($.jsx)(A.a,{children:Object($.jsx)("div",{className:"App",children:Object($.jsx)(pe,{})})})},he=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,301)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};u.a.render(Object($.jsx)(j.a,{store:N,children:Object($.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[287,1,2]]]);
//# sourceMappingURL=main.4068bfa3.chunk.js.map