// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('calculadora.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20740__delegate = function (x){
if(cljs.core.truth_(calculadora.core.main)){
return cljs.core.apply.call(null,calculadora.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'calculadora.core/main' is missing");
}
};
var G__20740 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20741__i = 0, G__20741__a = new Array(arguments.length -  0);
while (G__20741__i < G__20741__a.length) {G__20741__a[G__20741__i] = arguments[G__20741__i + 0]; ++G__20741__i;}
  x = new cljs.core.IndexedSeq(G__20741__a,0);
} 
return G__20740__delegate.call(this,x);};
G__20740.cljs$lang$maxFixedArity = 0;
G__20740.cljs$lang$applyTo = (function (arglist__20742){
var x = cljs.core.seq(arglist__20742);
return G__20740__delegate(x);
});
G__20740.cljs$core$IFn$_invoke$arity$variadic = G__20740__delegate;
return G__20740;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454114351009