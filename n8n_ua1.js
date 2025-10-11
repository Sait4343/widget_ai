var Uy = Object.defineProperty;
var Ky = (e, t, n) => t in e ? Uy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ts = (e, t, n) => Ky(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.60.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const tt = {}, co = [], Dt = () => {
}, Wy = () => !1, Ai = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zu = (e) => e.startsWith("onUpdate:"), xt = Object.assign, qu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Gy = Object.prototype.hasOwnProperty, Xe = (e, t) => Gy.call(e, t), Ie = Array.isArray, uo = (e) => Ti(e) === "[object Map]", e1 = (e) => Ti(e) === "[object Set]", Ee = (e) => typeof e == "function", Ke = (e) => typeof e == "string", or = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", t1 = (e) => (Fe(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), n1 = Object.prototype.toString, Ti = (e) => n1.call(e), Zs = (e) => Ti(e).slice(8, -1), r1 = (e) => Ti(e) === "[object Object]", Hu = (e) => Ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ Fu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Zy = /-(\w)/g, dn = Mi(
  (e) => e.replace(Zy, (t, n) => n ? n.toUpperCase() : "")
), Xy = /\B([A-Z])/g, xr = Mi(
  (e) => e.replace(Xy, "-$1").toLowerCase()
), $i = Mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), ga = Mi(
  (e) => e ? `on${$i(e)}` : ""
), kr = (e, t) => !Object.is(e, t), Xs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, o1 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Yy = (e) => {
  const t = Ke(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let id;
const Li = () => id || (id = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function st(e) {
  if (Ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ke(r) ? t4(r) : st(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (Ke(e) || Fe(e))
    return e;
}
const Jy = /;(?![^(]*\))/g, Qy = /:([^]+)/, e4 = /\/\*[^]*?\*\//g;
function t4(e) {
  const t = {};
  return e.replace(e4, "").split(Jy).forEach((n) => {
    if (n) {
      const r = n.split(Qy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (Ke(e))
    t = e;
  else if (Ie(e))
    for (let n = 0; n < e.length; n++) {
      const r = Q(e[n]);
      r && (t += r + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function li(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ke(t) && (e.class = Q(t)), n && (e.style = st(n)), e;
}
const n4 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", r4 = /* @__PURE__ */ Fu(n4);
function s1(e) {
  return !!e || e === "";
}
const i1 = (e) => !!(e && e.__v_isRef === !0), Je = (e) => Ke(e) ? e : e == null ? "" : Ie(e) || Fe(e) && (e.toString === n1 || !Ee(e.toString)) ? i1(e) ? Je(e.value) : JSON.stringify(e, a1, 2) : String(e), a1 = (e, t) => i1(t) ? a1(e, t.value) : uo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[ma(r, o) + " =>"] = s, n),
    {}
  )
} : e1(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ma(n))
} : or(t) ? ma(t) : Fe(t) && !Ie(t) && !r1(t) ? String(t) : t, ma = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    or(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ht;
class o4 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ht, !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ht;
      try {
        return Ht = this, t();
      } finally {
        Ht = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ht = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ju() {
  return Ht;
}
function l1(e, t = !1) {
  Ht && Ht.cleanups.push(e);
}
let ct;
const va = /* @__PURE__ */ new WeakSet();
class c1 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ht && Ht.active && Ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, va.has(this) && (va.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || f1(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ad(this), d1(this);
    const t = ct, n = kn;
    ct = this, kn = !0;
    try {
      return this.fn();
    } finally {
      p1(this), ct = t, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ku(t);
      this.deps = this.depsTail = void 0, ad(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tu(this) && this.run();
  }
  get dirty() {
    return tu(this);
  }
}
let u1 = 0, jo, Vo;
function f1(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vo, Vo = e;
    return;
  }
  e.next = jo, jo = e;
}
function Vu() {
  u1++;
}
function Uu() {
  if (--u1 > 0)
    return;
  if (Vo) {
    let t = Vo;
    for (Vo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jo; ) {
    let t = jo;
    for (jo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function d1(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function p1(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ku(r), s4(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function tu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (h1(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function h1(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo))
    return;
  e.globalVersion = Qo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !tu(e)) {
    e.flags &= -3;
    return;
  }
  const n = ct, r = kn;
  ct = e, kn = !0;
  try {
    d1(e);
    const s = e.fn(e._value);
    (t.version === 0 || kr(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ct = n, kn = r, p1(e), e.flags &= -3;
  }
}
function Ku(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ku(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function s4(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kn = !0;
const g1 = [];
function Er() {
  g1.push(kn), kn = !1;
}
function Sr() {
  const e = g1.pop();
  kn = e === void 0 ? !0 : e;
}
function ad(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ct;
    ct = void 0;
    try {
      t();
    } finally {
      ct = n;
    }
  }
}
let Qo = 0;
class i4 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!ct || !kn || ct === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ct)
      n = this.activeLink = new i4(ct, this), ct.deps ? (n.prevDep = ct.depsTail, ct.depsTail.nextDep = n, ct.depsTail = n) : ct.deps = ct.depsTail = n, m1(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ct.depsTail, n.nextDep = void 0, ct.depsTail.nextDep = n, ct.depsTail = n, ct.deps === n && (ct.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qo++, this.notify(t);
  }
  notify(t) {
    Vu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Uu();
    }
  }
}
function m1(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        m1(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ci = /* @__PURE__ */ new WeakMap(), jr = Symbol(
  ""
), nu = Symbol(
  ""
), es = Symbol(
  ""
);
function It(e, t, n) {
  if (kn && ct) {
    let r = ci.get(e);
    r || ci.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Wu()), s.map = r, s.key = n), s.track();
  }
}
function Kn(e, t, n, r, s, o) {
  const i = ci.get(e);
  if (!i) {
    Qo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Vu(), t === "clear")
    i.forEach(a);
  else {
    const l = Ie(e), u = l && Hu(n);
    if (l && n === "length") {
      const f = Number(r);
      i.forEach((c, p) => {
        (p === "length" || p === es || !or(p) && p >= f) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(es)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(jr)), uo(e) && a(i.get(nu)));
          break;
        case "delete":
          l || (a(i.get(jr)), uo(e) && a(i.get(nu)));
          break;
        case "set":
          uo(e) && a(i.get(jr));
          break;
      }
  }
  Uu();
}
function a4(e, t) {
  const n = ci.get(e);
  return n && n.get(t);
}
function to(e) {
  const t = je(e);
  return t === e ? t : (It(t, "iterate", es), cn(e) ? t : t.map(Ot));
}
function Ii(e) {
  return It(e = je(e), "iterate", es), e;
}
const l4 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ba(this, Symbol.iterator, Ot);
  },
  concat(...e) {
    return to(this).concat(
      ...e.map((t) => Ie(t) ? to(t) : t)
    );
  },
  entries() {
    return ba(this, "entries", (e) => (e[1] = Ot(e[1]), e));
  },
  every(e, t) {
    return zn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zn(this, "filter", e, t, (n) => n.map(Ot), arguments);
  },
  find(e, t) {
    return zn(this, "find", e, t, Ot, arguments);
  },
  findIndex(e, t) {
    return zn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zn(this, "findLast", e, t, Ot, arguments);
  },
  findLastIndex(e, t) {
    return zn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _a(this, "includes", e);
  },
  indexOf(...e) {
    return _a(this, "indexOf", e);
  },
  join(e) {
    return to(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _a(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $o(this, "pop");
  },
  push(...e) {
    return $o(this, "push", e);
  },
  reduce(e, ...t) {
    return ld(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ld(this, "reduceRight", e, t);
  },
  shift() {
    return $o(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $o(this, "splice", e);
  },
  toReversed() {
    return to(this).toReversed();
  },
  toSorted(e) {
    return to(this).toSorted(e);
  },
  toSpliced(...e) {
    return to(this).toSpliced(...e);
  },
  unshift(...e) {
    return $o(this, "unshift", e);
  },
  values() {
    return ba(this, "values", Ot);
  }
};
function ba(e, t, n) {
  const r = Ii(e), s = r[t]();
  return r !== e && !cn(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const c4 = Array.prototype;
function zn(e, t, n, r, s, o) {
  const i = Ii(e), a = i !== e && !cn(e), l = i[t];
  if (l !== c4[t]) {
    const c = l.apply(e, o);
    return a ? Ot(c) : c;
  }
  let u = n;
  i !== e && (a ? u = function(c, p) {
    return n.call(this, Ot(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = l.call(i, u, r);
  return a && s ? s(f) : f;
}
function ld(e, t, n, r) {
  const s = Ii(e);
  let o = n;
  return s !== e && (cn(e) ? n.length > 3 && (o = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : o = function(i, a, l) {
    return n.call(this, i, Ot(a), l, e);
  }), s[t](o, ...r);
}
function _a(e, t, n) {
  const r = je(e);
  It(r, "iterate", es);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Xu(n[0]) ? (n[0] = je(n[0]), r[t](...n)) : s;
}
function $o(e, t, n = []) {
  Er(), Vu();
  const r = je(e)[t].apply(e, n);
  return Uu(), Sr(), r;
}
const u4 = /* @__PURE__ */ Fu("__proto__,__v_isRef,__isVue"), v1 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(or)
);
function f4(e) {
  or(e) || (e = String(e));
  const t = je(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class b1 {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? w4 : k1 : o ? w1 : y1).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Ie(t);
    if (!s) {
      let l;
      if (i && (l = l4[n]))
        return l;
      if (n === "hasOwnProperty")
        return f4;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      bt(t) ? t : r
    );
    return (or(n) ? v1.has(n) : u4(n)) || (s || It(t, "get", n), o) ? a : bt(a) ? i && Hu(n) ? a : a.value : Fe(a) ? s ? Oi(a) : Sn(a) : a;
  }
}
class _1 extends b1 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Gr(o);
      if (!cn(r) && !Gr(r) && (o = je(o), r = je(r)), !Ie(t) && bt(o) && !bt(r))
        return l ? !1 : (o.value = r, !0);
    }
    const i = Ie(t) && Hu(n) ? Number(n) < t.length : Xe(t, n), a = Reflect.set(
      t,
      n,
      r,
      bt(t) ? t : s
    );
    return t === je(s) && (i ? kr(r, o) && Kn(t, "set", n, r) : Kn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Xe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Kn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!or(n) || !v1.has(n)) && It(t, "has", n), r;
  }
  ownKeys(t) {
    return It(
      t,
      "iterate",
      Ie(t) ? "length" : jr
    ), Reflect.ownKeys(t);
  }
}
class d4 extends b1 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const p4 = /* @__PURE__ */ new _1(), h4 = /* @__PURE__ */ new d4(), g4 = /* @__PURE__ */ new _1(!0);
const ru = (e) => e, Ms = (e) => Reflect.getPrototypeOf(e);
function m4(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = je(s), i = uo(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), f = n ? ru : t ? ou : Ot;
    return !t && It(
      o,
      "iterate",
      l ? nu : jr
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: a ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function v4(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      e || (kr(s, a) && It(i, "get", s), It(i, "get", a));
      const { has: l } = Ms(i), u = t ? ru : e ? ou : Ot;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && It(je(s), "iterate", jr), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      return e || (kr(s, a) && It(i, "has", s), It(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = je(a), u = t ? ru : e ? ou : Ot;
      return !e && It(l, "iterate", jr), a.forEach((f, c) => s.call(o, u(f), u(c), i));
    }
  };
  return xt(
    n,
    e ? {
      add: $s("add"),
      set: $s("set"),
      delete: $s("delete"),
      clear: $s("clear")
    } : {
      add(s) {
        !t && !cn(s) && !Gr(s) && (s = je(s));
        const o = je(this);
        return Ms(o).has.call(o, s) || (o.add(s), Kn(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !cn(o) && !Gr(o) && (o = je(o));
        const i = je(this), { has: a, get: l } = Ms(i);
        let u = a.call(i, s);
        u || (s = je(s), u = a.call(i, s));
        const f = l.call(i, s);
        return i.set(s, o), u ? kr(o, f) && Kn(i, "set", s, o) : Kn(i, "add", s, o), this;
      },
      delete(s) {
        const o = je(this), { has: i, get: a } = Ms(o);
        let l = i.call(o, s);
        l || (s = je(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && Kn(o, "delete", s, void 0), u;
      },
      clear() {
        const s = je(this), o = s.size !== 0, i = s.clear();
        return o && Kn(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = m4(s, e, t);
  }), n;
}
function Gu(e, t) {
  const n = v4(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Xe(n, s) && s in r ? n : r,
    s,
    o
  );
}
const b4 = {
  get: /* @__PURE__ */ Gu(!1, !1)
}, _4 = {
  get: /* @__PURE__ */ Gu(!1, !0)
}, y4 = {
  get: /* @__PURE__ */ Gu(!0, !1)
};
const y1 = /* @__PURE__ */ new WeakMap(), w1 = /* @__PURE__ */ new WeakMap(), k1 = /* @__PURE__ */ new WeakMap(), w4 = /* @__PURE__ */ new WeakMap();
function k4(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function C4(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : k4(Zs(e));
}
function Sn(e) {
  return Gr(e) ? e : Zu(
    e,
    !1,
    p4,
    b4,
    y1
  );
}
function x4(e) {
  return Zu(
    e,
    !1,
    g4,
    _4,
    w1
  );
}
function Oi(e) {
  return Zu(
    e,
    !0,
    h4,
    y4,
    k1
  );
}
function Zu(e, t, n, r, s) {
  if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = C4(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function fo(e) {
  return Gr(e) ? fo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gr(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function Xu(e) {
  return e ? !!e.__v_raw : !1;
}
function je(e) {
  const t = e && e.__v_raw;
  return t ? je(t) : e;
}
function E4(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && o1(e, "__v_skip", !0), e;
}
const Ot = (e) => Fe(e) ? Sn(e) : e, ou = (e) => Fe(e) ? Oi(e) : e;
function bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function W(e) {
  return C1(e, !1);
}
function Zn(e) {
  return C1(e, !0);
}
function C1(e, t) {
  return bt(e) ? e : new S4(e, t);
}
class S4 {
  constructor(t, n) {
    this.dep = new Wu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : je(t), this._value = n ? t : Ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || cn(t) || Gr(t);
    t = r ? t : je(t), kr(t, n) && (this._rawValue = t, this._value = r ? t : Ot(t), this.dep.trigger());
  }
}
function Lo(e) {
  e.dep && e.dep.trigger();
}
function b(e) {
  return bt(e) ? e.value : e;
}
const A4 = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return bt(s) && !bt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function x1(e) {
  return fo(e) ? e : new Proxy(e, A4);
}
function Ri(e) {
  const t = Ie(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = E1(e, n);
  return t;
}
class T4 {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return a4(je(this._object), this._key);
  }
}
class M4 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function yn(e, t, n) {
  return bt(e) ? e : Ee(e) ? new M4(e) : Fe(e) && arguments.length > 1 ? E1(e, t, n) : W(e);
}
function E1(e, t, n) {
  const r = e[t];
  return bt(r) ? r : new T4(e, t, n);
}
class $4 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ct !== this)
      return f1(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return h1(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function L4(e, t, n = !1) {
  let r, s;
  return Ee(e) ? r = e : (r = e.get, s = e.set), new $4(r, s, n);
}
const Ls = {}, ui = /* @__PURE__ */ new WeakMap();
let zr;
function I4(e, t = !1, n = zr) {
  if (n) {
    let r = ui.get(n);
    r || ui.set(n, r = []), r.push(e);
  }
}
function O4(e, t, n = tt) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (_) => s ? _ : cn(_) || s === !1 || s === 0 ? Wn(_, 1) : Wn(_);
  let f, c, p, d, v = !1, g = !1;
  if (bt(e) ? (c = () => e.value, v = cn(e)) : fo(e) ? (c = () => u(e), v = !0) : Ie(e) ? (g = !0, v = e.some((_) => fo(_) || cn(_)), c = () => e.map((_) => {
    if (bt(_))
      return _.value;
    if (fo(_))
      return u(_);
    if (Ee(_))
      return l ? l(_, 2) : _();
  })) : Ee(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (p) {
      Er();
      try {
        p();
      } finally {
        Sr();
      }
    }
    const _ = zr;
    zr = f;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      zr = _;
    }
  } : c = Dt, t && s) {
    const _ = c, E = s === !0 ? 1 / 0 : s;
    c = () => Wn(_(), E);
  }
  const C = ju(), h = () => {
    f.stop(), C && C.active && qu(C.effects, f);
  };
  if (o && t) {
    const _ = t;
    t = (...E) => {
      _(...E), h();
    };
  }
  let k = g ? new Array(e.length).fill(Ls) : Ls;
  const w = (_) => {
    if (!(!(f.flags & 1) || !f.dirty && !_))
      if (t) {
        const E = f.run();
        if (s || v || (g ? E.some((x, M) => kr(x, k[M])) : kr(E, k))) {
          p && p();
          const x = zr;
          zr = f;
          try {
            const M = [
              E,
              // pass undefined as the old value when it's changed for the first time
              k === Ls ? void 0 : g && k[0] === Ls ? [] : k,
              d
            ];
            l ? l(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            ), k = E;
          } finally {
            zr = x;
          }
        }
      } else
        f.run();
  };
  return a && a(w), f = new c1(c), f.scheduler = i ? () => i(w, !1) : w, d = (_) => I4(_, !1, f), p = f.onStop = () => {
    const _ = ui.get(f);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const E of _) E();
      ui.delete(f);
    }
  }, t ? r ? w(!0) : k = f.run() : i ? i(w.bind(null, !0), !0) : f.run(), h.pause = f.pause.bind(f), h.resume = f.resume.bind(f), h.stop = h, h;
}
function Wn(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, bt(e))
    Wn(e.value, t, n);
  else if (Ie(e))
    for (let r = 0; r < e.length; r++)
      Wn(e[r], t, n);
  else if (e1(e) || uo(e))
    e.forEach((r) => {
      Wn(r, t, n);
    });
  else if (r1(e)) {
    for (const r in e)
      Wn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Wn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ms(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pi(s, t, n);
  }
}
function xn(e, t, n, r) {
  if (Ee(e)) {
    const s = ms(e, t, n, r);
    return s && t1(s) && s.catch((o) => {
      Pi(o, t, n);
    }), s;
  }
  if (Ie(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(xn(e[o], t, n, r));
    return s;
  }
}
function Pi(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || tt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Er(), ms(o, null, 10, [
        e,
        l,
        u
      ]), Sr();
      return;
    }
  }
  R4(e, n, s, r, i);
}
function R4(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const jt = [];
let Rn = -1;
const po = [];
let mr = null, oo = 0;
const S1 = /* @__PURE__ */ Promise.resolve();
let fi = null;
function Ue(e) {
  const t = fi || S1;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function P4(e) {
  let t = Rn + 1, n = jt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = jt[r], o = ts(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Yu(e) {
  if (!(e.flags & 1)) {
    const t = ts(e), n = jt[jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ts(n) ? jt.push(e) : jt.splice(P4(t), 0, e), e.flags |= 1, A1();
  }
}
function A1() {
  fi || (fi = S1.then(M1));
}
function D4(e) {
  Ie(e) ? po.push(...e) : mr && e.id === -1 ? mr.splice(oo + 1, 0, e) : e.flags & 1 || (po.push(e), e.flags |= 1), A1();
}
function cd(e, t, n = Rn + 1) {
  for (; n < jt.length; n++) {
    const r = jt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      jt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function T1(e) {
  if (po.length) {
    const t = [...new Set(po)].sort(
      (n, r) => ts(n) - ts(r)
    );
    if (po.length = 0, mr) {
      mr.push(...t);
      return;
    }
    for (mr = t, oo = 0; oo < mr.length; oo++) {
      const n = mr[oo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mr = null, oo = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function M1(e) {
  try {
    for (Rn = 0; Rn < jt.length; Rn++) {
      const t = jt[Rn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ms(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rn < jt.length; Rn++) {
      const t = jt[Rn];
      t && (t.flags &= -2);
    }
    Rn = -1, jt.length = 0, T1(), fi = null, (jt.length || po.length) && M1();
  }
}
let Ct = null, $1 = null;
function di(e) {
  const t = Ct;
  return Ct = e, $1 = e && e.type.__scopeId || null, t;
}
function he(e, t = Ct, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Cd(-1);
    const o = di(t);
    let i;
    try {
      i = e(...s);
    } finally {
      di(o), r._d && Cd(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ut(e, t) {
  if (Ct === null)
    return e;
  const n = qi(Ct), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = tt] = t[s];
    o && (Ee(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Wn(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Ir(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Er(), xn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Sr());
  }
}
const L1 = Symbol("_vte"), I1 = (e) => e.__isTeleport, Uo = (e) => e && (e.disabled || e.disabled === ""), ud = (e) => e && (e.defer || e.defer === ""), fd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, dd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, su = (e, t) => {
  const n = e && e.to;
  return Ke(n) ? t ? t(n) : null : n;
}, O1 = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: p,
      o: { insert: d, querySelector: v, createText: g, createComment: C }
    } = u, h = Uo(t.props);
    let { shapeFlag: k, children: w, dynamicChildren: _ } = t;
    if (e == null) {
      const E = t.el = g(""), x = t.anchor = g("");
      d(E, n, r), d(x, n, r);
      const M = (O, D) => {
        k & 16 && (s && s.isCE && (s.ce._teleportTarget = O), f(
          w,
          O,
          D,
          s,
          o,
          i,
          a,
          l
        ));
      }, $ = () => {
        const O = t.target = su(t.props, v), D = R1(O, t, g, d);
        O && (i !== "svg" && fd(O) ? i = "svg" : i !== "mathml" && dd(O) && (i = "mathml"), h || (M(O, D), Ys(t, !1)));
      };
      h && (M(n, x), Ys(t, !0)), ud(t.props) ? zt(() => {
        $(), t.el.__isMounted = !0;
      }, o) : $();
    } else {
      if (ud(t.props) && !e.el.__isMounted) {
        zt(() => {
          O1.process(
            e,
            t,
            n,
            r,
            s,
            o,
            i,
            a,
            l,
            u
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const E = t.anchor = e.anchor, x = t.target = e.target, M = t.targetAnchor = e.targetAnchor, $ = Uo(e.props), O = $ ? n : x, D = $ ? E : M;
      if (i === "svg" || fd(x) ? i = "svg" : (i === "mathml" || dd(x)) && (i = "mathml"), _ ? (p(
        e.dynamicChildren,
        _,
        O,
        s,
        o,
        i,
        a
      ), tf(e, t, !0)) : l || c(
        e,
        t,
        O,
        D,
        s,
        o,
        i,
        a,
        !1
      ), h)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Is(
          t,
          n,
          E,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = t.target = su(
          t.props,
          v
        );
        N && Is(
          t,
          N,
          null,
          u,
          0
        );
      } else $ && Is(
        t,
        x,
        M,
        u,
        1
      );
      Ys(t, h);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, o) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: f,
      target: c,
      props: p
    } = e;
    if (c && (s(u), s(f)), o && s(l), i & 16) {
      const d = o || !Uo(p);
      for (let v = 0; v < a.length; v++) {
        const g = a[v];
        r(
          g,
          t,
          n,
          d,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: Is,
  hydrate: B4
};
function Is(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: f } = e, c = o === 2;
  if (c && r(i, t, n), (!c || Uo(f)) && l & 16)
    for (let p = 0; p < u.length; p++)
      s(
        u[p],
        t,
        n,
        2
      );
  c && r(a, t, n);
}
function B4(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: f }
}, c) {
  const p = t.target = su(
    t.props,
    l
  );
  if (p) {
    const d = Uo(t.props), v = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (d)
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          r,
          s,
          o
        ), t.targetStart = v, t.targetAnchor = v && i(v);
      else {
        t.anchor = i(e);
        let g = v;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || R1(p, t, f, u), c(
          v && i(v),
          t,
          p,
          n,
          r,
          s,
          o
        );
      }
    Ys(t, d);
  }
  return t.anchor && i(t.anchor);
}
const N4 = O1;
function Ys(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function R1(e, t, n, r) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[L1] = o, e && (r(s, e), r(o, e)), o;
}
const vr = Symbol("_leaveCb"), Os = Symbol("_enterCb");
function F4() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return it(() => {
    e.isMounted = !0;
  }), Yt(() => {
    e.isUnmounting = !0;
  }), e;
}
const ln = [Function, Array], P1 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ln,
  onEnter: ln,
  onAfterEnter: ln,
  onEnterCancelled: ln,
  // leave
  onBeforeLeave: ln,
  onLeave: ln,
  onAfterLeave: ln,
  onLeaveCancelled: ln,
  // appear
  onBeforeAppear: ln,
  onAppear: ln,
  onAfterAppear: ln,
  onAppearCancelled: ln
}, D1 = (e) => {
  const t = e.subTree;
  return t.component ? D1(t.component) : t;
}, z4 = {
  name: "BaseTransition",
  props: P1,
  setup(e, { slots: t }) {
    const n = _t(), r = F4();
    return () => {
      const s = t.default && F1(t.default(), !0);
      if (!s || !s.length)
        return;
      const o = B1(s), i = je(e), { mode: a } = i;
      if (r.isLeaving)
        return ya(o);
      const l = pd(o);
      if (!l)
        return ya(o);
      let u = iu(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      l.type !== Rt && ns(l, u);
      let f = n.subTree && pd(n.subTree);
      if (f && f.type !== Rt && !qr(l, f) && D1(n).type !== Rt) {
        let c = iu(
          f,
          i,
          r,
          n
        );
        if (ns(f, c), a === "out-in" && l.type !== Rt)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, ya(o);
        a === "in-out" && l.type !== Rt ? c.delayLeave = (p, d, v) => {
          const g = N1(
            r,
            f
          );
          g[String(f.key)] = f, p[vr] = () => {
            d(), p[vr] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            v(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return o;
    };
  }
};
function B1(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Rt) {
        t = n;
        break;
      }
  }
  return t;
}
const q4 = z4;
function N1(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function iu(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: d,
    onAfterLeave: v,
    onLeaveCancelled: g,
    onBeforeAppear: C,
    onAppear: h,
    onAfterAppear: k,
    onAppearCancelled: w
  } = t, _ = String(e.key), E = N1(n, e), x = (O, D) => {
    O && xn(
      O,
      r,
      9,
      D
    );
  }, M = (O, D) => {
    const N = D[1];
    x(O, D), Ie(O) ? O.every((B) => B.length <= 1) && N() : O.length <= 1 && N();
  }, $ = {
    mode: i,
    persisted: a,
    beforeEnter(O) {
      let D = l;
      if (!n.isMounted)
        if (o)
          D = C || l;
        else
          return;
      O[vr] && O[vr](
        !0
        /* cancelled */
      );
      const N = E[_];
      N && qr(e, N) && N.el[vr] && N.el[vr](), x(D, [O]);
    },
    enter(O) {
      let D = u, N = f, B = c;
      if (!n.isMounted)
        if (o)
          D = h || u, N = k || f, B = w || c;
        else
          return;
      let oe = !1;
      const z = O[Os] = (ie) => {
        oe || (oe = !0, ie ? x(B, [O]) : x(N, [O]), $.delayedLeave && $.delayedLeave(), O[Os] = void 0);
      };
      D ? M(D, [O, z]) : z();
    },
    leave(O, D) {
      const N = String(e.key);
      if (O[Os] && O[Os](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      x(p, [O]);
      let B = !1;
      const oe = O[vr] = (z) => {
        B || (B = !0, D(), z ? x(g, [O]) : x(v, [O]), O[vr] = void 0, E[N] === e && delete E[N]);
      };
      E[N] = e, d ? M(d, [O, oe]) : oe();
    },
    clone(O) {
      const D = iu(
        O,
        t,
        n,
        r,
        s
      );
      return s && s(D), D;
    }
  };
  return $;
}
function ya(e) {
  if (Di(e))
    return e = Jn(e), e.children = null, e;
}
function pd(e) {
  if (!Di(e))
    return I1(e.type) && e.children ? B1(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ee(n.default))
      return n.default();
  }
}
function ns(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ns(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function F1(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === et ? (i.patchFlag & 128 && s++, r = r.concat(
      F1(i.children, t, a)
    )) : (t || i.type !== Rt) && r.push(a != null ? Jn(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  return Ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xt({ name: e.name }, t, { setup: e })
  ) : e;
}
function z1(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pi(e, t, n, r, s = !1) {
  if (Ie(e)) {
    e.forEach(
      (v, g) => pi(
        v,
        t && (Ie(t) ? t[g] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (ho(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && pi(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? qi(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, f = a.refs === tt ? a.refs = {} : a.refs, c = a.setupState, p = je(c), d = c === tt ? () => !1 : (v) => Xe(p, v);
  if (u != null && u !== l && (Ke(u) ? (f[u] = null, d(u) && (c[u] = null)) : bt(u) && (u.value = null)), Ee(l))
    ms(l, a, 12, [i, f]);
  else {
    const v = Ke(l), g = bt(l);
    if (v || g) {
      const C = () => {
        if (e.f) {
          const h = v ? d(l) ? c[l] : f[l] : l.value;
          s ? Ie(h) && qu(h, o) : Ie(h) ? h.includes(o) || h.push(o) : v ? (f[l] = [o], d(l) && (c[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value));
        } else v ? (f[l] = i, d(l) && (c[l] = i)) : g && (l.value = i, e.k && (f[e.k] = i));
      };
      i ? (C.id = -1, zt(C, n)) : C();
    }
  }
}
Li().requestIdleCallback;
Li().cancelIdleCallback;
const ho = (e) => !!e.type.__asyncLoader, Di = (e) => e.type.__isKeepAlive;
function H4(e, t) {
  H1(e, "a", t);
}
function q1(e, t) {
  H1(e, "da", t);
}
function H1(e, t, n = Tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Bi(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Di(s.parent.vnode) && j4(r, t, n, s), s = s.parent;
  }
}
function j4(e, t, n, r) {
  const s = Bi(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ni(() => {
    qu(r[t], s);
  }, n);
}
function Bi(e, t, n = Tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Er();
      const a = vs(n), l = xn(t, n, e, i);
      return a(), Sr(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const sr = (e) => (t, n = Tt) => {
  (!ss || e === "sp") && Bi(e, (...r) => t(...r), n);
}, j1 = sr("bm"), it = sr("m"), V4 = sr(
  "bu"
), V1 = sr("u"), Yt = sr(
  "bum"
), Ni = sr("um"), U4 = sr(
  "sp"
), K4 = sr("rtg"), W4 = sr("rtc");
function G4(e, t = Tt) {
  Bi("ec", e, t);
}
const Ju = "components", Z4 = "directives";
function fr(e, t) {
  return Qu(Ju, e, !0, t) || e;
}
const U1 = Symbol.for("v-ndc");
function Pt(e) {
  return Ke(e) ? Qu(Ju, e, !1) || e : e || U1;
}
function K1(e) {
  return Qu(Z4, e);
}
function Qu(e, t, n = !0, r = !1) {
  const s = Ct || Tt;
  if (s) {
    const o = s.type;
    if (e === Ju) {
      const a = I3(
        o,
        !1
      );
      if (a && (a === t || a === dn(t) || a === $i(dn(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      hd(s[e] || o[e], t) || // global registration
      hd(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function hd(e, t) {
  return e && (e[t] || e[dn(t)] || e[$i(dn(t))]);
}
function Cn(e, t, n, r) {
  let s;
  const o = n, i = Ie(e);
  if (i || Ke(e)) {
    const a = i && fo(e);
    let l = !1;
    a && (l = !cn(e), e = Ii(e)), s = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(
        l ? Ot(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const f = a[l];
        s[l] = t(e[f], f, l, o);
      }
    }
  else
    s = [];
  return s;
}
function hi(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ie(r))
      for (let s = 0; s < r.length; s++)
        e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function we(e, t, n = {}, r, s) {
  if (Ct.ce || Ct.parent && ho(Ct.parent) && Ct.parent.ce)
    return t !== "default" && (n.name = t), y(), ue(
      et,
      null,
      [Ce("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), y();
  const i = o && W1(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ue(
    et,
    {
      key: (a && !or(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function W1(e) {
  return e.some((t) => os(t) ? !(t.type === Rt || t.type === et && !W1(t.children)) : !0) ? e : null;
}
const au = (e) => e ? hg(e) ? qi(e) : au(e.parent) : null, Ko = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => au(e.parent),
    $root: (e) => au(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Y1(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => m3.bind(e)
  })
), wa = (e, t) => e !== tt && !e.__isScriptSetup && Xe(e, t), X4 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = i[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (wa(r, t))
          return i[t] = 1, r[t];
        if (s !== tt && Xe(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Xe(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== tt && Xe(n, t))
          return i[t] = 4, n[t];
        lu && (i[t] = 0);
      }
    }
    const f = Ko[t];
    let c, p;
    if (f)
      return t === "$attrs" && It(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== tt && Xe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Xe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return wa(s, t) ? (s[t] = n, !0) : r !== tt && Xe(r, t) ? (r[t] = n, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== tt && Xe(e, i) || wa(t, i) || (a = o[0]) && Xe(a, i) || Xe(r, i) || Xe(Ko, i) || Xe(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function G1() {
  return Z1().slots;
}
function Fi() {
  return Z1().attrs;
}
function Z1() {
  const e = _t();
  return e.setupContext || (e.setupContext = mg(e));
}
function gd(e) {
  return Ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let lu = !0;
function Y4(e) {
  const t = Y1(e), n = e.proxy, r = e.ctx;
  lu = !1, t.beforeCreate && md(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: d,
    updated: v,
    activated: g,
    deactivated: C,
    beforeDestroy: h,
    beforeUnmount: k,
    destroyed: w,
    unmounted: _,
    render: E,
    renderTracked: x,
    renderTriggered: M,
    errorCaptured: $,
    serverPrefetch: O,
    // public API
    expose: D,
    inheritAttrs: N,
    // assets
    components: B,
    directives: oe,
    filters: z
  } = t;
  if (u && J4(u, r, null), i)
    for (const V in i) {
      const H = i[V];
      Ee(H) && (r[V] = H.bind(n));
    }
  if (s) {
    const V = s.call(n, n);
    Fe(V) && (e.data = Sn(V));
  }
  if (lu = !0, o)
    for (const V in o) {
      const H = o[V], J = Ee(H) ? H.bind(n, n) : Ee(H.get) ? H.get.bind(n, n) : Dt, I = !Ee(H) && Ee(H.set) ? H.set.bind(n) : Dt, Z = P({
        get: J,
        set: I
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Z.value,
        set: (K) => Z.value = K
      });
    }
  if (a)
    for (const V in a)
      X1(a[V], r, n, V);
  if (l) {
    const V = Ee(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((H) => {
      Kt(H, V[H]);
    });
  }
  f && md(f, e, "c");
  function j(V, H) {
    Ie(H) ? H.forEach((J) => V(J.bind(n))) : H && V(H.bind(n));
  }
  if (j(j1, c), j(it, p), j(V4, d), j(V1, v), j(H4, g), j(q1, C), j(G4, $), j(W4, x), j(K4, M), j(Yt, k), j(Ni, _), j(U4, O), Ie(D))
    if (D.length) {
      const V = e.exposed || (e.exposed = {});
      D.forEach((H) => {
        Object.defineProperty(V, H, {
          get: () => n[H],
          set: (J) => n[H] = J
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Dt && (e.render = E), N != null && (e.inheritAttrs = N), B && (e.components = B), oe && (e.directives = oe), O && z1(e);
}
function J4(e, t, n = Dt) {
  Ie(e) && (e = cu(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Fe(s) ? "default" in s ? o = ze(
      s.from || r,
      s.default,
      !0
    ) : o = ze(s.from || r) : o = ze(s), bt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function md(e, t, n) {
  xn(
    Ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function X1(e, t, n, r) {
  let s = r.includes(".") ? cg(n, r) : () => n[r];
  if (Ke(e)) {
    const o = t[e];
    Ee(o) && Te(s, o);
  } else if (Ee(e))
    Te(s, e.bind(n));
  else if (Fe(e))
    if (Ie(e))
      e.forEach((o) => X1(o, t, n, r));
    else {
      const o = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(o) && Te(s, o, e);
    }
}
function Y1(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => gi(l, u, i, !0)
  ), gi(l, t, i)), Fe(t) && o.set(t, l), l;
}
function gi(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && gi(e, o, n, !0), s && s.forEach(
    (i) => gi(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Q4[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Q4 = {
  data: vd,
  props: bd,
  emits: bd,
  // objects
  methods: Fo,
  computed: Fo,
  // lifecycle
  beforeCreate: Ft,
  created: Ft,
  beforeMount: Ft,
  mounted: Ft,
  beforeUpdate: Ft,
  updated: Ft,
  beforeDestroy: Ft,
  beforeUnmount: Ft,
  destroyed: Ft,
  unmounted: Ft,
  activated: Ft,
  deactivated: Ft,
  errorCaptured: Ft,
  serverPrefetch: Ft,
  // assets
  components: Fo,
  directives: Fo,
  // watch
  watch: t3,
  // provide / inject
  provide: vd,
  inject: e3
};
function vd(e, t) {
  return t ? e ? function() {
    return xt(
      Ee(e) ? e.call(this, this) : e,
      Ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function e3(e, t) {
  return Fo(cu(e), cu(t));
}
function cu(e) {
  if (Ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fo(e, t) {
  return e ? xt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bd(e, t) {
  return e ? Ie(e) && Ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xt(
    /* @__PURE__ */ Object.create(null),
    gd(e),
    gd(t ?? {})
  ) : t;
}
function t3(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ft(e[r], t[r]);
  return n;
}
function J1() {
  return {
    app: null,
    config: {
      isNativeTag: Wy,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let n3 = 0;
function r3(e, t) {
  return function(r, s = null) {
    Ee(r) || (r = xt({}, r)), s != null && !Fe(s) && (s = null);
    const o = J1(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: n3++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: R3,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return i.has(f) || (f && Ee(f.install) ? (i.add(f), f.install(u, ...c)) : Ee(f) && (i.add(f), f(u, ...c))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, c) {
        return c ? (o.components[f] = c, u) : o.components[f];
      },
      directive(f, c) {
        return c ? (o.directives[f] = c, u) : o.directives[f];
      },
      mount(f, c, p) {
        if (!l) {
          const d = u._ceVNode || Ce(r, s);
          return d.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(d, f, p), l = !0, u._container = f, f.__vue_app__ = u, qi(d.component);
        }
      },
      onUnmount(f) {
        a.push(f);
      },
      unmount() {
        l && (xn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, c) {
        return o.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = go;
        go = u;
        try {
          return f();
        } finally {
          go = c;
        }
      }
    };
    return u;
  };
}
let go = null;
function Kt(e, t) {
  if (Tt) {
    let n = Tt.provides;
    const r = Tt.parent && Tt.parent.provides;
    r === n && (n = Tt.provides = Object.create(r)), n[e] = t;
  }
}
function ze(e, t, n = !1) {
  const r = Tt || Ct;
  if (r || go) {
    const s = go ? go._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Ee(t) ? t.call(r && r.proxy) : t;
  }
}
const Q1 = {}, eg = () => Object.create(Q1), tg = (e) => Object.getPrototypeOf(e) === Q1;
function o3(e, t, n, r = !1) {
  const s = {}, o = eg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ng(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : x4(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function s3(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = je(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (zi(e.emitsOptions, p))
          continue;
        const d = t[p];
        if (l)
          if (Xe(o, p))
            d !== o[p] && (o[p] = d, u = !0);
          else {
            const v = dn(p);
            s[v] = uu(
              l,
              a,
              v,
              d,
              e,
              !1
            );
          }
        else
          d !== o[p] && (o[p] = d, u = !0);
      }
    }
  } else {
    ng(e, t, s, o) && (u = !0);
    let f;
    for (const c in a)
      (!t || // for camelCase
      !Xe(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = xr(c)) === c || !Xe(t, f))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[c] = uu(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete s[c]);
    if (o !== a)
      for (const c in o)
        (!t || !Xe(t, c)) && (delete o[c], u = !0);
  }
  u && Kn(e.attrs, "set", "");
}
function ng(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (Ho(l))
        continue;
      const u = t[l];
      let f;
      s && Xe(s, f = dn(l)) ? !o || !o.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : zi(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = je(n), u = a || tt;
    for (let f = 0; f < o.length; f++) {
      const c = o[f];
      n[c] = uu(
        s,
        l,
        c,
        u[c],
        e,
        !Xe(u, c)
      );
    }
  }
  return i;
}
function uu(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Xe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Ee(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const f = vs(s);
          r = u[n] = l.call(
            null,
            t
          ), f();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xr(n)) && (r = !0));
  }
  return r;
}
const i3 = /* @__PURE__ */ new WeakMap();
function rg(e, t, n = !1) {
  const r = n ? i3 : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!Ee(e)) {
    const f = (c) => {
      l = !0;
      const [p, d] = rg(c, t, !0);
      xt(i, p), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l)
    return Fe(e) && r.set(e, co), co;
  if (Ie(o))
    for (let f = 0; f < o.length; f++) {
      const c = dn(o[f]);
      _d(c) && (i[c] = tt);
    }
  else if (o)
    for (const f in o) {
      const c = dn(f);
      if (_d(c)) {
        const p = o[f], d = i[c] = Ie(p) || Ee(p) ? { type: p } : xt({}, p), v = d.type;
        let g = !1, C = !0;
        if (Ie(v))
          for (let h = 0; h < v.length; ++h) {
            const k = v[h], w = Ee(k) && k.name;
            if (w === "Boolean") {
              g = !0;
              break;
            } else w === "String" && (C = !1);
          }
        else
          g = Ee(v) && v.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = C, (g || Xe(d, "default")) && a.push(c);
      }
    }
  const u = [i, a];
  return Fe(e) && r.set(e, u), u;
}
function _d(e) {
  return e[0] !== "$" && !Ho(e);
}
const og = (e) => e[0] === "_" || e === "$stable", ef = (e) => Ie(e) ? e.map(Pn) : [Pn(e)], a3 = (e, t, n) => {
  if (t._n)
    return t;
  const r = he((...s) => ef(t(...s)), n);
  return r._c = !1, r;
}, sg = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (og(s)) continue;
    const o = e[s];
    if (Ee(o))
      t[s] = a3(s, o, r);
    else if (o != null) {
      const i = ef(o);
      t[s] = () => i;
    }
  }
}, ig = (e, t) => {
  const n = ef(t);
  e.slots.default = () => n;
}, ag = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, l3 = (e, t, n) => {
  const r = e.slots = eg();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ag(r, t, n), n && o1(r, "_", s, !0)) : sg(t, r);
  } else t && ig(e, t);
}, c3 = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = tt;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : ag(s, t, n) : (o = !t.$stable, sg(t, s)), i = t;
  } else t && (ig(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !og(a) && i[a] == null && delete s[a];
}, zt = C3;
function u3(e) {
  return f3(e);
}
function f3(e, t) {
  const n = Li();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: d = Dt,
    insertStaticContent: v
  } = e, g = (T, L, q, Y = null, X = null, ee = null, ae = void 0, se = null, ne = !!L.dynamicChildren) => {
    if (T === L)
      return;
    T && !qr(T, L) && (Y = We(T), K(T, X, ee, !0), T = null), L.patchFlag === -2 && (ne = !1, L.dynamicChildren = null);
    const { type: te, ref: ye, shapeFlag: fe } = L;
    switch (te) {
      case So:
        C(T, L, q, Y);
        break;
      case Rt:
        h(T, L, q, Y);
        break;
      case Js:
        T == null && k(L, q, Y, ae);
        break;
      case et:
        B(
          T,
          L,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        break;
      default:
        fe & 1 ? E(
          T,
          L,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        ) : fe & 6 ? oe(
          T,
          L,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        ) : (fe & 64 || fe & 128) && te.process(
          T,
          L,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne,
          pe
        );
    }
    ye != null && X && pi(ye, T && T.ref, ee, L || T, !L);
  }, C = (T, L, q, Y) => {
    if (T == null)
      r(
        L.el = a(L.children),
        q,
        Y
      );
    else {
      const X = L.el = T.el;
      L.children !== T.children && u(X, L.children);
    }
  }, h = (T, L, q, Y) => {
    T == null ? r(
      L.el = l(L.children || ""),
      q,
      Y
    ) : L.el = T.el;
  }, k = (T, L, q, Y) => {
    [T.el, T.anchor] = v(
      T.children,
      L,
      q,
      Y,
      T.el,
      T.anchor
    );
  }, w = ({ el: T, anchor: L }, q, Y) => {
    let X;
    for (; T && T !== L; )
      X = p(T), r(T, q, Y), T = X;
    r(L, q, Y);
  }, _ = ({ el: T, anchor: L }) => {
    let q;
    for (; T && T !== L; )
      q = p(T), s(T), T = q;
    s(L);
  }, E = (T, L, q, Y, X, ee, ae, se, ne) => {
    L.type === "svg" ? ae = "svg" : L.type === "math" && (ae = "mathml"), T == null ? x(
      L,
      q,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ) : O(
      T,
      L,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, x = (T, L, q, Y, X, ee, ae, se) => {
    let ne, te;
    const { props: ye, shapeFlag: fe, transition: ve, dirs: U } = T;
    if (ne = T.el = i(
      T.type,
      ee,
      ye && ye.is,
      ye
    ), fe & 8 ? f(ne, T.children) : fe & 16 && $(
      T.children,
      ne,
      null,
      Y,
      X,
      ka(T, ee),
      ae,
      se
    ), U && Ir(T, null, Y, "created"), M(ne, T, T.scopeId, ae, Y), ye) {
      for (const Ae in ye)
        Ae !== "value" && !Ho(Ae) && o(ne, Ae, null, ye[Ae], ee, Y);
      "value" in ye && o(ne, "value", null, ye.value, ee), (te = ye.onVnodeBeforeMount) && On(te, Y, T);
    }
    U && Ir(T, null, Y, "beforeMount");
    const ce = d3(X, ve);
    ce && ve.beforeEnter(ne), r(ne, L, q), ((te = ye && ye.onVnodeMounted) || ce || U) && zt(() => {
      te && On(te, Y, T), ce && ve.enter(ne), U && Ir(T, null, Y, "mounted");
    }, X);
  }, M = (T, L, q, Y, X) => {
    if (q && d(T, q), Y)
      for (let ee = 0; ee < Y.length; ee++)
        d(T, Y[ee]);
    if (X) {
      let ee = X.subTree;
      if (L === ee || fg(ee.type) && (ee.ssContent === L || ee.ssFallback === L)) {
        const ae = X.vnode;
        M(
          T,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          X.parent
        );
      }
    }
  }, $ = (T, L, q, Y, X, ee, ae, se, ne = 0) => {
    for (let te = ne; te < T.length; te++) {
      const ye = T[te] = se ? br(T[te]) : Pn(T[te]);
      g(
        null,
        ye,
        L,
        q,
        Y,
        X,
        ee,
        ae,
        se
      );
    }
  }, O = (T, L, q, Y, X, ee, ae) => {
    const se = L.el = T.el;
    let { patchFlag: ne, dynamicChildren: te, dirs: ye } = L;
    ne |= T.patchFlag & 16;
    const fe = T.props || tt, ve = L.props || tt;
    let U;
    if (q && Or(q, !1), (U = ve.onVnodeBeforeUpdate) && On(U, q, L, T), ye && Ir(L, T, q, "beforeUpdate"), q && Or(q, !0), (fe.innerHTML && ve.innerHTML == null || fe.textContent && ve.textContent == null) && f(se, ""), te ? D(
      T.dynamicChildren,
      te,
      se,
      q,
      Y,
      ka(L, X),
      ee
    ) : ae || H(
      T,
      L,
      se,
      null,
      q,
      Y,
      ka(L, X),
      ee,
      !1
    ), ne > 0) {
      if (ne & 16)
        N(se, fe, ve, q, X);
      else if (ne & 2 && fe.class !== ve.class && o(se, "class", null, ve.class, X), ne & 4 && o(se, "style", fe.style, ve.style, X), ne & 8) {
        const ce = L.dynamicProps;
        for (let Ae = 0; Ae < ce.length; Ae++) {
          const Oe = ce[Ae], ut = fe[Oe], ht = ve[Oe];
          (ht !== ut || Oe === "value") && o(se, Oe, ut, ht, X, q);
        }
      }
      ne & 1 && T.children !== L.children && f(se, L.children);
    } else !ae && te == null && N(se, fe, ve, q, X);
    ((U = ve.onVnodeUpdated) || ye) && zt(() => {
      U && On(U, q, L, T), ye && Ir(L, T, q, "updated");
    }, Y);
  }, D = (T, L, q, Y, X, ee, ae) => {
    for (let se = 0; se < L.length; se++) {
      const ne = T[se], te = L[se], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qr(ne, te) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 70) ? c(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      g(
        ne,
        te,
        ye,
        null,
        Y,
        X,
        ee,
        ae,
        !0
      );
    }
  }, N = (T, L, q, Y, X) => {
    if (L !== q) {
      if (L !== tt)
        for (const ee in L)
          !Ho(ee) && !(ee in q) && o(
            T,
            ee,
            L[ee],
            null,
            X,
            Y
          );
      for (const ee in q) {
        if (Ho(ee)) continue;
        const ae = q[ee], se = L[ee];
        ae !== se && ee !== "value" && o(T, ee, se, ae, X, Y);
      }
      "value" in q && o(T, "value", L.value, q.value, X);
    }
  }, B = (T, L, q, Y, X, ee, ae, se, ne) => {
    const te = L.el = T ? T.el : a(""), ye = L.anchor = T ? T.anchor : a("");
    let { patchFlag: fe, dynamicChildren: ve, slotScopeIds: U } = L;
    U && (se = se ? se.concat(U) : U), T == null ? (r(te, q, Y), r(ye, q, Y), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      q,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    )) : fe > 0 && fe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (D(
      T.dynamicChildren,
      ve,
      q,
      X,
      ee,
      ae,
      se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || X && L === X.subTree) && tf(
      T,
      L,
      !0
      /* shallow */
    )) : H(
      T,
      L,
      q,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, oe = (T, L, q, Y, X, ee, ae, se, ne) => {
    L.slotScopeIds = se, T == null ? L.shapeFlag & 512 ? X.ctx.activate(
      L,
      q,
      Y,
      ae,
      ne
    ) : z(
      L,
      q,
      Y,
      X,
      ee,
      ae,
      ne
    ) : ie(T, L, ne);
  }, z = (T, L, q, Y, X, ee, ae) => {
    const se = T.component = T3(
      T,
      Y,
      X
    );
    if (Di(T) && (se.ctx.renderer = pe), M3(se, !1, ae), se.asyncDep) {
      if (X && X.registerDep(se, j, ae), !T.el) {
        const ne = se.subTree = Ce(Rt);
        h(null, ne, L, q);
      }
    } else
      j(
        se,
        T,
        L,
        q,
        X,
        ee,
        ae
      );
  }, ie = (T, L, q) => {
    const Y = L.component = T.component;
    if (w3(T, L, q))
      if (Y.asyncDep && !Y.asyncResolved) {
        V(Y, L, q);
        return;
      } else
        Y.next = L, Y.update();
    else
      L.el = T.el, Y.vnode = L;
  }, j = (T, L, q, Y, X, ee, ae) => {
    const se = () => {
      if (T.isMounted) {
        let { next: fe, bu: ve, u: U, parent: ce, vnode: Ae } = T;
        {
          const Et = lg(T);
          if (Et) {
            fe && (fe.el = Ae.el, V(T, fe, ae)), Et.asyncDep.then(() => {
              T.isUnmounted || se();
            });
            return;
          }
        }
        let Oe = fe, ut;
        Or(T, !1), fe ? (fe.el = Ae.el, V(T, fe, ae)) : fe = Ae, ve && Xs(ve), (ut = fe.props && fe.props.onVnodeBeforeUpdate) && On(ut, ce, fe, Ae), Or(T, !0);
        const ht = wd(T), kt = T.subTree;
        T.subTree = ht, g(
          kt,
          ht,
          // parent may have changed if it's in a teleport
          c(kt.el),
          // anchor may have changed if it's in a fragment
          We(kt),
          T,
          X,
          ee
        ), fe.el = ht.el, Oe === null && k3(T, ht.el), U && zt(U, X), (ut = fe.props && fe.props.onVnodeUpdated) && zt(
          () => On(ut, ce, fe, Ae),
          X
        );
      } else {
        let fe;
        const { el: ve, props: U } = L, { bm: ce, m: Ae, parent: Oe, root: ut, type: ht } = T, kt = ho(L);
        Or(T, !1), ce && Xs(ce), !kt && (fe = U && U.onVnodeBeforeMount) && On(fe, Oe, L), Or(T, !0);
        {
          ut.ce && ut.ce._injectChildStyle(ht);
          const Et = T.subTree = wd(T);
          g(
            null,
            Et,
            q,
            Y,
            T,
            X,
            ee
          ), L.el = Et.el;
        }
        if (Ae && zt(Ae, X), !kt && (fe = U && U.onVnodeMounted)) {
          const Et = L;
          zt(
            () => On(fe, Oe, Et),
            X
          );
        }
        (L.shapeFlag & 256 || Oe && ho(Oe.vnode) && Oe.vnode.shapeFlag & 256) && T.a && zt(T.a, X), T.isMounted = !0, L = q = Y = null;
      }
    };
    T.scope.on();
    const ne = T.effect = new c1(se);
    T.scope.off();
    const te = T.update = ne.run.bind(ne), ye = T.job = ne.runIfDirty.bind(ne);
    ye.i = T, ye.id = T.uid, ne.scheduler = () => Yu(ye), Or(T, !0), te();
  }, V = (T, L, q) => {
    L.component = T;
    const Y = T.vnode.props;
    T.vnode = L, T.next = null, s3(T, L.props, Y, q), c3(T, L.children, q), Er(), cd(T), Sr();
  }, H = (T, L, q, Y, X, ee, ae, se, ne = !1) => {
    const te = T && T.children, ye = T ? T.shapeFlag : 0, fe = L.children, { patchFlag: ve, shapeFlag: U } = L;
    if (ve > 0) {
      if (ve & 128) {
        I(
          te,
          fe,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      } else if (ve & 256) {
        J(
          te,
          fe,
          q,
          Y,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      }
    }
    U & 8 ? (ye & 16 && Pe(te, X, ee), fe !== te && f(q, fe)) : ye & 16 ? U & 16 ? I(
      te,
      fe,
      q,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ) : Pe(te, X, ee, !0) : (ye & 8 && f(q, ""), U & 16 && $(
      fe,
      q,
      Y,
      X,
      ee,
      ae,
      se,
      ne
    ));
  }, J = (T, L, q, Y, X, ee, ae, se, ne) => {
    T = T || co, L = L || co;
    const te = T.length, ye = L.length, fe = Math.min(te, ye);
    let ve;
    for (ve = 0; ve < fe; ve++) {
      const U = L[ve] = ne ? br(L[ve]) : Pn(L[ve]);
      g(
        T[ve],
        U,
        q,
        null,
        X,
        ee,
        ae,
        se,
        ne
      );
    }
    te > ye ? Pe(
      T,
      X,
      ee,
      !0,
      !1,
      fe
    ) : $(
      L,
      q,
      Y,
      X,
      ee,
      ae,
      se,
      ne,
      fe
    );
  }, I = (T, L, q, Y, X, ee, ae, se, ne) => {
    let te = 0;
    const ye = L.length;
    let fe = T.length - 1, ve = ye - 1;
    for (; te <= fe && te <= ve; ) {
      const U = T[te], ce = L[te] = ne ? br(L[te]) : Pn(L[te]);
      if (qr(U, ce))
        g(
          U,
          ce,
          q,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      te++;
    }
    for (; te <= fe && te <= ve; ) {
      const U = T[fe], ce = L[ve] = ne ? br(L[ve]) : Pn(L[ve]);
      if (qr(U, ce))
        g(
          U,
          ce,
          q,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      fe--, ve--;
    }
    if (te > fe) {
      if (te <= ve) {
        const U = ve + 1, ce = U < ye ? L[U].el : Y;
        for (; te <= ve; )
          g(
            null,
            L[te] = ne ? br(L[te]) : Pn(L[te]),
            q,
            ce,
            X,
            ee,
            ae,
            se,
            ne
          ), te++;
      }
    } else if (te > ve)
      for (; te <= fe; )
        K(T[te], X, ee, !0), te++;
    else {
      const U = te, ce = te, Ae = /* @__PURE__ */ new Map();
      for (te = ce; te <= ve; te++) {
        const mt = L[te] = ne ? br(L[te]) : Pn(L[te]);
        mt.key != null && Ae.set(mt.key, te);
      }
      let Oe, ut = 0;
      const ht = ve - ce + 1;
      let kt = !1, Et = 0;
      const gn = new Array(ht);
      for (te = 0; te < ht; te++) gn[te] = 0;
      for (te = U; te <= fe; te++) {
        const mt = T[te];
        if (ut >= ht) {
          K(mt, X, ee, !0);
          continue;
        }
        let $t;
        if (mt.key != null)
          $t = Ae.get(mt.key);
        else
          for (Oe = ce; Oe <= ve; Oe++)
            if (gn[Oe - ce] === 0 && qr(mt, L[Oe])) {
              $t = Oe;
              break;
            }
        $t === void 0 ? K(mt, X, ee, !0) : (gn[$t - ce] = te + 1, $t >= Et ? Et = $t : kt = !0, g(
          mt,
          L[$t],
          q,
          null,
          X,
          ee,
          ae,
          se,
          ne
        ), ut++);
      }
      const an = kt ? p3(gn) : co;
      for (Oe = an.length - 1, te = ht - 1; te >= 0; te--) {
        const mt = ce + te, $t = L[mt], $n = mt + 1 < ye ? L[mt + 1].el : Y;
        gn[te] === 0 ? g(
          null,
          $t,
          q,
          $n,
          X,
          ee,
          ae,
          se,
          ne
        ) : kt && (Oe < 0 || te !== an[Oe] ? Z($t, q, $n, 2) : Oe--);
      }
    }
  }, Z = (T, L, q, Y, X = null) => {
    const { el: ee, type: ae, transition: se, children: ne, shapeFlag: te } = T;
    if (te & 6) {
      Z(T.component.subTree, L, q, Y);
      return;
    }
    if (te & 128) {
      T.suspense.move(L, q, Y);
      return;
    }
    if (te & 64) {
      ae.move(T, L, q, pe);
      return;
    }
    if (ae === et) {
      r(ee, L, q);
      for (let fe = 0; fe < ne.length; fe++)
        Z(ne[fe], L, q, Y);
      r(T.anchor, L, q);
      return;
    }
    if (ae === Js) {
      w(T, L, q);
      return;
    }
    if (Y !== 2 && te & 1 && se)
      if (Y === 0)
        se.beforeEnter(ee), r(ee, L, q), zt(() => se.enter(ee), X);
      else {
        const { leave: fe, delayLeave: ve, afterLeave: U } = se, ce = () => r(ee, L, q), Ae = () => {
          fe(ee, () => {
            ce(), U && U();
          });
        };
        ve ? ve(ee, ce, Ae) : Ae();
      }
    else
      r(ee, L, q);
  }, K = (T, L, q, Y = !1, X = !1) => {
    const {
      type: ee,
      props: ae,
      ref: se,
      children: ne,
      dynamicChildren: te,
      shapeFlag: ye,
      patchFlag: fe,
      dirs: ve,
      cacheIndex: U
    } = T;
    if (fe === -2 && (X = !1), se != null && pi(se, null, q, T, !0), U != null && (L.renderCache[U] = void 0), ye & 256) {
      L.ctx.deactivate(T);
      return;
    }
    const ce = ye & 1 && ve, Ae = !ho(T);
    let Oe;
    if (Ae && (Oe = ae && ae.onVnodeBeforeUnmount) && On(Oe, L, T), ye & 6)
      Re(T.component, q, Y);
    else {
      if (ye & 128) {
        T.suspense.unmount(q, Y);
        return;
      }
      ce && Ir(T, null, L, "beforeUnmount"), ye & 64 ? T.type.remove(
        T,
        L,
        q,
        pe,
        Y
      ) : te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ee !== et || fe > 0 && fe & 64) ? Pe(
        te,
        L,
        q,
        !1,
        !0
      ) : (ee === et && fe & 384 || !X && ye & 16) && Pe(ne, L, q), Y && me(T);
    }
    (Ae && (Oe = ae && ae.onVnodeUnmounted) || ce) && zt(() => {
      Oe && On(Oe, L, T), ce && Ir(T, null, L, "unmounted");
    }, q);
  }, me = (T) => {
    const { type: L, el: q, anchor: Y, transition: X } = T;
    if (L === et) {
      Se(q, Y);
      return;
    }
    if (L === Js) {
      _(T);
      return;
    }
    const ee = () => {
      s(q), X && !X.persisted && X.afterLeave && X.afterLeave();
    };
    if (T.shapeFlag & 1 && X && !X.persisted) {
      const { leave: ae, delayLeave: se } = X, ne = () => ae(q, ee);
      se ? se(T.el, ee, ne) : ne();
    } else
      ee();
  }, Se = (T, L) => {
    let q;
    for (; T !== L; )
      q = p(T), s(T), T = q;
    s(L);
  }, Re = (T, L, q) => {
    const { bum: Y, scope: X, job: ee, subTree: ae, um: se, m: ne, a: te } = T;
    yd(ne), yd(te), Y && Xs(Y), X.stop(), ee && (ee.flags |= 8, K(ae, T, L, q)), se && zt(se, L), zt(() => {
      T.isUnmounted = !0;
    }, L), L && L.pendingBranch && !L.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === L.pendingId && (L.deps--, L.deps === 0 && L.resolve());
  }, Pe = (T, L, q, Y = !1, X = !1, ee = 0) => {
    for (let ae = ee; ae < T.length; ae++)
      K(T[ae], L, q, Y, X);
  }, We = (T) => {
    if (T.shapeFlag & 6)
      return We(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const L = p(T.anchor || T.el), q = L && L[L1];
    return q ? p(q) : L;
  };
  let qe = !1;
  const dt = (T, L, q) => {
    T == null ? L._vnode && K(L._vnode, null, null, !0) : g(
      L._vnode || null,
      T,
      L,
      null,
      null,
      null,
      q
    ), L._vnode = T, qe || (qe = !0, cd(), T1(), qe = !1);
  }, pe = {
    p: g,
    um: K,
    m: Z,
    r: me,
    mt: z,
    mc: $,
    pc: H,
    pbc: D,
    n: We,
    o: e
  };
  return {
    render: dt,
    hydrate: void 0,
    createApp: r3(dt)
  };
}
function ka({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Or({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function d3(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function tf(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (Ie(r) && Ie(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = br(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && tf(i, a)), a.type === So && (a.el = i.el);
    }
}
function p3(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function lg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lg(t);
}
function yd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const h3 = Symbol.for("v-scx"), g3 = () => ze(h3);
function nf(e, t) {
  return rf(e, null, t);
}
function Te(e, t, n) {
  return rf(e, t, n);
}
function rf(e, t, n = tt) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = xt({}, n), l = t && r || !t && o !== "post";
  let u;
  if (ss) {
    if (o === "sync") {
      const d = g3();
      u = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Dt, d.resume = Dt, d.pause = Dt, d;
    }
  }
  const f = Tt;
  a.call = (d, v, g) => xn(d, f, v, g);
  let c = !1;
  o === "post" ? a.scheduler = (d) => {
    zt(d, f && f.suspense);
  } : o !== "sync" && (c = !0, a.scheduler = (d, v) => {
    v ? d() : Yu(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), c && (d.flags |= 2, f && (d.id = f.uid, d.i = f));
  };
  const p = O4(e, t, a);
  return ss && (u ? u.push(p) : l && p()), p;
}
function m3(e, t, n) {
  const r = this.proxy, s = Ke(e) ? e.includes(".") ? cg(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ee(t) ? o = t : (o = t.handler, n = t);
  const i = vs(this), a = rf(s, o.bind(r), n);
  return i(), a;
}
function cg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const v3 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dn(t)}Modifiers`] || e[`${xr(t)}Modifiers`];
function b3(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || tt;
  let s = n;
  const o = t.startsWith("update:"), i = o && v3(r, t.slice(7));
  i && (i.trim && (s = n.map((f) => Ke(f) ? f.trim() : f)), i.number && (s = n.map(eu)));
  let a, l = r[a = ga(t)] || // also try camelCase event handler (#2249)
  r[a = ga(dn(t))];
  !l && o && (l = r[a = ga(xr(t))]), l && xn(
    l,
    e,
    6,
    s
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, xn(
      u,
      e,
      6,
      s
    );
  }
}
function ug(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!Ee(e)) {
    const l = (u) => {
      const f = ug(u, t, !0);
      f && (a = !0, xt(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Fe(e) && r.set(e, null), null) : (Ie(o) ? o.forEach((l) => i[l] = null) : xt(i, o), Fe(e) && r.set(e, i), i);
}
function zi(e, t) {
  return !e || !Ai(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, xr(t)) || Xe(e, t));
}
function wd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: f,
    props: c,
    data: p,
    setupState: d,
    ctx: v,
    inheritAttrs: g
  } = e, C = di(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r, E = _;
      h = Pn(
        u.call(
          E,
          _,
          f,
          c,
          d,
          p,
          v
        )
      ), k = a;
    } else {
      const _ = t;
      h = Pn(
        _.length > 1 ? _(
          c,
          { attrs: a, slots: i, emit: l }
        ) : _(
          c,
          null
        )
      ), k = t.props ? a : _3(a);
    }
  } catch (_) {
    Wo.length = 0, Pi(_, e, 1), h = Ce(Rt);
  }
  let w = h;
  if (k && g !== !1) {
    const _ = Object.keys(k), { shapeFlag: E } = w;
    _.length && E & 7 && (o && _.some(zu) && (k = y3(
      k,
      o
    )), w = Jn(w, k, !1, !0));
  }
  return n.dirs && (w = Jn(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && ns(w, n.transition), h = w, di(C), h;
}
const _3 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ai(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, y3 = (e, t) => {
  const n = {};
  for (const r in e)
    (!zu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function w3(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? kd(r, i, u) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (i[p] !== r[p] && !zi(u, p))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? kd(r, i, u) : !0 : !!i;
  return !1;
}
function kd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !zi(n, o))
      return !0;
  }
  return !1;
}
function k3({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const fg = (e) => e.__isSuspense;
function C3(e, t) {
  t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : D4(e);
}
const et = Symbol.for("v-fgt"), So = Symbol.for("v-txt"), Rt = Symbol.for("v-cmt"), Js = Symbol.for("v-stc"), Wo = [];
let on = null;
function y(e = !1) {
  Wo.push(on = e ? null : []);
}
function x3() {
  Wo.pop(), on = Wo[Wo.length - 1] || null;
}
let rs = 1;
function Cd(e, t = !1) {
  rs += e, e < 0 && on && t && (on.hasOnce = !0);
}
function dg(e) {
  return e.dynamicChildren = rs > 0 ? on || co : null, x3(), rs > 0 && on && on.push(e), e;
}
function A(e, t, n, r, s, o) {
  return dg(
    m(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function ue(e, t, n, r, s) {
  return dg(
    Ce(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function os(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const pg = ({ key: e }) => e ?? null, Qs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ke(e) || bt(e) || Ee(e) ? { i: Ct, r: e, k: t, f: !!n } : e : null);
function m(e, t = null, n = null, r = 0, s = null, o = e === et ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pg(t),
    ref: t && Qs(t),
    scopeId: $1,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct
  };
  return a ? (sf(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ke(n) ? 8 : 16), rs > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const Ce = E3;
function E3(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === U1) && (e = Rt), os(e)) {
    const a = Jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && sf(a, n), rs > 0 && !o && on && (a.shapeFlag & 6 ? on[on.indexOf(e)] = a : on.push(a)), a.patchFlag = -2, a;
  }
  if (O3(e) && (e = e.__vccOpts), t) {
    t = of(t);
    let { class: a, style: l } = t;
    a && !Ke(a) && (t.class = Q(a)), Fe(l) && (Xu(l) && !Ie(l) && (l = xt({}, l)), t.style = st(l));
  }
  const i = Ke(e) ? 1 : fg(e) ? 128 : I1(e) ? 64 : Fe(e) ? 4 : Ee(e) ? 2 : 0;
  return m(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function of(e) {
  return e ? Xu(e) || tg(e) ? xt({}, e) : e : null;
}
function Jn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? gt(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && pg(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ie(o) ? o.concat(Qs(t)) : [o, Qs(t)] : Qs(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== et ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jn(e.ssContent),
    ssFallback: e.ssFallback && Jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && ns(
    f,
    l.clone(f)
  ), f;
}
function Zr(e = " ", t = 0) {
  return Ce(So, null, e, t);
}
function Ar(e, t) {
  const n = Ce(Js, null, e);
  return n.staticCount = t, n;
}
function _e(e = "", t = !1) {
  return t ? (y(), ue(Rt, null, e)) : Ce(Rt, null, e);
}
function Pn(e) {
  return e == null || typeof e == "boolean" ? Ce(Rt) : Ie(e) ? Ce(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : os(e) ? br(e) : Ce(So, null, String(e));
}
function br(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function sf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ie(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), sf(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tg(t) ? t._ctx = Ct : s === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ee(t) ? (t = { default: t, _ctx: Ct }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Zr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Q([t.class, r.class]));
      else if (s === "style")
        t.style = st([t.style, r.style]);
      else if (Ai(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(Ie(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function On(e, t, n, r = null) {
  xn(e, t, 7, [
    n,
    r
  ]);
}
const S3 = J1();
let A3 = 0;
function T3(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || S3, o = {
    uid: A3++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new o4(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: rg(r, s),
    emitsOptions: ug(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = b3.bind(null, o), e.ce && e.ce(o), o;
}
let Tt = null;
const _t = () => Tt || Ct;
let mi, fu;
{
  const e = Li(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  mi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Tt = n
  ), fu = t(
    "__VUE_SSR_SETTERS__",
    (n) => ss = n
  );
}
const vs = (e) => {
  const t = Tt;
  return mi(e), e.scope.on(), () => {
    e.scope.off(), mi(t);
  };
}, xd = () => {
  Tt && Tt.scope.off(), mi(null);
};
function hg(e) {
  return e.vnode.shapeFlag & 4;
}
let ss = !1;
function M3(e, t = !1, n = !1) {
  t && fu(t);
  const { props: r, children: s } = e.vnode, o = hg(e);
  o3(e, r, o, t), l3(e, s, n);
  const i = o ? $3(e, t) : void 0;
  return t && fu(!1), i;
}
function $3(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, X4);
  const { setup: r } = n;
  if (r) {
    Er();
    const s = e.setupContext = r.length > 1 ? mg(e) : null, o = vs(e), i = ms(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = t1(i);
    if (Sr(), o(), (a || e.sp) && !ho(e) && z1(e), a) {
      if (i.then(xd, xd), t)
        return i.then((l) => {
          Ed(e, l);
        }).catch((l) => {
          Pi(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Ed(e, i);
  } else
    gg(e);
}
function Ed(e, t, n) {
  Ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = x1(t)), gg(e);
}
function gg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const s = vs(e);
    Er();
    try {
      Y4(e);
    } finally {
      Sr(), s();
    }
  }
}
const L3 = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  }
};
function mg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, L3),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function qi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(x1(E4(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ko)
        return Ko[n](e);
    },
    has(t, n) {
      return n in t || n in Ko;
    }
  })) : e.proxy;
}
function I3(e, t = !0) {
  return Ee(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function O3(e) {
  return Ee(e) && "__vccOpts" in e;
}
const P = (e, t) => L4(e, t, ss);
function _n(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Fe(t) && !Ie(t) ? os(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && os(n) && (n = [n]), Ce(e, t, n));
}
const R3 = "3.5.13", P3 = Dt;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let du;
const Sd = typeof window < "u" && window.trustedTypes;
if (Sd)
  try {
    du = /* @__PURE__ */ Sd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vg = du ? (e) => du.createHTML(e) : (e) => e, D3 = "http://www.w3.org/2000/svg", B3 = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, Ad = jn && /* @__PURE__ */ jn.createElement("template"), N3 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? jn.createElementNS(D3, e) : t === "mathml" ? jn.createElementNS(B3, e) : n ? jn.createElement(e, { is: n }) : jn.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => jn.createTextNode(e),
  createComment: (e) => jn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Ad.innerHTML = vg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ad.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, dr = "transition", Io = "animation", is = Symbol("_vtc"), bg = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, F3 = /* @__PURE__ */ xt(
  {},
  P1,
  bg
), z3 = (e) => (e.displayName = "Transition", e.props = F3, e), Xr = /* @__PURE__ */ z3(
  (e, { slots: t }) => _n(q4, q3(e), t)
), Rr = (e, t = []) => {
  Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Td = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function q3(e) {
  const t = {};
  for (const B in e)
    B in bg || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = i,
    appearToClass: f = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, v = H3(s), g = v && v[0], C = v && v[1], {
    onBeforeEnter: h,
    onEnter: k,
    onEnterCancelled: w,
    onLeave: _,
    onLeaveCancelled: E,
    onBeforeAppear: x = h,
    onAppear: M = k,
    onAppearCancelled: $ = w
  } = t, O = (B, oe, z, ie) => {
    B._enterCancelled = ie, Pr(B, oe ? f : a), Pr(B, oe ? u : i), z && z();
  }, D = (B, oe) => {
    B._isLeaving = !1, Pr(B, c), Pr(B, d), Pr(B, p), oe && oe();
  }, N = (B) => (oe, z) => {
    const ie = B ? M : k, j = () => O(oe, B, z);
    Rr(ie, [oe, j]), Md(() => {
      Pr(oe, B ? l : o), qn(oe, B ? f : a), Td(ie) || $d(oe, r, g, j);
    });
  };
  return xt(t, {
    onBeforeEnter(B) {
      Rr(h, [B]), qn(B, o), qn(B, i);
    },
    onBeforeAppear(B) {
      Rr(x, [B]), qn(B, l), qn(B, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(B, oe) {
      B._isLeaving = !0;
      const z = () => D(B, oe);
      qn(B, c), B._enterCancelled ? (qn(B, p), Od()) : (Od(), qn(B, p)), Md(() => {
        B._isLeaving && (Pr(B, c), qn(B, d), Td(_) || $d(B, r, C, z));
      }), Rr(_, [B, z]);
    },
    onEnterCancelled(B) {
      O(B, !1, void 0, !0), Rr(w, [B]);
    },
    onAppearCancelled(B) {
      O(B, !0, void 0, !0), Rr($, [B]);
    },
    onLeaveCancelled(B) {
      D(B), Rr(E, [B]);
    }
  });
}
function H3(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [Ca(e.enter), Ca(e.leave)];
  {
    const t = Ca(e);
    return [t, t];
  }
}
function Ca(e) {
  return Yy(e);
}
function qn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[is] || (e[is] = /* @__PURE__ */ new Set())).add(t);
}
function Pr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[is];
  n && (n.delete(t), n.size || (e[is] = void 0));
}
function Md(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let j3 = 0;
function $d(e, t, n, r) {
  const s = e._endId = ++j3, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = V3(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, p), o();
  }, p = (d) => {
    d.target === e && ++f >= l && c();
  };
  setTimeout(() => {
    f < l && c();
  }, a + 1), e.addEventListener(u, p);
}
function V3(e, t) {
  const n = window.getComputedStyle(e), r = (v) => (n[v] || "").split(", "), s = r(`${dr}Delay`), o = r(`${dr}Duration`), i = Ld(s, o), a = r(`${Io}Delay`), l = r(`${Io}Duration`), u = Ld(a, l);
  let f = null, c = 0, p = 0;
  t === dr ? i > 0 && (f = dr, c = i, p = o.length) : t === Io ? u > 0 && (f = Io, c = u, p = l.length) : (c = Math.max(i, u), f = c > 0 ? i > u ? dr : Io : null, p = f ? f === dr ? o.length : l.length : 0);
  const d = f === dr && /\b(transform|all)(,|$)/.test(
    r(`${dr}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: p,
    hasTransform: d
  };
}
function Ld(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Id(n) + Id(e[r])));
}
function Id(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Od() {
  return document.body.offsetHeight;
}
function U3(e, t, n) {
  const r = e[is];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = Symbol("_vod"), _g = Symbol("_vsh"), Qn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Oo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Oo(e, !0), r.enter(e)) : r.leave(e, () => {
      Oo(e, !1);
    }) : Oo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Oo(e, t);
  }
};
function Oo(e, t) {
  e.style.display = t ? e[vi] : "none", e[_g] = !t;
}
const K3 = Symbol(""), W3 = /(^|;)\s*display\s*:/;
function G3(e, t, n) {
  const r = e.style, s = Ke(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Ke(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && ei(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && ei(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), ei(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[K3];
      i && (n += ";" + i), r.cssText = n, o = W3.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = o ? r.display : "", e[_g] && (r.display = "none"));
}
const Rd = /\s*!important$/;
function ei(e, t, n) {
  if (Ie(n))
    n.forEach((r) => ei(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Z3(e, t);
    Rd.test(n) ? e.setProperty(
      xr(r),
      n.replace(Rd, ""),
      "important"
    ) : e[r] = n;
  }
}
const Pd = ["Webkit", "Moz", "ms"], xa = {};
function Z3(e, t) {
  const n = xa[t];
  if (n)
    return n;
  let r = dn(t);
  if (r !== "filter" && r in e)
    return xa[t] = r;
  r = $i(r);
  for (let s = 0; s < Pd.length; s++) {
    const o = Pd[s] + r;
    if (o in e)
      return xa[t] = o;
  }
  return t;
}
const Dd = "http://www.w3.org/1999/xlink";
function Bd(e, t, n, r, s, o = r4(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Dd, t.slice(6, t.length)) : e.setAttributeNS(Dd, t, n) : n == null || o && !s1(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : or(n) ? String(n) : n
  );
}
function Nd(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vg(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = s1(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function so(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function X3(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fd = Symbol("_vei");
function Y3(e, t, n, r, s = null) {
  const o = e[Fd] || (e[Fd] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = J3(t);
    if (r) {
      const u = o[t] = tw(
        r,
        s
      );
      so(e, a, u, l);
    } else i && (X3(e, a, i, l), o[t] = void 0);
  }
}
const zd = /(?:Once|Passive|Capture)$/;
function J3(e) {
  let t;
  if (zd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(zd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xr(e.slice(2)), t];
}
let Ea = 0;
const Q3 = /* @__PURE__ */ Promise.resolve(), ew = () => Ea || (Q3.then(() => Ea = 0), Ea = Date.now());
function tw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xn(
      nw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ew(), n;
}
function nw(e, t) {
  if (Ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const qd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rw = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? U3(e, r, i) : t === "style" ? G3(e, n, r) : Ai(t) ? zu(t) || Y3(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ow(e, t, r, i)) ? (Nd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bd(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ke(r)) ? Nd(e, dn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Bd(e, t, r, i));
};
function ow(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qd(t) && Ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return qd(t) && Ke(n) ? !1 : t in e;
}
function af(e = "$style") {
  {
    const t = _t();
    if (!t)
      return tt;
    const n = t.type.__cssModules;
    if (!n)
      return tt;
    const r = n[e];
    return r || tt;
  }
}
const Hd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ie(t) ? (n) => Xs(t, n) : t;
};
function sw(e) {
  e.target.composing = !0;
}
function jd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sa = Symbol("_assign"), yg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[Sa] = Hd(s);
    const o = r || s.props && s.props.type === "number";
    so(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = eu(a)), e[Sa](a);
    }), n && so(e, "change", () => {
      e.value = e.value.trim();
    }), t || (so(e, "compositionstart", sw), so(e, "compositionend", jd), so(e, "change", jd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[Sa] = Hd(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? eu(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
  }
}, iw = ["ctrl", "shift", "alt", "meta"], aw = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => iw.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = aw[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  });
}, lw = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (s) => {
    if (!("key" in s))
      return;
    const o = xr(s.key);
    if (t.some(
      (i) => i === o || lw[i] === o
    ))
      return e(s);
  });
}, cw = /* @__PURE__ */ xt({ patchProp: rw }, N3);
let Vd;
function uw() {
  return Vd || (Vd = u3(cw));
}
const fw = (...e) => {
  const t = uw().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = pw(r);
    if (!s) return;
    const o = t._component;
    !Ee(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, dw(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function dw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pw(e) {
  return Ke(e) ? document.querySelector(e) : e;
}
const Ro = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: !1,
  initialMessages: ["Вітаю! 👋 Я – ШІ-консультант у команді VIRSHI", "Скажи будь ласка своє ім'я?"],
  i18n: {
    en: {
      title: "ШІ-консультант",
      subtitle: "Я працюю 24/7 і багатофункціональний!",
      footer: "",
      getStarted: "Нова розмова",
      inputPlaceholder: "Текст повідомлення..",
      closeButtonTooltip: "Закрити чат"
    }
  },
  theme: {},
  enableStreaming: !1
}, hw = "#n8n-chat", gw = "n8n-chat", Ud = `${gw}/sessionId`, wg = "Chat", kg = "ChatOptions";
var At = [];
for (var Aa = 0; Aa < 256; ++Aa)
  At.push((Aa + 256).toString(16).slice(1));
function mw(e, t = 0) {
  return (At[e[t + 0]] + At[e[t + 1]] + At[e[t + 2]] + At[e[t + 3]] + "-" + At[e[t + 4]] + At[e[t + 5]] + "-" + At[e[t + 6]] + At[e[t + 7]] + "-" + At[e[t + 8]] + At[e[t + 9]] + "-" + At[e[t + 10]] + At[e[t + 11]] + At[e[t + 12]] + At[e[t + 13]] + At[e[t + 14]] + At[e[t + 15]]).toLowerCase();
}
var Rs, vw = new Uint8Array(16);
function bw() {
  if (!Rs && (Rs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Rs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Rs(vw);
}
var _w = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Kd = {
  randomUUID: _w
};
function Vr(e, t, n) {
  if (Kd.randomUUID && !e)
    return Kd.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || bw)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, mw(r);
}
async function yw() {
  return "";
}
async function lf(...e) {
  var i, a;
  const t = await yw(), n = (i = e[1]) == null ? void 0 : i.body, r = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(a = e[1]) == null ? void 0 : a.headers
  };
  n instanceof FormData ? delete r["Content-Type"] : r["Content-Type"] = "application/json";
  const s = await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: r
  });
  let o;
  try {
    o = await s.clone().json();
  } catch {
    o = await s.text();
  }
  return o;
}
async function Cg(e, t = {}, n = {}) {
  let r = e;
  return Object.keys(t).length > 0 && (r = `${r}?${new URLSearchParams(
    t
  ).toString()}`), await lf(r, { ...n, method: "GET" });
}
async function xg(e, t = {}, n = {}) {
  return await lf(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function ww(e, t = {}, n = [], r = {}) {
  const s = new FormData();
  for (const o in t) {
    const i = t[o];
    typeof i == "object" && i !== null ? s.append(o, JSON.stringify(i)) : s.append(o, i);
  }
  for (const o of n)
    s.append("files", o);
  return await lf(e, {
    ...r,
    method: "POST",
    body: s
  });
}
async function kw(e, t) {
  var r, s;
  return await (((r = t.webhookConfig) == null ? void 0 : r.method) === "POST" ? xg : Cg)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (s = t.webhookConfig) == null ? void 0 : s.headers
    }
  );
}
async function Cw(e, t, n, r) {
  var o, i, a;
  return t.length > 0 ? await ww(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    t,
    {
      headers: (o = r.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = r.webhookConfig) == null ? void 0 : i.method) === "POST" ? xg : Cg)(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    {
      headers: (a = r.webhookConfig) == null ? void 0 : a.headers
    }
  );
}
function xw() {
  let e = "";
  const t = new TextDecoder();
  return new TransformStream({
    transform(n, r) {
      e += t.decode(n, { stream: !0 });
      const s = e.split(`
`);
      e = s.pop() ?? "";
      for (const o of s)
        if (o.trim())
          try {
            const i = JSON.parse(o);
            r.enqueue(i);
          } catch {
            r.enqueue({
              type: "item",
              content: o
            });
          }
    },
    flush(n) {
      if (e.trim())
        try {
          const r = JSON.parse(e);
          n.enqueue(r);
        } catch {
          n.enqueue({
            type: "item",
            content: e
          });
        }
    }
  });
}
async function Ew(e, t, n, r, s) {
  var l, u;
  const o = await (t.length > 0 ? Sw(e, t, n, r) : Aw(e, n, r));
  if (!o.ok) {
    const f = await o.text();
    throw console.error("HTTP error response:", o.status, f), new Error(`Error while sending message. Error: ${f}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(xw()).getReader();
  let a = !1;
  try {
    for (; ; ) {
      const { done: f, value: c } = await i.read();
      if (f) break;
      const p = ((l = c.metadata) == null ? void 0 : l.nodeId) || "unknown", d = (u = c.metadata) == null ? void 0 : u.runIndex;
      switch (c.type) {
        case "begin":
          s.onBeginMessage(p, d);
          break;
        case "item":
          a = !0, s.onChunk(c.content ?? "", p, d);
          break;
        case "end":
          s.onEndMessage(p, d);
          break;
        case "error":
          a = !0, s.onChunk(`Error: ${c.content ?? "Unknown error"}`, p, d), s.onEndMessage(p, d);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
  return { hasReceivedChunks: a };
}
async function Sw(e, t, n, r) {
  var o;
  const s = new FormData();
  s.append("action", "sendMessage"), s.append(r.chatSessionKey, n), s.append(r.chatInputKey, e), r.metadata && s.append("metadata", JSON.stringify(r.metadata));
  for (const i of t)
    s.append("files", i);
  return await fetch(r.webhookUrl, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      ...(o = r.webhookConfig) == null ? void 0 : o.headers
    },
    body: s
  });
}
async function Aw(e, t, n) {
  var s;
  const r = {
    action: "sendMessage",
    [n.chatSessionKey]: t,
    [n.chatInputKey]: e,
    ...n.metadata ? { metadata: n.metadata } : {}
  };
  return await fetch(n.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      ...(s = n.webhookConfig) == null ? void 0 : s.headers
    },
    body: JSON.stringify(r)
  });
}
function Tw() {
  const e = /* @__PURE__ */ new Map();
  function t(s, o) {
    const i = e.get(s);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(s, o) {
    let i = e.get(s);
    return i ? i.push(o) : i = [o], e.set(s, i), () => t(s, o);
  }
  function r(s, o) {
    const i = e.get(s);
    i && i.slice().forEach(async (a) => {
      await a(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: r
  };
}
function Mw(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function $w(e, t, n, r) {
  const s = new URL(e).origin, o = s.startsWith("https") ? "wss" : "ws";
  return `${s.replace(/^https?/, o)}/chat?sessionId=${n}&executionId=${t}&isPublic=true`;
}
const Vt = Tw();
class Lw {
  constructor() {
    Ts(this, "nodeRuns", /* @__PURE__ */ new Map());
    Ts(this, "runOrder", []);
    Ts(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const r = this.getRunKey(t, n);
    if (!this.nodeRuns.has(r)) {
      const s = vo();
      return this.nodeRuns.set(r, {
        content: "",
        isComplete: !1,
        message: s
      }), this.runOrder.push(r), s;
    }
    return this.nodeRuns.get(r).message;
  }
  registerRunStart(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.add(r);
  }
  addRunToActive(t, n) {
    const r = this.getRunKey(t, n);
    return this.activeRuns.add(r), this.initializeRun(t, n);
  }
  removeRunFromActive(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.delete(r);
    const s = this.nodeRuns.get(r);
    s && (s.isComplete = !0);
  }
  addChunkToRun(t, n, r) {
    const s = this.getRunKey(t, r), o = this.nodeRuns.get(s);
    if (o) {
      o.content += n;
      const i = {
        ...o.message,
        text: o.content
      };
      return o.message = i, i;
    }
    return null;
  }
  getRunMessage(t, n) {
    const r = this.getRunKey(t, n), s = this.nodeRuns.get(r);
    return (s == null ? void 0 : s.message) ?? null;
  }
  areAllRunsComplete() {
    return Array.from(this.nodeRuns.values()).every((t) => t.isComplete);
  }
  getRunCount() {
    return this.runOrder.length;
  }
  getActiveRunCount() {
    return this.activeRuns.size;
  }
  getAllMessages() {
    return this.runOrder.map((t) => {
      var n;
      return (n = this.nodeRuns.get(t)) == null ? void 0 : n.message;
    }).filter((t) => t !== void 0);
  }
  reset() {
    this.nodeRuns.clear(), this.runOrder = [], this.activeRuns.clear();
  }
}
function vo(e) {
  return {
    id: e ?? Vr(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function Wd(e, t, n) {
  const r = e.findIndex((s) => s.id === t);
  if (r === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[r] = n;
}
function Iw(e, t, n, r, s, o) {
  try {
    if (e === "")
      return;
    if (t) {
      let i = n.getRunMessage(t, o);
      i || (i = n.addRunToActive(t, o), s.value.push(i));
      const a = n.addChunkToRun(t, e, o);
      a && Wd(s.value, a.id, a);
    } else {
      r.value || (r.value = vo(), s.value.push(r.value));
      const i = {
        ...r.value,
        text: r.value.text + e
      };
      Wd(s.value, r.value.id, i), r.value = i;
    }
    Ue(() => {
      Vt.emit("scrollToBottom");
    });
  } catch (i) {
    console.error("Error handling stream chunk:", i);
  }
}
function Ow(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (r) {
    console.error("Error handling node start:", r);
  }
}
function Rw(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (r) {
    console.error("Error handling node complete:", r);
  }
}
function Pw(e, t = []) {
  return {
    id: Vr(),
    text: e,
    sender: "user",
    files: t
  };
}
function Dw(e) {
  let t = e.output ?? e.text ?? e.message ?? "";
  if (t === "" && Object.keys(e).length > 0)
    try {
      t = JSON.stringify(e, null, 2);
    } catch {
    }
  return t;
}
function Bw(e) {
  const { receivedMessage: t, messages: n } = e;
  t.value && n.value.some(
    (s) => s.sender === "bot" && "text" in s && s.text.trim().length > 0
  ) || (t.value = vo(), n.value.push(t.value)), t.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function Nw(e) {
  const { error: t, receivedMessage: n, messages: r } = e;
  n.value ?? (n.value = vo()), n.value.text = "Error: Failed to receive response", r.value.includes(n.value) || r.value.push(n.value), console.error("Chat API error:", t);
}
async function Fw(e) {
  const { text: t, files: n, sessionId: r, options: s, messages: o, receivedMessage: i, streamingManager: a } = e, l = {
    onChunk: (f, c, p) => {
      Iw(f, c, a, i, o, p);
    },
    onBeginMessage: (f, c) => {
      Ow(f, a, c);
    },
    onEndMessage: (f, c) => {
      Rw(f, a, c);
    }
  }, { hasReceivedChunks: u } = await Ew(
    t,
    n,
    r,
    s,
    l
  );
  u || Bw({ receivedMessage: i, messages: o });
}
async function zw(e) {
  const { text: t, files: n, sessionId: r, options: s } = e, o = await Cw(t, n, r, s);
  if (o != null && o.executionStarted)
    return { response: o };
  const i = vo();
  return i.text = Dw(o), { botMessage: i };
}
const qw = {
  install(e, t) {
    e.provide(kg, t);
    const n = W([]), r = W(null), s = W(!1), o = P(
      () => (t.initialMessages ?? []).map((f) => ({
        id: Vr(),
        text: f,
        sender: "bot"
      }))
    );
    async function i(f, c = []) {
      var g;
      const p = Pw(f, c);
      n.value.push(p), s.value = !0, Ue(() => {
        Vt.emit("scrollToBottom");
      });
      const d = W(null), v = new Lw();
      try {
        if (t != null && t.enableStreaming)
          await Fw({
            text: f,
            files: c,
            sessionId: r.value,
            options: t,
            messages: n,
            receivedMessage: d,
            streamingManager: v
          });
        else {
          const C = await zw({
            text: f,
            files: c,
            sessionId: r.value,
            options: t
          });
          if ((g = C.response) != null && g.executionStarted)
            return s.value = !1, C.response;
          C.botMessage && (d.value = C.botMessage, n.value.push(C.botMessage));
        }
      } catch (C) {
        Nw({ error: C, receivedMessage: d, messages: n });
      } finally {
        s.value = !1;
      }
      return Ue(() => {
        Vt.emit("scrollToBottom");
      }), null;
    }
    async function a() {
      if (!t.loadPreviousSession)
        return;
      const f = localStorage.getItem(Ud) ?? Vr(), c = await kw(f, t);
      return n.value = ((c == null ? void 0 : c.data) || []).map((p, d) => ({
        id: `${d}`,
        text: p.kwargs.content,
        sender: p.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (r.value = f), f;
    }
    async function l() {
      r.value = Vr(), localStorage.setItem(Ud, r.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: r,
      waitingForResponse: s,
      loadPreviousSession: a,
      startNewSession: l,
      sendMessage: i
    };
    e.provide(wg, u), e.config.globalProperties.$chat = u;
  }
};
var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ta, Gd;
function Hw() {
  if (Gd) return Ta;
  Gd = 1;
  function e(S) {
    return S instanceof Map ? S.clear = S.delete = S.set = function() {
      throw new Error("map is read-only");
    } : S instanceof Set && (S.add = S.clear = S.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(S), Object.getOwnPropertyNames(S).forEach((R) => {
      const G = S[R], ke = typeof G;
      (ke === "object" || ke === "function") && !Object.isFrozen(G) && e(G);
    }), S;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(R) {
      R.data === void 0 && (R.data = {}), this.data = R.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(S, ...R) {
    const G = /* @__PURE__ */ Object.create(null);
    for (const ke in S)
      G[ke] = S[ke];
    return R.forEach(function(ke) {
      for (const He in ke)
        G[He] = ke[He];
    }), /** @type {T} */
    G;
  }
  const s = "</span>", o = (S) => !!S.scope, i = (S, { prefix: R }) => {
    if (S.startsWith("language:"))
      return S.replace("language:", "language-");
    if (S.includes(".")) {
      const G = S.split(".");
      return [
        `${R}${G.shift()}`,
        ...G.map((ke, He) => `${ke}${"_".repeat(He + 1)}`)
      ].join(" ");
    }
    return `${R}${S}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(R, G) {
      this.buffer = "", this.classPrefix = G.classPrefix, R.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(R) {
      this.buffer += n(R);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(R) {
      if (!o(R)) return;
      const G = i(
        R.scope,
        { prefix: this.classPrefix }
      );
      this.span(G);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(R) {
      o(R) && (this.buffer += s);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(R) {
      this.buffer += `<span class="${R}">`;
    }
  }
  const l = (S = {}) => {
    const R = { children: [] };
    return Object.assign(R, S), R;
  };
  class u {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(R) {
      this.top.children.push(R);
    }
    /** @param {string} scope */
    openNode(R) {
      const G = l({ scope: R });
      this.add(G), this.stack.push(G);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(R) {
      return this.constructor._walk(R, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(R, G) {
      return typeof G == "string" ? R.addText(G) : G.children && (R.openNode(G), G.children.forEach((ke) => this._walk(R, ke)), R.closeNode(G)), R;
    }
    /**
     * @param {Node} node
     */
    static _collapse(R) {
      typeof R != "string" && R.children && (R.children.every((G) => typeof G == "string") ? R.children = [R.children.join("")] : R.children.forEach((G) => {
        u._collapse(G);
      }));
    }
  }
  class f extends u {
    /**
     * @param {*} options
     */
    constructor(R) {
      super(), this.options = R;
    }
    /**
     * @param {string} text
     */
    addText(R) {
      R !== "" && this.add(R);
    }
    /** @param {string} scope */
    startScope(R) {
      this.openNode(R);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(R, G) {
      const ke = R.root;
      G && (ke.scope = `language:${G}`), this.add(ke);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function c(S) {
    return S ? typeof S == "string" ? S : S.source : null;
  }
  function p(S) {
    return g("(?=", S, ")");
  }
  function d(S) {
    return g("(?:", S, ")*");
  }
  function v(S) {
    return g("(?:", S, ")?");
  }
  function g(...S) {
    return S.map((G) => c(G)).join("");
  }
  function C(S) {
    const R = S[S.length - 1];
    return typeof R == "object" && R.constructor === Object ? (S.splice(S.length - 1, 1), R) : {};
  }
  function h(...S) {
    return "(" + (C(S).capture ? "" : "?:") + S.map((ke) => c(ke)).join("|") + ")";
  }
  function k(S) {
    return new RegExp(S.toString() + "|").exec("").length - 1;
  }
  function w(S, R) {
    const G = S && S.exec(R);
    return G && G.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(S, { joinWith: R }) {
    let G = 0;
    return S.map((ke) => {
      G += 1;
      const He = G;
      let Ge = c(ke), be = "";
      for (; Ge.length > 0; ) {
        const de = _.exec(Ge);
        if (!de) {
          be += Ge;
          break;
        }
        be += Ge.substring(0, de.index), Ge = Ge.substring(de.index + de[0].length), de[0][0] === "\\" && de[1] ? be += "\\" + String(Number(de[1]) + He) : (be += de[0], de[0] === "(" && G++);
      }
      return be;
    }).map((ke) => `(${ke})`).join(R);
  }
  const x = /\b\B/, M = "[a-zA-Z]\\w*", $ = "[a-zA-Z_]\\w*", O = "\\b\\d+(\\.\\d+)?", D = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", N = "\\b(0b[01]+)", B = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", oe = (S = {}) => {
    const R = /^#![ ]*\//;
    return S.binary && (S.begin = g(
      R,
      /.*\b/,
      S.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: R,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (G, ke) => {
        G.index !== 0 && ke.ignoreMatch();
      }
    }, S);
  }, z = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, ie = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [z]
  }, j = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [z]
  }, V = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(S, R, G = {}) {
    const ke = r(
      {
        scope: "comment",
        begin: S,
        end: R,
        contains: []
      },
      G
    );
    ke.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const He = h(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return ke.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          He,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ke;
  }, J = H("//", "$"), I = H("/\\*", "\\*/"), Z = H("#", "$"), K = {
    scope: "number",
    begin: O,
    relevance: 0
  }, me = {
    scope: "number",
    begin: D,
    relevance: 0
  }, Se = {
    scope: "number",
    begin: N,
    relevance: 0
  }, Re = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      z,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [z]
      }
    ]
  }, Pe = {
    scope: "title",
    begin: M,
    relevance: 0
  }, We = {
    scope: "title",
    begin: $,
    relevance: 0
  }, qe = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + $,
    relevance: 0
  };
  var pe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ie,
    BACKSLASH_ESCAPE: z,
    BINARY_NUMBER_MODE: Se,
    BINARY_NUMBER_RE: N,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: I,
    C_LINE_COMMENT_MODE: J,
    C_NUMBER_MODE: me,
    C_NUMBER_RE: D,
    END_SAME_AS_BEGIN: function(S) {
      return Object.assign(
        S,
        {
          /** @type {ModeCallback} */
          "on:begin": (R, G) => {
            G.data._beginMatch = R[1];
          },
          /** @type {ModeCallback} */
          "on:end": (R, G) => {
            G.data._beginMatch !== R[1] && G.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Z,
    IDENT_RE: M,
    MATCH_NOTHING_RE: x,
    METHOD_GUARD: qe,
    NUMBER_MODE: K,
    NUMBER_RE: O,
    PHRASAL_WORDS_MODE: V,
    QUOTE_STRING_MODE: j,
    REGEXP_MODE: Re,
    RE_STARTERS_RE: B,
    SHEBANG: oe,
    TITLE_MODE: Pe,
    UNDERSCORE_IDENT_RE: $,
    UNDERSCORE_TITLE_MODE: We
  });
  function Me(S, R) {
    S.input[S.index - 1] === "." && R.ignoreMatch();
  }
  function T(S, R) {
    S.className !== void 0 && (S.scope = S.className, delete S.className);
  }
  function L(S, R) {
    R && S.beginKeywords && (S.begin = "\\b(" + S.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", S.__beforeBegin = Me, S.keywords = S.keywords || S.beginKeywords, delete S.beginKeywords, S.relevance === void 0 && (S.relevance = 0));
  }
  function q(S, R) {
    Array.isArray(S.illegal) && (S.illegal = h(...S.illegal));
  }
  function Y(S, R) {
    if (S.match) {
      if (S.begin || S.end) throw new Error("begin & end are not supported with match");
      S.begin = S.match, delete S.match;
    }
  }
  function X(S, R) {
    S.relevance === void 0 && (S.relevance = 1);
  }
  const ee = (S, R) => {
    if (!S.beforeMatch) return;
    if (S.starts) throw new Error("beforeMatch cannot be used with starts");
    const G = Object.assign({}, S);
    Object.keys(S).forEach((ke) => {
      delete S[ke];
    }), S.keywords = G.keywords, S.begin = g(G.beforeMatch, p(G.begin)), S.starts = {
      relevance: 0,
      contains: [
        Object.assign(G, { endsParent: !0 })
      ]
    }, S.relevance = 0, delete G.beforeMatch;
  }, ae = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], se = "keyword";
  function ne(S, R, G = se) {
    const ke = /* @__PURE__ */ Object.create(null);
    return typeof S == "string" ? He(G, S.split(" ")) : Array.isArray(S) ? He(G, S) : Object.keys(S).forEach(function(Ge) {
      Object.assign(
        ke,
        ne(S[Ge], R, Ge)
      );
    }), ke;
    function He(Ge, be) {
      R && (be = be.map((de) => de.toLowerCase())), be.forEach(function(de) {
        const Le = de.split("|");
        ke[Le[0]] = [Ge, te(Le[0], Le[1])];
      });
    }
  }
  function te(S, R) {
    return R ? Number(R) : ye(S) ? 0 : 1;
  }
  function ye(S) {
    return ae.includes(S.toLowerCase());
  }
  const fe = {}, ve = (S) => {
    console.error(S);
  }, U = (S, ...R) => {
    console.log(`WARN: ${S}`, ...R);
  }, ce = (S, R) => {
    fe[`${S}/${R}`] || (console.log(`Deprecated as of ${S}. ${R}`), fe[`${S}/${R}`] = !0);
  }, Ae = new Error();
  function Oe(S, R, { key: G }) {
    let ke = 0;
    const He = S[G], Ge = {}, be = {};
    for (let de = 1; de <= R.length; de++)
      be[de + ke] = He[de], Ge[de + ke] = !0, ke += k(R[de - 1]);
    S[G] = be, S[G]._emit = Ge, S[G]._multi = !0;
  }
  function ut(S) {
    if (Array.isArray(S.begin)) {
      if (S.skip || S.excludeBegin || S.returnBegin)
        throw ve("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ae;
      if (typeof S.beginScope != "object" || S.beginScope === null)
        throw ve("beginScope must be object"), Ae;
      Oe(S, S.begin, { key: "beginScope" }), S.begin = E(S.begin, { joinWith: "" });
    }
  }
  function ht(S) {
    if (Array.isArray(S.end)) {
      if (S.skip || S.excludeEnd || S.returnEnd)
        throw ve("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ae;
      if (typeof S.endScope != "object" || S.endScope === null)
        throw ve("endScope must be object"), Ae;
      Oe(S, S.end, { key: "endScope" }), S.end = E(S.end, { joinWith: "" });
    }
  }
  function kt(S) {
    S.scope && typeof S.scope == "object" && S.scope !== null && (S.beginScope = S.scope, delete S.scope);
  }
  function Et(S) {
    kt(S), typeof S.beginScope == "string" && (S.beginScope = { _wrap: S.beginScope }), typeof S.endScope == "string" && (S.endScope = { _wrap: S.endScope }), ut(S), ht(S);
  }
  function gn(S) {
    function R(be, de) {
      return new RegExp(
        c(be),
        "m" + (S.case_insensitive ? "i" : "") + (S.unicodeRegex ? "u" : "") + (de ? "g" : "")
      );
    }
    class G {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(de, Le) {
        Le.position = this.position++, this.matchIndexes[this.matchAt] = Le, this.regexes.push([Le, de]), this.matchAt += k(de) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const de = this.regexes.map((Le) => Le[1]);
        this.matcherRe = R(E(de, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(de) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Le = this.matcherRe.exec(de);
        if (!Le)
          return null;
        const yt = Le.findIndex((Jt, ca) => ca > 0 && Jt !== void 0), Ze = this.matchIndexes[yt];
        return Le.splice(0, yt), Object.assign(Le, Ze);
      }
    }
    class ke {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(de) {
        if (this.multiRegexes[de]) return this.multiRegexes[de];
        const Le = new G();
        return this.rules.slice(de).forEach(([yt, Ze]) => Le.addRule(yt, Ze)), Le.compile(), this.multiRegexes[de] = Le, Le;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(de, Le) {
        this.rules.push([de, Le]), Le.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(de) {
        const Le = this.getMatcher(this.regexIndex);
        Le.lastIndex = this.lastIndex;
        let yt = Le.exec(de);
        if (this.resumingScanAtSamePosition() && !(yt && yt.index === this.lastIndex)) {
          const Ze = this.getMatcher(0);
          Ze.lastIndex = this.lastIndex + 1, yt = Ze.exec(de);
        }
        return yt && (this.regexIndex += yt.position + 1, this.regexIndex === this.count && this.considerAll()), yt;
      }
    }
    function He(be) {
      const de = new ke();
      return be.contains.forEach((Le) => de.addRule(Le.begin, { rule: Le, type: "begin" })), be.terminatorEnd && de.addRule(be.terminatorEnd, { type: "end" }), be.illegal && de.addRule(be.illegal, { type: "illegal" }), de;
    }
    function Ge(be, de) {
      const Le = (
        /** @type CompiledMode */
        be
      );
      if (be.isCompiled) return Le;
      [
        T,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Y,
        Et,
        ee
      ].forEach((Ze) => Ze(be, de)), S.compilerExtensions.forEach((Ze) => Ze(be, de)), be.__beforeBegin = null, [
        L,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        q,
        // default to 1 relevance if not specified
        X
      ].forEach((Ze) => Ze(be, de)), be.isCompiled = !0;
      let yt = null;
      return typeof be.keywords == "object" && be.keywords.$pattern && (be.keywords = Object.assign({}, be.keywords), yt = be.keywords.$pattern, delete be.keywords.$pattern), yt = yt || /\w+/, be.keywords && (be.keywords = ne(be.keywords, S.case_insensitive)), Le.keywordPatternRe = R(yt, !0), de && (be.begin || (be.begin = /\B|\b/), Le.beginRe = R(Le.begin), !be.end && !be.endsWithParent && (be.end = /\B|\b/), be.end && (Le.endRe = R(Le.end)), Le.terminatorEnd = c(Le.end) || "", be.endsWithParent && de.terminatorEnd && (Le.terminatorEnd += (be.end ? "|" : "") + de.terminatorEnd)), be.illegal && (Le.illegalRe = R(
        /** @type {RegExp | string} */
        be.illegal
      )), be.contains || (be.contains = []), be.contains = [].concat(...be.contains.map(function(Ze) {
        return mt(Ze === "self" ? be : Ze);
      })), be.contains.forEach(function(Ze) {
        Ge(
          /** @type Mode */
          Ze,
          Le
        );
      }), be.starts && Ge(be.starts, de), Le.matcher = He(Le), Le;
    }
    if (S.compilerExtensions || (S.compilerExtensions = []), S.contains && S.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return S.classNameAliases = r(S.classNameAliases || {}), Ge(
      /** @type Mode */
      S
    );
  }
  function an(S) {
    return S ? S.endsWithParent || an(S.starts) : !1;
  }
  function mt(S) {
    return S.variants && !S.cachedVariants && (S.cachedVariants = S.variants.map(function(R) {
      return r(S, { variants: null }, R);
    })), S.cachedVariants ? S.cachedVariants : an(S) ? r(S, { starts: S.starts ? r(S.starts) : null }) : Object.isFrozen(S) ? r(S) : S;
  }
  var $t = "11.11.1";
  class $n extends Error {
    constructor(R, G) {
      super(R), this.name = "HTMLInjectionError", this.html = G;
    }
  }
  const lr = n, Qr = r, $r = Symbol("nomatch"), Mo = 7, eo = function(S) {
    const R = /* @__PURE__ */ Object.create(null), G = /* @__PURE__ */ Object.create(null), ke = [];
    let He = !0;
    const Ge = "Could not find the language '{}', did you forget to load/include a language module?", be = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let de = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: f
    };
    function Le(le) {
      return de.noHighlightRe.test(le);
    }
    function yt(le) {
      let $e = le.className + " ";
      $e += le.parentNode ? le.parentNode.className : "";
      const Ve = de.languageDetectRe.exec($e);
      if (Ve) {
        const at = cr(Ve[1]);
        return at || (U(Ge.replace("{}", Ve[1])), U("Falling back to no-highlight mode for this block.", le)), at ? Ve[1] : "no-highlight";
      }
      return $e.split(/\s+/).find((at) => Le(at) || cr(at));
    }
    function Ze(le, $e, Ve) {
      let at = "", wt = "";
      typeof $e == "object" ? (at = le, Ve = $e.ignoreIllegals, wt = $e.language) : (ce("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ce("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), wt = le, at = $e), Ve === void 0 && (Ve = !0);
      const mn = {
        code: at,
        language: wt
      };
      xs("before:highlight", mn);
      const ur = mn.result ? mn.result : Jt(mn.language, mn.code, Ve);
      return ur.code = mn.code, xs("after:highlight", ur), ur;
    }
    function Jt(le, $e, Ve, at) {
      const wt = /* @__PURE__ */ Object.create(null);
      function mn(ge, xe) {
        return ge.keywords[xe];
      }
      function ur() {
        if (!De.keywords) {
          St.addText(lt);
          return;
        }
        let ge = 0;
        De.keywordPatternRe.lastIndex = 0;
        let xe = De.keywordPatternRe.exec(lt), Ne = "";
        for (; xe; ) {
          Ne += lt.substring(ge, xe.index);
          const rt = In.case_insensitive ? xe[0].toLowerCase() : xe[0], Lt = mn(De, rt);
          if (Lt) {
            const [Fn, jy] = Lt;
            if (St.addText(Ne), Ne = "", wt[rt] = (wt[rt] || 0) + 1, wt[rt] <= Mo && (As += jy), Fn.startsWith("_"))
              Ne += xe[0];
            else {
              const Vy = In.classNameAliases[Fn] || Fn;
              Ln(xe[0], Vy);
            }
          } else
            Ne += xe[0];
          ge = De.keywordPatternRe.lastIndex, xe = De.keywordPatternRe.exec(lt);
        }
        Ne += lt.substring(ge), St.addText(Ne);
      }
      function Es() {
        if (lt === "") return;
        let ge = null;
        if (typeof De.subLanguage == "string") {
          if (!R[De.subLanguage]) {
            St.addText(lt);
            return;
          }
          ge = Jt(De.subLanguage, lt, !0, sd[De.subLanguage]), sd[De.subLanguage] = /** @type {CompiledMode} */
          ge._top;
        } else
          ge = ua(lt, De.subLanguage.length ? De.subLanguage : null);
        De.relevance > 0 && (As += ge.relevance), St.__addSublanguage(ge._emitter, ge.language);
      }
      function Qt() {
        De.subLanguage != null ? Es() : ur(), lt = "";
      }
      function Ln(ge, xe) {
        ge !== "" && (St.startScope(xe), St.addText(ge), St.endScope());
      }
      function td(ge, xe) {
        let Ne = 1;
        const rt = xe.length - 1;
        for (; Ne <= rt; ) {
          if (!ge._emit[Ne]) {
            Ne++;
            continue;
          }
          const Lt = In.classNameAliases[ge[Ne]] || ge[Ne], Fn = xe[Ne];
          Lt ? Ln(Fn, Lt) : (lt = Fn, ur(), lt = ""), Ne++;
        }
      }
      function nd(ge, xe) {
        return ge.scope && typeof ge.scope == "string" && St.openNode(In.classNameAliases[ge.scope] || ge.scope), ge.beginScope && (ge.beginScope._wrap ? (Ln(lt, In.classNameAliases[ge.beginScope._wrap] || ge.beginScope._wrap), lt = "") : ge.beginScope._multi && (td(ge.beginScope, xe), lt = "")), De = Object.create(ge, { parent: { value: De } }), De;
      }
      function rd(ge, xe, Ne) {
        let rt = w(ge.endRe, Ne);
        if (rt) {
          if (ge["on:end"]) {
            const Lt = new t(ge);
            ge["on:end"](xe, Lt), Lt.isMatchIgnored && (rt = !1);
          }
          if (rt) {
            for (; ge.endsParent && ge.parent; )
              ge = ge.parent;
            return ge;
          }
        }
        if (ge.endsWithParent)
          return rd(ge.parent, xe, Ne);
      }
      function Ny(ge) {
        return De.matcher.regexIndex === 0 ? (lt += ge[0], 1) : (ha = !0, 0);
      }
      function Fy(ge) {
        const xe = ge[0], Ne = ge.rule, rt = new t(Ne), Lt = [Ne.__beforeBegin, Ne["on:begin"]];
        for (const Fn of Lt)
          if (Fn && (Fn(ge, rt), rt.isMatchIgnored))
            return Ny(xe);
        return Ne.skip ? lt += xe : (Ne.excludeBegin && (lt += xe), Qt(), !Ne.returnBegin && !Ne.excludeBegin && (lt = xe)), nd(Ne, ge), Ne.returnBegin ? 0 : xe.length;
      }
      function zy(ge) {
        const xe = ge[0], Ne = $e.substring(ge.index), rt = rd(De, ge, Ne);
        if (!rt)
          return $r;
        const Lt = De;
        De.endScope && De.endScope._wrap ? (Qt(), Ln(xe, De.endScope._wrap)) : De.endScope && De.endScope._multi ? (Qt(), td(De.endScope, ge)) : Lt.skip ? lt += xe : (Lt.returnEnd || Lt.excludeEnd || (lt += xe), Qt(), Lt.excludeEnd && (lt = xe));
        do
          De.scope && St.closeNode(), !De.skip && !De.subLanguage && (As += De.relevance), De = De.parent;
        while (De !== rt.parent);
        return rt.starts && nd(rt.starts, ge), Lt.returnEnd ? 0 : xe.length;
      }
      function qy() {
        const ge = [];
        for (let xe = De; xe !== In; xe = xe.parent)
          xe.scope && ge.unshift(xe.scope);
        ge.forEach((xe) => St.openNode(xe));
      }
      let Ss = {};
      function od(ge, xe) {
        const Ne = xe && xe[0];
        if (lt += ge, Ne == null)
          return Qt(), 0;
        if (Ss.type === "begin" && xe.type === "end" && Ss.index === xe.index && Ne === "") {
          if (lt += $e.slice(xe.index, xe.index + 1), !He) {
            const rt = new Error(`0 width match regex (${le})`);
            throw rt.languageName = le, rt.badRule = Ss.rule, rt;
          }
          return 1;
        }
        if (Ss = xe, xe.type === "begin")
          return Fy(xe);
        if (xe.type === "illegal" && !Ve) {
          const rt = new Error('Illegal lexeme "' + Ne + '" for mode "' + (De.scope || "<unnamed>") + '"');
          throw rt.mode = De, rt;
        } else if (xe.type === "end") {
          const rt = zy(xe);
          if (rt !== $r)
            return rt;
        }
        if (xe.type === "illegal" && Ne === "")
          return lt += `
`, 1;
        if (pa > 1e5 && pa > xe.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return lt += Ne, Ne.length;
      }
      const In = cr(le);
      if (!In)
        throw ve(Ge.replace("{}", le)), new Error('Unknown language: "' + le + '"');
      const Hy = gn(In);
      let da = "", De = at || Hy;
      const sd = {}, St = new de.__emitter(de);
      qy();
      let lt = "", As = 0, Lr = 0, pa = 0, ha = !1;
      try {
        if (In.__emitTokens)
          In.__emitTokens($e, St);
        else {
          for (De.matcher.considerAll(); ; ) {
            pa++, ha ? ha = !1 : De.matcher.considerAll(), De.matcher.lastIndex = Lr;
            const ge = De.matcher.exec($e);
            if (!ge) break;
            const xe = $e.substring(Lr, ge.index), Ne = od(xe, ge);
            Lr = ge.index + Ne;
          }
          od($e.substring(Lr));
        }
        return St.finalize(), da = St.toHTML(), {
          language: le,
          value: da,
          relevance: As,
          illegal: !1,
          _emitter: St,
          _top: De
        };
      } catch (ge) {
        if (ge.message && ge.message.includes("Illegal"))
          return {
            language: le,
            value: lr($e),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ge.message,
              index: Lr,
              context: $e.slice(Lr - 100, Lr + 100),
              mode: ge.mode,
              resultSoFar: da
            },
            _emitter: St
          };
        if (He)
          return {
            language: le,
            value: lr($e),
            illegal: !1,
            relevance: 0,
            errorRaised: ge,
            _emitter: St,
            _top: De
          };
        throw ge;
      }
    }
    function ca(le) {
      const $e = {
        value: lr(le),
        illegal: !1,
        relevance: 0,
        _top: be,
        _emitter: new de.__emitter(de)
      };
      return $e._emitter.addText(le), $e;
    }
    function ua(le, $e) {
      $e = $e || de.languages || Object.keys(R);
      const Ve = ca(le), at = $e.filter(cr).filter(ed).map(
        (Qt) => Jt(Qt, le, !1)
      );
      at.unshift(Ve);
      const wt = at.sort((Qt, Ln) => {
        if (Qt.relevance !== Ln.relevance) return Ln.relevance - Qt.relevance;
        if (Qt.language && Ln.language) {
          if (cr(Qt.language).supersetOf === Ln.language)
            return 1;
          if (cr(Ln.language).supersetOf === Qt.language)
            return -1;
        }
        return 0;
      }), [mn, ur] = wt, Es = mn;
      return Es.secondBest = ur, Es;
    }
    function Ay(le, $e, Ve) {
      const at = $e && G[$e] || Ve;
      le.classList.add("hljs"), le.classList.add(`language-${at}`);
    }
    function fa(le) {
      let $e = null;
      const Ve = yt(le);
      if (Le(Ve)) return;
      if (xs(
        "before:highlightElement",
        { el: le, language: Ve }
      ), le.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", le);
        return;
      }
      if (le.children.length > 0 && (de.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(le)), de.throwUnescapedHTML))
        throw new $n(
          "One of your code blocks includes unescaped HTML.",
          le.innerHTML
        );
      $e = le;
      const at = $e.textContent, wt = Ve ? Ze(at, { language: Ve, ignoreIllegals: !0 }) : ua(at);
      le.innerHTML = wt.value, le.dataset.highlighted = "yes", Ay(le, Ve, wt.language), le.result = {
        language: wt.language,
        // TODO: remove with version 11.0
        re: wt.relevance,
        relevance: wt.relevance
      }, wt.secondBest && (le.secondBest = {
        language: wt.secondBest.language,
        relevance: wt.secondBest.relevance
      }), xs("after:highlightElement", { el: le, result: wt, text: at });
    }
    function Ty(le) {
      de = Qr(de, le);
    }
    const My = () => {
      Cs(), ce("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function $y() {
      Cs(), ce("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Jf = !1;
    function Cs() {
      function le() {
        Cs();
      }
      if (document.readyState === "loading") {
        Jf || window.addEventListener("DOMContentLoaded", le, !1), Jf = !0;
        return;
      }
      document.querySelectorAll(de.cssSelector).forEach(fa);
    }
    function Ly(le, $e) {
      let Ve = null;
      try {
        Ve = $e(S);
      } catch (at) {
        if (ve("Language definition for '{}' could not be registered.".replace("{}", le)), He)
          ve(at);
        else
          throw at;
        Ve = be;
      }
      Ve.name || (Ve.name = le), R[le] = Ve, Ve.rawDefinition = $e.bind(null, S), Ve.aliases && Qf(Ve.aliases, { languageName: le });
    }
    function Iy(le) {
      delete R[le];
      for (const $e of Object.keys(G))
        G[$e] === le && delete G[$e];
    }
    function Oy() {
      return Object.keys(R);
    }
    function cr(le) {
      return le = (le || "").toLowerCase(), R[le] || R[G[le]];
    }
    function Qf(le, { languageName: $e }) {
      typeof le == "string" && (le = [le]), le.forEach((Ve) => {
        G[Ve.toLowerCase()] = $e;
      });
    }
    function ed(le) {
      const $e = cr(le);
      return $e && !$e.disableAutodetect;
    }
    function Ry(le) {
      le["before:highlightBlock"] && !le["before:highlightElement"] && (le["before:highlightElement"] = ($e) => {
        le["before:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      }), le["after:highlightBlock"] && !le["after:highlightElement"] && (le["after:highlightElement"] = ($e) => {
        le["after:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      });
    }
    function Py(le) {
      Ry(le), ke.push(le);
    }
    function Dy(le) {
      const $e = ke.indexOf(le);
      $e !== -1 && ke.splice($e, 1);
    }
    function xs(le, $e) {
      const Ve = le;
      ke.forEach(function(at) {
        at[Ve] && at[Ve]($e);
      });
    }
    function By(le) {
      return ce("10.7.0", "highlightBlock will be removed entirely in v12.0"), ce("10.7.0", "Please use highlightElement now."), fa(le);
    }
    Object.assign(S, {
      highlight: Ze,
      highlightAuto: ua,
      highlightAll: Cs,
      highlightElement: fa,
      // TODO: Remove with v12 API
      highlightBlock: By,
      configure: Ty,
      initHighlighting: My,
      initHighlightingOnLoad: $y,
      registerLanguage: Ly,
      unregisterLanguage: Iy,
      listLanguages: Oy,
      getLanguage: cr,
      registerAliases: Qf,
      autoDetection: ed,
      inherit: Qr,
      addPlugin: Py,
      removePlugin: Dy
    }), S.debugMode = function() {
      He = !1;
    }, S.safeMode = function() {
      He = !0;
    }, S.versionString = $t, S.regex = {
      concat: g,
      lookahead: p,
      either: h,
      optional: v,
      anyNumberOfTimes: d
    };
    for (const le in pe)
      typeof pe[le] == "object" && e(pe[le]);
    return Object.assign(S, pe), S;
  }, F = eo({});
  return F.newInstance = () => eo({}), Ta = F, F.HighlightJS = F, F.default = F, Ta;
}
var jw = /* @__PURE__ */ Hw();
const Vn = /* @__PURE__ */ cf(jw), Zd = "[A-Za-z$_][0-9A-Za-z$_]*", Vw = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Uw = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Eg = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Sg = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ag = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Kw = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Ww = [].concat(
  Ag,
  Eg,
  Sg
);
function Tg(e) {
  const t = e.regex, n = (H, { after: J }) => {
    const I = "</" + H[0].slice(1);
    return H.input.indexOf(I, J) !== -1;
  }, r = Zd, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, J) => {
      const I = H[0].length + H.index, Z = H.input[I];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        J.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: I }) || J.ignoreMatch());
      let K;
      const me = H.input.substring(I);
      if (K = me.match(/^\s*=/)) {
        J.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        J.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Zd,
    keyword: Vw,
    literal: Uw,
    built_in: Ww,
    "variable.language": Kw
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, w = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    v,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = w.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(w)
  });
  const _ = [].concat(k, p.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: E
  }, M = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Eg,
        ...Sg
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      B([
        ...Ag,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, z = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      v,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      z,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      N,
      M,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Mg(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, s = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [s]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [s]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          a,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  l,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      s,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const Gw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Zw(e, t) {
  return y(), A("svg", Gw, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const Xw = { name: "mdi-close", render: Zw }, Tr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Yw = {}, Jw = { class: "chat-button" };
function Qw(e, t) {
  return y(), A("button", Jw, [
    we(e.$slots, "default")
  ]);
}
const ek = /* @__PURE__ */ Tr(Yw, [["render", Qw]]);
function uf() {
  return ze(wg);
}
function bs() {
  return {
    options: ze(kg)
  };
}
function Hi() {
  const { options: e } = bs(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(s) {
    var i, a;
    const o = (a = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : a[s];
    return bt(o) ? o.value : o ?? s;
  }
  function r(s) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[s]);
  }
  return { t: n, te: r };
}
const tk = { class: "chat-get-started" }, nk = /* @__PURE__ */ re({
  __name: "GetStarted",
  setup(e) {
    const { t } = Hi();
    return (n, r) => (y(), A("div", tk, [
      Ce(ek, {
        onClick: r[0] || (r[0] = (s) => n.$emit("click:button"))
      }, {
        default: he(() => [
          Zr(Je(b(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), rk = {}, ok = { class: "chat-powered-by" };
function sk(e, t) {
  return y(), A("div", ok, t[0] || (t[0] = [
    Zr(" Powered by "),
    m("a", { href: "https://n8n.io?utm_source=n8n-external&utm_medium=widget-powered-by" }, "n8n", -1)
  ]));
}
const ik = /* @__PURE__ */ Tr(rk, [["render", sk]]), ak = { class: "chat-get-started-footer" }, lk = { key: 0 }, ck = /* @__PURE__ */ re({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = Hi();
    return (r, s) => (y(), A("div", ak, [
      b(n)("footer") ? (y(), A("div", lk, Je(b(t)("footer")), 1)) : _e("", !0),
      Ce(ik)
    ]));
  }
});
function uk(e) {
  return ju() ? (l1(e), !0) : !1;
}
function fk() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const o = () => t(s);
      return uk(o), {
        off: o
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((o) => o(...s)))
  };
}
const dk = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const pk = (e, t) => Object.prototype.hasOwnProperty.call(e, t), hk = dk ? window.document : void 0, gk = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function mk(e = {}) {
  const {
    document: t = hk
  } = e, n = W(null), { on: r, trigger: s } = fk();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (l) => {
    const u = l.target;
    n.value = u.files, s(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", s(null));
  }, a = (l) => {
    if (!o)
      return;
    const u = {
      ...gk,
      ...e,
      ...l
    };
    o.multiple = u.multiple, o.accept = u.accept, o.webkitdirectory = u.directory, pk(u, "capture") && (o.capture = u.capture), u.reset && i(), o.click();
  };
  return {
    files: Oi(n),
    open: a,
    reset: i,
    onChange: r
  };
}
const vk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bk(e, t) {
  return y(), A("svg", vk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const _k = { name: "mdi-paperclip", render: bk }, yk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wk(e, t) {
  return y(), A("svg", yk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const kk = { name: "mdi-send", render: wk }, Ck = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xk(e, t) {
  return y(), A("svg", Ck, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const Ek = { name: "mdi-closeThick", render: xk }, Sk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ak(e, t) {
  return y(), A("svg", Sk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const Tk = { name: "mdi-fileImage", render: Ak }, Mk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $k(e, t) {
  return y(), A("svg", Mk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const Lk = { name: "mdi-fileMusic", render: $k }, Ik = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ok(e, t) {
  return y(), A("svg", Ik, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const Xd = { name: "mdi-fileText", render: Ok }, Rk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pk(e, t) {
  return y(), A("svg", Rk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const Dk = { name: "mdi-fileVideo", render: Pk }, Bk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nk(e, t) {
  return y(), A("svg", Bk, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const Fk = { name: "mdi-openInNew", render: Nk }, zk = { class: "chat-file-name" }, qk = /* @__PURE__ */ re({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = {
      document: Xd,
      audio: Lk,
      image: Tk,
      video: Dk
    }, o = P(() => {
      var u;
      const l = (u = n.file) == null ? void 0 : u.type.split("/")[0];
      return s[l] || Xd;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function a() {
      r("remove", n.file);
    }
    return (l, u) => (y(), A("div", {
      class: "chat-file",
      onClick: i
    }, [
      Ce(b(o)),
      m("p", zk, Je(l.file.name), 1),
      l.isRemovable ? (y(), A("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: nn(a, ["stop"])
      }, [
        Ce(b(Ek))
      ])) : l.isPreviewable ? (y(), ue(b(Fk), {
        key: 1,
        class: "chat-file-preview"
      })) : _e("", !0)
    ]));
  }
}), $g = /* @__PURE__ */ Tr(qk, [["__scopeId", "data-v-e0d57af7"]]), Hk = { class: "chat-inputs" }, jk = {
  key: 0,
  class: "chat-input-left-panel"
}, Vk = ["disabled", "placeholder"], Uk = { class: "chat-inputs-controls" }, Kk = ["disabled"], Wk = ["disabled"], Gk = {
  key: 0,
  class: "chat-files"
}, Zk = /* @__PURE__ */ re({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown", "escapeKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Hi(), s = t, { options: o } = bs(), i = uf(), { waitingForResponse: a } = i, l = W(null), u = W(null), f = W(""), c = W(!1), p = W(null), d = W(!1), v = P(() => {
      var I;
      return d.value ? !1 : f.value === "" || b(a) || ((I = o.disabled) == null ? void 0 : I.value) === !0;
    }), g = P(() => {
      var I;
      return ((I = o.disabled) == null ? void 0 : I.value) === !0;
    }), C = P(
      () => {
        var I;
        return h.value && b(a) && !((I = o.disabled) != null && I.value);
      }
    ), h = P(() => b(o.allowFileUploads) === !0), k = P(() => b(o.allowedFilesMimeTypes)), w = P(() => ({
      "--controls-count": h.value ? 2 : 1
    })), {
      open: _,
      reset: E,
      onChange: x
    } = mk({
      multiple: !0,
      reset: !1
    });
    x((I) => {
      if (!I) return;
      const Z = new DataTransfer();
      if (l.value)
        for (let K = 0; K < l.value.length; K++)
          Z.items.add(l.value[K]);
      for (let K = 0; K < I.length; K++)
        Z.items.add(I[K]);
      l.value = Z.files;
    }), it(() => {
      Vt.on("focusInput", $), Vt.on("blurInput", M), Vt.on("setInputValue", O), u.value && (p.value = new ResizeObserver((I) => {
        for (const Z of I)
          Z.target === u.value && J();
      }), p.value.observe(u.value));
    }), Ni(() => {
      Vt.off("focusInput", $), Vt.off("blurInput", M), Vt.off("setInputValue", O), p.value && (p.value.disconnect(), p.value = null);
    });
    function M() {
      u.value && u.value.blur();
    }
    function $() {
      u.value && u.value.focus();
    }
    function O(I) {
      f.value = I, $();
    }
    function D() {
      if (l.value) {
        const I = Array.from(l.value);
        return E(), l.value = null, I;
      }
      return [];
    }
    function N(I) {
      if (o.webhookUrl && i.currentSessionId.value)
        try {
          const Z = $w(
            o.webhookUrl,
            I,
            i.currentSessionId.value,
            !0
          );
          i.ws = new WebSocket(Z), i.ws.onmessage = (K) => {
            var Se;
            if (K.data === "n8n|heartbeat") {
              (Se = i.ws) == null || Se.send("n8n|heartbeat-ack");
              return;
            }
            if (K.data === "n8n|continue") {
              d.value = !1, i.waitingForResponse.value = !0;
              return;
            }
            const me = {
              id: Vr(),
              text: K.data,
              sender: "bot"
            };
            i.messages.value.push(me), d.value = !0, i.waitingForResponse.value = !1;
          }, i.ws.onclose = () => {
            i.ws = null, d.value = !1, i.waitingForResponse.value = !1;
          };
        } catch (Z) {
          console.error("Error setting up websocket connection", Z);
        }
    }
    async function B(I) {
      if (!I || I.length === 0) return [];
      const Z = I.map(async (K) => new Promise((me, Se) => {
        const Re = new FileReader();
        Re.onload = () => me({
          name: K.name,
          type: K.type,
          data: Re.result
        }), Re.onerror = () => {
          var Pe;
          return Se(new Error(`Error reading file: ${((Pe = Re.error) == null ? void 0 : Pe.message) ?? "Unknown error"}`));
        }, Re.readAsDataURL(K);
      }));
      return await Promise.all(Z);
    }
    async function oe(I, Z) {
      const K = {
        id: Vr(),
        text: Z,
        sender: "user",
        files: l.value ? D() : void 0
      };
      i.messages.value.push(K), I.send(
        JSON.stringify({
          sessionId: i.currentSessionId.value,
          action: "sendMessage",
          chatInput: Z,
          files: await B(K.files)
        })
      ), i.waitingForResponse.value = !0, d.value = !1;
    }
    async function z(I) {
      if (I.preventDefault(), v.value)
        return;
      const Z = f.value;
      if (f.value = "", c.value = !0, i.ws && d.value) {
        await oe(i.ws, Z);
        return;
      }
      const K = await i.sendMessage(Z, D());
      K != null && K.executionId && N(K.executionId), c.value = !1;
    }
    async function ie(I) {
      I.shiftKey || I.isComposing || (await z(I), J());
    }
    function j(I) {
      if (!l.value) return;
      const Z = new DataTransfer();
      for (let K = 0; K < l.value.length; K++) {
        const me = l.value[K];
        I.name !== me.name && Z.items.add(me);
      }
      E(), l.value = Z.files;
    }
    function V(I) {
      I.key === "ArrowUp" || I.key === "ArrowDown" ? (I.preventDefault(), s("arrowKeyDown", {
        key: I.key,
        currentInputValue: f.value
      })) : I.key === "Escape" && (I.preventDefault(), s("escapeKeyDown", {
        currentInputValue: f.value
      }));
    }
    function H() {
      C.value || _({ accept: b(k) });
    }
    function J() {
      const I = u.value;
      if (!I) return;
      I.style.height = "var(--chat--textarea--height)";
      const Z = Math.min(I.scrollHeight, 480);
      I.style.height = `${Z}px`;
    }
    return (I, Z) => {
      var K;
      return y(), A("div", {
        class: "chat-input",
        style: st(w.value),
        onKeydown: nn(V, ["stop"])
      }, [
        m("div", Hk, [
          I.$slots.leftPanel ? (y(), A("div", jk, [
            we(I.$slots, "leftPanel", {}, void 0, !0)
          ])) : _e("", !0),
          Ut(m("textarea", {
            ref_key: "chatTextArea",
            ref: u,
            "onUpdate:modelValue": Z[0] || (Z[0] = (me) => f.value = me),
            "data-test-id": "chat-input",
            disabled: g.value,
            placeholder: b(r)(n.placeholder),
            onKeydown: qt(ie, ["enter"]),
            onInput: J,
            onMousedown: J,
            onFocus: J
          }, null, 40, Vk), [
            [yg, f.value]
          ]),
          m("div", Uk, [
            h.value ? (y(), A("button", {
              key: 0,
              disabled: C.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: H
            }, [
              Ce(b(_k), {
                height: "24",
                width: "24"
              })
            ], 8, Kk)) : _e("", !0),
            m("button", {
              disabled: v.value,
              class: "chat-input-send-button",
              onClick: z
            }, [
              Ce(b(kk), {
                height: "24",
                width: "24"
              })
            ], 8, Wk)
          ])
        ]),
        (K = l.value) != null && K.length && (!c.value || d.value) ? (y(), A("div", Gk, [
          (y(!0), A(et, null, Cn(l.value, (me) => (y(), ue($g, {
            key: me.name,
            file: me,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: j
          }, null, 8, ["file"]))), 128))
        ])) : _e("", !0)
      ], 36);
    };
  }
}), Xk = /* @__PURE__ */ Tr(Zk, [["__scopeId", "data-v-040531b3"]]), Yk = { class: "chat-layout" }, Jk = {
  key: 0,
  class: "chat-header"
}, Qk = {
  key: 2,
  class: "chat-footer"
}, e6 = /* @__PURE__ */ re({
  __name: "Layout",
  setup(e) {
    const t = W(null);
    function n() {
      const r = t.value;
      r && (r.scrollTop = r.scrollHeight);
    }
    return it(() => {
      Vt.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), Yt(() => {
      Vt.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (r, s) => (y(), A("main", Yk, [
      r.$slots.header ? (y(), A("div", Jk, [
        we(r.$slots, "header")
      ])) : _e("", !0),
      r.$slots.default ? (y(), A("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        we(r.$slots, "default")
      ], 512)) : _e("", !0),
      r.$slots.footer ? (y(), A("div", Qk, [
        we(r.$slots, "footer")
      ])) : _e("", !0)
    ]));
  }
}), Lg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", t6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2251%201.02271C13.5179%200.968554%2013.8195%201.00233%2014.0913%201.11939L14.2055%201.17506L14.3149%201.23951C14.5275%201.37763%2014.7014%201.56758%2014.8208%201.79127L14.8764%201.90553L14.9214%202.02467C15.0145%202.30522%2015.0227%202.60793%2014.9438%202.89478C14.9403%202.90772%2014.9372%202.92106%2014.9331%202.93385L13.0132%208.95338L12.9965%209.00025H19.9995C20.3769%208.99952%2020.7471%209.10523%2021.0669%209.30592C21.3874%209.50712%2021.6437%209.79562%2021.8071%2010.137C21.9704%2010.4783%2022.0341%2010.8588%2021.9897%2011.2346C21.9453%2011.6105%2021.7946%2011.9661%2021.5561%2012.26C21.5375%2012.2829%2021.5181%2012.3052%2021.4975%2012.3264L11.5971%2022.5266L11.5962%2022.5256C11.3774%2022.7595%2011.0907%2022.9194%2010.7749%2022.9778C10.4403%2023.0397%2010.0944%2022.9859%209.7944%2022.8254C9.4944%2022.665%209.25775%2022.4066%209.1235%2022.094C8.98941%2021.7815%208.96593%2021.4327%209.05612%2021.1047L9.06686%2021.0657L10.9868%2015.0462L11.0034%2015.0003H3.99948C3.62236%2015.0008%203.25253%2014.8941%202.93307%2014.6936C2.61276%2014.4925%202.35617%2014.2047%202.19284%2013.8635C2.02947%2013.5221%201.96581%2013.1408%202.01022%2012.7649C2.05468%2012.3892%202.20544%2012.0333%202.44382%2011.7395C2.46238%2011.7167%202.4819%2011.6942%202.50241%2011.6731L12.4028%201.47389C12.6215%201.23984%2012.9091%201.08117%2013.2251%201.02271Z'%20fill='currentColor'%20fill-opacity='0.9'%20style='fill:currentColor;fill-opacity:0.9;'/%3e%3c/svg%3e", n6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M224.975%2049.429c17.138-17.139%2044.919-17.139%2062.057%200l175.546%20175.546a43.8%2043.8%200%200%201%209.347%2013.817l.146.349q.125.298.243.598.1.25.197.5l.147.388q.133.356.261.716l.09.257q.141.407.275.818l.044.136a39%2039%200%200%201%20.306.988%2043.9%2043.9%200%200%201%201.802%2012.473c0%2012.497-5.225%2023.774-13.608%2031.767L287.032%20462.578c-17.138%2017.138-44.919%2017.138-62.057%200s-17.139-44.92%200-62.059l100.618-100.618H80.458c-24.238%200-43.887-19.649-43.887-43.886s19.65-43.887%2043.887-43.887h245.158L224.975%20111.486c-17.139-17.138-17.139-44.919%200-62.057'%20fill='currentColor'/%3e%3c/svg%3e", r6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M209.675%20387.718c20.945%2010.711%2030.794%2035.749%2022.073%2058.141-9.306%2023.886-36.221%2035.695-60.107%2026.389-29.106-11.34-56.354-28.746-79.744-52.137-20.47-20.47-36.356-43.894-47.607-68.932l-4.53-10.812-1.517-4.508c-6.284-22.673%205.511-46.874%2027.906-55.599%2022.392-8.721%2047.431%201.129%2058.141%2022.073l1.945%204.338%202.735%206.453c6.714%2014.943%2016.204%2028.982%2028.568%2041.346%2014.132%2014.132%2030.44%2024.54%2047.799%2031.304zM91.897%2091.905c23.39-23.39%2050.638-40.796%2079.744-52.137l4.508-1.517c22.673-6.284%2046.874%205.512%2055.599%2027.906%209.303%2023.885-2.526%2050.781-26.411%2060.086-17.359%206.763-33.667%2017.171-47.799%2031.303-12.364%2012.364-21.854%2026.403-28.568%2041.347l-2.735%206.453-1.945%204.337c-10.71%2020.945-35.75%2030.794-58.141%2022.073-23.886-9.306-35.695-36.221-26.39-60.107%2011.341-29.106%2028.747-56.353%2052.138-79.744M354.462%20354.47c12.364-12.364%2021.854-26.403%2028.568-41.346l2.735-6.453%201.945-4.338c10.71-20.944%2035.749-30.794%2058.141-22.073%2022.394%208.725%2034.19%2032.926%2027.906%2055.599l-1.517%204.508-4.53%2010.812c-11.251%2025.038-27.137%2048.462-47.607%2068.932-23.39%2023.391-50.638%2040.797-79.744%2052.137-23.886%209.306-50.801-2.503-60.107-26.389-9.303-23.885%202.526-50.78%2026.411-60.085l6.453-2.735c14.943-6.715%2028.982-16.205%2041.346-28.569m65.641-262.565c23.391%2023.391%2040.796%2050.638%2052.137%2079.744%209.306%2023.886-2.503%2050.801-26.389%2060.107-22.392%208.721-47.431-1.128-58.141-22.073l-1.945-4.337-2.735-6.453c-6.714-14.944-16.204-28.983-28.568-41.347-14.132-14.132-30.44-24.54-47.799-31.303-23.885-9.305-35.714-36.201-26.411-60.086%209.306-23.886%2036.221-35.694%2060.107-26.389l10.812%204.53c25.038%2011.25%2048.462%2027.137%2068.932%2047.607'%20fill='currentColor'%20/%3e%3c/svg%3e", o6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2010%2010'%20fill='currentColor'%20overflow='hidden'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0'%20y='0'%20width='10'%20height='10'%20rx='2'%20ry='2'/%3e%3c/svg%3e", Ig = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Og = "data:image/svg+xml,%3csvg%20fill='currentColor'%20fill-rule='evenodd'%20height='1em'%20style='flex:none;line-height:1'%20viewBox='0%200%2024%2024'%20width='1em'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eModelContextProtocol%3c/title%3e%3cpath%20d='M15.688%202.343a2.588%202.588%200%2000-3.61%200l-9.626%209.44a.863.863%200%2001-1.203%200%20.823.823%200%20010-1.18l9.626-9.44a4.313%204.313%200%20016.016%200%204.116%204.116%200%20011.204%203.54%204.3%204.3%200%20013.609%201.18l.05.05a4.115%204.115%200%20010%205.9l-8.706%208.537a.274.274%200%20000%20.393l1.788%201.754a.823.823%200%20010%201.18.863.863%200%2001-1.203%200l-1.788-1.753a1.92%201.92%200%20010-2.754l8.706-8.538a2.47%202.47%200%20000-3.54l-.05-.049a2.588%202.588%200%2000-3.607-.003l-7.172%207.034-.002.002-.098.097a.863.863%200%2001-1.204%200%20.823.823%200%20010-1.18l7.273-7.133a2.47%202.47%200%2000-.003-3.537z'%3e%3c/path%3e%3cpath%20d='M14.485%204.703a.823.823%200%20000-1.18.863.863%200%2000-1.204%200l-7.119%206.982a4.115%204.115%200%20000%205.9%204.314%204.314%200%20006.016%200l7.12-6.982a.823.823%200%20000-1.18.863.863%200%2000-1.204%200l-7.119%206.982a2.588%202.588%200%2001-3.61%200%202.47%202.47%200%20010-3.54l7.12-6.982z'%3e%3c/path%3e%3c/svg%3e", s6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M10.12%203.3c.911-1.395%203.012-1.349%203.844.14l8.222%2014.712c.838%201.5-.246%203.348-1.964%203.348H3.778c-1.718%200-2.802-1.848-1.964-3.348L10.036%203.44zM5.057%2018.5h13.886L12%206.073z'/%3e%3c/svg%3e", i6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M4.5%209.5a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5m7.5%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5m7.5%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5'/%3e%3c/svg%3e", a6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M12%201c6.075%200%2011%204.925%2011%2011s-4.925%2011-11%2011S1%2018.075%201%2012%205.925%201%2012%201m5.56%205.44a1.5%201.5%200%200%200-2.12%200L12%209.878l-3.44-3.44A1.5%201.5%200%201%200%206.44%208.56L9.878%2012l-3.44%203.44a1.5%201.5%200%201%200%202.122%202.12L12%2014.122l3.44%203.44.114.103a1.5%201.5%200%200%200%202.11-2.11l-.104-.114L14.122%2012l3.44-3.44a1.5%201.5%200%200%200%200-2.12'%20clip-rule='evenodd'/%3e%3c/svg%3e", l6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M16.297%202.515A3%203%200%200%201%2016%208.5v2.26l.01.138a1%201%200%200%200%20.545.756l.006.003%201.774.898.184.1A3%203%200%200%201%2020%2015.238V16a2%202%200%200%201-2%202h-4.5v4a1.5%201.5%200%200%201-3%200v-4H6a2%202%200%200%201-1.99-1.803L4%2016v-.76l.008-.209a3%203%200%200%201%201.657-2.476l1.773-.898.007-.003a1%201%200%200%200%20.545-.756L8%2010.76V8.5a3%203%200%200%201%200-6h8z'/%3e%3c/svg%3e", c6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20fill='currentColor'%20d='M5.52%202.122c.322-.175.713-.16%201.021.037l14%209a1%201%200%200%201%200%201.682l-14%209A1.001%201.001%200%200%201%205%2021V3a1%201%200%200%201%20.52-.878'/%3e%3c/svg%3e", u6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M16.645%205.907a1.5%201.5%200%200%201%202.122.028%209.77%209.77%200%200%201%202.585%204.953%209.9%209.9%200%200%201-.53%205.579%209.66%209.66%200%200%201-3.476%204.357%209.36%209.36%200%200%201-5.28%201.657%209.36%209.36%200%200%201-5.292-1.623%209.66%209.66%200%200%201-3.504-4.335%209.9%209.9%200%200%201-.564-5.576%209.77%209.77%200%200%201%202.556-4.97l.11-.105a1.501%201.501%200%200%201%202.05%202.187l-.166.178a6.8%206.8%200%200%200-1.602%203.266%206.9%206.9%200%200%200%20.393%203.884%206.66%206.66%200%200%200%202.413%202.989%206.36%206.36%200%200%200%203.595%201.105%206.36%206.36%200%200%200%203.59-1.128%206.66%206.66%200%200%200%202.394-3.005%206.9%206.9%200%200%200%20.37-3.887%206.77%206.77%200%200%200-1.79-3.433%201.5%201.5%200%200%201%20.026-2.12'/%3e%3cpath%20fill='currentColor'%20d='M12.035%201.481a1.5%201.5%200%200%201%201.5%201.5v9a1.5%201.5%200%200%201-3%200v-9a1.5%201.5%200%200%201%201.5-1.5'/%3e%3c/svg%3e", f6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M19.94%205.502a1.5%201.5%200%201%201%202.12%202.12L9.687%2019.999a1.5%201.5%200%200%201-2.122%200L1.94%2014.373a1.5%201.5%200%200%201%202.007-2.225l.115.104%204.564%204.564z'/%3e%3c/svg%3e", d6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M21%206a1%201%200%201%201%200%202h-1v12.125c0%20.817-.424%201.534-.941%202.019-.522.488-1.256.856-2.059.856H7c-.803%200-1.537-.368-2.059-.856C4.424%2021.659%204%2020.943%204%2020.125V8H3a1%201%200%200%201%200-2zm-7-5a3%203%200%200%201%203%203H7a3%203%200%200%201%203-3z'/%3e%3c/svg%3e", p6 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0506%202.38452C10.9161%200.882058%2013.0845%200.882058%2013.95%202.38452L23.3065%2018.6267C24.1706%2020.1267%2023.0883%2021.9997%2021.3572%2021.9998H2.6424C0.911559%2021.9994%20-0.170877%2020.1266%200.693176%2018.6267L10.0506%202.38452ZM11.9998%2015.9998C11.1715%2015.9999%2010.4999%2016.6715%2010.4998%2017.4998C10.4998%2018.3281%2011.1715%2018.9997%2011.9998%2018.9998C12.8282%2018.9998%2013.4998%2018.3282%2013.4998%2017.4998C13.4997%2016.6714%2012.8282%2015.9998%2011.9998%2015.9998ZM11.9998%207.49976C11.1715%207.49986%2010.4999%208.17148%2010.4998%208.99976V12.4998C10.4998%2013.3281%2011.1715%2013.9997%2011.9998%2013.9998C12.8282%2013.9998%2013.4998%2013.3282%2013.4998%2012.4998V8.99976C13.4997%208.17142%2012.8282%207.49976%2011.9998%207.49976Z'%20fill='currentColor'/%3e%3c/svg%3e", Rg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", h6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M416.648%20227.85c23.324%200%2042.232%2018.908%2042.232%2042.232v84.462c0%2038.872-31.513%2070.384-70.385%2070.385H191.423v36.402c0%2012.541-15.163%2018.822-24.031%209.954l-78.63-78.631c-5.498-5.497-5.498-14.411%200-19.908l78.63-78.631c8.868-8.868%2024.031-2.587%2024.031%209.954v36.398h182.995v-70.385c0-23.324%2018.907-42.231%2042.23-42.232M304.028%2050.669c0-12.541%2015.163-18.822%2024.031-9.954l78.63%2078.631c5.498%205.497%205.498%2014.41%200%2019.908l-78.63%2078.631c-8.868%208.867-24.031%202.587-24.031-9.954v-36.38H121.033v70.385c0%2023.324-18.908%2042.231-42.231%2042.231s-42.23-18.907-42.23-42.231v-84.462c0-38.872%2031.512-70.385%2070.384-70.385h197.072z'%20fill='currentColor'/%3e%3c/svg%3e", g6 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M275.114%2036.8c22.13%202.247%2039.401%2020.934%2039.401%2043.657v307.204h73.142c24.237%200%2043.886%2019.648%2043.886%2043.885s-19.648%2043.886-43.886%2043.886H153.6c-24.238-.001-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.885h73.143V124.343H153.6c-24.238%200-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.886h117.029z'%20fill='currentColor'/%3e%3c/svg%3e", Pg = "data:image/svg+xml,%3csvg%20viewBox='0%20-1%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", Dg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", Bg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", Ng = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", Fg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", zg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", qg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", Hg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", jg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", Vg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", Ug = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", Kg = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", Wg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", m6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v6(e, t) {
  return y(), A("svg", m6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ]));
}
const Gg = { name: "lucide-align-right", render: v6 }, b6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _6(e, t) {
  return y(), A("svg", b6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      m("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ]));
}
const Zg = { name: "lucide-archive", render: _6 }, y6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w6(e, t) {
  return y(), A("svg", y6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ]));
}
const Xg = { name: "lucide-arrow-down", render: w6 }, k6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C6(e, t) {
  return y(), A("svg", k6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ]));
}
const pu = { name: "lucide-arrow-left", render: C6 }, x6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E6(e, t) {
  return y(), A("svg", x6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ]));
}
const Yg = { name: "lucide-arrow-left-right", render: E6 }, S6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A6(e, t) {
  return y(), A("svg", S6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ]));
}
const Jg = { name: "lucide-arrow-right", render: A6 }, T6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M6(e, t) {
  return y(), A("svg", T6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
    }, null, -1)
  ]));
}
const $6 = { name: "lucide-arrow-right-from-line", render: M6 }, L6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I6(e, t) {
  return y(), A("svg", L6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
    }, null, -1)
  ]));
}
const O6 = { name: "lucide-arrow-right-to-line", render: I6 }, R6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P6(e, t) {
  return y(), A("svg", R6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ]));
}
const Qg = { name: "lucide-arrow-up", render: P6 }, D6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B6(e, t) {
  return y(), A("svg", D6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      m("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ]));
}
const em = { name: "lucide-at-sign", render: B6 }, N6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F6(e, t) {
  return y(), A("svg", N6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "m4.9 4.9l14.2 14.2" })
    ], -1)
  ]));
}
const tm = { name: "lucide-ban", render: F6 }, z6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q6(e, t) {
  return y(), A("svg", z6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ]));
}
const nm = { name: "lucide-bell", render: q6 }, H6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j6(e, t) {
  return y(), A("svg", H6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ]));
}
const rm = { name: "lucide-book", render: j6 }, V6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U6(e, t) {
  return y(), A("svg", V6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"
    }, null, -1)
  ]));
}
const K6 = { name: "lucide-book-open", render: U6 }, W6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G6(e, t) {
  return y(), A("svg", W6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 8V4H8" }),
      m("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      m("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ]));
}
const hu = { name: "lucide-bot", render: G6 }, Z6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X6(e, t) {
  return y(), A("svg", Z6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      m("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ]));
}
const om = { name: "lucide-box", render: X6 }, Y6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J6(e, t) {
  return y(), A("svg", Y6, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
    }, null, -1)
  ]));
}
const sm = { name: "lucide-braces", render: J6 }, Q6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e5(e, t) {
  return y(), A("svg", Q6, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
      m("path", { d: "M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
      m("path", { d: "M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" })
    ], -1)
  ]));
}
const im = { name: "lucide-brain", render: e5 }, t5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n5(e, t) {
  return y(), A("svg", t5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
      m("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9" }),
      m("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" })
    ], -1)
  ]));
}
const am = { name: "lucide-bug", render: n5 }, r5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o5(e, t) {
  return y(), A("svg", r5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      m("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ]));
}
const lm = { name: "lucide-calculator", render: o5 }, s5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i5(e, t) {
  return y(), A("svg", s5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M8 2v4m8-4v4" }),
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      m("path", { d: "M3 10h18" })
    ], -1)
  ]));
}
const cm = { name: "lucide-calendar", render: i5 }, a5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l5(e, t) {
  return y(), A("svg", a5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
    }, null, -1)
  ]));
}
const um = { name: "lucide-case-upper", render: l5 }, c5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u5(e, t) {
  return y(), A("svg", c5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ]));
}
const fm = { name: "lucide-chart-column-decreasing", render: u5 }, f5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d5(e, t) {
  return y(), A("svg", f5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
const dm = { name: "lucide-check", render: d5 }, p5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h5(e, t) {
  return y(), A("svg", p5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ]));
}
const pm = { name: "lucide-check-check", render: h5 }, g5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m5(e, t) {
  return y(), A("svg", g5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
const ti = { name: "lucide-chevron-down", render: m5 }, v5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b5(e, t) {
  return y(), A("svg", v5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ]));
}
const ni = { name: "lucide-chevron-left", render: b5 }, _5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y5(e, t) {
  return y(), A("svg", _5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ]));
}
const ri = { name: "lucide-chevron-right", render: y5 }, w5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k5(e, t) {
  return y(), A("svg", w5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ]));
}
const oi = { name: "lucide-chevron-up", render: k5 }, C5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x5(e, t) {
  return y(), A("svg", C5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 20l5-5l5 5M7 4l5 5l5-5"
    }, null, -1)
  ]));
}
const E5 = { name: "lucide-chevrons-down-up", render: x5 }, S5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A5(e, t) {
  return y(), A("svg", S5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ]));
}
const hm = { name: "lucide-chevrons-left", render: A5 }, T5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M5(e, t) {
  return y(), A("svg", T5, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ]));
}
const gm = { name: "lucide-chevrons-up-down", render: M5 }, $5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L5(e, t) {
  return y(), A("svg", $5, t[0] || (t[0] = [
    m("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const mm = { name: "lucide-circle", render: L5 }, I5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O5(e, t) {
  return y(), A("svg", I5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ]));
}
const vm = { name: "lucide-circle-alert", render: O5 }, R5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P5(e, t) {
  return y(), A("svg", R5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const bm = { name: "lucide-circle-check", render: P5 }, D5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B5(e, t) {
  return y(), A("svg", D5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const _m = { name: "lucide-circle-dot", render: B5 }, N5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F5(e, t) {
  return y(), A("svg", N5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ]));
}
const gu = { name: "lucide-circle-help", render: F5 }, z5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q5(e, t) {
  return y(), A("svg", z5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M8 12h8" })
    ], -1)
  ]));
}
const ym = { name: "lucide-circle-minus", render: q5 }, H5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j5(e, t) {
  return y(), A("svg", H5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ]));
}
const wm = { name: "lucide-circle-pause", render: j5 }, V5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U5(e, t) {
  return y(), A("svg", V5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "m10 8l6 4l-6 4z" })
    ], -1)
  ]));
}
const km = { name: "lucide-circle-play", render: U5 }, K5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W5(e, t) {
  return y(), A("svg", K5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const Cm = { name: "lucide-circle-plus", render: W5 }, G5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z5(e, t) {
  return y(), A("svg", G5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      m("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const xm = { name: "lucide-circle-user-round", render: Z5 }, X5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y5(e, t) {
  return y(), A("svg", X5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ]));
}
const Em = { name: "lucide-circle-x", render: Y5 }, J5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q5(e, t) {
  return y(), A("svg", J5, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      m("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" })
    ], -1)
  ]));
}
const Sm = { name: "lucide-clipboard", render: Q5 }, eC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tC(e, t) {
  return y(), A("svg", eC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      m("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
      m("path", { d: "m9 14l2 2l4-4" })
    ], -1)
  ]));
}
const Am = { name: "lucide-clipboard-check", render: tC }, nC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rC(e, t) {
  return y(), A("svg", nC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      m("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ]));
}
const Tm = { name: "lucide-clipboard-list", render: rC }, oC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sC(e, t) {
  return y(), A("svg", oC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 6v6l4 2" }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Mm = { name: "lucide-clock", render: sC }, iC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aC(e, t) {
  return y(), A("svg", iC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ]));
}
const $m = { name: "lucide-cloud", render: aC }, lC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cC(e, t) {
  return y(), A("svg", lC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      m("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ]));
}
const Lm = { name: "lucide-cloud-download", render: cC }, uC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fC(e, t) {
  return y(), A("svg", uC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ]));
}
const Im = { name: "lucide-code", render: fC }, dC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pC(e, t) {
  return y(), A("svg", dC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" }),
      m("path", { d: "M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" })
    ], -1)
  ]));
}
const mu = { name: "lucide-cog", render: pC }, hC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gC(e, t) {
  return y(), A("svg", hC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ]));
}
const Om = { name: "lucide-contrast", render: gC }, mC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vC(e, t) {
  return y(), A("svg", mC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      m("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ]));
}
const Rm = { name: "lucide-copy", render: vC }, bC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _C(e, t) {
  return y(), A("svg", bC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })
    ], -1)
  ]));
}
const yC = { name: "lucide-crosshair", render: _C }, wC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kC(e, t) {
  return y(), A("svg", wC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      m("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      m("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ]));
}
const Pm = { name: "lucide-database", render: kC }, CC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xC(e, t) {
  return y(), A("svg", CC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3"
    }, null, -1)
  ]));
}
const EC = { name: "lucide-door-open", render: xC }, SC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AC(e, t) {
  return y(), A("svg", SC, t[0] || (t[0] = [
    m("circle", {
      cx: "12.1",
      cy: "12.1",
      r: "1",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const TC = { name: "lucide-dot", render: AC }, MC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $C(e, t) {
  return y(), A("svg", MC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Dm = { name: "lucide-earth", render: $C }, LC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IC(e, t) {
  return y(), A("svg", LC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      m("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      m("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Bm = { name: "lucide-ellipsis", render: IC }, OC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RC(e, t) {
  return y(), A("svg", OC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      m("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      m("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const Nm = { name: "lucide-ellipsis-vertical", render: RC }, PC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function DC(e, t) {
  return y(), A("svg", PC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ]));
}
const Fm = { name: "lucide-equal", render: DC }, BC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NC(e, t) {
  return y(), A("svg", BC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 15l6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0l6-6M3 8V3h5m1 6L3 3"
    }, null, -1)
  ]));
}
const FC = { name: "lucide-expand", render: NC }, zC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qC(e, t) {
  return y(), A("svg", zC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ]));
}
const zm = { name: "lucide-external-link", render: qC }, HC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jC(e, t) {
  return y(), A("svg", HC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const qm = { name: "lucide-eye", render: jC }, VC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UC(e, t) {
  return y(), A("svg", VC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      m("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ]));
}
const Hm = { name: "lucide-eye-off", render: UC }, KC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WC(e, t) {
  return y(), A("svg", KC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      m("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const jm = { name: "lucide-file", render: WC }, GC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZC(e, t) {
  return y(), A("svg", GC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      m("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      m("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ]));
}
const Vm = { name: "lucide-file-archive", render: ZC }, XC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YC(e, t) {
  return y(), A("svg", XC, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      m("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ]));
}
const Um = { name: "lucide-file-code", render: YC }, JC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QC(e, t) {
  return y(), A("svg", JC, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-6 8h6m-3 3V7M9 17h6"
    }, null, -1)
  ]));
}
const ex = { name: "lucide-file-diff", render: QC }, tx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nx(e, t) {
  return y(), A("svg", tx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      m("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ]));
}
const Km = { name: "lucide-file-down", render: nx }, rx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ox(e, t) {
  return y(), A("svg", rx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      m("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ]));
}
const Wm = { name: "lucide-file-input", render: ox }, sx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ix(e, t) {
  return y(), A("svg", sx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      m("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      m("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ]));
}
const Gm = { name: "lucide-file-output", render: ix }, ax = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lx(e, t) {
  return y(), A("svg", ax, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      m("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ]));
}
const vu = { name: "lucide-file-text", render: lx }, cx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ux(e, t) {
  return y(), A("svg", cx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
      m("path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }),
      m("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
    ], -1)
  ]));
}
const Zm = { name: "lucide-files", render: ux }, fx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dx(e, t) {
  return y(), A("svg", fx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      m("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ]));
}
const Xm = { name: "lucide-fingerprint", render: dx }, px = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hx(e, t) {
  return y(), A("svg", px, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ]));
}
const Ym = { name: "lucide-flask-conical", render: hx }, gx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mx(e, t) {
  return y(), A("svg", gx, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const Jm = { name: "lucide-folder", render: mx }, vx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bx(e, t) {
  return y(), A("svg", vx, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ]));
}
const Qm = { name: "lucide-folder-open", render: bx }, _x = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yx(e, t) {
  return y(), A("svg", _x, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const ev = { name: "lucide-folder-plus", render: yx }, wx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kx(e, t) {
  return y(), A("svg", wx, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ]));
}
const tv = { name: "lucide-funnel", render: kx }, Cx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xx(e, t) {
  return y(), A("svg", Cx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M6 3h12l4 6l-10 13L2 9Z" }),
      m("path", { d: "M11 3L8 9l4 13l4-13l-3-6M2 9h20" })
    ], -1)
  ]));
}
const nv = { name: "lucide-gem", render: xx }, Ex = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Sx(e, t) {
  return y(), A("svg", Ex, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      m("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ]));
}
const rv = { name: "lucide-gift", render: Sx }, Ax = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tx(e, t) {
  return y(), A("svg", Ax, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ]));
}
const ov = { name: "lucide-git-branch", render: Tx }, Mx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $x(e, t) {
  return y(), A("svg", Mx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ]));
}
const sv = { name: "lucide-globe", render: $x }, Lx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ix(e, t) {
  return y(), A("svg", Lx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      m("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ]));
}
const iv = { name: "lucide-graduation-cap", render: Ix }, Ox = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rx(e, t) {
  return y(), A("svg", Ox, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 3v18m-9-9h18" }),
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ]));
}
const av = { name: "lucide-grid-2x2", render: Rx }, Px = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Dx(e, t) {
  return y(), A("svg", Px, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ]));
}
const lv = { name: "lucide-grip-vertical", render: Dx }, Bx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nx(e, t) {
  return y(), A("svg", Bx, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ]));
}
const cv = { name: "lucide-hand-coins", render: Nx }, Fx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zx(e, t) {
  return y(), A("svg", Fx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      m("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      m("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ]));
}
const uv = { name: "lucide-handshake", render: zx }, qx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Hx(e, t) {
  return y(), A("svg", qx, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ]));
}
const fv = { name: "lucide-hard-drive", render: Hx }, jx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vx(e, t) {
  return y(), A("svg", jx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      m("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      m("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ]));
}
const dv = { name: "lucide-hard-drive-download", render: Vx }, Ux = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Kx(e, t) {
  return y(), A("svg", Ux, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ]));
}
const pv = { name: "lucide-hash", render: Kx }, Wx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gx(e, t) {
  return y(), A("svg", Wx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      m("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ]));
}
const hv = { name: "lucide-history", render: Gx }, Zx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Xx(e, t) {
  return y(), A("svg", Zx, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ]));
}
const gv = { name: "lucide-hourglass", render: Xx }, Yx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jx(e, t) {
  return y(), A("svg", Yx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      m("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ]));
}
const mv = { name: "lucide-house", render: Jx }, Qx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e8(e, t) {
  return y(), A("svg", Qx, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      m("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      m("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ]));
}
const vv = { name: "lucide-image", render: e8 }, t8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n8(e, t) {
  return y(), A("svg", t8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      m("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ]));
}
const bv = { name: "lucide-inbox", render: n8 }, r8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o8(e, t) {
  return y(), A("svg", r8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
const bu = { name: "lucide-info", render: o8 }, s8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i8(e, t) {
  return y(), A("svg", s8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      m("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const _v = { name: "lucide-key-round", render: i8 }, a8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l8(e, t) {
  return y(), A("svg", a8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ]));
}
const yv = { name: "lucide-languages", render: l8 }, c8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u8(e, t) {
  return y(), A("svg", c8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      m("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      m("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ]));
}
const wv = { name: "lucide-layers", render: u8 }, f8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d8(e, t) {
  return y(), A("svg", f8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
const kv = { name: "lucide-lightbulb", render: d8 }, p8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h8(e, t) {
  return y(), A("svg", p8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      m("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ]));
}
const Cv = { name: "lucide-link", render: h8 }, g8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m8(e, t) {
  return y(), A("svg", g8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"
    }, null, -1)
  ]));
}
const xv = { name: "lucide-list", render: m8 }, v8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b8(e, t) {
  return y(), A("svg", v8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8"
    }, null, -1)
  ]));
}
const Ev = { name: "lucide-list-checks", render: b8 }, _8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y8(e, t) {
  return y(), A("svg", _8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      m("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ]));
}
const Sv = { name: "lucide-lock", render: y8 }, w8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k8(e, t) {
  return y(), A("svg", w8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ]));
}
const Av = { name: "lucide-log-in", render: k8 }, C8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x8(e, t) {
  return y(), A("svg", C8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ]));
}
const Tv = { name: "lucide-log-out", render: x8 }, E8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S8(e, t) {
  return y(), A("svg", E8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      m("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
const Mv = { name: "lucide-mail", render: S8 }, A8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T8(e, t) {
  return y(), A("svg", A8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ]));
}
const $v = { name: "lucide-maximize", render: T8 }, M8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $8(e, t) {
  return y(), A("svg", M8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ]));
}
const Lv = { name: "lucide-maximize-2", render: $8 }, L8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I8(e, t) {
  return y(), A("svg", L8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 12h16M4 18h16M4 6h16"
    }, null, -1)
  ]));
}
const Iv = { name: "lucide-menu", render: I8 }, O8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R8(e, t) {
  return y(), A("svg", O8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }, null, -1)
  ]));
}
const Ov = { name: "lucide-message-circle", render: R8 }, P8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D8(e, t) {
  return y(), A("svg", P8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ]));
}
const Rv = { name: "lucide-messages-square", render: D8 }, B8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N8(e, t) {
  return y(), A("svg", B8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ]));
}
const Pv = { name: "lucide-milestone", render: N8 }, F8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z8(e, t) {
  return y(), A("svg", F8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ]));
}
const q8 = { name: "lucide-minimize-2", render: z8 }, H8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j8(e, t) {
  return y(), A("svg", H8, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ]));
}
const Dv = { name: "lucide-mouse-pointer", render: j8 }, V8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U8(e, t) {
  return y(), A("svg", V8, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ]));
}
const Bv = { name: "lucide-network", render: U8 }, K8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W8(e, t) {
  return y(), A("svg", K8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      m("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      m("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ]));
}
const Nv = { name: "lucide-package-open", render: W8 }, G8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z8(e, t) {
  return y(), A("svg", G8, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ]));
}
const Fv = { name: "lucide-palette", render: Z8 }, X8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y8(e, t) {
  return y(), A("svg", X8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      m("path", { d: "M9 3v18" })
    ], -1)
  ]));
}
const J8 = { name: "lucide-panel-left", render: Y8 }, Q8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e9(e, t) {
  return y(), A("svg", Q8, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      m("path", { d: "M15 3v18" })
    ], -1)
  ]));
}
const t9 = { name: "lucide-panel-right", render: e9 }, n9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r9(e, t) {
  return y(), A("svg", n9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        rx: "1"
      }),
      m("rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        rx: "1"
      })
    ], -1)
  ]));
}
const zv = { name: "lucide-pause", render: r9 }, o9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s9(e, t) {
  return y(), A("svg", o9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ]));
}
const qv = { name: "lucide-pen", render: s9 }, i9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a9(e, t) {
  return y(), A("svg", i9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ]));
}
const Hv = { name: "lucide-pencil", render: a9 }, l9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c9(e, t) {
  return y(), A("svg", l9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ]));
}
const jv = { name: "lucide-pin", render: c9 }, u9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f9(e, t) {
  return y(), A("svg", u9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
const Vv = { name: "lucide-play", render: f9 }, d9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p9(e, t) {
  return y(), A("svg", d9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ]));
}
const Uv = { name: "lucide-plug", render: p9 }, h9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g9(e, t) {
  return y(), A("svg", h9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ]));
}
const Kv = { name: "lucide-plus", render: g9 }, m9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v9(e, t) {
  return y(), A("svg", m9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      m("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ]));
}
const Wv = { name: "lucide-pocket-knife", render: v9 }, b9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _9(e, t) {
  return y(), A("svg", b9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ]));
}
const Gv = { name: "lucide-power", render: _9 }, y9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w9(e, t) {
  return y(), A("svg", y9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m15 14l5-5l-5-5" }),
      m("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ]));
}
const Zv = { name: "lucide-redo-2", render: w9 }, k9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C9(e, t) {
  return y(), A("svg", k9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      m("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      m("path", { d: "M8 16H3v5" })
    ], -1)
  ]));
}
const si = { name: "lucide-refresh-cw", render: C9 }, x9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E9(e, t) {
  return y(), A("svg", x9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ]));
}
const Xv = { name: "lucide-remove-formatting", render: E9 }, S9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A9(e, t) {
  return y(), A("svg", S9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      m("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const Yv = { name: "lucide-rss", render: A9 }, T9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M9(e, t) {
  return y(), A("svg", T9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ]));
}
const Jv = { name: "lucide-satellite-dish", render: M9 }, $9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L9(e, t) {
  return y(), A("svg", $9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      m("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ]));
}
const Qv = { name: "lucide-save", render: L9 }, I9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O9(e, t) {
  return y(), A("svg", I9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ]));
}
const eb = { name: "lucide-scale", render: O9 }, R9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P9(e, t) {
  return y(), A("svg", R9, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ]));
}
const _u = { name: "lucide-scissors", render: P9 }, D9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B9(e, t) {
  return y(), A("svg", D9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m21 21l-4.34-4.34" }),
      m("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ]));
}
const tb = { name: "lucide-search", render: B9 }, N9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F9(e, t) {
  return y(), A("svg", N9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ]));
}
const nb = { name: "lucide-send", render: F9 }, z9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q9(e, t) {
  return y(), A("svg", z9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      m("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      m("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ]));
}
const rb = { name: "lucide-server", render: q9 }, H9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j9(e, t) {
  return y(), A("svg", H9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2" }),
      m("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const V9 = { name: "lucide-settings", render: j9 }, U9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K9(e, t) {
  return y(), A("svg", U9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ]));
}
const ob = { name: "lucide-share", render: K9 }, W9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G9(e, t) {
  return y(), A("svg", W9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"
    }, null, -1)
  ]));
}
const sb = { name: "lucide-sliders-horizontal", render: G9 }, Z9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X9(e, t) {
  return y(), A("svg", Z9, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      m("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ]));
}
const ib = { name: "lucide-smile", render: X9 }, Y9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J9(e, t) {
  return y(), A("svg", Y9, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4m2-2h-4M4 17v2m1-1H3"
    }, null, -1)
  ]));
}
const Q9 = { name: "lucide-sparkles", render: J9 }, e7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t7(e, t) {
  return y(), A("svg", e7, t[0] || (t[0] = [
    m("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      rx: "2"
    }, null, -1)
  ]));
}
const ab = { name: "lucide-square", render: t7 }, n7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r7(e, t) {
  return y(), A("svg", n7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      m("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const lb = { name: "lucide-square-check", render: r7 }, o7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s7(e, t) {
  return y(), A("svg", o7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      m("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ]));
}
const cb = { name: "lucide-square-pen", render: s7 }, i7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a7(e, t) {
  return y(), A("svg", i7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      m("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const ub = { name: "lucide-square-plus", render: a7 }, l7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c7(e, t) {
  return y(), A("svg", l7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      m("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const fb = { name: "lucide-sticky-note", render: c7 }, u7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f7(e, t) {
  return y(), A("svg", u7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      m("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ]));
}
const db = { name: "lucide-sun", render: f7 }, d7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p7(e, t) {
  return y(), A("svg", d7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M12 3v18" }),
      m("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      m("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ]));
}
const pb = { name: "lucide-table", render: p7 }, h7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g7(e, t) {
  return y(), A("svg", h7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
      m("path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }),
      m("circle", {
        cx: "6.5",
        cy: "9.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const hb = { name: "lucide-tags", render: g7 }, m7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v7(e, t) {
  return y(), A("svg", m7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ]));
}
const gb = { name: "lucide-terminal", render: v7 }, b7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _7(e, t) {
  return y(), A("svg", b7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ]));
}
const mb = { name: "lucide-thumbs-down", render: _7 }, y7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w7(e, t) {
  return y(), A("svg", y7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ]));
}
const vb = { name: "lucide-thumbs-up", render: w7 }, k7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C7(e, t) {
  return y(), A("svg", k7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "15",
        cy: "12",
        r: "3"
      }),
      m("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "7"
      })
    ], -1)
  ]));
}
const x7 = { name: "lucide-toggle-right", render: C7 }, E7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S7(e, t) {
  return y(), A("svg", E7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
    }, null, -1)
  ]));
}
const bb = { name: "lucide-trash-2", render: S7 }, A7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T7(e, t) {
  return y(), A("svg", A7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ]));
}
const _b = { name: "lucide-tree-pine", render: T7 }, M7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $7(e, t) {
  return y(), A("svg", M7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ]));
}
const yb = { name: "lucide-triangle-alert", render: $7 }, L7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I7(e, t) {
  return y(), A("svg", L7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6"
    }, null, -1)
  ]));
}
const O7 = { name: "lucide-type", render: I7 }, R7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P7(e, t) {
  return y(), A("svg", R7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M9 14L4 9l5-5" }),
      m("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ]));
}
const wb = { name: "lucide-undo-2", render: P7 }, D7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B7(e, t) {
  return y(), A("svg", D7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ]));
}
const kb = { name: "lucide-unlink", render: B7 }, N7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F7(e, t) {
  return y(), A("svg", N7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      m("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Cb = { name: "lucide-user", render: F7 }, z7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q7(e, t) {
  return y(), A("svg", z7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      m("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const xb = { name: "lucide-user-check", render: q7 }, H7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j7(e, t) {
  return y(), A("svg", H7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      m("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      m("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ]));
}
const Eb = { name: "lucide-user-lock", render: j7 }, V7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U7(e, t) {
  return y(), A("svg", V7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      m("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ]));
}
const Sb = { name: "lucide-user-round", render: U7 }, K7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W7(e, t) {
  return y(), A("svg", K7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      m("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Ab = { name: "lucide-users", render: W7 }, G7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z7(e, t) {
  return y(), A("svg", G7, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ]));
}
const Tb = { name: "lucide-variable", render: Z7 }, X7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y7(e, t) {
  return y(), A("svg", X7, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ]));
}
const Mb = { name: "lucide-vault", render: Y7 }, J7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q7(e, t) {
  return y(), A("svg", J7, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      m("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ]));
}
const $b = { name: "lucide-video", render: Q7 }, eE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tE(e, t) {
  return y(), A("svg", eE, t[0] || (t[0] = [
    Ar('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ]));
}
const Lb = { name: "lucide-waypoints", render: tE }, nE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rE(e, t) {
  return y(), A("svg", nE, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, null, -1)
  ]));
}
const Ib = { name: "lucide-wrench", render: rE }, oE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sE(e, t) {
  return y(), A("svg", oE, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const yu = { name: "lucide-x", render: sE }, iE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aE(e, t) {
  return y(), A("svg", iE, t[0] || (t[0] = [
    m("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ]));
}
const Ob = { name: "lucide-zap", render: aE }, lE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cE(e, t) {
  return y(), A("svg", lE, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      m("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ]));
}
const Rb = { name: "lucide-zoom-in", render: cE }, uE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fE(e, t) {
  return y(), A("svg", uE, t[0] || (t[0] = [
    m("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      m("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      m("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ]));
}
const Pb = { name: "lucide-zoom-out", render: fE }, Yd = {
  // customIcons
  variable: Tb,
  "pop-out": Rg,
  triangle: Kg,
  "status-completed": Ng,
  "status-waiting": Hg,
  "status-error": Fg,
  "status-canceled": Bg,
  "status-new": zg,
  "status-unknown": qg,
  "status-warning": jg,
  "vector-square": Wg,
  schema: Pg,
  json: sm,
  binary: Lg,
  text: Vg,
  toolbox: Ug,
  spinner: Dg,
  xmark: yu,
  mcp: Og,
  // fontAwesomeIcons
  "caret-up": oi,
  "caret-down": ti,
  "caret-right": ri,
  "caret-left": ni,
  "folder-plus": ev,
  share: ob,
  "user-check": xb,
  "check-double": pm,
  "exclamation-circle": vm,
  circle: mm,
  "eye-slash": Hm,
  folder: Jm,
  "minus-circle": ym,
  adjust: Om,
  refresh: si,
  vault: Mb,
  "angle-double-left": hm,
  "angle-down": ti,
  "angle-left": ni,
  "angle-right": ri,
  "angle-up": oi,
  archive: Zg,
  "arrow-left": pu,
  "arrow-right": Jg,
  "arrow-up": Qg,
  "arrow-down": Xg,
  at: em,
  ban: tm,
  "balance-scale-left": eb,
  bars: Iv,
  bolt: Ob,
  book: rm,
  "box-open": Nv,
  bug: am,
  brain: im,
  calculator: lm,
  calendar: cm,
  "chart-bar": fm,
  check: dm,
  "check-circle": bm,
  "check-square": lb,
  "chevron-left": ni,
  "chevron-right": ri,
  "chevron-down": ti,
  "chevron-up": oi,
  code: Im,
  "code-branch": ov,
  cog: mu,
  cogs: mu,
  comment: Ov,
  comments: Rv,
  clipboard: Sm,
  "clipboard-check": Am,
  "clipboard-list": Tm,
  clock: Mm,
  clone: Rm,
  cloud: $m,
  "cloud-download-alt": Lm,
  compress: gm,
  copy: Zm,
  cube: om,
  cut: _u,
  database: Pm,
  "dot-circle": _m,
  "grip-lines-vertical": Ig,
  "grip-vertical": lv,
  edit: cb,
  "ellipsis-h": Bm,
  "ellipsis-v": Nm,
  envelope: Mv,
  equals: Fm,
  eye: qm,
  "exclamation-triangle": yb,
  expand: $v,
  "expand-alt": Lv,
  "external-link-alt": zm,
  "exchange-alt": Yg,
  file: jm,
  "file-alt": vu,
  "file-archive": Vm,
  "file-code": Um,
  "file-download": Km,
  "file-export": Gm,
  "file-import": Wm,
  "file-pdf": vu,
  filter: tv,
  fingerprint: Xm,
  flask: Ym,
  "folder-open": Qm,
  font: um,
  gift: rv,
  globe: sv,
  "globe-americas": Dm,
  "graduation-cap": iv,
  "hand-holding-usd": cv,
  "hand-scissors": _u,
  handshake: uv,
  "hand-point-left": pu,
  hashtag: pv,
  hdd: fv,
  history: hv,
  home: mv,
  hourglass: gv,
  image: vv,
  inbox: bv,
  info: bu,
  "info-circle": bu,
  key: _v,
  language: yv,
  "layer-group": wv,
  link: Cv,
  list: xv,
  lightbulb: kv,
  lock: Sv,
  "map-signs": Pv,
  "mouse-pointer": Dv,
  "network-wired": Bv,
  palette: Fv,
  pause: zv,
  "pause-circle": wm,
  pen: qv,
  "pencil-alt": Hv,
  play: Vv,
  "play-circle": km,
  plug: Uv,
  plus: Kv,
  "plus-circle": Cm,
  "plus-square": ub,
  "project-diagram": Lb,
  question: gu,
  "question-circle": gu,
  redo: Zv,
  "remove-format": Xv,
  robot: hu,
  rss: Yv,
  save: Qv,
  "satellite-dish": Jv,
  search: tb,
  "search-minus": Pb,
  "search-plus": Rb,
  server: rb,
  screwdriver: Wv,
  smile: ib,
  "sign-in-alt": Av,
  "sign-out-alt": Tv,
  "sliders-h": sb,
  "sticky-note": fb,
  stop: ab,
  stream: Gg,
  sun: db,
  sync: si,
  "sync-alt": si,
  table: pb,
  tags: hb,
  tasks: Ev,
  terminal: gb,
  "th-large": av,
  thumbtack: jv,
  "thumbs-down": mb,
  "thumbs-up": vb,
  times: yu,
  "times-circle": Em,
  tools: Ib,
  trash: bb,
  undo: wb,
  unlink: kb,
  user: Cb,
  "user-circle": xm,
  "user-friends": Sb,
  users: Ab,
  video: $b,
  tree: _b,
  "user-lock": Eb,
  gem: nv,
  download: dv,
  "power-off": Gv,
  "paper-plane": nb,
  bell: nm
}, Jd = {
  // custom icons
  // NOTE: ensure to replace any colors with "currentColor" in SVG
  "bolt-filled": t6,
  "filled-square": o6,
  "grip-lines-vertical": Ig,
  variable: Tb,
  "pop-out": Rg,
  triangle: Kg,
  "status-completed": Ng,
  "status-waiting": Hg,
  "status-error": Fg,
  "status-canceled": Bg,
  "status-new": zg,
  "status-unknown": qg,
  "status-warning": jg,
  "vector-square": Wg,
  "continue-on-error": n6,
  "always-output-data": r6,
  "retry-on-fail": h6,
  "execute-once": g6,
  schema: Pg,
  json: sm,
  binary: Lg,
  text: Vg,
  toolbox: Ug,
  spinner: Dg,
  "node-dirty": s6,
  "node-ellipsis": i6,
  "node-execution-error": a6,
  "node-validation-error": p6,
  "node-pin": l6,
  "node-play": c6,
  "node-power": u6,
  "node-success": f6,
  "node-trash": d6,
  mcp: Og,
  // lucide
  "align-right": Gg,
  archive: Zg,
  "arrow-down": Xg,
  "arrow-left": pu,
  "arrow-left-right": Yg,
  "arrow-right": Jg,
  "arrow-right-from-line": $6,
  "arrow-right-to-line": O6,
  "arrow-up": Qg,
  "at-sign": em,
  ban: tm,
  bell: nm,
  book: rm,
  "book-open": K6,
  bot: hu,
  box: om,
  brain: im,
  bug: am,
  calculator: lm,
  calendar: cm,
  "case-upper": um,
  "chart-column-decreasing": fm,
  check: dm,
  "check-check": pm,
  "chevron-down": ti,
  "chevron-left": ni,
  "chevron-right": ri,
  "chevron-up": oi,
  "chevrons-left": hm,
  "chevrons-down-up": E5,
  "chevrons-up-down": gm,
  circle: mm,
  "circle-alert": vm,
  "circle-check": bm,
  "circle-dot": _m,
  "circle-help": gu,
  "circle-minus": ym,
  "circle-pause": wm,
  "circle-play": km,
  "circle-plus": Cm,
  "circle-user-round": xm,
  "circle-x": Em,
  clipboard: Sm,
  "clipboard-check": Am,
  "clipboard-list": Tm,
  clock: Mm,
  cloud: $m,
  "cloud-download": Lm,
  code: Im,
  cog: mu,
  contrast: Om,
  copy: Rm,
  crosshair: yC,
  database: Pm,
  "door-open": EC,
  dot: TC,
  earth: Dm,
  ellipsis: Bm,
  "ellipsis-vertical": Nm,
  equal: Fm,
  expand: FC,
  "external-link": zm,
  eye: qm,
  "eye-off": Hm,
  file: jm,
  "file-archive": Vm,
  "file-code": Um,
  "file-diff": ex,
  "file-down": Km,
  "file-input": Wm,
  "file-output": Gm,
  "file-text": vu,
  files: Zm,
  fingerprint: Xm,
  "flask-conical": Ym,
  folder: Jm,
  "folder-open": Qm,
  "folder-plus": ev,
  funnel: tv,
  gem: nv,
  gift: rv,
  "git-branch": ov,
  globe: sv,
  "graduation-cap": iv,
  "grid-2x2": av,
  "grip-vertical": lv,
  "hand-coins": cv,
  handshake: uv,
  "hard-drive": fv,
  "hard-drive-download": dv,
  hash: pv,
  history: hv,
  hourglass: gv,
  house: mv,
  image: vv,
  inbox: bv,
  info: bu,
  "key-round": _v,
  languages: yv,
  layers: wv,
  lightbulb: kv,
  link: Cv,
  list: xv,
  "list-checks": Ev,
  lock: Sv,
  "log-in": Av,
  "log-out": Tv,
  mail: Mv,
  "minimize-2": q8,
  maximize: $v,
  "maximize-2": Lv,
  menu: Iv,
  "message-circle": Ov,
  "messages-square": Rv,
  milestone: Pv,
  "mouse-pointer": Dv,
  network: Bv,
  "package-open": Nv,
  palette: Fv,
  "panel-left": J8,
  "panel-right": t9,
  pause: zv,
  pen: qv,
  pencil: Hv,
  pin: jv,
  play: Vv,
  plug: Uv,
  plus: Kv,
  "pocket-knife": Wv,
  power: Gv,
  "redo-2": Zv,
  "refresh-cw": si,
  "remove-formatting": Xv,
  rss: Yv,
  robot: hu,
  "satellite-dish": Jv,
  save: Qv,
  scale: eb,
  scissors: _u,
  search: tb,
  settings: V9,
  send: nb,
  server: rb,
  share: ob,
  "sliders-horizontal": sb,
  smile: ib,
  sparkles: Q9,
  square: ab,
  "square-check": lb,
  "square-pen": cb,
  "square-plus": ub,
  "sticky-note": fb,
  sun: db,
  table: pb,
  tags: hb,
  terminal: gb,
  "thumbs-down": mb,
  "thumbs-up": vb,
  "trash-2": bb,
  "tree-pine": _b,
  "triangle-alert": yb,
  type: O7,
  "toggle-right": x7,
  "undo-2": wb,
  unlink: kb,
  user: Cb,
  "user-check": xb,
  "user-lock": Eb,
  "user-round": Sb,
  users: Ab,
  vault: Mb,
  video: $b,
  waypoints: Lb,
  wrench: Ib,
  x: yu,
  zap: Ob,
  "zoom-in": Rb,
  "zoom-out": Pb
}, dE = /* @__PURE__ */ re({
  name: "N8nIcon",
  __name: "Icon",
  props: {
    icon: {},
    size: { default: void 0 },
    spin: { type: Boolean, default: !1 },
    color: { default: void 0 },
    strokeWidth: {}
  },
  setup(e) {
    const t = e, n = af(), r = P(() => {
      const a = [];
      return t.spin && a.push("spin"), t.strokeWidth && a.push("strokeWidth"), ["n8n-icon", ...a.map((l) => n[l])];
    }), s = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = P(() => {
      let a = "1em";
      return t.size && (a = `${typeof t.size == "number" ? t.size : s[t.size]}px`), {
        height: a,
        width: a
      };
    }), i = P(() => {
      const a = {};
      return t.color && (a.color = `var(--color-${t.color})`), t.strokeWidth && (a["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), a;
    });
    return (a, l) => b(Jd)[a.icon] ?? b(Yd)[a.icon] ? (y(), ue(Pt(
      b(Jd)[a.icon] ?? b(Yd)[a.icon]
    ), {
      key: 0,
      class: Q(r.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: st(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : _e("", !0);
  }
}), pE = "_strokeWidth_fqxq5_1", hE = "_spin_fqxq5_6", gE = {
  strokeWidth: pE,
  spin: hE
}, mE = {
  $style: gE
}, ff = /* @__PURE__ */ Tr(dE, [["__cssModules", mE]]), vE = { class: "n8n-spinner" }, bE = {
  key: 0,
  class: "lds-ring"
}, _E = /* @__PURE__ */ re({
  name: "N8nSpinner",
  __name: "Spinner",
  props: {
    size: { default: "medium" },
    type: { default: "dots" }
  },
  setup(e) {
    return (t, n) => (y(), A("span", vE, [
      t.type === "ring" ? (y(), A("div", bE, n[0] || (n[0] = [
        m("div", null, null, -1),
        m("div", null, null, -1),
        m("div", null, null, -1),
        m("div", null, null, -1)
      ]))) : (y(), ue(b(ff), {
        key: 1,
        icon: "spinner",
        size: t.size,
        spin: ""
      }, null, 8, ["size"]))
    ]));
  }
}), yE = { key: 1 }, wE = /* @__PURE__ */ re({
  name: "N8nButton",
  __name: "Button",
  props: {
    block: { type: Boolean, default: !1 },
    element: { default: "button" },
    href: {},
    label: { default: "" },
    square: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    float: {},
    icon: {},
    loading: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    size: { default: "medium" },
    iconSize: {},
    text: { type: Boolean, default: !1 },
    type: { default: "primary" },
    nativeType: {}
  },
  setup(e) {
    const t = af(), n = Fi(), r = e;
    nf(() => {
      r.element === "a" && !r.href && console.error("n8n-button:href is required for link buttons");
    });
    const s = P(() => r.loading ? "true" : void 0), o = P(() => r.disabled ? "true" : void 0), i = P(() => r.disabled || r.loading), a = P(
      () => r.iconSize ?? (r.size === "xmini" || r.size === "mini" ? "xsmall" : r.size)
    ), l = P(() => `button ${t.button} ${t[r.type]}${r.size ? ` ${t[r.size]}` : ""}${r.outline ? ` ${t.outline}` : ""}${r.loading ? ` ${t.loading}` : ""}${r.float ? ` ${t[`float-${r.float}`]}` : ""}${r.text ? ` ${t.text}` : ""}${r.disabled ? ` ${t.disabled}` : ""}${r.block ? ` ${t.block}` : ""}${r.active ? ` ${t.active}` : ""}${r.icon || r.loading ? ` ${t.withIcon}` : ""}${r.square ? ` ${t.square}` : ""}`);
    return (u, f) => (y(), ue(Pt(u.element), gt({
      class: l.value,
      disabled: i.value,
      "aria-disabled": o.value,
      "aria-busy": s.value,
      href: u.href,
      "aria-live": "polite"
    }, {
      ...b(n),
      ...r.nativeType ? { type: r.nativeType } : {}
    }), {
      default: he(() => [
        u.loading || u.icon ? (y(), A("span", {
          key: 0,
          class: Q(b(t).icon)
        }, [
          u.loading ? (y(), ue(b(_E), {
            key: 0,
            size: a.value
          }, null, 8, ["size"])) : u.icon ? (y(), ue(b(ff), {
            key: 1,
            icon: u.icon,
            size: a.value
          }, null, 8, ["icon", "size"])) : _e("", !0)
        ], 2)) : _e("", !0),
        u.label ? (y(), A("span", yE, Je(u.label), 1)) : u.$slots.default ? we(u.$slots, "default", { key: 2 }) : _e("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy", "href"]));
  }
}), kE = "_button_slkfq_115", CE = "_active_slkfq_149", xE = "_disabled_slkfq_167", EE = "_loading_slkfq_175", SE = "_secondary_slkfq_198", AE = "_highlight_slkfq_220", TE = "_tertiary_slkfq_242", ME = "_success_slkfq_264", $E = "_warning_slkfq_286", LE = "_danger_slkfq_308", IE = "_xmini_slkfq_333", OE = "_square_slkfq_338", RE = "_mini_slkfq_343", PE = "_small_slkfq_353", DE = "_medium_slkfq_363", BE = "_large_slkfq_373", NE = "_xlarge_slkfq_378", FE = "_outline_slkfq_391", zE = "_primary_slkfq_395", qE = "_text_slkfq_432", HE = "_transparent_slkfq_500", jE = "_withIcon_slkfq_505", VE = "_icon_slkfq_511", UE = "_block_slkfq_520", KE = {
  button: kE,
  active: CE,
  disabled: xE,
  loading: EE,
  secondary: SE,
  highlight: AE,
  tertiary: TE,
  success: ME,
  warning: $E,
  danger: LE,
  xmini: IE,
  square: OE,
  mini: RE,
  small: PE,
  medium: DE,
  large: BE,
  xlarge: NE,
  outline: FE,
  primary: zE,
  text: qE,
  transparent: HE,
  withIcon: jE,
  icon: VE,
  block: UE,
  "float-left": "_float-left_slkfq_524",
  "float-right": "_float-right_slkfq_528"
}, WE = {
  $style: KE
}, GE = /* @__PURE__ */ Tr(wE, [["__cssModules", WE]]), ZE = /* @__PURE__ */ re({
  name: "N8nText",
  __name: "Text",
  props: {
    bold: { type: Boolean, default: !1 },
    size: { default: "medium" },
    color: {},
    align: {},
    compact: { type: Boolean, default: !1 },
    tag: { default: "span" }
  },
  setup(e) {
    const t = e, n = af(), r = P(() => {
      const s = [];
      return t.align && s.push(`align-${t.align}`), t.color && s.push(t.color), t.compact && s.push("compact"), s.push(`size-${t.size}`), s.push(t.bold ? "bold" : "regular"), s.map((o) => n[o]);
    });
    return (s, o) => (y(), ue(Pt(s.tag), gt({
      class: ["n8n-text", ...r.value]
    }, s.$attrs), {
      default: he(() => [
        we(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XE = "_bold_ushv1_1", YE = "_regular_ushv1_5", JE = "_compact_ushv1_34", QE = "_primary_ushv1_38", eS = "_secondary_ushv1_42", tS = "_danger_ushv1_62", nS = "_success_ushv1_66", rS = "_warning_ushv1_70", oS = {
  bold: XE,
  regular: YE,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: JE,
  primary: QE,
  secondary: eS,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: tS,
  success: nS,
  warning: rS,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, sS = {
  $style: oS
}, iS = /* @__PURE__ */ Tr(ZE, [["__cssModules", sS]]), Un = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = e == null ? void 0 : e(s);
  if (n === !1 || !o)
    return t == null ? void 0 : t(s);
};
var Qd;
const Bt = typeof window < "u", aS = (e) => typeof e == "string", Db = () => {
}, Bb = Bt && ((Qd = window == null ? void 0 : window.navigator) == null ? void 0 : Qd.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nb(e) {
  return typeof e == "function" ? e() : b(e);
}
function lS(e) {
  return e;
}
function df(e) {
  return ju() ? (l1(e), !0) : !1;
}
function cS(e, t = !0) {
  _t() ? it(e) : t ? e() : Ue(e);
}
function yr(e) {
  var t;
  const n = Nb(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const pf = Bt ? window : void 0;
function Ur(...e) {
  let t, n, r, s;
  if (aS(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = pf) : [t, n, r, s] = e, !t)
    return Db;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((f) => f()), o.length = 0;
  }, a = (f, c, p, d) => (f.addEventListener(c, p, d), () => f.removeEventListener(c, p, d)), l = Te(() => [yr(t), Nb(s)], ([f, c]) => {
    i(), f && o.push(...n.flatMap((p) => r.map((d) => a(f, p, d, c))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return df(u), u;
}
let e0 = !1;
function uS(e, t, n = {}) {
  const { window: r = pf, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Bb && !e0 && (e0 = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", Db)));
  let a = !0;
  const l = (p) => s.some((d) => {
    if (typeof d == "string")
      return Array.from(r.document.querySelectorAll(d)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = yr(d);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), f = [
    Ur(r, "click", (p) => {
      const d = yr(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (a = !l(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    Ur(r, "pointerdown", (p) => {
      const d = yr(e);
      d && (a = !p.composedPath().includes(d) && !l(p));
    }, { passive: !0 }),
    i && Ur(r, "blur", (p) => {
      var d;
      const v = yr(e);
      ((d = r.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function fS(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), cS(r, t), n;
}
const t0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, n0 = "__vueuse_ssr_handlers__";
t0[n0] = t0[n0] || {};
var r0 = Object.getOwnPropertySymbols, dS = Object.prototype.hasOwnProperty, pS = Object.prototype.propertyIsEnumerable, hS = (e, t) => {
  var n = {};
  for (var r in e)
    dS.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && r0)
    for (var r of r0(e))
      t.indexOf(r) < 0 && pS.call(e, r) && (n[r] = e[r]);
  return n;
};
function ji(e, t, n = {}) {
  const r = n, { window: s = pf } = r, o = hS(r, ["window"]);
  let i;
  const a = fS(() => s && "ResizeObserver" in s), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = Te(() => yr(e), (c) => {
    l(), a.value && s && c && (i = new ResizeObserver(t), i.observe(c, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return df(f), {
    isSupported: a,
    stop: f
  };
}
var o0;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(o0 || (o0 = {}));
var gS = Object.defineProperty, s0 = Object.getOwnPropertySymbols, mS = Object.prototype.hasOwnProperty, vS = Object.prototype.propertyIsEnumerable, i0 = (e, t, n) => t in e ? gS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, bS = (e, t) => {
  for (var n in t || (t = {}))
    mS.call(t, n) && i0(e, n, t[n]);
  if (s0)
    for (var n of s0(t))
      vS.call(t, n) && i0(e, n, t[n]);
  return e;
};
const _S = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
bS({
  linear: lS
}, _S);
const yS = () => Bt && /firefox/i.test(window.navigator.userAgent), hf = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
    clientX: t,
    clientY: n
  };
};
var Fb = typeof global == "object" && global && global.Object === Object && global, wS = typeof self == "object" && self && self.Object === Object && self, Nn = Fb || wS || Function("return this")(), Cr = Nn.Symbol, zb = Object.prototype, kS = zb.hasOwnProperty, CS = zb.toString, Po = Cr ? Cr.toStringTag : void 0;
function xS(e) {
  var t = kS.call(e, Po), n = e[Po];
  try {
    e[Po] = void 0;
    var r = !0;
  } catch {
  }
  var s = CS.call(e);
  return r && (t ? e[Po] = n : delete e[Po]), s;
}
var ES = Object.prototype, SS = ES.toString;
function AS(e) {
  return SS.call(e);
}
var TS = "[object Null]", MS = "[object Undefined]", a0 = Cr ? Cr.toStringTag : void 0;
function Ao(e) {
  return e == null ? e === void 0 ? MS : TS : a0 && a0 in Object(e) ? xS(e) : AS(e);
}
function bo(e) {
  return e != null && typeof e == "object";
}
var $S = "[object Symbol]";
function Vi(e) {
  return typeof e == "symbol" || bo(e) && Ao(e) == $S;
}
function LS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var er = Array.isArray, l0 = Cr ? Cr.prototype : void 0, c0 = l0 ? l0.toString : void 0;
function qb(e) {
  if (typeof e == "string")
    return e;
  if (er(e))
    return LS(e, qb) + "";
  if (Vi(e))
    return c0 ? c0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var IS = /\s/;
function OS(e) {
  for (var t = e.length; t-- && IS.test(e.charAt(t)); )
    ;
  return t;
}
var RS = /^\s+/;
function PS(e) {
  return e && e.slice(0, OS(e) + 1).replace(RS, "");
}
function _o(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var u0 = NaN, DS = /^[-+]0x[0-9a-f]+$/i, BS = /^0b[01]+$/i, NS = /^0o[0-7]+$/i, FS = parseInt;
function f0(e) {
  if (typeof e == "number")
    return e;
  if (Vi(e))
    return u0;
  if (_o(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _o(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = PS(e);
  var n = BS.test(e);
  return n || NS.test(e) ? FS(e.slice(2), n ? 2 : 8) : DS.test(e) ? u0 : +e;
}
function zS(e) {
  return e;
}
var qS = "[object AsyncFunction]", HS = "[object Function]", jS = "[object GeneratorFunction]", VS = "[object Proxy]";
function Hb(e) {
  if (!_o(e))
    return !1;
  var t = Ao(e);
  return t == HS || t == jS || t == qS || t == VS;
}
var Ma = Nn["__core-js_shared__"], d0 = (function() {
  var e = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function US(e) {
  return !!d0 && d0 in e;
}
var KS = Function.prototype, WS = KS.toString;
function Jr(e) {
  if (e != null) {
    try {
      return WS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var GS = /[\\^$.*+?()[\]{}|]/g, ZS = /^\[object .+?Constructor\]$/, XS = Function.prototype, YS = Object.prototype, JS = XS.toString, QS = YS.hasOwnProperty, eA = RegExp(
  "^" + JS.call(QS).replace(GS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tA(e) {
  if (!_o(e) || US(e))
    return !1;
  var t = Hb(e) ? eA : ZS;
  return t.test(Jr(e));
}
function nA(e, t) {
  return e == null ? void 0 : e[t];
}
function To(e, t) {
  var n = nA(e, t);
  return tA(n) ? n : void 0;
}
var wu = To(Nn, "WeakMap");
function rA(e, t, n, r) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var oA = 9007199254740991, sA = /^(?:0|[1-9]\d*)$/;
function jb(e, t) {
  var n = typeof e;
  return t = t ?? oA, !!t && (n == "number" || n != "symbol" && sA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Vb(e, t) {
  return e === t || e !== e && t !== t;
}
var iA = 9007199254740991;
function gf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iA;
}
function aA(e) {
  return e != null && gf(e.length) && !Hb(e);
}
var lA = Object.prototype;
function cA(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || lA;
  return e === n;
}
function uA(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fA = "[object Arguments]";
function p0(e) {
  return bo(e) && Ao(e) == fA;
}
var Ub = Object.prototype, dA = Ub.hasOwnProperty, pA = Ub.propertyIsEnumerable, Kb = p0(/* @__PURE__ */ (function() {
  return arguments;
})()) ? p0 : function(e) {
  return bo(e) && dA.call(e, "callee") && !pA.call(e, "callee");
};
function hA() {
  return !1;
}
var Wb = typeof exports == "object" && exports && !exports.nodeType && exports, h0 = Wb && typeof module == "object" && module && !module.nodeType && module, gA = h0 && h0.exports === Wb, g0 = gA ? Nn.Buffer : void 0, mA = g0 ? g0.isBuffer : void 0, ku = mA || hA, vA = "[object Arguments]", bA = "[object Array]", _A = "[object Boolean]", yA = "[object Date]", wA = "[object Error]", kA = "[object Function]", CA = "[object Map]", xA = "[object Number]", EA = "[object Object]", SA = "[object RegExp]", AA = "[object Set]", TA = "[object String]", MA = "[object WeakMap]", $A = "[object ArrayBuffer]", LA = "[object DataView]", IA = "[object Float32Array]", OA = "[object Float64Array]", RA = "[object Int8Array]", PA = "[object Int16Array]", DA = "[object Int32Array]", BA = "[object Uint8Array]", NA = "[object Uint8ClampedArray]", FA = "[object Uint16Array]", zA = "[object Uint32Array]", ft = {};
ft[IA] = ft[OA] = ft[RA] = ft[PA] = ft[DA] = ft[BA] = ft[NA] = ft[FA] = ft[zA] = !0;
ft[vA] = ft[bA] = ft[$A] = ft[_A] = ft[LA] = ft[yA] = ft[wA] = ft[kA] = ft[CA] = ft[xA] = ft[EA] = ft[SA] = ft[AA] = ft[TA] = ft[MA] = !1;
function qA(e) {
  return bo(e) && gf(e.length) && !!ft[Ao(e)];
}
function HA(e) {
  return function(t) {
    return e(t);
  };
}
var Gb = typeof exports == "object" && exports && !exports.nodeType && exports, Go = Gb && typeof module == "object" && module && !module.nodeType && module, jA = Go && Go.exports === Gb, $a = jA && Fb.process, m0 = (function() {
  try {
    var e = Go && Go.require && Go.require("util").types;
    return e || $a && $a.binding && $a.binding("util");
  } catch {
  }
})(), v0 = m0 && m0.isTypedArray, Zb = v0 ? HA(v0) : qA, VA = Object.prototype, UA = VA.hasOwnProperty;
function KA(e, t) {
  var n = er(e), r = !n && Kb(e), s = !n && !r && ku(e), o = !n && !r && !s && Zb(e), i = n || r || s || o, a = i ? uA(e.length, String) : [], l = a.length;
  for (var u in e)
    UA.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    jb(u, l))) && a.push(u);
  return a;
}
function WA(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var GA = WA(Object.keys, Object), ZA = Object.prototype, XA = ZA.hasOwnProperty;
function YA(e) {
  if (!cA(e))
    return GA(e);
  var t = [];
  for (var n in Object(e))
    XA.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xb(e) {
  return aA(e) ? KA(e) : YA(e);
}
var JA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, QA = /^\w*$/;
function mf(e, t) {
  if (er(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Vi(e) ? !0 : QA.test(e) || !JA.test(e) || t != null && e in Object(t);
}
var as = To(Object, "create");
function eT() {
  this.__data__ = as ? as(null) : {}, this.size = 0;
}
function tT(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nT = "__lodash_hash_undefined__", rT = Object.prototype, oT = rT.hasOwnProperty;
function sT(e) {
  var t = this.__data__;
  if (as) {
    var n = t[e];
    return n === nT ? void 0 : n;
  }
  return oT.call(t, e) ? t[e] : void 0;
}
var iT = Object.prototype, aT = iT.hasOwnProperty;
function lT(e) {
  var t = this.__data__;
  return as ? t[e] !== void 0 : aT.call(t, e);
}
var cT = "__lodash_hash_undefined__";
function uT(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = as && t === void 0 ? cT : t, this;
}
function Yr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yr.prototype.clear = eT;
Yr.prototype.delete = tT;
Yr.prototype.get = sT;
Yr.prototype.has = lT;
Yr.prototype.set = uT;
function fT() {
  this.__data__ = [], this.size = 0;
}
function Ui(e, t) {
  for (var n = e.length; n--; )
    if (Vb(e[n][0], t))
      return n;
  return -1;
}
var dT = Array.prototype, pT = dT.splice;
function hT(e) {
  var t = this.__data__, n = Ui(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : pT.call(t, n, 1), --this.size, !0;
}
function gT(e) {
  var t = this.__data__, n = Ui(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function mT(e) {
  return Ui(this.__data__, e) > -1;
}
function vT(e, t) {
  var n = this.__data__, r = Ui(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ir(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = fT;
ir.prototype.delete = hT;
ir.prototype.get = gT;
ir.prototype.has = mT;
ir.prototype.set = vT;
var ls = To(Nn, "Map");
function bT() {
  this.size = 0, this.__data__ = {
    hash: new Yr(),
    map: new (ls || ir)(),
    string: new Yr()
  };
}
function _T(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ki(e, t) {
  var n = e.__data__;
  return _T(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function yT(e) {
  var t = Ki(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function wT(e) {
  return Ki(this, e).get(e);
}
function kT(e) {
  return Ki(this, e).has(e);
}
function CT(e, t) {
  var n = Ki(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ar(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ar.prototype.clear = bT;
ar.prototype.delete = yT;
ar.prototype.get = wT;
ar.prototype.has = kT;
ar.prototype.set = CT;
var xT = "Expected a function";
function vf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(xT);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, r);
    return n.cache = o.set(s, i) || o, i;
  };
  return n.cache = new (vf.Cache || ar)(), n;
}
vf.Cache = ar;
var ET = 500;
function ST(e) {
  var t = vf(e, function(r) {
    return n.size === ET && n.clear(), r;
  }), n = t.cache;
  return t;
}
var AT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, TT = /\\(\\)?/g, MT = ST(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(AT, function(n, r, s, o) {
    t.push(s ? o.replace(TT, "$1") : r || n);
  }), t;
});
function $T(e) {
  return e == null ? "" : qb(e);
}
function Yb(e, t) {
  return er(e) ? e : mf(e, t) ? [e] : MT($T(e));
}
function Wi(e) {
  if (typeof e == "string" || Vi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Jb(e, t) {
  t = Yb(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Wi(t[n++])];
  return n && n == r ? e : void 0;
}
function rn(e, t, n) {
  var r = e == null ? void 0 : Jb(e, t);
  return r === void 0 ? n : r;
}
function LT(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
function IT() {
  this.__data__ = new ir(), this.size = 0;
}
function OT(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function RT(e) {
  return this.__data__.get(e);
}
function PT(e) {
  return this.__data__.has(e);
}
var DT = 200;
function BT(e, t) {
  var n = this.__data__;
  if (n instanceof ir) {
    var r = n.__data__;
    if (!ls || r.length < DT - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ar(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xn(e) {
  var t = this.__data__ = new ir(e);
  this.size = t.size;
}
Xn.prototype.clear = IT;
Xn.prototype.delete = OT;
Xn.prototype.get = RT;
Xn.prototype.has = PT;
Xn.prototype.set = BT;
function NT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i);
  }
  return o;
}
function FT() {
  return [];
}
var zT = Object.prototype, qT = zT.propertyIsEnumerable, b0 = Object.getOwnPropertySymbols, HT = b0 ? function(e) {
  return e == null ? [] : (e = Object(e), NT(b0(e), function(t) {
    return qT.call(e, t);
  }));
} : FT;
function jT(e, t, n) {
  var r = t(e);
  return er(e) ? r : LT(r, n(e));
}
function _0(e) {
  return jT(e, Xb, HT);
}
var Cu = To(Nn, "DataView"), xu = To(Nn, "Promise"), Eu = To(Nn, "Set"), y0 = "[object Map]", VT = "[object Object]", w0 = "[object Promise]", k0 = "[object Set]", C0 = "[object WeakMap]", x0 = "[object DataView]", UT = Jr(Cu), KT = Jr(ls), WT = Jr(xu), GT = Jr(Eu), ZT = Jr(wu), _r = Ao;
(Cu && _r(new Cu(new ArrayBuffer(1))) != x0 || ls && _r(new ls()) != y0 || xu && _r(xu.resolve()) != w0 || Eu && _r(new Eu()) != k0 || wu && _r(new wu()) != C0) && (_r = function(e) {
  var t = Ao(e), n = t == VT ? e.constructor : void 0, r = n ? Jr(n) : "";
  if (r)
    switch (r) {
      case UT:
        return x0;
      case KT:
        return y0;
      case WT:
        return w0;
      case GT:
        return k0;
      case ZT:
        return C0;
    }
  return t;
});
var E0 = Nn.Uint8Array, XT = "__lodash_hash_undefined__";
function YT(e) {
  return this.__data__.set(e, XT), this;
}
function JT(e) {
  return this.__data__.has(e);
}
function bi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ar(); ++t < n; )
    this.add(e[t]);
}
bi.prototype.add = bi.prototype.push = YT;
bi.prototype.has = JT;
function QT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function eM(e, t) {
  return e.has(t);
}
var tM = 1, nM = 2;
function Qb(e, t, n, r, s, o) {
  var i = n & tM, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, p = !0, d = n & nM ? new bi() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < a; ) {
    var v = e[c], g = t[c];
    if (r)
      var C = i ? r(g, v, c, t, e, o) : r(v, g, c, e, t, o);
    if (C !== void 0) {
      if (C)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!QT(t, function(h, k) {
        if (!eM(d, k) && (v === h || s(v, h, n, r, o)))
          return d.push(k);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || s(v, g, n, r, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
function rM(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
function oM(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var sM = 1, iM = 2, aM = "[object Boolean]", lM = "[object Date]", cM = "[object Error]", uM = "[object Map]", fM = "[object Number]", dM = "[object RegExp]", pM = "[object Set]", hM = "[object String]", gM = "[object Symbol]", mM = "[object ArrayBuffer]", vM = "[object DataView]", S0 = Cr ? Cr.prototype : void 0, La = S0 ? S0.valueOf : void 0;
function bM(e, t, n, r, s, o, i) {
  switch (n) {
    case vM:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case mM:
      return !(e.byteLength != t.byteLength || !o(new E0(e), new E0(t)));
    case aM:
    case lM:
    case fM:
      return Vb(+e, +t);
    case cM:
      return e.name == t.name && e.message == t.message;
    case dM:
    case hM:
      return e == t + "";
    case uM:
      var a = rM;
    case pM:
      var l = r & sM;
      if (a || (a = oM), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= iM, i.set(e, t);
      var f = Qb(a(e), a(t), r, s, o, i);
      return i.delete(e), f;
    case gM:
      if (La)
        return La.call(e) == La.call(t);
  }
  return !1;
}
var _M = 1, yM = Object.prototype, wM = yM.hasOwnProperty;
function kM(e, t, n, r, s, o) {
  var i = n & _M, a = _0(e), l = a.length, u = _0(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(i ? p in t : wM.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var C = i; ++c < l; ) {
    p = a[c];
    var h = e[p], k = t[p];
    if (r)
      var w = i ? r(k, h, p, t, e, o) : r(h, k, p, e, t, o);
    if (!(w === void 0 ? h === k || s(h, k, n, r, o) : w)) {
      g = !1;
      break;
    }
    C || (C = p == "constructor");
  }
  if (g && !C) {
    var _ = e.constructor, E = t.constructor;
    _ != E && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof E == "function" && E instanceof E) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var CM = 1, A0 = "[object Arguments]", T0 = "[object Array]", Ps = "[object Object]", xM = Object.prototype, M0 = xM.hasOwnProperty;
function EM(e, t, n, r, s, o) {
  var i = er(e), a = er(t), l = i ? T0 : _r(e), u = a ? T0 : _r(t);
  l = l == A0 ? Ps : l, u = u == A0 ? Ps : u;
  var f = l == Ps, c = u == Ps, p = l == u;
  if (p && ku(e)) {
    if (!ku(t))
      return !1;
    i = !0, f = !1;
  }
  if (p && !f)
    return o || (o = new Xn()), i || Zb(e) ? Qb(e, t, n, r, s, o) : bM(e, t, l, n, r, s, o);
  if (!(n & CM)) {
    var d = f && M0.call(e, "__wrapped__"), v = c && M0.call(t, "__wrapped__");
    if (d || v) {
      var g = d ? e.value() : e, C = v ? t.value() : t;
      return o || (o = new Xn()), s(g, C, n, r, o);
    }
  }
  return p ? (o || (o = new Xn()), kM(e, t, n, r, s, o)) : !1;
}
function Gi(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !bo(e) && !bo(t) ? e !== e && t !== t : EM(e, t, n, r, Gi, s);
}
var SM = 1, AM = 2;
function TM(e, t, n, r) {
  var s = n.length, o = s;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var i = n[s];
    if (i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    i = n[s];
    var a = i[0], l = e[a], u = i[1];
    if (i[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var f = new Xn(), c;
      if (!(c === void 0 ? Gi(u, l, SM | AM, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function e_(e) {
  return e === e && !_o(e);
}
function MM(e) {
  for (var t = Xb(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, e_(s)];
  }
  return t;
}
function t_(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function $M(e) {
  var t = MM(e);
  return t.length == 1 && t[0][2] ? t_(t[0][0], t[0][1]) : function(n) {
    return n === e || TM(n, e, t);
  };
}
function LM(e, t) {
  return e != null && t in Object(e);
}
function IM(e, t, n) {
  t = Yb(t, e);
  for (var r = -1, s = t.length, o = !1; ++r < s; ) {
    var i = Wi(t[r]);
    if (!(o = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && gf(s) && jb(i, s) && (er(e) || Kb(e)));
}
function OM(e, t) {
  return e != null && IM(e, t, LM);
}
var RM = 1, PM = 2;
function DM(e, t) {
  return mf(e) && e_(t) ? t_(Wi(e), t) : function(n) {
    var r = rn(n, e);
    return r === void 0 && r === t ? OM(n, e) : Gi(t, r, RM | PM);
  };
}
function BM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function NM(e) {
  return function(t) {
    return Jb(t, e);
  };
}
function FM(e) {
  return mf(e) ? BM(Wi(e)) : NM(e);
}
function zM(e) {
  return typeof e == "function" ? e : e == null ? zS : typeof e == "object" ? er(e) ? DM(e[0], e[1]) : $M(e) : FM(e);
}
var Ia = function() {
  return Nn.Date.now();
}, qM = "Expected a function", HM = Math.max, jM = Math.min;
function Su(e, t, n) {
  var r, s, o, i, a, l, u = 0, f = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(qM);
  t = f0(t) || 0, _o(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? HM(f0(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function d(x) {
    var M = r, $ = s;
    return r = s = void 0, u = x, i = e.apply($, M), i;
  }
  function v(x) {
    return u = x, a = setTimeout(h, t), f ? d(x) : i;
  }
  function g(x) {
    var M = x - l, $ = x - u, O = t - M;
    return c ? jM(O, o - $) : O;
  }
  function C(x) {
    var M = x - l, $ = x - u;
    return l === void 0 || M >= t || M < 0 || c && $ >= o;
  }
  function h() {
    var x = Ia();
    if (C(x))
      return k(x);
    a = setTimeout(h, g(x));
  }
  function k(x) {
    return a = void 0, p && r ? d(x) : (r = s = void 0, i);
  }
  function w() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = s = a = void 0;
  }
  function _() {
    return a === void 0 ? i : k(Ia());
  }
  function E() {
    var x = Ia(), M = C(x);
    if (r = arguments, s = this, l = x, M) {
      if (a === void 0)
        return v(l);
      if (c)
        return clearTimeout(a), a = setTimeout(h, t), d(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), i;
  }
  return E.cancel = w, E.flush = _, E;
}
function VM(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var s = r - 1;
  return rA(e, zM(t), s);
}
function _i(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
function Au(e, t) {
  return Gi(e, t);
}
function Kr(e) {
  return e == null;
}
function UM(e) {
  return e === void 0;
}
const n_ = (e) => e === void 0, bf = (e) => typeof e == "boolean", vt = (e) => typeof e == "number", cs = (e) => typeof Element > "u" ? !1 : e instanceof Element, KM = (e) => Ke(e) ? !Number.isNaN(Number(e)) : !1, WM = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class GM extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ZM(e, t) {
  throw new GM(`[${e}] ${t}`);
}
function yo(e, t = "px") {
  if (!e)
    return "";
  if (vt(e) || KM(e))
    return `${e}${t}`;
  if (Ke(e))
    return e;
}
function XM(e, t) {
  if (!Bt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const s = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), o = s + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  s < i ? e.scrollTop = s : o > a && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var YM = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), r_ = YM, JM = /* @__PURE__ */ re({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), QM = JM, e$ = /* @__PURE__ */ re({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), t$ = e$, n$ = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      m("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), r$ = n$, o$ = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), _f = o$, s$ = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Tu = s$, i$ = /* @__PURE__ */ re({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), a$ = i$, l$ = /* @__PURE__ */ re({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), c$ = l$, u$ = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), f$ = u$, d$ = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), o_ = d$, p$ = /* @__PURE__ */ re({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), $0 = p$, h$ = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (y(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), g$ = h$;
const s_ = "__epPropKey", Be = (e) => e, m$ = (e) => Fe(e) && !!e[s_], Zi = (e, t) => {
  if (!Fe(e) || m$(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, l = {
    type: o,
    required: !!r,
    validator: n || i ? (u) => {
      let f = !1, c = [];
      if (n && (c = Array.from(n), Xe(e, "default") && c.push(s), f || (f = c.includes(u))), i && (f || (f = i(u))), !f && c.length > 0) {
        const p = [...new Set(c)].map((d) => JSON.stringify(d)).join(", ");
        P3(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [s_]: !0
  };
  return Xe(e, "default") && (l.default = s), l;
}, ot = (e) => _i(Object.entries(e).map(([t, n]) => [
  t,
  Zi(n, t)
])), En = Be([
  String,
  Object,
  Function
]), i_ = {
  validating: o_,
  success: r$,
  error: _f
}, An = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, v$ = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), yf = (e) => (e.install = Dt, e), Yn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Wt = "update:modelValue", wf = "change", _s = ["", "default", "small", "large"], b$ = {
  large: 40,
  default: 32,
  small: 24
}, _$ = (e) => b$[e || "default"], y$ = (e) => ["", ..._s].includes(e), a_ = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), kf = (e) => e, w$ = ["class", "style"], k$ = /^on[A-Z]/, C$ = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => ((n == null ? void 0 : n.value) || []).concat(w$)), s = _t();
  return P(s ? () => {
    var o;
    return _i(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !r.value.includes(i) && !(t && k$.test(i))));
  } : () => ({}));
}, l_ = ({ from: e, replacement: t, scope: n, version: r, ref: s, type: o = "API" }, i) => {
  Te(() => b(i), (a) => {
  }, {
    immediate: !0
  });
};
var x$ = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const E$ = (e) => (t, n) => S$(t, n, b(e)), S$ = (e, t, n) => rn(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var o;
  return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`;
}), A$ = (e) => {
  const t = P(() => b(e).name), n = bt(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: E$(e)
  };
}, T$ = Symbol("localeContextKey"), Tn = (e) => {
  const t = ze(T$, W());
  return A$(P(() => t.value || x$));
}, Oa = "el", M$ = "is-", Dr = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, $$ = Symbol("namespaceContextKey"), Cf = (e) => {
  const t = _t() ? ze($$, W(Oa)) : W(Oa);
  return P(() => b(t) || Oa);
}, Qe = (e, t) => {
  const n = Cf();
  return {
    namespace: n,
    b: (g = "") => Dr(n.value, e, g, "", ""),
    e: (g) => g ? Dr(n.value, e, "", g, "") : "",
    m: (g) => g ? Dr(n.value, e, "", "", g) : "",
    be: (g, C) => g && C ? Dr(n.value, e, g, C, "") : "",
    em: (g, C) => g && C ? Dr(n.value, e, "", g, C) : "",
    bm: (g, C) => g && C ? Dr(n.value, e, g, "", C) : "",
    bem: (g, C, h) => g && C && h ? Dr(n.value, e, g, C, h) : "",
    is: (g, ...C) => {
      const h = C.length >= 1 ? C[0] : !0;
      return g && h ? `${M$}${g}` : "";
    },
    cssVar: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${h}`] = g[h]);
      return C;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${e}-${h}`] = g[h]);
      return C;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, L$ = Zi({
  type: Be(Boolean),
  default: null
}), I$ = Zi({
  type: Be(Function)
}), O$ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], s = {
    [e]: L$,
    [n]: I$
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: c
    }) => {
      const p = _t(), { emit: d } = p, v = p.props, g = P(() => Ee(v[n])), C = P(() => v[e] === null), h = (M) => {
        i.value !== !0 && (i.value = !0, a && (a.value = M), Ee(f) && f(M));
      }, k = (M) => {
        i.value !== !1 && (i.value = !1, a && (a.value = M), Ee(c) && c(M));
      }, w = (M) => {
        if (v.disabled === !0 || Ee(u) && !u())
          return;
        const $ = g.value && Bt;
        $ && d(t, !0), (C.value || !$) && h(M);
      }, _ = (M) => {
        if (v.disabled === !0 || !Bt)
          return;
        const $ = g.value && Bt;
        $ && d(t, !1), (C.value || !$) && k(M);
      }, E = (M) => {
        bf(M) && (v.disabled && M ? g.value && d(t, !1) : i.value !== M && (M ? h() : k()));
      }, x = () => {
        i.value ? _() : w();
      };
      return Te(() => v[e], E), l && p.appContext.config.globalProperties.$route !== void 0 && Te(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && i.value && _();
      }), it(() => {
        E(v[e]);
      }), {
        hide: _,
        show: w,
        toggle: x,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: r
  };
}, c_ = (e) => {
  const t = _t();
  return P(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Zt = "top", pn = "bottom", hn = "right", Xt = "left", xf = "auto", ys = [Zt, pn, hn, Xt], wo = "start", us = "end", R$ = "clippingParents", u_ = "viewport", Do = "popper", P$ = "reference", L0 = ys.reduce(function(e, t) {
  return e.concat([t + "-" + wo, t + "-" + us]);
}, []), Xi = [].concat(ys, [xf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wo, t + "-" + us]);
}, []), D$ = "beforeRead", B$ = "read", N$ = "afterRead", F$ = "beforeMain", z$ = "main", q$ = "afterMain", H$ = "beforeWrite", j$ = "write", V$ = "afterWrite", U$ = [D$, B$, N$, F$, z$, q$, H$, j$, V$];
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ko(e) {
  var t = Mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ef(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function K$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !un(o) || !Bn(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(i) {
      var a = s[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function W$(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !un(s) || !Bn(s) || (Object.assign(s.style, a), Object.keys(o).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
var f_ = { name: "applyStyles", enabled: !0, phase: "write", fn: K$, effect: W$, requires: ["computeStyles"] };
function Dn(e) {
  return e.split("-")[0];
}
var Wr = Math.max, yi = Math.min, Co = Math.round;
function xo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, s = 1;
  if (un(e) && t) {
    var o = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = Co(n.width) / i || 1), o > 0 && (s = Co(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / s, top: n.top / s, right: n.right / r, bottom: n.bottom / s, left: n.left / r, x: n.left / r, y: n.top / s };
}
function Sf(e) {
  var t = xo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function d_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ef(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tr(e) {
  return Mn(e).getComputedStyle(e);
}
function G$(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function Mr(e) {
  return ((ko(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yi(e) {
  return Bn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ef(e) ? e.host : null) || Mr(e);
}
function I0(e) {
  return !un(e) || tr(e).position === "fixed" ? null : e.offsetParent;
}
function Z$(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && un(e)) {
    var r = tr(e);
    if (r.position === "fixed") return null;
  }
  var s = Yi(e);
  for (Ef(s) && (s = s.host); un(s) && ["html", "body"].indexOf(Bn(s)) < 0; ) {
    var o = tr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function ws(e) {
  for (var t = Mn(e), n = I0(e); n && G$(n) && tr(n).position === "static"; ) n = I0(n);
  return n && (Bn(n) === "html" || Bn(n) === "body" && tr(n).position === "static") ? t : n || Z$(e) || t;
}
function Af(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zo(e, t, n) {
  return Wr(e, yi(t, n));
}
function X$(e, t, n) {
  var r = Zo(e, t, n);
  return r > n ? n : r;
}
function p_() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function h_(e) {
  return Object.assign({}, p_(), e);
}
function g_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Y$ = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, h_(typeof e != "number" ? e : g_(e, ys));
};
function J$(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Dn(n.placement), l = Af(a), u = [Xt, hn].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!o || !i)) {
    var c = Y$(s.padding, n), p = Sf(o), d = l === "y" ? Zt : Xt, v = l === "y" ? pn : hn, g = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], C = i[l] - n.rects.reference[l], h = ws(o), k = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, w = g / 2 - C / 2, _ = c[d], E = k - p[f] - c[v], x = k / 2 - p[f] / 2 + w, M = Zo(_, x, E), $ = l;
    n.modifiersData[r] = (t = {}, t[$] = M, t.centerOffset = M - x, t);
  }
}
function Q$(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !d_(t.elements.popper, s) || (t.elements.arrow = s));
}
var eL = { name: "arrow", enabled: !0, phase: "main", fn: J$, effect: Q$, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Eo(e) {
  return e.split("-")[1];
}
var tL = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nL(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return { x: Co(t * s) / s || 0, y: Co(n * s) / s || 0 };
}
function O0(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, c = e.isFixed, p = i.x, d = p === void 0 ? 0 : p, v = i.y, g = v === void 0 ? 0 : v, C = typeof f == "function" ? f({ x: d, y: g }) : { x: d, y: g };
  d = C.x, g = C.y;
  var h = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), w = Xt, _ = Zt, E = window;
  if (u) {
    var x = ws(n), M = "clientHeight", $ = "clientWidth";
    if (x === Mn(n) && (x = Mr(n), tr(x).position !== "static" && a === "absolute" && (M = "scrollHeight", $ = "scrollWidth")), x = x, s === Zt || (s === Xt || s === hn) && o === us) {
      _ = pn;
      var O = c && x === E && E.visualViewport ? E.visualViewport.height : x[M];
      g -= O - r.height, g *= l ? 1 : -1;
    }
    if (s === Xt || (s === Zt || s === pn) && o === us) {
      w = hn;
      var D = c && x === E && E.visualViewport ? E.visualViewport.width : x[$];
      d -= D - r.width, d *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: a }, u && tL), B = f === !0 ? nL({ x: d, y: g }) : { x: d, y: g };
  if (d = B.x, g = B.y, l) {
    var oe;
    return Object.assign({}, N, (oe = {}, oe[_] = k ? "0" : "", oe[w] = h ? "0" : "", oe.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", oe));
  }
  return Object.assign({}, N, (t = {}, t[_] = k ? g + "px" : "", t[w] = h ? d + "px" : "", t.transform = "", t));
}
function rL(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, i = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: Dn(t.placement), variation: Eo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, O0(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, O0(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var m_ = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: rL, data: {} }, Ds = { passive: !0 };
function oL(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, i = r.resize, a = i === void 0 ? !0 : i, l = Mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ds);
  }), a && l.addEventListener("resize", n.update, Ds), function() {
    o && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ds);
    }), a && l.removeEventListener("resize", n.update, Ds);
  };
}
var v_ = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: oL, data: {} }, sL = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ii(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sL[t];
  });
}
var iL = { start: "end", end: "start" };
function R0(e) {
  return e.replace(/start|end/g, function(t) {
    return iL[t];
  });
}
function Tf(e) {
  var t = Mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Mf(e) {
  return xo(Mr(e)).left + Tf(e).scrollLeft;
}
function aL(e) {
  var t = Mn(e), n = Mr(e), r = t.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, a = 0;
  return r && (s = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, a = r.offsetTop)), { width: s, height: o, x: i + Mf(e), y: a };
}
function lL(e) {
  var t, n = Mr(e), r = Tf(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Wr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = Wr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -r.scrollLeft + Mf(e), l = -r.scrollTop;
  return tr(s || n).direction === "rtl" && (a += Wr(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: i, x: a, y: l };
}
function $f(e) {
  var t = tr(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function b_(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : un(e) && $f(e) ? e : b_(Yi(e));
}
function Xo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = b_(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mn(r), i = s ? [o].concat(o.visualViewport || [], $f(r) ? r : []) : r, a = t.concat(i);
  return s ? a : a.concat(Xo(Yi(i)));
}
function Mu(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function cL(e) {
  var t = xo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function P0(e, t) {
  return t === u_ ? Mu(aL(e)) : ko(t) ? cL(t) : Mu(lL(Mr(e)));
}
function uL(e) {
  var t = Xo(Yi(e)), n = ["absolute", "fixed"].indexOf(tr(e).position) >= 0, r = n && un(e) ? ws(e) : e;
  return ko(r) ? t.filter(function(s) {
    return ko(s) && d_(s, r) && Bn(s) !== "body";
  }) : [];
}
function fL(e, t, n) {
  var r = t === "clippingParents" ? uL(e) : [].concat(t), s = [].concat(r, [n]), o = s[0], i = s.reduce(function(a, l) {
    var u = P0(e, l);
    return a.top = Wr(u.top, a.top), a.right = yi(u.right, a.right), a.bottom = yi(u.bottom, a.bottom), a.left = Wr(u.left, a.left), a;
  }, P0(e, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function __(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Dn(r) : null, o = r ? Eo(r) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case Zt:
      l = { x: i, y: t.y - n.height };
      break;
    case pn:
      l = { x: i, y: t.y + t.height };
      break;
    case hn:
      l = { x: t.x + t.width, y: a };
      break;
    case Xt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = s ? Af(s) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (o) {
      case wo:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case us:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function fs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.boundary, i = o === void 0 ? R$ : o, a = n.rootBoundary, l = a === void 0 ? u_ : a, u = n.elementContext, f = u === void 0 ? Do : u, c = n.altBoundary, p = c === void 0 ? !1 : c, d = n.padding, v = d === void 0 ? 0 : d, g = h_(typeof v != "number" ? v : g_(v, ys)), C = f === Do ? P$ : Do, h = e.rects.popper, k = e.elements[p ? C : f], w = fL(ko(k) ? k : k.contextElement || Mr(e.elements.popper), i, l), _ = xo(e.elements.reference), E = __({ reference: _, element: h, placement: s }), x = Mu(Object.assign({}, h, E)), M = f === Do ? x : _, $ = { top: w.top - M.top + g.top, bottom: M.bottom - w.bottom + g.bottom, left: w.left - M.left + g.left, right: M.right - w.right + g.right }, O = e.modifiersData.offset;
  if (f === Do && O) {
    var D = O[s];
    Object.keys($).forEach(function(N) {
      var B = [hn, pn].indexOf(N) >= 0 ? 1 : -1, oe = [Zt, pn].indexOf(N) >= 0 ? "y" : "x";
      $[N] += D[oe] * B;
    });
  }
  return $;
}
function dL(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Xi : l, f = Eo(r), c = f ? a ? L0 : L0.filter(function(v) {
    return Eo(v) === f;
  }) : ys, p = c.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = c);
  var d = p.reduce(function(v, g) {
    return v[g] = fs(e, { placement: g, boundary: s, rootBoundary: o, padding: i })[Dn(g)], v;
  }, {});
  return Object.keys(d).sort(function(v, g) {
    return d[v] - d[g];
  });
}
function pL(e) {
  if (Dn(e) === xf) return [];
  var t = ii(e);
  return [R0(e), t, R0(t)];
}
function hL(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, c = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, v = d === void 0 ? !0 : d, g = n.allowedAutoPlacements, C = t.options.placement, h = Dn(C), k = h === C, w = l || (k || !v ? [ii(C)] : pL(C)), _ = [C].concat(w).reduce(function(Se, Re) {
      return Se.concat(Dn(Re) === xf ? dL(t, { placement: Re, boundary: f, rootBoundary: c, padding: u, flipVariations: v, allowedAutoPlacements: g }) : Re);
    }, []), E = t.rects.reference, x = t.rects.popper, M = /* @__PURE__ */ new Map(), $ = !0, O = _[0], D = 0; D < _.length; D++) {
      var N = _[D], B = Dn(N), oe = Eo(N) === wo, z = [Zt, pn].indexOf(B) >= 0, ie = z ? "width" : "height", j = fs(t, { placement: N, boundary: f, rootBoundary: c, altBoundary: p, padding: u }), V = z ? oe ? hn : Xt : oe ? pn : Zt;
      E[ie] > x[ie] && (V = ii(V));
      var H = ii(V), J = [];
      if (o && J.push(j[B] <= 0), a && J.push(j[V] <= 0, j[H] <= 0), J.every(function(Se) {
        return Se;
      })) {
        O = N, $ = !1;
        break;
      }
      M.set(N, J);
    }
    if ($) for (var I = v ? 3 : 1, Z = function(Se) {
      var Re = _.find(function(Pe) {
        var We = M.get(Pe);
        if (We) return We.slice(0, Se).every(function(qe) {
          return qe;
        });
      });
      if (Re) return O = Re, "break";
    }, K = I; K > 0; K--) {
      var me = Z(K);
      if (me === "break") break;
    }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
var gL = { name: "flip", enabled: !0, phase: "main", fn: hL, requiresIfExists: ["offset"], data: { _skip: !1 } };
function D0(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function B0(e) {
  return [Zt, hn, pn, Xt].some(function(t) {
    return e[t] >= 0;
  });
}
function mL(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, o = t.modifiersData.preventOverflow, i = fs(t, { elementContext: "reference" }), a = fs(t, { altBoundary: !0 }), l = D0(i, r), u = D0(a, s, o), f = B0(l), c = B0(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: c }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": c });
}
var vL = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: mL };
function bL(e, t, n) {
  var r = Dn(e), s = [Xt, Zt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * s, [Xt, hn].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function _L(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, i = Xi.reduce(function(f, c) {
    return f[c] = bL(c, t.rects, o), f;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var yL = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _L };
function wL(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = __({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var y_ = { name: "popperOffsets", enabled: !0, phase: "read", fn: wL, data: {} };
function kL(e) {
  return e === "x" ? "y" : "x";
}
function CL(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, c = n.padding, p = n.tether, d = p === void 0 ? !0 : p, v = n.tetherOffset, g = v === void 0 ? 0 : v, C = fs(t, { boundary: l, rootBoundary: u, padding: c, altBoundary: f }), h = Dn(t.placement), k = Eo(t.placement), w = !k, _ = Af(h), E = kL(_), x = t.modifiersData.popperOffsets, M = t.rects.reference, $ = t.rects.popper, O = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, D = typeof O == "number" ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (x) {
    if (o) {
      var oe, z = _ === "y" ? Zt : Xt, ie = _ === "y" ? pn : hn, j = _ === "y" ? "height" : "width", V = x[_], H = V + C[z], J = V - C[ie], I = d ? -$[j] / 2 : 0, Z = k === wo ? M[j] : $[j], K = k === wo ? -$[j] : -M[j], me = t.elements.arrow, Se = d && me ? Sf(me) : { width: 0, height: 0 }, Re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : p_(), Pe = Re[z], We = Re[ie], qe = Zo(0, M[j], Se[j]), dt = w ? M[j] / 2 - I - qe - Pe - D.mainAxis : Z - qe - Pe - D.mainAxis, pe = w ? -M[j] / 2 + I + qe + We + D.mainAxis : K + qe + We + D.mainAxis, Me = t.elements.arrow && ws(t.elements.arrow), T = Me ? _ === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, L = (oe = N == null ? void 0 : N[_]) != null ? oe : 0, q = V + dt - L - T, Y = V + pe - L, X = Zo(d ? yi(H, q) : H, V, d ? Wr(J, Y) : J);
      x[_] = X, B[_] = X - V;
    }
    if (a) {
      var ee, ae = _ === "x" ? Zt : Xt, se = _ === "x" ? pn : hn, ne = x[E], te = E === "y" ? "height" : "width", ye = ne + C[ae], fe = ne - C[se], ve = [Zt, Xt].indexOf(h) !== -1, U = (ee = N == null ? void 0 : N[E]) != null ? ee : 0, ce = ve ? ye : ne - M[te] - $[te] - U + D.altAxis, Ae = ve ? ne + M[te] + $[te] - U - D.altAxis : fe, Oe = d && ve ? X$(ce, ne, Ae) : Zo(d ? ce : ye, ne, d ? Ae : fe);
      x[E] = Oe, B[E] = Oe - ne;
    }
    t.modifiersData[r] = B;
  }
}
var xL = { name: "preventOverflow", enabled: !0, phase: "main", fn: CL, requiresIfExists: ["offset"] };
function EL(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function SL(e) {
  return e === Mn(e) || !un(e) ? Tf(e) : EL(e);
}
function AL(e) {
  var t = e.getBoundingClientRect(), n = Co(t.width) / e.offsetWidth || 1, r = Co(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function TL(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t), s = un(t) && AL(t), o = Mr(t), i = xo(e, s), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Bn(t) !== "body" || $f(o)) && (a = SL(t)), un(t) ? (l = xo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Mf(o))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function ML(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && s(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function $L(e) {
  var t = ML(e);
  return U$.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function LL(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function IL(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, { options: Object.assign({}, s.options, r.options), data: Object.assign({}, s.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var N0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function F0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Lf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? N0 : s;
  return function(i, a, l) {
    l === void 0 && (l = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, N0, o), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, f = [], c = !1, p = { state: u, setOptions: function(g) {
      var C = typeof g == "function" ? g(u.options) : g;
      v(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = { reference: ko(i) ? Xo(i) : i.contextElement ? Xo(i.contextElement) : [], popper: Xo(a) };
      var h = $L(IL([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = h.filter(function(k) {
        return k.enabled;
      }), d(), p.update();
    }, forceUpdate: function() {
      if (!c) {
        var g = u.elements, C = g.reference, h = g.popper;
        if (F0(C, h)) {
          u.rects = { reference: TL(C, ws(h), u.options.strategy === "fixed"), popper: Sf(h) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var k = 0; k < u.orderedModifiers.length; k++) {
            if (u.reset === !0) {
              u.reset = !1, k = -1;
              continue;
            }
            var w = u.orderedModifiers[k], _ = w.fn, E = w.options, x = E === void 0 ? {} : E, M = w.name;
            typeof _ == "function" && (u = _({ state: u, options: x, name: M, instance: p }) || u);
          }
        }
      }
    }, update: LL(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      v(), c = !0;
    } };
    if (!F0(i, a)) return p;
    p.setOptions(l).then(function(g) {
      !c && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function d() {
      u.orderedModifiers.forEach(function(g) {
        var C = g.name, h = g.options, k = h === void 0 ? {} : h, w = g.effect;
        if (typeof w == "function") {
          var _ = w({ state: u, name: C, instance: p, options: k }), E = function() {
          };
          f.push(_ || E);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
Lf();
var OL = [v_, y_, m_, f_];
Lf({ defaultModifiers: OL });
var RL = [v_, y_, m_, f_, yL, gL, xL, eL, vL], PL = Lf({ defaultModifiers: RL });
const DL = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = BL(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, s = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: c } = b(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...c || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = Zn(), i = W({
    styles: {
      popper: {
        position: b(s).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return Te(s, (l) => {
    const u = b(o);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Te([e, t], ([l, u]) => {
    a(), !(!l || !u) && (o.value = PL(l, u, b(s)));
  }), Yt(() => {
    a();
  }), {
    state: P(() => {
      var l;
      return { ...((l = b(o)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => b(i).styles),
    attributes: P(() => b(i).attributes),
    update: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => b(o))
  };
};
function BL(e) {
  const t = Object.keys(e.elements), n = _i(t.map((s) => [s, e.styles[s] || {}])), r = _i(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: r
  };
}
function z0() {
  let e;
  const t = (r, s) => {
    n(), e = window.setTimeout(r, s);
  }, n = () => window.clearTimeout(e);
  return df(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const q0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, NL = Symbol("elIdInjection"), w_ = () => _t() ? ze(NL, q0) : q0, Ji = (e) => {
  const t = w_(), n = Cf();
  return P(() => b(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let io = [];
const H0 = (e) => {
  const t = e;
  t.key === Yn.esc && io.forEach((n) => n(t));
}, FL = (e) => {
  it(() => {
    io.length === 0 && document.addEventListener("keydown", H0), Bt && io.push(e);
  }), Yt(() => {
    io = io.filter((t) => t !== e), io.length === 0 && Bt && document.removeEventListener("keydown", H0);
  });
};
let j0;
const k_ = () => {
  const e = Cf(), t = w_(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, zL = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, qL = () => {
  const { id: e, selector: t } = k_();
  return j1(() => {
    Bt && !j0 && !document.body.querySelector(t.value) && (j0 = zL(e.value));
  }), {
    id: e,
    selector: t
  };
}, HL = ot({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), jL = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: s
}) => {
  const { registerTimeout: o } = z0(), {
    registerTimeout: i,
    cancelTimeout: a
  } = z0();
  return {
    onOpen: (f) => {
      o(() => {
        r(f);
        const c = b(n);
        vt(c) && c > 0 && i(() => {
          s(f);
        }, c);
      }, b(e));
    },
    onClose: (f) => {
      a(), o(() => {
        s(f);
      }, b(t));
    }
  };
}, C_ = Symbol("elForwardRef"), VL = (e) => {
  Kt(C_, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, UL = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), V0 = W(0), KL = 2e3, WL = Symbol("zIndexContextKey"), GL = (e) => {
  const t = _t() ? ze(WL, void 0) : void 0, n = P(() => {
    const o = b(t);
    return vt(o) ? o : KL;
  }), r = P(() => n.value + V0.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (V0.value++, r.value)
  };
};
function ZL(e) {
  const t = W();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: i } = e.value;
    if (s == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, s)), l = i.slice(Math.max(0, o));
    t.value = {
      selectionStart: s,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = t.value;
    if (o == null || i == null || a == null)
      return;
    let l = s.length;
    if (s.endsWith(i))
      l = s.length - i.length;
    else if (s.startsWith(o))
      l = o.length;
    else {
      const u = o[a - 1], f = s.indexOf(u, a - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const If = Zi({
  type: String,
  values: _s,
  required: !1
}), XL = Symbol("size"), YL = () => {
  const e = ze(XL, {});
  return P(() => b(e.size) || "");
};
function x_(e, { afterFocus: t, beforeBlur: n, afterBlur: r } = {}) {
  const s = _t(), { emit: o } = s, i = Zn(), a = W(!1), l = (c) => {
    a.value || (a.value = !0, o("focus", c), t == null || t());
  }, u = (c) => {
    var p;
    Ee(n) && n(c) || c.relatedTarget && ((p = i.value) != null && p.contains(c.relatedTarget)) || (a.value = !1, o("blur", c), r == null || r());
  }, f = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Te(i, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), Ur(i, "click", f), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: l,
    handleBlur: u
  };
}
const JL = Symbol(), U0 = W();
function QL(e, t = void 0) {
  const n = _t() ? ze(JL, U0) : U0;
  return P(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  });
}
var Ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const eI = ot({
  size: {
    type: Be([Number, String])
  },
  color: {
    type: String
  }
}), tI = /* @__PURE__ */ re({
  name: "ElIcon",
  inheritAttrs: !1
}), nI = /* @__PURE__ */ re({
  ...tI,
  props: eI,
  setup(e) {
    const t = e, n = Qe("icon"), r = P(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: n_(s) ? void 0 : yo(s),
        "--color": o
      };
    });
    return (s, o) => (y(), A("i", gt({
      class: b(n).b(),
      style: b(r)
    }, s.$attrs), [
      we(s.$slots, "default")
    ], 16));
  }
});
var rI = /* @__PURE__ */ Ye(nI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Gt = An(rI), Of = Symbol("formContextKey"), wi = Symbol("formItemContextKey"), ks = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : c_("size"), s = t.global ? n : YL(), o = t.form ? { size: void 0 } : ze(Of, void 0), i = t.formItem ? { size: void 0 } : ze(wi, void 0);
  return P(() => r.value || b(e) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || s.value || "");
}, Qi = (e) => {
  const t = c_("disabled"), n = ze(Of, void 0);
  return P(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, ea = () => {
  const e = ze(Of, void 0), t = ze(wi, void 0);
  return {
    form: e,
    formItem: t
  };
}, E_ = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = W(!1)), r || (r = W(!1));
  const s = W();
  let o;
  const i = P(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return it(() => {
    o = Te([yn(e, "id"), n], ([a, l]) => {
      const u = a ?? (l ? void 0 : Ji().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(r != null && r.value) && !l && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Ni(() => {
    o && o(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: i,
    inputId: s
  };
};
let vn;
const oI = `
  height:0 !important;
  visibility:hidden !important;
  ${yS() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, sI = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function iI(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: sI.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: s, boxSizing: n };
}
function K0(e, t = 1, n) {
  var r;
  vn || (vn = document.createElement("textarea"), document.body.appendChild(vn));
  const { paddingSize: s, borderSize: o, boxSizing: i, contextStyle: a } = iI(e);
  vn.setAttribute("style", `${a};${oI}`), vn.value = e.value || e.placeholder || "";
  let l = vn.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + o : i === "content-box" && (l = l - s), vn.value = "";
  const f = vn.scrollHeight - s;
  if (vt(t)) {
    let c = f * t;
    i === "border-box" && (c = c + s + o), l = Math.max(c, l), u.minHeight = `${c}px`;
  }
  if (vt(n)) {
    let c = f * n;
    i === "border-box" && (c = c + s + o), l = Math.min(c, l);
  }
  return u.height = `${l}px`, (r = vn.parentNode) == null || r.removeChild(vn), vn = void 0, u;
}
const aI = ot({
  id: {
    type: String,
    default: void 0
  },
  size: If,
  disabled: Boolean,
  modelValue: {
    type: Be([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Be([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: En
  },
  prefixIcon: {
    type: En
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Be([Object, Array, String]),
    default: () => kf({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), lI = {
  [Wt]: (e) => Ke(e),
  input: (e) => Ke(e),
  change: (e) => Ke(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, cI = ["role"], uI = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], fI = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], dI = /* @__PURE__ */ re({
  name: "ElInput",
  inheritAttrs: !1
}), pI = /* @__PURE__ */ re({
  ...dI,
  props: aI,
  emits: lI,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Fi(), o = G1(), i = P(() => {
      const U = {};
      return r.containerRole === "combobox" && (U["aria-haspopup"] = s["aria-haspopup"], U["aria-owns"] = s["aria-owns"], U["aria-expanded"] = s["aria-expanded"]), U;
    }), a = P(() => [
      r.type === "textarea" ? C.b() : g.b(),
      g.m(d.value),
      g.is("disabled", v.value),
      g.is("exceed", Se.value),
      {
        [g.b("group")]: o.prepend || o.append,
        [g.bm("group", "append")]: o.append,
        [g.bm("group", "prepend")]: o.prepend,
        [g.m("prefix")]: o.prefix || r.prefixIcon,
        [g.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: I.value && Z.value
      },
      s.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", D.value)
    ]), u = C$({
      excludeKeys: P(() => Object.keys(i.value))
    }), { form: f, formItem: c } = ea(), { inputId: p } = E_(r, {
      formItemContext: c
    }), d = ks(), v = Qi(), g = Qe("input"), C = Qe("textarea"), h = Zn(), k = Zn(), w = W(!1), _ = W(!1), E = W(!1), x = W(), M = Zn(r.inputStyle), $ = P(() => h.value || k.value), { wrapperRef: O, isFocused: D, handleFocus: N, handleBlur: B } = x_($, {
      afterBlur() {
        var U;
        r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "blur").catch((ce) => void 0));
      }
    }), oe = P(() => {
      var U;
      return (U = f == null ? void 0 : f.statusIcon) != null ? U : !1;
    }), z = P(() => (c == null ? void 0 : c.validateState) || ""), ie = P(() => z.value && i_[z.value]), j = P(() => E.value ? g$ : f$), V = P(() => [
      s.style,
      r.inputStyle
    ]), H = P(() => [
      r.inputStyle,
      M.value,
      { resize: r.resize }
    ]), J = P(() => Kr(r.modelValue) ? "" : String(r.modelValue)), I = P(() => r.clearable && !v.value && !r.readonly && !!J.value && (D.value || w.value)), Z = P(() => r.showPassword && !v.value && !r.readonly && !!J.value && (!!J.value || D.value)), K = P(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), me = P(() => J.value.length), Se = P(() => !!K.value && me.value > Number(u.value.maxlength)), Re = P(() => !!o.suffix || !!r.suffixIcon || I.value || r.showPassword || K.value || !!z.value && oe.value), [Pe, We] = ZL(h);
    ji(k, (U) => {
      if (pe(), !K.value || r.resize !== "both")
        return;
      const ce = U[0], { width: Ae } = ce.contentRect;
      x.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const qe = () => {
      const { type: U, autosize: ce } = r;
      if (!(!Bt || U !== "textarea" || !k.value))
        if (ce) {
          const Ae = Fe(ce) ? ce.minRows : void 0, Oe = Fe(ce) ? ce.maxRows : void 0, ut = K0(k.value, Ae, Oe);
          M.value = {
            overflowY: "hidden",
            ...ut
          }, Ue(() => {
            k.value.offsetHeight, M.value = ut;
          });
        } else
          M.value = {
            minHeight: K0(k.value).minHeight
          };
    }, pe = ((U) => {
      let ce = !1;
      return () => {
        var Ae;
        if (ce || !r.autosize)
          return;
        ((Ae = k.value) == null ? void 0 : Ae.offsetParent) === null || (U(), ce = !0);
      };
    })(qe), Me = () => {
      const U = $.value, ce = r.formatter ? r.formatter(J.value) : J.value;
      !U || U.value === ce || (U.value = ce);
    }, T = async (U) => {
      Pe();
      let { value: ce } = U.target;
      if (r.formatter && (ce = r.parser ? r.parser(ce) : ce), !_.value) {
        if (ce === J.value) {
          Me();
          return;
        }
        n(Wt, ce), n("input", ce), await Ue(), Me(), We();
      }
    }, L = (U) => {
      n("change", U.target.value);
    }, q = (U) => {
      n("compositionstart", U), _.value = !0;
    }, Y = (U) => {
      var ce;
      n("compositionupdate", U);
      const Ae = (ce = U.target) == null ? void 0 : ce.value, Oe = Ae[Ae.length - 1] || "";
      _.value = !a_(Oe);
    }, X = (U) => {
      n("compositionend", U), _.value && (_.value = !1, T(U));
    }, ee = () => {
      E.value = !E.value, ae();
    }, ae = async () => {
      var U;
      await Ue(), (U = $.value) == null || U.focus();
    }, se = () => {
      var U;
      return (U = $.value) == null ? void 0 : U.blur();
    }, ne = (U) => {
      w.value = !1, n("mouseleave", U);
    }, te = (U) => {
      w.value = !0, n("mouseenter", U);
    }, ye = (U) => {
      n("keydown", U);
    }, fe = () => {
      var U;
      (U = $.value) == null || U.select();
    }, ve = () => {
      n(Wt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Te(() => r.modelValue, () => {
      var U;
      Ue(() => qe()), r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "change").catch((ce) => void 0));
    }), Te(J, () => Me()), Te(() => r.type, async () => {
      await Ue(), Me(), qe();
    }), it(() => {
      !r.formatter && r.parser, Me(), Ue(qe);
    }), t({
      input: h,
      textarea: k,
      ref: $,
      textareaStyle: H,
      autosize: yn(r, "autosize"),
      focus: ae,
      blur: se,
      select: fe,
      clear: ve,
      resizeTextarea: qe
    }), (U, ce) => Ut((y(), A("div", gt(b(i), {
      class: b(a),
      style: b(V),
      role: U.containerRole,
      onMouseenter: te,
      onMouseleave: ne
    }), [
      _e(" input "),
      U.type !== "textarea" ? (y(), A(et, { key: 0 }, [
        _e(" prepend slot "),
        U.$slots.prepend ? (y(), A("div", {
          key: 0,
          class: Q(b(g).be("group", "prepend"))
        }, [
          we(U.$slots, "prepend")
        ], 2)) : _e("v-if", !0),
        m("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: Q(b(l))
        }, [
          _e(" prefix slot "),
          U.$slots.prefix || U.prefixIcon ? (y(), A("span", {
            key: 0,
            class: Q(b(g).e("prefix"))
          }, [
            m("span", {
              class: Q(b(g).e("prefix-inner"))
            }, [
              we(U.$slots, "prefix"),
              U.prefixIcon ? (y(), ue(b(Gt), {
                key: 0,
                class: Q(b(g).e("icon"))
              }, {
                default: he(() => [
                  (y(), ue(Pt(U.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0),
          m("input", gt({
            id: b(p),
            ref_key: "input",
            ref: h,
            class: b(g).e("inner")
          }, b(u), {
            type: U.showPassword ? E.value ? "text" : "password" : U.type,
            disabled: b(v),
            formatter: U.formatter,
            parser: U.parser,
            readonly: U.readonly,
            autocomplete: U.autocomplete,
            tabindex: U.tabindex,
            "aria-label": U.label,
            placeholder: U.placeholder,
            style: U.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: q,
            onCompositionupdate: Y,
            onCompositionend: X,
            onInput: T,
            onFocus: ce[0] || (ce[0] = (...Ae) => b(N) && b(N)(...Ae)),
            onBlur: ce[1] || (ce[1] = (...Ae) => b(B) && b(B)(...Ae)),
            onChange: L,
            onKeydown: ye
          }), null, 16, uI),
          _e(" suffix slot "),
          b(Re) ? (y(), A("span", {
            key: 1,
            class: Q(b(g).e("suffix"))
          }, [
            m("span", {
              class: Q(b(g).e("suffix-inner"))
            }, [
              !b(I) || !b(Z) || !b(K) ? (y(), A(et, { key: 0 }, [
                we(U.$slots, "suffix"),
                U.suffixIcon ? (y(), ue(b(Gt), {
                  key: 0,
                  class: Q(b(g).e("icon"))
                }, {
                  default: he(() => [
                    (y(), ue(Pt(U.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0)
              ], 64)) : _e("v-if", !0),
              b(I) ? (y(), ue(b(Gt), {
                key: 1,
                class: Q([b(g).e("icon"), b(g).e("clear")]),
                onMousedown: nn(b(Dt), ["prevent"]),
                onClick: ve
              }, {
                default: he(() => [
                  Ce(b(_f))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : _e("v-if", !0),
              b(Z) ? (y(), ue(b(Gt), {
                key: 2,
                class: Q([b(g).e("icon"), b(g).e("password")]),
                onClick: ee
              }, {
                default: he(() => [
                  (y(), ue(Pt(b(j))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0),
              b(K) ? (y(), A("span", {
                key: 3,
                class: Q(b(g).e("count"))
              }, [
                m("span", {
                  class: Q(b(g).e("count-inner"))
                }, Je(b(me)) + " / " + Je(b(u).maxlength), 3)
              ], 2)) : _e("v-if", !0),
              b(z) && b(ie) && b(oe) ? (y(), ue(b(Gt), {
                key: 4,
                class: Q([
                  b(g).e("icon"),
                  b(g).e("validateIcon"),
                  b(g).is("loading", b(z) === "validating")
                ])
              }, {
                default: he(() => [
                  (y(), ue(Pt(b(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0)
        ], 2),
        _e(" append slot "),
        U.$slots.append ? (y(), A("div", {
          key: 1,
          class: Q(b(g).be("group", "append"))
        }, [
          we(U.$slots, "append")
        ], 2)) : _e("v-if", !0)
      ], 64)) : (y(), A(et, { key: 1 }, [
        _e(" textarea "),
        m("textarea", gt({
          id: b(p),
          ref_key: "textarea",
          ref: k,
          class: b(C).e("inner")
        }, b(u), {
          tabindex: U.tabindex,
          disabled: b(v),
          readonly: U.readonly,
          autocomplete: U.autocomplete,
          style: b(H),
          "aria-label": U.label,
          placeholder: U.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: q,
          onCompositionupdate: Y,
          onCompositionend: X,
          onInput: T,
          onFocus: ce[2] || (ce[2] = (...Ae) => b(N) && b(N)(...Ae)),
          onBlur: ce[3] || (ce[3] = (...Ae) => b(B) && b(B)(...Ae)),
          onChange: L,
          onKeydown: ye
        }), null, 16, fI),
        b(K) ? (y(), A("span", {
          key: 0,
          style: st(x.value),
          class: Q(b(g).e("count"))
        }, Je(b(me)) + " / " + Je(b(u).maxlength), 7)) : _e("v-if", !0)
      ], 64))
    ], 16, cI)), [
      [Qn, U.type !== "hidden"]
    ]);
  }
});
var hI = /* @__PURE__ */ Ye(pI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ta = An(hI), lo = 4, gI = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, mI = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), S_ = Symbol("scrollbarContextKey"), vI = ot({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), bI = "Thumb", _I = /* @__PURE__ */ re({
  __name: "thumb",
  props: vI,
  setup(e) {
    const t = e, n = ze(S_), r = Qe("scrollbar");
    n || ZM(bI, "can not inject scrollbar context");
    const s = W(), o = W(), i = W({}), a = W(!1);
    let l = !1, u = !1, f = Bt ? document.onselectstart : null;
    const c = P(() => gI[t.vertical ? "vertical" : "horizontal"]), p = P(() => mI({
      size: t.size,
      move: t.move,
      bar: c.value
    })), d = P(() => s.value[c.value.offset] ** 2 / n.wrapElement[c.value.scrollSize] / t.ratio / o.value[c.value.offset]), v = (x) => {
      var M;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (M = window.getSelection()) == null || M.removeAllRanges(), C(x);
      const $ = x.currentTarget;
      $ && (i.value[c.value.axis] = $[c.value.offset] - (x[c.value.client] - $.getBoundingClientRect()[c.value.direction]));
    }, g = (x) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const M = Math.abs(x.target.getBoundingClientRect()[c.value.direction] - x[c.value.client]), $ = o.value[c.value.offset] / 2, O = (M - $) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = O * n.wrapElement[c.value.scrollSize] / 100;
    }, C = (x) => {
      x.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", k), f = document.onselectstart, document.onselectstart = () => !1;
    }, h = (x) => {
      if (!s.value || !o.value || l === !1)
        return;
      const M = i.value[c.value.axis];
      if (!M)
        return;
      const $ = (s.value.getBoundingClientRect()[c.value.direction] - x[c.value.client]) * -1, O = o.value[c.value.offset] - M, D = ($ - O) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = D * n.wrapElement[c.value.scrollSize] / 100;
    }, k = () => {
      l = !1, i.value[c.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", k), E(), u && (a.value = !1);
    }, w = () => {
      u = !1, a.value = !!t.size;
    }, _ = () => {
      u = !0, a.value = l;
    };
    Yt(() => {
      E(), document.removeEventListener("mouseup", k);
    });
    const E = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Ur(yn(n, "scrollbarElement"), "mousemove", w), Ur(yn(n, "scrollbarElement"), "mouseleave", _), (x, M) => (y(), ue(Xr, {
      name: b(r).b("fade"),
      persisted: ""
    }, {
      default: he(() => [
        Ut(m("div", {
          ref_key: "instance",
          ref: s,
          class: Q([b(r).e("bar"), b(r).is(b(c).key)]),
          onMousedown: g
        }, [
          m("div", {
            ref_key: "thumb",
            ref: o,
            class: Q(b(r).e("thumb")),
            style: st(b(p)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Qn, x.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var W0 = /* @__PURE__ */ Ye(_I, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const yI = ot({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), wI = /* @__PURE__ */ re({
  __name: "bar",
  props: yI,
  setup(e, { expose: t }) {
    const n = e, r = W(0), s = W(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - lo, l = i.offsetWidth - lo;
          s.value = i.scrollTop * 100 / a * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, a) => (y(), A(et, null, [
      Ce(W0, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Ce(W0, {
        move: s.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var kI = /* @__PURE__ */ Ye(wI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const CI = ot({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Be([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), xI = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(vt)
}, EI = "ElScrollbar", SI = /* @__PURE__ */ re({
  name: EI
}), AI = /* @__PURE__ */ re({
  ...SI,
  props: CI,
  emits: xI,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Qe("scrollbar");
    let o, i;
    const a = W(), l = W(), u = W(), f = W("0"), c = W("0"), p = W(), d = W(1), v = W(1), g = P(() => {
      const M = {};
      return r.height && (M.height = yo(r.height)), r.maxHeight && (M.maxHeight = yo(r.maxHeight)), [r.wrapStyle, M];
    }), C = P(() => [
      r.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !r.native }
    ]), h = P(() => [s.e("view"), r.viewClass]), k = () => {
      var M;
      l.value && ((M = p.value) == null || M.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function w(M, $) {
      Fe(M) ? l.value.scrollTo(M) : vt(M) && vt($) && l.value.scrollTo(M, $);
    }
    const _ = (M) => {
      vt(M) && (l.value.scrollTop = M);
    }, E = (M) => {
      vt(M) && (l.value.scrollLeft = M);
    }, x = () => {
      if (!l.value)
        return;
      const M = l.value.offsetHeight - lo, $ = l.value.offsetWidth - lo, O = M ** 2 / l.value.scrollHeight, D = $ ** 2 / l.value.scrollWidth, N = Math.max(O, r.minSize), B = Math.max(D, r.minSize);
      d.value = O / (M - O) / (N / (M - N)), v.value = D / ($ - D) / (B / ($ - B)), c.value = N + lo < M ? `${N}px` : "", f.value = B + lo < $ ? `${B}px` : "";
    };
    return Te(() => r.noresize, (M) => {
      M ? (o == null || o(), i == null || i()) : ({ stop: o } = ji(u, x), i = Ur("resize", x));
    }, { immediate: !0 }), Te(() => [r.maxHeight, r.height], () => {
      r.native || Ue(() => {
        var M;
        x(), l.value && ((M = p.value) == null || M.handleScroll(l.value));
      });
    }), Kt(S_, Sn({
      scrollbarElement: a,
      wrapElement: l
    })), it(() => {
      r.native || Ue(() => {
        x();
      });
    }), V1(() => x()), t({
      wrapRef: l,
      update: x,
      scrollTo: w,
      setScrollTop: _,
      setScrollLeft: E,
      handleScroll: k
    }), (M, $) => (y(), A("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: Q(b(s).b())
    }, [
      m("div", {
        ref_key: "wrapRef",
        ref: l,
        class: Q(b(C)),
        style: st(b(g)),
        onScroll: k
      }, [
        (y(), ue(Pt(M.tag), {
          id: M.id,
          ref_key: "resizeRef",
          ref: u,
          class: Q(b(h)),
          style: st(M.viewStyle),
          role: M.role,
          "aria-label": M.ariaLabel,
          "aria-orientation": M.ariaOrientation
        }, {
          default: he(() => [
            we(M.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      M.native ? _e("v-if", !0) : (y(), ue(kI, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: c.value,
        width: f.value,
        always: M.always,
        "ratio-x": v.value,
        "ratio-y": d.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var TI = /* @__PURE__ */ Ye(AI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const MI = An(TI), Rf = Symbol("popper"), A_ = Symbol("popperContent"), $I = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], T_ = ot({
  role: {
    type: String,
    values: $I,
    default: "tooltip"
  }
}), LI = /* @__PURE__ */ re({
  name: "ElPopper",
  inheritAttrs: !1
}), II = /* @__PURE__ */ re({
  ...LI,
  props: T_,
  setup(e, { expose: t }) {
    const n = e, r = W(), s = W(), o = W(), i = W(), a = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: i,
      role: a
    };
    return t(l), Kt(Rf, l), (u, f) => we(u.$slots, "default");
  }
});
var OI = /* @__PURE__ */ Ye(II, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const M_ = ot({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), RI = /* @__PURE__ */ re({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), PI = /* @__PURE__ */ re({
  ...RI,
  props: M_,
  setup(e, { expose: t }) {
    const n = e, r = Qe("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: i } = ze(A_, void 0);
    return Te(() => n.arrowOffset, (a) => {
      s.value = a;
    }), Yt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (a, l) => (y(), A("span", {
      ref_key: "arrowRef",
      ref: o,
      class: Q(b(r).e("arrow")),
      style: st(b(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var DI = /* @__PURE__ */ Ye(PI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const BI = "ElOnlyChild", NI = /* @__PURE__ */ re({
  name: BI,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const s = ze(C_), o = UL((r = s == null ? void 0 : s.setForwardRef) != null ? r : Dt);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a || a.length > 1)
        return null;
      const l = $_(a);
      return l ? Ut(Jn(l, n), [[o]]) : null;
    };
  }
});
function $_(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Fe(n))
      switch (n.type) {
        case Rt:
          continue;
        case So:
        case "svg":
          return G0(n);
        case et:
          return $_(n.children);
        default:
          return n;
      }
    return G0(n);
  }
  return null;
}
function G0(e) {
  const t = Qe("only-child");
  return Ce("span", {
    class: t.e("content")
  }, [e]);
}
const L_ = ot({
  virtualRef: {
    type: Be(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Be(Function)
  },
  onMouseleave: {
    type: Be(Function)
  },
  onClick: {
    type: Be(Function)
  },
  onKeydown: {
    type: Be(Function)
  },
  onFocus: {
    type: Be(Function)
  },
  onBlur: {
    type: Be(Function)
  },
  onContextmenu: {
    type: Be(Function)
  },
  id: String,
  open: Boolean
}), FI = /* @__PURE__ */ re({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), zI = /* @__PURE__ */ re({
  ...FI,
  props: L_,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: s } = ze(Rf, void 0);
    VL(s);
    const o = P(() => a.value ? n.id : void 0), i = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = P(() => a.value ? `${n.open}` : void 0);
    let u;
    return it(() => {
      Te(() => n.virtualRef, (f) => {
        f && (s.value = yr(f));
      }, {
        immediate: !0
      }), Te(s, (f, c) => {
        u == null || u(), u = void 0, cs(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var d;
          const v = n[p];
          v && (f.addEventListener(p.slice(2).toLowerCase(), v), (d = c == null ? void 0 : c.removeEventListener) == null || d.call(c, p.slice(2).toLowerCase(), v));
        }), u = Te([o, i, a, l], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, v) => {
            Kr(p[v]) ? f.removeAttribute(d) : f.setAttribute(d, p[v]);
          });
        }, { immediate: !0 })), cs(c) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => c.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Yt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: s
    }), (f, c) => f.virtualTriggering ? _e("v-if", !0) : (y(), ue(b(NI), gt({ key: 0 }, f.$attrs, {
      "aria-controls": b(o),
      "aria-describedby": b(i),
      "aria-expanded": b(l),
      "aria-haspopup": b(a)
    }), {
      default: he(() => [
        we(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var qI = /* @__PURE__ */ Ye(zI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Ra = "focus-trap.focus-after-trapped", Pa = "focus-trap.focus-after-released", HI = "focus-trap.focusout-prevented", Z0 = {
  cancelable: !0,
  bubbles: !1
}, jI = {
  cancelable: !0,
  bubbles: !1
}, X0 = "focusAfterTrapped", Y0 = "focusAfterReleased", VI = Symbol("elFocusTrap"), Pf = W(), na = W(0), Df = W(0);
let Bs = 0;
const I_ = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, J0 = (e, t) => {
  for (const n of e)
    if (!UI(n, t))
      return n;
}, UI = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, KI = (e) => {
  const t = I_(e), n = J0(t, e), r = J0(t.reverse(), e);
  return [n, r];
}, WI = (e) => e instanceof HTMLInputElement && "select" in e, hr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Df.value = window.performance.now(), e !== n && WI(e) && t && e.select();
  }
};
function Q0(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const GI = () => {
  let e = [];
  return {
    push: (r) => {
      const s = e[0];
      s && r !== s && s.pause(), e = Q0(e, r), e.unshift(r);
    },
    remove: (r) => {
      var s, o;
      e = Q0(e, r), (o = (s = e[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, ZI = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (hr(r, t), document.activeElement !== n)
      return;
}, e2 = GI(), XI = () => na.value > Df.value, Ns = () => {
  Pf.value = "pointer", na.value = window.performance.now();
}, t2 = () => {
  Pf.value = "keyboard", na.value = window.performance.now();
}, YI = () => (it(() => {
  Bs === 0 && (document.addEventListener("mousedown", Ns), document.addEventListener("touchstart", Ns), document.addEventListener("keydown", t2)), Bs++;
}), Yt(() => {
  Bs--, Bs <= 0 && (document.removeEventListener("mousedown", Ns), document.removeEventListener("touchstart", Ns), document.removeEventListener("keydown", t2));
}), {
  focusReason: Pf,
  lastUserFocusTimestamp: na,
  lastAutomatedFocusTimestamp: Df
}), Fs = (e) => new CustomEvent(HI, {
  ...jI,
  detail: e
}), JI = /* @__PURE__ */ re({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    X0,
    Y0,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, s;
    const { focusReason: o } = YI();
    FL((v) => {
      e.trapped && !i.paused && t("release-requested", v);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (v) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: g, altKey: C, ctrlKey: h, metaKey: k, currentTarget: w, shiftKey: _ } = v, { loop: E } = e, x = g === Yn.tab && !C && !h && !k, M = document.activeElement;
      if (x && M) {
        const $ = w, [O, D] = KI($);
        if (O && D) {
          if (!_ && M === D) {
            const B = Fs({
              focusReason: o.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), E && hr(O, !0));
          } else if (_ && [O, $].includes(M)) {
            const B = Fs({
              focusReason: o.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), E && hr(D, !0));
          }
        } else if (M === $) {
          const B = Fs({
            focusReason: o.value
          });
          t("focusout-prevented", B), B.defaultPrevented || v.preventDefault();
        }
      }
    };
    Kt(VI, {
      focusTrapRef: n,
      onKeydown: a
    }), Te(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), Te([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", a), v.addEventListener("focusin", f), v.addEventListener("focusout", c)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", f), g.removeEventListener("focusout", c));
    });
    const l = (v) => {
      t(X0, v);
    }, u = (v) => t(Y0, v), f = (v) => {
      const g = b(n);
      if (!g)
        return;
      const C = v.target, h = v.relatedTarget, k = C && g.contains(C);
      e.trapped || h && g.contains(h) || (r = h), k && t("focusin", v), !i.paused && e.trapped && (k ? s = C : hr(s, !0));
    }, c = (v) => {
      const g = b(n);
      if (!(i.paused || !g))
        if (e.trapped) {
          const C = v.relatedTarget;
          !Kr(C) && !g.contains(C) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const h = Fs({
                focusReason: o.value
              });
              t("focusout-prevented", h), h.defaultPrevented || hr(s, !0);
            }
          }, 0);
        } else {
          const C = v.target;
          C && g.contains(C) || t("focusout", v);
        }
    };
    async function p() {
      await Ue();
      const v = b(n);
      if (v) {
        e2.push(i);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const h = new Event(Ra, Z0);
          v.addEventListener(Ra, l), v.dispatchEvent(h), h.defaultPrevented || Ue(() => {
            let k = e.focusStartEl;
            Ke(k) || (hr(k), document.activeElement !== k && (k = "first")), k === "first" && ZI(I_(v), !0), (document.activeElement === g || k === "container") && hr(v);
          });
        }
      }
    }
    function d() {
      const v = b(n);
      if (v) {
        v.removeEventListener(Ra, l);
        const g = new CustomEvent(Pa, {
          ...Z0,
          detail: {
            focusReason: o.value
          }
        });
        v.addEventListener(Pa, u), v.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !XI() || v.contains(document.activeElement)) && hr(r ?? document.body), v.removeEventListener(Pa, u), e2.remove(i);
      }
    }
    return it(() => {
      e.trapped && p(), Te(() => e.trapped, (v) => {
        v ? p() : d();
      });
    }), Yt(() => {
      e.trapped && d();
    }), {
      onKeydown: a
    };
  }
});
function QI(e, t, n, r, s, o) {
  return we(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var eO = /* @__PURE__ */ Ye(JI, [["render", QI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const tO = ["fixed", "absolute"], nO = ot({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Be(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Xi,
    default: "bottom"
  },
  popperOptions: {
    type: Be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: tO,
    default: "absolute"
  }
}), O_ = ot({
  ...nO,
  id: String,
  style: {
    type: Be([String, Array, Object])
  },
  className: {
    type: Be([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Be([String, Array, Object])
  },
  popperStyle: {
    type: Be([String, Array, Object])
  },
  referenceEl: {
    type: Be(Object)
  },
  triggerTargetEl: {
    type: Be(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), rO = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, oO = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: s } = e, o = {
    placement: n,
    strategy: r,
    ...s,
    modifiers: [...iO(e), ...t]
  };
  return aO(o, s == null ? void 0 : s.modifiers), o;
}, sO = (e) => {
  if (Bt)
    return yr(e);
};
function iO(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function aO(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const lO = 0, cO = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: s } = ze(Rf, void 0), o = W(), i = W(), a = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var h;
    const k = b(o), w = (h = b(i)) != null ? h : lO;
    return {
      name: "arrow",
      enabled: !UM(k),
      options: {
        element: k,
        padding: w
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...oO(e, [
      b(l),
      b(a)
    ])
  })), f = P(() => sO(e.referenceEl) || b(r)), { attributes: c, state: p, styles: d, update: v, forceUpdate: g, instanceRef: C } = DL(f, n, u);
  return Te(C, (h) => t.value = h), it(() => {
    Te(() => {
      var h;
      return (h = b(f)) == null ? void 0 : h.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: c,
    arrowRef: o,
    contentRef: n,
    instanceRef: C,
    state: p,
    styles: d,
    role: s,
    forceUpdate: g,
    update: v
  };
}, uO = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: s } = GL(), o = Qe("popper"), i = P(() => b(t).popper), a = W(vt(e.zIndex) ? e.zIndex : s()), l = P(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: b(a) },
    b(n).popper,
    e.popperStyle || {}
  ]), f = P(() => r.value === "dialog" ? "false" : void 0), c = P(() => b(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: c,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = vt(e.zIndex) ? e.zIndex : s();
    }
  };
}, fO = (e, t) => {
  const n = W(!1), r = W();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, dO = /* @__PURE__ */ re({
  name: "ElPopperContent"
}), pO = /* @__PURE__ */ re({
  ...dO,
  props: O_,
  emits: rO,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = fO(r, n), { attributes: c, arrowRef: p, contentRef: d, styles: v, instanceRef: g, role: C, update: h } = cO(r), {
      ariaModal: k,
      arrowStyle: w,
      contentAttrs: _,
      contentClass: E,
      contentStyle: x,
      updateZIndex: M
    } = uO(r, {
      styles: v,
      attributes: c,
      role: C
    }), $ = ze(wi, void 0), O = W();
    Kt(A_, {
      arrowStyle: w,
      arrowRef: p,
      arrowOffset: O
    }), $ && ($.addInputId || $.removeInputId) && Kt(wi, {
      ...$,
      addInputId: Dt,
      removeInputId: Dt
    });
    let D;
    const N = (oe = !0) => {
      h(), oe && M();
    }, B = () => {
      N(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return it(() => {
      Te(() => r.triggerTargetEl, (oe, z) => {
        D == null || D(), D = void 0;
        const ie = b(oe || d.value), j = b(z || d.value);
        cs(ie) && (D = Te([C, () => r.ariaLabel, k, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, J) => {
            Kr(V[J]) ? ie.removeAttribute(H) : ie.setAttribute(H, V[J]);
          });
        }, { immediate: !0 })), j !== ie && cs(j) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          j.removeAttribute(V);
        });
      }, { immediate: !0 }), Te(() => r.visible, B, { immediate: !0 });
    }), Yt(() => {
      D == null || D(), D = void 0;
    }), t({
      popperContentRef: d,
      popperInstanceRef: g,
      updatePopper: N,
      contentStyle: x
    }), (oe, z) => (y(), A("div", gt({
      ref_key: "contentRef",
      ref: d
    }, b(_), {
      style: b(x),
      class: b(E),
      tabindex: "-1",
      onMouseenter: z[0] || (z[0] = (ie) => oe.$emit("mouseenter", ie)),
      onMouseleave: z[1] || (z[1] = (ie) => oe.$emit("mouseleave", ie))
    }), [
      Ce(b(eO), {
        trapped: b(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": b(d),
        "focus-start-el": b(s),
        onFocusAfterTrapped: b(a),
        onFocusAfterReleased: b(i),
        onFocusin: b(l),
        onFocusoutPrevented: b(u),
        onReleaseRequested: b(f)
      }, {
        default: he(() => [
          we(oe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var hO = /* @__PURE__ */ Ye(pO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const gO = An(OI), Bf = Symbol("elTooltip"), tn = ot({
  ...HL,
  ...O_,
  appendTo: {
    type: Be([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Be(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ds = ot({
  ...L_,
  disabled: Boolean,
  trigger: {
    type: Be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Be(Array),
    default: () => [Yn.enter, Yn.space]
  }
}), {
  useModelToggleProps: mO,
  useModelToggleEmits: vO,
  useModelToggle: bO
} = O$("visible"), _O = ot({
  ...T_,
  ...mO,
  ...tn,
  ...ds,
  ...M_,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), yO = [
  ...vO,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], wO = (e, t) => Ie(e) ? e.includes(t) : e === t, no = (e, t, n) => (r) => {
  wO(b(e), t) && n(r);
}, kO = /* @__PURE__ */ re({
  name: "ElTooltipTrigger"
}), CO = /* @__PURE__ */ re({
  ...kO,
  props: ds,
  setup(e, { expose: t }) {
    const n = e, r = Qe("tooltip"), { controlled: s, id: o, open: i, onOpen: a, onClose: l, onToggle: u } = ze(Bf, void 0), f = W(null), c = () => {
      if (b(s) || n.disabled)
        return !0;
    }, p = yn(n, "trigger"), d = Un(c, no(p, "hover", a)), v = Un(c, no(p, "hover", l)), g = Un(c, no(p, "click", (_) => {
      _.button === 0 && u(_);
    })), C = Un(c, no(p, "focus", a)), h = Un(c, no(p, "focus", l)), k = Un(c, no(p, "contextmenu", (_) => {
      _.preventDefault(), u(_);
    })), w = Un(c, (_) => {
      const { code: E } = _;
      n.triggerKeys.includes(E) && (_.preventDefault(), u(_));
    });
    return t({
      triggerRef: f
    }), (_, E) => (y(), ue(b(qI), {
      id: b(o),
      "virtual-ref": _.virtualRef,
      open: b(i),
      "virtual-triggering": _.virtualTriggering,
      class: Q(b(r).e("trigger")),
      onBlur: b(h),
      onClick: b(g),
      onContextmenu: b(k),
      onFocus: b(C),
      onMouseenter: b(d),
      onMouseleave: b(v),
      onKeydown: b(w)
    }, {
      default: he(() => [
        we(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var xO = /* @__PURE__ */ Ye(CO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const EO = /* @__PURE__ */ re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), SO = /* @__PURE__ */ re({
  ...EO,
  props: tn,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = k_(), s = Qe("tooltip"), o = W(null), i = W(!1), {
      controlled: a,
      id: l,
      open: u,
      trigger: f,
      onClose: c,
      onOpen: p,
      onShow: d,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: C
    } = ze(Bf, void 0), h = P(() => n.transition || `${s.namespace.value}-fade-in-linear`), k = P(() => n.persistent);
    Yt(() => {
      i.value = !0;
    });
    const w = P(() => b(k) ? !0 : b(u)), _ = P(() => n.disabled ? !1 : b(u)), E = P(() => n.appendTo || r.value), x = P(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), M = P(() => !b(u)), $ = () => {
      v();
    }, O = () => {
      if (b(a))
        return !0;
    }, D = Un(O, () => {
      n.enterable && b(f) === "hover" && p();
    }), N = Un(O, () => {
      b(f) === "hover" && c();
    }), B = () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V), g == null || g();
    }, oe = () => {
      C == null || C();
    }, z = () => {
      d(), j = uS(P(() => {
        var V;
        return (V = o.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (b(a))
          return;
        b(f) !== "hover" && c();
      });
    }, ie = () => {
      n.virtualTriggering || c();
    };
    let j;
    return Te(() => b(u), (V) => {
      V || j == null || j();
    }, {
      flush: "post"
    }), Te(() => n.content, () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V);
    }), t({
      contentRef: o
    }), (V, H) => (y(), ue(N4, {
      disabled: !V.teleported,
      to: b(E)
    }, [
      Ce(Xr, {
        name: b(h),
        onAfterLeave: $,
        onBeforeEnter: B,
        onAfterEnter: z,
        onBeforeLeave: oe
      }, {
        default: he(() => [
          b(w) ? Ut((y(), ue(b(hO), gt({
            key: 0,
            id: b(l),
            ref_key: "contentRef",
            ref: o
          }, V.$attrs, {
            "aria-label": V.ariaLabel,
            "aria-hidden": b(M),
            "boundaries-padding": V.boundariesPadding,
            "fallback-placements": V.fallbackPlacements,
            "gpu-acceleration": V.gpuAcceleration,
            offset: V.offset,
            placement: V.placement,
            "popper-options": V.popperOptions,
            strategy: V.strategy,
            effect: V.effect,
            enterable: V.enterable,
            pure: V.pure,
            "popper-class": V.popperClass,
            "popper-style": [V.popperStyle, b(x)],
            "reference-el": V.referenceEl,
            "trigger-target-el": V.triggerTargetEl,
            visible: b(_),
            "z-index": V.zIndex,
            onMouseenter: b(D),
            onMouseleave: b(N),
            onBlur: ie,
            onClose: b(c)
          }), {
            default: he(() => [
              i.value ? _e("v-if", !0) : we(V.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Qn, b(_)]
          ]) : _e("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var AO = /* @__PURE__ */ Ye(SO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const TO = ["innerHTML"], MO = { key: 1 }, $O = /* @__PURE__ */ re({
  name: "ElTooltip"
}), LO = /* @__PURE__ */ re({
  ...$O,
  props: _O,
  emits: yO,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    qL();
    const s = Ji(), o = W(), i = W(), a = () => {
      var h;
      const k = b(o);
      k && ((h = k.popperInstanceRef) == null || h.update());
    }, l = W(!1), u = W(), { show: f, hide: c, hasUpdateHandler: p } = bO({
      indicator: l,
      toggleReason: u
    }), { onOpen: d, onClose: v } = jL({
      showAfter: yn(r, "showAfter"),
      hideAfter: yn(r, "hideAfter"),
      autoClose: yn(r, "autoClose"),
      open: f,
      close: c
    }), g = P(() => bf(r.visible) && !p.value);
    Kt(Bf, {
      controlled: g,
      id: s,
      open: Oi(l),
      trigger: yn(r, "trigger"),
      onOpen: (h) => {
        d(h);
      },
      onClose: (h) => {
        v(h);
      },
      onToggle: (h) => {
        b(l) ? v(h) : d(h);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), Te(() => r.disabled, (h) => {
      h && l.value && (l.value = !1);
    });
    const C = (h) => {
      var k, w;
      const _ = (w = (k = i.value) == null ? void 0 : k.contentRef) == null ? void 0 : w.popperContentRef, E = (h == null ? void 0 : h.relatedTarget) || document.activeElement;
      return _ && _.contains(E);
    };
    return q1(() => l.value && c()), t({
      popperRef: o,
      contentRef: i,
      isFocusInsideContent: C,
      updatePopper: a,
      onOpen: d,
      onClose: v,
      hide: c
    }), (h, k) => (y(), ue(b(gO), {
      ref_key: "popperRef",
      ref: o,
      role: h.role
    }, {
      default: he(() => [
        Ce(xO, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: he(() => [
            h.$slots.default ? we(h.$slots, "default", { key: 0 }) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Ce(AO, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": h.ariaLabel,
          "boundaries-padding": h.boundariesPadding,
          content: h.content,
          disabled: h.disabled,
          effect: h.effect,
          enterable: h.enterable,
          "fallback-placements": h.fallbackPlacements,
          "hide-after": h.hideAfter,
          "gpu-acceleration": h.gpuAcceleration,
          offset: h.offset,
          persistent: h.persistent,
          "popper-class": h.popperClass,
          "popper-style": h.popperStyle,
          placement: h.placement,
          "popper-options": h.popperOptions,
          pure: h.pure,
          "raw-content": h.rawContent,
          "reference-el": h.referenceEl,
          "trigger-target-el": h.triggerTargetEl,
          "show-after": h.showAfter,
          strategy: h.strategy,
          teleported: h.teleported,
          transition: h.transition,
          "virtual-triggering": h.virtualTriggering,
          "z-index": h.zIndex,
          "append-to": h.appendTo
        }, {
          default: he(() => [
            we(h.$slots, "content", {}, () => [
              h.rawContent ? (y(), A("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, TO)) : (y(), A("span", MO, Je(h.content), 1))
            ]),
            h.showArrow ? (y(), ue(b(DI), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var IO = /* @__PURE__ */ Ye(LO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ps = An(IO), R_ = Symbol("buttonGroupContextKey"), OO = (e, t) => {
  l_({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, P(() => e.type === "text"));
  const n = ze(R_, void 0), r = QL("button"), { form: s } = ea(), o = ks(P(() => n == null ? void 0 : n.size)), i = Qi(), a = W(), l = G1(), u = P(() => e.type || (n == null ? void 0 : n.type) || ""), f = P(() => {
    var v, g, C;
    return (C = (g = e.autoInsertSpace) != null ? g : (v = r.value) == null ? void 0 : v.autoInsertSpace) != null ? C : !1;
  }), c = P(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), p = P(() => {
    var v;
    const g = (v = l.default) == null ? void 0 : v.call(l);
    if (f.value && (g == null ? void 0 : g.length) === 1) {
      const C = g[0];
      if ((C == null ? void 0 : C.type) === So) {
        const h = C.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(h.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: u,
    _ref: a,
    _props: c,
    shouldAddSpace: p,
    handleClick: (v) => {
      e.nativeType === "reset" && (s == null || s.resetFields()), t("click", v);
    }
  };
}, RO = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], PO = ["button", "submit", "reset"], $u = ot({
  size: If,
  disabled: Boolean,
  type: {
    type: String,
    values: RO,
    default: ""
  },
  icon: {
    type: En
  },
  nativeType: {
    type: String,
    values: PO,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: En,
    default: () => o_
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Be([String, Object]),
    default: "button"
  }
}), DO = {
  click: (e) => e instanceof MouseEvent
};
function Mt(e, t) {
  BO(e) && (e = "100%");
  var n = NO(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function zs(e) {
  return Math.min(1, Math.max(0, e));
}
function BO(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function NO(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function P_(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function qs(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Hr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function FO(e, t, n) {
  return {
    r: Mt(e, 255) * 255,
    g: Mt(t, 255) * 255,
    b: Mt(n, 255) * 255
  };
}
function n2(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = 0, a = (r + s) / 2;
  if (r === s)
    i = 0, o = 0;
  else {
    var l = r - s;
    switch (i = a > 0.5 ? l / (2 - r - s) : l / (r + s), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: a };
}
function Da(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function zO(e, t, n) {
  var r, s, o;
  if (e = Mt(e, 360), t = Mt(t, 100), n = Mt(n, 100), t === 0)
    s = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = Da(a, i, e + 1 / 3), s = Da(a, i, e), o = Da(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: o * 255 };
}
function r2(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function qO(e, t, n) {
  e = Mt(e, 360) * 6, t = Mt(t, 100), n = Mt(n, 100);
  var r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return { r: u * 255, g: f * 255, b: c * 255 };
}
function o2(e, t, n, r) {
  var s = [
    Hr(Math.round(e).toString(16)),
    Hr(Math.round(t).toString(16)),
    Hr(Math.round(n).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function HO(e, t, n, r, s) {
  var o = [
    Hr(Math.round(e).toString(16)),
    Hr(Math.round(t).toString(16)),
    Hr(Math.round(n).toString(16)),
    Hr(jO(r))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function jO(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function s2(e) {
  return en(e) / 255;
}
function en(e) {
  return parseInt(e, 16);
}
function VO(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Lu = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function UO(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, s = null, o = null, i = !1, a = !1;
  return typeof e == "string" && (e = GO(e)), typeof e == "object" && (Hn(e.r) && Hn(e.g) && Hn(e.b) ? (t = FO(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Hn(e.h) && Hn(e.s) && Hn(e.v) ? (r = qs(e.s), s = qs(e.v), t = qO(e.h, r, s), i = !0, a = "hsv") : Hn(e.h) && Hn(e.s) && Hn(e.l) && (r = qs(e.s), o = qs(e.l), t = zO(e.h, r, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = P_(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var KO = "[-\\+]?\\d+%?", WO = "[-\\+]?\\d*\\.\\d+%?", wr = "(?:".concat(WO, ")|(?:").concat(KO, ")"), Ba = "[\\s|\\(]+(".concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")\\s*\\)?"), Na = "[\\s|\\(]+(".concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")[,|\\s]+(").concat(wr, ")\\s*\\)?"), bn = {
  CSS_UNIT: new RegExp(wr),
  rgb: new RegExp("rgb" + Ba),
  rgba: new RegExp("rgba" + Na),
  hsl: new RegExp("hsl" + Ba),
  hsla: new RegExp("hsla" + Na),
  hsv: new RegExp("hsv" + Ba),
  hsva: new RegExp("hsva" + Na),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function GO(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Lu[e])
    e = Lu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = bn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = bn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = bn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = bn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = bn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = bn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = bn.hex8.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    a: s2(n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex6.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    format: t ? "name" : "hex"
  } : (n = bn.hex4.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    a: s2(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex3.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Hn(e) {
  return !!bn.CSS_UNIT.exec(String(e));
}
var ZO = (
  /** @class */
  (function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = VO(t)), this.originalInput = t;
      var s = UO(t);
      this.originalInput = t, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : s.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, s, o = t.r / 255, i = t.g / 255, a = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * s;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = P_(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = r2(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = r2(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = n2(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = n2(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), o2(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), HO(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Mt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Mt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + o2(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Lu); n < r.length; n++) {
        var s = r[n], o = s[0], i = s[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, s = this.a < 1 && this.a >= 0, o = !n && s && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = zs(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = zs(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = zs(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = zs(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), s = new e(t).toRgb(), o = n / 100, i = {
        r: (s.r - r.r) * o + r.r,
        g: (s.g - r.g) * o + r.g,
        b: (s.b - r.b) * o + r.b,
        a: (s.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), s = 360 / n, o = [this];
      for (r.h = (r.h - (s * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + s) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, s = n.s, o = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s, v: o })), o = (o + a) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), s = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
        a: s
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, s = [this], o = 360 / t, i = 1; i < t; i++)
        s.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return s;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  })()
);
function pr(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function XO(e) {
  const t = Qi(), n = Qe("button");
  return P(() => {
    let r = {};
    const s = e.color;
    if (s) {
      const o = new ZO(s), i = e.dark ? o.tint(20).toString() : pr(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? pr(o, 90) : o.tint(90).toString(),
          "text-color": s,
          "border-color": e.dark ? pr(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? pr(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? pr(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? pr(o, 80) : o.tint(80).toString());
      else {
        const a = e.dark ? pr(o, 30) : o.tint(30).toString(), l = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": s,
          "text-color": l,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": l,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? pr(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const YO = /* @__PURE__ */ re({
  name: "ElButton"
}), JO = /* @__PURE__ */ re({
  ...YO,
  props: $u,
  emits: DO,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = XO(r), o = Qe("button"), { _ref: i, _size: a, _type: l, _disabled: u, _props: f, shouldAddSpace: c, handleClick: p } = OO(r, n);
    return t({
      ref: i,
      size: a,
      type: l,
      disabled: u,
      shouldAddSpace: c
    }), (d, v) => (y(), ue(Pt(d.tag), gt({
      ref_key: "_ref",
      ref: i
    }, b(f), {
      class: [
        b(o).b(),
        b(o).m(b(l)),
        b(o).m(b(a)),
        b(o).is("disabled", b(u)),
        b(o).is("loading", d.loading),
        b(o).is("plain", d.plain),
        b(o).is("round", d.round),
        b(o).is("circle", d.circle),
        b(o).is("text", d.text),
        b(o).is("link", d.link),
        b(o).is("has-bg", d.bg)
      ],
      style: b(s),
      onClick: b(p)
    }), {
      default: he(() => [
        d.loading ? (y(), A(et, { key: 0 }, [
          d.$slots.loading ? we(d.$slots, "loading", { key: 0 }) : (y(), ue(b(Gt), {
            key: 1,
            class: Q(b(o).is("loading"))
          }, {
            default: he(() => [
              (y(), ue(Pt(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (y(), ue(b(Gt), { key: 1 }, {
          default: he(() => [
            d.icon ? (y(), ue(Pt(d.icon), { key: 0 })) : we(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : _e("v-if", !0),
        d.$slots.default ? (y(), A("span", {
          key: 2,
          class: Q({ [b(o).em("text", "expand")]: b(c) })
        }, [
          we(d.$slots, "default")
        ], 2)) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var QO = /* @__PURE__ */ Ye(JO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const eR = {
  size: $u.size,
  type: $u.type
}, tR = /* @__PURE__ */ re({
  name: "ElButtonGroup"
}), nR = /* @__PURE__ */ re({
  ...tR,
  props: eR,
  setup(e) {
    const t = e;
    Kt(R_, Sn({
      size: yn(t, "size"),
      type: yn(t, "type")
    }));
    const n = Qe("button");
    return (r, s) => (y(), A("div", {
      class: Q(`${b(n).b("group")}`)
    }, [
      we(r.$slots, "default")
    ], 2));
  }
});
var D_ = /* @__PURE__ */ Ye(nR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const i2 = An(QO, {
  ButtonGroup: D_
});
yf(D_);
const gr = /* @__PURE__ */ new Map();
let a2;
Bt && (document.addEventListener("mousedown", (e) => a2 = e), document.addEventListener("mouseup", (e) => {
  for (const t of gr.values())
    for (const { documentHandler: n } of t)
      n(e, a2);
}));
function l2(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : cs(t.arg) && n.push(t.arg), function(r, s) {
    const o = t.instance.popperRef, i = r.target, a = s == null ? void 0 : s.target, l = !t || !t.instance, u = !i || !a, f = e.contains(i) || e.contains(a), c = e === i, p = n.length && n.some((v) => v == null ? void 0 : v.contains(i)) || n.length && n.includes(a), d = o && (o.contains(i) || o.contains(a));
    l || u || f || c || p || d || t.value(r, s);
  };
}
const B_ = {
  beforeMount(e, t) {
    gr.has(e) || gr.set(e, []), gr.get(e).push({
      documentHandler: l2(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    gr.has(e) || gr.set(e, []);
    const n = gr.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), s = {
      documentHandler: l2(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, s) : n.push(s);
  },
  unmounted(e) {
    gr.delete(e);
  }
}, N_ = ot({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: _s,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), rR = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, oR = /* @__PURE__ */ re({
  name: "ElTag"
}), sR = /* @__PURE__ */ re({
  ...oR,
  props: N_,
  emits: rR,
  setup(e, { emit: t }) {
    const n = e, r = ks(), s = Qe("tag"), o = P(() => {
      const { type: l, hit: u, effect: f, closable: c, round: p } = n;
      return [
        s.b(),
        s.is("closable", c),
        s.m(l),
        s.m(r.value),
        s.m(f),
        s.is("hit", u),
        s.is("round", p)
      ];
    }), i = (l) => {
      t("close", l);
    }, a = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (y(), A("span", {
      key: 0,
      class: Q(b(o)),
      style: st({ backgroundColor: l.color }),
      onClick: a
    }, [
      m("span", {
        class: Q(b(s).e("content"))
      }, [
        we(l.$slots, "default")
      ], 2),
      l.closable ? (y(), ue(b(Gt), {
        key: 0,
        class: Q(b(s).e("close")),
        onClick: nn(i, ["stop"])
      }, {
        default: he(() => [
          Ce(b(Tu))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : _e("v-if", !0)
    ], 6)) : (y(), ue(Xr, {
      key: 1,
      name: `${b(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: he(() => [
        m("span", {
          class: Q(b(o)),
          style: st({ backgroundColor: l.color }),
          onClick: a
        }, [
          m("span", {
            class: Q(b(s).e("content"))
          }, [
            we(l.$slots, "default")
          ], 2),
          l.closable ? (y(), ue(b(Gt), {
            key: 0,
            class: Q(b(s).e("close")),
            onClick: nn(i, ["stop"])
          }, {
            default: he(() => [
              Ce(b(Tu))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : _e("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var iR = /* @__PURE__ */ Ye(sR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const aR = An(iR), lR = ot({
  color: {
    type: Be(Object),
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
});
let Fa = !1;
function hs(e, t) {
  if (!Bt)
    return;
  const n = function(o) {
    var i;
    (i = t.drag) == null || i.call(t, o);
  }, r = function(o) {
    var i;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, Fa = !1, (i = t.end) == null || i.call(t, o);
  }, s = function(o) {
    var i;
    Fa || (o.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), Fa = !0, (i = t.start) == null || i.call(t, o));
  };
  e.addEventListener("mousedown", s), e.addEventListener("touchstart", s);
}
const cR = (e) => {
  const t = _t(), n = Zn(), r = Zn();
  function s(i) {
    i.target !== n.value && o(i);
  }
  function o(i) {
    if (!r.value || !n.value)
      return;
    const l = t.vnode.el.getBoundingClientRect(), { clientX: u, clientY: f } = hf(i);
    if (e.vertical) {
      let c = f - l.top;
      c = Math.max(n.value.offsetHeight / 2, c), c = Math.min(c, l.height - n.value.offsetHeight / 2), e.color.set("alpha", Math.round((c - n.value.offsetHeight / 2) / (l.height - n.value.offsetHeight) * 100));
    } else {
      let c = u - l.left;
      c = Math.max(n.value.offsetWidth / 2, c), c = Math.min(c, l.width - n.value.offsetWidth / 2), e.color.set("alpha", Math.round((c - n.value.offsetWidth / 2) / (l.width - n.value.offsetWidth) * 100));
    }
  }
  return {
    thumb: n,
    bar: r,
    handleDrag: o,
    handleClick: s
  };
}, uR = (e, {
  bar: t,
  thumb: n,
  handleDrag: r
}) => {
  const s = _t(), o = Qe("color-alpha-slider"), i = W(0), a = W(0), l = W();
  function u() {
    if (!n.value || e.vertical)
      return 0;
    const k = s.vnode.el, w = e.color.get("alpha");
    return k ? Math.round(w * (k.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function f() {
    if (!n.value)
      return 0;
    const k = s.vnode.el;
    if (!e.vertical)
      return 0;
    const w = e.color.get("alpha");
    return k ? Math.round(w * (k.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function c() {
    if (e.color && e.color.value) {
      const { r: k, g: w, b: _ } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${k}, ${w}, ${_}, 0) 0%, rgba(${k}, ${w}, ${_}, 1) 100%)`;
    }
    return "";
  }
  function p() {
    i.value = u(), a.value = f(), l.value = c();
  }
  it(() => {
    if (!t.value || !n.value)
      return;
    const k = {
      drag: (w) => {
        r(w);
      },
      end: (w) => {
        r(w);
      }
    };
    hs(t.value, k), hs(n.value, k), p();
  }), Te(() => e.color.get("alpha"), () => p()), Te(() => e.color.value, () => p());
  const d = P(() => [o.b(), o.is("vertical", e.vertical)]), v = P(() => o.e("bar")), g = P(() => o.e("thumb")), C = P(() => ({ background: l.value })), h = P(() => ({
    left: yo(i.value),
    top: yo(a.value)
  }));
  return { rootKls: d, barKls: v, barStyle: C, thumbKls: g, thumbStyle: h, update: p };
}, fR = "ElColorAlphaSlider", dR = /* @__PURE__ */ re({
  name: fR
}), pR = /* @__PURE__ */ re({
  ...dR,
  props: lR,
  setup(e, { expose: t }) {
    const n = e, { bar: r, thumb: s, handleDrag: o, handleClick: i } = cR(n), { rootKls: a, barKls: l, barStyle: u, thumbKls: f, thumbStyle: c, update: p } = uR(n, {
      bar: r,
      thumb: s,
      handleDrag: o
    });
    return t({
      update: p,
      bar: r,
      thumb: s
    }), (d, v) => (y(), A("div", {
      class: Q(b(a))
    }, [
      m("div", {
        ref_key: "bar",
        ref: r,
        class: Q(b(l)),
        style: st(b(u)),
        onClick: v[0] || (v[0] = (...g) => b(i) && b(i)(...g))
      }, null, 6),
      m("div", {
        ref_key: "thumb",
        ref: s,
        class: Q(b(f)),
        style: st(b(c))
      }, null, 6)
    ], 2));
  }
});
var hR = /* @__PURE__ */ Ye(pR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const gR = /* @__PURE__ */ re({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(e) {
    const t = Qe("color-hue-slider"), n = _t(), r = W(), s = W(), o = W(0), i = W(0), a = P(() => e.color.get("hue"));
    Te(() => a.value, () => {
      p();
    });
    function l(d) {
      d.target !== r.value && u(d);
    }
    function u(d) {
      if (!s.value || !r.value)
        return;
      const g = n.vnode.el.getBoundingClientRect(), { clientX: C, clientY: h } = hf(d);
      let k;
      if (e.vertical) {
        let w = h - g.top;
        w = Math.min(w, g.height - r.value.offsetHeight / 2), w = Math.max(r.value.offsetHeight / 2, w), k = Math.round((w - r.value.offsetHeight / 2) / (g.height - r.value.offsetHeight) * 360);
      } else {
        let w = C - g.left;
        w = Math.min(w, g.width - r.value.offsetWidth / 2), w = Math.max(r.value.offsetWidth / 2, w), k = Math.round((w - r.value.offsetWidth / 2) / (g.width - r.value.offsetWidth) * 360);
      }
      e.color.set("hue", k);
    }
    function f() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (e.vertical)
        return 0;
      const v = e.color.get("hue");
      return d ? Math.round(v * (d.offsetWidth - r.value.offsetWidth / 2) / 360) : 0;
    }
    function c() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (!e.vertical)
        return 0;
      const v = e.color.get("hue");
      return d ? Math.round(v * (d.offsetHeight - r.value.offsetHeight / 2) / 360) : 0;
    }
    function p() {
      o.value = f(), i.value = c();
    }
    return it(() => {
      if (!s.value || !r.value)
        return;
      const d = {
        drag: (v) => {
          u(v);
        },
        end: (v) => {
          u(v);
        }
      };
      hs(s.value, d), hs(r.value, d), p();
    }), {
      bar: s,
      thumb: r,
      thumbLeft: o,
      thumbTop: i,
      hueValue: a,
      handleClick: l,
      update: p,
      ns: t
    };
  }
});
function mR(e, t, n, r, s, o) {
  return y(), A("div", {
    class: Q([e.ns.b(), e.ns.is("vertical", e.vertical)])
  }, [
    m("div", {
      ref: "bar",
      class: Q(e.ns.e("bar")),
      onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
    }, null, 2),
    m("div", {
      ref: "thumb",
      class: Q(e.ns.e("thumb")),
      style: st({
        left: e.thumbLeft + "px",
        top: e.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var vR = /* @__PURE__ */ Ye(gR, [["render", mR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const bR = ot({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: If,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  predefine: {
    type: Be(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), _R = {
  [Wt]: (e) => Ke(e) || Kr(e),
  [wf]: (e) => Ke(e) || Kr(e),
  activeChange: (e) => Ke(e) || Kr(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent
}, F_ = Symbol("colorPickerContextKey"), c2 = function(e, t, n) {
  return [
    e,
    t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0,
    e / 2
  ];
}, yR = function(e) {
  return typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1;
}, wR = function(e) {
  return typeof e == "string" && e.includes("%");
}, mo = function(e, t) {
  yR(e) && (e = "100%");
  const n = wR(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, u2 = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, ai = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${u2[t] || t}${u2[n] || n}`;
}, f2 = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${ai(e)}${ai(t)}${ai(n)}`;
}, za = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, Br = function(e) {
  return e.length === 2 ? (za[e[0].toUpperCase()] || +e[0]) * 16 + (za[e[1].toUpperCase()] || +e[1]) : za[e[1].toUpperCase()] || +e[1];
}, kR = function(e, t, n) {
  t = t / 100, n = n / 100;
  let r = t;
  const s = Math.max(n, 0.01);
  n *= 2, t *= n <= 1 ? n : 2 - n, r *= s <= 1 ? s : 2 - s;
  const o = (n + t) / 2, i = n === 0 ? 2 * r / (s + r) : 2 * t / (n + t);
  return {
    h: e,
    s: i * 100,
    v: o * 100
  };
}, d2 = (e, t, n) => {
  e = mo(e, 255), t = mo(t, 255), n = mo(n, 255);
  const r = Math.max(e, t, n), s = Math.min(e, t, n);
  let o;
  const i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e: {
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      }
      case t: {
        o = (n - e) / a + 2;
        break;
      }
      case n: {
        o = (e - t) / a + 4;
        break;
      }
    }
    o /= 6;
  }
  return { h: o * 360, s: l * 100, v: i * 100 };
}, Bo = function(e, t, n) {
  e = mo(e, 360) * 6, t = mo(t, 100), n = mo(n, 100);
  const r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return {
    r: Math.round(u * 255),
    g: Math.round(f * 255),
    b: Math.round(c * 255)
  };
};
class Yo {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const n in t)
      Xe(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const r in t)
        Xe(t, r) && this.set(r, t[r]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return Bo(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const n = (r, s, o) => {
      this._hue = Math.max(0, Math.min(360, r)), this._saturation = Math.max(0, Math.min(100, s)), this._value = Math.max(0, Math.min(100, o)), this.doOnChange();
    };
    if (t.includes("hsl")) {
      const r = t.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = kR(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("hsv")) {
      const r = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3 && n(r[0], r[1], r[2]);
    } else if (t.includes("rgb")) {
      const r = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = d2(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("#")) {
      const r = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(r))
        return;
      let s, o, i;
      r.length === 3 ? (s = Br(r[0] + r[0]), o = Br(r[1] + r[1]), i = Br(r[2] + r[2])) : (r.length === 6 || r.length === 8) && (s = Br(r.slice(0, 2)), o = Br(r.slice(2, 4)), i = Br(r.slice(4, 6))), r.length === 8 ? this._alpha = Br(r.slice(6)) / 255 * 100 : (r.length === 3 || r.length === 6) && (this._alpha = 100);
      const { h: a, s: l, v: u } = d2(s, o, i);
      n(a, l, u);
    }
  }
  compare(t) {
    return Math.abs(t._hue - this._hue) < 2 && Math.abs(t._saturation - this._saturation) < 1 && Math.abs(t._value - this._value) < 1 && Math.abs(t._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: r, _alpha: s, format: o } = this;
    if (this.enableAlpha)
      switch (o) {
        case "hsl": {
          const i = c2(t, n / 100, r / 100);
          this.value = `hsla(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(r)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${f2(Bo(t, n, r))}${ai(s * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: a, b: l } = Bo(t, n, r);
          this.value = `rgba(${i}, ${a}, ${l}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = c2(t, n / 100, r / 100);
          this.value = `hsl(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(r)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: a, b: l } = Bo(t, n, r);
          this.value = `rgb(${i}, ${a}, ${l})`;
          break;
        }
        default:
          this.value = f2(Bo(t, n, r));
      }
  }
}
const CR = /* @__PURE__ */ re({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-predefine"), { currentColor: n } = ze(F_), r = W(o(e.colors, e.color));
    Te(() => n.value, (i) => {
      const a = new Yo();
      a.fromString(i), r.value.forEach((l) => {
        l.selected = a.compare(l);
      });
    }), nf(() => {
      r.value = o(e.colors, e.color);
    });
    function s(i) {
      e.color.fromString(e.colors[i]);
    }
    function o(i, a) {
      return i.map((l) => {
        const u = new Yo();
        return u.enableAlpha = !0, u.format = "rgba", u.fromString(l), u.selected = u.value === a.value, u;
      });
    }
    return {
      rgbaColors: r,
      handleSelect: s,
      ns: t
    };
  }
}), xR = ["onClick"];
function ER(e, t, n, r, s, o) {
  return y(), A("div", {
    class: Q(e.ns.b())
  }, [
    m("div", {
      class: Q(e.ns.e("colors"))
    }, [
      (y(!0), A(et, null, Cn(e.rgbaColors, (i, a) => (y(), A("div", {
        key: e.colors[a],
        class: Q([
          e.ns.e("color-selector"),
          e.ns.is("alpha", i._alpha < 100),
          { selected: i.selected }
        ]),
        onClick: (l) => e.handleSelect(a)
      }, [
        m("div", {
          style: st({ backgroundColor: i.value })
        }, null, 4)
      ], 10, xR))), 128))
    ], 2)
  ], 2);
}
var SR = /* @__PURE__ */ Ye(CR, [["render", ER], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const AR = /* @__PURE__ */ re({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-svpanel"), n = _t(), r = W(0), s = W(0), o = W("hsl(0, 100%, 50%)"), i = P(() => {
      const u = e.color.get("hue"), f = e.color.get("value");
      return { hue: u, value: f };
    });
    function a() {
      const u = e.color.get("saturation"), f = e.color.get("value"), c = n.vnode.el, { clientWidth: p, clientHeight: d } = c;
      s.value = u * p / 100, r.value = (100 - f) * d / 100, o.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
    }
    function l(u) {
      const c = n.vnode.el.getBoundingClientRect(), { clientX: p, clientY: d } = hf(u);
      let v = p - c.left, g = d - c.top;
      v = Math.max(0, v), v = Math.min(v, c.width), g = Math.max(0, g), g = Math.min(g, c.height), s.value = v, r.value = g, e.color.set({
        saturation: v / c.width * 100,
        value: 100 - g / c.height * 100
      });
    }
    return Te(() => i.value, () => {
      a();
    }), it(() => {
      hs(n.vnode.el, {
        drag: (u) => {
          l(u);
        },
        end: (u) => {
          l(u);
        }
      }), a();
    }), {
      cursorTop: r,
      cursorLeft: s,
      background: o,
      colorValue: i,
      handleDrag: l,
      update: a,
      ns: t
    };
  }
}), TR = /* @__PURE__ */ m("div", null, null, -1), MR = [
  TR
];
function $R(e, t, n, r, s, o) {
  return y(), A("div", {
    class: Q(e.ns.b()),
    style: st({
      backgroundColor: e.background
    })
  }, [
    m("div", {
      class: Q(e.ns.e("white"))
    }, null, 2),
    m("div", {
      class: Q(e.ns.e("black"))
    }, null, 2),
    m("div", {
      class: Q(e.ns.e("cursor")),
      style: st({
        top: e.cursorTop + "px",
        left: e.cursorLeft + "px"
      })
    }, MR, 6)
  ], 6);
}
var LR = /* @__PURE__ */ Ye(AR, [["render", $R], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const IR = ["onKeydown"], OR = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"], RR = /* @__PURE__ */ re({
  name: "ElColorPicker"
}), PR = /* @__PURE__ */ re({
  ...RR,
  props: bR,
  emits: _R,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = Tn(), o = Qe("color"), { formItem: i } = ea(), a = ks(), l = Qi(), { inputId: u, isLabeledByFormItem: f } = E_(r, {
      formItemContext: i
    }), c = W(), p = W(), d = W(), v = W(), g = W(), C = W(), {
      isFocused: h,
      handleFocus: k,
      handleBlur: w
    } = x_(g, {
      beforeBlur(pe) {
        var Me;
        return (Me = v.value) == null ? void 0 : Me.isFocusInsideContent(pe);
      },
      afterBlur() {
        j(!1), I();
      }
    }), _ = (pe) => {
      if (l.value)
        return dt();
      k(pe);
    };
    let E = !0;
    const x = Sn(new Yo({
      enableAlpha: r.showAlpha,
      format: r.colorFormat || "",
      value: r.modelValue
    })), M = W(!1), $ = W(!1), O = W(""), D = P(() => !r.modelValue && !$.value ? "transparent" : ie(x, r.showAlpha)), N = P(() => !r.modelValue && !$.value ? "" : x.value), B = P(() => f.value ? void 0 : r.label || s("el.colorpicker.defaultLabel")), oe = P(() => f.value ? i == null ? void 0 : i.labelId : void 0), z = P(() => [
      o.b("picker"),
      o.is("disabled", l.value),
      o.bm("picker", a.value),
      o.is("focused", h.value)
    ]);
    function ie(pe, Me) {
      if (!(pe instanceof Yo))
        throw new TypeError("color should be instance of _color Class");
      const { r: T, g: L, b: q } = pe.toRgb();
      return Me ? `rgba(${T}, ${L}, ${q}, ${pe.get("alpha") / 100})` : `rgb(${T}, ${L}, ${q})`;
    }
    function j(pe) {
      M.value = pe;
    }
    const V = Su(j, 100, { leading: !0 });
    function H() {
      l.value || j(!0);
    }
    function J() {
      V(!1), I();
    }
    function I() {
      Ue(() => {
        r.modelValue ? x.fromString(r.modelValue) : (x.value = "", Ue(() => {
          $.value = !1;
        }));
      });
    }
    function Z() {
      l.value || V(!M.value);
    }
    function K() {
      x.fromString(O.value);
    }
    function me() {
      const pe = x.value;
      n(Wt, pe), n("change", pe), r.validateEvent && (i == null || i.validate("change").catch((Me) => void 0)), V(!1), Ue(() => {
        const Me = new Yo({
          enableAlpha: r.showAlpha,
          format: r.colorFormat || "",
          value: r.modelValue
        });
        x.compare(Me) || I();
      });
    }
    function Se() {
      V(!1), n(Wt, null), n("change", null), r.modelValue !== null && r.validateEvent && (i == null || i.validate("change").catch((pe) => void 0)), I();
    }
    function Re(pe) {
      if (M.value && (J(), h.value)) {
        const Me = new FocusEvent("focus", pe);
        w(Me);
      }
    }
    function Pe(pe) {
      pe.preventDefault(), pe.stopPropagation(), j(!1), I();
    }
    function We(pe) {
      switch (pe.code) {
        case Yn.enter:
        case Yn.space:
          pe.preventDefault(), pe.stopPropagation(), H(), C.value.focus();
          break;
        case Yn.esc:
          Pe(pe);
          break;
      }
    }
    function qe() {
      g.value.focus();
    }
    function dt() {
      g.value.blur();
    }
    return it(() => {
      r.modelValue && (O.value = N.value);
    }), Te(() => r.modelValue, (pe) => {
      pe ? pe && pe !== x.value && (E = !1, x.fromString(pe)) : $.value = !1;
    }), Te(() => N.value, (pe) => {
      O.value = pe, E && n("activeChange", pe), E = !0;
    }), Te(() => x.value, () => {
      !r.modelValue && !$.value && ($.value = !0);
    }), Te(() => M.value, () => {
      Ue(() => {
        var pe, Me, T;
        (pe = c.value) == null || pe.update(), (Me = p.value) == null || Me.update(), (T = d.value) == null || T.update();
      });
    }), Kt(F_, {
      currentColor: N
    }), t({
      color: x,
      show: H,
      hide: J,
      focus: qe,
      blur: dt
    }), (pe, Me) => (y(), ue(b(ps), {
      ref_key: "popper",
      ref: v,
      visible: M.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [b(o).be("picker", "panel"), b(o).b("dropdown"), pe.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${b(o).namespace.value}-zoom-in-top`,
      persistent: "",
      onHide: Me[2] || (Me[2] = (T) => j(!1))
    }, {
      content: he(() => [
        Ut((y(), A("div", {
          onKeydown: qt(Pe, ["esc"])
        }, [
          m("div", {
            class: Q(b(o).be("dropdown", "main-wrapper"))
          }, [
            Ce(vR, {
              ref_key: "hue",
              ref: c,
              class: "hue-slider",
              color: b(x),
              vertical: ""
            }, null, 8, ["color"]),
            Ce(LR, {
              ref_key: "sv",
              ref: p,
              color: b(x)
            }, null, 8, ["color"])
          ], 2),
          pe.showAlpha ? (y(), ue(hR, {
            key: 0,
            ref_key: "alpha",
            ref: d,
            color: b(x)
          }, null, 8, ["color"])) : _e("v-if", !0),
          pe.predefine ? (y(), ue(SR, {
            key: 1,
            ref: "predefine",
            color: b(x),
            colors: pe.predefine
          }, null, 8, ["color", "colors"])) : _e("v-if", !0),
          m("div", {
            class: Q(b(o).be("dropdown", "btns"))
          }, [
            m("span", {
              class: Q(b(o).be("dropdown", "value"))
            }, [
              Ce(b(ta), {
                ref_key: "inputRef",
                ref: C,
                modelValue: O.value,
                "onUpdate:modelValue": Me[0] || (Me[0] = (T) => O.value = T),
                "validate-event": !1,
                size: "small",
                onKeyup: qt(K, ["enter"]),
                onBlur: K
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            Ce(b(i2), {
              class: Q(b(o).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: Se
            }, {
              default: he(() => [
                Zr(Je(b(s)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            Ce(b(i2), {
              plain: "",
              size: "small",
              class: Q(b(o).be("dropdown", "btn")),
              onClick: me
            }, {
              default: he(() => [
                Zr(Je(b(s)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ], 40, IR)), [
          [b(B_), Re]
        ])
      ]),
      default: he(() => [
        m("div", {
          id: b(u),
          ref_key: "triggerRef",
          ref: g,
          class: Q(b(z)),
          role: "button",
          "aria-label": b(B),
          "aria-labelledby": b(oe),
          "aria-description": b(s)("el.colorpicker.description", { color: pe.modelValue || "" }),
          "aria-disabled": b(l),
          tabindex: b(l) ? -1 : pe.tabindex,
          onKeydown: We,
          onFocus: _,
          onBlur: Me[1] || (Me[1] = (...T) => b(w) && b(w)(...T))
        }, [
          b(l) ? (y(), A("div", {
            key: 0,
            class: Q(b(o).be("picker", "mask"))
          }, null, 2)) : _e("v-if", !0),
          m("div", {
            class: Q(b(o).be("picker", "trigger")),
            onClick: Z
          }, [
            m("span", {
              class: Q([b(o).be("picker", "color"), b(o).is("alpha", pe.showAlpha)])
            }, [
              m("span", {
                class: Q(b(o).be("picker", "color-inner")),
                style: st({
                  backgroundColor: b(D)
                })
              }, [
                Ut(Ce(b(Gt), {
                  class: Q([b(o).be("picker", "icon"), b(o).is("icon-arrow-down")])
                }, {
                  default: he(() => [
                    Ce(b(r_))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Qn, pe.modelValue || $.value]
                ]),
                Ut(Ce(b(Gt), {
                  class: Q([b(o).be("picker", "empty"), b(o).is("icon-close")])
                }, {
                  default: he(() => [
                    Ce(b(Tu))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Qn, !pe.modelValue && !$.value]
                ])
              ], 6)
            ], 2)
          ], 2)
        ], 42, OR)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var DR = /* @__PURE__ */ Ye(PR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const BR = An(DR), NR = /* @__PURE__ */ re({
  inheritAttrs: !1
});
function FR(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var zR = /* @__PURE__ */ Ye(NR, [["render", FR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const qR = /* @__PURE__ */ re({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function HR(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var jR = /* @__PURE__ */ Ye(qR, [["render", HR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const VR = "data-el-collection-item", UR = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), s = Symbol(n), o = {
    ...zR,
    name: t,
    setup() {
      const a = W(null), l = /* @__PURE__ */ new Map();
      Kt(r, {
        itemMap: l,
        getItems: () => {
          const f = b(a);
          if (!f)
            return [];
          const c = Array.from(f.querySelectorAll(`[${VR}]`));
          return [...l.values()].sort((d, v) => c.indexOf(d.ref) - c.indexOf(v.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...jR,
    name: n,
    setup(a, { attrs: l }) {
      const u = W(null), f = ze(r, void 0);
      Kt(s, {
        collectionItemRef: u
      }), it(() => {
        const c = b(u);
        c && f.itemMap.set(c, {
          ref: c,
          ...l
        });
      }), Yt(() => {
        const c = b(u);
        f.itemMap.delete(c);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: i
  };
}, qa = ot({
  trigger: ds.trigger,
  effect: {
    ...tn.effect,
    default: "light"
  },
  type: {
    type: Be(String)
  },
  placement: {
    type: Be(String),
    default: "bottom"
  },
  popperOptions: {
    type: Be(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: Be([Number, String]),
    default: 0
  },
  maxHeight: {
    type: Be([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: Be(Object)
  },
  teleported: tn.teleported
});
ot({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: En
  }
});
ot({
  onKeydown: { type: Be(Function) }
});
UR("Dropdown");
const z_ = Symbol("elPaginationKey"), KR = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: En
  }
}), WR = {
  click: (e) => e instanceof MouseEvent
}, GR = ["disabled", "aria-label", "aria-disabled"], ZR = { key: 0 }, XR = /* @__PURE__ */ re({
  name: "ElPaginationPrev"
}), YR = /* @__PURE__ */ re({
  ...XR,
  props: KR,
  emits: WR,
  setup(e) {
    const t = e, { t: n } = Tn(), r = P(() => t.disabled || t.currentPage <= 1);
    return (s, o) => (y(), A("button", {
      type: "button",
      class: "btn-prev",
      disabled: b(r),
      "aria-label": s.prevText || b(n)("el.pagination.prev"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.prevText ? (y(), A("span", ZR, Je(s.prevText), 1)) : (y(), ue(b(Gt), { key: 1 }, {
        default: he(() => [
          (y(), ue(Pt(s.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, GR));
  }
});
var JR = /* @__PURE__ */ Ye(YR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const QR = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: En
  }
}), eP = ["disabled", "aria-label", "aria-disabled"], tP = { key: 0 }, nP = /* @__PURE__ */ re({
  name: "ElPaginationNext"
}), rP = /* @__PURE__ */ re({
  ...nP,
  props: QR,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Tn(), r = P(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (s, o) => (y(), A("button", {
      type: "button",
      class: "btn-next",
      disabled: b(r),
      "aria-label": s.nextText || b(n)("el.pagination.next"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.nextText ? (y(), A("span", tP, Je(s.nextText), 1)) : (y(), ue(b(Gt), { key: 1 }, {
        default: he(() => [
          (y(), ue(Pt(s.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, eP));
  }
});
var oP = /* @__PURE__ */ Ye(rP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const q_ = Symbol("ElSelectGroup"), ra = Symbol("ElSelect");
function sP(e, t) {
  const n = ze(ra), r = ze(q_, { disabled: !1 }), s = P(() => Fe(e.value)), o = P(() => n.props.multiple ? c(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), i = P(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = P(() => e.label || (s.value ? "" : e.value)), l = P(() => e.value || e.label || ""), u = P(() => e.disabled || t.groupDisabled || i.value), f = _t(), c = (g = [], C) => {
    if (s.value) {
      const h = n.props.valueKey;
      return g && g.some((k) => je(rn(k, h)) === rn(C, h));
    } else
      return g && g.includes(C);
  }, p = (g, C) => {
    if (s.value) {
      const { valueKey: h } = n.props;
      return rn(g, h) === rn(C, h);
    } else
      return g === C;
  }, d = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  Te(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Te(() => e.value, (g, C) => {
    const { remote: h, valueKey: k } = n.props;
    if (Object.is(g, C) || (n.onOptionDestroy(C, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !h) {
      if (k && Fe(g) && Fe(C) && g[k] === C[k])
        return;
      n.setSelected();
    }
  }), Te(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: v } = je(n);
  return Te(v, (g) => {
    const { query: C } = b(g), h = new RegExp(WM(C), "i");
    t.visible = h.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: d
  };
}
const iP = /* @__PURE__ */ re({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = Ji(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", b(a)),
      {
        selected: b(i),
        hover: b(c)
      }
    ]), s = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: i, isDisabled: a, select: l, hoverItem: u } = sP(e, s), { visible: f, hover: c } = Ri(s), p = _t().proxy;
    l.onOptionCreate(p), Yt(() => {
      const v = p.value, { selected: g } = l, h = (l.props.multiple ? g : [g]).some((k) => k.value === p.value);
      Ue(() => {
        l.cachedOptions.get(v) === p && !h && l.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, p);
    });
    function d() {
      e.disabled !== !0 && s.groupDisabled !== !0 && l.handleOptionSelect(p);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: o,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      visible: f,
      hover: c,
      selectOptionClick: d,
      states: s
    };
  }
}), aP = ["id", "aria-disabled", "aria-selected"];
function lP(e, t, n, r, s, o) {
  return Ut((y(), A("li", {
    id: e.id,
    class: Q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = nn((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    we(e.$slots, "default", {}, () => [
      m("span", null, Je(e.currentLabel), 1)
    ])
  ], 42, aP)), [
    [Qn, e.visible]
  ]);
}
var Nf = /* @__PURE__ */ Ye(iP, [["render", lP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const cP = /* @__PURE__ */ re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ze(ra), t = Qe("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), s = P(() => e.props.fitInputWidth), o = W("");
    function i() {
      var a;
      o.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return it(() => {
      i(), ji(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: s
    };
  }
});
function uP(e, t, n, r, s, o) {
  return y(), A("div", {
    class: Q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: st({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (y(), A("div", {
      key: 0,
      class: Q(e.ns.be("dropdown", "header"))
    }, [
      we(e.$slots, "header")
    ], 2)) : _e("v-if", !0),
    we(e.$slots, "default"),
    e.$slots.footer ? (y(), A("div", {
      key: 1,
      class: Q(e.ns.be("dropdown", "footer"))
    }, [
      we(e.$slots, "footer")
    ], 2)) : _e("v-if", !0)
  ], 6);
}
var fP = /* @__PURE__ */ Ye(cP, [["render", uP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function dP(e) {
  const { t } = Tn();
  return Sn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const pP = (e, t, n) => {
  const { t: r } = Tn(), s = Qe("select");
  l_({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, P(() => e.suffixTransition === !1));
  const o = W(null), i = W(null), a = W(null), l = W(null), u = W(null), f = W(null), c = W(null), p = W(null), d = W(), v = Zn({ query: "" }), g = Zn(""), C = W([]);
  let h = 0;
  const { form: k, formItem: w } = ea(), _ = P(() => !e.filterable || e.multiple || !t.visible), E = P(() => e.disabled || (k == null ? void 0 : k.disabled)), x = P(() => {
    const F = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !E.value && t.inputHovering && F;
  }), M = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), $ = P(() => s.is("reverse", M.value && t.visible && e.suffixTransition)), O = P(() => (k == null ? void 0 : k.statusIcon) && (w == null ? void 0 : w.validateState) && i_[w == null ? void 0 : w.validateState]), D = P(() => e.remote ? 300 : 0), N = P(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), B = P(() => {
    const F = Array.from(t.options.values()), S = [];
    return C.value.forEach((R) => {
      const G = F.findIndex((ke) => ke.currentLabel === R);
      G > -1 && S.push(F[G]);
    }), S.length >= F.length ? S : F;
  }), oe = P(() => Array.from(t.cachedOptions.values())), z = P(() => {
    const F = B.value.filter((S) => !S.created).some((S) => S.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !F;
  }), ie = ks(), j = P(() => ["small"].includes(ie.value) ? "small" : "default"), V = P({
    get() {
      return t.visible && N.value !== !1;
    },
    set(F) {
      t.visible = F;
    }
  });
  Te([() => E.value, () => ie.value, () => k == null ? void 0 : k.size], () => {
    Ue(() => {
      H();
    });
  }), Te(() => e.placeholder, (F) => {
    t.cachedPlaceHolder = t.currentPlaceholder = F, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Te(() => e.modelValue, (F, S) => {
    e.multiple && (H(), F && F.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", J(t.query))), K(), e.filterable && !e.multiple && (t.inputLength = 20), !Au(F, S) && e.validateEvent && (w == null || w.validate("change").catch((R) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), Te(() => t.visible, (F) => {
    var S, R, G, ke, He;
    F ? ((R = (S = l.value) == null ? void 0 : S.updatePopper) == null || R.call(S), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (ke = (G = a.value) == null ? void 0 : G.focus) == null || ke.call(G), e.multiple ? (He = i.value) == null || He.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), J(t.query), !e.multiple && !e.remote && (v.value.query = "", Lo(v), Lo(g)))) : (e.filterable && (Ee(e.filterMethod) && e.filterMethod(""), Ee(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Se(), Ue(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", F);
  }), Te(() => t.options.entries(), () => {
    var F, S, R;
    if (!Bt)
      return;
    (S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F), e.multiple && H();
    const G = ((R = c.value) == null ? void 0 : R.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !n_(e.modelValue) || !Array.from(G).includes(document.activeElement)) && K(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Z();
  }, {
    flush: "post"
  }), Te(() => t.hoverIndex, (F) => {
    vt(F) && F > -1 ? d.value = B.value[F] || {} : d.value = {}, B.value.forEach((S) => {
      S.hover = d.value === S;
    });
  });
  const H = () => {
    Ue(() => {
      var F, S;
      if (!o.value)
        return;
      const R = o.value.$el.querySelector("input");
      h = h || (R.clientHeight > 0 ? R.clientHeight + 2 : 0);
      const G = f.value, ke = getComputedStyle(R).getPropertyValue(s.cssVarName("input-height")), He = Number.parseFloat(ke) || _$(ie.value || (k == null ? void 0 : k.size)), Ge = ie.value || He === h || h <= 0 ? He : h;
      !(R.offsetParent === null) && (R.style.height = `${(t.selected.length === 0 ? Ge : Math.max(G ? G.clientHeight + (G.clientHeight > Ge ? 6 : 0) : 0, Ge)) - 2}px`), t.visible && N.value !== !1 && ((S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F));
    });
  }, J = async (F) => {
    if (!(t.previousQuery === F || t.isOnComposition)) {
      if (t.previousQuery === null && (Ee(e.filterMethod) || Ee(e.remoteMethod))) {
        t.previousQuery = F;
        return;
      }
      t.previousQuery = F, Ue(() => {
        var S, R;
        t.visible && ((R = (S = l.value) == null ? void 0 : S.updatePopper) == null || R.call(S));
      }), t.hoverIndex = -1, e.multiple && e.filterable && Ue(() => {
        if (!E.value) {
          const S = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, S) : S, I();
        }
        H();
      }), e.remote && Ee(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(F)) : Ee(e.filterMethod) ? (e.filterMethod(F), Lo(g)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = F, Lo(v), Lo(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await Ue(), Z());
    }
  }, I = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, Z = () => {
    const F = B.value.filter((G) => G.visible && !G.disabled && !G.states.groupDisabled), S = F.find((G) => G.created), R = F[0];
    t.hoverIndex = X(B.value, S || R);
  }, K = () => {
    var F;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const R = me(e.modelValue);
      (F = R.props) != null && F.created ? (t.createdLabel = R.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = R.currentLabel, t.selected = R, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const S = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((R) => {
      S.push(me(R));
    }), t.selected = S, Ue(() => {
      H();
    });
  }, me = (F) => {
    let S;
    const R = Zs(F).toLowerCase() === "object", G = Zs(F).toLowerCase() === "null", ke = Zs(F).toLowerCase() === "undefined";
    for (let be = t.cachedOptions.size - 1; be >= 0; be--) {
      const de = oe.value[be];
      if (R ? rn(de.value, e.valueKey) === rn(F, e.valueKey) : de.value === F) {
        S = {
          value: F,
          currentLabel: de.currentLabel,
          isDisabled: de.isDisabled
        };
        break;
      }
    }
    if (S)
      return S;
    const He = R ? F.label : !G && !ke ? F : "", Ge = {
      value: F,
      currentLabel: He
    };
    return e.multiple && (Ge.hitState = !1), Ge;
  }, Se = () => {
    setTimeout(() => {
      const F = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((S) => B.value.findIndex((R) => rn(R, F) === rn(S, F)))) : t.hoverIndex = -1 : t.hoverIndex = B.value.findIndex((S) => an(S) === an(t.selected));
    }, 300);
  }, Re = () => {
    var F, S;
    Pe(), (S = (F = l.value) == null ? void 0 : F.updatePopper) == null || S.call(F), e.multiple && H();
  }, Pe = () => {
    var F;
    t.inputWidth = (F = o.value) == null ? void 0 : F.$el.offsetWidth;
  }, We = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, J(t.query));
  }, qe = Su(() => {
    We();
  }, D.value), dt = Su((F) => {
    J(F.target.value);
  }, D.value), pe = (F) => {
    Au(e.modelValue, F) || n.emit(wf, F);
  }, Me = (F) => VM(F, (S) => !t.disabledOptions.has(S)), T = (F) => {
    if (F.code !== Yn.delete) {
      if (F.target.value.length <= 0 && !ye()) {
        const S = e.modelValue.slice(), R = Me(S);
        if (R < 0)
          return;
        S.splice(R, 1), n.emit(Wt, S), pe(S);
      }
      F.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, L = (F, S) => {
    const R = t.selected.indexOf(S);
    if (R > -1 && !E.value) {
      const G = e.modelValue.slice();
      G.splice(R, 1), n.emit(Wt, G), pe(G), n.emit("remove-tag", S.value);
    }
    F.stopPropagation(), ce();
  }, q = (F) => {
    F.stopPropagation();
    const S = e.multiple ? [] : "";
    if (!Ke(S))
      for (const R of t.selected)
        R.isDisabled && S.push(R.value);
    n.emit(Wt, S), pe(S), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), ce();
  }, Y = (F) => {
    var S;
    if (e.multiple) {
      const R = (e.modelValue || []).slice(), G = X(R, F.value);
      G > -1 ? R.splice(G, 1) : (e.multipleLimit <= 0 || R.length < e.multipleLimit) && R.push(F.value), n.emit(Wt, R), pe(R), F.created && (t.query = "", J(""), t.inputLength = 20), e.filterable && ((S = i.value) == null || S.focus());
    } else
      n.emit(Wt, F.value), pe(F.value), t.visible = !1;
    ee(), !t.visible && Ue(() => {
      ae(F);
    });
  }, X = (F = [], S) => {
    if (!Fe(S))
      return F.indexOf(S);
    const R = e.valueKey;
    let G = -1;
    return F.some((ke, He) => je(rn(ke, R)) === rn(S, R) ? (G = He, !0) : !1), G;
  }, ee = () => {
    const F = i.value || o.value;
    F && (F == null || F.focus());
  }, ae = (F) => {
    var S, R, G, ke, He;
    const Ge = Array.isArray(F) ? F[0] : F;
    let be = null;
    if (Ge != null && Ge.value) {
      const de = B.value.filter((Le) => Le.value === Ge.value);
      de.length > 0 && (be = de[0].$el);
    }
    if (l.value && be) {
      const de = (ke = (G = (R = (S = l.value) == null ? void 0 : S.popperRef) == null ? void 0 : R.contentRef) == null ? void 0 : G.querySelector) == null ? void 0 : ke.call(G, `.${s.be("dropdown", "wrap")}`);
      de && XM(de, be);
    }
    (He = p.value) == null || He.handleScroll();
  }, se = (F) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(F.value, F), t.cachedOptions.set(F.value, F), F.disabled && t.disabledOptions.set(F.value, F);
  }, ne = (F, S) => {
    t.options.get(F) === S && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(F));
  }, te = (F) => {
    F.code !== Yn.backspace && ye(!1), t.inputLength = i.value.value.length * 15 + 20, H();
  }, ye = (F) => {
    if (!Array.isArray(t.selected))
      return;
    const S = Me(t.selected.map((G) => G.value)), R = t.selected[S];
    if (R)
      return F === !0 || F === !1 ? (R.hitState = F, F) : (R.hitState = !R.hitState, R.hitState);
  }, fe = (F) => {
    const S = F.target.value;
    if (F.type === "compositionend")
      t.isOnComposition = !1, Ue(() => J(S));
    else {
      const R = S[S.length - 1] || "";
      t.isOnComposition = !a_(R);
    }
  }, ve = () => {
    Ue(() => ae(t.selected));
  }, U = (F) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", F));
  }, ce = () => {
    var F, S;
    t.visible ? (F = i.value || o.value) == null || F.focus() : (S = o.value) == null || S.focus();
  }, Ae = () => {
    var F, S, R;
    t.visible = !1, (F = o.value) == null || F.blur(), (R = (S = a.value) == null ? void 0 : S.blur) == null || R.call(S);
  }, Oe = (F) => {
    var S, R, G;
    (S = l.value) != null && S.isFocusInsideContent(F) || (R = u.value) != null && R.isFocusInsideContent(F) || (G = c.value) != null && G.contains(F.relatedTarget) || (t.visible && ht(), t.focused = !1, n.emit("blur", F));
  }, ut = (F) => {
    q(F);
  }, ht = () => {
    t.visible = !1;
  }, kt = (F) => {
    t.visible && (F.preventDefault(), F.stopPropagation(), t.visible = !1);
  }, Et = (F) => {
    F && !t.mouseEnter || E.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), ce());
  }, gn = () => {
    t.visible ? B.value[t.hoverIndex] && Y(B.value[t.hoverIndex]) : Et();
  }, an = (F) => Fe(F.value) ? rn(F.value, e.valueKey) : F.value, mt = P(() => B.value.filter((F) => F.visible).every((F) => F.disabled)), $t = P(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), $n = P(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), lr = (F) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !mt.value) {
      F === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : F === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const S = B.value[t.hoverIndex];
      (S.disabled === !0 || S.states.groupDisabled === !0 || !S.visible) && lr(F), Ue(() => ae(d.value));
    }
  }, Qr = () => {
    t.mouseEnter = !0;
  }, $r = () => {
    t.mouseEnter = !1;
  }, Mo = (F, S) => {
    var R, G;
    L(F, S), (G = (R = u.value) == null ? void 0 : R.updatePopper) == null || G.call(R);
  }, eo = P(() => ({
    maxWidth: `${b(t.inputWidth) - 32 - (O.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: C,
    optionsArray: B,
    hoverOption: d,
    selectSize: ie,
    handleResize: Re,
    debouncedOnInputChange: qe,
    debouncedQueryChange: dt,
    deletePrevTag: T,
    deleteTag: L,
    deleteSelected: q,
    handleOptionSelect: Y,
    scrollToOption: ae,
    readonly: _,
    resetInputHeight: H,
    showClose: x,
    iconComponent: M,
    iconReverse: $,
    showNewOption: z,
    collapseTagSize: j,
    setSelected: K,
    managePlaceholder: I,
    selectDisabled: E,
    emptyText: N,
    toggleLastOptionHitState: ye,
    resetInputState: te,
    handleComposition: fe,
    onOptionCreate: se,
    onOptionDestroy: ne,
    handleMenuEnter: ve,
    handleFocus: U,
    focus: ce,
    blur: Ae,
    handleBlur: Oe,
    handleClearClick: ut,
    handleClose: ht,
    handleKeydownEscape: kt,
    toggleMenu: Et,
    selectOption: gn,
    getValueKey: an,
    navigateOptions: lr,
    handleDeleteTooltipTag: Mo,
    dropMenuVisible: V,
    queryChange: v,
    groupQueryChange: g,
    showTagList: $t,
    collapseTagList: $n,
    selectTagsStyle: eo,
    reference: o,
    input: i,
    iOSInput: a,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: c,
    scrollbar: p,
    handleMouseEnter: Qr,
    handleMouseLeave: $r
  };
};
var hP = /* @__PURE__ */ re({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function s(o, i) {
      if (o.length !== i.length)
        return !1;
      for (const [a] of o.entries())
        if (o[a] != i[a])
          return !1;
      return !0;
    }
    return () => {
      var o, i;
      const a = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(f) {
        Array.isArray(f) && f.forEach((c) => {
          var p, d, v, g;
          const C = (p = (c == null ? void 0 : c.type) || {}) == null ? void 0 : p.name;
          C === "ElOptionGroup" ? u(!Ke(c.children) && !Array.isArray(c.children) && Ee((d = c.children) == null ? void 0 : d.default) ? (v = c.children) == null ? void 0 : v.default() : c.children) : C === "ElOption" ? l.push((g = c.props) == null ? void 0 : g.label) : Array.isArray(c.children) && u(c.children);
        });
      }
      return a.length && u((i = a[0]) == null ? void 0 : i.children), s(l, r) || (r = l, n("update-options", l)), a;
    };
  }
});
const p2 = "ElSelect", gP = /* @__PURE__ */ re({
  name: p2,
  componentName: p2,
  components: {
    ElInput: ta,
    ElSelectMenu: fP,
    ElOption: Nf,
    ElOptions: hP,
    ElTag: aR,
    ElScrollbar: MI,
    ElTooltip: ps,
    ElIcon: Gt
  },
  directives: { ClickOutside: B_ },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: y$
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: tn.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: En,
      default: _f
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: En,
      default: r_
    },
    tagType: { ...N_.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Xi,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    Wt,
    wf,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Qe("select"), r = Qe("input"), { t: s } = Tn(), o = Ji(), i = dP(e), {
      optionList: a,
      optionsArray: l,
      hoverOption: u,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      deleteSelected: k,
      handleOptionSelect: w,
      scrollToOption: _,
      setSelected: E,
      resetInputHeight: x,
      managePlaceholder: M,
      showClose: $,
      selectDisabled: O,
      iconComponent: D,
      iconReverse: N,
      showNewOption: B,
      emptyText: oe,
      toggleLastOptionHitState: z,
      resetInputState: ie,
      handleComposition: j,
      onOptionCreate: V,
      onOptionDestroy: H,
      handleMenuEnter: J,
      handleFocus: I,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Se,
      handleClose: Re,
      handleKeydownEscape: Pe,
      toggleMenu: We,
      selectOption: qe,
      getValueKey: dt,
      navigateOptions: pe,
      handleDeleteTooltipTag: Me,
      dropMenuVisible: T,
      reference: L,
      input: q,
      iOSInput: Y,
      tooltipRef: X,
      tagTooltipRef: ee,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      queryChange: te,
      groupQueryChange: ye,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: ce,
      selectTagsStyle: Ae
    } = pP(e, i, t), {
      inputWidth: Oe,
      selected: ut,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: Et,
      selectedLabel: gn,
      hoverIndex: an,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: $n,
      menuVisibleOnFocus: lr,
      isOnComposition: Qr,
      options: $r,
      cachedOptions: Mo,
      optionsCount: eo,
      prefixWidth: F
    } = Ri(i), S = P(() => {
      const Ze = [n.b()], Jt = b(f);
      return Jt && Ze.push(n.m(Jt)), e.disabled && Ze.push(n.m("disabled")), Ze;
    }), R = P(() => [
      n.e("tags"),
      n.is("disabled", b(O))
    ]), G = P(() => [
      n.b("tags-wrapper"),
      { "has-prefix": b(F) && b(ut).length }
    ]), ke = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.is("disabled", b(O))
    ]), He = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.em("input", "iOS")
    ]), Ge = P(() => [
      n.is("empty", !e.allowCreate && !!b(mt) && b(kt) === 0)
    ]), be = P(() => ({ maxWidth: `${b(Oe) > 123 && b(ut).length > e.maxCollapseTags ? b(Oe) - 123 : b(Oe) - 75}px` })), de = P(() => ({
      marginLeft: `${b(F)}px`,
      flexGrow: 1,
      width: `${b(ht) / (b(Oe) - 32)}%`,
      maxWidth: `${b(Oe) - 42}px`
    }));
    Kt(ra, Sn({
      props: e,
      options: $r,
      optionsArray: l,
      cachedOptions: Mo,
      optionsCount: eo,
      filteredOptionsCount: kt,
      hoverIndex: an,
      handleOptionSelect: w,
      onOptionCreate: V,
      onOptionDestroy: H,
      selectWrapper: se,
      selected: ut,
      setSelected: E,
      queryChange: te,
      groupQueryChange: ye
    })), it(() => {
      i.cachedPlaceHolder = $n.value = e.placeholder || (() => s("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && ($n.value = ""), ji(se, p), e.remote && e.multiple && x(), Ue(() => {
        const Ze = L.value && L.value.$el;
        if (Ze && (Oe.value = Ze.getBoundingClientRect().width, t.slots.prefix)) {
          const Jt = Ze.querySelector(`.${r.e("prefix")}`);
          F.value = Math.max(Jt.getBoundingClientRect().width + 11, 30);
        }
      }), E();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Wt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Wt, "");
    const Le = P(() => {
      var Ze, Jt;
      return (Jt = (Ze = X.value) == null ? void 0 : Ze.popperRef) == null ? void 0 : Jt.contentRef;
    });
    return {
      isIOS: Bb,
      onOptionsRendered: (Ze) => {
        a.value = Ze;
      },
      prefixWidth: F,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      handleDeleteTooltipTag: Me,
      deleteSelected: k,
      handleOptionSelect: w,
      scrollToOption: _,
      inputWidth: Oe,
      selected: ut,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: Et,
      selectedLabel: gn,
      hoverIndex: an,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: $n,
      menuVisibleOnFocus: lr,
      isOnComposition: Qr,
      options: $r,
      resetInputHeight: x,
      managePlaceholder: M,
      showClose: $,
      selectDisabled: O,
      iconComponent: D,
      iconReverse: N,
      showNewOption: B,
      emptyText: oe,
      toggleLastOptionHitState: z,
      resetInputState: ie,
      handleComposition: j,
      handleMenuEnter: J,
      handleFocus: I,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Se,
      handleClose: Re,
      handleKeydownEscape: Pe,
      toggleMenu: We,
      selectOption: qe,
      getValueKey: dt,
      navigateOptions: pe,
      dropMenuVisible: T,
      reference: L,
      input: q,
      iOSInput: Y,
      tooltipRef: X,
      popperPaneRef: Le,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      wrapperKls: S,
      tagsKls: R,
      tagWrapperKls: G,
      inputKls: ke,
      iOSInputKls: He,
      scrollbarKls: Ge,
      selectTagsStyle: Ae,
      nsSelect: n,
      tagTextStyle: be,
      inputStyle: de,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: ce,
      tagTooltipRef: ee,
      contentId: o,
      hoverOption: u
    };
  }
}), mP = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], vP = ["disabled"], bP = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function _P(e, t, n, r, s, o) {
  const i = fr("el-tag"), a = fr("el-tooltip"), l = fr("el-icon"), u = fr("el-input"), f = fr("el-option"), c = fr("el-options"), p = fr("el-scrollbar"), d = fr("el-select-menu"), v = K1("click-outside");
  return Ut((y(), A("div", {
    ref: "selectWrapper",
    class: Q(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = nn((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    Ce(a, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: he(() => {
        var g, C;
        return [
          m("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (h) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (h) => e.inputHovering = !1)
          }, [
            e.multiple ? (y(), A("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: Q(e.tagsKls),
              style: st(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...h) => e.focus && e.focus(...h))
            }, [
              e.collapseTags && e.selected.length ? (y(), ue(Xr, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  m("span", {
                    class: Q(e.tagWrapperKls)
                  }, [
                    (y(!0), A(et, null, Cn(e.showTagList, (h) => (y(), ue(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: he(() => [
                        m("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st(e.tagTextStyle)
                        }, Je(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (y(), ue(i, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: he(() => [
                        e.collapseTagsTooltip ? (y(), ue(a, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: he(() => [
                            m("span", {
                              class: Q(e.nsSelect.e("tags-text"))
                            }, "+ " + Je(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: he(() => [
                            m("div", {
                              class: Q(e.nsSelect.e("collapse-tags"))
                            }, [
                              (y(!0), A(et, null, Cn(e.collapseTagList, (h) => (y(), A("div", {
                                key: e.getValueKey(h),
                                class: Q(e.nsSelect.e("collapse-tag"))
                              }, [
                                Ce(i, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !h.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: h.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (k) => e.handleDeleteTooltipTag(k, h)
                                }, {
                                  default: he(() => [
                                    m("span", {
                                      class: Q(e.nsSelect.e("tags-text")),
                                      style: st({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, Je(h.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (y(), A("span", {
                          key: 1,
                          class: Q(e.nsSelect.e("tags-text"))
                        }, "+ " + Je(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : _e("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : _e("v-if", !0),
              e.collapseTags ? _e("v-if", !0) : (y(), ue(Xr, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  m("span", {
                    class: Q(e.tagWrapperKls),
                    style: st(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (y(!0), A(et, null, Cn(e.selected, (h) => (y(), ue(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: he(() => [
                        m("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st({ maxWidth: e.inputWidth - 75 + "px" })
                        }, Je(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Ut((y(), A("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.query = h),
                type: "text",
                class: Q(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: st(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...h) => e.handleFocus && e.handleFocus(...h)),
                onBlur: t[2] || (t[2] = (...h) => e.handleBlur && e.handleBlur(...h)),
                onKeyup: t[3] || (t[3] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
                onKeydown: [
                  t[4] || (t[4] = (...h) => e.resetInputState && e.resetInputState(...h)),
                  t[5] || (t[5] = qt(nn((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = qt(nn((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = qt((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                  t[8] || (t[8] = qt(nn((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = qt((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                  t[10] || (t[10] = qt((h) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionupdate: t[12] || (t[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionend: t[13] || (t[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onInput: t[14] || (t[14] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
              }, null, 46, mP)), [
                [yg, e.query]
              ]) : _e("v-if", !0)
            ], 6)) : _e("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (y(), A("input", {
              key: 1,
              ref: "iOSInput",
              class: Q(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, vP)) : _e("v-if", !0),
            Ce(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (h) => e.selectedLabel = h),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: Q([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((C = e.hoverOption) == null ? void 0 : C.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = qt(nn((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = qt(nn((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                qt(nn(e.selectOption, ["stop", "prevent"]), ["enter"]),
                qt(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = qt((h) => e.visible = !1, ["tab"]))
              ]
            }, hi({
              suffix: he(() => [
                e.iconComponent && !e.showClose ? (y(), ue(l, {
                  key: 0,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: he(() => [
                    (y(), ue(Pt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0),
                e.showClose && e.clearIcon ? (y(), ue(l, {
                  key: 1,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: he(() => [
                    (y(), ue(Pt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : _e("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: he(() => [
                  m("div", bP, [
                    we(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: he(() => [
        Ce(d, null, hi({
          default: he(() => [
            Ut(Ce(p, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Q(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: he(() => [
                e.showNewOption ? (y(), ue(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : _e("v-if", !0),
                Ce(c, { onUpdateOptions: e.onOptionsRendered }, {
                  default: he(() => [
                    we(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Qn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (y(), A(et, { key: 0 }, [
              e.$slots.empty ? we(e.$slots, "empty", { key: 0 }) : (y(), A("p", {
                key: 1,
                class: Q(e.nsSelect.be("dropdown", "empty"))
              }, Je(e.emptyText), 3))
            ], 64)) : _e("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: he(() => [
              we(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: he(() => [
              we(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var yP = /* @__PURE__ */ Ye(gP, [["render", _P], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const wP = /* @__PURE__ */ re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = W(!0), r = _t(), s = W([]);
    Kt(q_, Sn({
      ...Ri(e)
    }));
    const o = ze(ra);
    it(() => {
      s.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((f) => {
        var c;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (c = f.children) != null && c.length && u.push(...i(f));
      }), u;
    }, { groupQueryChange: a } = je(o);
    return Te(a, () => {
      n.value = s.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function kP(e, t, n, r, s, o) {
  return Ut((y(), A("ul", {
    class: Q(e.ns.be("group", "wrap"))
  }, [
    m("li", {
      class: Q(e.ns.be("group", "title"))
    }, Je(e.label), 3),
    m("li", null, [
      m("ul", {
        class: Q(e.ns.b("group"))
      }, [
        we(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Qn, e.visible]
  ]);
}
var H_ = /* @__PURE__ */ Ye(wP, [["render", kP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Iu = An(yP, {
  Option: Nf,
  OptionGroup: H_
}), CP = yf(Nf);
yf(H_);
const Ff = () => ze(z_, {}), xP = ot({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: Be(Array),
    default: () => kf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: _s
  }
}), EP = /* @__PURE__ */ re({
  name: "ElPaginationSizes"
}), SP = /* @__PURE__ */ re({
  ...EP,
  props: xP,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Tn(), s = Qe("pagination"), o = Ff(), i = W(n.pageSize);
    Te(() => n.pageSizes, (u, f) => {
      if (!Au(u, f) && Array.isArray(u)) {
        const c = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", c);
      }
    }), Te(() => n.pageSize, (u) => {
      i.value = u;
    });
    const a = P(() => n.pageSizes);
    function l(u) {
      var f;
      u !== i.value && (i.value = u, (f = o.handleSizeChange) == null || f.call(o, Number(u)));
    }
    return (u, f) => (y(), A("span", {
      class: Q(b(s).e("sizes"))
    }, [
      Ce(b(Iu), {
        "model-value": i.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: l
      }, {
        default: he(() => [
          (y(!0), A(et, null, Cn(b(a), (c) => (y(), ue(b(CP), {
            key: c,
            value: c,
            label: c + b(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var AP = /* @__PURE__ */ Ye(SP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const TP = ot({
  size: {
    type: String,
    values: _s
  }
}), MP = ["disabled"], $P = /* @__PURE__ */ re({
  name: "ElPaginationJumper"
}), LP = /* @__PURE__ */ re({
  ...$P,
  props: TP,
  setup(e) {
    const { t } = Tn(), n = Qe("pagination"), { pageCount: r, disabled: s, currentPage: o, changeEvent: i } = Ff(), a = W(), l = P(() => {
      var c;
      return (c = a.value) != null ? c : o == null ? void 0 : o.value;
    });
    function u(c) {
      a.value = c ? +c : "";
    }
    function f(c) {
      c = Math.trunc(+c), i == null || i(c), a.value = void 0;
    }
    return (c, p) => (y(), A("span", {
      class: Q(b(n).e("jump")),
      disabled: b(s)
    }, [
      m("span", {
        class: Q([b(n).e("goto")])
      }, Je(b(t)("el.pagination.goto")), 3),
      Ce(b(ta), {
        size: c.size,
        class: Q([b(n).e("editor"), b(n).is("in-pagination")]),
        min: 1,
        max: b(r),
        disabled: b(s),
        "model-value": b(l),
        "validate-event": !1,
        label: b(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      m("span", {
        class: Q([b(n).e("classifier")])
      }, Je(b(t)("el.pagination.pageClassifier")), 3)
    ], 10, MP));
  }
});
var IP = /* @__PURE__ */ Ye(LP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const OP = ot({
  total: {
    type: Number,
    default: 1e3
  }
}), RP = ["disabled"], PP = /* @__PURE__ */ re({
  name: "ElPaginationTotal"
}), DP = /* @__PURE__ */ re({
  ...PP,
  props: OP,
  setup(e) {
    const { t } = Tn(), n = Qe("pagination"), { disabled: r } = Ff();
    return (s, o) => (y(), A("span", {
      class: Q(b(n).e("total")),
      disabled: b(r)
    }, Je(b(t)("el.pagination.total", {
      total: s.total
    })), 11, RP));
  }
});
var BP = /* @__PURE__ */ Ye(DP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const NP = ot({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), FP = ["onKeyup"], zP = ["aria-current", "aria-label", "tabindex"], qP = ["tabindex", "aria-label"], HP = ["aria-current", "aria-label", "tabindex"], jP = ["tabindex", "aria-label"], VP = ["aria-current", "aria-label", "tabindex"], UP = /* @__PURE__ */ re({
  name: "ElPaginationPager"
}), KP = /* @__PURE__ */ re({
  ...UP,
  props: NP,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = Qe("pager"), s = Qe("icon"), { t: o } = Tn(), i = W(!1), a = W(!1), l = W(!1), u = W(!1), f = W(!1), c = W(!1), p = P(() => {
      const _ = n.pagerCount, E = (_ - 1) / 2, x = Number(n.currentPage), M = Number(n.pageCount);
      let $ = !1, O = !1;
      M > _ && (x > _ - E && ($ = !0), x < M - E && (O = !0));
      const D = [];
      if ($ && !O) {
        const N = M - (_ - 2);
        for (let B = N; B < M; B++)
          D.push(B);
      } else if (!$ && O)
        for (let N = 2; N < _; N++)
          D.push(N);
      else if ($ && O) {
        const N = Math.floor(_ / 2) - 1;
        for (let B = x - N; B <= x + N; B++)
          D.push(B);
      } else
        for (let N = 2; N < M; N++)
          D.push(N);
      return D;
    }), d = P(() => [
      "more",
      "btn-quickprev",
      s.b(),
      r.is("disabled", n.disabled)
    ]), v = P(() => [
      "more",
      "btn-quicknext",
      s.b(),
      r.is("disabled", n.disabled)
    ]), g = P(() => n.disabled ? -1 : 0);
    nf(() => {
      const _ = (n.pagerCount - 1) / 2;
      i.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - _ && (i.value = !0), n.currentPage < n.pageCount - _ && (a.value = !0));
    });
    function C(_ = !1) {
      n.disabled || (_ ? l.value = !0 : u.value = !0);
    }
    function h(_ = !1) {
      _ ? f.value = !0 : c.value = !0;
    }
    function k(_) {
      const E = _.target;
      if (E.tagName.toLowerCase() === "li" && Array.from(E.classList).includes("number")) {
        const x = Number(E.textContent);
        x !== n.currentPage && t("change", x);
      } else E.tagName.toLowerCase() === "li" && Array.from(E.classList).includes("more") && w(_);
    }
    function w(_) {
      const E = _.target;
      if (E.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let x = Number(E.textContent);
      const M = n.pageCount, $ = n.currentPage, O = n.pagerCount - 2;
      E.className.includes("more") && (E.className.includes("quickprev") ? x = $ - O : E.className.includes("quicknext") && (x = $ + O)), Number.isNaN(+x) || (x < 1 && (x = 1), x > M && (x = M)), x !== $ && t("change", x);
    }
    return (_, E) => (y(), A("ul", {
      class: Q(b(r).b()),
      onClick: w,
      onKeyup: qt(k, ["enter"])
    }, [
      _.pageCount > 0 ? (y(), A("li", {
        key: 0,
        class: Q([[
          b(r).is("active", _.currentPage === 1),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === 1,
        "aria-label": b(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: b(g)
      }, " 1 ", 10, zP)) : _e("v-if", !0),
      i.value ? (y(), A("li", {
        key: 1,
        class: Q(b(d)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.prevPages", { pager: _.pagerCount - 2 }),
        onMouseenter: E[0] || (E[0] = (x) => C(!0)),
        onMouseleave: E[1] || (E[1] = (x) => l.value = !1),
        onFocus: E[2] || (E[2] = (x) => h(!0)),
        onBlur: E[3] || (E[3] = (x) => f.value = !1)
      }, [
        (l.value || f.value) && !_.disabled ? (y(), ue(b(a$), { key: 0 })) : (y(), ue(b($0), { key: 1 }))
      ], 42, qP)) : _e("v-if", !0),
      (y(!0), A(et, null, Cn(b(p), (x) => (y(), A("li", {
        key: x,
        class: Q([[
          b(r).is("active", _.currentPage === x),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === x,
        "aria-label": b(o)("el.pagination.currentPage", { pager: x }),
        tabindex: b(g)
      }, Je(x), 11, HP))), 128)),
      a.value ? (y(), A("li", {
        key: 2,
        class: Q(b(v)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.nextPages", { pager: _.pagerCount - 2 }),
        onMouseenter: E[4] || (E[4] = (x) => C()),
        onMouseleave: E[5] || (E[5] = (x) => u.value = !1),
        onFocus: E[6] || (E[6] = (x) => h()),
        onBlur: E[7] || (E[7] = (x) => c.value = !1)
      }, [
        (u.value || c.value) && !_.disabled ? (y(), ue(b(c$), { key: 0 })) : (y(), ue(b($0), { key: 1 }))
      ], 42, jP)) : _e("v-if", !0),
      _.pageCount > 1 ? (y(), A("li", {
        key: 3,
        class: Q([[
          b(r).is("active", _.currentPage === _.pageCount),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === _.pageCount,
        "aria-label": b(o)("el.pagination.currentPage", { pager: _.pageCount }),
        tabindex: b(g)
      }, Je(_.pageCount), 11, VP)) : _e("v-if", !0)
    ], 42, FP));
  }
});
var WP = /* @__PURE__ */ Ye(KP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Nt = (e) => typeof e != "number", j_ = ot({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => vt(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: Be(Array),
    default: () => kf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: En,
    default: () => QM
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: En,
    default: () => t$
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), GP = {
  "update:current-page": (e) => vt(e),
  "update:page-size": (e) => vt(e),
  "size-change": (e) => vt(e),
  "current-change": (e) => vt(e),
  "prev-click": (e) => vt(e),
  "next-click": (e) => vt(e)
}, h2 = "ElPagination";
var ZP = /* @__PURE__ */ re({
  name: h2,
  props: j_,
  emits: GP,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = Tn(), s = Qe("pagination"), o = _t().vnode.props || {}, i = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, a = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, l = P(() => {
      if (Nt(e.total) && Nt(e.pageCount) || !Nt(e.currentPage) && !i)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Nt(e.pageCount)) {
          if (!Nt(e.total) && !Nt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = W(Nt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = W(Nt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), c = P({
      get() {
        return Nt(e.pageSize) ? u.value : e.pageSize;
      },
      set(w) {
        Nt(e.pageSize) && (u.value = w), a && (t("update:page-size", w), t("size-change", w));
      }
    }), p = P(() => {
      let w = 0;
      return Nt(e.pageCount) ? Nt(e.total) || (w = Math.max(1, Math.ceil(e.total / c.value))) : w = e.pageCount, w;
    }), d = P({
      get() {
        return Nt(e.currentPage) ? f.value : e.currentPage;
      },
      set(w) {
        let _ = w;
        w < 1 ? _ = 1 : w > p.value && (_ = p.value), Nt(e.currentPage) && (f.value = _), i && (t("update:current-page", _), t("current-change", _));
      }
    });
    Te(p, (w) => {
      d.value > w && (d.value = w);
    });
    function v(w) {
      d.value = w;
    }
    function g(w) {
      c.value = w;
      const _ = p.value;
      d.value > _ && (d.value = _);
    }
    function C() {
      e.disabled || (d.value -= 1, t("prev-click", d.value));
    }
    function h() {
      e.disabled || (d.value += 1, t("next-click", d.value));
    }
    function k(w, _) {
      w && (w.props || (w.props = {}), w.props.class = [w.props.class, _].join(" "));
    }
    return Kt(z_, {
      pageCount: p,
      disabled: P(() => e.disabled),
      currentPage: d,
      changeEvent: v,
      handleSizeChange: g
    }), () => {
      var w, _;
      if (!l.value)
        return r("el.pagination.deprecationWarning"), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const E = [], x = [], M = _n("div", { class: s.e("rightwrapper") }, x), $ = {
        prev: _n(JR, {
          disabled: e.disabled,
          currentPage: d.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: C
        }),
        jumper: _n(IP, {
          size: e.small ? "small" : "default"
        }),
        pager: _n(WP, {
          currentPage: d.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: _n(oP, {
          disabled: e.disabled,
          currentPage: d.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: h
        }),
        sizes: _n(AP, {
          pageSize: c.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (_ = (w = n == null ? void 0 : n.default) == null ? void 0 : w.call(n)) != null ? _ : null,
        total: _n(BP, { total: Nt(e.total) ? 0 : e.total })
      }, O = e.layout.split(",").map((N) => N.trim());
      let D = !1;
      return O.forEach((N) => {
        if (N === "->") {
          D = !0;
          return;
        }
        D ? x.push($[N]) : E.push($[N]);
      }), k(E[0], s.is("first")), k(E[E.length - 1], s.is("last")), D && x.length > 0 && (k(x[0], s.is("first")), k(x[x.length - 1], s.is("last")), E.push(M)), _n("div", {
        class: [
          s.b(),
          s.is("background", e.background),
          {
            [s.m("small")]: e.small
          }
        ]
      }, E);
    };
  }
});
const XP = An(ZP), V_ = ot({
  trigger: ds.trigger,
  placement: qa.placement,
  disabled: ds.disabled,
  visible: tn.visible,
  transition: tn.transition,
  popperOptions: qa.popperOptions,
  tabindex: qa.tabindex,
  content: tn.content,
  popperStyle: tn.popperStyle,
  popperClass: tn.popperClass,
  enterable: {
    ...tn.enterable,
    default: !0
  },
  effect: {
    ...tn.effect,
    default: "light"
  },
  teleported: tn.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), YP = {
  "update:visible": (e) => bf(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, JP = "onUpdate:visible", QP = /* @__PURE__ */ re({
  name: "ElPopover"
}), eD = /* @__PURE__ */ re({
  ...QP,
  props: V_,
  emits: YP,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = P(() => r[JP]), o = Qe("popover"), i = W(), a = P(() => {
      var C;
      return (C = b(i)) == null ? void 0 : C.popperRef;
    }), l = P(() => [
      {
        width: yo(r.width)
      },
      r.popperStyle
    ]), u = P(() => [o.b(), r.popperClass, { [o.m("plain")]: !!r.content }]), f = P(() => r.transition === `${o.namespace.value}-fade-in-linear`), c = () => {
      var C;
      (C = i.value) == null || C.hide();
    }, p = () => {
      n("before-enter");
    }, d = () => {
      n("before-leave");
    }, v = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: a,
      hide: c
    }), (C, h) => (y(), ue(b(ps), gt({
      ref_key: "tooltipRef",
      ref: i
    }, C.$attrs, {
      trigger: C.trigger,
      placement: C.placement,
      disabled: C.disabled,
      visible: C.visible,
      transition: C.transition,
      "popper-options": C.popperOptions,
      tabindex: C.tabindex,
      content: C.content,
      offset: C.offset,
      "show-after": C.showAfter,
      "hide-after": C.hideAfter,
      "auto-close": C.autoClose,
      "show-arrow": C.showArrow,
      "aria-label": C.title,
      effect: C.effect,
      enterable: C.enterable,
      "popper-class": b(u),
      "popper-style": b(l),
      teleported: C.teleported,
      persistent: C.persistent,
      "gpu-acceleration": b(f),
      "onUpdate:visible": b(s),
      onBeforeShow: p,
      onBeforeHide: d,
      onShow: v,
      onHide: g
    }), {
      content: he(() => [
        C.title ? (y(), A("div", {
          key: 0,
          class: Q(b(o).e("title")),
          role: "title"
        }, Je(C.title), 3)) : _e("v-if", !0),
        we(C.$slots, "default", {}, () => [
          Zr(Je(C.content), 1)
        ])
      ]),
      default: he(() => [
        C.$slots.reference ? we(C.$slots, "reference", { key: 0 }) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var tD = /* @__PURE__ */ Ye(eD, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const g2 = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var nD = {
  mounted(e, t) {
    g2(e, t);
  },
  updated(e, t) {
    g2(e, t);
  }
};
const rD = "popover", oD = v$(nD, rD), sD = An(tD, {
  directive: oD
}), iD = "TOOLTIP_APPEND_TO";
function aD() {
  return ze(
    iD,
    P(() => {
    })
  );
}
({
  ...ps.props
});
function lD(e, t) {
  return /^on[A-Z]/.test(t);
}
function U_(e) {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
const cD = /* @__PURE__ */ re({
  name: "N8nInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "large" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    rows: { default: 2 },
    maxlength: { default: void 0 },
    title: { default: "" },
    name: { default: () => U_("input") },
    autocomplete: { default: "off" }
  },
  setup(e, { expose: t }) {
    const n = e, r = P(
      () => n.size === "medium" ? "default" : n.size
    ), s = P(() => {
      const f = [];
      return n.size === "xlarge" && f.push("xlarge"), n.type === "password" && f.push("ph-no-capture"), f;
    }), o = W(), i = P(() => {
      if (!(o != null && o.value)) return;
      const f = n.type === "textarea" ? "textarea" : "input";
      return o.value.$el.querySelector(f);
    });
    return t({ focus: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.focus();
    }, blur: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.blur();
    }, select: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.select();
    } }), (f, c) => (y(), ue(b(ta), gt({
      ref_key: "innerInput",
      ref: o,
      "model-value": f.modelValue,
      type: f.type,
      size: r.value,
      class: ["n8n-input", ...s.value],
      autocomplete: f.autocomplete,
      name: f.name,
      placeholder: f.placeholder,
      disabled: f.disabled,
      readonly: f.readonly,
      clearable: f.clearable,
      rows: f.rows,
      title: f.title,
      maxlength: f.maxlength
    }, f.$attrs), hi({ _: 2 }, [
      f.$slots.prepend ? {
        name: "prepend",
        fn: he(() => [
          we(f.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      f.$slots.append ? {
        name: "append",
        fn: he(() => [
          we(f.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      f.$slots.prefix ? {
        name: "prefix",
        fn: he(() => [
          we(f.$slots, "prefix")
        ]),
        key: "2"
      } : void 0,
      f.$slots.suffix ? {
        name: "suffix",
        fn: he(() => [
          we(f.$slots, "suffix")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["model-value", "type", "size", "class", "autocomplete", "name", "placeholder", "disabled", "readonly", "clearable", "rows", "title", "maxlength"]));
  }
}), uD = "_xlarge_ddtui_1", fD = {
  xlarge: uD
}, dD = {
  $style: fD
}, pD = /* @__PURE__ */ Tr(cD, [["__cssModules", dD]]);
var Ha = {};
const hD = "Á", gD = "á", mD = "Ă", vD = "ă", bD = "∾", _D = "∿", yD = "∾̳", wD = "Â", kD = "â", CD = "´", xD = "А", ED = "а", SD = "Æ", AD = "æ", TD = "⁡", MD = "𝔄", $D = "𝔞", LD = "À", ID = "à", OD = "ℵ", RD = "ℵ", PD = "Α", DD = "α", BD = "Ā", ND = "ā", FD = "⨿", zD = "&", qD = "&", HD = "⩕", jD = "⩓", VD = "∧", UD = "⩜", KD = "⩘", WD = "⩚", GD = "∠", ZD = "⦤", XD = "∠", YD = "⦨", JD = "⦩", QD = "⦪", eB = "⦫", tB = "⦬", nB = "⦭", rB = "⦮", oB = "⦯", sB = "∡", iB = "∟", aB = "⊾", lB = "⦝", cB = "∢", uB = "Å", fB = "⍼", dB = "Ą", pB = "ą", hB = "𝔸", gB = "𝕒", mB = "⩯", vB = "≈", bB = "⩰", _B = "≊", yB = "≋", wB = "'", kB = "⁡", CB = "≈", xB = "≊", EB = "Å", SB = "å", AB = "𝒜", TB = "𝒶", MB = "≔", $B = "*", LB = "≈", IB = "≍", OB = "Ã", RB = "ã", PB = "Ä", DB = "ä", BB = "∳", NB = "⨑", FB = "≌", zB = "϶", qB = "‵", HB = "∽", jB = "⋍", VB = "∖", UB = "⫧", KB = "⊽", WB = "⌅", GB = "⌆", ZB = "⌅", XB = "⎵", YB = "⎶", JB = "≌", QB = "Б", eN = "б", tN = "„", nN = "∵", rN = "∵", oN = "∵", sN = "⦰", iN = "϶", aN = "ℬ", lN = "ℬ", cN = "Β", uN = "β", fN = "ℶ", dN = "≬", pN = "𝔅", hN = "𝔟", gN = "⋂", mN = "◯", vN = "⋃", bN = "⨀", _N = "⨁", yN = "⨂", wN = "⨆", kN = "★", CN = "▽", xN = "△", EN = "⨄", SN = "⋁", AN = "⋀", TN = "⤍", MN = "⧫", $N = "▪", LN = "▴", IN = "▾", ON = "◂", RN = "▸", PN = "␣", DN = "▒", BN = "░", NN = "▓", FN = "█", zN = "=⃥", qN = "≡⃥", HN = "⫭", jN = "⌐", VN = "𝔹", UN = "𝕓", KN = "⊥", WN = "⊥", GN = "⋈", ZN = "⧉", XN = "┐", YN = "╕", JN = "╖", QN = "╗", eF = "┌", tF = "╒", nF = "╓", rF = "╔", oF = "─", sF = "═", iF = "┬", aF = "╤", lF = "╥", cF = "╦", uF = "┴", fF = "╧", dF = "╨", pF = "╩", hF = "⊟", gF = "⊞", mF = "⊠", vF = "┘", bF = "╛", _F = "╜", yF = "╝", wF = "└", kF = "╘", CF = "╙", xF = "╚", EF = "│", SF = "║", AF = "┼", TF = "╪", MF = "╫", $F = "╬", LF = "┤", IF = "╡", OF = "╢", RF = "╣", PF = "├", DF = "╞", BF = "╟", NF = "╠", FF = "‵", zF = "˘", qF = "˘", HF = "¦", jF = "𝒷", VF = "ℬ", UF = "⁏", KF = "∽", WF = "⋍", GF = "⧅", ZF = "\\", XF = "⟈", YF = "•", JF = "•", QF = "≎", ez = "⪮", tz = "≏", nz = "≎", rz = "≏", oz = "Ć", sz = "ć", iz = "⩄", az = "⩉", lz = "⩋", cz = "∩", uz = "⋒", fz = "⩇", dz = "⩀", pz = "ⅅ", hz = "∩︀", gz = "⁁", mz = "ˇ", vz = "ℭ", bz = "⩍", _z = "Č", yz = "č", wz = "Ç", kz = "ç", Cz = "Ĉ", xz = "ĉ", Ez = "∰", Sz = "⩌", Az = "⩐", Tz = "Ċ", Mz = "ċ", $z = "¸", Lz = "¸", Iz = "⦲", Oz = "¢", Rz = "·", Pz = "·", Dz = "𝔠", Bz = "ℭ", Nz = "Ч", Fz = "ч", zz = "✓", qz = "✓", Hz = "Χ", jz = "χ", Vz = "ˆ", Uz = "≗", Kz = "↺", Wz = "↻", Gz = "⊛", Zz = "⊚", Xz = "⊝", Yz = "⊙", Jz = "®", Qz = "Ⓢ", eq = "⊖", tq = "⊕", nq = "⊗", rq = "○", oq = "⧃", sq = "≗", iq = "⨐", aq = "⫯", lq = "⧂", cq = "∲", uq = "”", fq = "’", dq = "♣", pq = "♣", hq = ":", gq = "∷", mq = "⩴", vq = "≔", bq = "≔", _q = ",", yq = "@", wq = "∁", kq = "∘", Cq = "∁", xq = "ℂ", Eq = "≅", Sq = "⩭", Aq = "≡", Tq = "∮", Mq = "∯", $q = "∮", Lq = "𝕔", Iq = "ℂ", Oq = "∐", Rq = "∐", Pq = "©", Dq = "©", Bq = "℗", Nq = "∳", Fq = "↵", zq = "✗", qq = "⨯", Hq = "𝒞", jq = "𝒸", Vq = "⫏", Uq = "⫑", Kq = "⫐", Wq = "⫒", Gq = "⋯", Zq = "⤸", Xq = "⤵", Yq = "⋞", Jq = "⋟", Qq = "↶", eH = "⤽", tH = "⩈", nH = "⩆", rH = "≍", oH = "∪", sH = "⋓", iH = "⩊", aH = "⊍", lH = "⩅", cH = "∪︀", uH = "↷", fH = "⤼", dH = "⋞", pH = "⋟", hH = "⋎", gH = "⋏", mH = "¤", vH = "↶", bH = "↷", _H = "⋎", yH = "⋏", wH = "∲", kH = "∱", CH = "⌭", xH = "†", EH = "‡", SH = "ℸ", AH = "↓", TH = "↡", MH = "⇓", $H = "‐", LH = "⫤", IH = "⊣", OH = "⤏", RH = "˝", PH = "Ď", DH = "ď", BH = "Д", NH = "д", FH = "‡", zH = "⇊", qH = "ⅅ", HH = "ⅆ", jH = "⤑", VH = "⩷", UH = "°", KH = "∇", WH = "Δ", GH = "δ", ZH = "⦱", XH = "⥿", YH = "𝔇", JH = "𝔡", QH = "⥥", ej = "⇃", tj = "⇂", nj = "´", rj = "˙", oj = "˝", sj = "`", ij = "˜", aj = "⋄", lj = "⋄", cj = "⋄", uj = "♦", fj = "♦", dj = "¨", pj = "ⅆ", hj = "ϝ", gj = "⋲", mj = "÷", vj = "÷", bj = "⋇", _j = "⋇", yj = "Ђ", wj = "ђ", kj = "⌞", Cj = "⌍", xj = "$", Ej = "𝔻", Sj = "𝕕", Aj = "¨", Tj = "˙", Mj = "⃜", $j = "≐", Lj = "≑", Ij = "≐", Oj = "∸", Rj = "∔", Pj = "⊡", Dj = "⌆", Bj = "∯", Nj = "¨", Fj = "⇓", zj = "⇐", qj = "⇔", Hj = "⫤", jj = "⟸", Vj = "⟺", Uj = "⟹", Kj = "⇒", Wj = "⊨", Gj = "⇑", Zj = "⇕", Xj = "∥", Yj = "⤓", Jj = "↓", Qj = "↓", eV = "⇓", tV = "⇵", nV = "̑", rV = "⇊", oV = "⇃", sV = "⇂", iV = "⥐", aV = "⥞", lV = "⥖", cV = "↽", uV = "⥟", fV = "⥗", dV = "⇁", pV = "↧", hV = "⊤", gV = "⤐", mV = "⌟", vV = "⌌", bV = "𝒟", _V = "𝒹", yV = "Ѕ", wV = "ѕ", kV = "⧶", CV = "Đ", xV = "đ", EV = "⋱", SV = "▿", AV = "▾", TV = "⇵", MV = "⥯", $V = "⦦", LV = "Џ", IV = "џ", OV = "⟿", RV = "É", PV = "é", DV = "⩮", BV = "Ě", NV = "ě", FV = "Ê", zV = "ê", qV = "≖", HV = "≕", jV = "Э", VV = "э", UV = "⩷", KV = "Ė", WV = "ė", GV = "≑", ZV = "ⅇ", XV = "≒", YV = "𝔈", JV = "𝔢", QV = "⪚", eU = "È", tU = "è", nU = "⪖", rU = "⪘", oU = "⪙", sU = "∈", iU = "⏧", aU = "ℓ", lU = "⪕", cU = "⪗", uU = "Ē", fU = "ē", dU = "∅", pU = "∅", hU = "◻", gU = "∅", mU = "▫", vU = " ", bU = " ", _U = " ", yU = "Ŋ", wU = "ŋ", kU = " ", CU = "Ę", xU = "ę", EU = "𝔼", SU = "𝕖", AU = "⋕", TU = "⧣", MU = "⩱", $U = "ε", LU = "Ε", IU = "ε", OU = "ϵ", RU = "≖", PU = "≕", DU = "≂", BU = "⪖", NU = "⪕", FU = "⩵", zU = "=", qU = "≂", HU = "≟", jU = "⇌", VU = "≡", UU = "⩸", KU = "⧥", WU = "⥱", GU = "≓", ZU = "ℯ", XU = "ℰ", YU = "≐", JU = "⩳", QU = "≂", eK = "Η", tK = "η", nK = "Ð", rK = "ð", oK = "Ë", sK = "ë", iK = "€", aK = "!", lK = "∃", cK = "∃", uK = "ℰ", fK = "ⅇ", dK = "ⅇ", pK = "≒", hK = "Ф", gK = "ф", mK = "♀", vK = "ﬃ", bK = "ﬀ", _K = "ﬄ", yK = "𝔉", wK = "𝔣", kK = "ﬁ", CK = "◼", xK = "▪", EK = "fj", SK = "♭", AK = "ﬂ", TK = "▱", MK = "ƒ", $K = "𝔽", LK = "𝕗", IK = "∀", OK = "∀", RK = "⋔", PK = "⫙", DK = "ℱ", BK = "⨍", NK = "½", FK = "⅓", zK = "¼", qK = "⅕", HK = "⅙", jK = "⅛", VK = "⅔", UK = "⅖", KK = "¾", WK = "⅗", GK = "⅜", ZK = "⅘", XK = "⅚", YK = "⅝", JK = "⅞", QK = "⁄", eW = "⌢", tW = "𝒻", nW = "ℱ", rW = "ǵ", oW = "Γ", sW = "γ", iW = "Ϝ", aW = "ϝ", lW = "⪆", cW = "Ğ", uW = "ğ", fW = "Ģ", dW = "Ĝ", pW = "ĝ", hW = "Г", gW = "г", mW = "Ġ", vW = "ġ", bW = "≥", _W = "≧", yW = "⪌", wW = "⋛", kW = "≥", CW = "≧", xW = "⩾", EW = "⪩", SW = "⩾", AW = "⪀", TW = "⪂", MW = "⪄", $W = "⋛︀", LW = "⪔", IW = "𝔊", OW = "𝔤", RW = "≫", PW = "⋙", DW = "⋙", BW = "ℷ", NW = "Ѓ", FW = "ѓ", zW = "⪥", qW = "≷", HW = "⪒", jW = "⪤", VW = "⪊", UW = "⪊", KW = "⪈", WW = "≩", GW = "⪈", ZW = "≩", XW = "⋧", YW = "𝔾", JW = "𝕘", QW = "`", eG = "≥", tG = "⋛", nG = "≧", rG = "⪢", oG = "≷", sG = "⩾", iG = "≳", aG = "𝒢", lG = "ℊ", cG = "≳", uG = "⪎", fG = "⪐", dG = "⪧", pG = "⩺", hG = ">", gG = ">", mG = "≫", vG = "⋗", bG = "⦕", _G = "⩼", yG = "⪆", wG = "⥸", kG = "⋗", CG = "⋛", xG = "⪌", EG = "≷", SG = "≳", AG = "≩︀", TG = "≩︀", MG = "ˇ", $G = " ", LG = "½", IG = "ℋ", OG = "Ъ", RG = "ъ", PG = "⥈", DG = "↔", BG = "⇔", NG = "↭", FG = "^", zG = "ℏ", qG = "Ĥ", HG = "ĥ", jG = "♥", VG = "♥", UG = "…", KG = "⊹", WG = "𝔥", GG = "ℌ", ZG = "ℋ", XG = "⤥", YG = "⤦", JG = "⇿", QG = "∻", eZ = "↩", tZ = "↪", nZ = "𝕙", rZ = "ℍ", oZ = "―", sZ = "─", iZ = "𝒽", aZ = "ℋ", lZ = "ℏ", cZ = "Ħ", uZ = "ħ", fZ = "≎", dZ = "≏", pZ = "⁃", hZ = "‐", gZ = "Í", mZ = "í", vZ = "⁣", bZ = "Î", _Z = "î", yZ = "И", wZ = "и", kZ = "İ", CZ = "Е", xZ = "е", EZ = "¡", SZ = "⇔", AZ = "𝔦", TZ = "ℑ", MZ = "Ì", $Z = "ì", LZ = "ⅈ", IZ = "⨌", OZ = "∭", RZ = "⧜", PZ = "℩", DZ = "Ĳ", BZ = "ĳ", NZ = "Ī", FZ = "ī", zZ = "ℑ", qZ = "ⅈ", HZ = "ℐ", jZ = "ℑ", VZ = "ı", UZ = "ℑ", KZ = "⊷", WZ = "Ƶ", GZ = "⇒", ZZ = "℅", XZ = "∞", YZ = "⧝", JZ = "ı", QZ = "⊺", eX = "∫", tX = "∬", nX = "ℤ", rX = "∫", oX = "⊺", sX = "⋂", iX = "⨗", aX = "⨼", lX = "⁣", cX = "⁢", uX = "Ё", fX = "ё", dX = "Į", pX = "į", hX = "𝕀", gX = "𝕚", mX = "Ι", vX = "ι", bX = "⨼", _X = "¿", yX = "𝒾", wX = "ℐ", kX = "∈", CX = "⋵", xX = "⋹", EX = "⋴", SX = "⋳", AX = "∈", TX = "⁢", MX = "Ĩ", $X = "ĩ", LX = "І", IX = "і", OX = "Ï", RX = "ï", PX = "Ĵ", DX = "ĵ", BX = "Й", NX = "й", FX = "𝔍", zX = "𝔧", qX = "ȷ", HX = "𝕁", jX = "𝕛", VX = "𝒥", UX = "𝒿", KX = "Ј", WX = "ј", GX = "Є", ZX = "є", XX = "Κ", YX = "κ", JX = "ϰ", QX = "Ķ", eY = "ķ", tY = "К", nY = "к", rY = "𝔎", oY = "𝔨", sY = "ĸ", iY = "Х", aY = "х", lY = "Ќ", cY = "ќ", uY = "𝕂", fY = "𝕜", dY = "𝒦", pY = "𝓀", hY = "⇚", gY = "Ĺ", mY = "ĺ", vY = "⦴", bY = "ℒ", _Y = "Λ", yY = "λ", wY = "⟨", kY = "⟪", CY = "⦑", xY = "⟨", EY = "⪅", SY = "ℒ", AY = "«", TY = "⇤", MY = "⤟", $Y = "←", LY = "↞", IY = "⇐", OY = "⤝", RY = "↩", PY = "↫", DY = "⤹", BY = "⥳", NY = "↢", FY = "⤙", zY = "⤛", qY = "⪫", HY = "⪭", jY = "⪭︀", VY = "⤌", UY = "⤎", KY = "❲", WY = "{", GY = "[", ZY = "⦋", XY = "⦏", YY = "⦍", JY = "Ľ", QY = "ľ", eJ = "Ļ", tJ = "ļ", nJ = "⌈", rJ = "{", oJ = "Л", sJ = "л", iJ = "⤶", aJ = "“", lJ = "„", cJ = "⥧", uJ = "⥋", fJ = "↲", dJ = "≤", pJ = "≦", hJ = "⟨", gJ = "⇤", mJ = "←", vJ = "←", bJ = "⇐", _J = "⇆", yJ = "↢", wJ = "⌈", kJ = "⟦", CJ = "⥡", xJ = "⥙", EJ = "⇃", SJ = "⌊", AJ = "↽", TJ = "↼", MJ = "⇇", $J = "↔", LJ = "↔", IJ = "⇔", OJ = "⇆", RJ = "⇋", PJ = "↭", DJ = "⥎", BJ = "↤", NJ = "⊣", FJ = "⥚", zJ = "⋋", qJ = "⧏", HJ = "⊲", jJ = "⊴", VJ = "⥑", UJ = "⥠", KJ = "⥘", WJ = "↿", GJ = "⥒", ZJ = "↼", XJ = "⪋", YJ = "⋚", JJ = "≤", QJ = "≦", eQ = "⩽", tQ = "⪨", nQ = "⩽", rQ = "⩿", oQ = "⪁", sQ = "⪃", iQ = "⋚︀", aQ = "⪓", lQ = "⪅", cQ = "⋖", uQ = "⋚", fQ = "⪋", dQ = "⋚", pQ = "≦", hQ = "≶", gQ = "≶", mQ = "⪡", vQ = "≲", bQ = "⩽", _Q = "≲", yQ = "⥼", wQ = "⌊", kQ = "𝔏", CQ = "𝔩", xQ = "≶", EQ = "⪑", SQ = "⥢", AQ = "↽", TQ = "↼", MQ = "⥪", $Q = "▄", LQ = "Љ", IQ = "љ", OQ = "⇇", RQ = "≪", PQ = "⋘", DQ = "⌞", BQ = "⇚", NQ = "⥫", FQ = "◺", zQ = "Ŀ", qQ = "ŀ", HQ = "⎰", jQ = "⎰", VQ = "⪉", UQ = "⪉", KQ = "⪇", WQ = "≨", GQ = "⪇", ZQ = "≨", XQ = "⋦", YQ = "⟬", JQ = "⇽", QQ = "⟦", eee = "⟵", tee = "⟵", nee = "⟸", ree = "⟷", oee = "⟷", see = "⟺", iee = "⟼", aee = "⟶", lee = "⟶", cee = "⟹", uee = "↫", fee = "↬", dee = "⦅", pee = "𝕃", hee = "𝕝", gee = "⨭", mee = "⨴", vee = "∗", bee = "_", _ee = "↙", yee = "↘", wee = "◊", kee = "◊", Cee = "⧫", xee = "(", Eee = "⦓", See = "⇆", Aee = "⌟", Tee = "⇋", Mee = "⥭", $ee = "‎", Lee = "⊿", Iee = "‹", Oee = "𝓁", Ree = "ℒ", Pee = "↰", Dee = "↰", Bee = "≲", Nee = "⪍", Fee = "⪏", zee = "[", qee = "‘", Hee = "‚", jee = "Ł", Vee = "ł", Uee = "⪦", Kee = "⩹", Wee = "<", Gee = "<", Zee = "≪", Xee = "⋖", Yee = "⋋", Jee = "⋉", Qee = "⥶", ete = "⩻", tte = "◃", nte = "⊴", rte = "◂", ote = "⦖", ste = "⥊", ite = "⥦", ate = "≨︀", lte = "≨︀", cte = "¯", ute = "♂", fte = "✠", dte = "✠", pte = "↦", hte = "↦", gte = "↧", mte = "↤", vte = "↥", bte = "▮", _te = "⨩", yte = "М", wte = "м", kte = "—", Cte = "∺", xte = "∡", Ete = " ", Ste = "ℳ", Ate = "𝔐", Tte = "𝔪", Mte = "℧", $te = "µ", Lte = "*", Ite = "⫰", Ote = "∣", Rte = "·", Pte = "⊟", Dte = "−", Bte = "∸", Nte = "⨪", Fte = "∓", zte = "⫛", qte = "…", Hte = "∓", jte = "⊧", Vte = "𝕄", Ute = "𝕞", Kte = "∓", Wte = "𝓂", Gte = "ℳ", Zte = "∾", Xte = "Μ", Yte = "μ", Jte = "⊸", Qte = "⊸", ene = "∇", tne = "Ń", nne = "ń", rne = "∠⃒", one = "≉", sne = "⩰̸", ine = "≋̸", ane = "ŉ", lne = "≉", cne = "♮", une = "ℕ", fne = "♮", dne = " ", pne = "≎̸", hne = "≏̸", gne = "⩃", mne = "Ň", vne = "ň", bne = "Ņ", _ne = "ņ", yne = "≇", wne = "⩭̸", kne = "⩂", Cne = "Н", xne = "н", Ene = "–", Sne = "⤤", Ane = "↗", Tne = "⇗", Mne = "↗", $ne = "≠", Lne = "≐̸", Ine = "​", One = "​", Rne = "​", Pne = "​", Dne = "≢", Bne = "⤨", Nne = "≂̸", Fne = "≫", zne = "≪", qne = `
`, Hne = "∄", jne = "∄", Vne = "𝔑", Une = "𝔫", Kne = "≧̸", Wne = "≱", Gne = "≱", Zne = "≧̸", Xne = "⩾̸", Yne = "⩾̸", Jne = "⋙̸", Qne = "≵", ere = "≫⃒", tre = "≯", nre = "≯", rre = "≫̸", ore = "↮", sre = "⇎", ire = "⫲", are = "∋", lre = "⋼", cre = "⋺", ure = "∋", fre = "Њ", dre = "њ", pre = "↚", hre = "⇍", gre = "‥", mre = "≦̸", vre = "≰", bre = "↚", _re = "⇍", yre = "↮", wre = "⇎", kre = "≰", Cre = "≦̸", xre = "⩽̸", Ere = "⩽̸", Sre = "≮", Are = "⋘̸", Tre = "≴", Mre = "≪⃒", $re = "≮", Lre = "⋪", Ire = "⋬", Ore = "≪̸", Rre = "∤", Pre = "⁠", Dre = " ", Bre = "𝕟", Nre = "ℕ", Fre = "⫬", zre = "¬", qre = "≢", Hre = "≭", jre = "∦", Vre = "∉", Ure = "≠", Kre = "≂̸", Wre = "∄", Gre = "≯", Zre = "≱", Xre = "≧̸", Yre = "≫̸", Jre = "≹", Qre = "⩾̸", eoe = "≵", toe = "≎̸", noe = "≏̸", roe = "∉", ooe = "⋵̸", soe = "⋹̸", ioe = "∉", aoe = "⋷", loe = "⋶", coe = "⧏̸", uoe = "⋪", foe = "⋬", doe = "≮", poe = "≰", hoe = "≸", goe = "≪̸", moe = "⩽̸", voe = "≴", boe = "⪢̸", _oe = "⪡̸", yoe = "∌", woe = "∌", koe = "⋾", Coe = "⋽", xoe = "⊀", Eoe = "⪯̸", Soe = "⋠", Aoe = "∌", Toe = "⧐̸", Moe = "⋫", $oe = "⋭", Loe = "⊏̸", Ioe = "⋢", Ooe = "⊐̸", Roe = "⋣", Poe = "⊂⃒", Doe = "⊈", Boe = "⊁", Noe = "⪰̸", Foe = "⋡", zoe = "≿̸", qoe = "⊃⃒", Hoe = "⊉", joe = "≁", Voe = "≄", Uoe = "≇", Koe = "≉", Woe = "∤", Goe = "∦", Zoe = "∦", Xoe = "⫽⃥", Yoe = "∂̸", Joe = "⨔", Qoe = "⊀", ese = "⋠", tse = "⊀", nse = "⪯̸", rse = "⪯̸", ose = "⤳̸", sse = "↛", ise = "⇏", ase = "↝̸", lse = "↛", cse = "⇏", use = "⋫", fse = "⋭", dse = "⊁", pse = "⋡", hse = "⪰̸", gse = "𝒩", mse = "𝓃", vse = "∤", bse = "∦", _se = "≁", yse = "≄", wse = "≄", kse = "∤", Cse = "∦", xse = "⋢", Ese = "⋣", Sse = "⊄", Ase = "⫅̸", Tse = "⊈", Mse = "⊂⃒", $se = "⊈", Lse = "⫅̸", Ise = "⊁", Ose = "⪰̸", Rse = "⊅", Pse = "⫆̸", Dse = "⊉", Bse = "⊃⃒", Nse = "⊉", Fse = "⫆̸", zse = "≹", qse = "Ñ", Hse = "ñ", jse = "≸", Vse = "⋪", Use = "⋬", Kse = "⋫", Wse = "⋭", Gse = "Ν", Zse = "ν", Xse = "#", Yse = "№", Jse = " ", Qse = "≍⃒", eie = "⊬", tie = "⊭", nie = "⊮", rie = "⊯", oie = "≥⃒", sie = ">⃒", iie = "⤄", aie = "⧞", lie = "⤂", cie = "≤⃒", uie = "<⃒", fie = "⊴⃒", die = "⤃", pie = "⊵⃒", hie = "∼⃒", gie = "⤣", mie = "↖", vie = "⇖", bie = "↖", _ie = "⤧", yie = "Ó", wie = "ó", kie = "⊛", Cie = "Ô", xie = "ô", Eie = "⊚", Sie = "О", Aie = "о", Tie = "⊝", Mie = "Ő", $ie = "ő", Lie = "⨸", Iie = "⊙", Oie = "⦼", Rie = "Œ", Pie = "œ", Die = "⦿", Bie = "𝔒", Nie = "𝔬", Fie = "˛", zie = "Ò", qie = "ò", Hie = "⧁", jie = "⦵", Vie = "Ω", Uie = "∮", Kie = "↺", Wie = "⦾", Gie = "⦻", Zie = "‾", Xie = "⧀", Yie = "Ō", Jie = "ō", Qie = "Ω", eae = "ω", tae = "Ο", nae = "ο", rae = "⦶", oae = "⊖", sae = "𝕆", iae = "𝕠", aae = "⦷", lae = "“", cae = "‘", uae = "⦹", fae = "⊕", dae = "↻", pae = "⩔", hae = "∨", gae = "⩝", mae = "ℴ", vae = "ℴ", bae = "ª", _ae = "º", yae = "⊶", wae = "⩖", kae = "⩗", Cae = "⩛", xae = "Ⓢ", Eae = "𝒪", Sae = "ℴ", Aae = "Ø", Tae = "ø", Mae = "⊘", $ae = "Õ", Lae = "õ", Iae = "⨶", Oae = "⨷", Rae = "⊗", Pae = "Ö", Dae = "ö", Bae = "⌽", Nae = "‾", Fae = "⏞", zae = "⎴", qae = "⏜", Hae = "¶", jae = "∥", Vae = "∥", Uae = "⫳", Kae = "⫽", Wae = "∂", Gae = "∂", Zae = "П", Xae = "п", Yae = "%", Jae = ".", Qae = "‰", ele = "⊥", tle = "‱", nle = "𝔓", rle = "𝔭", ole = "Φ", sle = "φ", ile = "ϕ", ale = "ℳ", lle = "☎", cle = "Π", ule = "π", fle = "⋔", dle = "ϖ", ple = "ℏ", hle = "ℎ", gle = "ℏ", mle = "⨣", vle = "⊞", ble = "⨢", _le = "+", yle = "∔", wle = "⨥", kle = "⩲", Cle = "±", xle = "±", Ele = "⨦", Sle = "⨧", Ale = "±", Tle = "ℌ", Mle = "⨕", $le = "𝕡", Lle = "ℙ", Ile = "£", Ole = "⪷", Rle = "⪻", Ple = "≺", Dle = "≼", Ble = "⪷", Nle = "≺", Fle = "≼", zle = "≺", qle = "⪯", Hle = "≼", jle = "≾", Vle = "⪯", Ule = "⪹", Kle = "⪵", Wle = "⋨", Gle = "⪯", Zle = "⪳", Xle = "≾", Yle = "′", Jle = "″", Qle = "ℙ", ece = "⪹", tce = "⪵", nce = "⋨", rce = "∏", oce = "∏", sce = "⌮", ice = "⌒", ace = "⌓", lce = "∝", cce = "∝", uce = "∷", fce = "∝", dce = "≾", pce = "⊰", hce = "𝒫", gce = "𝓅", mce = "Ψ", vce = "ψ", bce = " ", _ce = "𝔔", yce = "𝔮", wce = "⨌", kce = "𝕢", Cce = "ℚ", xce = "⁗", Ece = "𝒬", Sce = "𝓆", Ace = "ℍ", Tce = "⨖", Mce = "?", $ce = "≟", Lce = '"', Ice = '"', Oce = "⇛", Rce = "∽̱", Pce = "Ŕ", Dce = "ŕ", Bce = "√", Nce = "⦳", Fce = "⟩", zce = "⟫", qce = "⦒", Hce = "⦥", jce = "⟩", Vce = "»", Uce = "⥵", Kce = "⇥", Wce = "⤠", Gce = "⤳", Zce = "→", Xce = "↠", Yce = "⇒", Jce = "⤞", Qce = "↪", eue = "↬", tue = "⥅", nue = "⥴", rue = "⤖", oue = "↣", sue = "↝", iue = "⤚", aue = "⤜", lue = "∶", cue = "ℚ", uue = "⤍", fue = "⤏", due = "⤐", pue = "❳", hue = "}", gue = "]", mue = "⦌", vue = "⦎", bue = "⦐", _ue = "Ř", yue = "ř", wue = "Ŗ", kue = "ŗ", Cue = "⌉", xue = "}", Eue = "Р", Sue = "р", Aue = "⤷", Tue = "⥩", Mue = "”", $ue = "”", Lue = "↳", Iue = "ℜ", Oue = "ℛ", Rue = "ℜ", Pue = "ℝ", Due = "ℜ", Bue = "▭", Nue = "®", Fue = "®", zue = "∋", que = "⇋", Hue = "⥯", jue = "⥽", Vue = "⌋", Uue = "𝔯", Kue = "ℜ", Wue = "⥤", Gue = "⇁", Zue = "⇀", Xue = "⥬", Yue = "Ρ", Jue = "ρ", Que = "ϱ", efe = "⟩", tfe = "⇥", nfe = "→", rfe = "→", ofe = "⇒", sfe = "⇄", ife = "↣", afe = "⌉", lfe = "⟧", cfe = "⥝", ufe = "⥕", ffe = "⇂", dfe = "⌋", pfe = "⇁", hfe = "⇀", gfe = "⇄", mfe = "⇌", vfe = "⇉", bfe = "↝", _fe = "↦", yfe = "⊢", wfe = "⥛", kfe = "⋌", Cfe = "⧐", xfe = "⊳", Efe = "⊵", Sfe = "⥏", Afe = "⥜", Tfe = "⥔", Mfe = "↾", $fe = "⥓", Lfe = "⇀", Ife = "˚", Ofe = "≓", Rfe = "⇄", Pfe = "⇌", Dfe = "‏", Bfe = "⎱", Nfe = "⎱", Ffe = "⫮", zfe = "⟭", qfe = "⇾", Hfe = "⟧", jfe = "⦆", Vfe = "𝕣", Ufe = "ℝ", Kfe = "⨮", Wfe = "⨵", Gfe = "⥰", Zfe = ")", Xfe = "⦔", Yfe = "⨒", Jfe = "⇉", Qfe = "⇛", ede = "›", tde = "𝓇", nde = "ℛ", rde = "↱", ode = "↱", sde = "]", ide = "’", ade = "’", lde = "⋌", cde = "⋊", ude = "▹", fde = "⊵", dde = "▸", pde = "⧎", hde = "⧴", gde = "⥨", mde = "℞", vde = "Ś", bde = "ś", _de = "‚", yde = "⪸", wde = "Š", kde = "š", Cde = "⪼", xde = "≻", Ede = "≽", Sde = "⪰", Ade = "⪴", Tde = "Ş", Mde = "ş", $de = "Ŝ", Lde = "ŝ", Ide = "⪺", Ode = "⪶", Rde = "⋩", Pde = "⨓", Dde = "≿", Bde = "С", Nde = "с", Fde = "⊡", zde = "⋅", qde = "⩦", Hde = "⤥", jde = "↘", Vde = "⇘", Ude = "↘", Kde = "§", Wde = ";", Gde = "⤩", Zde = "∖", Xde = "∖", Yde = "✶", Jde = "𝔖", Qde = "𝔰", e0e = "⌢", t0e = "♯", n0e = "Щ", r0e = "щ", o0e = "Ш", s0e = "ш", i0e = "↓", a0e = "←", l0e = "∣", c0e = "∥", u0e = "→", f0e = "↑", d0e = "­", p0e = "Σ", h0e = "σ", g0e = "ς", m0e = "ς", v0e = "∼", b0e = "⩪", _0e = "≃", y0e = "≃", w0e = "⪞", k0e = "⪠", C0e = "⪝", x0e = "⪟", E0e = "≆", S0e = "⨤", A0e = "⥲", T0e = "←", M0e = "∘", $0e = "∖", L0e = "⨳", I0e = "⧤", O0e = "∣", R0e = "⌣", P0e = "⪪", D0e = "⪬", B0e = "⪬︀", N0e = "Ь", F0e = "ь", z0e = "⌿", q0e = "⧄", H0e = "/", j0e = "𝕊", V0e = "𝕤", U0e = "♠", K0e = "♠", W0e = "∥", G0e = "⊓", Z0e = "⊓︀", X0e = "⊔", Y0e = "⊔︀", J0e = "√", Q0e = "⊏", e2e = "⊑", t2e = "⊏", n2e = "⊑", r2e = "⊐", o2e = "⊒", s2e = "⊐", i2e = "⊒", a2e = "□", l2e = "□", c2e = "⊓", u2e = "⊏", f2e = "⊑", d2e = "⊐", p2e = "⊒", h2e = "⊔", g2e = "▪", m2e = "□", v2e = "▪", b2e = "→", _2e = "𝒮", y2e = "𝓈", w2e = "∖", k2e = "⌣", C2e = "⋆", x2e = "⋆", E2e = "☆", S2e = "★", A2e = "ϵ", T2e = "ϕ", M2e = "¯", $2e = "⊂", L2e = "⋐", I2e = "⪽", O2e = "⫅", R2e = "⊆", P2e = "⫃", D2e = "⫁", B2e = "⫋", N2e = "⊊", F2e = "⪿", z2e = "⥹", q2e = "⊂", H2e = "⋐", j2e = "⊆", V2e = "⫅", U2e = "⊆", K2e = "⊊", W2e = "⫋", G2e = "⫇", Z2e = "⫕", X2e = "⫓", Y2e = "⪸", J2e = "≻", Q2e = "≽", epe = "≻", tpe = "⪰", npe = "≽", rpe = "≿", ope = "⪰", spe = "⪺", ipe = "⪶", ape = "⋩", lpe = "≿", cpe = "∋", upe = "∑", fpe = "∑", dpe = "♪", ppe = "¹", hpe = "²", gpe = "³", mpe = "⊃", vpe = "⋑", bpe = "⪾", _pe = "⫘", ype = "⫆", wpe = "⊇", kpe = "⫄", Cpe = "⊃", xpe = "⊇", Epe = "⟉", Spe = "⫗", Ape = "⥻", Tpe = "⫂", Mpe = "⫌", $pe = "⊋", Lpe = "⫀", Ipe = "⊃", Ope = "⋑", Rpe = "⊇", Ppe = "⫆", Dpe = "⊋", Bpe = "⫌", Npe = "⫈", Fpe = "⫔", zpe = "⫖", qpe = "⤦", Hpe = "↙", jpe = "⇙", Vpe = "↙", Upe = "⤪", Kpe = "ß", Wpe = "	", Gpe = "⌖", Zpe = "Τ", Xpe = "τ", Ype = "⎴", Jpe = "Ť", Qpe = "ť", ehe = "Ţ", the = "ţ", nhe = "Т", rhe = "т", ohe = "⃛", she = "⌕", ihe = "𝔗", ahe = "𝔱", lhe = "∴", che = "∴", uhe = "∴", fhe = "Θ", dhe = "θ", phe = "ϑ", hhe = "ϑ", ghe = "≈", mhe = "∼", vhe = "  ", bhe = " ", _he = " ", yhe = "≈", whe = "∼", khe = "Þ", Che = "þ", xhe = "˜", Ehe = "∼", She = "≃", Ahe = "≅", The = "≈", Mhe = "⨱", $he = "⊠", Lhe = "×", Ihe = "⨰", Ohe = "∭", Rhe = "⤨", Phe = "⌶", Dhe = "⫱", Bhe = "⊤", Nhe = "𝕋", Fhe = "𝕥", zhe = "⫚", qhe = "⤩", Hhe = "‴", jhe = "™", Vhe = "™", Uhe = "▵", Khe = "▿", Whe = "◃", Ghe = "⊴", Zhe = "≜", Xhe = "▹", Yhe = "⊵", Jhe = "◬", Qhe = "≜", e1e = "⨺", t1e = "⃛", n1e = "⨹", r1e = "⧍", o1e = "⨻", s1e = "⏢", i1e = "𝒯", a1e = "𝓉", l1e = "Ц", c1e = "ц", u1e = "Ћ", f1e = "ћ", d1e = "Ŧ", p1e = "ŧ", h1e = "≬", g1e = "↞", m1e = "↠", v1e = "Ú", b1e = "ú", _1e = "↑", y1e = "↟", w1e = "⇑", k1e = "⥉", C1e = "Ў", x1e = "ў", E1e = "Ŭ", S1e = "ŭ", A1e = "Û", T1e = "û", M1e = "У", $1e = "у", L1e = "⇅", I1e = "Ű", O1e = "ű", R1e = "⥮", P1e = "⥾", D1e = "𝔘", B1e = "𝔲", N1e = "Ù", F1e = "ù", z1e = "⥣", q1e = "↿", H1e = "↾", j1e = "▀", V1e = "⌜", U1e = "⌜", K1e = "⌏", W1e = "◸", G1e = "Ū", Z1e = "ū", X1e = "¨", Y1e = "_", J1e = "⏟", Q1e = "⎵", ege = "⏝", tge = "⋃", nge = "⊎", rge = "Ų", oge = "ų", sge = "𝕌", ige = "𝕦", age = "⤒", lge = "↑", cge = "↑", uge = "⇑", fge = "⇅", dge = "↕", pge = "↕", hge = "⇕", gge = "⥮", mge = "↿", vge = "↾", bge = "⊎", _ge = "↖", yge = "↗", wge = "υ", kge = "ϒ", Cge = "ϒ", xge = "Υ", Ege = "υ", Sge = "↥", Age = "⊥", Tge = "⇈", Mge = "⌝", $ge = "⌝", Lge = "⌎", Ige = "Ů", Oge = "ů", Rge = "◹", Pge = "𝒰", Dge = "𝓊", Bge = "⋰", Nge = "Ũ", Fge = "ũ", zge = "▵", qge = "▴", Hge = "⇈", jge = "Ü", Vge = "ü", Uge = "⦧", Kge = "⦜", Wge = "ϵ", Gge = "ϰ", Zge = "∅", Xge = "ϕ", Yge = "ϖ", Jge = "∝", Qge = "↕", eme = "⇕", tme = "ϱ", nme = "ς", rme = "⊊︀", ome = "⫋︀", sme = "⊋︀", ime = "⫌︀", ame = "ϑ", lme = "⊲", cme = "⊳", ume = "⫨", fme = "⫫", dme = "⫩", pme = "В", hme = "в", gme = "⊢", mme = "⊨", vme = "⊩", bme = "⊫", _me = "⫦", yme = "⊻", wme = "∨", kme = "⋁", Cme = "≚", xme = "⋮", Eme = "|", Sme = "‖", Ame = "|", Tme = "‖", Mme = "∣", $me = "|", Lme = "❘", Ime = "≀", Ome = " ", Rme = "𝔙", Pme = "𝔳", Dme = "⊲", Bme = "⊂⃒", Nme = "⊃⃒", Fme = "𝕍", zme = "𝕧", qme = "∝", Hme = "⊳", jme = "𝒱", Vme = "𝓋", Ume = "⫋︀", Kme = "⊊︀", Wme = "⫌︀", Gme = "⊋︀", Zme = "⊪", Xme = "⦚", Yme = "Ŵ", Jme = "ŵ", Qme = "⩟", eve = "∧", tve = "⋀", nve = "≙", rve = "℘", ove = "𝔚", sve = "𝔴", ive = "𝕎", ave = "𝕨", lve = "℘", cve = "≀", uve = "≀", fve = "𝒲", dve = "𝓌", pve = "⋂", hve = "◯", gve = "⋃", mve = "▽", vve = "𝔛", bve = "𝔵", _ve = "⟷", yve = "⟺", wve = "Ξ", kve = "ξ", Cve = "⟵", xve = "⟸", Eve = "⟼", Sve = "⋻", Ave = "⨀", Tve = "𝕏", Mve = "𝕩", $ve = "⨁", Lve = "⨂", Ive = "⟶", Ove = "⟹", Rve = "𝒳", Pve = "𝓍", Dve = "⨆", Bve = "⨄", Nve = "△", Fve = "⋁", zve = "⋀", qve = "Ý", Hve = "ý", jve = "Я", Vve = "я", Uve = "Ŷ", Kve = "ŷ", Wve = "Ы", Gve = "ы", Zve = "¥", Xve = "𝔜", Yve = "𝔶", Jve = "Ї", Qve = "ї", ebe = "𝕐", tbe = "𝕪", nbe = "𝒴", rbe = "𝓎", obe = "Ю", sbe = "ю", ibe = "ÿ", abe = "Ÿ", lbe = "Ź", cbe = "ź", ube = "Ž", fbe = "ž", dbe = "З", pbe = "з", hbe = "Ż", gbe = "ż", mbe = "ℨ", vbe = "​", bbe = "Ζ", _be = "ζ", ybe = "𝔷", wbe = "ℨ", kbe = "Ж", Cbe = "ж", xbe = "⇝", Ebe = "𝕫", Sbe = "ℤ", Abe = "𝒵", Tbe = "𝓏", Mbe = "‍", $be = "‌", Lbe = {
  Aacute: hD,
  aacute: gD,
  Abreve: mD,
  abreve: vD,
  ac: bD,
  acd: _D,
  acE: yD,
  Acirc: wD,
  acirc: kD,
  acute: CD,
  Acy: xD,
  acy: ED,
  AElig: SD,
  aelig: AD,
  af: TD,
  Afr: MD,
  afr: $D,
  Agrave: LD,
  agrave: ID,
  alefsym: OD,
  aleph: RD,
  Alpha: PD,
  alpha: DD,
  Amacr: BD,
  amacr: ND,
  amalg: FD,
  amp: zD,
  AMP: qD,
  andand: HD,
  And: jD,
  and: VD,
  andd: UD,
  andslope: KD,
  andv: WD,
  ang: GD,
  ange: ZD,
  angle: XD,
  angmsdaa: YD,
  angmsdab: JD,
  angmsdac: QD,
  angmsdad: eB,
  angmsdae: tB,
  angmsdaf: nB,
  angmsdag: rB,
  angmsdah: oB,
  angmsd: sB,
  angrt: iB,
  angrtvb: aB,
  angrtvbd: lB,
  angsph: cB,
  angst: uB,
  angzarr: fB,
  Aogon: dB,
  aogon: pB,
  Aopf: hB,
  aopf: gB,
  apacir: mB,
  ap: vB,
  apE: bB,
  ape: _B,
  apid: yB,
  apos: wB,
  ApplyFunction: kB,
  approx: CB,
  approxeq: xB,
  Aring: EB,
  aring: SB,
  Ascr: AB,
  ascr: TB,
  Assign: MB,
  ast: $B,
  asymp: LB,
  asympeq: IB,
  Atilde: OB,
  atilde: RB,
  Auml: PB,
  auml: DB,
  awconint: BB,
  awint: NB,
  backcong: FB,
  backepsilon: zB,
  backprime: qB,
  backsim: HB,
  backsimeq: jB,
  Backslash: VB,
  Barv: UB,
  barvee: KB,
  barwed: WB,
  Barwed: GB,
  barwedge: ZB,
  bbrk: XB,
  bbrktbrk: YB,
  bcong: JB,
  Bcy: QB,
  bcy: eN,
  bdquo: tN,
  becaus: nN,
  because: rN,
  Because: oN,
  bemptyv: sN,
  bepsi: iN,
  bernou: aN,
  Bernoullis: lN,
  Beta: cN,
  beta: uN,
  beth: fN,
  between: dN,
  Bfr: pN,
  bfr: hN,
  bigcap: gN,
  bigcirc: mN,
  bigcup: vN,
  bigodot: bN,
  bigoplus: _N,
  bigotimes: yN,
  bigsqcup: wN,
  bigstar: kN,
  bigtriangledown: CN,
  bigtriangleup: xN,
  biguplus: EN,
  bigvee: SN,
  bigwedge: AN,
  bkarow: TN,
  blacklozenge: MN,
  blacksquare: $N,
  blacktriangle: LN,
  blacktriangledown: IN,
  blacktriangleleft: ON,
  blacktriangleright: RN,
  blank: PN,
  blk12: DN,
  blk14: BN,
  blk34: NN,
  block: FN,
  bne: zN,
  bnequiv: qN,
  bNot: HN,
  bnot: jN,
  Bopf: VN,
  bopf: UN,
  bot: KN,
  bottom: WN,
  bowtie: GN,
  boxbox: ZN,
  boxdl: XN,
  boxdL: YN,
  boxDl: JN,
  boxDL: QN,
  boxdr: eF,
  boxdR: tF,
  boxDr: nF,
  boxDR: rF,
  boxh: oF,
  boxH: sF,
  boxhd: iF,
  boxHd: aF,
  boxhD: lF,
  boxHD: cF,
  boxhu: uF,
  boxHu: fF,
  boxhU: dF,
  boxHU: pF,
  boxminus: hF,
  boxplus: gF,
  boxtimes: mF,
  boxul: vF,
  boxuL: bF,
  boxUl: _F,
  boxUL: yF,
  boxur: wF,
  boxuR: kF,
  boxUr: CF,
  boxUR: xF,
  boxv: EF,
  boxV: SF,
  boxvh: AF,
  boxvH: TF,
  boxVh: MF,
  boxVH: $F,
  boxvl: LF,
  boxvL: IF,
  boxVl: OF,
  boxVL: RF,
  boxvr: PF,
  boxvR: DF,
  boxVr: BF,
  boxVR: NF,
  bprime: FF,
  breve: zF,
  Breve: qF,
  brvbar: HF,
  bscr: jF,
  Bscr: VF,
  bsemi: UF,
  bsim: KF,
  bsime: WF,
  bsolb: GF,
  bsol: ZF,
  bsolhsub: XF,
  bull: YF,
  bullet: JF,
  bump: QF,
  bumpE: ez,
  bumpe: tz,
  Bumpeq: nz,
  bumpeq: rz,
  Cacute: oz,
  cacute: sz,
  capand: iz,
  capbrcup: az,
  capcap: lz,
  cap: cz,
  Cap: uz,
  capcup: fz,
  capdot: dz,
  CapitalDifferentialD: pz,
  caps: hz,
  caret: gz,
  caron: mz,
  Cayleys: vz,
  ccaps: bz,
  Ccaron: _z,
  ccaron: yz,
  Ccedil: wz,
  ccedil: kz,
  Ccirc: Cz,
  ccirc: xz,
  Cconint: Ez,
  ccups: Sz,
  ccupssm: Az,
  Cdot: Tz,
  cdot: Mz,
  cedil: $z,
  Cedilla: Lz,
  cemptyv: Iz,
  cent: Oz,
  centerdot: Rz,
  CenterDot: Pz,
  cfr: Dz,
  Cfr: Bz,
  CHcy: Nz,
  chcy: Fz,
  check: zz,
  checkmark: qz,
  Chi: Hz,
  chi: jz,
  circ: Vz,
  circeq: Uz,
  circlearrowleft: Kz,
  circlearrowright: Wz,
  circledast: Gz,
  circledcirc: Zz,
  circleddash: Xz,
  CircleDot: Yz,
  circledR: Jz,
  circledS: Qz,
  CircleMinus: eq,
  CirclePlus: tq,
  CircleTimes: nq,
  cir: rq,
  cirE: oq,
  cire: sq,
  cirfnint: iq,
  cirmid: aq,
  cirscir: lq,
  ClockwiseContourIntegral: cq,
  CloseCurlyDoubleQuote: uq,
  CloseCurlyQuote: fq,
  clubs: dq,
  clubsuit: pq,
  colon: hq,
  Colon: gq,
  Colone: mq,
  colone: vq,
  coloneq: bq,
  comma: _q,
  commat: yq,
  comp: wq,
  compfn: kq,
  complement: Cq,
  complexes: xq,
  cong: Eq,
  congdot: Sq,
  Congruent: Aq,
  conint: Tq,
  Conint: Mq,
  ContourIntegral: $q,
  copf: Lq,
  Copf: Iq,
  coprod: Oq,
  Coproduct: Rq,
  copy: Pq,
  COPY: Dq,
  copysr: Bq,
  CounterClockwiseContourIntegral: Nq,
  crarr: Fq,
  cross: zq,
  Cross: qq,
  Cscr: Hq,
  cscr: jq,
  csub: Vq,
  csube: Uq,
  csup: Kq,
  csupe: Wq,
  ctdot: Gq,
  cudarrl: Zq,
  cudarrr: Xq,
  cuepr: Yq,
  cuesc: Jq,
  cularr: Qq,
  cularrp: eH,
  cupbrcap: tH,
  cupcap: nH,
  CupCap: rH,
  cup: oH,
  Cup: sH,
  cupcup: iH,
  cupdot: aH,
  cupor: lH,
  cups: cH,
  curarr: uH,
  curarrm: fH,
  curlyeqprec: dH,
  curlyeqsucc: pH,
  curlyvee: hH,
  curlywedge: gH,
  curren: mH,
  curvearrowleft: vH,
  curvearrowright: bH,
  cuvee: _H,
  cuwed: yH,
  cwconint: wH,
  cwint: kH,
  cylcty: CH,
  dagger: xH,
  Dagger: EH,
  daleth: SH,
  darr: AH,
  Darr: TH,
  dArr: MH,
  dash: $H,
  Dashv: LH,
  dashv: IH,
  dbkarow: OH,
  dblac: RH,
  Dcaron: PH,
  dcaron: DH,
  Dcy: BH,
  dcy: NH,
  ddagger: FH,
  ddarr: zH,
  DD: qH,
  dd: HH,
  DDotrahd: jH,
  ddotseq: VH,
  deg: UH,
  Del: KH,
  Delta: WH,
  delta: GH,
  demptyv: ZH,
  dfisht: XH,
  Dfr: YH,
  dfr: JH,
  dHar: QH,
  dharl: ej,
  dharr: tj,
  DiacriticalAcute: nj,
  DiacriticalDot: rj,
  DiacriticalDoubleAcute: oj,
  DiacriticalGrave: sj,
  DiacriticalTilde: ij,
  diam: aj,
  diamond: lj,
  Diamond: cj,
  diamondsuit: uj,
  diams: fj,
  die: dj,
  DifferentialD: pj,
  digamma: hj,
  disin: gj,
  div: mj,
  divide: vj,
  divideontimes: bj,
  divonx: _j,
  DJcy: yj,
  djcy: wj,
  dlcorn: kj,
  dlcrop: Cj,
  dollar: xj,
  Dopf: Ej,
  dopf: Sj,
  Dot: Aj,
  dot: Tj,
  DotDot: Mj,
  doteq: $j,
  doteqdot: Lj,
  DotEqual: Ij,
  dotminus: Oj,
  dotplus: Rj,
  dotsquare: Pj,
  doublebarwedge: Dj,
  DoubleContourIntegral: Bj,
  DoubleDot: Nj,
  DoubleDownArrow: Fj,
  DoubleLeftArrow: zj,
  DoubleLeftRightArrow: qj,
  DoubleLeftTee: Hj,
  DoubleLongLeftArrow: jj,
  DoubleLongLeftRightArrow: Vj,
  DoubleLongRightArrow: Uj,
  DoubleRightArrow: Kj,
  DoubleRightTee: Wj,
  DoubleUpArrow: Gj,
  DoubleUpDownArrow: Zj,
  DoubleVerticalBar: Xj,
  DownArrowBar: Yj,
  downarrow: Jj,
  DownArrow: Qj,
  Downarrow: eV,
  DownArrowUpArrow: tV,
  DownBreve: nV,
  downdownarrows: rV,
  downharpoonleft: oV,
  downharpoonright: sV,
  DownLeftRightVector: iV,
  DownLeftTeeVector: aV,
  DownLeftVectorBar: lV,
  DownLeftVector: cV,
  DownRightTeeVector: uV,
  DownRightVectorBar: fV,
  DownRightVector: dV,
  DownTeeArrow: pV,
  DownTee: hV,
  drbkarow: gV,
  drcorn: mV,
  drcrop: vV,
  Dscr: bV,
  dscr: _V,
  DScy: yV,
  dscy: wV,
  dsol: kV,
  Dstrok: CV,
  dstrok: xV,
  dtdot: EV,
  dtri: SV,
  dtrif: AV,
  duarr: TV,
  duhar: MV,
  dwangle: $V,
  DZcy: LV,
  dzcy: IV,
  dzigrarr: OV,
  Eacute: RV,
  eacute: PV,
  easter: DV,
  Ecaron: BV,
  ecaron: NV,
  Ecirc: FV,
  ecirc: zV,
  ecir: qV,
  ecolon: HV,
  Ecy: jV,
  ecy: VV,
  eDDot: UV,
  Edot: KV,
  edot: WV,
  eDot: GV,
  ee: ZV,
  efDot: XV,
  Efr: YV,
  efr: JV,
  eg: QV,
  Egrave: eU,
  egrave: tU,
  egs: nU,
  egsdot: rU,
  el: oU,
  Element: sU,
  elinters: iU,
  ell: aU,
  els: lU,
  elsdot: cU,
  Emacr: uU,
  emacr: fU,
  empty: dU,
  emptyset: pU,
  EmptySmallSquare: hU,
  emptyv: gU,
  EmptyVerySmallSquare: mU,
  emsp13: vU,
  emsp14: bU,
  emsp: _U,
  ENG: yU,
  eng: wU,
  ensp: kU,
  Eogon: CU,
  eogon: xU,
  Eopf: EU,
  eopf: SU,
  epar: AU,
  eparsl: TU,
  eplus: MU,
  epsi: $U,
  Epsilon: LU,
  epsilon: IU,
  epsiv: OU,
  eqcirc: RU,
  eqcolon: PU,
  eqsim: DU,
  eqslantgtr: BU,
  eqslantless: NU,
  Equal: FU,
  equals: zU,
  EqualTilde: qU,
  equest: HU,
  Equilibrium: jU,
  equiv: VU,
  equivDD: UU,
  eqvparsl: KU,
  erarr: WU,
  erDot: GU,
  escr: ZU,
  Escr: XU,
  esdot: YU,
  Esim: JU,
  esim: QU,
  Eta: eK,
  eta: tK,
  ETH: nK,
  eth: rK,
  Euml: oK,
  euml: sK,
  euro: iK,
  excl: aK,
  exist: lK,
  Exists: cK,
  expectation: uK,
  exponentiale: fK,
  ExponentialE: dK,
  fallingdotseq: pK,
  Fcy: hK,
  fcy: gK,
  female: mK,
  ffilig: vK,
  fflig: bK,
  ffllig: _K,
  Ffr: yK,
  ffr: wK,
  filig: kK,
  FilledSmallSquare: CK,
  FilledVerySmallSquare: xK,
  fjlig: EK,
  flat: SK,
  fllig: AK,
  fltns: TK,
  fnof: MK,
  Fopf: $K,
  fopf: LK,
  forall: IK,
  ForAll: OK,
  fork: RK,
  forkv: PK,
  Fouriertrf: DK,
  fpartint: BK,
  frac12: NK,
  frac13: FK,
  frac14: zK,
  frac15: qK,
  frac16: HK,
  frac18: jK,
  frac23: VK,
  frac25: UK,
  frac34: KK,
  frac35: WK,
  frac38: GK,
  frac45: ZK,
  frac56: XK,
  frac58: YK,
  frac78: JK,
  frasl: QK,
  frown: eW,
  fscr: tW,
  Fscr: nW,
  gacute: rW,
  Gamma: oW,
  gamma: sW,
  Gammad: iW,
  gammad: aW,
  gap: lW,
  Gbreve: cW,
  gbreve: uW,
  Gcedil: fW,
  Gcirc: dW,
  gcirc: pW,
  Gcy: hW,
  gcy: gW,
  Gdot: mW,
  gdot: vW,
  ge: bW,
  gE: _W,
  gEl: yW,
  gel: wW,
  geq: kW,
  geqq: CW,
  geqslant: xW,
  gescc: EW,
  ges: SW,
  gesdot: AW,
  gesdoto: TW,
  gesdotol: MW,
  gesl: $W,
  gesles: LW,
  Gfr: IW,
  gfr: OW,
  gg: RW,
  Gg: PW,
  ggg: DW,
  gimel: BW,
  GJcy: NW,
  gjcy: FW,
  gla: zW,
  gl: qW,
  glE: HW,
  glj: jW,
  gnap: VW,
  gnapprox: UW,
  gne: KW,
  gnE: WW,
  gneq: GW,
  gneqq: ZW,
  gnsim: XW,
  Gopf: YW,
  gopf: JW,
  grave: QW,
  GreaterEqual: eG,
  GreaterEqualLess: tG,
  GreaterFullEqual: nG,
  GreaterGreater: rG,
  GreaterLess: oG,
  GreaterSlantEqual: sG,
  GreaterTilde: iG,
  Gscr: aG,
  gscr: lG,
  gsim: cG,
  gsime: uG,
  gsiml: fG,
  gtcc: dG,
  gtcir: pG,
  gt: hG,
  GT: gG,
  Gt: mG,
  gtdot: vG,
  gtlPar: bG,
  gtquest: _G,
  gtrapprox: yG,
  gtrarr: wG,
  gtrdot: kG,
  gtreqless: CG,
  gtreqqless: xG,
  gtrless: EG,
  gtrsim: SG,
  gvertneqq: AG,
  gvnE: TG,
  Hacek: MG,
  hairsp: $G,
  half: LG,
  hamilt: IG,
  HARDcy: OG,
  hardcy: RG,
  harrcir: PG,
  harr: DG,
  hArr: BG,
  harrw: NG,
  Hat: FG,
  hbar: zG,
  Hcirc: qG,
  hcirc: HG,
  hearts: jG,
  heartsuit: VG,
  hellip: UG,
  hercon: KG,
  hfr: WG,
  Hfr: GG,
  HilbertSpace: ZG,
  hksearow: XG,
  hkswarow: YG,
  hoarr: JG,
  homtht: QG,
  hookleftarrow: eZ,
  hookrightarrow: tZ,
  hopf: nZ,
  Hopf: rZ,
  horbar: oZ,
  HorizontalLine: sZ,
  hscr: iZ,
  Hscr: aZ,
  hslash: lZ,
  Hstrok: cZ,
  hstrok: uZ,
  HumpDownHump: fZ,
  HumpEqual: dZ,
  hybull: pZ,
  hyphen: hZ,
  Iacute: gZ,
  iacute: mZ,
  ic: vZ,
  Icirc: bZ,
  icirc: _Z,
  Icy: yZ,
  icy: wZ,
  Idot: kZ,
  IEcy: CZ,
  iecy: xZ,
  iexcl: EZ,
  iff: SZ,
  ifr: AZ,
  Ifr: TZ,
  Igrave: MZ,
  igrave: $Z,
  ii: LZ,
  iiiint: IZ,
  iiint: OZ,
  iinfin: RZ,
  iiota: PZ,
  IJlig: DZ,
  ijlig: BZ,
  Imacr: NZ,
  imacr: FZ,
  image: zZ,
  ImaginaryI: qZ,
  imagline: HZ,
  imagpart: jZ,
  imath: VZ,
  Im: UZ,
  imof: KZ,
  imped: WZ,
  Implies: GZ,
  incare: ZZ,
  in: "∈",
  infin: XZ,
  infintie: YZ,
  inodot: JZ,
  intcal: QZ,
  int: eX,
  Int: tX,
  integers: nX,
  Integral: rX,
  intercal: oX,
  Intersection: sX,
  intlarhk: iX,
  intprod: aX,
  InvisibleComma: lX,
  InvisibleTimes: cX,
  IOcy: uX,
  iocy: fX,
  Iogon: dX,
  iogon: pX,
  Iopf: hX,
  iopf: gX,
  Iota: mX,
  iota: vX,
  iprod: bX,
  iquest: _X,
  iscr: yX,
  Iscr: wX,
  isin: kX,
  isindot: CX,
  isinE: xX,
  isins: EX,
  isinsv: SX,
  isinv: AX,
  it: TX,
  Itilde: MX,
  itilde: $X,
  Iukcy: LX,
  iukcy: IX,
  Iuml: OX,
  iuml: RX,
  Jcirc: PX,
  jcirc: DX,
  Jcy: BX,
  jcy: NX,
  Jfr: FX,
  jfr: zX,
  jmath: qX,
  Jopf: HX,
  jopf: jX,
  Jscr: VX,
  jscr: UX,
  Jsercy: KX,
  jsercy: WX,
  Jukcy: GX,
  jukcy: ZX,
  Kappa: XX,
  kappa: YX,
  kappav: JX,
  Kcedil: QX,
  kcedil: eY,
  Kcy: tY,
  kcy: nY,
  Kfr: rY,
  kfr: oY,
  kgreen: sY,
  KHcy: iY,
  khcy: aY,
  KJcy: lY,
  kjcy: cY,
  Kopf: uY,
  kopf: fY,
  Kscr: dY,
  kscr: pY,
  lAarr: hY,
  Lacute: gY,
  lacute: mY,
  laemptyv: vY,
  lagran: bY,
  Lambda: _Y,
  lambda: yY,
  lang: wY,
  Lang: kY,
  langd: CY,
  langle: xY,
  lap: EY,
  Laplacetrf: SY,
  laquo: AY,
  larrb: TY,
  larrbfs: MY,
  larr: $Y,
  Larr: LY,
  lArr: IY,
  larrfs: OY,
  larrhk: RY,
  larrlp: PY,
  larrpl: DY,
  larrsim: BY,
  larrtl: NY,
  latail: FY,
  lAtail: zY,
  lat: qY,
  late: HY,
  lates: jY,
  lbarr: VY,
  lBarr: UY,
  lbbrk: KY,
  lbrace: WY,
  lbrack: GY,
  lbrke: ZY,
  lbrksld: XY,
  lbrkslu: YY,
  Lcaron: JY,
  lcaron: QY,
  Lcedil: eJ,
  lcedil: tJ,
  lceil: nJ,
  lcub: rJ,
  Lcy: oJ,
  lcy: sJ,
  ldca: iJ,
  ldquo: aJ,
  ldquor: lJ,
  ldrdhar: cJ,
  ldrushar: uJ,
  ldsh: fJ,
  le: dJ,
  lE: pJ,
  LeftAngleBracket: hJ,
  LeftArrowBar: gJ,
  leftarrow: mJ,
  LeftArrow: vJ,
  Leftarrow: bJ,
  LeftArrowRightArrow: _J,
  leftarrowtail: yJ,
  LeftCeiling: wJ,
  LeftDoubleBracket: kJ,
  LeftDownTeeVector: CJ,
  LeftDownVectorBar: xJ,
  LeftDownVector: EJ,
  LeftFloor: SJ,
  leftharpoondown: AJ,
  leftharpoonup: TJ,
  leftleftarrows: MJ,
  leftrightarrow: $J,
  LeftRightArrow: LJ,
  Leftrightarrow: IJ,
  leftrightarrows: OJ,
  leftrightharpoons: RJ,
  leftrightsquigarrow: PJ,
  LeftRightVector: DJ,
  LeftTeeArrow: BJ,
  LeftTee: NJ,
  LeftTeeVector: FJ,
  leftthreetimes: zJ,
  LeftTriangleBar: qJ,
  LeftTriangle: HJ,
  LeftTriangleEqual: jJ,
  LeftUpDownVector: VJ,
  LeftUpTeeVector: UJ,
  LeftUpVectorBar: KJ,
  LeftUpVector: WJ,
  LeftVectorBar: GJ,
  LeftVector: ZJ,
  lEg: XJ,
  leg: YJ,
  leq: JJ,
  leqq: QJ,
  leqslant: eQ,
  lescc: tQ,
  les: nQ,
  lesdot: rQ,
  lesdoto: oQ,
  lesdotor: sQ,
  lesg: iQ,
  lesges: aQ,
  lessapprox: lQ,
  lessdot: cQ,
  lesseqgtr: uQ,
  lesseqqgtr: fQ,
  LessEqualGreater: dQ,
  LessFullEqual: pQ,
  LessGreater: hQ,
  lessgtr: gQ,
  LessLess: mQ,
  lesssim: vQ,
  LessSlantEqual: bQ,
  LessTilde: _Q,
  lfisht: yQ,
  lfloor: wQ,
  Lfr: kQ,
  lfr: CQ,
  lg: xQ,
  lgE: EQ,
  lHar: SQ,
  lhard: AQ,
  lharu: TQ,
  lharul: MQ,
  lhblk: $Q,
  LJcy: LQ,
  ljcy: IQ,
  llarr: OQ,
  ll: RQ,
  Ll: PQ,
  llcorner: DQ,
  Lleftarrow: BQ,
  llhard: NQ,
  lltri: FQ,
  Lmidot: zQ,
  lmidot: qQ,
  lmoustache: HQ,
  lmoust: jQ,
  lnap: VQ,
  lnapprox: UQ,
  lne: KQ,
  lnE: WQ,
  lneq: GQ,
  lneqq: ZQ,
  lnsim: XQ,
  loang: YQ,
  loarr: JQ,
  lobrk: QQ,
  longleftarrow: eee,
  LongLeftArrow: tee,
  Longleftarrow: nee,
  longleftrightarrow: ree,
  LongLeftRightArrow: oee,
  Longleftrightarrow: see,
  longmapsto: iee,
  longrightarrow: aee,
  LongRightArrow: lee,
  Longrightarrow: cee,
  looparrowleft: uee,
  looparrowright: fee,
  lopar: dee,
  Lopf: pee,
  lopf: hee,
  loplus: gee,
  lotimes: mee,
  lowast: vee,
  lowbar: bee,
  LowerLeftArrow: _ee,
  LowerRightArrow: yee,
  loz: wee,
  lozenge: kee,
  lozf: Cee,
  lpar: xee,
  lparlt: Eee,
  lrarr: See,
  lrcorner: Aee,
  lrhar: Tee,
  lrhard: Mee,
  lrm: $ee,
  lrtri: Lee,
  lsaquo: Iee,
  lscr: Oee,
  Lscr: Ree,
  lsh: Pee,
  Lsh: Dee,
  lsim: Bee,
  lsime: Nee,
  lsimg: Fee,
  lsqb: zee,
  lsquo: qee,
  lsquor: Hee,
  Lstrok: jee,
  lstrok: Vee,
  ltcc: Uee,
  ltcir: Kee,
  lt: Wee,
  LT: Gee,
  Lt: Zee,
  ltdot: Xee,
  lthree: Yee,
  ltimes: Jee,
  ltlarr: Qee,
  ltquest: ete,
  ltri: tte,
  ltrie: nte,
  ltrif: rte,
  ltrPar: ote,
  lurdshar: ste,
  luruhar: ite,
  lvertneqq: ate,
  lvnE: lte,
  macr: cte,
  male: ute,
  malt: fte,
  maltese: dte,
  Map: "⤅",
  map: pte,
  mapsto: hte,
  mapstodown: gte,
  mapstoleft: mte,
  mapstoup: vte,
  marker: bte,
  mcomma: _te,
  Mcy: yte,
  mcy: wte,
  mdash: kte,
  mDDot: Cte,
  measuredangle: xte,
  MediumSpace: Ete,
  Mellintrf: Ste,
  Mfr: Ate,
  mfr: Tte,
  mho: Mte,
  micro: $te,
  midast: Lte,
  midcir: Ite,
  mid: Ote,
  middot: Rte,
  minusb: Pte,
  minus: Dte,
  minusd: Bte,
  minusdu: Nte,
  MinusPlus: Fte,
  mlcp: zte,
  mldr: qte,
  mnplus: Hte,
  models: jte,
  Mopf: Vte,
  mopf: Ute,
  mp: Kte,
  mscr: Wte,
  Mscr: Gte,
  mstpos: Zte,
  Mu: Xte,
  mu: Yte,
  multimap: Jte,
  mumap: Qte,
  nabla: ene,
  Nacute: tne,
  nacute: nne,
  nang: rne,
  nap: one,
  napE: sne,
  napid: ine,
  napos: ane,
  napprox: lne,
  natural: cne,
  naturals: une,
  natur: fne,
  nbsp: dne,
  nbump: pne,
  nbumpe: hne,
  ncap: gne,
  Ncaron: mne,
  ncaron: vne,
  Ncedil: bne,
  ncedil: _ne,
  ncong: yne,
  ncongdot: wne,
  ncup: kne,
  Ncy: Cne,
  ncy: xne,
  ndash: Ene,
  nearhk: Sne,
  nearr: Ane,
  neArr: Tne,
  nearrow: Mne,
  ne: $ne,
  nedot: Lne,
  NegativeMediumSpace: Ine,
  NegativeThickSpace: One,
  NegativeThinSpace: Rne,
  NegativeVeryThinSpace: Pne,
  nequiv: Dne,
  nesear: Bne,
  nesim: Nne,
  NestedGreaterGreater: Fne,
  NestedLessLess: zne,
  NewLine: qne,
  nexist: Hne,
  nexists: jne,
  Nfr: Vne,
  nfr: Une,
  ngE: Kne,
  nge: Wne,
  ngeq: Gne,
  ngeqq: Zne,
  ngeqslant: Xne,
  nges: Yne,
  nGg: Jne,
  ngsim: Qne,
  nGt: ere,
  ngt: tre,
  ngtr: nre,
  nGtv: rre,
  nharr: ore,
  nhArr: sre,
  nhpar: ire,
  ni: are,
  nis: lre,
  nisd: cre,
  niv: ure,
  NJcy: fre,
  njcy: dre,
  nlarr: pre,
  nlArr: hre,
  nldr: gre,
  nlE: mre,
  nle: vre,
  nleftarrow: bre,
  nLeftarrow: _re,
  nleftrightarrow: yre,
  nLeftrightarrow: wre,
  nleq: kre,
  nleqq: Cre,
  nleqslant: xre,
  nles: Ere,
  nless: Sre,
  nLl: Are,
  nlsim: Tre,
  nLt: Mre,
  nlt: $re,
  nltri: Lre,
  nltrie: Ire,
  nLtv: Ore,
  nmid: Rre,
  NoBreak: Pre,
  NonBreakingSpace: Dre,
  nopf: Bre,
  Nopf: Nre,
  Not: Fre,
  not: zre,
  NotCongruent: qre,
  NotCupCap: Hre,
  NotDoubleVerticalBar: jre,
  NotElement: Vre,
  NotEqual: Ure,
  NotEqualTilde: Kre,
  NotExists: Wre,
  NotGreater: Gre,
  NotGreaterEqual: Zre,
  NotGreaterFullEqual: Xre,
  NotGreaterGreater: Yre,
  NotGreaterLess: Jre,
  NotGreaterSlantEqual: Qre,
  NotGreaterTilde: eoe,
  NotHumpDownHump: toe,
  NotHumpEqual: noe,
  notin: roe,
  notindot: ooe,
  notinE: soe,
  notinva: ioe,
  notinvb: aoe,
  notinvc: loe,
  NotLeftTriangleBar: coe,
  NotLeftTriangle: uoe,
  NotLeftTriangleEqual: foe,
  NotLess: doe,
  NotLessEqual: poe,
  NotLessGreater: hoe,
  NotLessLess: goe,
  NotLessSlantEqual: moe,
  NotLessTilde: voe,
  NotNestedGreaterGreater: boe,
  NotNestedLessLess: _oe,
  notni: yoe,
  notniva: woe,
  notnivb: koe,
  notnivc: Coe,
  NotPrecedes: xoe,
  NotPrecedesEqual: Eoe,
  NotPrecedesSlantEqual: Soe,
  NotReverseElement: Aoe,
  NotRightTriangleBar: Toe,
  NotRightTriangle: Moe,
  NotRightTriangleEqual: $oe,
  NotSquareSubset: Loe,
  NotSquareSubsetEqual: Ioe,
  NotSquareSuperset: Ooe,
  NotSquareSupersetEqual: Roe,
  NotSubset: Poe,
  NotSubsetEqual: Doe,
  NotSucceeds: Boe,
  NotSucceedsEqual: Noe,
  NotSucceedsSlantEqual: Foe,
  NotSucceedsTilde: zoe,
  NotSuperset: qoe,
  NotSupersetEqual: Hoe,
  NotTilde: joe,
  NotTildeEqual: Voe,
  NotTildeFullEqual: Uoe,
  NotTildeTilde: Koe,
  NotVerticalBar: Woe,
  nparallel: Goe,
  npar: Zoe,
  nparsl: Xoe,
  npart: Yoe,
  npolint: Joe,
  npr: Qoe,
  nprcue: ese,
  nprec: tse,
  npreceq: nse,
  npre: rse,
  nrarrc: ose,
  nrarr: sse,
  nrArr: ise,
  nrarrw: ase,
  nrightarrow: lse,
  nRightarrow: cse,
  nrtri: use,
  nrtrie: fse,
  nsc: dse,
  nsccue: pse,
  nsce: hse,
  Nscr: gse,
  nscr: mse,
  nshortmid: vse,
  nshortparallel: bse,
  nsim: _se,
  nsime: yse,
  nsimeq: wse,
  nsmid: kse,
  nspar: Cse,
  nsqsube: xse,
  nsqsupe: Ese,
  nsub: Sse,
  nsubE: Ase,
  nsube: Tse,
  nsubset: Mse,
  nsubseteq: $se,
  nsubseteqq: Lse,
  nsucc: Ise,
  nsucceq: Ose,
  nsup: Rse,
  nsupE: Pse,
  nsupe: Dse,
  nsupset: Bse,
  nsupseteq: Nse,
  nsupseteqq: Fse,
  ntgl: zse,
  Ntilde: qse,
  ntilde: Hse,
  ntlg: jse,
  ntriangleleft: Vse,
  ntrianglelefteq: Use,
  ntriangleright: Kse,
  ntrianglerighteq: Wse,
  Nu: Gse,
  nu: Zse,
  num: Xse,
  numero: Yse,
  numsp: Jse,
  nvap: Qse,
  nvdash: eie,
  nvDash: tie,
  nVdash: nie,
  nVDash: rie,
  nvge: oie,
  nvgt: sie,
  nvHarr: iie,
  nvinfin: aie,
  nvlArr: lie,
  nvle: cie,
  nvlt: uie,
  nvltrie: fie,
  nvrArr: die,
  nvrtrie: pie,
  nvsim: hie,
  nwarhk: gie,
  nwarr: mie,
  nwArr: vie,
  nwarrow: bie,
  nwnear: _ie,
  Oacute: yie,
  oacute: wie,
  oast: kie,
  Ocirc: Cie,
  ocirc: xie,
  ocir: Eie,
  Ocy: Sie,
  ocy: Aie,
  odash: Tie,
  Odblac: Mie,
  odblac: $ie,
  odiv: Lie,
  odot: Iie,
  odsold: Oie,
  OElig: Rie,
  oelig: Pie,
  ofcir: Die,
  Ofr: Bie,
  ofr: Nie,
  ogon: Fie,
  Ograve: zie,
  ograve: qie,
  ogt: Hie,
  ohbar: jie,
  ohm: Vie,
  oint: Uie,
  olarr: Kie,
  olcir: Wie,
  olcross: Gie,
  oline: Zie,
  olt: Xie,
  Omacr: Yie,
  omacr: Jie,
  Omega: Qie,
  omega: eae,
  Omicron: tae,
  omicron: nae,
  omid: rae,
  ominus: oae,
  Oopf: sae,
  oopf: iae,
  opar: aae,
  OpenCurlyDoubleQuote: lae,
  OpenCurlyQuote: cae,
  operp: uae,
  oplus: fae,
  orarr: dae,
  Or: pae,
  or: hae,
  ord: gae,
  order: mae,
  orderof: vae,
  ordf: bae,
  ordm: _ae,
  origof: yae,
  oror: wae,
  orslope: kae,
  orv: Cae,
  oS: xae,
  Oscr: Eae,
  oscr: Sae,
  Oslash: Aae,
  oslash: Tae,
  osol: Mae,
  Otilde: $ae,
  otilde: Lae,
  otimesas: Iae,
  Otimes: Oae,
  otimes: Rae,
  Ouml: Pae,
  ouml: Dae,
  ovbar: Bae,
  OverBar: Nae,
  OverBrace: Fae,
  OverBracket: zae,
  OverParenthesis: qae,
  para: Hae,
  parallel: jae,
  par: Vae,
  parsim: Uae,
  parsl: Kae,
  part: Wae,
  PartialD: Gae,
  Pcy: Zae,
  pcy: Xae,
  percnt: Yae,
  period: Jae,
  permil: Qae,
  perp: ele,
  pertenk: tle,
  Pfr: nle,
  pfr: rle,
  Phi: ole,
  phi: sle,
  phiv: ile,
  phmmat: ale,
  phone: lle,
  Pi: cle,
  pi: ule,
  pitchfork: fle,
  piv: dle,
  planck: ple,
  planckh: hle,
  plankv: gle,
  plusacir: mle,
  plusb: vle,
  pluscir: ble,
  plus: _le,
  plusdo: yle,
  plusdu: wle,
  pluse: kle,
  PlusMinus: Cle,
  plusmn: xle,
  plussim: Ele,
  plustwo: Sle,
  pm: Ale,
  Poincareplane: Tle,
  pointint: Mle,
  popf: $le,
  Popf: Lle,
  pound: Ile,
  prap: Ole,
  Pr: Rle,
  pr: Ple,
  prcue: Dle,
  precapprox: Ble,
  prec: Nle,
  preccurlyeq: Fle,
  Precedes: zle,
  PrecedesEqual: qle,
  PrecedesSlantEqual: Hle,
  PrecedesTilde: jle,
  preceq: Vle,
  precnapprox: Ule,
  precneqq: Kle,
  precnsim: Wle,
  pre: Gle,
  prE: Zle,
  precsim: Xle,
  prime: Yle,
  Prime: Jle,
  primes: Qle,
  prnap: ece,
  prnE: tce,
  prnsim: nce,
  prod: rce,
  Product: oce,
  profalar: sce,
  profline: ice,
  profsurf: ace,
  prop: lce,
  Proportional: cce,
  Proportion: uce,
  propto: fce,
  prsim: dce,
  prurel: pce,
  Pscr: hce,
  pscr: gce,
  Psi: mce,
  psi: vce,
  puncsp: bce,
  Qfr: _ce,
  qfr: yce,
  qint: wce,
  qopf: kce,
  Qopf: Cce,
  qprime: xce,
  Qscr: Ece,
  qscr: Sce,
  quaternions: Ace,
  quatint: Tce,
  quest: Mce,
  questeq: $ce,
  quot: Lce,
  QUOT: Ice,
  rAarr: Oce,
  race: Rce,
  Racute: Pce,
  racute: Dce,
  radic: Bce,
  raemptyv: Nce,
  rang: Fce,
  Rang: zce,
  rangd: qce,
  range: Hce,
  rangle: jce,
  raquo: Vce,
  rarrap: Uce,
  rarrb: Kce,
  rarrbfs: Wce,
  rarrc: Gce,
  rarr: Zce,
  Rarr: Xce,
  rArr: Yce,
  rarrfs: Jce,
  rarrhk: Qce,
  rarrlp: eue,
  rarrpl: tue,
  rarrsim: nue,
  Rarrtl: rue,
  rarrtl: oue,
  rarrw: sue,
  ratail: iue,
  rAtail: aue,
  ratio: lue,
  rationals: cue,
  rbarr: uue,
  rBarr: fue,
  RBarr: due,
  rbbrk: pue,
  rbrace: hue,
  rbrack: gue,
  rbrke: mue,
  rbrksld: vue,
  rbrkslu: bue,
  Rcaron: _ue,
  rcaron: yue,
  Rcedil: wue,
  rcedil: kue,
  rceil: Cue,
  rcub: xue,
  Rcy: Eue,
  rcy: Sue,
  rdca: Aue,
  rdldhar: Tue,
  rdquo: Mue,
  rdquor: $ue,
  rdsh: Lue,
  real: Iue,
  realine: Oue,
  realpart: Rue,
  reals: Pue,
  Re: Due,
  rect: Bue,
  reg: Nue,
  REG: Fue,
  ReverseElement: zue,
  ReverseEquilibrium: que,
  ReverseUpEquilibrium: Hue,
  rfisht: jue,
  rfloor: Vue,
  rfr: Uue,
  Rfr: Kue,
  rHar: Wue,
  rhard: Gue,
  rharu: Zue,
  rharul: Xue,
  Rho: Yue,
  rho: Jue,
  rhov: Que,
  RightAngleBracket: efe,
  RightArrowBar: tfe,
  rightarrow: nfe,
  RightArrow: rfe,
  Rightarrow: ofe,
  RightArrowLeftArrow: sfe,
  rightarrowtail: ife,
  RightCeiling: afe,
  RightDoubleBracket: lfe,
  RightDownTeeVector: cfe,
  RightDownVectorBar: ufe,
  RightDownVector: ffe,
  RightFloor: dfe,
  rightharpoondown: pfe,
  rightharpoonup: hfe,
  rightleftarrows: gfe,
  rightleftharpoons: mfe,
  rightrightarrows: vfe,
  rightsquigarrow: bfe,
  RightTeeArrow: _fe,
  RightTee: yfe,
  RightTeeVector: wfe,
  rightthreetimes: kfe,
  RightTriangleBar: Cfe,
  RightTriangle: xfe,
  RightTriangleEqual: Efe,
  RightUpDownVector: Sfe,
  RightUpTeeVector: Afe,
  RightUpVectorBar: Tfe,
  RightUpVector: Mfe,
  RightVectorBar: $fe,
  RightVector: Lfe,
  ring: Ife,
  risingdotseq: Ofe,
  rlarr: Rfe,
  rlhar: Pfe,
  rlm: Dfe,
  rmoustache: Bfe,
  rmoust: Nfe,
  rnmid: Ffe,
  roang: zfe,
  roarr: qfe,
  robrk: Hfe,
  ropar: jfe,
  ropf: Vfe,
  Ropf: Ufe,
  roplus: Kfe,
  rotimes: Wfe,
  RoundImplies: Gfe,
  rpar: Zfe,
  rpargt: Xfe,
  rppolint: Yfe,
  rrarr: Jfe,
  Rrightarrow: Qfe,
  rsaquo: ede,
  rscr: tde,
  Rscr: nde,
  rsh: rde,
  Rsh: ode,
  rsqb: sde,
  rsquo: ide,
  rsquor: ade,
  rthree: lde,
  rtimes: cde,
  rtri: ude,
  rtrie: fde,
  rtrif: dde,
  rtriltri: pde,
  RuleDelayed: hde,
  ruluhar: gde,
  rx: mde,
  Sacute: vde,
  sacute: bde,
  sbquo: _de,
  scap: yde,
  Scaron: wde,
  scaron: kde,
  Sc: Cde,
  sc: xde,
  sccue: Ede,
  sce: Sde,
  scE: Ade,
  Scedil: Tde,
  scedil: Mde,
  Scirc: $de,
  scirc: Lde,
  scnap: Ide,
  scnE: Ode,
  scnsim: Rde,
  scpolint: Pde,
  scsim: Dde,
  Scy: Bde,
  scy: Nde,
  sdotb: Fde,
  sdot: zde,
  sdote: qde,
  searhk: Hde,
  searr: jde,
  seArr: Vde,
  searrow: Ude,
  sect: Kde,
  semi: Wde,
  seswar: Gde,
  setminus: Zde,
  setmn: Xde,
  sext: Yde,
  Sfr: Jde,
  sfr: Qde,
  sfrown: e0e,
  sharp: t0e,
  SHCHcy: n0e,
  shchcy: r0e,
  SHcy: o0e,
  shcy: s0e,
  ShortDownArrow: i0e,
  ShortLeftArrow: a0e,
  shortmid: l0e,
  shortparallel: c0e,
  ShortRightArrow: u0e,
  ShortUpArrow: f0e,
  shy: d0e,
  Sigma: p0e,
  sigma: h0e,
  sigmaf: g0e,
  sigmav: m0e,
  sim: v0e,
  simdot: b0e,
  sime: _0e,
  simeq: y0e,
  simg: w0e,
  simgE: k0e,
  siml: C0e,
  simlE: x0e,
  simne: E0e,
  simplus: S0e,
  simrarr: A0e,
  slarr: T0e,
  SmallCircle: M0e,
  smallsetminus: $0e,
  smashp: L0e,
  smeparsl: I0e,
  smid: O0e,
  smile: R0e,
  smt: P0e,
  smte: D0e,
  smtes: B0e,
  SOFTcy: N0e,
  softcy: F0e,
  solbar: z0e,
  solb: q0e,
  sol: H0e,
  Sopf: j0e,
  sopf: V0e,
  spades: U0e,
  spadesuit: K0e,
  spar: W0e,
  sqcap: G0e,
  sqcaps: Z0e,
  sqcup: X0e,
  sqcups: Y0e,
  Sqrt: J0e,
  sqsub: Q0e,
  sqsube: e2e,
  sqsubset: t2e,
  sqsubseteq: n2e,
  sqsup: r2e,
  sqsupe: o2e,
  sqsupset: s2e,
  sqsupseteq: i2e,
  square: a2e,
  Square: l2e,
  SquareIntersection: c2e,
  SquareSubset: u2e,
  SquareSubsetEqual: f2e,
  SquareSuperset: d2e,
  SquareSupersetEqual: p2e,
  SquareUnion: h2e,
  squarf: g2e,
  squ: m2e,
  squf: v2e,
  srarr: b2e,
  Sscr: _2e,
  sscr: y2e,
  ssetmn: w2e,
  ssmile: k2e,
  sstarf: C2e,
  Star: x2e,
  star: E2e,
  starf: S2e,
  straightepsilon: A2e,
  straightphi: T2e,
  strns: M2e,
  sub: $2e,
  Sub: L2e,
  subdot: I2e,
  subE: O2e,
  sube: R2e,
  subedot: P2e,
  submult: D2e,
  subnE: B2e,
  subne: N2e,
  subplus: F2e,
  subrarr: z2e,
  subset: q2e,
  Subset: H2e,
  subseteq: j2e,
  subseteqq: V2e,
  SubsetEqual: U2e,
  subsetneq: K2e,
  subsetneqq: W2e,
  subsim: G2e,
  subsub: Z2e,
  subsup: X2e,
  succapprox: Y2e,
  succ: J2e,
  succcurlyeq: Q2e,
  Succeeds: epe,
  SucceedsEqual: tpe,
  SucceedsSlantEqual: npe,
  SucceedsTilde: rpe,
  succeq: ope,
  succnapprox: spe,
  succneqq: ipe,
  succnsim: ape,
  succsim: lpe,
  SuchThat: cpe,
  sum: upe,
  Sum: fpe,
  sung: dpe,
  sup1: ppe,
  sup2: hpe,
  sup3: gpe,
  sup: mpe,
  Sup: vpe,
  supdot: bpe,
  supdsub: _pe,
  supE: ype,
  supe: wpe,
  supedot: kpe,
  Superset: Cpe,
  SupersetEqual: xpe,
  suphsol: Epe,
  suphsub: Spe,
  suplarr: Ape,
  supmult: Tpe,
  supnE: Mpe,
  supne: $pe,
  supplus: Lpe,
  supset: Ipe,
  Supset: Ope,
  supseteq: Rpe,
  supseteqq: Ppe,
  supsetneq: Dpe,
  supsetneqq: Bpe,
  supsim: Npe,
  supsub: Fpe,
  supsup: zpe,
  swarhk: qpe,
  swarr: Hpe,
  swArr: jpe,
  swarrow: Vpe,
  swnwar: Upe,
  szlig: Kpe,
  Tab: Wpe,
  target: Gpe,
  Tau: Zpe,
  tau: Xpe,
  tbrk: Ype,
  Tcaron: Jpe,
  tcaron: Qpe,
  Tcedil: ehe,
  tcedil: the,
  Tcy: nhe,
  tcy: rhe,
  tdot: ohe,
  telrec: she,
  Tfr: ihe,
  tfr: ahe,
  there4: lhe,
  therefore: che,
  Therefore: uhe,
  Theta: fhe,
  theta: dhe,
  thetasym: phe,
  thetav: hhe,
  thickapprox: ghe,
  thicksim: mhe,
  ThickSpace: vhe,
  ThinSpace: bhe,
  thinsp: _he,
  thkap: yhe,
  thksim: whe,
  THORN: khe,
  thorn: Che,
  tilde: xhe,
  Tilde: Ehe,
  TildeEqual: She,
  TildeFullEqual: Ahe,
  TildeTilde: The,
  timesbar: Mhe,
  timesb: $he,
  times: Lhe,
  timesd: Ihe,
  tint: Ohe,
  toea: Rhe,
  topbot: Phe,
  topcir: Dhe,
  top: Bhe,
  Topf: Nhe,
  topf: Fhe,
  topfork: zhe,
  tosa: qhe,
  tprime: Hhe,
  trade: jhe,
  TRADE: Vhe,
  triangle: Uhe,
  triangledown: Khe,
  triangleleft: Whe,
  trianglelefteq: Ghe,
  triangleq: Zhe,
  triangleright: Xhe,
  trianglerighteq: Yhe,
  tridot: Jhe,
  trie: Qhe,
  triminus: e1e,
  TripleDot: t1e,
  triplus: n1e,
  trisb: r1e,
  tritime: o1e,
  trpezium: s1e,
  Tscr: i1e,
  tscr: a1e,
  TScy: l1e,
  tscy: c1e,
  TSHcy: u1e,
  tshcy: f1e,
  Tstrok: d1e,
  tstrok: p1e,
  twixt: h1e,
  twoheadleftarrow: g1e,
  twoheadrightarrow: m1e,
  Uacute: v1e,
  uacute: b1e,
  uarr: _1e,
  Uarr: y1e,
  uArr: w1e,
  Uarrocir: k1e,
  Ubrcy: C1e,
  ubrcy: x1e,
  Ubreve: E1e,
  ubreve: S1e,
  Ucirc: A1e,
  ucirc: T1e,
  Ucy: M1e,
  ucy: $1e,
  udarr: L1e,
  Udblac: I1e,
  udblac: O1e,
  udhar: R1e,
  ufisht: P1e,
  Ufr: D1e,
  ufr: B1e,
  Ugrave: N1e,
  ugrave: F1e,
  uHar: z1e,
  uharl: q1e,
  uharr: H1e,
  uhblk: j1e,
  ulcorn: V1e,
  ulcorner: U1e,
  ulcrop: K1e,
  ultri: W1e,
  Umacr: G1e,
  umacr: Z1e,
  uml: X1e,
  UnderBar: Y1e,
  UnderBrace: J1e,
  UnderBracket: Q1e,
  UnderParenthesis: ege,
  Union: tge,
  UnionPlus: nge,
  Uogon: rge,
  uogon: oge,
  Uopf: sge,
  uopf: ige,
  UpArrowBar: age,
  uparrow: lge,
  UpArrow: cge,
  Uparrow: uge,
  UpArrowDownArrow: fge,
  updownarrow: dge,
  UpDownArrow: pge,
  Updownarrow: hge,
  UpEquilibrium: gge,
  upharpoonleft: mge,
  upharpoonright: vge,
  uplus: bge,
  UpperLeftArrow: _ge,
  UpperRightArrow: yge,
  upsi: wge,
  Upsi: kge,
  upsih: Cge,
  Upsilon: xge,
  upsilon: Ege,
  UpTeeArrow: Sge,
  UpTee: Age,
  upuparrows: Tge,
  urcorn: Mge,
  urcorner: $ge,
  urcrop: Lge,
  Uring: Ige,
  uring: Oge,
  urtri: Rge,
  Uscr: Pge,
  uscr: Dge,
  utdot: Bge,
  Utilde: Nge,
  utilde: Fge,
  utri: zge,
  utrif: qge,
  uuarr: Hge,
  Uuml: jge,
  uuml: Vge,
  uwangle: Uge,
  vangrt: Kge,
  varepsilon: Wge,
  varkappa: Gge,
  varnothing: Zge,
  varphi: Xge,
  varpi: Yge,
  varpropto: Jge,
  varr: Qge,
  vArr: eme,
  varrho: tme,
  varsigma: nme,
  varsubsetneq: rme,
  varsubsetneqq: ome,
  varsupsetneq: sme,
  varsupsetneqq: ime,
  vartheta: ame,
  vartriangleleft: lme,
  vartriangleright: cme,
  vBar: ume,
  Vbar: fme,
  vBarv: dme,
  Vcy: pme,
  vcy: hme,
  vdash: gme,
  vDash: mme,
  Vdash: vme,
  VDash: bme,
  Vdashl: _me,
  veebar: yme,
  vee: wme,
  Vee: kme,
  veeeq: Cme,
  vellip: xme,
  verbar: Eme,
  Verbar: Sme,
  vert: Ame,
  Vert: Tme,
  VerticalBar: Mme,
  VerticalLine: $me,
  VerticalSeparator: Lme,
  VerticalTilde: Ime,
  VeryThinSpace: Ome,
  Vfr: Rme,
  vfr: Pme,
  vltri: Dme,
  vnsub: Bme,
  vnsup: Nme,
  Vopf: Fme,
  vopf: zme,
  vprop: qme,
  vrtri: Hme,
  Vscr: jme,
  vscr: Vme,
  vsubnE: Ume,
  vsubne: Kme,
  vsupnE: Wme,
  vsupne: Gme,
  Vvdash: Zme,
  vzigzag: Xme,
  Wcirc: Yme,
  wcirc: Jme,
  wedbar: Qme,
  wedge: eve,
  Wedge: tve,
  wedgeq: nve,
  weierp: rve,
  Wfr: ove,
  wfr: sve,
  Wopf: ive,
  wopf: ave,
  wp: lve,
  wr: cve,
  wreath: uve,
  Wscr: fve,
  wscr: dve,
  xcap: pve,
  xcirc: hve,
  xcup: gve,
  xdtri: mve,
  Xfr: vve,
  xfr: bve,
  xharr: _ve,
  xhArr: yve,
  Xi: wve,
  xi: kve,
  xlarr: Cve,
  xlArr: xve,
  xmap: Eve,
  xnis: Sve,
  xodot: Ave,
  Xopf: Tve,
  xopf: Mve,
  xoplus: $ve,
  xotime: Lve,
  xrarr: Ive,
  xrArr: Ove,
  Xscr: Rve,
  xscr: Pve,
  xsqcup: Dve,
  xuplus: Bve,
  xutri: Nve,
  xvee: Fve,
  xwedge: zve,
  Yacute: qve,
  yacute: Hve,
  YAcy: jve,
  yacy: Vve,
  Ycirc: Uve,
  ycirc: Kve,
  Ycy: Wve,
  ycy: Gve,
  yen: Zve,
  Yfr: Xve,
  yfr: Yve,
  YIcy: Jve,
  yicy: Qve,
  Yopf: ebe,
  yopf: tbe,
  Yscr: nbe,
  yscr: rbe,
  YUcy: obe,
  yucy: sbe,
  yuml: ibe,
  Yuml: abe,
  Zacute: lbe,
  zacute: cbe,
  Zcaron: ube,
  zcaron: fbe,
  Zcy: dbe,
  zcy: pbe,
  Zdot: hbe,
  zdot: gbe,
  zeetrf: mbe,
  ZeroWidthSpace: vbe,
  Zeta: bbe,
  zeta: _be,
  zfr: ybe,
  Zfr: wbe,
  ZHcy: kbe,
  zhcy: Cbe,
  zigrarr: xbe,
  zopf: Ebe,
  Zopf: Sbe,
  Zscr: Abe,
  zscr: Tbe,
  zwj: Mbe,
  zwnj: $be
};
var ja, m2;
function K_() {
  return m2 || (m2 = 1, ja = Lbe), ja;
}
var Va, v2;
function zf() {
  return v2 || (v2 = 1, Va = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), Va;
}
var ro = {}, Ua, b2;
function Ibe() {
  if (b2) return Ua;
  b2 = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), /^[0-9a-z]$/i.test(o) ? i.push(o) : i.push("%" + ("0" + s.toString(16).toUpperCase()).slice(-2));
    for (s = 0; s < r.length; s++)
      i[r.charCodeAt(s)] = r[s];
    return i;
  }
  function n(r, s, o) {
    var i, a, l, u, f, c = "";
    for (typeof s != "string" && (o = s, s = n.defaultChars), typeof o > "u" && (o = !0), f = t(s), i = 0, a = r.length; i < a; i++) {
      if (l = r.charCodeAt(i), o && l === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(r.slice(i + 1, i + 3))) {
        c += r.slice(i, i + 3), i += 2;
        continue;
      }
      if (l < 128) {
        c += f[l];
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        if (l >= 55296 && l <= 56319 && i + 1 < a && (u = r.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          c += encodeURIComponent(r[i] + r[i + 1]), i++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(r[i]);
    }
    return c;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", Ua = n, Ua;
}
var Ka, _2;
function Obe() {
  if (_2) return Ka;
  _2 = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), i.push(o);
    for (s = 0; s < r.length; s++)
      o = r.charCodeAt(s), i[o] = "%" + ("0" + o.toString(16).toUpperCase()).slice(-2);
    return i;
  }
  function n(r, s) {
    var o;
    return typeof s != "string" && (s = n.defaultChars), o = t(s), r.replace(/(%[a-f0-9]{2})+/gi, function(i) {
      var a, l, u, f, c, p, d, v = "";
      for (a = 0, l = i.length; a < l; a += 3) {
        if (u = parseInt(i.slice(a + 1, a + 3), 16), u < 128) {
          v += o[u];
          continue;
        }
        if ((u & 224) === 192 && a + 3 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), (f & 192) === 128)) {
          d = u << 6 & 1984 | f & 63, d < 128 ? v += "��" : v += String.fromCharCode(d), a += 3;
          continue;
        }
        if ((u & 240) === 224 && a + 6 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), (f & 192) === 128 && (c & 192) === 128)) {
          d = u << 12 & 61440 | f << 6 & 4032 | c & 63, d < 2048 || d >= 55296 && d <= 57343 ? v += "���" : v += String.fromCharCode(d), a += 6;
          continue;
        }
        if ((u & 248) === 240 && a + 9 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), p = parseInt(i.slice(a + 10, a + 12), 16), (f & 192) === 128 && (c & 192) === 128 && (p & 192) === 128)) {
          d = u << 18 & 1835008 | f << 12 & 258048 | c << 6 & 4032 | p & 63, d < 65536 || d > 1114111 ? v += "����" : (d -= 65536, v += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), a += 9;
          continue;
        }
        v += "�";
      }
      return v;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", Ka = n, Ka;
}
var Wa, y2;
function Rbe() {
  return y2 || (y2 = 1, Wa = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), Wa;
}
var Ga, w2;
function Pbe() {
  if (w2) return Ga;
  w2 = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), i = ["'"].concat(o), a = ["%", "/", "?", ";", "#"].concat(i), l = ["/", "?", "#"], u = 255, f = /^[+a-z0-9A-Z_-]{0,63}$/, c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, p = {
    javascript: !0,
    "javascript:": !0
  }, d = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };
  function v(g, C) {
    if (g && g instanceof e)
      return g;
    var h = new e();
    return h.parse(g, C), h;
  }
  return e.prototype.parse = function(g, C) {
    var h, k, w, _, E, x = g;
    if (x = x.trim(), !C && g.split("#").length === 1) {
      var M = r.exec(x);
      if (M)
        return this.pathname = M[1], M[2] && (this.search = M[2]), this;
    }
    var $ = t.exec(x);
    if ($ && ($ = $[0], w = $.toLowerCase(), this.protocol = $, x = x.substr($.length)), (C || $ || x.match(/^\/\/[^@\/]+@[^@\/]+/)) && (E = x.substr(0, 2) === "//", E && !($ && p[$]) && (x = x.substr(2), this.slashes = !0)), !p[$] && (E || $ && !d[$])) {
      var O = -1;
      for (h = 0; h < l.length; h++)
        _ = x.indexOf(l[h]), _ !== -1 && (O === -1 || _ < O) && (O = _);
      var D, N;
      for (O === -1 ? N = x.lastIndexOf("@") : N = x.lastIndexOf("@", O), N !== -1 && (D = x.slice(0, N), x = x.slice(N + 1), this.auth = D), O = -1, h = 0; h < a.length; h++)
        _ = x.indexOf(a[h]), _ !== -1 && (O === -1 || _ < O) && (O = _);
      O === -1 && (O = x.length), x[O - 1] === ":" && O--;
      var B = x.slice(0, O);
      x = x.slice(O), this.parseHost(B), this.hostname = this.hostname || "";
      var oe = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!oe) {
        var z = this.hostname.split(/\./);
        for (h = 0, k = z.length; h < k; h++) {
          var ie = z[h];
          if (ie && !ie.match(f)) {
            for (var j = "", V = 0, H = ie.length; V < H; V++)
              ie.charCodeAt(V) > 127 ? j += "x" : j += ie[V];
            if (!j.match(f)) {
              var J = z.slice(0, h), I = z.slice(h + 1), Z = ie.match(c);
              Z && (J.push(Z[1]), I.unshift(Z[2])), I.length && (x = I.join(".") + x), this.hostname = J.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), oe && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var K = x.indexOf("#");
    K !== -1 && (this.hash = x.substr(K), x = x.slice(0, K));
    var me = x.indexOf("?");
    return me !== -1 && (this.search = x.substr(me), x = x.slice(0, me)), x && (this.pathname = x), d[w] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(g) {
    var C = n.exec(g);
    C && (C = C[0], C !== ":" && (this.port = C.substr(1)), g = g.substr(0, g.length - C.length)), g && (this.hostname = g);
  }, Ga = v, Ga;
}
var k2;
function W_() {
  return k2 || (k2 = 1, ro.encode = Ibe(), ro.decode = Obe(), ro.format = Rbe(), ro.parse = Pbe()), ro;
}
var Nr = {}, Za, C2;
function G_() {
  return C2 || (C2 = 1, Za = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Za;
}
var Xa, x2;
function Z_() {
  return x2 || (x2 = 1, Xa = /[\0-\x1F\x7F-\x9F]/), Xa;
}
var Ya, E2;
function Dbe() {
  return E2 || (E2 = 1, Ya = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Ya;
}
var Ja, S2;
function X_() {
  return S2 || (S2 = 1, Ja = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Ja;
}
var A2;
function Bbe() {
  return A2 || (A2 = 1, Nr.Any = G_(), Nr.Cc = Z_(), Nr.Cf = Dbe(), Nr.P = zf(), Nr.Z = X_()), Nr;
}
var T2;
function nt() {
  return T2 || (T2 = 1, (function(e) {
    function t(z) {
      return Object.prototype.toString.call(z);
    }
    function n(z) {
      return t(z) === "[object String]";
    }
    var r = Object.prototype.hasOwnProperty;
    function s(z, ie) {
      return r.call(z, ie);
    }
    function o(z) {
      var ie = Array.prototype.slice.call(arguments, 1);
      return ie.forEach(function(j) {
        if (j) {
          if (typeof j != "object")
            throw new TypeError(j + "must be object");
          Object.keys(j).forEach(function(V) {
            z[V] = j[V];
          });
        }
      }), z;
    }
    function i(z, ie, j) {
      return [].concat(z.slice(0, ie), j, z.slice(ie + 1));
    }
    function a(z) {
      return !(z >= 55296 && z <= 57343 || z >= 64976 && z <= 65007 || (z & 65535) === 65535 || (z & 65535) === 65534 || z >= 0 && z <= 8 || z === 11 || z >= 14 && z <= 31 || z >= 127 && z <= 159 || z > 1114111);
    }
    function l(z) {
      if (z > 65535) {
        z -= 65536;
        var ie = 55296 + (z >> 10), j = 56320 + (z & 1023);
        return String.fromCharCode(ie, j);
      }
      return String.fromCharCode(z);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, f = /&([a-z#][a-z0-9]{1,31});/gi, c = new RegExp(u.source + "|" + f.source, "gi"), p = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, d = K_();
    function v(z, ie) {
      var j;
      return s(d, ie) ? d[ie] : ie.charCodeAt(0) === 35 && p.test(ie) && (j = ie[1].toLowerCase() === "x" ? parseInt(ie.slice(2), 16) : parseInt(ie.slice(1), 10), a(j)) ? l(j) : z;
    }
    function g(z) {
      return z.indexOf("\\") < 0 ? z : z.replace(u, "$1");
    }
    function C(z) {
      return z.indexOf("\\") < 0 && z.indexOf("&") < 0 ? z : z.replace(c, function(ie, j, V) {
        return j || v(ie, V);
      });
    }
    var h = /[&<>"]/, k = /[&<>"]/g, w = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function _(z) {
      return w[z];
    }
    function E(z) {
      return h.test(z) ? z.replace(k, _) : z;
    }
    var x = /[.?*+^$[\]\\(){}|-]/g;
    function M(z) {
      return z.replace(x, "\\$&");
    }
    function $(z) {
      switch (z) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function O(z) {
      if (z >= 8192 && z <= 8202)
        return !0;
      switch (z) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return !0;
      }
      return !1;
    }
    var D = zf();
    function N(z) {
      return D.test(z);
    }
    function B(z) {
      switch (z) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return !0;
        default:
          return !1;
      }
    }
    function oe(z) {
      return z = z.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (z = z.replace(/ẞ/g, "ß")), z.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = W_(), e.lib.ucmicro = Bbe(), e.assign = o, e.isString = n, e.has = s, e.unescapeMd = g, e.unescapeAll = C, e.isValidEntityCode = a, e.fromCodePoint = l, e.escapeHtml = E, e.arrayReplaceAt = i, e.isSpace = $, e.isWhiteSpace = O, e.isMdAsciiPunct = B, e.isPunctChar = N, e.escapeRE = M, e.normalizeReference = oe;
  })(Ha)), Ha;
}
var No = {}, Qa, M2;
function Nbe() {
  return M2 || (M2 = 1, Qa = function(t, n, r) {
    var s, o, i, a, l = -1, u = t.posMax, f = t.pos;
    for (t.pos = n + 1, s = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (s--, s === 0)) {
        o = !0;
        break;
      }
      if (a = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (a === t.pos - 1)
          s++;
        else if (r)
          return t.pos = f, -1;
      }
    }
    return o && (l = t.pos), t.pos = f, l;
  }), Qa;
}
var el, $2;
function Fbe() {
  if ($2) return el;
  $2 = 1;
  var e = nt().unescapeAll;
  return el = function(n, r, s) {
    var o, i, a = r, l = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(a) === 60) {
      for (a++; a < s; ) {
        if (o = n.charCodeAt(a), o === 10 || o === 60)
          return l;
        if (o === 62)
          return l.pos = a + 1, l.str = e(n.slice(r + 1, a)), l.ok = !0, l;
        if (o === 92 && a + 1 < s) {
          a += 2;
          continue;
        }
        a++;
      }
      return l;
    }
    for (i = 0; a < s && (o = n.charCodeAt(a), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && a + 1 < s) {
        if (n.charCodeAt(a + 1) === 32)
          break;
        a += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return l;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      a++;
    }
    return r === a || i !== 0 || (l.str = e(n.slice(r, a)), l.pos = a, l.ok = !0), l;
  }, el;
}
var tl, L2;
function zbe() {
  if (L2) return tl;
  L2 = 1;
  var e = nt().unescapeAll;
  return tl = function(n, r, s) {
    var o, i, a = 0, l = r, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (l >= s || (i = n.charCodeAt(l), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (l++, i === 40 && (i = 41); l < s; ) {
      if (o = n.charCodeAt(l), o === i)
        return u.pos = l + 1, u.lines = a, u.str = e(n.slice(r + 1, l)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? a++ : o === 92 && l + 1 < s && (l++, n.charCodeAt(l) === 10 && a++), l++;
    }
    return u;
  }, tl;
}
var I2;
function qbe() {
  return I2 || (I2 = 1, No.parseLinkLabel = Nbe(), No.parseLinkDestination = Fbe(), No.parseLinkTitle = zbe()), No;
}
var nl, O2;
function Hbe() {
  if (O2) return nl;
  O2 = 1;
  var e = nt().assign, t = nt().unescapeAll, n = nt().escapeHtml, r = {};
  r.code_inline = function(o, i, a, l, u) {
    var f = o[i];
    return "<code" + u.renderAttrs(f) + ">" + n(f.content) + "</code>";
  }, r.code_block = function(o, i, a, l, u) {
    var f = o[i];
    return "<pre" + u.renderAttrs(f) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, r.fence = function(o, i, a, l, u) {
    var f = o[i], c = f.info ? t(f.info).trim() : "", p = "", d = "", v, g, C, h, k;
    return c && (C = c.split(/(\s+)/g), p = C[0], d = C.slice(2).join("")), a.highlight ? v = a.highlight(f.content, p, d) || n(f.content) : v = n(f.content), v.indexOf("<pre") === 0 ? v + `
` : c ? (g = f.attrIndex("class"), h = f.attrs ? f.attrs.slice() : [], g < 0 ? h.push(["class", a.langPrefix + p]) : (h[g] = h[g].slice(), h[g][1] += " " + a.langPrefix + p), k = {
      attrs: h
    }, "<pre><code" + u.renderAttrs(k) + ">" + v + `</code></pre>
`) : "<pre><code" + u.renderAttrs(f) + ">" + v + `</code></pre>
`;
  }, r.image = function(o, i, a, l, u) {
    var f = o[i];
    return f.attrs[f.attrIndex("alt")][1] = u.renderInlineAsText(f.children, a, l), u.renderToken(o, i, a);
  }, r.hardbreak = function(o, i, a) {
    return a.xhtmlOut ? `<br />
` : `<br>
`;
  }, r.softbreak = function(o, i, a) {
    return a.breaks ? a.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  }, r.text = function(o, i) {
    return n(o[i].content);
  }, r.html_block = function(o, i) {
    return o[i].content;
  }, r.html_inline = function(o, i) {
    return o[i].content;
  };
  function s() {
    this.rules = e({}, r);
  }
  return s.prototype.renderAttrs = function(i) {
    var a, l, u;
    if (!i.attrs)
      return "";
    for (u = "", a = 0, l = i.attrs.length; a < l; a++)
      u += " " + n(i.attrs[a][0]) + '="' + n(i.attrs[a][1]) + '"';
    return u;
  }, s.prototype.renderToken = function(i, a, l) {
    var u, f = "", c = !1, p = i[a];
    return p.hidden ? "" : (p.block && p.nesting !== -1 && a && i[a - 1].hidden && (f += `
`), f += (p.nesting === -1 ? "</" : "<") + p.tag, f += this.renderAttrs(p), p.nesting === 0 && l.xhtmlOut && (f += " /"), p.block && (c = !0, p.nesting === 1 && a + 1 < i.length && (u = i[a + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === p.tag) && (c = !1))), f += c ? `>
` : ">", f);
  }, s.prototype.renderInline = function(o, i, a) {
    for (var l, u = "", f = this.rules, c = 0, p = o.length; c < p; c++)
      l = o[c].type, typeof f[l] < "u" ? u += f[l](o, c, i, a, this) : u += this.renderToken(o, c, i);
    return u;
  }, s.prototype.renderInlineAsText = function(o, i, a) {
    for (var l = "", u = 0, f = o.length; u < f; u++)
      o[u].type === "text" ? l += o[u].content : o[u].type === "image" ? l += this.renderInlineAsText(o[u].children, i, a) : o[u].type === "softbreak" && (l += `
`);
    return l;
  }, s.prototype.render = function(o, i, a) {
    var l, u, f, c = "", p = this.rules;
    for (l = 0, u = o.length; l < u; l++)
      f = o[l].type, f === "inline" ? c += this.renderInline(o[l].children, i, a) : typeof p[f] < "u" ? c += p[f](o, l, i, a, this) : c += this.renderToken(o, l, i, a);
    return c;
  }, nl = s, nl;
}
var rl, R2;
function qf() {
  if (R2) return rl;
  R2 = 1;
  function e() {
    this.__rules__ = [], this.__cache__ = null;
  }
  return e.prototype.__find__ = function(t) {
    for (var n = 0; n < this.__rules__.length; n++)
      if (this.__rules__[n].name === t)
        return n;
    return -1;
  }, e.prototype.__compile__ = function() {
    var t = this, n = [""];
    t.__rules__.forEach(function(r) {
      r.enabled && r.alt.forEach(function(s) {
        n.indexOf(s) < 0 && n.push(s);
      });
    }), t.__cache__ = {}, n.forEach(function(r) {
      t.__cache__[r] = [], t.__rules__.forEach(function(s) {
        s.enabled && (r && s.alt.indexOf(r) < 0 || t.__cache__[r].push(s.fn));
      });
    });
  }, e.prototype.at = function(t, n, r) {
    var s = this.__find__(t), o = r || {};
    if (s === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__[s].fn = n, this.__rules__[s].alt = o.alt || [], this.__cache__ = null;
  }, e.prototype.before = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.after = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o + 1, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.push = function(t, n, r) {
    var s = r || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: n,
      alt: s.alt || []
    }), this.__cache__ = null;
  }, e.prototype.enable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !0, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.enableOnly = function(t, n) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
      r.enabled = !1;
    }), this.enable(t, n);
  }, e.prototype.disable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !1, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  }, rl = e, rl;
}
var ol, P2;
function jbe() {
  if (P2) return ol;
  P2 = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return ol = function(r) {
    var s;
    s = r.src.replace(e, `
`), s = s.replace(t, "�"), r.src = s;
  }, ol;
}
var sl, D2;
function Vbe() {
  return D2 || (D2 = 1, sl = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), sl;
}
var il, B2;
function Ube() {
  return B2 || (B2 = 1, il = function(t) {
    var n = t.tokens, r, s, o;
    for (s = 0, o = n.length; s < o; s++)
      r = n[s], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
  }), il;
}
var al, N2;
function Kbe() {
  if (N2) return al;
  N2 = 1;
  var e = nt().arrayReplaceAt;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  return al = function(s) {
    var o, i, a, l, u, f, c, p, d, v, g, C, h, k, w, _, E = s.tokens, x;
    if (s.md.options.linkify) {
      for (i = 0, a = E.length; i < a; i++)
        if (!(E[i].type !== "inline" || !s.md.linkify.pretest(E[i].content)))
          for (l = E[i].children, h = 0, o = l.length - 1; o >= 0; o--) {
            if (f = l[o], f.type === "link_close") {
              for (o--; l[o].level !== f.level && l[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (f.type === "html_inline" && (t(f.content) && h > 0 && h--, n(f.content) && h++), !(h > 0) && f.type === "text" && s.md.linkify.test(f.content)) {
              for (d = f.content, x = s.md.linkify.match(d), c = [], C = f.level, g = 0, x.length > 0 && x[0].index === 0 && o > 0 && l[o - 1].type === "text_special" && (x = x.slice(1)), p = 0; p < x.length; p++)
                k = x[p].url, w = s.md.normalizeLink(k), s.md.validateLink(w) && (_ = x[p].text, x[p].schema ? x[p].schema === "mailto:" && !/^mailto:/i.test(_) ? _ = s.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : _ = s.md.normalizeLinkText(_) : _ = s.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, ""), v = x[p].index, v > g && (u = new s.Token("text", "", 0), u.content = d.slice(g, v), u.level = C, c.push(u)), u = new s.Token("link_open", "a", 1), u.attrs = [["href", w]], u.level = C++, u.markup = "linkify", u.info = "auto", c.push(u), u = new s.Token("text", "", 0), u.content = _, u.level = C, c.push(u), u = new s.Token("link_close", "a", -1), u.level = --C, u.markup = "linkify", u.info = "auto", c.push(u), g = x[p].lastIndex);
              g < d.length && (u = new s.Token("text", "", 0), u.content = d.slice(g), u.level = C, c.push(u)), E[i].children = l = e(l, o, c);
            }
          }
    }
  }, al;
}
var ll, F2;
function Wbe() {
  if (F2) return ll;
  F2 = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, r = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function s(a, l) {
    return r[l.toLowerCase()];
  }
  function o(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && (u.content = u.content.replace(n, s)), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  function i(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  return ll = function(l) {
    var u;
    if (l.md.options.typographer)
      for (u = l.tokens.length - 1; u >= 0; u--)
        l.tokens[u].type === "inline" && (t.test(l.tokens[u].content) && o(l.tokens[u].children), e.test(l.tokens[u].content) && i(l.tokens[u].children));
  }, ll;
}
var cl, z2;
function Gbe() {
  if (z2) return cl;
  z2 = 1;
  var e = nt().isWhiteSpace, t = nt().isPunctChar, n = nt().isMdAsciiPunct, r = /['"]/, s = /['"]/g, o = "’";
  function i(l, u, f) {
    return l.slice(0, u) + f + l.slice(u + 1);
  }
  function a(l, u) {
    var f, c, p, d, v, g, C, h, k, w, _, E, x, M, $, O, D, N, B, oe, z;
    for (B = [], f = 0; f < l.length; f++) {
      for (c = l[f], C = l[f].level, D = B.length - 1; D >= 0 && !(B[D].level <= C); D--)
        ;
      if (B.length = D + 1, c.type === "text") {
        p = c.content, v = 0, g = p.length;
        e:
          for (; v < g && (s.lastIndex = v, d = s.exec(p), !!d); ) {
            if ($ = O = !0, v = d.index + 1, N = d[0] === "'", k = 32, d.index - 1 >= 0)
              k = p.charCodeAt(d.index - 1);
            else
              for (D = f - 1; D >= 0 && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D--)
                if (l[D].content) {
                  k = l[D].content.charCodeAt(l[D].content.length - 1);
                  break;
                }
            if (w = 32, v < g)
              w = p.charCodeAt(v);
            else
              for (D = f + 1; D < l.length && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D++)
                if (l[D].content) {
                  w = l[D].content.charCodeAt(0);
                  break;
                }
            if (_ = n(k) || t(String.fromCharCode(k)), E = n(w) || t(String.fromCharCode(w)), x = e(k), M = e(w), M ? $ = !1 : E && (x || _ || ($ = !1)), x ? O = !1 : _ && (M || E || (O = !1)), w === 34 && d[0] === '"' && k >= 48 && k <= 57 && (O = $ = !1), $ && O && ($ = _, O = E), !$ && !O) {
              N && (c.content = i(c.content, d.index, o));
              continue;
            }
            if (O) {
              for (D = B.length - 1; D >= 0 && (h = B[D], !(B[D].level < C)); D--)
                if (h.single === N && B[D].level === C) {
                  h = B[D], N ? (oe = u.md.options.quotes[2], z = u.md.options.quotes[3]) : (oe = u.md.options.quotes[0], z = u.md.options.quotes[1]), c.content = i(c.content, d.index, z), l[h.token].content = i(
                    l[h.token].content,
                    h.pos,
                    oe
                  ), v += z.length - 1, h.token === f && (v += oe.length - 1), p = c.content, g = p.length, B.length = D;
                  continue e;
                }
            }
            $ ? B.push({
              token: f,
              pos: d.index,
              single: N,
              level: C
            }) : O && N && (c.content = i(c.content, d.index, o));
          }
      }
    }
  }
  return cl = function(u) {
    var f;
    if (u.md.options.typographer)
      for (f = u.tokens.length - 1; f >= 0; f--)
        u.tokens[f].type !== "inline" || !r.test(u.tokens[f].content) || a(u.tokens[f].children, u);
  }, cl;
}
var ul, q2;
function Zbe() {
  return q2 || (q2 = 1, ul = function(t) {
    var n, r, s, o, i, a, l = t.tokens;
    for (n = 0, r = l.length; n < r; n++)
      if (l[n].type === "inline") {
        for (s = l[n].children, i = s.length, o = 0; o < i; o++)
          s[o].type === "text_special" && (s[o].type = "text");
        for (o = a = 0; o < i; o++)
          s[o].type === "text" && o + 1 < i && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== a && (s[a] = s[o]), a++);
        o !== a && (s.length = a);
      }
  }), ul;
}
var fl, H2;
function Hf() {
  if (H2) return fl;
  H2 = 1;
  function e(t, n, r) {
    this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  return e.prototype.attrIndex = function(n) {
    var r, s, o;
    if (!this.attrs)
      return -1;
    for (r = this.attrs, s = 0, o = r.length; s < o; s++)
      if (r[s][0] === n)
        return s;
    return -1;
  }, e.prototype.attrPush = function(n) {
    this.attrs ? this.attrs.push(n) : this.attrs = [n];
  }, e.prototype.attrSet = function(n, r) {
    var s = this.attrIndex(n), o = [n, r];
    s < 0 ? this.attrPush(o) : this.attrs[s] = o;
  }, e.prototype.attrGet = function(n) {
    var r = this.attrIndex(n), s = null;
    return r >= 0 && (s = this.attrs[r][1]), s;
  }, e.prototype.attrJoin = function(n, r) {
    var s = this.attrIndex(n);
    s < 0 ? this.attrPush([n, r]) : this.attrs[s][1] = this.attrs[s][1] + " " + r;
  }, fl = e, fl;
}
var dl, j2;
function Xbe() {
  if (j2) return dl;
  j2 = 1;
  var e = Hf();
  function t(n, r, s) {
    this.src = n, this.env = s, this.tokens = [], this.inlineMode = !1, this.md = r;
  }
  return t.prototype.Token = e, dl = t, dl;
}
var pl, V2;
function Ybe() {
  if (V2) return pl;
  V2 = 1;
  var e = qf(), t = [
    ["normalize", jbe()],
    ["block", Vbe()],
    ["inline", Ube()],
    ["linkify", Kbe()],
    ["replacements", Wbe()],
    ["smartquotes", Gbe()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", Zbe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1]);
  }
  return n.prototype.process = function(r) {
    var s, o, i;
    for (i = this.ruler.getRules(""), s = 0, o = i.length; s < o; s++)
      i[s](r);
  }, n.prototype.State = Xbe(), pl = n, pl;
}
var hl, U2;
function Jbe() {
  if (U2) return hl;
  U2 = 1;
  var e = nt().isSpace;
  function t(r, s) {
    var o = r.bMarks[s] + r.tShift[s], i = r.eMarks[s];
    return r.src.slice(o, i);
  }
  function n(r) {
    var s = [], o = 0, i = r.length, a, l = !1, u = 0, f = "";
    for (a = r.charCodeAt(o); o < i; )
      a === 124 && (l ? (f += r.substring(u, o - 1), u = o) : (s.push(f + r.substring(u, o)), f = "", u = o + 1)), l = a === 92, o++, a = r.charCodeAt(o);
    return s.push(f + r.substring(u)), s;
  }
  return hl = function(s, o, i, a) {
    var l, u, f, c, p, d, v, g, C, h, k, w, _, E, x, M, $, O;
    if (o + 2 > i || (d = o + 1, s.sCount[d] < s.blkIndent) || s.sCount[d] - s.blkIndent >= 4 || (f = s.bMarks[d] + s.tShift[d], f >= s.eMarks[d]) || ($ = s.src.charCodeAt(f++), $ !== 124 && $ !== 45 && $ !== 58) || f >= s.eMarks[d] || (O = s.src.charCodeAt(f++), O !== 124 && O !== 45 && O !== 58 && !e(O)) || $ === 45 && e(O))
      return !1;
    for (; f < s.eMarks[d]; ) {
      if (l = s.src.charCodeAt(f), l !== 124 && l !== 45 && l !== 58 && !e(l))
        return !1;
      f++;
    }
    for (u = t(s, o + 1), v = u.split("|"), h = [], c = 0; c < v.length; c++) {
      if (k = v[c].trim(), !k) {
        if (c === 0 || c === v.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(k))
        return !1;
      k.charCodeAt(k.length - 1) === 58 ? h.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? h.push("left") : h.push("");
    }
    if (u = t(s, o).trim(), u.indexOf("|") === -1 || s.sCount[o] - s.blkIndent >= 4 || (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), g = v.length, g === 0 || g !== h.length))
      return !1;
    if (a)
      return !0;
    for (E = s.parentType, s.parentType = "table", M = s.md.block.ruler.getRules("blockquote"), C = s.push("table_open", "table", 1), C.map = w = [o, 0], C = s.push("thead_open", "thead", 1), C.map = [o, o + 1], C = s.push("tr_open", "tr", 1), C.map = [o, o + 1], c = 0; c < v.length; c++)
      C = s.push("th_open", "th", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = v[c].trim(), C.children = [], C = s.push("th_close", "th", -1);
    for (C = s.push("tr_close", "tr", -1), C = s.push("thead_close", "thead", -1), d = o + 2; d < i && !(s.sCount[d] < s.blkIndent); d++) {
      for (x = !1, c = 0, p = M.length; c < p; c++)
        if (M[c](s, d, i, !0)) {
          x = !0;
          break;
        }
      if (x || (u = t(s, d).trim(), !u) || s.sCount[d] - s.blkIndent >= 4)
        break;
      for (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), d === o + 2 && (C = s.push("tbody_open", "tbody", 1), C.map = _ = [o + 2, 0]), C = s.push("tr_open", "tr", 1), C.map = [d, d + 1], c = 0; c < g; c++)
        C = s.push("td_open", "td", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = v[c] ? v[c].trim() : "", C.children = [], C = s.push("td_close", "td", -1);
      C = s.push("tr_close", "tr", -1);
    }
    return _ && (C = s.push("tbody_close", "tbody", -1), _[1] = d), C = s.push("table_close", "table", -1), w[1] = d, s.parentType = E, s.line = d, !0;
  }, hl;
}
var gl, K2;
function Qbe() {
  return K2 || (K2 = 1, gl = function(t, n, r) {
    var s, o, i;
    if (t.sCount[n] - t.blkIndent < 4)
      return !1;
    for (o = s = n + 1; s < r; ) {
      if (t.isEmpty(s)) {
        s++;
        continue;
      }
      if (t.sCount[s] - t.blkIndent >= 4) {
        s++, o = s;
        continue;
      }
      break;
    }
    return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(n, o, 4 + t.blkIndent, !1) + `
`, i.map = [n, t.line], !0;
  }), gl;
}
var ml, W2;
function e_e() {
  return W2 || (W2 = 1, ml = function(t, n, r, s) {
    var o, i, a, l, u, f, c, p = !1, d = t.bMarks[n] + t.tShift[n], v = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || d + 3 > v || (o = t.src.charCodeAt(d), o !== 126 && o !== 96) || (u = d, d = t.skipChars(d, o), i = d - u, i < 3) || (c = t.src.slice(u, d), a = t.src.slice(d, v), o === 96 && a.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (s)
      return !0;
    for (l = n; l++, !(l >= r || (d = u = t.bMarks[l] + t.tShift[l], v = t.eMarks[l], d < v && t.sCount[l] < t.blkIndent)); )
      if (t.src.charCodeAt(d) === o && !(t.sCount[l] - t.blkIndent >= 4) && (d = t.skipChars(d, o), !(d - u < i) && (d = t.skipSpaces(d), !(d < v)))) {
        p = !0;
        break;
      }
    return i = t.sCount[n], t.line = l + (p ? 1 : 0), f = t.push("fence", "code", 0), f.info = a, f.content = t.getLines(n + 1, l, i, !0), f.markup = c, f.map = [n, t.line], !0;
  }), ml;
}
var vl, G2;
function t_e() {
  if (G2) return vl;
  G2 = 1;
  var e = nt().isSpace;
  return vl = function(n, r, s, o) {
    var i, a, l, u, f, c, p, d, v, g, C, h, k, w, _, E, x, M, $, O, D = n.lineMax, N = n.bMarks[r] + n.tShift[r], B = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(N) !== 62)
      return !1;
    if (o)
      return !0;
    for (g = [], C = [], w = [], _ = [], M = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", d = r; d < s && (O = n.sCount[d] < n.blkIndent, N = n.bMarks[d] + n.tShift[d], B = n.eMarks[d], !(N >= B)); d++) {
      if (n.src.charCodeAt(N++) === 62 && !O) {
        for (u = n.sCount[d] + 1, n.src.charCodeAt(N) === 32 ? (N++, u++, i = !1, E = !0) : n.src.charCodeAt(N) === 9 ? (E = !0, (n.bsCount[d] + u) % 4 === 3 ? (N++, u++, i = !1) : i = !0) : E = !1, v = u, g.push(n.bMarks[d]), n.bMarks[d] = N; N < B && (a = n.src.charCodeAt(N), e(a)); ) {
          a === 9 ? v += 4 - (v + n.bsCount[d] + (i ? 1 : 0)) % 4 : v++;
          N++;
        }
        c = N >= B, C.push(n.bsCount[d]), n.bsCount[d] = n.sCount[d] + 1 + (E ? 1 : 0), w.push(n.sCount[d]), n.sCount[d] = v - u, _.push(n.tShift[d]), n.tShift[d] = N - n.bMarks[d];
        continue;
      }
      if (c)
        break;
      for (x = !1, l = 0, f = M.length; l < f; l++)
        if (M[l](n, d, s, !0)) {
          x = !0;
          break;
        }
      if (x) {
        n.lineMax = d, n.blkIndent !== 0 && (g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), w.push(n.sCount[d]), n.sCount[d] -= n.blkIndent);
        break;
      }
      g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), w.push(n.sCount[d]), n.sCount[d] = -1;
    }
    for (h = n.blkIndent, n.blkIndent = 0, $ = n.push("blockquote_open", "blockquote", 1), $.markup = ">", $.map = p = [r, 0], n.md.block.tokenize(n, r, d), $ = n.push("blockquote_close", "blockquote", -1), $.markup = ">", n.lineMax = D, n.parentType = k, p[1] = n.line, l = 0; l < _.length; l++)
      n.bMarks[l + r] = g[l], n.tShift[l + r] = _[l], n.sCount[l + r] = w[l], n.bsCount[l + r] = C[l];
    return n.blkIndent = h, !0;
  }, vl;
}
var bl, Z2;
function n_e() {
  if (Z2) return bl;
  Z2 = 1;
  var e = nt().isSpace;
  return bl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (a = 1; f < c; ) {
      if (l = n.src.charCodeAt(f++), l !== i && !e(l))
        return !1;
      l === i && a++;
    }
    return a < 3 ? !1 : (o || (n.line = r + 1, u = n.push("hr", "hr", 0), u.map = [r, n.line], u.markup = Array(a + 1).join(String.fromCharCode(i))), !0);
  }, bl;
}
var _l, X2;
function r_e() {
  if (X2) return _l;
  X2 = 1;
  var e = nt().isSpace;
  function t(s, o) {
    var i, a, l, u;
    return a = s.bMarks[o] + s.tShift[o], l = s.eMarks[o], i = s.src.charCodeAt(a++), i !== 42 && i !== 45 && i !== 43 || a < l && (u = s.src.charCodeAt(a), !e(u)) ? -1 : a;
  }
  function n(s, o) {
    var i, a = s.bMarks[o] + s.tShift[o], l = a, u = s.eMarks[o];
    if (l + 1 >= u || (i = s.src.charCodeAt(l++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (l >= u)
        return -1;
      if (i = s.src.charCodeAt(l++), i >= 48 && i <= 57) {
        if (l - a >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return l < u && (i = s.src.charCodeAt(l), !e(i)) ? -1 : l;
  }
  function r(s, o) {
    var i, a, l = s.level + 2;
    for (i = o + 2, a = s.tokens.length - 2; i < a; i++)
      s.tokens[i].level === l && s.tokens[i].type === "paragraph_open" && (s.tokens[i + 2].hidden = !0, s.tokens[i].hidden = !0, i += 2);
  }
  return _l = function(o, i, a, l) {
    var u, f, c, p, d, v, g, C, h, k, w, _, E, x, M, $, O, D, N, B, oe, z, ie, j, V, H, J, I = i, Z = !1, K = !0;
    if (o.sCount[I] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[I] - o.listIndent >= 4 && o.sCount[I] < o.blkIndent)
      return !1;
    if (l && o.parentType === "paragraph" && o.sCount[I] >= o.blkIndent && (Z = !0), (z = n(o, I)) >= 0) {
      if (g = !0, j = o.bMarks[I] + o.tShift[I], E = Number(o.src.slice(j, z - 1)), Z && E !== 1) return !1;
    } else if ((z = t(o, I)) >= 0)
      g = !1;
    else
      return !1;
    if (Z && o.skipSpaces(z) >= o.eMarks[I])
      return !1;
    if (l)
      return !0;
    for (_ = o.src.charCodeAt(z - 1), w = o.tokens.length, g ? (J = o.push("ordered_list_open", "ol", 1), E !== 1 && (J.attrs = [["start", E]])) : J = o.push("bullet_list_open", "ul", 1), J.map = k = [I, 0], J.markup = String.fromCharCode(_), ie = !1, H = o.md.block.ruler.getRules("list"), O = o.parentType, o.parentType = "list"; I < a; ) {
      for (oe = z, x = o.eMarks[I], v = M = o.sCount[I] + z - (o.bMarks[I] + o.tShift[I]); oe < x; ) {
        if (u = o.src.charCodeAt(oe), u === 9)
          M += 4 - (M + o.bsCount[I]) % 4;
        else if (u === 32)
          M++;
        else
          break;
        oe++;
      }
      if (f = oe, f >= x ? d = 1 : d = M - v, d > 4 && (d = 1), p = v + d, J = o.push("list_item_open", "li", 1), J.markup = String.fromCharCode(_), J.map = C = [I, 0], g && (J.info = o.src.slice(j, z - 1)), B = o.tight, N = o.tShift[I], D = o.sCount[I], $ = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = p, o.tight = !0, o.tShift[I] = f - o.bMarks[I], o.sCount[I] = M, f >= x && o.isEmpty(I + 1) ? o.line = Math.min(o.line + 2, a) : o.md.block.tokenize(o, I, a, !0), (!o.tight || ie) && (K = !1), ie = o.line - I > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = $, o.tShift[I] = N, o.sCount[I] = D, o.tight = B, J = o.push("list_item_close", "li", -1), J.markup = String.fromCharCode(_), I = o.line, C[1] = I, I >= a || o.sCount[I] < o.blkIndent || o.sCount[I] - o.blkIndent >= 4)
        break;
      for (V = !1, c = 0, h = H.length; c < h; c++)
        if (H[c](o, I, a, !0)) {
          V = !0;
          break;
        }
      if (V)
        break;
      if (g) {
        if (z = n(o, I), z < 0)
          break;
        j = o.bMarks[I] + o.tShift[I];
      } else if (z = t(o, I), z < 0)
        break;
      if (_ !== o.src.charCodeAt(z - 1))
        break;
    }
    return g ? J = o.push("ordered_list_close", "ol", -1) : J = o.push("bullet_list_close", "ul", -1), J.markup = String.fromCharCode(_), k[1] = I, o.line = I, o.parentType = O, K && r(o, w), !0;
  }, _l;
}
var yl, Y2;
function o_e() {
  if (Y2) return yl;
  Y2 = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return yl = function(r, s, o, i) {
    var a, l, u, f, c, p, d, v, g, C, h, k, w, _, E, x, M = 0, $ = r.bMarks[s] + r.tShift[s], O = r.eMarks[s], D = s + 1;
    if (r.sCount[s] - r.blkIndent >= 4 || r.src.charCodeAt($) !== 91)
      return !1;
    for (; ++$ < O; )
      if (r.src.charCodeAt($) === 93 && r.src.charCodeAt($ - 1) !== 92) {
        if ($ + 1 === O || r.src.charCodeAt($ + 1) !== 58)
          return !1;
        break;
      }
    for (f = r.lineMax, E = r.md.block.ruler.getRules("reference"), C = r.parentType, r.parentType = "reference"; D < f && !r.isEmpty(D); D++)
      if (!(r.sCount[D] - r.blkIndent > 3) && !(r.sCount[D] < 0)) {
        for (_ = !1, p = 0, d = E.length; p < d; p++)
          if (E[p](r, D, f, !0)) {
            _ = !0;
            break;
          }
        if (_)
          break;
      }
    for (w = r.getLines(s, D, r.blkIndent, !1).trim(), O = w.length, $ = 1; $ < O; $++) {
      if (a = w.charCodeAt($), a === 91)
        return !1;
      if (a === 93) {
        g = $;
        break;
      } else a === 10 ? M++ : a === 92 && ($++, $ < O && w.charCodeAt($) === 10 && M++);
    }
    if (g < 0 || w.charCodeAt(g + 1) !== 58)
      return !1;
    for ($ = g + 2; $ < O; $++)
      if (a = w.charCodeAt($), a === 10)
        M++;
      else if (!t(a)) break;
    if (h = r.md.helpers.parseLinkDestination(w, $, O), !h.ok || (c = r.md.normalizeLink(h.str), !r.md.validateLink(c)))
      return !1;
    for ($ = h.pos, M += h.lines, l = $, u = M, k = $; $ < O; $++)
      if (a = w.charCodeAt($), a === 10)
        M++;
      else if (!t(a)) break;
    for (h = r.md.helpers.parseLinkTitle(w, $, O), $ < O && k !== $ && h.ok ? (x = h.str, $ = h.pos, M += h.lines) : (x = "", $ = l, M = u); $ < O && (a = w.charCodeAt($), !!t(a)); )
      $++;
    if ($ < O && w.charCodeAt($) !== 10 && x)
      for (x = "", $ = l, M = u; $ < O && (a = w.charCodeAt($), !!t(a)); )
        $++;
    return $ < O && w.charCodeAt($) !== 10 || (v = e(w.slice(1, g)), !v) ? !1 : (i || (typeof r.env.references > "u" && (r.env.references = {}), typeof r.env.references[v] > "u" && (r.env.references[v] = { title: x, href: c }), r.parentType = C, r.line = s + M + 1), !0);
  }, yl;
}
var wl, J2;
function s_e() {
  return J2 || (J2 = 1, wl = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ]), wl;
}
var Hs = {}, Q2;
function Y_() {
  if (Q2) return Hs;
  Q2 = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", r = '"[^"]*"', s = "(?:" + t + "|" + n + "|" + r + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + s + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", l = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", f = "<![A-Z]+\\s+[^>]*>", c = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", p = new RegExp("^(?:" + i + "|" + a + "|" + l + "|" + u + "|" + f + "|" + c + ")"), d = new RegExp("^(?:" + i + "|" + a + ")");
  return Hs.HTML_TAG_RE = p, Hs.HTML_OPEN_CLOSE_TAG_RE = d, Hs;
}
var kl, ep;
function i_e() {
  if (ep) return kl;
  ep = 1;
  var e = s_e(), t = Y_().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return kl = function(s, o, i, a) {
    var l, u, f, c, p = s.bMarks[o] + s.tShift[o], d = s.eMarks[o];
    if (s.sCount[o] - s.blkIndent >= 4 || !s.md.options.html || s.src.charCodeAt(p) !== 60)
      return !1;
    for (c = s.src.slice(p, d), l = 0; l < n.length && !n[l][0].test(c); l++)
      ;
    if (l === n.length)
      return !1;
    if (a)
      return n[l][2];
    if (u = o + 1, !n[l][1].test(c)) {
      for (; u < i && !(s.sCount[u] < s.blkIndent); u++)
        if (p = s.bMarks[u] + s.tShift[u], d = s.eMarks[u], c = s.src.slice(p, d), n[l][1].test(c)) {
          c.length !== 0 && u++;
          break;
        }
    }
    return s.line = u, f = s.push("html_block", "", 0), f.map = [o, u], f.content = s.getLines(o, u, s.blkIndent, !0), !0;
  }, kl;
}
var Cl, tp;
function a_e() {
  if (tp) return Cl;
  tp = 1;
  var e = nt().isSpace;
  return Cl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f), i !== 35 || f >= c))
      return !1;
    for (a = 1, i = n.src.charCodeAt(++f); i === 35 && f < c && a <= 6; )
      a++, i = n.src.charCodeAt(++f);
    return a > 6 || f < c && !e(i) ? !1 : (o || (c = n.skipSpacesBack(c, f), l = n.skipCharsBack(c, 35, f), l > f && e(n.src.charCodeAt(l - 1)) && (c = l), n.line = r + 1, u = n.push("heading_open", "h" + String(a), 1), u.markup = "########".slice(0, a), u.map = [r, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(f, c).trim(), u.map = [r, n.line], u.children = [], u = n.push("heading_close", "h" + String(a), -1), u.markup = "########".slice(0, a)), !0);
  }, Cl;
}
var xl, np;
function l_e() {
  return np || (np = 1, xl = function(t, n, r) {
    var s, o, i, a, l, u, f, c, p, d = n + 1, v, g = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (v = t.parentType, t.parentType = "paragraph"; d < r && !t.isEmpty(d); d++)
      if (!(t.sCount[d] - t.blkIndent > 3)) {
        if (t.sCount[d] >= t.blkIndent && (u = t.bMarks[d] + t.tShift[d], f = t.eMarks[d], u < f && (p = t.src.charCodeAt(u), (p === 45 || p === 61) && (u = t.skipChars(u, p), u = t.skipSpaces(u), u >= f)))) {
          c = p === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[d] < 0)) {
          for (o = !1, i = 0, a = g.length; i < a; i++)
            if (g[i](t, d, r, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return c ? (s = t.getLines(n, d, t.blkIndent, !1).trim(), t.line = d + 1, l = t.push("heading_open", "h" + String(c), 1), l.markup = String.fromCharCode(p), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line - 1], l.children = [], l = t.push("heading_close", "h" + String(c), -1), l.markup = String.fromCharCode(p), t.parentType = v, !0) : !1;
  }), xl;
}
var El, rp;
function c_e() {
  return rp || (rp = 1, El = function(t, n, r) {
    var s, o, i, a, l, u, f = n + 1, c = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; f < r && !t.isEmpty(f); f++)
      if (!(t.sCount[f] - t.blkIndent > 3) && !(t.sCount[f] < 0)) {
        for (o = !1, i = 0, a = c.length; i < a; i++)
          if (c[i](t, f, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return s = t.getLines(n, f, t.blkIndent, !1).trim(), t.line = f, l = t.push("paragraph_open", "p", 1), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line], l.children = [], l = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), El;
}
var Sl, op;
function u_e() {
  if (op) return Sl;
  op = 1;
  var e = Hf(), t = nt().isSpace;
  function n(r, s, o, i) {
    var a, l, u, f, c, p, d, v;
    for (this.src = r, this.md = s, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", l = this.src, v = !1, u = f = p = d = 0, c = l.length; f < c; f++) {
      if (a = l.charCodeAt(f), !v)
        if (t(a)) {
          p++, a === 9 ? d += 4 - d % 4 : d++;
          continue;
        } else
          v = !0;
      (a === 10 || f === c - 1) && (a !== 10 && f++, this.bMarks.push(u), this.eMarks.push(f), this.tShift.push(p), this.sCount.push(d), this.bsCount.push(0), v = !1, p = 0, d = 0, u = f + 1);
    }
    this.bMarks.push(l.length), this.eMarks.push(l.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  return n.prototype.push = function(r, s, o) {
    var i = new e(r, s, o);
    return i.block = !0, o < 0 && this.level--, i.level = this.level, o > 0 && this.level++, this.tokens.push(i), i;
  }, n.prototype.isEmpty = function(s) {
    return this.bMarks[s] + this.tShift[s] >= this.eMarks[s];
  }, n.prototype.skipEmptyLines = function(s) {
    for (var o = this.lineMax; s < o && !(this.bMarks[s] + this.tShift[s] < this.eMarks[s]); s++)
      ;
    return s;
  }, n.prototype.skipSpaces = function(s) {
    for (var o, i = this.src.length; s < i && (o = this.src.charCodeAt(s), !!t(o)); s++)
      ;
    return s;
  }, n.prototype.skipSpacesBack = function(s, o) {
    if (s <= o)
      return s;
    for (; s > o; )
      if (!t(this.src.charCodeAt(--s)))
        return s + 1;
    return s;
  }, n.prototype.skipChars = function(s, o) {
    for (var i = this.src.length; s < i && this.src.charCodeAt(s) === o; s++)
      ;
    return s;
  }, n.prototype.skipCharsBack = function(s, o, i) {
    if (s <= i)
      return s;
    for (; s > i; )
      if (o !== this.src.charCodeAt(--s))
        return s + 1;
    return s;
  }, n.prototype.getLines = function(s, o, i, a) {
    var l, u, f, c, p, d, v, g = s;
    if (s >= o)
      return "";
    for (d = new Array(o - s), l = 0; g < o; g++, l++) {
      for (u = 0, v = c = this.bMarks[g], g + 1 < o || a ? p = this.eMarks[g] + 1 : p = this.eMarks[g]; c < p && u < i; ) {
        if (f = this.src.charCodeAt(c), t(f))
          f === 9 ? u += 4 - (u + this.bsCount[g]) % 4 : u++;
        else if (c - v < this.tShift[g])
          u++;
        else
          break;
        c++;
      }
      u > i ? d[l] = new Array(u - i + 1).join(" ") + this.src.slice(c, p) : d[l] = this.src.slice(c, p);
    }
    return d.join("");
  }, n.prototype.Token = e, Sl = n, Sl;
}
var Al, sp;
function f_e() {
  if (sp) return Al;
  sp = 1;
  var e = qf(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", Jbe(), ["paragraph", "reference"]],
    ["code", Qbe()],
    ["fence", e_e(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", t_e(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", n_e(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", r_e(), ["paragraph", "reference", "blockquote"]],
    ["reference", o_e()],
    ["html_block", i_e(), ["paragraph", "reference", "blockquote"]],
    ["heading", a_e(), ["paragraph", "reference", "blockquote"]],
    ["lheading", l_e()],
    ["paragraph", c_e()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1], { alt: (t[r][2] || []).slice() });
  }
  return n.prototype.tokenize = function(r, s, o) {
    for (var i, a, l, u = this.ruler.getRules(""), f = u.length, c = s, p = !1, d = r.md.options.maxNesting; c < o && (r.line = c = r.skipEmptyLines(c), !(c >= o || r.sCount[c] < r.blkIndent)); ) {
      if (r.level >= d) {
        r.line = o;
        break;
      }
      for (l = r.line, a = 0; a < f; a++)
        if (i = u[a](r, c, o, !1), i) {
          if (l >= r.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      r.tight = !p, r.isEmpty(r.line - 1) && (p = !0), c = r.line, c < o && r.isEmpty(c) && (p = !0, c++, r.line = c);
    }
  }, n.prototype.parse = function(r, s, o, i) {
    var a;
    r && (a = new this.State(r, s, o, i), this.tokenize(a, a.line, a.lineMax));
  }, n.prototype.State = u_e(), Al = n, Al;
}
var Tl, ip;
function d_e() {
  if (ip) return Tl;
  ip = 1;
  function e(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  return Tl = function(n, r) {
    for (var s = n.pos; s < n.posMax && !e(n.src.charCodeAt(s)); )
      s++;
    return s === n.pos ? !1 : (r || (n.pending += n.src.slice(n.pos, s)), n.pos = s, !0);
  }, Tl;
}
var Ml, ap;
function p_e() {
  if (ap) return Ml;
  ap = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return Ml = function(n, r) {
    var s, o, i, a, l, u, f, c;
    return !n.md.options.linkify || n.linkLevel > 0 || (s = n.pos, o = n.posMax, s + 3 > o) || n.src.charCodeAt(s) !== 58 || n.src.charCodeAt(s + 1) !== 47 || n.src.charCodeAt(s + 2) !== 47 || (i = n.pending.match(e), !i) || (a = i[1], l = n.md.linkify.matchAtStart(n.src.slice(s - a.length)), !l) || (u = l.url, u.length <= a.length) || (u = u.replace(/\*+$/, ""), f = n.md.normalizeLink(u), !n.md.validateLink(f)) ? !1 : (r || (n.pending = n.pending.slice(0, -a.length), c = n.push("link_open", "a", 1), c.attrs = [["href", f]], c.markup = "linkify", c.info = "auto", c = n.push("text", "", 0), c.content = n.md.normalizeLinkText(u), c = n.push("link_close", "a", -1), c.markup = "linkify", c.info = "auto"), n.pos += u.length - a.length, !0);
  }, Ml;
}
var $l, lp;
function h_e() {
  if (lp) return $l;
  lp = 1;
  var e = nt().isSpace;
  return $l = function(n, r) {
    var s, o, i, a = n.pos;
    if (n.src.charCodeAt(a) !== 10)
      return !1;
    if (s = n.pending.length - 1, o = n.posMax, !r)
      if (s >= 0 && n.pending.charCodeAt(s) === 32)
        if (s >= 1 && n.pending.charCodeAt(s - 1) === 32) {
          for (i = s - 1; i >= 1 && n.pending.charCodeAt(i - 1) === 32; ) i--;
          n.pending = n.pending.slice(0, i), n.push("hardbreak", "br", 0);
        } else
          n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
      else
        n.push("softbreak", "br", 0);
    for (a++; a < o && e(n.src.charCodeAt(a)); )
      a++;
    return n.pos = a, !0;
  }, $l;
}
var Ll, cp;
function g_e() {
  if (cp) return Ll;
  cp = 1;
  for (var e = nt().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
    t[r.charCodeAt(0)] = 1;
  }), Ll = function(s, o) {
    var i, a, l, u, f, c = s.pos, p = s.posMax;
    if (s.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (i = s.src.charCodeAt(c), i === 10) {
      for (o || s.push("hardbreak", "br", 0), c++; c < p && (i = s.src.charCodeAt(c), !!e(i)); )
        c++;
      return s.pos = c, !0;
    }
    return u = s.src[c], i >= 55296 && i <= 56319 && c + 1 < p && (a = s.src.charCodeAt(c + 1), a >= 56320 && a <= 57343 && (u += s.src[c + 1], c++)), l = "\\" + u, o || (f = s.push("text_special", "", 0), i < 256 && t[i] !== 0 ? f.content = u : f.content = l, f.markup = l, f.info = "escape"), s.pos = c + 1, !0;
  }, Ll;
}
var Il, up;
function m_e() {
  return up || (up = 1, Il = function(t, n) {
    var r, s, o, i, a, l, u, f, c = t.pos, p = t.src.charCodeAt(c);
    if (p !== 96)
      return !1;
    for (r = c, c++, s = t.posMax; c < s && t.src.charCodeAt(c) === 96; )
      c++;
    if (o = t.src.slice(r, c), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= r)
      return n || (t.pending += o), t.pos += u, !0;
    for (l = c; (a = t.src.indexOf("`", l)) !== -1; ) {
      for (l = a + 1; l < s && t.src.charCodeAt(l) === 96; )
        l++;
      if (f = l - a, f === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(c, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = l, !0;
      t.backticks[f] = a;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), Il;
}
var js = {}, fp;
function dp() {
  if (fp) return js;
  fp = 1, js.tokenize = function(n, r) {
    var s, o, i, a, l, u = n.pos, f = n.src.charCodeAt(u);
    if (r || f !== 126 || (o = n.scanDelims(n.pos, !0), a = o.length, l = String.fromCharCode(f), a < 2))
      return !1;
    for (a % 2 && (i = n.push("text", "", 0), i.content = l, a--), s = 0; s < a; s += 2)
      i = n.push("text", "", 0), i.content = l + l, n.delimiters.push({
        marker: f,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: n.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l = [], u = n.length;
    for (r = 0; r < u; r++)
      o = n[r], o.marker === 126 && o.end !== -1 && (i = n[o.end], a = t.tokens[o.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[i.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && l.push(i.token - 1));
    for (; l.length; ) {
      for (r = l.pop(), s = r + 1; s < t.tokens.length && t.tokens[s].type === "s_close"; )
        s++;
      s--, r !== s && (a = t.tokens[s], t.tokens[s] = t.tokens[r], t.tokens[r] = a);
    }
  }
  return js.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, js;
}
var Vs = {}, pp;
function hp() {
  if (pp) return Vs;
  pp = 1, Vs.tokenize = function(n, r) {
    var s, o, i, a = n.pos, l = n.src.charCodeAt(a);
    if (r || l !== 95 && l !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, l === 42), s = 0; s < o.length; s++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(l), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: l,
        // Total length of these series of delimiters.
        //
        length: o.length,
        // A position of the token this delimiter corresponds to.
        //
        token: n.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l, u = n.length;
    for (r = u - 1; r >= 0; r--)
      s = n[r], !(s.marker !== 95 && s.marker !== 42) && s.end !== -1 && (o = n[s.end], l = r > 0 && n[r - 1].end === s.end + 1 && // check that first two markers match and adjacent
      n[r - 1].marker === s.marker && n[r - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[s.end + 1].token === o.token + 1, a = String.fromCharCode(s.marker), i = t.tokens[s.token], i.type = l ? "strong_open" : "em_open", i.tag = l ? "strong" : "em", i.nesting = 1, i.markup = l ? a + a : a, i.content = "", i = t.tokens[o.token], i.type = l ? "strong_close" : "em_close", i.tag = l ? "strong" : "em", i.nesting = -1, i.markup = l ? a + a : a, i.content = "", l && (t.tokens[n[r - 1].token].content = "", t.tokens[n[s.end + 1].token].content = "", r--));
  }
  return Vs.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Vs;
}
var Ol, gp;
function v_e() {
  if (gp) return Ol;
  gp = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return Ol = function(r, s) {
    var o, i, a, l, u, f, c, p, d, v = "", g = "", C = r.pos, h = r.posMax, k = r.pos, w = !0;
    if (r.src.charCodeAt(r.pos) !== 91 || (u = r.pos + 1, l = r.md.helpers.parseLinkLabel(r, r.pos, !0), l < 0))
      return !1;
    if (f = l + 1, f < h && r.src.charCodeAt(f) === 40) {
      for (w = !1, f++; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= h)
        return !1;
      if (k = f, c = r.md.helpers.parseLinkDestination(r.src, f, r.posMax), c.ok) {
        for (v = r.md.normalizeLink(c.str), r.md.validateLink(v) ? f = c.pos : v = "", k = f; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
        if (c = r.md.helpers.parseLinkTitle(r.src, f, r.posMax), f < h && k !== f && c.ok)
          for (g = c.str, f = c.pos; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
            ;
      }
      (f >= h || r.src.charCodeAt(f) !== 41) && (w = !0), f++;
    }
    if (w) {
      if (typeof r.env.references > "u")
        return !1;
      if (f < h && r.src.charCodeAt(f) === 91 ? (k = f + 1, f = r.md.helpers.parseLinkLabel(r, f), f >= 0 ? a = r.src.slice(k, f++) : f = l + 1) : f = l + 1, a || (a = r.src.slice(u, l)), p = r.env.references[e(a)], !p)
        return r.pos = C, !1;
      v = p.href, g = p.title;
    }
    return s || (r.pos = u, r.posMax = l, d = r.push("link_open", "a", 1), d.attrs = o = [["href", v]], g && o.push(["title", g]), r.linkLevel++, r.md.inline.tokenize(r), r.linkLevel--, d = r.push("link_close", "a", -1)), r.pos = f, r.posMax = h, !0;
  }, Ol;
}
var Rl, mp;
function b_e() {
  if (mp) return Rl;
  mp = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return Rl = function(r, s) {
    var o, i, a, l, u, f, c, p, d, v, g, C, h, k = "", w = r.pos, _ = r.posMax;
    if (r.src.charCodeAt(r.pos) !== 33 || r.src.charCodeAt(r.pos + 1) !== 91 || (f = r.pos + 2, u = r.md.helpers.parseLinkLabel(r, r.pos + 1, !1), u < 0))
      return !1;
    if (c = u + 1, c < _ && r.src.charCodeAt(c) === 40) {
      for (c++; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (c >= _)
        return !1;
      for (h = c, d = r.md.helpers.parseLinkDestination(r.src, c, r.posMax), d.ok && (k = r.md.normalizeLink(d.str), r.md.validateLink(k) ? c = d.pos : k = ""), h = c; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (d = r.md.helpers.parseLinkTitle(r.src, c, r.posMax), c < _ && h !== c && d.ok)
        for (v = d.str, c = d.pos; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
          ;
      else
        v = "";
      if (c >= _ || r.src.charCodeAt(c) !== 41)
        return r.pos = w, !1;
      c++;
    } else {
      if (typeof r.env.references > "u")
        return !1;
      if (c < _ && r.src.charCodeAt(c) === 91 ? (h = c + 1, c = r.md.helpers.parseLinkLabel(r, c), c >= 0 ? l = r.src.slice(h, c++) : c = u + 1) : c = u + 1, l || (l = r.src.slice(f, u)), p = r.env.references[e(l)], !p)
        return r.pos = w, !1;
      k = p.href, v = p.title;
    }
    return s || (a = r.src.slice(f, u), r.md.inline.parse(
      a,
      r.md,
      r.env,
      C = []
    ), g = r.push("image", "img", 0), g.attrs = o = [["src", k], ["alt", ""]], g.children = C, g.content = a, v && o.push(["title", v])), r.pos = c, r.posMax = _, !0;
  }, Rl;
}
var Pl, vp;
function __e() {
  if (vp) return Pl;
  vp = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return Pl = function(r, s) {
    var o, i, a, l, u, f, c = r.pos;
    if (r.src.charCodeAt(c) !== 60)
      return !1;
    for (u = r.pos, f = r.posMax; ; ) {
      if (++c >= f || (l = r.src.charCodeAt(c), l === 60)) return !1;
      if (l === 62) break;
    }
    return o = r.src.slice(u + 1, c), t.test(o) ? (i = r.md.normalizeLink(o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = r.md.normalizeLink("mailto:" + o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : !1;
  }, Pl;
}
var Dl, bp;
function y_e() {
  if (bp) return Dl;
  bp = 1;
  var e = Y_().HTML_TAG_RE;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  function r(s) {
    var o = s | 32;
    return o >= 97 && o <= 122;
  }
  return Dl = function(o, i) {
    var a, l, u, f, c = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(c) !== 60 || c + 2 >= u) || (a = o.src.charCodeAt(c + 1), a !== 33 && a !== 63 && a !== 47 && !r(a)) || (l = o.src.slice(c).match(e), !l) ? !1 : (i || (f = o.push("html_inline", "", 0), f.content = l[0], t(f.content) && o.linkLevel++, n(f.content) && o.linkLevel--), o.pos += l[0].length, !0);
  }, Dl;
}
var Bl, _p;
function w_e() {
  if (_p) return Bl;
  _p = 1;
  var e = K_(), t = nt().has, n = nt().isValidEntityCode, r = nt().fromCodePoint, s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return Bl = function(a, l) {
    var u, f, c, p, d = a.pos, v = a.posMax;
    if (a.src.charCodeAt(d) !== 38 || d + 1 >= v) return !1;
    if (u = a.src.charCodeAt(d + 1), u === 35) {
      if (c = a.src.slice(d).match(s), c)
        return l || (f = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), p = a.push("text_special", "", 0), p.content = n(f) ? r(f) : r(65533), p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    } else if (c = a.src.slice(d).match(o), c && t(e, c[1]))
      return l || (p = a.push("text_special", "", 0), p.content = e[c[1]], p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    return !1;
  }, Bl;
}
var Nl, yp;
function k_e() {
  if (yp) return Nl;
  yp = 1;
  function e(t) {
    var n, r, s, o, i, a, l, u, f = {}, c = t.length;
    if (c) {
      var p = 0, d = -2, v = [];
      for (n = 0; n < c; n++)
        if (s = t[n], v.push(0), (t[p].marker !== s.marker || d !== s.token - 1) && (p = n), d = s.token, s.length = s.length || 0, !!s.close) {
          for (f.hasOwnProperty(s.marker) || (f[s.marker] = [-1, -1, -1, -1, -1, -1]), i = f[s.marker][(s.open ? 3 : 0) + s.length % 3], r = p - v[p] - 1, a = r; r > i; r -= v[r] + 1)
            if (o = t[r], o.marker === s.marker && o.open && o.end < 0 && (l = !1, (o.close || s.open) && (o.length + s.length) % 3 === 0 && (o.length % 3 !== 0 || s.length % 3 !== 0) && (l = !0), !l)) {
              u = r > 0 && !t[r - 1].open ? v[r - 1] + 1 : 0, v[n] = n - r + u, v[r] = u, s.open = !1, o.end = n, o.close = !1, a = -1, d = -2;
              break;
            }
          a !== -1 && (f[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
        }
    }
  }
  return Nl = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(s[r].delimiters);
  }, Nl;
}
var Fl, wp;
function C_e() {
  return wp || (wp = 1, Fl = function(t) {
    var n, r, s = 0, o = t.tokens, i = t.tokens.length;
    for (n = r = 0; n < i; n++)
      o[n].nesting < 0 && s--, o[n].level = s, o[n].nesting > 0 && s++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
    n !== r && (o.length = r);
  }), Fl;
}
var zl, kp;
function x_e() {
  if (kp) return zl;
  kp = 1;
  var e = Hf(), t = nt().isWhiteSpace, n = nt().isPunctChar, r = nt().isMdAsciiPunct;
  function s(o, i, a, l) {
    this.src = o, this.env = a, this.md = i, this.tokens = l, this.tokens_meta = Array(l.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return s.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, s.prototype.push = function(o, i, a) {
    this.pending && this.pushPending();
    var l = new e(o, i, a), u = null;
    return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), l.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(l), this.tokens_meta.push(u), l;
  }, s.prototype.scanDelims = function(o, i) {
    var a = o, l, u, f, c, p, d, v, g, C, h = !0, k = !0, w = this.posMax, _ = this.src.charCodeAt(o);
    for (l = o > 0 ? this.src.charCodeAt(o - 1) : 32; a < w && this.src.charCodeAt(a) === _; )
      a++;
    return f = a - o, u = a < w ? this.src.charCodeAt(a) : 32, v = r(l) || n(String.fromCharCode(l)), C = r(u) || n(String.fromCharCode(u)), d = t(l), g = t(u), g ? h = !1 : C && (d || v || (h = !1)), d ? k = !1 : v && (g || C || (k = !1)), i ? (c = h, p = k) : (c = h && (!k || v), p = k && (!h || C)), {
      can_open: c,
      can_close: p,
      length: f
    };
  }, s.prototype.Token = e, zl = s, zl;
}
var ql, Cp;
function E_e() {
  if (Cp) return ql;
  Cp = 1;
  var e = qf(), t = [
    ["text", d_e()],
    ["linkify", p_e()],
    ["newline", h_e()],
    ["escape", g_e()],
    ["backticks", m_e()],
    ["strikethrough", dp().tokenize],
    ["emphasis", hp().tokenize],
    ["link", v_e()],
    ["image", b_e()],
    ["autolink", __e()],
    ["html_inline", y_e()],
    ["entity", w_e()]
  ], n = [
    ["balance_pairs", k_e()],
    ["strikethrough", dp().postProcess],
    ["emphasis", hp().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", C_e()]
  ];
  function r() {
    var s;
    for (this.ruler = new e(), s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
    for (this.ruler2 = new e(), s = 0; s < n.length; s++)
      this.ruler2.push(n[s][0], n[s][1]);
  }
  return r.prototype.skipToken = function(s) {
    var o, i, a = s.pos, l = this.ruler.getRules(""), u = l.length, f = s.md.options.maxNesting, c = s.cache;
    if (typeof c[a] < "u") {
      s.pos = c[a];
      return;
    }
    if (s.level < f) {
      for (i = 0; i < u; i++)
        if (s.level++, o = l[i](s, !0), s.level--, o) {
          if (a >= s.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      s.pos = s.posMax;
    o || s.pos++, c[a] = s.pos;
  }, r.prototype.tokenize = function(s) {
    for (var o, i, a, l = this.ruler.getRules(""), u = l.length, f = s.posMax, c = s.md.options.maxNesting; s.pos < f; ) {
      if (a = s.pos, s.level < c) {
        for (i = 0; i < u; i++)
          if (o = l[i](s, !1), o) {
            if (a >= s.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (s.pos >= f)
          break;
        continue;
      }
      s.pending += s.src[s.pos++];
    }
    s.pending && s.pushPending();
  }, r.prototype.parse = function(s, o, i, a) {
    var l, u, f, c = new this.State(s, o, i, a);
    for (this.tokenize(c), u = this.ruler2.getRules(""), f = u.length, l = 0; l < f; l++)
      u[l](c);
  }, r.prototype.State = x_e(), ql = r, ql;
}
var Hl, xp;
function S_e() {
  return xp || (xp = 1, Hl = function(e) {
    var t = {};
    e = e || {}, t.src_Any = G_().source, t.src_Cc = Z_().source, t.src_Z = X_().source, t.src_P = zf().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), Hl;
}
var jl, Ep;
function A_e() {
  if (Ep) return jl;
  Ep = 1;
  function e(w) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return _.forEach(function(E) {
      E && Object.keys(E).forEach(function(x) {
        w[x] = E[x];
      });
    }), w;
  }
  function t(w) {
    return Object.prototype.toString.call(w);
  }
  function n(w) {
    return t(w) === "[object String]";
  }
  function r(w) {
    return t(w) === "[object Object]";
  }
  function s(w) {
    return t(w) === "[object RegExp]";
  }
  function o(w) {
    return t(w) === "[object Function]";
  }
  function i(w) {
    return w.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function l(w) {
    return Object.keys(w || {}).reduce(function(_, E) {
      return _ || a.hasOwnProperty(E);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(w, _, E) {
        var x = w.slice(_);
        return E.re.http || (E.re.http = new RegExp(
          "^\\/\\/" + E.re.src_auth + E.re.src_host_port_strict + E.re.src_path,
          "i"
        )), E.re.http.test(x) ? x.match(E.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(w, _, E) {
        var x = w.slice(_);
        return E.re.no_http || (E.re.no_http = new RegExp(
          "^" + E.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + E.re.src_domain + ")\\.)+" + E.re.src_domain_root + ")" + E.re.src_port + E.re.src_host_terminator + E.re.src_path,
          "i"
        )), E.re.no_http.test(x) ? _ >= 3 && w[_ - 3] === ":" || _ >= 3 && w[_ - 3] === "/" ? 0 : x.match(E.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(w, _, E) {
        var x = w.slice(_);
        return E.re.mailto || (E.re.mailto = new RegExp(
          "^" + E.re.src_email_name + "@" + E.re.src_host_strict,
          "i"
        )), E.re.mailto.test(x) ? x.match(E.re.mailto)[0].length : 0;
      }
    }
  }, f = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function p(w) {
    w.__index__ = -1, w.__text_cache__ = "";
  }
  function d(w) {
    return function(_, E) {
      var x = _.slice(E);
      return w.test(x) ? x.match(w)[0].length : 0;
    };
  }
  function v() {
    return function(w, _) {
      _.normalize(w);
    };
  }
  function g(w) {
    var _ = w.re = S_e()(w.__opts__), E = w.__tlds__.slice();
    w.onCompile(), w.__tlds_replaced__ || E.push(f), E.push(_.src_xn), _.src_tlds = E.join("|");
    function x(D) {
      return D.replace("%TLDS%", _.src_tlds);
    }
    _.email_fuzzy = RegExp(x(_.tpl_email_fuzzy), "i"), _.link_fuzzy = RegExp(x(_.tpl_link_fuzzy), "i"), _.link_no_ip_fuzzy = RegExp(x(_.tpl_link_no_ip_fuzzy), "i"), _.host_fuzzy_test = RegExp(x(_.tpl_host_fuzzy_test), "i");
    var M = [];
    w.__compiled__ = {};
    function $(D, N) {
      throw new Error('(LinkifyIt) Invalid schema "' + D + '": ' + N);
    }
    Object.keys(w.__schemas__).forEach(function(D) {
      var N = w.__schemas__[D];
      if (N !== null) {
        var B = { validate: null, link: null };
        if (w.__compiled__[D] = B, r(N)) {
          s(N.validate) ? B.validate = d(N.validate) : o(N.validate) ? B.validate = N.validate : $(D, N), o(N.normalize) ? B.normalize = N.normalize : N.normalize ? $(D, N) : B.normalize = v();
          return;
        }
        if (n(N)) {
          M.push(D);
          return;
        }
        $(D, N);
      }
    }), M.forEach(function(D) {
      w.__compiled__[w.__schemas__[D]] && (w.__compiled__[D].validate = w.__compiled__[w.__schemas__[D]].validate, w.__compiled__[D].normalize = w.__compiled__[w.__schemas__[D]].normalize);
    }), w.__compiled__[""] = { validate: null, normalize: v() };
    var O = Object.keys(w.__compiled__).filter(function(D) {
      return D.length > 0 && w.__compiled__[D];
    }).map(i).join("|");
    w.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + O + ")", "i"), w.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + O + ")", "ig"), w.re.schema_at_start = RegExp("^" + w.re.schema_search.source, "i"), w.re.pretest = RegExp(
      "(" + w.re.schema_test.source + ")|(" + w.re.host_fuzzy_test.source + ")|@",
      "i"
    ), p(w);
  }
  function C(w, _) {
    var E = w.__index__, x = w.__last_index__, M = w.__text_cache__.slice(E, x);
    this.schema = w.__schema__.toLowerCase(), this.index = E + _, this.lastIndex = x + _, this.raw = M, this.text = M, this.url = M;
  }
  function h(w, _) {
    var E = new C(w, _);
    return w.__compiled__[E.schema].normalize(E, w), E;
  }
  function k(w, _) {
    if (!(this instanceof k))
      return new k(w, _);
    _ || l(w) && (_ = w, w = {}), this.__opts__ = e({}, a, _), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, w), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, g(this);
  }
  return k.prototype.add = function(_, E) {
    return this.__schemas__[_] = E, g(this), this;
  }, k.prototype.set = function(_) {
    return this.__opts__ = e(this.__opts__, _), this;
  }, k.prototype.test = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length)
      return !1;
    var E, x, M, $, O, D, N, B, oe;
    if (this.re.schema_test.test(_)) {
      for (N = this.re.schema_search, N.lastIndex = 0; (E = N.exec(_)) !== null; )
        if ($ = this.testSchemaAt(_, E[2], N.lastIndex), $) {
          this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + $;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (B = _.search(this.re.host_fuzzy_test), B >= 0 && (this.__index__ < 0 || B < this.__index__) && (x = _.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (O = x.index + x[1].length, (this.__index__ < 0 || O < this.__index__) && (this.__schema__ = "", this.__index__ = O, this.__last_index__ = x.index + x[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (oe = _.indexOf("@"), oe >= 0 && (M = _.match(this.re.email_fuzzy)) !== null && (O = M.index + M[1].length, D = M.index + M[0].length, (this.__index__ < 0 || O < this.__index__ || O === this.__index__ && D > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = O, this.__last_index__ = D))), this.__index__ >= 0;
  }, k.prototype.pretest = function(_) {
    return this.re.pretest.test(_);
  }, k.prototype.testSchemaAt = function(_, E, x) {
    return this.__compiled__[E.toLowerCase()] ? this.__compiled__[E.toLowerCase()].validate(_, x, this) : 0;
  }, k.prototype.match = function(_) {
    var E = 0, x = [];
    this.__index__ >= 0 && this.__text_cache__ === _ && (x.push(h(this, E)), E = this.__last_index__);
    for (var M = E ? _.slice(E) : _; this.test(M); )
      x.push(h(this, E)), M = M.slice(this.__last_index__), E += this.__last_index__;
    return x.length ? x : null;
  }, k.prototype.matchAtStart = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length) return null;
    var E = this.re.schema_at_start.exec(_);
    if (!E) return null;
    var x = this.testSchemaAt(_, E[2], E[0].length);
    return x ? (this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + x, h(this, 0)) : null;
  }, k.prototype.tlds = function(_, E) {
    return _ = Array.isArray(_) ? _ : [_], E ? (this.__tlds__ = this.__tlds__.concat(_).sort().filter(function(x, M, $) {
      return x !== $[M - 1];
    }).reverse(), g(this), this) : (this.__tlds__ = _.slice(), this.__tlds_replaced__ = !0, g(this), this);
  }, k.prototype.normalize = function(_) {
    _.schema || (_.url = "http://" + _.url), _.schema === "mailto:" && !/^mailto:/i.test(_.url) && (_.url = "mailto:" + _.url);
  }, k.prototype.onCompile = function() {
  }, jl = k, jl;
}
var zo = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
var T_e = zo.exports, Sp;
function M_e() {
  return Sp || (Sp = 1, (function(e, t) {
    (function(n) {
      var r = t && !t.nodeType && t, s = e && !e.nodeType && e, o = typeof ao == "object" && ao;
      (o.global === o || o.window === o || o.self === o) && (n = o);
      var i, a = 2147483647, l = 36, u = 1, f = 26, c = 38, p = 700, d = 72, v = 128, g = "-", C = /^xn--/, h = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, w = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, _ = l - u, E = Math.floor, x = String.fromCharCode, M;
      function $(I) {
        throw new RangeError(w[I]);
      }
      function O(I, Z) {
        for (var K = I.length, me = []; K--; )
          me[K] = Z(I[K]);
        return me;
      }
      function D(I, Z) {
        var K = I.split("@"), me = "";
        K.length > 1 && (me = K[0] + "@", I = K[1]), I = I.replace(k, ".");
        var Se = I.split("."), Re = O(Se, Z).join(".");
        return me + Re;
      }
      function N(I) {
        for (var Z = [], K = 0, me = I.length, Se, Re; K < me; )
          Se = I.charCodeAt(K++), Se >= 55296 && Se <= 56319 && K < me ? (Re = I.charCodeAt(K++), (Re & 64512) == 56320 ? Z.push(((Se & 1023) << 10) + (Re & 1023) + 65536) : (Z.push(Se), K--)) : Z.push(Se);
        return Z;
      }
      function B(I) {
        return O(I, function(Z) {
          var K = "";
          return Z > 65535 && (Z -= 65536, K += x(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023), K += x(Z), K;
        }).join("");
      }
      function oe(I) {
        return I - 48 < 10 ? I - 22 : I - 65 < 26 ? I - 65 : I - 97 < 26 ? I - 97 : l;
      }
      function z(I, Z) {
        return I + 22 + 75 * (I < 26) - ((Z != 0) << 5);
      }
      function ie(I, Z, K) {
        var me = 0;
        for (I = K ? E(I / p) : I >> 1, I += E(I / Z); I > _ * f >> 1; me += l)
          I = E(I / _);
        return E(me + (_ + 1) * I / (I + c));
      }
      function j(I) {
        var Z = [], K = I.length, me, Se = 0, Re = v, Pe = d, We, qe, dt, pe, Me, T, L, q, Y;
        for (We = I.lastIndexOf(g), We < 0 && (We = 0), qe = 0; qe < We; ++qe)
          I.charCodeAt(qe) >= 128 && $("not-basic"), Z.push(I.charCodeAt(qe));
        for (dt = We > 0 ? We + 1 : 0; dt < K; ) {
          for (pe = Se, Me = 1, T = l; dt >= K && $("invalid-input"), L = oe(I.charCodeAt(dt++)), (L >= l || L > E((a - Se) / Me)) && $("overflow"), Se += L * Me, q = T <= Pe ? u : T >= Pe + f ? f : T - Pe, !(L < q); T += l)
            Y = l - q, Me > E(a / Y) && $("overflow"), Me *= Y;
          me = Z.length + 1, Pe = ie(Se - pe, me, pe == 0), E(Se / me) > a - Re && $("overflow"), Re += E(Se / me), Se %= me, Z.splice(Se++, 0, Re);
        }
        return B(Z);
      }
      function V(I) {
        var Z, K, me, Se, Re, Pe, We, qe, dt, pe, Me, T = [], L, q, Y, X;
        for (I = N(I), L = I.length, Z = v, K = 0, Re = d, Pe = 0; Pe < L; ++Pe)
          Me = I[Pe], Me < 128 && T.push(x(Me));
        for (me = Se = T.length, Se && T.push(g); me < L; ) {
          for (We = a, Pe = 0; Pe < L; ++Pe)
            Me = I[Pe], Me >= Z && Me < We && (We = Me);
          for (q = me + 1, We - Z > E((a - K) / q) && $("overflow"), K += (We - Z) * q, Z = We, Pe = 0; Pe < L; ++Pe)
            if (Me = I[Pe], Me < Z && ++K > a && $("overflow"), Me == Z) {
              for (qe = K, dt = l; pe = dt <= Re ? u : dt >= Re + f ? f : dt - Re, !(qe < pe); dt += l)
                X = qe - pe, Y = l - pe, T.push(
                  x(z(pe + X % Y, 0))
                ), qe = E(X / Y);
              T.push(x(z(qe, 0))), Re = ie(K, q, me == Se), K = 0, ++me;
            }
          ++K, ++Z;
        }
        return T.join("");
      }
      function H(I) {
        return D(I, function(Z) {
          return C.test(Z) ? j(Z.slice(4).toLowerCase()) : Z;
        });
      }
      function J(I) {
        return D(I, function(Z) {
          return h.test(Z) ? "xn--" + V(Z) : Z;
        });
      }
      if (i = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: "1.4.1",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
          decode: N,
          encode: B
        },
        decode: j,
        encode: V,
        toASCII: J,
        toUnicode: H
      }, r && s)
        if (e.exports == r)
          s.exports = i;
        else
          for (M in i)
            i.hasOwnProperty(M) && (r[M] = i[M]);
      else
        n.punycode = i;
    })(T_e);
  })(zo, zo.exports)), zo.exports;
}
var Vl, Ap;
function $_e() {
  return Ap || (Ap = 1, Vl = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }), Vl;
}
var Ul, Tp;
function L_e() {
  return Tp || (Tp = 1, Ul = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  }), Ul;
}
var Kl, Mp;
function I_e() {
  return Mp || (Mp = 1, Kl = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }), Kl;
}
var Wl, $p;
function O_e() {
  if ($p) return Wl;
  $p = 1;
  var e = nt(), t = qbe(), n = Hbe(), r = Ybe(), s = f_e(), o = E_e(), i = A_e(), a = W_(), l = M_e(), u = {
    default: $_e(),
    zero: L_e(),
    commonmark: I_e()
  }, f = /^(vbscript|javascript|file|data):/, c = /^data:image\/(gif|png|jpeg|webp);/;
  function p(h) {
    var k = h.trim().toLowerCase();
    return f.test(k) ? !!c.test(k) : !0;
  }
  var d = ["http:", "https:", "mailto:"];
  function v(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toASCII(k.hostname);
      } catch {
      }
    return a.encode(a.format(k));
  }
  function g(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toUnicode(k.hostname);
      } catch {
      }
    return a.decode(a.format(k), a.decode.defaultChars + "%");
  }
  function C(h, k) {
    if (!(this instanceof C))
      return new C(h, k);
    k || e.isString(h) || (k = h || {}, h = "default"), this.inline = new o(), this.block = new s(), this.core = new r(), this.renderer = new n(), this.linkify = new i(), this.validateLink = p, this.normalizeLink = v, this.normalizeLinkText = g, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(h), k && this.set(k);
  }
  return C.prototype.set = function(h) {
    return e.assign(this.options, h), this;
  }, C.prototype.configure = function(h) {
    var k = this, w;
    if (e.isString(h) && (w = h, h = u[w], !h))
      throw new Error('Wrong `markdown-it` preset "' + w + '", check name');
    if (!h)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return h.options && k.set(h.options), h.components && Object.keys(h.components).forEach(function(_) {
      h.components[_].rules && k[_].ruler.enableOnly(h.components[_].rules), h.components[_].rules2 && k[_].ruler2.enableOnly(h.components[_].rules2);
    }), this;
  }, C.prototype.enable = function(h, k) {
    var w = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(E) {
      w = w.concat(this[E].ruler.enable(h, !0));
    }, this), w = w.concat(this.inline.ruler2.enable(h, !0));
    var _ = h.filter(function(E) {
      return w.indexOf(E) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + _);
    return this;
  }, C.prototype.disable = function(h, k) {
    var w = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(E) {
      w = w.concat(this[E].ruler.disable(h, !0));
    }, this), w = w.concat(this.inline.ruler2.disable(h, !0));
    var _ = h.filter(function(E) {
      return w.indexOf(E) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + _);
    return this;
  }, C.prototype.use = function(h) {
    var k = [this].concat(Array.prototype.slice.call(arguments, 1));
    return h.apply(h, k), this;
  }, C.prototype.parse = function(h, k) {
    if (typeof h != "string")
      throw new Error("Input data should be a String");
    var w = new this.core.State(h, this, k);
    return this.core.process(w), w.tokens;
  }, C.prototype.render = function(h, k) {
    return k = k || {}, this.renderer.render(this.parse(h, k), this.options, k);
  }, C.prototype.parseInline = function(h, k) {
    var w = new this.core.State(h, this, k);
    return w.inlineMode = !0, this.core.process(w), w.tokens;
  }, C.prototype.renderInline = function(h, k) {
    return k = k || {}, this.renderer.render(this.parseInline(h, k), this.options, k);
  }, Wl = C, Wl;
}
var Gl, Lp;
function R_e() {
  return Lp || (Lp = 1, Gl = O_e()), Gl;
}
var P_e = R_e();
const D_e = /* @__PURE__ */ cf(P_e);
var Zl, Ip;
function B_e() {
  if (Ip) return Zl;
  Ip = 1;
  function e(r, s) {
    var o, i, a = r.attrs[r.attrIndex("href")][1];
    for (o = 0; o < s.length; ++o) {
      if (i = s[o], typeof i.matcher == "function") {
        if (i.matcher(a, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(r, s, o) {
    Object.keys(o).forEach(function(i) {
      var a, l = o[i];
      i === "className" && (i = "class"), a = s[r].attrIndex(i), a < 0 ? s[r].attrPush([i, l]) : s[r].attrs[a][1] = l;
    });
  }
  function n(r, s) {
    s ? s = Array.isArray(s) ? s : [s] : s = [], Object.freeze(s);
    var o = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(i, a, l, u, f) {
      var c = e(i[a], s), p = c && c.attrs;
      return p && t(a, i, p), o(i, a, l, u, f);
    };
  }
  return n.defaultRender = function(r, s, o, i, a) {
    return a.renderToken(r, s, o);
  }, Zl = n, Zl;
}
var N_e = B_e();
const F_e = /* @__PURE__ */ cf(N_e);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const z_e = () => {
}, ki = Array.isArray;
function Op(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function q_e(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!H_e(e[n], t[n]))
      return !1;
  return !0;
}
function H_e(e, t) {
  return ki(e) ? Rp(e, t) : ki(t) ? Rp(t, e) : e === t;
}
function Rp(e, t) {
  return ki(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
var Pp;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Pp || (Pp = {}));
var Dp;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Dp || (Dp = {}));
var Bp;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Bp || (Bp = {}));
const J_ = Symbol(""), j_e = Symbol("");
function Np(e) {
  const t = ze(J_), n = ze(j_e), r = P(() => {
    const l = b(e.to);
    return t.resolve(l);
  }), s = P(() => {
    const { matched: l } = r.value, { length: u } = l, f = l[u - 1], c = n.matched;
    if (!f || !c.length)
      return -1;
    const p = c.findIndex(Op.bind(null, f));
    if (p > -1)
      return p;
    const d = zp(l[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      zp(f) === d && // avoid comparing the child with its parent
      c[c.length - 1].path !== d ? c.findIndex(Op.bind(null, l[u - 2])) : p
    );
  }), o = P(() => s.value > -1 && W_e(n.params, r.value.params)), i = P(() => s.value > -1 && s.value === n.matched.length - 1 && q_e(n.params, r.value.params));
  function a(l = {}) {
    if (K_e(l)) {
      const u = t[b(e.replace) ? "replace" : "push"](
        b(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(z_e);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: P(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function V_e(e) {
  return e.length === 1 ? e[0] : e;
}
const U_e = /* @__PURE__ */ re({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Np,
  setup(e, { slots: t }) {
    const n = Sn(Np(e)), { options: r } = ze(J_), s = P(() => ({
      [qp(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [qp(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && V_e(t.default(n));
      return e.custom ? o : _n("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), Fp = U_e;
function K_e(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function W_e(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s)
        return !1;
    } else if (!ki(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function zp(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const qp = (e, t, n) => e ?? t ?? n;
U_("color-picker");
({
  ...j_
});
({
  ...Iu.props
});
var Us = { exports: {} }, pt = {}, Ks = { exports: {} }, Fr = {}, Hp;
function Q_() {
  if (Hp) return Fr;
  Hp = 1;
  function e() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function t(o, i, a) {
  }
  function n(o, i, a) {
  }
  var r = /javascript\s*\:/img;
  function s(o, i) {
    return r.test(i) ? "" : i;
  }
  return Fr.whiteList = e(), Fr.getDefaultWhiteList = e, Fr.onAttr = t, Fr.onIgnoreAttr = n, Fr.safeAttrValue = s, Fr;
}
var Xl, jp;
function ey() {
  return jp || (jp = 1, Xl = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(e) {
      return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
    }
  }), Xl;
}
var Yl, Vp;
function G_e() {
  if (Vp) return Yl;
  Vp = 1;
  var e = ey();
  function t(n, r) {
    n = e.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var s = n.length, o = !1, i = 0, a = 0, l = "";
    function u() {
      if (!o) {
        var p = e.trim(n.slice(i, a)), d = p.indexOf(":");
        if (d !== -1) {
          var v = e.trim(p.slice(0, d)), g = e.trim(p.slice(d + 1));
          if (v) {
            var C = r(i, l.length, v, g, p);
            C && (l += C + "; ");
          }
        }
      }
      i = a + 1;
    }
    for (; a < s; a++) {
      var f = n[a];
      if (f === "/" && n[a + 1] === "*") {
        var c = n.indexOf("*/", a + 2);
        if (c === -1) break;
        a = c + 1, i = a + 1, o = !1;
      } else f === "(" ? o = !0 : f === ")" ? o = !1 : f === ";" ? o || u() : f === `
` && u();
    }
    return e.trim(l);
  }
  return Yl = t, Yl;
}
var Jl, Up;
function Z_e() {
  if (Up) return Jl;
  Up = 1;
  var e = Q_(), t = G_e();
  ey();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var i = {};
    for (var a in o)
      i[a] = o[a];
    return i;
  }
  function s(o) {
    o = r(o || {}), o.whiteList = o.whiteList || e.whiteList, o.onAttr = o.onAttr || e.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || e.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || e.safeAttrValue, this.options = o;
  }
  return s.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var i = this, a = i.options, l = a.whiteList, u = a.onAttr, f = a.onIgnoreAttr, c = a.safeAttrValue, p = t(o, function(d, v, g, C, h) {
      var k = l[g], w = !1;
      if (k === !0 ? w = k : typeof k == "function" ? w = k(C) : k instanceof RegExp && (w = k.test(C)), w !== !0 && (w = !1), C = c(g, C), !!C) {
        var _ = {
          position: v,
          sourcePosition: d,
          source: h,
          isWhite: w
        };
        if (w) {
          var E = u(g, C, _);
          return n(E) ? g + ":" + C : E;
        } else {
          var E = f(g, C, _);
          if (!n(E))
            return E;
        }
      }
    });
    return p;
  }, Jl = s, Jl;
}
var Kp;
function Ou() {
  return Kp || (Kp = 1, (function(e, t) {
    var n = Q_(), r = Z_e();
    function s(i, a) {
      var l = new r(a);
      return l.process(i);
    }
    t = e.exports = s, t.FilterCSS = r;
    for (var o in n) t[o] = n[o];
    typeof window < "u" && (window.filterCSS = e.exports);
  })(Ks, Ks.exports)), Ks.exports;
}
var Ql, Wp;
function jf() {
  return Wp || (Wp = 1, Ql = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(e) {
      var t = /\s|\n|\t/, n = t.exec(e);
      return n ? n.index : -1;
    }
  }), Ql;
}
var Gp;
function ty() {
  if (Gp) return pt;
  Gp = 1;
  var e = Ou().FilterCSS, t = Ou().getDefaultWhiteList, n = jf();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var s = new e();
  function o(j, V, H) {
  }
  function i(j, V, H) {
  }
  function a(j, V, H) {
  }
  function l(j, V, H) {
  }
  function u(j) {
    return j.replace(c, "&lt;").replace(p, "&gt;");
  }
  function f(j, V, H, J) {
    if (H = D(H), V === "href" || V === "src") {
      if (H = n.trim(H), H === "#") return "#";
      if (!(H.substr(0, 7) === "http://" || H.substr(0, 8) === "https://" || H.substr(0, 7) === "mailto:" || H.substr(0, 4) === "tel:" || H.substr(0, 11) === "data:image/" || H.substr(0, 6) === "ftp://" || H.substr(0, 2) === "./" || H.substr(0, 3) === "../" || H[0] === "#" || H[0] === "/"))
        return "";
    } else if (V === "background") {
      if (k.lastIndex = 0, k.test(H))
        return "";
    } else if (V === "style") {
      if (w.lastIndex = 0, w.test(H) || (_.lastIndex = 0, _.test(H) && (k.lastIndex = 0, k.test(H))))
        return "";
      J !== !1 && (J = J || s, H = J.process(H));
    }
    return H = N(H), H;
  }
  var c = /</g, p = />/g, d = /"/g, v = /&quot;/g, g = /&#([a-zA-Z0-9]*);?/gim, C = /&colon;?/gim, h = /&newline;?/gim, k = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, w = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, _ = /u\s*r\s*l\s*\(.*/gi;
  function E(j) {
    return j.replace(d, "&quot;");
  }
  function x(j) {
    return j.replace(v, '"');
  }
  function M(j) {
    return j.replace(g, function(H, J) {
      return J[0] === "x" || J[0] === "X" ? String.fromCharCode(parseInt(J.substr(1), 16)) : String.fromCharCode(parseInt(J, 10));
    });
  }
  function $(j) {
    return j.replace(C, ":").replace(h, " ");
  }
  function O(j) {
    for (var V = "", H = 0, J = j.length; H < J; H++)
      V += j.charCodeAt(H) < 32 ? " " : j.charAt(H);
    return n.trim(V);
  }
  function D(j) {
    return j = x(j), j = M(j), j = $(j), j = O(j), j;
  }
  function N(j) {
    return j = E(j), j = u(j), j;
  }
  function B() {
    return "";
  }
  function oe(j, V) {
    typeof V != "function" && (V = function() {
    });
    var H = !Array.isArray(j);
    function J(K) {
      return H ? !0 : n.indexOf(j, K) !== -1;
    }
    var I = [], Z = !1;
    return {
      onIgnoreTag: function(K, me, Se) {
        if (J(K))
          if (Se.isClosing) {
            var Re = "[/removed]", Pe = Se.position + Re.length;
            return I.push([
              Z !== !1 ? Z : Se.position,
              Pe
            ]), Z = !1, Re;
          } else
            return Z || (Z = Se.position), "[removed]";
        else
          return V(K, me, Se);
      },
      remove: function(K) {
        var me = "", Se = 0;
        return n.forEach(I, function(Re) {
          me += K.slice(Se, Re[0]), Se = Re[1];
        }), me += K.slice(Se), me;
      }
    };
  }
  function z(j) {
    for (var V = "", H = 0; H < j.length; ) {
      var J = j.indexOf("<!--", H);
      if (J === -1) {
        V += j.slice(H);
        break;
      }
      V += j.slice(H, J);
      var I = j.indexOf("-->", J);
      if (I === -1)
        break;
      H = I + 3;
    }
    return V;
  }
  function ie(j) {
    var V = j.split("");
    return V = V.filter(function(H) {
      var J = H.charCodeAt(0);
      return J === 127 ? !1 : J <= 31 ? J === 10 || J === 13 : !0;
    }), V.join("");
  }
  return pt.whiteList = r(), pt.getDefaultWhiteList = r, pt.onTag = o, pt.onIgnoreTag = i, pt.onTagAttr = a, pt.onIgnoreTagAttr = l, pt.safeAttrValue = f, pt.escapeHtml = u, pt.escapeQuote = E, pt.unescapeQuote = x, pt.escapeHtmlEntities = M, pt.escapeDangerHtml5Entities = $, pt.clearNonPrintableCharacter = O, pt.friendlyAttrValue = D, pt.escapeAttrValue = N, pt.onIgnoreTagStripAll = B, pt.StripTagBody = oe, pt.stripCommentTag = z, pt.stripBlankChar = ie, pt.attributeWrapSign = '"', pt.cssFilter = s, pt.getDefaultCSSWhiteList = t, pt;
}
var Ws = {}, Zp;
function ny() {
  if (Zp) return Ws;
  Zp = 1;
  var e = jf();
  function t(c) {
    var p = e.spaceIndex(c), d;
    return p === -1 ? d = c.slice(1, -1) : d = c.slice(1, p + 1), d = e.trim(d).toLowerCase(), d.slice(0, 1) === "/" && (d = d.slice(1)), d.slice(-1) === "/" && (d = d.slice(0, -1)), d;
  }
  function n(c) {
    return c.slice(0, 2) === "</";
  }
  function r(c, p, d) {
    var v = "", g = 0, C = !1, h = !1, k = 0, w = c.length, _ = "", E = "";
    e: for (k = 0; k < w; k++) {
      var x = c.charAt(k);
      if (C === !1) {
        if (x === "<") {
          C = k;
          continue;
        }
      } else if (h === !1) {
        if (x === "<") {
          v += d(c.slice(g, k)), C = k, g = k;
          continue;
        }
        if (x === ">" || k === w - 1) {
          v += d(c.slice(g, C)), E = c.slice(C, k + 1), _ = t(E), v += p(
            C,
            v.length,
            _,
            E,
            n(E)
          ), g = k + 1, C = !1;
          continue;
        }
        if (x === '"' || x === "'")
          for (var M = 1, $ = c.charAt(k - M); $.trim() === "" || $ === "="; ) {
            if ($ === "=") {
              h = x;
              continue e;
            }
            $ = c.charAt(k - ++M);
          }
      } else if (x === h) {
        h = !1;
        continue;
      }
    }
    return g < w && (v += d(c.substr(g))), v;
  }
  var s = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(c, p) {
    var d = 0, v = 0, g = [], C = !1, h = c.length;
    function k(M, $) {
      if (M = e.trim(M), M = M.replace(s, "").toLowerCase(), !(M.length < 1)) {
        var O = p(M, $ || "");
        O && g.push(O);
      }
    }
    for (var w = 0; w < h; w++) {
      var _ = c.charAt(w), E, x;
      if (C === !1 && _ === "=") {
        C = c.slice(d, w), d = w + 1, v = c.charAt(d) === '"' || c.charAt(d) === "'" ? d : a(c, w + 1);
        continue;
      }
      if (C !== !1 && w === v) {
        if (x = c.indexOf(_, w + 1), x === -1)
          break;
        E = e.trim(c.slice(v + 1, x)), k(C, E), C = !1, w = x, d = w + 1;
        continue;
      }
      if (/\s|\n|\t/.test(_))
        if (c = c.replace(/\s|\n|\t/g, " "), C === !1)
          if (x = i(c, w), x === -1) {
            E = e.trim(c.slice(d, w)), k(E), C = !1, d = w + 1;
            continue;
          } else {
            w = x - 1;
            continue;
          }
        else if (x = l(c, w - 1), x === -1) {
          E = e.trim(c.slice(d, w)), E = f(E), k(C, E), C = !1, d = w + 1;
          continue;
        } else
          continue;
    }
    return d < c.length && (C === !1 ? k(c.slice(d)) : k(C, f(e.trim(c.slice(d))))), e.trim(g.join(" "));
  }
  function i(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function a(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "'" || d === '"' ? p : -1;
    }
  }
  function l(c, p) {
    for (; p > 0; p--) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function u(c) {
    return c[0] === '"' && c[c.length - 1] === '"' || c[0] === "'" && c[c.length - 1] === "'";
  }
  function f(c) {
    return u(c) ? c.substr(1, c.length - 2) : c;
  }
  return Ws.parseTag = r, Ws.parseAttr = o, Ws;
}
var ec, Xp;
function X_e() {
  if (Xp) return ec;
  Xp = 1;
  var e = Ou().FilterCSS, t = ty(), n = ny(), r = n.parseTag, s = n.parseAttr, o = jf();
  function i(c) {
    return c == null;
  }
  function a(c) {
    var p = o.spaceIndex(c);
    if (p === -1)
      return {
        html: "",
        closing: c[c.length - 2] === "/"
      };
    c = o.trim(c.slice(p + 1, -1));
    var d = c[c.length - 1] === "/";
    return d && (c = o.trim(c.slice(0, -1))), {
      html: c,
      closing: d
    };
  }
  function l(c) {
    var p = {};
    for (var d in c)
      p[d] = c[d];
    return p;
  }
  function u(c) {
    var p = {};
    for (var d in c)
      Array.isArray(c[d]) ? p[d.toLowerCase()] = c[d].map(function(v) {
        return v.toLowerCase();
      }) : p[d.toLowerCase()] = c[d];
    return p;
  }
  function f(c) {
    c = l(c || {}), c.stripIgnoreTag && (c.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), c.onIgnoreTag = t.onIgnoreTagStripAll), c.whiteList || c.allowList ? c.whiteList = u(c.whiteList || c.allowList) : c.whiteList = t.whiteList, this.attributeWrapSign = c.singleQuotedAttributeValue === !0 ? "'" : t.attributeWrapSign, c.onTag = c.onTag || t.onTag, c.onTagAttr = c.onTagAttr || t.onTagAttr, c.onIgnoreTag = c.onIgnoreTag || t.onIgnoreTag, c.onIgnoreTagAttr = c.onIgnoreTagAttr || t.onIgnoreTagAttr, c.safeAttrValue = c.safeAttrValue || t.safeAttrValue, c.escapeHtml = c.escapeHtml || t.escapeHtml, this.options = c, c.css === !1 ? this.cssFilter = !1 : (c.css = c.css || {}, this.cssFilter = new e(c.css));
  }
  return f.prototype.process = function(c) {
    if (c = c || "", c = c.toString(), !c) return "";
    var p = this, d = p.options, v = d.whiteList, g = d.onTag, C = d.onIgnoreTag, h = d.onTagAttr, k = d.onIgnoreTagAttr, w = d.safeAttrValue, _ = d.escapeHtml, E = p.attributeWrapSign, x = p.cssFilter;
    d.stripBlankChar && (c = t.stripBlankChar(c)), d.allowCommentTag || (c = t.stripCommentTag(c));
    var M = !1;
    d.stripIgnoreTagBody && (M = t.StripTagBody(
      d.stripIgnoreTagBody,
      C
    ), C = M.onIgnoreTag);
    var $ = r(
      c,
      function(O, D, N, B, oe) {
        var z = {
          sourcePosition: O,
          position: D,
          isClosing: oe,
          isWhite: Object.prototype.hasOwnProperty.call(v, N)
        }, ie = g(N, B, z);
        if (!i(ie)) return ie;
        if (z.isWhite) {
          if (z.isClosing)
            return "</" + N + ">";
          var j = a(B), V = v[N], H = s(j.html, function(J, I) {
            var Z = o.indexOf(V, J) !== -1, K = h(N, J, I, Z);
            return i(K) ? Z ? (I = w(N, J, I, x), I ? J + "=" + E + I + E : J) : (K = k(N, J, I, Z), i(K) ? void 0 : K) : K;
          });
          return B = "<" + N, H && (B += " " + H), j.closing && (B += " /"), B += ">", B;
        } else
          return ie = C(N, B, z), i(ie) ? _(B) : ie;
      },
      _
    );
    return M && ($ = M.remove($)), $;
  }, ec = f, ec;
}
var Yp;
function Y_e() {
  return Yp || (Yp = 1, (function(e, t) {
    var n = ty(), r = ny(), s = X_e();
    function o(a, l) {
      var u = new s(l);
      return u.process(a);
    }
    t = e.exports = o, t.filterXSS = o, t.FilterXSS = s, (function() {
      for (var a in n)
        t[a] = n[a];
      for (var l in r)
        t[l] = r[l];
    })(), typeof window < "u" && (window.filterXSS = e.exports);
    function i() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    i() && (self.filterXSS = e.exports);
  })(Us, Us.exports)), Us.exports;
}
Y_e();
({
  // @ts-expect-error TS doesn't understand this but it works
  ...Fp.props
  // <a> element "props" are passed as attributes
});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function Jo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jo = function(t) {
    return typeof t;
  } : Jo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jo(e);
}
function J_e(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q_e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function eye(e, t, n) {
  return t && Q_e(e.prototype, t), e;
}
function tye(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), r.forEach(function(s) {
      tye(e, s, n[s]);
    });
  }
  return e;
}
function nye(e, t) {
  return rye(e) || oye(e, t) || sye();
}
function rye(e) {
  if (Array.isArray(e)) return e;
}
function oye(e, t) {
  var n = [], r = !0, s = !1, o = void 0;
  try {
    for (var i = e[Symbol.iterator](), a; !(r = (a = i.next()).done) && (n.push(a.value), !(t && n.length === t)); r = !0)
      ;
  } catch (l) {
    s = !0, o = l;
  } finally {
    try {
      !r && i.return != null && i.return();
    } finally {
      if (s) throw o;
    }
  }
  return n;
}
function sye() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var Jp = function() {
}, Vf = {}, ry = {}, iye = null, oy = {
  mark: Jp,
  measure: Jp
};
try {
  typeof window < "u" && (Vf = window), typeof document < "u" && (ry = document), typeof MutationObserver < "u" && (iye = MutationObserver), typeof performance < "u" && (oy = performance);
} catch {
}
var aye = Vf.navigator || {}, Qp = aye.userAgent, eh = Qp === void 0 ? "" : Qp, oa = Vf, wn = ry, Gs = oy;
oa.document;
var lye = !!wn.documentElement && !!wn.head && typeof wn.addEventListener == "function" && typeof wn.createElement == "function";
~eh.indexOf("MSIE") || ~eh.indexOf("Trident/");
var nr = "___FONT_AWESOME___", cye = "fa", uye = "svg-inline--fa";
(function() {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
var sy = oa.FontAwesomeConfig || {};
function fye(e) {
  var t = wn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function dye(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (wn && typeof wn.querySelector == "function") {
  var pye = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  pye.forEach(function(e) {
    var t = nye(e, 2), n = t[0], r = t[1], s = dye(fye(n));
    s != null && (sy[r] = s);
  });
}
var hye = {
  familyPrefix: cye,
  replacementClass: uye,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}, Ru = sn({}, hye, sy);
Ru.autoReplaceSvg || (Ru.observeMutations = !1);
var iy = sn({}, Ru);
oa.FontAwesomeConfig = iy;
var rr = oa || {};
rr[nr] || (rr[nr] = {});
rr[nr].styles || (rr[nr].styles = {});
rr[nr].hooks || (rr[nr].hooks = {});
rr[nr].shims || (rr[nr].shims = []);
var Gn = rr[nr], gye = [], mye = function e() {
  wn.removeEventListener("DOMContentLoaded", e), Pu = 1, gye.map(function(t) {
    return t();
  });
}, Pu = !1;
lye && (Pu = (wn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wn.readyState), Pu || wn.addEventListener("DOMContentLoaded", mye));
var Uf = "pending", ay = "settled", Ci = "fulfilled", xi = "rejected", vye = function() {
}, ly = typeof global < "u" && typeof global.process < "u" && typeof global.process.emit == "function", bye = typeof setImmediate > "u" ? setTimeout : setImmediate, qo = [], Du;
function _ye() {
  for (var e = 0; e < qo.length; e++)
    qo[e][0](qo[e][1]);
  qo = [], Du = !1;
}
function Ei(e, t) {
  qo.push([e, t]), Du || (Du = !0, bye(_ye, 0));
}
function yye(e, t) {
  function n(s) {
    Kf(t, s);
  }
  function r(s) {
    gs(t, s);
  }
  try {
    e(n, r);
  } catch (s) {
    r(s);
  }
}
function cy(e) {
  var t = e.owner, n = t._state, r = t._data, s = e[n], o = e.then;
  if (typeof s == "function") {
    n = Ci;
    try {
      r = s(r);
    } catch (i) {
      gs(o, i);
    }
  }
  uy(o, r) || (n === Ci && Kf(o, r), n === xi && gs(o, r));
}
function uy(e, t) {
  var n;
  try {
    if (e === t)
      throw new TypeError("A promises callback cannot return that same promise.");
    if (t && (typeof t == "function" || Jo(t) === "object")) {
      var r = t.then;
      if (typeof r == "function")
        return r.call(t, function(s) {
          n || (n = !0, t === s ? fy(e, s) : Kf(e, s));
        }, function(s) {
          n || (n = !0, gs(e, s));
        }), !0;
    }
  } catch (s) {
    return n || gs(e, s), !0;
  }
  return !1;
}
function Kf(e, t) {
  (e === t || !uy(e, t)) && fy(e, t);
}
function fy(e, t) {
  e._state === Uf && (e._state = ay, e._data = t, Ei(wye, e));
}
function gs(e, t) {
  e._state === Uf && (e._state = ay, e._data = t, Ei(kye, e));
}
function dy(e) {
  e._then = e._then.forEach(cy);
}
function wye(e) {
  e._state = Ci, dy(e);
}
function kye(e) {
  e._state = xi, dy(e), !e._handled && ly && global.process.emit("unhandledRejection", e._data, e);
}
function Cye(e) {
  global.process.emit("rejectionHandled", e);
}
function fn(e) {
  if (typeof e != "function")
    throw new TypeError("Promise resolver " + e + " is not a function");
  if (!(this instanceof fn))
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  this._then = [], yye(e, this);
}
fn.prototype = {
  constructor: fn,
  _state: Uf,
  _then: null,
  _data: void 0,
  _handled: !1,
  then: function(t, n) {
    var r = {
      owner: this,
      then: new this.constructor(vye),
      fulfilled: t,
      rejected: n
    };
    return (n || t) && !this._handled && (this._handled = !0, this._state === xi && ly && Ei(Cye, this)), this._state === Ci || this._state === xi ? Ei(cy, r) : this._then.push(r), r.then;
  },
  catch: function(t) {
    return this.then(null, t);
  }
};
fn.all = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.all().");
  return new fn(function(t, n) {
    var r = [], s = 0;
    function o(l) {
      return s++, function(u) {
        r[l] = u, --s || t(r);
      };
    }
    for (var i = 0, a; i < e.length; i++)
      a = e[i], a && typeof a.then == "function" ? a.then(o(i), n) : r[i] = a;
    s || t(r);
  });
};
fn.race = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.race().");
  return new fn(function(t, n) {
    for (var r = 0, s; r < e.length; r++)
      s = e[r], s && typeof s.then == "function" ? s.then(t, n) : t(s);
  });
};
fn.resolve = function(e) {
  return e && Jo(e) === "object" && e.constructor === fn ? e : new fn(function(t) {
    t(e);
  });
};
fn.reject = function(e) {
  return new fn(function(t, n) {
    n(e);
  });
};
iy.measurePerformance && Gs && Gs.mark && Gs.measure;
var tc = function(t, n, r, s) {
  var o = Object.keys(t), i = o.length, a = n, l, u, f;
  for (r === void 0 ? (l = 1, f = t[o[0]]) : (l = 0, f = r); l < i; l++)
    u = o[l], f = a(f, t[u], u, t);
  return f;
};
function py(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, s = r === void 0 ? !1 : r, o = Object.keys(t).reduce(function(i, a) {
    var l = t[a], u = !!l.icon;
    return u ? i[l.iconName] = l.icon : i[a] = l, i;
  }, {});
  typeof Gn.hooks.addPack == "function" && !s ? Gn.hooks.addPack(e, o) : Gn.styles[e] = sn({}, Gn.styles[e] || {}, o), e === "fas" && py("fa", t);
}
var th = Gn.styles, xye = Gn.shims, hy = function() {
  var t = function(s) {
    return tc(th, function(o, i, a) {
      return o[a] = tc(i, s, {}), o;
    }, {});
  };
  t(function(r, s, o) {
    return s[3] && (r[s[3]] = o), r;
  }), t(function(r, s, o) {
    var i = s[2];
    return r[o] = o, i.forEach(function(a) {
      r[a] = o;
    }), r;
  });
  var n = "far" in th;
  tc(xye, function(r, s) {
    var o = s[0], i = s[1], a = s[2];
    return i === "far" && !n && (i = "fas"), r[o] = {
      prefix: i,
      iconName: a
    }, r;
  }, {});
};
hy();
Gn.styles;
function Bu(e) {
  this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = new Error().stack;
}
Bu.prototype = Object.create(Error.prototype);
Bu.prototype.constructor = Bu;
var sa = {
  fill: "currentColor"
}, gy = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
sn({}, sa, {
  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
});
var Wf = sn({}, gy, {
  attributeName: "opacity"
});
sn({}, sa, {
  cx: "256",
  cy: "364",
  r: "28"
}), sn({}, gy, {
  attributeName: "r",
  values: "28;14;28;28;14;28;"
}), sn({}, Wf, {
  values: "1;0;1;1;0;1;"
});
sn({}, sa, {
  opacity: "1",
  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
}), sn({}, Wf, {
  values: "1;0;0;0;0;1;"
});
sn({}, sa, {
  opacity: "0",
  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
}), sn({}, Wf, {
  values: "0;0;1;1;0;0;"
});
Gn.styles;
Gn.styles;
var Eye = /* @__PURE__ */ (function() {
  function e() {
    J_e(this, e), this.definitions = {};
  }
  return eye(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      var i = s.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(a) {
        n.definitions[a] = sn({}, n.definitions[a] || {}, i[a]), py(a, i[a]), hy();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var s = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(s).map(function(o) {
        var i = s[o], a = i.prefix, l = i.iconName, u = i.icon;
        n[a] || (n[a] = {}), n[a][l] = u;
      }), n;
    }
  }]), e;
})();
new Eye();
var Sye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Aye = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, k, w) {
      if (!u(k) || c(k) || p(k) || d(k) || l(k))
        return k;
      var _, E = 0, x = 0;
      if (f(k))
        for (_ = [], x = k.length; E < x; E++)
          _.push(n(h, k[E], w));
      else {
        _ = {};
        for (var M in k)
          Object.prototype.hasOwnProperty.call(k, M) && (_[h(M, w)] = n(h, k[M], w));
      }
      return _;
    }, r = function(h, k) {
      k = k || {};
      var w = k.separator || "_", _ = k.split || /(?=[A-Z])/;
      return h.split(_).join(w);
    }, s = function(h) {
      return v(h) ? h : (h = h.replace(/[\-_\s]+(.)?/g, function(k, w) {
        return w ? w.toUpperCase() : "";
      }), h.substr(0, 1).toLowerCase() + h.substr(1));
    }, o = function(h) {
      var k = s(h);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, i = function(h, k) {
      return r(h, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(h) {
      return typeof h == "function";
    }, u = function(h) {
      return h === Object(h);
    }, f = function(h) {
      return a.call(h) == "[object Array]";
    }, c = function(h) {
      return a.call(h) == "[object Date]";
    }, p = function(h) {
      return a.call(h) == "[object RegExp]";
    }, d = function(h) {
      return a.call(h) == "[object Boolean]";
    }, v = function(h) {
      return h = h - 0, h === h;
    }, g = function(h, k) {
      var w = k && "process" in k ? k.process : k;
      return typeof w != "function" ? h : function(_, E) {
        return w(_, h, E);
      };
    }, C = {
      camelize: s,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(h, k) {
        return n(g(s, k), h);
      },
      decamelizeKeys: function(h, k) {
        return n(g(i, k), h, k);
      },
      pascalizeKeys: function(h, k) {
        return n(g(o, k), h);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = C : t.humps = C;
  })(Sye);
})(Aye);
var Tye = !1;
try {
  Tye = !0;
} catch {
}
({
  ...V_
});
var nc, nh;
function Gf() {
  if (nh) return nc;
  nh = 1;
  var e = Array.isArray;
  return nc = e, nc;
}
var rc, rh;
function Mye() {
  if (rh) return rc;
  rh = 1;
  var e = typeof ao == "object" && ao && ao.Object === Object && ao;
  return rc = e, rc;
}
var oc, oh;
function Zf() {
  if (oh) return oc;
  oh = 1;
  var e = Mye(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return oc = n, oc;
}
var sc, sh;
function Xf() {
  if (sh) return sc;
  sh = 1;
  var e = Zf(), t = e.Symbol;
  return sc = t, sc;
}
var ic, ih;
function $ye() {
  if (ih) return ic;
  ih = 1;
  var e = Xf(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var a = n.call(i, s), l = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = r.call(i);
    return u && (a ? i[s] = l : delete i[s]), f;
  }
  return ic = o, ic;
}
var ac, ah;
function Lye() {
  if (ah) return ac;
  ah = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return ac = n, ac;
}
var lc, lh;
function my() {
  if (lh) return lc;
  lh = 1;
  var e = Xf(), t = $ye(), n = Lye(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(a) {
    return a == null ? a === void 0 ? s : r : o && o in Object(a) ? t(a) : n(a);
  }
  return lc = i, lc;
}
var cc, ch;
function Iye() {
  if (ch) return cc;
  ch = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return cc = e, cc;
}
var uc, uh;
function Yf() {
  if (uh) return uc;
  uh = 1;
  var e = my(), t = Iye(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return uc = r, uc;
}
var fc, fh;
function Oye() {
  if (fh) return fc;
  fh = 1;
  var e = Gf(), t = Yf(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function s(o, i) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return fc = s, fc;
}
var dc, dh;
function vy() {
  if (dh) return dc;
  dh = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return dc = e, dc;
}
var pc, ph;
function Rye() {
  if (ph) return pc;
  ph = 1;
  var e = my(), t = vy(), n = "[object AsyncFunction]", r = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == s || l == n || l == o;
  }
  return pc = i, pc;
}
var hc, hh;
function Pye() {
  if (hh) return hc;
  hh = 1;
  var e = Zf(), t = e["__core-js_shared__"];
  return hc = t, hc;
}
var gc, gh;
function Dye() {
  if (gh) return gc;
  gh = 1;
  var e = Pye(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return gc = n, gc;
}
var mc, mh;
function Bye() {
  if (mh) return mc;
  mh = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return mc = n, mc;
}
var vc, vh;
function Nye() {
  if (vh) return vc;
  vh = 1;
  var e = Rye(), t = Dye(), n = vy(), r = Bye(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(p) {
    if (!n(p) || t(p))
      return !1;
    var d = e(p) ? f : o;
    return d.test(r(p));
  }
  return vc = c, vc;
}
var bc, bh;
function Fye() {
  if (bh) return bc;
  bh = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return bc = e, bc;
}
var _c, _h;
function by() {
  if (_h) return _c;
  _h = 1;
  var e = Nye(), t = Fye();
  function n(r, s) {
    var o = t(r, s);
    return e(o) ? o : void 0;
  }
  return _c = n, _c;
}
var yc, yh;
function ia() {
  if (yh) return yc;
  yh = 1;
  var e = by(), t = e(Object, "create");
  return yc = t, yc;
}
var wc, wh;
function zye() {
  if (wh) return wc;
  wh = 1;
  var e = ia();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wc = t, wc;
}
var kc, kh;
function qye() {
  if (kh) return kc;
  kh = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return kc = e, kc;
}
var Cc, Ch;
function Hye() {
  if (Ch) return Cc;
  Ch = 1;
  var e = ia(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function s(o) {
    var i = this.__data__;
    if (e) {
      var a = i[o];
      return a === t ? void 0 : a;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Cc = s, Cc;
}
var xc, xh;
function jye() {
  if (xh) return xc;
  xh = 1;
  var e = ia(), t = Object.prototype, n = t.hasOwnProperty;
  function r(s) {
    var o = this.__data__;
    return e ? o[s] !== void 0 : n.call(o, s);
  }
  return xc = r, xc;
}
var Ec, Eh;
function Vye() {
  if (Eh) return Ec;
  Eh = 1;
  var e = ia(), t = "__lodash_hash_undefined__";
  function n(r, s) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && s === void 0 ? t : s, this;
  }
  return Ec = n, Ec;
}
var Sc, Sh;
function Uye() {
  if (Sh) return Sc;
  Sh = 1;
  var e = zye(), t = qye(), n = Hye(), r = jye(), s = Vye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Sc = o, Sc;
}
var Ac, Ah;
function Kye() {
  if (Ah) return Ac;
  Ah = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ac = e, Ac;
}
var Tc, Th;
function Wye() {
  if (Th) return Tc;
  Th = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Tc = e, Tc;
}
var Mc, Mh;
function aa() {
  if (Mh) return Mc;
  Mh = 1;
  var e = Wye();
  function t(n, r) {
    for (var s = n.length; s--; )
      if (e(n[s][0], r))
        return s;
    return -1;
  }
  return Mc = t, Mc;
}
var $c, $h;
function Gye() {
  if ($h) return $c;
  $h = 1;
  var e = aa(), t = Array.prototype, n = t.splice;
  function r(s) {
    var o = this.__data__, i = e(o, s);
    if (i < 0)
      return !1;
    var a = o.length - 1;
    return i == a ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return $c = r, $c;
}
var Lc, Lh;
function Zye() {
  if (Lh) return Lc;
  Lh = 1;
  var e = aa();
  function t(n) {
    var r = this.__data__, s = e(r, n);
    return s < 0 ? void 0 : r[s][1];
  }
  return Lc = t, Lc;
}
var Ic, Ih;
function Xye() {
  if (Ih) return Ic;
  Ih = 1;
  var e = aa();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Ic = t, Ic;
}
var Oc, Oh;
function Yye() {
  if (Oh) return Oc;
  Oh = 1;
  var e = aa();
  function t(n, r) {
    var s = this.__data__, o = e(s, n);
    return o < 0 ? (++this.size, s.push([n, r])) : s[o][1] = r, this;
  }
  return Oc = t, Oc;
}
var Rc, Rh;
function Jye() {
  if (Rh) return Rc;
  Rh = 1;
  var e = Kye(), t = Gye(), n = Zye(), r = Xye(), s = Yye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Rc = o, Rc;
}
var Pc, Ph;
function Qye() {
  if (Ph) return Pc;
  Ph = 1;
  var e = by(), t = Zf(), n = e(t, "Map");
  return Pc = n, Pc;
}
var Dc, Dh;
function e4e() {
  if (Dh) return Dc;
  Dh = 1;
  var e = Uye(), t = Jye(), n = Qye();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Dc = r, Dc;
}
var Bc, Bh;
function t4e() {
  if (Bh) return Bc;
  Bh = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Bc = e, Bc;
}
var Nc, Nh;
function la() {
  if (Nh) return Nc;
  Nh = 1;
  var e = t4e();
  function t(n, r) {
    var s = n.__data__;
    return e(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map;
  }
  return Nc = t, Nc;
}
var Fc, Fh;
function n4e() {
  if (Fh) return Fc;
  Fh = 1;
  var e = la();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Fc = t, Fc;
}
var zc, zh;
function r4e() {
  if (zh) return zc;
  zh = 1;
  var e = la();
  function t(n) {
    return e(this, n).get(n);
  }
  return zc = t, zc;
}
var qc, qh;
function o4e() {
  if (qh) return qc;
  qh = 1;
  var e = la();
  function t(n) {
    return e(this, n).has(n);
  }
  return qc = t, qc;
}
var Hc, Hh;
function s4e() {
  if (Hh) return Hc;
  Hh = 1;
  var e = la();
  function t(n, r) {
    var s = e(this, n), o = s.size;
    return s.set(n, r), this.size += s.size == o ? 0 : 1, this;
  }
  return Hc = t, Hc;
}
var jc, jh;
function i4e() {
  if (jh) return jc;
  jh = 1;
  var e = e4e(), t = n4e(), n = r4e(), r = o4e(), s = s4e();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, jc = o, jc;
}
var Vc, Vh;
function a4e() {
  if (Vh) return Vc;
  Vh = 1;
  var e = i4e(), t = "Expected a function";
  function n(r, s) {
    if (typeof r != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, a = s ? s.apply(this, i) : i[0], l = o.cache;
      if (l.has(a))
        return l.get(a);
      var u = r.apply(this, i);
      return o.cache = l.set(a, u) || l, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, Vc = n, Vc;
}
var Uc, Uh;
function l4e() {
  if (Uh) return Uc;
  Uh = 1;
  var e = a4e(), t = 500;
  function n(r) {
    var s = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = s.cache;
    return s;
  }
  return Uc = n, Uc;
}
var Kc, Kh;
function c4e() {
  if (Kh) return Kc;
  Kh = 1;
  var e = l4e(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(s) {
    var o = [];
    return s.charCodeAt(0) === 46 && o.push(""), s.replace(t, function(i, a, l, u) {
      o.push(l ? u.replace(n, "$1") : a || i);
    }), o;
  });
  return Kc = r, Kc;
}
var Wc, Wh;
function u4e() {
  if (Wh) return Wc;
  Wh = 1;
  function e(t, n) {
    for (var r = -1, s = t == null ? 0 : t.length, o = Array(s); ++r < s; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Wc = e, Wc;
}
var Gc, Gh;
function f4e() {
  if (Gh) return Gc;
  Gh = 1;
  var e = Xf(), t = u4e(), n = Gf(), r = Yf(), s = e ? e.prototype : void 0, o = s ? s.toString : void 0;
  function i(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, i) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }
  return Gc = i, Gc;
}
var Zc, Zh;
function d4e() {
  if (Zh) return Zc;
  Zh = 1;
  var e = f4e();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Zc = t, Zc;
}
var Xc, Xh;
function p4e() {
  if (Xh) return Xc;
  Xh = 1;
  var e = Gf(), t = Oye(), n = c4e(), r = d4e();
  function s(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return Xc = s, Xc;
}
var Yc, Yh;
function h4e() {
  if (Yh) return Yc;
  Yh = 1;
  var e = Yf();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Yc = t, Yc;
}
var Jc, Jh;
function g4e() {
  if (Jh) return Jc;
  Jh = 1;
  var e = p4e(), t = h4e();
  function n(r, s) {
    s = e(s, r);
    for (var o = 0, i = s.length; r != null && o < i; )
      r = r[t(s[o++])];
    return o && o == i ? r : void 0;
  }
  return Jc = n, Jc;
}
var Qc, Qh;
function m4e() {
  if (Qh) return Qc;
  Qh = 1;
  var e = g4e();
  function t(n, r, s) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? s : o;
  }
  return Qc = t, Qc;
}
m4e();
function v4e(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const s = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), i = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, a = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      s
    ]
  };
  s.contains.push(a);
  const l = {
    match: /\\"/
  }, u = {
    className: "string",
    begin: /'/,
    end: /'/
  }, f = {
    match: /\\'/
  }, c = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, p = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], d = e.SHEBANG({
    binary: `(${p.join("|")})`,
    relevance: 10
  }), v = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, g = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], C = [
    "true",
    "false"
  ], h = { match: /(\/[a-z._-]+)+/ }, k = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], w = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], _ = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], E = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: g,
      literal: C,
      built_in: [
        ...k,
        ...w,
        // Shell modifiers
        "set",
        "shopt",
        ..._,
        ...E
      ]
    },
    contains: [
      d,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      v,
      c,
      o,
      i,
      h,
      a,
      l,
      u,
      f,
      n
    ]
  };
}
function b4e(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], a = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a,
    illegal: /#/
  }, f = {
    begin: /\{\{/,
    relevance: 0
  }, c = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", d = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, v = `\\b|${r.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${d}))[eE][+-]?(${p})[jJ]?(?=${v})`
      },
      {
        begin: `(${d})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${v})`
      }
    ]
  }, C = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: a,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, h = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: a,
        contains: [
          "self",
          l,
          g,
          c,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    c,
    g,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: a,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      g,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      c,
      C,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [h]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          h,
          c
        ]
      }
    ]
  };
}
const Si = "[A-Za-z$_][0-9A-Za-z$_]*", _y = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], yy = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], wy = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], ky = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Cy = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], xy = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Ey = [].concat(
  Cy,
  wy,
  ky
);
function _4e(e) {
  const t = e.regex, n = (H, { after: J }) => {
    const I = "</" + H[0].slice(1);
    return H.input.indexOf(I, J) !== -1;
  }, r = Si, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, J) => {
      const I = H[0].length + H.index, Z = H.input[I];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        J.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: I }) || J.ignoreMatch());
      let K;
      const me = H.input.substring(I);
      if (K = me.match(/^\s*=/)) {
        J.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        J.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Si,
    keyword: _y,
    literal: yy,
    built_in: Ey,
    "variable.language": xy
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, w = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    v,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = w.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(w)
  });
  const _ = [].concat(k, p.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: E
  }, M = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...wy,
        ...ky
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      B([
        ...Cy,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, z = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      v,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      z,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      N,
      M,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function y4e(e) {
  const t = e.regex, n = _4e(e), r = Si, s = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, i = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: s
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, a = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], u = {
    $pattern: Si,
    keyword: _y.concat(l),
    literal: yy,
    built_in: Ey.concat(s),
    "variable.language": xy
  }, f = {
    className: "meta",
    begin: "@" + r
  }, c = (g, C, h) => {
    const k = g.contains.findIndex((w) => w.label === C);
    if (k === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(k, 1, h);
  };
  Object.assign(n.keywords, u), n.exports.PARAMS_CONTAINS.push(f);
  const p = n.contains.find((g) => g.scope === "attr"), d = Object.assign(
    {},
    p,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    d
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    f,
    o,
    i,
    d
    // Added for optional property assignment highlighting
  ]), c(n, "shebang", e.SHEBANG()), c(n, "use_strict", a);
  const v = n.contains.find((g) => g.label === "func.def");
  return v.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
const w4e = /* @__PURE__ */ re({
  name: "VueMarkdown",
  props: {
    source: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      required: !1
    }
  },
  setup(e) {
    const t = W(new D_e(e.options ?? {}));
    for (const r of e.plugins ?? [])
      t.value.use(r);
    const n = P(() => t.value.render(e.source));
    return () => _n("div", { innerHTML: n.value });
  }
}), k4e = {
  key: 0,
  class: "chat-message-actions"
}, C4e = {
  key: 2,
  class: "chat-message-files"
}, Nu = /* @__PURE__ */ re({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    Vn.registerLanguage("javascript", Tg), Vn.registerLanguage("typescript", y4e), Vn.registerLanguage("python", b4e), Vn.registerLanguage("xml", Mg), Vn.registerLanguage("bash", v4e);
    const { message: r } = Ri(n), { options: s } = bs(), o = W(null), i = W({}), a = P(() => r.value.text || "&lt;Empty response&gt;"), l = P(() => ({
      "chat-message-from-user": r.value.sender === "user",
      "chat-message-from-bot": r.value.sender === "bot",
      "chat-message-transparent": r.value.transparent === !0
    })), u = (v) => {
      v.use(F_e, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, f = () => {
      var v;
      (v = o.value) != null && v.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, c = {
      highlight(v, g) {
        if (g && Vn.getLanguage(g))
          try {
            return Vn.highlight(v, { language: g }).value;
          } catch {
          }
        return "";
      }
    }, p = { ...(s == null ? void 0 : s.messageComponents) ?? {} };
    t({ scrollToView: f });
    const d = async (v) => await new Promise((g, C) => {
      const h = new FileReader();
      h.onload = () => g(h.result), h.onerror = C, h.readAsDataURL(v);
    });
    return it(async () => {
      if (r.value.files)
        for (const v of r.value.files)
          try {
            const g = await d(v);
            i.value[v.name] = g;
          } catch (g) {
            console.error("Error reading file:", g);
          }
    }), (v, g) => (y(), A("div", {
      ref_key: "messageContainer",
      ref: o,
      class: Q(["chat-message", l.value])
    }, [
      v.$slots.beforeMessage ? (y(), A("div", k4e, [
        we(v.$slots, "beforeMessage", li(of({ message: b(r) })))
      ])) : _e("", !0),
      we(v.$slots, "default", {}, () => [
        b(r).type === "component" && p[b(r).key] ? (y(), ue(Pt(p[b(r).key]), li(gt({ key: 0 }, b(r).arguments)), null, 16)) : (y(), ue(b(w4e), {
          key: 1,
          class: "chat-message-markdown",
          source: a.value,
          options: c,
          plugins: [u]
        }, null, 8, ["source", "plugins"])),
        (b(r).files ?? []).length > 0 ? (y(), A("div", C4e, [
          (y(!0), A(et, null, Cn(b(r).files ?? [], (C) => (y(), A("div", {
            key: C.name,
            class: "chat-message-file"
          }, [
            Ce($g, {
              file: C,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : _e("", !0)
      ])
    ], 2));
  }
}), x4e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E4e(e, t) {
  return y(), A("svg", x4e, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const S4e = { name: "mdi-chat", render: E4e }, A4e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T4e(e, t) {
  return y(), A("svg", A4e, t[0] || (t[0] = [
    m("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const M4e = { name: "mdi-chevron-down", render: T4e }, $4e = { class: "chat-window-wrapper" }, L4e = { class: "chat-window" }, I4e = /* @__PURE__ */ re({
  __name: "ChatWindow",
  setup(e) {
    const t = W(!1);
    function n() {
      t.value = !t.value, t.value && Ue(() => {
        Vt.emit("scrollToBottom");
      });
    }
    return (r, s) => (y(), A("div", $4e, [
      Ce(Xr, { name: "chat-window-transition" }, {
        default: he(() => [
          Ut(m("div", L4e, [
            Ce(Sy)
          ], 512), [
            [Qn, t.value]
          ])
        ]),
        _: 1
      }),
      m("div", {
        class: "chat-window-toggle",
        onClick: n
      }, [
        Ce(Xr, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: he(() => [
            t.value ? (y(), ue(b(M4e), {
              key: 1,
              height: "32",
              width: "32"
            })) : (y(), ue(b(S4e), {
              key: 0,
              height: "32",
              width: "32"
            }))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), O4e = /* @__PURE__ */ re({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, r = W(), s = P(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return it(() => {
      var o;
      (o = r.value) == null || o.scrollToView();
    }), (o, i) => (y(), ue(b(Nu), {
      ref_key: "messageContainer",
      ref: r,
      class: Q(s.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: he(() => i[0] || (i[0] = [
        m("div", { class: "chat-message-typing-body" }, [
          m("span", { class: "chat-message-typing-circle" }),
          m("span", { class: "chat-message-typing-circle" }),
          m("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])),
      _: 1
    }, 8, ["class"]));
  }
}), R4e = {
  key: 0,
  class: "empty-container"
}, P4e = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, D4e = {
  key: 1,
  class: "chat-messages-list"
}, B4e = /* @__PURE__ */ re({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = uf(), n = W([]), { initialMessages: r, waitingForResponse: s } = t;
    return Te(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && b(r).length === 0 && o.messages.length === 0 ? (y(), A("div", R4e, [
      m("div", P4e, [
        Ce(b(ff), {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        Ce(b(iS), {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: he(() => [
            Zr(Je(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (y(), A("div", D4e, [
      (y(!0), A(et, null, Cn(b(r), (a) => (y(), ue(Nu, {
        key: a.id,
        message: a
      }, null, 8, ["message"]))), 128)),
      (y(!0), A(et, null, Cn(o.messages, (a) => (y(), ue(Nu, {
        key: a.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: a
      }, {
        beforeMessage: he(({ message: l }) => [
          we(o.$slots, "beforeMessage", gt({ ref_for: !0 }, { message: l }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      b(s) ? (y(), ue(O4e, { key: 0 })) : _e("", !0)
    ]));
  }
}), N4e = { class: "chat-heading" }, F4e = ["title"], z4e = { key: 0 }, Sy = /* @__PURE__ */ re({
  __name: "Chat",
  setup(e) {
    const { t } = Hi(), n = uf(), { messages: r, currentSessionId: s } = n, { options: o } = bs(), i = P(() => o.mode === "window" && o.showWindowCloseButton);
    async function a() {
      n.startNewSession && (n.startNewSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    async function l() {
      n.loadPreviousSession && (await n.loadPreviousSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    function u() {
      Vt.emit("close");
    }
    return it(async () => {
      await l(), !o.showWelcomeScreen && !s.value && await a();
    }), (f, c) => (y(), ue(e6, { class: "chat-wrapper" }, {
      header: he(() => [
        m("div", N4e, [
          m("h1", null, Je(b(t)("title")), 1),
          i.value ? (y(), A("button", {
            key: 0,
            class: "chat-close-button",
            title: b(t)("closeButtonTooltip"),
            onClick: u
          }, [
            Ce(b(Xw), {
              height: "18",
              width: "18"
            })
          ], 8, F4e)) : _e("", !0)
        ]),
        b(t)("subtitle") ? (y(), A("p", z4e, Je(b(t)("subtitle")), 1)) : _e("", !0)
      ]),
      footer: he(() => [
        b(s) ? (y(), ue(Xk, { key: 0 })) : (y(), ue(ck, { key: 1 }))
      ]),
      default: he(() => [
        !b(s) && b(o).showWelcomeScreen ? (y(), ue(nk, {
          key: 0,
          "onClick:button": a
        })) : (y(), ue(B4e, {
          key: 1,
          messages: b(r)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), q4e = /* @__PURE__ */ re({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = bs(), n = P(() => t.mode === "fullscreen");
    return it(() => {
      Vn.registerLanguage("xml", Mg), Vn.registerLanguage("javascript", Tg);
    }), (r, s) => n.value ? (y(), ue(Sy, {
      key: 0,
      class: "n8n-chat"
    })) : (y(), ue(I4e, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function j4e(e) {
  var s, o;
  const t = {
    ...Ro,
    ...e,
    webhookConfig: {
      ...Ro.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Ro.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(s = Ro.i18n) == null ? void 0 : s.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Ro.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? hw;
  typeof n == "string" && Mw(n);
  const r = fw(q4e);
  return r.use(qw, t), r.mount(n), r;
}
export {
  j4e as createChat
};
