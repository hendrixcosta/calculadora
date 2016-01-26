// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23565 = arguments.length;
var i__17885__auto___23566 = (0);
while(true){
if((i__17885__auto___23566 < len__17884__auto___23565)){
args__17891__auto__.push((arguments[i__17885__auto___23566]));

var G__23567 = (i__17885__auto___23566 + (1));
i__17885__auto___23566 = G__23567;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23557_23568 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23558_23569 = null;
var count__23559_23570 = (0);
var i__23560_23571 = (0);
while(true){
if((i__23560_23571 < count__23559_23570)){
var k_23572 = cljs.core._nth.call(null,chunk__23558_23569,i__23560_23571);
e.setAttribute(cljs.core.name.call(null,k_23572),cljs.core.get.call(null,attrs,k_23572));

var G__23573 = seq__23557_23568;
var G__23574 = chunk__23558_23569;
var G__23575 = count__23559_23570;
var G__23576 = (i__23560_23571 + (1));
seq__23557_23568 = G__23573;
chunk__23558_23569 = G__23574;
count__23559_23570 = G__23575;
i__23560_23571 = G__23576;
continue;
} else {
var temp__4425__auto___23577 = cljs.core.seq.call(null,seq__23557_23568);
if(temp__4425__auto___23577){
var seq__23557_23578__$1 = temp__4425__auto___23577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23557_23578__$1)){
var c__17629__auto___23579 = cljs.core.chunk_first.call(null,seq__23557_23578__$1);
var G__23580 = cljs.core.chunk_rest.call(null,seq__23557_23578__$1);
var G__23581 = c__17629__auto___23579;
var G__23582 = cljs.core.count.call(null,c__17629__auto___23579);
var G__23583 = (0);
seq__23557_23568 = G__23580;
chunk__23558_23569 = G__23581;
count__23559_23570 = G__23582;
i__23560_23571 = G__23583;
continue;
} else {
var k_23584 = cljs.core.first.call(null,seq__23557_23578__$1);
e.setAttribute(cljs.core.name.call(null,k_23584),cljs.core.get.call(null,attrs,k_23584));

var G__23585 = cljs.core.next.call(null,seq__23557_23578__$1);
var G__23586 = null;
var G__23587 = (0);
var G__23588 = (0);
seq__23557_23568 = G__23585;
chunk__23558_23569 = G__23586;
count__23559_23570 = G__23587;
i__23560_23571 = G__23588;
continue;
}
} else {
}
}
break;
}

var seq__23561_23589 = cljs.core.seq.call(null,children);
var chunk__23562_23590 = null;
var count__23563_23591 = (0);
var i__23564_23592 = (0);
while(true){
if((i__23564_23592 < count__23563_23591)){
var ch_23593 = cljs.core._nth.call(null,chunk__23562_23590,i__23564_23592);
e.appendChild(ch_23593);

var G__23594 = seq__23561_23589;
var G__23595 = chunk__23562_23590;
var G__23596 = count__23563_23591;
var G__23597 = (i__23564_23592 + (1));
seq__23561_23589 = G__23594;
chunk__23562_23590 = G__23595;
count__23563_23591 = G__23596;
i__23564_23592 = G__23597;
continue;
} else {
var temp__4425__auto___23598 = cljs.core.seq.call(null,seq__23561_23589);
if(temp__4425__auto___23598){
var seq__23561_23599__$1 = temp__4425__auto___23598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23561_23599__$1)){
var c__17629__auto___23600 = cljs.core.chunk_first.call(null,seq__23561_23599__$1);
var G__23601 = cljs.core.chunk_rest.call(null,seq__23561_23599__$1);
var G__23602 = c__17629__auto___23600;
var G__23603 = cljs.core.count.call(null,c__17629__auto___23600);
var G__23604 = (0);
seq__23561_23589 = G__23601;
chunk__23562_23590 = G__23602;
count__23563_23591 = G__23603;
i__23564_23592 = G__23604;
continue;
} else {
var ch_23605 = cljs.core.first.call(null,seq__23561_23599__$1);
e.appendChild(ch_23605);

var G__23606 = cljs.core.next.call(null,seq__23561_23599__$1);
var G__23607 = null;
var G__23608 = (0);
var G__23609 = (0);
seq__23561_23589 = G__23606;
chunk__23562_23590 = G__23607;
count__23563_23591 = G__23608;
i__23564_23592 = G__23609;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23554){
var G__23555 = cljs.core.first.call(null,seq23554);
var seq23554__$1 = cljs.core.next.call(null,seq23554);
var G__23556 = cljs.core.first.call(null,seq23554__$1);
var seq23554__$2 = cljs.core.next.call(null,seq23554__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23555,G__23556,seq23554__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23610 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23610.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23610.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23610.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23610);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23611,st_map){
var map__23616 = p__23611;
var map__23616__$1 = ((((!((map__23616 == null)))?((((map__23616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23616):map__23616);
var container_el = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23616,map__23616__$1,container_el){
return (function (p__23618){
var vec__23619 = p__23618;
var k = cljs.core.nth.call(null,vec__23619,(0),null);
var v = cljs.core.nth.call(null,vec__23619,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23616,map__23616__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23620,dom_str){
var map__23623 = p__23620;
var map__23623__$1 = ((((!((map__23623 == null)))?((((map__23623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23623):map__23623);
var c = map__23623__$1;
var content_area_el = cljs.core.get.call(null,map__23623__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23625){
var map__23628 = p__23625;
var map__23628__$1 = ((((!((map__23628 == null)))?((((map__23628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23628):map__23628);
var content_area_el = cljs.core.get.call(null,map__23628__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_23671){
var state_val_23672 = (state_23671[(1)]);
if((state_val_23672 === (1))){
var inst_23656 = (state_23671[(7)]);
var inst_23656__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23657 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23658 = ["10px","10px","100%","68px","1.0"];
var inst_23659 = cljs.core.PersistentHashMap.fromArrays(inst_23657,inst_23658);
var inst_23660 = cljs.core.merge.call(null,inst_23659,style);
var inst_23661 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23656__$1,inst_23660);
var inst_23662 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23656__$1,msg);
var inst_23663 = cljs.core.async.timeout.call(null,(300));
var state_23671__$1 = (function (){var statearr_23673 = state_23671;
(statearr_23673[(8)] = inst_23662);

(statearr_23673[(7)] = inst_23656__$1);

(statearr_23673[(9)] = inst_23661);

return statearr_23673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23671__$1,(2),inst_23663);
} else {
if((state_val_23672 === (2))){
var inst_23656 = (state_23671[(7)]);
var inst_23665 = (state_23671[(2)]);
var inst_23666 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23667 = ["auto"];
var inst_23668 = cljs.core.PersistentHashMap.fromArrays(inst_23666,inst_23667);
var inst_23669 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23656,inst_23668);
var state_23671__$1 = (function (){var statearr_23674 = state_23671;
(statearr_23674[(10)] = inst_23665);

return statearr_23674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23671__$1,inst_23669);
} else {
return null;
}
}
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____0 = (function (){
var statearr_23678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23678[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__);

(statearr_23678[(1)] = (1));

return statearr_23678;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____1 = (function (state_23671){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_23671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e23679){if((e23679 instanceof Object)){
var ex__19354__auto__ = e23679;
var statearr_23680_23682 = state_23671;
(statearr_23680_23682[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23683 = state_23671;
state_23671 = G__23683;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__ = function(state_23671){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____1.call(this,state_23671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_23681 = f__19463__auto__.call(null);
(statearr_23681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_23681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23685 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23685,(0),null);
var ln = cljs.core.nth.call(null,vec__23685,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23688 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23688,(0),null);
var file_line = cljs.core.nth.call(null,vec__23688,(1),null);
var file_column = cljs.core.nth.call(null,vec__23688,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23688,file_name,file_line,file_column){
return (function (p1__23686_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23686_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23688,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23691 = figwheel.client.heads_up.ensure_container.call(null);
var map__23691__$1 = ((((!((map__23691 == null)))?((((map__23691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23691):map__23691);
var content_area_el = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_23739){
var state_val_23740 = (state_23739[(1)]);
if((state_val_23740 === (1))){
var inst_23722 = (state_23739[(7)]);
var inst_23722__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23723 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23724 = ["0.0"];
var inst_23725 = cljs.core.PersistentHashMap.fromArrays(inst_23723,inst_23724);
var inst_23726 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23722__$1,inst_23725);
var inst_23727 = cljs.core.async.timeout.call(null,(300));
var state_23739__$1 = (function (){var statearr_23741 = state_23739;
(statearr_23741[(7)] = inst_23722__$1);

(statearr_23741[(8)] = inst_23726);

return statearr_23741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23739__$1,(2),inst_23727);
} else {
if((state_val_23740 === (2))){
var inst_23722 = (state_23739[(7)]);
var inst_23729 = (state_23739[(2)]);
var inst_23730 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23731 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23732 = cljs.core.PersistentHashMap.fromArrays(inst_23730,inst_23731);
var inst_23733 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23722,inst_23732);
var inst_23734 = cljs.core.async.timeout.call(null,(200));
var state_23739__$1 = (function (){var statearr_23742 = state_23739;
(statearr_23742[(9)] = inst_23729);

(statearr_23742[(10)] = inst_23733);

return statearr_23742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23739__$1,(3),inst_23734);
} else {
if((state_val_23740 === (3))){
var inst_23722 = (state_23739[(7)]);
var inst_23736 = (state_23739[(2)]);
var inst_23737 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23722,"");
var state_23739__$1 = (function (){var statearr_23743 = state_23739;
(statearr_23743[(11)] = inst_23736);

return statearr_23743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23739__$1,inst_23737);
} else {
return null;
}
}
}
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19351__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19351__auto____0 = (function (){
var statearr_23747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23747[(0)] = figwheel$client$heads_up$clear_$_state_machine__19351__auto__);

(statearr_23747[(1)] = (1));

return statearr_23747;
});
var figwheel$client$heads_up$clear_$_state_machine__19351__auto____1 = (function (state_23739){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_23739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object)){
var ex__19354__auto__ = e23748;
var statearr_23749_23751 = state_23739;
(statearr_23749_23751[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23752 = state_23739;
state_23739 = G__23752;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19351__auto__ = function(state_23739){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19351__auto____1.call(this,state_23739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19351__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19351__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_23750 = f__19463__auto__.call(null);
(statearr_23750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_23750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_23784){
var state_val_23785 = (state_23784[(1)]);
if((state_val_23785 === (1))){
var inst_23774 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(2),inst_23774);
} else {
if((state_val_23785 === (2))){
var inst_23776 = (state_23784[(2)]);
var inst_23777 = cljs.core.async.timeout.call(null,(400));
var state_23784__$1 = (function (){var statearr_23786 = state_23784;
(statearr_23786[(7)] = inst_23776);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(3),inst_23777);
} else {
if((state_val_23785 === (3))){
var inst_23779 = (state_23784[(2)]);
var inst_23780 = figwheel.client.heads_up.clear.call(null);
var state_23784__$1 = (function (){var statearr_23787 = state_23784;
(statearr_23787[(8)] = inst_23779);

return statearr_23787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(4),inst_23780);
} else {
if((state_val_23785 === (4))){
var inst_23782 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23784__$1,inst_23782);
} else {
return null;
}
}
}
}
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____0 = (function (){
var statearr_23791 = [null,null,null,null,null,null,null,null,null];
(statearr_23791[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__);

(statearr_23791[(1)] = (1));

return statearr_23791;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____1 = (function (state_23784){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_23784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e23792){if((e23792 instanceof Object)){
var ex__19354__auto__ = e23792;
var statearr_23793_23795 = state_23784;
(statearr_23793_23795[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23796 = state_23784;
state_23784 = G__23796;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_23794 = f__19463__auto__.call(null);
(statearr_23794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_23794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1453830137431