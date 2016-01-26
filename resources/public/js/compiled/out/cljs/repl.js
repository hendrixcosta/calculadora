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
var seq__23380_23394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23381_23395 = null;
var count__23382_23396 = (0);
var i__23383_23397 = (0);
while(true){
if((i__23383_23397 < count__23382_23396)){
var f_23398 = cljs.core._nth.call(null,chunk__23381_23395,i__23383_23397);
cljs.core.println.call(null,"  ",f_23398);

var G__23399 = seq__23380_23394;
var G__23400 = chunk__23381_23395;
var G__23401 = count__23382_23396;
var G__23402 = (i__23383_23397 + (1));
seq__23380_23394 = G__23399;
chunk__23381_23395 = G__23400;
count__23382_23396 = G__23401;
i__23383_23397 = G__23402;
continue;
} else {
var temp__4425__auto___23403 = cljs.core.seq.call(null,seq__23380_23394);
if(temp__4425__auto___23403){
var seq__23380_23404__$1 = temp__4425__auto___23403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23380_23404__$1)){
var c__17629__auto___23405 = cljs.core.chunk_first.call(null,seq__23380_23404__$1);
var G__23406 = cljs.core.chunk_rest.call(null,seq__23380_23404__$1);
var G__23407 = c__17629__auto___23405;
var G__23408 = cljs.core.count.call(null,c__17629__auto___23405);
var G__23409 = (0);
seq__23380_23394 = G__23406;
chunk__23381_23395 = G__23407;
count__23382_23396 = G__23408;
i__23383_23397 = G__23409;
continue;
} else {
var f_23410 = cljs.core.first.call(null,seq__23380_23404__$1);
cljs.core.println.call(null,"  ",f_23410);

var G__23411 = cljs.core.next.call(null,seq__23380_23404__$1);
var G__23412 = null;
var G__23413 = (0);
var G__23414 = (0);
seq__23380_23394 = G__23411;
chunk__23381_23395 = G__23412;
count__23382_23396 = G__23413;
i__23383_23397 = G__23414;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23415 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23415);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23415)))?cljs.core.second.call(null,arglists_23415):arglists_23415));
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
var seq__23384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23385 = null;
var count__23386 = (0);
var i__23387 = (0);
while(true){
if((i__23387 < count__23386)){
var vec__23388 = cljs.core._nth.call(null,chunk__23385,i__23387);
var name = cljs.core.nth.call(null,vec__23388,(0),null);
var map__23389 = cljs.core.nth.call(null,vec__23388,(1),null);
var map__23389__$1 = ((((!((map__23389 == null)))?((((map__23389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23389):map__23389);
var doc = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23416 = seq__23384;
var G__23417 = chunk__23385;
var G__23418 = count__23386;
var G__23419 = (i__23387 + (1));
seq__23384 = G__23416;
chunk__23385 = G__23417;
count__23386 = G__23418;
i__23387 = G__23419;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23384);
if(temp__4425__auto__){
var seq__23384__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23384__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23384__$1);
var G__23420 = cljs.core.chunk_rest.call(null,seq__23384__$1);
var G__23421 = c__17629__auto__;
var G__23422 = cljs.core.count.call(null,c__17629__auto__);
var G__23423 = (0);
seq__23384 = G__23420;
chunk__23385 = G__23421;
count__23386 = G__23422;
i__23387 = G__23423;
continue;
} else {
var vec__23391 = cljs.core.first.call(null,seq__23384__$1);
var name = cljs.core.nth.call(null,vec__23391,(0),null);
var map__23392 = cljs.core.nth.call(null,vec__23391,(1),null);
var map__23392__$1 = ((((!((map__23392 == null)))?((((map__23392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);
var doc = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23424 = cljs.core.next.call(null,seq__23384__$1);
var G__23425 = null;
var G__23426 = (0);
var G__23427 = (0);
seq__23384 = G__23424;
chunk__23385 = G__23425;
count__23386 = G__23426;
i__23387 = G__23427;
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

//# sourceMappingURL=repl.js.map?rel=1453830136277