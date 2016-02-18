// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32250 = cljs.core._EQ_;
var expr__32251 = (function (){var or__18428__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32250.call(null,"true",expr__32251))){
return true;
} else {
if(cljs.core.truth_(pred__32250.call(null,"false",expr__32251))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32251)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19493__auto__ = [];
var len__19486__auto___32254 = arguments.length;
var i__19487__auto___32255 = (0);
while(true){
if((i__19487__auto___32255 < len__19486__auto___32254)){
args__19493__auto__.push((arguments[i__19487__auto___32255]));

var G__32256 = (i__19487__auto___32255 + (1));
i__19487__auto___32255 = G__32256;
continue;
} else {
}
break;
}

var argseq__19494__auto__ = ((((0) < args__19493__auto__.length))?(new cljs.core.IndexedSeq(args__19493__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19494__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq32253){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32253));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32257){
var map__32260 = p__32257;
var map__32260__$1 = ((((!((map__32260 == null)))?((((map__32260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32260):map__32260);
var message = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18428__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18416__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18416__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18416__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20692__auto___32422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___32422,ch){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___32422,ch){
return (function (state_32391){
var state_val_32392 = (state_32391[(1)]);
if((state_val_32392 === (7))){
var inst_32387 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32393_32423 = state_32391__$1;
(statearr_32393_32423[(2)] = inst_32387);

(statearr_32393_32423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (1))){
var state_32391__$1 = state_32391;
var statearr_32394_32424 = state_32391__$1;
(statearr_32394_32424[(2)] = null);

(statearr_32394_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (4))){
var inst_32344 = (state_32391[(7)]);
var inst_32344__$1 = (state_32391[(2)]);
var state_32391__$1 = (function (){var statearr_32395 = state_32391;
(statearr_32395[(7)] = inst_32344__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32344__$1)){
var statearr_32396_32425 = state_32391__$1;
(statearr_32396_32425[(1)] = (5));

} else {
var statearr_32397_32426 = state_32391__$1;
(statearr_32397_32426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (15))){
var inst_32351 = (state_32391[(8)]);
var inst_32366 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32351);
var inst_32367 = cljs.core.first.call(null,inst_32366);
var inst_32368 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32367);
var inst_32369 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32368)].join('');
var inst_32370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32369);
var state_32391__$1 = state_32391;
var statearr_32398_32427 = state_32391__$1;
(statearr_32398_32427[(2)] = inst_32370);

(statearr_32398_32427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (13))){
var inst_32375 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32399_32428 = state_32391__$1;
(statearr_32399_32428[(2)] = inst_32375);

(statearr_32399_32428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (6))){
var state_32391__$1 = state_32391;
var statearr_32400_32429 = state_32391__$1;
(statearr_32400_32429[(2)] = null);

(statearr_32400_32429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (17))){
var inst_32373 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32401_32430 = state_32391__$1;
(statearr_32401_32430[(2)] = inst_32373);

(statearr_32401_32430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (3))){
var inst_32389 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32391__$1,inst_32389);
} else {
if((state_val_32392 === (12))){
var inst_32350 = (state_32391[(9)]);
var inst_32364 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32350,opts);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32364)){
var statearr_32402_32431 = state_32391__$1;
(statearr_32402_32431[(1)] = (15));

} else {
var statearr_32403_32432 = state_32391__$1;
(statearr_32403_32432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (2))){
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32391__$1,(4),ch);
} else {
if((state_val_32392 === (11))){
var inst_32351 = (state_32391[(8)]);
var inst_32356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32357 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32351);
var inst_32358 = cljs.core.async.timeout.call(null,(1000));
var inst_32359 = [inst_32357,inst_32358];
var inst_32360 = (new cljs.core.PersistentVector(null,2,(5),inst_32356,inst_32359,null));
var state_32391__$1 = state_32391;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32391__$1,(14),inst_32360);
} else {
if((state_val_32392 === (9))){
var inst_32351 = (state_32391[(8)]);
var inst_32377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32378 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32351);
var inst_32379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32378);
var inst_32380 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32379)].join('');
var inst_32381 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32380);
var state_32391__$1 = (function (){var statearr_32404 = state_32391;
(statearr_32404[(10)] = inst_32377);

return statearr_32404;
})();
var statearr_32405_32433 = state_32391__$1;
(statearr_32405_32433[(2)] = inst_32381);

(statearr_32405_32433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (5))){
var inst_32344 = (state_32391[(7)]);
var inst_32346 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32347 = (new cljs.core.PersistentArrayMap(null,2,inst_32346,null));
var inst_32348 = (new cljs.core.PersistentHashSet(null,inst_32347,null));
var inst_32349 = figwheel.client.focus_msgs.call(null,inst_32348,inst_32344);
var inst_32350 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32349);
var inst_32351 = cljs.core.first.call(null,inst_32349);
var inst_32352 = figwheel.client.autoload_QMARK_.call(null);
var state_32391__$1 = (function (){var statearr_32406 = state_32391;
(statearr_32406[(9)] = inst_32350);

(statearr_32406[(8)] = inst_32351);

return statearr_32406;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32407_32434 = state_32391__$1;
(statearr_32407_32434[(1)] = (8));

} else {
var statearr_32408_32435 = state_32391__$1;
(statearr_32408_32435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (14))){
var inst_32362 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32409_32436 = state_32391__$1;
(statearr_32409_32436[(2)] = inst_32362);

(statearr_32409_32436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (16))){
var state_32391__$1 = state_32391;
var statearr_32410_32437 = state_32391__$1;
(statearr_32410_32437[(2)] = null);

(statearr_32410_32437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (10))){
var inst_32383 = (state_32391[(2)]);
var state_32391__$1 = (function (){var statearr_32411 = state_32391;
(statearr_32411[(11)] = inst_32383);

return statearr_32411;
})();
var statearr_32412_32438 = state_32391__$1;
(statearr_32412_32438[(2)] = null);

(statearr_32412_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (8))){
var inst_32350 = (state_32391[(9)]);
var inst_32354 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32350,opts);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32354)){
var statearr_32413_32439 = state_32391__$1;
(statearr_32413_32439[(1)] = (11));

} else {
var statearr_32414_32440 = state_32391__$1;
(statearr_32414_32440[(1)] = (12));

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
});})(c__20692__auto___32422,ch))
;
return ((function (switch__20671__auto__,c__20692__auto___32422,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____0 = (function (){
var statearr_32418 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32418[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__);

(statearr_32418[(1)] = (1));

return statearr_32418;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____1 = (function (state_32391){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_32391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e32419){if((e32419 instanceof Object)){
var ex__20675__auto__ = e32419;
var statearr_32420_32441 = state_32391;
(statearr_32420_32441[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32442 = state_32391;
state_32391 = G__32442;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__ = function(state_32391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____1.call(this,state_32391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20672__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___32422,ch))
})();
var state__20694__auto__ = (function (){var statearr_32421 = f__20693__auto__.call(null);
(statearr_32421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___32422);

return statearr_32421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___32422,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32443_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32443_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32450 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32450){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32449 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32449;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32448;
}}catch (e32447){if((e32447 instanceof Error)){
var e = e32447;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32450], null));
} else {
var e = e32447;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32450))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32451){
var map__32458 = p__32451;
var map__32458__$1 = ((((!((map__32458 == null)))?((((map__32458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32458):map__32458);
var opts = map__32458__$1;
var build_id = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32458,map__32458__$1,opts,build_id){
return (function (p__32460){
var vec__32461 = p__32460;
var map__32462 = cljs.core.nth.call(null,vec__32461,(0),null);
var map__32462__$1 = ((((!((map__32462 == null)))?((((map__32462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32462):map__32462);
var msg = map__32462__$1;
var msg_name = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32461,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32461,map__32462,map__32462__$1,msg,msg_name,_,map__32458,map__32458__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32461,map__32462,map__32462__$1,msg,msg_name,_,map__32458,map__32458__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32458,map__32458__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32468){
var vec__32469 = p__32468;
var map__32470 = cljs.core.nth.call(null,vec__32469,(0),null);
var map__32470__$1 = ((((!((map__32470 == null)))?((((map__32470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32470):map__32470);
var msg = map__32470__$1;
var msg_name = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32469,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32472){
var map__32482 = p__32472;
var map__32482__$1 = ((((!((map__32482 == null)))?((((map__32482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32482):map__32482);
var on_compile_warning = cljs.core.get.call(null,map__32482__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32482__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32482,map__32482__$1,on_compile_warning,on_compile_fail){
return (function (p__32484){
var vec__32485 = p__32484;
var map__32486 = cljs.core.nth.call(null,vec__32485,(0),null);
var map__32486__$1 = ((((!((map__32486 == null)))?((((map__32486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486):map__32486);
var msg = map__32486__$1;
var msg_name = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32485,(1));
var pred__32488 = cljs.core._EQ_;
var expr__32489 = msg_name;
if(cljs.core.truth_(pred__32488.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32489))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32488.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32489))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32482,map__32482__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__,msg_hist,msg_names,msg){
return (function (state_32705){
var state_val_32706 = (state_32705[(1)]);
if((state_val_32706 === (7))){
var inst_32629 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32629)){
var statearr_32707_32753 = state_32705__$1;
(statearr_32707_32753[(1)] = (8));

} else {
var statearr_32708_32754 = state_32705__$1;
(statearr_32708_32754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (20))){
var inst_32699 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32709_32755 = state_32705__$1;
(statearr_32709_32755[(2)] = inst_32699);

(statearr_32709_32755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (27))){
var inst_32695 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32710_32756 = state_32705__$1;
(statearr_32710_32756[(2)] = inst_32695);

(statearr_32710_32756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (1))){
var inst_32622 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32622)){
var statearr_32711_32757 = state_32705__$1;
(statearr_32711_32757[(1)] = (2));

} else {
var statearr_32712_32758 = state_32705__$1;
(statearr_32712_32758[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (24))){
var inst_32697 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32713_32759 = state_32705__$1;
(statearr_32713_32759[(2)] = inst_32697);

(statearr_32713_32759[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (4))){
var inst_32703 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32705__$1,inst_32703);
} else {
if((state_val_32706 === (15))){
var inst_32701 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32714_32760 = state_32705__$1;
(statearr_32714_32760[(2)] = inst_32701);

(statearr_32714_32760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (21))){
var inst_32660 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32715_32761 = state_32705__$1;
(statearr_32715_32761[(2)] = inst_32660);

(statearr_32715_32761[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (31))){
var inst_32684 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32684)){
var statearr_32716_32762 = state_32705__$1;
(statearr_32716_32762[(1)] = (34));

} else {
var statearr_32717_32763 = state_32705__$1;
(statearr_32717_32763[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (32))){
var inst_32693 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32718_32764 = state_32705__$1;
(statearr_32718_32764[(2)] = inst_32693);

(statearr_32718_32764[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (33))){
var inst_32682 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32719_32765 = state_32705__$1;
(statearr_32719_32765[(2)] = inst_32682);

(statearr_32719_32765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (13))){
var inst_32643 = figwheel.client.heads_up.clear.call(null);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(16),inst_32643);
} else {
if((state_val_32706 === (22))){
var inst_32664 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32665 = figwheel.client.heads_up.append_message.call(null,inst_32664);
var state_32705__$1 = state_32705;
var statearr_32720_32766 = state_32705__$1;
(statearr_32720_32766[(2)] = inst_32665);

(statearr_32720_32766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (36))){
var inst_32691 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32721_32767 = state_32705__$1;
(statearr_32721_32767[(2)] = inst_32691);

(statearr_32721_32767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (29))){
var inst_32675 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32722_32768 = state_32705__$1;
(statearr_32722_32768[(2)] = inst_32675);

(statearr_32722_32768[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (6))){
var inst_32624 = (state_32705[(7)]);
var state_32705__$1 = state_32705;
var statearr_32723_32769 = state_32705__$1;
(statearr_32723_32769[(2)] = inst_32624);

(statearr_32723_32769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (28))){
var inst_32671 = (state_32705[(2)]);
var inst_32672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32673 = figwheel.client.heads_up.display_warning.call(null,inst_32672);
var state_32705__$1 = (function (){var statearr_32724 = state_32705;
(statearr_32724[(8)] = inst_32671);

return statearr_32724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(29),inst_32673);
} else {
if((state_val_32706 === (25))){
var inst_32669 = figwheel.client.heads_up.clear.call(null);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(28),inst_32669);
} else {
if((state_val_32706 === (34))){
var inst_32686 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(37),inst_32686);
} else {
if((state_val_32706 === (17))){
var inst_32651 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32725_32770 = state_32705__$1;
(statearr_32725_32770[(2)] = inst_32651);

(statearr_32725_32770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (3))){
var inst_32641 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32641)){
var statearr_32726_32771 = state_32705__$1;
(statearr_32726_32771[(1)] = (13));

} else {
var statearr_32727_32772 = state_32705__$1;
(statearr_32727_32772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (12))){
var inst_32637 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32728_32773 = state_32705__$1;
(statearr_32728_32773[(2)] = inst_32637);

(statearr_32728_32773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (2))){
var inst_32624 = (state_32705[(7)]);
var inst_32624__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32705__$1 = (function (){var statearr_32729 = state_32705;
(statearr_32729[(7)] = inst_32624__$1);

return statearr_32729;
})();
if(cljs.core.truth_(inst_32624__$1)){
var statearr_32730_32774 = state_32705__$1;
(statearr_32730_32774[(1)] = (5));

} else {
var statearr_32731_32775 = state_32705__$1;
(statearr_32731_32775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (23))){
var inst_32667 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32667)){
var statearr_32732_32776 = state_32705__$1;
(statearr_32732_32776[(1)] = (25));

} else {
var statearr_32733_32777 = state_32705__$1;
(statearr_32733_32777[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (35))){
var state_32705__$1 = state_32705;
var statearr_32734_32778 = state_32705__$1;
(statearr_32734_32778[(2)] = null);

(statearr_32734_32778[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (19))){
var inst_32662 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32662)){
var statearr_32735_32779 = state_32705__$1;
(statearr_32735_32779[(1)] = (22));

} else {
var statearr_32736_32780 = state_32705__$1;
(statearr_32736_32780[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (11))){
var inst_32633 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32737_32781 = state_32705__$1;
(statearr_32737_32781[(2)] = inst_32633);

(statearr_32737_32781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (9))){
var inst_32635 = figwheel.client.heads_up.clear.call(null);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(12),inst_32635);
} else {
if((state_val_32706 === (5))){
var inst_32626 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32705__$1 = state_32705;
var statearr_32738_32782 = state_32705__$1;
(statearr_32738_32782[(2)] = inst_32626);

(statearr_32738_32782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (14))){
var inst_32653 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32653)){
var statearr_32739_32783 = state_32705__$1;
(statearr_32739_32783[(1)] = (18));

} else {
var statearr_32740_32784 = state_32705__$1;
(statearr_32740_32784[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (26))){
var inst_32677 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32677)){
var statearr_32741_32785 = state_32705__$1;
(statearr_32741_32785[(1)] = (30));

} else {
var statearr_32742_32786 = state_32705__$1;
(statearr_32742_32786[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (16))){
var inst_32645 = (state_32705[(2)]);
var inst_32646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32647 = figwheel.client.format_messages.call(null,inst_32646);
var inst_32648 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32649 = figwheel.client.heads_up.display_error.call(null,inst_32647,inst_32648);
var state_32705__$1 = (function (){var statearr_32743 = state_32705;
(statearr_32743[(9)] = inst_32645);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(17),inst_32649);
} else {
if((state_val_32706 === (30))){
var inst_32679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32680 = figwheel.client.heads_up.display_warning.call(null,inst_32679);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(33),inst_32680);
} else {
if((state_val_32706 === (10))){
var inst_32639 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32744_32787 = state_32705__$1;
(statearr_32744_32787[(2)] = inst_32639);

(statearr_32744_32787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (18))){
var inst_32655 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32656 = figwheel.client.format_messages.call(null,inst_32655);
var inst_32657 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32658 = figwheel.client.heads_up.display_error.call(null,inst_32656,inst_32657);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(21),inst_32658);
} else {
if((state_val_32706 === (37))){
var inst_32688 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32745_32788 = state_32705__$1;
(statearr_32745_32788[(2)] = inst_32688);

(statearr_32745_32788[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (8))){
var inst_32631 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(11),inst_32631);
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
});})(c__20692__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20671__auto__,c__20692__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____0 = (function (){
var statearr_32749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32749[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__);

(statearr_32749[(1)] = (1));

return statearr_32749;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____1 = (function (state_32705){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_32705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e32750){if((e32750 instanceof Object)){
var ex__20675__auto__ = e32750;
var statearr_32751_32789 = state_32705;
(statearr_32751_32789[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_32705;
state_32705 = G__32790;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__ = function(state_32705){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____1.call(this,state_32705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__,msg_hist,msg_names,msg))
})();
var state__20694__auto__ = (function (){var statearr_32752 = f__20693__auto__.call(null);
(statearr_32752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__,msg_hist,msg_names,msg))
);

return c__20692__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20692__auto___32853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___32853,ch){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___32853,ch){
return (function (state_32836){
var state_val_32837 = (state_32836[(1)]);
if((state_val_32837 === (1))){
var state_32836__$1 = state_32836;
var statearr_32838_32854 = state_32836__$1;
(statearr_32838_32854[(2)] = null);

(statearr_32838_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (2))){
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32836__$1,(4),ch);
} else {
if((state_val_32837 === (3))){
var inst_32834 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32836__$1,inst_32834);
} else {
if((state_val_32837 === (4))){
var inst_32824 = (state_32836[(7)]);
var inst_32824__$1 = (state_32836[(2)]);
var state_32836__$1 = (function (){var statearr_32839 = state_32836;
(statearr_32839[(7)] = inst_32824__$1);

return statearr_32839;
})();
if(cljs.core.truth_(inst_32824__$1)){
var statearr_32840_32855 = state_32836__$1;
(statearr_32840_32855[(1)] = (5));

} else {
var statearr_32841_32856 = state_32836__$1;
(statearr_32841_32856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (5))){
var inst_32824 = (state_32836[(7)]);
var inst_32826 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32824);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32836__$1,(8),inst_32826);
} else {
if((state_val_32837 === (6))){
var state_32836__$1 = state_32836;
var statearr_32842_32857 = state_32836__$1;
(statearr_32842_32857[(2)] = null);

(statearr_32842_32857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (7))){
var inst_32832 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32843_32858 = state_32836__$1;
(statearr_32843_32858[(2)] = inst_32832);

(statearr_32843_32858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (8))){
var inst_32828 = (state_32836[(2)]);
var state_32836__$1 = (function (){var statearr_32844 = state_32836;
(statearr_32844[(8)] = inst_32828);

return statearr_32844;
})();
var statearr_32845_32859 = state_32836__$1;
(statearr_32845_32859[(2)] = null);

(statearr_32845_32859[(1)] = (2));


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
});})(c__20692__auto___32853,ch))
;
return ((function (switch__20671__auto__,c__20692__auto___32853,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20672__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20672__auto____0 = (function (){
var statearr_32849 = [null,null,null,null,null,null,null,null,null];
(statearr_32849[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20672__auto__);

(statearr_32849[(1)] = (1));

return statearr_32849;
});
var figwheel$client$heads_up_plugin_$_state_machine__20672__auto____1 = (function (state_32836){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_32836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e32850){if((e32850 instanceof Object)){
var ex__20675__auto__ = e32850;
var statearr_32851_32860 = state_32836;
(statearr_32851_32860[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_32836;
state_32836 = G__32861;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20672__auto__ = function(state_32836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20672__auto____1.call(this,state_32836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20672__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20672__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___32853,ch))
})();
var state__20694__auto__ = (function (){var statearr_32852 = f__20693__auto__.call(null);
(statearr_32852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___32853);

return statearr_32852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___32853,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__){
return (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (1))){
var inst_32877 = cljs.core.async.timeout.call(null,(3000));
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32882__$1,(2),inst_32877);
} else {
if((state_val_32883 === (2))){
var inst_32879 = (state_32882[(2)]);
var inst_32880 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32882__$1 = (function (){var statearr_32884 = state_32882;
(statearr_32884[(7)] = inst_32879);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32882__$1,inst_32880);
} else {
return null;
}
}
});})(c__20692__auto__))
;
return ((function (switch__20671__auto__,c__20692__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null,null];
(statearr_32888[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____1 = (function (state_32882){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_32882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e32889){if((e32889 instanceof Object)){
var ex__20675__auto__ = e32889;
var statearr_32890_32892 = state_32882;
(statearr_32890_32892[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32893 = state_32882;
state_32882 = G__32893;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20672__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__))
})();
var state__20694__auto__ = (function (){var statearr_32891 = f__20693__auto__.call(null);
(statearr_32891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__))
);

return c__20692__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32894){
var map__32901 = p__32894;
var map__32901__$1 = ((((!((map__32901 == null)))?((((map__32901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32901):map__32901);
var ed = map__32901__$1;
var formatted_exception = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32903_32907 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32904_32908 = null;
var count__32905_32909 = (0);
var i__32906_32910 = (0);
while(true){
if((i__32906_32910 < count__32905_32909)){
var msg_32911 = cljs.core._nth.call(null,chunk__32904_32908,i__32906_32910);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32911);

var G__32912 = seq__32903_32907;
var G__32913 = chunk__32904_32908;
var G__32914 = count__32905_32909;
var G__32915 = (i__32906_32910 + (1));
seq__32903_32907 = G__32912;
chunk__32904_32908 = G__32913;
count__32905_32909 = G__32914;
i__32906_32910 = G__32915;
continue;
} else {
var temp__4425__auto___32916 = cljs.core.seq.call(null,seq__32903_32907);
if(temp__4425__auto___32916){
var seq__32903_32917__$1 = temp__4425__auto___32916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32903_32917__$1)){
var c__19231__auto___32918 = cljs.core.chunk_first.call(null,seq__32903_32917__$1);
var G__32919 = cljs.core.chunk_rest.call(null,seq__32903_32917__$1);
var G__32920 = c__19231__auto___32918;
var G__32921 = cljs.core.count.call(null,c__19231__auto___32918);
var G__32922 = (0);
seq__32903_32907 = G__32919;
chunk__32904_32908 = G__32920;
count__32905_32909 = G__32921;
i__32906_32910 = G__32922;
continue;
} else {
var msg_32923 = cljs.core.first.call(null,seq__32903_32917__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32923);

var G__32924 = cljs.core.next.call(null,seq__32903_32917__$1);
var G__32925 = null;
var G__32926 = (0);
var G__32927 = (0);
seq__32903_32907 = G__32924;
chunk__32904_32908 = G__32925;
count__32905_32909 = G__32926;
i__32906_32910 = G__32927;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32928){
var map__32931 = p__32928;
var map__32931__$1 = ((((!((map__32931 == null)))?((((map__32931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32931):map__32931);
var w = map__32931__$1;
var message = cljs.core.get.call(null,map__32931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18416__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18416__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18416__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32939 = cljs.core.seq.call(null,plugins);
var chunk__32940 = null;
var count__32941 = (0);
var i__32942 = (0);
while(true){
if((i__32942 < count__32941)){
var vec__32943 = cljs.core._nth.call(null,chunk__32940,i__32942);
var k = cljs.core.nth.call(null,vec__32943,(0),null);
var plugin = cljs.core.nth.call(null,vec__32943,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32945 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32939,chunk__32940,count__32941,i__32942,pl_32945,vec__32943,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32945.call(null,msg_hist);
});})(seq__32939,chunk__32940,count__32941,i__32942,pl_32945,vec__32943,k,plugin))
);
} else {
}

var G__32946 = seq__32939;
var G__32947 = chunk__32940;
var G__32948 = count__32941;
var G__32949 = (i__32942 + (1));
seq__32939 = G__32946;
chunk__32940 = G__32947;
count__32941 = G__32948;
i__32942 = G__32949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32939);
if(temp__4425__auto__){
var seq__32939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32939__$1)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,seq__32939__$1);
var G__32950 = cljs.core.chunk_rest.call(null,seq__32939__$1);
var G__32951 = c__19231__auto__;
var G__32952 = cljs.core.count.call(null,c__19231__auto__);
var G__32953 = (0);
seq__32939 = G__32950;
chunk__32940 = G__32951;
count__32941 = G__32952;
i__32942 = G__32953;
continue;
} else {
var vec__32944 = cljs.core.first.call(null,seq__32939__$1);
var k = cljs.core.nth.call(null,vec__32944,(0),null);
var plugin = cljs.core.nth.call(null,vec__32944,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32954 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32939,chunk__32940,count__32941,i__32942,pl_32954,vec__32944,k,plugin,seq__32939__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32954.call(null,msg_hist);
});})(seq__32939,chunk__32940,count__32941,i__32942,pl_32954,vec__32944,k,plugin,seq__32939__$1,temp__4425__auto__))
);
} else {
}

var G__32955 = cljs.core.next.call(null,seq__32939__$1);
var G__32956 = null;
var G__32957 = (0);
var G__32958 = (0);
seq__32939 = G__32955;
chunk__32940 = G__32956;
count__32941 = G__32957;
i__32942 = G__32958;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32959 = [];
var len__19486__auto___32962 = arguments.length;
var i__19487__auto___32963 = (0);
while(true){
if((i__19487__auto___32963 < len__19486__auto___32962)){
args32959.push((arguments[i__19487__auto___32963]));

var G__32964 = (i__19487__auto___32963 + (1));
i__19487__auto___32963 = G__32964;
continue;
} else {
}
break;
}

var G__32961 = args32959.length;
switch (G__32961) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32959.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19493__auto__ = [];
var len__19486__auto___32970 = arguments.length;
var i__19487__auto___32971 = (0);
while(true){
if((i__19487__auto___32971 < len__19486__auto___32970)){
args__19493__auto__.push((arguments[i__19487__auto___32971]));

var G__32972 = (i__19487__auto___32971 + (1));
i__19487__auto___32971 = G__32972;
continue;
} else {
}
break;
}

var argseq__19494__auto__ = ((((0) < args__19493__auto__.length))?(new cljs.core.IndexedSeq(args__19493__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19494__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32967){
var map__32968 = p__32967;
var map__32968__$1 = ((((!((map__32968 == null)))?((((map__32968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32968):map__32968);
var opts = map__32968__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32966){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32966));
});

//# sourceMappingURL=client.js.map?rel=1454378539355