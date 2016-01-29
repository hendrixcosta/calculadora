// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__19428_19432 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19429_19433 = null;
var count__19430_19434 = (0);
var i__19431_19435 = (0);
while(true){
if((i__19431_19435 < count__19430_19434)){
var k_19436 = cljs.core._nth.call(null,chunk__19429_19433,i__19431_19435);
var v_19437 = (b[k_19436]);
(a[k_19436] = v_19437);

var G__19438 = seq__19428_19432;
var G__19439 = chunk__19429_19433;
var G__19440 = count__19430_19434;
var G__19441 = (i__19431_19435 + (1));
seq__19428_19432 = G__19438;
chunk__19429_19433 = G__19439;
count__19430_19434 = G__19440;
i__19431_19435 = G__19441;
continue;
} else {
var temp__4425__auto___19442 = cljs.core.seq.call(null,seq__19428_19432);
if(temp__4425__auto___19442){
var seq__19428_19443__$1 = temp__4425__auto___19442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19428_19443__$1)){
var c__17925__auto___19444 = cljs.core.chunk_first.call(null,seq__19428_19443__$1);
var G__19445 = cljs.core.chunk_rest.call(null,seq__19428_19443__$1);
var G__19446 = c__17925__auto___19444;
var G__19447 = cljs.core.count.call(null,c__17925__auto___19444);
var G__19448 = (0);
seq__19428_19432 = G__19445;
chunk__19429_19433 = G__19446;
count__19430_19434 = G__19447;
i__19431_19435 = G__19448;
continue;
} else {
var k_19449 = cljs.core.first.call(null,seq__19428_19443__$1);
var v_19450 = (b[k_19449]);
(a[k_19449] = v_19450);

var G__19451 = cljs.core.next.call(null,seq__19428_19443__$1);
var G__19452 = null;
var G__19453 = (0);
var G__19454 = (0);
seq__19428_19432 = G__19451;
chunk__19429_19433 = G__19452;
count__19430_19434 = G__19453;
i__19431_19435 = G__19454;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args19455 = [];
var len__18180__auto___19458 = arguments.length;
var i__18181__auto___19459 = (0);
while(true){
if((i__18181__auto___19459 < len__18180__auto___19458)){
args19455.push((arguments[i__18181__auto___19459]));

var G__19460 = (i__18181__auto___19459 + (1));
i__18181__auto___19459 = G__19460;
continue;
} else {
}
break;
}

var G__19457 = args19455.length;
switch (G__19457) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19455.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19462 = (i + (2));
var G__19463 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19462;
ret = G__19463;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19464_19468 = cljs.core.seq.call(null,v);
var chunk__19465_19469 = null;
var count__19466_19470 = (0);
var i__19467_19471 = (0);
while(true){
if((i__19467_19471 < count__19466_19470)){
var x_19472 = cljs.core._nth.call(null,chunk__19465_19469,i__19467_19471);
ret.push(x_19472);

var G__19473 = seq__19464_19468;
var G__19474 = chunk__19465_19469;
var G__19475 = count__19466_19470;
var G__19476 = (i__19467_19471 + (1));
seq__19464_19468 = G__19473;
chunk__19465_19469 = G__19474;
count__19466_19470 = G__19475;
i__19467_19471 = G__19476;
continue;
} else {
var temp__4425__auto___19477 = cljs.core.seq.call(null,seq__19464_19468);
if(temp__4425__auto___19477){
var seq__19464_19478__$1 = temp__4425__auto___19477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19464_19478__$1)){
var c__17925__auto___19479 = cljs.core.chunk_first.call(null,seq__19464_19478__$1);
var G__19480 = cljs.core.chunk_rest.call(null,seq__19464_19478__$1);
var G__19481 = c__17925__auto___19479;
var G__19482 = cljs.core.count.call(null,c__17925__auto___19479);
var G__19483 = (0);
seq__19464_19468 = G__19480;
chunk__19465_19469 = G__19481;
count__19466_19470 = G__19482;
i__19467_19471 = G__19483;
continue;
} else {
var x_19484 = cljs.core.first.call(null,seq__19464_19478__$1);
ret.push(x_19484);

var G__19485 = cljs.core.next.call(null,seq__19464_19478__$1);
var G__19486 = null;
var G__19487 = (0);
var G__19488 = (0);
seq__19464_19468 = G__19485;
chunk__19465_19469 = G__19486;
count__19466_19470 = G__19487;
i__19467_19471 = G__19488;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19489_19493 = cljs.core.seq.call(null,v);
var chunk__19490_19494 = null;
var count__19491_19495 = (0);
var i__19492_19496 = (0);
while(true){
if((i__19492_19496 < count__19491_19495)){
var x_19497 = cljs.core._nth.call(null,chunk__19490_19494,i__19492_19496);
ret.push(x_19497);

var G__19498 = seq__19489_19493;
var G__19499 = chunk__19490_19494;
var G__19500 = count__19491_19495;
var G__19501 = (i__19492_19496 + (1));
seq__19489_19493 = G__19498;
chunk__19490_19494 = G__19499;
count__19491_19495 = G__19500;
i__19492_19496 = G__19501;
continue;
} else {
var temp__4425__auto___19502 = cljs.core.seq.call(null,seq__19489_19493);
if(temp__4425__auto___19502){
var seq__19489_19503__$1 = temp__4425__auto___19502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19489_19503__$1)){
var c__17925__auto___19504 = cljs.core.chunk_first.call(null,seq__19489_19503__$1);
var G__19505 = cljs.core.chunk_rest.call(null,seq__19489_19503__$1);
var G__19506 = c__17925__auto___19504;
var G__19507 = cljs.core.count.call(null,c__17925__auto___19504);
var G__19508 = (0);
seq__19489_19493 = G__19505;
chunk__19490_19494 = G__19506;
count__19491_19495 = G__19507;
i__19492_19496 = G__19508;
continue;
} else {
var x_19509 = cljs.core.first.call(null,seq__19489_19503__$1);
ret.push(x_19509);

var G__19510 = cljs.core.next.call(null,seq__19489_19503__$1);
var G__19511 = null;
var G__19512 = (0);
var G__19513 = (0);
seq__19489_19493 = G__19510;
chunk__19490_19494 = G__19511;
count__19491_19495 = G__19512;
i__19492_19496 = G__19513;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19514_19518 = cljs.core.seq.call(null,v);
var chunk__19515_19519 = null;
var count__19516_19520 = (0);
var i__19517_19521 = (0);
while(true){
if((i__19517_19521 < count__19516_19520)){
var x_19522 = cljs.core._nth.call(null,chunk__19515_19519,i__19517_19521);
ret.push(x_19522);

var G__19523 = seq__19514_19518;
var G__19524 = chunk__19515_19519;
var G__19525 = count__19516_19520;
var G__19526 = (i__19517_19521 + (1));
seq__19514_19518 = G__19523;
chunk__19515_19519 = G__19524;
count__19516_19520 = G__19525;
i__19517_19521 = G__19526;
continue;
} else {
var temp__4425__auto___19527 = cljs.core.seq.call(null,seq__19514_19518);
if(temp__4425__auto___19527){
var seq__19514_19528__$1 = temp__4425__auto___19527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19514_19528__$1)){
var c__17925__auto___19529 = cljs.core.chunk_first.call(null,seq__19514_19528__$1);
var G__19530 = cljs.core.chunk_rest.call(null,seq__19514_19528__$1);
var G__19531 = c__17925__auto___19529;
var G__19532 = cljs.core.count.call(null,c__17925__auto___19529);
var G__19533 = (0);
seq__19514_19518 = G__19530;
chunk__19515_19519 = G__19531;
count__19516_19520 = G__19532;
i__19517_19521 = G__19533;
continue;
} else {
var x_19534 = cljs.core.first.call(null,seq__19514_19528__$1);
ret.push(x_19534);

var G__19535 = cljs.core.next.call(null,seq__19514_19528__$1);
var G__19536 = null;
var G__19537 = (0);
var G__19538 = (0);
seq__19514_19518 = G__19535;
chunk__19515_19519 = G__19536;
count__19516_19520 = G__19537;
i__19517_19521 = G__19538;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args19539 = [];
var len__18180__auto___19550 = arguments.length;
var i__18181__auto___19551 = (0);
while(true){
if((i__18181__auto___19551 < len__18180__auto___19550)){
args19539.push((arguments[i__18181__auto___19551]));

var G__19552 = (i__18181__auto___19551 + (1));
i__18181__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19541 = args19539.length;
switch (G__19541) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19539.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19542 = obj;
G__19542.push(kfn.call(null,k),vfn.call(null,v));

return G__19542;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19543 = cljs.core.clone.call(null,handlers);
x19543.forEach = ((function (x19543,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19544 = cljs.core.seq.call(null,coll);
var chunk__19545 = null;
var count__19546 = (0);
var i__19547 = (0);
while(true){
if((i__19547 < count__19546)){
var vec__19548 = cljs.core._nth.call(null,chunk__19545,i__19547);
var k = cljs.core.nth.call(null,vec__19548,(0),null);
var v = cljs.core.nth.call(null,vec__19548,(1),null);
f.call(null,v,k);

var G__19554 = seq__19544;
var G__19555 = chunk__19545;
var G__19556 = count__19546;
var G__19557 = (i__19547 + (1));
seq__19544 = G__19554;
chunk__19545 = G__19555;
count__19546 = G__19556;
i__19547 = G__19557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19544);
if(temp__4425__auto__){
var seq__19544__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19544__$1)){
var c__17925__auto__ = cljs.core.chunk_first.call(null,seq__19544__$1);
var G__19558 = cljs.core.chunk_rest.call(null,seq__19544__$1);
var G__19559 = c__17925__auto__;
var G__19560 = cljs.core.count.call(null,c__17925__auto__);
var G__19561 = (0);
seq__19544 = G__19558;
chunk__19545 = G__19559;
count__19546 = G__19560;
i__19547 = G__19561;
continue;
} else {
var vec__19549 = cljs.core.first.call(null,seq__19544__$1);
var k = cljs.core.nth.call(null,vec__19549,(0),null);
var v = cljs.core.nth.call(null,vec__19549,(1),null);
f.call(null,v,k);

var G__19562 = cljs.core.next.call(null,seq__19544__$1);
var G__19563 = null;
var G__19564 = (0);
var G__19565 = (0);
seq__19544 = G__19562;
chunk__19545 = G__19563;
count__19546 = G__19564;
i__19547 = G__19565;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19543,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19543;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args19566 = [];
var len__18180__auto___19572 = arguments.length;
var i__18181__auto___19573 = (0);
while(true){
if((i__18181__auto___19573 < len__18180__auto___19572)){
args19566.push((arguments[i__18181__auto___19573]));

var G__19574 = (i__18181__auto___19573 + (1));
i__18181__auto___19573 = G__19574;
continue;
} else {
}
break;
}

var G__19568 = args19566.length;
switch (G__19568) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19566.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19569 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19570){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19570 = meta19570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19571,meta19570__$1){
var self__ = this;
var _19571__$1 = this;
return (new cognitect.transit.t_cognitect$transit19569(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19570__$1));
});

cognitect.transit.t_cognitect$transit19569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19571){
var self__ = this;
var _19571__$1 = this;
return self__.meta19570;
});

cognitect.transit.t_cognitect$transit19569.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19569.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19569.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19569.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19570","meta19570",-1349877567,null)], null);
});

cognitect.transit.t_cognitect$transit19569.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19569.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19569";

cognitect.transit.t_cognitect$transit19569.cljs$lang$ctorPrWriter = (function (this__17720__auto__,writer__17721__auto__,opt__17722__auto__){
return cljs.core._write.call(null,writer__17721__auto__,"cognitect.transit/t_cognitect$transit19569");
});

cognitect.transit.__GT_t_cognitect$transit19569 = (function cognitect$transit$__GT_t_cognitect$transit19569(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19570){
return (new cognitect.transit.t_cognitect$transit19569(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19570));
});

}

return (new cognitect.transit.t_cognitect$transit19569(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__17122__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__17122__auto__)){
return or__17122__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1454016837798