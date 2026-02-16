(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // dist/build/map.BLuQZHiU.js
  var extendStatics = /* @__PURE__ */ __name(function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  }, "extendStatics");
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    __name(__, "__");
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  __name(__extends, "__extends");
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: /* @__PURE__ */ __name(function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }, "next")
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  __name(__values, "__values");
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  __name(__read, "__read");
  function __spreadArray(to, from, pack) {
    if (arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  __name(__spreadArray, "__spreadArray");
  function isFunction(value) {
    return typeof value === "function";
  }
  __name(isFunction, "isFunction");
  function createErrorClass(createImpl) {
    var _super = /* @__PURE__ */ __name(function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    }, "_super");
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }
  __name(createErrorClass, "createErrorClass");
  var UnsubscriptionError = createErrorClass(function(_super) {
    return /* @__PURE__ */ __name(function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    }, "UnsubscriptionErrorImpl");
  });
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }
  __name(arrRemove, "arrRemove");
  var Subscription = (function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    __name(Subscription2, "Subscription2");
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a3, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a3 = _parentage_1.return)) _a3.call(_parentage_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a3;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a3 = this._finalizers) !== null && _a3 !== void 0 ? _a3 : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = (function() {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    })();
    return Subscription2;
  })();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  __name(isSubscription, "isSubscription");
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }
  __name(execFinalizer, "execFinalizer");
  var config = {
    Promise: void 0
  };
  var timeoutProvider = {
    setTimeout: /* @__PURE__ */ __name(function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    }, "setTimeout"),
    clearTimeout: /* @__PURE__ */ __name(function(handle) {
      return clearTimeout(handle);
    }, "clearTimeout"),
    delegate: void 0
  };
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      {
        throw err;
      }
    });
  }
  __name(reportUnhandledError, "reportUnhandledError");
  function noop() {
  }
  __name(noop, "noop");
  function errorContext(cb) {
    {
      cb();
    }
  }
  __name(errorContext, "errorContext");
  var Subscriber = (function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    __name(Subscriber2, "Subscriber2");
    Subscriber2.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped) ;
      else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped) ;
      else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped) ;
      else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  })(Subscription);
  var ConsumerObserver = (function() {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    __name(ConsumerObserver2, "ConsumerObserver2");
    ConsumerObserver2.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  })();
  var SafeSubscriber = (function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    __name(SafeSubscriber2, "SafeSubscriber2");
    return SafeSubscriber2;
  })(Subscriber);
  function handleUnhandledError(error) {
    {
      reportUnhandledError(error);
    }
  }
  __name(handleUnhandledError, "handleUnhandledError");
  function defaultErrorHandler(err) {
    throw err;
  }
  __name(defaultErrorHandler, "defaultErrorHandler");
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };
  var observable = (function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  })();
  function identity(x) {
    return x;
  }
  __name(identity, "identity");
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return /* @__PURE__ */ __name(function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    }, "piped");
  }
  __name(pipeFromArray, "pipeFromArray");
  var Observable = (function() {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    __name(Observable2, "Observable2");
    Observable2.prototype.lift = function(operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function() {
        var _a3 = _this, operator = _a3.operator, source = _a3.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: /* @__PURE__ */ __name(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          }, "next"),
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var _a3;
      return (_a3 = this.source) === null || _a3 === void 0 ? void 0 : _a3.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  })();
  function getPromiseCtor(promiseCtor) {
    var _a3;
    return (_a3 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a3 !== void 0 ? _a3 : Promise;
  }
  __name(getPromiseCtor, "getPromiseCtor");
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  __name(isObserver, "isObserver");
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }
  __name(isSubscriber, "isSubscriber");
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  __name(hasLift, "hasLift");
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  __name(operate, "operate");
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  __name(createOperatorSubscriber, "createOperatorSubscriber");
  var OperatorSubscriber = (function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    __name(OperatorSubscriber2, "OperatorSubscriber2");
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a3;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a3 = this.onFinalize) === null || _a3 === void 0 ? void 0 : _a3.call(this));
      }
    };
    return OperatorSubscriber2;
  })(Subscriber);
  function isScheduler(value) {
    return value && isFunction(value.schedule);
  }
  __name(isScheduler, "isScheduler");
  function map(project, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }
  __name(map, "map");

  // dist/build/timer.0WUSU37P.js
  var dateTimestampProvider = {
    now: /* @__PURE__ */ __name(function() {
      return Date.now();
    }, "now")
  };
  var Action = (function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
      return _super.call(this) || this;
    }
    __name(Action2, "Action2");
    Action2.prototype.schedule = function(state, delay) {
      return this;
    };
    return Action2;
  })(Subscription);
  var intervalProvider = {
    setInterval: /* @__PURE__ */ __name(function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    }, "setInterval"),
    clearInterval: /* @__PURE__ */ __name(function(handle) {
      return clearInterval(handle);
    }, "clearInterval"),
    delegate: void 0
  };
  var AsyncAction = (function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    __name(AsyncAction2, "AsyncAction2");
    AsyncAction2.prototype.schedule = function(state, delay) {
      var _a3;
      if (delay === void 0) {
        delay = 0;
      }
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
      this.id = (_a3 = this.id) !== null && _a3 !== void 0 ? _a3 : this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay != null && this.delay === delay && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider.clearInterval(id);
      }
      return void 0;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction2.prototype._execute = function(state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = e ? e : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction2.prototype.unsubscribe = function() {
      if (!this.closed) {
        var _a3 = this, id = _a3.id, scheduler = _a3.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction2;
  })(Action);
  var Scheduler = (function() {
    function Scheduler2(schedulerActionCtor, now) {
      if (now === void 0) {
        now = Scheduler2.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    __name(Scheduler2, "Scheduler2");
    Scheduler2.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler2.now = dateTimestampProvider.now;
    return Scheduler2;
  })();
  var AsyncScheduler = (function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    __name(AsyncScheduler2, "AsyncScheduler2");
    AsyncScheduler2.prototype.flush = function(action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler2;
  })(Scheduler);
  var asyncScheduler = new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;
  function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
  }
  __name(isValidDate, "isValidDate");
  function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
      if (isScheduler(intervalOrScheduler)) {
        scheduler = intervalOrScheduler;
      } else {
        intervalDuration = intervalOrScheduler;
      }
    }
    return new Observable(function(subscriber) {
      var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n = 0;
      return scheduler.schedule(function() {
        if (!subscriber.closed) {
          subscriber.next(n++);
          if (0 <= intervalDuration) {
            this.schedule(void 0, intervalDuration);
          } else {
            subscriber.complete();
          }
        }
      }, due);
    });
  }
  __name(timer, "timer");

  // dist/build/cross-world-events.ByM2aWax.js
  function filter(predicate, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        return predicate.call(thisArg, value, index++) && subscriber.next(value);
      }));
    });
  }
  __name(filter, "filter");
  var _a;
  var _ComponentUtils = (_a = class {
    static getLViewRegistry() {
      return window.__ngLViewRegistry__;
    }
    static getHeaderOffset() {
      const headerOffset = window.__ngLViewIndices__?.HEADER_OFFSET;
      return typeof headerOffset === "number" ? headerOffset : _a.DEFAULT_HEADER_OFFSET;
    }
    static resolveLViewFromContext(context) {
      if (Array.isArray(context)) {
        return context;
      }
      if (typeof context === "number") {
        return _a.getLViewRegistry()?.get(context) ?? null;
      }
      if (context && typeof context === "object") {
        const lContext = context;
        if (Array.isArray(lContext.lView)) {
          return lContext.lView;
        }
        if (typeof lContext.lViewId === "number") {
          return _a.getLViewRegistry()?.get(lContext.lViewId) ?? null;
        }
      }
      return null;
    }
    static unwrapRNode(value) {
      let current = value;
      while (Array.isArray(current)) {
        current = current[0];
      }
      return current;
    }
    static findNodeIndexInLView(lView, element) {
      const tView = lView[_a.LVIEW_TVIEW_INDEX];
      const end = tView && typeof tView.bindingStartIndex === "number" ? tView.bindingStartIndex : lView.length;
      const start = Math.min(_a.getHeaderOffset(), end);
      for (let i = start; i < end; i++) {
        if (_a.unwrapRNode(lView[i]) === element) {
          return i;
        }
      }
      return -1;
    }
    static getComponentAtNodeIndex(lView, nodeIndex) {
      const tView = lView[_a.LVIEW_TVIEW_INDEX];
      const tNode = tView?.data?.[nodeIndex];
      if (!tNode) {
        return null;
      }
      const directiveStart = tNode.directiveStart;
      const componentOffset = tNode.componentOffset;
      if (typeof directiveStart === "number" && typeof componentOffset === "number" && componentOffset > -1) {
        return lView[directiveStart + componentOffset] ?? null;
      }
      const directiveEnd = tNode.directiveEnd;
      if (typeof directiveStart !== "number" || typeof directiveEnd !== "number") {
        return null;
      }
      for (let i = directiveStart; i < directiveEnd; i++) {
        const directive = lView[i];
        if (directive?.constructor?.\u0275cmp) {
          return directive;
        }
      }
      return null;
    }
    static getParentLView(lView) {
      const parent = lView[_a.LVIEW_PARENT_INDEX];
      if (!Array.isArray(parent)) {
        return null;
      }
      if (parent[_a.LCONTAINER_TYPE_INDEX] === true) {
        const parentLView = parent[_a.LVIEW_PARENT_INDEX];
        return Array.isArray(parentLView) ? parentLView : null;
      }
      return parent;
    }
    static getOwningComponentFromLView(lView) {
      let currentLView = lView;
      while (currentLView && currentLView[_a.LVIEW_TVIEW_INDEX]?.type === _a.TVIEW_EMBEDDED_TYPE) {
        currentLView = _a.getParentLView(currentLView);
      }
      if (!currentLView) {
        return null;
      }
      return currentLView[_a.LVIEW_CONTEXT_INDEX] ?? null;
    }
    static getComponentByTagName(tagName) {
      const element = document.querySelector(tagName);
      if (!element) {
        return null;
      }
      return _a.getComponentFromElement(element);
    }
    static getFirstRouterOutletChildByComponentSelector(componentSelector) {
      const componentElement = document.querySelector(componentSelector);
      if (!componentElement) {
        return null;
      }
      const routerOutletElement = componentElement.querySelector("router-outlet");
      if (!routerOutletElement) {
        return null;
      }
      const routedElement = routerOutletElement.firstElementChild ?? routerOutletElement.nextElementSibling;
      if (!routedElement) {
        return null;
      }
      return _a.getComponentFromElement(routedElement);
    }
    static getAllComponentsByTagName(tagName) {
      const elements = document.querySelectorAll(tagName);
      const components = [];
      elements.forEach((element) => {
        const component = _a.getComponentFromElement(element);
        if (component) {
          components.push(component);
        }
      });
      return components;
    }
    static getComponentFromElement(element) {
      const ngGetComponent = window.ng?.getComponent;
      if (typeof ngGetComponent === "function") {
        try {
          const component = ngGetComponent(element);
          if (component != null) {
            return component;
          }
        } catch {
        }
      }
      const context = element["__ngContext__"];
      console.log(`[audako-powertoys] Retrieving Angular component from element:`, {
        element,
        context
      });
      if (context == null) {
        return null;
      }
      const lView = _a.resolveLViewFromContext(context);
      if (!lView) {
        return null;
      }
      const nodeIndex = _a.findNodeIndexInLView(lView, element);
      if (nodeIndex !== -1) {
        const component = _a.getComponentAtNodeIndex(lView, nodeIndex);
        if (component) {
          return component;
        }
      }
      return _a.getOwningComponentFromLView(lView);
    }
    static extendMethod(component, name, fn) {
      const proto = component.__proto__;
      const currentMethod = proto[name];
      proto[name] = (...args) => {
        fn(args);
        return currentMethod.bind(component)(args);
      };
      return component;
    }
    static extendMethodAsync(component, name, fn) {
      const currentMethod = component[name + "_original"] ?? component[name];
      component[name + "_original"] = currentMethod;
      component[name] = async (...args) => {
        await fn(args);
        return currentMethod.bind(component)(args);
      };
      return component;
    }
    static extendProtoMethodAsync(component, name, fn) {
      const currentMethod = component.__proto__[name + "_original"] ?? component.__proto__[name];
      component.__proto__[name + "_original"] = currentMethod;
      component.__proto__[name] = async (...args) => {
        await fn(args);
        return currentMethod.bind(component)(args);
      };
      return component;
    }
  }, __name(_a, "_ComponentUtils"), _a);
  _ComponentUtils.LVIEW_TVIEW_INDEX = 1;
  _ComponentUtils.LVIEW_PARENT_INDEX = 3;
  _ComponentUtils.LVIEW_CONTEXT_INDEX = 8;
  _ComponentUtils.DEFAULT_HEADER_OFFSET = 25;
  _ComponentUtils.TVIEW_EMBEDDED_TYPE = 2;
  _ComponentUtils.LCONTAINER_TYPE_INDEX = 1;
  var ComponentUtils = _ComponentUtils;
  var AudakoApp = /* @__PURE__ */ ((AudakoApp2) => {
    AudakoApp2["Dashboard"] = "Dashboard";
    AudakoApp2["Configuration"] = "Configuration";
    AudakoApp2["Administration"] = "Administration";
    AudakoApp2["Maintenance"] = "Maintenance";
    return AudakoApp2;
  })(AudakoApp || {});
  var _a2;
  var _UrlUtils = (_a2 = class {
    static openApp(app, tenantId, groupId, detailId, detailType) {
      const url = _a2.buildAppUrl(app, tenantId, groupId, detailId, detailType);
      window.location.href = url;
    }
    static buildAppUrl(app, tenantId, groupId, detailId, detailType) {
      let url = null;
      switch (app) {
        case AudakoApp.Dashboard:
          url = `/${tenantId}/application/${groupId ?? ""}`;
          if (detailId) {
            url += `/${detailId ?? ""}`;
          }
          break;
        case AudakoApp.Configuration:
          url = `/${tenantId}/config/${groupId ?? ""}`;
          if (detailId && detailType) {
            url += `/${detailId}/${detailType}`;
          }
          break;
        case AudakoApp.Administration:
          url = `administration/${tenantId}`;
          break;
      }
      return url;
    }
    static getTenantIdFromUrl(url) {
      if (!url || url.length === 0) {
        return null;
      }
      const tenantId = url.split("/")[1];
      if (tenantId.length === 24) {
        return tenantId;
      }
      return null;
    }
    static getCurrentApp() {
      return _a2.getAppFromUrl(window.location.pathname);
    }
    static getAppFromUrl(url) {
      if (!url || url.length === 0) {
        return null;
      }
      const app = url.split("/")[2];
      if (_a2.appRouteMapping[app]) {
        return _a2.appRouteMapping[app];
      }
      return null;
    }
    static getAppUrl(app) {
      let url = null;
      Object.keys(_a2.appRouteMapping).forEach((key) => {
        if (_a2.appRouteMapping[key] === app) {
          url = key;
        }
      });
      return url;
    }
    static getGroupIdFromUrl(url) {
      const app = _a2.getAppFromUrl(url);
      if (!app) {
        return null;
      }
      const matchResults = url.match(/(.{24})\/(application|config)\/(.{24})/);
      if (!matchResults) {
        return null;
      }
      return matchResults[3];
    }
    static subscribeToUrl() {
      let currentLocation = null;
      return timer(0, 50).pipe(
        filter(() => currentLocation !== window.location.pathname),
        map(() => {
          currentLocation = window.location.pathname;
          return currentLocation;
        })
      );
    }
    static isActiveApp(app) {
      const currentLocation = window.location.pathname;
      const appUrl = {
        [AudakoApp.Administration]: "administration",
        [AudakoApp.Configuration]: "config",
        [AudakoApp.Dashboard]: "application",
        [AudakoApp.Maintenance]: "maintenance"
      };
      return currentLocation.includes(appUrl[app]);
    }
    static isInEntityConfiguration() {
      const currentLocation = window.location.pathname;
      return _a2.isActiveApp(AudakoApp.Configuration) && currentLocation.includes("detail");
    }
    static getEntityConfigurationDetails() {
      const currentLocation = window.location.pathname;
      const matchResults = currentLocation.match(
        /(.{24})\/config\/(.{24})\/detail\/(.{3,24})\/([A-z]+)/
      );
      if (!matchResults) return null;
      return {
        tenantId: matchResults[1],
        groupId: matchResults[2],
        entityId: matchResults[3],
        entityType: matchResults[4]
      };
    }
    static isInEntityList() {
      const currentLocation = window.location.pathname;
      return currentLocation.includes("list");
    }
    static getEntityListDetails() {
      const currentLocation = window.location.pathname;
      const matchResults = currentLocation.match(/(.{24})\/config\/(.{24})\/list\/([A-z]+)/);
      if (!matchResults) return null;
      return {
        tenantId: matchResults[1],
        groupId: matchResults[2],
        entityType: matchResults[3]
      };
    }
  }, __name(_a2, "_UrlUtils"), _a2);
  _UrlUtils.appRouteMapping = {
    config: AudakoApp.Configuration,
    application: AudakoApp.Dashboard
  };
  var UrlUtils = _UrlUtils;
  var EXTENSION_WORLD_SOURCE = "audako-powertoys-extension";
  var MAIN_WORLD_SOURCE = "audako-powertoys-main";
  var EXTENSION_EVENT_MESSAGE_TYPE = "audako-powertoys:event";
  var MAIN_WORLD_EVENT_ACK_TYPE = "audako-powertoys:event:ack";
  var ENTITY_UPDATED_EVENT_NAME = "entity.updated";
  var ENTITY_CREATED_EVENT_NAME = "entity.created";
  var ENTITY_EVENT_NAMES = [ENTITY_UPDATED_EVENT_NAME, ENTITY_CREATED_EVENT_NAME];
  var ALLOWED_ENTITY_EVENT_NAMES = new Set(ENTITY_EVENT_NAMES);
  function isRecord(value) {
    return !!value && typeof value === "object";
  }
  __name(isRecord, "isRecord");
  function isEntityEventName(value) {
    return typeof value === "string" && ALLOWED_ENTITY_EVENT_NAMES.has(value);
  }
  __name(isEntityEventName, "isEntityEventName");
  function isExtensionWorldEventMessage(value) {
    return isRecord(value) && value.source === EXTENSION_WORLD_SOURCE && value.type === EXTENSION_EVENT_MESSAGE_TYPE;
  }
  __name(isExtensionWorldEventMessage, "isExtensionWorldEventMessage");
  function dispatchEventAckToExtensionWorld(eventName, requestId, ok = true) {
    const message = {
      source: MAIN_WORLD_SOURCE,
      type: MAIN_WORLD_EVENT_ACK_TYPE,
      requestId,
      payload: {
        event: eventName,
        ok
      }
    };
    window.postMessage(message, "*");
  }
  __name(dispatchEventAckToExtensionWorld, "dispatchEventAckToExtensionWorld");

  // dist/build/injected-scripts.js
  function noopEntityEventHandler(_event) {
  }
  __name(noopEntityEventHandler, "noopEntityEventHandler");
  function handleEntityCreateEvent(event) {
    if (UrlUtils.getCurrentApp() !== AudakoApp.Configuration) {
      return;
    }
    console.log(
      "[audako-powertoys] Received entity created event in extension world:",
      event.type,
      event.detail
    );
    const sidebarComponent = ComponentUtils.getComponentByTagName(
      "audako4-sidebar"
    );
    const typesOverview = ComponentUtils.getFirstRouterOutletChildByComponentSelector(
      "audako4-configuration"
    );
    console.log(typesOverview);
    console.log(
      "[audako-powertoys] Retrieved sidebar component for entity created event:",
      sidebarComponent
    );
    if (sidebarComponent && typeof sidebarComponent.configDataChangedService?.configDataChangedTrigger === "function") {
      const detail = event.detail;
      sidebarComponent.configDataChangedService.configDataChangedTrigger(
        {
          id: detail.entityId,
          type: detail.entityType
        },
        true
      );
      console.log(
        "[audako-powertoys] Triggered sidebar configDataChangedTrigger due to entity created event:",
        detail
      );
    }
    if (typesOverview && typeof typesOverview._requestTypeCounts === "function") {
      typesOverview._requestTypeCounts();
      console.log(
        "[audako-powertoys] Triggered types overview _requestTypeCounts due to entity created event"
      );
    }
  }
  __name(handleEntityCreateEvent, "handleEntityCreateEvent");
  function registerNoopEntityEventHandlers() {
    document.addEventListener(ENTITY_UPDATED_EVENT_NAME, noopEntityEventHandler);
    document.addEventListener(ENTITY_CREATED_EVENT_NAME, handleEntityCreateEvent);
  }
  __name(registerNoopEntityEventHandlers, "registerNoopEntityEventHandlers");
  function registerExtensionEventHandler() {
    registerNoopEntityEventHandlers();
    window.addEventListener("message", (event) => {
      if (event.source !== window) {
        return;
      }
      if (!isExtensionWorldEventMessage(event.data)) {
        return;
      }
      const eventName = event.data.payload?.name;
      if (!isEntityEventName(eventName)) {
        return;
      }
      document.dispatchEvent(
        new CustomEvent(eventName, {
          detail: event.data.payload?.detail ?? null
        })
      );
      if (!event.data.requestId) {
        return;
      }
      dispatchEventAckToExtensionWorld(eventName, event.data.requestId, true);
    });
  }
  __name(registerExtensionEventHandler, "registerExtensionEventHandler");
  var MAIN_SCRIPT_PATTERN = /main-[A-Za-z0-9]+\.js$/;
  function interceptMainScript() {
    console.info("[audako-powertoys] Script interceptor active");
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (!(node instanceof HTMLScriptElement)) continue;
          const src = node.getAttribute("src");
          if (!src || !MAIN_SCRIPT_PATTERN.test(src)) continue;
          console.info("[audako-powertoys] Intercepted Angular main script:", src);
          node.type = "javascript/blocked";
          node.remove();
          observer.disconnect();
          replaceMainScript(src);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  __name(interceptMainScript, "interceptMainScript");
  async function replaceMainScript(originalSrc) {
    try {
      const scriptUrl = new URL(originalSrc, document.baseURI).href;
      const baseUrl = scriptUrl.substring(0, scriptUrl.lastIndexOf("/") + 1);
      console.info("[audako-powertoys] Fetching main script from:", scriptUrl);
      console.info("[audako-powertoys] Base URL for imports:", baseUrl);
      const response = await fetch(scriptUrl);
      if (!response.ok) {
        console.error(
          "[audako-powertoys] Failed to fetch main script:",
          response.status,
          response.statusText
        );
        return;
      }
      let scriptContent = await response.text();
      scriptContent = rewriteImports(scriptContent, baseUrl);
      scriptContent = modifyMainScript(scriptContent);
      console.info(
        "[audako-powertoys] Modified script content:\n",
        scriptContent.replace(/;/g, ";\n")
      );
      const blob = new Blob([scriptContent], { type: "application/javascript" });
      const blobUrl = URL.createObjectURL(blob);
      const newScript = document.createElement("script");
      newScript.type = "module";
      newScript.src = blobUrl;
      newScript.setAttribute("data-powertoys-injected", "true");
      newScript.onload = () => {
        URL.revokeObjectURL(blobUrl);
        console.info("[audako-powertoys] Modified main script loaded successfully");
      };
      newScript.onerror = (error) => {
        URL.revokeObjectURL(blobUrl);
        console.error("[audako-powertoys] Failed to load modified main script:", error);
      };
      (document.head || document.documentElement).appendChild(newScript);
    } catch (error) {
      console.error("[audako-powertoys] Error replacing main script:", error);
    }
  }
  __name(replaceMainScript, "replaceMainScript");
  function rewriteImports(content, baseUrl) {
    return content.replace(
      /(from\s*|import\s*\(|import\s*)(['"])(\.\.?\/)/g,
      (match, prefix, quote, relPath) => {
        return prefix + quote + baseUrl + relPath.substring(2);
      }
    );
  }
  __name(rewriteImports, "rewriteImports");
  function modifyMainScript(content) {
    const consoleSuppressMatch = content.match(
      /ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g
    );
    console.info(
      "[audako-powertoys] Console suppression pattern found:",
      consoleSuppressMatch ? consoleSuppressMatch.length + " match(es)" : "none"
    );
    content = content.replace(
      /ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g,
      ""
    );
    const bootstrapMatch = content.match(/\.bootstrapModule\(([^)]+)\)\.catch\(/g);
    console.info(
      "[audako-powertoys] Bootstrap pattern found:",
      bootstrapMatch ? bootstrapMatch.length + " match(es): " + JSON.stringify(bootstrapMatch) : "none"
    );
    content = content.replace(
      /\.bootstrapModule\(([^)]+)\)\.catch\(/g,
      `.bootstrapModule($1).then(function(ref) {window.__ngRef__ = ref;window.__ngInjector__ = ref.injector;var ngVerEl = document.querySelector("[ng-version]");var ngVer = ngVerEl ? ngVerEl.getAttribute("ng-version") : null;var ngMajor = ngVer ? parseInt(ngVer.split(".")[0], 10) : 0;window.__ngVersion__ = ngVer;console.log("[audako-powertoys] Angular version:", ngVer, "(major:", ngMajor + ")");var LVIEW_CONTEXT = 8;var LVIEW_TVIEW = 1;var LVIEW_PARENT = 3;var LVIEW_ID;var LVIEW_HEADER_OFFSET;if (ngMajor >= 19) {LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 27;} else if (ngMajor >= 16) {LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 25;} else if (ngMajor >= 14) {LVIEW_ID = 20; LVIEW_HEADER_OFFSET = 22;} else {LVIEW_ID = null; LVIEW_HEADER_OFFSET = 20;}window.__ngLViewIndices__ = {CONTEXT: LVIEW_CONTEXT,TVIEW: LVIEW_TVIEW,PARENT: LVIEW_PARENT,ID: LVIEW_ID,HEADER_OFFSET: LVIEW_HEADER_OFFSET};console.log("[audako-powertoys] LView indices:", window.__ngLViewIndices__);function ngGetLView(el) {var ctx = el && el.__ngContext__;if (typeof ctx === "number" && window.__ngLViewRegistry__) {return window.__ngLViewRegistry__.get(ctx) || null;}if (ctx && typeof ctx === "object") {if (Array.isArray(ctx.lView)) return ctx.lView;if (typeof ctx.lViewId === "number" && window.__ngLViewRegistry__) {return window.__ngLViewRegistry__.get(ctx.lViewId) || null;}}return Array.isArray(ctx) ? ctx : null;}function ngUnwrapRNode(value) {while (Array.isArray(value)) { value = value[0]; }return value;}function ngFindNodeIndex(lView, el) {if (!lView) return -1;var tView = lView[LVIEW_TVIEW];var end = tView && typeof tView.bindingStartIndex === "number" ? tView.bindingStartIndex : lView.length;for (var i = LVIEW_HEADER_OFFSET; i < end; i++) {if (ngUnwrapRNode(lView[i]) === el) return i;}return -1;}function ngGetComponentAtNodeIndex(lView, nodeIndex) {var tView = lView && lView[LVIEW_TVIEW];var tNode = tView && tView.data ? tView.data[nodeIndex] : null;if (!tNode) return null;var directiveStart = tNode.directiveStart;var componentOffset = tNode.componentOffset;if (typeof directiveStart === "number" && typeof componentOffset === "number" && componentOffset > -1) {return lView[directiveStart + componentOffset] || null;}var directiveEnd = tNode.directiveEnd;if (typeof directiveStart === "number" && typeof directiveEnd === "number") {for (var i = directiveStart; i < directiveEnd; i++) {var dir = lView[i];if (dir && dir.constructor && dir.constructor.\u0275cmp) return dir;}}return null;}function ngGetParentLView(lView) {var parent = lView && lView[LVIEW_PARENT];if (!Array.isArray(parent)) return null;if (parent[1] === true) return Array.isArray(parent[LVIEW_PARENT]) ? parent[LVIEW_PARENT] : null;return parent;}function ngGetOwningComponent(el) {var lView = ngGetLView(el);if (!lView) return null;while (lView && lView[LVIEW_TVIEW] && lView[LVIEW_TVIEW].type === 2) {lView = ngGetParentLView(lView);}return lView ? lView[LVIEW_CONTEXT] : null;}function ngGetComponent(el) {var lView = ngGetLView(el);if (!lView) return null;var nodeIndex = ngFindNodeIndex(lView, el);if (nodeIndex === -1) return null;return ngGetComponentAtNodeIndex(lView, nodeIndex);}function walkDomTree(el, depth) {depth = depth || 0;var node = { element: el.tagName, depth: depth, children: [] };var lView = ngGetLView(el);if (lView) {var comp = ngGetComponent(el) || ngGetOwningComponent(el);if (comp && typeof comp === "object" && comp.constructor) {node.component = comp;node.componentName = comp.constructor.name;if (LVIEW_ID !== null) node.lViewId = lView[LVIEW_ID];}}var children = el.children;for (var i = 0; i < children.length; i++) {var child = walkDomTree(children[i], depth + 1);if (child.component || child.children.length > 0) {node.children.push(child);}}return node;}setTimeout(function() {if (LVIEW_ID !== null && !window.__ngLViewRegistry__) {console.warn("[audako-powertoys] LView registry not captured!");return;}if (window.__ngLViewRegistry__) {console.log("[audako-powertoys] LView registry captured with", window.__ngLViewRegistry__.size, "entries");}window.__ngComponentTree__ = walkDomTree(document.body, 0);console.log("[audako-powertoys] Component tree:", window.__ngComponentTree__);}, 3000);console.log("[audako-powertoys] Angular bootstrap captured!", ref.injector);return ref;}).catch(`
    );
    const rewrittenBootstrap = content.match(
      /\.bootstrapModule\([^)]+\)\.then\(function[\s\S]{0,200}/
    );
    console.info(
      "[audako-powertoys] Rewritten bootstrap:",
      rewrittenBootstrap ? rewrittenBootstrap[0] : "not found"
    );
    const lviewRegistryHook = [
      `// Hook Map.prototype.set to capture Angular's internal LView registry.`,
      `// Angular 14+ stores LViews in a module-scoped Map keyed by numeric IDs.`,
      `// We detect this by fingerprinting LView arrays:`,
      `//   - Array with 22+ slots (min HEADER_OFFSET across v14+ is 22)`,
      `//   - [1] is a TView object (has "blueprint" and "type" properties)`,
      `//   - ID at [19] (v16+) or [20] (v14-15) matches the Map key`,
      `// This fires exactly once, then restores Map.prototype.set.`,
      `(function() {`,
      `  var origSet = Map.prototype.set;`,
      `  Map.prototype.set = function(key, value) {`,
      `    if (!window.__ngLViewRegistry__`,
      `        && typeof key === "number"`,
      `        && Array.isArray(value)`,
      `        && value.length >= 22`,
      `        && (value[19] === key || value[20] === key)`,
      `        && typeof value[1] === "object" && value[1] !== null`,
      `        && "blueprint" in value[1]`,
      `        && "type" in value[1]) {`,
      `      window.__ngLViewRegistry__ = this;`,
      `      console.log("[audako-powertoys] Captured LView registry Map!", this);`,
      `      Map.prototype.set = origSet;`,
      `    }`,
      `    return origSet.call(this, key, value);`,
      `  };`,
      `})();`
    ].join("\n");
    const injection = `console.log('[audako-powertoys] Running inside Angular context!');
`;
    return lviewRegistryHook + "\n" + injection + content;
  }
  __name(modifyMainScript, "modifyMainScript");
  function registerScriptIntercepts() {
    interceptMainScript();
  }
  __name(registerScriptIntercepts, "registerScriptIntercepts");
  registerExtensionEventHandler();
  registerScriptIntercepts();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9hcnJSZW1vdmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL25vb3AuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpYmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2xpZnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9BY3Rpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9pbnRlcnZhbFByb3ZpZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNBY3Rpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1NjaGVkdWxlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvYXN5bmMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNEYXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyLmpzIiwgIi4uLy4uL3NyYy91dGlscy9jb21wb25lbnQtdXRpbHMudHMiLCAiLi4vLi4vc3JjL21vZGVscy9hdWRha28tYXBwcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvdXJsLXV0aWxzLnRzIiwgIi4uLy4uL3NyYy9jb250ZW50L3NoYXJlZC9oZWxwZXJzL2Nyb3NzLXdvcmxkLWV2ZW50cy50cyIsICIuLi8uLi9zcmMvY29udGVudC9pbmplY3RlZC1zY3JpcHRzL2V4dGVuc2lvbi1ldmVudHMudHMiLCAiLi4vLi4vc3JjL2NvbnRlbnQvaW5qZWN0ZWQtc2NyaXB0cy9zY3JpcHQtaW50ZXJjZXB0cy50cyIsICIuLi8uLi9zcmMvY29udGVudC9pbmplY3RlZC1zY3JpcHRzL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwgImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwgImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzKGNyZWF0ZUltcGwpIHtcbiAgICB2YXIgX3N1cGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIEVycm9yLmNhbGwoaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIH07XG4gICAgdmFyIGN0b3JGdW5jID0gY3JlYXRlSW1wbChfc3VwZXIpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgICByZXR1cm4gY3RvckZ1bmM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVFcnJvckNsYXNzLmpzLm1hcCIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IGNyZWF0ZUVycm9yQ2xhc3MoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbChlcnJvcnMpIHtcbiAgICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgICAgID8gZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJylcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXAiLCAiZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyclJlbW92ZS5qcy5tYXAiLCAiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5LCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbnZhciBTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihpbml0aWFsVGVhcmRvd24pIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGVhcmRvd24gPSBpbml0aWFsVGVhcmRvd247XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9wYXJlbnRhZ2VfMSA9IF9fdmFsdWVzKF9wYXJlbnRhZ2UpLCBfcGFyZW50YWdlXzFfMSA9IF9wYXJlbnRhZ2VfMS5uZXh0KCk7ICFfcGFyZW50YWdlXzFfMS5kb25lOyBfcGFyZW50YWdlXzFfMSA9IF9wYXJlbnRhZ2VfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBfcGFyZW50YWdlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcGFyZW50YWdlXzFfMSAmJiAhX3BhcmVudGFnZV8xXzEuZG9uZSAmJiAoX2EgPSBfcGFyZW50YWdlXzEucmV0dXJuKSkgX2EuY2FsbChfcGFyZW50YWdlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50YWdlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5pdGlhbEZpbmFsaXplciA9IHRoaXMuaW5pdGlhbFRlYXJkb3duO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yID8gZS5lcnJvcnMgOiBbZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgICAgIGlmIChfZmluYWxpemVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9maW5hbGl6ZXJzXzEgPSBfX3ZhbHVlcyhfZmluYWxpemVycyksIF9maW5hbGl6ZXJzXzFfMSA9IF9maW5hbGl6ZXJzXzEubmV4dCgpOyAhX2ZpbmFsaXplcnNfMV8xLmRvbmU7IF9maW5hbGl6ZXJzXzFfMSA9IF9maW5hbGl6ZXJzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxpemVyID0gX2ZpbmFsaXplcnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjRmluYWxpemVyKGZpbmFsaXplcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzICE9PSBudWxsICYmIGVycm9ycyAhPT0gdm9pZCAwID8gZXJyb3JzIDogW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZXJyb3JzKSksIF9fcmVhZChlcnIuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzXzFfMSAmJiAhX2ZpbmFsaXplcnNfMV8xLmRvbmUgJiYgKF9iID0gX2ZpbmFsaXplcnNfMS5yZXR1cm4pKSBfYi5jYWxsKF9maW5hbGl6ZXJzXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGVhcmRvd24gJiYgdGVhcmRvd24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIodGVhcmRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYXJkb3duLl9hZGRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gKF9hID0gdGhpcy5fZmluYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pLnB1c2godGVhcmRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9oYXNQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICByZXR1cm4gX3BhcmVudGFnZSA9PT0gcGFyZW50IHx8IChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpICYmIF9wYXJlbnRhZ2UuaW5jbHVkZXMocGFyZW50KSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9hZGRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX3JlbW92ZVBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgYXJyUmVtb3ZlKF9wYXJlbnRhZ2UsIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBfZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnM7XG4gICAgICAgIF9maW5hbGl6ZXJzICYmIGFyclJlbW92ZShfZmluYWxpemVycywgdGVhcmRvd24pO1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBTdWJzY3JpcHRpb24gfTtcbmV4cG9ydCB2YXIgRU1QVFlfU1VCU0NSSVBUSU9OID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICAgICAodmFsdWUgJiYgJ2Nsb3NlZCcgaW4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZW1vdmUpICYmIGlzRnVuY3Rpb24odmFsdWUuYWRkKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnVuc3Vic2NyaWJlKSkpO1xufVxuZnVuY3Rpb24gZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihmaW5hbGl6ZXIpKSB7XG4gICAgICAgIGZpbmFsaXplcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmluYWxpemVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcCIsICJleHBvcnQgdmFyIGNvbmZpZyA9IHtcbiAgICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICAgIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gICAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwgImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciB0aW1lb3V0UHJvdmlkZXIgPSB7XG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0LmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVvdXRQcm92aWRlci5qcy5tYXAiLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4uL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycikge1xuICAgIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uVW5oYW5kbGVkRXJyb3IgPSBjb25maWcub25VbmhhbmRsZWRFcnJvcjtcbiAgICAgICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVwb3J0VW5oYW5kbGVkRXJyb3IuanMubWFwIiwgImV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcCIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xudmFyIGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICB2YXIgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LCBlcnJvclRocm93biA9IF9hLmVycm9yVGhyb3duLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yQ29udGV4dC5qcy5tYXAiLCAiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgX2JpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG52YXIgQ29uc3VtZXJPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWFsT2JzZXJ2ZXIgPSBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgfVxuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXIgPSB0aGlzLnBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbnN1bWVyT2JzZXJ2ZXI7XG59KCkpO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ICE9PSBudWxsICYmIG9ic2VydmVyT3JOZXh0ICE9PSB2b2lkIDAgPyBvYnNlcnZlck9yTmV4dCA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgPyBlcnJvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgIT09IG51bGwgJiYgY29tcGxldGUgIT09IHZvaWQgMCA/IGNvbXBsZXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0XzE7XG4gICAgICAgICAgICBpZiAoX3RoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMSA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZlck9yTmV4dC5uZXh0ICYmIGJpbmQob2JzZXJ2ZXJPck5leHQubmV4dCwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyT3JOZXh0LmVycm9yICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuZXJyb3IsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlLCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBTYWZlU3Vic2NyaWJlciB9O1xuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgY2FwdHVyZUVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JIYW5kbGVyKGVycikge1xuICAgIHRocm93IGVycjtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiA9IGNvbmZpZy5vblN0b3BwZWROb3RpZmljYXRpb247XG4gICAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpOyB9KTtcbn1cbmV4cG9ydCB2YXIgRU1QVFlfT0JTRVJWRVIgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IG5vb3AsXG4gICAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gICAgY29tcGxldGU6IG5vb3AsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaWJlci5qcy5tYXAiLCAiZXhwb3J0IHZhciBvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwgImV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCAiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5KGZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwZS5qcy5tYXAiLCAiaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgb3BlcmF0b3IgPSBfYS5vcGVyYXRvciwgc291cmNlID0gX2Euc291cmNlO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQob3BlcmF0b3JcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXIoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHJlc29sdmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5zb3VyY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuICh2YWx1ZSA9IHgpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBwcm9taXNlQ3RvciAhPT0gbnVsbCAmJiBwcm9taXNlQ3RvciAhPT0gdm9pZCAwID8gcHJvbWlzZUN0b3IgOiBjb25maWcuUHJvbWlzZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogUHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCAiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpIHtcbiAgICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cbnZhciBPcGVyYXRvclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPcGVyYXRvclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUsIHNob3VsZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbkZpbmFsaXplID0gb25GaW5hbGl6ZTtcbiAgICAgICAgX3RoaXMuc2hvdWxkVW5zdWJzY3JpYmUgPSBzaG91bGRVbnN1YnNjcmliZTtcbiAgICAgICAgX3RoaXMuX25leHQgPSBvbk5leHRcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9lcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPcGVyYXRvclN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgICAgICAgIHZhciBjbG9zZWRfMSA9IHRoaXMuY2xvc2VkO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgIWNsb3NlZF8xICYmICgoX2EgPSB0aGlzLm9uRmluYWxpemUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9wZXJhdG9yU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcGVyYXRvclN1YnNjcmliZXIuanMubWFwIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc2NoZWR1bGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwIiwgImltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG1hcChwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChwcm9qZWN0LmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4KyspKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcCIsICJleHBvcnQgdmFyIGRhdGVUaW1lc3RhbXBQcm92aWRlciA9IHtcbiAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChkYXRlVGltZXN0YW1wUHJvdmlkZXIuZGVsZWdhdGUgfHwgRGF0ZSkubm93KCk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGVUaW1lc3RhbXBQcm92aWRlci5qcy5tYXAiLCAiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IEFjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcCIsICJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCB2YXIgaW50ZXJ2YWxQcm92aWRlciA9IHtcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gaW50ZXJ2YWxQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5zZXRJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldEludGVydmFsLmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgIH0sXG4gICAgY2xlYXJJbnRlcnZhbDogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBpbnRlcnZhbFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJJbnRlcnZhbCkgfHwgY2xlYXJJbnRlcnZhbCkoaGFuZGxlKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxQcm92aWRlci5qcy5tYXAiLCAiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBpbnRlcnZhbFByb3ZpZGVyIH0gZnJvbSAnLi9pbnRlcnZhbFByb3ZpZGVyJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4uL3V0aWwvYXJyUmVtb3ZlJztcbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlkID0gKF9hID0gdGhpcy5pZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBfaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gaW50ZXJ2YWxQcm92aWRlci5zZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoX3NjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGludGVydmFsUHJvdmlkZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmcgPT09IGZhbHNlICYmIHRoaXMuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX2V4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIF9kZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9IGUgPyBlIDogbmV3IEVycm9yKCdTY2hlZHVsZWQgYWN0aW9uIHRocmV3IGZhbHN5IGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGlkID0gX2EuaWQsIHNjaGVkdWxlciA9IF9hLnNjaGVkdWxlcjtcbiAgICAgICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLndvcmsgPSB0aGlzLnN0YXRlID0gdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJSZW1vdmUoYWN0aW9ucywgdGhpcyk7XG4gICAgICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uKSk7XG5leHBvcnQgeyBBc3luY0FjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwIiwgImltcG9ydCB7IGRhdGVUaW1lc3RhbXBQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlcic7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoc2NoZWR1bGVyQWN0aW9uQ3Rvciwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3RvciA9IHNjaGVkdWxlckFjdGlvbkN0b3I7XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLnNjaGVkdWxlckFjdGlvbkN0b3IodGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBkYXRlVGltZXN0YW1wUHJvdmlkZXIubm93O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwIiwgImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbnZhciBBc3luY1NjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jU2NoZWR1bGVyKFNjaGVkdWxlckFjdGlvbiwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFNjaGVkdWxlckFjdGlvbiwgbm93KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIF90aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICgoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IEFzeW5jU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXAiLCAiaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5leHBvcnQgdmFyIGFzeW5jU2NoZWR1bGVyID0gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcbmV4cG9ydCB2YXIgYXN5bmMgPSBhc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcCIsICJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWx1ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0RhdGUuanMubWFwIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGFzeW5jIGFzIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpc1ZhbGlkRGF0ZSB9IGZyb20gJy4uL3V0aWwvaXNEYXRlJztcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lLCBpbnRlcnZhbE9yU2NoZWR1bGVyLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoZHVlVGltZSA9PT0gdm9pZCAwKSB7IGR1ZVRpbWUgPSAwOyB9XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jU2NoZWR1bGVyOyB9XG4gICAgdmFyIGludGVydmFsRHVyYXRpb24gPSAtMTtcbiAgICBpZiAoaW50ZXJ2YWxPclNjaGVkdWxlciAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcihpbnRlcnZhbE9yU2NoZWR1bGVyKSkge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gaW50ZXJ2YWxPclNjaGVkdWxlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsRHVyYXRpb24gPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZHVlID0gaXNWYWxpZERhdGUoZHVlVGltZSkgPyArZHVlVGltZSAtIHNjaGVkdWxlci5ub3coKSA6IGR1ZVRpbWU7XG4gICAgICAgIGlmIChkdWUgPCAwKSB7XG4gICAgICAgICAgICBkdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KG4rKyk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPD0gaW50ZXJ2YWxEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHVuZGVmaW5lZCwgaW50ZXJ2YWxEdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkdWUpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXIuanMubWFwIiwgImltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gcHJlZGljYXRlLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4KyspICYmIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXAiLCAiZXhwb3J0IGNsYXNzIEFuZ3VsYXJDb21wb25lbnQgZXh0ZW5kcyBPYmplY3Qge1xuICBwdWJsaWMgX19wcm90b19fOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG50eXBlIEFuZ3VsYXJMVmlldyA9IGFueVtdO1xudHlwZSBOZ0xDb250ZXh0TGlrZSA9IHtcbiAgbFZpZXc/OiBBbmd1bGFyTFZpZXc7XG4gIGxWaWV3SWQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50VXRpbHMge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBMVklFV19UVklFV19JTkRFWCA9IDE7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExWSUVXX1BBUkVOVF9JTkRFWCA9IDM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExWSUVXX0NPTlRFWFRfSU5ERVggPSA4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQURFUl9PRkZTRVQgPSAyNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVFZJRVdfRU1CRURERURfVFlQRSA9IDI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExDT05UQUlORVJfVFlQRV9JTkRFWCA9IDE7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0TFZpZXdSZWdpc3RyeSgpOiBNYXA8bnVtYmVyLCBBbmd1bGFyTFZpZXc+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fbmdMVmlld1JlZ2lzdHJ5X187XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRIZWFkZXJPZmZzZXQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAod2luZG93IGFzIGFueSkuX19uZ0xWaWV3SW5kaWNlc19fPy5IRUFERVJfT0ZGU0VUO1xuICAgIHJldHVybiB0eXBlb2YgaGVhZGVyT2Zmc2V0ID09PSAnbnVtYmVyJ1xuICAgICAgPyBoZWFkZXJPZmZzZXRcbiAgICAgIDogQ29tcG9uZW50VXRpbHMuREVGQVVMVF9IRUFERVJfT0ZGU0VUO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZUxWaWV3RnJvbUNvbnRleHQoY29udGV4dDogYW55KTogQW5ndWxhckxWaWV3IHwgbnVsbCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRMVmlld1JlZ2lzdHJ5KCk/LmdldChjb250ZXh0KSA/PyBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgbENvbnRleHQgPSBjb250ZXh0IGFzIE5nTENvbnRleHRMaWtlO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShsQ29udGV4dC5sVmlldykpIHtcbiAgICAgICAgcmV0dXJuIGxDb250ZXh0LmxWaWV3O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxDb250ZXh0LmxWaWV3SWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRMVmlld1JlZ2lzdHJ5KCk/LmdldChsQ29udGV4dC5sVmlld0lkKSA/PyBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdW53cmFwUk5vZGUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IGN1cnJlbnQgPSB2YWx1ZTtcblxuICAgIHdoaWxlIChBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGZpbmROb2RlSW5kZXhJbkxWaWV3KGxWaWV3OiBBbmd1bGFyTFZpZXcsIGVsZW1lbnQ6IEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHRWaWV3ID0gbFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfVFZJRVdfSU5ERVhdO1xuICAgIGNvbnN0IGVuZCA9XG4gICAgICB0VmlldyAmJiB0eXBlb2YgdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXggPT09ICdudW1iZXInID8gdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXggOiBsVmlldy5sZW5ndGg7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbihDb21wb25lbnRVdGlscy5nZXRIZWFkZXJPZmZzZXQoKSwgZW5kKTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICBpZiAoQ29tcG9uZW50VXRpbHMudW53cmFwUk5vZGUobFZpZXdbaV0pID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldENvbXBvbmVudEF0Tm9kZUluZGV4KFxuICAgIGxWaWV3OiBBbmd1bGFyTFZpZXcsXG4gICAgbm9kZUluZGV4OiBudW1iZXIsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCB0VmlldyA9IGxWaWV3W0NvbXBvbmVudFV0aWxzLkxWSUVXX1RWSUVXX0lOREVYXTtcbiAgICBjb25zdCB0Tm9kZSA9IHRWaWV3Py5kYXRhPy5bbm9kZUluZGV4XTtcbiAgICBpZiAoIXROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RpdmVTdGFydCA9IHROb2RlLmRpcmVjdGl2ZVN0YXJ0O1xuICAgIGNvbnN0IGNvbXBvbmVudE9mZnNldCA9IHROb2RlLmNvbXBvbmVudE9mZnNldDtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBkaXJlY3RpdmVTdGFydCA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBjb21wb25lbnRPZmZzZXQgPT09ICdudW1iZXInICYmXG4gICAgICBjb21wb25lbnRPZmZzZXQgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIGxWaWV3W2RpcmVjdGl2ZVN0YXJ0ICsgY29tcG9uZW50T2Zmc2V0XSA/PyBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGl2ZUVuZCA9IHROb2RlLmRpcmVjdGl2ZUVuZDtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGl2ZVN0YXJ0ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlyZWN0aXZlRW5kICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGRpcmVjdGl2ZVN0YXJ0OyBpIDwgZGlyZWN0aXZlRW5kOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGxWaWV3W2ldO1xuICAgICAgaWYgKGRpcmVjdGl2ZT8uY29uc3RydWN0b3I/Lsm1Y21wKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRQYXJlbnRMVmlldyhsVmlldzogQW5ndWxhckxWaWV3KTogQW5ndWxhckxWaWV3IHwgbnVsbCB7XG4gICAgY29uc3QgcGFyZW50ID0gbFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfUEFSRU5UX0lOREVYXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gTENvbnRhaW5lciBtYXJrZXIgaXMgYHRydWVgIGF0IGluZGV4IDEuXG4gICAgaWYgKHBhcmVudFtDb21wb25lbnRVdGlscy5MQ09OVEFJTkVSX1RZUEVfSU5ERVhdID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBwYXJlbnRMVmlldyA9IHBhcmVudFtDb21wb25lbnRVdGlscy5MVklFV19QQVJFTlRfSU5ERVhdO1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyZW50TFZpZXcpID8gcGFyZW50TFZpZXcgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRPd25pbmdDb21wb25lbnRGcm9tTFZpZXcobFZpZXc6IEFuZ3VsYXJMVmlldyk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBsZXQgY3VycmVudExWaWV3OiBBbmd1bGFyTFZpZXcgfCBudWxsID0gbFZpZXc7XG5cbiAgICB3aGlsZSAoXG4gICAgICBjdXJyZW50TFZpZXcgJiZcbiAgICAgIGN1cnJlbnRMVmlld1tDb21wb25lbnRVdGlscy5MVklFV19UVklFV19JTkRFWF0/LnR5cGUgPT09IENvbXBvbmVudFV0aWxzLlRWSUVXX0VNQkVEREVEX1RZUEVcbiAgICApIHtcbiAgICAgIGN1cnJlbnRMVmlldyA9IENvbXBvbmVudFV0aWxzLmdldFBhcmVudExWaWV3KGN1cnJlbnRMVmlldyk7XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50TFZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50TFZpZXdbQ29tcG9uZW50VXRpbHMuTFZJRVdfQ09OVEVYVF9JTkRFWF0gPz8gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29tcG9uZW50QnlUYWdOYW1lKHRhZ05hbWU6IHN0cmluZyk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWdOYW1lKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50RnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEZpcnN0Um91dGVyT3V0bGV0Q2hpbGRCeUNvbXBvbmVudFNlbGVjdG9yKFxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiBzdHJpbmcsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsIHtcbiAgICBjb25zdCBjb21wb25lbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb21wb25lbnRTZWxlY3Rvcik7XG4gICAgaWYgKCFjb21wb25lbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZXJPdXRsZXRFbGVtZW50ID0gY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdyb3V0ZXItb3V0bGV0Jyk7XG4gICAgaWYgKCFyb3V0ZXJPdXRsZXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZWRFbGVtZW50ID0gcm91dGVyT3V0bGV0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyByb3V0ZXJPdXRsZXRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoIXJvdXRlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBDb21wb25lbnRVdGlscy5nZXRDb21wb25lbnRGcm9tRWxlbWVudChyb3V0ZWRFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWxsQ29tcG9uZW50c0J5VGFnTmFtZSh0YWdOYW1lOiBzdHJpbmcpOiBBbmd1bGFyQ29tcG9uZW50W10ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRzOiBBbmd1bGFyQ29tcG9uZW50W10gPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50RnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRDb21wb25lbnRGcm9tRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogQW5ndWxhckNvbXBvbmVudCB8IG51bGwge1xuICAgIGNvbnN0IG5nR2V0Q29tcG9uZW50ID0gKHdpbmRvdyBhcyBhbnkpLm5nPy5nZXRDb21wb25lbnQ7XG4gICAgaWYgKHR5cGVvZiBuZ0dldENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmdHZXRDb21wb25lbnQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgYW5kIGNvbnRpbnVlIHdpdGggaW50ZXJuYWwgZmFsbGJhY2suXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnRbJ19fbmdDb250ZXh0X18nXTtcblxuICAgIGNvbnNvbGUubG9nKGBbYXVkYWtvLXBvd2VydG95c10gUmV0cmlldmluZyBBbmd1bGFyIGNvbXBvbmVudCBmcm9tIGVsZW1lbnQ6YCwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGNvbnRleHQsXG4gICAgfSk7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBsVmlldyA9IENvbXBvbmVudFV0aWxzLnJlc29sdmVMVmlld0Zyb21Db250ZXh0KGNvbnRleHQpO1xuICAgIGlmICghbFZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVJbmRleCA9IENvbXBvbmVudFV0aWxzLmZpbmROb2RlSW5kZXhJbkxWaWV3KGxWaWV3LCBlbGVtZW50KTtcbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50QXROb2RlSW5kZXgobFZpZXcsIG5vZGVJbmRleCk7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBvbmVudFV0aWxzLmdldE93bmluZ0NvbXBvbmVudEZyb21MVmlldyhsVmlldyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dGVuZE1ldGhvZChcbiAgICBjb21wb25lbnQ6IEFuZ3VsYXJDb21wb25lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGZuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICk6IEFuZ3VsYXJDb21wb25lbnQge1xuICAgIGNvbnN0IHByb3RvID0gY29tcG9uZW50Ll9fcHJvdG9fXztcbiAgICBjb25zdCBjdXJyZW50TWV0aG9kID0gcHJvdG9bbmFtZV07XG5cbiAgICBwcm90b1tuYW1lXSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICAgIGZuKGFyZ3MpO1xuICAgICAgcmV0dXJuIGN1cnJlbnRNZXRob2QuYmluZChjb21wb25lbnQpKGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBleHRlbmRNZXRob2RBc3luYyhcbiAgICBjb21wb25lbnQ6IEFuZ3VsYXJDb21wb25lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGZuOiAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8dm9pZD4sXG4gICk6IEFuZ3VsYXJDb21wb25lbnQge1xuICAgIGNvbnN0IGN1cnJlbnRNZXRob2QgPSBjb21wb25lbnRbbmFtZSArICdfb3JpZ2luYWwnXSA/PyBjb21wb25lbnRbbmFtZV07XG4gICAgY29tcG9uZW50W25hbWUgKyAnX29yaWdpbmFsJ10gPSBjdXJyZW50TWV0aG9kO1xuXG4gICAgY29tcG9uZW50W25hbWVdID0gYXN5bmMgKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgYXdhaXQgZm4oYXJncyk7XG4gICAgICByZXR1cm4gY3VycmVudE1ldGhvZC5iaW5kKGNvbXBvbmVudCkoYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dGVuZFByb3RvTWV0aG9kQXN5bmMoXG4gICAgY29tcG9uZW50OiBBbmd1bGFyQ29tcG9uZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBQcm9taXNlPHZvaWQ+LFxuICApOiBBbmd1bGFyQ29tcG9uZW50IHtcbiAgICBjb25zdCBjdXJyZW50TWV0aG9kID0gY29tcG9uZW50Ll9fcHJvdG9fX1tuYW1lICsgJ19vcmlnaW5hbCddID8/IGNvbXBvbmVudC5fX3Byb3RvX19bbmFtZV07XG4gICAgY29tcG9uZW50Ll9fcHJvdG9fX1tuYW1lICsgJ19vcmlnaW5hbCddID0gY3VycmVudE1ldGhvZDtcblxuICAgIGNvbXBvbmVudC5fX3Byb3RvX19bbmFtZV0gPSBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICBhd2FpdCBmbihhcmdzKTtcbiAgICAgIHJldHVybiBjdXJyZW50TWV0aG9kLmJpbmQoY29tcG9uZW50KShhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuIiwgImV4cG9ydCBlbnVtIEF1ZGFrb0FwcCB7XG4gIERhc2hib2FyZCA9ICdEYXNoYm9hcmQnLFxuICBDb25maWd1cmF0aW9uID0gJ0NvbmZpZ3VyYXRpb24nLFxuICBBZG1pbmlzdHJhdGlvbiA9ICdBZG1pbmlzdHJhdGlvbicsXG4gIE1haW50ZW5hbmNlID0gJ01haW50ZW5hbmNlJyxcbn1cbmV4cG9ydCBjb25zdCBBcHBJY29uczogeyBbYXBwIGluIEF1ZGFrb0FwcF06IHN0cmluZyB9ID0ge1xuICBbQXVkYWtvQXBwLkRhc2hib2FyZF06ICdhZGsgYWRrLWRhc2hib2FyZCcsXG4gIFtBdWRha29BcHAuQ29uZmlndXJhdGlvbl06ICdmYXMgZmEtY29ncycsXG4gIFtBdWRha29BcHAuTWFpbnRlbmFuY2VdOiAnZmEgZmEtdG9vbHMnLFxuICBbQXVkYWtvQXBwLkFkbWluaXN0cmF0aW9uXTogJ2FkayBhZGstc3RhZmYtYXNzaWdubWVudCcsXG59O1xuIiwgImltcG9ydCB0eXBlIHsgRW50aXR5VHlwZSB9IGZyb20gJ2F1ZGFrby1jb3JlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHR5cGUgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1ZGFrb0FwcCB9IGZyb20gJy4uL21vZGVscy9hdWRha28tYXBwcyc7XG5leHBvcnQgY2xhc3MgVXJsVXRpbHMge1xuICBwcml2YXRlIHN0YXRpYyBhcHBSb3V0ZU1hcHBpbmc6IHsgW2tleTogc3RyaW5nXTogQXVkYWtvQXBwIH0gPSB7XG4gICAgY29uZmlnOiBBdWRha29BcHAuQ29uZmlndXJhdGlvbixcbiAgICBhcHBsaWNhdGlvbjogQXVkYWtvQXBwLkRhc2hib2FyZCxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIG9wZW5BcHAoXG4gICAgYXBwOiBBdWRha29BcHAsXG4gICAgdGVuYW50SWQ6IHN0cmluZyxcbiAgICBncm91cElkPzogc3RyaW5nLFxuICAgIGRldGFpbElkPzogc3RyaW5nLFxuICAgIGRldGFpbFR5cGU/OiBFbnRpdHlUeXBlLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSBVcmxVdGlscy5idWlsZEFwcFVybChhcHAsIHRlbmFudElkLCBncm91cElkLCBkZXRhaWxJZCwgZGV0YWlsVHlwZSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ1aWxkQXBwVXJsKFxuICAgIGFwcDogQXVkYWtvQXBwLFxuICAgIHRlbmFudElkOiBzdHJpbmcsXG4gICAgZ3JvdXBJZD86IHN0cmluZyxcbiAgICBkZXRhaWxJZD86IHN0cmluZyxcbiAgICBkZXRhaWxUeXBlPzogRW50aXR5VHlwZSxcbiAgKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsID0gbnVsbDtcbiAgICBzd2l0Y2ggKGFwcCkge1xuICAgICAgY2FzZSBBdWRha29BcHAuRGFzaGJvYXJkOlxuICAgICAgICB1cmwgPSBgLyR7dGVuYW50SWR9L2FwcGxpY2F0aW9uLyR7Z3JvdXBJZCA/PyAnJ31gO1xuICAgICAgICBpZiAoZGV0YWlsSWQpIHtcbiAgICAgICAgICB1cmwgKz0gYC8ke2RldGFpbElkID8/ICcnfWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEF1ZGFrb0FwcC5Db25maWd1cmF0aW9uOlxuICAgICAgICB1cmwgPSBgLyR7dGVuYW50SWR9L2NvbmZpZy8ke2dyb3VwSWQgPz8gJyd9YDtcbiAgICAgICAgaWYgKGRldGFpbElkICYmIGRldGFpbFR5cGUpIHtcbiAgICAgICAgICB1cmwgKz0gYC8ke2RldGFpbElkfS8ke2RldGFpbFR5cGV9YDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQXVkYWtvQXBwLkFkbWluaXN0cmF0aW9uOlxuICAgICAgICB1cmwgPSBgYWRtaW5pc3RyYXRpb24vJHt0ZW5hbnRJZH1gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VGVuYW50SWRGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0ZW5hbnRJZCA9IHVybC5zcGxpdCgnLycpWzFdO1xuXG4gICAgaWYgKHRlbmFudElkLmxlbmd0aCA9PT0gMjQpIHtcbiAgICAgIHJldHVybiB0ZW5hbnRJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VycmVudEFwcCgpOiBBdWRha29BcHAge1xuICAgIHJldHVybiBVcmxVdGlscy5nZXRBcHBGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEFwcEZyb21VcmwodXJsOiBzdHJpbmcpOiBBdWRha29BcHAge1xuICAgIGlmICghdXJsIHx8IHVybC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcCA9IHVybC5zcGxpdCgnLycpWzJdO1xuXG4gICAgaWYgKFVybFV0aWxzLmFwcFJvdXRlTWFwcGluZ1thcHBdKSB7XG4gICAgICByZXR1cm4gVXJsVXRpbHMuYXBwUm91dGVNYXBwaW5nW2FwcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEFwcFVybChhcHA6IEF1ZGFrb0FwcCk6IHN0cmluZyB7XG4gICAgbGV0IHVybCA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMoVXJsVXRpbHMuYXBwUm91dGVNYXBwaW5nKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoVXJsVXRpbHMuYXBwUm91dGVNYXBwaW5nW2tleV0gPT09IGFwcCkge1xuICAgICAgICB1cmwgPSBrZXk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0R3JvdXBJZEZyb21VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFwcCA9IFVybFV0aWxzLmdldEFwcEZyb21VcmwodXJsKTtcbiAgICBpZiAoIWFwcCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoUmVzdWx0cyA9IHVybC5tYXRjaCgvKC57MjR9KVxcLyhhcHBsaWNhdGlvbnxjb25maWcpXFwvKC57MjR9KS8pO1xuICAgIGlmICghbWF0Y2hSZXN1bHRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoUmVzdWx0c1szXTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlVG9VcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gbnVsbDtcbiAgICByZXR1cm4gdGltZXIoMCwgNTApLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gY3VycmVudExvY2F0aW9uICE9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICByZXR1cm4gY3VycmVudExvY2F0aW9uO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBY3RpdmVBcHAoYXBwOiBBdWRha29BcHApOiBib29sZWFuIHtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgYXBwVXJsOiB7IFthcHAgaW4gQXVkYWtvQXBwXTogc3RyaW5nIH0gPSB7XG4gICAgICBbQXVkYWtvQXBwLkFkbWluaXN0cmF0aW9uXTogJ2FkbWluaXN0cmF0aW9uJyxcbiAgICAgIFtBdWRha29BcHAuQ29uZmlndXJhdGlvbl06ICdjb25maWcnLFxuICAgICAgW0F1ZGFrb0FwcC5EYXNoYm9hcmRdOiAnYXBwbGljYXRpb24nLFxuICAgICAgW0F1ZGFrb0FwcC5NYWludGVuYW5jZV06ICdtYWludGVuYW5jZScsXG4gICAgfTtcblxuICAgIHJldHVybiBjdXJyZW50TG9jYXRpb24uaW5jbHVkZXMoYXBwVXJsW2FwcF0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0luRW50aXR5Q29uZmlndXJhdGlvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgcmV0dXJuIFVybFV0aWxzLmlzQWN0aXZlQXBwKEF1ZGFrb0FwcC5Db25maWd1cmF0aW9uKSAmJiBjdXJyZW50TG9jYXRpb24uaW5jbHVkZXMoJ2RldGFpbCcpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRFbnRpdHlDb25maWd1cmF0aW9uRGV0YWlscygpOiB7XG4gICAgdGVuYW50SWQ6IHN0cmluZztcbiAgICBncm91cElkOiBzdHJpbmc7XG4gICAgZW50aXR5SWQ6IHN0cmluZztcbiAgICBlbnRpdHlUeXBlOiBFbnRpdHlUeXBlO1xuICB9IHtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICBjb25zdCBtYXRjaFJlc3VsdHMgPSBjdXJyZW50TG9jYXRpb24ubWF0Y2goXG4gICAgICAvKC57MjR9KVxcL2NvbmZpZ1xcLyguezI0fSlcXC9kZXRhaWxcXC8oLnszLDI0fSlcXC8oW0Etel0rKS8sXG4gICAgKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbmFudElkOiBtYXRjaFJlc3VsdHNbMV0sXG4gICAgICBncm91cElkOiBtYXRjaFJlc3VsdHNbMl0sXG4gICAgICBlbnRpdHlJZDogbWF0Y2hSZXN1bHRzWzNdLFxuICAgICAgZW50aXR5VHlwZTogbWF0Y2hSZXN1bHRzWzRdIGFzIEVudGl0eVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNJbkVudGl0eUxpc3QoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHJldHVybiBjdXJyZW50TG9jYXRpb24uaW5jbHVkZXMoJ2xpc3QnKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RW50aXR5TGlzdERldGFpbHMoKToge1xuICAgIHRlbmFudElkOiBzdHJpbmc7XG4gICAgZ3JvdXBJZDogc3RyaW5nO1xuICAgIGVudGl0eVR5cGU6IEVudGl0eVR5cGU7XG4gIH0ge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdHMgPSBjdXJyZW50TG9jYXRpb24ubWF0Y2goLyguezI0fSlcXC9jb25maWdcXC8oLnsyNH0pXFwvbGlzdFxcLyhbQS16XSspLyk7XG4gICAgaWYgKCFtYXRjaFJlc3VsdHMpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbmFudElkOiBtYXRjaFJlc3VsdHNbMV0sXG4gICAgICBncm91cElkOiBtYXRjaFJlc3VsdHNbMl0sXG4gICAgICBlbnRpdHlUeXBlOiBtYXRjaFJlc3VsdHNbM10gYXMgRW50aXR5VHlwZSxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0UgPSAnYXVkYWtvLXBvd2VydG95cy1leHRlbnNpb24nIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IE1BSU5fV09STERfU09VUkNFID0gJ2F1ZGFrby1wb3dlcnRveXMtbWFpbicgYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgRVhURU5TSU9OX0VWRU5UX01FU1NBR0VfVFlQRSA9ICdhdWRha28tcG93ZXJ0b3lzOmV2ZW50JyBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBNQUlOX1dPUkxEX0VWRU5UX0FDS19UWVBFID0gJ2F1ZGFrby1wb3dlcnRveXM6ZXZlbnQ6YWNrJyBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9VUERBVEVEX0VWRU5UX05BTUUgPSAnZW50aXR5LnVwZGF0ZWQnIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IEVOVElUWV9DUkVBVEVEX0VWRU5UX05BTUUgPSAnZW50aXR5LmNyZWF0ZWQnIGFzIGNvbnN0O1xuXG5jb25zdCBFTlRJVFlfRVZFTlRfTkFNRVMgPSBbRU5USVRZX1VQREFURURfRVZFTlRfTkFNRSwgRU5USVRZX0NSRUFURURfRVZFTlRfTkFNRV0gYXMgY29uc3Q7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5Q3JlYXRlZEV2ZW50UGF5bG9hZCB7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ6IHN0cmluZztcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgZ3JvdXBJZDogc3RyaW5nO1xuICBzb3VyY2VUb29sOiAnY3JlYXRlLWVudGl0eSc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBFbnRpdHlFdmVudE5hbWUgPSAodHlwZW9mIEVOVElUWV9FVkVOVF9OQU1FUylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgRXh0ZW5zaW9uV29ybGRFdmVudE1lc3NhZ2UgPSB7XG4gIHNvdXJjZTogdHlwZW9mIEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0U7XG4gIHR5cGU6IHR5cGVvZiBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFO1xuICByZXF1ZXN0SWQ/OiBzdHJpbmc7XG4gIHBheWxvYWQ/OiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBkZXRhaWw/OiBhbnk7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBNYWluV29ybGRFdmVudEFja01lc3NhZ2UgPSB7XG4gIHNvdXJjZTogdHlwZW9mIE1BSU5fV09STERfU09VUkNFO1xuICB0eXBlOiB0eXBlb2YgTUFJTl9XT1JMRF9FVkVOVF9BQ0tfVFlQRTtcbiAgcmVxdWVzdElkPzogc3RyaW5nO1xuICBwYXlsb2FkPzoge1xuICAgIGV2ZW50Pzogc3RyaW5nO1xuICAgIG9rPzogYm9vbGVhbjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBTExPV0VEX0VOVElUWV9FVkVOVF9OQU1FUyA9IG5ldyBTZXQ8c3RyaW5nPihFTlRJVFlfRVZFTlRfTkFNRVMpO1xuXG5mdW5jdGlvbiBpc1JlY29yZCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUmVjb3JkPHN0cmluZywgYW55PiB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUV2ZW50TmFtZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRW50aXR5RXZlbnROYW1lIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgQUxMT1dFRF9FTlRJVFlfRVZFTlRfTkFNRVMuaGFzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZW5zaW9uV29ybGRFdmVudE1lc3NhZ2UodmFsdWU6IGFueSk6IHZhbHVlIGlzIEV4dGVuc2lvbldvcmxkRXZlbnRNZXNzYWdlIHtcbiAgcmV0dXJuIChcbiAgICBpc1JlY29yZCh2YWx1ZSkgJiZcbiAgICB2YWx1ZS5zb3VyY2UgPT09IEVYVEVOU0lPTl9XT1JMRF9TT1VSQ0UgJiZcbiAgICB2YWx1ZS50eXBlID09PSBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01haW5Xb3JsZEV2ZW50QWNrTWVzc2FnZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgTWFpbldvcmxkRXZlbnRBY2tNZXNzYWdlIHtcbiAgcmV0dXJuIChcbiAgICBpc1JlY29yZCh2YWx1ZSkgJiZcbiAgICB2YWx1ZS5zb3VyY2UgPT09IE1BSU5fV09STERfU09VUkNFICYmXG4gICAgdmFsdWUudHlwZSA9PT0gTUFJTl9XT1JMRF9FVkVOVF9BQ0tfVFlQRVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudFRvTWFpbldvcmxkKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IGFueSwgcmVxdWVzdElkPzogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IG1lc3NhZ2U6IEV4dGVuc2lvbldvcmxkRXZlbnRNZXNzYWdlID0ge1xuICAgIHNvdXJjZTogRVhURU5TSU9OX1dPUkxEX1NPVVJDRSxcbiAgICB0eXBlOiBFWFRFTlNJT05fRVZFTlRfTUVTU0FHRV9UWVBFLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgIGRldGFpbCxcbiAgICB9LFxuICB9O1xuXG4gIGlmIChyZXF1ZXN0SWQpIHtcbiAgICBtZXNzYWdlLnJlcXVlc3RJZCA9IHJlcXVlc3RJZDtcbiAgfVxuXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudEFja1RvRXh0ZW5zaW9uV29ybGQoXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxuICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgb2sgPSB0cnVlLFxuKTogdm9pZCB7XG4gIGNvbnN0IG1lc3NhZ2U6IE1haW5Xb3JsZEV2ZW50QWNrTWVzc2FnZSA9IHtcbiAgICBzb3VyY2U6IE1BSU5fV09STERfU09VUkNFLFxuICAgIHR5cGU6IE1BSU5fV09STERfRVZFTlRfQUNLX1RZUEUsXG4gICAgcmVxdWVzdElkLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBvayxcbiAgICB9LFxuICB9O1xuXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xufVxuIiwgImltcG9ydCB7IEF1ZGFrb0FwcCB9IGZyb20gJy4uLy4uL21vZGVscy9hdWRha28tYXBwcyc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscyc7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQge1xuICBFTlRJVFlfQ1JFQVRFRF9FVkVOVF9OQU1FLFxuICBFTlRJVFlfVVBEQVRFRF9FVkVOVF9OQU1FLFxuICB0eXBlIEVudGl0eUNyZWF0ZWRFdmVudFBheWxvYWQsXG4gIGRpc3BhdGNoRXZlbnRBY2tUb0V4dGVuc2lvbldvcmxkLFxuICBpc0VudGl0eUV2ZW50TmFtZSxcbiAgaXNFeHRlbnNpb25Xb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi4vc2hhcmVkL2hlbHBlcnMvY3Jvc3Mtd29ybGQtZXZlbnRzJztcblxuaW50ZXJmYWNlIFNpZGViYXJDb21wb25lbnQge1xuICBjb25maWdEYXRhQ2hhbmdlZFNlcnZpY2U6IHtcbiAgICBjb25maWdEYXRhQ2hhbmdlZFRyaWdnZXIoY2hhbmdlOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZyB9LCByZXNldENhY2hlPzogYm9vbGVhbik6IHZvaWQ7XG4gIH07XG59XG5cbmludGVyZmFjZSBUeXBlc092ZXJ2aWV3Q29tcG9uZW50IHtcbiAgX3JlcXVlc3RUeXBlQ291bnRzKCk6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIG5vb3BFbnRpdHlFdmVudEhhbmRsZXIoX2V2ZW50OiBFdmVudCk6IHZvaWQge31cblxuZnVuY3Rpb24gaGFuZGxlRW50aXR5Q3JlYXRlRXZlbnQoZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gIGlmIChVcmxVdGlscy5nZXRDdXJyZW50QXBwKCkgIT09IEF1ZGFrb0FwcC5Db25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coXG4gICAgJ1thdWRha28tcG93ZXJ0b3lzXSBSZWNlaXZlZCBlbnRpdHkgY3JlYXRlZCBldmVudCBpbiBleHRlbnNpb24gd29ybGQ6JyxcbiAgICBldmVudC50eXBlLFxuICAgIGV2ZW50LmRldGFpbCxcbiAgKTtcblxuICBjb25zdCBzaWRlYmFyQ29tcG9uZW50ID0gQ29tcG9uZW50VXRpbHMuZ2V0Q29tcG9uZW50QnlUYWdOYW1lKFxuICAgICdhdWRha280LXNpZGViYXInLFxuICApIGFzIHVua25vd24gYXMgU2lkZWJhckNvbXBvbmVudDtcblxuICBjb25zdCB0eXBlc092ZXJ2aWV3ID0gQ29tcG9uZW50VXRpbHMuZ2V0Rmlyc3RSb3V0ZXJPdXRsZXRDaGlsZEJ5Q29tcG9uZW50U2VsZWN0b3IoXG4gICAgJ2F1ZGFrbzQtY29uZmlndXJhdGlvbicsXG4gICkgYXMgdW5rbm93biBhcyBUeXBlc092ZXJ2aWV3Q29tcG9uZW50O1xuXG4gIGNvbnNvbGUubG9nKHR5cGVzT3ZlcnZpZXcpO1xuICBjb25zb2xlLmxvZyhcbiAgICAnW2F1ZGFrby1wb3dlcnRveXNdIFJldHJpZXZlZCBzaWRlYmFyIGNvbXBvbmVudCBmb3IgZW50aXR5IGNyZWF0ZWQgZXZlbnQ6JyxcbiAgICBzaWRlYmFyQ29tcG9uZW50LFxuICApO1xuXG4gIGlmIChcbiAgICBzaWRlYmFyQ29tcG9uZW50ICYmXG4gICAgdHlwZW9mIHNpZGViYXJDb21wb25lbnQuY29uZmlnRGF0YUNoYW5nZWRTZXJ2aWNlPy5jb25maWdEYXRhQ2hhbmdlZFRyaWdnZXIgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgZGV0YWlsID0gZXZlbnQuZGV0YWlsIGFzIEVudGl0eUNyZWF0ZWRFdmVudFBheWxvYWQ7XG4gICAgc2lkZWJhckNvbXBvbmVudC5jb25maWdEYXRhQ2hhbmdlZFNlcnZpY2UuY29uZmlnRGF0YUNoYW5nZWRUcmlnZ2VyKFxuICAgICAge1xuICAgICAgICBpZDogZGV0YWlsLmVudGl0eUlkLFxuICAgICAgICB0eXBlOiBkZXRhaWwuZW50aXR5VHlwZSxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdbYXVkYWtvLXBvd2VydG95c10gVHJpZ2dlcmVkIHNpZGViYXIgY29uZmlnRGF0YUNoYW5nZWRUcmlnZ2VyIGR1ZSB0byBlbnRpdHkgY3JlYXRlZCBldmVudDonLFxuICAgICAgZGV0YWlsLFxuICAgICk7XG4gIH1cblxuICBpZiAodHlwZXNPdmVydmlldyAmJiB0eXBlb2YgdHlwZXNPdmVydmlldy5fcmVxdWVzdFR5cGVDb3VudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0eXBlc092ZXJ2aWV3Ll9yZXF1ZXN0VHlwZUNvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ1thdWRha28tcG93ZXJ0b3lzXSBUcmlnZ2VyZWQgdHlwZXMgb3ZlcnZpZXcgX3JlcXVlc3RUeXBlQ291bnRzIGR1ZSB0byBlbnRpdHkgY3JlYXRlZCBldmVudCcsXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vb3BFbnRpdHlFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEVOVElUWV9VUERBVEVEX0VWRU5UX05BTUUsIG5vb3BFbnRpdHlFdmVudEhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEVOVElUWV9DUkVBVEVEX0VWRU5UX05BTUUsIGhhbmRsZUVudGl0eUNyZWF0ZUV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRXh0ZW5zaW9uRXZlbnRIYW5kbGVyKCk6IHZvaWQge1xuICByZWdpc3Rlck5vb3BFbnRpdHlFdmVudEhhbmRsZXJzKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5zb3VyY2UgIT09IHdpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNFeHRlbnNpb25Xb3JsZEV2ZW50TWVzc2FnZShldmVudC5kYXRhKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50LmRhdGEucGF5bG9hZD8ubmFtZTtcbiAgICBpZiAoIWlzRW50aXR5RXZlbnROYW1lKGV2ZW50TmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgICBkZXRhaWw6IGV2ZW50LmRhdGEucGF5bG9hZD8uZGV0YWlsID8/IG51bGwsXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgaWYgKCFldmVudC5kYXRhLnJlcXVlc3RJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoRXZlbnRBY2tUb0V4dGVuc2lvbldvcmxkKGV2ZW50TmFtZSwgZXZlbnQuZGF0YS5yZXF1ZXN0SWQsIHRydWUpO1xuICB9KTtcbn1cbiIsICIvKipcbiAqIEluamVjdGVkIFNjcmlwdHMgLSBSdW5zIGluIHRoZSBNQUlOIHdvcmxkIChwYWdlIGNvbnRleHQpIGF0IGRvY3VtZW50X3N0YXJ0LlxuICpcbiAqIEludGVyY2VwdHMgdGhlIEFuZ3VsYXIgYXBwJ3MgbWFpbi5qcyBzY3JpcHQgYmVmb3JlIGl0IGV4ZWN1dGVzLFxuICogZmV0Y2hlcyBpdHMgY29udGVudCwgYXBwbGllcyBtb2RpZmljYXRpb25zLCBhbmQgcmUtZXhlY3V0ZXMgaXRcbiAqIHNvIG91ciBleHRlbnNpb24gY29kZSBydW5zIGluc2lkZSB0aGUgQW5ndWxhciBjb250ZXh0LlxuICovXG5cbmNvbnN0IE1BSU5fU0NSSVBUX1BBVFRFUk4gPSAvbWFpbi1bQS1aYS16MC05XStcXC5qcyQvO1xuXG5mdW5jdGlvbiBpbnRlcmNlcHRNYWluU2NyaXB0KCk6IHZvaWQge1xuICBjb25zb2xlLmluZm8oJ1thdWRha28tcG93ZXJ0b3lzXSBTY3JpcHQgaW50ZXJjZXB0b3IgYWN0aXZlJyk7XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IHNyYyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFzcmMgfHwgIU1BSU5fU0NSSVBUX1BBVFRFUk4udGVzdChzcmMpKSBjb250aW51ZTtcblxuICAgICAgICBjb25zb2xlLmluZm8oJ1thdWRha28tcG93ZXJ0b3lzXSBJbnRlcmNlcHRlZCBBbmd1bGFyIG1haW4gc2NyaXB0OicsIHNyYyk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0aGUgb3JpZ2luYWwgc2NyaXB0IGZyb20gZXhlY3V0aW5nIGJ5IGNoYW5naW5nIGl0cyB0eXBlXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgYnJvd3NlciBnZXRzIGEgY2hhbmNlIHRvIGZldGNoL2V4ZWN1dGUgaXRcbiAgICAgICAgbm9kZS50eXBlID0gJ2phdmFzY3JpcHQvYmxvY2tlZCc7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcmlnaW5hbCBzY3JpcHQgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBTdG9wIG9ic2VydmluZyBvbmNlIHdlJ3ZlIGZvdW5kIHRoZSBtYWluIHNjcmlwdFxuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgLy8gRmV0Y2gsIG1vZGlmeSwgYW5kIHJlLWV4ZWN1dGUgdGhlIHNjcmlwdFxuICAgICAgICByZXBsYWNlTWFpblNjcmlwdChzcmMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSBlbnRpcmUgZG9jdW1lbnQgZm9yIHNjcmlwdCBhZGRpdGlvbnNcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcGxhY2VNYWluU2NyaXB0KG9yaWdpbmFsU3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICAvLyBSZXNvbHZlIHRoZSBmdWxsIFVSTCByZWxhdGl2ZSB0byB0aGUgcGFnZVxuICAgIGNvbnN0IHNjcmlwdFVybCA9IG5ldyBVUkwob3JpZ2luYWxTcmMsIGRvY3VtZW50LmJhc2VVUkkpLmhyZWY7XG5cbiAgICAvLyBEZXJpdmUgdGhlIGJhc2UgVVJMIGZvciByZXNvbHZpbmcgcmVsYXRpdmUgaW1wb3J0c1xuICAgIC8vIGUuZy4gXCJodHRwczovL2V4YW1wbGUuY29tL21haW4tTkpYR05YSjUuanNcIiAtPiBcImh0dHBzOi8vZXhhbXBsZS5jb20vXCJcbiAgICBjb25zdCBiYXNlVXJsID0gc2NyaXB0VXJsLnN1YnN0cmluZygwLCBzY3JpcHRVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuXG4gICAgY29uc29sZS5pbmZvKCdbYXVkYWtvLXBvd2VydG95c10gRmV0Y2hpbmcgbWFpbiBzY3JpcHQgZnJvbTonLCBzY3JpcHRVcmwpO1xuICAgIGNvbnNvbGUuaW5mbygnW2F1ZGFrby1wb3dlcnRveXNdIEJhc2UgVVJMIGZvciBpbXBvcnRzOicsIGJhc2VVcmwpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2NyaXB0VXJsKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbYXVkYWtvLXBvd2VydG95c10gRmFpbGVkIHRvIGZldGNoIG1haW4gc2NyaXB0OicsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdENvbnRlbnQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAvLyBSZXdyaXRlIHJlbGF0aXZlIGltcG9ydHMgdG8gYWJzb2x1dGUgVVJMcyBzbyB0aGV5IHJlc29sdmUgY29ycmVjdGx5IGZyb20gYSBibG9iIFVSTFxuICAgIHNjcmlwdENvbnRlbnQgPSByZXdyaXRlSW1wb3J0cyhzY3JpcHRDb250ZW50LCBiYXNlVXJsKTtcblxuICAgIC8vIEFwcGx5IG1vZGlmaWNhdGlvbnMgdG8gdGhlIHNjcmlwdCBjb250ZW50XG4gICAgc2NyaXB0Q29udGVudCA9IG1vZGlmeU1haW5TY3JpcHQoc2NyaXB0Q29udGVudCk7XG5cbiAgICAvLyBMb2cgdGhlIGZ1bGwgbW9kaWZpZWQgY29udGVudCBmb3IgZGVidWdnaW5nICh3aXRoIG5ld2xpbmVzIGFmdGVyIHNlbWljb2xvbnMgZm9yIHJlYWRhYmlsaXR5KVxuICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICdbYXVkYWtvLXBvd2VydG95c10gTW9kaWZpZWQgc2NyaXB0IGNvbnRlbnQ6XFxuJyxcbiAgICAgIHNjcmlwdENvbnRlbnQucmVwbGFjZSgvOy9nLCAnO1xcbicpLFxuICAgICk7XG5cbiAgICAvLyBSZS1leGVjdXRlIHRoZSBtb2RpZmllZCBzY3JpcHQgYXMgYW4gRVMgbW9kdWxlIHZpYSBibG9iIFVSTFxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc2NyaXB0Q29udGVudF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnIH0pO1xuICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgY29uc3QgbmV3U2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbmV3U2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICBuZXdTY3JpcHQuc3JjID0gYmxvYlVybDtcbiAgICBuZXdTY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXBvd2VydG95cy1pbmplY3RlZCcsICd0cnVlJyk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgYmxvYiBVUkwgYWZ0ZXIgdGhlIHNjcmlwdCBsb2Fkc1xuICAgIG5ld1NjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVcmwpO1xuICAgICAgY29uc29sZS5pbmZvKCdbYXVkYWtvLXBvd2VydG95c10gTW9kaWZpZWQgbWFpbiBzY3JpcHQgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH07XG5cbiAgICBuZXdTY3JpcHQub25lcnJvciA9IGVycm9yID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVybCk7XG4gICAgICBjb25zb2xlLmVycm9yKCdbYXVkYWtvLXBvd2VydG95c10gRmFpbGVkIHRvIGxvYWQgbW9kaWZpZWQgbWFpbiBzY3JpcHQ6JywgZXJyb3IpO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdG8gPGhlYWQ+IHRvIGV4ZWN1dGUgaXRcbiAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKG5ld1NjcmlwdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2F1ZGFrby1wb3dlcnRveXNdIEVycm9yIHJlcGxhY2luZyBtYWluIHNjcmlwdDonLCBlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXdyaXRlcyByZWxhdGl2ZSBpbXBvcnQgcGF0aHMgKGUuZy4gXCIuL2NodW5rLUFCQy5qc1wiKSB0byBhYnNvbHV0ZSBVUkxzXG4gKiBzbyB0aGV5IHJlc29sdmUgY29ycmVjdGx5IHdoZW4gdGhlIHNjcmlwdCBpcyBsb2FkZWQgZnJvbSBhIGJsb2IgVVJMLlxuICpcbiAqIEhhbmRsZXM6XG4gKiAgIC0gU3RhdGljOiBpbXBvcnQge3h9IGZyb20gXCIuL2NodW5rLUFCQy5qc1wiXG4gKiAgIC0gU3RhdGljOiBpbXBvcnQgXCIuL2NodW5rLUFCQy5qc1wiXG4gKiAgIC0gRHluYW1pYzogaW1wb3J0KFwiLi9jaHVuay1BQkMuanNcIilcbiAqICAgLSBSZS1leHBvcnRzOiBleHBvcnQge3h9IGZyb20gXCIuL2NodW5rLUFCQy5qc1wiXG4gKi9cbmZ1bmN0aW9uIHJld3JpdGVJbXBvcnRzKGNvbnRlbnQ6IHN0cmluZywgYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gTWF0Y2ggcmVsYXRpdmUgcGF0aHMgaW46XG4gIC8vICAgLSBmcm9tXCIuLy4uLlwiICAgICAgICAgKHN0YXRpYyBuYW1lZCBpbXBvcnRzKVxuICAvLyAgIC0gaW1wb3J0XCIuLy4uLlwiICAgICAgIChzdGF0aWMgc2lkZS1lZmZlY3QgaW1wb3J0cylcbiAgLy8gICAtIGltcG9ydChcIi4vLi4uXCIpICAgICAoZHluYW1pYyBpbXBvcnRzKVxuICAvLyAgIC0gZXhwb3J0IC4uLiBmcm9tXCIuLy4uLlwiXG4gIHJldHVybiBjb250ZW50LnJlcGxhY2UoXG4gICAgLyhmcm9tXFxzKnxpbXBvcnRcXHMqXFwofGltcG9ydFxccyopKFsnXCJdKShcXC5cXC4/XFwvKS9nLFxuICAgIChtYXRjaCwgcHJlZml4LCBxdW90ZSwgcmVsUGF0aCkgPT4ge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHF1b3RlICsgYmFzZVVybCArIHJlbFBhdGguc3Vic3RyaW5nKDIpOyAvLyBzdHJpcCBsZWFkaW5nIFwiLi9cIlxuICAgIH0sXG4gICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeU1haW5TY3JpcHQoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVtb3ZlIHRoZSBwcm9kdWN0aW9uIGNvbnNvbGUubG9nIHN1cHByZXNzaW9uIHNvIHdlIGNhbiBkZWJ1Z1xuICBjb25zdCBjb25zb2xlU3VwcHJlc3NNYXRjaCA9IGNvbnRlbnQubWF0Y2goXG4gICAgL2NpXFwucHJvZHVjdGlvblxccyomJlxccypcXCh3aW5kb3dcXC5jb25zb2xlXFwubG9nXFxzKj1cXHMqZnVuY3Rpb25cXHMqXFwoXFwpXFxzKlxce1xccypcXH1cXHMqXFwpXFxzKjs/L2csXG4gICk7XG4gIGNvbnNvbGUuaW5mbyhcbiAgICAnW2F1ZGFrby1wb3dlcnRveXNdIENvbnNvbGUgc3VwcHJlc3Npb24gcGF0dGVybiBmb3VuZDonLFxuICAgIGNvbnNvbGVTdXBwcmVzc01hdGNoID8gY29uc29sZVN1cHByZXNzTWF0Y2gubGVuZ3RoICsgJyBtYXRjaChlcyknIDogJ25vbmUnLFxuICApO1xuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgIC9jaVxcLnByb2R1Y3Rpb25cXHMqJiZcXHMqXFwod2luZG93XFwuY29uc29sZVxcLmxvZ1xccyo9XFxzKmZ1bmN0aW9uXFxzKlxcKFxcKVxccypcXHtcXHMqXFx9XFxzKlxcKVxccyo7Py9nLFxuICAgICcnLFxuICApO1xuXG4gIC8vIEludGVyY2VwdCB0aGUgQW5ndWxhciBib290c3RyYXAgdG8gY2FwdHVyZSB0aGUgcm9vdCBpbmplY3Rvci5cbiAgY29uc3QgYm9vdHN0cmFwTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9cXC5ib290c3RyYXBNb2R1bGVcXCgoW14pXSspXFwpXFwuY2F0Y2hcXCgvZyk7XG4gIGNvbnNvbGUuaW5mbyhcbiAgICAnW2F1ZGFrby1wb3dlcnRveXNdIEJvb3RzdHJhcCBwYXR0ZXJuIGZvdW5kOicsXG4gICAgYm9vdHN0cmFwTWF0Y2hcbiAgICAgID8gYm9vdHN0cmFwTWF0Y2gubGVuZ3RoICsgJyBtYXRjaChlcyk6ICcgKyBKU09OLnN0cmluZ2lmeShib290c3RyYXBNYXRjaClcbiAgICAgIDogJ25vbmUnLFxuICApO1xuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgIC9cXC5ib290c3RyYXBNb2R1bGVcXCgoW14pXSspXFwpXFwuY2F0Y2hcXCgvZyxcbiAgICBgLmJvb3RzdHJhcE1vZHVsZSgkMSkudGhlbihmdW5jdGlvbihyZWYpIHtgICtcbiAgICAgIGB3aW5kb3cuX19uZ1JlZl9fID0gcmVmO2AgK1xuICAgICAgYHdpbmRvdy5fX25nSW5qZWN0b3JfXyA9IHJlZi5pbmplY3RvcjtgICtcbiAgICAgIC8vIERldGVjdCBBbmd1bGFyIHZlcnNpb24gZnJvbSB0aGUgbmctdmVyc2lvbiBhdHRyaWJ1dGUgb24gdGhlIHJvb3QgZWxlbWVudFxuICAgICAgYHZhciBuZ1ZlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltuZy12ZXJzaW9uXVwiKTtgICtcbiAgICAgIGB2YXIgbmdWZXIgPSBuZ1ZlckVsID8gbmdWZXJFbC5nZXRBdHRyaWJ1dGUoXCJuZy12ZXJzaW9uXCIpIDogbnVsbDtgICtcbiAgICAgIGB2YXIgbmdNYWpvciA9IG5nVmVyID8gcGFyc2VJbnQobmdWZXIuc3BsaXQoXCIuXCIpWzBdLCAxMCkgOiAwO2AgK1xuICAgICAgYHdpbmRvdy5fX25nVmVyc2lvbl9fID0gbmdWZXI7YCArXG4gICAgICBgY29uc29sZS5sb2coXCJbYXVkYWtvLXBvd2VydG95c10gQW5ndWxhciB2ZXJzaW9uOlwiLCBuZ1ZlciwgXCIobWFqb3I6XCIsIG5nTWFqb3IgKyBcIilcIik7YCArXG4gICAgICAvLyBMVmlldyBpbmRleCBsYXlvdXQgdmFyaWVzIGJ5IEFuZ3VsYXIgdmVyc2lvbjpcbiAgICAgIC8vICAgQ09OVEVYVDogaW5kZXggOCAodmlldyBjb250ZXh0LCBub3QgYWx3YXlzIHRoZSBob3N0IGNvbXBvbmVudClcbiAgICAgIC8vICAgVFZJRVc6IGluZGV4IDFcbiAgICAgIC8vICAgUEFSRU5UOiBpbmRleCAzXG4gICAgICAvLyAgIElEOiBpbmRleCAyMCAodjE0LTE1KSwgaW5kZXggMTkgKHYxNispLCBOL0EgKHY5LTEzKVxuICAgICAgLy8gICBIRUFERVJfT0ZGU0VUOiAxOSh2OSksIDIwKHYxMi0xMyksIDIyKHYxNC0xNSksIDI1KHYxNi0xOCksIDI3KHYxOSspXG4gICAgICBgdmFyIExWSUVXX0NPTlRFWFQgPSA4O2AgK1xuICAgICAgYHZhciBMVklFV19UVklFVyA9IDE7YCArXG4gICAgICBgdmFyIExWSUVXX1BBUkVOVCA9IDM7YCArXG4gICAgICBgdmFyIExWSUVXX0lEO2AgK1xuICAgICAgYHZhciBMVklFV19IRUFERVJfT0ZGU0VUO2AgK1xuICAgICAgYGlmIChuZ01ham9yID49IDE5KSB7YCArXG4gICAgICBgTFZJRVdfSUQgPSAxOTsgTFZJRVdfSEVBREVSX09GRlNFVCA9IDI3O2AgK1xuICAgICAgYH0gZWxzZSBpZiAobmdNYWpvciA+PSAxNikge2AgK1xuICAgICAgYExWSUVXX0lEID0gMTk7IExWSUVXX0hFQURFUl9PRkZTRVQgPSAyNTtgICtcbiAgICAgIGB9IGVsc2UgaWYgKG5nTWFqb3IgPj0gMTQpIHtgICtcbiAgICAgIGBMVklFV19JRCA9IDIwOyBMVklFV19IRUFERVJfT0ZGU0VUID0gMjI7YCArXG4gICAgICBgfSBlbHNlIHtgICtcbiAgICAgIC8vIHY5LTEzOiBubyBJRCBmaWVsZCwgX19uZ0NvbnRleHRfXyBzdG9yZXMgTFZpZXcgZGlyZWN0bHlcbiAgICAgIGBMVklFV19JRCA9IG51bGw7IExWSUVXX0hFQURFUl9PRkZTRVQgPSAyMDtgICtcbiAgICAgIGB9YCArXG4gICAgICBgd2luZG93Ll9fbmdMVmlld0luZGljZXNfXyA9IHtgICtcbiAgICAgIGBDT05URVhUOiBMVklFV19DT05URVhULGAgK1xuICAgICAgYFRWSUVXOiBMVklFV19UVklFVyxgICtcbiAgICAgIGBQQVJFTlQ6IExWSUVXX1BBUkVOVCxgICtcbiAgICAgIGBJRDogTFZJRVdfSUQsYCArXG4gICAgICBgSEVBREVSX09GRlNFVDogTFZJRVdfSEVBREVSX09GRlNFVGAgK1xuICAgICAgYH07YCArXG4gICAgICBgY29uc29sZS5sb2coXCJbYXVkYWtvLXBvd2VydG95c10gTFZpZXcgaW5kaWNlczpcIiwgd2luZG93Ll9fbmdMVmlld0luZGljZXNfXyk7YCArXG4gICAgICAvLyBnZXRMVmlldzogcmVzb2x2ZSBfX25nQ29udGV4dF9fIHRvIExWaWV3IChoYW5kbGVzIG51bWVyaWMgSUQsIExDb250ZXh0IGFuZCBkaXJlY3QgTFZpZXcpXG4gICAgICBgZnVuY3Rpb24gbmdHZXRMVmlldyhlbCkge2AgK1xuICAgICAgYHZhciBjdHggPSBlbCAmJiBlbC5fX25nQ29udGV4dF9fO2AgK1xuICAgICAgYGlmICh0eXBlb2YgY3R4ID09PSBcIm51bWJlclwiICYmIHdpbmRvdy5fX25nTFZpZXdSZWdpc3RyeV9fKSB7YCArXG4gICAgICBgcmV0dXJuIHdpbmRvdy5fX25nTFZpZXdSZWdpc3RyeV9fLmdldChjdHgpIHx8IG51bGw7YCArXG4gICAgICBgfWAgK1xuICAgICAgYGlmIChjdHggJiYgdHlwZW9mIGN0eCA9PT0gXCJvYmplY3RcIikge2AgK1xuICAgICAgYGlmIChBcnJheS5pc0FycmF5KGN0eC5sVmlldykpIHJldHVybiBjdHgubFZpZXc7YCArXG4gICAgICBgaWYgKHR5cGVvZiBjdHgubFZpZXdJZCA9PT0gXCJudW1iZXJcIiAmJiB3aW5kb3cuX19uZ0xWaWV3UmVnaXN0cnlfXykge2AgK1xuICAgICAgYHJldHVybiB3aW5kb3cuX19uZ0xWaWV3UmVnaXN0cnlfXy5nZXQoY3R4LmxWaWV3SWQpIHx8IG51bGw7YCArXG4gICAgICBgfWAgK1xuICAgICAgYH1gICtcbiAgICAgIGByZXR1cm4gQXJyYXkuaXNBcnJheShjdHgpID8gY3R4IDogbnVsbDtgICtcbiAgICAgIGB9YCArXG4gICAgICAvLyB1bndyYXBSTm9kZTogbWlycm9ycyBBbmd1bGFyJ3MgdW53cmFwUk5vZGUgdXRpbGl0eVxuICAgICAgYGZ1bmN0aW9uIG5nVW53cmFwUk5vZGUodmFsdWUpIHtgICtcbiAgICAgIGB3aGlsZSAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfWAgK1xuICAgICAgYHJldHVybiB2YWx1ZTtgICtcbiAgICAgIGB9YCArXG4gICAgICAvLyBmaW5kTm9kZUluZGV4OiBsb2NhdGUgdGhlIGVsZW1lbnQgaW5kZXggaW4gYW4gTFZpZXdcbiAgICAgIGBmdW5jdGlvbiBuZ0ZpbmROb2RlSW5kZXgobFZpZXcsIGVsKSB7YCArXG4gICAgICBgaWYgKCFsVmlldykgcmV0dXJuIC0xO2AgK1xuICAgICAgYHZhciB0VmlldyA9IGxWaWV3W0xWSUVXX1RWSUVXXTtgICtcbiAgICAgIGB2YXIgZW5kID0gdFZpZXcgJiYgdHlwZW9mIHRWaWV3LmJpbmRpbmdTdGFydEluZGV4ID09PSBcIm51bWJlclwiID8gdFZpZXcuYmluZGluZ1N0YXJ0SW5kZXggOiBsVmlldy5sZW5ndGg7YCArXG4gICAgICBgZm9yICh2YXIgaSA9IExWSUVXX0hFQURFUl9PRkZTRVQ7IGkgPCBlbmQ7IGkrKykge2AgK1xuICAgICAgYGlmIChuZ1Vud3JhcFJOb2RlKGxWaWV3W2ldKSA9PT0gZWwpIHJldHVybiBpO2AgK1xuICAgICAgYH1gICtcbiAgICAgIGByZXR1cm4gLTE7YCArXG4gICAgICBgfWAgK1xuICAgICAgLy8gZ2V0Q29tcG9uZW50QXROb2RlSW5kZXg6IG1pcnJvcnMgQW5ndWxhcidzIGNvbnRleHRfZGlzY292ZXJ5LnRzIGltcGxlbWVudGF0aW9uXG4gICAgICBgZnVuY3Rpb24gbmdHZXRDb21wb25lbnRBdE5vZGVJbmRleChsVmlldywgbm9kZUluZGV4KSB7YCArXG4gICAgICBgdmFyIHRWaWV3ID0gbFZpZXcgJiYgbFZpZXdbTFZJRVdfVFZJRVddO2AgK1xuICAgICAgYHZhciB0Tm9kZSA9IHRWaWV3ICYmIHRWaWV3LmRhdGEgPyB0Vmlldy5kYXRhW25vZGVJbmRleF0gOiBudWxsO2AgK1xuICAgICAgYGlmICghdE5vZGUpIHJldHVybiBudWxsO2AgK1xuICAgICAgYHZhciBkaXJlY3RpdmVTdGFydCA9IHROb2RlLmRpcmVjdGl2ZVN0YXJ0O2AgK1xuICAgICAgYHZhciBjb21wb25lbnRPZmZzZXQgPSB0Tm9kZS5jb21wb25lbnRPZmZzZXQ7YCArXG4gICAgICBgaWYgKHR5cGVvZiBkaXJlY3RpdmVTdGFydCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgY29tcG9uZW50T2Zmc2V0ID09PSBcIm51bWJlclwiICYmIGNvbXBvbmVudE9mZnNldCA+IC0xKSB7YCArXG4gICAgICBgcmV0dXJuIGxWaWV3W2RpcmVjdGl2ZVN0YXJ0ICsgY29tcG9uZW50T2Zmc2V0XSB8fCBudWxsO2AgK1xuICAgICAgYH1gICtcbiAgICAgIGB2YXIgZGlyZWN0aXZlRW5kID0gdE5vZGUuZGlyZWN0aXZlRW5kO2AgK1xuICAgICAgYGlmICh0eXBlb2YgZGlyZWN0aXZlU3RhcnQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGRpcmVjdGl2ZUVuZCA9PT0gXCJudW1iZXJcIikge2AgK1xuICAgICAgYGZvciAodmFyIGkgPSBkaXJlY3RpdmVTdGFydDsgaSA8IGRpcmVjdGl2ZUVuZDsgaSsrKSB7YCArXG4gICAgICBgdmFyIGRpciA9IGxWaWV3W2ldO2AgK1xuICAgICAgYGlmIChkaXIgJiYgZGlyLmNvbnN0cnVjdG9yICYmIGRpci5jb25zdHJ1Y3Rvci7JtWNtcCkgcmV0dXJuIGRpcjtgICtcbiAgICAgIGB9YCArXG4gICAgICBgfWAgK1xuICAgICAgYHJldHVybiBudWxsO2AgK1xuICAgICAgYH1gICtcbiAgICAgIC8vIGdldFBhcmVudExWaWV3OiB3YWxrcyB0aHJvdWdoIExWaWV3L0xDb250YWluZXIgcGFyZW50IGxpbmtzXG4gICAgICBgZnVuY3Rpb24gbmdHZXRQYXJlbnRMVmlldyhsVmlldykge2AgK1xuICAgICAgYHZhciBwYXJlbnQgPSBsVmlldyAmJiBsVmlld1tMVklFV19QQVJFTlRdO2AgK1xuICAgICAgYGlmICghQXJyYXkuaXNBcnJheShwYXJlbnQpKSByZXR1cm4gbnVsbDtgICtcbiAgICAgIGBpZiAocGFyZW50WzFdID09PSB0cnVlKSByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJlbnRbTFZJRVdfUEFSRU5UXSkgPyBwYXJlbnRbTFZJRVdfUEFSRU5UXSA6IG51bGw7YCArXG4gICAgICBgcmV0dXJuIHBhcmVudDtgICtcbiAgICAgIGB9YCArXG4gICAgICAvLyBnZXRPd25pbmdDb21wb25lbnQ6IGNvbXBvbmVudCB3aG9zZSB2aWV3IG93bnMgdGhpcyBlbGVtZW50XG4gICAgICBgZnVuY3Rpb24gbmdHZXRPd25pbmdDb21wb25lbnQoZWwpIHtgICtcbiAgICAgIGB2YXIgbFZpZXcgPSBuZ0dldExWaWV3KGVsKTtgICtcbiAgICAgIGBpZiAoIWxWaWV3KSByZXR1cm4gbnVsbDtgICtcbiAgICAgIGB3aGlsZSAobFZpZXcgJiYgbFZpZXdbTFZJRVdfVFZJRVddICYmIGxWaWV3W0xWSUVXX1RWSUVXXS50eXBlID09PSAyKSB7YCArXG4gICAgICBgbFZpZXcgPSBuZ0dldFBhcmVudExWaWV3KGxWaWV3KTtgICtcbiAgICAgIGB9YCArXG4gICAgICBgcmV0dXJuIGxWaWV3ID8gbFZpZXdbTFZJRVdfQ09OVEVYVF0gOiBudWxsO2AgK1xuICAgICAgYH1gICtcbiAgICAgIC8vIGdldENvbXBvbmVudDogY29tcG9uZW50IGluc3RhbmNlIGJvdW5kIHRvIHRoZSBob3N0IERPTSBlbGVtZW50XG4gICAgICBgZnVuY3Rpb24gbmdHZXRDb21wb25lbnQoZWwpIHtgICtcbiAgICAgIGB2YXIgbFZpZXcgPSBuZ0dldExWaWV3KGVsKTtgICtcbiAgICAgIGBpZiAoIWxWaWV3KSByZXR1cm4gbnVsbDtgICtcbiAgICAgIGB2YXIgbm9kZUluZGV4ID0gbmdGaW5kTm9kZUluZGV4KGxWaWV3LCBlbCk7YCArXG4gICAgICBgaWYgKG5vZGVJbmRleCA9PT0gLTEpIHJldHVybiBudWxsO2AgK1xuICAgICAgYHJldHVybiBuZ0dldENvbXBvbmVudEF0Tm9kZUluZGV4KGxWaWV3LCBub2RlSW5kZXgpO2AgK1xuICAgICAgYH1gICtcbiAgICAgIC8vIFdhbGsgdGhlIERPTSB0cmVlIHVzaW5nIHRoZSBMVmlldyByZWdpc3RyeSB0byByZXNvbHZlIGNvbXBvbmVudHNcbiAgICAgIGBmdW5jdGlvbiB3YWxrRG9tVHJlZShlbCwgZGVwdGgpIHtgICtcbiAgICAgIGBkZXB0aCA9IGRlcHRoIHx8IDA7YCArXG4gICAgICBgdmFyIG5vZGUgPSB7IGVsZW1lbnQ6IGVsLnRhZ05hbWUsIGRlcHRoOiBkZXB0aCwgY2hpbGRyZW46IFtdIH07YCArXG4gICAgICBgdmFyIGxWaWV3ID0gbmdHZXRMVmlldyhlbCk7YCArXG4gICAgICBgaWYgKGxWaWV3KSB7YCArXG4gICAgICBgdmFyIGNvbXAgPSBuZ0dldENvbXBvbmVudChlbCkgfHwgbmdHZXRPd25pbmdDb21wb25lbnQoZWwpO2AgK1xuICAgICAgYGlmIChjb21wICYmIHR5cGVvZiBjb21wID09PSBcIm9iamVjdFwiICYmIGNvbXAuY29uc3RydWN0b3IpIHtgICtcbiAgICAgIGBub2RlLmNvbXBvbmVudCA9IGNvbXA7YCArXG4gICAgICBgbm9kZS5jb21wb25lbnROYW1lID0gY29tcC5jb25zdHJ1Y3Rvci5uYW1lO2AgK1xuICAgICAgYGlmIChMVklFV19JRCAhPT0gbnVsbCkgbm9kZS5sVmlld0lkID0gbFZpZXdbTFZJRVdfSURdO2AgK1xuICAgICAgYH1gICtcbiAgICAgIGB9YCArXG4gICAgICBgdmFyIGNoaWxkcmVuID0gZWwuY2hpbGRyZW47YCArXG4gICAgICBgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge2AgK1xuICAgICAgYHZhciBjaGlsZCA9IHdhbGtEb21UcmVlKGNoaWxkcmVuW2ldLCBkZXB0aCArIDEpO2AgK1xuICAgICAgYGlmIChjaGlsZC5jb21wb25lbnQgfHwgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge2AgK1xuICAgICAgYG5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZCk7YCArXG4gICAgICBgfWAgK1xuICAgICAgYH1gICtcbiAgICAgIGByZXR1cm4gbm9kZTtgICtcbiAgICAgIGB9YCArXG4gICAgICAvLyBCdWlsZCB0aGUgdHJlZSBhZnRlciBhIHNob3J0IGRlbGF5IHRvIGxldCBjb21wb25lbnRzIHJlbmRlclxuICAgICAgYHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7YCArXG4gICAgICBgaWYgKExWSUVXX0lEICE9PSBudWxsICYmICF3aW5kb3cuX19uZ0xWaWV3UmVnaXN0cnlfXykge2AgK1xuICAgICAgYGNvbnNvbGUud2FybihcIlthdWRha28tcG93ZXJ0b3lzXSBMVmlldyByZWdpc3RyeSBub3QgY2FwdHVyZWQhXCIpO2AgK1xuICAgICAgYHJldHVybjtgICtcbiAgICAgIGB9YCArXG4gICAgICBgaWYgKHdpbmRvdy5fX25nTFZpZXdSZWdpc3RyeV9fKSB7YCArXG4gICAgICBgY29uc29sZS5sb2coXCJbYXVkYWtvLXBvd2VydG95c10gTFZpZXcgcmVnaXN0cnkgY2FwdHVyZWQgd2l0aFwiLCB3aW5kb3cuX19uZ0xWaWV3UmVnaXN0cnlfXy5zaXplLCBcImVudHJpZXNcIik7YCArXG4gICAgICBgfWAgK1xuICAgICAgYHdpbmRvdy5fX25nQ29tcG9uZW50VHJlZV9fID0gd2Fsa0RvbVRyZWUoZG9jdW1lbnQuYm9keSwgMCk7YCArXG4gICAgICBgY29uc29sZS5sb2coXCJbYXVkYWtvLXBvd2VydG95c10gQ29tcG9uZW50IHRyZWU6XCIsIHdpbmRvdy5fX25nQ29tcG9uZW50VHJlZV9fKTtgICtcbiAgICAgIGB9LCAzMDAwKTtgICtcbiAgICAgIGBjb25zb2xlLmxvZyhcIlthdWRha28tcG93ZXJ0b3lzXSBBbmd1bGFyIGJvb3RzdHJhcCBjYXB0dXJlZCFcIiwgcmVmLmluamVjdG9yKTtgICtcbiAgICAgIGByZXR1cm4gcmVmO2AgK1xuICAgICAgYH0pLmNhdGNoKGAsXG4gICk7XG5cbiAgLy8gTG9nIHRoZSByZXdyaXR0ZW4gYm9vdHN0cmFwIGxpbmUgZm9yIHZlcmlmaWNhdGlvblxuICBjb25zdCByZXdyaXR0ZW5Cb290c3RyYXAgPSBjb250ZW50Lm1hdGNoKFxuICAgIC9cXC5ib290c3RyYXBNb2R1bGVcXChbXildK1xcKVxcLnRoZW5cXChmdW5jdGlvbltcXHNcXFNdezAsMjAwfS8sXG4gICk7XG4gIGNvbnNvbGUuaW5mbyhcbiAgICAnW2F1ZGFrby1wb3dlcnRveXNdIFJld3JpdHRlbiBib290c3RyYXA6JyxcbiAgICByZXdyaXR0ZW5Cb290c3RyYXAgPyByZXdyaXR0ZW5Cb290c3RyYXBbMF0gOiAnbm90IGZvdW5kJyxcbiAgKTtcblxuICAvLyBQcmVwZW5kOiAoMSkgTFZpZXcgcmVnaXN0cnkgY2FwdHVyZSB2aWEgTWFwLnByb3RvdHlwZS5zZXQgaG9vaywgKDIpIGxvZ1xuICAvLyBUaGUgTWFwIGhvb2sgbmVlZHMgdG8gd29yayB3aXRob3V0IGtub3dpbmcgdGhlIEFuZ3VsYXIgdmVyc2lvbiB5ZXQgKGl0IHJ1bnMgYmVmb3JlIGJvb3RzdHJhcCksXG4gIC8vIHNvIHdlIGNoZWNrIGJvdGggcG9zc2libGUgSUQgaW5kaWNlcyAoMTkgYW5kIDIwKSB0byBjb3ZlciB2MTQtMTUgYW5kIHYxNisuXG4gIC8vIHY5LTEzIGRvbid0IHVzZSBhIE1hcCByZWdpc3RyeSBhdCBhbGwgKF9fbmdDb250ZXh0X18gc3RvcmVzIExWaWV3IGRpcmVjdGx5KS5cbiAgY29uc3QgbHZpZXdSZWdpc3RyeUhvb2sgPSBbXG4gICAgYC8vIEhvb2sgTWFwLnByb3RvdHlwZS5zZXQgdG8gY2FwdHVyZSBBbmd1bGFyJ3MgaW50ZXJuYWwgTFZpZXcgcmVnaXN0cnkuYCxcbiAgICBgLy8gQW5ndWxhciAxNCsgc3RvcmVzIExWaWV3cyBpbiBhIG1vZHVsZS1zY29wZWQgTWFwIGtleWVkIGJ5IG51bWVyaWMgSURzLmAsXG4gICAgYC8vIFdlIGRldGVjdCB0aGlzIGJ5IGZpbmdlcnByaW50aW5nIExWaWV3IGFycmF5czpgLFxuICAgIGAvLyAgIC0gQXJyYXkgd2l0aCAyMisgc2xvdHMgKG1pbiBIRUFERVJfT0ZGU0VUIGFjcm9zcyB2MTQrIGlzIDIyKWAsXG4gICAgYC8vICAgLSBbMV0gaXMgYSBUVmlldyBvYmplY3QgKGhhcyBcImJsdWVwcmludFwiIGFuZCBcInR5cGVcIiBwcm9wZXJ0aWVzKWAsXG4gICAgYC8vICAgLSBJRCBhdCBbMTldICh2MTYrKSBvciBbMjBdICh2MTQtMTUpIG1hdGNoZXMgdGhlIE1hcCBrZXlgLFxuICAgIGAvLyBUaGlzIGZpcmVzIGV4YWN0bHkgb25jZSwgdGhlbiByZXN0b3JlcyBNYXAucHJvdG90eXBlLnNldC5gLFxuICAgIGAoZnVuY3Rpb24oKSB7YCxcbiAgICBgICB2YXIgb3JpZ1NldCA9IE1hcC5wcm90b3R5cGUuc2V0O2AsXG4gICAgYCAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7YCxcbiAgICBgICAgIGlmICghd2luZG93Ll9fbmdMVmlld1JlZ2lzdHJ5X19gLFxuICAgIGAgICAgICAgICYmIHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCJgLFxuICAgIGAgICAgICAgICYmIEFycmF5LmlzQXJyYXkodmFsdWUpYCxcbiAgICBgICAgICAgICAmJiB2YWx1ZS5sZW5ndGggPj0gMjJgLFxuICAgIGAgICAgICAgICYmICh2YWx1ZVsxOV0gPT09IGtleSB8fCB2YWx1ZVsyMF0gPT09IGtleSlgLFxuICAgIGAgICAgICAgICYmIHR5cGVvZiB2YWx1ZVsxXSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZVsxXSAhPT0gbnVsbGAsXG4gICAgYCAgICAgICAgJiYgXCJibHVlcHJpbnRcIiBpbiB2YWx1ZVsxXWAsXG4gICAgYCAgICAgICAgJiYgXCJ0eXBlXCIgaW4gdmFsdWVbMV0pIHtgLFxuICAgIGAgICAgICB3aW5kb3cuX19uZ0xWaWV3UmVnaXN0cnlfXyA9IHRoaXM7YCxcbiAgICBgICAgICAgY29uc29sZS5sb2coXCJbYXVkYWtvLXBvd2VydG95c10gQ2FwdHVyZWQgTFZpZXcgcmVnaXN0cnkgTWFwIVwiLCB0aGlzKTtgLFxuICAgIGAgICAgICBNYXAucHJvdG90eXBlLnNldCA9IG9yaWdTZXQ7YCxcbiAgICBgICAgIH1gLFxuICAgIGAgICAgcmV0dXJuIG9yaWdTZXQuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtgLFxuICAgIGAgIH07YCxcbiAgICBgfSkoKTtgLFxuICBdLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnN0IGluamVjdGlvbiA9IGBjb25zb2xlLmxvZygnW2F1ZGFrby1wb3dlcnRveXNdIFJ1bm5pbmcgaW5zaWRlIEFuZ3VsYXIgY29udGV4dCEnKTtcXG5gO1xuICByZXR1cm4gbHZpZXdSZWdpc3RyeUhvb2sgKyAnXFxuJyArIGluamVjdGlvbiArIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjcmlwdEludGVyY2VwdHMoKTogdm9pZCB7XG4gIGludGVyY2VwdE1haW5TY3JpcHQoKTtcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckV4dGVuc2lvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZXh0ZW5zaW9uLWV2ZW50cyc7XG5pbXBvcnQgeyByZWdpc3RlclNjcmlwdEludGVyY2VwdHMgfSBmcm9tICcuL3NjcmlwdC1pbnRlcmNlcHRzJztcblxucmVnaXN0ZXJFeHRlbnNpb25FdmVudEhhbmRsZXIoKTtcbnJlZ2lzdGVyU2NyaXB0SW50ZXJjZXB0cygpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFnQkEsTUFBSSxnQkFBZ0IsZ0NBQVMsR0FBRyxHQUFHO0FBQy9CLG9CQUFnQixPQUFP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QUNOO01BQ0EscUJBQXFCLG1CQUFtQixDQUFDLElBQUk7SUFBQTtBQU8vQyxVQUFNLG9CQUFvQjtNQUN4QjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUFBLEVBQ0EsS0FBSyxJQUFJO0FBRVgsVUFBTSxZQUFZOztBQUNsQixXQUFPLG9CQUFvQixPQUFPLFlBQVk7RUFDaEQ7QUF4TlM7QUEwTkYsV0FBUywyQkFBaUM7QUFDL0Msd0JBQUE7RUFDRjtBQUZnQjtBQzdWaEIsZ0NBQUE7QUFDQSwyQkFBQTsiLAogICJuYW1lcyI6IFsiZCIsICJiIiwgIlN1YnNjcmlwdGlvbiIsICJfYSIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIlN5bWJvbF9vYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiQWN0aW9uIiwgIkFzeW5jQWN0aW9uIiwgIl9hIiwgIlNjaGVkdWxlciIsICJBc3luY1NjaGVkdWxlciIsICJhc3luY1NjaGVkdWxlciIsICJBdWRha29BcHAiLCAiX2EiXQp9Cg==
