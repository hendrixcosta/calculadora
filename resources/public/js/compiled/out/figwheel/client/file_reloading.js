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
var or__18428__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18428__auto__){
return or__18428__auto__;
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
var or__18428__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30782_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30782_SHARP_));
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
var seq__30787 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30788 = null;
var count__30789 = (0);
var i__30790 = (0);
while(true){
if((i__30790 < count__30789)){
var n = cljs.core._nth.call(null,chunk__30788,i__30790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30791 = seq__30787;
var G__30792 = chunk__30788;
var G__30793 = count__30789;
var G__30794 = (i__30790 + (1));
seq__30787 = G__30791;
chunk__30788 = G__30792;
count__30789 = G__30793;
i__30790 = G__30794;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30787);
if(temp__4425__auto__){
var seq__30787__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30787__$1)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,seq__30787__$1);
var G__30795 = cljs.core.chunk_rest.call(null,seq__30787__$1);
var G__30796 = c__19231__auto__;
var G__30797 = cljs.core.count.call(null,c__19231__auto__);
var G__30798 = (0);
seq__30787 = G__30795;
chunk__30788 = G__30796;
count__30789 = G__30797;
i__30790 = G__30798;
continue;
} else {
var n = cljs.core.first.call(null,seq__30787__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30799 = cljs.core.next.call(null,seq__30787__$1);
var G__30800 = null;
var G__30801 = (0);
var G__30802 = (0);
seq__30787 = G__30799;
chunk__30788 = G__30800;
count__30789 = G__30801;
i__30790 = G__30802;
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

var seq__30841_30848 = cljs.core.seq.call(null,deps);
var chunk__30842_30849 = null;
var count__30843_30850 = (0);
var i__30844_30851 = (0);
while(true){
if((i__30844_30851 < count__30843_30850)){
var dep_30852 = cljs.core._nth.call(null,chunk__30842_30849,i__30844_30851);
topo_sort_helper_STAR_.call(null,dep_30852,(depth + (1)),state);

var G__30853 = seq__30841_30848;
var G__30854 = chunk__30842_30849;
var G__30855 = count__30843_30850;
var G__30856 = (i__30844_30851 + (1));
seq__30841_30848 = G__30853;
chunk__30842_30849 = G__30854;
count__30843_30850 = G__30855;
i__30844_30851 = G__30856;
continue;
} else {
var temp__4425__auto___30857 = cljs.core.seq.call(null,seq__30841_30848);
if(temp__4425__auto___30857){
var seq__30841_30858__$1 = temp__4425__auto___30857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30841_30858__$1)){
var c__19231__auto___30859 = cljs.core.chunk_first.call(null,seq__30841_30858__$1);
var G__30860 = cljs.core.chunk_rest.call(null,seq__30841_30858__$1);
var G__30861 = c__19231__auto___30859;
var G__30862 = cljs.core.count.call(null,c__19231__auto___30859);
var G__30863 = (0);
seq__30841_30848 = G__30860;
chunk__30842_30849 = G__30861;
count__30843_30850 = G__30862;
i__30844_30851 = G__30863;
continue;
} else {
var dep_30864 = cljs.core.first.call(null,seq__30841_30858__$1);
topo_sort_helper_STAR_.call(null,dep_30864,(depth + (1)),state);

var G__30865 = cljs.core.next.call(null,seq__30841_30858__$1);
var G__30866 = null;
var G__30867 = (0);
var G__30868 = (0);
seq__30841_30848 = G__30865;
chunk__30842_30849 = G__30866;
count__30843_30850 = G__30867;
i__30844_30851 = G__30868;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30845){
var vec__30847 = p__30845;
var x = cljs.core.nth.call(null,vec__30847,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30847,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30847,x,xs,get_deps__$1){
return (function (p1__30803_SHARP_){
return clojure.set.difference.call(null,p1__30803_SHARP_,x);
});})(vec__30847,x,xs,get_deps__$1))
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
var seq__30881 = cljs.core.seq.call(null,provides);
var chunk__30882 = null;
var count__30883 = (0);
var i__30884 = (0);
while(true){
if((i__30884 < count__30883)){
var prov = cljs.core._nth.call(null,chunk__30882,i__30884);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30885_30893 = cljs.core.seq.call(null,requires);
var chunk__30886_30894 = null;
var count__30887_30895 = (0);
var i__30888_30896 = (0);
while(true){
if((i__30888_30896 < count__30887_30895)){
var req_30897 = cljs.core._nth.call(null,chunk__30886_30894,i__30888_30896);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30897,prov);

var G__30898 = seq__30885_30893;
var G__30899 = chunk__30886_30894;
var G__30900 = count__30887_30895;
var G__30901 = (i__30888_30896 + (1));
seq__30885_30893 = G__30898;
chunk__30886_30894 = G__30899;
count__30887_30895 = G__30900;
i__30888_30896 = G__30901;
continue;
} else {
var temp__4425__auto___30902 = cljs.core.seq.call(null,seq__30885_30893);
if(temp__4425__auto___30902){
var seq__30885_30903__$1 = temp__4425__auto___30902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30885_30903__$1)){
var c__19231__auto___30904 = cljs.core.chunk_first.call(null,seq__30885_30903__$1);
var G__30905 = cljs.core.chunk_rest.call(null,seq__30885_30903__$1);
var G__30906 = c__19231__auto___30904;
var G__30907 = cljs.core.count.call(null,c__19231__auto___30904);
var G__30908 = (0);
seq__30885_30893 = G__30905;
chunk__30886_30894 = G__30906;
count__30887_30895 = G__30907;
i__30888_30896 = G__30908;
continue;
} else {
var req_30909 = cljs.core.first.call(null,seq__30885_30903__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30909,prov);

var G__30910 = cljs.core.next.call(null,seq__30885_30903__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30885_30893 = G__30910;
chunk__30886_30894 = G__30911;
count__30887_30895 = G__30912;
i__30888_30896 = G__30913;
continue;
}
} else {
}
}
break;
}

var G__30914 = seq__30881;
var G__30915 = chunk__30882;
var G__30916 = count__30883;
var G__30917 = (i__30884 + (1));
seq__30881 = G__30914;
chunk__30882 = G__30915;
count__30883 = G__30916;
i__30884 = G__30917;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30881);
if(temp__4425__auto__){
var seq__30881__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30881__$1)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,seq__30881__$1);
var G__30918 = cljs.core.chunk_rest.call(null,seq__30881__$1);
var G__30919 = c__19231__auto__;
var G__30920 = cljs.core.count.call(null,c__19231__auto__);
var G__30921 = (0);
seq__30881 = G__30918;
chunk__30882 = G__30919;
count__30883 = G__30920;
i__30884 = G__30921;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30881__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30889_30922 = cljs.core.seq.call(null,requires);
var chunk__30890_30923 = null;
var count__30891_30924 = (0);
var i__30892_30925 = (0);
while(true){
if((i__30892_30925 < count__30891_30924)){
var req_30926 = cljs.core._nth.call(null,chunk__30890_30923,i__30892_30925);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30926,prov);

var G__30927 = seq__30889_30922;
var G__30928 = chunk__30890_30923;
var G__30929 = count__30891_30924;
var G__30930 = (i__30892_30925 + (1));
seq__30889_30922 = G__30927;
chunk__30890_30923 = G__30928;
count__30891_30924 = G__30929;
i__30892_30925 = G__30930;
continue;
} else {
var temp__4425__auto___30931__$1 = cljs.core.seq.call(null,seq__30889_30922);
if(temp__4425__auto___30931__$1){
var seq__30889_30932__$1 = temp__4425__auto___30931__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30889_30932__$1)){
var c__19231__auto___30933 = cljs.core.chunk_first.call(null,seq__30889_30932__$1);
var G__30934 = cljs.core.chunk_rest.call(null,seq__30889_30932__$1);
var G__30935 = c__19231__auto___30933;
var G__30936 = cljs.core.count.call(null,c__19231__auto___30933);
var G__30937 = (0);
seq__30889_30922 = G__30934;
chunk__30890_30923 = G__30935;
count__30891_30924 = G__30936;
i__30892_30925 = G__30937;
continue;
} else {
var req_30938 = cljs.core.first.call(null,seq__30889_30932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30938,prov);

var G__30939 = cljs.core.next.call(null,seq__30889_30932__$1);
var G__30940 = null;
var G__30941 = (0);
var G__30942 = (0);
seq__30889_30922 = G__30939;
chunk__30890_30923 = G__30940;
count__30891_30924 = G__30941;
i__30892_30925 = G__30942;
continue;
}
} else {
}
}
break;
}

var G__30943 = cljs.core.next.call(null,seq__30881__$1);
var G__30944 = null;
var G__30945 = (0);
var G__30946 = (0);
seq__30881 = G__30943;
chunk__30882 = G__30944;
count__30883 = G__30945;
i__30884 = G__30946;
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
var seq__30951_30955 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30952_30956 = null;
var count__30953_30957 = (0);
var i__30954_30958 = (0);
while(true){
if((i__30954_30958 < count__30953_30957)){
var ns_30959 = cljs.core._nth.call(null,chunk__30952_30956,i__30954_30958);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30959);

var G__30960 = seq__30951_30955;
var G__30961 = chunk__30952_30956;
var G__30962 = count__30953_30957;
var G__30963 = (i__30954_30958 + (1));
seq__30951_30955 = G__30960;
chunk__30952_30956 = G__30961;
count__30953_30957 = G__30962;
i__30954_30958 = G__30963;
continue;
} else {
var temp__4425__auto___30964 = cljs.core.seq.call(null,seq__30951_30955);
if(temp__4425__auto___30964){
var seq__30951_30965__$1 = temp__4425__auto___30964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30951_30965__$1)){
var c__19231__auto___30966 = cljs.core.chunk_first.call(null,seq__30951_30965__$1);
var G__30967 = cljs.core.chunk_rest.call(null,seq__30951_30965__$1);
var G__30968 = c__19231__auto___30966;
var G__30969 = cljs.core.count.call(null,c__19231__auto___30966);
var G__30970 = (0);
seq__30951_30955 = G__30967;
chunk__30952_30956 = G__30968;
count__30953_30957 = G__30969;
i__30954_30958 = G__30970;
continue;
} else {
var ns_30971 = cljs.core.first.call(null,seq__30951_30965__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30971);

var G__30972 = cljs.core.next.call(null,seq__30951_30965__$1);
var G__30973 = null;
var G__30974 = (0);
var G__30975 = (0);
seq__30951_30955 = G__30972;
chunk__30952_30956 = G__30973;
count__30953_30957 = G__30974;
i__30954_30958 = G__30975;
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
goog.require_figwheel_backup_ = (function (){var or__18428__auto__ = goog.require__;
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
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
var G__30976__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30977__i = 0, G__30977__a = new Array(arguments.length -  0);
while (G__30977__i < G__30977__a.length) {G__30977__a[G__30977__i] = arguments[G__30977__i + 0]; ++G__30977__i;}
  args = new cljs.core.IndexedSeq(G__30977__a,0);
} 
return G__30976__delegate.call(this,args);};
G__30976.cljs$lang$maxFixedArity = 0;
G__30976.cljs$lang$applyTo = (function (arglist__30978){
var args = cljs.core.seq(arglist__30978);
return G__30976__delegate(args);
});
G__30976.cljs$core$IFn$_invoke$arity$variadic = G__30976__delegate;
return G__30976;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30980 = cljs.core._EQ_;
var expr__30981 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30980.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30981))){
var path_parts = ((function (pred__30980,expr__30981){
return (function (p1__30979_SHARP_){
return clojure.string.split.call(null,p1__30979_SHARP_,/[\/\\]/);
});})(pred__30980,expr__30981))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30980,expr__30981){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30983){if((e30983 instanceof Error)){
var e = e30983;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30983;

}
}})());
});
;})(path_parts,sep,root,pred__30980,expr__30981))
} else {
if(cljs.core.truth_(pred__30980.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30981))){
return ((function (pred__30980,expr__30981){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30980,expr__30981){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30980,expr__30981))
);

return deferred.addErrback(((function (deferred,pred__30980,expr__30981){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30980,expr__30981))
);
});
;})(pred__30980,expr__30981))
} else {
return ((function (pred__30980,expr__30981){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30980,expr__30981))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30984,callback){
var map__30987 = p__30984;
var map__30987__$1 = ((((!((map__30987 == null)))?((((map__30987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);
var file_msg = map__30987__$1;
var request_url = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30987,map__30987__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30987,map__30987__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_31007 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31013_31033 = state_31011__$1;
(statearr_31013_31033[(2)] = inst_31007);

(statearr_31013_31033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (1))){
var state_31011__$1 = state_31011;
var statearr_31014_31034 = state_31011__$1;
(statearr_31014_31034[(2)] = null);

(statearr_31014_31034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (4))){
var inst_30991 = (state_31011[(7)]);
var inst_30991__$1 = (state_31011[(2)]);
var state_31011__$1 = (function (){var statearr_31015 = state_31011;
(statearr_31015[(7)] = inst_30991__$1);

return statearr_31015;
})();
if(cljs.core.truth_(inst_30991__$1)){
var statearr_31016_31035 = state_31011__$1;
(statearr_31016_31035[(1)] = (5));

} else {
var statearr_31017_31036 = state_31011__$1;
(statearr_31017_31036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var state_31011__$1 = state_31011;
var statearr_31018_31037 = state_31011__$1;
(statearr_31018_31037[(2)] = null);

(statearr_31018_31037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (3))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (2))){
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31012 === (11))){
var inst_31003 = (state_31011[(2)]);
var state_31011__$1 = (function (){var statearr_31019 = state_31011;
(statearr_31019[(8)] = inst_31003);

return statearr_31019;
})();
var statearr_31020_31038 = state_31011__$1;
(statearr_31020_31038[(2)] = null);

(statearr_31020_31038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (9))){
var inst_30997 = (state_31011[(9)]);
var inst_30995 = (state_31011[(10)]);
var inst_30999 = inst_30997.call(null,inst_30995);
var state_31011__$1 = state_31011;
var statearr_31021_31039 = state_31011__$1;
(statearr_31021_31039[(2)] = inst_30999);

(statearr_31021_31039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (5))){
var inst_30991 = (state_31011[(7)]);
var inst_30993 = figwheel.client.file_reloading.blocking_load.call(null,inst_30991);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(8),inst_30993);
} else {
if((state_val_31012 === (10))){
var inst_30995 = (state_31011[(10)]);
var inst_31001 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30995);
var state_31011__$1 = state_31011;
var statearr_31022_31040 = state_31011__$1;
(statearr_31022_31040[(2)] = inst_31001);

(statearr_31022_31040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (8))){
var inst_30997 = (state_31011[(9)]);
var inst_30991 = (state_31011[(7)]);
var inst_30995 = (state_31011[(2)]);
var inst_30996 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30997__$1 = cljs.core.get.call(null,inst_30996,inst_30991);
var state_31011__$1 = (function (){var statearr_31023 = state_31011;
(statearr_31023[(9)] = inst_30997__$1);

(statearr_31023[(10)] = inst_30995);

return statearr_31023;
})();
if(cljs.core.truth_(inst_30997__$1)){
var statearr_31024_31041 = state_31011__$1;
(statearr_31024_31041[(1)] = (9));

} else {
var statearr_31025_31042 = state_31011__$1;
(statearr_31025_31042[(1)] = (10));

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
});})(c__20692__auto__))
;
return ((function (switch__20671__auto__,c__20692__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20672__auto__ = null;
var figwheel$client$file_reloading$state_machine__20672__auto____0 = (function (){
var statearr_31029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31029[(0)] = figwheel$client$file_reloading$state_machine__20672__auto__);

(statearr_31029[(1)] = (1));

return statearr_31029;
});
var figwheel$client$file_reloading$state_machine__20672__auto____1 = (function (state_31011){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e31030){if((e31030 instanceof Object)){
var ex__20675__auto__ = e31030;
var statearr_31031_31043 = state_31011;
(statearr_31031_31043[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31044 = state_31011;
state_31011 = G__31044;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20672__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20672__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20672__auto____0;
figwheel$client$file_reloading$state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20672__auto____1;
return figwheel$client$file_reloading$state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__))
})();
var state__20694__auto__ = (function (){var statearr_31032 = f__20693__auto__.call(null);
(statearr_31032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__))
);

return c__20692__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31045,callback){
var map__31048 = p__31045;
var map__31048__$1 = ((((!((map__31048 == null)))?((((map__31048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31048):map__31048);
var file_msg = map__31048__$1;
var namespace = cljs.core.get.call(null,map__31048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31048,map__31048__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31048,map__31048__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31050){
var map__31053 = p__31050;
var map__31053__$1 = ((((!((map__31053 == null)))?((((map__31053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31053):map__31053);
var file_msg = map__31053__$1;
var namespace = cljs.core.get.call(null,map__31053__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18416__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18416__auto__){
var or__18428__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18428__auto__)){
return or__18428__auto__;
} else {
var or__18428__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18428__auto____$1)){
return or__18428__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18416__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31055,callback){
var map__31058 = p__31055;
var map__31058__$1 = ((((!((map__31058 == null)))?((((map__31058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31058):map__31058);
var file_msg = map__31058__$1;
var request_url = cljs.core.get.call(null,map__31058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20692__auto___31146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto___31146,out){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto___31146,out){
return (function (state_31128){
var state_val_31129 = (state_31128[(1)]);
if((state_val_31129 === (1))){
var inst_31106 = cljs.core.nth.call(null,files,(0),null);
var inst_31107 = cljs.core.nthnext.call(null,files,(1));
var inst_31108 = files;
var state_31128__$1 = (function (){var statearr_31130 = state_31128;
(statearr_31130[(7)] = inst_31107);

(statearr_31130[(8)] = inst_31106);

(statearr_31130[(9)] = inst_31108);

return statearr_31130;
})();
var statearr_31131_31147 = state_31128__$1;
(statearr_31131_31147[(2)] = null);

(statearr_31131_31147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (2))){
var inst_31111 = (state_31128[(10)]);
var inst_31108 = (state_31128[(9)]);
var inst_31111__$1 = cljs.core.nth.call(null,inst_31108,(0),null);
var inst_31112 = cljs.core.nthnext.call(null,inst_31108,(1));
var inst_31113 = (inst_31111__$1 == null);
var inst_31114 = cljs.core.not.call(null,inst_31113);
var state_31128__$1 = (function (){var statearr_31132 = state_31128;
(statearr_31132[(10)] = inst_31111__$1);

(statearr_31132[(11)] = inst_31112);

return statearr_31132;
})();
if(inst_31114){
var statearr_31133_31148 = state_31128__$1;
(statearr_31133_31148[(1)] = (4));

} else {
var statearr_31134_31149 = state_31128__$1;
(statearr_31134_31149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (3))){
var inst_31126 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31128__$1,inst_31126);
} else {
if((state_val_31129 === (4))){
var inst_31111 = (state_31128[(10)]);
var inst_31116 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31111);
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31128__$1,(7),inst_31116);
} else {
if((state_val_31129 === (5))){
var inst_31122 = cljs.core.async.close_BANG_.call(null,out);
var state_31128__$1 = state_31128;
var statearr_31135_31150 = state_31128__$1;
(statearr_31135_31150[(2)] = inst_31122);

(statearr_31135_31150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (6))){
var inst_31124 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31136_31151 = state_31128__$1;
(statearr_31136_31151[(2)] = inst_31124);

(statearr_31136_31151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (7))){
var inst_31112 = (state_31128[(11)]);
var inst_31118 = (state_31128[(2)]);
var inst_31119 = cljs.core.async.put_BANG_.call(null,out,inst_31118);
var inst_31108 = inst_31112;
var state_31128__$1 = (function (){var statearr_31137 = state_31128;
(statearr_31137[(12)] = inst_31119);

(statearr_31137[(9)] = inst_31108);

return statearr_31137;
})();
var statearr_31138_31152 = state_31128__$1;
(statearr_31138_31152[(2)] = null);

(statearr_31138_31152[(1)] = (2));


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
});})(c__20692__auto___31146,out))
;
return ((function (switch__20671__auto__,c__20692__auto___31146,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31142[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____1 = (function (state_31128){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_31128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e31143){if((e31143 instanceof Object)){
var ex__20675__auto__ = e31143;
var statearr_31144_31153 = state_31128;
(statearr_31144_31153[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31154 = state_31128;
state_31128 = G__31154;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__ = function(state_31128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____1.call(this,state_31128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto___31146,out))
})();
var state__20694__auto__ = (function (){var statearr_31145 = f__20693__auto__.call(null);
(statearr_31145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto___31146);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto___31146,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31155,opts){
var map__31159 = p__31155;
var map__31159__$1 = ((((!((map__31159 == null)))?((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var eval_body__$1 = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18416__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18416__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18416__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31161){var e = e31161;
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
return (function (p1__31162_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31162_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31167){
var vec__31168 = p__31167;
var k = cljs.core.nth.call(null,vec__31168,(0),null);
var v = cljs.core.nth.call(null,vec__31168,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31169){
var vec__31170 = p__31169;
var k = cljs.core.nth.call(null,vec__31170,(0),null);
var v = cljs.core.nth.call(null,vec__31170,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31174,p__31175){
var map__31422 = p__31174;
var map__31422__$1 = ((((!((map__31422 == null)))?((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var opts = map__31422__$1;
var before_jsload = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31423 = p__31175;
var map__31423__$1 = ((((!((map__31423 == null)))?((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var msg = map__31423__$1;
var files = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20693__auto__ = (function (){var switch__20671__auto__ = ((function (c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31437 = (state_31576[(7)]);
var inst_31439 = (state_31576[(8)]);
var inst_31440 = (state_31576[(9)]);
var inst_31438 = (state_31576[(10)]);
var inst_31445 = cljs.core._nth.call(null,inst_31438,inst_31440);
var inst_31446 = figwheel.client.file_reloading.eval_body.call(null,inst_31445,opts);
var inst_31447 = (inst_31440 + (1));
var tmp31578 = inst_31437;
var tmp31579 = inst_31439;
var tmp31580 = inst_31438;
var inst_31437__$1 = tmp31578;
var inst_31438__$1 = tmp31580;
var inst_31439__$1 = tmp31579;
var inst_31440__$1 = inst_31447;
var state_31576__$1 = (function (){var statearr_31581 = state_31576;
(statearr_31581[(7)] = inst_31437__$1);

(statearr_31581[(8)] = inst_31439__$1);

(statearr_31581[(9)] = inst_31440__$1);

(statearr_31581[(11)] = inst_31446);

(statearr_31581[(10)] = inst_31438__$1);

return statearr_31581;
})();
var statearr_31582_31668 = state_31576__$1;
(statearr_31582_31668[(2)] = null);

(statearr_31582_31668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (20))){
var inst_31480 = (state_31576[(12)]);
var inst_31488 = figwheel.client.file_reloading.sort_files.call(null,inst_31480);
var state_31576__$1 = state_31576;
var statearr_31583_31669 = state_31576__$1;
(statearr_31583_31669[(2)] = inst_31488);

(statearr_31583_31669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (27))){
var state_31576__$1 = state_31576;
var statearr_31584_31670 = state_31576__$1;
(statearr_31584_31670[(2)] = null);

(statearr_31584_31670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var inst_31429 = (state_31576[(13)]);
var inst_31426 = before_jsload.call(null,files);
var inst_31427 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31428 = (function (){return ((function (inst_31429,inst_31426,inst_31427,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31171_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31171_SHARP_);
});
;})(inst_31429,inst_31426,inst_31427,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31429__$1 = cljs.core.filter.call(null,inst_31428,files);
var inst_31430 = cljs.core.not_empty.call(null,inst_31429__$1);
var state_31576__$1 = (function (){var statearr_31585 = state_31576;
(statearr_31585[(13)] = inst_31429__$1);

(statearr_31585[(14)] = inst_31426);

(statearr_31585[(15)] = inst_31427);

return statearr_31585;
})();
if(cljs.core.truth_(inst_31430)){
var statearr_31586_31671 = state_31576__$1;
(statearr_31586_31671[(1)] = (2));

} else {
var statearr_31587_31672 = state_31576__$1;
(statearr_31587_31672[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (24))){
var state_31576__$1 = state_31576;
var statearr_31588_31673 = state_31576__$1;
(statearr_31588_31673[(2)] = null);

(statearr_31588_31673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (39))){
var inst_31530 = (state_31576[(16)]);
var state_31576__$1 = state_31576;
var statearr_31589_31674 = state_31576__$1;
(statearr_31589_31674[(2)] = inst_31530);

(statearr_31589_31674[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (46))){
var inst_31571 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31590_31675 = state_31576__$1;
(statearr_31590_31675[(2)] = inst_31571);

(statearr_31590_31675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31474 = (state_31576[(2)]);
var inst_31475 = cljs.core.List.EMPTY;
var inst_31476 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31475);
var inst_31477 = (function (){return ((function (inst_31474,inst_31475,inst_31476,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31172_SHARP_){
var and__18416__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31172_SHARP_);
if(cljs.core.truth_(and__18416__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31172_SHARP_));
} else {
return and__18416__auto__;
}
});
;})(inst_31474,inst_31475,inst_31476,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31478 = cljs.core.filter.call(null,inst_31477,files);
var inst_31479 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31480 = cljs.core.concat.call(null,inst_31478,inst_31479);
var state_31576__$1 = (function (){var statearr_31591 = state_31576;
(statearr_31591[(17)] = inst_31476);

(statearr_31591[(18)] = inst_31474);

(statearr_31591[(12)] = inst_31480);

return statearr_31591;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31592_31676 = state_31576__$1;
(statearr_31592_31676[(1)] = (16));

} else {
var statearr_31593_31677 = state_31576__$1;
(statearr_31593_31677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (15))){
var inst_31464 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31594_31678 = state_31576__$1;
(statearr_31594_31678[(2)] = inst_31464);

(statearr_31594_31678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (21))){
var inst_31490 = (state_31576[(19)]);
var inst_31490__$1 = (state_31576[(2)]);
var inst_31491 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31490__$1);
var state_31576__$1 = (function (){var statearr_31595 = state_31576;
(statearr_31595[(19)] = inst_31490__$1);

return statearr_31595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(22),inst_31491);
} else {
if((state_val_31577 === (31))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (32))){
var inst_31530 = (state_31576[(16)]);
var inst_31535 = inst_31530.cljs$lang$protocol_mask$partition0$;
var inst_31536 = (inst_31535 & (64));
var inst_31537 = inst_31530.cljs$core$ISeq$;
var inst_31538 = (inst_31536) || (inst_31537);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31538)){
var statearr_31596_31679 = state_31576__$1;
(statearr_31596_31679[(1)] = (35));

} else {
var statearr_31597_31680 = state_31576__$1;
(statearr_31597_31680[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (40))){
var inst_31551 = (state_31576[(20)]);
var inst_31550 = (state_31576[(2)]);
var inst_31551__$1 = cljs.core.get.call(null,inst_31550,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31552 = cljs.core.get.call(null,inst_31550,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31553 = cljs.core.not_empty.call(null,inst_31551__$1);
var state_31576__$1 = (function (){var statearr_31598 = state_31576;
(statearr_31598[(20)] = inst_31551__$1);

(statearr_31598[(21)] = inst_31552);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31553)){
var statearr_31599_31681 = state_31576__$1;
(statearr_31599_31681[(1)] = (41));

} else {
var statearr_31600_31682 = state_31576__$1;
(statearr_31600_31682[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (33))){
var state_31576__$1 = state_31576;
var statearr_31601_31683 = state_31576__$1;
(statearr_31601_31683[(2)] = false);

(statearr_31601_31683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (13))){
var inst_31450 = (state_31576[(22)]);
var inst_31454 = cljs.core.chunk_first.call(null,inst_31450);
var inst_31455 = cljs.core.chunk_rest.call(null,inst_31450);
var inst_31456 = cljs.core.count.call(null,inst_31454);
var inst_31437 = inst_31455;
var inst_31438 = inst_31454;
var inst_31439 = inst_31456;
var inst_31440 = (0);
var state_31576__$1 = (function (){var statearr_31602 = state_31576;
(statearr_31602[(7)] = inst_31437);

(statearr_31602[(8)] = inst_31439);

(statearr_31602[(9)] = inst_31440);

(statearr_31602[(10)] = inst_31438);

return statearr_31602;
})();
var statearr_31603_31684 = state_31576__$1;
(statearr_31603_31684[(2)] = null);

(statearr_31603_31684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (22))){
var inst_31494 = (state_31576[(23)]);
var inst_31490 = (state_31576[(19)]);
var inst_31498 = (state_31576[(24)]);
var inst_31493 = (state_31576[(25)]);
var inst_31493__$1 = (state_31576[(2)]);
var inst_31494__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31493__$1);
var inst_31495 = (function (){var all_files = inst_31490;
var res_SINGLEQUOTE_ = inst_31493__$1;
var res = inst_31494__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31494,inst_31490,inst_31498,inst_31493,inst_31493__$1,inst_31494__$1,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31173_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31173_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31494,inst_31490,inst_31498,inst_31493,inst_31493__$1,inst_31494__$1,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31496 = cljs.core.filter.call(null,inst_31495,inst_31493__$1);
var inst_31497 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31498__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31497);
var inst_31499 = cljs.core.not_empty.call(null,inst_31498__$1);
var state_31576__$1 = (function (){var statearr_31604 = state_31576;
(statearr_31604[(26)] = inst_31496);

(statearr_31604[(23)] = inst_31494__$1);

(statearr_31604[(24)] = inst_31498__$1);

(statearr_31604[(25)] = inst_31493__$1);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31605_31685 = state_31576__$1;
(statearr_31605_31685[(1)] = (23));

} else {
var statearr_31606_31686 = state_31576__$1;
(statearr_31606_31686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (36))){
var state_31576__$1 = state_31576;
var statearr_31607_31687 = state_31576__$1;
(statearr_31607_31687[(2)] = false);

(statearr_31607_31687[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (41))){
var inst_31551 = (state_31576[(20)]);
var inst_31555 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31556 = cljs.core.map.call(null,inst_31555,inst_31551);
var inst_31557 = cljs.core.pr_str.call(null,inst_31556);
var inst_31558 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31557)].join('');
var inst_31559 = figwheel.client.utils.log.call(null,inst_31558);
var state_31576__$1 = state_31576;
var statearr_31608_31688 = state_31576__$1;
(statearr_31608_31688[(2)] = inst_31559);

(statearr_31608_31688[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (43))){
var inst_31552 = (state_31576[(21)]);
var inst_31562 = (state_31576[(2)]);
var inst_31563 = cljs.core.not_empty.call(null,inst_31552);
var state_31576__$1 = (function (){var statearr_31609 = state_31576;
(statearr_31609[(27)] = inst_31562);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31563)){
var statearr_31610_31689 = state_31576__$1;
(statearr_31610_31689[(1)] = (44));

} else {
var statearr_31611_31690 = state_31576__$1;
(statearr_31611_31690[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (29))){
var inst_31496 = (state_31576[(26)]);
var inst_31530 = (state_31576[(16)]);
var inst_31494 = (state_31576[(23)]);
var inst_31490 = (state_31576[(19)]);
var inst_31498 = (state_31576[(24)]);
var inst_31493 = (state_31576[(25)]);
var inst_31526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31529 = (function (){var all_files = inst_31490;
var res_SINGLEQUOTE_ = inst_31493;
var res = inst_31494;
var files_not_loaded = inst_31496;
var dependencies_that_loaded = inst_31498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31530,inst_31494,inst_31490,inst_31498,inst_31493,inst_31526,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31528){
var map__31612 = p__31528;
var map__31612__$1 = ((((!((map__31612 == null)))?((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var namespace = cljs.core.get.call(null,map__31612__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31530,inst_31494,inst_31490,inst_31498,inst_31493,inst_31526,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31530__$1 = cljs.core.group_by.call(null,inst_31529,inst_31496);
var inst_31532 = (inst_31530__$1 == null);
var inst_31533 = cljs.core.not.call(null,inst_31532);
var state_31576__$1 = (function (){var statearr_31614 = state_31576;
(statearr_31614[(16)] = inst_31530__$1);

(statearr_31614[(28)] = inst_31526);

return statearr_31614;
})();
if(inst_31533){
var statearr_31615_31691 = state_31576__$1;
(statearr_31615_31691[(1)] = (32));

} else {
var statearr_31616_31692 = state_31576__$1;
(statearr_31616_31692[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (44))){
var inst_31552 = (state_31576[(21)]);
var inst_31565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31552);
var inst_31566 = cljs.core.pr_str.call(null,inst_31565);
var inst_31567 = [cljs.core.str("not required: "),cljs.core.str(inst_31566)].join('');
var inst_31568 = figwheel.client.utils.log.call(null,inst_31567);
var state_31576__$1 = state_31576;
var statearr_31617_31693 = state_31576__$1;
(statearr_31617_31693[(2)] = inst_31568);

(statearr_31617_31693[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var inst_31471 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31618_31694 = state_31576__$1;
(statearr_31618_31694[(2)] = inst_31471);

(statearr_31618_31694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (28))){
var inst_31496 = (state_31576[(26)]);
var inst_31523 = (state_31576[(2)]);
var inst_31524 = cljs.core.not_empty.call(null,inst_31496);
var state_31576__$1 = (function (){var statearr_31619 = state_31576;
(statearr_31619[(29)] = inst_31523);

return statearr_31619;
})();
if(cljs.core.truth_(inst_31524)){
var statearr_31620_31695 = state_31576__$1;
(statearr_31620_31695[(1)] = (29));

} else {
var statearr_31621_31696 = state_31576__$1;
(statearr_31621_31696[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (25))){
var inst_31494 = (state_31576[(23)]);
var inst_31510 = (state_31576[(2)]);
var inst_31511 = cljs.core.not_empty.call(null,inst_31494);
var state_31576__$1 = (function (){var statearr_31622 = state_31576;
(statearr_31622[(30)] = inst_31510);

return statearr_31622;
})();
if(cljs.core.truth_(inst_31511)){
var statearr_31623_31697 = state_31576__$1;
(statearr_31623_31697[(1)] = (26));

} else {
var statearr_31624_31698 = state_31576__$1;
(statearr_31624_31698[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (34))){
var inst_31545 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31545)){
var statearr_31625_31699 = state_31576__$1;
(statearr_31625_31699[(1)] = (38));

} else {
var statearr_31626_31700 = state_31576__$1;
(statearr_31626_31700[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (17))){
var state_31576__$1 = state_31576;
var statearr_31627_31701 = state_31576__$1;
(statearr_31627_31701[(2)] = recompile_dependents);

(statearr_31627_31701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var state_31576__$1 = state_31576;
var statearr_31628_31702 = state_31576__$1;
(statearr_31628_31702[(2)] = null);

(statearr_31628_31702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (12))){
var inst_31467 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31629_31703 = state_31576__$1;
(statearr_31629_31703[(2)] = inst_31467);

(statearr_31629_31703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var inst_31429 = (state_31576[(13)]);
var inst_31436 = cljs.core.seq.call(null,inst_31429);
var inst_31437 = inst_31436;
var inst_31438 = null;
var inst_31439 = (0);
var inst_31440 = (0);
var state_31576__$1 = (function (){var statearr_31630 = state_31576;
(statearr_31630[(7)] = inst_31437);

(statearr_31630[(8)] = inst_31439);

(statearr_31630[(9)] = inst_31440);

(statearr_31630[(10)] = inst_31438);

return statearr_31630;
})();
var statearr_31631_31704 = state_31576__$1;
(statearr_31631_31704[(2)] = null);

(statearr_31631_31704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (23))){
var inst_31496 = (state_31576[(26)]);
var inst_31494 = (state_31576[(23)]);
var inst_31490 = (state_31576[(19)]);
var inst_31498 = (state_31576[(24)]);
var inst_31493 = (state_31576[(25)]);
var inst_31501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31503 = (function (){var all_files = inst_31490;
var res_SINGLEQUOTE_ = inst_31493;
var res = inst_31494;
var files_not_loaded = inst_31496;
var dependencies_that_loaded = inst_31498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31501,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31502){
var map__31632 = p__31502;
var map__31632__$1 = ((((!((map__31632 == null)))?((((map__31632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31632):map__31632);
var request_url = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31501,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31504 = cljs.core.reverse.call(null,inst_31498);
var inst_31505 = cljs.core.map.call(null,inst_31503,inst_31504);
var inst_31506 = cljs.core.pr_str.call(null,inst_31505);
var inst_31507 = figwheel.client.utils.log.call(null,inst_31506);
var state_31576__$1 = (function (){var statearr_31634 = state_31576;
(statearr_31634[(31)] = inst_31501);

return statearr_31634;
})();
var statearr_31635_31705 = state_31576__$1;
(statearr_31635_31705[(2)] = inst_31507);

(statearr_31635_31705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (35))){
var state_31576__$1 = state_31576;
var statearr_31636_31706 = state_31576__$1;
(statearr_31636_31706[(2)] = true);

(statearr_31636_31706[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (19))){
var inst_31480 = (state_31576[(12)]);
var inst_31486 = figwheel.client.file_reloading.expand_files.call(null,inst_31480);
var state_31576__$1 = state_31576;
var statearr_31637_31707 = state_31576__$1;
(statearr_31637_31707[(2)] = inst_31486);

(statearr_31637_31707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (11))){
var state_31576__$1 = state_31576;
var statearr_31638_31708 = state_31576__$1;
(statearr_31638_31708[(2)] = null);

(statearr_31638_31708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (9))){
var inst_31469 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31639_31709 = state_31576__$1;
(statearr_31639_31709[(2)] = inst_31469);

(statearr_31639_31709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31439 = (state_31576[(8)]);
var inst_31440 = (state_31576[(9)]);
var inst_31442 = (inst_31440 < inst_31439);
var inst_31443 = inst_31442;
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31443)){
var statearr_31640_31710 = state_31576__$1;
(statearr_31640_31710[(1)] = (7));

} else {
var statearr_31641_31711 = state_31576__$1;
(statearr_31641_31711[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (14))){
var inst_31450 = (state_31576[(22)]);
var inst_31459 = cljs.core.first.call(null,inst_31450);
var inst_31460 = figwheel.client.file_reloading.eval_body.call(null,inst_31459,opts);
var inst_31461 = cljs.core.next.call(null,inst_31450);
var inst_31437 = inst_31461;
var inst_31438 = null;
var inst_31439 = (0);
var inst_31440 = (0);
var state_31576__$1 = (function (){var statearr_31642 = state_31576;
(statearr_31642[(7)] = inst_31437);

(statearr_31642[(8)] = inst_31439);

(statearr_31642[(9)] = inst_31440);

(statearr_31642[(32)] = inst_31460);

(statearr_31642[(10)] = inst_31438);

return statearr_31642;
})();
var statearr_31643_31712 = state_31576__$1;
(statearr_31643_31712[(2)] = null);

(statearr_31643_31712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (45))){
var state_31576__$1 = state_31576;
var statearr_31644_31713 = state_31576__$1;
(statearr_31644_31713[(2)] = null);

(statearr_31644_31713[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (26))){
var inst_31496 = (state_31576[(26)]);
var inst_31494 = (state_31576[(23)]);
var inst_31490 = (state_31576[(19)]);
var inst_31498 = (state_31576[(24)]);
var inst_31493 = (state_31576[(25)]);
var inst_31513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31515 = (function (){var all_files = inst_31490;
var res_SINGLEQUOTE_ = inst_31493;
var res = inst_31494;
var files_not_loaded = inst_31496;
var dependencies_that_loaded = inst_31498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31513,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31514){
var map__31645 = p__31514;
var map__31645__$1 = ((((!((map__31645 == null)))?((((map__31645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31645):map__31645);
var namespace = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31513,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31516 = cljs.core.map.call(null,inst_31515,inst_31494);
var inst_31517 = cljs.core.pr_str.call(null,inst_31516);
var inst_31518 = figwheel.client.utils.log.call(null,inst_31517);
var inst_31519 = (function (){var all_files = inst_31490;
var res_SINGLEQUOTE_ = inst_31493;
var res = inst_31494;
var files_not_loaded = inst_31496;
var dependencies_that_loaded = inst_31498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31513,inst_31515,inst_31516,inst_31517,inst_31518,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31496,inst_31494,inst_31490,inst_31498,inst_31493,inst_31513,inst_31515,inst_31516,inst_31517,inst_31518,state_val_31577,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31520 = setTimeout(inst_31519,(10));
var state_31576__$1 = (function (){var statearr_31647 = state_31576;
(statearr_31647[(33)] = inst_31513);

(statearr_31647[(34)] = inst_31518);

return statearr_31647;
})();
var statearr_31648_31714 = state_31576__$1;
(statearr_31648_31714[(2)] = inst_31520);

(statearr_31648_31714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (16))){
var state_31576__$1 = state_31576;
var statearr_31649_31715 = state_31576__$1;
(statearr_31649_31715[(2)] = reload_dependents);

(statearr_31649_31715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (38))){
var inst_31530 = (state_31576[(16)]);
var inst_31547 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31530);
var state_31576__$1 = state_31576;
var statearr_31650_31716 = state_31576__$1;
(statearr_31650_31716[(2)] = inst_31547);

(statearr_31650_31716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (30))){
var state_31576__$1 = state_31576;
var statearr_31651_31717 = state_31576__$1;
(statearr_31651_31717[(2)] = null);

(statearr_31651_31717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31450 = (state_31576[(22)]);
var inst_31452 = cljs.core.chunked_seq_QMARK_.call(null,inst_31450);
var state_31576__$1 = state_31576;
if(inst_31452){
var statearr_31652_31718 = state_31576__$1;
(statearr_31652_31718[(1)] = (13));

} else {
var statearr_31653_31719 = state_31576__$1;
(statearr_31653_31719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (18))){
var inst_31484 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31484)){
var statearr_31654_31720 = state_31576__$1;
(statearr_31654_31720[(1)] = (19));

} else {
var statearr_31655_31721 = state_31576__$1;
(statearr_31655_31721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (42))){
var state_31576__$1 = state_31576;
var statearr_31656_31722 = state_31576__$1;
(statearr_31656_31722[(2)] = null);

(statearr_31656_31722[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (37))){
var inst_31542 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31657_31723 = state_31576__$1;
(statearr_31657_31723[(2)] = inst_31542);

(statearr_31657_31723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31450 = (state_31576[(22)]);
var inst_31437 = (state_31576[(7)]);
var inst_31450__$1 = cljs.core.seq.call(null,inst_31437);
var state_31576__$1 = (function (){var statearr_31658 = state_31576;
(statearr_31658[(22)] = inst_31450__$1);

return statearr_31658;
})();
if(inst_31450__$1){
var statearr_31659_31724 = state_31576__$1;
(statearr_31659_31724[(1)] = (10));

} else {
var statearr_31660_31725 = state_31576__$1;
(statearr_31660_31725[(1)] = (11));

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
});})(c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20671__auto__,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____1 = (function (state_31576){
while(true){
var ret_value__20673__auto__ = (function (){try{while(true){
var result__20674__auto__ = switch__20671__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20674__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__20675__auto__ = e31665;
var statearr_31666_31726 = state_31576;
(statearr_31666_31726[(5)] = ex__20675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31727 = state_31576;
state_31576 = G__31727;
continue;
} else {
return ret_value__20673__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20672__auto__;
})()
;})(switch__20671__auto__,c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20694__auto__ = (function (){var statearr_31667 = f__20693__auto__.call(null);
(statearr_31667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20692__auto__);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20694__auto__);
});})(c__20692__auto__,map__31422,map__31422__$1,opts,before_jsload,on_jsload,reload_dependents,map__31423,map__31423__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20692__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31730,link){
var map__31733 = p__31730;
var map__31733__$1 = ((((!((map__31733 == null)))?((((map__31733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31733):map__31733);
var file = cljs.core.get.call(null,map__31733__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31733,map__31733__$1,file){
return (function (p1__31728_SHARP_,p2__31729_SHARP_){
if(cljs.core._EQ_.call(null,p1__31728_SHARP_,p2__31729_SHARP_)){
return p1__31728_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31733,map__31733__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31739){
var map__31740 = p__31739;
var map__31740__$1 = ((((!((map__31740 == null)))?((((map__31740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31740):map__31740);
var match_length = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31735_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31735_SHARP_);
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
var args31742 = [];
var len__19486__auto___31745 = arguments.length;
var i__19487__auto___31746 = (0);
while(true){
if((i__19487__auto___31746 < len__19486__auto___31745)){
args31742.push((arguments[i__19487__auto___31746]));

var G__31747 = (i__19487__auto___31746 + (1));
i__19487__auto___31746 = G__31747;
continue;
} else {
}
break;
}

var G__31744 = args31742.length;
switch (G__31744) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31742.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31749_SHARP_,p2__31750_SHARP_){
return cljs.core.assoc.call(null,p1__31749_SHARP_,cljs.core.get.call(null,p2__31750_SHARP_,key),p2__31750_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31751){
var map__31754 = p__31751;
var map__31754__$1 = ((((!((map__31754 == null)))?((((map__31754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31754):map__31754);
var f_data = map__31754__$1;
var file = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31756,files_msg){
var map__31763 = p__31756;
var map__31763__$1 = ((((!((map__31763 == null)))?((((map__31763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);
var opts = map__31763__$1;
var on_cssload = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31765_31769 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31766_31770 = null;
var count__31767_31771 = (0);
var i__31768_31772 = (0);
while(true){
if((i__31768_31772 < count__31767_31771)){
var f_31773 = cljs.core._nth.call(null,chunk__31766_31770,i__31768_31772);
figwheel.client.file_reloading.reload_css_file.call(null,f_31773);

var G__31774 = seq__31765_31769;
var G__31775 = chunk__31766_31770;
var G__31776 = count__31767_31771;
var G__31777 = (i__31768_31772 + (1));
seq__31765_31769 = G__31774;
chunk__31766_31770 = G__31775;
count__31767_31771 = G__31776;
i__31768_31772 = G__31777;
continue;
} else {
var temp__4425__auto___31778 = cljs.core.seq.call(null,seq__31765_31769);
if(temp__4425__auto___31778){
var seq__31765_31779__$1 = temp__4425__auto___31778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31765_31779__$1)){
var c__19231__auto___31780 = cljs.core.chunk_first.call(null,seq__31765_31779__$1);
var G__31781 = cljs.core.chunk_rest.call(null,seq__31765_31779__$1);
var G__31782 = c__19231__auto___31780;
var G__31783 = cljs.core.count.call(null,c__19231__auto___31780);
var G__31784 = (0);
seq__31765_31769 = G__31781;
chunk__31766_31770 = G__31782;
count__31767_31771 = G__31783;
i__31768_31772 = G__31784;
continue;
} else {
var f_31785 = cljs.core.first.call(null,seq__31765_31779__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31785);

var G__31786 = cljs.core.next.call(null,seq__31765_31779__$1);
var G__31787 = null;
var G__31788 = (0);
var G__31789 = (0);
seq__31765_31769 = G__31786;
chunk__31766_31770 = G__31787;
count__31767_31771 = G__31788;
i__31768_31772 = G__31789;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31763,map__31763__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31763,map__31763__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454378538010