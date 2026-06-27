(() => {
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });

  // dist/build/map.XBgQGlaY.js
  var w = function(r, n) {
    return w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }, w(r, n);
  };
  function E(r, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    w(r, n);
    function t() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  }
  var A = function() {
    return A = Object.assign || function(n) {
      for (var t, i = 1, o = arguments.length; i < o; i++) {
        t = arguments[i];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
      }
      return n;
    }, A.apply(this, arguments);
  };
  function $(r, n, t, i) {
    function o(e) {
      return e instanceof t ? e : new t(function(u2) {
        u2(e);
      });
    }
    return new (t || (t = Promise))(function(e, u2) {
      function c(l) {
        try {
          s(i.next(l));
        } catch (b2) {
          u2(b2);
        }
      }
      function a2(l) {
        try {
          s(i.throw(l));
        } catch (b2) {
          u2(b2);
        }
      }
      function s(l) {
        l.done ? e(l.value) : o(l.value).then(c, a2);
      }
      s((i = i.apply(r, [])).next());
    });
  }
  function z(r, n) {
    var t = { label: 0, sent: function() {
      if (e[0] & 1) throw e[1];
      return e[1];
    }, trys: [], ops: [] }, i, o, e, u2;
    return u2 = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u2[Symbol.iterator] = function() {
      return this;
    }), u2;
    function c(s) {
      return function(l) {
        return a2([s, l]);
      };
    }
    function a2(s) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; t; ) try {
        if (i = 1, o && (e = s[0] & 2 ? o.return : s[0] ? o.throw || ((e = o.return) && e.call(o), 0) : o.next) && !(e = e.call(o, s[1])).done) return e;
        switch (o = 0, e && (s = [s[0] & 2, e.value]), s[0]) {
          case 0:
          case 1:
            e = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: false };
          case 5:
            t.label++, o = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!e || s[1] > e[0] && s[1] < e[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < e[1]) {
              t.label = e[1], e = s;
              break;
            }
            if (e && t.label < e[2]) {
              t.label = e[2], t.ops.push(s);
              break;
            }
            e[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = n.call(r, t);
      } catch (l) {
        s = [6, l], o = 0;
      } finally {
        i = e = 0;
      }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  }
  function m(r) {
    var n = typeof Symbol == "function" && Symbol.iterator, t = n && r[n], i = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
    throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function _(r, n) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var i = t.call(r), o, e = [], u2;
    try {
      for (; (n === void 0 || n-- > 0) && !(o = i.next()).done; ) e.push(o.value);
    } catch (c) {
      u2 = { error: c };
    } finally {
      try {
        o && !o.done && (t = i.return) && t.call(i);
      } finally {
        if (u2) throw u2.error;
      }
    }
    return e;
  }
  function g(r, n, t) {
    if (arguments.length === 2) for (var i = 0, o = n.length, e; i < o; i++) (e || !(i in n)) && (e || (e = Array.prototype.slice.call(n, 0, i)), e[i] = n[i]);
    return r.concat(e || Array.prototype.slice.call(n));
  }
  function x(r) {
    return this instanceof x ? (this.v = r, this) : new x(r);
  }
  function N(r, n, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = t.apply(r, n || []), o, e = [];
    return o = {}, u2("next"), u2("throw"), u2("return"), o[Symbol.asyncIterator] = function() {
      return this;
    }, o;
    function u2(f) {
      i[f] && (o[f] = function(p) {
        return new Promise(function(v2, h2) {
          e.push([f, p, v2, h2]) > 1 || c(f, p);
        });
      });
    }
    function c(f, p) {
      try {
        a2(i[f](p));
      } catch (v2) {
        b2(e[0][3], v2);
      }
    }
    function a2(f) {
      f.value instanceof x ? Promise.resolve(f.value.v).then(s, l) : b2(e[0][2], f);
    }
    function s(f) {
      c("next", f);
    }
    function l(f) {
      c("throw", f);
    }
    function b2(f, p) {
      f(p), e.shift(), e.length && c(e[0][0], e[0][1]);
    }
  }
  function tt(r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r[Symbol.asyncIterator], t;
    return n ? n.call(r) : (r = typeof m == "function" ? m(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
      return this;
    }, t);
    function i(e) {
      t[e] = r[e] && function(u2) {
        return new Promise(function(c, a2) {
          u2 = r[e](u2), o(c, a2, u2.done, u2.value);
        });
      };
    }
    function o(e, u2, c, a2) {
      Promise.resolve(a2).then(function(s) {
        e({ value: s, done: c });
      }, u2);
    }
  }
  function y(r) {
    return typeof r == "function";
  }
  function M(r) {
    var n = function(i) {
      Error.call(i), i.stack = new Error().stack;
    }, t = r(n);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var S = M(function(r) {
    return function(t) {
      r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, o) {
        return o + 1 + ") " + i.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function I(r, n) {
    if (r) {
      var t = r.indexOf(n);
      0 <= t && r.splice(t, 1);
    }
  }
  var P = (function() {
    function r(n) {
      this.initialTeardown = n, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return r.prototype.unsubscribe = function() {
      var n, t, i, o, e;
      if (!this.closed) {
        this.closed = true;
        var u2 = this._parentage;
        if (u2) if (this._parentage = null, Array.isArray(u2)) try {
          for (var c = m(u2), a2 = c.next(); !a2.done; a2 = c.next()) {
            var s = a2.value;
            s.remove(this);
          }
        } catch (h2) {
          n = { error: h2 };
        } finally {
          try {
            a2 && !a2.done && (t = c.return) && t.call(c);
          } finally {
            if (n) throw n.error;
          }
        }
        else u2.remove(this);
        var l = this.initialTeardown;
        if (y(l)) try {
          l();
        } catch (h2) {
          e = h2 instanceof S ? h2.errors : [h2];
        }
        var b2 = this._finalizers;
        if (b2) {
          this._finalizers = null;
          try {
            for (var f = m(b2), p = f.next(); !p.done; p = f.next()) {
              var v2 = p.value;
              try {
                U(v2);
              } catch (h2) {
                e = e ?? [], h2 instanceof S ? e = g(g([], _(e)), _(h2.errors)) : e.push(h2);
              }
            }
          } catch (h2) {
            i = { error: h2 };
          } finally {
            try {
              p && !p.done && (o = f.return) && o.call(f);
            } finally {
              if (i) throw i.error;
            }
          }
        }
        if (e) throw new S(e);
      }
    }, r.prototype.add = function(n) {
      var t;
      if (n && n !== this) if (this.closed) U(n);
      else {
        if (n instanceof r) {
          if (n.closed || n._hasParent(this)) return;
          n._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(n);
      }
    }, r.prototype._hasParent = function(n) {
      var t = this._parentage;
      return t === n || Array.isArray(t) && t.includes(n);
    }, r.prototype._addParent = function(n) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
    }, r.prototype._removeParent = function(n) {
      var t = this._parentage;
      t === n ? this._parentage = null : Array.isArray(t) && I(t, n);
    }, r.prototype.remove = function(n) {
      var t = this._finalizers;
      t && I(t, n), n instanceof r && n._removeParent(this);
    }, r.EMPTY = (function() {
      var n = new r();
      return n.closed = true, n;
    })(), r;
  })();
  var rt = P.EMPTY;
  function F(r) {
    return r instanceof P || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe);
  }
  function U(r) {
    y(r) ? r() : r.unsubscribe();
  }
  var R = { Promise: void 0 };
  var Y = { setTimeout: function(r, n) {
    for (var t = [], i = 2; i < arguments.length; i++) t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, g([r, n], _(t)));
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  }, delegate: void 0 };
  function q(r) {
    Y.setTimeout(function() {
      throw r;
    });
  }
  function j() {
  }
  function B(r) {
    r();
  }
  var T = (function(r) {
    E(n, r);
    function n(t) {
      var i = r.call(this) || this;
      return i.isStopped = false, t ? (i.destination = t, F(t) && t.add(i)) : i.destination = H, i;
    }
    return n.create = function(t, i, o) {
      return new O(t, i, o);
    }, n.prototype.next = function(t) {
      this.isStopped || this._next(t);
    }, n.prototype.error = function(t) {
      this.isStopped || (this.isStopped = true, this._error(t));
    }, n.prototype.complete = function() {
      this.isStopped || (this.isStopped = true, this._complete());
    }, n.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = true, r.prototype.unsubscribe.call(this), this.destination = null);
    }, n.prototype._next = function(t) {
      this.destination.next(t);
    }, n.prototype._error = function(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }, n.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, n;
  })(P);
  var G = (function() {
    function r(n) {
      this.partialObserver = n;
    }
    return r.prototype.next = function(n) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(n);
      } catch (i) {
        d(i);
      }
    }, r.prototype.error = function(n) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(n);
      } catch (i) {
        d(i);
      }
      else d(n);
    }, r.prototype.complete = function() {
      var n = this.partialObserver;
      if (n.complete) try {
        n.complete();
      } catch (t) {
        d(t);
      }
    }, r;
  })();
  var O = (function(r) {
    E(n, r);
    function n(t, i, o) {
      var e = r.call(this) || this, u2;
      return y(t) || !t ? u2 = { next: t ?? void 0, error: i ?? void 0, complete: o ?? void 0 } : u2 = t, e.destination = new G(u2), e;
    }
    return n;
  })(T);
  function d(r) {
    q(r);
  }
  function V(r) {
    throw r;
  }
  var H = { closed: true, next: j, error: V, complete: j };
  var L = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function C(r) {
    return r;
  }
  function D(r) {
    return r.length === 0 ? C : r.length === 1 ? r[0] : function(t) {
      return r.reduce(function(i, o) {
        return o(i);
      }, t);
    };
  }
  var nt = (function() {
    function r(n) {
      n && (this._subscribe = n);
    }
    return r.prototype.lift = function(n) {
      var t = new r();
      return t.source = this, t.operator = n, t;
    }, r.prototype.subscribe = function(n, t, i) {
      var o = this, e = K(n) ? n : new O(n, t, i);
      return B(function() {
        var u2 = o, c = u2.operator, a2 = u2.source;
        e.add(c ? c.call(e, a2) : a2 ? o._subscribe(e) : o._trySubscribe(e));
      }), e;
    }, r.prototype._trySubscribe = function(n) {
      try {
        return this._subscribe(n);
      } catch (t) {
        n.error(t);
      }
    }, r.prototype.forEach = function(n, t) {
      var i = this;
      return t = k(t), new t(function(o, e) {
        var u2 = new O({ next: function(c) {
          try {
            n(c);
          } catch (a2) {
            e(a2), u2.unsubscribe();
          }
        }, error: e, complete: o });
        i.subscribe(u2);
      });
    }, r.prototype._subscribe = function(n) {
      var t;
      return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(n);
    }, r.prototype[L] = function() {
      return this;
    }, r.prototype.pipe = function() {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
      return D(n)(this);
    }, r.prototype.toPromise = function(n) {
      var t = this;
      return n = k(n), new n(function(i, o) {
        var e;
        t.subscribe(function(u2) {
          return e = u2;
        }, function(u2) {
          return o(u2);
        }, function() {
          return i(e);
        });
      });
    }, r.create = function(n) {
      return new r(n);
    }, r;
  })();
  function k(r) {
    var n;
    return (n = r ?? R.Promise) !== null && n !== void 0 ? n : Promise;
  }
  function J(r) {
    return r && y(r.next) && y(r.error) && y(r.complete);
  }
  function K(r) {
    return r && r instanceof T || J(r) && F(r);
  }
  function Q(r) {
    return y(r?.lift);
  }
  function W(r) {
    return function(n) {
      if (Q(n)) return n.lift(function(t) {
        try {
          return r(t, this);
        } catch (i) {
          this.error(i);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function X(r, n, t, i, o) {
    return new Z(r, n, t, i, o);
  }
  var Z = (function(r) {
    E(n, r);
    function n(t, i, o, e, u2, c) {
      var a2 = r.call(this, t) || this;
      return a2.onFinalize = u2, a2.shouldUnsubscribe = c, a2._next = i ? function(s) {
        try {
          i(s);
        } catch (l) {
          t.error(l);
        }
      } : r.prototype._next, a2._error = e ? function(s) {
        try {
          e(s);
        } catch (l) {
          t.error(l);
        } finally {
          this.unsubscribe();
        }
      } : r.prototype._error, a2._complete = o ? function() {
        try {
          o();
        } catch (s) {
          t.error(s);
        } finally {
          this.unsubscribe();
        }
      } : r.prototype._complete, a2;
    }
    return n.prototype.unsubscribe = function() {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var i = this.closed;
        r.prototype.unsubscribe.call(this), !i && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
      }
    }, n;
  })(T);
  function et(r) {
    return r && y(r.schedule);
  }
  function it(r, n) {
    return W(function(t, i) {
      var o = 0;
      t.subscribe(X(i, function(e) {
        i.next(r.call(n, e, o++));
      }));
    });
  }

  // dist/build/Text.BuxrizBl.js
  var im = Object.defineProperty;
  var _u = (t) => {
    throw TypeError(t);
  };
  var om = (t, e, n) => e in t ? im(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
  var Un = (t, e, n) => om(t, typeof e != "symbol" ? e + "" : e, n);
  var el = (t, e, n) => e.has(t) || _u("Cannot " + n);
  var $2 = (t, e, n) => (el(t, e, "read from private field"), n ? n.call(t) : e.get(t));
  var pe = (t, e, n) => e.has(t) ? _u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
  var fe = (t, e, n, r) => (el(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
  var Ct = (t, e, n) => (el(t, e, "access private method"), n);
  var xu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var Su = {};
  var Eu;
  function am() {
    if (Eu) return Su;
    Eu = 1;
    var t;
    return (function(e) {
      (function(n) {
        var r = typeof globalThis == "object" ? globalThis : typeof xu == "object" ? xu : typeof self == "object" ? self : typeof this == "object" ? this : c(), i = o(e);
        typeof r.Reflect < "u" && (i = o(r.Reflect, i)), n(i, r), typeof r.Reflect > "u" && (r.Reflect = e);
        function o(l, u2) {
          return function(f, d3) {
            Object.defineProperty(l, f, { configurable: true, writable: true, value: d3 }), u2 && u2(f, d3);
          };
        }
        function s() {
          try {
            return Function("return this;")();
          } catch {
          }
        }
        function a2() {
          try {
            return (0, eval)("(function() { return this; })()");
          } catch {
          }
        }
        function c() {
          return s() || a2();
        }
      })(function(n, r) {
        var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", s = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", a2 = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", l = { __proto__: [] } instanceof Array, u2 = !c && !l, f = { create: c ? function() {
          return Sr(/* @__PURE__ */ Object.create(null));
        } : l ? function() {
          return Sr({ __proto__: null });
        } : function() {
          return Sr({});
        }, has: u2 ? function(E2, A3) {
          return i.call(E2, A3);
        } : function(E2, A3) {
          return A3 in E2;
        }, get: u2 ? function(E2, A3) {
          return i.call(E2, A3) ? E2[A3] : void 0;
        } : function(E2, A3) {
          return E2[A3];
        } }, d3 = Object.getPrototypeOf(Function), h2 = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : le3(), p = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Le(), g3 = typeof WeakMap == "function" ? WeakMap : Za2(), m2 = o ? Symbol.for("@reflect-metadata:registry") : void 0, w4 = Ts2(), v2 = Qa2(w4);
        function y3(E2, A3, k3, j2) {
          if (te(k3)) {
            if (!xr(E2)) throw new TypeError();
            if (!tn2(A3)) throw new TypeError();
            return M3(E2, A3);
          } else {
            if (!xr(E2)) throw new TypeError();
            if (!Re2(A3)) throw new TypeError();
            if (!Re2(j2) && !te(j2) && !ut2(j2)) throw new TypeError();
            return ut2(j2) && (j2 = void 0), k3 = Ee2(k3), ee(E2, A3, k3, j2);
          }
        }
        n("decorate", y3);
        function b2(E2, A3) {
          function k3(j2, ie) {
            if (!Re2(j2)) throw new TypeError();
            if (!te(ie) && !tt2(ie)) throw new TypeError();
            se3(E2, A3, j2, ie);
          }
          return k3;
        }
        n("metadata", b2);
        function _4(E2, A3, k3, j2) {
          if (!Re2(k3)) throw new TypeError();
          return te(j2) || (j2 = Ee2(j2)), se3(E2, A3, k3, j2);
        }
        n("defineMetadata", _4);
        function C3(E2, A3, k3) {
          if (!Re2(A3)) throw new TypeError();
          return te(k3) || (k3 = Ee2(k3)), H3(E2, A3, k3);
        }
        n("hasMetadata", C3);
        function x2(E2, A3, k3) {
          if (!Re2(A3)) throw new TypeError();
          return te(k3) || (k3 = Ee2(k3)), Se3(E2, A3, k3);
        }
        n("hasOwnMetadata", x2);
        function S2(E2, A3, k3) {
          if (!Re2(A3)) throw new TypeError();
          return te(k3) || (k3 = Ee2(k3)), He(E2, A3, k3);
        }
        n("getMetadata", S2);
        function D3(E2, A3, k3) {
          if (!Re2(A3)) throw new TypeError();
          return te(k3) || (k3 = Ee2(k3)), G4(E2, A3, k3);
        }
        n("getOwnMetadata", D3);
        function K2(E2, A3) {
          if (!Re2(E2)) throw new TypeError();
          return te(A3) || (A3 = Ee2(A3)), et2(E2, A3);
        }
        n("getMetadataKeys", K2);
        function ce4(E2, A3) {
          if (!Re2(E2)) throw new TypeError();
          return te(A3) || (A3 = Ee2(A3)), re(E2, A3);
        }
        n("getOwnMetadataKeys", ce4);
        function ue2(E2, A3, k3) {
          if (!Re2(A3)) throw new TypeError();
          if (te(k3) || (k3 = Ee2(k3)), !Re2(A3)) throw new TypeError();
          te(k3) || (k3 = Ee2(k3));
          var j2 = ne(A3, k3, false);
          return te(j2) ? false : j2.OrdinaryDeleteMetadata(E2, A3, k3);
        }
        n("deleteMetadata", ue2);
        function M3(E2, A3) {
          for (var k3 = E2.length - 1; k3 >= 0; --k3) {
            var j2 = E2[k3], ie = j2(A3);
            if (!te(ie) && !ut2(ie)) {
              if (!tn2(ie)) throw new TypeError();
              A3 = ie;
            }
          }
          return A3;
        }
        function ee(E2, A3, k3, j2) {
          for (var ie = E2.length - 1; ie >= 0; --ie) {
            var Xe2 = E2[ie], ot = Xe2(A3, k3, j2);
            if (!te(ot) && !ut2(ot)) {
              if (!Re2(ot)) throw new TypeError();
              j2 = ot;
            }
          }
          return j2;
        }
        function H3(E2, A3, k3) {
          var j2 = Se3(E2, A3, k3);
          if (j2) return true;
          var ie = Bt2(A3);
          return ut2(ie) ? false : H3(E2, ie, k3);
        }
        function Se3(E2, A3, k3) {
          var j2 = ne(A3, k3, false);
          return te(j2) ? false : Y4(j2.OrdinaryHasOwnMetadata(E2, A3, k3));
        }
        function He(E2, A3, k3) {
          var j2 = Se3(E2, A3, k3);
          if (j2) return G4(E2, A3, k3);
          var ie = Bt2(A3);
          if (!ut2(ie)) return He(E2, ie, k3);
        }
        function G4(E2, A3, k3) {
          var j2 = ne(A3, k3, false);
          if (!te(j2)) return j2.OrdinaryGetOwnMetadata(E2, A3, k3);
        }
        function se3(E2, A3, k3, j2) {
          var ie = ne(k3, j2, true);
          ie.OrdinaryDefineOwnMetadata(E2, A3, k3, j2);
        }
        function et2(E2, A3) {
          var k3 = re(E2, A3), j2 = Bt2(E2);
          if (j2 === null) return k3;
          var ie = et2(j2, A3);
          if (ie.length <= 0) return k3;
          if (k3.length <= 0) return ie;
          for (var Xe2 = new p(), ot = [], he2 = 0, V3 = k3; he2 < V3.length; he2++) {
            var X2 = V3[he2], J3 = Xe2.has(X2);
            J3 || (Xe2.add(X2), ot.push(X2));
          }
          for (var Z3 = 0, be2 = ie; Z3 < be2.length; Z3++) {
            var X2 = be2[Z3], J3 = Xe2.has(X2);
            J3 || (Xe2.add(X2), ot.push(X2));
          }
          return ot;
        }
        function re(E2, A3) {
          var k3 = ne(E2, A3, false);
          return k3 ? k3.OrdinaryOwnMetadataKeys(E2, A3) : [];
        }
        function ze(E2) {
          if (E2 === null) return 1;
          switch (typeof E2) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return E2 === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function te(E2) {
          return E2 === void 0;
        }
        function ut2(E2) {
          return E2 === null;
        }
        function Dt3(E2) {
          return typeof E2 == "symbol";
        }
        function Re2(E2) {
          return typeof E2 == "object" ? E2 !== null : typeof E2 == "function";
        }
        function Oe3(E2, A3) {
          switch (ze(E2)) {
            case 0:
              return E2;
            case 1:
              return E2;
            case 2:
              return E2;
            case 3:
              return E2;
            case 4:
              return E2;
            case 5:
              return E2;
          }
          var k3 = "string", j2 = Jr2(E2, s);
          if (j2 !== void 0) {
            var ie = j2.call(E2, k3);
            if (Re2(ie)) throw new TypeError();
            return ie;
          }
          return Cn2(E2);
        }
        function Cn2(E2, A3) {
          var k3, j2, ie;
          {
            var Xe2 = E2.toString;
            if (cn2(Xe2)) {
              var j2 = Xe2.call(E2);
              if (!Re2(j2)) return j2;
            }
            var k3 = E2.valueOf;
            if (cn2(k3)) {
              var j2 = k3.call(E2);
              if (!Re2(j2)) return j2;
            }
          }
          throw new TypeError();
        }
        function Y4(E2) {
          return !!E2;
        }
        function ye2(E2) {
          return "" + E2;
        }
        function Ee2(E2) {
          var A3 = Oe3(E2);
          return Dt3(A3) ? A3 : ye2(A3);
        }
        function xr(E2) {
          return Array.isArray ? Array.isArray(E2) : E2 instanceof Object ? E2 instanceof Array : Object.prototype.toString.call(E2) === "[object Array]";
        }
        function cn2(E2) {
          return typeof E2 == "function";
        }
        function tn2(E2) {
          return typeof E2 == "function";
        }
        function tt2(E2) {
          switch (ze(E2)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function Kr2(E2, A3) {
          return E2 === A3 || E2 !== E2 && A3 !== A3;
        }
        function Jr2(E2, A3) {
          var k3 = E2[A3];
          if (k3 != null) {
            if (!cn2(k3)) throw new TypeError();
            return k3;
          }
        }
        function Yr2(E2) {
          var A3 = Jr2(E2, a2);
          if (!cn2(A3)) throw new TypeError();
          var k3 = A3.call(E2);
          if (!Re2(k3)) throw new TypeError();
          return k3;
        }
        function Qr2(E2) {
          return E2.value;
        }
        function Mi3(E2) {
          var A3 = E2.next();
          return A3.done ? false : A3;
        }
        function Nn2(E2) {
          var A3 = E2.return;
          A3 && A3.call(E2);
        }
        function Bt2(E2) {
          var A3 = Object.getPrototypeOf(E2);
          if (typeof E2 != "function" || E2 === d3 || A3 !== d3) return A3;
          var k3 = E2.prototype, j2 = k3 && Object.getPrototypeOf(k3);
          if (j2 == null || j2 === Object.prototype) return A3;
          var ie = j2.constructor;
          return typeof ie != "function" || ie === E2 ? A3 : ie;
        }
        function Ya2() {
          var E2;
          !te(m2) && typeof r.Reflect < "u" && !(m2 in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (E2 = Q2(r.Reflect));
          var A3, k3, j2, ie = new g3(), Xe2 = { registerProvider: ot, getProvider: V3, setProvider: J3 };
          return Xe2;
          function ot(Z3) {
            if (!Object.isExtensible(Xe2)) throw new Error("Cannot add provider to a frozen registry.");
            switch (true) {
              case E2 === Z3:
                break;
              case te(A3):
                A3 = Z3;
                break;
              case A3 === Z3:
                break;
              case te(k3):
                k3 = Z3;
                break;
              case k3 === Z3:
                break;
              default:
                j2 === void 0 && (j2 = new p()), j2.add(Z3);
                break;
            }
          }
          function he2(Z3, be2) {
            if (!te(A3)) {
              if (A3.isProviderFor(Z3, be2)) return A3;
              if (!te(k3)) {
                if (k3.isProviderFor(Z3, be2)) return A3;
                if (!te(j2)) for (var Fe2 = Yr2(j2); ; ) {
                  var Ke = Mi3(Fe2);
                  if (!Ke) return;
                  var An2 = Qr2(Ke);
                  if (An2.isProviderFor(Z3, be2)) return Nn2(Fe2), An2;
                }
              }
            }
            if (!te(E2) && E2.isProviderFor(Z3, be2)) return E2;
          }
          function V3(Z3, be2) {
            var Fe2 = ie.get(Z3), Ke;
            return te(Fe2) || (Ke = Fe2.get(be2)), te(Ke) && (Ke = he2(Z3, be2), te(Ke) || (te(Fe2) && (Fe2 = new h2(), ie.set(Z3, Fe2)), Fe2.set(be2, Ke))), Ke;
          }
          function X2(Z3) {
            if (te(Z3)) throw new TypeError();
            return A3 === Z3 || k3 === Z3 || !te(j2) && j2.has(Z3);
          }
          function J3(Z3, be2, Fe2) {
            if (!X2(Fe2)) throw new Error("Metadata provider not registered.");
            var Ke = V3(Z3, be2);
            if (Ke !== Fe2) {
              if (!te(Ke)) return false;
              var An2 = ie.get(Z3);
              te(An2) && (An2 = new h2(), ie.set(Z3, An2)), An2.set(be2, Fe2);
            }
            return true;
          }
        }
        function Ts2() {
          var E2;
          return !te(m2) && Re2(r.Reflect) && Object.isExtensible(r.Reflect) && (E2 = r.Reflect[m2]), te(E2) && (E2 = Ya2()), !te(m2) && Re2(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, m2, { enumerable: false, configurable: false, writable: false, value: E2 }), E2;
        }
        function Qa2(E2) {
          var A3 = new g3(), k3 = { isProviderFor: function(X2, J3) {
            var Z3 = A3.get(X2);
            return te(Z3) ? false : Z3.has(J3);
          }, OrdinaryDefineOwnMetadata: ot, OrdinaryHasOwnMetadata: ie, OrdinaryGetOwnMetadata: Xe2, OrdinaryOwnMetadataKeys: he2, OrdinaryDeleteMetadata: V3 };
          return w4.registerProvider(k3), k3;
          function j2(X2, J3, Z3) {
            var be2 = A3.get(X2), Fe2 = false;
            if (te(be2)) {
              if (!Z3) return;
              be2 = new h2(), A3.set(X2, be2), Fe2 = true;
            }
            var Ke = be2.get(J3);
            if (te(Ke)) {
              if (!Z3) return;
              if (Ke = new h2(), be2.set(J3, Ke), !E2.setProvider(X2, J3, k3)) throw be2.delete(J3), Fe2 && A3.delete(X2), new Error("Wrong provider for target.");
            }
            return Ke;
          }
          function ie(X2, J3, Z3) {
            var be2 = j2(J3, Z3, false);
            return te(be2) ? false : Y4(be2.has(X2));
          }
          function Xe2(X2, J3, Z3) {
            var be2 = j2(J3, Z3, false);
            if (!te(be2)) return be2.get(X2);
          }
          function ot(X2, J3, Z3, be2) {
            var Fe2 = j2(Z3, be2, true);
            Fe2.set(X2, J3);
          }
          function he2(X2, J3) {
            var Z3 = [], be2 = j2(X2, J3, false);
            if (te(be2)) return Z3;
            for (var Fe2 = be2.keys(), Ke = Yr2(Fe2), An2 = 0; ; ) {
              var bu2 = Mi3(Ke);
              if (!bu2) return Z3.length = An2, Z3;
              var nm = Qr2(bu2);
              try {
                Z3[An2] = nm;
              } catch (rm) {
                try {
                  Nn2(Ke);
                } finally {
                  throw rm;
                }
              }
              An2++;
            }
          }
          function V3(X2, J3, Z3) {
            var be2 = j2(J3, Z3, false);
            if (te(be2) || !be2.delete(X2)) return false;
            if (be2.size === 0) {
              var Fe2 = A3.get(J3);
              te(Fe2) || (Fe2.delete(Z3), Fe2.size === 0 && A3.delete(Fe2));
            }
            return true;
          }
        }
        function Q2(E2) {
          var A3 = E2.defineMetadata, k3 = E2.hasOwnMetadata, j2 = E2.getOwnMetadata, ie = E2.getOwnMetadataKeys, Xe2 = E2.deleteMetadata, ot = new g3(), he2 = { isProviderFor: function(V3, X2) {
            var J3 = ot.get(V3);
            return !te(J3) && J3.has(X2) ? true : ie(V3, X2).length ? (te(J3) && (J3 = new p(), ot.set(V3, J3)), J3.add(X2), true) : false;
          }, OrdinaryDefineOwnMetadata: A3, OrdinaryHasOwnMetadata: k3, OrdinaryGetOwnMetadata: j2, OrdinaryOwnMetadataKeys: ie, OrdinaryDeleteMetadata: Xe2 };
          return he2;
        }
        function ne(E2, A3, k3) {
          var j2 = w4.getProvider(E2, A3);
          if (!te(j2)) return j2;
          if (k3) {
            if (w4.setProvider(E2, A3, v2)) return v2;
            throw new Error("Illegal state.");
          }
        }
        function le3() {
          var E2 = {}, A3 = [], k3 = (function() {
            function he2(V3, X2, J3) {
              this._index = 0, this._keys = V3, this._values = X2, this._selector = J3;
            }
            return he2.prototype["@@iterator"] = function() {
              return this;
            }, he2.prototype[a2] = function() {
              return this;
            }, he2.prototype.next = function() {
              var V3 = this._index;
              if (V3 >= 0 && V3 < this._keys.length) {
                var X2 = this._selector(this._keys[V3], this._values[V3]);
                return V3 + 1 >= this._keys.length ? (this._index = -1, this._keys = A3, this._values = A3) : this._index++, { value: X2, done: false };
              }
              return { value: void 0, done: true };
            }, he2.prototype.throw = function(V3) {
              throw this._index >= 0 && (this._index = -1, this._keys = A3, this._values = A3), V3;
            }, he2.prototype.return = function(V3) {
              return this._index >= 0 && (this._index = -1, this._keys = A3, this._values = A3), { value: V3, done: true };
            }, he2;
          })(), j2 = (function() {
            function he2() {
              this._keys = [], this._values = [], this._cacheKey = E2, this._cacheIndex = -2;
            }
            return Object.defineProperty(he2.prototype, "size", { get: function() {
              return this._keys.length;
            }, enumerable: true, configurable: true }), he2.prototype.has = function(V3) {
              return this._find(V3, false) >= 0;
            }, he2.prototype.get = function(V3) {
              var X2 = this._find(V3, false);
              return X2 >= 0 ? this._values[X2] : void 0;
            }, he2.prototype.set = function(V3, X2) {
              var J3 = this._find(V3, true);
              return this._values[J3] = X2, this;
            }, he2.prototype.delete = function(V3) {
              var X2 = this._find(V3, false);
              if (X2 >= 0) {
                for (var J3 = this._keys.length, Z3 = X2 + 1; Z3 < J3; Z3++) this._keys[Z3 - 1] = this._keys[Z3], this._values[Z3 - 1] = this._values[Z3];
                return this._keys.length--, this._values.length--, Kr2(V3, this._cacheKey) && (this._cacheKey = E2, this._cacheIndex = -2), true;
              }
              return false;
            }, he2.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = E2, this._cacheIndex = -2;
            }, he2.prototype.keys = function() {
              return new k3(this._keys, this._values, ie);
            }, he2.prototype.values = function() {
              return new k3(this._keys, this._values, Xe2);
            }, he2.prototype.entries = function() {
              return new k3(this._keys, this._values, ot);
            }, he2.prototype["@@iterator"] = function() {
              return this.entries();
            }, he2.prototype[a2] = function() {
              return this.entries();
            }, he2.prototype._find = function(V3, X2) {
              if (!Kr2(this._cacheKey, V3)) {
                this._cacheIndex = -1;
                for (var J3 = 0; J3 < this._keys.length; J3++) if (Kr2(this._keys[J3], V3)) {
                  this._cacheIndex = J3;
                  break;
                }
              }
              return this._cacheIndex < 0 && X2 && (this._cacheIndex = this._keys.length, this._keys.push(V3), this._values.push(void 0)), this._cacheIndex;
            }, he2;
          })();
          return j2;
          function ie(he2, V3) {
            return he2;
          }
          function Xe2(he2, V3) {
            return V3;
          }
          function ot(he2, V3) {
            return [he2, V3];
          }
        }
        function Le() {
          var E2 = (function() {
            function A3() {
              this._map = new h2();
            }
            return Object.defineProperty(A3.prototype, "size", { get: function() {
              return this._map.size;
            }, enumerable: true, configurable: true }), A3.prototype.has = function(k3) {
              return this._map.has(k3);
            }, A3.prototype.add = function(k3) {
              return this._map.set(k3, k3), this;
            }, A3.prototype.delete = function(k3) {
              return this._map.delete(k3);
            }, A3.prototype.clear = function() {
              this._map.clear();
            }, A3.prototype.keys = function() {
              return this._map.keys();
            }, A3.prototype.values = function() {
              return this._map.keys();
            }, A3.prototype.entries = function() {
              return this._map.entries();
            }, A3.prototype["@@iterator"] = function() {
              return this.keys();
            }, A3.prototype[a2] = function() {
              return this.keys();
            }, A3;
          })();
          return E2;
        }
        function Za2() {
          var E2 = 16, A3 = f.create(), k3 = j2();
          return (function() {
            function V3() {
              this._key = j2();
            }
            return V3.prototype.has = function(X2) {
              var J3 = ie(X2, false);
              return J3 !== void 0 ? f.has(J3, this._key) : false;
            }, V3.prototype.get = function(X2) {
              var J3 = ie(X2, false);
              return J3 !== void 0 ? f.get(J3, this._key) : void 0;
            }, V3.prototype.set = function(X2, J3) {
              var Z3 = ie(X2, true);
              return Z3[this._key] = J3, this;
            }, V3.prototype.delete = function(X2) {
              var J3 = ie(X2, false);
              return J3 !== void 0 ? delete J3[this._key] : false;
            }, V3.prototype.clear = function() {
              this._key = j2();
            }, V3;
          })();
          function j2() {
            var V3;
            do
              V3 = "@@WeakMap@@" + he2();
            while (f.has(A3, V3));
            return A3[V3] = true, V3;
          }
          function ie(V3, X2) {
            if (!i.call(V3, k3)) {
              if (!X2) return;
              Object.defineProperty(V3, k3, { value: f.create() });
            }
            return V3[k3];
          }
          function Xe2(V3, X2) {
            for (var J3 = 0; J3 < X2; ++J3) V3[J3] = Math.random() * 255 | 0;
            return V3;
          }
          function ot(V3) {
            if (typeof Uint8Array == "function") {
              var X2 = new Uint8Array(V3);
              return typeof crypto < "u" ? crypto.getRandomValues(X2) : typeof msCrypto < "u" ? msCrypto.getRandomValues(X2) : Xe2(X2, V3), X2;
            }
            return Xe2(new Array(V3), V3);
          }
          function he2() {
            var V3 = ot(E2);
            V3[6] = V3[6] & 79 | 64, V3[8] = V3[8] & 191 | 128;
            for (var X2 = "", J3 = 0; J3 < E2; ++J3) {
              var Z3 = V3[J3];
              (J3 === 4 || J3 === 6 || J3 === 8) && (X2 += "-"), Z3 < 16 && (X2 += "0"), X2 += Z3.toString(16).toLowerCase();
            }
            return X2;
          }
        }
        function Sr(E2) {
          return E2.__ = void 0, delete E2.__, E2;
        }
      });
    })(t || (t = {})), Su;
  }
  am();
  var Sl = false;
  var xc = Array.isArray;
  var lm = Array.prototype.indexOf;
  var lo = Array.prototype.includes;
  var Ta = Array.from;
  var _h = Object.defineProperty;
  var Mr = Object.getOwnPropertyDescriptor;
  var wh = Object.getOwnPropertyDescriptors;
  var cm = Object.prototype;
  var um = Array.prototype;
  var Sc = Object.getPrototypeOf;
  var Cu = Object.isExtensible;
  function Oo(t) {
    return typeof t == "function";
  }
  var an = () => {
  };
  function fm(t) {
    for (var e = 0; e < t.length; e++) t[e]();
  }
  function xh() {
    var t, e, n = new Promise((r, i) => {
      t = r, e = i;
    });
    return { promise: n, resolve: t, reject: e };
  }
  var xt = 2;
  var la = 4;
  var ka = 8;
  var Ec = 1 << 24;
  var br = 16;
  var Mn = 32;
  var ki = 64;
  var Cc = 128;
  var mn = 512;
  var mt = 1024;
  var St = 2048;
  var Dn = 4096;
  var ln = 8192;
  var hr = 16384;
  var Ac = 32768;
  var vr = 65536;
  var Au = 1 << 17;
  var Sh = 1 << 18;
  var Co = 1 << 19;
  var dm = 1 << 20;
  var fr = 1 << 25;
  var xi = 32768;
  var El = 1 << 21;
  var Ic = 1 << 22;
  var Lr = 1 << 23;
  var Gn = Symbol("$state");
  var Eh = Symbol("legacy props");
  var hm = Symbol("");
  var qi = new class extends Error {
    constructor() {
      super(...arguments);
      Un(this, "name", "StaleReactionError");
      Un(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function $c(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function pm() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function gm(t, e, n) {
    throw new Error("https://svelte.dev/e/each_key_duplicate");
  }
  function mm(t) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function vm() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function ym(t) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function bm() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function _m(t) {
    throw new Error("https://svelte.dev/e/props_invalid_value");
  }
  function wm() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function xm() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Sm() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function Em() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  var Cm = 1;
  var Am = 2;
  var Ch = 4;
  var Im = 8;
  var $m = 16;
  var Tm = 1;
  var km = 2;
  var Rm = 4;
  var Om = 8;
  var Pm = 16;
  var Dm = 1;
  var Mm = 2;
  var dt = Symbol();
  var Lm = "http://www.w3.org/1999/xhtml";
  var Fm = "http://www.w3.org/2000/svg";
  var Nm = "@attach";
  function Um() {
    console.warn("https://svelte.dev/e/select_multiple_invalid_value");
  }
  function Bm() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function Ah(t) {
    return t === this.v;
  }
  function Tc(t, e) {
    return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
  }
  function Ih(t) {
    return !Tc(t, this.v);
  }
  var Ao = false;
  var jm = false;
  var Me = null;
  function co(t) {
    Me = t;
  }
  function Tt(t) {
    return $h().get(t);
  }
  function It(t, e) {
    return $h().set(t, e), e;
  }
  function Wr(t, e = false, n) {
    Me = { p: Me, i: false, c: null, e: null, s: t, x: null, l: Ao && !e ? { s: null, u: null, $: [] } : null };
  }
  function Vr(t) {
    var e = Me, n = e.e;
    if (n !== null) {
      e.e = null;
      for (var r of n) Xh(r);
    }
    return t !== void 0 && (e.x = t), e.i = true, Me = e.p, t ?? {};
  }
  function ds() {
    return !Ao || Me !== null && Me.l === null;
  }
  function $h(t) {
    return Me === null && $c(), Me.c ?? (Me.c = new Map(Hm(Me) || void 0));
  }
  function Hm(t) {
    let e = t.p;
    for (; e !== null; ) {
      const n = e.c;
      if (n !== null) return n;
      e = e.p;
    }
    return null;
  }
  var ii = [];
  function Th() {
    var t = ii;
    ii = [], fm(t);
  }
  function Xn(t) {
    if (ii.length === 0 && !qo) {
      var e = ii;
      queueMicrotask(() => {
        e === ii && Th();
      });
    }
    ii.push(t);
  }
  function zm() {
    for (; ii.length > 0; ) Th();
  }
  function kh(t) {
    var e = $e;
    if (e === null) return _e.f |= Lr, t;
    if ((e.f & Ac) === 0) {
      if ((e.f & Cc) === 0) throw t;
      e.b.error(t);
    } else uo(t, e);
  }
  function uo(t, e) {
    for (; e !== null; ) {
      if ((e.f & Cc) !== 0) try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
      e = e.parent;
    }
    throw t;
  }
  var Wm = -7169;
  function Qe(t, e) {
    t.f = t.f & Wm | e;
  }
  function kc(t) {
    (t.f & mn) !== 0 || t.deps === null ? Qe(t, mt) : Qe(t, Dn);
  }
  function Rh(t) {
    if (t !== null) for (const e of t) (e.f & xt) === 0 || (e.f & xi) === 0 || (e.f ^= xi, Rh(e.deps));
  }
  function Oh(t, e, n) {
    (t.f & St) !== 0 ? e.add(t) : (t.f & Dn) !== 0 && n.add(t), Rh(t.deps), Qe(t, mt);
  }
  var Rs = /* @__PURE__ */ new Set();
  var Ue = null;
  var Iu = null;
  var kn = null;
  var Wt = [];
  var Ra = null;
  var Cl = false;
  var qo = false;
  var to;
  var no;
  var li;
  var ro;
  var ls;
  var cs;
  var ci;
  var lr;
  var io;
  var Qn;
  var Al;
  var Il;
  var Ph;
  var yu = class yu2 {
    constructor() {
      pe(this, Qn);
      Un(this, "committed", false);
      Un(this, "current", /* @__PURE__ */ new Map());
      Un(this, "previous", /* @__PURE__ */ new Map());
      pe(this, to, /* @__PURE__ */ new Set());
      pe(this, no, /* @__PURE__ */ new Set());
      pe(this, li, 0);
      pe(this, ro, 0);
      pe(this, ls, null);
      pe(this, cs, /* @__PURE__ */ new Set());
      pe(this, ci, /* @__PURE__ */ new Set());
      pe(this, lr, /* @__PURE__ */ new Map());
      Un(this, "is_fork", false);
      pe(this, io, false);
    }
    is_deferred() {
      return this.is_fork || $2(this, ro) > 0;
    }
    skip_effect(e) {
      $2(this, lr).has(e) || $2(this, lr).set(e, { d: [], m: [] });
    }
    unskip_effect(e) {
      var n = $2(this, lr).get(e);
      if (n) {
        $2(this, lr).delete(e);
        for (var r of n.d) Qe(r, St), Rn(r);
        for (r of n.m) Qe(r, Dn), Rn(r);
      }
    }
    process(e) {
      Wt = [], this.apply();
      var n = [], r = [];
      for (const i of e) Ct(this, Qn, Al).call(this, i, n, r);
      if (this.is_deferred()) {
        Ct(this, Qn, Il).call(this, r), Ct(this, Qn, Il).call(this, n);
        for (const [i, o] of $2(this, lr)) Fh(i, o);
      } else {
        for (const i of $2(this, to)) i();
        $2(this, to).clear(), $2(this, li) === 0 && Ct(this, Qn, Ph).call(this), Iu = this, Ue = null, $u(r), $u(n), Iu = null, $2(this, ls)?.resolve();
      }
      kn = null;
    }
    capture(e, n) {
      n !== dt && !this.previous.has(e) && this.previous.set(e, n), (e.f & Lr) === 0 && (this.current.set(e, e.v), kn?.set(e, e.v));
    }
    activate() {
      Ue = this, this.apply();
    }
    deactivate() {
      Ue === this && (Ue = null, kn = null);
    }
    flush() {
      if (this.activate(), Wt.length > 0) {
        if (Dh(), Ue !== null && Ue !== this) return;
      } else $2(this, li) === 0 && this.process([]);
      this.deactivate();
    }
    discard() {
      for (const e of $2(this, no)) e(this);
      $2(this, no).clear();
    }
    increment(e) {
      fe(this, li, $2(this, li) + 1), e && fe(this, ro, $2(this, ro) + 1);
    }
    decrement(e) {
      fe(this, li, $2(this, li) - 1), e && fe(this, ro, $2(this, ro) - 1), !$2(this, io) && (fe(this, io, true), Xn(() => {
        fe(this, io, false), this.is_deferred() ? Wt.length > 0 && this.flush() : this.revive();
      }));
    }
    revive() {
      for (const e of $2(this, cs)) $2(this, ci).delete(e), Qe(e, St), Rn(e);
      for (const e of $2(this, ci)) Qe(e, Dn), Rn(e);
      this.flush();
    }
    oncommit(e) {
      $2(this, to).add(e);
    }
    ondiscard(e) {
      $2(this, no).add(e);
    }
    settled() {
      return ($2(this, ls) ?? fe(this, ls, xh())).promise;
    }
    static ensure() {
      if (Ue === null) {
        const e = Ue = new yu2();
        Rs.add(Ue), qo || Xn(() => {
          Ue === e && e.flush();
        });
      }
      return Ue;
    }
    apply() {
    }
  };
  to = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakSet(), Al = function(e, n, r) {
    e.f ^= mt;
    for (var i = e.first, o = null; i !== null; ) {
      var s = i.f, a2 = (s & (Mn | ki)) !== 0, c = a2 && (s & mt) !== 0, l = c || (s & ln) !== 0 || $2(this, lr).has(i);
      if (!l && i.fn !== null) {
        a2 ? i.f ^= mt : o !== null && (s & (la | ka | Ec)) !== 0 ? o.b.defer_effect(i) : (s & la) !== 0 ? n.push(i) : ms(i) && ((s & br) !== 0 && $2(this, ci).add(i), Jo(i));
        var u2 = i.first;
        if (u2 !== null) {
          i = u2;
          continue;
        }
      }
      var f = i.parent;
      for (i = i.next; i === null && f !== null; ) f === o && (o = null), i = f.next, f = f.parent;
    }
  }, Il = function(e) {
    for (var n = 0; n < e.length; n += 1) Oh(e[n], $2(this, cs), $2(this, ci));
  }, Ph = function() {
    var i;
    if (Rs.size > 1) {
      this.previous.clear();
      var e = kn, n = true;
      for (const o of Rs) {
        if (o === this) {
          n = false;
          continue;
        }
        const s = [];
        for (const [c, l] of this.current) {
          if (o.current.has(c)) if (n && l !== o.current.get(c)) o.current.set(c, l);
          else continue;
          s.push(c);
        }
        if (s.length === 0) continue;
        const a2 = [...o.current.keys()].filter((c) => !this.current.has(c));
        if (a2.length > 0) {
          var r = Wt;
          Wt = [];
          const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const u2 of s) Mh(u2, a2, c, l);
          if (Wt.length > 0) {
            Ue = o, o.apply();
            for (const u2 of Wt) Ct(i = o, Qn, Al).call(i, u2, [], []);
            o.deactivate();
          }
          Wt = r;
        }
      }
      Ue = null, kn = e;
    }
    this.committed = true, Rs.delete(this);
  };
  var Fr = yu;
  function Vm(t) {
    var e = qo;
    qo = true;
    try {
      for (var n; ; ) {
        if (zm(), Wt.length === 0 && (Ue?.flush(), Wt.length === 0)) return Ra = null, n;
        Dh();
      }
    } finally {
      qo = e;
    }
  }
  function Dh() {
    Cl = true;
    var t = null;
    try {
      for (var e = 0; Wt.length > 0; ) {
        var n = Fr.ensure();
        if (e++ > 1e3) {
          var r, i;
          qm();
        }
        n.process(Wt), Nr.clear();
      }
    } finally {
      Wt = [], Cl = false, Ra = null;
    }
  }
  function qm() {
    try {
      bm();
    } catch (t) {
      uo(t, Ra);
    }
  }
  var ar = null;
  function $u(t) {
    var e = t.length;
    if (e !== 0) {
      for (var n = 0; n < e; ) {
        var r = t[n++];
        if ((r.f & (hr | ln)) === 0 && ms(r) && (ar = /* @__PURE__ */ new Set(), Jo(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Qh(r) : r.fn = null), ar?.size > 0)) {
          Nr.clear();
          for (const i of ar) {
            if ((i.f & (hr | ln)) !== 0) continue;
            const o = [i];
            let s = i.parent;
            for (; s !== null; ) ar.has(s) && (ar.delete(s), o.push(s)), s = s.parent;
            for (let a2 = o.length - 1; a2 >= 0; a2--) {
              const c = o[a2];
              (c.f & (hr | ln)) === 0 && Jo(c);
            }
          }
          ar.clear();
        }
      }
      ar = null;
    }
  }
  function Mh(t, e, n, r) {
    if (!n.has(t) && (n.add(t), t.reactions !== null)) for (const i of t.reactions) {
      const o = i.f;
      (o & xt) !== 0 ? Mh(i, e, n, r) : (o & (Ic | br)) !== 0 && (o & St) === 0 && Lh(i, e, r) && (Qe(i, St), Rn(i));
    }
  }
  function Lh(t, e, n) {
    const r = n.get(t);
    if (r !== void 0) return r;
    if (t.deps !== null) for (const i of t.deps) {
      if (lo.call(e, i)) return true;
      if ((i.f & xt) !== 0 && Lh(i, e, n)) return n.set(i, true), true;
    }
    return n.set(t, false), false;
  }
  function Rn(t) {
    for (var e = Ra = t; e.parent !== null; ) {
      e = e.parent;
      var n = e.f;
      if (Cl && e === $e && (n & br) !== 0 && (n & Sh) === 0) return;
      if ((n & (ki | Mn)) !== 0) {
        if ((n & mt) === 0) return;
        e.f ^= mt;
      }
    }
    Wt.push(e);
  }
  function Fh(t, e) {
    if (!((t.f & Mn) !== 0 && (t.f & mt) !== 0)) {
      (t.f & St) !== 0 ? e.d.push(t) : (t.f & Dn) !== 0 && e.m.push(t), Qe(t, mt);
      for (var n = t.first; n !== null; ) Fh(n, e), n = n.next;
    }
  }
  function Gm(t) {
    let e = 0, n = Si(0), r;
    return () => {
      Pc() && (F2(n), Dc(() => (e === 0 && (r = Ri(() => t(() => Go(n)))), e += 1, () => {
        Xn(() => {
          e -= 1, e === 0 && (r?.(), r = void 0, Go(n));
        });
      })));
    };
  }
  var Xm = vr | Co | Cc;
  function Km(t, e, n) {
    new Jm(t, e, n);
  }
  var hn;
  var _c;
  var zn;
  var ui;
  var Wn;
  var pn;
  var zt;
  var Vn;
  var cr;
  var Or;
  var fi;
  var Pr;
  var oo;
  var di;
  var so;
  var ao;
  var ur;
  var Ia;
  var yt;
  var Ym;
  var Qm;
  var $l;
  var qs;
  var Gs;
  var Tl;
  var Jm = class {
    constructor(e, n, r) {
      pe(this, yt);
      Un(this, "parent");
      Un(this, "is_pending", false);
      pe(this, hn);
      pe(this, _c, null);
      pe(this, zn);
      pe(this, ui);
      pe(this, Wn);
      pe(this, pn, null);
      pe(this, zt, null);
      pe(this, Vn, null);
      pe(this, cr, null);
      pe(this, Or, null);
      pe(this, fi, 0);
      pe(this, Pr, 0);
      pe(this, oo, false);
      pe(this, di, false);
      pe(this, so, /* @__PURE__ */ new Set());
      pe(this, ao, /* @__PURE__ */ new Set());
      pe(this, ur, null);
      pe(this, Ia, Gm(() => (fe(this, ur, Si($2(this, fi))), () => {
        fe(this, ur, null);
      })));
      fe(this, hn, e), fe(this, zn, n), fe(this, ui, r), this.parent = $e.b, this.is_pending = !!$2(this, zn).pending, fe(this, Wn, Io(() => {
        $e.b = this;
        {
          var i = Ct(this, yt, $l).call(this);
          try {
            fe(this, pn, qt(() => r(i)));
          } catch (o) {
            this.error(o);
          }
          $2(this, Pr) > 0 ? Ct(this, yt, Gs).call(this) : this.is_pending = false;
        }
        return () => {
          $2(this, Or)?.remove();
        };
      }, Xm));
    }
    defer_effect(e) {
      Oh(e, $2(this, so), $2(this, ao));
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!$2(this, zn).pending;
    }
    update_pending_count(e) {
      Ct(this, yt, Tl).call(this, e), fe(this, fi, $2(this, fi) + e), !(!$2(this, ur) || $2(this, oo)) && (fe(this, oo, true), Xn(() => {
        fe(this, oo, false), $2(this, ur) && fo($2(this, ur), $2(this, fi));
      }));
    }
    get_effect_pending() {
      return $2(this, Ia).call(this), F2($2(this, ur));
    }
    error(e) {
      var n = $2(this, zn).onerror;
      let r = $2(this, zn).failed;
      if ($2(this, di) || !n && !r) throw e;
      $2(this, pn) && (wt($2(this, pn)), fe(this, pn, null)), $2(this, zt) && (wt($2(this, zt)), fe(this, zt, null)), $2(this, Vn) && (wt($2(this, Vn)), fe(this, Vn, null));
      var i = false, o = false;
      const s = () => {
        if (i) {
          Bm();
          return;
        }
        i = true, o && Em(), Fr.ensure(), fe(this, fi, 0), $2(this, Vn) !== null && gi($2(this, Vn), () => {
          fe(this, Vn, null);
        }), this.is_pending = this.has_pending_snippet(), fe(this, pn, Ct(this, yt, qs).call(this, () => (fe(this, di, false), qt(() => $2(this, ui).call(this, $2(this, hn)))))), $2(this, Pr) > 0 ? Ct(this, yt, Gs).call(this) : this.is_pending = false;
      };
      Xn(() => {
        try {
          o = true, n?.(e, s), o = false;
        } catch (a2) {
          uo(a2, $2(this, Wn) && $2(this, Wn).parent);
        }
        r && fe(this, Vn, Ct(this, yt, qs).call(this, () => {
          Fr.ensure(), fe(this, di, true);
          try {
            return qt(() => {
              r($2(this, hn), () => e, () => s);
            });
          } catch (a2) {
            return uo(a2, $2(this, Wn).parent), null;
          } finally {
            fe(this, di, false);
          }
        }));
      });
    }
  };
  hn = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakSet(), Ym = function() {
    try {
      fe(this, pn, qt(() => $2(this, ui).call(this, $2(this, hn))));
    } catch (e) {
      this.error(e);
    }
  }, Qm = function() {
    const e = $2(this, zn).pending;
    e && (fe(this, zt, qt(() => e($2(this, hn)))), Xn(() => {
      var n = Ct(this, yt, $l).call(this);
      fe(this, pn, Ct(this, yt, qs).call(this, () => (Fr.ensure(), qt(() => $2(this, ui).call(this, n))))), $2(this, Pr) > 0 ? Ct(this, yt, Gs).call(this) : (gi($2(this, zt), () => {
        fe(this, zt, null);
      }), this.is_pending = false);
    }));
  }, $l = function() {
    var e = $2(this, hn);
    return this.is_pending && (fe(this, Or, Kn()), $2(this, hn).before($2(this, Or)), e = $2(this, Or)), e;
  }, qs = function(e) {
    var n = $e, r = _e, i = Me;
    Yn($2(this, Wn)), yn($2(this, Wn)), co($2(this, Wn).ctx);
    try {
      return e();
    } catch (o) {
      return kh(o), null;
    } finally {
      Yn(n), yn(r), co(i);
    }
  }, Gs = function() {
    const e = $2(this, zn).pending;
    $2(this, pn) !== null && (fe(this, cr, document.createDocumentFragment()), $2(this, cr).append($2(this, Or)), tp($2(this, pn), $2(this, cr))), $2(this, zt) === null && fe(this, zt, qt(() => e($2(this, hn))));
  }, Tl = function(e) {
    var n;
    if (!this.has_pending_snippet()) {
      this.parent && Ct(n = this.parent, yt, Tl).call(n, e);
      return;
    }
    if (fe(this, Pr, $2(this, Pr) + e), $2(this, Pr) === 0) {
      this.is_pending = false;
      for (const r of $2(this, so)) Qe(r, St), Rn(r);
      for (const r of $2(this, ao)) Qe(r, Dn), Rn(r);
      $2(this, so).clear(), $2(this, ao).clear(), $2(this, zt) && gi($2(this, zt), () => {
        fe(this, zt, null);
      }), $2(this, cr) && ($2(this, hn).before($2(this, cr)), fe(this, cr, null));
    }
  };
  function Nh(t, e, n, r) {
    const i = ds() ? Oa : Rc;
    var o = t.filter((d3) => !d3.settled);
    if (n.length === 0 && o.length === 0) {
      r(e.map(i));
      return;
    }
    var s = Ue, a2 = $e, c = Zm(), l = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((d3) => d3.promise)) : null;
    function u2(d3) {
      c();
      try {
        r(d3);
      } catch (h2) {
        (a2.f & hr) === 0 && uo(h2, a2);
      }
      s?.deactivate(), kl();
    }
    if (n.length === 0) {
      l.then(() => u2(e.map(i)));
      return;
    }
    function f() {
      c(), Promise.all(n.map((d3) => ev(d3))).then((d3) => u2([...e.map(i), ...d3])).catch((d3) => uo(d3, a2));
    }
    l ? l.then(f) : f();
  }
  function Zm() {
    var t = $e, e = _e, n = Me, r = Ue;
    return function(o = true) {
      Yn(t), yn(e), co(n), o && r?.activate();
    };
  }
  function kl() {
    Yn(null), yn(null), co(null);
  }
  function Oa(t) {
    var e = xt | St, n = _e !== null && (_e.f & xt) !== 0 ? _e : null;
    return $e !== null && ($e.f |= Co), { ctx: Me, deps: null, effects: null, equals: Ah, f: e, fn: t, reactions: null, rv: 0, v: dt, wv: 0, parent: n ?? $e, ac: null };
  }
  function ev(t, e, n) {
    let r = $e;
    r === null && pm();
    var i = r.b, o = void 0, s = Si(dt), a2 = !_e, c = /* @__PURE__ */ new Map();
    return hv(() => {
      var l = xh();
      o = l.promise;
      try {
        Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
          u2 === Ue && u2.committed && u2.deactivate(), kl();
        });
      } catch (h2) {
        l.reject(h2), kl();
      }
      var u2 = Ue;
      if (a2) {
        var f = i.is_rendered();
        i.update_pending_count(1), u2.increment(f), c.get(u2)?.reject(qi), c.delete(u2), c.set(u2, l);
      }
      const d3 = (h2, p = void 0) => {
        if (u2.activate(), p) p !== qi && (s.f |= Lr, fo(s, p));
        else {
          (s.f & Lr) !== 0 && (s.f ^= Lr), fo(s, h2);
          for (const [g3, m2] of c) {
            if (c.delete(g3), g3 === u2) break;
            m2.reject(qi);
          }
        }
        a2 && (i.update_pending_count(-1), u2.decrement(f));
      };
      l.promise.then(d3, (h2) => d3(null, h2 || "unknown"));
    }), ps(() => {
      for (const l of c.values()) l.reject(qi);
    }), new Promise((l) => {
      function u2(f) {
        function d3() {
          f === o ? l(s) : u2(o);
        }
        f.then(d3, d3);
      }
      u2(o);
    });
  }
  function Gt(t) {
    const e = Oa(t);
    return np(e), e;
  }
  function Rc(t) {
    const e = Oa(t);
    return e.equals = Ih, e;
  }
  function Uh(t) {
    var e = t.effects;
    if (e !== null) {
      t.effects = null;
      for (var n = 0; n < e.length; n += 1) wt(e[n]);
    }
  }
  function tv(t) {
    for (var e = t.parent; e !== null; ) {
      if ((e.f & xt) === 0) return (e.f & hr) === 0 ? e : null;
      e = e.parent;
    }
    return null;
  }
  function Oc(t) {
    var e, n = $e;
    Yn(tv(t));
    try {
      t.f &= ~xi, Uh(t), e = sp(t);
    } finally {
      Yn(n);
    }
    return e;
  }
  function Bh(t) {
    var e = Oc(t);
    if (!t.equals(e) && (t.wv = ip(), (!Ue?.is_fork || t.deps === null) && (t.v = e, t.deps === null))) {
      Qe(t, mt);
      return;
    }
    Br || (kn !== null ? (Pc() || Ue?.is_fork) && kn.set(t, e) : kc(t));
  }
  var Rl = /* @__PURE__ */ new Set();
  var Nr = /* @__PURE__ */ new Map();
  var jh = false;
  function Si(t, e) {
    var n = { f: 0, v: t, reactions: null, equals: Ah, rv: 0, wv: 0 };
    return n;
  }
  function on(t, e) {
    const n = Si(t);
    return np(n), n;
  }
  function Hh(t, e = false, n = true) {
    var i;
    const r = Si(t);
    return e || (r.equals = Ih), Ao && n && Me !== null && Me.l !== null && ((i = Me.l).s ?? (i.s = [])).push(r), r;
  }
  function Mt(t, e, n = false) {
    _e !== null && (!On || (_e.f & Au) !== 0) && ds() && (_e.f & (xt | br | Ic | Au)) !== 0 && (vn === null || !lo.call(vn, t)) && Sm();
    let r = n ? Jt(e) : e;
    return fo(t, r);
  }
  function fo(t, e) {
    if (!t.equals(e)) {
      var n = t.v;
      Br ? Nr.set(t, e) : Nr.set(t, n), t.v = e;
      var r = Fr.ensure();
      if (r.capture(t, n), (t.f & xt) !== 0) {
        const i = t;
        (t.f & St) !== 0 && Oc(i), kc(i);
      }
      t.wv = ip(), zh(t, St), ds() && $e !== null && ($e.f & mt) !== 0 && ($e.f & (Mn | ki)) === 0 && (dn === null ? mv([t]) : dn.push(t)), !r.is_fork && Rl.size > 0 && !jh && nv();
    }
    return e;
  }
  function nv() {
    jh = false;
    for (const t of Rl) (t.f & mt) !== 0 && Qe(t, Dn), ms(t) && Jo(t);
    Rl.clear();
  }
  function Go(t) {
    Mt(t, t.v + 1);
  }
  function zh(t, e) {
    var n = t.reactions;
    if (n !== null) for (var r = ds(), i = n.length, o = 0; o < i; o++) {
      var s = n[o], a2 = s.f;
      if (!(!r && s === $e)) {
        var c = (a2 & St) === 0;
        if (c && Qe(s, e), (a2 & xt) !== 0) {
          var l = s;
          kn?.delete(l), (a2 & xi) === 0 && (a2 & mn && (s.f |= xi), zh(l, Dn));
        } else c && ((a2 & br) !== 0 && ar !== null && ar.add(s), Rn(s));
      }
    }
  }
  function Jt(t) {
    if (typeof t != "object" || t === null || Gn in t) return t;
    const e = Sc(t);
    if (e !== cm && e !== um) return t;
    var n = /* @__PURE__ */ new Map(), r = xc(t), i = on(0), o = mi, s = (a2) => {
      if (mi === o) return a2();
      var c = _e, l = mi;
      yn(null), Pu(o);
      var u2 = a2();
      return yn(c), Pu(l), u2;
    };
    return r && n.set("length", on(t.length)), new Proxy(t, { defineProperty(a2, c, l) {
      (!("value" in l) || l.configurable === false || l.enumerable === false || l.writable === false) && wm();
      var u2 = n.get(c);
      return u2 === void 0 ? u2 = s(() => {
        var f = on(l.value);
        return n.set(c, f), f;
      }) : Mt(u2, l.value, true), true;
    }, deleteProperty(a2, c) {
      var l = n.get(c);
      if (l === void 0) {
        if (c in a2) {
          const u2 = s(() => on(dt));
          n.set(c, u2), Go(i);
        }
      } else Mt(l, dt), Go(i);
      return true;
    }, get(a2, c, l) {
      if (c === Gn) return t;
      var u2 = n.get(c), f = c in a2;
      if (u2 === void 0 && (!f || Mr(a2, c)?.writable) && (u2 = s(() => {
        var h2 = Jt(f ? a2[c] : dt), p = on(h2);
        return p;
      }), n.set(c, u2)), u2 !== void 0) {
        var d3 = F2(u2);
        return d3 === dt ? void 0 : d3;
      }
      return Reflect.get(a2, c, l);
    }, getOwnPropertyDescriptor(a2, c) {
      var l = Reflect.getOwnPropertyDescriptor(a2, c);
      if (l && "value" in l) {
        var u2 = n.get(c);
        u2 && (l.value = F2(u2));
      } else if (l === void 0) {
        var f = n.get(c), d3 = f?.v;
        if (f !== void 0 && d3 !== dt) return { enumerable: true, configurable: true, value: d3, writable: true };
      }
      return l;
    }, has(a2, c) {
      if (c === Gn) return true;
      var l = n.get(c), u2 = l !== void 0 && l.v !== dt || Reflect.has(a2, c);
      if (l !== void 0 || $e !== null && (!u2 || Mr(a2, c)?.writable)) {
        l === void 0 && (l = s(() => {
          var d3 = u2 ? Jt(a2[c]) : dt, h2 = on(d3);
          return h2;
        }), n.set(c, l));
        var f = F2(l);
        if (f === dt) return false;
      }
      return u2;
    }, set(a2, c, l, u2) {
      var f = n.get(c), d3 = c in a2;
      if (r && c === "length") for (var h2 = l; h2 < f.v; h2 += 1) {
        var p = n.get(h2 + "");
        p !== void 0 ? Mt(p, dt) : h2 in a2 && (p = s(() => on(dt)), n.set(h2 + "", p));
      }
      if (f === void 0) (!d3 || Mr(a2, c)?.writable) && (f = s(() => on(void 0)), Mt(f, Jt(l)), n.set(c, f));
      else {
        d3 = f.v !== dt;
        var g3 = s(() => Jt(l));
        Mt(f, g3);
      }
      var m2 = Reflect.getOwnPropertyDescriptor(a2, c);
      if (m2?.set && m2.set.call(u2, l), !d3) {
        if (r && typeof c == "string") {
          var w4 = n.get("length"), v2 = Number(c);
          Number.isInteger(v2) && v2 >= w4.v && Mt(w4, v2 + 1);
        }
        Go(i);
      }
      return true;
    }, ownKeys(a2) {
      F2(i);
      var c = Reflect.ownKeys(a2).filter((f) => {
        var d3 = n.get(f);
        return d3 === void 0 || d3.v !== dt;
      });
      for (var [l, u2] of n) u2.v !== dt && !(l in a2) && c.push(l);
      return c;
    }, setPrototypeOf() {
      xm();
    } });
  }
  function Tu(t) {
    try {
      if (t !== null && typeof t == "object" && Gn in t) return t[Gn];
    } catch {
    }
    return t;
  }
  function rv(t, e) {
    return Object.is(Tu(t), Tu(e));
  }
  var ku;
  var iv;
  var Wh;
  var Vh;
  var qh;
  function ov() {
    if (ku === void 0) {
      ku = window, iv = document, Wh = /Firefox/.test(navigator.userAgent);
      var t = Element.prototype, e = Node.prototype, n = Text.prototype;
      Vh = Mr(e, "firstChild").get, qh = Mr(e, "nextSibling").get, Cu(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Cu(n) && (n.__t = void 0);
    }
  }
  function Kn(t = "") {
    return document.createTextNode(t);
  }
  function ho(t) {
    return Vh.call(t);
  }
  function hs(t) {
    return qh.call(t);
  }
  function sv(t, e) {
    return ho(t);
  }
  function Xt(t, e = false) {
    {
      var n = ho(t);
      return n instanceof Comment && n.data === "" ? hs(n) : n;
    }
  }
  function Ol(t, e = 1, n = false) {
    let r = t;
    for (; e--; ) r = hs(r);
    return r;
  }
  function av(t) {
    t.textContent = "";
  }
  function Gh() {
    return false;
  }
  function lv(t, e) {
    if (e) {
      const n = document.body;
      t.autofocus = true, Xn(() => {
        document.activeElement === n && t.focus();
      });
    }
  }
  var Ru = false;
  function cv() {
    Ru || (Ru = true, document.addEventListener("reset", (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented) for (const e of t.target.elements) e.__on_r?.();
      });
    }, { capture: true }));
  }
  function Pa(t) {
    var e = _e, n = $e;
    yn(null), Yn(null);
    try {
      return t();
    } finally {
      yn(e), Yn(n);
    }
  }
  function jE(t, e, n, r = n) {
    t.addEventListener(e, () => Pa(n));
    const i = t.__on_r;
    i ? t.__on_r = () => {
      i(), r(true);
    } : t.__on_r = () => r(true), cv();
  }
  function uv(t) {
    $e === null && (_e === null && ym(), vm()), Br && mm();
  }
  function fv(t, e) {
    var n = e.last;
    n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
  }
  function Zn(t, e, n) {
    var r = $e;
    r !== null && (r.f & ln) !== 0 && (t |= ln);
    var i = { ctx: Me, deps: null, nodes: null, f: t | St | mn, first: null, fn: e, last: null, next: null, parent: r, b: r && r.b, prev: null, teardown: null, wv: 0, ac: null };
    if (n) try {
      Jo(i), i.f |= Ac;
    } catch (a2) {
      throw wt(i), a2;
    }
    else e !== null && Rn(i);
    var o = i;
    if (n && o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && (o.f & Co) === 0 && (o = o.first, (t & br) !== 0 && (t & vr) !== 0 && o !== null && (o.f |= vr)), o !== null && (o.parent = r, r !== null && fv(o, r), _e !== null && (_e.f & xt) !== 0 && (t & ki) === 0)) {
      var s = _e;
      (s.effects ?? (s.effects = [])).push(o);
    }
    return i;
  }
  function Pc() {
    return _e !== null && !On;
  }
  function ps(t) {
    const e = Zn(ka, null, false);
    return Qe(e, mt), e.teardown = t, e;
  }
  function Tn(t) {
    uv();
    var e = $e.f, n = !_e && (e & Mn) !== 0 && (e & Ac) === 0;
    if (n) {
      var r = Me;
      (r.e ?? (r.e = [])).push(t);
    } else return Xh(t);
  }
  function Xh(t) {
    return Zn(la | dm, t, false);
  }
  function dv(t) {
    Fr.ensure();
    const e = Zn(ki | Co, t, true);
    return (n = {}) => new Promise((r) => {
      n.outro ? gi(e, () => {
        wt(e), r(void 0);
      }) : (wt(e), r(void 0));
    });
  }
  function gs(t) {
    return Zn(la, t, false);
  }
  function hv(t) {
    return Zn(Ic | Co, t, true);
  }
  function Dc(t, e = 0) {
    return Zn(ka | e, t, true);
  }
  function HE(t, e = [], n = [], r = []) {
    Nh(r, e, n, (i) => {
      Zn(ka, () => t(...i.map(F2)), true);
    });
  }
  function Io(t, e = 0) {
    var n = Zn(br | e, t, true);
    return n;
  }
  function Kh(t, e = 0) {
    var n = Zn(Ec | e, t, true);
    return n;
  }
  function qt(t) {
    return Zn(Mn | Co, t, true);
  }
  function Jh(t) {
    var e = t.teardown;
    if (e !== null) {
      const n = Br, r = _e;
      Ou(true), yn(null);
      try {
        e.call(null);
      } finally {
        Ou(n), yn(r);
      }
    }
  }
  function Yh(t, e = false) {
    var n = t.first;
    for (t.first = t.last = null; n !== null; ) {
      const i = n.ac;
      i !== null && Pa(() => {
        i.abort(qi);
      });
      var r = n.next;
      (n.f & ki) !== 0 ? n.parent = null : wt(n, e), n = r;
    }
  }
  function pv(t) {
    for (var e = t.first; e !== null; ) {
      var n = e.next;
      (e.f & Mn) === 0 && wt(e), e = n;
    }
  }
  function wt(t, e = true) {
    var n = false;
    (e || (t.f & Sh) !== 0) && t.nodes !== null && t.nodes.end !== null && (gv(t.nodes.start, t.nodes.end), n = true), Yh(t, e && !n), ca(t, 0), Qe(t, hr);
    var r = t.nodes && t.nodes.t;
    if (r !== null) for (const o of r) o.stop();
    Jh(t);
    var i = t.parent;
    i !== null && i.first !== null && Qh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
  }
  function gv(t, e) {
    for (; t !== null; ) {
      var n = t === e ? null : hs(t);
      t.remove(), t = n;
    }
  }
  function Qh(t) {
    var e = t.parent, n = t.prev, r = t.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
  }
  function gi(t, e, n = true) {
    var r = [];
    Zh(t, r, true);
    var i = () => {
      n && wt(t), e && e();
    }, o = r.length;
    if (o > 0) {
      var s = () => --o || i();
      for (var a2 of r) a2.out(s);
    } else i();
  }
  function Zh(t, e, n) {
    if ((t.f & ln) === 0) {
      t.f ^= ln;
      var r = t.nodes && t.nodes.t;
      if (r !== null) for (const a2 of r) (a2.is_global || n) && e.push(a2);
      for (var i = t.first; i !== null; ) {
        var o = i.next, s = (i.f & vr) !== 0 || (i.f & Mn) !== 0 && (t.f & br) !== 0;
        Zh(i, e, s ? n : false), i = o;
      }
    }
  }
  function Mc(t) {
    ep(t, true);
  }
  function ep(t, e) {
    if ((t.f & ln) !== 0) {
      t.f ^= ln, (t.f & mt) === 0 && (Qe(t, St), Rn(t));
      for (var n = t.first; n !== null; ) {
        var r = n.next, i = (n.f & vr) !== 0 || (n.f & Mn) !== 0;
        ep(n, i ? e : false), n = r;
      }
      var o = t.nodes && t.nodes.t;
      if (o !== null) for (const s of o) (s.is_global || e) && s.in();
    }
  }
  function tp(t, e) {
    if (t.nodes) for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : hs(n);
      e.append(n), n = i;
    }
  }
  var Xs = false;
  var Br = false;
  function Ou(t) {
    Br = t;
  }
  var _e = null;
  var On = false;
  function yn(t) {
    _e = t;
  }
  var $e = null;
  function Yn(t) {
    $e = t;
  }
  var vn = null;
  function np(t) {
    _e !== null && (vn === null ? vn = [t] : vn.push(t));
  }
  var Vt = null;
  var nn = 0;
  var dn = null;
  function mv(t) {
    dn = t;
  }
  var rp = 1;
  var oi = 0;
  var mi = oi;
  function Pu(t) {
    mi = t;
  }
  function ip() {
    return ++rp;
  }
  function ms(t) {
    var e = t.f;
    if ((e & St) !== 0) return true;
    if (e & xt && (t.f &= ~xi), (e & Dn) !== 0) {
      for (var n = t.deps, r = n.length, i = 0; i < r; i++) {
        var o = n[i];
        if (ms(o) && Bh(o), o.wv > t.wv) return true;
      }
      (e & mn) !== 0 && kn === null && Qe(t, mt);
    }
    return false;
  }
  function op(t, e, n = true) {
    var r = t.reactions;
    if (r !== null && !(vn !== null && lo.call(vn, t))) for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & xt) !== 0 ? op(o, e, false) : e === o && (n ? Qe(o, St) : (o.f & mt) !== 0 && Qe(o, Dn), Rn(o));
    }
  }
  function sp(t) {
    var g3;
    var e = Vt, n = nn, r = dn, i = _e, o = vn, s = Me, a2 = On, c = mi, l = t.f;
    Vt = null, nn = 0, dn = null, _e = (l & (Mn | ki)) === 0 ? t : null, vn = null, co(t.ctx), On = false, mi = ++oi, t.ac !== null && (Pa(() => {
      t.ac.abort(qi);
    }), t.ac = null);
    try {
      t.f |= El;
      var u2 = t.fn, f = u2(), d3 = t.deps, h2 = Ue?.is_fork;
      if (Vt !== null) {
        var p;
        if (h2 || ca(t, nn), d3 !== null && nn > 0) for (d3.length = nn + Vt.length, p = 0; p < Vt.length; p++) d3[nn + p] = Vt[p];
        else t.deps = d3 = Vt;
        if (Pc() && (t.f & mn) !== 0) for (p = nn; p < d3.length; p++) ((g3 = d3[p]).reactions ?? (g3.reactions = [])).push(t);
      } else !h2 && d3 !== null && nn < d3.length && (ca(t, nn), d3.length = nn);
      if (ds() && dn !== null && !On && d3 !== null && (t.f & (xt | Dn | St)) === 0) for (p = 0; p < dn.length; p++) op(dn[p], t);
      if (i !== null && i !== t) {
        if (oi++, i.deps !== null) for (let m2 = 0; m2 < n; m2 += 1) i.deps[m2].rv = oi;
        if (e !== null) for (const m2 of e) m2.rv = oi;
        dn !== null && (r === null ? r = dn : r.push(...dn));
      }
      return (t.f & Lr) !== 0 && (t.f ^= Lr), f;
    } catch (m2) {
      return kh(m2);
    } finally {
      t.f ^= El, Vt = e, nn = n, dn = r, _e = i, vn = o, co(s), On = a2, mi = c;
    }
  }
  function vv(t, e) {
    let n = e.reactions;
    if (n !== null) {
      var r = lm.call(n, t);
      if (r !== -1) {
        var i = n.length - 1;
        i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
      }
    }
    if (n === null && (e.f & xt) !== 0 && (Vt === null || !lo.call(Vt, e))) {
      var o = e;
      (o.f & mn) !== 0 && (o.f ^= mn, o.f &= ~xi), kc(o), Uh(o), ca(o, 0);
    }
  }
  function ca(t, e) {
    var n = t.deps;
    if (n !== null) for (var r = e; r < n.length; r++) vv(t, n[r]);
  }
  function Jo(t) {
    var e = t.f;
    if ((e & hr) === 0) {
      Qe(t, mt);
      var n = $e, r = Xs;
      $e = t, Xs = true;
      try {
        (e & (br | Ec)) !== 0 ? pv(t) : Yh(t), Jh(t);
        var i = sp(t);
        t.teardown = typeof i == "function" ? i : null, t.wv = rp;
        var o;
        Sl && jm && (t.f & St) !== 0 && t.deps;
      } finally {
        Xs = r, $e = n;
      }
    }
  }
  async function zE() {
    await Promise.resolve(), Vm();
  }
  function F2(t) {
    var e = t.f, n = (e & xt) !== 0;
    if (_e !== null && !On) {
      var r = $e !== null && ($e.f & hr) !== 0;
      if (!r && (vn === null || !lo.call(vn, t))) {
        var i = _e.deps;
        if ((_e.f & El) !== 0) t.rv < oi && (t.rv = oi, Vt === null && i !== null && i[nn] === t ? nn++ : Vt === null ? Vt = [t] : Vt.push(t));
        else {
          (_e.deps ?? (_e.deps = [])).push(t);
          var o = t.reactions;
          o === null ? t.reactions = [_e] : lo.call(o, _e) || o.push(_e);
        }
      }
    }
    if (Br && Nr.has(t)) return Nr.get(t);
    if (n) {
      var s = t;
      if (Br) {
        var a2 = s.v;
        return ((s.f & mt) === 0 && s.reactions !== null || lp(s)) && (a2 = Oc(s)), Nr.set(s, a2), a2;
      }
      var c = (s.f & mn) === 0 && !On && _e !== null && (Xs || (_e.f & mn) !== 0), l = s.deps === null;
      ms(s) && (c && (s.f |= mn), Bh(s)), c && !l && ap(s);
    }
    if (kn?.has(t)) return kn.get(t);
    if ((t.f & Lr) !== 0) throw t.v;
    return t.v;
  }
  function ap(t) {
    if (t.deps !== null) {
      t.f |= mn;
      for (const e of t.deps) (e.reactions ?? (e.reactions = [])).push(t), (e.f & xt) !== 0 && (e.f & mn) === 0 && ap(e);
    }
  }
  function lp(t) {
    if (t.v === dt) return true;
    if (t.deps === null) return false;
    for (const e of t.deps) if (Nr.has(e) || (e.f & xt) !== 0 && lp(e)) return true;
    return false;
  }
  function Ri(t) {
    var e = On;
    try {
      return On = true, t();
    } finally {
      On = e;
    }
  }
  function yv(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
      if (Gn in t) Pl(t);
      else if (!Array.isArray(t)) for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Gn in n && Pl(n);
      }
    }
  }
  function Pl(t, e = /* @__PURE__ */ new Set()) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
      e.add(t), t instanceof Date && t.getTime();
      for (let r in t) try {
        Pl(t[r], e);
      } catch {
      }
      const n = Sc(t);
      if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
        const r = wh(n);
        for (let i in r) {
          const o = r[i].get;
          if (o) try {
            o.call(t);
          } catch {
          }
        }
      }
    }
  }
  function bv(t) {
    return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
  }
  var _v = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function wv(t) {
    return _v.includes(t);
  }
  var xv = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Sv(t) {
    return t = t.toLowerCase(), xv[t] ?? t;
  }
  var Ev = ["touchstart", "touchmove"];
  function Cv(t) {
    return Ev.includes(t);
  }
  var cp = /* @__PURE__ */ new Set();
  var Dl = /* @__PURE__ */ new Set();
  function Lc(t, e, n, r = {}) {
    function i(o) {
      if (r.capture || zo.call(e, o), !o.cancelBubble) return Pa(() => n?.call(this, o));
    }
    return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Xn(() => {
      e.addEventListener(t, i, r);
    }) : e.addEventListener(t, i, r), i;
  }
  function Av(t, e, n, r = {}) {
    var i = Lc(e, t, n, r);
    return () => {
      t.removeEventListener(e, i, r);
    };
  }
  function WE(t, e, n, r, i) {
    var o = { capture: r, passive: i }, s = Lc(t, e, n, o);
    (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && ps(() => {
      e.removeEventListener(t, s, o);
    });
  }
  function Iv(t) {
    for (var e = 0; e < t.length; e++) cp.add(t[e]);
    for (var n of Dl) n(t);
  }
  var Du = null;
  function zo(t) {
    var e = this, n = e.ownerDocument, r = t.type, i = t.composedPath?.() || [], o = i[0] || t.target;
    Du = t;
    var s = 0, a2 = Du === t && t.__root;
    if (a2) {
      var c = i.indexOf(a2);
      if (c !== -1 && (e === document || e === window)) {
        t.__root = e;
        return;
      }
      var l = i.indexOf(e);
      if (l === -1) return;
      c <= l && (s = c);
    }
    if (o = i[s] || t.target, o !== e) {
      _h(t, "currentTarget", { configurable: true, get() {
        return o || n;
      } });
      var u2 = _e, f = $e;
      yn(null), Yn(null);
      try {
        for (var d3, h2 = []; o !== null; ) {
          var p = o.assignedSlot || o.parentNode || o.host || null;
          try {
            var g3 = o["__" + r];
            g3 != null && (!o.disabled || t.target === o) && g3.call(o, t);
          } catch (m2) {
            d3 ? h2.push(m2) : d3 = m2;
          }
          if (t.cancelBubble || p === e || p === null) break;
          o = p;
        }
        if (d3) {
          for (let m2 of h2) queueMicrotask(() => {
            throw m2;
          });
          throw d3;
        }
      } finally {
        t.__root = e, delete t.currentTarget, yn(u2), Yn(f);
      }
    }
  }
  function up(t) {
    var e = document.createElement("template");
    return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
  }
  function po(t, e) {
    var n = $e;
    n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
  }
  function vs(t, e) {
    var n = (e & Dm) !== 0, r = (e & Mm) !== 0, i, o = !t.startsWith("<!>");
    return () => {
      i === void 0 && (i = up(o ? t : "<!>" + t), n || (i = ho(i)));
      var s = r || Wh ? document.importNode(i, true) : i.cloneNode(true);
      if (n) {
        var a2 = ho(s), c = s.lastChild;
        po(a2, c);
      } else po(s, s);
      return s;
    };
  }
  function $v(t, e, n = "svg") {
    var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, o;
    return () => {
      if (!o) {
        var s = up(i), a2 = ho(s);
        o = ho(a2);
      }
      var c = o.cloneNode(true);
      return po(c, c), c;
    };
  }
  function Tv(t, e) {
    return $v(t, e, "svg");
  }
  function VE(t = "") {
    {
      var e = Kn(t + "");
      return po(e, e), e;
    }
  }
  function gn() {
    var t = document.createDocumentFragment(), e = document.createComment(""), n = Kn();
    return t.append(e, n), po(e, n), t;
  }
  function ht(t, e) {
    t !== null && t.before(e);
  }
  function qE(t, e) {
    var n = e == null ? "" : typeof e == "object" ? e + "" : e;
    n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
  }
  function GE(t, e) {
    return kv(t, e);
  }
  var Li = /* @__PURE__ */ new Map();
  function kv(t, { target: e, anchor: n, props: r = {}, events: i, context: o, intro: s = true }) {
    ov();
    var a2 = /* @__PURE__ */ new Set(), c = (f) => {
      for (var d3 = 0; d3 < f.length; d3++) {
        var h2 = f[d3];
        if (!a2.has(h2)) {
          a2.add(h2);
          var p = Cv(h2);
          e.addEventListener(h2, zo, { passive: p });
          var g3 = Li.get(h2);
          g3 === void 0 ? (document.addEventListener(h2, zo, { passive: p }), Li.set(h2, 1)) : Li.set(h2, g3 + 1);
        }
      }
    };
    c(Ta(cp)), Dl.add(c);
    var l = void 0, u2 = dv(() => {
      var f = n ?? e.appendChild(Kn());
      return Km(f, { pending: () => {
      } }, (d3) => {
        Wr({});
        var h2 = Me;
        o && (h2.c = o), i && (r.$$events = i), l = t(d3, r) || {}, Vr();
      }), () => {
        for (var d3 of a2) {
          e.removeEventListener(d3, zo);
          var h2 = Li.get(d3);
          --h2 === 0 ? (document.removeEventListener(d3, zo), Li.delete(d3)) : Li.set(d3, h2);
        }
        Dl.delete(c), f !== n && f.parentNode?.removeChild(f);
      };
    });
    return Rv.set(l, u2), l;
  }
  var Rv = /* @__PURE__ */ new WeakMap();
  var $n;
  var qn;
  var rn;
  var hi;
  var us;
  var fs;
  var $a;
  var Da = class {
    constructor(e, n = true) {
      Un(this, "anchor");
      pe(this, $n, /* @__PURE__ */ new Map());
      pe(this, qn, /* @__PURE__ */ new Map());
      pe(this, rn, /* @__PURE__ */ new Map());
      pe(this, hi, /* @__PURE__ */ new Set());
      pe(this, us, true);
      pe(this, fs, () => {
        var e2 = Ue;
        if ($2(this, $n).has(e2)) {
          var n2 = $2(this, $n).get(e2), r = $2(this, qn).get(n2);
          if (r) Mc(r), $2(this, hi).delete(n2);
          else {
            var i = $2(this, rn).get(n2);
            i && ($2(this, qn).set(n2, i.effect), $2(this, rn).delete(n2), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
          }
          for (const [o, s] of $2(this, $n)) {
            if ($2(this, $n).delete(o), o === e2) break;
            const a2 = $2(this, rn).get(s);
            a2 && (wt(a2.effect), $2(this, rn).delete(s));
          }
          for (const [o, s] of $2(this, qn)) {
            if (o === n2 || $2(this, hi).has(o)) continue;
            const a2 = () => {
              if (Array.from($2(this, $n).values()).includes(o)) {
                var l = document.createDocumentFragment();
                tp(s, l), l.append(Kn()), $2(this, rn).set(o, { effect: s, fragment: l });
              } else wt(s);
              $2(this, hi).delete(o), $2(this, qn).delete(o);
            };
            $2(this, us) || !r ? ($2(this, hi).add(o), gi(s, a2, false)) : a2();
          }
        }
      });
      pe(this, $a, (e2) => {
        $2(this, $n).delete(e2);
        const n2 = Array.from($2(this, $n).values());
        for (const [r, i] of $2(this, rn)) n2.includes(r) || (wt(i.effect), $2(this, rn).delete(r));
      });
      this.anchor = e, fe(this, us, n);
    }
    ensure(e, n) {
      var r = Ue, i = Gh();
      if (n && !$2(this, qn).has(e) && !$2(this, rn).has(e)) if (i) {
        var o = document.createDocumentFragment(), s = Kn();
        o.append(s), $2(this, rn).set(e, { effect: qt(() => n(s)), fragment: o });
      } else $2(this, qn).set(e, qt(() => n(this.anchor)));
      if ($2(this, $n).set(r, e), i) {
        for (const [a2, c] of $2(this, qn)) a2 === e ? r.unskip_effect(c) : r.skip_effect(c);
        for (const [a2, c] of $2(this, rn)) a2 === e ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
        r.oncommit($2(this, fs)), r.ondiscard($2(this, $a));
      } else $2(this, fs).call(this);
    }
  };
  $n = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap();
  function ua(t, e, n = false) {
    var r = new Da(t), i = n ? vr : 0;
    function o(s, a2) {
      r.ensure(s, a2);
    }
    Io(() => {
      var s = false;
      e((a2, c = true) => {
        s = true, o(c, a2);
      }), s || o(false, null);
    }, i);
  }
  function XE(t, e) {
    return e;
  }
  function Ov(t, e, n) {
    for (var r = [], i = e.length, o, s = e.length, a2 = 0; a2 < i; a2++) {
      let f = e[a2];
      gi(f, () => {
        if (o) {
          if (o.pending.delete(f), o.done.add(f), o.pending.size === 0) {
            var d3 = t.outrogroups;
            Ml(Ta(o.done)), d3.delete(o), d3.size === 0 && (t.outrogroups = null);
          }
        } else s -= 1;
      }, false);
    }
    if (s === 0) {
      var c = r.length === 0 && n !== null;
      if (c) {
        var l = n, u2 = l.parentNode;
        av(u2), u2.append(l), t.items.clear();
      }
      Ml(e, !c);
    } else o = { pending: new Set(e), done: /* @__PURE__ */ new Set() }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(o);
  }
  function Ml(t, e = true) {
    for (var n = 0; n < t.length; n++) wt(t[n], e);
  }
  var Mu;
  function KE(t, e, n, r, i, o = null) {
    var s = t, a2 = /* @__PURE__ */ new Map(), c = (e & Ch) !== 0;
    if (c) {
      var l = t;
      s = l.appendChild(Kn());
    }
    var u2 = null, f = Rc(() => {
      var w4 = n();
      return xc(w4) ? w4 : w4 == null ? [] : Ta(w4);
    }), d3, h2 = true;
    function p() {
      m2.fallback = u2, Pv(m2, d3, s, e, r), u2 !== null && (d3.length === 0 ? (u2.f & fr) === 0 ? Mc(u2) : (u2.f ^= fr, Wo(u2, null, s)) : gi(u2, () => {
        u2 = null;
      }));
    }
    var g3 = Io(() => {
      d3 = F2(f);
      for (var w4 = d3.length, v2 = /* @__PURE__ */ new Set(), y3 = Ue, b2 = Gh(), _4 = 0; _4 < w4; _4 += 1) {
        var C3 = d3[_4], x2 = r(C3, _4), S2 = h2 ? null : a2.get(x2);
        S2 ? (S2.v && fo(S2.v, C3), S2.i && fo(S2.i, _4), b2 && y3.unskip_effect(S2.e)) : (S2 = Dv(a2, h2 ? s : Mu ?? (Mu = Kn()), C3, x2, _4, i, e, n), h2 || (S2.e.f |= fr), a2.set(x2, S2)), v2.add(x2);
      }
      if (w4 === 0 && o && !u2 && (h2 ? u2 = qt(() => o(s)) : (u2 = qt(() => o(Mu ?? (Mu = Kn()))), u2.f |= fr)), w4 > v2.size && gm(), !h2) if (b2) {
        for (const [D3, K2] of a2) v2.has(D3) || y3.skip_effect(K2.e);
        y3.oncommit(p), y3.ondiscard(() => {
        });
      } else p();
      F2(f);
    }), m2 = { effect: g3, items: a2, outrogroups: null, fallback: u2 };
    h2 = false;
  }
  function Po(t) {
    for (; t !== null && (t.f & Mn) === 0; ) t = t.next;
    return t;
  }
  function Pv(t, e, n, r, i) {
    var o = (r & Im) !== 0, s = e.length, a2 = t.items, c = Po(t.effect.first), l, u2 = null, f, d3 = [], h2 = [], p, g3, m2, w4;
    if (o) for (w4 = 0; w4 < s; w4 += 1) p = e[w4], g3 = i(p, w4), m2 = a2.get(g3).e, (m2.f & fr) === 0 && (m2.nodes?.a?.measure(), (f ?? (f = /* @__PURE__ */ new Set())).add(m2));
    for (w4 = 0; w4 < s; w4 += 1) {
      if (p = e[w4], g3 = i(p, w4), m2 = a2.get(g3).e, t.outrogroups !== null) for (const K2 of t.outrogroups) K2.pending.delete(m2), K2.done.delete(m2);
      if ((m2.f & fr) !== 0) if (m2.f ^= fr, m2 === c) Wo(m2, null, n);
      else {
        var v2 = u2 ? u2.next : c;
        m2 === t.effect.last && (t.effect.last = m2.prev), m2.prev && (m2.prev.next = m2.next), m2.next && (m2.next.prev = m2.prev), Er(t, u2, m2), Er(t, m2, v2), Wo(m2, v2, n), u2 = m2, d3 = [], h2 = [], c = Po(u2.next);
        continue;
      }
      if ((m2.f & ln) !== 0 && (Mc(m2), o && (m2.nodes?.a?.unfix(), (f ?? (f = /* @__PURE__ */ new Set())).delete(m2))), m2 !== c) {
        if (l !== void 0 && l.has(m2)) {
          if (d3.length < h2.length) {
            var y3 = h2[0], b2;
            u2 = y3.prev;
            var _4 = d3[0], C3 = d3[d3.length - 1];
            for (b2 = 0; b2 < d3.length; b2 += 1) Wo(d3[b2], y3, n);
            for (b2 = 0; b2 < h2.length; b2 += 1) l.delete(h2[b2]);
            Er(t, _4.prev, C3.next), Er(t, u2, _4), Er(t, C3, y3), c = y3, u2 = C3, w4 -= 1, d3 = [], h2 = [];
          } else l.delete(m2), Wo(m2, c, n), Er(t, m2.prev, m2.next), Er(t, m2, u2 === null ? t.effect.first : u2.next), Er(t, u2, m2), u2 = m2;
          continue;
        }
        for (d3 = [], h2 = []; c !== null && c !== m2; ) (l ?? (l = /* @__PURE__ */ new Set())).add(c), h2.push(c), c = Po(c.next);
        if (c === null) continue;
      }
      (m2.f & fr) === 0 && d3.push(m2), u2 = m2, c = Po(m2.next);
    }
    if (t.outrogroups !== null) {
      for (const K2 of t.outrogroups) K2.pending.size === 0 && (Ml(Ta(K2.done)), t.outrogroups?.delete(K2));
      t.outrogroups.size === 0 && (t.outrogroups = null);
    }
    if (c !== null || l !== void 0) {
      var x2 = [];
      if (l !== void 0) for (m2 of l) (m2.f & ln) === 0 && x2.push(m2);
      for (; c !== null; ) (c.f & ln) === 0 && c !== t.fallback && x2.push(c), c = Po(c.next);
      var S2 = x2.length;
      if (S2 > 0) {
        var D3 = (r & Ch) !== 0 && s === 0 ? n : null;
        if (o) {
          for (w4 = 0; w4 < S2; w4 += 1) x2[w4].nodes?.a?.measure();
          for (w4 = 0; w4 < S2; w4 += 1) x2[w4].nodes?.a?.fix();
        }
        Ov(t, x2, D3);
      }
    }
    o && Xn(() => {
      if (f !== void 0) for (m2 of f) m2.nodes?.a?.apply();
    });
  }
  function Dv(t, e, n, r, i, o, s, a2) {
    var c = (s & Cm) !== 0 ? (s & $m) === 0 ? Hh(n, false, false) : Si(n) : null, l = (s & Am) !== 0 ? Si(i) : null;
    return { v: c, i: l, e: qt(() => (o(e, c ?? n, l ?? i, a2), () => {
      t.delete(r);
    })) };
  }
  function Wo(t, e, n) {
    if (t.nodes) for (var r = t.nodes.start, i = t.nodes.end, o = e && (e.f & fr) === 0 ? e.nodes.start : n; r !== null; ) {
      var s = hs(r);
      if (o.before(r), r === i) return;
      r = s;
    }
  }
  function Er(t, e, n) {
    e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
  }
  function Ei(t, e, ...n) {
    var r = new Da(t);
    Io(() => {
      const i = e() ?? null;
      r.ensure(i, i && ((o) => i(o, ...n)));
    }, vr);
  }
  function Ma(t, e, n) {
    var r = new Da(t);
    Io(() => {
      var i = e() ?? null;
      r.ensure(i, i && ((o) => n(o, i)));
    }, vr);
  }
  function Lu(t, e, n, r, i, o) {
    var s = null, a2 = t, c = new Da(a2, false);
    Io(() => {
      const l = e() || null;
      var u2 = l === "svg" ? Fm : null;
      if (l === null) {
        c.ensure(null, null);
        return;
      }
      return c.ensure(l, (f) => {
        if (l) {
          if (s = u2 ? document.createElementNS(u2, l) : document.createElement(l), po(s, s), r) {
            var d3 = s.appendChild(Kn());
            r(s, d3);
          }
          $e.nodes.end = s, f.before(s);
        }
      }), () => {
      };
    }, vr), ps(() => {
    });
  }
  function JE(t, e) {
    gs(() => {
      var n = t.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
      if (!r.querySelector("#" + e.hash)) {
        const i = document.createElement("style");
        i.id = e.hash, i.textContent = e.code, r.appendChild(i);
      }
    });
  }
  function Ks(t, e, n) {
    gs(() => {
      var r = Ri(() => e(t, n?.()) || {});
      if (n && r?.update) {
        var i = false, o = {};
        Dc(() => {
          var s = n();
          yv(s), i && Tc(o, s) && (o = s, r.update(s));
        }), i = true;
      }
      if (r?.destroy) return () => r.destroy();
    });
  }
  function Mv(t, e) {
    var n = void 0, r;
    Kh(() => {
      n !== (n = e()) && (r && (wt(r), r = null), n && (r = qt(() => {
        gs(() => n(t));
      })));
    });
  }
  function fp(t) {
    var e, n, r = "";
    if (typeof t == "string" || typeof t == "number") r += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var i = t.length;
      for (e = 0; e < i; e++) t[e] && (n = fp(t[e])) && (r && (r += " "), r += n);
    } else for (n in t) t[n] && (r && (r += " "), r += n);
    return r;
  }
  function Lv() {
    for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = fp(t)) && (r && (r += " "), r += e);
    return r;
  }
  function Fv(t) {
    return typeof t == "object" ? Lv(t) : t ?? "";
  }
  var Fu = [...` 	
\r\f\xA0\v\uFEFF`];
  function Nv(t, e, n) {
    var r = t == null ? "" : "" + t;
    if (e && (r = r ? r + " " + e : e), n) {
      for (var i in n) if (n[i]) r = r ? r + " " + i : i;
      else if (r.length) for (var o = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
        var a2 = s + o;
        (s === 0 || Fu.includes(r[s - 1])) && (a2 === r.length || Fu.includes(r[a2])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a2 + 1) : s = a2;
      }
    }
    return r === "" ? null : r;
  }
  function Nu(t, e = false) {
    var n = e ? " !important;" : ";", r = "";
    for (var i in t) {
      var o = t[i];
      o != null && o !== "" && (r += " " + i + ": " + o + n);
    }
    return r;
  }
  function tl(t) {
    return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
  }
  function Uv(t, e) {
    if (e) {
      var n = "", r, i;
      if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
        t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var o = false, s = 0, a2 = false, c = [];
        r && c.push(...Object.keys(r).map(tl)), i && c.push(...Object.keys(i).map(tl));
        var l = 0, u2 = -1;
        const g3 = t.length;
        for (var f = 0; f < g3; f++) {
          var d3 = t[f];
          if (a2 ? d3 === "/" && t[f - 1] === "*" && (a2 = false) : o ? o === d3 && (o = false) : d3 === "/" && t[f + 1] === "*" ? a2 = true : d3 === '"' || d3 === "'" ? o = d3 : d3 === "(" ? s++ : d3 === ")" && s--, !a2 && o === false && s === 0) {
            if (d3 === ":" && u2 === -1) u2 = f;
            else if (d3 === ";" || f === g3 - 1) {
              if (u2 !== -1) {
                var h2 = tl(t.substring(l, u2).trim());
                if (!c.includes(h2)) {
                  d3 !== ";" && f++;
                  var p = t.substring(l, f).trim();
                  n += " " + p + ";";
                }
              }
              l = f + 1, u2 = -1;
            }
          }
        }
      }
      return r && (n += Nu(r)), i && (n += Nu(i, true)), n = n.trim(), n === "" ? null : n;
    }
    return t == null ? null : String(t);
  }
  function Bv(t, e, n, r, i, o) {
    var s = t.__className;
    if (s !== n || s === void 0) {
      var a2 = Nv(n, r, o);
      a2 == null ? t.removeAttribute("class") : e ? t.className = a2 : t.setAttribute("class", a2), t.__className = n;
    } else if (o && i !== o) for (var c in o) {
      var l = !!o[c];
      (i == null || l !== !!i[c]) && t.classList.toggle(c, l);
    }
    return o;
  }
  function nl(t, e = {}, n, r) {
    for (var i in n) {
      var o = n[i];
      e[i] !== o && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, o, r));
    }
  }
  function jv(t, e, n, r) {
    var i = t.__style;
    if (i !== e) {
      var o = Uv(e, r);
      o == null ? t.removeAttribute("style") : t.style.cssText = o, t.__style = e;
    } else r && (Array.isArray(r) ? (nl(t, n?.[0], r[0]), nl(t, n?.[1], r[1], "important")) : nl(t, n, r));
    return r;
  }
  function Ll(t, e, n = false) {
    if (t.multiple) {
      if (e == null) return;
      if (!xc(e)) return Um();
      for (var r of t.options) r.selected = e.includes(Uu(r));
      return;
    }
    for (r of t.options) {
      var i = Uu(r);
      if (rv(i, e)) {
        r.selected = true;
        return;
      }
    }
    (!n || e !== void 0) && (t.selectedIndex = -1);
  }
  function Hv(t) {
    var e = new MutationObserver(() => {
      Ll(t, t.__value);
    });
    e.observe(t, { childList: true, subtree: true, attributes: true, attributeFilter: ["value"] }), ps(() => {
      e.disconnect();
    });
  }
  function Uu(t) {
    return "__value" in t ? t.__value : t.value;
  }
  var Do = Symbol("class");
  var Mo = Symbol("style");
  var dp = Symbol("is custom element");
  var hp = Symbol("is html");
  function zv(t, e) {
    e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
  }
  function Bu(t, e, n, r) {
    var i = Fc(t);
    i[e] !== (i[e] = n) && (e === "loading" && (t[hm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && pp(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
  }
  function Wv(t, e, n, r, i = false, o = false) {
    var s = Fc(t), a2 = s[dp], c = !s[hp], l = e || {}, u2 = t.tagName === "OPTION";
    for (var f in e) f in n || (n[f] = null);
    n.class ? n.class = Fv(n.class) : n[Do] && (n.class = null), n[Mo] && (n.style ?? (n.style = null));
    var d3 = pp(t);
    for (const y3 in n) {
      let b2 = n[y3];
      if (u2 && y3 === "value" && b2 == null) {
        t.value = t.__value = "", l[y3] = b2;
        continue;
      }
      if (y3 === "class") {
        var h2 = t.namespaceURI === "http://www.w3.org/1999/xhtml";
        Bv(t, h2, b2, r, e?.[Do], n[Do]), l[y3] = b2, l[Do] = n[Do];
        continue;
      }
      if (y3 === "style") {
        jv(t, b2, e?.[Mo], n[Mo]), l[y3] = b2, l[Mo] = n[Mo];
        continue;
      }
      var p = l[y3];
      if (!(b2 === p && !(b2 === void 0 && t.hasAttribute(y3)))) {
        l[y3] = b2;
        var g3 = y3[0] + y3[1];
        if (g3 !== "$$") if (g3 === "on") {
          const _4 = {}, C3 = "$$" + y3;
          let x2 = y3.slice(2);
          var m2 = wv(x2);
          if (bv(x2) && (x2 = x2.slice(0, -7), _4.capture = true), !m2 && p) {
            if (b2 != null) continue;
            t.removeEventListener(x2, l[C3], _4), l[C3] = null;
          }
          if (b2 != null) if (m2) t[`__${x2}`] = b2, Iv([x2]);
          else {
            let S2 = function(D3) {
              l[y3].call(this, D3);
            };
            l[C3] = Lc(x2, t, S2, _4);
          }
          else m2 && (t[`__${x2}`] = void 0);
        } else if (y3 === "style") Bu(t, y3, b2);
        else if (y3 === "autofocus") lv(t, !!b2);
        else if (!a2 && (y3 === "__value" || y3 === "value" && b2 != null)) t.value = t.__value = b2;
        else if (y3 === "selected" && u2) zv(t, b2);
        else {
          var w4 = y3;
          c || (w4 = Sv(w4));
          var v2 = w4 === "defaultValue" || w4 === "defaultChecked";
          if (b2 == null && !a2 && !v2) if (s[y3] = null, w4 === "value" || w4 === "checked") {
            let _4 = t;
            const C3 = e === void 0;
            if (w4 === "value") {
              let x2 = _4.defaultValue;
              _4.removeAttribute(w4), _4.defaultValue = x2, _4.value = _4.__value = C3 ? x2 : null;
            } else {
              let x2 = _4.defaultChecked;
              _4.removeAttribute(w4), _4.defaultChecked = x2, _4.checked = C3 ? x2 : false;
            }
          } else t.removeAttribute(y3);
          else v2 || d3.includes(w4) && (a2 || typeof b2 != "string") ? (t[w4] = b2, w4 in s && (s[w4] = dt)) : typeof b2 != "function" && Bu(t, w4, b2);
        }
      }
    }
    return l;
  }
  function Js(t, e, n = [], r = [], i = [], o, s = false, a2 = false) {
    Nh(i, n, r, (c) => {
      var l = void 0, u2 = {}, f = t.nodeName === "SELECT", d3 = false;
      if (Kh(() => {
        var p = e(...c.map(F2)), g3 = Wv(t, l, p, o, s, a2);
        d3 && f && "value" in p && Ll(t, p.value);
        for (let w4 of Object.getOwnPropertySymbols(u2)) p[w4] || wt(u2[w4]);
        for (let w4 of Object.getOwnPropertySymbols(p)) {
          var m2 = p[w4];
          w4.description === Nm && (!l || m2 !== l[w4]) && (u2[w4] && wt(u2[w4]), u2[w4] = qt(() => Mv(t, () => m2))), g3[w4] = m2;
        }
        l = g3;
      }), f) {
        var h2 = t;
        gs(() => {
          Ll(h2, l.value, true), Hv(h2);
        });
      }
      d3 = true;
    });
  }
  function Fc(t) {
    return t.__attributes ?? (t.__attributes = { [dp]: t.nodeName.includes("-"), [hp]: t.namespaceURI === Lm });
  }
  var ju = /* @__PURE__ */ new Map();
  function pp(t) {
    var e = t.getAttribute("is") || t.nodeName, n = ju.get(e);
    if (n) return n;
    ju.set(e, n = []);
    for (var r, i = t, o = Element.prototype; o !== i; ) {
      r = wh(i);
      for (var s in r) r[s].set && n.push(s);
      i = Sc(i);
    }
    return n;
  }
  function Hu(t, e) {
    return t === e || t?.[Gn] === e;
  }
  function pr(t = {}, e, n, r) {
    return gs(() => {
      var i, o;
      return Dc(() => {
        i = o, o = r?.() || [], Ri(() => {
          t !== n(...o) && (e(t, ...o), i && Hu(n(...i), t) && e(null, ...i));
        });
      }), () => {
        Xn(() => {
          o && Hu(n(...o), t) && e(null, ...o);
        });
      };
    }), t;
  }
  function gp(t, e, n) {
    if (t == null) return e(void 0), an;
    const r = Ri(() => t.subscribe(e, n));
    return r.unsubscribe ? () => r.unsubscribe() : r;
  }
  var Fi = [];
  function QE(t, e = an) {
    let n = null;
    const r = /* @__PURE__ */ new Set();
    function i(a2) {
      if (Tc(t, a2) && (t = a2, n)) {
        const c = !Fi.length;
        for (const l of r) l[1](), Fi.push(l, t);
        if (c) {
          for (let l = 0; l < Fi.length; l += 2) Fi[l][0](Fi[l + 1]);
          Fi.length = 0;
        }
      }
    }
    function o(a2) {
      i(a2(t));
    }
    function s(a2, c = an) {
      const l = [a2, c];
      return r.add(l), r.size === 1 && (n = e(i, o) || an), a2(t), () => {
        r.delete(l), r.size === 0 && n && (n(), n = null);
      };
    }
    return { set: i, update: o, subscribe: s };
  }
  function Vv(t) {
    let e;
    return gp(t, (n) => e = n)(), e;
  }
  var Os = false;
  var Fl = Symbol();
  function ZE(t, e, n) {
    const r = n[e] ?? (n[e] = { store: null, source: Hh(void 0), unsubscribe: an });
    if (r.store !== t && !(Fl in n)) if (r.unsubscribe(), r.store = t ?? null, t == null) r.source.v = void 0, r.unsubscribe = an;
    else {
      var i = true;
      r.unsubscribe = gp(t, (o) => {
        i ? r.source.v = o : Mt(r.source, o);
      }), i = false;
    }
    return t && Fl in n ? Vv(t) : F2(r.source);
  }
  function eC(t, e) {
    return t.set(e), e;
  }
  function tC() {
    const t = {};
    function e() {
      ps(() => {
        for (var n in t) t[n].unsubscribe();
        _h(t, Fl, { enumerable: false, value: true });
      });
    }
    return [t, e];
  }
  function qv(t) {
    var e = Os;
    try {
      return Os = false, [t(), Os];
    } finally {
      Os = e;
    }
  }
  var Gv = { get(t, e) {
    if (!t.exclude.includes(e)) return t.props[e];
  }, set(t, e) {
    return false;
  }, getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props) return { enumerable: true, configurable: true, value: t.props[e] };
  }, has(t, e) {
    return t.exclude.includes(e) ? false : e in t.props;
  }, ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  } };
  function Oi(t, e, n) {
    return new Proxy({ props: t, exclude: e }, Gv);
  }
  var Xv = { get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Oo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  }, set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Oo(i) && (i = i());
      const o = Mr(i, e);
      if (o && o.set) return o.set(n), true;
    }
    return false;
  }, getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Oo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Mr(r, e);
        return i && !i.configurable && (i.configurable = true), i;
      }
    }
  }, has(t, e) {
    if (e === Gn || e === Eh) return false;
    for (let n of t.props) if (Oo(n) && (n = n()), n != null && e in n) return true;
    return false;
  }, ownKeys(t) {
    const e = [];
    for (let n of t.props) if (Oo(n) && (n = n()), !!n) {
      for (const r in n) e.includes(r) || e.push(r);
      for (const r of Object.getOwnPropertySymbols(n)) e.includes(r) || e.push(r);
    }
    return e;
  } };
  function ys(...t) {
    return new Proxy({ props: t }, Xv);
  }
  function q2(t, e, n, r) {
    var i = !Ao || (n & km) !== 0, o = (n & Om) !== 0, s = (n & Pm) !== 0, a2 = r, c = true, l = () => (c && (c = false, a2 = s ? Ri(r) : r), a2), u2;
    if (o) {
      var f = Gn in t || Eh in t;
      u2 = Mr(t, e)?.set ?? (f && e in t ? (y3) => t[e] = y3 : void 0);
    }
    var d3, h2 = false;
    o ? [d3, h2] = qv(() => t[e]) : d3 = t[e], d3 === void 0 && r !== void 0 && (d3 = l(), u2 && (i && _m(), u2(d3)));
    var p;
    if (i ? p = () => {
      var y3 = t[e];
      return y3 === void 0 ? l() : (c = true, y3);
    } : p = () => {
      var y3 = t[e];
      return y3 !== void 0 && (a2 = void 0), y3 === void 0 ? a2 : y3;
    }, i && (n & Rm) === 0) return p;
    if (u2) {
      var g3 = t.$$legacy;
      return (function(y3, b2) {
        return arguments.length > 0 ? ((!i || !b2 || g3 || h2) && u2(b2 ? p() : y3), y3) : p();
      });
    }
    var m2 = false, w4 = ((n & Tm) !== 0 ? Oa : Rc)(() => (m2 = false, p()));
    o && F2(w4);
    var v2 = $e;
    return (function(y3, b2) {
      if (arguments.length > 0) {
        const _4 = b2 ? F2(w4) : i && o ? Jt(y3) : y3;
        return Mt(w4, _4), m2 = true, a2 !== void 0 && (a2 = _4), y3;
      }
      return Br && m2 || (v2.f & hr) !== 0 ? w4.v : F2(w4);
    });
  }
  function La(t) {
    Me === null && $c(), Ao && Me.l !== null ? Kv(Me).m.push(t) : Tn(() => {
      const e = Ri(t);
      if (typeof e == "function") return e;
    });
  }
  function Fa(t) {
    Me === null && $c(), La(() => () => Ri(t));
  }
  function Kv(t) {
    var e = t.l;
    return e.u ?? (e.u = { a: [], b: [], m: [] });
  }
  var Jv = "5";
  var bh;
  typeof window < "u" && ((bh = window.__svelte ?? (window.__svelte = {})).v ?? (bh.v = /* @__PURE__ */ new Set())).add(Jv);
  function bs(t) {
    return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
  }
  function Yo(t, e, n, r = { bubbles: true }) {
    if (typeof Event > "u") throw new Error("Event not defined.");
    if (!t) throw new Error("Tried to dispatch event without element.");
    const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
    return t?.dispatchEvent(i), i;
  }
  var Yv = class {
    constructor() {
      this.elementMap = /* @__PURE__ */ new Map();
    }
    on(e, n, r, i) {
      this.elementMap.has(e) || this.elementMap.set(e, {});
      const o = this.elementMap.get(e);
      if (o == null) throw new Error("Event map couldn't be created.");
      n in o || (o[n] = /* @__PURE__ */ new Map()), o[n].set(r, Av(e, n, r, i));
    }
    off(e, n, r) {
      const i = this.elementMap.get(e);
      if (i == null || !(n in i)) return;
      const o = i[n], s = o.get(r);
      s != null && (s(), o.delete(r), o.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
    }
    clear() {
      this.elementMap.forEach((e, n) => {
        for (let [r, i] of Object.entries(e)) i.forEach((o, s) => {
          o();
        });
      }), this.elementMap.clear();
    }
  };
  function Ys(t, e) {
    let n = [];
    if (e) for (let r = 0; r < e.length; r++) {
      const i = e[r], o = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(o(t, i[1])) : n.push(o(t));
    }
    return { update(r) {
      if ((r && r.length || 0) != n.length) throw new Error("You must not change the length of an actions array.");
      if (r) for (let i = 0; i < r.length; i++) {
        const o = n[i];
        if (o && o.update) {
          const s = r[i];
          Array.isArray(s) && s.length > 1 ? o.update(s[1]) : o.update();
        }
      }
    }, destroy() {
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        i && i.destroy && i.destroy();
      }
    } };
  }
  var Ps;
  function Qv(t, e) {
    e === void 0 && (e = false);
    var n = t.CSS, r = Ps;
    if (typeof Ps == "boolean" && !e) return Ps;
    var i = n && typeof n.supports == "function";
    if (!i) return false;
    var o = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
    return r = o || s, e || (Ps = r), r;
  }
  function Zv(t, e, n) {
    if (!t) return { x: 0, y: 0 };
    var r = e.x, i = e.y, o = r + n.left, s = i + n.top, a2, c;
    if (t.type === "touchstart") {
      var l = t;
      a2 = l.changedTouches[0].pageX - o, c = l.changedTouches[0].pageY - s;
    } else {
      var u2 = t;
      a2 = u2.pageX - o, c = u2.pageY - s;
    }
    return { x: a2, y: c };
  }
  var Nc = (function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", { get: function() {
      return {};
    }, enumerable: false, configurable: true }), Object.defineProperty(t, "strings", { get: function() {
      return {};
    }, enumerable: false, configurable: true }), Object.defineProperty(t, "numbers", { get: function() {
      return {};
    }, enumerable: false, configurable: true }), Object.defineProperty(t, "defaultAdapter", { get: function() {
      return {};
    }, enumerable: false, configurable: true }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  })();
  function ey(t) {
    return t === void 0 && (t = window), ty(t) ? { passive: true } : false;
  }
  function ty(t) {
    t === void 0 && (t = window);
    var e = false;
    try {
      var n = { get passive() {
        return e = true, false;
      } }, r = function() {
      };
      t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
    } catch {
      e = false;
    }
    return e;
  }
  var ny = Object.freeze(Object.defineProperty({ __proto__: null, applyPassive: ey }, Symbol.toStringTag, { value: "Module" }));
  function ry(t, e) {
    if (t.closest) return t.closest(e);
    for (var n = t; n; ) {
      if (mp(n, e)) return n;
      n = n.parentElement;
    }
    return null;
  }
  function mp(t, e) {
    var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
    return n.call(t, e);
  }
  function iy(t) {
    var e = t;
    if (e.offsetParent !== null) return e.scrollWidth;
    var n = e.cloneNode(true);
    n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
    var r = n.scrollWidth;
    return document.documentElement.removeChild(n), r;
  }
  var vp = Object.freeze(Object.defineProperty({ __proto__: null, closest: ry, estimateScrollWidth: iy, matches: mp }, Symbol.toStringTag, { value: "Module" }));
  var oy = { BG_FOCUSED: "mdc-ripple-upgraded--background-focused", FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation", FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation", ROOT: "mdc-ripple-upgraded", UNBOUNDED: "mdc-ripple-upgraded--unbounded" };
  var sy = { VAR_FG_SCALE: "--mdc-ripple-fg-scale", VAR_FG_SIZE: "--mdc-ripple-fg-size", VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end", VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start", VAR_LEFT: "--mdc-ripple-left", VAR_TOP: "--mdc-ripple-top" };
  var zu = { DEACTIVATION_TIMEOUT_MS: 225, FG_DEACTIVATION_MS: 150, INITIAL_ORIGIN_SCALE: 0.6, PADDING: 10, TAP_DELAY_MS: 300 };
  var Wu = ["touchstart", "pointerdown", "mousedown", "keydown"];
  var Vu = ["touchend", "pointerup", "mouseup", "contextmenu"];
  var Ds = [];
  var ay = (function(t) {
    E(e, t);
    function e(n) {
      var r = t.call(this, A(A({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = false, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = true, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(i) {
        r.activateImpl(i);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return oy;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "strings", { get: function() {
      return sy;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "numbers", { get: function() {
      return zu;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, browserSupportsCssVars: function() {
        return true;
      }, computeBoundingRect: function() {
        return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
      }, containsEventTarget: function() {
        return true;
      }, deregisterDocumentInteractionHandler: function() {
      }, deregisterInteractionHandler: function() {
      }, deregisterResizeHandler: function() {
      }, getWindowPageOffset: function() {
        return { x: 0, y: 0 };
      }, isSurfaceActive: function() {
        return true;
      }, isSurfaceDisabled: function() {
        return true;
      }, isUnbounded: function() {
        return true;
      }, registerDocumentInteractionHandler: function() {
      }, registerInteractionHandler: function() {
      }, registerResizeHandler: function() {
      }, removeClass: function() {
      }, updateCssVariable: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, o = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(o), n.adapter.isUnbounded() && (n.adapter.addClass(s), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(o), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var r = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return { activationEvent: void 0, hasDeactivationUXRun: false, isActivated: false, isProgrammatic: false, wasActivatedByPointer: false, wasElementMadeActive: false };
    }, e.prototype.registerRootHandlers = function(n) {
      var r, i;
      if (n) {
        try {
          for (var o = m(Wu), s = o.next(); !s.done; s = o.next()) {
            var a2 = s.value;
            this.adapter.registerInteractionHandler(a2, this.activateHandler);
          }
        } catch (c) {
          r = { error: c };
        } finally {
          try {
            s && !s.done && (i = o.return) && i.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown") this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else try {
        for (var o = m(Vu), s = o.next(); !s.done; s = o.next()) {
          var a2 = s.value;
          this.adapter.registerDocumentInteractionHandler(a2, this.deactivateHandler);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          s && !s.done && (i = o.return) && i.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = m(Wu), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (a2) {
        n = { error: a2 };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = m(Vu), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (a2) {
        n = { error: a2 };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(o) {
        o.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[o], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var o = this.previousActivationEvent, s = o && n !== void 0 && o.type !== n.type;
          if (!s) {
            i.isActivated = true, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? false : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var a2 = n !== void 0 && Ds.length > 0 && Ds.some(function(c) {
              return r.adapter.containsEventTarget(c);
            });
            if (a2) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ds.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ds = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, o = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, a2 = s.FG_DEACTIVATION, c = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var u2 = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d3 = this.getFgTranslationCoordinates(), h2 = d3.startPoint, p = d3.endPoint;
        u2 = h2.x + "px, " + h2.y + "px", f = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, u2), this.adapter.updateCssVariable(o, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a2), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, o;
      i ? o = Zv(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = { x: this.frame.width / 2, y: this.frame.height / 2 }, o = { x: o.x - this.initialSize / 2, y: o.y - this.initialSize / 2 };
      var s = { x: this.frame.width / 2 - this.initialSize / 2, y: this.frame.height / 2 - this.initialSize / 2 };
      return { startPoint: o, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, o = i.hasDeactivationUXRun, s = i.isActivated, a2 = o || !s;
      a2 && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, zu.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = false, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = A({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = true, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var o = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, o = n.VAR_TOP, s = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = { left: Math.round(this.frame.width / 2 - this.initialSize / 2), top: Math.round(this.frame.height / 2 - this.initialSize / 2) }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  })(Nc);
  var ve = { UNKNOWN: "Unknown", BACKSPACE: "Backspace", ENTER: "Enter", SPACEBAR: "Spacebar", PAGE_UP: "PageUp", PAGE_DOWN: "PageDown", END: "End", HOME: "Home", ARROW_LEFT: "ArrowLeft", ARROW_UP: "ArrowUp", ARROW_RIGHT: "ArrowRight", ARROW_DOWN: "ArrowDown", DELETE: "Delete", ESCAPE: "Escape", TAB: "Tab" };
  var Ft = /* @__PURE__ */ new Set();
  Ft.add(ve.BACKSPACE);
  Ft.add(ve.ENTER);
  Ft.add(ve.SPACEBAR);
  Ft.add(ve.PAGE_UP);
  Ft.add(ve.PAGE_DOWN);
  Ft.add(ve.END);
  Ft.add(ve.HOME);
  Ft.add(ve.ARROW_LEFT);
  Ft.add(ve.ARROW_UP);
  Ft.add(ve.ARROW_RIGHT);
  Ft.add(ve.ARROW_DOWN);
  Ft.add(ve.DELETE);
  Ft.add(ve.ESCAPE);
  Ft.add(ve.TAB);
  var Zt = { BACKSPACE: 8, ENTER: 13, SPACEBAR: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, DELETE: 46, ESCAPE: 27, TAB: 9 };
  var Nt = /* @__PURE__ */ new Map();
  Nt.set(Zt.BACKSPACE, ve.BACKSPACE);
  Nt.set(Zt.ENTER, ve.ENTER);
  Nt.set(Zt.SPACEBAR, ve.SPACEBAR);
  Nt.set(Zt.PAGE_UP, ve.PAGE_UP);
  Nt.set(Zt.PAGE_DOWN, ve.PAGE_DOWN);
  Nt.set(Zt.END, ve.END);
  Nt.set(Zt.HOME, ve.HOME);
  Nt.set(Zt.ARROW_LEFT, ve.ARROW_LEFT);
  Nt.set(Zt.ARROW_UP, ve.ARROW_UP);
  Nt.set(Zt.ARROW_RIGHT, ve.ARROW_RIGHT);
  Nt.set(Zt.ARROW_DOWN, ve.ARROW_DOWN);
  Nt.set(Zt.DELETE, ve.DELETE);
  Nt.set(Zt.ESCAPE, ve.ESCAPE);
  Nt.set(Zt.TAB, ve.TAB);
  var qr = /* @__PURE__ */ new Set();
  qr.add(ve.PAGE_UP);
  qr.add(ve.PAGE_DOWN);
  qr.add(ve.END);
  qr.add(ve.HOME);
  qr.add(ve.ARROW_LEFT);
  qr.add(ve.ARROW_UP);
  qr.add(ve.ARROW_RIGHT);
  qr.add(ve.ARROW_DOWN);
  function $t(t) {
    var e = t.key;
    if (Ft.has(e)) return e;
    var n = Nt.get(t.keyCode);
    return n || ve.UNKNOWN;
  }
  var { applyPassive: qu } = ny;
  var { matches: ly } = vp;
  function yp(t, { ripple: e = true, surface: n = false, unbounded: r = false, disabled: i = false, color: o, active: s, rippleElement: a2, eventTarget: c, activeTarget: l, addClass: u2 = (p) => t.classList.add(p), removeClass: f = (p) => t.classList.remove(p), addStyle: d3 = (p, g3) => t.style.setProperty(p, g3), initPromise: h2 = Promise.resolve() } = {}) {
    let p, g3 = new Yv(), m2 = Tt("SMUI:addLayoutListener"), w4, v2 = s, y3 = c, b2 = l;
    function _4() {
      n ? (u2("mdc-ripple-surface"), o === "primary" ? (u2("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : o === "secondary" ? (f("smui-ripple-surface--primary"), u2("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && v2 !== s && (v2 = s, s ? p.activate() : s === false && p.deactivate()), e && !p ? (p = new ay({ addClass: u2, browserSupportsCssVars: () => Qv(window), computeBoundingRect: () => (a2 || t).getBoundingClientRect(), containsEventTarget: (x2) => t.contains(x2), deregisterDocumentInteractionHandler: (x2, S2) => g3.off(document.documentElement, x2, S2), deregisterInteractionHandler: (x2, S2) => g3.off(c || t, x2, S2), deregisterResizeHandler: (x2) => window.removeEventListener("resize", x2), getWindowPageOffset: () => {
        var x2, S2;
        return { x: (x2 = window.pageXOffset) !== null && x2 !== void 0 ? x2 : window.scrollX, y: (S2 = window.pageYOffset) !== null && S2 !== void 0 ? S2 : window.scrollY };
      }, isSurfaceActive: () => s ?? ly(l || t, ":active"), isSurfaceDisabled: () => !!i, isUnbounded: () => !!r, registerDocumentInteractionHandler: (x2, S2) => {
        const D3 = qu();
        g3.on(document.documentElement, x2, S2, typeof D3 == "boolean" ? { capture: D3 } : D3);
      }, registerInteractionHandler: (x2, S2) => {
        const D3 = qu();
        g3.on(c || t, x2, S2, typeof D3 == "boolean" ? { capture: D3 } : D3);
      }, registerResizeHandler: (x2) => g3.on(window, "resize", x2), removeClass: f, updateCssVariable: d3 }), h2.then(() => {
        p && (p.init(), p.setUnbounded(r));
      })) : p && !e && h2.then(() => {
        p && (p.destroy(), p = void 0, g3.clear());
      }), p && (y3 !== c || b2 !== l) && (y3 = c, b2 = l, p.destroy(), requestAnimationFrame(() => {
        p && (p.init(), p.setUnbounded(r));
      })), !e && r && u2("mdc-ripple-upgraded--unbounded");
    }
    _4(), m2 && (w4 = m2(C3));
    function C3() {
      p && p.layout();
    }
    return { update(x2) {
      ({ ripple: e, surface: n, unbounded: r, disabled: i, color: o, active: s, rippleElement: a2, eventTarget: c, activeTarget: l, addClass: u2, removeClass: f, addStyle: d3, initPromise: h2 } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (S2) => t.classList.add(S2), removeClass: (S2) => t.classList.remove(S2), addStyle: (S2, D3) => t.style.setProperty(S2, D3), initPromise: Promise.resolve() }, x2)), _4();
    }, destroy() {
      p && (p.destroy(), p = void 0, g3.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), w4 && w4();
    } };
  }
  var cy = Tv("<svg><!></svg>");
  function Na(t, e) {
    Wr(e, true);
    let n = q2(e, "use", 19, () => []), r = q2(e, "tag", 3, "div"), i = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
    const o = Gt(() => ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"].indexOf(r()) > -1);
    let s;
    function a2() {
      return s;
    }
    var c = { getElement: a2 }, l = gn(), u2 = Xt(l);
    {
      var f = (h2) => {
        var p = cy();
        Js(p, () => ({ ...i }));
        var g3 = sv(p);
        Ei(g3, () => e.children ?? an), pr(p, (m2) => s = m2, () => s), Ks(p, (m2, w4) => Ys?.(m2, w4), n), ht(h2, p);
      }, d3 = (h2) => {
        var p = gn(), g3 = Xt(p);
        {
          var m2 = (v2) => {
            var y3 = gn(), b2 = Xt(y3);
            Lu(b2, r, false, (_4, C3) => {
              pr(_4, (x2) => s = x2, () => s), Ks(_4, (x2, S2) => Ys?.(x2, S2), n), Js(_4, () => ({ ...i }));
            }), ht(v2, y3);
          }, w4 = (v2) => {
            var y3 = gn(), b2 = Xt(y3);
            Lu(b2, r, false, (_4, C3) => {
              pr(_4, (D3) => s = D3, () => s), Ks(_4, (D3, K2) => Ys?.(D3, K2), n), Js(_4, () => ({ ...i }));
              var x2 = gn(), S2 = Xt(x2);
              Ei(S2, () => e.children ?? an), ht(C3, x2);
            }), ht(v2, y3);
          };
          ua(g3, (v2) => {
            F2(o) ? v2(m2) : v2(w4, false);
          }, true);
        }
        ht(h2, p);
      };
      ua(u2, (h2) => {
        r() === "svg" ? h2(f) : h2(d3, false);
      });
    }
    return ht(t, l), Vr(c);
  }
  var Ms = { ICON_BUTTON_ON: "mdc-icon-button--on", ROOT: "mdc-icon-button" };
  var tr = { ARIA_LABEL: "aria-label", ARIA_PRESSED: "aria-pressed", DATA_ARIA_LABEL_OFF: "data-aria-label-off", DATA_ARIA_LABEL_ON: "data-aria-label-on", CHANGE_EVENT: "MDCIconButtonToggle:change" };
  var uy = (function(t) {
    E(e, t);
    function e(n) {
      var r = t.call(this, A(A({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = false, r;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return Ms;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "strings", { get: function() {
      return tr;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, hasClass: function() {
        return false;
      }, notifyChange: function() {
      }, removeClass: function() {
      }, getAttr: function() {
        return null;
      }, setAttr: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      var n = this.adapter.getAttr(tr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(tr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(tr.ARIA_PRESSED) !== null) throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = true;
      } else this.adapter.setAttr(tr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ms.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ms.ICON_BUTTON_ON) : this.adapter.removeClass(Ms.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(tr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(tr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(tr.ARIA_LABEL, r || "");
      } else this.adapter.setAttr(tr.ARIA_PRESSED, "" + n);
    }, e;
  })(Nc);
  var fy = vs('<div class="mdc-icon-button__touch"></div>');
  var dy = vs('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
  function nC(t, e) {
    Wr(e, true);
    let n = () => {
    };
    function r(re) {
      return re === n;
    }
    let i = q2(e, "use", 19, () => []), o = q2(e, "class", 3, ""), s = q2(e, "style", 3, ""), a2 = q2(e, "ripple", 3, true), c = q2(e, "toggle", 3, false), l = q2(e, "pressed", 15, n), u2 = q2(e, "touch", 3, false), f = q2(e, "displayFlex", 3, true), d3 = q2(e, "size", 3, "normal"), h2 = q2(e, "component", 3, Na), p = q2(e, "tag", 19, () => e.href == null ? "button" : "a"), g3 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "ripple", "color", "toggle", "pressed", "ariaLabelOn", "ariaLabelOff", "touch", "displayFlex", "size", "href", "action", "component", "tag", "children"]), m2, w4, v2 = on(Jt({})), y3 = Jt({}), b2 = on(Jt({})), _4 = Tt("SMUI:icon-button:context"), C3 = Tt("SMUI:icon-button:aria-describedby");
    const x2 = Gt(() => {
      if (_4 === "data-table:pagination") switch (e.action) {
        case "first-page":
          return { "data-first-page": "true" };
        case "prev-page":
          return { "data-prev-page": "true" };
        case "next-page":
          return { "data-next-page": "true" };
        case "last-page":
          return { "data-last-page": "true" };
        default:
          return { "data-action": "true" };
      }
      else return _4 === "dialog:header" || _4 === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
    });
    let S2 = !!e.disabled;
    Tn(() => {
      if (S2 != !!e.disabled) {
        if (m2) {
          const re = He();
          "blur" in re && re.blur();
        }
        S2 = !!e.disabled;
      }
    }), It("SMUI:icon:context", "icon-button");
    let D3 = null;
    Tn(() => {
      m2 && He() && c() !== D3 && (c() && !w4 ? (w4 = new uy({ addClass: ce4, hasClass: K2, notifyChange: (re) => {
        Se3(re), Yo(He(), "SMUIIconButtonToggleChange", re);
      }, removeClass: ue2, getAttr: ee, setAttr: H3 }), w4.init()) : !c() && w4 && (w4.destroy(), w4 = void 0, Mt(v2, {}, true), Mt(b2, {}, true)), D3 = c());
    }), Tn(() => {
      w4 && !r(l()) && w4.isOn() !== l() && w4.toggle(l());
    }), Fa(() => {
      w4 && w4.destroy();
    });
    function K2(re) {
      return re in F2(v2) ? F2(v2)[re] : He().classList.contains(re);
    }
    function ce4(re) {
      F2(v2)[re] || (F2(v2)[re] = true);
    }
    function ue2(re) {
      (!(re in F2(v2)) || F2(v2)[re]) && (F2(v2)[re] = false);
    }
    function M3(re, ze) {
      y3[re] != ze && (ze === "" || ze == null ? delete y3[re] : y3[re] = ze);
    }
    function ee(re) {
      return re in F2(b2) ? F2(b2)[re] ?? null : He().getAttribute(re);
    }
    function H3(re, ze) {
      F2(b2)[re] !== ze && (F2(b2)[re] = ze);
    }
    function Se3(re) {
      l(re.isOn);
    }
    function He() {
      return m2.getElement();
    }
    var G4 = { getElement: He }, se3 = gn(), et2 = Xt(se3);
    {
      let re = Gt(() => [[yp, { ripple: a2(), unbounded: true, color: e.color, disabled: !!e.disabled, addClass: ce4, removeClass: ue2, addStyle: M3 }], ...i()]), ze = Gt(() => bs({ "mdc-icon-button": true, "mdc-icon-button--on": !r(l()) && l(), "mdc-icon-button--touch": u2(), "mdc-icon-button--display-flex": f(), "smui-icon-button--size-button": d3() === "button", "smui-icon-button--size-mini": d3() === "mini", "mdc-icon-button--reduced-size": d3() === "mini" || d3() === "button", "mdc-card__action": _4 === "card:action", "mdc-card__action--icon": _4 === "card:action", "mdc-top-app-bar__navigation-icon": _4 === "top-app-bar:navigation", "mdc-top-app-bar__action-item": _4 === "top-app-bar:action", "mdc-snackbar__dismiss": _4 === "snackbar:actions", "mdc-data-table__pagination-button": _4 === "data-table:pagination", "mdc-data-table__sort-icon-button": _4 === "data-table:sortable-header-cell", "mdc-dialog__close": (_4 === "dialog:header" || _4 === "dialog:sheet") && e.action === "close", ...F2(v2), [o()]: true })), te = Gt(() => Object.entries(y3).map(([Re2, Oe3]) => `${Re2}: ${Oe3};`).concat([s()]).join(" ")), ut2 = Gt(() => r(l()) ? null : l() ? "true" : "false"), Dt3 = Gt(() => l() ? e.ariaLabelOn : e.ariaLabelOff);
      Ma(et2, h2, (Re2, Oe3) => {
        pr(Oe3(Re2, ys({ get tag() {
          return p();
        }, get use() {
          return F2(re);
        }, get class() {
          return F2(ze);
        }, get style() {
          return F2(te);
        }, get "aria-pressed"() {
          return F2(ut2);
        }, get "aria-label"() {
          return F2(Dt3);
        }, get "data-aria-label-on"() {
          return e.ariaLabelOn;
        }, get "data-aria-label-off"() {
          return e.ariaLabelOff;
        }, get "aria-describedby"() {
          return C3;
        }, get href() {
          return e.href;
        } }, () => F2(x2), () => F2(b2), () => g3, { onclick: (Cn2) => {
          w4 && w4.handleClick(), _4 === "top-app-bar:navigation" && Yo(He(), "SMUITopAppBarIconButtonNav"), e.onclick?.(Cn2);
        }, children: (Cn2, Y4) => {
          var ye2 = dy(), Ee2 = Ol(Xt(ye2), 2);
          Ei(Ee2, () => e.children ?? an);
          var xr = Ol(Ee2);
          {
            var cn2 = (tn2) => {
              var tt2 = fy();
              ht(tn2, tt2);
            };
            ua(xr, (tn2) => {
              u2() && tn2(cn2);
            });
          }
          ht(Cn2, ye2);
        }, $$slots: { default: true } })), (Cn2) => m2 = Cn2, () => m2);
      });
    }
    return ht(t, se3), Vr(G4);
  }
  function hy(t, e) {
    Wr(e, true);
    let n = q2(e, "use", 19, () => []), r = q2(e, "class", 3, ""), i = q2(e, "component", 3, Na), o = q2(e, "tag", 3, "div"), s = q2(e, "_smuiClass", 3, ""), a2 = q2(e, "_smuiClassMap", 23, () => ({})), c = q2(e, "_smuiContexts", 19, () => ({})), l = q2(e, "_smuiProps", 19, () => ({})), u2 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "component", "tag", "_smuiClass", "_smuiClassMap", "_smuiContexts", "_smuiProps", "children"]), f;
    const d3 = [];
    Object.entries(a2()).forEach(([w4, v2]) => {
      const y3 = Tt(v2);
      y3 && "subscribe" in y3 && d3.push(y3.subscribe((b2) => {
        a2()[w4] = b2;
      }));
    });
    for (let w4 in c()) c().hasOwnProperty(w4) && It(w4, c()[w4]);
    Fa(() => {
      for (const w4 of d3) w4();
    });
    function h2() {
      return f.getElement();
    }
    var p = { getElement: h2 }, g3 = gn(), m2 = Xt(g3);
    {
      let w4 = Gt(() => bs({ [s()]: true, ...a2(), [r()]: true }));
      Ma(m2, i, (v2, y3) => {
        pr(y3(v2, ys({ get tag() {
          return o();
        }, get use() {
          return n();
        }, get class() {
          return F2(w4);
        } }, l, () => u2, { children: (b2, _4) => {
          var C3 = gn(), x2 = Xt(C3);
          Ei(x2, () => e.children ?? an), ht(b2, C3);
        }, $$slots: { default: true } })), (b2) => f = b2, () => f);
      });
    }
    return ht(t, g3), Vr(p);
  }
  var py = vs("<input/>");
  function rC(t, e) {
    Wr(e, true);
    let n = q2(e, "use", 19, () => []), r = q2(e, "class", 3, ""), i = q2(e, "type", 3, "text"), o = q2(e, "placeholder", 3, " "), s = q2(e, "value", 15), a2 = q2(e, "files", 15, null), c = q2(e, "dirty", 15, false), l = q2(e, "invalid", 15, false), u2 = q2(e, "updateInvalid", 3, true), f = q2(e, "initialInvalid", 3, false), d3 = q2(e, "emptyValueNull", 19, () => s() === null), h2 = q2(e, "emptyValueUndefined", 19, () => s() === void 0), p = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "type", "placeholder", "value", "files", "dirty", "invalid", "updateInvalid", "initialInvalid", "emptyValueNull", "emptyValueUndefined"]), g3, m2 = Jt({}), w4 = Jt({});
    Tn(() => {
      i() === "file" ? delete w4.value : w4.value = s() == null ? "" : s();
    }), La(() => {
      u2() && f() && l(K2().matches(":invalid"));
    });
    function v2(H3) {
      return H3 === "" ? Number.NaN : +H3;
    }
    function y3(H3) {
      if (i() === "file") {
        a2(H3.currentTarget.files);
        return;
      }
      if (H3.currentTarget.value === "" && d3()) {
        s(null);
        return;
      }
      if (H3.currentTarget.value === "" && h2()) {
        s(void 0);
        return;
      }
      switch (i()) {
        case "number":
        case "range":
          s(v2(H3.currentTarget.value));
          break;
        default:
          s(H3.currentTarget.value);
          break;
      }
    }
    function b2(H3) {
      (i() === "file" || i() === "range") && y3(H3), c(true), u2() && l(K2().matches(":invalid"));
    }
    function _4(H3) {
      return H3 in m2 ? m2[H3] ?? null : K2().getAttribute(H3);
    }
    function C3(H3, Se3) {
      m2[H3] !== Se3 && (m2[H3] = Se3);
    }
    function x2(H3) {
      (!(H3 in m2) || m2[H3] != null) && (m2[H3] = void 0);
    }
    function S2() {
      K2().focus();
    }
    function D3() {
      K2().blur();
    }
    function K2() {
      return g3;
    }
    var ce4 = { getAttr: _4, addAttr: C3, removeAttr: x2, focus: S2, blur: D3, getElement: K2 }, ue2 = py(), M3 = (H3) => {
      i() !== "file" && y3(H3), e.oninput?.(H3);
    }, ee = (H3) => {
      b2(H3), e.onchange?.(H3);
    };
    return Js(ue2, (H3) => ({ class: H3, type: i(), placeholder: o(), ...w4, ...m2, ...p, oninput: M3, onchange: ee }), [() => bs({ "mdc-text-field__input": true, [r()]: true })], void 0, void 0, void 0, true), pr(ue2, (H3) => g3 = H3, () => g3), Ks(ue2, (H3, Se3) => Ys?.(H3, Se3), n), ht(t, ue2), Vr(ce4);
  }
  var gy = Object.defineProperty;
  var my = (t, e, n) => e in t ? gy(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
  var jr = (t, e, n) => (my(t, typeof e != "symbol" ? e + "" : e, n), n);
  var ae;
  (function(t) {
    t.Group = "Group", t.Signal = "Signal", t.Formula = "Formula", t.Dashboard = "Dashboard", t.DashboardTab = "DashboardTab", t.DataConnection = "DataConnection", t.DataSource = "DataSource", t.Connector = "Connector", t.EventCondition = "EventCondition", t.EventDefinition = "EventDefinition", t.EventCategory = "EventCategory", t.ProcessImage = "ProcessImage", t.BatchDefinition = "BatchDefinition", t.ReportTemplate = "ReportTemplate", t.Report = "Report", t.Document = "Document", t.Storage = "Storage", t.Camera = "Camera", t.SwitchSchedule = "SwitchSchedule", t.User = "User", t.Role = "Role", t.Recipient = "Recipient", t.RecipientGroup = "RecipientGroup", t.AlarmingPlan = "AlarmingPlan", t.MaintenanceService = "MaintenanceService", t.TaskDefinition = "TaskDefinition", t.RuntimeScript = "RuntimeScript";
  })(ae || (ae = {}));
  var iC = { [ae.Group]: "mat folder", [ae.Dashboard]: "adk adk-dashboard", [ae.Signal]: "mat code", [ae.Formula]: "mat timeline", [ae.DataConnection]: "mat data_usage", [ae.DataSource]: "mat storage" };
  var vy = { Group: "/base/Group", Signal: "/daq/Signal", Formula: "/daq/Formula", Dashboard: "/base/Dashboard", DashboardTab: "/base/DashboardTab", DataConnection: "/daq/DataConnection", DataSource: "/daq/DataSource", Connector: "/daq/Connector", EventCondition: "/base/condition", ProcessImage: "/scada/ProcessImage", EventCategory: "/base/EventCategory", EventDefinition: "/base/EventDefinition", BatchDefinition: "/scada/batchdefinition", ReportTemplate: "/scada/ReportTemplate", Report: "/scada/Report", Document: "/base/Document", Storage: "/base/Storage", Camera: "/scada/Camera", SwitchSchedule: "/scada/SwitchSchedule", User: "/base/User", Role: "/base/Role", Recipient: "/alarming/Recipient", RecipientGroup: "/alarming/RecipientGroup", AlarmingPlan: "/alarming/AlarmingPlan", MaintenanceService: "/maintenance/MaintenanceService", TaskDefinition: "/maintenance/TaskDefinition", RuntimeScript: "/runtime/RuntimeScript" };
  var Gu;
  (function(t) {
    t.Locked = "Locked", t.Overwritten = "Overwritten", t.FillInVariables = "FillInVariables", t.ResolveRelative = "ResolveRelative";
  })(Gu || (Gu = {}));
  var Xu;
  (function(t) {
    t.Locked = "Locked", t.Overwritten = "Overwritten";
  })(Xu || (Xu = {}));
  var Ju;
  (function(t) {
    t.RadioBox = "RadioBox", t.DropDown = "DropDown";
  })(Ju || (Ju = {}));
  var Nl;
  (function(t) {
    t.CriticalAlarm = "CriticalAlarm", t.MajorAlarm = "MajorAlarm", t.MinorAlarm = "MinorAlarm", t.WarningAlarm = "WarningAlarm", t.InformationalAlarm = "InformationalAlarm", t.IndeterminateAlarm = "IndeterminateAlarm", t.Info = "Info", t.Warning = "Warning", t.Error = "Error";
  })(Nl || (Nl = {}));
  var Ul;
  (function(t) {
    t[t.OnRaised = 1] = "OnRaised", t[t.OnDropped = 2] = "OnDropped";
  })(Ul || (Ul = {}));
  var Yu;
  (function(t) {
    t.SignalConditionSettings = "SignalConditionSettings", t.MinimumMonitoringSettings = "MinimumMonitoringSettings", t.MaximumMonitoringSettings = "MaximumMonitoringSettings", t.PeriodMaximumMonitoringSettings = "PeriodMaximumMonitoringSettings", t.ChangeRateMonitoringSettings = "ChangeRateMonitoringSettings", t.PlausibilityMonitoringSettings = "PlausibilityMonitoringSettings", t.PositionMonitoringSettings = "PositionMonitoringSettings", t.CounterConditionSettings = "CounterConditionSettings", t.TimebasedConditionSettings = "TimebasedConditionSettings", t.ConnectionFailureConditionSettings = "ConnectionFailureConditionSettings", t.DataConnectionFailure = "DataConnectionFailure", t.DifferenceMonitoringSettings = "DifferenceMonitoringSettings", t.RecordingFailureMonitoringSettings = "RecordingFailureMonitoringSettings";
  })(Yu || (Yu = {}));
  var Qu;
  (function(t) {
    t.Equal = "Equal", t.GreaterThan = "GreaterThan", t.GreaterThanOrEqual = "GreaterThanOrEqual", t.LessThan = "LessThan", t.LessThanOrEqual = "LessThanOrEqual", t.NotEqual = "NotEqual";
  })(Qu || (Qu = {}));
  var Bl;
  (function(t) {
    t.EdgeGateway = "EdgeGateway", t.DataAdapter = "DataAdapter", t.SmartDevice = "SmartDevice";
  })(Bl || (Bl = {}));
  var Zu;
  (function(t) {
    t.S7 = "S7", t.OpcUa = "OpcUa", t.Modbus = "Modbus", t.Universal = "Universal", t.Simulation = "Simulation", t.Knx = "Knx", t.Iot2000Module = "Iot2000Module", t.ModemInfo = "ModemInfo", t.MtmAdapter = "MtmAdapter", t.YDOCDataLogger = "YDOCDataLogger", t.OTTDataLogger = "OTTDataLogger", t.TeltonikaGPSTracker = "TeltonikaGPSTracker", t.LoRaWAN = "LoRaWAN", t.CsvImporter = "CsvImporter", t.IEC104 = "IEC104", t.BACnet = "BACnet", t.EhWebserver = "EhWebserver", t.FtpParser = "FtpParser", t.Snmp = "Snmp", t.Mqtt = "Mqtt", t.OneWire = "OneWire", t.MeterBus = "MeterBus";
  })(Zu || (Zu = {}));
  var jl;
  (function(t) {
    t.None = "None", t.JUMO = "JUMO";
  })(jl || (jl = {}));
  var ef;
  (function(t) {
    t.None = "None", t.Basic128Rsa15 = "Basic128Rsa15", t.Basic256 = "Basic256", t.Basic256Sha256 = "Basic256Sha256";
  })(ef || (ef = {}));
  var tf;
  (function(t) {
    t.None = "None", t.Sign = "Sign", t.SignAndEncrypt = "SignAndEncrypt";
  })(tf || (tf = {}));
  var nf;
  (function(t) {
    t.Anonymous = "Anonymous", t.Credentials = "Credentials", t.Certificate = "Certificate";
  })(nf || (nf = {}));
  var rf;
  (function(t) {
    t.ASCII = "ASCII", t.UTF7 = "UTF7", t.UTF8 = "UTF8", t.Unicode = "Unicode", t.UTF32 = "UTF32";
  })(rf || (rf = {}));
  var of;
  (function(t) {
    t.Connection = "Connection", t.EdgeGateway = "EdgeGateway";
  })(of || (of = {}));
  var sf;
  (function(t) {
    t.serial = "serial", t.tcp = "tcp";
  })(sf || (sf = {}));
  var Hl;
  (function(t) {
    t.AnalogInput = "AnalogInput", t.AnalogInOut = "AnalogInOut", t.DigitalInput = "DigitalInput", t.DigitalInOut = "DigitalInOut", t.Counter = "Counter", t.UniversalInput = "UniversalInput", t.UniversalInOut = "UniversalInOut";
  })(Hl || (Hl = {}));
  var af;
  (function(t) {
    t.None = "None", t.SByte = "SByte", t.Short = "Short", t.Int = "Int";
  })(af || (af = {}));
  var zl;
  (function(t) {
    t.None = "None", t.LiveFlowMeter = "LiveFlowMeter", t.Watchdog = "Watchdog";
  })(zl || (zl = {}));
  var Wl;
  (function(t) {
    t.MeanValue = "MeanValue", t.LastValue = "LastValue";
  })(Wl || (Wl = {}));
  var Hn;
  (function(t) {
    t.None = "None", t.WeightedMean = "WeightedMean", t.ArithmeticMean = "ArithmeticMean", t.Difference = "Difference", t.Sum = "Sum", t.Time = "Time", t.Text = "Text";
  })(Hn || (Hn = {}));
  var lf;
  (function(t) {
    t.Standard = "Standard", t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
  })(lf || (lf = {}));
  var Vl;
  (function(t) {
    t.ArithmeticMean = "ArithmeticMean", t.Sum = "Sum";
  })(Vl || (Vl = {}));
  var cf;
  (function(t) {
    t.Signal = "Signal", t.Formula = "Formula", t.Tag = "Tag";
  })(cf || (cf = {}));
  var ql;
  (function(t) {
    t.Numeric = "Numeric", t.Universal = "Universal";
  })(ql || (ql = {}));
  var uf;
  (function(t) {
    t.Normal = "Normal", t.Minimum = "Minimum", t.Maximum = "Maximum";
  })(uf || (uf = {}));
  var ff;
  (function(t) {
    t.Global = "Global", t.Tenant = "Tenant", t.Group = "Group", t.GroupAndSubGroups = "GroupAndSubGroups";
  })(ff || (ff = {}));
  var df;
  (function(t) {
    t.RestApi = "RestApi";
  })(df || (df = {}));
  var hf;
  (function(t) {
    t.Signal = "Signal", t.Formula = "Formula", t.Group = "Group", t.EventCategory = "EventCategory", t.BatchDefinition = "BatchDefinition";
  })(hf || (hf = {}));
  var pf;
  (function(t) {
    t.Read = "Read", t.ReadWrite = "ReadWrite", t.Write = "Write";
  })(pf || (pf = {}));
  var gf;
  (function(t) {
    t.Start = "Start", t.Stop = "Stop", t.Release = "Release";
  })(gf || (gf = {}));
  var mf;
  (function(t) {
    t.EventDefinition = "EventDefinition", t.Condition = "Condition", t.Manual = "Manual";
  })(mf || (mf = {}));
  var vf;
  (function(t) {
    t.Raised = "Raised", t.Dropped = "Dropped";
  })(vf || (vf = {}));
  var yf;
  (function(t) {
    t.EventDefinition = "EventDefinition", t.Condition = "Condition";
  })(yf || (yf = {}));
  var bf;
  (function(t) {
    t.NumberField = "NumberField", t.TextField = "TextField", t.BooleanField = "BooleanField", t.SelectField = "SelectField", t.DateField = "DateField", t.CustomMappingField = "CustomMappingField", t.UserField = "UserField", t.TextAreaField = "TextAreaField", t.CheckboxField = "CheckboxField";
  })(bf || (bf = {}));
  var _f;
  (function(t) {
    t.Manual = "Manual", t.Signal = "Signal", t.Incremental = "Incremental";
  })(_f || (_f = {}));
  var Gl;
  (function(t) {
    t.WYSIWYG = "WYSIWYG", t.JsTemplate = "JsTemplate";
  })(Gl || (Gl = {}));
  var Xl;
  (function(t) {
    t.Day = "Day", t.Week = "Week", t.Month = "Month", t.Year = "Year";
  })(Xl || (Xl = {}));
  var wf;
  (function(t) {
    t.PDF = "PDF", t.CSV = "CSV", t.XLSX = "XLSX", t.DOCX = "DOCX", t.PNG = "PNG", t.JPG = "JPG";
  })(wf || (wf = {}));
  var xf;
  (function(t) {
    t.Signal = "Signal", t.Formula = "Formula";
  })(xf || (xf = {}));
  var Sf;
  (function(t) {
    t.AVG = "AVG", t.SUM = "SUM", t.MIN = "MIN", t.MAX = "MAX";
  })(Sf || (Sf = {}));
  var Ef;
  (function(t) {
    t.TextBox = "TextBox", t.NumberBox = "NumberBox", t.RadioList = "RadioList", t.SelectList = "SelectList", t.Signal = "Signal", t.CheckBox = "CheckBox";
  })(Ef || (Ef = {}));
  var Cf;
  (function(t) {
    t.LiveFirst = "LiveFirst", t.ArchiveFirst = "ArchiveFirst", t.ArchiveOnly = "ArchiveOnly";
  })(Cf || (Cf = {}));
  var Af;
  (function(t) {
    t.Scheduled = "Scheduled", t.Manual = "Manual", t.Event = "Event";
  })(Af || (Af = {}));
  var If;
  (function(t) {
    t.On = "On", t.Off = "Off";
  })(If || (If = {}));
  var Kl;
  (function(t) {
    t.None = "None", t.Pending = "Pending", t.Failed = "Failed", t.Denied = "Denied", t.Successful = "Successful";
  })(Kl || (Kl = {}));
  var $f;
  (function(t) {
    t.Male = "Male", t.Female = "Female", t.Diverse = "Diverse";
  })($f || ($f = {}));
  var Tf;
  (function(t) {
    t.Entered = "Entered", t.Dropped = "Dropped", t.Acknowledged = "Acknowledged";
  })(Tf || (Tf = {}));
  var kf;
  (function(t) {
    t.Raised = "Raised", t.Dropped = "Dropped";
  })(kf || (kf = {}));
  var Rf;
  (function(t) {
    t.Started = "Started", t.Stopped = "Stopped";
  })(Rf || (Rf = {}));
  var tb = class {
    constructor(e) {
      Object.assign(this, e);
    }
  };
  var Of;
  (function(t) {
    t.ProcessInterval = "ProcessInterval", t.SubInterval = "SubInterval", t.HourInterval = "HourInterval", t.TwoHourInterval = "TwoHourInterval", t.DayInterval = "DayInterval", t.WeekInterval = "WeekInterval", t.MonthInterval = "MonthInterval", t.QuarterInterval = "QuarterInterval", t.YearInterval = "YearInterval";
  })(Of || (Of = {}));
  ae.Group + "", ae.Signal + "", ae.Dashboard + "", ae.DashboardTab + "", ae.DataConnection + "", ae.DataSource + "", ae.Connector + "", ae.EventCategory + "", ae.EventCondition + "", ae.EventDefinition + "", ae.Formula + "", ae.ProcessImage + "", ae.BatchDefinition + "", ae.ReportTemplate + "", ae.Report + "", ae.Document + "", ae.Storage + "", ae.Camera + "", ae.SwitchSchedule + "", ae.User + "", ae.Role + "", ae.Recipient + "", ae.RecipientGroup + "", ae.AlarmingPlan + "", ae.MaintenanceService + "", ae.TaskDefinition + "", ae.RuntimeScript + "";
  var Jl = function(t, e) {
    return Jl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }, Jl(t, e);
  };
  function er(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Jl(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function nb(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, [])).next());
    });
  }
  function bp(t, e) {
    var n = { label: 0, sent: function() {
      if (o[0] & 1) throw o[1];
      return o[1];
    }, trys: [], ops: [] }, r, i, o, s;
    return s = { next: a2(0), throw: a2(1), return: a2(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function a2(l) {
      return function(u2) {
        return c([l, u2]);
      };
    }
    function c(l) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; n; ) try {
        if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: false };
          case 5:
            n.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = l;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(l);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = e.call(t, n);
      } catch (u2) {
        l = [6, u2], i = 0;
      } finally {
        r = o = 0;
      }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: true };
    }
  }
  function go(t) {
    var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return { next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    } };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Ci(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var r = n.call(t), i, o = [], s;
    try {
      for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) o.push(i.value);
    } catch (a2) {
      s = { error: a2 };
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r);
      } finally {
        if (s) throw s.error;
      }
    }
    return o;
  }
  function Ai(t, e, n) {
    if (arguments.length === 2) for (var r = 0, i = e.length, o; r < i; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return t.concat(o || Array.prototype.slice.call(e));
  }
  function Gi(t) {
    return this instanceof Gi ? (this.v = t, this) : new Gi(t);
  }
  function rb(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(t, e || []), i, o = [];
    return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function s(d3) {
      r[d3] && (i[d3] = function(h2) {
        return new Promise(function(p, g3) {
          o.push([d3, h2, p, g3]) > 1 || a2(d3, h2);
        });
      });
    }
    function a2(d3, h2) {
      try {
        c(r[d3](h2));
      } catch (p) {
        f(o[0][3], p);
      }
    }
    function c(d3) {
      d3.value instanceof Gi ? Promise.resolve(d3.value.v).then(l, u2) : f(o[0][2], d3);
    }
    function l(d3) {
      a2("next", d3);
    }
    function u2(d3) {
      a2("throw", d3);
    }
    function f(d3, h2) {
      d3(h2), o.shift(), o.length && a2(o[0][0], o[0][1]);
    }
  }
  function ib(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator], n;
    return e ? e.call(t) : (t = typeof go == "function" ? go(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function r(o) {
      n[o] = t[o] && function(s) {
        return new Promise(function(a2, c) {
          s = t[o](s), i(a2, c, s.done, s.value);
        });
      };
    }
    function i(o, s, a2, c) {
      Promise.resolve(c).then(function(l) {
        o({ value: l, done: a2 });
      }, s);
    }
  }
  function qe(t) {
    return typeof t == "function";
  }
  function Uc(t) {
    var e = function(r) {
      Error.call(r), r.stack = new Error().stack;
    }, n = t(e);
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
  }
  var rl = Uc(function(t) {
    return function(e) {
      t(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(n, r) {
        return r + 1 + ") " + n.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
    };
  });
  function fa(t, e) {
    if (t) {
      var n = t.indexOf(e);
      0 <= n && t.splice(n, 1);
    }
  }
  var _s = (function() {
    function t(e) {
      this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return t.prototype.unsubscribe = function() {
      var e, n, r, i, o;
      if (!this.closed) {
        this.closed = true;
        var s = this._parentage;
        if (s) if (this._parentage = null, Array.isArray(s)) try {
          for (var a2 = go(s), c = a2.next(); !c.done; c = a2.next()) {
            var l = c.value;
            l.remove(this);
          }
        } catch (g3) {
          e = { error: g3 };
        } finally {
          try {
            c && !c.done && (n = a2.return) && n.call(a2);
          } finally {
            if (e) throw e.error;
          }
        }
        else s.remove(this);
        var u2 = this.initialTeardown;
        if (qe(u2)) try {
          u2();
        } catch (g3) {
          o = g3 instanceof rl ? g3.errors : [g3];
        }
        var f = this._finalizers;
        if (f) {
          this._finalizers = null;
          try {
            for (var d3 = go(f), h2 = d3.next(); !h2.done; h2 = d3.next()) {
              var p = h2.value;
              try {
                Pf(p);
              } catch (g3) {
                o = o ?? [], g3 instanceof rl ? o = Ai(Ai([], Ci(o)), Ci(g3.errors)) : o.push(g3);
              }
            }
          } catch (g3) {
            r = { error: g3 };
          } finally {
            try {
              h2 && !h2.done && (i = d3.return) && i.call(d3);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        if (o) throw new rl(o);
      }
    }, t.prototype.add = function(e) {
      var n;
      if (e && e !== this) if (this.closed) Pf(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
    }, t.prototype._hasParent = function(e) {
      var n = this._parentage;
      return n === e || Array.isArray(n) && n.includes(e);
    }, t.prototype._addParent = function(e) {
      var n = this._parentage;
      this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
    }, t.prototype._removeParent = function(e) {
      var n = this._parentage;
      n === e ? this._parentage = null : Array.isArray(n) && fa(n, e);
    }, t.prototype.remove = function(e) {
      var n = this._finalizers;
      n && fa(n, e), e instanceof t && e._removeParent(this);
    }, t.EMPTY = (function() {
      var e = new t();
      return e.closed = true, e;
    })(), t;
  })();
  var _p = _s.EMPTY;
  function wp(t) {
    return t instanceof _s || t && "closed" in t && qe(t.remove) && qe(t.add) && qe(t.unsubscribe);
  }
  function Pf(t) {
    qe(t) ? t() : t.unsubscribe();
  }
  var ob = { Promise: void 0 };
  var sb = { setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Ai([t, e], Ci(n)));
  }, clearTimeout: function(t) {
    return clearTimeout(t);
  }, delegate: void 0 };
  function xp(t) {
    sb.setTimeout(function() {
      throw t;
    });
  }
  function Yl() {
  }
  function Qs(t) {
    t();
  }
  var Bc = (function(t) {
    er(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r.isStopped = false, n ? (r.destination = n, wp(n) && n.add(r)) : r.destination = cb, r;
    }
    return e.create = function(n, r, i) {
      return new mo(n, r, i);
    }, e.prototype.next = function(n) {
      this.isStopped || this._next(n);
    }, e.prototype.error = function(n) {
      this.isStopped || (this.isStopped = true, this._error(n));
    }, e.prototype.complete = function() {
      this.isStopped || (this.isStopped = true, this._complete());
    }, e.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = true, t.prototype.unsubscribe.call(this), this.destination = null);
    }, e.prototype._next = function(n) {
      this.destination.next(n);
    }, e.prototype._error = function(n) {
      try {
        this.destination.error(n);
      } finally {
        this.unsubscribe();
      }
    }, e.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, e;
  })(_s);
  var ab = (function() {
    function t(e) {
      this.partialObserver = e;
    }
    return t.prototype.next = function(e) {
      var n = this.partialObserver;
      if (n.next) try {
        n.next(e);
      } catch (r) {
        Ls(r);
      }
    }, t.prototype.error = function(e) {
      var n = this.partialObserver;
      if (n.error) try {
        n.error(e);
      } catch (r) {
        Ls(r);
      }
      else Ls(e);
    }, t.prototype.complete = function() {
      var e = this.partialObserver;
      if (e.complete) try {
        e.complete();
      } catch (n) {
        Ls(n);
      }
    }, t;
  })();
  var mo = (function(t) {
    er(e, t);
    function e(n, r, i) {
      var o = t.call(this) || this, s;
      return qe(n) || !n ? s = { next: n ?? void 0, error: r ?? void 0, complete: i ?? void 0 } : s = n, o.destination = new ab(s), o;
    }
    return e;
  })(Bc);
  function Ls(t) {
    xp(t);
  }
  function lb(t) {
    throw t;
  }
  var cb = { closed: true, next: Yl, error: lb, complete: Yl };
  var jc = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function $o(t) {
    return t;
  }
  function ub(t) {
    return t.length === 0 ? $o : t.length === 1 ? t[0] : function(e) {
      return t.reduce(function(n, r) {
        return r(n);
      }, e);
    };
  }
  var Pt = (function() {
    function t(e) {
      e && (this._subscribe = e);
    }
    return t.prototype.lift = function(e) {
      var n = new t();
      return n.source = this, n.operator = e, n;
    }, t.prototype.subscribe = function(e, n, r) {
      var i = this, o = db(e) ? e : new mo(e, n, r);
      return Qs(function() {
        var s = i, a2 = s.operator, c = s.source;
        o.add(a2 ? a2.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
      }), o;
    }, t.prototype._trySubscribe = function(e) {
      try {
        return this._subscribe(e);
      } catch (n) {
        e.error(n);
      }
    }, t.prototype.forEach = function(e, n) {
      var r = this;
      return n = Df(n), new n(function(i, o) {
        var s = new mo({ next: function(a2) {
          try {
            e(a2);
          } catch (c) {
            o(c), s.unsubscribe();
          }
        }, error: o, complete: i });
        r.subscribe(s);
      });
    }, t.prototype._subscribe = function(e) {
      var n;
      return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
    }, t.prototype[jc] = function() {
      return this;
    }, t.prototype.pipe = function() {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return ub(e)(this);
    }, t.prototype.toPromise = function(e) {
      var n = this;
      return e = Df(e), new e(function(r, i) {
        var o;
        n.subscribe(function(s) {
          return o = s;
        }, function(s) {
          return i(s);
        }, function() {
          return r(o);
        });
      });
    }, t.create = function(e) {
      return new t(e);
    }, t;
  })();
  function Df(t) {
    var e;
    return (e = t ?? ob.Promise) !== null && e !== void 0 ? e : Promise;
  }
  function fb(t) {
    return t && qe(t.next) && qe(t.error) && qe(t.complete);
  }
  function db(t) {
    return t && t instanceof Bc || fb(t) && wp(t);
  }
  function hb(t) {
    return qe(t?.lift);
  }
  function Et(t) {
    return function(e) {
      if (hb(e)) return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function at(t, e, n, r, i) {
    return new pb(t, e, n, r, i);
  }
  var pb = (function(t) {
    er(e, t);
    function e(n, r, i, o, s, a2) {
      var c = t.call(this, n) || this;
      return c.onFinalize = s, c.shouldUnsubscribe = a2, c._next = r ? function(l) {
        try {
          r(l);
        } catch (u2) {
          n.error(u2);
        }
      } : t.prototype._next, c._error = o ? function(l) {
        try {
          o(l);
        } catch (u2) {
          n.error(u2);
        } finally {
          this.unsubscribe();
        }
      } : t.prototype._error, c._complete = i ? function() {
        try {
          i();
        } catch (l) {
          n.error(l);
        } finally {
          this.unsubscribe();
        }
      } : t.prototype._complete, c;
    }
    return e.prototype.unsubscribe = function() {
      var n;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var r = this.closed;
        t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
      }
    }, e;
  })(Bc);
  var gb = Uc(function(t) {
    return function() {
      t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  });
  var Ot = (function(t) {
    er(e, t);
    function e() {
      var n = t.call(this) || this;
      return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
    }
    return e.prototype.lift = function(n) {
      var r = new Mf(this, this);
      return r.operator = n, r;
    }, e.prototype._throwIfClosed = function() {
      if (this.closed) throw new gb();
    }, e.prototype.next = function(n) {
      var r = this;
      Qs(function() {
        var i, o;
        if (r._throwIfClosed(), !r.isStopped) {
          r.currentObservers || (r.currentObservers = Array.from(r.observers));
          try {
            for (var s = go(r.currentObservers), a2 = s.next(); !a2.done; a2 = s.next()) {
              var c = a2.value;
              c.next(n);
            }
          } catch (l) {
            i = { error: l };
          } finally {
            try {
              a2 && !a2.done && (o = s.return) && o.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
        }
      });
    }, e.prototype.error = function(n) {
      var r = this;
      Qs(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.hasError = r.isStopped = true, r.thrownError = n;
          for (var i = r.observers; i.length; ) i.shift().error(n);
        }
      });
    }, e.prototype.complete = function() {
      var n = this;
      Qs(function() {
        if (n._throwIfClosed(), !n.isStopped) {
          n.isStopped = true;
          for (var r = n.observers; r.length; ) r.shift().complete();
        }
      });
    }, e.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(e.prototype, "observed", { get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    }, enumerable: false, configurable: true }), e.prototype._trySubscribe = function(n) {
      return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
    }, e.prototype._subscribe = function(n) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
    }, e.prototype._innerSubscribe = function(n) {
      var r = this, i = this, o = i.hasError, s = i.isStopped, a2 = i.observers;
      return o || s ? _p : (this.currentObservers = null, a2.push(n), new _s(function() {
        r.currentObservers = null, fa(a2, n);
      }));
    }, e.prototype._checkFinalizedStatuses = function(n) {
      var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
      i ? n.error(o) : s && n.complete();
    }, e.prototype.asObservable = function() {
      var n = new Pt();
      return n.source = this, n;
    }, e.create = function(n, r) {
      return new Mf(n, r);
    }, e;
  })(Pt);
  var Mf = (function(t) {
    er(e, t);
    function e(n, r) {
      var i = t.call(this) || this;
      return i.destination = n, i.source = r, i;
    }
    return e.prototype.next = function(n) {
      var r, i;
      (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
    }, e.prototype.error = function(n) {
      var r, i;
      (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
    }, e.prototype.complete = function() {
      var n, r;
      (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
    }, e.prototype._subscribe = function(n) {
      var r, i;
      return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : _p;
    }, e;
  })(Ot);
  var Hc = (function(t) {
    er(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r._value = n, r;
    }
    return Object.defineProperty(e.prototype, "value", { get: function() {
      return this.getValue();
    }, enumerable: false, configurable: true }), e.prototype._subscribe = function(n) {
      var r = t.prototype._subscribe.call(this, n);
      return !r.closed && n.next(this._value), r;
    }, e.prototype.getValue = function() {
      var n = this, r = n.hasError, i = n.thrownError, o = n._value;
      if (r) throw i;
      return this._throwIfClosed(), o;
    }, e.prototype.next = function(n) {
      t.prototype.next.call(this, this._value = n);
    }, e;
  })(Ot);
  var zc = { now: function() {
    return (zc.delegate || Date).now();
  }, delegate: void 0 };
  var Sp = (function(t) {
    er(e, t);
    function e(n, r, i) {
      n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = zc);
      var o = t.call(this) || this;
      return o._bufferSize = n, o._windowTime = r, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = true, o._infiniteTimeWindow = r === 1 / 0, o._bufferSize = Math.max(1, n), o._windowTime = Math.max(1, r), o;
    }
    return e.prototype.next = function(n) {
      var r = this, i = r.isStopped, o = r._buffer, s = r._infiniteTimeWindow, a2 = r._timestampProvider, c = r._windowTime;
      i || (o.push(n), !s && o.push(a2.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
    }, e.prototype._subscribe = function(n) {
      this._throwIfClosed(), this._trimBuffer();
      for (var r = this._innerSubscribe(n), i = this, o = i._infiniteTimeWindow, s = i._buffer, a2 = s.slice(), c = 0; c < a2.length && !n.closed; c += o ? 1 : 2) n.next(a2[c]);
      return this._checkFinalizedStatuses(n), r;
    }, e.prototype._trimBuffer = function() {
      var n = this, r = n._bufferSize, i = n._timestampProvider, o = n._buffer, s = n._infiniteTimeWindow, a2 = (s ? 1 : 2) * r;
      if (r < 1 / 0 && a2 < o.length && o.splice(0, o.length - a2), !s) {
        for (var c = i.now(), l = 0, u2 = 1; u2 < o.length && o[u2] <= c; u2 += 2) l = u2;
        l && o.splice(0, l + 1);
      }
    }, e;
  })(Ot);
  var mb = (function(t) {
    er(e, t);
    function e(n, r) {
      return t.call(this) || this;
    }
    return e.prototype.schedule = function(n, r) {
      return this;
    }, e;
  })(_s);
  var Ql = { setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = Ql.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, Ai([t, e], Ci(n))) : setInterval.apply(void 0, Ai([t, e], Ci(n)));
  }, clearInterval: function(t) {
    return clearInterval(t);
  }, delegate: void 0 };
  var vb = (function(t) {
    er(e, t);
    function e(n, r) {
      var i = t.call(this, n, r) || this;
      return i.scheduler = n, i.work = r, i.pending = false, i;
    }
    return e.prototype.schedule = function(n, r) {
      if (r === void 0 && (r = 0), this.closed) return this;
      this.state = n;
      var i = this.id, o = this.scheduler;
      return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = true, this.delay = r, this.id = this.id || this.requestAsyncId(o, this.id, r), this;
    }, e.prototype.requestAsyncId = function(n, r, i) {
      return i === void 0 && (i = 0), Ql.setInterval(n.flush.bind(n, this), i);
    }, e.prototype.recycleAsyncId = function(n, r, i) {
      if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return r;
      Ql.clearInterval(r);
    }, e.prototype.execute = function(n, r) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var i = this._execute(n, r);
      if (i) return i;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, e.prototype._execute = function(n, r) {
      var i = false, o;
      try {
        this.work(n);
      } catch (s) {
        i = true, o = s || new Error("Scheduled action threw falsy error");
      }
      if (i) return this.unsubscribe(), o;
    }, e.prototype.unsubscribe = function() {
      if (!this.closed) {
        var n = this, r = n.id, i = n.scheduler, o = i.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, fa(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
      }
    }, e;
  })(mb);
  var Lf = (function() {
    function t(e, n) {
      n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
    }
    return t.prototype.schedule = function(e, n, r) {
      return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
    }, t.now = zc.now, t;
  })();
  var yb = (function(t) {
    er(e, t);
    function e(n, r) {
      r === void 0 && (r = Lf.now);
      var i = t.call(this, n, r) || this;
      return i.actions = [], i._active = false, i._scheduled = void 0, i;
    }
    return e.prototype.flush = function(n) {
      var r = this.actions;
      if (this._active) {
        r.push(n);
        return;
      }
      var i;
      this._active = true;
      do
        if (i = n.execute(n.state, n.delay)) break;
      while (n = r.shift());
      if (this._active = false, i) {
        for (; n = r.shift(); ) n.unsubscribe();
        throw i;
      }
    }, e;
  })(Lf);
  var Ua = new yb(vb);
  var bb = Ua;
  var _b = new Pt(function(t) {
    return t.complete();
  });
  function Ep(t) {
    return t && qe(t.schedule);
  }
  function Cp(t) {
    return t[t.length - 1];
  }
  function wb(t) {
    return qe(Cp(t)) ? t.pop() : void 0;
  }
  function Wc(t) {
    return Ep(Cp(t)) ? t.pop() : void 0;
  }
  var Ap = function(t) {
    return t && typeof t.length == "number" && typeof t != "function";
  };
  function Ip(t) {
    return qe(t?.then);
  }
  function $p(t) {
    return qe(t[jc]);
  }
  function Tp(t) {
    return Symbol.asyncIterator && qe(t?.[Symbol.asyncIterator]);
  }
  function kp(t) {
    return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function xb() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var Rp = xb();
  function Op(t) {
    return qe(t?.[Rp]);
  }
  function Pp(t) {
    return rb(this, arguments, function() {
      var e, n, r, i;
      return bp(this, function(o) {
        switch (o.label) {
          case 0:
            e = t.getReader(), o.label = 1;
          case 1:
            o.trys.push([1, , 9, 10]), o.label = 2;
          case 2:
            return [4, Gi(e.read())];
          case 3:
            return n = o.sent(), r = n.value, i = n.done, i ? [4, Gi(void 0)] : [3, 5];
          case 4:
            return [2, o.sent()];
          case 5:
            return [4, Gi(r)];
          case 6:
            return [4, o.sent()];
          case 7:
            return o.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return e.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function Dp(t) {
    return qe(t?.getReader);
  }
  function Ln(t) {
    if (t instanceof Pt) return t;
    if (t != null) {
      if ($p(t)) return Sb(t);
      if (Ap(t)) return Eb(t);
      if (Ip(t)) return Cb(t);
      if (Tp(t)) return Mp(t);
      if (Op(t)) return Ab(t);
      if (Dp(t)) return Ib(t);
    }
    throw kp(t);
  }
  function Sb(t) {
    return new Pt(function(e) {
      var n = t[jc]();
      if (qe(n.subscribe)) return n.subscribe(e);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function Eb(t) {
    return new Pt(function(e) {
      for (var n = 0; n < t.length && !e.closed; n++) e.next(t[n]);
      e.complete();
    });
  }
  function Cb(t) {
    return new Pt(function(e) {
      t.then(function(n) {
        e.closed || (e.next(n), e.complete());
      }, function(n) {
        return e.error(n);
      }).then(null, xp);
    });
  }
  function Ab(t) {
    return new Pt(function(e) {
      var n, r;
      try {
        for (var i = go(t), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          if (e.next(s), e.closed) return;
        }
      } catch (a2) {
        n = { error: a2 };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      e.complete();
    });
  }
  function Mp(t) {
    return new Pt(function(e) {
      $b(t, e).catch(function(n) {
        return e.error(n);
      });
    });
  }
  function Ib(t) {
    return Mp(Pp(t));
  }
  function $b(t, e) {
    var n, r, i, o;
    return nb(this, void 0, void 0, function() {
      var s, a2;
      return bp(this, function(c) {
        switch (c.label) {
          case 0:
            c.trys.push([0, 5, 6, 11]), n = ib(t), c.label = 1;
          case 1:
            return [4, n.next()];
          case 2:
            if (r = c.sent(), !!r.done) return [3, 4];
            if (s = r.value, e.next(s), e.closed) return [2];
            c.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return a2 = c.sent(), i = { error: a2 }, [3, 11];
          case 6:
            return c.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
          case 7:
            c.sent(), c.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (i) throw i.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return e.complete(), [2];
        }
      });
    });
  }
  function gr(t, e, n, r, i) {
    r === void 0 && (r = 0), i === void 0 && (i = false);
    var o = e.schedule(function() {
      n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
    }, r);
    if (t.add(o), !i) return o;
  }
  function Lp(t, e) {
    return e === void 0 && (e = 0), Et(function(n, r) {
      n.subscribe(at(r, function(i) {
        return gr(r, t, function() {
          return r.next(i);
        }, e);
      }, function() {
        return gr(r, t, function() {
          return r.complete();
        }, e);
      }, function(i) {
        return gr(r, t, function() {
          return r.error(i);
        }, e);
      }));
    });
  }
  function Fp(t, e) {
    return e === void 0 && (e = 0), Et(function(n, r) {
      r.add(t.schedule(function() {
        return n.subscribe(r);
      }, e));
    });
  }
  function Tb(t, e) {
    return Ln(t).pipe(Fp(e), Lp(e));
  }
  function kb(t, e) {
    return Ln(t).pipe(Fp(e), Lp(e));
  }
  function Rb(t, e) {
    return new Pt(function(n) {
      var r = 0;
      return e.schedule(function() {
        r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
      });
    });
  }
  function Ob(t, e) {
    return new Pt(function(n) {
      var r;
      return gr(n, e, function() {
        r = t[Rp](), gr(n, e, function() {
          var i, o, s;
          try {
            i = r.next(), o = i.value, s = i.done;
          } catch (a2) {
            n.error(a2);
            return;
          }
          s ? n.complete() : n.next(o);
        }, 0, true);
      }), function() {
        return qe(r?.return) && r.return();
      };
    });
  }
  function Np(t, e) {
    if (!t) throw new Error("Iterable cannot be null");
    return new Pt(function(n) {
      gr(n, e, function() {
        var r = t[Symbol.asyncIterator]();
        gr(n, e, function() {
          r.next().then(function(i) {
            i.done ? n.complete() : n.next(i.value);
          });
        }, 0, true);
      });
    });
  }
  function Pb(t, e) {
    return Np(Pp(t), e);
  }
  function Db(t, e) {
    if (t != null) {
      if ($p(t)) return Tb(t, e);
      if (Ap(t)) return Rb(t, e);
      if (Ip(t)) return kb(t, e);
      if (Tp(t)) return Np(t, e);
      if (Op(t)) return Ob(t, e);
      if (Dp(t)) return Pb(t, e);
    }
    throw kp(t);
  }
  function Pi(t, e) {
    return e ? Db(t, e) : Ln(t);
  }
  function Xi() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = Wc(t);
    return Pi(t, n);
  }
  function Mb(t) {
    return !!t && (t instanceof Pt || qe(t.lift) && qe(t.subscribe));
  }
  var Lb = Uc(function(t) {
    return function() {
      t(this), this.name = "EmptyError", this.message = "no elements in sequence";
    };
  });
  function Qo(t, e) {
    return new Promise(function(n, r) {
      var i = new mo({ next: function(o) {
        n(o), i.unsubscribe();
      }, error: r, complete: function() {
        r(new Lb());
      } });
      t.subscribe(i);
    });
  }
  function Fb(t) {
    return t instanceof Date && !isNaN(t);
  }
  function Ii(t, e) {
    return Et(function(n, r) {
      var i = 0;
      n.subscribe(at(r, function(o) {
        r.next(t.call(e, o, i++));
      }));
    });
  }
  var Nb = Array.isArray;
  function Ub(t, e) {
    return Nb(e) ? t.apply(void 0, Ai([], Ci(e))) : t(e);
  }
  function Bb(t) {
    return Ii(function(e) {
      return Ub(t, e);
    });
  }
  var jb = Array.isArray;
  var Hb = Object.getPrototypeOf;
  var zb = Object.prototype;
  var Wb = Object.keys;
  function Vb(t) {
    if (t.length === 1) {
      var e = t[0];
      if (jb(e)) return { args: e, keys: null };
      if (qb(e)) {
        var n = Wb(e);
        return { args: n.map(function(r) {
          return e[r];
        }), keys: n };
      }
    }
    return { args: t, keys: null };
  }
  function qb(t) {
    return t && typeof t == "object" && Hb(t) === zb;
  }
  function Gb(t, e) {
    return t.reduce(function(n, r, i) {
      return n[r] = e[i], n;
    }, {});
  }
  function Up() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = Wc(t), r = wb(t), i = Vb(t), o = i.args, s = i.keys;
    if (o.length === 0) return Pi([], n);
    var a2 = new Pt(Xb(o, n, s ? function(c) {
      return Gb(s, c);
    } : $o));
    return r ? a2.pipe(Bb(r)) : a2;
  }
  function Xb(t, e, n) {
    return n === void 0 && (n = $o), function(r) {
      Ff(e, function() {
        for (var i = t.length, o = new Array(i), s = i, a2 = i, c = function(u2) {
          Ff(e, function() {
            var f = Pi(t[u2], e), d3 = false;
            f.subscribe(at(r, function(h2) {
              o[u2] = h2, d3 || (d3 = true, a2--), a2 || r.next(n(o.slice()));
            }, function() {
              --s || r.complete();
            }));
          }, r);
        }, l = 0; l < i; l++) c(l);
      }, r);
    };
  }
  function Ff(t, e, n) {
    t ? gr(n, t, e) : e();
  }
  function Kb(t, e, n, r, i, o, s, a2) {
    var c = [], l = 0, u2 = 0, f = false, d3 = function() {
      f && !c.length && !l && e.complete();
    }, h2 = function(g3) {
      return l < r ? p(g3) : c.push(g3);
    }, p = function(g3) {
      l++;
      var m2 = false;
      Ln(n(g3, u2++)).subscribe(at(e, function(w4) {
        e.next(w4);
      }, function() {
        m2 = true;
      }, void 0, function() {
        if (m2) try {
          l--;
          for (var w4 = function() {
            var v2 = c.shift();
            s ? gr(e, s, function() {
              return p(v2);
            }) : p(v2);
          }; c.length && l < r; ) w4();
          d3();
        } catch (v2) {
          e.error(v2);
        }
      }));
    };
    return t.subscribe(at(e, h2, function() {
      f = true, d3();
    })), function() {
    };
  }
  function Bp(t, e, n) {
    return n === void 0 && (n = 1 / 0), qe(e) ? Bp(function(r, i) {
      return Ii(function(o, s) {
        return e(r, o, i, s);
      })(Ln(t(r, i)));
    }, n) : (typeof e == "number" && (n = e), Et(function(r, i) {
      return Kb(r, i, t, n);
    }));
  }
  function Jb(t) {
    return Bp($o, t);
  }
  function Yb() {
    return Jb(1);
  }
  function Qb() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return Yb()(Pi(t, Wc(t)));
  }
  function jp(t, e, n) {
    t === void 0 && (t = 0), n === void 0 && (n = bb);
    var r = -1;
    return e != null && (Ep(e) ? n = e : r = e), new Pt(function(i) {
      var o = Fb(t) ? +t - n.now() : t;
      o < 0 && (o = 0);
      var s = 0;
      return n.schedule(function() {
        i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
      }, o);
    });
  }
  function Ki(t, e) {
    return Et(function(n, r) {
      var i = 0;
      n.subscribe(at(r, function(o) {
        return t.call(e, o, i++) && r.next(o);
      }));
    });
  }
  function Zb(t) {
    return Et(function(e, n) {
      var r = false, i = null, o = null, s = false, a2 = function() {
        if (o?.unsubscribe(), o = null, r) {
          r = false;
          var l = i;
          i = null, n.next(l);
        }
        s && n.complete();
      }, c = function() {
        o = null, s && n.complete();
      };
      e.subscribe(at(n, function(l) {
        r = true, i = l, o || Ln(t(l)).subscribe(o = at(n, a2, c));
      }, function() {
        s = true, (!r || !o || o.closed) && n.complete();
      }));
    });
  }
  function e0(t, e) {
    return e === void 0 && (e = Ua), Zb(function() {
      return jp(t, e);
    });
  }
  function Hp(t) {
    return Et(function(e, n) {
      var r = null, i = false, o;
      r = e.subscribe(at(n, void 0, void 0, function(s) {
        o = Ln(t(s, Hp(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = true;
      })), i && (r.unsubscribe(), r = null, o.subscribe(n));
    });
  }
  function t0(t, e) {
    return e === void 0 && (e = Ua), Et(function(n, r) {
      var i = null, o = null, s = null, a2 = function() {
        if (i) {
          i.unsubscribe(), i = null;
          var l = o;
          o = null, r.next(l);
        }
      };
      function c() {
        var l = s + t, u2 = e.now();
        if (u2 < l) {
          i = this.schedule(void 0, l - u2), r.add(i);
          return;
        }
        a2();
      }
      n.subscribe(at(r, function(l) {
        o = l, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
      }, function() {
        a2(), r.complete();
      }, void 0, function() {
        o = i = null;
      }));
    });
  }
  function n0(t) {
    return t <= 0 ? function() {
      return _b;
    } : Et(function(e, n) {
      var r = 0;
      e.subscribe(at(n, function(i) {
        ++r <= t && (n.next(i), t <= r && n.complete());
      }));
    });
  }
  function r0(t) {
    return Ii(function() {
      return t;
    });
  }
  function i0(t, e) {
    return e === void 0 && (e = $o), t = t ?? o0, Et(function(n, r) {
      var i, o = true;
      n.subscribe(at(r, function(s) {
        var a2 = e(s);
        (o || !t(i, a2)) && (o = false, i = a2, r.next(s));
      }));
    });
  }
  function o0(t, e) {
    return t === e;
  }
  function s0(t, e) {
    return i0(function(n, r) {
      return n[t] === r[t];
    });
  }
  function a0(t) {
    return Et(function(e, n) {
      try {
        e.subscribe(n);
      } finally {
        n.add(t);
      }
    });
  }
  function l0(t) {
    t === void 0 && (t = {});
    var e = t.connector, n = e === void 0 ? function() {
      return new Ot();
    } : e, r = t.resetOnError, i = r === void 0 ? true : r, o = t.resetOnComplete, s = o === void 0 ? true : o, a2 = t.resetOnRefCountZero, c = a2 === void 0 ? true : a2;
    return function(l) {
      var u2, f, d3, h2 = 0, p = false, g3 = false, m2 = function() {
        f?.unsubscribe(), f = void 0;
      }, w4 = function() {
        m2(), u2 = d3 = void 0, p = g3 = false;
      }, v2 = function() {
        var y3 = u2;
        w4(), y3?.unsubscribe();
      };
      return Et(function(y3, b2) {
        h2++, !g3 && !p && m2();
        var _4 = d3 = d3 ?? n();
        b2.add(function() {
          h2--, h2 === 0 && !g3 && !p && (f = il(v2, c));
        }), _4.subscribe(b2), !u2 && h2 > 0 && (u2 = new mo({ next: function(C3) {
          return _4.next(C3);
        }, error: function(C3) {
          g3 = true, m2(), f = il(w4, i, C3), _4.error(C3);
        }, complete: function() {
          p = true, m2(), f = il(w4, s), _4.complete();
        } }), Ln(y3).subscribe(u2));
      })(l);
    };
  }
  function il(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (e === true) {
      t();
      return;
    }
    if (e !== false) {
      var i = new mo({ next: function() {
        i.unsubscribe(), t();
      } });
      return e.apply(void 0, Ai([], Ci(n))).subscribe(i);
    }
  }
  function c0(t, e, n) {
    var r, i = false;
    return r = t, l0({ connector: function() {
      return new Sp(r, e, n);
    }, resetOnError: true, resetOnComplete: false, resetOnRefCountZero: i });
  }
  function u0(t) {
    return Ki(function(e, n) {
      return t <= n;
    });
  }
  function zp(t, e) {
    return Et(function(n, r) {
      var i = null, o = 0, s = false, a2 = function() {
        return s && !i && r.complete();
      };
      n.subscribe(at(r, function(c) {
        i?.unsubscribe();
        var l = 0, u2 = o++;
        Ln(t(c, u2)).subscribe(i = at(r, function(f) {
          return r.next(e ? e(c, f, u2, l++) : f);
        }, function() {
          i = null, a2();
        }));
      }, function() {
        s = true, a2();
      }));
    });
  }
  function mr(t) {
    return Et(function(e, n) {
      Ln(t).subscribe(at(n, function() {
        return n.complete();
      }, Yl)), !n.closed && e.subscribe(n);
    });
  }
  function f0(t, e) {
    return Et(function(n, r) {
      var i = 0;
      n.subscribe(at(r, function(o) {
        var s = t(o, i++);
        (s || e) && r.next(o), !s && r.complete();
      }));
    });
  }
  function d0(t, e, n) {
    var r = qe(t) || e || n ? { next: t, error: e, complete: n } : t;
    return r ? Et(function(i, o) {
      var s;
      (s = r.subscribe) === null || s === void 0 || s.call(r);
      var a2 = true;
      i.subscribe(at(o, function(c) {
        var l;
        (l = r.next) === null || l === void 0 || l.call(r, c), o.next(c);
      }, function() {
        var c;
        a2 = false, (c = r.complete) === null || c === void 0 || c.call(r), o.complete();
      }, function(c) {
        var l;
        a2 = false, (l = r.error) === null || l === void 0 || l.call(r, c), o.error(c);
      }, function() {
        var c, l;
        a2 && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r);
      }));
    }) : $o;
  }
  var Wp = { leading: true, trailing: false };
  function h0(t, e) {
    return e === void 0 && (e = Wp), Et(function(n, r) {
      var i = e.leading, o = e.trailing, s = false, a2 = null, c = null, l = false, u2 = function() {
        c?.unsubscribe(), c = null, o && (h2(), l && r.complete());
      }, f = function() {
        c = null, l && r.complete();
      }, d3 = function(p) {
        return c = Ln(t(p)).subscribe(at(r, u2, f));
      }, h2 = function() {
        if (s) {
          s = false;
          var p = a2;
          a2 = null, r.next(p), !l && d3(p);
        }
      };
      n.subscribe(at(r, function(p) {
        s = true, a2 = p, !(c && !c.closed) && (i ? h2() : d3(p));
      }, function() {
        l = true, !(o && s && c && !c.closed) && r.complete();
      }));
    });
  }
  function p0(t, e, n) {
    e === void 0 && (e = Ua), n === void 0 && (n = Wp);
    var r = jp(t, e);
    return h0(function() {
      return r;
    }, n);
  }
  function Ur(t) {
    return typeof t == "function" ? Ur(t()) : Mb(t) ? Qo(t) : Promise.resolve(t);
  }
  function Vp(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }
  var { toString: g0 } = Object.prototype;
  var { getPrototypeOf: Vc } = Object;
  var { iterator: Ba, toStringTag: qp } = Symbol;
  var ja = /* @__PURE__ */ ((t) => (e) => {
    const n = g0.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var Fn = (t) => (t = t.toLowerCase(), (e) => ja(e) === t);
  var Ha = (t) => (e) => typeof e === t;
  var { isArray: To } = Array;
  var vo = Ha("undefined");
  function ws(t) {
    return t !== null && !vo(t) && t.constructor !== null && !vo(t.constructor) && Yt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
  }
  var Gp = Fn("ArrayBuffer");
  function m0(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Gp(t.buffer), e;
  }
  var v0 = Ha("string");
  var Yt = Ha("function");
  var Xp = Ha("number");
  var xs = (t) => t !== null && typeof t == "object";
  var y0 = (t) => t === true || t === false;
  var Zs = (t) => {
    if (ja(t) !== "object") return false;
    const e = Vc(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(qp in t) && !(Ba in t);
  };
  var b0 = (t) => {
    if (!xs(t) || ws(t)) return false;
    try {
      return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
    } catch {
      return false;
    }
  };
  var _0 = Fn("Date");
  var w0 = Fn("File");
  var x0 = Fn("Blob");
  var S0 = Fn("FileList");
  var E0 = (t) => xs(t) && Yt(t.pipe);
  var C0 = (t) => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Yt(t.append) && ((e = ja(t)) === "formdata" || e === "object" && Yt(t.toString) && t.toString() === "[object FormData]"));
  };
  var A0 = Fn("URLSearchParams");
  var [I0, $0, T0, k0] = ["ReadableStream", "Request", "Response", "Headers"].map(Fn);
  var R0 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Ss(t, e, { allOwnKeys: n = false } = {}) {
    if (t === null || typeof t > "u") return;
    let r, i;
    if (typeof t != "object" && (t = [t]), To(t)) for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
    else {
      if (ws(t)) return;
      const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = o.length;
      let a2;
      for (r = 0; r < s; r++) a2 = o[r], e.call(null, t[a2], a2, t);
    }
  }
  function Kp(t, e) {
    if (ws(t)) return null;
    e = e.toLowerCase();
    const n = Object.keys(t);
    let r = n.length, i;
    for (; r-- > 0; ) if (i = n[r], e === i.toLowerCase()) return i;
    return null;
  }
  var si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global;
  var Jp = (t) => !vo(t) && t !== si;
  function Zl() {
    const { caseless: t, skipUndefined: e } = Jp(this) && this || {}, n = {}, r = (i, o) => {
      const s = t && Kp(n, o) || o;
      Zs(n[s]) && Zs(i) ? n[s] = Zl(n[s], i) : Zs(i) ? n[s] = Zl({}, i) : To(i) ? n[s] = i.slice() : (!e || !vo(i)) && (n[s] = i);
    };
    for (let i = 0, o = arguments.length; i < o; i++) arguments[i] && Ss(arguments[i], r);
    return n;
  }
  var O0 = (t, e, n, { allOwnKeys: r } = {}) => (Ss(e, (i, o) => {
    n && Yt(i) ? Object.defineProperty(t, o, { value: Vp(i, n), writable: true, enumerable: true, configurable: true }) : Object.defineProperty(t, o, { value: i, writable: true, enumerable: true, configurable: true });
  }, { allOwnKeys: r }), t);
  var P0 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t);
  var D0 = (t, e, n, r) => {
    t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", { value: t, writable: true, enumerable: false, configurable: true }), Object.defineProperty(t, "super", { value: e.prototype }), n && Object.assign(t.prototype, n);
  };
  var M0 = (t, e, n, r) => {
    let i, o, s;
    const a2 = {};
    if (e = e || {}, t == null) return e;
    do {
      for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; ) s = i[o], (!r || r(s, t, e)) && !a2[s] && (e[s] = t[s], a2[s] = true);
      t = n !== false && Vc(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  };
  var L0 = (t, e, n) => {
    t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  };
  var F0 = (t) => {
    if (!t) return null;
    if (To(t)) return t;
    let e = t.length;
    if (!Xp(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  };
  var N0 = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Vc(Uint8Array));
  var U0 = (t, e) => {
    const n = (t && t[Ba]).call(t);
    let r;
    for (; (r = n.next()) && !r.done; ) {
      const i = r.value;
      e.call(t, i[0], i[1]);
    }
  };
  var B0 = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  };
  var j0 = Fn("HTMLFormElement");
  var H0 = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, n, r) {
    return n.toUpperCase() + r;
  });
  var Nf = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype);
  var z0 = Fn("RegExp");
  var Yp = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t), r = {};
    Ss(n, (i, o) => {
      let s;
      (s = e(i, o, t)) !== false && (r[o] = s || i);
    }), Object.defineProperties(t, r);
  };
  var W0 = (t) => {
    Yp(t, (e, n) => {
      if (Yt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return false;
      const r = t[n];
      if (Yt(r)) {
        if (e.enumerable = false, "writable" in e) {
          e.writable = false;
          return;
        }
        e.set || (e.set = () => {
          throw Error("Can not rewrite read-only method '" + n + "'");
        });
      }
    });
  };
  var V0 = (t, e) => {
    const n = {}, r = (i) => {
      i.forEach((o) => {
        n[o] = true;
      });
    };
    return To(t) ? r(t) : r(String(t).split(e)), n;
  };
  var q0 = () => {
  };
  var G0 = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
  function X0(t) {
    return !!(t && Yt(t.append) && t[qp] === "FormData" && t[Ba]);
  }
  var K0 = (t) => {
    const e = new Array(10), n = (r, i) => {
      if (xs(r)) {
        if (e.indexOf(r) >= 0) return;
        if (ws(r)) return r;
        if (!("toJSON" in r)) {
          e[i] = r;
          const o = To(r) ? [] : {};
          return Ss(r, (s, a2) => {
            const c = n(s, i + 1);
            !vo(c) && (o[a2] = c);
          }), e[i] = void 0, o;
        }
      }
      return r;
    };
    return n(t, 0);
  };
  var J0 = Fn("AsyncFunction");
  var Y0 = (t) => t && (xs(t) || Yt(t)) && Yt(t.then) && Yt(t.catch);
  var Qp = ((t, e) => t ? setImmediate : e ? ((n, r) => (si.addEventListener("message", ({ source: i, data: o }) => {
    i === si && o === n && r.length && r.shift()();
  }, false), (i) => {
    r.push(i), si.postMessage(n, "*");
  }))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Yt(si.postMessage));
  var Q0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(si) : typeof process < "u" && process.nextTick || Qp;
  var Z0 = (t) => t != null && Yt(t[Ba]);
  var I2 = { isArray: To, isArrayBuffer: Gp, isBuffer: ws, isFormData: C0, isArrayBufferView: m0, isString: v0, isNumber: Xp, isBoolean: y0, isObject: xs, isPlainObject: Zs, isEmptyObject: b0, isReadableStream: I0, isRequest: $0, isResponse: T0, isHeaders: k0, isUndefined: vo, isDate: _0, isFile: w0, isBlob: x0, isRegExp: z0, isFunction: Yt, isStream: E0, isURLSearchParams: A0, isTypedArray: N0, isFileList: S0, forEach: Ss, merge: Zl, extend: O0, trim: R0, stripBOM: P0, inherits: D0, toFlatObject: M0, kindOf: ja, kindOfTest: Fn, endsWith: L0, toArray: F0, forEachEntry: U0, matchAll: B0, isHTMLForm: j0, hasOwnProperty: Nf, hasOwnProp: Nf, reduceDescriptors: Yp, freezeMethods: W0, toObjectSet: V0, toCamelCase: H0, noop: q0, toFiniteNumber: G0, findKey: Kp, global: si, isContextDefined: Jp, isSpecCompliantForm: X0, toJSONObject: K0, isAsyncFn: J0, isThenable: Y0, setImmediate: Qp, asap: Q0, isIterable: Z0 };
  var Ut = class _Ut extends Error {
    static from(e, n, r, i, o, s) {
      const a2 = new _Ut(e.message, n || e.code, r, i, o);
      return a2.cause = e, a2.name = e.name, s && Object.assign(a2, s), a2;
    }
    constructor(e, n, r, i, o) {
      super(e), this.name = "AxiosError", this.isAxiosError = true, n && (this.code = n), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status);
    }
    toJSON() {
      return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: I2.toJSONObject(this.config), code: this.code, status: this.status };
    }
  };
  Ut.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
  Ut.ERR_BAD_OPTION = "ERR_BAD_OPTION";
  Ut.ECONNABORTED = "ECONNABORTED";
  Ut.ETIMEDOUT = "ETIMEDOUT";
  Ut.ERR_NETWORK = "ERR_NETWORK";
  Ut.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
  Ut.ERR_DEPRECATED = "ERR_DEPRECATED";
  Ut.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
  Ut.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
  Ut.ERR_CANCELED = "ERR_CANCELED";
  Ut.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
  Ut.ERR_INVALID_URL = "ERR_INVALID_URL";
  var we = Ut;
  var e_ = null;
  function ec(t) {
    return I2.isPlainObject(t) || I2.isArray(t);
  }
  function Zp(t) {
    return I2.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function Uf(t, e, n) {
    return t ? t.concat(e).map(function(r, i) {
      return r = Zp(r), !n && i ? "[" + r + "]" : r;
    }).join(n ? "." : "") : e;
  }
  function t_(t) {
    return I2.isArray(t) && !t.some(ec);
  }
  var n_ = I2.toFlatObject(I2, {}, null, function(t) {
    return /^is[A-Z]/.test(t);
  });
  function za(t, e, n) {
    if (!I2.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData(), n = I2.toFlatObject(n, { metaTokens: true, dots: false, indexes: false }, false, function(h2, p) {
      return !I2.isUndefined(p[h2]);
    });
    const r = n.metaTokens, i = n.visitor || l, o = n.dots, s = n.indexes, a2 = (n.Blob || typeof Blob < "u" && Blob) && I2.isSpecCompliantForm(e);
    if (!I2.isFunction(i)) throw new TypeError("visitor must be a function");
    function c(h2) {
      if (h2 === null) return "";
      if (I2.isDate(h2)) return h2.toISOString();
      if (I2.isBoolean(h2)) return h2.toString();
      if (!a2 && I2.isBlob(h2)) throw new we("Blob is not supported. Use a Buffer instead.");
      return I2.isArrayBuffer(h2) || I2.isTypedArray(h2) ? a2 && typeof Blob == "function" ? new Blob([h2]) : Buffer.from(h2) : h2;
    }
    function l(h2, p, g3) {
      let m2 = h2;
      if (h2 && !g3 && typeof h2 == "object") {
        if (I2.endsWith(p, "{}")) p = r ? p : p.slice(0, -2), h2 = JSON.stringify(h2);
        else if (I2.isArray(h2) && t_(h2) || (I2.isFileList(h2) || I2.endsWith(p, "[]")) && (m2 = I2.toArray(h2))) return p = Zp(p), m2.forEach(function(w4, v2) {
          !(I2.isUndefined(w4) || w4 === null) && e.append(s === true ? Uf([p], v2, o) : s === null ? p : p + "[]", c(w4));
        }), false;
      }
      return ec(h2) ? true : (e.append(Uf(g3, p, o), c(h2)), false);
    }
    const u2 = [], f = Object.assign(n_, { defaultVisitor: l, convertValue: c, isVisitable: ec });
    function d3(h2, p) {
      if (!I2.isUndefined(h2)) {
        if (u2.indexOf(h2) !== -1) throw Error("Circular reference detected in " + p.join("."));
        u2.push(h2), I2.forEach(h2, function(g3, m2) {
          (!(I2.isUndefined(g3) || g3 === null) && i.call(e, g3, I2.isString(m2) ? m2.trim() : m2, p, f)) === true && d3(g3, p ? p.concat(m2) : [m2]);
        }), u2.pop();
      }
    }
    if (!I2.isObject(t)) throw new TypeError("data must be an object");
    return d3(t), e;
  }
  function Bf(t) {
    const e = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
      return e[n];
    });
  }
  function qc(t, e) {
    this._pairs = [], t && za(t, this, e);
  }
  var eg = qc.prototype;
  eg.append = function(t, e) {
    this._pairs.push([t, e]);
  };
  eg.toString = function(t) {
    const e = t ? function(n) {
      return t.call(this, n, Bf);
    } : Bf;
    return this._pairs.map(function(n) {
      return e(n[0]) + "=" + e(n[1]);
    }, "").join("&");
  };
  function r_(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function tg(t, e, n) {
    if (!e) return t;
    const r = n && n.encode || r_, i = I2.isFunction(n) ? { serialize: n } : n, o = i && i.serialize;
    let s;
    if (o ? s = o(e, i) : s = I2.isURLSearchParams(e) ? e.toString() : new qc(e, i).toString(r), s) {
      const a2 = t.indexOf("#");
      a2 !== -1 && (t = t.slice(0, a2)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
    }
    return t;
  }
  var i_ = class {
    constructor() {
      this.handlers = [];
    }
    use(e, n, r) {
      return this.handlers.push({ fulfilled: e, rejected: n, synchronous: r ? r.synchronous : false, runWhen: r ? r.runWhen : null }), this.handlers.length - 1;
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(e) {
      I2.forEach(this.handlers, function(n) {
        n !== null && e(n);
      });
    }
  };
  var jf = i_;
  var ng = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false };
  var o_ = typeof URLSearchParams < "u" ? URLSearchParams : qc;
  var s_ = typeof FormData < "u" ? FormData : null;
  var a_ = typeof Blob < "u" ? Blob : null;
  var l_ = { isBrowser: true, classes: { URLSearchParams: o_, FormData: s_, Blob: a_ }, protocols: ["http", "https", "file", "blob", "url", "data"] };
  var Gc = typeof window < "u" && typeof document < "u";
  var tc = typeof navigator == "object" && navigator || void 0;
  var c_ = Gc && (!tc || ["ReactNative", "NativeScript", "NS"].indexOf(tc.product) < 0);
  var u_ = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  var f_ = Gc && window.location.href || "http://localhost";
  var d_ = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Gc, hasStandardBrowserEnv: c_, hasStandardBrowserWebWorkerEnv: u_, navigator: tc, origin: f_ }, Symbol.toStringTag, { value: "Module" }));
  var Rt = { ...d_, ...l_ };
  function h_(t, e) {
    return za(t, new Rt.classes.URLSearchParams(), { visitor: function(n, r, i, o) {
      return Rt.isNode && I2.isBuffer(n) ? (this.append(r, n.toString("base64")), false) : o.defaultVisitor.apply(this, arguments);
    }, ...e });
  }
  function p_(t) {
    return I2.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
  }
  function g_(t) {
    const e = {}, n = Object.keys(t);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) o = n[r], e[o] = t[o];
    return e;
  }
  function rg(t) {
    function e(n, r, i, o) {
      let s = n[o++];
      if (s === "__proto__") return true;
      const a2 = Number.isFinite(+s), c = o >= n.length;
      return s = !s && I2.isArray(i) ? i.length : s, c ? (I2.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a2) : ((!i[s] || !I2.isObject(i[s])) && (i[s] = []), e(n, r, i[s], o) && I2.isArray(i[s]) && (i[s] = g_(i[s])), !a2);
    }
    if (I2.isFormData(t) && I2.isFunction(t.entries)) {
      const n = {};
      return I2.forEachEntry(t, (r, i) => {
        e(p_(r), i, n, 0);
      }), n;
    }
    return null;
  }
  function m_(t, e, n) {
    if (I2.isString(t)) try {
      return (e || JSON.parse)(t), I2.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
    return (n || JSON.stringify)(t);
  }
  var Xc = { transitional: ng, adapter: ["xhr", "http", "fetch"], transformRequest: [function(t, e) {
    const n = e.getContentType() || "", r = n.indexOf("application/json") > -1, i = I2.isObject(t);
    if (i && I2.isHTMLForm(t) && (t = new FormData(t)), I2.isFormData(t)) return r ? JSON.stringify(rg(t)) : t;
    if (I2.isArrayBuffer(t) || I2.isBuffer(t) || I2.isStream(t) || I2.isFile(t) || I2.isBlob(t) || I2.isReadableStream(t)) return t;
    if (I2.isArrayBufferView(t)) return t.buffer;
    if (I2.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
    let o;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1) return h_(t, this.formSerializer).toString();
      if ((o = I2.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return za(o ? { "files[]": t } : t, s && new s(), this.formSerializer);
      }
    }
    return i || r ? (e.setContentType("application/json", false), m_(t)) : t;
  }], transformResponse: [function(t) {
    const e = this.transitional || Xc.transitional, n = e && e.forcedJSONParsing, r = this.responseType === "json";
    if (I2.isResponse(t) || I2.isReadableStream(t)) return t;
    if (t && I2.isString(t) && (n && !this.responseType || r)) {
      const i = !(e && e.silentJSONParsing) && r;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (o) {
        if (i) throw o.name === "SyntaxError" ? we.from(o, we.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return t;
  }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Rt.classes.FormData, Blob: Rt.classes.Blob }, validateStatus: function(t) {
    return t >= 200 && t < 300;
  }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
  I2.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Xc.headers[t] = {};
  });
  var Kc = Xc;
  var v_ = I2.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  var y_ = (t) => {
    const e = {};
    let n, r, i;
    return t && t.split(`
`).forEach(function(o) {
      i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || e[n] && v_[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
    }), e;
  };
  var Hf = Symbol("internals");
  function Lo(t) {
    return t && String(t).trim().toLowerCase();
  }
  function ea(t) {
    return t === false || t == null ? t : I2.isArray(t) ? t.map(ea) : String(t);
  }
  function b_(t) {
    const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(t); ) e[r[1]] = r[2];
    return e;
  }
  var __ = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
  function ol(t, e, n, r, i) {
    if (I2.isFunction(r)) return r.call(this, e, n);
    if (i && (e = n), !!I2.isString(e)) {
      if (I2.isString(r)) return e.indexOf(r) !== -1;
      if (I2.isRegExp(r)) return r.test(e);
    }
  }
  function w_(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
  }
  function x_(t, e) {
    const n = I2.toCamelCase(" " + e);
    ["get", "set", "has"].forEach((r) => {
      Object.defineProperty(t, r + n, { value: function(i, o, s) {
        return this[r].call(this, e, i, o, s);
      }, configurable: true });
    });
  }
  var Wa = class {
    constructor(e) {
      e && this.set(e);
    }
    set(e, n, r) {
      const i = this;
      function o(a2, c, l) {
        const u2 = Lo(c);
        if (!u2) throw new Error("header name must be a non-empty string");
        const f = I2.findKey(i, u2);
        (!f || i[f] === void 0 || l === true || l === void 0 && i[f] !== false) && (i[f || c] = ea(a2));
      }
      const s = (a2, c) => I2.forEach(a2, (l, u2) => o(l, u2, c));
      if (I2.isPlainObject(e) || e instanceof this.constructor) s(e, n);
      else if (I2.isString(e) && (e = e.trim()) && !__(e)) s(y_(e), n);
      else if (I2.isObject(e) && I2.isIterable(e)) {
        let a2 = {}, c, l;
        for (const u2 of e) {
          if (!I2.isArray(u2)) throw TypeError("Object iterator must return a key-value pair");
          a2[l = u2[0]] = (c = a2[l]) ? I2.isArray(c) ? [...c, u2[1]] : [c, u2[1]] : u2[1];
        }
        s(a2, n);
      } else e != null && o(n, e, r);
      return this;
    }
    get(e, n) {
      if (e = Lo(e), e) {
        const r = I2.findKey(this, e);
        if (r) {
          const i = this[r];
          if (!n) return i;
          if (n === true) return b_(i);
          if (I2.isFunction(n)) return n.call(this, i, r);
          if (I2.isRegExp(n)) return n.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, n) {
      if (e = Lo(e), e) {
        const r = I2.findKey(this, e);
        return !!(r && this[r] !== void 0 && (!n || ol(this, this[r], r, n)));
      }
      return false;
    }
    delete(e, n) {
      const r = this;
      let i = false;
      function o(s) {
        if (s = Lo(s), s) {
          const a2 = I2.findKey(r, s);
          a2 && (!n || ol(r, r[a2], a2, n)) && (delete r[a2], i = true);
        }
      }
      return I2.isArray(e) ? e.forEach(o) : o(e), i;
    }
    clear(e) {
      const n = Object.keys(this);
      let r = n.length, i = false;
      for (; r--; ) {
        const o = n[r];
        (!e || ol(this, this[o], o, e, true)) && (delete this[o], i = true);
      }
      return i;
    }
    normalize(e) {
      const n = this, r = {};
      return I2.forEach(this, (i, o) => {
        const s = I2.findKey(r, o);
        if (s) {
          n[s] = ea(i), delete n[o];
          return;
        }
        const a2 = e ? w_(o) : String(o).trim();
        a2 !== o && delete n[o], n[a2] = ea(i), r[a2] = true;
      }), this;
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const n = /* @__PURE__ */ Object.create(null);
      return I2.forEach(this, (r, i) => {
        r != null && r !== false && (n[i] = e && I2.isArray(r) ? r.join(", ") : r);
      }), n;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...n) {
      const r = new this(e);
      return n.forEach((i) => r.set(i)), r;
    }
    static accessor(e) {
      const n = (this[Hf] = this[Hf] = { accessors: {} }).accessors, r = this.prototype;
      function i(o) {
        const s = Lo(o);
        n[s] || (x_(r, o), n[s] = true);
      }
      return I2.isArray(e) ? e.forEach(i) : i(e), this;
    }
  };
  Wa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  I2.reduceDescriptors(Wa.prototype, ({ value: t }, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return { get: () => t, set(r) {
      this[n] = r;
    } };
  });
  I2.freezeMethods(Wa);
  var Pn = Wa;
  function sl(t, e) {
    const n = this || Kc, r = e || n, i = Pn.from(r.headers);
    let o = r.data;
    return I2.forEach(t, function(s) {
      o = s.call(n, o, i.normalize(), e ? e.status : void 0);
    }), i.normalize(), o;
  }
  function ig(t) {
    return !!(t && t.__CANCEL__);
  }
  var S_ = class extends we {
    constructor(e, n, r) {
      super(e ?? "canceled", we.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = true;
    }
  };
  var Es = S_;
  function og(t, e, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? t(n) : e(new we("Request failed with status code " + n.status, [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
  }
  function E_(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || "";
  }
  function C_(t, e) {
    t = t || 10;
    const n = new Array(t), r = new Array(t);
    let i = 0, o = 0, s;
    return e = e !== void 0 ? e : 1e3, function(a2) {
      const c = Date.now(), l = r[o];
      s || (s = c), n[i] = a2, r[i] = c;
      let u2 = o, f = 0;
      for (; u2 !== i; ) f += n[u2++], u2 = u2 % t;
      if (i = (i + 1) % t, i === o && (o = (o + 1) % t), c - s < e) return;
      const d3 = l && c - l;
      return d3 ? Math.round(f * 1e3 / d3) : void 0;
    };
  }
  function A_(t, e) {
    let n = 0, r = 1e3 / e, i, o;
    const s = (a2, c = Date.now()) => {
      n = c, i = null, o && (clearTimeout(o), o = null), t(...a2);
    };
    return [(...a2) => {
      const c = Date.now(), l = c - n;
      l >= r ? s(a2, c) : (i = a2, o || (o = setTimeout(() => {
        o = null, s(i);
      }, r - l)));
    }, () => i && s(i)];
  }
  var da = (t, e, n = 3) => {
    let r = 0;
    const i = C_(50, 250);
    return A_((o) => {
      const s = o.loaded, a2 = o.lengthComputable ? o.total : void 0, c = s - r, l = i(c), u2 = s <= a2;
      r = s;
      const f = { loaded: s, total: a2, progress: a2 ? s / a2 : void 0, bytes: c, rate: l || void 0, estimated: l && a2 && u2 ? (a2 - s) / l : void 0, event: o, lengthComputable: a2 != null, [e ? "download" : "upload"]: true };
      t(f);
    }, n);
  };
  var zf = (t, e) => {
    const n = t != null;
    return [(r) => e[0]({ lengthComputable: n, total: t, loaded: r }), e[1]];
  };
  var Wf = (t) => (...e) => I2.asap(() => t(...e));
  var I_ = Rt.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, Rt.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(new URL(Rt.origin), Rt.navigator && /(msie|trident)/i.test(Rt.navigator.userAgent)) : () => true;
  var $_ = Rt.hasStandardBrowserEnv ? { write(t, e, n, r, i, o, s) {
    if (typeof document > "u") return;
    const a2 = [`${t}=${encodeURIComponent(e)}`];
    I2.isNumber(n) && a2.push(`expires=${new Date(n).toUTCString()}`), I2.isString(r) && a2.push(`path=${r}`), I2.isString(i) && a2.push(`domain=${i}`), o === true && a2.push("secure"), I2.isString(s) && a2.push(`SameSite=${s}`), document.cookie = a2.join("; ");
  }, read(t) {
    if (typeof document > "u") return null;
    const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
    return e ? decodeURIComponent(e[1]) : null;
  }, remove(t) {
    this.write(t, "", Date.now() - 864e5, "/");
  } } : { write() {
  }, read() {
    return null;
  }, remove() {
  } };
  function T_(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }
  function k_(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
  }
  function sg(t, e, n) {
    let r = !T_(e);
    return t && (r || n == false) ? k_(t, e) : e;
  }
  var Vf = (t) => t instanceof Pn ? { ...t } : t;
  function $i(t, e) {
    e = e || {};
    const n = {};
    function r(l, u2, f, d3) {
      return I2.isPlainObject(l) && I2.isPlainObject(u2) ? I2.merge.call({ caseless: d3 }, l, u2) : I2.isPlainObject(u2) ? I2.merge({}, u2) : I2.isArray(u2) ? u2.slice() : u2;
    }
    function i(l, u2, f, d3) {
      if (I2.isUndefined(u2)) {
        if (!I2.isUndefined(l)) return r(void 0, l, f, d3);
      } else return r(l, u2, f, d3);
    }
    function o(l, u2) {
      if (!I2.isUndefined(u2)) return r(void 0, u2);
    }
    function s(l, u2) {
      if (I2.isUndefined(u2)) {
        if (!I2.isUndefined(l)) return r(void 0, l);
      } else return r(void 0, u2);
    }
    function a2(l, u2, f) {
      if (f in e) return r(l, u2);
      if (f in t) return r(void 0, l);
    }
    const c = { url: o, method: o, data: o, baseURL: s, transformRequest: s, transformResponse: s, paramsSerializer: s, timeout: s, timeoutMessage: s, withCredentials: s, withXSRFToken: s, adapter: s, responseType: s, xsrfCookieName: s, xsrfHeaderName: s, onUploadProgress: s, onDownloadProgress: s, decompress: s, maxContentLength: s, maxBodyLength: s, beforeRedirect: s, transport: s, httpAgent: s, httpsAgent: s, cancelToken: s, socketPath: s, responseEncoding: s, validateStatus: a2, headers: (l, u2, f) => i(Vf(l), Vf(u2), f, true) };
    return I2.forEach(Object.keys({ ...t, ...e }), function(l) {
      const u2 = c[l] || i, f = u2(t[l], e[l], l);
      I2.isUndefined(f) && u2 !== a2 || (n[l] = f);
    }), n;
  }
  var ag = (t) => {
    const e = $i({}, t);
    let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a2 } = e;
    if (e.headers = s = Pn.from(s), e.url = tg(sg(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a2 && s.set("Authorization", "Basic " + btoa((a2.username || "") + ":" + (a2.password ? unescape(encodeURIComponent(a2.password)) : ""))), I2.isFormData(n)) {
      if (Rt.hasStandardBrowserEnv || Rt.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
      else if (I2.isFunction(n.getHeaders)) {
        const c = n.getHeaders(), l = ["content-type", "content-length"];
        Object.entries(c).forEach(([u2, f]) => {
          l.includes(u2.toLowerCase()) && s.set(u2, f);
        });
      }
    }
    if (Rt.hasStandardBrowserEnv && (r && I2.isFunction(r) && (r = r(e)), r || r !== false && I_(e.url))) {
      const c = i && o && $_.read(o);
      c && s.set(i, c);
    }
    return e;
  };
  var R_ = typeof XMLHttpRequest < "u";
  var O_ = R_ && function(t) {
    return new Promise(function(e, n) {
      const r = ag(t);
      let i = r.data;
      const o = Pn.from(r.headers).normalize();
      let { responseType: s, onUploadProgress: a2, onDownloadProgress: c } = r, l, u2, f, d3, h2;
      function p() {
        d3 && d3(), h2 && h2(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
      }
      let g3 = new XMLHttpRequest();
      g3.open(r.method.toUpperCase(), r.url, true), g3.timeout = r.timeout;
      function m2() {
        if (!g3) return;
        const v2 = Pn.from("getAllResponseHeaders" in g3 && g3.getAllResponseHeaders()), y3 = { data: !s || s === "text" || s === "json" ? g3.responseText : g3.response, status: g3.status, statusText: g3.statusText, headers: v2, config: t, request: g3 };
        og(function(b2) {
          e(b2), p();
        }, function(b2) {
          n(b2), p();
        }, y3), g3 = null;
      }
      "onloadend" in g3 ? g3.onloadend = m2 : g3.onreadystatechange = function() {
        !g3 || g3.readyState !== 4 || g3.status === 0 && !(g3.responseURL && g3.responseURL.indexOf("file:") === 0) || setTimeout(m2);
      }, g3.onabort = function() {
        g3 && (n(new we("Request aborted", we.ECONNABORTED, t, g3)), g3 = null);
      }, g3.onerror = function(v2) {
        const y3 = v2 && v2.message ? v2.message : "Network Error", b2 = new we(y3, we.ERR_NETWORK, t, g3);
        b2.event = v2 || null, n(b2), g3 = null;
      }, g3.ontimeout = function() {
        let v2 = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
        const y3 = r.transitional || ng;
        r.timeoutErrorMessage && (v2 = r.timeoutErrorMessage), n(new we(v2, y3.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED, t, g3)), g3 = null;
      }, i === void 0 && o.setContentType(null), "setRequestHeader" in g3 && I2.forEach(o.toJSON(), function(v2, y3) {
        g3.setRequestHeader(y3, v2);
      }), I2.isUndefined(r.withCredentials) || (g3.withCredentials = !!r.withCredentials), s && s !== "json" && (g3.responseType = r.responseType), c && ([f, h2] = da(c, true), g3.addEventListener("progress", f)), a2 && g3.upload && ([u2, d3] = da(a2), g3.upload.addEventListener("progress", u2), g3.upload.addEventListener("loadend", d3)), (r.cancelToken || r.signal) && (l = (v2) => {
        g3 && (n(!v2 || v2.type ? new Es(null, t, g3) : v2), g3.abort(), g3 = null);
      }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
      const w4 = E_(r.url);
      if (w4 && Rt.protocols.indexOf(w4) === -1) {
        n(new we("Unsupported protocol " + w4 + ":", we.ERR_BAD_REQUEST, t));
        return;
      }
      g3.send(i || null);
    });
  };
  var P_ = (t, e) => {
    const { length: n } = t = t ? t.filter(Boolean) : [];
    if (e || n) {
      let r = new AbortController(), i;
      const o = function(l) {
        if (!i) {
          i = true, a2();
          const u2 = l instanceof Error ? l : this.reason;
          r.abort(u2 instanceof we ? u2 : new Es(u2 instanceof Error ? u2.message : u2));
        }
      };
      let s = e && setTimeout(() => {
        s = null, o(new we(`timeout of ${e}ms exceeded`, we.ETIMEDOUT));
      }, e);
      const a2 = () => {
        t && (s && clearTimeout(s), s = null, t.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
        }), t = null);
      };
      t.forEach((l) => l.addEventListener("abort", o));
      const { signal: c } = r;
      return c.unsubscribe = () => I2.asap(a2), c;
    }
  };
  var D_ = P_;
  var M_ = function* (t, e) {
    let n = t.byteLength;
    if (n < e) {
      yield t;
      return;
    }
    let r = 0, i;
    for (; r < n; ) i = r + e, yield t.slice(r, i), r = i;
  };
  var L_ = async function* (t, e) {
    for await (const n of F_(t)) yield* M_(n, e);
  };
  var F_ = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const e = t.getReader();
    try {
      for (; ; ) {
        const { done: n, value: r } = await e.read();
        if (n) break;
        yield r;
      }
    } finally {
      await e.cancel();
    }
  };
  var qf = (t, e, n, r) => {
    const i = L_(t, e);
    let o = 0, s, a2 = (c) => {
      s || (s = true, r && r(c));
    };
    return new ReadableStream({ async pull(c) {
      try {
        const { done: l, value: u2 } = await i.next();
        if (l) {
          a2(), c.close();
          return;
        }
        let f = u2.byteLength;
        if (n) {
          let d3 = o += f;
          n(d3);
        }
        c.enqueue(new Uint8Array(u2));
      } catch (l) {
        throw a2(l), l;
      }
    }, cancel(c) {
      return a2(c), i.return();
    } }, { highWaterMark: 2 });
  };
  var Gf = 64 * 1024;
  var { isFunction: Fs } = I2;
  var N_ = (({ Request: t, Response: e }) => ({ Request: t, Response: e }))(I2.global);
  var { ReadableStream: Xf, TextEncoder: Kf } = I2.global;
  var Jf = (t, ...e) => {
    try {
      return !!t(...e);
    } catch {
      return false;
    }
  };
  var U_ = (t) => {
    t = I2.merge.call({ skipUndefined: true }, N_, t);
    const { fetch: e, Request: n, Response: r } = t, i = e ? Fs(e) : typeof fetch == "function", o = Fs(n), s = Fs(r);
    if (!i) return false;
    const a2 = i && Fs(Xf), c = i && (typeof Kf == "function" ? /* @__PURE__ */ ((p) => (g3) => p.encode(g3))(new Kf()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), l = o && a2 && Jf(() => {
      let p = false;
      const g3 = new n(Rt.origin, { body: new Xf(), method: "POST", get duplex() {
        return p = true, "half";
      } }).headers.has("Content-Type");
      return p && !g3;
    }), u2 = s && a2 && Jf(() => I2.isReadableStream(new r("").body)), f = { stream: u2 && ((p) => p.body) };
    i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
      !f[p] && (f[p] = (g3, m2) => {
        let w4 = g3 && g3[p];
        if (w4) return w4.call(g3);
        throw new we(`Response type '${p}' is not supported`, we.ERR_NOT_SUPPORT, m2);
      });
    });
    const d3 = async (p) => {
      if (p == null) return 0;
      if (I2.isBlob(p)) return p.size;
      if (I2.isSpecCompliantForm(p)) return (await new n(Rt.origin, { method: "POST", body: p }).arrayBuffer()).byteLength;
      if (I2.isArrayBufferView(p) || I2.isArrayBuffer(p)) return p.byteLength;
      if (I2.isURLSearchParams(p) && (p = p + ""), I2.isString(p)) return (await c(p)).byteLength;
    }, h2 = async (p, g3) => I2.toFiniteNumber(p.getContentLength()) ?? d3(g3);
    return async (p) => {
      let { url: g3, method: m2, data: w4, signal: v2, cancelToken: y3, timeout: b2, onDownloadProgress: _4, onUploadProgress: C3, responseType: x2, headers: S2, withCredentials: D3 = "same-origin", fetchOptions: K2 } = ag(p), ce4 = e || fetch;
      x2 = x2 ? (x2 + "").toLowerCase() : "text";
      let ue2 = D_([v2, y3 && y3.toAbortSignal()], b2), M3 = null;
      const ee = ue2 && ue2.unsubscribe && (() => {
        ue2.unsubscribe();
      });
      let H3;
      try {
        if (C3 && l && m2 !== "get" && m2 !== "head" && (H3 = await h2(S2, w4)) !== 0) {
          let re = new n(g3, { method: "POST", body: w4, duplex: "half" }), ze;
          if (I2.isFormData(w4) && (ze = re.headers.get("content-type")) && S2.setContentType(ze), re.body) {
            const [te, ut2] = zf(H3, da(Wf(C3)));
            w4 = qf(re.body, Gf, te, ut2);
          }
        }
        I2.isString(D3) || (D3 = D3 ? "include" : "omit");
        const Se3 = o && "credentials" in n.prototype, He = { ...K2, signal: ue2, method: m2.toUpperCase(), headers: S2.normalize().toJSON(), body: w4, duplex: "half", credentials: Se3 ? D3 : void 0 };
        M3 = o && new n(g3, He);
        let G4 = await (o ? ce4(M3, K2) : ce4(g3, He));
        const se3 = u2 && (x2 === "stream" || x2 === "response");
        if (u2 && (_4 || se3 && ee)) {
          const re = {};
          ["status", "statusText", "headers"].forEach((Dt3) => {
            re[Dt3] = G4[Dt3];
          });
          const ze = I2.toFiniteNumber(G4.headers.get("content-length")), [te, ut2] = _4 && zf(ze, da(Wf(_4), true)) || [];
          G4 = new r(qf(G4.body, Gf, te, () => {
            ut2 && ut2(), ee && ee();
          }), re);
        }
        x2 = x2 || "text";
        let et2 = await f[I2.findKey(f, x2) || "text"](G4, p);
        return !se3 && ee && ee(), await new Promise((re, ze) => {
          og(re, ze, { data: et2, headers: Pn.from(G4.headers), status: G4.status, statusText: G4.statusText, config: p, request: M3 });
        });
      } catch (Se3) {
        throw ee && ee(), Se3 && Se3.name === "TypeError" && /Load failed|fetch/i.test(Se3.message) ? Object.assign(new we("Network Error", we.ERR_NETWORK, p, M3), { cause: Se3.cause || Se3 }) : we.from(Se3, Se3 && Se3.code, p, M3);
      }
    };
  };
  var B_ = /* @__PURE__ */ new Map();
  var lg = (t) => {
    let e = t && t.env || {};
    const { fetch: n, Request: r, Response: i } = e, o = [r, i, n];
    let s = o.length, a2 = s, c, l, u2 = B_;
    for (; a2--; ) c = o[a2], l = u2.get(c), l === void 0 && u2.set(c, l = a2 ? /* @__PURE__ */ new Map() : U_(e)), u2 = l;
    return l;
  };
  lg();
  var Jc = { http: e_, xhr: O_, fetch: { get: lg } };
  I2.forEach(Jc, (t, e) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: e });
      } catch {
      }
      Object.defineProperty(t, "adapterName", { value: e });
    }
  });
  var Yf = (t) => `- ${t}`;
  var j_ = (t) => I2.isFunction(t) || t === null || t === false;
  function H_(t, e) {
    t = I2.isArray(t) ? t : [t];
    const { length: n } = t;
    let r, i;
    const o = {};
    for (let s = 0; s < n; s++) {
      r = t[s];
      let a2;
      if (i = r, !j_(r) && (i = Jc[(a2 = String(r)).toLowerCase()], i === void 0)) throw new we(`Unknown adapter '${a2}'`);
      if (i && (I2.isFunction(i) || (i = i.get(e)))) break;
      o[a2 || "#" + s] = i;
    }
    if (!i) {
      const s = Object.entries(o).map(([c, l]) => `adapter ${c} ` + (l === false ? "is not supported by the environment" : "is not available in the build"));
      let a2 = n ? s.length > 1 ? `since :
` + s.map(Yf).join(`
`) : " " + Yf(s[0]) : "as no adapter specified";
      throw new we("There is no suitable adapter to dispatch the request " + a2, "ERR_NOT_SUPPORT");
    }
    return i;
  }
  var cg = { getAdapter: H_, adapters: Jc };
  function al(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Es(null, t);
  }
  function Qf(t) {
    return al(t), t.headers = Pn.from(t.headers), t.data = sl.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", false), cg.getAdapter(t.adapter || Kc.adapter, t)(t).then(function(e) {
      return al(t), e.data = sl.call(t, t.transformResponse, e), e.headers = Pn.from(e.headers), e;
    }, function(e) {
      return ig(e) || (al(t), e && e.response && (e.response.data = sl.call(t, t.transformResponse, e.response), e.response.headers = Pn.from(e.response.headers))), Promise.reject(e);
    });
  }
  var ug = "1.13.3";
  var Va = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Va[t] = function(n) {
      return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  });
  var Zf = {};
  Va.transitional = function(t, e, n) {
    function r(i, o) {
      return "[Axios v" + ug + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
    }
    return (i, o, s) => {
      if (t === false) throw new we(r(o, " has been removed" + (e ? " in " + e : "")), we.ERR_DEPRECATED);
      return e && !Zf[o] && (Zf[o] = true, console.warn(r(o, " has been deprecated since v" + e + " and will be removed in the near future"))), t ? t(i, o, s) : true;
    };
  };
  Va.spelling = function(t) {
    return (e, n) => (console.warn(`${n} is likely a misspelling of ${t}`), true);
  };
  function z_(t, e, n) {
    if (typeof t != "object") throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(t);
    let i = r.length;
    for (; i-- > 0; ) {
      const o = r[i], s = e[o];
      if (s) {
        const a2 = t[o], c = a2 === void 0 || s(a2, o, t);
        if (c !== true) throw new we("option " + o + " must be " + c, we.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (n !== true) throw new we("Unknown option " + o, we.ERR_BAD_OPTION);
    }
  }
  var ta = { assertOptions: z_, validators: Va };
  var Bn = ta.validators;
  var ha = class {
    constructor(e) {
      this.defaults = e || {}, this.interceptors = { request: new jf(), response: new jf() };
    }
    async request(e, n) {
      try {
        return await this._request(e, n);
      } catch (r) {
        if (r instanceof Error) {
          let i = {};
          Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
          const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
          try {
            r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
          } catch {
          }
        }
        throw r;
      }
    }
    _request(e, n) {
      typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = $i(this.defaults, n);
      const { transitional: r, paramsSerializer: i, headers: o } = n;
      r !== void 0 && ta.assertOptions(r, { silentJSONParsing: Bn.transitional(Bn.boolean), forcedJSONParsing: Bn.transitional(Bn.boolean), clarifyTimeoutError: Bn.transitional(Bn.boolean) }, false), i != null && (I2.isFunction(i) ? n.paramsSerializer = { serialize: i } : ta.assertOptions(i, { encode: Bn.function, serialize: Bn.function }, true)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = true), ta.assertOptions(n, { baseUrl: Bn.spelling("baseURL"), withXsrfToken: Bn.spelling("withXSRFToken") }, true), n.method = (n.method || this.defaults.method || "get").toLowerCase();
      let s = o && I2.merge(o.common, o[n.method]);
      o && I2.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
        delete o[p];
      }), n.headers = Pn.concat(s, o);
      const a2 = [];
      let c = true;
      this.interceptors.request.forEach(function(p) {
        typeof p.runWhen == "function" && p.runWhen(n) === false || (c = c && p.synchronous, a2.unshift(p.fulfilled, p.rejected));
      });
      const l = [];
      this.interceptors.response.forEach(function(p) {
        l.push(p.fulfilled, p.rejected);
      });
      let u2, f = 0, d3;
      if (!c) {
        const p = [Qf.bind(this), void 0];
        p.unshift(...a2), p.push(...l), d3 = p.length, u2 = Promise.resolve(n);
        let g3 = n;
        for (; f < d3; ) u2 = u2.then(p[f++]).then((m2) => {
          g3 = m2 !== void 0 ? m2 : g3;
        }).catch(p[f++]).then(() => g3);
        return u2;
      }
      d3 = a2.length;
      let h2 = n;
      for (; f < d3; ) {
        const p = a2[f++], g3 = a2[f++];
        try {
          h2 = p(h2);
        } catch (m2) {
          g3.call(this, m2);
          break;
        }
      }
      try {
        u2 = Qf.call(this, h2);
      } catch (p) {
        return Promise.reject(p);
      }
      for (f = 0, d3 = l.length; f < d3; ) u2 = u2.then(l[f++]).catch(l[f++]);
      return u2;
    }
    getUri(e) {
      e = $i(this.defaults, e);
      const n = sg(e.baseURL, e.url, e.allowAbsoluteUrls);
      return tg(n, e.params, e.paramsSerializer);
    }
  };
  I2.forEach(["delete", "get", "head", "options"], function(t) {
    ha.prototype[t] = function(e, n) {
      return this.request($i(n || {}, { method: t, url: e, data: (n || {}).data }));
    };
  });
  I2.forEach(["post", "put", "patch"], function(t) {
    function e(n) {
      return function(r, i, o) {
        return this.request($i(o || {}, { method: t, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: i }));
      };
    }
    ha.prototype[t] = e(), ha.prototype[t + "Form"] = e(true);
  });
  var na = ha;
  var Yc = class _Yc {
    constructor(e) {
      if (typeof e != "function") throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function(i) {
        n = i;
      });
      const r = this;
      this.promise.then((i) => {
        if (!r._listeners) return;
        let o = r._listeners.length;
        for (; o-- > 0; ) r._listeners[o](i);
        r._listeners = null;
      }), this.promise.then = (i) => {
        let o;
        const s = new Promise((a2) => {
          r.subscribe(a2), o = a2;
        }).then(i);
        return s.cancel = function() {
          r.unsubscribe(o);
        }, s;
      }, e(function(i, o, s) {
        r.reason || (r.reason = new Es(i, o, s), n(r.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      if (this.reason) {
        e(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(e) : this._listeners = [e];
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(e);
      n !== -1 && this._listeners.splice(n, 1);
    }
    toAbortSignal() {
      const e = new AbortController(), n = (r) => {
        e.abort(r);
      };
      return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
    }
    static source() {
      let e;
      return { token: new _Yc(function(n) {
        e = n;
      }), cancel: e };
    }
  };
  var W_ = Yc;
  function V_(t) {
    return function(e) {
      return t.apply(null, e);
    };
  }
  function q_(t) {
    return I2.isObject(t) && t.isAxiosError === true;
  }
  var nc = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
  Object.entries(nc).forEach(([t, e]) => {
    nc[e] = t;
  });
  var G_ = nc;
  function fg(t) {
    const e = new na(t), n = Vp(na.prototype.request, e);
    return I2.extend(n, na.prototype, e, { allOwnKeys: true }), I2.extend(n, e, null, { allOwnKeys: true }), n.create = function(r) {
      return fg($i(t, r));
    }, n;
  }
  var nt2 = fg(Kc);
  nt2.Axios = na;
  nt2.CanceledError = Es;
  nt2.CancelToken = W_;
  nt2.isCancel = ig;
  nt2.VERSION = ug;
  nt2.toFormData = za;
  nt2.AxiosError = we;
  nt2.Cancel = nt2.CanceledError;
  nt2.all = function(t) {
    return Promise.all(t);
  };
  nt2.spread = V_;
  nt2.isAxiosError = q_;
  nt2.mergeConfig = $i;
  nt2.AxiosHeaders = Pn;
  nt2.formToJSON = (t) => rg(I2.isHTMLForm(t) ? new FormData(t) : t);
  nt2.getAdapter = cg.getAdapter;
  nt2.HttpStatusCode = G_;
  nt2.default = nt2;
  var Be = nt2;
  var ed = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var ko = class {
    constructor(e, n) {
      this.httpConfig = e, this.accessToken = n;
    }
    getAuthorizationHeader() {
      return ed(this, void 0, void 0, function* () {
        return { Authorization: `Bearer ${yield Ur(this.accessToken)}` };
      });
    }
    getAccessToken() {
      return Ur(this.accessToken);
    }
    getStructureUrl() {
      return ed(this, void 0, void 0, function* () {
        const e = yield Ur(this.httpConfig);
        return `${e.Services.BaseUri}${e.Services.Structure}`;
      });
    }
    static requestHttpConfig(e) {
      return Be.get(`${e}/assets/conf/application.config`).then((n) => n.data);
    }
    static isApiReachable(e) {
      return Be.get(`${e}/api/structure/about/version`).then((n) => n.status === 200 || n.status === 401).catch((n) => {
        var r;
        return ((r = n?.response) === null || r === void 0 ? void 0 : r.status) === 401;
      });
    }
  };
  var un = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var Ti = class extends ko {
    constructor(e, n) {
      super(e, n);
    }
    getEntityById(e, n) {
      return un(this, void 0, void 0, function* () {
        return this.getPartialEntityById(e, n, null);
      });
    }
    getPartialEntityById(e, n, r) {
      return un(this, void 0, void 0, function* () {
        let i = `${yield this._createBaseUrlByType(e)}/${n}`;
        r && (i += `?$projection=${JSON.stringify(r)}`);
        const o = yield this.getAuthorizationHeader();
        return (yield Be.get(i, { headers: o })).data;
      });
    }
    queryConfiguration(e, n, r, i) {
      return un(this, void 0, void 0, function* () {
        const o = `${yield this._createBaseUrlByType(e)}/query`, s = { $filter: JSON.stringify(n), $paging: r ? JSON.stringify(r) : null, $projection: i ? JSON.stringify(i) : null }, a2 = yield this.getAuthorizationHeader(), c = yield Be.post(o, s, { headers: a2 });
        if (r) {
          console.log(c.headers);
          const l = JSON.parse(c.headers["paging-headers"]), u2 = Number(l.TotalCount);
          return { data: c.data, total: u2 };
        }
        return { data: c.data, total: c.data.length };
      });
    }
    uploadProcessImage(e, n, r = "process-image.svg") {
      return un(this, void 0, void 0, function* () {
        const i = `${yield this._createBaseUrlByType(ae.ProcessImage)}/${e}/file/image`, o = yield this.getAuthorizationHeader(), s = new Blob([n], { type: "image/svg+xml" }), a2 = new FormData();
        a2.append("file", s, "process-image.svg"), yield Be.post(i, a2, { headers: o });
      });
    }
    addEntity(e, n) {
      return un(this, void 0, void 0, function* () {
        const r = yield this._createBaseUrlByType(e), i = yield this.getAuthorizationHeader();
        return Be.post(r, n, { headers: i }).then((o) => o.data);
      });
    }
    updateEntity(e, n) {
      return un(this, void 0, void 0, function* () {
        const r = `${yield this._createBaseUrlByType(e)}/${n.Id}`;
        delete n.ChangedBy, delete n.ChangedOn, delete n.CreatedBy, delete n.CreatedOn;
        const i = yield this.getAuthorizationHeader();
        return Be.put(r, n, { headers: i }).then((o) => o.data);
      });
    }
    deleteEntity(e, n) {
      return un(this, void 0, void 0, function* () {
        const r = `${yield this._createBaseUrlByType(e)}/${n}`, i = yield this.getAuthorizationHeader();
        return Be.delete(r, { headers: i }).then();
      });
    }
    copyTo(e, n, r) {
      return un(this, void 0, void 0, function* () {
        const i = `${yield this._createBaseUrlByType(r)}/copy/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
        return Be.get(i, { headers: o }).then((s) => s.data);
      });
    }
    copyMultipleTo(e, n, r) {
      return un(this, void 0, void 0, function* () {
        const i = `${yield this._createBaseUrlByType(r)}/copy/multiple/${n}`, o = yield this.getAuthorizationHeader();
        return Be.put(i, e, { responseType: "text", headers: o });
      });
    }
    moveTo(e, n, r) {
      return un(this, void 0, void 0, function* () {
        const i = `${yield this._createBaseUrlByType(r)}/move/${e}/to/${n}`, o = yield this.getAuthorizationHeader();
        return Be.get(i, { headers: o }).then((s) => s.data);
      });
    }
    moveMultipleTo(e, n, r) {
      return un(this, void 0, void 0, function* () {
        const i = `${yield this._createBaseUrlByType(r)}/move/multiple/${n}`, o = yield this.getAuthorizationHeader();
        return Be.put(i, e, { responseType: "text", headers: o });
      });
    }
    _createBaseUrlByType(e) {
      return un(this, void 0, void 0, function* () {
        return `${yield this.getStructureUrl()}${vy[e]}`;
      });
    }
  };
  var Fo = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var Zo = class extends ko {
    constructor(e, n) {
      super(e, n);
    }
    getTenantViewById(e) {
      return Fo(this, void 0, void 0, function* () {
        const n = `${yield this.getStructureUrl()}/tenant/${e}/view`, r = yield this.getAuthorizationHeader();
        return (yield Be.get(n, { headers: r })).data;
      });
    }
    getTenantViewForEntityId(e) {
      return Fo(this, void 0, void 0, function* () {
        const n = `${yield this.getStructureUrl()}/tenant/entity/${e}/view`, r = yield this.getAuthorizationHeader();
        return (yield Be.get(n, { headers: r })).data;
      });
    }
    getTopTenants() {
      return Fo(this, void 0, void 0, function* () {
        const e = `${yield this.getStructureUrl()}/tenant/top`, n = yield this.getAuthorizationHeader();
        return (yield Be.get(e, { headers: n })).data;
      });
    }
    getNextTenants(e) {
      return Fo(this, void 0, void 0, function* () {
        const n = `${yield this.getStructureUrl()}/tenant/${e}/next`, r = yield this.getAuthorizationHeader();
        return (yield Be.get(n, { headers: r })).data;
      });
    }
    filterTenantsByName(e) {
      return Fo(this, void 0, void 0, function* () {
        const n = `${yield this.getStructureUrl()}/tenant/filter/${e}`, r = yield this.getAuthorizationHeader();
        return (yield Be.get(n, { headers: r })).data;
      });
    }
  };
  var ll = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var es = class {
    constructor(e) {
      this.httpService = e, this._nameCache = {};
    }
    resolveEntityPath(e, n, r = false, i, o = " / ") {
      return ll(this, void 0, void 0, function* () {
        const s = yield this.httpService.getPartialEntityById(e, n, { Name: 1, Path: 1 });
        let a2 = yield this.resolvePathName(s.Path.splice(i ? s.Path.length - i : 0, s.Path.length), o);
        return r && (a2 = a2 + o + s.Name.Value), a2;
      });
    }
    resolvePathName(e, n = " / ") {
      return ll(this, void 0, void 0, function* () {
        return e.length === 0 ? "" : Qo(Up(e.map((r) => this.resolveName(ae.Group, r))).pipe(Ii((r) => r.join(n))));
      });
    }
    resolveName(e, n) {
      return ll(this, void 0, void 0, function* () {
        return this._nameCache[n] || (this._nameCache[n] = Pi(this.httpService.getPartialEntityById(e, n, { Name: 1 })).pipe(Ii((r) => r.Name.Value), c0(1), Hp(() => Xi(n)))), Qo(this._nameCache[n]);
      });
    }
  };
  var td = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var nd = class extends ko {
    constructor(e, n) {
      super(e, n);
    }
    getUserProfile() {
      return td(this, void 0, void 0, function* () {
        try {
          const e = yield this.getAuthorizationHeader(), n = yield Be.get(`${yield this.getStructureUrl()}/userprofile`, { headers: e });
          if (n.status == 200) return n.data;
        } catch (e) {
          throw new Error("Failed to request user profile with error: " + e?.message);
        }
      });
    }
    updateUserProfile(e) {
      return td(this, void 0, void 0, function* () {
        try {
          const n = yield this.getAuthorizationHeader();
          yield Be.put(`${yield this.getStructureUrl()}/userprofile`, e, { headers: n });
        } catch (n) {
          throw new Error("Failed to update user profile with error: " + n?.message);
        }
      });
    }
  };
  var rd = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var rc = class extends ko {
    constructor(e, n) {
      super(e, n);
    }
    sendDatSrcConfiguration(e) {
      return rd(this, void 0, void 0, function* () {
        const n = `${this._getDriverUrl()}/command/source/${e}/configure`, r = yield this.getAuthorizationHeader();
        return (yield Be.get(n, { headers: r })).data;
      });
    }
    _getDriverUrl() {
      return rd(this, void 0, void 0, function* () {
        const e = yield Ur(this.httpConfig);
        return `${e.Services.BaseUri}${e.Services.Driver}`;
      });
    }
  };
  var yo = class extends Error {
    constructor(e, n) {
      const r = new.target.prototype;
      super(`${e}: Status code '${n}'`), this.statusCode = n, this.__proto__ = r;
    }
  };
  var Qc = class extends Error {
    constructor(e = "A timeout occurred.") {
      const n = new.target.prototype;
      super(e), this.__proto__ = n;
    }
  };
  var ts = class extends Error {
    constructor(e = "An abort occurred.") {
      const n = new.target.prototype;
      super(e), this.__proto__ = n;
    }
  };
  var X_ = class extends Error {
    constructor(e, n) {
      const r = new.target.prototype;
      super(e), this.transport = n, this.errorType = "UnsupportedTransportError", this.__proto__ = r;
    }
  };
  var K_ = class extends Error {
    constructor(e, n) {
      const r = new.target.prototype;
      super(e), this.transport = n, this.errorType = "DisabledTransportError", this.__proto__ = r;
    }
  };
  var J_ = class extends Error {
    constructor(e, n) {
      const r = new.target.prototype;
      super(e), this.transport = n, this.errorType = "FailedToStartTransportError", this.__proto__ = r;
    }
  };
  var Y_ = class extends Error {
    constructor(e) {
      const n = new.target.prototype;
      super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
    }
  };
  var Q_ = class extends Error {
    constructor(e, n) {
      const r = new.target.prototype;
      super(e), this.innerErrors = n, this.__proto__ = r;
    }
  };
  var dg = class {
    constructor(e, n, r) {
      this.statusCode = e, this.statusText = n, this.content = r;
    }
  };
  var Zc = class {
    get(e, n) {
      return this.send({ ...n, method: "GET", url: e });
    }
    post(e, n) {
      return this.send({ ...n, method: "POST", url: e });
    }
    delete(e, n) {
      return this.send({ ...n, method: "DELETE", url: e });
    }
    getCookieString(e) {
      return "";
    }
  };
  var R2;
  (function(t) {
    t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
  })(R2 || (R2 = {}));
  var ns = class {
    constructor() {
    }
    log(e, n) {
    }
  };
  ns.instance = new ns();
  var Z_ = "6.0.8";
  var gt = class {
    static isRequired(e, n) {
      if (e == null) throw new Error(`The '${n}' argument is required.`);
    }
    static isNotEmpty(e, n) {
      if (!e || e.match(/^\s*$/)) throw new Error(`The '${n}' argument should not be empty.`);
    }
    static isIn(e, n, r) {
      if (!(e in n)) throw new Error(`Unknown ${r} value: ${e}.`);
    }
  };
  var _t = class {
    static get isBrowser() {
      return typeof window == "object" && typeof window.document == "object";
    }
    static get isWebWorker() {
      return typeof self == "object" && "importScripts" in self;
    }
    static get isReactNative() {
      return typeof window == "object" && typeof window.document > "u";
    }
    static get isNode() {
      return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
    }
  };
  function rs(t, e) {
    let n = "";
    return eu(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${ew(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
  }
  function ew(t) {
    const e = new Uint8Array(t);
    let n = "";
    return e.forEach((r) => {
      const i = r < 16 ? "0" : "";
      n += `0x${i}${r.toString(16)} `;
    }), n.substr(0, n.length - 1);
  }
  function eu(t) {
    return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || t.constructor && t.constructor.name === "ArrayBuffer");
  }
  async function hg(t, e, n, r, i, o, s) {
    let a2 = {};
    if (i) {
      const d3 = await i();
      d3 && (a2 = { Authorization: `Bearer ${d3}` });
    }
    const [c, l] = bo();
    a2[c] = l, t.log(R2.Trace, `(${e} transport) sending data. ${rs(o, s.logMessageContent)}.`);
    const u2 = eu(o) ? "arraybuffer" : "text", f = await n.post(r, { content: o, headers: { ...a2, ...s.headers }, responseType: u2, timeout: s.timeout, withCredentials: s.withCredentials });
    t.log(R2.Trace, `(${e} transport) request complete. Response status: ${f.statusCode}.`);
  }
  function tw(t) {
    return t === void 0 ? new pa(R2.Information) : t === null ? ns.instance : t.log !== void 0 ? t : new pa(t);
  }
  var nw = class {
    constructor(e, n) {
      this._subject = e, this._observer = n;
    }
    dispose() {
      const e = this._subject.observers.indexOf(this._observer);
      e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
      });
    }
  };
  var pa = class {
    constructor(e) {
      this._minLevel = e, this.out = console;
    }
    log(e, n) {
      if (e >= this._minLevel) {
        const r = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${R2[e]}: ${n}`;
        switch (e) {
          case R2.Critical:
          case R2.Error:
            this.out.error(r);
            break;
          case R2.Warning:
            this.out.warn(r);
            break;
          case R2.Information:
            this.out.info(r);
            break;
          default:
            this.out.log(r);
            break;
        }
      }
    }
  };
  function bo() {
    let t = "X-SignalR-User-Agent";
    return _t.isNode && (t = "User-Agent"), [t, rw(Z_, iw(), sw(), ow())];
  }
  function rw(t, e, n, r) {
    let i = "Microsoft SignalR/";
    const o = t.split(".");
    return i += `${o[0]}.${o[1]}`, i += ` (${t}; `, e && e !== "" ? i += `${e}; ` : i += "Unknown OS; ", i += `${n}`, r ? i += `; ${r}` : i += "; Unknown Runtime Version", i += ")", i;
  }
  function iw() {
    if (_t.isNode) switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
    else return "";
  }
  function ow() {
    if (_t.isNode) return process.versions.node;
  }
  function sw() {
    return _t.isNode ? "NodeJS" : "Browser";
  }
  function id(t) {
    return t.stack ? t.stack : t.message ? t.message : `${t}`;
  }
  function aw() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("could not find global");
  }
  var lw = class extends Zc {
    constructor(e) {
      if (super(), this._logger = e, typeof fetch > "u") {
        const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : __require;
        this._jar = new (n("tough-cookie")).CookieJar(), this._fetchType = n("node-fetch"), this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
      } else this._fetchType = fetch.bind(aw());
      if (typeof AbortController > "u") {
        const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : __require;
        this._abortControllerType = n("abort-controller");
      } else this._abortControllerType = AbortController;
    }
    async send(e) {
      if (e.abortSignal && e.abortSignal.aborted) throw new ts();
      if (!e.method) throw new Error("No method defined.");
      if (!e.url) throw new Error("No url defined.");
      const n = new this._abortControllerType();
      let r;
      e.abortSignal && (e.abortSignal.onabort = () => {
        n.abort(), r = new ts();
      });
      let i = null;
      if (e.timeout) {
        const a2 = e.timeout;
        i = setTimeout(() => {
          n.abort(), this._logger.log(R2.Warning, "Timeout from HTTP request."), r = new Qc();
        }, a2);
      }
      let o;
      try {
        o = await this._fetchType(e.url, { body: e.content, cache: "no-cache", credentials: e.withCredentials === true ? "include" : "same-origin", headers: { "Content-Type": "text/plain;charset=UTF-8", "X-Requested-With": "XMLHttpRequest", ...e.headers }, method: e.method, mode: "cors", redirect: "follow", signal: n.signal });
      } catch (a2) {
        throw r || (this._logger.log(R2.Warning, `Error from HTTP request. ${a2}.`), a2);
      } finally {
        i && clearTimeout(i), e.abortSignal && (e.abortSignal.onabort = null);
      }
      if (!o.ok) {
        const a2 = await od(o, "text");
        throw new yo(a2 || o.statusText, o.status);
      }
      const s = await od(o, e.responseType);
      return new dg(o.status, o.statusText, s);
    }
    getCookieString(e) {
      let n = "";
      return _t.isNode && this._jar && this._jar.getCookies(e, (r, i) => n = i.join("; ")), n;
    }
  };
  function od(t, e) {
    let n;
    switch (e) {
      case "arraybuffer":
        n = t.arrayBuffer();
        break;
      case "text":
        n = t.text();
        break;
      case "blob":
      case "document":
      case "json":
        throw new Error(`${e} is not supported.`);
      default:
        n = t.text();
        break;
    }
    return n;
  }
  var cw = class extends Zc {
    constructor(e) {
      super(), this._logger = e;
    }
    send(e) {
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new ts()) : e.method ? e.url ? new Promise((n, r) => {
        const i = new XMLHttpRequest();
        i.open(e.method, e.url, true), i.withCredentials = e.withCredentials === void 0 ? true : e.withCredentials, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        const o = e.headers;
        o && Object.keys(o).forEach((s) => {
          i.setRequestHeader(s, o[s]);
        }), e.responseType && (i.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
          i.abort(), r(new ts());
        }), e.timeout && (i.timeout = e.timeout), i.onload = () => {
          e.abortSignal && (e.abortSignal.onabort = null), i.status >= 200 && i.status < 300 ? n(new dg(i.status, i.statusText, i.response || i.responseText)) : r(new yo(i.response || i.responseText || i.statusText, i.status));
        }, i.onerror = () => {
          this._logger.log(R2.Warning, `Error from HTTP request. ${i.status}: ${i.statusText}.`), r(new yo(i.statusText, i.status));
        }, i.ontimeout = () => {
          this._logger.log(R2.Warning, "Timeout from HTTP request."), r(new Qc());
        }, i.send(e.content || "");
      }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }
  };
  var uw = class extends Zc {
    constructor(e) {
      if (super(), typeof fetch < "u" || _t.isNode) this._httpClient = new lw(e);
      else if (typeof XMLHttpRequest < "u") this._httpClient = new cw(e);
      else throw new Error("No usable HttpClient found.");
    }
    send(e) {
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new ts()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }
    getCookieString(e) {
      return this._httpClient.getCookieString(e);
    }
  };
  var sn = class _sn {
    static write(e) {
      return `${e}${_sn.RecordSeparator}`;
    }
    static parse(e) {
      if (e[e.length - 1] !== _sn.RecordSeparator) throw new Error("Message is incomplete.");
      const n = e.split(_sn.RecordSeparator);
      return n.pop(), n;
    }
  };
  sn.RecordSeparatorCode = 30;
  sn.RecordSeparator = String.fromCharCode(sn.RecordSeparatorCode);
  var fw = class {
    writeHandshakeRequest(e) {
      return sn.write(JSON.stringify(e));
    }
    parseHandshakeResponse(e) {
      let n, r;
      if (eu(e)) {
        const s = new Uint8Array(e), a2 = s.indexOf(sn.RecordSeparatorCode);
        if (a2 === -1) throw new Error("Message is incomplete.");
        const c = a2 + 1;
        n = String.fromCharCode.apply(null, Array.prototype.slice.call(s.slice(0, c))), r = s.byteLength > c ? s.slice(c).buffer : null;
      } else {
        const s = e, a2 = s.indexOf(sn.RecordSeparator);
        if (a2 === -1) throw new Error("Message is incomplete.");
        const c = a2 + 1;
        n = s.substring(0, c), r = s.length > c ? s.substring(c) : null;
      }
      const i = sn.parse(n), o = JSON.parse(i[0]);
      if (o.type) throw new Error("Expected a handshake response from the server.");
      return [r, o];
    }
  };
  var De;
  (function(t) {
    t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close";
  })(De || (De = {}));
  var dw = class {
    constructor() {
      this.observers = [];
    }
    next(e) {
      for (const n of this.observers) n.next(e);
    }
    error(e) {
      for (const n of this.observers) n.error && n.error(e);
    }
    complete() {
      for (const e of this.observers) e.complete && e.complete();
    }
    subscribe(e) {
      return this.observers.push(e), new nw(this, e);
    }
  };
  var hw = 30 * 1e3;
  var pw = 15 * 1e3;
  var We;
  (function(t) {
    t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
  })(We || (We = {}));
  var tu = class _tu {
    constructor(e, n, r, i) {
      this._nextKeepAlive = 0, this._freezeEventListener = () => {
        this._logger.log(R2.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
      }, gt.isRequired(e, "connection"), gt.isRequired(n, "logger"), gt.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = hw, this.keepAliveIntervalInMilliseconds = pw, this._logger = n, this._protocol = r, this.connection = e, this._reconnectPolicy = i, this._handshakeProtocol = new fw(), this.connection.onreceive = (o) => this._processIncomingData(o), this.connection.onclose = (o) => this._connectionClosed(o), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = false, this._connectionState = We.Disconnected, this._connectionStarted = false, this._cachedPingMessage = this._protocol.writeMessage({ type: De.Ping });
    }
    static create(e, n, r, i) {
      return new _tu(e, n, r, i);
    }
    get state() {
      return this._connectionState;
    }
    get connectionId() {
      return this.connection && this.connection.connectionId || null;
    }
    get baseUrl() {
      return this.connection.baseUrl || "";
    }
    set baseUrl(e) {
      if (this._connectionState !== We.Disconnected && this._connectionState !== We.Reconnecting) throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
      if (!e) throw new Error("The HubConnection url must be a valid url.");
      this.connection.baseUrl = e;
    }
    start() {
      return this._startPromise = this._startWithStateTransitions(), this._startPromise;
    }
    async _startWithStateTransitions() {
      if (this._connectionState !== We.Disconnected) return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
      this._connectionState = We.Connecting, this._logger.log(R2.Debug, "Starting HubConnection.");
      try {
        await this._startInternal(), _t.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = We.Connected, this._connectionStarted = true, this._logger.log(R2.Debug, "HubConnection connected successfully.");
      } catch (e) {
        return this._connectionState = We.Disconnected, this._logger.log(R2.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
      }
    }
    async _startInternal() {
      this._stopDuringStartError = void 0, this._receivedHandshakeResponse = false;
      const e = new Promise((n, r) => {
        this._handshakeResolver = n, this._handshakeRejecter = r;
      });
      await this.connection.start(this._protocol.transferFormat);
      try {
        const n = { protocol: this._protocol.name, version: this._protocol.version };
        if (this._logger.log(R2.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(R2.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
      } catch (n) {
        throw this._logger.log(R2.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
      }
    }
    async stop() {
      const e = this._startPromise;
      this._stopPromise = this._stopInternal(), await this._stopPromise;
      try {
        await e;
      } catch {
      }
    }
    _stopInternal(e) {
      return this._connectionState === We.Disconnected ? (this._logger.log(R2.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === We.Disconnecting ? (this._logger.log(R2.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = We.Disconnecting, this._logger.log(R2.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(R2.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Error("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
    }
    stream(e, ...n) {
      const [r, i] = this._replaceStreamingParams(n), o = this._createStreamInvocation(e, n, i);
      let s;
      const a2 = new dw();
      return a2.cancelCallback = () => {
        const c = this._createCancelInvocation(o.invocationId);
        return delete this._callbacks[o.invocationId], s.then(() => this._sendWithProtocol(c));
      }, this._callbacks[o.invocationId] = (c, l) => {
        if (l) {
          a2.error(l);
          return;
        } else c && (c.type === De.Completion ? c.error ? a2.error(new Error(c.error)) : a2.complete() : a2.next(c.item));
      }, s = this._sendWithProtocol(o).catch((c) => {
        a2.error(c), delete this._callbacks[o.invocationId];
      }), this._launchStreams(r, s), a2;
    }
    _sendMessage(e) {
      return this._resetKeepAliveInterval(), this.connection.send(e);
    }
    _sendWithProtocol(e) {
      return this._sendMessage(this._protocol.writeMessage(e));
    }
    send(e, ...n) {
      const [r, i] = this._replaceStreamingParams(n), o = this._sendWithProtocol(this._createInvocation(e, n, true, i));
      return this._launchStreams(r, o), o;
    }
    invoke(e, ...n) {
      const [r, i] = this._replaceStreamingParams(n), o = this._createInvocation(e, n, false, i);
      return new Promise((s, a2) => {
        this._callbacks[o.invocationId] = (l, u2) => {
          if (u2) {
            a2(u2);
            return;
          } else l && (l.type === De.Completion ? l.error ? a2(new Error(l.error)) : s(l.result) : a2(new Error(`Unexpected message type: ${l.type}`)));
        };
        const c = this._sendWithProtocol(o).catch((l) => {
          a2(l), delete this._callbacks[o.invocationId];
        });
        this._launchStreams(r, c);
      });
    }
    on(e, n) {
      !e || !n || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(n) === -1 && this._methods[e].push(n));
    }
    off(e, n) {
      if (!e) return;
      e = e.toLowerCase();
      const r = this._methods[e];
      if (r) if (n) {
        const i = r.indexOf(n);
        i !== -1 && (r.splice(i, 1), r.length === 0 && delete this._methods[e]);
      } else delete this._methods[e];
    }
    onclose(e) {
      e && this._closedCallbacks.push(e);
    }
    onreconnecting(e) {
      e && this._reconnectingCallbacks.push(e);
    }
    onreconnected(e) {
      e && this._reconnectedCallbacks.push(e);
    }
    _processIncomingData(e) {
      if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = true), e) {
        const n = this._protocol.parseMessages(e, this._logger);
        for (const r of n) switch (r.type) {
          case De.Invocation:
            this._invokeClientMethod(r);
            break;
          case De.StreamItem:
          case De.Completion: {
            const i = this._callbacks[r.invocationId];
            if (i) {
              r.type === De.Completion && delete this._callbacks[r.invocationId];
              try {
                i(r);
              } catch (o) {
                this._logger.log(R2.Error, `Stream callback threw error: ${id(o)}`);
              }
            }
            break;
          }
          case De.Ping:
            break;
          case De.Close: {
            this._logger.log(R2.Information, "Close message received from server.");
            const i = r.error ? new Error("Server returned an error on close: " + r.error) : void 0;
            r.allowReconnect === true ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
            break;
          }
          default:
            this._logger.log(R2.Warning, `Invalid message type: ${r.type}.`);
            break;
        }
      }
      this._resetTimeoutPeriod();
    }
    _processHandshakeResponse(e) {
      let n, r;
      try {
        [r, n] = this._handshakeProtocol.parseHandshakeResponse(e);
      } catch (i) {
        const o = "Error parsing handshake response: " + i;
        this._logger.log(R2.Error, o);
        const s = new Error(o);
        throw this._handshakeRejecter(s), s;
      }
      if (n.error) {
        const i = "Server returned handshake error: " + n.error;
        this._logger.log(R2.Error, i);
        const o = new Error(i);
        throw this._handshakeRejecter(o), o;
      } else this._logger.log(R2.Debug, "Server handshake complete.");
      return this._handshakeResolver(), r;
    }
    _resetKeepAliveInterval() {
      this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
    }
    _resetTimeoutPeriod() {
      if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
        let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
        e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === We.Connected) try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
        }, e);
      }
    }
    serverTimeout() {
      this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    }
    _invokeClientMethod(e) {
      const n = this._methods[e.target.toLowerCase()];
      if (n) {
        try {
          n.forEach((r) => r.apply(this, e.arguments));
        } catch (r) {
          this._logger.log(R2.Error, `A callback for the method ${e.target.toLowerCase()} threw error '${r}'.`);
        }
        if (e.invocationId) {
          const r = "Server requested a response, which is not supported in this version of the client.";
          this._logger.log(R2.Error, r), this._stopPromise = this._stopInternal(new Error(r));
        }
      } else this._logger.log(R2.Warning, `No client method with the name '${e.target}' found.`);
    }
    _connectionClosed(e) {
      this._logger.log(R2.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Error("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === We.Disconnecting ? this._completeClose(e) : this._connectionState === We.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === We.Connected && this._completeClose(e);
    }
    _completeClose(e) {
      if (this._connectionStarted) {
        this._connectionState = We.Disconnected, this._connectionStarted = false, _t.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
        try {
          this._closedCallbacks.forEach((n) => n.apply(this, [e]));
        } catch (n) {
          this._logger.log(R2.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
        }
      }
    }
    async _reconnect(e) {
      const n = Date.now();
      let r = 0, i = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), o = this._getNextRetryDelay(r++, 0, i);
      if (o === null) {
        this._logger.log(R2.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
        return;
      }
      if (this._connectionState = We.Reconnecting, e ? this._logger.log(R2.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(R2.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
        try {
          this._reconnectingCallbacks.forEach((s) => s.apply(this, [e]));
        } catch (s) {
          this._logger.log(R2.Error, `An onreconnecting callback called with error '${e}' threw error '${s}'.`);
        }
        if (this._connectionState !== We.Reconnecting) {
          this._logger.log(R2.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
          return;
        }
      }
      for (; o !== null; ) {
        if (this._logger.log(R2.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((s) => {
          this._reconnectDelayHandle = setTimeout(s, o);
        }), this._reconnectDelayHandle = void 0, this._connectionState !== We.Reconnecting) {
          this._logger.log(R2.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
          return;
        }
        try {
          if (await this._startInternal(), this._connectionState = We.Connected, this._logger.log(R2.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0) try {
            this._reconnectedCallbacks.forEach((s) => s.apply(this, [this.connection.connectionId]));
          } catch (s) {
            this._logger.log(R2.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${s}'.`);
          }
          return;
        } catch (s) {
          if (this._logger.log(R2.Information, `Reconnect attempt failed because of error '${s}'.`), this._connectionState !== We.Reconnecting) {
            this._logger.log(R2.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === We.Disconnecting && this._completeClose();
            return;
          }
          i = s instanceof Error ? s : new Error(s.toString()), o = this._getNextRetryDelay(r++, Date.now() - n, i);
        }
      }
      this._logger.log(R2.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose();
    }
    _getNextRetryDelay(e, n, r) {
      try {
        return this._reconnectPolicy.nextRetryDelayInMilliseconds({ elapsedMilliseconds: n, previousRetryCount: e, retryReason: r });
      } catch (i) {
        return this._logger.log(R2.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${i}'.`), null;
      }
    }
    _cancelCallbacksWithError(e) {
      const n = this._callbacks;
      this._callbacks = {}, Object.keys(n).forEach((r) => {
        const i = n[r];
        try {
          i(null, e);
        } catch (o) {
          this._logger.log(R2.Error, `Stream 'error' callback called with '${e}' threw error: ${id(o)}`);
        }
      });
    }
    _cleanupPingTimer() {
      this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
    }
    _cleanupTimeout() {
      this._timeoutHandle && clearTimeout(this._timeoutHandle);
    }
    _createInvocation(e, n, r, i) {
      if (r) return i.length !== 0 ? { arguments: n, streamIds: i, target: e, type: De.Invocation } : { arguments: n, target: e, type: De.Invocation };
      {
        const o = this._invocationId;
        return this._invocationId++, i.length !== 0 ? { arguments: n, invocationId: o.toString(), streamIds: i, target: e, type: De.Invocation } : { arguments: n, invocationId: o.toString(), target: e, type: De.Invocation };
      }
    }
    _launchStreams(e, n) {
      if (e.length !== 0) {
        n || (n = Promise.resolve());
        for (const r in e) e[r].subscribe({ complete: () => {
          n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(r)));
        }, error: (i) => {
          let o;
          i instanceof Error ? o = i.message : i && i.toString ? o = i.toString() : o = "Unknown error", n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(r, o)));
        }, next: (i) => {
          n = n.then(() => this._sendWithProtocol(this._createStreamItemMessage(r, i)));
        } });
      }
    }
    _replaceStreamingParams(e) {
      const n = [], r = [];
      for (let i = 0; i < e.length; i++) {
        const o = e[i];
        if (this._isObservable(o)) {
          const s = this._invocationId;
          this._invocationId++, n[s] = o, r.push(s.toString()), e.splice(i, 1);
        }
      }
      return [n, r];
    }
    _isObservable(e) {
      return e && e.subscribe && typeof e.subscribe == "function";
    }
    _createStreamInvocation(e, n, r) {
      const i = this._invocationId;
      return this._invocationId++, r.length !== 0 ? { arguments: n, invocationId: i.toString(), streamIds: r, target: e, type: De.StreamInvocation } : { arguments: n, invocationId: i.toString(), target: e, type: De.StreamInvocation };
    }
    _createCancelInvocation(e) {
      return { invocationId: e, type: De.CancelInvocation };
    }
    _createStreamItemMessage(e, n) {
      return { invocationId: e, item: n, type: De.StreamItem };
    }
    _createCompletionMessage(e, n, r) {
      return n ? { error: n, invocationId: e, type: De.Completion } : { invocationId: e, result: r, type: De.Completion };
    }
  };
  var gw = [0, 2e3, 1e4, 3e4, null];
  var sd = class {
    constructor(e) {
      this._retryDelays = e !== void 0 ? [...e, null] : gw;
    }
    nextRetryDelayInMilliseconds(e) {
      return this._retryDelays[e.previousRetryCount];
    }
  };
  var vi = class {
  };
  vi.Authorization = "Authorization";
  vi.Cookie = "Cookie";
  var ft;
  (function(t) {
    t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
  })(ft || (ft = {}));
  var kt;
  (function(t) {
    t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
  })(kt || (kt = {}));
  var mw = class {
    constructor() {
      this._isAborted = false, this.onabort = null;
    }
    abort() {
      this._isAborted || (this._isAborted = true, this.onabort && this.onabort());
    }
    get signal() {
      return this;
    }
    get aborted() {
      return this._isAborted;
    }
  };
  var ad = class {
    constructor(e, n, r, i) {
      this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._pollAbort = new mw(), this._options = i, this._running = false, this.onreceive = null, this.onclose = null;
    }
    get pollAborted() {
      return this._pollAbort.aborted;
    }
    async connect(e, n) {
      if (gt.isRequired(e, "url"), gt.isRequired(n, "transferFormat"), gt.isIn(n, kt, "transferFormat"), this._url = e, this._logger.log(R2.Trace, "(LongPolling transport) Connecting."), n === kt.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string") throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
      const [r, i] = bo(), o = { [r]: i, ...this._options.headers }, s = { abortSignal: this._pollAbort.signal, headers: o, timeout: 1e5, withCredentials: this._options.withCredentials };
      n === kt.Binary && (s.responseType = "arraybuffer");
      const a2 = await this._getAccessToken();
      this._updateHeaderToken(s, a2);
      const c = `${e}&_=${Date.now()}`;
      this._logger.log(R2.Trace, `(LongPolling transport) polling: ${c}.`);
      const l = await this._httpClient.get(c, s);
      l.statusCode !== 200 ? (this._logger.log(R2.Error, `(LongPolling transport) Unexpected response code: ${l.statusCode}.`), this._closeError = new yo(l.statusText || "", l.statusCode), this._running = false) : this._running = true, this._receiving = this._poll(this._url, s);
    }
    async _getAccessToken() {
      return this._accessTokenFactory ? await this._accessTokenFactory() : null;
    }
    _updateHeaderToken(e, n) {
      if (e.headers || (e.headers = {}), n) {
        e.headers[vi.Authorization] = `Bearer ${n}`;
        return;
      }
      e.headers[vi.Authorization] && delete e.headers[vi.Authorization];
    }
    async _poll(e, n) {
      try {
        for (; this._running; ) {
          const r = await this._getAccessToken();
          this._updateHeaderToken(n, r);
          try {
            const i = `${e}&_=${Date.now()}`;
            this._logger.log(R2.Trace, `(LongPolling transport) polling: ${i}.`);
            const o = await this._httpClient.get(i, n);
            o.statusCode === 204 ? (this._logger.log(R2.Information, "(LongPolling transport) Poll terminated by server."), this._running = false) : o.statusCode !== 200 ? (this._logger.log(R2.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new yo(o.statusText || "", o.statusCode), this._running = false) : o.content ? (this._logger.log(R2.Trace, `(LongPolling transport) data received. ${rs(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(R2.Trace, "(LongPolling transport) Poll timed out, reissuing.");
          } catch (i) {
            this._running ? i instanceof Qc ? this._logger.log(R2.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = i, this._running = false) : this._logger.log(R2.Trace, `(LongPolling transport) Poll errored after shutdown: ${i.message}`);
          }
        }
      } finally {
        this._logger.log(R2.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
      }
    }
    async send(e) {
      return this._running ? hg(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    async stop() {
      this._logger.log(R2.Trace, "(LongPolling transport) Stopping polling."), this._running = false, this._pollAbort.abort();
      try {
        await this._receiving, this._logger.log(R2.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
        const e = {}, [n, r] = bo();
        e[n] = r;
        const i = { headers: { ...e, ...this._options.headers }, timeout: this._options.timeout, withCredentials: this._options.withCredentials }, o = await this._getAccessToken();
        this._updateHeaderToken(i, o), await this._httpClient.delete(this._url, i), this._logger.log(R2.Trace, "(LongPolling transport) DELETE request sent.");
      } finally {
        this._logger.log(R2.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
      }
    }
    _raiseOnClose() {
      if (this.onclose) {
        let e = "(LongPolling transport) Firing onclose event.";
        this._closeError && (e += " Error: " + this._closeError), this._logger.log(R2.Trace, e), this.onclose(this._closeError);
      }
    }
  };
  var vw = class {
    constructor(e, n, r, i) {
      this._httpClient = e, this._accessTokenFactory = n, this._logger = r, this._options = i, this.onreceive = null, this.onclose = null;
    }
    async connect(e, n) {
      if (gt.isRequired(e, "url"), gt.isRequired(n, "transferFormat"), gt.isIn(n, kt, "transferFormat"), this._logger.log(R2.Trace, "(SSE transport) Connecting."), this._url = e, this._accessTokenFactory) {
        const r = await this._accessTokenFactory();
        r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
      }
      return new Promise((r, i) => {
        let o = false;
        if (n !== kt.Text) {
          i(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
          return;
        }
        let s;
        if (_t.isBrowser || _t.isWebWorker) s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
        else {
          const a2 = this._httpClient.getCookieString(e), c = {};
          c.Cookie = a2;
          const [l, u2] = bo();
          c[l] = u2, s = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...c, ...this._options.headers } });
        }
        try {
          s.onmessage = (a2) => {
            if (this.onreceive) try {
              this._logger.log(R2.Trace, `(SSE transport) data received. ${rs(a2.data, this._options.logMessageContent)}.`), this.onreceive(a2.data);
            } catch (c) {
              this._close(c);
              return;
            }
          }, s.onerror = (a2) => {
            o ? this._close() : i(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
          }, s.onopen = () => {
            this._logger.log(R2.Information, `SSE connected to ${this._url}`), this._eventSource = s, o = true, r();
          };
        } catch (a2) {
          i(a2);
          return;
        }
      });
    }
    async send(e) {
      return this._eventSource ? hg(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    stop() {
      return this._close(), Promise.resolve();
    }
    _close(e) {
      this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
    }
  };
  var yw = class {
    constructor(e, n, r, i, o, s) {
      this._logger = r, this._accessTokenFactory = n, this._logMessageContent = i, this._webSocketConstructor = o, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = s;
    }
    async connect(e, n) {
      if (gt.isRequired(e, "url"), gt.isRequired(n, "transferFormat"), gt.isIn(n, kt, "transferFormat"), this._logger.log(R2.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory) {
        const r = await this._accessTokenFactory();
        r && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
      }
      return new Promise((r, i) => {
        e = e.replace(/^http/, "ws");
        let o;
        const s = this._httpClient.getCookieString(e);
        let a2 = false;
        if (_t.isNode) {
          const c = {}, [l, u2] = bo();
          c[l] = u2, s && (c[vi.Cookie] = `${s}`), o = new this._webSocketConstructor(e, void 0, { headers: { ...c, ...this._headers } });
        }
        o || (o = new this._webSocketConstructor(e)), n === kt.Binary && (o.binaryType = "arraybuffer"), o.onopen = (c) => {
          this._logger.log(R2.Information, `WebSocket connected to ${e}.`), this._webSocket = o, a2 = true, r();
        }, o.onerror = (c) => {
          let l = null;
          typeof ErrorEvent < "u" && c instanceof ErrorEvent ? l = c.error : l = "There was an error with the transport", this._logger.log(R2.Information, `(WebSockets transport) ${l}.`);
        }, o.onmessage = (c) => {
          if (this._logger.log(R2.Trace, `(WebSockets transport) data received. ${rs(c.data, this._logMessageContent)}.`), this.onreceive) try {
            this.onreceive(c.data);
          } catch (l) {
            this._close(l);
            return;
          }
        }, o.onclose = (c) => {
          if (a2) this._close(c);
          else {
            let l = null;
            typeof ErrorEvent < "u" && c instanceof ErrorEvent ? l = c.error : l = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", i(new Error(l));
          }
        };
      });
    }
    send(e) {
      return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(R2.Trace, `(WebSockets transport) sending data. ${rs(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
    }
    stop() {
      return this._webSocket && this._close(void 0), Promise.resolve();
    }
    _close(e) {
      this._webSocket && (this._webSocket.onclose = () => {
      }, this._webSocket.onmessage = () => {
      }, this._webSocket.onerror = () => {
      }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(R2.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === false || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
    }
    _isCloseEvent(e) {
      return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
    }
  };
  var ld = 100;
  var bw = class {
    constructor(e, n = {}) {
      if (this._stopPromiseResolver = () => {
      }, this.features = {}, this._negotiateVersion = 1, gt.isRequired(e, "url"), this._logger = tw(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? false : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0) n.withCredentials = n.withCredentials === void 0 ? true : n.withCredentials;
      else throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
      n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
      let r = null, i = null;
      if (_t.isNode && typeof __require < "u") {
        const o = typeof __webpack_require__ == "function" ? __non_webpack_require__ : __require;
        r = o("ws"), i = o("eventsource");
      }
      !_t.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : _t.isNode && !n.WebSocket && r && (n.WebSocket = r), !_t.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : _t.isNode && !n.EventSource && typeof i < "u" && (n.EventSource = i), this._httpClient = n.httpClient || new uw(this._logger), this._connectionState = "Disconnected", this._connectionStarted = false, this._options = n, this.onreceive = null, this.onclose = null;
    }
    async start(e) {
      if (e = e || kt.Binary, gt.isIn(e, kt, "transferFormat"), this._logger.log(R2.Debug, `Starting connection with transfer format '${kt[e]}'.`), this._connectionState !== "Disconnected") return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
      if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
        const n = "Failed to start the HttpConnection before stop() was called.";
        return this._logger.log(R2.Error, n), await this._stopPromise, Promise.reject(new Error(n));
      } else if (this._connectionState !== "Connected") {
        const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
        return this._logger.log(R2.Error, n), Promise.reject(new Error(n));
      }
      this._connectionStarted = true;
    }
    send(e) {
      return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new nu(this.transport)), this._sendQueue.send(e));
    }
    async stop(e) {
      if (this._connectionState === "Disconnected") return this._logger.log(R2.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
      if (this._connectionState === "Disconnecting") return this._logger.log(R2.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
      this._connectionState = "Disconnecting", this._stopPromise = new Promise((n) => {
        this._stopPromiseResolver = n;
      }), await this._stopInternal(e), await this._stopPromise;
    }
    async _stopInternal(e) {
      this._stopError = e;
      try {
        await this._startInternalPromise;
      } catch {
      }
      if (this.transport) {
        try {
          await this.transport.stop();
        } catch (n) {
          this._logger.log(R2.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
        }
        this.transport = void 0;
      } else this._logger.log(R2.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
    }
    async _startInternal(e) {
      let n = this.baseUrl;
      this._accessTokenFactory = this._options.accessTokenFactory;
      try {
        if (this._options.skipNegotiation) if (this._options.transport === ft.WebSockets) this.transport = this._constructTransport(ft.WebSockets), await this._startTransport(n, e);
        else throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
        else {
          let r = null, i = 0;
          do {
            if (r = await this._getNegotiationResponse(n), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") throw new Error("The connection was stopped during negotiation.");
            if (r.error) throw new Error(r.error);
            if (r.ProtocolVersion) throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
            if (r.url && (n = r.url), r.accessToken) {
              const o = r.accessToken;
              this._accessTokenFactory = () => o;
            }
            i++;
          } while (r.url && i < ld);
          if (i === ld && r.url) throw new Error("Negotiate redirection limit exceeded.");
          await this._createTransport(n, this._options.transport, r, e);
        }
        this.transport instanceof ad && (this.features.inherentKeepAlive = true), this._connectionState === "Connecting" && (this._logger.log(R2.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
      } catch (r) {
        return this._logger.log(R2.Error, "Failed to start the connection: " + r), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(r);
      }
    }
    async _getNegotiationResponse(e) {
      const n = {};
      if (this._accessTokenFactory) {
        const s = await this._accessTokenFactory();
        s && (n[vi.Authorization] = `Bearer ${s}`);
      }
      const [r, i] = bo();
      n[r] = i;
      const o = this._resolveNegotiateUrl(e);
      this._logger.log(R2.Debug, `Sending negotiation request: ${o}.`);
      try {
        const s = await this._httpClient.post(o, { content: "", headers: { ...n, ...this._options.headers }, timeout: this._options.timeout, withCredentials: this._options.withCredentials });
        if (s.statusCode !== 200) return Promise.reject(new Error(`Unexpected status code returned from negotiate '${s.statusCode}'`));
        const a2 = JSON.parse(s.content);
        return (!a2.negotiateVersion || a2.negotiateVersion < 1) && (a2.connectionToken = a2.connectionId), a2;
      } catch (s) {
        let a2 = "Failed to complete negotiation with the server: " + s;
        return s instanceof yo && s.statusCode === 404 && (a2 = a2 + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(R2.Error, a2), Promise.reject(new Y_(a2));
      }
    }
    _createConnectUrl(e, n) {
      return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
    }
    async _createTransport(e, n, r, i) {
      let o = this._createConnectUrl(e, r.connectionToken);
      if (this._isITransport(n)) {
        this._logger.log(R2.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(o, i), this.connectionId = r.connectionId;
        return;
      }
      const s = [], a2 = r.availableTransports || [];
      let c = r;
      for (const l of a2) {
        const u2 = this._resolveTransportOrError(l, n, i);
        if (u2 instanceof Error) s.push(`${l.transport} failed:`), s.push(u2);
        else if (this._isITransport(u2)) {
          if (this.transport = u2, !c) {
            try {
              c = await this._getNegotiationResponse(e);
            } catch (f) {
              return Promise.reject(f);
            }
            o = this._createConnectUrl(e, c.connectionToken);
          }
          try {
            await this._startTransport(o, i), this.connectionId = c.connectionId;
            return;
          } catch (f) {
            if (this._logger.log(R2.Error, `Failed to start the transport '${l.transport}': ${f}`), c = void 0, s.push(new J_(`${l.transport} failed: ${f}`, ft[l.transport])), this._connectionState !== "Connecting") {
              const d3 = "Failed to select transport before stop() was called.";
              return this._logger.log(R2.Debug, d3), Promise.reject(new Error(d3));
            }
          }
        }
      }
      return s.length > 0 ? Promise.reject(new Q_(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`, s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    }
    _constructTransport(e) {
      switch (e) {
        case ft.WebSockets:
          if (!this._options.WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
          return new yw(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
        case ft.ServerSentEvents:
          if (!this._options.EventSource) throw new Error("'EventSource' is not supported in your environment.");
          return new vw(this._httpClient, this._accessTokenFactory, this._logger, this._options);
        case ft.LongPolling:
          return new ad(this._httpClient, this._accessTokenFactory, this._logger, this._options);
        default:
          throw new Error(`Unknown transport: ${e}.`);
      }
    }
    _startTransport(e, n) {
      return this.transport.onreceive = this.onreceive, this.transport.onclose = (r) => this._stopConnection(r), this.transport.connect(e, n);
    }
    _resolveTransportOrError(e, n, r) {
      const i = ft[e.transport];
      if (i == null) return this._logger.log(R2.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
      if (_w(n, i)) if (e.transferFormats.map((o) => kt[o]).indexOf(r) >= 0) {
        if (i === ft.WebSockets && !this._options.WebSocket || i === ft.ServerSentEvents && !this._options.EventSource) return this._logger.log(R2.Debug, `Skipping transport '${ft[i]}' because it is not supported in your environment.'`), new X_(`'${ft[i]}' is not supported in your environment.`, i);
        this._logger.log(R2.Debug, `Selecting transport '${ft[i]}'.`);
        try {
          return this._constructTransport(i);
        } catch (o) {
          return o;
        }
      } else return this._logger.log(R2.Debug, `Skipping transport '${ft[i]}' because it does not support the requested transfer format '${kt[r]}'.`), new Error(`'${ft[i]}' does not support ${kt[r]}.`);
      else return this._logger.log(R2.Debug, `Skipping transport '${ft[i]}' because it was disabled by the client.`), new K_(`'${ft[i]}' is disabled by the client.`, i);
    }
    _isITransport(e) {
      return e && typeof e == "object" && "connect" in e;
    }
    _stopConnection(e) {
      if (this._logger.log(R2.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
        this._logger.log(R2.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
        return;
      }
      if (this._connectionState === "Connecting") throw this._logger.log(R2.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
      if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(R2.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(R2.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
        this._logger.log(R2.Error, `TransportSendQueue.stop() threw error '${n}'.`);
      }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
        this._connectionStarted = false;
        try {
          this.onclose && this.onclose(e);
        } catch (n) {
          this._logger.log(R2.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
        }
      }
    }
    _resolveUrl(e) {
      if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0) return e;
      if (!_t.isBrowser) throw new Error(`Cannot resolve '${e}'.`);
      const n = window.document.createElement("a");
      return n.href = e, this._logger.log(R2.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
    }
    _resolveNegotiateUrl(e) {
      const n = e.indexOf("?");
      let r = e.substring(0, n === -1 ? e.length : n);
      return r[r.length - 1] !== "/" && (r += "/"), r += "negotiate", r += n === -1 ? "" : e.substring(n), r.indexOf("negotiateVersion") === -1 && (r += n === -1 ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r;
    }
  };
  function _w(t, e) {
    return !t || (e & t) !== 0;
  }
  var nu = class _nu {
    constructor(e) {
      this._transport = e, this._buffer = [], this._executing = true, this._sendBufferedData = new Ns(), this._transportResult = new Ns(), this._sendLoopPromise = this._sendLoop();
    }
    send(e) {
      return this._bufferData(e), this._transportResult || (this._transportResult = new Ns()), this._transportResult.promise;
    }
    stop() {
      return this._executing = false, this._sendBufferedData.resolve(), this._sendLoopPromise;
    }
    _bufferData(e) {
      if (this._buffer.length && typeof this._buffer[0] != typeof e) throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
      this._buffer.push(e), this._sendBufferedData.resolve();
    }
    async _sendLoop() {
      for (; ; ) {
        if (await this._sendBufferedData.promise, !this._executing) {
          this._transportResult && this._transportResult.reject("Connection stopped.");
          break;
        }
        this._sendBufferedData = new Ns();
        const e = this._transportResult;
        this._transportResult = void 0;
        const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : _nu._concatBuffers(this._buffer);
        this._buffer.length = 0;
        try {
          await this._transport.send(n), e.resolve();
        } catch (r) {
          e.reject(r);
        }
      }
    }
    static _concatBuffers(e) {
      const n = e.map((o) => o.byteLength).reduce((o, s) => o + s), r = new Uint8Array(n);
      let i = 0;
      for (const o of e) r.set(new Uint8Array(o), i), i += o.byteLength;
      return r.buffer;
    }
  };
  var Ns = class {
    constructor() {
      this.promise = new Promise((e, n) => [this._resolver, this._rejecter] = [e, n]);
    }
    resolve() {
      this._resolver();
    }
    reject(e) {
      this._rejecter(e);
    }
  };
  var ww = "json";
  var xw = class {
    constructor() {
      this.name = ww, this.version = 1, this.transferFormat = kt.Text;
    }
    parseMessages(e, n) {
      if (typeof e != "string") throw new Error("Invalid input for JSON hub protocol. Expected a string.");
      if (!e) return [];
      n === null && (n = ns.instance);
      const r = sn.parse(e), i = [];
      for (const o of r) {
        const s = JSON.parse(o);
        if (typeof s.type != "number") throw new Error("Invalid payload.");
        switch (s.type) {
          case De.Invocation:
            this._isInvocationMessage(s);
            break;
          case De.StreamItem:
            this._isStreamItemMessage(s);
            break;
          case De.Completion:
            this._isCompletionMessage(s);
            break;
          case De.Ping:
            break;
          case De.Close:
            break;
          default:
            n.log(R2.Information, "Unknown message type '" + s.type + "' ignored.");
            continue;
        }
        i.push(s);
      }
      return i;
    }
    writeMessage(e) {
      return sn.write(JSON.stringify(e));
    }
    _isInvocationMessage(e) {
      this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
    }
    _isStreamItemMessage(e) {
      if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0) throw new Error("Invalid payload for StreamItem message.");
    }
    _isCompletionMessage(e) {
      if (e.result && e.error) throw new Error("Invalid payload for Completion message.");
      !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
    }
    _assertNotEmptyString(e, n) {
      if (typeof e != "string" || e === "") throw new Error(n);
    }
  };
  var Sw = { trace: R2.Trace, debug: R2.Debug, info: R2.Information, information: R2.Information, warn: R2.Warning, warning: R2.Warning, error: R2.Error, critical: R2.Critical, none: R2.None };
  function Ew(t) {
    const e = Sw[t.toLowerCase()];
    if (typeof e < "u") return e;
    throw new Error(`Unknown log level: ${t}`);
  }
  var Cw = class {
    configureLogging(e) {
      if (gt.isRequired(e, "logging"), Aw(e)) this.logger = e;
      else if (typeof e == "string") {
        const n = Ew(e);
        this.logger = new pa(n);
      } else this.logger = new pa(e);
      return this;
    }
    withUrl(e, n) {
      return gt.isRequired(e, "url"), gt.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = { ...this.httpConnectionOptions, transport: n }, this;
    }
    withHubProtocol(e) {
      return gt.isRequired(e, "protocol"), this.protocol = e, this;
    }
    withAutomaticReconnect(e) {
      if (this.reconnectPolicy) throw new Error("A reconnectPolicy has already been set.");
      return e ? Array.isArray(e) ? this.reconnectPolicy = new sd(e) : this.reconnectPolicy = e : this.reconnectPolicy = new sd(), this;
    }
    build() {
      const e = this.httpConnectionOptions || {};
      if (e.logger === void 0 && (e.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
      const n = new bw(this.url, e);
      return tu.create(n, this.logger || ns.instance, this.protocol || new xw(), this.reconnectPolicy);
    }
  };
  function Aw(t) {
    return t.log !== void 0;
  }
  var Iw = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var ga;
  (function(t) {
    t.Running = "Running", t.Success = "Success", t.Failed = "Failed";
  })(ga || (ga = {}));
  var Xo;
  (function(t) {
    t.ChangeModeAsync = "ChangeModeAsync", t.ChangeIntervalAsync = "ChangeIntervalAsync", t.SubscribeMany = "SubscribeMany";
  })(Xo || (Xo = {}));
  var cd;
  (function(t) {
    t.Send = "Send";
  })(cd || (cd = {}));
  var ma;
  (function(t) {
    t.S = "S", t.SO = "SO", t.T = "T", t.TC = "TC", t.OP = "OP";
  })(ma || (ma = {}));
  var ic = class {
    constructor(e, n) {
      this.httpConfig = e, this.accessToken = n, this._unsub = new Ot(), this._connectionEstablished = new Hc(false), this._valueCache = {}, this._subscribedIds = [], this._queuedIds = [], this._livePackageObserver = new Ot(), this._subscribeRequested = new Ot(), this._handleSubscriptionQueue();
    }
    connect() {
      return Iw(this, void 0, void 0, function* () {
        const e = yield Ur(this.httpConfig);
        return this.connectWithUrl(`${e.Services.BaseUri}${e.Services.Live}/hub`);
      });
    }
    connectWithUrl(e) {
      return this.hubConnection || (this.hubConnection = this._buildHubConnection(e), this._establishConnectionAndHandleEvents(this.hubConnection)), Qo(this._connectionEstablished.pipe(Ki((n) => n), r0(null)));
    }
    dispose() {
      var e;
      (e = this.hubConnection) === null || e === void 0 || e.stop(), this.hubConnection = null, this._unsub.next(), this._unsub.complete();
    }
    subscribeToSignalValues(e) {
      const n = e.map((r) => `S:${r}`);
      return this.subscribeLiveValuePackages(n);
    }
    subscribeToSignalOffsets(e) {
      const n = e.map((r) => `SO:${r}`);
      return this.subscribeLiveValuePackages(n);
    }
    subscribeToTimestamp(e) {
      return this.subscribeLiveValuePackages(e);
    }
    subscribeToOperations(e) {
      const n = e.map((r) => `${ma.OP}:${r}`);
      return this.subscribeLiveValuePackages(n);
    }
    getOperationStatus(e) {
      const n = `${ma.OP}:${e}`;
      return this.subscribeToOperations([e]).pipe(Ii((r) => r.find((i) => i.id === e)), Ki((r) => r != null), f0((r) => r.status !== ga.Success && r.status !== ga.Failed, true), a0(() => this._unsubscribeIds([n])));
    }
    subscribeLiveValuePackages(e) {
      const n = e.filter((o) => !this._subscribedIds.includes(o));
      this.hubConnection && n.length > 0 && this._enqueueIdsToSubscribe(n);
      const r = this._getCachedValuePackages(e), i = this._livePackageObserver.pipe(Ii((o) => o.filter((s) => e.includes(s.identifier))), Ki((o) => o.length > 0));
      return r.length > 0 ? Qb(Xi(r), i) : i;
    }
    _unsubscribeIds(e) {
      this._subscribedIds = this._subscribedIds.filter((n) => !e.includes(n)), e.forEach((n) => delete this._valueCache[n]);
    }
    _enqueueIdsToSubscribe(e) {
      const n = e.filter((r) => !this._queuedIds.includes(r));
      n.length > 0 && (this._queuedIds.push(...n), this._subscribeRequested.next(null));
    }
    _handleSubscriptionQueue() {
      this._subscribeRequested.pipe(mr(this._unsub), e0(50)).subscribe(() => {
        const e = this._queuedIds;
        this._queuedIds = [], this._sendMessage(Xo.SubscribeMany, e), this._subscribedIds.push(...e);
      });
    }
    _getCachedValuePackages(e) {
      return e.map((n) => this._valueCache[n]).filter((n) => n !== void 0);
    }
    _sendMessage(e, ...n) {
      this.hubConnection && this.hubConnection.send(e, ...n);
    }
    _handleHubMessage(e) {
      Array.isArray(e) ? (e.forEach((n) => {
        this._valueCache[n.identifier] = n;
      }), this._livePackageObserver.next(e)) : console.info("Unknown message: ", e);
    }
    _establishConnectionAndHandleEvents(e) {
      e.start().then(() => {
        this._sendMessage(Xo.ChangeModeAsync, true), this._sendMessage(Xo.ChangeIntervalAsync, 500), this.hubConnection.on("Send", (n) => this._handleHubMessage(n)), console.log("Connected to SignalR"), this._connectionEstablished.next(true);
      }).catch((n) => {
        this.hubConnection = null, this._connectionEstablished.error(n), console.log("Failed to start connection: " + n.message);
      }), this.hubConnection.onclose(() => {
        console.log("Hub connection closed"), this.hubConnection = null;
      });
    }
    _buildHubConnection(e) {
      return new Cw().withUrl(e, { accessTokenFactory: () => this.getAccessToken() }).build();
    }
    getAccessToken() {
      return Ur(this.accessToken);
    }
  };
  var No = globalThis && globalThis.__awaiter || function(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var ud = class extends ko {
    constructor(e, n) {
      super(e, n);
    }
    requestHistoricalValues(e) {
      return No(this, void 0, void 0, function* () {
        const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader(), i = yield Be.post(`${n}/value/manyflat`, e, { headers: r });
        if (i.status !== 200) throw new Error(i.statusText);
        return i.data;
      });
    }
    getHistoricalValueObjects(e) {
      return No(this, void 0, void 0, function* () {
        const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
        return Be.post(n + "/value/many", e, { headers: r }).then((i) => i.data);
      });
    }
    getNearestValue(e) {
      return No(this, void 0, void 0, function* () {
        const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
        return Be.post(n + "/value/nearest", e, { headers: r }).then((i) => i.data);
      });
    }
    getNthHistoricalValue(e) {
      return No(this, void 0, void 0, function* () {
        const n = yield this.getHistorianUrl(), r = yield this.getAuthorizationHeader();
        return Be.post(n + "/value/nth", e, { headers: r }).then((i) => i.data);
      });
    }
    getHistorianUrl() {
      return No(this, void 0, void 0, function* () {
        const e = yield Ur(this.httpConfig);
        return `${e.Services.BaseUri}${e.Services.Historian}`;
      });
    }
  };
  var oc;
  (function(t) {
    t[t.Transient = 0] = "Transient", t[t.Singleton = 1] = "Singleton", t[t.ResolutionScoped = 2] = "ResolutionScoped", t[t.ContainerScoped = 3] = "ContainerScoped";
  })(oc || (oc = {}));
  var jt = oc;
  var sc = function(t, e) {
    return sc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
      n.__proto__ = r;
    } || function(n, r) {
      for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
    }, sc(t, e);
  };
  function ru(t, e) {
    sc(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function $w(t, e, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a2(u2) {
        try {
          l(r.next(u2));
        } catch (f) {
          s(f);
        }
      }
      function c(u2) {
        try {
          l(r.throw(u2));
        } catch (f) {
          s(f);
        }
      }
      function l(u2) {
        u2.done ? o(u2.value) : i(u2.value).then(a2, c);
      }
      l((r = r.apply(t, [])).next());
    });
  }
  function Tw(t, e) {
    var n = { label: 0, sent: function() {
      if (o[0] & 1) throw o[1];
      return o[1];
    }, trys: [], ops: [] }, r, i, o, s;
    return s = { next: a2(0), throw: a2(1), return: a2(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function a2(l) {
      return function(u2) {
        return c([l, u2]);
      };
    }
    function c(l) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; n; ) try {
        if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: false };
          case 5:
            n.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = l;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(l);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = e.call(t, n);
      } catch (u2) {
        l = [6, u2], i = 0;
      } finally {
        r = o = 0;
      }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: true };
    }
  }
  function Us(t) {
    var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return { next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    } };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function va(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var r = n.call(t), i, o = [], s;
    try {
      for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) o.push(i.value);
    } catch (a2) {
      s = { error: a2 };
    } finally {
      try {
        i && !i.done && (n = r.return) && n.call(r);
      } finally {
        if (s) throw s.error;
      }
    }
    return o;
  }
  function ni() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(va(arguments[e]));
    return t;
  }
  function pg(t) {
    return !!t.useClass;
  }
  function ac(t) {
    return !!t.useFactory;
  }
  var gg = (function() {
    function t(e) {
      this.wrap = e, this.reflectMethods = ["get", "getPrototypeOf", "setPrototypeOf", "getOwnPropertyDescriptor", "defineProperty", "has", "set", "deleteProperty", "apply", "construct", "ownKeys"];
    }
    return t.prototype.createProxy = function(e) {
      var n = this, r = {}, i = false, o, s = function() {
        return i || (o = e(n.wrap()), i = true), o;
      };
      return new Proxy(r, this.createHandler(s));
    }, t.prototype.createHandler = function(e) {
      var n = {}, r = function(i) {
        n[i] = function() {
          for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
          o[0] = e();
          var a2 = Reflect[i];
          return a2.apply(void 0, ni(o));
        };
      };
      return this.reflectMethods.forEach(r), n;
    }, t;
  })();
  function Ni(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  function kw(t) {
    return typeof t == "object" && "token" in t && "multiple" in t;
  }
  function fd(t) {
    return typeof t == "object" && "token" in t && "transform" in t;
  }
  function Rw(t) {
    return typeof t == "function" || t instanceof gg;
  }
  function ra(t) {
    return !!t.useToken;
  }
  function ia(t) {
    return t.useValue != null;
  }
  function Ow(t) {
    return pg(t) || ia(t) || ra(t) || ac(t);
  }
  var iu = (function() {
    function t() {
      this._registryMap = /* @__PURE__ */ new Map();
    }
    return t.prototype.entries = function() {
      return this._registryMap.entries();
    }, t.prototype.getAll = function(e) {
      return this.ensure(e), this._registryMap.get(e);
    }, t.prototype.get = function(e) {
      this.ensure(e);
      var n = this._registryMap.get(e);
      return n[n.length - 1] || null;
    }, t.prototype.set = function(e, n) {
      this.ensure(e), this._registryMap.get(e).push(n);
    }, t.prototype.setAll = function(e, n) {
      this._registryMap.set(e, n);
    }, t.prototype.has = function(e) {
      return this.ensure(e), this._registryMap.get(e).length > 0;
    }, t.prototype.clear = function() {
      this._registryMap.clear();
    }, t.prototype.ensure = function(e) {
      this._registryMap.has(e) || this._registryMap.set(e, []);
    }, t;
  })();
  var Pw = (function(t) {
    ru(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(iu);
  var dd = /* @__PURE__ */ (function() {
    function t() {
      this.scopedResolutions = /* @__PURE__ */ new Map();
    }
    return t;
  })();
  function Dw(t, e) {
    if (t === null) return "at position #" + e;
    var n = t.split(",")[e].trim();
    return '"' + n + '" at position #' + e;
  }
  function Mw(t, e, n) {
    return n === void 0 && (n = "    "), ni([t], e.message.split(`
`).map(function(r) {
      return n + r;
    })).join(`
`);
  }
  function Lw(t, e, n) {
    var r = va(t.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), i = r[1], o = i === void 0 ? null : i, s = Dw(o, e);
    return Mw("Cannot inject the dependency " + s + ' of "' + t.name + '" constructor. Reason:', n);
  }
  function Fw(t) {
    if (typeof t.dispose != "function") return false;
    var e = t.dispose;
    return !(e.length > 0);
  }
  var Nw = (function(t) {
    ru(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(iu);
  var Uw = (function(t) {
    ru(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  })(iu);
  var Bw = /* @__PURE__ */ (function() {
    function t() {
      this.preResolution = new Nw(), this.postResolution = new Uw();
    }
    return t;
  })();
  var jw = /* @__PURE__ */ new Map();
  var Hw = (function() {
    function t(e) {
      this.parent = e, this._registry = new Pw(), this.interceptors = new Bw(), this.disposed = false, this.disposables = /* @__PURE__ */ new Set();
    }
    return t.prototype.register = function(e, n, r) {
      r === void 0 && (r = { lifecycle: jt.Transient }), this.ensureNotDisposed();
      var i;
      if (Ow(n) ? i = n : i = { useClass: n }, ra(i)) for (var o = [e], s = i; s != null; ) {
        var a2 = s.useToken;
        if (o.includes(a2)) throw new Error("Token registration cycle detected! " + ni(o, [a2]).join(" -> "));
        o.push(a2);
        var c = this._registry.get(a2);
        c && ra(c.provider) ? s = c.provider : s = null;
      }
      if ((r.lifecycle === jt.Singleton || r.lifecycle == jt.ContainerScoped || r.lifecycle == jt.ResolutionScoped) && (ia(i) || ac(i))) throw new Error('Cannot use lifecycle "' + jt[r.lifecycle] + '" with ValueProviders or FactoryProviders');
      return this._registry.set(e, { provider: i, options: r }), this;
    }, t.prototype.registerType = function(e, n) {
      return this.ensureNotDisposed(), Ni(n) ? this.register(e, { useToken: n }) : this.register(e, { useClass: n });
    }, t.prototype.registerInstance = function(e, n) {
      return this.ensureNotDisposed(), this.register(e, { useValue: n });
    }, t.prototype.registerSingleton = function(e, n) {
      if (this.ensureNotDisposed(), Ni(e)) {
        if (Ni(n)) return this.register(e, { useToken: n }, { lifecycle: jt.Singleton });
        if (n) return this.register(e, { useClass: n }, { lifecycle: jt.Singleton });
        throw new Error('Cannot register a type name as a singleton without a "to" token');
      }
      var r = e;
      return n && !Ni(n) && (r = n), this.register(e, { useClass: r }, { lifecycle: jt.Singleton });
    }, t.prototype.resolve = function(e, n) {
      n === void 0 && (n = new dd()), this.ensureNotDisposed();
      var r = this.getRegistration(e);
      if (!r && Ni(e)) throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
      if (this.executePreResolutionInterceptor(e, "Single"), r) {
        var i = this.resolveRegistration(r, n);
        return this.executePostResolutionInterceptor(e, i, "Single"), i;
      }
      if (Rw(e)) {
        var i = this.construct(e, n);
        return this.executePostResolutionInterceptor(e, i, "Single"), i;
      }
      throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
    }, t.prototype.executePreResolutionInterceptor = function(e, n) {
      var r, i;
      if (this.interceptors.preResolution.has(e)) {
        var o = [];
        try {
          for (var s = Us(this.interceptors.preResolution.getAll(e)), a2 = s.next(); !a2.done; a2 = s.next()) {
            var c = a2.value;
            c.options.frequency != "Once" && o.push(c), c.callback(e, n);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            a2 && !a2.done && (i = s.return) && i.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        this.interceptors.preResolution.setAll(e, o);
      }
    }, t.prototype.executePostResolutionInterceptor = function(e, n, r) {
      var i, o;
      if (this.interceptors.postResolution.has(e)) {
        var s = [];
        try {
          for (var a2 = Us(this.interceptors.postResolution.getAll(e)), c = a2.next(); !c.done; c = a2.next()) {
            var l = c.value;
            l.options.frequency != "Once" && s.push(l), l.callback(e, n, r);
          }
        } catch (u2) {
          i = { error: u2 };
        } finally {
          try {
            c && !c.done && (o = a2.return) && o.call(a2);
          } finally {
            if (i) throw i.error;
          }
        }
        this.interceptors.postResolution.setAll(e, s);
      }
    }, t.prototype.resolveRegistration = function(e, n) {
      if (this.ensureNotDisposed(), e.options.lifecycle === jt.ResolutionScoped && n.scopedResolutions.has(e)) return n.scopedResolutions.get(e);
      var r = e.options.lifecycle === jt.Singleton, i = e.options.lifecycle === jt.ContainerScoped, o = r || i, s;
      return ia(e.provider) ? s = e.provider.useValue : ra(e.provider) ? s = o ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : pg(e.provider) ? s = o ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : ac(e.provider) ? s = e.provider.useFactory(this) : s = this.construct(e.provider, n), e.options.lifecycle === jt.ResolutionScoped && n.scopedResolutions.set(e, s), s;
    }, t.prototype.resolveAll = function(e, n) {
      var r = this;
      n === void 0 && (n = new dd()), this.ensureNotDisposed();
      var i = this.getAllRegistrations(e);
      if (!i && Ni(e)) throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
      if (this.executePreResolutionInterceptor(e, "All"), i) {
        var o = i.map(function(a2) {
          return r.resolveRegistration(a2, n);
        });
        return this.executePostResolutionInterceptor(e, o, "All"), o;
      }
      var s = [this.construct(e, n)];
      return this.executePostResolutionInterceptor(e, s, "All"), s;
    }, t.prototype.isRegistered = function(e, n) {
      return n === void 0 && (n = false), this.ensureNotDisposed(), this._registry.has(e) || n && (this.parent || false) && this.parent.isRegistered(e, true);
    }, t.prototype.reset = function() {
      this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
    }, t.prototype.clearInstances = function() {
      var e, n;
      this.ensureNotDisposed();
      try {
        for (var r = Us(this._registry.entries()), i = r.next(); !i.done; i = r.next()) {
          var o = va(i.value, 2), s = o[0], a2 = o[1];
          this._registry.setAll(s, a2.filter(function(c) {
            return !ia(c.provider);
          }).map(function(c) {
            return c.instance = void 0, c;
          }));
        }
      } catch (c) {
        e = { error: c };
      } finally {
        try {
          i && !i.done && (n = r.return) && n.call(r);
        } finally {
          if (e) throw e.error;
        }
      }
    }, t.prototype.createChildContainer = function() {
      var e, n;
      this.ensureNotDisposed();
      var r = new t(this);
      try {
        for (var i = Us(this._registry.entries()), o = i.next(); !o.done; o = i.next()) {
          var s = va(o.value, 2), a2 = s[0], c = s[1];
          c.some(function(l) {
            var u2 = l.options;
            return u2.lifecycle === jt.ContainerScoped;
          }) && r._registry.setAll(a2, c.map(function(l) {
            return l.options.lifecycle === jt.ContainerScoped ? { provider: l.provider, options: l.options } : l;
          }));
        }
      } catch (l) {
        e = { error: l };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }, t.prototype.beforeResolution = function(e, n, r) {
      r === void 0 && (r = { frequency: "Always" }), this.interceptors.preResolution.set(e, { callback: n, options: r });
    }, t.prototype.afterResolution = function(e, n, r) {
      r === void 0 && (r = { frequency: "Always" }), this.interceptors.postResolution.set(e, { callback: n, options: r });
    }, t.prototype.dispose = function() {
      return $w(this, void 0, void 0, function() {
        var e;
        return Tw(this, function(n) {
          switch (n.label) {
            case 0:
              return this.disposed = true, e = [], this.disposables.forEach(function(r) {
                var i = r.dispose();
                i && e.push(i);
              }), [4, Promise.all(e)];
            case 1:
              return n.sent(), [2];
          }
        });
      });
    }, t.prototype.getRegistration = function(e) {
      return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
    }, t.prototype.getAllRegistrations = function(e) {
      return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
    }, t.prototype.construct = function(e, n) {
      var r = this;
      if (e instanceof gg) return e.createProxy(function(o) {
        return r.resolve(o, n);
      });
      var i = (function() {
        var o = jw.get(e);
        if (!o || o.length === 0) {
          if (e.length === 0) return new e();
          throw new Error('TypeInfo not known for "' + e.name + '"');
        }
        var s = o.map(r.resolveParams(n, e));
        return new (e.bind.apply(e, ni([void 0], s)))();
      })();
      return Fw(i) && this.disposables.add(i), i;
    }, t.prototype.resolveParams = function(e, n) {
      var r = this;
      return function(i, o) {
        var s, a2, c;
        try {
          return kw(i) ? fd(i) ? i.multiple ? (s = r.resolve(i.transform)).transform.apply(s, ni([r.resolveAll(i.token)], i.transformArgs)) : (a2 = r.resolve(i.transform)).transform.apply(a2, ni([r.resolve(i.token, e)], i.transformArgs)) : i.multiple ? r.resolveAll(i.token) : r.resolve(i.token, e) : fd(i) ? (c = r.resolve(i.transform, e)).transform.apply(c, ni([r.resolve(i.token, e)], i.transformArgs)) : r.resolve(i, e);
        } catch (l) {
          throw new Error(Lw(n, o, l));
        }
      };
    }, t.prototype.ensureNotDisposed = function() {
      if (this.disposed) throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }, t;
  })();
  var mg = new Hw();
  if (typeof Reflect > "u" || !Reflect.getMetadata) throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
  function Te() {
  }
  function zw(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function Ww(t) {
    return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
  }
  function vg(t) {
    return t();
  }
  function hd() {
    return /* @__PURE__ */ Object.create(null);
  }
  function _r(t) {
    t.forEach(vg);
  }
  function yg(t) {
    return typeof t == "function";
  }
  function Ze(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
  }
  function Vw(t) {
    return Object.keys(t).length === 0;
  }
  function bn(t, e, n, r) {
    if (t) {
      const i = bg(t, e, n, r);
      return t[0](i);
    }
  }
  function bg(t, e, n, r) {
    return t[1] && r ? zw(n.ctx.slice(), t[1](r(e))) : n.ctx;
  }
  function _n(t, e, n, r) {
    if (t[2] && r) {
      const i = t[2](r(n));
      if (e.dirty === void 0) return i;
      if (typeof i == "object") {
        const o = [], s = Math.max(e.dirty.length, i.length);
        for (let a2 = 0; a2 < s; a2 += 1) o[a2] = e.dirty[a2] | i[a2];
        return o;
      }
      return e.dirty | i;
    }
    return e.dirty;
  }
  function wn(t, e, n, r, i, o) {
    if (i) {
      const s = bg(e, n, r, o);
      t.p(s, i);
    }
  }
  function xn(t) {
    if (t.ctx.length > 32) {
      const e = [], n = t.ctx.length / 32;
      for (let r = 0; r < n; r++) e[r] = -1;
      return e;
    }
    return -1;
  }
  function Ge(t) {
    return t ?? "";
  }
  function N2(t, e) {
    t.appendChild(e);
  }
  function Di(t, e, n) {
    const r = qw(t);
    if (!r.getElementById(e)) {
      const i = B2("style");
      i.id = e, i.textContent = n, Gw(r, i);
    }
  }
  function qw(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument;
  }
  function Gw(t, e) {
    return N2(t.head || t, e), e.sheet;
  }
  function W2(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function z2(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function Hr(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function B2(t) {
    return document.createElement(t);
  }
  function de(t) {
    return document.createTextNode(t);
  }
  function oe() {
    return de(" ");
  }
  function qa() {
    return de("");
  }
  function Ve(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function T2(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function Xw(t) {
    return Array.from(t.childNodes);
  }
  function vt(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
  }
  function ya(t, e) {
    t.value = e ?? "";
  }
  function lc(t, e, n, r) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
  }
  function Kw(t, e, { bubbles: n = false, cancelable: r = false } = {}) {
    const i = document.createEvent("CustomEvent");
    return i.initCustomEvent(t, n, r, e), i;
  }
  var is;
  function dr(t) {
    is = t;
  }
  function Ro() {
    if (!is) throw new Error("Function called outside component initialization");
    return is;
  }
  function _g(t) {
    Ro().$$.on_mount.push(t);
  }
  function Gr(t) {
    Ro().$$.on_destroy.push(t);
  }
  function En() {
    const t = Ro();
    return (e, n, { cancelable: r = false } = {}) => {
      const i = t.$$.callbacks[e];
      if (i) {
        const o = Kw(e, n, { cancelable: r });
        return i.slice().forEach((s) => {
          s.call(t, o);
        }), !o.defaultPrevented;
      }
      return true;
    };
  }
  function Tr(t, e) {
    return Ro().$$.context.set(t, e), e;
  }
  function Kt(t) {
    return Ro().$$.context.get(t);
  }
  var Wi = [];
  var st = [];
  var Ji = [];
  var cc = [];
  var Jw = Promise.resolve();
  var uc = false;
  function Yw() {
    uc || (uc = true, Jw.then(ou));
  }
  function fc(t) {
    Ji.push(t);
  }
  function Yi(t) {
    cc.push(t);
  }
  var cl = /* @__PURE__ */ new Set();
  var Ui = 0;
  function ou() {
    if (Ui !== 0) return;
    const t = is;
    do {
      try {
        for (; Ui < Wi.length; ) {
          const e = Wi[Ui];
          Ui++, dr(e), Qw(e.$$);
        }
      } catch (e) {
        throw Wi.length = 0, Ui = 0, e;
      }
      for (dr(null), Wi.length = 0, Ui = 0; st.length; ) st.pop()();
      for (let e = 0; e < Ji.length; e += 1) {
        const n = Ji[e];
        cl.has(n) || (cl.add(n), n());
      }
      Ji.length = 0;
    } while (Wi.length);
    for (; cc.length; ) cc.pop()();
    uc = false, cl.clear(), dr(t);
  }
  function Qw(t) {
    if (t.fragment !== null) {
      t.update(), _r(t.before_update);
      const e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(fc);
    }
  }
  function Zw(t) {
    const e = [], n = [];
    Ji.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Ji = e;
  }
  var oa = /* @__PURE__ */ new Set();
  var ai;
  function lt() {
    ai = { r: 0, c: [], p: ai };
  }
  function ct() {
    ai.r || _r(ai.c), ai = ai.p;
  }
  function L2(t, e) {
    t && t.i && (oa.delete(t), t.i(e));
  }
  function U2(t, e, n, r) {
    if (t && t.o) {
      if (oa.has(t)) return;
      oa.add(t), ai.c.push(() => {
        oa.delete(t), r && (n && t.d(1), r());
      }), t.o(e);
    } else r && r();
  }
  function ba(t, e) {
    const n = e.token = {};
    function r(i, o, s, a2) {
      if (e.token !== n) return;
      e.resolved = a2;
      let c = e.ctx;
      s !== void 0 && (c = c.slice(), c[s] = a2);
      const l = i && (e.current = i)(c);
      let u2 = false;
      e.block && (e.blocks ? e.blocks.forEach((f, d3) => {
        d3 !== o && f && (lt(), U2(f, 1, 1, () => {
          e.blocks[d3] === f && (e.blocks[d3] = null);
        }), ct());
      }) : e.block.d(1), l.c(), L2(l, 1), l.m(e.mount(), e.anchor), u2 = true), e.block = l, e.blocks && (e.blocks[o] = l), u2 && ou();
    }
    if (Ww(t)) {
      const i = Ro();
      if (t.then((o) => {
        dr(i), r(e.then, 1, e.value, o), dr(null);
      }, (o) => {
        if (dr(i), r(e.catch, 2, e.error, o), dr(null), !e.hasCatch) throw o;
      }), e.current !== e.pending) return r(e.pending, 0), true;
    } else {
      if (e.current !== e.then) return r(e.then, 1, e.value, t), true;
      e.resolved = t;
    }
  }
  function wg(t, e, n) {
    const r = e.slice(), { resolved: i } = t;
    t.current === t.then && (r[t.value] = i), t.current === t.catch && (r[t.error] = i), t.block.p(r, n);
  }
  function Qi(t, e, n) {
    const r = t.$$.props[e];
    r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
  }
  function xe(t) {
    t && t.c();
  }
  function ge(t, e, n, r) {
    const { fragment: i, after_update: o } = t.$$;
    i && i.m(e, n), r || fc(() => {
      const s = t.$$.on_mount.map(vg).filter(yg);
      t.$$.on_destroy ? t.$$.on_destroy.push(...s) : _r(s), t.$$.on_mount = [];
    }), o.forEach(fc);
  }
  function me(t, e) {
    const n = t.$$;
    n.fragment !== null && (Zw(n.after_update), _r(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function ex(t, e) {
    t.$$.dirty[0] === -1 && (Wi.push(t), Yw(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  function rt2(t, e, n, r, i, o, s, a2 = [-1]) {
    const c = is;
    dr(t);
    const l = t.$$ = { fragment: null, ctx: [], props: o, update: Te, not_equal: i, bound: hd(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (c ? c.$$.context : [])), callbacks: hd(), dirty: a2, skip_bound: false, root: e.target || c.$$.root };
    s && s(l.root);
    let u2 = false;
    if (l.ctx = n ? n(t, e.props || {}, (f, d3, ...h2) => {
      const p = h2.length ? h2[0] : d3;
      return l.ctx && i(l.ctx[f], l.ctx[f] = p) && (!l.skip_bound && l.bound[f] && l.bound[f](p), u2 && ex(t, f)), d3;
    }) : [], l.update(), u2 = true, _r(l.before_update), l.fragment = r ? r(l.ctx) : false, e.target) {
      if (e.hydrate) {
        const f = Xw(e.target);
        l.fragment && l.fragment.l(f), f.forEach(z2);
      } else l.fragment && l.fragment.c();
      e.intro && L2(t.$$.fragment), ge(t, e.target, e.anchor, e.customElement), ou();
    }
    dr(c);
  }
  var it2 = class {
    $destroy() {
      me(this, 1), this.$destroy = Te;
    }
    $on(e, n) {
      if (!yg(n)) return Te;
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(e) {
      this.$$set && !Vw(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
    }
  };
  var tx = { [Zo.toString()]: "TenantHttpService", [rc.toString()]: "DataSourceHttpService", [Ti.toString()]: "EntityHttpService", [es.toString()]: "EntityNameService", [ko.toString()]: "BaseHttpService", [ic.toString()]: "LiveValueService" };
  function Qt(t, e = null) {
    let n = tx[t.toString()] ?? t.toString(), r = window.dependencyContainer ?? mg;
    if (r.isRegistered(t)) return r.resolve(t);
    if (r.isRegistered(n)) return r.resolve(n);
    if (window[n]) return window[n];
    if (e) return e;
    throw new Error(`Service ${n?.toString()} not found`);
  }
  function or(t, e, n = true) {
    const r = window.dependencyContainer ?? mg;
    try {
      if (r.isRegistered(t) && !n) return;
      r.registerInstance(t, e);
    } catch {
      throw new Error(`Failed to register service: ${t?.toString()}`);
    }
    return e;
  }
  function oC(t) {
    window.dependencyContainer = t;
  }
  function su(...t) {
    const e = { config: {}, state: {} };
    for (const { config: n, props: r } of t) Object.assign(e.config, n), Object.assign(e.state, r);
    return e;
  }
  var xg = new Hc(false);
  var nx = xg.asObservable().pipe(Ki((t) => !t), n0(1));
  var pd = {};
  var au = /* @__PURE__ */ new Map();
  var lu = new Ot();
  lu.asObservable();
  function rx(t) {
    au.set(t.name, t), lu.next({ type: "add", store: t });
  }
  function ix(t) {
    au.delete(t.name), lu.next({ type: "remove", store: t });
  }
  function ox() {
    return au;
  }
  var cu = class extends Hc {
    constructor(e) {
      super(e.state), this.storeDef = e, this.batchInProgress = false, this.context = { config: this.getConfig() }, this.state = e.state, this.initialState = this.getValue(), rx(this);
    }
    get name() {
      return this.storeDef.name;
    }
    getConfig() {
      return this.storeDef.config;
    }
    query(e) {
      return e(this.getValue());
    }
    update(...e) {
      const n = this.getValue();
      let r = e.reduce((i, o) => (i = o(i, this.context), i), n);
      pd.preStoreUpdate && (r = pd.preStoreUpdate(n, r, this.name)), r !== n && (this.state = r, xg.getValue() ? this.batchInProgress || (this.batchInProgress = true, nx.subscribe(() => {
        super.next(this.state), this.batchInProgress = false;
      })) : super.next(this.state));
    }
    getValue() {
      return this.state;
    }
    reset() {
      this.update(() => this.initialState);
    }
    combine(e) {
      let n = true;
      const r = {};
      return new Pt((i) => {
        for (const [o, s] of Object.entries(e)) i.add(s.subscribe((a2) => {
          r[o] = a2, n = true;
        }));
        return this.subscribe({ next() {
          n && (i.next(r), n = false);
        }, error(o) {
          i.error(o);
        }, complete() {
          i.complete();
        } });
      });
    }
    destroy() {
      ix(this), this.reset();
    }
    next(e) {
      this.update(() => e);
    }
    error() {
    }
    complete() {
    }
  };
  function sx(t, ...e) {
    const { state: n, config: r } = su(...e), { name: i } = t;
    return new cu({ name: i, state: n, config: r });
  }
  function uu(t) {
    return { props: t, config: void 0 };
  }
  function ax(t, e) {
    var n;
    const r = { source: (l) => l, preStoreInit: (l) => l, key: (n = e.key) != null ? n : `${t.name}@store`, runGuard() {
      return typeof window < "u";
    } }, i = Object.assign({}, r, e);
    if (!(i.runGuard != null && i.runGuard())) return { initialized$: Xi(false), unsubscribe() {
    } };
    const { storage: o } = e, s = new Sp(1), a2 = Pi(o.getItem(i.key)).subscribe((l) => {
      l && t.update((u2) => i.preStoreInit(Object.assign({}, u2, l))), s.next(true), s.complete();
    }), c = i.source(t).pipe(u0(1), zp((l) => o.setItem(i.key, l))).subscribe();
    return { initialized$: s.asObservable(), unsubscribe() {
      c.unsubscribe(), a2.unsubscribe();
    } };
  }
  function lx(t) {
    if (t) return { getItem(e) {
      const n = t.getItem(e);
      return Xi(n && JSON.parse(n));
    }, setItem(e, n) {
      return t.setItem(e, JSON.stringify(n)), Xi(true);
    }, removeItem(e) {
      return t.removeItem(e), Xi(true);
    } };
  }
  var cx = lx(typeof localStorage < "u" ? localStorage : void 0);
  var Bi = [];
  function _a(t, e = Te) {
    let n;
    const r = /* @__PURE__ */ new Set();
    function i(a2) {
      if (Ze(t, a2) && (t = a2, n)) {
        const c = !Bi.length;
        for (const l of r) l[1](), Bi.push(l, t);
        if (c) {
          for (let l = 0; l < Bi.length; l += 2) Bi[l][0](Bi[l + 1]);
          Bi.length = 0;
        }
      }
    }
    function o(a2) {
      i(a2(t));
    }
    function s(a2, c = Te) {
      const l = [a2, c];
      return r.add(l), r.size === 1 && (n = e(i) || Te), a2(t), () => {
        r.delete(l), r.size === 0 && n && (n(), n = null);
      };
    }
    return { set: i, update: o, subscribe: s };
  }
  var gd = _a(ae.Signal);
  var { config: ux, state: fx } = su(uu({ queryWithSubGroups: true, selectedTenant: null, pageSize: 10 }));
  var yi = sx({ name: "entity-select-selection" }, uu({ selectedEntities: [] }));
  var bi = new cu({ state: fx, config: ux, name: "entity-select-global" });
  ax(bi, { key: "entity-select-global", storage: cx });
  var _o = (t) => {
    const e = ox().get(`entity-select-type-${gd}`);
    if (e) return e;
    const { state: n, config: r } = su(uu({ filter: null, selectedGroup: null, lastSelectedEntities: [] }));
    return new cu({ state: n, config: r, name: `entity-select-type-${gd}` });
  };
  function md(t, e, n) {
    const r = t.slice();
    return r[16] = e[n], r;
  }
  function dx(t) {
    let e;
    return { c() {
      e = B2("div"), T2(e, "class", t[5]`p-[10px]`);
    }, m(n, r) {
      W2(n, e, r);
    }, p: Te, d(n) {
      n && z2(e);
    } };
  }
  function hx(t) {
    let e;
    function n(o, s) {
      return o[0] ? gx : px;
    }
    let r = n(t), i = r(t);
    return { c() {
      e = B2("div"), i.c(), T2(e, "class", t[5]`flex items-center`);
    }, m(o, s) {
      W2(o, e, s), i.m(e, null);
    }, p(o, s) {
      r === (r = n(o)) && i ? i.p(o, s) : (i.d(1), i = r(o), i && (i.c(), i.m(e, null)));
    }, d(o) {
      o && z2(e), i.d();
    } };
  }
  function px(t) {
    let e, n, r, i;
    return { c() {
      e = B2("span"), n = de("chevron_right"), T2(e, "class", t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`);
    }, m(o, s) {
      W2(o, e, s), N2(e, n), r || (i = Ve(e, "click", t[9]), r = true);
    }, p: Te, d(o) {
      o && z2(e), r = false, i();
    } };
  }
  function gx(t) {
    let e, n, r, i;
    return { c() {
      e = B2("span"), n = de("expand_more"), T2(e, "class", t[5]`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`);
    }, m(o, s) {
      W2(o, e, s), N2(e, n), r || (i = Ve(e, "click", t[8]), r = true);
    }, p: Te, d(o) {
      o && z2(e), r = false, i();
    } };
  }
  function vd(t) {
    let e, n, r, i, o, s = t[4], a2 = [];
    for (let l = 0; l < s.length; l += 1) a2[l] = yd(md(t, s, l));
    const c = (l) => U2(a2[l], 1, 1, () => {
      a2[l] = null;
    });
    return { c() {
      e = B2("div"), n = B2("div"), r = oe(), i = B2("div");
      for (let l = 0; l < a2.length; l += 1) a2[l].c();
      T2(n, "class", t[5]`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`), T2(i, "class", t[5]`w-full`), T2(e, "class", t[5]`flex w-full`);
    }, m(l, u2) {
      W2(l, e, u2), N2(e, n), N2(e, r), N2(e, i);
      for (let f = 0; f < a2.length; f += 1) a2[f] && a2[f].m(i, null);
      o = true;
    }, p(l, u2) {
      if (u2 & 28) {
        s = l[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d3 = md(l, s, f);
          a2[f] ? (a2[f].p(d3, u2), L2(a2[f], 1)) : (a2[f] = yd(d3), a2[f].c(), L2(a2[f], 1), a2[f].m(i, null));
        }
        for (lt(), f = s.length; f < a2.length; f += 1) c(f);
        ct();
      }
    }, i(l) {
      if (!o) {
        for (let u2 = 0; u2 < s.length; u2 += 1) L2(a2[u2]);
        o = true;
      }
    }, o(l) {
      a2 = a2.filter(Boolean);
      for (let u2 = 0; u2 < a2.length; u2 += 1) U2(a2[u2]);
      o = false;
    }, d(l) {
      l && z2(e), Hr(a2, l);
    } };
  }
  function yd(t) {
    let e, n;
    return e = new Sg({ props: { group: t[16], level: t[2] + 1, entityType: t[3] } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 16 && (o.group = r[16]), i & 4 && (o.level = r[2] + 1), i & 8 && (o.entityType = r[3]), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function mx(t) {
    var e, n;
    let r, i, o, s, a2, c, l = ((n = (e = t[1]) == null ? void 0 : e.Name) == null ? void 0 : n.Value) + "", u2, f, d3, h2, p;
    function g3(y3, b2) {
      return y3[4].length > 0 ? hx : dx;
    }
    let m2 = g3(t), w4 = m2(t), v2 = t[0] && vd(t);
    return { c() {
      r = B2("div"), i = B2("div"), o = B2("div"), s = oe(), w4.c(), a2 = oe(), c = B2("div"), u2 = de(l), f = oe(), v2 && v2.c(), T2(c, "class", t[5]`overflow-hidden whitespace-nowrap text-ellipsis w-full`), T2(i, "class", t[5]`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`), T2(r, "class", t[5]`group cursor-pointer`);
    }, m(y3, b2) {
      W2(y3, r, b2), N2(r, i), N2(i, o), N2(i, s), w4.m(i, null), N2(i, a2), N2(i, c), N2(c, u2), N2(r, f), v2 && v2.m(r, null), d3 = true, h2 || (p = Ve(i, "click", t[10]), h2 = true);
    }, p(y3, [b2]) {
      var _4, C3;
      m2 === (m2 = g3(y3)) && w4 ? w4.p(y3, b2) : (w4.d(1), w4 = m2(y3), w4 && (w4.c(), w4.m(i, a2))), (!d3 || b2 & 2) && l !== (l = ((C3 = (_4 = y3[1]) == null ? void 0 : _4.Name) == null ? void 0 : C3.Value) + "") && vt(u2, l), y3[0] ? v2 ? (v2.p(y3, b2), b2 & 1 && L2(v2, 1)) : (v2 = vd(y3), v2.c(), L2(v2, 1), v2.m(r, null)) : v2 && (lt(), U2(v2, 1, 1, () => {
        v2 = null;
      }), ct());
    }, i(y3) {
      d3 || (L2(v2), d3 = true);
    }, o(y3) {
      U2(v2), d3 = false;
    }, d(y3) {
      y3 && z2(r), w4.d(), v2 && v2.d(), h2 = false, p();
    } };
  }
  function vx(t, e, n) {
    const r = Qt(Ti);
    let { group: i } = e, { expanded: o = false } = e, { level: s = 1 } = e, { entityType: a2 } = e, c = Kt("tw"), l = [], u2 = new Ot(), f = _o();
    f.pipe(mr(u2), s0("selectedGroup")).subscribe((v2) => {
      var y3, b2;
      (y3 = v2.selectedGroup) == null || y3.Id, i?.Id, i && (b2 = v2.selectedGroup) != null && b2.Path.includes(i.Id) && n(0, o = true);
    });
    async function d3() {
      try {
        n(4, l = await (await r.queryConfiguration(ae.Group, { GroupId: i.Id })).data);
      } catch (v2) {
        console.error(v2);
      }
    }
    function h2() {
      n(0, o = !o);
    }
    function p() {
      f.update((v2) => ({ ...v2, selectedGroup: i }));
    }
    Gr(() => {
      u2.next(), u2.complete();
    });
    const g3 = () => h2(), m2 = () => h2(), w4 = () => p();
    return t.$$set = (v2) => {
      "group" in v2 && n(1, i = v2.group), "expanded" in v2 && n(0, o = v2.expanded), "level" in v2 && n(2, s = v2.level), "entityType" in v2 && n(3, a2 = v2.entityType);
    }, t.$$.update = () => {
      t.$$.dirty & 2 && i && d3();
    }, [o, i, s, a2, l, c, h2, p, g3, m2, w4];
  }
  var Sg = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, vx, mx, Ze, { group: 1, expanded: 0, level: 2, entityType: 3 });
    }
  };
  function yx(t) {
    Di(t, "svelte-1b4yyah", ".container.svelte-1b4yyah{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.ripple.svelte-1b4yyah{position:absolute;top:50%;left:50%;height:0;width:0;transform:translate(-50%, -50%);border-radius:50%;transition:all 0.125s ease-in-out;z-index:0}");
  }
  function bx(t) {
    let e;
    return { c() {
      e = de(t[0]);
    }, m(n, r) {
      W2(n, e, r);
    }, p(n, r) {
      r & 1 && vt(e, n[0]);
    }, d(n) {
      n && z2(e);
    } };
  }
  function _x(t) {
    let e, n, r, i, o, s, a2, c, l, u2;
    const f = t[11].default, d3 = bn(f, t, t[10], null), h2 = d3 || bx(t);
    return { c() {
      e = B2("div"), n = B2("div"), i = oe(), o = B2("span"), h2 && h2.c(), T2(n, "class", Ge(t[5]`ripple bg-gray-200 bg-opacity-50`) + " svelte-1b4yyah"), T2(n, "style", r = t[4] ? "width: 100% !important; height: 100% !important" : ""), T2(o, "class", Ge(t[5]`material-symbols-rounded z-[1] select-none`) + " svelte-1b4yyah"), T2(e, "class", s = Ge(t[5]`container group ${t[1]}`) + " svelte-1b4yyah"), T2(e, "style", a2 = "height: " + t[3] + "px; width: " + t[3] + "px; " + (t[2] ? "cursor: default !important; opacity: 0.4;" : ""));
    }, m(p, g3) {
      W2(p, e, g3), N2(e, n), N2(e, i), N2(e, o), h2 && h2.m(o, null), c = true, l || (u2 = [Ve(e, "mousedown", t[12]), Ve(e, "mouseup", t[13]), Ve(e, "mouseout", t[14]), Ve(e, "click", t[15]), Ve(e, "blur", wx)], l = true);
    }, p(p, [g3]) {
      (!c || g3 & 16 && r !== (r = p[4] ? "width: 100% !important; height: 100% !important" : "")) && T2(n, "style", r), d3 ? d3.p && (!c || g3 & 1024) && wn(d3, f, p, p[10], c ? _n(f, p[10], g3, null) : xn(p[10]), null) : h2 && h2.p && (!c || g3 & 1) && h2.p(p, c ? g3 : -1), (!c || g3 & 2 && s !== (s = Ge(p[5]`container group ${p[1]}`) + " svelte-1b4yyah")) && T2(e, "class", s), (!c || g3 & 12 && a2 !== (a2 = "height: " + p[3] + "px; width: " + p[3] + "px; " + (p[2] ? "cursor: default !important; opacity: 0.4;" : ""))) && T2(e, "style", a2);
    }, i(p) {
      c || (L2(h2, p), c = true);
    }, o(p) {
      U2(h2, p), c = false;
    }, d(p) {
      p && z2(e), h2 && h2.d(p), l = false, _r(u2);
    } };
  }
  var wx = (t) => {
  };
  function xx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { size: s = "medium" } = e, { className: a2 = "" } = e, { disabled: c = false } = e, l = Kt("tw"), u2, f, d3, h2 = En();
    function p(_4) {
      c || (n(4, f = true), d3 = _4.timeStamp);
    }
    function g3(_4) {
      const C3 = _4.timeStamp - d3;
      C3 < 300 ? setTimeout(() => {
        n(4, f = false);
      }, 300 - C3) : n(4, f = false);
    }
    function m2(_4) {
      c || h2("click", _4);
    }
    const w4 = (_4) => p(_4), v2 = (_4) => g3(_4), y3 = (_4) => g3(_4), b2 = (_4) => m2(_4);
    return t.$$set = (_4) => {
      "icon" in _4 && n(0, o = _4.icon), "size" in _4 && n(9, s = _4.size), "className" in _4 && n(1, a2 = _4.className), "disabled" in _4 && n(2, c = _4.disabled), "$$scope" in _4 && n(10, i = _4.$$scope);
    }, t.$$.update = () => {
      if (t.$$.dirty & 512) switch (s) {
        case "small":
          n(3, u2 = 24);
          break;
        case "medium":
          n(3, u2 = 40);
          break;
        case "large":
          n(3, u2 = 56);
          break;
      }
    }, [o, a2, c, u2, f, l, p, g3, m2, s, i, r, w4, v2, y3, b2];
  }
  var Dr = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, xx, _x, Ze, { icon: 0, size: 9, className: 1, disabled: 2 }, yx);
    }
  };
  function Sx(t) {
    let e, n, r, i, o, s, a2, c, l;
    return { c() {
      e = B2("div"), n = B2("input"), i = oe(), o = B2("div"), s = de(t[1]), T2(n, "type", "checkbox"), T2(n, "class", r = t[2]`mr-2 h-[18px] w-[18px] cursor-pointer`), T2(e, "class", a2 = t[2]`flex items-center cursor-pointer`);
    }, m(u2, f) {
      W2(u2, e, f), N2(e, n), t[7](n), N2(e, i), N2(e, o), N2(o, s), c || (l = [Ve(n, "click", t[8]), Ve(e, "click", t[9])], c = true);
    }, p(u2, [f]) {
      f & 4 && r !== (r = u2[2]`mr-2 h-[18px] w-[18px] cursor-pointer`) && T2(n, "class", r), f & 2 && vt(s, u2[1]), f & 4 && a2 !== (a2 = u2[2]`flex items-center cursor-pointer`) && T2(e, "class", a2);
    }, i: Te, o: Te, d(u2) {
      u2 && z2(e), t[7](null), c = false, _r(l);
    } };
  }
  function Ex(t, e, n) {
    let { readonly: r = false } = e, { label: i = "" } = e, { checked: o = false } = e, { indeterminate: s = false } = e, { tw: a2 = Kt("tw") } = e, c = En(), l;
    function u2(g3) {
      r || (n(5, o = !o), console.log("checked", o), c("change", { checked: o }));
    }
    function f(g3) {
      setTimeout(() => {
        l?.checked !== g3 && n(3, l.checked = g3, l);
      });
    }
    function d3(g3) {
      st[g3 ? "unshift" : "push"](() => {
        l = g3, n(3, l), n(5, o), n(6, s), n(11, f);
      });
    }
    const h2 = (g3) => r ? g3.preventDefault() : {}, p = (g3) => u2();
    return t.$$set = (g3) => {
      "readonly" in g3 && n(0, r = g3.readonly), "label" in g3 && n(1, i = g3.label), "checked" in g3 && n(5, o = g3.checked), "indeterminate" in g3 && n(6, s = g3.indeterminate), "tw" in g3 && n(2, a2 = g3.tw);
    }, t.$$.update = () => {
      t.$$.dirty & 104 && (console.log("checked", o), s && l && !o ? n(3, l.indeterminate = true, l) : l && (n(3, l.indeterminate = false, l), f(o)));
    }, [r, i, a2, l, u2, o, s, d3, h2, p];
  }
  var Cs = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Ex, Sx, Ze, { readonly: 0, label: 1, checked: 5, indeterminate: 6, tw: 2 });
    }
  };
  function bd(t, e, n) {
    const r = t.slice();
    return r[18] = e[n], r[20] = n, r;
  }
  function Cx(t) {
    let e;
    return { c() {
      e = de("edit");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function _d(t) {
    let e, n, r;
    return n = new Sg({ props: { group: t[3], expanded: true, entityType: t[0] } }), { c() {
      e = B2("div"), xe(n.$$.fragment), T2(e, "class", t[7]`flex-[2] overflow-auto`);
    }, m(i, o) {
      W2(i, e, o), ge(n, e, null), r = true;
    }, p(i, o) {
      const s = {};
      o & 8 && (s.group = i[3]), o & 1 && (s.entityType = i[0]), n.$set(s);
    }, i(i) {
      r || (L2(n.$$.fragment, i), r = true);
    }, o(i) {
      U2(n.$$.fragment, i), r = false;
    }, d(i) {
      i && z2(e), me(n);
    } };
  }
  function wd(t) {
    let e, n, r = t[4], i = [];
    for (let s = 0; s < r.length; s += 1) i[s] = Sd(bd(t, r, s));
    const o = (s) => U2(i[s], 1, 1, () => {
      i[s] = null;
    });
    return { c() {
      for (let s = 0; s < i.length; s += 1) i[s].c();
      e = qa();
    }, m(s, a2) {
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(s, a2);
      W2(s, e, a2), n = true;
    }, p(s, a2) {
      if (a2 & 757) {
        r = s[4];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = bd(s, r, c);
          i[c] ? (i[c].p(l, a2), L2(i[c], 1)) : (i[c] = Sd(l), i[c].c(), L2(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (lt(), c = r.length; c < i.length; c += 1) o(c);
        ct();
      }
    }, i(s) {
      if (!n) {
        for (let a2 = 0; a2 < r.length; a2 += 1) L2(i[a2]);
        n = true;
      }
    }, o(s) {
      i = i.filter(Boolean);
      for (let a2 = 0; a2 < i.length; a2 += 1) U2(i[a2]);
      n = false;
    }, d(s) {
      Hr(i, s), s && z2(e);
    } };
  }
  function xd(t) {
    let e, n;
    return e = new Cs({ props: { checked: t[5][t[18]] } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 48 && (o.checked = r[5][r[18]]), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function Ax(t) {
    return { c: Te, m: Te, p: Te, d: Te };
  }
  function Ix(t) {
    let e = t[21] + "", n;
    return { c() {
      n = de(e);
    }, m(r, i) {
      W2(r, n, i);
    }, p(r, i) {
      i & 17 && e !== (e = r[21] + "") && vt(n, e);
    }, d(r) {
      r && z2(n);
    } };
  }
  function $x(t) {
    return { c: Te, m: Te, p: Te, d: Te };
  }
  function Sd(t) {
    let e, n, r, i, o, s, a2, c = t[2] && xd(t), l = { ctx: t, current: null, token: null, hasCatch: false, pending: $x, then: Ix, catch: Ax, value: 21 };
    ba(r = t[6].resolveName(t[0], t[18]), l);
    function u2() {
      return t[11](t[18]);
    }
    return { c() {
      e = B2("div"), c && c.c(), n = oe(), l.block.c(), i = oe(), T2(e, "class", t[7]`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`);
    }, m(f, d3) {
      W2(f, e, d3), c && c.m(e, null), N2(e, n), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = i, N2(e, i), o = true, s || (a2 = Ve(e, "click", u2), s = true);
    }, p(f, d3) {
      t = f, t[2] ? c ? (c.p(t, d3), d3 & 4 && L2(c, 1)) : (c = xd(t), c.c(), L2(c, 1), c.m(e, n)) : c && (lt(), U2(c, 1, 1, () => {
        c = null;
      }), ct()), l.ctx = t, d3 & 17 && r !== (r = t[6].resolveName(t[0], t[18])) && ba(r, l) || wg(l, t, d3);
    }, i(f) {
      o || (L2(c), o = true);
    }, o(f) {
      U2(c), o = false;
    }, d(f) {
      f && z2(e), c && c.d(), l.block.d(), l.token = null, l = null, s = false, a2();
    } };
  }
  function Tx(t) {
    var e;
    let n, r, i = ((e = t[1]) == null ? void 0 : e.Name) + "", o, s, a2, c, l, u2, f, d3, h2, p, g3, m2;
    a2 = new Dr({ props: { size: "small", $$slots: { default: [Cx] }, $$scope: { ctx: t } } });
    let w4 = t[3] && _d(t), v2 = t[4] && t[4].length > 0 && wd(t);
    return { c() {
      n = B2("div"), r = B2("div"), o = de(i), s = oe(), xe(a2.$$.fragment), c = oe(), w4 && w4.c(), l = oe(), u2 = B2("div"), f = B2("div"), d3 = de("Zuletzt ausgew\xE4hlt"), h2 = oe(), v2 && v2.c(), T2(r, "class", t[7]`font-bold text-lg flex items-center cursor-pointer group`), T2(f, "class", t[7]`font-bold text-gray-700`), T2(u2, "class", t[7]`flex-1`), T2(n, "class", t[7]`flex flex-col w-full h-full overflow-hidden`);
    }, m(y3, b2) {
      W2(y3, n, b2), N2(n, r), N2(r, o), N2(r, s), ge(a2, r, null), N2(n, c), w4 && w4.m(n, null), N2(n, l), N2(n, u2), N2(u2, f), N2(f, d3), N2(u2, h2), v2 && v2.m(u2, null), p = true, g3 || (m2 = Ve(r, "click", t[10]), g3 = true);
    }, p(y3, [b2]) {
      var _4;
      (!p || b2 & 2) && i !== (i = ((_4 = y3[1]) == null ? void 0 : _4.Name) + "") && vt(o, i);
      const C3 = {};
      b2 & 4194304 && (C3.$$scope = { dirty: b2, ctx: y3 }), a2.$set(C3), y3[3] ? w4 ? (w4.p(y3, b2), b2 & 8 && L2(w4, 1)) : (w4 = _d(y3), w4.c(), L2(w4, 1), w4.m(n, l)) : w4 && (lt(), U2(w4, 1, 1, () => {
        w4 = null;
      }), ct()), y3[4] && y3[4].length > 0 ? v2 ? (v2.p(y3, b2), b2 & 16 && L2(v2, 1)) : (v2 = wd(y3), v2.c(), L2(v2, 1), v2.m(u2, null)) : v2 && (lt(), U2(v2, 1, 1, () => {
        v2 = null;
      }), ct());
    }, i(y3) {
      p || (L2(a2.$$.fragment, y3), L2(w4), L2(v2), p = true);
    }, o(y3) {
      U2(a2.$$.fragment, y3), U2(w4), U2(v2), p = false;
    }, d(y3) {
      y3 && z2(n), me(a2), w4 && w4.d(), v2 && v2.d(), g3 = false, m2();
    } };
  }
  function kx(t, e, n) {
    let r = Qt(Ti), i = Qt(es), { entityType: o } = e, { selectedTenant: s } = e, { selectMultiple: a2 = false } = e, c = Kt("tw"), l = null, u2, f = [], d3 = {}, h2 = En(), p = new Ot(), g3 = _o();
    g3.pipe(mr(p)).subscribe((_4) => {
      n(4, u2 = _4.lastSelectedEntities);
    });
    const m2 = yi.subscribe((_4) => {
      f = _4.selectedEntities, n(5, d3 = {});
      for (let C3 of f) n(5, d3[C3.Id] = true, d3);
    });
    async function w4(_4) {
      var C3;
      try {
        n(3, l = await r.getEntityById(ae.Group, _4)), (!((C3 = g3.value) != null && C3.selectedGroup) || g3.value.selectedGroup.Id != l.Id) && g3.update((x2) => ({ ...x2, selectedGroup: l }));
      } catch (x2) {
        console.log(x2);
      }
    }
    async function v2(_4) {
      let C3 = await r.getEntityById(o, _4);
      a2 ? d3[_4] ? f = f.filter((x2) => x2.Id !== _4) : f.push(C3) : f = [C3], yi.update((x2) => ({ ...x2, selectedEntities: f }));
    }
    Gr(() => {
      console.log("onDestroy"), m2.unsubscribe();
    });
    const y3 = () => h2("changeTenant"), b2 = (_4) => v2(_4);
    return t.$$set = (_4) => {
      "entityType" in _4 && n(0, o = _4.entityType), "selectedTenant" in _4 && n(1, s = _4.selectedTenant), "selectMultiple" in _4 && n(2, a2 = _4.selectMultiple);
    }, t.$$.update = () => {
      t.$$.dirty & 2 && (console.log("building sidebar", s), s && s.Root && w4(s.Root));
    }, [o, s, a2, l, u2, d3, i, c, h2, v2, y3, b2];
  }
  var Rx = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, kx, Tx, Ze, { entityType: 0, selectedTenant: 1, selectMultiple: 2 });
    }
  };
  var Ox = (t) => ({});
  var Ed = (t) => ({});
  function Px(t) {
    let e, n, r, i;
    const o = t[2].default, s = bn(o, t, t[1], null), a2 = t[2].pagination, c = bn(a2, t, t[1], Ed);
    return { c() {
      e = B2("div"), n = B2("div"), s && s.c(), r = oe(), c && c.c(), T2(n, "class", "w-full overflow-auto flex-1"), T2(e, "class", "flex flex-col h-full");
    }, m(l, u2) {
      W2(l, e, u2), N2(e, n), s && s.m(n, null), N2(e, r), c && c.m(e, null), i = true;
    }, p(l, [u2]) {
      s && s.p && (!i || u2 & 2) && wn(s, o, l, l[1], i ? _n(o, l[1], u2, null) : xn(l[1]), null), c && c.p && (!i || u2 & 2) && wn(c, a2, l, l[1], i ? _n(a2, l[1], u2, Ox) : xn(l[1]), Ed);
    }, i(l) {
      i || (L2(s, l), L2(c, l), i = true);
    }, o(l) {
      U2(s, l), U2(c, l), i = false;
    }, d(l) {
      l && z2(e), s && s.d(l), c && c.d(l);
    } };
  }
  function Dx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { startSort: o = null } = e, s = En(), a2 = _a(o);
    Tr("audako:table:sort", a2);
    let c = a2.subscribe((l) => {
      s("sort", l);
    });
    return Gr(() => {
      c();
    }), t.$$set = (l) => {
      "startSort" in l && n(0, o = l.startSort), "$$scope" in l && n(1, i = l.$$scope);
    }, [o, i, r];
  }
  var Mx = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Dx, Px, Ze, { startSort: 0 });
    }
  };
  function Lx(t) {
    Di(t, "svelte-1bnhl4g", ".audako-tableheader-flexrow{display:flex;height:40px;position:sticky;top:0;background:white;font-weight:700}.audako-tableheader-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center}.audako-tableheader-flexrow>*:first-child{padding-left:12px !important}.audako-tableheader-flexrow>*:last-child{padding-right:12px !important}");
  }
  function Fx(t) {
    let e, n;
    const r = t[2].default, i = bn(r, t, t[1], null);
    return { c() {
      e = B2("div"), i && i.c(), T2(e, "class", "audako-tableheader-flexrow");
    }, m(o, s) {
      W2(o, e, s), i && i.m(e, null), t[3](e), n = true;
    }, p(o, [s]) {
      i && i.p && (!n || s & 2) && wn(i, r, o, o[1], n ? _n(r, o[1], s, null) : xn(o[1]), null);
    }, i(o) {
      n || (L2(i, o), n = true);
    }, o(o) {
      U2(i, o), n = false;
    }, d(o) {
      o && z2(e), i && i.d(o), t[3](null);
    } };
  }
  function Nx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, o;
    function s(a2) {
      st[a2 ? "unshift" : "push"](() => {
        o = a2, n(0, o);
      });
    }
    return t.$$set = (a2) => {
      "$$scope" in a2 && n(1, i = a2.$$scope);
    }, [o, i, r, s];
  }
  var Ux = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Nx, Fx, Ze, {}, Lx);
    }
  };
  function Bx(t) {
    Di(t, "svelte-11sxgak", ".header-cell.svelte-11sxgak{display:flex;width:100%;height:100%;align-items:center}");
  }
  function Cd(t) {
    let e, n, r;
    return { c() {
      e = B2("span"), n = de("north"), T2(e, "class", "material-symbols-rounded text-xs transition-all"), T2(e, "style", r = (t[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (t[2] == null ? "opacity: 0;" : "opacity: 1;"));
    }, m(i, o) {
      W2(i, e, o), N2(e, n);
    }, p(i, o) {
      o & 4 && r !== (r = (i[2] == "asc" ? "transform: rotateX(0);" : "transform: rotateX(-180deg);") + (i[2] == null ? "opacity: 0;" : "opacity: 1;")) && T2(e, "style", r);
    }, d(i) {
      i && z2(e);
    } };
  }
  function jx(t) {
    let e, n, r, i, o, s, a2;
    const c = t[6].default, l = bn(c, t, t[5], null);
    let u2 = t[0] && Cd(t);
    return { c() {
      e = B2("div"), n = B2("div"), l && l.c(), r = oe(), u2 && u2.c(), T2(e, "class", i = "header-cell " + (t[0] ? "cursor-pointer" : "") + " " + t[1] + " svelte-11sxgak");
    }, m(f, d3) {
      W2(f, e, d3), N2(e, n), l && l.m(n, null), N2(e, r), u2 && u2.m(e, null), o = true, s || (a2 = Ve(e, "click", t[7]), s = true);
    }, p(f, [d3]) {
      l && l.p && (!o || d3 & 32) && wn(l, c, f, f[5], o ? _n(c, f[5], d3, null) : xn(f[5]), null), f[0] ? u2 ? u2.p(f, d3) : (u2 = Cd(f), u2.c(), u2.m(e, null)) : u2 && (u2.d(1), u2 = null), (!o || d3 & 3 && i !== (i = "header-cell " + (f[0] ? "cursor-pointer" : "") + " " + f[1] + " svelte-11sxgak")) && T2(e, "class", i);
    }, i(f) {
      o || (L2(l, f), o = true);
    }, o(f) {
      U2(l, f), o = false;
    }, d(f) {
      f && z2(e), l && l.d(f), u2 && u2.d(), s = false, a2();
    } };
  }
  function Hx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { sortable: o = false } = e, { id: s } = e, { container$class: a2 = "" } = e, c = "asc", l = Kt("audako:table:sort");
    console.log(l);
    let u2 = l.subscribe((h2) => {
      s && h2?.active === s ? n(2, c = h2.direction) : n(2, c = null);
    });
    function f() {
      c === "asc" ? n(2, c = "desc") : c === "desc" ? n(2, c = null) : n(2, c = "asc"), l.set(c ? { active: s, direction: c } : null);
    }
    Gr(() => {
      u2();
    });
    const d3 = () => f();
    return t.$$set = (h2) => {
      "sortable" in h2 && n(0, o = h2.sortable), "id" in h2 && n(4, s = h2.id), "container$class" in h2 && n(1, a2 = h2.container$class), "$$scope" in h2 && n(5, i = h2.$$scope);
    }, [o, a2, c, f, s, i, r, d3];
  }
  var dc = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Hx, jx, Ze, { sortable: 0, id: 4, container$class: 1 }, Bx);
    }
  };
  function zx(t) {
    Di(t, "svelte-hl0z9w", ".audako-tablebody-flexrow{display:flex;height:40px;width:100%}.audako-tablebody-flexrow>*{flex:1;height:100%;padding:4px 0;display:flex;align-items:center;padding:0 4px}.audako-tablebody-flexrow>*:first-child{padding-left:12px}.audako-tablebody-flexrow>*:last-child{padding-right:12px}");
  }
  function Wx(t) {
    let e, n, r, i, o;
    const s = t[3].default, a2 = bn(s, t, t[2], null);
    return { c() {
      e = B2("div"), a2 && a2.c(), T2(e, "class", n = "audako-tablebody-flexrow " + t[0]);
    }, m(c, l) {
      W2(c, e, l), a2 && a2.m(e, null), r = true, i || (o = Ve(e, "click", t[1]), i = true);
    }, p(c, [l]) {
      a2 && a2.p && (!r || l & 4) && wn(a2, s, c, c[2], r ? _n(s, c[2], l, null) : xn(c[2]), null), (!r || l & 1 && n !== (n = "audako-tablebody-flexrow " + c[0])) && T2(e, "class", n);
    }, i(c) {
      r || (L2(a2, c), r = true);
    }, o(c) {
      U2(a2, c), r = false;
    }, d(c) {
      c && z2(e), a2 && a2.d(c), i = false, o();
    } };
  }
  function Vx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { flexrow$class: o = "" } = e, s = En();
    function a2(c) {
      s("click", c);
    }
    return t.$$set = (c) => {
      "flexrow$class" in c && n(0, o = c.flexrow$class), "$$scope" in c && n(2, i = c.$$scope);
    }, [o, a2, i, r];
  }
  var qx = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Vx, Wx, Ze, { flexrow$class: 0 }, zx);
    }
  };
  function Gx(t) {
    let e, n, r;
    const i = t[3].default, o = bn(i, t, t[2], null);
    return { c() {
      e = B2("div"), o && o.c(), T2(e, "class", n = t[1]`border-t overflow-hidden ${t[0]}`);
    }, m(s, a2) {
      W2(s, e, a2), o && o.m(e, null), r = true;
    }, p(s, [a2]) {
      o && o.p && (!r || a2 & 4) && wn(o, i, s, s[2], r ? _n(i, s[2], a2, null) : xn(s[2]), null), (!r || a2 & 1 && n !== (n = s[1]`border-t overflow-hidden ${s[0]}`)) && T2(e, "class", n);
    }, i(s) {
      r || (L2(o, s), r = true);
    }, o(s) {
      U2(o, s), r = false;
    }, d(s) {
      s && z2(e), o && o.d(s);
    } };
  }
  function Xx(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, o = Kt("tw"), { container$class: s = "" } = e;
    return t.$$set = (a2) => {
      "container$class" in a2 && n(0, s = a2.container$class), "$$scope" in a2 && n(2, i = a2.$$scope);
    }, [s, o, i, r];
  }
  var hc = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, Xx, Gx, Ze, { container$class: 0 });
    }
  };
  var Bs;
  var Kx = new Uint8Array(16);
  function Jx() {
    if (!Bs && (Bs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Bs)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Bs(Kx);
  }
  var Yx = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  function Qx(t) {
    return typeof t == "string" && Yx.test(t);
  }
  var bt = [];
  for (ul2 = 0; ul2 < 256; ++ul2) bt.push((ul2 + 256).toString(16).substr(1));
  var ul2;
  function Zx(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (bt[t[e + 0]] + bt[t[e + 1]] + bt[t[e + 2]] + bt[t[e + 3]] + "-" + bt[t[e + 4]] + bt[t[e + 5]] + "-" + bt[t[e + 6]] + bt[t[e + 7]] + "-" + bt[t[e + 8]] + bt[t[e + 9]] + "-" + bt[t[e + 10]] + bt[t[e + 11]] + bt[t[e + 12]] + bt[t[e + 13]] + bt[t[e + 14]] + bt[t[e + 15]]).toLowerCase();
    if (!Qx(n)) throw TypeError("Stringified UUID is invalid");
    return n;
  }
  function eS(t, e, n) {
    t = t || {};
    var r = t.random || (t.rng || Jx)();
    return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Zx(r);
  }
  var tS = { backdrop: true, positioning: "center", closeOnClickOutside: true, closeOnEscape: true, anchorElement: null, customPosition: { x: 0, y: 0 } };
  var wa = class {
    constructor(e) {
      jr(this, "_popupContainer"), jr(this, "rootElement"), this.rootElement = e, this._popupContainer = {};
    }
    openPopup(e, n, r) {
      r = { ...tS, ...r }, console.log("openPopup", r);
      const i = eS(), o = new Ot(), s = this._popupContainer[e] ?? this._createPopupContainer(e, r), a2 = this._createPopupWrapper(n, r);
      r.inTransitionClassList && (a2.style.transition = `all ${r.inTransitionDuration ?? 100}ms`, a2.classList.add(r.inTransitionClassList)), s.appendChild(a2);
      let c = null;
      const l = () => {
        console.log("close"), this._removePopupWrapper(a2, r), o.next(null), o.complete(), document.removeEventListener("keydown", c);
      };
      return c = (u2) => {
        console.log("closeOnEscapeRef", u2), u2.key === "Escape" && l();
      }, r.closeOnClickOutside && s.addEventListener("click", (u2) => {
        u2.target === s && l();
      }), r.closeOnEscape && document.addEventListener("keydown", c), this._positionPopup(s, a2, r), n.style.visibility = "visible", r.inTransitionClassList && (n.classList.add(r.inTransitionClassList), n.style.transition = `all ${r.inTransitionDuration ?? 100}ms`), { popupId: i, afterClosed: Qo(o).then(() => console.log("afterClosed")), close: l };
    }
    _removePopupWrapper(e, n) {
      const r = e.parentElement, i = () => {
        e.remove(), r.children.length === 0 && this._removeContainer(r.id);
      };
      n.outTransitionClassList ? (e.style.transition = `all ${n.outTransitionDuration ?? 100}ms`, e.classList.remove(n.inTransitionClassList), e.classList.add(n.outTransitionClassList), setTimeout(() => {
        i();
      }, n.outTransitionDuration ?? 100)) : i();
    }
    _removeContainer(e) {
      document.getElementById(e).remove(), this._popupContainer[e] = void 0;
    }
    _createPopupContainer(e, n) {
      const r = Object.keys(this._popupContainer).length, i = document.createElement("div");
      return i.id = e, i.classList.add(`${e}`), i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.overflowY = "hidden", i.style.overflowX = "hidden", i.style.zIndex = (1e3 + r).toString(), n.backdrop && (i.style.backgroundColor = "rgba(0,0,0,0.5)"), this.rootElement.appendChild(i), this._popupContainer[e] = i, i;
    }
    _createPopupWrapper(e, n) {
      const r = document.createElement("div");
      return r.classList.add("popup-wrapper"), r.style.position = "absolute", r.appendChild(e), r;
    }
    _positionPopup(e, n, r) {
      var i, o, s, a2, c;
      const l = n.style, u2 = e.getBoundingClientRect(), f = n.getBoundingClientRect();
      console.log("popupRect", f, n.style, r);
      const d3 = (i = r.anchorElement) == null ? void 0 : i.getBoundingClientRect();
      l.position = "absolute", r.positioning === "center" ? (l.top = "50%", l.left = "50%", l.transform = "translate(-50%, -50%)") : r.positioning === "anchor" ? (n.style.top = `${this._getTopPosition(d3.top, f.height, u2.height, d3.height, r.anchorVertical ?? "bottom") + (((o = r.customPosition) == null ? void 0 : o.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(d3.left - 4, f.width, u2.width, r.anchorHorizontal ?? "right") + (((s = r.customPosition) == null ? void 0 : s.x) ?? 0)}px`) : r.positioning === "custom" && (n.style.top = `${this._getTopPosition(r.customPosition.y, f.height, u2.height) + (((a2 = r.customPosition) == null ? void 0 : a2.y) ?? 0)}px`, n.style.left = `${this._getLeftPosition(r.customPosition.x, f.width, u2.width) + (((c = r.customPosition) == null ? void 0 : c.x) ?? 0)}px`);
    }
    _getTopPosition(e, n, r, i = 0, o = "bottom") {
      return o == "top" ? e + n + 40 < r ? e + i / 3 : e - n + i / 3 : e - n > 40 ? e - n + i / 3 : e + i / 3;
    }
    _getLeftPosition(e, n, r, i = "right") {
      return console.log(arguments), i == "left" ? Math.min(e, r - n - 10) : e - n > 40 ? e - n : e + n;
    }
  };
  var nS = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function rS(t) {
    return nS.get(t);
  }
  function iS(t) {
    var e = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);
    return e ? e[1] ? 1 : e[2] ? 2 : e[3] ? 3 : 5 : 0;
  }
  function oS(t, e) {
    var n = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);
    return n ? n[1] ? /^sti/i.test(e) ? 1 : 0 : n[2] ? /^pat/i.test(e) ? 1 : 0 : n[3] ? /^image-/i.test(e) ? 1 : 0 : n[4] ? e[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(e) ? 4 : 0 : 0;
  }
  var je = (t, e) => !!~t.indexOf(e);
  var Ie = (t, e = "-") => t.join(e);
  var pc = (t, e) => Ie(t.filter(Boolean), e);
  var Ae = (t, e = 1) => t.slice(e);
  var sS = (t) => t;
  var Eg = () => {
  };
  var Jn = (t) => t[0].toUpperCase() + Ae(t);
  var fu = (t) => t.replace(/[A-Z]/g, "-$&").toLowerCase();
  var _i = (t, e) => {
    for (; typeof t == "function"; ) t = t(e);
    return t;
  };
  var Cg = (t, e) => {
    t.size > e && t.delete(t.keys().next().value);
  };
  var Ag = (t, e) => !je("@:&", t[0]) && (je("rg", (typeof e)[5]) || Array.isArray(e));
  var du = (t, e, n) => e ? Object.keys(e).reduce((r, i) => {
    const o = _i(e[i], n);
    return Ag(i, o) ? r[fu(i)] = o : r[i] = i[0] == "@" && je("figa", i[1]) ? (r[i] || []).concat(o) : du(r[i] || {}, o, n), r;
  }, t) : t;
  var Ig = typeof CSS < "u" && CSS.escape || ((t) => t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var Ga = (t) => (Array.isArray(t) || (t = [t]), "@media " + Ie(t.map((e) => (typeof e == "string" && (e = { min: e }), e.raw || Ie(Object.keys(e).map((n) => `(${n}-width:${e[n]})`), " and "))), ","));
  var fl = (t) => {
    for (var e = 9, n = t.length; n--; ) e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
    return "tw-" + ((e ^ e >>> 9) >>> 0).toString(36);
  };
  var aS = (t, e) => {
    for (var n = 0, r = t.length; n < r; ) {
      const i = r + n >> 1;
      t[i] <= e ? n = i + 1 : r = i;
    }
    return r;
  };
  var yr;
  var Zi;
  var kr = (t = "") => (yr.push(t), "");
  var hu = (t) => {
    yr.length = Math.max(yr.lastIndexOf("") + ~~t, 0);
  };
  var lS = (t) => t && !je("!:", t[0]);
  var cS = (t) => t[0] == ":";
  var $g = (t, e) => {
    Zi.push({ v: yr.filter(cS), d: t, n: e, i: je(yr, "!"), $: "" });
  };
  var Ad = (t) => {
    const e = t[0] == "-";
    e && (t = Ae(t));
    const n = Ie(yr.filter(lS));
    return $g(t == "&" ? n : (n && n + "-") + t, e), "";
  };
  var Ko = (t, e) => {
    let n = "";
    for (let r, i = false, o = 0; r = t[o++]; ) {
      if (i || r == "[") {
        n += r, i = r != "]";
        continue;
      }
      switch (r) {
        case ":":
          n = n && kr(":" + (t[o] == r ? t[o++] : "") + n);
          break;
        case "(":
          n = n && kr(n), kr();
          break;
        case "!":
          kr(r);
          break;
        case ")":
        case " ":
        case "	":
        case `
`:
        case "\r":
          n = n && Ad(n), hu(r !== ")");
          break;
        default:
          n += r;
      }
    }
    n && (e ? kr(":" + n) : n.slice(-1) == "-" ? kr(n.slice(0, -1)) : Ad(n));
  };
  var Tg = (t) => {
    kr(), xa(t), hu();
  };
  var uS = (t, e) => {
    if (e) {
      kr();
      const n = je("tbu", (typeof e)[1]);
      Ko(t, n), n && Tg(e), hu();
    }
  };
  var xa = (t) => {
    switch (typeof t) {
      case "string":
        Ko(t);
        break;
      case "function":
        $g(t);
        break;
      case "object":
        Array.isArray(t) ? t.forEach(Tg) : t && Object.keys(t).forEach((e) => {
          uS(e, t[e]);
        });
    }
  };
  var Id = /* @__PURE__ */ new WeakMap();
  var fS = (t) => {
    let e = Id.get(t);
    if (!e) {
      let n = NaN, r = "";
      e = t.map((i, o) => {
        if (n !== n && (i.slice(-1) == "[" || je(":-(", (t[o + 1] || "")[0])) && (n = o), o >= n) return (c) => {
          o == n && (r = ""), r += i, je("rg", (typeof c)[5]) ? r += c : c && (Ko(r), r = "", xa(c)), o == t.length - 1 && Ko(r);
        };
        const s = Zi = [];
        Ko(i);
        const a2 = [...yr];
        return Zi = [], (c) => {
          Zi.push(...s), yr = [...a2], c && xa(c);
        };
      }), Id.set(t, e);
    }
    return e;
  };
  var gc = (t) => (yr = [], Zi = [], Array.isArray(t[0]) && Array.isArray(t[0].raw) ? fS(t[0]).forEach((e, n) => e(t[n + 1])) : xa(t), Zi);
  var mc;
  var dS = (t, e) => (typeof e == "function" && (mc = false), e);
  var hS = (t) => {
    mc = true;
    const e = JSON.stringify(t, dS);
    return mc && e;
  };
  var $d = /* @__PURE__ */ new WeakMap();
  var pS = (t, e) => {
    const n = hS(e);
    let r;
    if (n) {
      var i = $d.get(t);
      i || $d.set(t, i = /* @__PURE__ */ new Map()), r = i.get(n);
    }
    return r || (r = Object.defineProperty((o, s) => (s = Array.isArray(o) ? s : o, _i(t(e, s), s)), "toJSON", { value: () => n || e }), i && (i.set(n, r), Cg(i, 1e4))), r;
  };
  var gS = (t, { css: e }) => e(gc(t));
  var mS = (...t) => pS(gS, t);
  var kg = (t) => (e, n, r, i) => {
    if (e) {
      const o = n && t(n);
      if (o && o.length > 0) return o.reduce((s, a2) => (s[pc([r, a2, i])] = e, s), {});
    }
  };
  var vS = kg((t) => ({ t: ["top-left", "top-right"], r: ["top-right", "bottom-right"], b: ["bottom-left", "bottom-right"], l: ["bottom-left", "top-left"], tl: ["top-left"], tr: ["top-right"], bl: ["bottom-left"], br: ["bottom-right"] })[t]);
  var Sa = (t) => {
    const e = ({ x: "lr", y: "tb" }[t] || t || "").split("").sort();
    for (let n = e.length; n--; ) if (!(e[n] = { t: "top", r: "right", b: "bottom", l: "left" }[e[n]])) return;
    if (e.length) return e;
  };
  var Rg = kg(Sa);
  var yS = (t, e) => t + (e[1] == ":" ? Ae(e, 2) + ":" : Ae(e)) + ":";
  var Td = (t, e = t.d) => typeof e == "function" ? "" : t.v.reduce(yS, "") + (t.i ? "!" : "") + (t.n ? "-" : "") + e;
  var P2;
  var ri;
  var ke;
  var js = (t) => t == "cols" ? "columns" : "rows";
  var As = (t) => (e, n, r) => ({ [t]: r + ((P2 = Ie(e)) && "-" + P2) });
  var Ye = (t, e) => (n, r, i) => (P2 = Ie(n, e)) && { [t || i]: P2 };
  var At = (t) => (e, { theme: n }, r) => (P2 = n(t || r, e)) && { [t || r]: P2 };
  var Hs = (t, e) => (n, { theme: r }, i) => (P2 = r(t || i, n, Ie(n, e))) && { [t || i]: P2 };
  var jn = (t, e) => (n, r) => t(n, r, e);
  var rr = As("display");
  var Uo = As("position");
  var ji = As("textTransform");
  var Hi = As("textDecoration");
  var zs = As("fontStyle");
  var Cr = (t) => (e, n, r) => ({ ["--tw-" + t]: r, fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)" });
  var Ws = (t, { theme: e }, n) => (P2 = e("inset", t)) && { [n]: P2 };
  var Vo = (t, e, n, r = n) => (P2 = e(r + "Opacity", Ae(t))) && { [`--tw-${n}-opacity`]: P2 };
  var dl = (t, e) => Math.round(parseInt(t, 16) * e);
  var Ea = (t, e, n) => t && t[0] == "#" && (P2 = (t.length - 1) / 3) && (ke = [17, 1, 0.062272][P2 - 1]) ? `rgba(${dl(t.substr(1, P2), ke)},${dl(t.substr(1 + P2, P2), ke)},${dl(t.substr(1 + 2 * P2, P2), ke)},${e ? `var(--tw-${e}${n ? "," + n : ""})` : n || 1})` : t;
  var sa = (t, e, n) => n && typeof n == "string" ? (P2 = Ea(n, e + "-opacity")) && P2 !== n ? { [`--tw-${e}-opacity`]: "1", [t]: [n, P2] } : { [t]: n } : void 0;
  var kd = (t) => (ke = Ea(t, "", "0")) == P2 ? "transparent" : ke;
  var Rd = (t, { theme: e }, n, r, i, o) => (P2 = { x: ["right", "left"], y: ["bottom", "top"] }[t[0]]) && (ke = `--tw-${n}-${t[0]}-reverse`) ? t[1] == "reverse" ? { [ke]: "1" } : { [ke]: "0", [pc([i, P2[0], o])]: (ri = e(r, Ae(t))) && `calc(${ri} * var(${ke}))`, [pc([i, P2[1], o])]: ri && [ri, `calc(${ri} * calc(1 - var(${ke})))`] } : void 0;
  var Og = (t, e) => e[0] && { [t]: (je("wun", (e[0] || "")[3]) ? "space-" : "") + e[0] };
  var hl = (t) => (e) => je(["start", "end"], e[0]) ? { [t]: "flex-" + e[0] } : Og(t, e);
  var Od = (t) => (e, { theme: n }) => {
    if (P2 = n("grid" + Jn(t), e, "")) return { ["grid-" + t]: P2 };
    switch (e[0]) {
      case "span":
        return e[1] && { ["grid-" + t]: `span ${e[1]} / span ${e[1]}` };
      case "start":
      case "end":
        return (P2 = n("grid" + Jn(t) + Jn(e[0]), Ae(e), Ie(Ae(e)))) && { [`grid-${t}-${e[0]}`]: P2 };
    }
  };
  var Pg = (t, { theme: e }, n) => {
    switch (t[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return Ye("borderStyle")(t);
      case "collapse":
      case "separate":
        return Ye("borderCollapse")(t);
      case "opacity":
        return Vo(t, e, n);
    }
    return (P2 = e(n + "Width", t, "")) ? { borderWidth: P2 } : sa("borderColor", n, e(n + "Color", t));
  };
  var bS = (t, e, n) => {
    var r;
    const i = (r = Sa(t[0])) == null ? void 0 : r.map(Jn);
    i && (t = Ae(t));
    let o = Pg(t, e, n);
    return i && o && typeof o == "object" && (o = Object.entries(o).reduce((s, [a2, c]) => {
      if (a2.startsWith("border")) for (const l of i) s[a2.slice(0, 6) + l + a2.slice(6)] = c;
      else s[a2] = c;
      return s;
    }, {})), o;
  };
  var vc = (t) => (t ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var pl = (t, e, n) => t[0] && (P2 = e.theme(n, t[1] || t[0])) && { [`--tw-${n}-x`]: t[0] !== "y" && P2, [`--tw-${n}-y`]: t[0] !== "x" && P2, transform: [`${n}${t[1] ? t[0].toUpperCase() : ""}(${P2})`, vc()] };
  var Dg = (t) => (e, n, r) => r[1] ? Rg(n.theme(t, e), r[1], t) : At(t)(e, n, r);
  var Zr = Dg("padding");
  var ei = Dg("margin");
  var Pd = (t, { theme: e }, n) => (P2 = { w: "width", h: "height" }[t[0]]) && { [P2 = `${n}${Jn(P2)}`]: e(P2, Ae(t)) };
  var In = (t, { theme: e }, n) => {
    const r = n.split("-"), i = r[0] == "backdrop" ? r[0] + "-" : "";
    if (i || t.unshift(...r), t[0] == "filter") {
      const o = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", i && "opacity", "saturate", "sepia", !i && "drop-shadow"].filter(Boolean);
      return t[1] == "none" ? { [i + "filter"]: "none" } : o.reduce((s, a2) => (s["--tw-" + i + a2] = "var(--tw-empty,/*!*/ /*!*/)", s), { [i + "filter"]: o.map((s) => `var(--tw-${i}${s})`).join(" ") });
    }
    return ke = t.shift(), je(["hue", "drop"], ke) && (ke += Jn(t.shift())), (P2 = e(i ? "backdrop" + Jn(ke) : ke, t)) && { ["--tw-" + i + ke]: (Array.isArray(P2) ? P2 : [P2]).map((o) => `${fu(ke)}(${o})`).join(" ") };
  };
  var _S = { group: (t, { tag: e }, n) => e(Ie([n, ...t])), hidden: jn(rr, "none"), inline: rr, block: rr, contents: rr, flow: rr, table: (t, e, n) => je(["auto", "fixed"], t[0]) ? { tableLayout: t[0] } : rr(t, e, n), flex(t, e, n) {
    switch (t[0]) {
      case "row":
      case "col":
        return { flexDirection: Ie(t[0] == "col" ? ["column", ...Ae(t)] : t) };
      case "nowrap":
      case "wrap":
        return { flexWrap: Ie(t) };
      case "grow":
      case "shrink":
        return P2 = e.theme("flex" + Jn(t[0]), Ae(t), t[1] || 1), P2 != null && { ["flex-" + t[0]]: "" + P2 };
    }
    return (P2 = e.theme("flex", t, "")) ? { flex: P2 } : rr(t, e, n);
  }, grid(t, e, n) {
    switch (t[0]) {
      case "cols":
      case "rows":
        return (P2 = e.theme("gridTemplate" + Jn(js(t[0])), Ae(t), t.length == 2 && Number(t[1]) ? `repeat(${t[1]},minmax(0,1fr))` : Ie(Ae(t)))) && { ["gridTemplate-" + js(t[0])]: P2 };
      case "flow":
        return t.length > 1 && { gridAutoFlow: Ie(t[1] == "col" ? ["column", ...Ae(t, 2)] : Ae(t), " ") };
    }
    return rr(t, e, n);
  }, auto: (t, { theme: e }) => je(["cols", "rows"], t[0]) && (P2 = e("gridAuto" + Jn(js(t[0])), Ae(t), Ie(Ae(t)))) && { ["gridAuto-" + js(t[0])]: P2 }, static: Uo, fixed: Uo, absolute: Uo, relative: Uo, sticky: Uo, visible: { visibility: "visible" }, invisible: { visibility: "hidden" }, antialiased: { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }, "subpixel-antialiased": { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }, truncate: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, "sr-only": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }, "not-sr-only": { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" }, resize: (t) => ({ resize: { x: "horizontal", y: "vertical" }[t[0]] || t[0] || "both" }), box: (t) => t[0] && { boxSizing: t[0] + "-box" }, appearance: Ye(), cursor: Hs(), float: Ye(), clear: Ye(), decoration: Ye("boxDecorationBreak"), isolate: { isolation: "isolate" }, isolation: Ye(), "mix-blend": Ye("mixBlendMode"), top: Ws, right: Ws, bottom: Ws, left: Ws, inset: (t, { theme: e }) => (P2 = Sa(t[0])) ? Rg(e("inset", Ae(t)), t[0]) : (P2 = e("inset", t)) && { top: P2, right: P2, bottom: P2, left: P2 }, underline: Hi, "line-through": Hi, "no-underline": jn(Hi, "none"), "text-underline": jn(Hi, "underline"), "text-no-underline": jn(Hi, "none"), "text-line-through": jn(Hi, "line-through"), uppercase: ji, lowercase: ji, capitalize: ji, "normal-case": jn(ji, "none"), "text-normal-case": jn(ji, "none"), italic: zs, "not-italic": jn(zs, "normal"), "font-italic": jn(zs, "italic"), "font-not-italic": jn(zs, "normal"), font: (t, e, n) => (P2 = e.theme("fontFamily", t, "")) ? { fontFamily: P2 } : At("fontWeight")(t, e, n), items: (t) => t[0] && { alignItems: je(["start", "end"], t[0]) ? "flex-" + t[0] : Ie(t) }, "justify-self": Ye(), "justify-items": Ye(), justify: hl("justifyContent"), content: hl("alignContent"), self: hl("alignSelf"), place: (t) => t[0] && Og("place-" + t[0], Ae(t)), overscroll: (t) => t[0] && { ["overscrollBehavior" + (t[1] ? "-" + t[0] : "")]: t[1] || t[0] }, col: Od("column"), row: Od("row"), duration: At("transitionDuration"), delay: At("transitionDelay"), tracking: At("letterSpacing"), leading: At("lineHeight"), z: At("zIndex"), opacity: At(), ease: At("transitionTimingFunction"), p: Zr, py: Zr, px: Zr, pt: Zr, pr: Zr, pb: Zr, pl: Zr, m: ei, my: ei, mx: ei, mt: ei, mr: ei, mb: ei, ml: ei, w: At("width"), h: At("height"), min: Pd, max: Pd, fill: At(), order: At(), origin: Hs("transformOrigin", " "), select: Ye("userSelect"), "pointer-events": Ye(), align: Ye("verticalAlign"), whitespace: Ye("whiteSpace"), "normal-nums": { fontVariantNumeric: "normal" }, ordinal: Cr("ordinal"), "slashed-zero": Cr("slashed-zero"), "lining-nums": Cr("numeric-figure"), "oldstyle-nums": Cr("numeric-figure"), "proportional-nums": Cr("numeric-spacing"), "tabular-nums": Cr("numeric-spacing"), "diagonal-fractions": Cr("numeric-fraction"), "stacked-fractions": Cr("numeric-fraction"), overflow: (t, e, n) => je(["ellipsis", "clip"], t[0]) ? Ye("textOverflow")(t) : t[1] ? { ["overflow-" + t[0]]: t[1] } : Ye()(t, e, n), transform: (t) => t[0] == "none" ? { transform: "none" } : { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", transform: vc(t[0] == "gpu") }, rotate: (t, { theme: e }) => (P2 = e("rotate", t)) && { "--tw-rotate": P2, transform: [`rotate(${P2})`, vc()] }, scale: pl, translate: pl, skew: pl, gap: (t, e, n) => (P2 = { x: "column", y: "row" }[t[0]]) ? { [P2 + "Gap"]: e.theme("gap", Ae(t)) } : At("gap")(t, e, n), stroke: (t, e, n) => (P2 = e.theme("stroke", t, "")) ? { stroke: P2 } : At("strokeWidth")(t, e, n), outline: (t, { theme: e }) => (P2 = e("outline", t)) && { outline: P2[0], outlineOffset: P2[1] }, "break-normal": { wordBreak: "normal", overflowWrap: "normal" }, "break-words": { overflowWrap: "break-word" }, "break-all": { wordBreak: "break-all" }, text(t, { theme: e }, n) {
    switch (t[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return { textAlign: t[0] };
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return ji([], P2, t[0]);
      case "opacity":
        return Vo(t, e, n);
    }
    const r = e("fontSize", t, "");
    return r ? typeof r == "string" ? { fontSize: r } : { fontSize: r[0], ...typeof r[1] == "string" ? { lineHeight: r[1] } : r[1] } : sa("color", "text", e("textColor", t));
  }, bg(t, { theme: e }, n) {
    switch (t[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return Ye("backgroundAttachment", ",")(t);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return Ye("backgroundPosition", " ")(t);
      case "no":
        return t[1] == "repeat" && Ye("backgroundRepeat")(t);
      case "repeat":
        return je("xy", t[1]) ? Ye("backgroundRepeat")(t) : { backgroundRepeat: t[1] || t[0] };
      case "opacity":
        return Vo(t, e, n, "background");
      case "clip":
      case "origin":
        return t[1] && { ["background-" + t[0]]: t[1] + (t[1] == "text" ? "" : "-box") };
      case "blend":
        return Ye("background-blend-mode")(Ae(t));
      case "gradient":
        if (t[1] == "to" && (P2 = Sa(t[2]))) return { backgroundImage: `linear-gradient(to ${Ie(P2, " ")},var(--tw-gradient-stops))` };
    }
    return (P2 = e("backgroundPosition", t, "")) ? { backgroundPosition: P2 } : (P2 = e("backgroundSize", t, "")) ? { backgroundSize: P2 } : (P2 = e("backgroundImage", t, "")) ? { backgroundImage: P2 } : sa("backgroundColor", "bg", e("backgroundColor", t));
  }, from: (t, { theme: e }) => (P2 = e("gradientColorStops", t)) && { "--tw-gradient-from": P2, "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${kd(P2)})` }, via: (t, { theme: e }) => (P2 = e("gradientColorStops", t)) && { "--tw-gradient-stops": `var(--tw-gradient-from),${P2},var(--tw-gradient-to,${kd(P2)})` }, to: (t, { theme: e }) => (P2 = e("gradientColorStops", t)) && { "--tw-gradient-to": P2 }, border: bS, divide: (t, e, n) => (P2 = Rd(t, e, n, "divideWidth", "border", "width") || Pg(t, e, n)) && { "&>:not([hidden])~:not([hidden])": P2 }, space: (t, e, n) => (P2 = Rd(t, e, n, "space", "margin")) && { "&>:not([hidden])~:not([hidden])": P2 }, placeholder: (t, { theme: e }, n) => (P2 = t[0] == "opacity" ? Vo(t, e, n) : sa("color", "placeholder", e("placeholderColor", t))) && { "&::placeholder": P2 }, shadow: (t, { theme: e }) => (P2 = e("boxShadow", t)) && { ":global": { "*": { "--tw-shadow": "0 0 transparent" } }, "--tw-shadow": P2 == "none" ? "0 0 transparent" : P2, boxShadow: [P2, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"] }, animate: (t, { theme: e, tag: n }) => {
    if (ke = e("animation", t)) {
      const r = ke.split(" ");
      return (P2 = e("keyframes", r[0], ri = {})) !== ri ? (ke = n(r[0])) && { animation: ke + " " + Ie(Ae(r), " "), ["@keyframes " + ke]: P2 } : { animation: ke };
    }
  }, ring(t, { theme: e }, n) {
    switch (t[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return Vo(t, e, n);
      case "offset":
        return (P2 = e("ringOffsetWidth", Ae(t), "")) ? { "--tw-ring-offset-width": P2 } : { "--tw-ring-offset-color": e("ringOffsetColor", Ae(t)) };
    }
    return (P2 = e("ringWidth", t, "")) ? { "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${P2} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)", ":global": { "*": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": e("ringOffsetColor", "", "#fff"), "--tw-ring-color": Ea(e("ringColor", "", "#93c5fd"), "ring-opacity", e("ringOpacity", "", "0.5")), "--tw-ring-offset-shadow": "0 0 transparent", "--tw-ring-shadow": "0 0 transparent" } } } : { "--tw-ring-opacity": "1", "--tw-ring-color": Ea(e("ringColor", t), "ring-opacity") };
  }, object: (t, e, n) => je(["contain", "cover", "fill", "none", "scale-down"], Ie(t)) ? { objectFit: Ie(t) } : Hs("objectPosition", " ")(t, e, n), list: (t, e, n) => Ie(t) == "item" ? rr(t, e, n) : je(["inside", "outside"], Ie(t)) ? { listStylePosition: t[0] } : Hs("listStyleType")(t, e, n), rounded: (t, e, n) => vS(e.theme("borderRadius", Ae(t), ""), t[0], "border", "radius") || At("borderRadius")(t, e, n), "transition-none": { transitionProperty: "none" }, transition: (t, { theme: e }) => ({ transitionProperty: e("transitionProperty", t), transitionTimingFunction: e("transitionTimingFunction", ""), transitionDuration: e("transitionDuration", "") }), container: (t, { theme: e }) => {
    const { screens: n = e("screens"), center: r, padding: i } = e("container"), o = (s) => (P2 = i && (typeof i == "string" ? i : i[s] || i.DEFAULT)) ? { paddingRight: P2, paddingLeft: P2 } : {};
    return Object.keys(n).reduce((s, a2) => ((ke = n[a2]) && typeof ke == "string" && (s[Ga(ke)] = { "&": { "max-width": ke, ...o(a2) } }), s), { width: "100%", ...r ? { marginRight: "auto", marginLeft: "auto" } : {}, ...o("xs") });
  }, filter: In, blur: In, brightness: In, contrast: In, grayscale: In, "hue-rotate": In, invert: In, saturate: In, sepia: In, "drop-shadow": In, backdrop: In };
  var wS = (t) => ({ ":root": { tabSize: 4 }, "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" }, button: { backgroundColor: "transparent", backgroundImage: "none" }, 'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" }, "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] }, "fieldset,ol,ul,legend": { padding: "0" }, "ol,ul": { listStyle: "none" }, html: { lineHeight: "1.5", WebkitTextSizeAdjust: "100%", fontFamily: t("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif") }, body: { fontFamily: "inherit", lineHeight: "inherit" }, "*,::before,::after": { boxSizing: "border-box", border: `0 solid ${t("borderColor.DEFAULT", "currentColor")}` }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, img: { borderStyle: "solid" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: "1", color: t("placeholderColor.DEFAULT", t("colors.gray.400", "#a1a1aa")) }, 'button,[role="button"]': { cursor: "pointer" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", margin: "0", padding: "0", lineHeight: "inherit", color: "inherit" }, "button,select": { textTransform: "none" }, "::-moz-focus-inner": { borderStyle: "none", padding: "0" }, ":-moz-focusring": { outline: "1px dotted ButtonText" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "abbr[title]": { textDecoration: "underline dotted" }, "b,strong": { fontWeight: "bolder" }, "pre,code,kbd,samp": { fontFamily: t("fontFamily", "mono", "ui-monospace,monospace"), fontSize: "1em" }, "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" } });
  var xS = { dark: "@media (prefers-color-scheme:dark)", sticky: "@supports ((position: -webkit-sticky) or (position:sticky))", "motion-reduce": "@media (prefers-reduced-motion:reduce)", "motion-safe": "@media (prefers-reduced-motion:no-preference)", first: "&:first-child", last: "&:last-child", even: "&:nth-child(2n)", odd: "&:nth-child(odd)", children: "&>*", siblings: "&~*", sibling: "&+*", override: "&&" };
  var Dd = "__twind";
  var SS = (t) => {
    let e = self[Dd];
    return e || (e = document.head.appendChild(document.createElement("style")), e.id = Dd, t && (e.nonce = t), e.appendChild(document.createTextNode(""))), e;
  };
  var Mg = ({ nonce: t, target: e = SS(t).sheet } = {}) => {
    const n = e.cssRules.length;
    return { target: e, insert: (r, i) => e.insertRule(r, n + i) };
  };
  var ES = () => ({ target: null, insert: Eg });
  var pu = (t) => ({ unknown(e, n = [], r, i) {
    r || this.report({ id: "UNKNOWN_THEME_VALUE", key: e + "." + Ie(n) }, i);
  }, report({ id: e, ...n }) {
    return t(`[${e}] ${JSON.stringify(n)}`);
  } });
  var Md = pu((t) => console.warn(t));
  var CS = pu((t) => {
    throw new Error(t);
  });
  var AS = pu(Eg);
  var sr = (t, e, n) => `${t}:${e}${n ? " !important" : ""}`;
  var IS = (t, e, n) => {
    let r = "";
    const i = rS(t);
    i && (r += `${sr(i, e, n)};`);
    let o = iS(t);
    return o & 1 && (r += `-webkit-${sr(t, e, n)};`), o & 2 && (r += `-moz-${sr(t, e, n)};`), o & 4 && (r += `-ms-${sr(t, e, n)};`), o = oS(t, e), o & 1 && (r += `${sr(t, `-webkit-${e}`, n)};`), o & 2 && (r += `${sr(t, `-moz-${e}`, n)};`), o & 4 && (r += `${sr(t, `-ms-${e}`, n)};`), r += sr(t, e, n), r;
  };
  var Bo = (t, e) => {
    const n = {};
    do
      for (let r = 1; r < t; r++) n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
    while (++t <= e);
    return n;
  };
  var Ar = (t, e, n = 0) => {
    const r = {};
    for (; n <= t; n = n * 2 || 1) r[n] = n + e;
    return r;
  };
  var Ht = (t, e = "", n = 1, r = 0, i = 1, o = {}) => {
    for (; r <= t; r += i) o[r] = r / n + e;
    return o;
  };
  var Ne = (t) => (e) => e(t);
  var $S = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: { transparent: "transparent", current: "currentColor", black: "#000", white: "#fff", gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, yellow: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, green: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, purple: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" } }, spacing: { px: "1px", 0: "0px", ...Ht(4, "rem", 4, 0.5, 0.5), ...Ht(12, "rem", 4, 5), 14: "3.5rem", ...Ht(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, backdropBlur: Ne("blur"), backdropBrightness: Ne("brightness"), backdropContrast: Ne("contrast"), backdropGrayscale: Ne("grayscale"), backdropHueRotate: Ne("hueRotate"), backdropInvert: Ne("invert"), backdropOpacity: Ne("opacity"), backdropSaturate: Ne("saturate"), backdropSepia: Ne("sepia"), backgroundColor: Ne("colors"), backgroundImage: { none: "none" }, backgroundOpacity: Ne("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...Ht(200, "", 100, 0, 50), ...Ht(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: (t) => ({ ...t("colors"), DEFAULT: t("colors.gray.200", "currentColor") }), borderOpacity: Ne("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderWidth: { DEFAULT: "1px", ...Ar(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)", none: "none" }, contrast: { ...Ht(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, divideColor: Ne("borderColor"), divideOpacity: Ne("borderOpacity"), divideWidth: Ne("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: { current: "currentColor" }, grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gridTemplateColumns: {}, gridTemplateRows: {}, gridAutoColumns: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gap: Ne("spacing"), gradientColorStops: Ne("colors"), height: (t) => ({ auto: "auto", ...t("spacing"), ...Bo(2, 6), full: "100%", screen: "100vh" }), inset: (t) => ({ auto: "auto", ...t("spacing"), ...Bo(2, 4), full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", ...Ht(10, "rem", 4, 3) }, margin: (t) => ({ auto: "auto", ...t("spacing") }), maxHeight: (t) => ({ ...t("spacing"), full: "100%", screen: "100vh" }), maxWidth: (t, { breakpoints: e }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", prose: "65ch", ...e(t("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content" }, opacity: { ...Ht(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0", ...Ht(12, "", 1, 1) }, outline: { none: ["2px solid transparent", "2px"], white: ["2px dotted white", "2px"], black: ["2px dotted black", "2px"] }, padding: Ne("spacing"), placeholderColor: Ne("colors"), placeholderOpacity: Ne("opacity"), ringColor: (t) => ({ DEFAULT: t("colors.blue.500", "#3b82f6"), ...t("colors") }), ringOffsetColor: Ne("colors"), ringOffsetWidth: Ar(8, "px"), ringOpacity: (t) => ({ DEFAULT: "0.5", ...t("opacity") }), ringWidth: { DEFAULT: "3px", ...Ar(8, "px") }, rotate: { ...Ar(2, "deg"), ...Ar(12, "deg", 3), ...Ar(180, "deg", 45) }, saturate: Ht(200, "", 100, 0, 50), scale: { ...Ht(150, "", 100, 0, 50), ...Ht(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...Ar(2, "deg"), ...Ar(12, "deg", 3) }, space: Ne("spacing"), stroke: { current: "currentColor" }, strokeWidth: Ht(2), textColor: Ne("colors"), textOpacity: Ne("opacity"), transitionDuration: (t) => ({ DEFAULT: "150ms", ...t("durations") }), transitionDelay: Ne("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "background-color,border-color,color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: (t) => ({ ...t("spacing"), ...Bo(2, 4), full: "100%" }), width: (t) => ({ auto: "auto", ...t("spacing"), ...Bo(2, 6), ...Bo(12, 12), screen: "100vw", full: "100%", min: "min-content", max: "max-content" }), zIndex: { auto: "auto", ...Ht(50, "", 1, 0, 10) } };
  var Lg = (t, e = {}, n = []) => (Object.keys(t).forEach((r) => {
    const i = t[r];
    r == "DEFAULT" && (e[Ie(n)] = i, e[Ie(n, ".")] = i);
    const o = [...n, r];
    e[Ie(o)] = i, e[Ie(o, ".")] = i, i && typeof i == "object" && Lg(i, e, o);
  }, e), e);
  var TS = { negative: () => ({}), breakpoints: (t) => Object.keys(t).filter((e) => typeof t[e] == "string").reduce((e, n) => (e["screen-" + n] = t[n], e), {}) };
  var kS = (t, e) => (e = e[0] == "[" && e.slice(-1) == "]" && e.slice(1, -1)) && je(t, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e) && (je(e, "calc(") ? e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : e);
  var RS = (t) => {
    const e = /* @__PURE__ */ new Map(), n = { ...$S, ...t }, r = (o, s) => {
      const a2 = o && o[s], c = typeof a2 == "function" ? a2(i, TS) : a2;
      return c && s == "colors" ? Lg(c) : c;
    }, i = (o, s, a2) => {
      const c = o.split(".");
      o = c[0], c.length > 1 && (a2 = s, s = Ie(Ae(c), "."));
      let l = e.get(o);
      if (l || (e.set(o, l = { ...r(n, o) }), Object.assign(l, r(n.extend, o))), s != null) {
        s = (Array.isArray(s) ? Ie(s) : s) || "DEFAULT";
        const u2 = kS(o, s) || l[s];
        return u2 == null ? a2 : Array.isArray(u2) && !je(["fontSize", "outline", "dropShadow"], o) ? Ie(u2, ",") : u2;
      }
      return l;
    };
    return i;
  };
  var OS = (t, e) => (n, r) => {
    if (typeof n.d == "function") return n.d(e);
    const i = n.d.split(/-(?![^[]*])/g);
    if (!r && i[0] == "tw" && n.$ == n.d) return n.$;
    for (let o = i.length; o; o--) {
      const s = Ie(i.slice(0, o));
      if (Object.prototype.hasOwnProperty.call(t, s)) {
        const a2 = t[s];
        return typeof a2 == "function" ? a2(Ae(i, o), e, s) : typeof a2 == "string" ? e[r ? "css" : "tw"](a2) : a2;
      }
    }
  };
  var jo;
  var Fg = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var Ng = /^(:not)-(.+)/;
  var Ug = (t) => t[1] == "[" ? Ae(t) : t;
  var PS = (t, e, { theme: n, tag: r }) => {
    const i = (o, s) => (jo = n("screens", Ae(s), "")) ? { [Ga(jo)]: o } : s == ":dark" && t == "class" ? { ".dark &": o } : (jo = Fg.exec(s)) ? { [`.${Ig(r(jo[1]))}:${jo[2]} &`]: o } : { [e[Ae(s)] || "&" + s.replace(Ng, (a2, c, l) => c + "(" + Ug(":" + l) + ")")]: o };
    return (o, s) => s.v.reduceRight(i, o);
  };
  var Lt;
  var Bg = (t) => (((Lt = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t)) ? +Lt[1] / (Lt[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var jg = (t) => {
    Lt = 0;
    for (let e = t.length; e--; ) Lt += je("-:,", t[e]);
    return Lt;
  };
  var Hg = (t) => (jg(t) & 15) << 18;
  var DS = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"];
  var MS = (t) => 1 << (~(Lt = DS.indexOf(t.replace(Fg, ":$2").slice(3, 8))) ? Lt : 17);
  var LS = (t, e) => (n, r) => n | ((Lt = t("screens", Ae(r), "")) ? 1 << 27 | Bg(Ga(Lt)) : r == ":dark" ? 1 << 30 : (Lt = e[r] || r.replace(Ng, ":$2"))[0] == "@" ? Hg(Lt) : MS(r));
  var FS = (t) => t[0] == "-" ? 0 : jg(t) + ((Lt = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t)) ? +!!Lt[1] || -!!Lt[2] : 0) + 1;
  var gl = (t, e) => e + "{" + t + "}";
  var NS = (t, e, n) => {
    const { theme: r, tag: i } = n, o = (f, d3) => "--" + i(d3), s = (f) => `${f}`.replace(/--(tw-[\w-]+)\b/g, o), a2 = (f, d3, h2) => (f = s(f), Array.isArray(d3) ? Ie(d3.filter(Boolean).map((p) => t(f, s(p), h2)), ";") : t(f, s(d3), h2));
    let c;
    const l = (f, d3, h2, p, g3) => {
      if (Array.isArray(p)) {
        p.forEach((y3) => y3 && l(f, d3, h2, y3, g3));
        return;
      }
      let m2 = "", w4 = 0, v2 = 0;
      p["@apply"] && (p = du(_i(mS(p["@apply"]), n), { ...p, "@apply": void 0 }, n)), Object.keys(p).forEach((y3) => {
        const b2 = _i(p[y3], n);
        if (Ag(y3, b2)) {
          if (b2 !== "" && y3.length > 1) {
            const _4 = fu(y3);
            v2 += 1, w4 = Math.max(w4, FS(_4)), m2 = (m2 && m2 + ";") + a2(_4, b2, g3);
          }
        } else if (b2) if (y3 == ":global" && (y3 = "@global"), y3[0] == "@") if (y3[1] == "g") l([], "", 0, b2, g3);
        else if (y3[1] == "f") l([], y3, 0, b2, g3);
        else if (y3[1] == "k") {
          const _4 = c.length;
          l([], "", 0, b2, g3);
          const C3 = c.splice(_4, c.length - _4);
          c.push({ r: gl(Ie(C3.map((x2) => x2.r), ""), y3), p: C3.reduce((x2, S2) => x2 + S2.p, 0) });
        } else y3[1] == "i" ? (Array.isArray(b2) ? b2 : [b2]).forEach((_4) => _4 && c.push({ p: 0, r: `${y3} ${_4};` })) : (y3[2] == "c" && (y3 = Ga(n.theme("screens", Ae(y3, 8).trim()))), l([...f, y3], d3, h2 | Bg(y3) | Hg(y3), b2, g3));
        else l(f, d3 ? d3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (_4, C3, x2) => y3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (S2, D3, K2) => (je(D3, "&") ? D3.replace(/&/g, C3) : (C3 && C3 + " ") + D3) + K2) + x2) : y3, h2, b2, g3);
      }), v2 && c.push({ r: f.reduceRight(gl, gl(m2, d3)), p: h2 * 256 + ((Math.max(0, 15 - v2) & 15) << 4 | (w4 || 15) & 15) });
    }, u2 = LS(r, e);
    return (f, d3, h2, p = 0) => (p <<= 28, c = [], l([], d3 ? "." + Ig(d3) : "", h2 ? h2.v.reduceRight(u2, p) : p, f, h2 && h2.i), c);
  };
  var US = (t, e, n, r) => {
    let i;
    n((s = []) => i = s);
    let o;
    return n((s = /* @__PURE__ */ new Set()) => o = s), ({ r: s, p: a2 }) => {
      if (!o.has(s)) {
        o.add(s);
        const c = aS(i, a2);
        try {
          t.insert(s, c), i.splice(c, 0, a2);
        } catch (l) {
          /:-[mwo]/.test(s) || e.report({ id: "INJECT_CSS_ERROR", css: s, error: l }, r);
        }
      }
    };
  };
  var ml = (t, e, n, r = e) => t === false ? n : t === true ? r : t || e;
  var BS = (t) => (typeof t == "string" ? { t: CS, a: Md, i: AS }[t[1]] : t) || Md;
  var jS = { _: { value: "", writable: true } };
  var HS = (t = {}) => {
    const e = RS(t.theme), n = BS(t.mode), r = ml(t.hash, false, false, fl), i = t.important;
    let o = { v: [] }, s = 0;
    const a2 = [], c = { tw: (...x2) => _4(x2), theme: (x2, S2, D3) => {
      var K2;
      const ce4 = (K2 = e(x2, S2, D3)) != null ? K2 : n.unknown(x2, S2 == null || Array.isArray(S2) ? S2 : S2.split("."), D3 != null, c);
      return o.n && ce4 && je("rg", (typeof ce4)[5]) ? `calc(${ce4} * -1)` : ce4;
    }, tag: (x2) => r ? r(x2) : x2, css: (x2) => {
      s++;
      const S2 = a2.length;
      try {
        (typeof x2 == "string" ? gc([x2]) : x2).forEach(b2);
        const D3 = Object.create(null, jS);
        for (let K2 = S2; K2 < a2.length; K2++) {
          const ce4 = a2[K2];
          if (ce4) switch (typeof ce4) {
            case "object":
              du(D3, ce4, c);
              break;
            case "string":
              D3._ += (D3._ && " ") + ce4;
          }
        }
        return D3;
      } finally {
        a2.length = S2, s--;
      }
    } }, l = OS({ ..._S, ...t.plugins }, c), u2 = (x2) => {
      const S2 = o;
      o = x2;
      try {
        return _i(l(x2), c);
      } finally {
        o = S2;
      }
    }, f = { ...xS, ...t.variants }, d3 = PS(t.darkMode || "media", f, c), h2 = NS(ml(t.prefix, IS, sr), f, c), p = t.sheet || (typeof window > "u" ? ES() : Mg(t)), { init: g3 = (x2) => x2() } = p, m2 = US(p, n, g3, c);
    let w4;
    g3((x2 = /* @__PURE__ */ new Map()) => w4 = x2);
    const v2 = /* @__PURE__ */ new WeakMap(), y3 = (x2, S2) => x2 == "_" ? void 0 : typeof S2 == "function" ? JSON.stringify(_i(S2, c), y3) : S2, b2 = (x2) => {
      !s && o.v.length && (x2 = { ...x2, v: [...o.v, ...x2.v], $: "" }), x2.$ || (x2.$ = Td(x2, v2.get(x2.d)));
      let S2 = s ? null : w4.get(x2.$);
      if (S2 == null) {
        let D3 = u2(x2);
        if (x2.$ || (x2.$ = fl(JSON.stringify(D3, y3)), v2.set(x2.d, x2.$), x2.$ = Td(x2, x2.$)), D3 && typeof D3 == "object") if (x2.v = x2.v.map(Ug), i && (x2.i = i), D3 = d3(D3, x2), s) a2.push(D3);
        else {
          const K2 = typeof x2.d == "function" ? typeof D3._ == "string" ? 1 : 3 : 2;
          S2 = r || typeof x2.d == "function" ? (r || fl)(K2 + x2.$) : x2.$, h2(D3, S2, x2, K2).forEach(m2), D3._ && (S2 += " " + D3._);
        }
        else typeof D3 == "string" ? S2 = D3 : (S2 = x2.$, n.report({ id: "UNKNOWN_DIRECTIVE", rule: S2 }, c)), s && typeof x2.d != "function" && a2.push(S2);
        s || (w4.set(x2.$, S2), Cg(w4, 3e4));
      }
      return S2;
    }, _4 = (x2) => Ie(gc(x2).map(b2).filter(Boolean), " "), C3 = ml(t.preflight, sS, false);
    if (C3) {
      const x2 = wS(e), S2 = h2(typeof C3 == "function" ? _i(C3(x2, c), c) || x2 : { ...x2, ...C3 });
      g3((D3 = (S2.forEach(m2), true)) => D3);
    }
    return { init: () => n.report({ id: "LATE_SETUP_CALL" }, c), process: _4 };
  };
  var zg = (t) => {
    let e = (i) => (n(), e(i)), n = (i) => {
      ({ process: e, init: n } = HS(i));
    };
    t && n(t);
    let r;
    return { tw: Object.defineProperties((...i) => e(i), { theme: { get: /* @__PURE__ */ ((i) => () => (r || e([(o) => (r = o, "")]), r[i]))("theme") } }), setup: (i) => n(i) };
  };
  var { tw: Sn, setup: zS } = zg();
  function WS(t) {
    let e, n, r, i;
    const o = t[14].default, s = bn(o, t, t[13], null);
    return { c() {
      e = B2("div"), n = B2("div"), s && s.c(), lc(n, "display", "none"), T2(n, "class", r = Sn` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${t[0]}`), T2(e, "class", "popup-element-wrapper"), lc(e, "position", "absolute");
    }, m(a2, c) {
      W2(a2, e, c), N2(e, n), s && s.m(n, null), t[15](n), t[16](e), i = true;
    }, p(a2, [c]) {
      s && s.p && (!i || c & 8192) && wn(s, o, a2, a2[13], i ? _n(o, a2[13], c, null) : xn(a2[13]), null), (!i || c & 1 && r !== (r = Sn` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${a2[0]}`)) && T2(n, "class", r);
    }, i(a2) {
      i || (L2(s, a2), i = true);
    }, o(a2) {
      U2(s, a2), i = false;
    }, d(a2) {
      a2 && z2(e), s && s.d(a2), t[15](null), t[16](null);
    } };
  }
  function VS(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { closeOnClick: o = true } = e, { closeOnEscape: s = true } = e, { sizeToAnchor: a2 = false } = e, { anchorElement: c = null } = e, { position: l = null } = e, { popupClass: u2 = "" } = e, { preferedVerticalAlignment: f = "top" } = e, { preferedHorizontalAlignment: d3 = "left" } = e, { positionOffset: h2 = { x: 0, y: 0 } } = e, p = Qt("PopupContainerService", new wa(document.body)), g3, m2, w4;
    function v2() {
      const x2 = { backdrop: false, closeOnClickOutside: o, closeOnEscape: s, positioning: c ? "anchor" : "custom", anchorElement: c, customPosition: a2 ? h2 : l, anchorHorizontal: d3, anchorVertical: f };
      document.body.appendChild(g3), n(1, g3.style.display = "block", g3), console.log(g3.getBoundingClientRect(), g3);
      const S2 = c?.offsetWidth, D3 = g3.offsetWidth;
      S2 && a2 && D3 < S2 && (console.log("setting width"), n(1, g3.style.width = `${S2}px`, g3)), n(1, g3.style.position = "static", g3), m2 = p.openPopup("popup-container", g3, x2), m2.afterClosed.then(() => {
        b2(), w4.appendChild(g3), console.log("closing popup", g3.getBoundingClientRect());
      });
    }
    function y3() {
      m2?.close();
    }
    function b2() {
      n(1, g3.style.display = "none", g3), n(1, g3.style.position = "absolute", g3), n(1, g3.style.width = "auto", g3);
    }
    function _4(x2) {
      st[x2 ? "unshift" : "push"](() => {
        g3 = x2, n(1, g3);
      });
    }
    function C3(x2) {
      st[x2 ? "unshift" : "push"](() => {
        w4 = x2, n(2, w4);
      });
    }
    return t.$$set = (x2) => {
      "closeOnClick" in x2 && n(3, o = x2.closeOnClick), "closeOnEscape" in x2 && n(4, s = x2.closeOnEscape), "sizeToAnchor" in x2 && n(5, a2 = x2.sizeToAnchor), "anchorElement" in x2 && n(6, c = x2.anchorElement), "position" in x2 && n(7, l = x2.position), "popupClass" in x2 && n(0, u2 = x2.popupClass), "preferedVerticalAlignment" in x2 && n(8, f = x2.preferedVerticalAlignment), "preferedHorizontalAlignment" in x2 && n(9, d3 = x2.preferedHorizontalAlignment), "positionOffset" in x2 && n(10, h2 = x2.positionOffset), "$$scope" in x2 && n(13, i = x2.$$scope);
    }, [u2, g3, w4, o, s, a2, c, l, f, d3, h2, v2, y3, i, r, _4, C3];
  }
  var Wg = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, VS, WS, Ze, { closeOnClick: 3, closeOnEscape: 4, sizeToAnchor: 5, anchorElement: 6, position: 7, popupClass: 0, preferedVerticalAlignment: 8, preferedHorizontalAlignment: 9, positionOffset: 10, openPopup: 11, closePopup: 12 });
    }
    get openPopup() {
      return this.$$.ctx[11];
    }
    get closePopup() {
      return this.$$.ctx[12];
    }
  };
  function qS(t) {
    Di(t, "svelte-oysah1", ".hover-highlight.svelte-oysah1:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-oysah1{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}");
  }
  function Ld(t) {
    let e;
    return { c() {
      e = B2("div"), T2(e, "class", Ge(Sn`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`) + " svelte-oysah1");
    }, m(n, r) {
      W2(n, e, r);
    }, p: Te, d(n) {
      n && z2(e);
    } };
  }
  function GS(t) {
    let e, n, r, i;
    function o(a2) {
      t[7](a2);
    }
    let s = { tw: Sn, readonly: true };
    return t[0] !== void 0 && (s.checked = t[0]), n = new Cs({ props: s }), st.push(() => Qi(n, "checked", o)), { c() {
      e = B2("div"), xe(n.$$.fragment), T2(e, "class", Ge(Sn`p-1`) + " svelte-oysah1");
    }, m(a2, c) {
      W2(a2, e, c), ge(n, e, null), i = true;
    }, p(a2, c) {
      const l = {};
      !r && c & 1 && (r = true, l.checked = a2[0], Yi(() => r = false)), n.$set(l);
    }, i(a2) {
      i || (L2(n.$$.fragment, a2), i = true);
    }, o(a2) {
      U2(n.$$.fragment, a2), i = false;
    }, d(a2) {
      a2 && z2(e), me(n);
    } };
  }
  function XS(t) {
    let e, n, r, i, o, s, a2, c, l = t[0] && !t[2] && Ld(), u2 = t[2] && GS(t);
    const f = t[6].default, d3 = bn(f, t, t[5], null);
    return { c() {
      e = B2("div"), l && l.c(), n = oe(), u2 && u2.c(), r = oe(), i = B2("span"), d3 && d3.c(), T2(e, "class", o = Ge(Sn`flex hover:(${Vs}) items-center ${t[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${t[0] && !t[2] ? Vs : ""}`) + " svelte-oysah1");
    }, m(h2, p) {
      W2(h2, e, p), l && l.m(e, null), N2(e, n), u2 && u2.m(e, null), N2(e, r), N2(e, i), d3 && d3.m(i, null), t[8](i), s = true, a2 || (c = Ve(e, "click", t[3]), a2 = true);
    }, p(h2, [p]) {
      h2[0] && !h2[2] ? l ? l.p(h2, p) : (l = Ld(), l.c(), l.m(e, n)) : l && (l.d(1), l = null), h2[2] && u2.p(h2, p), d3 && d3.p && (!s || p & 32) && wn(d3, f, h2, h2[5], s ? _n(f, h2[5], p, null) : xn(h2[5]), null), (!s || p & 1 && o !== (o = Ge(Sn`flex hover:(${Vs}) items-center ${h2[2] ? "" : "pl-3 pb-2 pt-2"} pr-3 cursor-pointer relative rounded-md ${h2[0] && !h2[2] ? Vs : ""}`) + " svelte-oysah1")) && T2(e, "class", o);
    }, i(h2) {
      s || (L2(u2), L2(d3, h2), s = true);
    }, o(h2) {
      U2(u2), U2(d3, h2), s = false;
    }, d(h2) {
      h2 && z2(e), l && l.d(), u2 && u2.d(), d3 && d3.d(h2), t[8](null), a2 = false, c();
    } };
  }
  var Vs = "bg-[rgba(0,0,0,0.1)] shadow-md";
  function KS(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, s = false, a2 = null, c = null, l, u2;
    const f = Kt("audako:select:multiple"), d3 = Kt("audako:select:close"), h2 = Kt("audako:select:value"), p = Kt("audako:select:value:changed"), g3 = Kt("audako:select:displayValue");
    _g(() => {
      var b2;
      u2 = (b2 = l.innerText) == null ? void 0 : b2.trim(), g3.subscribe((_4) => {
        c = _4;
      }), h2.subscribe((_4) => {
        a2 = _4, f ? n(0, s = _4?.includes(o)) : n(0, s = _4 === o), w4();
      });
    });
    function m2(b2) {
      console.log("clicked option"), b2.preventDefault(), b2.stopPropagation();
      let _4 = null;
      f ? s ? _4 = a2.filter((C3) => C3 !== o) : _4 = Array.isArray(a2) ? [...a2, o] : [o] : (_4 = o, d3()), h2.set(_4), p.next(_4);
    }
    function w4() {
      if (f) {
        const b2 = c;
        s && !b2.includes(u2) ? g3.set([...b2, u2]) : !s && b2.includes(u2) && g3.set(b2.filter((_4) => _4 !== u2));
      } else s && g3.set(u2);
    }
    function v2(b2) {
      s = b2, n(0, s);
    }
    function y3(b2) {
      st[b2 ? "unshift" : "push"](() => {
        l = b2, n(1, l);
      });
    }
    return t.$$set = (b2) => {
      "value" in b2 && n(4, o = b2.value), "$$scope" in b2 && n(5, i = b2.$$scope);
    }, [s, l, f, m2, o, i, r, v2, y3];
  }
  var Vg = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, KS, XS, Ze, { value: 4 }, qS);
    }
  };
  function Fd(t, e, n) {
    const r = t.slice();
    return r[26] = e[n], r;
  }
  var JS = (t) => ({});
  var Nd = (t) => ({});
  function YS(t) {
    let e = t[26].label + "", n, r;
    return { c() {
      n = de(e), r = oe();
    }, m(i, o) {
      W2(i, n, o), W2(i, r, o);
    }, p(i, o) {
      o & 16 && e !== (e = i[26].label + "") && vt(n, e);
    }, d(i) {
      i && z2(n), i && z2(r);
    } };
  }
  function Ud(t) {
    let e, n;
    return e = new Vg({ props: { value: t[26].value, $$slots: { default: [YS] }, $$scope: { ctx: t } } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 16 && (o.value = r[26].value), i & 131088 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function QS(t) {
    let e, n, r;
    const i = t[13].default, o = bn(i, t, t[17], null);
    let s = t[4], a2 = [];
    for (let l = 0; l < s.length; l += 1) a2[l] = Ud(Fd(t, s, l));
    const c = (l) => U2(a2[l], 1, 1, () => {
      a2[l] = null;
    });
    return { c() {
      o && o.c(), e = oe();
      for (let l = 0; l < a2.length; l += 1) a2[l].c();
      n = qa();
    }, m(l, u2) {
      o && o.m(l, u2), W2(l, e, u2);
      for (let f = 0; f < a2.length; f += 1) a2[f] && a2[f].m(l, u2);
      W2(l, n, u2), r = true;
    }, p(l, u2) {
      if (o && o.p && (!r || u2 & 131072) && wn(o, i, l, l[17], r ? _n(i, l[17], u2, null) : xn(l[17]), null), u2 & 16) {
        s = l[4];
        let f;
        for (f = 0; f < s.length; f += 1) {
          const d3 = Fd(l, s, f);
          a2[f] ? (a2[f].p(d3, u2), L2(a2[f], 1)) : (a2[f] = Ud(d3), a2[f].c(), L2(a2[f], 1), a2[f].m(n.parentNode, n));
        }
        for (lt(), f = s.length; f < a2.length; f += 1) c(f);
        ct();
      }
    }, i(l) {
      if (!r) {
        L2(o, l);
        for (let u2 = 0; u2 < s.length; u2 += 1) L2(a2[u2]);
        r = true;
      }
    }, o(l) {
      U2(o, l), a2 = a2.filter(Boolean);
      for (let u2 = 0; u2 < a2.length; u2 += 1) U2(a2[u2]);
      r = false;
    }, d(l) {
      o && o.d(l), l && z2(e), Hr(a2, l), l && z2(n);
    } };
  }
  function ZS(t) {
    let e, n, r, i, o, s, a2, c, l, u2, f, d3, h2, p;
    const g3 = t[13].prefix, m2 = bn(g3, t, t[17], Nd);
    let w4 = { sizeToAnchor: true, popupClass: "max-h-[400px] ", anchorElement: t[8], $$slots: { default: [QS] }, $$scope: { ctx: t } };
    return f = new Wg({ props: w4 }), t[16](f), { c() {
      e = B2("div"), m2 && m2.c(), n = oe(), r = B2("input"), o = oe(), s = B2("div"), a2 = de("arrow_drop_down"), u2 = oe(), xe(f.$$.fragment), r.disabled = t[6], T2(r, "placeholder", t[0]), r.readOnly = true, T2(r, "class", i = t[5]`w-full outline-none cursor-pointer ${t[1]}`), T2(s, "class", c = t[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${t[3]} select-none`), T2(e, "class", l = t[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${t[2]}`);
    }, m(v2, y3) {
      W2(v2, e, y3), m2 && m2.m(e, null), N2(e, n), N2(e, r), ya(r, t[7]), t[15](r), N2(e, o), N2(e, s), N2(s, a2), W2(v2, u2, y3), ge(f, v2, y3), d3 = true, h2 || (p = [Ve(r, "input", t[14]), Ve(e, "click", t[10])], h2 = true);
    }, p(v2, [y3]) {
      m2 && m2.p && (!d3 || y3 & 131072) && wn(m2, g3, v2, v2[17], d3 ? _n(g3, v2[17], y3, JS) : xn(v2[17]), Nd), (!d3 || y3 & 64) && (r.disabled = v2[6]), (!d3 || y3 & 1) && T2(r, "placeholder", v2[0]), (!d3 || y3 & 34 && i !== (i = v2[5]`w-full outline-none cursor-pointer ${v2[1]}`)) && T2(r, "class", i), y3 & 128 && r.value !== v2[7] && ya(r, v2[7]), (!d3 || y3 & 40 && c !== (c = v2[5]` material-symbols-rounded pointer-events-none cursor-pointer text-md ${v2[3]} select-none`)) && T2(s, "class", c), (!d3 || y3 & 36 && l !== (l = v2[5]`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 relative cursor-pointer ${v2[2]}`)) && T2(e, "class", l);
      const b2 = {};
      y3 & 256 && (b2.anchorElement = v2[8]), y3 & 131088 && (b2.$$scope = { dirty: y3, ctx: v2 }), f.$set(b2);
    }, i(v2) {
      d3 || (L2(m2, v2), L2(f.$$.fragment, v2), d3 = true);
    }, o(v2) {
      U2(m2, v2), U2(f.$$.fragment, v2), d3 = false;
    }, d(v2) {
      v2 && z2(e), m2 && m2.d(v2), t[15](null), v2 && z2(u2), t[16](null), me(f, v2), h2 = false, _r(p);
    } };
  }
  function e1(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { value: o = null } = e, { multiple: s = false } = e, { placeholder: a2 = null } = e, { textfield$class: c = "" } = e, { container$class: l = "" } = e, { suffixIcon$class: u2 = "" } = e, { options: f = [] } = e, { tw: d3 = Sn } = e, { disabled: h2 = false } = e, p = "", g3, m2, w4 = En(), v2 = _a(o);
    const y3 = v2.subscribe((M3) => {
      n(11, o = M3);
    });
    let b2 = new Ot();
    const _4 = b2.subscribe((M3) => {
      w4("valueChanged", M3);
    });
    let C3 = _a(s ? [] : ""), x2 = C3.subscribe((M3) => {
      D3(M3);
    });
    function S2(M3) {
      M3 && (M3.preventDefault(), M3.stopPropagation()), !h2 && m2?.openPopup();
    }
    function D3(M3) {
      if (M3 == null || M3.length === 0) {
        n(7, p = null);
        return;
      }
      Array.isArray(M3) ? n(7, p = M3.join(", ")) : n(7, p = M3);
    }
    Tr("audako:select:multiple", s), Tr("audako:select:value", v2), Tr("audako:select:value:changed", b2), Tr("audako:select:displayValue", C3), Tr("audako:select:close", () => m2.closePopup()), Gr(() => {
      y3(), _4.unsubscribe(), x2();
    });
    function K2() {
      p = this.value, n(7, p);
    }
    function ce4(M3) {
      st[M3 ? "unshift" : "push"](() => {
        g3 = M3, n(8, g3);
      });
    }
    function ue2(M3) {
      st[M3 ? "unshift" : "push"](() => {
        m2 = M3, n(9, m2);
      });
    }
    return t.$$set = (M3) => {
      "value" in M3 && n(11, o = M3.value), "multiple" in M3 && n(12, s = M3.multiple), "placeholder" in M3 && n(0, a2 = M3.placeholder), "textfield$class" in M3 && n(1, c = M3.textfield$class), "container$class" in M3 && n(2, l = M3.container$class), "suffixIcon$class" in M3 && n(3, u2 = M3.suffixIcon$class), "options" in M3 && n(4, f = M3.options), "tw" in M3 && n(5, d3 = M3.tw), "disabled" in M3 && n(6, h2 = M3.disabled), "$$scope" in M3 && n(17, i = M3.$$scope);
    }, t.$$.update = () => {
      t.$$.dirty & 32 && Tr("tw", d3);
    }, [a2, c, l, u2, f, d3, h2, p, g3, m2, S2, o, s, r, K2, ce4, ue2, i];
  }
  var qg = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, e1, ZS, Ze, { value: 11, multiple: 12, placeholder: 0, textfield$class: 1, container$class: 2, suffixIcon$class: 3, options: 4, tw: 5, disabled: 6 });
    }
  };
  function Bd(t, e, n) {
    const r = t.slice();
    return r[18] = e[n], r;
  }
  function t1(t) {
    let e = t[18] + "", n;
    return { c() {
      n = de(e);
    }, m(r, i) {
      W2(r, n, i);
    }, p(r, i) {
      i & 8 && e !== (e = r[18] + "") && vt(n, e);
    }, d(r) {
      r && z2(n);
    } };
  }
  function jd(t) {
    let e, n;
    return e = new Vg({ props: { value: t[18], $$slots: { default: [t1] }, $$scope: { ctx: t } } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 8 && (o.value = r[18]), i & 2097160 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function n1(t) {
    let e, n, r = t[3], i = [];
    for (let s = 0; s < r.length; s += 1) i[s] = jd(Bd(t, r, s));
    const o = (s) => U2(i[s], 1, 1, () => {
      i[s] = null;
    });
    return { c() {
      for (let s = 0; s < i.length; s += 1) i[s].c();
      e = qa();
    }, m(s, a2) {
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(s, a2);
      W2(s, e, a2), n = true;
    }, p(s, a2) {
      if (a2 & 8) {
        r = s[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = Bd(s, r, c);
          i[c] ? (i[c].p(l, a2), L2(i[c], 1)) : (i[c] = jd(l), i[c].c(), L2(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (lt(), c = r.length; c < i.length; c += 1) o(c);
        ct();
      }
    }, i(s) {
      if (!n) {
        for (let a2 = 0; a2 < r.length; a2 += 1) L2(i[a2]);
        n = true;
      }
    }, o(s) {
      i = i.filter(Boolean);
      for (let a2 = 0; a2 < i.length; a2 += 1) U2(i[a2]);
      n = false;
    }, d(s) {
      Hr(i, s), s && z2(e);
    } };
  }
  function r1(t) {
    let e;
    return { c() {
      e = de("first_page");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function i1(t) {
    let e;
    return { c() {
      e = de("navigate_before");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function o1(t) {
    let e;
    return { c() {
      e = de("navigate_next");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function s1(t) {
    let e;
    return { c() {
      e = de("last_page");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function a1(t) {
    let e, n, r, i, o, s, a2, c, l, u2 = t[1] * t[0] + 1 + "", f, d3, h2 = (t[1] + 1) * t[0] + "", p, g3, m2, w4, v2, y3, b2, _4, C3, x2, S2, D3, K2, ce4;
    function ue2(ee) {
      t[10](ee);
    }
    let M3 = { tw: t[5], textfield$class: t[5]`text-xs text-gray-600`, suffixIcon$class: t[5]`!top-[2px] !text-[20px]`, $$slots: { default: [n1] }, $$scope: { ctx: t } };
    return t[0] !== void 0 && (M3.value = t[0]), s = new qg({ props: M3 }), st.push(() => Qi(s, "value", ue2)), s.$on("valueChanged", t[11]), b2 = new Dr({ props: { disabled: t[1] === 0, $$slots: { default: [r1] }, $$scope: { ctx: t } } }), b2.$on("click", t[12]), C3 = new Dr({ props: { disabled: t[1] === 0, $$slots: { default: [i1] }, $$scope: { ctx: t } } }), C3.$on("click", t[13]), S2 = new Dr({ props: { disabled: t[1] === t[4], $$slots: { default: [o1] }, $$scope: { ctx: t } } }), S2.$on("click", t[14]), K2 = new Dr({ props: { disabled: t[1] === t[4], $$slots: { default: [s1] }, $$scope: { ctx: t } } }), K2.$on("click", t[15]), { c() {
      e = B2("div"), n = B2("div"), r = de("Items per page:"), i = oe(), o = B2("div"), xe(s.$$.fragment), c = oe(), l = B2("div"), f = de(u2), d3 = de("\xA0-\xA0"), p = de(h2), g3 = oe(), m2 = B2("div"), w4 = de("of "), v2 = de(t[2]), y3 = oe(), xe(b2.$$.fragment), _4 = oe(), xe(C3.$$.fragment), x2 = oe(), xe(S2.$$.fragment), D3 = oe(), xe(K2.$$.fragment), T2(n, "class", t[5]`mr-1 text-xs text-gray-600`), T2(o, "class", t[5]`w-[50px]`), T2(l, "class", t[5]`ml-4 text-xs mr-1 text-gray-600`), T2(m2, "class", t[5]`text-xs mr-4 text-gray-600`), T2(e, "class", t[5]`flex w-full items-center justify-end pt-1`);
    }, m(ee, H3) {
      W2(ee, e, H3), N2(e, n), N2(n, r), N2(e, i), N2(e, o), ge(s, o, null), N2(e, c), N2(e, l), N2(l, f), N2(l, d3), N2(l, p), N2(e, g3), N2(e, m2), N2(m2, w4), N2(m2, v2), N2(e, y3), ge(b2, e, null), N2(e, _4), ge(C3, e, null), N2(e, x2), ge(S2, e, null), N2(e, D3), ge(K2, e, null), ce4 = true;
    }, p(ee, [H3]) {
      const Se3 = {};
      H3 & 2097160 && (Se3.$$scope = { dirty: H3, ctx: ee }), !a2 && H3 & 1 && (a2 = true, Se3.value = ee[0], Yi(() => a2 = false)), s.$set(Se3), (!ce4 || H3 & 3) && u2 !== (u2 = ee[1] * ee[0] + 1 + "") && vt(f, u2), (!ce4 || H3 & 3) && h2 !== (h2 = (ee[1] + 1) * ee[0] + "") && vt(p, h2), (!ce4 || H3 & 4) && vt(v2, ee[2]);
      const He = {};
      H3 & 2 && (He.disabled = ee[1] === 0), H3 & 2097152 && (He.$$scope = { dirty: H3, ctx: ee }), b2.$set(He);
      const G4 = {};
      H3 & 2 && (G4.disabled = ee[1] === 0), H3 & 2097152 && (G4.$$scope = { dirty: H3, ctx: ee }), C3.$set(G4);
      const se3 = {};
      H3 & 18 && (se3.disabled = ee[1] === ee[4]), H3 & 2097152 && (se3.$$scope = { dirty: H3, ctx: ee }), S2.$set(se3);
      const et2 = {};
      H3 & 18 && (et2.disabled = ee[1] === ee[4]), H3 & 2097152 && (et2.$$scope = { dirty: H3, ctx: ee }), K2.$set(et2);
    }, i(ee) {
      ce4 || (L2(s.$$.fragment, ee), L2(b2.$$.fragment, ee), L2(C3.$$.fragment, ee), L2(S2.$$.fragment, ee), L2(K2.$$.fragment, ee), ce4 = true);
    }, o(ee) {
      U2(s.$$.fragment, ee), U2(b2.$$.fragment, ee), U2(C3.$$.fragment, ee), U2(S2.$$.fragment, ee), U2(K2.$$.fragment, ee), ce4 = false;
    }, d(ee) {
      ee && z2(e), me(s), me(b2), me(C3), me(S2), me(K2);
    } };
  }
  function Hd(t, e) {
    return Math.max(Math.ceil(e / t) - 1, 0);
  }
  function l1(t, e, n) {
    let { pageIndex: r } = e, { pageSize: i } = e, { totalCount: o } = e, s = Kt("tw"), a2, { pageSizeOptions: c = [10, 20, 50, 100] } = e, l = En();
    function u2(_4) {
      n(1, r = r + _4), p();
    }
    function f() {
      n(1, r = 0), p();
    }
    function d3() {
      n(1, r = a2), p();
    }
    function h2(_4) {
      console.log("changePageSize", _4), n(0, i = _4), n(4, a2 = Hd(i, o)), n(1, r = Math.min(r, a2)), p();
    }
    function p() {
      l("changePage", { pageIndex: r, pageSize: i });
    }
    function g3(_4) {
      i = _4, n(0, i);
    }
    const m2 = (_4) => h2(_4.detail), w4 = () => f(), v2 = () => u2(-1), y3 = () => u2(1), b2 = () => d3();
    return t.$$set = (_4) => {
      "pageIndex" in _4 && n(1, r = _4.pageIndex), "pageSize" in _4 && n(0, i = _4.pageSize), "totalCount" in _4 && n(2, o = _4.totalCount), "pageSizeOptions" in _4 && n(3, c = _4.pageSizeOptions);
    }, t.$$.update = () => {
      t.$$.dirty & 5 && n(4, a2 = Hd(i, o)), t.$$.dirty & 1 && console.log("pageSize", i);
    }, [i, r, o, c, a2, s, u2, f, d3, h2, g3, m2, w4, v2, y3, b2];
  }
  var c1 = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, l1, a1, Ze, { pageIndex: 1, pageSize: 0, totalCount: 2, pageSizeOptions: 3 });
    }
  };
  function u1(t) {
    Di(t, "svelte-15xwzh7", ".progress-bar-value-animation.svelte-15xwzh7{animation:svelte-15xwzh7-indeterminateAnimation 1s infinite linear;transform-origin:0% 50%}@keyframes svelte-15xwzh7-indeterminateAnimation{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}");
  }
  function zd(t, e, n) {
    const r = t.slice();
    return r[33] = e[n], r;
  }
  function Wd(t) {
    let e, n;
    return e = new dc({ props: { container$class: t[9]`flex-[50px] flex-grow-0 cursor-default`, id: "Name", $$slots: { default: [f1] }, $$scope: { ctx: t } } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i[0] & 32 | i[1] & 64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function f1(t) {
    let e, n;
    return e = new Cs({ props: { checked: t[5] === "checked", indeterminate: t[5] === "indeterminate" } }), e.$on("change", t[15]), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i[0] & 32 && (o.checked = r[5] === "checked"), i[0] & 32 && (o.indeterminate = r[5] === "indeterminate"), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function d1(t) {
    let e;
    return { c() {
      e = de("Name");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function h1(t) {
    let e;
    return { c() {
      e = de("Group");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function p1(t) {
    let e, n, r, i, o, s = t[0] && Wd(t);
    return n = new dc({ props: { container$class: t[9]`flex-[2] cursor-default"`, id: "Name", $$slots: { default: [d1] }, $$scope: { ctx: t } } }), i = new dc({ props: { container$class: t[9]`flex-1 curstor-default`, id: "Name", $$slots: { default: [h1] }, $$scope: { ctx: t } } }), { c() {
      s && s.c(), e = oe(), xe(n.$$.fragment), r = oe(), xe(i.$$.fragment);
    }, m(a2, c) {
      s && s.m(a2, c), W2(a2, e, c), ge(n, a2, c), W2(a2, r, c), ge(i, a2, c), o = true;
    }, p(a2, c) {
      a2[0] ? s ? (s.p(a2, c), c[0] & 1 && L2(s, 1)) : (s = Wd(a2), s.c(), L2(s, 1), s.m(e.parentNode, e)) : s && (lt(), U2(s, 1, 1, () => {
        s = null;
      }), ct());
      const l = {};
      c[1] & 64 && (l.$$scope = { dirty: c, ctx: a2 }), n.$set(l);
      const u2 = {};
      c[1] & 64 && (u2.$$scope = { dirty: c, ctx: a2 }), i.$set(u2);
    }, i(a2) {
      o || (L2(s), L2(n.$$.fragment, a2), L2(i.$$.fragment, a2), o = true);
    }, o(a2) {
      U2(s), U2(n.$$.fragment, a2), U2(i.$$.fragment, a2), o = false;
    }, d(a2) {
      s && s.d(a2), a2 && z2(e), me(n, a2), a2 && z2(r), me(i, a2);
    } };
  }
  function g1(t) {
    let e;
    return { c() {
      e = B2("div"), T2(e, "class", Ge(t[9]`w-full h-[3px]`) + " svelte-15xwzh7");
    }, m(n, r) {
      W2(n, e, r);
    }, p: Te, d(n) {
      n && z2(e);
    } };
  }
  function m1(t) {
    let e, n;
    return { c() {
      e = B2("div"), n = B2("div"), T2(n, "class", Ge(t[9]`progress-bar-value-animation w-full h-full bg-blue-600 `) + " svelte-15xwzh7"), T2(e, "class", Ge(t[9]`w-full h-[3px] overflow-hidden bg-blue-200`) + " svelte-15xwzh7");
    }, m(r, i) {
      W2(r, e, i), N2(e, n);
    }, p: Te, d(r) {
      r && z2(e);
    } };
  }
  function Vd(t) {
    let e, n;
    return e = new hc({ props: { container$class: t[9]`flex-[50px] flex-grow-0`, $$slots: { default: [v1] }, $$scope: { ctx: t } } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i[0] & 24 | i[1] & 64 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function v1(t) {
    let e, n;
    return e = new Cs({ props: { checked: t[4][t[33].Id] } }), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i[0] & 24 && (o.checked = r[4][r[33].Id]), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function y1(t) {
    var e;
    let n, r = ((e = t[33].Name) == null ? void 0 : e.Value) + "", i;
    return { c() {
      n = B2("div"), i = de(r), T2(n, "class", Ge(t[9]`text-sm overflow-hidden whitespace-nowrap text-ellipsis`) + " svelte-15xwzh7");
    }, m(o, s) {
      W2(o, n, s), N2(n, i);
    }, p(o, s) {
      var a2;
      s[0] & 8 && r !== (r = ((a2 = o[33].Name) == null ? void 0 : a2.Value) + "") && vt(i, r);
    }, d(o) {
      o && z2(n);
    } };
  }
  function b1(t) {
    return { c: Te, m: Te, p: Te, d: Te };
  }
  function _1(t) {
    let e = (t[36] ?? "") + "", n;
    return { c() {
      n = de(e);
    }, m(r, i) {
      W2(r, n, i);
    }, p(r, i) {
      i[0] & 8 && e !== (e = (r[36] ?? "") + "") && vt(n, e);
    }, d(r) {
      r && z2(n);
    } };
  }
  function w1(t) {
    return { c: Te, m: Te, p: Te, d: Te };
  }
  function x1(t) {
    let e, n, r = { ctx: t, current: null, token: null, hasCatch: false, pending: w1, then: _1, catch: b1, value: 36 };
    return ba(n = t[8].resolveName(ae.Group, t[33].GroupId), r), { c() {
      e = B2("span"), r.block.c(), T2(e, "class", Ge(t[9]` text-sm overflow-hidden whitespace-nowrap text-ellipsis`) + " svelte-15xwzh7");
    }, m(i, o) {
      W2(i, e, o), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null;
    }, p(i, o) {
      t = i, r.ctx = t, o[0] & 8 && n !== (n = t[8].resolveName(ae.Group, t[33].GroupId)) && ba(n, r) || wg(r, t, o);
    }, d(i) {
      i && z2(e), r.block.d(), r.token = null, r = null;
    } };
  }
  function S1(t) {
    let e, n, r, i, o, s, a2 = t[0] && Vd(t);
    return n = new hc({ props: { container$class: t[9]`flex-[2]`, $$slots: { default: [y1] }, $$scope: { ctx: t } } }), i = new hc({ props: { container$class: t[9]`flex-1`, $$slots: { default: [x1] }, $$scope: { ctx: t } } }), { c() {
      a2 && a2.c(), e = oe(), xe(n.$$.fragment), r = oe(), xe(i.$$.fragment), o = oe();
    }, m(c, l) {
      a2 && a2.m(c, l), W2(c, e, l), ge(n, c, l), W2(c, r, l), ge(i, c, l), W2(c, o, l), s = true;
    }, p(c, l) {
      c[0] ? a2 ? (a2.p(c, l), l[0] & 1 && L2(a2, 1)) : (a2 = Vd(c), a2.c(), L2(a2, 1), a2.m(e.parentNode, e)) : a2 && (lt(), U2(a2, 1, 1, () => {
        a2 = null;
      }), ct());
      const u2 = {};
      l[0] & 8 | l[1] & 64 && (u2.$$scope = { dirty: l, ctx: c }), n.$set(u2);
      const f = {};
      l[0] & 8 | l[1] & 64 && (f.$$scope = { dirty: l, ctx: c }), i.$set(f);
    }, i(c) {
      s || (L2(a2), L2(n.$$.fragment, c), L2(i.$$.fragment, c), s = true);
    }, o(c) {
      U2(a2), U2(n.$$.fragment, c), U2(i.$$.fragment, c), s = false;
    }, d(c) {
      a2 && a2.d(c), c && z2(e), me(n, c), c && z2(r), me(i, c), c && z2(o);
    } };
  }
  function qd(t) {
    let e, n;
    function r() {
      return t[16](t[33]);
    }
    return e = new qx({ props: { flexrow$class: t[9]`cursor-pointer hover:bg-gray-100`, $$slots: { default: [S1] }, $$scope: { ctx: t } } }), e.$on("click", r), { c() {
      xe(e.$$.fragment);
    }, m(i, o) {
      ge(e, i, o), n = true;
    }, p(i, o) {
      t = i;
      const s = {};
      o[0] & 25 | o[1] & 64 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    }, i(i) {
      n || (L2(e.$$.fragment, i), n = true);
    }, o(i) {
      U2(e.$$.fragment, i), n = false;
    }, d(i) {
      me(e, i);
    } };
  }
  function E1(t) {
    let e, n, r, i, o;
    e = new Ux({ props: { $$slots: { default: [p1] }, $$scope: { ctx: t } } });
    function s(d3, h2) {
      return d3[7] ? m1 : g1;
    }
    let a2 = s(t), c = a2(t), l = t[3], u2 = [];
    for (let d3 = 0; d3 < l.length; d3 += 1) u2[d3] = qd(zd(t, l, d3));
    const f = (d3) => U2(u2[d3], 1, 1, () => {
      u2[d3] = null;
    });
    return { c() {
      xe(e.$$.fragment), n = oe(), c.c(), r = oe();
      for (let d3 = 0; d3 < u2.length; d3 += 1) u2[d3].c();
      i = qa();
    }, m(d3, h2) {
      ge(e, d3, h2), W2(d3, n, h2), c.m(d3, h2), W2(d3, r, h2);
      for (let p = 0; p < u2.length; p += 1) u2[p] && u2[p].m(d3, h2);
      W2(d3, i, h2), o = true;
    }, p(d3, h2) {
      const p = {};
      if (h2[0] & 33 | h2[1] & 64 && (p.$$scope = { dirty: h2, ctx: d3 }), e.$set(p), a2 === (a2 = s(d3)) && c ? c.p(d3, h2) : (c.d(1), c = a2(d3), c && (c.c(), c.m(r.parentNode, r))), h2[0] & 1817) {
        l = d3[3];
        let g3;
        for (g3 = 0; g3 < l.length; g3 += 1) {
          const m2 = zd(d3, l, g3);
          u2[g3] ? (u2[g3].p(m2, h2), L2(u2[g3], 1)) : (u2[g3] = qd(m2), u2[g3].c(), L2(u2[g3], 1), u2[g3].m(i.parentNode, i));
        }
        for (lt(), g3 = l.length; g3 < u2.length; g3 += 1) f(g3);
        ct();
      }
    }, i(d3) {
      if (!o) {
        L2(e.$$.fragment, d3);
        for (let h2 = 0; h2 < l.length; h2 += 1) L2(u2[h2]);
        o = true;
      }
    }, o(d3) {
      U2(e.$$.fragment, d3), u2 = u2.filter(Boolean);
      for (let h2 = 0; h2 < u2.length; h2 += 1) U2(u2[h2]);
      o = false;
    }, d(d3) {
      me(e, d3), d3 && z2(n), c.d(d3), d3 && z2(r), Hr(u2, d3), d3 && z2(i);
    } };
  }
  function C1(t) {
    let e, n;
    return e = new c1({ props: { slot: "pagination", pageIndex: t[1], pageSize: t[2], totalCount: t[6] } }), e.$on("changePage", t[12]), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i[0] & 2 && (o.pageIndex = r[1]), i[0] & 4 && (o.pageSize = r[2]), i[0] & 64 && (o.totalCount = r[6]), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function A1(t) {
    let e, n, r;
    return n = new Mx({ props: { $$slots: { pagination: [C1], default: [E1] }, $$scope: { ctx: t } } }), { c() {
      e = B2("div"), xe(n.$$.fragment), T2(e, "class", Ge(t[9]`flex flex-col h-full overflow-hidden mt-[-10px]`) + " svelte-15xwzh7");
    }, m(i, o) {
      W2(i, e, o), ge(n, e, null), r = true;
    }, p(i, o) {
      const s = {};
      o[0] & 255 | o[1] & 64 && (s.$$scope = { dirty: o, ctx: i }), n.$set(s);
    }, i(i) {
      r || (L2(n.$$.fragment, i), r = true);
    }, o(i) {
      U2(n.$$.fragment, i), r = false;
    }, d(i) {
      i && z2(e), me(n);
    } };
  }
  function I1(t, e, n) {
    let r = Qt(Ti), i = Qt(es), { entityType: o } = e, { selectMultiple: s = false } = e, { additionalFilter: a2 = null } = e, c = Kt("tw"), l = [], u2 = new Ot(), f = [], d3 = {}, h2 = "unchecked", p, g3, m2, w4 = false, v2 = 0, y3 = 10, b2 = 0, _4 = _o(), C3 = bi, x2 = false, S2 = true, D3 = new Ot();
    yi.pipe(mr(D3)).subscribe((G4) => {
      f = G4.selectedEntities, H3(), M3();
    }), Up([C3.asObservable(), _4.asObservable()]).pipe(mr(D3)).subscribe(([G4, se3]) => {
      var et2;
      console.log("globalState", G4), m2 = se3.selectedGroup, g3 = (et2 = se3.selectedGroup) == null ? void 0 : et2.Id, p = se3.filter, w4 = G4.queryWithSubGroups, x2 = true, n(1, v2 = 0), n(2, y3 = G4.pageSize ?? 10), u2.next();
    });
    function K2() {
      const G4 = { $and: [] };
      w4 ? G4.$and.push({ Path: g3 }) : G4.$and.push({ GroupId: g3 }), p && G4.$and.push({ $or: [{ "Name.Value": { $regex: p, $options: "i" } }, { "Description.Value": { $regex: p, $options: "i" } }] }), a2 && G4.$and.push(a2);
      const se3 = { limit: y3, skip: v2 * y3 };
      return Pi(r.queryConfiguration(o, G4, se3));
    }
    function ce4(G4) {
      s ? (f.find((se3) => se3.Id === G4.Id) ? (f = f.filter((se3) => se3.Id !== G4.Id), n(4, d3[G4.Id] = false, d3)) : (f.push(G4), n(4, d3[G4.Id] = true, d3)), M3()) : f = [G4], yi.update((se3) => ({ ...se3, selectedEntities: f }));
    }
    function ue2(G4) {
      G4 ? f = [...f, ...l.filter((se3) => !d3[se3.Id])] : f = f.filter((se3) => !l.find((et2) => et2.Id === se3.Id)), H3(), M3(), yi.update((se3) => ({ ...se3, selectedEntities: f }));
    }
    function M3() {
      let G4 = Object.keys(d3).filter((se3) => d3[se3]);
      G4.length === 0 ? n(5, h2 = "unchecked") : G4.length === l.length ? n(5, h2 = "checked") : n(5, h2 = "indeterminate");
    }
    function ee(G4) {
      const se3 = G4.detail;
      se3.pageSize != y3 ? (n(1, v2 = 0), n(2, y3 = se3.pageSize)) : n(1, v2 = se3.pageIndex);
    }
    function H3() {
      n(4, d3 = {}), l.forEach((G4) => {
        n(4, d3[G4.Id] = f.find((se3) => se3.Id === G4.Id) != null, d3);
      });
    }
    Gr(() => {
      D3.next(), D3.complete();
    }), u2.pipe(mr(D3), Ki(() => x2 && !!g3), p0(250), d0(() => n(7, S2 = true)), zp(() => K2())).subscribe((G4) => {
      n(7, S2 = false), n(3, l = G4.data), H3(), M3(), o === ae.Group && l.unshift(m2), n(6, b2 = G4.total);
    });
    const Se3 = (G4) => {
      var se3;
      return ue2((se3 = G4.detail) == null ? void 0 : se3.checked);
    }, He = (G4) => ce4(G4);
    return t.$$set = (G4) => {
      "entityType" in G4 && n(13, o = G4.entityType), "selectMultiple" in G4 && n(0, s = G4.selectMultiple), "additionalFilter" in G4 && n(14, a2 = G4.additionalFilter);
    }, t.$$.update = () => {
      t.$$.dirty[0] & 2 && (n(1, v2), n(24, u2), u2.next()), t.$$.dirty[0] & 4 && (n(2, y3), n(28, C3), C3.update((G4) => ({ ...G4, pageSize: y3 })));
    }, [s, v2, y3, l, d3, h2, b2, S2, i, c, ce4, ue2, ee, o, a2, Se3, He];
  }
  var $1 = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, I1, A1, Ze, { entityType: 13, selectMultiple: 0, additionalFilter: 14 }, u1, [-1, -1]);
    }
  };
  function Gd(t) {
    let e, n, r, i;
    n = new Dr({ props: { icon: "done_all" } }), n.$on("click", t[10]);
    let o = t[4].length > 0 && Xd(t);
    return { c() {
      e = B2("div"), xe(n.$$.fragment), r = oe(), o && o.c(), T2(e, "class", t[5]`mx-2 relative`);
    }, m(s, a2) {
      W2(s, e, a2), ge(n, e, null), N2(e, r), o && o.m(e, null), i = true;
    }, p(s, a2) {
      s[4].length > 0 ? o ? o.p(s, a2) : (o = Xd(s), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    }, i(s) {
      i || (L2(n.$$.fragment, s), i = true);
    }, o(s) {
      U2(n.$$.fragment, s), i = false;
    }, d(s) {
      s && z2(e), me(n), o && o.d();
    } };
  }
  function Xd(t) {
    let e, n = t[4].length + "", r;
    return { c() {
      e = B2("div"), r = de(n), T2(e, "class", t[5]`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`);
    }, m(i, o) {
      W2(i, e, o), N2(e, r);
    }, p(i, o) {
      o & 16 && n !== (n = i[4].length + "") && vt(r, n);
    }, d(i) {
      i && z2(e);
    } };
  }
  function T1(t) {
    let e, n, r, i, o, s, a2, c, l, u2, f, d3, h2, p, g3, m2 = t[0] && Gd(t);
    function w4(y3) {
      t[11](y3);
    }
    let v2 = { label: "Mit Untergruppen" };
    return t[1] !== void 0 && (v2.checked = t[1]), f = new Cs({ props: v2 }), st.push(() => Qi(f, "checked", w4)), { c() {
      e = B2("div"), n = B2("div"), r = B2("div"), i = B2("span"), o = de("search"), s = oe(), a2 = B2("input"), c = oe(), m2 && m2.c(), l = oe(), u2 = B2("div"), xe(f.$$.fragment), T2(i, "class", t[5]`material-symbols-rounded mr-2`), T2(a2, "placeholder", "Search"), T2(a2, "class", t[5]`w-full outline-none`), T2(r, "class", t[5]`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`), T2(n, "class", t[5]`flex items-center`), T2(u2, "class", t[5]`flex justify-end mt-2`), T2(e, "class", t[5]`flex flex-col`);
    }, m(y3, b2) {
      W2(y3, e, b2), N2(e, n), N2(n, r), N2(r, i), N2(i, o), N2(r, s), N2(r, a2), t[8](a2), ya(a2, t[2]), N2(n, c), m2 && m2.m(n, null), N2(e, l), N2(e, u2), ge(f, u2, null), h2 = true, p || (g3 = Ve(a2, "input", t[9]), p = true);
    }, p(y3, [b2]) {
      b2 & 4 && a2.value !== y3[2] && ya(a2, y3[2]), y3[0] ? m2 ? (m2.p(y3, b2), b2 & 1 && L2(m2, 1)) : (m2 = Gd(y3), m2.c(), L2(m2, 1), m2.m(n, null)) : m2 && (lt(), U2(m2, 1, 1, () => {
        m2 = null;
      }), ct());
      const _4 = {};
      !d3 && b2 & 2 && (d3 = true, _4.checked = y3[1], Yi(() => d3 = false)), f.$set(_4);
    }, i(y3) {
      h2 || (L2(m2), L2(f.$$.fragment, y3), h2 = true);
    }, o(y3) {
      U2(m2), U2(f.$$.fragment, y3), h2 = false;
    }, d(y3) {
      y3 && z2(e), t[8](null), m2 && m2.d(), me(f), p = false, g3();
    } };
  }
  function k1(t, e, n) {
    let { entityType: r } = e, { selectMultiple: i = false } = e, o = Kt("tw"), s = En(), a2 = _o(), c = false, l = a2.value.filter, u2, f = new Ot(), d3 = new Ot(), h2 = [];
    bi.pipe(mr(f)).subscribe((_4) => {
      n(1, c = _4.queryWithSubGroups);
    }), d3.pipe(mr(f), t0(200)).subscribe((_4) => {
      a2.update((C3) => ({ ...C3, filter: _4 }));
    }), yi.pipe(mr(f)).subscribe((_4) => {
      n(4, h2 = _4.selectedEntities);
    });
    function p(_4) {
      console.log("onSubGroupsToggled", _4), _4 != bi.value.queryWithSubGroups && bi.update((C3) => ({ ...C3, queryWithSubGroups: _4 }));
    }
    function g3() {
      s("acceptSelection");
    }
    _g(() => {
      m2();
    });
    function m2() {
      u2 && setTimeout(() => {
        u2.focus(), u2.select();
      }, 0);
    }
    Gr(() => {
      f.next(), f.complete();
    });
    function w4(_4) {
      st[_4 ? "unshift" : "push"](() => {
        u2 = _4, n(3, u2);
      });
    }
    function v2() {
      l = this.value, n(2, l);
    }
    const y3 = () => g3();
    function b2(_4) {
      c = _4, n(1, c);
    }
    return t.$$set = (_4) => {
      "entityType" in _4 && n(7, r = _4.entityType), "selectMultiple" in _4 && n(0, i = _4.selectMultiple);
    }, t.$$.update = () => {
      t.$$.dirty & 4 && d3.next(l), t.$$.dirty & 2 && p(c);
    }, [i, c, l, u2, h2, o, g3, r, w4, v2, y3, b2];
  }
  var R1 = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, k1, T1, Ze, { entityType: 7, selectMultiple: 0 });
    }
  };
  function Kd(t, e, n) {
    const r = t.slice();
    return r[15] = e[n], r;
  }
  function Jd(t, e, n) {
    const r = t.slice();
    return r[15] = e[n], r[19] = n, r;
  }
  function Yd(t) {
    let e, n;
    return e = new Dr({ props: { size: "small", $$slots: { default: [O1] }, $$scope: { ctx: t } } }), e.$on("click", t[8]), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 1048576 && (o.$$scope = { dirty: i, ctx: r }), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function O1(t) {
    let e;
    return { c() {
      e = de("arrow_back");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function Qd(t) {
    let e, n = t[15].Name + "", r, i = t[19] == t[2].length - 1 ? "" : " /", o, s, a2, c, l;
    function u2() {
      return t[9](t[15]);
    }
    return { c() {
      e = B2("div"), r = de(n), o = de(i), s = oe(), T2(e, "class", a2 = t[1]`cursor-pointer hover:bg-slate-100 p-1`);
    }, m(f, d3) {
      W2(f, e, d3), N2(e, r), N2(e, o), N2(e, s), c || (l = Ve(e, "click", u2), c = true);
    }, p(f, d3) {
      t = f, d3 & 4 && n !== (n = t[15].Name + "") && vt(r, n), d3 & 4 && i !== (i = t[19] == t[2].length - 1 ? "" : " /") && vt(o, i), d3 & 2 && a2 !== (a2 = t[1]`cursor-pointer hover:bg-slate-100 p-1`) && T2(e, "class", a2);
    }, d(f) {
      f && z2(e), c = false, l();
    } };
  }
  function Zd(t) {
    let e, n, r;
    function i(...o) {
      return t[10](t[15], ...o);
    }
    return n = new Dr({ props: { $$slots: { default: [P1] }, $$scope: { ctx: t } } }), n.$on("click", i), { c() {
      e = B2("div"), xe(n.$$.fragment);
    }, m(o, s) {
      W2(o, e, s), ge(n, e, null), r = true;
    }, p(o, s) {
      t = o;
      const a2 = {};
      s & 1048576 && (a2.$$scope = { dirty: s, ctx: t }), n.$set(a2);
    }, i(o) {
      r || (L2(n.$$.fragment, o), r = true);
    }, o(o) {
      U2(n.$$.fragment, o), r = false;
    }, d(o) {
      o && z2(e), me(n);
    } };
  }
  function P1(t) {
    let e;
    return { c() {
      e = de("done");
    }, m(n, r) {
      W2(n, e, r);
    }, d(n) {
      n && z2(e);
    } };
  }
  function eh(t) {
    var e;
    let n, r, i = ((e = t[15]) == null ? void 0 : e.Name) + "", o, s, a2, c, l, u2, f, d3, h2 = t[15].Root && Zd(t);
    function p() {
      return t[11](t[15]);
    }
    return { c() {
      n = B2("div"), r = B2("div"), o = de(i), a2 = oe(), h2 && h2.c(), c = oe(), T2(r, "class", s = t[1]`mt-2 ml-2 `), T2(n, "class", l = t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`);
    }, m(g3, m2) {
      W2(g3, n, m2), N2(n, r), N2(r, o), N2(n, a2), h2 && h2.m(n, null), N2(n, c), u2 = true, f || (d3 = Ve(n, "click", p), f = true);
    }, p(g3, m2) {
      var w4;
      t = g3, (!u2 || m2 & 8) && i !== (i = ((w4 = t[15]) == null ? void 0 : w4.Name) + "") && vt(o, i), (!u2 || m2 & 2 && s !== (s = t[1]`mt-2 ml-2 `)) && T2(r, "class", s), t[15].Root ? h2 ? (h2.p(t, m2), m2 & 8 && L2(h2, 1)) : (h2 = Zd(t), h2.c(), L2(h2, 1), h2.m(n, c)) : h2 && (lt(), U2(h2, 1, 1, () => {
        h2 = null;
      }), ct()), (!u2 || m2 & 2 && l !== (l = t[1]`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`)) && T2(n, "class", l);
    }, i(g3) {
      u2 || (L2(h2), u2 = true);
    }, o(g3) {
      U2(h2), u2 = false;
    }, d(g3) {
      g3 && z2(n), h2 && h2.d(), f = false, d3();
    } };
  }
  function D1(t) {
    let e, n, r, i, o, s, a2, c, l, u2, f, d3, h2, p, g3, m2 = t[0] && Yd(t), w4 = t[2], v2 = [];
    for (let C3 = 0; C3 < w4.length; C3 += 1) v2[C3] = Qd(Jd(t, w4, C3));
    let y3 = t[3], b2 = [];
    for (let C3 = 0; C3 < y3.length; C3 += 1) b2[C3] = eh(Kd(t, y3, C3));
    const _4 = (C3) => U2(b2[C3], 1, 1, () => {
      b2[C3] = null;
    });
    return { c() {
      e = B2("div"), n = B2("div"), m2 && m2.c(), r = oe(), i = B2("div"), o = de("Mandant ausw\xE4hlen"), c = oe(), l = B2("div");
      for (let C3 = 0; C3 < v2.length; C3 += 1) v2[C3].c();
      f = oe(), d3 = B2("div");
      for (let C3 = 0; C3 < b2.length; C3 += 1) b2[C3].c();
      T2(i, "class", s = t[1]`font-bold text-gray-600 text-lg`), T2(n, "class", a2 = t[1]`flex items-center`), T2(l, "class", u2 = t[1]`flex mb-1`), lc(d3, "grid-auto-rows", "60px"), T2(d3, "class", h2 = t[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`), T2(e, "class", p = t[1]`w-full overflow-hidden flex flex-col`);
    }, m(C3, x2) {
      W2(C3, e, x2), N2(e, n), m2 && m2.m(n, null), N2(n, r), N2(n, i), N2(i, o), N2(e, c), N2(e, l);
      for (let S2 = 0; S2 < v2.length; S2 += 1) v2[S2] && v2[S2].m(l, null);
      N2(e, f), N2(e, d3);
      for (let S2 = 0; S2 < b2.length; S2 += 1) b2[S2] && b2[S2].m(d3, null);
      g3 = true;
    }, p(C3, [x2]) {
      if (C3[0] ? m2 ? (m2.p(C3, x2), x2 & 1 && L2(m2, 1)) : (m2 = Yd(C3), m2.c(), L2(m2, 1), m2.m(n, r)) : m2 && (lt(), U2(m2, 1, 1, () => {
        m2 = null;
      }), ct()), (!g3 || x2 & 2 && s !== (s = C3[1]`font-bold text-gray-600 text-lg`)) && T2(i, "class", s), (!g3 || x2 & 2 && a2 !== (a2 = C3[1]`flex items-center`)) && T2(n, "class", a2), x2 & 70) {
        w4 = C3[2];
        let S2;
        for (S2 = 0; S2 < w4.length; S2 += 1) {
          const D3 = Jd(C3, w4, S2);
          v2[S2] ? v2[S2].p(D3, x2) : (v2[S2] = Qd(D3), v2[S2].c(), v2[S2].m(l, null));
        }
        for (; S2 < v2.length; S2 += 1) v2[S2].d(1);
        v2.length = w4.length;
      }
      if ((!g3 || x2 & 2 && u2 !== (u2 = C3[1]`flex mb-1`)) && T2(l, "class", u2), x2 & 170) {
        y3 = C3[3];
        let S2;
        for (S2 = 0; S2 < y3.length; S2 += 1) {
          const D3 = Kd(C3, y3, S2);
          b2[S2] ? (b2[S2].p(D3, x2), L2(b2[S2], 1)) : (b2[S2] = eh(D3), b2[S2].c(), L2(b2[S2], 1), b2[S2].m(d3, null));
        }
        for (lt(), S2 = y3.length; S2 < b2.length; S2 += 1) _4(S2);
        ct();
      }
      (!g3 || x2 & 2 && h2 !== (h2 = C3[1]`grid grid-cols-2 gap-2 flex-1 overflow-auto`)) && T2(d3, "class", h2), (!g3 || x2 & 2 && p !== (p = C3[1]`w-full overflow-hidden flex flex-col`)) && T2(e, "class", p);
    }, i(C3) {
      if (!g3) {
        L2(m2);
        for (let x2 = 0; x2 < y3.length; x2 += 1) L2(b2[x2]);
        g3 = true;
      }
    }, o(C3) {
      U2(m2), b2 = b2.filter(Boolean);
      for (let x2 = 0; x2 < b2.length; x2 += 1) U2(b2[x2]);
      g3 = false;
    }, d(C3) {
      C3 && z2(e), m2 && m2.d(), Hr(v2, C3), Hr(b2, C3);
    } };
  }
  function M1(t, e, n) {
    let r = Qt(Zo), { allowBack: i = false } = e, { tw: o } = e, s = [], a2 = [];
    const c = En();
    async function l() {
      const v2 = await r.getTopTenants();
      if (v2.length === 1) {
        const y3 = v2[0];
        if (y3.Root == null) {
          f(y3);
          return;
        }
      }
      n(2, s = [new tb({ Id: "start", Name: "Start" })]), n(3, a2 = v2);
    }
    async function u2(v2) {
      const y3 = await r.getNextTenants(v2.Id);
      n(3, a2 = y3);
    }
    async function f(v2) {
      n(2, s = [...s, v2]), u2(v2);
    }
    async function d3(v2) {
      if (v2.Id == "start") {
        l();
        return;
      }
      const y3 = s.findIndex((b2) => b2.Id === v2.Id);
      n(2, s = s.slice(0, y3 + 1)), u2(v2);
    }
    function h2(v2, y3) {
      console.log(v2, y3), v2.detail.stopPropagation(), c("tenantSelected", { tenant: y3 });
    }
    l();
    const p = () => c("back"), g3 = (v2) => d3(v2), m2 = (v2, y3) => h2(y3, v2), w4 = (v2) => f(v2);
    return t.$$set = (v2) => {
      "allowBack" in v2 && n(0, i = v2.allowBack), "tw" in v2 && n(1, o = v2.tw);
    }, [i, o, s, a2, c, f, d3, h2, p, g3, m2, w4];
  }
  var L1 = class extends it2 {
    constructor(t) {
      super(), rt2(this, t, M1, D1, Ze, { allowBack: 0, tw: 1 });
    }
  };
  function F1(t) {
    let e, n, r, i, o, s, a2, c, l, u2, f, d3, h2, p;
    return n = new Rx({ props: { selectMultiple: t[1], entityType: t[0], selectedTenant: t[4] } }), n.$on("changeTenant", t[11]), a2 = new R1({ props: { entityType: t[0], selectMultiple: t[1] } }), a2.$on("acceptSelection", t[12]), u2 = new $1({ props: { selectMultiple: t[1], entityType: t[0], additionalFilter: t[2] } }), { c() {
      e = B2("div"), xe(n.$$.fragment), i = oe(), o = B2("div"), s = B2("div"), xe(a2.$$.fragment), c = oe(), l = B2("div"), xe(u2.$$.fragment), T2(e, "class", r = t[3]`flex-1 border-r border-slate-400 overflow-hidden`), T2(l, "class", f = t[3]`flex-1 overflow-hidden mt-3`), T2(s, "class", d3 = t[3]`flex flex-col h-full overflow-hidden`), T2(o, "class", h2 = t[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`);
    }, m(g3, m2) {
      W2(g3, e, m2), ge(n, e, null), W2(g3, i, m2), W2(g3, o, m2), N2(o, s), ge(a2, s, null), N2(s, c), N2(s, l), ge(u2, l, null), p = true;
    }, p(g3, m2) {
      const w4 = {};
      m2 & 2 && (w4.selectMultiple = g3[1]), m2 & 1 && (w4.entityType = g3[0]), m2 & 16 && (w4.selectedTenant = g3[4]), n.$set(w4), (!p || m2 & 8 && r !== (r = g3[3]`flex-1 border-r border-slate-400 overflow-hidden`)) && T2(e, "class", r);
      const v2 = {};
      m2 & 1 && (v2.entityType = g3[0]), m2 & 2 && (v2.selectMultiple = g3[1]), a2.$set(v2);
      const y3 = {};
      m2 & 2 && (y3.selectMultiple = g3[1]), m2 & 1 && (y3.entityType = g3[0]), m2 & 4 && (y3.additionalFilter = g3[2]), u2.$set(y3), (!p || m2 & 8 && f !== (f = g3[3]`flex-1 overflow-hidden mt-3`)) && T2(l, "class", f), (!p || m2 & 8 && d3 !== (d3 = g3[3]`flex flex-col h-full overflow-hidden`)) && T2(s, "class", d3), (!p || m2 & 8 && h2 !== (h2 = g3[3]`flex-[2] pl-4 pt-1 h-full overflow-hidden`)) && T2(o, "class", h2);
    }, i(g3) {
      p || (L2(n.$$.fragment, g3), L2(a2.$$.fragment, g3), L2(u2.$$.fragment, g3), p = true);
    }, o(g3) {
      U2(n.$$.fragment, g3), U2(a2.$$.fragment, g3), U2(u2.$$.fragment, g3), p = false;
    }, d(g3) {
      g3 && z2(e), me(n), g3 && z2(i), g3 && z2(o), me(a2), me(u2);
    } };
  }
  function N1(t) {
    let e, n;
    return e = new L1({ props: { tw: t[3], allowBack: !!t[4] } }), e.$on("back", t[9]), e.$on("tenantSelected", t[10]), { c() {
      xe(e.$$.fragment);
    }, m(r, i) {
      ge(e, r, i), n = true;
    }, p(r, i) {
      const o = {};
      i & 8 && (o.tw = r[3]), i & 16 && (o.allowBack = !!r[4]), e.$set(o);
    }, i(r) {
      n || (L2(e.$$.fragment, r), n = true);
    }, o(r) {
      U2(e.$$.fragment, r), n = false;
    }, d(r) {
      me(e, r);
    } };
  }
  function U1(t) {
    let e, n, r, i, o;
    const s = [N1, F1], a2 = [];
    function c(l, u2) {
      return l[5] ? 0 : 1;
    }
    return n = c(t), r = a2[n] = s[n](t), { c() {
      e = B2("div"), r.c(), T2(e, "class", i = t[3]`flex w-full h-full`);
    }, m(l, u2) {
      W2(l, e, u2), a2[n].m(e, null), o = true;
    }, p(l, [u2]) {
      let f = n;
      n = c(l), n === f ? a2[n].p(l, u2) : (lt(), U2(a2[f], 1, 1, () => {
        a2[f] = null;
      }), ct(), r = a2[n], r ? r.p(l, u2) : (r = a2[n] = s[n](l), r.c()), L2(r, 1), r.m(e, null)), (!o || u2 & 8 && i !== (i = l[3]`flex w-full h-full`)) && T2(e, "class", i);
    }, i(l) {
      o || (L2(r), o = true);
    }, o(l) {
      U2(r), o = false;
    }, d(l) {
      l && z2(e), a2[n].d();
    } };
  }
  function B1(t, e, n) {
    let { entityType: r = ae.Signal } = e, { selectMultiple: i = false } = e, { additionalFilter: o = null } = e, { tw: s = Sn } = e, a2 = Qt(Ti), c = Qt(Zo), l, u2 = false, f = [], d3 = En(), h2 = bi.subscribe((S2) => {
      S2.selectedTenant ? (n(5, u2 = false), m2(S2.selectedTenant)) : n(5, u2 = true);
    }), p = yi.subscribe((S2) => {
      S2.selectedEntities && !i ? (g3(S2.selectedEntities), d3("selectedEntities", S2.selectedEntities[0])) : f = S2.selectedEntities;
    });
    function g3(S2) {
      const D3 = _o(), K2 = D3.value.lastSelectedEntities, ce4 = S2.filter((ue2) => !K2.includes(ue2.Id)).map((ue2) => ue2.Id);
      K2.unshift(...ce4), K2.splice(5), D3.update((ue2) => ({ ...ue2, lastSelectedEntities: K2 }));
    }
    async function m2(S2) {
      try {
        n(4, l = await c.getTenantViewById(S2));
      } catch (D3) {
        console.error(D3), n(5, u2 = true);
      }
    }
    async function w4(S2) {
      console.log("Tenant selected", S2);
      const D3 = await a2.getEntityById(ae.Group, S2.Root);
      bi.update((K2) => ({ ...K2, selectedTenant: S2.Id })), _o().update((K2) => ({ ...K2, selectedGroup: D3 }));
    }
    function v2() {
      n(5, u2 = true);
    }
    function y3() {
      g3(f), d3("selectedEntities", f);
    }
    Gr(() => {
      h2.unsubscribe(), p.unsubscribe();
    });
    const b2 = () => n(5, u2 = false), _4 = (S2) => w4(S2.detail.tenant), C3 = () => v2(), x2 = () => y3();
    return t.$$set = (S2) => {
      "entityType" in S2 && n(0, r = S2.entityType), "selectMultiple" in S2 && n(1, i = S2.selectMultiple), "additionalFilter" in S2 && n(2, o = S2.additionalFilter), "tw" in S2 && n(3, s = S2.tw);
    }, t.$$.update = () => {
      t.$$.dirty & 8 && Tr("tw", s);
    }, [r, i, o, s, l, u2, w4, v2, y3, b2, _4, C3, x2];
  }
  var Gg = class extends it2 {
    constructor(t) {
      super(), rt2(this, t, B1, U1, Ze, { entityType: 0, selectMultiple: 1, additionalFilter: 2, tw: 3 });
    }
  };
  function j1(t) {
    let e, n, r, i, o, s, a2, c, l = { selectMultiple: t[1], entityType: t[0], additionalFilter: t[2] };
    return r = new Gg({ props: l }), t[9](r), r.$on("selectedEntities", t[10]), { c() {
      e = B2("div"), n = B2("div"), xe(r.$$.fragment), T2(n, "class", i = t[3]`h-full w-full`), T2(e, "class", o = t[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`);
    }, m(u2, f) {
      W2(u2, e, f), N2(e, n), ge(r, n, null), t[11](e), s = true, a2 || (c = [Ve(e, "keydown", t[6]), Ve(e, "click", H1)], a2 = true);
    }, p(u2, [f]) {
      const d3 = {};
      f & 2 && (d3.selectMultiple = u2[1]), f & 1 && (d3.entityType = u2[0]), f & 4 && (d3.additionalFilter = u2[2]), r.$set(d3), (!s || f & 8 && i !== (i = u2[3]`h-full w-full`)) && T2(n, "class", i), (!s || f & 8 && o !== (o = u2[3]`bg-surface rounded-md shadow-lg w-[80vw] h-[70vh] md:w-[80vw] lg:w-[60vw]  flex 2xl:w-[50vw] py-2 px-4`)) && T2(e, "class", o);
    }, i(u2) {
      s || (L2(r.$$.fragment, u2), s = true);
    }, o(u2) {
      U2(r.$$.fragment, u2), s = false;
    }, d(u2) {
      u2 && z2(e), t[9](null), me(r), t[11](null), a2 = false, _r(c);
    } };
  }
  var H1 = (t) => t.stopPropagation();
  function z1(t, e, n) {
    let { open: r = false } = e, { entityType: i = ae.Signal } = e, { selectMultiple: o = false } = e, { additionalFilter: s = null } = e, { tw: a2 = Sn } = e, c = Qt("PopupService", new wa(document.body)), l, u2, f;
    const d3 = En();
    function h2(b2, _4) {
      b2 && !f && _4 ? (f = c.openPopup("entity-select-dialog", _4, { backdrop: true, closeOnClickOutside: true, positioning: "center", inTransitionClassList: "scale-100", inTransitionDuration: 125, outTransitionClassList: "!scale-50", outTransitionDuration: 125 }), f.afterClosed.then(() => {
        console.log("dialog closed", u2), u2?.$destroy(), f = null;
      })) : p();
    }
    function p() {
      console.log("closeDialog"), f?.close();
    }
    function g3(b2) {
      console.log(b2), b2.key === "Escape" && p();
    }
    function m2(b2) {
      d3("selectedEntities", b2.detail);
    }
    function w4(b2) {
      st[b2 ? "unshift" : "push"](() => {
        u2 = b2, n(5, u2);
      });
    }
    const v2 = (b2) => m2(b2);
    function y3(b2) {
      st[b2 ? "unshift" : "push"](() => {
        l = b2, n(4, l);
      });
    }
    return t.$$set = (b2) => {
      "open" in b2 && n(8, r = b2.open), "entityType" in b2 && n(0, i = b2.entityType), "selectMultiple" in b2 && n(1, o = b2.selectMultiple), "additionalFilter" in b2 && n(2, s = b2.additionalFilter), "tw" in b2 && n(3, a2 = b2.tw);
    }, t.$$.update = () => {
      t.$$.dirty & 272 && h2(r, l);
    }, [i, o, s, a2, l, u2, g3, m2, r, w4, v2, y3];
  }
  var W1 = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, z1, j1, Ze, { open: 8, entityType: 0, selectMultiple: 1, additionalFilter: 2, tw: 3 });
    }
  };
  var th = class {
    constructor() {
    }
    selectEntity(e, n = null) {
      return this._openEntitySelectDialog(e, false, n).then((r) => r.length === 1 ? r[0] : null);
    }
    selectMultipleEntities(e, n = null) {
      return this._openEntitySelectDialog(e, true, n);
    }
    _openEntitySelectDialog(e, n, r) {
      const i = new W1({ target: document.body, props: { entityType: e, open: false, selectMultiple: n, additionalFilter: r } });
      return setTimeout(() => {
        i.$set({ open: true });
      }, 50), new Promise((o, s) => {
        i.$on("selectedEntities", (a2) => {
          i.$set({ open: false }), setTimeout(() => {
            i.$destroy();
          }, 200), o(a2.detail);
        });
      });
    }
  };
  var aa = window;
  var gu = aa.ShadowRoot && (aa.ShadyCSS === void 0 || aa.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var mu = Symbol();
  var nh = /* @__PURE__ */ new WeakMap();
  var Xg = class {
    constructor(t, e, n) {
      if (this._$cssResult$ = true, n !== mu) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = e;
    }
    get styleSheet() {
      let t = this.o;
      const e = this.t;
      if (gu && t === void 0) {
        const n = e !== void 0 && e.length === 1;
        n && (t = nh.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && nh.set(e, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  var V1 = (t) => new Xg(typeof t == "string" ? t : t + "", void 0, mu);
  var Xa = (t, ...e) => {
    const n = t.length === 1 ? t[0] : e.reduce((r, i, o) => r + ((s) => {
      if (s._$cssResult$ === true) return s.cssText;
      if (typeof s == "number") return s;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(i) + t[o + 1], t[0]);
    return new Xg(n, t, mu);
  };
  var q1 = (t, e) => {
    gu ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
      const r = document.createElement("style"), i = aa.litNonce;
      i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
    });
  };
  var rh = gu ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let n = "";
    for (const r of e.cssRules) n += r.cssText;
    return V1(n);
  })(t) : t;
  var vl;
  var Ca = window;
  var ih = Ca.trustedTypes;
  var G1 = ih ? ih.emptyScript : "";
  var oh = Ca.reactiveElementPolyfillSupport;
  var yc = { toAttribute(t, e) {
    switch (e) {
      case Boolean:
        t = t ? G1 : null;
        break;
      case Object:
      case Array:
        t = t == null ? t : JSON.stringify(t);
    }
    return t;
  }, fromAttribute(t, e) {
    let n = t;
    switch (e) {
      case Boolean:
        n = t !== null;
        break;
      case Number:
        n = t === null ? null : Number(t);
        break;
      case Object:
      case Array:
        try {
          n = JSON.parse(t);
        } catch {
          n = null;
        }
    }
    return n;
  } };
  var Kg = (t, e) => e !== t && (e == e || t == t);
  var yl = { attribute: true, type: String, converter: yc, reflect: false, hasChanged: Kg };
  var Vi = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t) {
      var e;
      (e = this.h) !== null && e !== void 0 || (this.h = []), this.h.push(t);
    }
    static get observedAttributes() {
      this.finalize();
      const t = [];
      return this.elementProperties.forEach((e, n) => {
        const r = this._$Ep(n, e);
        r !== void 0 && (this._$Ev.set(r, n), t.push(r));
      }), t;
    }
    static createProperty(t, e = yl) {
      if (e.state && (e.attribute = false), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
        const n = typeof t == "symbol" ? Symbol() : "__" + t, r = this.getPropertyDescriptor(t, n, e);
        r !== void 0 && Object.defineProperty(this.prototype, t, r);
      }
    }
    static getPropertyDescriptor(t, e, n) {
      return { get() {
        return this[e];
      }, set(r) {
        const i = this[t];
        this[e] = r, this.requestUpdate(t, i, n);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || yl;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized")) return false;
      this.finalized = true;
      const t = Object.getPrototypeOf(this);
      if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const e = this.properties, n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
        for (const r of n) this.createProperty(r, e[r]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(t) {
      const e = [];
      if (Array.isArray(t)) {
        const n = new Set(t.flat(1 / 0).reverse());
        for (const r of n) e.unshift(rh(r));
      } else t !== void 0 && e.push(rh(t));
      return e;
    }
    static _$Ep(t, e) {
      const n = e.attribute;
      return n === false ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    u() {
      var t;
      this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
    }
    addController(t) {
      var e, n;
      ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((n = t.hostConnected) === null || n === void 0 || n.call(t));
    }
    removeController(t) {
      var e;
      (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t, e) => {
        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
      });
    }
    createRenderRoot() {
      var t;
      const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return q1(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      var t;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
        var n;
        return (n = e.hostConnected) === null || n === void 0 ? void 0 : n.call(e);
      });
    }
    enableUpdating(t) {
    }
    disconnectedCallback() {
      var t;
      (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
        var n;
        return (n = e.hostDisconnected) === null || n === void 0 ? void 0 : n.call(e);
      });
    }
    attributeChangedCallback(t, e, n) {
      this._$AK(t, n);
    }
    _$EO(t, e, n = yl) {
      var r;
      const i = this.constructor._$Ep(t, n);
      if (i !== void 0 && n.reflect === true) {
        const o = (((r = n.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== void 0 ? n.converter : yc).toAttribute(e, n.type);
        this._$El = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null;
      }
    }
    _$AK(t, e) {
      var n;
      const r = this.constructor, i = r._$Ev.get(t);
      if (i !== void 0 && this._$El !== i) {
        const o = r.getPropertyOptions(i), s = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? o.converter : yc;
        this._$El = i, this[i] = s.fromAttribute(e, o.type), this._$El = null;
      }
    }
    requestUpdate(t, e, n) {
      let r = true;
      t !== void 0 && (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || Kg)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), n.reflect === true && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, n))) : r = false), !this.isUpdatePending && r && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (e) {
        Promise.reject(e);
      }
      const t = this.scheduleUpdate();
      return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((r, i) => this[i] = r), this._$Ei = void 0);
      let e = false;
      const n = this._$AL;
      try {
        e = this.shouldUpdate(n), e ? (this.willUpdate(n), (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
          var i;
          return (i = r.hostUpdate) === null || i === void 0 ? void 0 : i.call(r);
        }), this.update(n)) : this._$Ek();
      } catch (r) {
        throw e = false, this._$Ek(), r;
      }
      e && this._$AE(n);
    }
    willUpdate(t) {
    }
    _$AE(t) {
      var e;
      (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
        var r;
        return (r = n.hostUpdated) === null || r === void 0 ? void 0 : r.call(n);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      this._$EC !== void 0 && (this._$EC.forEach((e, n) => this._$EO(n, this[n], e)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {
    }
    firstUpdated(t) {
    }
  };
  Vi.finalized = true, Vi.elementProperties = /* @__PURE__ */ new Map(), Vi.elementStyles = [], Vi.shadowRootOptions = { mode: "open" }, oh?.({ ReactiveElement: Vi }), ((vl = Ca.reactiveElementVersions) !== null && vl !== void 0 ? vl : Ca.reactiveElementVersions = []).push("1.4.1");
  var bl;
  var Aa = window;
  var wo = Aa.trustedTypes;
  var sh = wo ? wo.createPolicy("lit-html", { createHTML: (t) => t }) : void 0;
  var Rr = `lit$${(Math.random() + "").slice(9)}$`;
  var Jg = "?" + Rr;
  var X1 = `<${Jg}>`;
  var xo = document;
  var os = (t = "") => xo.createComment(t);
  var ss = (t) => t === null || typeof t != "object" && typeof t != "function";
  var Yg = Array.isArray;
  var K1 = (t) => Yg(t) || typeof t?.[Symbol.iterator] == "function";
  var Ho = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var ah = /-->/g;
  var lh = />/g;
  var ti = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var ch = /'/g;
  var uh = /"/g;
  var Qg = /^(?:script|style|textarea|title)$/i;
  var So = Symbol.for("lit-noChange");
  var pt = Symbol.for("lit-nothing");
  var fh = /* @__PURE__ */ new WeakMap();
  var J1 = (t, e, n) => {
    var r, i;
    const o = (r = n?.renderBefore) !== null && r !== void 0 ? r : e;
    let s = o._$litPart$;
    if (s === void 0) {
      const a2 = (i = n?.renderBefore) !== null && i !== void 0 ? i : null;
      o._$litPart$ = s = new Is(e.insertBefore(os(), a2), a2, void 0, n ?? {});
    }
    return s._$AI(t), s;
  };
  var eo = xo.createTreeWalker(xo, 129, null, false);
  var Y1 = (t, e) => {
    const n = t.length - 1, r = [];
    let i, o = e === 2 ? "<svg>" : "", s = Ho;
    for (let c = 0; c < n; c++) {
      const l = t[c];
      let u2, f, d3 = -1, h2 = 0;
      for (; h2 < l.length && (s.lastIndex = h2, f = s.exec(l), f !== null); ) h2 = s.lastIndex, s === Ho ? f[1] === "!--" ? s = ah : f[1] !== void 0 ? s = lh : f[2] !== void 0 ? (Qg.test(f[2]) && (i = RegExp("</" + f[2], "g")), s = ti) : f[3] !== void 0 && (s = ti) : s === ti ? f[0] === ">" ? (s = i ?? Ho, d3 = -1) : f[1] === void 0 ? d3 = -2 : (d3 = s.lastIndex - f[2].length, u2 = f[1], s = f[3] === void 0 ? ti : f[3] === '"' ? uh : ch) : s === uh || s === ch ? s = ti : s === ah || s === lh ? s = Ho : (s = ti, i = void 0);
      const p = s === ti && t[c + 1].startsWith("/>") ? " " : "";
      o += s === Ho ? l + X1 : d3 >= 0 ? (r.push(u2), l.slice(0, d3) + "$lit$" + l.slice(d3) + Rr + p) : l + Rr + (d3 === -2 ? (r.push(void 0), c) : p);
    }
    const a2 = o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [sh !== void 0 ? sh.createHTML(a2) : a2, r];
  };
  var as = class _as {
    constructor({ strings: e, _$litType$: n }, r) {
      let i;
      this.parts = [];
      let o = 0, s = 0;
      const a2 = e.length - 1, c = this.parts, [l, u2] = Y1(e, n);
      if (this.el = _as.createElement(l, r), eo.currentNode = this.el.content, n === 2) {
        const f = this.el.content, d3 = f.firstChild;
        d3.remove(), f.append(...d3.childNodes);
      }
      for (; (i = eo.nextNode()) !== null && c.length < a2; ) {
        if (i.nodeType === 1) {
          if (i.hasAttributes()) {
            const f = [];
            for (const d3 of i.getAttributeNames()) if (d3.endsWith("$lit$") || d3.startsWith(Rr)) {
              const h2 = u2[s++];
              if (f.push(d3), h2 !== void 0) {
                const p = i.getAttribute(h2.toLowerCase() + "$lit$").split(Rr), g3 = /([.?@])?(.*)/.exec(h2);
                c.push({ type: 1, index: o, name: g3[2], strings: p, ctor: g3[1] === "." ? Z1 : g3[1] === "?" ? tE : g3[1] === "@" ? nE : Ka });
              } else c.push({ type: 6, index: o });
            }
            for (const d3 of f) i.removeAttribute(d3);
          }
          if (Qg.test(i.tagName)) {
            const f = i.textContent.split(Rr), d3 = f.length - 1;
            if (d3 > 0) {
              i.textContent = wo ? wo.emptyScript : "";
              for (let h2 = 0; h2 < d3; h2++) i.append(f[h2], os()), eo.nextNode(), c.push({ type: 2, index: ++o });
              i.append(f[d3], os());
            }
          }
        } else if (i.nodeType === 8) if (i.data === Jg) c.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(Rr, f + 1)) !== -1; ) c.push({ type: 7, index: o }), f += Rr.length - 1;
        }
        o++;
      }
    }
    static createElement(e, n) {
      const r = xo.createElement("template");
      return r.innerHTML = e, r;
    }
  };
  function Eo(t, e, n = t, r) {
    var i, o, s, a2;
    if (e === So) return e;
    let c = r !== void 0 ? (i = n._$Cl) === null || i === void 0 ? void 0 : i[r] : n._$Cu;
    const l = ss(e) ? void 0 : e._$litDirective$;
    return c?.constructor !== l && ((o = c?._$AO) === null || o === void 0 || o.call(c, false), l === void 0 ? c = void 0 : (c = new l(t), c._$AT(t, n, r)), r !== void 0 ? ((s = (a2 = n)._$Cl) !== null && s !== void 0 ? s : a2._$Cl = [])[r] = c : n._$Cu = c), c !== void 0 && (e = Eo(t, c._$AS(t, e.values), c, r)), e;
  }
  var Q1 = class {
    constructor(e, n) {
      this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(e) {
      var n;
      const { el: { content: r }, parts: i } = this._$AD, o = ((n = e?.creationScope) !== null && n !== void 0 ? n : xo).importNode(r, true);
      eo.currentNode = o;
      let s = eo.nextNode(), a2 = 0, c = 0, l = i[0];
      for (; l !== void 0; ) {
        if (a2 === l.index) {
          let u2;
          l.type === 2 ? u2 = new Is(s, s.nextSibling, this, e) : l.type === 1 ? u2 = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (u2 = new rE(s, this, e)), this.v.push(u2), l = i[++c];
        }
        a2 !== l?.index && (s = eo.nextNode(), a2++);
      }
      return o;
    }
    m(e) {
      let n = 0;
      for (const r of this.v) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
    }
  };
  var Is = class _Is {
    constructor(e, n, r, i) {
      var o;
      this.type = 2, this._$AH = pt, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$C_ = (o = i?.isConnected) === null || o === void 0 || o;
    }
    get _$AU() {
      var e, n;
      return (n = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && n !== void 0 ? n : this._$C_;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const n = this._$AM;
      return n !== void 0 && e.nodeType === 11 && (e = n.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, n = this) {
      e = Eo(this, e, n), ss(e) ? e === pt || e == null || e === "" ? (this._$AH !== pt && this._$AR(), this._$AH = pt) : e !== this._$AH && e !== So && this.$(e) : e._$litType$ !== void 0 ? this.T(e) : e.nodeType !== void 0 ? this.k(e) : K1(e) ? this.O(e) : this.$(e);
    }
    S(e, n = this._$AB) {
      return this._$AA.parentNode.insertBefore(e, n);
    }
    k(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
    }
    $(e) {
      this._$AH !== pt && ss(this._$AH) ? this._$AA.nextSibling.data = e : this.k(xo.createTextNode(e)), this._$AH = e;
    }
    T(e) {
      var n;
      const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = as.createElement(i.h, this.options)), i);
      if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o) this._$AH.m(r);
      else {
        const s = new Q1(o, this), a2 = s.p(this.options);
        s.m(r), this.k(a2), this._$AH = s;
      }
    }
    _$AC(e) {
      let n = fh.get(e.strings);
      return n === void 0 && fh.set(e.strings, n = new as(e)), n;
    }
    O(e) {
      Yg(this._$AH) || (this._$AH = [], this._$AR());
      const n = this._$AH;
      let r, i = 0;
      for (const o of e) i === n.length ? n.push(r = new _Is(this.S(os()), this.S(os()), this, this.options)) : r = n[i], r._$AI(o), i++;
      i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
    }
    _$AR(e = this._$AA.nextSibling, n) {
      var r;
      for ((r = this._$AP) === null || r === void 0 || r.call(this, false, true, n); e && e !== this._$AB; ) {
        const i = e.nextSibling;
        e.remove(), e = i;
      }
    }
    setConnected(e) {
      var n;
      this._$AM === void 0 && (this._$C_ = e, (n = this._$AP) === null || n === void 0 || n.call(this, e));
    }
  };
  var Ka = class {
    constructor(e, n, r, i, o) {
      this.type = 1, this._$AH = pt, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = pt;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e, n = this, r, i) {
      const o = this.strings;
      let s = false;
      if (o === void 0) e = Eo(this, e, n, 0), s = !ss(e) || e !== this._$AH && e !== So, s && (this._$AH = e);
      else {
        const a2 = e;
        let c, l;
        for (e = o[0], c = 0; c < o.length - 1; c++) l = Eo(this, a2[r + c], n, c), l === So && (l = this._$AH[c]), s || (s = !ss(l) || l !== this._$AH[c]), l === pt ? e = pt : e !== pt && (e += (l ?? "") + o[c + 1]), this._$AH[c] = l;
      }
      s && !i && this.P(e);
    }
    P(e) {
      e === pt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  };
  var Z1 = class extends Ka {
    constructor() {
      super(...arguments), this.type = 3;
    }
    P(e) {
      this.element[this.name] = e === pt ? void 0 : e;
    }
  };
  var eE = wo ? wo.emptyScript : "";
  var tE = class extends Ka {
    constructor() {
      super(...arguments), this.type = 4;
    }
    P(e) {
      e && e !== pt ? this.element.setAttribute(this.name, eE) : this.element.removeAttribute(this.name);
    }
  };
  var nE = class extends Ka {
    constructor(e, n, r, i, o) {
      super(e, n, r, i, o), this.type = 5;
    }
    _$AI(e, n = this) {
      var r;
      if ((e = (r = Eo(this, e, n, 0)) !== null && r !== void 0 ? r : pt) === So) return;
      const i = this._$AH, o = e === pt && i !== pt || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== pt && (i === pt || o);
      o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var n, r;
      typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
    }
  };
  var rE = class {
    constructor(e, n, r) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      Eo(this, e);
    }
  };
  var dh = Aa.litHtmlPolyfillSupport;
  dh?.(as, Is), ((bl = Aa.litHtmlVersions) !== null && bl !== void 0 ? bl : Aa.litHtmlVersions = []).push("2.3.1");
  var _l;
  var wl;
  var wi = class extends Vi {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var e, n;
      const r = super.createRenderRoot();
      return (e = (n = this.renderOptions).renderBefore) !== null && e !== void 0 || (n.renderBefore = r.firstChild), r;
    }
    update(e) {
      const n = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = J1(n, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var e;
      super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(true);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(false);
    }
    render() {
      return So;
    }
  };
  wi.finalized = true, wi._$litElement$ = true, (_l = globalThis.litElementHydrateSupport) === null || _l === void 0 || _l.call(globalThis, { LitElement: wi });
  var hh = globalThis.litElementPolyfillSupport;
  hh?.({ LitElement: wi });
  ((wl = globalThis.litElementVersions) !== null && wl !== void 0 ? wl : globalThis.litElementVersions = []).push("3.2.2");
  var iE = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
    n.createProperty(e.key, t);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
  }, finisher(n) {
    n.createProperty(e.key, t);
  } };
  function en(t) {
    return (e, n) => n !== void 0 ? ((r, i, o) => {
      i.constructor.createProperty(o, r);
    })(t, e, n) : iE(t, e);
  }
  var xl;
  ((xl = window.HTMLSlotElement) === null || xl === void 0 ? void 0 : xl.prototype.assignedElements) != null;
  var oE = { primary: "#1D4ED8", "on-primary": "#ffffff", secondary: "#A9377A", "on-secondary": "#ffffff", background: "#EEEEEE", surface: "#ffffff", "on-surface": "#000000", "surface-border": "#CCCCCC" };
  var zr = class {
    constructor(e) {
      this._theme = e, e || (this._theme = this._theme ?? oE);
    }
    createTwindContext(e) {
      if (e) return zS({ theme: { extend: { colors: this._theme } } }), { tw: Sn, styleSheet: null };
      {
        const n = Mg({ target: new CSSStyleSheet() }), { tw: r } = zg({ sheet: n, theme: { extend: this._buildTwindThemeConfig() } });
        return { tw: r, styleSheet: n };
      }
    }
    getTheme() {
      return this._theme;
    }
    _buildTwindThemeConfig() {
      return { colors: this._theme, boxShadow: { sm: "0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)", md: "0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)", lg: "0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)", xl: "0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)" } };
    }
  };
  var sE = Object.defineProperty;
  var Zg = (t, e, n, r) => {
    for (var i = void 0, o = t.length - 1, s; o >= 0; o--) (s = t[o]) && (i = s(e, n, i) || i);
    return i && sE(e, n, i), i;
  };
  var { tw: aE, styleSheet: lE } = Qt(zr, new zr()).createTwindContext();
  var cE = Xa`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
  var vu = class extends wi {
    constructor() {
      super(), jr(this, "_element"), or(wa, new wa(document.body));
    }
    render() {
      var e;
      (e = this._element) == null || e.$destroy();
      const n = document.createElement("div");
      return n.style.width = "100%", n.style.height = "100%", n.style.overflow = "hidden", this._trySetupEntitySelect(this.shadowRoot), n;
    }
    _trySetupEntitySelect(e) {
      if (console.log("SETUP HELLOOO"), !this._isValidEntityType(this.entityType)) return;
      const n = this.getAttribute("multiple") === "true" || this.multiple, r = JSON.parse(this.getAttribute("filter") || "{}");
      this._element = new Gg({ target: e, props: { entityType: this.entityType, selectMultiple: n, additionalFilter: r, tw: aE } }), this._element.$on("selectedEntities", (i) => {
        console.log("selectedEntities", i), this.dispatchEvent(new CustomEvent("selected", { detail: i.detail, bubbles: true, composed: true }));
      }), console.log("connectedCallback", this._element);
    }
    _isValidEntityType(e) {
      return Object.values(ae).includes(e);
    }
  };
  jr(vu, "styles", [lE.target, cE]);
  Zg([en({ type: String, attribute: "entitytype" })], vu.prototype, "entityType");
  Zg([en({ type: Boolean, attribute: "multiple" })], vu.prototype, "multiple");
  var uE = Object.defineProperty;
  var Xr = (t, e, n, r) => {
    for (var i = void 0, o = t.length - 1, s; o >= 0; o--) (s = t[o]) && (i = s(e, n, i) || i);
    return i && uE(e, n, i), i;
  };
  var { tw: fE, styleSheet: dE } = Qt(zr, new zr()).createTwindContext();
  var hE = Xa`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
  var wr = class extends wi {
    constructor() {
      super(), jr(this, "_select"), this.multiple = false, this.options = [], this.arrayvalue = [];
    }
    render() {
      var e;
      return this.multiple && this._select || ((e = this._select) == null || e.$destroy(), document.createElement("div"), console.log("render select", this.arrayvalue, this.value), this._select = new qg({ target: this.shadowRoot, props: { value: this.multiple ? this.arrayvalue : this.value, multiple: this.multiple, options: this.options, container$class: this.container$class, textfield$class: this.textfield$class, suffixIcon$class: this.suffix$class, placeholder: this.placeholder, tw: fE } }), this._select.$on("valueChanged", (n) => {
        console.log(n), this.dispatchEvent(new CustomEvent("valuechanged", { detail: n.detail }));
      })), null;
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), (e = this._select) == null || e.$destroy(), this._select = null, console.log("disconnectedCallback");
    }
  };
  jr(wr, "styles", [dE.target, hE]);
  Xr([en({ attribute: "value", type: String })], wr.prototype, "value");
  Xr([en({ attribute: "arrayvalue", type: Array, hasChanged(t, e) {
    return console.log("hasChanged", t, e), true;
  } })], wr.prototype, "arrayvalue");
  Xr([en({ attribute: "multiple", type: Boolean })], wr.prototype, "multiple");
  Xr([en({ attribute: "options", type: Array })], wr.prototype, "options");
  Xr([en({ attribute: "placeholder", type: String })], wr.prototype, "placeholder");
  Xr([en({ attribute: "container$class", type: String })], wr.prototype, "container$class");
  Xr([en({ attribute: "textfield$class", type: String })], wr.prototype, "textfield$class");
  Xr([en({ attribute: "suffix$class", type: String })], wr.prototype, "suffix$class");
  var { tw: sC, styleSheet: aC } = Qt(zr, new zr()).createTwindContext();
  Xa`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
  function pE(t) {
    Di(t, "svelte-8br8x0", ".hover-highlight.svelte-8br8x0:hover{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.highlighted.svelte-8br8x0{background:rgba(0, 0, 0, 0.1) !important;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1) !important;backdrop-filter:blur(19.2px) !important}.material-symbols-rounded.svelte-8br8x0{font-variation-settings:'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;font-family:'Material Symbols Rounded';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}");
  }
  function ph(t) {
    let e, n, r, i, o;
    const s = t[5].default, a2 = bn(s, t, t[4], null), c = a2 || gE(t);
    return { c() {
      e = B2("div"), n = B2("span"), c && c.c(), T2(n, "class", r = Ge(t[2]`material-symbols-rounded z-[1] select-none flex items-center`) + " svelte-8br8x0"), T2(e, "class", i = Ge(t[2]`mr-2 flex item-center`) + " svelte-8br8x0");
    }, m(l, u2) {
      W2(l, e, u2), N2(e, n), c && c.m(n, null), o = true;
    }, p(l, u2) {
      a2 ? a2.p && (!o || u2 & 16) && wn(a2, s, l, l[4], o ? _n(s, l[4], u2, null) : xn(l[4]), null) : c && c.p && (!o || u2 & 1) && c.p(l, o ? u2 : -1), (!o || u2 & 4 && r !== (r = Ge(l[2]`material-symbols-rounded z-[1] select-none flex items-center`) + " svelte-8br8x0")) && T2(n, "class", r), (!o || u2 & 4 && i !== (i = Ge(l[2]`mr-2 flex item-center`) + " svelte-8br8x0")) && T2(e, "class", i);
    }, i(l) {
      o || (L2(c, l), o = true);
    }, o(l) {
      U2(c, l), o = false;
    }, d(l) {
      l && z2(e), c && c.d(l);
    } };
  }
  function gE(t) {
    let e;
    return { c() {
      e = de(t[0]);
    }, m(n, r) {
      W2(n, e, r);
    }, p(n, r) {
      r & 1 && vt(e, n[0]);
    }, d(n) {
      n && z2(e);
    } };
  }
  function mE(t) {
    let e, n, r, i, o, s, a2, c, l, u2 = t[0] && ph(t);
    return { c() {
      e = B2("div"), u2 && u2.c(), n = oe(), r = B2("div"), i = de(t[1]), T2(r, "class", o = Ge(t[2]`flex-grow`) + " svelte-8br8x0"), T2(e, "class", s = Ge(t[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`) + " svelte-8br8x0");
    }, m(f, d3) {
      W2(f, e, d3), u2 && u2.m(e, null), N2(e, n), N2(e, r), N2(r, i), a2 = true, c || (l = Ve(e, "click", t[6]), c = true);
    }, p(f, [d3]) {
      f[0] ? u2 ? (u2.p(f, d3), d3 & 1 && L2(u2, 1)) : (u2 = ph(f), u2.c(), L2(u2, 1), u2.m(e, n)) : u2 && (lt(), U2(u2, 1, 1, () => {
        u2 = null;
      }), ct()), (!a2 || d3 & 2) && vt(i, f[1]), (!a2 || d3 & 4 && o !== (o = Ge(f[2]`flex-grow`) + " svelte-8br8x0")) && T2(r, "class", o), (!a2 || d3 & 4 && s !== (s = Ge(f[2]`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`) + " svelte-8br8x0")) && T2(e, "class", s);
    }, i(f) {
      a2 || (L2(u2), a2 = true);
    }, o(f) {
      U2(u2), a2 = false;
    }, d(f) {
      f && z2(e), u2 && u2.d(), c = false, l();
    } };
  }
  function vE(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e, { icon: o = null } = e, { label: s = null } = e, { tw: a2 } = e, c = En();
    const l = (u2) => c("click", u2);
    return t.$$set = (u2) => {
      "icon" in u2 && n(0, o = u2.icon), "label" in u2 && n(1, s = u2.label), "tw" in u2 && n(2, a2 = u2.tw), "$$scope" in u2 && n(4, i = u2.$$scope);
    }, [o, s, a2, c, i, r, l];
  }
  var yE = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, vE, mE, Ze, { icon: 0, label: 1, tw: 2 }, pE);
    }
  };
  function gh(t, e, n) {
    const r = t.slice();
    return r[17] = e[n], r;
  }
  function mh(t) {
    let e, n;
    function r(...i) {
      return t[12](t[17], ...i);
    }
    return e = new yE({ props: { tw: t[4], label: t[17].label, icon: t[17].icon } }), e.$on("click", r), { c() {
      xe(e.$$.fragment);
    }, m(i, o) {
      ge(e, i, o), n = true;
    }, p(i, o) {
      t = i;
      const s = {};
      o & 16 && (s.tw = t[4]), o & 64 && (s.label = t[17].label), o & 64 && (s.icon = t[17].icon), e.$set(s);
    }, i(i) {
      n || (L2(e.$$.fragment, i), n = true);
    }, o(i) {
      U2(e.$$.fragment, i), n = false;
    }, d(i) {
      me(e, i);
    } };
  }
  function bE(t) {
    let e, n, r, i = t[6], o = [];
    for (let a2 = 0; a2 < i.length; a2 += 1) o[a2] = mh(gh(t, i, a2));
    const s = (a2) => U2(o[a2], 1, 1, () => {
      o[a2] = null;
    });
    return { c() {
      e = B2("div");
      for (let a2 = 0; a2 < o.length; a2 += 1) o[a2].c();
      T2(e, "class", n = t[4]`bg-white rounded shadow-lg ${t[3]}`);
    }, m(a2, c) {
      W2(a2, e, c);
      for (let l = 0; l < o.length; l += 1) o[l] && o[l].m(e, null);
      r = true;
    }, p(a2, c) {
      if (c & 80) {
        i = a2[6];
        let l;
        for (l = 0; l < i.length; l += 1) {
          const u2 = gh(a2, i, l);
          o[l] ? (o[l].p(u2, c), L2(o[l], 1)) : (o[l] = mh(u2), o[l].c(), L2(o[l], 1), o[l].m(e, null));
        }
        for (lt(), l = i.length; l < o.length; l += 1) s(l);
        ct();
      }
      (!r || c & 24 && n !== (n = a2[4]`bg-white rounded shadow-lg ${a2[3]}`)) && T2(e, "class", n);
    }, i(a2) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1) L2(o[c]);
        r = true;
      }
    }, o(a2) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1) U2(o[c]);
      r = false;
    }, d(a2) {
      a2 && z2(e), Hr(o, a2);
    } };
  }
  function _E(t) {
    let e, n, r, i, o;
    function s(u2) {
      t[13](u2);
    }
    function a2(u2) {
      t[15](u2);
    }
    function c(u2) {
      t[16](u2);
    }
    let l = { closeOnClick: t[5], position: t[2], $$slots: { default: [bE] }, $$scope: { ctx: t } };
    return t[7] !== void 0 && (l.anchorElement = t[7]), t[1] !== void 0 && (l.preferedHorizontalAlignment = t[1]), t[0] !== void 0 && (l.preferedVerticalAlignment = t[0]), e = new Wg({ props: l }), st.push(() => Qi(e, "anchorElement", s)), t[14](e), st.push(() => Qi(e, "preferedHorizontalAlignment", a2)), st.push(() => Qi(e, "preferedVerticalAlignment", c)), { c() {
      xe(e.$$.fragment);
    }, m(u2, f) {
      ge(e, u2, f), o = true;
    }, p(u2, [f]) {
      const d3 = {};
      f & 32 && (d3.closeOnClick = u2[5]), f & 4 && (d3.position = u2[2]), f & 1048664 && (d3.$$scope = { dirty: f, ctx: u2 }), !n && f & 128 && (n = true, d3.anchorElement = u2[7], Yi(() => n = false)), !r && f & 2 && (r = true, d3.preferedHorizontalAlignment = u2[1], Yi(() => r = false)), !i && f & 1 && (i = true, d3.preferedVerticalAlignment = u2[0], Yi(() => i = false)), e.$set(d3);
    }, i(u2) {
      o || (L2(e.$$.fragment, u2), o = true);
    }, o(u2) {
      U2(e.$$.fragment, u2), o = false;
    }, d(u2) {
      t[14](null), me(e, u2);
    } };
  }
  function wE(t, e, n) {
    let { anchorSelector: r } = e, { preferedVerticalAlignment: i = "top" } = e, { preferedHorizontalAlignment: o = "left" } = e, { positionOffset: s = { x: 0, y: 10 } } = e, { container$class: a2 } = e, { tw: c = Sn } = e, { closeOnClick: l = true } = e, { items: u2 = [] } = e, f, d3;
    function h2() {
      console.log("openMenu", f, u2), d3.openPopup();
    }
    function p() {
      d3.closePopup();
    }
    const g3 = (b2, _4) => b2.action(_4);
    function m2(b2) {
      f = b2, n(7, f), n(9, r);
    }
    function w4(b2) {
      st[b2 ? "unshift" : "push"](() => {
        d3 = b2, n(8, d3);
      });
    }
    function v2(b2) {
      o = b2, n(1, o);
    }
    function y3(b2) {
      i = b2, n(0, i);
    }
    return t.$$set = (b2) => {
      "anchorSelector" in b2 && n(9, r = b2.anchorSelector), "preferedVerticalAlignment" in b2 && n(0, i = b2.preferedVerticalAlignment), "preferedHorizontalAlignment" in b2 && n(1, o = b2.preferedHorizontalAlignment), "positionOffset" in b2 && n(2, s = b2.positionOffset), "container$class" in b2 && n(3, a2 = b2.container$class), "tw" in b2 && n(4, c = b2.tw), "closeOnClick" in b2 && n(5, l = b2.closeOnClick), "items" in b2 && n(6, u2 = b2.items);
    }, t.$$.update = () => {
      t.$$.dirty & 640 && (n(7, f = document.querySelector(r)), console.log("anchorSelector", r, f));
    }, [i, o, s, a2, c, l, u2, f, d3, r, h2, p, g3, m2, w4, v2, y3];
  }
  var xE = class extends it2 {
    constructor(e) {
      super(), rt2(this, e, wE, _E, Ze, { anchorSelector: 9, preferedVerticalAlignment: 0, preferedHorizontalAlignment: 1, positionOffset: 2, container$class: 3, tw: 4, closeOnClick: 5, items: 6, openMenu: 10, closeMenu: 11 });
    }
    get openMenu() {
      return this.$$.ctx[10];
    }
    get closeMenu() {
      return this.$$.ctx[11];
    }
  };
  var SE = Object.defineProperty;
  var Ja = (t, e, n, r) => {
    for (var i = void 0, o = t.length - 1, s; o >= 0; o--) (s = t[o]) && (i = s(e, n, i) || i);
    return i && SE(e, n, i), i;
  };
  var { tw: lC, styleSheet: EE } = Qt(zr, new zr()).createTwindContext();
  var CE = Xa`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`;
  var $s = class extends wi {
    constructor() {
      super(), jr(this, "_menu"), this.items = [];
    }
    render() {
      var e;
      return console.log("rendering menu", this.anchorSelector), (e = this._menu) == null || e.$destroy(), this._menu = new xE({ target: document.createElement("div"), props: { anchorSelector: this.anchorSelector, items: this.items, container$class: this.container$class } }), null;
    }
    createRenderRoot() {
      return this;
    }
    openMenu() {
      var e;
      (e = this._menu) == null || e.openMenu();
    }
    closeMenu() {
      var e;
      (e = this._menu) == null || e.closeMenu();
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), (e = this._menu) == null || e.$destroy();
    }
  };
  jr($s, "styles", [EE.target, CE]);
  Ja([en({ attribute: "items", type: Array })], $s.prototype, "items");
  Ja([en({ attribute: "closeonclick", type: Boolean })], $s.prototype, "closeOnClick");
  Ja([en({ attribute: "container$class", type: String })], $s.prototype, "container$class");
  Ja([en({ attribute: "anchorselector", type: String })], $s.prototype, "anchorSelector");
  function cC(t, e) {
    const n = new Ti(t, e);
    or(ic, new ic(t, e)), or(Ti, n), or(Zo, new Zo(t, e)), or(es, new es(n)), or(rc, new rc(t, e)), or(th, new th()), or(ud, new ud(t, e)), or(nd, new nd(t, e));
  }
  var Ir;
  var ir;
  var Ce = { LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated", LIST_ITEM_CLASS: "mdc-list-item", LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled", LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected", LIST_ITEM_TEXT_CLASS: "mdc-list-item__text", LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text", ROOT: "mdc-list" };
  Ir = {}, Ir["" + Ce.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ir["" + Ce.LIST_ITEM_CLASS] = "mdc-list-item", Ir["" + Ce.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ir["" + Ce.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ir["" + Ce.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ir["" + Ce.ROOT] = "mdc-list";
  var zi = (ir = {}, ir["" + Ce.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ir["" + Ce.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ir["" + Ce.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ir["" + Ce.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ir["" + Ce.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ir["" + Ce.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ir["" + Ce.ROOT] = "mdc-deprecated-list", ir);
  var $r = { ACTION_EVENT: "MDCList:action", SELECTION_CHANGE_EVENT: "MDCList:selectionChange", ARIA_CHECKED: "aria-checked", ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]', ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]', ARIA_CURRENT: "aria-current", ARIA_DISABLED: "aria-disabled", ARIA_ORIENTATION: "aria-orientation", ARIA_ORIENTATION_HORIZONTAL: "horizontal", ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]', ARIA_SELECTED: "aria-selected", ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]', ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]', CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]', CHECKBOX_SELECTOR: 'input[type="checkbox"]', CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + Ce.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` a,
    .` + zi[Ce.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + zi[Ce.LIST_ITEM_CLASS] + ` a
  `, DEPRECATED_SELECTOR: ".mdc-deprecated-list", FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ce.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` a,
    .` + Ce.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + zi[Ce.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + zi[Ce.LIST_ITEM_CLASS] + ` a,
    .` + zi[Ce.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + zi[Ce.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `, RADIO_SELECTOR: 'input[type="radio"]', SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]' };
  var Je = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 };
  var AE = ["input", "button", "textarea", "select"];
  var fn = function(t) {
    var e = t.target;
    if (e) {
      var n = ("" + e.tagName).toLowerCase();
      AE.indexOf(n) === -1 && t.preventDefault();
    }
  };
  function IE() {
    var t = { bufferClearTimeout: 0, currentFirstChar: "", sortedIndexCursor: 0, typeaheadBuffer: "" };
    return t;
  }
  function $E(t, e) {
    for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
      var i = e(r).trim();
      if (i) {
        var o = i[0].toLowerCase();
        n.has(o) || n.set(o, []), n.get(o).push({ text: i.toLowerCase(), index: r });
      }
    }
    return n.forEach(function(s) {
      s.sort(function(a2, c) {
        return a2.index - c.index;
      });
    }), n;
  }
  function bc(t, e) {
    var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, o = t.focusedItemIndex, s = t.skipFocus, a2 = t.isItemAtIndexDisabled;
    clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
      tm(e);
    }, Je.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
    var c;
    return e.typeaheadBuffer.length === 1 ? c = TE(i, o, a2, e) : c = kE(i, a2, e), c !== -1 && !s && r(c), c;
  }
  function TE(t, e, n, r) {
    var i = r.typeaheadBuffer[0], o = t.get(i);
    if (!o) return -1;
    if (i === r.currentFirstChar && o[r.sortedIndexCursor].index === e) {
      r.sortedIndexCursor = (r.sortedIndexCursor + 1) % o.length;
      var s = o[r.sortedIndexCursor].index;
      if (!n(s)) return s;
    }
    r.currentFirstChar = i;
    var a2 = -1, c;
    for (c = 0; c < o.length; c++) if (!n(o[c].index)) {
      a2 = c;
      break;
    }
    for (; c < o.length; c++) if (o[c].index > e && !n(o[c].index)) {
      a2 = c;
      break;
    }
    return a2 !== -1 ? (r.sortedIndexCursor = a2, o[r.sortedIndexCursor].index) : -1;
  }
  function kE(t, e, n) {
    var r = n.typeaheadBuffer[0], i = t.get(r);
    if (!i) return -1;
    var o = i[n.sortedIndexCursor];
    if (o.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(o.index)) return o.index;
    for (var s = (n.sortedIndexCursor + 1) % i.length, a2 = -1; s !== n.sortedIndexCursor; ) {
      var c = i[s], l = c.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, u2 = !e(c.index);
      if (l && u2) {
        a2 = s;
        break;
      }
      s = (s + 1) % i.length;
    }
    return a2 !== -1 ? (n.sortedIndexCursor = a2, i[n.sortedIndexCursor].index) : -1;
  }
  function em(t) {
    return t.typeaheadBuffer.length > 0;
  }
  function tm(t) {
    t.typeaheadBuffer = "";
  }
  function vh(t, e) {
    var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, o = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, a2 = t.isItemAtIndexDisabled, c = $t(n) === "ArrowLeft", l = $t(n) === "ArrowUp", u2 = $t(n) === "ArrowRight", f = $t(n) === "ArrowDown", d3 = $t(n) === "Home", h2 = $t(n) === "End", p = $t(n) === "Enter", g3 = $t(n) === "Spacebar";
    if (n.altKey || n.ctrlKey || n.metaKey || c || l || u2 || f || d3 || h2 || p) return -1;
    var m2 = !g3 && n.key.length === 1;
    if (m2) {
      fn(n);
      var w4 = { focusItemAtIndex: o, focusedItemIndex: i, nextChar: n.key.toLowerCase(), sortedIndexByFirstChar: s, skipFocus: false, isItemAtIndexDisabled: a2 };
      return bc(w4, e);
    }
    if (!g3) return -1;
    r && fn(n);
    var v2 = r && em(e);
    if (v2) {
      var w4 = { focusItemAtIndex: o, focusedItemIndex: i, nextChar: " ", sortedIndexByFirstChar: s, skipFocus: false, isItemAtIndexDisabled: a2 };
      return bc(w4, e);
    }
    return -1;
  }
  function RE(t) {
    return t instanceof Array;
  }
  var OE = ["Alt", "Control", "Meta", "Shift"];
  function yh(t) {
    var e = new Set(t ? OE.filter(function(n) {
      return t.getModifierState(n);
    }) : []);
    return function(n) {
      return n.every(function(r) {
        return e.has(r);
      }) && n.length === e.size;
    };
  }
  var PE = (function(t) {
    E(e, t);
    function e(n) {
      var r = t.call(this, A(A({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = false, r.isVertical = true, r.isSingleSelectionList = false, r.areDisabledItemsFocusable = true, r.selectedIndex = Je.UNSET_INDEX, r.focusedItemIndex = Je.UNSET_INDEX, r.useActivatedClass = false, r.useSelectedAttr = false, r.ariaCurrentAttrValue = null, r.isCheckboxList = false, r.isRadioList = false, r.lastSelectedIndex = null, r.hasTypeahead = false, r.typeaheadState = IE(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", { get: function() {
      return $r;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "cssClasses", { get: function() {
      return Ce;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "numbers", { get: function() {
      return Je;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClassForElementIndex: function() {
      }, focusItemAtIndex: function() {
      }, getAttributeForElementIndex: function() {
        return null;
      }, getFocusedElementIndex: function() {
        return 0;
      }, getListItemCount: function() {
        return 0;
      }, hasCheckboxAtIndex: function() {
        return false;
      }, hasRadioAtIndex: function() {
        return false;
      }, isCheckboxCheckedAtIndex: function() {
        return false;
      }, isFocusInsideList: function() {
        return false;
      }, isRootFocused: function() {
        return false;
      }, listItemAtIndexHasClass: function() {
        return false;
      }, notifyAction: function() {
      }, notifySelectionChange: function() {
      }, removeClassForElementIndex: function() {
      }, setAttributeForElementIndex: function() {
      }, setCheckedCheckboxOrRadioAtIndex: function() {
      }, setTabIndexForListItemChildren: function() {
      }, getPrimaryTextAtIndex: function() {
        return "";
      } };
    }, enumerable: false, configurable: true }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = true : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = true : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== Je.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ce.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(true), this.isSingleSelectionList = true, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Je.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var o = this.adapter.listItemAtIndexHasClass(i, Ce.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Ce.LIST_ITEM_ACTIVATED_CLASS);
        if (o || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && em(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, r) {
      r === void 0 && (r = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, r) : this.isRadioList ? this.setRadioAtIndex(n, r) : this.setSingleSelectionAtIndex(n, r));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var r = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, Ce.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var o = this, s, a2 = $t(n) === "ArrowLeft", c = $t(n) === "ArrowUp", l = $t(n) === "ArrowRight", u2 = $t(n) === "ArrowDown", f = $t(n) === "Home", d3 = $t(n) === "End", h2 = $t(n) === "Enter", p = $t(n) === "Spacebar", g3 = this.isVertical && u2 || !this.isVertical && l, m2 = this.isVertical && c || !this.isVertical && a2, w4 = n.key === "A" || n.key === "a", v2 = yh(n);
      if (this.adapter.isRootFocused()) {
        if ((m2 || d3) && v2([])) n.preventDefault(), this.focusLastElement();
        else if ((g3 || f) && v2([])) n.preventDefault(), this.focusFirstElement();
        else if (m2 && v2(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var y3 = this.focusLastElement();
          y3 !== -1 && this.setSelectedIndexOnAction(y3, false);
        } else if (g3 && v2(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var y3 = this.focusFirstElement();
          y3 !== -1 && this.setSelectedIndexOnAction(y3, false);
        }
        if (this.hasTypeahead) {
          var b2 = { event: n, focusItemAtIndex: function(x2) {
            o.focusItemAtIndex(x2);
          }, focusedItemIndex: -1, isTargetListItem: r, sortedIndexByFirstChar: this.sortedIndexByFirstChar, isItemAtIndexDisabled: function(x2) {
            return o.isIndexDisabled(x2);
          } };
          vh(b2, this.typeaheadState);
        }
        return;
      }
      var _4 = this.adapter.getFocusedElementIndex();
      if (!(_4 === -1 && (_4 = i, _4 < 0))) {
        if (g3 && v2([])) fn(n), this.focusNextElement(_4);
        else if (m2 && v2([])) fn(n), this.focusPrevElement(_4);
        else if (g3 && v2(["Shift"]) && this.isCheckboxList) {
          fn(n);
          var y3 = this.focusNextElement(_4);
          y3 !== -1 && this.setSelectedIndexOnAction(y3, false);
        } else if (m2 && v2(["Shift"]) && this.isCheckboxList) {
          fn(n);
          var y3 = this.focusPrevElement(_4);
          y3 !== -1 && this.setSelectedIndexOnAction(y3, false);
        } else if (f && v2([])) fn(n), this.focusFirstElement();
        else if (d3 && v2([])) fn(n), this.focusLastElement();
        else if (f && v2(["Control", "Shift"]) && this.isCheckboxList) {
          if (fn(n), this.isIndexDisabled(_4)) return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _4, _4);
        } else if (d3 && v2(["Control", "Shift"]) && this.isCheckboxList) {
          if (fn(n), this.isIndexDisabled(_4)) return;
          this.focusLastElement(), this.toggleCheckboxRange(_4, this.adapter.getListItemCount() - 1, _4);
        } else if (w4 && v2(["Control"]) && this.isCheckboxList) n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Je.UNSET_INDEX ? [] : this.selectedIndex, true);
        else if ((h2 || p) && v2([])) {
          if (r) {
            var C3 = n.target;
            if (C3 && C3.tagName === "A" && h2 || (fn(n), this.isIndexDisabled(_4))) return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_4, false), this.adapter.notifyAction(_4));
          }
        } else if ((h2 || p) && v2(["Shift"]) && this.isCheckboxList) {
          var C3 = n.target;
          if (C3 && C3.tagName === "A" && h2 || (fn(n), this.isIndexDisabled(_4))) return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : _4, _4, _4), this.adapter.notifyAction(_4));
        }
        if (this.hasTypeahead) {
          var b2 = { event: n, focusItemAtIndex: function(S2) {
            o.focusItemAtIndex(S2);
          }, focusedItemIndex: this.focusedItemIndex, isTargetListItem: r, sortedIndexByFirstChar: this.sortedIndexByFirstChar, isItemAtIndexDisabled: function(S2) {
            return o.isIndexDisabled(S2);
          } };
          vh(b2, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var o, s = yh(i);
      n !== Je.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, o = null;
      do {
        if (i++, i >= r) if (this.wrapFocus) i = 0;
        else return n;
        if (i === o) return -1;
        o = o ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, o = null;
      do {
        if (i--, i < 0) if (this.wrapFocus) i = r - 1;
        else return n;
        if (i === o) return -1;
        o = o ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, r) {
      this.isIndexValid(n, false) && (r ? (this.adapter.removeClassForElementIndex(n, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, $r.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, $r.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ce.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ce.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Je.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Je.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Je.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, $r.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? $r.ARIA_CURRENT : $r.ARIA_SELECTED;
      if (this.selectedIndex !== Je.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Je.UNSET_INDEX) {
        var o = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, o);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? $r.ARIA_SELECTED : $r.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, true), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Je.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, o = r.isUserInteraction ? new Set(i === Je.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), a2 = [], c = 0; c < this.adapter.getListItemCount(); c++) {
        var l = o?.has(c), u2 = n.indexOf(c) >= 0;
        u2 !== l && a2.push(c), this.adapter.setCheckedCheckboxOrRadioAtIndex(c, u2), this.adapter.setAttributeForElementIndex(c, s, u2 ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && a2.length && this.adapter.notifySelectionChange(a2);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var o = new Set(this.selectedIndex === Je.UNSET_INDEX ? [] : this.selectedIndex), s = !o?.has(i), a2 = _([n, r].sort(), 2), c = a2[0], l = a2[1], u2 = this.getSelectionAttribute(), f = [], d3 = c; d3 <= l; d3++) if (!this.isIndexDisabled(d3)) {
        var h2 = o.has(d3);
        s !== h2 && (f.push(d3), this.adapter.setCheckedCheckboxOrRadioAtIndex(d3, s), this.adapter.setAttributeForElementIndex(d3, u2, "" + s), s ? o.add(d3) : o.delete(d3));
      }
      f.length && (this.selectedIndex = g([], _(o)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Je.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Je.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Je.UNSET_INDEX ? this.selectedIndex : RE(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
        return Math.min(n, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, r) {
      var i = this;
      if (r === void 0 && (r = true), n instanceof Array) {
        if (!this.isCheckboxList && r) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? true : n.some(function(o) {
          return i.isIndexInRange(o);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && r) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Je.UNSET_INDEX;
      } else return false;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: true });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), o = this.adapter.isCheckboxCheckedAtIndex(n), s;
      r ? s = o : (s = !o, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, s)), this.adapter.setAttributeForElementIndex(n, i, s ? "true" : "false");
      var a2 = this.selectedIndex === Je.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? a2.push(n) : a2 = a2.filter(function(c) {
        return c !== n;
      }), this.selectedIndex = a2;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i) this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var o = [], s = 0; s < i; s++) (!this.isIndexDisabled(s) || n.indexOf(s) > -1) && o.push(s);
        this.setCheckboxAtIndex(o, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var o = this;
      i === void 0 && (i = false);
      var s = { focusItemAtIndex: function(a2) {
        o.focusItemAtIndex(a2);
      }, focusedItemIndex: r || this.focusedItemIndex, nextChar: n, sortedIndexByFirstChar: this.sortedIndexByFirstChar, skipFocus: i, isItemAtIndexDisabled: function(a2) {
        return o.isIndexDisabled(a2);
      } };
      return bc(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return $E(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      tm(this.typeaheadState);
    }, e;
  })(Nc);
  function uC(t, e) {
    Wr(e, true);
    const { closest: n, matches: r } = vp;
    let i = Tt("SMUI:list:nav"), o = q2(e, "use", 19, () => []), s = q2(e, "class", 3, ""), a2 = q2(e, "nonInteractive", 3, false), c = q2(e, "dense", 3, false), l = q2(e, "textualList", 3, false), u2 = q2(e, "avatarList", 3, false), f = q2(e, "iconList", 3, false), d3 = q2(e, "imageList", 3, false), h2 = q2(e, "thumbnailList", 3, false), p = q2(e, "videoList", 3, false), g3 = q2(e, "twoLine", 3, false), m2 = q2(e, "threeLine", 3, false), w4 = q2(e, "vertical", 3, true), v2 = q2(e, "wrapFocus", 19, () => Tt("SMUI:list:wrapFocus") ?? false), y3 = q2(e, "singleSelection", 3, false), b2 = q2(e, "disabledItemsFocusable", 3, false), _4 = q2(e, "selectedIndex", 31, () => -1), C3 = q2(e, "radioList", 3, false), x2 = q2(e, "checkList", 3, false), S2 = q2(e, "hasTypeahead", 3, false), D3 = q2(e, "component", 3, Na), K2 = q2(e, "tag", 3, i ? "nav" : "ul"), ce4 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "nonInteractive", "dense", "textualList", "avatarList", "iconList", "imageList", "thumbnailList", "videoList", "twoLine", "threeLine", "vertical", "wrapFocus", "singleSelection", "disabledItemsFocusable", "selectedIndex", "radioList", "checkList", "hasTypeahead", "component", "tag", "children"]), ue2, M3 = on(void 0), ee = [], H3 = Tt("SMUI:list:role");
    const Se3 = /* @__PURE__ */ new WeakMap();
    let He = Tt("SMUI:dialog:selection"), G4 = Tt("SMUI:addLayoutListener"), se3;
    It("SMUI:list:nonInteractive", a2()), It("SMUI:separator:context", "list"), H3 || (y3() ? (H3 = "listbox", It("SMUI:list:item:role", "option")) : C3() ? (H3 = "radiogroup", It("SMUI:list:item:role", "radio")) : x2() ? (H3 = "group", It("SMUI:list:item:role", "checkbox")) : (H3 = "list", It("SMUI:list:item:role", void 0))), Tn(() => {
      F2(M3) && F2(M3).setVerticalOrientation(w4());
    }), Tn(() => {
      F2(M3) && F2(M3).setWrapFocus(v2());
    }), Tn(() => {
      F2(M3) && F2(M3).setHasTypeahead(S2());
    }), Tn(() => {
      F2(M3) && F2(M3).setSingleSelection(y3());
    }), Tn(() => {
      F2(M3) && F2(M3).setDisabledItemsFocusable(b2());
    }), Tn(() => {
      F2(M3) && y3() && Qr2() !== _4() && F2(M3).setSelectedIndex(_4());
    }), G4 && (se3 = G4(Kr2)), It("SMUI:list:item:mount", (Q2) => {
      ee.push(Q2), Se3.set(Q2.element, Q2), y3() && Q2.selected && _4(tt2(Q2.element));
    }), It("SMUI:list:item:unmount", (Q2) => {
      const ne = (Q2 && ee.findIndex((le3) => le3 === Q2)) ?? -1;
      ne !== -1 && (ee.splice(ne, 1), Se3.delete(Q2.element));
    });
    const et2 = Tt("SMUI:list:mount"), re = Tt("SMUI:list:unmount");
    La(() => {
      Mt(M3, new PE({ addClassForElementIndex: Y4, focusItemAtIndex: Nn2, getAttributeForElementIndex: (ne, le3) => Oe3()[ne]?.getAttr(le3) ?? null, getFocusedElementIndex: () => document.activeElement ? Oe3().map((ne) => ne.element).indexOf(document.activeElement) : -1, getListItemCount: () => ee.length, getPrimaryTextAtIndex: tn2, hasCheckboxAtIndex: (ne) => Oe3()[ne]?.hasCheckbox ?? false, hasRadioAtIndex: (ne) => Oe3()[ne]?.hasRadio ?? false, isCheckboxCheckedAtIndex: (ne) => {
        const le3 = Oe3()[ne];
        return (le3?.hasCheckbox && le3.checked) ?? false;
      }, isFocusInsideList: () => ue2 != null && Bt2() !== document.activeElement && Bt2().contains(document.activeElement), isRootFocused: () => ue2 != null && document.activeElement === Bt2(), listItemAtIndexHasClass: Cn2, notifyAction: (ne) => {
        _4(ne), ue2 != null && Yo(Bt2(), "SMUIListAction", { index: ne });
      }, notifySelectionChange: (ne) => {
        ue2 != null && Yo(Bt2(), "SMUIListSelectionChange", { changedIndices: ne });
      }, removeClassForElementIndex: ye2, setAttributeForElementIndex: Ee2, setCheckedCheckboxOrRadioAtIndex: (ne, le3) => {
        Oe3()[ne].checked = le3;
      }, setTabIndexForListItemChildren: (ne, le3) => {
        const Le = Oe3()[ne];
        Array.prototype.forEach.call(Le.element.querySelectorAll("button:not(:disabled), a"), (Sr) => {
          Sr.setAttribute("tabindex", le3);
        });
      } }), true);
      const Q2 = { get element() {
        return Bt2();
      }, get items() {
        return ee;
      }, get typeaheadInProgress() {
        if (!F2(M3)) throw new Error("Instance is undefined.");
        return F2(M3).isTypeaheadInProgress();
      }, typeaheadMatchItem(ne, le3) {
        if (!F2(M3)) throw new Error("Instance is undefined.");
        return F2(M3).typeaheadMatchItem(ne, le3, true);
      }, getOrderedList: Oe3, focusItemAtIndex: Nn2, addClassForElementIndex: Y4, removeClassForElementIndex: ye2, setAttributeForElementIndex: Ee2, removeAttributeForElementIndex: xr, getAttributeFromElementIndex: cn2, getPrimaryTextAtIndex: tn2 };
      return et2 && et2(Q2), F2(M3).init(), F2(M3).layout(), () => {
        re && re(Q2), F2(M3)?.destroy();
      };
    }), Fa(() => {
      se3 && se3();
    });
    function ze(Q2) {
      F2(M3) && Q2.target && F2(M3).handleKeydown(Q2, Q2.target.classList.contains("mdc-deprecated-list-item"), tt2(Q2.target));
    }
    function te(Q2) {
      F2(M3) && Q2.target && F2(M3).handleFocusIn(tt2(Q2.target));
    }
    function ut2(Q2) {
      F2(M3) && Q2.target && F2(M3).handleFocusOut(tt2(Q2.target));
    }
    function Dt3(Q2) {
      F2(M3) && Q2.target && F2(M3).handleClick(tt2(Q2.target), !r(Q2.target, 'input[type="checkbox"], input[type="radio"]'), Q2);
    }
    function Re2(Q2) {
      if (C3() || x2()) {
        const ne = tt2(Q2.target);
        if (ne !== -1) {
          const le3 = Oe3()[ne];
          le3 && (C3() && !le3.checked || x2()) && (r(Q2.detail.target, 'input[type="checkbox"], input[type="radio"]') || (le3.checked = !le3.checked), le3.activateRipple(), window.requestAnimationFrame(() => {
            le3.deactivateRipple();
          }));
        }
      }
    }
    function Oe3() {
      return ue2 == null ? [] : [...Bt2().children].map((Q2) => Se3.get(Q2)).filter((Q2) => Q2 && Q2._smui_list_item_accessor);
    }
    function Cn2(Q2, ne) {
      const le3 = Oe3()[Q2];
      return (le3 && le3.hasClass(ne)) ?? false;
    }
    function Y4(Q2, ne) {
      const le3 = Oe3()[Q2];
      le3 && le3.addClass(ne);
    }
    function ye2(Q2, ne) {
      const le3 = Oe3()[Q2];
      le3 && le3.removeClass(ne);
    }
    function Ee2(Q2, ne, le3) {
      const Le = Oe3()[Q2];
      Le && Le.addAttr(ne, le3);
    }
    function xr(Q2, ne) {
      const le3 = Oe3()[Q2];
      le3 && le3.removeAttr(ne);
    }
    function cn2(Q2, ne) {
      const le3 = Oe3()[Q2];
      return le3 ? le3.getAttr(ne) : null;
    }
    function tn2(Q2) {
      const ne = Oe3()[Q2];
      return (ne && ne.getPrimaryText()) ?? "";
    }
    function tt2(Q2) {
      const ne = n(Q2, ".mdc-deprecated-list-item, .mdc-deprecated-list");
      return ne && r(ne, ".mdc-deprecated-list-item") ? Oe3().map((le3) => le3?.element).indexOf(ne) : -1;
    }
    function Kr2() {
      if (!F2(M3)) throw new Error("Instance is undefined.");
      return F2(M3).layout();
    }
    function Jr2(Q2, ne) {
      if (!F2(M3)) throw new Error("Instance is undefined.");
      return F2(M3).setEnabled(Q2, ne);
    }
    function Yr2() {
      if (!F2(M3)) throw new Error("Instance is undefined.");
      return F2(M3).isTypeaheadInProgress();
    }
    function Qr2() {
      if (!F2(M3)) throw new Error("Instance is undefined.");
      return F2(M3).getSelectedIndex();
    }
    function Mi3() {
      if (!F2(M3)) throw new Error("Instance is undefined.");
      return F2(M3).getFocusedItemIndex();
    }
    function Nn2(Q2) {
      const ne = Oe3()[Q2];
      ne && "focus" in ne.element && ne.element.focus();
    }
    function Bt2() {
      return ue2.getElement();
    }
    var Ya2 = { layout: Kr2, setEnabled: Jr2, getTypeaheadInProgress: Yr2, getSelectedIndex: Qr2, getFocusedItemIndex: Mi3, focusItemAtIndex: Nn2, getElement: Bt2 }, Ts2 = gn(), Qa2 = Xt(Ts2);
    {
      let Q2 = Gt(() => bs({ "mdc-deprecated-list": true, "mdc-deprecated-list--non-interactive": a2(), "mdc-deprecated-list--dense": c(), "mdc-deprecated-list--textual-list": l(), "mdc-deprecated-list--avatar-list": u2() || He, "mdc-deprecated-list--icon-list": f(), "mdc-deprecated-list--image-list": d3(), "mdc-deprecated-list--thumbnail-list": h2(), "mdc-deprecated-list--video-list": p(), "mdc-deprecated-list--two-line": g3(), "smui-list--three-line": m2() && !g3(), [s()]: true }));
      Ma(Qa2, D3, (ne, le3) => {
        pr(le3(ne, ys({ get tag() {
          return K2();
        }, get use() {
          return o();
        }, get class() {
          return F2(Q2);
        }, get role() {
          return H3;
        } }, () => ce4, { onkeydown: (Le) => {
          ze(Le), e.onkeydown?.(Le);
        }, onfocusin: (Le) => {
          te(Le), e.onfocusin?.(Le);
        }, onfocusout: (Le) => {
          ut2(Le), e.onfocusout?.(Le);
        }, onclick: (Le) => {
          Dt3(Le), e.onclick?.(Le);
        }, onSMUIAction: (Le) => {
          Re2(Le), e.onSMUIAction?.(Le);
        }, children: (Le, Za2) => {
          var Sr = gn(), E2 = Xt(Sr);
          Ei(E2, () => e.children ?? an), ht(Le, Sr);
        }, $$slots: { default: true } })), (Le) => ue2 = Le, () => ue2);
      });
    }
    return ht(t, Ts2), Vr(Ya2);
  }
  var DE = 0;
  var ME = vs('<span class="mdc-deprecated-list-item__ripple"></span>');
  var LE = vs("<!><!>", 1);
  function fC(t, e) {
    Wr(e, true);
    let n = () => {
    };
    function r(Y4) {
      return Y4 === n;
    }
    let i = Tt("SMUI:list:item:nav"), o = q2(e, "use", 19, () => []), s = q2(e, "class", 3, ""), a2 = q2(e, "style", 3, ""), c = q2(e, "nonInteractive", 19, () => Tt("SMUI:list:nonInteractive") ?? false), l = q2(e, "ripple", 19, () => !c()), u2 = q2(e, "wrapper", 3, false), f = q2(e, "activated", 15, false), d3 = q2(e, "role", 19, () => u2() ? "presentation" : Tt("SMUI:list:item:role")), h2 = q2(e, "selected", 15, false), p = q2(e, "disabled", 3, false), g3 = q2(e, "skipRestoreFocus", 3, false), m2 = q2(e, "tabindex", 15, n), w4 = q2(e, "inputId", 19, () => "SMUI-form-field-list-" + DE++), v2 = q2(e, "component", 3, Na), y3 = q2(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b2 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "color", "nonInteractive", "ripple", "wrapper", "activated", "role", "selected", "disabled", "skipRestoreFocus", "tabindex", "inputId", "href", "component", "tag", "children"]);
    It("SMUI:list:nonInteractive", void 0), It("SMUI:list:item:role", void 0);
    let _4, C3 = Jt({}), x2 = Jt({}), S2 = Jt({}), D3 = on(void 0), K2 = on(void 0);
    const ce4 = Gt(() => r(m2()) ? !c() && !p() && (h2() || F2(D3) && F2(D3).checked) ? 0 : -1 : m2());
    It("SMUI:generic:input:props", { id: w4() }), It("SMUI:separator:context", void 0), It("SMUI:generic:input:mount", (Y4) => {
      ("_smui_checkbox_accessor" in Y4 || "_smui_radio_accessor" in Y4) && Mt(D3, Y4, true);
    }), It("SMUI:generic:input:unmount", () => {
      Mt(D3, void 0);
    });
    const ue2 = Tt("SMUI:list:item:mount"), M3 = Tt("SMUI:list:item:unmount");
    La(() => {
      if (!h2() && !c()) {
        let ye2 = true, Ee2 = _4.getElement();
        for (; Ee2.previousElementSibling; ) if (Ee2 = Ee2.previousElementSibling, Ee2.nodeType === 1 && Ee2.classList.contains("mdc-deprecated-list-item") && !Ee2.classList.contains("mdc-deprecated-list-item--disabled")) {
          ye2 = false;
          break;
        }
        ye2 && Mt(K2, window.requestAnimationFrame(() => re(Ee2)), true);
      }
      const Y4 = { _smui_list_item_accessor: true, get element() {
        return Dt3();
      }, get selected() {
        return h2();
      }, set selected(ye2) {
        h2(ye2);
      }, hasClass: ee, addClass: H3, removeClass: Se3, getAttr: G4, addAttr: se3, removeAttr: et2, getPrimaryText: ut2, get checked() {
        return (F2(D3) && F2(D3).checked) ?? false;
      }, set checked(ye2) {
        F2(D3) && (F2(D3).checked = !!ye2);
      }, get hasCheckbox() {
        return !!(F2(D3) && "_smui_checkbox_accessor" in F2(D3));
      }, get hasRadio() {
        return !!(F2(D3) && "_smui_radio_accessor" in F2(D3));
      }, activateRipple() {
        F2(D3) && F2(D3).activateRipple();
      }, deactivateRipple() {
        F2(D3) && F2(D3).deactivateRipple();
      }, getValue() {
        return e.value;
      }, action: te, get tabindex() {
        return F2(ce4);
      }, set tabindex(ye2) {
        m2(ye2);
      }, get disabled() {
        return p();
      }, get activated() {
        return f();
      }, set activated(ye2) {
        f(ye2);
      } };
      return ue2 && ue2(Y4), () => {
        M3 && M3(Y4);
      };
    }), Fa(() => {
      F2(K2) && window.cancelAnimationFrame(F2(K2));
    });
    function ee(Y4) {
      return Y4 in C3 ? C3[Y4] : Dt3().classList.contains(Y4);
    }
    function H3(Y4) {
      C3[Y4] || (C3[Y4] = true);
    }
    function Se3(Y4) {
      (!(Y4 in C3) || C3[Y4]) && (C3[Y4] = false);
    }
    function He(Y4, ye2) {
      x2[Y4] != ye2 && (ye2 === "" || ye2 == null ? delete x2[Y4] : x2[Y4] = ye2);
    }
    function G4(Y4) {
      return Y4 in S2 ? S2[Y4] ?? null : Dt3().getAttribute(Y4);
    }
    function se3(Y4, ye2) {
      S2[Y4] !== ye2 && (S2[Y4] = ye2);
    }
    function et2(Y4) {
      (!(Y4 in S2) || S2[Y4] != null) && (S2[Y4] = void 0);
    }
    function re(Y4) {
      let ye2 = true;
      for (; Y4.nextElementSibling; ) if (Y4 = Y4.nextElementSibling, Y4.nodeType === 1 && Y4.classList.contains("mdc-deprecated-list-item")) {
        const Ee2 = Y4.attributes.getNamedItem("tabindex");
        if (Ee2 && Ee2.value === "0") {
          ye2 = false;
          break;
        }
      }
      ye2 && m2(0);
    }
    function ze(Y4) {
      const ye2 = Y4.key === "Enter", Ee2 = Y4.key === "Space";
      (ye2 || Ee2) && te(Y4);
    }
    function te(Y4) {
      p() || Yo(Dt3(), "SMUIAction", Y4);
    }
    function ut2() {
      const Y4 = Dt3(), ye2 = Y4.querySelector(".mdc-deprecated-list-item__primary-text");
      if (ye2) return ye2.textContent ?? "";
      const Ee2 = Y4.querySelector(".mdc-deprecated-list-item__text");
      return Ee2 ? Ee2.textContent ?? "" : Y4.textContent ?? "";
    }
    function Dt3() {
      return _4.getElement();
    }
    var Re2 = { action: te, getPrimaryText: ut2, getElement: Dt3 }, Oe3 = gn(), Cn2 = Xt(Oe3);
    {
      let Y4 = Gt(() => [...c() ? [] : [[yp, { ripple: !F2(D3), unbounded: false, color: (f() || h2()) && e.color == null ? "primary" : e.color, disabled: p(), addClass: H3, removeClass: Se3, addStyle: He }]], ...o()]), ye2 = Gt(() => bs({ "mdc-deprecated-list-item": !u2(), "mdc-deprecated-list-item__wrapper": u2(), "mdc-deprecated-list-item--activated": f(), "mdc-deprecated-list-item--selected": h2(), "mdc-deprecated-list-item--disabled": p(), "mdc-menu-item--selected": !i && d3() === "menuitem" && h2(), "smui-menu-item--non-interactive": c(), ...C3, [s()]: true })), Ee2 = Gt(() => Object.entries(x2).map(([cn2, tn2]) => `${cn2}: ${tn2};`).concat([a2()]).join(" ")), xr = Gt(() => g3() || void 0);
      Ma(Cn2, v2, (cn2, tn2) => {
        pr(tn2(cn2, ys({ get tag() {
          return y3();
        }, get use() {
          return F2(Y4);
        }, get class() {
          return F2(ye2);
        }, get style() {
          return F2(Ee2);
        } }, () => i && f() ? { "aria-current": "page" } : {}, () => !i || u2() ? { role: d3() } : {}, () => !i && d3() === "option" ? { "aria-selected": h2() ? "true" : "false" } : {}, () => !i && (d3() === "radio" || d3() === "checkbox") ? { "aria-checked": F2(D3) && F2(D3).checked ? "true" : "false" } : {}, () => i ? {} : { "aria-disabled": p() ? "true" : "false" }, { get "data-menu-item-skip-restore-focus"() {
          return F2(xr);
        }, get tabindex() {
          return F2(ce4);
        }, get href() {
          return e.href;
        } }, () => S2, () => b2, { onclick: (tt2) => {
          te(tt2), e.onclick?.(tt2);
        }, onkeydown: (tt2) => {
          ze(tt2), e.onkeydown?.(tt2);
        }, children: (tt2, Kr2) => {
          var Jr2 = LE(), Yr2 = Xt(Jr2);
          {
            var Qr2 = (Nn2) => {
              var Bt2 = ME();
              ht(Nn2, Bt2);
            };
            ua(Yr2, (Nn2) => {
              l() && Nn2(Qr2);
            });
          }
          var Mi3 = Ol(Yr2);
          Ei(Mi3, () => e.children ?? an), ht(tt2, Jr2);
        }, $$slots: { default: true } })), (tt2) => _4 = tt2, () => _4);
      });
    }
    return ht(t, Oe3), Vr(Re2);
  }
  function dC(t, e) {
    Wr(e, true);
    let n = Oi(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
    function i() {
      return r.getElement();
    }
    var o = { getElement: i };
    return pr(hy(t, ys({ _smuiClass: "mdc-deprecated-list-item__text", tag: "span" }, () => n, { children: (s, a2) => {
      var c = gn(), l = Xt(c);
      Ei(l, () => e.children ?? an), ht(s, c);
    }, $$slots: { default: true } })), (s) => r = s, () => r), Vr(o);
  }

  // dist/build/timer.Dfeo3Vkk.js
  var y2 = { now: function() {
    return Date.now();
  } };
  var A2 = (function(n) {
    E(r, n);
    function r(t, e) {
      return n.call(this) || this;
    }
    return r.prototype.schedule = function(t, e) {
      return this;
    }, r;
  })(P);
  var u = { setInterval: function(n, r) {
    for (var t = [], e = 2; e < arguments.length; e++) t[e - 2] = arguments[e];
    return setInterval.apply(void 0, g([n, r], _(t)));
  }, clearInterval: function(n) {
    return clearInterval(n);
  }, delegate: void 0 };
  var w2 = (function(n) {
    E(r, n);
    function r(t, e) {
      var i = n.call(this, t, e) || this;
      return i.scheduler = t, i.work = e, i.pending = false, i;
    }
    return r.prototype.schedule = function(t, e) {
      var i;
      if (e === void 0 && (e = 0), this.closed) return this;
      this.state = t;
      var s = this.id, o = this.scheduler;
      return s != null && (this.id = this.recycleAsyncId(o, s, e)), this.pending = true, this.delay = e, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, e), this;
    }, r.prototype.requestAsyncId = function(t, e, i) {
      return i === void 0 && (i = 0), u.setInterval(t.flush.bind(t, this), i);
    }, r.prototype.recycleAsyncId = function(t, e, i) {
      if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false) return e;
      e != null && u.clearInterval(e);
    }, r.prototype.execute = function(t, e) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var i = this._execute(t, e);
      if (i) return i;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, r.prototype._execute = function(t, e) {
      var i = false, s;
      try {
        this.work(t);
      } catch (o) {
        i = true, s = o || new Error("Scheduled action threw falsy error");
      }
      if (i) return this.unsubscribe(), s;
    }, r.prototype.unsubscribe = function() {
      if (!this.closed) {
        var t = this, e = t.id, i = t.scheduler, s = i.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, I(s, this), e != null && (this.id = this.recycleAsyncId(i, e, null)), this.delay = null, n.prototype.unsubscribe.call(this);
      }
    }, r;
  })(A2);
  var a = (function() {
    function n(r, t) {
      t === void 0 && (t = n.now), this.schedulerActionCtor = r, this.now = t;
    }
    return n.prototype.schedule = function(r, t, e) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(e, t);
    }, n.now = y2.now, n;
  })();
  var g2 = (function(n) {
    E(r, n);
    function r(t, e) {
      e === void 0 && (e = a.now);
      var i = n.call(this, t, e) || this;
      return i.actions = [], i._active = false, i;
    }
    return r.prototype.flush = function(t) {
      var e = this.actions;
      if (this._active) {
        e.push(t);
        return;
      }
      var i;
      this._active = true;
      do
        if (i = t.execute(t.state, t.delay)) break;
      while (t = e.shift());
      if (this._active = false, i) {
        for (; t = e.shift(); ) t.unsubscribe();
        throw i;
      }
    }, r;
  })(a);
  var I3 = new g2(w2);
  var _2 = I3;
  function b(n) {
    return n instanceof Date && !isNaN(n);
  }
  function k2(n, r, t) {
    n === void 0 && (n = 0), t === void 0 && (t = _2);
    var e = -1;
    return r != null && (et(r) ? t = r : e = r), new nt(function(i) {
      var s = b(n) ? +n - t.now() : n;
      s < 0 && (s = 0);
      var o = 0;
      return t.schedule(function() {
        i.closed || (i.next(o++), 0 <= e ? this.schedule(void 0, e) : i.complete());
      }, s);
    });
  }

  // dist/build/cross-world-events.Cs1CRxRo.js
  function Wn2(i, e, t = e) {
    var n = /* @__PURE__ */ new WeakSet();
    jE(i, "input", async (r) => {
      var a2 = r ? i.defaultValue : i.value;
      if (a2 = Qt2(i) ? Jt2(a2) : a2, t(a2), Ue !== null && n.add(Ue), await zE(), a2 !== (a2 = e())) {
        var o = i.selectionStart, c = i.selectionEnd, d3 = i.value.length;
        if (i.value = a2 ?? "", c !== null) {
          var s = i.value.length;
          o === c && c === d3 && s > d3 ? (i.selectionStart = s, i.selectionEnd = s) : (i.selectionStart = o, i.selectionEnd = Math.min(c, s));
        }
      }
    }), Ri(e) == null && i.value && (t(Qt2(i) ? Jt2(i.value) : i.value), Ue !== null && n.add(Ue)), Dc(() => {
      var r = e();
      if (i === document.activeElement) {
        var a2 = Iu ?? Ue;
        if (n.has(a2)) return;
      }
      Qt2(i) && r === Jt2(i.value) || i.type === "date" && !r && !i.value || r !== i.value && (i.value = r ?? "");
    });
  }
  function Qt2(i) {
    var e = i.type;
    return e === "number" || e === "range";
  }
  function Jt2(i) {
    return i === "" ? null : +i;
  }
  function nn2(i, e) {
    let t = Object.getOwnPropertyNames(i);
    const n = {};
    for (let r = 0; r < t.length; r++) {
      const a2 = t[r], o = a2.indexOf("$");
      o !== -1 && e.indexOf(a2.substring(0, o + 1)) !== -1 || e.indexOf(a2) === -1 && (n[a2] = i[a2]);
    }
    return n;
  }
  function Ve2(i, e) {
    let t = Object.getOwnPropertyNames(i);
    const n = {};
    for (let r = 0; r < t.length; r++) {
      const a2 = t[r];
      a2.substring(0, e.length) === e && (n[a2.substring(e.length)] = i[a2]);
    }
    return n;
  }
  var Zt2 = "mdc-dom-focus-sentinel";
  var zn2 = (function() {
    function i(e, t) {
      t === void 0 && (t = {}), this.root = e, this.options = t, this.elFocusedBeforeTrapFocus = null;
    }
    return i.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0) throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, i.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + Zt2)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, i.prototype.wrapTabFocus = function(e) {
      var t = this, n = this.createSentinel(), r = this.createSentinel();
      n.addEventListener("focus", function() {
        var a2 = t.getFocusableElements(e);
        a2.length > 0 && a2[a2.length - 1].focus();
      }), r.addEventListener("focus", function() {
        var a2 = t.getFocusableElements(e);
        a2.length > 0 && a2[0].focus();
      }), e.insertBefore(n, e.children[0]), e.appendChild(r);
    }, i.prototype.focusInitialElement = function(e, t) {
      var n = 0;
      t && (n = Math.max(e.indexOf(t), 0)), e[n].focus();
    }, i.prototype.getFocusableElements = function(e) {
      var t = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return t.filter(function(n) {
        var r = n.getAttribute("aria-disabled") === "true" || n.getAttribute("disabled") != null || n.getAttribute("hidden") != null || n.getAttribute("aria-hidden") === "true", a2 = n.tabIndex >= 0 && n.getBoundingClientRect().width > 0 && !n.classList.contains(Zt2) && !r, o = false;
        if (a2) {
          var c = getComputedStyle(n);
          o = c.display === "none" || c.visibility === "hidden";
        }
        return a2 && !o;
      });
    }, i.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Zt2), e;
    }, i;
  })();
  var Yn2 = Object.freeze(Object.defineProperty({ __proto__: null, FocusTrap: zn2 }, Symbol.toStringTag, { value: "Module" }));
  function Dt(i, e) {
    Wr(e, true);
    const [t, n] = tC(), r = QE(e.value);
    It(e.key, r), Tn(() => {
      eC(r, e.value);
    }), Fa(() => {
      r.set(void 0);
    });
    var a2 = gn(), o = Xt(a2);
    Ei(o, () => e.children ?? an), ht(i, a2), Vr(), n();
  }
  var Xn2 = { LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above", LABEL_REQUIRED: "mdc-floating-label--required", LABEL_SHAKE: "mdc-floating-label--shake", ROOT: "mdc-floating-label" };
  var Qn2 = (function(i) {
    E(e, i);
    function e(t) {
      var n = i.call(this, A(A({}, e.defaultAdapter), t)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return Xn2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, removeClass: function() {
      }, getWidth: function() {
        return 0;
      }, registerInteractionHandler: function() {
      }, deregisterInteractionHandler: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var n = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.float = function(t) {
      var n = e.cssClasses, r = n.LABEL_FLOAT_ABOVE, a2 = n.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a2));
    }, e.prototype.setRequired = function(t) {
      var n = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  })(Nc);
  var Je2 = { LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active", LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating" };
  var Jn2 = (function(i) {
    E(e, i);
    function e(t) {
      var n = i.call(this, A(A({}, e.defaultAdapter), t)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return Je2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, removeClass: function() {
      }, hasClass: function() {
        return false;
      }, setStyle: function() {
      }, registerEventHandler: function() {
      }, deregisterEventHandler: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(Je2.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Je2.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Je2.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var n = this.adapter.hasClass(Je2.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && n && (this.adapter.removeClass(Je2.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Je2.LINE_RIPPLE_DEACTIVATING));
    }, e;
  })(Nc);
  var Zn2 = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" };
  var fn2 = { NOTCH_ELEMENT_PADDING: 8 };
  var $n2 = { NO_LABEL: "mdc-notched-outline--no-label", OUTLINE_NOTCHED: "mdc-notched-outline--notched", OUTLINE_UPGRADED: "mdc-notched-outline--upgraded" };
  var ei2 = (function(i) {
    E(e, i);
    function e(t) {
      return i.call(this, A(A({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", { get: function() {
      return Zn2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "cssClasses", { get: function() {
      return $n2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "numbers", { get: function() {
      return fn2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, removeClass: function() {
      }, setNotchWidthProperty: function() {
      }, removeNotchWidthProperty: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.notch = function(t) {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += fn2.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  })(Nc);
  var $t2 = { ARIA_CONTROLS: "aria-controls", ARIA_DESCRIBEDBY: "aria-describedby", INPUT_SELECTOR: ".mdc-text-field__input", LABEL_SELECTOR: ".mdc-floating-label", LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading", LINE_RIPPLE_SELECTOR: ".mdc-line-ripple", OUTLINE_SELECTOR: ".mdc-notched-outline", PREFIX_SELECTOR: ".mdc-text-field__affix--prefix", SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix", TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing" };
  var ti2 = { DISABLED: "mdc-text-field--disabled", FOCUSED: "mdc-text-field--focused", HELPER_LINE: "mdc-text-field-helper-line", INVALID: "mdc-text-field--invalid", LABEL_FLOATING: "mdc-text-field--label-floating", NO_LABEL: "mdc-text-field--no-label", OUTLINED: "mdc-text-field--outlined", ROOT: "mdc-text-field", TEXTAREA: "mdc-text-field--textarea", WITH_LEADING_ICON: "mdc-text-field--with-leading-icon", WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon", WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter" };
  var hn2 = { LABEL_SCALE: 0.75 };
  var ni2 = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"];
  var ii2 = ["color", "date", "datetime-local", "month", "range", "time", "week"];
  var pn2 = ["mousedown", "touchstart"];
  var vn2 = ["click", "keydown"];
  var ri2 = (function(i) {
    E(e, i);
    function e(t, n) {
      n === void 0 && (n = {});
      var r = i.call(this, A(A({}, e.defaultAdapter), t)) || this;
      return r.isFocused = false, r.receivedUserInput = false, r.valid = true, r.useNativeValidation = true, r.validateOnValueChange = true, r.helperText = n.helperText, r.characterCounter = n.characterCounter, r.leadingIcon = n.leadingIcon, r.trailingIcon = n.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a2) {
        r.setTransformOrigin(a2);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a2) {
        r.handleValidationAttributeChange(a2);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return ti2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "strings", { get: function() {
      return $t2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "numbers", { get: function() {
      return hn2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", { get: function() {
      var t = this.getNativeInput().type;
      return ii2.indexOf(t) >= 0;
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "shouldFloat", { get: function() {
      return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "shouldShake", { get: function() {
      return !this.isFocused && !this.isValid() && !!this.getValue();
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addClass: function() {
      }, removeClass: function() {
      }, hasClass: function() {
        return true;
      }, setInputAttr: function() {
      }, removeInputAttr: function() {
      }, registerTextFieldInteractionHandler: function() {
      }, deregisterTextFieldInteractionHandler: function() {
      }, registerInputInteractionHandler: function() {
      }, deregisterInputInteractionHandler: function() {
      }, registerValidationAttributeChangeHandler: function() {
        return new MutationObserver(function() {
        });
      }, deregisterValidationAttributeChangeHandler: function() {
      }, getNativeInput: function() {
        return null;
      }, isFocused: function() {
        return false;
      }, activateLineRipple: function() {
      }, deactivateLineRipple: function() {
      }, setLineRippleTransformOrigin: function() {
      }, shakeLabel: function() {
      }, floatLabel: function() {
      }, setLabelRequired: function() {
      }, hasLabel: function() {
        return false;
      }, getLabelWidth: function() {
        return 0;
      }, hasOutline: function() {
        return false;
      }, notchOutline: function() {
      }, closeOutline: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      var t, n, r, a2;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(true), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(true), this.adapter.floatLabel(true), this.styleFloating(true)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = m(pn2), c = o.next(); !c.done; c = o.next()) {
          var d3 = c.value;
          this.adapter.registerInputInteractionHandler(d3, this.setPointerXOffset);
        }
      } catch (m2) {
        t = { error: m2 };
      } finally {
        try {
          c && !c.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var s = m(vn2), p = s.next(); !p.done; p = s.next()) {
          var d3 = p.value;
          this.adapter.registerTextFieldInteractionHandler(d3, this.textFieldInteractionHandler);
        }
      } catch (m2) {
        r = { error: m2 };
      } finally {
        try {
          p && !p.done && (a2 = s.return) && a2.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, n, r, a2;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = m(pn2), c = o.next(); !c.done; c = o.next()) {
          var d3 = c.value;
          this.adapter.deregisterInputInteractionHandler(d3, this.setPointerXOffset);
        }
      } catch (m2) {
        t = { error: m2 };
      } finally {
        try {
          c && !c.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var s = m(vn2), p = s.next(); !p.done; p = s.next()) {
          var d3 = p.value;
          this.adapter.deregisterTextFieldInteractionHandler(d3, this.textFieldInteractionHandler);
        }
      } catch (m2) {
        r = { error: m2 };
      } finally {
        try {
          p && !p.done && (a2 = s.return) && a2.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = true);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var n = this;
      t.some(function(r) {
        return ni2.indexOf(r) > -1 ? (n.styleValidity(true), n.adapter.setLabelRequired(n.getNativeInput().required), true) : false;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel())) if (t) {
        var n = this.adapter.getLabelWidth() * hn2.LABEL_SCALE;
        this.adapter.notchOutline(n);
      } else this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = true, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var n = t.touches, r = n ? n[0] : t, a2 = r.target.getBoundingClientRect(), o = r.clientX - a2.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = false, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = false);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var n = this.isValid();
        this.styleValidity(n);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var n = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(n);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var n = this.getNativeInput().maxLength;
        if (n === -1) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, n);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || false;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var n = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isValidation();
        if (!r) return;
        var a2 = this.helperText.isVisible(), o = this.helperText.getId();
        a2 && o ? this.adapter.setInputAttr($t2.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr($t2.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var n = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.styleDisabled = function(t) {
      var n = e.cssClasses, r = n.DISABLED, a2 = n.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(a2)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var n = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || { disabled: false, maxLength: -1, required: false, type: "input", validity: { badInput: false, valid: true }, value: "" };
    }, e;
  })(Nc);
  var ai2 = vs("<span><!></span>");
  var oi2 = vs("<label><!></label>");
  function gn2(i, e) {
    Wr(e, true);
    let t = q2(e, "use", 19, () => []), n = q2(e, "class", 3, ""), r = q2(e, "style", 3, ""), a2 = q2(e, "floatAbove", 15, false), o = q2(e, "required", 15, false), c = q2(e, "wrapped", 3, false), d3 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "for", "floatAbove", "required", "wrapped", "children"]), s, p = on(void 0), m2 = new Yv(), A3 = Jt({}), L5 = Jt({}), $4 = Tt("SMUI:generic:input:props") ?? {}, I4 = a2();
    Tn(() => {
      F2(p) && I4 !== a2() && (I4 = a2(), F2(p).float(a2()));
    });
    let J3 = o();
    Tn(() => {
      F2(p) && J3 !== o() && (J3 = o(), F2(p).setRequired(o()));
    });
    const M3 = Tt("SMUI:floating-label:mount"), Z3 = Tt("SMUI:floating-label:unmount");
    La(() => {
      Mt(p, new Qn2({ addClass: le3, removeClass: B4, getWidth: () => {
        const E2 = H3(), k3 = E2.cloneNode(true);
        E2.parentNode?.appendChild(k3), k3.classList.add("smui-floating-label--remove-transition"), k3.classList.add("smui-floating-label--force-size"), k3.classList.remove("mdc-floating-label--float-above");
        const R4 = k3.scrollWidth;
        return E2.parentNode?.removeChild(k3), R4;
      }, registerInteractionHandler: (E2, k3) => m2.on(H3(), E2, k3), deregisterInteractionHandler: (E2, k3) => m2.off(H3(), E2, k3) }), true);
      const b2 = { get element() {
        return H3();
      }, addStyle: P4, removeStyle: h2 };
      return M3 && M3(b2), F2(p).init(), () => {
        Z3 && Z3(b2), F2(p)?.destroy(), m2.clear();
      };
    });
    function le3(b2) {
      A3[b2] || (A3[b2] = true);
    }
    function B4(b2) {
      (!(b2 in A3) || A3[b2]) && (A3[b2] = false);
    }
    function P4(b2, E2) {
      L5[b2] != E2 && (E2 === "" || E2 == null ? delete L5[b2] : L5[b2] = E2);
    }
    function h2(b2) {
      b2 in L5 && delete L5[b2];
    }
    function O2(b2) {
      F2(p)?.shake(b2);
    }
    function v2(b2) {
      a2(b2);
    }
    function C3(b2) {
      o(b2);
    }
    function j2() {
      if (F2(p) == null) throw new Error("Instance is undefined.");
      return F2(p).getWidth();
    }
    function H3() {
      return s;
    }
    var ee = { shake: O2, float: v2, setRequired: C3, getWidth: j2, getElement: H3 }, te = gn(), He = Xt(te);
    {
      var fe3 = (b2) => {
        var E2 = ai2();
        Js(E2, (R4, q4) => ({ class: R4, style: q4, ...d3 }), [() => bs({ "mdc-floating-label": true, "mdc-floating-label--float-above": a2(), "mdc-floating-label--required": o(), ...A3, [n()]: true }), () => Object.entries(L5).map(([R4, q4]) => `${R4}: ${q4};`).concat([r()]).join(" ")]);
        var k3 = sv(E2);
        Ei(k3, () => e.children ?? an), pr(E2, (R4) => s = R4, () => s), Ks(E2, (R4, q4) => Ys?.(R4, q4), t), ht(b2, E2);
      }, T4 = (b2) => {
        var E2 = oi2();
        Js(E2, (R4, q4) => ({ class: R4, style: q4, for: e.for || ($4 ? $4.id : void 0), ...d3 }), [() => bs({ "mdc-floating-label": true, "mdc-floating-label--float-above": a2(), "mdc-floating-label--required": o(), ...A3, [n()]: true }), () => Object.entries(L5).map(([R4, q4]) => `${R4}: ${q4};`).concat([r()]).join(" ")]);
        var k3 = sv(E2);
        Ei(k3, () => e.children ?? an), pr(E2, (R4) => s = R4, () => s), Ks(E2, (R4, q4) => Ys?.(R4, q4), t), ht(b2, E2);
      };
      ua(He, (b2) => {
        c() ? b2(fe3) : b2(T4, false);
      });
    }
    return ht(i, te), Vr(ee);
  }
  var si2 = vs("<div></div>");
  function li2(i, e) {
    Wr(e, true);
    let t = q2(e, "use", 19, () => []), n = q2(e, "class", 3, ""), r = q2(e, "style", 3, ""), a2 = q2(e, "active", 3, false), o = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "active"]), c, d3 = on(void 0), s = new Yv(), p = Jt({}), m2 = Jt({});
    La(() => (Mt(d3, new Jn2({ addClass: L5, removeClass: $4, hasClass: A3, setStyle: I4, registerEventHandler: (h2, O2) => s.on(le3(), h2, O2), deregisterEventHandler: (h2, O2) => s.off(le3(), h2, O2) }), true), F2(d3).init(), () => {
      F2(d3)?.destroy(), s.clear();
    }));
    function A3(h2) {
      return h2 in p ? p[h2] : le3().classList.contains(h2);
    }
    function L5(h2) {
      p[h2] || (p[h2] = true);
    }
    function $4(h2) {
      (!(h2 in p) || p[h2]) && (p[h2] = false);
    }
    function I4(h2, O2) {
      m2[h2] != O2 && (O2 === "" || O2 == null ? delete m2[h2] : m2[h2] = O2);
    }
    function J3() {
      F2(d3)?.activate();
    }
    function M3() {
      F2(d3)?.deactivate();
    }
    function Z3(h2) {
      F2(d3)?.setRippleCenter(h2);
    }
    function le3() {
      return c;
    }
    var B4 = { activate: J3, deactivate: M3, setRippleCenter: Z3, getElement: le3 }, P4 = si2();
    return Js(P4, (h2, O2) => ({ class: h2, style: O2, ...o }), [() => bs({ "mdc-line-ripple": true, "mdc-line-ripple--active": a2(), ...p, [n()]: true }), () => Object.entries(m2).map(([h2, O2]) => `${h2}: ${O2};`).concat([r()]).join(" ")]), pr(P4, (h2) => c = h2, () => c), Ks(P4, (h2, O2) => Ys?.(h2, O2), t), ht(i, P4), Vr(B4);
  }
  var ui2 = vs('<div class="mdc-notched-outline__notch"><!></div>');
  var di2 = vs('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
  function ci2(i, e) {
    Wr(e, true);
    let t = q2(e, "use", 19, () => []), n = q2(e, "class", 3, ""), r = q2(e, "notched", 3, false), a2 = q2(e, "noLabel", 3, false), o = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "notched", "noLabel", "children"]), c, d3 = on(void 0), s = on(void 0), p = Jt({}), m2 = Jt({}), A3;
    Tn(() => {
      F2(s) !== A3 && (F2(s) ? (F2(s).addStyle("transition-duration", "0s"), L5("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
        F2(s) && F2(s).removeStyle("transition-duration");
      })) : $4("mdc-notched-outline--upgraded"), A3 = F2(s));
    }), It("SMUI:floating-label:mount", (v2) => {
      Mt(s, v2, true);
    }), It("SMUI:floating-label:unmount", () => {
      Mt(s, void 0);
    }), La(() => (Mt(d3, new ei2({ addClass: L5, removeClass: $4, setNotchWidthProperty: (v2) => I4("width", v2 + "px"), removeNotchWidthProperty: () => J3("width") }), true), F2(d3).init(), () => {
      F2(d3)?.destroy();
    }));
    function L5(v2) {
      p[v2] || (p[v2] = true);
    }
    function $4(v2) {
      (!(v2 in p) || p[v2]) && (p[v2] = false);
    }
    function I4(v2, C3) {
      m2[v2] != C3 && (C3 === "" || C3 == null ? delete m2[v2] : m2[v2] = C3);
    }
    function J3(v2) {
      v2 in m2 && delete m2[v2];
    }
    function M3(v2) {
      F2(d3)?.notch(v2);
    }
    function Z3() {
      F2(d3)?.closeNotch();
    }
    function le3() {
      return c;
    }
    var B4 = { notch: M3, closeNotch: Z3, getElement: le3 }, P4 = di2();
    Js(P4, (v2) => ({ class: v2, ...o }), [() => bs({ "mdc-notched-outline": true, "mdc-notched-outline--notched": r(), "mdc-notched-outline--no-label": a2(), ...p, [n()]: true })]);
    var h2 = Ol(sv(P4), 2);
    {
      var O2 = (v2) => {
        var C3 = ui2(), j2 = sv(C3);
        Ei(j2, () => e.children ?? an), HE((H3) => jv(C3, H3), [() => Object.entries(m2).map(([H3, ee]) => `${H3}: ${ee};`).join(" ")]), ht(v2, C3);
      };
      ua(h2, (v2) => {
        a2() || v2(O2);
      });
    }
    return pr(P4, (v2) => c = v2, () => c), Ks(P4, (v2, C3) => Ys?.(v2, C3), t), ht(i, P4), Vr(B4);
  }
  function fi2(i, e) {
    Wr(e, true);
    let t = Oi(e, ["$$slots", "$$events", "$$legacy", "children"]), n;
    function r() {
      return n.getElement();
    }
    var a2 = { getElement: r };
    return pr(hy(i, ys({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, { children: (o, c) => {
      var d3 = gn(), s = Xt(d3);
      Ei(s, () => e.children ?? an), ht(o, d3);
    }, $$slots: { default: true } })), (o) => n = o, () => n), Vr(a2);
  }
  function hi2(i, e) {
    Wr(e, true);
    let t = Oi(e, ["$$slots", "$$events", "$$legacy", "children"]), n;
    function r() {
      return n.getElement();
    }
    var a2 = { getElement: r };
    return pr(hy(i, ys({ _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix", tag: "span" }, () => t, { children: (o, c) => {
      var d3 = gn(), s = Xt(d3);
      Ei(s, () => e.children ?? an), ht(o, d3);
    }, $$slots: { default: true } })), (o) => n = o, () => n), Vr(a2);
  }
  function pi(i, e) {
    Wr(e, true);
    let t = Oi(e, ["$$slots", "$$events", "$$legacy", "children"]), n;
    function r() {
      return n.getElement();
    }
    var a2 = { getElement: r };
    return pr(hy(i, ys({ _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix", tag: "span" }, () => t, { children: (o, c) => {
      var d3 = gn(), s = Xt(d3);
      Ei(s, () => e.children ?? an), ht(o, d3);
    }, $$slots: { default: true } })), (o) => n = o, () => n), Vr(a2);
  }
  var vi2 = vs("<textarea></textarea>");
  function gi2(i, e) {
    Wr(e, true);
    let t = q2(e, "use", 19, () => []), n = q2(e, "class", 3, ""), r = q2(e, "style", 3, ""), a2 = q2(e, "value", 15, ""), o = q2(e, "dirty", 15, false), c = q2(e, "invalid", 15, false), d3 = q2(e, "updateInvalid", 3, true), s = q2(e, "initialInvalid", 3, false), p = q2(e, "resizable", 3, true), m2 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "value", "dirty", "invalid", "updateInvalid", "initialInvalid", "resizable"]), A3, L5 = Jt({});
    La(() => {
      d3() && s() && c(B4().matches(":invalid"));
    });
    function $4() {
      o(true), d3() && c(B4().matches(":invalid"));
    }
    function I4(v2) {
      return v2 in L5 ? L5[v2] ?? null : B4().getAttribute(v2);
    }
    function J3(v2, C3) {
      L5[v2] !== C3 && (L5[v2] = C3);
    }
    function M3(v2) {
      (!(v2 in L5) || L5[v2] != null) && (L5[v2] = void 0);
    }
    function Z3() {
      B4().focus();
    }
    function le3() {
      B4().blur();
    }
    function B4() {
      return A3;
    }
    var P4 = { getAttr: I4, addAttr: J3, removeAttr: M3, focus: Z3, blur: le3, getElement: B4 }, h2 = vi2(), O2 = (v2) => {
      $4(), e.onchange?.(v2);
    };
    return Js(h2, (v2) => ({ class: v2, style: `${p() ? "" : "resize: none; "}${r()}`, ...L5, ...m2, onchange: O2 }), [() => bs({ "mdc-text-field__input": true, [n()]: true })]), pr(h2, (v2) => A3 = v2, () => A3), Ks(h2, (v2, C3) => Ys?.(v2, C3), t), gs(() => Wn2(h2, a2)), ht(i, h2), Vr(P4);
  }
  var mi2 = vs('<span class="mdc-text-field__ripple"></span>');
  var yi2 = vs("<!> <!>", 1);
  var Ci2 = vs("<span><!> <!></span>");
  var bi2 = vs("<!> <!> <!>", 1);
  var _i2 = vs("<label><!> <!> <!> <!> <!> <!> <!></label>");
  var Ii2 = vs("<div><!> <!> <!> <!> <!></div>");
  var Ei2 = vs("<!> <!>", 1);
  function ir2(i, e) {
    Wr(e, true);
    const { applyPassive: t } = ny;
    let n = () => {
    };
    function r(l) {
      return l === n;
    }
    let a2 = q2(e, "use", 19, () => []), o = q2(e, "class", 3, ""), c = q2(e, "style", 3, ""), d3 = q2(e, "ripple", 3, true), s = q2(e, "disabled", 3, false), p = q2(e, "required", 3, false), m2 = q2(e, "textarea", 3, false), A3 = q2(e, "variant", 19, () => m2() ? "outlined" : "standard"), L5 = q2(e, "noLabel", 3, false), $4 = q2(e, "type", 3, "text"), I4 = q2(e, "value", 15), J3 = q2(e, "files", 15, n), M3 = q2(e, "invalid", 15, n), Z3 = q2(e, "updateInvalid", 19, () => r(M3())), le3 = q2(e, "initialInvalid", 3, false), B4 = q2(e, "dirty", 15, false), P4 = q2(e, "validateOnValueChange", 19, Z3), h2 = q2(e, "useNativeValidation", 19, Z3), O2 = q2(e, "withLeadingIcon", 3, n), v2 = q2(e, "withTrailingIcon", 3, n), C3 = q2(e, "input", 7), j2 = q2(e, "floatingLabel", 7), H3 = q2(e, "lineRipple", 7), ee = q2(e, "notchedOutline", 7), te = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "ripple", "disabled", "required", "textarea", "variant", "noLabel", "label", "type", "value", "files", "invalid", "updateInvalid", "initialInvalid", "dirty", "prefix", "suffix", "validateOnValueChange", "useNativeValidation", "withLeadingIcon", "withTrailingIcon", "input", "floatingLabel", "lineRipple", "notchedOutline", "children", "leadingIcon", "trailingIcon", "internalCounter", "line", "helper"]);
    const He = I4() !== void 0 || I4() === void 0 && e.input$emptyValueUndefined || !r(J3());
    r(J3()) && J3(null), r(M3()) && M3(false);
    let fe3, T4 = on(void 0), b2 = new Yv(), E2 = Jt({}), k3 = Jt({}), R4 = on(void 0), q4 = on(false), Ye2 = on(Jt(le3())), qe2 = Tt("SMUI:addLayoutListener"), et2, Ct2, qt3 = new Promise((l) => Ct2 = l), st2, lt3, ut2, tt2;
    const he2 = Gt(() => C3() && C3().getElement());
    Tn(() => {
      (B4() || F2(Ye2) || !Z3()) && F2(T4) && F2(T4).isValid() !== !M3() && (Z3() ? M3(!F2(T4).isValid()) : F2(T4).setValid(!M3()));
    }), Tn(() => {
      F2(T4) && F2(T4).getValidateOnValueChange() !== P4() && F2(T4).setValidateOnValueChange(r(P4()) ? false : P4());
    }), Tn(() => {
      F2(T4) && F2(T4).setUseNativeValidation(r(h2()) ? true : h2());
    }), Tn(() => {
      F2(T4) && F2(T4).setDisabled(s());
    });
    let bt2 = I4();
    Tn(() => {
      if (F2(T4) && He && bt2 !== I4()) {
        bt2 = I4();
        const l = `${I4() == null ? "" : I4()}`;
        F2(T4).getValue() !== l && F2(T4).setValue(l);
      }
    }), qe2 && (et2 = qe2(Et2)), It("SMUI:textfield:leading-icon:mount", (l) => {
      st2 = l;
    }), It("SMUI:textfield:leading-icon:unmount", () => {
      st2 = void 0;
    }), It("SMUI:textfield:trailing-icon:mount", (l) => {
      lt3 = l;
    }), It("SMUI:textfield:trailing-icon:unmount", () => {
      lt3 = void 0;
    }), It("SMUI:textfield:helper-text:id", (l) => {
      Mt(R4, l, true);
    }), It("SMUI:textfield:helper-text:mount", (l) => {
      ut2 = l;
    }), It("SMUI:textfield:helper-text:unmount", () => {
      Mt(R4, void 0), ut2 = void 0;
    }), It("SMUI:textfield:character-counter:mount", (l) => {
      tt2 = l;
    }), It("SMUI:textfield:character-counter:unmount", () => {
      tt2 = void 0;
    }), La(() => {
      if (Mt(T4, new ri2({ addClass: Ne2, removeClass: dt3, hasClass: _t3, registerTextFieldInteractionHandler: (l, _4) => b2.on(me3(), l, _4), deregisterTextFieldInteractionHandler: (l, _4) => b2.off(me3(), l, _4), registerValidationAttributeChangeHandler: (l) => {
        const _4 = (ge3) => ge3.map((xe3) => xe3.attributeName).filter((xe3) => xe3), ne = new MutationObserver((ge3) => {
          h2() && l(_4(ge3));
        }), we3 = { attributes: true };
        return C3() && ne.observe(C3().getElement(), we3), ne;
      }, deregisterValidationAttributeChangeHandler: (l) => {
        l.disconnect();
      }, getNativeInput: () => C3()?.getElement() ?? null, setInputAttr: (l, _4) => {
        C3()?.addAttr(l, _4);
      }, removeInputAttr: (l) => {
        C3()?.removeAttr(l);
      }, isFocused: () => document.activeElement === C3()?.getElement(), registerInputInteractionHandler: (l, _4) => {
        const ne = C3()?.getElement();
        if (ne) {
          const we3 = t();
          b2.on(ne, l, _4, typeof we3 == "boolean" ? { capture: we3 } : we3);
        }
      }, deregisterInputInteractionHandler: (l, _4) => {
        const ne = C3()?.getElement();
        ne && b2.off(ne, l, _4);
      }, floatLabel: (l) => j2() && j2().float(l), getLabelWidth: () => j2() ? j2().getWidth() : 0, hasLabel: () => !!j2(), shakeLabel: (l) => j2() && j2().shake(l), setLabelRequired: (l) => j2() && j2().setRequired(l), activateLineRipple: () => H3() && H3().activate(), deactivateLineRipple: () => H3() && H3().deactivate(), setLineRippleTransformOrigin: (l) => H3() && H3().setRippleCenter(l), closeOutline: () => ee() && ee().closeNotch(), hasOutline: () => !!ee(), notchOutline: (l) => ee() && ee().notch(l) }, { get helperText() {
        return ut2;
      }, get characterCounter() {
        return tt2;
      }, get leadingIcon() {
        return st2;
      }, get trailingIcon() {
        return lt3;
      } }), true), He) {
        if (C3() == null) throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        F2(T4)?.init();
      } else zE().then(() => {
        if (C3() == null) throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        F2(T4)?.init();
      });
      return Ct2(), () => {
        F2(T4)?.destroy(), b2.clear();
      };
    }), Fa(() => {
      et2 && et2();
    });
    function _t3(l) {
      return l in E2 ? E2[l] ?? null : me3().classList.contains(l);
    }
    function Ne2(l) {
      E2[l] || (E2[l] = true);
    }
    function dt3(l) {
      (!(l in E2) || E2[l]) && (E2[l] = false);
    }
    function It3(l, _4) {
      k3[l] != _4 && (_4 === "" || _4 == null ? delete k3[l] : k3[l] = _4);
    }
    function Gt3() {
      C3()?.focus();
    }
    function Kt2() {
      C3()?.blur();
    }
    function Et2() {
      if (F2(T4)) {
        const l = F2(T4).shouldFloat;
        F2(T4).notchOutline(l);
      }
    }
    function me3() {
      return fe3;
    }
    var St3 = { focus: Gt3, blur: Kt2, layout: Et2, getElement: me3 }, ct2 = Ei2(), At3 = Xt(ct2);
    {
      var Wt3 = (l) => {
        var _4 = _i2();
        Js(_4, (S2, N4, W4) => ({ class: S2, style: N4, for: void 0, ...W4 }), [() => bs({ "mdc-text-field": true, "mdc-text-field--disabled": s(), "mdc-text-field--textarea": m2(), "mdc-text-field--filled": A3() === "filled", "mdc-text-field--outlined": A3() === "outlined", "smui-text-field--standard": A3() === "standard" && !m2(), "mdc-text-field--no-label": L5() || e.label == null, "mdc-text-field--label-floating": F2(q4) || I4() != null && I4() !== "", "mdc-text-field--with-leading-icon": r(O2()) ? e.leadingIcon : O2(), "mdc-text-field--with-trailing-icon": r(v2()) ? e.trailingIcon : v2(), "mdc-text-field--with-internal-counter": m2() && e.internalCounter, "mdc-text-field--invalid": M3(), ...E2, [o()]: true }), () => Object.entries(k3).map(([S2, N4]) => `${S2}: ${N4};`).concat([c()]).join(" "), () => nn2(te, ["input$", "label$", "ripple$", "outline$", "helperLine$"])]);
        var ne = sv(_4);
        {
          var we3 = (S2) => {
            var N4 = yi2(), W4 = Xt(N4);
            {
              var pe3 = (Ce3) => {
                var re = mi2();
                ht(Ce3, re);
              };
              ua(W4, (Ce3) => {
                A3() === "filled" && Ce3(pe3);
              });
            }
            var Ue3 = Ol(W4, 2);
            {
              var z5 = (Ce3) => {
                {
                  let re = Gt(() => F2(q4) || I4() != null && I4() !== "" && (typeof I4() != "number" || !isNaN(I4()))), x2 = Gt(() => Ve2(te, "label$"));
                  pr(gn2(Ce3, ys({ get floatAbove() {
                    return F2(re);
                  }, get required() {
                    return p();
                  }, wrapped: true }, () => F2(x2), { children: (Be3, it3) => {
                    var Fe2 = gn(), ie = Xt(Fe2);
                    {
                      var de3 = (ve3) => {
                      }, ke2 = (ve3) => {
                        var Ot3 = gn(), Xe2 = Xt(Ot3);
                        {
                          var wt2 = (Ge3) => {
                            var Qe2 = VE();
                            HE(() => qE(Qe2, e.label)), ht(Ge3, Qe2);
                          }, Xt2 = (Ge3) => {
                            var Qe2 = gn(), Ke = Xt(Qe2);
                            Ei(Ke, () => e.label), ht(Ge3, Qe2);
                          };
                          ua(Xe2, (Ge3) => {
                            typeof e.label == "string" ? Ge3(wt2) : Ge3(Xt2, false);
                          }, true);
                        }
                        ht(ve3, Ot3);
                      };
                      ua(ie, (ve3) => {
                        e.label == null ? ve3(de3) : ve3(ke2, false);
                      });
                    }
                    ht(Be3, Fe2);
                  }, $$slots: { default: true } })), (Be3) => j2(Be3), () => j2());
                }
              };
              ua(Ue3, (Ce3) => {
                !L5() && e.label != null && Ce3(z5);
              });
            }
            ht(S2, N4);
          };
          ua(ne, (S2) => {
            !m2() && A3() !== "outlined" && S2(we3);
          });
        }
        var ge3 = Ol(ne, 2);
        {
          var xe3 = (S2) => {
            {
              let N4 = Gt(() => L5() || e.label == null), W4 = Gt(() => Ve2(te, "outline$"));
              pr(ci2(S2, ys({ get noLabel() {
                return F2(N4);
              } }, () => F2(W4), { children: (pe3, Ue3) => {
                var z5 = gn(), Ce3 = Xt(z5);
                {
                  var re = (x2) => {
                    {
                      let Be3 = Gt(() => F2(q4) || I4() != null && I4() !== "" && (typeof I4() != "number" || !isNaN(I4()))), it3 = Gt(() => Ve2(te, "label$"));
                      pr(gn2(x2, ys({ get floatAbove() {
                        return F2(Be3);
                      }, get required() {
                        return p();
                      }, wrapped: true }, () => F2(it3), { children: (Fe2, ie) => {
                        var de3 = gn(), ke2 = Xt(de3);
                        {
                          var ve3 = (Xe2) => {
                          }, Ot3 = (Xe2) => {
                            var wt2 = gn(), Xt2 = Xt(wt2);
                            {
                              var Ge3 = (Ke) => {
                                var ht2 = VE();
                                HE(() => qE(ht2, e.label)), ht(Ke, ht2);
                              }, Qe2 = (Ke) => {
                                var ht2 = gn(), wn3 = Xt(ht2);
                                Ei(wn3, () => e.label), ht(Ke, ht2);
                              };
                              ua(Xt2, (Ke) => {
                                typeof e.label == "string" ? Ke(Ge3) : Ke(Qe2, false);
                              }, true);
                            }
                            ht(Xe2, wt2);
                          };
                          ua(ke2, (Xe2) => {
                            e.label == null ? Xe2(ve3) : Xe2(Ot3, false);
                          });
                        }
                        ht(Fe2, de3);
                      }, $$slots: { default: true } })), (Fe2) => j2(Fe2), () => j2());
                    }
                  };
                  ua(Ce3, (x2) => {
                    !L5() && e.label != null && x2(re);
                  });
                }
                ht(pe3, z5);
              }, $$slots: { default: true } })), (pe3) => ee(pe3), () => ee());
            }
          };
          ua(ge3, (S2) => {
            (m2() || A3() === "outlined") && S2(xe3);
          });
        }
        var ft3 = Ol(ge3, 2);
        Dt(ft3, { key: "SMUI:textfield:icon:leading", value: true, children: (S2, N4) => {
          var W4 = gn(), pe3 = Xt(W4);
          Ei(pe3, () => e.leadingIcon ?? an), ht(S2, W4);
        }, $$slots: { default: true } });
        var Lt3 = Ol(ft3, 2);
        Ei(Lt3, () => e.children ?? an);
        var K2 = Ol(Lt3, 2);
        {
          var ue2 = (S2) => {
            var N4 = Ci2(), W4 = sv(N4);
            {
              let Ue3 = Gt(() => Ve2(te, "input$"));
              pr(gi2(W4, ys({ get disabled() {
                return s();
              }, get required() {
                return p();
              }, get updateInvalid() {
                return Z3();
              }, get initialInvalid() {
                return F2(Ye2);
              }, get "aria-controls"() {
                return F2(R4);
              }, get "aria-describedby"() {
                return F2(R4);
              } }, () => F2(Ue3), { onblur: (z5) => {
                Mt(q4, false), Mt(Ye2, true), Yo(me3(), "blur", z5), e.input$onblur?.(z5);
              }, onfocus: (z5) => {
                Mt(q4, true), Yo(me3(), "focus", z5), e.input$onfocus?.(z5);
              }, get value() {
                return I4();
              }, set value(z5) {
                I4(z5);
              }, get dirty() {
                return B4();
              }, set dirty(z5) {
                B4(z5);
              }, get invalid() {
                return M3();
              }, set invalid(z5) {
                M3(z5);
              } })), (z5) => C3(z5), () => C3());
            }
            var pe3 = Ol(W4, 2);
            Ei(pe3, () => e.internalCounter ?? an), HE((Ue3) => Bv(N4, 1, Ue3), [() => Fv(bs({ "mdc-text-field__resizer": !("input$resizable" in te) || e.input$resizable }))]), ht(S2, N4);
          }, ye2 = (S2) => {
            var N4 = bi2(), W4 = Xt(N4);
            {
              var pe3 = (re) => {
                var x2 = gn(), Be3 = Xt(x2);
                {
                  var it3 = (ie) => {
                    hi2(ie, { children: (de3, ke2) => {
                      var ve3 = VE();
                      HE(() => qE(ve3, e.prefix)), ht(de3, ve3);
                    }, $$slots: { default: true } });
                  }, Fe2 = (ie) => {
                    var de3 = gn(), ke2 = Xt(de3);
                    Ei(ke2, () => e.prefix ?? an), ht(ie, de3);
                  };
                  ua(Be3, (ie) => {
                    typeof e.prefix == "string" ? ie(it3) : ie(Fe2, false);
                  });
                }
                ht(re, x2);
              };
              ua(W4, (re) => {
                e.prefix != null && re(pe3);
              });
            }
            var Ue3 = Ol(W4, 2);
            {
              let re = Gt(() => Ve2(te, "input$"));
              pr(rC(Ue3, ys({ get type() {
                return $4();
              }, get disabled() {
                return s();
              }, get required() {
                return p();
              }, get updateInvalid() {
                return Z3();
              }, get initialInvalid() {
                return F2(Ye2);
              }, get "aria-controls"() {
                return F2(R4);
              }, get "aria-describedby"() {
                return F2(R4);
              } }, () => L5() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {}, () => F2(re), { onblur: (x2) => {
                Mt(q4, false), Mt(Ye2, true), Yo(me3(), "blur", x2), e.input$onblur?.(x2);
              }, onfocus: (x2) => {
                Mt(q4, true), Yo(me3(), "focus", x2), e.input$onfocus?.(x2);
              }, get value() {
                return I4();
              }, set value(x2) {
                I4(x2);
              }, get files() {
                return J3();
              }, set files(x2) {
                J3(x2);
              }, get dirty() {
                return B4();
              }, set dirty(x2) {
                B4(x2);
              }, get invalid() {
                return M3();
              }, set invalid(x2) {
                M3(x2);
              } })), (x2) => C3(x2), () => C3());
            }
            var z5 = Ol(Ue3, 2);
            {
              var Ce3 = (re) => {
                var x2 = gn(), Be3 = Xt(x2);
                {
                  var it3 = (ie) => {
                    pi(ie, { children: (de3, ke2) => {
                      var ve3 = VE();
                      HE(() => qE(ve3, e.suffix)), ht(de3, ve3);
                    }, $$slots: { default: true } });
                  }, Fe2 = (ie) => {
                    var de3 = gn(), ke2 = Xt(de3);
                    Ei(ke2, () => e.suffix ?? an), ht(ie, de3);
                  };
                  ua(Be3, (ie) => {
                    typeof e.suffix == "string" ? ie(it3) : ie(Fe2, false);
                  });
                }
                ht(re, x2);
              };
              ua(z5, (re) => {
                e.suffix != null && re(Ce3);
              });
            }
            ht(S2, N4);
          };
          ua(K2, (S2) => {
            m2() && typeof I4() == "string" ? S2(ue2) : S2(ye2, false);
          });
        }
        var nt4 = Ol(K2, 2);
        Dt(nt4, { key: "SMUI:textfield:icon:leading", value: false, children: (S2, N4) => {
          var W4 = gn(), pe3 = Xt(W4);
          Ei(pe3, () => e.trailingIcon ?? an), ht(S2, W4);
        }, $$slots: { default: true } });
        var Ln2 = Ol(nt4, 2);
        {
          var On3 = (S2) => {
            {
              let N4 = Gt(() => Ve2(te, "ripple$"));
              pr(li2(S2, ys(() => F2(N4))), (W4) => H3(W4), () => H3());
            }
          };
          ua(Ln2, (S2) => {
            !m2() && A3() !== "outlined" && d3() && S2(On3);
          });
        }
        pr(_4, (S2) => fe3 = S2, () => fe3), Ks(_4, (S2, N4) => yp?.(S2, N4), () => ({ ripple: !m2() && A3() === "filled", unbounded: false, addClass: Ne2, removeClass: dt3, addStyle: It3, eventTarget: F2(he2), activeTarget: F2(he2), initPromise: qt3 })), Ks(_4, (S2, N4) => Ys?.(S2, N4), a2), ht(l, _4);
      }, zt3 = (l) => {
        var _4 = Ii2();
        Js(_4, (K2, ue2, ye2) => ({ class: K2, style: ue2, ...ye2 }), [() => bs({ "mdc-text-field": true, "mdc-text-field--disabled": s(), "mdc-text-field--textarea": m2(), "mdc-text-field--filled": A3() === "filled", "mdc-text-field--outlined": A3() === "outlined", "smui-text-field--standard": A3() === "standard" && !m2(), "mdc-text-field--no-label": L5() || e.label == null, "mdc-text-field--with-leading-icon": e.leadingIcon, "mdc-text-field--with-trailing-icon": e.trailingIcon, "mdc-text-field--invalid": M3(), ...E2, [o()]: true }), () => Object.entries(k3).map(([K2, ue2]) => `${K2}: ${ue2};`).concat([c()]).join(" "), () => nn2(te, ["input$", "label$", "ripple$", "outline$", "helperLine$"])]);
        var ne = sv(_4);
        {
          var we3 = (K2) => {
            var ue2 = gn(), ye2 = Xt(ue2);
            Ei(ye2, () => e.label ?? an), ht(K2, ue2);
          };
          ua(ne, (K2) => {
            typeof e.label != "string" && K2(we3);
          });
        }
        var ge3 = Ol(ne, 2);
        Dt(ge3, { key: "SMUI:textfield:icon:leading", value: true, children: (K2, ue2) => {
          var ye2 = gn(), nt4 = Xt(ye2);
          Ei(nt4, () => e.leadingIcon ?? an), ht(K2, ye2);
        }, $$slots: { default: true } });
        var xe3 = Ol(ge3, 2);
        Ei(xe3, () => e.children ?? an);
        var ft3 = Ol(xe3, 2);
        Dt(ft3, { key: "SMUI:textfield:icon:leading", value: false, children: (K2, ue2) => {
          var ye2 = gn(), nt4 = Xt(ye2);
          Ei(nt4, () => e.trailingIcon ?? an), ht(K2, ye2);
        }, $$slots: { default: true } });
        var Lt3 = Ol(ft3, 2);
        Ei(Lt3, () => e.line ?? an), pr(_4, (K2) => fe3 = K2, () => fe3), Ks(_4, (K2, ue2) => yp?.(K2, ue2), () => ({ ripple: d3(), unbounded: false, addClass: Ne2, removeClass: dt3, addStyle: It3 })), Ks(_4, (K2, ue2) => Ys?.(K2, ue2), a2), ht(l, _4);
      };
      ua(At3, (l) => {
        He ? l(Wt3) : l(zt3, false);
      });
    }
    var Yt3 = Ol(At3, 2);
    {
      var f = (l) => {
        {
          let _4 = Gt(() => Ve2(te, "helperLine$"));
          fi2(l, ys(() => F2(_4), { children: (ne, we3) => {
            var ge3 = gn(), xe3 = Xt(ge3);
            Ei(xe3, () => e.helper ?? an), ht(ne, ge3);
          }, $$slots: { default: true } }));
        }
      };
      ua(Yt3, (l) => {
        e.helper && l(f);
      });
    }
    return ht(i, ct2), Vr(St3);
  }
  function Si2(i, e) {
    return W(function(t, n) {
      var r = 0;
      t.subscribe(X(n, function(a2) {
        return i.call(e, a2, r++) && n.next(a2);
      }));
    });
  }
  var rn2;
  (function(i) {
    i[i.Transient = 0] = "Transient", i[i.Singleton = 1] = "Singleton", i[i.ResolutionScoped = 2] = "ResolutionScoped", i[i.ContainerScoped = 3] = "ContainerScoped";
  })(rn2 || (rn2 = {}));
  var ce = rn2;
  var an2 = function(i, e) {
    return an2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
      t.__proto__ = n;
    } || function(t, n) {
      for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
    }, an2(i, e);
  };
  function ln2(i, e) {
    an2(i, e);
    function t() {
      this.constructor = i;
    }
    i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  function Ai2(i, e, t, n) {
    function r(a2) {
      return a2 instanceof t ? a2 : new t(function(o) {
        o(a2);
      });
    }
    return new (t || (t = Promise))(function(a2, o) {
      function c(p) {
        try {
          s(n.next(p));
        } catch (m2) {
          o(m2);
        }
      }
      function d3(p) {
        try {
          s(n.throw(p));
        } catch (m2) {
          o(m2);
        }
      }
      function s(p) {
        p.done ? a2(p.value) : r(p.value).then(c, d3);
      }
      s((n = n.apply(i, [])).next());
    });
  }
  function Li2(i, e) {
    var t = { label: 0, sent: function() {
      if (a2[0] & 1) throw a2[1];
      return a2[1];
    }, trys: [], ops: [] }, n, r, a2, o;
    return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function c(s) {
      return function(p) {
        return d3([s, p]);
      };
    }
    function d3(s) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; t; ) try {
        if (n = 1, r && (a2 = s[0] & 2 ? r.return : s[0] ? r.throw || ((a2 = r.return) && a2.call(r), 0) : r.next) && !(a2 = a2.call(r, s[1])).done) return a2;
        switch (r = 0, a2 && (s = [s[0] & 2, a2.value]), s[0]) {
          case 0:
          case 1:
            a2 = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: false };
          case 5:
            t.label++, r = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a2 = t.trys, !(a2 = a2.length > 0 && a2[a2.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!a2 || s[1] > a2[0] && s[1] < a2[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < a2[1]) {
              t.label = a2[1], a2 = s;
              break;
            }
            if (a2 && t.label < a2[2]) {
              t.label = a2[2], t.ops.push(s);
              break;
            }
            a2[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = e.call(i, t);
      } catch (p) {
        s = [6, p], r = 0;
      } finally {
        n = a2 = 0;
      }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  }
  function Mt2(i) {
    var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], n = 0;
    if (t) return t.call(i);
    if (i && typeof i.length == "number") return { next: function() {
      return i && n >= i.length && (i = void 0), { value: i && i[n++], done: !i };
    } };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Ut2(i, e) {
    var t = typeof Symbol == "function" && i[Symbol.iterator];
    if (!t) return i;
    var n = t.call(i), r, a2 = [], o;
    try {
      for (; (e === void 0 || e-- > 0) && !(r = n.next()).done; ) a2.push(r.value);
    } catch (c) {
      o = { error: c };
    } finally {
      try {
        r && !r.done && (t = n.return) && t.call(n);
      } finally {
        if (o) throw o.error;
      }
    }
    return a2;
  }
  function Ze2() {
    for (var i = [], e = 0; e < arguments.length; e++) i = i.concat(Ut2(arguments[e]));
    return i;
  }
  function _n2(i) {
    return !!i.useClass;
  }
  function on2(i) {
    return !!i.useFactory;
  }
  var In2 = (function() {
    function i(e) {
      this.wrap = e, this.reflectMethods = ["get", "getPrototypeOf", "setPrototypeOf", "getOwnPropertyDescriptor", "defineProperty", "has", "set", "deleteProperty", "apply", "construct", "ownKeys"];
    }
    return i.prototype.createProxy = function(e) {
      var t = this, n = {}, r = false, a2, o = function() {
        return r || (a2 = e(t.wrap()), r = true), a2;
      };
      return new Proxy(n, this.createHandler(o));
    }, i.prototype.createHandler = function(e) {
      var t = {}, n = function(r) {
        t[r] = function() {
          for (var a2 = [], o = 0; o < arguments.length; o++) a2[o] = arguments[o];
          a2[0] = e();
          var c = Reflect[r];
          return c.apply(void 0, Ze2(a2));
        };
      };
      return this.reflectMethods.forEach(n), t;
    }, i;
  })();
  function rt3(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  function Oi2(i) {
    return typeof i == "object" && "token" in i && "multiple" in i;
  }
  function mn2(i) {
    return typeof i == "object" && "token" in i && "transform" in i;
  }
  function wi2(i) {
    return typeof i == "function" || i instanceof In2;
  }
  function Ht2(i) {
    return !!i.useToken;
  }
  function Nt2(i) {
    return i.useValue != null;
  }
  function xi2(i) {
    return _n2(i) || Nt2(i) || Ht2(i) || on2(i);
  }
  var un2 = (function() {
    function i() {
      this._registryMap = /* @__PURE__ */ new Map();
    }
    return i.prototype.entries = function() {
      return this._registryMap.entries();
    }, i.prototype.getAll = function(e) {
      return this.ensure(e), this._registryMap.get(e);
    }, i.prototype.get = function(e) {
      this.ensure(e);
      var t = this._registryMap.get(e);
      return t[t.length - 1] || null;
    }, i.prototype.set = function(e, t) {
      this.ensure(e), this._registryMap.get(e).push(t);
    }, i.prototype.setAll = function(e, t) {
      this._registryMap.set(e, t);
    }, i.prototype.has = function(e) {
      return this.ensure(e), this._registryMap.get(e).length > 0;
    }, i.prototype.clear = function() {
      this._registryMap.clear();
    }, i.prototype.ensure = function(e) {
      this._registryMap.has(e) || this._registryMap.set(e, []);
    }, i;
  })();
  var Fi2 = (function(i) {
    ln2(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e;
  })(un2);
  var Pt2 = /* @__PURE__ */ (function() {
    function i() {
      this.scopedResolutions = /* @__PURE__ */ new Map();
    }
    return i;
  })();
  function Ri2(i, e) {
    if (i === null) return "at position #" + e;
    var t = i.split(",")[e].trim();
    return '"' + t + '" at position #' + e;
  }
  function Ti2(i, e, t) {
    return t === void 0 && (t = "    "), Ze2([i], e.message.split(`
`).map(function(n) {
      return t + n;
    })).join(`
`);
  }
  function Di2(i, e, t) {
    var n = Ut2(i.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), r = n[1], a2 = r === void 0 ? null : r, o = Ri2(a2, e);
    return Ti2("Cannot inject the dependency " + o + ' of "' + i.name + '" constructor. Reason:', t);
  }
  function Mi(i) {
    if (typeof i.dispose != "function") return false;
    var e = i.dispose;
    return !(e.length > 0);
  }
  var Pi2 = (function(i) {
    ln2(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e;
  })(un2);
  var Hi2 = (function(i) {
    ln2(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e;
  })(un2);
  var Ni2 = /* @__PURE__ */ (function() {
    function i() {
      this.preResolution = new Pi2(), this.postResolution = new Hi2();
    }
    return i;
  })();
  var Ui2 = /* @__PURE__ */ new Map();
  var Bi2 = (function() {
    function i(e) {
      this.parent = e, this._registry = new Fi2(), this.interceptors = new Ni2(), this.disposed = false, this.disposables = /* @__PURE__ */ new Set();
    }
    return i.prototype.register = function(e, t, n) {
      n === void 0 && (n = { lifecycle: ce.Transient }), this.ensureNotDisposed();
      var r;
      if (xi2(t) ? r = t : r = { useClass: t }, Ht2(r)) for (var a2 = [e], o = r; o != null; ) {
        var c = o.useToken;
        if (a2.includes(c)) throw new Error("Token registration cycle detected! " + Ze2(a2, [c]).join(" -> "));
        a2.push(c);
        var d3 = this._registry.get(c);
        d3 && Ht2(d3.provider) ? o = d3.provider : o = null;
      }
      if ((n.lifecycle === ce.Singleton || n.lifecycle == ce.ContainerScoped || n.lifecycle == ce.ResolutionScoped) && (Nt2(r) || on2(r))) throw new Error('Cannot use lifecycle "' + ce[n.lifecycle] + '" with ValueProviders or FactoryProviders');
      return this._registry.set(e, { provider: r, options: n }), this;
    }, i.prototype.registerType = function(e, t) {
      return this.ensureNotDisposed(), rt3(t) ? this.register(e, { useToken: t }) : this.register(e, { useClass: t });
    }, i.prototype.registerInstance = function(e, t) {
      return this.ensureNotDisposed(), this.register(e, { useValue: t });
    }, i.prototype.registerSingleton = function(e, t) {
      if (this.ensureNotDisposed(), rt3(e)) {
        if (rt3(t)) return this.register(e, { useToken: t }, { lifecycle: ce.Singleton });
        if (t) return this.register(e, { useClass: t }, { lifecycle: ce.Singleton });
        throw new Error('Cannot register a type name as a singleton without a "to" token');
      }
      var n = e;
      return t && !rt3(t) && (n = t), this.register(e, { useClass: n }, { lifecycle: ce.Singleton });
    }, i.prototype.resolve = function(e, t, n) {
      t === void 0 && (t = new Pt2()), n === void 0 && (n = false), this.ensureNotDisposed();
      var r = this.getRegistration(e);
      if (!r && rt3(e)) {
        if (n) return;
        throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
      }
      if (this.executePreResolutionInterceptor(e, "Single"), r) {
        var a2 = this.resolveRegistration(r, t);
        return this.executePostResolutionInterceptor(e, a2, "Single"), a2;
      }
      if (wi2(e)) {
        var a2 = this.construct(e, t);
        return this.executePostResolutionInterceptor(e, a2, "Single"), a2;
      }
      throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
    }, i.prototype.executePreResolutionInterceptor = function(e, t) {
      var n, r;
      if (this.interceptors.preResolution.has(e)) {
        var a2 = [];
        try {
          for (var o = Mt2(this.interceptors.preResolution.getAll(e)), c = o.next(); !c.done; c = o.next()) {
            var d3 = c.value;
            d3.options.frequency != "Once" && a2.push(d3), d3.callback(e, t);
          }
        } catch (s) {
          n = { error: s };
        } finally {
          try {
            c && !c.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        this.interceptors.preResolution.setAll(e, a2);
      }
    }, i.prototype.executePostResolutionInterceptor = function(e, t, n) {
      var r, a2;
      if (this.interceptors.postResolution.has(e)) {
        var o = [];
        try {
          for (var c = Mt2(this.interceptors.postResolution.getAll(e)), d3 = c.next(); !d3.done; d3 = c.next()) {
            var s = d3.value;
            s.options.frequency != "Once" && o.push(s), s.callback(e, t, n);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            d3 && !d3.done && (a2 = c.return) && a2.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        this.interceptors.postResolution.setAll(e, o);
      }
    }, i.prototype.resolveRegistration = function(e, t) {
      if (this.ensureNotDisposed(), e.options.lifecycle === ce.ResolutionScoped && t.scopedResolutions.has(e)) return t.scopedResolutions.get(e);
      var n = e.options.lifecycle === ce.Singleton, r = e.options.lifecycle === ce.ContainerScoped, a2 = n || r, o;
      return Nt2(e.provider) ? o = e.provider.useValue : Ht2(e.provider) ? o = a2 ? e.instance || (e.instance = this.resolve(e.provider.useToken, t)) : this.resolve(e.provider.useToken, t) : _n2(e.provider) ? o = a2 ? e.instance || (e.instance = this.construct(e.provider.useClass, t)) : this.construct(e.provider.useClass, t) : on2(e.provider) ? o = e.provider.useFactory(this) : o = this.construct(e.provider, t), e.options.lifecycle === ce.ResolutionScoped && t.scopedResolutions.set(e, o), o;
    }, i.prototype.resolveAll = function(e, t, n) {
      var r = this;
      t === void 0 && (t = new Pt2()), n === void 0 && (n = false), this.ensureNotDisposed();
      var a2 = this.getAllRegistrations(e);
      if (!a2 && rt3(e)) {
        if (n) return [];
        throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"');
      }
      if (this.executePreResolutionInterceptor(e, "All"), a2) {
        var o = a2.map(function(d3) {
          return r.resolveRegistration(d3, t);
        });
        return this.executePostResolutionInterceptor(e, o, "All"), o;
      }
      var c = [this.construct(e, t)];
      return this.executePostResolutionInterceptor(e, c, "All"), c;
    }, i.prototype.isRegistered = function(e, t) {
      return t === void 0 && (t = false), this.ensureNotDisposed(), this._registry.has(e) || t && (this.parent || false) && this.parent.isRegistered(e, true);
    }, i.prototype.reset = function() {
      this.ensureNotDisposed(), this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear();
    }, i.prototype.clearInstances = function() {
      var e, t;
      this.ensureNotDisposed();
      try {
        for (var n = Mt2(this._registry.entries()), r = n.next(); !r.done; r = n.next()) {
          var a2 = Ut2(r.value, 2), o = a2[0], c = a2[1];
          this._registry.setAll(o, c.filter(function(d3) {
            return !Nt2(d3.provider);
          }).map(function(d3) {
            return d3.instance = void 0, d3;
          }));
        }
      } catch (d3) {
        e = { error: d3 };
      } finally {
        try {
          r && !r.done && (t = n.return) && t.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }, i.prototype.createChildContainer = function() {
      var e, t;
      this.ensureNotDisposed();
      var n = new i(this);
      try {
        for (var r = Mt2(this._registry.entries()), a2 = r.next(); !a2.done; a2 = r.next()) {
          var o = Ut2(a2.value, 2), c = o[0], d3 = o[1];
          d3.some(function(s) {
            var p = s.options;
            return p.lifecycle === ce.ContainerScoped;
          }) && n._registry.setAll(c, d3.map(function(s) {
            return s.options.lifecycle === ce.ContainerScoped ? { provider: s.provider, options: s.options } : s;
          }));
        }
      } catch (s) {
        e = { error: s };
      } finally {
        try {
          a2 && !a2.done && (t = r.return) && t.call(r);
        } finally {
          if (e) throw e.error;
        }
      }
      return n;
    }, i.prototype.beforeResolution = function(e, t, n) {
      n === void 0 && (n = { frequency: "Always" }), this.interceptors.preResolution.set(e, { callback: t, options: n });
    }, i.prototype.afterResolution = function(e, t, n) {
      n === void 0 && (n = { frequency: "Always" }), this.interceptors.postResolution.set(e, { callback: t, options: n });
    }, i.prototype.dispose = function() {
      return Ai2(this, void 0, void 0, function() {
        var e;
        return Li2(this, function(t) {
          switch (t.label) {
            case 0:
              return this.disposed = true, e = [], this.disposables.forEach(function(n) {
                var r = n.dispose();
                r && e.push(r);
              }), [4, Promise.all(e)];
            case 1:
              return t.sent(), [2];
          }
        });
      });
    }, i.prototype.getRegistration = function(e) {
      return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null;
    }, i.prototype.getAllRegistrations = function(e) {
      return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null;
    }, i.prototype.construct = function(e, t) {
      var n = this;
      if (e instanceof In2) return e.createProxy(function(a2) {
        return n.resolve(a2, t);
      });
      var r = (function() {
        var a2 = Ui2.get(e);
        if (!a2 || a2.length === 0) {
          if (e.length === 0) return new e();
          throw new Error('TypeInfo not known for "' + e.name + '"');
        }
        var o = a2.map(n.resolveParams(t, e));
        return new (e.bind.apply(e, Ze2([void 0], o)))();
      })();
      return Mi(r) && this.disposables.add(r), r;
    }, i.prototype.resolveParams = function(e, t) {
      var n = this;
      return function(r, a2) {
        var o, c, d3;
        try {
          return Oi2(r) ? mn2(r) ? r.multiple ? (o = n.resolve(r.transform)).transform.apply(o, Ze2([n.resolveAll(r.token, new Pt2(), r.isOptional)], r.transformArgs)) : (c = n.resolve(r.transform)).transform.apply(c, Ze2([n.resolve(r.token, e, r.isOptional)], r.transformArgs)) : r.multiple ? n.resolveAll(r.token, new Pt2(), r.isOptional) : n.resolve(r.token, e, r.isOptional) : mn2(r) ? (d3 = n.resolve(r.transform, e)).transform.apply(d3, Ze2([n.resolve(r.token, e)], r.transformArgs)) : n.resolve(r, e);
        } catch (s) {
          throw new Error(Di2(t, a2, s));
        }
      };
    }, i.prototype.ensureNotDisposed = function() {
      if (this.disposed) throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }, i;
  })();
  var rr2 = new Bi2();
  if (typeof Reflect > "u" || !Reflect.getMetadata) throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
  function ki2(i) {
    return i ? i.scrollHeight > i.offsetHeight : false;
  }
  function Vi2(i) {
    return i ? i.scrollTop === 0 : false;
  }
  function ji2(i) {
    return i ? Math.ceil(i.scrollHeight - i.scrollTop) === i.clientHeight : false;
  }
  function qi2(i) {
    var e = /* @__PURE__ */ new Set();
    return [].forEach.call(i, function(t) {
      return e.add(t.offsetTop);
    }), e.size > 1;
  }
  var Gi2 = (function() {
    function i() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return i.prototype.request = function(e, t) {
      var n = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(a2) {
        n.rafIDs.delete(e), t(a2);
      });
      this.rafIDs.set(e, r);
    }, i.prototype.cancel = function(e) {
      var t = this.rafIDs.get(e);
      t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
    }, i.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(t, n) {
        e.cancel(n);
      });
    }, i.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(t, n) {
        e.push(n);
      }), e;
    }, i;
  })();
  var w3 = { CLOSING: "mdc-dialog--closing", OPEN: "mdc-dialog--open", OPENING: "mdc-dialog--opening", SCROLLABLE: "mdc-dialog--scrollable", SCROLL_LOCK: "mdc-dialog-scroll-lock", STACKED: "mdc-dialog--stacked", FULLSCREEN: "mdc-dialog--fullscreen", SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header", SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer", SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown", SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing", SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding", SCRIM_HIDDEN: "mdc-dialog__scrim--hidden" };
  var vt2 = { ACTION_ATTRIBUTE: "data-mdc-dialog-action", BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default", BUTTON_SELECTOR: ".mdc-dialog__button", CLOSED_EVENT: "MDCDialog:closed", CLOSE_ACTION: "close", CLOSING_EVENT: "MDCDialog:closing", CONTAINER_SELECTOR: ".mdc-dialog__container", CONTENT_SELECTOR: ".mdc-dialog__content", DESTROY_ACTION: "destroy", INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus", OPENED_EVENT: "MDCDialog:opened", OPENING_EVENT: "MDCDialog:opening", SCRIM_SELECTOR: ".mdc-dialog__scrim", SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".mdc-menu .mdc-list-item", ".mdc-menu .mdc-deprecated-list-item"].join(", "), SURFACE_SELECTOR: ".mdc-dialog__surface" };
  var en2 = { DIALOG_ANIMATION_CLOSE_TIME_MS: 75, DIALOG_ANIMATION_OPEN_TIME_MS: 150 };
  var Bt;
  (function(i) {
    i.POLL_SCROLL_POS = "poll_scroll_position", i.POLL_LAYOUT_CHANGE = "poll_layout_change";
  })(Bt || (Bt = {}));
  var Ki2 = (function(i) {
    E(e, i);
    function e(t) {
      var n = i.call(this, A(A({}, e.defaultAdapter), t)) || this;
      return n.dialogOpen = false, n.isFullscreen = false, n.animationFrame = 0, n.animationTimer = 0, n.escapeKeyAction = vt2.CLOSE_ACTION, n.scrimClickAction = vt2.CLOSE_ACTION, n.autoStackButtons = true, n.areButtonsStacked = false, n.suppressDefaultPressSelector = vt2.SUPPRESS_DEFAULT_PRESS_SELECTOR, n.animFrame = new Gi2(), n.contentScrollHandler = function() {
        n.handleScrollEvent();
      }, n.windowResizeHandler = function() {
        n.layout();
      }, n.windowOrientationChangeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", { get: function() {
      return w3;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "strings", { get: function() {
      return vt2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "numbers", { get: function() {
      return en2;
    }, enumerable: false, configurable: true }), Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { addBodyClass: function() {
      }, addClass: function() {
      }, areButtonsStacked: function() {
        return false;
      }, clickDefaultButton: function() {
      }, eventTargetMatches: function() {
        return false;
      }, getActionFromEvent: function() {
        return "";
      }, getInitialFocusEl: function() {
        return null;
      }, hasClass: function() {
        return false;
      }, isContentScrollable: function() {
        return false;
      }, notifyClosed: function() {
      }, notifyClosing: function() {
      }, notifyOpened: function() {
      }, notifyOpening: function() {
      }, releaseFocus: function() {
      }, removeBodyClass: function() {
      }, removeClass: function() {
      }, reverseButtons: function() {
      }, trapFocus: function() {
      }, registerContentEventHandler: function() {
      }, deregisterContentEventHandler: function() {
      }, isScrollableContentAtTop: function() {
        return false;
      }, isScrollableContentAtBottom: function() {
        return false;
      }, registerWindowEventHandler: function() {
      }, deregisterWindowEventHandler: function() {
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      this.adapter.hasClass(w3.STACKED) && this.setAutoStackButtons(false), this.isFullscreen = this.adapter.hasClass(w3.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var n = this;
      this.dialogOpen = true, this.adapter.notifyOpening(), this.adapter.addClass(w3.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(w3.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        n.adapter.addClass(w3.OPEN), n.adapter.addBodyClass(w3.SCROLL_LOCK), n.layout(), n.animationTimer = setTimeout(function() {
          n.handleAnimationTimerEnd(), n.adapter.trapFocus(n.adapter.getInitialFocusEl()), n.adapter.notifyOpened();
        }, en2.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var n = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = false, this.adapter.notifyClosing(t), this.adapter.addClass(w3.CLOSING), this.adapter.removeClass(w3.OPEN), this.adapter.removeBodyClass(w3.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        n.adapter.releaseFocus(), n.handleAnimationTimerEnd(), n.adapter.notifyClosed(t);
      }, en2.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(w3.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(w3.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(w3.SURFACE_SCRIM_SHOWN), this.adapter.addClass(w3.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(w3.SURFACE_SCRIM_HIDING), this.adapter.removeClass(w3.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.animFrame.request(Bt.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var n = this.adapter.eventTargetMatches(t.target, vt2.SCRIM_SELECTOR);
      if (n && this.scrimClickAction !== "") this.close(this.scrimClickAction);
      else {
        var r = this.adapter.getActionFromEvent(t);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(t) {
      var n = t.key === "Enter" || t.keyCode === 13;
      if (n) {
        var r = this.adapter.getActionFromEvent(t);
        if (!r) {
          var a2 = t.composedPath ? t.composedPath()[0] : t.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a2, this.suppressDefaultPressSelector) : true;
          n && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var n = t.key === "Escape" || t.keyCode === 27;
      n && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(Bt.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(w3.OPENING), this.adapter.removeClass(w3.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var n = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        n.animationFrame = 0, clearTimeout(n.animationTimer), n.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(w3.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(w3.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(w3.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(w3.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(w3.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(w3.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(w3.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(w3.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(w3.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(w3.SCROLL_DIVIDER_FOOTER);
    }, e;
  })(Nc);
  var Wi2 = vs('<div class="mdc-dialog__surface-scrim"></div>');
  var zi2 = vs('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
  function ar2(i, e) {
    Wr(e, true);
    const t = () => ZE(ee, "$aboveFullscreenShown", n), [n, r] = tC(), { FocusTrap: a2 } = Yn2, { closest: o, matches: c } = vp;
    let d3 = q2(e, "use", 19, () => []), s = q2(e, "class", 3, ""), p = q2(e, "open", 15, false), m2 = q2(e, "selection", 3, false), A3 = q2(e, "escapeKeyAction", 3, "close"), L5 = q2(e, "scrimClickAction", 3, "close"), $4 = q2(e, "autoStackButtons", 3, true), I4 = q2(e, "fullscreen", 3, false), J3 = q2(e, "sheet", 3, false), M3 = q2(e, "noContentPadding", 3, false), Z3 = q2(e, "container$class", 3, ""), le3 = q2(e, "surface$class", 3, ""), B4 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "open", "selection", "escapeKeyAction", "scrimClickAction", "autoStackButtons", "fullscreen", "sheet", "noContentPadding", "container$class", "surface$class", "children", "over"]), P4, h2 = on(void 0), O2 = new Yv(), v2 = Jt({}), C3, j2 = QE(false), H3 = Tt("SMUI:dialog:aboveFullscreen"), ee = Tt("SMUI:dialog:aboveFullscreenShown") ?? QE(false), te = Tt("SMUI:addLayoutListener"), He, fe3 = [], T4 = (f) => (fe3.push(f), () => {
      const l = fe3.indexOf(f);
      l >= 0 && fe3.splice(l, 1);
    });
    It("SMUI:dialog:actions:reversed", j2), It("SMUI:addLayoutListener", T4), It("SMUI:dialog:selection", m2()), It("SMUI:dialog:aboveFullscreen", H3 || I4()), It("SMUI:dialog:aboveFullscreenShown", ee), J3() && It("SMUI:icon-button:context", "dialog:sheet"), Tn(() => {
      F2(h2) && F2(h2).getEscapeKeyAction() !== A3() && F2(h2).setEscapeKeyAction(A3());
    }), Tn(() => {
      F2(h2) && F2(h2).getScrimClickAction() !== L5() && F2(h2).setScrimClickAction(L5());
    }), Tn(() => {
      F2(h2) && F2(h2).getAutoStackButtons() !== $4() && F2(h2).setAutoStackButtons($4());
    }), Tn(() => {
      $4() || eC(j2, true);
    }), te && (He = te(tt2)), Tn(() => {
      F2(h2) && F2(h2).isOpen() !== p() && (p() ? F2(h2).open({ isAboveFullscreenDialog: !!H3 }) : F2(h2).close());
    });
    let b2 = t();
    Tn(() => {
      I4() && F2(h2) && b2 !== t() && (b2 = t(), t() ? F2(h2).showSurfaceScrim() : F2(h2).hideSurfaceScrim());
    }), La(() => (C3 = new a2(P4, { initialFocusEl: et2() ?? void 0 }), Mt(h2, new Ki2({ addBodyClass: (f) => document.body.classList.add(f), addClass: k3, areButtonsStacked: () => qi2(q4()), clickDefaultButton: () => {
      const f = Ye2();
      f && f.click();
    }, eventTargetMatches: (f, l) => f ? c(f, l) : false, getActionFromEvent: (f) => {
      if (!f.target) return "";
      const l = o(f.target, "[data-mdc-dialog-action]");
      return l && l.getAttribute("data-mdc-dialog-action");
    }, getInitialFocusEl: et2, hasClass: E2, isContentScrollable: () => ki2(qe2()), notifyClosed: (f) => {
      p(false), Yo(he2(), "SMUIDialogClosed", f ? { action: f } : {});
    }, notifyClosing: (f) => Yo(he2(), "SMUIDialogClosing", f ? { action: f } : {}), notifyOpened: () => Yo(he2(), "SMUIDialogOpened", {}), notifyOpening: () => Yo(he2(), "SMUIDialogOpening", {}), releaseFocus: () => C3.releaseFocus(), removeBodyClass: (f) => document.body.classList.remove(f), removeClass: R4, reverseButtons: () => {
      eC(j2, true);
    }, trapFocus: () => C3.trapFocus(), registerContentEventHandler: (f, l) => {
      const _4 = qe2();
      _4 instanceof HTMLElement && O2.on(_4, f, l);
    }, deregisterContentEventHandler: (f, l) => {
      const _4 = qe2();
      _4 instanceof HTMLElement && O2.off(_4, f, l);
    }, isScrollableContentAtTop: () => Vi2(qe2()), isScrollableContentAtBottom: () => ji2(qe2()), registerWindowEventHandler: (f, l) => O2.on(window, f, l), deregisterWindowEventHandler: (f, l) => O2.off(window, f, l) }), true), F2(h2).init(), () => {
      F2(h2)?.destroy(), O2.clear();
    })), Fa(() => {
      He && He();
    });
    function E2(f) {
      return f in v2 ? v2[f] : he2().classList.contains(f);
    }
    function k3(f) {
      v2[f] || (v2[f] = true);
    }
    function R4(f) {
      (!(f in v2) || v2[f]) && (v2[f] = false);
    }
    function q4() {
      return [].slice.call(he2().querySelectorAll(".mdc-dialog__button"));
    }
    function Ye2() {
      return he2().querySelector("[data-mdc-dialog-button-default]");
    }
    function qe2() {
      return he2().querySelector(".mdc-dialog__content");
    }
    function et2() {
      return he2().querySelector("[data-mdc-dialog-initial-focus]");
    }
    function Ct2() {
      H3 && eC(ee, true), requestAnimationFrame(() => {
        fe3.forEach((f) => f());
      });
    }
    function qt3() {
      fe3.forEach((f) => f());
    }
    function st2() {
      H3 && eC(ee, false);
    }
    function lt3() {
      return p();
    }
    function ut2(f) {
      p(f);
    }
    function tt2() {
      return F2(h2)?.layout();
    }
    function he2() {
      return P4;
    }
    var bt2 = { isOpen: lt3, setOpen: ut2, layout: tt2, getElement: he2 }, _t3 = zi2();
    WE("resize", ku, () => p() && F2(h2) && F2(h2).layout()), WE("orientationchange", ku, () => p() && F2(h2) && F2(h2).layout()), WE("keydown", iv.body, (f) => F2(h2) && F2(h2).handleDocumentKeydown(f));
    var Ne2 = Xt(_t3), dt3 = (f) => {
      Ct2(), e.onSMUIDialogOpening?.(f);
    }, It3 = (f) => {
      qt3(), e.onSMUIDialogOpened?.(f);
    }, Gt3 = (f) => {
      st2(), e.onSMUIDialogClosed?.(f);
    }, Kt2 = (f) => {
      F2(h2) && F2(h2).handleClick(f), e.onclick?.(f);
    }, Et2 = (f) => {
      F2(h2) && F2(h2).handleKeydown(f), e.onkeydown?.(f);
    };
    Js(Ne2, (f, l) => ({ class: f, role: "alertdialog", "aria-modal": "true", ...l, onSMUIDialogOpening: dt3, onSMUIDialogOpened: It3, onSMUIDialogClosed: Gt3, onclick: Kt2, onkeydown: Et2 }), [() => bs({ "mdc-dialog": true, "mdc-dialog--stacked": !$4(), "mdc-dialog--fullscreen": I4(), "mdc-dialog--sheet": J3(), "mdc-dialog--no-content-padding": M3(), "smui-dialog--selection": m2(), ...v2, [s()]: true }), () => nn2(B4, ["container$", "surface$"])]);
    var me3 = sv(Ne2);
    Js(me3, (f, l) => ({ class: f, ...l }), [() => bs({ "mdc-dialog__container": true, [Z3()]: true }), () => Ve2(B4, "container$")]);
    var St3 = sv(me3);
    Js(St3, (f, l) => ({ class: f, role: "alertdialog", "aria-modal": "true", ...l }), [() => bs({ "mdc-dialog__surface": true, [le3()]: true }), () => Ve2(B4, "surface$")]);
    var ct2 = sv(St3);
    Ei(ct2, () => e.children ?? an);
    var At3 = Ol(ct2, 2);
    {
      var Wt3 = (f) => {
        var l = Wi2();
        WE("transitionend", l, () => F2(h2) && F2(h2).handleSurfaceScrimTransitionEnd()), ht(f, l);
      };
      ua(At3, (f) => {
        I4() && f(Wt3);
      });
    }
    pr(Ne2, (f) => P4 = f, () => P4), Ks(Ne2, (f, l) => Ys?.(f, l), d3);
    var zt3 = Ol(Ne2, 2);
    Ei(zt3, () => e.over ?? an), ht(i, _t3);
    var Yt3 = Vr(bt2);
    return r(), Yt3;
  }
  function or2(i, e) {
    Wr(e, true);
    let t = Oi(e, ["$$slots", "$$events", "$$legacy", "children"]), n;
    function r() {
      return n.getElement();
    }
    var a2 = { getElement: r };
    return pr(hy(i, ys({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, { children: (o, c) => {
      var d3 = gn(), s = Xt(d3);
      Ei(s, () => e.children ?? an), ht(o, d3);
    }, $$slots: { default: true } })), (o) => n = o, () => n), Vr(a2);
  }
  var _e2 = ((i) => (i.Dashboard = "Dashboard", i.Configuration = "Configuration", i.Administration = "Administration", i.Maintenance = "Maintenance", i))(_e2 || {});
  var sr2 = { Dashboard: "adk adk-dashboard", Administration: "adk adk-staff-assignment" };
  var Ie2 = class Ie3 {
    static openApp(e, t, n, r, a2) {
      const o = Ie3.buildAppUrl(e, t, n, r, a2);
      window.location.href = o;
    }
    static buildAppUrl(e, t, n, r, a2) {
      let o = null;
      switch (e) {
        case _e2.Dashboard:
          o = `/${t}/application/${n ?? ""}`, r && (o += `/${r ?? ""}`);
          break;
        case _e2.Configuration:
          o = `/${t}/config/${n ?? ""}`, r && a2 && (o += `/${r}/${a2}`);
          break;
        case _e2.Administration:
          o = `administration/${t}`;
          break;
      }
      return o;
    }
    static getTenantIdFromUrl(e) {
      if (!e || e.length === 0) return null;
      const t = e.split("/")[1];
      return t.length === 24 ? t : null;
    }
    static getCurrentApp() {
      return Ie3.getAppFromUrl(window.location.pathname);
    }
    static getAppFromUrl(e) {
      if (!e || e.length === 0) return null;
      const t = e.split("/")[2];
      return Ie3.appRouteMapping[t] ? Ie3.appRouteMapping[t] : null;
    }
    static getAppUrl(e) {
      let t = null;
      return Object.keys(Ie3.appRouteMapping).forEach((n) => {
        Ie3.appRouteMapping[n] === e && (t = n);
      }), t;
    }
    static getGroupIdFromUrl(e) {
      if (!Ie3.getAppFromUrl(e)) return null;
      const n = e.match(/(.{24})\/(application|config)\/(.{24})/);
      return n ? n[3] : null;
    }
    static subscribeToUrl() {
      let e = null;
      return k2(0, 50).pipe(Si2(() => e !== window.location.pathname), it(() => (e = window.location.pathname, e)));
    }
    static isActiveApp(e) {
      const t = window.location.pathname, n = { [_e2.Administration]: "administration", [_e2.Configuration]: "config", [_e2.Dashboard]: "application", [_e2.Maintenance]: "maintenance" };
      return t.includes(n[e]);
    }
    static isInEntityConfiguration() {
      const e = window.location.pathname;
      return Ie3.isActiveApp(_e2.Configuration) && e.includes("detail");
    }
    static getEntityConfigurationDetails() {
      const t = window.location.pathname.match(/(.{24})\/config\/(.{24})\/detail\/(.{3,24})\/([A-z]+)/);
      return t ? { tenantId: t[1], groupId: t[2], entityId: t[3], entityType: t[4] } : null;
    }
    static isInEntityList() {
      return window.location.pathname.includes("list");
    }
    static getEntityListDetails() {
      const t = window.location.pathname.match(/(.{24})\/config\/(.{24})\/list\/([A-z]+)/);
      return t ? { tenantId: t[1], groupId: t[2], entityType: t[3] } : null;
    }
  };
  Ie2.appRouteMapping = { config: _e2.Configuration, application: _e2.Dashboard };
  var yn2 = Ie2;
  var jt2 = "audako-powertoys-extension";
  var Sn2 = "audako-powertoys:chat:bootstrap";
  var Qi2 = "entity.updated";
  var Ji2 = "entity.created";
  var Zi2 = [Qi2, Ji2];
  var $i2 = new Set(Zi2);
  function hr2(i) {
    const e = { source: jt2, type: Sn2, payload: i };
    window.postMessage(e, "*");
  }

  // dist/build/storage-utils.B3TebiZv.js
  var ae2 = M(function(e) {
    return function() {
      e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  });
  var L3 = (function(e) {
    E(t, e);
    function t() {
      var r = e.call(this) || this;
      return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
    }
    return t.prototype.lift = function(r) {
      var n = new _3(this, this);
      return n.operator = r, n;
    }, t.prototype._throwIfClosed = function() {
      if (this.closed) throw new ae2();
    }, t.prototype.next = function(r) {
      var n = this;
      B(function() {
        var o, a2;
        if (n._throwIfClosed(), !n.isStopped) {
          n.currentObservers || (n.currentObservers = Array.from(n.observers));
          try {
            for (var i = m(n.currentObservers), s = i.next(); !s.done; s = i.next()) {
              var u2 = s.value;
              u2.next(r);
            }
          } catch (l) {
            o = { error: l };
          } finally {
            try {
              s && !s.done && (a2 = i.return) && a2.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
        }
      });
    }, t.prototype.error = function(r) {
      var n = this;
      B(function() {
        if (n._throwIfClosed(), !n.isStopped) {
          n.hasError = n.isStopped = true, n.thrownError = r;
          for (var o = n.observers; o.length; ) o.shift().error(r);
        }
      });
    }, t.prototype.complete = function() {
      var r = this;
      B(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.isStopped = true;
          for (var n = r.observers; n.length; ) n.shift().complete();
        }
      });
    }, t.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(t.prototype, "observed", { get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    }, enumerable: false, configurable: true }), t.prototype._trySubscribe = function(r) {
      return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
    }, t.prototype._subscribe = function(r) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
    }, t.prototype._innerSubscribe = function(r) {
      var n = this, o = this, a2 = o.hasError, i = o.isStopped, s = o.observers;
      return a2 || i ? rt : (this.currentObservers = null, s.push(r), new P(function() {
        n.currentObservers = null, I(s, r);
      }));
    }, t.prototype._checkFinalizedStatuses = function(r) {
      var n = this, o = n.hasError, a2 = n.thrownError, i = n.isStopped;
      o ? r.error(a2) : i && r.complete();
    }, t.prototype.asObservable = function() {
      var r = new nt();
      return r.source = this, r;
    }, t.create = function(r, n) {
      return new _3(r, n);
    }, t;
  })(nt);
  var _3 = (function(e) {
    E(t, e);
    function t(r, n) {
      var o = e.call(this) || this;
      return o.destination = r, o.source = n, o;
    }
    return t.prototype.next = function(r) {
      var n, o;
      (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
    }, t.prototype.error = function(r) {
      var n, o;
      (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
    }, t.prototype.complete = function() {
      var r, n;
      (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
    }, t.prototype._subscribe = function(r) {
      var n, o;
      return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : rt;
    }, t;
  })(L3);
  function se(e) {
    return e[e.length - 1];
  }
  function ue(e) {
    return et(se(e)) ? e.pop() : void 0;
  }
  var P3 = (function(e) {
    return e && typeof e.length == "number" && typeof e != "function";
  });
  function F3(e) {
    return y(e?.then);
  }
  function T3(e) {
    return y(e[L]);
  }
  function N3(e) {
    return Symbol.asyncIterator && y(e?.[Symbol.asyncIterator]);
  }
  function z3(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function ce2() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var G2 = ce2();
  function V2(e) {
    return y(e?.[G2]);
  }
  function Y2(e) {
    return N(this, arguments, function() {
      var r, n, o, a2;
      return z(this, function(i) {
        switch (i.label) {
          case 0:
            r = e.getReader(), i.label = 1;
          case 1:
            i.trys.push([1, , 9, 10]), i.label = 2;
          case 2:
            return [4, x(r.read())];
          case 3:
            return n = i.sent(), o = n.value, a2 = n.done, a2 ? [4, x(void 0)] : [3, 5];
          case 4:
            return [2, i.sent()];
          case 5:
            return [4, x(o)];
          case 6:
            return [4, i.sent()];
          case 7:
            return i.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return r.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function B3(e) {
    return y(e?.getReader);
  }
  function h(e) {
    if (e instanceof nt) return e;
    if (e != null) {
      if (T3(e)) return fe2(e);
      if (P3(e)) return le(e);
      if (F3(e)) return de2(e);
      if (N3(e)) return M2(e);
      if (V2(e)) return ve2(e);
      if (B3(e)) return he(e);
    }
    throw z3(e);
  }
  function fe2(e) {
    return new nt(function(t) {
      var r = e[L]();
      if (y(r.subscribe)) return r.subscribe(t);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function le(e) {
    return new nt(function(t) {
      for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
      t.complete();
    });
  }
  function de2(e) {
    return new nt(function(t) {
      e.then(function(r) {
        t.closed || (t.next(r), t.complete());
      }, function(r) {
        return t.error(r);
      }).then(null, q);
    });
  }
  function ve2(e) {
    return new nt(function(t) {
      var r, n;
      try {
        for (var o = m(e), a2 = o.next(); !a2.done; a2 = o.next()) {
          var i = a2.value;
          if (t.next(i), t.closed) return;
        }
      } catch (s) {
        r = { error: s };
      } finally {
        try {
          a2 && !a2.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
      t.complete();
    });
  }
  function M2(e) {
    return new nt(function(t) {
      ye(e, t).catch(function(r) {
        return t.error(r);
      });
    });
  }
  function he(e) {
    return M2(Y2(e));
  }
  function ye(e, t) {
    var r, n, o, a2;
    return $(this, void 0, void 0, function() {
      var i, s;
      return z(this, function(u2) {
        switch (u2.label) {
          case 0:
            u2.trys.push([0, 5, 6, 11]), r = tt(e), u2.label = 1;
          case 1:
            return [4, r.next()];
          case 2:
            if (n = u2.sent(), !!n.done) return [3, 4];
            if (i = n.value, t.next(i), t.closed) return [2];
            u2.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return s = u2.sent(), o = { error: s }, [3, 11];
          case 6:
            return u2.trys.push([6, , 9, 10]), n && !n.done && (a2 = r.return) ? [4, a2.call(r)] : [3, 8];
          case 7:
            u2.sent(), u2.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (o) throw o.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return t.complete(), [2];
        }
      });
    });
  }
  function d2(e, t, r, n, o) {
    n === void 0 && (n = 0), o === void 0 && (o = false);
    var a2 = t.schedule(function() {
      r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
    }, n);
    if (e.add(a2), !o) return a2;
  }
  function U3(e, t) {
    return t === void 0 && (t = 0), W(function(r, n) {
      r.subscribe(X(n, function(o) {
        return d2(n, e, function() {
          return n.next(o);
        }, t);
      }, function() {
        return d2(n, e, function() {
          return n.complete();
        }, t);
      }, function(o) {
        return d2(n, e, function() {
          return n.error(o);
        }, t);
      }));
    });
  }
  function q3(e, t) {
    return t === void 0 && (t = 0), W(function(r, n) {
      n.add(e.schedule(function() {
        return r.subscribe(n);
      }, t));
    });
  }
  function me2(e, t) {
    return h(e).pipe(q3(t), U3(t));
  }
  function pe2(e, t) {
    return h(e).pipe(q3(t), U3(t));
  }
  function Se(e, t) {
    return new nt(function(r) {
      var n = 0;
      return t.schedule(function() {
        n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
      });
    });
  }
  function ge2(e, t) {
    return new nt(function(r) {
      var n;
      return d2(r, t, function() {
        n = e[G2](), d2(r, t, function() {
          var o, a2, i;
          try {
            o = n.next(), a2 = o.value, i = o.done;
          } catch (s) {
            r.error(s);
            return;
          }
          i ? r.complete() : r.next(a2);
        }, 0, true);
      }), function() {
        return y(n?.return) && n.return();
      };
    });
  }
  function $3(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new nt(function(r) {
      d2(r, t, function() {
        var n = e[Symbol.asyncIterator]();
        d2(r, t, function() {
          n.next().then(function(o) {
            o.done ? r.complete() : r.next(o.value);
          });
        }, 0, true);
      });
    });
  }
  function we2(e, t) {
    return $3(Y2(e), t);
  }
  function be(e, t) {
    if (e != null) {
      if (T3(e)) return me2(e, t);
      if (P3(e)) return Se(e, t);
      if (F3(e)) return pe2(e, t);
      if (N3(e)) return $3(e, t);
      if (V2(e)) return ge2(e, t);
      if (B3(e)) return we2(e, t);
    }
    throw z3(e);
  }
  function D2(e, t) {
    return t ? be(e, t) : h(e);
  }
  function Ie4(e, t, r, n, o, a2, i, s) {
    var u2 = [], l = 0, J3 = 0, I4 = false, x2 = function() {
      I4 && !u2.length && !l && t.complete();
    }, K2 = function(y3) {
      return l < n ? E2(y3) : u2.push(y3);
    }, E2 = function(y3) {
      l++;
      var O2 = false;
      h(r(y3, J3++)).subscribe(X(t, function(m2) {
        t.next(m2);
      }, function() {
        O2 = true;
      }, void 0, function() {
        if (O2) try {
          l--;
          for (var m2 = function() {
            var p = u2.shift();
            i || E2(p);
          }; u2.length && l < n; ) m2();
          x2();
        } catch (p) {
          t.error(p);
        }
      }));
    };
    return e.subscribe(X(t, K2, function() {
      I4 = true, x2();
    })), function() {
    };
  }
  function H2(e, t, r) {
    return r === void 0 && (r = 1 / 0), y(t) ? H2(function(n, o) {
      return it(function(a2, i) {
        return t(n, a2, o, i);
      })(h(e(n, o)));
    }, r) : (typeof t == "number" && (r = t), W(function(n, o) {
      return Ie4(n, o, e, r);
    }));
  }
  function xe2(e) {
    return H2(C, e);
  }
  function Ee() {
    return xe2(1);
  }
  function Oe() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Ee()(D2(e, ue(e)));
  }
  var v = class _v2 {
    static async getRegisteredSystemSettings() {
      const t = await chrome.storage.sync.get("registeredSystems");
      return console.log(t), t && Array.isArray(t.registeredSystems) ? t.registeredSystems : (await _v2.setRegisteredSystemSettings([]), []);
    }
    static async setRegisteredSystemSettings(t) {
      console.log("Setting registered systems:", t), await chrome.storage.sync.set({ registeredSystems: t });
    }
    static async getSystemStats() {
      const t = await chrome.storage.sync.get("systemStats");
      return console.log(t), t ? t.systemStats : (await _v2.setSystemStats({}), {});
    }
    static async setSystemStats(t) {
      await chrome.storage.sync.set({ systemStats: t });
    }
    static listenForStatusChanges() {
      const t = new L3();
      return chrome.storage.onChanged.addListener((r) => (r.systemStats && t.next(r.systemStats.newValue), true)), Oe(D2(_v2.getSystemStats()), t.asObservable());
    }
    static async getFeatureSettings() {
      const t = await chrome.storage.sync.get("featureSettings");
      return console.log(t), t?.featureSettings;
    }
    static async getNotificationSettings() {
      const t = await chrome.storage.sync.get("notifiactionSettings");
      if (t && t.notifiactionSettings) return t.notifiactionSettings;
      const r = { enabled: true };
      return await _v2.setNotificationSettings(r), r;
    }
    static async setNotificationSettings(t) {
      await chrome.storage.sync.set({ notifiactionSettings: t });
    }
  };

  // dist/build/Separator.rDAIJdMs.js
  function z4(d3, e) {
    Wr(e, true);
    let n = Tt("SMUI:list:item:nav"), r = Tt("SMUI:separator:context"), l = q2(e, "use", 19, () => []), c = q2(e, "class", 3, ""), g3 = q2(e, "padded", 3, false), m2 = q2(e, "inset", 3, false), o = q2(e, "insetLeading", 3, false), u2 = q2(e, "insetTrailing", 3, false), p = q2(e, "insetPadding", 3, false), v2 = q2(e, "component", 3, Na), f = q2(e, "tag", 3, n || r !== "list" ? "hr" : "li"), h2 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "padded", "inset", "insetLeading", "insetTrailing", "insetPadding", "component", "tag", "children"]), a2;
    function x2() {
      return a2.getElement();
    }
    var S2 = { getElement: x2 }, s = gn(), _4 = Xt(s);
    {
      let E2 = Gt(() => bs({ "mdc-deprecated-list-divider": true, "mdc-deprecated-list-divider--padded": g3(), "mdc-deprecated-list-divider--inset": m2(), "mdc-deprecated-list-divider--inset-leading": o(), "mdc-deprecated-list-divider--inset-trailing": u2(), "mdc-deprecated-list-divider--inset-padding": p(), [c()]: true }));
      Ma(_4, v2, (M3, P4) => {
        pr(P4(M3, ys({ get tag() {
          return f();
        }, get use() {
          return l();
        }, get class() {
          return F2(E2);
        }, role: "separator" }, () => h2)), (L5) => a2 = L5, () => a2);
      });
    }
    return ht(d3, s), Vr(S2);
  }

  // dist/build/content.js
  var No2 = (function(n) {
    E(e, n);
    function e(t) {
      var r = n.call(this) || this;
      return r._value = t, r;
    }
    return Object.defineProperty(e.prototype, "value", { get: function() {
      return this.getValue();
    }, enumerable: false, configurable: true }), e.prototype._subscribe = function(t) {
      var r = n.prototype._subscribe.call(this, t);
      return !r.closed && t.next(this._value), r;
    }, e.prototype.getValue = function() {
      var t = this, r = t.hasError, i = t.thrownError, s = t._value;
      if (r) throw i;
      return this._throwIfClosed(), s;
    }, e.prototype.next = function(t) {
      n.prototype.next.call(this, this._value = t);
    }, e;
  })(L3);
  var Ao2 = new nt(function(n) {
    return n.complete();
  });
  function Io2(n) {
    return !!n && (n instanceof nt || y(n.lift) && y(n.subscribe));
  }
  var Cr2 = M(function(n) {
    return function() {
      n(this), this.name = "EmptyError", this.message = "no elements in sequence";
    };
  });
  function _o2(n, e) {
    return new Promise(function(t, r) {
      var i = new O({ next: function(s) {
        t(s), i.unsubscribe();
      }, error: r, complete: function() {
        r(new Cr2());
      } });
      n.subscribe(i);
    });
  }
  function Mi2(n, e) {
    return e === void 0 && (e = I3), W(function(t, r) {
      var i = null, s = null, o = null, a2 = function() {
        if (i) {
          i.unsubscribe(), i = null;
          var c = s;
          s = null, r.next(c);
        }
      };
      function l() {
        var c = o + n, p = e.now();
        if (p < c) {
          i = this.schedule(void 0, c - p), r.add(i);
          return;
        }
        a2();
      }
      t.subscribe(X(r, function(c) {
        s = c, o = e.now(), i || (i = e.schedule(l, n), r.add(i));
      }, function() {
        a2(), r.complete();
      }, void 0, function() {
        s = i = null;
      }));
    });
  }
  function ko2(n) {
    return W(function(e, t) {
      var r = false;
      e.subscribe(X(t, function(i) {
        r = true, t.next(i);
      }, function() {
        r || t.next(n), t.complete();
      }));
    });
  }
  function Ri3(n) {
    return n <= 0 ? function() {
      return Ao2;
    } : W(function(e, t) {
      var r = 0;
      e.subscribe(X(t, function(i) {
        ++r <= n && (t.next(i), n <= r && t.complete());
      }));
    });
  }
  function Mo2(n) {
    return it(function() {
      return n;
    });
  }
  function Ro2(n, e) {
    return H2(function(t, r) {
      return h(n(t, r)).pipe(Ri3(1), Mo2(t));
    });
  }
  function Ho2(n, e) {
    e === void 0 && (e = I3);
    var t = k2(n, e);
    return Ro2(function() {
      return t;
    });
  }
  function Lo2(n) {
    return n === void 0 && (n = Fo2), W(function(e, t) {
      var r = false;
      e.subscribe(X(t, function(i) {
        r = true, t.next(i);
      }, function() {
        return r ? t.complete() : t.error(n());
      }));
    });
  }
  function Fo2() {
    return new Cr2();
  }
  function Vo2(n) {
    return W(function(e, t) {
      try {
        e.subscribe(t);
      } finally {
        t.add(n);
      }
    });
  }
  function Po2(n, e) {
    var t = arguments.length >= 2;
    return function(r) {
      return r.pipe(C, Ri3(1), t ? ko2(e) : Lo2(function() {
        return new Cr2();
      }));
    };
  }
  function Wo2(n) {
    n === void 0 && (n = {});
    var e = n.connector, t = e === void 0 ? function() {
      return new L3();
    } : e, r = n.resetOnError, i = r === void 0 ? true : r, s = n.resetOnComplete, o = s === void 0 ? true : s, a2 = n.resetOnRefCountZero, l = a2 === void 0 ? true : a2;
    return function(c) {
      var p, v2, S2, T4 = 0, b2 = false, _4 = false, M3 = function() {
        v2?.unsubscribe(), v2 = void 0;
      }, k3 = function() {
        M3(), p = S2 = void 0, b2 = _4 = false;
      }, Q2 = function() {
        var X2 = p;
        k3(), X2?.unsubscribe();
      };
      return W(function(X2, j2) {
        T4++, !_4 && !b2 && M3();
        var E2 = S2 = S2 ?? t();
        j2.add(function() {
          T4--, T4 === 0 && !_4 && !b2 && (v2 = Un2(Q2, l));
        }), E2.subscribe(j2), !p && T4 > 0 && (p = new O({ next: function(A3) {
          return E2.next(A3);
        }, error: function(A3) {
          _4 = true, M3(), v2 = Un2(k3, i, A3), E2.error(A3);
        }, complete: function() {
          b2 = true, M3(), v2 = Un2(k3, o), E2.complete();
        } }), h(X2).subscribe(p));
      })(c);
    };
  }
  function Un2(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
    if (e === true) {
      n();
      return;
    }
    if (e !== false) {
      var i = new O({ next: function() {
        i.unsubscribe(), n();
      } });
      return h(e.apply(void 0, g([], _(t)))).subscribe(i);
    }
  }
  function Bo2(n, e) {
    return W(function(t, r) {
      var i = null, s = 0, o = false, a2 = function() {
        return o && !i && r.complete();
      };
      t.subscribe(X(r, function(l) {
        i?.unsubscribe();
        var c = 0, p = s++;
        h(n(l, p)).subscribe(i = X(r, function(v2) {
          return r.next(e ? e(l, v2, p, c++) : v2);
        }, function() {
          i = null, a2();
        }));
      }, function() {
        o = true, a2();
      }));
    });
  }
  function Uo2(n) {
    return W(function(e, t) {
      h(n).subscribe(X(t, function() {
        return t.complete();
      }, j)), !t.closed && e.subscribe(t);
    });
  }
  var Br2 = { animation: { prefixed: "-webkit-animation", standard: "animation" }, transform: { prefixed: "-webkit-transform", standard: "transform" }, transition: { prefixed: "-webkit-transition", standard: "transition" } };
  function $o2(n) {
    return !!n.document && typeof n.document.createElement == "function";
  }
  function Ur2(n, e) {
    if ($o2(n) && e in Br2) {
      var t = n.document.createElement("div"), r = Br2[e], i = r.standard, s = r.prefixed, o = i in t.style;
      return o ? i : s;
    }
    return e;
  }
  (function() {
    var n = window.Document.prototype.createElement, e = window.Document.prototype.createElementNS, t = window.Document.prototype.importNode, r = window.Document.prototype.prepend, i = window.Document.prototype.append, s = window.DocumentFragment.prototype.prepend, o = window.DocumentFragment.prototype.append, a2 = window.Node.prototype.cloneNode, l = window.Node.prototype.appendChild, c = window.Node.prototype.insertBefore, p = window.Node.prototype.removeChild, v2 = window.Node.prototype.replaceChild, S2 = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), T4 = window.Element.prototype.attachShadow, b2 = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), _4 = window.Element.prototype.getAttribute, M3 = window.Element.prototype.setAttribute, k3 = window.Element.prototype.removeAttribute, Q2 = window.Element.prototype.toggleAttribute, X2 = window.Element.prototype.getAttributeNS, j2 = window.Element.prototype.setAttributeNS, E2 = window.Element.prototype.removeAttributeNS, A3 = window.Element.prototype.insertAdjacentElement, $4 = window.Element.prototype.insertAdjacentHTML, ee = window.Element.prototype.prepend, ge3 = window.Element.prototype.append, D3 = window.Element.prototype.before, V3 = window.Element.prototype.after, H3 = window.Element.prototype.replaceWith, z5 = window.Element.prototype.remove, q4 = window.HTMLElement, ve3 = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), fe3 = window.HTMLElement.prototype.insertAdjacentElement, qe2 = window.HTMLElement.prototype.insertAdjacentHTML, Ke = /* @__PURE__ */ new Set();
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(u2) {
      return Ke.add(u2);
    });
    function rt4(u2) {
      var d3 = Ke.has(u2);
      return u2 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(u2), !d3 && u2;
    }
    var mt2 = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
    function B4(u2) {
      var d3 = u2.isConnected;
      if (d3 !== void 0) return d3;
      if (mt2(u2)) return true;
      for (; u2 && !(u2.__CE_isImportDocument || u2 instanceof Document); ) u2 = u2.parentNode || (window.ShadowRoot && u2 instanceof ShadowRoot ? u2.host : void 0);
      return !(!u2 || !(u2.__CE_isImportDocument || u2 instanceof Document));
    }
    function we3(u2) {
      var d3 = u2.children;
      if (d3) return Array.prototype.slice.call(d3);
      for (d3 = [], u2 = u2.firstChild; u2; u2 = u2.nextSibling) u2.nodeType === Node.ELEMENT_NODE && d3.push(u2);
      return d3;
    }
    function ae3(u2, d3) {
      for (; d3 && d3 !== u2 && !d3.nextSibling; ) d3 = d3.parentNode;
      return d3 && d3 !== u2 ? d3.nextSibling : null;
    }
    function he2(u2, d3, h2) {
      for (var g3 = u2; g3; ) {
        if (g3.nodeType === Node.ELEMENT_NODE) {
          var f = g3;
          d3(f);
          var y3 = f.localName;
          if (y3 === "link" && f.getAttribute("rel") === "import") {
            if (g3 = f.import, h2 === void 0 && (h2 = /* @__PURE__ */ new Set()), g3 instanceof Node && !h2.has(g3)) for (h2.add(g3), g3 = g3.firstChild; g3; g3 = g3.nextSibling) he2(g3, d3, h2);
            g3 = ae3(u2, f);
            continue;
          } else if (y3 === "template") {
            g3 = ae3(u2, f);
            continue;
          }
          if (f = f.__CE_shadowRoot) for (f = f.firstChild; f; f = f.nextSibling) he2(f, d3, h2);
        }
        g3 = g3.firstChild ? g3.firstChild : ae3(u2, g3);
      }
    }
    function Pe() {
      var u2 = !(Me2 == null || !Me2.noDocumentConstructionObserver), d3 = !(Me2 == null || !Me2.shadyDomFastWalk);
      this.m = [], this.g = [], this.j = false, this.shadyDomFastWalk = d3, this.I = !u2;
    }
    function Te2(u2, d3, h2, g3) {
      var f = window.ShadyDOM;
      if (u2.shadyDomFastWalk && f && f.inUse) {
        if (d3.nodeType === Node.ELEMENT_NODE && h2(d3), d3.querySelectorAll) for (u2 = f.nativeMethods.querySelectorAll.call(d3, "*"), d3 = 0; d3 < u2.length; d3++) h2(u2[d3]);
      } else he2(d3, h2, g3);
    }
    function ke2(u2, d3) {
      u2.j = true, u2.m.push(d3);
    }
    function Ye2(u2, d3) {
      u2.j = true, u2.g.push(d3);
    }
    function be2(u2, d3) {
      u2.j && Te2(u2, d3, function(h2) {
        return We2(u2, h2);
      });
    }
    function We2(u2, d3) {
      if (u2.j && !d3.__CE_patched) {
        d3.__CE_patched = true;
        for (var h2 = 0; h2 < u2.m.length; h2++) u2.m[h2](d3);
        for (h2 = 0; h2 < u2.g.length; h2++) u2.g[h2](d3);
      }
    }
    function Ee2(u2, d3) {
      var h2 = [];
      for (Te2(u2, d3, function(f) {
        return h2.push(f);
      }), d3 = 0; d3 < h2.length; d3++) {
        var g3 = h2[d3];
        g3.__CE_state === 1 ? u2.connectedCallback(g3) : Qe2(u2, g3);
      }
    }
    function ue2(u2, d3) {
      var h2 = [];
      for (Te2(u2, d3, function(f) {
        return h2.push(f);
      }), d3 = 0; d3 < h2.length; d3++) {
        var g3 = h2[d3];
        g3.__CE_state === 1 && u2.disconnectedCallback(g3);
      }
    }
    function Ne2(u2, d3, h2) {
      h2 = h2 === void 0 ? {} : h2;
      var g3 = h2.J, f = h2.upgrade || function(w4) {
        return Qe2(u2, w4);
      }, y3 = [];
      for (Te2(u2, d3, function(w4) {
        if (u2.j && We2(u2, w4), w4.localName === "link" && w4.getAttribute("rel") === "import") {
          var x2 = w4.import;
          x2 instanceof Node && (x2.__CE_isImportDocument = true, x2.__CE_registry = document.__CE_registry), x2 && x2.readyState === "complete" ? x2.__CE_documentLoadHandled = true : w4.addEventListener("load", function() {
            var N4 = w4.import;
            if (!N4.__CE_documentLoadHandled) {
              N4.__CE_documentLoadHandled = true;
              var P4 = /* @__PURE__ */ new Set();
              g3 && (g3.forEach(function(re) {
                return P4.add(re);
              }), P4.delete(N4)), Ne2(u2, N4, { J: P4, upgrade: f });
            }
          });
        } else y3.push(w4);
      }, g3), d3 = 0; d3 < y3.length; d3++) f(y3[d3]);
    }
    function Qe2(u2, d3) {
      try {
        var h2 = d3.ownerDocument, g3 = h2.__CE_registry, f = g3 && (h2.defaultView || h2.__CE_isImportDocument) ? m2(g3, d3.localName) : void 0;
        if (f && d3.__CE_state === void 0) {
          f.constructionStack.push(d3);
          try {
            try {
              if (new f.constructorFunction() !== d3) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              f.constructionStack.pop();
            }
          } catch (N4) {
            throw d3.__CE_state = 2, N4;
          }
          if (d3.__CE_state = 1, d3.__CE_definition = f, f.attributeChangedCallback && d3.hasAttributes()) {
            var y3 = f.observedAttributes;
            for (f = 0; f < y3.length; f++) {
              var w4 = y3[f], x2 = d3.getAttribute(w4);
              x2 !== null && u2.attributeChangedCallback(d3, w4, null, x2, null);
            }
          }
          B4(d3) && u2.connectedCallback(d3);
        }
      } catch (N4) {
        je2(N4);
      }
    }
    Pe.prototype.connectedCallback = function(u2) {
      var d3 = u2.__CE_definition;
      if (d3.connectedCallback) try {
        d3.connectedCallback.call(u2);
      } catch (h2) {
        je2(h2);
      }
    }, Pe.prototype.disconnectedCallback = function(u2) {
      var d3 = u2.__CE_definition;
      if (d3.disconnectedCallback) try {
        d3.disconnectedCallback.call(u2);
      } catch (h2) {
        je2(h2);
      }
    }, Pe.prototype.attributeChangedCallback = function(u2, d3, h2, g3, f) {
      var y3 = u2.__CE_definition;
      if (y3.attributeChangedCallback && -1 < y3.observedAttributes.indexOf(d3)) try {
        y3.attributeChangedCallback.call(u2, d3, h2, g3, f);
      } catch (w4) {
        je2(w4);
      }
    };
    function pt2(u2, d3, h2, g3) {
      var f = d3.__CE_registry;
      if (f && (g3 === null || g3 === "http://www.w3.org/1999/xhtml") && (f = m2(f, h2))) try {
        var y3 = new f.constructorFunction();
        if (y3.__CE_state === void 0 || y3.__CE_definition === void 0) throw Error("Failed to construct '" + h2 + "': The returned value was not constructed with the HTMLElement constructor.");
        if (y3.namespaceURI !== "http://www.w3.org/1999/xhtml") throw Error("Failed to construct '" + h2 + "': The constructed element's namespace must be the HTML namespace.");
        if (y3.hasAttributes()) throw Error("Failed to construct '" + h2 + "': The constructed element must not have any attributes.");
        if (y3.firstChild !== null) throw Error("Failed to construct '" + h2 + "': The constructed element must not have any children.");
        if (y3.parentNode !== null) throw Error("Failed to construct '" + h2 + "': The constructed element must not have a parent node.");
        if (y3.ownerDocument !== d3) throw Error("Failed to construct '" + h2 + "': The constructed element's owner document is incorrect.");
        if (y3.localName !== h2) throw Error("Failed to construct '" + h2 + "': The constructed element's local name is incorrect.");
        return y3;
      } catch (w4) {
        return je2(w4), d3 = g3 === null ? n.call(d3, h2) : e.call(d3, g3, h2), Object.setPrototypeOf(d3, HTMLUnknownElement.prototype), d3.__CE_state = 2, d3.__CE_definition = void 0, We2(u2, d3), d3;
      }
      return d3 = g3 === null ? n.call(d3, h2) : e.call(d3, g3, h2), We2(u2, d3), d3;
    }
    function je2(u2) {
      var d3 = "", h2 = "", g3 = 0, f = 0;
      u2 instanceof Error ? (d3 = u2.message, h2 = u2.sourceURL || u2.fileName || "", g3 = u2.line || u2.lineNumber || 0, f = u2.column || u2.columnNumber || 0) : d3 = "Uncaught " + String(u2);
      var y3 = void 0;
      ErrorEvent.prototype.initErrorEvent === void 0 ? y3 = new ErrorEvent("error", { cancelable: true, message: d3, filename: h2, lineno: g3, colno: f, error: u2 }) : (y3 = document.createEvent("ErrorEvent"), y3.initErrorEvent("error", false, true, d3, h2, g3), y3.preventDefault = function() {
        Object.defineProperty(this, "defaultPrevented", { configurable: true, get: function() {
          return true;
        } });
      }), y3.error === void 0 && Object.defineProperty(y3, "error", { configurable: true, enumerable: true, get: function() {
        return u2;
      } }), window.dispatchEvent(y3), y3.defaultPrevented || console.error(u2);
    }
    function K2() {
      var u2 = this;
      this.g = void 0, this.F = new Promise(function(d3) {
        u2.l = d3;
      });
    }
    K2.prototype.resolve = function(u2) {
      if (this.g) throw Error("Already resolved.");
      this.g = u2, this.l(u2);
    };
    function Ct2(u2) {
      var d3 = document;
      this.l = void 0, this.h = u2, this.g = d3, Ne2(this.h, this.g), this.g.readyState === "loading" && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, { childList: true, subtree: true }));
    }
    function me3(u2) {
      u2.l && u2.l.disconnect();
    }
    Ct2.prototype.G = function(u2) {
      var d3 = this.g.readyState;
      for (d3 !== "interactive" && d3 !== "complete" || me3(this), d3 = 0; d3 < u2.length; d3++) for (var h2 = u2[d3].addedNodes, g3 = 0; g3 < h2.length; g3++) Ne2(this.h, h2[g3]);
    };
    function U4(u2) {
      this.s = /* @__PURE__ */ new Map(), this.u = /* @__PURE__ */ new Map(), this.C = /* @__PURE__ */ new Map(), this.A = false, this.B = /* @__PURE__ */ new Map(), this.o = function(d3) {
        return d3();
      }, this.i = false, this.v = [], this.h = u2, this.D = u2.I ? new Ct2(u2) : void 0;
    }
    U4.prototype.H = function(u2, d3) {
      var h2 = this;
      if (!(d3 instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
      it3(this, u2), this.s.set(u2, d3), this.v.push(u2), this.i || (this.i = true, this.o(function() {
        return bt2(h2);
      }));
    }, U4.prototype.define = function(u2, d3) {
      var h2 = this;
      if (!(d3 instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      it3(this, u2), st2(this, u2, d3), this.v.push(u2), this.i || (this.i = true, this.o(function() {
        return bt2(h2);
      }));
    };
    function it3(u2, d3) {
      if (!rt4(d3)) throw new SyntaxError("The element name '" + d3 + "' is not valid.");
      if (m2(u2, d3)) throw Error("A custom element with name '" + (d3 + "' has already been defined."));
      if (u2.A) throw Error("A custom element is already being defined.");
    }
    function st2(u2, d3, h2) {
      u2.A = true;
      var g3;
      try {
        var f = h2.prototype;
        if (!(f instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var y3 = function(re) {
          var Nt3 = f[re];
          if (Nt3 !== void 0 && !(Nt3 instanceof Function)) throw Error("The '" + re + "' callback must be a function.");
          return Nt3;
        }, w4 = y3("connectedCallback"), x2 = y3("disconnectedCallback"), N4 = y3("adoptedCallback"), P4 = (g3 = y3("attributeChangedCallback")) && h2.observedAttributes || [];
      } catch (re) {
        throw re;
      } finally {
        u2.A = false;
      }
      return h2 = { localName: d3, constructorFunction: h2, connectedCallback: w4, disconnectedCallback: x2, adoptedCallback: N4, attributeChangedCallback: g3, observedAttributes: P4, constructionStack: [] }, u2.u.set(d3, h2), u2.C.set(h2.constructorFunction, h2), h2;
    }
    U4.prototype.upgrade = function(u2) {
      Ne2(this.h, u2);
    };
    function bt2(u2) {
      if (u2.i !== false) {
        u2.i = false;
        for (var d3 = [], h2 = u2.v, g3 = /* @__PURE__ */ new Map(), f = 0; f < h2.length; f++) g3.set(h2[f], []);
        for (Ne2(u2.h, document, { upgrade: function(N4) {
          if (N4.__CE_state === void 0) {
            var P4 = N4.localName, re = g3.get(P4);
            re ? re.push(N4) : u2.u.has(P4) && d3.push(N4);
          }
        } }), f = 0; f < d3.length; f++) Qe2(u2.h, d3[f]);
        for (f = 0; f < h2.length; f++) {
          for (var y3 = h2[f], w4 = g3.get(y3), x2 = 0; x2 < w4.length; x2++) Qe2(u2.h, w4[x2]);
          (y3 = u2.B.get(y3)) && y3.resolve(void 0);
        }
        h2.length = 0;
      }
    }
    U4.prototype.get = function(u2) {
      if (u2 = m2(this, u2)) return u2.constructorFunction;
    }, U4.prototype.whenDefined = function(u2) {
      if (!rt4(u2)) return Promise.reject(new SyntaxError("'" + u2 + "' is not a valid custom element name."));
      var d3 = this.B.get(u2);
      if (d3) return d3.F;
      d3 = new K2(), this.B.set(u2, d3);
      var h2 = this.u.has(u2) || this.s.has(u2);
      return u2 = this.v.indexOf(u2) === -1, h2 && u2 && d3.resolve(void 0), d3.F;
    }, U4.prototype.polyfillWrapFlushCallback = function(u2) {
      this.D && me3(this.D);
      var d3 = this.o;
      this.o = function(h2) {
        return u2(function() {
          return d3(h2);
        });
      };
    };
    function m2(u2, d3) {
      var h2 = u2.u.get(d3);
      if (h2) return h2;
      if (h2 = u2.s.get(d3)) {
        u2.s.delete(d3);
        try {
          return st2(u2, d3, h2());
        } catch (g3) {
          je2(g3);
        }
      }
    }
    U4.prototype.define = U4.prototype.define, U4.prototype.upgrade = U4.prototype.upgrade, U4.prototype.get = U4.prototype.get, U4.prototype.whenDefined = U4.prototype.whenDefined, U4.prototype.polyfillDefineLazy = U4.prototype.H, U4.prototype.polyfillWrapFlushCallback = U4.prototype.polyfillWrapFlushCallback;
    function I4(u2, d3, h2) {
      function g3(f) {
        return function(y3) {
          for (var w4 = [], x2 = 0; x2 < arguments.length; ++x2) w4[x2] = arguments[x2];
          x2 = [];
          for (var N4 = [], P4 = 0; P4 < w4.length; P4++) {
            var re = w4[P4];
            if (re instanceof Element && B4(re) && N4.push(re), re instanceof DocumentFragment) for (re = re.firstChild; re; re = re.nextSibling) x2.push(re);
            else x2.push(re);
          }
          for (f.apply(this, w4), w4 = 0; w4 < N4.length; w4++) ue2(u2, N4[w4]);
          if (B4(this)) for (w4 = 0; w4 < x2.length; w4++) N4 = x2[w4], N4 instanceof Element && Ee2(u2, N4);
        };
      }
      h2.prepend !== void 0 && (d3.prepend = g3(h2.prepend)), h2.append !== void 0 && (d3.append = g3(h2.append));
    }
    function xe3(u2) {
      Document.prototype.createElement = function(d3) {
        return pt2(u2, this, d3, null);
      }, Document.prototype.importNode = function(d3, h2) {
        return d3 = t.call(this, d3, !!h2), this.__CE_registry ? Ne2(u2, d3) : be2(u2, d3), d3;
      }, Document.prototype.createElementNS = function(d3, h2) {
        return pt2(u2, this, h2, d3);
      }, I4(u2, Document.prototype, { prepend: r, append: i });
    }
    function yt2(u2) {
      function d3(g3) {
        return function(f) {
          for (var y3 = [], w4 = 0; w4 < arguments.length; ++w4) y3[w4] = arguments[w4];
          w4 = [];
          for (var x2 = [], N4 = 0; N4 < y3.length; N4++) {
            var P4 = y3[N4];
            if (P4 instanceof Element && B4(P4) && x2.push(P4), P4 instanceof DocumentFragment) for (P4 = P4.firstChild; P4; P4 = P4.nextSibling) w4.push(P4);
            else w4.push(P4);
          }
          for (g3.apply(this, y3), y3 = 0; y3 < x2.length; y3++) ue2(u2, x2[y3]);
          if (B4(this)) for (y3 = 0; y3 < w4.length; y3++) x2 = w4[y3], x2 instanceof Element && Ee2(u2, x2);
        };
      }
      var h2 = Element.prototype;
      D3 !== void 0 && (h2.before = d3(D3)), V3 !== void 0 && (h2.after = d3(V3)), H3 !== void 0 && (h2.replaceWith = function(g3) {
        for (var f = [], y3 = 0; y3 < arguments.length; ++y3) f[y3] = arguments[y3];
        y3 = [];
        for (var w4 = [], x2 = 0; x2 < f.length; x2++) {
          var N4 = f[x2];
          if (N4 instanceof Element && B4(N4) && w4.push(N4), N4 instanceof DocumentFragment) for (N4 = N4.firstChild; N4; N4 = N4.nextSibling) y3.push(N4);
          else y3.push(N4);
        }
        for (x2 = B4(this), H3.apply(this, f), f = 0; f < w4.length; f++) ue2(u2, w4[f]);
        if (x2) for (ue2(u2, this), f = 0; f < y3.length; f++) w4 = y3[f], w4 instanceof Element && Ee2(u2, w4);
      }), z5 !== void 0 && (h2.remove = function() {
        var g3 = B4(this);
        z5.call(this), g3 && ue2(u2, this);
      });
    }
    function Rn2(u2) {
      function d3(f, y3) {
        Object.defineProperty(f, "innerHTML", { enumerable: y3.enumerable, configurable: true, get: y3.get, set: function(w4) {
          var x2 = this, N4 = void 0;
          if (B4(this) && (N4 = [], Te2(u2, this, function(Nt3) {
            Nt3 !== x2 && N4.push(Nt3);
          })), y3.set.call(this, w4), N4) for (var P4 = 0; P4 < N4.length; P4++) {
            var re = N4[P4];
            re.__CE_state === 1 && u2.disconnectedCallback(re);
          }
          return this.ownerDocument.__CE_registry ? Ne2(u2, this) : be2(u2, this), w4;
        } });
      }
      function h2(f, y3) {
        f.insertAdjacentElement = function(w4, x2) {
          var N4 = B4(x2);
          return w4 = y3.call(this, w4, x2), N4 && ue2(u2, x2), B4(w4) && Ee2(u2, x2), w4;
        };
      }
      function g3(f, y3) {
        function w4(x2, N4) {
          for (var P4 = []; x2 !== N4; x2 = x2.nextSibling) P4.push(x2);
          for (N4 = 0; N4 < P4.length; N4++) Ne2(u2, P4[N4]);
        }
        f.insertAdjacentHTML = function(x2, N4) {
          if (x2 = x2.toLowerCase(), x2 === "beforebegin") {
            var P4 = this.previousSibling;
            y3.call(this, x2, N4), w4(P4 || this.parentNode.firstChild, this);
          } else if (x2 === "afterbegin") P4 = this.firstChild, y3.call(this, x2, N4), w4(this.firstChild, P4);
          else if (x2 === "beforeend") P4 = this.lastChild, y3.call(this, x2, N4), w4(P4 || this.firstChild, null);
          else if (x2 === "afterend") P4 = this.nextSibling, y3.call(this, x2, N4), w4(this.nextSibling, P4);
          else throw new SyntaxError("The value provided (" + String(x2) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        };
      }
      T4 && (Element.prototype.attachShadow = function(f) {
        if (f = T4.call(this, f), u2.j && !f.__CE_patched) {
          f.__CE_patched = true;
          for (var y3 = 0; y3 < u2.m.length; y3++) u2.m[y3](f);
        }
        return this.__CE_shadowRoot = f;
      }), b2 && b2.get ? d3(Element.prototype, b2) : ve3 && ve3.get ? d3(HTMLElement.prototype, ve3) : Ye2(u2, function(f) {
        d3(f, { enumerable: true, configurable: true, get: function() {
          return a2.call(this, true).innerHTML;
        }, set: function(y3) {
          var w4 = this.localName === "template", x2 = w4 ? this.content : this, N4 = e.call(document, this.namespaceURI, this.localName);
          for (N4.innerHTML = y3; 0 < x2.childNodes.length; ) p.call(x2, x2.childNodes[0]);
          for (y3 = w4 ? N4.content : N4; 0 < y3.childNodes.length; ) l.call(x2, y3.childNodes[0]);
        } });
      }), Element.prototype.setAttribute = function(f, y3) {
        if (this.__CE_state !== 1) return M3.call(this, f, y3);
        var w4 = _4.call(this, f);
        M3.call(this, f, y3), y3 = _4.call(this, f), u2.attributeChangedCallback(this, f, w4, y3, null);
      }, Element.prototype.setAttributeNS = function(f, y3, w4) {
        if (this.__CE_state !== 1) return j2.call(this, f, y3, w4);
        var x2 = X2.call(this, f, y3);
        j2.call(this, f, y3, w4), w4 = X2.call(this, f, y3), u2.attributeChangedCallback(this, y3, x2, w4, f);
      }, Element.prototype.removeAttribute = function(f) {
        if (this.__CE_state !== 1) return k3.call(this, f);
        var y3 = _4.call(this, f);
        k3.call(this, f), y3 !== null && u2.attributeChangedCallback(this, f, y3, null, null);
      }, Q2 && (Element.prototype.toggleAttribute = function(f, y3) {
        if (this.__CE_state !== 1) return Q2.call(this, f, y3);
        var w4 = _4.call(this, f), x2 = w4 !== null;
        return y3 = Q2.call(this, f, y3), x2 !== y3 && u2.attributeChangedCallback(this, f, w4, y3 ? "" : null, null), y3;
      }), Element.prototype.removeAttributeNS = function(f, y3) {
        if (this.__CE_state !== 1) return E2.call(this, f, y3);
        var w4 = X2.call(this, f, y3);
        E2.call(this, f, y3);
        var x2 = X2.call(this, f, y3);
        w4 !== x2 && u2.attributeChangedCallback(this, y3, w4, x2, f);
      }, fe3 ? h2(HTMLElement.prototype, fe3) : A3 && h2(Element.prototype, A3), qe2 ? g3(HTMLElement.prototype, qe2) : $4 && g3(Element.prototype, $4), I4(u2, Element.prototype, { prepend: ee, append: ge3 }), yt2(u2);
    }
    var Bt2 = {};
    function ln3(u2) {
      function d3() {
        var h2 = this.constructor, g3 = document.__CE_registry.C.get(h2);
        if (!g3) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
        var f = g3.constructionStack;
        if (f.length === 0) return f = n.call(document, g3.localName), Object.setPrototypeOf(f, h2.prototype), f.__CE_state = 1, f.__CE_definition = g3, We2(u2, f), f;
        var y3 = f.length - 1, w4 = f[y3];
        if (w4 === Bt2) throw Error("Failed to construct '" + g3.localName + "': This element was already constructed.");
        return f[y3] = Bt2, Object.setPrototypeOf(w4, h2.prototype), We2(u2, w4), w4;
      }
      d3.prototype = q4.prototype, Object.defineProperty(HTMLElement.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: d3 }), window.HTMLElement = d3;
    }
    function Hn2(u2) {
      function d3(h2, g3) {
        Object.defineProperty(h2, "textContent", { enumerable: g3.enumerable, configurable: true, get: g3.get, set: function(f) {
          if (this.nodeType === Node.TEXT_NODE) g3.set.call(this, f);
          else {
            var y3 = void 0;
            if (this.firstChild) {
              var w4 = this.childNodes, x2 = w4.length;
              if (0 < x2 && B4(this)) {
                y3 = Array(x2);
                for (var N4 = 0; N4 < x2; N4++) y3[N4] = w4[N4];
              }
            }
            if (g3.set.call(this, f), y3) for (f = 0; f < y3.length; f++) ue2(u2, y3[f]);
          }
        } });
      }
      Node.prototype.insertBefore = function(h2, g3) {
        if (h2 instanceof DocumentFragment) {
          var f = we3(h2);
          if (h2 = c.call(this, h2, g3), B4(this)) for (g3 = 0; g3 < f.length; g3++) Ee2(u2, f[g3]);
          return h2;
        }
        return f = h2 instanceof Element && B4(h2), g3 = c.call(this, h2, g3), f && ue2(u2, h2), B4(this) && Ee2(u2, h2), g3;
      }, Node.prototype.appendChild = function(h2) {
        if (h2 instanceof DocumentFragment) {
          var g3 = we3(h2);
          if (h2 = l.call(this, h2), B4(this)) for (var f = 0; f < g3.length; f++) Ee2(u2, g3[f]);
          return h2;
        }
        return g3 = h2 instanceof Element && B4(h2), f = l.call(this, h2), g3 && ue2(u2, h2), B4(this) && Ee2(u2, h2), f;
      }, Node.prototype.cloneNode = function(h2) {
        return h2 = a2.call(this, !!h2), this.ownerDocument.__CE_registry ? Ne2(u2, h2) : be2(u2, h2), h2;
      }, Node.prototype.removeChild = function(h2) {
        var g3 = h2 instanceof Element && B4(h2), f = p.call(this, h2);
        return g3 && ue2(u2, h2), f;
      }, Node.prototype.replaceChild = function(h2, g3) {
        if (h2 instanceof DocumentFragment) {
          var f = we3(h2);
          if (h2 = v2.call(this, h2, g3), B4(this)) for (ue2(u2, g3), g3 = 0; g3 < f.length; g3++) Ee2(u2, f[g3]);
          return h2;
        }
        f = h2 instanceof Element && B4(h2);
        var y3 = v2.call(this, h2, g3), w4 = B4(this);
        return w4 && ue2(u2, g3), f && ue2(u2, h2), w4 && Ee2(u2, h2), y3;
      }, S2 && S2.get ? d3(Node.prototype, S2) : ke2(u2, function(h2) {
        d3(h2, { enumerable: true, configurable: true, get: function() {
          for (var g3 = [], f = this.firstChild; f; f = f.nextSibling) f.nodeType !== Node.COMMENT_NODE && g3.push(f.textContent);
          return g3.join("");
        }, set: function(g3) {
          for (; this.firstChild; ) p.call(this, this.firstChild);
          g3 != null && g3 !== "" && l.call(this, document.createTextNode(g3));
        } });
      });
    }
    var Me2 = window.customElements;
    function Ut3() {
      var u2 = new Pe();
      ln3(u2), xe3(u2), I4(u2, DocumentFragment.prototype, { prepend: s, append: o }), Hn2(u2), Rn2(u2), window.CustomElementRegistry = U4, u2 = new U4(u2), document.__CE_registry = u2, Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: u2 });
    }
    Me2 && !Me2.forcePolyfill && typeof Me2.define == "function" && typeof Me2.get == "function" || Ut3(), window.__CE_installPolyfill = Ut3;
  }).call(self);
  function zo2(n) {
    return n.setAttribute("data-mdc-dialog-initial-focus", ""), { destroy() {
      n.removeAttribute("data-mdc-dialog-initial-focus");
    } };
  }
  var Zo2 = class {
    static watchForDomChanges(e, t = 100) {
      const r = new L3(), i = { attributes: true, childList: true, subtree: true }, s = new MutationObserver((o, a2) => {
        r.next({ mutations: o, observer: a2 });
      });
      return s.observe(e, i), r.asObservable().pipe(Mi2(t), Vo2(() => {
        s.disconnect();
      }));
    }
    static mapHTMLCollection(e, t) {
      const r = [];
      for (let i = 0; i < e.length; i++) {
        const s = e.item(i);
        r.push(t(s, i));
      }
      return r;
    }
    static createMatTableDefinition() {
      const e = document.createElement("td");
      return e.setAttribute("role", "gridcell"), e.classList.add("mat-cell", "cdk-cell", "powertoys-cell"), e;
    }
    static createMatTableHeader() {
      const e = document.createElement("th");
      return e.setAttribute("role", "gridcell"), e.classList.add("mat-header-cell", "cdk-header-cell", "powertoys-header-cell"), e;
    }
  };
  async function Go2(n) {
    try {
      return [await n, null];
    } catch (e) {
      return [null, e];
    }
  }
  var Hi3 = "tenant.v1";
  var Li3 = "group.v1";
  var Fi3 = "generic-entity.v1";
  var Vi3 = "signal.v1";
  var qo2 = "command.v1";
  var Yo2 = class {
    constructor(e) {
      this.icon = e;
    }
    execute(e) {
      this.onExecute(e);
    }
  };
  var lr2 = class extends Yo2 {
    constructor(e, t) {
      super(e), this.callback = t;
    }
    onExecute(e) {
      this.callback(e);
    }
  };
  var tn = class {
    constructor(e) {
      this.title = e.title, this.subtitle = e.subtitle, this.icon = e.icon, this.infoText = e.infoText, this.tooltip = e.tooltip, this.context = e.context, this.extraActions = e.extraActions ?? [], this.infoComponent = e.infoComponent;
    }
    defaultAction() {
      this.onDefaultAction(this.context);
    }
    serializeContext(e) {
      return e;
    }
    toStoredSearchResult(e) {
      return { type: this.type, category: this.category, title: this.title, subtitle: this.subtitle, infoText: this.infoText, icon: this.icon, context: this.serializeContext(this.context), selectedAt: e };
    }
  };
  var Nn = (n) => () => Promise.resolve(n);
  var Pi3 = class extends tn {
    constructor(e) {
      const t = [new lr2(sr2.Administration, (r) => {
        yn2.openApp(_e2.Administration, r.tenantId);
      })];
      e.context.isRootTenant && t.unshift(new lr2(sr2.Dashboard, (r) => {
        yn2.openApp(_e2.Dashboard, r.tenantId);
      })), super({ title: e.title, subtitle: e.subtitle, icon: e.icon, infoText: e.infoText, tooltip: e.tooltip ?? Nn(e.title), context: e.context, extraActions: t }), this.type = "tenant", this.category = "Tenant";
    }
    serializeContext(e) {
      return { contextType: Hi3, ...e };
    }
    onDefaultAction(e) {
      yn2.openApp(e.defaultApp, e.tenantId);
    }
  };
  var Wi3 = class extends tn {
    constructor(e) {
      const t = [];
      e.context.isEntryPoint && t.push(new lr2(sr2.Dashboard, (r) => {
        yn2.openApp(_e2.Dashboard, r.tenantId, r.groupId);
      })), super({ title: e.title, subtitle: e.subtitle, icon: e.icon, infoText: e.infoText, tooltip: e.tooltip ?? Nn(e.title), context: e.context, extraActions: t }), this.type = "group", this.category = ae.Group;
    }
    serializeContext(e) {
      return { contextType: Li3, ...e };
    }
    onDefaultAction(e) {
      yn2.openApp(_e2.Configuration, e.tenantId, e.groupId);
    }
  };
  var Bi3 = class extends tn {
    constructor(e) {
      super({ title: e.title, subtitle: e.subtitle, icon: e.icon, infoText: e.infoText, tooltip: e.tooltip ?? Nn(e.title), context: e.context, extraActions: [] }), this.type = "generic-entity", this.category = e.category;
    }
    serializeContext(e) {
      return { contextType: Fi3, ...e };
    }
    onDefaultAction(e) {
      yn2.openApp(e.app, e.tenantId, e.groupId, e.detailId, e.detailType);
    }
  };
  var Ui3 = class extends tn {
    constructor(e) {
      super({ title: e.title, subtitle: e.subtitle, icon: e.icon, infoText: e.infoText, tooltip: e.tooltip ?? Nn(e.title), context: e.context, extraActions: [], infoComponent: e.infoComponent }), this.type = "signal", this.category = ae.Signal;
    }
    serializeContext(e) {
      return { contextType: Vi3, ...e };
    }
    onDefaultAction(e) {
      yn2.openApp(_e2.Configuration, e.tenantId, e.groupId, e.signalId);
    }
  };
  var jo2 = class extends tn {
    constructor(e) {
      super({ title: e.title, subtitle: e.subtitle, icon: e.icon, tooltip: () => Promise.resolve(e.title), context: e.context, extraActions: [] }), this.type = "command", this.category = "Command", this._onExecute = e.onExecute;
    }
    serializeContext(e) {
      return { contextType: qo2, ...e };
    }
    onDefaultAction(e) {
      this._onExecute(e);
    }
  };
  var Jo2 = (n, e) => !n || typeof n != "object" ? false : n.contextType === e;
  var Ko2 = (n) => {
    const { contextType: e, ...t } = n;
    return t;
  };
  var un3 = (n, e) => Jo2(n, e) ? Ko2(n) : null;
  var Qo2 = (n) => {
    const e = n;
    return !!e && typeof e == "object" && typeof e.type == "string" && typeof e.category == "string" && typeof e.title == "string" && typeof e.icon == "string" && typeof e.selectedAt == "number" && "context" in e && !!e.context && typeof e.context == "object";
  };
  var $r2 = (n) => {
    switch (n.type) {
      case "tenant": {
        const e = un3(n.context, Hi3);
        return e ? new Pi3({ title: n.title, subtitle: n.subtitle, icon: n.icon, infoText: n.infoText, context: e }) : null;
      }
      case "group": {
        const e = un3(n.context, Li3);
        return e ? new Wi3({ title: n.title, subtitle: n.subtitle, icon: n.icon, infoText: n.infoText, context: e }) : null;
      }
      case "generic-entity": {
        const e = un3(n.context, Fi3);
        return e ? new Bi3({ category: n.category, title: n.title, subtitle: n.subtitle, icon: n.icon, infoText: n.infoText, context: e }) : null;
      }
      case "signal": {
        const e = un3(n.context, Vi3);
        return e ? new Ui3({ title: n.title, subtitle: n.subtitle, icon: n.icon, infoText: n.infoText, context: e }) : null;
      }
      case "command":
        return null;
      default:
        return null;
    }
  };
  var zr2 = (n) => [n.type, n.category, n.title, n.infoText ?? "", JSON.stringify(n.context ?? null)].join("||");
  var nn3 = class {
    constructor() {
      this._tenantHttpService = null, this._entityHttpService = null, this._entityNameService = null, this.tenantById = /* @__PURE__ */ new Map(), this.tenantByEntityId = /* @__PURE__ */ new Map();
    }
    get tenantHttpService() {
      return this._tenantHttpService ?? (this._tenantHttpService = Qt(Zo));
    }
    get entityHttpService() {
      return this._entityHttpService ?? (this._entityHttpService = Qt(Ti));
    }
    get entityNameService() {
      return this._entityNameService ?? (this._entityNameService = Qt(es));
    }
    async requestConfigurationEntities(e, t, r, i) {
      const s = t.split(" "), o = { "Name.Value": { $regex: t, $options: "i" } }, a2 = { $and: s.map((S2) => ({ "Name.Value": { $regex: S2, $options: "i" } })) };
      let l = { $or: [o, a2] };
      if (r && r.length > 0) {
        const S2 = await this.getTenantById(r);
        if (S2) {
          const T4 = S2.Root ?? S2.Id;
          l = { $and: [l, { $or: [{ Path: T4 }, { Id: T4 }] }] };
        }
      }
      const c = { skip: 0, limit: 100 };
      return i = i || { Id: 1, Name: 1, Path: 1, GroupId: 1 }, ((await this.entityHttpService.queryConfiguration(e, l, c, i))?.data ?? []).sort((S2, T4) => (S2.Path?.length ?? 0) - (T4.Path?.length ?? 0));
    }
    async getTenantForEntity(e) {
      if (!e?.Id) return null;
      const t = this.tenantByEntityId.get(e.Id);
      if (t) return t;
      try {
        const r = await this.tenantHttpService.getTenantViewForEntityId(e.Id);
        return r && (this.cacheTenant(r), this.tenantByEntityId.set(e.Id, r)), r ?? null;
      } catch {
        return null;
      }
    }
    async getTenantById(e) {
      if (!e) return null;
      const t = this.tenantById.get(e);
      if (t) return t;
      try {
        const r = await this.tenantHttpService.getTenantViewById(e);
        return r && this.cacheTenant(r), r ?? null;
      } catch {
        return null;
      }
    }
    cacheTenant(e) {
      e && (this.tenantById.set(e.Id, e), e.Root && this.tenantById.set(e.Root, e), e.Id === e.Root && this.tenantByEntityId.set(e.Id, e));
    }
    async resolveSubtitle(e, t) {
      if (!e && (!t || t.length === 0)) return;
      const r = " / ", i = 3;
      let s = [];
      if (t && t.length > 0) try {
        const a2 = await this.entityNameService.resolvePathName(t, r);
        a2 && (s = a2.split(r).filter((l) => l.length > 0).slice(1));
      } catch {
      }
      const o = [];
      return e && o.push(e), s.length > i ? (o.push("\u2026"), o.push(...s.slice(-i))) : o.push(...s), o.length > 0 ? o.join(r) : void 0;
    }
  };
  var Xo2 = class extends nn3 {
    constructor() {
      super(), this.commands = [], this.registerBuiltinCommands();
    }
    async query(e, t) {
      const r = e.toLowerCase();
      return this.commands.filter((s) => {
        if (!r) return true;
        const o = s.title.toLowerCase().includes(r), a2 = s.keywords.some((l) => l.toLowerCase().includes(r));
        return o || a2;
      }).map((s) => new jo2({ title: s.title, icon: s.icon, context: { commandId: s.id }, onExecute: s.execute }));
    }
    registerBuiltinCommands() {
      this.commands.push({ id: "copy-access-token", title: "Copy Access Token", icon: "fas fa-key", keywords: ["token", "access", "copy", "clipboard", "auth", "jwt"], execute: () => {
        const e = localStorage.getItem("access_token") || "";
        if (!e) {
          console.warn("[CommandQuery] No access token found in localStorage.");
          return;
        }
        navigator.clipboard.writeText(e).then(() => console.info("[CommandQuery] Access token copied to clipboard."), (t) => console.error("[CommandQuery] Failed to copy access token:", t));
      } });
    }
  };
  var $t3 = class extends nn3 {
    constructor(e, t, r) {
      super(), this.entityType = e, this.defaultApp = t, this.iconOverride = r;
    }
    async query(e, t) {
      const r = await this.requestConfigurationEntities(this.entityType, e, t);
      return Promise.all(r.map(async (i) => {
        const s = await this.getTenantForEntity(i), o = s?.Id ?? s?.Root ?? i.Path?.[0] ?? i.Id, a2 = await this.resolveSubtitle(s?.Name, i.Path ?? []);
        return new Bi3({ category: this.entityType, title: i.Name.Value, subtitle: a2, icon: this.iconOverride ?? iC[this.entityType], infoText: s?.Name, tooltip: () => this.entityNameService.resolvePathName(i.Path ?? []), context: { app: this.defaultApp, tenantId: o, groupId: i.GroupId, detailId: i.Id } });
      }));
    }
  };
  var ea2 = class extends nn3 {
    constructor() {
      super(...arguments), this.DEFAULT_ICON = "fas fa-folder";
    }
    async query(e, t) {
      const r = { Name: 1, Path: 1, Type: 1, IsEntryPoint: 1 }, i = await this.requestConfigurationEntities(ae.Group, e, t, r);
      return Promise.all(i.map(async (s) => {
        const o = await this.getTenantForEntity(s), a2 = o?.Id ?? o?.Root ?? s.Path?.[0] ?? s.Id, l = await this.resolveSubtitle(o?.Name, s.Path ?? []);
        return new Wi3({ title: s.Name.Value, subtitle: l, infoText: o?.Name, icon: this.DEFAULT_ICON, tooltip: () => this.entityNameService.resolvePathName(s.Path ?? []), context: { tenantId: a2, groupId: s.Id, isEntryPoint: !!s.IsEntryPoint } });
      }));
    }
  };
  var Ae2;
  (function(n) {
    n.RICH = "mdc-tooltip--rich", n.SHOWN = "mdc-tooltip--shown", n.SHOWING = "mdc-tooltip--showing", n.SHOWING_TRANSITION = "mdc-tooltip--showing-transition", n.HIDE = "mdc-tooltip--hide", n.HIDE_TRANSITION = "mdc-tooltip--hide-transition", n.MULTILINE_TOOLTIP = "mdc-tooltip--multiline", n.SURFACE = "mdc-tooltip__surface", n.SURFACE_ANIMATION = "mdc-tooltip__surface-animation", n.TOOLTIP_CARET_TOP = "mdc-tooltip__caret-surface-top", n.TOOLTIP_CARET_BOTTOM = "mdc-tooltip__caret-surface-bottom";
  })(Ae2 || (Ae2 = {}));
  var De2 = { BOUNDED_ANCHOR_GAP: 4, UNBOUNDED_ANCHOR_GAP: 8, MIN_VIEWPORT_TOOLTIP_THRESHOLD: 8, HIDE_DELAY_MS: 600, SHOW_DELAY_MS: 500, MIN_HEIGHT: 24, MAX_WIDTH: 200, CARET_INDENTATION: 24, ANIMATION_SCALE: 0.8 };
  var cn = { ARIA_EXPANDED: "aria-expanded", ARIA_HASPOPUP: "aria-haspopup", PERSISTENT: "data-mdc-tooltip-persistent", HAS_CARET: "data-mdc-tooltip-has-caret" };
  var St2;
  (function(n) {
    n[n.DETECTED = 0] = "DETECTED", n[n.START = 1] = "START", n[n.CENTER = 2] = "CENTER", n[n.END = 3] = "END";
  })(St2 || (St2 = {}));
  var Mt3;
  (function(n) {
    n[n.DETECTED = 0] = "DETECTED", n[n.ABOVE = 1] = "ABOVE", n[n.BELOW = 2] = "BELOW";
  })(Mt3 || (Mt3 = {}));
  var On2;
  (function(n) {
    n[n.BOUNDED = 0] = "BOUNDED", n[n.UNBOUNDED = 1] = "UNBOUNDED";
  })(On2 || (On2 = {}));
  var R3 = { LEFT: "left", RIGHT: "right", CENTER: "center", TOP: "top", BOTTOM: "bottom" };
  var W3;
  (function(n) {
    n[n.DETECTED = 0] = "DETECTED", n[n.ABOVE_START = 1] = "ABOVE_START", n[n.ABOVE_CENTER = 2] = "ABOVE_CENTER", n[n.ABOVE_END = 3] = "ABOVE_END", n[n.TOP_SIDE_START = 4] = "TOP_SIDE_START", n[n.CENTER_SIDE_START = 5] = "CENTER_SIDE_START", n[n.BOTTOM_SIDE_START = 6] = "BOTTOM_SIDE_START", n[n.TOP_SIDE_END = 7] = "TOP_SIDE_END", n[n.CENTER_SIDE_END = 8] = "CENTER_SIDE_END", n[n.BOTTOM_SIDE_END = 9] = "BOTTOM_SIDE_END", n[n.BELOW_START = 10] = "BELOW_START", n[n.BELOW_CENTER = 11] = "BELOW_CENTER", n[n.BELOW_END = 12] = "BELOW_END";
  })(W3 || (W3 = {}));
  var ce3;
  (function(n) {
    n[n.ABOVE = 1] = "ABOVE", n[n.BELOW = 2] = "BELOW", n[n.SIDE_TOP = 3] = "SIDE_TOP", n[n.SIDE_CENTER = 4] = "SIDE_CENTER", n[n.SIDE_BOTTOM = 5] = "SIDE_BOTTOM";
  })(ce3 || (ce3 = {}));
  var Z2;
  (function(n) {
    n[n.START = 1] = "START", n[n.CENTER = 2] = "CENTER", n[n.END = 3] = "END", n[n.SIDE_START = 4] = "SIDE_START", n[n.SIDE_END = 5] = "SIDE_END";
  })(Z2 || (Z2 = {}));
  var ta2 = Ae2.RICH;
  var $n3 = Ae2.SHOWN;
  var zn3 = Ae2.SHOWING;
  var dn2 = Ae2.SHOWING_TRANSITION;
  var zt2 = Ae2.HIDE;
  var fn3 = Ae2.HIDE_TRANSITION;
  var na2 = Ae2.MULTILINE_TOOLTIP;
  var ur2;
  (function(n) {
    n.POLL_ANCHOR = "poll_anchor";
  })(ur2 || (ur2 = {}));
  var Zr2 = typeof window < "u";
  var ra2 = (function(n) {
    E(e, n);
    function e(t) {
      var r = n.call(this, A(A({}, e.defaultAdapter), t)) || this;
      return r.tooltipShown = false, r.anchorGap = De2.BOUNDED_ANCHOR_GAP, r.xTooltipPos = St2.DETECTED, r.yTooltipPos = Mt3.DETECTED, r.tooltipPositionWithCaret = W3.DETECTED, r.minViewportTooltipThreshold = De2.MIN_VIEWPORT_TOOLTIP_THRESHOLD, r.hideDelayMs = De2.HIDE_DELAY_MS, r.showDelayMs = De2.SHOW_DELAY_MS, r.anchorRect = null, r.parentRect = null, r.frameId = null, r.hideTimeout = null, r.showTimeout = null, r.addAncestorScrollEventListeners = new Array(), r.removeAncestorScrollEventListeners = new Array(), r.animFrame = new Gi2(), r.anchorBlurHandler = function(i) {
        r.handleAnchorBlur(i);
      }, r.documentClickHandler = function(i) {
        r.handleDocumentClick(i);
      }, r.documentKeydownHandler = function(i) {
        r.handleKeydown(i);
      }, r.tooltipMouseEnterHandler = function() {
        r.handleTooltipMouseEnter();
      }, r.tooltipMouseLeaveHandler = function() {
        r.handleTooltipMouseLeave();
      }, r.richTooltipFocusOutHandler = function(i) {
        r.handleRichTooltipFocusOut(i);
      }, r.windowScrollHandler = function() {
        r.handleWindowScrollEvent();
      }, r.windowResizeHandler = function() {
        r.handleWindowChangeEvent();
      }, r;
    }
    return Object.defineProperty(e, "defaultAdapter", { get: function() {
      return { getAttribute: function() {
        return null;
      }, setAttribute: function() {
      }, removeAttribute: function() {
      }, addClass: function() {
      }, hasClass: function() {
        return false;
      }, removeClass: function() {
      }, getComputedStyleProperty: function() {
        return "";
      }, setStyleProperty: function() {
      }, setSurfaceAnimationStyleProperty: function() {
      }, getViewportWidth: function() {
        return 0;
      }, getViewportHeight: function() {
        return 0;
      }, getTooltipSize: function() {
        return { width: 0, height: 0 };
      }, getAnchorBoundingRect: function() {
        return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
      }, getParentBoundingRect: function() {
        return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
      }, getAnchorAttribute: function() {
        return null;
      }, setAnchorAttribute: function() {
        return null;
      }, isRTL: function() {
        return false;
      }, anchorContainsElement: function() {
        return false;
      }, tooltipContainsElement: function() {
        return false;
      }, focusAnchorElement: function() {
      }, registerEventHandler: function() {
      }, deregisterEventHandler: function() {
      }, registerAnchorEventHandler: function() {
      }, deregisterAnchorEventHandler: function() {
      }, registerDocumentEventHandler: function() {
      }, deregisterDocumentEventHandler: function() {
      }, registerWindowEventHandler: function() {
      }, deregisterWindowEventHandler: function() {
      }, notifyHidden: function() {
      }, getTooltipCaretBoundingRect: function() {
        return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
      }, setTooltipCaretStyle: function() {
      }, clearTooltipCaretStyles: function() {
      }, getActiveElement: function() {
        return null;
      } };
    }, enumerable: false, configurable: true }), e.prototype.init = function() {
      this.richTooltip = this.adapter.hasClass(ta2), this.persistentTooltip = this.adapter.getAttribute(cn.PERSISTENT) === "true", this.interactiveTooltip = !!this.adapter.getAnchorAttribute(cn.ARIA_EXPANDED) && this.adapter.getAnchorAttribute(cn.ARIA_HASPOPUP) === "dialog", this.hasCaret = this.richTooltip && this.adapter.getAttribute(cn.HAS_CARET) === "true";
    }, e.prototype.isShown = function() {
      return this.tooltipShown;
    }, e.prototype.isRich = function() {
      return this.richTooltip;
    }, e.prototype.isPersistent = function() {
      return this.persistentTooltip;
    }, e.prototype.handleAnchorMouseEnter = function() {
      var t = this;
      this.tooltipShown ? this.show() : (this.clearHideTimeout(), this.showTimeout = setTimeout(function() {
        t.show();
      }, this.showDelayMs));
    }, e.prototype.handleAnchorTouchstart = function() {
      var t = this;
      this.showTimeout = setTimeout(function() {
        t.show();
      }, this.showDelayMs), this.adapter.registerWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
    }, e.prototype.preventContextMenuOnLongTouch = function(t) {
      t.preventDefault();
    }, e.prototype.handleAnchorTouchend = function() {
      this.clearShowTimeout(), this.isShown() || this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
    }, e.prototype.handleAnchorFocus = function(t) {
      var r = this, i = t.relatedTarget, s = i instanceof HTMLElement && this.adapter.tooltipContainsElement(i);
      s || (this.showTimeout = setTimeout(function() {
        r.show();
      }, this.showDelayMs));
    }, e.prototype.handleAnchorMouseLeave = function() {
      var t = this;
      this.clearShowTimeout(), this.hideTimeout = setTimeout(function() {
        t.hide();
      }, this.hideDelayMs);
    }, e.prototype.handleAnchorClick = function() {
      this.tooltipShown ? this.hide() : this.show();
    }, e.prototype.handleDocumentClick = function(t) {
      var r = t.target instanceof HTMLElement && (this.adapter.anchorContainsElement(t.target) || this.adapter.tooltipContainsElement(t.target));
      this.richTooltip && this.persistentTooltip && r || this.hide();
    }, e.prototype.handleKeydown = function(t) {
      var r = $t(t);
      if (r === ve.ESCAPE) {
        var i = this.adapter.getActiveElement(), s = i instanceof HTMLElement && this.adapter.tooltipContainsElement(i);
        s && this.adapter.focusAnchorElement(), this.hide();
      }
    }, e.prototype.handleAnchorBlur = function(t) {
      if (this.richTooltip) {
        var r = t.relatedTarget instanceof HTMLElement && this.adapter.tooltipContainsElement(t.relatedTarget);
        if (r || t.relatedTarget === null && this.interactiveTooltip) return;
      }
      this.hide();
    }, e.prototype.handleTooltipMouseEnter = function() {
      this.show();
    }, e.prototype.handleTooltipMouseLeave = function() {
      var t = this;
      this.clearShowTimeout(), this.hideTimeout = setTimeout(function() {
        t.hide();
      }, this.hideDelayMs);
    }, e.prototype.handleRichTooltipFocusOut = function(t) {
      var r = t.relatedTarget instanceof HTMLElement && (this.adapter.anchorContainsElement(t.relatedTarget) || this.adapter.tooltipContainsElement(t.relatedTarget));
      r || t.relatedTarget === null && this.interactiveTooltip || this.hide();
    }, e.prototype.handleWindowScrollEvent = function() {
      if (this.persistentTooltip) {
        this.handleWindowChangeEvent();
        return;
      }
      this.hide();
    }, e.prototype.handleWindowChangeEvent = function() {
      var t = this;
      this.animFrame.request(ur2.POLL_ANCHOR, function() {
        t.repositionTooltipOnAnchorMove();
      });
    }, e.prototype.show = function() {
      var t, r, i = this;
      if (this.clearHideTimeout(), this.clearShowTimeout(), !this.tooltipShown) {
        this.tooltipShown = true, this.adapter.removeAttribute("aria-hidden"), this.richTooltip && (this.interactiveTooltip && this.adapter.setAnchorAttribute("aria-expanded", "true"), this.adapter.registerEventHandler("focusout", this.richTooltipFocusOutHandler)), this.persistentTooltip || (this.adapter.registerEventHandler("mouseenter", this.tooltipMouseEnterHandler), this.adapter.registerEventHandler("mouseleave", this.tooltipMouseLeaveHandler)), this.adapter.removeClass(zt2), this.adapter.addClass(zn3), this.isTooltipMultiline() && !this.richTooltip && this.adapter.addClass(na2), this.anchorRect = this.adapter.getAnchorBoundingRect(), this.parentRect = this.adapter.getParentBoundingRect(), this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip(), this.adapter.registerAnchorEventHandler("blur", this.anchorBlurHandler), this.adapter.registerDocumentEventHandler("click", this.documentClickHandler), this.adapter.registerDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.registerWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler);
        try {
          for (var s = m(this.addAncestorScrollEventListeners), o = s.next(); !o.done; o = s.next()) {
            var a2 = o.value;
            a2();
          }
        } catch (l) {
          t = { error: l };
        } finally {
          try {
            o && !o.done && (r = s.return) && r.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        this.frameId = requestAnimationFrame(function() {
          i.clearAllAnimationClasses(), i.adapter.addClass($n3), i.adapter.addClass(dn2);
        });
      }
    }, e.prototype.hide = function() {
      var t, r;
      if (this.clearHideTimeout(), this.clearShowTimeout(), !!this.tooltipShown) {
        this.frameId && cancelAnimationFrame(this.frameId), this.tooltipShown = false, this.adapter.setAttribute("aria-hidden", "true"), this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler), this.richTooltip && this.interactiveTooltip && this.adapter.setAnchorAttribute("aria-expanded", "false"), this.persistentTooltip || (this.adapter.deregisterEventHandler("mouseenter", this.tooltipMouseEnterHandler), this.adapter.deregisterEventHandler("mouseleave", this.tooltipMouseLeaveHandler)), this.clearAllAnimationClasses(), this.adapter.addClass(zt2), this.adapter.addClass(fn3), this.adapter.removeClass($n3), this.adapter.deregisterAnchorEventHandler("blur", this.anchorBlurHandler), this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler), this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
        try {
          for (var i = m(this.removeAncestorScrollEventListeners), s = i.next(); !s.done; s = i.next()) {
            var o = s.value;
            o();
          }
        } catch (a2) {
          t = { error: a2 };
        } finally {
          try {
            s && !s.done && (r = i.return) && r.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }
    }, e.prototype.handleTransitionEnd = function() {
      var t = this.adapter.hasClass(zt2);
      this.adapter.removeClass(zn3), this.adapter.removeClass(dn2), this.adapter.removeClass(zt2), this.adapter.removeClass(fn3), t && this.showTimeout === null && this.adapter.notifyHidden();
    }, e.prototype.clearAllAnimationClasses = function() {
      this.adapter.removeClass(dn2), this.adapter.removeClass(fn3);
    }, e.prototype.setTooltipPosition = function(t) {
      var r = t.xPos, i = t.yPos, s = t.withCaretPos;
      if (this.hasCaret && s) {
        this.tooltipPositionWithCaret = s;
        return;
      }
      r && (this.xTooltipPos = r), i && (this.yTooltipPos = i);
    }, e.prototype.setAnchorBoundaryType = function(t) {
      t === On2.UNBOUNDED ? this.anchorGap = De2.UNBOUNDED_ANCHOR_GAP : this.anchorGap = De2.BOUNDED_ANCHOR_GAP;
    }, e.prototype.setShowDelay = function(t) {
      this.showDelayMs = t;
    }, e.prototype.setHideDelay = function(t) {
      this.hideDelayMs = t;
    }, e.prototype.isTooltipMultiline = function() {
      var t = this.adapter.getTooltipSize();
      return t.height > De2.MIN_HEIGHT && t.width >= De2.MAX_WIDTH;
    }, e.prototype.positionPlainTooltip = function() {
      var t = this.calculateTooltipStyles(this.anchorRect), r = t.top, i = t.yTransformOrigin, s = t.left, o = t.xTransformOrigin, a2 = Zr2 ? Ur2(window, "transform") : "transform";
      this.adapter.setSurfaceAnimationStyleProperty(a2 + "-origin", o + " " + i), this.adapter.setStyleProperty("top", r + "px"), this.adapter.setStyleProperty("left", s + "px");
    }, e.prototype.positionRichTooltip = function() {
      var t, r, i, s, o = this.adapter.getComputedStyleProperty("width");
      this.adapter.setStyleProperty("width", o);
      var a2 = this.hasCaret ? this.calculateTooltipWithCaretStyles(this.anchorRect) : this.calculateTooltipStyles(this.anchorRect), l = a2.top, c = a2.yTransformOrigin, p = a2.left, v2 = a2.xTransformOrigin, S2 = Zr2 ? Ur2(window, "transform") : "transform";
      this.adapter.setSurfaceAnimationStyleProperty(S2 + "-origin", v2 + " " + c);
      var T4 = p - ((r = (t = this.parentRect) === null || t === void 0 ? void 0 : t.left) !== null && r !== void 0 ? r : 0), b2 = l - ((s = (i = this.parentRect) === null || i === void 0 ? void 0 : i.top) !== null && s !== void 0 ? s : 0);
      this.adapter.setStyleProperty("top", b2 + "px"), this.adapter.setStyleProperty("left", T4 + "px");
    }, e.prototype.calculateTooltipStyles = function(t) {
      if (!t) return { top: 0, left: 0 };
      var r = this.adapter.getTooltipSize(), i = this.calculateYTooltipDistance(t, r.height), s = this.calculateXTooltipDistance(t, r.width);
      return { top: i.distance, yTransformOrigin: i.yTransformOrigin, left: s.distance, xTransformOrigin: s.xTransformOrigin };
    }, e.prototype.calculateXTooltipDistance = function(t, r) {
      var i = !this.adapter.isRTL(), s, o, a2, l, c;
      this.richTooltip ? (s = i ? t.left - r : t.right, o = i ? t.right : t.left - r, l = i ? R3.RIGHT : R3.LEFT, c = i ? R3.LEFT : R3.RIGHT) : (s = i ? t.left : t.right - r, o = i ? t.right - r : t.left, a2 = t.left + (t.width - r) / 2, l = i ? R3.LEFT : R3.RIGHT, c = i ? R3.RIGHT : R3.LEFT);
      var p = this.richTooltip ? this.determineValidPositionOptions(s, o) : this.determineValidPositionOptions(a2, s, o);
      if (this.xTooltipPos === St2.START && p.has(s)) return { distance: s, xTransformOrigin: l };
      if (this.xTooltipPos === St2.END && p.has(o)) return { distance: o, xTransformOrigin: c };
      if (this.xTooltipPos === St2.CENTER && p.has(a2)) return { distance: a2, xTransformOrigin: R3.CENTER };
      var v2 = this.richTooltip ? [{ distance: o, xTransformOrigin: c }, { distance: s, xTransformOrigin: l }] : [{ distance: a2, xTransformOrigin: R3.CENTER }, { distance: s, xTransformOrigin: l }, { distance: o, xTransformOrigin: c }], S2 = v2.find(function(_4) {
        var M3 = _4.distance;
        return p.has(M3);
      });
      if (S2) return S2;
      if (t.left < 0) return { distance: this.minViewportTooltipThreshold, xTransformOrigin: R3.LEFT };
      var T4 = this.adapter.getViewportWidth(), b2 = T4 - (r + this.minViewportTooltipThreshold);
      return { distance: b2, xTransformOrigin: R3.RIGHT };
    }, e.prototype.determineValidPositionOptions = function() {
      for (var t, r, i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
      var o = /* @__PURE__ */ new Set(), a2 = /* @__PURE__ */ new Set();
      try {
        for (var l = m(i), c = l.next(); !c.done; c = l.next()) {
          var p = c.value;
          this.positionHonorsViewportThreshold(p) ? o.add(p) : this.positionDoesntCollideWithViewport(p) && a2.add(p);
        }
      } catch (v2) {
        t = { error: v2 };
      } finally {
        try {
          c && !c.done && (r = l.return) && r.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      return o.size ? o : a2;
    }, e.prototype.positionHonorsViewportThreshold = function(t) {
      var r = this.adapter.getViewportWidth(), i = this.adapter.getTooltipSize().width;
      return t + i <= r - this.minViewportTooltipThreshold && t >= this.minViewportTooltipThreshold;
    }, e.prototype.positionDoesntCollideWithViewport = function(t) {
      var r = this.adapter.getViewportWidth(), i = this.adapter.getTooltipSize().width;
      return t + i <= r && t >= 0;
    }, e.prototype.calculateYTooltipDistance = function(t, r) {
      var i = t.bottom + this.anchorGap, s = t.top - (this.anchorGap + r), o = this.determineValidYPositionOptions(s, i);
      return this.yTooltipPos === Mt3.ABOVE && o.has(s) ? { distance: s, yTransformOrigin: R3.BOTTOM } : this.yTooltipPos === Mt3.BELOW && o.has(i) ? { distance: i, yTransformOrigin: R3.TOP } : o.has(i) ? { distance: i, yTransformOrigin: R3.TOP } : o.has(s) ? { distance: s, yTransformOrigin: R3.BOTTOM } : { distance: i, yTransformOrigin: R3.TOP };
    }, e.prototype.determineValidYPositionOptions = function(t, r) {
      var i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
      return this.yPositionHonorsViewportThreshold(t) ? i.add(t) : this.yPositionDoesntCollideWithViewport(t) && s.add(t), this.yPositionHonorsViewportThreshold(r) ? i.add(r) : this.yPositionDoesntCollideWithViewport(r) && s.add(r), i.size ? i : s;
    }, e.prototype.yPositionHonorsViewportThreshold = function(t) {
      var r = this.adapter.getViewportHeight(), i = this.adapter.getTooltipSize().height;
      return t + i + this.minViewportTooltipThreshold <= r && t >= this.minViewportTooltipThreshold;
    }, e.prototype.yPositionDoesntCollideWithViewport = function(t) {
      var r = this.adapter.getViewportHeight(), i = this.adapter.getTooltipSize().height;
      return t + i <= r && t >= 0;
    }, e.prototype.calculateTooltipWithCaretStyles = function(t) {
      this.adapter.clearTooltipCaretStyles();
      var r = this.adapter.getTooltipCaretBoundingRect();
      if (!t || !r) return { position: W3.DETECTED, top: 0, left: 0 };
      var i = r.width / De2.ANIMATION_SCALE, s = r.height / De2.ANIMATION_SCALE / 2, o = this.adapter.getTooltipSize(), a2 = this.calculateYWithCaretDistanceOptions(t, o.height, { caretWidth: i, caretHeight: s }), l = this.calculateXWithCaretDistanceOptions(t, o.width, { caretWidth: i, caretHeight: s }), c = this.validateTooltipWithCaretDistances(a2, l);
      c.size < 1 && (c = this.generateBackupPositionOption(t, o, { caretWidth: i, caretHeight: s }));
      var p = this.determineTooltipWithCaretDistance(c), v2 = p.position, S2 = p.xDistance, T4 = p.yDistance, b2 = this.setCaretPositionStyles(v2, { caretWidth: i, caretHeight: s }), _4 = b2.yTransformOrigin, M3 = b2.xTransformOrigin;
      return { yTransformOrigin: _4, xTransformOrigin: M3, top: T4, left: S2 };
    }, e.prototype.calculateXWithCaretDistanceOptions = function(t, r, i) {
      var s = i.caretWidth, o = i.caretHeight, a2 = !this.adapter.isRTL(), l = t.left + t.width / 2, c = t.left - (r + this.anchorGap + o), p = t.right + this.anchorGap + o, v2 = a2 ? c : p, S2 = a2 ? p : c, T4 = l - (De2.CARET_INDENTATION + s / 2), b2 = l - (r - De2.CARET_INDENTATION - s / 2), _4 = a2 ? T4 : b2, M3 = a2 ? b2 : T4, k3 = l - r / 2, Q2 = /* @__PURE__ */ new Map([[Z2.START, _4], [Z2.CENTER, k3], [Z2.END, M3], [Z2.SIDE_END, S2], [Z2.SIDE_START, v2]]);
      return Q2;
    }, e.prototype.calculateYWithCaretDistanceOptions = function(t, r, i) {
      var s = i.caretWidth, o = i.caretHeight, a2 = t.top + t.height / 2, l = t.bottom + this.anchorGap + o, c = t.top - (this.anchorGap + r + o), p = a2 - (De2.CARET_INDENTATION + s / 2), v2 = a2 - r / 2, S2 = a2 - (r - De2.CARET_INDENTATION - s / 2), T4 = /* @__PURE__ */ new Map([[ce3.ABOVE, c], [ce3.BELOW, l], [ce3.SIDE_TOP, p], [ce3.SIDE_CENTER, v2], [ce3.SIDE_BOTTOM, S2]]);
      return T4;
    }, e.prototype.repositionTooltipOnAnchorMove = function() {
      var t = this.adapter.getAnchorBoundingRect();
      !t || !this.anchorRect || (t.top !== this.anchorRect.top || t.left !== this.anchorRect.left || t.height !== this.anchorRect.height || t.width !== this.anchorRect.width) && (this.anchorRect = t, this.parentRect = this.adapter.getParentBoundingRect(), this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip());
    }, e.prototype.validateTooltipWithCaretDistances = function(t, r) {
      var i, s, o, a2, l, c, p = /* @__PURE__ */ new Map(), v2 = /* @__PURE__ */ new Map(), S2 = /* @__PURE__ */ new Map([[ce3.ABOVE, [Z2.START, Z2.CENTER, Z2.END]], [ce3.BELOW, [Z2.START, Z2.CENTER, Z2.END]], [ce3.SIDE_TOP, [Z2.SIDE_START, Z2.SIDE_END]], [ce3.SIDE_CENTER, [Z2.SIDE_START, Z2.SIDE_END]], [ce3.SIDE_BOTTOM, [Z2.SIDE_START, Z2.SIDE_END]]]);
      try {
        for (var T4 = m(S2.keys()), b2 = T4.next(); !b2.done; b2 = T4.next()) {
          var _4 = b2.value, M3 = t.get(_4);
          if (this.yPositionHonorsViewportThreshold(M3)) try {
            for (var k3 = (o = void 0, m(S2.get(_4))), Q2 = k3.next(); !Q2.done; Q2 = k3.next()) {
              var X2 = Q2.value, j2 = r.get(X2);
              if (this.positionHonorsViewportThreshold(j2)) {
                var E2 = this.caretPositionOptionsMapping(X2, _4);
                p.set(E2, { xDistance: j2, yDistance: M3 });
              }
            }
          } catch (ee) {
            o = { error: ee };
          } finally {
            try {
              Q2 && !Q2.done && (a2 = k3.return) && a2.call(k3);
            } finally {
              if (o) throw o.error;
            }
          }
          if (this.yPositionDoesntCollideWithViewport(M3)) try {
            for (var A3 = (l = void 0, m(S2.get(_4))), $4 = A3.next(); !$4.done; $4 = A3.next()) {
              var X2 = $4.value, j2 = r.get(X2);
              if (this.positionDoesntCollideWithViewport(j2)) {
                var E2 = this.caretPositionOptionsMapping(X2, _4);
                v2.set(E2, { xDistance: j2, yDistance: M3 });
              }
            }
          } catch (ee) {
            l = { error: ee };
          } finally {
            try {
              $4 && !$4.done && (c = A3.return) && c.call(A3);
            } finally {
              if (l) throw l.error;
            }
          }
        }
      } catch (ee) {
        i = { error: ee };
      } finally {
        try {
          b2 && !b2.done && (s = T4.return) && s.call(T4);
        } finally {
          if (i) throw i.error;
        }
      }
      return p.size ? p : v2;
    }, e.prototype.generateBackupPositionOption = function(t, r, i) {
      var s = !this.adapter.isRTL(), o, a2;
      if (t.left < 0) o = this.minViewportTooltipThreshold + i.caretHeight, a2 = s ? Z2.END : Z2.START;
      else {
        var l = this.adapter.getViewportWidth();
        o = l - (r.width + this.minViewportTooltipThreshold + i.caretHeight), a2 = s ? Z2.START : Z2.END;
      }
      var c, p;
      if (t.top < 0) c = this.minViewportTooltipThreshold + i.caretHeight, p = ce3.BELOW;
      else {
        var v2 = this.adapter.getViewportHeight();
        c = v2 - (r.height + this.minViewportTooltipThreshold + i.caretHeight), p = ce3.ABOVE;
      }
      var S2 = this.caretPositionOptionsMapping(a2, p);
      return /* @__PURE__ */ new Map([[S2, { xDistance: o, yDistance: c }]]);
    }, e.prototype.determineTooltipWithCaretDistance = function(t) {
      if (t.has(this.tooltipPositionWithCaret)) {
        var r = t.get(this.tooltipPositionWithCaret);
        return { position: this.tooltipPositionWithCaret, xDistance: r.xDistance, yDistance: r.yDistance };
      }
      var i = [W3.ABOVE_START, W3.ABOVE_CENTER, W3.ABOVE_END, W3.TOP_SIDE_START, W3.CENTER_SIDE_START, W3.BOTTOM_SIDE_START, W3.TOP_SIDE_END, W3.CENTER_SIDE_END, W3.BOTTOM_SIDE_END, W3.BELOW_START, W3.BELOW_CENTER, W3.BELOW_END], s = i.find(function(a2) {
        return t.has(a2);
      }), o = t.get(s);
      return { position: s, xDistance: o.xDistance, yDistance: o.yDistance };
    }, e.prototype.caretPositionOptionsMapping = function(t, r) {
      switch (r) {
        case ce3.ABOVE:
          if (t === Z2.START) return W3.ABOVE_START;
          if (t === Z2.CENTER) return W3.ABOVE_CENTER;
          if (t === Z2.END) return W3.ABOVE_END;
          break;
        case ce3.BELOW:
          if (t === Z2.START) return W3.BELOW_START;
          if (t === Z2.CENTER) return W3.BELOW_CENTER;
          if (t === Z2.END) return W3.BELOW_END;
          break;
        case ce3.SIDE_TOP:
          if (t === Z2.SIDE_START) return W3.TOP_SIDE_START;
          if (t === Z2.SIDE_END) return W3.TOP_SIDE_END;
          break;
        case ce3.SIDE_CENTER:
          if (t === Z2.SIDE_START) return W3.CENTER_SIDE_START;
          if (t === Z2.SIDE_END) return W3.CENTER_SIDE_END;
          break;
        case ce3.SIDE_BOTTOM:
          if (t === Z2.SIDE_START) return W3.BOTTOM_SIDE_START;
          if (t === Z2.SIDE_END) return W3.BOTTOM_SIDE_END;
          break;
      }
      throw new Error("MDCTooltipFoundation: Invalid caret position of " + t + ", " + r);
    }, e.prototype.setCaretPositionStyles = function(t, r) {
      var i, s, o = this.calculateCaretPositionOnTooltip(t, r);
      if (!o) return { yTransformOrigin: 0, xTransformOrigin: 0 };
      this.adapter.clearTooltipCaretStyles(), this.adapter.setTooltipCaretStyle(o.yAlignment, o.yAxisPx), this.adapter.setTooltipCaretStyle(o.xAlignment, o.xAxisPx);
      var a2 = o.skew * (Math.PI / 180), l = Math.cos(a2);
      this.adapter.setTooltipCaretStyle("transform", "rotate(" + o.rotation + "deg) skewY(" + o.skew + "deg) scaleX(" + l + ")"), this.adapter.setTooltipCaretStyle("transform-origin", o.xAlignment + " " + o.yAlignment);
      try {
        for (var c = m(o.caretCorners), p = c.next(); !p.done; p = c.next()) {
          var v2 = p.value;
          this.adapter.setTooltipCaretStyle(v2, "0");
        }
      } catch (S2) {
        i = { error: S2 };
      } finally {
        try {
          p && !p.done && (s = c.return) && s.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      return { yTransformOrigin: o.yTransformOrigin, xTransformOrigin: o.xTransformOrigin };
    }, e.prototype.calculateCaretPositionOnTooltip = function(t, r) {
      var i = !this.adapter.isRTL(), s = this.adapter.getComputedStyleProperty("width"), o = this.adapter.getComputedStyleProperty("height");
      if (!(!s || !o || !r)) {
        var a2 = "calc((" + s + " - " + r.caretWidth + "px) / 2)", l = "calc((" + o + " - " + r.caretWidth + "px) / 2)", c = "0", p = De2.CARET_INDENTATION + "px", v2 = "calc(" + s + " - " + p + ")", S2 = "calc(" + o + " - " + p + ")", T4 = 35, b2 = Math.abs(90 - T4), _4 = ["border-bottom-right-radius", "border-top-left-radius"], M3 = ["border-bottom-left-radius", "border-top-right-radius"], k3 = 20;
        switch (t) {
          case W3.BELOW_CENTER:
            return { yAlignment: R3.TOP, xAlignment: R3.LEFT, yAxisPx: c, xAxisPx: a2, rotation: -1 * T4, skew: -1 * k3, xTransformOrigin: a2, yTransformOrigin: c, caretCorners: _4 };
          case W3.BELOW_END:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.RIGHT : R3.LEFT, yAxisPx: c, xAxisPx: p, rotation: i ? T4 : -1 * T4, skew: i ? k3 : -1 * k3, xTransformOrigin: i ? v2 : p, yTransformOrigin: c, caretCorners: i ? M3 : _4 };
          case W3.BELOW_START:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.LEFT : R3.RIGHT, yAxisPx: c, xAxisPx: p, rotation: i ? -1 * T4 : T4, skew: i ? -1 * k3 : k3, xTransformOrigin: i ? p : v2, yTransformOrigin: c, caretCorners: i ? _4 : M3 };
          case W3.TOP_SIDE_END:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.LEFT : R3.RIGHT, yAxisPx: p, xAxisPx: c, rotation: i ? b2 : -1 * b2, skew: i ? -1 * k3 : k3, xTransformOrigin: i ? c : s, yTransformOrigin: p, caretCorners: i ? _4 : M3 };
          case W3.CENTER_SIDE_END:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.LEFT : R3.RIGHT, yAxisPx: l, xAxisPx: c, rotation: i ? b2 : -1 * b2, skew: i ? -1 * k3 : k3, xTransformOrigin: i ? c : s, yTransformOrigin: l, caretCorners: i ? _4 : M3 };
          case W3.BOTTOM_SIDE_END:
            return { yAlignment: R3.BOTTOM, xAlignment: i ? R3.LEFT : R3.RIGHT, yAxisPx: p, xAxisPx: c, rotation: i ? -1 * b2 : b2, skew: i ? k3 : -1 * k3, xTransformOrigin: i ? c : s, yTransformOrigin: S2, caretCorners: i ? M3 : _4 };
          case W3.TOP_SIDE_START:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.RIGHT : R3.LEFT, yAxisPx: p, xAxisPx: c, rotation: i ? -1 * b2 : b2, skew: i ? k3 : -1 * k3, xTransformOrigin: i ? s : c, yTransformOrigin: p, caretCorners: i ? M3 : _4 };
          case W3.CENTER_SIDE_START:
            return { yAlignment: R3.TOP, xAlignment: i ? R3.RIGHT : R3.LEFT, yAxisPx: l, xAxisPx: c, rotation: i ? -1 * b2 : b2, skew: i ? k3 : -1 * k3, xTransformOrigin: i ? s : c, yTransformOrigin: l, caretCorners: i ? M3 : _4 };
          case W3.BOTTOM_SIDE_START:
            return { yAlignment: R3.BOTTOM, xAlignment: i ? R3.RIGHT : R3.LEFT, yAxisPx: p, xAxisPx: c, rotation: i ? b2 : -1 * b2, skew: i ? -1 * k3 : k3, xTransformOrigin: i ? s : c, yTransformOrigin: S2, caretCorners: i ? _4 : M3 };
          case W3.ABOVE_CENTER:
            return { yAlignment: R3.BOTTOM, xAlignment: R3.LEFT, yAxisPx: c, xAxisPx: a2, rotation: T4, skew: k3, xTransformOrigin: a2, yTransformOrigin: o, caretCorners: M3 };
          case W3.ABOVE_END:
            return { yAlignment: R3.BOTTOM, xAlignment: i ? R3.RIGHT : R3.LEFT, yAxisPx: c, xAxisPx: p, rotation: i ? -1 * T4 : T4, skew: i ? -1 * k3 : k3, xTransformOrigin: i ? v2 : p, yTransformOrigin: o, caretCorners: i ? _4 : M3 };
          default:
          case W3.ABOVE_START:
            return { yAlignment: R3.BOTTOM, xAlignment: i ? R3.LEFT : R3.RIGHT, yAxisPx: c, xAxisPx: p, rotation: i ? T4 : -1 * T4, skew: i ? k3 : -1 * k3, xTransformOrigin: i ? p : v2, yTransformOrigin: o, caretCorners: i ? M3 : _4 };
        }
      }
    }, e.prototype.clearShowTimeout = function() {
      this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null);
    }, e.prototype.clearHideTimeout = function() {
      this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null);
    }, e.prototype.attachScrollHandler = function(t) {
      var r = this;
      this.addAncestorScrollEventListeners.push(function() {
        t("scroll", r.windowScrollHandler);
      });
    }, e.prototype.removeScrollHandler = function(t) {
      var r = this;
      this.removeAncestorScrollEventListeners.push(function() {
        t("scroll", r.windowScrollHandler);
      });
    }, e.prototype.destroy = function() {
      var t, r;
      this.frameId && (cancelAnimationFrame(this.frameId), this.frameId = null), this.clearHideTimeout(), this.clearShowTimeout(), this.adapter.removeClass($n3), this.adapter.removeClass(dn2), this.adapter.removeClass(zn3), this.adapter.removeClass(zt2), this.adapter.removeClass(fn3), this.richTooltip && this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler), this.persistentTooltip || (this.adapter.deregisterEventHandler("mouseenter", this.tooltipMouseEnterHandler), this.adapter.deregisterEventHandler("mouseleave", this.tooltipMouseLeaveHandler)), this.adapter.deregisterAnchorEventHandler("blur", this.anchorBlurHandler), this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler), this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
      try {
        for (var i = m(this.removeAncestorScrollEventListeners), s = i.next(); !s.done; s = i.next()) {
          var o = s.value;
          o();
        }
      } catch (a2) {
        t = { error: a2 };
      } finally {
        try {
          s && !s.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.animFrame.cancelAll();
    }, e;
  })(Nc);
  var ia2 = 0;
  var sa2 = vs("<div><div><!></div></div>");
  function oa2(n, e) {
    Wr(e, true);
    const t = () => ZE(H3, "$anchor", r), [r, i] = tC();
    let s = q2(e, "use", 19, () => []), o = q2(e, "class", 3, ""), a2 = q2(e, "style", 3, ""), l = q2(e, "id", 19, () => "SMUI-tooltip-" + ia2++), c = q2(e, "unbounded", 3, false), p = q2(e, "xPos", 3, "detected"), v2 = q2(e, "yPos", 3, "detected"), S2 = q2(e, "persistent", 3, false), T4 = q2(e, "interactive", 19, S2), b2 = q2(e, "hideFromScreenreader", 3, false), _4 = q2(e, "showDelay", 3, void 0), M3 = q2(e, "hideDelay", 3, void 0), k3 = q2(e, "surface$class", 3, ""), Q2 = q2(e, "surface$style", 3, ""), X2 = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "style", "id", "unbounded", "xPos", "yPos", "persistent", "interactive", "hideFromScreenreader", "showDelay", "hideDelay", "surface$class", "surface$style", "children"]), j2, E2 = on(void 0), A3 = new Yv(), $4 = {}, ee = Jt({}), ge3 = Jt({}), D3 = Jt({}), V3 = Jt({}), H3 = Tt("SMUI:tooltip:wrapper:anchor"), z5 = Tt("SMUI:tooltip:wrapper:tooltip");
    const q4 = Tt("SMUI:tooltip:rich"), ve3 = Gt(() => ({ role: q4 && T4() ? "dialog" : "tooltip", tabindex: q4 && S2() ? -1 : void 0 }));
    let fe3;
    Tn(() => {
      F2(E2) && fe3 !== t() && (fe3 && qe2(fe3), t() && Ke(t()), fe3 = t());
    }), Tn(() => {
      F2(E2) && F2(E2).setAnchorBoundaryType(On2[c() ? "UNBOUNDED" : "BOUNDED"]);
    }), Tn(() => {
      F2(E2) && F2(E2).setTooltipPosition({ xPos: St2[p().toUpperCase()], yPos: Mt3[v2().toUpperCase()] });
    }), Tn(() => {
      F2(E2) && _4() != null && F2(E2).setShowDelay(_4());
    }), Tn(() => {
      F2(E2) && M3() != null && F2(E2).setHideDelay(M3());
    }), La(() => (Mt(E2, new ra2({ getAttribute: he2, setAttribute: Pe, removeAttribute: Te2, addClass: mt2, hasClass: rt4, removeClass: B4, getComputedStyleProperty: (m2) => {
      const I4 = K2();
      let xe3 = getComputedStyle(I4).getPropertyValue(m2);
      return xe3 === "auto" && (I4.classList.add("smui-banner--force-show"), xe3 = getComputedStyle(I4).getPropertyValue(m2), I4.classList.remove("smui-banner--force-show")), xe3;
    }, setStyleProperty: we3, setSurfaceAnimationStyleProperty: ae3, getViewportWidth: () => window.innerWidth, getViewportHeight: () => window.innerHeight, getTooltipSize: () => {
      const m2 = K2();
      let I4 = { width: m2.offsetWidth, height: m2.offsetHeight };
      return (I4.width === 0 || I4.height === 0) && (m2.classList.add("smui-banner--force-show"), I4 = { width: m2.offsetWidth, height: m2.offsetHeight }, m2.classList.remove("smui-banner--force-show")), I4;
    }, getAnchorBoundingRect: () => t() ? t().getBoundingClientRect() : null, getParentBoundingRect: () => {
      let m2 = K2().parentElement;
      return q4 || (m2 = document.body), m2?.getBoundingClientRect() || null;
    }, getAnchorAttribute: (m2) => t() ? t().getAttribute(m2) : null, setAnchorAttribute: (m2, I4) => {
      t() && t().setAttribute(m2, I4);
    }, isRTL: () => getComputedStyle(K2()).direction === "rtl", anchorContainsElement: (m2) => !!(t() && t().contains(m2)), tooltipContainsElement: (m2) => K2().contains(m2), focusAnchorElement: () => {
      t() && t().focus();
    }, registerEventHandler: (m2, I4) => A3.on(K2(), m2, I4), deregisterEventHandler: (m2, I4) => A3.off(K2(), m2, I4), registerAnchorEventHandler: (m2, I4) => t() && A3.on(t(), m2, I4), deregisterAnchorEventHandler: (m2, I4) => t() && A3.off(t(), m2, I4), registerDocumentEventHandler: (m2, I4) => A3.on(document.body, m2, I4), deregisterDocumentEventHandler: (m2, I4) => A3.off(document.body, m2, I4), registerWindowEventHandler: (m2, I4) => A3.on(window, m2, I4, m2 === "scroll" && { capture: true, passive: true } || void 0), deregisterWindowEventHandler: (m2, I4) => A3.off(window, m2, I4), notifyHidden: () => {
      Yo(K2(), "SMUITooltipHidden");
    }, getTooltipCaretBoundingRect: () => {
      const m2 = K2().querySelector(`.${Ae2.TOOLTIP_CARET_TOP}`);
      return m2 ? m2.getBoundingClientRect() : null;
    }, setTooltipCaretStyle: (m2, I4) => {
      const xe3 = K2().querySelector(`.${Ae2.TOOLTIP_CARET_TOP}`), yt2 = K2().querySelector(`.${Ae2.TOOLTIP_CARET_BOTTOM}`);
      !xe3 || !yt2 || (xe3.style.setProperty(m2, I4), yt2.style.setProperty(m2, I4));
    }, clearTooltipCaretStyles: () => {
      const m2 = K2().querySelector(`.${Ae2.TOOLTIP_CARET_TOP}`), I4 = K2().querySelector(`.${Ae2.TOOLTIP_CARET_BOTTOM}`);
      !m2 || !I4 || (m2.removeAttribute("style"), I4.removeAttribute("style"));
    }, getActiveElement: () => document.activeElement }), true), eC(z5, j2), () => {
      t() && qe2(t()), A3.clear();
    })), Fa(() => {
      !q4 && typeof document < "u" && document.body === K2()?.parentElement && $4.parent !== K2()?.parentElement && $4.parent?.insertBefore && $4.nextSibling && $4.parent?.insertBefore(K2(), $4.nextSibling);
    });
    function qe2(m2) {
      A3.off(m2, "focusout", ke2), q4 && S2() ? (A3.off(m2, "click", Ye2), A3.off(m2, "keydown", Ye2)) : (A3.off(m2, "mouseenter", be2), A3.off(m2, "focusin", We2), A3.off(m2, "mouseleave", Ee2), A3.off(m2, "touchstart", ue2), A3.off(m2, "touchend", Ne2)), q4 && T4() ? (m2.removeAttribute("aria-haspopup"), m2.removeAttribute("aria-expanded"), m2.removeAttribute("data-tooltip-id")) : m2.removeAttribute("aria-describedby"), F2(E2)?.destroy();
    }
    function Ke(m2) {
      A3.on(m2, "focusout", ke2), q4 && S2() ? (A3.on(m2, "click", Ye2), A3.on(m2, "keydown", Ye2)) : (A3.on(m2, "mouseenter", be2), A3.on(m2, "focusin", We2), A3.on(m2, "mouseleave", Ee2), A3.on(m2, "touchstart", ue2), A3.on(m2, "touchend", Ne2)), q4 && T4() ? (m2.setAttribute("aria-haspopup", "dialog"), m2.setAttribute("aria-expanded", "false"), m2.setAttribute("data-tooltip-id", l())) : m2.setAttribute("aria-describedby", l()), q4 || Qe2(), F2(E2)?.init();
    }
    function rt4(m2) {
      return m2 in ee ? ee[m2] : K2().classList.contains(m2);
    }
    function mt2(m2) {
      ee[m2] || (ee[m2] = true);
    }
    function B4(m2) {
      (!(m2 in ee) || ee[m2]) && (ee[m2] = false);
    }
    function we3(m2, I4) {
      ge3[m2] != I4 && (I4 === "" || I4 == null ? delete ge3[m2] : ge3[m2] = I4);
    }
    function ae3(m2, I4) {
      V3[m2] != I4 && (I4 === "" || I4 == null ? delete V3[m2] : V3[m2] = I4);
    }
    function he2(m2) {
      return m2 in D3 ? D3[m2] ?? null : K2().getAttribute(m2);
    }
    function Pe(m2, I4) {
      D3[m2] !== I4 && (D3[m2] = I4);
    }
    function Te2(m2) {
      (!(m2 in D3) || D3[m2] != null) && (D3[m2] = void 0);
    }
    function ke2(m2) {
      K2().contains(m2.relatedTarget) || F2(E2) && F2(E2).hide();
    }
    function Ye2(m2) {
      m2.type === "keydown" && m2.key !== "Enter" && m2.key !== " " || F2(E2) && F2(E2).handleAnchorClick();
    }
    function be2() {
      F2(E2) && F2(E2).handleAnchorMouseEnter();
    }
    function We2(m2) {
      F2(E2) && F2(E2).handleAnchorFocus(m2);
    }
    function Ee2() {
      F2(E2) && F2(E2).handleAnchorMouseLeave();
    }
    function ue2() {
      F2(E2) && F2(E2).handleAnchorTouchstart();
    }
    function Ne2() {
      F2(E2) && F2(E2).handleAnchorTouchend();
    }
    function Qe2() {
      t() && document.body !== K2().parentNode && ($4.parent = K2().parentElement ?? void 0, $4.nextSibling = K2().nextElementSibling ?? void 0, document.body.appendChild(K2()));
    }
    function pt2(m2) {
      F2(E2) && F2(E2).attachScrollHandler(m2);
    }
    function je2(m2) {
      F2(E2) && F2(E2).removeScrollHandler(m2);
    }
    function K2() {
      return j2;
    }
    var Ct2 = { attachScrollHandler: pt2, removeScrollHandler: je2, getElement: K2 }, me3 = sa2(), U4 = (m2) => {
      F2(E2) && F2(E2).handleTransitionEnd(), e.ontransitionend?.(m2);
    };
    Js(me3, (m2, I4, xe3) => ({ class: m2, style: I4, "aria-hidden": "true", id: l(), "data-mdc-tooltip-persist": q4 && S2() ? "true" : void 0, "data-mdc-tooltip-persistent": q4 && S2() ? "true" : void 0, "data-mdc-tooltip-has-caret": void 0, "data-hide-tooltip-from-screenreader": b2() ? "true" : void 0, ...F2(ve3), ...D3, ...xe3, ontransitionend: U4 }), [() => bs({ "mdc-tooltip": true, "mdc-tooltip--rich": q4, ...ee, [o()]: true }), () => Object.entries(ge3).map(([m2, I4]) => `${m2}: ${I4};`).concat([a2()]).join(" "), () => nn2(X2, ["surface$"])]);
    var it3 = sv(me3);
    Js(it3, (m2, I4, xe3) => ({ class: m2, style: I4, ...xe3 }), [() => bs({ "mdc-tooltip__surface": true, "mdc-tooltip__surface-animation": true, [k3()]: true }), () => Object.entries(V3).map(([m2, I4]) => `${m2}: ${I4};`).concat([Q2()]).join(" "), () => Ve2(X2, "surface$")]);
    var st2 = sv(it3);
    Ei(st2, () => e.children ?? an), pr(me3, (m2) => j2 = m2, () => j2), Ks(me3, (m2, I4) => Ys?.(m2, I4), s), ht(n, me3);
    var bt2 = Vr(Ct2);
    return i(), bt2;
  }
  var aa2 = vs("<div><!></div>");
  function la2(n, e) {
    Wr(e, true);
    const t = () => ZE(S2, "$tooltip", i), r = () => ZE(v2, "$anchor", i), [i, s] = tC();
    let o = q2(e, "use", 19, () => []), a2 = q2(e, "class", 3, ""), l = q2(e, "rich", 3, false), c = Oi(e, ["$$slots", "$$events", "$$legacy", "use", "class", "rich", "children"]), p;
    const v2 = QE(void 0), S2 = QE(void 0);
    It("SMUI:tooltip:wrapper:anchor", v2), It("SMUI:tooltip:wrapper:tooltip", S2), It("SMUI:tooltip:rich", l()), Tn(() => {
      t() && !r() && eC(v2, t().previousElementSibling);
    });
    function T4() {
      return p;
    }
    var b2 = { getElement: T4 }, _4 = gn(), M3 = Xt(_4);
    {
      var k3 = (j2) => {
        var E2 = aa2();
        Js(E2, ($4) => ({ class: $4, ...c }), [() => bs({ "mdc-tooltip-wrapper--rich": true, [a2()]: true })]);
        var A3 = sv(E2);
        Ei(A3, () => e.children ?? an), pr(E2, ($4) => p = $4, () => p), Ks(E2, ($4, ee) => Ys?.($4, ee), o), ht(j2, E2);
      }, Q2 = (j2) => {
        var E2 = gn(), A3 = Xt(E2);
        Ei(A3, () => e.children ?? an), ht(j2, E2);
      };
      ua(M3, (j2) => {
        l() ? j2(k3) : j2(Q2, false);
      });
    }
    ht(n, _4);
    var X2 = Vr(b2);
    return s(), X2;
  }
  var Dt2 = class extends Error {
  };
  var ua2 = class extends Dt2 {
    constructor(e) {
      super(`Invalid DateTime: ${e.toMessage()}`);
    }
  };
  var ca2 = class extends Dt2 {
    constructor(e) {
      super(`Invalid Interval: ${e.toMessage()}`);
    }
  };
  var da2 = class extends Dt2 {
    constructor(e) {
      super(`Invalid Duration: ${e.toMessage()}`);
    }
  };
  var kt2 = class extends Dt2 {
  };
  var $i3 = class extends Dt2 {
    constructor(e) {
      super(`Invalid unit ${e}`);
    }
  };
  var Se2 = class extends Dt2 {
  };
  var at2 = class extends Dt2 {
    constructor() {
      super("Zone is an abstract class");
    }
  };
  var C2 = "numeric";
  var Ge2 = "short";
  var _e3 = "long";
  var xn2 = { year: C2, month: C2, day: C2 };
  var zi3 = { year: C2, month: Ge2, day: C2 };
  var fa2 = { year: C2, month: Ge2, day: C2, weekday: Ge2 };
  var Zi3 = { year: C2, month: _e3, day: C2 };
  var Gi3 = { year: C2, month: _e3, day: C2, weekday: _e3 };
  var qi3 = { hour: C2, minute: C2 };
  var Yi2 = { hour: C2, minute: C2, second: C2 };
  var ji3 = { hour: C2, minute: C2, second: C2, timeZoneName: Ge2 };
  var Ji3 = { hour: C2, minute: C2, second: C2, timeZoneName: _e3 };
  var Ki3 = { hour: C2, minute: C2, hourCycle: "h23" };
  var Qi3 = { hour: C2, minute: C2, second: C2, hourCycle: "h23" };
  var Xi2 = { hour: C2, minute: C2, second: C2, hourCycle: "h23", timeZoneName: Ge2 };
  var es2 = { hour: C2, minute: C2, second: C2, hourCycle: "h23", timeZoneName: _e3 };
  var ts2 = { year: C2, month: C2, day: C2, hour: C2, minute: C2 };
  var ns2 = { year: C2, month: C2, day: C2, hour: C2, minute: C2, second: C2 };
  var rs2 = { year: C2, month: Ge2, day: C2, hour: C2, minute: C2 };
  var is2 = { year: C2, month: Ge2, day: C2, hour: C2, minute: C2, second: C2 };
  var ha2 = { year: C2, month: Ge2, day: C2, weekday: Ge2, hour: C2, minute: C2 };
  var ss2 = { year: C2, month: _e3, day: C2, hour: C2, minute: C2, timeZoneName: Ge2 };
  var os2 = { year: C2, month: _e3, day: C2, hour: C2, minute: C2, second: C2, timeZoneName: Ge2 };
  var as2 = { year: C2, month: _e3, day: C2, weekday: _e3, hour: C2, minute: C2, timeZoneName: _e3 };
  var ls2 = { year: C2, month: _e3, day: C2, weekday: _e3, hour: C2, minute: C2, second: C2, timeZoneName: _e3 };
  var rn3 = class {
    get type() {
      throw new at2();
    }
    get name() {
      throw new at2();
    }
    get ianaName() {
      return this.name;
    }
    get isUniversal() {
      throw new at2();
    }
    offsetName(e, t) {
      throw new at2();
    }
    formatOffset(e, t) {
      throw new at2();
    }
    offset(e) {
      throw new at2();
    }
    equals(e) {
      throw new at2();
    }
    get isValid() {
      throw new at2();
    }
  };
  var Zn3 = null;
  var An = class _An extends rn3 {
    static get instance() {
      return Zn3 === null && (Zn3 = new _An()), Zn3;
    }
    get type() {
      return "system";
    }
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    get isUniversal() {
      return false;
    }
    offsetName(e, { format: t, locale: r }) {
      return vs2(e, t, r);
    }
    formatOffset(e, t) {
      return jt3(this.offset(e), t);
    }
    offset(e) {
      return -new Date(e).getTimezoneOffset();
    }
    equals(e) {
      return e.type === "system";
    }
    get isValid() {
      return true;
    }
  };
  var cr2 = /* @__PURE__ */ new Map();
  function ma2(n) {
    let e = cr2.get(n);
    return e === void 0 && (e = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: n, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", era: "short" }), cr2.set(n, e)), e;
  }
  var pa2 = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
  function ya2(n, e) {
    const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, i, s, o, a2, l, c, p] = r;
    return [o, i, s, a2, l, c, p];
  }
  function ga2(n, e) {
    const t = n.formatToParts(e), r = [];
    for (let i = 0; i < t.length; i++) {
      const { type: s, value: o } = t[i], a2 = pa2[s];
      s === "era" ? r[a2] = o : F4(a2) || (r[a2] = parseInt(o, 10));
    }
    return r;
  }
  var Gn2 = /* @__PURE__ */ new Map();
  var nt3 = class _nt extends rn3 {
    static create(e) {
      let t = Gn2.get(e);
      return t === void 0 && Gn2.set(e, t = new _nt(e)), t;
    }
    static resetCache() {
      Gn2.clear(), cr2.clear();
    }
    static isValidSpecifier(e) {
      return this.isValidZone(e);
    }
    static isValidZone(e) {
      if (!e) return false;
      try {
        return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), true;
      } catch {
        return false;
      }
    }
    constructor(e) {
      super(), this.zoneName = e, this.valid = _nt.isValidZone(e);
    }
    get type() {
      return "iana";
    }
    get name() {
      return this.zoneName;
    }
    get isUniversal() {
      return false;
    }
    offsetName(e, { format: t, locale: r }) {
      return vs2(e, t, r, this.name);
    }
    formatOffset(e, t) {
      return jt3(this.offset(e), t);
    }
    offset(e) {
      if (!this.valid) return NaN;
      const t = new Date(e);
      if (isNaN(t)) return NaN;
      const r = ma2(this.name);
      let [i, s, o, a2, l, c, p] = r.formatToParts ? ga2(r, t) : ya2(r, t);
      a2 === "BC" && (i = -Math.abs(i) + 1);
      const S2 = _n3({ year: i, month: s, day: o, hour: l === 24 ? 0 : l, minute: c, second: p, millisecond: 0 });
      let T4 = +t;
      const b2 = T4 % 1e3;
      return T4 -= b2 >= 0 ? b2 : 1e3 + b2, (S2 - T4) / (60 * 1e3);
    }
    equals(e) {
      return e.type === "iana" && e.name === this.name;
    }
    get isValid() {
      return this.valid;
    }
  };
  var Gr2 = {};
  function Ta2(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = Gr2[t];
    return r || (r = new Intl.ListFormat(n, e), Gr2[t] = r), r;
  }
  var dr2 = /* @__PURE__ */ new Map();
  function fr2(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = dr2.get(t);
    return r === void 0 && (r = new Intl.DateTimeFormat(n, e), dr2.set(t, r)), r;
  }
  var hr3 = /* @__PURE__ */ new Map();
  function va2(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = hr3.get(t);
    return r === void 0 && (r = new Intl.NumberFormat(n, e), hr3.set(t, r)), r;
  }
  var mr2 = /* @__PURE__ */ new Map();
  function wa2(n, e = {}) {
    const { base: t, ...r } = e, i = JSON.stringify([n, r]);
    let s = mr2.get(i);
    return s === void 0 && (s = new Intl.RelativeTimeFormat(n, e), mr2.set(i, s)), s;
  }
  var Gt2 = null;
  function Ea2() {
    return Gt2 || (Gt2 = new Intl.DateTimeFormat().resolvedOptions().locale, Gt2);
  }
  var pr2 = /* @__PURE__ */ new Map();
  function us2(n) {
    let e = pr2.get(n);
    return e === void 0 && (e = new Intl.DateTimeFormat(n).resolvedOptions(), pr2.set(n, e)), e;
  }
  var yr2 = /* @__PURE__ */ new Map();
  function Sa2(n) {
    let e = yr2.get(n);
    if (!e) {
      const t = new Intl.Locale(n);
      e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, "minimalDays" in e || (e = { ...cs2, ...e }), yr2.set(n, e);
    }
    return e;
  }
  function Oa2(n) {
    const e = n.indexOf("-x-");
    e !== -1 && (n = n.substring(0, e));
    const t = n.indexOf("-u-");
    if (t === -1) return [n];
    {
      let r, i;
      try {
        r = fr2(n).resolvedOptions(), i = n;
      } catch {
        const l = n.substring(0, t);
        r = fr2(l).resolvedOptions(), i = l;
      }
      const { numberingSystem: s, calendar: o } = r;
      return [i, s, o];
    }
  }
  function xa2(n, e, t) {
    return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
  }
  function Da2(n) {
    const e = [];
    for (let t = 1; t <= 12; t++) {
      const r = L4.utc(2009, t, 1);
      e.push(n(r));
    }
    return e;
  }
  function Ca2(n) {
    const e = [];
    for (let t = 1; t <= 7; t++) {
      const r = L4.utc(2016, 11, 13 + t);
      e.push(n(r));
    }
    return e;
  }
  function hn3(n, e, t, r) {
    const i = n.listingMode();
    return i === "error" ? null : i === "en" ? t(e) : r(e);
  }
  function ba2(n) {
    return n.numberingSystem && n.numberingSystem !== "latn" ? false : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || us2(n.locale).numberingSystem === "latn";
  }
  var Na2 = class {
    constructor(e, t, r) {
      this.padTo = r.padTo || 0, this.floor = r.floor || false;
      const { padTo: i, floor: s, ...o } = r;
      if (!t || Object.keys(o).length > 0) {
        const a2 = { useGrouping: false, ...r };
        r.padTo > 0 && (a2.minimumIntegerDigits = r.padTo), this.inf = va2(e, a2);
      }
    }
    format(e) {
      if (this.inf) {
        const t = this.floor ? Math.floor(e) : e;
        return this.inf.format(t);
      } else {
        const t = this.floor ? Math.floor(e) : _r2(e, 3);
        return le2(t, this.padTo);
      }
    }
  };
  var Aa2 = class {
    constructor(e, t, r) {
      this.opts = r, this.originalZone = void 0;
      let i;
      if (this.opts.timeZone) this.dt = e;
      else if (e.zone.type === "fixed") {
        const o = -1 * (e.offset / 60), a2 = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
        e.offset !== 0 && nt3.create(a2).valid ? (i = a2, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
      } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
      const s = { ...this.opts };
      s.timeZone = s.timeZone || i, this.dtf = fr2(t, s);
    }
    format() {
      return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      const e = this.dtf.formatToParts(this.dt.toJSDate());
      return this.originalZone ? e.map((t) => {
        if (t.type === "timeZoneName") {
          const r = this.originalZone.offsetName(this.dt.ts, { locale: this.dt.locale, format: this.opts.timeZoneName });
          return { ...t, value: r };
        } else return t;
      }) : e;
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  };
  var Ia2 = class {
    constructor(e, t, r) {
      this.opts = { style: "long", ...r }, !t && gs2() && (this.rtf = wa2(e, r));
    }
    format(e, t) {
      return this.rtf ? this.rtf.format(e, t) : Qa(t, e, this.opts.numeric, this.opts.style !== "long");
    }
    formatToParts(e, t) {
      return this.rtf ? this.rtf.formatToParts(e, t) : [];
    }
  };
  var cs2 = { firstDay: 1, minimalDays: 4, weekend: [6, 7] };
  var J2 = class _J {
    static fromOpts(e) {
      return _J.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
    }
    static create(e, t, r, i, s = false) {
      const o = e || oe2.defaultLocale, a2 = o || (s ? "en-US" : Ea2()), l = t || oe2.defaultNumberingSystem, c = r || oe2.defaultOutputCalendar, p = Tr2(i) || oe2.defaultWeekSettings;
      return new _J(a2, l, c, p, o);
    }
    static resetCache() {
      Gt2 = null, dr2.clear(), hr3.clear(), mr2.clear(), pr2.clear(), yr2.clear();
    }
    static fromObject({ locale: e, numberingSystem: t, outputCalendar: r, weekSettings: i } = {}) {
      return _J.create(e, t, r, i);
    }
    constructor(e, t, r, i, s) {
      const [o, a2, l] = Oa2(e);
      this.locale = o, this.numberingSystem = t || a2 || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = xa2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
    }
    get fastNumbers() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = ba2(this)), this.fastNumbersCached;
    }
    listingMode() {
      const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return e && t ? "en" : "intl";
    }
    clone(e) {
      return !e || Object.getOwnPropertyNames(e).length === 0 ? this : _J.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, Tr2(e.weekSettings) || this.weekSettings, e.defaultToEN || false);
    }
    redefaultToEN(e = {}) {
      return this.clone({ ...e, defaultToEN: true });
    }
    redefaultToSystem(e = {}) {
      return this.clone({ ...e, defaultToEN: false });
    }
    months(e, t = false) {
      return hn3(this, e, Ss2, () => {
        const r = this.intl === "ja" || this.intl.startsWith("ja-");
        t &= !r;
        const i = t ? { month: e, day: "numeric" } : { month: e }, s = t ? "format" : "standalone";
        if (!this.monthsCache[s][e]) {
          const o = r ? (a2) => this.dtFormatter(a2, i).format() : (a2) => this.extract(a2, i, "month");
          this.monthsCache[s][e] = Da2(o);
        }
        return this.monthsCache[s][e];
      });
    }
    weekdays(e, t = false) {
      return hn3(this, e, Ds2, () => {
        const r = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = t ? "format" : "standalone";
        return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = Ca2((s) => this.extract(s, r, "weekday"))), this.weekdaysCache[i][e];
      });
    }
    meridiems() {
      return hn3(this, void 0, () => Cs2, () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [L4.utc(2016, 11, 13, 9), L4.utc(2016, 11, 13, 19)].map((t) => this.extract(t, e, "dayperiod"));
        }
        return this.meridiemCache;
      });
    }
    eras(e) {
      return hn3(this, e, bs2, () => {
        const t = { era: e };
        return this.eraCache[e] || (this.eraCache[e] = [L4.utc(-40, 1, 1), L4.utc(2017, 1, 1)].map((r) => this.extract(r, t, "era"))), this.eraCache[e];
      });
    }
    extract(e, t, r) {
      const i = this.dtFormatter(e, t), s = i.formatToParts(), o = s.find((a2) => a2.type.toLowerCase() === r);
      return o ? o.value : null;
    }
    numberFormatter(e = {}) {
      return new Na2(this.intl, e.forceSimple || this.fastNumbers, e);
    }
    dtFormatter(e, t = {}) {
      return new Aa2(e, this.intl, t);
    }
    relFormatter(e = {}) {
      return new Ia2(this.intl, this.isEnglish(), e);
    }
    listFormatter(e = {}) {
      return Ta2(this.intl, e);
    }
    isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || us2(this.intl).locale.startsWith("en-us");
    }
    getWeekSettings() {
      return this.weekSettings ? this.weekSettings : Ts() ? Sa2(this.locale) : cs2;
    }
    getStartOfWeek() {
      return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
      return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
      return this.getWeekSettings().weekend;
    }
    equals(e) {
      return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    }
    toString() {
      return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
  };
  var qn2 = null;
  var Ce2 = class _Ce extends rn3 {
    static get utcInstance() {
      return qn2 === null && (qn2 = new _Ce(0)), qn2;
    }
    static instance(e) {
      return e === 0 ? _Ce.utcInstance : new _Ce(e);
    }
    static parseSpecifier(e) {
      if (e) {
        const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (t) return new _Ce(kn2(t[1], t[2]));
      }
      return null;
    }
    constructor(e) {
      super(), this.fixed = e;
    }
    get type() {
      return "fixed";
    }
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${jt3(this.fixed, "narrow")}`;
    }
    get ianaName() {
      return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${jt3(-this.fixed, "narrow")}`;
    }
    offsetName() {
      return this.name;
    }
    formatOffset(e, t) {
      return jt3(this.fixed, t);
    }
    get isUniversal() {
      return true;
    }
    offset() {
      return this.fixed;
    }
    equals(e) {
      return e.type === "fixed" && e.fixed === this.fixed;
    }
    get isValid() {
      return true;
    }
  };
  var _a2 = class extends rn3 {
    constructor(e) {
      super(), this.zoneName = e;
    }
    get type() {
      return "invalid";
    }
    get name() {
      return this.zoneName;
    }
    get isUniversal() {
      return false;
    }
    offsetName() {
      return null;
    }
    formatOffset() {
      return "";
    }
    offset() {
      return NaN;
    }
    equals() {
      return false;
    }
    get isValid() {
      return false;
    }
  };
  function dt2(n, e) {
    if (F4(n) || n === null) return e;
    if (n instanceof rn3) return n;
    if (Fa2(n)) {
      const t = n.toLowerCase();
      return t === "default" ? e : t === "local" || t === "system" ? An.instance : t === "utc" || t === "gmt" ? Ce2.utcInstance : Ce2.parseSpecifier(t) || nt3.create(n);
    } else return ft2(n) ? Ce2.instance(n) : typeof n == "object" && "offset" in n && typeof n.offset == "function" ? n : new _a2(n);
  }
  var br2 = { arab: "[\u0660-\u0669]", arabext: "[\u06F0-\u06F9]", bali: "[\u1B50-\u1B59]", beng: "[\u09E6-\u09EF]", deva: "[\u0966-\u096F]", fullwide: "[\uFF10-\uFF19]", gujr: "[\u0AE6-\u0AEF]", hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]", khmr: "[\u17E0-\u17E9]", knda: "[\u0CE6-\u0CEF]", laoo: "[\u0ED0-\u0ED9]", limb: "[\u1946-\u194F]", mlym: "[\u0D66-\u0D6F]", mong: "[\u1810-\u1819]", mymr: "[\u1040-\u1049]", orya: "[\u0B66-\u0B6F]", tamldec: "[\u0BE6-\u0BEF]", telu: "[\u0C66-\u0C6F]", thai: "[\u0E50-\u0E59]", tibt: "[\u0F20-\u0F29]", latn: "\\d" };
  var qr2 = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] };
  var ka2 = br2.hanidec.replace(/[\[|\]]/g, "").split("");
  function Ma2(n) {
    let e = parseInt(n, 10);
    if (isNaN(e)) {
      e = "";
      for (let t = 0; t < n.length; t++) {
        const r = n.charCodeAt(t);
        if (n[t].search(br2.hanidec) !== -1) e += ka2.indexOf(n[t]);
        else for (const i in qr2) {
          const [s, o] = qr2[i];
          r >= s && r <= o && (e += r - s);
        }
      }
      return parseInt(e, 10);
    } else return e;
  }
  var gr2 = /* @__PURE__ */ new Map();
  function Ra2() {
    gr2.clear();
  }
  function Be2({ numberingSystem: n }, e = "") {
    const t = n || "latn";
    let r = gr2.get(t);
    r === void 0 && (r = /* @__PURE__ */ new Map(), gr2.set(t, r));
    let i = r.get(e);
    return i === void 0 && (i = new RegExp(`${br2[t]}${e}`), r.set(e, i)), i;
  }
  var Yr = () => Date.now();
  var jr2 = "system";
  var Jr = null;
  var Kr = null;
  var Qr = null;
  var Xr2 = 60;
  var ei3;
  var ti3 = null;
  var oe2 = class {
    static get now() {
      return Yr;
    }
    static set now(e) {
      Yr = e;
    }
    static set defaultZone(e) {
      jr2 = e;
    }
    static get defaultZone() {
      return dt2(jr2, An.instance);
    }
    static get defaultLocale() {
      return Jr;
    }
    static set defaultLocale(e) {
      Jr = e;
    }
    static get defaultNumberingSystem() {
      return Kr;
    }
    static set defaultNumberingSystem(e) {
      Kr = e;
    }
    static get defaultOutputCalendar() {
      return Qr;
    }
    static set defaultOutputCalendar(e) {
      Qr = e;
    }
    static get defaultWeekSettings() {
      return ti3;
    }
    static set defaultWeekSettings(e) {
      ti3 = Tr2(e);
    }
    static get twoDigitCutoffYear() {
      return Xr2;
    }
    static set twoDigitCutoffYear(e) {
      Xr2 = e % 100;
    }
    static get throwOnInvalid() {
      return ei3;
    }
    static set throwOnInvalid(e) {
      ei3 = e;
    }
    static resetCaches() {
      J2.resetCache(), nt3.resetCache(), L4.resetCache(), Ra2();
    }
  };
  var Ze3 = class {
    constructor(e, t) {
      this.reason = e, this.explanation = t;
    }
    toMessage() {
      return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
    }
  };
  var ds2 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var fs2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function Fe(n, e) {
    return new Ze3("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`);
  }
  function Nr2(n, e, t) {
    const r = new Date(Date.UTC(n, e - 1, t));
    n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
    const i = r.getUTCDay();
    return i === 0 ? 7 : i;
  }
  function hs2(n, e, t) {
    return t + (sn2(n) ? fs2 : ds2)[e - 1];
  }
  function ms2(n, e) {
    const t = sn2(n) ? fs2 : ds2, r = t.findIndex((s) => s < e), i = e - t[r];
    return { month: r + 1, day: i };
  }
  function Ar2(n, e) {
    return (n - e + 7) % 7 + 1;
  }
  function Dn2(n, e = 4, t = 1) {
    const { year: r, month: i, day: s } = n, o = hs2(r, i, s), a2 = Ar2(Nr2(r, i, s), t);
    let l = Math.floor((o - a2 + 14 - e) / 7), c;
    return l < 1 ? (c = r - 1, l = Jt3(c, e, t)) : l > Jt3(r, e, t) ? (c = r + 1, l = 1) : c = r, { weekYear: c, weekNumber: l, weekday: a2, ...Mn2(n) };
  }
  function ni3(n, e = 4, t = 1) {
    const { weekYear: r, weekNumber: i, weekday: s } = n, o = Ar2(Nr2(r, 1, e), t), a2 = Rt2(r);
    let l = i * 7 + s - o - 7 + e, c;
    l < 1 ? (c = r - 1, l += Rt2(c)) : l > a2 ? (c = r + 1, l -= Rt2(r)) : c = r;
    const { month: p, day: v2 } = ms2(c, l);
    return { year: c, month: p, day: v2, ...Mn2(n) };
  }
  function Yn3(n) {
    const { year: e, month: t, day: r } = n, i = hs2(e, t, r);
    return { year: e, ordinal: i, ...Mn2(n) };
  }
  function ri3(n) {
    const { year: e, ordinal: t } = n, { month: r, day: i } = ms2(e, t);
    return { year: e, month: r, day: i, ...Mn2(n) };
  }
  function ii3(n, e) {
    if (!F4(n.localWeekday) || !F4(n.localWeekNumber) || !F4(n.localWeekYear)) {
      if (!F4(n.weekday) || !F4(n.weekNumber) || !F4(n.weekYear)) throw new kt2("Cannot mix locale-based week fields with ISO-based week fields");
      return F4(n.localWeekday) || (n.weekday = n.localWeekday), F4(n.localWeekNumber) || (n.weekNumber = n.localWeekNumber), F4(n.localWeekYear) || (n.weekYear = n.localWeekYear), delete n.localWeekday, delete n.localWeekNumber, delete n.localWeekYear, { minDaysInFirstWeek: e.getMinDaysInFirstWeek(), startOfWeek: e.getStartOfWeek() };
    } else return { minDaysInFirstWeek: 4, startOfWeek: 1 };
  }
  function Ha2(n, e = 4, t = 1) {
    const r = In3(n.weekYear), i = Ve3(n.weekNumber, 1, Jt3(n.weekYear, e, t)), s = Ve3(n.weekday, 1, 7);
    return r ? i ? s ? false : Fe("weekday", n.weekday) : Fe("week", n.weekNumber) : Fe("weekYear", n.weekYear);
  }
  function La2(n) {
    const e = In3(n.year), t = Ve3(n.ordinal, 1, Rt2(n.year));
    return e ? t ? false : Fe("ordinal", n.ordinal) : Fe("year", n.year);
  }
  function ps2(n) {
    const e = In3(n.year), t = Ve3(n.month, 1, 12), r = Ve3(n.day, 1, Cn(n.year, n.month));
    return e ? t ? r ? false : Fe("day", n.day) : Fe("month", n.month) : Fe("year", n.year);
  }
  function ys2(n) {
    const { hour: e, minute: t, second: r, millisecond: i } = n, s = Ve3(e, 0, 23) || e === 24 && t === 0 && r === 0 && i === 0, o = Ve3(t, 0, 59), a2 = Ve3(r, 0, 59), l = Ve3(i, 0, 999);
    return s ? o ? a2 ? l ? false : Fe("millisecond", i) : Fe("second", r) : Fe("minute", t) : Fe("hour", e);
  }
  function F4(n) {
    return typeof n > "u";
  }
  function ft2(n) {
    return typeof n == "number";
  }
  function In3(n) {
    return typeof n == "number" && n % 1 === 0;
  }
  function Fa2(n) {
    return typeof n == "string";
  }
  function Va2(n) {
    return Object.prototype.toString.call(n) === "[object Date]";
  }
  function gs2() {
    try {
      return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
    } catch {
      return false;
    }
  }
  function Ts() {
    try {
      return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch {
      return false;
    }
  }
  function Pa2(n) {
    return Array.isArray(n) ? n : [n];
  }
  function si3(n, e, t) {
    if (n.length !== 0) return n.reduce((r, i) => {
      const s = [e(i), i];
      return r && t(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
  }
  function Wa2(n, e) {
    return e.reduce((t, r) => (t[r] = n[r], t), {});
  }
  function Lt2(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function Tr2(n) {
    if (n == null) return null;
    if (typeof n != "object") throw new Se2("Week settings must be an object");
    if (!Ve3(n.firstDay, 1, 7) || !Ve3(n.minimalDays, 1, 7) || !Array.isArray(n.weekend) || n.weekend.some((e) => !Ve3(e, 1, 7))) throw new Se2("Invalid week settings");
    return { firstDay: n.firstDay, minimalDays: n.minimalDays, weekend: Array.from(n.weekend) };
  }
  function Ve3(n, e, t) {
    return In3(n) && n >= e && n <= t;
  }
  function Ba2(n, e) {
    return n - e * Math.floor(n / e);
  }
  function le2(n, e = 2) {
    const t = n < 0;
    let r;
    return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
  }
  function ut(n) {
    if (!(F4(n) || n === null || n === "")) return parseInt(n, 10);
  }
  function Tt2(n) {
    if (!(F4(n) || n === null || n === "")) return parseFloat(n);
  }
  function Ir2(n) {
    if (!(F4(n) || n === null || n === "")) {
      const e = parseFloat("0." + n) * 1e3;
      return Math.floor(e);
    }
  }
  function _r2(n, e, t = "round") {
    const r = 10 ** e;
    switch (t) {
      case "expand":
        return n > 0 ? Math.ceil(n * r) / r : Math.floor(n * r) / r;
      case "trunc":
        return Math.trunc(n * r) / r;
      case "round":
        return Math.round(n * r) / r;
      case "floor":
        return Math.floor(n * r) / r;
      case "ceil":
        return Math.ceil(n * r) / r;
      default:
        throw new RangeError(`Value rounding ${t} is out of range`);
    }
  }
  function sn2(n) {
    return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
  }
  function Rt2(n) {
    return sn2(n) ? 366 : 365;
  }
  function Cn(n, e) {
    const t = Ba2(e - 1, 12) + 1, r = n + (e - t) / 12;
    return t === 2 ? sn2(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
  }
  function _n3(n) {
    let e = Date.UTC(n.year, n.month - 1, n.day, n.hour, n.minute, n.second, n.millisecond);
    return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e;
  }
  function oi3(n, e, t) {
    return -Ar2(Nr2(n, 1, e), t) + e - 1;
  }
  function Jt3(n, e = 4, t = 1) {
    const r = oi3(n, e, t), i = oi3(n + 1, e, t);
    return (Rt2(n) - r + i) / 7;
  }
  function vr2(n) {
    return n > 99 ? n : n > oe2.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
  }
  function vs2(n, e, t, r = null) {
    const i = new Date(n), s = { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
    r && (s.timeZone = r);
    const o = { timeZoneName: e, ...s }, a2 = new Intl.DateTimeFormat(t, o).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
    return a2 ? a2.value : null;
  }
  function kn2(n, e) {
    let t = parseInt(n, 10);
    Number.isNaN(t) && (t = 0);
    const r = parseInt(e, 10) || 0, i = t < 0 || Object.is(t, -0) ? -r : r;
    return t * 60 + i;
  }
  function ws2(n) {
    const e = Number(n);
    if (typeof n == "boolean" || n === "" || !Number.isFinite(e)) throw new Se2(`Invalid unit value ${n}`);
    return e;
  }
  function bn2(n, e) {
    const t = {};
    for (const r in n) if (Lt2(n, r)) {
      const i = n[r];
      if (i == null) continue;
      t[e(r)] = ws2(i);
    }
    return t;
  }
  function jt3(n, e) {
    const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), i = n >= 0 ? "+" : "-";
    switch (e) {
      case "short":
        return `${i}${le2(t, 2)}:${le2(r, 2)}`;
      case "narrow":
        return `${i}${t}${r > 0 ? `:${r}` : ""}`;
      case "techie":
        return `${i}${le2(t, 2)}${le2(r, 2)}`;
      default:
        throw new RangeError(`Value format ${e} is out of range for property format`);
    }
  }
  function Mn2(n) {
    return Wa2(n, ["hour", "minute", "second", "millisecond"]);
  }
  var Ua2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var Es2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var $a2 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function Ss2(n) {
    switch (n) {
      case "narrow":
        return [...$a2];
      case "short":
        return [...Es2];
      case "long":
        return [...Ua2];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      default:
        return null;
    }
  }
  var Os2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var xs2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var za2 = ["M", "T", "W", "T", "F", "S", "S"];
  function Ds2(n) {
    switch (n) {
      case "narrow":
        return [...za2];
      case "short":
        return [...xs2];
      case "long":
        return [...Os2];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  var Cs2 = ["AM", "PM"];
  var Za = ["Before Christ", "Anno Domini"];
  var Ga2 = ["BC", "AD"];
  var qa2 = ["B", "A"];
  function bs2(n) {
    switch (n) {
      case "narrow":
        return [...qa2];
      case "short":
        return [...Ga2];
      case "long":
        return [...Za];
      default:
        return null;
    }
  }
  function Ya(n) {
    return Cs2[n.hour < 12 ? 0 : 1];
  }
  function ja2(n, e) {
    return Ds2(e)[n.weekday - 1];
  }
  function Ja2(n, e) {
    return Ss2(e)[n.month - 1];
  }
  function Ka2(n, e) {
    return bs2(e)[n.year < 0 ? 0 : 1];
  }
  function Qa(n, e, t = "always", r = false) {
    const i = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, s = ["hours", "minutes", "seconds"].indexOf(n) === -1;
    if (t === "auto" && s) {
      const v2 = n === "days";
      switch (e) {
        case 1:
          return v2 ? "tomorrow" : `next ${i[n][0]}`;
        case -1:
          return v2 ? "yesterday" : `last ${i[n][0]}`;
        case 0:
          return v2 ? "today" : `this ${i[n][0]}`;
      }
    }
    const o = Object.is(e, -0) || e < 0, a2 = Math.abs(e), l = a2 === 1, c = i[n], p = r ? l ? c[1] : c[2] || c[1] : l ? i[n][0] : n;
    return o ? `${a2} ${p} ago` : `in ${a2} ${p}`;
  }
  function ai3(n, e) {
    let t = "";
    for (const r of n) r.literal ? t += r.val : t += e(r.val);
    return t;
  }
  var Xa2 = { D: xn2, DD: zi3, DDD: Zi3, DDDD: Gi3, t: qi3, tt: Yi2, ttt: ji3, tttt: Ji3, T: Ki3, TT: Qi3, TTT: Xi2, TTTT: es2, f: ts2, ff: rs2, fff: ss2, ffff: as2, F: ns2, FF: is2, FFF: os2, FFFF: ls2 };
  var Oe2 = class _Oe {
    static create(e, t = {}) {
      return new _Oe(e, t);
    }
    static parseFormat(e) {
      let t = null, r = "", i = false;
      const s = [];
      for (let o = 0; o < e.length; o++) {
        const a2 = e.charAt(o);
        a2 === "'" ? ((r.length > 0 || i) && s.push({ literal: i || /^\s+$/.test(r), val: r === "" ? "'" : r }), t = null, r = "", i = !i) : i || a2 === t ? r += a2 : (r.length > 0 && s.push({ literal: /^\s+$/.test(r), val: r }), r = a2, t = a2);
      }
      return r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), s;
    }
    static macroTokenToFormatOpts(e) {
      return Xa2[e];
    }
    constructor(e, t) {
      this.opts = t, this.loc = e, this.systemLoc = null;
    }
    formatWithSystemDefault(e, t) {
      return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
    }
    dtFormatter(e, t = {}) {
      return this.loc.dtFormatter(e, { ...this.opts, ...t });
    }
    formatDateTime(e, t) {
      return this.dtFormatter(e, t).format();
    }
    formatDateTimeParts(e, t) {
      return this.dtFormatter(e, t).formatToParts();
    }
    formatInterval(e, t) {
      return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
    }
    resolvedOptions(e, t) {
      return this.dtFormatter(e, t).resolvedOptions();
    }
    num(e, t = 0, r = void 0) {
      if (this.opts.forceSimple) return le2(e, t);
      const i = { ...this.opts };
      return t > 0 && (i.padTo = t), r && (i.signDisplay = r), this.loc.numberFormatter(i).format(e);
    }
    formatDateTimeFromString(e, t) {
      const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (T4, b2) => this.loc.extract(e, T4, b2), o = (T4) => e.isOffsetFixed && e.offset === 0 && T4.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, T4.format) : "", a2 = () => r ? Ya(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (T4, b2) => r ? Ja2(e, T4) : s(b2 ? { month: T4 } : { month: T4, day: "numeric" }, "month"), c = (T4, b2) => r ? ja2(e, T4) : s(b2 ? { weekday: T4 } : { weekday: T4, month: "long", day: "numeric" }, "weekday"), p = (T4) => {
        const b2 = _Oe.macroTokenToFormatOpts(T4);
        return b2 ? this.formatWithSystemDefault(e, b2) : T4;
      }, v2 = (T4) => r ? Ka2(e, T4) : s({ era: T4 }, "era"), S2 = (T4) => {
        switch (T4) {
          case "S":
            return this.num(e.millisecond);
          case "u":
          case "SSS":
            return this.num(e.millisecond, 3);
          case "s":
            return this.num(e.second);
          case "ss":
            return this.num(e.second, 2);
          case "uu":
            return this.num(Math.floor(e.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(e.millisecond / 100));
          case "m":
            return this.num(e.minute);
          case "mm":
            return this.num(e.minute, 2);
          case "h":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
          case "hh":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
          case "H":
            return this.num(e.hour);
          case "HH":
            return this.num(e.hour, 2);
          case "Z":
            return o({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return o({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return o({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
          case "z":
            return e.zoneName;
          case "a":
            return a2();
          case "d":
            return i ? s({ day: "numeric" }, "day") : this.num(e.day);
          case "dd":
            return i ? s({ day: "2-digit" }, "day") : this.num(e.day, 2);
          case "c":
            return this.num(e.weekday);
          case "ccc":
            return c("short", true);
          case "cccc":
            return c("long", true);
          case "ccccc":
            return c("narrow", true);
          case "E":
            return this.num(e.weekday);
          case "EEE":
            return c("short", false);
          case "EEEE":
            return c("long", false);
          case "EEEEE":
            return c("narrow", false);
          case "L":
            return i ? s({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
          case "LL":
            return i ? s({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
          case "LLL":
            return l("short", true);
          case "LLLL":
            return l("long", true);
          case "LLLLL":
            return l("narrow", true);
          case "M":
            return i ? s({ month: "numeric" }, "month") : this.num(e.month);
          case "MM":
            return i ? s({ month: "2-digit" }, "month") : this.num(e.month, 2);
          case "MMM":
            return l("short", false);
          case "MMMM":
            return l("long", false);
          case "MMMMM":
            return l("narrow", false);
          case "y":
            return i ? s({ year: "numeric" }, "year") : this.num(e.year);
          case "yy":
            return i ? s({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
          case "yyyy":
            return i ? s({ year: "numeric" }, "year") : this.num(e.year, 4);
          case "yyyyyy":
            return i ? s({ year: "numeric" }, "year") : this.num(e.year, 6);
          case "G":
            return v2("short");
          case "GG":
            return v2("long");
          case "GGGGG":
            return v2("narrow");
          case "kk":
            return this.num(e.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(e.weekYear, 4);
          case "W":
            return this.num(e.weekNumber);
          case "WW":
            return this.num(e.weekNumber, 2);
          case "n":
            return this.num(e.localWeekNumber);
          case "nn":
            return this.num(e.localWeekNumber, 2);
          case "ii":
            return this.num(e.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(e.localWeekYear, 4);
          case "o":
            return this.num(e.ordinal);
          case "ooo":
            return this.num(e.ordinal, 3);
          case "q":
            return this.num(e.quarter);
          case "qq":
            return this.num(e.quarter, 2);
          case "X":
            return this.num(Math.floor(e.ts / 1e3));
          case "x":
            return this.num(e.ts);
          default:
            return p(T4);
        }
      };
      return ai3(_Oe.parseFormat(t), S2);
    }
    formatDurationFromString(e, t) {
      const r = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, i = (p) => {
        switch (p[0]) {
          case "S":
            return "milliseconds";
          case "s":
            return "seconds";
          case "m":
            return "minutes";
          case "h":
            return "hours";
          case "d":
            return "days";
          case "w":
            return "weeks";
          case "M":
            return "months";
          case "y":
            return "years";
          default:
            return null;
        }
      }, s = (p, v2) => (S2) => {
        const T4 = i(S2);
        if (T4) {
          const b2 = v2.isNegativeDuration && T4 !== v2.largestUnit ? r : 1;
          let _4;
          return this.opts.signMode === "negativeLargestOnly" && T4 !== v2.largestUnit ? _4 = "never" : this.opts.signMode === "all" ? _4 = "always" : _4 = "auto", this.num(p.get(T4) * b2, S2.length, _4);
        } else return S2;
      }, o = _Oe.parseFormat(t), a2 = o.reduce((p, { literal: v2, val: S2 }) => v2 ? p : p.concat(S2), []), l = e.shiftTo(...a2.map(i).filter((p) => p)), c = { isNegativeDuration: l < 0, largestUnit: Object.keys(l.values)[0] };
      return ai3(o, s(l, c));
    }
  };
  var Ns2 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function Ft2(...n) {
    const e = n.reduce((t, r) => t + r.source, "");
    return RegExp(`^${e}$`);
  }
  function Vt2(...n) {
    return (e) => n.reduce(([t, r, i], s) => {
      const [o, a2, l] = s(e, i);
      return [{ ...t, ...o }, a2 || r, l];
    }, [{}, null, 1]).slice(0, 2);
  }
  function Pt3(n, ...e) {
    if (n == null) return [null, null];
    for (const [t, r] of e) {
      const i = t.exec(n);
      if (i) return r(i);
    }
    return [null, null];
  }
  function As2(...n) {
    return (e, t) => {
      const r = {};
      let i;
      for (i = 0; i < n.length; i++) r[n[i]] = ut(e[t + i]);
      return [r, null, t + i];
    };
  }
  var Is2 = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/;
  var el2 = `(?:${Is2.source}?(?:\\[(${Ns2.source})\\])?)?`;
  var kr2 = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
  var _s2 = RegExp(`${kr2.source}${el2}`);
  var Mr2 = RegExp(`(?:[Tt]${_s2.source})?`);
  var tl2 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
  var nl2 = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
  var rl2 = /(\d{4})-?(\d{3})/;
  var il2 = As2("weekYear", "weekNumber", "weekDay");
  var sl2 = As2("year", "ordinal");
  var ol2 = /(\d{4})-(\d\d)-(\d\d)/;
  var ks = RegExp(`${kr2.source} ?(?:${Is2.source}|(${Ns2.source}))?`);
  var al2 = RegExp(`(?: ${ks.source})?`);
  function Ht3(n, e, t) {
    const r = n[e];
    return F4(r) ? t : ut(r);
  }
  function ll2(n, e) {
    return [{ year: Ht3(n, e), month: Ht3(n, e + 1, 1), day: Ht3(n, e + 2, 1) }, null, e + 3];
  }
  function Wt2(n, e) {
    return [{ hours: Ht3(n, e, 0), minutes: Ht3(n, e + 1, 0), seconds: Ht3(n, e + 2, 0), milliseconds: Ir2(n[e + 3]) }, null, e + 4];
  }
  function on3(n, e) {
    const t = !n[e] && !n[e + 1], r = kn2(n[e + 1], n[e + 2]), i = t ? null : Ce2.instance(r);
    return [{}, i, e + 3];
  }
  function an3(n, e) {
    const t = n[e] ? nt3.create(n[e]) : null;
    return [{}, t, e + 1];
  }
  var ul = RegExp(`^T?${kr2.source}$`);
  var cl2 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function dl2(n) {
    const [e, t, r, i, s, o, a2, l, c] = n, p = e[0] === "-", v2 = l && l[0] === "-", S2 = (T4, b2 = false) => T4 !== void 0 && (b2 || T4 && p) ? -T4 : T4;
    return [{ years: S2(Tt2(t)), months: S2(Tt2(r)), weeks: S2(Tt2(i)), days: S2(Tt2(s)), hours: S2(Tt2(o)), minutes: S2(Tt2(a2)), seconds: S2(Tt2(l), l === "-0"), milliseconds: S2(Ir2(c), v2) }];
  }
  var fl2 = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
  function Rr2(n, e, t, r, i, s, o) {
    const a2 = { year: e.length === 2 ? vr2(ut(e)) : ut(e), month: Es2.indexOf(t) + 1, day: ut(r), hour: ut(i), minute: ut(s) };
    return o && (a2.second = ut(o)), n && (a2.weekday = n.length > 3 ? Os2.indexOf(n) + 1 : xs2.indexOf(n) + 1), a2;
  }
  var hl2 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function ml2(n) {
    const [, e, t, r, i, s, o, a2, l, c, p, v2] = n, S2 = Rr2(e, i, r, t, s, o, a2);
    let T4;
    return l ? T4 = fl2[l] : c ? T4 = 0 : T4 = kn2(p, v2), [S2, new Ce2(T4)];
  }
  function pl2(n) {
    return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  var yl2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
  var gl2 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
  var Tl2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function li3(n) {
    const [, e, t, r, i, s, o, a2] = n;
    return [Rr2(e, i, r, t, s, o, a2), Ce2.utcInstance];
  }
  function vl2(n) {
    const [, e, t, r, i, s, o, a2] = n;
    return [Rr2(e, a2, t, r, i, s, o), Ce2.utcInstance];
  }
  var wl2 = Ft2(tl2, Mr2);
  var El2 = Ft2(nl2, Mr2);
  var Sl2 = Ft2(rl2, Mr2);
  var Ol2 = Ft2(_s2);
  var Ms2 = Vt2(ll2, Wt2, on3, an3);
  var xl2 = Vt2(il2, Wt2, on3, an3);
  var Dl2 = Vt2(sl2, Wt2, on3, an3);
  var Cl2 = Vt2(Wt2, on3, an3);
  function bl2(n) {
    return Pt3(n, [wl2, Ms2], [El2, xl2], [Sl2, Dl2], [Ol2, Cl2]);
  }
  function Nl2(n) {
    return Pt3(pl2(n), [hl2, ml2]);
  }
  function Al2(n) {
    return Pt3(n, [yl2, li3], [gl2, li3], [Tl2, vl2]);
  }
  function Il2(n) {
    return Pt3(n, [cl2, dl2]);
  }
  var _l2 = Vt2(Wt2);
  function kl2(n) {
    return Pt3(n, [ul, _l2]);
  }
  var Ml2 = Ft2(ol2, al2);
  var Rl2 = Ft2(ks);
  var Hl2 = Vt2(Wt2, on3, an3);
  function Ll2(n) {
    return Pt3(n, [Ml2, Ms2], [Rl2, Hl2]);
  }
  var ui3 = "Invalid Duration";
  var Rs2 = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 10080 * 60, milliseconds: 10080 * 60 * 1e3 }, days: { hours: 24, minutes: 1440, seconds: 1440 * 60, milliseconds: 1440 * 60 * 1e3 }, hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 }, minutes: { seconds: 60, milliseconds: 60 * 1e3 }, seconds: { milliseconds: 1e3 } };
  var Fl2 = { years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 365 * 24, minutes: 365 * 24 * 60, seconds: 365 * 24 * 60 * 60, milliseconds: 365 * 24 * 60 * 60 * 1e3 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 2184 * 60, seconds: 2184 * 60 * 60, milliseconds: 2184 * 60 * 60 * 1e3 }, months: { weeks: 4, days: 30, hours: 720, minutes: 720 * 60, seconds: 720 * 60 * 60, milliseconds: 720 * 60 * 60 * 1e3 }, ...Rs2 };
  var Re = 146097 / 400;
  var At2 = 146097 / 4800;
  var Vl2 = { years: { quarters: 4, months: 12, weeks: Re / 7, days: Re, hours: Re * 24, minutes: Re * 24 * 60, seconds: Re * 24 * 60 * 60, milliseconds: Re * 24 * 60 * 60 * 1e3 }, quarters: { months: 3, weeks: Re / 28, days: Re / 4, hours: Re * 24 / 4, minutes: Re * 24 * 60 / 4, seconds: Re * 24 * 60 * 60 / 4, milliseconds: Re * 24 * 60 * 60 * 1e3 / 4 }, months: { weeks: At2 / 7, days: At2, hours: At2 * 24, minutes: At2 * 24 * 60, seconds: At2 * 24 * 60 * 60, milliseconds: At2 * 24 * 60 * 60 * 1e3 }, ...Rs2 };
  var Ot2 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
  var Pl2 = Ot2.slice(0).reverse();
  function Xe(n, e, t = false) {
    const r = { values: t ? e.values : { ...n.values, ...e.values || {} }, loc: n.loc.clone(e.loc), conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy, matrix: e.matrix || n.matrix };
    return new G3(r);
  }
  function Hs2(n, e) {
    let t = e.milliseconds ?? 0;
    for (const r of Pl2.slice(1)) e[r] && (t += e[r] * n[r].milliseconds);
    return t;
  }
  function ci3(n, e) {
    const t = Hs2(n, e) < 0 ? -1 : 1;
    Ot2.reduceRight((r, i) => {
      if (F4(e[i])) return r;
      if (r) {
        const s = e[r] * t, o = n[i][r], a2 = Math.floor(s / o);
        e[i] += a2 * t, e[r] -= a2 * o * t;
      }
      return i;
    }, null), Ot2.reduce((r, i) => {
      if (F4(e[i])) return r;
      if (r) {
        const s = e[r] % 1;
        e[r] -= s, e[i] += s * n[r][i];
      }
      return i;
    }, null);
  }
  function di3(n) {
    const e = {};
    for (const [t, r] of Object.entries(n)) r !== 0 && (e[t] = r);
    return e;
  }
  var G3 = class _G {
    constructor(e) {
      const t = e.conversionAccuracy === "longterm" || false;
      let r = t ? Vl2 : Fl2;
      e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || J2.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = true;
    }
    static fromMillis(e, t) {
      return _G.fromObject({ milliseconds: e }, t);
    }
    static fromObject(e, t = {}) {
      if (e == null || typeof e != "object") throw new Se2(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
      return new _G({ values: bn2(e, _G.normalizeUnit), loc: J2.fromObject(t), conversionAccuracy: t.conversionAccuracy, matrix: t.matrix });
    }
    static fromDurationLike(e) {
      if (ft2(e)) return _G.fromMillis(e);
      if (_G.isDuration(e)) return e;
      if (typeof e == "object") return _G.fromObject(e);
      throw new Se2(`Unknown duration argument ${e} of type ${typeof e}`);
    }
    static fromISO(e, t) {
      const [r] = Il2(e);
      return r ? _G.fromObject(r, t) : _G.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    static fromISOTime(e, t) {
      const [r] = kl2(e);
      return r ? _G.fromObject(r, t) : _G.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    static invalid(e, t = null) {
      if (!e) throw new Se2("need to specify a reason the Duration is invalid");
      const r = e instanceof Ze3 ? e : new Ze3(e, t);
      if (oe2.throwOnInvalid) throw new da2(r);
      return new _G({ invalid: r });
    }
    static normalizeUnit(e) {
      const t = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[e && e.toLowerCase()];
      if (!t) throw new $i3(e);
      return t;
    }
    static isDuration(e) {
      return e && e.isLuxonDuration || false;
    }
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    toFormat(e, t = {}) {
      const r = { ...t, floor: t.round !== false && t.floor !== false };
      return this.isValid ? Oe2.create(this.loc, r).formatDurationFromString(this, e) : ui3;
    }
    toHuman(e = {}) {
      if (!this.isValid) return ui3;
      const t = e.showZeros !== false, r = Ot2.map((i) => {
        const s = this.values[i];
        return F4(s) || s === 0 && !t ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(s);
      }).filter((i) => i);
      return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(r);
    }
    toObject() {
      return this.isValid ? { ...this.values } : {};
    }
    toISO() {
      if (!this.isValid) return null;
      let e = "P";
      return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += _r2(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
    }
    toISOTime(e = {}) {
      if (!this.isValid) return null;
      const t = this.toMillis();
      return t < 0 || t >= 864e5 ? null : (e = { suppressMilliseconds: false, suppressSeconds: false, includePrefix: false, format: "extended", ...e, includeOffset: false }, L4.fromMillis(t, { zone: "UTC" }).toISOTime(e));
    }
    toJSON() {
      return this.toISO();
    }
    toString() {
      return this.toISO();
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
    }
    toMillis() {
      return this.isValid ? Hs2(this.matrix, this.values) : NaN;
    }
    valueOf() {
      return this.toMillis();
    }
    plus(e) {
      if (!this.isValid) return this;
      const t = _G.fromDurationLike(e), r = {};
      for (const i of Ot2) (Lt2(t.values, i) || Lt2(this.values, i)) && (r[i] = t.get(i) + this.get(i));
      return Xe(this, { values: r }, true);
    }
    minus(e) {
      if (!this.isValid) return this;
      const t = _G.fromDurationLike(e);
      return this.plus(t.negate());
    }
    mapUnits(e) {
      if (!this.isValid) return this;
      const t = {};
      for (const r of Object.keys(this.values)) t[r] = ws2(e(this.values[r], r));
      return Xe(this, { values: t }, true);
    }
    get(e) {
      return this[_G.normalizeUnit(e)];
    }
    set(e) {
      if (!this.isValid) return this;
      const t = { ...this.values, ...bn2(e, _G.normalizeUnit) };
      return Xe(this, { values: t });
    }
    reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: i } = {}) {
      const o = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: i, conversionAccuracy: r };
      return Xe(this, o);
    }
    as(e) {
      return this.isValid ? this.shiftTo(e).get(e) : NaN;
    }
    normalize() {
      if (!this.isValid) return this;
      const e = this.toObject();
      return ci3(this.matrix, e), Xe(this, { values: e }, true);
    }
    rescale() {
      if (!this.isValid) return this;
      const e = di3(this.normalize().shiftToAll().toObject());
      return Xe(this, { values: e }, true);
    }
    shiftTo(...e) {
      if (!this.isValid) return this;
      if (e.length === 0) return this;
      e = e.map((o) => _G.normalizeUnit(o));
      const t = {}, r = {}, i = this.toObject();
      let s;
      for (const o of Ot2) if (e.indexOf(o) >= 0) {
        s = o;
        let a2 = 0;
        for (const c in r) a2 += this.matrix[c][o] * r[c], r[c] = 0;
        ft2(i[o]) && (a2 += i[o]);
        const l = Math.trunc(a2);
        t[o] = l, r[o] = (a2 * 1e3 - l * 1e3) / 1e3;
      } else ft2(i[o]) && (r[o] = i[o]);
      for (const o in r) r[o] !== 0 && (t[s] += o === s ? r[o] : r[o] / this.matrix[s][o]);
      return ci3(this.matrix, t), Xe(this, { values: t }, true);
    }
    shiftToAll() {
      return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
    }
    negate() {
      if (!this.isValid) return this;
      const e = {};
      for (const t of Object.keys(this.values)) e[t] = this.values[t] === 0 ? 0 : -this.values[t];
      return Xe(this, { values: e }, true);
    }
    removeZeros() {
      if (!this.isValid) return this;
      const e = di3(this.values);
      return Xe(this, { values: e }, true);
    }
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    get isValid() {
      return this.invalid === null;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    equals(e) {
      if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return false;
      function t(r, i) {
        return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i;
      }
      for (const r of Ot2) if (!t(this.values[r], e.values[r])) return false;
      return true;
    }
  };
  var It2 = "Invalid Interval";
  function Wl2(n, e) {
    return !n || !n.isValid ? se2.invalid("missing or invalid start") : !e || !e.isValid ? se2.invalid("missing or invalid end") : e < n ? se2.invalid("end before start", `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`) : null;
  }
  var se2 = class _se {
    constructor(e) {
      this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = true;
    }
    static invalid(e, t = null) {
      if (!e) throw new Se2("need to specify a reason the Interval is invalid");
      const r = e instanceof Ze3 ? e : new Ze3(e, t);
      if (oe2.throwOnInvalid) throw new ca2(r);
      return new _se({ invalid: r });
    }
    static fromDateTimes(e, t) {
      const r = Zt3(e), i = Zt3(t), s = Wl2(r, i);
      return s ?? new _se({ start: r, end: i });
    }
    static after(e, t) {
      const r = G3.fromDurationLike(t), i = Zt3(e);
      return _se.fromDateTimes(i, i.plus(r));
    }
    static before(e, t) {
      const r = G3.fromDurationLike(t), i = Zt3(e);
      return _se.fromDateTimes(i.minus(r), i);
    }
    static fromISO(e, t) {
      const [r, i] = (e || "").split("/", 2);
      if (r && i) {
        let s, o;
        try {
          s = L4.fromISO(r, t), o = s.isValid;
        } catch {
          o = false;
        }
        let a2, l;
        try {
          a2 = L4.fromISO(i, t), l = a2.isValid;
        } catch {
          l = false;
        }
        if (o && l) return _se.fromDateTimes(s, a2);
        if (o) {
          const c = G3.fromISO(i, t);
          if (c.isValid) return _se.after(s, c);
        } else if (l) {
          const c = G3.fromISO(r, t);
          if (c.isValid) return _se.before(a2, c);
        }
      }
      return _se.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    static isInterval(e) {
      return e && e.isLuxonInterval || false;
    }
    get start() {
      return this.isValid ? this.s : null;
    }
    get end() {
      return this.isValid ? this.e : null;
    }
    get lastDateTime() {
      return this.isValid && this.e ? this.e.minus(1) : null;
    }
    get isValid() {
      return this.invalidReason === null;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    length(e = "milliseconds") {
      return this.isValid ? this.toDuration(e).get(e) : NaN;
    }
    count(e = "milliseconds", t) {
      if (!this.isValid) return NaN;
      const r = this.start.startOf(e, t);
      let i;
      return t?.useLocaleWeeks ? i = this.end.reconfigure({ locale: r.locale }) : i = this.end, i = i.startOf(e, t), Math.floor(i.diff(r, e).get(e)) + (i.valueOf() !== this.end.valueOf());
    }
    hasSame(e) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : false;
    }
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    isAfter(e) {
      return this.isValid ? this.s > e : false;
    }
    isBefore(e) {
      return this.isValid ? this.e <= e : false;
    }
    contains(e) {
      return this.isValid ? this.s <= e && this.e > e : false;
    }
    set({ start: e, end: t } = {}) {
      return this.isValid ? _se.fromDateTimes(e || this.s, t || this.e) : this;
    }
    splitAt(...e) {
      if (!this.isValid) return [];
      const t = e.map(Zt3).filter((o) => this.contains(o)).sort((o, a2) => o.toMillis() - a2.toMillis()), r = [];
      let { s: i } = this, s = 0;
      for (; i < this.e; ) {
        const o = t[s] || this.e, a2 = +o > +this.e ? this.e : o;
        r.push(_se.fromDateTimes(i, a2)), i = a2, s += 1;
      }
      return r;
    }
    splitBy(e) {
      const t = G3.fromDurationLike(e);
      if (!this.isValid || !t.isValid || t.as("milliseconds") === 0) return [];
      let { s: r } = this, i = 1, s;
      const o = [];
      for (; r < this.e; ) {
        const a2 = this.start.plus(t.mapUnits((l) => l * i));
        s = +a2 > +this.e ? this.e : a2, o.push(_se.fromDateTimes(r, s)), r = s, i += 1;
      }
      return o;
    }
    divideEqually(e) {
      return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
    }
    overlaps(e) {
      return this.e > e.s && this.s < e.e;
    }
    abutsStart(e) {
      return this.isValid ? +this.e == +e.s : false;
    }
    abutsEnd(e) {
      return this.isValid ? +e.e == +this.s : false;
    }
    engulfs(e) {
      return this.isValid ? this.s <= e.s && this.e >= e.e : false;
    }
    equals(e) {
      return !this.isValid || !e.isValid ? false : this.s.equals(e.s) && this.e.equals(e.e);
    }
    intersection(e) {
      if (!this.isValid) return this;
      const t = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
      return t >= r ? null : _se.fromDateTimes(t, r);
    }
    union(e) {
      if (!this.isValid) return this;
      const t = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
      return _se.fromDateTimes(t, r);
    }
    static merge(e) {
      const [t, r] = e.sort((i, s) => i.s - s.s).reduce(([i, s], o) => s ? s.overlaps(o) || s.abutsStart(o) ? [i, s.union(o)] : [i.concat([s]), o] : [i, o], [[], null]);
      return r && t.push(r), t;
    }
    static xor(e) {
      let t = null, r = 0;
      const i = [], s = e.map((l) => [{ time: l.s, type: "s" }, { time: l.e, type: "e" }]), o = Array.prototype.concat(...s), a2 = o.sort((l, c) => l.time - c.time);
      for (const l of a2) r += l.type === "s" ? 1 : -1, r === 1 ? t = l.time : (t && +t != +l.time && i.push(_se.fromDateTimes(t, l.time)), t = null);
      return _se.merge(i);
    }
    difference(...e) {
      return _se.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
    }
    toString() {
      return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : It2;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
    }
    toLocaleString(e = xn2, t = {}) {
      return this.isValid ? Oe2.create(this.s.loc.clone(t), e).formatInterval(this) : It2;
    }
    toISO(e) {
      return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : It2;
    }
    toISODate() {
      return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : It2;
    }
    toISOTime(e) {
      return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : It2;
    }
    toFormat(e, { separator: t = " \u2013 " } = {}) {
      return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : It2;
    }
    toDuration(e, t) {
      return this.isValid ? this.e.diff(this.s, e, t) : G3.invalid(this.invalidReason);
    }
    mapEndpoints(e) {
      return _se.fromDateTimes(e(this.s), e(this.e));
    }
  };
  var mn3 = class {
    static hasDST(e = oe2.defaultZone) {
      const t = L4.now().setZone(e).set({ month: 12 });
      return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
    }
    static isValidIANAZone(e) {
      return nt3.isValidZone(e);
    }
    static normalizeZone(e) {
      return dt2(e, oe2.defaultZone);
    }
    static getStartOfWeek({ locale: e = null, locObj: t = null } = {}) {
      return (t || J2.create(e)).getStartOfWeek();
    }
    static getMinimumDaysInFirstWeek({ locale: e = null, locObj: t = null } = {}) {
      return (t || J2.create(e)).getMinDaysInFirstWeek();
    }
    static getWeekendWeekdays({ locale: e = null, locObj: t = null } = {}) {
      return (t || J2.create(e)).getWeekendDays().slice();
    }
    static months(e = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
      return (i || J2.create(t, r, s)).months(e);
    }
    static monthsFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
      return (i || J2.create(t, r, s)).months(e, true);
    }
    static weekdays(e = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null } = {}) {
      return (i || J2.create(t, r, null)).weekdays(e);
    }
    static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null } = {}) {
      return (i || J2.create(t, r, null)).weekdays(e, true);
    }
    static meridiems({ locale: e = null } = {}) {
      return J2.create(e).meridiems();
    }
    static eras(e = "short", { locale: t = null } = {}) {
      return J2.create(t, null, "gregory").eras(e);
    }
    static features() {
      return { relative: gs2(), localeWeek: Ts() };
    }
  };
  function fi3(n, e) {
    const t = (i) => i.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), r = t(e) - t(n);
    return Math.floor(G3.fromMillis(r).as("days"));
  }
  function Bl2(n, e, t) {
    const r = [["years", (l, c) => c.year - l.year], ["quarters", (l, c) => c.quarter - l.quarter + (c.year - l.year) * 4], ["months", (l, c) => c.month - l.month + (c.year - l.year) * 12], ["weeks", (l, c) => {
      const p = fi3(l, c);
      return (p - p % 7) / 7;
    }], ["days", fi3]], i = {}, s = n;
    let o, a2;
    for (const [l, c] of r) t.indexOf(l) >= 0 && (o = l, i[l] = c(n, e), a2 = s.plus(i), a2 > e ? (i[l]--, n = s.plus(i), n > e && (a2 = n, i[l]--, n = s.plus(i))) : n = a2);
    return [n, i, a2, o];
  }
  function Ul2(n, e, t, r) {
    let [i, s, o, a2] = Bl2(n, e, t);
    const l = e - i, c = t.filter((v2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(v2) >= 0);
    c.length === 0 && (o < e && (o = i.plus({ [a2]: 1 })), o !== i && (s[a2] = (s[a2] || 0) + l / (o - i)));
    const p = G3.fromObject(s, r);
    return c.length > 0 ? G3.fromMillis(l, r).shiftTo(...c).plus(p) : p;
  }
  var $l2 = "missing Intl.DateTimeFormat.formatToParts support";
  function Y3(n, e = (t) => t) {
    return { regex: n, deser: ([t]) => e(Ma2(t)) };
  }
  var zl2 = "\xA0";
  var Ls2 = `[ ${zl2}]`;
  var Fs2 = new RegExp(Ls2, "g");
  function Zl2(n) {
    return n.replace(/\./g, "\\.?").replace(Fs2, Ls2);
  }
  function hi3(n) {
    return n.replace(/\./g, "").replace(Fs2, " ").toLowerCase();
  }
  function Ue2(n, e) {
    return n === null ? null : { regex: RegExp(n.map(Zl2).join("|")), deser: ([t]) => n.findIndex((r) => hi3(t) === hi3(r)) + e };
  }
  function mi3(n, e) {
    return { regex: n, deser: ([, t, r]) => kn2(t, r), groups: e };
  }
  function pn3(n) {
    return { regex: n, deser: ([e]) => e };
  }
  function Gl2(n) {
    return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function ql2(n, e) {
    const t = Be2(e), r = Be2(e, "{2}"), i = Be2(e, "{3}"), s = Be2(e, "{4}"), o = Be2(e, "{6}"), a2 = Be2(e, "{1,2}"), l = Be2(e, "{1,3}"), c = Be2(e, "{1,6}"), p = Be2(e, "{1,9}"), v2 = Be2(e, "{2,4}"), S2 = Be2(e, "{4,6}"), T4 = (M3) => ({ regex: RegExp(Gl2(M3.val)), deser: ([k3]) => k3, literal: true }), _4 = ((M3) => {
      if (n.literal) return T4(M3);
      switch (M3.val) {
        case "G":
          return Ue2(e.eras("short"), 0);
        case "GG":
          return Ue2(e.eras("long"), 0);
        case "y":
          return Y3(c);
        case "yy":
          return Y3(v2, vr2);
        case "yyyy":
          return Y3(s);
        case "yyyyy":
          return Y3(S2);
        case "yyyyyy":
          return Y3(o);
        case "M":
          return Y3(a2);
        case "MM":
          return Y3(r);
        case "MMM":
          return Ue2(e.months("short", true), 1);
        case "MMMM":
          return Ue2(e.months("long", true), 1);
        case "L":
          return Y3(a2);
        case "LL":
          return Y3(r);
        case "LLL":
          return Ue2(e.months("short", false), 1);
        case "LLLL":
          return Ue2(e.months("long", false), 1);
        case "d":
          return Y3(a2);
        case "dd":
          return Y3(r);
        case "o":
          return Y3(l);
        case "ooo":
          return Y3(i);
        case "HH":
          return Y3(r);
        case "H":
          return Y3(a2);
        case "hh":
          return Y3(r);
        case "h":
          return Y3(a2);
        case "mm":
          return Y3(r);
        case "m":
          return Y3(a2);
        case "q":
          return Y3(a2);
        case "qq":
          return Y3(r);
        case "s":
          return Y3(a2);
        case "ss":
          return Y3(r);
        case "S":
          return Y3(l);
        case "SSS":
          return Y3(i);
        case "u":
          return pn3(p);
        case "uu":
          return pn3(a2);
        case "uuu":
          return Y3(t);
        case "a":
          return Ue2(e.meridiems(), 0);
        case "kkkk":
          return Y3(s);
        case "kk":
          return Y3(v2, vr2);
        case "W":
          return Y3(a2);
        case "WW":
          return Y3(r);
        case "E":
        case "c":
          return Y3(t);
        case "EEE":
          return Ue2(e.weekdays("short", false), 1);
        case "EEEE":
          return Ue2(e.weekdays("long", false), 1);
        case "ccc":
          return Ue2(e.weekdays("short", true), 1);
        case "cccc":
          return Ue2(e.weekdays("long", true), 1);
        case "Z":
        case "ZZ":
          return mi3(new RegExp(`([+-]${a2.source})(?::(${r.source}))?`), 2);
        case "ZZZ":
          return mi3(new RegExp(`([+-]${a2.source})(${r.source})?`), 2);
        case "z":
          return pn3(/[a-z_+-/]{1,256}?/i);
        case " ":
          return pn3(/[^\S\n\r]/);
        default:
          return T4(M3);
      }
    })(n) || { invalidReason: $l2 };
    return _4.token = n, _4;
  }
  var Yl2 = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour12: { numeric: "h", "2-digit": "hh" }, hour24: { numeric: "H", "2-digit": "HH" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" }, timeZoneName: { long: "ZZZZZ", short: "ZZZ" } };
  function jl2(n, e, t) {
    const { type: r, value: i } = n;
    if (r === "literal") {
      const l = /^\s+$/.test(i);
      return { literal: !l, val: l ? " " : i };
    }
    const s = e[r];
    let o = r;
    r === "hour" && (e.hour12 != null ? o = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? o = "hour12" : o = "hour24" : o = t.hour12 ? "hour12" : "hour24");
    let a2 = Yl2[o];
    if (typeof a2 == "object" && (a2 = a2[s]), a2) return { literal: false, val: a2 };
  }
  function Jl2(n) {
    return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
  }
  function Kl2(n, e, t) {
    const r = n.match(e);
    if (r) {
      const i = {};
      let s = 1;
      for (const o in t) if (Lt2(t, o)) {
        const a2 = t[o], l = a2.groups ? a2.groups + 1 : 1;
        !a2.literal && a2.token && (i[a2.token.val[0]] = a2.deser(r.slice(s, s + l))), s += l;
      }
      return [r, i];
    } else return [r, {}];
  }
  function Ql2(n) {
    const e = (s) => {
      switch (s) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
        case "H":
          return "hour";
        case "d":
          return "day";
        case "o":
          return "ordinal";
        case "L":
        case "M":
          return "month";
        case "y":
          return "year";
        case "E":
        case "c":
          return "weekday";
        case "W":
          return "weekNumber";
        case "k":
          return "weekYear";
        case "q":
          return "quarter";
        default:
          return null;
      }
    };
    let t = null, r;
    return F4(n.z) || (t = nt3.create(n.z)), F4(n.Z) || (t || (t = new Ce2(n.Z)), r = n.Z), F4(n.q) || (n.M = (n.q - 1) * 3 + 1), F4(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), F4(n.u) || (n.S = Ir2(n.u)), [Object.keys(n).reduce((s, o) => {
      const a2 = e(o);
      return a2 && (s[a2] = n[o]), s;
    }, {}), t, r];
  }
  var jn2 = null;
  function Xl2() {
    return jn2 || (jn2 = L4.fromMillis(1555555555555)), jn2;
  }
  function eu2(n, e) {
    if (n.literal) return n;
    const t = Oe2.macroTokenToFormatOpts(n.val), r = Bs2(t, e);
    return r == null || r.includes(void 0) ? n : r;
  }
  function Vs2(n, e) {
    return Array.prototype.concat(...n.map((t) => eu2(t, e)));
  }
  var Ps2 = class {
    constructor(e, t) {
      if (this.locale = e, this.format = t, this.tokens = Vs2(Oe2.parseFormat(t), e), this.units = this.tokens.map((r) => ql2(r, e)), this.disqualifyingUnit = this.units.find((r) => r.invalidReason), !this.disqualifyingUnit) {
        const [r, i] = Jl2(this.units);
        this.regex = RegExp(r, "i"), this.handlers = i;
      }
    }
    explainFromTokens(e) {
      if (this.isValid) {
        const [t, r] = Kl2(e, this.regex, this.handlers), [i, s, o] = r ? Ql2(r) : [null, null, void 0];
        if (Lt2(r, "a") && Lt2(r, "H")) throw new kt2("Can't include meridiem when specifying 24-hour format");
        return { input: e, tokens: this.tokens, regex: this.regex, rawMatches: t, matches: r, result: i, zone: s, specificOffset: o };
      } else return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
    }
    get isValid() {
      return !this.disqualifyingUnit;
    }
    get invalidReason() {
      return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
  };
  function Ws2(n, e, t) {
    return new Ps2(n, t).explainFromTokens(e);
  }
  function tu2(n, e, t) {
    const { result: r, zone: i, specificOffset: s, invalidReason: o } = Ws2(n, e, t);
    return [r, i, s, o];
  }
  function Bs2(n, e) {
    if (!n) return null;
    const r = Oe2.create(e, n).dtFormatter(Xl2()), i = r.formatToParts(), s = r.resolvedOptions();
    return i.map((o) => jl2(o, n, s));
  }
  var Jn3 = "Invalid DateTime";
  var pi2 = 864e13;
  function qt2(n) {
    return new Ze3("unsupported zone", `the zone "${n.name}" is not supported`);
  }
  function Kn2(n) {
    return n.weekData === null && (n.weekData = Dn2(n.c)), n.weekData;
  }
  function Qn3(n) {
    return n.localWeekData === null && (n.localWeekData = Dn2(n.c, n.loc.getMinDaysInFirstWeek(), n.loc.getStartOfWeek())), n.localWeekData;
  }
  function vt3(n, e) {
    const t = { ts: n.ts, zone: n.zone, c: n.c, o: n.o, loc: n.loc, invalid: n.invalid };
    return new L4({ ...t, ...e, old: t });
  }
  function Us2(n, e, t) {
    let r = n - e * 60 * 1e3;
    const i = t.offset(r);
    if (e === i) return [r, e];
    r -= (i - e) * 60 * 1e3;
    const s = t.offset(r);
    return i === s ? [r, i] : [n - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
  }
  function yn3(n, e) {
    n += e * 60 * 1e3;
    const t = new Date(n);
    return { year: t.getUTCFullYear(), month: t.getUTCMonth() + 1, day: t.getUTCDate(), hour: t.getUTCHours(), minute: t.getUTCMinutes(), second: t.getUTCSeconds(), millisecond: t.getUTCMilliseconds() };
  }
  function Tn2(n, e, t) {
    return Us2(_n3(n), e, t);
  }
  function yi3(n, e) {
    const t = n.o, r = n.c.year + Math.trunc(e.years), i = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = { ...n.c, year: r, month: i, day: Math.min(n.c.day, Cn(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7 }, o = G3.fromObject({ years: e.years - Math.trunc(e.years), quarters: e.quarters - Math.trunc(e.quarters), months: e.months - Math.trunc(e.months), weeks: e.weeks - Math.trunc(e.weeks), days: e.days - Math.trunc(e.days), hours: e.hours, minutes: e.minutes, seconds: e.seconds, milliseconds: e.milliseconds }).as("milliseconds"), a2 = _n3(s);
    let [l, c] = Us2(a2, t, n.zone);
    return o !== 0 && (l += o, c = n.zone.offset(l)), { ts: l, o: c };
  }
  function _t2(n, e, t, r, i, s) {
    const { setZone: o, zone: a2 } = t;
    if (n && Object.keys(n).length !== 0 || e) {
      const l = e || a2, c = L4.fromObject(n, { ...t, zone: l, specificOffset: s });
      return o ? c : c.setZone(a2);
    } else return L4.invalid(new Ze3("unparsable", `the input "${i}" can't be parsed as ${r}`));
  }
  function gn3(n, e, t = true) {
    return n.isValid ? Oe2.create(J2.create("en-US"), { allowZ: t, forceSimple: true }).formatDateTimeFromString(n, e) : null;
  }
  function Xn3(n, e, t) {
    const r = n.c.year > 9999 || n.c.year < 0;
    let i = "";
    if (r && n.c.year >= 0 && (i += "+"), i += le2(n.c.year, r ? 6 : 4), t === "year") return i;
    if (e) {
      if (i += "-", i += le2(n.c.month), t === "month") return i;
      i += "-";
    } else if (i += le2(n.c.month), t === "month") return i;
    return i += le2(n.c.day), i;
  }
  function gi3(n, e, t, r, i, s, o) {
    let a2 = !t || n.c.millisecond !== 0 || n.c.second !== 0, l = "";
    switch (o) {
      case "day":
      case "month":
      case "year":
        break;
      default:
        if (l += le2(n.c.hour), o === "hour") break;
        if (e) {
          if (l += ":", l += le2(n.c.minute), o === "minute") break;
          a2 && (l += ":", l += le2(n.c.second));
        } else {
          if (l += le2(n.c.minute), o === "minute") break;
          a2 && (l += le2(n.c.second));
        }
        if (o === "second") break;
        a2 && (!r || n.c.millisecond !== 0) && (l += ".", l += le2(n.c.millisecond, 3));
    }
    return i && (n.isOffsetFixed && n.offset === 0 && !s ? l += "Z" : n.o < 0 ? (l += "-", l += le2(Math.trunc(-n.o / 60)), l += ":", l += le2(Math.trunc(-n.o % 60))) : (l += "+", l += le2(Math.trunc(n.o / 60)), l += ":", l += le2(Math.trunc(n.o % 60)))), s && (l += "[" + n.zone.ianaName + "]"), l;
  }
  var $s2 = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
  var nu2 = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
  var ru2 = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 };
  var vn3 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
  var iu2 = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
  var su2 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function wn2(n) {
    const e = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[n.toLowerCase()];
    if (!e) throw new $i3(n);
    return e;
  }
  function Ti3(n) {
    switch (n.toLowerCase()) {
      case "localweekday":
      case "localweekdays":
        return "localWeekday";
      case "localweeknumber":
      case "localweeknumbers":
        return "localWeekNumber";
      case "localweekyear":
      case "localweekyears":
        return "localWeekYear";
      default:
        return wn2(n);
    }
  }
  function ou2(n) {
    if (Yt2 === void 0 && (Yt2 = oe2.now()), n.type !== "iana") return n.offset(Yt2);
    const e = n.name;
    let t = wr2.get(e);
    return t === void 0 && (t = n.offset(Yt2), wr2.set(e, t)), t;
  }
  function vi3(n, e) {
    const t = dt2(e.zone, oe2.defaultZone);
    if (!t.isValid) return L4.invalid(qt2(t));
    const r = J2.fromObject(e);
    let i, s;
    if (F4(n.year)) i = oe2.now();
    else {
      for (const l of vn3) F4(n[l]) && (n[l] = $s2[l]);
      const o = ps2(n) || ys2(n);
      if (o) return L4.invalid(o);
      const a2 = ou2(t);
      [i, s] = Tn2(n, a2, t);
    }
    return new L4({ ts: i, zone: t, loc: r, o: s });
  }
  function wi3(n, e, t) {
    const r = F4(t.round) ? true : t.round, i = F4(t.rounding) ? "trunc" : t.rounding, s = (a2, l) => (a2 = _r2(a2, r || t.calendary ? 0 : 2, t.calendary ? "round" : i), e.loc.clone(t).relFormatter(t).format(a2, l)), o = (a2) => t.calendary ? e.hasSame(n, a2) ? 0 : e.startOf(a2).diff(n.startOf(a2), a2).get(a2) : e.diff(n, a2).get(a2);
    if (t.unit) return s(o(t.unit), t.unit);
    for (const a2 of t.units) {
      const l = o(a2);
      if (Math.abs(l) >= 1) return s(l, a2);
    }
    return s(n > e ? -0 : 0, t.units[t.units.length - 1]);
  }
  function Ei3(n) {
    let e = {}, t;
    return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
  }
  var Yt2;
  var wr2 = /* @__PURE__ */ new Map();
  var L4 = class _L {
    constructor(e) {
      const t = e.zone || oe2.defaultZone;
      let r = e.invalid || (Number.isNaN(e.ts) ? new Ze3("invalid input") : null) || (t.isValid ? null : qt2(t));
      this.ts = F4(e.ts) ? oe2.now() : e.ts;
      let i = null, s = null;
      if (!r) if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) [i, s] = [e.old.c, e.old.o];
      else {
        const a2 = ft2(e.o) && !e.old ? e.o : t.offset(this.ts);
        i = yn3(this.ts, a2), r = Number.isNaN(i.year) ? new Ze3("invalid input") : null, i = r ? null : i, s = r ? null : a2;
      }
      this._zone = t, this.loc = e.loc || J2.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = true;
    }
    static now() {
      return new _L({});
    }
    static local() {
      const [e, t] = Ei3(arguments), [r, i, s, o, a2, l, c] = t;
      return vi3({ year: r, month: i, day: s, hour: o, minute: a2, second: l, millisecond: c }, e);
    }
    static utc() {
      const [e, t] = Ei3(arguments), [r, i, s, o, a2, l, c] = t;
      return e.zone = Ce2.utcInstance, vi3({ year: r, month: i, day: s, hour: o, minute: a2, second: l, millisecond: c }, e);
    }
    static fromJSDate(e, t = {}) {
      const r = Va2(e) ? e.valueOf() : NaN;
      if (Number.isNaN(r)) return _L.invalid("invalid input");
      const i = dt2(t.zone, oe2.defaultZone);
      return i.isValid ? new _L({ ts: r, zone: i, loc: J2.fromObject(t) }) : _L.invalid(qt2(i));
    }
    static fromMillis(e, t = {}) {
      if (ft2(e)) return e < -pi2 || e > pi2 ? _L.invalid("Timestamp out of range") : new _L({ ts: e, zone: dt2(t.zone, oe2.defaultZone), loc: J2.fromObject(t) });
      throw new Se2(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
    }
    static fromSeconds(e, t = {}) {
      if (ft2(e)) return new _L({ ts: e * 1e3, zone: dt2(t.zone, oe2.defaultZone), loc: J2.fromObject(t) });
      throw new Se2("fromSeconds requires a numerical input");
    }
    static fromObject(e, t = {}) {
      e = e || {};
      const r = dt2(t.zone, oe2.defaultZone);
      if (!r.isValid) return _L.invalid(qt2(r));
      const i = J2.fromObject(t), s = bn2(e, Ti3), { minDaysInFirstWeek: o, startOfWeek: a2 } = ii3(s, i), l = oe2.now(), c = F4(t.specificOffset) ? r.offset(l) : t.specificOffset, p = !F4(s.ordinal), v2 = !F4(s.year), S2 = !F4(s.month) || !F4(s.day), T4 = v2 || S2, b2 = s.weekYear || s.weekNumber;
      if ((T4 || p) && b2) throw new kt2("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (S2 && p) throw new kt2("Can't mix ordinal dates with month/day");
      const _4 = b2 || s.weekday && !T4;
      let M3, k3, Q2 = yn3(l, c);
      _4 ? (M3 = iu2, k3 = nu2, Q2 = Dn2(Q2, o, a2)) : p ? (M3 = su2, k3 = ru2, Q2 = Yn3(Q2)) : (M3 = vn3, k3 = $s2);
      let X2 = false;
      for (const D3 of M3) {
        const V3 = s[D3];
        F4(V3) ? X2 ? s[D3] = k3[D3] : s[D3] = Q2[D3] : X2 = true;
      }
      const j2 = _4 ? Ha2(s, o, a2) : p ? La2(s) : ps2(s), E2 = j2 || ys2(s);
      if (E2) return _L.invalid(E2);
      const A3 = _4 ? ni3(s, o, a2) : p ? ri3(s) : s, [$4, ee] = Tn2(A3, c, r), ge3 = new _L({ ts: $4, zone: r, o: ee, loc: i });
      return s.weekday && T4 && e.weekday !== ge3.weekday ? _L.invalid("mismatched weekday", `you can't specify both a weekday of ${s.weekday} and a date of ${ge3.toISO()}`) : ge3.isValid ? ge3 : _L.invalid(ge3.invalid);
    }
    static fromISO(e, t = {}) {
      const [r, i] = bl2(e);
      return _t2(r, i, t, "ISO 8601", e);
    }
    static fromRFC2822(e, t = {}) {
      const [r, i] = Nl2(e);
      return _t2(r, i, t, "RFC 2822", e);
    }
    static fromHTTP(e, t = {}) {
      const [r, i] = Al2(e);
      return _t2(r, i, t, "HTTP", t);
    }
    static fromFormat(e, t, r = {}) {
      if (F4(e) || F4(t)) throw new Se2("fromFormat requires an input string and a format");
      const { locale: i = null, numberingSystem: s = null } = r, o = J2.fromOpts({ locale: i, numberingSystem: s, defaultToEN: true }), [a2, l, c, p] = tu2(o, e, t);
      return p ? _L.invalid(p) : _t2(a2, l, r, `format ${t}`, e, c);
    }
    static fromString(e, t, r = {}) {
      return _L.fromFormat(e, t, r);
    }
    static fromSQL(e, t = {}) {
      const [r, i] = Ll2(e);
      return _t2(r, i, t, "SQL", e);
    }
    static invalid(e, t = null) {
      if (!e) throw new Se2("need to specify a reason the DateTime is invalid");
      const r = e instanceof Ze3 ? e : new Ze3(e, t);
      if (oe2.throwOnInvalid) throw new ua2(r);
      return new _L({ invalid: r });
    }
    static isDateTime(e) {
      return e && e.isLuxonDateTime || false;
    }
    static parseFormatForOpts(e, t = {}) {
      const r = Bs2(e, J2.fromObject(t));
      return r ? r.map((i) => i ? i.val : null).join("") : null;
    }
    static expandFormat(e, t = {}) {
      return Vs2(Oe2.parseFormat(e), J2.fromObject(t)).map((i) => i.val).join("");
    }
    static resetCache() {
      Yt2 = void 0, wr2.clear();
    }
    get(e) {
      return this[e];
    }
    get isValid() {
      return this.invalid === null;
    }
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    get zone() {
      return this._zone;
    }
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    get weekYear() {
      return this.isValid ? Kn2(this).weekYear : NaN;
    }
    get weekNumber() {
      return this.isValid ? Kn2(this).weekNumber : NaN;
    }
    get weekday() {
      return this.isValid ? Kn2(this).weekday : NaN;
    }
    get isWeekend() {
      return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    get localWeekday() {
      return this.isValid ? Qn3(this).weekday : NaN;
    }
    get localWeekNumber() {
      return this.isValid ? Qn3(this).weekNumber : NaN;
    }
    get localWeekYear() {
      return this.isValid ? Qn3(this).weekYear : NaN;
    }
    get ordinal() {
      return this.isValid ? Yn3(this.c).ordinal : NaN;
    }
    get monthShort() {
      return this.isValid ? mn3.months("short", { locObj: this.loc })[this.month - 1] : null;
    }
    get monthLong() {
      return this.isValid ? mn3.months("long", { locObj: this.loc })[this.month - 1] : null;
    }
    get weekdayShort() {
      return this.isValid ? mn3.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
    }
    get weekdayLong() {
      return this.isValid ? mn3.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
    }
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    get offsetNameShort() {
      return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
    }
    get offsetNameLong() {
      return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
    }
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    get isInDST() {
      return this.isOffsetFixed ? false : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
    getPossibleOffsets() {
      if (!this.isValid || this.isOffsetFixed) return [this];
      const e = 864e5, t = 6e4, r = _n3(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), o = this.zone.offset(r - i * t), a2 = this.zone.offset(r - s * t);
      if (o === a2) return [this];
      const l = r - o * t, c = r - a2 * t, p = yn3(l, o), v2 = yn3(c, a2);
      return p.hour === v2.hour && p.minute === v2.minute && p.second === v2.second && p.millisecond === v2.millisecond ? [vt3(this, { ts: l }), vt3(this, { ts: c })] : [this];
    }
    get isInLeapYear() {
      return sn2(this.year);
    }
    get daysInMonth() {
      return Cn(this.year, this.month);
    }
    get daysInYear() {
      return this.isValid ? Rt2(this.year) : NaN;
    }
    get weeksInWeekYear() {
      return this.isValid ? Jt3(this.weekYear) : NaN;
    }
    get weeksInLocalWeekYear() {
      return this.isValid ? Jt3(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
    }
    resolvedLocaleOptions(e = {}) {
      const { locale: t, numberingSystem: r, calendar: i } = Oe2.create(this.loc.clone(e), e).resolvedOptions(this);
      return { locale: t, numberingSystem: r, outputCalendar: i };
    }
    toUTC(e = 0, t = {}) {
      return this.setZone(Ce2.instance(e), t);
    }
    toLocal() {
      return this.setZone(oe2.defaultZone);
    }
    setZone(e, { keepLocalTime: t = false, keepCalendarTime: r = false } = {}) {
      if (e = dt2(e, oe2.defaultZone), e.equals(this.zone)) return this;
      if (e.isValid) {
        let i = this.ts;
        if (t || r) {
          const s = e.offset(this.ts), o = this.toObject();
          [i] = Tn2(o, s, e);
        }
        return vt3(this, { ts: i, zone: e });
      } else return _L.invalid(qt2(e));
    }
    reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
      const i = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
      return vt3(this, { loc: i });
    }
    setLocale(e) {
      return this.reconfigure({ locale: e });
    }
    set(e) {
      if (!this.isValid) return this;
      const t = bn2(e, Ti3), { minDaysInFirstWeek: r, startOfWeek: i } = ii3(t, this.loc), s = !F4(t.weekYear) || !F4(t.weekNumber) || !F4(t.weekday), o = !F4(t.ordinal), a2 = !F4(t.year), l = !F4(t.month) || !F4(t.day), c = a2 || l, p = t.weekYear || t.weekNumber;
      if ((c || o) && p) throw new kt2("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (l && o) throw new kt2("Can't mix ordinal dates with month/day");
      let v2;
      s ? v2 = ni3({ ...Dn2(this.c, r, i), ...t }, r, i) : F4(t.ordinal) ? (v2 = { ...this.toObject(), ...t }, F4(t.day) && (v2.day = Math.min(Cn(v2.year, v2.month), v2.day))) : v2 = ri3({ ...Yn3(this.c), ...t });
      const [S2, T4] = Tn2(v2, this.o, this.zone);
      return vt3(this, { ts: S2, o: T4 });
    }
    plus(e) {
      if (!this.isValid) return this;
      const t = G3.fromDurationLike(e);
      return vt3(this, yi3(this, t));
    }
    minus(e) {
      if (!this.isValid) return this;
      const t = G3.fromDurationLike(e).negate();
      return vt3(this, yi3(this, t));
    }
    startOf(e, { useLocaleWeeks: t = false } = {}) {
      if (!this.isValid) return this;
      const r = {}, i = G3.normalizeUnit(e);
      switch (i) {
        case "years":
          r.month = 1;
        case "quarters":
        case "months":
          r.day = 1;
        case "weeks":
        case "days":
          r.hour = 0;
        case "hours":
          r.minute = 0;
        case "minutes":
          r.second = 0;
        case "seconds":
          r.millisecond = 0;
          break;
      }
      if (i === "weeks") if (t) {
        const s = this.loc.getStartOfWeek(), { weekday: o } = this;
        o < s && (r.weekNumber = this.weekNumber - 1), r.weekday = s;
      } else r.weekday = 1;
      if (i === "quarters") {
        const s = Math.ceil(this.month / 3);
        r.month = (s - 1) * 3 + 1;
      }
      return this.set(r);
    }
    endOf(e, t) {
      return this.isValid ? this.plus({ [e]: 1 }).startOf(e, t).minus(1) : this;
    }
    toFormat(e, t = {}) {
      return this.isValid ? Oe2.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : Jn3;
    }
    toLocaleString(e = xn2, t = {}) {
      return this.isValid ? Oe2.create(this.loc.clone(t), e).formatDateTime(this) : Jn3;
    }
    toLocaleParts(e = {}) {
      return this.isValid ? Oe2.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
    }
    toISO({ format: e = "extended", suppressSeconds: t = false, suppressMilliseconds: r = false, includeOffset: i = true, extendedZone: s = false, precision: o = "milliseconds" } = {}) {
      if (!this.isValid) return null;
      o = wn2(o);
      const a2 = e === "extended";
      let l = Xn3(this, a2, o);
      return vn3.indexOf(o) >= 3 && (l += "T"), l += gi3(this, a2, t, r, i, s, o), l;
    }
    toISODate({ format: e = "extended", precision: t = "day" } = {}) {
      return this.isValid ? Xn3(this, e === "extended", wn2(t)) : null;
    }
    toISOWeekDate() {
      return gn3(this, "kkkk-'W'WW-c");
    }
    toISOTime({ suppressMilliseconds: e = false, suppressSeconds: t = false, includeOffset: r = true, includePrefix: i = false, extendedZone: s = false, format: o = "extended", precision: a2 = "milliseconds" } = {}) {
      return this.isValid ? (a2 = wn2(a2), (i && vn3.indexOf(a2) >= 3 ? "T" : "") + gi3(this, o === "extended", t, e, r, s, a2)) : null;
    }
    toRFC2822() {
      return gn3(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    toHTTP() {
      return gn3(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    toSQLDate() {
      return this.isValid ? Xn3(this, true) : null;
    }
    toSQLTime({ includeOffset: e = true, includeZone: t = false, includeOffsetSpace: r = true } = {}) {
      let i = "HH:mm:ss.SSS";
      return (t || e) && (r && (i += " "), t ? i += "z" : e && (i += "ZZ")), gn3(this, i, true);
    }
    toSQL(e = {}) {
      return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
    }
    toString() {
      return this.isValid ? this.toISO() : Jn3;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
    }
    valueOf() {
      return this.toMillis();
    }
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    toJSON() {
      return this.toISO();
    }
    toBSON() {
      return this.toJSDate();
    }
    toObject(e = {}) {
      if (!this.isValid) return {};
      const t = { ...this.c };
      return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
    }
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    diff(e, t = "milliseconds", r = {}) {
      if (!this.isValid || !e.isValid) return G3.invalid("created by diffing an invalid DateTime");
      const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = Pa2(t).map(G3.normalizeUnit), o = e.valueOf() > this.valueOf(), a2 = o ? this : e, l = o ? e : this, c = Ul2(a2, l, s, i);
      return o ? c.negate() : c;
    }
    diffNow(e = "milliseconds", t = {}) {
      return this.diff(_L.now(), e, t);
    }
    until(e) {
      return this.isValid ? se2.fromDateTimes(this, e) : this;
    }
    hasSame(e, t, r) {
      if (!this.isValid) return false;
      const i = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: true });
      return s.startOf(t, r) <= i && i <= s.endOf(t, r);
    }
    equals(e) {
      return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
    }
    toRelative(e = {}) {
      if (!this.isValid) return null;
      const t = e.base || _L.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
      let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
      return Array.isArray(e.unit) && (i = e.unit, s = void 0), wi3(t, this.plus(r), { ...e, numeric: "always", units: i, unit: s });
    }
    toRelativeCalendar(e = {}) {
      return this.isValid ? wi3(e.base || _L.fromObject({}, { zone: this.zone }), this, { ...e, numeric: "auto", units: ["years", "months", "days"], calendary: true }) : null;
    }
    static min(...e) {
      if (!e.every(_L.isDateTime)) throw new Se2("min requires all arguments be DateTimes");
      return si3(e, (t) => t.valueOf(), Math.min);
    }
    static max(...e) {
      if (!e.every(_L.isDateTime)) throw new Se2("max requires all arguments be DateTimes");
      return si3(e, (t) => t.valueOf(), Math.max);
    }
    static fromFormatExplain(e, t, r = {}) {
      const { locale: i = null, numberingSystem: s = null } = r, o = J2.fromOpts({ locale: i, numberingSystem: s, defaultToEN: true });
      return Ws2(o, e, t);
    }
    static fromStringExplain(e, t, r = {}) {
      return _L.fromFormatExplain(e, t, r);
    }
    static buildFormatParser(e, t = {}) {
      const { locale: r = null, numberingSystem: i = null } = t, s = J2.fromOpts({ locale: r, numberingSystem: i, defaultToEN: true });
      return new Ps2(s, e);
    }
    static fromFormatParser(e, t, r = {}) {
      if (F4(e) || F4(t)) throw new Se2("fromFormatParser requires an input string and a format parser");
      const { locale: i = null, numberingSystem: s = null } = r, o = J2.fromOpts({ locale: i, numberingSystem: s, defaultToEN: true });
      if (!o.equals(t.locale)) throw new Se2(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${t.locale}`);
      const { result: a2, zone: l, specificOffset: c, invalidReason: p } = t.explainFromTokens(e);
      return p ? _L.invalid(p) : _t2(a2, l, r, `format ${t.format}`, e, c);
    }
    static get DATE_SHORT() {
      return xn2;
    }
    static get DATE_MED() {
      return zi3;
    }
    static get DATE_MED_WITH_WEEKDAY() {
      return fa2;
    }
    static get DATE_FULL() {
      return Zi3;
    }
    static get DATE_HUGE() {
      return Gi3;
    }
    static get TIME_SIMPLE() {
      return qi3;
    }
    static get TIME_WITH_SECONDS() {
      return Yi2;
    }
    static get TIME_WITH_SHORT_OFFSET() {
      return ji3;
    }
    static get TIME_WITH_LONG_OFFSET() {
      return Ji3;
    }
    static get TIME_24_SIMPLE() {
      return Ki3;
    }
    static get TIME_24_WITH_SECONDS() {
      return Qi3;
    }
    static get TIME_24_WITH_SHORT_OFFSET() {
      return Xi2;
    }
    static get TIME_24_WITH_LONG_OFFSET() {
      return es2;
    }
    static get DATETIME_SHORT() {
      return ts2;
    }
    static get DATETIME_SHORT_WITH_SECONDS() {
      return ns2;
    }
    static get DATETIME_MED() {
      return rs2;
    }
    static get DATETIME_MED_WITH_SECONDS() {
      return is2;
    }
    static get DATETIME_MED_WITH_WEEKDAY() {
      return ha2;
    }
    static get DATETIME_FULL() {
      return ss2;
    }
    static get DATETIME_FULL_WITH_SECONDS() {
      return os2;
    }
    static get DATETIME_HUGE() {
      return as2;
    }
    static get DATETIME_HUGE_WITH_SECONDS() {
      return ls2;
    }
  };
  function Zt3(n) {
    if (L4.isDateTime(n)) return n;
    if (n && n.valueOf && ft2(n.valueOf())) return L4.fromJSDate(n);
    if (n && typeof n == "object") return L4.fromObject(n);
    throw new Se2(`Unknown datetime argument: ${n}, of type ${typeof n}`);
  }
  var au2 = class {
    static LightenDarkenColor(e, t) {
      var r = false;
      e[0] == "#" && (e = e.slice(1), r = true);
      var i = parseInt(e, 16), s = (i >> 16) + t;
      s > 255 ? s = 255 : s < 0 && (s = 0);
      var o = (i >> 8 & 255) + t;
      o > 255 ? o = 255 : o < 0 && (o = 0);
      var a2 = (i & 255) + t;
      return a2 > 255 ? a2 = 255 : a2 < 0 && (a2 = 0), (r ? "#" : "") + (a2 | o << 8 | s << 16).toString(16);
    }
  };
  var lt2 = class {
    static isAnalog(e) {
      return [Hl.AnalogInOut, Hl.AnalogInput].includes(e?.Type?.Value);
    }
    static isCounter(e) {
      return e?.Type?.Value === Hl.Counter;
    }
    static isDigital(e) {
      return [Hl.DigitalInOut, Hl.DigitalInput].includes(e?.Type?.Value);
    }
    static isUniversal(e) {
      return [Hl.UniversalInput, Hl.UniversalInOut].includes(e?.Type?.Value);
    }
  };
  var lu2 = vs('<i class="fas fa-exclamation-triangle"></i>');
  var uu2 = vs('<p class="signal-value svelte-1v84ncx"> </p>');
  var cu2 = vs('<div class="led svelte-1v84ncx"></div>');
  var du2 = vs('<p class="signal-value svelte-1v84ncx"> </p>');
  var fu2 = vs('<div style="margin-left: 5px"> </div>');
  var hu2 = vs("<!> <!>", 1);
  var mu2 = vs('<div style="display: flex"><!></div> <!>', 1);
  var pu2 = vs("<main><!></main>");
  var yu3 = { hash: "svelte-1v84ncx", code: ".led.svelte-1v84ncx {margin:0 auto;width:24px;height:24px;background-color:var(--led-color);border-radius:50%;box-shadow:rgb(0 0 0 / 0%) 0px -1px 7px 1px, rgb(0 0 0) 0px -1px 9px inset, var(--led-light-color) 0px 2px 12px;}.signal-value.svelte-1v84ncx {font-weight:bold;}" };
  function gu2(n, e) {
    Wr(e, true), JE(n, yu3);
    const t = q2(e, "displayTimestamp", 3, false);
    let r = on(""), i = on(false), s = on(true), o = on(""), a2 = on("");
    const l = Jt({ "led-color": null, "led-light-color": null });
    let c;
    const p = "dd.MM.yyyy HH:mm:ss";
    Tn(() => (Io2(e.signalValue) ? (c?.unsubscribe(), c = e.signalValue.subscribe((E2) => {
      v2(e.signal, E2);
    })) : v2(e.signal, e.signalValue), () => {
      c && c.unsubscribe(), console.log("cleanup");
    }));
    function v2(E2, A3) {
      Mt(s, !A3 || !A3.value && A3.value !== 0, true), !F2(s) && (Mt(o, M3(A3.timestamp), true), _4(E2), lt2.isAnalog(E2) || lt2.isCounter(E2) ? S2(E2, A3) : lt2.isDigital(E2) ? T4(E2, A3) : lt2.isUniversal(E2) && b2(E2, A3));
    }
    function S2(E2, A3) {
      Mt(a2, M3(A3.timestamp), true);
      const $4 = E2.Settings;
      Mt(r, new Intl.NumberFormat("de-DE", { maximumFractionDigits: $4?.DecimalPlaces?.Value ?? 2 }).format(A3.value) + " " + $4?.Unit?.Value);
    }
    function T4(E2, A3) {
      const $4 = E2.Settings;
      Mt(i, A3?.value >= 1);
      const ee = F2(i) ? $4.DigitalTrueColor.Value : $4.DigitalFalseColor.Value;
      l["led-color"] = ee, l["led-light-color"] = au2.LightenDarkenColor(ee, 5);
    }
    function b2(E2, A3) {
      Mt(r, A3?.value, true);
    }
    function _4(E2, A3) {
      if (Mt(a2, F2(o), true), lt2.isDigital(E2)) {
        const $4 = E2.Settings;
        Mt(a2, F2(i) ? $4.DigitalTrueCaption.Value : $4.DigitalFalseCaption.Value + " - " + F2(a2), true);
      }
    }
    function M3(E2) {
      return E2 == null ? "" : (E2 instanceof Date ? L4.fromJSDate(E2) : typeof E2 == "number" ? L4.fromMillis(E2) : L4.fromISO(E2)).setLocale("de").toFormat(p);
    }
    const k3 = Gt(() => Object.entries(l).map(([E2, A3]) => `--${E2}:${A3}`).join(";"));
    var Q2 = pu2(), X2 = sv(Q2);
    {
      var j2 = (E2) => {
        la2(E2, { children: (A3, $4) => {
          var ee = mu2(), ge3 = Xt(ee), D3 = sv(ge3);
          {
            var V3 = (q4) => {
              var ve3 = lu2();
              ht(q4, ve3);
            }, H3 = (q4) => {
              var ve3 = hu2(), fe3 = Xt(ve3);
              {
                var qe2 = (B4) => {
                  var we3 = uu2(), ae3 = sv(we3);
                  HE(() => qE(ae3, F2(r))), ht(B4, we3);
                }, Ke = (B4) => {
                  var we3 = gn(), ae3 = Xt(we3);
                  {
                    var he2 = (Te2) => {
                      var ke2 = cu2();
                      HE(() => jv(ke2, F2(k3))), ht(Te2, ke2);
                    }, Pe = (Te2) => {
                      var ke2 = du2(), Ye2 = sv(ke2);
                      HE(() => qE(Ye2, F2(r))), ht(Te2, ke2);
                    };
                    ua(ae3, (Te2) => {
                      lt2.isDigital(e.signal) ? Te2(he2) : Te2(Pe, false);
                    }, true);
                  }
                  ht(B4, we3);
                };
                ua(fe3, (B4) => {
                  lt2.isAnalog(e.signal) || lt2.isCounter(e.signal) ? B4(qe2) : B4(Ke, false);
                });
              }
              var rt4 = Ol(fe3, 2);
              {
                var mt2 = (B4) => {
                  var we3 = fu2(), ae3 = sv(we3);
                  HE(() => qE(ae3, `(${F2(o) ?? ""})`)), ht(B4, we3);
                };
                ua(rt4, (B4) => {
                  t() && B4(mt2);
                });
              }
              ht(q4, ve3);
            };
            ua(D3, (q4) => {
              F2(s) ? q4(V3) : q4(H3, false);
            });
          }
          var z5 = Ol(ge3, 2);
          oa2(z5, { children: (q4, ve3) => {
            var fe3 = VE();
            HE(() => qE(fe3, F2(a2))), ht(q4, fe3);
          }, $$slots: { default: true } }), ht(A3, ee);
        }, $$slots: { default: true } });
      };
      ua(X2, (E2) => {
        e.signal && E2(j2);
      });
    }
    ht(n, Q2), Vr();
  }
  var Tu2 = class extends nn3 {
    constructor() {
      super(), this.liveValueService = rr2.resolve(ic), this._liveValueUnsub = new L3();
    }
    async query(e, t) {
      const r = { Name: 1, Path: 1, GroupId: 1, Type: 1, Settings: 1 }, i = await this.requestConfigurationEntities(ae.Signal, e, t, r);
      if (i.length === 0) return [];
      this._liveValueUnsub.next();
      const s = i.map((a2) => a2.Id), o = D2(this.liveValueService.connect()).pipe(Uo2(this._liveValueUnsub), Bo2(() => this.liveValueService.subscribeToSignalValues(s)), Wo2());
      return Promise.all(i.map(async (a2) => {
        const l = await this.getTenantForEntity(a2), c = l?.Id ?? l?.Root ?? a2.Path?.[0] ?? a2.Id, p = o.pipe(it((T4) => T4.find((b2) => b2.identifier === a2.Id)), Si2((T4) => !!T4)), v2 = { component: gu2, props: { signal: a2, signalValue: p } }, S2 = await this.resolveSubtitle(l?.Name, a2.Path ?? []);
        return new Ui3({ title: a2.Name.Value, subtitle: S2, infoText: l?.Name, icon: iC[ae.Signal], tooltip: () => this.entityNameService.resolvePathName(a2.Path ?? []), infoComponent: v2, context: { tenantId: c, groupId: a2.GroupId, signalId: a2.Id } });
      }));
    }
  };
  var vu2 = class extends nn3 {
    constructor() {
      super(...arguments), this.DEFAULT_ICON = "adk adk-staff-assignment";
    }
    async query(e, t) {
      let r = [];
      if (t) {
        const i = await this.getTenantById(t);
        i && (r = [i]);
      } else e && e.length > 0 && (r = await this.tenantHttpService.filterTenantsByName(e));
      return r.map((i) => new Pi3({ title: i.Name, icon: this.DEFAULT_ICON, tooltip: () => Promise.resolve(i.Name), context: { tenantId: i.Id, defaultApp: i.Root ? _e2.Configuration : _e2.Administration, isRootTenant: !!i.Root } }));
    }
  };
  var wu = class {
    constructor() {
      this._categoryOrder = ["Tenant", ae.Group, ae.Dashboard, ae.Signal, ae.Formula, ae.DataSource, ae.DataConnection, ae.ReportTemplate, "Command"], this._searchInitialized$ = new No2(false), this._searchRegex = /(>)?(!)?([A-Z]:)?(.*)/i, this._initSearch();
    }
    async search(e) {
      await _o2(this._searchInitialized$.pipe(Si2((c) => c)));
      const t = this._searchRegex.exec(e), i = t[1] === ">" ? yn2.getTenantIdFromUrl(window.location.pathname) : void 0, s = t[2] === "!", o = s ? void 0 : t[3], a2 = t[4]?.trim() ?? "";
      return (await Promise.all(this._categoryOrder.map(async (c) => {
        if (!this._allowedCategory(c, o, s)) return null;
        const p = this.categorieQueries[c];
        let v2 = [];
        try {
          v2 = await p.query(a2, i);
        } catch (S2) {
          return console.error(`Search query for category "${c}" failed`, S2), null;
        }
        return v2?.length ? { category: c, results: v2 } : null;
      }))).filter((c) => c !== null);
    }
    _allowedCategory(e, t, r = false) {
      if (r) return e === "Command";
      const i = { "T:": "Tenant", "G:": ae.Group, "D:": ae.Dashboard, "S:": ae.Signal };
      return t === void 0 || t.length === 0 || !i[t] ? true : e === i[t];
    }
    async _initSearch() {
      this.categorieQueries = { Tenant: new vu2(), [ae.Group]: new ea2(), [ae.Dashboard]: new $t3(ae.Dashboard, _e2.Dashboard), [ae.Signal]: new Tu2(), [ae.Formula]: new $t3(ae.Formula, _e2.Configuration), [ae.DataSource]: new $t3(ae.DataSource, _e2.Configuration), [ae.DataConnection]: new $t3(ae.DataConnection, _e2.Configuration), [ae.ReportTemplate]: new $t3(ae.ReportTemplate, _e2.Configuration, "fas fa-file-chart-column"), Command: new Xo2() }, this._searchInitialized$.next(true);
    }
  };
  var Eu2 = vs('<div class="empty-state svelte-1kofcb4"> </div>');
  var Su2 = vs('<span class="subtitle-text svelte-1kofcb4"> </span>');
  var Ou2 = vs('<div class="info-component svelte-1kofcb4"><!></div>');
  var xu2 = vs("<i></i>");
  var Du2 = vs('<div class="action-buttons svelte-1kofcb4"></div>');
  var Cu2 = vs('<div class="search-icon svelte-1kofcb4"><i> </i></div> <div class="result-content svelte-1kofcb4"><!> <!></div> <!> <!>', 1);
  var bu = vs('<div class="category-label svelte-1kofcb4"> </div> <!> <!> <!>', 1);
  var Nu2 = vs('<div class="search-input-container svelte-1kofcb4"><!></div> <div><div class="search-loading-bar-indicator svelte-1kofcb4"></div></div> <div class="result-list-container svelte-1kofcb4"><!></div>', 1);
  var Au2 = { hash: "svelte-1kofcb4", code: `.search-dialog-content.svelte-1kofcb4 {padding:12px;overflow:hidden;display:flex;flex-direction:column;gap:8px;}.result-list-container.svelte-1kofcb4 {overflow-y:auto;max-height:min(56vh, 560px);}.search-input-container.svelte-1kofcb4 {padding-top:6px;padding-inline:4px;}.search-loading-bar.svelte-1kofcb4 {height:2px;width:100%;overflow:hidden;opacity:0;transition:opacity 0.2s ease;}.search-loading-bar.active.svelte-1kofcb4 {opacity:1;}.search-loading-bar-indicator.svelte-1kofcb4 {height:100%;width:40%;background:var(--mdc-theme-primary, #6200ee);border-radius:1px;
    animation: svelte-1kofcb4-loading-slide 1.2s ease-in-out infinite;transform:translateX(-100%);}

  @keyframes svelte-1kofcb4-loading-slide {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(350%);
    }
  }.category-label.svelte-1kofcb4 {font-size:11px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;opacity:0.66;margin:8px 8px 4px;}.title-text.svelte-1kofcb4 {font-size:13px;font-weight:500;}.info-component.svelte-1kofcb4 {margin-left:auto;padding-left:10px;}.action-buttons.svelte-1kofcb4 {visibility:hidden;margin-left:auto;display:flex;align-items:center;gap:2px;padding-left:8px;}.action-buttons.svelte-1kofcb4:focus-within {visibility:visible;}.list-item:hover .action-buttons,
  .list-item:focus-within .action-buttons {visibility:visible;}.search-dialog .mdc-dialog__container {align-items:flex-start;margin-top:24px;}.search-dialog .mdc-dialog__surface {width:min(640px, calc(100vw - 24px));}.search-dialog .mdc-dialog__content {padding:0;}.search-text-field {min-height:46px;}.result-list .mdc-list-item,
  .result-list .mdc-deprecated-list-item {min-height:34px;height:auto;padding:4px 8px;font-size:13px;align-items:center;}.result-list .has-subtitle.mdc-list-item,
  .result-list .has-subtitle.mdc-deprecated-list-item {min-height:44px;padding-top:4px;padding-bottom:4px;}.search-icon.svelte-1kofcb4 i:where(.svelte-1kofcb4) {margin-right:4px;width:24px;height:24px;font-size:24px;}.result-list .mdc-list-item__graphic,
  .result-list .mdc-deprecated-list-item__graphic {margin-right:8px;width:16px;height:16px;font-size:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}.result-list .mdc-list-item__primary-text,
  .result-list .mdc-deprecated-list-item__text {line-height:1.2;}.result-content.svelte-1kofcb4 {display:flex;flex-direction:column;min-width:0;flex:1;gap:1px;overflow:hidden;}.subtitle-text.svelte-1kofcb4 {font-size:11px;font-weight:400;opacity:0.55;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:rtl;text-align:left;}.action-buttons .mdc-icon-button {width:28px;height:28px;font-size:14px;padding:7px;}.view-all-item.svelte-1kofcb4 {opacity:0.88;}.view-all-text.svelte-1kofcb4 {font-size:12px;font-weight:600;}.empty-state.svelte-1kofcb4 {font-size:13px;padding:12px 8px;opacity:0.72;}

  @media (max-width: 640px) {.search-dialog-content.svelte-1kofcb4 {padding:10px;gap:6px;}.search-dialog .mdc-dialog__container {margin-top:10px;}.result-list .mdc-list-item,
    .result-list .mdc-deprecated-list-item {padding:4px 6px;}
  }` };
  function Iu2(n, e) {
    Wr(e, true), JE(n, Au2);
    const t = "audako.search.selected-results", r = 12, i = ee(), s = new wu();
    let o = on(Jt(j2(i))), a2 = on(false), l = on(""), c = on(false), p = on(Jt(i)), v2 = null, S2;
    const T4 = new L3(), b2 = Gt(() => E2(F2(l), F2(o)));
    Tn(() => {
      T4.next(F2(l));
    }), T4.asObservable().pipe(Mi2(300), Si2((D3) => typeof D3 == "string"), it((D3) => D3.trim())).subscribe(async (D3) => {
      if (!D3) {
        Mt(c, false), Mt(o, j2(F2(p)), true);
        return;
      }
      if (D3.length <= 1) {
        Mt(c, false), Mt(o, [], true);
        return;
      }
      Mt(c, true);
      const V3 = D3.toLowerCase(), [H3, z5] = await Go2(s.search(V3));
      if (Mt(c, false), z5) {
        console.error(z5);
        return;
      }
      Mt(o, _4(H3), true);
    }), window.addEventListener("keydown", (D3) => {
      if (D3.ctrlKey && D3.code === "Space") {
        D3.preventDefault(), D3.stopImmediatePropagation(), F2(a2) ? Mt(a2, false) : (Mt(a2, true), k3(true));
        return;
      }
      if (!F2(a2)) return;
      if (D3.code === "Enter" && Q2()) {
        D3.preventDefault(), D3.stopImmediatePropagation();
        return;
      }
      D3.stopImmediatePropagation();
      const V3 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
      !D3.ctrlKey && !D3.shiftKey && !D3.altKey && !V3.includes(D3.code) && k3();
    }), window.addEventListener("keyup", (D3) => {
      if (!F2(a2)) return;
      D3.stopImmediatePropagation();
      const H3 = v2?.getElement?.()?.getElementsByTagName("input").item(0), z5 = S2?.getElement?.();
      if (D3.code === "ArrowDown") {
        D3.preventDefault();
        const ve3 = H3?.getRootNode()?.activeElement ?? document.activeElement, fe3 = z5?.getElementsByTagName("li").item(0);
        fe3 && ve3 === H3 && fe3.focus();
      }
    });
    function _4(D3) {
      const H3 = D3.filter((z5) => z5.results.length > 0).length > 1 ? 4 : 8;
      return D3.map((z5) => ({ displayedResults: z5.results.slice(0, H3), category: z5.category, totalResults: z5.results }));
    }
    function M3(D3) {
      const V3 = F2(o).find((z5) => z5.category === D3);
      if (!V3) return;
      Mt(o, [{ category: D3, displayedResults: V3.totalResults, totalResults: V3.totalResults }], true);
      const H3 = S2.getElement();
      Zo2.watchForDomChanges(H3).pipe(Po2()).subscribe(() => {
        const z5 = H3.getElementsByTagName("li").item(V3.displayedResults.length);
        z5 && z5.focus();
      });
    }
    function k3(D3 = false) {
      const V3 = v2?.getElement();
      if (V3) {
        const H3 = V3.getElementsByTagName("input").item(0);
        (H3?.getRootNode()?.activeElement ?? document.activeElement) !== H3 && (H3.focus(), D3 && H3.select());
      }
    }
    function Q2() {
      const D3 = S2?.getElement?.(), H3 = D3?.getRootNode()?.activeElement ?? document.activeElement;
      if (!D3 || !H3 || !D3.contains(H3) || H3.closest(".action-buttons, .mdc-icon-button, button")) return false;
      const q4 = H3.closest("li");
      return !q4 || !D3.contains(q4) ? false : (q4.click(), true);
    }
    function X2(D3) {
      $4(D3), D3.defaultAction(), Mt(a2, false);
    }
    function j2(D3) {
      const V3 = /* @__PURE__ */ new Map();
      return D3.forEach((H3) => {
        const z5 = $r2(H3);
        z5 && (V3.has(H3.category) || V3.set(H3.category, []), V3.get(H3.category).push(z5));
      }), Array.from(V3.entries()).map(([H3, z5]) => ({ category: H3, displayedResults: z5, totalResults: z5 }));
    }
    function E2(D3, V3) {
      const H3 = D3.trim();
      return H3.length === 0 && V3.length === 0 ? "No recent selections found. Type at least 2 characters to search." : H3.length === 1 ? "Type at least 2 characters to search." : H3.length > 1 && V3.length === 0 ? `No results found for "${H3}".` : null;
    }
    function A3(D3) {
      const V3 = D3.category === "Tenant" ? D3.icon : iC[D3.category] ?? D3.icon;
      return V3?.startsWith("mat ") ? { className: "material-icons-filled", content: V3.slice(4) } : { className: V3 };
    }
    function $4(D3) {
      const V3 = D3.toStoredSearchResult(Date.now()), H3 = zr2(V3);
      Mt(p, [V3, ...F2(p).filter((z5) => zr2(z5) !== H3)].slice(0, r), true), ge3(F2(p));
    }
    function ee() {
      try {
        const D3 = localStorage.getItem(t);
        if (!D3) return [];
        const V3 = JSON.parse(D3);
        return Array.isArray(V3) ? V3.filter((H3) => Qo2(H3)).filter((H3) => !!$r2(H3)).sort((H3, z5) => (z5.selectedAt ?? 0) - (H3.selectedAt ?? 0)).slice(0, r) : [];
      } catch {
        return [];
      }
    }
    function ge3(D3) {
      try {
        localStorage.setItem(t, JSON.stringify(D3));
      } catch {
      }
    }
    ar2(n, { class: "search-dialog", get open() {
      return F2(a2);
    }, set open(D3) {
      Mt(a2, D3, true);
    }, children: (D3, V3) => {
      or2(D3, { class: "search-dialog-content", children: (H3, z5) => {
        var q4 = Nu2(), ve3 = Xt(q4), fe3 = sv(ve3);
        {
          let ae3 = Gt(() => [zo2]);
          pr(ir2(fe3, { class: "search-text-field", get use() {
            return F2(ae3);
          }, style: "width: 100%", variant: "outlined", type: "text", label: "Search", get value() {
            return F2(l);
          }, set value(he2) {
            Mt(l, he2, true);
          } }), (he2) => v2 = he2, () => v2);
        }
        var qe2 = Ol(ve3, 2);
        let Ke;
        var rt4 = Ol(qe2, 2), mt2 = sv(rt4);
        {
          var B4 = (ae3) => {
            var he2 = Eu2(), Pe = sv(he2);
            HE(() => qE(Pe, F2(b2))), ht(ae3, he2);
          }, we3 = (ae3) => {
            pr(uC(ae3, { class: "result-list", children: (he2, Pe) => {
              var Te2 = gn(), ke2 = Xt(Te2);
              KE(ke2, 17, () => F2(o), XE, (Ye2, be2, We2) => {
                var Ee2 = bu(), ue2 = Xt(Ee2), Ne2 = sv(ue2), Qe2 = Ol(ue2, 2);
                KE(Qe2, 17, () => F2(be2).displayedResults, XE, (me3, U4) => {
                  {
                    let it3 = Gt(() => F2(U4).subtitle ? "has-subtitle" : "");
                    fC(me3, { get class() {
                      return `list-item ${F2(it3) ?? ""}`;
                    }, onclick: () => X2(F2(U4)), children: (st2, bt2) => {
                      const m2 = Gt(() => A3(F2(U4)));
                      var I4 = Cu2(), xe3 = Xt(I4), yt2 = sv(xe3), Rn2 = sv(yt2), Bt2 = Ol(xe3, 2), ln3 = sv(Bt2);
                      dC(ln3, { class: "title-text", children: (g3, f) => {
                        var y3 = VE();
                        HE(() => qE(y3, F2(U4).title)), ht(g3, y3);
                      }, $$slots: { default: true } });
                      var Hn2 = Ol(ln3, 2);
                      {
                        var Me2 = (g3) => {
                          var f = Su2(), y3 = sv(f);
                          HE(() => qE(y3, F2(U4).subtitle)), ht(g3, f);
                        };
                        ua(Hn2, (g3) => {
                          F2(U4).subtitle && g3(Me2);
                        });
                      }
                      var Ut3 = Ol(Bt2, 2);
                      {
                        var u2 = (g3) => {
                          const f = Gt(() => F2(U4).infoComponent.component);
                          var y3 = Ou2(), w4 = sv(y3);
                          Ma(w4, () => F2(f), (x2, N4) => {
                            N4(x2, ys(() => F2(U4).infoComponent.props));
                          }), ht(g3, y3);
                        };
                        ua(Ut3, (g3) => {
                          F2(U4).infoComponent && g3(u2);
                        });
                      }
                      var d3 = Ol(Ut3, 2);
                      {
                        var h2 = (g3) => {
                          var f = Du2();
                          KE(f, 21, () => F2(U4).extraActions, XE, (y3, w4) => {
                            nC(y3, { onclick: (x2) => {
                              x2.stopPropagation(), F2(w4).execute(F2(U4).context);
                            }, children: (x2, N4) => {
                              var P4 = xu2();
                              HE(() => Bv(P4, 1, Fv(F2(w4).icon), "svelte-1kofcb4")), ht(x2, P4);
                            }, $$slots: { default: true } });
                          }), ht(g3, f);
                        };
                        ua(d3, (g3) => {
                          F2(U4).extraActions?.length > 0 && g3(h2);
                        });
                      }
                      HE(() => {
                        Bv(yt2, 1, Fv(F2(m2).className), "svelte-1kofcb4"), qE(Rn2, F2(m2).content ?? "");
                      }), ht(st2, I4);
                    }, $$slots: { default: true } });
                  }
                });
                var pt2 = Ol(Qe2, 2);
                {
                  var je2 = (me3) => {
                    fC(me3, { class: "list-item view-all-item", onclick: () => M3(F2(be2).category), children: (U4, it3) => {
                      dC(U4, { class: "view-all-text", children: (st2, bt2) => {
                        var m2 = VE();
                        HE(() => qE(m2, `View All Results (+${F2(be2).totalResults.length - F2(be2).displayedResults.length})`)), ht(st2, m2);
                      }, $$slots: { default: true } });
                    }, $$slots: { default: true } });
                  };
                  ua(pt2, (me3) => {
                    F2(be2).displayedResults.length < F2(be2).totalResults.length && me3(je2);
                  });
                }
                var K2 = Ol(pt2, 2);
                {
                  var Ct2 = (me3) => {
                    z4(me3, {});
                  };
                  ua(K2, (me3) => {
                    We2 < F2(o).length - 1 && me3(Ct2);
                  });
                }
                HE(() => qE(Ne2, F2(be2).category)), ht(Ye2, Ee2);
              }), ht(he2, Te2);
            }, $$slots: { default: true } }), (he2) => S2 = he2, () => S2);
          };
          ua(mt2, (ae3) => {
            F2(b2) ? ae3(B4) : ae3(we3, false);
          });
        }
        HE(() => Ke = Bv(qe2, 1, "search-loading-bar svelte-1kofcb4", null, Ke, { active: F2(c) })), ht(H3, q4);
      }, $$slots: { default: true } });
    }, $$slots: { default: true } }), Vr();
  }
  var _u2 = vs('<main><!> <div class="powertoys-label svelte-1c81wj8">Audako - PowerToys</div></main>');
  var ku2 = { hash: "svelte-1c81wj8", code: ".powertoys-label.svelte-1c81wj8 {position:fixed;bottom:0;right:0;opacity:70%;background-color:var(--mdc-theme-on-surface);color:var(--mdc-theme-surface);padding:2px;font-size:10px;text-align:center;z-index:99999;}" };
  function Mu2(n, e) {
    Wr(e, true), JE(n, ku2);
    async function t() {
      const s = await v.getFeatureSettings(), o = (s?.enabled && s?.appSwitchSettings?.enabled) ?? false;
      localStorage.setItem("openInSameWindowEnabled", o.toString());
    }
    t();
    var r = _u2(), i = sv(r);
    Iu2(i, {}), ht(n, r), Vr();
  }
  var Ru2 = class {
    listenForConfigChanges() {
      yn2.subscribeToUrl().pipe(Ho2(2e3)).subscribe((e) => {
      });
    }
  };
  var Si3 = "audako-powertoys-shadow-host";
  var Oi3 = "audako-powertoys-root";
  var xi3 = "audako-powertoys-styles";
  function Hu2() {
    const n = document.body ?? document.documentElement;
    if (!n) return null;
    let e = document.getElementById(Si3);
    return e || (e = document.createElement("div"), e.id = Si3, e.style.all = "initial", n.appendChild(e)), e.shadowRoot ?? e.attachShadow({ mode: "open" });
  }
  function Lu2(n) {
    if (n.querySelector(`link[data-${xi3}]`)) return;
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = chrome.runtime.getURL("build/content.css"), t.setAttribute(`data-${xi3}`, "true"), n.appendChild(t);
  }
  function Fu2(n) {
    let e = n.getElementById(Oi3);
    return e || (e = document.createElement("div"), e.id = Oi3, n.appendChild(e)), e;
  }
  async function Vu2() {
    if (window["audako-powertoys"]) return;
    window["audako-powertoys"] = true;
    const n = await ko.requestHttpConfig(window.location.origin);
    oC(rr2), cC(n, localStorage.getItem("access_token") || ""), hr2({ extensionBaseUrl: chrome.runtime.getURL(""), contentCssUrl: chrome.runtime.getURL("build/content.css"), pdfWorkerUrl: chrome.runtime.getURL("build/pdf.worker.min.mjs") }), console.info(rr2), setTimeout(() => {
      const t = Hu2();
      t && (Lu2(t), GE(Mu2, { target: Fu2(t) }));
    }, 1e3), new Ru2().listenForConfigChanges();
  }
  Vu2();
  setTimeout(() => {
    console.log = console.info;
  }, 1e3);
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
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/**
* @license
* Copyright 2016 Google Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/**
* @license
* Copyright 2019 Google Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/**
* @license
* Copyright 2018 Google Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/**
* @license
* Copyright 2020 Google Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2017 Google Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
