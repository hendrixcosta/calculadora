// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27965 = [];
var len__19486__auto___27971 = arguments.length;
var i__19487__auto___27972 = (0);
while(true){
if((i__19487__auto___27972 < len__19486__auto___27971)){
args27965.push((arguments[i__19487__auto___27972]));

var G__27973 = (i__19487__auto___27972 + (1));
i__19487__auto___27972 = G__27973;
continue;
} else {
}
break;
}

var G__27967 = args27965.length;
switch (G__27967) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27965.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27968 = (function (f,blockable,meta27969){
this.f = f;
this.blockable = blockable;
this.meta27969 = meta27969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27970,meta27969__$1){
var self__ = this;
var _27970__$1 = this;
return (new cljs.core.async.t_cljs$core$async27968(self__.f,self__.blockable,meta27969__$1));
});

cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27970){
var self__ = this;
var _27970__$1 = this;
return self__.meta27969;
});

cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27969","meta27969",274364014,null)], null);
});

cljs.core.async.t_cljs$core$async27968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27968";

cljs.core.async.t_cljs$core$async27968.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async27968");
});

cljs.core.async.__GT_t_cljs$core$async27968 = (function cljs$core$async$__GT_t_cljs$core$async27968(f__$1,blockable__$1,meta27969){
return (new cljs.core.async.t_cljs$core$async27968(f__$1,blockable__$1,meta27969));
});

}

return (new cljs.core.async.t_cljs$core$async27968(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27977 = [];
var len__19486__auto___27980 = arguments.length;
var i__19487__auto___27981 = (0);
while(true){
if((i__19487__auto___27981 < len__19486__auto___27980)){
args27977.push((arguments[i__19487__auto___27981]));

var G__27982 = (i__19487__auto___27981 + (1));
i__19487__auto___27981 = G__27982;
continue;
} else {
}
break;
}

var G__27979 = args27977.length;
switch (G__27979) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27977.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27984 = [];
var len__19486__auto___27987 = arguments.length;
var i__19487__auto___27988 = (0);
while(true){
if((i__19487__auto___27988 < len__19486__auto___27987)){
args27984.push((arguments[i__19487__auto___27988]));

var G__27989 = (i__19487__auto___27988 + (1));
i__19487__auto___27988 = G__27989;
continue;
} else {
}
break;
}

var G__27986 = args27984.length;
switch (G__27986) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27984.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27991 = [];
var len__19486__auto___27994 = arguments.length;
var i__19487__auto___27995 = (0);
while(true){
if((i__19487__auto___27995 < len__19486__auto___27994)){
args27991.push((arguments[i__19487__auto___27995]));

var G__27996 = (i__19487__auto___27995 + (1));
i__19487__auto___27995 = G__27996;
continue;
} else {
}
break;
}

var G__27993 = args27991.length;
switch (G__27993) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27991.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27998 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27998);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27998,ret){
return (function (){
return fn1.call(null,val_27998);
});})(val_27998,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27999 = [];
var len__19486__auto___28002 = arguments.length;
var i__19487__auto___28003 = (0);
while(true){
if((i__19487__auto___28003 < len__19486__auto___28002)){
args27999.push((arguments[i__19487__auto___28003]));

var G__28004 = (i__19487__auto___28003 + (1));
i__19487__auto___28003 = G__28004;
continue;
} else {
}
break;
}

var G__28001 = args27999.length;
switch (G__28001) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27999.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19331__auto___28006 = n;
var x_28007 = (0);
while(true){
if((x_28007 < n__19331__auto___28006)){
(a[x_28007] = (0));

var G__28008 = (x_28007 + (1));
x_28007 = G__28008;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28009 = (i + (1));
i = G__28009;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28013 = (function (alt_flag,flag,meta28014){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28014 = meta28014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28015,meta28014__$1){
var self__ = this;
var _28015__$1 = this;
return (new cljs.core.async.t_cljs$core$async28013(self__.alt_flag,self__.flag,meta28014__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28015){
var self__ = this;
var _28015__$1 = this;
return self__.meta28014;
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28014","meta28014",2097087047,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28013";

cljs.core.async.t_cljs$core$async28013.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async28013");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28013 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28013(alt_flag__$1,flag__$1,meta28014){
return (new cljs.core.async.t_cljs$core$async28013(alt_flag__$1,flag__$1,meta28014));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28013(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28019 = (function (alt_handler,flag,cb,meta28020){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28020 = meta28020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28021,meta28020__$1){
var self__ = this;
var _28021__$1 = this;
return (new cljs.core.async.t_cljs$core$async28019(self__.alt_handler,self__.flag,self__.cb,meta28020__$1));
});

cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28021){
var self__ = this;
var _28021__$1 = this;
return self__.meta28020;
});

cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28020","meta28020",2055314245,null)], null);
});

cljs.core.async.t_cljs$core$async28019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28019";

cljs.core.async.t_cljs$core$async28019.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async28019");
});

cljs.core.async.__GT_t_cljs$core$async28019 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28019(alt_handler__$1,flag__$1,cb__$1,meta28020){
return (new cljs.core.async.t_cljs$core$async28019(alt_handler__$1,flag__$1,cb__$1,meta28020));
});

}

return (new cljs.core.async.t_cljs$core$async28019(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28022_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28022_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28023_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28023_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18428__auto__ = wport;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28024 = (i + (1));
i = G__28024;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18428__auto__ = ret;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18416__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18416__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18416__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19493__auto__ = [];
var len__19486__auto___28030 = arguments.length;
var i__19487__auto___28031 = (0);
while(true){
if((i__19487__auto___28031 < len__19486__auto___28030)){
args__19493__auto__.push((arguments[i__19487__auto___28031]));

var G__28032 = (i__19487__auto___28031 + (1));
i__19487__auto___28031 = G__28032;
continue;
} else {
}
break;
}

var argseq__19494__auto__ = ((((1) < args__19493__auto__.length))?(new cljs.core.IndexedSeq(args__19493__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19494__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28027){
var map__28028 = p__28027;
var map__28028__$1 = ((((!((map__28028 == null)))?((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var opts = map__28028__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28025){
var G__28026 = cljs.core.first.call(null,seq28025);
var seq28025__$1 = cljs.core.next.call(null,seq28025);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28026,seq28025__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28033 = [];
var len__19486__auto___28083 = arguments.length;
var i__19487__auto___28084 = (0);
while(true){
if((i__19487__auto___28084 < len__19486__auto___28083)){
args28033.push((arguments[i__19487__auto___28084]));

var G__28085 = (i__19487__auto___28084 + (1));
i__19487__auto___28084 = G__28085;
continue;
} else {
}
break;
}

var G__28035 = args28033.length;
switch (G__28035) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28033.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20692__auto___28087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___28087){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___28087){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28061_28088 = state_28059__$1;
(statearr_28061_28088[(2)] = inst_28055);

(statearr_28061_28088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (1))){
var state_28059__$1 = state_28059;
var statearr_28062_28089 = state_28059__$1;
(statearr_28062_28089[(2)] = null);

(statearr_28062_28089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (4))){
var inst_28038 = (state_28059[(7)]);
var inst_28038__$1 = (state_28059[(2)]);
var inst_28039 = (inst_28038__$1 == null);
var state_28059__$1 = (function (){var statearr_28063 = state_28059;
(statearr_28063[(7)] = inst_28038__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28039)){
var statearr_28064_28090 = state_28059__$1;
(statearr_28064_28090[(1)] = (5));

} else {
var statearr_28065_28091 = state_28059__$1;
(statearr_28065_28091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (13))){
var state_28059__$1 = state_28059;
var statearr_28066_28092 = state_28059__$1;
(statearr_28066_28092[(2)] = null);

(statearr_28066_28092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var inst_28038 = (state_28059[(7)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28059__$1,(11),to,inst_28038);
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (12))){
var state_28059__$1 = state_28059;
var statearr_28067_28093 = state_28059__$1;
(statearr_28067_28093[(2)] = null);

(statearr_28067_28093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (2))){
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(4),from);
} else {
if((state_val_28060 === (11))){
var inst_28048 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28048)){
var statearr_28068_28094 = state_28059__$1;
(statearr_28068_28094[(1)] = (12));

} else {
var statearr_28069_28095 = state_28059__$1;
(statearr_28069_28095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (9))){
var state_28059__$1 = state_28059;
var statearr_28070_28096 = state_28059__$1;
(statearr_28070_28096[(2)] = null);

(statearr_28070_28096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (5))){
var state_28059__$1 = state_28059;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28071_28097 = state_28059__$1;
(statearr_28071_28097[(1)] = (8));

} else {
var statearr_28072_28098 = state_28059__$1;
(statearr_28072_28098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (14))){
var inst_28053 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28073_28099 = state_28059__$1;
(statearr_28073_28099[(2)] = inst_28053);

(statearr_28073_28099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (10))){
var inst_28045 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28074_28100 = state_28059__$1;
(statearr_28074_28100[(2)] = inst_28045);

(statearr_28074_28100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (8))){
var inst_28042 = cljs.core.async.close_BANG_.call(null,to);
var state_28059__$1 = state_28059;
var statearr_28075_28101 = state_28059__$1;
(statearr_28075_28101[(2)] = inst_28042);

(statearr_28075_28101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___28087))
;
return ((function (switch__20671__auto__,c__20692__auto___28087){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_28079 = [null,null,null,null,null,null,null,null];
(statearr_28079[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_28079[(1)] = (1));

return statearr_28079;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_28059){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28080){if((e28080 instanceof Object)){
var ex__20675__auto__ = e28080;
var statearr_28081_28102 = state_28059;
(statearr_28081_28102[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28103 = state_28059;
state_28059 = G__28103;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___28087))
})();
var state__20694__auto__ = (function (){var statearr_28082 = f__20693__auto__.call(null);
(statearr_28082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28087);

return statearr_28082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___28087))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28287){
var vec__28288 = p__28287;
var v = cljs.core.nth.call(null,vec__28288,(0),null);
var p = cljs.core.nth.call(null,vec__28288,(1),null);
var job = vec__28288;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20692__auto___28470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (1))){
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28293__$1,(2),res,v);
} else {
if((state_val_28294 === (2))){
var inst_28290 = (state_28293[(2)]);
var inst_28291 = cljs.core.async.close_BANG_.call(null,res);
var state_28293__$1 = (function (){var statearr_28295 = state_28293;
(statearr_28295[(7)] = inst_28290);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
return null;
}
}
});})(c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results))
;
return ((function (switch__20671__auto__,c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_28299 = [null,null,null,null,null,null,null,null];
(statearr_28299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__);

(statearr_28299[(1)] = (1));

return statearr_28299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1 = (function (state_28293){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28300){if((e28300 instanceof Object)){
var ex__20675__auto__ = e28300;
var statearr_28301_28471 = state_28293;
(statearr_28301_28471[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28472 = state_28293;
state_28293 = G__28472;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results))
})();
var state__20694__auto__ = (function (){var statearr_28302 = f__20693__auto__.call(null);
(statearr_28302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28470);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___28470,res,vec__28288,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28303){
var vec__28304 = p__28303;
var v = cljs.core.nth.call(null,vec__28304,(0),null);
var p = cljs.core.nth.call(null,vec__28304,(1),null);
var job = vec__28304;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19331__auto___28473 = n;
var __28474 = (0);
while(true){
if((__28474 < n__19331__auto___28473)){
var G__28305_28475 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28305_28475) {
case "compute":
var c__20692__auto___28477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28474,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (__28474,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function (state_28318){
var state_val_28319 = (state_28318[(1)]);
if((state_val_28319 === (1))){
var state_28318__$1 = state_28318;
var statearr_28320_28478 = state_28318__$1;
(statearr_28320_28478[(2)] = null);

(statearr_28320_28478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (2))){
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(4),jobs);
} else {
if((state_val_28319 === (3))){
var inst_28316 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else {
if((state_val_28319 === (4))){
var inst_28308 = (state_28318[(2)]);
var inst_28309 = process.call(null,inst_28308);
var state_28318__$1 = state_28318;
if(cljs.core.truth_(inst_28309)){
var statearr_28321_28479 = state_28318__$1;
(statearr_28321_28479[(1)] = (5));

} else {
var statearr_28322_28480 = state_28318__$1;
(statearr_28322_28480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (5))){
var state_28318__$1 = state_28318;
var statearr_28323_28481 = state_28318__$1;
(statearr_28323_28481[(2)] = null);

(statearr_28323_28481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (6))){
var state_28318__$1 = state_28318;
var statearr_28324_28482 = state_28318__$1;
(statearr_28324_28482[(2)] = null);

(statearr_28324_28482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (7))){
var inst_28314 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28325_28483 = state_28318__$1;
(statearr_28325_28483[(2)] = inst_28314);

(statearr_28325_28483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28474,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
;
return ((function (__28474,switch__20671__auto__,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_28329 = [null,null,null,null,null,null,null];
(statearr_28329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__);

(statearr_28329[(1)] = (1));

return statearr_28329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1 = (function (state_28318){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28330){if((e28330 instanceof Object)){
var ex__20675__auto__ = e28330;
var statearr_28331_28484 = state_28318;
(statearr_28331_28484[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28485 = state_28318;
state_28318 = G__28485;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__;
})()
;})(__28474,switch__20671__auto__,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
})();
var state__20694__auto__ = (function (){var statearr_28332 = f__20693__auto__.call(null);
(statearr_28332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28477);

return statearr_28332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(__28474,c__20692__auto___28477,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
);


break;
case "async":
var c__20692__auto___28486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28474,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (__28474,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function (state_28345){
var state_val_28346 = (state_28345[(1)]);
if((state_val_28346 === (1))){
var state_28345__$1 = state_28345;
var statearr_28347_28487 = state_28345__$1;
(statearr_28347_28487[(2)] = null);

(statearr_28347_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (2))){
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28345__$1,(4),jobs);
} else {
if((state_val_28346 === (3))){
var inst_28343 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28345__$1,inst_28343);
} else {
if((state_val_28346 === (4))){
var inst_28335 = (state_28345[(2)]);
var inst_28336 = async.call(null,inst_28335);
var state_28345__$1 = state_28345;
if(cljs.core.truth_(inst_28336)){
var statearr_28348_28488 = state_28345__$1;
(statearr_28348_28488[(1)] = (5));

} else {
var statearr_28349_28489 = state_28345__$1;
(statearr_28349_28489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (5))){
var state_28345__$1 = state_28345;
var statearr_28350_28490 = state_28345__$1;
(statearr_28350_28490[(2)] = null);

(statearr_28350_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (6))){
var state_28345__$1 = state_28345;
var statearr_28351_28491 = state_28345__$1;
(statearr_28351_28491[(2)] = null);

(statearr_28351_28491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (7))){
var inst_28341 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28352_28492 = state_28345__$1;
(statearr_28352_28492[(2)] = inst_28341);

(statearr_28352_28492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28474,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
;
return ((function (__28474,switch__20671__auto__,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_28356 = [null,null,null,null,null,null,null];
(statearr_28356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__);

(statearr_28356[(1)] = (1));

return statearr_28356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1 = (function (state_28345){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28357){if((e28357 instanceof Object)){
var ex__20675__auto__ = e28357;
var statearr_28358_28493 = state_28345;
(statearr_28358_28493[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28494 = state_28345;
state_28345 = G__28494;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = function(state_28345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1.call(this,state_28345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__;
})()
;})(__28474,switch__20671__auto__,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
})();
var state__20694__auto__ = (function (){var statearr_28359 = f__20693__auto__.call(null);
(statearr_28359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28486);

return statearr_28359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(__28474,c__20692__auto___28486,G__28305_28475,n__19331__auto___28473,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28495 = (__28474 + (1));
__28474 = G__28495;
continue;
} else {
}
break;
}

var c__20692__auto___28496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___28496,jobs,results,process,async){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___28496,jobs,results,process,async){
return (function (state_28381){
var state_val_28382 = (state_28381[(1)]);
if((state_val_28382 === (1))){
var state_28381__$1 = state_28381;
var statearr_28383_28497 = state_28381__$1;
(statearr_28383_28497[(2)] = null);

(statearr_28383_28497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (2))){
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28381__$1,(4),from);
} else {
if((state_val_28382 === (3))){
var inst_28379 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28381__$1,inst_28379);
} else {
if((state_val_28382 === (4))){
var inst_28362 = (state_28381[(7)]);
var inst_28362__$1 = (state_28381[(2)]);
var inst_28363 = (inst_28362__$1 == null);
var state_28381__$1 = (function (){var statearr_28384 = state_28381;
(statearr_28384[(7)] = inst_28362__$1);

return statearr_28384;
})();
if(cljs.core.truth_(inst_28363)){
var statearr_28385_28498 = state_28381__$1;
(statearr_28385_28498[(1)] = (5));

} else {
var statearr_28386_28499 = state_28381__$1;
(statearr_28386_28499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (5))){
var inst_28365 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28381__$1 = state_28381;
var statearr_28387_28500 = state_28381__$1;
(statearr_28387_28500[(2)] = inst_28365);

(statearr_28387_28500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (6))){
var inst_28367 = (state_28381[(8)]);
var inst_28362 = (state_28381[(7)]);
var inst_28367__$1 = cljs.core.async.chan.call(null,(1));
var inst_28368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28369 = [inst_28362,inst_28367__$1];
var inst_28370 = (new cljs.core.PersistentVector(null,2,(5),inst_28368,inst_28369,null));
var state_28381__$1 = (function (){var statearr_28388 = state_28381;
(statearr_28388[(8)] = inst_28367__$1);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28381__$1,(8),jobs,inst_28370);
} else {
if((state_val_28382 === (7))){
var inst_28377 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28389_28501 = state_28381__$1;
(statearr_28389_28501[(2)] = inst_28377);

(statearr_28389_28501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (8))){
var inst_28367 = (state_28381[(8)]);
var inst_28372 = (state_28381[(2)]);
var state_28381__$1 = (function (){var statearr_28390 = state_28381;
(statearr_28390[(9)] = inst_28372);

return statearr_28390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28381__$1,(9),results,inst_28367);
} else {
if((state_val_28382 === (9))){
var inst_28374 = (state_28381[(2)]);
var state_28381__$1 = (function (){var statearr_28391 = state_28381;
(statearr_28391[(10)] = inst_28374);

return statearr_28391;
})();
var statearr_28392_28502 = state_28381__$1;
(statearr_28392_28502[(2)] = null);

(statearr_28392_28502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___28496,jobs,results,process,async))
;
return ((function (switch__20671__auto__,c__20692__auto___28496,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1 = (function (state_28381){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__20675__auto__ = e28397;
var statearr_28398_28503 = state_28381;
(statearr_28398_28503[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28504 = state_28381;
state_28381 = G__28504;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___28496,jobs,results,process,async))
})();
var state__20694__auto__ = (function (){var statearr_28399 = f__20693__auto__.call(null);
(statearr_28399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28496);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___28496,jobs,results,process,async))
);


var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__,jobs,results,process,async){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__,jobs,results,process,async){
return (function (state_28437){
var state_val_28438 = (state_28437[(1)]);
if((state_val_28438 === (7))){
var inst_28433 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28439_28505 = state_28437__$1;
(statearr_28439_28505[(2)] = inst_28433);

(statearr_28439_28505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (20))){
var state_28437__$1 = state_28437;
var statearr_28440_28506 = state_28437__$1;
(statearr_28440_28506[(2)] = null);

(statearr_28440_28506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (1))){
var state_28437__$1 = state_28437;
var statearr_28441_28507 = state_28437__$1;
(statearr_28441_28507[(2)] = null);

(statearr_28441_28507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (4))){
var inst_28402 = (state_28437[(7)]);
var inst_28402__$1 = (state_28437[(2)]);
var inst_28403 = (inst_28402__$1 == null);
var state_28437__$1 = (function (){var statearr_28442 = state_28437;
(statearr_28442[(7)] = inst_28402__$1);

return statearr_28442;
})();
if(cljs.core.truth_(inst_28403)){
var statearr_28443_28508 = state_28437__$1;
(statearr_28443_28508[(1)] = (5));

} else {
var statearr_28444_28509 = state_28437__$1;
(statearr_28444_28509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (15))){
var inst_28415 = (state_28437[(8)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28437__$1,(18),to,inst_28415);
} else {
if((state_val_28438 === (21))){
var inst_28428 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28445_28510 = state_28437__$1;
(statearr_28445_28510[(2)] = inst_28428);

(statearr_28445_28510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (13))){
var inst_28430 = (state_28437[(2)]);
var state_28437__$1 = (function (){var statearr_28446 = state_28437;
(statearr_28446[(9)] = inst_28430);

return statearr_28446;
})();
var statearr_28447_28511 = state_28437__$1;
(statearr_28447_28511[(2)] = null);

(statearr_28447_28511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (6))){
var inst_28402 = (state_28437[(7)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28437__$1,(11),inst_28402);
} else {
if((state_val_28438 === (17))){
var inst_28423 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
if(cljs.core.truth_(inst_28423)){
var statearr_28448_28512 = state_28437__$1;
(statearr_28448_28512[(1)] = (19));

} else {
var statearr_28449_28513 = state_28437__$1;
(statearr_28449_28513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (3))){
var inst_28435 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28437__$1,inst_28435);
} else {
if((state_val_28438 === (12))){
var inst_28412 = (state_28437[(10)]);
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28437__$1,(14),inst_28412);
} else {
if((state_val_28438 === (2))){
var state_28437__$1 = state_28437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28437__$1,(4),results);
} else {
if((state_val_28438 === (19))){
var state_28437__$1 = state_28437;
var statearr_28450_28514 = state_28437__$1;
(statearr_28450_28514[(2)] = null);

(statearr_28450_28514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (11))){
var inst_28412 = (state_28437[(2)]);
var state_28437__$1 = (function (){var statearr_28451 = state_28437;
(statearr_28451[(10)] = inst_28412);

return statearr_28451;
})();
var statearr_28452_28515 = state_28437__$1;
(statearr_28452_28515[(2)] = null);

(statearr_28452_28515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (9))){
var state_28437__$1 = state_28437;
var statearr_28453_28516 = state_28437__$1;
(statearr_28453_28516[(2)] = null);

(statearr_28453_28516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (5))){
var state_28437__$1 = state_28437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28454_28517 = state_28437__$1;
(statearr_28454_28517[(1)] = (8));

} else {
var statearr_28455_28518 = state_28437__$1;
(statearr_28455_28518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (14))){
var inst_28417 = (state_28437[(11)]);
var inst_28415 = (state_28437[(8)]);
var inst_28415__$1 = (state_28437[(2)]);
var inst_28416 = (inst_28415__$1 == null);
var inst_28417__$1 = cljs.core.not.call(null,inst_28416);
var state_28437__$1 = (function (){var statearr_28456 = state_28437;
(statearr_28456[(11)] = inst_28417__$1);

(statearr_28456[(8)] = inst_28415__$1);

return statearr_28456;
})();
if(inst_28417__$1){
var statearr_28457_28519 = state_28437__$1;
(statearr_28457_28519[(1)] = (15));

} else {
var statearr_28458_28520 = state_28437__$1;
(statearr_28458_28520[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (16))){
var inst_28417 = (state_28437[(11)]);
var state_28437__$1 = state_28437;
var statearr_28459_28521 = state_28437__$1;
(statearr_28459_28521[(2)] = inst_28417);

(statearr_28459_28521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (10))){
var inst_28409 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28460_28522 = state_28437__$1;
(statearr_28460_28522[(2)] = inst_28409);

(statearr_28460_28522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (18))){
var inst_28420 = (state_28437[(2)]);
var state_28437__$1 = state_28437;
var statearr_28461_28523 = state_28437__$1;
(statearr_28461_28523[(2)] = inst_28420);

(statearr_28461_28523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28438 === (8))){
var inst_28406 = cljs.core.async.close_BANG_.call(null,to);
var state_28437__$1 = state_28437;
var statearr_28462_28524 = state_28437__$1;
(statearr_28462_28524[(2)] = inst_28406);

(statearr_28462_28524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto__,jobs,results,process,async))
;
return ((function (switch__20671__auto__,c__20692__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_28466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__);

(statearr_28466[(1)] = (1));

return statearr_28466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1 = (function (state_28437){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28467){if((e28467 instanceof Object)){
var ex__20675__auto__ = e28467;
var statearr_28468_28525 = state_28437;
(statearr_28468_28525[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28526 = state_28437;
state_28437 = G__28526;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__ = function(state_28437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1.call(this,state_28437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__,jobs,results,process,async))
})();
var state__20694__auto__ = (function (){var statearr_28469 = f__20693__auto__.call(null);
(statearr_28469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_28469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__,jobs,results,process,async))
);

return c__20692__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28527 = [];
var len__19486__auto___28530 = arguments.length;
var i__19487__auto___28531 = (0);
while(true){
if((i__19487__auto___28531 < len__19486__auto___28530)){
args28527.push((arguments[i__19487__auto___28531]));

var G__28532 = (i__19487__auto___28531 + (1));
i__19487__auto___28531 = G__28532;
continue;
} else {
}
break;
}

var G__28529 = args28527.length;
switch (G__28529) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28527.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28534 = [];
var len__19486__auto___28537 = arguments.length;
var i__19487__auto___28538 = (0);
while(true){
if((i__19487__auto___28538 < len__19486__auto___28537)){
args28534.push((arguments[i__19487__auto___28538]));

var G__28539 = (i__19487__auto___28538 + (1));
i__19487__auto___28538 = G__28539;
continue;
} else {
}
break;
}

var G__28536 = args28534.length;
switch (G__28536) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28534.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28541 = [];
var len__19486__auto___28594 = arguments.length;
var i__19487__auto___28595 = (0);
while(true){
if((i__19487__auto___28595 < len__19486__auto___28594)){
args28541.push((arguments[i__19487__auto___28595]));

var G__28596 = (i__19487__auto___28595 + (1));
i__19487__auto___28595 = G__28596;
continue;
} else {
}
break;
}

var G__28543 = args28541.length;
switch (G__28543) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28541.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20692__auto___28598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___28598,tc,fc){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___28598,tc,fc){
return (function (state_28569){
var state_val_28570 = (state_28569[(1)]);
if((state_val_28570 === (7))){
var inst_28565 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28571_28599 = state_28569__$1;
(statearr_28571_28599[(2)] = inst_28565);

(statearr_28571_28599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (1))){
var state_28569__$1 = state_28569;
var statearr_28572_28600 = state_28569__$1;
(statearr_28572_28600[(2)] = null);

(statearr_28572_28600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (4))){
var inst_28546 = (state_28569[(7)]);
var inst_28546__$1 = (state_28569[(2)]);
var inst_28547 = (inst_28546__$1 == null);
var state_28569__$1 = (function (){var statearr_28573 = state_28569;
(statearr_28573[(7)] = inst_28546__$1);

return statearr_28573;
})();
if(cljs.core.truth_(inst_28547)){
var statearr_28574_28601 = state_28569__$1;
(statearr_28574_28601[(1)] = (5));

} else {
var statearr_28575_28602 = state_28569__$1;
(statearr_28575_28602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (13))){
var state_28569__$1 = state_28569;
var statearr_28576_28603 = state_28569__$1;
(statearr_28576_28603[(2)] = null);

(statearr_28576_28603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (6))){
var inst_28546 = (state_28569[(7)]);
var inst_28552 = p.call(null,inst_28546);
var state_28569__$1 = state_28569;
if(cljs.core.truth_(inst_28552)){
var statearr_28577_28604 = state_28569__$1;
(statearr_28577_28604[(1)] = (9));

} else {
var statearr_28578_28605 = state_28569__$1;
(statearr_28578_28605[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (3))){
var inst_28567 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28569__$1,inst_28567);
} else {
if((state_val_28570 === (12))){
var state_28569__$1 = state_28569;
var statearr_28579_28606 = state_28569__$1;
(statearr_28579_28606[(2)] = null);

(statearr_28579_28606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (2))){
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28569__$1,(4),ch);
} else {
if((state_val_28570 === (11))){
var inst_28546 = (state_28569[(7)]);
var inst_28556 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28569__$1,(8),inst_28556,inst_28546);
} else {
if((state_val_28570 === (9))){
var state_28569__$1 = state_28569;
var statearr_28580_28607 = state_28569__$1;
(statearr_28580_28607[(2)] = tc);

(statearr_28580_28607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (5))){
var inst_28549 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28550 = cljs.core.async.close_BANG_.call(null,fc);
var state_28569__$1 = (function (){var statearr_28581 = state_28569;
(statearr_28581[(8)] = inst_28549);

return statearr_28581;
})();
var statearr_28582_28608 = state_28569__$1;
(statearr_28582_28608[(2)] = inst_28550);

(statearr_28582_28608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (14))){
var inst_28563 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28583_28609 = state_28569__$1;
(statearr_28583_28609[(2)] = inst_28563);

(statearr_28583_28609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (10))){
var state_28569__$1 = state_28569;
var statearr_28584_28610 = state_28569__$1;
(statearr_28584_28610[(2)] = fc);

(statearr_28584_28610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (8))){
var inst_28558 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
if(cljs.core.truth_(inst_28558)){
var statearr_28585_28611 = state_28569__$1;
(statearr_28585_28611[(1)] = (12));

} else {
var statearr_28586_28612 = state_28569__$1;
(statearr_28586_28612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___28598,tc,fc))
;
return ((function (switch__20671__auto__,c__20692__auto___28598,tc,fc){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_28590 = [null,null,null,null,null,null,null,null,null];
(statearr_28590[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_28590[(1)] = (1));

return statearr_28590;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_28569){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28591){if((e28591 instanceof Object)){
var ex__20675__auto__ = e28591;
var statearr_28592_28613 = state_28569;
(statearr_28592_28613[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28614 = state_28569;
state_28569 = G__28614;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_28569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_28569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___28598,tc,fc))
})();
var state__20694__auto__ = (function (){var statearr_28593 = f__20693__auto__.call(null);
(statearr_28593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___28598);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___28598,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__){
return (function (state_28678){
var state_val_28679 = (state_28678[(1)]);
if((state_val_28679 === (7))){
var inst_28674 = (state_28678[(2)]);
var state_28678__$1 = state_28678;
var statearr_28680_28701 = state_28678__$1;
(statearr_28680_28701[(2)] = inst_28674);

(statearr_28680_28701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (1))){
var inst_28658 = init;
var state_28678__$1 = (function (){var statearr_28681 = state_28678;
(statearr_28681[(7)] = inst_28658);

return statearr_28681;
})();
var statearr_28682_28702 = state_28678__$1;
(statearr_28682_28702[(2)] = null);

(statearr_28682_28702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (4))){
var inst_28661 = (state_28678[(8)]);
var inst_28661__$1 = (state_28678[(2)]);
var inst_28662 = (inst_28661__$1 == null);
var state_28678__$1 = (function (){var statearr_28683 = state_28678;
(statearr_28683[(8)] = inst_28661__$1);

return statearr_28683;
})();
if(cljs.core.truth_(inst_28662)){
var statearr_28684_28703 = state_28678__$1;
(statearr_28684_28703[(1)] = (5));

} else {
var statearr_28685_28704 = state_28678__$1;
(statearr_28685_28704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (6))){
var inst_28665 = (state_28678[(9)]);
var inst_28661 = (state_28678[(8)]);
var inst_28658 = (state_28678[(7)]);
var inst_28665__$1 = f.call(null,inst_28658,inst_28661);
var inst_28666 = cljs.core.reduced_QMARK_.call(null,inst_28665__$1);
var state_28678__$1 = (function (){var statearr_28686 = state_28678;
(statearr_28686[(9)] = inst_28665__$1);

return statearr_28686;
})();
if(inst_28666){
var statearr_28687_28705 = state_28678__$1;
(statearr_28687_28705[(1)] = (8));

} else {
var statearr_28688_28706 = state_28678__$1;
(statearr_28688_28706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (3))){
var inst_28676 = (state_28678[(2)]);
var state_28678__$1 = state_28678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28678__$1,inst_28676);
} else {
if((state_val_28679 === (2))){
var state_28678__$1 = state_28678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28678__$1,(4),ch);
} else {
if((state_val_28679 === (9))){
var inst_28665 = (state_28678[(9)]);
var inst_28658 = inst_28665;
var state_28678__$1 = (function (){var statearr_28689 = state_28678;
(statearr_28689[(7)] = inst_28658);

return statearr_28689;
})();
var statearr_28690_28707 = state_28678__$1;
(statearr_28690_28707[(2)] = null);

(statearr_28690_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (5))){
var inst_28658 = (state_28678[(7)]);
var state_28678__$1 = state_28678;
var statearr_28691_28708 = state_28678__$1;
(statearr_28691_28708[(2)] = inst_28658);

(statearr_28691_28708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (10))){
var inst_28672 = (state_28678[(2)]);
var state_28678__$1 = state_28678;
var statearr_28692_28709 = state_28678__$1;
(statearr_28692_28709[(2)] = inst_28672);

(statearr_28692_28709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28679 === (8))){
var inst_28665 = (state_28678[(9)]);
var inst_28668 = cljs.core.deref.call(null,inst_28665);
var state_28678__$1 = state_28678;
var statearr_28693_28710 = state_28678__$1;
(statearr_28693_28710[(2)] = inst_28668);

(statearr_28693_28710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto__))
;
return ((function (switch__20671__auto__,c__20692__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20672__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20672__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = cljs$core$async$reduce_$_state_machine__20672__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var cljs$core$async$reduce_$_state_machine__20672__auto____1 = (function (state_28678){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__20675__auto__ = e28698;
var statearr_28699_28711 = state_28678;
(statearr_28699_28711[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28712 = state_28678;
state_28678 = G__28712;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20672__auto__ = function(state_28678){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20672__auto____1.call(this,state_28678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20672__auto____0;
cljs$core$async$reduce_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20672__auto____1;
return cljs$core$async$reduce_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__))
})();
var state__20694__auto__ = (function (){var statearr_28700 = f__20693__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__))
);

return c__20692__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28713 = [];
var len__19486__auto___28765 = arguments.length;
var i__19487__auto___28766 = (0);
while(true){
if((i__19487__auto___28766 < len__19486__auto___28765)){
args28713.push((arguments[i__19487__auto___28766]));

var G__28767 = (i__19487__auto___28766 + (1));
i__19487__auto___28766 = G__28767;
continue;
} else {
}
break;
}

var G__28715 = args28713.length;
switch (G__28715) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28713.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__){
return (function (state_28740){
var state_val_28741 = (state_28740[(1)]);
if((state_val_28741 === (7))){
var inst_28722 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
var statearr_28742_28769 = state_28740__$1;
(statearr_28742_28769[(2)] = inst_28722);

(statearr_28742_28769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (1))){
var inst_28716 = cljs.core.seq.call(null,coll);
var inst_28717 = inst_28716;
var state_28740__$1 = (function (){var statearr_28743 = state_28740;
(statearr_28743[(7)] = inst_28717);

return statearr_28743;
})();
var statearr_28744_28770 = state_28740__$1;
(statearr_28744_28770[(2)] = null);

(statearr_28744_28770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (4))){
var inst_28717 = (state_28740[(7)]);
var inst_28720 = cljs.core.first.call(null,inst_28717);
var state_28740__$1 = state_28740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28740__$1,(7),ch,inst_28720);
} else {
if((state_val_28741 === (13))){
var inst_28734 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
var statearr_28745_28771 = state_28740__$1;
(statearr_28745_28771[(2)] = inst_28734);

(statearr_28745_28771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (6))){
var inst_28725 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
if(cljs.core.truth_(inst_28725)){
var statearr_28746_28772 = state_28740__$1;
(statearr_28746_28772[(1)] = (8));

} else {
var statearr_28747_28773 = state_28740__$1;
(statearr_28747_28773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (3))){
var inst_28738 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28740__$1,inst_28738);
} else {
if((state_val_28741 === (12))){
var state_28740__$1 = state_28740;
var statearr_28748_28774 = state_28740__$1;
(statearr_28748_28774[(2)] = null);

(statearr_28748_28774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (2))){
var inst_28717 = (state_28740[(7)]);
var state_28740__$1 = state_28740;
if(cljs.core.truth_(inst_28717)){
var statearr_28749_28775 = state_28740__$1;
(statearr_28749_28775[(1)] = (4));

} else {
var statearr_28750_28776 = state_28740__$1;
(statearr_28750_28776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (11))){
var inst_28731 = cljs.core.async.close_BANG_.call(null,ch);
var state_28740__$1 = state_28740;
var statearr_28751_28777 = state_28740__$1;
(statearr_28751_28777[(2)] = inst_28731);

(statearr_28751_28777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (9))){
var state_28740__$1 = state_28740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28752_28778 = state_28740__$1;
(statearr_28752_28778[(1)] = (11));

} else {
var statearr_28753_28779 = state_28740__$1;
(statearr_28753_28779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (5))){
var inst_28717 = (state_28740[(7)]);
var state_28740__$1 = state_28740;
var statearr_28754_28780 = state_28740__$1;
(statearr_28754_28780[(2)] = inst_28717);

(statearr_28754_28780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (10))){
var inst_28736 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
var statearr_28755_28781 = state_28740__$1;
(statearr_28755_28781[(2)] = inst_28736);

(statearr_28755_28781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (8))){
var inst_28717 = (state_28740[(7)]);
var inst_28727 = cljs.core.next.call(null,inst_28717);
var inst_28717__$1 = inst_28727;
var state_28740__$1 = (function (){var statearr_28756 = state_28740;
(statearr_28756[(7)] = inst_28717__$1);

return statearr_28756;
})();
var statearr_28757_28782 = state_28740__$1;
(statearr_28757_28782[(2)] = null);

(statearr_28757_28782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto__))
;
return ((function (switch__20671__auto__,c__20692__auto__){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_28761 = [null,null,null,null,null,null,null,null];
(statearr_28761[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_28761[(1)] = (1));

return statearr_28761;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_28740){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_28740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e28762){if((e28762 instanceof Object)){
var ex__20675__auto__ = e28762;
var statearr_28763_28783 = state_28740;
(statearr_28763_28783[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28784 = state_28740;
state_28740 = G__28784;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_28740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_28740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__))
})();
var state__20694__auto__ = (function (){var statearr_28764 = f__20693__auto__.call(null);
(statearr_28764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_28764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__))
);

return c__20692__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19083__auto__ = (((_ == null))?null:_);
var m__19084__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,_);
} else {
var m__19084__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19084__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,ch);
} else {
var m__19084__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m);
} else {
var m__19084__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29006 = (function (mult,ch,cs,meta29007){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29007 = meta29007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29008,meta29007__$1){
var self__ = this;
var _29008__$1 = this;
return (new cljs.core.async.t_cljs$core$async29006(self__.mult,self__.ch,self__.cs,meta29007__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29008){
var self__ = this;
var _29008__$1 = this;
return self__.meta29007;
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29007","meta29007",-1089354291,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29006";

cljs.core.async.t_cljs$core$async29006.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async29006");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29006 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29006(mult__$1,ch__$1,cs__$1,meta29007){
return (new cljs.core.async.t_cljs$core$async29006(mult__$1,ch__$1,cs__$1,meta29007));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29006(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20692__auto___29227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___29227,cs,m,dchan,dctr,done){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___29227,cs,m,dchan,dctr,done){
return (function (state_29139){
var state_val_29140 = (state_29139[(1)]);
if((state_val_29140 === (7))){
var inst_29135 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29141_29228 = state_29139__$1;
(statearr_29141_29228[(2)] = inst_29135);

(statearr_29141_29228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (20))){
var inst_29040 = (state_29139[(7)]);
var inst_29050 = cljs.core.first.call(null,inst_29040);
var inst_29051 = cljs.core.nth.call(null,inst_29050,(0),null);
var inst_29052 = cljs.core.nth.call(null,inst_29050,(1),null);
var state_29139__$1 = (function (){var statearr_29142 = state_29139;
(statearr_29142[(8)] = inst_29051);

return statearr_29142;
})();
if(cljs.core.truth_(inst_29052)){
var statearr_29143_29229 = state_29139__$1;
(statearr_29143_29229[(1)] = (22));

} else {
var statearr_29144_29230 = state_29139__$1;
(statearr_29144_29230[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (27))){
var inst_29082 = (state_29139[(9)]);
var inst_29080 = (state_29139[(10)]);
var inst_29087 = (state_29139[(11)]);
var inst_29011 = (state_29139[(12)]);
var inst_29087__$1 = cljs.core._nth.call(null,inst_29080,inst_29082);
var inst_29088 = cljs.core.async.put_BANG_.call(null,inst_29087__$1,inst_29011,done);
var state_29139__$1 = (function (){var statearr_29145 = state_29139;
(statearr_29145[(11)] = inst_29087__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29088)){
var statearr_29146_29231 = state_29139__$1;
(statearr_29146_29231[(1)] = (30));

} else {
var statearr_29147_29232 = state_29139__$1;
(statearr_29147_29232[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (1))){
var state_29139__$1 = state_29139;
var statearr_29148_29233 = state_29139__$1;
(statearr_29148_29233[(2)] = null);

(statearr_29148_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (24))){
var inst_29040 = (state_29139[(7)]);
var inst_29057 = (state_29139[(2)]);
var inst_29058 = cljs.core.next.call(null,inst_29040);
var inst_29020 = inst_29058;
var inst_29021 = null;
var inst_29022 = (0);
var inst_29023 = (0);
var state_29139__$1 = (function (){var statearr_29149 = state_29139;
(statearr_29149[(13)] = inst_29021);

(statearr_29149[(14)] = inst_29022);

(statearr_29149[(15)] = inst_29057);

(statearr_29149[(16)] = inst_29023);

(statearr_29149[(17)] = inst_29020);

return statearr_29149;
})();
var statearr_29150_29234 = state_29139__$1;
(statearr_29150_29234[(2)] = null);

(statearr_29150_29234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (39))){
var state_29139__$1 = state_29139;
var statearr_29154_29235 = state_29139__$1;
(statearr_29154_29235[(2)] = null);

(statearr_29154_29235[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (4))){
var inst_29011 = (state_29139[(12)]);
var inst_29011__$1 = (state_29139[(2)]);
var inst_29012 = (inst_29011__$1 == null);
var state_29139__$1 = (function (){var statearr_29155 = state_29139;
(statearr_29155[(12)] = inst_29011__$1);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29012)){
var statearr_29156_29236 = state_29139__$1;
(statearr_29156_29236[(1)] = (5));

} else {
var statearr_29157_29237 = state_29139__$1;
(statearr_29157_29237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (15))){
var inst_29021 = (state_29139[(13)]);
var inst_29022 = (state_29139[(14)]);
var inst_29023 = (state_29139[(16)]);
var inst_29020 = (state_29139[(17)]);
var inst_29036 = (state_29139[(2)]);
var inst_29037 = (inst_29023 + (1));
var tmp29151 = inst_29021;
var tmp29152 = inst_29022;
var tmp29153 = inst_29020;
var inst_29020__$1 = tmp29153;
var inst_29021__$1 = tmp29151;
var inst_29022__$1 = tmp29152;
var inst_29023__$1 = inst_29037;
var state_29139__$1 = (function (){var statearr_29158 = state_29139;
(statearr_29158[(13)] = inst_29021__$1);

(statearr_29158[(14)] = inst_29022__$1);

(statearr_29158[(16)] = inst_29023__$1);

(statearr_29158[(17)] = inst_29020__$1);

(statearr_29158[(18)] = inst_29036);

return statearr_29158;
})();
var statearr_29159_29238 = state_29139__$1;
(statearr_29159_29238[(2)] = null);

(statearr_29159_29238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (21))){
var inst_29061 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29163_29239 = state_29139__$1;
(statearr_29163_29239[(2)] = inst_29061);

(statearr_29163_29239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (31))){
var inst_29087 = (state_29139[(11)]);
var inst_29091 = done.call(null,null);
var inst_29092 = cljs.core.async.untap_STAR_.call(null,m,inst_29087);
var state_29139__$1 = (function (){var statearr_29164 = state_29139;
(statearr_29164[(19)] = inst_29091);

return statearr_29164;
})();
var statearr_29165_29240 = state_29139__$1;
(statearr_29165_29240[(2)] = inst_29092);

(statearr_29165_29240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (32))){
var inst_29082 = (state_29139[(9)]);
var inst_29080 = (state_29139[(10)]);
var inst_29081 = (state_29139[(20)]);
var inst_29079 = (state_29139[(21)]);
var inst_29094 = (state_29139[(2)]);
var inst_29095 = (inst_29082 + (1));
var tmp29160 = inst_29080;
var tmp29161 = inst_29081;
var tmp29162 = inst_29079;
var inst_29079__$1 = tmp29162;
var inst_29080__$1 = tmp29160;
var inst_29081__$1 = tmp29161;
var inst_29082__$1 = inst_29095;
var state_29139__$1 = (function (){var statearr_29166 = state_29139;
(statearr_29166[(22)] = inst_29094);

(statearr_29166[(9)] = inst_29082__$1);

(statearr_29166[(10)] = inst_29080__$1);

(statearr_29166[(20)] = inst_29081__$1);

(statearr_29166[(21)] = inst_29079__$1);

return statearr_29166;
})();
var statearr_29167_29241 = state_29139__$1;
(statearr_29167_29241[(2)] = null);

(statearr_29167_29241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (40))){
var inst_29107 = (state_29139[(23)]);
var inst_29111 = done.call(null,null);
var inst_29112 = cljs.core.async.untap_STAR_.call(null,m,inst_29107);
var state_29139__$1 = (function (){var statearr_29168 = state_29139;
(statearr_29168[(24)] = inst_29111);

return statearr_29168;
})();
var statearr_29169_29242 = state_29139__$1;
(statearr_29169_29242[(2)] = inst_29112);

(statearr_29169_29242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (33))){
var inst_29098 = (state_29139[(25)]);
var inst_29100 = cljs.core.chunked_seq_QMARK_.call(null,inst_29098);
var state_29139__$1 = state_29139;
if(inst_29100){
var statearr_29170_29243 = state_29139__$1;
(statearr_29170_29243[(1)] = (36));

} else {
var statearr_29171_29244 = state_29139__$1;
(statearr_29171_29244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (13))){
var inst_29030 = (state_29139[(26)]);
var inst_29033 = cljs.core.async.close_BANG_.call(null,inst_29030);
var state_29139__$1 = state_29139;
var statearr_29172_29245 = state_29139__$1;
(statearr_29172_29245[(2)] = inst_29033);

(statearr_29172_29245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (22))){
var inst_29051 = (state_29139[(8)]);
var inst_29054 = cljs.core.async.close_BANG_.call(null,inst_29051);
var state_29139__$1 = state_29139;
var statearr_29173_29246 = state_29139__$1;
(statearr_29173_29246[(2)] = inst_29054);

(statearr_29173_29246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (36))){
var inst_29098 = (state_29139[(25)]);
var inst_29102 = cljs.core.chunk_first.call(null,inst_29098);
var inst_29103 = cljs.core.chunk_rest.call(null,inst_29098);
var inst_29104 = cljs.core.count.call(null,inst_29102);
var inst_29079 = inst_29103;
var inst_29080 = inst_29102;
var inst_29081 = inst_29104;
var inst_29082 = (0);
var state_29139__$1 = (function (){var statearr_29174 = state_29139;
(statearr_29174[(9)] = inst_29082);

(statearr_29174[(10)] = inst_29080);

(statearr_29174[(20)] = inst_29081);

(statearr_29174[(21)] = inst_29079);

return statearr_29174;
})();
var statearr_29175_29247 = state_29139__$1;
(statearr_29175_29247[(2)] = null);

(statearr_29175_29247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (41))){
var inst_29098 = (state_29139[(25)]);
var inst_29114 = (state_29139[(2)]);
var inst_29115 = cljs.core.next.call(null,inst_29098);
var inst_29079 = inst_29115;
var inst_29080 = null;
var inst_29081 = (0);
var inst_29082 = (0);
var state_29139__$1 = (function (){var statearr_29176 = state_29139;
(statearr_29176[(9)] = inst_29082);

(statearr_29176[(10)] = inst_29080);

(statearr_29176[(20)] = inst_29081);

(statearr_29176[(27)] = inst_29114);

(statearr_29176[(21)] = inst_29079);

return statearr_29176;
})();
var statearr_29177_29248 = state_29139__$1;
(statearr_29177_29248[(2)] = null);

(statearr_29177_29248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (43))){
var state_29139__$1 = state_29139;
var statearr_29178_29249 = state_29139__$1;
(statearr_29178_29249[(2)] = null);

(statearr_29178_29249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (29))){
var inst_29123 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29179_29250 = state_29139__$1;
(statearr_29179_29250[(2)] = inst_29123);

(statearr_29179_29250[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (44))){
var inst_29132 = (state_29139[(2)]);
var state_29139__$1 = (function (){var statearr_29180 = state_29139;
(statearr_29180[(28)] = inst_29132);

return statearr_29180;
})();
var statearr_29181_29251 = state_29139__$1;
(statearr_29181_29251[(2)] = null);

(statearr_29181_29251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (6))){
var inst_29071 = (state_29139[(29)]);
var inst_29070 = cljs.core.deref.call(null,cs);
var inst_29071__$1 = cljs.core.keys.call(null,inst_29070);
var inst_29072 = cljs.core.count.call(null,inst_29071__$1);
var inst_29073 = cljs.core.reset_BANG_.call(null,dctr,inst_29072);
var inst_29078 = cljs.core.seq.call(null,inst_29071__$1);
var inst_29079 = inst_29078;
var inst_29080 = null;
var inst_29081 = (0);
var inst_29082 = (0);
var state_29139__$1 = (function (){var statearr_29182 = state_29139;
(statearr_29182[(9)] = inst_29082);

(statearr_29182[(10)] = inst_29080);

(statearr_29182[(20)] = inst_29081);

(statearr_29182[(29)] = inst_29071__$1);

(statearr_29182[(30)] = inst_29073);

(statearr_29182[(21)] = inst_29079);

return statearr_29182;
})();
var statearr_29183_29252 = state_29139__$1;
(statearr_29183_29252[(2)] = null);

(statearr_29183_29252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (28))){
var inst_29098 = (state_29139[(25)]);
var inst_29079 = (state_29139[(21)]);
var inst_29098__$1 = cljs.core.seq.call(null,inst_29079);
var state_29139__$1 = (function (){var statearr_29184 = state_29139;
(statearr_29184[(25)] = inst_29098__$1);

return statearr_29184;
})();
if(inst_29098__$1){
var statearr_29185_29253 = state_29139__$1;
(statearr_29185_29253[(1)] = (33));

} else {
var statearr_29186_29254 = state_29139__$1;
(statearr_29186_29254[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (25))){
var inst_29082 = (state_29139[(9)]);
var inst_29081 = (state_29139[(20)]);
var inst_29084 = (inst_29082 < inst_29081);
var inst_29085 = inst_29084;
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29085)){
var statearr_29187_29255 = state_29139__$1;
(statearr_29187_29255[(1)] = (27));

} else {
var statearr_29188_29256 = state_29139__$1;
(statearr_29188_29256[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (34))){
var state_29139__$1 = state_29139;
var statearr_29189_29257 = state_29139__$1;
(statearr_29189_29257[(2)] = null);

(statearr_29189_29257[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (17))){
var state_29139__$1 = state_29139;
var statearr_29190_29258 = state_29139__$1;
(statearr_29190_29258[(2)] = null);

(statearr_29190_29258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (3))){
var inst_29137 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29139__$1,inst_29137);
} else {
if((state_val_29140 === (12))){
var inst_29066 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29191_29259 = state_29139__$1;
(statearr_29191_29259[(2)] = inst_29066);

(statearr_29191_29259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (2))){
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29139__$1,(4),ch);
} else {
if((state_val_29140 === (23))){
var state_29139__$1 = state_29139;
var statearr_29192_29260 = state_29139__$1;
(statearr_29192_29260[(2)] = null);

(statearr_29192_29260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (35))){
var inst_29121 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29193_29261 = state_29139__$1;
(statearr_29193_29261[(2)] = inst_29121);

(statearr_29193_29261[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (19))){
var inst_29040 = (state_29139[(7)]);
var inst_29044 = cljs.core.chunk_first.call(null,inst_29040);
var inst_29045 = cljs.core.chunk_rest.call(null,inst_29040);
var inst_29046 = cljs.core.count.call(null,inst_29044);
var inst_29020 = inst_29045;
var inst_29021 = inst_29044;
var inst_29022 = inst_29046;
var inst_29023 = (0);
var state_29139__$1 = (function (){var statearr_29194 = state_29139;
(statearr_29194[(13)] = inst_29021);

(statearr_29194[(14)] = inst_29022);

(statearr_29194[(16)] = inst_29023);

(statearr_29194[(17)] = inst_29020);

return statearr_29194;
})();
var statearr_29195_29262 = state_29139__$1;
(statearr_29195_29262[(2)] = null);

(statearr_29195_29262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (11))){
var inst_29040 = (state_29139[(7)]);
var inst_29020 = (state_29139[(17)]);
var inst_29040__$1 = cljs.core.seq.call(null,inst_29020);
var state_29139__$1 = (function (){var statearr_29196 = state_29139;
(statearr_29196[(7)] = inst_29040__$1);

return statearr_29196;
})();
if(inst_29040__$1){
var statearr_29197_29263 = state_29139__$1;
(statearr_29197_29263[(1)] = (16));

} else {
var statearr_29198_29264 = state_29139__$1;
(statearr_29198_29264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (9))){
var inst_29068 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29199_29265 = state_29139__$1;
(statearr_29199_29265[(2)] = inst_29068);

(statearr_29199_29265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (5))){
var inst_29018 = cljs.core.deref.call(null,cs);
var inst_29019 = cljs.core.seq.call(null,inst_29018);
var inst_29020 = inst_29019;
var inst_29021 = null;
var inst_29022 = (0);
var inst_29023 = (0);
var state_29139__$1 = (function (){var statearr_29200 = state_29139;
(statearr_29200[(13)] = inst_29021);

(statearr_29200[(14)] = inst_29022);

(statearr_29200[(16)] = inst_29023);

(statearr_29200[(17)] = inst_29020);

return statearr_29200;
})();
var statearr_29201_29266 = state_29139__$1;
(statearr_29201_29266[(2)] = null);

(statearr_29201_29266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (14))){
var state_29139__$1 = state_29139;
var statearr_29202_29267 = state_29139__$1;
(statearr_29202_29267[(2)] = null);

(statearr_29202_29267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (45))){
var inst_29129 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29203_29268 = state_29139__$1;
(statearr_29203_29268[(2)] = inst_29129);

(statearr_29203_29268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (26))){
var inst_29071 = (state_29139[(29)]);
var inst_29125 = (state_29139[(2)]);
var inst_29126 = cljs.core.seq.call(null,inst_29071);
var state_29139__$1 = (function (){var statearr_29204 = state_29139;
(statearr_29204[(31)] = inst_29125);

return statearr_29204;
})();
if(inst_29126){
var statearr_29205_29269 = state_29139__$1;
(statearr_29205_29269[(1)] = (42));

} else {
var statearr_29206_29270 = state_29139__$1;
(statearr_29206_29270[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (16))){
var inst_29040 = (state_29139[(7)]);
var inst_29042 = cljs.core.chunked_seq_QMARK_.call(null,inst_29040);
var state_29139__$1 = state_29139;
if(inst_29042){
var statearr_29207_29271 = state_29139__$1;
(statearr_29207_29271[(1)] = (19));

} else {
var statearr_29208_29272 = state_29139__$1;
(statearr_29208_29272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (38))){
var inst_29118 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29209_29273 = state_29139__$1;
(statearr_29209_29273[(2)] = inst_29118);

(statearr_29209_29273[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (30))){
var state_29139__$1 = state_29139;
var statearr_29210_29274 = state_29139__$1;
(statearr_29210_29274[(2)] = null);

(statearr_29210_29274[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (10))){
var inst_29021 = (state_29139[(13)]);
var inst_29023 = (state_29139[(16)]);
var inst_29029 = cljs.core._nth.call(null,inst_29021,inst_29023);
var inst_29030 = cljs.core.nth.call(null,inst_29029,(0),null);
var inst_29031 = cljs.core.nth.call(null,inst_29029,(1),null);
var state_29139__$1 = (function (){var statearr_29211 = state_29139;
(statearr_29211[(26)] = inst_29030);

return statearr_29211;
})();
if(cljs.core.truth_(inst_29031)){
var statearr_29212_29275 = state_29139__$1;
(statearr_29212_29275[(1)] = (13));

} else {
var statearr_29213_29276 = state_29139__$1;
(statearr_29213_29276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (18))){
var inst_29064 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29214_29277 = state_29139__$1;
(statearr_29214_29277[(2)] = inst_29064);

(statearr_29214_29277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (42))){
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29139__$1,(45),dchan);
} else {
if((state_val_29140 === (37))){
var inst_29107 = (state_29139[(23)]);
var inst_29098 = (state_29139[(25)]);
var inst_29011 = (state_29139[(12)]);
var inst_29107__$1 = cljs.core.first.call(null,inst_29098);
var inst_29108 = cljs.core.async.put_BANG_.call(null,inst_29107__$1,inst_29011,done);
var state_29139__$1 = (function (){var statearr_29215 = state_29139;
(statearr_29215[(23)] = inst_29107__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29108)){
var statearr_29216_29278 = state_29139__$1;
(statearr_29216_29278[(1)] = (39));

} else {
var statearr_29217_29279 = state_29139__$1;
(statearr_29217_29279[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (8))){
var inst_29022 = (state_29139[(14)]);
var inst_29023 = (state_29139[(16)]);
var inst_29025 = (inst_29023 < inst_29022);
var inst_29026 = inst_29025;
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29026)){
var statearr_29218_29280 = state_29139__$1;
(statearr_29218_29280[(1)] = (10));

} else {
var statearr_29219_29281 = state_29139__$1;
(statearr_29219_29281[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___29227,cs,m,dchan,dctr,done))
;
return ((function (switch__20671__auto__,c__20692__auto___29227,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20672__auto__ = null;
var cljs$core$async$mult_$_state_machine__20672__auto____0 = (function (){
var statearr_29223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29223[(0)] = cljs$core$async$mult_$_state_machine__20672__auto__);

(statearr_29223[(1)] = (1));

return statearr_29223;
});
var cljs$core$async$mult_$_state_machine__20672__auto____1 = (function (state_29139){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_29139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e29224){if((e29224 instanceof Object)){
var ex__20675__auto__ = e29224;
var statearr_29225_29282 = state_29139;
(statearr_29225_29282[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29283 = state_29139;
state_29139 = G__29283;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20672__auto__ = function(state_29139){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20672__auto____1.call(this,state_29139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20672__auto____0;
cljs$core$async$mult_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20672__auto____1;
return cljs$core$async$mult_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___29227,cs,m,dchan,dctr,done))
})();
var state__20694__auto__ = (function (){var statearr_29226 = f__20693__auto__.call(null);
(statearr_29226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___29227);

return statearr_29226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___29227,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29284 = [];
var len__19486__auto___29287 = arguments.length;
var i__19487__auto___29288 = (0);
while(true){
if((i__19487__auto___29288 < len__19486__auto___29287)){
args29284.push((arguments[i__19487__auto___29288]));

var G__29289 = (i__19487__auto___29288 + (1));
i__19487__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var G__29286 = args29284.length;
switch (G__29286) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29284.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,ch);
} else {
var m__19084__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,ch);
} else {
var m__19084__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m);
} else {
var m__19084__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,state_map);
} else {
var m__19084__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19083__auto__ = (((m == null))?null:m);
var m__19084__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,m,mode);
} else {
var m__19084__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19493__auto__ = [];
var len__19486__auto___29301 = arguments.length;
var i__19487__auto___29302 = (0);
while(true){
if((i__19487__auto___29302 < len__19486__auto___29301)){
args__19493__auto__.push((arguments[i__19487__auto___29302]));

var G__29303 = (i__19487__auto___29302 + (1));
i__19487__auto___29302 = G__29303;
continue;
} else {
}
break;
}

var argseq__19494__auto__ = ((((3) < args__19493__auto__.length))?(new cljs.core.IndexedSeq(args__19493__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19494__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29295){
var map__29296 = p__29295;
var map__29296__$1 = ((((!((map__29296 == null)))?((((map__29296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29296):map__29296);
var opts = map__29296__$1;
var statearr_29298_29304 = state;
(statearr_29298_29304[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29296,map__29296__$1,opts){
return (function (val){
var statearr_29299_29305 = state;
(statearr_29299_29305[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29296,map__29296__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29300_29306 = state;
(statearr_29300_29306[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29291){
var G__29292 = cljs.core.first.call(null,seq29291);
var seq29291__$1 = cljs.core.next.call(null,seq29291);
var G__29293 = cljs.core.first.call(null,seq29291__$1);
var seq29291__$2 = cljs.core.next.call(null,seq29291__$1);
var G__29294 = cljs.core.first.call(null,seq29291__$2);
var seq29291__$3 = cljs.core.next.call(null,seq29291__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29292,G__29293,G__29294,seq29291__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29470 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29471){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29471 = meta29471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29472,meta29471__$1){
var self__ = this;
var _29472__$1 = this;
return (new cljs.core.async.t_cljs$core$async29470(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29471__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29472){
var self__ = this;
var _29472__$1 = this;
return self__.meta29471;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29471","meta29471",-440277358,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29470";

cljs.core.async.t_cljs$core$async29470.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async29470");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29470 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29470(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29471){
return (new cljs.core.async.t_cljs$core$async29470(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29471));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29470(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20692__auto___29633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (7))){
var inst_29488 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29572_29634 = state_29570__$1;
(statearr_29572_29634[(2)] = inst_29488);

(statearr_29572_29634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (20))){
var inst_29500 = (state_29570[(7)]);
var state_29570__$1 = state_29570;
var statearr_29573_29635 = state_29570__$1;
(statearr_29573_29635[(2)] = inst_29500);

(statearr_29573_29635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (27))){
var state_29570__$1 = state_29570;
var statearr_29574_29636 = state_29570__$1;
(statearr_29574_29636[(2)] = null);

(statearr_29574_29636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (1))){
var inst_29476 = (state_29570[(8)]);
var inst_29476__$1 = calc_state.call(null);
var inst_29478 = (inst_29476__$1 == null);
var inst_29479 = cljs.core.not.call(null,inst_29478);
var state_29570__$1 = (function (){var statearr_29575 = state_29570;
(statearr_29575[(8)] = inst_29476__$1);

return statearr_29575;
})();
if(inst_29479){
var statearr_29576_29637 = state_29570__$1;
(statearr_29576_29637[(1)] = (2));

} else {
var statearr_29577_29638 = state_29570__$1;
(statearr_29577_29638[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (24))){
var inst_29530 = (state_29570[(9)]);
var inst_29544 = (state_29570[(10)]);
var inst_29523 = (state_29570[(11)]);
var inst_29544__$1 = inst_29523.call(null,inst_29530);
var state_29570__$1 = (function (){var statearr_29578 = state_29570;
(statearr_29578[(10)] = inst_29544__$1);

return statearr_29578;
})();
if(cljs.core.truth_(inst_29544__$1)){
var statearr_29579_29639 = state_29570__$1;
(statearr_29579_29639[(1)] = (29));

} else {
var statearr_29580_29640 = state_29570__$1;
(statearr_29580_29640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (4))){
var inst_29491 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29491)){
var statearr_29581_29641 = state_29570__$1;
(statearr_29581_29641[(1)] = (8));

} else {
var statearr_29582_29642 = state_29570__$1;
(statearr_29582_29642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (15))){
var inst_29517 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29517)){
var statearr_29583_29643 = state_29570__$1;
(statearr_29583_29643[(1)] = (19));

} else {
var statearr_29584_29644 = state_29570__$1;
(statearr_29584_29644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (21))){
var inst_29522 = (state_29570[(12)]);
var inst_29522__$1 = (state_29570[(2)]);
var inst_29523 = cljs.core.get.call(null,inst_29522__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29524 = cljs.core.get.call(null,inst_29522__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29525 = cljs.core.get.call(null,inst_29522__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29570__$1 = (function (){var statearr_29585 = state_29570;
(statearr_29585[(13)] = inst_29524);

(statearr_29585[(12)] = inst_29522__$1);

(statearr_29585[(11)] = inst_29523);

return statearr_29585;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29570__$1,(22),inst_29525);
} else {
if((state_val_29571 === (31))){
var inst_29552 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29552)){
var statearr_29586_29645 = state_29570__$1;
(statearr_29586_29645[(1)] = (32));

} else {
var statearr_29587_29646 = state_29570__$1;
(statearr_29587_29646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (32))){
var inst_29529 = (state_29570[(14)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29570__$1,(35),out,inst_29529);
} else {
if((state_val_29571 === (33))){
var inst_29522 = (state_29570[(12)]);
var inst_29500 = inst_29522;
var state_29570__$1 = (function (){var statearr_29588 = state_29570;
(statearr_29588[(7)] = inst_29500);

return statearr_29588;
})();
var statearr_29589_29647 = state_29570__$1;
(statearr_29589_29647[(2)] = null);

(statearr_29589_29647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (13))){
var inst_29500 = (state_29570[(7)]);
var inst_29507 = inst_29500.cljs$lang$protocol_mask$partition0$;
var inst_29508 = (inst_29507 & (64));
var inst_29509 = inst_29500.cljs$core$ISeq$;
var inst_29510 = (inst_29508) || (inst_29509);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29510)){
var statearr_29590_29648 = state_29570__$1;
(statearr_29590_29648[(1)] = (16));

} else {
var statearr_29591_29649 = state_29570__$1;
(statearr_29591_29649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (22))){
var inst_29530 = (state_29570[(9)]);
var inst_29529 = (state_29570[(14)]);
var inst_29528 = (state_29570[(2)]);
var inst_29529__$1 = cljs.core.nth.call(null,inst_29528,(0),null);
var inst_29530__$1 = cljs.core.nth.call(null,inst_29528,(1),null);
var inst_29531 = (inst_29529__$1 == null);
var inst_29532 = cljs.core._EQ_.call(null,inst_29530__$1,change);
var inst_29533 = (inst_29531) || (inst_29532);
var state_29570__$1 = (function (){var statearr_29592 = state_29570;
(statearr_29592[(9)] = inst_29530__$1);

(statearr_29592[(14)] = inst_29529__$1);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29533)){
var statearr_29593_29650 = state_29570__$1;
(statearr_29593_29650[(1)] = (23));

} else {
var statearr_29594_29651 = state_29570__$1;
(statearr_29594_29651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (36))){
var inst_29522 = (state_29570[(12)]);
var inst_29500 = inst_29522;
var state_29570__$1 = (function (){var statearr_29595 = state_29570;
(statearr_29595[(7)] = inst_29500);

return statearr_29595;
})();
var statearr_29596_29652 = state_29570__$1;
(statearr_29596_29652[(2)] = null);

(statearr_29596_29652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (29))){
var inst_29544 = (state_29570[(10)]);
var state_29570__$1 = state_29570;
var statearr_29597_29653 = state_29570__$1;
(statearr_29597_29653[(2)] = inst_29544);

(statearr_29597_29653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (6))){
var state_29570__$1 = state_29570;
var statearr_29598_29654 = state_29570__$1;
(statearr_29598_29654[(2)] = false);

(statearr_29598_29654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (28))){
var inst_29540 = (state_29570[(2)]);
var inst_29541 = calc_state.call(null);
var inst_29500 = inst_29541;
var state_29570__$1 = (function (){var statearr_29599 = state_29570;
(statearr_29599[(7)] = inst_29500);

(statearr_29599[(15)] = inst_29540);

return statearr_29599;
})();
var statearr_29600_29655 = state_29570__$1;
(statearr_29600_29655[(2)] = null);

(statearr_29600_29655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (25))){
var inst_29566 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29601_29656 = state_29570__$1;
(statearr_29601_29656[(2)] = inst_29566);

(statearr_29601_29656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (34))){
var inst_29564 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29602_29657 = state_29570__$1;
(statearr_29602_29657[(2)] = inst_29564);

(statearr_29602_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (17))){
var state_29570__$1 = state_29570;
var statearr_29603_29658 = state_29570__$1;
(statearr_29603_29658[(2)] = false);

(statearr_29603_29658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (3))){
var state_29570__$1 = state_29570;
var statearr_29604_29659 = state_29570__$1;
(statearr_29604_29659[(2)] = false);

(statearr_29604_29659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (12))){
var inst_29568 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
if((state_val_29571 === (2))){
var inst_29476 = (state_29570[(8)]);
var inst_29481 = inst_29476.cljs$lang$protocol_mask$partition0$;
var inst_29482 = (inst_29481 & (64));
var inst_29483 = inst_29476.cljs$core$ISeq$;
var inst_29484 = (inst_29482) || (inst_29483);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29484)){
var statearr_29605_29660 = state_29570__$1;
(statearr_29605_29660[(1)] = (5));

} else {
var statearr_29606_29661 = state_29570__$1;
(statearr_29606_29661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (23))){
var inst_29529 = (state_29570[(14)]);
var inst_29535 = (inst_29529 == null);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29535)){
var statearr_29607_29662 = state_29570__$1;
(statearr_29607_29662[(1)] = (26));

} else {
var statearr_29608_29663 = state_29570__$1;
(statearr_29608_29663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (35))){
var inst_29555 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29555)){
var statearr_29609_29664 = state_29570__$1;
(statearr_29609_29664[(1)] = (36));

} else {
var statearr_29610_29665 = state_29570__$1;
(statearr_29610_29665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (19))){
var inst_29500 = (state_29570[(7)]);
var inst_29519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29500);
var state_29570__$1 = state_29570;
var statearr_29611_29666 = state_29570__$1;
(statearr_29611_29666[(2)] = inst_29519);

(statearr_29611_29666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (11))){
var inst_29500 = (state_29570[(7)]);
var inst_29504 = (inst_29500 == null);
var inst_29505 = cljs.core.not.call(null,inst_29504);
var state_29570__$1 = state_29570;
if(inst_29505){
var statearr_29612_29667 = state_29570__$1;
(statearr_29612_29667[(1)] = (13));

} else {
var statearr_29613_29668 = state_29570__$1;
(statearr_29613_29668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (9))){
var inst_29476 = (state_29570[(8)]);
var state_29570__$1 = state_29570;
var statearr_29614_29669 = state_29570__$1;
(statearr_29614_29669[(2)] = inst_29476);

(statearr_29614_29669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (5))){
var state_29570__$1 = state_29570;
var statearr_29615_29670 = state_29570__$1;
(statearr_29615_29670[(2)] = true);

(statearr_29615_29670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (14))){
var state_29570__$1 = state_29570;
var statearr_29616_29671 = state_29570__$1;
(statearr_29616_29671[(2)] = false);

(statearr_29616_29671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (26))){
var inst_29530 = (state_29570[(9)]);
var inst_29537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29530);
var state_29570__$1 = state_29570;
var statearr_29617_29672 = state_29570__$1;
(statearr_29617_29672[(2)] = inst_29537);

(statearr_29617_29672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (16))){
var state_29570__$1 = state_29570;
var statearr_29618_29673 = state_29570__$1;
(statearr_29618_29673[(2)] = true);

(statearr_29618_29673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (38))){
var inst_29560 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29619_29674 = state_29570__$1;
(statearr_29619_29674[(2)] = inst_29560);

(statearr_29619_29674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (30))){
var inst_29530 = (state_29570[(9)]);
var inst_29524 = (state_29570[(13)]);
var inst_29523 = (state_29570[(11)]);
var inst_29547 = cljs.core.empty_QMARK_.call(null,inst_29523);
var inst_29548 = inst_29524.call(null,inst_29530);
var inst_29549 = cljs.core.not.call(null,inst_29548);
var inst_29550 = (inst_29547) && (inst_29549);
var state_29570__$1 = state_29570;
var statearr_29620_29675 = state_29570__$1;
(statearr_29620_29675[(2)] = inst_29550);

(statearr_29620_29675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (10))){
var inst_29476 = (state_29570[(8)]);
var inst_29496 = (state_29570[(2)]);
var inst_29497 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29498 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29499 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29500 = inst_29476;
var state_29570__$1 = (function (){var statearr_29621 = state_29570;
(statearr_29621[(7)] = inst_29500);

(statearr_29621[(16)] = inst_29497);

(statearr_29621[(17)] = inst_29498);

(statearr_29621[(18)] = inst_29499);

return statearr_29621;
})();
var statearr_29622_29676 = state_29570__$1;
(statearr_29622_29676[(2)] = null);

(statearr_29622_29676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (18))){
var inst_29514 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29623_29677 = state_29570__$1;
(statearr_29623_29677[(2)] = inst_29514);

(statearr_29623_29677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (37))){
var state_29570__$1 = state_29570;
var statearr_29624_29678 = state_29570__$1;
(statearr_29624_29678[(2)] = null);

(statearr_29624_29678[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (8))){
var inst_29476 = (state_29570[(8)]);
var inst_29493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29476);
var state_29570__$1 = state_29570;
var statearr_29625_29679 = state_29570__$1;
(statearr_29625_29679[(2)] = inst_29493);

(statearr_29625_29679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20671__auto__,c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20672__auto__ = null;
var cljs$core$async$mix_$_state_machine__20672__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$mix_$_state_machine__20672__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$mix_$_state_machine__20672__auto____1 = (function (state_29570){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__20675__auto__ = e29630;
var statearr_29631_29680 = state_29570;
(statearr_29631_29680[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29681 = state_29570;
state_29570 = G__29681;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20672__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20672__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20672__auto____0;
cljs$core$async$mix_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20672__auto____1;
return cljs$core$async$mix_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20694__auto__ = (function (){var statearr_29632 = f__20693__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___29633);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___29633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19083__auto__ = (((p == null))?null:p);
var m__19084__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19084__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19083__auto__ = (((p == null))?null:p);
var m__19084__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,p,v,ch);
} else {
var m__19084__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29682 = [];
var len__19486__auto___29685 = arguments.length;
var i__19487__auto___29686 = (0);
while(true){
if((i__19487__auto___29686 < len__19486__auto___29685)){
args29682.push((arguments[i__19487__auto___29686]));

var G__29687 = (i__19487__auto___29686 + (1));
i__19487__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29682.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19083__auto__ = (((p == null))?null:p);
var m__19084__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,p);
} else {
var m__19084__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19083__auto__ = (((p == null))?null:p);
var m__19084__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19083__auto__)]);
if(!((m__19084__auto__ == null))){
return m__19084__auto__.call(null,p,v);
} else {
var m__19084__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19084__auto____$1 == null))){
return m__19084__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29690 = [];
var len__19486__auto___29815 = arguments.length;
var i__19487__auto___29816 = (0);
while(true){
if((i__19487__auto___29816 < len__19486__auto___29815)){
args29690.push((arguments[i__19487__auto___29816]));

var G__29817 = (i__19487__auto___29816 + (1));
i__19487__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29692 = args29690.length;
switch (G__29692) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29690.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18428__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18428__auto__,mults){
return (function (p1__29689_SHARP_){
if(cljs.core.truth_(p1__29689_SHARP_.call(null,topic))){
return p1__29689_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29689_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18428__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29693 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29694){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29694 = meta29694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29695,meta29694__$1){
var self__ = this;
var _29695__$1 = this;
return (new cljs.core.async.t_cljs$core$async29693(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29694__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29695){
var self__ = this;
var _29695__$1 = this;
return self__.meta29694;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29694","meta29694",237010568,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29693";

cljs.core.async.t_cljs$core$async29693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async29693");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29693 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29694){
return (new cljs.core.async.t_cljs$core$async29693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29694));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29693(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20692__auto___29819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___29819,mults,ensure_mult,p){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___29819,mults,ensure_mult,p){
return (function (state_29767){
var state_val_29768 = (state_29767[(1)]);
if((state_val_29768 === (7))){
var inst_29763 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29769_29820 = state_29767__$1;
(statearr_29769_29820[(2)] = inst_29763);

(statearr_29769_29820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (20))){
var state_29767__$1 = state_29767;
var statearr_29770_29821 = state_29767__$1;
(statearr_29770_29821[(2)] = null);

(statearr_29770_29821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (1))){
var state_29767__$1 = state_29767;
var statearr_29771_29822 = state_29767__$1;
(statearr_29771_29822[(2)] = null);

(statearr_29771_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (24))){
var inst_29746 = (state_29767[(7)]);
var inst_29755 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29746);
var state_29767__$1 = state_29767;
var statearr_29772_29823 = state_29767__$1;
(statearr_29772_29823[(2)] = inst_29755);

(statearr_29772_29823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (4))){
var inst_29698 = (state_29767[(8)]);
var inst_29698__$1 = (state_29767[(2)]);
var inst_29699 = (inst_29698__$1 == null);
var state_29767__$1 = (function (){var statearr_29773 = state_29767;
(statearr_29773[(8)] = inst_29698__$1);

return statearr_29773;
})();
if(cljs.core.truth_(inst_29699)){
var statearr_29774_29824 = state_29767__$1;
(statearr_29774_29824[(1)] = (5));

} else {
var statearr_29775_29825 = state_29767__$1;
(statearr_29775_29825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (15))){
var inst_29740 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29776_29826 = state_29767__$1;
(statearr_29776_29826[(2)] = inst_29740);

(statearr_29776_29826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (21))){
var inst_29760 = (state_29767[(2)]);
var state_29767__$1 = (function (){var statearr_29777 = state_29767;
(statearr_29777[(9)] = inst_29760);

return statearr_29777;
})();
var statearr_29778_29827 = state_29767__$1;
(statearr_29778_29827[(2)] = null);

(statearr_29778_29827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (13))){
var inst_29722 = (state_29767[(10)]);
var inst_29724 = cljs.core.chunked_seq_QMARK_.call(null,inst_29722);
var state_29767__$1 = state_29767;
if(inst_29724){
var statearr_29779_29828 = state_29767__$1;
(statearr_29779_29828[(1)] = (16));

} else {
var statearr_29780_29829 = state_29767__$1;
(statearr_29780_29829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (22))){
var inst_29752 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29752)){
var statearr_29781_29830 = state_29767__$1;
(statearr_29781_29830[(1)] = (23));

} else {
var statearr_29782_29831 = state_29767__$1;
(statearr_29782_29831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (6))){
var inst_29746 = (state_29767[(7)]);
var inst_29698 = (state_29767[(8)]);
var inst_29748 = (state_29767[(11)]);
var inst_29746__$1 = topic_fn.call(null,inst_29698);
var inst_29747 = cljs.core.deref.call(null,mults);
var inst_29748__$1 = cljs.core.get.call(null,inst_29747,inst_29746__$1);
var state_29767__$1 = (function (){var statearr_29783 = state_29767;
(statearr_29783[(7)] = inst_29746__$1);

(statearr_29783[(11)] = inst_29748__$1);

return statearr_29783;
})();
if(cljs.core.truth_(inst_29748__$1)){
var statearr_29784_29832 = state_29767__$1;
(statearr_29784_29832[(1)] = (19));

} else {
var statearr_29785_29833 = state_29767__$1;
(statearr_29785_29833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (25))){
var inst_29757 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29786_29834 = state_29767__$1;
(statearr_29786_29834[(2)] = inst_29757);

(statearr_29786_29834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (17))){
var inst_29722 = (state_29767[(10)]);
var inst_29731 = cljs.core.first.call(null,inst_29722);
var inst_29732 = cljs.core.async.muxch_STAR_.call(null,inst_29731);
var inst_29733 = cljs.core.async.close_BANG_.call(null,inst_29732);
var inst_29734 = cljs.core.next.call(null,inst_29722);
var inst_29708 = inst_29734;
var inst_29709 = null;
var inst_29710 = (0);
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29787 = state_29767;
(statearr_29787[(12)] = inst_29708);

(statearr_29787[(13)] = inst_29710);

(statearr_29787[(14)] = inst_29709);

(statearr_29787[(15)] = inst_29733);

(statearr_29787[(16)] = inst_29711);

return statearr_29787;
})();
var statearr_29788_29835 = state_29767__$1;
(statearr_29788_29835[(2)] = null);

(statearr_29788_29835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (3))){
var inst_29765 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29767__$1,inst_29765);
} else {
if((state_val_29768 === (12))){
var inst_29742 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29789_29836 = state_29767__$1;
(statearr_29789_29836[(2)] = inst_29742);

(statearr_29789_29836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (2))){
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29767__$1,(4),ch);
} else {
if((state_val_29768 === (23))){
var state_29767__$1 = state_29767;
var statearr_29790_29837 = state_29767__$1;
(statearr_29790_29837[(2)] = null);

(statearr_29790_29837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (19))){
var inst_29698 = (state_29767[(8)]);
var inst_29748 = (state_29767[(11)]);
var inst_29750 = cljs.core.async.muxch_STAR_.call(null,inst_29748);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29767__$1,(22),inst_29750,inst_29698);
} else {
if((state_val_29768 === (11))){
var inst_29722 = (state_29767[(10)]);
var inst_29708 = (state_29767[(12)]);
var inst_29722__$1 = cljs.core.seq.call(null,inst_29708);
var state_29767__$1 = (function (){var statearr_29791 = state_29767;
(statearr_29791[(10)] = inst_29722__$1);

return statearr_29791;
})();
if(inst_29722__$1){
var statearr_29792_29838 = state_29767__$1;
(statearr_29792_29838[(1)] = (13));

} else {
var statearr_29793_29839 = state_29767__$1;
(statearr_29793_29839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (9))){
var inst_29744 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29794_29840 = state_29767__$1;
(statearr_29794_29840[(2)] = inst_29744);

(statearr_29794_29840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (5))){
var inst_29705 = cljs.core.deref.call(null,mults);
var inst_29706 = cljs.core.vals.call(null,inst_29705);
var inst_29707 = cljs.core.seq.call(null,inst_29706);
var inst_29708 = inst_29707;
var inst_29709 = null;
var inst_29710 = (0);
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29795 = state_29767;
(statearr_29795[(12)] = inst_29708);

(statearr_29795[(13)] = inst_29710);

(statearr_29795[(14)] = inst_29709);

(statearr_29795[(16)] = inst_29711);

return statearr_29795;
})();
var statearr_29796_29841 = state_29767__$1;
(statearr_29796_29841[(2)] = null);

(statearr_29796_29841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (14))){
var state_29767__$1 = state_29767;
var statearr_29800_29842 = state_29767__$1;
(statearr_29800_29842[(2)] = null);

(statearr_29800_29842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (16))){
var inst_29722 = (state_29767[(10)]);
var inst_29726 = cljs.core.chunk_first.call(null,inst_29722);
var inst_29727 = cljs.core.chunk_rest.call(null,inst_29722);
var inst_29728 = cljs.core.count.call(null,inst_29726);
var inst_29708 = inst_29727;
var inst_29709 = inst_29726;
var inst_29710 = inst_29728;
var inst_29711 = (0);
var state_29767__$1 = (function (){var statearr_29801 = state_29767;
(statearr_29801[(12)] = inst_29708);

(statearr_29801[(13)] = inst_29710);

(statearr_29801[(14)] = inst_29709);

(statearr_29801[(16)] = inst_29711);

return statearr_29801;
})();
var statearr_29802_29843 = state_29767__$1;
(statearr_29802_29843[(2)] = null);

(statearr_29802_29843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (10))){
var inst_29708 = (state_29767[(12)]);
var inst_29710 = (state_29767[(13)]);
var inst_29709 = (state_29767[(14)]);
var inst_29711 = (state_29767[(16)]);
var inst_29716 = cljs.core._nth.call(null,inst_29709,inst_29711);
var inst_29717 = cljs.core.async.muxch_STAR_.call(null,inst_29716);
var inst_29718 = cljs.core.async.close_BANG_.call(null,inst_29717);
var inst_29719 = (inst_29711 + (1));
var tmp29797 = inst_29708;
var tmp29798 = inst_29710;
var tmp29799 = inst_29709;
var inst_29708__$1 = tmp29797;
var inst_29709__$1 = tmp29799;
var inst_29710__$1 = tmp29798;
var inst_29711__$1 = inst_29719;
var state_29767__$1 = (function (){var statearr_29803 = state_29767;
(statearr_29803[(12)] = inst_29708__$1);

(statearr_29803[(17)] = inst_29718);

(statearr_29803[(13)] = inst_29710__$1);

(statearr_29803[(14)] = inst_29709__$1);

(statearr_29803[(16)] = inst_29711__$1);

return statearr_29803;
})();
var statearr_29804_29844 = state_29767__$1;
(statearr_29804_29844[(2)] = null);

(statearr_29804_29844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (18))){
var inst_29737 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29805_29845 = state_29767__$1;
(statearr_29805_29845[(2)] = inst_29737);

(statearr_29805_29845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (8))){
var inst_29710 = (state_29767[(13)]);
var inst_29711 = (state_29767[(16)]);
var inst_29713 = (inst_29711 < inst_29710);
var inst_29714 = inst_29713;
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29714)){
var statearr_29806_29846 = state_29767__$1;
(statearr_29806_29846[(1)] = (10));

} else {
var statearr_29807_29847 = state_29767__$1;
(statearr_29807_29847[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___29819,mults,ensure_mult,p))
;
return ((function (switch__20671__auto__,c__20692__auto___29819,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_29767){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_29767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object)){
var ex__20675__auto__ = e29812;
var statearr_29813_29848 = state_29767;
(statearr_29813_29848[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29767;
state_29767 = G__29849;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_29767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_29767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___29819,mults,ensure_mult,p))
})();
var state__20694__auto__ = (function (){var statearr_29814 = f__20693__auto__.call(null);
(statearr_29814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___29819);

return statearr_29814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___29819,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29850 = [];
var len__19486__auto___29853 = arguments.length;
var i__19487__auto___29854 = (0);
while(true){
if((i__19487__auto___29854 < len__19486__auto___29853)){
args29850.push((arguments[i__19487__auto___29854]));

var G__29855 = (i__19487__auto___29854 + (1));
i__19487__auto___29854 = G__29855;
continue;
} else {
}
break;
}

var G__29852 = args29850.length;
switch (G__29852) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29850.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29857 = [];
var len__19486__auto___29860 = arguments.length;
var i__19487__auto___29861 = (0);
while(true){
if((i__19487__auto___29861 < len__19486__auto___29860)){
args29857.push((arguments[i__19487__auto___29861]));

var G__29862 = (i__19487__auto___29861 + (1));
i__19487__auto___29861 = G__29862;
continue;
} else {
}
break;
}

var G__29859 = args29857.length;
switch (G__29859) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29857.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29864 = [];
var len__19486__auto___29935 = arguments.length;
var i__19487__auto___29936 = (0);
while(true){
if((i__19487__auto___29936 < len__19486__auto___29935)){
args29864.push((arguments[i__19487__auto___29936]));

var G__29937 = (i__19487__auto___29936 + (1));
i__19487__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var G__29866 = args29864.length;
switch (G__29866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29864.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20692__auto___29939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29905){
var state_val_29906 = (state_29905[(1)]);
if((state_val_29906 === (7))){
var state_29905__$1 = state_29905;
var statearr_29907_29940 = state_29905__$1;
(statearr_29907_29940[(2)] = null);

(statearr_29907_29940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (1))){
var state_29905__$1 = state_29905;
var statearr_29908_29941 = state_29905__$1;
(statearr_29908_29941[(2)] = null);

(statearr_29908_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (4))){
var inst_29869 = (state_29905[(7)]);
var inst_29871 = (inst_29869 < cnt);
var state_29905__$1 = state_29905;
if(cljs.core.truth_(inst_29871)){
var statearr_29909_29942 = state_29905__$1;
(statearr_29909_29942[(1)] = (6));

} else {
var statearr_29910_29943 = state_29905__$1;
(statearr_29910_29943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (15))){
var inst_29901 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29911_29944 = state_29905__$1;
(statearr_29911_29944[(2)] = inst_29901);

(statearr_29911_29944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (13))){
var inst_29894 = cljs.core.async.close_BANG_.call(null,out);
var state_29905__$1 = state_29905;
var statearr_29912_29945 = state_29905__$1;
(statearr_29912_29945[(2)] = inst_29894);

(statearr_29912_29945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (6))){
var state_29905__$1 = state_29905;
var statearr_29913_29946 = state_29905__$1;
(statearr_29913_29946[(2)] = null);

(statearr_29913_29946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (3))){
var inst_29903 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29905__$1,inst_29903);
} else {
if((state_val_29906 === (12))){
var inst_29891 = (state_29905[(8)]);
var inst_29891__$1 = (state_29905[(2)]);
var inst_29892 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29891__$1);
var state_29905__$1 = (function (){var statearr_29914 = state_29905;
(statearr_29914[(8)] = inst_29891__$1);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29892)){
var statearr_29915_29947 = state_29905__$1;
(statearr_29915_29947[(1)] = (13));

} else {
var statearr_29916_29948 = state_29905__$1;
(statearr_29916_29948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (2))){
var inst_29868 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29869 = (0);
var state_29905__$1 = (function (){var statearr_29917 = state_29905;
(statearr_29917[(7)] = inst_29869);

(statearr_29917[(9)] = inst_29868);

return statearr_29917;
})();
var statearr_29918_29949 = state_29905__$1;
(statearr_29918_29949[(2)] = null);

(statearr_29918_29949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (11))){
var inst_29869 = (state_29905[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29905,(10),Object,null,(9));
var inst_29878 = chs__$1.call(null,inst_29869);
var inst_29879 = done.call(null,inst_29869);
var inst_29880 = cljs.core.async.take_BANG_.call(null,inst_29878,inst_29879);
var state_29905__$1 = state_29905;
var statearr_29919_29950 = state_29905__$1;
(statearr_29919_29950[(2)] = inst_29880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (9))){
var inst_29869 = (state_29905[(7)]);
var inst_29882 = (state_29905[(2)]);
var inst_29883 = (inst_29869 + (1));
var inst_29869__$1 = inst_29883;
var state_29905__$1 = (function (){var statearr_29920 = state_29905;
(statearr_29920[(7)] = inst_29869__$1);

(statearr_29920[(10)] = inst_29882);

return statearr_29920;
})();
var statearr_29921_29951 = state_29905__$1;
(statearr_29921_29951[(2)] = null);

(statearr_29921_29951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (5))){
var inst_29889 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29922 = state_29905;
(statearr_29922[(11)] = inst_29889);

return statearr_29922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29905__$1,(12),dchan);
} else {
if((state_val_29906 === (14))){
var inst_29891 = (state_29905[(8)]);
var inst_29896 = cljs.core.apply.call(null,f,inst_29891);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29905__$1,(16),out,inst_29896);
} else {
if((state_val_29906 === (16))){
var inst_29898 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29923 = state_29905;
(statearr_29923[(12)] = inst_29898);

return statearr_29923;
})();
var statearr_29924_29952 = state_29905__$1;
(statearr_29924_29952[(2)] = null);

(statearr_29924_29952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (10))){
var inst_29873 = (state_29905[(2)]);
var inst_29874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29905__$1 = (function (){var statearr_29925 = state_29905;
(statearr_29925[(13)] = inst_29873);

return statearr_29925;
})();
var statearr_29926_29953 = state_29905__$1;
(statearr_29926_29953[(2)] = inst_29874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (8))){
var inst_29887 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29927_29954 = state_29905__$1;
(statearr_29927_29954[(2)] = inst_29887);

(statearr_29927_29954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20671__auto__,c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_29905){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_29905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e29932){if((e29932 instanceof Object)){
var ex__20675__auto__ = e29932;
var statearr_29933_29955 = state_29905;
(statearr_29933_29955[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29956 = state_29905;
state_29905 = G__29956;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_29905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_29905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20694__auto__ = (function (){var statearr_29934 = f__20693__auto__.call(null);
(statearr_29934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___29939);

return statearr_29934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___29939,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29958 = [];
var len__19486__auto___30014 = arguments.length;
var i__19487__auto___30015 = (0);
while(true){
if((i__19487__auto___30015 < len__19486__auto___30014)){
args29958.push((arguments[i__19487__auto___30015]));

var G__30016 = (i__19487__auto___30015 + (1));
i__19487__auto___30015 = G__30016;
continue;
} else {
}
break;
}

var G__29960 = args29958.length;
switch (G__29960) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29958.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30018,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30018,out){
return (function (state_29990){
var state_val_29991 = (state_29990[(1)]);
if((state_val_29991 === (7))){
var inst_29970 = (state_29990[(7)]);
var inst_29969 = (state_29990[(8)]);
var inst_29969__$1 = (state_29990[(2)]);
var inst_29970__$1 = cljs.core.nth.call(null,inst_29969__$1,(0),null);
var inst_29971 = cljs.core.nth.call(null,inst_29969__$1,(1),null);
var inst_29972 = (inst_29970__$1 == null);
var state_29990__$1 = (function (){var statearr_29992 = state_29990;
(statearr_29992[(7)] = inst_29970__$1);

(statearr_29992[(9)] = inst_29971);

(statearr_29992[(8)] = inst_29969__$1);

return statearr_29992;
})();
if(cljs.core.truth_(inst_29972)){
var statearr_29993_30019 = state_29990__$1;
(statearr_29993_30019[(1)] = (8));

} else {
var statearr_29994_30020 = state_29990__$1;
(statearr_29994_30020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (1))){
var inst_29961 = cljs.core.vec.call(null,chs);
var inst_29962 = inst_29961;
var state_29990__$1 = (function (){var statearr_29995 = state_29990;
(statearr_29995[(10)] = inst_29962);

return statearr_29995;
})();
var statearr_29996_30021 = state_29990__$1;
(statearr_29996_30021[(2)] = null);

(statearr_29996_30021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (4))){
var inst_29962 = (state_29990[(10)]);
var state_29990__$1 = state_29990;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29990__$1,(7),inst_29962);
} else {
if((state_val_29991 === (6))){
var inst_29986 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
var statearr_29997_30022 = state_29990__$1;
(statearr_29997_30022[(2)] = inst_29986);

(statearr_29997_30022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (3))){
var inst_29988 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29990__$1,inst_29988);
} else {
if((state_val_29991 === (2))){
var inst_29962 = (state_29990[(10)]);
var inst_29964 = cljs.core.count.call(null,inst_29962);
var inst_29965 = (inst_29964 > (0));
var state_29990__$1 = state_29990;
if(cljs.core.truth_(inst_29965)){
var statearr_29999_30023 = state_29990__$1;
(statearr_29999_30023[(1)] = (4));

} else {
var statearr_30000_30024 = state_29990__$1;
(statearr_30000_30024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (11))){
var inst_29962 = (state_29990[(10)]);
var inst_29979 = (state_29990[(2)]);
var tmp29998 = inst_29962;
var inst_29962__$1 = tmp29998;
var state_29990__$1 = (function (){var statearr_30001 = state_29990;
(statearr_30001[(11)] = inst_29979);

(statearr_30001[(10)] = inst_29962__$1);

return statearr_30001;
})();
var statearr_30002_30025 = state_29990__$1;
(statearr_30002_30025[(2)] = null);

(statearr_30002_30025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (9))){
var inst_29970 = (state_29990[(7)]);
var state_29990__$1 = state_29990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29990__$1,(11),out,inst_29970);
} else {
if((state_val_29991 === (5))){
var inst_29984 = cljs.core.async.close_BANG_.call(null,out);
var state_29990__$1 = state_29990;
var statearr_30003_30026 = state_29990__$1;
(statearr_30003_30026[(2)] = inst_29984);

(statearr_30003_30026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (10))){
var inst_29982 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
var statearr_30004_30027 = state_29990__$1;
(statearr_30004_30027[(2)] = inst_29982);

(statearr_30004_30027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (8))){
var inst_29970 = (state_29990[(7)]);
var inst_29971 = (state_29990[(9)]);
var inst_29969 = (state_29990[(8)]);
var inst_29962 = (state_29990[(10)]);
var inst_29974 = (function (){var cs = inst_29962;
var vec__29967 = inst_29969;
var v = inst_29970;
var c = inst_29971;
return ((function (cs,vec__29967,v,c,inst_29970,inst_29971,inst_29969,inst_29962,state_val_29991,c__20692__auto___30018,out){
return (function (p1__29957_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29957_SHARP_);
});
;})(cs,vec__29967,v,c,inst_29970,inst_29971,inst_29969,inst_29962,state_val_29991,c__20692__auto___30018,out))
})();
var inst_29975 = cljs.core.filterv.call(null,inst_29974,inst_29962);
var inst_29962__$1 = inst_29975;
var state_29990__$1 = (function (){var statearr_30005 = state_29990;
(statearr_30005[(10)] = inst_29962__$1);

return statearr_30005;
})();
var statearr_30006_30028 = state_29990__$1;
(statearr_30006_30028[(2)] = null);

(statearr_30006_30028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30018,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30018,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30010[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30010[(1)] = (1));

return statearr_30010;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_29990){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_29990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30011){if((e30011 instanceof Object)){
var ex__20675__auto__ = e30011;
var statearr_30012_30029 = state_29990;
(statearr_30012_30029[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30030 = state_29990;
state_29990 = G__30030;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_29990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_29990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30018,out))
})();
var state__20694__auto__ = (function (){var statearr_30013 = f__20693__auto__.call(null);
(statearr_30013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30018);

return statearr_30013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30018,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30031 = [];
var len__19486__auto___30080 = arguments.length;
var i__19487__auto___30081 = (0);
while(true){
if((i__19487__auto___30081 < len__19486__auto___30080)){
args30031.push((arguments[i__19487__auto___30081]));

var G__30082 = (i__19487__auto___30081 + (1));
i__19487__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30033 = args30031.length;
switch (G__30033) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30031.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30084,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30084,out){
return (function (state_30057){
var state_val_30058 = (state_30057[(1)]);
if((state_val_30058 === (7))){
var inst_30039 = (state_30057[(7)]);
var inst_30039__$1 = (state_30057[(2)]);
var inst_30040 = (inst_30039__$1 == null);
var inst_30041 = cljs.core.not.call(null,inst_30040);
var state_30057__$1 = (function (){var statearr_30059 = state_30057;
(statearr_30059[(7)] = inst_30039__$1);

return statearr_30059;
})();
if(inst_30041){
var statearr_30060_30085 = state_30057__$1;
(statearr_30060_30085[(1)] = (8));

} else {
var statearr_30061_30086 = state_30057__$1;
(statearr_30061_30086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (1))){
var inst_30034 = (0);
var state_30057__$1 = (function (){var statearr_30062 = state_30057;
(statearr_30062[(8)] = inst_30034);

return statearr_30062;
})();
var statearr_30063_30087 = state_30057__$1;
(statearr_30063_30087[(2)] = null);

(statearr_30063_30087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (4))){
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30057__$1,(7),ch);
} else {
if((state_val_30058 === (6))){
var inst_30052 = (state_30057[(2)]);
var state_30057__$1 = state_30057;
var statearr_30064_30088 = state_30057__$1;
(statearr_30064_30088[(2)] = inst_30052);

(statearr_30064_30088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (3))){
var inst_30054 = (state_30057[(2)]);
var inst_30055 = cljs.core.async.close_BANG_.call(null,out);
var state_30057__$1 = (function (){var statearr_30065 = state_30057;
(statearr_30065[(9)] = inst_30054);

return statearr_30065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30057__$1,inst_30055);
} else {
if((state_val_30058 === (2))){
var inst_30034 = (state_30057[(8)]);
var inst_30036 = (inst_30034 < n);
var state_30057__$1 = state_30057;
if(cljs.core.truth_(inst_30036)){
var statearr_30066_30089 = state_30057__$1;
(statearr_30066_30089[(1)] = (4));

} else {
var statearr_30067_30090 = state_30057__$1;
(statearr_30067_30090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (11))){
var inst_30034 = (state_30057[(8)]);
var inst_30044 = (state_30057[(2)]);
var inst_30045 = (inst_30034 + (1));
var inst_30034__$1 = inst_30045;
var state_30057__$1 = (function (){var statearr_30068 = state_30057;
(statearr_30068[(10)] = inst_30044);

(statearr_30068[(8)] = inst_30034__$1);

return statearr_30068;
})();
var statearr_30069_30091 = state_30057__$1;
(statearr_30069_30091[(2)] = null);

(statearr_30069_30091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (9))){
var state_30057__$1 = state_30057;
var statearr_30070_30092 = state_30057__$1;
(statearr_30070_30092[(2)] = null);

(statearr_30070_30092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (5))){
var state_30057__$1 = state_30057;
var statearr_30071_30093 = state_30057__$1;
(statearr_30071_30093[(2)] = null);

(statearr_30071_30093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (10))){
var inst_30049 = (state_30057[(2)]);
var state_30057__$1 = state_30057;
var statearr_30072_30094 = state_30057__$1;
(statearr_30072_30094[(2)] = inst_30049);

(statearr_30072_30094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (8))){
var inst_30039 = (state_30057[(7)]);
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30057__$1,(11),out,inst_30039);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30084,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30084,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30076[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30076[(1)] = (1));

return statearr_30076;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_30057){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30077){if((e30077 instanceof Object)){
var ex__20675__auto__ = e30077;
var statearr_30078_30095 = state_30057;
(statearr_30078_30095[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30096 = state_30057;
state_30057 = G__30096;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_30057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_30057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30084,out))
})();
var state__20694__auto__ = (function (){var statearr_30079 = f__20693__auto__.call(null);
(statearr_30079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30084);

return statearr_30079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30084,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30104 = (function (map_LT_,f,ch,meta30105){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30105 = meta30105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30106,meta30105__$1){
var self__ = this;
var _30106__$1 = this;
return (new cljs.core.async.t_cljs$core$async30104(self__.map_LT_,self__.f,self__.ch,meta30105__$1));
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30106){
var self__ = this;
var _30106__$1 = this;
return self__.meta30105;
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30107 = (function (map_LT_,f,ch,meta30105,_,fn1,meta30108){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30105 = meta30105;
this._ = _;
this.fn1 = fn1;
this.meta30108 = meta30108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30109,meta30108__$1){
var self__ = this;
var _30109__$1 = this;
return (new cljs.core.async.t_cljs$core$async30107(self__.map_LT_,self__.f,self__.ch,self__.meta30105,self__._,self__.fn1,meta30108__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30109){
var self__ = this;
var _30109__$1 = this;
return self__.meta30108;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30097_SHARP_){
return f1.call(null,(((p1__30097_SHARP_ == null))?null:self__.f.call(null,p1__30097_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30105","meta30105",-726718578,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30104","cljs.core.async/t_cljs$core$async30104",237125692,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30108","meta30108",391656225,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30107";

cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async30107");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30107 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30107(map_LT___$1,f__$1,ch__$1,meta30105__$1,___$2,fn1__$1,meta30108){
return (new cljs.core.async.t_cljs$core$async30107(map_LT___$1,f__$1,ch__$1,meta30105__$1,___$2,fn1__$1,meta30108));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30107(self__.map_LT_,self__.f,self__.ch,self__.meta30105,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18416__auto__ = ret;
if(cljs.core.truth_(and__18416__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18416__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30105","meta30105",-726718578,null)], null);
});

cljs.core.async.t_cljs$core$async30104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30104";

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async30104");
});

cljs.core.async.__GT_t_cljs$core$async30104 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30104(map_LT___$1,f__$1,ch__$1,meta30105){
return (new cljs.core.async.t_cljs$core$async30104(map_LT___$1,f__$1,ch__$1,meta30105));
});

}

return (new cljs.core.async.t_cljs$core$async30104(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30113 = (function (map_GT_,f,ch,meta30114){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30114 = meta30114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30115,meta30114__$1){
var self__ = this;
var _30115__$1 = this;
return (new cljs.core.async.t_cljs$core$async30113(self__.map_GT_,self__.f,self__.ch,meta30114__$1));
});

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30115){
var self__ = this;
var _30115__$1 = this;
return self__.meta30114;
});

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30114","meta30114",1472942630,null)], null);
});

cljs.core.async.t_cljs$core$async30113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30113";

cljs.core.async.t_cljs$core$async30113.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async30113");
});

cljs.core.async.__GT_t_cljs$core$async30113 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30113(map_GT___$1,f__$1,ch__$1,meta30114){
return (new cljs.core.async.t_cljs$core$async30113(map_GT___$1,f__$1,ch__$1,meta30114));
});

}

return (new cljs.core.async.t_cljs$core$async30113(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30119 = (function (filter_GT_,p,ch,meta30120){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30120 = meta30120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30121,meta30120__$1){
var self__ = this;
var _30121__$1 = this;
return (new cljs.core.async.t_cljs$core$async30119(self__.filter_GT_,self__.p,self__.ch,meta30120__$1));
});

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30121){
var self__ = this;
var _30121__$1 = this;
return self__.meta30120;
});

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30120","meta30120",2098679975,null)], null);
});

cljs.core.async.t_cljs$core$async30119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30119";

cljs.core.async.t_cljs$core$async30119.cljs$lang$ctorPrWriter = (function (this__19026__auto__,writer__19027__auto__,opt__19028__auto__){
return cljs.core._write.call(null,writer__19027__auto__,"cljs.core.async/t_cljs$core$async30119");
});

cljs.core.async.__GT_t_cljs$core$async30119 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30119(filter_GT___$1,p__$1,ch__$1,meta30120){
return (new cljs.core.async.t_cljs$core$async30119(filter_GT___$1,p__$1,ch__$1,meta30120));
});

}

return (new cljs.core.async.t_cljs$core$async30119(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30122 = [];
var len__19486__auto___30166 = arguments.length;
var i__19487__auto___30167 = (0);
while(true){
if((i__19487__auto___30167 < len__19486__auto___30166)){
args30122.push((arguments[i__19487__auto___30167]));

var G__30168 = (i__19487__auto___30167 + (1));
i__19487__auto___30167 = G__30168;
continue;
} else {
}
break;
}

var G__30124 = args30122.length;
switch (G__30124) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30122.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30170,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30170,out){
return (function (state_30145){
var state_val_30146 = (state_30145[(1)]);
if((state_val_30146 === (7))){
var inst_30141 = (state_30145[(2)]);
var state_30145__$1 = state_30145;
var statearr_30147_30171 = state_30145__$1;
(statearr_30147_30171[(2)] = inst_30141);

(statearr_30147_30171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (1))){
var state_30145__$1 = state_30145;
var statearr_30148_30172 = state_30145__$1;
(statearr_30148_30172[(2)] = null);

(statearr_30148_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (4))){
var inst_30127 = (state_30145[(7)]);
var inst_30127__$1 = (state_30145[(2)]);
var inst_30128 = (inst_30127__$1 == null);
var state_30145__$1 = (function (){var statearr_30149 = state_30145;
(statearr_30149[(7)] = inst_30127__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30128)){
var statearr_30150_30173 = state_30145__$1;
(statearr_30150_30173[(1)] = (5));

} else {
var statearr_30151_30174 = state_30145__$1;
(statearr_30151_30174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (6))){
var inst_30127 = (state_30145[(7)]);
var inst_30132 = p.call(null,inst_30127);
var state_30145__$1 = state_30145;
if(cljs.core.truth_(inst_30132)){
var statearr_30152_30175 = state_30145__$1;
(statearr_30152_30175[(1)] = (8));

} else {
var statearr_30153_30176 = state_30145__$1;
(statearr_30153_30176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (3))){
var inst_30143 = (state_30145[(2)]);
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30145__$1,inst_30143);
} else {
if((state_val_30146 === (2))){
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30145__$1,(4),ch);
} else {
if((state_val_30146 === (11))){
var inst_30135 = (state_30145[(2)]);
var state_30145__$1 = state_30145;
var statearr_30154_30177 = state_30145__$1;
(statearr_30154_30177[(2)] = inst_30135);

(statearr_30154_30177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (9))){
var state_30145__$1 = state_30145;
var statearr_30155_30178 = state_30145__$1;
(statearr_30155_30178[(2)] = null);

(statearr_30155_30178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (5))){
var inst_30130 = cljs.core.async.close_BANG_.call(null,out);
var state_30145__$1 = state_30145;
var statearr_30156_30179 = state_30145__$1;
(statearr_30156_30179[(2)] = inst_30130);

(statearr_30156_30179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (10))){
var inst_30138 = (state_30145[(2)]);
var state_30145__$1 = (function (){var statearr_30157 = state_30145;
(statearr_30157[(8)] = inst_30138);

return statearr_30157;
})();
var statearr_30158_30180 = state_30145__$1;
(statearr_30158_30180[(2)] = null);

(statearr_30158_30180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (8))){
var inst_30127 = (state_30145[(7)]);
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30145__$1,(11),out,inst_30127);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30170,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30170,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30162 = [null,null,null,null,null,null,null,null,null];
(statearr_30162[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30162[(1)] = (1));

return statearr_30162;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_30145){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30163){if((e30163 instanceof Object)){
var ex__20675__auto__ = e30163;
var statearr_30164_30181 = state_30145;
(statearr_30164_30181[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30182 = state_30145;
state_30145 = G__30182;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_30145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_30145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30170,out))
})();
var state__20694__auto__ = (function (){var statearr_30165 = f__20693__auto__.call(null);
(statearr_30165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30170);

return statearr_30165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30183 = [];
var len__19486__auto___30186 = arguments.length;
var i__19487__auto___30187 = (0);
while(true){
if((i__19487__auto___30187 < len__19486__auto___30186)){
args30183.push((arguments[i__19487__auto___30187]));

var G__30188 = (i__19487__auto___30187 + (1));
i__19487__auto___30187 = G__30188;
continue;
} else {
}
break;
}

var G__30185 = args30183.length;
switch (G__30185) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30183.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__){
return (function (state_30355){
var state_val_30356 = (state_30355[(1)]);
if((state_val_30356 === (7))){
var inst_30351 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30357_30398 = state_30355__$1;
(statearr_30357_30398[(2)] = inst_30351);

(statearr_30357_30398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (20))){
var inst_30321 = (state_30355[(7)]);
var inst_30332 = (state_30355[(2)]);
var inst_30333 = cljs.core.next.call(null,inst_30321);
var inst_30307 = inst_30333;
var inst_30308 = null;
var inst_30309 = (0);
var inst_30310 = (0);
var state_30355__$1 = (function (){var statearr_30358 = state_30355;
(statearr_30358[(8)] = inst_30309);

(statearr_30358[(9)] = inst_30307);

(statearr_30358[(10)] = inst_30310);

(statearr_30358[(11)] = inst_30308);

(statearr_30358[(12)] = inst_30332);

return statearr_30358;
})();
var statearr_30359_30399 = state_30355__$1;
(statearr_30359_30399[(2)] = null);

(statearr_30359_30399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (1))){
var state_30355__$1 = state_30355;
var statearr_30360_30400 = state_30355__$1;
(statearr_30360_30400[(2)] = null);

(statearr_30360_30400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (4))){
var inst_30296 = (state_30355[(13)]);
var inst_30296__$1 = (state_30355[(2)]);
var inst_30297 = (inst_30296__$1 == null);
var state_30355__$1 = (function (){var statearr_30361 = state_30355;
(statearr_30361[(13)] = inst_30296__$1);

return statearr_30361;
})();
if(cljs.core.truth_(inst_30297)){
var statearr_30362_30401 = state_30355__$1;
(statearr_30362_30401[(1)] = (5));

} else {
var statearr_30363_30402 = state_30355__$1;
(statearr_30363_30402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (15))){
var state_30355__$1 = state_30355;
var statearr_30367_30403 = state_30355__$1;
(statearr_30367_30403[(2)] = null);

(statearr_30367_30403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (21))){
var state_30355__$1 = state_30355;
var statearr_30368_30404 = state_30355__$1;
(statearr_30368_30404[(2)] = null);

(statearr_30368_30404[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (13))){
var inst_30309 = (state_30355[(8)]);
var inst_30307 = (state_30355[(9)]);
var inst_30310 = (state_30355[(10)]);
var inst_30308 = (state_30355[(11)]);
var inst_30317 = (state_30355[(2)]);
var inst_30318 = (inst_30310 + (1));
var tmp30364 = inst_30309;
var tmp30365 = inst_30307;
var tmp30366 = inst_30308;
var inst_30307__$1 = tmp30365;
var inst_30308__$1 = tmp30366;
var inst_30309__$1 = tmp30364;
var inst_30310__$1 = inst_30318;
var state_30355__$1 = (function (){var statearr_30369 = state_30355;
(statearr_30369[(8)] = inst_30309__$1);

(statearr_30369[(9)] = inst_30307__$1);

(statearr_30369[(10)] = inst_30310__$1);

(statearr_30369[(11)] = inst_30308__$1);

(statearr_30369[(14)] = inst_30317);

return statearr_30369;
})();
var statearr_30370_30405 = state_30355__$1;
(statearr_30370_30405[(2)] = null);

(statearr_30370_30405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (22))){
var state_30355__$1 = state_30355;
var statearr_30371_30406 = state_30355__$1;
(statearr_30371_30406[(2)] = null);

(statearr_30371_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (6))){
var inst_30296 = (state_30355[(13)]);
var inst_30305 = f.call(null,inst_30296);
var inst_30306 = cljs.core.seq.call(null,inst_30305);
var inst_30307 = inst_30306;
var inst_30308 = null;
var inst_30309 = (0);
var inst_30310 = (0);
var state_30355__$1 = (function (){var statearr_30372 = state_30355;
(statearr_30372[(8)] = inst_30309);

(statearr_30372[(9)] = inst_30307);

(statearr_30372[(10)] = inst_30310);

(statearr_30372[(11)] = inst_30308);

return statearr_30372;
})();
var statearr_30373_30407 = state_30355__$1;
(statearr_30373_30407[(2)] = null);

(statearr_30373_30407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (17))){
var inst_30321 = (state_30355[(7)]);
var inst_30325 = cljs.core.chunk_first.call(null,inst_30321);
var inst_30326 = cljs.core.chunk_rest.call(null,inst_30321);
var inst_30327 = cljs.core.count.call(null,inst_30325);
var inst_30307 = inst_30326;
var inst_30308 = inst_30325;
var inst_30309 = inst_30327;
var inst_30310 = (0);
var state_30355__$1 = (function (){var statearr_30374 = state_30355;
(statearr_30374[(8)] = inst_30309);

(statearr_30374[(9)] = inst_30307);

(statearr_30374[(10)] = inst_30310);

(statearr_30374[(11)] = inst_30308);

return statearr_30374;
})();
var statearr_30375_30408 = state_30355__$1;
(statearr_30375_30408[(2)] = null);

(statearr_30375_30408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (3))){
var inst_30353 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30355__$1,inst_30353);
} else {
if((state_val_30356 === (12))){
var inst_30341 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30376_30409 = state_30355__$1;
(statearr_30376_30409[(2)] = inst_30341);

(statearr_30376_30409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (2))){
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30355__$1,(4),in$);
} else {
if((state_val_30356 === (23))){
var inst_30349 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30377_30410 = state_30355__$1;
(statearr_30377_30410[(2)] = inst_30349);

(statearr_30377_30410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (19))){
var inst_30336 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30378_30411 = state_30355__$1;
(statearr_30378_30411[(2)] = inst_30336);

(statearr_30378_30411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (11))){
var inst_30307 = (state_30355[(9)]);
var inst_30321 = (state_30355[(7)]);
var inst_30321__$1 = cljs.core.seq.call(null,inst_30307);
var state_30355__$1 = (function (){var statearr_30379 = state_30355;
(statearr_30379[(7)] = inst_30321__$1);

return statearr_30379;
})();
if(inst_30321__$1){
var statearr_30380_30412 = state_30355__$1;
(statearr_30380_30412[(1)] = (14));

} else {
var statearr_30381_30413 = state_30355__$1;
(statearr_30381_30413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (9))){
var inst_30343 = (state_30355[(2)]);
var inst_30344 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30355__$1 = (function (){var statearr_30382 = state_30355;
(statearr_30382[(15)] = inst_30343);

return statearr_30382;
})();
if(cljs.core.truth_(inst_30344)){
var statearr_30383_30414 = state_30355__$1;
(statearr_30383_30414[(1)] = (21));

} else {
var statearr_30384_30415 = state_30355__$1;
(statearr_30384_30415[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (5))){
var inst_30299 = cljs.core.async.close_BANG_.call(null,out);
var state_30355__$1 = state_30355;
var statearr_30385_30416 = state_30355__$1;
(statearr_30385_30416[(2)] = inst_30299);

(statearr_30385_30416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (14))){
var inst_30321 = (state_30355[(7)]);
var inst_30323 = cljs.core.chunked_seq_QMARK_.call(null,inst_30321);
var state_30355__$1 = state_30355;
if(inst_30323){
var statearr_30386_30417 = state_30355__$1;
(statearr_30386_30417[(1)] = (17));

} else {
var statearr_30387_30418 = state_30355__$1;
(statearr_30387_30418[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (16))){
var inst_30339 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30388_30419 = state_30355__$1;
(statearr_30388_30419[(2)] = inst_30339);

(statearr_30388_30419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (10))){
var inst_30310 = (state_30355[(10)]);
var inst_30308 = (state_30355[(11)]);
var inst_30315 = cljs.core._nth.call(null,inst_30308,inst_30310);
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30355__$1,(13),out,inst_30315);
} else {
if((state_val_30356 === (18))){
var inst_30321 = (state_30355[(7)]);
var inst_30330 = cljs.core.first.call(null,inst_30321);
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30355__$1,(20),out,inst_30330);
} else {
if((state_val_30356 === (8))){
var inst_30309 = (state_30355[(8)]);
var inst_30310 = (state_30355[(10)]);
var inst_30312 = (inst_30310 < inst_30309);
var inst_30313 = inst_30312;
var state_30355__$1 = state_30355;
if(cljs.core.truth_(inst_30313)){
var statearr_30389_30420 = state_30355__$1;
(statearr_30389_30420[(1)] = (10));

} else {
var statearr_30390_30421 = state_30355__$1;
(statearr_30390_30421[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto__))
;
return ((function (switch__20671__auto__,c__20692__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____0 = (function (){
var statearr_30394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30394[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__);

(statearr_30394[(1)] = (1));

return statearr_30394;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____1 = (function (state_30355){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30395){if((e30395 instanceof Object)){
var ex__20675__auto__ = e30395;
var statearr_30396_30422 = state_30355;
(statearr_30396_30422[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30423 = state_30355;
state_30355 = G__30423;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__ = function(state_30355){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____1.call(this,state_30355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20672__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__))
})();
var state__20694__auto__ = (function (){var statearr_30397 = f__20693__auto__.call(null);
(statearr_30397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_30397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__))
);

return c__20692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30424 = [];
var len__19486__auto___30427 = arguments.length;
var i__19487__auto___30428 = (0);
while(true){
if((i__19487__auto___30428 < len__19486__auto___30427)){
args30424.push((arguments[i__19487__auto___30428]));

var G__30429 = (i__19487__auto___30428 + (1));
i__19487__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var G__30426 = args30424.length;
switch (G__30426) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30424.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30431 = [];
var len__19486__auto___30434 = arguments.length;
var i__19487__auto___30435 = (0);
while(true){
if((i__19487__auto___30435 < len__19486__auto___30434)){
args30431.push((arguments[i__19487__auto___30435]));

var G__30436 = (i__19487__auto___30435 + (1));
i__19487__auto___30435 = G__30436;
continue;
} else {
}
break;
}

var G__30433 = args30431.length;
switch (G__30433) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30431.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30438 = [];
var len__19486__auto___30489 = arguments.length;
var i__19487__auto___30490 = (0);
while(true){
if((i__19487__auto___30490 < len__19486__auto___30489)){
args30438.push((arguments[i__19487__auto___30490]));

var G__30491 = (i__19487__auto___30490 + (1));
i__19487__auto___30490 = G__30491;
continue;
} else {
}
break;
}

var G__30440 = args30438.length;
switch (G__30440) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30438.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30493,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30493,out){
return (function (state_30464){
var state_val_30465 = (state_30464[(1)]);
if((state_val_30465 === (7))){
var inst_30459 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30466_30494 = state_30464__$1;
(statearr_30466_30494[(2)] = inst_30459);

(statearr_30466_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (1))){
var inst_30441 = null;
var state_30464__$1 = (function (){var statearr_30467 = state_30464;
(statearr_30467[(7)] = inst_30441);

return statearr_30467;
})();
var statearr_30468_30495 = state_30464__$1;
(statearr_30468_30495[(2)] = null);

(statearr_30468_30495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (4))){
var inst_30444 = (state_30464[(8)]);
var inst_30444__$1 = (state_30464[(2)]);
var inst_30445 = (inst_30444__$1 == null);
var inst_30446 = cljs.core.not.call(null,inst_30445);
var state_30464__$1 = (function (){var statearr_30469 = state_30464;
(statearr_30469[(8)] = inst_30444__$1);

return statearr_30469;
})();
if(inst_30446){
var statearr_30470_30496 = state_30464__$1;
(statearr_30470_30496[(1)] = (5));

} else {
var statearr_30471_30497 = state_30464__$1;
(statearr_30471_30497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (6))){
var state_30464__$1 = state_30464;
var statearr_30472_30498 = state_30464__$1;
(statearr_30472_30498[(2)] = null);

(statearr_30472_30498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (3))){
var inst_30461 = (state_30464[(2)]);
var inst_30462 = cljs.core.async.close_BANG_.call(null,out);
var state_30464__$1 = (function (){var statearr_30473 = state_30464;
(statearr_30473[(9)] = inst_30461);

return statearr_30473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30464__$1,inst_30462);
} else {
if((state_val_30465 === (2))){
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30464__$1,(4),ch);
} else {
if((state_val_30465 === (11))){
var inst_30444 = (state_30464[(8)]);
var inst_30453 = (state_30464[(2)]);
var inst_30441 = inst_30444;
var state_30464__$1 = (function (){var statearr_30474 = state_30464;
(statearr_30474[(10)] = inst_30453);

(statearr_30474[(7)] = inst_30441);

return statearr_30474;
})();
var statearr_30475_30499 = state_30464__$1;
(statearr_30475_30499[(2)] = null);

(statearr_30475_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (9))){
var inst_30444 = (state_30464[(8)]);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30464__$1,(11),out,inst_30444);
} else {
if((state_val_30465 === (5))){
var inst_30441 = (state_30464[(7)]);
var inst_30444 = (state_30464[(8)]);
var inst_30448 = cljs.core._EQ_.call(null,inst_30444,inst_30441);
var state_30464__$1 = state_30464;
if(inst_30448){
var statearr_30477_30500 = state_30464__$1;
(statearr_30477_30500[(1)] = (8));

} else {
var statearr_30478_30501 = state_30464__$1;
(statearr_30478_30501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (10))){
var inst_30456 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30479_30502 = state_30464__$1;
(statearr_30479_30502[(2)] = inst_30456);

(statearr_30479_30502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (8))){
var inst_30441 = (state_30464[(7)]);
var tmp30476 = inst_30441;
var inst_30441__$1 = tmp30476;
var state_30464__$1 = (function (){var statearr_30480 = state_30464;
(statearr_30480[(7)] = inst_30441__$1);

return statearr_30480;
})();
var statearr_30481_30503 = state_30464__$1;
(statearr_30481_30503[(2)] = null);

(statearr_30481_30503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30493,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30493,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30485[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30485[(1)] = (1));

return statearr_30485;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_30464){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30486){if((e30486 instanceof Object)){
var ex__20675__auto__ = e30486;
var statearr_30487_30504 = state_30464;
(statearr_30487_30504[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30505 = state_30464;
state_30464 = G__30505;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_30464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_30464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30493,out))
})();
var state__20694__auto__ = (function (){var statearr_30488 = f__20693__auto__.call(null);
(statearr_30488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30493);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30493,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30506 = [];
var len__19486__auto___30576 = arguments.length;
var i__19487__auto___30577 = (0);
while(true){
if((i__19487__auto___30577 < len__19486__auto___30576)){
args30506.push((arguments[i__19487__auto___30577]));

var G__30578 = (i__19487__auto___30577 + (1));
i__19487__auto___30577 = G__30578;
continue;
} else {
}
break;
}

var G__30508 = args30506.length;
switch (G__30508) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30506.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30580,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30580,out){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30548_30581 = state_30546__$1;
(statearr_30548_30581[(2)] = inst_30542);

(statearr_30548_30581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var inst_30509 = (new Array(n));
var inst_30510 = inst_30509;
var inst_30511 = (0);
var state_30546__$1 = (function (){var statearr_30549 = state_30546;
(statearr_30549[(7)] = inst_30511);

(statearr_30549[(8)] = inst_30510);

return statearr_30549;
})();
var statearr_30550_30582 = state_30546__$1;
(statearr_30550_30582[(2)] = null);

(statearr_30550_30582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30514 = (state_30546[(9)]);
var inst_30514__$1 = (state_30546[(2)]);
var inst_30515 = (inst_30514__$1 == null);
var inst_30516 = cljs.core.not.call(null,inst_30515);
var state_30546__$1 = (function (){var statearr_30551 = state_30546;
(statearr_30551[(9)] = inst_30514__$1);

return statearr_30551;
})();
if(inst_30516){
var statearr_30552_30583 = state_30546__$1;
(statearr_30552_30583[(1)] = (5));

} else {
var statearr_30553_30584 = state_30546__$1;
(statearr_30553_30584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (15))){
var inst_30536 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30554_30585 = state_30546__$1;
(statearr_30554_30585[(2)] = inst_30536);

(statearr_30554_30585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (13))){
var state_30546__$1 = state_30546;
var statearr_30555_30586 = state_30546__$1;
(statearr_30555_30586[(2)] = null);

(statearr_30555_30586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30511 = (state_30546[(7)]);
var inst_30532 = (inst_30511 > (0));
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30532)){
var statearr_30556_30587 = state_30546__$1;
(statearr_30556_30587[(1)] = (12));

} else {
var statearr_30557_30588 = state_30546__$1;
(statearr_30557_30588[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (12))){
var inst_30510 = (state_30546[(8)]);
var inst_30534 = cljs.core.vec.call(null,inst_30510);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30546__$1,(15),out,inst_30534);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(4),ch);
} else {
if((state_val_30547 === (11))){
var inst_30526 = (state_30546[(2)]);
var inst_30527 = (new Array(n));
var inst_30510 = inst_30527;
var inst_30511 = (0);
var state_30546__$1 = (function (){var statearr_30558 = state_30546;
(statearr_30558[(7)] = inst_30511);

(statearr_30558[(10)] = inst_30526);

(statearr_30558[(8)] = inst_30510);

return statearr_30558;
})();
var statearr_30559_30589 = state_30546__$1;
(statearr_30559_30589[(2)] = null);

(statearr_30559_30589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (9))){
var inst_30510 = (state_30546[(8)]);
var inst_30524 = cljs.core.vec.call(null,inst_30510);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30546__$1,(11),out,inst_30524);
} else {
if((state_val_30547 === (5))){
var inst_30519 = (state_30546[(11)]);
var inst_30511 = (state_30546[(7)]);
var inst_30514 = (state_30546[(9)]);
var inst_30510 = (state_30546[(8)]);
var inst_30518 = (inst_30510[inst_30511] = inst_30514);
var inst_30519__$1 = (inst_30511 + (1));
var inst_30520 = (inst_30519__$1 < n);
var state_30546__$1 = (function (){var statearr_30560 = state_30546;
(statearr_30560[(12)] = inst_30518);

(statearr_30560[(11)] = inst_30519__$1);

return statearr_30560;
})();
if(cljs.core.truth_(inst_30520)){
var statearr_30561_30590 = state_30546__$1;
(statearr_30561_30590[(1)] = (8));

} else {
var statearr_30562_30591 = state_30546__$1;
(statearr_30562_30591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (14))){
var inst_30539 = (state_30546[(2)]);
var inst_30540 = cljs.core.async.close_BANG_.call(null,out);
var state_30546__$1 = (function (){var statearr_30564 = state_30546;
(statearr_30564[(13)] = inst_30539);

return statearr_30564;
})();
var statearr_30565_30592 = state_30546__$1;
(statearr_30565_30592[(2)] = inst_30540);

(statearr_30565_30592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (10))){
var inst_30530 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30566_30593 = state_30546__$1;
(statearr_30566_30593[(2)] = inst_30530);

(statearr_30566_30593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30519 = (state_30546[(11)]);
var inst_30510 = (state_30546[(8)]);
var tmp30563 = inst_30510;
var inst_30510__$1 = tmp30563;
var inst_30511 = inst_30519;
var state_30546__$1 = (function (){var statearr_30567 = state_30546;
(statearr_30567[(7)] = inst_30511);

(statearr_30567[(8)] = inst_30510__$1);

return statearr_30567;
})();
var statearr_30568_30594 = state_30546__$1;
(statearr_30568_30594[(2)] = null);

(statearr_30568_30594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30580,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30580,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30572[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30572[(1)] = (1));

return statearr_30572;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_30546){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30573){if((e30573 instanceof Object)){
var ex__20675__auto__ = e30573;
var statearr_30574_30595 = state_30546;
(statearr_30574_30595[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30596 = state_30546;
state_30546 = G__30596;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30580,out))
})();
var state__20694__auto__ = (function (){var statearr_30575 = f__20693__auto__.call(null);
(statearr_30575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30580);

return statearr_30575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30580,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30597 = [];
var len__19486__auto___30671 = arguments.length;
var i__19487__auto___30672 = (0);
while(true){
if((i__19487__auto___30672 < len__19486__auto___30671)){
args30597.push((arguments[i__19487__auto___30672]));

var G__30673 = (i__19487__auto___30672 + (1));
i__19487__auto___30672 = G__30673;
continue;
} else {
}
break;
}

var G__30599 = args30597.length;
switch (G__30599) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30597.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20692__auto___30675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___30675,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___30675,out){
return (function (state_30641){
var state_val_30642 = (state_30641[(1)]);
if((state_val_30642 === (7))){
var inst_30637 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
var statearr_30643_30676 = state_30641__$1;
(statearr_30643_30676[(2)] = inst_30637);

(statearr_30643_30676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (1))){
var inst_30600 = [];
var inst_30601 = inst_30600;
var inst_30602 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30641__$1 = (function (){var statearr_30644 = state_30641;
(statearr_30644[(7)] = inst_30601);

(statearr_30644[(8)] = inst_30602);

return statearr_30644;
})();
var statearr_30645_30677 = state_30641__$1;
(statearr_30645_30677[(2)] = null);

(statearr_30645_30677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (4))){
var inst_30605 = (state_30641[(9)]);
var inst_30605__$1 = (state_30641[(2)]);
var inst_30606 = (inst_30605__$1 == null);
var inst_30607 = cljs.core.not.call(null,inst_30606);
var state_30641__$1 = (function (){var statearr_30646 = state_30641;
(statearr_30646[(9)] = inst_30605__$1);

return statearr_30646;
})();
if(inst_30607){
var statearr_30647_30678 = state_30641__$1;
(statearr_30647_30678[(1)] = (5));

} else {
var statearr_30648_30679 = state_30641__$1;
(statearr_30648_30679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (15))){
var inst_30631 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
var statearr_30649_30680 = state_30641__$1;
(statearr_30649_30680[(2)] = inst_30631);

(statearr_30649_30680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (13))){
var state_30641__$1 = state_30641;
var statearr_30650_30681 = state_30641__$1;
(statearr_30650_30681[(2)] = null);

(statearr_30650_30681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (6))){
var inst_30601 = (state_30641[(7)]);
var inst_30626 = inst_30601.length;
var inst_30627 = (inst_30626 > (0));
var state_30641__$1 = state_30641;
if(cljs.core.truth_(inst_30627)){
var statearr_30651_30682 = state_30641__$1;
(statearr_30651_30682[(1)] = (12));

} else {
var statearr_30652_30683 = state_30641__$1;
(statearr_30652_30683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (3))){
var inst_30639 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30641__$1,inst_30639);
} else {
if((state_val_30642 === (12))){
var inst_30601 = (state_30641[(7)]);
var inst_30629 = cljs.core.vec.call(null,inst_30601);
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30641__$1,(15),out,inst_30629);
} else {
if((state_val_30642 === (2))){
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30641__$1,(4),ch);
} else {
if((state_val_30642 === (11))){
var inst_30605 = (state_30641[(9)]);
var inst_30609 = (state_30641[(10)]);
var inst_30619 = (state_30641[(2)]);
var inst_30620 = [];
var inst_30621 = inst_30620.push(inst_30605);
var inst_30601 = inst_30620;
var inst_30602 = inst_30609;
var state_30641__$1 = (function (){var statearr_30653 = state_30641;
(statearr_30653[(11)] = inst_30619);

(statearr_30653[(7)] = inst_30601);

(statearr_30653[(8)] = inst_30602);

(statearr_30653[(12)] = inst_30621);

return statearr_30653;
})();
var statearr_30654_30684 = state_30641__$1;
(statearr_30654_30684[(2)] = null);

(statearr_30654_30684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (9))){
var inst_30601 = (state_30641[(7)]);
var inst_30617 = cljs.core.vec.call(null,inst_30601);
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30641__$1,(11),out,inst_30617);
} else {
if((state_val_30642 === (5))){
var inst_30605 = (state_30641[(9)]);
var inst_30609 = (state_30641[(10)]);
var inst_30602 = (state_30641[(8)]);
var inst_30609__$1 = f.call(null,inst_30605);
var inst_30610 = cljs.core._EQ_.call(null,inst_30609__$1,inst_30602);
var inst_30611 = cljs.core.keyword_identical_QMARK_.call(null,inst_30602,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30612 = (inst_30610) || (inst_30611);
var state_30641__$1 = (function (){var statearr_30655 = state_30641;
(statearr_30655[(10)] = inst_30609__$1);

return statearr_30655;
})();
if(cljs.core.truth_(inst_30612)){
var statearr_30656_30685 = state_30641__$1;
(statearr_30656_30685[(1)] = (8));

} else {
var statearr_30657_30686 = state_30641__$1;
(statearr_30657_30686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (14))){
var inst_30634 = (state_30641[(2)]);
var inst_30635 = cljs.core.async.close_BANG_.call(null,out);
var state_30641__$1 = (function (){var statearr_30659 = state_30641;
(statearr_30659[(13)] = inst_30634);

return statearr_30659;
})();
var statearr_30660_30687 = state_30641__$1;
(statearr_30660_30687[(2)] = inst_30635);

(statearr_30660_30687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (10))){
var inst_30624 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
var statearr_30661_30688 = state_30641__$1;
(statearr_30661_30688[(2)] = inst_30624);

(statearr_30661_30688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (8))){
var inst_30605 = (state_30641[(9)]);
var inst_30609 = (state_30641[(10)]);
var inst_30601 = (state_30641[(7)]);
var inst_30614 = inst_30601.push(inst_30605);
var tmp30658 = inst_30601;
var inst_30601__$1 = tmp30658;
var inst_30602 = inst_30609;
var state_30641__$1 = (function (){var statearr_30662 = state_30641;
(statearr_30662[(14)] = inst_30614);

(statearr_30662[(7)] = inst_30601__$1);

(statearr_30662[(8)] = inst_30602);

return statearr_30662;
})();
var statearr_30663_30689 = state_30641__$1;
(statearr_30663_30689[(2)] = null);

(statearr_30663_30689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20692__auto___30675,out))
;
return ((function (switch__20671__auto__,c__20692__auto___30675,out){
return (function() {
var cljs$core$async$state_machine__20672__auto__ = null;
var cljs$core$async$state_machine__20672__auto____0 = (function (){
var statearr_30667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30667[(0)] = cljs$core$async$state_machine__20672__auto__);

(statearr_30667[(1)] = (1));

return statearr_30667;
});
var cljs$core$async$state_machine__20672__auto____1 = (function (state_30641){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_30641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e30668){if((e30668 instanceof Object)){
var ex__20675__auto__ = e30668;
var statearr_30669_30690 = state_30641;
(statearr_30669_30690[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30691 = state_30641;
state_30641 = G__30691;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
cljs$core$async$state_machine__20672__auto__ = function(state_30641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20672__auto____1.call(this,state_30641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20672__auto____0;
cljs$core$async$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20672__auto____1;
return cljs$core$async$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___30675,out))
})();
var state__20694__auto__ = (function (){var statearr_30670 = f__20693__auto__.call(null);
(statearr_30670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___30675);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___30675,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454378536898