// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22535 = [];
var len__21393__auto___22541 = arguments.length;
var i__21394__auto___22542 = (0);
while(true){
if((i__21394__auto___22542 < len__21393__auto___22541)){
args22535.push((arguments[i__21394__auto___22542]));

var G__22543 = (i__21394__auto___22542 + (1));
i__21394__auto___22542 = G__22543;
continue;
} else {
}
break;
}

var G__22537 = args22535.length;
switch (G__22537) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22535.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22538 = (function (f,blockable,meta22539){
this.f = f;
this.blockable = blockable;
this.meta22539 = meta22539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22540,meta22539__$1){
var self__ = this;
var _22540__$1 = this;
return (new cljs.core.async.t_cljs$core$async22538(self__.f,self__.blockable,meta22539__$1));
});

cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22540){
var self__ = this;
var _22540__$1 = this;
return self__.meta22539;
});

cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22539","meta22539",-462641248,null)], null);
});

cljs.core.async.t_cljs$core$async22538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22538";

cljs.core.async.t_cljs$core$async22538.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22538");
});

cljs.core.async.__GT_t_cljs$core$async22538 = (function cljs$core$async$__GT_t_cljs$core$async22538(f__$1,blockable__$1,meta22539){
return (new cljs.core.async.t_cljs$core$async22538(f__$1,blockable__$1,meta22539));
});

}

return (new cljs.core.async.t_cljs$core$async22538(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22547 = [];
var len__21393__auto___22550 = arguments.length;
var i__21394__auto___22551 = (0);
while(true){
if((i__21394__auto___22551 < len__21393__auto___22550)){
args22547.push((arguments[i__21394__auto___22551]));

var G__22552 = (i__21394__auto___22551 + (1));
i__21394__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var G__22549 = args22547.length;
switch (G__22549) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22547.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22554 = [];
var len__21393__auto___22557 = arguments.length;
var i__21394__auto___22558 = (0);
while(true){
if((i__21394__auto___22558 < len__21393__auto___22557)){
args22554.push((arguments[i__21394__auto___22558]));

var G__22559 = (i__21394__auto___22558 + (1));
i__21394__auto___22558 = G__22559;
continue;
} else {
}
break;
}

var G__22556 = args22554.length;
switch (G__22556) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22554.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22561 = [];
var len__21393__auto___22564 = arguments.length;
var i__21394__auto___22565 = (0);
while(true){
if((i__21394__auto___22565 < len__21393__auto___22564)){
args22561.push((arguments[i__21394__auto___22565]));

var G__22566 = (i__21394__auto___22565 + (1));
i__21394__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var G__22563 = args22561.length;
switch (G__22563) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22561.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22568);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22568,ret){
return (function (){
return fn1.call(null,val_22568);
});})(val_22568,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22569 = [];
var len__21393__auto___22572 = arguments.length;
var i__21394__auto___22573 = (0);
while(true){
if((i__21394__auto___22573 < len__21393__auto___22572)){
args22569.push((arguments[i__21394__auto___22573]));

var G__22574 = (i__21394__auto___22573 + (1));
i__21394__auto___22573 = G__22574;
continue;
} else {
}
break;
}

var G__22571 = args22569.length;
switch (G__22571) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22569.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21203__auto___22576 = n;
var x_22577 = (0);
while(true){
if((x_22577 < n__21203__auto___22576)){
(a[x_22577] = (0));

var G__22578 = (x_22577 + (1));
x_22577 = G__22578;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22579 = (i + (1));
i = G__22579;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22583 = (function (flag,meta22584){
this.flag = flag;
this.meta22584 = meta22584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22585,meta22584__$1){
var self__ = this;
var _22585__$1 = this;
return (new cljs.core.async.t_cljs$core$async22583(self__.flag,meta22584__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22585){
var self__ = this;
var _22585__$1 = this;
return self__.meta22584;
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22584","meta22584",1342113203,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22583";

cljs.core.async.t_cljs$core$async22583.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22583");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22583 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22583(flag__$1,meta22584){
return (new cljs.core.async.t_cljs$core$async22583(flag__$1,meta22584));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22583(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22589 = (function (flag,cb,meta22590){
this.flag = flag;
this.cb = cb;
this.meta22590 = meta22590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22591,meta22590__$1){
var self__ = this;
var _22591__$1 = this;
return (new cljs.core.async.t_cljs$core$async22589(self__.flag,self__.cb,meta22590__$1));
});

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22591){
var self__ = this;
var _22591__$1 = this;
return self__.meta22590;
});

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22590","meta22590",-1770764315,null)], null);
});

cljs.core.async.t_cljs$core$async22589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22589";

cljs.core.async.t_cljs$core$async22589.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async22589");
});

cljs.core.async.__GT_t_cljs$core$async22589 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22589(flag__$1,cb__$1,meta22590){
return (new cljs.core.async.t_cljs$core$async22589(flag__$1,cb__$1,meta22590));
});

}

return (new cljs.core.async.t_cljs$core$async22589(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22592_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22593_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22593_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20285__auto__ = wport;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22594 = (i + (1));
i = G__22594;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20285__auto__ = ret;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20273__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20273__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___22600 = arguments.length;
var i__21394__auto___22601 = (0);
while(true){
if((i__21394__auto___22601 < len__21393__auto___22600)){
args__21400__auto__.push((arguments[i__21394__auto___22601]));

var G__22602 = (i__21394__auto___22601 + (1));
i__21394__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22597){
var map__22598 = p__22597;
var map__22598__$1 = ((((!((map__22598 == null)))?((((map__22598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22598):map__22598);
var opts = map__22598__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22595){
var G__22596 = cljs.core.first.call(null,seq22595);
var seq22595__$1 = cljs.core.next.call(null,seq22595);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22596,seq22595__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22603 = [];
var len__21393__auto___22653 = arguments.length;
var i__21394__auto___22654 = (0);
while(true){
if((i__21394__auto___22654 < len__21393__auto___22653)){
args22603.push((arguments[i__21394__auto___22654]));

var G__22655 = (i__21394__auto___22654 + (1));
i__21394__auto___22654 = G__22655;
continue;
} else {
}
break;
}

var G__22605 = args22603.length;
switch (G__22605) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22603.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22490__auto___22657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___22657){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___22657){
return (function (state_22629){
var state_val_22630 = (state_22629[(1)]);
if((state_val_22630 === (7))){
var inst_22625 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
var statearr_22631_22658 = state_22629__$1;
(statearr_22631_22658[(2)] = inst_22625);

(statearr_22631_22658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (1))){
var state_22629__$1 = state_22629;
var statearr_22632_22659 = state_22629__$1;
(statearr_22632_22659[(2)] = null);

(statearr_22632_22659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (4))){
var inst_22608 = (state_22629[(7)]);
var inst_22608__$1 = (state_22629[(2)]);
var inst_22609 = (inst_22608__$1 == null);
var state_22629__$1 = (function (){var statearr_22633 = state_22629;
(statearr_22633[(7)] = inst_22608__$1);

return statearr_22633;
})();
if(cljs.core.truth_(inst_22609)){
var statearr_22634_22660 = state_22629__$1;
(statearr_22634_22660[(1)] = (5));

} else {
var statearr_22635_22661 = state_22629__$1;
(statearr_22635_22661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (13))){
var state_22629__$1 = state_22629;
var statearr_22636_22662 = state_22629__$1;
(statearr_22636_22662[(2)] = null);

(statearr_22636_22662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (6))){
var inst_22608 = (state_22629[(7)]);
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22629__$1,(11),to,inst_22608);
} else {
if((state_val_22630 === (3))){
var inst_22627 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22629__$1,inst_22627);
} else {
if((state_val_22630 === (12))){
var state_22629__$1 = state_22629;
var statearr_22637_22663 = state_22629__$1;
(statearr_22637_22663[(2)] = null);

(statearr_22637_22663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (2))){
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22629__$1,(4),from);
} else {
if((state_val_22630 === (11))){
var inst_22618 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
if(cljs.core.truth_(inst_22618)){
var statearr_22638_22664 = state_22629__$1;
(statearr_22638_22664[(1)] = (12));

} else {
var statearr_22639_22665 = state_22629__$1;
(statearr_22639_22665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (9))){
var state_22629__$1 = state_22629;
var statearr_22640_22666 = state_22629__$1;
(statearr_22640_22666[(2)] = null);

(statearr_22640_22666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (5))){
var state_22629__$1 = state_22629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22641_22667 = state_22629__$1;
(statearr_22641_22667[(1)] = (8));

} else {
var statearr_22642_22668 = state_22629__$1;
(statearr_22642_22668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (14))){
var inst_22623 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
var statearr_22643_22669 = state_22629__$1;
(statearr_22643_22669[(2)] = inst_22623);

(statearr_22643_22669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (10))){
var inst_22615 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
var statearr_22644_22670 = state_22629__$1;
(statearr_22644_22670[(2)] = inst_22615);

(statearr_22644_22670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (8))){
var inst_22612 = cljs.core.async.close_BANG_.call(null,to);
var state_22629__$1 = state_22629;
var statearr_22645_22671 = state_22629__$1;
(statearr_22645_22671[(2)] = inst_22612);

(statearr_22645_22671[(1)] = (10));


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
});})(c__22490__auto___22657))
;
return ((function (switch__22378__auto__,c__22490__auto___22657){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_22649 = [null,null,null,null,null,null,null,null];
(statearr_22649[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_22649[(1)] = (1));

return statearr_22649;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_22629){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_22629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e22650){if((e22650 instanceof Object)){
var ex__22382__auto__ = e22650;
var statearr_22651_22672 = state_22629;
(statearr_22651_22672[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22673 = state_22629;
state_22629 = G__22673;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_22629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_22629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___22657))
})();
var state__22492__auto__ = (function (){var statearr_22652 = f__22491__auto__.call(null);
(statearr_22652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___22657);

return statearr_22652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___22657))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22861){
var vec__22862 = p__22861;
var v = cljs.core.nth.call(null,vec__22862,(0),null);
var p = cljs.core.nth.call(null,vec__22862,(1),null);
var job = vec__22862;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22490__auto___23048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results){
return (function (state_22869){
var state_val_22870 = (state_22869[(1)]);
if((state_val_22870 === (1))){
var state_22869__$1 = state_22869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22869__$1,(2),res,v);
} else {
if((state_val_22870 === (2))){
var inst_22866 = (state_22869[(2)]);
var inst_22867 = cljs.core.async.close_BANG_.call(null,res);
var state_22869__$1 = (function (){var statearr_22871 = state_22869;
(statearr_22871[(7)] = inst_22866);

return statearr_22871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22869__$1,inst_22867);
} else {
return null;
}
}
});})(c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results))
;
return ((function (switch__22378__auto__,c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_22875 = [null,null,null,null,null,null,null,null];
(statearr_22875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__);

(statearr_22875[(1)] = (1));

return statearr_22875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1 = (function (state_22869){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_22869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e22876){if((e22876 instanceof Object)){
var ex__22382__auto__ = e22876;
var statearr_22877_23049 = state_22869;
(statearr_22877_23049[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23050 = state_22869;
state_22869 = G__23050;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = function(state_22869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1.call(this,state_22869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results))
})();
var state__22492__auto__ = (function (){var statearr_22878 = f__22491__auto__.call(null);
(statearr_22878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23048);

return statearr_22878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___23048,res,vec__22862,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22879){
var vec__22880 = p__22879;
var v = cljs.core.nth.call(null,vec__22880,(0),null);
var p = cljs.core.nth.call(null,vec__22880,(1),null);
var job = vec__22880;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21203__auto___23051 = n;
var __23052 = (0);
while(true){
if((__23052 < n__21203__auto___23051)){
var G__22883_23053 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22883_23053) {
case "compute":
var c__22490__auto___23055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23052,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (__23052,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function (state_22896){
var state_val_22897 = (state_22896[(1)]);
if((state_val_22897 === (1))){
var state_22896__$1 = state_22896;
var statearr_22898_23056 = state_22896__$1;
(statearr_22898_23056[(2)] = null);

(statearr_22898_23056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22897 === (2))){
var state_22896__$1 = state_22896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22896__$1,(4),jobs);
} else {
if((state_val_22897 === (3))){
var inst_22894 = (state_22896[(2)]);
var state_22896__$1 = state_22896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22896__$1,inst_22894);
} else {
if((state_val_22897 === (4))){
var inst_22886 = (state_22896[(2)]);
var inst_22887 = process.call(null,inst_22886);
var state_22896__$1 = state_22896;
if(cljs.core.truth_(inst_22887)){
var statearr_22899_23057 = state_22896__$1;
(statearr_22899_23057[(1)] = (5));

} else {
var statearr_22900_23058 = state_22896__$1;
(statearr_22900_23058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22897 === (5))){
var state_22896__$1 = state_22896;
var statearr_22901_23059 = state_22896__$1;
(statearr_22901_23059[(2)] = null);

(statearr_22901_23059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22897 === (6))){
var state_22896__$1 = state_22896;
var statearr_22902_23060 = state_22896__$1;
(statearr_22902_23060[(2)] = null);

(statearr_22902_23060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22897 === (7))){
var inst_22892 = (state_22896[(2)]);
var state_22896__$1 = state_22896;
var statearr_22903_23061 = state_22896__$1;
(statearr_22903_23061[(2)] = inst_22892);

(statearr_22903_23061[(1)] = (3));


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
});})(__23052,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
;
return ((function (__23052,switch__22378__auto__,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_22907 = [null,null,null,null,null,null,null];
(statearr_22907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__);

(statearr_22907[(1)] = (1));

return statearr_22907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1 = (function (state_22896){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_22896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e22908){if((e22908 instanceof Object)){
var ex__22382__auto__ = e22908;
var statearr_22909_23062 = state_22896;
(statearr_22909_23062[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23063 = state_22896;
state_22896 = G__23063;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = function(state_22896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1.call(this,state_22896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__;
})()
;})(__23052,switch__22378__auto__,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
})();
var state__22492__auto__ = (function (){var statearr_22910 = f__22491__auto__.call(null);
(statearr_22910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23055);

return statearr_22910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(__23052,c__22490__auto___23055,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
);


break;
case "async":
var c__22490__auto___23064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23052,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (__23052,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function (state_22923){
var state_val_22924 = (state_22923[(1)]);
if((state_val_22924 === (1))){
var state_22923__$1 = state_22923;
var statearr_22925_23065 = state_22923__$1;
(statearr_22925_23065[(2)] = null);

(statearr_22925_23065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22924 === (2))){
var state_22923__$1 = state_22923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22923__$1,(4),jobs);
} else {
if((state_val_22924 === (3))){
var inst_22921 = (state_22923[(2)]);
var state_22923__$1 = state_22923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22923__$1,inst_22921);
} else {
if((state_val_22924 === (4))){
var inst_22913 = (state_22923[(2)]);
var inst_22914 = async.call(null,inst_22913);
var state_22923__$1 = state_22923;
if(cljs.core.truth_(inst_22914)){
var statearr_22926_23066 = state_22923__$1;
(statearr_22926_23066[(1)] = (5));

} else {
var statearr_22927_23067 = state_22923__$1;
(statearr_22927_23067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22924 === (5))){
var state_22923__$1 = state_22923;
var statearr_22928_23068 = state_22923__$1;
(statearr_22928_23068[(2)] = null);

(statearr_22928_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22924 === (6))){
var state_22923__$1 = state_22923;
var statearr_22929_23069 = state_22923__$1;
(statearr_22929_23069[(2)] = null);

(statearr_22929_23069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22924 === (7))){
var inst_22919 = (state_22923[(2)]);
var state_22923__$1 = state_22923;
var statearr_22930_23070 = state_22923__$1;
(statearr_22930_23070[(2)] = inst_22919);

(statearr_22930_23070[(1)] = (3));


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
});})(__23052,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
;
return ((function (__23052,switch__22378__auto__,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_22934 = [null,null,null,null,null,null,null];
(statearr_22934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__);

(statearr_22934[(1)] = (1));

return statearr_22934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1 = (function (state_22923){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_22923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e22935){if((e22935 instanceof Object)){
var ex__22382__auto__ = e22935;
var statearr_22936_23071 = state_22923;
(statearr_22936_23071[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23072 = state_22923;
state_22923 = G__23072;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = function(state_22923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1.call(this,state_22923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__;
})()
;})(__23052,switch__22378__auto__,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
})();
var state__22492__auto__ = (function (){var statearr_22937 = f__22491__auto__.call(null);
(statearr_22937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23064);

return statearr_22937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(__23052,c__22490__auto___23064,G__22883_23053,n__21203__auto___23051,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23073 = (__23052 + (1));
__23052 = G__23073;
continue;
} else {
}
break;
}

var c__22490__auto___23074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___23074,jobs,results,process,async){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___23074,jobs,results,process,async){
return (function (state_22959){
var state_val_22960 = (state_22959[(1)]);
if((state_val_22960 === (1))){
var state_22959__$1 = state_22959;
var statearr_22961_23075 = state_22959__$1;
(statearr_22961_23075[(2)] = null);

(statearr_22961_23075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (2))){
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22959__$1,(4),from);
} else {
if((state_val_22960 === (3))){
var inst_22957 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22959__$1,inst_22957);
} else {
if((state_val_22960 === (4))){
var inst_22940 = (state_22959[(7)]);
var inst_22940__$1 = (state_22959[(2)]);
var inst_22941 = (inst_22940__$1 == null);
var state_22959__$1 = (function (){var statearr_22962 = state_22959;
(statearr_22962[(7)] = inst_22940__$1);

return statearr_22962;
})();
if(cljs.core.truth_(inst_22941)){
var statearr_22963_23076 = state_22959__$1;
(statearr_22963_23076[(1)] = (5));

} else {
var statearr_22964_23077 = state_22959__$1;
(statearr_22964_23077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (5))){
var inst_22943 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22959__$1 = state_22959;
var statearr_22965_23078 = state_22959__$1;
(statearr_22965_23078[(2)] = inst_22943);

(statearr_22965_23078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (6))){
var inst_22945 = (state_22959[(8)]);
var inst_22940 = (state_22959[(7)]);
var inst_22945__$1 = cljs.core.async.chan.call(null,(1));
var inst_22946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22947 = [inst_22940,inst_22945__$1];
var inst_22948 = (new cljs.core.PersistentVector(null,2,(5),inst_22946,inst_22947,null));
var state_22959__$1 = (function (){var statearr_22966 = state_22959;
(statearr_22966[(8)] = inst_22945__$1);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22959__$1,(8),jobs,inst_22948);
} else {
if((state_val_22960 === (7))){
var inst_22955 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22967_23079 = state_22959__$1;
(statearr_22967_23079[(2)] = inst_22955);

(statearr_22967_23079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (8))){
var inst_22945 = (state_22959[(8)]);
var inst_22950 = (state_22959[(2)]);
var state_22959__$1 = (function (){var statearr_22968 = state_22959;
(statearr_22968[(9)] = inst_22950);

return statearr_22968;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22959__$1,(9),results,inst_22945);
} else {
if((state_val_22960 === (9))){
var inst_22952 = (state_22959[(2)]);
var state_22959__$1 = (function (){var statearr_22969 = state_22959;
(statearr_22969[(10)] = inst_22952);

return statearr_22969;
})();
var statearr_22970_23080 = state_22959__$1;
(statearr_22970_23080[(2)] = null);

(statearr_22970_23080[(1)] = (2));


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
});})(c__22490__auto___23074,jobs,results,process,async))
;
return ((function (switch__22378__auto__,c__22490__auto___23074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_22974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__);

(statearr_22974[(1)] = (1));

return statearr_22974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1 = (function (state_22959){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_22959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e22975){if((e22975 instanceof Object)){
var ex__22382__auto__ = e22975;
var statearr_22976_23081 = state_22959;
(statearr_22976_23081[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23082 = state_22959;
state_22959 = G__23082;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = function(state_22959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1.call(this,state_22959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___23074,jobs,results,process,async))
})();
var state__22492__auto__ = (function (){var statearr_22977 = f__22491__auto__.call(null);
(statearr_22977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23074);

return statearr_22977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___23074,jobs,results,process,async))
);


var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,jobs,results,process,async){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,jobs,results,process,async){
return (function (state_23015){
var state_val_23016 = (state_23015[(1)]);
if((state_val_23016 === (7))){
var inst_23011 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
var statearr_23017_23083 = state_23015__$1;
(statearr_23017_23083[(2)] = inst_23011);

(statearr_23017_23083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (20))){
var state_23015__$1 = state_23015;
var statearr_23018_23084 = state_23015__$1;
(statearr_23018_23084[(2)] = null);

(statearr_23018_23084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (1))){
var state_23015__$1 = state_23015;
var statearr_23019_23085 = state_23015__$1;
(statearr_23019_23085[(2)] = null);

(statearr_23019_23085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (4))){
var inst_22980 = (state_23015[(7)]);
var inst_22980__$1 = (state_23015[(2)]);
var inst_22981 = (inst_22980__$1 == null);
var state_23015__$1 = (function (){var statearr_23020 = state_23015;
(statearr_23020[(7)] = inst_22980__$1);

return statearr_23020;
})();
if(cljs.core.truth_(inst_22981)){
var statearr_23021_23086 = state_23015__$1;
(statearr_23021_23086[(1)] = (5));

} else {
var statearr_23022_23087 = state_23015__$1;
(statearr_23022_23087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (15))){
var inst_22993 = (state_23015[(8)]);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23015__$1,(18),to,inst_22993);
} else {
if((state_val_23016 === (21))){
var inst_23006 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
var statearr_23023_23088 = state_23015__$1;
(statearr_23023_23088[(2)] = inst_23006);

(statearr_23023_23088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (13))){
var inst_23008 = (state_23015[(2)]);
var state_23015__$1 = (function (){var statearr_23024 = state_23015;
(statearr_23024[(9)] = inst_23008);

return statearr_23024;
})();
var statearr_23025_23089 = state_23015__$1;
(statearr_23025_23089[(2)] = null);

(statearr_23025_23089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (6))){
var inst_22980 = (state_23015[(7)]);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23015__$1,(11),inst_22980);
} else {
if((state_val_23016 === (17))){
var inst_23001 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
if(cljs.core.truth_(inst_23001)){
var statearr_23026_23090 = state_23015__$1;
(statearr_23026_23090[(1)] = (19));

} else {
var statearr_23027_23091 = state_23015__$1;
(statearr_23027_23091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (3))){
var inst_23013 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23015__$1,inst_23013);
} else {
if((state_val_23016 === (12))){
var inst_22990 = (state_23015[(10)]);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23015__$1,(14),inst_22990);
} else {
if((state_val_23016 === (2))){
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23015__$1,(4),results);
} else {
if((state_val_23016 === (19))){
var state_23015__$1 = state_23015;
var statearr_23028_23092 = state_23015__$1;
(statearr_23028_23092[(2)] = null);

(statearr_23028_23092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (11))){
var inst_22990 = (state_23015[(2)]);
var state_23015__$1 = (function (){var statearr_23029 = state_23015;
(statearr_23029[(10)] = inst_22990);

return statearr_23029;
})();
var statearr_23030_23093 = state_23015__$1;
(statearr_23030_23093[(2)] = null);

(statearr_23030_23093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (9))){
var state_23015__$1 = state_23015;
var statearr_23031_23094 = state_23015__$1;
(statearr_23031_23094[(2)] = null);

(statearr_23031_23094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (5))){
var state_23015__$1 = state_23015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23032_23095 = state_23015__$1;
(statearr_23032_23095[(1)] = (8));

} else {
var statearr_23033_23096 = state_23015__$1;
(statearr_23033_23096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (14))){
var inst_22995 = (state_23015[(11)]);
var inst_22993 = (state_23015[(8)]);
var inst_22993__$1 = (state_23015[(2)]);
var inst_22994 = (inst_22993__$1 == null);
var inst_22995__$1 = cljs.core.not.call(null,inst_22994);
var state_23015__$1 = (function (){var statearr_23034 = state_23015;
(statearr_23034[(11)] = inst_22995__$1);

(statearr_23034[(8)] = inst_22993__$1);

return statearr_23034;
})();
if(inst_22995__$1){
var statearr_23035_23097 = state_23015__$1;
(statearr_23035_23097[(1)] = (15));

} else {
var statearr_23036_23098 = state_23015__$1;
(statearr_23036_23098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (16))){
var inst_22995 = (state_23015[(11)]);
var state_23015__$1 = state_23015;
var statearr_23037_23099 = state_23015__$1;
(statearr_23037_23099[(2)] = inst_22995);

(statearr_23037_23099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (10))){
var inst_22987 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
var statearr_23038_23100 = state_23015__$1;
(statearr_23038_23100[(2)] = inst_22987);

(statearr_23038_23100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (18))){
var inst_22998 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
var statearr_23039_23101 = state_23015__$1;
(statearr_23039_23101[(2)] = inst_22998);

(statearr_23039_23101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (8))){
var inst_22984 = cljs.core.async.close_BANG_.call(null,to);
var state_23015__$1 = state_23015;
var statearr_23040_23102 = state_23015__$1;
(statearr_23040_23102[(2)] = inst_22984);

(statearr_23040_23102[(1)] = (10));


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
});})(c__22490__auto__,jobs,results,process,async))
;
return ((function (switch__22378__auto__,c__22490__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_23044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__);

(statearr_23044[(1)] = (1));

return statearr_23044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1 = (function (state_23015){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23045){if((e23045 instanceof Object)){
var ex__22382__auto__ = e23045;
var statearr_23046_23103 = state_23015;
(statearr_23046_23103[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23104 = state_23015;
state_23015 = G__23104;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__ = function(state_23015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1.call(this,state_23015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,jobs,results,process,async))
})();
var state__22492__auto__ = (function (){var statearr_23047 = f__22491__auto__.call(null);
(statearr_23047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_23047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,jobs,results,process,async))
);

return c__22490__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23105 = [];
var len__21393__auto___23108 = arguments.length;
var i__21394__auto___23109 = (0);
while(true){
if((i__21394__auto___23109 < len__21393__auto___23108)){
args23105.push((arguments[i__21394__auto___23109]));

var G__23110 = (i__21394__auto___23109 + (1));
i__21394__auto___23109 = G__23110;
continue;
} else {
}
break;
}

var G__23107 = args23105.length;
switch (G__23107) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23105.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23112 = [];
var len__21393__auto___23115 = arguments.length;
var i__21394__auto___23116 = (0);
while(true){
if((i__21394__auto___23116 < len__21393__auto___23115)){
args23112.push((arguments[i__21394__auto___23116]));

var G__23117 = (i__21394__auto___23116 + (1));
i__21394__auto___23116 = G__23117;
continue;
} else {
}
break;
}

var G__23114 = args23112.length;
switch (G__23114) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23112.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23119 = [];
var len__21393__auto___23172 = arguments.length;
var i__21394__auto___23173 = (0);
while(true){
if((i__21394__auto___23173 < len__21393__auto___23172)){
args23119.push((arguments[i__21394__auto___23173]));

var G__23174 = (i__21394__auto___23173 + (1));
i__21394__auto___23173 = G__23174;
continue;
} else {
}
break;
}

var G__23121 = args23119.length;
switch (G__23121) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23119.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22490__auto___23176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___23176,tc,fc){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___23176,tc,fc){
return (function (state_23147){
var state_val_23148 = (state_23147[(1)]);
if((state_val_23148 === (7))){
var inst_23143 = (state_23147[(2)]);
var state_23147__$1 = state_23147;
var statearr_23149_23177 = state_23147__$1;
(statearr_23149_23177[(2)] = inst_23143);

(statearr_23149_23177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (1))){
var state_23147__$1 = state_23147;
var statearr_23150_23178 = state_23147__$1;
(statearr_23150_23178[(2)] = null);

(statearr_23150_23178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (4))){
var inst_23124 = (state_23147[(7)]);
var inst_23124__$1 = (state_23147[(2)]);
var inst_23125 = (inst_23124__$1 == null);
var state_23147__$1 = (function (){var statearr_23151 = state_23147;
(statearr_23151[(7)] = inst_23124__$1);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23125)){
var statearr_23152_23179 = state_23147__$1;
(statearr_23152_23179[(1)] = (5));

} else {
var statearr_23153_23180 = state_23147__$1;
(statearr_23153_23180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (13))){
var state_23147__$1 = state_23147;
var statearr_23154_23181 = state_23147__$1;
(statearr_23154_23181[(2)] = null);

(statearr_23154_23181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (6))){
var inst_23124 = (state_23147[(7)]);
var inst_23130 = p.call(null,inst_23124);
var state_23147__$1 = state_23147;
if(cljs.core.truth_(inst_23130)){
var statearr_23155_23182 = state_23147__$1;
(statearr_23155_23182[(1)] = (9));

} else {
var statearr_23156_23183 = state_23147__$1;
(statearr_23156_23183[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (3))){
var inst_23145 = (state_23147[(2)]);
var state_23147__$1 = state_23147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23147__$1,inst_23145);
} else {
if((state_val_23148 === (12))){
var state_23147__$1 = state_23147;
var statearr_23157_23184 = state_23147__$1;
(statearr_23157_23184[(2)] = null);

(statearr_23157_23184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (2))){
var state_23147__$1 = state_23147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23147__$1,(4),ch);
} else {
if((state_val_23148 === (11))){
var inst_23124 = (state_23147[(7)]);
var inst_23134 = (state_23147[(2)]);
var state_23147__$1 = state_23147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23147__$1,(8),inst_23134,inst_23124);
} else {
if((state_val_23148 === (9))){
var state_23147__$1 = state_23147;
var statearr_23158_23185 = state_23147__$1;
(statearr_23158_23185[(2)] = tc);

(statearr_23158_23185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (5))){
var inst_23127 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23128 = cljs.core.async.close_BANG_.call(null,fc);
var state_23147__$1 = (function (){var statearr_23159 = state_23147;
(statearr_23159[(8)] = inst_23127);

return statearr_23159;
})();
var statearr_23160_23186 = state_23147__$1;
(statearr_23160_23186[(2)] = inst_23128);

(statearr_23160_23186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (14))){
var inst_23141 = (state_23147[(2)]);
var state_23147__$1 = state_23147;
var statearr_23161_23187 = state_23147__$1;
(statearr_23161_23187[(2)] = inst_23141);

(statearr_23161_23187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (10))){
var state_23147__$1 = state_23147;
var statearr_23162_23188 = state_23147__$1;
(statearr_23162_23188[(2)] = fc);

(statearr_23162_23188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23148 === (8))){
var inst_23136 = (state_23147[(2)]);
var state_23147__$1 = state_23147;
if(cljs.core.truth_(inst_23136)){
var statearr_23163_23189 = state_23147__$1;
(statearr_23163_23189[(1)] = (12));

} else {
var statearr_23164_23190 = state_23147__$1;
(statearr_23164_23190[(1)] = (13));

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
});})(c__22490__auto___23176,tc,fc))
;
return ((function (switch__22378__auto__,c__22490__auto___23176,tc,fc){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_23168 = [null,null,null,null,null,null,null,null,null];
(statearr_23168[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_23168[(1)] = (1));

return statearr_23168;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_23147){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23169){if((e23169 instanceof Object)){
var ex__22382__auto__ = e23169;
var statearr_23170_23191 = state_23147;
(statearr_23170_23191[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23192 = state_23147;
state_23147 = G__23192;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_23147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_23147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___23176,tc,fc))
})();
var state__22492__auto__ = (function (){var statearr_23171 = f__22491__auto__.call(null);
(statearr_23171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23176);

return statearr_23171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___23176,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_23256){
var state_val_23257 = (state_23256[(1)]);
if((state_val_23257 === (7))){
var inst_23252 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23258_23279 = state_23256__$1;
(statearr_23258_23279[(2)] = inst_23252);

(statearr_23258_23279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (1))){
var inst_23236 = init;
var state_23256__$1 = (function (){var statearr_23259 = state_23256;
(statearr_23259[(7)] = inst_23236);

return statearr_23259;
})();
var statearr_23260_23280 = state_23256__$1;
(statearr_23260_23280[(2)] = null);

(statearr_23260_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (4))){
var inst_23239 = (state_23256[(8)]);
var inst_23239__$1 = (state_23256[(2)]);
var inst_23240 = (inst_23239__$1 == null);
var state_23256__$1 = (function (){var statearr_23261 = state_23256;
(statearr_23261[(8)] = inst_23239__$1);

return statearr_23261;
})();
if(cljs.core.truth_(inst_23240)){
var statearr_23262_23281 = state_23256__$1;
(statearr_23262_23281[(1)] = (5));

} else {
var statearr_23263_23282 = state_23256__$1;
(statearr_23263_23282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (6))){
var inst_23236 = (state_23256[(7)]);
var inst_23239 = (state_23256[(8)]);
var inst_23243 = (state_23256[(9)]);
var inst_23243__$1 = f.call(null,inst_23236,inst_23239);
var inst_23244 = cljs.core.reduced_QMARK_.call(null,inst_23243__$1);
var state_23256__$1 = (function (){var statearr_23264 = state_23256;
(statearr_23264[(9)] = inst_23243__$1);

return statearr_23264;
})();
if(inst_23244){
var statearr_23265_23283 = state_23256__$1;
(statearr_23265_23283[(1)] = (8));

} else {
var statearr_23266_23284 = state_23256__$1;
(statearr_23266_23284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (3))){
var inst_23254 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23256__$1,inst_23254);
} else {
if((state_val_23257 === (2))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(4),ch);
} else {
if((state_val_23257 === (9))){
var inst_23243 = (state_23256[(9)]);
var inst_23236 = inst_23243;
var state_23256__$1 = (function (){var statearr_23267 = state_23256;
(statearr_23267[(7)] = inst_23236);

return statearr_23267;
})();
var statearr_23268_23285 = state_23256__$1;
(statearr_23268_23285[(2)] = null);

(statearr_23268_23285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (5))){
var inst_23236 = (state_23256[(7)]);
var state_23256__$1 = state_23256;
var statearr_23269_23286 = state_23256__$1;
(statearr_23269_23286[(2)] = inst_23236);

(statearr_23269_23286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (10))){
var inst_23250 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23270_23287 = state_23256__$1;
(statearr_23270_23287[(2)] = inst_23250);

(statearr_23270_23287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (8))){
var inst_23243 = (state_23256[(9)]);
var inst_23246 = cljs.core.deref.call(null,inst_23243);
var state_23256__$1 = state_23256;
var statearr_23271_23288 = state_23256__$1;
(statearr_23271_23288[(2)] = inst_23246);

(statearr_23271_23288[(1)] = (10));


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
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22379__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22379__auto____0 = (function (){
var statearr_23275 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23275[(0)] = cljs$core$async$reduce_$_state_machine__22379__auto__);

(statearr_23275[(1)] = (1));

return statearr_23275;
});
var cljs$core$async$reduce_$_state_machine__22379__auto____1 = (function (state_23256){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23276){if((e23276 instanceof Object)){
var ex__22382__auto__ = e23276;
var statearr_23277_23289 = state_23256;
(statearr_23277_23289[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23290 = state_23256;
state_23256 = G__23290;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22379__auto__ = function(state_23256){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22379__auto____1.call(this,state_23256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22379__auto____0;
cljs$core$async$reduce_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22379__auto____1;
return cljs$core$async$reduce_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_23278 = f__22491__auto__.call(null);
(statearr_23278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_23278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,f__$1){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,f__$1){
return (function (state_23310){
var state_val_23311 = (state_23310[(1)]);
if((state_val_23311 === (1))){
var inst_23305 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23310__$1,(2),inst_23305);
} else {
if((state_val_23311 === (2))){
var inst_23307 = (state_23310[(2)]);
var inst_23308 = f__$1.call(null,inst_23307);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23310__$1,inst_23308);
} else {
return null;
}
}
});})(c__22490__auto__,f__$1))
;
return ((function (switch__22378__auto__,c__22490__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22379__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22379__auto____0 = (function (){
var statearr_23315 = [null,null,null,null,null,null,null];
(statearr_23315[(0)] = cljs$core$async$transduce_$_state_machine__22379__auto__);

(statearr_23315[(1)] = (1));

return statearr_23315;
});
var cljs$core$async$transduce_$_state_machine__22379__auto____1 = (function (state_23310){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23316){if((e23316 instanceof Object)){
var ex__22382__auto__ = e23316;
var statearr_23317_23319 = state_23310;
(statearr_23317_23319[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23320 = state_23310;
state_23310 = G__23320;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22379__auto__ = function(state_23310){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22379__auto____1.call(this,state_23310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22379__auto____0;
cljs$core$async$transduce_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22379__auto____1;
return cljs$core$async$transduce_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,f__$1))
})();
var state__22492__auto__ = (function (){var statearr_23318 = f__22491__auto__.call(null);
(statearr_23318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_23318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,f__$1))
);

return c__22490__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23321 = [];
var len__21393__auto___23373 = arguments.length;
var i__21394__auto___23374 = (0);
while(true){
if((i__21394__auto___23374 < len__21393__auto___23373)){
args23321.push((arguments[i__21394__auto___23374]));

var G__23375 = (i__21394__auto___23374 + (1));
i__21394__auto___23374 = G__23375;
continue;
} else {
}
break;
}

var G__23323 = args23321.length;
switch (G__23323) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23321.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_23348){
var state_val_23349 = (state_23348[(1)]);
if((state_val_23349 === (7))){
var inst_23330 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
var statearr_23350_23377 = state_23348__$1;
(statearr_23350_23377[(2)] = inst_23330);

(statearr_23350_23377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (1))){
var inst_23324 = cljs.core.seq.call(null,coll);
var inst_23325 = inst_23324;
var state_23348__$1 = (function (){var statearr_23351 = state_23348;
(statearr_23351[(7)] = inst_23325);

return statearr_23351;
})();
var statearr_23352_23378 = state_23348__$1;
(statearr_23352_23378[(2)] = null);

(statearr_23352_23378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (4))){
var inst_23325 = (state_23348[(7)]);
var inst_23328 = cljs.core.first.call(null,inst_23325);
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23348__$1,(7),ch,inst_23328);
} else {
if((state_val_23349 === (13))){
var inst_23342 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
var statearr_23353_23379 = state_23348__$1;
(statearr_23353_23379[(2)] = inst_23342);

(statearr_23353_23379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (6))){
var inst_23333 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
if(cljs.core.truth_(inst_23333)){
var statearr_23354_23380 = state_23348__$1;
(statearr_23354_23380[(1)] = (8));

} else {
var statearr_23355_23381 = state_23348__$1;
(statearr_23355_23381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (3))){
var inst_23346 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23348__$1,inst_23346);
} else {
if((state_val_23349 === (12))){
var state_23348__$1 = state_23348;
var statearr_23356_23382 = state_23348__$1;
(statearr_23356_23382[(2)] = null);

(statearr_23356_23382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (2))){
var inst_23325 = (state_23348[(7)]);
var state_23348__$1 = state_23348;
if(cljs.core.truth_(inst_23325)){
var statearr_23357_23383 = state_23348__$1;
(statearr_23357_23383[(1)] = (4));

} else {
var statearr_23358_23384 = state_23348__$1;
(statearr_23358_23384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (11))){
var inst_23339 = cljs.core.async.close_BANG_.call(null,ch);
var state_23348__$1 = state_23348;
var statearr_23359_23385 = state_23348__$1;
(statearr_23359_23385[(2)] = inst_23339);

(statearr_23359_23385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (9))){
var state_23348__$1 = state_23348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23360_23386 = state_23348__$1;
(statearr_23360_23386[(1)] = (11));

} else {
var statearr_23361_23387 = state_23348__$1;
(statearr_23361_23387[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (5))){
var inst_23325 = (state_23348[(7)]);
var state_23348__$1 = state_23348;
var statearr_23362_23388 = state_23348__$1;
(statearr_23362_23388[(2)] = inst_23325);

(statearr_23362_23388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (10))){
var inst_23344 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
var statearr_23363_23389 = state_23348__$1;
(statearr_23363_23389[(2)] = inst_23344);

(statearr_23363_23389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (8))){
var inst_23325 = (state_23348[(7)]);
var inst_23335 = cljs.core.next.call(null,inst_23325);
var inst_23325__$1 = inst_23335;
var state_23348__$1 = (function (){var statearr_23364 = state_23348;
(statearr_23364[(7)] = inst_23325__$1);

return statearr_23364;
})();
var statearr_23365_23390 = state_23348__$1;
(statearr_23365_23390[(2)] = null);

(statearr_23365_23390[(1)] = (2));


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
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_23369 = [null,null,null,null,null,null,null,null];
(statearr_23369[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_23369[(1)] = (1));

return statearr_23369;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_23348){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23370){if((e23370 instanceof Object)){
var ex__22382__auto__ = e23370;
var statearr_23371_23391 = state_23348;
(statearr_23371_23391[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23392 = state_23348;
state_23348 = G__23392;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_23348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_23348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_23372 = f__22491__auto__.call(null);
(statearr_23372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_23372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20948__auto__ = (((_ == null))?null:_);
var m__20949__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,_);
} else {
var m__20949__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20949__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m);
} else {
var m__20949__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23618 = (function (ch,cs,meta23619){
this.ch = ch;
this.cs = cs;
this.meta23619 = meta23619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23620,meta23619__$1){
var self__ = this;
var _23620__$1 = this;
return (new cljs.core.async.t_cljs$core$async23618(self__.ch,self__.cs,meta23619__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23620){
var self__ = this;
var _23620__$1 = this;
return self__.meta23619;
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23619","meta23619",-1503329263,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23618";

cljs.core.async.t_cljs$core$async23618.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async23618");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23618 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23618(ch__$1,cs__$1,meta23619){
return (new cljs.core.async.t_cljs$core$async23618(ch__$1,cs__$1,meta23619));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23618(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22490__auto___23843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___23843,cs,m,dchan,dctr,done){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___23843,cs,m,dchan,dctr,done){
return (function (state_23755){
var state_val_23756 = (state_23755[(1)]);
if((state_val_23756 === (7))){
var inst_23751 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23757_23844 = state_23755__$1;
(statearr_23757_23844[(2)] = inst_23751);

(statearr_23757_23844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (20))){
var inst_23654 = (state_23755[(7)]);
var inst_23666 = cljs.core.first.call(null,inst_23654);
var inst_23667 = cljs.core.nth.call(null,inst_23666,(0),null);
var inst_23668 = cljs.core.nth.call(null,inst_23666,(1),null);
var state_23755__$1 = (function (){var statearr_23758 = state_23755;
(statearr_23758[(8)] = inst_23667);

return statearr_23758;
})();
if(cljs.core.truth_(inst_23668)){
var statearr_23759_23845 = state_23755__$1;
(statearr_23759_23845[(1)] = (22));

} else {
var statearr_23760_23846 = state_23755__$1;
(statearr_23760_23846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (27))){
var inst_23623 = (state_23755[(9)]);
var inst_23696 = (state_23755[(10)]);
var inst_23698 = (state_23755[(11)]);
var inst_23703 = (state_23755[(12)]);
var inst_23703__$1 = cljs.core._nth.call(null,inst_23696,inst_23698);
var inst_23704 = cljs.core.async.put_BANG_.call(null,inst_23703__$1,inst_23623,done);
var state_23755__$1 = (function (){var statearr_23761 = state_23755;
(statearr_23761[(12)] = inst_23703__$1);

return statearr_23761;
})();
if(cljs.core.truth_(inst_23704)){
var statearr_23762_23847 = state_23755__$1;
(statearr_23762_23847[(1)] = (30));

} else {
var statearr_23763_23848 = state_23755__$1;
(statearr_23763_23848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (1))){
var state_23755__$1 = state_23755;
var statearr_23764_23849 = state_23755__$1;
(statearr_23764_23849[(2)] = null);

(statearr_23764_23849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (24))){
var inst_23654 = (state_23755[(7)]);
var inst_23673 = (state_23755[(2)]);
var inst_23674 = cljs.core.next.call(null,inst_23654);
var inst_23632 = inst_23674;
var inst_23633 = null;
var inst_23634 = (0);
var inst_23635 = (0);
var state_23755__$1 = (function (){var statearr_23765 = state_23755;
(statearr_23765[(13)] = inst_23633);

(statearr_23765[(14)] = inst_23634);

(statearr_23765[(15)] = inst_23673);

(statearr_23765[(16)] = inst_23635);

(statearr_23765[(17)] = inst_23632);

return statearr_23765;
})();
var statearr_23766_23850 = state_23755__$1;
(statearr_23766_23850[(2)] = null);

(statearr_23766_23850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (39))){
var state_23755__$1 = state_23755;
var statearr_23770_23851 = state_23755__$1;
(statearr_23770_23851[(2)] = null);

(statearr_23770_23851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (4))){
var inst_23623 = (state_23755[(9)]);
var inst_23623__$1 = (state_23755[(2)]);
var inst_23624 = (inst_23623__$1 == null);
var state_23755__$1 = (function (){var statearr_23771 = state_23755;
(statearr_23771[(9)] = inst_23623__$1);

return statearr_23771;
})();
if(cljs.core.truth_(inst_23624)){
var statearr_23772_23852 = state_23755__$1;
(statearr_23772_23852[(1)] = (5));

} else {
var statearr_23773_23853 = state_23755__$1;
(statearr_23773_23853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (15))){
var inst_23633 = (state_23755[(13)]);
var inst_23634 = (state_23755[(14)]);
var inst_23635 = (state_23755[(16)]);
var inst_23632 = (state_23755[(17)]);
var inst_23650 = (state_23755[(2)]);
var inst_23651 = (inst_23635 + (1));
var tmp23767 = inst_23633;
var tmp23768 = inst_23634;
var tmp23769 = inst_23632;
var inst_23632__$1 = tmp23769;
var inst_23633__$1 = tmp23767;
var inst_23634__$1 = tmp23768;
var inst_23635__$1 = inst_23651;
var state_23755__$1 = (function (){var statearr_23774 = state_23755;
(statearr_23774[(13)] = inst_23633__$1);

(statearr_23774[(14)] = inst_23634__$1);

(statearr_23774[(18)] = inst_23650);

(statearr_23774[(16)] = inst_23635__$1);

(statearr_23774[(17)] = inst_23632__$1);

return statearr_23774;
})();
var statearr_23775_23854 = state_23755__$1;
(statearr_23775_23854[(2)] = null);

(statearr_23775_23854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (21))){
var inst_23677 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23779_23855 = state_23755__$1;
(statearr_23779_23855[(2)] = inst_23677);

(statearr_23779_23855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (31))){
var inst_23703 = (state_23755[(12)]);
var inst_23707 = done.call(null,null);
var inst_23708 = cljs.core.async.untap_STAR_.call(null,m,inst_23703);
var state_23755__$1 = (function (){var statearr_23780 = state_23755;
(statearr_23780[(19)] = inst_23707);

return statearr_23780;
})();
var statearr_23781_23856 = state_23755__$1;
(statearr_23781_23856[(2)] = inst_23708);

(statearr_23781_23856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (32))){
var inst_23696 = (state_23755[(10)]);
var inst_23695 = (state_23755[(20)]);
var inst_23698 = (state_23755[(11)]);
var inst_23697 = (state_23755[(21)]);
var inst_23710 = (state_23755[(2)]);
var inst_23711 = (inst_23698 + (1));
var tmp23776 = inst_23696;
var tmp23777 = inst_23695;
var tmp23778 = inst_23697;
var inst_23695__$1 = tmp23777;
var inst_23696__$1 = tmp23776;
var inst_23697__$1 = tmp23778;
var inst_23698__$1 = inst_23711;
var state_23755__$1 = (function (){var statearr_23782 = state_23755;
(statearr_23782[(22)] = inst_23710);

(statearr_23782[(10)] = inst_23696__$1);

(statearr_23782[(20)] = inst_23695__$1);

(statearr_23782[(11)] = inst_23698__$1);

(statearr_23782[(21)] = inst_23697__$1);

return statearr_23782;
})();
var statearr_23783_23857 = state_23755__$1;
(statearr_23783_23857[(2)] = null);

(statearr_23783_23857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (40))){
var inst_23723 = (state_23755[(23)]);
var inst_23727 = done.call(null,null);
var inst_23728 = cljs.core.async.untap_STAR_.call(null,m,inst_23723);
var state_23755__$1 = (function (){var statearr_23784 = state_23755;
(statearr_23784[(24)] = inst_23727);

return statearr_23784;
})();
var statearr_23785_23858 = state_23755__$1;
(statearr_23785_23858[(2)] = inst_23728);

(statearr_23785_23858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (33))){
var inst_23714 = (state_23755[(25)]);
var inst_23716 = cljs.core.chunked_seq_QMARK_.call(null,inst_23714);
var state_23755__$1 = state_23755;
if(inst_23716){
var statearr_23786_23859 = state_23755__$1;
(statearr_23786_23859[(1)] = (36));

} else {
var statearr_23787_23860 = state_23755__$1;
(statearr_23787_23860[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (13))){
var inst_23644 = (state_23755[(26)]);
var inst_23647 = cljs.core.async.close_BANG_.call(null,inst_23644);
var state_23755__$1 = state_23755;
var statearr_23788_23861 = state_23755__$1;
(statearr_23788_23861[(2)] = inst_23647);

(statearr_23788_23861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (22))){
var inst_23667 = (state_23755[(8)]);
var inst_23670 = cljs.core.async.close_BANG_.call(null,inst_23667);
var state_23755__$1 = state_23755;
var statearr_23789_23862 = state_23755__$1;
(statearr_23789_23862[(2)] = inst_23670);

(statearr_23789_23862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (36))){
var inst_23714 = (state_23755[(25)]);
var inst_23718 = cljs.core.chunk_first.call(null,inst_23714);
var inst_23719 = cljs.core.chunk_rest.call(null,inst_23714);
var inst_23720 = cljs.core.count.call(null,inst_23718);
var inst_23695 = inst_23719;
var inst_23696 = inst_23718;
var inst_23697 = inst_23720;
var inst_23698 = (0);
var state_23755__$1 = (function (){var statearr_23790 = state_23755;
(statearr_23790[(10)] = inst_23696);

(statearr_23790[(20)] = inst_23695);

(statearr_23790[(11)] = inst_23698);

(statearr_23790[(21)] = inst_23697);

return statearr_23790;
})();
var statearr_23791_23863 = state_23755__$1;
(statearr_23791_23863[(2)] = null);

(statearr_23791_23863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (41))){
var inst_23714 = (state_23755[(25)]);
var inst_23730 = (state_23755[(2)]);
var inst_23731 = cljs.core.next.call(null,inst_23714);
var inst_23695 = inst_23731;
var inst_23696 = null;
var inst_23697 = (0);
var inst_23698 = (0);
var state_23755__$1 = (function (){var statearr_23792 = state_23755;
(statearr_23792[(10)] = inst_23696);

(statearr_23792[(20)] = inst_23695);

(statearr_23792[(11)] = inst_23698);

(statearr_23792[(27)] = inst_23730);

(statearr_23792[(21)] = inst_23697);

return statearr_23792;
})();
var statearr_23793_23864 = state_23755__$1;
(statearr_23793_23864[(2)] = null);

(statearr_23793_23864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (43))){
var state_23755__$1 = state_23755;
var statearr_23794_23865 = state_23755__$1;
(statearr_23794_23865[(2)] = null);

(statearr_23794_23865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (29))){
var inst_23739 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23795_23866 = state_23755__$1;
(statearr_23795_23866[(2)] = inst_23739);

(statearr_23795_23866[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (44))){
var inst_23748 = (state_23755[(2)]);
var state_23755__$1 = (function (){var statearr_23796 = state_23755;
(statearr_23796[(28)] = inst_23748);

return statearr_23796;
})();
var statearr_23797_23867 = state_23755__$1;
(statearr_23797_23867[(2)] = null);

(statearr_23797_23867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (6))){
var inst_23687 = (state_23755[(29)]);
var inst_23686 = cljs.core.deref.call(null,cs);
var inst_23687__$1 = cljs.core.keys.call(null,inst_23686);
var inst_23688 = cljs.core.count.call(null,inst_23687__$1);
var inst_23689 = cljs.core.reset_BANG_.call(null,dctr,inst_23688);
var inst_23694 = cljs.core.seq.call(null,inst_23687__$1);
var inst_23695 = inst_23694;
var inst_23696 = null;
var inst_23697 = (0);
var inst_23698 = (0);
var state_23755__$1 = (function (){var statearr_23798 = state_23755;
(statearr_23798[(29)] = inst_23687__$1);

(statearr_23798[(10)] = inst_23696);

(statearr_23798[(20)] = inst_23695);

(statearr_23798[(11)] = inst_23698);

(statearr_23798[(30)] = inst_23689);

(statearr_23798[(21)] = inst_23697);

return statearr_23798;
})();
var statearr_23799_23868 = state_23755__$1;
(statearr_23799_23868[(2)] = null);

(statearr_23799_23868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (28))){
var inst_23714 = (state_23755[(25)]);
var inst_23695 = (state_23755[(20)]);
var inst_23714__$1 = cljs.core.seq.call(null,inst_23695);
var state_23755__$1 = (function (){var statearr_23800 = state_23755;
(statearr_23800[(25)] = inst_23714__$1);

return statearr_23800;
})();
if(inst_23714__$1){
var statearr_23801_23869 = state_23755__$1;
(statearr_23801_23869[(1)] = (33));

} else {
var statearr_23802_23870 = state_23755__$1;
(statearr_23802_23870[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (25))){
var inst_23698 = (state_23755[(11)]);
var inst_23697 = (state_23755[(21)]);
var inst_23700 = (inst_23698 < inst_23697);
var inst_23701 = inst_23700;
var state_23755__$1 = state_23755;
if(cljs.core.truth_(inst_23701)){
var statearr_23803_23871 = state_23755__$1;
(statearr_23803_23871[(1)] = (27));

} else {
var statearr_23804_23872 = state_23755__$1;
(statearr_23804_23872[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (34))){
var state_23755__$1 = state_23755;
var statearr_23805_23873 = state_23755__$1;
(statearr_23805_23873[(2)] = null);

(statearr_23805_23873[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (17))){
var state_23755__$1 = state_23755;
var statearr_23806_23874 = state_23755__$1;
(statearr_23806_23874[(2)] = null);

(statearr_23806_23874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (3))){
var inst_23753 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23755__$1,inst_23753);
} else {
if((state_val_23756 === (12))){
var inst_23682 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23807_23875 = state_23755__$1;
(statearr_23807_23875[(2)] = inst_23682);

(statearr_23807_23875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (2))){
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23755__$1,(4),ch);
} else {
if((state_val_23756 === (23))){
var state_23755__$1 = state_23755;
var statearr_23808_23876 = state_23755__$1;
(statearr_23808_23876[(2)] = null);

(statearr_23808_23876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (35))){
var inst_23737 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23809_23877 = state_23755__$1;
(statearr_23809_23877[(2)] = inst_23737);

(statearr_23809_23877[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (19))){
var inst_23654 = (state_23755[(7)]);
var inst_23658 = cljs.core.chunk_first.call(null,inst_23654);
var inst_23659 = cljs.core.chunk_rest.call(null,inst_23654);
var inst_23660 = cljs.core.count.call(null,inst_23658);
var inst_23632 = inst_23659;
var inst_23633 = inst_23658;
var inst_23634 = inst_23660;
var inst_23635 = (0);
var state_23755__$1 = (function (){var statearr_23810 = state_23755;
(statearr_23810[(13)] = inst_23633);

(statearr_23810[(14)] = inst_23634);

(statearr_23810[(16)] = inst_23635);

(statearr_23810[(17)] = inst_23632);

return statearr_23810;
})();
var statearr_23811_23878 = state_23755__$1;
(statearr_23811_23878[(2)] = null);

(statearr_23811_23878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (11))){
var inst_23654 = (state_23755[(7)]);
var inst_23632 = (state_23755[(17)]);
var inst_23654__$1 = cljs.core.seq.call(null,inst_23632);
var state_23755__$1 = (function (){var statearr_23812 = state_23755;
(statearr_23812[(7)] = inst_23654__$1);

return statearr_23812;
})();
if(inst_23654__$1){
var statearr_23813_23879 = state_23755__$1;
(statearr_23813_23879[(1)] = (16));

} else {
var statearr_23814_23880 = state_23755__$1;
(statearr_23814_23880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (9))){
var inst_23684 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23815_23881 = state_23755__$1;
(statearr_23815_23881[(2)] = inst_23684);

(statearr_23815_23881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (5))){
var inst_23630 = cljs.core.deref.call(null,cs);
var inst_23631 = cljs.core.seq.call(null,inst_23630);
var inst_23632 = inst_23631;
var inst_23633 = null;
var inst_23634 = (0);
var inst_23635 = (0);
var state_23755__$1 = (function (){var statearr_23816 = state_23755;
(statearr_23816[(13)] = inst_23633);

(statearr_23816[(14)] = inst_23634);

(statearr_23816[(16)] = inst_23635);

(statearr_23816[(17)] = inst_23632);

return statearr_23816;
})();
var statearr_23817_23882 = state_23755__$1;
(statearr_23817_23882[(2)] = null);

(statearr_23817_23882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (14))){
var state_23755__$1 = state_23755;
var statearr_23818_23883 = state_23755__$1;
(statearr_23818_23883[(2)] = null);

(statearr_23818_23883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (45))){
var inst_23745 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23819_23884 = state_23755__$1;
(statearr_23819_23884[(2)] = inst_23745);

(statearr_23819_23884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (26))){
var inst_23687 = (state_23755[(29)]);
var inst_23741 = (state_23755[(2)]);
var inst_23742 = cljs.core.seq.call(null,inst_23687);
var state_23755__$1 = (function (){var statearr_23820 = state_23755;
(statearr_23820[(31)] = inst_23741);

return statearr_23820;
})();
if(inst_23742){
var statearr_23821_23885 = state_23755__$1;
(statearr_23821_23885[(1)] = (42));

} else {
var statearr_23822_23886 = state_23755__$1;
(statearr_23822_23886[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (16))){
var inst_23654 = (state_23755[(7)]);
var inst_23656 = cljs.core.chunked_seq_QMARK_.call(null,inst_23654);
var state_23755__$1 = state_23755;
if(inst_23656){
var statearr_23823_23887 = state_23755__$1;
(statearr_23823_23887[(1)] = (19));

} else {
var statearr_23824_23888 = state_23755__$1;
(statearr_23824_23888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (38))){
var inst_23734 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23825_23889 = state_23755__$1;
(statearr_23825_23889[(2)] = inst_23734);

(statearr_23825_23889[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (30))){
var state_23755__$1 = state_23755;
var statearr_23826_23890 = state_23755__$1;
(statearr_23826_23890[(2)] = null);

(statearr_23826_23890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (10))){
var inst_23633 = (state_23755[(13)]);
var inst_23635 = (state_23755[(16)]);
var inst_23643 = cljs.core._nth.call(null,inst_23633,inst_23635);
var inst_23644 = cljs.core.nth.call(null,inst_23643,(0),null);
var inst_23645 = cljs.core.nth.call(null,inst_23643,(1),null);
var state_23755__$1 = (function (){var statearr_23827 = state_23755;
(statearr_23827[(26)] = inst_23644);

return statearr_23827;
})();
if(cljs.core.truth_(inst_23645)){
var statearr_23828_23891 = state_23755__$1;
(statearr_23828_23891[(1)] = (13));

} else {
var statearr_23829_23892 = state_23755__$1;
(statearr_23829_23892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (18))){
var inst_23680 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23830_23893 = state_23755__$1;
(statearr_23830_23893[(2)] = inst_23680);

(statearr_23830_23893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (42))){
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23755__$1,(45),dchan);
} else {
if((state_val_23756 === (37))){
var inst_23623 = (state_23755[(9)]);
var inst_23714 = (state_23755[(25)]);
var inst_23723 = (state_23755[(23)]);
var inst_23723__$1 = cljs.core.first.call(null,inst_23714);
var inst_23724 = cljs.core.async.put_BANG_.call(null,inst_23723__$1,inst_23623,done);
var state_23755__$1 = (function (){var statearr_23831 = state_23755;
(statearr_23831[(23)] = inst_23723__$1);

return statearr_23831;
})();
if(cljs.core.truth_(inst_23724)){
var statearr_23832_23894 = state_23755__$1;
(statearr_23832_23894[(1)] = (39));

} else {
var statearr_23833_23895 = state_23755__$1;
(statearr_23833_23895[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (8))){
var inst_23634 = (state_23755[(14)]);
var inst_23635 = (state_23755[(16)]);
var inst_23637 = (inst_23635 < inst_23634);
var inst_23638 = inst_23637;
var state_23755__$1 = state_23755;
if(cljs.core.truth_(inst_23638)){
var statearr_23834_23896 = state_23755__$1;
(statearr_23834_23896[(1)] = (10));

} else {
var statearr_23835_23897 = state_23755__$1;
(statearr_23835_23897[(1)] = (11));

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
});})(c__22490__auto___23843,cs,m,dchan,dctr,done))
;
return ((function (switch__22378__auto__,c__22490__auto___23843,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22379__auto__ = null;
var cljs$core$async$mult_$_state_machine__22379__auto____0 = (function (){
var statearr_23839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23839[(0)] = cljs$core$async$mult_$_state_machine__22379__auto__);

(statearr_23839[(1)] = (1));

return statearr_23839;
});
var cljs$core$async$mult_$_state_machine__22379__auto____1 = (function (state_23755){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_23755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e23840){if((e23840 instanceof Object)){
var ex__22382__auto__ = e23840;
var statearr_23841_23898 = state_23755;
(statearr_23841_23898[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23755;
state_23755 = G__23899;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22379__auto__ = function(state_23755){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22379__auto____1.call(this,state_23755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22379__auto____0;
cljs$core$async$mult_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22379__auto____1;
return cljs$core$async$mult_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___23843,cs,m,dchan,dctr,done))
})();
var state__22492__auto__ = (function (){var statearr_23842 = f__22491__auto__.call(null);
(statearr_23842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___23843);

return statearr_23842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___23843,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23900 = [];
var len__21393__auto___23903 = arguments.length;
var i__21394__auto___23904 = (0);
while(true){
if((i__21394__auto___23904 < len__21393__auto___23903)){
args23900.push((arguments[i__21394__auto___23904]));

var G__23905 = (i__21394__auto___23904 + (1));
i__21394__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var G__23902 = args23900.length;
switch (G__23902) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23900.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m);
} else {
var m__20949__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,state_map);
} else {
var m__20949__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20948__auto__ = (((m == null))?null:m);
var m__20949__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,m,mode);
} else {
var m__20949__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___23917 = arguments.length;
var i__21394__auto___23918 = (0);
while(true){
if((i__21394__auto___23918 < len__21393__auto___23917)){
args__21400__auto__.push((arguments[i__21394__auto___23918]));

var G__23919 = (i__21394__auto___23918 + (1));
i__21394__auto___23918 = G__23919;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((3) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21401__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23911){
var map__23912 = p__23911;
var map__23912__$1 = ((((!((map__23912 == null)))?((((map__23912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23912):map__23912);
var opts = map__23912__$1;
var statearr_23914_23920 = state;
(statearr_23914_23920[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23912,map__23912__$1,opts){
return (function (val){
var statearr_23915_23921 = state;
(statearr_23915_23921[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23912,map__23912__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23916_23922 = state;
(statearr_23916_23922[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23907){
var G__23908 = cljs.core.first.call(null,seq23907);
var seq23907__$1 = cljs.core.next.call(null,seq23907);
var G__23909 = cljs.core.first.call(null,seq23907__$1);
var seq23907__$2 = cljs.core.next.call(null,seq23907__$1);
var G__23910 = cljs.core.first.call(null,seq23907__$2);
var seq23907__$3 = cljs.core.next.call(null,seq23907__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23908,G__23909,G__23910,seq23907__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24090 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24091){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24091 = meta24091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24092,meta24091__$1){
var self__ = this;
var _24092__$1 = this;
return (new cljs.core.async.t_cljs$core$async24090(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24091__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24092){
var self__ = this;
var _24092__$1 = this;
return self__.meta24091;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24091","meta24091",1726160090,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24090";

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24090");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24090 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24090(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24091){
return (new cljs.core.async.t_cljs$core$async24090(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24091));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24090(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22490__auto___24257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24194){
var state_val_24195 = (state_24194[(1)]);
if((state_val_24195 === (7))){
var inst_24109 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24196_24258 = state_24194__$1;
(statearr_24196_24258[(2)] = inst_24109);

(statearr_24196_24258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (20))){
var inst_24121 = (state_24194[(7)]);
var state_24194__$1 = state_24194;
var statearr_24197_24259 = state_24194__$1;
(statearr_24197_24259[(2)] = inst_24121);

(statearr_24197_24259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (27))){
var state_24194__$1 = state_24194;
var statearr_24198_24260 = state_24194__$1;
(statearr_24198_24260[(2)] = null);

(statearr_24198_24260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (1))){
var inst_24096 = (state_24194[(8)]);
var inst_24096__$1 = calc_state.call(null);
var inst_24098 = (inst_24096__$1 == null);
var inst_24099 = cljs.core.not.call(null,inst_24098);
var state_24194__$1 = (function (){var statearr_24199 = state_24194;
(statearr_24199[(8)] = inst_24096__$1);

return statearr_24199;
})();
if(inst_24099){
var statearr_24200_24261 = state_24194__$1;
(statearr_24200_24261[(1)] = (2));

} else {
var statearr_24201_24262 = state_24194__$1;
(statearr_24201_24262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (24))){
var inst_24145 = (state_24194[(9)]);
var inst_24168 = (state_24194[(10)]);
var inst_24154 = (state_24194[(11)]);
var inst_24168__$1 = inst_24145.call(null,inst_24154);
var state_24194__$1 = (function (){var statearr_24202 = state_24194;
(statearr_24202[(10)] = inst_24168__$1);

return statearr_24202;
})();
if(cljs.core.truth_(inst_24168__$1)){
var statearr_24203_24263 = state_24194__$1;
(statearr_24203_24263[(1)] = (29));

} else {
var statearr_24204_24264 = state_24194__$1;
(statearr_24204_24264[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (4))){
var inst_24112 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24112)){
var statearr_24205_24265 = state_24194__$1;
(statearr_24205_24265[(1)] = (8));

} else {
var statearr_24206_24266 = state_24194__$1;
(statearr_24206_24266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (15))){
var inst_24139 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24139)){
var statearr_24207_24267 = state_24194__$1;
(statearr_24207_24267[(1)] = (19));

} else {
var statearr_24208_24268 = state_24194__$1;
(statearr_24208_24268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (21))){
var inst_24144 = (state_24194[(12)]);
var inst_24144__$1 = (state_24194[(2)]);
var inst_24145 = cljs.core.get.call(null,inst_24144__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24146 = cljs.core.get.call(null,inst_24144__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24147 = cljs.core.get.call(null,inst_24144__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24194__$1 = (function (){var statearr_24209 = state_24194;
(statearr_24209[(9)] = inst_24145);

(statearr_24209[(12)] = inst_24144__$1);

(statearr_24209[(13)] = inst_24146);

return statearr_24209;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24194__$1,(22),inst_24147);
} else {
if((state_val_24195 === (31))){
var inst_24176 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24176)){
var statearr_24210_24269 = state_24194__$1;
(statearr_24210_24269[(1)] = (32));

} else {
var statearr_24211_24270 = state_24194__$1;
(statearr_24211_24270[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (32))){
var inst_24153 = (state_24194[(14)]);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24194__$1,(35),out,inst_24153);
} else {
if((state_val_24195 === (33))){
var inst_24144 = (state_24194[(12)]);
var inst_24121 = inst_24144;
var state_24194__$1 = (function (){var statearr_24212 = state_24194;
(statearr_24212[(7)] = inst_24121);

return statearr_24212;
})();
var statearr_24213_24271 = state_24194__$1;
(statearr_24213_24271[(2)] = null);

(statearr_24213_24271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (13))){
var inst_24121 = (state_24194[(7)]);
var inst_24128 = inst_24121.cljs$lang$protocol_mask$partition0$;
var inst_24129 = (inst_24128 & (64));
var inst_24130 = inst_24121.cljs$core$ISeq$;
var inst_24131 = (cljs.core.PROTOCOL_SENTINEL === inst_24130);
var inst_24132 = (inst_24129) || (inst_24131);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24132)){
var statearr_24214_24272 = state_24194__$1;
(statearr_24214_24272[(1)] = (16));

} else {
var statearr_24215_24273 = state_24194__$1;
(statearr_24215_24273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (22))){
var inst_24153 = (state_24194[(14)]);
var inst_24154 = (state_24194[(11)]);
var inst_24152 = (state_24194[(2)]);
var inst_24153__$1 = cljs.core.nth.call(null,inst_24152,(0),null);
var inst_24154__$1 = cljs.core.nth.call(null,inst_24152,(1),null);
var inst_24155 = (inst_24153__$1 == null);
var inst_24156 = cljs.core._EQ_.call(null,inst_24154__$1,change);
var inst_24157 = (inst_24155) || (inst_24156);
var state_24194__$1 = (function (){var statearr_24216 = state_24194;
(statearr_24216[(14)] = inst_24153__$1);

(statearr_24216[(11)] = inst_24154__$1);

return statearr_24216;
})();
if(cljs.core.truth_(inst_24157)){
var statearr_24217_24274 = state_24194__$1;
(statearr_24217_24274[(1)] = (23));

} else {
var statearr_24218_24275 = state_24194__$1;
(statearr_24218_24275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (36))){
var inst_24144 = (state_24194[(12)]);
var inst_24121 = inst_24144;
var state_24194__$1 = (function (){var statearr_24219 = state_24194;
(statearr_24219[(7)] = inst_24121);

return statearr_24219;
})();
var statearr_24220_24276 = state_24194__$1;
(statearr_24220_24276[(2)] = null);

(statearr_24220_24276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (29))){
var inst_24168 = (state_24194[(10)]);
var state_24194__$1 = state_24194;
var statearr_24221_24277 = state_24194__$1;
(statearr_24221_24277[(2)] = inst_24168);

(statearr_24221_24277[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (6))){
var state_24194__$1 = state_24194;
var statearr_24222_24278 = state_24194__$1;
(statearr_24222_24278[(2)] = false);

(statearr_24222_24278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (28))){
var inst_24164 = (state_24194[(2)]);
var inst_24165 = calc_state.call(null);
var inst_24121 = inst_24165;
var state_24194__$1 = (function (){var statearr_24223 = state_24194;
(statearr_24223[(7)] = inst_24121);

(statearr_24223[(15)] = inst_24164);

return statearr_24223;
})();
var statearr_24224_24279 = state_24194__$1;
(statearr_24224_24279[(2)] = null);

(statearr_24224_24279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (25))){
var inst_24190 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24225_24280 = state_24194__$1;
(statearr_24225_24280[(2)] = inst_24190);

(statearr_24225_24280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (34))){
var inst_24188 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24226_24281 = state_24194__$1;
(statearr_24226_24281[(2)] = inst_24188);

(statearr_24226_24281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (17))){
var state_24194__$1 = state_24194;
var statearr_24227_24282 = state_24194__$1;
(statearr_24227_24282[(2)] = false);

(statearr_24227_24282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (3))){
var state_24194__$1 = state_24194;
var statearr_24228_24283 = state_24194__$1;
(statearr_24228_24283[(2)] = false);

(statearr_24228_24283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (12))){
var inst_24192 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24194__$1,inst_24192);
} else {
if((state_val_24195 === (2))){
var inst_24096 = (state_24194[(8)]);
var inst_24101 = inst_24096.cljs$lang$protocol_mask$partition0$;
var inst_24102 = (inst_24101 & (64));
var inst_24103 = inst_24096.cljs$core$ISeq$;
var inst_24104 = (cljs.core.PROTOCOL_SENTINEL === inst_24103);
var inst_24105 = (inst_24102) || (inst_24104);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24105)){
var statearr_24229_24284 = state_24194__$1;
(statearr_24229_24284[(1)] = (5));

} else {
var statearr_24230_24285 = state_24194__$1;
(statearr_24230_24285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (23))){
var inst_24153 = (state_24194[(14)]);
var inst_24159 = (inst_24153 == null);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24159)){
var statearr_24231_24286 = state_24194__$1;
(statearr_24231_24286[(1)] = (26));

} else {
var statearr_24232_24287 = state_24194__$1;
(statearr_24232_24287[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (35))){
var inst_24179 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24179)){
var statearr_24233_24288 = state_24194__$1;
(statearr_24233_24288[(1)] = (36));

} else {
var statearr_24234_24289 = state_24194__$1;
(statearr_24234_24289[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (19))){
var inst_24121 = (state_24194[(7)]);
var inst_24141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24121);
var state_24194__$1 = state_24194;
var statearr_24235_24290 = state_24194__$1;
(statearr_24235_24290[(2)] = inst_24141);

(statearr_24235_24290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (11))){
var inst_24121 = (state_24194[(7)]);
var inst_24125 = (inst_24121 == null);
var inst_24126 = cljs.core.not.call(null,inst_24125);
var state_24194__$1 = state_24194;
if(inst_24126){
var statearr_24236_24291 = state_24194__$1;
(statearr_24236_24291[(1)] = (13));

} else {
var statearr_24237_24292 = state_24194__$1;
(statearr_24237_24292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (9))){
var inst_24096 = (state_24194[(8)]);
var state_24194__$1 = state_24194;
var statearr_24238_24293 = state_24194__$1;
(statearr_24238_24293[(2)] = inst_24096);

(statearr_24238_24293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (5))){
var state_24194__$1 = state_24194;
var statearr_24239_24294 = state_24194__$1;
(statearr_24239_24294[(2)] = true);

(statearr_24239_24294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (14))){
var state_24194__$1 = state_24194;
var statearr_24240_24295 = state_24194__$1;
(statearr_24240_24295[(2)] = false);

(statearr_24240_24295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (26))){
var inst_24154 = (state_24194[(11)]);
var inst_24161 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24154);
var state_24194__$1 = state_24194;
var statearr_24241_24296 = state_24194__$1;
(statearr_24241_24296[(2)] = inst_24161);

(statearr_24241_24296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (16))){
var state_24194__$1 = state_24194;
var statearr_24242_24297 = state_24194__$1;
(statearr_24242_24297[(2)] = true);

(statearr_24242_24297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (38))){
var inst_24184 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24243_24298 = state_24194__$1;
(statearr_24243_24298[(2)] = inst_24184);

(statearr_24243_24298[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (30))){
var inst_24145 = (state_24194[(9)]);
var inst_24154 = (state_24194[(11)]);
var inst_24146 = (state_24194[(13)]);
var inst_24171 = cljs.core.empty_QMARK_.call(null,inst_24145);
var inst_24172 = inst_24146.call(null,inst_24154);
var inst_24173 = cljs.core.not.call(null,inst_24172);
var inst_24174 = (inst_24171) && (inst_24173);
var state_24194__$1 = state_24194;
var statearr_24244_24299 = state_24194__$1;
(statearr_24244_24299[(2)] = inst_24174);

(statearr_24244_24299[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (10))){
var inst_24096 = (state_24194[(8)]);
var inst_24117 = (state_24194[(2)]);
var inst_24118 = cljs.core.get.call(null,inst_24117,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24119 = cljs.core.get.call(null,inst_24117,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24120 = cljs.core.get.call(null,inst_24117,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24121 = inst_24096;
var state_24194__$1 = (function (){var statearr_24245 = state_24194;
(statearr_24245[(7)] = inst_24121);

(statearr_24245[(16)] = inst_24120);

(statearr_24245[(17)] = inst_24119);

(statearr_24245[(18)] = inst_24118);

return statearr_24245;
})();
var statearr_24246_24300 = state_24194__$1;
(statearr_24246_24300[(2)] = null);

(statearr_24246_24300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (18))){
var inst_24136 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24247_24301 = state_24194__$1;
(statearr_24247_24301[(2)] = inst_24136);

(statearr_24247_24301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (37))){
var state_24194__$1 = state_24194;
var statearr_24248_24302 = state_24194__$1;
(statearr_24248_24302[(2)] = null);

(statearr_24248_24302[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (8))){
var inst_24096 = (state_24194[(8)]);
var inst_24114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24096);
var state_24194__$1 = state_24194;
var statearr_24249_24303 = state_24194__$1;
(statearr_24249_24303[(2)] = inst_24114);

(statearr_24249_24303[(1)] = (10));


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
});})(c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22378__auto__,c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22379__auto__ = null;
var cljs$core$async$mix_$_state_machine__22379__auto____0 = (function (){
var statearr_24253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24253[(0)] = cljs$core$async$mix_$_state_machine__22379__auto__);

(statearr_24253[(1)] = (1));

return statearr_24253;
});
var cljs$core$async$mix_$_state_machine__22379__auto____1 = (function (state_24194){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24254){if((e24254 instanceof Object)){
var ex__22382__auto__ = e24254;
var statearr_24255_24304 = state_24194;
(statearr_24255_24304[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24305 = state_24194;
state_24194 = G__24305;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22379__auto__ = function(state_24194){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22379__auto____1.call(this,state_24194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22379__auto____0;
cljs$core$async$mix_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22379__auto____1;
return cljs$core$async$mix_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22492__auto__ = (function (){var statearr_24256 = f__22491__auto__.call(null);
(statearr_24256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24257);

return statearr_24256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24257,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20949__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v,ch);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24306 = [];
var len__21393__auto___24309 = arguments.length;
var i__21394__auto___24310 = (0);
while(true){
if((i__21394__auto___24310 < len__21393__auto___24309)){
args24306.push((arguments[i__21394__auto___24310]));

var G__24311 = (i__21394__auto___24310 + (1));
i__21394__auto___24310 = G__24311;
continue;
} else {
}
break;
}

var G__24308 = args24306.length;
switch (G__24308) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24306.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20948__auto__ = (((p == null))?null:p);
var m__20949__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,p,v);
} else {
var m__20949__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24314 = [];
var len__21393__auto___24439 = arguments.length;
var i__21394__auto___24440 = (0);
while(true){
if((i__21394__auto___24440 < len__21393__auto___24439)){
args24314.push((arguments[i__21394__auto___24440]));

var G__24441 = (i__21394__auto___24440 + (1));
i__21394__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var G__24316 = args24314.length;
switch (G__24316) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24314.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20285__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20285__auto__,mults){
return (function (p1__24313_SHARP_){
if(cljs.core.truth_(p1__24313_SHARP_.call(null,topic))){
return p1__24313_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24313_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20285__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24317 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24318){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24318 = meta24318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24319,meta24318__$1){
var self__ = this;
var _24319__$1 = this;
return (new cljs.core.async.t_cljs$core$async24317(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24318__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24319){
var self__ = this;
var _24319__$1 = this;
return self__.meta24318;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24318","meta24318",-693310773,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24317";

cljs.core.async.t_cljs$core$async24317.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24317");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24317 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24317(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24318){
return (new cljs.core.async.t_cljs$core$async24317(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24318));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24317(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22490__auto___24443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24443,mults,ensure_mult,p){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24443,mults,ensure_mult,p){
return (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (7))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24393_24444 = state_24391__$1;
(statearr_24393_24444[(2)] = inst_24387);

(statearr_24393_24444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (20))){
var state_24391__$1 = state_24391;
var statearr_24394_24445 = state_24391__$1;
(statearr_24394_24445[(2)] = null);

(statearr_24394_24445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (1))){
var state_24391__$1 = state_24391;
var statearr_24395_24446 = state_24391__$1;
(statearr_24395_24446[(2)] = null);

(statearr_24395_24446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (24))){
var inst_24370 = (state_24391[(7)]);
var inst_24379 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24370);
var state_24391__$1 = state_24391;
var statearr_24396_24447 = state_24391__$1;
(statearr_24396_24447[(2)] = inst_24379);

(statearr_24396_24447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (4))){
var inst_24322 = (state_24391[(8)]);
var inst_24322__$1 = (state_24391[(2)]);
var inst_24323 = (inst_24322__$1 == null);
var state_24391__$1 = (function (){var statearr_24397 = state_24391;
(statearr_24397[(8)] = inst_24322__$1);

return statearr_24397;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24398_24448 = state_24391__$1;
(statearr_24398_24448[(1)] = (5));

} else {
var statearr_24399_24449 = state_24391__$1;
(statearr_24399_24449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (15))){
var inst_24364 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24400_24450 = state_24391__$1;
(statearr_24400_24450[(2)] = inst_24364);

(statearr_24400_24450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (21))){
var inst_24384 = (state_24391[(2)]);
var state_24391__$1 = (function (){var statearr_24401 = state_24391;
(statearr_24401[(9)] = inst_24384);

return statearr_24401;
})();
var statearr_24402_24451 = state_24391__$1;
(statearr_24402_24451[(2)] = null);

(statearr_24402_24451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (13))){
var inst_24346 = (state_24391[(10)]);
var inst_24348 = cljs.core.chunked_seq_QMARK_.call(null,inst_24346);
var state_24391__$1 = state_24391;
if(inst_24348){
var statearr_24403_24452 = state_24391__$1;
(statearr_24403_24452[(1)] = (16));

} else {
var statearr_24404_24453 = state_24391__$1;
(statearr_24404_24453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (22))){
var inst_24376 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24376)){
var statearr_24405_24454 = state_24391__$1;
(statearr_24405_24454[(1)] = (23));

} else {
var statearr_24406_24455 = state_24391__$1;
(statearr_24406_24455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (6))){
var inst_24370 = (state_24391[(7)]);
var inst_24372 = (state_24391[(11)]);
var inst_24322 = (state_24391[(8)]);
var inst_24370__$1 = topic_fn.call(null,inst_24322);
var inst_24371 = cljs.core.deref.call(null,mults);
var inst_24372__$1 = cljs.core.get.call(null,inst_24371,inst_24370__$1);
var state_24391__$1 = (function (){var statearr_24407 = state_24391;
(statearr_24407[(7)] = inst_24370__$1);

(statearr_24407[(11)] = inst_24372__$1);

return statearr_24407;
})();
if(cljs.core.truth_(inst_24372__$1)){
var statearr_24408_24456 = state_24391__$1;
(statearr_24408_24456[(1)] = (19));

} else {
var statearr_24409_24457 = state_24391__$1;
(statearr_24409_24457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (25))){
var inst_24381 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24410_24458 = state_24391__$1;
(statearr_24410_24458[(2)] = inst_24381);

(statearr_24410_24458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (17))){
var inst_24346 = (state_24391[(10)]);
var inst_24355 = cljs.core.first.call(null,inst_24346);
var inst_24356 = cljs.core.async.muxch_STAR_.call(null,inst_24355);
var inst_24357 = cljs.core.async.close_BANG_.call(null,inst_24356);
var inst_24358 = cljs.core.next.call(null,inst_24346);
var inst_24332 = inst_24358;
var inst_24333 = null;
var inst_24334 = (0);
var inst_24335 = (0);
var state_24391__$1 = (function (){var statearr_24411 = state_24391;
(statearr_24411[(12)] = inst_24357);

(statearr_24411[(13)] = inst_24332);

(statearr_24411[(14)] = inst_24334);

(statearr_24411[(15)] = inst_24333);

(statearr_24411[(16)] = inst_24335);

return statearr_24411;
})();
var statearr_24412_24459 = state_24391__$1;
(statearr_24412_24459[(2)] = null);

(statearr_24412_24459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (12))){
var inst_24366 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24413_24460 = state_24391__$1;
(statearr_24413_24460[(2)] = inst_24366);

(statearr_24413_24460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (2))){
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(4),ch);
} else {
if((state_val_24392 === (23))){
var state_24391__$1 = state_24391;
var statearr_24414_24461 = state_24391__$1;
(statearr_24414_24461[(2)] = null);

(statearr_24414_24461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (19))){
var inst_24372 = (state_24391[(11)]);
var inst_24322 = (state_24391[(8)]);
var inst_24374 = cljs.core.async.muxch_STAR_.call(null,inst_24372);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24391__$1,(22),inst_24374,inst_24322);
} else {
if((state_val_24392 === (11))){
var inst_24332 = (state_24391[(13)]);
var inst_24346 = (state_24391[(10)]);
var inst_24346__$1 = cljs.core.seq.call(null,inst_24332);
var state_24391__$1 = (function (){var statearr_24415 = state_24391;
(statearr_24415[(10)] = inst_24346__$1);

return statearr_24415;
})();
if(inst_24346__$1){
var statearr_24416_24462 = state_24391__$1;
(statearr_24416_24462[(1)] = (13));

} else {
var statearr_24417_24463 = state_24391__$1;
(statearr_24417_24463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (9))){
var inst_24368 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24418_24464 = state_24391__$1;
(statearr_24418_24464[(2)] = inst_24368);

(statearr_24418_24464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (5))){
var inst_24329 = cljs.core.deref.call(null,mults);
var inst_24330 = cljs.core.vals.call(null,inst_24329);
var inst_24331 = cljs.core.seq.call(null,inst_24330);
var inst_24332 = inst_24331;
var inst_24333 = null;
var inst_24334 = (0);
var inst_24335 = (0);
var state_24391__$1 = (function (){var statearr_24419 = state_24391;
(statearr_24419[(13)] = inst_24332);

(statearr_24419[(14)] = inst_24334);

(statearr_24419[(15)] = inst_24333);

(statearr_24419[(16)] = inst_24335);

return statearr_24419;
})();
var statearr_24420_24465 = state_24391__$1;
(statearr_24420_24465[(2)] = null);

(statearr_24420_24465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (14))){
var state_24391__$1 = state_24391;
var statearr_24424_24466 = state_24391__$1;
(statearr_24424_24466[(2)] = null);

(statearr_24424_24466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (16))){
var inst_24346 = (state_24391[(10)]);
var inst_24350 = cljs.core.chunk_first.call(null,inst_24346);
var inst_24351 = cljs.core.chunk_rest.call(null,inst_24346);
var inst_24352 = cljs.core.count.call(null,inst_24350);
var inst_24332 = inst_24351;
var inst_24333 = inst_24350;
var inst_24334 = inst_24352;
var inst_24335 = (0);
var state_24391__$1 = (function (){var statearr_24425 = state_24391;
(statearr_24425[(13)] = inst_24332);

(statearr_24425[(14)] = inst_24334);

(statearr_24425[(15)] = inst_24333);

(statearr_24425[(16)] = inst_24335);

return statearr_24425;
})();
var statearr_24426_24467 = state_24391__$1;
(statearr_24426_24467[(2)] = null);

(statearr_24426_24467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (10))){
var inst_24332 = (state_24391[(13)]);
var inst_24334 = (state_24391[(14)]);
var inst_24333 = (state_24391[(15)]);
var inst_24335 = (state_24391[(16)]);
var inst_24340 = cljs.core._nth.call(null,inst_24333,inst_24335);
var inst_24341 = cljs.core.async.muxch_STAR_.call(null,inst_24340);
var inst_24342 = cljs.core.async.close_BANG_.call(null,inst_24341);
var inst_24343 = (inst_24335 + (1));
var tmp24421 = inst_24332;
var tmp24422 = inst_24334;
var tmp24423 = inst_24333;
var inst_24332__$1 = tmp24421;
var inst_24333__$1 = tmp24423;
var inst_24334__$1 = tmp24422;
var inst_24335__$1 = inst_24343;
var state_24391__$1 = (function (){var statearr_24427 = state_24391;
(statearr_24427[(13)] = inst_24332__$1);

(statearr_24427[(14)] = inst_24334__$1);

(statearr_24427[(15)] = inst_24333__$1);

(statearr_24427[(16)] = inst_24335__$1);

(statearr_24427[(17)] = inst_24342);

return statearr_24427;
})();
var statearr_24428_24468 = state_24391__$1;
(statearr_24428_24468[(2)] = null);

(statearr_24428_24468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (18))){
var inst_24361 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24429_24469 = state_24391__$1;
(statearr_24429_24469[(2)] = inst_24361);

(statearr_24429_24469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (8))){
var inst_24334 = (state_24391[(14)]);
var inst_24335 = (state_24391[(16)]);
var inst_24337 = (inst_24335 < inst_24334);
var inst_24338 = inst_24337;
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24338)){
var statearr_24430_24470 = state_24391__$1;
(statearr_24430_24470[(1)] = (10));

} else {
var statearr_24431_24471 = state_24391__$1;
(statearr_24431_24471[(1)] = (11));

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
});})(c__22490__auto___24443,mults,ensure_mult,p))
;
return ((function (switch__22378__auto__,c__22490__auto___24443,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_24435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24435[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_24435[(1)] = (1));

return statearr_24435;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_24391){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24436){if((e24436 instanceof Object)){
var ex__22382__auto__ = e24436;
var statearr_24437_24472 = state_24391;
(statearr_24437_24472[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24473 = state_24391;
state_24391 = G__24473;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24443,mults,ensure_mult,p))
})();
var state__22492__auto__ = (function (){var statearr_24438 = f__22491__auto__.call(null);
(statearr_24438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24443);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24443,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24474 = [];
var len__21393__auto___24477 = arguments.length;
var i__21394__auto___24478 = (0);
while(true){
if((i__21394__auto___24478 < len__21393__auto___24477)){
args24474.push((arguments[i__21394__auto___24478]));

var G__24479 = (i__21394__auto___24478 + (1));
i__21394__auto___24478 = G__24479;
continue;
} else {
}
break;
}

var G__24476 = args24474.length;
switch (G__24476) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24474.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24481 = [];
var len__21393__auto___24484 = arguments.length;
var i__21394__auto___24485 = (0);
while(true){
if((i__21394__auto___24485 < len__21393__auto___24484)){
args24481.push((arguments[i__21394__auto___24485]));

var G__24486 = (i__21394__auto___24485 + (1));
i__21394__auto___24485 = G__24486;
continue;
} else {
}
break;
}

var G__24483 = args24481.length;
switch (G__24483) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24481.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24488 = [];
var len__21393__auto___24559 = arguments.length;
var i__21394__auto___24560 = (0);
while(true){
if((i__21394__auto___24560 < len__21393__auto___24559)){
args24488.push((arguments[i__21394__auto___24560]));

var G__24561 = (i__21394__auto___24560 + (1));
i__21394__auto___24560 = G__24561;
continue;
} else {
}
break;
}

var G__24490 = args24488.length;
switch (G__24490) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24488.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22490__auto___24563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24529){
var state_val_24530 = (state_24529[(1)]);
if((state_val_24530 === (7))){
var state_24529__$1 = state_24529;
var statearr_24531_24564 = state_24529__$1;
(statearr_24531_24564[(2)] = null);

(statearr_24531_24564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (1))){
var state_24529__$1 = state_24529;
var statearr_24532_24565 = state_24529__$1;
(statearr_24532_24565[(2)] = null);

(statearr_24532_24565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (4))){
var inst_24493 = (state_24529[(7)]);
var inst_24495 = (inst_24493 < cnt);
var state_24529__$1 = state_24529;
if(cljs.core.truth_(inst_24495)){
var statearr_24533_24566 = state_24529__$1;
(statearr_24533_24566[(1)] = (6));

} else {
var statearr_24534_24567 = state_24529__$1;
(statearr_24534_24567[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (15))){
var inst_24525 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
var statearr_24535_24568 = state_24529__$1;
(statearr_24535_24568[(2)] = inst_24525);

(statearr_24535_24568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (13))){
var inst_24518 = cljs.core.async.close_BANG_.call(null,out);
var state_24529__$1 = state_24529;
var statearr_24536_24569 = state_24529__$1;
(statearr_24536_24569[(2)] = inst_24518);

(statearr_24536_24569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (6))){
var state_24529__$1 = state_24529;
var statearr_24537_24570 = state_24529__$1;
(statearr_24537_24570[(2)] = null);

(statearr_24537_24570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (3))){
var inst_24527 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24529__$1,inst_24527);
} else {
if((state_val_24530 === (12))){
var inst_24515 = (state_24529[(8)]);
var inst_24515__$1 = (state_24529[(2)]);
var inst_24516 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24515__$1);
var state_24529__$1 = (function (){var statearr_24538 = state_24529;
(statearr_24538[(8)] = inst_24515__$1);

return statearr_24538;
})();
if(cljs.core.truth_(inst_24516)){
var statearr_24539_24571 = state_24529__$1;
(statearr_24539_24571[(1)] = (13));

} else {
var statearr_24540_24572 = state_24529__$1;
(statearr_24540_24572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (2))){
var inst_24492 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24493 = (0);
var state_24529__$1 = (function (){var statearr_24541 = state_24529;
(statearr_24541[(9)] = inst_24492);

(statearr_24541[(7)] = inst_24493);

return statearr_24541;
})();
var statearr_24542_24573 = state_24529__$1;
(statearr_24542_24573[(2)] = null);

(statearr_24542_24573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (11))){
var inst_24493 = (state_24529[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24529,(10),Object,null,(9));
var inst_24502 = chs__$1.call(null,inst_24493);
var inst_24503 = done.call(null,inst_24493);
var inst_24504 = cljs.core.async.take_BANG_.call(null,inst_24502,inst_24503);
var state_24529__$1 = state_24529;
var statearr_24543_24574 = state_24529__$1;
(statearr_24543_24574[(2)] = inst_24504);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (9))){
var inst_24493 = (state_24529[(7)]);
var inst_24506 = (state_24529[(2)]);
var inst_24507 = (inst_24493 + (1));
var inst_24493__$1 = inst_24507;
var state_24529__$1 = (function (){var statearr_24544 = state_24529;
(statearr_24544[(10)] = inst_24506);

(statearr_24544[(7)] = inst_24493__$1);

return statearr_24544;
})();
var statearr_24545_24575 = state_24529__$1;
(statearr_24545_24575[(2)] = null);

(statearr_24545_24575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (5))){
var inst_24513 = (state_24529[(2)]);
var state_24529__$1 = (function (){var statearr_24546 = state_24529;
(statearr_24546[(11)] = inst_24513);

return statearr_24546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24529__$1,(12),dchan);
} else {
if((state_val_24530 === (14))){
var inst_24515 = (state_24529[(8)]);
var inst_24520 = cljs.core.apply.call(null,f,inst_24515);
var state_24529__$1 = state_24529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24529__$1,(16),out,inst_24520);
} else {
if((state_val_24530 === (16))){
var inst_24522 = (state_24529[(2)]);
var state_24529__$1 = (function (){var statearr_24547 = state_24529;
(statearr_24547[(12)] = inst_24522);

return statearr_24547;
})();
var statearr_24548_24576 = state_24529__$1;
(statearr_24548_24576[(2)] = null);

(statearr_24548_24576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (10))){
var inst_24497 = (state_24529[(2)]);
var inst_24498 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24529__$1 = (function (){var statearr_24549 = state_24529;
(statearr_24549[(13)] = inst_24497);

return statearr_24549;
})();
var statearr_24550_24577 = state_24529__$1;
(statearr_24550_24577[(2)] = inst_24498);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24530 === (8))){
var inst_24511 = (state_24529[(2)]);
var state_24529__$1 = state_24529;
var statearr_24551_24578 = state_24529__$1;
(statearr_24551_24578[(2)] = inst_24511);

(statearr_24551_24578[(1)] = (5));


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
});})(c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22378__auto__,c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_24555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24555[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_24555[(1)] = (1));

return statearr_24555;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_24529){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24556){if((e24556 instanceof Object)){
var ex__22382__auto__ = e24556;
var statearr_24557_24579 = state_24529;
(statearr_24557_24579[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24580 = state_24529;
state_24529 = G__24580;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_24529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_24529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22492__auto__ = (function (){var statearr_24558 = f__22491__auto__.call(null);
(statearr_24558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24563);

return statearr_24558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24563,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24582 = [];
var len__21393__auto___24640 = arguments.length;
var i__21394__auto___24641 = (0);
while(true){
if((i__21394__auto___24641 < len__21393__auto___24640)){
args24582.push((arguments[i__21394__auto___24641]));

var G__24642 = (i__21394__auto___24641 + (1));
i__21394__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var G__24584 = args24582.length;
switch (G__24584) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24582.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___24644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24644,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24644,out){
return (function (state_24616){
var state_val_24617 = (state_24616[(1)]);
if((state_val_24617 === (7))){
var inst_24596 = (state_24616[(7)]);
var inst_24595 = (state_24616[(8)]);
var inst_24595__$1 = (state_24616[(2)]);
var inst_24596__$1 = cljs.core.nth.call(null,inst_24595__$1,(0),null);
var inst_24597 = cljs.core.nth.call(null,inst_24595__$1,(1),null);
var inst_24598 = (inst_24596__$1 == null);
var state_24616__$1 = (function (){var statearr_24618 = state_24616;
(statearr_24618[(7)] = inst_24596__$1);

(statearr_24618[(9)] = inst_24597);

(statearr_24618[(8)] = inst_24595__$1);

return statearr_24618;
})();
if(cljs.core.truth_(inst_24598)){
var statearr_24619_24645 = state_24616__$1;
(statearr_24619_24645[(1)] = (8));

} else {
var statearr_24620_24646 = state_24616__$1;
(statearr_24620_24646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (1))){
var inst_24585 = cljs.core.vec.call(null,chs);
var inst_24586 = inst_24585;
var state_24616__$1 = (function (){var statearr_24621 = state_24616;
(statearr_24621[(10)] = inst_24586);

return statearr_24621;
})();
var statearr_24622_24647 = state_24616__$1;
(statearr_24622_24647[(2)] = null);

(statearr_24622_24647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (4))){
var inst_24586 = (state_24616[(10)]);
var state_24616__$1 = state_24616;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24616__$1,(7),inst_24586);
} else {
if((state_val_24617 === (6))){
var inst_24612 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24623_24648 = state_24616__$1;
(statearr_24623_24648[(2)] = inst_24612);

(statearr_24623_24648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (3))){
var inst_24614 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24616__$1,inst_24614);
} else {
if((state_val_24617 === (2))){
var inst_24586 = (state_24616[(10)]);
var inst_24588 = cljs.core.count.call(null,inst_24586);
var inst_24589 = (inst_24588 > (0));
var state_24616__$1 = state_24616;
if(cljs.core.truth_(inst_24589)){
var statearr_24625_24649 = state_24616__$1;
(statearr_24625_24649[(1)] = (4));

} else {
var statearr_24626_24650 = state_24616__$1;
(statearr_24626_24650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (11))){
var inst_24586 = (state_24616[(10)]);
var inst_24605 = (state_24616[(2)]);
var tmp24624 = inst_24586;
var inst_24586__$1 = tmp24624;
var state_24616__$1 = (function (){var statearr_24627 = state_24616;
(statearr_24627[(10)] = inst_24586__$1);

(statearr_24627[(11)] = inst_24605);

return statearr_24627;
})();
var statearr_24628_24651 = state_24616__$1;
(statearr_24628_24651[(2)] = null);

(statearr_24628_24651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (9))){
var inst_24596 = (state_24616[(7)]);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24616__$1,(11),out,inst_24596);
} else {
if((state_val_24617 === (5))){
var inst_24610 = cljs.core.async.close_BANG_.call(null,out);
var state_24616__$1 = state_24616;
var statearr_24629_24652 = state_24616__$1;
(statearr_24629_24652[(2)] = inst_24610);

(statearr_24629_24652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (10))){
var inst_24608 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24630_24653 = state_24616__$1;
(statearr_24630_24653[(2)] = inst_24608);

(statearr_24630_24653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (8))){
var inst_24586 = (state_24616[(10)]);
var inst_24596 = (state_24616[(7)]);
var inst_24597 = (state_24616[(9)]);
var inst_24595 = (state_24616[(8)]);
var inst_24600 = (function (){var cs = inst_24586;
var vec__24591 = inst_24595;
var v = inst_24596;
var c = inst_24597;
return ((function (cs,vec__24591,v,c,inst_24586,inst_24596,inst_24597,inst_24595,state_val_24617,c__22490__auto___24644,out){
return (function (p1__24581_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24581_SHARP_);
});
;})(cs,vec__24591,v,c,inst_24586,inst_24596,inst_24597,inst_24595,state_val_24617,c__22490__auto___24644,out))
})();
var inst_24601 = cljs.core.filterv.call(null,inst_24600,inst_24586);
var inst_24586__$1 = inst_24601;
var state_24616__$1 = (function (){var statearr_24631 = state_24616;
(statearr_24631[(10)] = inst_24586__$1);

return statearr_24631;
})();
var statearr_24632_24654 = state_24616__$1;
(statearr_24632_24654[(2)] = null);

(statearr_24632_24654[(1)] = (2));


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
});})(c__22490__auto___24644,out))
;
return ((function (switch__22378__auto__,c__22490__auto___24644,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_24636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24636[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_24636[(1)] = (1));

return statearr_24636;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_24616){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24637){if((e24637 instanceof Object)){
var ex__22382__auto__ = e24637;
var statearr_24638_24655 = state_24616;
(statearr_24638_24655[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24656 = state_24616;
state_24616 = G__24656;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24644,out))
})();
var state__22492__auto__ = (function (){var statearr_24639 = f__22491__auto__.call(null);
(statearr_24639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24644);

return statearr_24639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24644,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24657 = [];
var len__21393__auto___24706 = arguments.length;
var i__21394__auto___24707 = (0);
while(true){
if((i__21394__auto___24707 < len__21393__auto___24706)){
args24657.push((arguments[i__21394__auto___24707]));

var G__24708 = (i__21394__auto___24707 + (1));
i__21394__auto___24707 = G__24708;
continue;
} else {
}
break;
}

var G__24659 = args24657.length;
switch (G__24659) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24657.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___24710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24710,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24710,out){
return (function (state_24683){
var state_val_24684 = (state_24683[(1)]);
if((state_val_24684 === (7))){
var inst_24665 = (state_24683[(7)]);
var inst_24665__$1 = (state_24683[(2)]);
var inst_24666 = (inst_24665__$1 == null);
var inst_24667 = cljs.core.not.call(null,inst_24666);
var state_24683__$1 = (function (){var statearr_24685 = state_24683;
(statearr_24685[(7)] = inst_24665__$1);

return statearr_24685;
})();
if(inst_24667){
var statearr_24686_24711 = state_24683__$1;
(statearr_24686_24711[(1)] = (8));

} else {
var statearr_24687_24712 = state_24683__$1;
(statearr_24687_24712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (1))){
var inst_24660 = (0);
var state_24683__$1 = (function (){var statearr_24688 = state_24683;
(statearr_24688[(8)] = inst_24660);

return statearr_24688;
})();
var statearr_24689_24713 = state_24683__$1;
(statearr_24689_24713[(2)] = null);

(statearr_24689_24713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (4))){
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24683__$1,(7),ch);
} else {
if((state_val_24684 === (6))){
var inst_24678 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24690_24714 = state_24683__$1;
(statearr_24690_24714[(2)] = inst_24678);

(statearr_24690_24714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (3))){
var inst_24680 = (state_24683[(2)]);
var inst_24681 = cljs.core.async.close_BANG_.call(null,out);
var state_24683__$1 = (function (){var statearr_24691 = state_24683;
(statearr_24691[(9)] = inst_24680);

return statearr_24691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24683__$1,inst_24681);
} else {
if((state_val_24684 === (2))){
var inst_24660 = (state_24683[(8)]);
var inst_24662 = (inst_24660 < n);
var state_24683__$1 = state_24683;
if(cljs.core.truth_(inst_24662)){
var statearr_24692_24715 = state_24683__$1;
(statearr_24692_24715[(1)] = (4));

} else {
var statearr_24693_24716 = state_24683__$1;
(statearr_24693_24716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (11))){
var inst_24660 = (state_24683[(8)]);
var inst_24670 = (state_24683[(2)]);
var inst_24671 = (inst_24660 + (1));
var inst_24660__$1 = inst_24671;
var state_24683__$1 = (function (){var statearr_24694 = state_24683;
(statearr_24694[(8)] = inst_24660__$1);

(statearr_24694[(10)] = inst_24670);

return statearr_24694;
})();
var statearr_24695_24717 = state_24683__$1;
(statearr_24695_24717[(2)] = null);

(statearr_24695_24717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (9))){
var state_24683__$1 = state_24683;
var statearr_24696_24718 = state_24683__$1;
(statearr_24696_24718[(2)] = null);

(statearr_24696_24718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (5))){
var state_24683__$1 = state_24683;
var statearr_24697_24719 = state_24683__$1;
(statearr_24697_24719[(2)] = null);

(statearr_24697_24719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (10))){
var inst_24675 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24698_24720 = state_24683__$1;
(statearr_24698_24720[(2)] = inst_24675);

(statearr_24698_24720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (8))){
var inst_24665 = (state_24683[(7)]);
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24683__$1,(11),out,inst_24665);
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
});})(c__22490__auto___24710,out))
;
return ((function (switch__22378__auto__,c__22490__auto___24710,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_24702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24702[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_24702[(1)] = (1));

return statearr_24702;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_24683){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24703){if((e24703 instanceof Object)){
var ex__22382__auto__ = e24703;
var statearr_24704_24721 = state_24683;
(statearr_24704_24721[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24722 = state_24683;
state_24683 = G__24722;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_24683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_24683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24710,out))
})();
var state__22492__auto__ = (function (){var statearr_24705 = f__22491__auto__.call(null);
(statearr_24705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24710);

return statearr_24705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24710,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24730 = (function (f,ch,meta24731){
this.f = f;
this.ch = ch;
this.meta24731 = meta24731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24732,meta24731__$1){
var self__ = this;
var _24732__$1 = this;
return (new cljs.core.async.t_cljs$core$async24730(self__.f,self__.ch,meta24731__$1));
});

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24732){
var self__ = this;
var _24732__$1 = this;
return self__.meta24731;
});

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24733 = (function (f,ch,meta24731,_,fn1,meta24734){
this.f = f;
this.ch = ch;
this.meta24731 = meta24731;
this._ = _;
this.fn1 = fn1;
this.meta24734 = meta24734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24735,meta24734__$1){
var self__ = this;
var _24735__$1 = this;
return (new cljs.core.async.t_cljs$core$async24733(self__.f,self__.ch,self__.meta24731,self__._,self__.fn1,meta24734__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24735){
var self__ = this;
var _24735__$1 = this;
return self__.meta24734;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24723_SHARP_){
return f1.call(null,(((p1__24723_SHARP_ == null))?null:self__.f.call(null,p1__24723_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24731","meta24731",775193494,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24730","cljs.core.async/t_cljs$core$async24730",-2130625707,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24734","meta24734",426606842,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24733";

cljs.core.async.t_cljs$core$async24733.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24733");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24733 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24733(f__$1,ch__$1,meta24731__$1,___$2,fn1__$1,meta24734){
return (new cljs.core.async.t_cljs$core$async24733(f__$1,ch__$1,meta24731__$1,___$2,fn1__$1,meta24734));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24733(self__.f,self__.ch,self__.meta24731,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20273__auto__ = ret;
if(cljs.core.truth_(and__20273__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20273__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24731","meta24731",775193494,null)], null);
});

cljs.core.async.t_cljs$core$async24730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24730";

cljs.core.async.t_cljs$core$async24730.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24730");
});

cljs.core.async.__GT_t_cljs$core$async24730 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24730(f__$1,ch__$1,meta24731){
return (new cljs.core.async.t_cljs$core$async24730(f__$1,ch__$1,meta24731));
});

}

return (new cljs.core.async.t_cljs$core$async24730(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24739 = (function (f,ch,meta24740){
this.f = f;
this.ch = ch;
this.meta24740 = meta24740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24741,meta24740__$1){
var self__ = this;
var _24741__$1 = this;
return (new cljs.core.async.t_cljs$core$async24739(self__.f,self__.ch,meta24740__$1));
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24741){
var self__ = this;
var _24741__$1 = this;
return self__.meta24740;
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24740","meta24740",267798083,null)], null);
});

cljs.core.async.t_cljs$core$async24739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24739";

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24739");
});

cljs.core.async.__GT_t_cljs$core$async24739 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24739(f__$1,ch__$1,meta24740){
return (new cljs.core.async.t_cljs$core$async24739(f__$1,ch__$1,meta24740));
});

}

return (new cljs.core.async.t_cljs$core$async24739(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24745 = (function (p,ch,meta24746){
this.p = p;
this.ch = ch;
this.meta24746 = meta24746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24747,meta24746__$1){
var self__ = this;
var _24747__$1 = this;
return (new cljs.core.async.t_cljs$core$async24745(self__.p,self__.ch,meta24746__$1));
});

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24747){
var self__ = this;
var _24747__$1 = this;
return self__.meta24746;
});

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24746","meta24746",1667636856,null)], null);
});

cljs.core.async.t_cljs$core$async24745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24745";

cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.core.async/t_cljs$core$async24745");
});

cljs.core.async.__GT_t_cljs$core$async24745 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24745(p__$1,ch__$1,meta24746){
return (new cljs.core.async.t_cljs$core$async24745(p__$1,ch__$1,meta24746));
});

}

return (new cljs.core.async.t_cljs$core$async24745(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24748 = [];
var len__21393__auto___24792 = arguments.length;
var i__21394__auto___24793 = (0);
while(true){
if((i__21394__auto___24793 < len__21393__auto___24792)){
args24748.push((arguments[i__21394__auto___24793]));

var G__24794 = (i__21394__auto___24793 + (1));
i__21394__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___24796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___24796,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___24796,out){
return (function (state_24771){
var state_val_24772 = (state_24771[(1)]);
if((state_val_24772 === (7))){
var inst_24767 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24773_24797 = state_24771__$1;
(statearr_24773_24797[(2)] = inst_24767);

(statearr_24773_24797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (1))){
var state_24771__$1 = state_24771;
var statearr_24774_24798 = state_24771__$1;
(statearr_24774_24798[(2)] = null);

(statearr_24774_24798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (4))){
var inst_24753 = (state_24771[(7)]);
var inst_24753__$1 = (state_24771[(2)]);
var inst_24754 = (inst_24753__$1 == null);
var state_24771__$1 = (function (){var statearr_24775 = state_24771;
(statearr_24775[(7)] = inst_24753__$1);

return statearr_24775;
})();
if(cljs.core.truth_(inst_24754)){
var statearr_24776_24799 = state_24771__$1;
(statearr_24776_24799[(1)] = (5));

} else {
var statearr_24777_24800 = state_24771__$1;
(statearr_24777_24800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (6))){
var inst_24753 = (state_24771[(7)]);
var inst_24758 = p.call(null,inst_24753);
var state_24771__$1 = state_24771;
if(cljs.core.truth_(inst_24758)){
var statearr_24778_24801 = state_24771__$1;
(statearr_24778_24801[(1)] = (8));

} else {
var statearr_24779_24802 = state_24771__$1;
(statearr_24779_24802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (3))){
var inst_24769 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24771__$1,inst_24769);
} else {
if((state_val_24772 === (2))){
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24771__$1,(4),ch);
} else {
if((state_val_24772 === (11))){
var inst_24761 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24780_24803 = state_24771__$1;
(statearr_24780_24803[(2)] = inst_24761);

(statearr_24780_24803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (9))){
var state_24771__$1 = state_24771;
var statearr_24781_24804 = state_24771__$1;
(statearr_24781_24804[(2)] = null);

(statearr_24781_24804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (5))){
var inst_24756 = cljs.core.async.close_BANG_.call(null,out);
var state_24771__$1 = state_24771;
var statearr_24782_24805 = state_24771__$1;
(statearr_24782_24805[(2)] = inst_24756);

(statearr_24782_24805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (10))){
var inst_24764 = (state_24771[(2)]);
var state_24771__$1 = (function (){var statearr_24783 = state_24771;
(statearr_24783[(8)] = inst_24764);

return statearr_24783;
})();
var statearr_24784_24806 = state_24771__$1;
(statearr_24784_24806[(2)] = null);

(statearr_24784_24806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (8))){
var inst_24753 = (state_24771[(7)]);
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24771__$1,(11),out,inst_24753);
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
});})(c__22490__auto___24796,out))
;
return ((function (switch__22378__auto__,c__22490__auto___24796,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_24788 = [null,null,null,null,null,null,null,null,null];
(statearr_24788[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_24788[(1)] = (1));

return statearr_24788;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_24771){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object)){
var ex__22382__auto__ = e24789;
var statearr_24790_24807 = state_24771;
(statearr_24790_24807[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24808 = state_24771;
state_24771 = G__24808;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_24771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_24771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___24796,out))
})();
var state__22492__auto__ = (function (){var statearr_24791 = f__22491__auto__.call(null);
(statearr_24791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___24796);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___24796,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24809 = [];
var len__21393__auto___24812 = arguments.length;
var i__21394__auto___24813 = (0);
while(true){
if((i__21394__auto___24813 < len__21393__auto___24812)){
args24809.push((arguments[i__21394__auto___24813]));

var G__24814 = (i__21394__auto___24813 + (1));
i__21394__auto___24813 = G__24814;
continue;
} else {
}
break;
}

var G__24811 = args24809.length;
switch (G__24811) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24809.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_24981){
var state_val_24982 = (state_24981[(1)]);
if((state_val_24982 === (7))){
var inst_24977 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24983_25024 = state_24981__$1;
(statearr_24983_25024[(2)] = inst_24977);

(statearr_24983_25024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (20))){
var inst_24947 = (state_24981[(7)]);
var inst_24958 = (state_24981[(2)]);
var inst_24959 = cljs.core.next.call(null,inst_24947);
var inst_24933 = inst_24959;
var inst_24934 = null;
var inst_24935 = (0);
var inst_24936 = (0);
var state_24981__$1 = (function (){var statearr_24984 = state_24981;
(statearr_24984[(8)] = inst_24936);

(statearr_24984[(9)] = inst_24935);

(statearr_24984[(10)] = inst_24958);

(statearr_24984[(11)] = inst_24934);

(statearr_24984[(12)] = inst_24933);

return statearr_24984;
})();
var statearr_24985_25025 = state_24981__$1;
(statearr_24985_25025[(2)] = null);

(statearr_24985_25025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (1))){
var state_24981__$1 = state_24981;
var statearr_24986_25026 = state_24981__$1;
(statearr_24986_25026[(2)] = null);

(statearr_24986_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (4))){
var inst_24922 = (state_24981[(13)]);
var inst_24922__$1 = (state_24981[(2)]);
var inst_24923 = (inst_24922__$1 == null);
var state_24981__$1 = (function (){var statearr_24987 = state_24981;
(statearr_24987[(13)] = inst_24922__$1);

return statearr_24987;
})();
if(cljs.core.truth_(inst_24923)){
var statearr_24988_25027 = state_24981__$1;
(statearr_24988_25027[(1)] = (5));

} else {
var statearr_24989_25028 = state_24981__$1;
(statearr_24989_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (15))){
var state_24981__$1 = state_24981;
var statearr_24993_25029 = state_24981__$1;
(statearr_24993_25029[(2)] = null);

(statearr_24993_25029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (21))){
var state_24981__$1 = state_24981;
var statearr_24994_25030 = state_24981__$1;
(statearr_24994_25030[(2)] = null);

(statearr_24994_25030[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (13))){
var inst_24936 = (state_24981[(8)]);
var inst_24935 = (state_24981[(9)]);
var inst_24934 = (state_24981[(11)]);
var inst_24933 = (state_24981[(12)]);
var inst_24943 = (state_24981[(2)]);
var inst_24944 = (inst_24936 + (1));
var tmp24990 = inst_24935;
var tmp24991 = inst_24934;
var tmp24992 = inst_24933;
var inst_24933__$1 = tmp24992;
var inst_24934__$1 = tmp24991;
var inst_24935__$1 = tmp24990;
var inst_24936__$1 = inst_24944;
var state_24981__$1 = (function (){var statearr_24995 = state_24981;
(statearr_24995[(14)] = inst_24943);

(statearr_24995[(8)] = inst_24936__$1);

(statearr_24995[(9)] = inst_24935__$1);

(statearr_24995[(11)] = inst_24934__$1);

(statearr_24995[(12)] = inst_24933__$1);

return statearr_24995;
})();
var statearr_24996_25031 = state_24981__$1;
(statearr_24996_25031[(2)] = null);

(statearr_24996_25031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (22))){
var state_24981__$1 = state_24981;
var statearr_24997_25032 = state_24981__$1;
(statearr_24997_25032[(2)] = null);

(statearr_24997_25032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (6))){
var inst_24922 = (state_24981[(13)]);
var inst_24931 = f.call(null,inst_24922);
var inst_24932 = cljs.core.seq.call(null,inst_24931);
var inst_24933 = inst_24932;
var inst_24934 = null;
var inst_24935 = (0);
var inst_24936 = (0);
var state_24981__$1 = (function (){var statearr_24998 = state_24981;
(statearr_24998[(8)] = inst_24936);

(statearr_24998[(9)] = inst_24935);

(statearr_24998[(11)] = inst_24934);

(statearr_24998[(12)] = inst_24933);

return statearr_24998;
})();
var statearr_24999_25033 = state_24981__$1;
(statearr_24999_25033[(2)] = null);

(statearr_24999_25033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (17))){
var inst_24947 = (state_24981[(7)]);
var inst_24951 = cljs.core.chunk_first.call(null,inst_24947);
var inst_24952 = cljs.core.chunk_rest.call(null,inst_24947);
var inst_24953 = cljs.core.count.call(null,inst_24951);
var inst_24933 = inst_24952;
var inst_24934 = inst_24951;
var inst_24935 = inst_24953;
var inst_24936 = (0);
var state_24981__$1 = (function (){var statearr_25000 = state_24981;
(statearr_25000[(8)] = inst_24936);

(statearr_25000[(9)] = inst_24935);

(statearr_25000[(11)] = inst_24934);

(statearr_25000[(12)] = inst_24933);

return statearr_25000;
})();
var statearr_25001_25034 = state_24981__$1;
(statearr_25001_25034[(2)] = null);

(statearr_25001_25034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (3))){
var inst_24979 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24981__$1,inst_24979);
} else {
if((state_val_24982 === (12))){
var inst_24967 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25002_25035 = state_24981__$1;
(statearr_25002_25035[(2)] = inst_24967);

(statearr_25002_25035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (2))){
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(4),in$);
} else {
if((state_val_24982 === (23))){
var inst_24975 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25003_25036 = state_24981__$1;
(statearr_25003_25036[(2)] = inst_24975);

(statearr_25003_25036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (19))){
var inst_24962 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25004_25037 = state_24981__$1;
(statearr_25004_25037[(2)] = inst_24962);

(statearr_25004_25037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (11))){
var inst_24947 = (state_24981[(7)]);
var inst_24933 = (state_24981[(12)]);
var inst_24947__$1 = cljs.core.seq.call(null,inst_24933);
var state_24981__$1 = (function (){var statearr_25005 = state_24981;
(statearr_25005[(7)] = inst_24947__$1);

return statearr_25005;
})();
if(inst_24947__$1){
var statearr_25006_25038 = state_24981__$1;
(statearr_25006_25038[(1)] = (14));

} else {
var statearr_25007_25039 = state_24981__$1;
(statearr_25007_25039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (9))){
var inst_24969 = (state_24981[(2)]);
var inst_24970 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24981__$1 = (function (){var statearr_25008 = state_24981;
(statearr_25008[(15)] = inst_24969);

return statearr_25008;
})();
if(cljs.core.truth_(inst_24970)){
var statearr_25009_25040 = state_24981__$1;
(statearr_25009_25040[(1)] = (21));

} else {
var statearr_25010_25041 = state_24981__$1;
(statearr_25010_25041[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (5))){
var inst_24925 = cljs.core.async.close_BANG_.call(null,out);
var state_24981__$1 = state_24981;
var statearr_25011_25042 = state_24981__$1;
(statearr_25011_25042[(2)] = inst_24925);

(statearr_25011_25042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (14))){
var inst_24947 = (state_24981[(7)]);
var inst_24949 = cljs.core.chunked_seq_QMARK_.call(null,inst_24947);
var state_24981__$1 = state_24981;
if(inst_24949){
var statearr_25012_25043 = state_24981__$1;
(statearr_25012_25043[(1)] = (17));

} else {
var statearr_25013_25044 = state_24981__$1;
(statearr_25013_25044[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (16))){
var inst_24965 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_25014_25045 = state_24981__$1;
(statearr_25014_25045[(2)] = inst_24965);

(statearr_25014_25045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (10))){
var inst_24936 = (state_24981[(8)]);
var inst_24934 = (state_24981[(11)]);
var inst_24941 = cljs.core._nth.call(null,inst_24934,inst_24936);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24981__$1,(13),out,inst_24941);
} else {
if((state_val_24982 === (18))){
var inst_24947 = (state_24981[(7)]);
var inst_24956 = cljs.core.first.call(null,inst_24947);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24981__$1,(20),out,inst_24956);
} else {
if((state_val_24982 === (8))){
var inst_24936 = (state_24981[(8)]);
var inst_24935 = (state_24981[(9)]);
var inst_24938 = (inst_24936 < inst_24935);
var inst_24939 = inst_24938;
var state_24981__$1 = state_24981;
if(cljs.core.truth_(inst_24939)){
var statearr_25015_25046 = state_24981__$1;
(statearr_25015_25046[(1)] = (10));

} else {
var statearr_25016_25047 = state_24981__$1;
(statearr_25016_25047[(1)] = (11));

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
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____1 = (function (state_24981){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_24981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__22382__auto__ = e25021;
var statearr_25022_25048 = state_24981;
(statearr_25022_25048[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25049 = state_24981;
state_24981 = G__25049;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__ = function(state_24981){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____1.call(this,state_24981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22379__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_25023 = f__22491__auto__.call(null);
(statearr_25023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25050 = [];
var len__21393__auto___25053 = arguments.length;
var i__21394__auto___25054 = (0);
while(true){
if((i__21394__auto___25054 < len__21393__auto___25053)){
args25050.push((arguments[i__21394__auto___25054]));

var G__25055 = (i__21394__auto___25054 + (1));
i__21394__auto___25054 = G__25055;
continue;
} else {
}
break;
}

var G__25052 = args25050.length;
switch (G__25052) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25050.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25057 = [];
var len__21393__auto___25060 = arguments.length;
var i__21394__auto___25061 = (0);
while(true){
if((i__21394__auto___25061 < len__21393__auto___25060)){
args25057.push((arguments[i__21394__auto___25061]));

var G__25062 = (i__21394__auto___25061 + (1));
i__21394__auto___25061 = G__25062;
continue;
} else {
}
break;
}

var G__25059 = args25057.length;
switch (G__25059) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25057.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25064 = [];
var len__21393__auto___25115 = arguments.length;
var i__21394__auto___25116 = (0);
while(true){
if((i__21394__auto___25116 < len__21393__auto___25115)){
args25064.push((arguments[i__21394__auto___25116]));

var G__25117 = (i__21394__auto___25116 + (1));
i__21394__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var G__25066 = args25064.length;
switch (G__25066) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25064.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___25119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___25119,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___25119,out){
return (function (state_25090){
var state_val_25091 = (state_25090[(1)]);
if((state_val_25091 === (7))){
var inst_25085 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25092_25120 = state_25090__$1;
(statearr_25092_25120[(2)] = inst_25085);

(statearr_25092_25120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (1))){
var inst_25067 = null;
var state_25090__$1 = (function (){var statearr_25093 = state_25090;
(statearr_25093[(7)] = inst_25067);

return statearr_25093;
})();
var statearr_25094_25121 = state_25090__$1;
(statearr_25094_25121[(2)] = null);

(statearr_25094_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (4))){
var inst_25070 = (state_25090[(8)]);
var inst_25070__$1 = (state_25090[(2)]);
var inst_25071 = (inst_25070__$1 == null);
var inst_25072 = cljs.core.not.call(null,inst_25071);
var state_25090__$1 = (function (){var statearr_25095 = state_25090;
(statearr_25095[(8)] = inst_25070__$1);

return statearr_25095;
})();
if(inst_25072){
var statearr_25096_25122 = state_25090__$1;
(statearr_25096_25122[(1)] = (5));

} else {
var statearr_25097_25123 = state_25090__$1;
(statearr_25097_25123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (6))){
var state_25090__$1 = state_25090;
var statearr_25098_25124 = state_25090__$1;
(statearr_25098_25124[(2)] = null);

(statearr_25098_25124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (3))){
var inst_25087 = (state_25090[(2)]);
var inst_25088 = cljs.core.async.close_BANG_.call(null,out);
var state_25090__$1 = (function (){var statearr_25099 = state_25090;
(statearr_25099[(9)] = inst_25087);

return statearr_25099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25090__$1,inst_25088);
} else {
if((state_val_25091 === (2))){
var state_25090__$1 = state_25090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25090__$1,(4),ch);
} else {
if((state_val_25091 === (11))){
var inst_25070 = (state_25090[(8)]);
var inst_25079 = (state_25090[(2)]);
var inst_25067 = inst_25070;
var state_25090__$1 = (function (){var statearr_25100 = state_25090;
(statearr_25100[(10)] = inst_25079);

(statearr_25100[(7)] = inst_25067);

return statearr_25100;
})();
var statearr_25101_25125 = state_25090__$1;
(statearr_25101_25125[(2)] = null);

(statearr_25101_25125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (9))){
var inst_25070 = (state_25090[(8)]);
var state_25090__$1 = state_25090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25090__$1,(11),out,inst_25070);
} else {
if((state_val_25091 === (5))){
var inst_25067 = (state_25090[(7)]);
var inst_25070 = (state_25090[(8)]);
var inst_25074 = cljs.core._EQ_.call(null,inst_25070,inst_25067);
var state_25090__$1 = state_25090;
if(inst_25074){
var statearr_25103_25126 = state_25090__$1;
(statearr_25103_25126[(1)] = (8));

} else {
var statearr_25104_25127 = state_25090__$1;
(statearr_25104_25127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (10))){
var inst_25082 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25105_25128 = state_25090__$1;
(statearr_25105_25128[(2)] = inst_25082);

(statearr_25105_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (8))){
var inst_25067 = (state_25090[(7)]);
var tmp25102 = inst_25067;
var inst_25067__$1 = tmp25102;
var state_25090__$1 = (function (){var statearr_25106 = state_25090;
(statearr_25106[(7)] = inst_25067__$1);

return statearr_25106;
})();
var statearr_25107_25129 = state_25090__$1;
(statearr_25107_25129[(2)] = null);

(statearr_25107_25129[(1)] = (2));


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
});})(c__22490__auto___25119,out))
;
return ((function (switch__22378__auto__,c__22490__auto___25119,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25111[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_25111[(1)] = (1));

return statearr_25111;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_25090){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_25090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object)){
var ex__22382__auto__ = e25112;
var statearr_25113_25130 = state_25090;
(statearr_25113_25130[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_25090;
state_25090 = G__25131;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_25090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_25090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___25119,out))
})();
var state__22492__auto__ = (function (){var statearr_25114 = f__22491__auto__.call(null);
(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___25119);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___25119,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25132 = [];
var len__21393__auto___25202 = arguments.length;
var i__21394__auto___25203 = (0);
while(true){
if((i__21394__auto___25203 < len__21393__auto___25202)){
args25132.push((arguments[i__21394__auto___25203]));

var G__25204 = (i__21394__auto___25203 + (1));
i__21394__auto___25203 = G__25204;
continue;
} else {
}
break;
}

var G__25134 = args25132.length;
switch (G__25134) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25132.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___25206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___25206,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___25206,out){
return (function (state_25172){
var state_val_25173 = (state_25172[(1)]);
if((state_val_25173 === (7))){
var inst_25168 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25174_25207 = state_25172__$1;
(statearr_25174_25207[(2)] = inst_25168);

(statearr_25174_25207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (1))){
var inst_25135 = (new Array(n));
var inst_25136 = inst_25135;
var inst_25137 = (0);
var state_25172__$1 = (function (){var statearr_25175 = state_25172;
(statearr_25175[(7)] = inst_25137);

(statearr_25175[(8)] = inst_25136);

return statearr_25175;
})();
var statearr_25176_25208 = state_25172__$1;
(statearr_25176_25208[(2)] = null);

(statearr_25176_25208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (4))){
var inst_25140 = (state_25172[(9)]);
var inst_25140__$1 = (state_25172[(2)]);
var inst_25141 = (inst_25140__$1 == null);
var inst_25142 = cljs.core.not.call(null,inst_25141);
var state_25172__$1 = (function (){var statearr_25177 = state_25172;
(statearr_25177[(9)] = inst_25140__$1);

return statearr_25177;
})();
if(inst_25142){
var statearr_25178_25209 = state_25172__$1;
(statearr_25178_25209[(1)] = (5));

} else {
var statearr_25179_25210 = state_25172__$1;
(statearr_25179_25210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (15))){
var inst_25162 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25180_25211 = state_25172__$1;
(statearr_25180_25211[(2)] = inst_25162);

(statearr_25180_25211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (13))){
var state_25172__$1 = state_25172;
var statearr_25181_25212 = state_25172__$1;
(statearr_25181_25212[(2)] = null);

(statearr_25181_25212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (6))){
var inst_25137 = (state_25172[(7)]);
var inst_25158 = (inst_25137 > (0));
var state_25172__$1 = state_25172;
if(cljs.core.truth_(inst_25158)){
var statearr_25182_25213 = state_25172__$1;
(statearr_25182_25213[(1)] = (12));

} else {
var statearr_25183_25214 = state_25172__$1;
(statearr_25183_25214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (3))){
var inst_25170 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25172__$1,inst_25170);
} else {
if((state_val_25173 === (12))){
var inst_25136 = (state_25172[(8)]);
var inst_25160 = cljs.core.vec.call(null,inst_25136);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25172__$1,(15),out,inst_25160);
} else {
if((state_val_25173 === (2))){
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25172__$1,(4),ch);
} else {
if((state_val_25173 === (11))){
var inst_25152 = (state_25172[(2)]);
var inst_25153 = (new Array(n));
var inst_25136 = inst_25153;
var inst_25137 = (0);
var state_25172__$1 = (function (){var statearr_25184 = state_25172;
(statearr_25184[(10)] = inst_25152);

(statearr_25184[(7)] = inst_25137);

(statearr_25184[(8)] = inst_25136);

return statearr_25184;
})();
var statearr_25185_25215 = state_25172__$1;
(statearr_25185_25215[(2)] = null);

(statearr_25185_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (9))){
var inst_25136 = (state_25172[(8)]);
var inst_25150 = cljs.core.vec.call(null,inst_25136);
var state_25172__$1 = state_25172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25172__$1,(11),out,inst_25150);
} else {
if((state_val_25173 === (5))){
var inst_25140 = (state_25172[(9)]);
var inst_25145 = (state_25172[(11)]);
var inst_25137 = (state_25172[(7)]);
var inst_25136 = (state_25172[(8)]);
var inst_25144 = (inst_25136[inst_25137] = inst_25140);
var inst_25145__$1 = (inst_25137 + (1));
var inst_25146 = (inst_25145__$1 < n);
var state_25172__$1 = (function (){var statearr_25186 = state_25172;
(statearr_25186[(11)] = inst_25145__$1);

(statearr_25186[(12)] = inst_25144);

return statearr_25186;
})();
if(cljs.core.truth_(inst_25146)){
var statearr_25187_25216 = state_25172__$1;
(statearr_25187_25216[(1)] = (8));

} else {
var statearr_25188_25217 = state_25172__$1;
(statearr_25188_25217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (14))){
var inst_25165 = (state_25172[(2)]);
var inst_25166 = cljs.core.async.close_BANG_.call(null,out);
var state_25172__$1 = (function (){var statearr_25190 = state_25172;
(statearr_25190[(13)] = inst_25165);

return statearr_25190;
})();
var statearr_25191_25218 = state_25172__$1;
(statearr_25191_25218[(2)] = inst_25166);

(statearr_25191_25218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (10))){
var inst_25156 = (state_25172[(2)]);
var state_25172__$1 = state_25172;
var statearr_25192_25219 = state_25172__$1;
(statearr_25192_25219[(2)] = inst_25156);

(statearr_25192_25219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25173 === (8))){
var inst_25145 = (state_25172[(11)]);
var inst_25136 = (state_25172[(8)]);
var tmp25189 = inst_25136;
var inst_25136__$1 = tmp25189;
var inst_25137 = inst_25145;
var state_25172__$1 = (function (){var statearr_25193 = state_25172;
(statearr_25193[(7)] = inst_25137);

(statearr_25193[(8)] = inst_25136__$1);

return statearr_25193;
})();
var statearr_25194_25220 = state_25172__$1;
(statearr_25194_25220[(2)] = null);

(statearr_25194_25220[(1)] = (2));


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
});})(c__22490__auto___25206,out))
;
return ((function (switch__22378__auto__,c__22490__auto___25206,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_25198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25198[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_25198[(1)] = (1));

return statearr_25198;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_25172){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_25172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25199){if((e25199 instanceof Object)){
var ex__22382__auto__ = e25199;
var statearr_25200_25221 = state_25172;
(statearr_25200_25221[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25222 = state_25172;
state_25172 = G__25222;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_25172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_25172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___25206,out))
})();
var state__22492__auto__ = (function (){var statearr_25201 = f__22491__auto__.call(null);
(statearr_25201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___25206);

return statearr_25201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___25206,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25223 = [];
var len__21393__auto___25297 = arguments.length;
var i__21394__auto___25298 = (0);
while(true){
if((i__21394__auto___25298 < len__21393__auto___25297)){
args25223.push((arguments[i__21394__auto___25298]));

var G__25299 = (i__21394__auto___25298 + (1));
i__21394__auto___25298 = G__25299;
continue;
} else {
}
break;
}

var G__25225 = args25223.length;
switch (G__25225) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25223.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22490__auto___25301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___25301,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___25301,out){
return (function (state_25267){
var state_val_25268 = (state_25267[(1)]);
if((state_val_25268 === (7))){
var inst_25263 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
var statearr_25269_25302 = state_25267__$1;
(statearr_25269_25302[(2)] = inst_25263);

(statearr_25269_25302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (1))){
var inst_25226 = [];
var inst_25227 = inst_25226;
var inst_25228 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25267__$1 = (function (){var statearr_25270 = state_25267;
(statearr_25270[(7)] = inst_25227);

(statearr_25270[(8)] = inst_25228);

return statearr_25270;
})();
var statearr_25271_25303 = state_25267__$1;
(statearr_25271_25303[(2)] = null);

(statearr_25271_25303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (4))){
var inst_25231 = (state_25267[(9)]);
var inst_25231__$1 = (state_25267[(2)]);
var inst_25232 = (inst_25231__$1 == null);
var inst_25233 = cljs.core.not.call(null,inst_25232);
var state_25267__$1 = (function (){var statearr_25272 = state_25267;
(statearr_25272[(9)] = inst_25231__$1);

return statearr_25272;
})();
if(inst_25233){
var statearr_25273_25304 = state_25267__$1;
(statearr_25273_25304[(1)] = (5));

} else {
var statearr_25274_25305 = state_25267__$1;
(statearr_25274_25305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (15))){
var inst_25257 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
var statearr_25275_25306 = state_25267__$1;
(statearr_25275_25306[(2)] = inst_25257);

(statearr_25275_25306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (13))){
var state_25267__$1 = state_25267;
var statearr_25276_25307 = state_25267__$1;
(statearr_25276_25307[(2)] = null);

(statearr_25276_25307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (6))){
var inst_25227 = (state_25267[(7)]);
var inst_25252 = inst_25227.length;
var inst_25253 = (inst_25252 > (0));
var state_25267__$1 = state_25267;
if(cljs.core.truth_(inst_25253)){
var statearr_25277_25308 = state_25267__$1;
(statearr_25277_25308[(1)] = (12));

} else {
var statearr_25278_25309 = state_25267__$1;
(statearr_25278_25309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (3))){
var inst_25265 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25267__$1,inst_25265);
} else {
if((state_val_25268 === (12))){
var inst_25227 = (state_25267[(7)]);
var inst_25255 = cljs.core.vec.call(null,inst_25227);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25267__$1,(15),out,inst_25255);
} else {
if((state_val_25268 === (2))){
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25267__$1,(4),ch);
} else {
if((state_val_25268 === (11))){
var inst_25235 = (state_25267[(10)]);
var inst_25231 = (state_25267[(9)]);
var inst_25245 = (state_25267[(2)]);
var inst_25246 = [];
var inst_25247 = inst_25246.push(inst_25231);
var inst_25227 = inst_25246;
var inst_25228 = inst_25235;
var state_25267__$1 = (function (){var statearr_25279 = state_25267;
(statearr_25279[(7)] = inst_25227);

(statearr_25279[(8)] = inst_25228);

(statearr_25279[(11)] = inst_25247);

(statearr_25279[(12)] = inst_25245);

return statearr_25279;
})();
var statearr_25280_25310 = state_25267__$1;
(statearr_25280_25310[(2)] = null);

(statearr_25280_25310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (9))){
var inst_25227 = (state_25267[(7)]);
var inst_25243 = cljs.core.vec.call(null,inst_25227);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25267__$1,(11),out,inst_25243);
} else {
if((state_val_25268 === (5))){
var inst_25228 = (state_25267[(8)]);
var inst_25235 = (state_25267[(10)]);
var inst_25231 = (state_25267[(9)]);
var inst_25235__$1 = f.call(null,inst_25231);
var inst_25236 = cljs.core._EQ_.call(null,inst_25235__$1,inst_25228);
var inst_25237 = cljs.core.keyword_identical_QMARK_.call(null,inst_25228,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25238 = (inst_25236) || (inst_25237);
var state_25267__$1 = (function (){var statearr_25281 = state_25267;
(statearr_25281[(10)] = inst_25235__$1);

return statearr_25281;
})();
if(cljs.core.truth_(inst_25238)){
var statearr_25282_25311 = state_25267__$1;
(statearr_25282_25311[(1)] = (8));

} else {
var statearr_25283_25312 = state_25267__$1;
(statearr_25283_25312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (14))){
var inst_25260 = (state_25267[(2)]);
var inst_25261 = cljs.core.async.close_BANG_.call(null,out);
var state_25267__$1 = (function (){var statearr_25285 = state_25267;
(statearr_25285[(13)] = inst_25260);

return statearr_25285;
})();
var statearr_25286_25313 = state_25267__$1;
(statearr_25286_25313[(2)] = inst_25261);

(statearr_25286_25313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (10))){
var inst_25250 = (state_25267[(2)]);
var state_25267__$1 = state_25267;
var statearr_25287_25314 = state_25267__$1;
(statearr_25287_25314[(2)] = inst_25250);

(statearr_25287_25314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25268 === (8))){
var inst_25227 = (state_25267[(7)]);
var inst_25235 = (state_25267[(10)]);
var inst_25231 = (state_25267[(9)]);
var inst_25240 = inst_25227.push(inst_25231);
var tmp25284 = inst_25227;
var inst_25227__$1 = tmp25284;
var inst_25228 = inst_25235;
var state_25267__$1 = (function (){var statearr_25288 = state_25267;
(statearr_25288[(7)] = inst_25227__$1);

(statearr_25288[(8)] = inst_25228);

(statearr_25288[(14)] = inst_25240);

return statearr_25288;
})();
var statearr_25289_25315 = state_25267__$1;
(statearr_25289_25315[(2)] = null);

(statearr_25289_25315[(1)] = (2));


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
});})(c__22490__auto___25301,out))
;
return ((function (switch__22378__auto__,c__22490__auto___25301,out){
return (function() {
var cljs$core$async$state_machine__22379__auto__ = null;
var cljs$core$async$state_machine__22379__auto____0 = (function (){
var statearr_25293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25293[(0)] = cljs$core$async$state_machine__22379__auto__);

(statearr_25293[(1)] = (1));

return statearr_25293;
});
var cljs$core$async$state_machine__22379__auto____1 = (function (state_25267){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_25267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e25294){if((e25294 instanceof Object)){
var ex__22382__auto__ = e25294;
var statearr_25295_25316 = state_25267;
(statearr_25295_25316[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25267;
state_25267 = G__25317;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
cljs$core$async$state_machine__22379__auto__ = function(state_25267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22379__auto____1.call(this,state_25267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22379__auto____0;
cljs$core$async$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22379__auto____1;
return cljs$core$async$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___25301,out))
})();
var state__22492__auto__ = (function (){var statearr_25296 = f__22491__auto__.call(null);
(statearr_25296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___25301);

return statearr_25296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___25301,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1493780416915