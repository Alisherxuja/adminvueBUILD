(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a28"],{"432e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-form")},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.ready?a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),r(t.save)}}},[a("v-toolbar",{staticClass:"px-0",attrs:{flat:""}},[a("v-toolbar-title",[a("h4",[t._v("Page")])]),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",loading:t.loading,type:"submit"}},[t._v(" Сохранить ")])],1),a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{attrs:{lg:"4",md:"6",cols:"12"}},[a("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("v-text-field",{attrs:{label:"Title ru","error-messages":r[0],outlined:"",dense:""},model:{value:t.page.title_ru,callback:function(e){t.$set(t.page,"title_ru",e)},expression:"page.title_ru"}})]}}],null,!0)})],1),a("v-col",{attrs:{lg:"4",md:"6",cols:"12"}},[a("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("v-text-field",{attrs:{label:"Title uz","error-messages":r[0],outlined:"",dense:""},model:{value:t.page.title_uz,callback:function(e){t.$set(t.page,"title_uz",e)},expression:"page.title_uz"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card",{staticClass:"mt-4"},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("vue-content",{attrs:{label:"Content ru"},model:{value:t.page.content_ru,callback:function(e){t.$set(t.page,"content_ru",e)},expression:"page.content_ru"}})],1),a("v-col",{attrs:{cols:"12"}},[a("vue-content",{attrs:{label:"Content uz"},model:{value:t.page.content_uz,callback:function(e){t.$set(t.page,"content_uz",e)},expression:"page.content_uz"}})],1)],1)],1)],1)],1)]}}],null,!1,3250851817)}):t._e()],1)},s=[],l=a("025e"),i={data:function(){return{loading:!1,ready:!0,page:{title_ru:"",title_uz:"",content_ru:"",content_uz:""}}},methods:{save:function(){this.isUpdate?this.update():this.create()},getData:function(){var t=this;this.$http.get("pages/".concat(this.$route.params.id)).then((function(e){t.page=e.data.data})).catch((function(e){return t.$store.commit("showErrorMessage",e)}))},update:function(){var t=this;this.$http.put("pages/".concat(this.$route.params.id),this.page).then((function(){t.$router.push({name:"pages-index"})})).catch((function(e){var a=t.$refs.form;a.setErrors(Object(l["a"])(e)),t.$store.commit("showErrorMessage",e)}))},create:function(){var t=this;this.$http.post("pages",this.page).then((function(e){t.$router.push({name:"pages-index"})})).catch((function(e){var a=t.$refs.form;a.setErrors(Object(l["a"])(e)),t.$store.commit("showErrorMessage",e)}))}},computed:{isUpdate:function(){return this.$route.params.id}},mounted:function(){this.isUpdate&&this.getData()}},u=i,c=a("2877"),d=a("6544"),p=a.n(d),f=a("8336"),v=a("b0af"),m=a("99d9"),g=a("62ad"),h=a("0fd9"),b=a("2fa4"),_=a("8654"),$=a("71d9"),x=a("2a7f"),w=Object(c["a"])(u,o,s,!1,null,null,null),k=w.exports;p()(w,{VBtn:f["a"],VCard:v["a"],VCardText:m["b"],VCol:g["a"],VRow:h["a"],VSpacer:b["a"],VTextField:_["a"],VToolbar:$["a"],VToolbarTitle:x["a"]});var z={components:{pageForm:k}},V=z,C=Object(c["a"])(V,r,n,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0c0a28.dd8f4c38.js.map