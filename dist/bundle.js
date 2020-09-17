/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Notification.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Notification.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var empty_1 = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
var of_1 = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/internal/observable/of.js");
var throwError_1 = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/ReplaySubject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var queue_1 = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/internal/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var scheduled_1 = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/internal/scheduled/scheduled.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    else {
        return scheduled_1.scheduled(input, scheduler);
    }
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/of.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/throwError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(subscribeToResult_1.subscribeToResult(_this, closingNotifier));
        return _this;
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/debounceTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/debounceTime.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/observeOn.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Notification_1 = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/internal/Notification.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/switchMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/switchMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(switchMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) { return source.lift(new SwitchMapOperator(project)); };
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project) {
        this.project = project;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    };
    return SwitchMapOperator;
}());
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, value, index);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, undefined, undefined, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
            destination.add(this.innerSubscription);
        }
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
        this.unsubscribe();
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        destination.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeUntil.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeUntil.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttle.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = subscribeToResult_1.subscribeToResult(this, duration));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttleTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttleTime.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var throttle_1 = __webpack_require__(/*! ./throttle */ "./node_modules/rxjs/internal/operators/throttle.js");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleIterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_1.iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
exports.scheduleIterable = scheduleIterable;
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleObservable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function scheduleObservable(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
exports.scheduleObservable = scheduleObservable;
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/schedulePromise.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/schedulePromise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function schedulePromise(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () { return input.then(function (value) {
            sub.add(scheduler.schedule(function () {
                subscriber.next(value);
                sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
            }));
        }, function (err) {
            sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
        }); }));
        return sub;
    });
}
exports.schedulePromise = schedulePromise;
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduled.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduled.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scheduleObservable_1 = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js");
var schedulePromise_1 = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/internal/scheduled/schedulePromise.js");
var scheduleArray_1 = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
var scheduleIterable_1 = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.scheduled = scheduled;
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/queue.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUnsubscribedErrorImpl = (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = void 0;
        try {
            item = iterator.next();
        }
        catch (err) {
            subscriber.error(err);
            return subscriber;
        }
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) { innerSubscriber = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo_1.subscribeTo(result)(innerSubscriber);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebug = exports.DEBUG = exports.UPDATE_INTERVAL = exports.PORT = exports.IP = void 0;
exports.IP = "192.168.0.75"; // "localhost"; // "192.168.0.75";
exports.PORT = "8080";
exports.UPDATE_INTERVAL = 60; // milliseconds
exports.DEBUG = false;
exports.isDebug = function () { return exports.DEBUG; };


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./services/backend */ "./src/services/backend/index.ts");
__webpack_require__(/*! ./services/channel */ "./src/services/channel/index.ts");
__webpack_require__(/*! ./services/communication */ "./src/services/communication/index.ts");
__webpack_require__(/*! ./services/init */ "./src/services/init/index.ts");
__webpack_require__(/*! ./services/media */ "./src/services/media/index.ts");
__webpack_require__(/*! ./services/state */ "./src/services/state/index.ts");
__webpack_require__(/*! ./services/unity */ "./src/services/unity/index.ts");


/***/ }),

/***/ "./src/lib/broadcast.ts":
/*!******************************!*\
  !*** ./src/lib/broadcast.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastingAgent = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var BroadcastingAgent = /** @class */ (function () {
    function BroadcastingAgent(id, communicationChannel) {
        var _this = this;
        if (id === void 0) { id = utils_1.generateId(4, 4); }
        this.id = id;
        // Participants
        this.participants = [];
        // Subjects
        this.addParticipantSubject = new Subject_1.Subject();
        this.removeParticipantSubject = new Subject_1.Subject();
        // Output
        this.DebugSubject_ = new Subject_1.Subject();
        // Messaging Utils
        this.getCommSubject = function () {
            return _this.commSubject.pipe(filter_1.filter(function (_a) {
                var _id = _a.id;
                return _id !== _this.id;
            }));
        };
        this.getIndividualMessageCommSubject = function () {
            return _this.getCommSubject().pipe(filter_1.filter(function (_a) {
                var to = _a.to;
                return to === _this.id;
            }));
        };
        this.messageHandler = function (message) {
            _this.DebugSubject_.next(message);
        };
        this.sendIndividualRequest = function (data, to) {
            _this.commSubject.next({
                id: _this.id,
                type: "individual",
                data: data,
                to: to,
            });
        };
        // Participants
        this.addParticipant = function (id) {
            _this.participants.push(id);
            _this.addParticipantSubject.next(id);
        };
        this.removeParticipant = function (id) {
            var participants = _this.getParticipants();
            participants = participants.filter(function (_id) { return _id !== id; });
            _this.removeParticipantSubject.next(id);
        };
        this.getParticipants = function () {
            var participants = __spreadArrays(_this.participants);
            return participants;
        };
        // Salutations
        this.greetingHandler = function (message) {
            _this.DebugSubject_.next("Broadcast Test #2");
            var id = message.id, type = message.type;
            var participants = _this.getParticipants();
            if (type !== "greeting")
                return;
            _this.DebugSubject_.next("Broadcast Test #3");
            _this.DebugSubject_.next(["Greeting", message]);
            if (participants.includes(id))
                return;
            _this.DebugSubject_.next("ID: " + _this.id + ", Add Participant");
            _this.addParticipant(id);
            setTimeout(_this.sendGreeting, 1000);
        };
        this.farewellHandler = function (message) {
            var id = message.id, type = message.type;
            var participants = _this.getParticipants();
            if (type !== "farewell")
                return;
            if (participants.includes(id))
                return;
            _this.removeParticipant(id);
        };
        this.sendGreeting = function () {
            _this.commSubject.next({
                id: _this.id,
                type: "greeting",
                data: {},
            });
        };
        this.sendFarewell = function () {
            _this.commSubject.next({
                id: _this.id,
                type: "farewell",
                data: {},
            });
        };
        this.commSubject = communicationChannel;
        this.DebugSubject_.next("Broadcast Test #1");
        this.DebugSubject_.next(["Broadcast Test #4", communicationChannel]);
        this.commSubject.subscribe(function (m) {
            return _this.DebugSubject_.next(["Broadcast Test #5", m]);
        });
        this.getCommSubject().subscribe(function (m) {
            return _this.DebugSubject_.next(["Broadcast Test #6", m]);
        });
        this.getCommSubject().subscribe(this.messageHandler);
        this.getCommSubject().subscribe(this.greetingHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Broadcast: ", m);
        });
    }
    return BroadcastingAgent;
}());
exports.BroadcastingAgent = BroadcastingAgent;


/***/ }),

/***/ "./src/lib/client.ts":
/*!***************************!*\
  !*** ./src/lib/client.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var ReplaySubject_1 = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
var connection_manager_1 = __webpack_require__(/*! ./connection-manager */ "./src/lib/connection-manager.ts");
var rtc_messaging_agent_1 = __webpack_require__(/*! ./rtc-messaging-agent */ "./src/lib/rtc-messaging-agent.ts");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var Client = /** @class */ (function () {
    function Client(subject) {
        var _this = this;
        this.subject = subject;
        this.id = utils_1.generateId(4, 4);
        // Channels
        this.dataChannels = {};
        this.streams = {};
        // Subjects
        // Input
        this._LocalMediaSubject = new ReplaySubject_1.ReplaySubject();
        // Output
        this.OnDataChannelMessageSubject_ = new Subject_1.Subject();
        this.OnDataChannelSubject_ = new Subject_1.Subject();
        this.OnStreamSubject_ = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        // Connection
        this.onConnectionCreatedHandler = function (message) {
            var id = message[0], connection = message[1];
            connection.ondatachannel = _this.onDataChannelHandler(id);
            connection.ontrack = _this.onTrackHandler(id);
        };
        this.onConnected = function (id, connection) {
            connection.onconnectionstatechange = function (ev) {
                var _a;
                if (connection.connectionState === "connected") {
                    _this.DebugSubject_.next("Connection " + id + ", Now Connected");
                    var isOffer = ((_a = connection.localDescription) === null || _a === void 0 ? void 0 : _a.type) === "offer";
                    if (isOffer)
                        return;
                }
            };
        };
        // Stream
        this.addStreamToConnection = function (_a) {
            var stream = _a[0], connection = _a[1];
            stream.getTracks().forEach(function (t) { return connection.addTrack(t, stream); });
        };
        this.addStream = function (id, stream) {
            if (!_this.streams[id])
                _this.streams[id] = [];
            _this.streams[id].push(stream);
        };
        this.onTrackHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On Track Handler");
            var stream = ev.streams[0];
            _this.addStream(id, stream);
            _this.OnStreamSubject_.next([id, stream]);
        }; };
        // Data Channel
        this.addDataChannelToConnection = function (_a) {
            var id = _a[0], connection = _a[1];
            // Data Channel
            var dataChannel = connection.createDataChannel("data-channel-" + id);
            dataChannel.onopen = function (ev) { return _this.DebugSubject_.next("Opened Channel"); };
            dataChannel.onerror = function (ev) { return _this.DebugSubject_.next(JSON.stringify(ev)); };
            _this.dataChannels[id] = dataChannel;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
        };
        this.sendDataToChannel = function (id, message) {
            var channel = _this.dataChannels[id];
            if (!channel)
                return;
            channel.send(message);
        };
        this.broadcastData = function (message) {
            var channels = _this.dataChannels;
            for (var id in channels) {
                var channel = channels[id];
                var isOpen = channel.readyState === "open";
                if (!channel || !isOpen)
                    continue;
                channel.send(message);
            }
        };
        this.onDataChannelHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On Data Channel Handler");
            var dataChannel = ev.channel;
            if (!dataChannel)
                return;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
            _this.dataChannels[id] = dataChannel;
            _this.OnDataChannelSubject_.next([id, dataChannel]);
        }; };
        this.onDataChannelMessageHandler = function (id) { return function (ev) {
            var message = ev.data;
            if (!message)
                return;
            _this.OnDataChannelMessageSubject_.next([id, message]);
        }; };
        this.onDataChannelMessageSubjectHandler = function (message) {
            _this.DebugSubject_.next(message);
        };
        // Agents
        this.BroadcastingAgent = new broadcast_1.BroadcastingAgent(this.id, this.subject);
        this.RTCMessagingAgent = new rtc_messaging_agent_1.RTCMessagingAgent(this.BroadcastingAgent);
        this.ConnectionManager = new connection_manager_1.ConnectionManager(this.RTCMessagingAgent);
        this.OnDataChannelMessageSubject_.subscribe(this.onDataChannelMessageSubjectHandler);
        this.ConnectionManager.OnConnectionCreatedSubject.subscribe(this.onConnectionCreatedHandler);
        this.ConnectionManager.OnConnectionCreatedSubject.subscribe(this.addDataChannelToConnection);
        this.ConnectionManager.OnConnectionCreatedSubject.pipe(
        // TODO: Think of a flatter way
        switchMap_1.switchMap(function (_a) {
            var _ = _a[0], connection = _a[1];
            return _this._LocalMediaSubject.pipe(map_1.map(function (stream) { return [stream, connection]; }));
        })).subscribe(this.addStreamToConnection);
        this._LocalMediaSubject.subscribe(function () {
            return _this.DebugSubject_.next("Client -> LocalMediaSubject");
        });
        this.BroadcastingAgent.sendGreeting();
        this.DebugSubject_.next(["Client", this]);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Client: ", m);
        });
    }
    Client.createClient = function (subject) {
        return new Client(subject);
    };
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ "./src/lib/connection-manager.ts":
/*!***************************************!*\
  !*** ./src/lib/connection-manager.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var configuration = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
                "stun:stun01.sipphone.com",
                "stun:stun.ekiga.net",
                "stun:stun.fwdnet.net",
                "stun:stun.ideasip.com",
                "stun:stun.iptel.org",
                "stun:stun.rixtelecom.se",
                "stun:stun.schlund.de",
                "stun:stunserver.org",
                "stun:stun.softjoys.com",
                "stun:stun.voiparound.com",
                "stun:stun.voipbuster.com",
                "stun:stun.voipstunt.com",
                "stun:stun.voxgratia.org",
                "stun:stun.xten.com",
            ],
        },
    ],
};
var ConnectionManager = /** @class */ (function () {
    function ConnectionManager(ma) {
        var _this = this;
        this.ma = ma;
        // Connections
        this.connections = {};
        // Subjects
        this.OnDataChannelSubject = new Subject_1.Subject();
        this.OnConnectionCreatedSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        this.createConnection = function (id) {
            var _id = _this.ma.broadcastingAgent.id;
            _this.DebugSubject_.next("ID: " + id + ", Create Connection in " + _this.ma.broadcastingAgent.id);
            var connection = new RTCPeerConnection(configuration);
            _this.connections[id] = connection;
            connection.onicecandidate = _this.onICECandidateHandler(id);
            _this.OnConnectionCreatedSubject.next([id, connection]);
            return connection;
        };
        // Add/Remove Participants
        this.onAddParticipantHandler = function (id) {
            _this.DebugSubject_.next(_this.ma.broadcastingAgent.id + " On Add Participant Handler");
            var oldConnection = _this.connections[id];
            if (oldConnection)
                return;
            var connection = _this.createConnection(id);
            connection
                .createOffer()
                .then(_this.ma.onOfferCreatedHandler(id))
                .catch(function (e) {
                _this.DebugSubject_.next(["Couldn't create offer for id " + id, e]);
            });
        };
        this.onRemoveParticipantHandler = function (id) {
            delete _this.connections[id];
        };
        // Session Description
        this.onSetLocalDescriptionHandler = function (message) {
            var id = message[0], sessionDescription = message[1];
            var connection = _this.connections[id];
            if (!connection)
                return;
            connection.setLocalDescription(sessionDescription);
        };
        this.onSetRemoteDescriptionHandler = function (message) {
            var id = message[0], sessionDescription = message[1];
            _this.DebugSubject_.next("Setting remote description in " + _this.ma.broadcastingAgent.id + " for " + id);
            var connection = _this.connections[id];
            if (!connection) {
                // Answer
                connection = _this.onCreateAnswerHandler(id, sessionDescription);
            }
            else {
                // Offer
                connection.setRemoteDescription(sessionDescription);
            }
        };
        // Connection Logistics
        this.onICECandidateHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On ICE Candidate Handler");
            var candidate = ev.candidate;
            if (!candidate)
                return;
            _this.ma.onCandidateCreatedHandler(id)(candidate);
        }; };
        this.onCreateAnswerHandler = function (id, sessionDescription) {
            var connection = _this.createConnection(id);
            connection.setRemoteDescription(sessionDescription);
            connection
                .createAnswer()
                .then(_this.ma.onAnswerCreatedHandler(id))
                .catch(function (e) {
                _this.DebugSubject_.next(["Couldn't create answer in ID " + id, e]);
            });
            return connection;
        };
        this.onAddCandidateHandler = function (message) {
            var id = message[0], candidate = message[1];
            _this.DebugSubject_.next(["Add Candidate", candidate]);
            var connection = _this.connections[id];
            if (!connection)
                return;
            connection.addIceCandidate(candidate);
        };
        this.ma.OnAddParticipantSubject.subscribe(this.onAddParticipantHandler);
        this.ma.OnRemoveParticipantSubject.subscribe(this.onRemoveParticipantHandler);
        // this.ma.OnCreateAnswerSubject.subscribe(this.onCreateAnswerHandler);
        this.ma.OnSetLocalDescription.subscribe(this.onSetLocalDescriptionHandler);
        this.ma.OnSetRemoteDescription.subscribe(this.onSetRemoteDescriptionHandler);
        this.ma.OnAddCandidateSubject.subscribe(this.onAddCandidateHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Connection Manager", m);
        });
    }
    return ConnectionManager;
}());
exports.ConnectionManager = ConnectionManager;


/***/ }),

/***/ "./src/lib/rtc-messaging-agent.ts":
/*!****************************************!*\
  !*** ./src/lib/rtc-messaging-agent.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTCMessagingAgent = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var RTCMessagingAgent = /** @class */ (function () {
    function RTCMessagingAgent(broadcastingAgent) {
        var _this = this;
        this.broadcastingAgent = broadcastingAgent;
        // Subjects
        this.OnAddParticipantSubject = new Subject_1.Subject();
        this.OnRemoveParticipantSubject = new Subject_1.Subject();
        this.OnSetLocalDescription = new Subject_1.Subject();
        this.OnSetRemoteDescription = new Subject_1.Subject();
        this.OnAddCandidateSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        // Add/Remove Participants
        this.onAddParticipantHandler = function (id) {
            _this.OnAddParticipantSubject.next(id);
        };
        this.onRemoveParticipantHandler = function (id) {
            _this.OnRemoveParticipantSubject.next(id);
        };
        // Offer
        this.getOfferSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "offer";
            }));
        };
        this.onOfferCreatedHandler = function (id) { return function (sessionDescription) {
            _this.DebugSubject_.next([
                "Offer for " + id + " Created in " + _this.broadcastingAgent.id,
                sessionDescription,
            ]);
            _this.OnSetLocalDescription.next([id, sessionDescription]);
            console.log("setLocalAndSendMessage sending message", sessionDescription);
            _this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
        }; };
        this.onOfferHandler = function (message) {
            var id = message.id, data = message.data;
            _this.OnSetRemoteDescription.next([id, data]);
        };
        // Answer
        this.getAnswerSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "answer";
            }));
        };
        this.onAnswerCreatedHandler = function (id) { return function (sessionDescription) {
            _this.DebugSubject_.next([
                "Answer for " + id + " Created in " + _this.broadcastingAgent.id,
                sessionDescription,
            ]);
            _this.OnSetLocalDescription.next([id, sessionDescription]);
            console.log("setLocalAndSendMessage sending message", sessionDescription);
            _this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
        }; };
        this.onAnswerHandler = function (message) {
            var id = message.id, data = message.data;
            _this.OnSetRemoteDescription.next([id, data]);
        };
        // Candidate
        this.getCandidateSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "candidate";
            }));
        };
        this.onCandidateHandler = function (message) {
            var id = message.id, data = message.data;
            var candidate = new RTCIceCandidate({
                // @ts-ignore
                sdpMLineIndex: data.label,
                // @ts-ignore
                candidate: data.candidate,
            });
            _this.OnAddCandidateSubject.next([id, candidate]);
        };
        this.handleIceCandidate = function (id) { return function (event) {
            console.log("icecandidate event: ", event);
            if (event.candidate) {
                _this.broadcastingAgent.sendIndividualRequest({
                    type: "candidate",
                    label: event.candidate.sdpMLineIndex,
                    id: event.candidate.sdpMid,
                    candidate: event.candidate.candidate,
                }, id);
            }
            else {
                console.log("End of candidates.");
            }
        }; };
        this.onCandidateCreatedHandler = function (id) { return function (candidate) {
            _this.broadcastingAgent.sendIndividualRequest({
                type: "candidate",
                label: candidate.sdpMLineIndex,
                id: candidate.sdpMid,
                candidate: candidate.candidate,
            }, id);
        }; };
        this.broadcastingAgent.addParticipantSubject.subscribe(this.onAddParticipantHandler);
        this.broadcastingAgent.removeParticipantSubject.subscribe(this.onRemoveParticipantHandler);
        this.getOfferSubject().subscribe(this.onOfferHandler);
        this.getAnswerSubject().subscribe(this.onAnswerHandler);
        this.getCandidateSubject().subscribe(this.onCandidateHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("RTC-Messaging-Agent: ", m);
        });
    }
    return RTCMessagingAgent;
}());
exports.RTCMessagingAgent = RTCMessagingAgent;


/***/ }),

/***/ "./src/lib/web-sockets-agent.ts":
/*!**************************************!*\
  !*** ./src/lib/web-sockets-agent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketsAgent = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var takeUntil_1 = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var WebSocketsAgent = /** @class */ (function () {
    function WebSocketsAgent(_CommunicationSubject, CommunicationSubject_) {
        var _this = this;
        this._CommunicationSubject = _CommunicationSubject;
        this.CommunicationSubject_ = CommunicationSubject_;
        // Flags
        this.isOpen = false;
        this.canSend = true;
        // Subjects
        this.IsWebSocketReadySubject = new BehaviorSubject_1.BehaviorSubject(false);
        this.OnCloseSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        this.close = function () {
            _this.ws.removeEventListener("message", _this.onMessageHandler);
            _this.ws.removeEventListener("open", _this.onOpenHandler);
            _this.ws.removeEventListener("close", _this.onCloseHandler);
            _this.ws.removeEventListener("error", _this.onErrorHandler);
        };
        this.onIsWebSocketReadyHandler = function (message) {
            _this.sendMessage(JSON.stringify(message));
        };
        this.getCommunicationSubject = function () {
            return _this._CommunicationSubject.pipe(takeUntil_1.takeUntil(_this.OnCloseSubject), filter_1.filter(function () {
                var _canSend = _this.canSend;
                if (!_this.canSend)
                    _this.canSend = true;
                return _canSend;
            }));
        };
        this.getURL = function () {
            var origin = window.location.origin;
            origin = origin.replace("https", "wss").replace("http", "ws");
            return origin;
        };
        this.onMessageHandler = function (event) {
            _this.DebugSubject_.next(event.data);
            var message = JSON.parse(event.data);
            _this.canSend = false;
            _this.CommunicationSubject_.next(message);
        };
        this.onErrorHandler = function (event) {
            console.error("WS Error: ", event);
            if (_this.ws.OPEN)
                return;
            _this.onCloseHandler();
        };
        this.onOpenHandler = function () {
            _this.DebugSubject_.next("WS is Open");
            _this.isOpen = true;
            _this.IsWebSocketReadySubject.next(_this.isOpen);
        };
        this.onCloseHandler = function () {
            _this.isOpen = false;
            _this.OnCloseSubject.next();
        };
        this.sendMessage = function (message) {
            _this.DebugSubject_.next(message);
            if (!_this.ws.OPEN)
                return;
            _this.ws.send(message);
        };
        var url = this.getURL();
        this.ws = new WebSocket(url);
        this.ws.addEventListener("message", this.onMessageHandler);
        this.ws.addEventListener("open", this.onOpenHandler);
        this.ws.addEventListener("close", this.onCloseHandler);
        this.ws.addEventListener("error", this.onErrorHandler);
        this.IsWebSocketReadySubject.pipe(filter_1.filter(function (isReady) { return isReady; }), switchMap_1.switchMap(function () { return _this.getCommunicationSubject(); })).subscribe(this.onIsWebSocketReadyHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("WebSockets Agent: ", m);
        });
    }
    return WebSocketsAgent;
}());
exports.WebSocketsAgent = WebSocketsAgent;


/***/ }),

/***/ "./src/services/backend/backend.ts":
/*!*****************************************!*\
  !*** ./src/services/backend/backend.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Incoming
var _InitSubject = new Subject_1.Subject();
var _RefreshSubject = new Subject_1.Subject();
var _IDSubject = new BehaviorSubject_1.BehaviorSubject(null);
var _UseTVChannelSubject = new Subject_1.Subject();
var _SetNameSubject = new Subject_1.Subject();
// Outgoing
var TVProgramStateSubject_ = new BehaviorSubject_1.BehaviorSubject({});
var NamesStateSubject_ = new BehaviorSubject_1.BehaviorSubject({});
var DebugSubject_ = new Subject_1.Subject();
// Methods
var post = function (url, data) {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).catch(function (e) { return DebugSubject_.next(e.message); });
};
var get = function (url) {
    return fetch(url)
        .then(function (response) { return response.json(); })
        .catch(function (e) { return DebugSubject_.next(e); });
};
var sendTVChannel = function (id, channel) {
    return post(definitions_1.URL_TV_CHANNEL, {
        id: id,
        channel: channel,
    });
};
var getNames = function () {
    return get(definitions_1.URL_NAME).then(function (data) {
        if (!data)
            return;
        var names = data;
        NamesStateSubject_.next(names);
    });
};
var sendName = function (id, name) {
    return post(definitions_1.URL_NAME, {
        id: id,
        name: name,
    });
};
var getTVProgram = function () {
    return get(definitions_1.URL_TV_CHANNEL).then(function (data) {
        if (!data)
            return;
        var program = data;
        TVProgramStateSubject_.next(program);
    });
};
var onChannelHandler = function (channel) {
    var id = _IDSubject.getValue();
    if (!id)
        return;
    sendTVChannel(id, channel);
};
var onRefreshHandler = function () {
    getTVProgram();
    getNames();
};
// Subscriptions
_InitSubject.subscribe(function () { return IsInitializedSubject.next(true); });
_UseTVChannelSubject
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(onChannelHandler);
_RefreshSubject
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(onRefreshHandler);
// Exports
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    // Incoming
    BackendService._IDSbuject = _IDSubject;
    BackendService._InitSubject = _InitSubject;
    BackendService._RefreshSubject = _RefreshSubject;
    BackendService._UseTVChannelSubject = _UseTVChannelSubject;
    BackendService._SetNameSubject = _SetNameSubject;
    // Output
    BackendService.TVProgramStateSubject_ = TVProgramStateSubject_;
    BackendService.NamesStateSubject_ = NamesStateSubject_;
    BackendService.DebugSubject_ = DebugSubject_;
    return BackendService;
}());
exports.BackendService = BackendService;


/***/ }),

/***/ "./src/services/backend/index.ts":
/*!***************************************!*\
  !*** ./src/services/backend/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/channel */ "./src/services/backend/integration/channel.ts");
__webpack_require__(/*! ./integration/state */ "./src/services/backend/integration/state.ts");


/***/ }),

/***/ "./src/services/backend/integration/channel.ts":
/*!*****************************************************!*\
  !*** ./src/services/backend/integration/channel.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../channel/channel */ "./src/services/channel/channel.ts");
var backend_1 = __webpack_require__(/*! ../backend */ "./src/services/backend/backend.ts");
backend_1.BackendService.TVProgramStateSubject_.subscribe(function (program) {
    return channel_1.ChannelService._TVProgramSubject.next(program);
});


/***/ }),

/***/ "./src/services/backend/integration/state.ts":
/*!***************************************************!*\
  !*** ./src/services/backend/integration/state.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var backend_1 = __webpack_require__(/*! ../backend */ "./src/services/backend/backend.ts");
backend_1.BackendService.TVProgramStateSubject_.subscribe(function (program) {
    return state_1.StateService._TVProgramStateSubject.next(program);
});


/***/ }),

/***/ "./src/services/channel/channel.ts":
/*!*****************************************!*\
  !*** ./src/services/channel/channel.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
/**
 * Channel Module
 *
 * Responsible for passing through only those image data messages that
 * have the id associated with the current channel.
 */
var ImageDataMessageSubject = new BehaviorSubject_1.BehaviorSubject(null);
// Input
var _InitSubject = new Subject_1.Subject();
var _TVProgramSubject = new BehaviorSubject_1.BehaviorSubject({});
var _CurrentChannelSubject = new BehaviorSubject_1.BehaviorSubject(1);
var _ImageDataMessageSubject = new Subject_1.Subject();
var _ProceedSubject = new Subject_1.Subject();
// Output
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Internal
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Methods
var init = function () { return IsInitializedSubject.next(true); };
var filterCurrentChannelImageDataMessages = function (_a) {
    var program = _a[0], channel = _a[1], tuple = _a[2];
    DebugSubject_.next(["Channel Debug #1: ", program, channel, tuple]);
    var from = tuple[0], message = tuple[1];
    var id = program[channel];
    DebugSubject_.next(["Channel Debug #2: ", id]);
    if (!id)
        return;
    if (id !== from)
        return;
    DebugSubject_.next("Channel Debug #3");
    ImageDataMessageSubject_.next(message);
};
var hasMessageFilter = function () { return !!ImageDataMessageSubject.getValue(); };
// Subscriptions
_InitSubject.subscribe(init);
combineLatest_1.combineLatest([
    _TVProgramSubject,
    _CurrentChannelSubject,
    _ImageDataMessageSubject,
])
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(filterCurrentChannelImageDataMessages);
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Channel Service: ", m);
});
_ProceedSubject
    .pipe(filter_1.filter(hasMessageFilter))
    .subscribe(function () {
    return ImageDataMessageSubject_.next(ImageDataMessageSubject.getValue());
});
// External
var ChannelService = /** @class */ (function () {
    function ChannelService() {
    }
    // Input
    ChannelService._InitSubject = _InitSubject;
    ChannelService._TVProgramSubject = _TVProgramSubject;
    ChannelService._CurrentChannelSubject = _CurrentChannelSubject;
    ChannelService._ImageDataMessageSubject = _ImageDataMessageSubject;
    ChannelService._ProceedSubject = _ProceedSubject;
    // Output
    ChannelService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    return ChannelService;
}());
exports.ChannelService = ChannelService;


/***/ }),

/***/ "./src/services/channel/index.ts":
/*!***************************************!*\
  !*** ./src/services/channel/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/unity */ "./src/services/channel/integration/unity.ts");


/***/ }),

/***/ "./src/services/channel/integration/unity.ts":
/*!***************************************************!*\
  !*** ./src/services/channel/integration/unity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unity_1 = __webpack_require__(/*! ../../unity/unity */ "./src/services/unity/unity.ts");
var channel_1 = __webpack_require__(/*! ../channel */ "./src/services/channel/channel.ts");
channel_1.ChannelService.ImageDataMessageSubject_.subscribe(function (message) {
    return unity_1.UnityService._SendMessageToUnitySubject.next(message);
});


/***/ }),

/***/ "./src/services/communication/incoming/incoming.ts":
/*!*********************************************************!*\
  !*** ./src/services/communication/incoming/incoming.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingMessageService = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../../shared/definitions */ "./src/shared/definitions.ts");
/**
 * Messages Coming into Unity
 */
// Input
var _MessageSubject = new Subject_1.Subject();
var _ImageSubject = new Subject_1.Subject();
var _ProceedSubject = new Subject_1.Subject();
// Output
var PositionMessageSubject_ = new Subject_1.Subject();
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var handleIncomingMessage = function (_a) {
    var id = _a[0], message = _a[1];
    var m = null;
    try {
        m = JSON.parse(message);
        m.id = id;
    }
    catch (e) {
        DebugSubject_.next([e, "Could not parse message"]);
    }
    return m;
};
var positionMessageFilter = function (m) {
    return !!m && m.type === definitions_1.EMessageType.Position;
};
var imageMessageFilter = function (m) {
    return !!m && m.type === definitions_1.EMessageType.ImageData;
};
var imageSubjectHandler = function (image) { return ({
    type: definitions_1.EMessageType.ImageData,
    image: image,
}); };
// Subscriptions
_MessageSubject
    .pipe(map_1.map(handleIncomingMessage), filter_1.filter(positionMessageFilter))
    .subscribe(function (m) {
    return PositionMessageSubject_.next(m);
});
// _MessageSubject
//   .pipe(map(handleIncomingMessage), filter(imageMessageFilter))
//   .subscribe((m) => {
//     if (!m) return;
//     ImageDataMessageSubject_.next([m.id, (m as unknown) as IImageDataMessage]);
//   });
_ImageSubject
    .pipe(map_1.map(imageSubjectHandler))
    .subscribe(function (m) {
    return ImageDataMessageSubject_.next(m);
});
// Export
var IncomingMessageService = /** @class */ (function () {
    function IncomingMessageService() {
    }
    // Input
    IncomingMessageService._MessageSubject = _MessageSubject;
    IncomingMessageService._ImageSubject = _ImageSubject;
    IncomingMessageService._ProceedSubject = _ProceedSubject;
    // Output
    IncomingMessageService.PositionMessageSubject_ = PositionMessageSubject_;
    IncomingMessageService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    IncomingMessageService.DebugSubject_ = DebugSubject_;
    return IncomingMessageService;
}());
exports.IncomingMessageService = IncomingMessageService;


/***/ }),

/***/ "./src/services/communication/incoming/integration/integration.ts":
/*!************************************************************************!*\
  !*** ./src/services/communication/incoming/integration/integration.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var incoming_1 = __webpack_require__(/*! ../incoming */ "./src/services/communication/incoming/incoming.ts");
// IncomingMessageService.ImageDataMessageSubject_.subscribe((message) =>
//   ChannelService._ImageDataMessageSubject.next(message)
// );
incoming_1.IncomingMessageService.ImageDataMessageSubject_.subscribe(function (message) {
    return unity_1.UnityService._SendMessageToUnitySubject.next(message);
});
incoming_1.IncomingMessageService.PositionMessageSubject_.subscribe(function (message) {
    return unity_1.UnityService._SendMessageToUnitySubject.next(message);
});


/***/ }),

/***/ "./src/services/communication/index.ts":
/*!*********************************************!*\
  !*** ./src/services/communication/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./incoming/integration/integration */ "./src/services/communication/incoming/integration/integration.ts");
__webpack_require__(/*! ./outgoing/integration/integration */ "./src/services/communication/outgoing/integration/integration.ts");
__webpack_require__(/*! ./rtc/integration/integration */ "./src/services/communication/rtc/integration/integration.ts");
__webpack_require__(/*! ./ws/integration/integration */ "./src/services/communication/ws/integration/integration.ts");


/***/ }),

/***/ "./src/services/communication/outgoing/integration/integration.ts":
/*!************************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/integration.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var channel_1 = __webpack_require__(/*! ../../../channel/channel */ "./src/services/channel/channel.ts");
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var incoming_1 = __webpack_require__(/*! ../../incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
var rtc_1 = __webpack_require__(/*! ../../rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.StartMessageSubject_.subscribe(function () {
    return init_1.InitService._IsGameLoadedSubject.next(true);
});
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return backend_1.BackendService._UseTVChannelSubject.next(1);
});
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return media_1.MediaService._ShareScreenSubject.next();
});
outgoing_1.OutgoingMessageService.PositionMessageSubject_.subscribe(function (message) {
    return rtc_1.RTCService._BroadcastSubject.next(JSON.stringify(message));
});
outgoing_1.OutgoingMessageService.FullScreenMessageSubject_.subscribe(function () {
    return unity_1.UnityService._MakeFullScreenSubject.next();
});
outgoing_1.OutgoingMessageService.ProceedMessageSubject_.subscribe(function () {
    return channel_1.ChannelService._ProceedSubject.next();
});
outgoing_1.OutgoingMessageService.PositionMessageSubject_.subscribe(function () {
    return incoming_1.IncomingMessageService._ProceedSubject.next();
});


/***/ }),

/***/ "./src/services/communication/outgoing/outgoing.ts":
/*!*********************************************************!*\
  !*** ./src/services/communication/outgoing/outgoing.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutgoingMessageService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
var definitions_1 = __webpack_require__(/*! ../../../shared/definitions */ "./src/shared/definitions.ts");
/**
 * Messages Going out of Unity
 */
// Input
var _RawMessageSubject = new Subject_1.Subject();
var _ImageMessageSubject = new Subject_1.Subject();
var _IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var MessageSubject_ = new Subject_1.Subject();
var StartMessageSubject_ = new Subject_1.Subject();
var PresentMessageSubject_ = new Subject_1.Subject();
var FullScreenMessageSubject_ = new Subject_1.Subject();
var PositionMessageSubject_ = new Subject_1.Subject();
var ImageMessageSubject_ = new Subject_1.Subject();
var ProceedMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var generateFilter = function (type) { return function (message) {
    return !!message && message.type === type;
}; };
var rawMessageHandler = function (message) {
    var parsedMessage = null;
    DebugSubject_.next(message);
    try {
        parsedMessage = JSON.parse(message);
    }
    catch (e) {
        DebugSubject_.next("Could not Parse Message");
    }
    if (!parsedMessage)
        return;
    MessageSubject_.next(parsedMessage);
};
var imageHandler = function (_a) {
    var id = _a[0], image = _a[1];
};
// Subscriptions
_RawMessageSubject.subscribe(rawMessageHandler);
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Start))).subscribe(function (m) { return StartMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Present))).subscribe(function (m) { return PresentMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.FullScreen))).subscribe(function (m) { return FullScreenMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Proceed))).subscribe(function (m) { return ProceedMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Position))).subscribe(function (m) { return PositionMessageSubject_.next(m); });
// Debugging
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Outgoing Message Service: ", m);
});
PresentMessageSubject_.subscribe(function (m) { return DebugSubject_.next(m); });
// Exports
var OutgoingMessageService = /** @class */ (function () {
    function OutgoingMessageService() {
    }
    // Input
    OutgoingMessageService._RawMessageSubject = _RawMessageSubject;
    OutgoingMessageService._ImageMessageSubject = _ImageMessageSubject;
    // IO
    OutgoingMessageService._IDSubject_ = _IDSubject_;
    // Output
    OutgoingMessageService.MessageSubject_ = MessageSubject_;
    OutgoingMessageService.StartMessageSubject_ = StartMessageSubject_;
    OutgoingMessageService.PresentMessageSubject_ = PresentMessageSubject_;
    OutgoingMessageService.FullScreenMessageSubject_ = FullScreenMessageSubject_;
    OutgoingMessageService.PositionMessageSubject_ = PositionMessageSubject_;
    OutgoingMessageService.ImageMessageSubject_ = ImageMessageSubject_;
    OutgoingMessageService.ProceedMessageSubject_ = ProceedMessageSubject_;
    OutgoingMessageService.DebugSubject_ = DebugSubject_;
    return OutgoingMessageService;
}());
exports.OutgoingMessageService = OutgoingMessageService;


/***/ }),

/***/ "./src/services/communication/rtc/integration/integration.ts":
/*!*******************************************************************!*\
  !*** ./src/services/communication/rtc/integration/integration.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var state_1 = __webpack_require__(/*! ../../../state/state */ "./src/services/state/state.ts");
var incoming_1 = __webpack_require__(/*! ../../incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
var outgoing_1 = __webpack_require__(/*! ../../outgoing/outgoing */ "./src/services/communication/outgoing/outgoing.ts");
var ws_1 = __webpack_require__(/*! ../../ws/ws */ "./src/services/communication/ws/ws.ts");
var rtc_1 = __webpack_require__(/*! ../rtc */ "./src/services/communication/rtc/rtc.ts");
rtc_1.RTCService.OnDataChannelMessageSubject_.subscribe(function (m) {
    return incoming_1.IncomingMessageService._MessageSubject.next(m);
});
rtc_1.RTCService.UpdateStateSubject_.subscribe(function () {
    return backend_1.BackendService._RefreshSubject.next();
});
rtc_1.RTCService.CommunicationSubject_.subscribe(function (m) {
    ws_1.WSService._CommunicationSubject.next(m);
});
rtc_1.RTCService.IDSubject_.subscribe(function (id) { return backend_1.BackendService._IDSbuject.next(id); });
rtc_1.RTCService.IDSubject_.subscribe(function (id) {
    return outgoing_1.OutgoingMessageService._IDSubject_.next(id);
});
rtc_1.RTCService.IDSubject_.subscribe(function (id) { return state_1.StateService._IDSubject_.next(id); });
rtc_1.RTCService.OnStreamSubject_.subscribe(function (stream) {
    return media_1.MediaService._AudioSubject.next(stream);
});
rtc_1.RTCService.OnStreamSubject_.subscribe(function (stream) {
    return media_1.MediaService._VideoSubject.next(stream);
});


/***/ }),

/***/ "./src/services/communication/rtc/rtc.ts":
/*!***********************************************!*\
  !*** ./src/services/communication/rtc/rtc.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTCService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var debounceTime_1 = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
var client_1 = __webpack_require__(/*! ../../../lib/client */ "./src/lib/client.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _BroadcastSubject = new Subject_1.Subject();
var _CommunicationSubject = new Subject_1.Subject();
var _MediaSubject = new BehaviorSubject_1.BehaviorSubject(null);
// Output
var CommunicationSubject_ = new Subject_1.Subject();
var ClientSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var UpdateStateSubject_ = new Subject_1.Subject();
var OnDataChannelMessageSubject_ = new Subject_1.Subject();
var OnStreamSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    var client = client_1.Client.createClient(CommunicationSubject_);
    ClientSubject_.next(client);
    _IsInitializedSubject.next(true);
    // DebugSubject_.next("Remote");
    IDSubject_.next(client.id);
};
var isInitializedFilter = function () { return _IsInitializedSubject.getValue(); };
var onDataChannelHandler = function (m) {
    DebugSubject_.next(m);
    OnDataChannelMessageSubject_.next(m);
};
var onBroadcastHandler = function (message) {
    // DebugSubject_.next(message);
    var client = ClientSubject_.getValue();
    if (!client)
        return;
    client.broadcastData(message);
};
var onMediaHandler = function (media) {
    DebugSubject_.next("RTCService -> onMediaHandler");
    var client = ClientSubject_.getValue();
    if (!client || !media)
        return;
    client._LocalMediaSubject.next(media);
};
var onStreamHandler = function (_a) {
    var _ = _a[0], stream = _a[1];
    console.warn("STREAM!");
    DebugSubject_.next("RTC Service -> onStreamHandler");
    OnStreamSubject_.next(stream);
};
// Subscriptions
_InitSubject.subscribe(init);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelMessageSubject_; })).subscribe(onDataChannelHandler);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelSubject_; })).subscribe(console.warn);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnStreamSubject_; })).subscribe(onStreamHandler);
_BroadcastSubject.subscribe(onBroadcastHandler);
_CommunicationSubject.subscribe(function (m) { return CommunicationSubject_.next(m); });
CommunicationSubject_.pipe(debounceTime_1.debounceTime(100)).subscribe(function () {
    return UpdateStateSubject_.next();
});
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.DebugSubject_; })).subscribe(function (m) { return DebugSubject_.next(m); });
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function () { return _MediaSubject; })).subscribe(onMediaHandler);
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("RTC Service: ", m);
});
// Exports
var RTCService = /** @class */ (function () {
    function RTCService() {
    }
    RTCService._InitSubject = _InitSubject;
    RTCService._IsInitializedSubject = _IsInitializedSubject;
    RTCService._BroadcastSubject = _BroadcastSubject;
    RTCService._CommunicationSubject = _CommunicationSubject;
    RTCService._MediaSubject = _MediaSubject;
    // Output
    RTCService.CommunicationSubject_ = CommunicationSubject_;
    RTCService.ClientSubject_ = ClientSubject_;
    RTCService.IDSubject_ = IDSubject_;
    RTCService.UpdateStateSubject_ = UpdateStateSubject_;
    RTCService.OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
    RTCService.OnStreamSubject_ = OnStreamSubject_;
    RTCService.DebugSubject_ = DebugSubject_;
    return RTCService;
}());
exports.RTCService = RTCService;


/***/ }),

/***/ "./src/services/communication/ws/integration/integration.ts":
/*!******************************************************************!*\
  !*** ./src/services/communication/ws/integration/integration.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var rtc_1 = __webpack_require__(/*! ../../rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var ws_1 = __webpack_require__(/*! ../ws */ "./src/services/communication/ws/ws.ts");
ws_1.WSService.IsWebSocketConnectionOpen_.subscribe(function (isOpen) {
    return init_1.InitService._IsWebSocketConnectionOpen.next(isOpen);
});
ws_1.WSService.CommunicationSubject_.subscribe(function (m) {
    rtc_1.RTCService._CommunicationSubject.next(m);
});


/***/ }),

/***/ "./src/services/communication/ws/ws.ts":
/*!*********************************************!*\
  !*** ./src/services/communication/ws/ws.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WSService = void 0;
var web_sockets_agent_1 = __webpack_require__(/*! ../../../lib/web-sockets-agent */ "./src/lib/web-sockets-agent.ts");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
// Input
var _CommunicationSubject = new Subject_1.Subject();
var _IsWindowLoadedSubject = new Subject_1.Subject();
var _IsRemoteSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Output
var CommunicationSubject_ = new Subject_1.Subject();
var WebSocketsAgentSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var ResetAgentSubject_ = new Subject_1.Subject();
var IsWebSocketConnectionOpen_ = new BehaviorSubject_1.BehaviorSubject(false);
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    // TODO: Add Handler to Refresh WS in WebSocketAgent
    var ws = new web_sockets_agent_1.WebSocketsAgent(_CommunicationSubject, CommunicationSubject_);
    WebSocketsAgentSubject_.next(ws);
};
var onWebSocketReadyHandler = function (isReady) {
    DebugSubject_.next("WS Ready");
    IsWebSocketConnectionOpen_.next(isReady);
};
var onWebSocketCloseHandler = function () {
    DebugSubject_.next("WS Closed");
    ResetAgentSubject_.next();
};
// Subscriptions
window.addEventListener("load", function () { return _IsWindowLoadedSubject.next(); });
_IsWindowLoadedSubject.subscribe(init);
ResetAgentSubject_.subscribe(init);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.IsWebSocketReadySubject; })).subscribe(onWebSocketReadyHandler);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.OnCloseSubject; })).subscribe(onWebSocketCloseHandler);
_CommunicationSubject.subscribe(function (m) { return DebugSubject_.next(m); });
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("WS Service: ", m);
});
// Exports
var WSService = /** @class */ (function () {
    function WSService() {
    }
    //Input
    WSService._CommunicationSubject = _CommunicationSubject;
    WSService._IsWindowLoadedSubject = _IsWindowLoadedSubject;
    WSService._IsRemoteSubject = _IsRemoteSubject;
    // Output
    WSService.CommunicationSubject_ = CommunicationSubject_;
    WSService.WebSocketsAgentSubject_ = WebSocketsAgentSubject_;
    WSService.ResetAgentSubject_ = ResetAgentSubject_;
    WSService.IsWebSocketConnectionOpen_ = IsWebSocketConnectionOpen_;
    return WSService;
}());
exports.WSService = WSService;


/***/ }),

/***/ "./src/services/init/index.ts":
/*!************************************!*\
  !*** ./src/services/init/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/integration */ "./src/services/init/integration/integration.ts");


/***/ }),

/***/ "./src/services/init/init.ts":
/*!***********************************!*\
  !*** ./src/services/init/init.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var takeUntil_1 = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
// Input
var _IsWebSocketConnectionOpen = new BehaviorSubject_1.BehaviorSubject(false);
var _IsMediaConfiguredSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _EnvironmentSubject = new BehaviorSubject_1.BehaviorSubject("remote");
// Output
var _IsWindowLoadedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _IsGameLoadedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var InitSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
var EnvSubject_ = new BehaviorSubject_1.BehaviorSubject("production");
// Methods
var getIsRemote = function () { return _EnvironmentSubject.getValue() === "remote"; };
var getIsLocal = function () { return _EnvironmentSubject.getValue() === "local"; };
var onLoadHandler = function () {
    var origin = window.location.origin;
    var isLocal = origin.includes("localhost");
    _EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
    _IsWindowLoadedSubject.next(true);
};
var init = function () {
    InitSubject_.next();
    EnvSubject_.next("production");
};
// Subscriptions
window.addEventListener("load", onLoadHandler);
combineLatest_1.combineLatest([
    _IsWindowLoadedSubject,
    _IsGameLoadedSubject,
    _IsWebSocketConnectionOpen,
    _IsMediaConfiguredSubject,
])
    .pipe(takeUntil_1.takeUntil(InitSubject_), filter_1.filter(function (_a) {
    var isWindowLoadedSubject = _a[0], isGameLoaded = _a[1], isWebSocketConnectionOpen = _a[2], isMediaConfigured = _a[3];
    DebugSubject_.next([
        isWindowLoadedSubject,
        isGameLoaded,
        isWebSocketConnectionOpen,
        isMediaConfigured,
    ]);
    var isRemote = getIsRemote();
    if (!isWindowLoadedSubject || !isGameLoaded || !isMediaConfigured)
        return false;
    if (isRemote && !isWebSocketConnectionOpen)
        return false;
    return true;
}))
    .subscribe(init);
InitSubject_.subscribe(function () {
    DebugSubject_.next("INIT!");
});
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Init Service: ", m);
});
// Exports
var InitService = /** @class */ (function () {
    function InitService() {
    }
    // Input
    InitService._IsWebSocketConnectionOpen = _IsWebSocketConnectionOpen;
    InitService._EnvironmentSubject = _EnvironmentSubject;
    InitService._IsWindowLoadedSubject = _IsWindowLoadedSubject;
    InitService._IsGameLoadedSubject = _IsGameLoadedSubject;
    InitService._IsMediaConfiguredSubject = _IsMediaConfiguredSubject;
    // Output
    InitService.InitSubject_ = InitSubject_;
    InitService.DebugSubject_ = DebugSubject_;
    InitService.EnvSubject_ = EnvSubject_;
    return InitService;
}());
exports.InitService = InitService;


/***/ }),

/***/ "./src/services/init/integration/integration.ts":
/*!******************************************************!*\
  !*** ./src/services/init/integration/integration.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../backend/backend */ "./src/services/backend/backend.ts");
var channel_1 = __webpack_require__(/*! ../../channel/channel */ "./src/services/channel/channel.ts");
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var media_1 = __webpack_require__(/*! ../../media/media */ "./src/services/media/media.ts");
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return backend_1.BackendService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return channel_1.ChannelService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return media_1.MediaService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return rtc_1.RTCService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return state_1.StateService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/media/index.ts":
/*!*************************************!*\
  !*** ./src/services/media/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/integration */ "./src/services/media/integration/integration.ts");


/***/ }),

/***/ "./src/services/media/integration/integration.ts":
/*!*******************************************************!*\
  !*** ./src/services/media/integration/integration.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var incoming_1 = __webpack_require__(/*! ../../communication/incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var init_1 = __webpack_require__(/*! ../../init/init */ "./src/services/init/init.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.IsMediaConfiguredSubject_.subscribe(function (isConfigured) {
    return init_1.InitService._IsMediaConfiguredSubject.next(isConfigured);
});
media_1.MediaService.MediaSubject_.subscribe(function (media) {
    return rtc_1.RTCService._MediaSubject.next(media);
});
media_1.MediaService.ImageSubject_.subscribe(function (image) {
    return incoming_1.IncomingMessageService._ImageSubject.next(image);
});


/***/ }),

/***/ "./src/services/media/media.ts":
/*!*************************************!*\
  !*** ./src/services/media/media.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var buffer_1 = __webpack_require__(/*! rxjs/internal/operators/buffer */ "./node_modules/rxjs/internal/operators/buffer.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var throttleTime_1 = __webpack_require__(/*! rxjs/internal/operators/throttleTime */ "./node_modules/rxjs/internal/operators/throttleTime.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var IsAudioConfiguredSubject = new BehaviorSubject_1.BehaviorSubject(false);
var IsVideoConfiguredSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Input
var _InitSubject = new Subject_1.Subject();
var _ShareScreenSubject = new Subject_1.Subject();
var _AudioSubject = new Subject_1.Subject();
var _VideoSubject = new Subject_1.Subject();
// Output
var OnRequestAnimationFrame_ = new Subject_1.Subject();
var MediaSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IsMediaConfiguredSubject_ = new BehaviorSubject_1.BehaviorSubject(false);
var ImageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Auxilary
var SIZE = 256;
var video = document.createElement("video");
video.addEventListener("canplay", function () {
    video.play();
});
var image = document.createElement("img");
(_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(image);
var canvas;
// Methods
var getAudio = function () {
    return navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then(function (stream) {
        MediaSubject_.next(stream);
    })
        .catch(function (e) {
        DebugSubject_.next("getAudio() error: " + e.name);
    })
        .finally(function () { return IsAudioConfiguredSubject.next(true); });
};
var getDisplayMedia = function () {
    return navigator.mediaDevices
        //@ts-ignore
        .getDisplayMedia({
        video: true,
        audio: true,
    })
        .then(function (stream) {
        MediaSubject_.next(stream);
        onAddVideo(stream);
        DebugSubject_.next("Local Media");
    })
        .catch(function (e) {
        DebugSubject_.next("getDisplayMedia() error: " + e.name);
    })
        .finally(function () { return IsVideoConfiguredSubject.next(true); });
};
var initializeCanvas = function () {
    try {
        canvas = new OffscreenCanvas(SIZE, SIZE);
    }
    catch (e) {
        DebugSubject_.next(e);
    }
};
var update = function () {
    var _a;
    if (!canvas)
        return;
    (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(video, 0, 0, SIZE, SIZE);
    var data = canvas.convertToBlob({
        type: "image/jpeg",
        quality: 0.1,
    });
    data.then(function (blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            var s = reader.result;
            if (!s || typeof s !== "string")
                return;
            s = s.replace("data:image/jpeg;base64,", "");
            ImageSubject_.next(s);
        };
    });
};
var hasAudioTracks = function (stream) {
    return stream.getAudioTracks().length > 0;
};
var hasVideoTracks = function (stream) {
    return stream.getVideoTracks().length > 0;
};
var onAddAudio = function (stream) {
    if (!hasAudioTracks(stream))
        return;
    DebugSubject_.next("Media Service -> onAddAudio");
    var audio = document.createElement("audio");
    audio.setAttribute("autoplay", "true");
    audio.srcObject = stream;
};
var onAddVideo = function (stream) {
    console.warn("onAddVideo");
    if (!hasVideoTracks(stream))
        return;
    DebugSubject_.next("Media Service -> onAddVideo");
    video.srcObject = stream;
};
var init = function () {
    IsInitializedSubject.next(true);
    initializeCanvas();
    step();
};
var isInitializedFilter = function () { return IsInitializedSubject.getValue(); };
var step = function () {
    update();
    OnRequestAnimationFrame_.next();
    requestAnimationFrame(step);
};
// Subscriptions
window.addEventListener("load", function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getAudio()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                DebugSubject_.next("Could not get Audio");
                return [3 /*break*/, 3];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, getDisplayMedia()];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                e_2 = _a.sent();
                DebugSubject_.next("Could not get Video");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
combineLatest_1.combineLatest([IsVideoConfiguredSubject, IsAudioConfiguredSubject])
    .pipe(map_1.map(function (_a) {
    var isVideoConfigured = _a[0], isAudioConfigured = _a[1];
    return isVideoConfigured && isAudioConfigured;
}))
    .subscribe(function (isConfigured) { return IsMediaConfiguredSubject_.next(isConfigured); });
_InitSubject.subscribe(init);
_AudioSubject.subscribe(onAddAudio);
_VideoSubject.subscribe(onAddVideo);
ImageSubject_.pipe(buffer_1.buffer(OnRequestAnimationFrame_.pipe(throttleTime_1.throttleTime(60))), filter_1.filter(function (i) { return !!i; }), map_1.map(function (i) { return i[i.length - 1]; }), filter_1.filter(function (i) { return !!i; })).subscribe(function (i) {
    image.src = "data:image/jpeg;base64," + i;
});
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Media Service: ", m);
});
// Export
var MediaService = /** @class */ (function () {
    function MediaService() {
    }
    // Input
    MediaService._InitSubject = _InitSubject;
    MediaService._ShareScreenSubject = _ShareScreenSubject;
    MediaService._AudioSubject = _AudioSubject;
    MediaService._VideoSubject = _VideoSubject;
    // Output
    MediaService.ImageSubject_ = ImageSubject_;
    MediaService.IsMediaConfiguredSubject_ = IsMediaConfiguredSubject_;
    MediaService.MediaSubject_ = MediaSubject_;
    MediaService.DebugSubject_ = DebugSubject_;
    return MediaService;
}());
exports.MediaService = MediaService;


/***/ }),

/***/ "./src/services/state/index.ts":
/*!*************************************!*\
  !*** ./src/services/state/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ "./src/services/state/state.ts":
/*!*************************************!*\
  !*** ./src/services/state/state.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _ClientSubject = new Subject_1.Subject();
var _IDSubject_ = new Subject_1.Subject();
var _CurrentTVChannelStateSubject = new Subject_1.Subject();
var _TVProgramStateSubject = new Subject_1.Subject();
var _IsPresentingSubject = new Subject_1.Subject();
// Output
var GameStateSubject_ = new BehaviorSubject_1.BehaviorSubject(definitions_1.DEFAULT_STATE);
var DebugSubject_ = new Subject_1.Subject();
var getState = function () { return (__assign({}, GameStateSubject_.getValue())); };
var updateState = function (partial) {
    var prevState = getState();
    var newState = __assign(__assign({}, prevState), partial);
    GameStateSubject_.next(newState);
};
var stateUpdateHandler = function (_a) {
    var client = _a[0], id = _a[1], channel = _a[2], program = _a[3], isPresenting = _a[4];
    DebugSubject_.next(client === null || client === void 0 ? void 0 : client.ConnectionManager.connections);
    updateState({
        streams: (client === null || client === void 0 ? void 0 : client.streams) || {},
        id: id || undefined,
        channel: channel || null,
        program: program,
        isPresenting: isPresenting,
    });
};
_InitSubject.subscribe(function () {
    combineLatest_1.combineLatest([
        _ClientSubject,
        _IDSubject_,
        _CurrentTVChannelStateSubject,
        _TVProgramStateSubject,
        _IsPresentingSubject,
    ]).subscribe(stateUpdateHandler);
    GameStateSubject_.subscribe(function (state) { return DebugSubject_.next(state); });
});
var StateService = /** @class */ (function () {
    function StateService() {
    }
    // Input
    StateService._InitSubject = _InitSubject;
    StateService._ClientSubject = _ClientSubject;
    StateService._IDSubject_ = _IDSubject_;
    StateService._CurrentTVChannelStateSubject = _CurrentTVChannelStateSubject;
    StateService._TVProgramStateSubject = _TVProgramStateSubject;
    StateService._IsPresentingSubject = _IsPresentingSubject;
    // Output
    StateService.GameStateSubject_ = GameStateSubject_;
    StateService.DebugSubject_ = DebugSubject_;
    return StateService;
}());
exports.StateService = StateService;


/***/ }),

/***/ "./src/services/unity/index.ts":
/*!*************************************!*\
  !*** ./src/services/unity/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/integration */ "./src/services/unity/integration/integration.ts");


/***/ }),

/***/ "./src/services/unity/integration/integration.ts":
/*!*******************************************************!*\
  !*** ./src/services/unity/integration/integration.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var outgoing_1 = __webpack_require__(/*! ../../communication/outgoing/outgoing */ "./src/services/communication/outgoing/outgoing.ts");
var unity_1 = __webpack_require__(/*! ../unity */ "./src/services/unity/unity.ts");
unity_1.UnityService.UnityMessageSubject_.subscribe(function (message) {
    outgoing_1.OutgoingMessageService._RawMessageSubject.next(message);
});


/***/ }),

/***/ "./src/services/unity/unity.ts":
/*!*************************************!*\
  !*** ./src/services/unity/unity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityService = void 0;
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
// Input
var _SendMessageToUnitySubject = new Subject_1.Subject();
var _MakeFullScreenSubject = new Subject_1.Subject();
var _QuitGameSubject = new Subject_1.Subject();
// Output
var UnityMessageSubject_ = new Subject_1.Subject();
var PositionStateSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Auxilary
var MANAGER = "Manager";
var ON_MESSAGE = "OnMessage";
// Methods
var sendToUnity = function (object, method, message) {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.SendMessage(object, method, message);
};
var sendMessageToUnityHandler = function (message) {
    DebugSubject_.next(["Send To Unity", message]);
    var messageString = JSON.stringify(message);
    sendToUnity(MANAGER, ON_MESSAGE, messageString);
};
var makeFullScreen = function () {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.SetFullscreen(1);
};
var quitGame = function () {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.Quit();
};
// Subscriptions
// @ts-ignore
window.sendUnityMessage = function (message) {
    return UnityMessageSubject_.next(message);
};
// _SendMessageToUnitySubject.subscribe(sendMessageToUnityHandler);
_MakeFullScreenSubject.subscribe(makeFullScreen);
_QuitGameSubject.subscribe(quitGame);
UnityMessageSubject_.subscribe(function () {
    quitGame();
});
var UnityService = /** @class */ (function () {
    function UnityService() {
    }
    UnityService._SendMessageToUnitySubject = _SendMessageToUnitySubject;
    UnityService._MakeFullScreenSubject = _MakeFullScreenSubject;
    // Output
    UnityService.UnityMessageSubject_ = UnityMessageSubject_;
    UnityService.PositionStateSubject_ = PositionStateSubject_;
    UnityService.DebugSubject_ = DebugSubject_;
    return UnityService;
}());
exports.UnityService = UnityService;


/***/ }),

/***/ "./src/shared/definitions.ts":
/*!***********************************!*\
  !*** ./src/shared/definitions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = exports.URL_NAME = exports.URL_TV_CHANNEL = exports.EMessageType = void 0;
// Messages
var EMessageType;
(function (EMessageType) {
    EMessageType["Present"] = "present";
    EMessageType["FullScreen"] = "fullscreen";
    EMessageType["Position"] = "position";
    EMessageType["ImageData"] = "image";
    EMessageType["Start"] = "start";
    EMessageType["Proceed"] = "proceed";
})(EMessageType = exports.EMessageType || (exports.EMessageType = {}));
// Backend
exports.URL_TV_CHANNEL = "/tv";
exports.URL_NAME = "/name";
exports.DEFAULT_STATE = {
    id: "",
    isPresenting: false,
    streams: {},
    channel: 1,
    program: {},
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSubject = exports.EnvironmentSubject = exports.generateId = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var getRandomNumbers = function (length) {
    var value = Array.from(Math.round(Math.random() * Math.pow(10, length)).toString()).reverse();
    return new Array(length)
        .fill("0")
        .map(function (v, i) { return value[i] || v; })
        .reverse()
        .join("");
};
exports.generateId = function (amount, length) {
    return new Array(amount)
        .fill(0)
        .map(function (a, i, b) { return "" + (i && "-") + getRandomNumbers(length); })
        .join("");
};
exports.EnvironmentSubject = new BehaviorSubject_1.BehaviorSubject("development");
exports.DebugSubject = new Subject_1.Subject();
exports.DebugSubject.pipe(filter_1.filter(function () { return exports.EnvironmentSubject.getValue() === "development"; })).subscribe(console.warn);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL0lubmVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PdXRlclN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvUmVwbGF5U3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3Rocm93RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2VUaW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3Rha2VVbnRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3Rocm90dGxlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL1F1ZXVlQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9RdWV1ZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL3F1ZXVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9JdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icm9hZGNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25uZWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydGMtbWVzc2FnaW5nLWFnZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvd2ViLXNvY2tldHMtYWdlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2JhY2tlbmQvYmFja2VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbnRlZ3JhdGlvbi9jaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYWNrZW5kL2ludGVncmF0aW9uL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jaGFubmVsL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW50ZWdyYXRpb24vdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW5jb21pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvb3V0Z29pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vcnRjL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL3J0Yy9ydGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3MvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3Mvd3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5pdC9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZWRpYS9tZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91bml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdW5pdHkvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VuaXR5L3VuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBVztBQUNuQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxvR0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUN2RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUN4Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsNEVBQW9CO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDcEMsbUJBQW1CLG1CQUFPLENBQUMsc0ZBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLCtFQUErRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3Qzs7Ozs7Ozs7Ozs7O0FDNUVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsa0ZBQXVCO0FBQ3RELHFCQUFxQixtQkFBTyxDQUFDLDhFQUFxQjtBQUNsRCxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBcUI7QUFDaEQsYUFBYSxtQkFBTyxDQUFDLDhEQUFhO0FBQ2xDLGVBQWUsbUJBQU8sQ0FBQyx3REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCLEVBQUUsa0JBQWtCLG9CQUFvQixFQUFFLGVBQWUsdUJBQXVCLEVBQUU7QUFDOUksU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7O0FDcEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDLHdCQUF3QixtQkFBTyxDQUFDLG9GQUF3QjtBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCO0FBQzNCO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ2pCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGdFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUNqQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBVztBQUNuQyxjQUFjLG1CQUFPLENBQUMsMEVBQW1CO0FBQ3pDLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFnQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyxrRkFBdUI7QUFDakQsZ0NBQWdDLG1CQUFPLENBQUMsb0dBQWdDO0FBQ3hFLDRCQUE0QixtQkFBTyxDQUFDLGtGQUF1QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQXVDO0FBQzNFLG9DQUFvQyx1Q0FBdUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlDOzs7Ozs7Ozs7Ozs7QUM3SGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUM7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGdFQUFjO0FBQ3pDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFjO0FBQ3pDLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFnQjtBQUM3QyxnQ0FBZ0MsbUJBQU8sQ0FBQyxvR0FBZ0M7QUFDeEUsNEJBQTRCLG1CQUFPLENBQUMsa0ZBQXVCO0FBQzNELHFCQUFxQixtQkFBTyxDQUFDLDRGQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQzFLYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQixtQkFBTyxDQUFDLG9FQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0M7Ozs7Ozs7Ozs7OztBQzVDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLDBFQUFtQjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBWTtBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDN0MscUJBQXFCLG1CQUFPLENBQUMsNEZBQWlDO0FBQzlELGVBQWUsbUJBQU8sQ0FBQyx3REFBVTtBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQyxvRkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsNkNBQTZDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0M7Ozs7Ozs7Ozs7OztBQ3JQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG9FQUFnQjtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsMEVBQW1CO0FBQzlDLDRCQUE0QixtQkFBTyxDQUFDLDRGQUE0QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtDQUErQyxtR0FBbUcsRUFBRTtBQUNwSjtBQUNBLHdDOzs7Ozs7Ozs7Ozs7QUN4SWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUNuQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDakQsZ0JBQWdCLG1CQUFPLENBQUMscUVBQWlCO0FBQ3pDLHdCQUF3QixtQkFBTyxDQUFDLDJFQUFvQjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx5RkFBMkI7QUFDN0Qsa0JBQWtCLG1CQUFPLENBQUMseUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDOzs7Ozs7Ozs7Ozs7QUNsSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQyxtRUFBbUUsOEJBQThCLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCx3Q0FBd0MsOEJBQThCLEVBQUUsRUFBRSxFQUFFO0FBQzFJO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsNkVBQXFCO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLG1GQUF3QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMseUJBQXlCLG1CQUFPLENBQUMsdUZBQTBCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLDJGQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDZGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMseUVBQWE7QUFDdkMsc0JBQXNCLG1CQUFPLENBQUMsMkZBQTRCO0FBQzFEO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBO0FBQ0Esa0VBQWtFLGdDQUFnQyxFQUFFO0FBQ3BHO0FBQ0E7QUFDQSxrRUFBa0UseUNBQXlDLHVDQUF1QyxFQUFFLEVBQUU7QUFDdEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsd0JBQXdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQ3BELDBCQUEwQixtQkFBTyxDQUFDLHlGQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0M7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBb0I7QUFDMUM7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFELDhCQUE4QixrRUFBa0U7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQzNFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtDOzs7Ozs7Ozs7Ozs7QUN4RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7Ozs7OztBQzFEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHFFQUFpQjtBQUM5QztBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUM7Ozs7Ozs7Ozs7OztBQzVFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDJFQUFvQjtBQUNwRCx3QkFBd0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDcEQsMEJBQTBCLG1CQUFPLENBQUMseUZBQTJCO0FBQzdELFlBQVksbUJBQU8sQ0FBQyw0REFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsMkVBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQStDLG9FQUFvRSxvQ0FBb0MsRUFBRSxHQUFHLEVBQUUsR0FBRztBQUNuTTtBQUNBLDhCQUE4QixvREFBb0Q7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUM7Ozs7Ozs7Ozs7OztBQzVGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDJFQUFvQjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx5RkFBMkI7QUFDN0Q7QUFDQSw4QkFBOEIscURBQXFEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUM7Ozs7Ozs7Ozs7OztBQ25EYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDJFQUFvQjtBQUNwRCwwQkFBMEIsbUJBQU8sQ0FBQyx5RkFBMkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEUsOEJBQThCLDZGQUE2RjtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0M7Ozs7Ozs7Ozs7OztBQ3RHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBb0I7QUFDMUMsaUJBQWlCLG1CQUFPLENBQUMsc0VBQVk7QUFDckM7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFELDRCQUE0QiwyQ0FBMkM7QUFDdkUsOEJBQThCLG9HQUFvRztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLG1CQUFtQjtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQzlGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHFFQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUM7Ozs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHFFQUFpQjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQywyRUFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDL0NhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMscUJBQXFCLG1CQUFPLENBQUMscUVBQWlCO0FBQzlDLG1CQUFtQixtQkFBTyxDQUFDLCtFQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseUNBQXlDLCtCQUErQixFQUFFLEdBQUcsRUFBRTtBQUN2SCx1Q0FBdUMseUNBQXlDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtBQUNySCx1Q0FBdUMseUNBQXlDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtBQUNySCxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4Qzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMscUJBQXFCLG1CQUFPLENBQUMscUVBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0Esd0RBQXdELDhCQUE4QixFQUFFO0FBQ3hGLGFBQWE7QUFDYixTQUFTO0FBQ1Qsb0RBQW9ELDhCQUE4QixFQUFFO0FBQ3BGLFNBQVMsRUFBRSxFQUFFO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUNuQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQywwRkFBc0I7QUFDekQsd0JBQXdCLG1CQUFPLENBQUMsb0ZBQW1CO0FBQ25ELHNCQUFzQixtQkFBTyxDQUFDLGdGQUFpQjtBQUMvQyx5QkFBeUIsbUJBQU8sQ0FBQyxzRkFBb0I7QUFDckQsNEJBQTRCLG1CQUFPLENBQUMsNkZBQTZCO0FBQ2pFLGtCQUFrQixtQkFBTyxDQUFDLHlFQUFtQjtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsMkVBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0M7Ozs7Ozs7Ozs7OztBQzVCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxrRUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUM7Ozs7Ozs7Ozs7OztBQ3JHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLCtEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQ0FBaUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMEM7Ozs7Ozs7Ozs7OztBQ2xFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELG9CQUFvQixtQkFBTyxDQUFDLDRFQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7Ozs7Ozs7O0FDakRhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUN4QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyw0RUFBZTtBQUMzQyx1QkFBdUIsbUJBQU8sQ0FBQyxrRkFBa0I7QUFDakQ7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG9CQUFvQixtQkFBTyxDQUFDLDRFQUFlO0FBQzNDLHVCQUF1QixtQkFBTyxDQUFDLGtGQUFrQjtBQUNqRDtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLDRFQUE0RSxFQUFFO0FBQ2pILHNDOzs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQ1JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUQ7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBd0csc0NBQXNDLEVBQUU7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0M7Ozs7Ozs7Ozs7OztBQ2ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsV0FBVyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSwyQzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyx3Q0FBd0MsMENBQTBDLEVBQUUsRUFBRSxFQUFFO0FBQ3hILG1DOzs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHFDQUFxQyxxRUFBcUUsRUFBRTtBQUM1Ryx1Qzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLCtFQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDOzs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLDJFQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLGlFQUFZO0FBQ3JDO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx5QkFBeUIsbUJBQU8sQ0FBQyxpRkFBb0I7QUFDckQsMkJBQTJCLG1CQUFPLENBQUMscUZBQXNCO0FBQ3pELDRCQUE0QixtQkFBTyxDQUFDLHVGQUF1QjtBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQywyRkFBeUI7QUFDL0Qsb0JBQW9CLG1CQUFPLENBQUMsdUVBQWU7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsbUVBQWE7QUFDdkMsaUJBQWlCLG1CQUFPLENBQUMsaUVBQVk7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzdDLG1CQUFtQixtQkFBTyxDQUFDLCtFQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7Ozs7Ozs7OztBQy9CYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELDZDQUE2QztBQUM3Qyx1Q0FBdUMsK0JBQStCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiw0Qzs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQywyRUFBb0I7QUFDN0MsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsK0M7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFtQixtQkFBTyxDQUFDLCtFQUFzQjtBQUNqRCxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsaUQ7Ozs7Ozs7Ozs7OztBQ1phO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsd0JBQXdCLG1CQUFPLENBQUMsK0VBQW1CO0FBQ25ELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrQkFBa0IsOEJBQThCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBLEVBQUU7QUFDRiw4Qzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDcEQsb0JBQW9CLG1CQUFPLENBQUMsdUVBQWU7QUFDM0MsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUM7QUFDQSxxQ0FBcUMsa0dBQWtHO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDOzs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyxtRkFBd0I7QUFDckQsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLCtCQUErQixzQkFBc0I7Ozs7Ozs7Ozs7Ozs7QUNQeEM7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBTyxDQUFDLDJEQUFvQjtBQUM1QixtQkFBTyxDQUFDLDJEQUFvQjtBQUM1QixtQkFBTyxDQUFDLHVFQUEwQjtBQUNsQyxtQkFBTyxDQUFDLHFEQUFpQjtBQUN6QixtQkFBTyxDQUFDLHVEQUFrQjtBQUMxQixtQkFBTyxDQUFDLHVEQUFrQjtBQUMxQixtQkFBTyxDQUFDLHVEQUFrQjs7Ozs7Ozs7Ozs7OztBQ1JiO0FBQ2I7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQyxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsbUJBQW1CLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2SGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLGtGQUE2QjtBQUMzRCxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDLGtCQUFrQixtQkFBTyxDQUFDLDJDQUFhO0FBQ3ZDLDJCQUEyQixtQkFBTyxDQUFDLDZEQUFzQjtBQUN6RCw0QkFBNEIsbUJBQU8sQ0FBQywrREFBdUI7QUFDM0Qsa0JBQWtCLG1CQUFPLENBQUMsOEZBQW1DO0FBQzdELFlBQVksbUJBQU8sQ0FBQyxrRkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHVDQUF1QyxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1EQUFtRDtBQUNuRyxpREFBaUQscURBQXFEO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZCQUE2QixFQUFFO0FBQzdHLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNySWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaklhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVix3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNIYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsOEZBQW1DO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLDhGQUFtQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsZ0JBQWdCLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFO0FBQ2hMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25GYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLDZEQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBLEtBQUssc0JBQXNCLHNDQUFzQyxFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0IsRUFBRTtBQUM3RCw2QkFBNkIsOEJBQThCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3Q0FBd0MsRUFBRTtBQUM5RTtBQUNBLHVDQUF1Qyx3Q0FBd0MsRUFBRTtBQUNqRjtBQUNBO0FBQ0EsdUNBQXVDLHdDQUF3QyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDN0ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDL0IsbUJBQU8sQ0FBQyx3RUFBcUI7Ozs7Ozs7Ozs7Ozs7QUNIaEI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRUFBdUI7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMscURBQVk7QUFDcEM7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNOWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3REFBbUI7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMscURBQVk7QUFDcEM7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNOWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELHNCQUFzQixtQkFBTyxDQUFDLHdHQUF3QztBQUN0RSxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsbUNBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3Q0FBd0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQTZDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdDQUF3QyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3pFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsd0VBQXFCOzs7Ozs7Ozs7Ozs7O0FDRmhCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdEQUFtQjtBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyxxREFBWTtBQUNwQztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELFlBQVksbUJBQU8sQ0FBQyxrRkFBNkI7QUFDakQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLGdFQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQywyREFBc0I7QUFDNUMsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1pZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQU8sQ0FBQyw0R0FBb0M7QUFDNUMsbUJBQU8sQ0FBQyw0R0FBb0M7QUFDNUMsbUJBQU8sQ0FBQyxrR0FBK0I7QUFDdkMsbUJBQU8sQ0FBQyxnR0FBOEI7Ozs7Ozs7Ozs7Ozs7QUNMekI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDbEQsZ0JBQWdCLG1CQUFPLENBQUMsbUVBQTBCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyx1REFBb0I7QUFDekMsY0FBYyxtQkFBTyxDQUFDLDJEQUFzQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsMkRBQXNCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLGtGQUF5QjtBQUNsRCxZQUFZLG1CQUFPLENBQUMsOERBQWU7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWE7QUFDdEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5Qlk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHNGQUErQjtBQUMvRCxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsc0NBQWdCO0FBQ3RDLG9CQUFvQixtQkFBTyxDQUFDLGdFQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSEFBZ0gscUNBQXFDLEVBQUU7QUFDdkosa0hBQWtILHVDQUF1QyxFQUFFO0FBQzNKLHFIQUFxSCwwQ0FBMEMsRUFBRTtBQUNqSyxrSEFBa0gsdUNBQXVDLEVBQUU7QUFDM0osbUhBQW1ILHdDQUF3QyxFQUFFO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwrQ0FBK0MsOEJBQThCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMzRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDbEQsY0FBYyxtQkFBTyxDQUFDLDJEQUFzQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsMkRBQXNCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLGtGQUF5QjtBQUNsRCxpQkFBaUIsbUJBQU8sQ0FBQyxrRkFBeUI7QUFDbEQsV0FBVyxtQkFBTyxDQUFDLDBEQUFhO0FBQ2hDLFlBQVksbUJBQU8sQ0FBQyx1REFBUTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRCxxREFBcUQscURBQXFELEVBQUU7QUFDNUc7QUFDQTtBQUNBLENBQUM7QUFDRCxxREFBcUQsa0RBQWtELEVBQUU7QUFDekc7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVCWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELHFCQUFxQixtQkFBTyxDQUFDLG9HQUFzQztBQUNuRSxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGtCQUFrQixtQkFBTyxDQUFDLDhGQUFtQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLHNDQUFnQjtBQUN0QyxlQUFlLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHlDQUF5QztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFlBQVksRUFBRSw0Q0FBNEMsNENBQTRDLEVBQUU7QUFDMUosa0RBQWtELFlBQVksRUFBRSw0Q0FBNEMscUNBQXFDLEVBQUU7QUFDbkosa0RBQWtELFlBQVksRUFBRSw0Q0FBNEMsZ0NBQWdDLEVBQUU7QUFDOUk7QUFDQSw4Q0FBOEMsc0NBQXNDLEVBQUU7QUFDdEY7QUFDQTtBQUNBLENBQUM7QUFDRCxrREFBa0QsWUFBWSxFQUFFLDRDQUE0Qyw2QkFBNkIsRUFBRSwyQkFBMkIsOEJBQThCLEVBQUU7QUFDdE0sa0RBQWtELFlBQVksRUFBRSxzQ0FBc0Msc0JBQXNCLEVBQUU7QUFDOUg7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMzRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsdURBQW9CO0FBQ3pDLFlBQVksbUJBQU8sQ0FBQyw4REFBZTtBQUNuQyxXQUFXLG1CQUFPLENBQUMsb0RBQU87QUFDMUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwwQkFBMEIsbUJBQU8sQ0FBQyxzRUFBZ0M7QUFDbEUsa0JBQWtCLG1CQUFPLENBQUMsOEZBQW1DO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyxzRkFBK0I7QUFDL0QsZUFBZSxtQkFBTyxDQUFDLHdGQUFnQztBQUN2RCxjQUFjLG1CQUFPLENBQUMsc0NBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNDQUFzQyxFQUFFO0FBQ3JGO0FBQ0E7QUFDQSw0REFBNEQsYUFBYSxFQUFFLHdDQUF3QyxtQ0FBbUMsRUFBRTtBQUN4Siw0REFBNEQsYUFBYSxFQUFFLHdDQUF3QywwQkFBMEIsRUFBRTtBQUMvSSw4Q0FBOEMsOEJBQThCLEVBQUU7QUFDOUU7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMURhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQU8sQ0FBQyxpRkFBMkI7Ozs7Ozs7Ozs7Ozs7QUNGdEI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHNGQUErQjtBQUMvRCxzQkFBc0IsbUJBQU8sQ0FBQyx3R0FBd0M7QUFDdEUsZUFBZSxtQkFBTyxDQUFDLHdGQUFnQztBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyw4RkFBbUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyxtQ0FBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9EQUFvRDtBQUNuRiw4QkFBOEIsbURBQW1EO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5RWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRUFBdUI7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsZ0VBQXVCO0FBQy9DLFlBQVksbUJBQU8sQ0FBQyw0RUFBNkI7QUFDakQsY0FBYyxtQkFBTyxDQUFDLHdEQUFtQjtBQUN6QyxjQUFjLG1CQUFPLENBQUMsd0RBQW1CO0FBQ3pDLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBUztBQUM5Qix1REFBdUQscURBQXFELEVBQUU7QUFDOUcsdURBQXVELHFEQUFxRCxFQUFFO0FBQzlHLHVEQUF1RCxpREFBaUQsRUFBRTtBQUMxRyx1REFBdUQsNkNBQTZDLEVBQUU7QUFDdEcsdURBQXVELGlEQUFpRCxFQUFFOzs7Ozs7Ozs7Ozs7O0FDWjdGO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQU8sQ0FBQyxrRkFBMkI7Ozs7Ozs7Ozs7Ozs7QUNGdEI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxnR0FBdUM7QUFDaEUsWUFBWSxtQkFBTyxDQUFDLDRFQUE2QjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsb0RBQWlCO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQywrQ0FBVTtBQUNoQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkWTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELHNCQUFzQixtQkFBTyxDQUFDLHdHQUF3QztBQUN0RSxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsWUFBWSxtQkFBTyxDQUFDLGtGQUE2QjtBQUNqRCxxQkFBcUIsbUJBQU8sQ0FBQyxvR0FBc0M7QUFDbkUsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyxtQ0FBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsNENBQTRDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsNENBQTRDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx3Q0FBd0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRSxFQUFFO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsd0NBQXdDLHFEQUFxRCxFQUFFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSSxZQUFZLEVBQUUsMkJBQTJCLHdCQUF3QixFQUFFLGlDQUFpQyxZQUFZLEVBQUU7QUFDcFAsaUNBQWlDO0FBQ2pDLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdOYTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHNGQUErQjtBQUMvRCxzQkFBc0IsbUJBQU8sQ0FBQyx3R0FBd0M7QUFDdEUsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLDZEQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0IsaUNBQWlDO0FBQ2pGO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrQ0FBa0MsRUFBRTtBQUN0RixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsa0ZBQTJCOzs7Ozs7Ozs7Ozs7O0FDRnRCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsZ0dBQXVDO0FBQ2hFLGNBQWMsbUJBQU8sQ0FBQywrQ0FBVTtBQUNoQztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG1FQUFtRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHNGQUErQjtBQUMvRCxlQUFlLG1CQUFPLENBQUMsd0ZBQWdDO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLHNFQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQkFBc0IsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQW1ELEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZ0VBQWdFLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcIi4vU3ViamVjdFwiKTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvclwiKTtcbnZhciBCZWhhdmlvclN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCZWhhdmlvclN1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmVoYXZpb3JTdWJqZWN0KF92YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfc3VwZXIucHJvdG90eXBlLl9zdWJzY3JpYmUuY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiAmJiAhc3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudGhyb3duRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBCZWhhdmlvclN1YmplY3Q7XG59KFN1YmplY3RfMS5TdWJqZWN0KSk7XG5leHBvcnRzLkJlaGF2aW9yU3ViamVjdCA9IEJlaGF2aW9yU3ViamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJlaGF2aW9yU3ViamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaWJlclwiKTtcbnZhciBJbm5lclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbm5lclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJTdWJzY3JpYmVyKHBhcmVudCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm91dGVyVmFsdWUgPSBvdXRlclZhbHVlO1xuICAgICAgICBfdGhpcy5vdXRlckluZGV4ID0gb3V0ZXJJbmRleDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5TmV4dCh0aGlzLm91dGVyVmFsdWUsIHZhbHVlLCB0aGlzLm91dGVySW5kZXgsIHRoaXMuaW5kZXgrKywgdGhpcyk7XG4gICAgfTtcbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlFcnJvcihlcnJvciwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlDb21wbGV0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIElubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuSW5uZXJTdWJzY3JpYmVyID0gSW5uZXJTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5uZXJTdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVtcHR5XzEgPSByZXF1aXJlKFwiLi9vYnNlcnZhYmxlL2VtcHR5XCIpO1xudmFyIG9mXzEgPSByZXF1aXJlKFwiLi9vYnNlcnZhYmxlL29mXCIpO1xudmFyIHRocm93RXJyb3JfMSA9IHJlcXVpcmUoXCIuL29ic2VydmFibGUvdGhyb3dFcnJvclwiKTtcbnZhciBOb3RpZmljYXRpb25LaW5kO1xuKGZ1bmN0aW9uIChOb3RpZmljYXRpb25LaW5kKSB7XG4gICAgTm90aWZpY2F0aW9uS2luZFtcIk5FWFRcIl0gPSBcIk5cIjtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiRVJST1JcIl0gPSBcIkVcIjtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiQ09NUExFVEVcIl0gPSBcIkNcIjtcbn0pKE5vdGlmaWNhdGlvbktpbmQgPSBleHBvcnRzLk5vdGlmaWNhdGlvbktpbmQgfHwgKGV4cG9ydHMuTm90aWZpY2F0aW9uS2luZCA9IHt9KSk7XG52YXIgTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb24oa2luZCwgdmFsdWUsIGVycm9yKSB7XG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0ga2luZCA9PT0gJ04nO1xuICAgIH1cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0ICYmIG9ic2VydmVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IgJiYgb2JzZXJ2ZXIuZXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuY29tcGxldGUgJiYgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQgJiYgbmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZSAmJiBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uIChuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciAmJiB0eXBlb2YgbmV4dE9yT2JzZXJ2ZXIubmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShuZXh0T3JPYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kbyhuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b09ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBraW5kID0gdGhpcy5raW5kO1xuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHJldHVybiBvZl8xLm9mKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3JfMS50aHJvd0Vycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5XzEuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgbm90aWZpY2F0aW9uIGtpbmQgdmFsdWUnKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignTicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbjtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ0MnKTtcbiAgICBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdOJywgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xufSgpKTtcbmV4cG9ydHMuTm90aWZpY2F0aW9uID0gTm90aWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhblJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2NhblJlcG9ydEVycm9yXCIpO1xudmFyIHRvU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4vdXRpbC90b1N1YnNjcmliZXJcIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc3ltYm9sL29ic2VydmFibGVcIik7XG52YXIgcGlwZV8xID0gcmVxdWlyZShcIi4vdXRpbC9waXBlXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvcjtcbiAgICAgICAgdmFyIHNpbmsgPSB0b1N1YnNjcmliZXJfMS50b1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGlmIChvcGVyYXRvcikge1xuICAgICAgICAgICAgc2luay5hZGQob3BlcmF0b3IuY2FsbChzaW5rLCB0aGlzLnNvdXJjZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luay5hZGQodGhpcy5zb3VyY2UgfHwgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmICFzaW5rLnN5bmNFcnJvclRocm93YWJsZSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZShzaW5rKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHNpbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHNpbmsuc3luY0Vycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW5rO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzaW5rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yXzEuY2FuUmVwb3J0RXJyb3Ioc2luaykpIHtcbiAgICAgICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChuZXh0LCBwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSAmJiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB2YWx1ZSA9IHg7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZ18xLmNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xuZXhwb3J0cy5lbXB0eSA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIE91dGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE91dGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPdXRlclN1YnNjcmliZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5PdXRlclN1YnNjcmliZXIgPSBPdXRlclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PdXRlclN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCIuL1N1YmplY3RcIik7XG52YXIgcXVldWVfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlci9xdWV1ZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmlwdGlvblwiKTtcbnZhciBvYnNlcnZlT25fMSA9IHJlcXVpcmUoXCIuL29wZXJhdG9ycy9vYnNlcnZlT25cIik7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcIik7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3ViamVjdFN1YnNjcmlwdGlvblwiKTtcbnZhciBSZXBsYXlTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVwbGF5U3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAoYnVmZmVyU2l6ZSA9PT0gdm9pZCAwKSB7IGJ1ZmZlclNpemUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICAgICAgaWYgKHdpbmRvd1RpbWUgPT09IHZvaWQgMCkgeyB3aW5kb3dUaW1lID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICBfdGhpcy5faW5maW5pdGVUaW1lV2luZG93ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLl9idWZmZXJTaXplID0gYnVmZmVyU2l6ZSA8IDEgPyAxIDogYnVmZmVyU2l6ZTtcbiAgICAgICAgX3RoaXMuX3dpbmRvd1RpbWUgPSB3aW5kb3dUaW1lIDwgMSA/IDEgOiB3aW5kb3dUaW1lO1xuICAgICAgICBpZiAod2luZG93VGltZSA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICAgICAgICBfdGhpcy5faW5maW5pdGVUaW1lV2luZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLm5leHQgPSBfdGhpcy5uZXh0SW5maW5pdGVUaW1lV2luZG93O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHRUaW1lV2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUubmV4dEluZmluaXRlVGltZVdpbmRvdyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX2V2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgICAgX2V2ZW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgaWYgKF9ldmVudHMubGVuZ3RoID4gdGhpcy5fYnVmZmVyU2l6ZSkge1xuICAgICAgICAgICAgX2V2ZW50cy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICB9O1xuICAgIFJlcGxheVN1YmplY3QucHJvdG90eXBlLm5leHRUaW1lV2luZG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKG5ldyBSZXBsYXlFdmVudCh0aGlzLl9nZXROb3coKSwgdmFsdWUpKTtcbiAgICAgICAgdGhpcy5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfaW5maW5pdGVUaW1lV2luZG93ID0gdGhpcy5faW5maW5pdGVUaW1lV2luZG93O1xuICAgICAgICB2YXIgX2V2ZW50cyA9IF9pbmZpbml0ZVRpbWVXaW5kb3cgPyB0aGlzLl9ldmVudHMgOiB0aGlzLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cygpO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBsZW4gPSBfZXZlbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkIHx8IHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbl8xLlN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQoc3Vic2NyaWJlciA9IG5ldyBvYnNlcnZlT25fMS5PYnNlcnZlT25TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHNjaGVkdWxlcikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5maW5pdGVUaW1lV2luZG93KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbiAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChfZXZlbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KF9ldmVudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFJlcGxheVN1YmplY3QucHJvdG90eXBlLl9nZXROb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY2hlZHVsZXIgfHwgcXVldWVfMS5xdWV1ZSkubm93KCk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLl9nZXROb3coKTtcbiAgICAgICAgdmFyIF9idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICAgICAgdmFyIF93aW5kb3dUaW1lID0gdGhpcy5fd2luZG93VGltZTtcbiAgICAgICAgdmFyIF9ldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIHZhciBldmVudHNDb3VudCA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3BsaWNlQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoc3BsaWNlQ291bnQgPCBldmVudHNDb3VudCkge1xuICAgICAgICAgICAgaWYgKChub3cgLSBfZXZlbnRzW3NwbGljZUNvdW50XS50aW1lKSA8IF93aW5kb3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpY2VDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudHNDb3VudCA+IF9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBzcGxpY2VDb3VudCA9IE1hdGgubWF4KHNwbGljZUNvdW50LCBldmVudHNDb3VudCAtIF9idWZmZXJTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BsaWNlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNwbGljZSgwLCBzcGxpY2VDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ldmVudHM7XG4gICAgfTtcbiAgICByZXR1cm4gUmVwbGF5U3ViamVjdDtcbn0oU3ViamVjdF8xLlN1YmplY3QpKTtcbmV4cG9ydHMuUmVwbGF5U3ViamVjdCA9IFJlcGxheVN1YmplY3Q7XG52YXIgUmVwbGF5RXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcGxheUV2ZW50KHRpbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlcGxheUV2ZW50O1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcGxheVN1YmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlNjaGVkdWxlckFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLm5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERhdGUubm93KCk7IH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG5leHBvcnRzLlNjaGVkdWxlciA9IFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YmplY3RTdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YmplY3RTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTdWJqZWN0U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU3ViamVjdFN1YnNjcmliZXIgPSBTdWJqZWN0U3Vic2NyaWJlcjtcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgX3RoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3ViamVjdC5wcm90b3R5cGVbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaWJlcih0aGlzKTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgIHZhciBjb3B5ID0gb2JzZXJ2ZXJzLnNsaWNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlbaV0uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgIHZhciBjb3B5ID0gb2JzZXJ2ZXJzLnNsaWNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlbaV0uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbl8xLlN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFN1YmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3Q7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLlN1YmplY3QgPSBTdWJqZWN0O1xudmFyIEFub255bW91c1N1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbm9ueW1vdXNTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24ubmV4dCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFub255bW91c1N1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydHMuQW5vbnltb3VzU3ViamVjdCA9IEFub255bW91c1N1YmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmlwdGlvblwiKTtcbnZhciBTdWJqZWN0U3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdFN1YnNjcmlwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaXB0aW9uKHN1YmplY3QsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0U3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB2YXIgc3ViamVjdCA9IHRoaXMuc3ViamVjdDtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHN1YmplY3Qub2JzZXJ2ZXJzO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBudWxsO1xuICAgICAgICBpZiAoIW9ic2VydmVycyB8fCBvYnNlcnZlcnMubGVuZ3RoID09PSAwIHx8IHN1YmplY3QuaXNTdG9wcGVkIHx8IHN1YmplY3QuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmliZXJJbmRleCA9IG9ic2VydmVycy5pbmRleE9mKHRoaXMuc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKHN1YnNjcmliZXJJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0U3Vic2NyaXB0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3ViamVjdFN1YnNjcmlwdGlvbiA9IFN1YmplY3RTdWJzY3JpcHRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0U3Vic2NyaXB0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuL09ic2VydmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL2ludGVybmFsL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2hvc3RSZXBvcnRFcnJvclwiKTtcbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSB0aGlzLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0Lm5leHQ7XG4gICAgICAgICAgICBlcnJvciA9IG9ic2VydmVyT3JOZXh0LmVycm9yO1xuICAgICAgICAgICAgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlck9yTmV4dCAhPT0gT2JzZXJ2ZXJfMS5lbXB0eSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oY29udGV4dC51bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGNvbnRleHQudW5zdWJzY3JpYmUuYmluZChjb250ZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSBfdGhpcy51bnN1YnNjcmliZS5iaW5kKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIF90aGlzLl9uZXh0ID0gbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIF90aGlzLl9jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQgJiYgdGhpcy5fbmV4dCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX25leHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9uZXh0LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIHZhciB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nID0gY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2NvbXBsZXRlLmNhbGwoX3RoaXMuX2NvbnRleHQpOyB9O1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgd3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JVbnN1YiA9IGZ1bmN0aW9uIChmbiwgdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclNldEVycm9yID0gZnVuY3Rpb24gKHBhcmVudCwgZm4sIHZhbHVlKSB7XG4gICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGNhbGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICBfcGFyZW50U3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnRzLlNhZmVTdWJzY3JpYmVyID0gU2FmZVN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNBcnJheVwiKTtcbnZhciBpc09iamVjdF8xID0gcmVxdWlyZShcIi4vdXRpbC9pc09iamVjdFwiKTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yXCIpO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudE9yUGFyZW50cyA9IF9hLl9wYXJlbnRPclBhcmVudHMsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfcGFyZW50T3JQYXJlbnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRPclBhcmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yID8gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSA6IFtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0XzEuaXNPYmplY3Qoc3ViKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0ZWFyZG93bjtcbiAgICAgICAgaWYgKCF0ZWFyZG93bikge1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSB0aGlzIHx8IHN1YnNjcmlwdGlvbi5jbG9zZWQgfHwgdHlwZW9mIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIShzdWJzY3JpcHRpb24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9zdWJzY3JpcHRpb25zID0gW3RtcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBfcGFyZW50T3JQYXJlbnRzID0gc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHMgPSBbX3BhcmVudE9yUGFyZW50cywgdGhpc107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cy5pbmRleE9mKHRoaXMpID09PSAtMSkge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW3N1YnNjcmlwdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMuc3BsaWNlKHN1YnNjcmlwdGlvbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uIChlbXB0eSkge1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfShuZXcgU3Vic2NyaXB0aW9uKCkpKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydHMuU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uO1xuZnVuY3Rpb24gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGVycm9ycykge1xuICAgIHJldHVybiBlcnJvcnMucmVkdWNlKGZ1bmN0aW9uIChlcnJzLCBlcnIpIHsgcmV0dXJuIGVycnMuY29uY2F0KChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikgPyBlcnIuZXJyb3JzIDogZXJyKTsgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IGZhbHNlO1xuZXhwb3J0cy5jb25maWcgPSB7XG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHNldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RFUFJFQ0FURUQhIFJ4SlMgd2FzIHNldCB0byB1c2UgZGVwcmVjYXRlZCBzeW5jaHJvbm91cyBlcnJvciBoYW5kbGluZyBiZWhhdmlvciBieSBjb2RlIGF0OiBcXG4nICsgZXJyb3Iuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1J4SlM6IEJhY2sgdG8gYSBiZXR0ZXIgZXJyb3IgYmVoYXZpb3IuIFRoYW5rIHlvdS4gPDMnKTtcbiAgICAgICAgfVxuICAgICAgICBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKCkge1xuICAgICAgICByZXR1cm4gX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNTY2hlZHVsZXJcIik7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheVwiKTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9PdXRlclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0XCIpO1xudmFyIGZyb21BcnJheV8xID0gcmVxdWlyZShcIi4vZnJvbUFycmF5XCIpO1xudmFyIE5PTkUgPSB7fTtcbmZ1bmN0aW9uIGNvbWJpbmVMYXRlc3QoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gbnVsbDtcbiAgICB2YXIgc2NoZWR1bGVyID0gbnVsbDtcbiAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5XzEuaXNBcnJheShvYnNlcnZhYmxlc1swXSkpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheV8xLmZyb21BcnJheShvYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbmV4cG9ydHMuY29tYmluZUxhdGVzdCA9IGNvbWJpbmVMYXRlc3Q7XG52YXIgQ29tYmluZUxhdGVzdE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICBDb21iaW5lTGF0ZXN0T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydHMuQ29tYmluZUxhdGVzdE9wZXJhdG9yID0gQ29tYmluZUxhdGVzdE9wZXJhdG9yO1xudmFyIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tYmluZUxhdGVzdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgX3RoaXMub2JzZXJ2YWJsZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKE5PTkUpO1xuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2YWJsZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGxlbjtcbiAgICAgICAgICAgIHRoaXMudG9SZXNwb25kID0gbGVuO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBvYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICh1bnVzZWQpIHtcbiAgICAgICAgaWYgKCh0aGlzLmFjdGl2ZSAtPSAxKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRWYWwgPSB2YWx1ZXNbb3V0ZXJJbmRleF07XG4gICAgICAgIHZhciB0b1Jlc3BvbmQgPSAhdGhpcy50b1Jlc3BvbmRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBvbGRWYWwgPT09IE5PTkUgPyAtLXRoaXMudG9SZXNwb25kIDogdGhpcy50b1Jlc3BvbmQ7XG4gICAgICAgIHZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgICAgIGlmICh0b1Jlc3BvbmQgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5UmVzdWx0U2VsZWN0b3IodmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5UmVzdWx0U2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdFNlbGVjdG9yLmFwcGx5KHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydHMuQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgPSBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbWJpbmVMYXRlc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG5leHBvcnRzLkVNUFRZID0gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pO1xuZnVuY3Rpb24gZW1wdHkoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA/IGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikgOiBleHBvcnRzLkVNUFRZO1xufVxuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZnVuY3Rpb24gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgc3Vic2NyaWJlVG9fMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvXCIpO1xudmFyIHNjaGVkdWxlZF8xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlZC9zY2hlZHVsZWRcIik7XG5mdW5jdGlvbiBmcm9tKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlZF8xLnNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG59XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb0FycmF5XCIpO1xudmFyIHNjaGVkdWxlQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheVwiKTtcbmZ1bmN0aW9uIGZyb21BcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShzdWJzY3JpYmVUb0FycmF5XzEuc3Vic2NyaWJlVG9BcnJheShpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXlfMS5zY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZnJvbUFycmF5ID0gZnJvbUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc1NjaGVkdWxlclwiKTtcbnZhciBmcm9tQXJyYXlfMSA9IHJlcXVpcmUoXCIuL2Zyb21BcnJheVwiKTtcbnZhciBzY2hlZHVsZUFycmF5XzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXlcIik7XG5mdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHNjaGVkdWxlciA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5XzEuc2NoZWR1bGVBcnJheShhcmdzLCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZyb21BcnJheV8xLmZyb21BcnJheShhcmdzKTtcbiAgICB9XG59XG5leHBvcnRzLm9mID0gb2Y7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vZi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIgfSk7IH0pO1xuICAgIH1cbn1cbmV4cG9ydHMudGhyb3dFcnJvciA9IHRocm93RXJyb3I7XG5mdW5jdGlvbiBkaXNwYXRjaChfYSkge1xuICAgIHZhciBlcnJvciA9IF9hLmVycm9yLCBzdWJzY3JpYmVyID0gX2Euc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG5mdW5jdGlvbiBidWZmZXIoY2xvc2luZ05vdGlmaWVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGJ1ZmZlck9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgQnVmZmVyT3BlcmF0b3IoY2xvc2luZ05vdGlmaWVyKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYnVmZmVyID0gYnVmZmVyO1xudmFyIEJ1ZmZlck9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdWZmZXJPcGVyYXRvcihjbG9zaW5nTm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy5jbG9zaW5nTm90aWZpZXIgPSBjbG9zaW5nTm90aWZpZXI7XG4gICAgfVxuICAgIEJ1ZmZlck9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgQnVmZmVyU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmNsb3NpbmdOb3RpZmllcikpO1xuICAgIH07XG4gICAgcmV0dXJuIEJ1ZmZlck9wZXJhdG9yO1xufSgpKTtcbnZhciBCdWZmZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnVmZmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdWZmZXJTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjbG9zaW5nTm90aWZpZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpcy5hZGQoc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdChfdGhpcywgY2xvc2luZ05vdGlmaWVyKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQnVmZmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXIucHVzaCh2YWx1ZSk7XG4gICAgfTtcbiAgICBCdWZmZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGJ1ZmZlcik7XG4gICAgfTtcbiAgICByZXR1cm4gQnVmZmVyU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWZmZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVyL2FzeW5jXCIpO1xuZnVuY3Rpb24gZGVib3VuY2VUaW1lKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpKTsgfTtcbn1cbmV4cG9ydHMuZGVib3VuY2VUaW1lID0gZGVib3VuY2VUaW1lO1xudmFyIERlYm91bmNlVGltZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIERlYm91bmNlVGltZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRGVib3VuY2VUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1ZVRpbWUsIHRoaXMuc2NoZWR1bGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lT3BlcmF0b3I7XG59KCkpO1xudmFyIERlYm91bmNlVGltZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlVGltZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgX3RoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1ZVRpbWUsIHRoaXMpKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWROZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmRlYm91bmNlZE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMubGFzdFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGxhc3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmNsZWFyRGVib3VuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlYm91bmNlZFN1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZGVib3VuY2VkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRlYm91bmNlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlci5kZWJvdW5jZWROZXh0KCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJvdW5jZVRpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbnZhciBGaWx0ZXJPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmlsdGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWx0ZXJTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWx0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRmlsdGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1hcE9wZXJhdG9yID0gTWFwT3BlcmF0b3I7XG52YXIgTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIE5vdGlmaWNhdGlvbl8xID0gcmVxdWlyZShcIi4uL05vdGlmaWNhdGlvblwiKTtcbmZ1bmN0aW9uIG9ic2VydmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9ic2VydmVPbk9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgT2JzZXJ2ZU9uT3BlcmF0b3Ioc2NoZWR1bGVyLCBkZWxheSkpO1xuICAgIH07XG59XG5leHBvcnRzLm9ic2VydmVPbiA9IG9ic2VydmVPbjtcbnZhciBPYnNlcnZlT25PcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2ZU9uT3BlcmF0b3Ioc2NoZWR1bGVyLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB9XG4gICAgT2JzZXJ2ZU9uT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBPYnNlcnZlT25TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuc2NoZWR1bGVyLCB0aGlzLmRlbGF5KSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2ZU9uT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZlT25PcGVyYXRvciA9IE9ic2VydmVPbk9wZXJhdG9yO1xudmFyIE9ic2VydmVPblN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZlT25TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmVPblN1YnNjcmliZXIoZGVzdGluYXRpb24sIHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IGFyZy5ub3RpZmljYXRpb24sIGRlc3RpbmF0aW9uID0gYXJnLmRlc3RpbmF0aW9uO1xuICAgICAgICBub3RpZmljYXRpb24ub2JzZXJ2ZShkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLnNjaGVkdWxlTWVzc2FnZSA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKE9ic2VydmVPblN1YnNjcmliZXIuZGlzcGF0Y2gsIHRoaXMuZGVsYXksIG5ldyBPYnNlcnZlT25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgdGhpcy5kZXN0aW5hdGlvbikpKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KHZhbHVlKSk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbi5jcmVhdGVFcnJvcihlcnIpKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTWVzc2FnZShOb3RpZmljYXRpb25fMS5Ob3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZlT25TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5PYnNlcnZlT25TdWJzY3JpYmVyID0gT2JzZXJ2ZU9uU3Vic2NyaWJlcjtcbnZhciBPYnNlcnZlT25NZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZlT25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSBub3RpZmljYXRpb247XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIE9ic2VydmVPbk1lc3NhZ2U7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZlT25NZXNzYWdlID0gT2JzZXJ2ZU9uTWVzc2FnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmVPbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vT3V0ZXJTdWJzY3JpYmVyXCIpO1xudmFyIElubmVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL0lubmVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG52YXIgbWFwXzEgPSByZXF1aXJlKFwiLi9tYXBcIik7XG52YXIgZnJvbV8xID0gcmVxdWlyZShcIi4uL29ic2VydmFibGUvZnJvbVwiKTtcbmZ1bmN0aW9uIHN3aXRjaE1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5waXBlKHN3aXRjaE1hcChmdW5jdGlvbiAoYSwgaSkgeyByZXR1cm4gZnJvbV8xLmZyb20ocHJvamVjdChhLCBpKSkucGlwZShtYXBfMS5tYXAoZnVuY3Rpb24gKGIsIGlpKSB7IHJldHVybiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSk7IH0pKTsgfSkpOyB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmxpZnQobmV3IFN3aXRjaE1hcE9wZXJhdG9yKHByb2plY3QpKTsgfTtcbn1cbmV4cG9ydHMuc3dpdGNoTWFwID0gc3dpdGNoTWFwO1xudmFyIFN3aXRjaE1hcE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTd2l0Y2hNYXBPcGVyYXRvcihwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIFN3aXRjaE1hcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgU3dpdGNoTWFwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByb2plY3QpKTtcbiAgICB9O1xuICAgIHJldHVybiBTd2l0Y2hNYXBPcGVyYXRvcjtcbn0oKSk7XG52YXIgU3dpdGNoTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN3aXRjaE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3dpdGNoTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QodmFsdWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyU3ViKHJlc3VsdCwgdmFsdWUsIGluZGV4KTtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9pbm5lclN1YiA9IGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLmlubmVyU3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAoaW5uZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlubmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaWJlciA9IG5ldyBJbm5lclN1YnNjcmliZXJfMS5Jbm5lclN1YnNjcmliZXIodGhpcywgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKGlubmVyU3Vic2NyaWJlcik7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHJlc3VsdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGlubmVyU3Vic2NyaWJlcik7XG4gICAgICAgIGlmICh0aGlzLmlubmVyU3Vic2NyaXB0aW9uICE9PSBpbm5lclN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZCh0aGlzLmlubmVyU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSB0aGlzLmlubmVyU3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAoIWlubmVyU3Vic2NyaXB0aW9uIHx8IGlubmVyU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoaW5uZXJTdWIpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgZGVzdGluYXRpb24ucmVtb3ZlKGlubmVyU3ViKTtcbiAgICAgICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpdGNoTWFwU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2l0Y2hNYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG5mdW5jdGlvbiB0YWtlVW50aWwobm90aWZpZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmxpZnQobmV3IFRha2VVbnRpbE9wZXJhdG9yKG5vdGlmaWVyKSk7IH07XG59XG5leHBvcnRzLnRha2VVbnRpbCA9IHRha2VVbnRpbDtcbnZhciBUYWtlVW50aWxPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFrZVVudGlsT3BlcmF0b3Iobm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy5ub3RpZmllciA9IG5vdGlmaWVyO1xuICAgIH1cbiAgICBUYWtlVW50aWxPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHRha2VVbnRpbFN1YnNjcmliZXIgPSBuZXcgVGFrZVVudGlsU3Vic2NyaWJlcihzdWJzY3JpYmVyKTtcbiAgICAgICAgdmFyIG5vdGlmaWVyU3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0YWtlVW50aWxTdWJzY3JpYmVyLCB0aGlzLm5vdGlmaWVyKTtcbiAgICAgICAgaWYgKG5vdGlmaWVyU3Vic2NyaXB0aW9uICYmICF0YWtlVW50aWxTdWJzY3JpYmVyLnNlZW5WYWx1ZSkge1xuICAgICAgICAgICAgdGFrZVVudGlsU3Vic2NyaWJlci5hZGQobm90aWZpZXJTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUodGFrZVVudGlsU3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRha2VVbnRpbFN1YnNjcmliZXI7XG4gICAgfTtcbiAgICByZXR1cm4gVGFrZVVudGlsT3BlcmF0b3I7XG59KCkpO1xudmFyIFRha2VVbnRpbFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWtlVW50aWxTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRha2VVbnRpbFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNlZW5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRha2VVbnRpbFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5zZWVuVmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBUYWtlVW50aWxTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIHJldHVybiBUYWtlVW50aWxTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRha2VVbnRpbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vT3V0ZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdFwiKTtcbmV4cG9ydHMuZGVmYXVsdFRocm90dGxlQ29uZmlnID0ge1xuICAgIGxlYWRpbmc6IHRydWUsXG4gICAgdHJhaWxpbmc6IGZhbHNlXG59O1xuZnVuY3Rpb24gdGhyb3R0bGUoZHVyYXRpb25TZWxlY3RvciwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IGV4cG9ydHMuZGVmYXVsdFRocm90dGxlQ29uZmlnOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBUaHJvdHRsZU9wZXJhdG9yKGR1cmF0aW9uU2VsZWN0b3IsIGNvbmZpZy5sZWFkaW5nLCBjb25maWcudHJhaWxpbmcpKTsgfTtcbn1cbmV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcbnZhciBUaHJvdHRsZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZU9wZXJhdG9yKGR1cmF0aW9uU2VsZWN0b3IsIGxlYWRpbmcsIHRyYWlsaW5nKSB7XG4gICAgICAgIHRoaXMuZHVyYXRpb25TZWxlY3RvciA9IGR1cmF0aW9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMubGVhZGluZyA9IGxlYWRpbmc7XG4gICAgICAgIHRoaXMudHJhaWxpbmcgPSB0cmFpbGluZztcbiAgICB9XG4gICAgVGhyb3R0bGVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFRocm90dGxlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1cmF0aW9uU2VsZWN0b3IsIHRoaXMubGVhZGluZywgdGhpcy50cmFpbGluZykpO1xuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlT3BlcmF0b3I7XG59KCkpO1xudmFyIFRocm90dGxlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRocm90dGxlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1cmF0aW9uU2VsZWN0b3IsIF9sZWFkaW5nLCBfdHJhaWxpbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLmR1cmF0aW9uU2VsZWN0b3IgPSBkdXJhdGlvblNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5fbGVhZGluZyA9IF9sZWFkaW5nO1xuICAgICAgICBfdGhpcy5fdHJhaWxpbmcgPSBfdHJhaWxpbmc7XG4gICAgICAgIF90aGlzLl9oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRocm90dGxlU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZW5kVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl90aHJvdHRsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWFkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm90dGxlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVGhyb3R0bGVTdWJzY3JpYmVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfaGFzVmFsdWUgPSBfYS5faGFzVmFsdWUsIF9zZW5kVmFsdWUgPSBfYS5fc2VuZFZhbHVlO1xuICAgICAgICBpZiAoX2hhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoX3NlbmRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnRocm90dGxlKF9zZW5kVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NlbmRWYWx1ZSA9IG51bGw7XG4gICAgfTtcbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLnRocm90dGxlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMudHJ5RHVyYXRpb25TZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgIGlmICghIWR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLl90aHJvdHRsZWQgPSBzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIGR1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRocm90dGxlU3Vic2NyaWJlci5wcm90b3R5cGUudHJ5RHVyYXRpb25TZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb25TZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRocm90dGxlU3Vic2NyaWJlci5wcm90b3R5cGUudGhyb3R0bGluZ0RvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIF90aHJvdHRsZWQgPSBfYS5fdGhyb3R0bGVkLCBfdHJhaWxpbmcgPSBfYS5fdHJhaWxpbmc7XG4gICAgICAgIGlmIChfdGhyb3R0bGVkKSB7XG4gICAgICAgICAgICBfdGhyb3R0bGVkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGhyb3R0bGVkID0gbnVsbDtcbiAgICAgICAgaWYgKF90cmFpbGluZykge1xuICAgICAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRocm90dGxlU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLnRocm90dGxpbmdEb25lKCk7XG4gICAgfTtcbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRocm90dGxpbmdEb25lKCk7XG4gICAgfTtcbiAgICByZXR1cm4gVGhyb3R0bGVTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm90dGxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciBhc3luY18xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlci9hc3luY1wiKTtcbnZhciB0aHJvdHRsZV8xID0gcmVxdWlyZShcIi4vdGhyb3R0bGVcIik7XG5mdW5jdGlvbiB0aHJvdHRsZVRpbWUoZHVyYXRpb24sIHNjaGVkdWxlciwgY29uZmlnKSB7XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0gdGhyb3R0bGVfMS5kZWZhdWx0VGhyb3R0bGVDb25maWc7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmxpZnQobmV3IFRocm90dGxlVGltZU9wZXJhdG9yKGR1cmF0aW9uLCBzY2hlZHVsZXIsIGNvbmZpZy5sZWFkaW5nLCBjb25maWcudHJhaWxpbmcpKTsgfTtcbn1cbmV4cG9ydHMudGhyb3R0bGVUaW1lID0gdGhyb3R0bGVUaW1lO1xudmFyIFRocm90dGxlVGltZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZVRpbWVPcGVyYXRvcihkdXJhdGlvbiwgc2NoZWR1bGVyLCBsZWFkaW5nLCB0cmFpbGluZykge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLmxlYWRpbmcgPSBsZWFkaW5nO1xuICAgICAgICB0aGlzLnRyYWlsaW5nID0gdHJhaWxpbmc7XG4gICAgfVxuICAgIFRocm90dGxlVGltZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgVGhyb3R0bGVUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1cmF0aW9uLCB0aGlzLnNjaGVkdWxlciwgdGhpcy5sZWFkaW5nLCB0aGlzLnRyYWlsaW5nKSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGhyb3R0bGVUaW1lT3BlcmF0b3I7XG59KCkpO1xudmFyIFRocm90dGxlVGltZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUaHJvdHRsZVRpbWVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRocm90dGxlVGltZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzY2hlZHVsZXIsIGxlYWRpbmcsIHRyYWlsaW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLmxlYWRpbmcgPSBsZWFkaW5nO1xuICAgICAgICBfdGhpcy50cmFpbGluZyA9IHRyYWlsaW5nO1xuICAgICAgICBfdGhpcy5faGFzVHJhaWxpbmdWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVGhyb3R0bGVUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGhyb3R0bGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFpbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYWlsaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUcmFpbGluZ1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMudGhyb3R0bGVkID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1cmF0aW9uLCB7IHN1YnNjcmliZXI6IHRoaXMgfSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMubGVhZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRyYWlsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1RyYWlsaW5nVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNUcmFpbGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5fdHJhaWxpbmdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRocm90dGxlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmNsZWFyVGhyb3R0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aHJvdHRsZWQgPSB0aGlzLnRocm90dGxlZDtcbiAgICAgICAgaWYgKHRocm90dGxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhaWxpbmcgJiYgdGhpcy5faGFzVHJhaWxpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLl90cmFpbGluZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUcmFpbGluZ1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdHRsZWQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRocm90dGxlZCk7XG4gICAgICAgICAgICB0aGlzLnRocm90dGxlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KGFyZykge1xuICAgIHZhciBzdWJzY3JpYmVyID0gYXJnLnN1YnNjcmliZXI7XG4gICAgc3Vic2NyaWJlci5jbGVhclRocm90dGxlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdHRsZVRpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQodGhpcy5zY2hlZHVsZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZUFycmF5ID0gc2NoZWR1bGVBcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yO1xuICAgICAgICBzdWIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciAmJiB0eXBlb2YgaXRlcmF0b3IucmV0dXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvciA9IGlucHV0W2l0ZXJhdG9yXzEuaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkb25lO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkb25lID0gcmVzdWx0LmRvbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVJdGVyYWJsZSA9IHNjaGVkdWxlSXRlcmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUl0ZXJhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL29ic2VydmFibGVcIik7XG5mdW5jdGlvbiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBpbnB1dFtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQob2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7IH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVPYnNlcnZhYmxlID0gc2NoZWR1bGVPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVPYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbnB1dC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICB9KTsgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZVByb21pc2UgPSBzY2hlZHVsZVByb21pc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZVByb21pc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2NoZWR1bGVPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zY2hlZHVsZU9ic2VydmFibGVcIik7XG52YXIgc2NoZWR1bGVQcm9taXNlXzEgPSByZXF1aXJlKFwiLi9zY2hlZHVsZVByb21pc2VcIik7XG52YXIgc2NoZWR1bGVBcnJheV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVBcnJheVwiKTtcbnZhciBzY2hlZHVsZUl0ZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9zY2hlZHVsZUl0ZXJhYmxlXCIpO1xudmFyIGlzSW50ZXJvcE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGVcIik7XG52YXIgaXNQcm9taXNlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc1Byb21pc2VcIik7XG52YXIgaXNBcnJheUxpa2VfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzQXJyYXlMaWtlXCIpO1xudmFyIGlzSXRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzSXRlcmFibGVcIik7XG5mdW5jdGlvbiBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlXzEuaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGVfMS5zY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlXzEuaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZV8xLnNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5TGlrZV8xLmlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXlfMS5zY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGVfMS5pc0l0ZXJhYmxlKGlucHV0KSB8fCB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZV8xLnNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigoaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0IHx8IGlucHV0KSArICcgaXMgbm90IG9ic2VydmFibGUnKTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVkID0gc2NoZWR1bGVkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG52YXIgQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5BY3Rpb24gPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFjdGlvbl8xID0gcmVxdWlyZShcIi4vQWN0aW9uXCIpO1xudmFyIEFzeW5jQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgX3RoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsICYmIHRoaXMuZGVsYXkgPT09IGRlbGF5ICYmIHRoaXMucGVuZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmcgPT09IGZhbHNlICYmIHRoaXMuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX2V4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvclZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBlcnJvclZhbHVlID0gISFlICYmIGUgfHwgbmV3IEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICB2YXIgaW5kZXggPSBhY3Rpb25zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHRoaXMud29yayA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jQWN0aW9uO1xufShBY3Rpb25fMS5BY3Rpb24pKTtcbmV4cG9ydHMuQXN5bmNBY3Rpb24gPSBBc3luY0FjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuLi9TY2hlZHVsZXJcIik7XG52YXIgQXN5bmNTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc3luY1NjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY1NjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHsgbm93ID0gU2NoZWR1bGVyXzEuU2NoZWR1bGVyLm5vdzsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBTY2hlZHVsZXJBY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAmJiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAhPT0gX3RoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5zY2hlZHVsZSh3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2NoZWR1bGUuY2FsbCh0aGlzLCB3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShTY2hlZHVsZXJfMS5TY2hlZHVsZXIpKTtcbmV4cG9ydHMuQXN5bmNTY2hlZHVsZXIgPSBBc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBc3luY0FjdGlvbl8xID0gcmVxdWlyZShcIi4vQXN5bmNBY3Rpb25cIik7XG52YXIgUXVldWVBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRdWV1ZUFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZUFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIuZmx1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiAoZGVsYXkgPiAwIHx8IHRoaXMuY2xvc2VkKSA/XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmV4ZWN1dGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpIDpcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHx8IChkZWxheSA9PT0gbnVsbCAmJiB0aGlzLmRlbGF5ID4gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuZmx1c2godGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVldWVBY3Rpb247XG59KEFzeW5jQWN0aW9uXzEuQXN5bmNBY3Rpb24pKTtcbmV4cG9ydHMuUXVldWVBY3Rpb24gPSBRdWV1ZUFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBc3luY1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4vQXN5bmNTY2hlZHVsZXJcIik7XG52YXIgUXVldWVTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRdWV1ZVNjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZVNjaGVkdWxlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUXVldWVTY2hlZHVsZXI7XG59KEFzeW5jU2NoZWR1bGVyXzEuQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydHMuUXVldWVTY2hlZHVsZXIgPSBRdWV1ZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFzeW5jQWN0aW9uXzEgPSByZXF1aXJlKFwiLi9Bc3luY0FjdGlvblwiKTtcbnZhciBBc3luY1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4vQXN5bmNTY2hlZHVsZXJcIik7XG5leHBvcnRzLmFzeW5jU2NoZWR1bGVyID0gbmV3IEFzeW5jU2NoZWR1bGVyXzEuQXN5bmNTY2hlZHVsZXIoQXN5bmNBY3Rpb25fMS5Bc3luY0FjdGlvbik7XG5leHBvcnRzLmFzeW5jID0gZXhwb3J0cy5hc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFF1ZXVlQWN0aW9uXzEgPSByZXF1aXJlKFwiLi9RdWV1ZUFjdGlvblwiKTtcbnZhciBRdWV1ZVNjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4vUXVldWVTY2hlZHVsZXJcIik7XG5leHBvcnRzLnF1ZXVlU2NoZWR1bGVyID0gbmV3IFF1ZXVlU2NoZWR1bGVyXzEuUXVldWVTY2hlZHVsZXIoUXVldWVBY3Rpb25fMS5RdWV1ZUFjdGlvbik7XG5leHBvcnRzLnF1ZXVlID0gZXhwb3J0cy5xdWV1ZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gJ0BAaXRlcmF0b3InO1xuICAgIH1cbiAgICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuZXhwb3J0cy5nZXRTeW1ib2xJdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yO1xuZXhwb3J0cy5pdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yKCk7XG5leHBvcnRzLiQkaXRlcmF0b3IgPSBleHBvcnRzLml0ZXJhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXRlcmF0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJ4U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBTeW1ib2woJ3J4U3Vic2NyaWJlcicpXG4gICAgICAgIDogJ0BAcnhTdWJzY3JpYmVyXycgKyBNYXRoLnJhbmRvbSgpO1xufSkoKTtcbmV4cG9ydHMuJCRyeFN1YnNjcmliZXIgPSBleHBvcnRzLnJ4U3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ4U3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCgpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBjYW5SZXBvcnRFcnJvcihvYnNlcnZlcikge1xuICAgIHdoaWxlIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgX2EgPSBvYnNlcnZlciwgY2xvc2VkXzEgPSBfYS5jbG9zZWQsIGRlc3RpbmF0aW9uID0gX2EuZGVzdGluYXRpb24sIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGNsb3NlZF8xIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmNhblJlcG9ydEVycm9yID0gY2FuUmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW5SZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGhvc3RSZXBvcnRFcnJvcihlcnIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9LCAwKTtcbn1cbmV4cG9ydHMuaG9zdFJlcG9ydEVycm9yID0gaG9zdFJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0ludGVyb3BPYnNlcnZhYmxlID0gaXNJbnRlcm9wT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZXJvcE9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG5mdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dFtpdGVyYXRvcl8xLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNJdGVyYWJsZSA9IGlzSXRlcmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0l0ZXJhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnNjaGVkdWxlID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc1NjaGVkdWxlciA9IGlzU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL2lkZW50aXR5XCIpO1xuZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHlfMS5pZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5waXBlRnJvbUFycmF5ID0gcGlwZUZyb21BcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3Vic2NyaWJlVG9BcnJheV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9BcnJheVwiKTtcbnZhciBzdWJzY3JpYmVUb1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvUHJvbWlzZVwiKTtcbnZhciBzdWJzY3JpYmVUb0l0ZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb0l0ZXJhYmxlXCIpO1xudmFyIHN1YnNjcmliZVRvT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9PYnNlcnZhYmxlXCIpO1xudmFyIGlzQXJyYXlMaWtlXzEgPSByZXF1aXJlKFwiLi9pc0FycmF5TGlrZVwiKTtcbnZhciBpc1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuL2lzUHJvbWlzZVwiKTtcbnZhciBpc09iamVjdF8xID0gcmVxdWlyZShcIi4vaXNPYmplY3RcIik7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUbyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvT2JzZXJ2YWJsZV8xLnN1YnNjcmliZVRvT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5TGlrZV8xLmlzQXJyYXlMaWtlKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvQXJyYXlfMS5zdWJzY3JpYmVUb0FycmF5KHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZV8xLmlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Byb21pc2VfMS5zdWJzY3JpYmVUb1Byb21pc2UocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtpdGVyYXRvcl8xLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9JdGVyYWJsZV8xLnN1YnNjcmliZVRvSXRlcmFibGUocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGlzT2JqZWN0XzEuaXNPYmplY3QocmVzdWx0KSA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBcIidcIiArIHJlc3VsdCArIFwiJ1wiO1xuICAgICAgICB2YXIgbXNnID0gXCJZb3UgcHJvdmlkZWQgXCIgKyB2YWx1ZSArIFwiIHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC5cIlxuICAgICAgICAgICAgKyAnIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBBcnJheSwgb3IgSXRlcmFibGUuJztcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlW2l0ZXJhdG9yXzEuaXRlcmF0b3JdKCk7XG4gICAgZG8ge1xuICAgICAgICB2YXIgaXRlbSA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uZG9uZSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGl0ZW0udmFsdWUpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9JdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL29ic2VydmFibGVcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdmFyIG9icyA9IG9ialtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0oKTtcbiAgICBpZiAodHlwZW9mIG9icy5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH1cbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb09ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSlcbiAgICAgICAgLnRoZW4obnVsbCwgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKTtcbiAgICByZXR1cm4gc3Vic2NyaWJlcjtcbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Byb21pc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSW5uZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vSW5uZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb1wiKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHN1YnNjcmliZVRvUmVzdWx0KG91dGVyU3Vic2NyaWJlciwgcmVzdWx0LCBvdXRlclZhbHVlLCBvdXRlckluZGV4LCBpbm5lclN1YnNjcmliZXIpIHtcbiAgICBpZiAoaW5uZXJTdWJzY3JpYmVyID09PSB2b2lkIDApIHsgaW5uZXJTdWJzY3JpYmVyID0gbmV3IElubmVyU3Vic2NyaWJlcl8xLklubmVyU3Vic2NyaWJlcihvdXRlclN1YnNjcmliZXIsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpOyB9XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlKGlubmVyU3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVUb18xLnN1YnNjcmliZVRvKHJlc3VsdCkoaW5uZXJTdWJzY3JpYmVyKTtcbn1cbmV4cG9ydHMuc3Vic2NyaWJlVG9SZXN1bHQgPSBzdWJzY3JpYmVUb1Jlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUmVzdWx0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZlclwiKTtcbmZ1bmN0aW9uIHRvU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgaWYgKG5leHRPck9ic2VydmVyKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuZXh0T3JPYnNlcnZlciAmJiAhZXJyb3IgJiYgIWNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIoT2JzZXJ2ZXJfMS5lbXB0eSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG5leHBvcnRzLnRvU3Vic2NyaWJlciA9IHRvU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvU3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmlzRGVidWcgPSBleHBvcnRzLkRFQlVHID0gZXhwb3J0cy5VUERBVEVfSU5URVJWQUwgPSBleHBvcnRzLlBPUlQgPSBleHBvcnRzLklQID0gdm9pZCAwO1xyXG5leHBvcnRzLklQID0gXCIxOTIuMTY4LjAuNzVcIjsgLy8gXCJsb2NhbGhvc3RcIjsgLy8gXCIxOTIuMTY4LjAuNzVcIjtcclxuZXhwb3J0cy5QT1JUID0gXCI4MDgwXCI7XHJcbmV4cG9ydHMuVVBEQVRFX0lOVEVSVkFMID0gNjA7IC8vIG1pbGxpc2Vjb25kc1xyXG5leHBvcnRzLkRFQlVHID0gZmFsc2U7XHJcbmV4cG9ydHMuaXNEZWJ1ZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4cG9ydHMuREVCVUc7IH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL2JhY2tlbmRcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL2NoYW5uZWxcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL2NvbW11bmljYXRpb25cIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL2luaXRcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL21lZGlhXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9zdGF0ZVwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvdW5pdHlcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJyb2FkY2FzdGluZ0FnZW50ID0gdm9pZCAwO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vY29uc3RcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgQnJvYWRjYXN0aW5nQWdlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RpbmdBZ2VudChpZCwgY29tbXVuaWNhdGlvbkNoYW5uZWwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gdXRpbHNfMS5nZW5lcmF0ZUlkKDQsIDQpOyB9XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIC8vIFBhcnRpY2lwYW50c1xyXG4gICAgICAgIHRoaXMucGFydGljaXBhbnRzID0gW107XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICB0aGlzLmFkZFBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gT3V0cHV0XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gTWVzc2FnaW5nIFV0aWxzXHJcbiAgICAgICAgdGhpcy5nZXRDb21tU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbW1TdWJqZWN0LnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9pZCA9IF9hLmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pZCAhPT0gX3RoaXMuaWQ7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0SW5kaXZpZHVhbE1lc3NhZ2VDb21tU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldENvbW1TdWJqZWN0KCkucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBfYS50bztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0byA9PT0gX3RoaXMuaWQ7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRJbmRpdmlkdWFsUmVxdWVzdCA9IGZ1bmN0aW9uIChkYXRhLCB0bykge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5kaXZpZHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIHRvOiB0byxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLmFkZFBhcnRpY2lwYW50ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnBhcnRpY2lwYW50cy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgX3RoaXMuYWRkUGFydGljaXBhbnRTdWJqZWN0Lm5leHQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNpcGFudCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX3RoaXMuZ2V0UGFydGljaXBhbnRzKCk7XHJcbiAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cy5maWx0ZXIoZnVuY3Rpb24gKF9pZCkgeyByZXR1cm4gX2lkICE9PSBpZDsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFydGljaXBhbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX19zcHJlYWRBcnJheXMoX3RoaXMucGFydGljaXBhbnRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRpY2lwYW50cztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFNhbHV0YXRpb25zXHJcbiAgICAgICAgdGhpcy5ncmVldGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJCcm9hZGNhc3QgVGVzdCAjMlwiKTtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZS5pZCwgdHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50cyA9IF90aGlzLmdldFBhcnRpY2lwYW50cygpO1xyXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gXCJncmVldGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJCcm9hZGNhc3QgVGVzdCAjM1wiKTtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkdyZWV0aW5nXCIsIG1lc3NhZ2VdKTtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2lwYW50cy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIF90aGlzLmlkICsgXCIsIEFkZCBQYXJ0aWNpcGFudFwiKTtcclxuICAgICAgICAgICAgX3RoaXMuYWRkUGFydGljaXBhbnQoaWQpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KF90aGlzLnNlbmRHcmVldGluZywgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZhcmV3ZWxsSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0aWNpcGFudHMgPSBfdGhpcy5nZXRQYXJ0aWNpcGFudHMoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFwiZmFyZXdlbGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2lwYW50cy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVBhcnRpY2lwYW50KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZEdyZWV0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JlZXRpbmdcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZEZhcmV3ZWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFyZXdlbGxcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29tbVN1YmplY3QgPSBjb21tdW5pY2F0aW9uQ2hhbm5lbDtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIkJyb2FkY2FzdCBUZXN0ICMxXCIpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkJyb2FkY2FzdCBUZXN0ICM0XCIsIGNvbW11bmljYXRpb25DaGFubmVsXSk7XHJcbiAgICAgICAgdGhpcy5jb21tU3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJCcm9hZGNhc3QgVGVzdCAjNVwiLCBtXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21tU3ViamVjdCgpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkJyb2FkY2FzdCBUZXN0ICM2XCIsIG1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldENvbW1TdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMubWVzc2FnZUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QoKS5zdWJzY3JpYmUodGhpcy5ncmVldGluZ0hhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihjb25zdF8xLmlzRGVidWcpKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkJyb2FkY2FzdDogXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJyb2FkY2FzdGluZ0FnZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkJyb2FkY2FzdGluZ0FnZW50ID0gQnJvYWRjYXN0aW5nQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2xpZW50ID0gdm9pZCAwO1xyXG52YXIgUmVwbGF5U3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvUmVwbGF5U3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIGJyb2FkY2FzdF8xID0gcmVxdWlyZShcIi4vYnJvYWRjYXN0XCIpO1xyXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9jb25uZWN0aW9uLW1hbmFnZXJcIik7XHJcbnZhciBydGNfbWVzc2FnaW5nX2FnZW50XzEgPSByZXF1aXJlKFwiLi9ydGMtbWVzc2FnaW5nLWFnZW50XCIpO1xyXG52YXIgc3dpdGNoTWFwXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoTWFwXCIpO1xyXG52YXIgbWFwXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwXCIpO1xyXG52YXIgQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2xpZW50KHN1YmplY3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XHJcbiAgICAgICAgdGhpcy5pZCA9IHV0aWxzXzEuZ2VuZXJhdGVJZCg0LCA0KTtcclxuICAgICAgICAvLyBDaGFubmVsc1xyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5uZWxzID0ge307XHJcbiAgICAgICAgdGhpcy5zdHJlYW1zID0ge307XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgIHRoaXMuX0xvY2FsTWVkaWFTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3RfMS5SZXBsYXlTdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gT3V0cHV0XHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uU3RyZWFtU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uXHJcbiAgICAgICAgdGhpcy5vbkNvbm5lY3Rpb25DcmVhdGVkSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2VbMF0sIGNvbm5lY3Rpb24gPSBtZXNzYWdlWzFdO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9uZGF0YWNoYW5uZWwgPSBfdGhpcy5vbkRhdGFDaGFubmVsSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub250cmFjayA9IF90aGlzLm9uVHJhY2tIYW5kbGVyKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25Db25uZWN0ZWQgPSBmdW5jdGlvbiAoaWQsIGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uY29ubmVjdGlvblN0YXRlID09PSBcImNvbm5lY3RlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQ29ubmVjdGlvbiBcIiArIGlkICsgXCIsIE5vdyBDb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzT2ZmZXIgPSAoKF9hID0gY29ubmVjdGlvbi5sb2NhbERlc2NyaXB0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09IFwib2ZmZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPZmZlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gU3RyZWFtXHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW1Ub0Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IF9hWzBdLCBjb25uZWN0aW9uID0gX2FbMV07XHJcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHJldHVybiBjb25uZWN0aW9uLmFkZFRyYWNrKHQsIHN0cmVhbSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQsIHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnN0cmVhbXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0gPSBbXTtcclxuICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0ucHVzaChzdHJlYW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblRyYWNrSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIFRyYWNrIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBldi5zdHJlYW1zWzBdO1xyXG4gICAgICAgICAgICBfdGhpcy5hZGRTdHJlYW0oaWQsIHN0cmVhbSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU3RyZWFtU3ViamVjdF8ubmV4dChbaWQsIHN0cmVhbV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgLy8gRGF0YSBDaGFubmVsXHJcbiAgICAgICAgdGhpcy5hZGREYXRhQ2hhbm5lbFRvQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBfYVswXSwgY29ubmVjdGlvbiA9IF9hWzFdO1xyXG4gICAgICAgICAgICAvLyBEYXRhIENoYW5uZWxcclxuICAgICAgICAgICAgdmFyIGRhdGFDaGFubmVsID0gY29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChcImRhdGEtY2hhbm5lbC1cIiArIGlkKTtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJPcGVuZWQgQ2hhbm5lbFwiKTsgfTtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25lcnJvciA9IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KEpTT04uc3RyaW5naWZ5KGV2KSk7IH07XHJcbiAgICAgICAgICAgIF90aGlzLmRhdGFDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25tZXNzYWdlID0gX3RoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VIYW5kbGVyKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZERhdGFUb0NoYW5uZWwgPSBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNoYW5uZWwuc2VuZChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IF90aGlzLmRhdGFDaGFubmVscztcclxuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFubmVsID0gY2hhbm5lbHNbaWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzT3BlbiA9IGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJvcGVuXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5uZWwgfHwgIWlzT3BlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2VuZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIERhdGEgQ2hhbm5lbCBIYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YUNoYW5uZWwgPSBldi5jaGFubmVsO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGFDaGFubmVsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBfdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZUhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XHJcbiAgICAgICAgICAgIF90aGlzLk9uRGF0YUNoYW5uZWxTdWJqZWN0Xy5uZXh0KFtpZCwgZGF0YUNoYW5uZWxdKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBldi5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8ubmV4dChbaWQsIG1lc3NhZ2VdKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFnZW50c1xyXG4gICAgICAgIHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQgPSBuZXcgYnJvYWRjYXN0XzEuQnJvYWRjYXN0aW5nQWdlbnQodGhpcy5pZCwgdGhpcy5zdWJqZWN0KTtcclxuICAgICAgICB0aGlzLlJUQ01lc3NhZ2luZ0FnZW50ID0gbmV3IHJ0Y19tZXNzYWdpbmdfYWdlbnRfMS5SVENNZXNzYWdpbmdBZ2VudCh0aGlzLkJyb2FkY2FzdGluZ0FnZW50KTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyID0gbmV3IGNvbm5lY3Rpb25fbWFuYWdlcl8xLkNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMuUlRDTWVzc2FnaW5nQWdlbnQpO1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUodGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQ29ubmVjdGlvbkNyZWF0ZWRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLmFkZERhdGFDaGFubmVsVG9Db25uZWN0aW9uKTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0LnBpcGUoXHJcbiAgICAgICAgLy8gVE9ETzogVGhpbmsgb2YgYSBmbGF0dGVyIHdheVxyXG4gICAgICAgIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIF8gPSBfYVswXSwgY29ubmVjdGlvbiA9IF9hWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX0xvY2FsTWVkaWFTdWJqZWN0LnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChzdHJlYW0pIHsgcmV0dXJuIFtzdHJlYW0sIGNvbm5lY3Rpb25dOyB9KSk7XHJcbiAgICAgICAgfSkpLnN1YnNjcmliZSh0aGlzLmFkZFN0cmVhbVRvQ29ubmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5fTG9jYWxNZWRpYVN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIkNsaWVudCAtPiBMb2NhbE1lZGlhU3ViamVjdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLkJyb2FkY2FzdGluZ0FnZW50LnNlbmRHcmVldGluZygpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNsaWVudFwiLCB0aGlzXSk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiQ2xpZW50OiBcIiwgbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBDbGllbnQuY3JlYXRlQ2xpZW50ID0gZnVuY3Rpb24gKHN1YmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudChzdWJqZWN0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2xpZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNsaWVudCA9IENsaWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db25uZWN0aW9uTWFuYWdlciA9IHZvaWQgMDtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xyXG52YXIgY29uZmlndXJhdGlvbiA9IHtcclxuICAgIGljZVNlcnZlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybHM6IFtcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4xLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4yLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4zLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW40LmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4wMS5zaXBwaG9uZS5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmVraWdhLm5ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uZndkbmV0Lm5ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uaWRlYXNpcC5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmlwdGVsLm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ucml4dGVsZWNvbS5zZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uc2NobHVuZC5kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW5zZXJ2ZXIub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5zb2Z0am95cy5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnZvaXBhcm91bmQuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b2lwYnVzdGVyLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm9pcHN0dW50LmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm94Z3JhdGlhLm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ueHRlbi5jb21cIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxudmFyIENvbm5lY3Rpb25NYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbk1hbmFnZXIobWEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWEgPSBtYTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uc1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZDtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgQ3JlYXRlIENvbm5lY3Rpb24gaW4gXCIgKyBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZCk7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBfdGhpcy5jb25uZWN0aW9uc1tpZF0gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gX3RoaXMub25JQ0VDYW5kaWRhdGVIYW5kbGVyKGlkKTtcclxuICAgICAgICAgICAgX3RoaXMuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3QubmV4dChbaWQsIGNvbm5lY3Rpb25dKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBBZGQvUmVtb3ZlIFBhcnRpY2lwYW50c1xyXG4gICAgICAgIHRoaXMub25BZGRQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkICsgXCIgT24gQWRkIFBhcnRpY2lwYW50IEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBvbGRDb25uZWN0aW9uID0gX3RoaXMuY29ubmVjdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBpZiAob2xkQ29ubmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jcmVhdGVDb25uZWN0aW9uKGlkKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZU9mZmVyKClcclxuICAgICAgICAgICAgICAgIC50aGVuKF90aGlzLm1hLm9uT2ZmZXJDcmVhdGVkSGFuZGxlcihpZCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJDb3VsZG4ndCBjcmVhdGUgb2ZmZXIgZm9yIGlkIFwiICsgaWQsIGVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTZXNzaW9uIERlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5vblNldExvY2FsRGVzY3JpcHRpb25IYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY29ubmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uU2V0UmVtb3RlRGVzY3JpcHRpb25IYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiU2V0dGluZyByZW1vdGUgZGVzY3JpcHRpb24gaW4gXCIgKyBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZCArIFwiIGZvciBcIiArIGlkKTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gQW5zd2VyXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX3RoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyKGlkLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT2ZmZXJcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvbiBMb2dpc3RpY3NcclxuICAgICAgICB0aGlzLm9uSUNFQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIElDRSBDYW5kaWRhdGUgSGFuZGxlclwiKTtcclxuICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IGV2LmNhbmRpZGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLm1hLm9uQ2FuZGlkYXRlQ3JlYXRlZEhhbmRsZXIoaWQpKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQW5zd2VySGFuZGxlciA9IGZ1bmN0aW9uIChpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gX3RoaXMuY3JlYXRlQ29ubmVjdGlvbihpZCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUFuc3dlcigpXHJcbiAgICAgICAgICAgICAgICAudGhlbihfdGhpcy5tYS5vbkFuc3dlckNyZWF0ZWRIYW5kbGVyKGlkKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNvdWxkbid0IGNyZWF0ZSBhbnN3ZXIgaW4gSUQgXCIgKyBpZCwgZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQWRkQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2VbMF0sIGNhbmRpZGF0ZSA9IG1lc3NhZ2VbMV07XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJBZGQgQ2FuZGlkYXRlXCIsIGNhbmRpZGF0ZV0pO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShjYW5kaWRhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tYS5PbkFkZFBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5tYS5PblJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vblJlbW92ZVBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgLy8gdGhpcy5tYS5PbkNyZWF0ZUFuc3dlclN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5zdWJzY3JpYmUodGhpcy5vblNldExvY2FsRGVzY3JpcHRpb25IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24uc3Vic2NyaWJlKHRoaXMub25TZXRSZW1vdGVEZXNjcmlwdGlvbkhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25BZGRDYW5kaWRhdGVTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQWRkQ2FuZGlkYXRlSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiQ29ubmVjdGlvbiBNYW5hZ2VyXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbm5lY3Rpb25NYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbm5lY3Rpb25NYW5hZ2VyID0gQ29ubmVjdGlvbk1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUlRDTWVzc2FnaW5nQWdlbnQgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi9jb25zdFwiKTtcclxudmFyIFJUQ01lc3NhZ2luZ0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUlRDTWVzc2FnaW5nQWdlbnQoYnJvYWRjYXN0aW5nQWdlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0aW5nQWdlbnQgPSBicm9hZGNhc3RpbmdBZ2VudDtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuT25BZGRQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uUmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PblNldExvY2FsRGVzY3JpcHRpb24gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uQWRkQ2FuZGlkYXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIEFkZC9SZW1vdmUgUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5PbkFkZFBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuT25SZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QubmV4dChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBPZmZlclxyXG4gICAgICAgIHRoaXMuZ2V0T2ZmZXJTdWJqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnRcclxuICAgICAgICAgICAgICAgIC5nZXRJbmRpdmlkdWFsTWVzc2FnZUNvbW1TdWJqZWN0KClcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX2EuZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnR5cGUgPT09IFwib2ZmZXJcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbk9mZmVyQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcclxuICAgICAgICAgICAgICAgIFwiT2ZmZXIgZm9yIFwiICsgaWQgKyBcIiBDcmVhdGVkIGluIFwiICsgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuaWQsXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldExvY2FsRGVzY3JpcHRpb24ubmV4dChbaWQsIHNlc3Npb25EZXNjcmlwdGlvbl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldExvY2FsQW5kU2VuZE1lc3NhZ2Ugc2VuZGluZyBtZXNzYWdlXCIsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LnNlbmRJbmRpdmlkdWFsUmVxdWVzdChzZXNzaW9uRGVzY3JpcHRpb24sIGlkKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25PZmZlckhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldFJlbW90ZURlc2NyaXB0aW9uLm5leHQoW2lkLCBkYXRhXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBBbnN3ZXJcclxuICAgICAgICB0aGlzLmdldEFuc3dlclN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJhbnN3ZXJcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkFuc3dlckNyZWF0ZWRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXHJcbiAgICAgICAgICAgICAgICBcIkFuc3dlciBmb3IgXCIgKyBpZCArIFwiIENyZWF0ZWQgaW4gXCIgKyBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5pZCxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5uZXh0KFtpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2VcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHNlc3Npb25EZXNjcmlwdGlvbiwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkFuc3dlckhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldFJlbW90ZURlc2NyaXB0aW9uLm5leHQoW2lkLCBkYXRhXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDYW5kaWRhdGVcclxuICAgICAgICB0aGlzLmdldENhbmRpZGF0ZVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJjYW5kaWRhdGVcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkNhbmRpZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gbmV3IFJUQ0ljZUNhbmRpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBkYXRhLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBkYXRhLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uQWRkQ2FuZGlkYXRlU3ViamVjdC5uZXh0KFtpZCwgY2FuZGlkYXRlXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWNlY2FuZGlkYXRlIGV2ZW50OiBcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgICAgIH0sIGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW5kIG9mIGNhbmRpZGF0ZXMuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQ2FuZGlkYXRlQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBpZDogY2FuZGlkYXRlLnNkcE1pZCxcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgfSwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5hZGRQYXJ0aWNpcGFudFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25BZGRQYXJ0aWNpcGFudEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0aW5nQWdlbnQucmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldE9mZmVyU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uT2ZmZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldEFuc3dlclN1YmplY3QoKS5zdWJzY3JpYmUodGhpcy5vbkFuc3dlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2FuZGlkYXRlU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uQ2FuZGlkYXRlSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiUlRDLU1lc3NhZ2luZy1BZ2VudDogXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJUQ01lc3NhZ2luZ0FnZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlJUQ01lc3NhZ2luZ0FnZW50ID0gUlRDTWVzc2FnaW5nQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuV2ViU29ja2V0c0FnZW50ID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBzd2l0Y2hNYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXBcIik7XHJcbnZhciB0YWtlVW50aWxfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy90YWtlVW50aWxcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi9jb25zdFwiKTtcclxudmFyIFdlYlNvY2tldHNBZ2VudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdlYlNvY2tldHNBZ2VudChfQ29tbXVuaWNhdGlvblN1YmplY3QsIENvbW11bmljYXRpb25TdWJqZWN0Xykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICAgICAgdGhpcy5Db21tdW5pY2F0aW9uU3ViamVjdF8gPSBDb21tdW5pY2F0aW9uU3ViamVjdF87XHJcbiAgICAgICAgLy8gRmxhZ3NcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuU2VuZCA9IHRydWU7XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICB0aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5PbkNsb3NlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLndzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIF90aGlzLm9uTWVzc2FnZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBfdGhpcy53cy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3BlblwiLCBfdGhpcy5vbk9wZW5IYW5kbGVyKTtcclxuICAgICAgICAgICAgX3RoaXMud3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsIF90aGlzLm9uQ2xvc2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgX3RoaXMud3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIF90aGlzLm9uRXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25Jc1dlYlNvY2tldFJlYWR5SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNlbmRNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbXVuaWNhdGlvblN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fQ29tbXVuaWNhdGlvblN1YmplY3QucGlwZSh0YWtlVW50aWxfMS50YWtlVW50aWwoX3RoaXMuT25DbG9zZVN1YmplY3QpLCBmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9jYW5TZW5kID0gX3RoaXMuY2FuU2VuZDtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY2FuU2VuZClcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYW5TZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfY2FuU2VuZDtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRVUkwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgICAgICBvcmlnaW4gPSBvcmlnaW4ucmVwbGFjZShcImh0dHBzXCIsIFwid3NzXCIpLnJlcGxhY2UoXCJodHRwXCIsIFwid3NcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uTWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIF90aGlzLmNhblNlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuQ29tbXVuaWNhdGlvblN1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXUyBFcnJvcjogXCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLndzLk9QRU4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLm9uQ2xvc2VIYW5kbGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uT3BlbkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIldTIGlzIE9wZW5cIik7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0Lm5leHQoX3RoaXMuaXNPcGVuKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25DbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5PbkNsb3NlU3ViamVjdC5uZXh0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLndzLk9QRU4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLndzLnNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRVUkwoKTtcclxuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5vbk1lc3NhZ2VIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIHRoaXMub25PcGVuSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgdGhpcy5vbkNsb3NlSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9ySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5Jc1dlYlNvY2tldFJlYWR5U3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoaXNSZWFkeSkgeyByZXR1cm4gaXNSZWFkeTsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRDb21tdW5pY2F0aW9uU3ViamVjdCgpOyB9KSkuc3Vic2NyaWJlKHRoaXMub25Jc1dlYlNvY2tldFJlYWR5SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiV2ViU29ja2V0cyBBZ2VudDogXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdlYlNvY2tldHNBZ2VudDtcclxufSgpKTtcclxuZXhwb3J0cy5XZWJTb2NrZXRzQWdlbnQgPSBXZWJTb2NrZXRzQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQmFja2VuZFNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBkZWZpbml0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9kZWZpbml0aW9uc1wiKTtcclxudmFyIElzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbi8vIEluY29taW5nXHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9SZWZyZXNoU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBfVXNlVFZDaGFubmVsU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1NldE5hbWVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dGdvaW5nXHJcbnZhciBUVlByb2dyYW1TdGF0ZVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdCh7fSk7XHJcbnZhciBOYW1lc1N0YXRlU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgcG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQoZS5tZXNzYWdlKTsgfSk7XHJcbn07XHJcbnZhciBnZXQgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KGUpOyB9KTtcclxufTtcclxudmFyIHNlbmRUVkNoYW5uZWwgPSBmdW5jdGlvbiAoaWQsIGNoYW5uZWwpIHtcclxuICAgIHJldHVybiBwb3N0KGRlZmluaXRpb25zXzEuVVJMX1RWX0NIQU5ORUwsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcclxuICAgIH0pO1xyXG59O1xyXG52YXIgZ2V0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZ2V0KGRlZmluaXRpb25zXzEuVVJMX05BTUUpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbmFtZXMgPSBkYXRhO1xyXG4gICAgICAgIE5hbWVzU3RhdGVTdWJqZWN0Xy5uZXh0KG5hbWVzKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgc2VuZE5hbWUgPSBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcclxuICAgIHJldHVybiBwb3N0KGRlZmluaXRpb25zXzEuVVJMX05BTUUsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgIH0pO1xyXG59O1xyXG52YXIgZ2V0VFZQcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGdldChkZWZpbml0aW9uc18xLlVSTF9UVl9DSEFOTkVMKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSBkYXRhO1xyXG4gICAgICAgIFRWUHJvZ3JhbVN0YXRlU3ViamVjdF8ubmV4dChwcm9ncmFtKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgb25DaGFubmVsSGFuZGxlciA9IGZ1bmN0aW9uIChjaGFubmVsKSB7XHJcbiAgICB2YXIgaWQgPSBfSURTdWJqZWN0LmdldFZhbHVlKCk7XHJcbiAgICBpZiAoIWlkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHNlbmRUVkNoYW5uZWwoaWQsIGNoYW5uZWwpO1xyXG59O1xyXG52YXIgb25SZWZyZXNoSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdldFRWUHJvZ3JhbSgpO1xyXG4gICAgZ2V0TmFtZXMoKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7IH0pO1xyXG5fVXNlVFZDaGFubmVsU3ViamVjdFxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZShvbkNoYW5uZWxIYW5kbGVyKTtcclxuX1JlZnJlc2hTdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKG9uUmVmcmVzaEhhbmRsZXIpO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhY2tlbmRTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5jb21pbmdcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9JRFNidWplY3QgPSBfSURTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX1JlZnJlc2hTdWJqZWN0ID0gX1JlZnJlc2hTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX1VzZVRWQ2hhbm5lbFN1YmplY3QgPSBfVXNlVFZDaGFubmVsU3ViamVjdDtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9TZXROYW1lU3ViamVjdCA9IF9TZXROYW1lU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgQmFja2VuZFNlcnZpY2UuVFZQcm9ncmFtU3RhdGVTdWJqZWN0XyA9IFRWUHJvZ3JhbVN0YXRlU3ViamVjdF87XHJcbiAgICBCYWNrZW5kU2VydmljZS5OYW1lc1N0YXRlU3ViamVjdF8gPSBOYW1lc1N0YXRlU3ViamVjdF87XHJcbiAgICBCYWNrZW5kU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBCYWNrZW5kU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5CYWNrZW5kU2VydmljZSA9IEJhY2tlbmRTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9jaGFubmVsXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9zdGF0ZVwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9jaGFubmVsL2NoYW5uZWxcIik7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vYmFja2VuZFwiKTtcclxuYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLlRWUHJvZ3JhbVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChwcm9ncmFtKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9UVlByb2dyYW1TdWJqZWN0Lm5leHQocHJvZ3JhbSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi9iYWNrZW5kXCIpO1xyXG5iYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuVFZQcm9ncmFtU3RhdGVTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKHByb2dyYW0pIHtcclxuICAgIHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fVFZQcm9ncmFtU3RhdGVTdWJqZWN0Lm5leHQocHJvZ3JhbSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNoYW5uZWxTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdFwiKTtcclxuLyoqXHJcbiAqIENoYW5uZWwgTW9kdWxlXHJcbiAqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXNzaW5nIHRocm91Z2ggb25seSB0aG9zZSBpbWFnZSBkYXRhIG1lc3NhZ2VzIHRoYXRcclxuICogaGF2ZSB0aGUgaWQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGNoYW5uZWwuXHJcbiAqL1xyXG52YXIgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVFZQcm9ncmFtU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3Qoe30pO1xyXG52YXIgX0N1cnJlbnRDaGFubmVsU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoMSk7XHJcbnZhciBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Qcm9jZWVkU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBJbnRlcm5hbFxyXG52YXIgSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7IH07XHJcbnZhciBmaWx0ZXJDdXJyZW50Q2hhbm5lbEltYWdlRGF0YU1lc3NhZ2VzID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IF9hWzBdLCBjaGFubmVsID0gX2FbMV0sIHR1cGxlID0gX2FbMl07XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW1wiQ2hhbm5lbCBEZWJ1ZyAjMTogXCIsIHByb2dyYW0sIGNoYW5uZWwsIHR1cGxlXSk7XHJcbiAgICB2YXIgZnJvbSA9IHR1cGxlWzBdLCBtZXNzYWdlID0gdHVwbGVbMV07XHJcbiAgICB2YXIgaWQgPSBwcm9ncmFtW2NoYW5uZWxdO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNoYW5uZWwgRGVidWcgIzI6IFwiLCBpZF0pO1xyXG4gICAgaWYgKCFpZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAoaWQgIT09IGZyb20pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiQ2hhbm5lbCBEZWJ1ZyAjM1wiKTtcclxuICAgIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgaGFzTWVzc2FnZUZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QuZ2V0VmFsdWUoKTsgfTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5jb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICBfVFZQcm9ncmFtU3ViamVjdCxcclxuICAgIF9DdXJyZW50Q2hhbm5lbFN1YmplY3QsXHJcbiAgICBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QsXHJcbl0pXHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKGZpbHRlckN1cnJlbnRDaGFubmVsSW1hZ2VEYXRhTWVzc2FnZXMpO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkNoYW5uZWwgU2VydmljZTogXCIsIG0pO1xyXG59KTtcclxuX1Byb2NlZWRTdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoaGFzTWVzc2FnZUZpbHRlcikpXHJcbiAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChJbWFnZURhdGFNZXNzYWdlU3ViamVjdC5nZXRWYWx1ZSgpKTtcclxufSk7XHJcbi8vIEV4dGVybmFsXHJcbnZhciBDaGFubmVsU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoYW5uZWxTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdCA9IF9Jbml0U3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9UVlByb2dyYW1TdWJqZWN0ID0gX1RWUHJvZ3JhbVN1YmplY3Q7XHJcbiAgICBDaGFubmVsU2VydmljZS5fQ3VycmVudENoYW5uZWxTdWJqZWN0ID0gX0N1cnJlbnRDaGFubmVsU3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9JbWFnZURhdGFNZXNzYWdlU3ViamVjdCA9IF9JbWFnZURhdGFNZXNzYWdlU3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9Qcm9jZWVkU3ViamVjdCA9IF9Qcm9jZWVkU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgcmV0dXJuIENoYW5uZWxTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNoYW5uZWxTZXJ2aWNlID0gQ2hhbm5lbFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL3VuaXR5XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi91bml0eS91bml0eVwiKTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi9jaGFubmVsXCIpO1xyXG5jaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkluY29taW5nTWVzc2FnZVNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8qKlxyXG4gKiBNZXNzYWdlcyBDb21pbmcgaW50byBVbml0eVxyXG4gKi9cclxuLy8gSW5wdXRcclxudmFyIF9NZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0ltYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1Byb2NlZWRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBoYW5kbGVJbmNvbWluZ01lc3NhZ2UgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpZCA9IF9hWzBdLCBtZXNzYWdlID0gX2FbMV07XHJcbiAgICB2YXIgbSA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG0gPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIG0uaWQgPSBpZDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFtlLCBcIkNvdWxkIG5vdCBwYXJzZSBtZXNzYWdlXCJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtO1xyXG59O1xyXG52YXIgcG9zaXRpb25NZXNzYWdlRmlsdGVyID0gZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiAhIW0gJiYgbS50eXBlID09PSBkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5Qb3NpdGlvbjtcclxufTtcclxudmFyIGltYWdlTWVzc2FnZUZpbHRlciA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gISFtICYmIG0udHlwZSA9PT0gZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuSW1hZ2VEYXRhO1xyXG59O1xyXG52YXIgaW1hZ2VTdWJqZWN0SGFuZGxlciA9IGZ1bmN0aW9uIChpbWFnZSkgeyByZXR1cm4gKHtcclxuICAgIHR5cGU6IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkltYWdlRGF0YSxcclxuICAgIGltYWdlOiBpbWFnZSxcclxufSk7IH07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxuX01lc3NhZ2VTdWJqZWN0XHJcbiAgICAucGlwZShtYXBfMS5tYXAoaGFuZGxlSW5jb21pbmdNZXNzYWdlKSwgZmlsdGVyXzEuZmlsdGVyKHBvc2l0aW9uTWVzc2FnZUZpbHRlcikpXHJcbiAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gUG9zaXRpb25NZXNzYWdlU3ViamVjdF8ubmV4dChtKTtcclxufSk7XHJcbi8vIF9NZXNzYWdlU3ViamVjdFxyXG4vLyAgIC5waXBlKG1hcChoYW5kbGVJbmNvbWluZ01lc3NhZ2UpLCBmaWx0ZXIoaW1hZ2VNZXNzYWdlRmlsdGVyKSlcclxuLy8gICAuc3Vic2NyaWJlKChtKSA9PiB7XHJcbi8vICAgICBpZiAoIW0pIHJldHVybjtcclxuLy8gICAgIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KFttLmlkLCAobSBhcyB1bmtub3duKSBhcyBJSW1hZ2VEYXRhTWVzc2FnZV0pO1xyXG4vLyAgIH0pO1xyXG5fSW1hZ2VTdWJqZWN0XHJcbiAgICAucGlwZShtYXBfMS5tYXAoaW1hZ2VTdWJqZWN0SGFuZGxlcikpXHJcbiAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLm5leHQobSk7XHJcbn0pO1xyXG4vLyBFeHBvcnRcclxudmFyIEluY29taW5nTWVzc2FnZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuX01lc3NhZ2VTdWJqZWN0ID0gX01lc3NhZ2VTdWJqZWN0O1xyXG4gICAgSW5jb21pbmdNZXNzYWdlU2VydmljZS5fSW1hZ2VTdWJqZWN0ID0gX0ltYWdlU3ViamVjdDtcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuX1Byb2NlZWRTdWJqZWN0ID0gX1Byb2NlZWRTdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLlBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gUG9zaXRpb25NZXNzYWdlU3ViamVjdF87XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gSW5jb21pbmdNZXNzYWdlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlID0gSW5jb21pbmdNZXNzYWdlU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBpbmNvbWluZ18xID0gcmVxdWlyZShcIi4uL2luY29taW5nXCIpO1xyXG4vLyBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+XHJcbi8vICAgQ2hhbm5lbFNlcnZpY2UuX0ltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Lm5leHQobWVzc2FnZSlcclxuLy8gKTtcclxuaW5jb21pbmdfMS5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xyXG59KTtcclxuaW5jb21pbmdfMS5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLlBvc2l0aW9uTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbmNvbWluZy9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxucmVxdWlyZShcIi4vb3V0Z29pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb25cIik7XHJcbnJlcXVpcmUoXCIuL3J0Yy9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxucmVxdWlyZShcIi4vd3MvaW50ZWdyYXRpb24vaW50ZWdyYXRpb25cIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbml0L2luaXRcIik7XHJcbnZhciBtZWRpYV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL21lZGlhL21lZGlhXCIpO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91bml0eS91bml0eVwiKTtcclxudmFyIGluY29taW5nXzEgPSByZXF1aXJlKFwiLi4vLi4vaW5jb21pbmcvaW5jb21pbmdcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi8uLi9ydGMvcnRjXCIpO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi9vdXRnb2luZ1wiKTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlN0YXJ0TWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gaW5pdF8xLkluaXRTZXJ2aWNlLl9Jc0dhbWVMb2FkZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbn0pO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdC5uZXh0KDEpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlByZXNlbnRNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fU2hhcmVTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qcm9jZWVkTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9Qcm9jZWVkU3ViamVjdC5uZXh0KCk7XHJcbn0pO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBpbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuX1Byb2NlZWRTdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29uc3RcIik7XHJcbnZhciBkZWZpbml0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9kZWZpbml0aW9uc1wiKTtcclxuLyoqXHJcbiAqIE1lc3NhZ2VzIEdvaW5nIG91dCBvZiBVbml0eVxyXG4gKi9cclxuLy8gSW5wdXRcclxudmFyIF9SYXdNZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0ltYWdlTWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9JRFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgU3RhcnRNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIFByZXNlbnRNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJbWFnZU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUHJvY2VlZE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBnZW5lcmF0ZUZpbHRlciA9IGZ1bmN0aW9uICh0eXBlKSB7IHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuICEhbWVzc2FnZSAmJiBtZXNzYWdlLnR5cGUgPT09IHR5cGU7XHJcbn07IH07XHJcbnZhciByYXdNZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICB2YXIgcGFyc2VkTWVzc2FnZSA9IG51bGw7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJDb3VsZCBub3QgUGFyc2UgTWVzc2FnZVwiKTtcclxuICAgIH1cclxuICAgIGlmICghcGFyc2VkTWVzc2FnZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBNZXNzYWdlU3ViamVjdF8ubmV4dChwYXJzZWRNZXNzYWdlKTtcclxufTtcclxudmFyIGltYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGlkID0gX2FbMF0sIGltYWdlID0gX2FbMV07XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxuX1Jhd01lc3NhZ2VTdWJqZWN0LnN1YnNjcmliZShyYXdNZXNzYWdlSGFuZGxlcik7XHJcbk1lc3NhZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihnZW5lcmF0ZUZpbHRlcihkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5TdGFydCkpKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIFN0YXJ0TWVzc2FnZVN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUHJlc2VudCkpKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIFByZXNlbnRNZXNzYWdlU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbk1lc3NhZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihnZW5lcmF0ZUZpbHRlcihkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5GdWxsU2NyZWVuKSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlByb2NlZWQpKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBQcm9jZWVkTWVzc2FnZVN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUG9zaXRpb24pKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuLy8gRGVidWdnaW5nXHJcbkRlYnVnU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoY29uc3RfMS5pc0RlYnVnKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKFwiT3V0Z29pbmcgTWVzc2FnZSBTZXJ2aWNlOiBcIiwgbSk7XHJcbn0pO1xyXG5QcmVzZW50TWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuLy8gRXhwb3J0c1xyXG52YXIgT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fUmF3TWVzc2FnZVN1YmplY3QgPSBfUmF3TWVzc2FnZVN1YmplY3Q7XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9JbWFnZU1lc3NhZ2VTdWJqZWN0ID0gX0ltYWdlTWVzc2FnZVN1YmplY3Q7XHJcbiAgICAvLyBJT1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fSURTdWJqZWN0XyA9IF9JRFN1YmplY3RfO1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLk1lc3NhZ2VTdWJqZWN0XyA9IE1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuU3RhcnRNZXNzYWdlU3ViamVjdF8gPSBTdGFydE1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJlc2VudE1lc3NhZ2VTdWJqZWN0XyA9IFByZXNlbnRNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8gPSBGdWxsU2NyZWVuTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XyA9IFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5JbWFnZU1lc3NhZ2VTdWJqZWN0XyA9IEltYWdlTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qcm9jZWVkTWVzc2FnZVN1YmplY3RfID0gUHJvY2VlZE1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gT3V0Z29pbmdNZXNzYWdlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlID0gT3V0Z29pbmdNZXNzYWdlU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9iYWNrZW5kL2JhY2tlbmRcIik7XHJcbnZhciBtZWRpYV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL21lZGlhL21lZGlhXCIpO1xyXG52YXIgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcclxudmFyIGluY29taW5nXzEgPSByZXF1aXJlKFwiLi4vLi4vaW5jb21pbmcvaW5jb21pbmdcIik7XHJcbnZhciBvdXRnb2luZ18xID0gcmVxdWlyZShcIi4uLy4uL291dGdvaW5nL291dGdvaW5nXCIpO1xyXG52YXIgd3NfMSA9IHJlcXVpcmUoXCIuLi8uLi93cy93c1wiKTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uL3J0Y1wiKTtcclxucnRjXzEuUlRDU2VydmljZS5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGluY29taW5nXzEuSW5jb21pbmdNZXNzYWdlU2VydmljZS5fTWVzc2FnZVN1YmplY3QubmV4dChtKTtcclxufSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuVXBkYXRlU3RhdGVTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fUmVmcmVzaFN1YmplY3QubmV4dCgpO1xyXG59KTtcclxucnRjXzEuUlRDU2VydmljZS5Db21tdW5pY2F0aW9uU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICB3c18xLldTU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QubmV4dChtKTtcclxufSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuSURTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBiYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuX0lEU2J1amVjdC5uZXh0KGlkKTsgfSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuSURTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gb3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9JRFN1YmplY3RfLm5leHQoaWQpO1xyXG59KTtcclxucnRjXzEuUlRDU2VydmljZS5JRFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHN0YXRlXzEuU3RhdGVTZXJ2aWNlLl9JRFN1YmplY3RfLm5leHQoaWQpOyB9KTtcclxucnRjXzEuUlRDU2VydmljZS5PblN0cmVhbVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICByZXR1cm4gbWVkaWFfMS5NZWRpYVNlcnZpY2UuX0F1ZGlvU3ViamVjdC5uZXh0KHN0cmVhbSk7XHJcbn0pO1xyXG5ydGNfMS5SVENTZXJ2aWNlLk9uU3RyZWFtU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fVmlkZW9TdWJqZWN0Lm5leHQoc3RyZWFtKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUlRDU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZGVib3VuY2VUaW1lXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2VUaW1lXCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgc3dpdGNoTWFwXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoTWFwXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29uc3RcIik7XHJcbnZhciBjbGllbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvY2xpZW50XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIF9Ccm9hZGNhc3RTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQ29tbXVuaWNhdGlvblN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9NZWRpYVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4vLyBPdXRwdXRcclxudmFyIENvbW11bmljYXRpb25TdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgQ2xpZW50U3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgSURTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBVcGRhdGVTdGF0ZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBPbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBPblN0cmVhbVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xpZW50ID0gY2xpZW50XzEuQ2xpZW50LmNyZWF0ZUNsaWVudChDb21tdW5pY2F0aW9uU3ViamVjdF8pO1xyXG4gICAgQ2xpZW50U3ViamVjdF8ubmV4dChjbGllbnQpO1xyXG4gICAgX0lzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbiAgICAvLyBEZWJ1Z1N1YmplY3RfLm5leHQoXCJSZW1vdGVcIik7XHJcbiAgICBJRFN1YmplY3RfLm5leHQoY2xpZW50LmlkKTtcclxufTtcclxudmFyIGlzSW5pdGlhbGl6ZWRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfTtcclxudmFyIG9uRGF0YUNoYW5uZWxIYW5kbGVyID0gZnVuY3Rpb24gKG0pIHtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChtKTtcclxuICAgIE9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8ubmV4dChtKTtcclxufTtcclxudmFyIG9uQnJvYWRjYXN0SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAvLyBEZWJ1Z1N1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICB2YXIgY2xpZW50ID0gQ2xpZW50U3ViamVjdF8uZ2V0VmFsdWUoKTtcclxuICAgIGlmICghY2xpZW50KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNsaWVudC5icm9hZGNhc3REYXRhKG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgb25NZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWVkaWEpIHtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChcIlJUQ1NlcnZpY2UgLT4gb25NZWRpYUhhbmRsZXJcIik7XHJcbiAgICB2YXIgY2xpZW50ID0gQ2xpZW50U3ViamVjdF8uZ2V0VmFsdWUoKTtcclxuICAgIGlmICghY2xpZW50IHx8ICFtZWRpYSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjbGllbnQuX0xvY2FsTWVkaWFTdWJqZWN0Lm5leHQobWVkaWEpO1xyXG59O1xyXG52YXIgb25TdHJlYW1IYW5kbGVyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgXyA9IF9hWzBdLCBzdHJlYW0gPSBfYVsxXTtcclxuICAgIGNvbnNvbGUud2FybihcIlNUUkVBTSFcIik7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJSVEMgU2VydmljZSAtPiBvblN0cmVhbUhhbmRsZXJcIik7XHJcbiAgICBPblN0cmVhbVN1YmplY3RfLm5leHQoc3RyZWFtKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uIChjbGllbnQpIHsgcmV0dXJuIGNsaWVudC5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfOyB9KSkuc3Vic2NyaWJlKG9uRGF0YUNoYW5uZWxIYW5kbGVyKTtcclxuQ2xpZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuICEhYzsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoY2xpZW50KSB7IHJldHVybiBjbGllbnQuT25EYXRhQ2hhbm5lbFN1YmplY3RfOyB9KSkuc3Vic2NyaWJlKGNvbnNvbGUud2Fybik7XHJcbkNsaWVudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiAhIWM7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKGNsaWVudCkgeyByZXR1cm4gY2xpZW50Lk9uU3RyZWFtU3ViamVjdF87IH0pKS5zdWJzY3JpYmUob25TdHJlYW1IYW5kbGVyKTtcclxuX0Jyb2FkY2FzdFN1YmplY3Quc3Vic2NyaWJlKG9uQnJvYWRjYXN0SGFuZGxlcik7XHJcbl9Db21tdW5pY2F0aW9uU3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIENvbW11bmljYXRpb25TdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuQ29tbXVuaWNhdGlvblN1YmplY3RfLnBpcGUoZGVib3VuY2VUaW1lXzEuZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gVXBkYXRlU3RhdGVTdWJqZWN0Xy5uZXh0KCk7XHJcbn0pO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uIChjbGllbnQpIHsgcmV0dXJuIGNsaWVudC5EZWJ1Z1N1YmplY3RfOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9NZWRpYVN1YmplY3Q7IH0pKS5zdWJzY3JpYmUob25NZWRpYUhhbmRsZXIpO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIlJUQyBTZXJ2aWNlOiBcIiwgbSk7XHJcbn0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBSVENTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUlRDU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFJUQ1NlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgUlRDU2VydmljZS5fSXNJbml0aWFsaXplZFN1YmplY3QgPSBfSXNJbml0aWFsaXplZFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0ID0gX0Jyb2FkY2FzdFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLl9Db21tdW5pY2F0aW9uU3ViamVjdCA9IF9Db21tdW5pY2F0aW9uU3ViamVjdDtcclxuICAgIFJUQ1NlcnZpY2UuX01lZGlhU3ViamVjdCA9IF9NZWRpYVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFJUQ1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfID0gQ29tbXVuaWNhdGlvblN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5DbGllbnRTdWJqZWN0XyA9IENsaWVudFN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5JRFN1YmplY3RfID0gSURTdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuVXBkYXRlU3RhdGVTdWJqZWN0XyA9IFVwZGF0ZVN0YXRlU3ViamVjdF87XHJcbiAgICBSVENTZXJ2aWNlLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8gPSBPbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5PblN0cmVhbVN1YmplY3RfID0gT25TdHJlYW1TdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gUlRDU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5SVENTZXJ2aWNlID0gUlRDU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbml0L2luaXRcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi8uLi9ydGMvcnRjXCIpO1xyXG52YXIgd3NfMSA9IHJlcXVpcmUoXCIuLi93c1wiKTtcclxud3NfMS5XU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc09wZW4pIHtcclxuICAgIHJldHVybiBpbml0XzEuSW5pdFNlcnZpY2UuX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4ubmV4dChpc09wZW4pO1xyXG59KTtcclxud3NfMS5XU1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcnRjXzEuUlRDU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QubmV4dChtKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuV1NTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgd2ViX3NvY2tldHNfYWdlbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvd2ViLXNvY2tldHMtYWdlbnRcIik7XHJcbnZhciBzd2l0Y2hNYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbnN0XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0NvbW11bmljYXRpb25TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNSZW1vdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbi8vIE91dHB1dFxyXG52YXIgQ29tbXVuaWNhdGlvblN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBSZXNldEFnZW50U3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPOiBBZGQgSGFuZGxlciB0byBSZWZyZXNoIFdTIGluIFdlYlNvY2tldEFnZW50XHJcbiAgICB2YXIgd3MgPSBuZXcgd2ViX3NvY2tldHNfYWdlbnRfMS5XZWJTb2NrZXRzQWdlbnQoX0NvbW11bmljYXRpb25TdWJqZWN0LCBDb21tdW5pY2F0aW9uU3ViamVjdF8pO1xyXG4gICAgV2ViU29ja2V0c0FnZW50U3ViamVjdF8ubmV4dCh3cyk7XHJcbn07XHJcbnZhciBvbldlYlNvY2tldFJlYWR5SGFuZGxlciA9IGZ1bmN0aW9uIChpc1JlYWR5KSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJXUyBSZWFkeVwiKTtcclxuICAgIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fLm5leHQoaXNSZWFkeSk7XHJcbn07XHJcbnZhciBvbldlYlNvY2tldENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChcIldTIENsb3NlZFwiKTtcclxuICAgIFJlc2V0QWdlbnRTdWJqZWN0Xy5uZXh0KCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9Jc1dpbmRvd0xvYWRlZFN1YmplY3QubmV4dCgpOyB9KTtcclxuX0lzV2luZG93TG9hZGVkU3ViamVjdC5zdWJzY3JpYmUoaW5pdCk7XHJcblJlc2V0QWdlbnRTdWJqZWN0Xy5zdWJzY3JpYmUoaW5pdCk7XHJcbldlYlNvY2tldHNBZ2VudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gISF3czsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAod3MpIHsgcmV0dXJuIHdzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0OyB9KSkuc3Vic2NyaWJlKG9uV2ViU29ja2V0UmVhZHlIYW5kbGVyKTtcclxuV2ViU29ja2V0c0FnZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKHdzKSB7IHJldHVybiAhIXdzOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gd3MuT25DbG9zZVN1YmplY3Q7IH0pKS5zdWJzY3JpYmUob25XZWJTb2NrZXRDbG9zZUhhbmRsZXIpO1xyXG5fQ29tbXVuaWNhdGlvblN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIldTIFNlcnZpY2U6IFwiLCBtKTtcclxufSk7XHJcbi8vIEV4cG9ydHNcclxudmFyIFdTU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdTU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vSW5wdXRcclxuICAgIFdTU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IF9Jc1dpbmRvd0xvYWRlZFN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzUmVtb3RlU3ViamVjdCA9IF9Jc1JlbW90ZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFdTU2VydmljZS5Db21tdW5pY2F0aW9uU3ViamVjdF8gPSBDb21tdW5pY2F0aW9uU3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuV2ViU29ja2V0c0FnZW50U3ViamVjdF8gPSBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0XztcclxuICAgIFdTU2VydmljZS5SZXNldEFnZW50U3ViamVjdF8gPSBSZXNldEFnZW50U3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8gPSBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXztcclxuICAgIHJldHVybiBXU1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV1NTZXJ2aWNlID0gV1NTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Jbml0U2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgdGFrZVVudGlsXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZVVudGlsXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0Vudmlyb25tZW50U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoXCJyZW1vdGVcIik7XHJcbi8vIE91dHB1dFxyXG52YXIgX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0lzR2FtZUxvYWRlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIEluaXRTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRW52U3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KFwicHJvZHVjdGlvblwiKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgZ2V0SXNSZW1vdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfRW52aXJvbm1lbnRTdWJqZWN0LmdldFZhbHVlKCkgPT09IFwicmVtb3RlXCI7IH07XHJcbnZhciBnZXRJc0xvY2FsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX0Vudmlyb25tZW50U3ViamVjdC5nZXRWYWx1ZSgpID09PSBcImxvY2FsXCI7IH07XHJcbnZhciBvbkxvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICB2YXIgaXNMb2NhbCA9IG9yaWdpbi5pbmNsdWRlcyhcImxvY2FsaG9zdFwiKTtcclxuICAgIF9FbnZpcm9ubWVudFN1YmplY3QubmV4dChcInJlbW90ZVwiKTsgLy9pc0xvY2FsID8gXCJsb2NhbFwiIDogXCJyZW1vdGVcIik7XHJcbiAgICBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbn07XHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgSW5pdFN1YmplY3RfLm5leHQoKTtcclxuICAgIEVudlN1YmplY3RfLm5leHQoXCJwcm9kdWN0aW9uXCIpO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWRIYW5kbGVyKTtcclxuY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3QoW1xyXG4gICAgX0lzV2luZG93TG9hZGVkU3ViamVjdCxcclxuICAgIF9Jc0dhbWVMb2FkZWRTdWJqZWN0LFxyXG4gICAgX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4sXHJcbiAgICBfSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0LFxyXG5dKVxyXG4gICAgLnBpcGUodGFrZVVudGlsXzEudGFrZVVudGlsKEluaXRTdWJqZWN0XyksIGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpc1dpbmRvd0xvYWRlZFN1YmplY3QgPSBfYVswXSwgaXNHYW1lTG9hZGVkID0gX2FbMV0sIGlzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4gPSBfYVsyXSwgaXNNZWRpYUNvbmZpZ3VyZWQgPSBfYVszXTtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChbXHJcbiAgICAgICAgaXNXaW5kb3dMb2FkZWRTdWJqZWN0LFxyXG4gICAgICAgIGlzR2FtZUxvYWRlZCxcclxuICAgICAgICBpc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuLFxyXG4gICAgICAgIGlzTWVkaWFDb25maWd1cmVkLFxyXG4gICAgXSk7XHJcbiAgICB2YXIgaXNSZW1vdGUgPSBnZXRJc1JlbW90ZSgpO1xyXG4gICAgaWYgKCFpc1dpbmRvd0xvYWRlZFN1YmplY3QgfHwgIWlzR2FtZUxvYWRlZCB8fCAhaXNNZWRpYUNvbmZpZ3VyZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGlzUmVtb3RlICYmICFpc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KSlcclxuICAgIC5zdWJzY3JpYmUoaW5pdCk7XHJcbkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiSU5JVCFcIik7XHJcbn0pO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkluaXQgU2VydmljZTogXCIsIG0pO1xyXG59KTtcclxuLy8gRXhwb3J0c1xyXG52YXIgSW5pdFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbml0U2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBJbml0U2VydmljZS5fSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbiA9IF9Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuO1xyXG4gICAgSW5pdFNlcnZpY2UuX0Vudmlyb25tZW50U3ViamVjdCA9IF9FbnZpcm9ubWVudFN1YmplY3Q7XHJcbiAgICBJbml0U2VydmljZS5fSXNXaW5kb3dMb2FkZWRTdWJqZWN0ID0gX0lzV2luZG93TG9hZGVkU3ViamVjdDtcclxuICAgIEluaXRTZXJ2aWNlLl9Jc0dhbWVMb2FkZWRTdWJqZWN0ID0gX0lzR2FtZUxvYWRlZFN1YmplY3Q7XHJcbiAgICBJbml0U2VydmljZS5fSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0ID0gX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfID0gSW5pdFN1YmplY3RfO1xyXG4gICAgSW5pdFNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICBJbml0U2VydmljZS5FbnZTdWJqZWN0XyA9IEVudlN1YmplY3RfO1xyXG4gICAgcmV0dXJuIEluaXRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkluaXRTZXJ2aWNlID0gSW5pdFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vLi4vbWVkaWEvbWVkaWFcIik7XHJcbnZhciBzdGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0YXRlL3N0YXRlXCIpO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uL2luaXRcIik7XHJcbmluaXRfMS5Jbml0U2VydmljZS5Jbml0U3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gcnRjXzEuUlRDU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVfMS5TdGF0ZVNlcnZpY2UuX0luaXRTdWJqZWN0Lm5leHQoKTsgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5jb21pbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tdW5pY2F0aW9uL2luY29taW5nL2luY29taW5nXCIpO1xyXG52YXIgcnRjXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbXVuaWNhdGlvbi9ydGMvcnRjXCIpO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uLy4uL2luaXQvaW5pdFwiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vbWVkaWFcIik7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLklzTWVkaWFDb25maWd1cmVkU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc0NvbmZpZ3VyZWQpIHtcclxuICAgIHJldHVybiBpbml0XzEuSW5pdFNlcnZpY2UuX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdC5uZXh0KGlzQ29uZmlndXJlZCk7XHJcbn0pO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5NZWRpYVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVkaWEpIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9NZWRpYVN1YmplY3QubmV4dChtZWRpYSk7XHJcbn0pO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5JbWFnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgIHJldHVybiBpbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuX0ltYWdlU3ViamVjdC5uZXh0KGltYWdlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9hO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTWVkaWFTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBidWZmZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9idWZmZXJcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXBcIik7XHJcbnZhciB0aHJvdHRsZVRpbWVfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy90aHJvdHRsZVRpbWVcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdFwiKTtcclxudmFyIElzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBJc0F1ZGlvQ29uZmlndXJlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIElzVmlkZW9Db25maWd1cmVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfU2hhcmVTY3JlZW5TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQXVkaW9TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVmlkZW9TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgT25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBNZWRpYVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIElzTWVkaWFDb25maWd1cmVkU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIEltYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIFNJWkUgPSAyNTY7XHJcbnZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcclxudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmlkZW8ucGxheSgpO1xyXG59KTtcclxudmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbnZhciBjYW52YXM7XHJcbi8vIE1ldGhvZHNcclxudmFyIGdldEF1ZGlvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXNcclxuICAgICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUsIHZpZGVvOiBmYWxzZSB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgICAgICBNZWRpYVN1YmplY3RfLm5leHQoc3RyZWFtKTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiZ2V0QXVkaW8oKSBlcnJvcjogXCIgKyBlLm5hbWUpO1xyXG4gICAgfSlcclxuICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBJc0F1ZGlvQ29uZmlndXJlZFN1YmplY3QubmV4dCh0cnVlKTsgfSk7XHJcbn07XHJcbnZhciBnZXREaXNwbGF5TWVkaWEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC5nZXREaXNwbGF5TWVkaWEoe1xyXG4gICAgICAgIHZpZGVvOiB0cnVlLFxyXG4gICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgTWVkaWFTdWJqZWN0Xy5uZXh0KHN0cmVhbSk7XHJcbiAgICAgICAgb25BZGRWaWRlbyhzdHJlYW0pO1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcIkxvY2FsIE1lZGlhXCIpO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJnZXREaXNwbGF5TWVkaWEoKSBlcnJvcjogXCIgKyBlLm5hbWUpO1xyXG4gICAgfSlcclxuICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBJc1ZpZGVvQ29uZmlndXJlZFN1YmplY3QubmV4dCh0cnVlKTsgfSk7XHJcbn07XHJcbnZhciBpbml0aWFsaXplQ2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKFNJWkUsIFNJWkUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBEZWJ1Z1N1YmplY3RfLm5leHQoZSk7XHJcbiAgICB9XHJcbn07XHJcbnZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoIWNhbnZhcylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBTSVpFLCBTSVpFKTtcclxuICAgIHZhciBkYXRhID0gY2FudmFzLmNvbnZlcnRUb0Jsb2Ioe1xyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgIHF1YWxpdHk6IDAuMSxcclxuICAgIH0pO1xyXG4gICAgZGF0YS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoIXMgfHwgdHlwZW9mIHMgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHMgPSBzLnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgSW1hZ2VTdWJqZWN0Xy5uZXh0KHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxudmFyIGhhc0F1ZGlvVHJhY2tzID0gZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgcmV0dXJuIHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDA7XHJcbn07XHJcbnZhciBoYXNWaWRlb1RyYWNrcyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIHJldHVybiBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwO1xyXG59O1xyXG52YXIgb25BZGRBdWRpbyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIGlmICghaGFzQXVkaW9UcmFja3Moc3RyZWFtKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJNZWRpYSBTZXJ2aWNlIC0+IG9uQWRkQXVkaW9cIik7XHJcbiAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XHJcbiAgICBhdWRpby5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcInRydWVcIik7XHJcbiAgICBhdWRpby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbn07XHJcbnZhciBvbkFkZFZpZGVvID0gZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgY29uc29sZS53YXJuKFwib25BZGRWaWRlb1wiKTtcclxuICAgIGlmICghaGFzVmlkZW9UcmFja3Moc3RyZWFtKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJNZWRpYSBTZXJ2aWNlIC0+IG9uQWRkVmlkZW9cIik7XHJcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbn07XHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTtcclxuICAgIGluaXRpYWxpemVDYW52YXMoKTtcclxuICAgIHN0ZXAoKTtcclxufTtcclxudmFyIGlzSW5pdGlhbGl6ZWRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9O1xyXG52YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHVwZGF0ZSgpO1xyXG4gICAgT25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVfLm5leHQoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlXzEsIGVfMjtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRBdWRpbygpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcIkNvdWxkIG5vdCBnZXQgQXVkaW9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERpc3BsYXlNZWRpYSgpXTtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcIkNvdWxkIG5vdCBnZXQgVmlkZW9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9KTtcclxuY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3QoW0lzVmlkZW9Db25maWd1cmVkU3ViamVjdCwgSXNBdWRpb0NvbmZpZ3VyZWRTdWJqZWN0XSlcclxuICAgIC5waXBlKG1hcF8xLm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpc1ZpZGVvQ29uZmlndXJlZCA9IF9hWzBdLCBpc0F1ZGlvQ29uZmlndXJlZCA9IF9hWzFdO1xyXG4gICAgcmV0dXJuIGlzVmlkZW9Db25maWd1cmVkICYmIGlzQXVkaW9Db25maWd1cmVkO1xyXG59KSlcclxuICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGlzQ29uZmlndXJlZCkgeyByZXR1cm4gSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0Xy5uZXh0KGlzQ29uZmlndXJlZCk7IH0pO1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5fQXVkaW9TdWJqZWN0LnN1YnNjcmliZShvbkFkZEF1ZGlvKTtcclxuX1ZpZGVvU3ViamVjdC5zdWJzY3JpYmUob25BZGRWaWRlbyk7XHJcbkltYWdlU3ViamVjdF8ucGlwZShidWZmZXJfMS5idWZmZXIoT25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVfLnBpcGUodGhyb3R0bGVUaW1lXzEudGhyb3R0bGVUaW1lKDYwKSkpLCBmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICEhaTsgfSksIG1hcF8xLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaVtpLmxlbmd0aCAtIDFdOyB9KSwgZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChpKSB7IHJldHVybiAhIWk7IH0pKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGkpIHtcclxuICAgIGltYWdlLnNyYyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiArIGk7XHJcbn0pO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIk1lZGlhIFNlcnZpY2U6IFwiLCBtKTtcclxufSk7XHJcbi8vIEV4cG9ydFxyXG52YXIgTWVkaWFTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVkaWFTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIE1lZGlhU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBNZWRpYVNlcnZpY2UuX1NoYXJlU2NyZWVuU3ViamVjdCA9IF9TaGFyZVNjcmVlblN1YmplY3Q7XHJcbiAgICBNZWRpYVNlcnZpY2UuX0F1ZGlvU3ViamVjdCA9IF9BdWRpb1N1YmplY3Q7XHJcbiAgICBNZWRpYVNlcnZpY2UuX1ZpZGVvU3ViamVjdCA9IF9WaWRlb1N1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIE1lZGlhU2VydmljZS5JbWFnZVN1YmplY3RfID0gSW1hZ2VTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5Jc01lZGlhQ29uZmlndXJlZFN1YmplY3RfID0gSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5NZWRpYVN1YmplY3RfID0gTWVkaWFTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBNZWRpYVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWVkaWFTZXJ2aWNlID0gTWVkaWFTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlN0YXRlU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQ2xpZW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVFZQcm9ncmFtU3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNQcmVzZW50aW5nU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIEdhbWVTdGF0ZVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChkZWZpbml0aW9uc18xLkRFRkFVTFRfU1RBVEUpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oe30sIEdhbWVTdGF0ZVN1YmplY3RfLmdldFZhbHVlKCkpKTsgfTtcclxudmFyIHVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWwpIHtcclxuICAgIHZhciBwcmV2U3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgdmFyIG5ld1N0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXZTdGF0ZSksIHBhcnRpYWwpO1xyXG4gICAgR2FtZVN0YXRlU3ViamVjdF8ubmV4dChuZXdTdGF0ZSk7XHJcbn07XHJcbnZhciBzdGF0ZVVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjbGllbnQgPSBfYVswXSwgaWQgPSBfYVsxXSwgY2hhbm5lbCA9IF9hWzJdLCBwcm9ncmFtID0gX2FbM10sIGlzUHJlc2VudGluZyA9IF9hWzRdO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KGNsaWVudCA9PT0gbnVsbCB8fCBjbGllbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWVudC5Db25uZWN0aW9uTWFuYWdlci5jb25uZWN0aW9ucyk7XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgc3RyZWFtczogKGNsaWVudCA9PT0gbnVsbCB8fCBjbGllbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWVudC5zdHJlYW1zKSB8fCB7fSxcclxuICAgICAgICBpZDogaWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGNoYW5uZWw6IGNoYW5uZWwgfHwgbnVsbCxcclxuICAgICAgICBwcm9ncmFtOiBwcm9ncmFtLFxyXG4gICAgICAgIGlzUHJlc2VudGluZzogaXNQcmVzZW50aW5nLFxyXG4gICAgfSk7XHJcbn07XHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3QoW1xyXG4gICAgICAgIF9DbGllbnRTdWJqZWN0LFxyXG4gICAgICAgIF9JRFN1YmplY3RfLFxyXG4gICAgICAgIF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0LFxyXG4gICAgICAgIF9UVlByb2dyYW1TdGF0ZVN1YmplY3QsXHJcbiAgICAgICAgX0lzUHJlc2VudGluZ1N1YmplY3QsXHJcbiAgICBdKS5zdWJzY3JpYmUoc3RhdGVVcGRhdGVIYW5kbGVyKTtcclxuICAgIEdhbWVTdGF0ZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChzdGF0ZSk7IH0pO1xyXG59KTtcclxudmFyIFN0YXRlU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXRlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9DbGllbnRTdWJqZWN0ID0gX0NsaWVudFN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0lEU3ViamVjdF8gPSBfSURTdWJqZWN0XztcclxuICAgIFN0YXRlU2VydmljZS5fQ3VycmVudFRWQ2hhbm5lbFN0YXRlU3ViamVjdCA9IF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9UVlByb2dyYW1TdGF0ZVN1YmplY3QgPSBfVFZQcm9ncmFtU3RhdGVTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9Jc1ByZXNlbnRpbmdTdWJqZWN0ID0gX0lzUHJlc2VudGluZ1N1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFN0YXRlU2VydmljZS5HYW1lU3RhdGVTdWJqZWN0XyA9IEdhbWVTdGF0ZVN1YmplY3RfO1xyXG4gICAgU3RhdGVTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIFN0YXRlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5TdGF0ZVNlcnZpY2UgPSBTdGF0ZVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tdW5pY2F0aW9uL291dGdvaW5nL291dGdvaW5nXCIpO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi91bml0eVwiKTtcclxudW5pdHlfMS5Vbml0eVNlcnZpY2UuVW5pdHlNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBvdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX1Jhd01lc3NhZ2VTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVuaXR5U2VydmljZSA9IHZvaWQgMDtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbi8vIElucHV0XHJcbnZhciBfU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX01ha2VGdWxsU2NyZWVuU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1F1aXRHYW1lU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIFVuaXR5TWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBQb3NpdGlvblN0YXRlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIE1BTkFHRVIgPSBcIk1hbmFnZXJcIjtcclxudmFyIE9OX01FU1NBR0UgPSBcIk9uTWVzc2FnZVwiO1xyXG4vLyBNZXRob2RzXHJcbnZhciBzZW5kVG9Vbml0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG1ldGhvZCwgbWVzc2FnZSkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKCF1bml0eUluc3RhbmNlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHVuaXR5SW5zdGFuY2UuU2VuZE1lc3NhZ2Uob2JqZWN0LCBtZXRob2QsIG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgc2VuZE1lc3NhZ2VUb1VuaXR5SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW1wiU2VuZCBUbyBVbml0eVwiLCBtZXNzYWdlXSk7XHJcbiAgICB2YXIgbWVzc2FnZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgc2VuZFRvVW5pdHkoTUFOQUdFUiwgT05fTUVTU0FHRSwgbWVzc2FnZVN0cmluZyk7XHJcbn07XHJcbnZhciBtYWtlRnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlNldEZ1bGxzY3JlZW4oMSk7XHJcbn07XHJcbnZhciBxdWl0R2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlF1aXQoKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG4vLyBAdHMtaWdub3JlXHJcbndpbmRvdy5zZW5kVW5pdHlNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBVbml0eU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG4vLyBfU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdC5zdWJzY3JpYmUoc2VuZE1lc3NhZ2VUb1VuaXR5SGFuZGxlcik7XHJcbl9NYWtlRnVsbFNjcmVlblN1YmplY3Quc3Vic2NyaWJlKG1ha2VGdWxsU2NyZWVuKTtcclxuX1F1aXRHYW1lU3ViamVjdC5zdWJzY3JpYmUocXVpdEdhbWUpO1xyXG5Vbml0eU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcXVpdEdhbWUoKTtcclxufSk7XHJcbnZhciBVbml0eVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVbml0eVNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICBVbml0eVNlcnZpY2UuX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3QgPSBfU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdDtcclxuICAgIFVuaXR5U2VydmljZS5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0ID0gX01ha2VGdWxsU2NyZWVuU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgVW5pdHlTZXJ2aWNlLlVuaXR5TWVzc2FnZVN1YmplY3RfID0gVW5pdHlNZXNzYWdlU3ViamVjdF87XHJcbiAgICBVbml0eVNlcnZpY2UuUG9zaXRpb25TdGF0ZVN1YmplY3RfID0gUG9zaXRpb25TdGF0ZVN1YmplY3RfO1xyXG4gICAgVW5pdHlTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIFVuaXR5U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Vbml0eVNlcnZpY2UgPSBVbml0eVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuREVGQVVMVF9TVEFURSA9IGV4cG9ydHMuVVJMX05BTUUgPSBleHBvcnRzLlVSTF9UVl9DSEFOTkVMID0gZXhwb3J0cy5FTWVzc2FnZVR5cGUgPSB2b2lkIDA7XHJcbi8vIE1lc3NhZ2VzXHJcbnZhciBFTWVzc2FnZVR5cGU7XHJcbihmdW5jdGlvbiAoRU1lc3NhZ2VUeXBlKSB7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJQcmVzZW50XCJdID0gXCJwcmVzZW50XCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJGdWxsU2NyZWVuXCJdID0gXCJmdWxsc2NyZWVuXCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJQb3NpdGlvblwiXSA9IFwicG9zaXRpb25cIjtcclxuICAgIEVNZXNzYWdlVHlwZVtcIkltYWdlRGF0YVwiXSA9IFwiaW1hZ2VcIjtcclxuICAgIEVNZXNzYWdlVHlwZVtcIlN0YXJ0XCJdID0gXCJzdGFydFwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiUHJvY2VlZFwiXSA9IFwicHJvY2VlZFwiO1xyXG59KShFTWVzc2FnZVR5cGUgPSBleHBvcnRzLkVNZXNzYWdlVHlwZSB8fCAoZXhwb3J0cy5FTWVzc2FnZVR5cGUgPSB7fSkpO1xyXG4vLyBCYWNrZW5kXHJcbmV4cG9ydHMuVVJMX1RWX0NIQU5ORUwgPSBcIi90dlwiO1xyXG5leHBvcnRzLlVSTF9OQU1FID0gXCIvbmFtZVwiO1xyXG5leHBvcnRzLkRFRkFVTFRfU1RBVEUgPSB7XHJcbiAgICBpZDogXCJcIixcclxuICAgIGlzUHJlc2VudGluZzogZmFsc2UsXHJcbiAgICBzdHJlYW1zOiB7fSxcclxuICAgIGNoYW5uZWw6IDEsXHJcbiAgICBwcm9ncmFtOiB7fSxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5EZWJ1Z1N1YmplY3QgPSBleHBvcnRzLkVudmlyb25tZW50U3ViamVjdCA9IGV4cG9ydHMuZ2VuZXJhdGVJZCA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGdldFJhbmRvbU51bWJlcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBBcnJheS5mcm9tKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDEwLCBsZW5ndGgpKS50b1N0cmluZygpKS5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KGxlbmd0aClcclxuICAgICAgICAuZmlsbChcIjBcIilcclxuICAgICAgICAubWFwKGZ1bmN0aW9uICh2LCBpKSB7IHJldHVybiB2YWx1ZVtpXSB8fCB2OyB9KVxyXG4gICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAuam9pbihcIlwiKTtcclxufTtcclxuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKGFtb3VudCwgbGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KGFtb3VudClcclxuICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGEsIGksIGIpIHsgcmV0dXJuIFwiXCIgKyAoaSAmJiBcIi1cIikgKyBnZXRSYW5kb21OdW1iZXJzKGxlbmd0aCk7IH0pXHJcbiAgICAgICAgLmpvaW4oXCJcIik7XHJcbn07XHJcbmV4cG9ydHMuRW52aXJvbm1lbnRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChcImRldmVsb3BtZW50XCIpO1xyXG5leHBvcnRzLkRlYnVnU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG5leHBvcnRzLkRlYnVnU3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBleHBvcnRzLkVudmlyb25tZW50U3ViamVjdC5nZXRWYWx1ZSgpID09PSBcImRldmVsb3BtZW50XCI7IH0pKS5zdWJzY3JpYmUoY29uc29sZS53YXJuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIn0=