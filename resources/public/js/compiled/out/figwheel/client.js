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
var pred__23799 = cljs.core._EQ_;
var expr__23800 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23799.call(null,"true",expr__23800))){
return true;
} else {
if(cljs.core.truth_(pred__23799.call(null,"false",expr__23800))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23800)].join('')));
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
var args__17891__auto__ = [];
var len__17884__auto___23803 = arguments.length;
var i__17885__auto___23804 = (0);
while(true){
if((i__17885__auto___23804 < len__17884__auto___23803)){
args__17891__auto__.push((arguments[i__17885__auto___23804]));

var G__23805 = (i__17885__auto___23804 + (1));
i__17885__auto___23804 = G__23805;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23802){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23802));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23806){
var map__23809 = p__23806;
var map__23809__$1 = ((((!((map__23809 == null)))?((((map__23809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23809):map__23809);
var message = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
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
var c__19462__auto___23971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___23971,ch){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___23971,ch){
return (function (state_23940){
var state_val_23941 = (state_23940[(1)]);
if((state_val_23941 === (7))){
var inst_23936 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23942_23972 = state_23940__$1;
(statearr_23942_23972[(2)] = inst_23936);

(statearr_23942_23972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (1))){
var state_23940__$1 = state_23940;
var statearr_23943_23973 = state_23940__$1;
(statearr_23943_23973[(2)] = null);

(statearr_23943_23973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (4))){
var inst_23893 = (state_23940[(7)]);
var inst_23893__$1 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23944 = state_23940;
(statearr_23944[(7)] = inst_23893__$1);

return statearr_23944;
})();
if(cljs.core.truth_(inst_23893__$1)){
var statearr_23945_23974 = state_23940__$1;
(statearr_23945_23974[(1)] = (5));

} else {
var statearr_23946_23975 = state_23940__$1;
(statearr_23946_23975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (15))){
var inst_23900 = (state_23940[(8)]);
var inst_23915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23900);
var inst_23916 = cljs.core.first.call(null,inst_23915);
var inst_23917 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23916);
var inst_23918 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23917)].join('');
var inst_23919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23918);
var state_23940__$1 = state_23940;
var statearr_23947_23976 = state_23940__$1;
(statearr_23947_23976[(2)] = inst_23919);

(statearr_23947_23976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (13))){
var inst_23924 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23948_23977 = state_23940__$1;
(statearr_23948_23977[(2)] = inst_23924);

(statearr_23948_23977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (6))){
var state_23940__$1 = state_23940;
var statearr_23949_23978 = state_23940__$1;
(statearr_23949_23978[(2)] = null);

(statearr_23949_23978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (17))){
var inst_23922 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23950_23979 = state_23940__$1;
(statearr_23950_23979[(2)] = inst_23922);

(statearr_23950_23979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (3))){
var inst_23938 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23940__$1,inst_23938);
} else {
if((state_val_23941 === (12))){
var inst_23899 = (state_23940[(9)]);
var inst_23913 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23899,opts);
var state_23940__$1 = state_23940;
if(cljs.core.truth_(inst_23913)){
var statearr_23951_23980 = state_23940__$1;
(statearr_23951_23980[(1)] = (15));

} else {
var statearr_23952_23981 = state_23940__$1;
(statearr_23952_23981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (2))){
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23940__$1,(4),ch);
} else {
if((state_val_23941 === (11))){
var inst_23900 = (state_23940[(8)]);
var inst_23905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23906 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23900);
var inst_23907 = cljs.core.async.timeout.call(null,(1000));
var inst_23908 = [inst_23906,inst_23907];
var inst_23909 = (new cljs.core.PersistentVector(null,2,(5),inst_23905,inst_23908,null));
var state_23940__$1 = state_23940;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23940__$1,(14),inst_23909);
} else {
if((state_val_23941 === (9))){
var inst_23900 = (state_23940[(8)]);
var inst_23926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23927 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23900);
var inst_23928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23927);
var inst_23929 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23928)].join('');
var inst_23930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23929);
var state_23940__$1 = (function (){var statearr_23953 = state_23940;
(statearr_23953[(10)] = inst_23926);

return statearr_23953;
})();
var statearr_23954_23982 = state_23940__$1;
(statearr_23954_23982[(2)] = inst_23930);

(statearr_23954_23982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (5))){
var inst_23893 = (state_23940[(7)]);
var inst_23895 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23896 = (new cljs.core.PersistentArrayMap(null,2,inst_23895,null));
var inst_23897 = (new cljs.core.PersistentHashSet(null,inst_23896,null));
var inst_23898 = figwheel.client.focus_msgs.call(null,inst_23897,inst_23893);
var inst_23899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23898);
var inst_23900 = cljs.core.first.call(null,inst_23898);
var inst_23901 = figwheel.client.autoload_QMARK_.call(null);
var state_23940__$1 = (function (){var statearr_23955 = state_23940;
(statearr_23955[(9)] = inst_23899);

(statearr_23955[(8)] = inst_23900);

return statearr_23955;
})();
if(cljs.core.truth_(inst_23901)){
var statearr_23956_23983 = state_23940__$1;
(statearr_23956_23983[(1)] = (8));

} else {
var statearr_23957_23984 = state_23940__$1;
(statearr_23957_23984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (14))){
var inst_23911 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23958_23985 = state_23940__$1;
(statearr_23958_23985[(2)] = inst_23911);

(statearr_23958_23985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (16))){
var state_23940__$1 = state_23940;
var statearr_23959_23986 = state_23940__$1;
(statearr_23959_23986[(2)] = null);

(statearr_23959_23986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (10))){
var inst_23932 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23960 = state_23940;
(statearr_23960[(11)] = inst_23932);

return statearr_23960;
})();
var statearr_23961_23987 = state_23940__$1;
(statearr_23961_23987[(2)] = null);

(statearr_23961_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (8))){
var inst_23899 = (state_23940[(9)]);
var inst_23903 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23899,opts);
var state_23940__$1 = state_23940;
if(cljs.core.truth_(inst_23903)){
var statearr_23962_23988 = state_23940__$1;
(statearr_23962_23988[(1)] = (11));

} else {
var statearr_23963_23989 = state_23940__$1;
(statearr_23963_23989[(1)] = (12));

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
});})(c__19462__auto___23971,ch))
;
return ((function (switch__19350__auto__,c__19462__auto___23971,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____1 = (function (state_23940){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_23940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__19354__auto__ = e23968;
var statearr_23969_23990 = state_23940;
(statearr_23969_23990[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23991 = state_23940;
state_23940 = G__23991;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__ = function(state_23940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____1.call(this,state_23940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19351__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___23971,ch))
})();
var state__19464__auto__ = (function (){var statearr_23970 = f__19463__auto__.call(null);
(statearr_23970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___23971);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___23971,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23992_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23992_SHARP_));
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
var base_path_23999 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23999){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23998 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23998;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23997;
}}catch (e23996){if((e23996 instanceof Error)){
var e = e23996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23999], null));
} else {
var e = e23996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23999))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24000){
var map__24007 = p__24000;
var map__24007__$1 = ((((!((map__24007 == null)))?((((map__24007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);
var opts = map__24007__$1;
var build_id = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24007,map__24007__$1,opts,build_id){
return (function (p__24009){
var vec__24010 = p__24009;
var map__24011 = cljs.core.nth.call(null,vec__24010,(0),null);
var map__24011__$1 = ((((!((map__24011 == null)))?((((map__24011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var msg = map__24011__$1;
var msg_name = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24010,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24010,map__24011,map__24011__$1,msg,msg_name,_,map__24007,map__24007__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24010,map__24011,map__24011__$1,msg,msg_name,_,map__24007,map__24007__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24007,map__24007__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24017){
var vec__24018 = p__24017;
var map__24019 = cljs.core.nth.call(null,vec__24018,(0),null);
var map__24019__$1 = ((((!((map__24019 == null)))?((((map__24019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24019):map__24019);
var msg = map__24019__$1;
var msg_name = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24018,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24021){
var map__24031 = p__24021;
var map__24031__$1 = ((((!((map__24031 == null)))?((((map__24031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24031):map__24031);
var on_compile_warning = cljs.core.get.call(null,map__24031__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24031__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24031,map__24031__$1,on_compile_warning,on_compile_fail){
return (function (p__24033){
var vec__24034 = p__24033;
var map__24035 = cljs.core.nth.call(null,vec__24034,(0),null);
var map__24035__$1 = ((((!((map__24035 == null)))?((((map__24035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24035):map__24035);
var msg = map__24035__$1;
var msg_name = cljs.core.get.call(null,map__24035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24034,(1));
var pred__24037 = cljs.core._EQ_;
var expr__24038 = msg_name;
if(cljs.core.truth_(pred__24037.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24038))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24037.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24038))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24031,map__24031__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__,msg_hist,msg_names,msg){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (7))){
var inst_24178 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24178)){
var statearr_24256_24302 = state_24254__$1;
(statearr_24256_24302[(1)] = (8));

} else {
var statearr_24257_24303 = state_24254__$1;
(statearr_24257_24303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (20))){
var inst_24248 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24258_24304 = state_24254__$1;
(statearr_24258_24304[(2)] = inst_24248);

(statearr_24258_24304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (27))){
var inst_24244 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24259_24305 = state_24254__$1;
(statearr_24259_24305[(2)] = inst_24244);

(statearr_24259_24305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (1))){
var inst_24171 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24171)){
var statearr_24260_24306 = state_24254__$1;
(statearr_24260_24306[(1)] = (2));

} else {
var statearr_24261_24307 = state_24254__$1;
(statearr_24261_24307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (24))){
var inst_24246 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24262_24308 = state_24254__$1;
(statearr_24262_24308[(2)] = inst_24246);

(statearr_24262_24308[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (4))){
var inst_24252 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (15))){
var inst_24250 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24263_24309 = state_24254__$1;
(statearr_24263_24309[(2)] = inst_24250);

(statearr_24263_24309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (21))){
var inst_24209 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24264_24310 = state_24254__$1;
(statearr_24264_24310[(2)] = inst_24209);

(statearr_24264_24310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (31))){
var inst_24233 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24233)){
var statearr_24265_24311 = state_24254__$1;
(statearr_24265_24311[(1)] = (34));

} else {
var statearr_24266_24312 = state_24254__$1;
(statearr_24266_24312[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (32))){
var inst_24242 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24267_24313 = state_24254__$1;
(statearr_24267_24313[(2)] = inst_24242);

(statearr_24267_24313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (33))){
var inst_24231 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24268_24314 = state_24254__$1;
(statearr_24268_24314[(2)] = inst_24231);

(statearr_24268_24314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (13))){
var inst_24192 = figwheel.client.heads_up.clear.call(null);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(16),inst_24192);
} else {
if((state_val_24255 === (22))){
var inst_24213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24214 = figwheel.client.heads_up.append_message.call(null,inst_24213);
var state_24254__$1 = state_24254;
var statearr_24269_24315 = state_24254__$1;
(statearr_24269_24315[(2)] = inst_24214);

(statearr_24269_24315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (36))){
var inst_24240 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24270_24316 = state_24254__$1;
(statearr_24270_24316[(2)] = inst_24240);

(statearr_24270_24316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (29))){
var inst_24224 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24271_24317 = state_24254__$1;
(statearr_24271_24317[(2)] = inst_24224);

(statearr_24271_24317[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var inst_24173 = (state_24254[(7)]);
var state_24254__$1 = state_24254;
var statearr_24272_24318 = state_24254__$1;
(statearr_24272_24318[(2)] = inst_24173);

(statearr_24272_24318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (28))){
var inst_24220 = (state_24254[(2)]);
var inst_24221 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24222 = figwheel.client.heads_up.display_warning.call(null,inst_24221);
var state_24254__$1 = (function (){var statearr_24273 = state_24254;
(statearr_24273[(8)] = inst_24220);

return statearr_24273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(29),inst_24222);
} else {
if((state_val_24255 === (25))){
var inst_24218 = figwheel.client.heads_up.clear.call(null);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(28),inst_24218);
} else {
if((state_val_24255 === (34))){
var inst_24235 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(37),inst_24235);
} else {
if((state_val_24255 === (17))){
var inst_24200 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24274_24319 = state_24254__$1;
(statearr_24274_24319[(2)] = inst_24200);

(statearr_24274_24319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (3))){
var inst_24190 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24190)){
var statearr_24275_24320 = state_24254__$1;
(statearr_24275_24320[(1)] = (13));

} else {
var statearr_24276_24321 = state_24254__$1;
(statearr_24276_24321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (12))){
var inst_24186 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24277_24322 = state_24254__$1;
(statearr_24277_24322[(2)] = inst_24186);

(statearr_24277_24322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (2))){
var inst_24173 = (state_24254[(7)]);
var inst_24173__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24254__$1 = (function (){var statearr_24278 = state_24254;
(statearr_24278[(7)] = inst_24173__$1);

return statearr_24278;
})();
if(cljs.core.truth_(inst_24173__$1)){
var statearr_24279_24323 = state_24254__$1;
(statearr_24279_24323[(1)] = (5));

} else {
var statearr_24280_24324 = state_24254__$1;
(statearr_24280_24324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (23))){
var inst_24216 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24216)){
var statearr_24281_24325 = state_24254__$1;
(statearr_24281_24325[(1)] = (25));

} else {
var statearr_24282_24326 = state_24254__$1;
(statearr_24282_24326[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (35))){
var state_24254__$1 = state_24254;
var statearr_24283_24327 = state_24254__$1;
(statearr_24283_24327[(2)] = null);

(statearr_24283_24327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (19))){
var inst_24211 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24211)){
var statearr_24284_24328 = state_24254__$1;
(statearr_24284_24328[(1)] = (22));

} else {
var statearr_24285_24329 = state_24254__$1;
(statearr_24285_24329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (11))){
var inst_24182 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24286_24330 = state_24254__$1;
(statearr_24286_24330[(2)] = inst_24182);

(statearr_24286_24330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (9))){
var inst_24184 = figwheel.client.heads_up.clear.call(null);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(12),inst_24184);
} else {
if((state_val_24255 === (5))){
var inst_24175 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24254__$1 = state_24254;
var statearr_24287_24331 = state_24254__$1;
(statearr_24287_24331[(2)] = inst_24175);

(statearr_24287_24331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (14))){
var inst_24202 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24202)){
var statearr_24288_24332 = state_24254__$1;
(statearr_24288_24332[(1)] = (18));

} else {
var statearr_24289_24333 = state_24254__$1;
(statearr_24289_24333[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (26))){
var inst_24226 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24226)){
var statearr_24290_24334 = state_24254__$1;
(statearr_24290_24334[(1)] = (30));

} else {
var statearr_24291_24335 = state_24254__$1;
(statearr_24291_24335[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (16))){
var inst_24194 = (state_24254[(2)]);
var inst_24195 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24196 = figwheel.client.format_messages.call(null,inst_24195);
var inst_24197 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24198 = figwheel.client.heads_up.display_error.call(null,inst_24196,inst_24197);
var state_24254__$1 = (function (){var statearr_24292 = state_24254;
(statearr_24292[(9)] = inst_24194);

return statearr_24292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(17),inst_24198);
} else {
if((state_val_24255 === (30))){
var inst_24228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24229 = figwheel.client.heads_up.display_warning.call(null,inst_24228);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(33),inst_24229);
} else {
if((state_val_24255 === (10))){
var inst_24188 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24293_24336 = state_24254__$1;
(statearr_24293_24336[(2)] = inst_24188);

(statearr_24293_24336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (18))){
var inst_24204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24205 = figwheel.client.format_messages.call(null,inst_24204);
var inst_24206 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24207 = figwheel.client.heads_up.display_error.call(null,inst_24205,inst_24206);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(21),inst_24207);
} else {
if((state_val_24255 === (37))){
var inst_24237 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24294_24337 = state_24254__$1;
(statearr_24294_24337[(2)] = inst_24237);

(statearr_24294_24337[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (8))){
var inst_24180 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(11),inst_24180);
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
});})(c__19462__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19350__auto__,c__19462__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____0 = (function (){
var statearr_24298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24298[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__);

(statearr_24298[(1)] = (1));

return statearr_24298;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____1 = (function (state_24254){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e24299){if((e24299 instanceof Object)){
var ex__19354__auto__ = e24299;
var statearr_24300_24338 = state_24254;
(statearr_24300_24338[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24339 = state_24254;
state_24254 = G__24339;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__,msg_hist,msg_names,msg))
})();
var state__19464__auto__ = (function (){var statearr_24301 = f__19463__auto__.call(null);
(statearr_24301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_24301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__,msg_hist,msg_names,msg))
);

return c__19462__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19462__auto___24402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___24402,ch){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___24402,ch){
return (function (state_24385){
var state_val_24386 = (state_24385[(1)]);
if((state_val_24386 === (1))){
var state_24385__$1 = state_24385;
var statearr_24387_24403 = state_24385__$1;
(statearr_24387_24403[(2)] = null);

(statearr_24387_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (2))){
var state_24385__$1 = state_24385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24385__$1,(4),ch);
} else {
if((state_val_24386 === (3))){
var inst_24383 = (state_24385[(2)]);
var state_24385__$1 = state_24385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24385__$1,inst_24383);
} else {
if((state_val_24386 === (4))){
var inst_24373 = (state_24385[(7)]);
var inst_24373__$1 = (state_24385[(2)]);
var state_24385__$1 = (function (){var statearr_24388 = state_24385;
(statearr_24388[(7)] = inst_24373__$1);

return statearr_24388;
})();
if(cljs.core.truth_(inst_24373__$1)){
var statearr_24389_24404 = state_24385__$1;
(statearr_24389_24404[(1)] = (5));

} else {
var statearr_24390_24405 = state_24385__$1;
(statearr_24390_24405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (5))){
var inst_24373 = (state_24385[(7)]);
var inst_24375 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24373);
var state_24385__$1 = state_24385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24385__$1,(8),inst_24375);
} else {
if((state_val_24386 === (6))){
var state_24385__$1 = state_24385;
var statearr_24391_24406 = state_24385__$1;
(statearr_24391_24406[(2)] = null);

(statearr_24391_24406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (7))){
var inst_24381 = (state_24385[(2)]);
var state_24385__$1 = state_24385;
var statearr_24392_24407 = state_24385__$1;
(statearr_24392_24407[(2)] = inst_24381);

(statearr_24392_24407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24386 === (8))){
var inst_24377 = (state_24385[(2)]);
var state_24385__$1 = (function (){var statearr_24393 = state_24385;
(statearr_24393[(8)] = inst_24377);

return statearr_24393;
})();
var statearr_24394_24408 = state_24385__$1;
(statearr_24394_24408[(2)] = null);

(statearr_24394_24408[(1)] = (2));


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
});})(c__19462__auto___24402,ch))
;
return ((function (switch__19350__auto__,c__19462__auto___24402,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19351__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19351__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null,null,null];
(statearr_24398[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19351__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var figwheel$client$heads_up_plugin_$_state_machine__19351__auto____1 = (function (state_24385){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_24385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e24399){if((e24399 instanceof Object)){
var ex__19354__auto__ = e24399;
var statearr_24400_24409 = state_24385;
(statearr_24400_24409[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24410 = state_24385;
state_24385 = G__24410;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19351__auto__ = function(state_24385){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19351__auto____1.call(this,state_24385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19351__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19351__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___24402,ch))
})();
var state__19464__auto__ = (function (){var statearr_24401 = f__19463__auto__.call(null);
(statearr_24401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___24402);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___24402,ch))
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
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_24431){
var state_val_24432 = (state_24431[(1)]);
if((state_val_24432 === (1))){
var inst_24426 = cljs.core.async.timeout.call(null,(3000));
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24431__$1,(2),inst_24426);
} else {
if((state_val_24432 === (2))){
var inst_24428 = (state_24431[(2)]);
var inst_24429 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24431__$1 = (function (){var statearr_24433 = state_24431;
(statearr_24433[(7)] = inst_24428);

return statearr_24433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24431__$1,inst_24429);
} else {
return null;
}
}
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____0 = (function (){
var statearr_24437 = [null,null,null,null,null,null,null,null];
(statearr_24437[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__);

(statearr_24437[(1)] = (1));

return statearr_24437;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____1 = (function (state_24431){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_24431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e24438){if((e24438 instanceof Object)){
var ex__19354__auto__ = e24438;
var statearr_24439_24441 = state_24431;
(statearr_24439_24441[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24442 = state_24431;
state_24431 = G__24442;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19351__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_24440 = f__19463__auto__.call(null);
(statearr_24440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_24440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24443){
var map__24450 = p__24443;
var map__24450__$1 = ((((!((map__24450 == null)))?((((map__24450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24450):map__24450);
var ed = map__24450__$1;
var formatted_exception = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24450__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24452_24456 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24453_24457 = null;
var count__24454_24458 = (0);
var i__24455_24459 = (0);
while(true){
if((i__24455_24459 < count__24454_24458)){
var msg_24460 = cljs.core._nth.call(null,chunk__24453_24457,i__24455_24459);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24460);

var G__24461 = seq__24452_24456;
var G__24462 = chunk__24453_24457;
var G__24463 = count__24454_24458;
var G__24464 = (i__24455_24459 + (1));
seq__24452_24456 = G__24461;
chunk__24453_24457 = G__24462;
count__24454_24458 = G__24463;
i__24455_24459 = G__24464;
continue;
} else {
var temp__4425__auto___24465 = cljs.core.seq.call(null,seq__24452_24456);
if(temp__4425__auto___24465){
var seq__24452_24466__$1 = temp__4425__auto___24465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24452_24466__$1)){
var c__17629__auto___24467 = cljs.core.chunk_first.call(null,seq__24452_24466__$1);
var G__24468 = cljs.core.chunk_rest.call(null,seq__24452_24466__$1);
var G__24469 = c__17629__auto___24467;
var G__24470 = cljs.core.count.call(null,c__17629__auto___24467);
var G__24471 = (0);
seq__24452_24456 = G__24468;
chunk__24453_24457 = G__24469;
count__24454_24458 = G__24470;
i__24455_24459 = G__24471;
continue;
} else {
var msg_24472 = cljs.core.first.call(null,seq__24452_24466__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24472);

var G__24473 = cljs.core.next.call(null,seq__24452_24466__$1);
var G__24474 = null;
var G__24475 = (0);
var G__24476 = (0);
seq__24452_24456 = G__24473;
chunk__24453_24457 = G__24474;
count__24454_24458 = G__24475;
i__24455_24459 = G__24476;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24477){
var map__24480 = p__24477;
var map__24480__$1 = ((((!((map__24480 == null)))?((((map__24480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24480):map__24480);
var w = map__24480__$1;
var message = cljs.core.get.call(null,map__24480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
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
var seq__24488 = cljs.core.seq.call(null,plugins);
var chunk__24489 = null;
var count__24490 = (0);
var i__24491 = (0);
while(true){
if((i__24491 < count__24490)){
var vec__24492 = cljs.core._nth.call(null,chunk__24489,i__24491);
var k = cljs.core.nth.call(null,vec__24492,(0),null);
var plugin = cljs.core.nth.call(null,vec__24492,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24494 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24488,chunk__24489,count__24490,i__24491,pl_24494,vec__24492,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24494.call(null,msg_hist);
});})(seq__24488,chunk__24489,count__24490,i__24491,pl_24494,vec__24492,k,plugin))
);
} else {
}

var G__24495 = seq__24488;
var G__24496 = chunk__24489;
var G__24497 = count__24490;
var G__24498 = (i__24491 + (1));
seq__24488 = G__24495;
chunk__24489 = G__24496;
count__24490 = G__24497;
i__24491 = G__24498;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24488);
if(temp__4425__auto__){
var seq__24488__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24488__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24488__$1);
var G__24499 = cljs.core.chunk_rest.call(null,seq__24488__$1);
var G__24500 = c__17629__auto__;
var G__24501 = cljs.core.count.call(null,c__17629__auto__);
var G__24502 = (0);
seq__24488 = G__24499;
chunk__24489 = G__24500;
count__24490 = G__24501;
i__24491 = G__24502;
continue;
} else {
var vec__24493 = cljs.core.first.call(null,seq__24488__$1);
var k = cljs.core.nth.call(null,vec__24493,(0),null);
var plugin = cljs.core.nth.call(null,vec__24493,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24503 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24488,chunk__24489,count__24490,i__24491,pl_24503,vec__24493,k,plugin,seq__24488__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24503.call(null,msg_hist);
});})(seq__24488,chunk__24489,count__24490,i__24491,pl_24503,vec__24493,k,plugin,seq__24488__$1,temp__4425__auto__))
);
} else {
}

var G__24504 = cljs.core.next.call(null,seq__24488__$1);
var G__24505 = null;
var G__24506 = (0);
var G__24507 = (0);
seq__24488 = G__24504;
chunk__24489 = G__24505;
count__24490 = G__24506;
i__24491 = G__24507;
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
var args24508 = [];
var len__17884__auto___24511 = arguments.length;
var i__17885__auto___24512 = (0);
while(true){
if((i__17885__auto___24512 < len__17884__auto___24511)){
args24508.push((arguments[i__17885__auto___24512]));

var G__24513 = (i__17885__auto___24512 + (1));
i__17885__auto___24512 = G__24513;
continue;
} else {
}
break;
}

var G__24510 = args24508.length;
switch (G__24510) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24508.length)].join('')));

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
var args__17891__auto__ = [];
var len__17884__auto___24519 = arguments.length;
var i__17885__auto___24520 = (0);
while(true){
if((i__17885__auto___24520 < len__17884__auto___24519)){
args__17891__auto__.push((arguments[i__17885__auto___24520]));

var G__24521 = (i__17885__auto___24520 + (1));
i__17885__auto___24520 = G__24521;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24516){
var map__24517 = p__24516;
var map__24517__$1 = ((((!((map__24517 == null)))?((((map__24517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24517):map__24517);
var opts = map__24517__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24515){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24515));
});

//# sourceMappingURL=client.js.map?rel=1453830138381