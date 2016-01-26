// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculadora.core');
goog.require('cljs.core');
goog.require('reagent.core');
calculadora.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op1","op1",-170360693),"",new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"operando","operando",-1230082417),"",new cljs.core.Keyword(null,"resultado","resultado",614959063),"",new cljs.core.Keyword(null,"cont","cont",-577100214),(0)], null));
calculadora.core.zerar = (function calculadora$core$zerar(){
return cljs.core.reset_BANG_.call(null,calculadora.core.app_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op1","op1",-170360693),"",new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"operando","operando",-1230082417),"",new cljs.core.Keyword(null,"resultado","resultado",614959063),"",new cljs.core.Keyword(null,"cont","cont",-577100214),(0)], null));
});
calculadora.core.calcular = (function calculadora$core$calcular(){
var resultado_26658 = (function (){var G__26657 = cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"operando","operando",-1230082417));
switch (G__26657) {
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
cljs.core.swap_BANG_.call(null,calculadora.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"resultado","resultado",614959063),[cljs.core.str(" = "),cljs.core.str(resultado_26658)].join(''));

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
cljs.core.swap_BANG_.call(null,calculadora.core.app_sta,calculadora.core.te,cljs.core.assoc,new cljs.core.Keyword(null,"op2","op2",935389141),[cljs.core.str(cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141))),cljs.core.str(valor)].join(''));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op1","op1",-170360693)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"operando","operando",-1230082417)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"op2","op2",935389141)),cljs.core.deref.call(null,calculadora.core.app_state).call(null,new cljs.core.Keyword(null,"resultado","resultado",614959063))], null);
});
calculadora.core.teclado = (function calculadora$core$teclado(){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.teclas","div.teclas",1760203277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26660_SHARP_){
return calculadora.core.store_op.call(null,p1__26660_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"8",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26661_SHARP_){
return calculadora.core.store_op.call(null,p1__26661_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"9",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26662_SHARP_){
return calculadora.core.store_op.call(null,p1__26662_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26663_SHARP_){
return calculadora.core.store_sinal.call(null,p1__26663_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26664_SHARP_){
return calculadora.core.store_op.call(null,p1__26664_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26665_SHARP_){
return calculadora.core.store_op.call(null,p1__26665_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"6",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26666_SHARP_){
return calculadora.core.store_op.call(null,p1__26666_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"*",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26667_SHARP_){
return calculadora.core.store_sinal.call(null,p1__26667_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26668_SHARP_){
return calculadora.core.store_op.call(null,p1__26668_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26669_SHARP_){
return calculadora.core.store_op.call(null,p1__26669_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26670_SHARP_){
return calculadora.core.store_op.call(null,p1__26670_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),".",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26671_SHARP_){
return calculadora.core.store_op.call(null,p1__26671_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26672_SHARP_){
return calculadora.core.store_sinal.call(null,p1__26672_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__26673_SHARP_){
return calculadora.core.store_sinal.call(null,p1__26673_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calculadora.core.calcular.call(null);
})], null)], null)], null);
});
calculadora.core.calculadora = (function calculadora$core$calculadora(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.titulo","div.titulo",-1879171925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Calculadora"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.visor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.teclado], null)], null);
});
calculadora.core.page = (function calculadora$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.calculadora], null);
});
calculadora.core.main = (function calculadora$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculadora.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('calculadora.core.main', calculadora.core.main);

//# sourceMappingURL=core.js.map?rel=1453831293524