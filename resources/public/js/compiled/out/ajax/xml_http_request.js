// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27092,handler){
var map__27093 = p__27092;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var uri = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27093,map__27093__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27091_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27091_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27093,map__27093__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27101 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27101)){
var response_type_27102 = temp__4425__auto___27101;
this$__$1.responseType = cljs.core.name.call(null,response_type_27102);
} else {
}

var seq__27095_27103 = cljs.core.seq.call(null,headers);
var chunk__27096_27104 = null;
var count__27097_27105 = (0);
var i__27098_27106 = (0);
while(true){
if((i__27098_27106 < count__27097_27105)){
var vec__27099_27107 = cljs.core._nth.call(null,chunk__27096_27104,i__27098_27106);
var k_27108 = cljs.core.nth.call(null,vec__27099_27107,(0),null);
var v_27109 = cljs.core.nth.call(null,vec__27099_27107,(1),null);
this$__$1.setRequestHeader(k_27108,v_27109);

var G__27110 = seq__27095_27103;
var G__27111 = chunk__27096_27104;
var G__27112 = count__27097_27105;
var G__27113 = (i__27098_27106 + (1));
seq__27095_27103 = G__27110;
chunk__27096_27104 = G__27111;
count__27097_27105 = G__27112;
i__27098_27106 = G__27113;
continue;
} else {
var temp__4425__auto___27114 = cljs.core.seq.call(null,seq__27095_27103);
if(temp__4425__auto___27114){
var seq__27095_27115__$1 = temp__4425__auto___27114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27095_27115__$1)){
var c__19231__auto___27116 = cljs.core.chunk_first.call(null,seq__27095_27115__$1);
var G__27117 = cljs.core.chunk_rest.call(null,seq__27095_27115__$1);
var G__27118 = c__19231__auto___27116;
var G__27119 = cljs.core.count.call(null,c__19231__auto___27116);
var G__27120 = (0);
seq__27095_27103 = G__27117;
chunk__27096_27104 = G__27118;
count__27097_27105 = G__27119;
i__27098_27106 = G__27120;
continue;
} else {
var vec__27100_27121 = cljs.core.first.call(null,seq__27095_27115__$1);
var k_27122 = cljs.core.nth.call(null,vec__27100_27121,(0),null);
var v_27123 = cljs.core.nth.call(null,vec__27100_27121,(1),null);
this$__$1.setRequestHeader(k_27122,v_27123);

var G__27124 = cljs.core.next.call(null,seq__27095_27115__$1);
var G__27125 = null;
var G__27126 = (0);
var G__27127 = (0);
seq__27095_27103 = G__27124;
chunk__27096_27104 = G__27125;
count__27097_27105 = G__27126;
i__27098_27106 = G__27127;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18428__auto__ = body;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1454378532489