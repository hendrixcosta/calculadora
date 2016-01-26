// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculadora.core');
goog.require('cljs.core');
goog.require('reagent.core');
calculadora.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op1","op1",-170360693),"",new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"operando","operando",-1230082417),"",new cljs.core.Keyword(null,"resultado","resultado",614959063),"",new cljs.core.Keyword(null,"cont","cont",-577100214),(0)], null));
calculadora.core.zerar = (function calculadora$core$zerar(){
return cljs.core.reset_BANG_.call(null,calculadora.core.app_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op1","op1",-170360693),"",new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"operando","operando",-1230082417),"",new cljs.core.Keyword(null,"resultado","resultado",614959063),"",new cljs.core.Keyword(null,"cont","cont",-577100214),(0)], null));
});
calculadora.core.calcular = (function calculadora$core$calcular(){
var resultado_27697 = (function (){var G__27696 = cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"operando","operando",-1230082417));
switch (G__27696) {
case "+":
return ((cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)) | (0)) + (cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)) | (0)));

break;
case "-":
return ((cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)) | (0)) - (cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)) | (0)));

break;
case "/":
return ((cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)) | (0)) / (cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)) | (0)));

break;
case "*":
return ((cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)) | (0)) * (cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)) | (0)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"operando","operando",-1230082417)))].join('')));

}
})();
cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"resultado","resultado",614959063),[cljs.core.str(" = "),cljs.core.str(resultado_27697)].join(''));

cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"cont","cont",-577100214),cljs.core.inc);

return console.log(cljs.core.print_str.call(null,cljs.core.deref.call(null,calculadora.core.app_state)));
});
calculadora.core.store_op = (function calculadora$core$store_op(valor){
if(cljs.core._EQ_.call(null,(2),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"cont","cont",-577100214)))){
calculadora.core.zerar.call(null);
} else {
}

if(cljs.core._EQ_.call(null,(0),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"cont","cont",-577100214)))){
cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"op1","op1",-170360693),[cljs.core.str(cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693))),cljs.core.str(valor)].join(''));
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"cont","cont",-577100214)))){
cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"op2","op2",935389141),[cljs.core.str(cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141))),cljs.core.str(valor)].join(''));
} else {
}
}

return console.log(cljs.core.print_str.call(null,cljs.core.deref.call(null,calculadora.core.app_state)));
});
calculadora.core.store_sinal = (function calculadora$core$store_sinal(sinal){
cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"operando","operando",-1230082417),sinal);

cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"cont","cont",-577100214),cljs.core.inc);

return console.log(cljs.core.print_str.call(null,cljs.core.deref.call(null,calculadora.core.app_state)));
});
calculadora.core.visor = (function calculadora$core$visor(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"visor"], null),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"operando","operando",-1230082417)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"resultado","resultado",614959063))], null);
});
calculadora.core.teclado = (function calculadora$core$teclado(){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"teclado"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27699_SHARP_){
return calculadora.core.store_op.call(null,p1__27699_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"8",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27700_SHARP_){
return calculadora.core.store_op.call(null,p1__27700_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"9",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27701_SHARP_){
return calculadora.core.store_op.call(null,p1__27701_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.sinal","input.sinal",-928139138),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27702_SHARP_){
return calculadora.core.store_sinal.call(null,p1__27702_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27703_SHARP_){
return calculadora.core.store_op.call(null,p1__27703_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27704_SHARP_){
return calculadora.core.store_op.call(null,p1__27704_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"6",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27705_SHARP_){
return calculadora.core.store_op.call(null,p1__27705_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.sinal","input.sinal",-928139138),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"*",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27706_SHARP_){
return calculadora.core.store_sinal.call(null,p1__27706_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27707_SHARP_){
return calculadora.core.store_op.call(null,p1__27707_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27708_SHARP_){
return calculadora.core.store_op.call(null,p1__27708_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27709_SHARP_){
return calculadora.core.store_op.call(null,p1__27709_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.sinal","input.sinal",-928139138),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27710_SHARP_){
return calculadora.core.store_sinal.call(null,p1__27710_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),".",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27711_SHARP_){
return calculadora.core.store_op.call(null,p1__27711_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27712_SHARP_){
return calculadora.core.store_op.call(null,p1__27712_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.igual","input.igual",1282274694),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora.core.calcular.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.sinal","input.sinal",-928139138),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27713_SHARP_){
return calculadora.core.store_sinal.call(null,p1__27713_SHARP_.target.value);
})], null)], null)], null);
});
calculadora.core.calculadora = (function calculadora$core$calculadora(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calculadora","div.calculadora",341971076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"calculadora"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.teclado], null)], null);
});
calculadora.core.page = (function calculadora$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.calculadora], null);
});
calculadora.core.main = (function calculadora$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('calculadora.core.main', calculadora.core.main);

//# sourceMappingURL=core.js.map?rel=1453839848262