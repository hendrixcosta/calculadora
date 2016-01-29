// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19386,handler){
var map__19387 = p__19386;
var map__19387__$1 = ((((!((map__19387 == null)))?((((map__19387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19387):map__19387);
var uri = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19387__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19387,map__19387__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19385_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19385_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19387,map__19387__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___19395 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___19395)){
var response_type_19396 = temp__4425__auto___19395;
this$__$1.responseType = cljs.core.name.call(null,response_type_19396);
} else {
}

var seq__19389_19397 = cljs.core.seq.call(null,headers);
var chunk__19390_19398 = null;
var count__19391_19399 = (0);
var i__19392_19400 = (0);
while(true){
if((i__19392_19400 < count__19391_19399)){
var vec__19393_19401 = cljs.core._nth.call(null,chunk__19390_19398,i__19392_19400);
var k_19402 = cljs.core.nth.call(null,vec__19393_19401,(0),null);
var v_19403 = cljs.core.nth.call(null,vec__19393_19401,(1),null);
this$__$1.setRequestHeader(k_19402,v_19403);

var G__19404 = seq__19389_19397;
var G__19405 = chunk__19390_19398;
var G__19406 = count__19391_19399;
var G__19407 = (i__19392_19400 + (1));
seq__19389_19397 = G__19404;
chunk__19390_19398 = G__19405;
count__19391_19399 = G__19406;
i__19392_19400 = G__19407;
continue;
} else {
var temp__4425__auto___19408 = cljs.core.seq.call(null,seq__19389_19397);
if(temp__4425__auto___19408){
var seq__19389_19409__$1 = temp__4425__auto___19408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389_19409__$1)){
var c__17925__auto___19410 = cljs.core.chunk_first.call(null,seq__19389_19409__$1);
var G__19411 = cljs.core.chunk_rest.call(null,seq__19389_19409__$1);
var G__19412 = c__17925__auto___19410;
var G__19413 = cljs.core.count.call(null,c__17925__auto___19410);
var G__19414 = (0);
seq__19389_19397 = G__19411;
chunk__19390_19398 = G__19412;
count__19391_19399 = G__19413;
i__19392_19400 = G__19414;
continue;
} else {
var vec__19394_19415 = cljs.core.first.call(null,seq__19389_19409__$1);
var k_19416 = cljs.core.nth.call(null,vec__19394_19415,(0),null);
var v_19417 = cljs.core.nth.call(null,vec__19394_19415,(1),null);
this$__$1.setRequestHeader(k_19416,v_19417);

var G__19418 = cljs.core.next.call(null,seq__19389_19409__$1);
var G__19419 = null;
var G__19420 = (0);
var G__19421 = (0);
seq__19389_19397 = G__19418;
chunk__19390_19398 = G__19419;
count__19391_19399 = G__19420;
i__19392_19400 = G__19421;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__17122__auto__ = body;
if(cljs.core.truth_(or__17122__auto__)){
return or__17122__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1454016837042