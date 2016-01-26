// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('calculadora.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27716__delegate = function (x){
if(cljs.core.truth_(calculadora.core.main)){
return cljs.core.apply.call(null,calculadora.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'calculadora.core/main' is missing");
}
};
var G__27716 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27717__i = 0, G__27717__a = new Array(arguments.length -  0);
while (G__27717__i < G__27717__a.length) {G__27717__a[G__27717__i] = arguments[G__27717__i + 0]; ++G__27717__i;}
  x = new cljs.core.IndexedSeq(G__27717__a,0);
} 
return G__27716__delegate.call(this,x);};
G__27716.cljs$lang$maxFixedArity = 0;
G__27716.cljs$lang$applyTo = (function (arglist__27718){
var x = cljs.core.seq(arglist__27718);
return G__27716__delegate(x);
});
G__27716.cljs$core$IFn$_invoke$arity$variadic = G__27716__delegate;
return G__27716;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1453839848281