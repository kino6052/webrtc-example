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
exports.isDebug = exports.DEBUG = exports.UPDATE_INTERVAL = exports.PORT = exports.IP = void 0;
exports.IP = "192.168.0.75"; // "localhost"; // "192.168.0.75";
exports.PORT = "8080";
exports.UPDATE_INTERVAL = 60; // milliseconds
exports.DEBUG = true;
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
        this.DebugSubject_.subscribe(function (m) { return console.warn("Broadcast: ", m); });
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
    function Client(subject) {
        var _this = this;
        this.subject = subject;
        this.id = utils_1.generateId(4, 4);
        // Channels
        this.dataChannels = {};
        this.streams = {};
        // Subjects
        // Input
        this._LocalStreamSubject = new Subject_1.Subject();
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
            var dataChannel = connection.createDataChannel("data-channel-" + id);
            dataChannel.onopen = function (ev) { return _this.DebugSubject_.next("Opened Channel"); };
            dataChannel.onerror = function (ev) { return _this.DebugSubject_.next(JSON.stringify(ev)); };
            _this.dataChannels[id] = dataChannel;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
            _this.DebugSubject_.next(_this);
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
            _this.DebugSubject_.next("ID: " + id + ", On Track Handler");
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
        this._LocalStreamSubject.subscribe();
        this.BroadcastingAgent.sendGreeting();
        this.DebugSubject_.next(["Client", this]);
        this.DebugSubject_.subscribe(function (m) { return console.warn("Client: ", m); });
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
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
        this.DebugSubject_.subscribe(function (m) { return console.warn("Connection Manager", m); });
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
        this.DebugSubject_.subscribe(function (m) {
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
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
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
        this.onIsWebSocketReadyHandler = function () {
            _this._CommunicationSubject
                .pipe(filter_1.filter(function () {
                var _canSend = _this.canSend;
                if (!_this.canSend)
                    _this.canSend = true;
                return _canSend;
            }))
                .subscribe(function (message) {
                _this.sendMessage(JSON.stringify(message));
            });
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
            _this.ws.send(message);
        };
        var url = this.getURL();
        this.ws = new WebSocket(url);
        this.ws.onmessage = this.onMessageHandler;
        this.ws.onopen = this.onOpenHandler;
        this.ws.onclose = this.onCloseHandler;
        this.IsWebSocketReadySubject.pipe(filter_1.filter(function (isReady) { return isReady; })).subscribe(this.onIsWebSocketReadyHandler);
        this.DebugSubject_.subscribe(function (m) { return console.warn("WebSockets Agent: ", m); });
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

/***/ "./src/services/communication/incoming/integration/integration.ts":
/*!************************************************************************!*\
  !*** ./src/services/communication/incoming/integration/integration.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../../channel/channel */ "./src/services/channel/channel.ts");
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var incoming_1 = __webpack_require__(/*! ../incoming */ "./src/services/communication/incoming/incoming.ts");
incoming_1.IncomingMessageService.ImageDataMessageSubject_.subscribe(function (message) {
    return channel_1.ChannelService._ImageDataMessageSubject.next(message);
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
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
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

/***/ "./src/services/communication/rtc/integration/integration.ts":
/*!*******************************************************************!*\
  !*** ./src/services/communication/rtc/integration/integration.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var incoming_1 = __webpack_require__(/*! ../../incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
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
var client_1 = __webpack_require__(/*! ../../../lib/client */ "./src/lib/client.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _BroadcastSubject = new Subject_1.Subject();
var _CommunicationSubject = new Subject_1.Subject();
// Output
var CommunicationSubject_ = new Subject_1.Subject();
var ClientSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var UpdateStateSubject_ = new Subject_1.Subject();
var OnDataChannelMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    var client = client_1.Client.createClient(CommunicationSubject_);
    // @ts-ignore
    window.client = client;
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
// Subscriptions
_InitSubject.subscribe(init);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelMessageSubject_; })).subscribe(onDataChannelHandler);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelSubject_; })).subscribe(console.warn);
_BroadcastSubject.subscribe(onBroadcastHandler);
_CommunicationSubject.subscribe(function (m) { return CommunicationSubject_.next(m); });
CommunicationSubject_.pipe(debounceTime_1.debounceTime(100)).subscribe(function () {
    return UpdateStateSubject_.next();
});
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.DebugSubject_; })).subscribe(function (m) { return DebugSubject_.next(m); });
DebugSubject_.subscribe(function (m) { return console.warn("RTC Service: ", m); });
// Exports
var RTCService = /** @class */ (function () {
    function RTCService() {
    }
    RTCService._InitSubject = _InitSubject;
    RTCService._IsInitializedSubject = _IsInitializedSubject;
    RTCService._BroadcastSubject = _BroadcastSubject;
    RTCService._CommunicationSubject = _CommunicationSubject;
    // Output
    RTCService.CommunicationSubject_ = CommunicationSubject_;
    RTCService.ClientSubject_ = ClientSubject_;
    RTCService.IDSubject_ = IDSubject_;
    RTCService.UpdateStateSubject_ = UpdateStateSubject_;
    RTCService.OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
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
DebugSubject_.subscribe(function (m) { return console.warn("WS Service: ", m); });
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
    DebugSubject_.next([
        isWindowLoadedSubject,
        isGameLoaded,
        IsWebSocketConnectionOpen,
    ]);
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
DebugSubject_.subscribe(function (m) { return console.warn("Init Service: ", m); });
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
    // .pipe(filter(isInitializedFilter), filter(hasNoLocalMediaFilter))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL0lubmVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL09ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2RlYm91bmNlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzTnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9JdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icm9hZGNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25uZWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydGMtbWVzc2FnaW5nLWFnZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvd2ViLXNvY2tldHMtYWdlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2JhY2tlbmQvYmFja2VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbnRlZ3JhdGlvbi9jaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYWNrZW5kL2ludGVncmF0aW9uL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jaGFubmVsL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW50ZWdyYXRpb24vdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW5jb21pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvb3V0Z29pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vcnRjL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL3J0Yy9ydGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3MvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3Mvd3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5pdC9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL2ludGVncmF0aW9uL2JhY2tlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL2ludGVncmF0aW9uL3J0Yy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW50ZWdyYXRpb24vc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL2ludGVncmF0aW9uL3VuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZWRpYS9tZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91bml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdW5pdHkvaW50ZWdyYXRpb24vb3V0Z29pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VuaXR5L3VuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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Q0FBQyw0RkFBaUM7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDLHdCQUF3QixtQkFBTyxDQUFDLG9GQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0ZBQStCO0FBQy9ELGVBQWUsbUJBQU8sQ0FBQyx3RkFBZ0M7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtREFBbUQsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxnRUFBZ0UsRUFBRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9TdWJqZWN0XCIpO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yXCIpO1xudmFyIEJlaGF2aW9yU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJlaGF2aW9yU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QoX3ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd25FcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHRoaXMuX3ZhbHVlID0gdmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIEJlaGF2aW9yU3ViamVjdDtcbn0oU3ViamVjdF8xLlN1YmplY3QpKTtcbmV4cG9ydHMuQmVoYXZpb3JTdWJqZWN0ID0gQmVoYXZpb3JTdWJqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVoYXZpb3JTdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIElubmVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Jbm5lclN1YnNjcmliZXIgPSBJbm5lclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbm5lclN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FuUmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvY2FuUmVwb3J0RXJyb3JcIik7XG52YXIgdG9TdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi91dGlsL3RvU3Vic2NyaWJlclwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi91dGlsL3BpcGVcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yO1xuICAgICAgICB2YXIgc2luayA9IHRvU3Vic2NyaWJlcl8xLnRvU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBzaW5rLmFkZChvcGVyYXRvci5jYWxsKHNpbmssIHRoaXMuc291cmNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5rLmFkZCh0aGlzLnNvdXJjZSB8fCAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgIXNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHNpbmspIDpcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc2luaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgc2luay5zeW5jRXJyb3JWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbms7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3JfMS5jYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHZhbHVlID0geDsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpIHtcbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHByb21pc2VDdG9yID0gY29uZmlnXzEuY29uZmlnLlByb21pc2UgfHwgUHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZUN0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLmVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgT3V0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLk91dGVyU3Vic2NyaWJlciA9IE91dGVyU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU91dGVyU3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHsgbm93ID0gU2NoZWR1bGVyLm5vdzsgfVxuICAgICAgICB0aGlzLlNjaGVkdWxlckFjdGlvbiA9IFNjaGVkdWxlckFjdGlvbjtcbiAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuU2NoZWR1bGVyQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIubm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gRGF0ZS5ub3coKTsgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcIik7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3ViamVjdFN1YnNjcmlwdGlvblwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ViamVjdFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaWJlciA9IFN1YmplY3RTdWJzY3JpYmVyO1xudmFyIFN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcHlbaV0ubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uXzEuU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuU3ViamVjdCA9IFN1YmplY3Q7XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5uZXh0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0cy5Bbm9ueW1vdXNTdWJqZWN0ID0gQW5vbnltb3VzU3ViamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaXB0aW9uID0gU3ViamVjdFN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3RTdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4vT2JzZXJ2ZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uT3JOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25Pck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk9yTmV4dCBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGRlc3RpbmF0aW9uT3JOZXh0LnN5bmNFcnJvclRocm93YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25Pck5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk9yTmV4dC5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIucHJvdG90eXBlW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIHN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmVBbmRSZWN5Y2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHRoaXMuX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBfcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3Vic2NyaWJlciA9IFN1YnNjcmliZXI7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihfcGFyZW50U3Vic2NyaWJlciwgb2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IF9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBPYnNlcnZlcl8xLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihjb250ZXh0LnVuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9IF90aGlzLnVuc3Vic2NyaWJlLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgX3RoaXMuX25leHQgPSBuZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLl9uZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fbmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgdmFyIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgPSBjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZztcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY29tcGxldGUuY2FsbChfdGhpcy5fY29udGV4dCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclVuc3ViID0gZnVuY3Rpb24gKGZuLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU2FmZVN1YnNjcmliZXIgPSBTYWZlU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzT2JqZWN0XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3JcIik7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfcGFyZW50T3JQYXJlbnRzID0gX2EuX3BhcmVudE9yUGFyZW50cywgX3Vuc3Vic2NyaWJlID0gX2EuX3Vuc3Vic2NyaWJlLCBfc3Vic2NyaXB0aW9ucyA9IF9hLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IF9wYXJlbnRPclBhcmVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudE9yUGFyZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IgPyBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpIDogW2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5XzEuaXNBcnJheShfc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGxlbiA9IF9zdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF9zdWJzY3JpcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0cy5TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb247XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSA/IGVyci5lcnJvcnMgOiBlcnIpOyB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gZmFsc2U7XG5leHBvcnRzLmNvbmZpZyA9IHtcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgc2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUnhKUzogQmFjayB0byBhIGJldHRlciBlcnJvciBiZWhhdmlvci4gVGhhbmsgeW91LiA8MycpO1xuICAgICAgICB9XG4gICAgICAgIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcoKSB7XG4gICAgICAgIHJldHVybiBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3M7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc1NjaGVkdWxlclwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG52YXIgZnJvbUFycmF5XzEgPSByZXF1aXJlKFwiLi9mcm9tQXJyYXlcIik7XG52YXIgTk9ORSA9IHt9O1xuZnVuY3Rpb24gY29tYmluZUxhdGVzdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBudWxsO1xuICAgIHZhciBzY2hlZHVsZXIgPSBudWxsO1xuICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXlfMS5pc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5XzEuZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5jb21iaW5lTGF0ZXN0ID0gY29tYmluZUxhdGVzdDtcbnZhciBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucmVzdWx0U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5Db21iaW5lTGF0ZXN0T3BlcmF0b3IgPSBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG52YXIgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IDA7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2goTk9ORSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IHRoaXMub2JzZXJ2YWJsZXM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICAgICAgdGhpcy50b1Jlc3BvbmQgPSBsZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKHVudXNlZCkge1xuICAgICAgICBpZiAoKHRoaXMuYWN0aXZlIC09IDEpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFZhbCA9IHZhbHVlc1tvdXRlckluZGV4XTtcbiAgICAgICAgdmFyIHRvUmVzcG9uZCA9ICF0aGlzLnRvUmVzcG9uZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IG9sZFZhbCA9PT0gTk9ORSA/IC0tdGhpcy50b1Jlc3BvbmQgOiB0aGlzLnRvUmVzcG9uZDtcbiAgICAgICAgdmFsdWVzW291dGVySW5kZXhdID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgaWYgKHRvUmVzcG9uZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlSZXN1bHRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IuYXBwbHkodGhpcywgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Db21iaW5lTGF0ZXN0U3Vic2NyaWJlciA9IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tYmluZUxhdGVzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9cIik7XG52YXIgc2NoZWR1bGVkXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVkL3NjaGVkdWxlZFwiKTtcbmZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShzdWJzY3JpYmVUb18xLnN1YnNjcmliZVRvKGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVkXzEuc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZnJvbSA9IGZyb207XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIHN1YnNjcmliZVRvQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvQXJyYXlcIik7XG52YXIgc2NoZWR1bGVBcnJheV8xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5XCIpO1xuZnVuY3Rpb24gZnJvbUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKHN1YnNjcmliZVRvQXJyYXlfMS5zdWJzY3JpYmVUb0FycmF5KGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheV8xLnNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxufVxuZXhwb3J0cy5mcm9tQXJyYXkgPSBmcm9tQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZXIvYXN5bmNcIik7XG52YXIgaXNOdW1lcmljXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc051bWVyaWNcIik7XG5mdW5jdGlvbiBpbnRlcnZhbChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgeyBwZXJpb2QgPSAwOyB9XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICBpZiAoIWlzTnVtZXJpY18xLmlzTnVtZXJpYyhwZXJpb2QpIHx8IHBlcmlvZCA8IDApIHtcbiAgICAgICAgcGVyaW9kID0gMDtcbiAgICB9XG4gICAgaWYgKCFzY2hlZHVsZXIgfHwgdHlwZW9mIHNjaGVkdWxlci5zY2hlZHVsZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgcGVyaW9kLCB7IHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIGNvdW50ZXI6IDAsIHBlcmlvZDogcGVyaW9kIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfSk7XG59XG5leHBvcnRzLmludGVydmFsID0gaW50ZXJ2YWw7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgY291bnRlciA9IHN0YXRlLmNvdW50ZXIsIHBlcmlvZCA9IHN0YXRlLnBlcmlvZDtcbiAgICBzdWJzY3JpYmVyLm5leHQoY291bnRlcik7XG4gICAgdGhpcy5zY2hlZHVsZSh7IHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIGNvdW50ZXI6IGNvdW50ZXIgKyAxLCBwZXJpb2Q6IHBlcmlvZCB9LCBwZXJpb2QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVyL2FzeW5jXCIpO1xuZnVuY3Rpb24gZGVib3VuY2VUaW1lKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpKTsgfTtcbn1cbmV4cG9ydHMuZGVib3VuY2VUaW1lID0gZGVib3VuY2VUaW1lO1xudmFyIERlYm91bmNlVGltZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIERlYm91bmNlVGltZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRGVib3VuY2VUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1ZVRpbWUsIHRoaXMuc2NoZWR1bGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lT3BlcmF0b3I7XG59KCkpO1xudmFyIERlYm91bmNlVGltZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlVGltZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgX3RoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1ZVRpbWUsIHRoaXMpKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWROZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmRlYm91bmNlZE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMubGFzdFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGxhc3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmNsZWFyRGVib3VuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlYm91bmNlZFN1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZGVib3VuY2VkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRlYm91bmNlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlci5kZWJvdW5jZWROZXh0KCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJvdW5jZVRpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbnZhciBGaWx0ZXJPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmlsdGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWx0ZXJTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWx0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRmlsdGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1hcE9wZXJhdG9yID0gTWFwT3BlcmF0b3I7XG52YXIgTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBJbm5lclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9Jbm5lclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0XCIpO1xudmFyIG1hcF8xID0gcmVxdWlyZShcIi4vbWFwXCIpO1xudmFyIGZyb21fMSA9IHJlcXVpcmUoXCIuLi9vYnNlcnZhYmxlL2Zyb21cIik7XG5mdW5jdGlvbiBzd2l0Y2hNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UucGlwZShzd2l0Y2hNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIGZyb21fMS5mcm9tKHByb2plY3QoYSwgaSkpLnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChiLCBpaSkgeyByZXR1cm4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpOyB9KSk7IH0pKTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBTd2l0Y2hNYXBPcGVyYXRvcihwcm9qZWN0KSk7IH07XG59XG5leHBvcnRzLnN3aXRjaE1hcCA9IHN3aXRjaE1hcDtcbnZhciBTd2l0Y2hNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dpdGNoTWFwT3BlcmF0b3IocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBTd2l0Y2hNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFN3aXRjaE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0KSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpdGNoTWFwT3BlcmF0b3I7XG59KCkpO1xudmFyIFN3aXRjaE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTd2l0Y2hNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0KHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbm5lclN1YihyZXN1bHQsIHZhbHVlLCBpbmRleCk7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5faW5uZXJTdWIgPSBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpbm5lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmliZXIgPSBuZXcgSW5uZXJTdWJzY3JpYmVyXzEuSW5uZXJTdWJzY3JpYmVyKHRoaXMsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICBpZiAodGhpcy5pbm5lclN1YnNjcmlwdGlvbiAhPT0gaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcy5pbm5lclN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFpbm5lclN1YnNjcmlwdGlvbiB8fCBpbm5lclN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLnJlbW92ZShpbm5lclN1Yik7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIFN3aXRjaE1hcFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpbnB1dFtpKytdKTtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBzdWIuYWRkKHRoaXMuc2NoZWR1bGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVBcnJheSA9IHNjaGVkdWxlQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBpdGVyYXRvcjtcbiAgICAgICAgc3ViLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgJiYgdHlwZW9mIGl0ZXJhdG9yLnJldHVybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBpbnB1dFtpdGVyYXRvcl8xLml0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZG9uZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHJlc3VsdC5kb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlSXRlcmFibGUgPSBzY2hlZHVsZUl0ZXJhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVJdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gaW5wdXRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdKCk7XG4gICAgICAgICAgICBzdWIuYWRkKG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSkpOyB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSkpOyB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSkpOyB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlT2JzZXJ2YWJsZSA9IHNjaGVkdWxlT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG5mdW5jdGlvbiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5wdXQudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTtcbiAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVQcm9taXNlID0gc2NoZWR1bGVQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVQcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNjaGVkdWxlT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVPYnNlcnZhYmxlXCIpO1xudmFyIHNjaGVkdWxlUHJvbWlzZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVQcm9taXNlXCIpO1xudmFyIHNjaGVkdWxlQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlQXJyYXlcIik7XG52YXIgc2NoZWR1bGVJdGVyYWJsZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVJdGVyYWJsZVwiKTtcbnZhciBpc0ludGVyb3BPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlXCIpO1xudmFyIGlzUHJvbWlzZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNQcm9taXNlXCIpO1xudmFyIGlzQXJyYXlMaWtlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5TGlrZVwiKTtcbnZhciBpc0l0ZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0l0ZXJhYmxlXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZV8xLmlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlXzEuc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZV8xLmlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2VfMS5zY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VfMS5pc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5XzEuc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlXzEuaXNJdGVyYWJsZShpbnB1dCkgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGVfMS5zY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCB8fCBpbnB1dCkgKyAnIGlzIG5vdCBvYnNlcnZhYmxlJyk7XG59XG5leHBvcnRzLnNjaGVkdWxlZCA9IHNjaGVkdWxlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuQWN0aW9uID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FjdGlvblwiKTtcbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgfHwgdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9ICEhZSAmJiBlIHx8IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uXzEuQWN0aW9uKSk7XG5leHBvcnRzLkFzeW5jQWN0aW9uID0gQXN5bmNBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vU2NoZWR1bGVyXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlcl8xLlNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUuc2NoZWR1bGUod29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgd29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oU2NoZWR1bGVyXzEuU2NoZWR1bGVyKSk7XG5leHBvcnRzLkFzeW5jU2NoZWR1bGVyID0gQXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBc3luY0FjdGlvbl8xID0gcmVxdWlyZShcIi4vQXN5bmNBY3Rpb25cIik7XG52YXIgQXN5bmNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuL0FzeW5jU2NoZWR1bGVyXCIpO1xuZXhwb3J0cy5hc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uXzEuQXN5bmNBY3Rpb24pO1xuZXhwb3J0cy5hc3luYyA9IGV4cG9ydHMuYXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydHMuZ2V0U3ltYm9sSXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcjtcbmV4cG9ydHMuaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuZXhwb3J0cy4kJGl0ZXJhdG9yID0gZXhwb3J0cy5pdGVyYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yeFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgTWF0aC5yYW5kb20oKTtcbn0pKCk7XG5leHBvcnRzLiQkcnhTdWJzY3JpYmVyID0gZXhwb3J0cy5yeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yID0gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKGVycm9ycykge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnMgP1xuICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJykgOiAnJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG59KSgpO1xuZXhwb3J0cy5VbnN1YnNjcmlwdGlvbkVycm9yID0gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gY2FuUmVwb3J0RXJyb3Iob2JzZXJ2ZXIpIHtcbiAgICB3aGlsZSAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF9hID0gb2JzZXJ2ZXIsIGNsb3NlZF8xID0gX2EuY2xvc2VkLCBkZXN0aW5hdGlvbiA9IF9hLmRlc3RpbmF0aW9uLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQ7XG4gICAgICAgIGlmIChjbG9zZWRfMSB8fCBpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5jYW5SZXBvcnRFcnJvciA9IGNhblJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FuUmVwb3J0RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBob3N0UmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRocm93IGVycjsgfSwgMCk7XG59XG5leHBvcnRzLmhvc3RSZXBvcnRFcnJvciA9IGhvc3RSZXBvcnRFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvc3RSZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbmV4cG9ydHMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkgfHwgKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcic7IH0pOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNBcnJheUxpa2UgPSAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5TGlrZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0Z1bmN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNJbnRlcm9wT2JzZXJ2YWJsZSA9IGlzSW50ZXJvcE9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0ludGVyb3BPYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xuZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXRbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzSXRlcmFibGUgPSBpc0l0ZXJhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi9pc0FycmF5XCIpO1xuZnVuY3Rpb24gaXNOdW1lcmljKHZhbCkge1xuICAgIHJldHVybiAhaXNBcnJheV8xLmlzQXJyYXkodmFsKSAmJiAodmFsIC0gcGFyc2VGbG9hdCh2YWwpICsgMSkgPj0gMDtcbn1cbmV4cG9ydHMuaXNOdW1lcmljID0gaXNOdW1lcmljO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNOdW1lcmljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnNjaGVkdWxlID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc1NjaGVkdWxlciA9IGlzU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL2lkZW50aXR5XCIpO1xuZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHlfMS5pZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5waXBlRnJvbUFycmF5ID0gcGlwZUZyb21BcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3Vic2NyaWJlVG9BcnJheV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9BcnJheVwiKTtcbnZhciBzdWJzY3JpYmVUb1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvUHJvbWlzZVwiKTtcbnZhciBzdWJzY3JpYmVUb0l0ZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb0l0ZXJhYmxlXCIpO1xudmFyIHN1YnNjcmliZVRvT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9PYnNlcnZhYmxlXCIpO1xudmFyIGlzQXJyYXlMaWtlXzEgPSByZXF1aXJlKFwiLi9pc0FycmF5TGlrZVwiKTtcbnZhciBpc1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuL2lzUHJvbWlzZVwiKTtcbnZhciBpc09iamVjdF8xID0gcmVxdWlyZShcIi4vaXNPYmplY3RcIik7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUbyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvT2JzZXJ2YWJsZV8xLnN1YnNjcmliZVRvT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5TGlrZV8xLmlzQXJyYXlMaWtlKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvQXJyYXlfMS5zdWJzY3JpYmVUb0FycmF5KHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZV8xLmlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Byb21pc2VfMS5zdWJzY3JpYmVUb1Byb21pc2UocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtpdGVyYXRvcl8xLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9JdGVyYWJsZV8xLnN1YnNjcmliZVRvSXRlcmFibGUocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGlzT2JqZWN0XzEuaXNPYmplY3QocmVzdWx0KSA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBcIidcIiArIHJlc3VsdCArIFwiJ1wiO1xuICAgICAgICB2YXIgbXNnID0gXCJZb3UgcHJvdmlkZWQgXCIgKyB2YWx1ZSArIFwiIHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC5cIlxuICAgICAgICAgICAgKyAnIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBBcnJheSwgb3IgSXRlcmFibGUuJztcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlW2l0ZXJhdG9yXzEuaXRlcmF0b3JdKCk7XG4gICAgZG8ge1xuICAgICAgICB2YXIgaXRlbSA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uZG9uZSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGl0ZW0udmFsdWUpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9JdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL29ic2VydmFibGVcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdmFyIG9icyA9IG9ialtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0oKTtcbiAgICBpZiAodHlwZW9mIG9icy5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH1cbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb09ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSlcbiAgICAgICAgLnRoZW4obnVsbCwgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKTtcbiAgICByZXR1cm4gc3Vic2NyaWJlcjtcbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Byb21pc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSW5uZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vSW5uZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb1wiKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHN1YnNjcmliZVRvUmVzdWx0KG91dGVyU3Vic2NyaWJlciwgcmVzdWx0LCBvdXRlclZhbHVlLCBvdXRlckluZGV4LCBpbm5lclN1YnNjcmliZXIpIHtcbiAgICBpZiAoaW5uZXJTdWJzY3JpYmVyID09PSB2b2lkIDApIHsgaW5uZXJTdWJzY3JpYmVyID0gbmV3IElubmVyU3Vic2NyaWJlcl8xLklubmVyU3Vic2NyaWJlcihvdXRlclN1YnNjcmliZXIsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpOyB9XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlKGlubmVyU3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVUb18xLnN1YnNjcmliZVRvKHJlc3VsdCkoaW5uZXJTdWJzY3JpYmVyKTtcbn1cbmV4cG9ydHMuc3Vic2NyaWJlVG9SZXN1bHQgPSBzdWJzY3JpYmVUb1Jlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUmVzdWx0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZlclwiKTtcbmZ1bmN0aW9uIHRvU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgaWYgKG5leHRPck9ic2VydmVyKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuZXh0T3JPYnNlcnZlciAmJiAhZXJyb3IgJiYgIWNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIoT2JzZXJ2ZXJfMS5lbXB0eSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG5leHBvcnRzLnRvU3Vic2NyaWJlciA9IHRvU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvU3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmlzRGVidWcgPSBleHBvcnRzLkRFQlVHID0gZXhwb3J0cy5VUERBVEVfSU5URVJWQUwgPSBleHBvcnRzLlBPUlQgPSBleHBvcnRzLklQID0gdm9pZCAwO1xyXG5leHBvcnRzLklQID0gXCIxOTIuMTY4LjAuNzVcIjsgLy8gXCJsb2NhbGhvc3RcIjsgLy8gXCIxOTIuMTY4LjAuNzVcIjtcclxuZXhwb3J0cy5QT1JUID0gXCI4MDgwXCI7XHJcbmV4cG9ydHMuVVBEQVRFX0lOVEVSVkFMID0gNjA7IC8vIG1pbGxpc2Vjb25kc1xyXG5leHBvcnRzLkRFQlVHID0gdHJ1ZTtcclxuZXhwb3J0cy5pc0RlYnVnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwb3J0cy5ERUJVRzsgfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvYmFja2VuZFwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvY2hhbm5lbFwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvY29tbXVuaWNhdGlvblwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvaW5pdFwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvbWVkaWFcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL3N0YXRlXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy91bml0eVwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQnJvYWRjYXN0aW5nQWdlbnQgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIEJyb2FkY2FzdGluZ0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0aW5nQWdlbnQoaWQsIGNvbW11bmljYXRpb25DaGFubmVsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHV0aWxzXzEuZ2VuZXJhdGVJZCg0LCA0KTsgfVxyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICAvLyBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLnBhcnRpY2lwYW50cyA9IFtdO1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE91dHB1dFxyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE1lc3NhZ2luZyBVdGlsc1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb21tU3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaWQgPSBfYS5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWQgIT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRDb21tU3ViamVjdCgpLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvID0gX2EudG87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8gPT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZW5kSW5kaXZpZHVhbFJlcXVlc3QgPSBmdW5jdGlvbiAoZGF0YSwgdG8pIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluZGl2aWR1YWxcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICB0bzogdG8sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNpcGFudCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5wYXJ0aWNpcGFudHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZFBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljaXBhbnQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50cyA9IF90aGlzLmdldFBhcnRpY2lwYW50cygpO1xyXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBwYXJ0aWNpcGFudHMuZmlsdGVyKGZ1bmN0aW9uIChfaWQpIHsgcmV0dXJuIF9pZCAhPT0gaWQ7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QubmV4dChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcnRpY2lwYW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50cyA9IF9fc3ByZWFkQXJyYXlzKF90aGlzLnBhcnRpY2lwYW50cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGFudHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTYWx1dGF0aW9uc1xyXG4gICAgICAgIHRoaXMuZ3JlZXRpbmdIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQnJvYWRjYXN0IFRlc3QgIzJcIik7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0aWNpcGFudHMgPSBfdGhpcy5nZXRQYXJ0aWNpcGFudHMoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFwiZ3JlZXRpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQnJvYWRjYXN0IFRlc3QgIzNcIik7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJHcmVldGluZ1wiLCBtZXNzYWdlXSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNpcGFudHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJJRDogXCIgKyBfdGhpcy5pZCArIFwiLCBBZGQgUGFydGljaXBhbnRcIik7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZFBhcnRpY2lwYW50KGlkKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChfdGhpcy5zZW5kR3JlZXRpbmcsIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mYXJld2VsbEhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX3RoaXMuZ2V0UGFydGljaXBhbnRzKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBcImZhcmV3ZWxsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNpcGFudHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVQYXJ0aWNpcGFudChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRHcmVldGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImdyZWV0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRGYXJld2VsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZhcmV3ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbW1TdWJqZWN0ID0gY29tbXVuaWNhdGlvbkNoYW5uZWw7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJCcm9hZGNhc3QgVGVzdCAjMVwiKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJCcm9hZGNhc3QgVGVzdCAjNFwiLCBjb21tdW5pY2F0aW9uQ2hhbm5lbF0pO1xyXG4gICAgICAgIHRoaXMuY29tbVN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoW1wiQnJvYWRjYXN0IFRlc3QgIzVcIiwgbV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QoKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJCcm9hZGNhc3QgVGVzdCAjNlwiLCBtXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21tU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm1lc3NhZ2VIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldENvbW1TdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMuZ3JlZXRpbmdIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJCcm9hZGNhc3Q6IFwiLCBtKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQnJvYWRjYXN0aW5nQWdlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQnJvYWRjYXN0aW5nQWdlbnQgPSBCcm9hZGNhc3RpbmdBZ2VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DbGllbnQgPSB2b2lkIDA7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIGJyb2FkY2FzdF8xID0gcmVxdWlyZShcIi4vYnJvYWRjYXN0XCIpO1xyXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9jb25uZWN0aW9uLW1hbmFnZXJcIik7XHJcbnZhciBydGNfbWVzc2FnaW5nX2FnZW50XzEgPSByZXF1aXJlKFwiLi9ydGMtbWVzc2FnaW5nLWFnZW50XCIpO1xyXG52YXIgQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2xpZW50KHN1YmplY3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XHJcbiAgICAgICAgdGhpcy5pZCA9IHV0aWxzXzEuZ2VuZXJhdGVJZCg0LCA0KTtcclxuICAgICAgICAvLyBDaGFubmVsc1xyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5uZWxzID0ge307XHJcbiAgICAgICAgdGhpcy5zdHJlYW1zID0ge307XHJcbiAgICAgICAgLy8gU3ViamVjdHNcclxuICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgIHRoaXMuX0xvY2FsU3RyZWFtU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE91dHB1dFxyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PblN0cmVhbVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMub25Db25uZWN0aW9uQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBjb25uZWN0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5vbmRhdGFjaGFubmVsID0gX3RoaXMub25EYXRhQ2hhbm5lbEhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9udHJhY2sgPSBfdGhpcy5vblRyYWNrSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhQ2hhbm5lbCA9IGNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwoXCJkYXRhLWNoYW5uZWwtXCIgKyBpZCk7XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiT3BlbmVkIENoYW5uZWxcIik7IH07XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChKU09OLnN0cmluZ2lmeShldikpOyB9O1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IF90aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChfdGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQ29ubmVjdGVkID0gZnVuY3Rpb24gKGlkLCBjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25jb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIkNvbm5lY3Rpb24gXCIgKyBpZCArIFwiLCBOb3cgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc09mZmVyID0gKChfYSA9IGNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIm9mZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2ZmZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFN0cmVhbVxyXG4gICAgICAgIHRoaXMub25Mb2NhbFN0cmVhbUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IF90aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3Rpb25zO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkU3RyZWFtVG9Db25uZWN0aW9uKGNvbm5lY3Rpb25zW2lkXSwgc3RyZWFtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW1Ub0Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY29ubmVjdGlvbiwgc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHJldHVybiBjb25uZWN0aW9uLmFkZFRyYWNrKHQsIHN0cmVhbSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQsIHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnN0cmVhbXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0gPSBbXTtcclxuICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0ucHVzaChzdHJlYW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblRyYWNrSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIFRyYWNrIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBldi5zdHJlYW1zWzBdO1xyXG4gICAgICAgICAgICBfdGhpcy5hZGRTdHJlYW0oaWQsIHN0cmVhbSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU3RyZWFtU3ViamVjdF8ubmV4dChbaWQsIHN0cmVhbV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgLy8gRGF0YSBDaGFubmVsXHJcbiAgICAgICAgdGhpcy5zZW5kRGF0YVRvQ2hhbm5lbCA9IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbCA9IF90aGlzLmRhdGFDaGFubmVsc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY2hhbm5lbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2hhbm5lbC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3REYXRhID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gX3RoaXMuZGF0YUNoYW5uZWxzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBjaGFubmVscykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBjaGFubmVsc1tpZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPcGVuID0gY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIjtcclxuICAgICAgICAgICAgICAgIGlmICghY2hhbm5lbCB8fCAhaXNPcGVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRGF0YUNoYW5uZWxIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgT24gRGF0YSBDaGFubmVsIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBkYXRhQ2hhbm5lbCA9IGV2LmNoYW5uZWw7XHJcbiAgICAgICAgICAgIGlmICghZGF0YUNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IF90aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRhdGFDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcclxuICAgICAgICAgICAgX3RoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3RfLm5leHQoW2lkLCBkYXRhQ2hhbm5lbF0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGV2LmRhdGE7XHJcbiAgICAgICAgICAgIGlmICghbWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KFtpZCwgbWVzc2FnZV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQWdlbnRzXHJcbiAgICAgICAgdGhpcy5Ccm9hZGNhc3RpbmdBZ2VudCA9IG5ldyBicm9hZGNhc3RfMS5Ccm9hZGNhc3RpbmdBZ2VudCh0aGlzLmlkLCB0aGlzLnN1YmplY3QpO1xyXG4gICAgICAgIHRoaXMuUlRDTWVzc2FnaW5nQWdlbnQgPSBuZXcgcnRjX21lc3NhZ2luZ19hZ2VudF8xLlJUQ01lc3NhZ2luZ0FnZW50KHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQpO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbk1hbmFnZXIgPSBuZXcgY29ubmVjdGlvbl9tYW5hZ2VyXzEuQ29ubmVjdGlvbk1hbmFnZXIodGhpcy5SVENNZXNzYWdpbmdBZ2VudCk7XHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZSh0aGlzLm9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbk1hbmFnZXIuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25Db25uZWN0aW9uQ3JlYXRlZEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuX0xvY2FsU3RyZWFtU3ViamVjdC5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLkJyb2FkY2FzdGluZ0FnZW50LnNlbmRHcmVldGluZygpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNsaWVudFwiLCB0aGlzXSk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gY29uc29sZS53YXJuKFwiQ2xpZW50OiBcIiwgbSk7IH0pO1xyXG4gICAgfVxyXG4gICAgQ2xpZW50LmNyZWF0ZUNsaWVudCA9IGZ1bmN0aW9uIChzdWJqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnQoc3ViamVjdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENsaWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DbGllbnQgPSBDbGllbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29ubmVjdGlvbk1hbmFnZXIgPSB2b2lkIDA7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uZmlndXJhdGlvbiA9IHtcclxuICAgIGljZVNlcnZlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybHM6IFtcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4xLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4yLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4zLmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW40LmwuZ29vZ2xlLmNvbToxOTMwMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4wMS5zaXBwaG9uZS5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmVraWdhLm5ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uZndkbmV0Lm5ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uaWRlYXNpcC5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLmlwdGVsLm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ucml4dGVsZWNvbS5zZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uc2NobHVuZC5kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW5zZXJ2ZXIub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5zb2Z0am95cy5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnZvaXBhcm91bmQuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b2lwYnVzdGVyLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm9pcHN0dW50LmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm94Z3JhdGlhLm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ueHRlbi5jb21cIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxudmFyIENvbm5lY3Rpb25NYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbk1hbmFnZXIobWEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubWEgPSBtYTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uc1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZDtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgQ3JlYXRlIENvbm5lY3Rpb24gaW4gXCIgKyBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZCk7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICBfdGhpcy5jb25uZWN0aW9uc1tpZF0gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gX3RoaXMub25JQ0VDYW5kaWRhdGVIYW5kbGVyKGlkKTtcclxuICAgICAgICAgICAgX3RoaXMuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3QubmV4dChbaWQsIGNvbm5lY3Rpb25dKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBBZGQvUmVtb3ZlIFBhcnRpY2lwYW50c1xyXG4gICAgICAgIHRoaXMub25BZGRQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkICsgXCIgT24gQWRkIFBhcnRpY2lwYW50IEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBvbGRDb25uZWN0aW9uID0gX3RoaXMuY29ubmVjdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBpZiAob2xkQ29ubmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jcmVhdGVDb25uZWN0aW9uKGlkKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZU9mZmVyKClcclxuICAgICAgICAgICAgICAgIC50aGVuKF90aGlzLm1hLm9uT2ZmZXJDcmVhdGVkSGFuZGxlcihpZCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJDb3VsZG4ndCBjcmVhdGUgb2ZmZXIgZm9yIGlkIFwiICsgaWQsIGVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTZXNzaW9uIERlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5vblNldExvY2FsRGVzY3JpcHRpb25IYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY29ubmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uU2V0UmVtb3RlRGVzY3JpcHRpb25IYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgc2Vzc2lvbkRlc2NyaXB0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiU2V0dGluZyByZW1vdGUgZGVzY3JpcHRpb24gaW4gXCIgKyBfdGhpcy5tYS5icm9hZGNhc3RpbmdBZ2VudC5pZCArIFwiIGZvciBcIiArIGlkKTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gQW5zd2VyXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX3RoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyKGlkLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT2ZmZXJcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvbiBMb2dpc3RpY3NcclxuICAgICAgICB0aGlzLm9uSUNFQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIElDRSBDYW5kaWRhdGUgSGFuZGxlclwiKTtcclxuICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IGV2LmNhbmRpZGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLm1hLm9uQ2FuZGlkYXRlQ3JlYXRlZEhhbmRsZXIoaWQpKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQW5zd2VySGFuZGxlciA9IGZ1bmN0aW9uIChpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gX3RoaXMuY3JlYXRlQ29ubmVjdGlvbihpZCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUFuc3dlcigpXHJcbiAgICAgICAgICAgICAgICAudGhlbihfdGhpcy5tYS5vbkFuc3dlckNyZWF0ZWRIYW5kbGVyKGlkKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNvdWxkbid0IGNyZWF0ZSBhbnN3ZXIgaW4gSUQgXCIgKyBpZCwgZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQWRkQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2VbMF0sIGNhbmRpZGF0ZSA9IG1lc3NhZ2VbMV07XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJBZGQgQ2FuZGlkYXRlXCIsIGNhbmRpZGF0ZV0pO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShjYW5kaWRhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tYS5PbkFkZFBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5tYS5PblJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vblJlbW92ZVBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgLy8gdGhpcy5tYS5PbkNyZWF0ZUFuc3dlclN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5zdWJzY3JpYmUodGhpcy5vblNldExvY2FsRGVzY3JpcHRpb25IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24uc3Vic2NyaWJlKHRoaXMub25TZXRSZW1vdGVEZXNjcmlwdGlvbkhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25BZGRDYW5kaWRhdGVTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQWRkQ2FuZGlkYXRlSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gY29uc29sZS53YXJuKFwiQ29ubmVjdGlvbiBNYW5hZ2VyXCIsIG0pOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBDb25uZWN0aW9uTWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Db25uZWN0aW9uTWFuYWdlciA9IENvbm5lY3Rpb25NYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJUQ01lc3NhZ2luZ0FnZW50ID0gdm9pZCAwO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIFJUQ01lc3NhZ2luZ0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUlRDTWVzc2FnaW5nQWdlbnQoYnJvYWRjYXN0aW5nQWdlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0aW5nQWdlbnQgPSBicm9hZGNhc3RpbmdBZ2VudDtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuT25BZGRQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uUmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PblNldExvY2FsRGVzY3JpcHRpb24gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uQWRkQ2FuZGlkYXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIEFkZC9SZW1vdmUgUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5PbkFkZFBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgX3RoaXMuT25SZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QubmV4dChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBPZmZlclxyXG4gICAgICAgIHRoaXMuZ2V0T2ZmZXJTdWJqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnRcclxuICAgICAgICAgICAgICAgIC5nZXRJbmRpdmlkdWFsTWVzc2FnZUNvbW1TdWJqZWN0KClcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX2EuZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnR5cGUgPT09IFwib2ZmZXJcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbk9mZmVyQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcclxuICAgICAgICAgICAgICAgIFwiT2ZmZXIgZm9yIFwiICsgaWQgKyBcIiBDcmVhdGVkIGluIFwiICsgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuaWQsXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldExvY2FsRGVzY3JpcHRpb24ubmV4dChbaWQsIHNlc3Npb25EZXNjcmlwdGlvbl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldExvY2FsQW5kU2VuZE1lc3NhZ2Ugc2VuZGluZyBtZXNzYWdlXCIsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LnNlbmRJbmRpdmlkdWFsUmVxdWVzdChzZXNzaW9uRGVzY3JpcHRpb24sIGlkKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25PZmZlckhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldFJlbW90ZURlc2NyaXB0aW9uLm5leHQoW2lkLCBkYXRhXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBBbnN3ZXJcclxuICAgICAgICB0aGlzLmdldEFuc3dlclN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJhbnN3ZXJcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkFuc3dlckNyZWF0ZWRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXHJcbiAgICAgICAgICAgICAgICBcIkFuc3dlciBmb3IgXCIgKyBpZCArIFwiIENyZWF0ZWQgaW4gXCIgKyBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5pZCxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5uZXh0KFtpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2VcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHNlc3Npb25EZXNjcmlwdGlvbiwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbkFuc3dlckhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICBfdGhpcy5PblNldFJlbW90ZURlc2NyaXB0aW9uLm5leHQoW2lkLCBkYXRhXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDYW5kaWRhdGVcclxuICAgICAgICB0aGlzLmdldENhbmRpZGF0ZVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJjYW5kaWRhdGVcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkNhbmRpZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gbmV3IFJUQ0ljZUNhbmRpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBkYXRhLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBkYXRhLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uQWRkQ2FuZGlkYXRlU3ViamVjdC5uZXh0KFtpZCwgY2FuZGlkYXRlXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWNlY2FuZGlkYXRlIGV2ZW50OiBcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgICAgIH0sIGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW5kIG9mIGNhbmRpZGF0ZXMuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQ2FuZGlkYXRlQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBpZDogY2FuZGlkYXRlLnNkcE1pZCxcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlLmNhbmRpZGF0ZSxcclxuICAgICAgICAgICAgfSwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5hZGRQYXJ0aWNpcGFudFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25BZGRQYXJ0aWNpcGFudEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0aW5nQWdlbnQucmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldE9mZmVyU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uT2ZmZXJIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldEFuc3dlclN1YmplY3QoKS5zdWJzY3JpYmUodGhpcy5vbkFuc3dlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2FuZGlkYXRlU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uQ2FuZGlkYXRlSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiUlRDLU1lc3NhZ2luZy1BZ2VudDogXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJUQ01lc3NhZ2luZ0FnZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlJUQ01lc3NhZ2luZ0FnZW50ID0gUlRDTWVzc2FnaW5nQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuV2ViU29ja2V0c0FnZW50ID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgV2ViU29ja2V0c0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2ViU29ja2V0c0FnZW50KF9Db21tdW5pY2F0aW9uU3ViamVjdCwgQ29tbXVuaWNhdGlvblN1YmplY3RfKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9Db21tdW5pY2F0aW9uU3ViamVjdCA9IF9Db21tdW5pY2F0aW9uU3ViamVjdDtcclxuICAgICAgICB0aGlzLkNvbW11bmljYXRpb25TdWJqZWN0XyA9IENvbW11bmljYXRpb25TdWJqZWN0XztcclxuICAgICAgICAvLyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5TZW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuSXNXZWJTb2NrZXRSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICAgICAgICB0aGlzLk9uQ2xvc2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5vbklzV2ViU29ja2V0UmVhZHlIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fQ29tbXVuaWNhdGlvblN1YmplY3RcclxuICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2NhblNlbmQgPSBfdGhpcy5jYW5TZW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jYW5TZW5kKVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNhblNlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jYW5TZW5kO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlbmRNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFVSTCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgICAgIG9yaWdpbiA9IG9yaWdpbi5yZXBsYWNlKFwiaHR0cHNcIiwgXCJ3c3NcIikucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25NZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgX3RoaXMuY2FuU2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5Db21tdW5pY2F0aW9uU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25PcGVuSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiV1MgaXMgT3BlblwiKTtcclxuICAgICAgICAgICAgX3RoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3RoaXMuSXNXZWJTb2NrZXRSZWFkeVN1YmplY3QubmV4dChfdGhpcy5pc09wZW4pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLk9uQ2xvc2VTdWJqZWN0Lm5leHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIF90aGlzLndzLnNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRVUkwoKTtcclxuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2VIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud3Mub25vcGVuID0gdGhpcy5vbk9wZW5IYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZUhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5Jc1dlYlNvY2tldFJlYWR5U3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoaXNSZWFkeSkgeyByZXR1cm4gaXNSZWFkeTsgfSkpLnN1YnNjcmliZSh0aGlzLm9uSXNXZWJTb2NrZXRSZWFkeUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGNvbnNvbGUud2FybihcIldlYlNvY2tldHMgQWdlbnQ6IFwiLCBtKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2ViU29ja2V0c0FnZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldlYlNvY2tldHNBZ2VudCA9IFdlYlNvY2tldHNBZ2VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5CYWNrZW5kU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG52YXIgSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuLy8gSW5jb21pbmdcclxudmFyIF9Jbml0U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1JlZnJlc2hTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSURTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIF9Vc2VUVkNoYW5uZWxTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfU2V0TmFtZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gT3V0Z29pbmdcclxudmFyIFRWUHJvZ3JhbVN0YXRlU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxudmFyIE5hbWVzU3RhdGVTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3Qoe30pO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBwb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChlLm1lc3NhZ2UpOyB9KTtcclxufTtcclxudmFyIGdldCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQoZSk7IH0pO1xyXG59O1xyXG52YXIgc2VuZFRWQ2hhbm5lbCA9IGZ1bmN0aW9uIChpZCwgY2hhbm5lbCkge1xyXG4gICAgcmV0dXJuIHBvc3QoZGVmaW5pdGlvbnNfMS5VUkxfVFZfQ0hBTk5FTCwge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxyXG4gICAgfSk7XHJcbn07XHJcbnZhciBnZXROYW1lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBnZXQoZGVmaW5pdGlvbnNfMS5VUkxfTkFNRSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBuYW1lcyA9IGRhdGE7XHJcbiAgICAgICAgTmFtZXNTdGF0ZVN1YmplY3RfLm5leHQobmFtZXMpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBzZW5kTmFtZSA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xyXG4gICAgcmV0dXJuIHBvc3QoZGVmaW5pdGlvbnNfMS5VUkxfTkFNRSwge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgfSk7XHJcbn07XHJcbnZhciBnZXRUVlByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZ2V0KGRlZmluaXRpb25zXzEuVVJMX1RWX0NIQU5ORUwpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IGRhdGE7XHJcbiAgICAgICAgVFZQcm9ncmFtU3RhdGVTdWJqZWN0Xy5uZXh0KHByb2dyYW0pO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBvbkNoYW5uZWxIYW5kbGVyID0gZnVuY3Rpb24gKGNoYW5uZWwpIHtcclxuICAgIHZhciBpZCA9IF9JRFN1YmplY3QuZ2V0VmFsdWUoKTtcclxuICAgIGlmICghaWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgc2VuZFRWQ2hhbm5lbChpZCwgY2hhbm5lbCk7XHJcbn07XHJcbnZhciBvblJlZnJlc2hIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2V0VFZQcm9ncmFtKCk7XHJcbiAgICBnZXROYW1lcygpO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTsgfSk7XHJcbl9Vc2VUVkNoYW5uZWxTdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKG9uQ2hhbm5lbEhhbmRsZXIpO1xyXG5fUmVmcmVzaFN1YmplY3RcclxuICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9KSlcclxuICAgIC5zdWJzY3JpYmUob25SZWZyZXNoSGFuZGxlcik7XHJcbi8vIEV4cG9ydHNcclxudmFyIEJhY2tlbmRTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFja2VuZFNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBJbmNvbWluZ1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX0lEU2J1amVjdCA9IF9JRFN1YmplY3Q7XHJcbiAgICBCYWNrZW5kU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBCYWNrZW5kU2VydmljZS5fUmVmcmVzaFN1YmplY3QgPSBfUmVmcmVzaFN1YmplY3Q7XHJcbiAgICBCYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdCA9IF9Vc2VUVkNoYW5uZWxTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX1NldE5hbWVTdWJqZWN0ID0gX1NldE5hbWVTdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBCYWNrZW5kU2VydmljZS5UVlByb2dyYW1TdGF0ZVN1YmplY3RfID0gVFZQcm9ncmFtU3RhdGVTdWJqZWN0XztcclxuICAgIEJhY2tlbmRTZXJ2aWNlLk5hbWVzU3RhdGVTdWJqZWN0XyA9IE5hbWVzU3RhdGVTdWJqZWN0XztcclxuICAgIEJhY2tlbmRTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkJhY2tlbmRTZXJ2aWNlID0gQmFja2VuZFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL2NoYW5uZWxcIik7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL3N0YXRlXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi9iYWNrZW5kXCIpO1xyXG5iYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuVFZQcm9ncmFtU3RhdGVTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKHByb2dyYW0pIHtcclxuICAgIHJldHVybiBjaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuX1RWUHJvZ3JhbVN1YmplY3QubmV4dChwcm9ncmFtKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzdGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0YXRlL3N0YXRlXCIpO1xyXG52YXIgYmFja2VuZF8xID0gcmVxdWlyZShcIi4uL2JhY2tlbmRcIik7XHJcbmJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5UVlByb2dyYW1TdGF0ZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAocHJvZ3JhbSkge1xyXG4gICAgcmV0dXJuIHN0YXRlXzEuU3RhdGVTZXJ2aWNlLl9UVlByb2dyYW1TdGF0ZVN1YmplY3QubmV4dChwcm9ncmFtKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2hhbm5lbFNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGNvbWJpbmVMYXRlc3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvY29tYmluZUxhdGVzdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbi8qKlxyXG4gKiBDaGFubmVsIE1vZHVsZVxyXG4gKlxyXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFzc2luZyB0aHJvdWdoIG9ubHkgdGhvc2UgaW1hZ2UgZGF0YSBtZXNzYWdlcyB0aGF0XHJcbiAqIGhhdmUgdGhlIGlkIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBjaGFubmVsLlxyXG4gKi9cclxuLy8gSW5wdXRcclxudmFyIF9Jbml0U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1RWUHJvZ3JhbVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxudmFyIF9DdXJyZW50Q2hhbm5lbFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KDEpO1xyXG52YXIgX0ltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIEludGVybmFsXHJcbnZhciBJc0luaXRpYWxpemVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTsgfTtcclxudmFyIGZpbHRlckN1cnJlbnRDaGFubmVsSW1hZ2VEYXRhTWVzc2FnZXMgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBwcm9ncmFtID0gX2FbMF0sIGNoYW5uZWwgPSBfYVsxXSwgdHVwbGUgPSBfYVsyXTtcclxuICAgIHZhciBmcm9tID0gdHVwbGVbMF0sIG1lc3NhZ2UgPSB0dXBsZVsxXTtcclxuICAgIHZhciBpZCA9IHByb2dyYW1bY2hhbm5lbF07XHJcbiAgICBpZiAoIWlkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChpZCAhPT0gZnJvbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5jb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICBfVFZQcm9ncmFtU3ViamVjdCxcclxuICAgIF9DdXJyZW50Q2hhbm5lbFN1YmplY3QsXHJcbiAgICBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QsXHJcbl0pXHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKGZpbHRlckN1cnJlbnRDaGFubmVsSW1hZ2VEYXRhTWVzc2FnZXMpO1xyXG4vLyBFeHRlcm5hbFxyXG52YXIgQ2hhbm5lbFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDaGFubmVsU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBDaGFubmVsU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBDaGFubmVsU2VydmljZS5fVFZQcm9ncmFtU3ViamVjdCA9IF9UVlByb2dyYW1TdWJqZWN0O1xyXG4gICAgQ2hhbm5lbFNlcnZpY2UuX0N1cnJlbnRDaGFubmVsU3ViamVjdCA9IF9DdXJyZW50Q2hhbm5lbFN1YmplY3Q7XHJcbiAgICBDaGFubmVsU2VydmljZS5fSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIENoYW5uZWxTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIHJldHVybiBDaGFubmVsU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5DaGFubmVsU2VydmljZSA9IENoYW5uZWxTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi91bml0eVwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBjaGFubmVsXzEgPSByZXF1aXJlKFwiLi4vY2hhbm5lbFwiKTtcclxuY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgbWFwXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG4vKipcclxuICogTWVzc2FnZXMgQ29taW5nIGludG8gVW5pdHlcclxuICovXHJcbi8vIElucHV0XHJcbnZhciBfTWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9JbWFnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gT3V0cHV0XHJcbnZhciBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGhhbmRsZUluY29taW5nTWVzc2FnZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGlkID0gX2FbMF0sIG1lc3NhZ2UgPSBfYVsxXTtcclxuICAgIHZhciBtID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgbS5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW2UsIFwiQ291bGQgbm90IHBhcnNlIG1lc3NhZ2VcIl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG07XHJcbn07XHJcbnZhciBwb3NpdGlvbk1lc3NhZ2VGaWx0ZXIgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuICEhbSAmJiBtLnR5cGUgPT09IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlBvc2l0aW9uO1xyXG59O1xyXG52YXIgaW1hZ2VNZXNzYWdlRmlsdGVyID0gZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiAhIW0gJiYgbS50eXBlID09PSBkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5JbWFnZURhdGE7XHJcbn07XHJcbnZhciBpbWFnZVN1YmplY3RIYW5kbGVyID0gZnVuY3Rpb24gKGltYWdlKSB7IHJldHVybiAoe1xyXG4gICAgdHlwZTogZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuSW1hZ2VEYXRhLFxyXG4gICAgaW1hZ2U6IGltYWdlLFxyXG59KTsgfTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fTWVzc2FnZVN1YmplY3RcclxuICAgIC5waXBlKG1hcF8xLm1hcChoYW5kbGVJbmNvbWluZ01lc3NhZ2UpLCBmaWx0ZXJfMS5maWx0ZXIocG9zaXRpb25NZXNzYWdlRmlsdGVyKSlcclxuICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pO1xyXG59KTtcclxuX01lc3NhZ2VTdWJqZWN0XHJcbiAgICAucGlwZShtYXBfMS5tYXAoaGFuZGxlSW5jb21pbmdNZXNzYWdlKSwgZmlsdGVyXzEuZmlsdGVyKGltYWdlTWVzc2FnZUZpbHRlcikpXHJcbiAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICBpZiAoIW0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLm5leHQoW20uaWQsIG1dKTtcclxufSk7XHJcbi8vIEV4cG9ydFxyXG52YXIgSW5jb21pbmdNZXNzYWdlU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluY29taW5nTWVzc2FnZVNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgSW5jb21pbmdNZXNzYWdlU2VydmljZS5fTWVzc2FnZVN1YmplY3QgPSBfTWVzc2FnZVN1YmplY3Q7XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLl9JbWFnZVN1YmplY3QgPSBfSW1hZ2VTdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLlBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gUG9zaXRpb25NZXNzYWdlU3ViamVjdF87XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gSW5jb21pbmdNZXNzYWdlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlID0gSW5jb21pbmdNZXNzYWdlU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jaGFubmVsL2NoYW5uZWxcIik7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3VuaXR5L3VuaXR5XCIpO1xyXG52YXIgaW5jb21pbmdfMSA9IHJlcXVpcmUoXCIuLi9pbmNvbWluZ1wiKTtcclxuaW5jb21pbmdfMS5JbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBjaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuX0ltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG5pbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gdW5pdHlfMS5Vbml0eVNlcnZpY2UuX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3QubmV4dChtZXNzYWdlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2luY29taW5nL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG5yZXF1aXJlKFwiLi9vdXRnb2luZy9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxucmVxdWlyZShcIi4vcnRjL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG5yZXF1aXJlKFwiLi93cy9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9iYWNrZW5kL2JhY2tlbmRcIik7XHJcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5pdC9pbml0XCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tZWRpYS9tZWRpYVwiKTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi8uLi9ydGMvcnRjXCIpO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi9vdXRnb2luZ1wiKTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlN0YXJ0TWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gaW5pdF8xLkluaXRTZXJ2aWNlLl9Jc0dhbWVMb2FkZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbn0pO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdC5uZXh0KDEpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlByZXNlbnRNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fU2hhcmVTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG4vKipcclxuICogTWVzc2FnZXMgR29pbmcgb3V0IG9mIFVuaXR5XHJcbiAqL1xyXG4vLyBJbnB1dFxyXG52YXIgX1Jhd01lc3NhZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSW1hZ2VNZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBTdGFydE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUHJlc2VudE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEltYWdlTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGdlbmVyYXRlRmlsdGVyID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gISFtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSA9PT0gdHlwZTtcclxufTsgfTtcclxudmFyIHJhd01lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHZhciBwYXJzZWRNZXNzYWdlID0gbnVsbDtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcIkNvdWxkIG5vdCBQYXJzZSBNZXNzYWdlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJzZWRNZXNzYWdlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KHBhcnNlZE1lc3NhZ2UpO1xyXG59O1xyXG52YXIgaW1hZ2VIYW5kbGVyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYVswXSwgaW1hZ2UgPSBfYVsxXTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fUmF3TWVzc2FnZVN1YmplY3Quc3Vic2NyaWJlKHJhd01lc3NhZ2VIYW5kbGVyKTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlN0YXJ0KSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gU3RhcnRNZXNzYWdlU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbk1lc3NhZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihnZW5lcmF0ZUZpbHRlcihkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5QcmVzZW50KSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkZ1bGxTY3JlZW4pKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBGdWxsU2NyZWVuTWVzc2FnZVN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUG9zaXRpb24pKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuLy8gRGVidWdnaW5nXHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJPdXRnb2luZyBNZXNzYWdlIFNlcnZpY2U6IFwiLCBtKTsgfSk7XHJcblByZXNlbnRNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3V0Z29pbmdNZXNzYWdlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9SYXdNZXNzYWdlU3ViamVjdCA9IF9SYXdNZXNzYWdlU3ViamVjdDtcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX0ltYWdlTWVzc2FnZVN1YmplY3QgPSBfSW1hZ2VNZXNzYWdlU3ViamVjdDtcclxuICAgIC8vIElPXHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLl9JRFN1YmplY3RfID0gX0lEU3ViamVjdF87XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuTWVzc2FnZVN1YmplY3RfID0gTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5TdGFydE1lc3NhZ2VTdWJqZWN0XyA9IFN0YXJ0TWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5QcmVzZW50TWVzc2FnZVN1YmplY3RfID0gUHJlc2VudE1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0XyA9IEZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gUG9zaXRpb25NZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkltYWdlTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgaW5jb21pbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbmNvbWluZy9pbmNvbWluZ1wiKTtcclxudmFyIHdzXzEgPSByZXF1aXJlKFwiLi4vLi4vd3Mvd3NcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi9ydGNcIik7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBpbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuX01lc3NhZ2VTdWJqZWN0Lm5leHQobSk7XHJcbn0pO1xyXG5ydGNfMS5SVENTZXJ2aWNlLlVwZGF0ZVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBiYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuX1JlZnJlc2hTdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgd3NfMS5XU1NlcnZpY2UuX0NvbW11bmljYXRpb25TdWJqZWN0Lm5leHQobSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJUQ1NlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGRlYm91bmNlVGltZV8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2RlYm91bmNlVGltZVwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIHN3aXRjaE1hcF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcFwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjbGllbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvY2xpZW50XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIF9Ccm9hZGNhc3RTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQ29tbXVuaWNhdGlvblN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gT3V0cHV0XHJcbnZhciBDb21tdW5pY2F0aW9uU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIENsaWVudFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIElEU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgVXBkYXRlU3RhdGVTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsaWVudCA9IGNsaWVudF8xLkNsaWVudC5jcmVhdGVDbGllbnQoQ29tbXVuaWNhdGlvblN1YmplY3RfKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHdpbmRvdy5jbGllbnQgPSBjbGllbnQ7XHJcbiAgICBDbGllbnRTdWJqZWN0Xy5uZXh0KGNsaWVudCk7XHJcbiAgICBfSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTtcclxuICAgIC8vIERlYnVnU3ViamVjdF8ubmV4dChcIlJlbW90ZVwiKTtcclxuICAgIElEU3ViamVjdF8ubmV4dChjbGllbnQuaWQpO1xyXG59O1xyXG52YXIgaXNJbml0aWFsaXplZEZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9Jc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9O1xyXG52YXIgb25EYXRhQ2hhbm5lbEhhbmRsZXIgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KG0pO1xyXG4gICAgT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pO1xyXG59O1xyXG52YXIgb25Ccm9hZGNhc3RIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIC8vIERlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgIHZhciBjbGllbnQgPSBDbGllbnRTdWJqZWN0Xy5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKCFjbGllbnQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY2xpZW50LmJyb2FkY2FzdERhdGEobWVzc2FnZSk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShpbml0KTtcclxuQ2xpZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuICEhYzsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoY2xpZW50KSB7IHJldHVybiBjbGllbnQuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XzsgfSkpLnN1YnNjcmliZShvbkRhdGFDaGFubmVsSGFuZGxlcik7XHJcbkNsaWVudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiAhIWM7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKGNsaWVudCkgeyByZXR1cm4gY2xpZW50Lk9uRGF0YUNoYW5uZWxTdWJqZWN0XzsgfSkpLnN1YnNjcmliZShjb25zb2xlLndhcm4pO1xyXG5fQnJvYWRjYXN0U3ViamVjdC5zdWJzY3JpYmUob25Ccm9hZGNhc3RIYW5kbGVyKTtcclxuX0NvbW11bmljYXRpb25TdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gQ29tbXVuaWNhdGlvblN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5Db21tdW5pY2F0aW9uU3ViamVjdF8ucGlwZShkZWJvdW5jZVRpbWVfMS5kZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBVcGRhdGVTdGF0ZVN1YmplY3RfLm5leHQoKTtcclxufSk7XHJcbkNsaWVudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiAhIWM7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKGNsaWVudCkgeyByZXR1cm4gY2xpZW50LkRlYnVnU3ViamVjdF87IH0pKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJSVEMgU2VydmljZTogXCIsIG0pOyB9KTtcclxuLy8gRXhwb3J0c1xyXG52YXIgUlRDU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJUQ1NlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICBSVENTZXJ2aWNlLl9Jbml0U3ViamVjdCA9IF9Jbml0U3ViamVjdDtcclxuICAgIFJUQ1NlcnZpY2UuX0lzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gX0lzSW5pdGlhbGl6ZWRTdWJqZWN0O1xyXG4gICAgUlRDU2VydmljZS5fQnJvYWRjYXN0U3ViamVjdCA9IF9Ccm9hZGNhc3RTdWJqZWN0O1xyXG4gICAgUlRDU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFJUQ1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfID0gQ29tbXVuaWNhdGlvblN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5DbGllbnRTdWJqZWN0XyA9IENsaWVudFN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5JRFN1YmplY3RfID0gSURTdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuVXBkYXRlU3RhdGVTdWJqZWN0XyA9IFVwZGF0ZVN0YXRlU3ViamVjdF87XHJcbiAgICBSVENTZXJ2aWNlLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8gPSBPbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBSVENTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlJUQ1NlcnZpY2UgPSBSVENTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2luaXQvaW5pdFwiKTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL3J0Yy9ydGNcIik7XHJcbnZhciB3c18xID0gcmVxdWlyZShcIi4uL3dzXCIpO1xyXG53c18xLldTU2VydmljZS5Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlzT3Blbikge1xyXG4gICAgcmV0dXJuIGluaXRfMS5Jbml0U2VydmljZS5fSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbi5uZXh0KGlzT3Blbik7XHJcbn0pO1xyXG53c18xLldTU2VydmljZS5Db21tdW5pY2F0aW9uU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICBydGNfMS5SVENTZXJ2aWNlLl9Db21tdW5pY2F0aW9uU3ViamVjdC5uZXh0KG0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5XU1NlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciB3ZWJfc29ja2V0c19hZ2VudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi93ZWItc29ja2V0cy1hZ2VudFwiKTtcclxudmFyIHN3aXRjaE1hcF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcFwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxuLy8gSW5wdXRcclxudmFyIF9Db21tdW5pY2F0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lzUmVtb3RlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4vLyBPdXRwdXRcclxudmFyIENvbW11bmljYXRpb25TdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgV2ViU29ja2V0c0FnZW50U3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgUmVzZXRBZ2VudFN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHdzID0gbmV3IHdlYl9zb2NrZXRzX2FnZW50XzEuV2ViU29ja2V0c0FnZW50KF9Db21tdW5pY2F0aW9uU3ViamVjdCwgQ29tbXVuaWNhdGlvblN1YmplY3RfKTtcclxuICAgIFdlYlNvY2tldHNBZ2VudFN1YmplY3RfLm5leHQod3MpO1xyXG59O1xyXG52YXIgb25XZWJTb2NrZXRSZWFkeUhhbmRsZXIgPSBmdW5jdGlvbiAoaXNSZWFkeSkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiV1MgUmVhZHlcIik7XHJcbiAgICBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXy5uZXh0KGlzUmVhZHkpO1xyXG59O1xyXG52YXIgb25XZWJTb2NrZXRDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJXUyBDbG9zZWRcIik7XHJcbiAgICBSZXNldEFnZW50U3ViamVjdF8ubmV4dCgpO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0Lm5leHQoKTsgfSk7XHJcbl9Jc1dpbmRvd0xvYWRlZFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5SZXNldEFnZW50U3ViamVjdF8uc3Vic2NyaWJlKGluaXQpO1xyXG5XZWJTb2NrZXRzQWdlbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAod3MpIHsgcmV0dXJuICEhd3M7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKHdzKSB7IHJldHVybiB3cy5Jc1dlYlNvY2tldFJlYWR5U3ViamVjdDsgfSkpLnN1YnNjcmliZShvbldlYlNvY2tldFJlYWR5SGFuZGxlcik7XHJcbldlYlNvY2tldHNBZ2VudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gISF3czsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAod3MpIHsgcmV0dXJuIHdzLk9uQ2xvc2VTdWJqZWN0OyB9KSkuc3Vic2NyaWJlKG9uV2ViU29ja2V0Q2xvc2VIYW5kbGVyKTtcclxuX0NvbW11bmljYXRpb25TdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuRGVidWdTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGNvbnNvbGUud2FybihcIldTIFNlcnZpY2U6IFwiLCBtKTsgfSk7XHJcbi8vIEV4cG9ydHNcclxudmFyIFdTU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdTU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vSW5wdXRcclxuICAgIFdTU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IF9Jc1dpbmRvd0xvYWRlZFN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzUmVtb3RlU3ViamVjdCA9IF9Jc1JlbW90ZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFdTU2VydmljZS5Db21tdW5pY2F0aW9uU3ViamVjdF8gPSBDb21tdW5pY2F0aW9uU3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuV2ViU29ja2V0c0FnZW50U3ViamVjdF8gPSBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0XztcclxuICAgIFdTU2VydmljZS5SZXNldEFnZW50U3ViamVjdF8gPSBSZXNldEFnZW50U3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8gPSBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXztcclxuICAgIHJldHVybiBXU1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV1NTZXJ2aWNlID0gV1NTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Jbml0U2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxuLy8gSW5wdXRcclxudmFyIF9Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBfRW52aXJvbm1lbnRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChcInJlbW90ZVwiKTtcclxuLy8gT3V0cHV0XHJcbnZhciBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBfSXNHYW1lTG9hZGVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgSW5pdFN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBFbnZTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoXCJwcm9kdWN0aW9uXCIpO1xyXG4vLyBNZXRob2RzXHJcbnZhciBnZXRJc1JlbW90ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9FbnZpcm9ubWVudFN1YmplY3QuZ2V0VmFsdWUoKSA9PT0gXCJyZW1vdGVcIjsgfTtcclxudmFyIGdldElzTG9jYWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfRW52aXJvbm1lbnRTdWJqZWN0LmdldFZhbHVlKCkgPT09IFwibG9jYWxcIjsgfTtcclxudmFyIG9uTG9hZEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgIHZhciBpc0xvY2FsID0gb3JpZ2luLmluY2x1ZGVzKFwibG9jYWxob3N0XCIpO1xyXG4gICAgX0Vudmlyb25tZW50U3ViamVjdC5uZXh0KFwicmVtb3RlXCIpOyAvL2lzTG9jYWwgPyBcImxvY2FsXCIgOiBcInJlbW90ZVwiKTtcclxuICAgIF9Jc1dpbmRvd0xvYWRlZFN1YmplY3QubmV4dCh0cnVlKTtcclxufTtcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBJbml0U3ViamVjdF8ubmV4dCgpO1xyXG4gICAgRW52U3ViamVjdF8ubmV4dChcInByb2R1Y3Rpb25cIik7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZEhhbmRsZXIpO1xyXG5jb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0LFxyXG4gICAgX0lzR2FtZUxvYWRlZFN1YmplY3QsXHJcbiAgICBfSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbixcclxuXSlcclxuICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpc1dpbmRvd0xvYWRlZFN1YmplY3QgPSBfYVswXSwgaXNHYW1lTG9hZGVkID0gX2FbMV0sIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4gPSBfYVsyXTtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChbXHJcbiAgICAgICAgaXNXaW5kb3dMb2FkZWRTdWJqZWN0LFxyXG4gICAgICAgIGlzR2FtZUxvYWRlZCxcclxuICAgICAgICBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuLFxyXG4gICAgXSk7XHJcbiAgICB2YXIgaXNSZW1vdGUgPSBnZXRJc1JlbW90ZSgpO1xyXG4gICAgaWYgKCFpc1dpbmRvd0xvYWRlZFN1YmplY3QgfHwgIWlzR2FtZUxvYWRlZClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoaXNSZW1vdGUgJiYgIUlzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pKVxyXG4gICAgLnN1YnNjcmliZShpbml0KTtcclxuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJJTklUIVwiKTtcclxufSk7XHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJJbml0IFNlcnZpY2U6IFwiLCBtKTsgfSk7XHJcbi8vIEV4cG9ydHNcclxudmFyIEluaXRTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5pdFNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgSW5pdFNlcnZpY2UuX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4gPSBfSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbjtcclxuICAgIEluaXRTZXJ2aWNlLl9FbnZpcm9ubWVudFN1YmplY3QgPSBfRW52aXJvbm1lbnRTdWJqZWN0O1xyXG4gICAgSW5pdFNlcnZpY2UuX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IF9Jc1dpbmRvd0xvYWRlZFN1YmplY3Q7XHJcbiAgICBJbml0U2VydmljZS5fSXNHYW1lTG9hZGVkU3ViamVjdCA9IF9Jc0dhbWVMb2FkZWRTdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBJbml0U2VydmljZS5Jbml0U3ViamVjdF8gPSBJbml0U3ViamVjdF87XHJcbiAgICBJbml0U2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIEluaXRTZXJ2aWNlLkVudlN1YmplY3RfID0gRW52U3ViamVjdF87XHJcbiAgICByZXR1cm4gSW5pdFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSW5pdFNlcnZpY2UgPSBJbml0U2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi8uLi9iYWNrZW5kL2JhY2tlbmRcIik7XHJcbnZhciBjaGFubmVsXzEgPSByZXF1aXJlKFwiLi4vLi4vY2hhbm5lbC9jaGFubmVsXCIpO1xyXG52YXIgcnRjXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbXVuaWNhdGlvbi9ydGMvcnRjXCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi8uLi9tZWRpYS9tZWRpYVwiKTtcclxudmFyIHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RhdGUvc3RhdGVcIik7XHJcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi4vaW5pdFwiKTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBjaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuX0luaXRTdWJqZWN0Lm5leHQoKTsgfSk7XHJcbmluaXRfMS5Jbml0U2VydmljZS5Jbml0U3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lZGlhXzEuTWVkaWFTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vYmFja2VuZFwiKTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vcnRjXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9zdGF0ZVwiKTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vdW5pdHlcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYVwiKTtcclxubWVkaWFfMS5NZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUHJlc2VudGluZykgeyByZXR1cm4gaXNQcmVzZW50aW5nOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdC5uZXh0KDEpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vbWVkaWFcIik7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobSkpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RhdGUvc3RhdGVcIik7XHJcbnZhciBtZWRpYV8xID0gcmVxdWlyZShcIi4uL21lZGlhXCIpO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5Jc1ByZXNlbnRpbmdTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlzUHJlc2VudGluZykge1xyXG4gICAgcmV0dXJuIHN0YXRlXzEuU3RhdGVTZXJ2aWNlLl9Jc1ByZXNlbnRpbmdTdWJqZWN0Lm5leHQoaXNQcmVzZW50aW5nKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uLy4uL3VuaXR5L3VuaXR5XCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi9tZWRpYVwiKTtcclxubWVkaWFfMS5NZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUHJlc2VudGluZykgeyByZXR1cm4gaXNQcmVzZW50aW5nOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9RdWl0R2FtZVN1YmplY3QubmV4dCgpOyB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NZWRpYVNlcnZpY2UgPSBleHBvcnRzLmdldFVzZXJNZWRpYSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgaW50ZXJ2YWxfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWxcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG52YXIgSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuLy8gSW5wdXRcclxudmFyIF9Jbml0U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1NoYXJlU2NyZWVuU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIElzUHJlc2VudGluZ1N1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBSZW1vdGVNZWRpYVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIExvY2FsTWVkaWFTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBJbWFnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIFNJWkUgPSAxMDI0O1xyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxudmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4vLyBNZXRob2RzXHJcbmV4cG9ydHMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXNcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAuZ2V0RGlzcGxheU1lZGlhKHtcclxuICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgICAgIExvY2FsTWVkaWFTdWJqZWN0Xy5uZXh0KHN0cmVhbSk7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiTG9jYWwgTWVkaWFcIik7XHJcbiAgICB9KVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcImdldFVzZXJNZWRpYSgpIGVycm9yOiBcIiArIGUubmFtZSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGluaXRpYWxpemVDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjYW52YXMud2lkdGggPSBTSVpFO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IFNJWkU7XHJcbn07XHJcbnZhciBzdHJlYW1Ub0ltYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIGlmICghY2FudmFzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoIWNhbnZhcylcclxuICAgICAgICByZXR1cm47XHJcbiAgICAoX2EgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBTSVpFLCBTSVpFKTtcclxuICAgIHZhciBkYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIik7XHJcbiAgICB2YXIgcyA9IGRhdGEucmVwbGFjZShcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIsIFwiXCIpO1xyXG4gICAgaWYgKCFzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIEltYWdlU3ViamVjdF8ubmV4dChzKTtcclxufTtcclxudmFyIG9uU3RyZWFtVG9JbWFnZUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICBpZiAoIXN0cmVhbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBzdHJlYW1Ub0ltYWdlSGFuZGxlcihzdHJlYW0pO1xyXG59O1xyXG52YXIgb25JbWFnZVRvSW1hZ2VEYXRhTWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkltYWdlRGF0YSxcclxuICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICB9O1xyXG4gICAgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLm5leHQobWVzc2FnZSk7XHJcbn07XHJcbnZhciBvblNoYXJlU2NyZWVuSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIElzUHJlc2VudGluZ1N1YmplY3RfLm5leHQodHJ1ZSk7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJJbml0IE1lZGlhXCIpO1xyXG4gICAgZXhwb3J0cy5nZXRVc2VyTWVkaWEoKTtcclxufTtcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0aWFsaXplQ2FudmFzKCk7XHJcbiAgICBJc0luaXRpYWxpemVkU3ViamVjdC5uZXh0KHRydWUpO1xyXG59O1xyXG52YXIgaXNJbml0aWFsaXplZEZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7IH07XHJcbnZhciBoYXNOb0xvY2FsTWVkaWFGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhTG9jYWxNZWRpYVN1YmplY3RfLmdldFZhbHVlKCk7IH07XHJcbi8vIFN1YnNjcmlwdGlvbnMxXHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoaW5pdCk7XHJcbkltYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoaXNJbml0aWFsaXplZEZpbHRlcikpLnN1YnNjcmliZShvbkltYWdlVG9JbWFnZURhdGFNZXNzYWdlSGFuZGxlcik7XHJcbkxvY2FsTWVkaWFTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihpc0luaXRpYWxpemVkRmlsdGVyKSkuc3Vic2NyaWJlKG9uU3RyZWFtVG9JbWFnZUhhbmRsZXIpO1xyXG5fU2hhcmVTY3JlZW5TdWJqZWN0XHJcbiAgICAvLyAucGlwZShmaWx0ZXIoaXNJbml0aWFsaXplZEZpbHRlciksIGZpbHRlcihoYXNOb0xvY2FsTWVkaWFGaWx0ZXIpKVxyXG4gICAgLnN1YnNjcmliZShvblNoYXJlU2NyZWVuSGFuZGxlcik7XHJcbkRlYnVnU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBjb25zb2xlLndhcm4oXCJNZWRpYSBTZXJ2aWNlOiBcIiwgbSk7IH0pO1xyXG5pbnRlcnZhbF8xLmludGVydmFsKGNvbnN0XzEuVVBEQVRFX0lOVEVSVkFMKVxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzUHJlc2VudGluZ1N1YmplY3RfLmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZSh1cGRhdGUpO1xyXG4vLyBFeHBvcnRcclxudmFyIE1lZGlhU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lZGlhU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBNZWRpYVNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgTWVkaWFTZXJ2aWNlLl9TaGFyZVNjcmVlblN1YmplY3QgPSBfU2hhcmVTY3JlZW5TdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBNZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8gPSBJc1ByZXNlbnRpbmdTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5SZW1vdGVNZWRpYVN1YmplY3RfID0gUmVtb3RlTWVkaWFTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5Mb2NhbE1lZGlhU3ViamVjdF8gPSBMb2NhbE1lZGlhU3ViamVjdF87XHJcbiAgICBNZWRpYVNlcnZpY2UuSW1hZ2VTdWJqZWN0XyA9IEltYWdlU3ViamVjdF87XHJcbiAgICBNZWRpYVNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIE1lZGlhU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5NZWRpYVNlcnZpY2UgPSBNZWRpYVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU3RhdGVTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9DbGllbnRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSURTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9UVlByb2dyYW1TdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Jc1ByZXNlbnRpbmdTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgR2FtZVN0YXRlU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGRlZmluaXRpb25zXzEuREVGQVVMVF9TVEFURSk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbih7fSwgR2FtZVN0YXRlU3ViamVjdF8uZ2V0VmFsdWUoKSkpOyB9O1xyXG52YXIgdXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbCkge1xyXG4gICAgdmFyIHByZXZTdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICB2YXIgbmV3U3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldlN0YXRlKSwgcGFydGlhbCk7XHJcbiAgICBHYW1lU3RhdGVTdWJqZWN0Xy5uZXh0KG5ld1N0YXRlKTtcclxufTtcclxudmFyIHN0YXRlVXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNsaWVudCA9IF9hWzBdLCBpZCA9IF9hWzFdLCBjaGFubmVsID0gX2FbMl0sIHByb2dyYW0gPSBfYVszXSwgaXNQcmVzZW50aW5nID0gX2FbNF07XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoY2xpZW50ID09PSBudWxsIHx8IGNsaWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpZW50LkNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3Rpb25zKTtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICBzdHJlYW1zOiAoY2xpZW50ID09PSBudWxsIHx8IGNsaWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpZW50LnN0cmVhbXMpIHx8IHt9LFxyXG4gICAgICAgIGlkOiBpZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgY2hhbm5lbDogY2hhbm5lbCB8fCBudWxsLFxyXG4gICAgICAgIHByb2dyYW06IHByb2dyYW0sXHJcbiAgICAgICAgaXNQcmVzZW50aW5nOiBpc1ByZXNlbnRpbmcsXHJcbiAgICB9KTtcclxufTtcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICAgICAgX0NsaWVudFN1YmplY3QsXHJcbiAgICAgICAgX0lEU3ViamVjdF8sXHJcbiAgICAgICAgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QsXHJcbiAgICAgICAgX1RWUHJvZ3JhbVN0YXRlU3ViamVjdCxcclxuICAgICAgICBfSXNQcmVzZW50aW5nU3ViamVjdCxcclxuICAgIF0pLnN1YnNjcmliZShzdGF0ZVVwZGF0ZUhhbmRsZXIpO1xyXG4gICAgR2FtZVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KHN0YXRlKTsgfSk7XHJcbn0pO1xyXG52YXIgU3RhdGVTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RhdGVTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIFN0YXRlU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0NsaWVudFN1YmplY3QgPSBfQ2xpZW50U3ViamVjdDtcclxuICAgIFN0YXRlU2VydmljZS5fSURTdWJqZWN0XyA9IF9JRFN1YmplY3RfO1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0ID0gX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX1RWUHJvZ3JhbVN0YXRlU3ViamVjdCA9IF9UVlByb2dyYW1TdGF0ZVN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0lzUHJlc2VudGluZ1N1YmplY3QgPSBfSXNQcmVzZW50aW5nU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgU3RhdGVTZXJ2aWNlLkdhbWVTdGF0ZVN1YmplY3RfID0gR2FtZVN0YXRlU3ViamVjdF87XHJcbiAgICBTdGF0ZVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gU3RhdGVTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlN0YXRlU2VydmljZSA9IFN0YXRlU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW50ZWdyYXRpb24vb3V0Z29pbmdcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBvdXRnb2luZ18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vb3V0Z29pbmcvb3V0Z29pbmdcIik7XHJcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4uL3VuaXR5XCIpO1xyXG51bml0eV8xLlVuaXR5U2VydmljZS5Vbml0eU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIG91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fUmF3TWVzc2FnZVN1YmplY3QubmV4dChtZXNzYWdlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVW5pdHlTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KDEpO1xyXG52YXIgX0NhblNlbmRNZXNzYWdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbnZhciBfU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX01ha2VGdWxsU2NyZWVuU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1F1aXRHYW1lU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIFVuaXR5TWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBQb3NpdGlvblN0YXRlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gQXV4aWxhcnlcclxudmFyIE1BTkFHRVIgPSBcIk1hbmFnZXJcIjtcclxudmFyIE9OX01FU1NBR0UgPSBcIk9uTWVzc2FnZVwiO1xyXG4vLyBNZXRob2RzXHJcbnZhciBzZW5kVG9Vbml0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG1ldGhvZCwgbWVzc2FnZSkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKCF1bml0eUluc3RhbmNlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHVuaXR5SW5zdGFuY2UuU2VuZE1lc3NhZ2Uob2JqZWN0LCBtZXRob2QsIG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgc2VuZE1lc3NhZ2VUb1VuaXR5SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW1wiU2VuZCBUbyBVbml0eVwiLCBtZXNzYWdlXSk7XHJcbiAgICB2YXIgbWVzc2FnZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgc2VuZFRvVW5pdHkoTUFOQUdFUiwgT05fTUVTU0FHRSwgbWVzc2FnZVN0cmluZyk7XHJcbn07XHJcbnZhciBtYWtlRnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlNldEZ1bGxzY3JlZW4oMSk7XHJcbn07XHJcbnZhciBxdWl0R2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlF1aXQoKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG4vLyBAdHMtaWdub3JlXHJcbndpbmRvdy5zZW5kVW5pdHlNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBVbml0eU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdFxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9DYW5TZW5kTWVzc2FnZXMuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKHNlbmRNZXNzYWdlVG9Vbml0eUhhbmRsZXIpO1xyXG5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0LnN1YnNjcmliZShtYWtlRnVsbFNjcmVlbik7XHJcbl9RdWl0R2FtZVN1YmplY3Quc3Vic2NyaWJlKHF1aXRHYW1lKTtcclxudmFyIFVuaXR5U2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuaXR5U2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFVuaXR5U2VydmljZS5fQ3VycmVudFRWQ2hhbm5lbFN0YXRlU3ViamVjdCA9IF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0O1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9DYW5TZW5kTWVzc2FnZXMgPSBfQ2FuU2VuZE1lc3NhZ2VzO1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0ID0gX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3Q7XHJcbiAgICBVbml0eVNlcnZpY2UuX01ha2VGdWxsU2NyZWVuU3ViamVjdCA9IF9NYWtlRnVsbFNjcmVlblN1YmplY3Q7XHJcbiAgICBVbml0eVNlcnZpY2UuX1F1aXRHYW1lU3ViamVjdCA9IF9RdWl0R2FtZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFVuaXR5U2VydmljZS5Vbml0eU1lc3NhZ2VTdWJqZWN0XyA9IFVuaXR5TWVzc2FnZVN1YmplY3RfO1xyXG4gICAgVW5pdHlTZXJ2aWNlLlBvc2l0aW9uU3RhdGVTdWJqZWN0XyA9IFBvc2l0aW9uU3RhdGVTdWJqZWN0XztcclxuICAgIFVuaXR5U2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBVbml0eVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVW5pdHlTZXJ2aWNlID0gVW5pdHlTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRFRkFVTFRfU1RBVEUgPSBleHBvcnRzLlVSTF9OQU1FID0gZXhwb3J0cy5VUkxfVFZfQ0hBTk5FTCA9IGV4cG9ydHMuRU1lc3NhZ2VUeXBlID0gdm9pZCAwO1xyXG4vLyBNZXNzYWdlc1xyXG52YXIgRU1lc3NhZ2VUeXBlO1xyXG4oZnVuY3Rpb24gKEVNZXNzYWdlVHlwZSkge1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiUHJlc2VudFwiXSA9IFwicHJlc2VudFwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiRnVsbFNjcmVlblwiXSA9IFwiZnVsbHNjcmVlblwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiUG9zaXRpb25cIl0gPSBcInBvc2l0aW9uXCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJJbWFnZURhdGFcIl0gPSBcImltYWdlXCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJTdGFydFwiXSA9IFwic3RhcnRcIjtcclxufSkoRU1lc3NhZ2VUeXBlID0gZXhwb3J0cy5FTWVzc2FnZVR5cGUgfHwgKGV4cG9ydHMuRU1lc3NhZ2VUeXBlID0ge30pKTtcclxuLy8gQmFja2VuZFxyXG5leHBvcnRzLlVSTF9UVl9DSEFOTkVMID0gXCIvdHZcIjtcclxuZXhwb3J0cy5VUkxfTkFNRSA9IFwiL25hbWVcIjtcclxuZXhwb3J0cy5ERUZBVUxUX1NUQVRFID0ge1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBpc1ByZXNlbnRpbmc6IGZhbHNlLFxyXG4gICAgc3RyZWFtczoge30sXHJcbiAgICBjaGFubmVsOiAxLFxyXG4gICAgcHJvZ3JhbToge30sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRGVidWdTdWJqZWN0ID0gZXhwb3J0cy5FbnZpcm9ubWVudFN1YmplY3QgPSBleHBvcnRzLmdlbmVyYXRlSWQgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBnZXRSYW5kb21OdW1iZXJzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgdmFyIHZhbHVlID0gQXJyYXkuZnJvbShNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygxMCwgbGVuZ3RoKSkudG9TdHJpbmcoKSkucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShsZW5ndGgpXHJcbiAgICAgICAgLmZpbGwoXCIwXCIpXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gdmFsdWVbaV0gfHwgdjsgfSlcclxuICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgLmpvaW4oXCJcIik7XHJcbn07XHJcbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIChhbW91bnQsIGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShhbW91bnQpXHJcbiAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChhLCBpLCBiKSB7IHJldHVybiBcIlwiICsgKGkgJiYgXCItXCIpICsgZ2V0UmFuZG9tTnVtYmVycyhsZW5ndGgpOyB9KVxyXG4gICAgICAgIC5qb2luKFwiXCIpO1xyXG59O1xyXG5leHBvcnRzLkVudmlyb25tZW50U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoXCJkZXZlbG9wbWVudFwiKTtcclxuZXhwb3J0cy5EZWJ1Z1N1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuZXhwb3J0cy5EZWJ1Z1N1YmplY3QucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwb3J0cy5FbnZpcm9ubWVudFN1YmplY3QuZ2V0VmFsdWUoKSA9PT0gXCJkZXZlbG9wbWVudFwiOyB9KSkuc3Vic2NyaWJlKGNvbnNvbGUud2Fybik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIn0=