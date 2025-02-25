let ctx

function init() {
  ;(() => {
    var gt = Object.create
    var q = Object.defineProperty
    var _t = Object.getOwnPropertyDescriptor
    var ht = Object.getOwnPropertyNames
    var It = Object.getPrototypeOf,
      Rt = Object.prototype.hasOwnProperty
    var wt = (s, o) => () => (o || s((o = { exports: {} }).exports, o), o.exports)
    var Ct = (s, o, n, r) => {
      if ((o && typeof o == 'object') || typeof o == 'function')
        for (let e of ht(o)) !Rt.call(s, e) && e !== n && q(s, e, { get: () => o[e], enumerable: !(r = _t(o, e)) || r.enumerable })
      return s
    }
    var Ut = (s, o, n) => ((n = s != null ? gt(It(s)) : {}), Ct(o || !s || !s.__esModule ? q(n, 'default', { value: s, enumerable: !0 }) : n, s))
    var ct = wt((w, H) => {
      ;(function (o, n) {
        typeof w == 'object' && typeof H == 'object'
          ? (H.exports = n())
          : typeof define == 'function' && define.amd
          ? define([], n)
          : typeof w == 'object'
          ? (w.ClipboardJS = n())
          : (o.ClipboardJS = n())
      })(w, function () {
        return (function () {
          var s = {
              686: function (r, e, t) {
                'use strict'
                t.d(e, {
                  default: function () {
                    return vt
                  },
                })
                var c = t(279),
                  a = t.n(c),
                  d = t(370),
                  y = t.n(d),
                  T = t(817),
                  x = t.n(T)
                function b(p) {
                  try {
                    return document.execCommand(p)
                  } catch (u) {
                    return !1
                  }
                }
                var A = function (u) {
                    var i = x()(u)
                    return b('cut'), i
                  },
                  E = A
                function v(p) {
                  var u = document.documentElement.getAttribute('dir') === 'rtl',
                    i = document.createElement('textarea')
                  ;(i.style.fontSize = '12pt'),
                    (i.style.border = '0'),
                    (i.style.padding = '0'),
                    (i.style.margin = '0'),
                    (i.style.position = 'absolute'),
                    (i.style[u ? 'right' : 'left'] = '-9999px')
                  var l = window.pageYOffset || document.documentElement.scrollTop
                  return (i.style.top = ''.concat(l, 'px')), i.setAttribute('readonly', ''), (i.value = p), i
                }
                var G = function (u, i) {
                    var l = v(u)
                    i.container.appendChild(l)
                    var f = x()(l)
                    return b('copy'), l.remove(), f
                  },
                  ft = function (u) {
                    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body },
                      l = ''
                    return (
                      typeof u == 'string'
                        ? (l = G(u, i))
                        : u instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(u == null ? void 0 : u.type)
                        ? (l = G(u.value, i))
                        : ((l = x()(u)), b('copy')),
                      l
                    )
                  },
                  P = ft
                function C(p) {
                  return (
                    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                      ? (C = function (i) {
                          return typeof i
                        })
                      : (C = function (i) {
                          return i && typeof Symbol == 'function' && i.constructor === Symbol && i !== Symbol.prototype ? 'symbol' : typeof i
                        }),
                    C(p)
                  )
                }
                var pt = function () {
                    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                      i = u.action,
                      l = i === void 0 ? 'copy' : i,
                      f = u.container,
                      m = u.target,
                      S = u.text
                    if (l !== 'copy' && l !== 'cut') throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    if (m !== void 0)
                      if (m && C(m) === 'object' && m.nodeType === 1) {
                        if (l === 'copy' && m.hasAttribute('disabled')) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
                        if (l === 'cut' && (m.hasAttribute('readonly') || m.hasAttribute('disabled')))
                          throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                      } else throw new Error('Invalid "target" value, use a valid Element')
                    if (S) return P(S, { container: f })
                    if (m) return l === 'cut' ? E(m) : P(m, { container: f })
                  },
                  dt = pt
                function I(p) {
                  return (
                    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                      ? (I = function (i) {
                          return typeof i
                        })
                      : (I = function (i) {
                          return i && typeof Symbol == 'function' && i.constructor === Symbol && i !== Symbol.prototype ? 'symbol' : typeof i
                        }),
                    I(p)
                  )
                }
                function mt(p, u) {
                  if (!(p instanceof u)) throw new TypeError('Cannot call a class as a function')
                }
                function Y(p, u) {
                  for (var i = 0; i < u.length; i++) {
                    var l = u[i]
                    ;(l.enumerable = l.enumerable || !1), (l.configurable = !0), 'value' in l && (l.writable = !0), Object.defineProperty(p, l.key, l)
                  }
                }
                function yt(p, u, i) {
                  return u && Y(p.prototype, u), i && Y(p, i), p
                }
                function Tt(p, u) {
                  if (typeof u != 'function' && u !== null) throw new TypeError('Super expression must either be null or a function')
                  ;(p.prototype = Object.create(u && u.prototype, { constructor: { value: p, writable: !0, configurable: !0 } })), u && B(p, u)
                }
                function B(p, u) {
                  return (
                    (B =
                      Object.setPrototypeOf ||
                      function (l, f) {
                        return (l.__proto__ = f), l
                      }),
                    B(p, u)
                  )
                }
                function bt(p) {
                  var u = xt()
                  return function () {
                    var l = U(p),
                      f
                    if (u) {
                      var m = U(this).constructor
                      f = Reflect.construct(l, arguments, m)
                    } else f = l.apply(this, arguments)
                    return Et(this, f)
                  }
                }
                function Et(p, u) {
                  return u && (I(u) === 'object' || typeof u == 'function') ? u : At(p)
                }
                function At(p) {
                  if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                  return p
                }
                function xt() {
                  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1
                  if (typeof Proxy == 'function') return !0
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                  } catch (p) {
                    return !1
                  }
                }
                function U(p) {
                  return (
                    (U = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (i) {
                          return i.__proto__ || Object.getPrototypeOf(i)
                        }),
                    U(p)
                  )
                }
                function M(p, u) {
                  var i = 'data-clipboard-'.concat(p)
                  if (!!u.hasAttribute(i)) return u.getAttribute(i)
                }
                var St = (function (p) {
                    Tt(i, p)
                    var u = bt(i)
                    function i(l, f) {
                      var m
                      return mt(this, i), (m = u.call(this)), m.resolveOptions(f), m.listenClick(l), m
                    }
                    return (
                      yt(
                        i,
                        [
                          {
                            key: 'resolveOptions',
                            value: function () {
                              var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                              ;(this.action = typeof f.action == 'function' ? f.action : this.defaultAction),
                                (this.target = typeof f.target == 'function' ? f.target : this.defaultTarget),
                                (this.text = typeof f.text == 'function' ? f.text : this.defaultText),
                                (this.container = I(f.container) === 'object' ? f.container : document.body)
                            },
                          },
                          {
                            key: 'listenClick',
                            value: function (f) {
                              var m = this
                              this.listener = y()(f, 'click', function (S) {
                                return m.onClick(S)
                              })
                            },
                          },
                          {
                            key: 'onClick',
                            value: function (f) {
                              var m = f.delegateTarget || f.currentTarget,
                                S = this.action(m) || 'copy',
                                L = dt({ action: S, container: this.container, target: this.target(m), text: this.text(m) })
                              this.emit(L ? 'success' : 'error', {
                                action: S,
                                text: L,
                                trigger: m,
                                clearSelection: function () {
                                  m && m.focus(), window.getSelection().removeAllRanges()
                                },
                              })
                            },
                          },
                          {
                            key: 'defaultAction',
                            value: function (f) {
                              return M('action', f)
                            },
                          },
                          {
                            key: 'defaultTarget',
                            value: function (f) {
                              var m = M('target', f)
                              if (m) return document.querySelector(m)
                            },
                          },
                          {
                            key: 'defaultText',
                            value: function (f) {
                              return M('text', f)
                            },
                          },
                          {
                            key: 'destroy',
                            value: function () {
                              this.listener.destroy()
                            },
                          },
                        ],
                        [
                          {
                            key: 'copy',
                            value: function (f) {
                              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body }
                              return P(f, m)
                            },
                          },
                          {
                            key: 'cut',
                            value: function (f) {
                              return E(f)
                            },
                          },
                          {
                            key: 'isSupported',
                            value: function () {
                              var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ['copy', 'cut'],
                                m = typeof f == 'string' ? [f] : f,
                                S = !!document.queryCommandSupported
                              return (
                                m.forEach(function (L) {
                                  S = S && !!document.queryCommandSupported(L)
                                }),
                                S
                              )
                            },
                          },
                        ]
                      ),
                      i
                    )
                  })(a()),
                  vt = St
              },
              828: function (r) {
                var e = 9
                if (typeof Element != 'undefined' && !Element.prototype.matches) {
                  var t = Element.prototype
                  t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                }
                function c(a, d) {
                  for (; a && a.nodeType !== e; ) {
                    if (typeof a.matches == 'function' && a.matches(d)) return a
                    a = a.parentNode
                  }
                }
                r.exports = c
              },
              438: function (r, e, t) {
                var c = t(828)
                function a(T, x, b, A, E) {
                  var v = y.apply(this, arguments)
                  return (
                    T.addEventListener(b, v, E),
                    {
                      destroy: function () {
                        T.removeEventListener(b, v, E)
                      },
                    }
                  )
                }
                function d(T, x, b, A, E) {
                  return typeof T.addEventListener == 'function'
                    ? a.apply(null, arguments)
                    : typeof b == 'function'
                    ? a.bind(null, document).apply(null, arguments)
                    : (typeof T == 'string' && (T = document.querySelectorAll(T)),
                      Array.prototype.map.call(T, function (v) {
                        return a(v, x, b, A, E)
                      }))
                }
                function y(T, x, b, A) {
                  return function (E) {
                    ;(E.delegateTarget = c(E.target, x)), E.delegateTarget && A.call(T, E)
                  }
                }
                r.exports = d
              },
              879: function (r, e) {
                ;(e.node = function (t) {
                  return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1
                }),
                  (e.nodeList = function (t) {
                    var c = Object.prototype.toString.call(t)
                    return t !== void 0 && (c === '[object NodeList]' || c === '[object HTMLCollection]') && 'length' in t && (t.length === 0 || e.node(t[0]))
                  }),
                  (e.string = function (t) {
                    return typeof t == 'string' || t instanceof String
                  }),
                  (e.fn = function (t) {
                    var c = Object.prototype.toString.call(t)
                    return c === '[object Function]'
                  })
              },
              370: function (r, e, t) {
                var c = t(879),
                  a = t(438)
                function d(b, A, E) {
                  if (!b && !A && !E) throw new Error('Missing required arguments')
                  if (!c.string(A)) throw new TypeError('Second argument must be a String')
                  if (!c.fn(E)) throw new TypeError('Third argument must be a Function')
                  if (c.node(b)) return y(b, A, E)
                  if (c.nodeList(b)) return T(b, A, E)
                  if (c.string(b)) return x(b, A, E)
                  throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList')
                }
                function y(b, A, E) {
                  return (
                    b.addEventListener(A, E),
                    {
                      destroy: function () {
                        b.removeEventListener(A, E)
                      },
                    }
                  )
                }
                function T(b, A, E) {
                  return (
                    Array.prototype.forEach.call(b, function (v) {
                      v.addEventListener(A, E)
                    }),
                    {
                      destroy: function () {
                        Array.prototype.forEach.call(b, function (v) {
                          v.removeEventListener(A, E)
                        })
                      },
                    }
                  )
                }
                function x(b, A, E) {
                  return a(document.body, b, A, E)
                }
                r.exports = d
              },
              817: function (r) {
                function e(t) {
                  var c
                  if (t.nodeName === 'SELECT') t.focus(), (c = t.value)
                  else if (t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA') {
                    var a = t.hasAttribute('readonly')
                    a || t.setAttribute('readonly', ''), t.select(), t.setSelectionRange(0, t.value.length), a || t.removeAttribute('readonly'), (c = t.value)
                  } else {
                    t.hasAttribute('contenteditable') && t.focus()
                    var d = window.getSelection(),
                      y = document.createRange()
                    y.selectNodeContents(t), d.removeAllRanges(), d.addRange(y), (c = d.toString())
                  }
                  return c
                }
                r.exports = e
              },
              279: function (r) {
                function e() {}
                ;(e.prototype = {
                  on: function (t, c, a) {
                    var d = this.e || (this.e = {})
                    return (d[t] || (d[t] = [])).push({ fn: c, ctx: a }), this
                  },
                  once: function (t, c, a) {
                    var d = this
                    function y() {
                      d.off(t, y), c.apply(a, arguments)
                    }
                    return (y._ = c), this.on(t, y, a)
                  },
                  emit: function (t) {
                    var c = [].slice.call(arguments, 1),
                      a = ((this.e || (this.e = {}))[t] || []).slice(),
                      d = 0,
                      y = a.length
                    for (d; d < y; d++) a[d].fn.apply(a[d].ctx, c)
                    return this
                  },
                  off: function (t, c) {
                    var a = this.e || (this.e = {}),
                      d = a[t],
                      y = []
                    if (d && c) for (var T = 0, x = d.length; T < x; T++) d[T].fn !== c && d[T].fn._ !== c && y.push(d[T])
                    return y.length ? (a[t] = y) : delete a[t], this
                  },
                }),
                  (r.exports = e),
                  (r.exports.TinyEmitter = e)
              },
            },
            o = {}
          function n(r) {
            if (o[r]) return o[r].exports
            var e = (o[r] = { exports: {} })
            return s[r](e, e.exports, n), e.exports
          }
          return (
            (function () {
              n.n = function (r) {
                var e =
                  r && r.__esModule
                    ? function () {
                        return r.default
                      }
                    : function () {
                        return r
                      }
                return n.d(e, { a: e }), e
              }
            })(),
            (function () {
              n.d = function (r, e) {
                for (var t in e) n.o(e, t) && !n.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: e[t] })
              }
            })(),
            (function () {
              n.o = function (r, e) {
                return Object.prototype.hasOwnProperty.call(r, e)
              }
            })(),
            n(686)
          )
        })().default
      })
    })
    var g = 'fs-attributes'
    var X = 'cmsattribute'
    var _ = 'copyclip'
    var J = async (...s) => {
      var n
      let o = []
      for (let r of s) {
        let e = await ((n = window.fsAttributes[r]) == null ? void 0 : n.loading)
        o.push(e)
      }
      return o
    }
    var k = () => {}
    var K = s => {
      let o = s.split('-'),
        n = parseInt(o[o.length - 1])
      if (!isNaN(n)) return n
    }
    var N = s => {
      var n
      let o
      for (let r of s.childNodes)
        if ((r instanceof HTMLElement && r.childNodes.length ? (o = N(r)) : r.nodeType === Node.TEXT_NODE && ((n = r.textContent) == null ? void 0 : n.trim()) && (o = r), o)) break
      return o
    }
    var V = s => s instanceof HTMLInputElement || s instanceof HTMLSelectElement || s instanceof HTMLTextAreaElement
    var D = s => s != null
    function z(s, o, n) {
      var e
      let r = window.fsAttributes[s]
      return (r.destroy = n || k), (e = r.resolve) == null || e.call(r, o), o
    }
    var Lt = `${g}-support`,
      Nt = 'https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js',
      Q = async () => {
        let { fsAttributes: s, location: o } = window,
          { host: n, searchParams: r } = new URL(o.href)
        s.support || (s.support = {})
        let { support: e } = s
        if (!n.includes('webflow.io') || !r.has(Lt)) return !1
        if (e.import) return e.import
        try {
          e.import = new Promise((t, c) => {
            let a = document.createElement('script')
            ;(a.src = Nt), (a.onload = () => t(!0)), (a.onerror = c), document.head.append(a)
          })
        } catch (t) {
          return !1
        }
        return e.import
      }
    var W = s => o => `${s}${o ? `-${o}` : ''}`,
      O = s => {
        let o = (r, e, t) => {
          let c = s[r],
            { key: a, values: d } = c,
            y
          if (!e) return `[${a}]`
          let T = d == null ? void 0 : d[e]
          typeof T == 'string' ? (y = T) : (y = T(t && 'instanceIndex' in t ? t.instanceIndex : void 0))
          let x = t && 'caseInsensitive' in t && t.caseInsensitive ? 'i' : ''
          if (!(t != null && t.operator)) return `[${a}="${y}"${x}]`
          switch (t.operator) {
            case 'prefixed':
              return `[${a}^="${y}"${x}]`
            case 'suffixed':
              return `[${a}$="${y}"${x}]`
            case 'contains':
              return `[${a}*="${y}"${x}]`
          }
        }
        function n(r, e) {
          let t = o('element', r, e),
            c = (e == null ? void 0 : e.scope) || document
          return e != null && e.all ? [...c.querySelectorAll(t)] : c.querySelector(t)
        }
        return [o, n]
      }
    var R = {
        preventLoad: { key: `${g}-preventload` },
        debugMode: { key: `${g}-debug` },
        src: { key: 'src', values: { finsweet: '@finsweet/attributes' } },
        dev: { key: `${g}-dev` },
      },
      [F, Ee] = O(R)
    var Z = s => {
      let { currentScript: o } = document,
        n = {}
      if (!o) return { attributes: n, preventsLoad: !1 }
      let e = { preventsLoad: typeof o.getAttribute(R.preventLoad.key) == 'string', attributes: n }
      for (let t in s) {
        let c = o.getAttribute(s[t])
        e.attributes[t] = c
      }
      return e
    }
    var et = ({ scriptAttributes: s, attributeKey: o, version: n, init: r }) => {
        var a
        Ot(), (a = window.fsAttributes)[o] || (a[o] = {})
        let { preventsLoad: e, attributes: t } = Z(s),
          c = window.fsAttributes[o]
        ;(c.version = n), (c.init = r), e || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => r(t)))
      },
      Ot = () => {
        let s = Pt()
        if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
          tt(window.fsAttributes, s)
          return
        }
        let o = {
          cms: {},
          push(...n) {
            var r, e
            for (let [t, c] of n) (e = (r = this[t]) == null ? void 0 : r.loading) == null || e.then(c)
          },
          destroy() {
            var n, r
            for (let e of s) (r = (n = window.fsAttributes[e]) == null ? void 0 : n.destroy) == null || r.call(n)
          },
        }
        tt(o, s), Bt(o), (window.fsAttributes = o), (window.FsAttributes = window.fsAttributes), Q()
      },
      Pt = () => {
        let s = F('src', 'finsweet', { operator: 'contains' }),
          o = F('dev')
        return [...document.querySelectorAll(`script${s}, script${o}`)].reduce((e, t) => {
          var a
          let c = t.getAttribute(R.dev.key) || ((a = t.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : a[0])
          return c && !e.includes(c) && e.push(c), e
        }, [])
      },
      tt = (s, o) => {
        for (let n of o) {
          if (s[n]) continue
          s[n] = {}
          let r = s[n]
          r.loading = new Promise(e => {
            r.resolve = t => {
              e(t), delete r.resolve
            }
          })
        }
      },
      Bt = s => {
        let o = Array.isArray(window.fsAttributes) ? window.fsAttributes : []
        s.push(...o)
      }
    var rt = '1.7.0'
    var nt = (s, o) => {
      let n = s.getAttribute(o)
      return n ? K(n) : void 0
    }
    var h = `fs-${_}`,
      kt = 'click',
      Kt = 'copy-this',
      Vt = 'copy-sibling',
      Dt = 'text',
      Ft = 'message',
      $t = 'duration',
      jt = 'active',
      $ = {
        element: { key: `${h}-element`, values: { trigger: kt, target: W(Kt), sibling: Vt } },
        text: { key: `${h}-${Dt}` },
        successMessage: { key: `${h}-${Ft}` },
        successDuration: { key: `${h}-${$t}` },
        successClass: { key: `${h}-${jt}` },
      },
      [ot, j] = O($),
      st = 1e3,
      it = `${h}_active`
    var ut = Ut(ct(), 1),
      at = ({ trigger: s, textToCopy: o, target: n, textNode: r, originalText: e, successMessage: t, successDuration: c, successClass: a }) => {
        let d = new ut.default(s, { text: () => o || (n ? (V(n) ? n.value : n.textContent || '') : s.textContent || '') }),
          y = !1

        // Check for RTL direction
        const isRTL = document.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl'
        // Set default success message based on direction
        const defaultSuccessMessage = isRTL ? 'تم النسخ!' : 'Copied!'

        return (
          d.on('success', T => {
            T.clearSelection(),
              !y &&
                ((y = !0),
                s.classList.add(a),
                r && (r.textContent = t || defaultSuccessMessage),
                setTimeout(() => {
                  s.classList.remove(a), r && (r.textContent = e || ''), (y = !1)
                }, c))
          }),
          d
        )
      }
    var {
        element: { key: Ht },
        text: { key: Gt },
        successMessage: { key: Yt },
        successDuration: { key: qt },
        successClass: { key: Xt },
      } = $,
      lt = async () => {
        await J(X)
        let o = j('trigger', { operator: 'prefixed', all: !0 })
          .map(n => {
            var A
            if (!(n instanceof HTMLElement)) return
            let r = n.getAttribute(Gt),
              e = n.getAttribute(Yt),
              t = +(n.getAttribute(qt) || st),
              c = n.getAttribute(Xt) || it,
              a = nt(n, Ht),
              y = ((A = n.parentElement) == null ? void 0 : A.querySelector(ot('element', 'sibling', { operator: 'prefixed' }))) || j('target', { instanceIndex: a }),
              T = N(n),
              x = T ? T.textContent : void 0
            return at({ trigger: n, target: y, textToCopy: r, originalText: x, textNode: T, successDuration: t, successMessage: e, successClass: c })
          })
          .filter(D)
        return z(_, o, () => {
          for (let n of o) n.destroy()
        })
      }
    et({ init: lt, version: rt, attributeKey: _ })
  })()
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
