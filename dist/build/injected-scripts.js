(() => {
  // dist/build/map.XBgQGlaY.js
  var w = function(r, n) {
    return w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i4) {
      t.__proto__ = i4;
    } || function(t, i4) {
      for (var o in i4) Object.prototype.hasOwnProperty.call(i4, o) && (t[o] = i4[o]);
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
  function m(r) {
    var n = typeof Symbol == "function" && Symbol.iterator, t = n && r[n], i4 = 0;
    if (t) return t.call(r);
    if (r && typeof r.length == "number") return { next: function() {
      return r && i4 >= r.length && (r = void 0), { value: r && r[i4++], done: !r };
    } };
    throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function _(r, n) {
    var t = typeof Symbol == "function" && r[Symbol.iterator];
    if (!t) return r;
    var i4 = t.call(r), o, e3 = [], u4;
    try {
      for (; (n === void 0 || n-- > 0) && !(o = i4.next()).done; ) e3.push(o.value);
    } catch (c) {
      u4 = { error: c };
    } finally {
      try {
        o && !o.done && (t = i4.return) && t.call(i4);
      } finally {
        if (u4) throw u4.error;
      }
    }
    return e3;
  }
  function g(r, n, t) {
    if (arguments.length === 2) for (var i4 = 0, o = n.length, e3; i4 < o; i4++) (e3 || !(i4 in n)) && (e3 || (e3 = Array.prototype.slice.call(n, 0, i4)), e3[i4] = n[i4]);
    return r.concat(e3 || Array.prototype.slice.call(n));
  }
  function y(r) {
    return typeof r == "function";
  }
  function M(r) {
    var n = function(i4) {
      Error.call(i4), i4.stack = new Error().stack;
    }, t = r(n);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var S = M(function(r) {
    return function(t) {
      r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i4, o) {
        return o + 1 + ") " + i4.toString();
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
      var n, t, i4, o, e3;
      if (!this.closed) {
        this.closed = true;
        var u4 = this._parentage;
        if (u4) if (this._parentage = null, Array.isArray(u4)) try {
          for (var c = m(u4), a2 = c.next(); !a2.done; a2 = c.next()) {
            var s = a2.value;
            s.remove(this);
          }
        } catch (h3) {
          n = { error: h3 };
        } finally {
          try {
            a2 && !a2.done && (t = c.return) && t.call(c);
          } finally {
            if (n) throw n.error;
          }
        }
        else u4.remove(this);
        var l2 = this.initialTeardown;
        if (y(l2)) try {
          l2();
        } catch (h3) {
          e3 = h3 instanceof S ? h3.errors : [h3];
        }
        var b4 = this._finalizers;
        if (b4) {
          this._finalizers = null;
          try {
            for (var f = m(b4), p2 = f.next(); !p2.done; p2 = f.next()) {
              var v2 = p2.value;
              try {
                U(v2);
              } catch (h3) {
                e3 = e3 ?? [], h3 instanceof S ? e3 = g(g([], _(e3)), _(h3.errors)) : e3.push(h3);
              }
            }
          } catch (h3) {
            i4 = { error: h3 };
          } finally {
            try {
              p2 && !p2.done && (o = f.return) && o.call(f);
            } finally {
              if (i4) throw i4.error;
            }
          }
        }
        if (e3) throw new S(e3);
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
    for (var t = [], i4 = 2; i4 < arguments.length; i4++) t[i4 - 2] = arguments[i4];
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
      var i4 = r.call(this) || this;
      return i4.isStopped = false, t ? (i4.destination = t, F(t) && t.add(i4)) : i4.destination = H, i4;
    }
    return n.create = function(t, i4, o) {
      return new O(t, i4, o);
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
      } catch (i4) {
        d(i4);
      }
    }, r.prototype.error = function(n) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(n);
      } catch (i4) {
        d(i4);
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
    function n(t, i4, o) {
      var e3 = r.call(this) || this, u4;
      return y(t) || !t ? u4 = { next: t ?? void 0, error: i4 ?? void 0, complete: o ?? void 0 } : u4 = t, e3.destination = new G(u4), e3;
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
      return r.reduce(function(i4, o) {
        return o(i4);
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
    }, r.prototype.subscribe = function(n, t, i4) {
      var o = this, e3 = K(n) ? n : new O(n, t, i4);
      return B(function() {
        var u4 = o, c = u4.operator, a2 = u4.source;
        e3.add(c ? c.call(e3, a2) : a2 ? o._subscribe(e3) : o._trySubscribe(e3));
      }), e3;
    }, r.prototype._trySubscribe = function(n) {
      try {
        return this._subscribe(n);
      } catch (t) {
        n.error(t);
      }
    }, r.prototype.forEach = function(n, t) {
      var i4 = this;
      return t = k(t), new t(function(o, e3) {
        var u4 = new O({ next: function(c) {
          try {
            n(c);
          } catch (a2) {
            e3(a2), u4.unsubscribe();
          }
        }, error: e3, complete: o });
        i4.subscribe(u4);
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
      return n = k(n), new n(function(i4, o) {
        var e3;
        t.subscribe(function(u4) {
          return e3 = u4;
        }, function(u4) {
          return o(u4);
        }, function() {
          return i4(e3);
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
        } catch (i4) {
          this.error(i4);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function X(r, n, t, i4, o) {
    return new Z(r, n, t, i4, o);
  }
  var Z = (function(r) {
    E(n, r);
    function n(t, i4, o, e3, u4, c) {
      var a2 = r.call(this, t) || this;
      return a2.onFinalize = u4, a2.shouldUnsubscribe = c, a2._next = i4 ? function(s) {
        try {
          i4(s);
        } catch (l2) {
          t.error(l2);
        }
      } : r.prototype._next, a2._error = e3 ? function(s) {
        try {
          e3(s);
        } catch (l2) {
          t.error(l2);
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
        var i4 = this.closed;
        r.prototype.unsubscribe.call(this), !i4 && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
      }
    }, n;
  })(T);
  function et(r) {
    return r && y(r.schedule);
  }
  function it(r, n) {
    return W(function(t, i4) {
      var o = 0;
      t.subscribe(X(i4, function(e3) {
        i4.next(r.call(n, e3, o++));
      }));
    });
  }

  // dist/build/timer.Dfeo3Vkk.js
  var y2 = { now: function() {
    return Date.now();
  } };
  var A = (function(n) {
    E(r, n);
    function r(t, e3) {
      return n.call(this) || this;
    }
    return r.prototype.schedule = function(t, e3) {
      return this;
    }, r;
  })(P);
  var u = { setInterval: function(n, r) {
    for (var t = [], e3 = 2; e3 < arguments.length; e3++) t[e3 - 2] = arguments[e3];
    return setInterval.apply(void 0, g([n, r], _(t)));
  }, clearInterval: function(n) {
    return clearInterval(n);
  }, delegate: void 0 };
  var w2 = (function(n) {
    E(r, n);
    function r(t, e3) {
      var i4 = n.call(this, t, e3) || this;
      return i4.scheduler = t, i4.work = e3, i4.pending = false, i4;
    }
    return r.prototype.schedule = function(t, e3) {
      var i4;
      if (e3 === void 0 && (e3 = 0), this.closed) return this;
      this.state = t;
      var s = this.id, o = this.scheduler;
      return s != null && (this.id = this.recycleAsyncId(o, s, e3)), this.pending = true, this.delay = e3, this.id = (i4 = this.id) !== null && i4 !== void 0 ? i4 : this.requestAsyncId(o, this.id, e3), this;
    }, r.prototype.requestAsyncId = function(t, e3, i4) {
      return i4 === void 0 && (i4 = 0), u.setInterval(t.flush.bind(t, this), i4);
    }, r.prototype.recycleAsyncId = function(t, e3, i4) {
      if (i4 === void 0 && (i4 = 0), i4 != null && this.delay === i4 && this.pending === false) return e3;
      e3 != null && u.clearInterval(e3);
    }, r.prototype.execute = function(t, e3) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var i4 = this._execute(t, e3);
      if (i4) return i4;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, r.prototype._execute = function(t, e3) {
      var i4 = false, s;
      try {
        this.work(t);
      } catch (o) {
        i4 = true, s = o || new Error("Scheduled action threw falsy error");
      }
      if (i4) return this.unsubscribe(), s;
    }, r.prototype.unsubscribe = function() {
      if (!this.closed) {
        var t = this, e3 = t.id, i4 = t.scheduler, s = i4.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, I(s, this), e3 != null && (this.id = this.recycleAsyncId(i4, e3, null)), this.delay = null, n.prototype.unsubscribe.call(this);
      }
    }, r;
  })(A);
  var a = (function() {
    function n(r, t) {
      t === void 0 && (t = n.now), this.schedulerActionCtor = r, this.now = t;
    }
    return n.prototype.schedule = function(r, t, e3) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(e3, t);
    }, n.now = y2.now, n;
  })();
  var g2 = (function(n) {
    E(r, n);
    function r(t, e3) {
      e3 === void 0 && (e3 = a.now);
      var i4 = n.call(this, t, e3) || this;
      return i4.actions = [], i4._active = false, i4;
    }
    return r.prototype.flush = function(t) {
      var e3 = this.actions;
      if (this._active) {
        e3.push(t);
        return;
      }
      var i4;
      this._active = true;
      do
        if (i4 = t.execute(t.state, t.delay)) break;
      while (t = e3.shift());
      if (this._active = false, i4) {
        for (; t = e3.shift(); ) t.unsubscribe();
        throw i4;
      }
    }, r;
  })(a);
  var I2 = new g2(w2);
  var _2 = I2;
  function b(n) {
    return n instanceof Date && !isNaN(n);
  }
  function k2(n, r, t) {
    n === void 0 && (n = 0), t === void 0 && (t = _2);
    var e3 = -1;
    return r != null && (et(r) ? t = r : e3 = r), new nt(function(i4) {
      var s = b(n) ? +n - t.now() : n;
      s < 0 && (s = 0);
      var o = 0;
      return t.schedule(function() {
        i4.closed || (i4.next(o++), 0 <= e3 ? this.schedule(void 0, e3) : i4.complete());
      }, s);
    });
  }

  // dist/build/cross-world-events.hPx8Cn5v.js
  function g3(a2, t) {
    return W(function(n, o) {
      var r = 0;
      n.subscribe(X(o, function(c) {
        return a2.call(t, c, r++) && o.next(c);
      }));
    });
  }
  var i = ((a2) => (a2.Dashboard = "Dashboard", a2.Configuration = "Configuration", a2.Administration = "Administration", a2.Maintenance = "Maintenance", a2))(i || {});
  var e = class e2 {
    static openApp(t, n, o, r, c) {
      const s = e2.buildAppUrl(t, n, o, r, c);
      window.location.href = s;
    }
    static buildAppUrl(t, n, o, r, c) {
      let s = null;
      switch (t) {
        case i.Dashboard:
          s = `/${n}/application/${o ?? ""}`, r && (s += `/${r ?? ""}`);
          break;
        case i.Configuration:
          s = `/${n}/config/${o ?? ""}`, r && c && (s += `/${r}/${c}`);
          break;
        case i.Administration:
          s = `administration/${n}`;
          break;
      }
      return s;
    }
    static getTenantIdFromUrl(t) {
      if (!t || t.length === 0) return null;
      const n = t.split("/")[1];
      return n.length === 24 ? n : null;
    }
    static getCurrentApp() {
      return e2.getAppFromUrl(window.location.pathname);
    }
    static getAppFromUrl(t) {
      if (!t || t.length === 0) return null;
      const n = t.split("/")[2];
      return e2.appRouteMapping[n] ? e2.appRouteMapping[n] : null;
    }
    static getAppUrl(t) {
      let n = null;
      return Object.keys(e2.appRouteMapping).forEach((o) => {
        e2.appRouteMapping[o] === t && (n = o);
      }), n;
    }
    static getGroupIdFromUrl(t) {
      if (!e2.getAppFromUrl(t)) return null;
      const o = t.match(/(.{24})\/(application|config)\/(.{24})/);
      return o ? o[3] : null;
    }
    static subscribeToUrl() {
      let t = null;
      return k2(0, 50).pipe(g3(() => t !== window.location.pathname), it(() => (t = window.location.pathname, t)));
    }
    static isActiveApp(t) {
      const n = window.location.pathname, o = { [i.Administration]: "administration", [i.Configuration]: "config", [i.Dashboard]: "application", [i.Maintenance]: "maintenance" };
      return n.includes(o[t]);
    }
    static isInEntityConfiguration() {
      const t = window.location.pathname;
      return e2.isActiveApp(i.Configuration) && t.includes("detail");
    }
    static getEntityConfigurationDetails() {
      const n = window.location.pathname.match(/(.{24})\/config\/(.{24})\/detail\/(.{3,24})\/([A-z]+)/);
      return n ? { tenantId: n[1], groupId: n[2], entityId: n[3], entityType: n[4] } : null;
    }
    static isInEntityList() {
      return window.location.pathname.includes("list");
    }
    static getEntityListDetails() {
      const n = window.location.pathname.match(/(.{24})\/config\/(.{24})\/list\/([A-z]+)/);
      return n ? { tenantId: n[1], groupId: n[2], entityType: n[3] } : null;
    }
  };
  e.appRouteMapping = { config: i.Configuration, application: i.Dashboard };
  var p = e;
  var u2 = "audako-powertoys-extension";
  var h = "audako-powertoys-main";
  var l = "audako-powertoys:event";
  var w3 = "audako-powertoys:event:ack";
  var A2 = "entity.updated";
  var T2 = "entity.created";
  var y3 = [A2, T2];
  var N = new Set(y3);
  function b2(a2) {
    return !!a2 && typeof a2 == "object";
  }
  function R2(a2) {
    return typeof a2 == "string" && N.has(a2);
  }
  function I3(a2) {
    return b2(a2) && a2.source === u2 && a2.type === l;
  }
  function _3(a2, t, n = true) {
    const o = { source: h, type: w3, requestId: t, payload: { event: a2, ok: n } };
    window.postMessage(o, "*");
  }

  // dist/build/injected-scripts.js
  var i2 = class i3 {
    static getLViewRegistry() {
      return window.__ngLViewRegistry__;
    }
    static getHeaderOffset() {
      const e3 = window.__ngLViewIndices__?.HEADER_OFFSET;
      return typeof e3 == "number" ? e3 : i3.DEFAULT_HEADER_OFFSET;
    }
    static resolveLViewFromContext(e3) {
      if (Array.isArray(e3)) return e3;
      if (typeof e3 == "number") return i3.getLViewRegistry()?.get(e3) ?? null;
      if (e3 && typeof e3 == "object") {
        const t = e3;
        if (Array.isArray(t.lView)) return t.lView;
        if (typeof t.lViewId == "number") return i3.getLViewRegistry()?.get(t.lViewId) ?? null;
      }
      return null;
    }
    static unwrapRNode(e3) {
      let t = e3;
      for (; Array.isArray(t); ) t = t[0];
      return t;
    }
    static findNodeIndexInLView(e3, t) {
      const n = e3[i3.LVIEW_TVIEW_INDEX], r = n && typeof n.bindingStartIndex == "number" ? n.bindingStartIndex : e3.length, o = Math.min(i3.getHeaderOffset(), r);
      for (let s = o; s < r; s++) if (i3.unwrapRNode(e3[s]) === t) return s;
      return -1;
    }
    static getComponentAtNodeIndex(e3, t) {
      const r = e3[i3.LVIEW_TVIEW_INDEX]?.data?.[t];
      if (!r) return null;
      const o = r.directiveStart, s = r.componentOffset;
      if (typeof o == "number" && typeof s == "number" && s > -1) return e3[o + s] ?? null;
      const c = r.directiveEnd;
      if (typeof o != "number" || typeof c != "number") return null;
      for (let l2 = o; l2 < c; l2++) {
        const d2 = e3[l2];
        if (d2?.constructor?.\u0275cmp) return d2;
      }
      return null;
    }
    static getParentLView(e3) {
      const t = e3[i3.LVIEW_PARENT_INDEX];
      if (!Array.isArray(t)) return null;
      if (t[i3.LCONTAINER_TYPE_INDEX] === true) {
        const n = t[i3.LVIEW_PARENT_INDEX];
        return Array.isArray(n) ? n : null;
      }
      return t;
    }
    static getOwningComponentFromLView(e3) {
      let t = e3;
      for (; t && t[i3.LVIEW_TVIEW_INDEX]?.type === i3.TVIEW_EMBEDDED_TYPE; ) t = i3.getParentLView(t);
      return t ? t[i3.LVIEW_CONTEXT_INDEX] ?? null : null;
    }
    static getComponentByTagName(e3) {
      const t = document.querySelector(e3);
      return t ? i3.getComponentFromElement(t) : null;
    }
    static getFirstRouterOutletChildByComponentSelector(e3) {
      const t = document.querySelector(e3);
      if (!t) return null;
      const n = t.querySelector("router-outlet");
      if (!n) return null;
      const r = n.firstElementChild ?? n.nextElementSibling;
      return r ? i3.getComponentFromElement(r) : null;
    }
    static getAllComponentsByTagName(e3) {
      const t = document.querySelectorAll(e3), n = [];
      return t.forEach((r) => {
        const o = i3.getComponentFromElement(r);
        o && n.push(o);
      }), n;
    }
    static getComponentFromElement(e3) {
      const t = window.ng?.getComponent;
      if (typeof t == "function") try {
        const s = t(e3);
        if (s != null) return s;
      } catch {
      }
      const n = e3.__ngContext__;
      if (console.log("[audako-powertoys] Retrieving Angular component from element:", { element: e3, context: n }), n == null) return null;
      const r = i3.resolveLViewFromContext(n);
      if (!r) return null;
      const o = i3.findNodeIndexInLView(r, e3);
      if (o !== -1) {
        const s = i3.getComponentAtNodeIndex(r, o);
        if (s) return s;
      }
      return i3.getOwningComponentFromLView(r);
    }
    static extendMethod(e3, t, n) {
      const r = e3.__proto__, o = r[t];
      return r[t] = (...s) => (n(s), o.bind(e3)(s)), e3;
    }
    static extendMethodAsync(e3, t, n) {
      const r = e3[t + "_original"] ?? e3[t];
      return e3[t + "_original"] = r, e3[t] = async (...o) => (await n(o), r.bind(e3)(o)), e3;
    }
    static extendProtoMethodAsync(e3, t, n) {
      const r = e3.__proto__[t + "_original"] ?? e3.__proto__[t];
      return e3.__proto__[t + "_original"] = r, e3.__proto__[t] = async (...o) => (await n(o), r.bind(e3)(o)), e3;
    }
  };
  i2.LVIEW_TVIEW_INDEX = 1, i2.LVIEW_PARENT_INDEX = 3, i2.LVIEW_CONTEXT_INDEX = 8, i2.DEFAULT_HEADER_OFFSET = 25, i2.TVIEW_EMBEDDED_TYPE = 2, i2.LCONTAINER_TYPE_INDEX = 1;
  var u3 = i2;
  function V2(a2) {
  }
  function m2(a2) {
    if (console.log("[audako-powertoys] Received entity created event in extension world:", a2.type, a2.detail), p.getCurrentApp() !== i.Configuration) return;
    const e3 = u3.getComponentByTagName("audako4-sidebar"), t = u3.getFirstRouterOutletChildByComponentSelector("audako4-configuration");
    if (console.log(t), console.log("[audako-powertoys] Retrieved sidebar component for entity created event:", e3), e3 && typeof e3.configDataChangedService?.configDataChangedTrigger == "function") {
      const n = a2.detail;
      e3.configDataChangedService.configDataChangedTrigger({ id: n.entityId, type: n.entityType }, true), console.log("[audako-powertoys] Triggered sidebar configDataChangedTrigger due to entity created event:", n);
    }
    t && typeof t._requestTypeCounts == "function" && (t._requestTypeCounts(), console.log("[audako-powertoys] Triggered types overview _requestTypeCounts due to entity created event"));
  }
  function I4() {
    document.addEventListener(A2, V2), document.addEventListener(T2, m2);
  }
  function v() {
    I4(), window.addEventListener("message", (a2) => {
      if (a2.source !== window || !I3(a2.data)) return;
      const e3 = a2.data.payload?.name;
      R2(e3) && (document.dispatchEvent(new CustomEvent(e3, { detail: a2.data.payload?.detail ?? null })), a2.data.requestId && _3(e3, a2.data.requestId, true));
    });
  }
  var L2 = /main-[A-Za-z0-9]+\.js$/;
  function h2() {
    console.info("[audako-powertoys] Script interceptor active");
    const a2 = new MutationObserver((e3) => {
      for (const t of e3) for (let n = 0; n < t.addedNodes.length; n++) {
        const r = t.addedNodes[n];
        if (!(r instanceof HTMLScriptElement)) continue;
        const o = r.getAttribute("src");
        !o || !L2.test(o) || (console.info("[audako-powertoys] Intercepted Angular main script:", o), r.type = "javascript/blocked", r.remove(), a2.disconnect(), T3(o));
      }
    });
    a2.observe(document.documentElement, { childList: true, subtree: true });
  }
  async function T3(a2) {
    try {
      const e3 = new URL(a2, document.baseURI).href, t = e3.substring(0, e3.lastIndexOf("/") + 1);
      console.info("[audako-powertoys] Fetching main script from:", e3), console.info("[audako-powertoys] Base URL for imports:", t);
      const n = await fetch(e3);
      if (!n.ok) {
        console.error("[audako-powertoys] Failed to fetch main script:", n.status, n.statusText);
        return;
      }
      let r = await n.text();
      r = A3(r, t), r = N2(r), console.info(`[audako-powertoys] Modified script content:
`, r.replace(/;/g, `;
`));
      const o = new Blob([r], { type: "application/javascript" }), s = URL.createObjectURL(o), c = document.createElement("script");
      c.type = "module", c.src = s, c.setAttribute("data-powertoys-injected", "true"), c.onload = () => {
        URL.revokeObjectURL(s), console.info("[audako-powertoys] Modified main script loaded successfully");
      }, c.onerror = (l2) => {
        URL.revokeObjectURL(s), console.error("[audako-powertoys] Failed to load modified main script:", l2);
      }, (document.head || document.documentElement).appendChild(c);
    } catch (e3) {
      console.error("[audako-powertoys] Error replacing main script:", e3);
    }
  }
  function A3(a2, e3) {
    return a2.replace(/(from\s*|import\s*\(|import\s*)(['"])(\.\.?\/)/g, (t, n, r, o) => n + r + e3 + o.substring(2));
  }
  function N2(a2) {
    const e3 = a2.match(/ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g);
    console.info("[audako-powertoys] Console suppression pattern found:", e3 ? e3.length + " match(es)" : "none"), a2 = a2.replace(/ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g, "");
    const t = a2.match(/\.bootstrapModule\(([^)]+)\)\.catch\(/g);
    console.info("[audako-powertoys] Bootstrap pattern found:", t ? t.length + " match(es): " + JSON.stringify(t) : "none"), a2 = a2.replace(/\.bootstrapModule\(([^)]+)\)\.catch\(/g, '.bootstrapModule($1).then(function(ref) {window.__ngRef__ = ref;window.__ngInjector__ = ref.injector;var ngVerEl = document.querySelector("[ng-version]");var ngVer = ngVerEl ? ngVerEl.getAttribute("ng-version") : null;var ngMajor = ngVer ? parseInt(ngVer.split(".")[0], 10) : 0;window.__ngVersion__ = ngVer;console.log("[audako-powertoys] Angular version:", ngVer, "(major:", ngMajor + ")");var LVIEW_CONTEXT = 8;var LVIEW_TVIEW = 1;var LVIEW_PARENT = 3;var LVIEW_ID;var LVIEW_HEADER_OFFSET;if (ngMajor >= 19) {LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 27;} else if (ngMajor >= 16) {LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 25;} else if (ngMajor >= 14) {LVIEW_ID = 20; LVIEW_HEADER_OFFSET = 22;} else {LVIEW_ID = null; LVIEW_HEADER_OFFSET = 20;}window.__ngLViewIndices__ = {CONTEXT: LVIEW_CONTEXT,TVIEW: LVIEW_TVIEW,PARENT: LVIEW_PARENT,ID: LVIEW_ID,HEADER_OFFSET: LVIEW_HEADER_OFFSET};console.log("[audako-powertoys] LView indices:", window.__ngLViewIndices__);function ngGetLView(el) {var ctx = el && el.__ngContext__;if (typeof ctx === "number" && window.__ngLViewRegistry__) {return window.__ngLViewRegistry__.get(ctx) || null;}if (ctx && typeof ctx === "object") {if (Array.isArray(ctx.lView)) return ctx.lView;if (typeof ctx.lViewId === "number" && window.__ngLViewRegistry__) {return window.__ngLViewRegistry__.get(ctx.lViewId) || null;}}return Array.isArray(ctx) ? ctx : null;}function ngUnwrapRNode(value) {while (Array.isArray(value)) { value = value[0]; }return value;}function ngFindNodeIndex(lView, el) {if (!lView) return -1;var tView = lView[LVIEW_TVIEW];var end = tView && typeof tView.bindingStartIndex === "number" ? tView.bindingStartIndex : lView.length;for (var i = LVIEW_HEADER_OFFSET; i < end; i++) {if (ngUnwrapRNode(lView[i]) === el) return i;}return -1;}function ngGetComponentAtNodeIndex(lView, nodeIndex) {var tView = lView && lView[LVIEW_TVIEW];var tNode = tView && tView.data ? tView.data[nodeIndex] : null;if (!tNode) return null;var directiveStart = tNode.directiveStart;var componentOffset = tNode.componentOffset;if (typeof directiveStart === "number" && typeof componentOffset === "number" && componentOffset > -1) {return lView[directiveStart + componentOffset] || null;}var directiveEnd = tNode.directiveEnd;if (typeof directiveStart === "number" && typeof directiveEnd === "number") {for (var i = directiveStart; i < directiveEnd; i++) {var dir = lView[i];if (dir && dir.constructor && dir.constructor.\u0275cmp) return dir;}}return null;}function ngGetParentLView(lView) {var parent = lView && lView[LVIEW_PARENT];if (!Array.isArray(parent)) return null;if (parent[1] === true) return Array.isArray(parent[LVIEW_PARENT]) ? parent[LVIEW_PARENT] : null;return parent;}function ngGetOwningComponent(el) {var lView = ngGetLView(el);if (!lView) return null;while (lView && lView[LVIEW_TVIEW] && lView[LVIEW_TVIEW].type === 2) {lView = ngGetParentLView(lView);}return lView ? lView[LVIEW_CONTEXT] : null;}function ngGetComponent(el) {var lView = ngGetLView(el);if (!lView) return null;var nodeIndex = ngFindNodeIndex(lView, el);if (nodeIndex === -1) return null;return ngGetComponentAtNodeIndex(lView, nodeIndex);}function walkDomTree(el, depth) {depth = depth || 0;var node = { element: el.tagName, depth: depth, children: [] };var lView = ngGetLView(el);if (lView) {var comp = ngGetComponent(el) || ngGetOwningComponent(el);if (comp && typeof comp === "object" && comp.constructor) {node.component = comp;node.componentName = comp.constructor.name;if (LVIEW_ID !== null) node.lViewId = lView[LVIEW_ID];}}var children = el.children;for (var i = 0; i < children.length; i++) {var child = walkDomTree(children[i], depth + 1);if (child.component || child.children.length > 0) {node.children.push(child);}}return node;}setTimeout(function() {if (LVIEW_ID !== null && !window.__ngLViewRegistry__) {console.warn("[audako-powertoys] LView registry not captured!");return;}if (window.__ngLViewRegistry__) {console.log("[audako-powertoys] LView registry captured with", window.__ngLViewRegistry__.size, "entries");}window.__ngComponentTree__ = walkDomTree(document.body, 0);console.log("[audako-powertoys] Component tree:", window.__ngComponentTree__);}, 3000);console.log("[audako-powertoys] Angular bootstrap captured!", ref.injector);return ref;}).catch(');
    const n = a2.match(/\.bootstrapModule\([^)]+\)\.then\(function[\s\S]{0,200}/);
    return console.info("[audako-powertoys] Rewritten bootstrap:", n ? n[0] : "not found"), ["// Hook Map.prototype.set to capture Angular's internal LView registry.", "// Angular 14+ stores LViews in a module-scoped Map keyed by numeric IDs.", "// We detect this by fingerprinting LView arrays:", "//   - Array with 22+ slots (min HEADER_OFFSET across v14+ is 22)", '//   - [1] is a TView object (has "blueprint" and "type" properties)', "//   - ID at [19] (v16+) or [20] (v14-15) matches the Map key", "// This fires exactly once, then restores Map.prototype.set.", "(function() {", "  var origSet = Map.prototype.set;", "  Map.prototype.set = function(key, value) {", "    if (!window.__ngLViewRegistry__", '        && typeof key === "number"', "        && Array.isArray(value)", "        && value.length >= 22", "        && (value[19] === key || value[20] === key)", '        && typeof value[1] === "object" && value[1] !== null', '        && "blueprint" in value[1]', '        && "type" in value[1]) {', "      window.__ngLViewRegistry__ = this;", '      console.log("[audako-powertoys] Captured LView registry Map!", this);', "      Map.prototype.set = origSet;", "    }", "    return origSet.call(this, key, value);", "  };", "})();"].join(`
`) + `
console.log('[audako-powertoys] Running inside Angular context!');
` + a2;
  }
  function b3() {
    h2();
  }
  v();
  b3();
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
