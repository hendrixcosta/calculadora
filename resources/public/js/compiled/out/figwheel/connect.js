// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('calculadora.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21100__delegate = function (x){
if(cljs.core.truth_(calculadora.core.main)){
return cljs.core.apply.call(null,calculadora.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'calculadora.core/main' is missing");
}
};
var G__21100 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21101__i = 0, G__21101__a = new Array(arguments.length -  0);
while (G__21101__i < G__21101__a.length) {G__21101__a[G__21101__i] = arguments[G__21101__i + 0]; ++G__21101__i;}
  x = new cljs.core.IndexedSeq(G__21101__a,0);
} 
return G__21100__delegate.call(this,x);};
G__21100.cljs$lang$maxFixedArity = 0;
G__21100.cljs$lang$applyTo = (function (arglist__21102){
var x = cljs.core.seq(arglist__21102);
return G__21100__delegate(x);
});
G__21100.cljs$core$IFn$_invoke$arity$variadic = G__21100__delegate;
return G__21100;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454026019013