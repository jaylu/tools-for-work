const Ve = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, ze = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, He = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Be(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    qe(e);
    return;
  }
  return t;
}
function qe(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Ge(e, t = {}) {
  if (typeof e != "string")
    return e;
  const n = e.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    e[0] === '"' && e.endsWith('"') && !e.includes("\\")
  )
    return n.slice(1, -1);
  if (n.length <= 9) {
    const s = n.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!He.test(e)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Ve.test(e) || ze.test(e)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Be);
    }
    return JSON.parse(e);
  } catch (s) {
    if (t.strict)
      throw s;
    return e;
  }
}
const We = /#/g, Je = /&/g, Qe = /\//g, Ke = /=/g, re = /\+/g, Ye = /%5e/gi, Xe = /%60/gi, Ze = /%7c/gi, et = /%20/gi;
function tt(e) {
  return encodeURI("" + e).replace(Ze, "|");
}
function te(e) {
  return tt(typeof e == "string" ? e : JSON.stringify(e)).replace(re, "%2B").replace(et, "+").replace(We, "%23").replace(Je, "%26").replace(Xe, "`").replace(Ye, "^").replace(Qe, "%2F");
}
function K(e) {
  return te(e).replace(Ke, "%3D");
}
function xe(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function nt(e) {
  return xe(e.replace(re, " "));
}
function st(e) {
  return xe(e.replace(re, " "));
}
function rt(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const s = n.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2)
      continue;
    const r = nt(s[1]);
    if (r === "__proto__" || r === "constructor")
      continue;
    const o = st(s[2] || "");
    t[r] === void 0 ? t[r] = o : Array.isArray(t[r]) ? t[r].push(o) : t[r] = [t[r], o];
  }
  return t;
}
function ot(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${K(e)}=${te(n)}`).join("&") : `${K(e)}=${te(t)}` : K(e);
}
function it(e) {
  return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => ot(t, e[t])).filter(Boolean).join("&");
}
const ct = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, at = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, lt = /^([/\\]\s*){2,}[^/\\]/, ut = /\/$|\/\?|\/#/, ft = /^\.?\//;
function Ee(e, t = {}) {
  return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? ct.test(e) : at.test(e) || (t.acceptRelative ? lt.test(e) : !1);
}
function ne(e = "", t) {
  return t ? ut.test(e) : e.endsWith("/");
}
function pt(e = "", t) {
  if (!t)
    return (ne(e) ? e.slice(0, -1) : e) || "/";
  if (!ne(e, !0))
    return e || "/";
  let n = e, s = "";
  const r = e.indexOf("#");
  r >= 0 && (n = e.slice(0, r), s = e.slice(r));
  const [o, ...c] = n.split("?");
  return ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") + (c.length > 0 ? `?${c.join("?")}` : "") + s;
}
function dt(e = "", t) {
  if (!t)
    return e.endsWith("/") ? e : e + "/";
  if (ne(e, !0))
    return e || "/";
  let n = e, s = "";
  const r = e.indexOf("#");
  if (r >= 0 && (n = e.slice(0, r), s = e.slice(r), !n))
    return s;
  const [o, ...c] = n.split("?");
  return o + "/" + (c.length > 0 ? `?${c.join("?")}` : "") + s;
}
function ht(e, t) {
  if (gt(t) || Ee(e))
    return e;
  const n = pt(t);
  return e.startsWith(n) ? e : yt(n, e);
}
function mt(e, t) {
  const n = $e(e), s = { ...rt(n.search), ...t };
  return n.search = it(s), bt(n);
}
function gt(e) {
  return !e || e === "/";
}
function _t(e) {
  return e && e !== "/";
}
function yt(e, ...t) {
  let n = e || "";
  for (const s of t.filter((r) => _t(r)))
    if (n) {
      const r = s.replace(ft, "");
      n = dt(n) + r;
    } else
      n = s;
  return n;
}
const ke = Symbol.for("ufo:protocolRelative");
function $e(e = "", t) {
  const n = e.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (n) {
    const [, u, d = ""] = n;
    return {
      protocol: u.toLowerCase(),
      pathname: d,
      href: u + d,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!Ee(e, { acceptRelative: !0 }))
    return t ? $e(t + e) : ae(e);
  const [, s = "", r, o = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, c = "", l = ""] = o.match(/([^#/?]*)(.*)?/) || [], { pathname: a, search: f, hash: i } = ae(
    l.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: s.toLowerCase(),
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: c,
    pathname: a,
    search: f,
    hash: i,
    [ke]: !s
  };
}
function ae(e = "") {
  const [t = "", n = "", s = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: n,
    hash: s
  };
}
function bt(e) {
  const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", s = e.hash || "", r = e.auth ? e.auth + "@" : "", o = e.host || "";
  return (e.protocol || e[ke] ? (e.protocol || "") + "//" : "") + r + o + t + n + s;
}
class vt extends Error {
  constructor(t, n) {
    super(t, n), this.name = "FetchError", n != null && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function wt(e) {
  var a, f, i, u, d;
  const t = ((a = e.error) == null ? void 0 : a.message) || ((f = e.error) == null ? void 0 : f.toString()) || "", n = ((i = e.request) == null ? void 0 : i.method) || ((u = e.options) == null ? void 0 : u.method) || "GET", s = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/", r = `[${n}] ${JSON.stringify(s)}`, o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", c = `${r}: ${o}${t ? ` ${t}` : ""}`, l = new vt(
    c,
    e.error ? { cause: e.error } : void 0
  );
  for (const m of ["request", "options", "response"])
    Object.defineProperty(l, m, {
      get() {
        return e[m];
      }
    });
  for (const [m, _] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ])
    Object.defineProperty(l, m, {
      get() {
        return e.response && e.response[_];
      }
    });
  return l;
}
const jt = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function le(e = "GET") {
  return jt.has(e.toUpperCase());
}
function St(e) {
  if (e === void 0)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
const xt = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), Et = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function kt(e = "") {
  if (!e)
    return "json";
  const t = e.split(";").shift() || "";
  return Et.test(t) ? "json" : xt.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function $t(e, t, n = globalThis.Headers) {
  const s = {
    ...t,
    ...e
  };
  if (t != null && t.params && (e != null && e.params) && (s.params = {
    ...t == null ? void 0 : t.params,
    ...e == null ? void 0 : e.params
  }), t != null && t.query && (e != null && e.query) && (s.query = {
    ...t == null ? void 0 : t.query,
    ...e == null ? void 0 : e.query
  }), t != null && t.headers && (e != null && e.headers)) {
    s.headers = new n((t == null ? void 0 : t.headers) || {});
    for (const [r, o] of new n((e == null ? void 0 : e.headers) || {}))
      s.headers.set(r, o);
  }
  return s;
}
const At = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]), Ct = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function Ae(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = e;
  async function r(l) {
    const a = l.error && l.error.name === "AbortError" && !l.options.timeout || !1;
    if (l.options.retry !== !1 && !a) {
      let i;
      typeof l.options.retry == "number" ? i = l.options.retry : i = le(l.options.method) ? 0 : 1;
      const u = l.response && l.response.status || 500;
      if (i > 0 && (Array.isArray(l.options.retryStatusCodes) ? l.options.retryStatusCodes.includes(u) : At.has(u))) {
        const d = l.options.retryDelay || 0;
        return d > 0 && await new Promise((m) => setTimeout(m, d)), o(l.request, {
          ...l.options,
          retry: i - 1
        });
      }
    }
    const f = wt(l);
    throw Error.captureStackTrace && Error.captureStackTrace(f, o), f;
  }
  const o = async function(a, f = {}) {
    var m;
    const i = {
      request: a,
      options: $t(f, e.defaults, n),
      response: void 0,
      error: void 0
    };
    i.options.method = (m = i.options.method) == null ? void 0 : m.toUpperCase(), i.options.onRequest && await i.options.onRequest(i), typeof i.request == "string" && (i.options.baseURL && (i.request = ht(i.request, i.options.baseURL)), (i.options.query || i.options.params) && (i.request = mt(i.request, {
      ...i.options.params,
      ...i.options.query
    }))), i.options.body && le(i.options.method) && (St(i.options.body) ? (i.options.body = typeof i.options.body == "string" ? i.options.body : JSON.stringify(i.options.body), i.options.headers = new n(i.options.headers || {}), i.options.headers.has("content-type") || i.options.headers.set("content-type", "application/json"), i.options.headers.has("accept") || i.options.headers.set("accept", "application/json")) : (
      // ReadableStream Body
      ("pipeTo" in i.options.body && typeof i.options.body.pipeTo == "function" || // Node.js Stream Body
      typeof i.options.body.pipe == "function") && ("duplex" in i.options || (i.options.duplex = "half"))
    ));
    let u;
    if (!i.options.signal && i.options.timeout) {
      const _ = new s();
      u = setTimeout(
        () => _.abort(),
        i.options.timeout
      ), i.options.signal = _.signal;
    }
    try {
      i.response = await t(
        i.request,
        i.options
      );
    } catch (_) {
      return i.error = _, i.options.onRequestError && await i.options.onRequestError(i), await r(i);
    } finally {
      u && clearTimeout(u);
    }
    if (i.response.body && !Ct.has(i.response.status) && i.options.method !== "HEAD") {
      const _ = (i.options.parseResponse ? "json" : i.options.responseType) || kt(i.response.headers.get("content-type") || "");
      switch (_) {
        case "json": {
          const y = await i.response.text(), w = i.options.parseResponse || Ge;
          i.response._data = w(y);
          break;
        }
        case "stream": {
          i.response._data = i.response.body;
          break;
        }
        default:
          i.response._data = await i.response[_]();
      }
    }
    return i.options.onResponse && await i.options.onResponse(i), !i.options.ignoreResponseError && i.response.status >= 400 && i.response.status < 600 ? (i.options.onResponseError && await i.options.onResponseError(i), await r(i)) : i.response;
  }, c = async function(a, f) {
    return (await o(a, f))._data;
  };
  return c.raw = o, c.native = (...l) => t(...l), c.create = (l = {}) => Ae({
    ...e,
    defaults: {
      ...e.defaults,
      ...l
    }
  }), c;
}
const oe = function() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}(), Ot = oe.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))), Rt = oe.Headers, Tt = oe.AbortController, Mt = Ae({ fetch: Ot, Headers: Rt, AbortController: Tt }), Ut = Mt;
function Lt(e) {
  const t = e.length;
  let n = -1, s, r = "";
  const o = e.charCodeAt(0);
  for (; ++n < t; ) {
    if (s = e.charCodeAt(n), s === 0) {
      r += "�";
      continue;
    }
    if (s === 37) {
      r += "\\%";
      continue;
    }
    if (s === 44) {
      r += "\\,";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      s >= 1 && s <= 31 || s === 127 || n === 0 && s >= 48 && s <= 57 || n === 1 && s >= 48 && s <= 57 && o === 45
    ) {
      r += `\\${s.toString(16)} `;
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      n === 0 && t === 1 && s === 45
    ) {
      r += `\\${e.charAt(n)}`;
      continue;
    }
    if (s >= 128 || s === 45 || s === 95 || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122) {
      r += e.charAt(n);
      continue;
    }
    r += `\\${e.charAt(n)}`;
  }
  return r;
}
const Y = Lt;
function L(e = []) {
  return Array.isArray(e) ? e : [e];
}
function J(e) {
  return Array.from(new Set(e));
}
function Pt(e, t) {
  return e.reduce((n, s) => (n.findIndex((o) => t(s, o)) === -1 && n.push(s), n), []);
}
function M(e) {
  return typeof e == "string";
}
function H(e) {
  return M(e) ? e : (Array.isArray(e) ? e : Object.entries(e)).filter((t) => t[1] != null);
}
function Nt(e) {
  return Array.isArray(e) ? e.find((t) => !Array.isArray(t) || Array.isArray(t[0])) ? e.map((t) => H(t)) : [e] : [H(e)];
}
function Dt(e) {
  return e.filter(([t, n], s) => {
    if (t.startsWith("$$"))
      return !1;
    for (let r = s - 1; r >= 0; r--)
      if (e[r][0] === t && e[r][1] === n)
        return !1;
    return !0;
  });
}
function X(e) {
  return e == null ? "" : Dt(e).map(([t, n]) => n != null ? `${t}:${n};` : void 0).filter(Boolean).join("");
}
function B(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ce(e, t, n = !1) {
  const s = e, r = t;
  if (Array.isArray(r))
    return n && Array.isArray(r) ? [...s, ...r] : [...r];
  const o = { ...s };
  return B(s) && B(r) && Object.keys(r).forEach((c) => {
    B(s[c]) && B(r[c]) || Array.isArray(s[c]) && Array.isArray(r[c]) ? o[c] = Ce(s[c], r[c], n) : Object.assign(o, { [c]: r[c] });
  }), o;
}
function G(e) {
  let t, n, s;
  if (Array.isArray(e)) {
    for (n = Array(t = e.length); t--; )
      n[t] = (s = e[t]) && typeof s == "object" ? G(s) : s;
    return n;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    n = {};
    for (t in e)
      t === "__proto__" ? Object.defineProperty(n, t, {
        value: G(e[t]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[t] = (s = e[t]) && typeof s == "object" ? G(s) : s;
    return n;
  }
  return e;
}
function It(e) {
  return M(e[0]);
}
function Ft(e) {
  return M(e[0]);
}
function Vt(e) {
  return typeof e == "function" ? { match: e } : e;
}
function ue(e) {
  return e.length === 3;
}
function fe(e) {
  return e != null;
}
function zt() {
}
var Ht = Object.defineProperty, Bt = (e, t, n) => t in e ? Ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qt = (e, t, n) => (Bt(e, t + "", n), n);
class Gt {
  constructor() {
    qt(this, "_map", /* @__PURE__ */ new Map());
  }
  get(t, n) {
    const s = this._map.get(t);
    if (s)
      return s.get(n);
  }
  getFallback(t, n, s) {
    let r = this._map.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this._map.set(t, r)), r.has(n) || r.set(n, s), r.get(n);
  }
  set(t, n, s) {
    let r = this._map.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this._map.set(t, r)), r.set(n, s), this;
  }
  has(t, n) {
    var s;
    return (s = this._map.get(t)) == null ? void 0 : s.has(n);
  }
  delete(t, n) {
    var s;
    return ((s = this._map.get(t)) == null ? void 0 : s.delete(n)) || !1;
  }
  deleteTop(t) {
    return this._map.delete(t);
  }
  map(t) {
    return Array.from(this._map.entries()).flatMap(([n, s]) => Array.from(s.entries()).map(([r, o]) => t(o, n, r)));
  }
}
class Wt extends Map {
  getFallback(t, n) {
    const s = this.get(t);
    return s === void 0 ? (this.set(t, n), n) : s;
  }
  map(t) {
    const n = [];
    return this.forEach((s, r) => {
      n.push(t(s, r));
    }), n;
  }
  flatMap(t) {
    const n = [];
    return this.forEach((s, r) => {
      n.push(...t(s, r));
    }), n;
  }
}
var Jt = Object.defineProperty, Qt = (e, t, n) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kt = (e, t, n) => (Qt(e, t + "", n), n);
class Oe extends Set {
  constructor(t) {
    super(t), Kt(this, "_map"), this._map ?? (this._map = /* @__PURE__ */ new Map());
  }
  add(t) {
    return this._map ?? (this._map = /* @__PURE__ */ new Map()), this._map.set(t, (this._map.get(t) ?? 0) + 1), super.add(t);
  }
  delete(t) {
    return this._map.delete(t), super.delete(t);
  }
  clear() {
    this._map.clear(), super.clear();
  }
  getCount(t) {
    return this._map.get(t) ?? 0;
  }
  setCount(t, n) {
    return this._map.set(t, n), super.add(t);
  }
}
function Z(e) {
  return e instanceof Oe;
}
const q = {};
function Yt(e = ["-", ":"]) {
  const t = e.join("|");
  return q[t] || (q[t] = new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`, "gm")), q[t].lastIndex = 0, q[t];
}
function Xt(e, t = ["-", ":"], n = 5) {
  const s = Yt(t);
  let r, o = e.toString();
  const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  do
    r = !1, o = o.replace(
      s,
      (f, i, u, d, m) => {
        var w;
        if (!t.includes(u))
          return f;
        r = !0, c.add(i + u);
        const _ = m + i.length + u.length + 1, y = { length: f.length, items: [] };
        l.set(m, y);
        for (const x of [...d.matchAll(/\S+/g)]) {
          const k = _ + x.index;
          let h = (w = l.get(k)) == null ? void 0 : w.items;
          h ? l.delete(k) : h = [{
            offset: k,
            length: x[0].length,
            className: x[0]
          }];
          for (const g of h)
            g.className = g.className === "~" ? i : g.className.replace(/^(!?)(.*)/, `$1${i}${u}$2`), y.items.push(g);
        }
        return "$".repeat(f.length);
      }
    ), n -= 1;
  while (r && n);
  let a;
  if (typeof e == "string") {
    a = "";
    let f = 0;
    for (const [i, u] of l)
      a += e.slice(f, i), a += u.items.map((d) => d.className).join(" "), f = i + u.length;
    a += e.slice(f);
  } else {
    a = e;
    for (const [f, i] of l)
      a.overwrite(
        f,
        f + i.length,
        i.items.map((u) => u.className).join(" ")
      );
  }
  return {
    prefixes: Array.from(c),
    hasChanged: r,
    groupsByOffset: l,
    // Computed lazily because MagicString's toString does a lot of work
    get expanded() {
      return a.toString();
    }
  };
}
function Zt(e, t = ["-", ":"], n = 5) {
  const s = Xt(e, t, n);
  return typeof e == "string" ? s.expanded : e;
}
const pe = /* @__PURE__ */ new Set();
function Re(e) {
  pe.has(e) || (console.warn("[unocss]", e), pe.add(e));
}
const en = /[\\:]?[\s'"`;{}]+/g;
function tn(e) {
  return e.split(en);
}
const nn = {
  name: "@unocss/core/extractor-split",
  order: 0,
  extract({ code: e }) {
    return tn(e);
  }
};
function sn() {
  return {
    events: {},
    emit(e, ...t) {
      (this.events[e] || []).forEach((n) => n(...t));
    },
    on(e, t) {
      return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((n) => n !== t);
    }
  };
}
const W = "default", se = "preflights", rn = "shortcuts", on = "imports", cn = {
  [on]: -200,
  [se]: -100,
  [rn]: -10,
  [W]: 0
};
function Te(e) {
  return L(e).flatMap((t) => Array.isArray(t) ? [t] : Object.entries(t));
}
const de = "_uno_resolved";
function an(e) {
  var s;
  let t = typeof e == "function" ? e() : e;
  if (de in t)
    return t;
  t = { ...t }, Object.defineProperty(t, de, {
    value: !0,
    enumerable: !1
  });
  const n = t.shortcuts ? Te(t.shortcuts) : void 0;
  if (t.shortcuts = n, t.prefix || t.layer) {
    const r = (o) => {
      o[2] || (o[2] = {});
      const c = o[2];
      c.prefix == null && t.prefix && (c.prefix = L(t.prefix)), c.layer == null && t.layer && (c.layer = t.layer);
    };
    n == null || n.forEach(r), (s = t.rules) == null || s.forEach(r);
  }
  return t;
}
function Me(e) {
  const t = an(e);
  if (!t.presets)
    return [t];
  const n = (t.presets || []).flatMap(L).flatMap(Me);
  return [t, ...n];
}
function he(e = {}, t = {}) {
  var g, b;
  const n = Object.assign({}, t, e), s = Pt((n.presets || []).flatMap(L).flatMap(Me), (p, j) => p.name === j.name), r = [
    ...s.filter((p) => p.enforce === "pre"),
    ...s.filter((p) => !p.enforce),
    ...s.filter((p) => p.enforce === "post")
  ], o = [
    ...r,
    n
  ], c = [...o].reverse(), l = Object.assign({}, cn, ...o.map((p) => p.layers));
  function a(p) {
    return J(o.flatMap((j) => L(j[p] || [])));
  }
  const f = a("extractors");
  let i = (g = c.find((p) => p.extractorDefault !== void 0)) == null ? void 0 : g.extractorDefault;
  i === void 0 && (i = nn), i && !f.includes(i) && f.unshift(i), f.sort((p, j) => (p.order || 0) - (j.order || 0));
  const u = a("rules"), d = {}, m = u.length, _ = u.map((p, j) => {
    var A;
    if (It(p)) {
      L(((A = p[2]) == null ? void 0 : A.prefix) || "").forEach((O) => {
        d[O + p[0]] = [j, p[1], p[2], p];
      });
      return;
    }
    return [j, ...p];
  }).filter(Boolean).reverse();
  let y = ln(o.map((p) => p.theme));
  const w = a("extendTheme");
  for (const p of w)
    y = p(y) || y;
  const x = {
    templates: J(o.flatMap((p) => {
      var j;
      return L((j = p.autocomplete) == null ? void 0 : j.templates);
    })),
    extractors: o.flatMap((p) => {
      var j;
      return L((j = p.autocomplete) == null ? void 0 : j.extractors);
    }).sort((p, j) => (p.order || 0) - (j.order || 0)),
    shorthands: un(o.map((p) => {
      var j;
      return ((j = p.autocomplete) == null ? void 0 : j.shorthands) || {};
    }))
  };
  let k = a("separators");
  k.length || (k = [":", "-"]);
  const h = {
    mergeSelectors: !0,
    warn: !0,
    sortLayers: (p) => p,
    ...n,
    blocklist: a("blocklist"),
    presets: r,
    envMode: n.envMode || "build",
    shortcutsLayer: n.shortcutsLayer || "shortcuts",
    layers: l,
    theme: y,
    rulesSize: m,
    rulesDynamic: _,
    rulesStaticMap: d,
    preprocess: a("preprocess"),
    postprocess: a("postprocess"),
    preflights: a("preflights"),
    autocomplete: x,
    variants: a("variants").map(Vt).sort((p, j) => (p.order || 0) - (j.order || 0)),
    shortcuts: Te(a("shortcuts")).reverse(),
    extractors: f,
    safelist: a("safelist"),
    separators: k,
    details: n.details ?? n.envMode === "dev"
  };
  for (const p of o)
    (b = p == null ? void 0 : p.configResolved) == null || b.call(p, h);
  return h;
}
function ln(e) {
  return e.map((t) => t ? G(t) : {}).reduce((t, n) => Ce(t, n), {});
}
function un(e) {
  return e.reduce((t, n) => {
    const s = {};
    for (const r in n) {
      const o = n[r];
      Array.isArray(o) ? s[r] = `(${o.join("|")})` : s[r] = o;
    }
    return {
      ...t,
      ...s
    };
  }, {});
}
const fn = "0.61.0";
var pn = Object.defineProperty, dn = (e, t, n) => t in e ? pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, D = (e, t, n) => (dn(e, typeof t != "symbol" ? t + "" : t, n), n);
const I = {
  shortcutsNoMerge: "$$symbol-shortcut-no-merge",
  variants: "$$symbol-variants",
  parent: "$$symbol-parent",
  selector: "$$symbol-selector"
};
class hn {
  constructor(t = {}, n = {}) {
    this.userConfig = t, this.defaults = n, D(this, "version", fn), D(this, "_cache", /* @__PURE__ */ new Map()), D(this, "config"), D(this, "blocked", /* @__PURE__ */ new Set()), D(this, "parentOrders", /* @__PURE__ */ new Map()), D(this, "events", sn()), this.config = he(t, n), this.events.emit("config", this.config);
  }
  setConfig(t, n) {
    t && (n && (this.defaults = n), this.userConfig = t, this.blocked.clear(), this.parentOrders.clear(), this._cache.clear(), this.config = he(t, this.defaults), this.events.emit("config", this.config));
  }
  async applyExtractors(t, n, s = /* @__PURE__ */ new Set()) {
    var o;
    const r = {
      original: t,
      code: t,
      id: n,
      extracted: s,
      envMode: this.config.envMode
    };
    for (const c of this.config.extractors) {
      const l = await ((o = c.extract) == null ? void 0 : o.call(c, r));
      if (l)
        if (Z(l) && Z(s))
          for (const a of l)
            s.setCount(a, s.getCount(a) + l.getCount(a));
        else
          for (const a of l)
            s.add(a);
    }
    return s;
  }
  makeContext(t, n) {
    const s = {
      rawSelector: t,
      currentSelector: n[1],
      theme: this.config.theme,
      generator: this,
      symbols: I,
      variantHandlers: n[2],
      constructCSS: (...r) => this.constructCustomCSS(s, ...r),
      variantMatch: n
    };
    return s;
  }
  async parseToken(t, n) {
    var f;
    if (this.blocked.has(t))
      return;
    const s = `${t}${n ? ` ${n}` : ""}`;
    if (this._cache.has(s))
      return this._cache.get(s);
    let r = t;
    for (const i of this.config.preprocess)
      r = i(t);
    if (this.isBlocked(r)) {
      this.blocked.add(t), this._cache.set(s, null);
      return;
    }
    const o = await this.matchVariants(t, r);
    if (!o || this.isBlocked(o[1])) {
      this.blocked.add(t), this._cache.set(s, null);
      return;
    }
    const c = this.makeContext(t, [n || o[0], o[1], o[2], o[3]]);
    this.config.details && (c.variants = [...o[3]]);
    const l = await this.expandShortcut(c.currentSelector, c), a = l ? await this.stringifyShortcuts(c.variantMatch, c, l[0], l[1]) : (f = await this.parseUtil(c.variantMatch, c)) == null ? void 0 : f.map((i) => this.stringifyUtil(i, c)).filter(fe);
    if (a != null && a.length)
      return this._cache.set(s, a), a;
    this._cache.set(s, null);
  }
  async generate(t, n = {}) {
    const {
      id: s,
      scope: r,
      preflights: o = !0,
      safelist: c = !0,
      minify: l = !1,
      extendedInfo: a = !1
    } = n, f = this.config.outputToCssLayers, i = M(t) ? await this.applyExtractors(
      t,
      s,
      a ? new Oe() : /* @__PURE__ */ new Set()
    ) : Array.isArray(t) ? new Set(t) : t;
    if (c) {
      const b = {
        generator: this,
        theme: this.config.theme
      };
      this.config.safelist.flatMap((p) => typeof p == "function" ? p(b) : p).forEach((p) => {
        i.has(p) || i.add(p);
      });
    }
    const u = l ? "" : `
`, d = /* @__PURE__ */ new Set([W]), m = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map();
    let y = {};
    const w = Array.from(i).map(async (b) => {
      var j;
      if (m.has(b))
        return;
      const p = await this.parseToken(b);
      if (p != null) {
        m instanceof Map ? m.set(b, {
          data: p,
          count: Z(i) ? i.getCount(b) : -1
        }) : m.add(b);
        for (const A of p) {
          const $ = A[3] || "", O = (j = A[4]) == null ? void 0 : j.layer;
          _.has($) || _.set($, []), _.get($).push(A), O && d.add(O);
        }
      }
    });
    await Promise.all(w), await (async () => {
      if (!o)
        return;
      const b = {
        generator: this,
        theme: this.config.theme
      }, p = /* @__PURE__ */ new Set([]);
      this.config.preflights.forEach(({ layer: j = se }) => {
        d.add(j), p.add(j);
      }), y = Object.fromEntries(
        await Promise.all(Array.from(p).map(
          async (j) => {
            const $ = (await Promise.all(
              this.config.preflights.filter((O) => (O.layer || se) === j).map(async (O) => await O.getCSS(b))
            )).filter(Boolean).join(u);
            return [j, $];
          }
        ))
      );
    })();
    const x = this.config.sortLayers(Array.from(d).sort((b, p) => (this.config.layers[b] ?? 0) - (this.config.layers[p] ?? 0) || b.localeCompare(p))), k = {}, h = (b = W) => {
      var A;
      if (k[b])
        return k[b];
      let p = Array.from(_).sort(($, O) => {
        var P;
        return (this.parentOrders.get($[0]) ?? 0) - (this.parentOrders.get(O[0]) ?? 0) || ((P = $[0]) == null ? void 0 : P.localeCompare(O[0] || "")) || 0;
      }).map(([$, O]) => {
        const P = O.length, N = O.filter((C) => {
          var v;
          return (((v = C[4]) == null ? void 0 : v.layer) || W) === b;
        }).sort((C, v) => {
          var S, E, U, R, T, z, ce;
          return C[0] - v[0] || (((S = C[4]) == null ? void 0 : S.sort) || 0) - (((E = v[4]) == null ? void 0 : E.sort) || 0) || ((T = (U = C[5]) == null ? void 0 : U.currentSelector) == null ? void 0 : T.localeCompare(((R = v[5]) == null ? void 0 : R.currentSelector) ?? "")) || ((z = C[1]) == null ? void 0 : z.localeCompare(v[1] || "")) || ((ce = C[2]) == null ? void 0 : ce.localeCompare(v[2] || "")) || 0;
        }).map(([, C, v, , S, , E]) => [
          [[(C && _n(C, r)) ?? "", (S == null ? void 0 : S.sort) ?? 0]],
          v,
          !!(E ?? (S == null ? void 0 : S.noMerge))
        ]);
        if (!N.length)
          return;
        const F = N.reverse().map(([C, v, S], E) => {
          if (!S && this.config.mergeSelectors)
            for (let R = E + 1; R < P; R++) {
              const T = N[R];
              if (T && !T[2] && (C && T[0] || C == null && T[0] == null) && T[1] === v)
                return C && T[0] && T[0].push(...C), null;
            }
          const U = C ? J(C.sort((R, T) => {
            var z;
            return R[1] - T[1] || ((z = R[0]) == null ? void 0 : z.localeCompare(T[0] || "")) || 0;
          }).map((R) => R[0]).filter(Boolean)) : [];
          return U.length ? `${U.join(`,${u}`)}{${v}}` : v;
        }).filter(Boolean).reverse().join(u);
        if (!$)
          return F;
        const V = $.split(" $$ ");
        return `${V.join("{")}{${u}${F}${u}${"}".repeat(V.length)}`;
      }).filter(Boolean).join(u);
      if (o && (p = [y[b], p].filter(Boolean).join(u)), f && p) {
        let $ = typeof f == "object" ? (A = f.cssLayerName) == null ? void 0 : A.call(f, b) : void 0;
        $ !== null && ($ || ($ = b), p = `@layer ${$}{${u}${p}${u}}`);
      }
      const j = l ? "" : `/* layer: ${b} */${u}`;
      return k[b] = p ? j + p : "";
    }, g = (b = x, p) => b.filter((j) => !(p != null && p.includes(j))).map((j) => h(j) || "").filter(Boolean).join(u);
    return {
      get css() {
        return g();
      },
      layers: x,
      matched: m,
      getLayers: g,
      getLayer: h
    };
  }
  async matchVariants(t, n) {
    const s = /* @__PURE__ */ new Set(), r = [];
    let o = n || t, c = !0;
    const l = {
      rawSelector: t,
      theme: this.config.theme,
      generator: this
    };
    for (; c; ) {
      c = !1;
      for (const a of this.config.variants) {
        if (!a.multiPass && s.has(a))
          continue;
        let f = await a.match(o, l);
        if (f) {
          if (M(f)) {
            if (f === o)
              continue;
            f = { matcher: f };
          }
          o = f.matcher ?? o, r.unshift(f), s.add(a), c = !0;
          break;
        }
      }
      if (!c)
        break;
      if (r.length > 500)
        throw new Error(`Too many variants applied to "${t}"`);
    }
    return [t, o, r, s];
  }
  applyVariants(t, n = t[4], s = t[1]) {
    const o = n.slice().sort((f, i) => (f.order || 0) - (i.order || 0)).reduceRight(
      (f, i) => (u) => {
        var _, y;
        const d = ((_ = i.body) == null ? void 0 : _.call(i, u.entries)) || u.entries, m = Array.isArray(i.parent) ? i.parent : [i.parent, void 0];
        return (i.handle ?? bn)({
          ...u,
          entries: d,
          selector: ((y = i.selector) == null ? void 0 : y.call(i, u.selector, d)) || u.selector,
          parent: m[0] || u.parent,
          parentOrder: m[1] || u.parentOrder,
          layer: i.layer || u.layer,
          sort: i.sort || u.sort
        }, f);
      },
      (f) => f
    )({
      prefix: "",
      selector: yn(s),
      pseudo: "",
      entries: t[2]
    }), { parent: c, parentOrder: l } = o;
    c != null && l != null && this.parentOrders.set(c, l);
    const a = {
      selector: [
        o.prefix,
        o.selector,
        o.pseudo
      ].join(""),
      entries: o.entries,
      parent: c,
      layer: o.layer,
      sort: o.sort,
      noMerge: o.noMerge
    };
    for (const f of this.config.postprocess)
      f(a);
    return a;
  }
  constructCustomCSS(t, n, s) {
    const r = H(n);
    if (M(r))
      return r;
    const { selector: o, entries: c, parent: l } = this.applyVariants([0, s || t.rawSelector, r, void 0, t.variantHandlers]), a = `${o}{${X(c)}}`;
    return l ? `${l}{${a}}` : a;
  }
  async parseUtil(t, n, s = !1, r) {
    var i;
    const [o, c, l] = M(t) ? await this.matchVariants(t) : t;
    this.config.details && (n.rules = n.rules ?? []);
    const a = this.config.rulesStaticMap[c];
    if (a && a[1] && (s || !((i = a[2]) != null && i.internal))) {
      this.config.details && n.rules.push(a[3]);
      const u = a[0], d = H(a[1]), m = a[2];
      return M(d) ? [[u, d, m]] : [[u, o, d, m, l]];
    }
    n.variantHandlers = l;
    const { rulesDynamic: f } = this.config;
    for (const [u, d, m, _] of f) {
      if (_ != null && _.internal && !s)
        continue;
      let y = c;
      if (_ != null && _.prefix) {
        const h = L(_.prefix);
        if (r) {
          const g = L(r);
          if (!h.some((b) => g.includes(b)))
            continue;
        } else {
          const g = h.find((b) => c.startsWith(b));
          if (g == null)
            continue;
          y = c.slice(g.length);
        }
      }
      const w = y.match(d);
      if (!w)
        continue;
      let x = await m(w, n);
      if (!x)
        continue;
      if (this.config.details && n.rules.push([d, m, _]), typeof x != "string")
        if (Symbol.asyncIterator in x) {
          const h = [];
          for await (const g of x)
            g && h.push(g);
          x = h;
        } else Symbol.iterator in x && !Array.isArray(x) && (x = Array.from(x).filter(fe));
      const k = Nt(x).filter((h) => h.length);
      if (k.length)
        return k.map((h) => {
          if (M(h))
            return [u, h, _];
          let g = l;
          for (const b of h)
            b[0] === I.variants ? g = [
              ...L(b[1]),
              ...g
            ] : b[0] === I.parent ? g = [
              { parent: b[1] },
              ...g
            ] : b[0] === I.selector && (g = [
              { selector: b[1] },
              ...g
            ]);
          return [u, o, h, _, g];
        });
    }
  }
  stringifyUtil(t, n) {
    if (!t)
      return;
    if (ue(t))
      return [t[0], void 0, t[1], void 0, t[2], this.config.details ? n : void 0, void 0];
    const {
      selector: s,
      entries: r,
      parent: o,
      layer: c,
      sort: l,
      noMerge: a
    } = this.applyVariants(t), f = X(r);
    if (!f)
      return;
    const { layer: i, sort: u, ...d } = t[3] ?? {}, m = {
      ...d,
      layer: c ?? i,
      sort: l ?? u
    };
    return [t[0], s, f, o, m, this.config.details ? n : void 0, a];
  }
  async expandShortcut(t, n, s = 5) {
    var l;
    if (s === 0)
      return;
    const r = this.config.details ? (a) => {
      n.shortcuts = n.shortcuts ?? [], n.shortcuts.push(a);
    } : zt;
    let o, c;
    for (const a of this.config.shortcuts) {
      let f = t;
      if ((l = a[2]) != null && l.prefix) {
        const u = L(a[2].prefix).find((d) => t.startsWith(d));
        if (u == null)
          continue;
        f = t.slice(u.length);
      }
      if (Ft(a)) {
        if (a[0] === f) {
          o = o || a[2], c = a[1], r(a);
          break;
        }
      } else {
        const i = f.match(a[0]);
        if (i && (c = a[1](i, n)), c) {
          o = o || a[2], r(a);
          break;
        }
      }
    }
    if (M(c) && (c = Zt(c.trim()).split(/\s+/g)), !c) {
      const [a, f] = M(t) ? await this.matchVariants(t) : t;
      if (a !== f) {
        const i = await this.expandShortcut(f, n, s - 1);
        i && (c = i[0].map((u) => M(u) ? a.replace(f, u) : u));
      }
    }
    if (c)
      return [
        (await Promise.all(c.map(async (a) => {
          var f;
          return (M(a) ? (f = await this.expandShortcut(a, n, s - 1)) == null ? void 0 : f[0] : void 0) || [a];
        }))).flat(1).filter(Boolean),
        o
      ];
  }
  async stringifyShortcuts(t, n, s, r = { layer: this.config.shortcutsLayer }) {
    var i;
    const o = new Wt(), c = (await Promise.all(J(s).map(async (u) => {
      const d = M(u) ? await this.parseUtil(u, n, !0, r.prefix) : [[Number.POSITIVE_INFINITY, "{inline}", H(u), void 0, []]];
      return !d && this.config.warn && Re(`unmatched utility "${u}" in shortcut "${t[1]}"`), d || [];
    }))).flat(1).filter(Boolean).sort((u, d) => u[0] - d[0]), [l, , a] = t, f = [];
    for (const u of c) {
      if (ue(u)) {
        f.push([u[0], void 0, u[1], void 0, u[2], n, void 0]);
        continue;
      }
      const { selector: d, entries: m, parent: _, sort: y, noMerge: w, layer: x } = this.applyVariants(u, [...u[4], ...a], l);
      o.getFallback(x ?? r.layer, new Gt()).getFallback(d, _, [[], u[0]])[0].push([m, !!(w ?? ((i = u[3]) == null ? void 0 : i.noMerge)), y ?? 0]);
    }
    return f.concat(o.flatMap(
      (u, d) => u.map(([m, _], y, w) => {
        const x = (h, g, b) => {
          const p = Math.max(...b.map((A) => A[1])), j = b.map((A) => A[0]);
          return (h ? [j.flat(1)] : j).map((A) => {
            const $ = X(A);
            if ($)
              return [_, y, $, w, { ...r, noMerge: g, sort: p, layer: d }, n, void 0];
          });
        };
        return [
          [m.filter(([, h]) => h).map(([h, , g]) => [h, g]), !0],
          [m.filter(([, h]) => !h).map(([h, , g]) => [h, g]), !1]
        ].map(([h, g]) => [
          ...x(!1, g, h.filter(([b]) => b.some((p) => p[0] === I.shortcutsNoMerge))),
          ...x(!0, g, h.filter(([b]) => b.every((p) => p[0] !== I.shortcutsNoMerge)))
        ]);
      }).flat(2).filter(Boolean)
    ));
  }
  isBlocked(t) {
    return !t || this.config.blocklist.map((n) => Array.isArray(n) ? n[0] : n).some((n) => typeof n == "function" ? n(t) : M(n) ? n === t : n.test(t));
  }
  getBlocked(t) {
    const n = this.config.blocklist.find((s) => {
      const r = Array.isArray(s) ? s[0] : s;
      return typeof r == "function" ? r(t) : M(r) ? r === t : r.test(t);
    });
    return n ? Array.isArray(n) ? n : [n, void 0] : void 0;
  }
}
function mn(e, t) {
  return new hn(e, t);
}
const Ue = /\s\$\$\s+/g;
function gn(e) {
  return Ue.test(e);
}
function _n(e, t) {
  return gn(e) ? e.replace(Ue, t ? ` ${t} ` : " ") : t ? `${t} ${e}` : e;
}
const me = /^\[(.+?)(~?=)"(.*)"\]$/;
function yn(e) {
  return me.test(e) ? e.replace(me, (t, n, s, r) => `[${Y(n)}${s}"${Y(r)}"]`) : `.${Y(e)}`;
}
function bn(e, t) {
  return t(e);
}
var ge = { npm_package_dependencies__vueuse_core: "^10.11.0", TERM_PROGRAM: "iTerm.app", npm_package_devDependencies__types_splitpanes: "^2.2.6", NODE: "/Users/lujunjie/.nvm/versions/node/v20.12.2/bin/node", INIT_CWD: "/Users/lujunjie/code/github/vuejs/devtools-next/packages/client", npm_config___registry_npm_gf_com_cn__always_auth: "", npm_config___registry_npm_gf_com_cn__email: "lujunjie@gf.com.cn", npm_package_devDependencies_vite: "^5.3.1", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_config_shamefully_hoist: "true", npm_package_devDependencies_ohash: "^1.1.3", npm_package_devDependencies_floating_vue: "5.2.2", npm_package_dependencies__vue_devtools_shared: "workspace:^", npm_package_dependencies__unocss_runtime: "^0.61.0", npm_package_devDependencies__vitejs_plugin_vue: "^5.0.5", npm_package_devDependencies_unplugin_vue_components: "^0.27.0", npm_config_home: "https://www.npmjs.org", npm_config_registry: "https://registry.npmjs.org/", npm_package_private: "true", npm_package_devDependencies__vitejs_plugin_vue_jsx: "^4.0.0", npm_package_license: "MIT", LD_LIBRARY_PATH: "/Users/lujunjie/.gvm/pkgsets/go1.19/global/overlay/lib:", PNPM_SCRIPT_SRC_DIR: "/Users/lujunjie/code/github/vuejs/devtools-next/packages/client", npm_config_strict_peer_dependencies: "", npm_package_devDependencies_dayjs: "^1.11.11", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/bin/pnpm.cjs", npm_package_devDependencies_unplugin_auto_import: "^0.17.6", npm_package_scripts_build_lib: "vite build --config vite.lib.config.ts", npm_config_frozen_lockfile: "", npm_package_dependencies_vue_virtual_scroller: "2.0.0-beta.8", npm_package_dependencies_fuse_js: "^7.0.0", PATH: "/Users/lujunjie/code/github/vuejs/devtools-next/packages/client/node_modules/.bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/dist/node-gyp-bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.bin:/Users/lujunjie/code/github/vuejs/devtools-next/packages/client/node_modules/.bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/dist/node-gyp-bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.bin:/Users/lujunjie/Library/pnpm/global/5/.pnpm/pnpm@9.4.0/node_modules/pnpm/dist/node-gyp-bin:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.bin:/Users/lujunjie/Library/pnpm:/Users/lujunjie/.jenv/shims:/Users/lujunjie/.jenv/bin:/Users/lujunjie/.gvm/pkgsets/go1.19/global/bin:/Users/lujunjie/.gvm/gos/go1.19/bin:/Users/lujunjie/.gvm/pkgsets/go1.19/global/overlay/bin:/Users/lujunjie/.gvm/bin:/Users/lujunjie/.gvm/bin:/Users/lujunjie/.pyenv/shims:/Users/lujunjie/software/apache-maven-3.5.2/bin:/Users/lujunjie/.nvm/versions/node/v20.12.2/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/usr/local/go/bin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/lujunjie/.cargo/bin", npm_package_dependencies__vue_devtools_ui: "workspace:*", npm_package_scripts_stub_lib: "vite build --config vite.lib.config.ts --watch", npm_package_dependencies_splitpanes: "^3.1.5", npm_package_author: "webfansplz", npm_command: "run-script", PWD: "/Users/lujunjie/code/github/vuejs/devtools-next/packages/client", npm_package_exports____: "./dist/*", npm_lifecycle_event: "build:lib", npm_package_devDependencies_vue: "^3.4.29", npm_package_name: "@vue/devtools-client", npm_config___registry_npm_gf_com_cn__username: "lujunjie", npm_package_devDependencies_simple_git_hooks: "^2.11.1", npm_package_devDependencies_sass: "^1.77.6", npm_package_devDependencies__unocss_reset: "^0.61.0", npm_package_scripts_build: "tsx ./scripts/pre-build.ts && (nr build:lib & vite build)", NODE_PATH: "/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5_sass@1.77.6_terser@5.26.0/node_modules/vite/bin/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5_sass@1.77.6_terser@5.26.0/node_modules/vite/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5_sass@1.77.6_terser@5.26.0/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/bin/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/@antfu+ni@0.21.12/node_modules/@antfu/ni/bin/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/@antfu+ni@0.21.12/node_modules/@antfu/ni/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/@antfu+ni@0.21.12/node_modules/@antfu/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/@antfu+ni@0.21.12/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/bin/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules:/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/node_modules", npm_package_devDependencies_pinia: "^2.1.7", TURBO_HASH: "34ecb67cbfec8e38", npm_package_devDependencies__unocss_core: "^0.61.0", npm_package_engines_node: ">=v14.21.3", npm_config_node_gyp: "/Users/lujunjie/code/github/vuejs/devtools-next/node_modules/.pnpm/pnpm@9.4.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", npm_config_side_effects_cache: "", npm_package_dependencies_colord: "^2.9.3", npm_package_devDependencies__iconify_json: "^2.2.220", npm_package_dependencies_minimatch: "^9.0.4", npm_package_version: "7.3.4", npm_package_dependencies__vue_devtools_applet: "workspace:^", npm_package_devDependencies_unocss: "^0.61.0", npm_package_dependencies__vue_devtools_core: "workspace:^", npm_package_type: "module", HOME: "/Users/lujunjie", SHLVL: "0", npm_package_dependencies_vite_hot_client: "^0.2.3", npm_package_dependencies_vis_network: "^9.1.9", npm_package_peerDependencies_vite: "^3.1.0 || ^4.0.0-0 || ^5.0.0-0", npm_lifecycle_script: "vite build --config vite.lib.config.ts", npm_package_dependencies__vue_devtools_kit: "workspace:^", npm_package_dependencies__vueuse_integrations: "^10.11.0", npm_config_user_agent: "pnpm/9.4.0 npm/? node/v20.12.2 darwin x64", npm_package_devDependencies__types_node: "^20.14.5", npm_package_scripts_stub: "nr stub:lib & vite build --watch", npm_package_files_0: "dist", npm_package_devDependencies_unplugin: "^1.10.1", npm_package_dependencies_vue_router: "^4.3.3", npm_package_dependencies_shiki: "^1.9.0", npm_package_dependencies__unocss_preset_icons: "^0.61.0", npm_node_execpath: "/Users/lujunjie/.nvm/versions/node/v20.12.2/bin/node", npm_config_shell_emulator: "true", COLORTERM: "truecolor", NODE_ENV: "production" };
const vn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Q = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Le = Object.freeze({
  ...vn,
  ...Q
}), wn = Object.freeze({
  ...Le,
  body: "",
  hidden: !1
}), jn = Object.freeze({
  width: null,
  height: null
}), Pe = Object.freeze({
  // Dimensions
  ...jn,
  // Transformations
  ...Q
});
function Sn(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const s = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return s && (n.rotate = s), n;
}
function _e(e, t) {
  const n = Sn(e, t);
  for (const s in wn)
    s in Q ? s in e && !(s in n) && (n[s] = Q[s]) : s in t ? n[s] = t[s] : s in e && (n[s] = e[s]);
  return n;
}
function xn(e, t) {
  const n = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function o(c) {
    if (n[c])
      return r[c] = [];
    if (!(c in r)) {
      r[c] = null;
      const l = s[c] && s[c].parent, a = l && o(l);
      a && (r[c] = [l].concat(a));
    }
    return r[c];
  }
  return (t || Object.keys(n).concat(Object.keys(s))).forEach(o), r;
}
function ye(e, t, n) {
  const s = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function c(l) {
    o = _e(
      s[l] || r[l],
      o
    );
  }
  return c(t), n.forEach(c), _e(e, o);
}
function En(e, t) {
  if (e.icons[t])
    return ye(e, t, []);
  const n = xn(e, [t])[t];
  return n ? ye(e, t, n) : null;
}
const kn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, $n = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function be(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const s = e.split(kn);
  if (s === null || !s.length)
    return e;
  const r = [];
  let o = s.shift(), c = $n.test(o);
  for (; ; ) {
    if (c) {
      const l = parseFloat(o);
      isNaN(l) ? r.push(o) : r.push(Math.ceil(l * t * n) / n);
    } else
      r.push(o);
    if (o = s.shift(), o === void 0)
      return r.join("");
    c = !c;
  }
}
function An(e, t = "defs") {
  let n = "";
  const s = e.indexOf("<" + t);
  for (; s >= 0; ) {
    const r = e.indexOf(">", s), o = e.indexOf("</" + t);
    if (r === -1 || o === -1)
      break;
    const c = e.indexOf(">", o);
    if (c === -1)
      break;
    n += e.slice(r + 1, o).trim(), e = e.slice(0, s).trim() + e.slice(c + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function Cn(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function On(e, t, n) {
  const s = An(e);
  return Cn(s.defs, t + s.content + n);
}
const ie = (e) => e === "unset" || e === "undefined" || e === "none";
function Rn(e, t) {
  const n = {
    ...Le,
    ...e
  }, s = {
    ...Pe,
    ...t
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, s].forEach((y) => {
    const w = [], x = y.hFlip, k = y.vFlip;
    let h = y.rotate;
    x ? k ? h += 2 : (w.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), w.push("scale(-1 1)"), r.top = r.left = 0) : k && (w.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), w.push("scale(1 -1)"), r.top = r.left = 0);
    let g;
    switch (h < 0 && (h -= Math.floor(h / 4) * 4), h = h % 4, h) {
      case 1:
        g = r.height / 2 + r.top, w.unshift(
          "rotate(90 " + g.toString() + " " + g.toString() + ")"
        );
        break;
      case 2:
        w.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        g = r.width / 2 + r.left, w.unshift(
          "rotate(-90 " + g.toString() + " " + g.toString() + ")"
        );
        break;
    }
    h % 2 === 1 && (r.left !== r.top && (g = r.left, r.left = r.top, r.top = g), r.width !== r.height && (g = r.width, r.width = r.height, r.height = g)), w.length && (o = On(
      o,
      '<g transform="' + w.join(" ") + '">',
      "</g>"
    ));
  });
  const c = s.width, l = s.height, a = r.width, f = r.height;
  let i, u;
  c === null ? (u = l === null ? "1em" : l === "auto" ? f : l, i = be(u, a / f)) : (i = c === "auto" ? a : c, u = l === null ? be(i, f / a) : l === "auto" ? f : l);
  const d = {}, m = (y, w) => {
    ie(w) || (d[y] = w.toString());
  };
  m("width", i), m("height", u);
  const _ = [r.left, r.top, a, f];
  return d.viewBox = _.join(" "), {
    attributes: d,
    viewBox: _,
    body: o
  };
}
function Tn(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Mn(e) {
  let t = e.startsWith("<svg>") ? e.replace("<svg>", "<svg >") : e;
  return !t.includes(" xmlns:xlink=") && t.includes(" xlink:") && (t = t.replace(
    "<svg ",
    '<svg xmlns:xlink="http://www.w3.org/1999/xlink" '
  )), t.includes(" xmlns=") || (t = t.replace(
    "<svg ",
    '<svg xmlns="http://www.w3.org/2000/svg" '
  )), Tn(t);
}
function Un(e) {
  return e.replace(/(['"])\s*\n\s*([^>\\/\s])/g, "$1 $2").replace(/(["';{}><])\s*\n\s*/g, "$1").replace(/\s*\n\s*/g, " ").replace(/\s+"/g, '"').replace(/="\s+/g, '="').replace(/(\s)+\/>/g, "/>").trim();
}
const Ln = /\swidth\s*=\s*["']([\w.]+)["']/, Pn = /\sheight\s*=\s*["']([\w.]+)["']/, ee = /<svg\s+/;
function Nn(e, t, n) {
  const s = e.slice(0, e.indexOf(">")), r = (o, c) => {
    const l = c.exec(s), a = l != null, f = t[o];
    return !f && !ie(f) && (typeof n == "number" ? n > 0 && (t[o] = `${n}em`) : l && (t[o] = l[1])), a;
  };
  return [r("width", Ln), r("height", Pn)];
}
async function Ne(e, t, n, s, r, o) {
  const { scale: c, addXmlNs: l = !1 } = s ?? {}, { additionalProps: a = {}, iconCustomizer: f } = (s == null ? void 0 : s.customizations) ?? {}, i = await (r == null ? void 0 : r()) ?? {};
  await (f == null ? void 0 : f(t, n, i)), Object.keys(a).forEach((y) => {
    const w = a[y];
    w != null && (i[y] = w);
  }), o == null || o(i);
  const [u, d] = Nn(e, i, c);
  l && (!e.includes("xmlns=") && !i.xmlns && (i.xmlns = "http://www.w3.org/2000/svg"), !e.includes("xmlns:xlink=") && e.includes("xlink:") && !i["xmlns:xlink"] && (i["xmlns:xlink"] = "http://www.w3.org/1999/xlink"));
  const m = Object.keys(i).map(
    (y) => y === "width" && u || y === "height" && d ? null : `${y}="${i[y]}"`
  ).filter((y) => y != null);
  if (m.length && (e = e.replace(ee, `<svg ${m.join(" ")} `)), s) {
    const { defaultStyle: y, defaultClass: w } = s;
    w && !e.includes("class=") && (e = e.replace(ee, `<svg class="${w}" `)), y && !e.includes("style=") && (e = e.replace(ee, `<svg style="${y}" `));
  }
  const _ = s == null ? void 0 : s.usedProps;
  return _ && (Object.keys(a).forEach((y) => {
    const w = i[y];
    w != null && (_[y] = w);
  }), typeof i.width < "u" && i.width !== null && (_.width = i.width), typeof i.height < "u" && i.height !== null && (_.height = i.height)), e;
}
async function ve(e, t, n, s) {
  var o;
  let r;
  try {
    if (typeof e == "function")
      r = await e(n);
    else {
      const c = e[n];
      r = typeof c == "function" ? await c() : c;
    }
  } catch (c) {
    console.warn(
      `Failed to load custom icon "${n}" in "${t}":`,
      c
    );
    return;
  }
  if (r) {
    const c = r.indexOf("<svg");
    c > 0 && (r = r.slice(c));
    const { transform: l } = (s == null ? void 0 : s.customizations) ?? {};
    return r = typeof l == "function" ? await l(r, t, n) : r, r.startsWith("<svg") ? await Ne(
      ((o = s == null ? void 0 : s.customizations) == null ? void 0 : o.trimCustomSvg) === !0 ? Un(r) : r,
      t,
      n,
      s,
      void 0
    ) : (console.warn(
      `Custom icon "${n}" in "${t}" is not a valid SVG`
    ), r);
  }
}
async function De(e, t, n, s) {
  let r;
  const { customize: o } = (s == null ? void 0 : s.customizations) ?? {};
  for (const c of n)
    if (r = En(e, c), r) {
      let l = { ...Pe };
      typeof o == "function" && (l = o(l));
      const {
        attributes: { width: a, height: f, ...i },
        body: u
      } = Rn(r, l), d = s == null ? void 0 : s.scale;
      return await Ne(
        // DON'T remove space on <svg >
        `<svg >${u}</svg>`,
        t,
        c,
        s,
        () => ({ ...i }),
        (m) => {
          const _ = (y, w) => {
            const x = m[y];
            let k;
            if (!ie(x)) {
              if (x)
                return;
              typeof d == "number" ? d && (k = `${d}em`) : k = w;
            }
            k ? m[y] = k : delete m[y];
          };
          _("width", a), _("height", f);
        }
      );
    }
}
const Ie = async (e, t, n) => {
  var r;
  const s = (r = n == null ? void 0 : n.customCollections) == null ? void 0 : r[e];
  if (s)
    if (typeof s == "function") {
      let o;
      try {
        o = await s(t);
      } catch (c) {
        console.warn(
          `Failed to load custom icon "${t}" in "${e}":`,
          c
        );
        return;
      }
      if (o) {
        if (typeof o == "string")
          return await ve(
            () => o,
            e,
            t,
            n
          );
        if ("icons" in o) {
          const c = [
            t,
            t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            t.replace(/([a-z])(\d+)/g, "$1-$2")
          ];
          return await De(
            o,
            e,
            c,
            n
          );
        }
      }
    } else
      return await ve(s, e, t, n);
};
function Dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var In = [
  "academicons",
  "akar-icons",
  "ant-design",
  "arcticons",
  "basil",
  "bi",
  "bitcoin-icons",
  "bpmn",
  "brandico",
  "bx",
  "bxl",
  "bxs",
  "bytesize",
  "carbon",
  "cbi",
  "charm",
  "ci",
  "cib",
  "cif",
  "cil",
  "circle-flags",
  "circum",
  "clarity",
  "codicon",
  "covid",
  "cryptocurrency-color",
  "cryptocurrency",
  "dashicons",
  "devicon-line",
  "devicon-original",
  "devicon-plain",
  "devicon",
  "ei",
  "el",
  "emblemicons",
  "emojione-monotone",
  "emojione-v1",
  "emojione",
  "entypo-social",
  "entypo",
  "eos-icons",
  "ep",
  "et",
  "eva",
  "f7",
  "fa-brands",
  "fa-regular",
  "fa-solid",
  "fa",
  "fa6-brands",
  "fa6-regular",
  "fa6-solid",
  "fad",
  "fe",
  "feather",
  "file-icons",
  "flag",
  "flagpack",
  "flat-color-icons",
  "flat-ui",
  "flowbite",
  "fluent-emoji-flat",
  "fluent-emoji-high-contrast",
  "fluent-emoji",
  "fluent-mdl2",
  "fluent",
  "fontelico",
  "fontisto",
  "formkit",
  "foundation",
  "fxemoji",
  "gala",
  "game-icons",
  "geo",
  "gg",
  "gis",
  "gravity-ui",
  "gridicons",
  "grommet-icons",
  "guidance",
  "healthicons",
  "heroicons-outline",
  "heroicons-solid",
  "heroicons",
  "hugeicons",
  "humbleicons",
  "ic",
  "icomoon-free",
  "icon-park-outline",
  "icon-park-solid",
  "icon-park-twotone",
  "icon-park",
  "iconamoon",
  "iconoir",
  "icons8",
  "il",
  "ion",
  "iwwa",
  "jam",
  "la",
  "lets-icons",
  "line-md",
  "logos",
  "ls",
  "lucide",
  "mage",
  "majesticons",
  "maki",
  "map",
  "marketeq",
  "material-symbols-light",
  "material-symbols",
  "mdi-light",
  "mdi",
  "medical-icon",
  "memory",
  "meteocons",
  "mi",
  "mingcute",
  "mono-icons",
  "mynaui",
  "nimbus",
  "nonicons",
  "noto-v1",
  "noto",
  "octicon",
  "oi",
  "ooui",
  "openmoji",
  "oui",
  "pajamas",
  "pepicons-pencil",
  "pepicons-pop",
  "pepicons-print",
  "pepicons",
  "ph",
  "pixelarticons",
  "prime",
  "ps",
  "quill",
  "radix-icons",
  "raphael",
  "ri",
  "si-glyph",
  "simple-icons",
  "simple-line-icons",
  "skill-icons",
  "solar",
  "streamline-emojis",
  "streamline",
  "subway",
  "svg-spinners",
  "system-uicons",
  "tabler",
  "tdesign",
  "teenyicons",
  "token-branded",
  "token",
  "topcoat",
  "twemoji",
  "typcn",
  "uil",
  "uim",
  "uis",
  "uit",
  "uiw",
  "unjs",
  "vaadin",
  "vs",
  "vscode-icons",
  "websymbol",
  "whh",
  "wi",
  "wpf",
  "zmdi",
  "zondicons"
];
const Fn = /* @__PURE__ */ Dn(In), Vn = 3;
function zn(e) {
  return (t = {}) => {
    const {
      scale: n = 1,
      mode: s = "auto",
      prefix: r = "i-",
      warn: o = !1,
      collections: c,
      extraProperties: l = {},
      customizations: a = {},
      autoInstall: f = !1,
      collectionsNodeResolvePath: i,
      layer: u = "icons",
      unit: d,
      processor: m
    } = t, _ = Hn(), y = {
      addXmlNs: !0,
      scale: n,
      customCollections: c,
      autoInstall: f,
      cwd: i,
      // avoid warn from @iconify/loader: we'll warn below if not found
      warn: void 0,
      customizations: {
        ...a,
        additionalProps: { ...l },
        trimCustomSvg: !0,
        async iconCustomizer(x, k, h) {
          var g;
          await ((g = a.iconCustomizer) == null ? void 0 : g.call(a, x, k, h)), d && (h.width || (h.width = `${n}${d}`), h.height || (h.height = `${n}${d}`));
        }
      }
    };
    let w;
    return {
      name: "@unocss/preset-icons",
      enforce: "pre",
      options: t,
      layers: { icons: -30 },
      rules: [[
        /^([a-z0-9:_-]+)(?:\?(mask|bg|auto))?$/,
        async (x) => {
          let [k, h, g = s] = x, b = "", p = "", j;
          w = w || await e(t);
          const A = {};
          if (h.includes(":"))
            [b, p] = h.split(":"), j = await w(b, p, { ...y, usedProps: A });
          else {
            const P = h.split(/-/g);
            for (let N = Vn; N >= 1 && (b = P.slice(0, N).join("-"), p = P.slice(N).join("-"), j = await w(b, p, { ...y, usedProps: A }), !j); N--)
              ;
          }
          if (!j) {
            o && !_.isESLint && Re(`failed to load icon "${k}"`);
            return;
          }
          let $;
          const O = `url("data:image/svg+xml;utf8,${Mn(j)}")`;
          return g === "auto" && (g = j.includes("currentColor") ? "mask" : "bg"), g === "mask" ? $ = {
            "--un-icon": O,
            "-webkit-mask": "var(--un-icon) no-repeat",
            mask: "var(--un-icon) no-repeat",
            "-webkit-mask-size": "100% 100%",
            "mask-size": "100% 100%",
            "background-color": "currentColor",
            // for Safari https://github.com/elk-zone/elk/pull/264
            color: "inherit",
            ...A
          } : $ = {
            background: `${O} no-repeat`,
            "background-size": "100% 100%",
            "background-color": "transparent",
            ...A
          }, m == null || m($, { collection: b, icon: p, svg: j, mode: g }), $;
        },
        { layer: u, prefix: r }
      ]]
    };
  };
}
function Fe(e, t) {
  const n = /* @__PURE__ */ new Map();
  function s(r) {
    if (Fn.includes(r))
      return n.has(r) || n.set(r, e(`${t}@iconify-json/${r}/icons.json`)), n.get(r);
  }
  return async (r, o, c) => {
    let l = await Ie(r, o, c);
    if (l)
      return l;
    const a = await s(r);
    if (a) {
      const f = [
        o,
        o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        o.replace(/([a-z])(\d+)/g, "$1-$2")
      ];
      l = await De(a, r, f, c);
    }
    return l;
  };
}
function Hn() {
  const e = typeof process < "u" && process.stdout && !process.versions.deno, t = e && !!ge.VSCODE_CWD, n = e && !!ge.ESLINT;
  return {
    isNode: e,
    isVSCode: t,
    isESLint: n
  };
}
function Bn(e) {
  return Fe(Ut, e);
}
const qn = zn(async (e) => {
  const t = e == null ? void 0 : e.customFetch, n = e == null ? void 0 : e.cdn;
  return t && n ? Fe(t, n) : n ? Bn(n) : Ie;
});
function Gn(e) {
  return e.replace(/-(\w)/g, (t, n) => n ? n.toUpperCase() : "");
}
function we(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function je(e) {
  return e.replace(/(?:^|\B)([A-Z])/g, "-$1").toLowerCase();
}
var Se = ["Webkit", "Moz", "ms"];
function Wn(e) {
  const t = {};
  function n(s) {
    const r = t[s];
    if (r)
      return r;
    let o = Gn(s);
    if (o !== "filter" && o in e)
      return t[s] = je(o);
    o = we(o);
    for (let c = 0; c < Se.length; c++) {
      const l = `${Se[c]}${o}`;
      if (l in e)
        return t[s] = je(we(l));
    }
    return s;
  }
  return ({ entries: s }) => s.forEach((r) => {
    r[0].startsWith("--") || (r[0] = n(r[0]));
  });
}
function Jn(e) {
  return e.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
}
function Qn(e = {}) {
  var F, V, C;
  if (typeof window > "u") {
    console.warn("@unocss/runtime been used in non-browser environment, skipped.");
    return;
  }
  const t = window, n = window.document, s = () => n.documentElement, r = t.__unocss || {}, o = Object.assign({}, e, r.runtime), c = o.defaults || {}, l = o.cloakAttribute ?? "un-cloak";
  o.autoPrefix && (c.postprocess = L(c.postprocess)).unshift(Wn(n.createElement("div").style)), (F = o.configResolved) == null || F.call(o, r, c);
  const a = mn(r, c), f = (v) => o.inject ? o.inject(v) : s().prepend(v), i = () => o.rootElement ? o.rootElement() : n.body, u = /* @__PURE__ */ new Map();
  let d = !0, m = /* @__PURE__ */ new Set(), _, y, w = [];
  const x = () => new Promise((v) => {
    w.push(v), y != null && clearTimeout(y), y = setTimeout(() => g().then(() => {
      const S = w;
      w = [], S.forEach((E) => E());
    }), 0);
  });
  function k(v) {
    if (v.nodeType !== 1)
      return;
    const S = v;
    S.hasAttribute(l) && S.removeAttribute(l), S.querySelectorAll(`[${l}]`).forEach((E) => {
      E.removeAttribute(l);
    });
  }
  function h(v, S) {
    let E = u.get(v);
    if (!E)
      if (E = n.createElement("style"), E.setAttribute("data-unocss-runtime-layer", v), u.set(v, E), S == null)
        f(E);
      else {
        const U = h(S), R = U.parentNode;
        R ? R.insertBefore(E, U.nextSibling) : f(E);
      }
    return E;
  }
  async function g() {
    const v = await a.generate(m);
    return v.layers.reduce((S, E) => (h(E, S).innerHTML = v.getLayer(E) ?? "", E), void 0), m = v.matched, {
      ...v,
      getStyleElement: (S) => u.get(S),
      getStyleElements: () => u
    };
  }
  async function b(v) {
    const S = m.size;
    await a.applyExtractors(v, void 0, m), S !== m.size && await x();
  }
  async function p(v = i()) {
    const S = v && v.outerHTML;
    S && (await b(`${S} ${Jn(S)}`), k(s()), k(v));
  }
  const j = new MutationObserver((v) => {
    d || v.forEach(async (S) => {
      if (S.target.nodeType !== 1)
        return;
      const E = S.target;
      for (const U of u)
        if (E === U[1])
          return;
      if (S.type === "childList")
        S.addedNodes.forEach(async (U) => {
          if (U.nodeType !== 1)
            return;
          const R = U;
          _ && !_(R) || (await b(R.outerHTML), k(R));
        });
      else {
        if (_ && !_(E))
          return;
        if (S.attributeName !== l) {
          const U = Array.from(E.attributes).map((T) => T.value ? `${T.name}="${T.value}"` : T.name).join(" "), R = `<${E.tagName.toLowerCase()} ${U}>`;
          await b(R);
        }
        E.hasAttribute(l) && E.removeAttribute(l);
      }
    });
  });
  let A = !1;
  function $() {
    var S, E;
    if (A)
      return;
    const v = (S = o.observer) != null && S.target ? o.observer.target() : i();
    v && (j.observe(v, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: (E = o.observer) == null ? void 0 : E.attributeFilter
    }), A = !0);
  }
  function O() {
    o.bypassDefined && Kn(a.blocked), p(), $();
  }
  function P() {
    n.readyState === "loading" ? t.addEventListener("DOMContentLoaded", O) : O();
  }
  const N = t.__unocss_runtime = t.__unocss_runtime = {
    version: a.version,
    uno: a,
    async extract(v) {
      M(v) || (v.forEach((S) => m.add(S)), v = ""), await b(v);
    },
    extractAll: p,
    inspect(v) {
      _ = v;
    },
    toggleObserver(v) {
      v === void 0 ? d = !d : d = !!v, !A && !d && P();
    },
    update: g,
    presets: ((V = t.__unocss_runtime) == null ? void 0 : V.presets) ?? {}
  };
  ((C = o.ready) == null ? void 0 : C.call(o, N)) !== !1 && (d = !1, P());
}
function Kn(e = /* @__PURE__ */ new Set()) {
  for (let t = 0; t < document.styleSheets.length; t++) {
    const n = document.styleSheets[t];
    let s;
    try {
      if (s = n.cssRules || n.rules, !s)
        continue;
      Array.from(s).flatMap((r) => {
        var o;
        return ((o = r.selectorText) == null ? void 0 : o.split(/,/g)) || [];
      }).forEach((r) => {
        r && (r = r.trim(), r.startsWith(".") && (r = r.slice(1)), e.add(r));
      });
    } catch {
      continue;
    }
  }
  return e;
}
Qn({
  defaults: {
    presets: [
      qn({
        prefix: ["i-", ""],
        collections: {},
        cdn: "https://esm.sh/",
        scale: 1.2,
        extraProperties: {
          display: "inline-block",
          "vertical-align": "middle"
        }
      })
    ]
  },
  bypassDefined: !0
});
