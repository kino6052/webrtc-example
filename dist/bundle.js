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

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

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

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

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
exports.UPDATE_INTERVAL = exports.PORT = exports.IP = void 0;
exports.IP = "192.168.0.75"; // "localhost"; // "192.168.0.75";
exports.PORT = "8080";
exports.UPDATE_INTERVAL = 60; // milliseconds


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
exports.BroadcastingAgent = exports.DebugSubject_ = exports.CommunicationSubject = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
exports.CommunicationSubject = new Subject_1.Subject();
exports.DebugSubject_ = new Subject_1.Subject();
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
            exports.DebugSubject_.next(message);
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
            var id = message.id, type = message.type;
            var participants = _this.getParticipants();
            if (type !== "greeting")
                return;
            if (participants.includes(id))
                return;
            exports.DebugSubject_.next("ID: " + _this.id + ", Add Participant");
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
        this.getCommSubject().subscribe(this.messageHandler);
        this.getCommSubject().subscribe(this.greetingHandler);
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
var connection_manager_1 = __webpack_require__(/*! ./connection-manager */ "./src/lib/connection-manager.ts");
var rtc_messaging_agent_1 = __webpack_require__(/*! ./rtc-messaging-agent */ "./src/lib/rtc-messaging-agent.ts");
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        this.id = utils_1.generateId(4, 4);
        // Channels
        this.dataChannels = {};
        this.streams = {};
        // Agents
        this.BroadcastingAgent = new broadcast_1.BroadcastingAgent(this.id, broadcast_1.CommunicationSubject);
        this.RTCMessagingAgent = new rtc_messaging_agent_1.RTCMessagingAgent(this.BroadcastingAgent);
        this.ConnectionManager = new connection_manager_1.ConnectionManager(this.RTCMessagingAgent);
        // Subjects
        // Input
        this._LocalStreamSubject = new Subject_1.Subject();
        // Output
        this.OnDataChannelMessageSubject_ = new Subject_1.Subject();
        this.OnDataChannelSubject_ = new Subject_1.Subject();
        this.OnStreamSubject_ = new Subject_1.Subject();
        // Connection
        this.onConnectionCreatedHandler = function (message) {
            var id = message[0], connection = message[1];
            connection.ondatachannel = _this.onDataChannelHandler(id);
            connection.ontrack = _this.onTrackHandler(id);
            var dataChannel = connection.createDataChannel("data-channel-" + id);
            dataChannel.onopen = function (ev) { return broadcast_1.DebugSubject_.next("Opened Channel"); };
            dataChannel.onerror = function (ev) { return broadcast_1.DebugSubject_.next(JSON.stringify(ev)); };
            _this.dataChannels[id] = dataChannel;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
            broadcast_1.DebugSubject_.next(_this);
        };
        this.onConnected = function (id, connection) {
            connection.onconnectionstatechange = function (ev) {
                var _a;
                if (connection.connectionState === "connected") {
                    broadcast_1.DebugSubject_.next("Connection " + id + ", Now Connected");
                    var isOffer = ((_a = connection.localDescription) === null || _a === void 0 ? void 0 : _a.type) === "offer";
                    if (isOffer)
                        return;
                }
            };
        };
        // Stream
        this.onLocalStreamHandler = function (stream) {
            var connections = _this.ConnectionManager.connections;
            for (var id in connections) {
                _this.addStreamToConnection(connections[id], stream);
            }
        };
        this.addStreamToConnection = function (connection, stream) {
            stream.getTracks().forEach(function (t) { return connection.addTrack(t, stream); });
        };
        this.addStream = function (id, stream) {
            if (!_this.streams[id])
                _this.streams[id] = [];
            _this.streams[id].push(stream);
        };
        this.onTrackHandler = function (id) { return function (ev) {
            broadcast_1.DebugSubject_.next("ID: " + id + ", On Track Handler");
            var stream = ev.streams[0];
            _this.addStream(id, stream);
            _this.OnStreamSubject_.next([id, stream]);
        }; };
        // Data Channel
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
            broadcast_1.DebugSubject_.next("ID: " + id + ", On Data Channel Handler");
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
            broadcast_1.DebugSubject_.next(message);
        };
        this.OnDataChannelMessageSubject_.subscribe(this.onDataChannelMessageSubjectHandler);
        this.ConnectionManager.OnConnectionCreatedSubject.subscribe(this.onConnectionCreatedHandler);
        this._LocalStreamSubject.subscribe();
        this.BroadcastingAgent.sendGreeting();
        broadcast_1.DebugSubject_.next(["Client", this.id]);
    }
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
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
        this.createConnection = function (id) {
            var _id = _this.ma.broadcastingAgent.id;
            broadcast_1.DebugSubject_.next("ID: " + id + ", Create Connection in " + _this.ma.broadcastingAgent.id);
            var connection = new RTCPeerConnection(configuration);
            _this.connections[id] = connection;
            connection.onicecandidate = _this.onICECandidateHandler(id);
            _this.OnConnectionCreatedSubject.next([id, connection]);
            return connection;
        };
        // Add/Remove Participants
        this.onAddParticipantHandler = function (id) {
            broadcast_1.DebugSubject_.next(_this.ma.broadcastingAgent.id + " On Add Participant Handler");
            var oldConnection = _this.connections[id];
            if (oldConnection)
                return;
            var connection = _this.createConnection(id);
            connection
                .createOffer()
                .then(_this.ma.onOfferCreatedHandler(id))
                .catch(function (e) {
                broadcast_1.DebugSubject_.next(["Couldn't create offer for id " + id, e]);
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
            broadcast_1.DebugSubject_.next("Setting remote description in " + _this.ma.broadcastingAgent.id + " for " + id);
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
            broadcast_1.DebugSubject_.next("ID: " + id + ", On ICE Candidate Handler");
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
                broadcast_1.DebugSubject_.next(["Couldn't create answer in ID " + id, e]);
            });
            return connection;
        };
        this.onAddCandidateHandler = function (message) {
            var id = message[0], candidate = message[1];
            broadcast_1.DebugSubject_.next(["Add Candidate", candidate]);
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
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
                .pipe(filter(function (_a) {
                var data = _a.data;
                return data.type === "offer";
            }));
        };
        this.onOfferCreatedHandler = function (id) { return function (sessionDescription) {
            broadcast_1.DebugSubject_.next([
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
                .pipe(filter(function (_a) {
                var data = _a.data;
                return data.type === "answer";
            }));
        };
        this.onAnswerCreatedHandler = function (id) { return function (sessionDescription) {
            broadcast_1.DebugSubject_.next([
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
                .pipe(filter(function (_a) {
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
var WebSocketsAgent = /** @class */ (function () {
    function WebSocketsAgent(CommunicationSubject) {
        var _this = this;
        this.CommunicationSubject = CommunicationSubject;
        // Flags
        this.isOpen = false;
        this.canSend = true;
        // Subjects
        this.IsWebSocketReadySubject = new BehaviorSubject_1.BehaviorSubject(false);
        this.OnCloseSubject = new Subject_1.Subject();
        this.onIsWebSocketReadyHandler = function () {
            _this.CommunicationSubject.pipe(filter_1.filter(function () {
                var _canSend = _this.canSend;
                if (!_this.canSend)
                    _this.canSend = true;
                return _canSend;
            })).subscribe(function (message) {
                _this.sendMessage(JSON.stringify(message));
            });
        };
        this.getURL = function () {
            var origin = window.location.origin;
            origin = origin.replace("https", "wss").replace("http", "ws");
            return origin;
        };
        this.onMessageHandler = function (event) {
            broadcast_1.DebugSubject_.next(event.data);
            var message = JSON.parse(event.data);
            _this.canSend = false;
            _this.CommunicationSubject.next(message);
        };
        this.onOpenHandler = function () {
            broadcast_1.DebugSubject_.next("WS is Open");
            _this.isOpen = true;
            _this.IsWebSocketReadySubject.next(_this.isOpen);
        };
        this.onCloseHandler = function () {
            _this.isOpen = false;
            _this.OnCloseSubject.next();
        };
        this.sendMessage = function (message) {
            broadcast_1.DebugSubject_.next(message);
            _this.ws.send(message);
        };
        var url = this.getURL();
        this.ws = new WebSocket(url);
        this.ws.onmessage = this.onMessageHandler;
        this.ws.onopen = this.onOpenHandler;
        this.ws.onclose = this.onCloseHandler;
        this.IsWebSocketReadySubject.pipe(filter_1.filter(function (isReady) { return isReady; })).subscribe(this.onIsWebSocketReadyHandler);
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
/**
 * Channel Module
 *
 * Responsible for passing through only those image data messages that
 * have the id associated with the current channel.
 */
// Input
var _InitSubject = new Subject_1.Subject();
var _TVProgramSubject = new BehaviorSubject_1.BehaviorSubject({});
var _CurrentChannelSubject = new BehaviorSubject_1.BehaviorSubject(1);
var _ImageDataMessageSubject = new Subject_1.Subject();
// Output
var ImageDataMessageSubject_ = new Subject_1.Subject();
// Internal
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Methods
var init = function () { return IsInitializedSubject.next(true); };
var filterCurrentChannelImageDataMessages = function (_a) {
    var program = _a[0], channel = _a[1], tuple = _a[2];
    var from = tuple[0], message = tuple[1];
    var id = program[channel];
    if (!id)
        return;
    if (id !== from)
        return;
    ImageDataMessageSubject_.next(message);
};
// Subscriptions
_InitSubject.subscribe(init);
combineLatest_1.combineLatest([
    _TVProgramSubject,
    _CurrentChannelSubject,
    _ImageDataMessageSubject,
])
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(filterCurrentChannelImageDataMessages);
// External
var ChannelService = /** @class */ (function () {
    function ChannelService() {
    }
    // Input
    ChannelService._InitSubject = _InitSubject;
    ChannelService._TVProgramSubject = _TVProgramSubject;
    ChannelService._CurrentChannelSubject = _CurrentChannelSubject;
    ChannelService._ImageDataMessageSubject = _ImageDataMessageSubject;
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
_MessageSubject
    .pipe(map_1.map(handleIncomingMessage), filter_1.filter(imageMessageFilter))
    .subscribe(function (m) {
    if (!m)
        return;
    ImageDataMessageSubject_.next([m.id, m]);
});
// Export
var IncomingMessageService = /** @class */ (function () {
    function IncomingMessageService() {
    }
    // Input
    IncomingMessageService._MessageSubject = _MessageSubject;
    IncomingMessageService._ImageSubject = _ImageSubject;
    // Output
    IncomingMessageService.PositionMessageSubject_ = PositionMessageSubject_;
    IncomingMessageService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    IncomingMessageService.DebugSubject_ = DebugSubject_;
    return IncomingMessageService;
}());
exports.IncomingMessageService = IncomingMessageService;


/***/ }),

/***/ "./src/services/communication/incoming/integration/channel.ts":
/*!********************************************************************!*\
  !*** ./src/services/communication/incoming/integration/channel.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../../channel/channel */ "./src/services/channel/channel.ts");
var incoming_1 = __webpack_require__(/*! ../incoming */ "./src/services/communication/incoming/incoming.ts");
incoming_1.IncomingMessageService.ImageDataMessageSubject_.subscribe(function (message) {
    return channel_1.ChannelService._ImageDataMessageSubject.next(message);
});


/***/ }),

/***/ "./src/services/communication/incoming/integration/unity.ts":
/*!******************************************************************!*\
  !*** ./src/services/communication/incoming/integration/unity.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var incoming_1 = __webpack_require__(/*! ../incoming */ "./src/services/communication/incoming/incoming.ts");
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
__webpack_require__(/*! ./incoming/integration/channel */ "./src/services/communication/incoming/integration/channel.ts");
__webpack_require__(/*! ./incoming/integration/unity */ "./src/services/communication/incoming/integration/unity.ts");
__webpack_require__(/*! ./outgoing/integration/backend */ "./src/services/communication/outgoing/integration/backend.ts");
__webpack_require__(/*! ./outgoing/integration/init */ "./src/services/communication/outgoing/integration/init.ts");
__webpack_require__(/*! ./outgoing/integration/media */ "./src/services/communication/outgoing/integration/media.ts");
__webpack_require__(/*! ./outgoing/integration/rtc */ "./src/services/communication/outgoing/integration/rtc.ts");
__webpack_require__(/*! ./outgoing/integration/unity */ "./src/services/communication/outgoing/integration/unity.ts");
__webpack_require__(/*! ./rtc/integration/incoming */ "./src/services/communication/rtc/integration/incoming.ts");
__webpack_require__(/*! ./ws/integration/init */ "./src/services/communication/ws/integration/init.ts");


/***/ }),

/***/ "./src/services/communication/outgoing/integration/backend.ts":
/*!********************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/backend.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return backend_1.BackendService._UseTVChannelSubject.next(1);
});


/***/ }),

/***/ "./src/services/communication/outgoing/integration/init.ts":
/*!*****************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/init.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.StartMessageSubject_.subscribe(function () {
    return init_1.InitService._IsGameLoadedSubject.next(true);
});


/***/ }),

/***/ "./src/services/communication/outgoing/integration/media.ts":
/*!******************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/media.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return media_1.MediaService._ShareScreenSubject.next();
});


/***/ }),

/***/ "./src/services/communication/outgoing/integration/rtc.ts":
/*!****************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/rtc.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rtc_1 = __webpack_require__(/*! ../../rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.PositionMessageSubject_.subscribe(function (message) {
    return rtc_1.RTCService._BroadcastSubject.next(JSON.stringify(message));
});


/***/ }),

/***/ "./src/services/communication/outgoing/integration/unity.ts":
/*!******************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/unity.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.FullScreenMessageSubject_.subscribe(function () {
    return unity_1.UnityService._MakeFullScreenSubject.next();
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
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Position))).subscribe(function (m) { return PositionMessageSubject_.next(m); });
// Debugging
DebugSubject_.subscribe(function (m) { return console.warn("Outgoing Message Service: ", m); });
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
    OutgoingMessageService.DebugSubject_ = DebugSubject_;
    return OutgoingMessageService;
}());
exports.OutgoingMessageService = OutgoingMessageService;


/***/ }),

/***/ "./src/services/communication/rtc/integration/incoming.ts":
/*!****************************************************************!*\
  !*** ./src/services/communication/rtc/integration/incoming.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var incoming_1 = __webpack_require__(/*! ../../incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
var rtc_1 = __webpack_require__(/*! ../rtc */ "./src/services/communication/rtc/rtc.ts");
rtc_1.RTCService.OnDataChannelMessageSubject_.subscribe(function (m) {
    return incoming_1.IncomingMessageService._MessageSubject.next(m);
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var broadcast_1 = __webpack_require__(/*! ../../../lib/broadcast */ "./src/lib/broadcast.ts");
var client_1 = __webpack_require__(/*! ../../../lib/client */ "./src/lib/client.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _BroadcastSubject = new Subject_1.Subject();
var ClientSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var UpdateStateSubject_ = new Subject_1.Subject();
var OnDataChannelMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    _IsInitializedSubject.next(true);
    DebugSubject_.next("Remote");
    var client = new client_1.Client();
    IDSubject_.next(client.id);
    ClientSubject_.next(client);
};
// Subscriptions
var onClientHandler = function (client) {
    client.OnDataChannelMessageSubject_.subscribe(function (m) {
        return OnDataChannelMessageSubject_.next(m);
    });
};
_InitSubject.subscribe(init);
ClientSubject_.subscribe(function (client) {
    var isInitialized = _IsInitializedSubject.getValue();
    if (!client || !isInitialized)
        return;
    onClientHandler(client);
});
_BroadcastSubject.subscribe(function (message) {
    var client = ClientSubject_.getValue();
    if (!client)
        return;
    client.broadcastData(message);
});
broadcast_1.CommunicationSubject.pipe(debounceTime_1.debounceTime(100)).subscribe(function () {
    return UpdateStateSubject_.next();
});
// Exports
var RTCService = /** @class */ (function () {
    function RTCService() {
    }
    RTCService._InitSubject = _InitSubject;
    RTCService._IsInitializedSubject = _IsInitializedSubject;
    RTCService._BroadcastSubject = _BroadcastSubject;
    RTCService.ClientSubject_ = ClientSubject_;
    RTCService.IDSubject_ = IDSubject_;
    RTCService.UpdateStateSubject_ = UpdateStateSubject_;
    RTCService.OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
    RTCService.DebugSubject_ = DebugSubject_;
    return RTCService;
}());
exports.RTCService = RTCService;


/***/ }),

/***/ "./src/services/communication/ws/integration/init.ts":
/*!***********************************************************!*\
  !*** ./src/services/communication/ws/integration/init.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var ws_1 = __webpack_require__(/*! ../ws */ "./src/services/communication/ws/ws.ts");
ws_1.WSService.IsWebSocketConnectionOpen_.subscribe(function (isOpen) {
    return init_1.InitService._IsWebSocketConnectionOpen.next(isOpen);
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
// Input
var _CommunicationSubject = new Subject_1.Subject();
var _IsWindowLoadedSubject = new Subject_1.Subject();
var _IsRemoteSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Output
var WebSocketsAgentSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var ResetAgentSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IsWebSocketConnectionOpen_ = new BehaviorSubject_1.BehaviorSubject(false);
// Methods
var init = function () {
    var ws = new web_sockets_agent_1.WebSocketsAgent(_CommunicationSubject);
    WebSocketsAgentSubject_.next(ws);
};
var onWebSocketReadyHandler = function (isReady) {
    IsWebSocketConnectionOpen_.next(isReady);
};
var onWebSocketCloseHandler = function () { return ResetAgentSubject_.next(null); };
// Subscriptions
_IsWindowLoadedSubject
    .pipe(switchMap_1.switchMap(function () { return ResetAgentSubject_; }))
    .subscribe(init);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.IsWebSocketReadySubject; })).subscribe(onWebSocketReadyHandler);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.OnCloseSubject; })).subscribe(onWebSocketCloseHandler);
// Exports
var WSService = /** @class */ (function () {
    function WSService() {
    }
    //Input
    WSService._CommunicationSubject = _CommunicationSubject;
    WSService._IsWindowLoadedSubject = _IsWindowLoadedSubject;
    WSService._IsRemoteSubject = _IsRemoteSubject;
    // Output
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
__webpack_require__(/*! ./integration/backend */ "./src/services/init/integration/backend.ts");
__webpack_require__(/*! ./integration/media */ "./src/services/init/integration/media.ts");
__webpack_require__(/*! ./integration/rtc */ "./src/services/init/integration/rtc.ts");
__webpack_require__(/*! ./integration/state */ "./src/services/init/integration/state.ts");
__webpack_require__(/*! ./integration/channel */ "./src/services/init/integration/channel.ts");


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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
// Input
var _IsWebSocketConnectionOpen = new BehaviorSubject_1.BehaviorSubject(false);
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
])
    .pipe(filter_1.filter(function (_a) {
    var isWindowLoadedSubject = _a[0], isGameLoaded = _a[1], IsWebSocketConnectionOpen = _a[2];
    var isRemote = getIsRemote();
    if (!isWindowLoadedSubject || !isGameLoaded)
        return false;
    if (isRemote && !IsWebSocketConnectionOpen)
        return false;
    return true;
}))
    .subscribe(init);
InitSubject_.subscribe(function () {
    DebugSubject_.next("INIT!");
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
    // Output
    InitService.InitSubject_ = InitSubject_;
    InitService.DebugSubject_ = DebugSubject_;
    InitService.EnvSubject_ = EnvSubject_;
    return InitService;
}());
exports.InitService = InitService;


/***/ }),

/***/ "./src/services/init/integration/backend.ts":
/*!**************************************************!*\
  !*** ./src/services/init/integration/backend.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../backend/backend */ "./src/services/backend/backend.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return backend_1.BackendService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/init/integration/channel.ts":
/*!**************************************************!*\
  !*** ./src/services/init/integration/channel.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../channel/channel */ "./src/services/channel/channel.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return channel_1.ChannelService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/init/integration/media.ts":
/*!************************************************!*\
  !*** ./src/services/init/integration/media.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = __webpack_require__(/*! ../../media/media */ "./src/services/media/media.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return media_1.MediaService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/init/integration/rtc.ts":
/*!**********************************************!*\
  !*** ./src/services/init/integration/rtc.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return rtc_1.RTCService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/init/integration/state.ts":
/*!************************************************!*\
  !*** ./src/services/init/integration/state.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
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
__webpack_require__(/*! ./integration/backend */ "./src/services/media/integration/backend.ts");
__webpack_require__(/*! ./integration/rtc */ "./src/services/media/integration/rtc.ts");
__webpack_require__(/*! ./integration/state */ "./src/services/media/integration/state.ts");
__webpack_require__(/*! ./integration/unity */ "./src/services/media/integration/unity.ts");


/***/ }),

/***/ "./src/services/media/integration/backend.ts":
/*!***************************************************!*\
  !*** ./src/services/media/integration/backend.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var backend_1 = __webpack_require__(/*! ../../backend/backend */ "./src/services/backend/backend.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return backend_1.BackendService._UseTVChannelSubject.next(1); });


/***/ }),

/***/ "./src/services/media/integration/rtc.ts":
/*!***********************************************!*\
  !*** ./src/services/media/integration/rtc.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.ImageDataMessageSubject_.subscribe(function (m) {
    return rtc_1.RTCService._BroadcastSubject.next(JSON.stringify(m));
});


/***/ }),

/***/ "./src/services/media/integration/state.ts":
/*!*************************************************!*\
  !*** ./src/services/media/integration/state.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.IsPresentingSubject_.subscribe(function (isPresenting) {
    return state_1.StateService._IsPresentingSubject.next(isPresenting);
});


/***/ }),

/***/ "./src/services/media/integration/unity.ts":
/*!*************************************************!*\
  !*** ./src/services/media/integration/unity.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var unity_1 = __webpack_require__(/*! ../../unity/unity */ "./src/services/unity/unity.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return unity_1.UnityService._QuitGameSubject.next(); });


/***/ }),

/***/ "./src/services/media/media.ts":
/*!*************************************!*\
  !*** ./src/services/media/media.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = exports.getUserMedia = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var interval_1 = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Input
var _InitSubject = new Subject_1.Subject();
var _ShareScreenSubject = new Subject_1.Subject();
// Output
var IsPresentingSubject_ = new BehaviorSubject_1.BehaviorSubject(false);
var RemoteMediaSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var LocalMediaSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var ImageSubject_ = new Subject_1.Subject();
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Auxilary
var SIZE = 1024;
var canvas = document.createElement("canvas");
var video = document.createElement("video");
// Methods
exports.getUserMedia = function () {
    return navigator.mediaDevices
        //@ts-ignore
        .getDisplayMedia({
        video: true,
        audio: true,
    })
        //@ts-ignore
        .then(function (stream) {
        LocalMediaSubject_.next(stream);
        DebugSubject_.next("Local Media");
    })
        //@ts-ignore
        .catch(function (e) {
        DebugSubject_.next("getUserMedia() error: " + e.name);
    });
};
var initializeCanvas = function () {
    canvas.width = SIZE;
    canvas.height = SIZE;
};
var streamToImageHandler = function (stream) {
    if (!canvas)
        return;
    video.pause();
    video.srcObject = stream;
    video.addEventListener("canplay", function () {
        video.play();
    });
};
var update = function () {
    var _a;
    if (!canvas)
        return;
    (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(video, 0, 0, SIZE, SIZE);
    var data = canvas.toDataURL("image/jpeg");
    var s = data.replace("data:image/jpeg;base64,", "");
    if (!s)
        return;
    ImageSubject_.next(s);
};
var onStreamToImageHandler = function (stream) {
    if (!stream)
        return;
    streamToImageHandler(stream);
};
var onImageToImageDataMessageHandler = function (image) {
    var message = {
        type: definitions_1.EMessageType.ImageData,
        image: image,
    };
    ImageDataMessageSubject_.next(message);
};
var onShareScreenHandler = function () {
    IsPresentingSubject_.next(true);
    DebugSubject_.next("Init Media");
    exports.getUserMedia();
};
var init = function () {
    initializeCanvas();
    IsInitializedSubject.next(true);
};
var isInitializedFilter = function () { return IsInitializedSubject.getValue(); };
var hasNoLocalMediaFilter = function () { return !LocalMediaSubject_.getValue(); };
// Subscriptions1
_InitSubject.subscribe(init);
ImageSubject_.pipe(filter_1.filter(isInitializedFilter)).subscribe(onImageToImageDataMessageHandler);
LocalMediaSubject_.pipe(filter_1.filter(isInitializedFilter)).subscribe(onStreamToImageHandler);
_ShareScreenSubject
    .pipe(filter_1.filter(isInitializedFilter), filter_1.filter(hasNoLocalMediaFilter))
    .subscribe(onShareScreenHandler);
DebugSubject_.subscribe(function (m) { return console.warn("Media Service: ", m); });
interval_1.interval(const_1.UPDATE_INTERVAL)
    .pipe(filter_1.filter(function () { return IsPresentingSubject_.getValue(); }))
    .subscribe(update);
// Export
var MediaService = /** @class */ (function () {
    function MediaService() {
    }
    // Input
    MediaService._InitSubject = _InitSubject;
    MediaService._ShareScreenSubject = _ShareScreenSubject;
    // Output
    MediaService.IsPresentingSubject_ = IsPresentingSubject_;
    MediaService.RemoteMediaSubject_ = RemoteMediaSubject_;
    MediaService.LocalMediaSubject_ = LocalMediaSubject_;
    MediaService.ImageSubject_ = ImageSubject_;
    MediaService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
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
__webpack_require__(/*! ./integration/outgoing */ "./src/services/unity/integration/outgoing.ts");


/***/ }),

/***/ "./src/services/unity/integration/outgoing.ts":
/*!****************************************************!*\
  !*** ./src/services/unity/integration/outgoing.ts ***!
  \****************************************************/
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
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
// Input
var _CurrentTVChannelStateSubject = new BehaviorSubject_1.BehaviorSubject(1);
var _CanSendMessages = new BehaviorSubject_1.BehaviorSubject(true);
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
_SendMessageToUnitySubject
    .pipe(filter_1.filter(function () { return _CanSendMessages.getValue(); }))
    .subscribe(sendMessageToUnityHandler);
_MakeFullScreenSubject.subscribe(makeFullScreen);
_QuitGameSubject.subscribe(quitGame);
var UnityService = /** @class */ (function () {
    function UnityService() {
    }
    UnityService._CurrentTVChannelStateSubject = _CurrentTVChannelStateSubject;
    UnityService._CanSendMessages = _CanSendMessages;
    UnityService._SendMessageToUnitySubject = _SendMessageToUnitySubject;
    UnityService._MakeFullScreenSubject = _MakeFullScreenSubject;
    UnityService._QuitGameSubject = _QuitGameSubject;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL0lubmVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL09ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2RlYm91bmNlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzTnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9JdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icm9hZGNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25uZWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydGMtbWVzc2FnaW5nLWFnZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvd2ViLXNvY2tldHMtYWdlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2JhY2tlbmQvYmFja2VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbnRlZ3JhdGlvbi9jaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYWNrZW5kL2ludGVncmF0aW9uL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jaGFubmVsL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW50ZWdyYXRpb24vdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW5jb21pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW50ZWdyYXRpb24vY2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29tbXVuaWNhdGlvbi9pbmNvbWluZy9pbnRlZ3JhdGlvbi91bml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29tbXVuaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29tbXVuaWNhdGlvbi9vdXRnb2luZy9pbnRlZ3JhdGlvbi9iYWNrZW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL291dGdvaW5nL2ludGVncmF0aW9uL2luaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvaW50ZWdyYXRpb24vbWVkaWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvaW50ZWdyYXRpb24vcnRjLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL291dGdvaW5nL2ludGVncmF0aW9uL3VuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL291dGdvaW5nL291dGdvaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL3J0Yy9pbnRlZ3JhdGlvbi9pbmNvbWluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29tbXVuaWNhdGlvbi9ydGMvcnRjLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL3dzL2ludGVncmF0aW9uL2luaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3Mvd3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5pdC9pbnRlZ3JhdGlvbi9iYWNrZW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbml0L2ludGVncmF0aW9uL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW50ZWdyYXRpb24vbWVkaWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW50ZWdyYXRpb24vcnRjLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbml0L2ludGVncmF0aW9uL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZWRpYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW50ZWdyYXRpb24vYmFja2VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW50ZWdyYXRpb24vcnRjLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZWRpYS9pbnRlZ3JhdGlvbi9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW50ZWdyYXRpb24vdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL21lZGlhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhdGUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VuaXR5L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91bml0eS9pbnRlZ3JhdGlvbi9vdXRnb2luZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdW5pdHkvdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kZWZpbml0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDZDQUE2QztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNDOzs7Ozs7Ozs7Ozs7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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcIi4vU3ViamVjdFwiKTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvclwiKTtcbnZhciBCZWhhdmlvclN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCZWhhdmlvclN1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmVoYXZpb3JTdWJqZWN0KF92YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfc3VwZXIucHJvdG90eXBlLl9zdWJzY3JpYmUuY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiAmJiAhc3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudGhyb3duRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBCZWhhdmlvclN1YmplY3Q7XG59KFN1YmplY3RfMS5TdWJqZWN0KSk7XG5leHBvcnRzLkJlaGF2aW9yU3ViamVjdCA9IEJlaGF2aW9yU3ViamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJlaGF2aW9yU3ViamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaWJlclwiKTtcbnZhciBJbm5lclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbm5lclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJTdWJzY3JpYmVyKHBhcmVudCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm91dGVyVmFsdWUgPSBvdXRlclZhbHVlO1xuICAgICAgICBfdGhpcy5vdXRlckluZGV4ID0gb3V0ZXJJbmRleDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5TmV4dCh0aGlzLm91dGVyVmFsdWUsIHZhbHVlLCB0aGlzLm91dGVySW5kZXgsIHRoaXMuaW5kZXgrKywgdGhpcyk7XG4gICAgfTtcbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlFcnJvcihlcnJvciwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlDb21wbGV0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIElubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuSW5uZXJTdWJzY3JpYmVyID0gSW5uZXJTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5uZXJTdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhblJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2NhblJlcG9ydEVycm9yXCIpO1xudmFyIHRvU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4vdXRpbC90b1N1YnNjcmliZXJcIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc3ltYm9sL29ic2VydmFibGVcIik7XG52YXIgcGlwZV8xID0gcmVxdWlyZShcIi4vdXRpbC9waXBlXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvcjtcbiAgICAgICAgdmFyIHNpbmsgPSB0b1N1YnNjcmliZXJfMS50b1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGlmIChvcGVyYXRvcikge1xuICAgICAgICAgICAgc2luay5hZGQob3BlcmF0b3IuY2FsbChzaW5rLCB0aGlzLnNvdXJjZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luay5hZGQodGhpcy5zb3VyY2UgfHwgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmICFzaW5rLnN5bmNFcnJvclRocm93YWJsZSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZShzaW5rKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHNpbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHNpbmsuc3luY0Vycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW5rO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzaW5rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yXzEuY2FuUmVwb3J0RXJyb3Ioc2luaykpIHtcbiAgICAgICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChuZXh0LCBwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSAmJiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB2YWx1ZSA9IHg7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZ18xLmNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xuZXhwb3J0cy5lbXB0eSA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIE91dGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE91dGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPdXRlclN1YnNjcmliZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5PdXRlclN1YnNjcmliZXIgPSBPdXRlclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PdXRlclN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlNjaGVkdWxlckFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLm5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERhdGUubm93KCk7IH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG5leHBvcnRzLlNjaGVkdWxlciA9IFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YmplY3RTdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YmplY3RTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTdWJqZWN0U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU3ViamVjdFN1YnNjcmliZXIgPSBTdWJqZWN0U3Vic2NyaWJlcjtcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgX3RoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3ViamVjdC5wcm90b3R5cGVbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaWJlcih0aGlzKTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgIHZhciBjb3B5ID0gb2JzZXJ2ZXJzLnNsaWNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlbaV0uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgIHZhciBjb3B5ID0gb2JzZXJ2ZXJzLnNsaWNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlbaV0uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbl8xLlN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFN1YmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3Q7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLlN1YmplY3QgPSBTdWJqZWN0O1xudmFyIEFub255bW91c1N1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbm9ueW1vdXNTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24ubmV4dCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFub255bW91c1N1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydHMuQW5vbnltb3VzU3ViamVjdCA9IEFub255bW91c1N1YmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmlwdGlvblwiKTtcbnZhciBTdWJqZWN0U3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdFN1YnNjcmlwdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaXB0aW9uKHN1YmplY3QsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0U3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB2YXIgc3ViamVjdCA9IHRoaXMuc3ViamVjdDtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHN1YmplY3Qub2JzZXJ2ZXJzO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBudWxsO1xuICAgICAgICBpZiAoIW9ic2VydmVycyB8fCBvYnNlcnZlcnMubGVuZ3RoID09PSAwIHx8IHN1YmplY3QuaXNTdG9wcGVkIHx8IHN1YmplY3QuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmliZXJJbmRleCA9IG9ic2VydmVycy5pbmRleE9mKHRoaXMuc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKHN1YnNjcmliZXJJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0U3Vic2NyaXB0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3ViamVjdFN1YnNjcmlwdGlvbiA9IFN1YmplY3RTdWJzY3JpcHRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0U3Vic2NyaXB0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuL09ic2VydmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL2ludGVybmFsL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2hvc3RSZXBvcnRFcnJvclwiKTtcbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSB0aGlzLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0Lm5leHQ7XG4gICAgICAgICAgICBlcnJvciA9IG9ic2VydmVyT3JOZXh0LmVycm9yO1xuICAgICAgICAgICAgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlck9yTmV4dCAhPT0gT2JzZXJ2ZXJfMS5lbXB0eSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oY29udGV4dC51bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGNvbnRleHQudW5zdWJzY3JpYmUuYmluZChjb250ZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSBfdGhpcy51bnN1YnNjcmliZS5iaW5kKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIF90aGlzLl9uZXh0ID0gbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIF90aGlzLl9jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQgJiYgdGhpcy5fbmV4dCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX25leHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9uZXh0LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIHZhciB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nID0gY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2NvbXBsZXRlLmNhbGwoX3RoaXMuX2NvbnRleHQpOyB9O1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgd3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JVbnN1YiA9IGZ1bmN0aW9uIChmbiwgdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclNldEVycm9yID0gZnVuY3Rpb24gKHBhcmVudCwgZm4sIHZhbHVlKSB7XG4gICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGNhbGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICBfcGFyZW50U3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnRzLlNhZmVTdWJzY3JpYmVyID0gU2FmZVN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNBcnJheVwiKTtcbnZhciBpc09iamVjdF8xID0gcmVxdWlyZShcIi4vdXRpbC9pc09iamVjdFwiKTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yXCIpO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudE9yUGFyZW50cyA9IF9hLl9wYXJlbnRPclBhcmVudHMsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfcGFyZW50T3JQYXJlbnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRPclBhcmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yID8gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSA6IFtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0XzEuaXNPYmplY3Qoc3ViKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0ZWFyZG93bjtcbiAgICAgICAgaWYgKCF0ZWFyZG93bikge1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSB0aGlzIHx8IHN1YnNjcmlwdGlvbi5jbG9zZWQgfHwgdHlwZW9mIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIShzdWJzY3JpcHRpb24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9zdWJzY3JpcHRpb25zID0gW3RtcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBfcGFyZW50T3JQYXJlbnRzID0gc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHMgPSBbX3BhcmVudE9yUGFyZW50cywgdGhpc107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cy5pbmRleE9mKHRoaXMpID09PSAtMSkge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW3N1YnNjcmlwdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMuc3BsaWNlKHN1YnNjcmlwdGlvbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uIChlbXB0eSkge1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfShuZXcgU3Vic2NyaXB0aW9uKCkpKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydHMuU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uO1xuZnVuY3Rpb24gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGVycm9ycykge1xuICAgIHJldHVybiBlcnJvcnMucmVkdWNlKGZ1bmN0aW9uIChlcnJzLCBlcnIpIHsgcmV0dXJuIGVycnMuY29uY2F0KChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikgPyBlcnIuZXJyb3JzIDogZXJyKTsgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IGZhbHNlO1xuZXhwb3J0cy5jb25maWcgPSB7XG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHNldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RFUFJFQ0FURUQhIFJ4SlMgd2FzIHNldCB0byB1c2UgZGVwcmVjYXRlZCBzeW5jaHJvbm91cyBlcnJvciBoYW5kbGluZyBiZWhhdmlvciBieSBjb2RlIGF0OiBcXG4nICsgZXJyb3Iuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1J4SlM6IEJhY2sgdG8gYSBiZXR0ZXIgZXJyb3IgYmVoYXZpb3IuIFRoYW5rIHlvdS4gPDMnKTtcbiAgICAgICAgfVxuICAgICAgICBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKCkge1xuICAgICAgICByZXR1cm4gX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNTY2hlZHVsZXJcIik7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheVwiKTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9PdXRlclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0XCIpO1xudmFyIGZyb21BcnJheV8xID0gcmVxdWlyZShcIi4vZnJvbUFycmF5XCIpO1xudmFyIE5PTkUgPSB7fTtcbmZ1bmN0aW9uIGNvbWJpbmVMYXRlc3QoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gbnVsbDtcbiAgICB2YXIgc2NoZWR1bGVyID0gbnVsbDtcbiAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5XzEuaXNBcnJheShvYnNlcnZhYmxlc1swXSkpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheV8xLmZyb21BcnJheShvYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbmV4cG9ydHMuY29tYmluZUxhdGVzdCA9IGNvbWJpbmVMYXRlc3Q7XG52YXIgQ29tYmluZUxhdGVzdE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICBDb21iaW5lTGF0ZXN0T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydHMuQ29tYmluZUxhdGVzdE9wZXJhdG9yID0gQ29tYmluZUxhdGVzdE9wZXJhdG9yO1xudmFyIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tYmluZUxhdGVzdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgX3RoaXMub2JzZXJ2YWJsZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKE5PTkUpO1xuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2YWJsZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGxlbjtcbiAgICAgICAgICAgIHRoaXMudG9SZXNwb25kID0gbGVuO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBvYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICh1bnVzZWQpIHtcbiAgICAgICAgaWYgKCh0aGlzLmFjdGl2ZSAtPSAxKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRWYWwgPSB2YWx1ZXNbb3V0ZXJJbmRleF07XG4gICAgICAgIHZhciB0b1Jlc3BvbmQgPSAhdGhpcy50b1Jlc3BvbmRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBvbGRWYWwgPT09IE5PTkUgPyAtLXRoaXMudG9SZXNwb25kIDogdGhpcy50b1Jlc3BvbmQ7XG4gICAgICAgIHZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgICAgIGlmICh0b1Jlc3BvbmQgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5UmVzdWx0U2VsZWN0b3IodmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5UmVzdWx0U2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdFNlbGVjdG9yLmFwcGx5KHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydHMuQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgPSBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbWJpbmVMYXRlc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgc3Vic2NyaWJlVG9fMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvXCIpO1xudmFyIHNjaGVkdWxlZF8xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlZC9zY2hlZHVsZWRcIik7XG5mdW5jdGlvbiBmcm9tKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlZF8xLnNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG59XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb0FycmF5XCIpO1xudmFyIHNjaGVkdWxlQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheVwiKTtcbmZ1bmN0aW9uIGZyb21BcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShzdWJzY3JpYmVUb0FycmF5XzEuc3Vic2NyaWJlVG9BcnJheShpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXlfMS5zY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZnJvbUFycmF5ID0gZnJvbUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVyL2FzeW5jXCIpO1xudmFyIGlzTnVtZXJpY18xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNOdW1lcmljXCIpO1xuZnVuY3Rpb24gaW50ZXJ2YWwocGVyaW9kLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAocGVyaW9kID09PSB2b2lkIDApIHsgcGVyaW9kID0gMDsgfVxuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgaWYgKCFpc051bWVyaWNfMS5pc051bWVyaWMocGVyaW9kKSB8fCBwZXJpb2QgPCAwKSB7XG4gICAgICAgIHBlcmlvZCA9IDA7XG4gICAgfVxuICAgIGlmICghc2NoZWR1bGVyIHx8IHR5cGVvZiBzY2hlZHVsZXIuc2NoZWR1bGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIHBlcmlvZCwgeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb3VudGVyOiAwLCBwZXJpb2Q6IHBlcmlvZCB9KSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnZhbCA9IGludGVydmFsO1xuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIGNvdW50ZXIgPSBzdGF0ZS5jb3VudGVyLCBwZXJpb2QgPSBzdGF0ZS5wZXJpb2Q7XG4gICAgc3Vic2NyaWJlci5uZXh0KGNvdW50ZXIpO1xuICAgIHRoaXMuc2NoZWR1bGUoeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb3VudGVyOiBjb3VudGVyICsgMSwgcGVyaW9kOiBwZXJpb2QgfSwgcGVyaW9kKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciBhc3luY18xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlci9hc3luY1wiKTtcbmZ1bmN0aW9uIGRlYm91bmNlVGltZShkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYzsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgRGVib3VuY2VUaW1lT3BlcmF0b3IoZHVlVGltZSwgc2NoZWR1bGVyKSk7IH07XG59XG5leHBvcnRzLmRlYm91bmNlVGltZSA9IGRlYm91bmNlVGltZTtcbnZhciBEZWJvdW5jZVRpbWVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VUaW1lT3BlcmF0b3IoZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERlYm91bmNlVGltZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdWVUaW1lLCB0aGlzLnNjaGVkdWxlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIERlYm91bmNlVGltZU9wZXJhdG9yO1xufSgpKTtcbnZhciBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVib3VuY2VUaW1lU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIF90aGlzLmxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGVib3VuY2VUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhckRlYm91bmNlKCk7XG4gICAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgdGhpcy5kdWVUaW1lLCB0aGlzKSk7XG4gICAgfTtcbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkTmV4dCgpO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5kZWJvdW5jZWROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSB0aGlzLmxhc3RWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChsYXN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5jbGVhckRlYm91bmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChkZWJvdW5jZWRTdWJzY3JpcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGRlYm91bmNlZFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZWJvdW5jZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERlYm91bmNlVGltZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXIuZGVib3VuY2VkTmV4dCgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVib3VuY2VUaW1lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmlsdGVyT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBGaWx0ZXJPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgRmlsdGVyT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBGaWx0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWx0ZXJPcGVyYXRvcjtcbn0oKSk7XG52YXIgRmlsdGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwT3BlcmF0aW9uKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGlzIG5vdCBhIGZ1bmN0aW9uLiBBcmUgeW91IGxvb2tpbmcgZm9yIGBtYXBUbygpYD8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5tYXAgPSBtYXA7XG52YXIgTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5NYXBPcGVyYXRvciA9IE1hcE9wZXJhdG9yO1xudmFyIE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnIHx8IF90aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9PdXRlclN1YnNjcmliZXJcIik7XG52YXIgSW5uZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vSW5uZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdFwiKTtcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCIuL21hcFwiKTtcbnZhciBmcm9tXzEgPSByZXF1aXJlKFwiLi4vb2JzZXJ2YWJsZS9mcm9tXCIpO1xuZnVuY3Rpb24gc3dpdGNoTWFwKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLnBpcGUoc3dpdGNoTWFwKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBmcm9tXzEuZnJvbShwcm9qZWN0KGEsIGkpKS5waXBlKG1hcF8xLm1hcChmdW5jdGlvbiAoYiwgaWkpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKTsgfSkpOyB9KSk7IH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgU3dpdGNoTWFwT3BlcmF0b3IocHJvamVjdCkpOyB9O1xufVxuZXhwb3J0cy5zd2l0Y2hNYXAgPSBzd2l0Y2hNYXA7XG52YXIgU3dpdGNoTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcE9wZXJhdG9yKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgU3dpdGNoTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBTd2l0Y2hNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFN3aXRjaE1hcE9wZXJhdG9yO1xufSgpKTtcbnZhciBTd2l0Y2hNYXBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3dpdGNoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTd2l0Y2hNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdCh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5uZXJTdWIocmVzdWx0LCB2YWx1ZSwgaW5kZXgpO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2lubmVyU3ViID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmlwdGlvbiA9IHRoaXMuaW5uZXJTdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChpbm5lclN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaW5uZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpYmVyID0gbmV3IElubmVyU3Vic2NyaWJlcl8xLklubmVyU3Vic2NyaWJlcih0aGlzLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQoaW5uZXJTdWJzY3JpYmVyKTtcbiAgICAgICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgcmVzdWx0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaW5uZXJTdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gIT09IGlubmVyU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMuaW5uZXJTdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmlwdGlvbiA9IHRoaXMuaW5uZXJTdWJzY3JpcHRpb247XG4gICAgICAgIGlmICghaW5uZXJTdWJzY3JpcHRpb24gfHwgaW5uZXJTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBkZXN0aW5hdGlvbi5yZW1vdmUoaW5uZXJTdWIpO1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBTd2l0Y2hNYXBTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXRjaE1hcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG5mdW5jdGlvbiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3ViLmFkZCh0aGlzLnNjaGVkdWxlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlQXJyYXkgPSBzY2hlZHVsZUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVBcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG5mdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgaXRlcmF0b3I7XG4gICAgICAgIHN1Yi5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yICYmIHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gaW5wdXRbaXRlcmF0b3JfMS5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGRvbmU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSByZXN1bHQuZG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZUl0ZXJhYmxlID0gc2NoZWR1bGVJdGVyYWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlSXRlcmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGlucHV0W29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTsgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZU9ic2VydmFibGUgPSBzY2hlZHVsZU9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZU9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlucHV0LnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7XG4gICAgICAgIH0pOyB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlUHJvbWlzZSA9IHNjaGVkdWxlUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzY2hlZHVsZU9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlT2JzZXJ2YWJsZVwiKTtcbnZhciBzY2hlZHVsZVByb21pc2VfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlUHJvbWlzZVwiKTtcbnZhciBzY2hlZHVsZUFycmF5XzEgPSByZXF1aXJlKFwiLi9zY2hlZHVsZUFycmF5XCIpO1xudmFyIHNjaGVkdWxlSXRlcmFibGVfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlSXRlcmFibGVcIik7XG52YXIgaXNJbnRlcm9wT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZVwiKTtcbnZhciBpc1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzUHJvbWlzZVwiKTtcbnZhciBpc0FycmF5TGlrZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheUxpa2VcIik7XG52YXIgaXNJdGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNJdGVyYWJsZVwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGVfMS5pc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlT2JzZXJ2YWJsZV8xLnNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1Byb21pc2VfMS5pc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVQcm9taXNlXzEuc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlXzEuaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheV8xLnNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZV8xLmlzSXRlcmFibGUoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlXzEuc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKChpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgfHwgaW5wdXQpICsgJyBpcyBub3Qgb2JzZXJ2YWJsZScpO1xufVxuZXhwb3J0cy5zY2hlZHVsZWQgPSBzY2hlZHVsZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB9XG4gICAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWN0aW9uXzEgPSByZXF1aXJlKFwiLi9BY3Rpb25cIik7XG52YXIgQXN5bmNBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc3luY0FjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY0FjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCB0aGlzKSwgZGVsYXkpO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkgJiYgdGhpcy5wZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yVmFsdWUgPSAhIWUgJiYgZSB8fCBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdGhpcy53b3JrID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IG51bGw7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNBY3Rpb247XG59KEFjdGlvbl8xLkFjdGlvbikpO1xuZXhwb3J0cy5Bc3luY0FjdGlvbiA9IEFzeW5jQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL1NjaGVkdWxlclwiKTtcbnZhciBBc3luY1NjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jU2NoZWR1bGVyKFNjaGVkdWxlckFjdGlvbiwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXJfMS5TY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFNjaGVkdWxlckFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSBfdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh3b3JrLCBkZWxheSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAmJiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLnNjaGVkdWxlKHdvcmssIGRlbGF5LCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zY2hlZHVsZS5jYWxsKHRoaXMsIHdvcmssIGRlbGF5LCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXI7XG59KFNjaGVkdWxlcl8xLlNjaGVkdWxlcikpO1xuZXhwb3J0cy5Bc3luY1NjaGVkdWxlciA9IEFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FzeW5jQWN0aW9uXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9Bc3luY1NjaGVkdWxlclwiKTtcbmV4cG9ydHMuYXN5bmNTY2hlZHVsZXIgPSBuZXcgQXN5bmNTY2hlZHVsZXJfMS5Bc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbl8xLkFzeW5jQWN0aW9uKTtcbmV4cG9ydHMuYXN5bmMgPSBleHBvcnRzLmFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiAnQEBpdGVyYXRvcic7XG4gICAgfVxuICAgIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5leHBvcnRzLmdldFN5bWJvbEl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3I7XG5leHBvcnRzLml0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbmV4cG9ydHMuJCRpdGVyYXRvciA9IGV4cG9ydHMuaXRlcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdGVyYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucnhTdWJzY3JpYmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IFN5bWJvbCgncnhTdWJzY3JpYmVyJylcbiAgICAgICAgOiAnQEByeFN1YnNjcmliZXJfJyArIE1hdGgucmFuZG9tKCk7XG59KSgpO1xuZXhwb3J0cy4kJHJ4U3Vic2NyaWJlciA9IGV4cG9ydHMucnhTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnhTdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnb2JqZWN0IHVuc3Vic2NyaWJlZCc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGw7XG59KSgpO1xuZXhwb3J0cy5PYmplY3RVbnN1YnNjcmliZWRFcnJvciA9IE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbChlcnJvcnMpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzID9cbiAgICAgICAgICAgIGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpIDogJyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGNhblJlcG9ydEVycm9yKG9ic2VydmVyKSB7XG4gICAgd2hpbGUgKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfYSA9IG9ic2VydmVyLCBjbG9zZWRfMSA9IF9hLmNsb3NlZCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbiwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkO1xuICAgICAgICBpZiAoY2xvc2VkXzEgfHwgaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24gaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuY2FuUmVwb3J0RXJyb3IgPSBjYW5SZXBvcnRFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhblJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaG9zdFJlcG9ydEVycm9yKGVycikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aHJvdyBlcnI7IH0sIDApO1xufVxuZXhwb3J0cy5ob3N0UmVwb3J0RXJyb3IgPSBob3N0UmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob3N0UmVwb3J0RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNBcnJheSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiBBcnJheS5pc0FycmF5IHx8IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInOyB9KTsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQXJyYXlMaWtlID0gKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbic7IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheUxpa2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL29ic2VydmFibGVcIik7XG5mdW5jdGlvbiBpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dFtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzSW50ZXJvcE9ic2VydmFibGUgPSBpc0ludGVyb3BPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJbnRlcm9wT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbmZ1bmN0aW9uIGlzSXRlcmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W2l0ZXJhdG9yXzEuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0l0ZXJhYmxlID0gaXNJdGVyYWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSXRlcmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4vaXNBcnJheVwiKTtcbmZ1bmN0aW9uIGlzTnVtZXJpYyh2YWwpIHtcbiAgICByZXR1cm4gIWlzQXJyYXlfMS5pc0FycmF5KHZhbCkgJiYgKHZhbCAtIHBhcnNlRmxvYXQodmFsKSArIDEpID49IDA7XG59XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzTnVtZXJpYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zY2hlZHVsZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNTY2hlZHVsZXIgPSBpc1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9pZGVudGl0eVwiKTtcbmZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0cy5waXBlID0gcGlwZTtcbmZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5XzEuaWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZm4pIHsgcmV0dXJuIGZuKHByZXYpOyB9LCBpbnB1dCk7XG4gICAgfTtcbn1cbmV4cG9ydHMucGlwZUZyb21BcnJheSA9IHBpcGVGcm9tQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHN1YnNjcmliZVRvQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvQXJyYXlcIik7XG52YXIgc3Vic2NyaWJlVG9Qcm9taXNlXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb1Byb21pc2VcIik7XG52YXIgc3Vic2NyaWJlVG9JdGVyYWJsZV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9JdGVyYWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb09ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvT2JzZXJ2YWJsZVwiKTtcbnZhciBpc0FycmF5TGlrZV8xID0gcmVxdWlyZShcIi4vaXNBcnJheUxpa2VcIik7XG52YXIgaXNQcm9taXNlXzEgPSByZXF1aXJlKFwiLi9pc1Byb21pc2VcIik7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoXCIuL2lzT2JqZWN0XCIpO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG8gPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKCEhcmVzdWx0ICYmIHR5cGVvZiByZXN1bHRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb09ic2VydmFibGVfMS5zdWJzY3JpYmVUb09ic2VydmFibGUocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheUxpa2VfMS5pc0FycmF5TGlrZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0FycmF5XzEuc3Vic2NyaWJlVG9BcnJheShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1Byb21pc2VfMS5pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9Qcm9taXNlXzEuc3Vic2NyaWJlVG9Qcm9taXNlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCEhcmVzdWx0ICYmIHR5cGVvZiByZXN1bHRbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvSXRlcmFibGVfMS5zdWJzY3JpYmVUb0l0ZXJhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc09iamVjdF8xLmlzT2JqZWN0KHJlc3VsdCkgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogXCInXCIgKyByZXN1bHQgKyBcIidcIjtcbiAgICAgICAgdmFyIG1zZyA9IFwiWW91IHByb3ZpZGVkIFwiICsgdmFsdWUgKyBcIiB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuXCJcbiAgICAgICAgICAgICsgJyBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgQXJyYXksIG9yIEl0ZXJhYmxlLic7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN1YnNjcmliZVRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbiAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9BcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9JdGVyYWJsZSA9IGZ1bmN0aW9uIChpdGVyYWJsZSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZVtpdGVyYXRvcl8xLml0ZXJhdG9yXSgpO1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmRvbmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChpdGVtLnZhbHVlKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKHRydWUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3IucmV0dXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xufTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvSXRlcmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb09ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHZhciBvYnMgPSBvYmpbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdKCk7XG4gICAgaWYgKHR5cGVvZiBvYnMuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vaG9zdFJlcG9ydEVycm9yXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgIC50aGVuKG51bGwsIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcik7XG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9Qcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIElubmVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL0lubmVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9cIik7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG5mdW5jdGlvbiBzdWJzY3JpYmVUb1Jlc3VsdChvdXRlclN1YnNjcmliZXIsIHJlc3VsdCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlciA9PT0gdm9pZCAwKSB7IGlubmVyU3Vic2NyaWJlciA9IG5ldyBJbm5lclN1YnNjcmliZXJfMS5Jbm5lclN1YnNjcmliZXIob3V0ZXJTdWJzY3JpYmVyLCBvdXRlclZhbHVlLCBvdXRlckluZGV4KTsgfVxuICAgIGlmIChpbm5lclN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShpbm5lclN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhyZXN1bHQpKGlubmVyU3Vic2NyaWJlcik7XG59XG5leHBvcnRzLnN1YnNjcmliZVRvUmVzdWx0ID0gc3Vic2NyaWJlVG9SZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Jlc3VsdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2ZXJcIik7XG5mdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKE9ic2VydmVyXzEuZW1wdHkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuZXhwb3J0cy50b1N1YnNjcmliZXIgPSB0b1N1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5VUERBVEVfSU5URVJWQUwgPSBleHBvcnRzLlBPUlQgPSBleHBvcnRzLklQID0gdm9pZCAwO1xyXG5leHBvcnRzLklQID0gXCIxOTIuMTY4LjAuNzVcIjsgLy8gXCJsb2NhbGhvc3RcIjsgLy8gXCIxOTIuMTY4LjAuNzVcIjtcclxuZXhwb3J0cy5QT1JUID0gXCI4MDgwXCI7XHJcbmV4cG9ydHMuVVBEQVRFX0lOVEVSVkFMID0gNjA7IC8vIG1pbGxpc2Vjb25kc1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9iYWNrZW5kXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9jaGFubmVsXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9pbml0XCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9tZWRpYVwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvc3RhdGVcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL3VuaXR5XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Ccm9hZGNhc3RpbmdBZ2VudCA9IGV4cG9ydHMuRGVidWdTdWJqZWN0XyA9IGV4cG9ydHMuQ29tbXVuaWNhdGlvblN1YmplY3QgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuZXhwb3J0cy5Db21tdW5pY2F0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG5leHBvcnRzLkRlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEJyb2FkY2FzdGluZ0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0aW5nQWdlbnQoaWQsIGNvbW11bmljYXRpb25DaGFubmVsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHV0aWxzXzEuZ2VuZXJhdGVJZCg0LCA0KTsgfVxyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICAvLyBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLnBhcnRpY2lwYW50cyA9IFtdO1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE1lc3NhZ2luZyBVdGlsc1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb21tU3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaWQgPSBfYS5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWQgIT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRDb21tU3ViamVjdCgpLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvID0gX2EudG87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8gPT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZXhwb3J0cy5EZWJ1Z1N1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRJbmRpdmlkdWFsUmVxdWVzdCA9IGZ1bmN0aW9uIChkYXRhLCB0bykge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5kaXZpZHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIHRvOiB0byxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLmFkZFBhcnRpY2lwYW50ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnBhcnRpY2lwYW50cy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgX3RoaXMuYWRkUGFydGljaXBhbnRTdWJqZWN0Lm5leHQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNpcGFudCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX3RoaXMuZ2V0UGFydGljaXBhbnRzKCk7XHJcbiAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cy5maWx0ZXIoZnVuY3Rpb24gKF9pZCkgeyByZXR1cm4gX2lkICE9PSBpZDsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFydGljaXBhbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX19zcHJlYWRBcnJheXMoX3RoaXMucGFydGljaXBhbnRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRpY2lwYW50cztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFNhbHV0YXRpb25zXHJcbiAgICAgICAgdGhpcy5ncmVldGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX3RoaXMuZ2V0UGFydGljaXBhbnRzKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBcImdyZWV0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNpcGFudHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBleHBvcnRzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIF90aGlzLmlkICsgXCIsIEFkZCBQYXJ0aWNpcGFudFwiKTtcclxuICAgICAgICAgICAgX3RoaXMuYWRkUGFydGljaXBhbnQoaWQpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KF90aGlzLnNlbmRHcmVldGluZywgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZhcmV3ZWxsSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0aWNpcGFudHMgPSBfdGhpcy5nZXRQYXJ0aWNpcGFudHMoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFwiZmFyZXdlbGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2lwYW50cy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVBhcnRpY2lwYW50KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZEdyZWV0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JlZXRpbmdcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZEZhcmV3ZWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tU3ViamVjdC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBfdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFyZXdlbGxcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29tbVN1YmplY3QgPSBjb21tdW5pY2F0aW9uQ2hhbm5lbDtcclxuICAgICAgICB0aGlzLmdldENvbW1TdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMubWVzc2FnZUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QoKS5zdWJzY3JpYmUodGhpcy5ncmVldGluZ0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJyb2FkY2FzdGluZ0FnZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkJyb2FkY2FzdGluZ0FnZW50ID0gQnJvYWRjYXN0aW5nQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2xpZW50ID0gdm9pZCAwO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBicm9hZGNhc3RfMSA9IHJlcXVpcmUoXCIuL2Jyb2FkY2FzdFwiKTtcclxudmFyIGNvbm5lY3Rpb25fbWFuYWdlcl8xID0gcmVxdWlyZShcIi4vY29ubmVjdGlvbi1tYW5hZ2VyXCIpO1xyXG52YXIgcnRjX21lc3NhZ2luZ19hZ2VudF8xID0gcmVxdWlyZShcIi4vcnRjLW1lc3NhZ2luZy1hZ2VudFwiKTtcclxudmFyIENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsaWVudCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaWQgPSB1dGlsc18xLmdlbmVyYXRlSWQoNCwgNCk7XHJcbiAgICAgICAgLy8gQ2hhbm5lbHNcclxuICAgICAgICB0aGlzLmRhdGFDaGFubmVscyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IHt9O1xyXG4gICAgICAgIC8vIEFnZW50c1xyXG4gICAgICAgIHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQgPSBuZXcgYnJvYWRjYXN0XzEuQnJvYWRjYXN0aW5nQWdlbnQodGhpcy5pZCwgYnJvYWRjYXN0XzEuQ29tbXVuaWNhdGlvblN1YmplY3QpO1xyXG4gICAgICAgIHRoaXMuUlRDTWVzc2FnaW5nQWdlbnQgPSBuZXcgcnRjX21lc3NhZ2luZ19hZ2VudF8xLlJUQ01lc3NhZ2luZ0FnZW50KHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQpO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbk1hbmFnZXIgPSBuZXcgY29ubmVjdGlvbl9tYW5hZ2VyXzEuQ29ubmVjdGlvbk1hbmFnZXIodGhpcy5SVENNZXNzYWdpbmdBZ2VudCk7XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgIHRoaXMuX0xvY2FsU3RyZWFtU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE91dHB1dFxyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PblN0cmVhbVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMub25Db25uZWN0aW9uQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBjb25uZWN0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5vbmRhdGFjaGFubmVsID0gX3RoaXMub25EYXRhQ2hhbm5lbEhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9udHJhY2sgPSBfdGhpcy5vblRyYWNrSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhQ2hhbm5lbCA9IGNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwoXCJkYXRhLWNoYW5uZWwtXCIgKyBpZCk7XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uIChldikgeyByZXR1cm4gYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFwiT3BlbmVkIENoYW5uZWxcIik7IH07XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChKU09OLnN0cmluZ2lmeShldikpOyB9O1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IF90aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChfdGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQ29ubmVjdGVkID0gZnVuY3Rpb24gKGlkLCBjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25jb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChcIkNvbm5lY3Rpb24gXCIgKyBpZCArIFwiLCBOb3cgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc09mZmVyID0gKChfYSA9IGNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIm9mZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2ZmZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFN0cmVhbVxyXG4gICAgICAgIHRoaXMub25Mb2NhbFN0cmVhbUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IF90aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3Rpb25zO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkU3RyZWFtVG9Db25uZWN0aW9uKGNvbm5lY3Rpb25zW2lkXSwgc3RyZWFtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW1Ub0Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY29ubmVjdGlvbiwgc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHJldHVybiBjb25uZWN0aW9uLmFkZFRyYWNrKHQsIHN0cmVhbSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQsIHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnN0cmVhbXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0gPSBbXTtcclxuICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0ucHVzaChzdHJlYW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblRyYWNrSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIFRyYWNrIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBldi5zdHJlYW1zWzBdO1xyXG4gICAgICAgICAgICBfdGhpcy5hZGRTdHJlYW0oaWQsIHN0cmVhbSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU3RyZWFtU3ViamVjdF8ubmV4dChbaWQsIHN0cmVhbV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgLy8gRGF0YSBDaGFubmVsXHJcbiAgICAgICAgdGhpcy5zZW5kRGF0YVRvQ2hhbm5lbCA9IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbCA9IF90aGlzLmRhdGFDaGFubmVsc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY2hhbm5lbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2hhbm5lbC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3REYXRhID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gX3RoaXMuZGF0YUNoYW5uZWxzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBjaGFubmVscykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBjaGFubmVsc1tpZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPcGVuID0gY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIjtcclxuICAgICAgICAgICAgICAgIGlmICghY2hhbm5lbCB8fCAhaXNPcGVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRGF0YUNoYW5uZWxIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgT24gRGF0YSBDaGFubmVsIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBkYXRhQ2hhbm5lbCA9IGV2LmNoYW5uZWw7XHJcbiAgICAgICAgICAgIGlmICghZGF0YUNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IF90aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRhdGFDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcclxuICAgICAgICAgICAgX3RoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3RfLm5leHQoW2lkLCBkYXRhQ2hhbm5lbF0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGV2LmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghbWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KFtpZCwgbWVzc2FnZV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbk1hbmFnZXIuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25Db25uZWN0aW9uQ3JlYXRlZEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuX0xvY2FsU3RyZWFtU3ViamVjdC5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLkJyb2FkY2FzdGluZ0FnZW50LnNlbmRHcmVldGluZygpO1xyXG4gICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChbXCJDbGllbnRcIiwgdGhpcy5pZF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENsaWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DbGllbnQgPSBDbGllbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29ubmVjdGlvbk1hbmFnZXIgPSB2b2lkIDA7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgYnJvYWRjYXN0XzEgPSByZXF1aXJlKFwiLi9icm9hZGNhc3RcIik7XHJcbnZhciBjb25maWd1cmF0aW9uID0ge1xyXG4gICAgaWNlU2VydmVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsczogW1xyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjEubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjIubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjMubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjQubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjAxLnNpcHBob25lLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uZWtpZ2EubmV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5md2RuZXQubmV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5pZGVhc2lwLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uaXB0ZWwub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5yaXh0ZWxlY29tLnNlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5zY2hsdW5kLmRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bnNlcnZlci5vcmdcIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnNvZnRqb3lzLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm9pcGFyb3VuZC5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnZvaXBidXN0ZXIuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b2lwc3R1bnQuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b3hncmF0aWEub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi54dGVuLmNvbVwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG52YXIgQ29ubmVjdGlvbk1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uTWFuYWdlcihtYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tYSA9IG1hO1xyXG4gICAgICAgIC8vIENvbm5lY3Rpb25zXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIF9pZCA9IF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkO1xyXG4gICAgICAgICAgICBicm9hZGNhc3RfMS5EZWJ1Z1N1YmplY3RfLm5leHQoXCJJRDogXCIgKyBpZCArIFwiLCBDcmVhdGUgQ29ubmVjdGlvbiBpbiBcIiArIF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkKTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3Rpb25zW2lkXSA9IGNvbm5lY3Rpb247XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSBfdGhpcy5vbklDRUNhbmRpZGF0ZUhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBfdGhpcy5PbkNvbm5lY3Rpb25DcmVhdGVkU3ViamVjdC5uZXh0KFtpZCwgY29ubmVjdGlvbl0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFkZC9SZW1vdmUgUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBicm9hZGNhc3RfMS5EZWJ1Z1N1YmplY3RfLm5leHQoX3RoaXMubWEuYnJvYWRjYXN0aW5nQWdlbnQuaWQgKyBcIiBPbiBBZGQgUGFydGljaXBhbnQgSGFuZGxlclwiKTtcclxuICAgICAgICAgICAgdmFyIG9sZENvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmIChvbGRDb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNyZWF0ZUNvbm5lY3Rpb24oaWQpO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlT2ZmZXIoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oX3RoaXMubWEub25PZmZlckNyZWF0ZWRIYW5kbGVyKGlkKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNvdWxkbid0IGNyZWF0ZSBvZmZlciBmb3IgaWQgXCIgKyBpZCwgZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFNlc3Npb24gRGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLm9uU2V0TG9jYWxEZXNjcmlwdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBzZXNzaW9uRGVzY3JpcHRpb24gPSBtZXNzYWdlWzFdO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25TZXRSZW1vdGVEZXNjcmlwdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBzZXNzaW9uRGVzY3JpcHRpb24gPSBtZXNzYWdlWzFdO1xyXG4gICAgICAgICAgICBicm9hZGNhc3RfMS5EZWJ1Z1N1YmplY3RfLm5leHQoXCJTZXR0aW5nIHJlbW90ZSBkZXNjcmlwdGlvbiBpbiBcIiArIF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkICsgXCIgZm9yIFwiICsgaWQpO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbnN3ZXJcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBfdGhpcy5vbkNyZWF0ZUFuc3dlckhhbmRsZXIoaWQsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPZmZlclxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uIExvZ2lzdGljc1xyXG4gICAgICAgIHRoaXMub25JQ0VDYW5kaWRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgT24gSUNFIENhbmRpZGF0ZSBIYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gZXYuY2FuZGlkYXRlO1xyXG4gICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMubWEub25DYW5kaWRhdGVDcmVhdGVkSGFuZGxlcihpZCkoY2FuZGlkYXRlKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGlkLCBzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jcmVhdGVDb25uZWN0aW9uKGlkKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlQW5zd2VyKClcclxuICAgICAgICAgICAgICAgIC50aGVuKF90aGlzLm1hLm9uQW5zd2VyQ3JlYXRlZEhhbmRsZXIoaWQpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBicm9hZGNhc3RfMS5EZWJ1Z1N1YmplY3RfLm5leHQoW1wiQ291bGRuJ3QgY3JlYXRlIGFuc3dlciBpbiBJRCBcIiArIGlkLCBlXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25BZGRDYW5kaWRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgY2FuZGlkYXRlID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkFkZCBDYW5kaWRhdGVcIiwgY2FuZGlkYXRlXSk7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gX3RoaXMuY29ubmVjdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoIWNvbm5lY3Rpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1hLk9uQWRkUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQWRkUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uUmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICAvLyB0aGlzLm1hLk9uQ3JlYXRlQW5zd2VyU3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkNyZWF0ZUFuc3dlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25TZXRMb2NhbERlc2NyaXB0aW9uLnN1YnNjcmliZSh0aGlzLm9uU2V0TG9jYWxEZXNjcmlwdGlvbkhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25TZXRSZW1vdGVEZXNjcmlwdGlvbi5zdWJzY3JpYmUodGhpcy5vblNldFJlbW90ZURlc2NyaXB0aW9uSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5tYS5PbkFkZENhbmRpZGF0ZVN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25BZGRDYW5kaWRhdGVIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBDb25uZWN0aW9uTWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Db25uZWN0aW9uTWFuYWdlciA9IENvbm5lY3Rpb25NYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJUQ01lc3NhZ2luZ0FnZW50ID0gdm9pZCAwO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGJyb2FkY2FzdF8xID0gcmVxdWlyZShcIi4vYnJvYWRjYXN0XCIpO1xyXG52YXIgUlRDTWVzc2FnaW5nQWdlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSVENNZXNzYWdpbmdBZ2VudChicm9hZGNhc3RpbmdBZ2VudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudCA9IGJyb2FkY2FzdGluZ0FnZW50O1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5PbkFkZFBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25SZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbiA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25TZXRSZW1vdGVEZXNjcmlwdGlvbiA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25BZGRDYW5kaWRhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gQWRkL1JlbW92ZSBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLm9uQWRkUGFydGljaXBhbnRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLk9uQWRkUGFydGljaXBhbnRTdWJqZWN0Lm5leHQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblJlbW92ZVBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5PblJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIE9mZmVyXHJcbiAgICAgICAgdGhpcy5nZXRPZmZlclN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJvZmZlclwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uT2ZmZXJDcmVhdGVkSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlc3Npb25EZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICBicm9hZGNhc3RfMS5EZWJ1Z1N1YmplY3RfLm5leHQoW1xyXG4gICAgICAgICAgICAgICAgXCJPZmZlciBmb3IgXCIgKyBpZCArIFwiIENyZWF0ZWQgaW4gXCIgKyBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5pZCxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5uZXh0KFtpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2VcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHNlc3Npb25EZXNjcmlwdGlvbiwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbk9mZmVySGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24ubmV4dChbaWQsIGRhdGFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFuc3dlclxyXG4gICAgICAgIHRoaXMuZ2V0QW5zd2VyU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50XHJcbiAgICAgICAgICAgICAgICAuZ2V0SW5kaXZpZHVhbE1lc3NhZ2VDb21tU3ViamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50eXBlID09PSBcImFuc3dlclwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQW5zd2VyQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KFtcclxuICAgICAgICAgICAgICAgIFwiQW5zd2VyIGZvciBcIiArIGlkICsgXCIgQ3JlYXRlZCBpbiBcIiArIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgX3RoaXMuT25TZXRMb2NhbERlc2NyaXB0aW9uLm5leHQoW2lkLCBzZXNzaW9uRGVzY3JpcHRpb25dKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZVwiLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoc2Vzc2lvbkRlc2NyaXB0aW9uLCBpZCk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQW5zd2VySGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24ubmV4dChbaWQsIGRhdGFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIENhbmRpZGF0ZVxyXG4gICAgICAgIHRoaXMuZ2V0Q2FuZGlkYXRlU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50XHJcbiAgICAgICAgICAgICAgICAuZ2V0SW5kaXZpZHVhbE1lc3NhZ2VDb21tU3ViamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50eXBlID09PSBcImNhbmRpZGF0ZVwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGRhdGEubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IGRhdGEuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuT25BZGRDYW5kaWRhdGVTdWJqZWN0Lm5leHQoW2lkLCBjYW5kaWRhdGVdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpY2VjYW5kaWRhdGUgZXZlbnQ6IFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LnNlbmRJbmRpdmlkdWFsUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjYW5kaWRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICAgICAgfSwgaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmQgb2YgY2FuZGlkYXRlcy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25DYW5kaWRhdGVDcmVhdGVkSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjYW5kaWRhdGVcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcclxuICAgICAgICAgICAgICAgIGlkOiBjYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBjYW5kaWRhdGUuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICB9LCBpZCk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdGluZ0FnZW50LmFkZFBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5yZW1vdmVQYXJ0aWNpcGFudFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0T2ZmZXJTdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMub25PZmZlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0QW5zd2VyU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uQW5zd2VySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5nZXRDYW5kaWRhdGVTdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMub25DYW5kaWRhdGVIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSVENNZXNzYWdpbmdBZ2VudDtcclxufSgpKTtcclxuZXhwb3J0cy5SVENNZXNzYWdpbmdBZ2VudCA9IFJUQ01lc3NhZ2luZ0FnZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLldlYlNvY2tldHNBZ2VudCA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGJyb2FkY2FzdF8xID0gcmVxdWlyZShcIi4vYnJvYWRjYXN0XCIpO1xyXG52YXIgV2ViU29ja2V0c0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2ViU29ja2V0c0FnZW50KENvbW11bmljYXRpb25TdWJqZWN0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLkNvbW11bmljYXRpb25TdWJqZWN0ID0gQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICAgICAgLy8gRmxhZ3NcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuU2VuZCA9IHRydWU7XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICB0aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5PbkNsb3NlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMub25Jc1dlYlNvY2tldFJlYWR5SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuQ29tbXVuaWNhdGlvblN1YmplY3QucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9jYW5TZW5kID0gX3RoaXMuY2FuU2VuZDtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY2FuU2VuZClcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYW5TZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfY2FuU2VuZDtcclxuICAgICAgICAgICAgfSkpLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0VVJMID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICAgICAgb3JpZ2luID0gb3JpZ2luLnJlcGxhY2UoXCJodHRwc1wiLCBcIndzc1wiKS5yZXBsYWNlKFwiaHR0cFwiLCBcIndzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICBfdGhpcy5jYW5TZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLkNvbW11bmljYXRpb25TdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uT3BlbkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJyb2FkY2FzdF8xLkRlYnVnU3ViamVjdF8ubmV4dChcIldTIGlzIE9wZW5cIik7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0Lm5leHQoX3RoaXMuaXNPcGVuKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25DbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5PbkNsb3NlU3ViamVjdC5uZXh0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgYnJvYWRjYXN0XzEuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBfdGhpcy53cy5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0VVJMKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlSGFuZGxlcjtcclxuICAgICAgICB0aGlzLndzLm9ub3BlbiA9IHRoaXMub25PcGVuSGFuZGxlcjtcclxuICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2VIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuSXNXZWJTb2NrZXRSZWFkeVN1YmplY3QucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUmVhZHkpIHsgcmV0dXJuIGlzUmVhZHk7IH0pKS5zdWJzY3JpYmUodGhpcy5vbklzV2ViU29ja2V0UmVhZHlIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBXZWJTb2NrZXRzQWdlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2ViU29ja2V0c0FnZW50ID0gV2ViU29ja2V0c0FnZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJhY2tlbmRTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbnZhciBJc0luaXRpYWxpemVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBJbmNvbWluZ1xyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfUmVmcmVzaFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9JRFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgX1VzZVRWQ2hhbm5lbFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9TZXROYW1lU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRnb2luZ1xyXG52YXIgVFZQcm9ncmFtU3RhdGVTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3Qoe30pO1xyXG52YXIgTmFtZXNTdGF0ZVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdCh7fSk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIHBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KGUubWVzc2FnZSk7IH0pO1xyXG59O1xyXG52YXIgZ2V0ID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChlKTsgfSk7XHJcbn07XHJcbnZhciBzZW5kVFZDaGFubmVsID0gZnVuY3Rpb24gKGlkLCBjaGFubmVsKSB7XHJcbiAgICByZXR1cm4gcG9zdChkZWZpbml0aW9uc18xLlVSTF9UVl9DSEFOTkVMLCB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXHJcbiAgICB9KTtcclxufTtcclxudmFyIGdldE5hbWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGdldChkZWZpbml0aW9uc18xLlVSTF9OQU1FKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIG5hbWVzID0gZGF0YTtcclxuICAgICAgICBOYW1lc1N0YXRlU3ViamVjdF8ubmV4dChuYW1lcyk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIHNlbmROYW1lID0gZnVuY3Rpb24gKGlkLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gcG9zdChkZWZpbml0aW9uc18xLlVSTF9OQU1FLCB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICB9KTtcclxufTtcclxudmFyIGdldFRWUHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBnZXQoZGVmaW5pdGlvbnNfMS5VUkxfVFZfQ0hBTk5FTCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gZGF0YTtcclxuICAgICAgICBUVlByb2dyYW1TdGF0ZVN1YmplY3RfLm5leHQocHJvZ3JhbSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIG9uQ2hhbm5lbEhhbmRsZXIgPSBmdW5jdGlvbiAoY2hhbm5lbCkge1xyXG4gICAgdmFyIGlkID0gX0lEU3ViamVjdC5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKCFpZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBzZW5kVFZDaGFubmVsKGlkLCBjaGFubmVsKTtcclxufTtcclxudmFyIG9uUmVmcmVzaEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBnZXRUVlByb2dyYW0oKTtcclxuICAgIGdldE5hbWVzKCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5uZXh0KHRydWUpOyB9KTtcclxuX1VzZVRWQ2hhbm5lbFN1YmplY3RcclxuICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9KSlcclxuICAgIC5zdWJzY3JpYmUob25DaGFubmVsSGFuZGxlcik7XHJcbl9SZWZyZXNoU3ViamVjdFxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZShvblJlZnJlc2hIYW5kbGVyKTtcclxuLy8gRXhwb3J0c1xyXG52YXIgQmFja2VuZFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYWNrZW5kU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIEluY29taW5nXHJcbiAgICBCYWNrZW5kU2VydmljZS5fSURTYnVqZWN0ID0gX0lEU3ViamVjdDtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9Jbml0U3ViamVjdCA9IF9Jbml0U3ViamVjdDtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9SZWZyZXNoU3ViamVjdCA9IF9SZWZyZXNoU3ViamVjdDtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9Vc2VUVkNoYW5uZWxTdWJqZWN0ID0gX1VzZVRWQ2hhbm5lbFN1YmplY3Q7XHJcbiAgICBCYWNrZW5kU2VydmljZS5fU2V0TmFtZVN1YmplY3QgPSBfU2V0TmFtZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIEJhY2tlbmRTZXJ2aWNlLlRWUHJvZ3JhbVN0YXRlU3ViamVjdF8gPSBUVlByb2dyYW1TdGF0ZVN1YmplY3RfO1xyXG4gICAgQmFja2VuZFNlcnZpY2UuTmFtZXNTdGF0ZVN1YmplY3RfID0gTmFtZXNTdGF0ZVN1YmplY3RfO1xyXG4gICAgQmFja2VuZFNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmFja2VuZFNlcnZpY2UgPSBCYWNrZW5kU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vY2hhbm5lbFwiKTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vc3RhdGVcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjaGFubmVsXzEgPSByZXF1aXJlKFwiLi4vLi4vY2hhbm5lbC9jaGFubmVsXCIpO1xyXG52YXIgYmFja2VuZF8xID0gcmVxdWlyZShcIi4uL2JhY2tlbmRcIik7XHJcbmJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5UVlByb2dyYW1TdGF0ZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAocHJvZ3JhbSkge1xyXG4gICAgcmV0dXJuIGNoYW5uZWxfMS5DaGFubmVsU2VydmljZS5fVFZQcm9ncmFtU3ViamVjdC5uZXh0KHByb2dyYW0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RhdGUvc3RhdGVcIik7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vYmFja2VuZFwiKTtcclxuYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLlRWUHJvZ3JhbVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChwcm9ncmFtKSB7XHJcbiAgICByZXR1cm4gc3RhdGVfMS5TdGF0ZVNlcnZpY2UuX1RWUHJvZ3JhbVN0YXRlU3ViamVjdC5uZXh0KHByb2dyYW0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DaGFubmVsU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxuLyoqXHJcbiAqIENoYW5uZWwgTW9kdWxlXHJcbiAqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXNzaW5nIHRocm91Z2ggb25seSB0aG9zZSBpbWFnZSBkYXRhIG1lc3NhZ2VzIHRoYXRcclxuICogaGF2ZSB0aGUgaWQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGNoYW5uZWwuXHJcbiAqL1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVFZQcm9ncmFtU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3Qoe30pO1xyXG52YXIgX0N1cnJlbnRDaGFubmVsU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoMSk7XHJcbnZhciBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gT3V0cHV0XHJcbnZhciBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gSW50ZXJuYWxcclxudmFyIElzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5uZXh0KHRydWUpOyB9O1xyXG52YXIgZmlsdGVyQ3VycmVudENoYW5uZWxJbWFnZURhdGFNZXNzYWdlcyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHByb2dyYW0gPSBfYVswXSwgY2hhbm5lbCA9IF9hWzFdLCB0dXBsZSA9IF9hWzJdO1xyXG4gICAgdmFyIGZyb20gPSB0dXBsZVswXSwgbWVzc2FnZSA9IHR1cGxlWzFdO1xyXG4gICAgdmFyIGlkID0gcHJvZ3JhbVtjaGFubmVsXTtcclxuICAgIGlmICghaWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGlkICE9PSBmcm9tKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoaW5pdCk7XHJcbmNvbWJpbmVMYXRlc3RfMS5jb21iaW5lTGF0ZXN0KFtcclxuICAgIF9UVlByb2dyYW1TdWJqZWN0LFxyXG4gICAgX0N1cnJlbnRDaGFubmVsU3ViamVjdCxcclxuICAgIF9JbWFnZURhdGFNZXNzYWdlU3ViamVjdCxcclxuXSlcclxuICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9KSlcclxuICAgIC5zdWJzY3JpYmUoZmlsdGVyQ3VycmVudENoYW5uZWxJbWFnZURhdGFNZXNzYWdlcyk7XHJcbi8vIEV4dGVybmFsXHJcbnZhciBDaGFubmVsU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoYW5uZWxTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdCA9IF9Jbml0U3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9UVlByb2dyYW1TdWJqZWN0ID0gX1RWUHJvZ3JhbVN1YmplY3Q7XHJcbiAgICBDaGFubmVsU2VydmljZS5fQ3VycmVudENoYW5uZWxTdWJqZWN0ID0gX0N1cnJlbnRDaGFubmVsU3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9JbWFnZURhdGFNZXNzYWdlU3ViamVjdCA9IF9JbWFnZURhdGFNZXNzYWdlU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgcmV0dXJuIENoYW5uZWxTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNoYW5uZWxTZXJ2aWNlID0gQ2hhbm5lbFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL3VuaXR5XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi91bml0eS91bml0eVwiKTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi9jaGFubmVsXCIpO1xyXG5jaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkluY29taW5nTWVzc2FnZVNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8qKlxyXG4gKiBNZXNzYWdlcyBDb21pbmcgaW50byBVbml0eVxyXG4gKi9cclxuLy8gSW5wdXRcclxudmFyIF9NZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0ltYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgaGFuZGxlSW5jb21pbmdNZXNzYWdlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYVswXSwgbWVzc2FnZSA9IF9hWzFdO1xyXG4gICAgdmFyIG0gPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBtID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBtLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChbZSwgXCJDb3VsZCBub3QgcGFyc2UgbWVzc2FnZVwiXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbTtcclxufTtcclxudmFyIHBvc2l0aW9uTWVzc2FnZUZpbHRlciA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gISFtICYmIG0udHlwZSA9PT0gZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUG9zaXRpb247XHJcbn07XHJcbnZhciBpbWFnZU1lc3NhZ2VGaWx0ZXIgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuICEhbSAmJiBtLnR5cGUgPT09IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkltYWdlRGF0YTtcclxufTtcclxudmFyIGltYWdlU3ViamVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoaW1hZ2UpIHsgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5JbWFnZURhdGEsXHJcbiAgICBpbWFnZTogaW1hZ2UsXHJcbn0pOyB9O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9NZXNzYWdlU3ViamVjdFxyXG4gICAgLnBpcGUobWFwXzEubWFwKGhhbmRsZUluY29taW5nTWVzc2FnZSksIGZpbHRlcl8xLmZpbHRlcihwb3NpdGlvbk1lc3NhZ2VGaWx0ZXIpKVxyXG4gICAgLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfLm5leHQobSk7XHJcbn0pO1xyXG5fTWVzc2FnZVN1YmplY3RcclxuICAgIC5waXBlKG1hcF8xLm1hcChoYW5kbGVJbmNvbWluZ01lc3NhZ2UpLCBmaWx0ZXJfMS5maWx0ZXIoaW1hZ2VNZXNzYWdlRmlsdGVyKSlcclxuICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIGlmICghbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChbbS5pZCwgbV0pO1xyXG59KTtcclxuLy8gRXhwb3J0XHJcbnZhciBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5jb21pbmdNZXNzYWdlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLl9NZXNzYWdlU3ViamVjdCA9IF9NZXNzYWdlU3ViamVjdDtcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuX0ltYWdlU3ViamVjdCA9IF9JbWFnZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XztcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgSW5jb21pbmdNZXNzYWdlU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkluY29taW5nTWVzc2FnZVNlcnZpY2UgPSBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIGluY29taW5nXzEgPSByZXF1aXJlKFwiLi4vaW5jb21pbmdcIik7XHJcbmluY29taW5nXzEuSW5jb21pbmdNZXNzYWdlU2VydmljZS5JbWFnZURhdGFNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9JbWFnZURhdGFNZXNzYWdlU3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBpbmNvbWluZ18xID0gcmVxdWlyZShcIi4uL2luY29taW5nXCIpO1xyXG5pbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gdW5pdHlfMS5Vbml0eVNlcnZpY2UuX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3QubmV4dChtZXNzYWdlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2luY29taW5nL2ludGVncmF0aW9uL2NoYW5uZWxcIik7XHJcbnJlcXVpcmUoXCIuL2luY29taW5nL2ludGVncmF0aW9uL3VuaXR5XCIpO1xyXG5yZXF1aXJlKFwiLi9vdXRnb2luZy9pbnRlZ3JhdGlvbi9iYWNrZW5kXCIpO1xyXG5yZXF1aXJlKFwiLi9vdXRnb2luZy9pbnRlZ3JhdGlvbi9pbml0XCIpO1xyXG5yZXF1aXJlKFwiLi9vdXRnb2luZy9pbnRlZ3JhdGlvbi9tZWRpYVwiKTtcclxucmVxdWlyZShcIi4vb3V0Z29pbmcvaW50ZWdyYXRpb24vcnRjXCIpO1xyXG5yZXF1aXJlKFwiLi9vdXRnb2luZy9pbnRlZ3JhdGlvbi91bml0eVwiKTtcclxucmVxdWlyZShcIi4vcnRjL2ludGVncmF0aW9uL2luY29taW5nXCIpO1xyXG5yZXF1aXJlKFwiLi93cy9pbnRlZ3JhdGlvbi9pbml0XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmFja2VuZF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2JhY2tlbmQvYmFja2VuZFwiKTtcclxudmFyIG91dGdvaW5nXzEgPSByZXF1aXJlKFwiLi4vb3V0Z29pbmdcIik7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5QcmVzZW50TWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLl9Vc2VUVkNoYW5uZWxTdWJqZWN0Lm5leHQoMSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2luaXQvaW5pdFwiKTtcclxudmFyIG91dGdvaW5nXzEgPSByZXF1aXJlKFwiLi4vb3V0Z29pbmdcIik7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5TdGFydE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGluaXRfMS5Jbml0U2VydmljZS5fSXNHYW1lTG9hZGVkU3ViamVjdC5uZXh0KHRydWUpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vbWVkaWEvbWVkaWFcIik7XHJcbnZhciBvdXRnb2luZ18xID0gcmVxdWlyZShcIi4uL291dGdvaW5nXCIpO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG1lZGlhXzEuTWVkaWFTZXJ2aWNlLl9TaGFyZVNjcmVlblN1YmplY3QubmV4dCgpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL3J0Yy9ydGNcIik7XHJcbnZhciBvdXRnb2luZ18xID0gcmVxdWlyZShcIi4uL291dGdvaW5nXCIpO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gcnRjXzEuUlRDU2VydmljZS5fQnJvYWRjYXN0U3ViamVjdC5uZXh0KEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3VuaXR5L3VuaXR5XCIpO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi9vdXRnb2luZ1wiKTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG4vKipcclxuICogTWVzc2FnZXMgR29pbmcgb3V0IG9mIFVuaXR5XHJcbiAqL1xyXG4vLyBJbnB1dFxyXG52YXIgX1Jhd01lc3NhZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSW1hZ2VNZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBTdGFydE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUHJlc2VudE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEltYWdlTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGdlbmVyYXRlRmlsdGVyID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gISFtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSA9PT0gdHlwZTtcclxufTsgfTtcclxudmFyIHJhd01lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHZhciBwYXJzZWRNZXNzYWdlID0gbnVsbDtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcIkNvdWxkIG5vdCBQYXJzZSBNZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJzZWRNZXNzYWdlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KHBhcnNlZE1lc3NhZ2UpO1xyXG59O1xyXG52YXIgaW1hZ2VIYW5kbGVyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYVswXSwgaW1hZ2UgPSBfYVsxXTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fUmF3TWVzc2FnZVN1YmplY3Quc3Vic2NyaWJlKHJhd01lc3NhZ2VIYW5kbGVyKTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlN0YXJ0KSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gU3RhcnRNZXNzYWdlU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbk1lc3NhZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihnZW5lcmF0ZUZpbHRlcihkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5QcmVzZW50KSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkZ1bGxTY3JlZW4pKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBGdWxsU2NyZWVuTWVzc2FnZVN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUG9zaXRpb24pKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuLy8gRGVidWdnaW5nXHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJPdXRnb2luZyBNZXNzYWdlIFNlcnZpY2U6IFwiLCBtKTsgfSk7XHJcblByZXNlbnRNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3V0Z29pbmdNZXNzYWdlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9SYXdNZXNzYWdlU3ViamVjdCA9IF9SYXdNZXNzYWdlU3ViamVjdDtcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX0ltYWdlTWVzc2FnZVN1YmplY3QgPSBfSW1hZ2VNZXNzYWdlU3ViamVjdDtcclxuICAgIC8vIElPXHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9JRFN1YmplY3RfID0gX0lEU3ViamVjdF87XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuTWVzc2FnZVN1YmplY3RfID0gTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5TdGFydE1lc3NhZ2VTdWJqZWN0XyA9IFN0YXJ0TWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5QcmVzZW50TWVzc2FnZVN1YmplY3RfID0gUHJlc2VudE1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0XyA9IEZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gUG9zaXRpb25NZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkltYWdlTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbmNvbWluZ18xID0gcmVxdWlyZShcIi4uLy4uL2luY29taW5nL2luY29taW5nXCIpO1xyXG52YXIgcnRjXzEgPSByZXF1aXJlKFwiLi4vcnRjXCIpO1xyXG5ydGNfMS5SVENTZXJ2aWNlLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gaW5jb21pbmdfMS5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLl9NZXNzYWdlU3ViamVjdC5uZXh0KG0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SVENTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBkZWJvdW5jZVRpbWVfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9kZWJvdW5jZVRpbWVcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgYnJvYWRjYXN0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL2Jyb2FkY2FzdFwiKTtcclxudmFyIGNsaWVudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9jbGllbnRcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Jc0luaXRpYWxpemVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0Jyb2FkY2FzdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIENsaWVudFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIElEU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgVXBkYXRlU3RhdGVTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgX0lzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJSZW1vdGVcIik7XHJcbiAgICB2YXIgY2xpZW50ID0gbmV3IGNsaWVudF8xLkNsaWVudCgpO1xyXG4gICAgSURTdWJqZWN0Xy5uZXh0KGNsaWVudC5pZCk7XHJcbiAgICBDbGllbnRTdWJqZWN0Xy5uZXh0KGNsaWVudCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxudmFyIG9uQ2xpZW50SGFuZGxlciA9IGZ1bmN0aW9uIChjbGllbnQpIHtcclxuICAgIGNsaWVudC5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBPbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfLm5leHQobSk7XHJcbiAgICB9KTtcclxufTtcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShpbml0KTtcclxuQ2xpZW50U3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChjbGllbnQpIHtcclxuICAgIHZhciBpc0luaXRpYWxpemVkID0gX0lzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7XHJcbiAgICBpZiAoIWNsaWVudCB8fCAhaXNJbml0aWFsaXplZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBvbkNsaWVudEhhbmRsZXIoY2xpZW50KTtcclxufSk7XHJcbl9Ccm9hZGNhc3RTdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgdmFyIGNsaWVudCA9IENsaWVudFN1YmplY3RfLmdldFZhbHVlKCk7XHJcbiAgICBpZiAoIWNsaWVudClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjbGllbnQuYnJvYWRjYXN0RGF0YShtZXNzYWdlKTtcclxufSk7XHJcbmJyb2FkY2FzdF8xLkNvbW11bmljYXRpb25TdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lXzEuZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gVXBkYXRlU3RhdGVTdWJqZWN0Xy5uZXh0KCk7XHJcbn0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBSVENTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUlRDU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFJUQ1NlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgUlRDU2VydmljZS5fSXNJbml0aWFsaXplZFN1YmplY3QgPSBfSXNJbml0aWFsaXplZFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0ID0gX0Jyb2FkY2FzdFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLkNsaWVudFN1YmplY3RfID0gQ2xpZW50U3ViamVjdF87XHJcbiAgICBSVENTZXJ2aWNlLklEU3ViamVjdF8gPSBJRFN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5VcGRhdGVTdGF0ZVN1YmplY3RfID0gVXBkYXRlU3RhdGVTdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IE9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF87XHJcbiAgICBSVENTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIFJUQ1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUlRDU2VydmljZSA9IFJUQ1NlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5pdC9pbml0XCIpO1xyXG52YXIgd3NfMSA9IHJlcXVpcmUoXCIuLi93c1wiKTtcclxud3NfMS5XU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc09wZW4pIHtcclxuICAgIHJldHVybiBpbml0XzEuSW5pdFNlcnZpY2UuX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4ubmV4dChpc09wZW4pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5XU1NlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciB3ZWJfc29ja2V0c19hZ2VudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi93ZWItc29ja2V0cy1hZ2VudFwiKTtcclxudmFyIHN3aXRjaE1hcF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcFwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxuLy8gSW5wdXRcclxudmFyIF9Db21tdW5pY2F0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lzUmVtb3RlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBPdXRwdXRcclxudmFyIFdlYlNvY2tldHNBZ2VudFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIFJlc2V0QWdlbnRTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHdzID0gbmV3IHdlYl9zb2NrZXRzX2FnZW50XzEuV2ViU29ja2V0c0FnZW50KF9Db21tdW5pY2F0aW9uU3ViamVjdCk7XHJcbiAgICBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0Xy5uZXh0KHdzKTtcclxufTtcclxudmFyIG9uV2ViU29ja2V0UmVhZHlIYW5kbGVyID0gZnVuY3Rpb24gKGlzUmVhZHkpIHtcclxuICAgIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fLm5leHQoaXNSZWFkeSk7XHJcbn07XHJcbnZhciBvbldlYlNvY2tldENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlc2V0QWdlbnRTdWJqZWN0Xy5uZXh0KG51bGwpOyB9O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9Jc1dpbmRvd0xvYWRlZFN1YmplY3RcclxuICAgIC5waXBlKHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBSZXNldEFnZW50U3ViamVjdF87IH0pKVxyXG4gICAgLnN1YnNjcmliZShpbml0KTtcclxuV2ViU29ja2V0c0FnZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKHdzKSB7IHJldHVybiAhIXdzOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gd3MuSXNXZWJTb2NrZXRSZWFkeVN1YmplY3Q7IH0pKS5zdWJzY3JpYmUob25XZWJTb2NrZXRSZWFkeUhhbmRsZXIpO1xyXG5XZWJTb2NrZXRzQWdlbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAod3MpIHsgcmV0dXJuICEhd3M7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKHdzKSB7IHJldHVybiB3cy5PbkNsb3NlU3ViamVjdDsgfSkpLnN1YnNjcmliZShvbldlYlNvY2tldENsb3NlSGFuZGxlcik7XHJcbi8vIEV4cG9ydHNcclxudmFyIFdTU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdTU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vSW5wdXRcclxuICAgIFdTU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IF9Jc1dpbmRvd0xvYWRlZFN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzUmVtb3RlU3ViamVjdCA9IF9Jc1JlbW90ZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFdTU2VydmljZS5XZWJTb2NrZXRzQWdlbnRTdWJqZWN0XyA9IFdlYlNvY2tldHNBZ2VudFN1YmplY3RfO1xyXG4gICAgV1NTZXJ2aWNlLlJlc2V0QWdlbnRTdWJqZWN0XyA9IFJlc2V0QWdlbnRTdWJqZWN0XztcclxuICAgIFdTU2VydmljZS5Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXyA9IElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fO1xyXG4gICAgcmV0dXJuIFdTU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5XU1NlcnZpY2UgPSBXU1NlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL2JhY2tlbmRcIik7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL21lZGlhXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9ydGNcIik7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL3N0YXRlXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9jaGFubmVsXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkluaXRTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIF9FbnZpcm9ubWVudFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KFwicmVtb3RlXCIpO1xyXG4vLyBPdXRwdXRcclxudmFyIF9Jc1dpbmRvd0xvYWRlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIF9Jc0dhbWVMb2FkZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBJbml0U3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEVudlN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChcInByb2R1Y3Rpb25cIik7XHJcbi8vIE1ldGhvZHNcclxudmFyIGdldElzUmVtb3RlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX0Vudmlyb25tZW50U3ViamVjdC5nZXRWYWx1ZSgpID09PSBcInJlbW90ZVwiOyB9O1xyXG52YXIgZ2V0SXNMb2NhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9FbnZpcm9ubWVudFN1YmplY3QuZ2V0VmFsdWUoKSA9PT0gXCJsb2NhbFwiOyB9O1xyXG52YXIgb25Mb2FkSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgdmFyIGlzTG9jYWwgPSBvcmlnaW4uaW5jbHVkZXMoXCJsb2NhbGhvc3RcIik7XHJcbiAgICBfRW52aXJvbm1lbnRTdWJqZWN0Lm5leHQoXCJyZW1vdGVcIik7IC8vaXNMb2NhbCA/IFwibG9jYWxcIiA6IFwicmVtb3RlXCIpO1xyXG4gICAgX0lzV2luZG93TG9hZGVkU3ViamVjdC5uZXh0KHRydWUpO1xyXG59O1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIEluaXRTdWJqZWN0Xy5uZXh0KCk7XHJcbiAgICBFbnZTdWJqZWN0Xy5uZXh0KFwicHJvZHVjdGlvblwiKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkSGFuZGxlcik7XHJcbmNvbWJpbmVMYXRlc3RfMS5jb21iaW5lTGF0ZXN0KFtcclxuICAgIF9Jc1dpbmRvd0xvYWRlZFN1YmplY3QsXHJcbiAgICBfSXNHYW1lTG9hZGVkU3ViamVjdCxcclxuICAgIF9Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuLFxyXG5dKVxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGlzV2luZG93TG9hZGVkU3ViamVjdCA9IF9hWzBdLCBpc0dhbWVMb2FkZWQgPSBfYVsxXSwgSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbiA9IF9hWzJdO1xyXG4gICAgdmFyIGlzUmVtb3RlID0gZ2V0SXNSZW1vdGUoKTtcclxuICAgIGlmICghaXNXaW5kb3dMb2FkZWRTdWJqZWN0IHx8ICFpc0dhbWVMb2FkZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGlzUmVtb3RlICYmICFJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KSlcclxuICAgIC5zdWJzY3JpYmUoaW5pdCk7XHJcbkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiSU5JVCFcIik7XHJcbn0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBJbml0U2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluaXRTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIEluaXRTZXJ2aWNlLl9Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuID0gX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW47XHJcbiAgICBJbml0U2VydmljZS5fRW52aXJvbm1lbnRTdWJqZWN0ID0gX0Vudmlyb25tZW50U3ViamVjdDtcclxuICAgIEluaXRTZXJ2aWNlLl9Jc1dpbmRvd0xvYWRlZFN1YmplY3QgPSBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0O1xyXG4gICAgSW5pdFNlcnZpY2UuX0lzR2FtZUxvYWRlZFN1YmplY3QgPSBfSXNHYW1lTG9hZGVkU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfID0gSW5pdFN1YmplY3RfO1xyXG4gICAgSW5pdFNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICBJbml0U2VydmljZS5FbnZTdWJqZWN0XyA9IEVudlN1YmplY3RfO1xyXG4gICAgcmV0dXJuIEluaXRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkluaXRTZXJ2aWNlID0gSW5pdFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uL2luaXRcIik7XHJcbmluaXRfMS5Jbml0U2VydmljZS5Jbml0U3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9jaGFubmVsL2NoYW5uZWxcIik7XHJcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi4vaW5pdFwiKTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi8uLi9tZWRpYS9tZWRpYVwiKTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi9pbml0XCIpO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi9pbml0XCIpO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi9pbml0XCIpO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vYmFja2VuZFwiKTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vcnRjXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9zdGF0ZVwiKTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vdW5pdHlcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYVwiKTtcclxubWVkaWFfMS5NZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUHJlc2VudGluZykgeyByZXR1cm4gaXNQcmVzZW50aW5nOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdC5uZXh0KDEpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vbWVkaWFcIik7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobSkpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RhdGUvc3RhdGVcIik7XHJcbnZhciBtZWRpYV8xID0gcmVxdWlyZShcIi4uL21lZGlhXCIpO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5Jc1ByZXNlbnRpbmdTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlzUHJlc2VudGluZykge1xyXG4gICAgcmV0dXJuIHN0YXRlXzEuU3RhdGVTZXJ2aWNlLl9Jc1ByZXNlbnRpbmdTdWJqZWN0Lm5leHQoaXNQcmVzZW50aW5nKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uLy4uL3VuaXR5L3VuaXR5XCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYVwiKTtcclxubWVkaWFfMS5NZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUHJlc2VudGluZykgeyByZXR1cm4gaXNQcmVzZW50aW5nOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9RdWl0R2FtZVN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NZWRpYVNlcnZpY2UgPSBleHBvcnRzLmdldFVzZXJNZWRpYSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgaW50ZXJ2YWxfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWxcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG52YXIgSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuLy8gSW5wdXRcclxudmFyIF9Jbml0U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1NoYXJlU2NyZWVuU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIElzUHJlc2VudGluZ1N1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBSZW1vdGVNZWRpYVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIExvY2FsTWVkaWFTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBJbWFnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIFNJWkUgPSAxMDI0O1xyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxudmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4vLyBNZXRob2RzXHJcbmV4cG9ydHMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXNcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAuZ2V0RGlzcGxheU1lZGlhKHtcclxuICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgICAgIExvY2FsTWVkaWFTdWJqZWN0Xy5uZXh0KHN0cmVhbSk7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiTG9jYWwgTWVkaWFcIik7XHJcbiAgICB9KVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcImdldFVzZXJNZWRpYSgpIGVycm9yOiBcIiArIGUubmFtZSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGluaXRpYWxpemVDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjYW52YXMud2lkdGggPSBTSVpFO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IFNJWkU7XHJcbn07XHJcbnZhciBzdHJlYW1Ub0ltYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIGlmICghY2FudmFzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoIWNhbnZhcylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBTSVpFLCBTSVpFKTtcclxuICAgIHZhciBkYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIik7XHJcbiAgICB2YXIgcyA9IGRhdGEucmVwbGFjZShcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIsIFwiXCIpO1xyXG4gICAgaWYgKCFzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIEltYWdlU3ViamVjdF8ubmV4dChzKTtcclxufTtcclxudmFyIG9uU3RyZWFtVG9JbWFnZUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICBpZiAoIXN0cmVhbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBzdHJlYW1Ub0ltYWdlSGFuZGxlcihzdHJlYW0pO1xyXG59O1xyXG52YXIgb25JbWFnZVRvSW1hZ2VEYXRhTWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkltYWdlRGF0YSxcclxuICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICB9O1xyXG4gICAgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbn07XHJcbnZhciBvblNoYXJlU2NyZWVuSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIElzUHJlc2VudGluZ1N1YmplY3RfLm5leHQodHJ1ZSk7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJJbml0IE1lZGlhXCIpO1xyXG4gICAgZXhwb3J0cy5nZXRVc2VyTWVkaWEoKTtcclxufTtcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0aWFsaXplQ2FudmFzKCk7XHJcbiAgICBJc0luaXRpYWxpemVkU3ViamVjdC5uZXh0KHRydWUpO1xyXG59O1xyXG52YXIgaXNJbml0aWFsaXplZEZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7IH07XHJcbnZhciBoYXNOb0xvY2FsTWVkaWFGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhTG9jYWxNZWRpYVN1YmplY3RfLmdldFZhbHVlKCk7IH07XHJcbi8vIFN1YnNjcmlwdGlvbnMxXHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoaW5pdCk7XHJcbkltYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoaXNJbml0aWFsaXplZEZpbHRlcikpLnN1YnNjcmliZShvbkltYWdlVG9JbWFnZURhdGFNZXNzYWdlSGFuZGxlcik7XHJcbkxvY2FsTWVkaWFTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihpc0luaXRpYWxpemVkRmlsdGVyKSkuc3Vic2NyaWJlKG9uU3RyZWFtVG9JbWFnZUhhbmRsZXIpO1xyXG5fU2hhcmVTY3JlZW5TdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoaXNJbml0aWFsaXplZEZpbHRlciksIGZpbHRlcl8xLmZpbHRlcihoYXNOb0xvY2FsTWVkaWFGaWx0ZXIpKVxyXG4gICAgLnN1YnNjcmliZShvblNoYXJlU2NyZWVuSGFuZGxlcik7XHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJNZWRpYSBTZXJ2aWNlOiBcIiwgbSk7IH0pO1xyXG5pbnRlcnZhbF8xLmludGVydmFsKGNvbnN0XzEuVVBEQVRFX0lOVEVSVkFMKVxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzUHJlc2VudGluZ1N1YmplY3RfLmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZSh1cGRhdGUpO1xyXG4vLyBFeHBvcnRcclxudmFyIE1lZGlhU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lZGlhU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBNZWRpYVNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgTWVkaWFTZXJ2aWNlLl9TaGFyZVNjcmVlblN1YmplY3QgPSBfU2hhcmVTY3JlZW5TdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBNZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8gPSBJc1ByZXNlbnRpbmdTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5SZW1vdGVNZWRpYVN1YmplY3RfID0gUmVtb3RlTWVkaWFTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5Mb2NhbE1lZGlhU3ViamVjdF8gPSBMb2NhbE1lZGlhU3ViamVjdF87XHJcbiAgICBNZWRpYVNlcnZpY2UuSW1hZ2VTdWJqZWN0XyA9IEltYWdlU3ViamVjdF87XHJcbiAgICBNZWRpYVNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIE1lZGlhU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5NZWRpYVNlcnZpY2UgPSBNZWRpYVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU3RhdGVTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9DbGllbnRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSURTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9UVlByb2dyYW1TdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Jc1ByZXNlbnRpbmdTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgR2FtZVN0YXRlU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGRlZmluaXRpb25zXzEuREVGQVVMVF9TVEFURSk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbih7fSwgR2FtZVN0YXRlU3ViamVjdF8uZ2V0VmFsdWUoKSkpOyB9O1xyXG52YXIgdXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbCkge1xyXG4gICAgdmFyIHByZXZTdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICB2YXIgbmV3U3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldlN0YXRlKSwgcGFydGlhbCk7XHJcbiAgICBHYW1lU3RhdGVTdWJqZWN0Xy5uZXh0KG5ld1N0YXRlKTtcclxufTtcclxudmFyIHN0YXRlVXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsaWVudCA9IF9hWzBdLCBpZCA9IF9hWzFdLCBjaGFubmVsID0gX2FbMl0sIHByb2dyYW0gPSBfYVszXSwgaXNQcmVzZW50aW5nID0gX2FbNF07XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoY2xpZW50ID09PSBudWxsIHx8IGNsaWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpZW50LkNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3Rpb25zKTtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICBzdHJlYW1zOiAoY2xpZW50ID09PSBudWxsIHx8IGNsaWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpZW50LnN0cmVhbXMpIHx8IHt9LFxyXG4gICAgICAgIGlkOiBpZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgY2hhbm5lbDogY2hhbm5lbCB8fCBudWxsLFxyXG4gICAgICAgIHByb2dyYW06IHByb2dyYW0sXHJcbiAgICAgICAgaXNQcmVzZW50aW5nOiBpc1ByZXNlbnRpbmcsXHJcbiAgICB9KTtcclxufTtcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICAgICAgX0NsaWVudFN1YmplY3QsXHJcbiAgICAgICAgX0lEU3ViamVjdF8sXHJcbiAgICAgICAgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QsXHJcbiAgICAgICAgX1RWUHJvZ3JhbVN0YXRlU3ViamVjdCxcclxuICAgICAgICBfSXNQcmVzZW50aW5nU3ViamVjdCxcclxuICAgIF0pLnN1YnNjcmliZShzdGF0ZVVwZGF0ZUhhbmRsZXIpO1xyXG4gICAgR2FtZVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KHN0YXRlKTsgfSk7XHJcbn0pO1xyXG52YXIgU3RhdGVTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RhdGVTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIFN0YXRlU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0NsaWVudFN1YmplY3QgPSBfQ2xpZW50U3ViamVjdDtcclxuICAgIFN0YXRlU2VydmljZS5fSURTdWJqZWN0XyA9IF9JRFN1YmplY3RfO1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0ID0gX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX1RWUHJvZ3JhbVN0YXRlU3ViamVjdCA9IF9UVlByb2dyYW1TdGF0ZVN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0lzUHJlc2VudGluZ1N1YmplY3QgPSBfSXNQcmVzZW50aW5nU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgU3RhdGVTZXJ2aWNlLkdhbWVTdGF0ZVN1YmplY3RfID0gR2FtZVN0YXRlU3ViamVjdF87XHJcbiAgICBTdGF0ZVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gU3RhdGVTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlN0YXRlU2VydmljZSA9IFN0YXRlU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vb3V0Z29pbmdcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBvdXRnb2luZ18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vb3V0Z29pbmcvb3V0Z29pbmdcIik7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uL3VuaXR5XCIpO1xyXG51bml0eV8xLlVuaXR5U2VydmljZS5Vbml0eU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIG91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fUmF3TWVzc2FnZVN1YmplY3QubmV4dChtZXNzYWdlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVW5pdHlTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KDEpO1xyXG52YXIgX0NhblNlbmRNZXNzYWdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbnZhciBfU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX01ha2VGdWxsU2NyZWVuU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1F1aXRHYW1lU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIFVuaXR5TWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBQb3NpdGlvblN0YXRlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIE1BTkFHRVIgPSBcIk1hbmFnZXJcIjtcclxudmFyIE9OX01FU1NBR0UgPSBcIk9uTWVzc2FnZVwiO1xyXG4vLyBNZXRob2RzXHJcbnZhciBzZW5kVG9Vbml0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG1ldGhvZCwgbWVzc2FnZSkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKCF1bml0eUluc3RhbmNlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHVuaXR5SW5zdGFuY2UuU2VuZE1lc3NhZ2Uob2JqZWN0LCBtZXRob2QsIG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgc2VuZE1lc3NhZ2VUb1VuaXR5SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW1wiU2VuZCBUbyBVbml0eVwiLCBtZXNzYWdlXSk7XHJcbiAgICB2YXIgbWVzc2FnZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgc2VuZFRvVW5pdHkoTUFOQUdFUiwgT05fTUVTU0FHRSwgbWVzc2FnZVN0cmluZyk7XHJcbn07XHJcbnZhciBtYWtlRnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlNldEZ1bGxzY3JlZW4oMSk7XHJcbn07XHJcbnZhciBxdWl0R2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlF1aXQoKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG4vLyBAdHMtaWdub3JlXHJcbndpbmRvdy5zZW5kVW5pdHlNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBVbml0eU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdFxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9DYW5TZW5kTWVzc2FnZXMuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKHNlbmRNZXNzYWdlVG9Vbml0eUhhbmRsZXIpO1xyXG5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0LnN1YnNjcmliZShtYWtlRnVsbFNjcmVlbik7XHJcbl9RdWl0R2FtZVN1YmplY3Quc3Vic2NyaWJlKHF1aXRHYW1lKTtcclxudmFyIFVuaXR5U2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuaXR5U2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFVuaXR5U2VydmljZS5fQ3VycmVudFRWQ2hhbm5lbFN0YXRlU3ViamVjdCA9IF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0O1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9DYW5TZW5kTWVzc2FnZXMgPSBfQ2FuU2VuZE1lc3NhZ2VzO1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0ID0gX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3Q7XHJcbiAgICBVbml0eVNlcnZpY2UuX01ha2VGdWxsU2NyZWVuU3ViamVjdCA9IF9NYWtlRnVsbFNjcmVlblN1YmplY3Q7XHJcbiAgICBVbml0eVNlcnZpY2UuX1F1aXRHYW1lU3ViamVjdCA9IF9RdWl0R2FtZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFVuaXR5U2VydmljZS5Vbml0eU1lc3NhZ2VTdWJqZWN0XyA9IFVuaXR5TWVzc2FnZVN1YmplY3RfO1xyXG4gICAgVW5pdHlTZXJ2aWNlLlBvc2l0aW9uU3RhdGVTdWJqZWN0XyA9IFBvc2l0aW9uU3RhdGVTdWJqZWN0XztcclxuICAgIFVuaXR5U2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBVbml0eVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVW5pdHlTZXJ2aWNlID0gVW5pdHlTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRFRkFVTFRfU1RBVEUgPSBleHBvcnRzLlVSTF9OQU1FID0gZXhwb3J0cy5VUkxfVFZfQ0hBTk5FTCA9IGV4cG9ydHMuRU1lc3NhZ2VUeXBlID0gdm9pZCAwO1xyXG4vLyBNZXNzYWdlc1xyXG52YXIgRU1lc3NhZ2VUeXBlO1xyXG4oZnVuY3Rpb24gKEVNZXNzYWdlVHlwZSkge1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiUHJlc2VudFwiXSA9IFwicHJlc2VudFwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiRnVsbFNjcmVlblwiXSA9IFwiZnVsbHNjcmVlblwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiUG9zaXRpb25cIl0gPSBcInBvc2l0aW9uXCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJJbWFnZURhdGFcIl0gPSBcImltYWdlXCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJTdGFydFwiXSA9IFwic3RhcnRcIjtcclxufSkoRU1lc3NhZ2VUeXBlID0gZXhwb3J0cy5FTWVzc2FnZVR5cGUgfHwgKGV4cG9ydHMuRU1lc3NhZ2VUeXBlID0ge30pKTtcclxuLy8gQmFja2VuZFxyXG5leHBvcnRzLlVSTF9UVl9DSEFOTkVMID0gXCIvdHZcIjtcclxuZXhwb3J0cy5VUkxfTkFNRSA9IFwiL25hbWVcIjtcclxuZXhwb3J0cy5ERUZBVUxUX1NUQVRFID0ge1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBpc1ByZXNlbnRpbmc6IGZhbHNlLFxyXG4gICAgc3RyZWFtczoge30sXHJcbiAgICBjaGFubmVsOiAxLFxyXG4gICAgcHJvZ3JhbToge30sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRGVidWdTdWJqZWN0ID0gZXhwb3J0cy5FbnZpcm9ubWVudFN1YmplY3QgPSBleHBvcnRzLmdlbmVyYXRlSWQgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBnZXRSYW5kb21OdW1iZXJzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgdmFyIHZhbHVlID0gQXJyYXkuZnJvbShNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygxMCwgbGVuZ3RoKSkudG9TdHJpbmcoKSkucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShsZW5ndGgpXHJcbiAgICAgICAgLmZpbGwoXCIwXCIpXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gdmFsdWVbaV0gfHwgdjsgfSlcclxuICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgLmpvaW4oXCJcIik7XHJcbn07XHJcbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIChhbW91bnQsIGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShhbW91bnQpXHJcbiAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChhLCBpLCBiKSB7IHJldHVybiBcIlwiICsgKGkgJiYgXCItXCIpICsgZ2V0UmFuZG9tTnVtYmVycyhsZW5ndGgpOyB9KVxyXG4gICAgICAgIC5qb2luKFwiXCIpO1xyXG59O1xyXG5leHBvcnRzLkVudmlyb25tZW50U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoXCJkZXZlbG9wbWVudFwiKTtcclxuZXhwb3J0cy5EZWJ1Z1N1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuZXhwb3J0cy5EZWJ1Z1N1YmplY3QucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwb3J0cy5FbnZpcm9ubWVudFN1YmplY3QuZ2V0VmFsdWUoKSA9PT0gXCJkZXZlbG9wbWVudFwiOyB9KSkuc3Vic2NyaWJlKGNvbnNvbGUud2Fybik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIn0=