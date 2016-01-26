// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('calculadora.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__24524__delegate = function (x){
if(cljs.core.truth_(calculadora.core.main)){
return cljs.core.apply.call(null,calculadora.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'calculadora.core/main' is missing");
}
};
var G__24524 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__24525__i = 0, G__24525__a = new Array(arguments.length -  0);
while (G__24525__i < G__24525__a.length) {G__24525__a[G__24525__i] = arguments[G__24525__i + 0]; ++G__24525__i;}
  x = new cljs.core.IndexedSeq(G__24525__a,0);
} 
return G__24524__delegate.call(this,x);};
G__24524.cljs$lang$maxFixedArity = 0;
G__24524.cljs$lang$applyTo = (function (arglist__24526){
var x = cljs.core.seq(arglist__24526);
return G__24524__delegate(x);
});
G__24524.cljs$core$IFn$_invoke$arity$variadic = G__24524__delegate;
return G__24524;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1453830138454