!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkmaterial_dashboard_pro_angular=self.webpackChunkmaterial_dashboard_pro_angular||[]).push([[767],{9767:function(t,i,a){a.r(i),a.d(i,{UserModule:function(){return Se}});var u=a(38583),s=a(39895),d=a(3679),c=a(90670),l=a(47361),g=a(41335),p=a(32789),m=a(40355),f=a(927),h=a(23235),Z=a(84934),v=a(61176),b=a(34958),M=a(37716),y=a(9709),A=a(77001),q=a(22238),T=a(51095),_=a(33935),x=a(76627),C=a(98295),D=a(83166),w=a(99692),N=a(72458),I=["tblUser"];function J(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"button",33),M.NdJ("click",function(){M.CHM(n);var e=M.oxw();return e.refreshData(e.refresh)})("click",function(){return M.CHM(n),M.oxw().criterial=""}),M.TgZ(1,"mat-icon"),M._uU(2,"close"),M.qZA(),M.qZA()}}function k(e,t){1&e&&(M.TgZ(0,"th",34),M._uU(1," ID "),M.qZA())}function S(e,t){if(1&e&&(M.TgZ(0,"td",35),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.xp6(1),M.hij(" ",n.ID," ")}}function U(e,t){1&e&&(M.TgZ(0,"th",34),M._uU(1," Name "),M.qZA())}function Q(e,t){if(1&e&&(M.TgZ(0,"td",35),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.xp6(1),M.hij(" ",n.lastName+" "+n.firstName," ")}}function P(e,t){1&e&&(M.TgZ(0,"th",34),M._uU(1," Username "),M.qZA())}function O(e,t){if(1&e&&(M.TgZ(0,"td",35),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.xp6(1),M.hij(" ",n.userName," ")}}function Y(e,t){1&e&&(M.TgZ(0,"th",34),M._uU(1," Telephone1 "),M.qZA())}function F(e,t){if(1&e&&(M.TgZ(0,"td",35),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.xp6(1),M.hij(" ",n.telephone1," ")}}function H(e,t){1&e&&(M.TgZ(0,"th",34),M._uU(1," telephone2 "),M.qZA())}function L(e,t){if(1&e&&(M.TgZ(0,"td",35),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.xp6(1),M.hij(" ",n.telephone2," ")}}function E(e,t){1&e&&M._UZ(0,"th",34)}function j(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"button",40),M.NdJ("click",function(){M.CHM(n);var e=M.oxw().$implicit;return M.oxw().onClick_edit(e)}),M.TgZ(1,"i",41),M._uU(2,"edit"),M.qZA(),M.qZA()}if(2&e){var r=M.oxw(2);M.Q6J("hidden",!r.permission.isUpdate)}}function z(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"button",42),M.NdJ("click",function(){M.CHM(n);var e=M.oxw().$implicit;return M.oxw().onClick_remove(e)}),M.TgZ(1,"i",41),M._uU(2,"delete"),M.qZA(),M.qZA()}if(2&e){var r=M.oxw(2);M.Q6J("hidden",!r.permission.isDelete)}}function B(e,t){if(1&e&&(M.TgZ(0,"td",36),M.TgZ(1,"div",37),M.YNc(2,j,3,1,"button",38),M.YNc(3,z,3,1,"button",39),M.qZA(),M.qZA()),2&e){var n=M.oxw();M.xp6(2),M.Q6J("ngIf",null!=n.permission),M.xp6(1),M.Q6J("ngIf",null!=n.permission)}}function G(e,t){1&e&&M._UZ(0,"tr",43)}function R(e,t){1&e&&M._UZ(0,"tr",44)}var V,$=((V=function(t){r(a,t);var i=o(a);function a(t,n,r,o){var u;return e(this,a),(u=i.call(this,t)).router=t,u.userService=n,u.matSnackbar=r,u.dialog=o,u.displayedColumns=["ID","Name","Username","Telephone1","Telephone2","action"],u.userList=[],u.dataSourceUser=new p.by,u.pageLength=0,u.pageSizeOptions=[50,100,300],u.criterial="",u.session=new f.E,u}return n(a,[{key:"ngOnInit",value:function(){var e=this;this.dataSourceUser.data=[];var t=this.session.getLoginSession();this.permission=t.group.groupPermission.filter(function(e){return e.pageID==Z.o.usersPageID})[0],this.permission&&1==this.permission.isView?(this.userService.getCountUsers().subscribe(function(t){t.status==m.G.success&&(e.pageLength=t.body[0])}),this.userService.getListUsers(0,50).subscribe(function(t){t.status==m.G.success&&(e.dataSourceUser.data=t.body)})):h.C.showNotification("Permission Denied",Z.o.warningNotify)}},{key:"paginatorEvent",value:function(e){var t=this,n=e.pageIndex*e.pageSize;console.log(n+" page index and page size "+e.pageSize),this.userService.getListUsers(n,e.pageSize).subscribe(function(e){e.status==m.G.success&&(t.dataSourceUser.data=e.body,console.log(e.body))})}},{key:"onClick_New",value:function(){var e={queryParams:{element:JSON.stringify({isEdit:0})}};this.router.navigate(["./user-form"],e)}},{key:"onClick_edit",value:function(e){var t={queryParams:{element:JSON.stringify({ID:e.ID,isEdit:"1"})}};this.router.navigate(["./user-form"],t)}},{key:"onClick_remove",value:function(e){var t=this;this.dialog.open(b.K,{width:"270px",data:{message:"Are you sure ?",title:"Remove"}}).afterClosed().subscribe(function(n){1==n&&t.userService.removeUserByID(e.ID).subscribe(function(n){n.status==m.G.success?(t.matSnackbar.open(n.body[0].toString(),n.status,{duration:3e3}),t.dataSourceUser.data.splice(t.dataSourceUser.data.indexOf(e),1),t.tblUser.renderRows()):t.matSnackbar.open(n.body[0].toString(),n.status,{duration:3e3})})})}},{key:"applyFilter",value:function(e){this.dataSourceUser.filter=e}},{key:"refreshData",value:function(e){this.applyFilter(e)}}]),a}(v.H)).\u0275fac=function(e){return new(e||V)(M.Y36(s.F0),M.Y36(y.K),M.Y36(A.ux),M.Y36(q.uw))},V.\u0275cmp=M.Xpm({type:V,selectors:[["app-user"]],viewQuery:function(e,t){var n;1&e&&M.Gf(I,5),2&e&&M.iGM(n=M.CRH())&&(t.tblUser=n.first)},features:[M.qOj],decls:52,vars:12,consts:[[1,"main-content",3,"hidden"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card","m-0"],[1,"card-body"],[1,"d-flex","justify-content-start"],[1,"subHeaderTitle"],[2,"margin-top","-8px"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"disabled","click"],[1,"col-md-2","mrtb-0","pltb-0"],[1,"fullWidth"],["matPrefix",""],["matInput","","type","text","placeholder","search","name","criterial",3,"ngModel","keyup","ngModelChange"],["class","ml-3","mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-md-10"],[3,"length","pageSize","pageSizeOptions","page"],[1,"tbl-container","table-responsive"],["mat-table","",3,"dataSource","dataSourceChange"],["tblUser",""],["matColumnDef","ID"],["mat-header-cell","","class","text-primary",4,"matHeaderCellDef"],["mat-cell","","matRipple","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Username"],["matColumnDef","Telephone1"],["matColumnDef","Telephone2"],["matColumnDef","action"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","mat-row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",1,"ml-3",3,"click"],["mat-header-cell","",1,"text-primary"],["mat-cell","","matRipple",""],["mat-cell",""],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button","class","btn btn-success btn-link p-1 m-0",3,"hidden","click",4,"ngIf"],["mat-raised-button","","type","button","class","btn btn-danger btn-link p-0 m-0",3,"hidden","click",4,"ngIf"],["mat-raised-button","","type","button",1,"btn","btn-success","btn-link","p-1","m-0",3,"hidden","click"],[1,"material-icons"],["mat-raised-button","","type","button",1,"btn","btn-danger","btn-link","p-0","m-0",3,"hidden","click"],["mat-header-row",""],["mat-row","",1,"mat-row"]],template:function(e,t){if(1&e&&(M.TgZ(0,"div",0),M.TgZ(1,"div",1),M.TgZ(2,"div",2),M.TgZ(3,"div",3),M.TgZ(4,"div",4),M.TgZ(5,"div",5),M.TgZ(6,"div",6),M.TgZ(7,"h4",7),M._uU(8,"User"),M.qZA(),M.TgZ(9,"div",8),M.TgZ(10,"button",9),M.TgZ(11,"mat-icon"),M._uU(12,"more_vert"),M.qZA(),M.qZA(),M.TgZ(13,"mat-menu",null,10),M.TgZ(15,"button",11),M.NdJ("click",function(){return t.onClick_New()}),M.TgZ(16,"mat-icon"),M._uU(17,"dialpad"),M.qZA(),M.TgZ(18,"span"),M._uU(19,"New"),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.TgZ(20,"div",2),M.TgZ(21,"div",12),M.TgZ(22,"mat-form-field",13),M.TgZ(23,"mat-icon",14),M._uU(24,"search"),M.qZA(),M.TgZ(25,"input",15),M.NdJ("keyup",function(e){return t.applyFilter(e.target.value)})("ngModelChange",function(e){return t.criterial=e}),M.qZA(),M.YNc(26,J,3,0,"button",16),M.qZA(),M.qZA(),M.TgZ(27,"div",17),M.TgZ(28,"mat-paginator",18),M.NdJ("page",function(e){return t.paginatorEvent(e)}),M.qZA(),M.qZA(),M.qZA(),M.TgZ(29,"div",19),M.TgZ(30,"table",20,21),M.NdJ("dataSourceChange",function(e){return t.dataSourceUser=e}),M.ynx(32,22),M.YNc(33,k,2,0,"th",23),M.YNc(34,S,2,1,"td",24),M.BQk(),M.ynx(35,25),M.YNc(36,U,2,0,"th",23),M.YNc(37,Q,2,1,"td",24),M.BQk(),M.ynx(38,26),M.YNc(39,P,2,0,"th",23),M.YNc(40,O,2,1,"td",24),M.BQk(),M.ynx(41,27),M.YNc(42,Y,2,0,"th",23),M.YNc(43,F,2,1,"td",24),M.BQk(),M.ynx(44,28),M.YNc(45,H,2,0,"th",23),M.YNc(46,L,2,1,"td",24),M.BQk(),M.ynx(47,29),M.YNc(48,E,1,0,"th",23),M.YNc(49,B,4,2,"td",30),M.BQk(),M.YNc(50,G,1,0,"tr",31),M.YNc(51,R,1,0,"tr",32),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA()),2&e){var n=M.MAs(14);M.Q6J("hidden",!t.permission.isView),M.xp6(10),M.Q6J("matMenuTriggerFor",n),M.xp6(5),M.Q6J("disabled",!t.permission.isAdd),M.xp6(10),M.Q6J("ngModel",t.criterial),M.xp6(1),M.Q6J("ngIf",t.criterial),M.xp6(2),M.Q6J("length",t.pageLength)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions),M.xp6(2),M.Q6J("dataSource",t.dataSourceUser),M.xp6(20),M.Q6J("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),M.xp6(1),M.Q6J("matRowDefColumns",t.displayedColumns)}},directives:[T.lW,_.p6,x.Hw,_.VK,_.OP,C.KE,C.qo,D.Nt,d.Fj,d.JJ,d.On,u.O5,w.NW,p.BZ,p.w1,p.fO,p.Dz,p.as,p.nj,C.R9,p.ge,p.ev,N.wG,p.XQ,p.Gk],styles:[".customerName[_ngcontent-%COMP%]{margin-bottom:0}.place[_ngcontent-%COMP%], phone[_ngcontent-%COMP%]{margin-bottom:0;color:gray;font-size:12px}.placeIconSize[_ngcontent-%COMP%]{font-size:14px!important}.phoneIconSize[_ngcontent-%COMP%]{font-size:14px!important}table[_ngcontent-%COMP%]{width:100%}@media screen and (max-height: 1000px){.tbl-container[_ngcontent-%COMP%]{height:700px;overflow:auto}}@media screen and (max-height: 900px){.tbl-container[_ngcontent-%COMP%]{height:425px;overflow:auto}}mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}.mat-row[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),V),K=a(37453),W=a(89711),X=a(51440),ee=a(37320),te=a(10037),ne=a(49206),re=a(65939),ie=a(82613),oe=a(43220),ae=a(67441);function ue(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," last name is required. "),M.qZA())}function se(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,ue,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(4);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function de(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," first Name is required. "),M.qZA())}function ce(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,de,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(8);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function le(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," date of Birth is required. "),M.qZA())}function ge(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,le,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(19);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function pe(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"mat-option",63),M.NdJ("valueChange",function(e){return M.CHM(n).$implicit.ID=e}),M._uU(1),M.qZA()}if(2&e){var r=t.$implicit;M.Q6J("value",r.ID),M.xp6(1),M.hij("",r.value," ")}}function me(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," position is required. "),M.qZA())}function fe(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,me,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(37);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function he(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," date of join is required. "),M.qZA())}function Ze(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,he,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(42);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function ve(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," length of service is required. "),M.qZA())}function be(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,ve,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(49);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function Me(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"div",4),M.TgZ(1,"div",18),M.TgZ(2,"mat-form-field",19),M.TgZ(3,"input",20,21),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.lastName=e}),M.qZA(),M.YNc(5,se,2,1,"div",22),M.qZA(),M.TgZ(6,"mat-form-field"),M.TgZ(7,"input",23,24),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.firstName=e}),M.qZA(),M.YNc(9,ce,2,1,"div",22),M.qZA(),M.TgZ(10,"label",25),M._uU(11,"Gender"),M.qZA(),M.TgZ(12,"mat-radio-group",26),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.gender=e}),M.TgZ(13,"mat-radio-button",27),M._uU(14,"Female"),M.qZA(),M.TgZ(15,"mat-radio-button",28),M._uU(16,"Male"),M.qZA(),M.qZA(),M.TgZ(17,"mat-form-field"),M.TgZ(18,"input",29,30),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.dob=e})("focus",function(){return M.CHM(n),M.MAs(22).open()}),M.qZA(),M._UZ(20,"mat-datepicker-toggle",31),M._UZ(21,"mat-datepicker",32,33),M.YNc(23,ge,2,1,"div",22),M.qZA(),M.TgZ(24,"mat-form-field"),M.TgZ(25,"input",34,35),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.telephone1=e}),M.qZA(),M.qZA(),M.TgZ(27,"mat-form-field"),M.TgZ(28,"input",36,37),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.telephone2=e}),M.qZA(),M.qZA(),M.TgZ(30,"mat-form-field"),M.TgZ(31,"input",38,39),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.email=e}),M.qZA(),M.qZA(),M.TgZ(33,"mat-form-field"),M.TgZ(34,"mat-label"),M._uU(35,"Position"),M.qZA(),M.TgZ(36,"mat-select",40,41),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.positionID=e}),M.YNc(38,pe,2,2,"mat-option",42),M.qZA(),M.YNc(39,fe,2,1,"div",22),M.qZA(),M.TgZ(40,"mat-form-field"),M.TgZ(41,"input",43,44),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.dateJoined=e})("focus",function(){return M.CHM(n),M.MAs(45).open()})("dateChange",function(){return M.CHM(n),M.oxw().onDateJoinChange()}),M.qZA(),M._UZ(43,"mat-datepicker-toggle",31),M._UZ(44,"mat-datepicker",null,45),M.YNc(46,Ze,2,1,"div",22),M.qZA(),M.TgZ(47,"mat-form-field"),M.TgZ(48,"input",46,47),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.lengthOfService=e}),M.qZA(),M.YNc(50,be,2,1,"div",22),M.qZA(),M.qZA(),M.TgZ(51,"div",48),M.TgZ(52,"mat-form-field"),M.TgZ(53,"input",49,50),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.streetNo=e}),M.qZA(),M.qZA(),M.TgZ(55,"mat-form-field"),M.TgZ(56,"input",51,52),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.homeNo=e}),M.qZA(),M.qZA(),M.TgZ(58,"mat-form-field"),M.TgZ(59,"input",53,54),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.province=e}),M.qZA(),M.qZA(),M.TgZ(61,"mat-form-field"),M.TgZ(62,"input",55,56),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.district=e}),M.qZA(),M.qZA(),M.TgZ(64,"mat-form-field"),M.TgZ(65,"input",57,58),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.commune=e}),M.qZA(),M.qZA(),M.TgZ(67,"mat-form-field"),M.TgZ(68,"input",59,60),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.village=e}),M.qZA(),M.qZA(),M.qZA(),M.qZA()}if(2&e){var r=M.MAs(4),i=M.MAs(8),o=M.MAs(19),a=M.MAs(22),u=M.MAs(37),s=M.MAs(42),d=M.MAs(45),c=M.MAs(49),l=M.oxw();M.xp6(3),M.Q6J("ngModel",l.user.lastName),M.xp6(2),M.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),M.xp6(2),M.Q6J("ngModel",l.user.firstName),M.xp6(2),M.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),M.xp6(3),M.Q6J("ngModel",l.user.gender),M.xp6(1),M.Q6J("checked",!0),M.xp6(5),M.Q6J("ngModel",l.user.dob)("matDatepicker",a),M.xp6(2),M.Q6J("for",a),M.xp6(1),M.Q6J("startAt",l.startDate),M.xp6(2),M.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),M.xp6(2),M.Q6J("ngModel",l.user.telephone1),M.xp6(3),M.Q6J("ngModel",l.user.telephone2),M.xp6(3),M.Q6J("ngModel",l.user.email),M.xp6(5),M.Q6J("ngModel",l.user.positionID),M.xp6(2),M.Q6J("ngForOf",l.positionTypeList),M.xp6(1),M.Q6J("ngIf",u.invalid&&(u.dirty||u.touched)),M.xp6(2),M.Q6J("ngModel",l.user.dateJoined)("matDatepicker",d),M.xp6(2),M.Q6J("for",d),M.xp6(3),M.Q6J("ngIf",s.invalid&&(s.dirty||s.touched)),M.xp6(2),M.Q6J("ngModel",l.user.lengthOfService),M.xp6(2),M.Q6J("ngIf",c.invalid&&(c.dirty||c.touched)),M.xp6(3),M.Q6J("ngModel",l.user.streetNo),M.xp6(3),M.Q6J("ngModel",l.user.homeNo),M.xp6(3),M.Q6J("ngModel",l.user.province),M.xp6(3),M.Q6J("ngModel",l.user.district),M.xp6(3),M.Q6J("ngModel",l.user.commune),M.xp6(3),M.Q6J("ngModel",l.user.village)}}function ye(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," user name is required. "),M.qZA())}function Ae(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,ye,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(4);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function qe(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," user password is required. "),M.qZA())}function Te(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,qe,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(10);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function _e(e,t){if(1&e&&(M.TgZ(0,"mat-option",77),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.Q6J("value",n.ID),M.xp6(1),M.Oqu(n.name)}}function xe(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," department is required. "),M.qZA())}function Ce(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,xe,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(21);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function De(e,t){if(1&e&&(M.TgZ(0,"mat-option",77),M._uU(1),M.qZA()),2&e){var n=t.$implicit;M.Q6J("value",n.ID),M.xp6(1),M.Oqu(n.group)}}function we(e,t){1&e&&(M.TgZ(0,"div"),M._uU(1," group is required. "),M.qZA())}function Ne(e,t){if(1&e&&(M.TgZ(0,"div",61),M.YNc(1,we,2,0,"div",62),M.qZA()),2&e){M.oxw();var n=M.MAs(30);M.xp6(1),M.Q6J("ngIf",n.errors.required)}}function Ie(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"div",4),M.TgZ(1,"div",64),M.TgZ(2,"mat-form-field",19),M.TgZ(3,"input",65,66),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.userName=e}),M.qZA(),M.YNc(5,Ae,2,1,"div",22),M.qZA(),M.qZA(),M.qZA(),M.TgZ(6,"div",4),M.TgZ(7,"div",64),M.TgZ(8,"mat-form-field"),M.TgZ(9,"input",67,68),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.password=e}),M.qZA(),M.TgZ(11,"button",69),M.NdJ("click",function(){M.CHM(n);var e=M.oxw();return e.hide=!e.hide}),M.TgZ(12,"mat-icon"),M._uU(13),M.qZA(),M.qZA(),M.YNc(14,Te,2,1,"div",22),M.qZA(),M.qZA(),M.qZA(),M.TgZ(15,"div",4),M.TgZ(16,"div",64),M.TgZ(17,"mat-form-field"),M.TgZ(18,"mat-label"),M._uU(19,"Department"),M.qZA(),M.TgZ(20,"mat-select",70,71),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().departmentID=e})("ngModelChange",function(){return M.CHM(n),M.oxw().onDepartmentSelectChanged()}),M.YNc(22,_e,2,2,"mat-option",72),M.qZA(),M.YNc(23,Ce,2,1,"div",22),M.qZA(),M.qZA(),M.qZA(),M.TgZ(24,"div",4),M.TgZ(25,"div",73),M.TgZ(26,"mat-form-field",74),M.TgZ(27,"mat-label"),M._uU(28,"group"),M.qZA(),M.TgZ(29,"mat-select",75,76),M.NdJ("ngModelChange",function(e){return M.CHM(n),M.oxw().user.groupID=e}),M.YNc(31,De,2,2,"mat-option",72),M.qZA(),M.YNc(32,Ne,2,1,"div",22),M.qZA(),M.qZA(),M.qZA()}if(2&e){var r=M.MAs(4),i=M.MAs(10),o=M.MAs(21),a=M.MAs(30),u=M.oxw();M.xp6(3),M.Q6J("ngModel",u.user.userName),M.xp6(2),M.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),M.xp6(4),M.Q6J("type",u.hide?"password":"text")("ngModel",u.user.password),M.xp6(2),M.uIk("aria-label","Hide password")("aria-pressed",u.hide),M.xp6(2),M.Oqu(u.hide?"visibility_off":"visibility"),M.xp6(1),M.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),M.xp6(6),M.Q6J("ngModel",u.departmentID),M.xp6(2),M.Q6J("ngForOf",u.departmentList),M.xp6(1),M.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),M.xp6(6),M.Q6J("ngModel",u.user.groupID),M.xp6(2),M.Q6J("ngForOf",u.groupList),M.xp6(1),M.Q6J("ngIf",a.invalid&&(a.dirty||a.touched))}}var Je=[{path:"",children:[{path:"users",component:$},{path:"user-form",component:function(){var t=function(t){r(a,t);var i=o(a);function a(t,n,r,o,u,s,d,c,l){var g;return e(this,a),(g=i.call(this,d)).datePip=t,g.userService=n,g.predataService=r,g.groupService=o,g.departmentService=u,g.activateRoute=s,g.router=d,g.matSnackbar=c,g.dialog=l,g.hide=!0,g.user=new K.T,g.session=new f.E,g}return n(a,[{key:"ngOnInit",value:function(){var e=this.session.getLoginSession();this.permission=e.group.groupPermission.filter(function(e){return e.pageID==Z.o.userFormPageID})[0],this.permission&&1==this.permission.isView?(this.isEdit="0",this.userEditor=null,this.getStaffPosition(),this.getListDepartments(),this.onLoadData()):h.C.showNotification("Permission Denied",Z.o.warningNotify)}},{key:"onClick_Save",value:function(){var e=this;this.dialog.open(b.K,{width:"270px",data:{message:"Are you sure ?",title:"Save"}}).afterClosed().subscribe(function(t){if(1==t){try{e.user.group=e.groupList.filter(function(t){return t.ID.toString().includes(e.user.groupID.toString())})[0]}catch(r){return void e.matSnackbar.open("Invalid group","Error",{duration:3e3})}e.user.dob=e.datePip.transform(e.user.dob),e.user.dateJoined=e.datePip.transform(e.user.dateJoined);var n=JSON.stringify(e.user.password);e.user.password=W.j.encrypt_req(e.user.password),e.userService.addUsers(e.user).subscribe(function(t){e.user.password=n,t.status==m.G.success?(e.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3}),e.router.navigate(["/users"])):(null!=e.user.dob&&(e.user.dob=new Date(e.user.dob)),null!=e.user.dateJoined&&(e.user.dateJoined=new Date(e.user.dateJoined)),e.matSnackbar.open(t.body[0].toString(),t.status,{duration:3e3}))})}else console.log("Data is cancel")})}},{key:"onLoadData",value:function(){var e=this;this.activateRoute.queryParams.subscribe(function(t){if(t.element){var n=JSON.parse(t.element);"1"==n.isEdit&&(e.isEdit="1",e.userService.findUserByID(n.ID).subscribe(function(t){t.status==m.G.success&&t.body.length>0&&(e.user=t.body[0],e.onDateJoinChange(),e.departmentID=e.user.group.departmentID,e.getGroupByDeparmentID(e.departmentID))}))}})}},{key:"userTypeSelectionChanged",value:function(e){console.log(e)}},{key:"onDepartmentSelectChanged",value:function(){this.getGroupByDeparmentID(this.departmentID)}},{key:"getStaffPosition",value:function(){var e=this;this.predataService.getPreDefinedsByCriterial(Z.o.staff_position).subscribe(function(t){t.status==m.G.success&&t.body.length>0&&(e.positionTypeList=t.body)})}},{key:"getListDepartments",value:function(){var e=this;this.departmentService.getListDepartments().subscribe(function(t){t.status==m.G.success&&t.status.length>0&&(e.departmentList=t.body)})}},{key:"getGroupByDeparmentID",value:function(e){var t=this;this.groupService.getGroupByDepartmentID(e).subscribe(function(e){e.status==m.G.success&&e.status.length>0&&(t.groupList=e.body,t.user.group?(t.user.group=t.groupList.filter(function(e){return e.ID.toString().includes(t.user.groupID.toString())})[0],t.user.groupID=t.user.group.ID):t.user.groupID=t.groupList[0].ID)})}},{key:"onDateJoinChange",value:function(){try{if((new Date).getTime()>new Date(this.user.dateJoined).getTime()){var e=this.datePip.dateDiff(new Date(this.user.dateJoined),new Date);if(e>=365){var t=Math.floor(e/365),n=(new Date).getMonth()-this.user.dateJoined.getMonth();this.user.lengthOfService=t+"years "+Math.floor(n)+" months "}else e/=30,this.user.lengthOfService=e<1?30*e+" days":Math.round(e)+" months"}}catch(e){console.log(e),this.user.lengthOfService="invalid length of service"}}}]),a}(v.H);return t.\u0275fac=function(e){return new(e||t)(M.Y36(X.E),M.Y36(y.K),M.Y36(ee.y),M.Y36(te.l),M.Y36(ne.n),M.Y36(s.gz),M.Y36(s.F0),M.Y36(A.ux),M.Y36(q.uw))},t.\u0275cmp=M.Xpm({type:t,selectors:[["app-user-form"]],features:[M.qOj],decls:34,vars:6,consts:[[1,"m-2",2,"overflow-x","hidden",3,"hidden"],["userForm","ngForm"],[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"d-flex","justify-content-start"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"hidden","disabled","click"],["mat-menu-item",""],["label","User info"],["matTabContent",""],["label","User Grant"],[1,"d-flex","justify-content-end"],["mat-raised-button","","type","button",1,"btn","btn-primary","btn-sm",3,"hidden","disabled","click"],[1,"col-md-6","col-sm-6"],[1,"mt-4"],["matInput","","name","lastName","id","lastName","placeholder","last Name (En)",3,"ngModel","ngModelChange"],["lastName","ngModel"],["class","alert alert-danger",4,"ngIf"],["matInput","","name","firstName","id","firstName","placeholder","first Name (En)",3,"ngModel","ngModelChange"],["firstName","ngModel"],["id","example-radio-group-label",1,"ml-2","mr-2"],["name","gender","aria-label","Select Gender",3,"ngModel","ngModelChange"],["value","1",1,"mr-2",3,"checked"],["value","2"],["id","dob","name","dob","placeholder","Date of Birth","matInput","",3,"ngModel","matDatepicker","ngModelChange","focus"],["dob","ngModel"],["matSuffix","",3,"for"],[3,"startAt"],["picker",""],["matInput","","name","telephone1","id","telephone1","placeholder","Telephone 1",3,"ngModel","ngModelChange"],["telephone1","ngModel"],["matInput","","name","telephone2","id","telephone2","placeholder","Telephone 2",3,"ngModel","ngModelChange"],["telephone2","ngModel"],["matInput","","name","email","id","email","placeholder","Email",3,"ngModel","ngModelChange"],["email","ngModel"],["name","positionID","id","positionID",3,"ngModel","ngModelChange"],["positionID","ngModel"],[3,"value","valueChange",4,"ngFor","ngForOf"],["id","dateofjoin","name","dateJoined","placeholder","Date of Join","matInput","",3,"ngModel","matDatepicker","ngModelChange","focus","dateChange"],["dateJoined","ngModel"],["pickerDateJoin",""],["matInput","","name","user.lengthOfService","id","lengthOfService","placeholder","Length of service",3,"ngModel","ngModelChange"],["lengthOfService","ngModel"],[1,"col-md-6","col-sm-6","mt-4"],["matInput","","name","streetNo","id","streetNo","placeholder","Street No",3,"ngModel","ngModelChange"],["streetNo","ngModel"],["matInput","","name","homeNo","id","homeNo","placeholder","homeNo",3,"ngModel","ngModelChange"],["homeNo","ngModel"],["matInput","","id","province","name","province","id","province","placeholder","province",3,"ngModel","ngModelChange"],["province","ngModel"],["matInput","","name","district","id","district","placeholder","district",3,"ngModel","ngModelChange"],["district","ngModel"],["matInput","","name","commune","id","commune","placeholder","commune",3,"ngModel","ngModelChange"],["commune","ngModel"],["matInput","","name","village","id","village","placeholder","Village",3,"ngModel","ngModelChange"],["village","ngModel"],[1,"alert","alert-danger"],[4,"ngIf"],[3,"value","valueChange"],[1,"col-md-6","col-sm-12"],["matInput","","id","userName","name","userName","placeholder","user name",3,"ngModel","ngModelChange"],["userName","ngModel"],["matInput","","id","password","name","password","placeholder","password",3,"type","ngModel","ngModelChange"],["password","ngModel"],["mat-icon-button","","matSuffix","",3,"click"],["name","departmentID",3,"ngModel","ngModelChange"],["department","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"w-100"],["name","groupID",3,"ngModel","ngModelChange"],["group","ngModel"],[3,"value"]],template:function(e,t){if(1&e&&(M.TgZ(0,"form",0,1),M.TgZ(2,"div",2),M.TgZ(3,"div",3),M.TgZ(4,"div",4),M.TgZ(5,"div",5),M.TgZ(6,"div",6),M.TgZ(7,"div",7),M.TgZ(8,"div",8),M._UZ(9,"div"),M.TgZ(10,"div"),M.TgZ(11,"button",9),M.TgZ(12,"mat-icon"),M._uU(13,"more_vert"),M.qZA(),M.qZA(),M.TgZ(14,"mat-menu",null,10),M.TgZ(16,"button",11),M.NdJ("click",function(){return t.onClick_Save()}),M.TgZ(17,"mat-icon"),M._uU(18,"add"),M.qZA(),M.TgZ(19,"span"),M._uU(20,"Save"),M.qZA(),M.qZA(),M.TgZ(21,"button",12),M.TgZ(22,"mat-icon"),M._uU(23,"cancel"),M.qZA(),M.TgZ(24,"span"),M._uU(25,"cancel"),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.TgZ(26,"mat-tab-group"),M.TgZ(27,"mat-tab",13),M.YNc(28,Me,70,29,"ng-template",14),M.qZA(),M.TgZ(29,"mat-tab",15),M.YNc(30,Ie,33,14,"ng-template",14),M.qZA(),M.qZA(),M.TgZ(31,"div",16),M.TgZ(32,"button",17),M.NdJ("click",function(){return t.onClick_Save()}),M._uU(33," Save "),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA(),M.qZA()),2&e){var n=M.MAs(1),r=M.MAs(15);M.Q6J("hidden",!t.permission.isView),M.xp6(11),M.Q6J("matMenuTriggerFor",r),M.xp6(5),M.Q6J("hidden",!t.permission.isAdd)("disabled",n.invalid),M.xp6(16),M.Q6J("hidden",!t.permission.isAdd)("disabled",n.invalid)}},directives:[d._Y,d.JL,d.F,T.lW,_.p6,x.Hw,_.VK,_.OP,re.SP,re.uX,re.Vc,C.KE,D.Nt,d.Fj,d.JJ,d.On,u.O5,ie.VQ,ie.U0,oe.hl,oe.nW,C.R9,oe.Mq,C.hX,ae.gD,u.sg,N.ey],styles:["mat-cell[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-weight:400}"]}),t}()}]}],ke=a(79019),Se=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=M.oAB({type:t}),t.\u0275inj=M.cJS({providers:[{provide:N._A,useClass:ke.B},{provide:N.sG,useValue:ke.F}],imports:[[u.ez,s.Bz.forChild(Je),d.u5,d.UX,c.TW,l.vO,g.q]]}),t}()},84934:function(e,t,n){n.d(t,{o:function(){return i}});var r,i=((r=i||(i={})).CKSNFILE="CKSNFILE",r.staff_position="staff_position",r.group_list="group_list",r.limit_file_upload="limit_file_upload",r.permission_page="permission_page",r.container_size="container_size",r.gw_unit_type="gw_unit_type",r.quantity_unit_type="quantity_unit_type",r.cbm_unit_type="cbm_unit_type",r.record_status="record_status",r.booking_mode="booking_mode",r.incoterm="incoterm",r.carrier="carrier",r.pod="pod",r.pol="pol",r.lcl="load_container_less",r.clientType="Client Type",r.border="border",r.operationgroup="1",r.tansportationgroup="2",r.brokergroup="3",r.seaPortType="1",r.driver="21",r.dem_due_warning="dem_due_warning",r.det_due_warning="det_due_warning",r[r.bookingsPageID=1]="bookingsPageID",r[r.bookingFormPageID=2]="bookingFormPageID",r[r.customersPageID=3]="customersPageID",r[r.customerFormPageID=4]="customerFormPageID",r[r.businessPageID=5]="businessPageID",r[r.businessFormPageID=6]="businessFormPageID",r[r.usersPageID=7]="usersPageID",r[r.userFormPageID=8]="userFormPageID",r[r.groupsPageID=9]="groupsPageID",r[r.groupFormPageID=10]="groupFormPageID",r[r.predataPageID=11]="predataPageID",r[r.predataFormPageID=12]="predataFormPageID",r[r.containerPageID=13]="containerPageID",r[r.department=14]="department",r[r.portSummary=15]="portSummary",r[r.portForm=16]="portForm",r[r.truckSummary=17]="truckSummary",r[r.truckForm=18]="truckForm",r[r.report=19]="report",r[r.dashboardID=20]="dashboardID",r[r.carrierID=21]="carrierID",r.billType="billType",r.warningNotify="warning",r.infoNotify="info",r.successNotify="success",r.dangerNotify="danger",r.roseNotify="rose",r.primaryNotify="primary",r[r.type_of_shipper_exporter_seller=84]="type_of_shipper_exporter_seller",r[r.type_of_consignee=85]="type_of_consignee",r[r.type_of_notify_party=86]="type_of_notify_party",r[r.type_of_customer=87]="type_of_customer",r[r.group_operation=1]="group_operation",r[r.group_transportation=2]="group_transportation",r[r.group_admin=5]="group_admin",r.containerStatus="containerStatus",r[r.containerStatus_DONE=93]="containerStatus_DONE",r.booking_status="booking_status",r[r.booking_status_new=36]="booking_status_new",r[r.booking_status_done=37]="booking_status_done",r[r.allValue=0]="allValue",r.all="All",r.multiDropStatus="MultiDropStatus",i)},37320:function(t,i,a){a.d(i,{y:function(){return p}});var u,s=a(65136),d=a(82327),c=a(37716),l=a(91841),g=a(39895),p=((u=function(t){r(a,t);var i=o(a);function a(t,n){var r;return e(this,a),(r=i.call(this,n)).http=t,r}return n(a,[{key:"getPreDefinedsByCriterial",value:function(e){return this.http.post(d.V.getPredataByCriterial,{criterial:e})}},{key:"addPreData",value:function(e){return this.http.post(d.V.addPreData,{predata:e})}},{key:"getListPredatas",value:function(e,t,n){return e||(e="all"),this.http.post(d.V.getListPredatas,{criterial:e,pageIndex:t,pageSize:n})}},{key:"getListCriterial",value:function(){return this.http.post(d.V.getListCriterial,{})}},{key:"getCountPredatas",value:function(e){return this.http.post(d.V.getCountPredatas,{criterial:e})}}]),a}(s.b)).\u0275fac=function(e){return new(e||u)(c.LFG(l.eN),c.LFG(g.F0))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u)},79019:function(t,i,a){a.d(i,{B:function(){return s},F:function(){return d}});var u=a(72458),s=function(t){r(a,t);var i=o(a);function a(){return e(this,a),i.apply(this,arguments)}return n(a,[{key:"format",value:function(e,t){if("input"===t){var n=e.getDate().toString();n=+n<10?"0"+n:n;var r=(e.getMonth()+1).toString();return r=+r<10?"0"+r:r,"".concat(n,"-").concat(r,"-").concat(e.getFullYear())}return e.toDateString()}}]),a}(u.LF),d={parse:{dateInput:{month:"short",year:"numeric",day:"numeric"}},display:{dateInput:"input",monthYearLabel:{year:"numeric",month:"numeric"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}}}}])}();