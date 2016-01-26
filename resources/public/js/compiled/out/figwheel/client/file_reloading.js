// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22356_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22356_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22361 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22362 = null;
var count__22363 = (0);
var i__22364 = (0);
while(true){
if((i__22364 < count__22363)){
var n = cljs.core._nth.call(null,chunk__22362,i__22364);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22365 = seq__22361;
var G__22366 = chunk__22362;
var G__22367 = count__22363;
var G__22368 = (i__22364 + (1));
seq__22361 = G__22365;
chunk__22362 = G__22366;
count__22363 = G__22367;
i__22364 = G__22368;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22361);
if(temp__4425__auto__){
var seq__22361__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22361__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22361__$1);
var G__22369 = cljs.core.chunk_rest.call(null,seq__22361__$1);
var G__22370 = c__17629__auto__;
var G__22371 = cljs.core.count.call(null,c__17629__auto__);
var G__22372 = (0);
seq__22361 = G__22369;
chunk__22362 = G__22370;
count__22363 = G__22371;
i__22364 = G__22372;
continue;
} else {
var n = cljs.core.first.call(null,seq__22361__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22373 = cljs.core.next.call(null,seq__22361__$1);
var G__22374 = null;
var G__22375 = (0);
var G__22376 = (0);
seq__22361 = G__22373;
chunk__22362 = G__22374;
count__22363 = G__22375;
i__22364 = G__22376;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22415_22422 = cljs.core.seq.call(null,deps);
var chunk__22416_22423 = null;
var count__22417_22424 = (0);
var i__22418_22425 = (0);
while(true){
if((i__22418_22425 < count__22417_22424)){
var dep_22426 = cljs.core._nth.call(null,chunk__22416_22423,i__22418_22425);
topo_sort_helper_STAR_.call(null,dep_22426,(depth + (1)),state);

var G__22427 = seq__22415_22422;
var G__22428 = chunk__22416_22423;
var G__22429 = count__22417_22424;
var G__22430 = (i__22418_22425 + (1));
seq__22415_22422 = G__22427;
chunk__22416_22423 = G__22428;
count__22417_22424 = G__22429;
i__22418_22425 = G__22430;
continue;
} else {
var temp__4425__auto___22431 = cljs.core.seq.call(null,seq__22415_22422);
if(temp__4425__auto___22431){
var seq__22415_22432__$1 = temp__4425__auto___22431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22415_22432__$1)){
var c__17629__auto___22433 = cljs.core.chunk_first.call(null,seq__22415_22432__$1);
var G__22434 = cljs.core.chunk_rest.call(null,seq__22415_22432__$1);
var G__22435 = c__17629__auto___22433;
var G__22436 = cljs.core.count.call(null,c__17629__auto___22433);
var G__22437 = (0);
seq__22415_22422 = G__22434;
chunk__22416_22423 = G__22435;
count__22417_22424 = G__22436;
i__22418_22425 = G__22437;
continue;
} else {
var dep_22438 = cljs.core.first.call(null,seq__22415_22432__$1);
topo_sort_helper_STAR_.call(null,dep_22438,(depth + (1)),state);

var G__22439 = cljs.core.next.call(null,seq__22415_22432__$1);
var G__22440 = null;
var G__22441 = (0);
var G__22442 = (0);
seq__22415_22422 = G__22439;
chunk__22416_22423 = G__22440;
count__22417_22424 = G__22441;
i__22418_22425 = G__22442;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22419){
var vec__22421 = p__22419;
var x = cljs.core.nth.call(null,vec__22421,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22421,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22421,x,xs,get_deps__$1){
return (function (p1__22377_SHARP_){
return clojure.set.difference.call(null,p1__22377_SHARP_,x);
});})(vec__22421,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22455 = cljs.core.seq.call(null,provides);
var chunk__22456 = null;
var count__22457 = (0);
var i__22458 = (0);
while(true){
if((i__22458 < count__22457)){
var prov = cljs.core._nth.call(null,chunk__22456,i__22458);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22459_22467 = cljs.core.seq.call(null,requires);
var chunk__22460_22468 = null;
var count__22461_22469 = (0);
var i__22462_22470 = (0);
while(true){
if((i__22462_22470 < count__22461_22469)){
var req_22471 = cljs.core._nth.call(null,chunk__22460_22468,i__22462_22470);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22471,prov);

var G__22472 = seq__22459_22467;
var G__22473 = chunk__22460_22468;
var G__22474 = count__22461_22469;
var G__22475 = (i__22462_22470 + (1));
seq__22459_22467 = G__22472;
chunk__22460_22468 = G__22473;
count__22461_22469 = G__22474;
i__22462_22470 = G__22475;
continue;
} else {
var temp__4425__auto___22476 = cljs.core.seq.call(null,seq__22459_22467);
if(temp__4425__auto___22476){
var seq__22459_22477__$1 = temp__4425__auto___22476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22459_22477__$1)){
var c__17629__auto___22478 = cljs.core.chunk_first.call(null,seq__22459_22477__$1);
var G__22479 = cljs.core.chunk_rest.call(null,seq__22459_22477__$1);
var G__22480 = c__17629__auto___22478;
var G__22481 = cljs.core.count.call(null,c__17629__auto___22478);
var G__22482 = (0);
seq__22459_22467 = G__22479;
chunk__22460_22468 = G__22480;
count__22461_22469 = G__22481;
i__22462_22470 = G__22482;
continue;
} else {
var req_22483 = cljs.core.first.call(null,seq__22459_22477__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22483,prov);

var G__22484 = cljs.core.next.call(null,seq__22459_22477__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__22459_22467 = G__22484;
chunk__22460_22468 = G__22485;
count__22461_22469 = G__22486;
i__22462_22470 = G__22487;
continue;
}
} else {
}
}
break;
}

var G__22488 = seq__22455;
var G__22489 = chunk__22456;
var G__22490 = count__22457;
var G__22491 = (i__22458 + (1));
seq__22455 = G__22488;
chunk__22456 = G__22489;
count__22457 = G__22490;
i__22458 = G__22491;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22455);
if(temp__4425__auto__){
var seq__22455__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22455__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22455__$1);
var G__22492 = cljs.core.chunk_rest.call(null,seq__22455__$1);
var G__22493 = c__17629__auto__;
var G__22494 = cljs.core.count.call(null,c__17629__auto__);
var G__22495 = (0);
seq__22455 = G__22492;
chunk__22456 = G__22493;
count__22457 = G__22494;
i__22458 = G__22495;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22455__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22463_22496 = cljs.core.seq.call(null,requires);
var chunk__22464_22497 = null;
var count__22465_22498 = (0);
var i__22466_22499 = (0);
while(true){
if((i__22466_22499 < count__22465_22498)){
var req_22500 = cljs.core._nth.call(null,chunk__22464_22497,i__22466_22499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22500,prov);

var G__22501 = seq__22463_22496;
var G__22502 = chunk__22464_22497;
var G__22503 = count__22465_22498;
var G__22504 = (i__22466_22499 + (1));
seq__22463_22496 = G__22501;
chunk__22464_22497 = G__22502;
count__22465_22498 = G__22503;
i__22466_22499 = G__22504;
continue;
} else {
var temp__4425__auto___22505__$1 = cljs.core.seq.call(null,seq__22463_22496);
if(temp__4425__auto___22505__$1){
var seq__22463_22506__$1 = temp__4425__auto___22505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22463_22506__$1)){
var c__17629__auto___22507 = cljs.core.chunk_first.call(null,seq__22463_22506__$1);
var G__22508 = cljs.core.chunk_rest.call(null,seq__22463_22506__$1);
var G__22509 = c__17629__auto___22507;
var G__22510 = cljs.core.count.call(null,c__17629__auto___22507);
var G__22511 = (0);
seq__22463_22496 = G__22508;
chunk__22464_22497 = G__22509;
count__22465_22498 = G__22510;
i__22466_22499 = G__22511;
continue;
} else {
var req_22512 = cljs.core.first.call(null,seq__22463_22506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22512,prov);

var G__22513 = cljs.core.next.call(null,seq__22463_22506__$1);
var G__22514 = null;
var G__22515 = (0);
var G__22516 = (0);
seq__22463_22496 = G__22513;
chunk__22464_22497 = G__22514;
count__22465_22498 = G__22515;
i__22466_22499 = G__22516;
continue;
}
} else {
}
}
break;
}

var G__22517 = cljs.core.next.call(null,seq__22455__$1);
var G__22518 = null;
var G__22519 = (0);
var G__22520 = (0);
seq__22455 = G__22517;
chunk__22456 = G__22518;
count__22457 = G__22519;
i__22458 = G__22520;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22525_22529 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22526_22530 = null;
var count__22527_22531 = (0);
var i__22528_22532 = (0);
while(true){
if((i__22528_22532 < count__22527_22531)){
var ns_22533 = cljs.core._nth.call(null,chunk__22526_22530,i__22528_22532);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22533);

var G__22534 = seq__22525_22529;
var G__22535 = chunk__22526_22530;
var G__22536 = count__22527_22531;
var G__22537 = (i__22528_22532 + (1));
seq__22525_22529 = G__22534;
chunk__22526_22530 = G__22535;
count__22527_22531 = G__22536;
i__22528_22532 = G__22537;
continue;
} else {
var temp__4425__auto___22538 = cljs.core.seq.call(null,seq__22525_22529);
if(temp__4425__auto___22538){
var seq__22525_22539__$1 = temp__4425__auto___22538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22525_22539__$1)){
var c__17629__auto___22540 = cljs.core.chunk_first.call(null,seq__22525_22539__$1);
var G__22541 = cljs.core.chunk_rest.call(null,seq__22525_22539__$1);
var G__22542 = c__17629__auto___22540;
var G__22543 = cljs.core.count.call(null,c__17629__auto___22540);
var G__22544 = (0);
seq__22525_22529 = G__22541;
chunk__22526_22530 = G__22542;
count__22527_22531 = G__22543;
i__22528_22532 = G__22544;
continue;
} else {
var ns_22545 = cljs.core.first.call(null,seq__22525_22539__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22545);

var G__22546 = cljs.core.next.call(null,seq__22525_22539__$1);
var G__22547 = null;
var G__22548 = (0);
var G__22549 = (0);
seq__22525_22529 = G__22546;
chunk__22526_22530 = G__22547;
count__22527_22531 = G__22548;
i__22528_22532 = G__22549;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22550__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22551__i = 0, G__22551__a = new Array(arguments.length -  0);
while (G__22551__i < G__22551__a.length) {G__22551__a[G__22551__i] = arguments[G__22551__i + 0]; ++G__22551__i;}
  args = new cljs.core.IndexedSeq(G__22551__a,0);
} 
return G__22550__delegate.call(this,args);};
G__22550.cljs$lang$maxFixedArity = 0;
G__22550.cljs$lang$applyTo = (function (arglist__22552){
var args = cljs.core.seq(arglist__22552);
return G__22550__delegate(args);
});
G__22550.cljs$core$IFn$_invoke$arity$variadic = G__22550__delegate;
return G__22550;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22554 = cljs.core._EQ_;
var expr__22555 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22554.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22555))){
var path_parts = ((function (pred__22554,expr__22555){
return (function (p1__22553_SHARP_){
return clojure.string.split.call(null,p1__22553_SHARP_,/[\/\\]/);
});})(pred__22554,expr__22555))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22554,expr__22555){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22557){if((e22557 instanceof Error)){
var e = e22557;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22557;

}
}})());
});
;})(path_parts,sep,root,pred__22554,expr__22555))
} else {
if(cljs.core.truth_(pred__22554.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22555))){
return ((function (pred__22554,expr__22555){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22554,expr__22555){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22554,expr__22555))
);

return deferred.addErrback(((function (deferred,pred__22554,expr__22555){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22554,expr__22555))
);
});
;})(pred__22554,expr__22555))
} else {
return ((function (pred__22554,expr__22555){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22554,expr__22555))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22558,callback){
var map__22561 = p__22558;
var map__22561__$1 = ((((!((map__22561 == null)))?((((map__22561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22561):map__22561);
var file_msg = map__22561__$1;
var request_url = cljs.core.get.call(null,map__22561__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22561,map__22561__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22561,map__22561__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__){
return (function (state_22585){
var state_val_22586 = (state_22585[(1)]);
if((state_val_22586 === (7))){
var inst_22581 = (state_22585[(2)]);
var state_22585__$1 = state_22585;
var statearr_22587_22607 = state_22585__$1;
(statearr_22587_22607[(2)] = inst_22581);

(statearr_22587_22607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (1))){
var state_22585__$1 = state_22585;
var statearr_22588_22608 = state_22585__$1;
(statearr_22588_22608[(2)] = null);

(statearr_22588_22608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (4))){
var inst_22565 = (state_22585[(7)]);
var inst_22565__$1 = (state_22585[(2)]);
var state_22585__$1 = (function (){var statearr_22589 = state_22585;
(statearr_22589[(7)] = inst_22565__$1);

return statearr_22589;
})();
if(cljs.core.truth_(inst_22565__$1)){
var statearr_22590_22609 = state_22585__$1;
(statearr_22590_22609[(1)] = (5));

} else {
var statearr_22591_22610 = state_22585__$1;
(statearr_22591_22610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (6))){
var state_22585__$1 = state_22585;
var statearr_22592_22611 = state_22585__$1;
(statearr_22592_22611[(2)] = null);

(statearr_22592_22611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (3))){
var inst_22583 = (state_22585[(2)]);
var state_22585__$1 = state_22585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22585__$1,inst_22583);
} else {
if((state_val_22586 === (2))){
var state_22585__$1 = state_22585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22585__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22586 === (11))){
var inst_22577 = (state_22585[(2)]);
var state_22585__$1 = (function (){var statearr_22593 = state_22585;
(statearr_22593[(8)] = inst_22577);

return statearr_22593;
})();
var statearr_22594_22612 = state_22585__$1;
(statearr_22594_22612[(2)] = null);

(statearr_22594_22612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (9))){
var inst_22571 = (state_22585[(9)]);
var inst_22569 = (state_22585[(10)]);
var inst_22573 = inst_22571.call(null,inst_22569);
var state_22585__$1 = state_22585;
var statearr_22595_22613 = state_22585__$1;
(statearr_22595_22613[(2)] = inst_22573);

(statearr_22595_22613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (5))){
var inst_22565 = (state_22585[(7)]);
var inst_22567 = figwheel.client.file_reloading.blocking_load.call(null,inst_22565);
var state_22585__$1 = state_22585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22585__$1,(8),inst_22567);
} else {
if((state_val_22586 === (10))){
var inst_22569 = (state_22585[(10)]);
var inst_22575 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22569);
var state_22585__$1 = state_22585;
var statearr_22596_22614 = state_22585__$1;
(statearr_22596_22614[(2)] = inst_22575);

(statearr_22596_22614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (8))){
var inst_22565 = (state_22585[(7)]);
var inst_22571 = (state_22585[(9)]);
var inst_22569 = (state_22585[(2)]);
var inst_22570 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22571__$1 = cljs.core.get.call(null,inst_22570,inst_22565);
var state_22585__$1 = (function (){var statearr_22597 = state_22585;
(statearr_22597[(9)] = inst_22571__$1);

(statearr_22597[(10)] = inst_22569);

return statearr_22597;
})();
if(cljs.core.truth_(inst_22571__$1)){
var statearr_22598_22615 = state_22585__$1;
(statearr_22598_22615[(1)] = (9));

} else {
var statearr_22599_22616 = state_22585__$1;
(statearr_22599_22616[(1)] = (10));

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
});})(c__19462__auto__))
;
return ((function (switch__19350__auto__,c__19462__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19351__auto__ = null;
var figwheel$client$file_reloading$state_machine__19351__auto____0 = (function (){
var statearr_22603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22603[(0)] = figwheel$client$file_reloading$state_machine__19351__auto__);

(statearr_22603[(1)] = (1));

return statearr_22603;
});
var figwheel$client$file_reloading$state_machine__19351__auto____1 = (function (state_22585){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_22585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e22604){if((e22604 instanceof Object)){
var ex__19354__auto__ = e22604;
var statearr_22605_22617 = state_22585;
(statearr_22605_22617[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22618 = state_22585;
state_22585 = G__22618;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19351__auto__ = function(state_22585){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19351__auto____1.call(this,state_22585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19351__auto____0;
figwheel$client$file_reloading$state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19351__auto____1;
return figwheel$client$file_reloading$state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__))
})();
var state__19464__auto__ = (function (){var statearr_22606 = f__19463__auto__.call(null);
(statearr_22606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_22606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__))
);

return c__19462__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22619,callback){
var map__22622 = p__22619;
var map__22622__$1 = ((((!((map__22622 == null)))?((((map__22622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22622):map__22622);
var file_msg = map__22622__$1;
var namespace = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22622,map__22622__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22622,map__22622__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22624){
var map__22627 = p__22624;
var map__22627__$1 = ((((!((map__22627 == null)))?((((map__22627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22627):map__22627);
var file_msg = map__22627__$1;
var namespace = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22629,callback){
var map__22632 = p__22629;
var map__22632__$1 = ((((!((map__22632 == null)))?((((map__22632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22632):map__22632);
var file_msg = map__22632__$1;
var request_url = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19462__auto___22720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto___22720,out){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto___22720,out){
return (function (state_22702){
var state_val_22703 = (state_22702[(1)]);
if((state_val_22703 === (1))){
var inst_22680 = cljs.core.nth.call(null,files,(0),null);
var inst_22681 = cljs.core.nthnext.call(null,files,(1));
var inst_22682 = files;
var state_22702__$1 = (function (){var statearr_22704 = state_22702;
(statearr_22704[(7)] = inst_22680);

(statearr_22704[(8)] = inst_22682);

(statearr_22704[(9)] = inst_22681);

return statearr_22704;
})();
var statearr_22705_22721 = state_22702__$1;
(statearr_22705_22721[(2)] = null);

(statearr_22705_22721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (2))){
var inst_22682 = (state_22702[(8)]);
var inst_22685 = (state_22702[(10)]);
var inst_22685__$1 = cljs.core.nth.call(null,inst_22682,(0),null);
var inst_22686 = cljs.core.nthnext.call(null,inst_22682,(1));
var inst_22687 = (inst_22685__$1 == null);
var inst_22688 = cljs.core.not.call(null,inst_22687);
var state_22702__$1 = (function (){var statearr_22706 = state_22702;
(statearr_22706[(11)] = inst_22686);

(statearr_22706[(10)] = inst_22685__$1);

return statearr_22706;
})();
if(inst_22688){
var statearr_22707_22722 = state_22702__$1;
(statearr_22707_22722[(1)] = (4));

} else {
var statearr_22708_22723 = state_22702__$1;
(statearr_22708_22723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (3))){
var inst_22700 = (state_22702[(2)]);
var state_22702__$1 = state_22702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22702__$1,inst_22700);
} else {
if((state_val_22703 === (4))){
var inst_22685 = (state_22702[(10)]);
var inst_22690 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22685);
var state_22702__$1 = state_22702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22702__$1,(7),inst_22690);
} else {
if((state_val_22703 === (5))){
var inst_22696 = cljs.core.async.close_BANG_.call(null,out);
var state_22702__$1 = state_22702;
var statearr_22709_22724 = state_22702__$1;
(statearr_22709_22724[(2)] = inst_22696);

(statearr_22709_22724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (6))){
var inst_22698 = (state_22702[(2)]);
var state_22702__$1 = state_22702;
var statearr_22710_22725 = state_22702__$1;
(statearr_22710_22725[(2)] = inst_22698);

(statearr_22710_22725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (7))){
var inst_22686 = (state_22702[(11)]);
var inst_22692 = (state_22702[(2)]);
var inst_22693 = cljs.core.async.put_BANG_.call(null,out,inst_22692);
var inst_22682 = inst_22686;
var state_22702__$1 = (function (){var statearr_22711 = state_22702;
(statearr_22711[(8)] = inst_22682);

(statearr_22711[(12)] = inst_22693);

return statearr_22711;
})();
var statearr_22712_22726 = state_22702__$1;
(statearr_22712_22726[(2)] = null);

(statearr_22712_22726[(1)] = (2));


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
});})(c__19462__auto___22720,out))
;
return ((function (switch__19350__auto__,c__19462__auto___22720,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____0 = (function (){
var statearr_22716 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22716[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__);

(statearr_22716[(1)] = (1));

return statearr_22716;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____1 = (function (state_22702){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_22702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e22717){if((e22717 instanceof Object)){
var ex__19354__auto__ = e22717;
var statearr_22718_22727 = state_22702;
(statearr_22718_22727[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22728 = state_22702;
state_22702 = G__22728;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__ = function(state_22702){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____1.call(this,state_22702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto___22720,out))
})();
var state__19464__auto__ = (function (){var statearr_22719 = f__19463__auto__.call(null);
(statearr_22719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto___22720);

return statearr_22719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto___22720,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22729,opts){
var map__22733 = p__22729;
var map__22733__$1 = ((((!((map__22733 == null)))?((((map__22733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22733):map__22733);
var eval_body__$1 = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22735){var e = e22735;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22736_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22736_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22741){
var vec__22742 = p__22741;
var k = cljs.core.nth.call(null,vec__22742,(0),null);
var v = cljs.core.nth.call(null,vec__22742,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22743){
var vec__22744 = p__22743;
var k = cljs.core.nth.call(null,vec__22744,(0),null);
var v = cljs.core.nth.call(null,vec__22744,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22748,p__22749){
var map__22996 = p__22748;
var map__22996__$1 = ((((!((map__22996 == null)))?((((map__22996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22996):map__22996);
var opts = map__22996__$1;
var before_jsload = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22997 = p__22749;
var map__22997__$1 = ((((!((map__22997 == null)))?((((map__22997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22997):map__22997);
var msg = map__22997__$1;
var files = cljs.core.get.call(null,map__22997__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22997__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22997__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19463__auto__ = (function (){var switch__19350__auto__ = ((function (c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23150){
var state_val_23151 = (state_23150[(1)]);
if((state_val_23151 === (7))){
var inst_23011 = (state_23150[(7)]);
var inst_23012 = (state_23150[(8)]);
var inst_23014 = (state_23150[(9)]);
var inst_23013 = (state_23150[(10)]);
var inst_23019 = cljs.core._nth.call(null,inst_23012,inst_23014);
var inst_23020 = figwheel.client.file_reloading.eval_body.call(null,inst_23019,opts);
var inst_23021 = (inst_23014 + (1));
var tmp23152 = inst_23011;
var tmp23153 = inst_23012;
var tmp23154 = inst_23013;
var inst_23011__$1 = tmp23152;
var inst_23012__$1 = tmp23153;
var inst_23013__$1 = tmp23154;
var inst_23014__$1 = inst_23021;
var state_23150__$1 = (function (){var statearr_23155 = state_23150;
(statearr_23155[(7)] = inst_23011__$1);

(statearr_23155[(8)] = inst_23012__$1);

(statearr_23155[(9)] = inst_23014__$1);

(statearr_23155[(11)] = inst_23020);

(statearr_23155[(10)] = inst_23013__$1);

return statearr_23155;
})();
var statearr_23156_23242 = state_23150__$1;
(statearr_23156_23242[(2)] = null);

(statearr_23156_23242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (20))){
var inst_23054 = (state_23150[(12)]);
var inst_23062 = figwheel.client.file_reloading.sort_files.call(null,inst_23054);
var state_23150__$1 = state_23150;
var statearr_23157_23243 = state_23150__$1;
(statearr_23157_23243[(2)] = inst_23062);

(statearr_23157_23243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (27))){
var state_23150__$1 = state_23150;
var statearr_23158_23244 = state_23150__$1;
(statearr_23158_23244[(2)] = null);

(statearr_23158_23244[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (1))){
var inst_23003 = (state_23150[(13)]);
var inst_23000 = before_jsload.call(null,files);
var inst_23001 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23002 = (function (){return ((function (inst_23003,inst_23000,inst_23001,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22745_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22745_SHARP_);
});
;})(inst_23003,inst_23000,inst_23001,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23003__$1 = cljs.core.filter.call(null,inst_23002,files);
var inst_23004 = cljs.core.not_empty.call(null,inst_23003__$1);
var state_23150__$1 = (function (){var statearr_23159 = state_23150;
(statearr_23159[(14)] = inst_23000);

(statearr_23159[(15)] = inst_23001);

(statearr_23159[(13)] = inst_23003__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23004)){
var statearr_23160_23245 = state_23150__$1;
(statearr_23160_23245[(1)] = (2));

} else {
var statearr_23161_23246 = state_23150__$1;
(statearr_23161_23246[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (24))){
var state_23150__$1 = state_23150;
var statearr_23162_23247 = state_23150__$1;
(statearr_23162_23247[(2)] = null);

(statearr_23162_23247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (39))){
var inst_23104 = (state_23150[(16)]);
var state_23150__$1 = state_23150;
var statearr_23163_23248 = state_23150__$1;
(statearr_23163_23248[(2)] = inst_23104);

(statearr_23163_23248[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (46))){
var inst_23145 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23164_23249 = state_23150__$1;
(statearr_23164_23249[(2)] = inst_23145);

(statearr_23164_23249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (4))){
var inst_23048 = (state_23150[(2)]);
var inst_23049 = cljs.core.List.EMPTY;
var inst_23050 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23049);
var inst_23051 = (function (){return ((function (inst_23048,inst_23049,inst_23050,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22746_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22746_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22746_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23048,inst_23049,inst_23050,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23052 = cljs.core.filter.call(null,inst_23051,files);
var inst_23053 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23054 = cljs.core.concat.call(null,inst_23052,inst_23053);
var state_23150__$1 = (function (){var statearr_23165 = state_23150;
(statearr_23165[(17)] = inst_23050);

(statearr_23165[(12)] = inst_23054);

(statearr_23165[(18)] = inst_23048);

return statearr_23165;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23166_23250 = state_23150__$1;
(statearr_23166_23250[(1)] = (16));

} else {
var statearr_23167_23251 = state_23150__$1;
(statearr_23167_23251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (15))){
var inst_23038 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23168_23252 = state_23150__$1;
(statearr_23168_23252[(2)] = inst_23038);

(statearr_23168_23252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (21))){
var inst_23064 = (state_23150[(19)]);
var inst_23064__$1 = (state_23150[(2)]);
var inst_23065 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23064__$1);
var state_23150__$1 = (function (){var statearr_23169 = state_23150;
(statearr_23169[(19)] = inst_23064__$1);

return statearr_23169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23150__$1,(22),inst_23065);
} else {
if((state_val_23151 === (31))){
var inst_23148 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23150__$1,inst_23148);
} else {
if((state_val_23151 === (32))){
var inst_23104 = (state_23150[(16)]);
var inst_23109 = inst_23104.cljs$lang$protocol_mask$partition0$;
var inst_23110 = (inst_23109 & (64));
var inst_23111 = inst_23104.cljs$core$ISeq$;
var inst_23112 = (inst_23110) || (inst_23111);
var state_23150__$1 = state_23150;
if(cljs.core.truth_(inst_23112)){
var statearr_23170_23253 = state_23150__$1;
(statearr_23170_23253[(1)] = (35));

} else {
var statearr_23171_23254 = state_23150__$1;
(statearr_23171_23254[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (40))){
var inst_23125 = (state_23150[(20)]);
var inst_23124 = (state_23150[(2)]);
var inst_23125__$1 = cljs.core.get.call(null,inst_23124,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23126 = cljs.core.get.call(null,inst_23124,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23127 = cljs.core.not_empty.call(null,inst_23125__$1);
var state_23150__$1 = (function (){var statearr_23172 = state_23150;
(statearr_23172[(20)] = inst_23125__$1);

(statearr_23172[(21)] = inst_23126);

return statearr_23172;
})();
if(cljs.core.truth_(inst_23127)){
var statearr_23173_23255 = state_23150__$1;
(statearr_23173_23255[(1)] = (41));

} else {
var statearr_23174_23256 = state_23150__$1;
(statearr_23174_23256[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (33))){
var state_23150__$1 = state_23150;
var statearr_23175_23257 = state_23150__$1;
(statearr_23175_23257[(2)] = false);

(statearr_23175_23257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (13))){
var inst_23024 = (state_23150[(22)]);
var inst_23028 = cljs.core.chunk_first.call(null,inst_23024);
var inst_23029 = cljs.core.chunk_rest.call(null,inst_23024);
var inst_23030 = cljs.core.count.call(null,inst_23028);
var inst_23011 = inst_23029;
var inst_23012 = inst_23028;
var inst_23013 = inst_23030;
var inst_23014 = (0);
var state_23150__$1 = (function (){var statearr_23176 = state_23150;
(statearr_23176[(7)] = inst_23011);

(statearr_23176[(8)] = inst_23012);

(statearr_23176[(9)] = inst_23014);

(statearr_23176[(10)] = inst_23013);

return statearr_23176;
})();
var statearr_23177_23258 = state_23150__$1;
(statearr_23177_23258[(2)] = null);

(statearr_23177_23258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (22))){
var inst_23068 = (state_23150[(23)]);
var inst_23064 = (state_23150[(19)]);
var inst_23072 = (state_23150[(24)]);
var inst_23067 = (state_23150[(25)]);
var inst_23067__$1 = (state_23150[(2)]);
var inst_23068__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23067__$1);
var inst_23069 = (function (){var all_files = inst_23064;
var res_SINGLEQUOTE_ = inst_23067__$1;
var res = inst_23068__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23068,inst_23064,inst_23072,inst_23067,inst_23067__$1,inst_23068__$1,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22747_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22747_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23068,inst_23064,inst_23072,inst_23067,inst_23067__$1,inst_23068__$1,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23070 = cljs.core.filter.call(null,inst_23069,inst_23067__$1);
var inst_23071 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23072__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23071);
var inst_23073 = cljs.core.not_empty.call(null,inst_23072__$1);
var state_23150__$1 = (function (){var statearr_23178 = state_23150;
(statearr_23178[(26)] = inst_23070);

(statearr_23178[(23)] = inst_23068__$1);

(statearr_23178[(24)] = inst_23072__$1);

(statearr_23178[(25)] = inst_23067__$1);

return statearr_23178;
})();
if(cljs.core.truth_(inst_23073)){
var statearr_23179_23259 = state_23150__$1;
(statearr_23179_23259[(1)] = (23));

} else {
var statearr_23180_23260 = state_23150__$1;
(statearr_23180_23260[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (36))){
var state_23150__$1 = state_23150;
var statearr_23181_23261 = state_23150__$1;
(statearr_23181_23261[(2)] = false);

(statearr_23181_23261[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (41))){
var inst_23125 = (state_23150[(20)]);
var inst_23129 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23130 = cljs.core.map.call(null,inst_23129,inst_23125);
var inst_23131 = cljs.core.pr_str.call(null,inst_23130);
var inst_23132 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23131)].join('');
var inst_23133 = figwheel.client.utils.log.call(null,inst_23132);
var state_23150__$1 = state_23150;
var statearr_23182_23262 = state_23150__$1;
(statearr_23182_23262[(2)] = inst_23133);

(statearr_23182_23262[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (43))){
var inst_23126 = (state_23150[(21)]);
var inst_23136 = (state_23150[(2)]);
var inst_23137 = cljs.core.not_empty.call(null,inst_23126);
var state_23150__$1 = (function (){var statearr_23183 = state_23150;
(statearr_23183[(27)] = inst_23136);

return statearr_23183;
})();
if(cljs.core.truth_(inst_23137)){
var statearr_23184_23263 = state_23150__$1;
(statearr_23184_23263[(1)] = (44));

} else {
var statearr_23185_23264 = state_23150__$1;
(statearr_23185_23264[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (29))){
var inst_23070 = (state_23150[(26)]);
var inst_23068 = (state_23150[(23)]);
var inst_23104 = (state_23150[(16)]);
var inst_23064 = (state_23150[(19)]);
var inst_23072 = (state_23150[(24)]);
var inst_23067 = (state_23150[(25)]);
var inst_23100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23103 = (function (){var all_files = inst_23064;
var res_SINGLEQUOTE_ = inst_23067;
var res = inst_23068;
var files_not_loaded = inst_23070;
var dependencies_that_loaded = inst_23072;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23104,inst_23064,inst_23072,inst_23067,inst_23100,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23102){
var map__23186 = p__23102;
var map__23186__$1 = ((((!((map__23186 == null)))?((((map__23186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23186):map__23186);
var namespace = cljs.core.get.call(null,map__23186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23104,inst_23064,inst_23072,inst_23067,inst_23100,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23104__$1 = cljs.core.group_by.call(null,inst_23103,inst_23070);
var inst_23106 = (inst_23104__$1 == null);
var inst_23107 = cljs.core.not.call(null,inst_23106);
var state_23150__$1 = (function (){var statearr_23188 = state_23150;
(statearr_23188[(16)] = inst_23104__$1);

(statearr_23188[(28)] = inst_23100);

return statearr_23188;
})();
if(inst_23107){
var statearr_23189_23265 = state_23150__$1;
(statearr_23189_23265[(1)] = (32));

} else {
var statearr_23190_23266 = state_23150__$1;
(statearr_23190_23266[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (44))){
var inst_23126 = (state_23150[(21)]);
var inst_23139 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23126);
var inst_23140 = cljs.core.pr_str.call(null,inst_23139);
var inst_23141 = [cljs.core.str("not required: "),cljs.core.str(inst_23140)].join('');
var inst_23142 = figwheel.client.utils.log.call(null,inst_23141);
var state_23150__$1 = state_23150;
var statearr_23191_23267 = state_23150__$1;
(statearr_23191_23267[(2)] = inst_23142);

(statearr_23191_23267[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (6))){
var inst_23045 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23192_23268 = state_23150__$1;
(statearr_23192_23268[(2)] = inst_23045);

(statearr_23192_23268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (28))){
var inst_23070 = (state_23150[(26)]);
var inst_23097 = (state_23150[(2)]);
var inst_23098 = cljs.core.not_empty.call(null,inst_23070);
var state_23150__$1 = (function (){var statearr_23193 = state_23150;
(statearr_23193[(29)] = inst_23097);

return statearr_23193;
})();
if(cljs.core.truth_(inst_23098)){
var statearr_23194_23269 = state_23150__$1;
(statearr_23194_23269[(1)] = (29));

} else {
var statearr_23195_23270 = state_23150__$1;
(statearr_23195_23270[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (25))){
var inst_23068 = (state_23150[(23)]);
var inst_23084 = (state_23150[(2)]);
var inst_23085 = cljs.core.not_empty.call(null,inst_23068);
var state_23150__$1 = (function (){var statearr_23196 = state_23150;
(statearr_23196[(30)] = inst_23084);

return statearr_23196;
})();
if(cljs.core.truth_(inst_23085)){
var statearr_23197_23271 = state_23150__$1;
(statearr_23197_23271[(1)] = (26));

} else {
var statearr_23198_23272 = state_23150__$1;
(statearr_23198_23272[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (34))){
var inst_23119 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
if(cljs.core.truth_(inst_23119)){
var statearr_23199_23273 = state_23150__$1;
(statearr_23199_23273[(1)] = (38));

} else {
var statearr_23200_23274 = state_23150__$1;
(statearr_23200_23274[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (17))){
var state_23150__$1 = state_23150;
var statearr_23201_23275 = state_23150__$1;
(statearr_23201_23275[(2)] = recompile_dependents);

(statearr_23201_23275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (3))){
var state_23150__$1 = state_23150;
var statearr_23202_23276 = state_23150__$1;
(statearr_23202_23276[(2)] = null);

(statearr_23202_23276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (12))){
var inst_23041 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23203_23277 = state_23150__$1;
(statearr_23203_23277[(2)] = inst_23041);

(statearr_23203_23277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (2))){
var inst_23003 = (state_23150[(13)]);
var inst_23010 = cljs.core.seq.call(null,inst_23003);
var inst_23011 = inst_23010;
var inst_23012 = null;
var inst_23013 = (0);
var inst_23014 = (0);
var state_23150__$1 = (function (){var statearr_23204 = state_23150;
(statearr_23204[(7)] = inst_23011);

(statearr_23204[(8)] = inst_23012);

(statearr_23204[(9)] = inst_23014);

(statearr_23204[(10)] = inst_23013);

return statearr_23204;
})();
var statearr_23205_23278 = state_23150__$1;
(statearr_23205_23278[(2)] = null);

(statearr_23205_23278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (23))){
var inst_23070 = (state_23150[(26)]);
var inst_23068 = (state_23150[(23)]);
var inst_23064 = (state_23150[(19)]);
var inst_23072 = (state_23150[(24)]);
var inst_23067 = (state_23150[(25)]);
var inst_23075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23077 = (function (){var all_files = inst_23064;
var res_SINGLEQUOTE_ = inst_23067;
var res = inst_23068;
var files_not_loaded = inst_23070;
var dependencies_that_loaded = inst_23072;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23075,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23076){
var map__23206 = p__23076;
var map__23206__$1 = ((((!((map__23206 == null)))?((((map__23206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23206):map__23206);
var request_url = cljs.core.get.call(null,map__23206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23075,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23078 = cljs.core.reverse.call(null,inst_23072);
var inst_23079 = cljs.core.map.call(null,inst_23077,inst_23078);
var inst_23080 = cljs.core.pr_str.call(null,inst_23079);
var inst_23081 = figwheel.client.utils.log.call(null,inst_23080);
var state_23150__$1 = (function (){var statearr_23208 = state_23150;
(statearr_23208[(31)] = inst_23075);

return statearr_23208;
})();
var statearr_23209_23279 = state_23150__$1;
(statearr_23209_23279[(2)] = inst_23081);

(statearr_23209_23279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (35))){
var state_23150__$1 = state_23150;
var statearr_23210_23280 = state_23150__$1;
(statearr_23210_23280[(2)] = true);

(statearr_23210_23280[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (19))){
var inst_23054 = (state_23150[(12)]);
var inst_23060 = figwheel.client.file_reloading.expand_files.call(null,inst_23054);
var state_23150__$1 = state_23150;
var statearr_23211_23281 = state_23150__$1;
(statearr_23211_23281[(2)] = inst_23060);

(statearr_23211_23281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (11))){
var state_23150__$1 = state_23150;
var statearr_23212_23282 = state_23150__$1;
(statearr_23212_23282[(2)] = null);

(statearr_23212_23282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (9))){
var inst_23043 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23213_23283 = state_23150__$1;
(statearr_23213_23283[(2)] = inst_23043);

(statearr_23213_23283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (5))){
var inst_23014 = (state_23150[(9)]);
var inst_23013 = (state_23150[(10)]);
var inst_23016 = (inst_23014 < inst_23013);
var inst_23017 = inst_23016;
var state_23150__$1 = state_23150;
if(cljs.core.truth_(inst_23017)){
var statearr_23214_23284 = state_23150__$1;
(statearr_23214_23284[(1)] = (7));

} else {
var statearr_23215_23285 = state_23150__$1;
(statearr_23215_23285[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (14))){
var inst_23024 = (state_23150[(22)]);
var inst_23033 = cljs.core.first.call(null,inst_23024);
var inst_23034 = figwheel.client.file_reloading.eval_body.call(null,inst_23033,opts);
var inst_23035 = cljs.core.next.call(null,inst_23024);
var inst_23011 = inst_23035;
var inst_23012 = null;
var inst_23013 = (0);
var inst_23014 = (0);
var state_23150__$1 = (function (){var statearr_23216 = state_23150;
(statearr_23216[(7)] = inst_23011);

(statearr_23216[(8)] = inst_23012);

(statearr_23216[(9)] = inst_23014);

(statearr_23216[(32)] = inst_23034);

(statearr_23216[(10)] = inst_23013);

return statearr_23216;
})();
var statearr_23217_23286 = state_23150__$1;
(statearr_23217_23286[(2)] = null);

(statearr_23217_23286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (45))){
var state_23150__$1 = state_23150;
var statearr_23218_23287 = state_23150__$1;
(statearr_23218_23287[(2)] = null);

(statearr_23218_23287[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (26))){
var inst_23070 = (state_23150[(26)]);
var inst_23068 = (state_23150[(23)]);
var inst_23064 = (state_23150[(19)]);
var inst_23072 = (state_23150[(24)]);
var inst_23067 = (state_23150[(25)]);
var inst_23087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23089 = (function (){var all_files = inst_23064;
var res_SINGLEQUOTE_ = inst_23067;
var res = inst_23068;
var files_not_loaded = inst_23070;
var dependencies_that_loaded = inst_23072;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23087,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23088){
var map__23219 = p__23088;
var map__23219__$1 = ((((!((map__23219 == null)))?((((map__23219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23219):map__23219);
var namespace = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23087,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23090 = cljs.core.map.call(null,inst_23089,inst_23068);
var inst_23091 = cljs.core.pr_str.call(null,inst_23090);
var inst_23092 = figwheel.client.utils.log.call(null,inst_23091);
var inst_23093 = (function (){var all_files = inst_23064;
var res_SINGLEQUOTE_ = inst_23067;
var res = inst_23068;
var files_not_loaded = inst_23070;
var dependencies_that_loaded = inst_23072;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23087,inst_23089,inst_23090,inst_23091,inst_23092,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23070,inst_23068,inst_23064,inst_23072,inst_23067,inst_23087,inst_23089,inst_23090,inst_23091,inst_23092,state_val_23151,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23094 = setTimeout(inst_23093,(10));
var state_23150__$1 = (function (){var statearr_23221 = state_23150;
(statearr_23221[(33)] = inst_23087);

(statearr_23221[(34)] = inst_23092);

return statearr_23221;
})();
var statearr_23222_23288 = state_23150__$1;
(statearr_23222_23288[(2)] = inst_23094);

(statearr_23222_23288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (16))){
var state_23150__$1 = state_23150;
var statearr_23223_23289 = state_23150__$1;
(statearr_23223_23289[(2)] = reload_dependents);

(statearr_23223_23289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (38))){
var inst_23104 = (state_23150[(16)]);
var inst_23121 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23104);
var state_23150__$1 = state_23150;
var statearr_23224_23290 = state_23150__$1;
(statearr_23224_23290[(2)] = inst_23121);

(statearr_23224_23290[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (30))){
var state_23150__$1 = state_23150;
var statearr_23225_23291 = state_23150__$1;
(statearr_23225_23291[(2)] = null);

(statearr_23225_23291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (10))){
var inst_23024 = (state_23150[(22)]);
var inst_23026 = cljs.core.chunked_seq_QMARK_.call(null,inst_23024);
var state_23150__$1 = state_23150;
if(inst_23026){
var statearr_23226_23292 = state_23150__$1;
(statearr_23226_23292[(1)] = (13));

} else {
var statearr_23227_23293 = state_23150__$1;
(statearr_23227_23293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (18))){
var inst_23058 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
if(cljs.core.truth_(inst_23058)){
var statearr_23228_23294 = state_23150__$1;
(statearr_23228_23294[(1)] = (19));

} else {
var statearr_23229_23295 = state_23150__$1;
(statearr_23229_23295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (42))){
var state_23150__$1 = state_23150;
var statearr_23230_23296 = state_23150__$1;
(statearr_23230_23296[(2)] = null);

(statearr_23230_23296[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (37))){
var inst_23116 = (state_23150[(2)]);
var state_23150__$1 = state_23150;
var statearr_23231_23297 = state_23150__$1;
(statearr_23231_23297[(2)] = inst_23116);

(statearr_23231_23297[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23151 === (8))){
var inst_23011 = (state_23150[(7)]);
var inst_23024 = (state_23150[(22)]);
var inst_23024__$1 = cljs.core.seq.call(null,inst_23011);
var state_23150__$1 = (function (){var statearr_23232 = state_23150;
(statearr_23232[(22)] = inst_23024__$1);

return statearr_23232;
})();
if(inst_23024__$1){
var statearr_23233_23298 = state_23150__$1;
(statearr_23233_23298[(1)] = (10));

} else {
var statearr_23234_23299 = state_23150__$1;
(statearr_23234_23299[(1)] = (11));

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
});})(c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19350__auto__,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____0 = (function (){
var statearr_23238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23238[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__);

(statearr_23238[(1)] = (1));

return statearr_23238;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____1 = (function (state_23150){
while(true){
var ret_value__19352__auto__ = (function (){try{while(true){
var result__19353__auto__ = switch__19350__auto__.call(null,state_23150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19353__auto__;
}
break;
}
}catch (e23239){if((e23239 instanceof Object)){
var ex__19354__auto__ = e23239;
var statearr_23240_23300 = state_23150;
(statearr_23240_23300[(5)] = ex__19354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23301 = state_23150;
state_23150 = G__23301;
continue;
} else {
return ret_value__19352__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__ = function(state_23150){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____1.call(this,state_23150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19351__auto__;
})()
;})(switch__19350__auto__,c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19464__auto__ = (function (){var statearr_23241 = f__19463__auto__.call(null);
(statearr_23241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19462__auto__);

return statearr_23241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19464__auto__);
});})(c__19462__auto__,map__22996,map__22996__$1,opts,before_jsload,on_jsload,reload_dependents,map__22997,map__22997__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19462__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23304,link){
var map__23307 = p__23304;
var map__23307__$1 = ((((!((map__23307 == null)))?((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23307):map__23307);
var file = cljs.core.get.call(null,map__23307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23307,map__23307__$1,file){
return (function (p1__23302_SHARP_,p2__23303_SHARP_){
if(cljs.core._EQ_.call(null,p1__23302_SHARP_,p2__23303_SHARP_)){
return p1__23302_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23307,map__23307__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23313){
var map__23314 = p__23313;
var map__23314__$1 = ((((!((map__23314 == null)))?((((map__23314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23314):map__23314);
var match_length = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23309_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23309_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23316 = [];
var len__17884__auto___23319 = arguments.length;
var i__17885__auto___23320 = (0);
while(true){
if((i__17885__auto___23320 < len__17884__auto___23319)){
args23316.push((arguments[i__17885__auto___23320]));

var G__23321 = (i__17885__auto___23320 + (1));
i__17885__auto___23320 = G__23321;
continue;
} else {
}
break;
}

var G__23318 = args23316.length;
switch (G__23318) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23316.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23323_SHARP_,p2__23324_SHARP_){
return cljs.core.assoc.call(null,p1__23323_SHARP_,cljs.core.get.call(null,p2__23324_SHARP_,key),p2__23324_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23325){
var map__23328 = p__23325;
var map__23328__$1 = ((((!((map__23328 == null)))?((((map__23328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23328):map__23328);
var f_data = map__23328__$1;
var file = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23330,files_msg){
var map__23337 = p__23330;
var map__23337__$1 = ((((!((map__23337 == null)))?((((map__23337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23337):map__23337);
var opts = map__23337__$1;
var on_cssload = cljs.core.get.call(null,map__23337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23339_23343 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23340_23344 = null;
var count__23341_23345 = (0);
var i__23342_23346 = (0);
while(true){
if((i__23342_23346 < count__23341_23345)){
var f_23347 = cljs.core._nth.call(null,chunk__23340_23344,i__23342_23346);
figwheel.client.file_reloading.reload_css_file.call(null,f_23347);

var G__23348 = seq__23339_23343;
var G__23349 = chunk__23340_23344;
var G__23350 = count__23341_23345;
var G__23351 = (i__23342_23346 + (1));
seq__23339_23343 = G__23348;
chunk__23340_23344 = G__23349;
count__23341_23345 = G__23350;
i__23342_23346 = G__23351;
continue;
} else {
var temp__4425__auto___23352 = cljs.core.seq.call(null,seq__23339_23343);
if(temp__4425__auto___23352){
var seq__23339_23353__$1 = temp__4425__auto___23352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23339_23353__$1)){
var c__17629__auto___23354 = cljs.core.chunk_first.call(null,seq__23339_23353__$1);
var G__23355 = cljs.core.chunk_rest.call(null,seq__23339_23353__$1);
var G__23356 = c__17629__auto___23354;
var G__23357 = cljs.core.count.call(null,c__17629__auto___23354);
var G__23358 = (0);
seq__23339_23343 = G__23355;
chunk__23340_23344 = G__23356;
count__23341_23345 = G__23357;
i__23342_23346 = G__23358;
continue;
} else {
var f_23359 = cljs.core.first.call(null,seq__23339_23353__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23359);

var G__23360 = cljs.core.next.call(null,seq__23339_23353__$1);
var G__23361 = null;
var G__23362 = (0);
var G__23363 = (0);
seq__23339_23343 = G__23360;
chunk__23340_23344 = G__23361;
count__23341_23345 = G__23362;
i__23342_23346 = G__23363;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23337,map__23337__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23337,map__23337__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453830136117