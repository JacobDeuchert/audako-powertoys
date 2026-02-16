var js = Object.defineProperty;
var nn = t => {
  throw TypeError(t);
};
var Os = (t, e, r) =>
  e in t ? js(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var w = (t, e, r) => Os(t, typeof e != 'symbol' ? e + '' : e, r),
  Er = (t, e, r) => e.has(t) || nn('Cannot ' + r);
var c = (t, e, r) => (Er(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
  x = (t, e, r) =>
    e.has(t)
      ? nn('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  m = (t, e, r, n) => (Er(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r),
  N = (t, e, r) => (Er(t, e, 'access private method'), r);
const Ns = '5';
var wn;
typeof window < 'u' &&
  ((wn = window.__svelte ?? (window.__svelte = {})).v ?? (wn.v = /* @__PURE__ */ new Set())).add(
    Ns,
  );
const Ps = 1,
  Ds = 2,
  Rs = 16,
  Ls = 2,
  yn = '[',
  or = '[!',
  Hr = ']',
  Ct = {},
  Y = Symbol(),
  Fs = 'http://www.w3.org/1999/xhtml',
  Ir = !1;
var bn = Array.isArray,
  zs = Array.prototype.indexOf,
  dr = Array.from,
  tr = Object.keys,
  rr = Object.defineProperty,
  yt = Object.getOwnPropertyDescriptor,
  Us = Object.getOwnPropertyDescriptors,
  qs = Object.prototype,
  Hs = Array.prototype,
  $n = Object.getPrototypeOf,
  sn = Object.isExtensible;
function Bs(t) {
  for (var e = 0; e < t.length; e++) t[e]();
}
function xn() {
  var t,
    e,
    r = new Promise((n, s) => {
      (t = n), (e = s);
    });
  return { promise: r, resolve: t, reject: e };
}
const V = 2,
  Br = 4,
  Wr = 8,
  Ws = 1 << 24,
  Le = 16,
  Fe = 32,
  Qe = 64,
  hr = 128,
  we = 512,
  K = 1024,
  ne = 2048,
  ze = 4096,
  ae = 8192,
  Ke = 16384,
  vr = 32768,
  kt = 65536,
  ln = 1 << 17,
  En = 1 << 18,
  _t = 1 << 19,
  Vs = 1 << 20,
  Ye = 1 << 25,
  dt = 32768,
  Mr = 1 << 21,
  Vr = 1 << 22,
  Je = 1 << 23,
  Gt = Symbol('$state'),
  Ys = Symbol('legacy props'),
  Ks = Symbol(''),
  mt = new (class extends Error {
    constructor() {
      super(...arguments);
      w(this, 'name', 'StaleReactionError');
      w(this, 'message', 'The reaction that called `getAbortSignal()` was re-run or destroyed');
    }
  })(),
  Cn = 3,
  It = 8;
function Js() {
  throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function Gs(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Qs() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Xs(t) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function Zs() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function ei() {
  throw new Error('https://svelte.dev/e/hydration_failed');
}
function ti() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function ri() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function ni() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
function si() {
  throw new Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
function _r(t) {
  console.warn('https://svelte.dev/e/hydration_mismatch');
}
function ii() {
  console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
let M = !1;
function De(t) {
  M = t;
}
let P;
function ve(t) {
  if (t === null) throw (_r(), Ct);
  return (P = t);
}
function pr() {
  return ve(/* @__PURE__ */ Ue(P));
}
function q(t) {
  if (M) {
    if (/* @__PURE__ */ Ue(P) !== null) throw (_r(), Ct);
    P = t;
  }
}
function kn(t = 1) {
  if (M) {
    for (var e = t, r = P; e--; ) r = /** @type {TemplateNode} */ /* @__PURE__ */ Ue(r);
    P = r;
  }
}
function nr(t = !0) {
  for (var e = 0, r = P; ; ) {
    if (r.nodeType === It) {
      var n =
        /** @type {Comment} */
        r.data;
      if (n === Hr) {
        if (e === 0) return r;
        e -= 1;
      } else (n === yn || n === or) && (e += 1);
    }
    var s =
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ue(r);
    t && r.remove(), (r = s);
  }
}
function Tn(t) {
  if (!t || t.nodeType !== It) throw (_r(), Ct);
  return (
    /** @type {Comment} */
    t.data
  );
}
function Sn(t) {
  return t === this.v;
}
function li(t, e) {
  return t != t
    ? e == e
    : t !== e || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function An(t) {
  return !li(t, this.v);
}
let ai = !1,
  _e = null;
function Tt(t) {
  _e = t;
}
function In(t, e = !1, r) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null,
  };
}
function Mn(t) {
  var e =
      /** @type {ComponentContext} */
      _e,
    r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r) rs(n);
  }
  return t !== void 0 && (e.x = t), (e.i = !0), (_e = e.p), t ?? /** @type {T} */ {};
}
function jn() {
  return !0;
}
let rt = [];
function On() {
  var t = rt;
  (rt = []), Bs(t);
}
function Mt(t) {
  if (rt.length === 0 && !Rt) {
    var e = rt;
    queueMicrotask(() => {
      e === rt && On();
    });
  }
  rt.push(t);
}
function ui() {
  for (; rt.length > 0; ) On();
}
function Nn(t) {
  var e = A;
  if (e === null) return (E.f |= Je), t;
  if (e.f & vr) St(t, e);
  else {
    if (!(e.f & hr)) throw t;
    e.b.error(t);
  }
}
function St(t, e) {
  for (; e !== null; ) {
    if (e.f & hr)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t;
}
const Kt = /* @__PURE__ */ new Set();
let b = null,
  Qt = null,
  z = null,
  de = [],
  gr = null,
  jr = !1,
  Rt = !1;
var bt, $t, nt, st, qt, xt, Et, B, Or, tt, Nr, Pn, Dn;
const ur = class ur {
  constructor() {
    x(this, B);
    w(this, 'committed', !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    w(this, 'current', /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    w(this, 'previous', /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    x(this, bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, $t, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    x(this, nt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    x(this, st, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, qt, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    x(this, xt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    x(this, Et, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    w(this, 'skipped_effects', /* @__PURE__ */ new Set());
    w(this, 'is_fork', !1);
  }
  is_deferred() {
    return this.is_fork || c(this, st) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var n;
    (de = []), (Qt = null), this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: [],
    };
    for (const s of e) N(this, B, Or).call(this, s, r);
    this.is_fork || N(this, B, Pn).call(this),
      this.is_deferred()
        ? (N(this, B, tt).call(this, r.effects),
          N(this, B, tt).call(this, r.render_effects),
          N(this, B, tt).call(this, r.block_effects))
        : ((Qt = this),
          (b = null),
          an(r.render_effects),
          an(r.effects),
          (Qt = null),
          (n = c(this, qt)) == null || n.resolve()),
      (z = null);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, r) {
    this.previous.has(e) || this.previous.set(e, r),
      e.f & Je || (this.current.set(e, e.v), z == null || z.set(e, e.v));
  }
  activate() {
    (b = this), this.apply();
  }
  deactivate() {
    b === this && ((b = null), (z = null));
  }
  flush() {
    if ((this.activate(), de.length > 0)) {
      if ((Ln(), b !== null && b !== this)) return;
    } else c(this, nt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of c(this, $t)) e(this);
    c(this, $t).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    m(this, nt, c(this, nt) + 1), e && m(this, st, c(this, st) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    m(this, nt, c(this, nt) - 1), e && m(this, st, c(this, st) - 1), this.revive();
  }
  revive() {
    for (const e of c(this, xt)) J(e, ne), ht(e);
    for (const e of c(this, Et)) J(e, ze), ht(e);
    m(this, xt, []), m(this, Et, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    c(this, bt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, $t).add(e);
  }
  settled() {
    return (c(this, qt) ?? m(this, qt, xn())).promise;
  }
  static ensure() {
    if (b === null) {
      const e = (b = new ur());
      Kt.add(b),
        Rt ||
          ur.enqueue(() => {
            b === e && e.flush();
          });
    }
    return b;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Mt(e);
  }
  apply() {}
};
(bt = new WeakMap()),
  ($t = new WeakMap()),
  (nt = new WeakMap()),
  (st = new WeakMap()),
  (qt = new WeakMap()),
  (xt = new WeakMap()),
  (Et = new WeakMap()),
  (B = new WeakSet()),
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */ (Or = function (e, r) {
    var o;
    e.f ^= K;
    for (var n = e.first; n !== null; ) {
      var s = n.f,
        i = (s & (Fe | Qe)) !== 0,
        a = i && (s & K) !== 0,
        l = a || (s & ae) !== 0 || this.skipped_effects.has(n);
      if (
        (n.f & hr &&
          (o = n.b) != null &&
          o.is_pending() &&
          (r = {
            parent: r,
            effect: n,
            effects: [],
            render_effects: [],
            block_effects: [],
          }),
        !l && n.fn !== null)
      ) {
        i
          ? (n.f ^= K)
          : s & Br
            ? r.effects.push(n)
            : Vt(n) && (n.f & Le && r.block_effects.push(n), Ut(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        f === r.effect &&
          (N(this, B, tt).call(this, r.effects),
          N(this, B, tt).call(this, r.render_effects),
          N(this, B, tt).call(this, r.block_effects),
          (r = /** @type {EffectTarget} */ r.parent)),
          (n = f.next),
          (f = f.parent);
    }
  }),
  /**
   * @param {Effect[]} effects
   */ (tt = function (e) {
    for (const r of e)
      (r.f & ne ? c(this, xt) : c(this, Et)).push(r), N(this, B, Nr).call(this, r.deps), J(r, K);
  }),
  /**
   * @param {Value[] | null} deps
   */ (Nr = function (e) {
    if (e !== null)
      for (const r of e)
        !(r.f & V) ||
          !(r.f & dt) ||
          ((r.f ^= dt),
          N(this, B, Nr).call(
            this,
            /** @type {Derived} */
            r.deps,
          ));
  }),
  (Pn = function () {
    if (c(this, st) === 0) {
      for (const e of c(this, bt)) e();
      c(this, bt).clear();
    }
    c(this, nt) === 0 && N(this, B, Dn).call(this);
  }),
  (Dn = function () {
    var i;
    if (Kt.size > 1) {
      this.previous.clear();
      var e = z,
        r = !0,
        n = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: [],
        };
      for (const a of Kt) {
        if (a === this) {
          r = !1;
          continue;
        }
        const l = [];
        for (const [f, o] of this.current) {
          if (a.current.has(f))
            if (r && o !== a.current.get(f)) a.current.set(f, o);
            else continue;
          l.push(f);
        }
        if (l.length === 0) continue;
        const u = [...a.current.keys()].filter(f => !this.current.has(f));
        if (u.length > 0) {
          var s = de;
          de = [];
          const f = /* @__PURE__ */ new Set(),
            o = /* @__PURE__ */ new Map();
          for (const d of l) Fn(d, u, f, o);
          if (de.length > 0) {
            (b = a), a.apply();
            for (const d of de) N((i = a), B, Or).call(i, d, n);
            a.deactivate();
          }
          de = s;
        }
      }
      (b = null), (z = e);
    }
    (this.committed = !0), Kt.delete(this);
  });
const ke = ur;
function Rn(t) {
  var e = Rt;
  Rt = !0;
  try {
    for (var r; ; ) {
      if ((ui(), de.length === 0 && (b == null || b.flush(), de.length === 0)))
        return (gr = null), /** @type {T} */ r;
      Ln();
    }
  } finally {
    Rt = e;
  }
}
function Ln() {
  var t = ct;
  jr = !0;
  var e = null;
  try {
    var r = 0;
    for (lr(!0); de.length > 0; ) {
      var n = ke.ensure();
      if (r++ > 1e3) {
        var s, i;
        fi();
      }
      n.process(de), Ge.clear();
    }
  } finally {
    (jr = !1), lr(t), (gr = null);
  }
}
function fi() {
  try {
    Zs();
  } catch (t) {
    St(t, gr);
  }
}
let ge = null;
function an(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if (
        !(n.f & (Ke | ae)) &&
        Vt(n) &&
        ((ge = /* @__PURE__ */ new Set()),
        Ut(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? is(n) : (n.fn = null)),
        (ge == null ? void 0 : ge.size) > 0)
      ) {
        Ge.clear();
        for (const s of ge) {
          if (s.f & (Ke | ae)) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; ) ge.has(a) && (ge.delete(a), i.push(a)), (a = a.parent);
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            u.f & (Ke | ae) || Ut(u);
          }
        }
        ge.clear();
      }
    }
    ge = null;
  }
}
function Fn(t, e, r, n) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const s of t.reactions) {
      const i = s.f;
      i & V
        ? Fn(
            /** @type {Derived} */
            s,
            e,
            r,
            n,
          )
        : i & (Vr | Le) &&
          !(i & ne) &&
          zn(s, e, n) &&
          (J(s, ne),
          ht(
            /** @type {Effect} */
            s,
          ));
    }
}
function zn(t, e, r) {
  const n = r.get(t);
  if (n !== void 0) return n;
  if (t.deps !== null)
    for (const s of t.deps) {
      if (e.includes(s)) return !0;
      if (
        s.f & V &&
        zn(
          /** @type {Derived} */
          s,
          e,
          r,
        )
      )
        return (
          r.set(
            /** @type {Derived} */
            s,
            !0,
          ),
          !0
        );
    }
  return r.set(t, !1), !1;
}
function ht(t) {
  for (var e = (gr = t); e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (jr && e === A && r & Le && !(r & En)) return;
    if (r & (Qe | Fe)) {
      if (!(r & K)) return;
      e.f ^= K;
    }
  }
  de.push(e);
}
function ci(t) {
  let e = 0,
    r = vt(0),
    n;
  return () => {
    Ft() &&
      (_(r),
      wr(
        () => (
          e === 0 && (n = Gr(() => t(() => Lt(r)))),
          (e += 1),
          () => {
            Mt(() => {
              (e -= 1), e === 0 && (n == null || n(), (n = void 0), Lt(r));
            });
          }
        ),
      ));
  };
}
var oi = kt | _t | hr;
function di(t, e, r) {
  new hi(t, e, r);
}
var fe, ie, Ht, $e, it, xe, ce, ee, Ee, Ne, Be, lt, We, at, Ve, fr, U, Un, qn, Pr, Xt, Zt, Dr;
class hi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, r, n) {
    x(this, U);
    /** @type {Boundary | null} */
    w(this, 'parent');
    x(this, fe, !1);
    /** @type {TemplateNode} */
    x(this, ie);
    /** @type {TemplateNode | null} */
    x(this, Ht, M ? P : null);
    /** @type {BoundaryProps} */
    x(this, $e);
    /** @type {((anchor: Node) => void)} */
    x(this, it);
    /** @type {Effect} */
    x(this, xe);
    /** @type {Effect | null} */
    x(this, ce, null);
    /** @type {Effect | null} */
    x(this, ee, null);
    /** @type {Effect | null} */
    x(this, Ee, null);
    /** @type {DocumentFragment | null} */
    x(this, Ne, null);
    /** @type {TemplateNode | null} */
    x(this, Be, null);
    x(this, lt, 0);
    x(this, We, 0);
    x(this, at, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, Ve, null);
    x(
      this,
      fr,
      ci(
        () => (
          m(this, Ve, vt(c(this, lt))),
          () => {
            m(this, Ve, null);
          }
        ),
      ),
    );
    m(this, ie, e),
      m(this, $e, r),
      m(this, it, n),
      (this.parent = /** @type {Effect} */ A.b),
      m(this, fe, !!c(this, $e).pending),
      m(
        this,
        xe,
        Kr(() => {
          if (((A.b = this), M)) {
            const i = c(this, Ht);
            pr(),
              /** @type {Comment} */
              i.nodeType === It && /** @type {Comment} */ i.data === or
                ? N(this, U, qn).call(this)
                : N(this, U, Un).call(this);
          } else {
            var s = N(this, U, Pr).call(this);
            try {
              m(
                this,
                ce,
                he(() => n(s)),
              );
            } catch (i) {
              this.error(i);
            }
            c(this, We) > 0 ? N(this, U, Zt).call(this) : m(this, fe, !1);
          }
          return () => {
            var i;
            (i = c(this, Be)) == null || i.remove();
          };
        }, oi),
      ),
      M && m(this, ie, P);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, fe) || (!!this.parent && this.parent.is_pending());
  }
  has_pending_snippet() {
    return !!c(this, $e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    N(this, U, Dr).call(this, e),
      m(this, lt, c(this, lt) + e),
      c(this, Ve) && At(c(this, Ve), c(this, lt));
  }
  get_effect_pending() {
    return (
      c(this, fr).call(this),
      _(
        /** @type {Source<number>} */
        c(this, Ve),
      )
    );
  }
  /** @param {unknown} error */
  error(e) {
    var r = c(this, $e).onerror;
    const n = c(this, $e).failed;
    if (c(this, at) || (!r && !n)) throw e;
    c(this, ce) && (Q(c(this, ce)), m(this, ce, null)),
      c(this, ee) && (Q(c(this, ee)), m(this, ee, null)),
      c(this, Ee) && (Q(c(this, Ee)), m(this, Ee, null)),
      M &&
        (ve(
          /** @type {TemplateNode} */
          c(this, Ht),
        ),
        kn(),
        ve(nr()));
    var s = !1,
      i = !1;
    const a = () => {
      if (s) {
        ii();
        return;
      }
      (s = !0),
        i && si(),
        ke.ensure(),
        m(this, lt, 0),
        c(this, Ee) !== null &&
          ft(c(this, Ee), () => {
            m(this, Ee, null);
          }),
        m(this, fe, this.has_pending_snippet()),
        m(
          this,
          ce,
          N(this, U, Xt).call(
            this,
            () => (m(this, at, !1), he(() => c(this, it).call(this, c(this, ie)))),
          ),
        ),
        c(this, We) > 0 ? N(this, U, Zt).call(this) : m(this, fe, !1);
    };
    var l = E;
    try {
      re(null), (i = !0), r == null || r(e, a), (i = !1);
    } catch (u) {
      St(u, c(this, xe) && c(this, xe).parent);
    } finally {
      re(l);
    }
    n &&
      Mt(() => {
        m(
          this,
          Ee,
          N(this, U, Xt).call(this, () => {
            ke.ensure(), m(this, at, !0);
            try {
              return he(() => {
                n(
                  c(this, ie),
                  () => e,
                  () => a,
                );
              });
            } catch (u) {
              return (
                St(
                  u,
                  /** @type {Effect} */
                  c(this, xe).parent,
                ),
                null
              );
            } finally {
              m(this, at, !1);
            }
          }),
        );
      });
  }
}
(fe = new WeakMap()),
  (ie = new WeakMap()),
  (Ht = new WeakMap()),
  ($e = new WeakMap()),
  (it = new WeakMap()),
  (xe = new WeakMap()),
  (ce = new WeakMap()),
  (ee = new WeakMap()),
  (Ee = new WeakMap()),
  (Ne = new WeakMap()),
  (Be = new WeakMap()),
  (lt = new WeakMap()),
  (We = new WeakMap()),
  (at = new WeakMap()),
  (Ve = new WeakMap()),
  (fr = new WeakMap()),
  (U = new WeakSet()),
  (Un = function () {
    try {
      m(
        this,
        ce,
        he(() => c(this, it).call(this, c(this, ie))),
      );
    } catch (e) {
      this.error(e);
    }
    m(this, fe, !1);
  }),
  (qn = function () {
    const e = c(this, $e).pending;
    e &&
      (m(
        this,
        ee,
        he(() => e(c(this, ie))),
      ),
      ke.enqueue(() => {
        var r = N(this, U, Pr).call(this);
        m(
          this,
          ce,
          N(this, U, Xt).call(this, () => (ke.ensure(), he(() => c(this, it).call(this, r)))),
        ),
          c(this, We) > 0
            ? N(this, U, Zt).call(this)
            : (ft(
                /** @type {Effect} */
                c(this, ee),
                () => {
                  m(this, ee, null);
                },
              ),
              m(this, fe, !1));
      }));
  }),
  (Pr = function () {
    var e = c(this, ie);
    return (
      c(this, fe) && (m(this, Be, Re()), c(this, ie).before(c(this, Be)), (e = c(this, Be))), e
    );
  }),
  /**
   * @param {() => Effect | null} fn
   */ (Xt = function (e) {
    var r = A,
      n = E,
      s = _e;
    Se(c(this, xe)), re(c(this, xe)), Tt(c(this, xe).ctx);
    try {
      return e();
    } catch (i) {
      return Nn(i), null;
    } finally {
      Se(r), re(n), Tt(s);
    }
  }),
  (Zt = function () {
    const e =
      /** @type {(anchor: Node) => void} */
      c(this, $e).pending;
    c(this, ce) !== null &&
      (m(this, Ne, document.createDocumentFragment()),
      c(this, Ne).append(
        /** @type {TemplateNode} */
        c(this, Be),
      ),
      us(c(this, ce), c(this, Ne))),
      c(this, ee) === null &&
        m(
          this,
          ee,
          he(() => e(c(this, ie))),
        );
  }),
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */ (Dr = function (e) {
    var r;
    if (!this.has_pending_snippet()) {
      this.parent && N((r = this.parent), U, Dr).call(r, e);
      return;
    }
    m(this, We, c(this, We) + e),
      c(this, We) === 0 &&
        (m(this, fe, !1),
        c(this, ee) &&
          ft(c(this, ee), () => {
            m(this, ee, null);
          }),
        c(this, Ne) && (c(this, ie).before(c(this, Ne)), m(this, Ne, null)));
  });
function vi(t, e, r, n) {
  const s = Hn;
  if (r.length === 0 && t.length === 0) {
    n(e.map(s));
    return;
  }
  var i = b,
    a =
      /** @type {Effect} */
      A,
    l = _i();
  function u() {
    Promise.all(r.map(f => /* @__PURE__ */ pi(f)))
      .then(f => {
        l();
        try {
          n([...e.map(s), ...f]);
        } catch (o) {
          a.f & Ke || St(o, a);
        }
        i == null || i.deactivate(), sr();
      })
      .catch(f => {
        St(f, a);
      });
  }
  t.length > 0
    ? Promise.all(t).then(() => {
        l();
        try {
          return u();
        } finally {
          i == null || i.deactivate(), sr();
        }
      })
    : u();
}
function _i() {
  var t = A,
    e = E,
    r = _e,
    n = b;
  return (i = !0) => {
    Se(t), re(e), Tt(r), i && (n == null || n.activate());
  };
}
function sr() {
  Se(null), re(null), Tt(null);
}
// @__NO_SIDE_EFFECTS__
function Hn(t) {
  var e = V | ne,
    r = E !== null && E.f & V ? /** @type {Derived} */ E : null;
  return (
    A !== null && (A.f |= _t),
    {
      ctx: _e,
      deps: null,
      effects: null,
      equals: Sn,
      f: e,
      fn: t,
      reactions: null,
      rv: 0,
      v:
        /** @type {V} */
        Y,
      wv: 0,
      parent: r ?? A,
      ac: null,
    }
  );
}
// @__NO_SIDE_EFFECTS__
function pi(t, e) {
  const r =
    /** @type {Effect | null} */
    A;
  r === null && Js();
  var n =
      /** @type {Boundary} */
      r.b,
    s =
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0,
    i = vt(
      /** @type {V} */
      Y,
    ),
    a = !E,
    l = /* @__PURE__ */ new Map();
  return (
    Ti(() => {
      var v;
      var u = xn();
      s = u.promise;
      try {
        Promise.resolve(t())
          .then(u.resolve, u.reject)
          .then(() => {
            f === b && f.committed && f.deactivate(), sr();
          });
      } catch (p) {
        u.reject(p), sr();
      }
      var f =
        /** @type {Batch} */
        b;
      if (a) {
        var o = !n.is_pending();
        n.update_pending_count(1),
          f.increment(o),
          (v = l.get(f)) == null || v.reject(mt),
          l.delete(f),
          l.set(f, u);
      }
      const d = (p, h = void 0) => {
        if ((f.activate(), h)) h !== mt && ((i.f |= Je), At(i, h));
        else {
          i.f & Je && (i.f ^= Je), At(i, p);
          for (const [g, C] of l) {
            if ((l.delete(g), g === f)) break;
            C.reject(mt);
          }
        }
        a && (n.update_pending_count(-1), f.decrement(o));
      };
      u.promise.then(d, p => d(null, p || 'unknown'));
    }),
    ts(() => {
      for (const u of l.values()) u.reject(mt);
    }),
    new Promise(u => {
      function f(o) {
        function d() {
          o === s ? u(i) : f(s);
        }
        o.then(d, d);
      }
      f(s);
    })
  );
}
// @__NO_SIDE_EFFECTS__
function gi(t) {
  const e = /* @__PURE__ */ Hn(t);
  return (e.equals = An), e;
}
function Bn(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      Q(
        /** @type {Effect} */
        e[r],
      );
  }
}
function mi(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & V)) return e.f & Ke ? null : /** @type {Effect} */ e;
    e = e.parent;
  }
  return null;
}
function Yr(t) {
  var e,
    r = A;
  Se(mi(t));
  try {
    (t.f &= ~dt), Bn(t), (e = ds(t));
  } finally {
    Se(r);
  }
  return e;
}
function Wn(t) {
  var e = Yr(t);
  if ((t.equals(e) || ((b != null && b.is_fork) || (t.v = e), (t.wv = cs())), !jt))
    if (z !== null) (Ft() || (b != null && b.is_fork)) && z.set(t, e);
    else {
      var r = t.f & we ? K : ze;
      J(t, r);
    }
}
const Rr = /* @__PURE__ */ new Set();
const Ge = /* @__PURE__ */ new Map();
let Vn = !1;
function vt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Sn,
    rv: 0,
    wv: 0,
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function te(t, e) {
  const r = vt(t);
  return Ii(r), r;
}
// @__NO_SIDE_EFFECTS__
function Yn(t, e = !1, r = !0) {
  const n = vt(t);
  return e || (n.equals = An), n;
}
function S(t, e, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!Te || E.f & ln) &&
    jn() &&
    E.f & (V | Le | Vr | ln) &&
    !(X != null && X.includes(t)) &&
    ni();
  const n = r ? wt(e) : e;
  return At(t, n);
}
function At(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    jt ? Ge.set(t, e) : Ge.set(t, r), (t.v = e);
    var n = ke.ensure();
    n.capture(t, r),
      t.f & V &&
        (t.f & ne &&
          Yr(
            /** @type {Derived} */
            t,
          ),
        J(t, t.f & we ? K : ze)),
      (t.wv = cs()),
      Kn(t, ne),
      A !== null && A.f & K && !(A.f & (Fe | Qe)) && (ue === null ? Mi([t]) : ue.push(t)),
      !n.is_fork && Rr.size > 0 && !Vn && wi();
  }
  return e;
}
function wi() {
  Vn = !1;
  var t = ct;
  lr(!0);
  const e = Array.from(Rr);
  try {
    for (const r of e) r.f & K && J(r, ze), Vt(r) && Ut(r);
  } finally {
    lr(t);
  }
  Rr.clear();
}
function Lt(t) {
  S(t, t.v + 1);
}
function Kn(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s],
        a = i.f,
        l = (a & ne) === 0;
      if ((l && J(i, e), a & V)) {
        var u =
          /** @type {Derived} */
          i;
        z == null || z.delete(u), a & dt || (a & we && (i.f |= dt), Kn(u, ze));
      } else
        l &&
          (a & Le &&
            ge !== null &&
            ge.add(
              /** @type {Effect} */
              i,
            ),
          ht(
            /** @type {Effect} */
            i,
          ));
    }
}
function wt(t) {
  if (typeof t != 'object' || t === null || Gt in t) return t;
  const e = $n(t);
  if (e !== qs && e !== Hs) return t;
  var r = /* @__PURE__ */ new Map(),
    n = bn(t),
    s = /* @__PURE__ */ te(0),
    i = ot,
    a = l => {
      if (ot === i) return l();
      var u = E,
        f = ot;
      re(null), on(i);
      var o = l();
      return re(u), on(f), o;
    };
  return (
    n &&
      r.set(
        'length',
        /* @__PURE__ */ te(
          /** @type {any[]} */
          t.length,
        ),
      ),
    new Proxy(
      /** @type {any} */
      t,
      {
        defineProperty(l, u, f) {
          (!('value' in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) &&
            ti();
          var o = r.get(u);
          return (
            o === void 0
              ? (o = a(() => {
                  var d = /* @__PURE__ */ te(f.value);
                  return r.set(u, d), d;
                }))
              : S(o, f.value, !0),
            !0
          );
        },
        deleteProperty(l, u) {
          var f = r.get(u);
          if (f === void 0) {
            if (u in l) {
              const o = a(() => /* @__PURE__ */ te(Y));
              r.set(u, o), Lt(s);
            }
          } else S(f, Y), Lt(s);
          return !0;
        },
        get(l, u, f) {
          var p;
          if (u === Gt) return t;
          var o = r.get(u),
            d = u in l;
          if (
            (o === void 0 &&
              (!d || ((p = yt(l, u)) != null && p.writable)) &&
              ((o = a(() => {
                var h = wt(d ? l[u] : Y),
                  g = /* @__PURE__ */ te(h);
                return g;
              })),
              r.set(u, o)),
            o !== void 0)
          ) {
            var v = _(o);
            return v === Y ? void 0 : v;
          }
          return Reflect.get(l, u, f);
        },
        getOwnPropertyDescriptor(l, u) {
          var f = Reflect.getOwnPropertyDescriptor(l, u);
          if (f && 'value' in f) {
            var o = r.get(u);
            o && (f.value = _(o));
          } else if (f === void 0) {
            var d = r.get(u),
              v = d == null ? void 0 : d.v;
            if (d !== void 0 && v !== Y)
              return {
                enumerable: !0,
                configurable: !0,
                value: v,
                writable: !0,
              };
          }
          return f;
        },
        has(l, u) {
          var v;
          if (u === Gt) return !0;
          var f = r.get(u),
            o = (f !== void 0 && f.v !== Y) || Reflect.has(l, u);
          if (f !== void 0 || (A !== null && (!o || ((v = yt(l, u)) != null && v.writable)))) {
            f === void 0 &&
              ((f = a(() => {
                var p = o ? wt(l[u]) : Y,
                  h = /* @__PURE__ */ te(p);
                return h;
              })),
              r.set(u, f));
            var d = _(f);
            if (d === Y) return !1;
          }
          return o;
        },
        set(l, u, f, o) {
          var O;
          var d = r.get(u),
            v = u in l;
          if (n && u === 'length')
            for (var p = f; p < /** @type {Source<number>} */ d.v; p += 1) {
              var h = r.get(p + '');
              h !== void 0
                ? S(h, Y)
                : p in l && ((h = a(() => /* @__PURE__ */ te(Y))), r.set(p + '', h));
            }
          if (d === void 0)
            (!v || ((O = yt(l, u)) != null && O.writable)) &&
              ((d = a(() => /* @__PURE__ */ te(void 0))), S(d, wt(f)), r.set(u, d));
          else {
            v = d.v !== Y;
            var g = a(() => wt(f));
            S(d, g);
          }
          var C = Reflect.getOwnPropertyDescriptor(l, u);
          if ((C != null && C.set && C.set.call(o, f), !v)) {
            if (n && typeof u == 'string') {
              var j =
                  /** @type {Source<number>} */
                  r.get('length'),
                T = Number(u);
              Number.isInteger(T) && T >= j.v && S(j, T + 1);
            }
            Lt(s);
          }
          return !0;
        },
        ownKeys(l) {
          _(s);
          var u = Reflect.ownKeys(l).filter(d => {
            var v = r.get(d);
            return v === void 0 || v.v !== Y;
          });
          for (var [f, o] of r) o.v !== Y && !(f in l) && u.push(f);
          return u;
        },
        setPrototypeOf() {
          ri();
        },
      },
    )
  );
}
var un, Jn, Gn, Qn;
function Lr() {
  if (un === void 0) {
    (un = window), (Jn = /Firefox/.test(navigator.userAgent));
    var t = Element.prototype,
      e = Node.prototype,
      r = Text.prototype;
    (Gn = yt(e, 'firstChild').get),
      (Qn = yt(e, 'nextSibling').get),
      sn(t) &&
        ((t.__click = void 0),
        (t.__className = void 0),
        (t.__attributes = null),
        (t.__style = void 0),
        (t.__e = void 0)),
      sn(r) && (r.__t = void 0);
  }
}
function Re(t = '') {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ir(t) {
  return (
    /** @type {TemplateNode | null} */
    Gn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ue(t) {
  return (
    /** @type {TemplateNode | null} */
    Qn.call(t)
  );
}
function H(t, e) {
  if (!M) return /* @__PURE__ */ ir(t);
  var r = /* @__PURE__ */ ir(P);
  if (r === null) r = P.appendChild(Re());
  else if (e && r.nodeType !== Cn) {
    var n = Re();
    return r == null || r.before(n), ve(n), n;
  }
  return ve(r), r;
}
function pe(t, e = 1, r = !1) {
  let n = M ? P : t;
  for (var s; e--; ) (s = n), (n = /** @type {TemplateNode} */ /* @__PURE__ */ Ue(n));
  if (!M) return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Cn) {
    var i = Re();
    return n === null ? s == null || s.after(i) : n.before(i), ve(i), i;
  }
  return ve(n), n;
}
function Xn(t) {
  t.textContent = '';
}
function Zn() {
  return !1;
}
let fn = !1;
function es() {
  fn ||
    ((fn = !0),
    document.addEventListener(
      'reset',
      t => {
        Promise.resolve().then(() => {
          var e;
          if (!t.defaultPrevented)
            /**@type {HTMLFormElement} */
            for (const r of t.target.elements) (e = r.__on_r) == null || e.call(r);
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: !0 },
    ));
}
function mr(t) {
  var e = E,
    r = A;
  re(null), Se(null);
  try {
    return t();
  } finally {
    re(e), Se(r);
  }
}
function yi(t, e, r, n = r) {
  t.addEventListener(e, () => mr(r));
  const s = t.__on_r;
  s
    ? (t.__on_r = () => {
        s(), n(!0);
      })
    : (t.__on_r = () => n(!0)),
    es();
}
function bi(t) {
  A === null && (E === null && Xs(), Qs()), jt && Gs();
}
function $i(t, e) {
  var r = e.last;
  r === null ? (e.last = e.first = t) : ((r.next = t), (t.prev = r), (e.last = t));
}
function Ae(t, e, r) {
  var n = A;
  n !== null && n.f & ae && (t |= ae);
  var s = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: t | ne | we,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  if (r)
    try {
      Ut(s), (s.f |= vr);
    } catch (l) {
      throw (Q(s), l);
    }
  else e !== null && ht(s);
  var i = s;
  if (
    (r &&
      i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last && // either `null`, or a singular child
      !(i.f & _t) &&
      ((i = i.first), t & Le && t & kt && i !== null && (i.f |= kt)),
    i !== null && ((i.parent = n), n !== null && $i(i, n), E !== null && E.f & V && !(t & Qe)))
  ) {
    var a =
      /** @type {Derived} */
      E;
    (a.effects ?? (a.effects = [])).push(i);
  }
  return s;
}
function Ft() {
  return E !== null && !Te;
}
function ts(t) {
  const e = Ae(Wr, null, !1);
  return J(e, K), (e.teardown = t), e;
}
function xi(t) {
  bi();
  var e =
      /** @type {Effect} */
      A.f,
    r = !E && (e & Fe) !== 0 && (e & vr) === 0;
  if (r) {
    var n =
      /** @type {ComponentContext} */
      _e;
    (n.e ?? (n.e = [])).push(t);
  } else return rs(t);
}
function rs(t) {
  return Ae(Br | Vs, t, !1);
}
function Ei(t) {
  ke.ensure();
  const e = Ae(Qe | _t, t, !0);
  return () => {
    Q(e);
  };
}
function Ci(t) {
  ke.ensure();
  const e = Ae(Qe | _t, t, !0);
  return (r = {}) =>
    new Promise(n => {
      r.outro
        ? ft(e, () => {
            Q(e), n(void 0);
          })
        : (Q(e), n(void 0));
    });
}
function ki(t) {
  return Ae(Br, t, !1);
}
function Ti(t) {
  return Ae(Vr | _t, t, !0);
}
function wr(t, e = 0) {
  return Ae(Wr | e, t, !0);
}
function Cr(t, e = [], r = [], n = []) {
  vi(n, e, r, s => {
    Ae(Wr, () => t(...s.map(_)), !0);
  });
}
function Kr(t, e = 0) {
  var r = Ae(Le | e, t, !0);
  return r;
}
function he(t) {
  return Ae(Fe | _t, t, !0);
}
function ns(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = jt,
      n = E;
    cn(!0), re(null);
    try {
      e.call(null);
    } finally {
      cn(r), re(n);
    }
  }
}
function ss(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const s = r.ac;
    s !== null &&
      mr(() => {
        s.abort(mt);
      });
    var n = r.next;
    r.f & Qe ? (r.parent = null) : Q(r, e), (r = n);
  }
}
function Si(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & Fe || Q(e), (e = r);
  }
}
function Q(t, e = !0) {
  var r = !1;
  (e || t.f & En) &&
    t.nodes !== null &&
    t.nodes.end !== null &&
    (Ai(
      t.nodes.start,
      /** @type {TemplateNode} */
      t.nodes.end,
    ),
    (r = !0)),
    ss(t, e && !r),
    ar(t, 0),
    J(t, Ke);
  var n = t.nodes && t.nodes.t;
  if (n !== null) for (const i of n) i.stop();
  ns(t);
  var s = t.parent;
  s !== null && s.first !== null && is(t),
    (t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null);
}
function Ai(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ Ue(t);
    t.remove(), (t = r);
  }
}
function is(t) {
  var e = t.parent,
    r = t.prev,
    n = t.next;
  r !== null && (r.next = n),
    n !== null && (n.prev = r),
    e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function ft(t, e, r = !0) {
  var n = [];
  ls(t, n, !0);
  var s = () => {
      r && Q(t), e && e();
    },
    i = n.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var l of n) l.out(a);
  } else s();
}
function ls(t, e, r) {
  if (!(t.f & ae)) {
    t.f ^= ae;
    var n = t.nodes && t.nodes.t;
    if (n !== null) for (const l of n) (l.is_global || r) && e.push(l);
    for (var s = t.first; s !== null; ) {
      var i = s.next,
        a =
          (s.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
          // it means the parent block effect was pruned. In that case,
          // transparency information was transferred to the branch effect.
          ((s.f & Fe) !== 0 && (t.f & Le) !== 0);
      ls(s, e, a ? r : !1), (s = i);
    }
  }
}
function Jr(t) {
  as(t, !0);
}
function as(t, e) {
  if (t.f & ae) {
    (t.f ^= ae), t.f & K || (J(t, ne), ht(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next,
        s = (r.f & kt) !== 0 || (r.f & Fe) !== 0;
      as(r, s ? e : !1), (r = n);
    }
    var i = t.nodes && t.nodes.t;
    if (i !== null) for (const a of i) (a.is_global || e) && a.in();
  }
}
function us(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Ue(r);
      e.append(r), (r = s);
    }
}
let ct = !1;
function lr(t) {
  ct = t;
}
let jt = !1;
function cn(t) {
  jt = t;
}
let E = null,
  Te = !1;
function re(t) {
  E = t;
}
let A = null;
function Se(t) {
  A = t;
}
let X = null;
function Ii(t) {
  E !== null && (X === null ? (X = [t]) : X.push(t));
}
let G = null,
  se = 0,
  ue = null;
function Mi(t) {
  ue = t;
}
let fs = 1,
  zt = 0,
  ot = zt;
function on(t) {
  ot = t;
}
function cs() {
  return ++fs;
}
function Vt(t) {
  var e = t.f;
  if (e & ne) return !0;
  if ((e & V && (t.f &= ~dt), e & ze)) {
    var r = t.deps;
    if (r !== null)
      for (var n = r.length, s = 0; s < n; s++) {
        var i = r[s];
        if (
          (Vt(
            /** @type {Derived} */
            i,
          ) &&
            Wn(
              /** @type {Derived} */
              i,
            ),
          i.wv > t.wv)
        )
          return !0;
      }
    e & we && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      z === null &&
      J(t, K);
  }
  return !1;
}
function os(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(X != null && X.includes(t)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      i.f & V
        ? os(
            /** @type {Derived} */
            i,
            e,
            !1,
          )
        : e === i &&
          (r ? J(i, ne) : i.f & K && J(i, ze),
          ht(
            /** @type {Effect} */
            i,
          ));
    }
}
function ds(t) {
  var h;
  var e = G,
    r = se,
    n = ue,
    s = E,
    i = X,
    a = _e,
    l = Te,
    u = ot,
    f = t.f;
  (G = /** @type {null | Value[]} */ null),
    (se = 0),
    (ue = null),
    (E = f & (Fe | Qe) ? null : t),
    (X = null),
    Tt(t.ctx),
    (Te = !1),
    (ot = ++zt),
    t.ac !== null &&
      (mr(() => {
        t.ac.abort(mt);
      }),
      (t.ac = null));
  try {
    t.f |= Mr;
    var o =
        /** @type {Function} */
        t.fn,
      d = o(),
      v = t.deps;
    if (G !== null) {
      var p;
      if ((ar(t, se), v !== null && se > 0))
        for (v.length = se + G.length, p = 0; p < G.length; p++) v[se + p] = G[p];
      else t.deps = v = G;
      if (Ft() && t.f & we)
        for (p = se; p < v.length; p++) ((h = v[p]).reactions ?? (h.reactions = [])).push(t);
    } else v !== null && se < v.length && (ar(t, se), (v.length = se));
    if (jn() && ue !== null && !Te && v !== null && !(t.f & (V | ze | ne)))
      for (p = 0; p < /** @type {Source[]} */ ue.length; p++)
        os(
          ue[p],
          /** @type {Effect} */
          t,
        );
    return (
      s !== null &&
        s !== t &&
        (zt++, ue !== null && (n === null ? (n = ue) : n.push(.../** @type {Source[]} */ ue))),
      t.f & Je && (t.f ^= Je),
      d
    );
  } catch (g) {
    return Nn(g);
  } finally {
    (t.f ^= Mr), (G = e), (se = r), (ue = n), (E = s), (X = i), Tt(a), (Te = l), (ot = u);
  }
}
function ji(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = zs.call(r, t);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? (r = e.reactions = null) : ((r[n] = r[s]), r.pop());
    }
  }
  r === null &&
    e.f & V && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (G === null || !G.includes(e)) &&
    (J(e, ze),
    e.f & we && ((e.f ^= we), (e.f &= ~dt)),
    Bn(
      /** @type {Derived} **/
      e,
    ),
    ar(
      /** @type {Derived} **/
      e,
      0,
    ));
}
function ar(t, e) {
  var r = t.deps;
  if (r !== null) for (var n = e; n < r.length; n++) ji(t, r[n]);
}
function Ut(t) {
  var e = t.f;
  if (!(e & Ke)) {
    J(t, K);
    var r = A,
      n = ct;
    (A = t), (ct = !0);
    try {
      e & (Le | Ws) ? Si(t) : ss(t), ns(t);
      var s = ds(t);
      (t.teardown = typeof s == 'function' ? s : null), (t.wv = fs);
      var i;
      Ir && ai && t.f & ne && t.deps;
    } finally {
      (ct = n), (A = r);
    }
  }
}
async function Oi() {
  await Promise.resolve(), Rn();
}
function _(t) {
  var e = t.f,
    r = (e & V) !== 0;
  if (E !== null && !Te) {
    var n = A !== null && (A.f & Ke) !== 0;
    if (!n && !(X != null && X.includes(t))) {
      var s = E.deps;
      if (E.f & Mr)
        t.rv < zt &&
          ((t.rv = zt),
          G === null && s !== null && s[se] === t
            ? se++
            : G === null
              ? (G = [t])
              : G.includes(t) || G.push(t));
      else {
        (E.deps ?? (E.deps = [])).push(t);
        var i = t.reactions;
        i === null ? (t.reactions = [E]) : i.includes(E) || i.push(E);
      }
    }
  }
  if (jt) {
    if (Ge.has(t)) return Ge.get(t);
    if (r) {
      var a =
          /** @type {Derived} */
          t,
        l = a.v;
      return ((!(a.f & K) && a.reactions !== null) || vs(a)) && (l = Yr(a)), Ge.set(a, l), l;
    }
  } else
    r &&
      (!(z != null && z.has(t)) || (b != null && b.is_fork && !Ft())) &&
      ((a = /** @type {Derived} */ t), Vt(a) && Wn(a), ct && Ft() && !(a.f & we) && hs(a));
  if (z != null && z.has(t)) return z.get(t);
  if (t.f & Je) throw t.v;
  return t.v;
}
function hs(t) {
  if (t.deps !== null) {
    t.f ^= we;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t),
        e.f & V &&
          !(e.f & we) &&
          hs(
            /** @type {Derived} */
            e,
          );
  }
}
function vs(t) {
  if (t.v === Y) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (
      Ge.has(e) ||
      (e.f & V &&
        vs(
          /** @type {Derived} */
          e,
        ))
    )
      return !0;
  return !1;
}
function Gr(t) {
  var e = Te;
  try {
    return (Te = !0), t();
  } finally {
    Te = e;
  }
}
const Ni = -7169;
function J(t, e) {
  t.f = (t.f & Ni) | e;
}
const Pi = /* @__PURE__ */ new Set(),
  dn = /* @__PURE__ */ new Set();
function Di(t, e, r, n = {}) {
  function s(i) {
    if ((n.capture || Pt.call(e, i), !i.cancelBubble))
      return mr(() => (r == null ? void 0 : r.call(this, i)));
  }
  return (
    t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
      ? Mt(() => {
          e.addEventListener(t, s, n);
        })
      : e.addEventListener(t, s, n),
    s
  );
}
function Ri(t, e, r, n, s) {
  var i = { capture: n, passive: s },
    a = Di(t, e, r, i);
  (e === document.body || // @ts-ignore
    e === window || // @ts-ignore
    e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
    e instanceof HTMLMediaElement) &&
    ts(() => {
      e.removeEventListener(t, a, i);
    });
}
let hn = null;
function Pt(t) {
  var C;
  var r =
      /** @type {Node} */
      this.ownerDocument,
    n = t.type,
    s = ((C = t.composedPath) == null ? void 0 : C.call(t)) || [],
    i =
      /** @type {null | Element} */
      s[0] || t.target;
  hn = t;
  var a = 0,
    l = hn === t && t.__root;
  if (l) {
    var u = s.indexOf(l);
    if (u !== -1 && (this === document || this === /** @type {any} */ window)) {
      t.__root = this;
      return;
    }
    var f = s.indexOf(this);
    if (f === -1) return;
    u <= f && (a = u);
  }
  if (((i = /** @type {Element} */ s[a] || t.target), i !== this)) {
    rr(t, 'currentTarget', {
      configurable: !0,
      get() {
        return i || r;
      },
    });
    var o = E,
      d = A;
    re(null), Se(null);
    try {
      for (var v, p = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */ i.host || null;
        try {
          var g = i['__' + n];
          g != null &&
            (!(/** @type {any} */ i.disabled) || // DOM could've been updated already by the time this is reached, so we check this as well
              // -> the target could not have been disabled because it emits the event in the first place
              t.target === i) &&
            g.call(i, t);
        } catch (j) {
          v ? p.push(j) : (v = j);
        }
        if (t.cancelBubble || h === this || h === null) break;
        i = h;
      }
      if (v) {
        for (const j of p)
          queueMicrotask(() => {
            throw j;
          });
        throw v;
      }
    } finally {
      (t.__root = this), delete t.currentTarget, re(o), Se(d);
    }
  }
}
function Li(t) {
  var e = document.createElement('template');
  return (e.innerHTML = t.replaceAll('<!>', '<!---->')), e.content;
}
function Fr(t, e) {
  var r =
    /** @type {Effect} */
    A;
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function pt(t, e) {
  var r = (e & Ls) !== 0,
    n,
    s = !t.startsWith('<!>');
  return () => {
    if (M) return Fr(P, null), P;
    n === void 0 &&
      ((n = Li(s ? t : '<!>' + t)), (n = /** @type {TemplateNode} */ /* @__PURE__ */ ir(n)));
    var i =
      /** @type {TemplateNode} */
      r || Jn ? document.importNode(n, !0) : n.cloneNode(!0);
    return Fr(i, i), i;
  };
}
function He(t, e) {
  if (M) {
    var r =
      /** @type {Effect & { nodes: EffectNodes }} */
      A;
    (!(r.f & vr) || r.nodes.end === null) && (r.nodes.end = P), pr();
    return;
  }
  t !== null &&
    t.before(
      /** @type {Node} */
      e,
    );
}
const Fi = ['touchstart', 'touchmove'];
function zi(t) {
  return Fi.includes(t);
}
function Jt(t, e) {
  var r = e == null ? '' : typeof e == 'object' ? e + '' : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && ((t.__t = r), (t.nodeValue = r + ''));
}
function _s(t, e) {
  return ps(t, e);
}
function Ui(t, e) {
  Lr(), (e.intro = e.intro ?? !1);
  const r = e.target,
    n = M,
    s = P;
  try {
    for (
      var i = /* @__PURE__ */ ir(r);
      i && (i.nodeType !== It || /** @type {Comment} */ i.data !== yn);
    )
      i = /* @__PURE__ */ Ue(i);
    if (!i) throw Ct;
    De(!0),
      ve(
        /** @type {Comment} */
        i,
      );
    const a = ps(t, { ...e, anchor: i });
    return De(!1), /**  @type {Exports} */ a;
  } catch (a) {
    if (
      a instanceof Error &&
      a.message
        .split(
          `
`,
        )
        .some(l => l.startsWith('https://svelte.dev/e/'))
    )
      throw a;
    return (
      a !== Ct && console.warn('Failed to hydrate: ', a),
      e.recover === !1 && ei(),
      Lr(),
      Xn(r),
      De(!1),
      _s(t, e)
    );
  } finally {
    De(n), ve(s);
  }
}
const gt = /* @__PURE__ */ new Map();
function ps(t, { target: e, anchor: r, props: n = {}, events: s, context: i, intro: a = !0 }) {
  Lr();
  var l = /* @__PURE__ */ new Set(),
    u = d => {
      for (var v = 0; v < d.length; v++) {
        var p = d[v];
        if (!l.has(p)) {
          l.add(p);
          var h = zi(p);
          e.addEventListener(p, Pt, { passive: h });
          var g = gt.get(p);
          g === void 0
            ? (document.addEventListener(p, Pt, { passive: h }), gt.set(p, 1))
            : gt.set(p, g + 1);
        }
      }
    };
  u(dr(Pi)), dn.add(u);
  var f = void 0,
    o = Ci(() => {
      var d = r ?? e.appendChild(Re());
      return (
        di(
          /** @type {TemplateNode} */
          d,
          {
            pending: () => {},
          },
          v => {
            if (i) {
              In({});
              var p =
                /** @type {ComponentContext} */
                _e;
              p.c = i;
            }
            if (
              (s && (n.$$events = s),
              M &&
                Fr(
                  /** @type {TemplateNode} */
                  v,
                  null,
                ),
              (f = t(v, n) || {}),
              M &&
                ((A.nodes.end = P),
                P === null || P.nodeType !== It || /** @type {Comment} */ P.data !== Hr))
            )
              throw (_r(), Ct);
            i && Mn();
          },
        ),
        () => {
          var h;
          for (var v of l) {
            e.removeEventListener(v, Pt);
            var p =
              /** @type {number} */
              gt.get(v);
            --p === 0 ? (document.removeEventListener(v, Pt), gt.delete(v)) : gt.set(v, p);
          }
          dn.delete(u), d !== r && ((h = d.parentNode) == null || h.removeChild(d));
        }
      );
    });
  return zr.set(f, o), f;
}
const zr = /* @__PURE__ */ new WeakMap();
function qi(t, e) {
  const r = zr.get(t);
  return r ? (zr.delete(t), r(e)) : Promise.resolve();
}
var me, Ce, le, ut, Bt, Wt, cr;
class Hi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    /** @type {TemplateNode} */
    w(this, 'anchor');
    /** @type {Map<Batch, Key>} */
    x(this, me, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    x(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    x(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, Bt, !0);
    x(this, Wt, () => {
      var e =
        /** @type {Batch} */
        b;
      if (c(this, me).has(e)) {
        var r =
            /** @type {Key} */
            c(this, me).get(e),
          n = c(this, Ce).get(r);
        if (n) Jr(n), c(this, ut).delete(r);
        else {
          var s = c(this, le).get(r);
          s &&
            (c(this, Ce).set(r, s.effect),
            c(this, le).delete(r),
            s.fragment.lastChild.remove(),
            this.anchor.before(s.fragment),
            (n = s.effect));
        }
        for (const [i, a] of c(this, me)) {
          if ((c(this, me).delete(i), i === e)) break;
          const l = c(this, le).get(a);
          l && (Q(l.effect), c(this, le).delete(a));
        }
        for (const [i, a] of c(this, Ce)) {
          if (i === r || c(this, ut).has(i)) continue;
          const l = () => {
            if (Array.from(c(this, me).values()).includes(i)) {
              var f = document.createDocumentFragment();
              us(a, f), f.append(Re()), c(this, le).set(i, { effect: a, fragment: f });
            } else Q(a);
            c(this, ut).delete(i), c(this, Ce).delete(i);
          };
          c(this, Bt) || !n ? (c(this, ut).add(i), ft(a, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, cr, e => {
      c(this, me).delete(e);
      const r = Array.from(c(this, me).values());
      for (const [n, s] of c(this, le)) r.includes(n) || (Q(s.effect), c(this, le).delete(n));
    });
    (this.anchor = e), m(this, Bt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var n =
        /** @type {Batch} */
        b,
      s = Zn();
    if (r && !c(this, Ce).has(e) && !c(this, le).has(e))
      if (s) {
        var i = document.createDocumentFragment(),
          a = Re();
        i.append(a),
          c(this, le).set(e, {
            effect: he(() => r(a)),
            fragment: i,
          });
      } else
        c(this, Ce).set(
          e,
          he(() => r(this.anchor)),
        );
    if ((c(this, me).set(n, e), s)) {
      for (const [l, u] of c(this, Ce))
        l === e ? n.skipped_effects.delete(u) : n.skipped_effects.add(u);
      for (const [l, u] of c(this, le))
        l === e ? n.skipped_effects.delete(u.effect) : n.skipped_effects.add(u.effect);
      n.oncommit(c(this, Wt)), n.ondiscard(c(this, cr));
    } else M && (this.anchor = P), c(this, Wt).call(this);
  }
}
(me = new WeakMap()),
  (Ce = new WeakMap()),
  (le = new WeakMap()),
  (ut = new WeakMap()),
  (Bt = new WeakMap()),
  (Wt = new WeakMap()),
  (cr = new WeakMap());
function Nt(t, e, r = !1) {
  M && pr();
  var n = new Hi(t),
    s = r ? kt : 0;
  function i(a, l) {
    if (M) {
      const f = Tn(t) === or;
      if (a === f) {
        var u = nr();
        ve(u), (n.anchor = u), De(!1), n.ensure(a, l), De(!0);
        return;
      }
    }
    n.ensure(a, l);
  }
  Kr(() => {
    var a = !1;
    e((l, u = !0) => {
      (a = !0), i(u, l);
    }),
      a || i(!1, null);
  }, s);
}
function Bi(t, e, r) {
  for (var n = [], s = e.length, i, a = e.length, l = 0; l < s; l++) {
    const d = e[l];
    ft(
      d,
      () => {
        if (i) {
          if ((i.pending.delete(d), i.done.add(d), i.pending.size === 0)) {
            var v =
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups;
            Ur(dr(i.done)), v.delete(i), v.size === 0 && (t.outrogroups = null);
          }
        } else a -= 1;
      },
      !1,
    );
  }
  if (a === 0) {
    var u = n.length === 0 && r !== null;
    if (u) {
      var f =
          /** @type {Element} */
          r,
        o =
          /** @type {Element} */
          f.parentNode;
      Xn(o), o.append(f), t.items.clear();
    }
    Ur(e, !u);
  } else
    (i = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set(),
    }),
      (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Ur(t, e = !0) {
  for (var r = 0; r < t.length; r++) Q(t[r], e);
}
var vn;
function Wi(t, e, r, n, s, i = null) {
  var a = t,
    l = /* @__PURE__ */ new Map();
  M && pr();
  var u = null,
    f = /* @__PURE__ */ gi(() => {
      var g = r();
      return bn(g) ? g : g == null ? [] : dr(g);
    }),
    o,
    d = !0;
  function v() {
    (h.fallback = u),
      Vi(h, o, a, e, n),
      u !== null &&
        (o.length === 0
          ? u.f & Ye
            ? ((u.f ^= Ye), Dt(u, null, a))
            : Jr(u)
          : ft(u, () => {
              u = null;
            }));
  }
  var p = Kr(() => {
      o = /** @type {V[]} */ _(f);
      var g = o.length;
      let C = !1;
      if (M) {
        var j = Tn(a) === or;
        j !== (g === 0) && ((a = nr()), ve(a), De(!1), (C = !0));
      }
      for (
        var T = /* @__PURE__ */ new Set(),
          O =
            /** @type {Batch} */
            b,
          I = Zn(),
          D = 0;
        D < g;
        D += 1
      ) {
        M &&
          P.nodeType === It &&
          /** @type {Comment} */
          P.data === Hr &&
          ((a = /** @type {Comment} */ P), (C = !0), De(!1));
        var Ie = o[D],
          ye = n(Ie, D),
          W = d ? null : l.get(ye);
        W
          ? (W.v && At(W.v, Ie), W.i && At(W.i, D), I && O.skipped_effects.delete(W.e))
          : ((W = Yi(l, d ? a : (vn ?? (vn = Re())), Ie, ye, D, s, e, r)),
            d || (W.e.f |= Ye),
            l.set(ye, W)),
          T.add(ye);
      }
      if (
        (g === 0 &&
          i &&
          !u &&
          (d ? (u = he(() => i(a))) : ((u = he(() => i(vn ?? (vn = Re())))), (u.f |= Ye))),
        M && g > 0 && ve(nr()),
        !d)
      )
        if (I) {
          for (const [Z, Xe] of l) T.has(Z) || O.skipped_effects.add(Xe.e);
          O.oncommit(v), O.ondiscard(() => {});
        } else v();
      C && De(!0), _(f);
    }),
    h = { effect: p, items: l, outrogroups: null, fallback: u };
  (d = !1), M && (a = P);
}
function Vi(t, e, r, n, s) {
  var W;
  var i = e.length,
    a = t.items,
    l = t.effect.first,
    u,
    f = null,
    o = [],
    d = [],
    v,
    p,
    h,
    g;
  for (g = 0; g < i; g += 1) {
    if (
      ((v = e[g]), (p = s(v, g)), (h = /** @type {EachItem} */ a.get(p).e), t.outrogroups !== null)
    )
      for (const Z of t.outrogroups) Z.pending.delete(h), Z.done.delete(h);
    if (h.f & Ye)
      if (((h.f ^= Ye), h === l)) Dt(h, null, r);
      else {
        var C = f ? f.next : l;
        h === t.effect.last && (t.effect.last = h.prev),
          h.prev && (h.prev.next = h.next),
          h.next && (h.next.prev = h.prev),
          qe(t, f, h),
          qe(t, h, C),
          Dt(h, C, r),
          (f = h),
          (o = []),
          (d = []),
          (l = f.next);
        continue;
      }
    if ((h.f & ae && Jr(h), h !== l)) {
      if (u !== void 0 && u.has(h)) {
        if (o.length < d.length) {
          var j = d[0],
            T;
          f = j.prev;
          var O = o[0],
            I = o[o.length - 1];
          for (T = 0; T < o.length; T += 1) Dt(o[T], j, r);
          for (T = 0; T < d.length; T += 1) u.delete(d[T]);
          qe(t, O.prev, I.next),
            qe(t, f, O),
            qe(t, I, j),
            (l = j),
            (f = I),
            (g -= 1),
            (o = []),
            (d = []);
        } else
          u.delete(h),
            Dt(h, l, r),
            qe(t, h.prev, h.next),
            qe(t, h, f === null ? t.effect.first : f.next),
            qe(t, f, h),
            (f = h);
        continue;
      }
      for (o = [], d = []; l !== null && l !== h; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), (l = l.next);
      if (l === null) continue;
    }
    h.f & Ye || o.push(h), (f = h), (l = h.next);
  }
  if (t.outrogroups !== null) {
    for (const Z of t.outrogroups)
      Z.pending.size === 0 && (Ur(dr(Z.done)), (W = t.outrogroups) == null || W.delete(Z));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var D = [];
    if (u !== void 0) for (h of u) h.f & ae || D.push(h);
    for (; l !== null; ) !(l.f & ae) && l !== t.fallback && D.push(l), (l = l.next);
    var Ie = D.length;
    if (Ie > 0) {
      var ye = null;
      Bi(t, D, ye);
    }
  }
}
function Yi(t, e, r, n, s, i, a, l) {
  var u = a & Ps ? (a & Rs ? vt(r) : /* @__PURE__ */ Yn(r, !1, !1)) : null,
    f = a & Ds ? vt(s) : null;
  return {
    v: u,
    i: f,
    e: he(
      () => (
        i(e, u ?? r, f ?? s, l),
        () => {
          t.delete(n);
        }
      ),
    ),
  };
}
function Dt(t, e, r) {
  if (t.nodes)
    for (
      var n = t.nodes.start,
        s = t.nodes.end,
        i = e && !(e.f & Ye) ? /** @type {EffectNodes} */ e.nodes.start : r;
      n !== null;
    ) {
      var a =
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ue(n);
      if ((i.before(n), n === s)) return;
      n = a;
    }
}
function qe(t, e, r) {
  e === null ? (t.effect.first = r) : (e.next = r), r === null ? (t.effect.last = e) : (r.prev = e);
}
function Ki(t, e, r) {
  var n = t == null ? '' : '' + t;
  return n === '' ? null : n;
}
function kr(t, e, r, n, s, i) {
  var a = t.__className;
  if (M || a !== r || a === void 0) {
    var l = Ki(r);
    (!M || l !== t.getAttribute('class')) &&
      (l == null ? t.removeAttribute('class') : (t.className = l)),
      (t.__className = r);
  }
  return i;
}
const Ji = Symbol('is custom element'),
  Gi = Symbol('is html');
function Qi(t) {
  if (M) {
    var e = !1,
      r = () => {
        if (!e) {
          if (((e = !0), t.hasAttribute('value'))) {
            var n = t.value;
            qr(t, 'value', null), (t.value = n);
          }
          if (t.hasAttribute('checked')) {
            var s = t.checked;
            qr(t, 'checked', null), (t.checked = s);
          }
        }
      };
    (t.__on_r = r), Mt(r), es();
  }
}
function qr(t, e, r, n) {
  var s = Xi(t);
  (M &&
    ((s[e] = t.getAttribute(e)),
    e === 'src' || e === 'srcset' || (e === 'href' && t.nodeName === 'LINK'))) ||
    (s[e] !== (s[e] = r) &&
      (e === 'loading' && (t[Ks] = r),
      r == null
        ? t.removeAttribute(e)
        : typeof r != 'string' && Zi(t).includes(e)
          ? (t[e] = r)
          : t.setAttribute(e, r)));
}
function Xi(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??
    (t.__attributes = {
      [Ji]: t.nodeName.includes('-'),
      [Gi]: t.namespaceURI === Fs,
    })
  );
}
var _n = /* @__PURE__ */ new Map();
function Zi(t) {
  var e = t.getAttribute('is') || t.nodeName,
    r = _n.get(e);
  if (r) return r;
  _n.set(e, (r = []));
  for (var n, s = t, i = Element.prototype; i !== s; ) {
    n = Us(s);
    for (var a in n) n[a].set && r.push(a);
    s = $n(s);
  }
  return r;
}
function el(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  yi(t, 'input', async s => {
    var i = s ? t.defaultValue : t.value;
    if (((i = Tr(t) ? Sr(i) : i), r(i), b !== null && n.add(b), await Oi(), i !== (i = e()))) {
      var a = t.selectionStart,
        l = t.selectionEnd,
        u = t.value.length;
      if (((t.value = i ?? ''), l !== null)) {
        var f = t.value.length;
        a === l && l === u && f > u
          ? ((t.selectionStart = f), (t.selectionEnd = f))
          : ((t.selectionStart = a), (t.selectionEnd = Math.min(l, f)));
      }
    }
  }), // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    ((M && t.defaultValue !== t.value) || // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      (Gr(e) == null && t.value)) &&
      (r(Tr(t) ? Sr(t.value) : t.value), b !== null && n.add(b)),
    wr(() => {
      var s = e();
      if (t === document.activeElement) {
        var i =
          /** @type {Batch} */
          Qt ?? b;
        if (n.has(i)) return;
      }
      (Tr(t) && s === Sr(t.value)) ||
        (t.type === 'date' && !s && !t.value) ||
        (s !== t.value && (t.value = s ?? ''));
    });
}
function Tr(t) {
  var e = t.type;
  return e === 'number' || e === 'range';
}
function Sr(t) {
  return t === '' ? null : +t;
}
function pn(t, e) {
  return t === e || (t == null ? void 0 : t[Gt]) === e;
}
function tl(t = {}, e, r, n) {
  return (
    ki(() => {
      var s, i;
      return (
        wr(() => {
          (s = i),
            (i = []),
            Gr(() => {
              t !== r(...i) && (e(t, ...i), s && pn(r(...s), t) && e(null, ...s));
            });
        }),
        () => {
          Mt(() => {
            i && pn(r(...i), t) && e(null, ...i);
          });
        }
      );
    }),
    t
  );
}
function rl(t) {
  return new nl(t);
}
var Pe, oe;
class nl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    x(this, Pe);
    /** @type {Record<string, any>} */
    x(this, oe);
    var i;
    var r = /* @__PURE__ */ new Map(),
      n = (a, l) => {
        var u = /* @__PURE__ */ Yn(l, !1, !1);
        return r.set(a, u), u;
      };
    const s = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(a, l) {
          return _(r.get(l) ?? n(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Ys ? !0 : (_(r.get(l) ?? n(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, u) {
          return S(r.get(l) ?? n(l, u), u), Reflect.set(a, l, u);
        },
      },
    );
    m(
      this,
      oe,
      (e.hydrate ? Ui : _s)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: s,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
      }),
    ),
      (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && Rn(),
      m(this, Pe, s.$$events);
    for (const a of Object.keys(c(this, oe)))
      a === '$set' ||
        a === '$destroy' ||
        a === '$on' ||
        rr(this, a, {
          get() {
            return c(this, oe)[a];
          },
          /** @param {any} value */
          set(l) {
            c(this, oe)[a] = l;
          },
          enumerable: !0,
        });
    (c(this, oe).$set =
      /** @param {Record<string, any>} next */
      a => {
        Object.assign(s, a);
      }),
      (c(this, oe).$destroy = () => {
        qi(c(this, oe));
      });
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    c(this, oe).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    c(this, Pe)[e] = c(this, Pe)[e] || [];
    const n = (...s) => r.call(this, ...s);
    return (
      c(this, Pe)[e].push(n),
      () => {
        c(this, Pe)[e] = c(this, Pe)[e].filter(
          /** @param {any} fn */
          s => s !== n,
        );
      }
    );
  }
  $destroy() {
    c(this, oe).$destroy();
  }
}
(Pe = new WeakMap()), (oe = new WeakMap());
let gs;
typeof HTMLElement == 'function' &&
  (gs = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor(e, r, n) {
      super();
      /** The Svelte component constructor */
      w(this, '$$ctor');
      /** Slots */
      w(this, '$$s');
      /** @type {any} The Svelte component instance */
      w(this, '$$c');
      /** Whether or not the custom element is connected */
      w(this, '$$cn', !1);
      /** @type {Record<string, any>} Component props data */
      w(this, '$$d', {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      w(this, '$$r', !1);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      w(this, '$$p_d', {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      w(this, '$$l', {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      w(this, '$$l_u', /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      w(this, '$$me');
      (this.$$ctor = e), (this.$$s = r), n && this.attachShadow({ mode: 'open' });
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(e, r, n) {
      if (((this.$$l[e] = this.$$l[e] || []), this.$$l[e].push(r), this.$$c)) {
        const s = this.$$c.$on(e, r);
        this.$$l_u.set(r, s);
      }
      super.addEventListener(e, r, n);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(e, r, n) {
      if ((super.removeEventListener(e, r, n), this.$$c)) {
        const s = this.$$l_u.get(r);
        s && (s(), this.$$l_u.delete(r));
      }
    }
    async connectedCallback() {
      if (((this.$$cn = !0), !this.$$c)) {
        const e = s => i => {
          const a = document.createElement('slot');
          s !== 'default' && (a.name = s), He(i, a);
        };
        if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
        const r = {},
          n = sl(this);
        for (const s of this.$$s)
          s in n &&
            (s === 'default' && !this.$$d.children
              ? ((this.$$d.children = e(s)), (r.default = !0))
              : (r[s] = e(s)));
        for (const s of this.attributes) {
          const i = this.$$g_p(s.name);
          i in this.$$d || (this.$$d[i] = er(i, s.value, this.$$p_d, 'toProp'));
        }
        for (const s in this.$$p_d)
          !(s in this.$$d) && this[s] !== void 0 && ((this.$$d[s] = this[s]), delete this[s]);
        (this.$$c = rl({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: r,
            $$host: this,
          },
        })),
          (this.$$me = Ei(() => {
            wr(() => {
              var s;
              this.$$r = !0;
              for (const i of tr(this.$$c)) {
                if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
                this.$$d[i] = this.$$c[i];
                const a = er(i, this.$$d[i], this.$$p_d, 'toAttribute');
                a == null
                  ? this.removeAttribute(this.$$p_d[i].attribute || i)
                  : this.setAttribute(this.$$p_d[i].attribute || i, a);
              }
              this.$$r = !1;
            });
          }));
        for (const s in this.$$l)
          for (const i of this.$$l[s]) {
            const a = this.$$c.$on(s, i);
            this.$$l_u.set(i, a);
          }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(e, r, n) {
      var s;
      this.$$r ||
        ((e = this.$$g_p(e)),
        (this.$$d[e] = er(e, n, this.$$p_d, 'toProp')),
        (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
    }
    disconnectedCallback() {
      (this.$$cn = !1),
        Promise.resolve().then(() => {
          !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0));
        });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(e) {
      return (
        tr(this.$$p_d).find(
          r => this.$$p_d[r].attribute === e || (!this.$$p_d[r].attribute && r.toLowerCase() === e),
        ) || e
      );
    }
  });
function er(t, e, r, n) {
  var i;
  const s = (i = r[t]) == null ? void 0 : i.type;
  if (((e = s === 'Boolean' && typeof e != 'boolean' ? e != null : e), !n || !r[t])) return e;
  if (n === 'toAttribute')
    switch (s) {
      case 'Object':
      case 'Array':
        return e == null ? null : JSON.stringify(e);
      case 'Boolean':
        return e ? '' : null;
      case 'Number':
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case 'Object':
      case 'Array':
        return e && JSON.parse(e);
      case 'Boolean':
        return e;
      case 'Number':
        return e != null ? +e : e;
      default:
        return e;
    }
}
function sl(t) {
  const e = {};
  return (
    t.childNodes.forEach(r => {
      e[
        /** @type {Element} node */
        r.slot || 'default'
      ] = !0;
    }),
    e
  );
}
function il(t, e, r, n, s, i) {
  const a = class extends gs {
    constructor() {
      super(t, r, s), (this.$$p_d = e);
    }
    static get observedAttributes() {
      return tr(e).map(l => (e[l].attribute || l).toLowerCase());
    }
  };
  return (
    tr(e).forEach(l => {
      rr(a.prototype, l, {
        get() {
          return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
        },
        set(u) {
          var d;
          (u = er(l, u, e)), (this.$$d[l] = u);
          var f = this.$$c;
          if (f) {
            var o = (d = yt(f, l)) == null ? void 0 : d.get;
            o ? (f[l] = u) : f.$set({ [l]: u });
          }
        },
      });
    }),
    n.forEach(l => {
      rr(a.prototype, l, {
        get() {
          var u;
          return (u = this.$$c) == null ? void 0 : u[l];
        },
      });
    }),
    (t.element = /** @type {any} */ a),
    a
  );
}
var ll = /* @__PURE__ */ pt(
    '<span class="inline-block w-1 h-1 bg-amber-600 rounded-full animate-pulse"></span>',
  ),
  al = /* @__PURE__ */ pt(
    '<span class="inline-block w-1.5 h-3.5 bg-amber-600 ml-0.5 animate-pulse"></span>',
  ),
  ul = /* @__PURE__ */ pt(
    '<details class="mb-2 group"><summary class="cursor-pointer list-none"><div class="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors"><svg class="w-4 h-4 text-amber-600 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> <span class="text-xs font-medium text-amber-900 flex items-center gap-1.5"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> Thinking <!></span></div></summary> <div class="mt-2 px-4 py-3 bg-amber-50/50 border border-amber-100 rounded-lg"><p class="text-[13px] leading-relaxed whitespace-pre-wrap break-words text-amber-950 font-mono"> <!></p></div></details>',
  ),
  fl = /* @__PURE__ */ pt(
    '<span class="inline-block w-1.5 h-4 bg-blue-600 ml-0.5 animate-pulse"></span>',
  ),
  cl = /* @__PURE__ */ pt(
    '<div><div class="flex flex-col max-w-[80%]"><!> <div><p class="text-[14px] leading-relaxed whitespace-pre-wrap break-words"> <!></p></div> <span> </span></div></div>',
  ),
  ol = /* @__PURE__ */ pt(
    '<div class="flex justify-start"><div class="bg-white border border-slate-200 rounded-t-2xl rounded-br-2xl px-5 py-3 shadow-sm"><div class="flex gap-1"><div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div> <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div> <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div></div></div></div>',
  ),
  dl = /* @__PURE__ */ pt(
    '<div class="flex flex-col bg-white h-[600px] rounded-lg shadow-lg overflow-hidden"><header class="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50"><div><h2 class="text-base font-medium text-slate-900"> </h2></div> <button class="p-2 hover:bg-slate-200 rounded-full transition-colors" title="Options"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></button></header> <div class="flex-1 overflow-y-auto px-6 py-4 space-y-3 scroll-smooth bg-slate-50"><!> <!></div> <footer class="border-t border-slate-200 px-5 py-4 bg-white"><form class="flex gap-2 items-end"><div class="flex-1"><input class="w-full rounded-full border border-slate-300 px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all placeholder:text-slate-400"/></div> <button type="submit" class="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2.5 rounded-full transition-all disabled:cursor-not-allowed shadow-md hover:shadow-lg" title="Send message"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button></form></footer></div>',
  );
function ms(t, e) {
  In(e, !0);
  const r = /* @__PURE__ */ te(void 0),
    n = /* @__PURE__ */ te(wt([])),
    s = /* @__PURE__ */ te(''),
    i = /* @__PURE__ */ te(!1),
    a = /* @__PURE__ */ te(void 0),
    l = /* @__PURE__ */ te(null);
  xi(() => {
    var y, k;
    if (!_(r)) {
      const $ = window.__audakoChatConfig;
      $ && S(r, $, !0);
    }
    (y = _(r)) != null &&
      y.adapter &&
      typeof _(r).adapter.init == 'function' &&
      _(r)
        .adapter.init()
        .catch($ => {
          console.error('Failed to initialize adapter:', $);
        }),
      (k = _(r)) != null && k.initialMessage && _(n).length === 0
        ? S(
            n,
            [
              {
                id: '1',
                from: 'system',
                text: _(r).initialMessage,
                timestamp: /* @__PURE__ */ new Date(),
              },
            ],
            !0,
          )
        : _(n).length === 0 &&
          S(
            n,
            [
              {
                id: '1',
                from: 'system',
                text: 'Welcome to Audako MCP Chat. How can I assist you today?',
                timestamp: /* @__PURE__ */ new Date(),
              },
            ],
            !0,
          );
  });
  const u = () => {
      _(a) &&
        setTimeout(() => {
          _(a) && (_(a).scrollTop = _(a).scrollHeight);
        }, 50);
    },
    f = async () => {
      var Ot;
      if (!_(s).trim() || _(l) || !((Ot = _(r)) != null && Ot.adapter)) return;
      const y = {
        id: Date.now().toString(),
        from: 'user',
        text: _(s).trim(),
        timestamp: /* @__PURE__ */ new Date(),
      };
      S(n, [..._(n), y], !0);
      const k = _(s).trim();
      S(s, ''), u(), S(i, !0), await new Promise(F => setTimeout(F, 300));
      const $ = (Date.now() + 1).toString(),
        Ze = {
          id: $,
          from: 'assistant',
          text: '',
          timestamp: /* @__PURE__ */ new Date(),
          isStreaming: !0,
        };
      S(n, [..._(n), Ze], !0), S(i, !1), S(l, $, !0), u();
      try {
        await _(r).adapter.sendMessage(
          {
            message: k,
            conversationHistory: _(n).filter(F => F.from !== 'system'),
          },
          {
            // onChunk callback
            onChunk: F => {
              const L = _(n).findIndex(be => be.id === $);
              L !== -1 && ((_(n)[L] = { ..._(n)[L], text: F }), S(n, [..._(n)], !0)), u();
            },
            // onThinking callback
            onThinking: F => {
              const L = _(n).findIndex(be => be.id === $);
              L !== -1 &&
                ((_(n)[L] = {
                  ..._(n)[L],
                  thinking: { content: F, isStreaming: !0 },
                }),
                S(n, [..._(n)], !0)),
                u();
            },
            // onComplete callback
            onComplete: () => {
              const F = _(n).findIndex(L => L.id === $);
              F !== -1 &&
                ((_(n)[F] = {
                  ..._(n)[F],
                  isStreaming: !1,
                  thinking: _(n)[F].thinking
                    ? {
                        ..._(n)[F].thinking,
                        isStreaming: !1,
                      }
                    : void 0,
                }),
                S(n, [..._(n)], !0)),
                S(l, null),
                u();
            },
            // onError callback
            onError: F => {
              console.error('Chat error:', F);
              const L = _(n).findIndex(be => be.id === $);
              L !== -1 &&
                ((_(n)[L] = {
                  ..._(n)[L],
                  text: `Error: ${F.message}`,
                  isStreaming: !1,
                }),
                S(n, [..._(n)], !0)),
                S(l, null),
                u();
            },
          },
        );
      } catch (F) {
        console.error('Unexpected error:', F);
        const L = _(n).findIndex(be => be.id === $);
        L !== -1 &&
          ((_(n)[L] = {
            ..._(n)[L],
            text: 'Unexpected error occurred',
            isStreaming: !1,
          }),
          S(n, [..._(n)], !0)),
          S(l, null);
      }
    },
    o = y => y.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  function d(y) {
    var k;
    S(r, y, !0),
      (k = _(r)) != null &&
        k.adapter &&
        typeof _(r).adapter.init == 'function' &&
        _(r)
          .adapter.init()
          .catch($ => {
            console.error('Failed to initialize adapter:', $);
          });
  }
  function v() {
    var y;
    S(n, [], !0),
      (y = _(r)) != null &&
        y.initialMessage &&
        S(
          n,
          [
            {
              id: Date.now().toString(),
              from: 'system',
              text: _(r).initialMessage,
              timestamp: /* @__PURE__ */ new Date(),
            },
          ],
          !0,
        );
  }
  function p(y, k = 'system') {
    const $ = {
      id: Date.now().toString(),
      from: k,
      text: y,
      timestamp: /* @__PURE__ */ new Date(),
    };
    S(n, [..._(n), $], !0), u();
  }
  var h = { setConfig: d, clearMessages: v, addMessage: p },
    g = dl(),
    C = H(g),
    j = H(C),
    T = H(j),
    O = H(T, !0);
  q(T), q(j), kn(2), q(C);
  var I = pe(C, 2),
    D = H(I);
  Wi(
    D,
    17,
    () => _(n),
    y => y.id,
    (y, k) => {
      var $ = cl(),
        Ze = H($),
        Ot = H(Ze);
      var F = je => {
        var Oe = ul(),
          $r = H(Oe),
          Xr = H($r),
          Zr = pe(H(Xr), 2),
          Ss = pe(H(Zr), 2);
        var As = et => {
          var xr = ll();
          He(et, xr);
        };
        Nt(Ss, et => {
          _(k).thinking.isStreaming && et(As);
        });
        q(Zr), q(Xr), q($r);
        var en = pe($r, 2),
          tn = H(en),
          rn = H(tn),
          Is = pe(rn);
        var Ms = et => {
          var xr = al();
          He(et, xr);
        };
        Nt(Is, et => {
          _(k).thinking.isStreaming && et(Ms);
        });
        q(tn),
          q(en),
          q(Oe),
          Cr(() => {
            (Oe.open = _(k).thinking.isStreaming), Jt(rn, `${_(k).thinking.content ?? ''} `);
          }),
          He(je, Oe);
      };
      Nt(Ot, je => {
        _(k).thinking && _(k).from === 'assistant' && je(F);
      });
      var L = pe(Ot, 2),
        be = H(L),
        Qr = H(be),
        Cs = pe(Qr);
      var ks = je => {
        var Oe = fl();
        He(je, Oe);
      };
      Nt(Cs, je => {
        var Oe;
        _(k).isStreaming && !((Oe = _(k).thinking) != null && Oe.isStreaming) && je(ks);
      });
      q(be), q(L);
      var br = pe(L, 2),
        Ts = H(br, !0);
      q(br),
        q(Ze),
        q($),
        Cr(
          je => {
            kr($, 1, `flex ${_(k).from === 'user' ? 'justify-end' : 'justify-start'}`),
              kr(
                L,
                1,
                `px-4 py-2.5 ${
                  _(k).from === 'user'
                    ? 'bg-blue-600 text-white rounded-t-2xl rounded-bl-2xl'
                    : _(k).from === 'assistant'
                      ? 'bg-white text-slate-900 border border-slate-200 rounded-t-2xl rounded-br-2xl shadow-sm'
                      : 'bg-blue-50 text-blue-900 border border-blue-100 rounded-2xl'
                }`,
              ),
              Jt(Qr, `${_(k).text ?? ''} `),
              kr(
                br,
                1,
                `text-[11px] text-slate-500 mt-1.5 px-2 ${_(k).from === 'user' ? 'text-right' : 'text-left'}`,
              ),
              Jt(Ts, je);
          },
          [() => o(_(k).timestamp)],
        ),
        He(y, $);
    },
  );
  var Ie = pe(D, 2);
  var ye = y => {
    var k = ol();
    He(y, k);
  };
  Nt(Ie, y => {
    _(i) && y(ye);
  });
  q(I),
    tl(
      I,
      y => S(a, y),
      () => _(a),
    );
  var W = pe(I, 2),
    Z = H(W),
    Xe = H(Z),
    Me = H(Xe);
  Qi(Me), q(Xe);
  var Yt = pe(Xe, 2);
  return (
    q(Z),
    q(W),
    q(g),
    Cr(
      y => {
        var k, $;
        Jt(O, ((k = _(r)) == null ? void 0 : k.title) || 'Audako Assistant'),
          qr(Me, 'placeholder', (($ = _(r)) == null ? void 0 : $.placeholder) || 'Type a message'),
          (Me.disabled = _(i) || !!_(l)),
          (Yt.disabled = y);
      },
      [() => !_(s).trim() || _(i) || !!_(l)],
    ),
    Ri('submit', Z, y => {
      y.preventDefault(), f();
    }),
    el(
      Me,
      () => _(s),
      y => S(s, y),
    ),
    He(t, g),
    Mn(h)
  );
}

customElements.define(
  'audako-chat',
  il(ms, {}, [], ['setConfig', 'clearMessages', 'addMessage'], !1),
);
class ta {
  constructor(e) {
    (this.abortController = null),
      (this.showThinking = (e == null ? void 0 : e.showThinking) ?? !1);
  }
  /**
   * Initialize the mock adapter
   * For MockAdapter, this is a no-op since there's no real connection to set up
   */
  async init() {}
  async sendMessage(e, r) {
    this.abortController = new AbortController();
    const n = [
        "I understand your question. Let me help you with that. First, we need to consider the context of your request. Then, I'll provide you with a detailed explanation that addresses all aspects of your query.",
        "That's an interesting point. Here's what I think about it. Based on the information provided, there are several factors we should analyze. Let me break this down into manageable parts for better understanding.",
        "I'd be happy to assist you with that. Based on what you've asked, I recommend taking a systematic approach. We can explore multiple solutions and find the one that best fits your needs.",
        'Great question! The answer depends on several factors, but generally speaking, the most effective approach would be to first understand the requirements. Then we can proceed with implementing the solution step by step.',
        "I can help you with that. Let me break it down for you step by step. We'll start with the fundamentals and gradually move to more advanced concepts to ensure you have a complete understanding.",
      ],
      s = [
        'Let me analyze this question... The user is asking about a complex topic. I should break this down into clear, logical steps.',
        'Hmm, interesting query. I need to consider multiple angles here: technical feasibility, best practices, and practical application.',
        "First, I'll identify the core problem. Then I'll explore potential solutions and their trade-offs before providing a recommendation.",
        "Let's think through this systematically. What are the key requirements? What constraints do we have? What's the optimal approach?",
        'Breaking down the problem: 1) Understand the context, 2) Identify relevant factors, 3) Formulate a clear, actionable response.',
      ];
    try {
      if (this.showThinking && r.onThinking) {
        const f = s[Math.floor(Math.random() * s.length)].split(' ');
        let o = '';
        for (let d = 0; d < f.length; d++) {
          if (this.abortController.signal.aborted) throw new Error('Request cancelled');
          (o += (d > 0 ? ' ' : '') + f[d]),
            r.onThinking(o),
            await new Promise(v => setTimeout(v, 40 + Math.random() * 40));
        }
        await new Promise(d => setTimeout(d, 200));
      }
      const a = n[Math.floor(Math.random() * n.length)].split(' ');
      let l = '';
      for (let u = 0; u < a.length; u++) {
        if (this.abortController.signal.aborted) throw new Error('Request cancelled');
        (l += (u > 0 ? ' ' : '') + a[u]),
          r.onChunk(l),
          await new Promise(f => setTimeout(f, 20 + Math.random() * 60));
      }
      r.onComplete();
    } catch (i) {
      this.abortController.signal.aborted ||
        r.onError(i instanceof Error ? i : new Error('Unknown error'));
    } finally {
      this.abortController = null;
    }
  }
  cancel() {
    this.abortController && this.abortController.abort();
  }
}
class ra {
  constructor(e = {}) {
    (this.abortController = null),
      (this.apiKey = e.apiKey || ''),
      (this.apiUrl = e.apiUrl || 'https://api.openai.com/v1/chat/completions'),
      (this.model = e.model || 'gpt-4'),
      (this.systemPrompt = e.systemPrompt || 'You are a helpful assistant.');
  }
  /**
   * Initialize the OpenAI adapter
   * For OpenAIAdapter, this is a no-op since authentication happens per-request
   */
  async init() {}
  async sendMessage(e, r) {
    var n, s, i, a;
    this.abortController = new AbortController();
    try {
      const l = [{ role: 'system', content: this.systemPrompt }];
      if (e.conversationHistory)
        for (const v of e.conversationHistory)
          v.from === 'user'
            ? l.push({ role: 'user', content: v.text })
            : v.from === 'assistant' && l.push({ role: 'assistant', content: v.text });
      l.push({ role: 'user', content: e.message });
      const u = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
        },
        body: JSON.stringify({
          model: this.model,
          messages: l,
          stream: !0,
        }),
        signal: this.abortController.signal,
      });
      if (!u.ok) throw new Error(`API error: ${u.status} ${u.statusText}`);
      const f = (n = u.body) == null ? void 0 : n.getReader();
      if (!f) throw new Error('Response body is not readable');
      const o = new TextDecoder();
      let d = '';
      for (;;) {
        const { done: v, value: p } = await f.read();
        if (v) break;
        const g = o
          .decode(p, { stream: !0 })
          .split(
            `
`,
          )
          .filter(C => C.trim() !== '');
        for (const C of g)
          if (C.startsWith('data: ')) {
            const j = C.slice(6);
            if (j === '[DONE]') continue;
            try {
              const O =
                (a =
                  (i = (s = JSON.parse(j).choices) == null ? void 0 : s[0]) == null
                    ? void 0
                    : i.delta) == null
                  ? void 0
                  : a.content;
              O && ((d += O), r.onChunk(d));
            } catch {
              console.warn('Failed to parse SSE data:', j);
            }
          }
      }
      r.onComplete();
    } catch (l) {
      this.abortController.signal.aborted ||
        r.onError(l instanceof Error ? l : new Error('Unknown error'));
    } finally {
      this.abortController = null;
    }
  }
  cancel() {
    this.abortController && this.abortController.abort();
  }
}
const hl = ({
    onSseError: t,
    onSseEvent: e,
    responseTransformer: r,
    responseValidator: n,
    sseDefaultRetryDelay: s,
    sseMaxRetryAttempts: i,
    sseMaxRetryDelay: a,
    sseSleepFn: l,
    url: u,
    ...f
  }) => {
    let o;
    const d = l ?? (h => new Promise(g => setTimeout(g, h)));
    return {
      stream: (async function* () {
        let h = s ?? 3e3,
          g = 0;
        const C = f.signal ?? new AbortController().signal;
        for (; !C.aborted; ) {
          g++;
          const j = f.headers instanceof Headers ? f.headers : new Headers(f.headers);
          o !== void 0 && j.set('Last-Event-ID', o);
          try {
            const T = await fetch(u, { ...f, headers: j, signal: C });
            if (!T.ok) throw new Error(`SSE failed: ${T.status} ${T.statusText}`);
            if (!T.body) throw new Error('No body in SSE response');
            const O = T.body.pipeThrough(new TextDecoderStream()).getReader();
            let I = '';
            const D = () => {
              try {
                O.cancel();
              } catch {}
            };
            C.addEventListener('abort', D);
            try {
              for (;;) {
                const { done: Ie, value: ye } = await O.read();
                if (Ie) break;
                I += ye;
                const W = I.split(`

`);
                I = W.pop() ?? '';
                for (const Z of W) {
                  const Xe = Z.split(`
`),
                    Me = [];
                  let Yt;
                  for (const $ of Xe)
                    if ($.startsWith('data:')) Me.push($.replace(/^data:\s*/, ''));
                    else if ($.startsWith('event:')) Yt = $.replace(/^event:\s*/, '');
                    else if ($.startsWith('id:')) o = $.replace(/^id:\s*/, '');
                    else if ($.startsWith('retry:')) {
                      const Ze = Number.parseInt($.replace(/^retry:\s*/, ''), 10);
                      Number.isNaN(Ze) || (h = Ze);
                    }
                  let y,
                    k = !1;
                  if (Me.length) {
                    const $ = Me.join(`
`);
                    try {
                      (y = JSON.parse($)), (k = !0);
                    } catch {
                      y = $;
                    }
                  }
                  k && (n && (await n(y)), r && (y = await r(y))),
                    e == null ||
                      e({
                        data: y,
                        event: Yt,
                        id: o,
                        retry: h,
                      }),
                    Me.length && (yield y);
                }
              }
            } finally {
              C.removeEventListener('abort', D), O.releaseLock();
            }
            break;
          } catch (T) {
            if ((t == null || t(T), i !== void 0 && g >= i)) break;
            const O = Math.min(h * 2 ** (g - 1), a ?? 3e4);
            await d(O);
          }
        }
      })(),
    };
  },
  vl = async (t, e) => {
    const r = typeof e == 'function' ? await e(t) : e;
    if (r)
      return t.scheme === 'bearer' ? `Bearer ${r}` : t.scheme === 'basic' ? `Basic ${btoa(r)}` : r;
  },
  _l = {
    bodySerializer: t => JSON.stringify(t, (e, r) => (typeof r == 'bigint' ? r.toString() : r)),
  },
  pl = t => {
    switch (t) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  gl = t => {
    switch (t) {
      case 'form':
        return ',';
      case 'pipeDelimited':
        return '|';
      case 'spaceDelimited':
        return '%20';
      default:
        return ',';
    }
  },
  ml = t => {
    switch (t) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  ws = ({ allowReserved: t, explode: e, name: r, style: n, value: s }) => {
    if (!e) {
      const l = (t ? s : s.map(u => encodeURIComponent(u))).join(gl(n));
      switch (n) {
        case 'label':
          return `.${l}`;
        case 'matrix':
          return `;${r}=${l}`;
        case 'simple':
          return l;
        default:
          return `${r}=${l}`;
      }
    }
    const i = pl(n),
      a = s
        .map(l =>
          n === 'label' || n === 'simple'
            ? t
              ? l
              : encodeURIComponent(l)
            : yr({
                allowReserved: t,
                name: r,
                value: l,
              }),
        )
        .join(i);
    return n === 'label' || n === 'matrix' ? i + a : a;
  },
  yr = ({ allowReserved: t, name: e, value: r }) => {
    if (r == null) return '';
    if (typeof r == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.',
      );
    return `${e}=${t ? r : encodeURIComponent(r)}`;
  },
  ys = ({ allowReserved: t, explode: e, name: r, style: n, value: s, valueOnly: i }) => {
    if (s instanceof Date) return i ? s.toISOString() : `${r}=${s.toISOString()}`;
    if (n !== 'deepObject' && !e) {
      let u = [];
      Object.entries(s).forEach(([o, d]) => {
        u = [...u, o, t ? d : encodeURIComponent(d)];
      });
      const f = u.join(',');
      switch (n) {
        case 'form':
          return `${r}=${f}`;
        case 'label':
          return `.${f}`;
        case 'matrix':
          return `;${r}=${f}`;
        default:
          return f;
      }
    }
    const a = ml(n),
      l = Object.entries(s)
        .map(([u, f]) =>
          yr({
            allowReserved: t,
            name: n === 'deepObject' ? `${r}[${u}]` : u,
            value: f,
          }),
        )
        .join(a);
    return n === 'label' || n === 'matrix' ? a + l : l;
  },
  wl = /\{[^{}]+\}/g,
  yl = ({ path: t, url: e }) => {
    let r = e;
    const n = e.match(wl);
    if (n)
      for (const s of n) {
        let i = !1,
          a = s.substring(1, s.length - 1),
          l = 'simple';
        a.endsWith('*') && ((i = !0), (a = a.substring(0, a.length - 1))),
          a.startsWith('.')
            ? ((a = a.substring(1)), (l = 'label'))
            : a.startsWith(';') && ((a = a.substring(1)), (l = 'matrix'));
        const u = t[a];
        if (u == null) continue;
        if (Array.isArray(u)) {
          r = r.replace(s, ws({ explode: i, name: a, style: l, value: u }));
          continue;
        }
        if (typeof u == 'object') {
          r = r.replace(
            s,
            ys({
              explode: i,
              name: a,
              style: l,
              value: u,
              valueOnly: !0,
            }),
          );
          continue;
        }
        if (l === 'matrix') {
          r = r.replace(
            s,
            `;${yr({
              name: a,
              value: u,
            })}`,
          );
          continue;
        }
        const f = encodeURIComponent(l === 'label' ? `.${u}` : u);
        r = r.replace(s, f);
      }
    return r;
  },
  bl = ({ baseUrl: t, path: e, query: r, querySerializer: n, url: s }) => {
    const i = s.startsWith('/') ? s : `/${s}`;
    let a = (t ?? '') + i;
    e && (a = yl({ path: e, url: a }));
    let l = r ? n(r) : '';
    return l.startsWith('?') && (l = l.substring(1)), l && (a += `?${l}`), a;
  },
  bs =
    ({ allowReserved: t, array: e, object: r } = {}) =>
    s => {
      const i = [];
      if (s && typeof s == 'object')
        for (const a in s) {
          const l = s[a];
          if (l != null)
            if (Array.isArray(l)) {
              const u = ws({
                allowReserved: t,
                explode: !0,
                name: a,
                style: 'form',
                value: l,
                ...e,
              });
              u && i.push(u);
            } else if (typeof l == 'object') {
              const u = ys({
                allowReserved: t,
                explode: !0,
                name: a,
                style: 'deepObject',
                value: l,
                ...r,
              });
              u && i.push(u);
            } else {
              const u = yr({
                allowReserved: t,
                name: a,
                value: l,
              });
              u && i.push(u);
            }
        }
      return i.join('&');
    },
  $l = t => {
    var r;
    if (!t) return 'stream';
    const e = (r = t.split(';')[0]) == null ? void 0 : r.trim();
    if (e) {
      if (e.startsWith('application/json') || e.endsWith('+json')) return 'json';
      if (e === 'multipart/form-data') return 'formData';
      if (['application/', 'audio/', 'image/', 'video/'].some(n => e.startsWith(n))) return 'blob';
      if (e.startsWith('text/')) return 'text';
    }
  },
  xl = (t, e) => {
    var r, n;
    return e
      ? !!(
          t.headers.has(e) ||
          ((r = t.query) != null && r[e]) ||
          ((n = t.headers.get('Cookie')) != null && n.includes(`${e}=`))
        )
      : !1;
  },
  El = async ({ security: t, ...e }) => {
    for (const r of t) {
      if (xl(e, r.name)) continue;
      const n = await vl(r, e.auth);
      if (!n) continue;
      const s = r.name ?? 'Authorization';
      switch (r.in) {
        case 'query':
          e.query || (e.query = {}), (e.query[s] = n);
          break;
        case 'cookie':
          e.headers.append('Cookie', `${s}=${n}`);
          break;
        case 'header':
        default:
          e.headers.set(s, n);
          break;
      }
    }
  },
  gn = t =>
    bl({
      baseUrl: t.baseUrl,
      path: t.path,
      query: t.query,
      querySerializer:
        typeof t.querySerializer == 'function' ? t.querySerializer : bs(t.querySerializer),
      url: t.url,
    }),
  mn = (t, e) => {
    var n;
    const r = { ...t, ...e };
    return (
      (n = r.baseUrl) != null &&
        n.endsWith('/') &&
        (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)),
      (r.headers = $s(t.headers, e.headers)),
      r
    );
  },
  $s = (...t) => {
    const e = new Headers();
    for (const r of t) {
      if (!r || typeof r != 'object') continue;
      const n = r instanceof Headers ? r.entries() : Object.entries(r);
      for (const [s, i] of n)
        if (i === null) e.delete(s);
        else if (Array.isArray(i)) for (const a of i) e.append(s, a);
        else i !== void 0 && e.set(s, typeof i == 'object' ? JSON.stringify(i) : i);
    }
    return e;
  };
class Ar {
  constructor() {
    w(this, '_fns');
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(e) {
    return typeof e == 'number' ? (this._fns[e] ? e : -1) : this._fns.indexOf(e);
  }
  exists(e) {
    const r = this.getInterceptorIndex(e);
    return !!this._fns[r];
  }
  eject(e) {
    const r = this.getInterceptorIndex(e);
    this._fns[r] && (this._fns[r] = null);
  }
  update(e, r) {
    const n = this.getInterceptorIndex(e);
    return this._fns[n] ? ((this._fns[n] = r), e) : !1;
  }
  use(e) {
    return (this._fns = [...this._fns, e]), this._fns.length - 1;
  }
}
const Cl = () => ({
    error: new Ar(),
    request: new Ar(),
    response: new Ar(),
  }),
  kl = bs({
    allowReserved: !1,
    array: {
      explode: !0,
      style: 'form',
    },
    object: {
      explode: !0,
      style: 'deepObject',
    },
  }),
  Tl = {
    'Content-Type': 'application/json',
  },
  xs = (t = {}) => ({
    ..._l,
    headers: Tl,
    parseAs: 'auto',
    querySerializer: kl,
    ...t,
  }),
  Es = (t = {}) => {
    let e = mn(xs(), t);
    const r = () => ({ ...e }),
      n = u => ((e = mn(e, u)), r()),
      s = Cl(),
      i = async u => {
        const f = {
          ...e,
          ...u,
          fetch: u.fetch ?? e.fetch ?? globalThis.fetch,
          headers: $s(e.headers, u.headers),
          serializedBody: void 0,
        };
        f.security &&
          (await El({
            ...f,
            security: f.security,
          })),
          f.requestValidator && (await f.requestValidator(f)),
          f.body && f.bodySerializer && (f.serializedBody = f.bodySerializer(f.body)),
          (f.serializedBody === void 0 || f.serializedBody === '') &&
            f.headers.delete('Content-Type');
        const o = gn(f);
        return { opts: f, url: o };
      },
      a = async u => {
        const { opts: f, url: o } = await i(u),
          d = {
            redirect: 'follow',
            ...f,
            body: f.serializedBody,
          };
        let v = new Request(o, d);
        for (const I of s.request._fns) I && (v = await I(v, f));
        const p = f.fetch;
        let h = await p(v);
        for (const I of s.response._fns) I && (h = await I(h, v, f));
        const g = {
          request: v,
          response: h,
        };
        if (h.ok) {
          if (h.status === 204 || h.headers.get('Content-Length') === '0')
            return f.responseStyle === 'data'
              ? {}
              : {
                  data: {},
                  ...g,
                };
          const I =
            (f.parseAs === 'auto' ? $l(h.headers.get('Content-Type')) : f.parseAs) ?? 'json';
          let D;
          switch (I) {
            case 'arrayBuffer':
            case 'blob':
            case 'formData':
            case 'json':
            case 'text':
              D = await h[I]();
              break;
            case 'stream':
              return f.responseStyle === 'data'
                ? h.body
                : {
                    data: h.body,
                    ...g,
                  };
          }
          return (
            I === 'json' &&
              (f.responseValidator && (await f.responseValidator(D)),
              f.responseTransformer && (D = await f.responseTransformer(D))),
            f.responseStyle === 'data'
              ? D
              : {
                  data: D,
                  ...g,
                }
          );
        }
        const C = await h.text();
        let j;
        try {
          j = JSON.parse(C);
        } catch {}
        const T = j ?? C;
        let O = T;
        for (const I of s.error._fns) I && (O = await I(T, h, v, f));
        if (((O = O || {}), f.throwOnError)) throw O;
        return f.responseStyle === 'data'
          ? void 0
          : {
              error: O,
              ...g,
            };
      },
      l = u => {
        const f = o => a({ ...o, method: u });
        return (
          (f.sse = async o => {
            const { opts: d, url: v } = await i(o);
            return hl({
              ...d,
              body: d.body,
              headers: d.headers,
              method: u,
              url: v,
            });
          }),
          f
        );
      };
    return {
      buildUrl: gn,
      connect: l('CONNECT'),
      delete: l('DELETE'),
      get: l('GET'),
      getConfig: r,
      head: l('HEAD'),
      interceptors: s,
      options: l('OPTIONS'),
      patch: l('PATCH'),
      post: l('POST'),
      put: l('PUT'),
      request: a,
      setConfig: n,
      trace: l('TRACE'),
    };
  },
  Sl = Es(
    xs({
      baseUrl: 'http://localhost:4096',
    }),
  );
class R {
  constructor(e) {
    w(this, '_client', Sl);
    e != null && e.client && (this._client = e.client);
  }
}
class Al extends R {
  /**
   * Get events
   */
  event(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get.sse({
      url: '/global/event',
      ...e,
    });
  }
}
class Il extends R {
  /**
   * List all projects
   */
  list(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/project',
      ...e,
    });
  }
  /**
   * Get the current project
   */
  current(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/project/current',
      ...e,
    });
  }
}
class Ml extends R {
  /**
   * List all PTY sessions
   */
  list(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/pty',
      ...e,
    });
  }
  /**
   * Create a new PTY session
   */
  create(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/pty',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
  /**
   * Remove a PTY session
   */
  remove(e) {
    return (e.client ?? this._client).delete({
      url: '/pty/{id}',
      ...e,
    });
  }
  /**
   * Get PTY session info
   */
  get(e) {
    return (e.client ?? this._client).get({
      url: '/pty/{id}',
      ...e,
    });
  }
  /**
   * Update PTY session
   */
  update(e) {
    return (e.client ?? this._client).put({
      url: '/pty/{id}',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Connect to a PTY session
   */
  connect(e) {
    return (e.client ?? this._client).get({
      url: '/pty/{id}/connect',
      ...e,
    });
  }
}
class jl extends R {
  /**
   * Get config info
   */
  get(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/config',
      ...e,
    });
  }
  /**
   * Update config
   */
  update(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).patch({
      url: '/config',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
  /**
   * List all providers
   */
  providers(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/config/providers',
      ...e,
    });
  }
}
class Ol extends R {
  /**
   * List all tool IDs (including built-in and dynamically registered)
   */
  ids(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/experimental/tool/ids',
      ...e,
    });
  }
  /**
   * List tools with JSON schema parameters for a provider/model
   */
  list(e) {
    return (e.client ?? this._client).get({
      url: '/experimental/tool',
      ...e,
    });
  }
}
class Nl extends R {
  /**
   * Dispose the current instance
   */
  dispose(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/instance/dispose',
      ...e,
    });
  }
}
class Pl extends R {
  /**
   * Get the current path
   */
  get(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/path',
      ...e,
    });
  }
}
class Dl extends R {
  /**
   * Get VCS info for the current instance
   */
  get(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/vcs',
      ...e,
    });
  }
}
class Rl extends R {
  /**
   * List all sessions
   */
  list(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/session',
      ...e,
    });
  }
  /**
   * Create a new session
   */
  create(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/session',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
  /**
   * Get session status
   */
  status(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/session/status',
      ...e,
    });
  }
  /**
   * Delete a session and all its data
   */
  delete(e) {
    return (e.client ?? this._client).delete({
      url: '/session/{id}',
      ...e,
    });
  }
  /**
   * Get session
   */
  get(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}',
      ...e,
    });
  }
  /**
   * Update session properties
   */
  update(e) {
    return (e.client ?? this._client).patch({
      url: '/session/{id}',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Get a session's children
   */
  children(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}/children',
      ...e,
    });
  }
  /**
   * Get the todo list for a session
   */
  todo(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}/todo',
      ...e,
    });
  }
  /**
   * Analyze the app and create an AGENTS.md file
   */
  init(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/init',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Fork an existing session at a specific message
   */
  fork(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/fork',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Abort a session
   */
  abort(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/abort',
      ...e,
    });
  }
  /**
   * Unshare the session
   */
  unshare(e) {
    return (e.client ?? this._client).delete({
      url: '/session/{id}/share',
      ...e,
    });
  }
  /**
   * Share a session
   */
  share(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/share',
      ...e,
    });
  }
  /**
   * Get the diff for this session
   */
  diff(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}/diff',
      ...e,
    });
  }
  /**
   * Summarize the session
   */
  summarize(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/summarize',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * List messages for a session
   */
  messages(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}/message',
      ...e,
    });
  }
  /**
   * Create and send a new message to a session
   */
  prompt(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/message',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Get a message from a session
   */
  message(e) {
    return (e.client ?? this._client).get({
      url: '/session/{id}/message/{messageID}',
      ...e,
    });
  }
  /**
   * Create and send a new message to a session, start if needed and return immediately
   */
  promptAsync(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/prompt_async',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Send a new command to a session
   */
  command(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/command',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Run a shell command
   */
  shell(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/shell',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Revert a message
   */
  revert(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/revert',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Restore all reverted messages
   */
  unrevert(e) {
    return (e.client ?? this._client).post({
      url: '/session/{id}/unrevert',
      ...e,
    });
  }
}
class Ll extends R {
  /**
   * List all commands
   */
  list(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/command',
      ...e,
    });
  }
}
class Fl extends R {
  /**
   * Authorize a provider using OAuth
   */
  authorize(e) {
    return (e.client ?? this._client).post({
      url: '/provider/{id}/oauth/authorize',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
  /**
   * Handle OAuth callback for a provider
   */
  callback(e) {
    return (e.client ?? this._client).post({
      url: '/provider/{id}/oauth/callback',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
}
class zl extends R {
  constructor() {
    super(...arguments);
    w(this, 'oauth', new Fl({ client: this._client }));
  }
  /**
   * List all providers
   */
  list(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).get({
      url: '/provider',
      ...r,
    });
  }
  /**
   * Get provider authentication methods
   */
  auth(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).get({
      url: '/provider/auth',
      ...r,
    });
  }
}
class Ul extends R {
  /**
   * Find text in files
   */
  text(e) {
    return (e.client ?? this._client).get({
      url: '/find',
      ...e,
    });
  }
  /**
   * Find files
   */
  files(e) {
    return (e.client ?? this._client).get({
      url: '/find/file',
      ...e,
    });
  }
  /**
   * Find workspace symbols
   */
  symbols(e) {
    return (e.client ?? this._client).get({
      url: '/find/symbol',
      ...e,
    });
  }
}
class ql extends R {
  /**
   * List files and directories
   */
  list(e) {
    return (e.client ?? this._client).get({
      url: '/file',
      ...e,
    });
  }
  /**
   * Read a file
   */
  read(e) {
    return (e.client ?? this._client).get({
      url: '/file/content',
      ...e,
    });
  }
  /**
   * Get file status
   */
  status(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/file/status',
      ...e,
    });
  }
}
class Hl extends R {
  /**
   * Write a log entry to the server logs
   */
  log(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/log',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
  /**
   * List all agents
   */
  agents(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/agent',
      ...e,
    });
  }
}
class Bl extends R {
  /**
   * Get MCP server status
   */
  status(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/mcp',
      ...e,
    });
  }
  /**
   * Add MCP server dynamically
   */
  add(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/mcp',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
}
class Wl extends R {
  /**
   * Get LSP server status
   */
  status(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/lsp',
      ...e,
    });
  }
}
class Vl extends R {
  /**
   * Get formatter status
   */
  status(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/formatter',
      ...e,
    });
  }
}
class Yl extends R {
  /**
   * Get the next TUI request from the queue
   */
  next(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get({
      url: '/tui/control/next',
      ...e,
    });
  }
  /**
   * Submit a response to the TUI request queue
   */
  response(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).post({
      url: '/tui/control/response',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...(e == null ? void 0 : e.headers),
      },
    });
  }
}
class Kl extends R {
  constructor() {
    super(...arguments);
    w(this, 'control', new Yl({ client: this._client }));
  }
  /**
   * Append prompt to the TUI
   */
  appendPrompt(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/append-prompt',
      ...r,
      headers: {
        'Content-Type': 'application/json',
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  /**
   * Open the help dialog
   */
  openHelp(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/open-help',
      ...r,
    });
  }
  /**
   * Open the session dialog
   */
  openSessions(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/open-sessions',
      ...r,
    });
  }
  /**
   * Open the theme dialog
   */
  openThemes(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/open-themes',
      ...r,
    });
  }
  /**
   * Open the model dialog
   */
  openModels(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/open-models',
      ...r,
    });
  }
  /**
   * Submit the prompt
   */
  submitPrompt(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/submit-prompt',
      ...r,
    });
  }
  /**
   * Clear the prompt
   */
  clearPrompt(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/clear-prompt',
      ...r,
    });
  }
  /**
   * Execute a TUI command (e.g. agent_cycle)
   */
  executeCommand(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/execute-command',
      ...r,
      headers: {
        'Content-Type': 'application/json',
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  /**
   * Show a toast notification in the TUI
   */
  showToast(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/show-toast',
      ...r,
      headers: {
        'Content-Type': 'application/json',
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  /**
   * Publish a TUI event
   */
  publish(r) {
    return ((r == null ? void 0 : r.client) ?? this._client).post({
      url: '/tui/publish',
      ...r,
      headers: {
        'Content-Type': 'application/json',
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
}
class Jl extends R {
  /**
   * Set authentication credentials
   */
  set(e) {
    return (e.client ?? this._client).put({
      url: '/auth/{id}',
      ...e,
      headers: {
        'Content-Type': 'application/json',
        ...e.headers,
      },
    });
  }
}
class Gl extends R {
  /**
   * Get events
   */
  subscribe(e) {
    return ((e == null ? void 0 : e.client) ?? this._client).get.sse({
      url: '/event',
      ...e,
    });
  }
}
class Ql extends R {
  constructor() {
    super(...arguments);
    w(this, 'global', new Al({ client: this._client }));
    w(this, 'project', new Il({ client: this._client }));
    w(this, 'pty', new Ml({ client: this._client }));
    w(this, 'config', new jl({ client: this._client }));
    w(this, 'tool', new Ol({ client: this._client }));
    w(this, 'instance', new Nl({ client: this._client }));
    w(this, 'path', new Pl({ client: this._client }));
    w(this, 'vcs', new Dl({ client: this._client }));
    w(this, 'session', new Rl({ client: this._client }));
    w(this, 'command', new Ll({ client: this._client }));
    w(this, 'provider', new zl({ client: this._client }));
    w(this, 'find', new Ul({ client: this._client }));
    w(this, 'file', new ql({ client: this._client }));
    w(this, 'app', new Hl({ client: this._client }));
    w(this, 'mcp', new Bl({ client: this._client }));
    w(this, 'lsp', new Wl({ client: this._client }));
    w(this, 'formatter', new Vl({ client: this._client }));
    w(this, 'tui', new Kl({ client: this._client }));
    w(this, 'auth', new Jl({ client: this._client }));
    w(this, 'event', new Gl({ client: this._client }));
  }
  /**
   * Respond to a permission request
   */
  postSessionIdPermissionsPermissionId(r) {
    return (r.client ?? this._client).post({
      url: '/session/{id}/permissions/{permissionID}',
      ...r,
      headers: {
        'Content-Type': 'application/json',
        ...r.headers,
      },
    });
  }
}
function Xl(t) {
  (t != null && t.fetch) ||
    (t = {
      ...t,
      fetch: r => ((r.timeout = !1), fetch(r)),
    }),
    t != null &&
      t.directory &&
      (t.headers = {
        ...t.headers,
        'x-opencode-directory': t.directory,
      });
  const e = Es(t);
  return new Ql({ client: e });
}
class na {
  constructor(e = {}) {
    (this.sessionId = null),
      (this.client = null),
      (this.abortController = null),
      (this.eventStream = null),
      (this.currentCallbacks = null),
      (this.currentAssistantMessageId = null),
      (this.currentUserMessageId = null),
      (this.sessionId = e.sessionId || null),
      (this.baseUrl = e.baseUrl || 'http://localhost:4096'),
      (this.model = e.model || {
        providerID: 'anthropic',
        modelID: 'claude-haiku-4-5',
      }),
      (this.createSession = e.createSession ?? !0);
  }
  async ensureClient() {
    return (
      this.client ||
        (this.client = Xl({
          baseUrl: this.baseUrl,
        })),
      this.client
    );
  }
  /**
   * Initialize the OpenCode client and set up event listener
   * This can be called proactively to set up the connection before sending messages
   */
  async init() {
    const e = await this.ensureClient();
    if (!this.eventStream) {
      const r = await e.event.subscribe();
      (this.eventStream = r.stream), this.startEventListener();
    }
  }
  /**
   * Start the background event listener
   */
  async startEventListener() {
    if (this.eventStream)
      try {
        for await (const e of this.eventStream) this.handleEvent(e);
      } catch (e) {
        console.error('Event stream error:', e), (this.eventStream = null);
      }
  }
  /**
   * Handle incoming events from the stream
   */
  handleEvent(e) {
    var r, n, s, i, a, l, u, f, o, d;
    if (this.currentCallbacks && !((r = this.abortController) != null && r.signal.aborted)) {
      if ((console.log('Received event:', e), e.type === 'message.updated')) {
        const v = (s = (n = e.properties) == null ? void 0 : n.info) == null ? void 0 : s.id,
          p = (a = (i = e.properties) == null ? void 0 : i.info) == null ? void 0 : a.role;
        p === 'user'
          ? ((this.currentUserMessageId = v), console.log('Tracking user message ID:', v))
          : p === 'assistant' &&
            ((this.currentAssistantMessageId = v),
            console.log('Tracking assistant message ID:', v)),
          ((u = (l = e.properties) == null ? void 0 : l.info) == null ? void 0 : u.finish) ===
            'stop' &&
            p === 'assistant' &&
            (console.log('Assistant message finished:', v),
            this.currentCallbacks.onComplete(),
            this.clearCurrentMessage());
      } else if (e.type === 'message.part.updated') {
        const v = (o = (f = e.properties) == null ? void 0 : f.part) == null ? void 0 : o.messageID;
        if (v === this.currentAssistantMessageId && v !== this.currentUserMessageId) {
          console.log('Processing part update for assistant message:', v);
          const p = (d = e.properties) == null ? void 0 : d.part;
          (p == null ? void 0 : p.type) === 'text' && p.text
            ? this.currentCallbacks.onChunk(p.text)
            : (p == null ? void 0 : p.type) === 'thinking' &&
              p.thinking &&
              this.currentCallbacks.onThinking &&
              this.currentCallbacks.onThinking(p.thinking);
        }
      }
    }
  }
  /**
   * Clear current message tracking
   */
  clearCurrentMessage() {
    (this.currentCallbacks = null),
      (this.currentAssistantMessageId = null),
      (this.currentUserMessageId = null);
  }
  async ensureSession() {
    var r;
    if ((console.log('Ensuring session...'), this.sessionId)) return this.sessionId;
    if (!this.createSession) throw new Error('No session ID provided and createSession is false');
    const e = await this.ensureClient();
    try {
      const n = await e.session.create({
        body: {
          title: `Chat ${/* @__PURE__ */ new Date().toLocaleString()}`,
        },
      });
      if ((console.log('Session created:', n), !((r = n.data) != null && r.id)))
        throw new Error('Failed to create session: no session ID returned');
      const s = n.data.id;
      return (this.sessionId = s), s;
    } catch (n) {
      throw new Error(
        `Failed to create session: ${n instanceof Error ? n.message : 'Unknown error'}`,
      );
    }
  }
  async sendMessage(e, r) {
    this.abortController = new AbortController();
    try {
      const n = await this.ensureClient(),
        s = await this.ensureSession();
      this.eventStream || (await this.init()), (this.currentCallbacks = r);
      const i = [
        {
          type: 'text',
          text: e.message,
        },
      ];
      console.log('Sending prompt to session:', s, i),
        await n.session.prompt({
          path: { id: s },
          body: {
            model: this.model,
            parts: i,
          },
        }),
        console.log('Prompt sent successfully');
    } catch (n) {
      this.abortController.signal.aborted ||
        r.onError(n instanceof Error ? n : new Error('Unknown error')),
        this.clearCurrentMessage();
    } finally {
      this.abortController = null;
    }
  }
  cancel() {
    this.abortController && this.abortController.abort(), this.clearCurrentMessage();
  }
  /**
   * Get the current session ID
   */
  getSessionId() {
    return this.sessionId;
  }
  /**
   * Set a specific session ID to use
   */
  setSessionId(e) {
    this.sessionId = e;
  }
  /**
   * Clear the current session (will create a new one on next message)
   */
  clearSession() {
    this.sessionId = null;
  }
}
function sa(t, e = 'audako-chat') {
  return (
    t && (window.__audakoChatConfig = t), customElements.get(e) || customElements.define(e, ms), e
  );
}
function ia(t, e) {
  const r = typeof t == 'string' ? document.querySelector(t) : t;
  if (!r) throw new Error('Chat widget element not found');
  'setConfig' in r && typeof r.setConfig == 'function' && r.setConfig(e);
}
export {
  ms as ChatWidget,
  ta as MockAdapter,
  ra as OpenAIAdapter,
  na as OpenCodeAdapter,
  ia as configureChatWidget,
  sa as registerChatWidget,
};
