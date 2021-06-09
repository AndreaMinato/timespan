!function(i,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((i||self).timespan={})}(this,function(i){var n=1e3,t=6e4,e=36e5,s=864e5,o=function(){function i(i){this._milliseconds=0,this._milliseconds=i}i.fromSeconds=function(t){return new i(t*n)},i.fromMinutes=function(n){return new i(n*t)},i.fromHours=function(n){return new i(n*e)},i.fromDays=function(n){return new i(n*s)};var o,l=i.prototype;return l.add=function(n){return new i(this.milliseconds+n.milliseconds)},l.subtract=function(n){return new i(this.milliseconds-n.milliseconds)},l.duration=function(){return new i(Math.abs(this.milliseconds))},l.addMilliseconds=function(i){this._milliseconds+=i},l.subtractMilliseconds=function(i){this._milliseconds-=i},l.addSeconds=function(i){this._milliseconds+=i*n},l.subtractSeconds=function(i){this._milliseconds-=i*n},l.addMinutes=function(i){this._milliseconds+=i*t},l.subtractMinutes=function(i){this._milliseconds-=i*t},l.addHours=function(i){this._milliseconds+=i*e},l.subtractHours=function(i){this._milliseconds-=i*e},l.addDays=function(i){this._milliseconds+=i*s},l.subtractDays=function(i){this._milliseconds-=i*s},l.equals=function(i){return i.milliseconds===this._milliseconds},l.lesser=function(i){return this._milliseconds<i.milliseconds},l.lesserEqual=function(i){return this._milliseconds<=i.milliseconds},l.greater=function(i){return this._milliseconds>i.milliseconds},l.greaterEqual=function(i){return this._milliseconds>=i.milliseconds},(o=[{key:"milliseconds",get:function(){return this._milliseconds}},{key:"seconds",get:function(){return this._milliseconds/n}},{key:"minutes",get:function(){return this._milliseconds/t}},{key:"hours",get:function(){return this._milliseconds/e}},{key:"days",get:function(){return this._milliseconds/s}},{key:"totalMilliseconds",get:function(){return Math.floor(this._milliseconds)}},{key:"totalSeconds",get:function(){return Math.floor(this._milliseconds/n)}},{key:"totalMinutes",get:function(){return Math.floor(this._milliseconds/t)}},{key:"totalHours",get:function(){return Math.floor(this._milliseconds/e)}},{key:"totalDays",get:function(){return Math.floor(this._milliseconds/s)}}])&&function(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}(i.prototype,o),i}();o.prototype.toString=function(){var i=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}),o=Math.floor(this.milliseconds/s),l=this.milliseconds%s,r=Math.floor(l/e);l%=e;var c=Math.floor(l/t);l%=t;var u=Math.floor(l/n),d=l%=n;return o+"."+i.format(r)+":"+i.format(c)+":"+i.format(u)+"."+d},i.TimeSpan=o});
//# sourceMappingURL=timespan.umd.js.map
