// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.protocols');
goog.require('cljs.core');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$,request,handler);
} else {
var m__17778__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._abort[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$);
} else {
var m__17778__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._status[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$);
} else {
var m__17778__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._status_text[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$);
} else {
var m__17778__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._body[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$);
} else {
var m__17778__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$,header);
} else {
var m__17778__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$);
} else {
var m__17778__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._process_request[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$,request);
} else {
var m__17778__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__17777__auto__ = (((this$ == null))?null:this$);
var m__17778__auto__ = (ajax.protocols._process_response[goog.typeOf(x__17777__auto__)]);
if(!((m__17778__auto__ == null))){
return m__17778__auto__.call(null,this$,response);
} else {
var m__17778__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__17778__auto____$1 == null))){
return m__17778__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17736__auto__,k__17737__auto__){
var self__ = this;
var this__17736__auto____$1 = this;
return cljs.core._lookup.call(null,this__17736__auto____$1,k__17737__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17738__auto__,k19376,else__17739__auto__){
var self__ = this;
var this__17738__auto____$1 = this;
var G__19378 = (((k19376 instanceof cljs.core.Keyword))?k19376.fqn:null);
switch (G__19378) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19376,else__17739__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17750__auto__,writer__17751__auto__,opts__17752__auto__){
var self__ = this;
var this__17750__auto____$1 = this;
var pr_pair__17753__auto__ = ((function (this__17750__auto____$1){
return (function (keyval__17754__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17751__auto__,cljs.core.pr_writer,""," ","",opts__17752__auto__,keyval__17754__auto__);
});})(this__17750__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17751__auto__,pr_pair__17753__auto__,"#ajax.protocols.Response{",", ","}",opts__17752__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$ = true;

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19375){
var self__ = this;
var G__19375__$1 = this;
return (new cljs.core.RecordIter((0),G__19375__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17734__auto__){
var self__ = this;
var this__17734__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17730__auto__){
var self__ = this;
var this__17730__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17740__auto__){
var self__ = this;
var this__17740__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17731__auto__){
var self__ = this;
var this__17731__auto____$1 = this;
var h__17557__auto__ = self__.__hash;
if(!((h__17557__auto__ == null))){
return h__17557__auto__;
} else {
var h__17557__auto____$1 = cljs.core.hash_imap.call(null,this__17731__auto____$1);
self__.__hash = h__17557__auto____$1;

return h__17557__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17732__auto__,other__17733__auto__){
var self__ = this;
var this__17732__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17110__auto__ = other__17733__auto__;
if(cljs.core.truth_(and__17110__auto__)){
var and__17110__auto____$1 = (this__17732__auto____$1.constructor === other__17733__auto__.constructor);
if(and__17110__auto____$1){
return cljs.core.equiv_map.call(null,this__17732__auto____$1,other__17733__auto__);
} else {
return and__17110__auto____$1;
}
} else {
return and__17110__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = true;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17745__auto__,k__17746__auto__){
var self__ = this;
var this__17745__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__17746__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17745__auto____$1),self__.__meta),k__17746__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17746__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17743__auto__,k__17744__auto__,G__19375){
var self__ = this;
var this__17743__auto____$1 = this;
var pred__19379 = cljs.core.keyword_identical_QMARK_;
var expr__19380 = k__17744__auto__;
if(cljs.core.truth_(pred__19379.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__19380))){
return (new ajax.protocols.Response(G__19375,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19379.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__19380))){
return (new ajax.protocols.Response(self__.status,G__19375,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19379.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__19380))){
return (new ajax.protocols.Response(self__.status,self__.body,G__19375,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19379.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__19380))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__19375,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19379.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__19380))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__19375,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17744__auto__,G__19375),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17748__auto__){
var self__ = this;
var this__17748__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17735__auto__,G__19375){
var self__ = this;
var this__17735__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__19375,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17741__auto__,entry__17742__auto__){
var self__ = this;
var this__17741__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17742__auto__)){
return cljs.core._assoc.call(null,this__17741__auto____$1,cljs.core._nth.call(null,entry__17742__auto__,(0)),cljs.core._nth.call(null,entry__17742__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17741__auto____$1,entry__17742__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__17770__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__17770__auto__,writer__17771__auto__){
return cljs.core._write.call(null,writer__17771__auto__,"ajax.protocols/Response");
});

ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__19377){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__19377),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__19377),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__19377),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__19377),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__19377),null,cljs.core.dissoc.call(null,G__19377,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)),null));
});


//# sourceMappingURL=protocols.js.map?rel=1454016836834