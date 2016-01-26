// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculadora.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof calculadora.core.app_state !== 'undefined'){
} else {
calculadora.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
calculadora.core.page = (function calculadora$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"FIXME"], null);
});
calculadora.core.main = (function calculadora$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('calculadora.core.main', calculadora.core.main);

//# sourceMappingURL=core.js.map?rel=1453830127831