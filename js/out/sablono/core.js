// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27094__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27091 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__27092 = cljs.core.seq.call(null,vec__27091);
var first__27093 = cljs.core.first.call(null,seq__27092);
var seq__27092__$1 = cljs.core.next.call(null,seq__27092);
var tag = first__27093;
var body = seq__27092__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27095__i = 0, G__27095__a = new Array(arguments.length -  0);
while (G__27095__i < G__27095__a.length) {G__27095__a[G__27095__i] = arguments[G__27095__i + 0]; ++G__27095__i;}
  args = new cljs.core.IndexedSeq(G__27095__a,0);
} 
return G__27094__delegate.call(this,args);};
G__27094.cljs$lang$maxFixedArity = 0;
G__27094.cljs$lang$applyTo = (function (arglist__27096){
var args = cljs.core.seq(arglist__27096);
return G__27094__delegate(args);
});
G__27094.cljs$core$IFn$_invoke$arity$variadic = G__27094__delegate;
return G__27094;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21068__auto__ = (function sablono$core$update_arglists_$_iter__27101(s__27102){
return (new cljs.core.LazySeq(null,(function (){
var s__27102__$1 = s__27102;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27102__$1);
if(temp__4657__auto__){
var s__27102__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27102__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__27102__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__27104 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__27103 = (0);
while(true){
if((i__27103 < size__21067__auto__)){
var args = cljs.core._nth.call(null,c__21066__auto__,i__27103);
cljs.core.chunk_append.call(null,b__27104,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27105 = (i__27103 + (1));
i__27103 = G__27105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27104),sablono$core$update_arglists_$_iter__27101.call(null,cljs.core.chunk_rest.call(null,s__27102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27104),null);
}
} else {
var args = cljs.core.first.call(null,s__27102__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27101.call(null,cljs.core.rest.call(null,s__27102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21400__auto__ = [];
var len__21393__auto___27111 = arguments.length;
var i__21394__auto___27112 = (0);
while(true){
if((i__21394__auto___27112 < len__21393__auto___27111)){
args__21400__auto__.push((arguments[i__21394__auto___27112]));

var G__27113 = (i__21394__auto___27112 + (1));
i__21394__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21068__auto__ = (function sablono$core$iter__27107(s__27108){
return (new cljs.core.LazySeq(null,(function (){
var s__27108__$1 = s__27108;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27108__$1);
if(temp__4657__auto__){
var s__27108__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27108__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__27108__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__27110 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__27109 = (0);
while(true){
if((i__27109 < size__21067__auto__)){
var style = cljs.core._nth.call(null,c__21066__auto__,i__27109);
cljs.core.chunk_append.call(null,b__27110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27114 = (i__27109 + (1));
i__27109 = G__27114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27110),sablono$core$iter__27107.call(null,cljs.core.chunk_rest.call(null,s__27108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27110),null);
}
} else {
var style = cljs.core.first.call(null,s__27108__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27107.call(null,cljs.core.rest.call(null,s__27108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27106){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27106));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27115 = (function sablono$core$link_to27115(var_args){
var args__21400__auto__ = [];
var len__21393__auto___27118 = arguments.length;
var i__21394__auto___27119 = (0);
while(true){
if((i__21394__auto___27119 < len__21393__auto___27118)){
args__21400__auto__.push((arguments[i__21394__auto___27119]));

var G__27120 = (i__21394__auto___27119 + (1));
i__21394__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27115.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.link_to27115.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27115.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27115.cljs$lang$applyTo = (function (seq27116){
var G__27117 = cljs.core.first.call(null,seq27116);
var seq27116__$1 = cljs.core.next.call(null,seq27116);
return sablono.core.link_to27115.cljs$core$IFn$_invoke$arity$variadic(G__27117,seq27116__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27115);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27121 = (function sablono$core$mail_to27121(var_args){
var args__21400__auto__ = [];
var len__21393__auto___27128 = arguments.length;
var i__21394__auto___27129 = (0);
while(true){
if((i__21394__auto___27129 < len__21393__auto___27128)){
args__21400__auto__.push((arguments[i__21394__auto___27129]));

var G__27130 = (i__21394__auto___27129 + (1));
i__21394__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27121.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.mail_to27121.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27124){
var vec__27125 = p__27124;
var content = cljs.core.nth.call(null,vec__27125,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20285__auto__ = content;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27121.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27121.cljs$lang$applyTo = (function (seq27122){
var G__27123 = cljs.core.first.call(null,seq27122);
var seq27122__$1 = cljs.core.next.call(null,seq27122);
return sablono.core.mail_to27121.cljs$core$IFn$_invoke$arity$variadic(G__27123,seq27122__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27121);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27131 = (function sablono$core$unordered_list27131(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21068__auto__ = (function sablono$core$unordered_list27131_$_iter__27136(s__27137){
return (new cljs.core.LazySeq(null,(function (){
var s__27137__$1 = s__27137;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27137__$1);
if(temp__4657__auto__){
var s__27137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27137__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__27137__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__27139 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__27138 = (0);
while(true){
if((i__27138 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__27138);
cljs.core.chunk_append.call(null,b__27139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27140 = (i__27138 + (1));
i__27138 = G__27140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27139),sablono$core$unordered_list27131_$_iter__27136.call(null,cljs.core.chunk_rest.call(null,s__27137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27139),null);
}
} else {
var x = cljs.core.first.call(null,s__27137__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27131_$_iter__27136.call(null,cljs.core.rest.call(null,s__27137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27131);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27141 = (function sablono$core$ordered_list27141(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21068__auto__ = (function sablono$core$ordered_list27141_$_iter__27146(s__27147){
return (new cljs.core.LazySeq(null,(function (){
var s__27147__$1 = s__27147;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27147__$1);
if(temp__4657__auto__){
var s__27147__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27147__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__27147__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__27149 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__27148 = (0);
while(true){
if((i__27148 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__27148);
cljs.core.chunk_append.call(null,b__27149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27150 = (i__27148 + (1));
i__27148 = G__27150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27149),sablono$core$ordered_list27141_$_iter__27146.call(null,cljs.core.chunk_rest.call(null,s__27147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27149),null);
}
} else {
var x = cljs.core.first.call(null,s__27147__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27141_$_iter__27146.call(null,cljs.core.rest.call(null,s__27147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27141);
/**
 * Create an image element.
 */
sablono.core.image27151 = (function sablono$core$image27151(var_args){
var args27152 = [];
var len__21393__auto___27155 = arguments.length;
var i__21394__auto___27156 = (0);
while(true){
if((i__21394__auto___27156 < len__21393__auto___27155)){
args27152.push((arguments[i__21394__auto___27156]));

var G__27157 = (i__21394__auto___27156 + (1));
i__21394__auto___27156 = G__27157;
continue;
} else {
}
break;
}

var G__27154 = args27152.length;
switch (G__27154) {
case 1:
return sablono.core.image27151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27152.length)].join('')));

}
});

sablono.core.image27151.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27151.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27151.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27151);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27159_SHARP_,p2__27160_SHARP_){
return [cljs.core.str(p1__27159_SHARP_),cljs.core.str("["),cljs.core.str(p2__27160_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27161_SHARP_,p2__27162_SHARP_){
return [cljs.core.str(p1__27161_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27162_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27163 = (function sablono$core$color_field27163(var_args){
var args27164 = [];
var len__21393__auto___27231 = arguments.length;
var i__21394__auto___27232 = (0);
while(true){
if((i__21394__auto___27232 < len__21393__auto___27231)){
args27164.push((arguments[i__21394__auto___27232]));

var G__27233 = (i__21394__auto___27232 + (1));
i__21394__auto___27232 = G__27233;
continue;
} else {
}
break;
}

var G__27166 = args27164.length;
switch (G__27166) {
case 1:
return sablono.core.color_field27163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27164.length)].join('')));

}
});

sablono.core.color_field27163.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.color_field27163.call(null,name__27078__auto__,null);
});

sablono.core.color_field27163.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.color_field27163.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27163);

/**
 * Creates a date input field.
 */
sablono.core.date_field27167 = (function sablono$core$date_field27167(var_args){
var args27168 = [];
var len__21393__auto___27235 = arguments.length;
var i__21394__auto___27236 = (0);
while(true){
if((i__21394__auto___27236 < len__21393__auto___27235)){
args27168.push((arguments[i__21394__auto___27236]));

var G__27237 = (i__21394__auto___27236 + (1));
i__21394__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var G__27170 = args27168.length;
switch (G__27170) {
case 1:
return sablono.core.date_field27167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27168.length)].join('')));

}
});

sablono.core.date_field27167.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.date_field27167.call(null,name__27078__auto__,null);
});

sablono.core.date_field27167.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.date_field27167.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27167);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27171 = (function sablono$core$datetime_field27171(var_args){
var args27172 = [];
var len__21393__auto___27239 = arguments.length;
var i__21394__auto___27240 = (0);
while(true){
if((i__21394__auto___27240 < len__21393__auto___27239)){
args27172.push((arguments[i__21394__auto___27240]));

var G__27241 = (i__21394__auto___27240 + (1));
i__21394__auto___27240 = G__27241;
continue;
} else {
}
break;
}

var G__27174 = args27172.length;
switch (G__27174) {
case 1:
return sablono.core.datetime_field27171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27172.length)].join('')));

}
});

sablono.core.datetime_field27171.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.datetime_field27171.call(null,name__27078__auto__,null);
});

sablono.core.datetime_field27171.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.datetime_field27171.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27171);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27175 = (function sablono$core$datetime_local_field27175(var_args){
var args27176 = [];
var len__21393__auto___27243 = arguments.length;
var i__21394__auto___27244 = (0);
while(true){
if((i__21394__auto___27244 < len__21393__auto___27243)){
args27176.push((arguments[i__21394__auto___27244]));

var G__27245 = (i__21394__auto___27244 + (1));
i__21394__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var G__27178 = args27176.length;
switch (G__27178) {
case 1:
return sablono.core.datetime_local_field27175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27176.length)].join('')));

}
});

sablono.core.datetime_local_field27175.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.datetime_local_field27175.call(null,name__27078__auto__,null);
});

sablono.core.datetime_local_field27175.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.datetime_local_field27175.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27175);

/**
 * Creates a email input field.
 */
sablono.core.email_field27179 = (function sablono$core$email_field27179(var_args){
var args27180 = [];
var len__21393__auto___27247 = arguments.length;
var i__21394__auto___27248 = (0);
while(true){
if((i__21394__auto___27248 < len__21393__auto___27247)){
args27180.push((arguments[i__21394__auto___27248]));

var G__27249 = (i__21394__auto___27248 + (1));
i__21394__auto___27248 = G__27249;
continue;
} else {
}
break;
}

var G__27182 = args27180.length;
switch (G__27182) {
case 1:
return sablono.core.email_field27179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27180.length)].join('')));

}
});

sablono.core.email_field27179.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.email_field27179.call(null,name__27078__auto__,null);
});

sablono.core.email_field27179.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.email_field27179.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27179);

/**
 * Creates a file input field.
 */
sablono.core.file_field27183 = (function sablono$core$file_field27183(var_args){
var args27184 = [];
var len__21393__auto___27251 = arguments.length;
var i__21394__auto___27252 = (0);
while(true){
if((i__21394__auto___27252 < len__21393__auto___27251)){
args27184.push((arguments[i__21394__auto___27252]));

var G__27253 = (i__21394__auto___27252 + (1));
i__21394__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var G__27186 = args27184.length;
switch (G__27186) {
case 1:
return sablono.core.file_field27183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27184.length)].join('')));

}
});

sablono.core.file_field27183.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.file_field27183.call(null,name__27078__auto__,null);
});

sablono.core.file_field27183.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.file_field27183.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27183);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27187 = (function sablono$core$hidden_field27187(var_args){
var args27188 = [];
var len__21393__auto___27255 = arguments.length;
var i__21394__auto___27256 = (0);
while(true){
if((i__21394__auto___27256 < len__21393__auto___27255)){
args27188.push((arguments[i__21394__auto___27256]));

var G__27257 = (i__21394__auto___27256 + (1));
i__21394__auto___27256 = G__27257;
continue;
} else {
}
break;
}

var G__27190 = args27188.length;
switch (G__27190) {
case 1:
return sablono.core.hidden_field27187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27188.length)].join('')));

}
});

sablono.core.hidden_field27187.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.hidden_field27187.call(null,name__27078__auto__,null);
});

sablono.core.hidden_field27187.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.hidden_field27187.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27187);

/**
 * Creates a month input field.
 */
sablono.core.month_field27191 = (function sablono$core$month_field27191(var_args){
var args27192 = [];
var len__21393__auto___27259 = arguments.length;
var i__21394__auto___27260 = (0);
while(true){
if((i__21394__auto___27260 < len__21393__auto___27259)){
args27192.push((arguments[i__21394__auto___27260]));

var G__27261 = (i__21394__auto___27260 + (1));
i__21394__auto___27260 = G__27261;
continue;
} else {
}
break;
}

var G__27194 = args27192.length;
switch (G__27194) {
case 1:
return sablono.core.month_field27191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27192.length)].join('')));

}
});

sablono.core.month_field27191.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.month_field27191.call(null,name__27078__auto__,null);
});

sablono.core.month_field27191.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.month_field27191.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27191);

/**
 * Creates a number input field.
 */
sablono.core.number_field27195 = (function sablono$core$number_field27195(var_args){
var args27196 = [];
var len__21393__auto___27263 = arguments.length;
var i__21394__auto___27264 = (0);
while(true){
if((i__21394__auto___27264 < len__21393__auto___27263)){
args27196.push((arguments[i__21394__auto___27264]));

var G__27265 = (i__21394__auto___27264 + (1));
i__21394__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var G__27198 = args27196.length;
switch (G__27198) {
case 1:
return sablono.core.number_field27195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27196.length)].join('')));

}
});

sablono.core.number_field27195.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.number_field27195.call(null,name__27078__auto__,null);
});

sablono.core.number_field27195.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.number_field27195.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27195);

/**
 * Creates a password input field.
 */
sablono.core.password_field27199 = (function sablono$core$password_field27199(var_args){
var args27200 = [];
var len__21393__auto___27267 = arguments.length;
var i__21394__auto___27268 = (0);
while(true){
if((i__21394__auto___27268 < len__21393__auto___27267)){
args27200.push((arguments[i__21394__auto___27268]));

var G__27269 = (i__21394__auto___27268 + (1));
i__21394__auto___27268 = G__27269;
continue;
} else {
}
break;
}

var G__27202 = args27200.length;
switch (G__27202) {
case 1:
return sablono.core.password_field27199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27200.length)].join('')));

}
});

sablono.core.password_field27199.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.password_field27199.call(null,name__27078__auto__,null);
});

sablono.core.password_field27199.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.password_field27199.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27199);

/**
 * Creates a range input field.
 */
sablono.core.range_field27203 = (function sablono$core$range_field27203(var_args){
var args27204 = [];
var len__21393__auto___27271 = arguments.length;
var i__21394__auto___27272 = (0);
while(true){
if((i__21394__auto___27272 < len__21393__auto___27271)){
args27204.push((arguments[i__21394__auto___27272]));

var G__27273 = (i__21394__auto___27272 + (1));
i__21394__auto___27272 = G__27273;
continue;
} else {
}
break;
}

var G__27206 = args27204.length;
switch (G__27206) {
case 1:
return sablono.core.range_field27203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27204.length)].join('')));

}
});

sablono.core.range_field27203.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.range_field27203.call(null,name__27078__auto__,null);
});

sablono.core.range_field27203.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.range_field27203.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27203);

/**
 * Creates a search input field.
 */
sablono.core.search_field27207 = (function sablono$core$search_field27207(var_args){
var args27208 = [];
var len__21393__auto___27275 = arguments.length;
var i__21394__auto___27276 = (0);
while(true){
if((i__21394__auto___27276 < len__21393__auto___27275)){
args27208.push((arguments[i__21394__auto___27276]));

var G__27277 = (i__21394__auto___27276 + (1));
i__21394__auto___27276 = G__27277;
continue;
} else {
}
break;
}

var G__27210 = args27208.length;
switch (G__27210) {
case 1:
return sablono.core.search_field27207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27208.length)].join('')));

}
});

sablono.core.search_field27207.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.search_field27207.call(null,name__27078__auto__,null);
});

sablono.core.search_field27207.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.search_field27207.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27207);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27211 = (function sablono$core$tel_field27211(var_args){
var args27212 = [];
var len__21393__auto___27279 = arguments.length;
var i__21394__auto___27280 = (0);
while(true){
if((i__21394__auto___27280 < len__21393__auto___27279)){
args27212.push((arguments[i__21394__auto___27280]));

var G__27281 = (i__21394__auto___27280 + (1));
i__21394__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var G__27214 = args27212.length;
switch (G__27214) {
case 1:
return sablono.core.tel_field27211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27212.length)].join('')));

}
});

sablono.core.tel_field27211.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.tel_field27211.call(null,name__27078__auto__,null);
});

sablono.core.tel_field27211.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.tel_field27211.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27211);

/**
 * Creates a text input field.
 */
sablono.core.text_field27215 = (function sablono$core$text_field27215(var_args){
var args27216 = [];
var len__21393__auto___27283 = arguments.length;
var i__21394__auto___27284 = (0);
while(true){
if((i__21394__auto___27284 < len__21393__auto___27283)){
args27216.push((arguments[i__21394__auto___27284]));

var G__27285 = (i__21394__auto___27284 + (1));
i__21394__auto___27284 = G__27285;
continue;
} else {
}
break;
}

var G__27218 = args27216.length;
switch (G__27218) {
case 1:
return sablono.core.text_field27215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27216.length)].join('')));

}
});

sablono.core.text_field27215.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.text_field27215.call(null,name__27078__auto__,null);
});

sablono.core.text_field27215.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.text_field27215.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27215);

/**
 * Creates a time input field.
 */
sablono.core.time_field27219 = (function sablono$core$time_field27219(var_args){
var args27220 = [];
var len__21393__auto___27287 = arguments.length;
var i__21394__auto___27288 = (0);
while(true){
if((i__21394__auto___27288 < len__21393__auto___27287)){
args27220.push((arguments[i__21394__auto___27288]));

var G__27289 = (i__21394__auto___27288 + (1));
i__21394__auto___27288 = G__27289;
continue;
} else {
}
break;
}

var G__27222 = args27220.length;
switch (G__27222) {
case 1:
return sablono.core.time_field27219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27220.length)].join('')));

}
});

sablono.core.time_field27219.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.time_field27219.call(null,name__27078__auto__,null);
});

sablono.core.time_field27219.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.time_field27219.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27219);

/**
 * Creates a url input field.
 */
sablono.core.url_field27223 = (function sablono$core$url_field27223(var_args){
var args27224 = [];
var len__21393__auto___27291 = arguments.length;
var i__21394__auto___27292 = (0);
while(true){
if((i__21394__auto___27292 < len__21393__auto___27291)){
args27224.push((arguments[i__21394__auto___27292]));

var G__27293 = (i__21394__auto___27292 + (1));
i__21394__auto___27292 = G__27293;
continue;
} else {
}
break;
}

var G__27226 = args27224.length;
switch (G__27226) {
case 1:
return sablono.core.url_field27223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27224.length)].join('')));

}
});

sablono.core.url_field27223.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.url_field27223.call(null,name__27078__auto__,null);
});

sablono.core.url_field27223.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.url_field27223.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27223);

/**
 * Creates a week input field.
 */
sablono.core.week_field27227 = (function sablono$core$week_field27227(var_args){
var args27228 = [];
var len__21393__auto___27295 = arguments.length;
var i__21394__auto___27296 = (0);
while(true){
if((i__21394__auto___27296 < len__21393__auto___27295)){
args27228.push((arguments[i__21394__auto___27296]));

var G__27297 = (i__21394__auto___27296 + (1));
i__21394__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var G__27230 = args27228.length;
switch (G__27230) {
case 1:
return sablono.core.week_field27227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27228.length)].join('')));

}
});

sablono.core.week_field27227.cljs$core$IFn$_invoke$arity$1 = (function (name__27078__auto__){
return sablono.core.week_field27227.call(null,name__27078__auto__,null);
});

sablono.core.week_field27227.cljs$core$IFn$_invoke$arity$2 = (function (name__27078__auto__,value__27079__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27078__auto__,value__27079__auto__);
});

sablono.core.week_field27227.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27227);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27299 = (function sablono$core$check_box27299(var_args){
var args27300 = [];
var len__21393__auto___27303 = arguments.length;
var i__21394__auto___27304 = (0);
while(true){
if((i__21394__auto___27304 < len__21393__auto___27303)){
args27300.push((arguments[i__21394__auto___27304]));

var G__27305 = (i__21394__auto___27304 + (1));
i__21394__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var G__27302 = args27300.length;
switch (G__27302) {
case 1:
return sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27300.length)].join('')));

}
});

sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27299.call(null,name,null);
});

sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27299.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27299.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27299.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27299);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27307 = (function sablono$core$radio_button27307(var_args){
var args27308 = [];
var len__21393__auto___27311 = arguments.length;
var i__21394__auto___27312 = (0);
while(true){
if((i__21394__auto___27312 < len__21393__auto___27311)){
args27308.push((arguments[i__21394__auto___27312]));

var G__27313 = (i__21394__auto___27312 + (1));
i__21394__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var G__27310 = args27308.length;
switch (G__27310) {
case 1:
return sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27308.length)].join('')));

}
});

sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27307.call(null,group,null);
});

sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27307.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27307.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27307.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27307);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27315 = (function sablono$core$select_options27315(coll){
var iter__21068__auto__ = (function sablono$core$select_options27315_$_iter__27332(s__27333){
return (new cljs.core.LazySeq(null,(function (){
var s__27333__$1 = s__27333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27333__$1);
if(temp__4657__auto__){
var s__27333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27333__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__27333__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__27335 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__27334 = (0);
while(true){
if((i__27334 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__27334);
cljs.core.chunk_append.call(null,b__27335,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27342 = x;
var text = cljs.core.nth.call(null,vec__27342,(0),null);
var val = cljs.core.nth.call(null,vec__27342,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27342,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options27315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27348 = (i__27334 + (1));
i__27334 = G__27348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27335),sablono$core$select_options27315_$_iter__27332.call(null,cljs.core.chunk_rest.call(null,s__27333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27335),null);
}
} else {
var x = cljs.core.first.call(null,s__27333__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27345 = x;
var text = cljs.core.nth.call(null,vec__27345,(0),null);
var val = cljs.core.nth.call(null,vec__27345,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27345,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options27315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27315_$_iter__27332.call(null,cljs.core.rest.call(null,s__27333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27315);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27349 = (function sablono$core$drop_down27349(var_args){
var args27350 = [];
var len__21393__auto___27353 = arguments.length;
var i__21394__auto___27354 = (0);
while(true){
if((i__21394__auto___27354 < len__21393__auto___27353)){
args27350.push((arguments[i__21394__auto___27354]));

var G__27355 = (i__21394__auto___27354 + (1));
i__21394__auto___27354 = G__27355;
continue;
} else {
}
break;
}

var G__27352 = args27350.length;
switch (G__27352) {
case 2:
return sablono.core.drop_down27349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27349.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27350.length)].join('')));

}
});

sablono.core.drop_down27349.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27349.call(null,name,options,null);
});

sablono.core.drop_down27349.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27349.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27349);
/**
 * Creates a text area element.
 */
sablono.core.text_area27357 = (function sablono$core$text_area27357(var_args){
var args27358 = [];
var len__21393__auto___27361 = arguments.length;
var i__21394__auto___27362 = (0);
while(true){
if((i__21394__auto___27362 < len__21393__auto___27361)){
args27358.push((arguments[i__21394__auto___27362]));

var G__27363 = (i__21394__auto___27362 + (1));
i__21394__auto___27362 = G__27363;
continue;
} else {
}
break;
}

var G__27360 = args27358.length;
switch (G__27360) {
case 1:
return sablono.core.text_area27357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27358.length)].join('')));

}
});

sablono.core.text_area27357.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27357.call(null,name,null);
});

sablono.core.text_area27357.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area27357.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27357);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27365 = (function sablono$core$label27365(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27365);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27366 = (function sablono$core$submit_button27366(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27366);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27367 = (function sablono$core$reset_button27367(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27367);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27368 = (function sablono$core$form_to27368(var_args){
var args__21400__auto__ = [];
var len__21393__auto___27375 = arguments.length;
var i__21394__auto___27376 = (0);
while(true){
if((i__21394__auto___27376 < len__21393__auto___27375)){
args__21400__auto__.push((arguments[i__21394__auto___27376]));

var G__27377 = (i__21394__auto___27376 + (1));
i__21394__auto___27376 = G__27377;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27368.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.form_to27368.cljs$core$IFn$_invoke$arity$variadic = (function (p__27371,body){
var vec__27372 = p__27371;
var method = cljs.core.nth.call(null,vec__27372,(0),null);
var action = cljs.core.nth.call(null,vec__27372,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27368.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27368.cljs$lang$applyTo = (function (seq27369){
var G__27370 = cljs.core.first.call(null,seq27369);
var seq27369__$1 = cljs.core.next.call(null,seq27369);
return sablono.core.form_to27368.cljs$core$IFn$_invoke$arity$variadic(G__27370,seq27369__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27368);

//# sourceMappingURL=core.js.map?rel=1493780418523