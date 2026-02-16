import { c as createErrorClass, _ as __extends, h as errorContext, E as EMPTY_SUBSCRIPTION, j as Subscription, k as arrRemove, O as Observable, b as __values, l as isScheduler, i as isFunction, p as observable, q as __asyncGenerator, r as __generator, s as __await, t as reportUnhandledError, u as __awaiter, v as __asyncValues, o as operate, d as createOperatorSubscriber, m as map, e as identity } from "./map.BLuQZHiU.js";
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
var Subject = (function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
})(Observable);
var AnonymousSubject = (function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
})(Subject);
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
var isArrayLike = (function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
});
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator$1;
    executeSchedule(subscriber, scheduler, function() {
      iterator$1 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator$1.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
    };
  });
}
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) ;
            else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
  };
}
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}
function mergeAll(concurrent) {
  return mergeMap(identity, concurrent);
}
function concatAll() {
  return mergeAll(1);
}
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}
class StorageUtils {
  static async getRegisteredSystemSettings() {
    const storageEntry = await chrome.storage.sync.get("registeredSystems");
    console.log(storageEntry);
    if (storageEntry && Array.isArray(storageEntry.registeredSystems)) {
      return storageEntry.registeredSystems;
    }
    await StorageUtils.setRegisteredSystemSettings([]);
    return [];
  }
  static async setRegisteredSystemSettings(registeredSystems) {
    console.log("Setting registered systems:", registeredSystems);
    await chrome.storage.sync.set({ registeredSystems });
  }
  static async getSystemStats() {
    const storageEntry = await chrome.storage.sync.get("systemStats");
    console.log(storageEntry);
    if (storageEntry) {
      return storageEntry.systemStats;
    }
    await StorageUtils.setSystemStats({});
    return {};
  }
  static async setSystemStats(systemStats) {
    await chrome.storage.sync.set({ systemStats });
  }
  static listenForStatusChanges() {
    const systemStatsChanged = new Subject();
    chrome.storage.onChanged.addListener(
      (changes) => {
        if (changes.systemStats) {
          systemStatsChanged.next(changes.systemStats.newValue);
        }
        return true;
      }
    );
    return concat(from(StorageUtils.getSystemStats()), systemStatsChanged.asObservable());
  }
  static async getFeatureSettings() {
    const storageEntry = await chrome.storage.sync.get("featureSettings");
    console.log(storageEntry);
    return storageEntry?.featureSettings;
  }
  static async getNotificationSettings() {
    const storageEntry = await chrome.storage.sync.get("notifiactionSettings");
    if (storageEntry && storageEntry.notifiactionSettings) {
      return storageEntry.notifiactionSettings;
    }
    const notifiactionSettings = {
      enabled: true
    };
    await StorageUtils.setNotificationSettings(notifiactionSettings);
    return notifiactionSettings;
  }
  static async setNotificationSettings(notifiactionSettings) {
    await chrome.storage.sync.set({ notifiactionSettings });
  }
}
export {
  StorageUtils as S,
  Subject as a,
  from as f,
  innerFrom as i,
  mergeMap as m
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS11dGlscy5EX3hPYVdTbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3ViamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyZ3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FzeW5jSXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2V4ZWN1dGVTY2hlZHVsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlSXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlSW50ZXJuYWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tZXJnZU1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL2NvbmNhdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbmNhdC5qcyIsIi4uLy4uL3NyYy91dGlscy9zdG9yYWdlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuZXhwb3J0IHZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvciA9IGNyZWF0ZUVycm9yQ2xhc3MoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwoKSB7XG4gICAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcywgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBFTVBUWV9TVUJTQ1JJUFRJT04gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIFN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuX3Rocm93SWZDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBBcnJheS5mcm9tKF90aGlzLm9ic2VydmVycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoX3RoaXMuY3VycmVudE9ic2VydmVycyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBfdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSBfdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSBfdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3ViamVjdC5wcm90b3R5cGUsIFwib2JzZXJ2ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiAoKF9hID0gdGhpcy5vYnNlcnZlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLl90cnlTdWJzY3JpYmUuY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9pbm5lclN1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZCwgb2JzZXJ2ZXJzID0gX2Eub2JzZXJ2ZXJzO1xuICAgICAgICBpZiAoaGFzRXJyb3IgfHwgaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIG9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgICAgIGFyclJlbW92ZShvYnNlcnZlcnMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgaGFzRXJyb3IgPSBfYS5oYXNFcnJvciwgdGhyb3duRXJyb3IgPSBfYS50aHJvd25FcnJvciwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkO1xuICAgICAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhyb3duRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5hc09ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFN1YmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3Q7XG59KE9ic2VydmFibGUpKTtcbmV4cG9ydCB7IFN1YmplY3QgfTtcbnZhciBBbm9ueW1vdXNTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5vbnltb3VzU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5leHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZXJyKTtcbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRlc3RpbmF0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29tcGxldGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5zb3VyY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdWJzY3JpYmUoc3Vic2NyaWJlcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICB9O1xuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBBbm9ueW1vdXNTdWJqZWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuL2lzU2NoZWR1bGVyJztcbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wUmVzdWx0U2VsZWN0b3IoYXJncykge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3BTY2hlZHVsZXIoYXJncykge1xuICAgIHJldHVybiBpc1NjaGVkdWxlcihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wTnVtYmVyKGFyZ3MsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgbGFzdChhcmdzKSA9PT0gJ251bWJlcicgPyBhcmdzLnBvcCgpIDogZGVmYXVsdFZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJncy5qcy5tYXAiLCJleHBvcnQgdmFyIGlzQXJyYXlMaWtlID0gKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbic7IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheUxpa2UuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUudGhlbik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Byb21pc2UuanMubWFwIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJbnRlcm9wT2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGUob2JqKSB7XG4gICAgcmV0dXJuIFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmIGlzRnVuY3Rpb24ob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FzeW5jSXRlcmFibGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgcHJvdmlkZWQgXCIgKyAoaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBcIidcIiArIGlucHV0ICsgXCInXCIpICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLiBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgUmVhZGFibGVTdHJlYW0sIEFycmF5LCBBc3luY0l0ZXJhYmxlLCBvciBJdGVyYWJsZS5cIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvd1Vub2JzZXJ2YWJsZUVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiAnQEBpdGVyYXRvcic7XG4gICAgfVxuICAgIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5leHBvcnQgdmFyIGl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcCIsImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2FzeW5jR2VuZXJhdG9yLCBfX2F3YWl0LCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkge1xuICAgIHJldHVybiBfX2FzeW5jR2VuZXJhdG9yKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcl8xKCkge1xuICAgICAgICB2YXIgcmVhZGVyLCBfYSwgdmFsdWUsIGRvbmU7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsICwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cnVlKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9fYXdhaXQocmVhZGVyLnJlYWQoKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIHZhbHVlID0gX2EudmFsdWUsIGRvbmUgPSBfYS5kb25lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbmUpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX19hd2FpdCh2b2lkIDApXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCwgX19hd2FpdCh2YWx1ZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0LCBfYi5zZW50KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtTGlrZShvYmopIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmouZ2V0UmVhZGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUmVhZGFibGVTdHJlYW1MaWtlLmpzLm1hcCIsImltcG9ydCB7IF9fYXN5bmNWYWx1ZXMsIF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbShpbnB1dCkge1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tSXRlcmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUludGVyb3BPYnNlcnZhYmxlKG9iaikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnMuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXJyYXlMaWtlKGFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlcmFibGVfMSA9IF9fdmFsdWVzKGl0ZXJhYmxlKSwgaXRlcmFibGVfMV8xID0gaXRlcmFibGVfMS5uZXh0KCk7ICFpdGVyYWJsZV8xXzEuZG9uZTsgaXRlcmFibGVfMV8xID0gaXRlcmFibGVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVyYWJsZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhYmxlXzFfMSAmJiAhaXRlcmFibGVfMV8xLmRvbmUgJiYgKF9hID0gaXRlcmFibGVfMS5yZXR1cm4pKSBfYS5jYWxsKGl0ZXJhYmxlXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXN5bmNJdGVyYWJsZShhc3luY0l0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKHJlYWRhYmxlU3RyZWFtKSB7XG4gICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikge1xuICAgIHZhciBhc3luY0l0ZXJhYmxlXzEsIGFzeW5jSXRlcmFibGVfMV8xO1xuICAgIHZhciBlXzIsIF9hO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlLCBlXzJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA1LCA2LCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICBhc3luY0l0ZXJhYmxlXzEgPSBfX2FzeW5jVmFsdWVzKGFzeW5jSXRlcmFibGUpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQsIGFzeW5jSXRlcmFibGVfMS5uZXh0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXN5bmNJdGVyYWJsZV8xXzEgPSBfYi5zZW50KCksICFhc3luY0l0ZXJhYmxlXzFfMS5kb25lKSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhc3luY0l0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGVfMl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbNiwgLCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3luY0l0ZXJhYmxlXzFfMSAmJiAhYXN5bmNJdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBhc3luY0l0ZXJhYmxlXzEucmV0dXJuKSkpIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX2EuY2FsbChhc3luY0l0ZXJhYmxlXzEpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5uZXJGcm9tLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUocGFyZW50U3Vic2NyaXB0aW9uLCBzY2hlZHVsZXIsIHdvcmssIGRlbGF5LCByZXBlYXQpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICBpZiAocmVwZWF0ID09PSB2b2lkIDApIHsgcmVwZWF0ID0gZmFsc2U7IH1cbiAgICB2YXIgc2NoZWR1bGVTdWJzY3JpcHRpb24gPSBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB3b3JrKCk7XG4gICAgICAgIGlmIChyZXBlYXQpIHtcbiAgICAgICAgICAgIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZShudWxsLCBkZWxheSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICAgIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQoc2NoZWR1bGVTdWJzY3JpcHRpb24pO1xuICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZVN1YnNjcmlwdGlvbjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leGVjdXRlU2NoZWR1bGUuanMubWFwIiwiaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uKHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSwgZGVsYXkpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0sIGRlbGF5KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9LCBkZWxheSk7IH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmVPbi5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTsgfSwgZGVsYXkpKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZU9uLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZU9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yO1xuICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvciA9IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkb25lO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGl0ZXJhdG9yLm5leHQoKSwgdmFsdWUgPSBfYS52YWx1ZSwgZG9uZSA9IF9hLmRvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcmF0b3IgPT09IG51bGwgfHwgaXRlcmF0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZXJhdG9yLnJldHVybikgJiYgaXRlcmF0b3IucmV0dXJuKCk7IH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUl0ZXJhYmxlLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFzeW5jSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IoaW5wdXQpLCBzY2hlZHVsZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVkLmpzLm1hcCIsImltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikgOiBpbm5lckZyb20oaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50LCBvbkJlZm9yZU5leHQsIGV4cGFuZCwgaW5uZXJTdWJTY2hlZHVsZXIsIGFkZGl0aW9uYWxGaW5hbGl6ZXIpIHtcbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdmFyIGFjdGl2ZSA9IDA7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHZhciBjaGVja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSAmJiAhYnVmZmVyLmxlbmd0aCAmJiAhYWN0aXZlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvdXRlck5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChhY3RpdmUgPCBjb25jdXJyZW50ID8gZG9Jbm5lclN1Yih2YWx1ZSkgOiBidWZmZXIucHVzaCh2YWx1ZSkpOyB9O1xuICAgIHZhciBkb0lubmVyU3ViID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGV4cGFuZCAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICBhY3RpdmUrKztcbiAgICAgICAgdmFyIGlubmVyQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgaW5uZXJGcm9tKHByb2plY3QodmFsdWUsIGluZGV4KyspKS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uIChpbm5lclZhbHVlKSB7XG4gICAgICAgICAgICBvbkJlZm9yZU5leHQgPT09IG51bGwgfHwgb25CZWZvcmVOZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkJlZm9yZU5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgb3V0ZXJOZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbm5lckNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaW5uZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJlZFZhbHVlID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJTdWJTY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgaW5uZXJTdWJTY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvSW5uZXJTdWIoYnVmZmVyZWRWYWx1ZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggJiYgYWN0aXZlIDwgY29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBvdXRlck5leHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkaXRpb25hbEZpbmFsaXplciA9PT0gbnVsbCB8fCBhZGRpdGlvbmFsRmluYWxpemVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRpdGlvbmFsRmluYWxpemVyKCk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlSW50ZXJuYWxzLmpzLm1hcCIsImltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgbWVyZ2VJbnRlcm5hbHMgfSBmcm9tICcuL21lcmdlSW50ZXJuYWxzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yLCBjb25jdXJyZW50KSB7XG4gICAgaWYgKGNvbmN1cnJlbnQgPT09IHZvaWQgMCkgeyBjb25jdXJyZW50ID0gSW5maW5pdHk7IH1cbiAgICBpZiAoaXNGdW5jdGlvbihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlTWFwKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBtYXAoZnVuY3Rpb24gKGIsIGlpKSB7IHJldHVybiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSk7IH0pKGlubmVyRnJvbShwcm9qZWN0KGEsIGkpKSk7IH0sIGNvbmN1cnJlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikgeyByZXR1cm4gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZU1hcC5qcy5tYXAiLCJpbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJy4vbWVyZ2VNYXAnO1xuaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuLi91dGlsL2lkZW50aXR5JztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFsbChjb25jdXJyZW50KSB7XG4gICAgaWYgKGNvbmN1cnJlbnQgPT09IHZvaWQgMCkgeyBjb25jdXJyZW50ID0gSW5maW5pdHk7IH1cbiAgICByZXR1cm4gbWVyZ2VNYXAoaWRlbnRpdHksIGNvbmN1cnJlbnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VBbGwuanMubWFwIiwiaW1wb3J0IHsgbWVyZ2VBbGwgfSBmcm9tICcuL21lcmdlQWxsJztcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRBbGwoKSB7XG4gICAgcmV0dXJuIG1lcmdlQWxsKDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uY2F0QWxsLmpzLm1hcCIsImltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9jb25jYXRBbGwnO1xuaW1wb3J0IHsgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmNhdEFsbCgpKGZyb20oYXJncywgcG9wU2NoZWR1bGVyKGFyZ3MpKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXQuanMubWFwIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBjb25jYXQsIGZyb20sIHR5cGUgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHR5cGUge1xuICBGZWF0dXJlU2V0dGluZ3MsXG4gIE5vdGlmaWNhdGlvblNldHRpbmdzLFxuICBTeXN0ZW1TZXR0aW5ncyxcbn0gZnJvbSAnLi4vbW9kZWxzL2V4dGVuc2lvbi1zZXR0aW5ncyc7XG5pbXBvcnQgdHlwZSB7IFN5c3RlbVN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9zeXN0ZW0tc3RhdHVzJztcblxuZXhwb3J0IHR5cGUgU3lzdGVtU3RhdHMgPSB7IFtwOiBzdHJpbmddOiBTeXN0ZW1TdGF0dXMgfTtcbmV4cG9ydCBjbGFzcyBTdG9yYWdlVXRpbHMge1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFJlZ2lzdGVyZWRTeXN0ZW1TZXR0aW5ncygpOiBQcm9taXNlPFN5c3RlbVNldHRpbmdzW10+IHtcbiAgICBjb25zdCBzdG9yYWdlRW50cnkgPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3JlZ2lzdGVyZWRTeXN0ZW1zJykpIGFzIHtcbiAgICAgIHJlZ2lzdGVyZWRTeXN0ZW1zOiBTeXN0ZW1TZXR0aW5nc1tdO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coc3RvcmFnZUVudHJ5KTtcbiAgICBpZiAoc3RvcmFnZUVudHJ5ICYmIEFycmF5LmlzQXJyYXkoc3RvcmFnZUVudHJ5LnJlZ2lzdGVyZWRTeXN0ZW1zKSkge1xuICAgICAgcmV0dXJuIHN0b3JhZ2VFbnRyeS5yZWdpc3RlcmVkU3lzdGVtcztcbiAgICB9XG4gICAgYXdhaXQgU3RvcmFnZVV0aWxzLnNldFJlZ2lzdGVyZWRTeXN0ZW1TZXR0aW5ncyhbXSk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBzZXRSZWdpc3RlcmVkU3lzdGVtU2V0dGluZ3MoXG4gICAgcmVnaXN0ZXJlZFN5c3RlbXM6IFN5c3RlbVNldHRpbmdzW10sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHJlZ2lzdGVyZWQgc3lzdGVtczonLCByZWdpc3RlcmVkU3lzdGVtcyk7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyByZWdpc3RlcmVkU3lzdGVtczogcmVnaXN0ZXJlZFN5c3RlbXMgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN5c3RlbVN0YXRzKCk6IFByb21pc2U8eyBbcDogc3RyaW5nXTogU3lzdGVtU3RhdHVzIH0+IHtcbiAgICBjb25zdCBzdG9yYWdlRW50cnkgPSAoYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3N5c3RlbVN0YXRzJykpIGFzIHtcbiAgICAgIHN5c3RlbVN0YXRzOiB7IFt1cmw6IHN0cmluZ106IFN5c3RlbVN0YXR1cyB9O1xuICAgIH07XG4gICAgY29uc29sZS5sb2coc3RvcmFnZUVudHJ5KTtcbiAgICBpZiAoc3RvcmFnZUVudHJ5KSB7XG4gICAgICByZXR1cm4gc3RvcmFnZUVudHJ5LnN5c3RlbVN0YXRzO1xuICAgIH1cbiAgICBhd2FpdCBTdG9yYWdlVXRpbHMuc2V0U3lzdGVtU3RhdHMoe30pO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0U3lzdGVtU3RhdHMoc3lzdGVtU3RhdHM6IFN5c3RlbVN0YXRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBzeXN0ZW1TdGF0czogc3lzdGVtU3RhdHMgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxpc3RlbkZvclN0YXR1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTx7IFtwOiBzdHJpbmddOiBTeXN0ZW1TdGF0dXMgfT4ge1xuICAgIGNvbnN0IHN5c3RlbVN0YXRzQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PHsgW3A6IHN0cmluZ106IFN5c3RlbVN0YXR1cyB9PigpO1xuXG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKFxuICAgICAgKGNoYW5nZXM6IHsgc3lzdGVtU3RhdHM/OiB7IG5ld1ZhbHVlOiBTeXN0ZW1TdGF0czsgb2xkVmFsdWU6IFN5c3RlbVN0YXRzIH0gfSkgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlcy5zeXN0ZW1TdGF0cykge1xuICAgICAgICAgIHN5c3RlbVN0YXRzQ2hhbmdlZC5uZXh0KGNoYW5nZXMuc3lzdGVtU3RhdHMubmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICApO1xuICAgIHJldHVybiBjb25jYXQoZnJvbShTdG9yYWdlVXRpbHMuZ2V0U3lzdGVtU3RhdHMoKSksIHN5c3RlbVN0YXRzQ2hhbmdlZC5hc09ic2VydmFibGUoKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEZlYXR1cmVTZXR0aW5ncygpOiBQcm9taXNlPEZlYXR1cmVTZXR0aW5ncz4ge1xuICAgIGNvbnN0IHN0b3JhZ2VFbnRyeSA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnZmVhdHVyZVNldHRpbmdzJykpIGFzIHtcbiAgICAgIGZlYXR1cmVTZXR0aW5nczogRmVhdHVyZVNldHRpbmdzO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coc3RvcmFnZUVudHJ5KTtcblxuICAgIHJldHVybiBzdG9yYWdlRW50cnk/LmZlYXR1cmVTZXR0aW5ncztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Tm90aWZpY2F0aW9uU2V0dGluZ3MoKTogUHJvbWlzZTxOb3RpZmljYXRpb25TZXR0aW5ncz4ge1xuICAgIGNvbnN0IHN0b3JhZ2VFbnRyeSA9IChhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnbm90aWZpYWN0aW9uU2V0dGluZ3MnKSkgYXMge1xuICAgICAgbm90aWZpYWN0aW9uU2V0dGluZ3M6IE5vdGlmaWNhdGlvblNldHRpbmdzO1xuICAgIH07XG4gICAgaWYgKHN0b3JhZ2VFbnRyeSAmJiBzdG9yYWdlRW50cnkubm90aWZpYWN0aW9uU2V0dGluZ3MpIHtcbiAgICAgIHJldHVybiBzdG9yYWdlRW50cnkubm90aWZpYWN0aW9uU2V0dGluZ3M7XG4gICAgfVxuXG4gICAgY29uc3Qgbm90aWZpYWN0aW9uU2V0dGluZ3M6IE5vdGlmaWNhdGlvblNldHRpbmdzID0ge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICB9O1xuICAgIGF3YWl0IFN0b3JhZ2VVdGlscy5zZXROb3RpZmljYXRpb25TZXR0aW5ncyhub3RpZmlhY3Rpb25TZXR0aW5ncyk7XG4gICAgcmV0dXJuIG5vdGlmaWFjdGlvblNldHRpbmdzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBzZXROb3RpZmljYXRpb25TZXR0aW5ncyhcbiAgICBub3RpZmlhY3Rpb25TZXR0aW5nczogTm90aWZpY2F0aW9uU2V0dGluZ3MsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgbm90aWZpYWN0aW9uU2V0dGluZ3M6IG5vdGlmaWFjdGlvblNldHRpbmdzIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsIm9ic2VydmFibGUiLCJBbm9ueW1vdXNTdWJqZWN0IiwiU3ltYm9sX29ic2VydmFibGUiLCJTeW1ib2xfaXRlcmF0b3IiLCJpdGVyYXRvciJdLCJtYXBwaW5ncyI6IjtBQUNPLElBQUksMEJBQTBCLGlCQUFpQixTQUFVLFFBQVE7QUFDcEUsU0FBTyxTQUFTLDhCQUE4QjtBQUMxQyxXQUFPLElBQUk7QUFDWCxTQUFLLE9BQU87QUFDWixTQUFLLFVBQVU7QUFBQSxFQUNuQjtBQUNKLENBQUM7QUNERSxJQUFDLFdBQVcsU0FBVSxRQUFRO0FBQzdCLFlBQVVBLFVBQVMsTUFBTTtBQUN6QixXQUFTQSxXQUFVO0FBQ2YsUUFBSSxRQUFRLE9BQU8sS0FBSyxJQUFJLEtBQUs7QUFDakMsVUFBTSxTQUFTO0FBQ2YsVUFBTSxtQkFBbUI7QUFDekIsVUFBTSxZQUFZLENBQUE7QUFDbEIsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sV0FBVztBQUNqQixVQUFNLGNBQWM7QUFDcEIsV0FBTztBQUFBLEVBQ1g7QUFDQSxFQUFBQSxT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LENBQWdCLEdBQUcsbUJBQW1CLGNBQWM7QUFBQSxFQUN0RjtBQUFBLEVBRUEsYUFBb0IscUJBQStDO0FBQ2pFLFVBQU0sZUFBZ0IsTUFBTSxPQUFPLFFBQVEsS0FBSyxJQUFJLGlCQUFpQjtBQUdyRSxZQUFRLElBQUksWUFBWTtBQUV4QixXQUFPLGNBQWM7QUFBQSxFQUN2QjtBQUFBLEVBRUEsYUFBb0IsMEJBQXlEO0FBQzNFLFVBQU0sZUFBZ0IsTUFBTSxPQUFPLFFBQVEsS0FBSyxJQUFJLHNCQUFzQjtBQUcxRSxRQUFJLGdCQUFnQixhQUFhLHNCQUFzQjtBQUNyRCxhQUFPLGFBQWE7QUFBQSxJQUN0QjtBQUVBLFVBQU0sdUJBQTZDO0FBQUEsTUFDakQsU0FBUztBQUFBLElBQUE7QUFFWCxVQUFNLGFBQWEsd0JBQXdCLG9CQUFvQjtBQUMvRCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsYUFBb0Isd0JBQ2xCLHNCQUNlO0FBQ2YsVUFBTSxPQUFPLFFBQVEsS0FBSyxJQUFJLEVBQUUsc0JBQTRDO0FBQUEsRUFDOUU7QUFDRjsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyN119
