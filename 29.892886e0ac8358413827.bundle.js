(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{758:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),n=o(0),r=o(6),s=o(53),u=o(113),a=o(784),p=o(785),c=o(984),h=o(788),l=d=i.__decorate([n.NgModule({imports:[u.NgbModule,r.CommonModule,s.FormsModule,a.ColorPickerModule,p.GameSetupModule,c.SetupViewRouteModule],declarations:[h.SetupViewComponent]})],d);function d(){}t.SetupViewModule=l},788:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),r=o(52),n=o(0),s=o(101),u=o(780),a=o(777),p=o(143),c=(h.prototype.ngOnInit=function(){this.initializeSubscribers()},h.prototype.initializeSubscribers=function(){var t=this;this.route.params.subscribe(function(e){t.hashKey=r.get(t.route.snapshot.params,"hashKey"),t.reset()})},h.prototype.reset=function(){this.hashKey||this.gameSetupService.reset()},h.prototype.getHashKey=function(){return this.hashKey},h.prototype.isStepGenerateRungs=function(){return this.gameSetupStateService.isStepGenerateRungs()},h.prototype.isStepPreviewDetails=function(){return this.gameSetupStateService.isStepPreviewDetails()},h.prototype.getClass=function(){return this.isStepGenerateRungs()?"col-lg-12":this.isStepPreviewDetails()?"col-lg-10 offset-lg-1":"col-lg-6 offset-lg-3"},h.prototype.onSaved=function(){this.router.navigate(["/play/list"])},h.prototype.getAccountId=function(){return this.identityService.getAccountId()},h=i.__decorate([n.Component({selector:"app-setup-view",template:o(985),styles:[o(986)]}),i.__metadata("design:paramtypes",[u.GameSetupStateService,a.GameSetupService,p.IdentityService,s.ActivatedRoute,s.Router])],h));function h(e,t,o,i,n){this.gameSetupStateService=e,this.gameSetupService=t,this.identityService=o,this.route=i,this.router=n,this.hashKey=r.get(this.route.snapshot.params,"hashKey")}t.SetupViewComponent=c},984:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),n=o(0),r=o(101),s=o(788),u=o(789),a=[{path:"",redirectTo:"new",pathMatch:"full"},{path:"new",component:s.SetupViewComponent},{path:"edit/:hashKey",component:s.SetupViewComponent,canActivate:[u.AuthGuardService]}],p=c=i.__decorate([n.NgModule({imports:[r.RouterModule.forChild(a)]})],c);function c(){}t.SetupViewRouteModule=p},985:function(e,t){e.exports='<div class="container h-100">\r\n  <div class="row h-100">\r\n    <div class="pt-3 col-sm-12 mt-2 pb-5 mb-5"\r\n        [ngClass]="getClass()">\r\n      <app-game-setup\r\n          [hashKey]="getHashKey()"\r\n          [accountId]="getAccountId()"\r\n          (onSaved)="onSaved($event)"></app-game-setup>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},986:function(e,t,o){var i=o(987);e.exports="string"==typeof i?i:i.toString()},987:function(e,t,o){(t=o(100)(!1)).push([e.i,".pick-color[readonly]{background:#fff;cursor:pointer}",""]),e.exports=t}}]);