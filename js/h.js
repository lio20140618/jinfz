(function(){var h={},mt={},c={id:"1858386260fdb629e9ad33f72bf5c9ae",dm:["jinfuzi.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:''};var p=!0,q=null,r=!1;mt.h={};mt.h.ya=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Aa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,f){var d;f.D&&(d=new Date,d.setTime(d.getTime()+f.D));document.cookie=a+"="+b+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.Oa?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.m={};mt.m.ka=function(a){return document.getElementById(a)};mt.m.la=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.m.T=function(){function a(){if(!a.w){a.w=p;for(var b=0,f=d.length;b<f;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var f=r,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,r);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!f)if(f=p,"complete"===document.readyState)a.w=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=r;try{d=window.frameElement==q}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.w?b():d.push(b)}}()).w=r;mt.event={};mt.event.c=function(a,b,f){a.attachEvent?a.attachEvent("on"+b,function(d){f.call(a,d)}):a.addEventListener&&a.addEventListener(b,f,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.o={};mt.o.parse=function(){return(new Function('return (" + source + ")'))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=f[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===q)return"null";if(d instanceof Array){var f=["["],l=d.length,n,e,k;for(e=0;e<l;e++)switch(k=d[e],typeof k){case "undefined":case "function":case "unknown":break;default:n&&f.push(","),f.push(mt.o.stringify(k)),n=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];e=mt.o.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(k=
d[l],typeof k){case "undefined":case "unknown":case "function":break;default:f&&n.push(","),f=1,n.push(e(l)+":"+e(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.e=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.La=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Na=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.B=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.B()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),f=a.substring(0,b)-0;if(f&&f>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.B())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.B())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,b){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=q;f=window[d]=q;b&&b(a)};f.src=a};mt.L={};
mt.L.ra=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.L.Ga=function(a,b,f,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var f=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return f?f[3]:q};mt.url.Ja=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.oa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.P=function(a){return(a=mt.url.oa(a))?a.replace(/:\d+$/,""):a};mt.url.Ia=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.k={Ka:"http://tongji.baidu.com/hm-web/welcome/ico",J:"hm.baidu.com/hm.gif",Z:"baidu.com",ua:"hmmd",va:"hmpl",ta:"hmkw",sa:"hmci",wa:"hmsr",p:0,j:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ma:0,da:6E5,ea:10,M:1024,ca:1,q:2147483647,W:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={l:{},c:function(a,f){this.l[a]=this.l[a]||[];this.l[a].push(f)},s:function(a,f){this.l[a]=this.l[a]||[];for(var d=this.l[a].length,g=0;g<d;g++)this.l[a][g](f)}};return h.n=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.e(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=q,d()}:g.onload=function(){d()});g.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?f.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?f.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,f=mt.sessionStorage;return h.N=a})();
(function(){var a=mt.m,b=mt.event,f=mt.h,d=h.k,g=[],l={X:function(){c.ctrk&&(b.c(document,"mouseup",l.ba()),b.c(window,"unload",function(){l.z()}),setInterval(function(){l.z()},d.da))},ba:function(){return function(a){a=l.ma(a);if(""!==a){var e=(d.protocol+"//"+d.J+"?"+h.b.U().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;e+(d.q+"").length>d.M||(e+encodeURIComponent(g.join(",")+(g.length?",":"")).length+(d.q+"").length>d.M&&l.z(),g.push(a),(g.length>=d.ea||/t:a/.test(a))&&l.z())}}},
ma:function(b){if(0===d.ca){var e=b.target||b.srcElement,k=e.tagName.toLowerCase();if("embed"==k||"object"==k)return""}f.ya?(e=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=b.clientX+k,e=b.clientY+e):(k=b.pageX,e=b.pageY);var m=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=m/2;break;case 2:k-=m}k="{x:"+k+",y:"+e+",";e=b.target||b.srcElement;
return k=(b="a"==e.tagName.toLowerCase()?e:a.la(e))?k+("t:a,u:"+encodeURIComponent(b.href)+"}"):k+"t:b}"},z:function(){0!==g.length&&(h.b.a.et=2,h.b.a.ep="["+g.join(",")+"]",h.b.g(),g=[])}};h.n.c("pv-b",l.X);return l})();
(function(){var a=mt.m,b=h.k,f=h.load,d=h.N;h.n.c("pv-b",function(){c.rec&&a.T(function(){for(var g=0,l=c.rp.length;g<l;g++){var n=c.rp[g][0],e=c.rp[g][1],k=a.ka("hm_t_"+n);if(e&&!(2==e&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.q),k=4==e?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+n,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),f(k)}})})})();(function(){var a=h.k,b=h.load,f=h.N;h.n.c("pv-b",function(){if(c.trust&&c.vcard){var d=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*a.q)].join("&");b(d)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.C.pa()+","+h.C.na();h.b.g()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);e="undefined"==typeof a?p:a;if((!n||!k)&&e&&m)u=p,s=+new Date;else if(n&&k&&(!e||!m))u=r,t+=+new Date-s;n=e;k=m;x=setTimeout(b,100)}function f(a){var k=document,e="";if(a in k)e=a;else for(var m=["webkit","ms","moz","o"],b=0;b<m.length;b++){var s=m[b]+a.charAt(0).toUpperCase()+a.slice(1);if(s in k){e=
s;break}}return e}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,b()}var g=mt.event,l=h.n,n=p,e=p,k=p,m=p,v=+new Date,s=v,t=0,u=p,w=f("visibilityState"),y=f("hidden"),x;b();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.C={pa:function(){return+new Date-v},na:function(){return u?+new Date-s+t:t}};l.c("pv-b",function(){g.c(window,"unload",a())});return h.C})();
(function(){var a=mt.lang,b=h.k,f=h.load,d={xa:function(d){if((void 0===window._dxt||a.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.F();f([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},Fa:function(b){if(a.e(b,"String")||a.e(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.fa=d})();
(function(){function a(k){for(var e in k)if({}.hasOwnProperty.call(k,e)){var b=k[e];f.e(b,"Object")||f.e(b,"Array")?a(b):k[e]=String(b)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.lang,d=mt.o,g=h.k,l=h.n,n=h.fa,e={Q:q,r:[],A:0,R:r,init:function(){e.d=0;e.Q={push:function(){e.I.apply(e,arguments)}};l.c("pv-b",function(){e.ga();e.ha()});l.c("pv-d",e.ia);l.c("stag-b",function(){h.b.a.api=e.d||e.A?e.d+"_"+e.A:""});l.c("stag-d",function(){h.b.a.api=
0;e.d=0;e.A=0})},ga:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(e.d|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))e.d|=2,window._bdhm_autoPageview=d}}},ha:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,d=a.length;b<d;b++)f.e(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?e.I(a[b]):e.r.push(a[b]);window._hmt=e.Q}},ia:function(){if(0<e.r.length)for(var a=0,b=e.r.length;a<b;a++)e.I(e.r[a]);e.r=q},I:function(a){if(f.e(a,"Array")){var b=a[0];if(e.hasOwnProperty(b)&&f.e(e[b],"Function"))e[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){e.d|=4;h.b.a.et=0;h.b.a.ep="";h.b.G?(h.b.a.nv=0,h.b.a.st=4):h.b.G=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+
a[1];e.R||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(e.d|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],f=a[4]||3;if(0<d&&6>d&&0<f&&4>f){e.A++;for(var s=(h.b.a.cv||"*").split("!"),t=s.length;t<d-1;t++)s.push("*");s[d-1]=f+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.za("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],e.R=p)},_trackOrder:function(b){b=b[1];f.e(b,"Object")&&(a(b),e.d|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.d|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=
b[1];f.e(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(e.d|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.e(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;e.d|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},l=b.length;if(900>=l)m.call(this,b);else for(var l=Math.ceil(l/900),s="block|"+Math.round(Math.random()*g.q).toString(16)+"|"+l+"|",t=[],u=0;u<l;u++)t.push(u),t.push(b.substring(900*u,900*u+900)),m.call(this,s+t.join("|")),
t=[]}},_setUserId:function(a){a=a[1];n.xa();n.Fa(a)}};e.init();h.$=e;return h.$})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.G=r,this.init())}var b=mt.url,f=mt.V,d=mt.L,g=mt.lang,l=mt.cookie,n=mt.h,e=mt.localStorage,k=mt.sessionStorage,m=h.k,v=h.n;a.prototype={H:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},S:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},t:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.S(a,c.dm[d]))return p}else{var e=b.P(a);if(e&&this.H(e,c.dm[d]))return p}return r},F:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.H(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},O:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.S(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},qa:function(){if(!document.referrer)return m.j-m.p>c.vdur?1:4;var a=
r;this.t(document.referrer)&&this.t(document.location.href)?a=p:(a=b.P(document.referrer),a=this.H(a||"",document.location.hostname));return a?m.j-m.p>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||k.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.F(),path:this.O(),D:d}),d?e.set(a,b,d):k.set(a,b)}catch(f){}},za:function(a){try{l.set(a,"",{domain:this.F(),path:this.O(),D:-1}),k.remove(a),e.remove(a)}catch(b){}},Da:function(){var a,b,d,e,f;m.p=this.getData("Hm_lpvt_"+
c.id)||0;13==m.p.length&&(m.p=Math.round(m.p/1E3));b=this.qa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.j-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.j);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.j,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.j);d=m.j==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.t(document.location.href)&&
(""===document.referrer||this.t(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},U:function(){for(var a=[],b=0,d=m.W.length;b<d;b++){var e=m.W[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Ea:function(){this.Da();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Aa;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=d.ra();this.a.v="1.0.87";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.i(a,m.ua)||"";this.a.cp=b.i(a,m.va)||"";this.a.cw=b.i(a,m.ta)||"";this.a.ci=b.i(a,m.sa)||"";this.a.cf=b.i(a,m.wa)||""},init:function(){try{this.Ea(),0===this.a.nv?this.Ca():this.K(".*"),h.b=this,this.aa(),
v.s("pv-b"),this.Ba()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(m.protocol+"//"+m.J+"?"+b.join("&"))}},Ba:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.G=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.q);v.s("stag-b");var d=m.protocol+"//"+
m.J+"?"+b.U();v.s("stag-d");b.Y(d);f.log(d,function(d){b.K(d);g.e(a,"Function")&&a.call(b)})},aa:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.Z)?p:r,f=b.i(a,"jn"),k=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&k)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},Y:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},K:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},Ca:function(){var a=this,b=k.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){f.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.K(b)})},e=0,g=b.length;e<g;e++)d(b[e])}};return new a})();
(function(){var a=mt.m,b=mt.event,f=mt.url,d=mt.o;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.T(function(){n=+new Date});var e=function(){var a,b,e;e=l("navigation");b=l("request");e={netAll:b.start-e.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-e.start};a=document.referrer;var k=q;b=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])k=f.i(a,"qid"),b=f.i(a,"click_t");a=k;e.qid=a!=q?a:"";b!=q?(e.bdDom=n?n-b:0,e.bdRun=g-b):(e.bdDom=0,e.bdRun=0);h.b.a.et=87;h.b.a.ep=d.stringify(e);h.b.g()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(k){}})();
(function(){var a=h.k,b={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ha="0";document.body.appendChild(b)}}catch(f){}}},f=navigator.userAgent.toLowerCase();-1<f.indexOf("android")&&-1===f.indexOf("micromessenger")&&b.init()})();
(function(){if("378f3aa9b8779062c8de4dc247dd8874"===c.id){var a=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b={click:function(){for(var b=[],d=a(document.getElementsByTagName("a")),d=[].concat.apply(d,a(document.getElementsByTagName("area"))),f=/openZoosUrl\(/,g=0,l=d.length;g<l;g++)f.test(d[g].getAttribute("onclick"))&&b.push(d[g]);return b}},f=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},d=function(a,
b){return Object.prototype.toString.call(a)==="[object "+b+"]"};window._hmt=window._hmt||[];var g,l="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),n=function(a,b){if(g===b){window._hmt.push(["_trackPageview",l+a]);for(var f=+new Date;500>=+new Date-f;);return r}if(d(b,"Array")||d(b,"NodeList"))for(var f=0,n=b.length;f<n;f++)if(g===b[f]){window._hmt.push(["_trackPageview",l+a+"/"+(f+1)]);for(f=+new Date;500>=+new Date-f;);return r}};(function(a,b,d){a.addEventListener?a.addEventListener(b,d,p):a.attachEvent&&
a.attachEvent("on"+b,d)})(document,"click",function(a){a=a||window.event;g=a.target||a.srcElement;var k={};for(f(b,function(a,b){k[a]=d(b,"Function")?b():document.getElementById(b)});g&&g!==document&&f(k,n)!==r;)g=g.parentNode})}})();})();