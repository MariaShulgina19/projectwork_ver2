(function(e){function t(t){for(var n,r,l=t[0],i=t[1],c=t[2],m=0,p=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,l=1;l<s.length;l++){var i=s[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("HelloWorld",{attrs:{msg:"HARBOURS TODAY.js App"}}),n("AllShips",{attrs:{msg6:"MY FLEET"}})],1)},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),s("h1",[e._v(" "+e._s(e.currentDate)+", "+e._s(e.currentDateDay2))])])},l=[],i={name:"HelloWorld",props:{msg:String},data:function(){return{currentDate:(new Date).getDate()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getFullYear(),days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],currentDateDay:(new Date).getUTCDay()}},computed:{currentDateDay2:function(){return this.days[(new Date).getUTCDay()]}}},c=i,u=s("2877"),m=Object(u["a"])(c,r,l,!1,null,"566a6f9a",null),p=m.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"allships"},[s("div",{staticClass:"label"},[s("br"),s("button",{staticClass:"Buttion1",on:{click:e.Showcontent}},[e._v(e._s(e.msg6))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"content",staticStyle:{"max-height":"500px","overflow-y":"auto"}},[s("br"),s("br"),s("table",{staticClass:"vessels"},[e._m(0),e._l(e.allShips,(function(t){return s("tr",{key:t.id},[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vessel_name,expression:"item.vessel_name"}],staticClass:"input1",attrs:{type:"text",name:"vessel_name",placeholder:"Vessel name"},domProps:{value:t.vessel_name},on:{input:function(s){s.target.composing||e.$set(t,"vessel_name",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vessel_mms,expression:"item.vessel_mms"}],staticClass:"input1",attrs:{type:"number",name:"vessel_mms",placeholder:"Vessel MMSI"},domProps:{value:t.vessel_mms},on:{input:function(s){s.target.composing||e.$set(t,"vessel_mms",s.target.value)}}})]),s("td",[s("button",{staticClass:"button1",attrs:{type:"button"},on:{click:function(s){return e.deleteVessel(t._id)}}},[e._v("Delete")]),s("button",{staticClass:"button1",attrs:{type:"button"},on:{click:function(s){return e.updateVessel(t._id)}}},[e._v("Update")])])])})),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vessel_name,expression:"vessel_name"}],staticClass:"input2",attrs:{type:"text",name:"vessel_name2",placeholder:"Vessel name.."},domProps:{value:e.vessel_name},on:{input:function(t){t.target.composing||(e.vessel_name=t.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vessel_mms,expression:"vessel_mms"}],staticClass:"input2",attrs:{type:"number",name:"vessel_mms2",placeholder:"Vessel MMSI.."},domProps:{value:e.vessel_mms},on:{input:function(t){t.target.composing||(e.vessel_mms=t.target.value)}}})]),s("td",[s("button",{staticClass:"button2",attrs:{type:"button"},on:{click:e.addVessel}},[e._v("Add vessel")])])])],2)]),s("div",[s("br"),s("vl-map",{ref:"map",staticStyle:{height:"400px"},style:{cursor:e.mapCursor},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"},on:{pointermove:e.onMapPointerMove}},[s("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),s("vl-layer-tile",{attrs:{id:"osm"}},[s("vl-source-osm")],1),s("vl-layer-vector",[e.loaded?s("vl-source-vector",{attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}}):e._e(),s("vl-style-box",[s("vl-style-circle",{attrs:{radius:5}},[s("vl-style-fill",{attrs:{color:"white"}}),s("vl-style-stroke",{attrs:{color:"red"}})],1)],1),e.currentPosition?s("vl-overlay",{attrs:{id:"overlay",position:e.currentPosition},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"overlay-content"},[e._v(" Position: "+e._s(t.position)+" "),s("br"),e._v(" mmsi:"+e._s(e.currentName)+" ")])]}}],null,!1,1540366801)}):e._e()],1)],1)],1)])},v=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",[e._v("Vessel name")]),s("th",[e._v("MMSI / Maritime Mobile Service Identity")]),s("th",[e._v("Action")])])}],h=(s("d81d"),s("bc3a")),f=s.n(h),g=s("256f"),y={name:"AllShips",props:{msg6:String},data:function(){return{allShips:[],vessel_name:null,vessel_mms:null,isOpen:!1,newadress:"https://port2020.heroku.com/api/parameters",newadress2:"https://port2020.heroku.com/api/parameter",newadress3:"https://port2020.heroku.com/api/parameter/",adress_vessel_mmsi:"https://meri.digitraffic.fi/api/v1/locations/latest/",vesselCoordinate:[],zoom:4,center:[23.03862,63.859912],rotation:0,mapCursor:"default",myFeatureItem:null,features:[],loaded:!1,currentPosition:void 0,currentName:void 0}},methods:{Showcontent:function(){this.isOpen=!this.isOpen},showVessels:function(){var e=this;f.a.get(this.newadress).then((function(t){e.allShips=t.data,e.getVesselCoordinates()})).catch((function(e){console.log(e)}))},addVessel:function(){var e=this;f.a.post(this.newadress2,{vessel_name:this.vessel_name,vessel_mms:this.vessel_mms}).catch((function(e){console.log(e)})).then((function(){e.showVessels()}))},deleteVessel:function(e){var t=this;f.a.delete(this.newadress3+e).catch((function(e){console.log(e)})).then((function(){t.showVessels()}))},updateVessel:function(e){var t=this;console.log("trying to put"),console.log(this.newadress3+e),console.log(e);for(var s=0;s<this.allShips.length;s++)console.log(this.allShips[s]._id),this.allShips[s]._id==e&&f.a.put(this.newadress3+e,{vessel_name:this.allShips[s].vessel_name,vessel_mms:this.allShips[s].vessel_mms}).catch((function(e){console.log(e)})).then((function(){t.showVessels()}))},getVesselCoordinates:function(){var e=this;console.log("get vessel coordinates");for(var t=0;t<this.allShips.length;t++)f.a.get(this.adress_vessel_mmsi+this.allShips[t].vessel_mms).then((function(t){e.vesselCoordinate.push({mmsi:t.data.features[0].mmsi,coordinate:t.data.features[0].geometry.coordinates}),e.myFeatureItem={type:"Feature",properties:{special:!0,name:t.data.features[0].mmsi},geometry:{type:"Point",coordinates:t.data.features[0].geometry.coordinates}},e.features.push(e.myFeatureItem),e.loaded=!0})).catch((function(e){console.log(e)}))},onMapPointerMove:function(e){var t=e.pixel,s=this.$refs.map.forEachFeatureAtPixel(t,(function(e){return e}));s?(this.mapCursor="pointer",this.currentPosition=g["k"](s.getGeometry().getCoordinates(),"EPSG:3857","EPSG:4326"),this.currentName=s.get("name")):(this.mapCursor="default",this.currentPosition=this.currentName=void 0)}},created:function(){this.showVessels()}},b=y,_=Object(u["a"])(b,d,v,!1,null,null,null),w=_.exports,S={name:"App",components:{HelloWorld:p,AllShips:w}},A=S,x=(s("034f"),Object(u["a"])(A,a,o,!1,null,null,null)),C=x.exports,M=s("1cf8");s("2b69");n["a"].use(M["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,s){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADiElEQVRoge3YSYhcVRQG4K8qaRGycMCgMc4KIaI4mxgcMMYhzkQJGAMuHBEUgrqIqAiCSxFdKC7ERQRRUZNoHFCJJK3ROEQlrWJLFNvWpsWOG8GkTbk4t+hKUfXqdVeZqpb3w4Hi8r9X59z7//eedylQoECBAgUKFChQoMDe6MembifRCVRS9CzK3U6gUygK6TU0KqTfhCfqvVE/3jMbQKnB2GRN3egd+xz/a2lNBl90JIv/CPU+aBbf4PAu5ZgLeQuZ3eH/nYFV+BxjOXPYgwEsbKeQTuPRSfx3fWzvlULmYVcbhezqlULWt1FEBb/3QiHXt1lEBds6mM+UMF+2sVcJMw+k3814z+7rxKs4GLcISbRa9UdSyODdBDPxEIZavLQbsbim+LOacMalo+DhHki4nXizWukvPZBMO3Ed0blWTF98h5MwPt273/uFR9B9aUw1PlH3LTTcA0lNJZbUFlHG26YfnsO79YMnC511e4bzxo84qFmFjzV44AfcJpbwQdmtxM+4Sxxg92E0gzuaOItxd3q2GXcMD6Qcbhcfc2c3KqBqlv3EwTIX32OD6F/+ruHOxp04H8djNwaFNJ/BXzXcA3EHLkpcaWLew9PYWcOdhVtxWeL2Je4HeCoVXptvpVEhWSiLfujVlFAWSliRuFflePcyvJaeaXULsyS992YZdwwlHCJm+w8xG8fhXKwU3WkVG/ESPhbdQBnHYBFuxKk13I/wArYI6cBROAc32Fse2/C8uE/7SXy+zsUCLMcFNdwBrMFm7BCfx/PFzpvZogziCSGFViYcwuMYycEdSdw8jepYymEwgzNawpO4UKzMeCrsM7yOd9LYAbgGl4hd7tA0c8NpRjfgDeGpWbgSS3EKDkuz+Ru+FF5cLzy1Py5PcRrmiJUewdfp/9fiT9GlX4orcEZatZlixdfIQFmYcJ26w6cBSkJea4X+W2FZ4ub1yCtyeGSO2GWqHjkB56XE5tVwN+FFofshoc9jhUdWipWqYqvwyIdC9yUcLTyyQsxoFV+Z8MgOsdJHiiue5cKvVXybuJuF1P7BiUJ+medDP+5NybTS8naslq3lWu+tFubNcwDeo/HlejV2lsQZsEh4ZHd6cAteFjsUcc4sxdU4Xeh+T1qZrWIrfT+N9eHixD3TxG3kMD4VUq16b4Y4GK9N3COEfH4VF3Xr8JaJ656F4rJigdgx+ySP/AuDucjNJXIo0QAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.cf51911e.js.map