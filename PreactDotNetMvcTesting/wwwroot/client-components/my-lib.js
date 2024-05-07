var B, h, h_, x, e_, v_, q, J, O, Z, P = {}, m_ = [], C_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, K = Array.isArray;
function S(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function y_(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function g_(e, _, t) {
  var n, r, i, c = {};
  for (i in _)
    i == "key" ? n = _[i] : i == "ref" ? r = _[i] : c[i] = _[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? B.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      c[i] === void 0 && (c[i] = e.defaultProps[i]);
  return M(e, c, n, r, null);
}
function M(e, _, t, n, r) {
  var i = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r ?? ++h_, __i: -1, __u: 0 };
  return r == null && h.vnode != null && h.vnode(i), i;
}
function I(e) {
  return e.children;
}
function D(e, _) {
  this.props = e, this.context = _;
}
function C(e, _) {
  if (_ == null)
    return e.__ ? C(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? C(e) : null;
}
function k_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return k_(e);
  }
}
function t_(e) {
  (!e.__d && (e.__d = !0) && x.push(e) && !V.__r++ || e_ !== h.debounceRendering) && ((e_ = h.debounceRendering) || v_)(V);
}
function V() {
  var e, _, t, n, r, i, c, u;
  for (x.sort(q); e = x.shift(); )
    e.__d && (_ = x.length, n = void 0, i = (r = (t = e).__v).__e, c = [], u = [], t.__P && ((n = S({}, r)).__v = r.__v + 1, h.vnode && h.vnode(n), Q(t.__P, n, r, t.__n, t.__P.ownerSVGElement !== void 0, 32 & r.__u ? [i] : null, c, i ?? C(r), !!(32 & r.__u), u), n.__v = r.__v, n.__.__k[n.__i] = n, $_(c, n, u), n.__e != i && k_(n)), x.length > _ && x.sort(q));
  V.__r = 0;
}
function b_(e, _, t, n, r, i, c, u, s, l, a) {
  var o, p, f, y, $, g = n && n.__k || m_, d = _.length;
  for (t.__d = s, F_(t, _, g), s = t.__d, o = 0; o < d; o++)
    (f = t.__k[o]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? P : g[f.__i] || P, f.__i = o, Q(e, f, p, r, i, c, u, s, l, a), y = f.__e, f.ref && p.ref != f.ref && (p.ref && X(p.ref, null, f), a.push(f.ref, f.__c || y, f)), $ == null && y != null && ($ = y), 65536 & f.__u || p.__k === f.__k ? (s && !s.isConnected && (s = C(p)), s = w_(f, s, e)) : typeof f.type == "function" && f.__d !== void 0 ? s = f.__d : y && (s = y.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = s, t.__e = $;
}
function F_(e, _, t) {
  var n, r, i, c, u, s = _.length, l = t.length, a = l, o = 0;
  for (e.__k = [], n = 0; n < s; n++)
    c = n + o, (r = e.__k[n] = (r = _[n]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? M(null, r, null, null, null) : K(r) ? M(I, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? M(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, u = P_(r, t, c, a), r.__i = u, i = null, u !== -1 && (a--, (i = t[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && o--, typeof r.type != "function" && (r.__u |= 65536)) : u !== c && (u === c + 1 ? o++ : u > c ? a > s - c ? o += u - c : o-- : u < c ? u == c - 1 && (o = u - c) : o = 0, u !== n + o && (r.__u |= 65536))) : (i = t[c]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = C(i)), z(i, i, !1), t[c] = null, a--);
  if (a)
    for (n = 0; n < l; n++)
      (i = t[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = C(i)), z(i, i));
}
function w_(e, _, t) {
  var n, r;
  if (typeof e.type == "function") {
    for (n = e.__k, r = 0; n && r < n.length; r++)
      n[r] && (n[r].__ = e, _ = w_(n[r], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function P_(e, _, t, n) {
  var r = e.key, i = e.type, c = t - 1, u = t + 1, s = _[t];
  if (s === null || s && r == s.key && i === s.type && !(131072 & s.__u))
    return t;
  if (n > (s != null && !(131072 & s.__u) ? 1 : 0))
    for (; c >= 0 || u < _.length; ) {
      if (c >= 0) {
        if ((s = _[c]) && !(131072 & s.__u) && r == s.key && i === s.type)
          return c;
        c--;
      }
      if (u < _.length) {
        if ((s = _[u]) && !(131072 & s.__u) && r == s.key && i === s.type)
          return u;
        u++;
      }
    }
  return -1;
}
function n_(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || C_.test(_) ? t : t + "px";
}
function T(e, _, t, n, r) {
  var i;
  _:
    if (_ === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (_ in n)
            t && _ in t || n_(e.style, _, "");
        if (t)
          for (_ in t)
            n && t[_] === n[_] || n_(e.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      i = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e || _ === "onFocusOut" || _ === "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + i] = t, t ? n ? t.u = n.u : (t.u = J, e.addEventListener(_, i ? Z : O, i)) : e.removeEventListener(_, i ? Z : O, i);
    else {
      if (r)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ in e)
        try {
          e[_] = t ?? "";
          break _;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function o_(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null)
        _.t = J++;
      else if (_.t < t.u)
        return;
      return t(h.event ? h.event(_) : _);
    }
  };
}
function Q(e, _, t, n, r, i, c, u, s, l) {
  var a, o, p, f, y, $, g, d, k, H, A, F, __, E, j, w = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (s = !!(32 & t.__u), i = [u = _.__e = t.__e]), (a = h.__b) && a(_);
  _:
    if (typeof w == "function")
      try {
        if (d = _.props, k = (a = w.contextType) && n[a.__c], H = a ? k ? k.props.value : a.__ : n, t.__c ? g = (o = _.__c = t.__c).__ = o.__E : ("prototype" in w && w.prototype.render ? _.__c = o = new w(d, H) : (_.__c = o = new D(d, H), o.constructor = w, o.render = E_), k && k.sub(o), o.props = d, o.state || (o.state = {}), o.context = H, o.__n = n, p = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), w.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = S({}, o.__s)), S(o.__s, w.getDerivedStateFromProps(d, o.__s))), f = o.props, y = o.state, o.__v = _, p)
          w.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && d !== f && o.componentWillReceiveProps != null && o.componentWillReceiveProps(d, H), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(d, o.__s, H) === !1 || _.__v === t.__v)) {
            for (_.__v !== t.__v && (o.props = d, o.state = o.__s, o.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(N) {
              N && (N.__ = _);
            }), A = 0; A < o._sb.length; A++)
              o.__h.push(o._sb[A]);
            o._sb = [], o.__h.length && c.push(o);
            break _;
          }
          o.componentWillUpdate != null && o.componentWillUpdate(d, o.__s, H), o.componentDidUpdate != null && o.__h.push(function() {
            o.componentDidUpdate(f, y, $);
          });
        }
        if (o.context = H, o.props = d, o.__P = e, o.__e = !1, F = h.__r, __ = 0, "prototype" in w && w.prototype.render) {
          for (o.state = o.__s, o.__d = !1, F && F(_), a = o.render(o.props, o.state, o.context), E = 0; E < o._sb.length; E++)
            o.__h.push(o._sb[E]);
          o._sb = [];
        } else
          do
            o.__d = !1, F && F(_), a = o.render(o.props, o.state, o.context), o.state = o.__s;
          while (o.__d && ++__ < 25);
        o.state = o.__s, o.getChildContext != null && (n = S(S({}, n), o.getChildContext())), p || o.getSnapshotBeforeUpdate == null || ($ = o.getSnapshotBeforeUpdate(f, y)), b_(e, K(j = a != null && a.type === I && a.key == null ? a.props.children : a) ? j : [j], _, t, n, r, i, c, u, s, l), o.base = _.__e, _.__u &= -161, o.__h.length && c.push(o), g && (o.__E = o.__ = null);
      } catch (N) {
        _.__v = null, s || i != null ? (_.__e = u, _.__u |= s ? 160 : 32, i[i.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), h.__e(N, _, t);
      }
    else
      i == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = A_(t.__e, _, t, n, r, i, c, s, l);
  (a = h.diffed) && a(_);
}
function $_(e, _, t) {
  _.__d = void 0;
  for (var n = 0; n < t.length; n++)
    X(t[n], t[++n], t[++n]);
  h.__c && h.__c(_, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(i) {
        i.call(r);
      });
    } catch (i) {
      h.__e(i, r.__v);
    }
  });
}
function A_(e, _, t, n, r, i, c, u, s) {
  var l, a, o, p, f, y, $, g = t.props, d = _.props, k = _.type;
  if (k === "svg" && (r = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((f = i[l]) && "setAttribute" in f == !!k && (k ? f.localName === k : f.nodeType === 3)) {
        e = f, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (k === null)
      return document.createTextNode(d);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, d.is && d), i = null, u = !1;
  }
  if (k === null)
    g === d || u && e.data === d || (e.data = d);
  else {
    if (i = i && B.call(e.childNodes), g = t.props || P, !u && i != null)
      for (g = {}, l = 0; l < e.attributes.length; l++)
        g[(f = e.attributes[l]).name] = f.value;
    for (l in g)
      if (f = g[l], l != "children") {
        if (l == "dangerouslySetInnerHTML")
          o = f;
        else if (l !== "key" && !(l in d)) {
          if (l == "value" && "defaultValue" in d || l == "checked" && "defaultChecked" in d)
            continue;
          T(e, l, null, f, r);
        }
      }
    for (l in d)
      f = d[l], l == "children" ? p = f : l == "dangerouslySetInnerHTML" ? a = f : l == "value" ? y = f : l == "checked" ? $ = f : l === "key" || u && typeof f != "function" || g[l] === f || T(e, l, f, g[l], r);
    if (a)
      u || o && (a.__html === o.__html || a.__html === e.innerHTML) || (e.innerHTML = a.__html), _.__k = [];
    else if (o && (e.innerHTML = ""), b_(e, K(p) ? p : [p], _, t, n, r && k !== "foreignObject", i, c, i ? i[0] : t.__k && C(t, 0), u, s), i != null)
      for (l = i.length; l--; )
        i[l] != null && y_(i[l]);
    u || (l = "value", y !== void 0 && (y !== e[l] || k === "progress" && !y || k === "option" && y !== g[l]) && T(e, l, y, g[l], !1), l = "checked", $ !== void 0 && $ !== e[l] && T(e, l, $, g[l], !1));
  }
  return e;
}
function X(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (n) {
    h.__e(n, t);
  }
}
function z(e, _, t) {
  var n, r;
  if (h.unmount && h.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || X(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        h.__e(i, _);
      }
    n.base = n.__P = null;
  }
  if (n = e.__k)
    for (r = 0; r < n.length; r++)
      n[r] && z(n[r], _, t || typeof e.type != "function");
  t || e.__e == null || y_(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function E_(e, _, t) {
  return this.constructor(e, t);
}
function N_(e, _, t) {
  var n, r, i, c;
  h.__ && h.__(e, _), r = (n = typeof t == "function") ? null : _.__k, i = [], c = [], Q(_, e = (!n && t || _).__k = g_(I, null, [e]), r || P, P, _.ownerSVGElement !== void 0, !n && t ? [t] : r ? null : _.firstChild ? B.call(_.childNodes) : null, i, !n && t ? t : r ? r.__e : _.firstChild, n, c), $_(i, e, c);
}
B = m_.slice, h = { __e: function(e, _, t, n) {
  for (var r, i, c; _ = _.__; )
    if ((r = _.__c) && !r.__)
      try {
        if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), c = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), c = r.__d), c)
          return r.__E = r;
      } catch (u) {
        e = u;
      }
  throw e;
} }, h_ = 0, D.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = S({}, this.state), typeof e == "function" && (e = e(S({}, t), this.props)), e && S(t, e), e != null && this.__v && (_ && this._sb.push(_), t_(this));
}, D.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), t_(this));
}, D.prototype.render = I, x = [], v_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, q = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, V.__r = 0, J = 0, O = o_(!1), Z = o_(!0);
const T_ = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e";
var W, v, R, r_, G = 0, H_ = [], U = [], m = h, i_ = m.__b, c_ = m.__r, l_ = m.diffed, u_ = m.__c, s_ = m.unmount, f_ = m.__;
function S_(e, _) {
  m.__h && m.__h(v, e, G || _), G = 0;
  var t = v.__H || (v.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: U }), t.__[e];
}
function a_(e) {
  return G = 1, M_(x_, e);
}
function M_(e, _, t) {
  var n = S_(W++, 2);
  if (n.t = e, !n.__c && (n.__ = [x_(void 0, _), function(u) {
    var s = n.__N ? n.__N[0] : n.__[0], l = n.t(s, u);
    s !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = v, !v.u)) {
    var r = function(u, s, l) {
      if (!n.__c.__H)
        return !0;
      var a = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (a.every(function(p) {
        return !p.__N;
      }))
        return !i || i.call(this, u, s, l);
      var o = !1;
      return a.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (o = !0);
        }
      }), !(!o && n.__c.props === u) && (!i || i.call(this, u, s, l));
    };
    v.u = !0;
    var i = v.shouldComponentUpdate, c = v.componentWillUpdate;
    v.componentWillUpdate = function(u, s, l) {
      if (this.__e) {
        var a = i;
        i = void 0, r(u, s, l), i = a;
      }
      c && c.call(this, u, s, l);
    }, v.shouldComponentUpdate = r;
  }
  return n.__N || n.__;
}
function p_(e, _) {
  var t = S_(W++, 3);
  !m.__s && L_(t.__H, _) && (t.__ = e, t.i = _, v.__H.__h.push(t));
}
function D_() {
  for (var e; e = H_.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(L), e.__H.__h.forEach(Y), e.__H.__h = [];
      } catch (_) {
        e.__H.__h = [], m.__e(_, e.__v);
      }
}
m.__b = function(e) {
  v = null, i_ && i_(e);
}, m.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), f_ && f_(e, _);
}, m.__r = function(e) {
  c_ && c_(e), W = 0;
  var _ = (v = e.__c).__H;
  _ && (R === v ? (_.__h = [], v.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = U, t.__N = t.i = void 0;
  })) : (_.__h.forEach(L), _.__h.forEach(Y), _.__h = [], W = 0)), R = v;
}, m.diffed = function(e) {
  l_ && l_(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (H_.push(_) !== 1 && r_ === m.requestAnimationFrame || ((r_ = m.requestAnimationFrame) || U_)(D_)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== U && (t.__ = t.__V), t.i = void 0, t.__V = U;
  })), R = v = null;
}, m.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(L), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
      });
    } catch (n) {
      _.some(function(r) {
        r.__h && (r.__h = []);
      }), _ = [], m.__e(n, t.__v);
    }
  }), u_ && u_(e, _);
}, m.unmount = function(e) {
  s_ && s_(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      L(n);
    } catch (r) {
      _ = r;
    }
  }), t.__H = void 0, _ && m.__e(_, t.__v));
};
var d_ = typeof requestAnimationFrame == "function";
function U_(e) {
  var _, t = function() {
    clearTimeout(n), d_ && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  d_ && (_ = requestAnimationFrame(t));
}
function L(e) {
  var _ = v, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), v = _;
}
function Y(e) {
  var _ = v;
  e.__c = e.__(), v = _;
}
function L_(e, _) {
  return !e || e.length !== _.length || _.some(function(t, n) {
    return t !== e[n];
  });
}
function x_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
var V_ = 0;
function b(e, _, t, n, r, i) {
  _ || (_ = {});
  var c, u, s = _;
  if ("ref" in s)
    for (u in s = {}, _)
      u == "ref" ? c = _[u] : s[u] = _[u];
  var l = { type: e, props: s, key: t, ref: c, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --V_, __i: -1, __u: 0, __source: r, __self: i };
  if (typeof e == "function" && (c = e.defaultProps))
    for (u in c)
      s[u] === void 0 && (s[u] = c[u]);
  return h.vnode && h.vnode(l), l;
}
function W_(e) {
  console.log("App component props", e), e.initcount === void 0 && (e.initcount = "0");
  const [_, t] = a_(parseInt(e.initcount) || 0), [n, r] = a_([]);
  async function i() {
    console.log("Fetching data...");
    const c = await fetch(`/api/MyApi?count=${_}`);
    if (!c.ok)
      throw new Error(c.status.toString());
    console.log("Data fetched!"), r(await c.json());
  }
  return p_(() => (console.log("App component mounted"), () => {
    console.log("App component unmounted");
  }), []), p_(() => {
    console.log("count updated", _), i();
  }, [_]), b("div", {
    class: e.class,
    style: {
      border: "2px red solid"
    },
    children: [b("p", {
      style: {
        color: "red"
      },
      children: "This is the App web component"
    }), b("a", {
      href: "https://preactjs.com",
      target: "_blank",
      children: b("img", {
        src: T_,
        alt: "Preact logo",
        height: "160",
        width: "160"
      })
    }), b("h1", {
      children: "Get Started building Vite-powered Preact Apps "
    }), b("ul", {
      className: "custom-color",
      children: [n.length === 0 && b("li", {
        children: "Loading..."
      }), n.map((c) => b("li", {
        children: [c.summary, " - ", c.temperatureF, "F - ", new Date(c.date).toISOString()]
      }))]
    }), b("div", {
      class: "p-4",
      children: [b("button", {
        class: "rounded bg-slate-500 p-3",
        onClick: () => t(_ + 1),
        children: "Click Me"
      }), b("p", {
        children: ["Button clicked ", _, " times."]
      })]
    })]
  });
}
function B_() {
  return b("div", {
    children: [b("h1", {
      children: "My Test"
    }), b("p", {
      children: "This is a test of the PreactDotNetMvcTesting project."
    })]
  });
}
function I_(e, _, t) {
  N_(g_(e, t), _);
}
export {
  W_ as App,
  B_ as MyTest,
  I_ as myRender
};
