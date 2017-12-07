const CONTEXT = '__subtree_context__';
const EVENT_SUFFIX = '__event__';
const HAS_BOUND_ASYNC_CONTEXT = '__bound_async_subtree_context__';

let mitt = require('mitt')
let emitter = mitt();

module.exports = {
    pushContext,
    peekContext,
    emitContext,
    subscribeContext
};

function pushContext(out, package, scope, context) {
    if (!out.global[HAS_BOUND_ASYNC_CONTEXT]) {
        out.global[HAS_BOUND_ASYNC_CONTEXT] = true;
        out.on('beginAsync', bindSubtreeContextOnBeginAsync);
    }

    let prevContext = out[CONTEXT]
    let nextContext = out[CONTEXT] = Object.create(prevContext || {});
    nextContext[package] = context;
    nextContext[package+EVENT_SUFFIX] = scope;

    return function popContext() {
        out[CONTEXT] = prevContext;
    };
}

function peekContext(out, package) {
    return out[CONTEXT][package];
}

function emitContext(scope, context) {
    emitter.emit(scope, context);
}

function subscribeContext(out, package, fn) {
    let scope = out[CONTEXT][package+EVENT_SUFFIX];
    emitter.on(scope, fn);
    return function unsubscribeContext() {
        emitter.off(scope, fn);
    };
}

function bindSubtreeContextOnBeginAsync(event) {
    var parentOut = event.parentOut;
    var asyncOut = event.out;

    asyncOut[CONTEXT] = parentOut[CONTEXT];
}