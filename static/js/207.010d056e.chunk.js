"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[207],{1207:function(n,e,r){r.r(e),r.d(e,{default:function(){return Pn}});var t,o,i,a,l,s,c,d,u,p,x,m,b,f,h,g,Z,v,j,y,w,k,P,z,C=r(9439),A=r(2791),N=r(5984),T=r(168),F=r(6444),E=F.ZP.form(t||(t=(0,T.Z)(["\n  padding: 10px;\n  width: 400px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 10px;\n"])),(function(n){return n.theme.borders.borderColorMain})),S=F.ZP.label(o||(o=(0,T.Z)(["\n  text-align: left;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),M=F.ZP.input(i||(i=(0,T.Z)(["\n  width: 300px;\n  height: 24px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid black;\n  &:hover,\n  &:focus {\n    color: #c75124;\n    border: 1px solid #c75124;\n  }\n"]))),_=F.ZP.button(a||(a=(0,T.Z)(["\n  margin-right: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  height: 24px;\n  font-size: 14px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: lightblue;\n\n  &:hover {\n    color: #c75124;\n    border: 1px solid #c75124;\n  }\n"]))),I=F.ZP.div(l||(l=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),L=F.ZP.p(s||(s=(0,T.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 0;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),q=r(3855),R=r(3433),K=r(6916),B=function(n){return n.contacts.items},D=(0,K.P1)(B,(function(n){return(0,R.Z)(n).sort((function(n,e){return n.name.localeCompare(e.name)}))})),G=function(n){return n.contacts.filter},J=(0,K.P1)([D,G],(function(n,e){var r=isNaN(e);return" "===e?n:r?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):r?void 0:n.filter((function(n){return n.number.includes(e)}))})),W=r(464),$=r(8174),H=r(3329),O=function(){var n=(0,A.useState)(""),e=(0,C.Z)(n,2),r=e[0],t=e[1],o=(0,A.useState)(""),i=(0,C.Z)(o,2),a=i[0],l=i[1],s=(0,q.I0)(),c=(0,q.v9)(B),d=function(n){switch(n.currentTarget.name){case"name":t(n.currentTarget.value);break;case"number":l(n.currentTarget.value)}},u=function(){t(""),l("")};return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(I,{children:[(0,H.jsx)(L,{children:"Contact Card"}),(0,H.jsxs)(E,{onSubmit:function(n){n.preventDefault();var e={id:(0,N.x0)(),name:r,number:a};if(c.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return $.Am.warning("".concat(e.name," is already in the contact list"));s(W.uK(e)),console.log(e),u()},children:[(0,H.jsx)(S,{htmlFor:"name",children:"Name"}),(0,H.jsx)(M,{type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,H.jsx)(S,{htmlFor:"number",children:"Number"}),(0,H.jsx)(M,{type:"tel",name:"number",value:a,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,H.jsx)(_,{type:"submit",children:"Add contact"})]})]})})},Q=r(6355),U=r(7425),V=F.ZP.li(c||(c=(0,T.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 10px;\n"]))),X=F.ZP.p(d||(d=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 8px;\n  color: ",";\n\n  svg {\n    display: block;\n    margin-right: 12px;\n    fill: #c75124;\n  }\n"])),(function(n){return n.theme.colors.text})),Y=F.ZP.button(u||(u=(0,T.Z)(["\n  border: 1px solid black;\n  border-radius: 5px;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  height: 24px;\n  font-size: 14px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: lightblue;\n\n  &:hover {\n    color: #c75124;\n    border: 1px solid #c75124;\n\n    svg {\n      fill: #c75124;\n    }\n  }\n"]))),nn=F.ZP.button(p||(p=(0,T.Z)(["\n  margin-right: 14px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  height: 24px;\n  font-size: 14px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: lightblue;\n\n  &:hover {\n    color: #c75124;\n    border: 1px solid #c75124;\n\n    svg {\n      fill: #c75124;\n    }\n  }\n"]))),en=r(6457),rn=r(4164),tn=F.ZP.div(x||(x=(0,T.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n"]))),on=F.ZP.div(m||(m=(0,T.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 180px;\n  max-width: 440px;\n  width: 100%;\n  padding: 18px;\n  background-color: rgb(214, 235, 248);\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),an=F.ZP.button(b||(b=(0,T.Z)(["\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  display: flex;\n  align-items: left;\n  justify-content: left;\n  border-radius: 50%;\n  border: 1px solid black;\n  color: black;\n  cursor: pointer;\n  padding: 0;\n  background-color: lightblue;\n\n  &:hover {\n    color: #c75124;\n    border: 1px solid #c75124;\n    svg {\n      fill: #c75124;\n    }\n  }\n"]))),ln=document.querySelector("#modal-root"),sn=function(n){var e=n.children,r=n.closeModal;(0,A.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));return(0,rn.createPortal)((0,H.jsx)(tn,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,H.jsxs)(on,{children:[(0,H.jsx)(an,{onClick:r,children:(0,H.jsx)(U.tgW,{size:en.EA.sm})}),e]})}),ln)},cn=F.ZP.form(f||(f=(0,T.Z)(["\n  padding: 10px;\n  width: 400px;\n  border: 1px solid black;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 10px;\n"]))),dn=F.ZP.label(h||(h=(0,T.Z)(["\n  text-align: left;\n"]))),un=F.ZP.input(g||(g=(0,T.Z)(["\n  width: 300px;\n  height: 24px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid black;\n  &:hover,\n  &:focus {\n    color: #c75124;\n    border: 1px solid #c75124;\n  }\n"]))),pn=F.ZP.button(Z||(Z=(0,T.Z)(["\n  margin-right: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  height: 24px;\n  font-size: 14px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: lightblue;\n\n  &:hover {\n    color: #c75124;\n    border: 1px solid #c75124;\n  }\n"]))),xn=F.ZP.div(v||(v=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),mn=function(n){var e=n.id,r=n.filledName,t=n.filledNumber,o=(0,A.useState)(r),i=(0,C.Z)(o,2),a=i[0],l=i[1],s=(0,A.useState)(t),c=(0,C.Z)(s,2),d=c[0],u=c[1],p=(0,q.I0)(),x=function(n){switch(n.currentTarget.name){case"name":l(n.currentTarget.value);break;case"number":u(n.currentTarget.value)}};return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(xn,{children:(0,H.jsxs)(cn,{onSubmit:function(n){n.preventDefault();var r={id:e,name:a,number:d};console.log(r),p(W.mP(r))},children:[(0,H.jsx)(dn,{htmlFor:"name",children:"Name"}),(0,H.jsx)(un,{type:"text",name:"name",value:a,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,H.jsx)(dn,{htmlFor:"number",children:"Number"}),(0,H.jsx)(un,{type:"tel",name:"number",value:d,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,H.jsx)(pn,{type:"submit",children:"Save"})]})})})},bn=function(n){var e=n.id,r=n.name,t=n.number,o=(0,q.I0)(),i=(0,A.useState)(!1),a=(0,C.Z)(i,2),l=a[0],s=a[1],c=function(){s(!1)};return(0,H.jsxs)(V,{children:[(0,H.jsxs)(X,{children:[(0,H.jsx)(Q.I7T,{size:en.EA.xs})," ",r," : ",t]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(nn,{type:"button",onClick:function(){s(!0)},children:(0,H.jsx)(U.cWi,{size:en.EA.sm})}),(0,H.jsx)(Y,{type:"button",onClick:function(){return n=e,void o(W.GK(n));var n},children:(0,H.jsx)(U.GnT,{size:en.EA.sm})})]}),l&&(0,H.jsx)(sn,{closeModal:c,children:(0,H.jsx)(mn,{id:e,filledName:r,filledNumber:t,closeModal:c})})]})},fn=F.ZP.ul(j||(j=(0,T.Z)(["\n  width: 400px;\n  padding: 8px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  margin-top: 0;\n  margin-bottom: 0;\n"])),(function(n){return n.theme.borders.borderColorMain})),hn=F.ZP.p(y||(y=(0,T.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 0;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),gn=F.ZP.div(w||(w=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Zn=function(){var n=(0,q.v9)(J),e=(0,q.v9)(B).length,r=(0,q.I0)();return(0,A.useEffect)((function(){r(W.K2())}),[r]),(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(gn,{children:[(0,H.jsx)(hn,{children:"My contacts"}),(0,H.jsx)(fn,{children:e>0?n.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,H.jsx)(bn,{id:e,name:r,number:t},e)})):(0,H.jsx)("p",{children:"There isn't contact whis that name "})})]})})},vn=F.ZP.label(k||(k=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),jn=F.ZP.p(P||(P=(0,T.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 0;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),yn=r(1538),wn=function(){var n=(0,q.I0)(),e=(0,q.v9)(G);return(0,H.jsxs)(vn,{children:[(0,H.jsx)(jn,{children:"Find Contacts by name"}),(0,H.jsx)(M,{type:"text",value:e,onChange:function(e){n((0,yn.T)(e.currentTarget.value))}})]})},kn=F.ZP.div(z||(z=(0,T.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-right: 50px;\n  margin-left: 50px;\n"]))),Pn=function(){return(0,H.jsxs)(kn,{children:[(0,H.jsx)(O,{}),(0,H.jsx)(wn,{}),(0,H.jsx)(Zn,{})]})}}}]);
//# sourceMappingURL=207.010d056e.chunk.js.map