(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{94:function(e,t,o){"use strict";o.r(t),o.d(t,"CookieService",function(){return i});var r=o(1),n=o(0),c=o(4),i=(s.prototype.check=function(e){return!!this.documentIsAccessible&&(e=encodeURIComponent(e),this.getCookieRegExp(e).test(this.document.cookie))},s.prototype.get=function(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);var t=this.getCookieRegExp(e).exec(this.document.cookie);return this.safeDecodeURIComponent(t[1])}return""},s.prototype.getAll=function(){var c=this;if(!this.documentIsAccessible)return{};var i={},e=this.document;return e.cookie&&""!==e.cookie&&e.cookie.split(";").forEach(function(e){var t=Object(r.__read)(e.split("="),2),o=t[0],n=t[1];i[c.safeDecodeURIComponent(o.replace(/^ /,""))]=c.safeDecodeURIComponent(n)}),i},s.prototype.set=function(e,t,o,n,c,i,r){if(void 0===r&&(r="Lax"),this.documentIsAccessible){var s=encodeURIComponent(e)+"="+encodeURIComponent(t)+";";o&&(s+="number"==typeof o?"expires="+new Date((new Date).getTime()+1e3*o*60*60*24).toUTCString()+";":"expires="+o.toUTCString()+";"),n&&(s+="path="+n+";"),c&&(s+="domain="+c+";"),!1===i&&"None"===r&&(i=!0,console.warn("[ngx-cookie-service] Cookie "+e+" was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130")),i&&(s+="secure;"),s+="sameSite="+r+";",this.document.cookie=s}},s.prototype.delete=function(e,t,o,n,c){void 0===c&&(c="Lax"),this.documentIsAccessible&&this.set(e,"",new Date("Thu, 01 Jan 1970 00:00:01 GMT"),t,o,n,c)},s.prototype.deleteAll=function(e,t,o,n){if(void 0===n&&(n="Lax"),this.documentIsAccessible){var c=this.getAll();for(var i in c)c.hasOwnProperty(i)&&this.delete(i,e,t,o,n)}},s.prototype.getCookieRegExp=function(e){var t=e.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")},s.prototype.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(e){return t}},s.ctorParameters=function(){return[{type:void 0,decorators:[{type:n.Inject,args:[c.DOCUMENT]}]},{type:n.InjectionToken,decorators:[{type:n.Inject,args:[n.PLATFORM_ID]}]}]},s.ɵprov=Object(n["ɵɵdefineInjectable"])({factory:function(){return new s(Object(n["ɵɵinject"])(c.DOCUMENT),Object(n["ɵɵinject"])(n.PLATFORM_ID))},token:s,providedIn:"root"}),s=Object(r.__decorate)([Object(n.Injectable)({providedIn:"root"}),Object(r.__param)(0,Object(n.Inject)(c.DOCUMENT)),Object(r.__param)(1,Object(n.Inject)(n.PLATFORM_ID))],s));function s(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=Object(c.isPlatformBrowser)(this.platformId)}}}]);