(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1008:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=o(0),d=o(101),i=[{path:"",component:o(793).GameViewComponent}],a=s=r.__decorate([n.NgModule({imports:[d.RouterModule.forChild(i)]})],s);function s(){}e.GameViewRouteModule=a},1009:function(t,e){t.exports='<div class="game-container h-100 px-4 px-lg-5">\r\n    <table class="table table-sm">\r\n        <thead>\r\n          <tr>\r\n            <th scope="col">#</th>\r\n            <th scope="col">First</th>\r\n            <th scope="col">Last</th>\r\n            <th scope="col">Handle</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope="row">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope="row">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope="row">3</th>\r\n            <td colspan="2">Larry the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n</div>\r\n'},1010:function(t,e,o){var r=o(1011);t.exports="string"==typeof r?r:r.toString()},1011:function(t,e,o){(e=o(100)(!1)).push([t.i,"",""]),t.exports=e},759:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=o(0),d=o(6),i=o(53),a=o(113),s=o(782),c=o(1008),p=o(793),u=l=r.__decorate([n.NgModule({declarations:[p.GameViewComponent],imports:[a.NgbModule,d.CommonModule,i.FormsModule,s.RungGeneratorModule,c.GameViewRouteModule],providers:[]})],l);function l(){}e.GameViewModule=u},793:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=o(0),d=(i.prototype.getColumns=function(){return[{id:1},{id:2},{id:3}]},i.prototype.getRows=function(){return[{id:1},{id:2},{id:3},{id:4}]},i.prototype.trackBy=function(t){return t},i=r.__decorate([n.Component({selector:"app-game-view",template:o(1009),styles:[o(1010)]}),r.__metadata("design:paramtypes",[])],i));function i(){}e.GameViewComponent=d}}]);