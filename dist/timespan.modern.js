class s{constructor(s){this._milliseconds=0,this._milliseconds=s}static fromSeconds(e){return new s(1e3*e)}static fromMinutes(e){return new s(6e4*e)}static fromHours(e){return new s(36e5*e)}static fromDays(e){return new s(864e5*e)}add(e){return new s(this.milliseconds+e.milliseconds)}subtract(e){return new s(this.milliseconds-e.milliseconds)}duration(){return new s(Math.abs(this.milliseconds))}addMilliseconds(s){this._milliseconds+=s}subtractMilliseconds(s){this._milliseconds-=s}addSeconds(s){this._milliseconds+=1e3*s}subtractSeconds(s){this._milliseconds-=1e3*s}addMinutes(s){this._milliseconds+=6e4*s}subtractMinutes(s){this._milliseconds-=6e4*s}addHours(s){this._milliseconds+=36e5*s}subtractHours(s){this._milliseconds-=36e5*s}addDays(s){this._milliseconds+=864e5*s}subtractDays(s){this._milliseconds-=864e5*s}get milliseconds(){return this._milliseconds}get seconds(){return this._milliseconds/1e3}get minutes(){return this._milliseconds/6e4}get hours(){return this._milliseconds/36e5}get days(){return this._milliseconds/864e5}get totalMilliseconds(){return Math.floor(this._milliseconds)}get totalSeconds(){return Math.floor(this._milliseconds/1e3)}get totalMinutes(){return Math.floor(this._milliseconds/6e4)}get totalHours(){return Math.floor(this._milliseconds/36e5)}get totalDays(){return Math.floor(this._milliseconds/864e5)}equals(s){return s.milliseconds===this._milliseconds}lesser(s){return this._milliseconds<s.milliseconds}lesserEqual(s){return this._milliseconds<=s.milliseconds}greater(s){return this._milliseconds>s.milliseconds}greaterEqual(s){return this._milliseconds>=s.milliseconds}}s.prototype.toString=function(){const s=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}),e=Math.floor(this.milliseconds/864e5);let i=this.milliseconds%864e5;const t=Math.floor(i/36e5);i%=36e5;const l=Math.floor(i/6e4);i%=6e4;const o=Math.floor(i/1e3);i%=1e3;const n=i;return`${e}.${s.format(t)}:${s.format(l)}:${s.format(o)}.${n}`};export{s as TimeSpan};
//# sourceMappingURL=timespan.modern.js.map
