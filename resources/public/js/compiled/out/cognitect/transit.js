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
var seq__27134_27138 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27135_27139 = null;
var count__27136_27140 = (0);
var i__27137_27141 = (0);
while(true){
if((i__27137_27141 < count__27136_27140)){
var k_27142 = cljs.core._nth.call(null,chunk__27135_27139,i__27137_27141);
var v_27143 = (b[k_27142]);
(a[k_27142] = v_27143);

var G__27144 = seq__27134_27138;
var G__27145 = chunk__27135_27139;
var G__27146 = count__27136_27140;
var G__27147 = (i__27137_27141 + (1));
seq__27134_27138 = G__27144;
chunk__27135_27139 = G__27145;
count__27136_27140 = G__27146;
i__27137_27141 = G__27147;
continue;
} else {
var temp__4425__auto___27148 = cljs.core.seq.call(null,seq__27134_27138);
if(temp__4425__auto___27148){
var seq__27134_27149__$1 = temp__4425__auto___27148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27134_27149__$1)){
var c__19231__auto___27150 = cljs.core.chunk_first.call(null,seq__27134_27149__$1);
var G__27151 = cljs.core.chunk_rest.call(null,seq__27134_27149__$1);
var G__27152 = c__19231__auto___27150;
var G__27153 = cljs.core.count.call(null,c__19231__auto___27150);
var G__27154 = (0);
seq__27134_27138 = G__27151;
chunk__27135_27139 = G__27152;
count__27136_27140 = G__27153;
i__27137_27141 = G__27154;
continue;
} else {
var k_27155 = cljs.core.first.call(null,seq__27134_27149__$1);
var v_27156 = (b[k_27155]);
(a[k_27155] = v_27156);

var G__27157 = cljs.core.next.call(null,seq__27134_27149__$1);
var G__27158 = null;
var G__27159 = (0);
var G__27160 = (0);
seq__27134_27138 = G__27157;
chunk__27135_27139 = G__27158;
count__27136_27140 = G__27159;
i__27137_27141 = G__27160;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/VectorBuilder");
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
var args27161 = [];
var len__19486__auto___27164 = arguments.length;
var i__19487__auto___27165 = (0);
while(true){
if((i__19487__auto___27165 < len__19486__auto___27164)){
args27161.push((arguments[i__19487__auto___27165]));

var G__27166 = (i__19487__auto___27165 + (1));
i__19487__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var G__27163 = args27161.length;
switch (G__27163) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27161.length)].join('')));

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
var G__27168 = (i + (2));
var G__27169 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27168;
ret = G__27169;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/SymbolHandler");
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
var seq__27170_27174 = cljs.core.seq.call(null,v);
var chunk__27171_27175 = null;
var count__27172_27176 = (0);
var i__27173_27177 = (0);
while(true){
if((i__27173_27177 < count__27172_27176)){
var x_27178 = cljs.core._nth.call(null,chunk__27171_27175,i__27173_27177);
ret.push(x_27178);

var G__27179 = seq__27170_27174;
var G__27180 = chunk__27171_27175;
var G__27181 = count__27172_27176;
var G__27182 = (i__27173_27177 + (1));
seq__27170_27174 = G__27179;
chunk__27171_27175 = G__27180;
count__27172_27176 = G__27181;
i__27173_27177 = G__27182;
continue;
} else {
var temp__4425__auto___27183 = cljs.core.seq.call(null,seq__27170_27174);
if(temp__4425__auto___27183){
var seq__27170_27184__$1 = temp__4425__auto___27183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27170_27184__$1)){
var c__19231__auto___27185 = cljs.core.chunk_first.call(null,seq__27170_27184__$1);
var G__27186 = cljs.core.chunk_rest.call(null,seq__27170_27184__$1);
var G__27187 = c__19231__auto___27185;
var G__27188 = cljs.core.count.call(null,c__19231__auto___27185);
var G__27189 = (0);
seq__27170_27174 = G__27186;
chunk__27171_27175 = G__27187;
count__27172_27176 = G__27188;
i__27173_27177 = G__27189;
continue;
} else {
var x_27190 = cljs.core.first.call(null,seq__27170_27184__$1);
ret.push(x_27190);

var G__27191 = cljs.core.next.call(null,seq__27170_27184__$1);
var G__27192 = null;
var G__27193 = (0);
var G__27194 = (0);
seq__27170_27174 = G__27191;
chunk__27171_27175 = G__27192;
count__27172_27176 = G__27193;
i__27173_27177 = G__27194;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/MapHandler");
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
var seq__27195_27199 = cljs.core.seq.call(null,v);
var chunk__27196_27200 = null;
var count__27197_27201 = (0);
var i__27198_27202 = (0);
while(true){
if((i__27198_27202 < count__27197_27201)){
var x_27203 = cljs.core._nth.call(null,chunk__27196_27200,i__27198_27202);
ret.push(x_27203);

var G__27204 = seq__27195_27199;
var G__27205 = chunk__27196_27200;
var G__27206 = count__27197_27201;
var G__27207 = (i__27198_27202 + (1));
seq__27195_27199 = G__27204;
chunk__27196_27200 = G__27205;
count__27197_27201 = G__27206;
i__27198_27202 = G__27207;
continue;
} else {
var temp__4425__auto___27208 = cljs.core.seq.call(null,seq__27195_27199);
if(temp__4425__auto___27208){
var seq__27195_27209__$1 = temp__4425__auto___27208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27195_27209__$1)){
var c__19231__auto___27210 = cljs.core.chunk_first.call(null,seq__27195_27209__$1);
var G__27211 = cljs.core.chunk_rest.call(null,seq__27195_27209__$1);
var G__27212 = c__19231__auto___27210;
var G__27213 = cljs.core.count.call(null,c__19231__auto___27210);
var G__27214 = (0);
seq__27195_27199 = G__27211;
chunk__27196_27200 = G__27212;
count__27197_27201 = G__27213;
i__27198_27202 = G__27214;
continue;
} else {
var x_27215 = cljs.core.first.call(null,seq__27195_27209__$1);
ret.push(x_27215);

var G__27216 = cljs.core.next.call(null,seq__27195_27209__$1);
var G__27217 = null;
var G__27218 = (0);
var G__27219 = (0);
seq__27195_27199 = G__27216;
chunk__27196_27200 = G__27217;
count__27197_27201 = G__27218;
i__27198_27202 = G__27219;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/SetHandler");
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
var seq__27220_27224 = cljs.core.seq.call(null,v);
var chunk__27221_27225 = null;
var count__27222_27226 = (0);
var i__27223_27227 = (0);
while(true){
if((i__27223_27227 < count__27222_27226)){
var x_27228 = cljs.core._nth.call(null,chunk__27221_27225,i__27223_27227);
ret.push(x_27228);

var G__27229 = seq__27220_27224;
var G__27230 = chunk__27221_27225;
var G__27231 = count__27222_27226;
var G__27232 = (i__27223_27227 + (1));
seq__27220_27224 = G__27229;
chunk__27221_27225 = G__27230;
count__27222_27226 = G__27231;
i__27223_27227 = G__27232;
continue;
} else {
var temp__4425__auto___27233 = cljs.core.seq.call(null,seq__27220_27224);
if(temp__4425__auto___27233){
var seq__27220_27234__$1 = temp__4425__auto___27233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27220_27234__$1)){
var c__19231__auto___27235 = cljs.core.chunk_first.call(null,seq__27220_27234__$1);
var G__27236 = cljs.core.chunk_rest.call(null,seq__27220_27234__$1);
var G__27237 = c__19231__auto___27235;
var G__27238 = cljs.core.count.call(null,c__19231__auto___27235);
var G__27239 = (0);
seq__27220_27224 = G__27236;
chunk__27221_27225 = G__27237;
count__27222_27226 = G__27238;
i__27223_27227 = G__27239;
continue;
} else {
var x_27240 = cljs.core.first.call(null,seq__27220_27234__$1);
ret.push(x_27240);

var G__27241 = cljs.core.next.call(null,seq__27220_27234__$1);
var G__27242 = null;
var G__27243 = (0);
var G__27244 = (0);
seq__27220_27224 = G__27241;
chunk__27221_27225 = G__27242;
count__27222_27226 = G__27243;
i__27223_27227 = G__27244;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/UUIDHandler");
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
var args27245 = [];
var len__19486__auto___27256 = arguments.length;
var i__19487__auto___27257 = (0);
while(true){
if((i__19487__auto___27257 < len__19486__auto___27256)){
args27245.push((arguments[i__19487__auto___27257]));

var G__27258 = (i__19487__auto___27257 + (1));
i__19487__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var G__27247 = args27245.length;
switch (G__27247) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27245.length)].join('')));

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
var G__27248 = obj;
G__27248.push(kfn.call(null,k),vfn.call(null,v));

return G__27248;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27249 = cljs.core.clone.call(null,handlers);
x27249.forEach = ((function (x27249,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27250 = cljs.core.seq.call(null,coll);
var chunk__27251 = null;
var count__27252 = (0);
var i__27253 = (0);
while(true){
if((i__27253 < count__27252)){
var vec__27254 = cljs.core._nth.call(null,chunk__27251,i__27253);
var k = cljs.core.nth.call(null,vec__27254,(0),null);
var v = cljs.core.nth.call(null,vec__27254,(1),null);
f.call(null,v,k);

var G__27260 = seq__27250;
var G__27261 = chunk__27251;
var G__27262 = count__27252;
var G__27263 = (i__27253 + (1));
seq__27250 = G__27260;
chunk__27251 = G__27261;
count__27252 = G__27262;
i__27253 = G__27263;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27250);
if(temp__4425__auto__){
var seq__27250__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27250__$1)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,seq__27250__$1);
var G__27264 = cljs.core.chunk_rest.call(null,seq__27250__$1);
var G__27265 = c__19231__auto__;
var G__27266 = cljs.core.count.call(null,c__19231__auto__);
var G__27267 = (0);
seq__27250 = G__27264;
chunk__27251 = G__27265;
count__27252 = G__27266;
i__27253 = G__27267;
continue;
} else {
var vec__27255 = cljs.core.first.call(null,seq__27250__$1);
var k = cljs.core.nth.call(null,vec__27255,(0),null);
var v = cljs.core.nth.call(null,vec__27255,(1),null);
f.call(null,v,k);

var G__27268 = cljs.core.next.call(null,seq__27250__$1);
var G__27269 = null;
var G__27270 = (0);
var G__27271 = (0);
seq__27250 = G__27268;
chunk__27251 = G__27269;
count__27252 = G__27270;
i__27253 = G__27271;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27249,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27249;
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
var args27272 = [];
var len__19486__auto___27278 = arguments.length;
var i__19487__auto___27279 = (0);
while(true){
if((i__19487__auto___27279 < len__19486__auto___27278)){
args27272.push((arguments[i__19487__auto___27279]));

var G__27280 = (i__19487__auto___27279 + (1));
i__19487__auto___27279 = G__27280;
continue;
} else {
}
break;
}

var G__27274 = args27272.length;
switch (G__27274) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27272.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27275 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27276){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27276 = meta27276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27277,meta27276__$1){
var self__ = this;
var _27277__$1 = this;
return (new cognitect.transit.t_cognitect$transit27275(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27276__$1));
});

cognitect.transit.t_cognitect$transit27275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27277){
var self__ = this;
var _27277__$1 = this;
return self__.meta27276;
});

cognitect.transit.t_cognitect$transit27275.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27275.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27275.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27275.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27276","meta27276",-1480327312,null)], null);
});

cognitect.transit.t_cognitect$transit27275.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27275.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27275";

cognitect.transit.t_cognitect$transit27275.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cognitect.transit/t_cognitect$transit27275");
});

cognitect.transit.__GT_t_cognitect$transit27275 = (function cognitect$transit$__GT_t_cognitect$transit27275(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27276){
return (new cognitect.transit.t_cognitect$transit27275(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27276));
});

}

return (new cognitect.transit.t_cognitect$transit27275(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__18428__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1454378532757