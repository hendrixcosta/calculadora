// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31831_31845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31832_31846 = null;
var count__31833_31847 = (0);
var i__31834_31848 = (0);
while(true){
if((i__31834_31848 < count__31833_31847)){
var f_31849 = cljs.core._nth.call(null,chunk__31832_31846,i__31834_31848);
cljs.core.println.call(null,"  ",f_31849);

var G__31850 = seq__31831_31845;
var G__31851 = chunk__31832_31846;
var G__31852 = count__31833_31847;
var G__31853 = (i__31834_31848 + (1));
seq__31831_31845 = G__31850;
chunk__31832_31846 = G__31851;
count__31833_31847 = G__31852;
i__31834_31848 = G__31853;
continue;
} else {
var temp__4425__auto___31854 = cljs.core.seq.call(null,seq__31831_31845);
if(temp__4425__auto___31854){
var seq__31831_31855__$1 = temp__4425__auto___31854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31831_31855__$1)){
var c__19231__auto___31856 = cljs.core.chunk_first.call(null,seq__31831_31855__$1);
var G__31857 = cljs.core.chunk_rest.call(null,seq__31831_31855__$1);
var G__31858 = c__19231__auto___31856;
var G__31859 = cljs.core.count.call(null,c__19231__auto___31856);
var G__31860 = (0);
seq__31831_31845 = G__31857;
chunk__31832_31846 = G__31858;
count__31833_31847 = G__31859;
i__31834_31848 = G__31860;
continue;
} else {
var f_31861 = cljs.core.first.call(null,seq__31831_31855__$1);
cljs.core.println.call(null,"  ",f_31861);

var G__31862 = cljs.core.next.call(null,seq__31831_31855__$1);
var G__31863 = null;
var G__31864 = (0);
var G__31865 = (0);
seq__31831_31845 = G__31862;
chunk__31832_31846 = G__31863;
count__31833_31847 = G__31864;
i__31834_31848 = G__31865;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18428__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31866);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31866)))?cljs.core.second.call(null,arglists_31866):arglists_31866));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31835 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31836 = null;
var count__31837 = (0);
var i__31838 = (0);
while(true){
if((i__31838 < count__31837)){
var vec__31839 = cljs.core._nth.call(null,chunk__31836,i__31838);
var name = cljs.core.nth.call(null,vec__31839,(0),null);
var map__31840 = cljs.core.nth.call(null,vec__31839,(1),null);
var map__31840__$1 = ((((!((map__31840 == null)))?((((map__31840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);
var doc = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31867 = seq__31835;
var G__31868 = chunk__31836;
var G__31869 = count__31837;
var G__31870 = (i__31838 + (1));
seq__31835 = G__31867;
chunk__31836 = G__31868;
count__31837 = G__31869;
i__31838 = G__31870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31835);
if(temp__4425__auto__){
var seq__31835__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31835__$1)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,seq__31835__$1);
var G__31871 = cljs.core.chunk_rest.call(null,seq__31835__$1);
var G__31872 = c__19231__auto__;
var G__31873 = cljs.core.count.call(null,c__19231__auto__);
var G__31874 = (0);
seq__31835 = G__31871;
chunk__31836 = G__31872;
count__31837 = G__31873;
i__31838 = G__31874;
continue;
} else {
var vec__31842 = cljs.core.first.call(null,seq__31835__$1);
var name = cljs.core.nth.call(null,vec__31842,(0),null);
var map__31843 = cljs.core.nth.call(null,vec__31842,(1),null);
var map__31843__$1 = ((((!((map__31843 == null)))?((((map__31843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);
var doc = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31875 = cljs.core.next.call(null,seq__31835__$1);
var G__31876 = null;
var G__31877 = (0);
var G__31878 = (0);
seq__31835 = G__31875;
chunk__31836 = G__31876;
count__31837 = G__31877;
i__31838 = G__31878;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454378538291