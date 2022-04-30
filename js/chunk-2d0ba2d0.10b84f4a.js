(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba2d0"],{"35a9":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("payment-type-form")},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.ready?e("ValidationObserver",{ref:"obs",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.handleSubmit;return[e("form",{on:{submit:function(a){return a.preventDefault(),r(t.save)}}},[e("v-card-title",{staticClass:"px-0"},[e("h4",[t._v(t._s(t.title))]),e("v-spacer"),e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",loading:t.loading,type:"submit"}},[t._v(" Сохранить ")])],1),e("v-card",[e("v-card-text",[e("v-row",[e("v-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"name_ru"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("v-text-field",{attrs:{"error-messages":r[0],outlined:"",dense:"",clearable:"",label:"Name ru"},model:{value:t.formData.name_ru,callback:function(a){t.$set(t.formData,"name_ru",a)},expression:"formData.name_ru"}})]}}],null,!0)})],1),e("v-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"name_uz"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("v-text-field",{attrs:{"error-messages":r[0],outlined:"",dense:"",clearable:"",label:"Name uz"},model:{value:t.formData.name_uz,callback:function(a){t.$set(t.formData,"name_uz",a)},expression:"formData.name_uz"}})]}}],null,!0)})],1),e("v-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"status"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("v-autocomplete",{attrs:{"error-messages":r[0],"item-text":"text",outlined:"",dense:"",clearable:"",label:"Status","item-value":"id",items:t.$store.state.status},model:{value:t.formData.status,callback:function(a){t.$set(t.formData,"status",a)},expression:"formData.status"}})]}}],null,!0)})],1),e("v-col",{attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"type"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("v-autocomplete",{attrs:{"error-messages":r[0],"item-text":"name",outlined:"",dense:"",clearable:"",label:"type","item-value":"id",items:t.$store.state.paymentTypes},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}})]}}],null,!0)})],1)],1)],1)],1),e("v-row",[e("v-col",{staticClass:"flex-grow-0 py-0"},[e("v-card-title",{staticClass:"mt-4 px-1 pb-1"},[t._v("Фото")]),e("validation-provider",{attrs:{name:"file"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("v-uploader",{attrs:{"error-message":r[0]},model:{value:t.formData.file,callback:function(a){t.$set(t.formData,"file",a)},expression:"formData.file"}})]}}],null,!0)})],1)],1)],1)]}}],null,!1,571908656)}):t._e()},o=[],i=(e("d3b7"),e("3ca3"),e("ddb0"),e("025e")),l={data:function(){return{formData:{is_default:0,status:10,type:"",name_uz:"",name_ru:"",file:{}},loading:!1,ready:!1}},computed:{title:function(){return this.$route.meta.title},isUpdate:function(){return this.$route.params.id}},methods:{getData:function(){var t=this;return new Promise((function(a){t.$http.get("payment-types/".concat(t.$route.params.id)).then((function(a){var e={};for(var r in a.data.data.file={},a.data.data.is_default=!0===a.data.data.is_default?1:0,a.data.data.logo_url&&(a.data.data.file.url=a.data.data.logo_url),a.data.data)t.formData.hasOwnProperty(r)&&(e[r]=a.data.data[r]);t.formData=e})).finally((function(){return a()}))}))},save:function(){this.isUpdate?this.update():this.create()},prepareData:function(){var t=new FormData;for(var a in this.formData)"file"===a?this.formData[a].file?t.append(a,this.formData[a].file):null===this.formData[a].file&&null===this.formData[a].url&&t.append(a,null):t.append(a,this.formData[a]);return t},create:function(){var t=this,a=this.prepareData();this.$http.post("payment-types",a).then((function(){t.$router.push({name:"payment-types-index"}),t.$store.commit("showSnackbar","Saved successfully")})).catch((function(a){var e=t.$refs.obs;e.setErrors(Object(i["a"])(a)),t.$store.commit("showErrorMessage",a)}))},update:function(){var t=this,a=this.prepareData();a.append("_method","put"),this.$http.post("payment-types/".concat(this.$route.params.id),a).then((function(){t.$router.push({name:"payment-types-index"}),t.$store.commit("showSnackbar","Saved successfully")})).catch((function(a){var e=t.$refs.obs;e.setErrors(Object(i["a"])(a)),t.$store.commit("showErrorMessage",a)}))},init:function(){var t=this;this.$store.commit("showLoading");var a=[];this.isUpdate&&a.push(this.getData()),Promise.all(a).then((function(){t.$store.commit("clearLoading"),t.ready=!0}))}},created:function(){this.init()}},u=l,d=e("2877"),c=e("6544"),m=e.n(c),f=e("c6a6"),p=e("8336"),v=e("b0af"),h=e("99d9"),y=e("62ad"),b=e("0fd9"),D=e("2fa4"),_=e("8654"),$=Object(d["a"])(u,n,o,!1,null,null,null),x=$.exports;m()($,{VAutocomplete:f["a"],VBtn:p["a"],VCard:v["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:y["a"],VRow:b["a"],VSpacer:D["a"],VTextField:_["a"]});var g={components:{paymentTypeForm:x}},w=g,k=Object(d["a"])(w,r,s,!1,null,null,null);a["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0ba2d0.10b84f4a.js.map