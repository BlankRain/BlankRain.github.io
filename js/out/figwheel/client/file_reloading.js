// Compiled by ClojureScript 1.9.293 {}
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
var or__20285__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20285__auto__){
return or__20285__auto__;
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
var or__20285__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25501_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25501_SHARP_));
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
var seq__25506 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25507 = null;
var count__25508 = (0);
var i__25509 = (0);
while(true){
if((i__25509 < count__25508)){
var n = cljs.core._nth.call(null,chunk__25507,i__25509);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25510 = seq__25506;
var G__25511 = chunk__25507;
var G__25512 = count__25508;
var G__25513 = (i__25509 + (1));
seq__25506 = G__25510;
chunk__25507 = G__25511;
count__25508 = G__25512;
i__25509 = G__25513;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25506);
if(temp__4657__auto__){
var seq__25506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25506__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__25506__$1);
var G__25514 = cljs.core.chunk_rest.call(null,seq__25506__$1);
var G__25515 = c__21099__auto__;
var G__25516 = cljs.core.count.call(null,c__21099__auto__);
var G__25517 = (0);
seq__25506 = G__25514;
chunk__25507 = G__25515;
count__25508 = G__25516;
i__25509 = G__25517;
continue;
} else {
var n = cljs.core.first.call(null,seq__25506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25518 = cljs.core.next.call(null,seq__25506__$1);
var G__25519 = null;
var G__25520 = (0);
var G__25521 = (0);
seq__25506 = G__25518;
chunk__25507 = G__25519;
count__25508 = G__25520;
i__25509 = G__25521;
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

var seq__25572_25583 = cljs.core.seq.call(null,deps);
var chunk__25573_25584 = null;
var count__25574_25585 = (0);
var i__25575_25586 = (0);
while(true){
if((i__25575_25586 < count__25574_25585)){
var dep_25587 = cljs.core._nth.call(null,chunk__25573_25584,i__25575_25586);
topo_sort_helper_STAR_.call(null,dep_25587,(depth + (1)),state);

var G__25588 = seq__25572_25583;
var G__25589 = chunk__25573_25584;
var G__25590 = count__25574_25585;
var G__25591 = (i__25575_25586 + (1));
seq__25572_25583 = G__25588;
chunk__25573_25584 = G__25589;
count__25574_25585 = G__25590;
i__25575_25586 = G__25591;
continue;
} else {
var temp__4657__auto___25592 = cljs.core.seq.call(null,seq__25572_25583);
if(temp__4657__auto___25592){
var seq__25572_25593__$1 = temp__4657__auto___25592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25572_25593__$1)){
var c__21099__auto___25594 = cljs.core.chunk_first.call(null,seq__25572_25593__$1);
var G__25595 = cljs.core.chunk_rest.call(null,seq__25572_25593__$1);
var G__25596 = c__21099__auto___25594;
var G__25597 = cljs.core.count.call(null,c__21099__auto___25594);
var G__25598 = (0);
seq__25572_25583 = G__25595;
chunk__25573_25584 = G__25596;
count__25574_25585 = G__25597;
i__25575_25586 = G__25598;
continue;
} else {
var dep_25599 = cljs.core.first.call(null,seq__25572_25593__$1);
topo_sort_helper_STAR_.call(null,dep_25599,(depth + (1)),state);

var G__25600 = cljs.core.next.call(null,seq__25572_25593__$1);
var G__25601 = null;
var G__25602 = (0);
var G__25603 = (0);
seq__25572_25583 = G__25600;
chunk__25573_25584 = G__25601;
count__25574_25585 = G__25602;
i__25575_25586 = G__25603;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25576){
var vec__25580 = p__25576;
var seq__25581 = cljs.core.seq.call(null,vec__25580);
var first__25582 = cljs.core.first.call(null,seq__25581);
var seq__25581__$1 = cljs.core.next.call(null,seq__25581);
var x = first__25582;
var xs = seq__25581__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25580,seq__25581,first__25582,seq__25581__$1,x,xs,get_deps__$1){
return (function (p1__25522_SHARP_){
return clojure.set.difference.call(null,p1__25522_SHARP_,x);
});})(vec__25580,seq__25581,first__25582,seq__25581__$1,x,xs,get_deps__$1))
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
var seq__25616 = cljs.core.seq.call(null,provides);
var chunk__25617 = null;
var count__25618 = (0);
var i__25619 = (0);
while(true){
if((i__25619 < count__25618)){
var prov = cljs.core._nth.call(null,chunk__25617,i__25619);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25620_25628 = cljs.core.seq.call(null,requires);
var chunk__25621_25629 = null;
var count__25622_25630 = (0);
var i__25623_25631 = (0);
while(true){
if((i__25623_25631 < count__25622_25630)){
var req_25632 = cljs.core._nth.call(null,chunk__25621_25629,i__25623_25631);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25632,prov);

var G__25633 = seq__25620_25628;
var G__25634 = chunk__25621_25629;
var G__25635 = count__25622_25630;
var G__25636 = (i__25623_25631 + (1));
seq__25620_25628 = G__25633;
chunk__25621_25629 = G__25634;
count__25622_25630 = G__25635;
i__25623_25631 = G__25636;
continue;
} else {
var temp__4657__auto___25637 = cljs.core.seq.call(null,seq__25620_25628);
if(temp__4657__auto___25637){
var seq__25620_25638__$1 = temp__4657__auto___25637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25620_25638__$1)){
var c__21099__auto___25639 = cljs.core.chunk_first.call(null,seq__25620_25638__$1);
var G__25640 = cljs.core.chunk_rest.call(null,seq__25620_25638__$1);
var G__25641 = c__21099__auto___25639;
var G__25642 = cljs.core.count.call(null,c__21099__auto___25639);
var G__25643 = (0);
seq__25620_25628 = G__25640;
chunk__25621_25629 = G__25641;
count__25622_25630 = G__25642;
i__25623_25631 = G__25643;
continue;
} else {
var req_25644 = cljs.core.first.call(null,seq__25620_25638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25644,prov);

var G__25645 = cljs.core.next.call(null,seq__25620_25638__$1);
var G__25646 = null;
var G__25647 = (0);
var G__25648 = (0);
seq__25620_25628 = G__25645;
chunk__25621_25629 = G__25646;
count__25622_25630 = G__25647;
i__25623_25631 = G__25648;
continue;
}
} else {
}
}
break;
}

var G__25649 = seq__25616;
var G__25650 = chunk__25617;
var G__25651 = count__25618;
var G__25652 = (i__25619 + (1));
seq__25616 = G__25649;
chunk__25617 = G__25650;
count__25618 = G__25651;
i__25619 = G__25652;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25616);
if(temp__4657__auto__){
var seq__25616__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25616__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__25616__$1);
var G__25653 = cljs.core.chunk_rest.call(null,seq__25616__$1);
var G__25654 = c__21099__auto__;
var G__25655 = cljs.core.count.call(null,c__21099__auto__);
var G__25656 = (0);
seq__25616 = G__25653;
chunk__25617 = G__25654;
count__25618 = G__25655;
i__25619 = G__25656;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25616__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25624_25657 = cljs.core.seq.call(null,requires);
var chunk__25625_25658 = null;
var count__25626_25659 = (0);
var i__25627_25660 = (0);
while(true){
if((i__25627_25660 < count__25626_25659)){
var req_25661 = cljs.core._nth.call(null,chunk__25625_25658,i__25627_25660);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25661,prov);

var G__25662 = seq__25624_25657;
var G__25663 = chunk__25625_25658;
var G__25664 = count__25626_25659;
var G__25665 = (i__25627_25660 + (1));
seq__25624_25657 = G__25662;
chunk__25625_25658 = G__25663;
count__25626_25659 = G__25664;
i__25627_25660 = G__25665;
continue;
} else {
var temp__4657__auto___25666__$1 = cljs.core.seq.call(null,seq__25624_25657);
if(temp__4657__auto___25666__$1){
var seq__25624_25667__$1 = temp__4657__auto___25666__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25624_25667__$1)){
var c__21099__auto___25668 = cljs.core.chunk_first.call(null,seq__25624_25667__$1);
var G__25669 = cljs.core.chunk_rest.call(null,seq__25624_25667__$1);
var G__25670 = c__21099__auto___25668;
var G__25671 = cljs.core.count.call(null,c__21099__auto___25668);
var G__25672 = (0);
seq__25624_25657 = G__25669;
chunk__25625_25658 = G__25670;
count__25626_25659 = G__25671;
i__25627_25660 = G__25672;
continue;
} else {
var req_25673 = cljs.core.first.call(null,seq__25624_25667__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25673,prov);

var G__25674 = cljs.core.next.call(null,seq__25624_25667__$1);
var G__25675 = null;
var G__25676 = (0);
var G__25677 = (0);
seq__25624_25657 = G__25674;
chunk__25625_25658 = G__25675;
count__25626_25659 = G__25676;
i__25627_25660 = G__25677;
continue;
}
} else {
}
}
break;
}

var G__25678 = cljs.core.next.call(null,seq__25616__$1);
var G__25679 = null;
var G__25680 = (0);
var G__25681 = (0);
seq__25616 = G__25678;
chunk__25617 = G__25679;
count__25618 = G__25680;
i__25619 = G__25681;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25686_25690 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25687_25691 = null;
var count__25688_25692 = (0);
var i__25689_25693 = (0);
while(true){
if((i__25689_25693 < count__25688_25692)){
var ns_25694 = cljs.core._nth.call(null,chunk__25687_25691,i__25689_25693);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25694);

var G__25695 = seq__25686_25690;
var G__25696 = chunk__25687_25691;
var G__25697 = count__25688_25692;
var G__25698 = (i__25689_25693 + (1));
seq__25686_25690 = G__25695;
chunk__25687_25691 = G__25696;
count__25688_25692 = G__25697;
i__25689_25693 = G__25698;
continue;
} else {
var temp__4657__auto___25699 = cljs.core.seq.call(null,seq__25686_25690);
if(temp__4657__auto___25699){
var seq__25686_25700__$1 = temp__4657__auto___25699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25686_25700__$1)){
var c__21099__auto___25701 = cljs.core.chunk_first.call(null,seq__25686_25700__$1);
var G__25702 = cljs.core.chunk_rest.call(null,seq__25686_25700__$1);
var G__25703 = c__21099__auto___25701;
var G__25704 = cljs.core.count.call(null,c__21099__auto___25701);
var G__25705 = (0);
seq__25686_25690 = G__25702;
chunk__25687_25691 = G__25703;
count__25688_25692 = G__25704;
i__25689_25693 = G__25705;
continue;
} else {
var ns_25706 = cljs.core.first.call(null,seq__25686_25700__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25706);

var G__25707 = cljs.core.next.call(null,seq__25686_25700__$1);
var G__25708 = null;
var G__25709 = (0);
var G__25710 = (0);
seq__25686_25690 = G__25707;
chunk__25687_25691 = G__25708;
count__25688_25692 = G__25709;
i__25689_25693 = G__25710;
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
goog.require_figwheel_backup_ = (function (){var or__20285__auto__ = goog.require__;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
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
var G__25711__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25712__i = 0, G__25712__a = new Array(arguments.length -  0);
while (G__25712__i < G__25712__a.length) {G__25712__a[G__25712__i] = arguments[G__25712__i + 0]; ++G__25712__i;}
  args = new cljs.core.IndexedSeq(G__25712__a,0);
} 
return G__25711__delegate.call(this,args);};
G__25711.cljs$lang$maxFixedArity = 0;
G__25711.cljs$lang$applyTo = (function (arglist__25713){
var args = cljs.core.seq(arglist__25713);
return G__25711__delegate(args);
});
G__25711.cljs$core$IFn$_invoke$arity$variadic = G__25711__delegate;
return G__25711;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25715 = cljs.core._EQ_;
var expr__25716 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25715.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25716))){
var path_parts = ((function (pred__25715,expr__25716){
return (function (p1__25714_SHARP_){
return clojure.string.split.call(null,p1__25714_SHARP_,/[\/\\]/);
});})(pred__25715,expr__25716))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25715,expr__25716){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25718){if((e25718 instanceof Error)){
var e = e25718;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25718;

}
}})());
});
;})(path_parts,sep,root,pred__25715,expr__25716))
} else {
if(cljs.core.truth_(pred__25715.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25716))){
return ((function (pred__25715,expr__25716){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__25715,expr__25716){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25715,expr__25716))
);

return deferred.addErrback(((function (deferred,pred__25715,expr__25716){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25715,expr__25716))
);
});
;})(pred__25715,expr__25716))
} else {
return ((function (pred__25715,expr__25716){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25715,expr__25716))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25719,callback){
var map__25722 = p__25719;
var map__25722__$1 = ((((!((map__25722 == null)))?((((map__25722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25722):map__25722);
var file_msg = map__25722__$1;
var request_url = cljs.core.get.call(null,map__25722__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25722,map__25722__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25722,map__25722__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_25746){
var state_val_25747 = (state_25746[(1)]);
if((state_val_25747 === (7))){
var inst_25742 = (state_25746[(2)]);
var state_25746__$1 = state_25746;
var statearr_25748_25768 = state_25746__$1;
(statearr_25748_25768[(2)] = inst_25742);

(statearr_25748_25768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (1))){
var state_25746__$1 = state_25746;
var statearr_25749_25769 = state_25746__$1;
(statearr_25749_25769[(2)] = null);

(statearr_25749_25769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (4))){
var inst_25726 = (state_25746[(7)]);
var inst_25726__$1 = (state_25746[(2)]);
var state_25746__$1 = (function (){var statearr_25750 = state_25746;
(statearr_25750[(7)] = inst_25726__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25726__$1)){
var statearr_25751_25770 = state_25746__$1;
(statearr_25751_25770[(1)] = (5));

} else {
var statearr_25752_25771 = state_25746__$1;
(statearr_25752_25771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (6))){
var state_25746__$1 = state_25746;
var statearr_25753_25772 = state_25746__$1;
(statearr_25753_25772[(2)] = null);

(statearr_25753_25772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (3))){
var inst_25744 = (state_25746[(2)]);
var state_25746__$1 = state_25746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25746__$1,inst_25744);
} else {
if((state_val_25747 === (2))){
var state_25746__$1 = state_25746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25746__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25747 === (11))){
var inst_25738 = (state_25746[(2)]);
var state_25746__$1 = (function (){var statearr_25754 = state_25746;
(statearr_25754[(8)] = inst_25738);

return statearr_25754;
})();
var statearr_25755_25773 = state_25746__$1;
(statearr_25755_25773[(2)] = null);

(statearr_25755_25773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (9))){
var inst_25732 = (state_25746[(9)]);
var inst_25730 = (state_25746[(10)]);
var inst_25734 = inst_25732.call(null,inst_25730);
var state_25746__$1 = state_25746;
var statearr_25756_25774 = state_25746__$1;
(statearr_25756_25774[(2)] = inst_25734);

(statearr_25756_25774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (5))){
var inst_25726 = (state_25746[(7)]);
var inst_25728 = figwheel.client.file_reloading.blocking_load.call(null,inst_25726);
var state_25746__$1 = state_25746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25746__$1,(8),inst_25728);
} else {
if((state_val_25747 === (10))){
var inst_25730 = (state_25746[(10)]);
var inst_25736 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25730);
var state_25746__$1 = state_25746;
var statearr_25757_25775 = state_25746__$1;
(statearr_25757_25775[(2)] = inst_25736);

(statearr_25757_25775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (8))){
var inst_25732 = (state_25746[(9)]);
var inst_25726 = (state_25746[(7)]);
var inst_25730 = (state_25746[(2)]);
var inst_25731 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25732__$1 = cljs.core.get.call(null,inst_25731,inst_25726);
var state_25746__$1 = (function (){var statearr_25758 = state_25746;
(statearr_25758[(9)] = inst_25732__$1);

(statearr_25758[(10)] = inst_25730);

return statearr_25758;
})();
if(cljs.core.truth_(inst_25732__$1)){
var statearr_25759_25776 = state_25746__$1;
(statearr_25759_25776[(1)] = (9));

} else {
var statearr_25760_25777 = state_25746__$1;
(statearr_25760_25777[(1)] = (10));

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
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$state_machine__22379__auto____0 = (function (){
var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25764[(0)] = figwheel$client$file_reloading$state_machine__22379__auto__);

(statearr_25764[(1)] = (1));

return statearr_25764;
});
var figwheel$client$file_reloading$state_machine__22379__auto____1 = (function (state_25746){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_25746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object)){
var ex__22382__auto__ = e25765;
var statearr_25766_25778 = state_25746;
(statearr_25766_25778[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25779 = state_25746;
state_25746 = G__25779;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22379__auto__ = function(state_25746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22379__auto____1.call(this,state_25746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22379__auto____0;
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22379__auto____1;
return figwheel$client$file_reloading$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_25767 = f__22491__auto__.call(null);
(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_25767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25780,callback){
var map__25783 = p__25780;
var map__25783__$1 = ((((!((map__25783 == null)))?((((map__25783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25783):map__25783);
var file_msg = map__25783__$1;
var namespace = cljs.core.get.call(null,map__25783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25783,map__25783__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25783,map__25783__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25785){
var map__25788 = p__25785;
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var file_msg = map__25788__$1;
var namespace = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20273__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20273__auto__){
var or__20285__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20273__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25790,callback){
var map__25793 = p__25790;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var file_msg = map__25793__$1;
var request_url = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22490__auto___25897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___25897,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___25897,out){
return (function (state_25879){
var state_val_25880 = (state_25879[(1)]);
if((state_val_25880 === (1))){
var inst_25853 = cljs.core.seq.call(null,files);
var inst_25854 = cljs.core.first.call(null,inst_25853);
var inst_25855 = cljs.core.next.call(null,inst_25853);
var inst_25856 = files;
var state_25879__$1 = (function (){var statearr_25881 = state_25879;
(statearr_25881[(7)] = inst_25855);

(statearr_25881[(8)] = inst_25856);

(statearr_25881[(9)] = inst_25854);

return statearr_25881;
})();
var statearr_25882_25898 = state_25879__$1;
(statearr_25882_25898[(2)] = null);

(statearr_25882_25898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (2))){
var inst_25856 = (state_25879[(8)]);
var inst_25862 = (state_25879[(10)]);
var inst_25861 = cljs.core.seq.call(null,inst_25856);
var inst_25862__$1 = cljs.core.first.call(null,inst_25861);
var inst_25863 = cljs.core.next.call(null,inst_25861);
var inst_25864 = (inst_25862__$1 == null);
var inst_25865 = cljs.core.not.call(null,inst_25864);
var state_25879__$1 = (function (){var statearr_25883 = state_25879;
(statearr_25883[(11)] = inst_25863);

(statearr_25883[(10)] = inst_25862__$1);

return statearr_25883;
})();
if(inst_25865){
var statearr_25884_25899 = state_25879__$1;
(statearr_25884_25899[(1)] = (4));

} else {
var statearr_25885_25900 = state_25879__$1;
(statearr_25885_25900[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (3))){
var inst_25877 = (state_25879[(2)]);
var state_25879__$1 = state_25879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25879__$1,inst_25877);
} else {
if((state_val_25880 === (4))){
var inst_25862 = (state_25879[(10)]);
var inst_25867 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25862);
var state_25879__$1 = state_25879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25879__$1,(7),inst_25867);
} else {
if((state_val_25880 === (5))){
var inst_25873 = cljs.core.async.close_BANG_.call(null,out);
var state_25879__$1 = state_25879;
var statearr_25886_25901 = state_25879__$1;
(statearr_25886_25901[(2)] = inst_25873);

(statearr_25886_25901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (6))){
var inst_25875 = (state_25879[(2)]);
var state_25879__$1 = state_25879;
var statearr_25887_25902 = state_25879__$1;
(statearr_25887_25902[(2)] = inst_25875);

(statearr_25887_25902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (7))){
var inst_25863 = (state_25879[(11)]);
var inst_25869 = (state_25879[(2)]);
var inst_25870 = cljs.core.async.put_BANG_.call(null,out,inst_25869);
var inst_25856 = inst_25863;
var state_25879__$1 = (function (){var statearr_25888 = state_25879;
(statearr_25888[(8)] = inst_25856);

(statearr_25888[(12)] = inst_25870);

return statearr_25888;
})();
var statearr_25889_25903 = state_25879__$1;
(statearr_25889_25903[(2)] = null);

(statearr_25889_25903[(1)] = (2));


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
});})(c__22490__auto___25897,out))
;
return ((function (switch__22378__auto__,c__22490__auto___25897,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_25893 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25893[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__);

(statearr_25893[(1)] = (1));

return statearr_25893;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1 = (function (state_25879){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_25879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25894){if((e25894 instanceof Object)){
var ex__22382__auto__ = e25894;
var statearr_25895_25904 = state_25879;
(statearr_25895_25904[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_25879;
state_25879 = G__25905;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = function(state_25879){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1.call(this,state_25879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___25897,out))
})();
var state__22492__auto__ = (function (){var statearr_25896 = f__22491__auto__.call(null);
(statearr_25896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___25897);

return statearr_25896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___25897,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25906,opts){
var map__25910 = p__25906;
var map__25910__$1 = ((((!((map__25910 == null)))?((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25910):map__25910);
var eval_body = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20273__auto__ = eval_body;
if(cljs.core.truth_(and__20273__auto__)){
return typeof eval_body === 'string';
} else {
return and__20273__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25912){var e = e25912;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25913_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25913_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__25922){
var vec__25923 = p__25922;
var k = cljs.core.nth.call(null,vec__25923,(0),null);
var v = cljs.core.nth.call(null,vec__25923,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25926){
var vec__25927 = p__25926;
var k = cljs.core.nth.call(null,vec__25927,(0),null);
var v = cljs.core.nth.call(null,vec__25927,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25933,p__25934){
var map__26182 = p__25933;
var map__26182__$1 = ((((!((map__26182 == null)))?((((map__26182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26182):map__26182);
var opts = map__26182__$1;
var before_jsload = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26182__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26183 = p__25934;
var map__26183__$1 = ((((!((map__26183 == null)))?((((map__26183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183):map__26183);
var msg = map__26183__$1;
var files = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26337){
var state_val_26338 = (state_26337[(1)]);
if((state_val_26338 === (7))){
var inst_26198 = (state_26337[(7)]);
var inst_26200 = (state_26337[(8)]);
var inst_26199 = (state_26337[(9)]);
var inst_26197 = (state_26337[(10)]);
var inst_26205 = cljs.core._nth.call(null,inst_26198,inst_26200);
var inst_26206 = figwheel.client.file_reloading.eval_body.call(null,inst_26205,opts);
var inst_26207 = (inst_26200 + (1));
var tmp26339 = inst_26198;
var tmp26340 = inst_26199;
var tmp26341 = inst_26197;
var inst_26197__$1 = tmp26341;
var inst_26198__$1 = tmp26339;
var inst_26199__$1 = tmp26340;
var inst_26200__$1 = inst_26207;
var state_26337__$1 = (function (){var statearr_26342 = state_26337;
(statearr_26342[(7)] = inst_26198__$1);

(statearr_26342[(8)] = inst_26200__$1);

(statearr_26342[(9)] = inst_26199__$1);

(statearr_26342[(11)] = inst_26206);

(statearr_26342[(10)] = inst_26197__$1);

return statearr_26342;
})();
var statearr_26343_26429 = state_26337__$1;
(statearr_26343_26429[(2)] = null);

(statearr_26343_26429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (20))){
var inst_26240 = (state_26337[(12)]);
var inst_26248 = figwheel.client.file_reloading.sort_files.call(null,inst_26240);
var state_26337__$1 = state_26337;
var statearr_26344_26430 = state_26337__$1;
(statearr_26344_26430[(2)] = inst_26248);

(statearr_26344_26430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (27))){
var state_26337__$1 = state_26337;
var statearr_26345_26431 = state_26337__$1;
(statearr_26345_26431[(2)] = null);

(statearr_26345_26431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (1))){
var inst_26189 = (state_26337[(13)]);
var inst_26186 = before_jsload.call(null,files);
var inst_26187 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26188 = (function (){return ((function (inst_26189,inst_26186,inst_26187,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25930_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25930_SHARP_);
});
;})(inst_26189,inst_26186,inst_26187,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26189__$1 = cljs.core.filter.call(null,inst_26188,files);
var inst_26190 = cljs.core.not_empty.call(null,inst_26189__$1);
var state_26337__$1 = (function (){var statearr_26346 = state_26337;
(statearr_26346[(14)] = inst_26187);

(statearr_26346[(13)] = inst_26189__$1);

(statearr_26346[(15)] = inst_26186);

return statearr_26346;
})();
if(cljs.core.truth_(inst_26190)){
var statearr_26347_26432 = state_26337__$1;
(statearr_26347_26432[(1)] = (2));

} else {
var statearr_26348_26433 = state_26337__$1;
(statearr_26348_26433[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (24))){
var state_26337__$1 = state_26337;
var statearr_26349_26434 = state_26337__$1;
(statearr_26349_26434[(2)] = null);

(statearr_26349_26434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (39))){
var inst_26290 = (state_26337[(16)]);
var state_26337__$1 = state_26337;
var statearr_26350_26435 = state_26337__$1;
(statearr_26350_26435[(2)] = inst_26290);

(statearr_26350_26435[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (46))){
var inst_26332 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26351_26436 = state_26337__$1;
(statearr_26351_26436[(2)] = inst_26332);

(statearr_26351_26436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (4))){
var inst_26234 = (state_26337[(2)]);
var inst_26235 = cljs.core.List.EMPTY;
var inst_26236 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26235);
var inst_26237 = (function (){return ((function (inst_26234,inst_26235,inst_26236,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25931_SHARP_){
var and__20273__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25931_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25931_SHARP_));
} else {
return and__20273__auto__;
}
});
;})(inst_26234,inst_26235,inst_26236,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26238 = cljs.core.filter.call(null,inst_26237,files);
var inst_26239 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26240 = cljs.core.concat.call(null,inst_26238,inst_26239);
var state_26337__$1 = (function (){var statearr_26352 = state_26337;
(statearr_26352[(12)] = inst_26240);

(statearr_26352[(17)] = inst_26234);

(statearr_26352[(18)] = inst_26236);

return statearr_26352;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26353_26437 = state_26337__$1;
(statearr_26353_26437[(1)] = (16));

} else {
var statearr_26354_26438 = state_26337__$1;
(statearr_26354_26438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (15))){
var inst_26224 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26355_26439 = state_26337__$1;
(statearr_26355_26439[(2)] = inst_26224);

(statearr_26355_26439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (21))){
var inst_26250 = (state_26337[(19)]);
var inst_26250__$1 = (state_26337[(2)]);
var inst_26251 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26250__$1);
var state_26337__$1 = (function (){var statearr_26356 = state_26337;
(statearr_26356[(19)] = inst_26250__$1);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26337__$1,(22),inst_26251);
} else {
if((state_val_26338 === (31))){
var inst_26335 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26337__$1,inst_26335);
} else {
if((state_val_26338 === (32))){
var inst_26290 = (state_26337[(16)]);
var inst_26295 = inst_26290.cljs$lang$protocol_mask$partition0$;
var inst_26296 = (inst_26295 & (64));
var inst_26297 = inst_26290.cljs$core$ISeq$;
var inst_26298 = (cljs.core.PROTOCOL_SENTINEL === inst_26297);
var inst_26299 = (inst_26296) || (inst_26298);
var state_26337__$1 = state_26337;
if(cljs.core.truth_(inst_26299)){
var statearr_26357_26440 = state_26337__$1;
(statearr_26357_26440[(1)] = (35));

} else {
var statearr_26358_26441 = state_26337__$1;
(statearr_26358_26441[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (40))){
var inst_26312 = (state_26337[(20)]);
var inst_26311 = (state_26337[(2)]);
var inst_26312__$1 = cljs.core.get.call(null,inst_26311,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26313 = cljs.core.get.call(null,inst_26311,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26314 = cljs.core.not_empty.call(null,inst_26312__$1);
var state_26337__$1 = (function (){var statearr_26359 = state_26337;
(statearr_26359[(21)] = inst_26313);

(statearr_26359[(20)] = inst_26312__$1);

return statearr_26359;
})();
if(cljs.core.truth_(inst_26314)){
var statearr_26360_26442 = state_26337__$1;
(statearr_26360_26442[(1)] = (41));

} else {
var statearr_26361_26443 = state_26337__$1;
(statearr_26361_26443[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (33))){
var state_26337__$1 = state_26337;
var statearr_26362_26444 = state_26337__$1;
(statearr_26362_26444[(2)] = false);

(statearr_26362_26444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (13))){
var inst_26210 = (state_26337[(22)]);
var inst_26214 = cljs.core.chunk_first.call(null,inst_26210);
var inst_26215 = cljs.core.chunk_rest.call(null,inst_26210);
var inst_26216 = cljs.core.count.call(null,inst_26214);
var inst_26197 = inst_26215;
var inst_26198 = inst_26214;
var inst_26199 = inst_26216;
var inst_26200 = (0);
var state_26337__$1 = (function (){var statearr_26363 = state_26337;
(statearr_26363[(7)] = inst_26198);

(statearr_26363[(8)] = inst_26200);

(statearr_26363[(9)] = inst_26199);

(statearr_26363[(10)] = inst_26197);

return statearr_26363;
})();
var statearr_26364_26445 = state_26337__$1;
(statearr_26364_26445[(2)] = null);

(statearr_26364_26445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (22))){
var inst_26250 = (state_26337[(19)]);
var inst_26254 = (state_26337[(23)]);
var inst_26258 = (state_26337[(24)]);
var inst_26253 = (state_26337[(25)]);
var inst_26253__$1 = (state_26337[(2)]);
var inst_26254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26253__$1);
var inst_26255 = (function (){var all_files = inst_26250;
var res_SINGLEQUOTE_ = inst_26253__$1;
var res = inst_26254__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26250,inst_26254,inst_26258,inst_26253,inst_26253__$1,inst_26254__$1,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25932_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25932_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26250,inst_26254,inst_26258,inst_26253,inst_26253__$1,inst_26254__$1,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26256 = cljs.core.filter.call(null,inst_26255,inst_26253__$1);
var inst_26257 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26258__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26257);
var inst_26259 = cljs.core.not_empty.call(null,inst_26258__$1);
var state_26337__$1 = (function (){var statearr_26365 = state_26337;
(statearr_26365[(26)] = inst_26256);

(statearr_26365[(23)] = inst_26254__$1);

(statearr_26365[(24)] = inst_26258__$1);

(statearr_26365[(25)] = inst_26253__$1);

return statearr_26365;
})();
if(cljs.core.truth_(inst_26259)){
var statearr_26366_26446 = state_26337__$1;
(statearr_26366_26446[(1)] = (23));

} else {
var statearr_26367_26447 = state_26337__$1;
(statearr_26367_26447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (36))){
var state_26337__$1 = state_26337;
var statearr_26368_26448 = state_26337__$1;
(statearr_26368_26448[(2)] = false);

(statearr_26368_26448[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (41))){
var inst_26312 = (state_26337[(20)]);
var inst_26316 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26317 = cljs.core.map.call(null,inst_26316,inst_26312);
var inst_26318 = cljs.core.pr_str.call(null,inst_26317);
var inst_26319 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26318)].join('');
var inst_26320 = figwheel.client.utils.log.call(null,inst_26319);
var state_26337__$1 = state_26337;
var statearr_26369_26449 = state_26337__$1;
(statearr_26369_26449[(2)] = inst_26320);

(statearr_26369_26449[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (43))){
var inst_26313 = (state_26337[(21)]);
var inst_26323 = (state_26337[(2)]);
var inst_26324 = cljs.core.not_empty.call(null,inst_26313);
var state_26337__$1 = (function (){var statearr_26370 = state_26337;
(statearr_26370[(27)] = inst_26323);

return statearr_26370;
})();
if(cljs.core.truth_(inst_26324)){
var statearr_26371_26450 = state_26337__$1;
(statearr_26371_26450[(1)] = (44));

} else {
var statearr_26372_26451 = state_26337__$1;
(statearr_26372_26451[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (29))){
var inst_26250 = (state_26337[(19)]);
var inst_26256 = (state_26337[(26)]);
var inst_26254 = (state_26337[(23)]);
var inst_26258 = (state_26337[(24)]);
var inst_26290 = (state_26337[(16)]);
var inst_26253 = (state_26337[(25)]);
var inst_26286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26289 = (function (){var all_files = inst_26250;
var res_SINGLEQUOTE_ = inst_26253;
var res = inst_26254;
var files_not_loaded = inst_26256;
var dependencies_that_loaded = inst_26258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26290,inst_26253,inst_26286,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26288){
var map__26373 = p__26288;
var map__26373__$1 = ((((!((map__26373 == null)))?((((map__26373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26373):map__26373);
var namespace = cljs.core.get.call(null,map__26373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26290,inst_26253,inst_26286,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26290__$1 = cljs.core.group_by.call(null,inst_26289,inst_26256);
var inst_26292 = (inst_26290__$1 == null);
var inst_26293 = cljs.core.not.call(null,inst_26292);
var state_26337__$1 = (function (){var statearr_26375 = state_26337;
(statearr_26375[(28)] = inst_26286);

(statearr_26375[(16)] = inst_26290__$1);

return statearr_26375;
})();
if(inst_26293){
var statearr_26376_26452 = state_26337__$1;
(statearr_26376_26452[(1)] = (32));

} else {
var statearr_26377_26453 = state_26337__$1;
(statearr_26377_26453[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (44))){
var inst_26313 = (state_26337[(21)]);
var inst_26326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26313);
var inst_26327 = cljs.core.pr_str.call(null,inst_26326);
var inst_26328 = [cljs.core.str("not required: "),cljs.core.str(inst_26327)].join('');
var inst_26329 = figwheel.client.utils.log.call(null,inst_26328);
var state_26337__$1 = state_26337;
var statearr_26378_26454 = state_26337__$1;
(statearr_26378_26454[(2)] = inst_26329);

(statearr_26378_26454[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (6))){
var inst_26231 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26379_26455 = state_26337__$1;
(statearr_26379_26455[(2)] = inst_26231);

(statearr_26379_26455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (28))){
var inst_26256 = (state_26337[(26)]);
var inst_26283 = (state_26337[(2)]);
var inst_26284 = cljs.core.not_empty.call(null,inst_26256);
var state_26337__$1 = (function (){var statearr_26380 = state_26337;
(statearr_26380[(29)] = inst_26283);

return statearr_26380;
})();
if(cljs.core.truth_(inst_26284)){
var statearr_26381_26456 = state_26337__$1;
(statearr_26381_26456[(1)] = (29));

} else {
var statearr_26382_26457 = state_26337__$1;
(statearr_26382_26457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (25))){
var inst_26254 = (state_26337[(23)]);
var inst_26270 = (state_26337[(2)]);
var inst_26271 = cljs.core.not_empty.call(null,inst_26254);
var state_26337__$1 = (function (){var statearr_26383 = state_26337;
(statearr_26383[(30)] = inst_26270);

return statearr_26383;
})();
if(cljs.core.truth_(inst_26271)){
var statearr_26384_26458 = state_26337__$1;
(statearr_26384_26458[(1)] = (26));

} else {
var statearr_26385_26459 = state_26337__$1;
(statearr_26385_26459[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (34))){
var inst_26306 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
if(cljs.core.truth_(inst_26306)){
var statearr_26386_26460 = state_26337__$1;
(statearr_26386_26460[(1)] = (38));

} else {
var statearr_26387_26461 = state_26337__$1;
(statearr_26387_26461[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (17))){
var state_26337__$1 = state_26337;
var statearr_26388_26462 = state_26337__$1;
(statearr_26388_26462[(2)] = recompile_dependents);

(statearr_26388_26462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (3))){
var state_26337__$1 = state_26337;
var statearr_26389_26463 = state_26337__$1;
(statearr_26389_26463[(2)] = null);

(statearr_26389_26463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (12))){
var inst_26227 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26390_26464 = state_26337__$1;
(statearr_26390_26464[(2)] = inst_26227);

(statearr_26390_26464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (2))){
var inst_26189 = (state_26337[(13)]);
var inst_26196 = cljs.core.seq.call(null,inst_26189);
var inst_26197 = inst_26196;
var inst_26198 = null;
var inst_26199 = (0);
var inst_26200 = (0);
var state_26337__$1 = (function (){var statearr_26391 = state_26337;
(statearr_26391[(7)] = inst_26198);

(statearr_26391[(8)] = inst_26200);

(statearr_26391[(9)] = inst_26199);

(statearr_26391[(10)] = inst_26197);

return statearr_26391;
})();
var statearr_26392_26465 = state_26337__$1;
(statearr_26392_26465[(2)] = null);

(statearr_26392_26465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (23))){
var inst_26250 = (state_26337[(19)]);
var inst_26256 = (state_26337[(26)]);
var inst_26254 = (state_26337[(23)]);
var inst_26258 = (state_26337[(24)]);
var inst_26253 = (state_26337[(25)]);
var inst_26261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26263 = (function (){var all_files = inst_26250;
var res_SINGLEQUOTE_ = inst_26253;
var res = inst_26254;
var files_not_loaded = inst_26256;
var dependencies_that_loaded = inst_26258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26261,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26262){
var map__26393 = p__26262;
var map__26393__$1 = ((((!((map__26393 == null)))?((((map__26393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26393):map__26393);
var request_url = cljs.core.get.call(null,map__26393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26261,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26264 = cljs.core.reverse.call(null,inst_26258);
var inst_26265 = cljs.core.map.call(null,inst_26263,inst_26264);
var inst_26266 = cljs.core.pr_str.call(null,inst_26265);
var inst_26267 = figwheel.client.utils.log.call(null,inst_26266);
var state_26337__$1 = (function (){var statearr_26395 = state_26337;
(statearr_26395[(31)] = inst_26261);

return statearr_26395;
})();
var statearr_26396_26466 = state_26337__$1;
(statearr_26396_26466[(2)] = inst_26267);

(statearr_26396_26466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (35))){
var state_26337__$1 = state_26337;
var statearr_26397_26467 = state_26337__$1;
(statearr_26397_26467[(2)] = true);

(statearr_26397_26467[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (19))){
var inst_26240 = (state_26337[(12)]);
var inst_26246 = figwheel.client.file_reloading.expand_files.call(null,inst_26240);
var state_26337__$1 = state_26337;
var statearr_26398_26468 = state_26337__$1;
(statearr_26398_26468[(2)] = inst_26246);

(statearr_26398_26468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (11))){
var state_26337__$1 = state_26337;
var statearr_26399_26469 = state_26337__$1;
(statearr_26399_26469[(2)] = null);

(statearr_26399_26469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (9))){
var inst_26229 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26400_26470 = state_26337__$1;
(statearr_26400_26470[(2)] = inst_26229);

(statearr_26400_26470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (5))){
var inst_26200 = (state_26337[(8)]);
var inst_26199 = (state_26337[(9)]);
var inst_26202 = (inst_26200 < inst_26199);
var inst_26203 = inst_26202;
var state_26337__$1 = state_26337;
if(cljs.core.truth_(inst_26203)){
var statearr_26401_26471 = state_26337__$1;
(statearr_26401_26471[(1)] = (7));

} else {
var statearr_26402_26472 = state_26337__$1;
(statearr_26402_26472[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (14))){
var inst_26210 = (state_26337[(22)]);
var inst_26219 = cljs.core.first.call(null,inst_26210);
var inst_26220 = figwheel.client.file_reloading.eval_body.call(null,inst_26219,opts);
var inst_26221 = cljs.core.next.call(null,inst_26210);
var inst_26197 = inst_26221;
var inst_26198 = null;
var inst_26199 = (0);
var inst_26200 = (0);
var state_26337__$1 = (function (){var statearr_26403 = state_26337;
(statearr_26403[(7)] = inst_26198);

(statearr_26403[(8)] = inst_26200);

(statearr_26403[(9)] = inst_26199);

(statearr_26403[(10)] = inst_26197);

(statearr_26403[(32)] = inst_26220);

return statearr_26403;
})();
var statearr_26404_26473 = state_26337__$1;
(statearr_26404_26473[(2)] = null);

(statearr_26404_26473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (45))){
var state_26337__$1 = state_26337;
var statearr_26405_26474 = state_26337__$1;
(statearr_26405_26474[(2)] = null);

(statearr_26405_26474[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (26))){
var inst_26250 = (state_26337[(19)]);
var inst_26256 = (state_26337[(26)]);
var inst_26254 = (state_26337[(23)]);
var inst_26258 = (state_26337[(24)]);
var inst_26253 = (state_26337[(25)]);
var inst_26273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26275 = (function (){var all_files = inst_26250;
var res_SINGLEQUOTE_ = inst_26253;
var res = inst_26254;
var files_not_loaded = inst_26256;
var dependencies_that_loaded = inst_26258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26273,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26274){
var map__26406 = p__26274;
var map__26406__$1 = ((((!((map__26406 == null)))?((((map__26406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26406):map__26406);
var namespace = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26273,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26276 = cljs.core.map.call(null,inst_26275,inst_26254);
var inst_26277 = cljs.core.pr_str.call(null,inst_26276);
var inst_26278 = figwheel.client.utils.log.call(null,inst_26277);
var inst_26279 = (function (){var all_files = inst_26250;
var res_SINGLEQUOTE_ = inst_26253;
var res = inst_26254;
var files_not_loaded = inst_26256;
var dependencies_that_loaded = inst_26258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26273,inst_26275,inst_26276,inst_26277,inst_26278,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26250,inst_26256,inst_26254,inst_26258,inst_26253,inst_26273,inst_26275,inst_26276,inst_26277,inst_26278,state_val_26338,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26280 = setTimeout(inst_26279,(10));
var state_26337__$1 = (function (){var statearr_26408 = state_26337;
(statearr_26408[(33)] = inst_26273);

(statearr_26408[(34)] = inst_26278);

return statearr_26408;
})();
var statearr_26409_26475 = state_26337__$1;
(statearr_26409_26475[(2)] = inst_26280);

(statearr_26409_26475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (16))){
var state_26337__$1 = state_26337;
var statearr_26410_26476 = state_26337__$1;
(statearr_26410_26476[(2)] = reload_dependents);

(statearr_26410_26476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (38))){
var inst_26290 = (state_26337[(16)]);
var inst_26308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26290);
var state_26337__$1 = state_26337;
var statearr_26411_26477 = state_26337__$1;
(statearr_26411_26477[(2)] = inst_26308);

(statearr_26411_26477[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (30))){
var state_26337__$1 = state_26337;
var statearr_26412_26478 = state_26337__$1;
(statearr_26412_26478[(2)] = null);

(statearr_26412_26478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (10))){
var inst_26210 = (state_26337[(22)]);
var inst_26212 = cljs.core.chunked_seq_QMARK_.call(null,inst_26210);
var state_26337__$1 = state_26337;
if(inst_26212){
var statearr_26413_26479 = state_26337__$1;
(statearr_26413_26479[(1)] = (13));

} else {
var statearr_26414_26480 = state_26337__$1;
(statearr_26414_26480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (18))){
var inst_26244 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
if(cljs.core.truth_(inst_26244)){
var statearr_26415_26481 = state_26337__$1;
(statearr_26415_26481[(1)] = (19));

} else {
var statearr_26416_26482 = state_26337__$1;
(statearr_26416_26482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (42))){
var state_26337__$1 = state_26337;
var statearr_26417_26483 = state_26337__$1;
(statearr_26417_26483[(2)] = null);

(statearr_26417_26483[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (37))){
var inst_26303 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26418_26484 = state_26337__$1;
(statearr_26418_26484[(2)] = inst_26303);

(statearr_26418_26484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (8))){
var inst_26210 = (state_26337[(22)]);
var inst_26197 = (state_26337[(10)]);
var inst_26210__$1 = cljs.core.seq.call(null,inst_26197);
var state_26337__$1 = (function (){var statearr_26419 = state_26337;
(statearr_26419[(22)] = inst_26210__$1);

return statearr_26419;
})();
if(inst_26210__$1){
var statearr_26420_26485 = state_26337__$1;
(statearr_26420_26485[(1)] = (10));

} else {
var statearr_26421_26486 = state_26337__$1;
(statearr_26421_26486[(1)] = (11));

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
});})(c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22378__auto__,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_26425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26425[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__);

(statearr_26425[(1)] = (1));

return statearr_26425;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1 = (function (state_26337){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_26337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e26426){if((e26426 instanceof Object)){
var ex__22382__auto__ = e26426;
var statearr_26427_26487 = state_26337;
(statearr_26427_26487[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26488 = state_26337;
state_26337 = G__26488;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = function(state_26337){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1.call(this,state_26337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22492__auto__ = (function (){var statearr_26428 = f__22491__auto__.call(null);
(statearr_26428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_26428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,map__26182,map__26182__$1,opts,before_jsload,on_jsload,reload_dependents,map__26183,map__26183__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22490__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26491,link){
var map__26494 = p__26491;
var map__26494__$1 = ((((!((map__26494 == null)))?((((map__26494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26494):map__26494);
var file = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26494,map__26494__$1,file){
return (function (p1__26489_SHARP_,p2__26490_SHARP_){
if(cljs.core._EQ_.call(null,p1__26489_SHARP_,p2__26490_SHARP_)){
return p1__26489_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26494,map__26494__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26500){
var map__26501 = p__26500;
var map__26501__$1 = ((((!((map__26501 == null)))?((((map__26501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26501):map__26501);
var match_length = cljs.core.get.call(null,map__26501__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26501__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26496_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26496_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args26503 = [];
var len__21393__auto___26506 = arguments.length;
var i__21394__auto___26507 = (0);
while(true){
if((i__21394__auto___26507 < len__21393__auto___26506)){
args26503.push((arguments[i__21394__auto___26507]));

var G__26508 = (i__21394__auto___26507 + (1));
i__21394__auto___26507 = G__26508;
continue;
} else {
}
break;
}

var G__26505 = args26503.length;
switch (G__26505) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26503.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26510_SHARP_,p2__26511_SHARP_){
return cljs.core.assoc.call(null,p1__26510_SHARP_,cljs.core.get.call(null,p2__26511_SHARP_,key),p2__26511_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26512){
var map__26515 = p__26512;
var map__26515__$1 = ((((!((map__26515 == null)))?((((map__26515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26515):map__26515);
var f_data = map__26515__$1;
var file = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26517,files_msg){
var map__26524 = p__26517;
var map__26524__$1 = ((((!((map__26524 == null)))?((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var opts = map__26524__$1;
var on_cssload = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26526_26530 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26527_26531 = null;
var count__26528_26532 = (0);
var i__26529_26533 = (0);
while(true){
if((i__26529_26533 < count__26528_26532)){
var f_26534 = cljs.core._nth.call(null,chunk__26527_26531,i__26529_26533);
figwheel.client.file_reloading.reload_css_file.call(null,f_26534);

var G__26535 = seq__26526_26530;
var G__26536 = chunk__26527_26531;
var G__26537 = count__26528_26532;
var G__26538 = (i__26529_26533 + (1));
seq__26526_26530 = G__26535;
chunk__26527_26531 = G__26536;
count__26528_26532 = G__26537;
i__26529_26533 = G__26538;
continue;
} else {
var temp__4657__auto___26539 = cljs.core.seq.call(null,seq__26526_26530);
if(temp__4657__auto___26539){
var seq__26526_26540__$1 = temp__4657__auto___26539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26526_26540__$1)){
var c__21099__auto___26541 = cljs.core.chunk_first.call(null,seq__26526_26540__$1);
var G__26542 = cljs.core.chunk_rest.call(null,seq__26526_26540__$1);
var G__26543 = c__21099__auto___26541;
var G__26544 = cljs.core.count.call(null,c__21099__auto___26541);
var G__26545 = (0);
seq__26526_26530 = G__26542;
chunk__26527_26531 = G__26543;
count__26528_26532 = G__26544;
i__26529_26533 = G__26545;
continue;
} else {
var f_26546 = cljs.core.first.call(null,seq__26526_26540__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26546);

var G__26547 = cljs.core.next.call(null,seq__26526_26540__$1);
var G__26548 = null;
var G__26549 = (0);
var G__26550 = (0);
seq__26526_26530 = G__26547;
chunk__26527_26531 = G__26548;
count__26528_26532 = G__26549;
i__26529_26533 = G__26550;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26524,map__26524__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26524,map__26524__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1493780417883