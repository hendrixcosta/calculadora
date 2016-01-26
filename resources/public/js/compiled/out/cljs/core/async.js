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
var args19507 = [];
var len__17884__auto___19513 = arguments.length;
var i__17885__auto___19514 = (0);
while(true){
if((i__17885__auto___19514 < len__17884__auto___19513)){
args19507.push((arguments[i__17885__auto___19514]));

var G__19515 = (i__17885__auto___19514 + (1));
i__17885__auto___19514 = G__19515;
continue;
} else {
}
break;
}

var G__19509 = args19507.length;
switch (G__19509) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19507.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19510 = (function (f,blockable,meta19511){
this.f = f;
this.blockable = blockable;
this.meta19511 = meta19511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19512,meta19511__$1){
var self__ = this;
var _19512__$1 = this;
return (new cljs.core.async.t_cljs$core$async19510(self__.f,self__.blockable,meta19511__$1));
});

cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19512){
var self__ = this;
var _19512__$1 = this;
return self__.meta19511;
});

cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19511","meta19511",1561360458,null)], null);
});

cljs.core.async.t_cljs$core$async19510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19510";

cljs.core.async.t_cljs$core$async19510.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19510");
});

cljs.core.async.__GT_t_cljs$core$async19510 = (function cljs$core$async$__GT_t_cljs$core$async19510(f__$1,blockable__$1,meta19511){
return (new cljs.core.async.t_cljs$core$async19510(f__$1,blockable__$1,meta19511));
});

}

return (new cljs.core.async.t_cljs$core$async19510(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19519 = [];
var len__17884__auto___19522 = arguments.length;
var i__17885__auto___19523 = (0);
while(true){
if((i__17885__auto___19523 < len__17884__auto___19522)){
args19519.push((arguments[i__17885__auto___19523]));

var G__19524 = (i__17885__auto___19523 + (1));
i__17885__auto___19523 = G__19524;
continue;
} else {
}
break;
}

var G__19521 = args19519.length;
switch (G__19521) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19519.length)].join('')));

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
var args19526 = [];
var len__17884__auto___19529 = arguments.length;
var i__17885__auto___19530 = (0);
while(true){
if((i__17885__auto___19530 < len__17884__auto___19529)){
args19526.push((arguments[i__17885__auto___19530]));

var G__19531 = (i__17885__auto___19530 + (1));
i__17885__auto___19530 = G__19531;
continue;
} else {
}
break;
}

var G__19528 = args19526.length;
switch (G__19528) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19526.length)].join('')));

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
var args19533 = [];
var len__17884__auto___19536 = arguments.length;
var i__17885__auto___19537 = (0);
while(true){
if((i__17885__auto___19537 < len__17884__auto___19536)){
args19533.push((arguments[i__17885__auto___19537]));

var G__19538 = (i__17885__auto___19537 + (1));
i__17885__auto___19537 = G__19538;
continue;
} else {
}
break;
}

var G__19535 = args19533.length;
switch (G__19535) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19533.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19540);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19540,ret){
return (function (){
return fn1.call(null,val_19540);
});})(val_19540,ret))
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
var args19541 = [];
var len__17884__auto___19544 = arguments.length;
var i__17885__auto___19545 = (0);
while(true){
if((i__17885__auto___19545 < len__17884__auto___19544)){
args19541.push((arguments[i__17885__auto___19545]));

var G__19546 = (i__17885__auto___19545 + (1));
i__17885__auto___19545 = G__19546;
continue;
} else {
}
break;
}

var G__19543 = args19541.length;
switch (G__19543) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19541.length)].join('')));

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
var n__17729__auto___19548 = n;
var x_19549 = (0);
while(true){
if((x_19549 < n__17729__auto___19548)){
(a[x_19549] = (0));

var G__19550 = (x_19549 + (1));
x_19549 = G__19550;
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

var G__19551 = (i + (1));
i = G__19551;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19555 = (function (alt_flag,flag,meta19556){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19556 = meta19556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19557,meta19556__$1){
var self__ = this;
var _19557__$1 = this;
return (new cljs.core.async.t_cljs$core$async19555(self__.alt_flag,self__.flag,meta19556__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19557){
var self__ = this;
var _19557__$1 = this;
return self__.meta19556;
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19556","meta19556",-1790235977,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19555";

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19555");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19555 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19555(alt_flag__$1,flag__$1,meta19556){
return (new cljs.core.async.t_cljs$core$async19555(alt_flag__$1,flag__$1,meta19556));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19555(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19561 = (function (alt_handler,flag,cb,meta19562){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19562 = meta19562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19563,meta19562__$1){
var self__ = this;
var _19563__$1 = this;
return (new cljs.core.async.t_cljs$core$async19561(self__.alt_handler,self__.flag,self__.cb,meta19562__$1));
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19563){
var self__ = this;
var _19563__$1 = this;
return self__.meta19562;
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19562","meta19562",-1922408241,null)], null);
});

cljs.core.async.t_cljs$core$async19561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19561";

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19561");
});

cljs.core.async.__GT_t_cljs$core$async19561 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19561(alt_handler__$1,flag__$1,cb__$1,meta19562){
return (new cljs.core.async.t_cljs$core$async19561(alt_handler__$1,flag__$1,cb__$1,meta19562));
});

}

return (new cljs.core.async.t_cljs$core$async19561(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19564_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19564_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19565_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19565_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19566 = (i + (1));
i = G__19566;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
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
var args__17891__auto__ = [];
var len__17884__auto___19572 = arguments.length;
var i__17885__auto___19573 = (0);
while(true){
if((i__17885__auto___19573 < len__17884__auto___19572)){
args__17891__auto__.push((arguments[i__17885__auto___19573]));

var G__19574 = (i__17885__auto___19573 + (1));
i__17885__auto___19573 = G__19574;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19569){
var map__19570 = p__19569;
var map__19570__$1 = ((((!((map__19570 == null)))?((((map__19570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19570):map__19570);
var opts = map__19570__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19567){
var G__19568 = cljs.core.first.call(null,seq19567);
var seq19567__$1 = cljs.core.next.call(null,seq19567);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19568,seq19567__$1);
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
var args19575 = [];
var len__17884__auto___19625 = arguments.length;
var i__17885__auto___19626 = (0);
while(true){
if((i__17885__auto___19626 < len__17884__auto___19625)){
args19575.push((arguments[i__17885__auto___19626]));

var G__19627 = (i__17885__auto___19626 + (1));
i__17885__auto___19626 = G__19627;
continue;
} else {
}
break;
}

var G__19577 = args19575.length;
switch (G__19577) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19575.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19462__auto___19629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___19629){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___19629){
return (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19597 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19603_19630 = state_19601__$1;
(statearr_19603_19630[(2)] = inst_19597);

(statearr_19603_19630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var state_19601__$1 = state_19601;
var statearr_19604_19631 = state_19601__$1;
(statearr_19604_19631[(2)] = null);

(statearr_19604_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19580 = (state_19601[(7)]);
var inst_19580__$1 = (state_19601[(2)]);
var inst_19581 = (inst_19580__$1 == null);
var state_19601__$1 = (function (){var statearr_19605 = state_19601;
(statearr_19605[(7)] = inst_19580__$1);

return statearr_19605;
})();
if(cljs.core.truth_(inst_19581)){
var statearr_19606_19632 = state_19601__$1;
(statearr_19606_19632[(1)] = (5));

} else {
var statearr_19607_19633 = state_19601__$1;
(statearr_19607_19633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (13))){
var state_19601__$1 = state_19601;
var statearr_19608_19634 = state_19601__$1;
(statearr_19608_19634[(2)] = null);

(statearr_19608_19634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var inst_19580 = (state_19601[(7)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(11),to,inst_19580);
} else {
if((state_val_19602 === (3))){
var inst_19599 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (12))){
var state_19601__$1 = state_19601;
var statearr_19609_19635 = state_19601__$1;
(statearr_19609_19635[(2)] = null);

(statearr_19609_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (2))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19601__$1,(4),from);
} else {
if((state_val_19602 === (11))){
var inst_19590 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19590)){
var statearr_19610_19636 = state_19601__$1;
(statearr_19610_19636[(1)] = (12));

} else {
var statearr_19611_19637 = state_19601__$1;
(statearr_19611_19637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var state_19601__$1 = state_19601;
var statearr_19612_19638 = state_19601__$1;
(statearr_19612_19638[(2)] = null);

(statearr_19612_19638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (5))){
var state_19601__$1 = state_19601;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19613_19639 = state_19601__$1;
(statearr_19613_19639[(1)] = (8));

} else {
var statearr_19614_19640 = state_19601__$1;
(statearr_19614_19640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (14))){
var inst_19595 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19615_19641 = state_19601__$1;
(statearr_19615_19641[(2)] = inst_19595);

(statearr_19615_19641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19587 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19616_19642 = state_19601__$1;
(statearr_19616_19642[(2)] = inst_19587);

(statearr_19616_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (8))){
var inst_19584 = cljs.core.async.close_BANG_.call(null,to);
var state_19601__$1 = state_19601;
var statearr_19617_19643 = state_19601__$1;
(statearr_19617_19643[(2)] = inst_19584);

(statearr_19617_19643[(1)] = (10));


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
});})(c__19462__auto___19629))
;
return ((function (switch__19350__auto__,c__19462__auto___19629){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_19621 = [null,null,null,null,null,null,null,null];
(statearr_19621[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_19621[(1)] = (1));

return statearr_19621;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_19601){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e19622){if((e19622 instanceof Object)){
var ex__19354__auto__ = e19622;
var statearr_19623_19644 = state_19601;
(statearr_19623_19644[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19645 = state_19601;
state_19601 = G__19645;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___19629))
})();
var state__19464__auto__ = (function (){var statearr_19624 = f__19463__auto__.call(null);
(statearr_19624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___19629);

return statearr_19624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___19629))
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
return (function (p__19829){
var vec__19830 = p__19829;
var v = cljs.core.nth.call(null,vec__19830,(0),null);
var p = cljs.core.nth.call(null,vec__19830,(1),null);
var job = vec__19830;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19462__auto___20012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results){
return (function (state_19835){
var state_val_19836 = (state_19835[(1)]);
if((state_val_19836 === (1))){
var state_19835__$1 = state_19835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19835__$1,(2),res,v);
} else {
if((state_val_19836 === (2))){
var inst_19832 = (state_19835[(2)]);
var inst_19833 = cljs.core.async.close_BANG_.call(null,res);
var state_19835__$1 = (function (){var statearr_19837 = state_19835;
(statearr_19837[(7)] = inst_19832);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19835__$1,inst_19833);
} else {
return null;
}
}
});})(c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results))
;
return ((function (switch__19350__auto__,c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_19841 = [null,null,null,null,null,null,null,null];
(statearr_19841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__);

(statearr_19841[(1)] = (1));

return statearr_19841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1 = (function (state_19835){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e19842){if((e19842 instanceof Object)){
var ex__19354__auto__ = e19842;
var statearr_19843_20013 = state_19835;
(statearr_19843_20013[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20014 = state_19835;
state_19835 = G__20014;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = function(state_19835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1.call(this,state_19835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results))
})();
var state__19464__auto__ = (function (){var statearr_19844 = f__19463__auto__.call(null);
(statearr_19844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20012);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___20012,res,vec__19830,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19845){
var vec__19846 = p__19845;
var v = cljs.core.nth.call(null,vec__19846,(0),null);
var p = cljs.core.nth.call(null,vec__19846,(1),null);
var job = vec__19846;
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
var n__17729__auto___20015 = n;
var __20016 = (0);
while(true){
if((__20016 < n__17729__auto___20015)){
var G__19847_20017 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19847_20017) {
case "compute":
var c__19462__auto___20019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20016,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (__20016,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function (state_19860){
var state_val_19861 = (state_19860[(1)]);
if((state_val_19861 === (1))){
var state_19860__$1 = state_19860;
var statearr_19862_20020 = state_19860__$1;
(statearr_19862_20020[(2)] = null);

(statearr_19862_20020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19861 === (2))){
var state_19860__$1 = state_19860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19860__$1,(4),jobs);
} else {
if((state_val_19861 === (3))){
var inst_19858 = (state_19860[(2)]);
var state_19860__$1 = state_19860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19860__$1,inst_19858);
} else {
if((state_val_19861 === (4))){
var inst_19850 = (state_19860[(2)]);
var inst_19851 = process.call(null,inst_19850);
var state_19860__$1 = state_19860;
if(cljs.core.truth_(inst_19851)){
var statearr_19863_20021 = state_19860__$1;
(statearr_19863_20021[(1)] = (5));

} else {
var statearr_19864_20022 = state_19860__$1;
(statearr_19864_20022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19861 === (5))){
var state_19860__$1 = state_19860;
var statearr_19865_20023 = state_19860__$1;
(statearr_19865_20023[(2)] = null);

(statearr_19865_20023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19861 === (6))){
var state_19860__$1 = state_19860;
var statearr_19866_20024 = state_19860__$1;
(statearr_19866_20024[(2)] = null);

(statearr_19866_20024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19861 === (7))){
var inst_19856 = (state_19860[(2)]);
var state_19860__$1 = state_19860;
var statearr_19867_20025 = state_19860__$1;
(statearr_19867_20025[(2)] = inst_19856);

(statearr_19867_20025[(1)] = (3));


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
});})(__20016,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
;
return ((function (__20016,switch__19350__auto__,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_19871 = [null,null,null,null,null,null,null];
(statearr_19871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__);

(statearr_19871[(1)] = (1));

return statearr_19871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1 = (function (state_19860){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e19872){if((e19872 instanceof Object)){
var ex__19354__auto__ = e19872;
var statearr_19873_20026 = state_19860;
(statearr_19873_20026[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20027 = state_19860;
state_19860 = G__20027;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = function(state_19860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1.call(this,state_19860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__;
})()
;})(__20016,switch__19350__auto__,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
})();
var state__19464__auto__ = (function (){var statearr_19874 = f__19463__auto__.call(null);
(statearr_19874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20019);

return statearr_19874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(__20016,c__19462__auto___20019,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
);


break;
case "async":
var c__19462__auto___20028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20016,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (__20016,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function (state_19887){
var state_val_19888 = (state_19887[(1)]);
if((state_val_19888 === (1))){
var state_19887__$1 = state_19887;
var statearr_19889_20029 = state_19887__$1;
(statearr_19889_20029[(2)] = null);

(statearr_19889_20029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (2))){
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19887__$1,(4),jobs);
} else {
if((state_val_19888 === (3))){
var inst_19885 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19887__$1,inst_19885);
} else {
if((state_val_19888 === (4))){
var inst_19877 = (state_19887[(2)]);
var inst_19878 = async.call(null,inst_19877);
var state_19887__$1 = state_19887;
if(cljs.core.truth_(inst_19878)){
var statearr_19890_20030 = state_19887__$1;
(statearr_19890_20030[(1)] = (5));

} else {
var statearr_19891_20031 = state_19887__$1;
(statearr_19891_20031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (5))){
var state_19887__$1 = state_19887;
var statearr_19892_20032 = state_19887__$1;
(statearr_19892_20032[(2)] = null);

(statearr_19892_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (6))){
var state_19887__$1 = state_19887;
var statearr_19893_20033 = state_19887__$1;
(statearr_19893_20033[(2)] = null);

(statearr_19893_20033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19888 === (7))){
var inst_19883 = (state_19887[(2)]);
var state_19887__$1 = state_19887;
var statearr_19894_20034 = state_19887__$1;
(statearr_19894_20034[(2)] = inst_19883);

(statearr_19894_20034[(1)] = (3));


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
});})(__20016,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
;
return ((function (__20016,switch__19350__auto__,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_19898 = [null,null,null,null,null,null,null];
(statearr_19898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__);

(statearr_19898[(1)] = (1));

return statearr_19898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1 = (function (state_19887){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e19899){if((e19899 instanceof Object)){
var ex__19354__auto__ = e19899;
var statearr_19900_20035 = state_19887;
(statearr_19900_20035[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20036 = state_19887;
state_19887 = G__20036;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = function(state_19887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1.call(this,state_19887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__;
})()
;})(__20016,switch__19350__auto__,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
})();
var state__19464__auto__ = (function (){var statearr_19901 = f__19463__auto__.call(null);
(statearr_19901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20028);

return statearr_19901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(__20016,c__19462__auto___20028,G__19847_20017,n__17729__auto___20015,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20037 = (__20016 + (1));
__20016 = G__20037;
continue;
} else {
}
break;
}

var c__19462__auto___20038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___20038,jobs,results,process,async){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___20038,jobs,results,process,async){
return (function (state_19923){
var state_val_19924 = (state_19923[(1)]);
if((state_val_19924 === (1))){
var state_19923__$1 = state_19923;
var statearr_19925_20039 = state_19923__$1;
(statearr_19925_20039[(2)] = null);

(statearr_19925_20039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (2))){
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19923__$1,(4),from);
} else {
if((state_val_19924 === (3))){
var inst_19921 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19923__$1,inst_19921);
} else {
if((state_val_19924 === (4))){
var inst_19904 = (state_19923[(7)]);
var inst_19904__$1 = (state_19923[(2)]);
var inst_19905 = (inst_19904__$1 == null);
var state_19923__$1 = (function (){var statearr_19926 = state_19923;
(statearr_19926[(7)] = inst_19904__$1);

return statearr_19926;
})();
if(cljs.core.truth_(inst_19905)){
var statearr_19927_20040 = state_19923__$1;
(statearr_19927_20040[(1)] = (5));

} else {
var statearr_19928_20041 = state_19923__$1;
(statearr_19928_20041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (5))){
var inst_19907 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19923__$1 = state_19923;
var statearr_19929_20042 = state_19923__$1;
(statearr_19929_20042[(2)] = inst_19907);

(statearr_19929_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (6))){
var inst_19909 = (state_19923[(8)]);
var inst_19904 = (state_19923[(7)]);
var inst_19909__$1 = cljs.core.async.chan.call(null,(1));
var inst_19910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19911 = [inst_19904,inst_19909__$1];
var inst_19912 = (new cljs.core.PersistentVector(null,2,(5),inst_19910,inst_19911,null));
var state_19923__$1 = (function (){var statearr_19930 = state_19923;
(statearr_19930[(8)] = inst_19909__$1);

return statearr_19930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19923__$1,(8),jobs,inst_19912);
} else {
if((state_val_19924 === (7))){
var inst_19919 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
var statearr_19931_20043 = state_19923__$1;
(statearr_19931_20043[(2)] = inst_19919);

(statearr_19931_20043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (8))){
var inst_19909 = (state_19923[(8)]);
var inst_19914 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19932 = state_19923;
(statearr_19932[(9)] = inst_19914);

return statearr_19932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19923__$1,(9),results,inst_19909);
} else {
if((state_val_19924 === (9))){
var inst_19916 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19933 = state_19923;
(statearr_19933[(10)] = inst_19916);

return statearr_19933;
})();
var statearr_19934_20044 = state_19923__$1;
(statearr_19934_20044[(2)] = null);

(statearr_19934_20044[(1)] = (2));


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
});})(c__19462__auto___20038,jobs,results,process,async))
;
return ((function (switch__19350__auto__,c__19462__auto___20038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_19938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__);

(statearr_19938[(1)] = (1));

return statearr_19938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1 = (function (state_19923){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e19939){if((e19939 instanceof Object)){
var ex__19354__auto__ = e19939;
var statearr_19940_20045 = state_19923;
(statearr_19940_20045[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_19923;
state_19923 = G__20046;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = function(state_19923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1.call(this,state_19923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___20038,jobs,results,process,async))
})();
var state__19464__auto__ = (function (){var statearr_19941 = f__19463__auto__.call(null);
(statearr_19941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20038);

return statearr_19941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___20038,jobs,results,process,async))
);


var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__,jobs,results,process,async){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__,jobs,results,process,async){
return (function (state_19979){
var state_val_19980 = (state_19979[(1)]);
if((state_val_19980 === (7))){
var inst_19975 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_19981_20047 = state_19979__$1;
(statearr_19981_20047[(2)] = inst_19975);

(statearr_19981_20047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (20))){
var state_19979__$1 = state_19979;
var statearr_19982_20048 = state_19979__$1;
(statearr_19982_20048[(2)] = null);

(statearr_19982_20048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (1))){
var state_19979__$1 = state_19979;
var statearr_19983_20049 = state_19979__$1;
(statearr_19983_20049[(2)] = null);

(statearr_19983_20049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (4))){
var inst_19944 = (state_19979[(7)]);
var inst_19944__$1 = (state_19979[(2)]);
var inst_19945 = (inst_19944__$1 == null);
var state_19979__$1 = (function (){var statearr_19984 = state_19979;
(statearr_19984[(7)] = inst_19944__$1);

return statearr_19984;
})();
if(cljs.core.truth_(inst_19945)){
var statearr_19985_20050 = state_19979__$1;
(statearr_19985_20050[(1)] = (5));

} else {
var statearr_19986_20051 = state_19979__$1;
(statearr_19986_20051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (15))){
var inst_19957 = (state_19979[(8)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19979__$1,(18),to,inst_19957);
} else {
if((state_val_19980 === (21))){
var inst_19970 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_19987_20052 = state_19979__$1;
(statearr_19987_20052[(2)] = inst_19970);

(statearr_19987_20052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (13))){
var inst_19972 = (state_19979[(2)]);
var state_19979__$1 = (function (){var statearr_19988 = state_19979;
(statearr_19988[(9)] = inst_19972);

return statearr_19988;
})();
var statearr_19989_20053 = state_19979__$1;
(statearr_19989_20053[(2)] = null);

(statearr_19989_20053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (6))){
var inst_19944 = (state_19979[(7)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19979__$1,(11),inst_19944);
} else {
if((state_val_19980 === (17))){
var inst_19965 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
if(cljs.core.truth_(inst_19965)){
var statearr_19990_20054 = state_19979__$1;
(statearr_19990_20054[(1)] = (19));

} else {
var statearr_19991_20055 = state_19979__$1;
(statearr_19991_20055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (3))){
var inst_19977 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19979__$1,inst_19977);
} else {
if((state_val_19980 === (12))){
var inst_19954 = (state_19979[(10)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19979__$1,(14),inst_19954);
} else {
if((state_val_19980 === (2))){
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19979__$1,(4),results);
} else {
if((state_val_19980 === (19))){
var state_19979__$1 = state_19979;
var statearr_19992_20056 = state_19979__$1;
(statearr_19992_20056[(2)] = null);

(statearr_19992_20056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (11))){
var inst_19954 = (state_19979[(2)]);
var state_19979__$1 = (function (){var statearr_19993 = state_19979;
(statearr_19993[(10)] = inst_19954);

return statearr_19993;
})();
var statearr_19994_20057 = state_19979__$1;
(statearr_19994_20057[(2)] = null);

(statearr_19994_20057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (9))){
var state_19979__$1 = state_19979;
var statearr_19995_20058 = state_19979__$1;
(statearr_19995_20058[(2)] = null);

(statearr_19995_20058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (5))){
var state_19979__$1 = state_19979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19996_20059 = state_19979__$1;
(statearr_19996_20059[(1)] = (8));

} else {
var statearr_19997_20060 = state_19979__$1;
(statearr_19997_20060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (14))){
var inst_19957 = (state_19979[(8)]);
var inst_19959 = (state_19979[(11)]);
var inst_19957__$1 = (state_19979[(2)]);
var inst_19958 = (inst_19957__$1 == null);
var inst_19959__$1 = cljs.core.not.call(null,inst_19958);
var state_19979__$1 = (function (){var statearr_19998 = state_19979;
(statearr_19998[(8)] = inst_19957__$1);

(statearr_19998[(11)] = inst_19959__$1);

return statearr_19998;
})();
if(inst_19959__$1){
var statearr_19999_20061 = state_19979__$1;
(statearr_19999_20061[(1)] = (15));

} else {
var statearr_20000_20062 = state_19979__$1;
(statearr_20000_20062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (16))){
var inst_19959 = (state_19979[(11)]);
var state_19979__$1 = state_19979;
var statearr_20001_20063 = state_19979__$1;
(statearr_20001_20063[(2)] = inst_19959);

(statearr_20001_20063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (10))){
var inst_19951 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_20002_20064 = state_19979__$1;
(statearr_20002_20064[(2)] = inst_19951);

(statearr_20002_20064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (18))){
var inst_19962 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_20003_20065 = state_19979__$1;
(statearr_20003_20065[(2)] = inst_19962);

(statearr_20003_20065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (8))){
var inst_19948 = cljs.core.async.close_BANG_.call(null,to);
var state_19979__$1 = state_19979;
var statearr_20004_20066 = state_19979__$1;
(statearr_20004_20066[(2)] = inst_19948);

(statearr_20004_20066[(1)] = (10));


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
});})(c__19462__auto__,jobs,results,process,async))
;
return ((function (switch__19350__auto__,c__19462__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_20008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__);

(statearr_20008[(1)] = (1));

return statearr_20008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1 = (function (state_19979){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_19979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e20009){if((e20009 instanceof Object)){
var ex__19354__auto__ = e20009;
var statearr_20010_20067 = state_19979;
(statearr_20010_20067[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20068 = state_19979;
state_19979 = G__20068;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__ = function(state_19979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1.call(this,state_19979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__,jobs,results,process,async))
})();
var state__19464__auto__ = (function (){var statearr_20011 = f__19463__auto__.call(null);
(statearr_20011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_20011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__,jobs,results,process,async))
);

return c__19462__auto__;
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
var args20069 = [];
var len__17884__auto___20072 = arguments.length;
var i__17885__auto___20073 = (0);
while(true){
if((i__17885__auto___20073 < len__17884__auto___20072)){
args20069.push((arguments[i__17885__auto___20073]));

var G__20074 = (i__17885__auto___20073 + (1));
i__17885__auto___20073 = G__20074;
continue;
} else {
}
break;
}

var G__20071 = args20069.length;
switch (G__20071) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20069.length)].join('')));

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
var args20076 = [];
var len__17884__auto___20079 = arguments.length;
var i__17885__auto___20080 = (0);
while(true){
if((i__17885__auto___20080 < len__17884__auto___20079)){
args20076.push((arguments[i__17885__auto___20080]));

var G__20081 = (i__17885__auto___20080 + (1));
i__17885__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__20078 = args20076.length;
switch (G__20078) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20076.length)].join('')));

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
var args20083 = [];
var len__17884__auto___20136 = arguments.length;
var i__17885__auto___20137 = (0);
while(true){
if((i__17885__auto___20137 < len__17884__auto___20136)){
args20083.push((arguments[i__17885__auto___20137]));

var G__20138 = (i__17885__auto___20137 + (1));
i__17885__auto___20137 = G__20138;
continue;
} else {
}
break;
}

var G__20085 = args20083.length;
switch (G__20085) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20083.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19462__auto___20140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___20140,tc,fc){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___20140,tc,fc){
return (function (state_20111){
var state_val_20112 = (state_20111[(1)]);
if((state_val_20112 === (7))){
var inst_20107 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20113_20141 = state_20111__$1;
(statearr_20113_20141[(2)] = inst_20107);

(statearr_20113_20141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (1))){
var state_20111__$1 = state_20111;
var statearr_20114_20142 = state_20111__$1;
(statearr_20114_20142[(2)] = null);

(statearr_20114_20142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (4))){
var inst_20088 = (state_20111[(7)]);
var inst_20088__$1 = (state_20111[(2)]);
var inst_20089 = (inst_20088__$1 == null);
var state_20111__$1 = (function (){var statearr_20115 = state_20111;
(statearr_20115[(7)] = inst_20088__$1);

return statearr_20115;
})();
if(cljs.core.truth_(inst_20089)){
var statearr_20116_20143 = state_20111__$1;
(statearr_20116_20143[(1)] = (5));

} else {
var statearr_20117_20144 = state_20111__$1;
(statearr_20117_20144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (13))){
var state_20111__$1 = state_20111;
var statearr_20118_20145 = state_20111__$1;
(statearr_20118_20145[(2)] = null);

(statearr_20118_20145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (6))){
var inst_20088 = (state_20111[(7)]);
var inst_20094 = p.call(null,inst_20088);
var state_20111__$1 = state_20111;
if(cljs.core.truth_(inst_20094)){
var statearr_20119_20146 = state_20111__$1;
(statearr_20119_20146[(1)] = (9));

} else {
var statearr_20120_20147 = state_20111__$1;
(statearr_20120_20147[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (3))){
var inst_20109 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20111__$1,inst_20109);
} else {
if((state_val_20112 === (12))){
var state_20111__$1 = state_20111;
var statearr_20121_20148 = state_20111__$1;
(statearr_20121_20148[(2)] = null);

(statearr_20121_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (2))){
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20111__$1,(4),ch);
} else {
if((state_val_20112 === (11))){
var inst_20088 = (state_20111[(7)]);
var inst_20098 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20111__$1,(8),inst_20098,inst_20088);
} else {
if((state_val_20112 === (9))){
var state_20111__$1 = state_20111;
var statearr_20122_20149 = state_20111__$1;
(statearr_20122_20149[(2)] = tc);

(statearr_20122_20149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (5))){
var inst_20091 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20092 = cljs.core.async.close_BANG_.call(null,fc);
var state_20111__$1 = (function (){var statearr_20123 = state_20111;
(statearr_20123[(8)] = inst_20091);

return statearr_20123;
})();
var statearr_20124_20150 = state_20111__$1;
(statearr_20124_20150[(2)] = inst_20092);

(statearr_20124_20150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (14))){
var inst_20105 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20125_20151 = state_20111__$1;
(statearr_20125_20151[(2)] = inst_20105);

(statearr_20125_20151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (10))){
var state_20111__$1 = state_20111;
var statearr_20126_20152 = state_20111__$1;
(statearr_20126_20152[(2)] = fc);

(statearr_20126_20152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (8))){
var inst_20100 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
if(cljs.core.truth_(inst_20100)){
var statearr_20127_20153 = state_20111__$1;
(statearr_20127_20153[(1)] = (12));

} else {
var statearr_20128_20154 = state_20111__$1;
(statearr_20128_20154[(1)] = (13));

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
});})(c__19462__auto___20140,tc,fc))
;
return ((function (switch__19350__auto__,c__19462__auto___20140,tc,fc){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_20132 = [null,null,null,null,null,null,null,null,null];
(statearr_20132[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_20132[(1)] = (1));

return statearr_20132;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_20111){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_20111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e20133){if((e20133 instanceof Object)){
var ex__19354__auto__ = e20133;
var statearr_20134_20155 = state_20111;
(statearr_20134_20155[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20156 = state_20111;
state_20111 = G__20156;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_20111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_20111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___20140,tc,fc))
})();
var state__19464__auto__ = (function (){var statearr_20135 = f__19463__auto__.call(null);
(statearr_20135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20140);

return statearr_20135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___20140,tc,fc))
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
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_20220){
var state_val_20221 = (state_20220[(1)]);
if((state_val_20221 === (7))){
var inst_20216 = (state_20220[(2)]);
var state_20220__$1 = state_20220;
var statearr_20222_20243 = state_20220__$1;
(statearr_20222_20243[(2)] = inst_20216);

(statearr_20222_20243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (1))){
var inst_20200 = init;
var state_20220__$1 = (function (){var statearr_20223 = state_20220;
(statearr_20223[(7)] = inst_20200);

return statearr_20223;
})();
var statearr_20224_20244 = state_20220__$1;
(statearr_20224_20244[(2)] = null);

(statearr_20224_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (4))){
var inst_20203 = (state_20220[(8)]);
var inst_20203__$1 = (state_20220[(2)]);
var inst_20204 = (inst_20203__$1 == null);
var state_20220__$1 = (function (){var statearr_20225 = state_20220;
(statearr_20225[(8)] = inst_20203__$1);

return statearr_20225;
})();
if(cljs.core.truth_(inst_20204)){
var statearr_20226_20245 = state_20220__$1;
(statearr_20226_20245[(1)] = (5));

} else {
var statearr_20227_20246 = state_20220__$1;
(statearr_20227_20246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (6))){
var inst_20203 = (state_20220[(8)]);
var inst_20207 = (state_20220[(9)]);
var inst_20200 = (state_20220[(7)]);
var inst_20207__$1 = f.call(null,inst_20200,inst_20203);
var inst_20208 = cljs.core.reduced_QMARK_.call(null,inst_20207__$1);
var state_20220__$1 = (function (){var statearr_20228 = state_20220;
(statearr_20228[(9)] = inst_20207__$1);

return statearr_20228;
})();
if(inst_20208){
var statearr_20229_20247 = state_20220__$1;
(statearr_20229_20247[(1)] = (8));

} else {
var statearr_20230_20248 = state_20220__$1;
(statearr_20230_20248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (3))){
var inst_20218 = (state_20220[(2)]);
var state_20220__$1 = state_20220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20220__$1,inst_20218);
} else {
if((state_val_20221 === (2))){
var state_20220__$1 = state_20220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20220__$1,(4),ch);
} else {
if((state_val_20221 === (9))){
var inst_20207 = (state_20220[(9)]);
var inst_20200 = inst_20207;
var state_20220__$1 = (function (){var statearr_20231 = state_20220;
(statearr_20231[(7)] = inst_20200);

return statearr_20231;
})();
var statearr_20232_20249 = state_20220__$1;
(statearr_20232_20249[(2)] = null);

(statearr_20232_20249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (5))){
var inst_20200 = (state_20220[(7)]);
var state_20220__$1 = state_20220;
var statearr_20233_20250 = state_20220__$1;
(statearr_20233_20250[(2)] = inst_20200);

(statearr_20233_20250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (10))){
var inst_20214 = (state_20220[(2)]);
var state_20220__$1 = state_20220;
var statearr_20234_20251 = state_20220__$1;
(statearr_20234_20251[(2)] = inst_20214);

(statearr_20234_20251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20221 === (8))){
var inst_20207 = (state_20220[(9)]);
var inst_20210 = cljs.core.deref.call(null,inst_20207);
var state_20220__$1 = state_20220;
var statearr_20235_20252 = state_20220__$1;
(statearr_20235_20252[(2)] = inst_20210);

(statearr_20235_20252[(1)] = (10));


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
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19351__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19351__auto____0 = (function (){
var statearr_20239 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20239[(0)] = cljs$core$async$reduce_$_state_machine__19351__auto__);

(statearr_20239[(1)] = (1));

return statearr_20239;
});
var cljs$core$async$reduce_$_state_machine__19351__auto____1 = (function (state_20220){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_20220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e20240){if((e20240 instanceof Object)){
var ex__19354__auto__ = e20240;
var statearr_20241_20253 = state_20220;
(statearr_20241_20253[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20254 = state_20220;
state_20220 = G__20254;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19351__auto__ = function(state_20220){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19351__auto____1.call(this,state_20220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19351__auto____0;
cljs$core$async$reduce_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19351__auto____1;
return cljs$core$async$reduce_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_20242 = f__19463__auto__.call(null);
(statearr_20242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_20242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
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
var args20255 = [];
var len__17884__auto___20307 = arguments.length;
var i__17885__auto___20308 = (0);
while(true){
if((i__17885__auto___20308 < len__17884__auto___20307)){
args20255.push((arguments[i__17885__auto___20308]));

var G__20309 = (i__17885__auto___20308 + (1));
i__17885__auto___20308 = G__20309;
continue;
} else {
}
break;
}

var G__20257 = args20255.length;
switch (G__20257) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20255.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_20282){
var state_val_20283 = (state_20282[(1)]);
if((state_val_20283 === (7))){
var inst_20264 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
var statearr_20284_20311 = state_20282__$1;
(statearr_20284_20311[(2)] = inst_20264);

(statearr_20284_20311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (1))){
var inst_20258 = cljs.core.seq.call(null,coll);
var inst_20259 = inst_20258;
var state_20282__$1 = (function (){var statearr_20285 = state_20282;
(statearr_20285[(7)] = inst_20259);

return statearr_20285;
})();
var statearr_20286_20312 = state_20282__$1;
(statearr_20286_20312[(2)] = null);

(statearr_20286_20312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (4))){
var inst_20259 = (state_20282[(7)]);
var inst_20262 = cljs.core.first.call(null,inst_20259);
var state_20282__$1 = state_20282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20282__$1,(7),ch,inst_20262);
} else {
if((state_val_20283 === (13))){
var inst_20276 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
var statearr_20287_20313 = state_20282__$1;
(statearr_20287_20313[(2)] = inst_20276);

(statearr_20287_20313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (6))){
var inst_20267 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
if(cljs.core.truth_(inst_20267)){
var statearr_20288_20314 = state_20282__$1;
(statearr_20288_20314[(1)] = (8));

} else {
var statearr_20289_20315 = state_20282__$1;
(statearr_20289_20315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (3))){
var inst_20280 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20282__$1,inst_20280);
} else {
if((state_val_20283 === (12))){
var state_20282__$1 = state_20282;
var statearr_20290_20316 = state_20282__$1;
(statearr_20290_20316[(2)] = null);

(statearr_20290_20316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (2))){
var inst_20259 = (state_20282[(7)]);
var state_20282__$1 = state_20282;
if(cljs.core.truth_(inst_20259)){
var statearr_20291_20317 = state_20282__$1;
(statearr_20291_20317[(1)] = (4));

} else {
var statearr_20292_20318 = state_20282__$1;
(statearr_20292_20318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (11))){
var inst_20273 = cljs.core.async.close_BANG_.call(null,ch);
var state_20282__$1 = state_20282;
var statearr_20293_20319 = state_20282__$1;
(statearr_20293_20319[(2)] = inst_20273);

(statearr_20293_20319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (9))){
var state_20282__$1 = state_20282;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20294_20320 = state_20282__$1;
(statearr_20294_20320[(1)] = (11));

} else {
var statearr_20295_20321 = state_20282__$1;
(statearr_20295_20321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (5))){
var inst_20259 = (state_20282[(7)]);
var state_20282__$1 = state_20282;
var statearr_20296_20322 = state_20282__$1;
(statearr_20296_20322[(2)] = inst_20259);

(statearr_20296_20322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (10))){
var inst_20278 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
var statearr_20297_20323 = state_20282__$1;
(statearr_20297_20323[(2)] = inst_20278);

(statearr_20297_20323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20283 === (8))){
var inst_20259 = (state_20282[(7)]);
var inst_20269 = cljs.core.next.call(null,inst_20259);
var inst_20259__$1 = inst_20269;
var state_20282__$1 = (function (){var statearr_20298 = state_20282;
(statearr_20298[(7)] = inst_20259__$1);

return statearr_20298;
})();
var statearr_20299_20324 = state_20282__$1;
(statearr_20299_20324[(2)] = null);

(statearr_20299_20324[(1)] = (2));


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
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_20303 = [null,null,null,null,null,null,null,null];
(statearr_20303[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_20303[(1)] = (1));

return statearr_20303;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_20282){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_20282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e20304){if((e20304 instanceof Object)){
var ex__19354__auto__ = e20304;
var statearr_20305_20325 = state_20282;
(statearr_20305_20325[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20326 = state_20282;
state_20282 = G__20326;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_20282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_20282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_20306 = f__19463__auto__.call(null);
(statearr_20306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_20306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
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
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20548 = (function (mult,ch,cs,meta20549){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20549 = meta20549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20550,meta20549__$1){
var self__ = this;
var _20550__$1 = this;
return (new cljs.core.async.t_cljs$core$async20548(self__.mult,self__.ch,self__.cs,meta20549__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20550){
var self__ = this;
var _20550__$1 = this;
return self__.meta20549;
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20549","meta20549",2106418719,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20548";

cljs.core.async.t_cljs$core$async20548.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20548");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20548 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20548(mult__$1,ch__$1,cs__$1,meta20549){
return (new cljs.core.async.t_cljs$core$async20548(mult__$1,ch__$1,cs__$1,meta20549));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20548(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19462__auto___20769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___20769,cs,m,dchan,dctr,done){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___20769,cs,m,dchan,dctr,done){
return (function (state_20681){
var state_val_20682 = (state_20681[(1)]);
if((state_val_20682 === (7))){
var inst_20677 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20683_20770 = state_20681__$1;
(statearr_20683_20770[(2)] = inst_20677);

(statearr_20683_20770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (20))){
var inst_20582 = (state_20681[(7)]);
var inst_20592 = cljs.core.first.call(null,inst_20582);
var inst_20593 = cljs.core.nth.call(null,inst_20592,(0),null);
var inst_20594 = cljs.core.nth.call(null,inst_20592,(1),null);
var state_20681__$1 = (function (){var statearr_20684 = state_20681;
(statearr_20684[(8)] = inst_20593);

return statearr_20684;
})();
if(cljs.core.truth_(inst_20594)){
var statearr_20685_20771 = state_20681__$1;
(statearr_20685_20771[(1)] = (22));

} else {
var statearr_20686_20772 = state_20681__$1;
(statearr_20686_20772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (27))){
var inst_20629 = (state_20681[(9)]);
var inst_20553 = (state_20681[(10)]);
var inst_20622 = (state_20681[(11)]);
var inst_20624 = (state_20681[(12)]);
var inst_20629__$1 = cljs.core._nth.call(null,inst_20622,inst_20624);
var inst_20630 = cljs.core.async.put_BANG_.call(null,inst_20629__$1,inst_20553,done);
var state_20681__$1 = (function (){var statearr_20687 = state_20681;
(statearr_20687[(9)] = inst_20629__$1);

return statearr_20687;
})();
if(cljs.core.truth_(inst_20630)){
var statearr_20688_20773 = state_20681__$1;
(statearr_20688_20773[(1)] = (30));

} else {
var statearr_20689_20774 = state_20681__$1;
(statearr_20689_20774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (1))){
var state_20681__$1 = state_20681;
var statearr_20690_20775 = state_20681__$1;
(statearr_20690_20775[(2)] = null);

(statearr_20690_20775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (24))){
var inst_20582 = (state_20681[(7)]);
var inst_20599 = (state_20681[(2)]);
var inst_20600 = cljs.core.next.call(null,inst_20582);
var inst_20562 = inst_20600;
var inst_20563 = null;
var inst_20564 = (0);
var inst_20565 = (0);
var state_20681__$1 = (function (){var statearr_20691 = state_20681;
(statearr_20691[(13)] = inst_20564);

(statearr_20691[(14)] = inst_20565);

(statearr_20691[(15)] = inst_20599);

(statearr_20691[(16)] = inst_20562);

(statearr_20691[(17)] = inst_20563);

return statearr_20691;
})();
var statearr_20692_20776 = state_20681__$1;
(statearr_20692_20776[(2)] = null);

(statearr_20692_20776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (39))){
var state_20681__$1 = state_20681;
var statearr_20696_20777 = state_20681__$1;
(statearr_20696_20777[(2)] = null);

(statearr_20696_20777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (4))){
var inst_20553 = (state_20681[(10)]);
var inst_20553__$1 = (state_20681[(2)]);
var inst_20554 = (inst_20553__$1 == null);
var state_20681__$1 = (function (){var statearr_20697 = state_20681;
(statearr_20697[(10)] = inst_20553__$1);

return statearr_20697;
})();
if(cljs.core.truth_(inst_20554)){
var statearr_20698_20778 = state_20681__$1;
(statearr_20698_20778[(1)] = (5));

} else {
var statearr_20699_20779 = state_20681__$1;
(statearr_20699_20779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (15))){
var inst_20564 = (state_20681[(13)]);
var inst_20565 = (state_20681[(14)]);
var inst_20562 = (state_20681[(16)]);
var inst_20563 = (state_20681[(17)]);
var inst_20578 = (state_20681[(2)]);
var inst_20579 = (inst_20565 + (1));
var tmp20693 = inst_20564;
var tmp20694 = inst_20562;
var tmp20695 = inst_20563;
var inst_20562__$1 = tmp20694;
var inst_20563__$1 = tmp20695;
var inst_20564__$1 = tmp20693;
var inst_20565__$1 = inst_20579;
var state_20681__$1 = (function (){var statearr_20700 = state_20681;
(statearr_20700[(13)] = inst_20564__$1);

(statearr_20700[(14)] = inst_20565__$1);

(statearr_20700[(18)] = inst_20578);

(statearr_20700[(16)] = inst_20562__$1);

(statearr_20700[(17)] = inst_20563__$1);

return statearr_20700;
})();
var statearr_20701_20780 = state_20681__$1;
(statearr_20701_20780[(2)] = null);

(statearr_20701_20780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (21))){
var inst_20603 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20705_20781 = state_20681__$1;
(statearr_20705_20781[(2)] = inst_20603);

(statearr_20705_20781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (31))){
var inst_20629 = (state_20681[(9)]);
var inst_20633 = done.call(null,null);
var inst_20634 = cljs.core.async.untap_STAR_.call(null,m,inst_20629);
var state_20681__$1 = (function (){var statearr_20706 = state_20681;
(statearr_20706[(19)] = inst_20633);

return statearr_20706;
})();
var statearr_20707_20782 = state_20681__$1;
(statearr_20707_20782[(2)] = inst_20634);

(statearr_20707_20782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (32))){
var inst_20621 = (state_20681[(20)]);
var inst_20623 = (state_20681[(21)]);
var inst_20622 = (state_20681[(11)]);
var inst_20624 = (state_20681[(12)]);
var inst_20636 = (state_20681[(2)]);
var inst_20637 = (inst_20624 + (1));
var tmp20702 = inst_20621;
var tmp20703 = inst_20623;
var tmp20704 = inst_20622;
var inst_20621__$1 = tmp20702;
var inst_20622__$1 = tmp20704;
var inst_20623__$1 = tmp20703;
var inst_20624__$1 = inst_20637;
var state_20681__$1 = (function (){var statearr_20708 = state_20681;
(statearr_20708[(20)] = inst_20621__$1);

(statearr_20708[(21)] = inst_20623__$1);

(statearr_20708[(22)] = inst_20636);

(statearr_20708[(11)] = inst_20622__$1);

(statearr_20708[(12)] = inst_20624__$1);

return statearr_20708;
})();
var statearr_20709_20783 = state_20681__$1;
(statearr_20709_20783[(2)] = null);

(statearr_20709_20783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (40))){
var inst_20649 = (state_20681[(23)]);
var inst_20653 = done.call(null,null);
var inst_20654 = cljs.core.async.untap_STAR_.call(null,m,inst_20649);
var state_20681__$1 = (function (){var statearr_20710 = state_20681;
(statearr_20710[(24)] = inst_20653);

return statearr_20710;
})();
var statearr_20711_20784 = state_20681__$1;
(statearr_20711_20784[(2)] = inst_20654);

(statearr_20711_20784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (33))){
var inst_20640 = (state_20681[(25)]);
var inst_20642 = cljs.core.chunked_seq_QMARK_.call(null,inst_20640);
var state_20681__$1 = state_20681;
if(inst_20642){
var statearr_20712_20785 = state_20681__$1;
(statearr_20712_20785[(1)] = (36));

} else {
var statearr_20713_20786 = state_20681__$1;
(statearr_20713_20786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (13))){
var inst_20572 = (state_20681[(26)]);
var inst_20575 = cljs.core.async.close_BANG_.call(null,inst_20572);
var state_20681__$1 = state_20681;
var statearr_20714_20787 = state_20681__$1;
(statearr_20714_20787[(2)] = inst_20575);

(statearr_20714_20787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (22))){
var inst_20593 = (state_20681[(8)]);
var inst_20596 = cljs.core.async.close_BANG_.call(null,inst_20593);
var state_20681__$1 = state_20681;
var statearr_20715_20788 = state_20681__$1;
(statearr_20715_20788[(2)] = inst_20596);

(statearr_20715_20788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (36))){
var inst_20640 = (state_20681[(25)]);
var inst_20644 = cljs.core.chunk_first.call(null,inst_20640);
var inst_20645 = cljs.core.chunk_rest.call(null,inst_20640);
var inst_20646 = cljs.core.count.call(null,inst_20644);
var inst_20621 = inst_20645;
var inst_20622 = inst_20644;
var inst_20623 = inst_20646;
var inst_20624 = (0);
var state_20681__$1 = (function (){var statearr_20716 = state_20681;
(statearr_20716[(20)] = inst_20621);

(statearr_20716[(21)] = inst_20623);

(statearr_20716[(11)] = inst_20622);

(statearr_20716[(12)] = inst_20624);

return statearr_20716;
})();
var statearr_20717_20789 = state_20681__$1;
(statearr_20717_20789[(2)] = null);

(statearr_20717_20789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (41))){
var inst_20640 = (state_20681[(25)]);
var inst_20656 = (state_20681[(2)]);
var inst_20657 = cljs.core.next.call(null,inst_20640);
var inst_20621 = inst_20657;
var inst_20622 = null;
var inst_20623 = (0);
var inst_20624 = (0);
var state_20681__$1 = (function (){var statearr_20718 = state_20681;
(statearr_20718[(20)] = inst_20621);

(statearr_20718[(27)] = inst_20656);

(statearr_20718[(21)] = inst_20623);

(statearr_20718[(11)] = inst_20622);

(statearr_20718[(12)] = inst_20624);

return statearr_20718;
})();
var statearr_20719_20790 = state_20681__$1;
(statearr_20719_20790[(2)] = null);

(statearr_20719_20790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (43))){
var state_20681__$1 = state_20681;
var statearr_20720_20791 = state_20681__$1;
(statearr_20720_20791[(2)] = null);

(statearr_20720_20791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (29))){
var inst_20665 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20721_20792 = state_20681__$1;
(statearr_20721_20792[(2)] = inst_20665);

(statearr_20721_20792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (44))){
var inst_20674 = (state_20681[(2)]);
var state_20681__$1 = (function (){var statearr_20722 = state_20681;
(statearr_20722[(28)] = inst_20674);

return statearr_20722;
})();
var statearr_20723_20793 = state_20681__$1;
(statearr_20723_20793[(2)] = null);

(statearr_20723_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (6))){
var inst_20613 = (state_20681[(29)]);
var inst_20612 = cljs.core.deref.call(null,cs);
var inst_20613__$1 = cljs.core.keys.call(null,inst_20612);
var inst_20614 = cljs.core.count.call(null,inst_20613__$1);
var inst_20615 = cljs.core.reset_BANG_.call(null,dctr,inst_20614);
var inst_20620 = cljs.core.seq.call(null,inst_20613__$1);
var inst_20621 = inst_20620;
var inst_20622 = null;
var inst_20623 = (0);
var inst_20624 = (0);
var state_20681__$1 = (function (){var statearr_20724 = state_20681;
(statearr_20724[(20)] = inst_20621);

(statearr_20724[(21)] = inst_20623);

(statearr_20724[(29)] = inst_20613__$1);

(statearr_20724[(30)] = inst_20615);

(statearr_20724[(11)] = inst_20622);

(statearr_20724[(12)] = inst_20624);

return statearr_20724;
})();
var statearr_20725_20794 = state_20681__$1;
(statearr_20725_20794[(2)] = null);

(statearr_20725_20794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (28))){
var inst_20621 = (state_20681[(20)]);
var inst_20640 = (state_20681[(25)]);
var inst_20640__$1 = cljs.core.seq.call(null,inst_20621);
var state_20681__$1 = (function (){var statearr_20726 = state_20681;
(statearr_20726[(25)] = inst_20640__$1);

return statearr_20726;
})();
if(inst_20640__$1){
var statearr_20727_20795 = state_20681__$1;
(statearr_20727_20795[(1)] = (33));

} else {
var statearr_20728_20796 = state_20681__$1;
(statearr_20728_20796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (25))){
var inst_20623 = (state_20681[(21)]);
var inst_20624 = (state_20681[(12)]);
var inst_20626 = (inst_20624 < inst_20623);
var inst_20627 = inst_20626;
var state_20681__$1 = state_20681;
if(cljs.core.truth_(inst_20627)){
var statearr_20729_20797 = state_20681__$1;
(statearr_20729_20797[(1)] = (27));

} else {
var statearr_20730_20798 = state_20681__$1;
(statearr_20730_20798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (34))){
var state_20681__$1 = state_20681;
var statearr_20731_20799 = state_20681__$1;
(statearr_20731_20799[(2)] = null);

(statearr_20731_20799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (17))){
var state_20681__$1 = state_20681;
var statearr_20732_20800 = state_20681__$1;
(statearr_20732_20800[(2)] = null);

(statearr_20732_20800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (3))){
var inst_20679 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20681__$1,inst_20679);
} else {
if((state_val_20682 === (12))){
var inst_20608 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20733_20801 = state_20681__$1;
(statearr_20733_20801[(2)] = inst_20608);

(statearr_20733_20801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (2))){
var state_20681__$1 = state_20681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20681__$1,(4),ch);
} else {
if((state_val_20682 === (23))){
var state_20681__$1 = state_20681;
var statearr_20734_20802 = state_20681__$1;
(statearr_20734_20802[(2)] = null);

(statearr_20734_20802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (35))){
var inst_20663 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20735_20803 = state_20681__$1;
(statearr_20735_20803[(2)] = inst_20663);

(statearr_20735_20803[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (19))){
var inst_20582 = (state_20681[(7)]);
var inst_20586 = cljs.core.chunk_first.call(null,inst_20582);
var inst_20587 = cljs.core.chunk_rest.call(null,inst_20582);
var inst_20588 = cljs.core.count.call(null,inst_20586);
var inst_20562 = inst_20587;
var inst_20563 = inst_20586;
var inst_20564 = inst_20588;
var inst_20565 = (0);
var state_20681__$1 = (function (){var statearr_20736 = state_20681;
(statearr_20736[(13)] = inst_20564);

(statearr_20736[(14)] = inst_20565);

(statearr_20736[(16)] = inst_20562);

(statearr_20736[(17)] = inst_20563);

return statearr_20736;
})();
var statearr_20737_20804 = state_20681__$1;
(statearr_20737_20804[(2)] = null);

(statearr_20737_20804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (11))){
var inst_20582 = (state_20681[(7)]);
var inst_20562 = (state_20681[(16)]);
var inst_20582__$1 = cljs.core.seq.call(null,inst_20562);
var state_20681__$1 = (function (){var statearr_20738 = state_20681;
(statearr_20738[(7)] = inst_20582__$1);

return statearr_20738;
})();
if(inst_20582__$1){
var statearr_20739_20805 = state_20681__$1;
(statearr_20739_20805[(1)] = (16));

} else {
var statearr_20740_20806 = state_20681__$1;
(statearr_20740_20806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (9))){
var inst_20610 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20741_20807 = state_20681__$1;
(statearr_20741_20807[(2)] = inst_20610);

(statearr_20741_20807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (5))){
var inst_20560 = cljs.core.deref.call(null,cs);
var inst_20561 = cljs.core.seq.call(null,inst_20560);
var inst_20562 = inst_20561;
var inst_20563 = null;
var inst_20564 = (0);
var inst_20565 = (0);
var state_20681__$1 = (function (){var statearr_20742 = state_20681;
(statearr_20742[(13)] = inst_20564);

(statearr_20742[(14)] = inst_20565);

(statearr_20742[(16)] = inst_20562);

(statearr_20742[(17)] = inst_20563);

return statearr_20742;
})();
var statearr_20743_20808 = state_20681__$1;
(statearr_20743_20808[(2)] = null);

(statearr_20743_20808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (14))){
var state_20681__$1 = state_20681;
var statearr_20744_20809 = state_20681__$1;
(statearr_20744_20809[(2)] = null);

(statearr_20744_20809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (45))){
var inst_20671 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20745_20810 = state_20681__$1;
(statearr_20745_20810[(2)] = inst_20671);

(statearr_20745_20810[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (26))){
var inst_20613 = (state_20681[(29)]);
var inst_20667 = (state_20681[(2)]);
var inst_20668 = cljs.core.seq.call(null,inst_20613);
var state_20681__$1 = (function (){var statearr_20746 = state_20681;
(statearr_20746[(31)] = inst_20667);

return statearr_20746;
})();
if(inst_20668){
var statearr_20747_20811 = state_20681__$1;
(statearr_20747_20811[(1)] = (42));

} else {
var statearr_20748_20812 = state_20681__$1;
(statearr_20748_20812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (16))){
var inst_20582 = (state_20681[(7)]);
var inst_20584 = cljs.core.chunked_seq_QMARK_.call(null,inst_20582);
var state_20681__$1 = state_20681;
if(inst_20584){
var statearr_20749_20813 = state_20681__$1;
(statearr_20749_20813[(1)] = (19));

} else {
var statearr_20750_20814 = state_20681__$1;
(statearr_20750_20814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (38))){
var inst_20660 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20751_20815 = state_20681__$1;
(statearr_20751_20815[(2)] = inst_20660);

(statearr_20751_20815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (30))){
var state_20681__$1 = state_20681;
var statearr_20752_20816 = state_20681__$1;
(statearr_20752_20816[(2)] = null);

(statearr_20752_20816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (10))){
var inst_20565 = (state_20681[(14)]);
var inst_20563 = (state_20681[(17)]);
var inst_20571 = cljs.core._nth.call(null,inst_20563,inst_20565);
var inst_20572 = cljs.core.nth.call(null,inst_20571,(0),null);
var inst_20573 = cljs.core.nth.call(null,inst_20571,(1),null);
var state_20681__$1 = (function (){var statearr_20753 = state_20681;
(statearr_20753[(26)] = inst_20572);

return statearr_20753;
})();
if(cljs.core.truth_(inst_20573)){
var statearr_20754_20817 = state_20681__$1;
(statearr_20754_20817[(1)] = (13));

} else {
var statearr_20755_20818 = state_20681__$1;
(statearr_20755_20818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (18))){
var inst_20606 = (state_20681[(2)]);
var state_20681__$1 = state_20681;
var statearr_20756_20819 = state_20681__$1;
(statearr_20756_20819[(2)] = inst_20606);

(statearr_20756_20819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (42))){
var state_20681__$1 = state_20681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20681__$1,(45),dchan);
} else {
if((state_val_20682 === (37))){
var inst_20553 = (state_20681[(10)]);
var inst_20640 = (state_20681[(25)]);
var inst_20649 = (state_20681[(23)]);
var inst_20649__$1 = cljs.core.first.call(null,inst_20640);
var inst_20650 = cljs.core.async.put_BANG_.call(null,inst_20649__$1,inst_20553,done);
var state_20681__$1 = (function (){var statearr_20757 = state_20681;
(statearr_20757[(23)] = inst_20649__$1);

return statearr_20757;
})();
if(cljs.core.truth_(inst_20650)){
var statearr_20758_20820 = state_20681__$1;
(statearr_20758_20820[(1)] = (39));

} else {
var statearr_20759_20821 = state_20681__$1;
(statearr_20759_20821[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20682 === (8))){
var inst_20564 = (state_20681[(13)]);
var inst_20565 = (state_20681[(14)]);
var inst_20567 = (inst_20565 < inst_20564);
var inst_20568 = inst_20567;
var state_20681__$1 = state_20681;
if(cljs.core.truth_(inst_20568)){
var statearr_20760_20822 = state_20681__$1;
(statearr_20760_20822[(1)] = (10));

} else {
var statearr_20761_20823 = state_20681__$1;
(statearr_20761_20823[(1)] = (11));

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
});})(c__19462__auto___20769,cs,m,dchan,dctr,done))
;
return ((function (switch__19350__auto__,c__19462__auto___20769,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19351__auto__ = null;
var cljs$core$async$mult_$_state_machine__19351__auto____0 = (function (){
var statearr_20765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20765[(0)] = cljs$core$async$mult_$_state_machine__19351__auto__);

(statearr_20765[(1)] = (1));

return statearr_20765;
});
var cljs$core$async$mult_$_state_machine__19351__auto____1 = (function (state_20681){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_20681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e20766){if((e20766 instanceof Object)){
var ex__19354__auto__ = e20766;
var statearr_20767_20824 = state_20681;
(statearr_20767_20824[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20825 = state_20681;
state_20681 = G__20825;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19351__auto__ = function(state_20681){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19351__auto____1.call(this,state_20681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19351__auto____0;
cljs$core$async$mult_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19351__auto____1;
return cljs$core$async$mult_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___20769,cs,m,dchan,dctr,done))
})();
var state__19464__auto__ = (function (){var statearr_20768 = f__19463__auto__.call(null);
(statearr_20768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___20769);

return statearr_20768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___20769,cs,m,dchan,dctr,done))
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
var args20826 = [];
var len__17884__auto___20829 = arguments.length;
var i__17885__auto___20830 = (0);
while(true){
if((i__17885__auto___20830 < len__17884__auto___20829)){
args20826.push((arguments[i__17885__auto___20830]));

var G__20831 = (i__17885__auto___20830 + (1));
i__17885__auto___20830 = G__20831;
continue;
} else {
}
break;
}

var G__20828 = args20826.length;
switch (G__20828) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20826.length)].join('')));

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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
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
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20843 = arguments.length;
var i__17885__auto___20844 = (0);
while(true){
if((i__17885__auto___20844 < len__17884__auto___20843)){
args__17891__auto__.push((arguments[i__17885__auto___20844]));

var G__20845 = (i__17885__auto___20844 + (1));
i__17885__auto___20844 = G__20845;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20837){
var map__20838 = p__20837;
var map__20838__$1 = ((((!((map__20838 == null)))?((((map__20838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20838):map__20838);
var opts = map__20838__$1;
var statearr_20840_20846 = state;
(statearr_20840_20846[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20838,map__20838__$1,opts){
return (function (val){
var statearr_20841_20847 = state;
(statearr_20841_20847[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20838,map__20838__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20842_20848 = state;
(statearr_20842_20848[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20833){
var G__20834 = cljs.core.first.call(null,seq20833);
var seq20833__$1 = cljs.core.next.call(null,seq20833);
var G__20835 = cljs.core.first.call(null,seq20833__$1);
var seq20833__$2 = cljs.core.next.call(null,seq20833__$1);
var G__20836 = cljs.core.first.call(null,seq20833__$2);
var seq20833__$3 = cljs.core.next.call(null,seq20833__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20834,G__20835,G__20836,seq20833__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21012 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21013){
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
this.meta21013 = meta21013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21014,meta21013__$1){
var self__ = this;
var _21014__$1 = this;
return (new cljs.core.async.t_cljs$core$async21012(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21014){
var self__ = this;
var _21014__$1 = this;
return self__.meta21013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21012.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21013","meta21013",1679385643,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21012";

cljs.core.async.t_cljs$core$async21012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21013){
return (new cljs.core.async.t_cljs$core$async21012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21012(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19462__auto___21175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21112){
var state_val_21113 = (state_21112[(1)]);
if((state_val_21113 === (7))){
var inst_21030 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
var statearr_21114_21176 = state_21112__$1;
(statearr_21114_21176[(2)] = inst_21030);

(statearr_21114_21176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (20))){
var inst_21042 = (state_21112[(7)]);
var state_21112__$1 = state_21112;
var statearr_21115_21177 = state_21112__$1;
(statearr_21115_21177[(2)] = inst_21042);

(statearr_21115_21177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (27))){
var state_21112__$1 = state_21112;
var statearr_21116_21178 = state_21112__$1;
(statearr_21116_21178[(2)] = null);

(statearr_21116_21178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (1))){
var inst_21018 = (state_21112[(8)]);
var inst_21018__$1 = calc_state.call(null);
var inst_21020 = (inst_21018__$1 == null);
var inst_21021 = cljs.core.not.call(null,inst_21020);
var state_21112__$1 = (function (){var statearr_21117 = state_21112;
(statearr_21117[(8)] = inst_21018__$1);

return statearr_21117;
})();
if(inst_21021){
var statearr_21118_21179 = state_21112__$1;
(statearr_21118_21179[(1)] = (2));

} else {
var statearr_21119_21180 = state_21112__$1;
(statearr_21119_21180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (24))){
var inst_21065 = (state_21112[(9)]);
var inst_21072 = (state_21112[(10)]);
var inst_21086 = (state_21112[(11)]);
var inst_21086__$1 = inst_21065.call(null,inst_21072);
var state_21112__$1 = (function (){var statearr_21120 = state_21112;
(statearr_21120[(11)] = inst_21086__$1);

return statearr_21120;
})();
if(cljs.core.truth_(inst_21086__$1)){
var statearr_21121_21181 = state_21112__$1;
(statearr_21121_21181[(1)] = (29));

} else {
var statearr_21122_21182 = state_21112__$1;
(statearr_21122_21182[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (4))){
var inst_21033 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21033)){
var statearr_21123_21183 = state_21112__$1;
(statearr_21123_21183[(1)] = (8));

} else {
var statearr_21124_21184 = state_21112__$1;
(statearr_21124_21184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (15))){
var inst_21059 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21059)){
var statearr_21125_21185 = state_21112__$1;
(statearr_21125_21185[(1)] = (19));

} else {
var statearr_21126_21186 = state_21112__$1;
(statearr_21126_21186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (21))){
var inst_21064 = (state_21112[(12)]);
var inst_21064__$1 = (state_21112[(2)]);
var inst_21065 = cljs.core.get.call(null,inst_21064__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21066 = cljs.core.get.call(null,inst_21064__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21067 = cljs.core.get.call(null,inst_21064__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21112__$1 = (function (){var statearr_21127 = state_21112;
(statearr_21127[(12)] = inst_21064__$1);

(statearr_21127[(13)] = inst_21066);

(statearr_21127[(9)] = inst_21065);

return statearr_21127;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21112__$1,(22),inst_21067);
} else {
if((state_val_21113 === (31))){
var inst_21094 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21094)){
var statearr_21128_21187 = state_21112__$1;
(statearr_21128_21187[(1)] = (32));

} else {
var statearr_21129_21188 = state_21112__$1;
(statearr_21129_21188[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (32))){
var inst_21071 = (state_21112[(14)]);
var state_21112__$1 = state_21112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21112__$1,(35),out,inst_21071);
} else {
if((state_val_21113 === (33))){
var inst_21064 = (state_21112[(12)]);
var inst_21042 = inst_21064;
var state_21112__$1 = (function (){var statearr_21130 = state_21112;
(statearr_21130[(7)] = inst_21042);

return statearr_21130;
})();
var statearr_21131_21189 = state_21112__$1;
(statearr_21131_21189[(2)] = null);

(statearr_21131_21189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (13))){
var inst_21042 = (state_21112[(7)]);
var inst_21049 = inst_21042.cljs$lang$protocol_mask$partition0$;
var inst_21050 = (inst_21049 & (64));
var inst_21051 = inst_21042.cljs$core$ISeq$;
var inst_21052 = (inst_21050) || (inst_21051);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21052)){
var statearr_21132_21190 = state_21112__$1;
(statearr_21132_21190[(1)] = (16));

} else {
var statearr_21133_21191 = state_21112__$1;
(statearr_21133_21191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (22))){
var inst_21072 = (state_21112[(10)]);
var inst_21071 = (state_21112[(14)]);
var inst_21070 = (state_21112[(2)]);
var inst_21071__$1 = cljs.core.nth.call(null,inst_21070,(0),null);
var inst_21072__$1 = cljs.core.nth.call(null,inst_21070,(1),null);
var inst_21073 = (inst_21071__$1 == null);
var inst_21074 = cljs.core._EQ_.call(null,inst_21072__$1,change);
var inst_21075 = (inst_21073) || (inst_21074);
var state_21112__$1 = (function (){var statearr_21134 = state_21112;
(statearr_21134[(10)] = inst_21072__$1);

(statearr_21134[(14)] = inst_21071__$1);

return statearr_21134;
})();
if(cljs.core.truth_(inst_21075)){
var statearr_21135_21192 = state_21112__$1;
(statearr_21135_21192[(1)] = (23));

} else {
var statearr_21136_21193 = state_21112__$1;
(statearr_21136_21193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (36))){
var inst_21064 = (state_21112[(12)]);
var inst_21042 = inst_21064;
var state_21112__$1 = (function (){var statearr_21137 = state_21112;
(statearr_21137[(7)] = inst_21042);

return statearr_21137;
})();
var statearr_21138_21194 = state_21112__$1;
(statearr_21138_21194[(2)] = null);

(statearr_21138_21194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (29))){
var inst_21086 = (state_21112[(11)]);
var state_21112__$1 = state_21112;
var statearr_21139_21195 = state_21112__$1;
(statearr_21139_21195[(2)] = inst_21086);

(statearr_21139_21195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (6))){
var state_21112__$1 = state_21112;
var statearr_21140_21196 = state_21112__$1;
(statearr_21140_21196[(2)] = false);

(statearr_21140_21196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (28))){
var inst_21082 = (state_21112[(2)]);
var inst_21083 = calc_state.call(null);
var inst_21042 = inst_21083;
var state_21112__$1 = (function (){var statearr_21141 = state_21112;
(statearr_21141[(15)] = inst_21082);

(statearr_21141[(7)] = inst_21042);

return statearr_21141;
})();
var statearr_21142_21197 = state_21112__$1;
(statearr_21142_21197[(2)] = null);

(statearr_21142_21197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (25))){
var inst_21108 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
var statearr_21143_21198 = state_21112__$1;
(statearr_21143_21198[(2)] = inst_21108);

(statearr_21143_21198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (34))){
var inst_21106 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
var statearr_21144_21199 = state_21112__$1;
(statearr_21144_21199[(2)] = inst_21106);

(statearr_21144_21199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (17))){
var state_21112__$1 = state_21112;
var statearr_21145_21200 = state_21112__$1;
(statearr_21145_21200[(2)] = false);

(statearr_21145_21200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (3))){
var state_21112__$1 = state_21112;
var statearr_21146_21201 = state_21112__$1;
(statearr_21146_21201[(2)] = false);

(statearr_21146_21201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (12))){
var inst_21110 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21112__$1,inst_21110);
} else {
if((state_val_21113 === (2))){
var inst_21018 = (state_21112[(8)]);
var inst_21023 = inst_21018.cljs$lang$protocol_mask$partition0$;
var inst_21024 = (inst_21023 & (64));
var inst_21025 = inst_21018.cljs$core$ISeq$;
var inst_21026 = (inst_21024) || (inst_21025);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21026)){
var statearr_21147_21202 = state_21112__$1;
(statearr_21147_21202[(1)] = (5));

} else {
var statearr_21148_21203 = state_21112__$1;
(statearr_21148_21203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (23))){
var inst_21071 = (state_21112[(14)]);
var inst_21077 = (inst_21071 == null);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21077)){
var statearr_21149_21204 = state_21112__$1;
(statearr_21149_21204[(1)] = (26));

} else {
var statearr_21150_21205 = state_21112__$1;
(statearr_21150_21205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (35))){
var inst_21097 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
if(cljs.core.truth_(inst_21097)){
var statearr_21151_21206 = state_21112__$1;
(statearr_21151_21206[(1)] = (36));

} else {
var statearr_21152_21207 = state_21112__$1;
(statearr_21152_21207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (19))){
var inst_21042 = (state_21112[(7)]);
var inst_21061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21042);
var state_21112__$1 = state_21112;
var statearr_21153_21208 = state_21112__$1;
(statearr_21153_21208[(2)] = inst_21061);

(statearr_21153_21208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (11))){
var inst_21042 = (state_21112[(7)]);
var inst_21046 = (inst_21042 == null);
var inst_21047 = cljs.core.not.call(null,inst_21046);
var state_21112__$1 = state_21112;
if(inst_21047){
var statearr_21154_21209 = state_21112__$1;
(statearr_21154_21209[(1)] = (13));

} else {
var statearr_21155_21210 = state_21112__$1;
(statearr_21155_21210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (9))){
var inst_21018 = (state_21112[(8)]);
var state_21112__$1 = state_21112;
var statearr_21156_21211 = state_21112__$1;
(statearr_21156_21211[(2)] = inst_21018);

(statearr_21156_21211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (5))){
var state_21112__$1 = state_21112;
var statearr_21157_21212 = state_21112__$1;
(statearr_21157_21212[(2)] = true);

(statearr_21157_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (14))){
var state_21112__$1 = state_21112;
var statearr_21158_21213 = state_21112__$1;
(statearr_21158_21213[(2)] = false);

(statearr_21158_21213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (26))){
var inst_21072 = (state_21112[(10)]);
var inst_21079 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21072);
var state_21112__$1 = state_21112;
var statearr_21159_21214 = state_21112__$1;
(statearr_21159_21214[(2)] = inst_21079);

(statearr_21159_21214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (16))){
var state_21112__$1 = state_21112;
var statearr_21160_21215 = state_21112__$1;
(statearr_21160_21215[(2)] = true);

(statearr_21160_21215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (38))){
var inst_21102 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
var statearr_21161_21216 = state_21112__$1;
(statearr_21161_21216[(2)] = inst_21102);

(statearr_21161_21216[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (30))){
var inst_21066 = (state_21112[(13)]);
var inst_21065 = (state_21112[(9)]);
var inst_21072 = (state_21112[(10)]);
var inst_21089 = cljs.core.empty_QMARK_.call(null,inst_21065);
var inst_21090 = inst_21066.call(null,inst_21072);
var inst_21091 = cljs.core.not.call(null,inst_21090);
var inst_21092 = (inst_21089) && (inst_21091);
var state_21112__$1 = state_21112;
var statearr_21162_21217 = state_21112__$1;
(statearr_21162_21217[(2)] = inst_21092);

(statearr_21162_21217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (10))){
var inst_21018 = (state_21112[(8)]);
var inst_21038 = (state_21112[(2)]);
var inst_21039 = cljs.core.get.call(null,inst_21038,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21040 = cljs.core.get.call(null,inst_21038,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21041 = cljs.core.get.call(null,inst_21038,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21042 = inst_21018;
var state_21112__$1 = (function (){var statearr_21163 = state_21112;
(statearr_21163[(16)] = inst_21040);

(statearr_21163[(17)] = inst_21039);

(statearr_21163[(18)] = inst_21041);

(statearr_21163[(7)] = inst_21042);

return statearr_21163;
})();
var statearr_21164_21218 = state_21112__$1;
(statearr_21164_21218[(2)] = null);

(statearr_21164_21218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (18))){
var inst_21056 = (state_21112[(2)]);
var state_21112__$1 = state_21112;
var statearr_21165_21219 = state_21112__$1;
(statearr_21165_21219[(2)] = inst_21056);

(statearr_21165_21219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (37))){
var state_21112__$1 = state_21112;
var statearr_21166_21220 = state_21112__$1;
(statearr_21166_21220[(2)] = null);

(statearr_21166_21220[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21113 === (8))){
var inst_21018 = (state_21112[(8)]);
var inst_21035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21018);
var state_21112__$1 = state_21112;
var statearr_21167_21221 = state_21112__$1;
(statearr_21167_21221[(2)] = inst_21035);

(statearr_21167_21221[(1)] = (10));


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
});})(c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19350__auto__,c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19351__auto__ = null;
var cljs$core$async$mix_$_state_machine__19351__auto____0 = (function (){
var statearr_21171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21171[(0)] = cljs$core$async$mix_$_state_machine__19351__auto__);

(statearr_21171[(1)] = (1));

return statearr_21171;
});
var cljs$core$async$mix_$_state_machine__19351__auto____1 = (function (state_21112){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21172){if((e21172 instanceof Object)){
var ex__19354__auto__ = e21172;
var statearr_21173_21222 = state_21112;
(statearr_21173_21222[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21223 = state_21112;
state_21112 = G__21223;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19351__auto__ = function(state_21112){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19351__auto____1.call(this,state_21112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19351__auto____0;
cljs$core$async$mix_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19351__auto____1;
return cljs$core$async$mix_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19464__auto__ = (function (){var statearr_21174 = f__19463__auto__.call(null);
(statearr_21174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21175);

return statearr_21174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21175,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21224 = [];
var len__17884__auto___21227 = arguments.length;
var i__17885__auto___21228 = (0);
while(true){
if((i__17885__auto___21228 < len__17884__auto___21227)){
args21224.push((arguments[i__17885__auto___21228]));

var G__21229 = (i__17885__auto___21228 + (1));
i__17885__auto___21228 = G__21229;
continue;
} else {
}
break;
}

var G__21226 = args21224.length;
switch (G__21226) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21224.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
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
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
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
var args21232 = [];
var len__17884__auto___21357 = arguments.length;
var i__17885__auto___21358 = (0);
while(true){
if((i__17885__auto___21358 < len__17884__auto___21357)){
args21232.push((arguments[i__17885__auto___21358]));

var G__21359 = (i__17885__auto___21358 + (1));
i__17885__auto___21358 = G__21359;
continue;
} else {
}
break;
}

var G__21234 = args21232.length;
switch (G__21234) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21232.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21231_SHARP_){
if(cljs.core.truth_(p1__21231_SHARP_.call(null,topic))){
return p1__21231_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21235 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21236){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21236 = meta21236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21237,meta21236__$1){
var self__ = this;
var _21237__$1 = this;
return (new cljs.core.async.t_cljs$core$async21235(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21236__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21237){
var self__ = this;
var _21237__$1 = this;
return self__.meta21236;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21236","meta21236",1976928059,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21235";

cljs.core.async.t_cljs$core$async21235.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21235");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21235 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21235(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21236){
return (new cljs.core.async.t_cljs$core$async21235(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21236));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21235(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19462__auto___21361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21361,mults,ensure_mult,p){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21361,mults,ensure_mult,p){
return (function (state_21309){
var state_val_21310 = (state_21309[(1)]);
if((state_val_21310 === (7))){
var inst_21305 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21311_21362 = state_21309__$1;
(statearr_21311_21362[(2)] = inst_21305);

(statearr_21311_21362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (20))){
var state_21309__$1 = state_21309;
var statearr_21312_21363 = state_21309__$1;
(statearr_21312_21363[(2)] = null);

(statearr_21312_21363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (1))){
var state_21309__$1 = state_21309;
var statearr_21313_21364 = state_21309__$1;
(statearr_21313_21364[(2)] = null);

(statearr_21313_21364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (24))){
var inst_21288 = (state_21309[(7)]);
var inst_21297 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21288);
var state_21309__$1 = state_21309;
var statearr_21314_21365 = state_21309__$1;
(statearr_21314_21365[(2)] = inst_21297);

(statearr_21314_21365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (4))){
var inst_21240 = (state_21309[(8)]);
var inst_21240__$1 = (state_21309[(2)]);
var inst_21241 = (inst_21240__$1 == null);
var state_21309__$1 = (function (){var statearr_21315 = state_21309;
(statearr_21315[(8)] = inst_21240__$1);

return statearr_21315;
})();
if(cljs.core.truth_(inst_21241)){
var statearr_21316_21366 = state_21309__$1;
(statearr_21316_21366[(1)] = (5));

} else {
var statearr_21317_21367 = state_21309__$1;
(statearr_21317_21367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (15))){
var inst_21282 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21318_21368 = state_21309__$1;
(statearr_21318_21368[(2)] = inst_21282);

(statearr_21318_21368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (21))){
var inst_21302 = (state_21309[(2)]);
var state_21309__$1 = (function (){var statearr_21319 = state_21309;
(statearr_21319[(9)] = inst_21302);

return statearr_21319;
})();
var statearr_21320_21369 = state_21309__$1;
(statearr_21320_21369[(2)] = null);

(statearr_21320_21369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (13))){
var inst_21264 = (state_21309[(10)]);
var inst_21266 = cljs.core.chunked_seq_QMARK_.call(null,inst_21264);
var state_21309__$1 = state_21309;
if(inst_21266){
var statearr_21321_21370 = state_21309__$1;
(statearr_21321_21370[(1)] = (16));

} else {
var statearr_21322_21371 = state_21309__$1;
(statearr_21322_21371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (22))){
var inst_21294 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21294)){
var statearr_21323_21372 = state_21309__$1;
(statearr_21323_21372[(1)] = (23));

} else {
var statearr_21324_21373 = state_21309__$1;
(statearr_21324_21373[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (6))){
var inst_21288 = (state_21309[(7)]);
var inst_21290 = (state_21309[(11)]);
var inst_21240 = (state_21309[(8)]);
var inst_21288__$1 = topic_fn.call(null,inst_21240);
var inst_21289 = cljs.core.deref.call(null,mults);
var inst_21290__$1 = cljs.core.get.call(null,inst_21289,inst_21288__$1);
var state_21309__$1 = (function (){var statearr_21325 = state_21309;
(statearr_21325[(7)] = inst_21288__$1);

(statearr_21325[(11)] = inst_21290__$1);

return statearr_21325;
})();
if(cljs.core.truth_(inst_21290__$1)){
var statearr_21326_21374 = state_21309__$1;
(statearr_21326_21374[(1)] = (19));

} else {
var statearr_21327_21375 = state_21309__$1;
(statearr_21327_21375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (25))){
var inst_21299 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21328_21376 = state_21309__$1;
(statearr_21328_21376[(2)] = inst_21299);

(statearr_21328_21376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (17))){
var inst_21264 = (state_21309[(10)]);
var inst_21273 = cljs.core.first.call(null,inst_21264);
var inst_21274 = cljs.core.async.muxch_STAR_.call(null,inst_21273);
var inst_21275 = cljs.core.async.close_BANG_.call(null,inst_21274);
var inst_21276 = cljs.core.next.call(null,inst_21264);
var inst_21250 = inst_21276;
var inst_21251 = null;
var inst_21252 = (0);
var inst_21253 = (0);
var state_21309__$1 = (function (){var statearr_21329 = state_21309;
(statearr_21329[(12)] = inst_21251);

(statearr_21329[(13)] = inst_21250);

(statearr_21329[(14)] = inst_21275);

(statearr_21329[(15)] = inst_21252);

(statearr_21329[(16)] = inst_21253);

return statearr_21329;
})();
var statearr_21330_21377 = state_21309__$1;
(statearr_21330_21377[(2)] = null);

(statearr_21330_21377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (3))){
var inst_21307 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21309__$1,inst_21307);
} else {
if((state_val_21310 === (12))){
var inst_21284 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21331_21378 = state_21309__$1;
(statearr_21331_21378[(2)] = inst_21284);

(statearr_21331_21378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (2))){
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21309__$1,(4),ch);
} else {
if((state_val_21310 === (23))){
var state_21309__$1 = state_21309;
var statearr_21332_21379 = state_21309__$1;
(statearr_21332_21379[(2)] = null);

(statearr_21332_21379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (19))){
var inst_21290 = (state_21309[(11)]);
var inst_21240 = (state_21309[(8)]);
var inst_21292 = cljs.core.async.muxch_STAR_.call(null,inst_21290);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21309__$1,(22),inst_21292,inst_21240);
} else {
if((state_val_21310 === (11))){
var inst_21250 = (state_21309[(13)]);
var inst_21264 = (state_21309[(10)]);
var inst_21264__$1 = cljs.core.seq.call(null,inst_21250);
var state_21309__$1 = (function (){var statearr_21333 = state_21309;
(statearr_21333[(10)] = inst_21264__$1);

return statearr_21333;
})();
if(inst_21264__$1){
var statearr_21334_21380 = state_21309__$1;
(statearr_21334_21380[(1)] = (13));

} else {
var statearr_21335_21381 = state_21309__$1;
(statearr_21335_21381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (9))){
var inst_21286 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21336_21382 = state_21309__$1;
(statearr_21336_21382[(2)] = inst_21286);

(statearr_21336_21382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (5))){
var inst_21247 = cljs.core.deref.call(null,mults);
var inst_21248 = cljs.core.vals.call(null,inst_21247);
var inst_21249 = cljs.core.seq.call(null,inst_21248);
var inst_21250 = inst_21249;
var inst_21251 = null;
var inst_21252 = (0);
var inst_21253 = (0);
var state_21309__$1 = (function (){var statearr_21337 = state_21309;
(statearr_21337[(12)] = inst_21251);

(statearr_21337[(13)] = inst_21250);

(statearr_21337[(15)] = inst_21252);

(statearr_21337[(16)] = inst_21253);

return statearr_21337;
})();
var statearr_21338_21383 = state_21309__$1;
(statearr_21338_21383[(2)] = null);

(statearr_21338_21383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (14))){
var state_21309__$1 = state_21309;
var statearr_21342_21384 = state_21309__$1;
(statearr_21342_21384[(2)] = null);

(statearr_21342_21384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (16))){
var inst_21264 = (state_21309[(10)]);
var inst_21268 = cljs.core.chunk_first.call(null,inst_21264);
var inst_21269 = cljs.core.chunk_rest.call(null,inst_21264);
var inst_21270 = cljs.core.count.call(null,inst_21268);
var inst_21250 = inst_21269;
var inst_21251 = inst_21268;
var inst_21252 = inst_21270;
var inst_21253 = (0);
var state_21309__$1 = (function (){var statearr_21343 = state_21309;
(statearr_21343[(12)] = inst_21251);

(statearr_21343[(13)] = inst_21250);

(statearr_21343[(15)] = inst_21252);

(statearr_21343[(16)] = inst_21253);

return statearr_21343;
})();
var statearr_21344_21385 = state_21309__$1;
(statearr_21344_21385[(2)] = null);

(statearr_21344_21385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (10))){
var inst_21251 = (state_21309[(12)]);
var inst_21250 = (state_21309[(13)]);
var inst_21252 = (state_21309[(15)]);
var inst_21253 = (state_21309[(16)]);
var inst_21258 = cljs.core._nth.call(null,inst_21251,inst_21253);
var inst_21259 = cljs.core.async.muxch_STAR_.call(null,inst_21258);
var inst_21260 = cljs.core.async.close_BANG_.call(null,inst_21259);
var inst_21261 = (inst_21253 + (1));
var tmp21339 = inst_21251;
var tmp21340 = inst_21250;
var tmp21341 = inst_21252;
var inst_21250__$1 = tmp21340;
var inst_21251__$1 = tmp21339;
var inst_21252__$1 = tmp21341;
var inst_21253__$1 = inst_21261;
var state_21309__$1 = (function (){var statearr_21345 = state_21309;
(statearr_21345[(12)] = inst_21251__$1);

(statearr_21345[(13)] = inst_21250__$1);

(statearr_21345[(15)] = inst_21252__$1);

(statearr_21345[(16)] = inst_21253__$1);

(statearr_21345[(17)] = inst_21260);

return statearr_21345;
})();
var statearr_21346_21386 = state_21309__$1;
(statearr_21346_21386[(2)] = null);

(statearr_21346_21386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (18))){
var inst_21279 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21347_21387 = state_21309__$1;
(statearr_21347_21387[(2)] = inst_21279);

(statearr_21347_21387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (8))){
var inst_21252 = (state_21309[(15)]);
var inst_21253 = (state_21309[(16)]);
var inst_21255 = (inst_21253 < inst_21252);
var inst_21256 = inst_21255;
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21256)){
var statearr_21348_21388 = state_21309__$1;
(statearr_21348_21388[(1)] = (10));

} else {
var statearr_21349_21389 = state_21309__$1;
(statearr_21349_21389[(1)] = (11));

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
});})(c__19462__auto___21361,mults,ensure_mult,p))
;
return ((function (switch__19350__auto__,c__19462__auto___21361,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_21353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21353[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_21353[(1)] = (1));

return statearr_21353;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_21309){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21354){if((e21354 instanceof Object)){
var ex__19354__auto__ = e21354;
var statearr_21355_21390 = state_21309;
(statearr_21355_21390[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21391 = state_21309;
state_21309 = G__21391;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_21309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_21309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21361,mults,ensure_mult,p))
})();
var state__19464__auto__ = (function (){var statearr_21356 = f__19463__auto__.call(null);
(statearr_21356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21361);

return statearr_21356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21361,mults,ensure_mult,p))
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
var args21392 = [];
var len__17884__auto___21395 = arguments.length;
var i__17885__auto___21396 = (0);
while(true){
if((i__17885__auto___21396 < len__17884__auto___21395)){
args21392.push((arguments[i__17885__auto___21396]));

var G__21397 = (i__17885__auto___21396 + (1));
i__17885__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var G__21394 = args21392.length;
switch (G__21394) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21392.length)].join('')));

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
var args21399 = [];
var len__17884__auto___21402 = arguments.length;
var i__17885__auto___21403 = (0);
while(true){
if((i__17885__auto___21403 < len__17884__auto___21402)){
args21399.push((arguments[i__17885__auto___21403]));

var G__21404 = (i__17885__auto___21403 + (1));
i__17885__auto___21403 = G__21404;
continue;
} else {
}
break;
}

var G__21401 = args21399.length;
switch (G__21401) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21399.length)].join('')));

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
var args21406 = [];
var len__17884__auto___21477 = arguments.length;
var i__17885__auto___21478 = (0);
while(true){
if((i__17885__auto___21478 < len__17884__auto___21477)){
args21406.push((arguments[i__17885__auto___21478]));

var G__21479 = (i__17885__auto___21478 + (1));
i__17885__auto___21478 = G__21479;
continue;
} else {
}
break;
}

var G__21408 = args21406.length;
switch (G__21408) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21406.length)].join('')));

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
var c__19462__auto___21481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21447){
var state_val_21448 = (state_21447[(1)]);
if((state_val_21448 === (7))){
var state_21447__$1 = state_21447;
var statearr_21449_21482 = state_21447__$1;
(statearr_21449_21482[(2)] = null);

(statearr_21449_21482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (1))){
var state_21447__$1 = state_21447;
var statearr_21450_21483 = state_21447__$1;
(statearr_21450_21483[(2)] = null);

(statearr_21450_21483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (4))){
var inst_21411 = (state_21447[(7)]);
var inst_21413 = (inst_21411 < cnt);
var state_21447__$1 = state_21447;
if(cljs.core.truth_(inst_21413)){
var statearr_21451_21484 = state_21447__$1;
(statearr_21451_21484[(1)] = (6));

} else {
var statearr_21452_21485 = state_21447__$1;
(statearr_21452_21485[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (15))){
var inst_21443 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
var statearr_21453_21486 = state_21447__$1;
(statearr_21453_21486[(2)] = inst_21443);

(statearr_21453_21486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (13))){
var inst_21436 = cljs.core.async.close_BANG_.call(null,out);
var state_21447__$1 = state_21447;
var statearr_21454_21487 = state_21447__$1;
(statearr_21454_21487[(2)] = inst_21436);

(statearr_21454_21487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (6))){
var state_21447__$1 = state_21447;
var statearr_21455_21488 = state_21447__$1;
(statearr_21455_21488[(2)] = null);

(statearr_21455_21488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (3))){
var inst_21445 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21447__$1,inst_21445);
} else {
if((state_val_21448 === (12))){
var inst_21433 = (state_21447[(8)]);
var inst_21433__$1 = (state_21447[(2)]);
var inst_21434 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21433__$1);
var state_21447__$1 = (function (){var statearr_21456 = state_21447;
(statearr_21456[(8)] = inst_21433__$1);

return statearr_21456;
})();
if(cljs.core.truth_(inst_21434)){
var statearr_21457_21489 = state_21447__$1;
(statearr_21457_21489[(1)] = (13));

} else {
var statearr_21458_21490 = state_21447__$1;
(statearr_21458_21490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (2))){
var inst_21410 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21411 = (0);
var state_21447__$1 = (function (){var statearr_21459 = state_21447;
(statearr_21459[(7)] = inst_21411);

(statearr_21459[(9)] = inst_21410);

return statearr_21459;
})();
var statearr_21460_21491 = state_21447__$1;
(statearr_21460_21491[(2)] = null);

(statearr_21460_21491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (11))){
var inst_21411 = (state_21447[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21447,(10),Object,null,(9));
var inst_21420 = chs__$1.call(null,inst_21411);
var inst_21421 = done.call(null,inst_21411);
var inst_21422 = cljs.core.async.take_BANG_.call(null,inst_21420,inst_21421);
var state_21447__$1 = state_21447;
var statearr_21461_21492 = state_21447__$1;
(statearr_21461_21492[(2)] = inst_21422);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21447__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (9))){
var inst_21411 = (state_21447[(7)]);
var inst_21424 = (state_21447[(2)]);
var inst_21425 = (inst_21411 + (1));
var inst_21411__$1 = inst_21425;
var state_21447__$1 = (function (){var statearr_21462 = state_21447;
(statearr_21462[(7)] = inst_21411__$1);

(statearr_21462[(10)] = inst_21424);

return statearr_21462;
})();
var statearr_21463_21493 = state_21447__$1;
(statearr_21463_21493[(2)] = null);

(statearr_21463_21493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (5))){
var inst_21431 = (state_21447[(2)]);
var state_21447__$1 = (function (){var statearr_21464 = state_21447;
(statearr_21464[(11)] = inst_21431);

return statearr_21464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21447__$1,(12),dchan);
} else {
if((state_val_21448 === (14))){
var inst_21433 = (state_21447[(8)]);
var inst_21438 = cljs.core.apply.call(null,f,inst_21433);
var state_21447__$1 = state_21447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21447__$1,(16),out,inst_21438);
} else {
if((state_val_21448 === (16))){
var inst_21440 = (state_21447[(2)]);
var state_21447__$1 = (function (){var statearr_21465 = state_21447;
(statearr_21465[(12)] = inst_21440);

return statearr_21465;
})();
var statearr_21466_21494 = state_21447__$1;
(statearr_21466_21494[(2)] = null);

(statearr_21466_21494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (10))){
var inst_21415 = (state_21447[(2)]);
var inst_21416 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21447__$1 = (function (){var statearr_21467 = state_21447;
(statearr_21467[(13)] = inst_21415);

return statearr_21467;
})();
var statearr_21468_21495 = state_21447__$1;
(statearr_21468_21495[(2)] = inst_21416);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21447__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21448 === (8))){
var inst_21429 = (state_21447[(2)]);
var state_21447__$1 = state_21447;
var statearr_21469_21496 = state_21447__$1;
(statearr_21469_21496[(2)] = inst_21429);

(statearr_21469_21496[(1)] = (5));


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
});})(c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19350__auto__,c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_21473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21473[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_21473[(1)] = (1));

return statearr_21473;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_21447){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21474){if((e21474 instanceof Object)){
var ex__19354__auto__ = e21474;
var statearr_21475_21497 = state_21447;
(statearr_21475_21497[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21498 = state_21447;
state_21447 = G__21498;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_21447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_21447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19464__auto__ = (function (){var statearr_21476 = f__19463__auto__.call(null);
(statearr_21476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21481);

return statearr_21476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21481,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21500 = [];
var len__17884__auto___21556 = arguments.length;
var i__17885__auto___21557 = (0);
while(true){
if((i__17885__auto___21557 < len__17884__auto___21556)){
args21500.push((arguments[i__17885__auto___21557]));

var G__21558 = (i__17885__auto___21557 + (1));
i__17885__auto___21557 = G__21558;
continue;
} else {
}
break;
}

var G__21502 = args21500.length;
switch (G__21502) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21500.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___21560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21560,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21560,out){
return (function (state_21532){
var state_val_21533 = (state_21532[(1)]);
if((state_val_21533 === (7))){
var inst_21512 = (state_21532[(7)]);
var inst_21511 = (state_21532[(8)]);
var inst_21511__$1 = (state_21532[(2)]);
var inst_21512__$1 = cljs.core.nth.call(null,inst_21511__$1,(0),null);
var inst_21513 = cljs.core.nth.call(null,inst_21511__$1,(1),null);
var inst_21514 = (inst_21512__$1 == null);
var state_21532__$1 = (function (){var statearr_21534 = state_21532;
(statearr_21534[(7)] = inst_21512__$1);

(statearr_21534[(9)] = inst_21513);

(statearr_21534[(8)] = inst_21511__$1);

return statearr_21534;
})();
if(cljs.core.truth_(inst_21514)){
var statearr_21535_21561 = state_21532__$1;
(statearr_21535_21561[(1)] = (8));

} else {
var statearr_21536_21562 = state_21532__$1;
(statearr_21536_21562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (1))){
var inst_21503 = cljs.core.vec.call(null,chs);
var inst_21504 = inst_21503;
var state_21532__$1 = (function (){var statearr_21537 = state_21532;
(statearr_21537[(10)] = inst_21504);

return statearr_21537;
})();
var statearr_21538_21563 = state_21532__$1;
(statearr_21538_21563[(2)] = null);

(statearr_21538_21563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (4))){
var inst_21504 = (state_21532[(10)]);
var state_21532__$1 = state_21532;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21532__$1,(7),inst_21504);
} else {
if((state_val_21533 === (6))){
var inst_21528 = (state_21532[(2)]);
var state_21532__$1 = state_21532;
var statearr_21539_21564 = state_21532__$1;
(statearr_21539_21564[(2)] = inst_21528);

(statearr_21539_21564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (3))){
var inst_21530 = (state_21532[(2)]);
var state_21532__$1 = state_21532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21532__$1,inst_21530);
} else {
if((state_val_21533 === (2))){
var inst_21504 = (state_21532[(10)]);
var inst_21506 = cljs.core.count.call(null,inst_21504);
var inst_21507 = (inst_21506 > (0));
var state_21532__$1 = state_21532;
if(cljs.core.truth_(inst_21507)){
var statearr_21541_21565 = state_21532__$1;
(statearr_21541_21565[(1)] = (4));

} else {
var statearr_21542_21566 = state_21532__$1;
(statearr_21542_21566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (11))){
var inst_21504 = (state_21532[(10)]);
var inst_21521 = (state_21532[(2)]);
var tmp21540 = inst_21504;
var inst_21504__$1 = tmp21540;
var state_21532__$1 = (function (){var statearr_21543 = state_21532;
(statearr_21543[(11)] = inst_21521);

(statearr_21543[(10)] = inst_21504__$1);

return statearr_21543;
})();
var statearr_21544_21567 = state_21532__$1;
(statearr_21544_21567[(2)] = null);

(statearr_21544_21567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (9))){
var inst_21512 = (state_21532[(7)]);
var state_21532__$1 = state_21532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21532__$1,(11),out,inst_21512);
} else {
if((state_val_21533 === (5))){
var inst_21526 = cljs.core.async.close_BANG_.call(null,out);
var state_21532__$1 = state_21532;
var statearr_21545_21568 = state_21532__$1;
(statearr_21545_21568[(2)] = inst_21526);

(statearr_21545_21568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (10))){
var inst_21524 = (state_21532[(2)]);
var state_21532__$1 = state_21532;
var statearr_21546_21569 = state_21532__$1;
(statearr_21546_21569[(2)] = inst_21524);

(statearr_21546_21569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21533 === (8))){
var inst_21512 = (state_21532[(7)]);
var inst_21513 = (state_21532[(9)]);
var inst_21504 = (state_21532[(10)]);
var inst_21511 = (state_21532[(8)]);
var inst_21516 = (function (){var cs = inst_21504;
var vec__21509 = inst_21511;
var v = inst_21512;
var c = inst_21513;
return ((function (cs,vec__21509,v,c,inst_21512,inst_21513,inst_21504,inst_21511,state_val_21533,c__19462__auto___21560,out){
return (function (p1__21499_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21499_SHARP_);
});
;})(cs,vec__21509,v,c,inst_21512,inst_21513,inst_21504,inst_21511,state_val_21533,c__19462__auto___21560,out))
})();
var inst_21517 = cljs.core.filterv.call(null,inst_21516,inst_21504);
var inst_21504__$1 = inst_21517;
var state_21532__$1 = (function (){var statearr_21547 = state_21532;
(statearr_21547[(10)] = inst_21504__$1);

return statearr_21547;
})();
var statearr_21548_21570 = state_21532__$1;
(statearr_21548_21570[(2)] = null);

(statearr_21548_21570[(1)] = (2));


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
});})(c__19462__auto___21560,out))
;
return ((function (switch__19350__auto__,c__19462__auto___21560,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_21552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21552[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_21552[(1)] = (1));

return statearr_21552;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_21532){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21553){if((e21553 instanceof Object)){
var ex__19354__auto__ = e21553;
var statearr_21554_21571 = state_21532;
(statearr_21554_21571[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21572 = state_21532;
state_21532 = G__21572;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_21532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_21532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21560,out))
})();
var state__19464__auto__ = (function (){var statearr_21555 = f__19463__auto__.call(null);
(statearr_21555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21560);

return statearr_21555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21560,out))
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
var args21573 = [];
var len__17884__auto___21622 = arguments.length;
var i__17885__auto___21623 = (0);
while(true){
if((i__17885__auto___21623 < len__17884__auto___21622)){
args21573.push((arguments[i__17885__auto___21623]));

var G__21624 = (i__17885__auto___21623 + (1));
i__17885__auto___21623 = G__21624;
continue;
} else {
}
break;
}

var G__21575 = args21573.length;
switch (G__21575) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21573.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___21626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21626,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21626,out){
return (function (state_21599){
var state_val_21600 = (state_21599[(1)]);
if((state_val_21600 === (7))){
var inst_21581 = (state_21599[(7)]);
var inst_21581__$1 = (state_21599[(2)]);
var inst_21582 = (inst_21581__$1 == null);
var inst_21583 = cljs.core.not.call(null,inst_21582);
var state_21599__$1 = (function (){var statearr_21601 = state_21599;
(statearr_21601[(7)] = inst_21581__$1);

return statearr_21601;
})();
if(inst_21583){
var statearr_21602_21627 = state_21599__$1;
(statearr_21602_21627[(1)] = (8));

} else {
var statearr_21603_21628 = state_21599__$1;
(statearr_21603_21628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (1))){
var inst_21576 = (0);
var state_21599__$1 = (function (){var statearr_21604 = state_21599;
(statearr_21604[(8)] = inst_21576);

return statearr_21604;
})();
var statearr_21605_21629 = state_21599__$1;
(statearr_21605_21629[(2)] = null);

(statearr_21605_21629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (4))){
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21599__$1,(7),ch);
} else {
if((state_val_21600 === (6))){
var inst_21594 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21606_21630 = state_21599__$1;
(statearr_21606_21630[(2)] = inst_21594);

(statearr_21606_21630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (3))){
var inst_21596 = (state_21599[(2)]);
var inst_21597 = cljs.core.async.close_BANG_.call(null,out);
var state_21599__$1 = (function (){var statearr_21607 = state_21599;
(statearr_21607[(9)] = inst_21596);

return statearr_21607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21599__$1,inst_21597);
} else {
if((state_val_21600 === (2))){
var inst_21576 = (state_21599[(8)]);
var inst_21578 = (inst_21576 < n);
var state_21599__$1 = state_21599;
if(cljs.core.truth_(inst_21578)){
var statearr_21608_21631 = state_21599__$1;
(statearr_21608_21631[(1)] = (4));

} else {
var statearr_21609_21632 = state_21599__$1;
(statearr_21609_21632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (11))){
var inst_21576 = (state_21599[(8)]);
var inst_21586 = (state_21599[(2)]);
var inst_21587 = (inst_21576 + (1));
var inst_21576__$1 = inst_21587;
var state_21599__$1 = (function (){var statearr_21610 = state_21599;
(statearr_21610[(10)] = inst_21586);

(statearr_21610[(8)] = inst_21576__$1);

return statearr_21610;
})();
var statearr_21611_21633 = state_21599__$1;
(statearr_21611_21633[(2)] = null);

(statearr_21611_21633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (9))){
var state_21599__$1 = state_21599;
var statearr_21612_21634 = state_21599__$1;
(statearr_21612_21634[(2)] = null);

(statearr_21612_21634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (5))){
var state_21599__$1 = state_21599;
var statearr_21613_21635 = state_21599__$1;
(statearr_21613_21635[(2)] = null);

(statearr_21613_21635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (10))){
var inst_21591 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21614_21636 = state_21599__$1;
(statearr_21614_21636[(2)] = inst_21591);

(statearr_21614_21636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (8))){
var inst_21581 = (state_21599[(7)]);
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21599__$1,(11),out,inst_21581);
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
});})(c__19462__auto___21626,out))
;
return ((function (switch__19350__auto__,c__19462__auto___21626,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_21618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21618[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_21618[(1)] = (1));

return statearr_21618;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_21599){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21619){if((e21619 instanceof Object)){
var ex__19354__auto__ = e21619;
var statearr_21620_21637 = state_21599;
(statearr_21620_21637[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21638 = state_21599;
state_21599 = G__21638;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_21599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_21599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21626,out))
})();
var state__19464__auto__ = (function (){var statearr_21621 = f__19463__auto__.call(null);
(statearr_21621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21626);

return statearr_21621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21626,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21646 = (function (map_LT_,f,ch,meta21647){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21647 = meta21647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21648,meta21647__$1){
var self__ = this;
var _21648__$1 = this;
return (new cljs.core.async.t_cljs$core$async21646(self__.map_LT_,self__.f,self__.ch,meta21647__$1));
});

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21648){
var self__ = this;
var _21648__$1 = this;
return self__.meta21647;
});

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21649 = (function (map_LT_,f,ch,meta21647,_,fn1,meta21650){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21647 = meta21647;
this._ = _;
this.fn1 = fn1;
this.meta21650 = meta21650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21651,meta21650__$1){
var self__ = this;
var _21651__$1 = this;
return (new cljs.core.async.t_cljs$core$async21649(self__.map_LT_,self__.f,self__.ch,self__.meta21647,self__._,self__.fn1,meta21650__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21651){
var self__ = this;
var _21651__$1 = this;
return self__.meta21650;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21639_SHARP_){
return f1.call(null,(((p1__21639_SHARP_ == null))?null:self__.f.call(null,p1__21639_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21647","meta21647",-1487879640,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21646","cljs.core.async/t_cljs$core$async21646",2139743985,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21650","meta21650",-1674432396,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21649";

cljs.core.async.t_cljs$core$async21649.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21649");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21649 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21649(map_LT___$1,f__$1,ch__$1,meta21647__$1,___$2,fn1__$1,meta21650){
return (new cljs.core.async.t_cljs$core$async21649(map_LT___$1,f__$1,ch__$1,meta21647__$1,___$2,fn1__$1,meta21650));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21649(self__.map_LT_,self__.f,self__.ch,self__.meta21647,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21647","meta21647",-1487879640,null)], null);
});

cljs.core.async.t_cljs$core$async21646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21646";

cljs.core.async.t_cljs$core$async21646.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21646");
});

cljs.core.async.__GT_t_cljs$core$async21646 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21646(map_LT___$1,f__$1,ch__$1,meta21647){
return (new cljs.core.async.t_cljs$core$async21646(map_LT___$1,f__$1,ch__$1,meta21647));
});

}

return (new cljs.core.async.t_cljs$core$async21646(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21655 = (function (map_GT_,f,ch,meta21656){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21656 = meta21656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21657,meta21656__$1){
var self__ = this;
var _21657__$1 = this;
return (new cljs.core.async.t_cljs$core$async21655(self__.map_GT_,self__.f,self__.ch,meta21656__$1));
});

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21657){
var self__ = this;
var _21657__$1 = this;
return self__.meta21656;
});

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21656","meta21656",1169239803,null)], null);
});

cljs.core.async.t_cljs$core$async21655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21655";

cljs.core.async.t_cljs$core$async21655.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21655");
});

cljs.core.async.__GT_t_cljs$core$async21655 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21655(map_GT___$1,f__$1,ch__$1,meta21656){
return (new cljs.core.async.t_cljs$core$async21655(map_GT___$1,f__$1,ch__$1,meta21656));
});

}

return (new cljs.core.async.t_cljs$core$async21655(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21661 = (function (filter_GT_,p,ch,meta21662){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21662 = meta21662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21663,meta21662__$1){
var self__ = this;
var _21663__$1 = this;
return (new cljs.core.async.t_cljs$core$async21661(self__.filter_GT_,self__.p,self__.ch,meta21662__$1));
});

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21663){
var self__ = this;
var _21663__$1 = this;
return self__.meta21662;
});

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21662","meta21662",-568523972,null)], null);
});

cljs.core.async.t_cljs$core$async21661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21661";

cljs.core.async.t_cljs$core$async21661.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21661");
});

cljs.core.async.__GT_t_cljs$core$async21661 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21661(filter_GT___$1,p__$1,ch__$1,meta21662){
return (new cljs.core.async.t_cljs$core$async21661(filter_GT___$1,p__$1,ch__$1,meta21662));
});

}

return (new cljs.core.async.t_cljs$core$async21661(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21664 = [];
var len__17884__auto___21708 = arguments.length;
var i__17885__auto___21709 = (0);
while(true){
if((i__17885__auto___21709 < len__17884__auto___21708)){
args21664.push((arguments[i__17885__auto___21709]));

var G__21710 = (i__17885__auto___21709 + (1));
i__17885__auto___21709 = G__21710;
continue;
} else {
}
break;
}

var G__21666 = args21664.length;
switch (G__21666) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21664.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___21712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___21712,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___21712,out){
return (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (7))){
var inst_21683 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21689_21713 = state_21687__$1;
(statearr_21689_21713[(2)] = inst_21683);

(statearr_21689_21713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (1))){
var state_21687__$1 = state_21687;
var statearr_21690_21714 = state_21687__$1;
(statearr_21690_21714[(2)] = null);

(statearr_21690_21714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (4))){
var inst_21669 = (state_21687[(7)]);
var inst_21669__$1 = (state_21687[(2)]);
var inst_21670 = (inst_21669__$1 == null);
var state_21687__$1 = (function (){var statearr_21691 = state_21687;
(statearr_21691[(7)] = inst_21669__$1);

return statearr_21691;
})();
if(cljs.core.truth_(inst_21670)){
var statearr_21692_21715 = state_21687__$1;
(statearr_21692_21715[(1)] = (5));

} else {
var statearr_21693_21716 = state_21687__$1;
(statearr_21693_21716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var inst_21669 = (state_21687[(7)]);
var inst_21674 = p.call(null,inst_21669);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21674)){
var statearr_21694_21717 = state_21687__$1;
(statearr_21694_21717[(1)] = (8));

} else {
var statearr_21695_21718 = state_21687__$1;
(statearr_21695_21718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (3))){
var inst_21685 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (2))){
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21687__$1,(4),ch);
} else {
if((state_val_21688 === (11))){
var inst_21677 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21696_21719 = state_21687__$1;
(statearr_21696_21719[(2)] = inst_21677);

(statearr_21696_21719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (9))){
var state_21687__$1 = state_21687;
var statearr_21697_21720 = state_21687__$1;
(statearr_21697_21720[(2)] = null);

(statearr_21697_21720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (5))){
var inst_21672 = cljs.core.async.close_BANG_.call(null,out);
var state_21687__$1 = state_21687;
var statearr_21698_21721 = state_21687__$1;
(statearr_21698_21721[(2)] = inst_21672);

(statearr_21698_21721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (10))){
var inst_21680 = (state_21687[(2)]);
var state_21687__$1 = (function (){var statearr_21699 = state_21687;
(statearr_21699[(8)] = inst_21680);

return statearr_21699;
})();
var statearr_21700_21722 = state_21687__$1;
(statearr_21700_21722[(2)] = null);

(statearr_21700_21722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (8))){
var inst_21669 = (state_21687[(7)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(11),out,inst_21669);
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
});})(c__19462__auto___21712,out))
;
return ((function (switch__19350__auto__,c__19462__auto___21712,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_21704 = [null,null,null,null,null,null,null,null,null];
(statearr_21704[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_21704[(1)] = (1));

return statearr_21704;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_21687){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21705){if((e21705 instanceof Object)){
var ex__19354__auto__ = e21705;
var statearr_21706_21723 = state_21687;
(statearr_21706_21723[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21724 = state_21687;
state_21687 = G__21724;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___21712,out))
})();
var state__19464__auto__ = (function (){var statearr_21707 = f__19463__auto__.call(null);
(statearr_21707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___21712);

return statearr_21707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___21712,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21725 = [];
var len__17884__auto___21728 = arguments.length;
var i__17885__auto___21729 = (0);
while(true){
if((i__17885__auto___21729 < len__17884__auto___21728)){
args21725.push((arguments[i__17885__auto___21729]));

var G__21730 = (i__17885__auto___21729 + (1));
i__17885__auto___21729 = G__21730;
continue;
} else {
}
break;
}

var G__21727 = args21725.length;
switch (G__21727) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21725.length)].join('')));

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
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_21897){
var state_val_21898 = (state_21897[(1)]);
if((state_val_21898 === (7))){
var inst_21893 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
var statearr_21899_21940 = state_21897__$1;
(statearr_21899_21940[(2)] = inst_21893);

(statearr_21899_21940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (20))){
var inst_21863 = (state_21897[(7)]);
var inst_21874 = (state_21897[(2)]);
var inst_21875 = cljs.core.next.call(null,inst_21863);
var inst_21849 = inst_21875;
var inst_21850 = null;
var inst_21851 = (0);
var inst_21852 = (0);
var state_21897__$1 = (function (){var statearr_21900 = state_21897;
(statearr_21900[(8)] = inst_21851);

(statearr_21900[(9)] = inst_21850);

(statearr_21900[(10)] = inst_21874);

(statearr_21900[(11)] = inst_21852);

(statearr_21900[(12)] = inst_21849);

return statearr_21900;
})();
var statearr_21901_21941 = state_21897__$1;
(statearr_21901_21941[(2)] = null);

(statearr_21901_21941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (1))){
var state_21897__$1 = state_21897;
var statearr_21902_21942 = state_21897__$1;
(statearr_21902_21942[(2)] = null);

(statearr_21902_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (4))){
var inst_21838 = (state_21897[(13)]);
var inst_21838__$1 = (state_21897[(2)]);
var inst_21839 = (inst_21838__$1 == null);
var state_21897__$1 = (function (){var statearr_21903 = state_21897;
(statearr_21903[(13)] = inst_21838__$1);

return statearr_21903;
})();
if(cljs.core.truth_(inst_21839)){
var statearr_21904_21943 = state_21897__$1;
(statearr_21904_21943[(1)] = (5));

} else {
var statearr_21905_21944 = state_21897__$1;
(statearr_21905_21944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (15))){
var state_21897__$1 = state_21897;
var statearr_21909_21945 = state_21897__$1;
(statearr_21909_21945[(2)] = null);

(statearr_21909_21945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (21))){
var state_21897__$1 = state_21897;
var statearr_21910_21946 = state_21897__$1;
(statearr_21910_21946[(2)] = null);

(statearr_21910_21946[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (13))){
var inst_21851 = (state_21897[(8)]);
var inst_21850 = (state_21897[(9)]);
var inst_21852 = (state_21897[(11)]);
var inst_21849 = (state_21897[(12)]);
var inst_21859 = (state_21897[(2)]);
var inst_21860 = (inst_21852 + (1));
var tmp21906 = inst_21851;
var tmp21907 = inst_21850;
var tmp21908 = inst_21849;
var inst_21849__$1 = tmp21908;
var inst_21850__$1 = tmp21907;
var inst_21851__$1 = tmp21906;
var inst_21852__$1 = inst_21860;
var state_21897__$1 = (function (){var statearr_21911 = state_21897;
(statearr_21911[(8)] = inst_21851__$1);

(statearr_21911[(9)] = inst_21850__$1);

(statearr_21911[(14)] = inst_21859);

(statearr_21911[(11)] = inst_21852__$1);

(statearr_21911[(12)] = inst_21849__$1);

return statearr_21911;
})();
var statearr_21912_21947 = state_21897__$1;
(statearr_21912_21947[(2)] = null);

(statearr_21912_21947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (22))){
var state_21897__$1 = state_21897;
var statearr_21913_21948 = state_21897__$1;
(statearr_21913_21948[(2)] = null);

(statearr_21913_21948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (6))){
var inst_21838 = (state_21897[(13)]);
var inst_21847 = f.call(null,inst_21838);
var inst_21848 = cljs.core.seq.call(null,inst_21847);
var inst_21849 = inst_21848;
var inst_21850 = null;
var inst_21851 = (0);
var inst_21852 = (0);
var state_21897__$1 = (function (){var statearr_21914 = state_21897;
(statearr_21914[(8)] = inst_21851);

(statearr_21914[(9)] = inst_21850);

(statearr_21914[(11)] = inst_21852);

(statearr_21914[(12)] = inst_21849);

return statearr_21914;
})();
var statearr_21915_21949 = state_21897__$1;
(statearr_21915_21949[(2)] = null);

(statearr_21915_21949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (17))){
var inst_21863 = (state_21897[(7)]);
var inst_21867 = cljs.core.chunk_first.call(null,inst_21863);
var inst_21868 = cljs.core.chunk_rest.call(null,inst_21863);
var inst_21869 = cljs.core.count.call(null,inst_21867);
var inst_21849 = inst_21868;
var inst_21850 = inst_21867;
var inst_21851 = inst_21869;
var inst_21852 = (0);
var state_21897__$1 = (function (){var statearr_21916 = state_21897;
(statearr_21916[(8)] = inst_21851);

(statearr_21916[(9)] = inst_21850);

(statearr_21916[(11)] = inst_21852);

(statearr_21916[(12)] = inst_21849);

return statearr_21916;
})();
var statearr_21917_21950 = state_21897__$1;
(statearr_21917_21950[(2)] = null);

(statearr_21917_21950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (3))){
var inst_21895 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21897__$1,inst_21895);
} else {
if((state_val_21898 === (12))){
var inst_21883 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
var statearr_21918_21951 = state_21897__$1;
(statearr_21918_21951[(2)] = inst_21883);

(statearr_21918_21951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (2))){
var state_21897__$1 = state_21897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21897__$1,(4),in$);
} else {
if((state_val_21898 === (23))){
var inst_21891 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
var statearr_21919_21952 = state_21897__$1;
(statearr_21919_21952[(2)] = inst_21891);

(statearr_21919_21952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (19))){
var inst_21878 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
var statearr_21920_21953 = state_21897__$1;
(statearr_21920_21953[(2)] = inst_21878);

(statearr_21920_21953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (11))){
var inst_21863 = (state_21897[(7)]);
var inst_21849 = (state_21897[(12)]);
var inst_21863__$1 = cljs.core.seq.call(null,inst_21849);
var state_21897__$1 = (function (){var statearr_21921 = state_21897;
(statearr_21921[(7)] = inst_21863__$1);

return statearr_21921;
})();
if(inst_21863__$1){
var statearr_21922_21954 = state_21897__$1;
(statearr_21922_21954[(1)] = (14));

} else {
var statearr_21923_21955 = state_21897__$1;
(statearr_21923_21955[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (9))){
var inst_21885 = (state_21897[(2)]);
var inst_21886 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21897__$1 = (function (){var statearr_21924 = state_21897;
(statearr_21924[(15)] = inst_21885);

return statearr_21924;
})();
if(cljs.core.truth_(inst_21886)){
var statearr_21925_21956 = state_21897__$1;
(statearr_21925_21956[(1)] = (21));

} else {
var statearr_21926_21957 = state_21897__$1;
(statearr_21926_21957[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (5))){
var inst_21841 = cljs.core.async.close_BANG_.call(null,out);
var state_21897__$1 = state_21897;
var statearr_21927_21958 = state_21897__$1;
(statearr_21927_21958[(2)] = inst_21841);

(statearr_21927_21958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (14))){
var inst_21863 = (state_21897[(7)]);
var inst_21865 = cljs.core.chunked_seq_QMARK_.call(null,inst_21863);
var state_21897__$1 = state_21897;
if(inst_21865){
var statearr_21928_21959 = state_21897__$1;
(statearr_21928_21959[(1)] = (17));

} else {
var statearr_21929_21960 = state_21897__$1;
(statearr_21929_21960[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (16))){
var inst_21881 = (state_21897[(2)]);
var state_21897__$1 = state_21897;
var statearr_21930_21961 = state_21897__$1;
(statearr_21930_21961[(2)] = inst_21881);

(statearr_21930_21961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21898 === (10))){
var inst_21850 = (state_21897[(9)]);
var inst_21852 = (state_21897[(11)]);
var inst_21857 = cljs.core._nth.call(null,inst_21850,inst_21852);
var state_21897__$1 = state_21897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21897__$1,(13),out,inst_21857);
} else {
if((state_val_21898 === (18))){
var inst_21863 = (state_21897[(7)]);
var inst_21872 = cljs.core.first.call(null,inst_21863);
var state_21897__$1 = state_21897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21897__$1,(20),out,inst_21872);
} else {
if((state_val_21898 === (8))){
var inst_21851 = (state_21897[(8)]);
var inst_21852 = (state_21897[(11)]);
var inst_21854 = (inst_21852 < inst_21851);
var inst_21855 = inst_21854;
var state_21897__$1 = state_21897;
if(cljs.core.truth_(inst_21855)){
var statearr_21931_21962 = state_21897__$1;
(statearr_21931_21962[(1)] = (10));

} else {
var statearr_21932_21963 = state_21897__$1;
(statearr_21932_21963[(1)] = (11));

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
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____0 = (function (){
var statearr_21936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21936[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__);

(statearr_21936[(1)] = (1));

return statearr_21936;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____1 = (function (state_21897){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_21897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e21937){if((e21937 instanceof Object)){
var ex__19354__auto__ = e21937;
var statearr_21938_21964 = state_21897;
(statearr_21938_21964[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21965 = state_21897;
state_21897 = G__21965;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__ = function(state_21897){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____1.call(this,state_21897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19351__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_21939 = f__19463__auto__.call(null);
(statearr_21939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_21939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21966 = [];
var len__17884__auto___21969 = arguments.length;
var i__17885__auto___21970 = (0);
while(true){
if((i__17885__auto___21970 < len__17884__auto___21969)){
args21966.push((arguments[i__17885__auto___21970]));

var G__21971 = (i__17885__auto___21970 + (1));
i__17885__auto___21970 = G__21971;
continue;
} else {
}
break;
}

var G__21968 = args21966.length;
switch (G__21968) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21966.length)].join('')));

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
var args21973 = [];
var len__17884__auto___21976 = arguments.length;
var i__17885__auto___21977 = (0);
while(true){
if((i__17885__auto___21977 < len__17884__auto___21976)){
args21973.push((arguments[i__17885__auto___21977]));

var G__21978 = (i__17885__auto___21977 + (1));
i__17885__auto___21977 = G__21978;
continue;
} else {
}
break;
}

var G__21975 = args21973.length;
switch (G__21975) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21973.length)].join('')));

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
var args21980 = [];
var len__17884__auto___22031 = arguments.length;
var i__17885__auto___22032 = (0);
while(true){
if((i__17885__auto___22032 < len__17884__auto___22031)){
args21980.push((arguments[i__17885__auto___22032]));

var G__22033 = (i__17885__auto___22032 + (1));
i__17885__auto___22032 = G__22033;
continue;
} else {
}
break;
}

var G__21982 = args21980.length;
switch (G__21982) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21980.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___22035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___22035,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___22035,out){
return (function (state_22006){
var state_val_22007 = (state_22006[(1)]);
if((state_val_22007 === (7))){
var inst_22001 = (state_22006[(2)]);
var state_22006__$1 = state_22006;
var statearr_22008_22036 = state_22006__$1;
(statearr_22008_22036[(2)] = inst_22001);

(statearr_22008_22036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (1))){
var inst_21983 = null;
var state_22006__$1 = (function (){var statearr_22009 = state_22006;
(statearr_22009[(7)] = inst_21983);

return statearr_22009;
})();
var statearr_22010_22037 = state_22006__$1;
(statearr_22010_22037[(2)] = null);

(statearr_22010_22037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (4))){
var inst_21986 = (state_22006[(8)]);
var inst_21986__$1 = (state_22006[(2)]);
var inst_21987 = (inst_21986__$1 == null);
var inst_21988 = cljs.core.not.call(null,inst_21987);
var state_22006__$1 = (function (){var statearr_22011 = state_22006;
(statearr_22011[(8)] = inst_21986__$1);

return statearr_22011;
})();
if(inst_21988){
var statearr_22012_22038 = state_22006__$1;
(statearr_22012_22038[(1)] = (5));

} else {
var statearr_22013_22039 = state_22006__$1;
(statearr_22013_22039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (6))){
var state_22006__$1 = state_22006;
var statearr_22014_22040 = state_22006__$1;
(statearr_22014_22040[(2)] = null);

(statearr_22014_22040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (3))){
var inst_22003 = (state_22006[(2)]);
var inst_22004 = cljs.core.async.close_BANG_.call(null,out);
var state_22006__$1 = (function (){var statearr_22015 = state_22006;
(statearr_22015[(9)] = inst_22003);

return statearr_22015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22006__$1,inst_22004);
} else {
if((state_val_22007 === (2))){
var state_22006__$1 = state_22006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22006__$1,(4),ch);
} else {
if((state_val_22007 === (11))){
var inst_21986 = (state_22006[(8)]);
var inst_21995 = (state_22006[(2)]);
var inst_21983 = inst_21986;
var state_22006__$1 = (function (){var statearr_22016 = state_22006;
(statearr_22016[(7)] = inst_21983);

(statearr_22016[(10)] = inst_21995);

return statearr_22016;
})();
var statearr_22017_22041 = state_22006__$1;
(statearr_22017_22041[(2)] = null);

(statearr_22017_22041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (9))){
var inst_21986 = (state_22006[(8)]);
var state_22006__$1 = state_22006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22006__$1,(11),out,inst_21986);
} else {
if((state_val_22007 === (5))){
var inst_21983 = (state_22006[(7)]);
var inst_21986 = (state_22006[(8)]);
var inst_21990 = cljs.core._EQ_.call(null,inst_21986,inst_21983);
var state_22006__$1 = state_22006;
if(inst_21990){
var statearr_22019_22042 = state_22006__$1;
(statearr_22019_22042[(1)] = (8));

} else {
var statearr_22020_22043 = state_22006__$1;
(statearr_22020_22043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (10))){
var inst_21998 = (state_22006[(2)]);
var state_22006__$1 = state_22006;
var statearr_22021_22044 = state_22006__$1;
(statearr_22021_22044[(2)] = inst_21998);

(statearr_22021_22044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22007 === (8))){
var inst_21983 = (state_22006[(7)]);
var tmp22018 = inst_21983;
var inst_21983__$1 = tmp22018;
var state_22006__$1 = (function (){var statearr_22022 = state_22006;
(statearr_22022[(7)] = inst_21983__$1);

return statearr_22022;
})();
var statearr_22023_22045 = state_22006__$1;
(statearr_22023_22045[(2)] = null);

(statearr_22023_22045[(1)] = (2));


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
});})(c__19462__auto___22035,out))
;
return ((function (switch__19350__auto__,c__19462__auto___22035,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_22027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22027[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_22027[(1)] = (1));

return statearr_22027;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_22006){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_22006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e22028){if((e22028 instanceof Object)){
var ex__19354__auto__ = e22028;
var statearr_22029_22046 = state_22006;
(statearr_22029_22046[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22047 = state_22006;
state_22006 = G__22047;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_22006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_22006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___22035,out))
})();
var state__19464__auto__ = (function (){var statearr_22030 = f__19463__auto__.call(null);
(statearr_22030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___22035);

return statearr_22030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___22035,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22048 = [];
var len__17884__auto___22118 = arguments.length;
var i__17885__auto___22119 = (0);
while(true){
if((i__17885__auto___22119 < len__17884__auto___22118)){
args22048.push((arguments[i__17885__auto___22119]));

var G__22120 = (i__17885__auto___22119 + (1));
i__17885__auto___22119 = G__22120;
continue;
} else {
}
break;
}

var G__22050 = args22048.length;
switch (G__22050) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22048.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___22122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___22122,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___22122,out){
return (function (state_22088){
var state_val_22089 = (state_22088[(1)]);
if((state_val_22089 === (7))){
var inst_22084 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22090_22123 = state_22088__$1;
(statearr_22090_22123[(2)] = inst_22084);

(statearr_22090_22123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (1))){
var inst_22051 = (new Array(n));
var inst_22052 = inst_22051;
var inst_22053 = (0);
var state_22088__$1 = (function (){var statearr_22091 = state_22088;
(statearr_22091[(7)] = inst_22053);

(statearr_22091[(8)] = inst_22052);

return statearr_22091;
})();
var statearr_22092_22124 = state_22088__$1;
(statearr_22092_22124[(2)] = null);

(statearr_22092_22124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (4))){
var inst_22056 = (state_22088[(9)]);
var inst_22056__$1 = (state_22088[(2)]);
var inst_22057 = (inst_22056__$1 == null);
var inst_22058 = cljs.core.not.call(null,inst_22057);
var state_22088__$1 = (function (){var statearr_22093 = state_22088;
(statearr_22093[(9)] = inst_22056__$1);

return statearr_22093;
})();
if(inst_22058){
var statearr_22094_22125 = state_22088__$1;
(statearr_22094_22125[(1)] = (5));

} else {
var statearr_22095_22126 = state_22088__$1;
(statearr_22095_22126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (15))){
var inst_22078 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22096_22127 = state_22088__$1;
(statearr_22096_22127[(2)] = inst_22078);

(statearr_22096_22127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (13))){
var state_22088__$1 = state_22088;
var statearr_22097_22128 = state_22088__$1;
(statearr_22097_22128[(2)] = null);

(statearr_22097_22128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (6))){
var inst_22053 = (state_22088[(7)]);
var inst_22074 = (inst_22053 > (0));
var state_22088__$1 = state_22088;
if(cljs.core.truth_(inst_22074)){
var statearr_22098_22129 = state_22088__$1;
(statearr_22098_22129[(1)] = (12));

} else {
var statearr_22099_22130 = state_22088__$1;
(statearr_22099_22130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (3))){
var inst_22086 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22088__$1,inst_22086);
} else {
if((state_val_22089 === (12))){
var inst_22052 = (state_22088[(8)]);
var inst_22076 = cljs.core.vec.call(null,inst_22052);
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22088__$1,(15),out,inst_22076);
} else {
if((state_val_22089 === (2))){
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22088__$1,(4),ch);
} else {
if((state_val_22089 === (11))){
var inst_22068 = (state_22088[(2)]);
var inst_22069 = (new Array(n));
var inst_22052 = inst_22069;
var inst_22053 = (0);
var state_22088__$1 = (function (){var statearr_22100 = state_22088;
(statearr_22100[(7)] = inst_22053);

(statearr_22100[(8)] = inst_22052);

(statearr_22100[(10)] = inst_22068);

return statearr_22100;
})();
var statearr_22101_22131 = state_22088__$1;
(statearr_22101_22131[(2)] = null);

(statearr_22101_22131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (9))){
var inst_22052 = (state_22088[(8)]);
var inst_22066 = cljs.core.vec.call(null,inst_22052);
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22088__$1,(11),out,inst_22066);
} else {
if((state_val_22089 === (5))){
var inst_22053 = (state_22088[(7)]);
var inst_22052 = (state_22088[(8)]);
var inst_22056 = (state_22088[(9)]);
var inst_22061 = (state_22088[(11)]);
var inst_22060 = (inst_22052[inst_22053] = inst_22056);
var inst_22061__$1 = (inst_22053 + (1));
var inst_22062 = (inst_22061__$1 < n);
var state_22088__$1 = (function (){var statearr_22102 = state_22088;
(statearr_22102[(12)] = inst_22060);

(statearr_22102[(11)] = inst_22061__$1);

return statearr_22102;
})();
if(cljs.core.truth_(inst_22062)){
var statearr_22103_22132 = state_22088__$1;
(statearr_22103_22132[(1)] = (8));

} else {
var statearr_22104_22133 = state_22088__$1;
(statearr_22104_22133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (14))){
var inst_22081 = (state_22088[(2)]);
var inst_22082 = cljs.core.async.close_BANG_.call(null,out);
var state_22088__$1 = (function (){var statearr_22106 = state_22088;
(statearr_22106[(13)] = inst_22081);

return statearr_22106;
})();
var statearr_22107_22134 = state_22088__$1;
(statearr_22107_22134[(2)] = inst_22082);

(statearr_22107_22134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (10))){
var inst_22072 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22108_22135 = state_22088__$1;
(statearr_22108_22135[(2)] = inst_22072);

(statearr_22108_22135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (8))){
var inst_22052 = (state_22088[(8)]);
var inst_22061 = (state_22088[(11)]);
var tmp22105 = inst_22052;
var inst_22052__$1 = tmp22105;
var inst_22053 = inst_22061;
var state_22088__$1 = (function (){var statearr_22109 = state_22088;
(statearr_22109[(7)] = inst_22053);

(statearr_22109[(8)] = inst_22052__$1);

return statearr_22109;
})();
var statearr_22110_22136 = state_22088__$1;
(statearr_22110_22136[(2)] = null);

(statearr_22110_22136[(1)] = (2));


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
});})(c__19462__auto___22122,out))
;
return ((function (switch__19350__auto__,c__19462__auto___22122,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_22114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22114[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_22114[(1)] = (1));

return statearr_22114;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_22088){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_22088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e22115){if((e22115 instanceof Object)){
var ex__19354__auto__ = e22115;
var statearr_22116_22137 = state_22088;
(statearr_22116_22137[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22138 = state_22088;
state_22088 = G__22138;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_22088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_22088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___22122,out))
})();
var state__19464__auto__ = (function (){var statearr_22117 = f__19463__auto__.call(null);
(statearr_22117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___22122);

return statearr_22117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___22122,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22139 = [];
var len__17884__auto___22213 = arguments.length;
var i__17885__auto___22214 = (0);
while(true){
if((i__17885__auto___22214 < len__17884__auto___22213)){
args22139.push((arguments[i__17885__auto___22214]));

var G__22215 = (i__17885__auto___22214 + (1));
i__17885__auto___22214 = G__22215;
continue;
} else {
}
break;
}

var G__22141 = args22139.length;
switch (G__22141) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22139.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19462__auto___22217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___22217,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___22217,out){
return (function (state_22183){
var state_val_22184 = (state_22183[(1)]);
if((state_val_22184 === (7))){
var inst_22179 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
var statearr_22185_22218 = state_22183__$1;
(statearr_22185_22218[(2)] = inst_22179);

(statearr_22185_22218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (1))){
var inst_22142 = [];
var inst_22143 = inst_22142;
var inst_22144 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22183__$1 = (function (){var statearr_22186 = state_22183;
(statearr_22186[(7)] = inst_22143);

(statearr_22186[(8)] = inst_22144);

return statearr_22186;
})();
var statearr_22187_22219 = state_22183__$1;
(statearr_22187_22219[(2)] = null);

(statearr_22187_22219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (4))){
var inst_22147 = (state_22183[(9)]);
var inst_22147__$1 = (state_22183[(2)]);
var inst_22148 = (inst_22147__$1 == null);
var inst_22149 = cljs.core.not.call(null,inst_22148);
var state_22183__$1 = (function (){var statearr_22188 = state_22183;
(statearr_22188[(9)] = inst_22147__$1);

return statearr_22188;
})();
if(inst_22149){
var statearr_22189_22220 = state_22183__$1;
(statearr_22189_22220[(1)] = (5));

} else {
var statearr_22190_22221 = state_22183__$1;
(statearr_22190_22221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (15))){
var inst_22173 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
var statearr_22191_22222 = state_22183__$1;
(statearr_22191_22222[(2)] = inst_22173);

(statearr_22191_22222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (13))){
var state_22183__$1 = state_22183;
var statearr_22192_22223 = state_22183__$1;
(statearr_22192_22223[(2)] = null);

(statearr_22192_22223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (6))){
var inst_22143 = (state_22183[(7)]);
var inst_22168 = inst_22143.length;
var inst_22169 = (inst_22168 > (0));
var state_22183__$1 = state_22183;
if(cljs.core.truth_(inst_22169)){
var statearr_22193_22224 = state_22183__$1;
(statearr_22193_22224[(1)] = (12));

} else {
var statearr_22194_22225 = state_22183__$1;
(statearr_22194_22225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (3))){
var inst_22181 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22183__$1,inst_22181);
} else {
if((state_val_22184 === (12))){
var inst_22143 = (state_22183[(7)]);
var inst_22171 = cljs.core.vec.call(null,inst_22143);
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22183__$1,(15),out,inst_22171);
} else {
if((state_val_22184 === (2))){
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22183__$1,(4),ch);
} else {
if((state_val_22184 === (11))){
var inst_22147 = (state_22183[(9)]);
var inst_22151 = (state_22183[(10)]);
var inst_22161 = (state_22183[(2)]);
var inst_22162 = [];
var inst_22163 = inst_22162.push(inst_22147);
var inst_22143 = inst_22162;
var inst_22144 = inst_22151;
var state_22183__$1 = (function (){var statearr_22195 = state_22183;
(statearr_22195[(7)] = inst_22143);

(statearr_22195[(11)] = inst_22163);

(statearr_22195[(12)] = inst_22161);

(statearr_22195[(8)] = inst_22144);

return statearr_22195;
})();
var statearr_22196_22226 = state_22183__$1;
(statearr_22196_22226[(2)] = null);

(statearr_22196_22226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (9))){
var inst_22143 = (state_22183[(7)]);
var inst_22159 = cljs.core.vec.call(null,inst_22143);
var state_22183__$1 = state_22183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22183__$1,(11),out,inst_22159);
} else {
if((state_val_22184 === (5))){
var inst_22147 = (state_22183[(9)]);
var inst_22151 = (state_22183[(10)]);
var inst_22144 = (state_22183[(8)]);
var inst_22151__$1 = f.call(null,inst_22147);
var inst_22152 = cljs.core._EQ_.call(null,inst_22151__$1,inst_22144);
var inst_22153 = cljs.core.keyword_identical_QMARK_.call(null,inst_22144,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22154 = (inst_22152) || (inst_22153);
var state_22183__$1 = (function (){var statearr_22197 = state_22183;
(statearr_22197[(10)] = inst_22151__$1);

return statearr_22197;
})();
if(cljs.core.truth_(inst_22154)){
var statearr_22198_22227 = state_22183__$1;
(statearr_22198_22227[(1)] = (8));

} else {
var statearr_22199_22228 = state_22183__$1;
(statearr_22199_22228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (14))){
var inst_22176 = (state_22183[(2)]);
var inst_22177 = cljs.core.async.close_BANG_.call(null,out);
var state_22183__$1 = (function (){var statearr_22201 = state_22183;
(statearr_22201[(13)] = inst_22176);

return statearr_22201;
})();
var statearr_22202_22229 = state_22183__$1;
(statearr_22202_22229[(2)] = inst_22177);

(statearr_22202_22229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (10))){
var inst_22166 = (state_22183[(2)]);
var state_22183__$1 = state_22183;
var statearr_22203_22230 = state_22183__$1;
(statearr_22203_22230[(2)] = inst_22166);

(statearr_22203_22230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22184 === (8))){
var inst_22143 = (state_22183[(7)]);
var inst_22147 = (state_22183[(9)]);
var inst_22151 = (state_22183[(10)]);
var inst_22156 = inst_22143.push(inst_22147);
var tmp22200 = inst_22143;
var inst_22143__$1 = tmp22200;
var inst_22144 = inst_22151;
var state_22183__$1 = (function (){var statearr_22204 = state_22183;
(statearr_22204[(14)] = inst_22156);

(statearr_22204[(7)] = inst_22143__$1);

(statearr_22204[(8)] = inst_22144);

return statearr_22204;
})();
var statearr_22205_22231 = state_22183__$1;
(statearr_22205_22231[(2)] = null);

(statearr_22205_22231[(1)] = (2));


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
});})(c__19462__auto___22217,out))
;
return ((function (switch__19350__auto__,c__19462__auto___22217,out){
return (function() {
var cljs$core$async$state_machine__19351__auto__ = null;
var cljs$core$async$state_machine__19351__auto____0 = (function (){
var statearr_22209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22209[(0)] = cljs$core$async$state_machine__19351__auto__);

(statearr_22209[(1)] = (1));

return statearr_22209;
});
var cljs$core$async$state_machine__19351__auto____1 = (function (state_22183){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_22183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e22210){if((e22210 instanceof Object)){
var ex__19354__auto__ = e22210;
var statearr_22211_22232 = state_22183;
(statearr_22211_22232[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22233 = state_22183;
state_22183 = G__22233;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
cljs$core$async$state_machine__19351__auto__ = function(state_22183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19351__auto____1.call(this,state_22183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19351__auto____0;
cljs$core$async$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19351__auto____1;
return cljs$core$async$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___22217,out))
})();
var state__19464__auto__ = (function (){var statearr_22212 = f__19463__auto__.call(null);
(statearr_22212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___22217);

return statearr_22212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___22217,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453830134067