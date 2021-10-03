/*! p5.js v0.6.0 January 19, 2018 */ ! function(a) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else { var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.p5 = a() } }(function() {
    var a;
    return function a(b, c, d) {
        function e(g, h) { if (!c[g]) { if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} };
                b[g][0].call(k.exports, function(a) { var c = b[g][1][a]; return e(c || a) }, k, k.exports, a, b, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]); return e }({
        1: [function(a, b, c) {! function(a) { "use strict";

                function b(a) { var b = a.charCodeAt(0); return b === f || b === k ? 62 : b === g || b === l ? 63 : b < h ? -1 : b < h + 10 ? b - h + 26 + 26 : b < j + 26 ? b - j : b < i + 26 ? b - i + 26 : void 0 }

                function c(a) {
                    function c(a) { j[l++] = a } var d, f, g, h, i, j; if (a.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var k = a.length;
                    i = "=" === a.charAt(k - 2) ? 2 : "=" === a.charAt(k - 1) ? 1 : 0, j = new e(3 * a.length / 4 - i), g = i > 0 ? a.length - 4 : a.length; var l = 0; for (d = 0, f = 0; d < g; d += 4, f += 3) h = b(a.charAt(d)) << 18 | b(a.charAt(d + 1)) << 12 | b(a.charAt(d + 2)) << 6 | b(a.charAt(d + 3)), c((16711680 & h) >> 16), c((65280 & h) >> 8), c(255 & h); return 2 === i ? (h = b(a.charAt(d)) << 2 | b(a.charAt(d + 1)) >> 4, c(255 & h)) : 1 === i && (h = b(a.charAt(d)) << 10 | b(a.charAt(d + 1)) << 4 | b(a.charAt(d + 2)) >> 2, c(h >> 8 & 255), c(255 & h)), j }

                function d(a) {
                    function b(a) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a) }

                    function c(a) { return b(a >> 18 & 63) + b(a >> 12 & 63) + b(a >> 6 & 63) + b(63 & a) } var d, e, f, g = a.length % 3,
                        h = ""; for (d = 0, f = a.length - g; d < f; d += 3) e = (a[d] << 16) + (a[d + 1] << 8) + a[d + 2], h += c(e); switch (g) {
                        case 1:
                            e = a[a.length - 1], h += b(e >> 2), h += b(e << 4 & 63), h += "=="; break;
                        case 2:
                            e = (a[a.length - 2] << 8) + a[a.length - 1], h += b(e >> 10), h += b(e >> 4 & 63), h += b(e << 2 & 63), h += "=" } return h } var e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    f = "+".charCodeAt(0),
                    g = "/".charCodeAt(0),
                    h = "0".charCodeAt(0),
                    i = "a".charCodeAt(0),
                    j = "A".charCodeAt(0),
                    k = "-".charCodeAt(0),
                    l = "_".charCodeAt(0);
                a.toByteArray = c, a.fromByteArray = d }(void 0 === c ? this.base64js = {} : c) }, {}],
        2: [function(a, b, c) {}, {}],
        3: [function(a, b, c) {
            (function(b) { "use strict";

                function d() {
                    function a() {} try { var b = new Uint8Array(1); return b.foo = function() { return 42 }, b.constructor = a, 42 === b.foo() && b.constructor === a && "function" == typeof b.subarray && 0 === b.subarray(1, 1).byteLength } catch (a) { return !1 } }

                function e() { return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                function f(a) { return this instanceof f ? (f.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof a ? g(this, a) : "string" == typeof a ? h(this, a, arguments.length > 1 ? arguments[1] : "utf8") : i(this, a)) : arguments.length > 1 ? new f(a, arguments[1]) : new f(a) }

                function g(a, b) { if (a = p(a, b < 0 ? 0 : 0 | q(b)), !f.TYPED_ARRAY_SUPPORT)
                        for (var c = 0; c < b; c++) a[c] = 0; return a }

                function h(a, b, c) { return "string" == typeof c && "" !== c || (c = "utf8"), a = p(a, 0 | s(b, c)), a.write(b, c), a }

                function i(a, b) { if (f.isBuffer(b)) return j(a, b); if (Y(b)) return k(a, b); if (null == b) throw new TypeError("must start with number, buffer, array or string"); if ("undefined" != typeof ArrayBuffer) { if (b.buffer instanceof ArrayBuffer) return l(a, b); if (b instanceof ArrayBuffer) return m(a, b) } return b.length ? n(a, b) : o(a, b) }

                function j(a, b) { var c = 0 | q(b.length); return a = p(a, c), b.copy(a, 0, 0, c), a }

                function k(a, b) { var c = 0 | q(b.length);
                    a = p(a, c); for (var d = 0; d < c; d += 1) a[d] = 255 & b[d]; return a }

                function l(a, b) { var c = 0 | q(b.length);
                    a = p(a, c); for (var d = 0; d < c; d += 1) a[d] = 255 & b[d]; return a }

                function m(a, b) { return f.TYPED_ARRAY_SUPPORT ? (b.byteLength, a = f._augment(new Uint8Array(b))) : a = l(a, new Uint8Array(b)), a }

                function n(a, b) { var c = 0 | q(b.length);
                    a = p(a, c); for (var d = 0; d < c; d += 1) a[d] = 255 & b[d]; return a }

                function o(a, b) { var c, d = 0; "Buffer" === b.type && Y(b.data) && (c = b.data, d = 0 | q(c.length)), a = p(a, d); for (var e = 0; e < d; e += 1) a[e] = 255 & c[e]; return a }

                function p(a, b) { return f.TYPED_ARRAY_SUPPORT ? (a = f._augment(new Uint8Array(b)), a.__proto__ = f.prototype) : (a.length = b, a._isBuffer = !0), 0 !== b && b <= f.poolSize >>> 1 && (a.parent = Z), a }

                function q(a) { if (a >= e()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e().toString(16) + " bytes"); return 0 | a }

                function r(a, b) { if (!(this instanceof r)) return new r(a, b); var c = new f(a, b); return delete c.parent, c }

                function s(a, b) { "string" != typeof a && (a = "" + a); var c = a.length; if (0 === c) return 0; for (var d = !1;;) switch (b) {
                        case "ascii":
                        case "binary":
                        case "raw":
                        case "raws":
                            return c;
                        case "utf8":
                        case "utf-8":
                            return R(a).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * c;
                        case "hex":
                            return c >>> 1;
                        case "base64":
                            return U(a).length;
                        default:
                            if (d) return R(a).length;
                            b = ("" + b).toLowerCase(), d = !0 } }

                function t(a, b, c) { var d = !1; if (b |= 0, c = void 0 === c || c === 1 / 0 ? this.length : 0 | c, a || (a = "utf8"), b < 0 && (b = 0), c > this.length && (c = this.length), c <= b) return ""; for (;;) switch (a) {
                        case "hex":
                            return F(this, b, c);
                        case "utf8":
                        case "utf-8":
                            return B(this, b, c);
                        case "ascii":
                            return D(this, b, c);
                        case "binary":
                            return E(this, b, c);
                        case "base64":
                            return A(this, b, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return G(this, b, c);
                        default:
                            if (d) throw new TypeError("Unknown encoding: " + a);
                            a = (a + "").toLowerCase(), d = !0 } }

                function u(a, b, c, d) { c = Number(c) || 0; var e = a.length - c;
                    d ? (d = Number(d)) > e && (d = e) : d = e; var f = b.length; if (f % 2 != 0) throw new Error("Invalid hex string");
                    d > f / 2 && (d = f / 2); for (var g = 0; g < d; g++) { var h = parseInt(b.substr(2 * g, 2), 16); if (isNaN(h)) throw new Error("Invalid hex string");
                        a[c + g] = h } return g }

                function v(a, b, c, d) { return V(R(b, a.length - c), a, c, d) }

                function w(a, b, c, d) { return V(S(b), a, c, d) }

                function x(a, b, c, d) { return w(a, b, c, d) }

                function y(a, b, c, d) { return V(U(b), a, c, d) }

                function z(a, b, c, d) { return V(T(b, a.length - c), a, c, d) }

                function A(a, b, c) { return 0 === b && c === a.length ? W.fromByteArray(a) : W.fromByteArray(a.slice(b, c)) }

                function B(a, b, c) { c = Math.min(a.length, c); for (var d = [], e = b; e < c;) { var f = a[e],
                            g = null,
                            h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1; if (e + h <= c) { var i, j, k, l; switch (h) {
                                case 1:
                                    f < 128 && (g = f); break;
                                case 2:
                                    i = a[e + 1], 128 == (192 & i) && (l = (31 & f) << 6 | 63 & i) > 127 && (g = l); break;
                                case 3:
                                    i = a[e + 1], j = a[e + 2], 128 == (192 & i) && 128 == (192 & j) && (l = (15 & f) << 12 | (63 & i) << 6 | 63 & j) > 2047 && (l < 55296 || l > 57343) && (g = l); break;
                                case 4:
                                    i = a[e + 1], j = a[e + 2], k = a[e + 3], 128 == (192 & i) && 128 == (192 & j) && 128 == (192 & k) && (l = (15 & f) << 18 | (63 & i) << 12 | (63 & j) << 6 | 63 & k) > 65535 && l < 1114112 && (g = l) } }
                        null === g ? (g = 65533, h = 1) : g > 65535 && (g -= 65536, d.push(g >>> 10 & 1023 | 55296), g = 56320 | 1023 & g), d.push(g), e += h } return C(d) }

                function C(a) { var b = a.length; if (b <= $) return String.fromCharCode.apply(String, a); for (var c = "", d = 0; d < b;) c += String.fromCharCode.apply(String, a.slice(d, d += $)); return c }

                function D(a, b, c) { var d = "";
                    c = Math.min(a.length, c); for (var e = b; e < c; e++) d += String.fromCharCode(127 & a[e]); return d }

                function E(a, b, c) { var d = "";
                    c = Math.min(a.length, c); for (var e = b; e < c; e++) d += String.fromCharCode(a[e]); return d }

                function F(a, b, c) { var d = a.length;
                    (!b || b < 0) && (b = 0), (!c || c < 0 || c > d) && (c = d); for (var e = "", f = b; f < c; f++) e += Q(a[f]); return e }

                function G(a, b, c) { for (var d = a.slice(b, c), e = "", f = 0; f < d.length; f += 2) e += String.fromCharCode(d[f] + 256 * d[f + 1]); return e }

                function H(a, b, c) { if (a % 1 != 0 || a < 0) throw new RangeError("offset is not uint"); if (a + b > c) throw new RangeError("Trying to access beyond buffer length") }

                function I(a, b, c, d, e, g) { if (!f.isBuffer(a)) throw new TypeError("buffer must be a Buffer instance"); if (b > e || b < g) throw new RangeError("value is out of bounds"); if (c + d > a.length) throw new RangeError("index out of range") }

                function J(a, b, c, d) { b < 0 && (b = 65535 + b + 1); for (var e = 0, f = Math.min(a.length - c, 2); e < f; e++) a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e) }

                function K(a, b, c, d) { b < 0 && (b = 4294967295 + b + 1); for (var e = 0, f = Math.min(a.length - c, 4); e < f; e++) a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255 }

                function L(a, b, c, d, e, f) { if (b > e || b < f) throw new RangeError("value is out of bounds"); if (c + d > a.length) throw new RangeError("index out of range"); if (c < 0) throw new RangeError("index out of range") }

                function M(a, b, c, d, e) { return e || L(a, b, c, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(a, b, c, d, 23, 4), c + 4 }

                function N(a, b, c, d, e) { return e || L(a, b, c, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(a, b, c, d, 52, 8), c + 8 }

                function O(a) { if (a = P(a).replace(aa, ""), a.length < 2) return ""; for (; a.length % 4 != 0;) a += "="; return a }

                function P(a) { return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "") }

                function Q(a) { return a < 16 ? "0" + a.toString(16) : a.toString(16) }

                function R(a, b) { b = b || 1 / 0; for (var c, d = a.length, e = null, f = [], g = 0; g < d; g++) { if ((c = a.charCodeAt(g)) > 55295 && c < 57344) { if (!e) { if (c > 56319) {
                                    (b -= 3) > -1 && f.push(239, 191, 189); continue } if (g + 1 === d) {
                                    (b -= 3) > -1 && f.push(239, 191, 189); continue }
                                e = c; continue } if (c < 56320) {
                                (b -= 3) > -1 && f.push(239, 191, 189), e = c; continue }
                            c = 65536 + (e - 55296 << 10 | c - 56320) } else e && (b -= 3) > -1 && f.push(239, 191, 189); if (e = null, c < 128) { if ((b -= 1) < 0) break;
                            f.push(c) } else if (c < 2048) { if ((b -= 2) < 0) break;
                            f.push(c >> 6 | 192, 63 & c | 128) } else if (c < 65536) { if ((b -= 3) < 0) break;
                            f.push(c >> 12 | 224, c >> 6 & 63 | 128, 63 & c | 128) } else { if (!(c < 1114112)) throw new Error("Invalid code point"); if ((b -= 4) < 0) break;
                            f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, 63 & c | 128) } } return f }

                function S(a) { for (var b = [], c = 0; c < a.length; c++) b.push(255 & a.charCodeAt(c)); return b }

                function T(a, b) { for (var c, d, e, f = [], g = 0; g < a.length && !((b -= 2) < 0); g++) c = a.charCodeAt(g), d = c >> 8, e = c % 256, f.push(e), f.push(d); return f }

                function U(a) { return W.toByteArray(O(a)) }

                function V(a, b, c, d) { for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); e++) b[e + c] = a[e]; return e } var W = a("base64-js"),
                    X = a("ieee754"),
                    Y = a("isarray");
                c.Buffer = f, c.SlowBuffer = r, c.INSPECT_MAX_BYTES = 50, f.poolSize = 8192; var Z = {};
                f.TYPED_ARRAY_SUPPORT = void 0 !== b.TYPED_ARRAY_SUPPORT ? b.TYPED_ARRAY_SUPPORT : d(), f.TYPED_ARRAY_SUPPORT ? (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array) : (f.prototype.length = void 0, f.prototype.parent = void 0), f.isBuffer = function(a) { return !(null == a || !a._isBuffer) }, f.compare = function(a, b) { if (!f.isBuffer(a) || !f.isBuffer(b)) throw new TypeError("Arguments must be Buffers"); if (a === b) return 0; for (var c = a.length, d = b.length, e = 0, g = Math.min(c, d); e < g && a[e] === b[e];) ++e; return e !== g && (c = a[e], d = b[e]), c < d ? -1 : d < c ? 1 : 0 }, f.isEncoding = function(a) { switch (String(a).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "raw":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1 } }, f.concat = function(a, b) { if (!Y(a)) throw new TypeError("list argument must be an Array of Buffers."); if (0 === a.length) return new f(0); var c; if (void 0 === b)
                        for (b = 0, c = 0; c < a.length; c++) b += a[c].length; var d = new f(b),
                        e = 0; for (c = 0; c < a.length; c++) { var g = a[c];
                        g.copy(d, e), e += g.length } return d }, f.byteLength = s, f.prototype.toString = function() { var a = 0 | this.length; return 0 === a ? "" : 0 === arguments.length ? B(this, 0, a) : t.apply(this, arguments) }, f.prototype.equals = function(a) { if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer"); return this === a || 0 === f.compare(this, a) }, f.prototype.inspect = function() { var a = "",
                        b = c.INSPECT_MAX_BYTES; return this.length > 0 && (a = this.toString("hex", 0, b).match(/.{2}/g).join(" "), this.length > b && (a += " ... ")), "<Buffer " + a + ">" }, f.prototype.compare = function(a) { if (!f.isBuffer(a)) throw new TypeError("Argument must be a Buffer"); return this === a ? 0 : f.compare(this, a) }, f.prototype.indexOf = function(a, b) {
                    function c(a, b, c) { for (var d = -1, e = 0; c + e < a.length; e++)
                            if (a[c + e] === b[-1 === d ? 0 : e - d]) { if (-1 === d && (d = e), e - d + 1 === b.length) return c + d } else d = -1;
                        return -1 } if (b > 2147483647 ? b = 2147483647 : b < -2147483648 && (b = -2147483648), b >>= 0, 0 === this.length) return -1; if (b >= this.length) return -1; if (b < 0 && (b = Math.max(this.length + b, 0)), "string" == typeof a) return 0 === a.length ? -1 : String.prototype.indexOf.call(this, a, b); if (f.isBuffer(a)) return c(this, a, b); if ("number" == typeof a) return f.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, a, b) : c(this, [a], b); throw new TypeError("val must be string, number or Buffer") }, f.prototype.get = function(a) { return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(a) }, f.prototype.set = function(a, b) { return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(a, b) }, f.prototype.write = function(a, b, c, d) { if (void 0 === b) d = "utf8", c = this.length, b = 0;
                    else if (void 0 === c && "string" == typeof b) d = b, c = this.length, b = 0;
                    else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = "utf8")) : (d = c, c = void 0);
                    else { var e = d;
                        d = b, b = 0 | c, c = e } var f = this.length - b; if ((void 0 === c || c > f) && (c = f), a.length > 0 && (c < 0 || b < 0) || b > this.length) throw new RangeError("attempt to write outside buffer bounds");
                    d || (d = "utf8"); for (var g = !1;;) switch (d) {
                        case "hex":
                            return u(this, a, b, c);
                        case "utf8":
                        case "utf-8":
                            return v(this, a, b, c);
                        case "ascii":
                            return w(this, a, b, c);
                        case "binary":
                            return x(this, a, b, c);
                        case "base64":
                            return y(this, a, b, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return z(this, a, b, c);
                        default:
                            if (g) throw new TypeError("Unknown encoding: " + d);
                            d = ("" + d).toLowerCase(), g = !0 } }, f.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var $ = 4096;
                f.prototype.slice = function(a, b) { var c = this.length;
                    a = ~~a, b = void 0 === b ? c : ~~b, a < 0 ? (a += c) < 0 && (a = 0) : a > c && (a = c), b < 0 ? (b += c) < 0 && (b = 0) : b > c && (b = c), b < a && (b = a); var d; if (f.TYPED_ARRAY_SUPPORT) d = f._augment(this.subarray(a, b));
                    else { var e = b - a;
                        d = new f(e, void 0); for (var g = 0; g < e; g++) d[g] = this[g + a] } return d.length && (d.parent = this.parent || this), d }, f.prototype.readUIntLE = function(a, b, c) { a |= 0, b |= 0, c || H(a, b, this.length); for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) d += this[a + f] * e; return d }, f.prototype.readUIntBE = function(a, b, c) { a |= 0, b |= 0, c || H(a, b, this.length); for (var d = this[a + --b], e = 1; b > 0 && (e *= 256);) d += this[a + --b] * e; return d }, f.prototype.readUInt8 = function(a, b) { return b || H(a, 1, this.length), this[a] }, f.prototype.readUInt16LE = function(a, b) { return b || H(a, 2, this.length), this[a] | this[a + 1] << 8 }, f.prototype.readUInt16BE = function(a, b) { return b || H(a, 2, this.length), this[a] << 8 | this[a + 1] }, f.prototype.readUInt32LE = function(a, b) { return b || H(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3] }, f.prototype.readUInt32BE = function(a, b) { return b || H(a, 4, this.length), 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]) }, f.prototype.readIntLE = function(a, b, c) { a |= 0, b |= 0, c || H(a, b, this.length); for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);) d += this[a + f] * e; return e *= 128, d >= e && (d -= Math.pow(2, 8 * b)), d }, f.prototype.readIntBE = function(a, b, c) { a |= 0, b |= 0, c || H(a, b, this.length); for (var d = b, e = 1, f = this[a + --d]; d > 0 && (e *= 256);) f += this[a + --d] * e; return e *= 128, f >= e && (f -= Math.pow(2, 8 * b)), f }, f.prototype.readInt8 = function(a, b) { return b || H(a, 1, this.length), 128 & this[a] ? -1 * (255 - this[a] + 1) : this[a] }, f.prototype.readInt16LE = function(a, b) { b || H(a, 2, this.length); var c = this[a] | this[a + 1] << 8; return 32768 & c ? 4294901760 | c : c }, f.prototype.readInt16BE = function(a, b) { b || H(a, 2, this.length); var c = this[a + 1] | this[a] << 8; return 32768 & c ? 4294901760 | c : c }, f.prototype.readInt32LE = function(a, b) { return b || H(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24 }, f.prototype.readInt32BE = function(a, b) { return b || H(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3] }, f.prototype.readFloatLE = function(a, b) { return b || H(a, 4, this.length), X.read(this, a, !0, 23, 4) }, f.prototype.readFloatBE = function(a, b) { return b || H(a, 4, this.length), X.read(this, a, !1, 23, 4) }, f.prototype.readDoubleLE = function(a, b) { return b || H(a, 8, this.length), X.read(this, a, !0, 52, 8) }, f.prototype.readDoubleBE = function(a, b) { return b || H(a, 8, this.length), X.read(this, a, !1, 52, 8) }, f.prototype.writeUIntLE = function(a, b, c, d) { a = +a, b |= 0, c |= 0, d || I(this, a, b, c, Math.pow(2, 8 * c), 0); var e = 1,
                        f = 0; for (this[b] = 255 & a; ++f < c && (e *= 256);) this[b + f] = a / e & 255; return b + c }, f.prototype.writeUIntBE = function(a, b, c, d) { a = +a, b |= 0, c |= 0, d || I(this, a, b, c, Math.pow(2, 8 * c), 0); var e = c - 1,
                        f = 1; for (this[b + e] = 255 & a; --e >= 0 && (f *= 256);) this[b + e] = a / f & 255; return b + c }, f.prototype.writeUInt8 = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), this[b] = 255 & a, b + 1 }, f.prototype.writeUInt16LE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2 }, f.prototype.writeUInt16BE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2 }, f.prototype.writeUInt32LE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = 255 & a) : K(this, a, b, !0), b + 4 }, f.prototype.writeUInt32BE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4 }, f.prototype.writeIntLE = function(a, b, c, d) { if (a = +a, b |= 0, !d) { var e = Math.pow(2, 8 * c - 1);
                        I(this, a, b, c, e - 1, -e) } var f = 0,
                        g = 1,
                        h = a < 0 ? 1 : 0; for (this[b] = 255 & a; ++f < c && (g *= 256);) this[b + f] = (a / g >> 0) - h & 255; return b + c }, f.prototype.writeIntBE = function(a, b, c, d) { if (a = +a, b |= 0, !d) { var e = Math.pow(2, 8 * c - 1);
                        I(this, a, b, c, e - 1, -e) } var f = c - 1,
                        g = 1,
                        h = a < 0 ? 1 : 0; for (this[b + f] = 255 & a; --f >= 0 && (g *= 256);) this[b + f] = (a / g >> 0) - h & 255; return b + c }, f.prototype.writeInt8 = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (a = Math.floor(a)), a < 0 && (a = 255 + a + 1), this[b] = 255 & a, b + 1 }, f.prototype.writeInt16LE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8) : J(this, a, b, !0), b + 2 }, f.prototype.writeInt16BE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = 255 & a) : J(this, a, b, !1), b + 2 }, f.prototype.writeInt32LE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[b] = 255 & a, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : K(this, a, b, !0), b + 4 }, f.prototype.writeInt32BE = function(a, b, c) { return a = +a, b |= 0, c || I(this, a, b, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), f.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = 255 & a) : K(this, a, b, !1), b + 4 }, f.prototype.writeFloatLE = function(a, b, c) { return M(this, a, b, !0, c) }, f.prototype.writeFloatBE = function(a, b, c) { return M(this, a, b, !1, c) }, f.prototype.writeDoubleLE = function(a, b, c) { return N(this, a, b, !0, c) }, f.prototype.writeDoubleBE = function(a, b, c) { return N(this, a, b, !1, c) }, f.prototype.copy = function(a, b, c, d) { if (c || (c = 0), d || 0 === d || (d = this.length), b >= a.length && (b = a.length), b || (b = 0), d > 0 && d < c && (d = c), d === c) return 0; if (0 === a.length || 0 === this.length) return 0; if (b < 0) throw new RangeError("targetStart out of bounds"); if (c < 0 || c >= this.length) throw new RangeError("sourceStart out of bounds"); if (d < 0) throw new RangeError("sourceEnd out of bounds");
                    d > this.length && (d = this.length), a.length - b < d - c && (d = a.length - b + c); var e, g = d - c; if (this === a && c < b && b < d)
                        for (e = g - 1; e >= 0; e--) a[e + b] = this[e + c];
                    else if (g < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                        for (e = 0; e < g; e++) a[e + b] = this[e + c];
                    else a._set(this.subarray(c, c + g), b); return g }, f.prototype.fill = function(a, b, c) { if (a || (a = 0), b || (b = 0), c || (c = this.length), c < b) throw new RangeError("end < start"); if (c !== b && 0 !== this.length) { if (b < 0 || b >= this.length) throw new RangeError("start out of bounds"); if (c < 0 || c > this.length) throw new RangeError("end out of bounds"); var d; if ("number" == typeof a)
                            for (d = b; d < c; d++) this[d] = a;
                        else { var e = R(a.toString()),
                                f = e.length; for (d = b; d < c; d++) this[d] = e[d % f] } return this } }, f.prototype.toArrayBuffer = function() { if ("undefined" != typeof Uint8Array) { if (f.TYPED_ARRAY_SUPPORT) return new f(this).buffer; for (var a = new Uint8Array(this.length), b = 0, c = a.length; b < c; b += 1) a[b] = this[b]; return a.buffer } throw new TypeError("Buffer.toArrayBuffer not supported in this browser") }; var _ = f.prototype;
                f._augment = function(a) { return a.constructor = f, a._isBuffer = !0, a._set = a.set, a.get = _.get, a.set = _.set, a.write = _.write, a.toString = _.toString, a.toLocaleString = _.toString, a.toJSON = _.toJSON, a.equals = _.equals, a.compare = _.compare, a.indexOf = _.indexOf, a.copy = _.copy, a.slice = _.slice, a.readUIntLE = _.readUIntLE, a.readUIntBE = _.readUIntBE, a.readUInt8 = _.readUInt8, a.readUInt16LE = _.readUInt16LE, a.readUInt16BE = _.readUInt16BE, a.readUInt32LE = _.readUInt32LE, a.readUInt32BE = _.readUInt32BE, a.readIntLE = _.readIntLE, a.readIntBE = _.readIntBE, a.readInt8 = _.readInt8, a.readInt16LE = _.readInt16LE, a.readInt16BE = _.readInt16BE, a.readInt32LE = _.readInt32LE, a.readInt32BE = _.readInt32BE, a.readFloatLE = _.readFloatLE, a.readFloatBE = _.readFloatBE, a.readDoubleLE = _.readDoubleLE, a.readDoubleBE = _.readDoubleBE, a.writeUInt8 = _.writeUInt8, a.writeUIntLE = _.writeUIntLE, a.writeUIntBE = _.writeUIntBE, a.writeUInt16LE = _.writeUInt16LE, a.writeUInt16BE = _.writeUInt16BE, a.writeUInt32LE = _.writeUInt32LE, a.writeUInt32BE = _.writeUInt32BE, a.writeIntLE = _.writeIntLE, a.writeIntBE = _.writeIntBE, a.writeInt8 = _.writeInt8, a.writeInt16LE = _.writeInt16LE, a.writeInt16BE = _.writeInt16BE, a.writeInt32LE = _.writeInt32LE, a.writeInt32BE = _.writeInt32BE, a.writeFloatLE = _.writeFloatLE, a.writeFloatBE = _.writeFloatBE, a.writeDoubleLE = _.writeDoubleLE, a.writeDoubleBE = _.writeDoubleBE, a.fill = _.fill, a.inspect = _.inspect, a.toArrayBuffer = _.toArrayBuffer, a }; var aa = /[^+\/0-9A-Za-z-_]/g }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "base64-js": 1, ieee754: 7, isarray: 8 }],
        4: [function(b, c, d) {
            (function(e, f) {! function(b, e) { "object" == typeof d && void 0 !== c ? c.exports = e() : "function" == typeof a && a.amd ? a(e) : b.ES6Promise = e() }(this, function() { "use strict";

                    function a(a) { var b = typeof a; return null !== a && ("object" === b || "function" === b) }

                    function c(a) { return "function" == typeof a }

                    function d(a) { X = a }

                    function g(a) { Y = a }

                    function h() { return function() { return e.nextTick(m) } }

                    function i() { return void 0 !== W ? function() { W(m) } : l() }

                    function j() { var a = 0,
                            b = new _(m),
                            c = document.createTextNode(""); return b.observe(c, { characterData: !0 }),
                            function() { c.data = a = ++a % 2 } }

                    function k() { var a = new MessageChannel; return a.port1.onmessage = m,
                            function() { return a.port2.postMessage(0) } }

                    function l() { var a = setTimeout; return function() { return a(m, 1) } }

                    function m() { for (var a = 0; a < V; a += 2) {
                            (0, ca[a])(ca[a + 1]), ca[a] = void 0, ca[a + 1] = void 0 }
                        V = 0 }

                    function n() { try { var a = b,
                                c = a("vertx"); return W = c.runOnLoop || c.runOnContext, i() } catch (a) { return l() } }

                    function o(a, b) { var c = arguments,
                            d = this,
                            e = new this.constructor(q);
                        void 0 === e[ea] && J(e); var f = d._state; return f ? function() { var a = c[f - 1];
                            Y(function() { return G(f, e, a, d._result) }) }() : C(d, e, a, b), e }

                    function p(a) { var b = this; if (a && "object" == typeof a && a.constructor === b) return a; var c = new b(q); return y(c, a), c }

                    function q() {}

                    function r() { return new TypeError("You cannot resolve a promise with itself") }

                    function s() { return new TypeError("A promises callback cannot return that same promise.") }

                    function t(a) { try { return a.then } catch (a) { return ia.error = a, ia } }

                    function u(a, b, c, d) { try { a.call(b, c, d) } catch (a) { return a } }

                    function v(a, b, c) { Y(function(a) { var d = !1,
                                e = u(c, b, function(c) { d || (d = !0, b !== c ? y(a, c) : A(a, c)) }, function(b) { d || (d = !0, B(a, b)) }, "Settle: " + (a._label || " unknown promise"));!d && e && (d = !0, B(a, e)) }, a) }

                    function w(a, b) { b._state === ga ? A(a, b._result) : b._state === ha ? B(a, b._result) : C(b, void 0, function(b) { return y(a, b) }, function(b) { return B(a, b) }) }

                    function x(a, b, d) { b.constructor === a.constructor && d === o && b.constructor.resolve === p ? w(a, b) : d === ia ? (B(a, ia.error), ia.error = null) : void 0 === d ? A(a, b) : c(d) ? v(a, b, d) : A(a, b) }

                    function y(b, c) { b === c ? B(b, r()) : a(c) ? x(b, c, t(c)) : A(b, c) }

                    function z(a) { a._onerror && a._onerror(a._result), D(a) }

                    function A(a, b) { a._state === fa && (a._result = b, a._state = ga, 0 !== a._subscribers.length && Y(D, a)) }

                    function B(a, b) { a._state === fa && (a._state = ha, a._result = b, Y(z, a)) }

                    function C(a, b, c, d) { var e = a._subscribers,
                            f = e.length;
                        a._onerror = null, e[f] = b, e[f + ga] = c, e[f + ha] = d, 0 === f && a._state && Y(D, a) }

                    function D(a) { var b = a._subscribers,
                            c = a._state; if (0 !== b.length) { for (var d = void 0, e = void 0, f = a._result, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? G(c, d, e, f) : e(f);
                            a._subscribers.length = 0 } }

                    function E() { this.error = null }

                    function F(a, b) { try { return a(b) } catch (a) { return ja.error = a, ja } }

                    function G(a, b, d, e) { var f = c(d),
                            g = void 0,
                            h = void 0,
                            i = void 0,
                            j = void 0; if (f) { if (g = F(d, e), g === ja ? (j = !0, h = g.error, g.error = null) : i = !0, b === g) return void B(b, s()) } else g = e, i = !0;
                        b._state !== fa || (f && i ? y(b, g) : j ? B(b, h) : a === ga ? A(b, g) : a === ha && B(b, g)) }

                    function H(a, b) { try { b(function(b) { y(a, b) }, function(b) { B(a, b) }) } catch (b) { B(a, b) } }

                    function I() { return ka++ }

                    function J(a) { a[ea] = ka++, a._state = void 0, a._result = void 0, a._subscribers = [] }

                    function K(a, b) { this._instanceConstructor = a, this.promise = new a(q), this.promise[ea] || J(this.promise), U(b) ? (this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(b), 0 === this._remaining && A(this.promise, this._result))) : B(this.promise, L()) }

                    function L() { return new Error("Array Methods must be provided an Array") }

                    function M(a) { return new K(this, a).promise }

                    function N(a) { var b = this; return new b(U(a) ? function(c, d) { for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d) } : function(a, b) { return b(new TypeError("You must pass an array to race.")) }) }

                    function O(a) { var b = this,
                            c = new b(q); return B(c, a), c }

                    function P() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

                    function Q() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

                    function R(a) { this[ea] = I(), this._result = this._state = void 0, this._subscribers = [], q !== a && ("function" != typeof a && P(), this instanceof R ? H(this, a) : Q()) }

                    function S() { var a = void 0; if (void 0 !== f) a = f;
                        else if ("undefined" != typeof self) a = self;
                        else try { a = Function("return this")() } catch (a) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                        var b = a.Promise; if (b) { var c = null; try { c = Object.prototype.toString.call(b.resolve()) } catch (a) {} if ("[object Promise]" === c && !b.cast) return }
                        a.Promise = R } var T = void 0;
                    T = Array.isArray ? Array.isArray : function(a) { return "[object Array]" === Object.prototype.toString.call(a) }; var U = T,
                        V = 0,
                        W = void 0,
                        X = void 0,
                        Y = function(a, b) { ca[V] = a, ca[V + 1] = b, 2 === (V += 2) && (X ? X(m) : da()) },
                        Z = "undefined" != typeof window ? window : void 0,
                        $ = Z || {},
                        _ = $.MutationObserver || $.WebKitMutationObserver,
                        aa = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                        ba = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        ca = new Array(1e3),
                        da = void 0;
                    da = aa ? h() : _ ? j() : ba ? k() : void 0 === Z && "function" == typeof b ? n() : l(); var ea = Math.random().toString(36).substring(16),
                        fa = void 0,
                        ga = 1,
                        ha = 2,
                        ia = new E,
                        ja = new E,
                        ka = 0; return K.prototype._enumerate = function(a) { for (var b = 0; this._state === fa && b < a.length; b++) this._eachEntry(a[b], b) }, K.prototype._eachEntry = function(a, b) { var c = this._instanceConstructor,
                            d = c.resolve; if (d === p) { var e = t(a); if (e === o && a._state !== fa) this._settledAt(a._state, b, a._result);
                            else if ("function" != typeof e) this._remaining--, this._result[b] = a;
                            else if (c === R) { var f = new c(q);
                                x(f, a, e), this._willSettleAt(f, b) } else this._willSettleAt(new c(function(b) { return b(a) }), b) } else this._willSettleAt(d(a), b) }, K.prototype._settledAt = function(a, b, c) { var d = this.promise;
                        d._state === fa && (this._remaining--, a === ha ? B(d, c) : this._result[b] = c), 0 === this._remaining && A(d, this._result) }, K.prototype._willSettleAt = function(a, b) { var c = this;
                        C(a, void 0, function(a) { return c._settledAt(ga, b, a) }, function(a) { return c._settledAt(ha, b, a) }) }, R.all = M, R.race = N, R.resolve = p, R.reject = O, R._setScheduler = d, R._setAsap = g, R._asap = Y, R.prototype = { constructor: R, then: o, catch: function(a) { return this.then(null, a) } }, R.polyfill = S, R.Promise = R, R }) }).call(this, b("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { _process: 10 }],
        5: [function(b, c, d) {! function(b, e) { if ("function" == typeof a && a.amd) a(["exports", "module"], e);
                else if (void 0 !== d && void 0 !== c) e(d, c);
                else { var f = { exports: {} };
                    e(f.exports, f), b.fetchJsonp = f.exports } }(this, function(a, b) { "use strict";

                function c() { return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()) }

                function d(a) { try { delete window[a] } catch (b) { window[a] = void 0 } }

                function e(a) { var b = document.getElementById(a);
                    b && document.getElementsByTagName("head")[0].removeChild(b) }

                function f(a) { var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        f = a,
                        h = b.timeout || g.timeout,
                        i = b.jsonpCallback || g.jsonpCallback,
                        j = void 0; return new Promise(function(g, k) { var l = b.jsonpCallbackFunction || c(),
                            m = i + "_" + l;
                        window[l] = function(a) { g({ ok: !0, json: function() { return Promise.resolve(a) } }), j && clearTimeout(j), e(m), d(l) }, f += -1 === f.indexOf("?") ? "?" : "&"; var n = document.createElement("script");
                        n.setAttribute("src", "" + f + i + "=" + l), b.charset && n.setAttribute("charset", b.charset), n.id = m, document.getElementsByTagName("head")[0].appendChild(n), j = setTimeout(function() { k(new Error("JSONP request to " + a + " timed out")), d(l), e(m), window[l] = function() { d(l) } }, h), n.onerror = function() { k(new Error("JSONP request to " + a + " failed")), d(l), e(m), j && clearTimeout(j) } }) } var g = { timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null };
                b.exports = f }) }, {}],
        6: [function(b, c, d) { var e = e || function(a) { "use strict"; if (!(void 0 === a || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) { var b = a.document,
                        c = function() { return a.URL || a.webkitURL || a },
                        d = b.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        e = "download" in d,
                        f = function(a) { var b = new MouseEvent("click");
                            a.dispatchEvent(b) },
                        g = /constructor/i.test(a.HTMLElement) || a.safari,
                        h = /CriOS\/[\d]+/.test(navigator.userAgent),
                        i = function(b) {
                            (a.setImmediate || a.setTimeout)(function() { throw b }, 0) },
                        j = "application/octet-stream",
                        k = 4e4,
                        l = function(a) { var b = function() { "string" == typeof a ? c().revokeObjectURL(a) : a.remove() };
                            setTimeout(b, k) },
                        m = function(a, b, c) { b = [].concat(b); for (var d = b.length; d--;) { var e = a["on" + b[d]]; if ("function" == typeof e) try { e.call(a, c || a) } catch (a) { i(a) } } },
                        n = function(a) { return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([String.fromCharCode(65279), a], { type: a.type }) : a },
                        o = function(b, i, k) { k || (b = n(b)); var o, p = this,
                                q = b.type,
                                r = q === j,
                                s = function() { m(p, "writestart progress write writeend".split(" ")) },
                                t = function() { if ((h || r && g) && a.FileReader) { var d = new FileReader; return d.onloadend = function() { var b = h ? d.result : d.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                            a.open(b, "_blank") || (a.location.href = b), b = void 0, p.readyState = p.DONE, s() }, d.readAsDataURL(b), void(p.readyState = p.INIT) } if (o || (o = c().createObjectURL(b)), r) a.location.href = o;
                                    else { a.open(o, "_blank") || (a.location.href = o) }
                                    p.readyState = p.DONE, s(), l(o) }; if (p.readyState = p.INIT, e) return o = c().createObjectURL(b), void setTimeout(function() { d.href = o, d.download = i, f(d), s(), l(o), p.readyState = p.DONE });
                            t() },
                        p = o.prototype,
                        q = function(a, b, c) { return new o(a, b || a.name || "download", c) }; return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(a, b, c) { return b = b || a.name || "download", c || (a = n(a)), navigator.msSaveOrOpenBlob(a, b) } : (p.abort = function() {}, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, q) } }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== c && c.exports ? c.exports.saveAs = e : void 0 !== a && null !== a && null !== a.amd && a("FileSaver.js", function() { return e }) }, {}],
        7: [function(a, b, c) { c.read = function(a, b, c, d, e) { var f, g, h = 8 * e - d - 1,
                    i = (1 << h) - 1,
                    j = i >> 1,
                    k = -7,
                    l = c ? e - 1 : 0,
                    m = c ? -1 : 1,
                    n = a[b + l]; for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8); for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8); if (0 === f) f = 1 - j;
                else { if (f === i) return g ? NaN : 1 / 0 * (n ? -1 : 1);
                    g += Math.pow(2, d), f -= j } return (n ? -1 : 1) * g * Math.pow(2, f - d) }, c.write = function(a, b, c, d, e, f) { var g, h, i, j = 8 * f - e - 1,
                    k = (1 << j) - 1,
                    l = k >> 1,
                    m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    n = d ? 0 : f - 1,
                    o = d ? 1 : -1,
                    p = b < 0 || 0 === b && 1 / b < 0 ? 1 : 0; for (b = Math.abs(b), isNaN(b) || b === 1 / 0 ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8); for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8);
                a[c + n - o] |= 128 * p } }, {}],
        8: [function(a, b, c) { var d = {}.toString;
            b.exports = Array.isArray || function(a) { return "[object Array]" == d.call(a) } }, {}],
        9: [function(b, c, d) {
            (function(e) {
                ! function(b, e) { "object" == typeof d && void 0 !== c ? e(d) : "function" == typeof a && a.amd ? a(["exports"], e) : e(b.opentype = b.opentype || {}) }(this, function(a) {
                    "use strict";

                    function c() {
                        this.table = new Uint16Array(16), this.trans = new Uint16Array(288)
                    }

                    function d(a, b) { this.source = a, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = b, this.destLen = 0, this.ltree = new c, this.dtree = new c }

                    function f(a, b, c, d) { var e, f; for (e = 0; e < c; ++e) a[e] = 0; for (e = 0; e < 30 - c; ++e) a[e + c] = e / c | 0; for (f = d, e = 0; e < 30; ++e) b[e] = f, f += 1 << a[e] }

                    function g(a, b) { var c; for (c = 0; c < 7; ++c) a.table[c] = 0; for (a.table[7] = 24, a.table[8] = 152, a.table[9] = 112, c = 0; c < 24; ++c) a.trans[c] = 256 + c; for (c = 0; c < 144; ++c) a.trans[24 + c] = c; for (c = 0; c < 8; ++c) a.trans[168 + c] = 280 + c; for (c = 0; c < 112; ++c) a.trans[176 + c] = 144 + c; for (c = 0; c < 5; ++c) b.table[c] = 0; for (b.table[5] = 32, c = 0; c < 32; ++c) b.trans[c] = c }

                    function h(a, b, c, d) { var e, f; for (e = 0; e < 16; ++e) a.table[e] = 0; for (e = 0; e < d; ++e) a.table[b[c + e]]++; for (a.table[0] = 0, f = 0, e = 0; e < 16; ++e) xe[e] = f, f += a.table[e]; for (e = 0; e < d; ++e) b[c + e] && (a.trans[xe[b[c + e]]++] = e) }

                    function i(a) { a.bitcount-- || (a.tag = a.source[a.sourceIndex++], a.bitcount = 7); var b = 1 & a.tag; return a.tag >>>= 1, b }

                    function j(a, b, c) { if (!b) return c; for (; a.bitcount < 24;) a.tag |= a.source[a.sourceIndex++] << a.bitcount, a.bitcount += 8; var d = a.tag & 65535 >>> 16 - b; return a.tag >>>= b, a.bitcount -= b, d + c }

                    function k(a, b) { for (; a.bitcount < 24;) a.tag |= a.source[a.sourceIndex++] << a.bitcount, a.bitcount += 8; var c = 0,
                            d = 0,
                            e = 0,
                            f = a.tag;
                        do { d = 2 * d + (1 & f), f >>>= 1, ++e, c += b.table[e], d -= b.table[e] } while (d >= 0); return a.tag = f, a.bitcount -= e, b.trans[c + d] }

                    function l(a, b, c) { var d, e, f, g, i, l; for (d = j(a, 5, 257), e = j(a, 5, 1), f = j(a, 4, 4), g = 0; g < 19; ++g) we[g] = 0; for (g = 0; g < f; ++g) { var m = j(a, 3, 0);
                            we[ue[g]] = m } for (h(ve, we, 0, 19), i = 0; i < d + e;) { var n = k(a, ve); switch (n) {
                                case 16:
                                    var o = we[i - 1]; for (l = j(a, 2, 3); l; --l) we[i++] = o; break;
                                case 17:
                                    for (l = j(a, 3, 3); l; --l) we[i++] = 0; break;
                                case 18:
                                    for (l = j(a, 7, 11); l; --l) we[i++] = 0; break;
                                default:
                                    we[i++] = n } }
                        h(b, we, 0, d), h(c, we, d, e) }

                    function m(a, b, c) { for (;;) { var d = k(a, b); if (256 === d) return me; if (d < 256) a.dest[a.destLen++] = d;
                            else { var e, f, g, h; for (d -= 257, e = j(a, qe[d], re[d]), f = k(a, c), g = a.destLen - j(a, se[f], te[f]), h = g; h < g + e; ++h) a.dest[a.destLen++] = a.dest[h] } } }

                    function n(a) { for (var b, c, d; a.bitcount > 8;) a.sourceIndex--, a.bitcount -= 8; if (b = a.source[a.sourceIndex + 1], b = 256 * b + a.source[a.sourceIndex], c = a.source[a.sourceIndex + 3], c = 256 * c + a.source[a.sourceIndex + 2], b !== (65535 & ~c)) return ne; for (a.sourceIndex += 4, d = b; d; --d) a.dest[a.destLen++] = a.source[a.sourceIndex++]; return a.bitcount = 0, me }

                    function o(a, b) { var c, e, f = new d(a, b);
                        do { switch (c = i(f), j(f, 2, 0)) {
                                case 0:
                                    e = n(f); break;
                                case 1:
                                    e = m(f, oe, pe); break;
                                case 2:
                                    l(f, f.ltree, f.dtree), e = m(f, f.ltree, f.dtree); break;
                                default:
                                    e = ne } if (e !== me) throw new Error("Data error") } while (!c); return f.destLen < f.dest.length ? "function" == typeof f.dest.slice ? f.dest.slice(0, f.destLen) : f.dest.subarray(0, f.destLen) : f.dest }

                    function p(a, b, c, d, e) { return Math.pow(1 - e, 3) * a + 3 * Math.pow(1 - e, 2) * e * b + 3 * (1 - e) * Math.pow(e, 2) * c + Math.pow(e, 3) * d }

                    function q() { this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN }

                    function r() { this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1 }

                    function s(a) { throw new Error(a) }

                    function t(a, b) { a || s(b) }

                    function u(a) { return function() { return a } }

                    function v(a) { return a >= -128 && a <= 127 }

                    function w(a, b, c) { for (var d = 0, e = a.length; b < e && d < 64 && 0 === a[b];) ++b, ++d; return c.push(128 | d - 1), b }

                    function x(a, b, c) { for (var d = 0, e = a.length, f = b; f < e && d < 64;) { var g = a[f]; if (!v(g)) break; if (0 === g && f + 1 < e && 0 === a[f + 1]) break;++f, ++d }
                        c.push(d - 1); for (var h = b; h < f; ++h) c.push(a[h] + 256 & 255); return f }

                    function y(a, b, c) { for (var d = 0, e = a.length, f = b; f < e && d < 64;) { var g = a[f]; if (0 === g) break; if (v(g) && f + 1 < e && v(a[f + 1])) break;++f, ++d }
                        c.push(64 | d - 1); for (var h = b; h < f; ++h) { var i = a[h];
                            c.push(i + 65536 >> 8 & 255, i + 256 & 255) } return f }

                    function z(a, b, c) { for (var d = this, e = 0; e < b.length; e += 1) { var f = b[e];
                            d[f.name] = f.value } if (this.tableName = a, this.fields = b, c)
                            for (var g = Object.keys(c), h = 0; h < g.length; h += 1) { var i = g[h],
                                    j = c[i];
                                void 0 !== d[i] && (d[i] = j) } }

                    function A(a, b, c) { void 0 === c && (c = b.length); var d = new Array(b.length + 1);
                        d[0] = { name: a + "Count", type: "USHORT", value: c }; for (var e = 0; e < b.length; e++) d[e + 1] = { name: a + e, type: "USHORT", value: b[e] }; return d }

                    function B(a, b, c) { var d = b.length,
                            e = new Array(d + 1);
                        e[0] = { name: a + "Count", type: "USHORT", value: d }; for (var f = 0; f < d; f++) e[f + 1] = { name: a + f, type: "TABLE", value: c(b[f], f) }; return e }

                    function C(a, b, c) { var d = b.length,
                            e = [];
                        e[0] = { name: a + "Count", type: "USHORT", value: d }; for (var f = 0; f < d; f++) e = e.concat(c(b[f], f)); return e }

                    function D(a) { 1 === a.format ? z.call(this, "coverageTable", [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(A("glyph", a.glyphs))) : ze.assert(!1, "Can't create coverage table format 2 yet.") }

                    function E(a) { z.call(this, "scriptListTable", C("scriptRecord", a, function(a, b) { var c = a.script,
                                d = c.defaultLangSys; return ze.assert(!!d, "Unable to write GSUB: script " + a.tag + " has no default language system."), [{ name: "scriptTag" + b, type: "TAG", value: a.tag }, { name: "script" + b, type: "TABLE", value: new z("scriptTable", [{ name: "defaultLangSys", type: "TABLE", value: new z("defaultLangSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: d.reqFeatureIndex }].concat(A("featureIndex", d.featureIndexes))) }].concat(C("langSys", c.langSysRecords, function(a, b) { var c = a.langSys; return [{ name: "langSysTag" + b, type: "TAG", value: a.tag }, { name: "langSys" + b, type: "TABLE", value: new z("langSys", [{ name: "lookupOrder", type: "USHORT", value: 0 }, { name: "reqFeatureIndex", type: "USHORT", value: c.reqFeatureIndex }].concat(A("featureIndex", c.featureIndexes))) }] }))) }] })) }

                    function F(a) { z.call(this, "featureListTable", C("featureRecord", a, function(a, b) { var c = a.feature; return [{ name: "featureTag" + b, type: "TAG", value: a.tag }, { name: "feature" + b, type: "TABLE", value: new z("featureTable", [{ name: "featureParams", type: "USHORT", value: c.featureParams }].concat(A("lookupListIndex", c.lookupListIndexes))) }] })) }

                    function G(a, b) { z.call(this, "lookupListTable", B("lookup", a, function(a) { var c = b[a.lookupType]; return ze.assert(!!c, "Unable to write GSUB lookup type " + a.lookupType + " tables."), new z("lookupTable", [{ name: "lookupType", type: "USHORT", value: a.lookupType }, { name: "lookupFlag", type: "USHORT", value: a.lookupFlag }].concat(B("subtable", a.subtables, c))) })) }

                    function H(a, b) { return a.getUint8(b) }

                    function I(a, b) { return a.getUint16(b, !1) }

                    function J(a, b) { return a.getInt16(b, !1) }

                    function K(a, b) { return a.getUint32(b, !1) }

                    function L(a, b) { return a.getInt16(b, !1) + a.getUint16(b + 2, !1) / 65535 }

                    function M(a, b) { for (var c = "", d = b; d < b + 4; d += 1) c += String.fromCharCode(a.getInt8(d)); return c }

                    function N(a, b, c) { for (var d = 0, e = 0; e < c; e += 1) d <<= 8, d += a.getUint8(b + e); return d }

                    function O(a, b, c) { for (var d = [], e = b; e < c; e += 1) d.push(a.getUint8(e)); return d }

                    function P(a) { for (var b = "", c = 0; c < a.length; c += 1) b += String.fromCharCode(a[c]); return b }

                    function Q(a, b) { this.data = a, this.offset = b, this.relativeOffset = 0 }

                    function R(a, b) { b.parseUShort(), a.length = b.parseULong(), a.language = b.parseULong(); var c;
                        a.groupCount = c = b.parseULong(), a.glyphIndexMap = {}; for (var d = 0; d < c; d += 1)
                            for (var e = b.parseULong(), f = b.parseULong(), g = b.parseULong(), h = e; h <= f; h += 1) a.glyphIndexMap[h] = g, g++ }

                    function S(a, b, c, d, e) { a.length = b.parseUShort(), a.language = b.parseUShort(); var f;
                        a.segCount = f = b.parseUShort() >> 1, b.skip("uShort", 3), a.glyphIndexMap = {}; for (var g = new Ne.Parser(c, d + e + 14), h = new Ne.Parser(c, d + e + 16 + 2 * f), i = new Ne.Parser(c, d + e + 16 + 4 * f), j = new Ne.Parser(c, d + e + 16 + 6 * f), k = d + e + 16 + 8 * f, l = 0; l < f - 1; l += 1)
                            for (var m = void 0, n = g.parseUShort(), o = h.parseUShort(), p = i.parseShort(), q = j.parseUShort(), r = o; r <= n; r += 1) 0 !== q ? (k = j.offset + j.relativeOffset - 2, k += q, k += 2 * (r - o), 0 !== (m = Ne.getUShort(c, k)) && (m = m + p & 65535)) : m = r + p & 65535, a.glyphIndexMap[r] = m }

                    function T(a, b) { var c = {};
                        c.version = Ne.getUShort(a, b), ze.argument(0 === c.version, "cmap table version should be 0."), c.numTables = Ne.getUShort(a, b + 2); for (var d = -1, e = c.numTables - 1; e >= 0; e -= 1) { var f = Ne.getUShort(a, b + 4 + 8 * e),
                                g = Ne.getUShort(a, b + 4 + 8 * e + 2); if (3 === f && (0 === g || 1 === g || 10 === g)) { d = Ne.getULong(a, b + 4 + 8 * e + 4); break } } if (-1 === d) throw new Error("No valid cmap sub-tables found."); var h = new Ne.Parser(a, b + d); if (c.format = h.parseUShort(), 12 === c.format) R(c, h);
                        else { if (4 !== c.format) throw new Error("Only format 4 and 12 cmap tables are supported (found format " + c.format + ").");
                            S(c, h, a, b, d) } return c }

                    function U(a, b, c) { a.segments.push({ end: b, start: b, delta: -(b - c), offset: 0 }) }

                    function V(a) { a.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 }) }

                    function W(a) { var b = new Ke.Table("cmap", [{ name: "version", type: "USHORT", value: 0 }, { name: "numTables", type: "USHORT", value: 1 }, { name: "platformID", type: "USHORT", value: 3 }, { name: "encodingID", type: "USHORT", value: 1 }, { name: "offset", type: "ULONG", value: 12 }, { name: "format", type: "USHORT", value: 4 }, { name: "length", type: "USHORT", value: 0 }, { name: "language", type: "USHORT", value: 0 }, { name: "segCountX2", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);
                        b.segments = []; for (var c = 0; c < a.length; c += 1) { for (var d = a.get(c), e = 0; e < d.unicodes.length; e += 1) U(b, d.unicodes[e], c);
                            b.segments = b.segments.sort(function(a, b) { return a.start - b.start }) }
                        V(b); var f;
                        f = b.segments.length, b.segCountX2 = 2 * f, b.searchRange = 2 * Math.pow(2, Math.floor(Math.log(f) / Math.log(2))), b.entrySelector = Math.log(b.searchRange / 2) / Math.log(2), b.rangeShift = b.segCountX2 - b.searchRange; for (var g = [], h = [], i = [], j = [], k = [], l = 0; l < f; l += 1) { var m = b.segments[l];
                            g = g.concat({ name: "end_" + l, type: "USHORT", value: m.end }), h = h.concat({ name: "start_" + l, type: "USHORT", value: m.start }), i = i.concat({ name: "idDelta_" + l, type: "SHORT", value: m.delta }), j = j.concat({ name: "idRangeOffset_" + l, type: "USHORT", value: m.offset }), void 0 !== m.glyphId && (k = k.concat({ name: "glyph_" + l, type: "USHORT", value: m.glyphId })) } return b.fields = b.fields.concat(g), b.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }), b.fields = b.fields.concat(h), b.fields = b.fields.concat(i), b.fields = b.fields.concat(j), b.fields = b.fields.concat(k), b.length = 14 + 2 * g.length + 2 + 2 * h.length + 2 * i.length + 2 * j.length + 2 * k.length, b }

                    function X(a) { this.font = a }

                    function Y(a) { this.cmap = a }

                    function Z(a, b) { this.encoding = a, this.charset = b }

                    function $(a) { var b = this; switch (a.version) {
                            case 1:
                                this.names = Se.slice(); break;
                            case 2:
                                this.names = new Array(a.numberOfGlyphs); for (var c = 0; c < a.numberOfGlyphs; c++) a.glyphNameIndex[c] < Se.length ? b.names[c] = Se[a.glyphNameIndex[c]] : b.names[c] = a.names[a.glyphNameIndex[c] - Se.length]; break;
                            case 2.5:
                                this.names = new Array(a.numberOfGlyphs); for (var d = 0; d < a.numberOfGlyphs; d++) b.names[d] = Se[d + a.glyphNameIndex[d]]; break;
                            case 3:
                            default:
                                this.names = [] } }

                    function _(a) { for (var b, c = a.tables.cmap.glyphIndexMap, d = Object.keys(c), e = 0; e < d.length; e += 1) { var f = d[e],
                                g = c[f];
                            b = a.glyphs.get(g), b.addUnicode(parseInt(f)) } for (var h = 0; h < a.glyphs.length; h += 1) b = a.glyphs.get(h), a.cffEncoding ? a.isCIDFont ? b.name = "gid" + h : b.name = a.cffEncoding.charset[h] : a.glyphNames.names && (b.name = a.glyphNames.glyphIndexToName(h)) }

                    function aa(a, b, c, d, e) { a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke() }

                    function ba(a, b, c, d, e) { var f; return (b & d) > 0 ? (f = a.parseByte(), 0 == (b & e) && (f = -f), f = c + f) : f = (b & e) > 0 ? c : c + a.parseShort(), f }

                    function ca(a, b, c) { var d = new Ne.Parser(b, c);
                        a.numberOfContours = d.parseShort(), a._xMin = d.parseShort(), a._yMin = d.parseShort(), a._xMax = d.parseShort(), a._yMax = d.parseShort(); var e, f; if (a.numberOfContours > 0) { for (var g = a.endPointIndices = [], h = 0; h < a.numberOfContours; h += 1) g.push(d.parseUShort());
                            a.instructionLength = d.parseUShort(), a.instructions = []; for (var i = 0; i < a.instructionLength; i += 1) a.instructions.push(d.parseByte()); var j = g[g.length - 1] + 1;
                            e = []; for (var k = 0; k < j; k += 1)
                                if (f = d.parseByte(), e.push(f), (8 & f) > 0)
                                    for (var l = d.parseByte(), m = 0; m < l; m += 1) e.push(f), k += 1;
                            if (ze.argument(e.length === j, "Bad flags."), g.length > 0) { var n, o = []; if (j > 0) { for (var p = 0; p < j; p += 1) f = e[p], n = {}, n.onCurve = !!(1 & f), n.lastPointOfContour = g.indexOf(p) >= 0, o.push(n); for (var q = 0, r = 0; r < j; r += 1) f = e[r], n = o[r], n.x = ba(d, f, q, 2, 16), q = n.x; for (var s = 0, t = 0; t < j; t += 1) f = e[t], n = o[t], n.y = ba(d, f, s, 4, 32), s = n.y }
                                a.points = o } else a.points = [] } else if (0 === a.numberOfContours) a.points = [];
                        else { a.isComposite = !0, a.points = [], a.components = []; for (var u = !0; u;) { e = d.parseUShort(); var v = { glyphIndex: d.parseUShort(), xScale: 1, scale01: 0, scale10: 0, yScale: 1, dx: 0, dy: 0 };
                                (1 & e) > 0 ? (2 & e) > 0 ? (v.dx = d.parseShort(), v.dy = d.parseShort()) : v.matchedPoints = [d.parseUShort(), d.parseUShort()] : (2 & e) > 0 ? (v.dx = d.parseChar(), v.dy = d.parseChar()) : v.matchedPoints = [d.parseByte(), d.parseByte()], (8 & e) > 0 ? v.xScale = v.yScale = d.parseF2Dot14() : (64 & e) > 0 ? (v.xScale = d.parseF2Dot14(), v.yScale = d.parseF2Dot14()) : (128 & e) > 0 && (v.xScale = d.parseF2Dot14(), v.scale01 = d.parseF2Dot14(), v.scale10 = d.parseF2Dot14(), v.yScale = d.parseF2Dot14()), a.components.push(v), u = !!(32 & e) } if (256 & e) { a.instructionLength = d.parseUShort(), a.instructions = []; for (var w = 0; w < a.instructionLength; w += 1) a.instructions.push(d.parseByte()) } } }

                    function da(a, b) { for (var c = [], d = 0; d < a.length; d += 1) { var e = a[d],
                                f = { x: b.xScale * e.x + b.scale01 * e.y + b.dx, y: b.scale10 * e.x + b.yScale * e.y + b.dy, onCurve: e.onCurve, lastPointOfContour: e.lastPointOfContour };
                            c.push(f) } return c }

                    function ea(a) { for (var b = [], c = [], d = 0; d < a.length; d += 1) { var e = a[d];
                            c.push(e), e.lastPointOfContour && (b.push(c), c = []) } return ze.argument(0 === c.length, "There are still points left in the current contour."), b }

                    function fa(a) { var b = new r; if (!a) return b; for (var c = ea(a), d = 0; d < c.length; ++d) { var e = c[d],
                                f = null,
                                g = e[e.length - 1],
                                h = e[0]; if (g.onCurve) b.moveTo(g.x, g.y);
                            else if (h.onCurve) b.moveTo(h.x, h.y);
                            else { var i = { x: .5 * (g.x + h.x), y: .5 * (g.y + h.y) };
                                b.moveTo(i.x, i.y) } for (var j = 0; j < e.length; ++j)
                                if (f = g, g = h, h = e[(j + 1) % e.length], g.onCurve) b.lineTo(g.x, g.y);
                                else { var k = f,
                                        l = h;
                                    f.onCurve || (k = { x: .5 * (g.x + f.x), y: .5 * (g.y + f.y) }, b.lineTo(k.x, k.y)), h.onCurve || (l = { x: .5 * (g.x + h.x), y: .5 * (g.y + h.y) }), b.lineTo(k.x, k.y), b.quadraticCurveTo(g.x, g.y, l.x, l.y) }
                            b.closePath() } return b }

                    function ga(a, b) { if (b.isComposite)
                            for (var c = 0; c < b.components.length; c += 1) { var d = b.components[c],
                                    e = a.get(d.glyphIndex); if (e.getPath(), e.points) { var f = void 0; if (void 0 === d.matchedPoints) f = da(e.points, d);
                                    else { if (d.matchedPoints[0] > b.points.length - 1 || d.matchedPoints[1] > e.points.length - 1) throw Error("Matched points out of range in " + b.name); var g = b.points[d.matchedPoints[0]],
                                            h = e.points[d.matchedPoints[1]],
                                            i = { xScale: d.xScale, scale01: d.scale01, scale10: d.scale10, yScale: d.yScale, dx: 0, dy: 0 };
                                        h = da([h], i)[0], i.dx = g.x - h.x, i.dy = g.y - h.y, f = da(e.points, i) }
                                    b.points = b.points.concat(f) } }
                        return fa(b.points) }

                    function ha(a, b, c, d) { for (var e = new Ve.GlyphSet(d), f = 0; f < c.length - 1; f += 1) { var g = c[f];
                            g !== c[f + 1] ? e.push(f, Ve.ttfGlyphLoader(d, f, ca, a, b + g, ga)) : e.push(f, Ve.glyphLoader(d, f)) } return e }

                    function ia(a, b) { var c = b || { commands: [] }; return { configurable: !0, get: function() { return "function" == typeof c && (c = c()), c }, set: function(a) { c = a } } }

                    function ja(a) { this.bindConstructorValues(a) }

                    function ka(a, b, c) { Object.defineProperty(a, b, { get: function() { return a.path, a[c] }, set: function(b) { a[c] = b }, enumerable: !0, configurable: !0 }) }

                    function la(a, b) { var c = this; if (this.font = a, this.glyphs = {}, Array.isArray(b))
                            for (var d = 0; d < b.length; d++) c.glyphs[d] = b[d];
                        this.length = b && b.length || 0 }

                    function ma(a, b) { return new ja({ index: b, font: a }) }

                    function na(a, b, c, d, e, f) { return function() { var g = new ja({ index: b, font: a }); return g.path = function() { c(g, d, e); var b = f(a.glyphs, g); return b.unitsPerEm = a.unitsPerEm, b }, ka(g, "xMin", "_xMin"), ka(g, "xMax", "_xMax"), ka(g, "yMin", "_yMin"), ka(g, "yMax", "_yMax"), g } }

                    function oa(a, b, c, d) { return function() { var e = new ja({ index: b, font: a }); return e.path = function() { var b = c(a, e, d); return b.unitsPerEm = a.unitsPerEm, b }, e } }

                    function pa(a, b) { if (a === b) return !0; if (Array.isArray(a) && Array.isArray(b)) { if (a.length !== b.length) return !1; for (var c = 0; c < a.length; c += 1)
                                if (!pa(a[c], b[c])) return !1;
                            return !0 } return !1 }

                    function qa(a) { return a.length < 1240 ? 107 : a.length < 33900 ? 1131 : 32768 }

                    function ra(a, b, c) { var d, e, f = [],
                            g = [],
                            h = Ne.getCard16(a, b); if (0 !== h) { var i = Ne.getByte(a, b + 2);
                            d = b + (h + 1) * i + 2; for (var j = b + 3, k = 0; k < h + 1; k += 1) f.push(Ne.getOffset(a, j, i)), j += i;
                            e = d + f[h] } else e = b + 2; for (var l = 0; l < f.length - 1; l += 1) { var m = Ne.getBytes(a, d + f[l], d + f[l + 1]);
                            c && (m = c(m)), g.push(m) } return { objects: g, startOffset: b, endOffset: e } }

                    function sa(a) { for (var b = "", c = 15, d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) { var e = a.parseByte(),
                                f = e >> 4,
                                g = 15 & e; if (f === c) break; if (b += d[f], g === c) break;
                            b += d[g] } return parseFloat(b) }

                    function ta(a, b) { var c, d, e, f; if (28 === b) return c = a.parseByte(), d = a.parseByte(), c << 8 | d; if (29 === b) return c = a.parseByte(), d = a.parseByte(), e = a.parseByte(), f = a.parseByte(), c << 24 | d << 16 | e << 8 | f; if (30 === b) return sa(a); if (b >= 32 && b <= 246) return b - 139; if (b >= 247 && b <= 250) return c = a.parseByte(), 256 * (b - 247) + c + 108; if (b >= 251 && b <= 254) return c = a.parseByte(), 256 * -(b - 251) - c - 108; throw new Error("Invalid b0 " + b) }

                    function ua(a) { for (var b = {}, c = 0; c < a.length; c += 1) { var d = a[c][0],
                                e = a[c][1],
                                f = void 0; if (f = 1 === e.length ? e[0] : e, b.hasOwnProperty(d) && !isNaN(b[d])) throw new Error("Object " + b + " already has key " + d);
                            b[d] = f } return b }

                    function va(a, b, c) { b = void 0 !== b ? b : 0; var d = new Ne.Parser(a, b),
                            e = [],
                            f = []; for (c = void 0 !== c ? c : a.length; d.relativeOffset < c;) { var g = d.parseByte();
                            g <= 21 ? (12 === g && (g = 1200 + d.parseByte()), e.push([g, f]), f = []) : f.push(ta(d, g)) } return ua(e) }

                    function wa(a, b) { return b = b <= 390 ? Pe[b] : a[b - 391] }

                    function xa(a, b, c) { for (var d, e = {}, f = 0; f < b.length; f += 1) { var g = b[f]; if (Array.isArray(g.type)) { var h = [];
                                h.length = g.type.length; for (var i = 0; i < g.type.length; i++) d = void 0 !== a[g.op] ? a[g.op][i] : void 0, void 0 === d && (d = void 0 !== g.value && void 0 !== g.value[i] ? g.value[i] : null), "SID" === g.type[i] && (d = wa(c, d)), h[i] = d;
                                e[g.name] = h } else d = a[g.op], void 0 === d && (d = void 0 !== g.value ? g.value : null), "SID" === g.type && (d = wa(c, d)), e[g.name] = d } return e }

                    function ya(a, b) { var c = {}; return c.formatMajor = Ne.getCard8(a, b), c.formatMinor = Ne.getCard8(a, b + 1), c.size = Ne.getCard8(a, b + 2), c.offsetSize = Ne.getCard8(a, b + 3), c.startOffset = b, c.endOffset = b + 4, c }

                    function za(a, b) { return xa(va(a, 0, a.byteLength), We, b) }

                    function Aa(a, b, c, d) { return xa(va(a, b, c), Xe, d) }

                    function Ba(a, b, c, d) { for (var e = [], f = 0; f < c.length; f += 1) { var g = new DataView(new Uint8Array(c[f]).buffer),
                                h = za(g, d);
                            h._subrs = [], h._subrsBias = 0; var i = h.private[0],
                                j = h.private[1]; if (0 !== i && 0 !== j) { var k = Aa(a, j + b, i, d); if (h._defaultWidthX = k.defaultWidthX, h._nominalWidthX = k.nominalWidthX, 0 !== k.subrs) { var l = j + k.subrs,
                                        m = ra(a, l + b);
                                    h._subrs = m.objects, h._subrsBias = qa(h._subrs) }
                                h._privateDict = k }
                            e.push(h) } return e }

                    function Ca(a, b, c, d) { var e, f, g = new Ne.Parser(a, b);
                        c -= 1; var h = [".notdef"],
                            i = g.parseCard8(); if (0 === i)
                            for (var j = 0; j < c; j += 1) e = g.parseSID(), h.push(wa(d, e));
                        else if (1 === i)
                            for (; h.length <= c;) { e = g.parseSID(), f = g.parseCard8(); for (var k = 0; k <= f; k += 1) h.push(wa(d, e)), e += 1 } else { if (2 !== i) throw new Error("Unknown charset format " + i); for (; h.length <= c;) { e = g.parseSID(), f = g.parseCard16(); for (var l = 0; l <= f; l += 1) h.push(wa(d, e)), e += 1 } }
                        return h }

                    function Da(a, b, c) { var d, e = {},
                            f = new Ne.Parser(a, b),
                            g = f.parseCard8(); if (0 === g)
                            for (var h = f.parseCard8(), i = 0; i < h; i += 1) d = f.parseCard8(), e[d] = i;
                        else { if (1 !== g) throw new Error("Unknown encoding format " + g); var j = f.parseCard8();
                            d = 1; for (var k = 0; k < j; k += 1)
                                for (var l = f.parseCard8(), m = f.parseCard8(), n = l; n <= l + m; n += 1) e[n] = d, d += 1 } return new Z(e, c) }

                    function Ea(a, b, c) {
                        function d(a, b) { t && o.closePath(), o.moveTo(a, b), t = !0 }

                        function e() { var a;
                            a = p.length % 2 != 0, a && !s && (y = p.shift() + n), q += p.length >> 1, p.length = 0, s = !0 }

                        function f(c) { for (var m, r, w, x, z, A, B, C, D, E, F, G, H = 0; H < c.length;) { var I = c[H]; switch (H += 1, I) {
                                    case 1:
                                    case 3:
                                        e(); break;
                                    case 4:
                                        p.length > 1 && !s && (y = p.shift() + n, s = !0), v += p.pop(), d(u, v); break;
                                    case 5:
                                        for (; p.length > 0;) u += p.shift(), v += p.shift(), o.lineTo(u, v); break;
                                    case 6:
                                        for (; p.length > 0 && (u += p.shift(), o.lineTo(u, v), 0 !== p.length);) v += p.shift(), o.lineTo(u, v); break;
                                    case 7:
                                        for (; p.length > 0 && (v += p.shift(), o.lineTo(u, v), 0 !== p.length);) u += p.shift(), o.lineTo(u, v); break;
                                    case 8:
                                        for (; p.length > 0;) g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v); break;
                                    case 10:
                                        z = p.pop() + l, A = k[z], A && f(A); break;
                                    case 11:
                                        return;
                                    case 12:
                                        switch (I = c[H], H += 1, I) {
                                            case 35:
                                                g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j + p.shift(), D = B + p.shift(), E = C + p.shift(), F = D + p.shift(), G = E + p.shift(), u = F + p.shift(), v = G + p.shift(), p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v); break;
                                            case 34:
                                                g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j, D = B + p.shift(), E = j, F = D + p.shift(), G = v, u = F + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v); break;
                                            case 36:
                                                g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j, D = B + p.shift(), E = j, F = D + p.shift(), G = E + p.shift(), u = F + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v); break;
                                            case 37:
                                                g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), B = i + p.shift(), C = j + p.shift(), D = B + p.shift(), E = C + p.shift(), F = D + p.shift(), G = E + p.shift(), Math.abs(F - u) > Math.abs(G - v) ? u = F + p.shift() : v = G + p.shift(), o.curveTo(g, h, i, j, B, C), o.curveTo(D, E, F, G, u, v); break;
                                            default:
                                                console.log("Glyph " + b.index + ": unknown operator 1200" + I), p.length = 0 } break;
                                    case 14:
                                        p.length > 0 && !s && (y = p.shift() + n, s = !0), t && (o.closePath(), t = !1); break;
                                    case 18:
                                        e(); break;
                                    case 19:
                                    case 20:
                                        e(), H += q + 7 >> 3; break;
                                    case 21:
                                        p.length > 2 && !s && (y = p.shift() + n, s = !0), v += p.pop(), u += p.pop(), d(u, v); break;
                                    case 22:
                                        p.length > 1 && !s && (y = p.shift() + n, s = !0), u += p.pop(), d(u, v); break;
                                    case 23:
                                        e(); break;
                                    case 24:
                                        for (; p.length > 2;) g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v);
                                        u += p.shift(), v += p.shift(), o.lineTo(u, v); break;
                                    case 25:
                                        for (; p.length > 6;) u += p.shift(), v += p.shift(), o.lineTo(u, v);
                                        g = u + p.shift(), h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + p.shift(), o.curveTo(g, h, i, j, u, v); break;
                                    case 26:
                                        for (p.length % 2 && (u += p.shift()); p.length > 0;) g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i, v = j + p.shift(), o.curveTo(g, h, i, j, u, v); break;
                                    case 27:
                                        for (p.length % 2 && (v += p.shift()); p.length > 0;) g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j, o.curveTo(g, h, i, j, u, v); break;
                                    case 28:
                                        m = c[H], r = c[H + 1], p.push((m << 24 | r << 16) >> 16), H += 2; break;
                                    case 29:
                                        z = p.pop() + a.gsubrsBias, A = a.gsubrs[z], A && f(A); break;
                                    case 30:
                                        for (; p.length > 0 && (g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v), 0 !== p.length);) g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), v = j + p.shift(), u = i + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v); break;
                                    case 31:
                                        for (; p.length > 0 && (g = u + p.shift(), h = v, i = g + p.shift(), j = h + p.shift(), v = j + p.shift(), u = i + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v), 0 !== p.length);) g = u, h = v + p.shift(), i = g + p.shift(), j = h + p.shift(), u = i + p.shift(), v = j + (1 === p.length ? p.shift() : 0), o.curveTo(g, h, i, j, u, v); break;
                                    default:
                                        I < 32 ? console.log("Glyph " + b.index + ": unknown operator " + I) : I < 247 ? p.push(I - 139) : I < 251 ? (m = c[H], H += 1, p.push(256 * (I - 247) + m + 108)) : I < 255 ? (m = c[H], H += 1, p.push(256 * -(I - 251) - m - 108)) : (m = c[H], r = c[H + 1], w = c[H + 2], x = c[H + 3], H += 4, p.push((m << 24 | r << 16 | w << 8 | x) / 65536)) } } } var g, h, i, j, k, l, m, n, o = new r,
                            p = [],
                            q = 0,
                            s = !1,
                            t = !1,
                            u = 0,
                            v = 0; if (a.isCIDFont) { var w = a.tables.cff.topDict._fdSelect[b.index],
                                x = a.tables.cff.topDict._fdArray[w];
                            k = x._subrs, l = x._subrsBias, m = x._defaultWidthX, n = x._nominalWidthX } else k = a.tables.cff.topDict._subrs, l = a.tables.cff.topDict._subrsBias, m = a.tables.cff.topDict._defaultWidthX, n = a.tables.cff.topDict._nominalWidthX; var y = m; return f(c), b.advanceWidth = y, o }

                    function Fa(a, b, c, d) { var e, f = [],
                            g = new Ne.Parser(a, b),
                            h = g.parseCard8(); if (0 === h)
                            for (var i = 0; i < c; i++) { if ((e = g.parseCard8()) >= d) throw new Error("CFF table CID Font FDSelect has bad FD index value " + e + " (FD count " + d + ")");
                                f.push(e) } else { if (3 !== h) throw new Error("CFF Table CID Font FDSelect table has unsupported format " + h); var j = g.parseCard16(),
                                    k = g.parseCard16(); if (0 !== k) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + k); for (var l, m = 0; m < j; m++) { if (e = g.parseCard8(), l = g.parseCard16(), e >= d) throw new Error("CFF table CID Font FDSelect has bad FD index value " + e + " (FD count " + d + ")"); if (l > c) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + l); for (; k < l; k++) f.push(e);
                                    k = l } if (l !== c) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + l) }
                        return f }

                    function Ga(a, b, c) { c.tables.cff = {}; var d = ya(a, b),
                            e = ra(a, d.endOffset, Ne.bytesToString),
                            f = ra(a, e.endOffset),
                            g = ra(a, f.endOffset, Ne.bytesToString),
                            h = ra(a, g.endOffset);
                        c.gsubrs = h.objects, c.gsubrsBias = qa(c.gsubrs); var i = Ba(a, b, f.objects, g.objects); if (1 !== i.length) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + i.length); var j = i[0]; if (c.tables.cff.topDict = j, j._privateDict && (c.defaultWidthX = j._privateDict.defaultWidthX, c.nominalWidthX = j._privateDict.nominalWidthX), void 0 !== j.ros[0] && void 0 !== j.ros[1] && (c.isCIDFont = !0), c.isCIDFont) { var k = j.fdArray,
                                l = j.fdSelect; if (0 === k || 0 === l) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                            k += b; var m = ra(a, k),
                                n = Ba(a, b, m.objects, g.objects);
                            j._fdArray = n, l += b, j._fdSelect = Fa(a, l, c.numGlyphs, n.length) } var o = b + j.private[1],
                            p = Aa(a, o, j.private[0], g.objects); if (c.defaultWidthX = p.defaultWidthX, c.nominalWidthX = p.nominalWidthX, 0 !== p.subrs) { var q = o + p.subrs,
                                r = ra(a, q);
                            c.subrs = r.objects, c.subrsBias = qa(c.subrs) } else c.subrs = [], c.subrsBias = 0; var s = ra(a, b + j.charStrings);
                        c.nGlyphs = s.objects.length; var t = Ca(a, b + j.charset, c.nGlyphs, g.objects);
                        0 === j.encoding ? c.cffEncoding = new Z(Qe, t) : 1 === j.encoding ? c.cffEncoding = new Z(Re, t) : c.cffEncoding = Da(a, b + j.encoding, t), c.encoding = c.encoding || c.cffEncoding, c.glyphs = new Ve.GlyphSet(c); for (var u = 0; u < c.nGlyphs; u += 1) { var v = s.objects[u];
                            c.glyphs.push(u, Ve.cffGlyphLoader(c, u, Ea, v)) } }

                    function Ha(a, b) { var c, d = Pe.indexOf(a); return d >= 0 && (c = d), d = b.indexOf(a), d >= 0 ? c = d + Pe.length : (c = Pe.length + b.length, b.push(a)), c }

                    function Ia() { return new Ke.Record("Header", [{ name: "major", type: "Card8", value: 1 }, { name: "minor", type: "Card8", value: 0 }, { name: "hdrSize", type: "Card8", value: 4 }, { name: "major", type: "Card8", value: 1 }]) }

                    function Ja(a) { var b = new Ke.Record("Name INDEX", [{ name: "names", type: "INDEX", value: [] }]);
                        b.names = []; for (var c = 0; c < a.length; c += 1) b.names.push({ name: "name_" + c, type: "NAME", value: a[c] }); return b }

                    function Ka(a, b, c) { for (var d = {}, e = 0; e < a.length; e += 1) { var f = a[e],
                                g = b[f.name];
                            void 0 === g || pa(g, f.value) || ("SID" === f.type && (g = Ha(g, c)), d[f.op] = { name: f.name, type: f.type, value: g }) } return d }

                    function La(a, b) { var c = new Ke.Record("Top DICT", [{ name: "dict", type: "DICT", value: {} }]); return c.dict = Ka(We, a, b), c }

                    function Ma(a) { var b = new Ke.Record("Top DICT INDEX", [{ name: "topDicts", type: "INDEX", value: [] }]); return b.topDicts = [{ name: "topDict_0", type: "TABLE", value: a }], b }

                    function Na(a) { var b = new Ke.Record("String INDEX", [{ name: "strings", type: "INDEX", value: [] }]);
                        b.strings = []; for (var c = 0; c < a.length; c += 1) b.strings.push({ name: "string_" + c, type: "STRING", value: a[c] }); return b }

                    function Oa() { return new Ke.Record("Global Subr INDEX", [{ name: "subrs", type: "INDEX", value: [] }]) }

                    function Pa(a, b) { for (var c = new Ke.Record("Charsets", [{ name: "format", type: "Card8", value: 0 }]), d = 0; d < a.length; d += 1) { var e = a[d],
                                f = Ha(e, b);
                            c.fields.push({ name: "glyph_" + d, type: "SID", value: f }) } return c }

                    function Qa(a) { var b = [],
                            c = a.path;
                        b.push({ name: "width", type: "NUMBER", value: a.advanceWidth }); for (var d = 0, e = 0, f = 0; f < c.commands.length; f += 1) { var g = void 0,
                                h = void 0,
                                i = c.commands[f]; if ("Q" === i.type) { var j = 1 / 3,
                                    k = 2 / 3;
                                i = { type: "C", x: i.x, y: i.y, x1: j * d + k * i.x1, y1: j * e + k * i.y1, x2: j * i.x + k * i.x1, y2: j * i.y + k * i.y1 } } if ("M" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rmoveto", type: "OP", value: 21 }), d = Math.round(i.x), e = Math.round(i.y);
                            else if ("L" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rlineto", type: "OP", value: 5 }), d = Math.round(i.x), e = Math.round(i.y);
                            else if ("C" === i.type) { var l = Math.round(i.x1 - d),
                                    m = Math.round(i.y1 - e),
                                    n = Math.round(i.x2 - i.x1),
                                    o = Math.round(i.y2 - i.y1);
                                g = Math.round(i.x - i.x2), h = Math.round(i.y - i.y2), b.push({ name: "dx1", type: "NUMBER", value: l }), b.push({ name: "dy1", type: "NUMBER", value: m }), b.push({ name: "dx2", type: "NUMBER", value: n }), b.push({ name: "dy2", type: "NUMBER", value: o }), b.push({ name: "dx", type: "NUMBER", value: g }), b.push({ name: "dy", type: "NUMBER", value: h }), b.push({ name: "rrcurveto", type: "OP", value: 8 }), d = Math.round(i.x), e = Math.round(i.y) } } return b.push({ name: "endchar", type: "OP", value: 14 }), b }

                    function Ra(a) { for (var b = new Ke.Record("CharStrings INDEX", [{ name: "charStrings", type: "INDEX", value: [] }]), c = 0; c < a.length; c += 1) { var d = a.get(c),
                                e = Qa(d);
                            b.charStrings.push({ name: d.name, type: "CHARSTRING", value: e }) } return b }

                    function Sa(a, b) { var c = new Ke.Record("Private DICT", [{ name: "dict", type: "DICT", value: {} }]); return c.dict = Ka(Xe, a, b), c }

                    function Ta(a, b) { for (var c, d = new Ke.Table("CFF ", [{ name: "header", type: "RECORD" }, { name: "nameIndex", type: "RECORD" }, { name: "topDictIndex", type: "RECORD" }, { name: "stringIndex", type: "RECORD" }, { name: "globalSubrIndex", type: "RECORD" }, { name: "charsets", type: "RECORD" }, { name: "charStringsIndex", type: "RECORD" }, { name: "privateDict", type: "RECORD" }]), e = 1 / b.unitsPerEm, f = { version: b.version, fullName: b.fullName, familyName: b.familyName, weight: b.weightName, fontBBox: b.fontBBox || [0, 0, 0, 0], fontMatrix: [e, 0, 0, e, 0, 0], charset: 999, encoding: 0, charStrings: 999, private: [0, 999] }, g = {}, h = [], i = 1; i < a.length; i += 1) c = a.get(i), h.push(c.name); var j = [];
                        d.header = Ia(), d.nameIndex = Ja([b.postScriptName]); var k = La(f, j);
                        d.topDictIndex = Ma(k), d.globalSubrIndex = Oa(), d.charsets = Pa(h, j), d.charStringsIndex = Ra(a), d.privateDict = Sa(g, j), d.stringIndex = Na(j); var l = d.header.sizeOf() + d.nameIndex.sizeOf() + d.topDictIndex.sizeOf() + d.stringIndex.sizeOf() + d.globalSubrIndex.sizeOf(); return f.charset = l, f.encoding = 0, f.charStrings = f.charset + d.charsets.sizeOf(), f.private[1] = f.charStrings + d.charStringsIndex.sizeOf(), k = La(f, j), d.topDictIndex = Ma(k), d }

                    function Ua(a, b) { var c = {},
                            d = new Ne.Parser(a, b); return c.version = d.parseVersion(), c.fontRevision = Math.round(1e3 * d.parseFixed()) / 1e3, c.checkSumAdjustment = d.parseULong(), c.magicNumber = d.parseULong(), ze.argument(1594834165 === c.magicNumber, "Font header has wrong magic number."), c.flags = d.parseUShort(), c.unitsPerEm = d.parseUShort(), c.created = d.parseLongDateTime(), c.modified = d.parseLongDateTime(), c.xMin = d.parseShort(), c.yMin = d.parseShort(), c.xMax = d.parseShort(), c.yMax = d.parseShort(), c.macStyle = d.parseUShort(), c.lowestRecPPEM = d.parseUShort(), c.fontDirectionHint = d.parseShort(), c.indexToLocFormat = d.parseShort(), c.glyphDataFormat = d.parseShort(), c }

                    function Va(a) { var b = Math.round((new Date).getTime() / 1e3) + 2082844800,
                            c = b; return a.createdTimestamp && (c = a.createdTimestamp + 2082844800), new Ke.Table("head", [{ name: "version", type: "FIXED", value: 65536 }, { name: "fontRevision", type: "FIXED", value: 65536 }, { name: "checkSumAdjustment", type: "ULONG", value: 0 }, { name: "magicNumber", type: "ULONG", value: 1594834165 }, { name: "flags", type: "USHORT", value: 0 }, { name: "unitsPerEm", type: "USHORT", value: 1e3 }, { name: "created", type: "LONGDATETIME", value: c }, { name: "modified", type: "LONGDATETIME", value: b }, { name: "xMin", type: "SHORT", value: 0 }, { name: "yMin", type: "SHORT", value: 0 }, { name: "xMax", type: "SHORT", value: 0 }, { name: "yMax", type: "SHORT", value: 0 }, { name: "macStyle", type: "USHORT", value: 0 }, { name: "lowestRecPPEM", type: "USHORT", value: 0 }, { name: "fontDirectionHint", type: "SHORT", value: 2 }, { name: "indexToLocFormat", type: "SHORT", value: 0 }, { name: "glyphDataFormat", type: "SHORT", value: 0 }], a) }

                    function Wa(a, b) { var c = {},
                            d = new Ne.Parser(a, b); return c.version = d.parseVersion(), c.ascender = d.parseShort(), c.descender = d.parseShort(), c.lineGap = d.parseShort(), c.advanceWidthMax = d.parseUShort(), c.minLeftSideBearing = d.parseShort(), c.minRightSideBearing = d.parseShort(), c.xMaxExtent = d.parseShort(), c.caretSlopeRise = d.parseShort(), c.caretSlopeRun = d.parseShort(), c.caretOffset = d.parseShort(), d.relativeOffset += 8, c.metricDataFormat = d.parseShort(), c.numberOfHMetrics = d.parseUShort(), c }

                    function Xa(a) { return new Ke.Table("hhea", [{ name: "version", type: "FIXED", value: 65536 }, { name: "ascender", type: "FWORD", value: 0 }, { name: "descender", type: "FWORD", value: 0 }, { name: "lineGap", type: "FWORD", value: 0 }, { name: "advanceWidthMax", type: "UFWORD", value: 0 }, { name: "minLeftSideBearing", type: "FWORD", value: 0 }, { name: "minRightSideBearing", type: "FWORD", value: 0 }, { name: "xMaxExtent", type: "FWORD", value: 0 }, { name: "caretSlopeRise", type: "SHORT", value: 1 }, { name: "caretSlopeRun", type: "SHORT", value: 0 }, { name: "caretOffset", type: "SHORT", value: 0 }, { name: "reserved1", type: "SHORT", value: 0 }, { name: "reserved2", type: "SHORT", value: 0 }, { name: "reserved3", type: "SHORT", value: 0 }, { name: "reserved4", type: "SHORT", value: 0 }, { name: "metricDataFormat", type: "SHORT", value: 0 }, { name: "numberOfHMetrics", type: "USHORT", value: 0 }], a) }

                    function Ya(a, b, c, d, e) {
                        for (var f, g, h = new Ne.Parser(a, b), i = 0; i < d; i += 1) {
                            i < c && (f = h.parseUShort(), g = h.parseShort());
                            var j = e.get(i);
                            j.advanceWidth = f,
                                j.leftSideBearing = g
                        }
                    }

                    function Za(a) { for (var b = new Ke.Table("hmtx", []), c = 0; c < a.length; c += 1) { var d = a.get(c),
                                e = d.advanceWidth || 0,
                                f = d.leftSideBearing || 0;
                            b.fields.push({ name: "advanceWidth_" + c, type: "USHORT", value: e }), b.fields.push({ name: "leftSideBearing_" + c, type: "SHORT", value: f }) } return b }

                    function $a(a) { for (var b = new Ke.Table("ltag", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "numTags", type: "ULONG", value: a.length }]), c = "", d = 12 + 4 * a.length, e = 0; e < a.length; ++e) { var f = c.indexOf(a[e]);
                            f < 0 && (f = c.length, c += a[e]), b.fields.push({ name: "offset " + e, type: "USHORT", value: d + f }), b.fields.push({ name: "length " + e, type: "USHORT", value: a[e].length }) } return b.fields.push({ name: "stringPool", type: "CHARARRAY", value: c }), b }

                    function _a(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseULong();
                        ze.argument(1 === d, "Unsupported ltag table version."), c.skip("uLong", 1); for (var e = c.parseULong(), f = [], g = 0; g < e; g++) { for (var h = "", i = b + c.parseUShort(), j = c.parseUShort(), k = i; k < i + j; ++k) h += String.fromCharCode(a.getInt8(k));
                            f.push(h) } return f }

                    function ab(a, b) { var c = {},
                            d = new Ne.Parser(a, b); return c.version = d.parseVersion(), c.numGlyphs = d.parseUShort(), 1 === c.version && (c.maxPoints = d.parseUShort(), c.maxContours = d.parseUShort(), c.maxCompositePoints = d.parseUShort(), c.maxCompositeContours = d.parseUShort(), c.maxZones = d.parseUShort(), c.maxTwilightPoints = d.parseUShort(), c.maxStorage = d.parseUShort(), c.maxFunctionDefs = d.parseUShort(), c.maxInstructionDefs = d.parseUShort(), c.maxStackElements = d.parseUShort(), c.maxSizeOfInstructions = d.parseUShort(), c.maxComponentElements = d.parseUShort(), c.maxComponentDepth = d.parseUShort()), c }

                    function bb(a) { return new Ke.Table("maxp", [{ name: "version", type: "FIXED", value: 20480 }, { name: "numGlyphs", type: "USHORT", value: a }]) }

                    function cb(a, b, c) { switch (a) {
                            case 0:
                                if (65535 === b) return "und"; if (c) return c[b]; break;
                            case 1:
                                return df[b];
                            case 3:
                                return ff[b] } }

                    function db(a, b, c) { switch (a) {
                            case 0:
                                return gf;
                            case 1:
                                return jf[c] || hf[b];
                            case 3:
                                if (1 === b || 10 === b) return gf } }

                    function eb(a, b, c) { for (var d = {}, e = new Ne.Parser(a, b), f = e.parseUShort(), g = e.parseUShort(), h = e.offset + e.parseUShort(), i = 0; i < g; i++) { var j = e.parseUShort(),
                                k = e.parseUShort(),
                                l = e.parseUShort(),
                                m = e.parseUShort(),
                                n = cf[m] || m,
                                o = e.parseUShort(),
                                p = e.parseUShort(),
                                q = cb(j, l, c),
                                r = db(j, k, l); if (void 0 !== r && void 0 !== q) { var s = void 0; if (s = r === gf ? Ce.UTF16(a, h + p, o) : Ce.MACSTRING(a, h + p, o, r)) { var t = d[n];
                                    void 0 === t && (t = d[n] = {}), t[q] = s } } } return 1 === f && e.parseUShort(), d }

                    function fb(a) { var b = {}; for (var c in a) b[a[c]] = parseInt(c); return b }

                    function gb(a, b, c, d, e, f) { return new Ke.Record("NameRecord", [{ name: "platformID", type: "USHORT", value: a }, { name: "encodingID", type: "USHORT", value: b }, { name: "languageID", type: "USHORT", value: c }, { name: "nameID", type: "USHORT", value: d }, { name: "length", type: "USHORT", value: e }, { name: "offset", type: "USHORT", value: f }]) }

                    function hb(a, b) { var c = a.length,
                            d = b.length - c + 1;
                        a: for (var e = 0; e < d; e++)
                            for (; e < d; e++) { for (var f = 0; f < c; f++)
                                    if (b[e + f] !== a[f]) continue a;
                                return e }
                        return -1 }

                    function ib(a, b) { var c = hb(a, b); if (c < 0) { c = b.length; for (var d = 0, e = a.length; d < e; ++d) b.push(a[d]) } return c }

                    function jb(a, b) { var c, d = [],
                            e = {},
                            f = fb(cf); for (var g in a) { var h = f[g]; if (void 0 === h && (h = g), c = parseInt(h), isNaN(c)) throw new Error('Name table entry "' + g + '" does not exist, see nameTableNames for complete list.');
                            e[c] = a[g], d.push(c) } for (var i = fb(df), j = fb(ff), k = [], l = [], m = 0; m < d.length; m++) { c = d[m]; var n = e[c]; for (var o in n) { var p = n[o],
                                    q = 1,
                                    r = i[o],
                                    s = ef[r],
                                    t = db(q, s, r),
                                    u = De.MACSTRING(p, t);
                                void 0 === u && (q = 0, r = b.indexOf(o), r < 0 && (r = b.length, b.push(o)), s = 4, u = De.UTF16(p)); var v = ib(u, l);
                                k.push(gb(q, s, r, c, u.length, v)); var w = j[o]; if (void 0 !== w) { var x = De.UTF16(p),
                                        y = ib(x, l);
                                    k.push(gb(3, 1, w, c, x.length, y)) } } }
                        k.sort(function(a, b) { return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID }); for (var z = new Ke.Table("name", [{ name: "format", type: "USHORT", value: 0 }, { name: "count", type: "USHORT", value: k.length }, { name: "stringOffset", type: "USHORT", value: 6 + 12 * k.length }]), A = 0; A < k.length; A++) z.fields.push({ name: "record_" + A, type: "RECORD", value: k[A] }); return z.fields.push({ name: "strings", type: "LITERAL", value: l }), z }

                    function kb(a) { for (var b = 0; b < lf.length; b += 1) { var c = lf[b]; if (a >= c.begin && a < c.end) return b } return -1 }

                    function lb(a, b) { var c = {},
                            d = new Ne.Parser(a, b);
                        c.version = d.parseUShort(), c.xAvgCharWidth = d.parseShort(), c.usWeightClass = d.parseUShort(), c.usWidthClass = d.parseUShort(), c.fsType = d.parseUShort(), c.ySubscriptXSize = d.parseShort(), c.ySubscriptYSize = d.parseShort(), c.ySubscriptXOffset = d.parseShort(), c.ySubscriptYOffset = d.parseShort(), c.ySuperscriptXSize = d.parseShort(), c.ySuperscriptYSize = d.parseShort(), c.ySuperscriptXOffset = d.parseShort(), c.ySuperscriptYOffset = d.parseShort(), c.yStrikeoutSize = d.parseShort(), c.yStrikeoutPosition = d.parseShort(), c.sFamilyClass = d.parseShort(), c.panose = []; for (var e = 0; e < 10; e++) c.panose[e] = d.parseByte(); return c.ulUnicodeRange1 = d.parseULong(), c.ulUnicodeRange2 = d.parseULong(), c.ulUnicodeRange3 = d.parseULong(), c.ulUnicodeRange4 = d.parseULong(), c.achVendID = String.fromCharCode(d.parseByte(), d.parseByte(), d.parseByte(), d.parseByte()), c.fsSelection = d.parseUShort(), c.usFirstCharIndex = d.parseUShort(), c.usLastCharIndex = d.parseUShort(), c.sTypoAscender = d.parseShort(), c.sTypoDescender = d.parseShort(), c.sTypoLineGap = d.parseShort(), c.usWinAscent = d.parseUShort(), c.usWinDescent = d.parseUShort(), c.version >= 1 && (c.ulCodePageRange1 = d.parseULong(), c.ulCodePageRange2 = d.parseULong()), c.version >= 2 && (c.sxHeight = d.parseShort(), c.sCapHeight = d.parseShort(), c.usDefaultChar = d.parseUShort(), c.usBreakChar = d.parseUShort(), c.usMaxContent = d.parseUShort()), c }

                    function mb(a) { return new Ke.Table("OS/2", [{ name: "version", type: "USHORT", value: 3 }, { name: "xAvgCharWidth", type: "SHORT", value: 0 }, { name: "usWeightClass", type: "USHORT", value: 0 }, { name: "usWidthClass", type: "USHORT", value: 0 }, { name: "fsType", type: "USHORT", value: 0 }, { name: "ySubscriptXSize", type: "SHORT", value: 650 }, { name: "ySubscriptYSize", type: "SHORT", value: 699 }, { name: "ySubscriptXOffset", type: "SHORT", value: 0 }, { name: "ySubscriptYOffset", type: "SHORT", value: 140 }, { name: "ySuperscriptXSize", type: "SHORT", value: 650 }, { name: "ySuperscriptYSize", type: "SHORT", value: 699 }, { name: "ySuperscriptXOffset", type: "SHORT", value: 0 }, { name: "ySuperscriptYOffset", type: "SHORT", value: 479 }, { name: "yStrikeoutSize", type: "SHORT", value: 49 }, { name: "yStrikeoutPosition", type: "SHORT", value: 258 }, { name: "sFamilyClass", type: "SHORT", value: 0 }, { name: "bFamilyType", type: "BYTE", value: 0 }, { name: "bSerifStyle", type: "BYTE", value: 0 }, { name: "bWeight", type: "BYTE", value: 0 }, { name: "bProportion", type: "BYTE", value: 0 }, { name: "bContrast", type: "BYTE", value: 0 }, { name: "bStrokeVariation", type: "BYTE", value: 0 }, { name: "bArmStyle", type: "BYTE", value: 0 }, { name: "bLetterform", type: "BYTE", value: 0 }, { name: "bMidline", type: "BYTE", value: 0 }, { name: "bXHeight", type: "BYTE", value: 0 }, { name: "ulUnicodeRange1", type: "ULONG", value: 0 }, { name: "ulUnicodeRange2", type: "ULONG", value: 0 }, { name: "ulUnicodeRange3", type: "ULONG", value: 0 }, { name: "ulUnicodeRange4", type: "ULONG", value: 0 }, { name: "achVendID", type: "CHARARRAY", value: "XXXX" }, { name: "fsSelection", type: "USHORT", value: 0 }, { name: "usFirstCharIndex", type: "USHORT", value: 0 }, { name: "usLastCharIndex", type: "USHORT", value: 0 }, { name: "sTypoAscender", type: "SHORT", value: 0 }, { name: "sTypoDescender", type: "SHORT", value: 0 }, { name: "sTypoLineGap", type: "SHORT", value: 0 }, { name: "usWinAscent", type: "USHORT", value: 0 }, { name: "usWinDescent", type: "USHORT", value: 0 }, { name: "ulCodePageRange1", type: "ULONG", value: 0 }, { name: "ulCodePageRange2", type: "ULONG", value: 0 }, { name: "sxHeight", type: "SHORT", value: 0 }, { name: "sCapHeight", type: "SHORT", value: 0 }, { name: "usDefaultChar", type: "USHORT", value: 0 }, { name: "usBreakChar", type: "USHORT", value: 0 }, { name: "usMaxContext", type: "USHORT", value: 0 }], a) }

                    function nb(a, b) { var c = {},
                            d = new Ne.Parser(a, b); switch (c.version = d.parseVersion(), c.italicAngle = d.parseFixed(), c.underlinePosition = d.parseShort(), c.underlineThickness = d.parseShort(), c.isFixedPitch = d.parseULong(), c.minMemType42 = d.parseULong(), c.maxMemType42 = d.parseULong(), c.minMemType1 = d.parseULong(), c.maxMemType1 = d.parseULong(), c.version) {
                            case 1:
                                c.names = Se.slice(); break;
                            case 2:
                                c.numberOfGlyphs = d.parseUShort(), c.glyphNameIndex = new Array(c.numberOfGlyphs); for (var e = 0; e < c.numberOfGlyphs; e++) c.glyphNameIndex[e] = d.parseUShort();
                                c.names = []; for (var f = 0; f < c.numberOfGlyphs; f++)
                                    if (c.glyphNameIndex[f] >= Se.length) { var g = d.parseChar();
                                        c.names.push(d.parseString(g)) }
                                break;
                            case 2.5:
                                c.numberOfGlyphs = d.parseUShort(), c.offset = new Array(c.numberOfGlyphs); for (var h = 0; h < c.numberOfGlyphs; h++) c.offset[h] = d.parseChar() } return c }

                    function ob() { return new Ke.Table("post", [{ name: "version", type: "FIXED", value: 196608 }, { name: "italicAngle", type: "FIXED", value: 0 }, { name: "underlinePosition", type: "FWORD", value: 0 }, { name: "underlineThickness", type: "FWORD", value: 0 }, { name: "isFixedPitch", type: "ULONG", value: 0 }, { name: "minMemType42", type: "ULONG", value: 0 }, { name: "maxMemType42", type: "ULONG", value: 0 }, { name: "minMemType1", type: "ULONG", value: 0 }, { name: "maxMemType1", type: "ULONG", value: 0 }]) }

                    function pb(a, b) { b = b || 0; var c = new Q(a, b),
                            d = c.parseVersion(); return ze.argument(1 === d, "Unsupported GSUB table version."), { version: d, scripts: c.parseScriptList(), features: c.parseFeatureList(), lookups: c.parseLookupList(of) } }

                    function qb(a) { return new Ke.Table("GSUB", [{ name: "version", type: "ULONG", value: 65536 }, { name: "scripts", type: "TABLE", value: new Ke.ScriptList(a.scripts) }, { name: "features", type: "TABLE", value: new Ke.FeatureList(a.features) }, { name: "lookups", type: "TABLE", value: new Ke.LookupList(a.lookups, qf) }]) }

                    function rb(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseULong();
                        ze.argument(1 === d, "Unsupported META table version."), c.parseULong(), c.parseULong(); for (var e = c.parseULong(), f = {}, g = 0; g < e; g++) { var h = c.parseTag(),
                                i = c.parseULong(),
                                j = c.parseULong(),
                                k = Ce.UTF8(a, b + i, j);
                            f[h] = k } return f }

                    function sb(a) { var b = Object.keys(a).length,
                            c = "",
                            d = 16 + 12 * b,
                            e = new Ke.Table("meta", [{ name: "version", type: "ULONG", value: 1 }, { name: "flags", type: "ULONG", value: 0 }, { name: "offset", type: "ULONG", value: d }, { name: "numTags", type: "ULONG", value: b }]); for (var f in a) { var g = c.length;
                            c += a[f], e.fields.push({ name: "tag " + f, type: "TAG", value: f }), e.fields.push({ name: "offset " + f, type: "ULONG", value: d + g }), e.fields.push({ name: "length " + f, type: "ULONG", value: a[f].length }) } return e.fields.push({ name: "stringPool", type: "CHARARRAY", value: c }), e }

                    function tb(a) { return Math.log(a) / Math.log(2) | 0 }

                    function ub(a) { for (; a.length % 4 != 0;) a.push(0); for (var b = 0, c = 0; c < a.length; c += 4) b += (a[c] << 24) + (a[c + 1] << 16) + (a[c + 2] << 8) + a[c + 3]; return b %= Math.pow(2, 32) }

                    function vb(a, b, c, d) { return new Ke.Record("Table Record", [{ name: "tag", type: "TAG", value: void 0 !== a ? a : "" }, { name: "checkSum", type: "ULONG", value: void 0 !== b ? b : 0 }, { name: "offset", type: "ULONG", value: void 0 !== c ? c : 0 }, { name: "length", type: "ULONG", value: void 0 !== d ? d : 0 }]) }

                    function wb(a) { var b = new Ke.Table("sfnt", [{ name: "version", type: "TAG", value: "OTTO" }, { name: "numTables", type: "USHORT", value: 0 }, { name: "searchRange", type: "USHORT", value: 0 }, { name: "entrySelector", type: "USHORT", value: 0 }, { name: "rangeShift", type: "USHORT", value: 0 }]);
                        b.tables = a, b.numTables = a.length; var c = Math.pow(2, tb(b.numTables));
                        b.searchRange = 16 * c, b.entrySelector = tb(c), b.rangeShift = 16 * b.numTables - b.searchRange; for (var d = [], e = [], f = b.sizeOf() + vb().sizeOf() * b.numTables; f % 4 != 0;) f += 1, e.push({ name: "padding", type: "BYTE", value: 0 }); for (var g = 0; g < a.length; g += 1) { var h = a[g];
                            ze.argument(4 === h.tableName.length, "Table name" + h.tableName + " is invalid."); var i = h.sizeOf(),
                                j = vb(h.tableName, ub(h.encode()), f, i); for (d.push({ name: j.tag + " Table Record", type: "RECORD", value: j }), e.push({ name: h.tableName + " table", type: "RECORD", value: h }), f += i, ze.argument(!isNaN(f), "Something went wrong calculating the offset."); f % 4 != 0;) f += 1, e.push({ name: "padding", type: "BYTE", value: 0 }) } return d.sort(function(a, b) { return a.value.tag > b.value.tag ? 1 : -1 }), b.fields = b.fields.concat(d), b.fields = b.fields.concat(e), b }

                    function xb(a, b, c) { for (var d = 0; d < b.length; d += 1) { var e = a.charToGlyphIndex(b[d]); if (e > 0) { return a.glyphs.get(e).getMetrics() } } return c }

                    function yb(a) { for (var b = 0, c = 0; c < a.length; c += 1) b += a[c]; return b / a.length }

                    function zb(a) { for (var b, c = [], d = [], e = [], f = [], g = [], h = [], i = [], j = 0, k = 0, l = 0, m = 0, n = 0, o = 0; o < a.glyphs.length; o += 1) { var p = a.glyphs.get(o),
                                q = 0 | p.unicode; if (isNaN(p.advanceWidth)) throw new Error("Glyph " + p.name + " (" + o + "): advanceWidth is not a number.");
                            (b > q || void 0 === b) && q > 0 && (b = q), j < q && (j = q); var r = mf.getUnicodeRange(q); if (r < 32) k |= 1 << r;
                            else if (r < 64) l |= 1 << r - 32;
                            else if (r < 96) m |= 1 << r - 64;
                            else { if (!(r < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                                n |= 1 << r - 96 } if (".notdef" !== p.name) { var s = p.getMetrics();
                                c.push(s.xMin), d.push(s.yMin), e.push(s.xMax), f.push(s.yMax), h.push(s.leftSideBearing), i.push(s.rightSideBearing), g.push(p.advanceWidth) } } var t = { xMin: Math.min.apply(null, c), yMin: Math.min.apply(null, d), xMax: Math.max.apply(null, e), yMax: Math.max.apply(null, f), advanceWidthMax: Math.max.apply(null, g), advanceWidthAvg: yb(g), minLeftSideBearing: Math.min.apply(null, h), maxLeftSideBearing: Math.max.apply(null, h), minRightSideBearing: Math.min.apply(null, i) };
                        t.ascender = a.ascender, t.descender = a.descender; var u = Ze.make({ flags: 3, unitsPerEm: a.unitsPerEm, xMin: t.xMin, yMin: t.yMin, xMax: t.xMax, yMax: t.yMax, lowestRecPPEM: 3, createdTimestamp: a.createdTimestamp }),
                            v = $e.make({ ascender: t.ascender, descender: t.descender, advanceWidthMax: t.advanceWidthMax, minLeftSideBearing: t.minLeftSideBearing, minRightSideBearing: t.minRightSideBearing, xMaxExtent: t.maxLeftSideBearing + (t.xMax - t.xMin), numberOfHMetrics: a.glyphs.length }),
                            w = bf.make(a.glyphs.length),
                            x = mf.make({ xAvgCharWidth: Math.round(t.advanceWidthAvg), usWeightClass: a.tables.os2.usWeightClass, usWidthClass: a.tables.os2.usWidthClass, usFirstCharIndex: b, usLastCharIndex: j, ulUnicodeRange1: k, ulUnicodeRange2: l, ulUnicodeRange3: m, ulUnicodeRange4: n, fsSelection: a.tables.os2.fsSelection, sTypoAscender: t.ascender, sTypoDescender: t.descender, sTypoLineGap: 0, usWinAscent: t.yMax, usWinDescent: Math.abs(t.yMin), ulCodePageRange1: 1, sxHeight: xb(a, "xyvw", { yMax: Math.round(t.ascender / 2) }).yMax, sCapHeight: xb(a, "HIKLEFJMNTZBDPRAGOQSUVWXY", t).yMax, usDefaultChar: a.hasChar(" ") ? 32 : 0, usBreakChar: a.hasChar(" ") ? 32 : 0 }),
                            y = _e.make(a.glyphs),
                            z = Oe.make(a.glyphs),
                            A = a.getEnglishName("fontFamily"),
                            B = a.getEnglishName("fontSubfamily"),
                            C = A + " " + B,
                            D = a.getEnglishName("postScriptName");
                        D || (D = A.replace(/\s/g, "") + "-" + B); var E = {}; for (var F in a.names) E[F] = a.names[F];
                        E.uniqueID || (E.uniqueID = { en: a.getEnglishName("manufacturer") + ":" + C }), E.postScriptName || (E.postScriptName = { en: D }), E.preferredFamily || (E.preferredFamily = a.names.fontFamily), E.preferredSubfamily || (E.preferredSubfamily = a.names.fontSubfamily); var G = [],
                            H = kf.make(E, G),
                            I = G.length > 0 ? af.make(G) : void 0,
                            J = nf.make(),
                            K = Ye.make(a.glyphs, { version: a.getEnglishName("version"), fullName: C, familyName: A, weightName: B, postScriptName: D, unitsPerEm: a.unitsPerEm, fontBBox: [0, t.yMin, t.ascender, t.advanceWidthMax] }),
                            L = a.metas && Object.keys(a.metas).length > 0 ? sf.make(a.metas) : void 0,
                            M = [u, v, w, x, H, z, J, K, y];
                        I && M.push(I), a.tables.gsub && M.push(rf.make(a.tables.gsub)), L && M.push(L); for (var N = wb(M), O = N.encode(), P = ub(O), Q = N.fields, R = !1, S = 0; S < Q.length; S += 1)
                            if ("head table" === Q[S].name) { Q[S].value.checkSumAdjustment = 2981146554 - P, R = !0; break }
                        if (!R) throw new Error("Could not find head table with checkSum to adjust."); return N }

                    function Ab(a, b) { for (var c = 0, d = a.length - 1; c <= d;) { var e = c + d >>> 1,
                                f = a[e].tag; if (f === b) return e;
                            f < b ? c = e + 1 : d = e - 1 } return -c - 1 }

                    function Bb(a, b) { for (var c = 0, d = a.length - 1; c <= d;) { var e = c + d >>> 1,
                                f = a[e]; if (f === b) return e;
                            f < b ? c = e + 1 : d = e - 1 } return -c - 1 }

                    function Cb(a, b) { this.font = a, this.tableName = b }

                    function Db(a) { Cb.call(this, a, "gsub") }

                    function Eb(a, b) { var c = a.length; if (c !== b.length) return !1; for (var d = 0; d < c; d++)
                            if (a[d] !== b[d]) return !1;
                        return !0 }

                    function Fb(a, b, c) { for (var d = a.subtables, e = 0; e < d.length; e++) { var f = d[e]; if (f.substFormat === b) return f } if (c) return d.push(c), c }

                    function Gb() { return "undefined" != typeof window }

                    function Hb(a) { for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; ++d) c[d] = a[d]; return b }

                    function Ib(a) { for (var b = new e(a.byteLength), c = new Uint8Array(a), d = 0; d < b.length; ++d) b[d] = c[d]; return b }

                    function Jb(a, b) { if (!a) throw b }

                    function Kb(a) { this.font = a, this._fpgmState = this._prepState = void 0, this._errorState = 0 }

                    function Lb(a) { return a }

                    function Mb(a) { return Math.sign(a) * Math.round(Math.abs(a)) }

                    function Nb(a) { return Math.sign(a) * Math.round(Math.abs(2 * a)) / 2 }

                    function Ob(a) { return Math.sign(a) * (Math.round(Math.abs(a) + .5) - .5) }

                    function Pb(a) { return Math.sign(a) * Math.ceil(Math.abs(a)) }

                    function Qb(a) { return Math.sign(a) * Math.floor(Math.abs(a)) }

                    function Rb(a, b) { this.x = a, this.y = b, this.axis = void 0, this.slope = b / a, this.normalSlope = -a / b, Object.freeze(this) }

                    function Sb(a, b) { var c = Math.sqrt(a * a + b * b); return a /= c, b /= c, 1 === a && 0 === b ? zf : 0 === a && 1 === b ? Af : new Rb(a, b) }

                    function Tb(a, b, c, d) { this.x = this.xo = Math.round(64 * a) / 64, this.y = this.yo = Math.round(64 * b) / 64, this.lastPointOfContour = c, this.onCurve = d, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this) }

                    function Ub(a, b) { switch (this.env = a, this.stack = [], this.prog = b, a) {
                            case "glyf":
                                this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
                            case "prep":
                                this.fv = this.pv = this.dpv = zf, this.round = Mb } }

                    function Vb(a) { for (var b = a.tZone = new Array(a.gZone.length), c = 0; c < b.length; c++) b[c] = new Tb(0, 0) }

                    function Wb(a, b) { var c, d = a.prog,
                            e = a.ip,
                            f = 1;
                        do { if (88 === (c = d[++e])) f++;
                            else if (89 === c) f--;
                            else if (64 === c) e += d[e + 1] + 1;
                            else if (65 === c) e += 2 * d[e + 1] + 1;
                            else if (c >= 176 && c <= 183) e += c - 176 + 1;
                            else if (c >= 184 && c <= 191) e += 2 * (c - 184 + 1);
                            else if (b && 1 === f && 27 === c) break } while (f > 0);
                        a.ip = e }

                    function Xb(b, c) { a.DEBUG && console.log(c.step, "SVTCA[" + b.axis + "]"), c.fv = c.pv = c.dpv = b }

                    function Yb(b, c) { a.DEBUG && console.log(c.step, "SPVTCA[" + b.axis + "]"), c.pv = c.dpv = b }

                    function Zb(b, c) { a.DEBUG && console.log(c.step, "SFVTCA[" + b.axis + "]"), c.fv = b }

                    function $b(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = d.pop(),
                            g = c.z2[e],
                            h = c.z1[f];
                        a.DEBUG && console.log("SPVTL[" + b + "]", e, f); var i, j;
                        b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.pv = c.dpv = Sb(i, j) }

                    function _b(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = d.pop(),
                            g = c.z2[e],
                            h = c.z1[f];
                        a.DEBUG && console.log("SFVTL[" + b + "]", e, f); var i, j;
                        b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.fv = Sb(i, j) }

                    function ac(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "SPVFS[]", d, e), b.pv = b.dpv = Sb(e, d) }

                    function bc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "SPVFS[]", d, e), b.fv = Sb(e, d) }

                    function cc(b) { var c = b.stack,
                            d = b.pv;
                        a.DEBUG && console.log(b.step, "GPV[]"), c.push(16384 * d.x), c.push(16384 * d.y) }

                    function dc(b) { var c = b.stack,
                            d = b.fv;
                        a.DEBUG && console.log(b.step, "GFV[]"), c.push(16384 * d.x), c.push(16384 * d.y) }

                    function ec(b) { b.fv = b.pv, a.DEBUG && console.log(b.step, "SFVTPV[]") }

                    function fc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop(),
                            f = c.pop(),
                            g = c.pop(),
                            h = c.pop(),
                            i = b.z0,
                            j = b.z1,
                            k = i[d],
                            l = i[e],
                            m = j[f],
                            n = j[g],
                            o = b.z2[h];
                        a.DEBUG && console.log("ISECT[], ", d, e, f, g, h); var p = k.x,
                            q = k.y,
                            r = l.x,
                            s = l.y,
                            t = m.x,
                            u = m.y,
                            v = n.x,
                            w = n.y,
                            x = (p - r) * (u - w) - (q - s) * (t - v),
                            y = p * s - q * r,
                            z = t * w - u * v;
                        o.x = (y * (t - v) - z * (p - r)) / x, o.y = (y * (u - w) - z * (q - s)) / x }

                    function gc(b) { b.rp0 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP0[]", b.rp0) }

                    function hc(b) { b.rp1 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP1[]", b.rp1) }

                    function ic(b) { b.rp2 = b.stack.pop(), a.DEBUG && console.log(b.step, "SRP2[]", b.rp2) }

                    function jc(b) { var c = b.stack.pop(); switch (a.DEBUG && console.log(b.step, "SZP0[]", c), b.zp0 = c, c) {
                            case 0:
                                b.tZone || Vb(b), b.z0 = b.tZone; break;
                            case 1:
                                b.z0 = b.gZone; break;
                            default:
                                throw new Error("Invalid zone pointer") } }

                    function kc(b) { var c = b.stack.pop(); switch (a.DEBUG && console.log(b.step, "SZP1[]", c), b.zp1 = c, c) {
                            case 0:
                                b.tZone || Vb(b), b.z1 = b.tZone; break;
                            case 1:
                                b.z1 = b.gZone; break;
                            default:
                                throw new Error("Invalid zone pointer") } }

                    function lc(b) { var c = b.stack.pop(); switch (a.DEBUG && console.log(b.step, "SZP2[]", c), b.zp2 = c, c) {
                            case 0:
                                b.tZone || Vb(b), b.z2 = b.tZone; break;
                            case 1:
                                b.z2 = b.gZone; break;
                            default:
                                throw new Error("Invalid zone pointer") } }

                    function mc(b) { var c = b.stack.pop(); switch (a.DEBUG && console.log(b.step, "SZPS[]", c), b.zp0 = b.zp1 = b.zp2 = c, c) {
                            case 0:
                                b.tZone || Vb(b), b.z0 = b.z1 = b.z2 = b.tZone; break;
                            case 1:
                                b.z0 = b.z1 = b.z2 = b.gZone; break;
                            default:
                                throw new Error("Invalid zone pointer") } }

                    function nc(b) { b.loop = b.stack.pop(), a.DEBUG && console.log(b.step, "SLOOP[]", b.loop) }

                    function oc(b) { a.DEBUG && console.log(b.step, "RTG[]"), b.round = Mb }

                    function pc(b) { a.DEBUG && console.log(b.step, "RTHG[]"), b.round = Ob }

                    function qc(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "SMD[]", c), b.minDis = c / 64 }

                    function rc(b) { a.DEBUG && console.log(b.step, "ELSE[]"), Wb(b, !1) }

                    function sc(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "JMPR[]", c), b.ip += c - 1 }

                    function tc(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "SCVTCI[]", c), b.cvCutIn = c / 64 }

                    function uc(b) { var c = b.stack;
                        a.DEBUG && console.log(b.step, "DUP[]"), c.push(c[c.length - 1]) }

                    function vc(b) { a.DEBUG && console.log(b.step, "POP[]"), b.stack.pop() }

                    function wc(b) { a.DEBUG && console.log(b.step, "CLEAR[]"), b.stack.length = 0 }

                    function xc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "SWAP[]"), c.push(d), c.push(e) }

                    function yc(b) { var c = b.stack;
                        a.DEBUG && console.log(b.step, "DEPTH[]"), c.push(c.length) }

                    function zc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "LOOPCALL[]", d, e); var f = b.ip,
                            g = b.prog;
                        b.prog = b.funcs[d]; for (var h = 0; h < e; h++) vf(b), a.DEBUG && console.log(++b.step, h + 1 < e ? "next loopcall" : "done loopcall", h);
                        b.ip = f, b.prog = g }

                    function Ac(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "CALL[]", c); var d = b.ip,
                            e = b.prog;
                        b.prog = b.funcs[c], vf(b), b.ip = d, b.prog = e, a.DEBUG && console.log(++b.step, "returning from", c) }

                    function Bc(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "CINDEX[]", d), c.push(c[c.length - d]) }

                    function Cc(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "MINDEX[]", d), c.push(c.splice(c.length - d, 1)[0]) }

                    function Dc(b) { if ("fpgm" !== b.env) throw new Error("FDEF not allowed here"); var c = b.stack,
                            d = b.prog,
                            e = b.ip,
                            f = c.pop(),
                            g = e; for (a.DEBUG && console.log(b.step, "FDEF[]", f); 45 !== d[++e];);
                        b.ip = e, b.funcs[f] = d.slice(g + 1, e) }

                    function Ec(b, c) { var d = c.stack.pop(),
                            e = c.z0[d],
                            f = c.fv,
                            g = c.pv;
                        a.DEBUG && console.log(c.step, "MDAP[" + b + "]", d); var h = g.distance(e, Bf);
                        b && (h = c.round(h)), f.setRelative(e, Bf, h, g), f.touch(e), c.rp0 = c.rp1 = d }

                    function Fc(b, c) { var d, e, f, g = c.z2,
                            h = g.length - 2;
                        a.DEBUG && console.log(c.step, "IUP[" + b.axis + "]"); for (var i = 0; i < h; i++) d = g[i], b.touched(d) || (e = d.prevTouched(b)) !== d && (f = d.nextTouched(b), e === f && b.setRelative(d, d, b.distance(e, e, !1, !0), b, !0), b.interpolate(d, e, f, b)) }

                    function Gc(b, c) { for (var d = c.stack, e = b ? c.rp1 : c.rp2, f = (b ? c.z0 : c.z1)[e], g = c.fv, h = c.pv, i = c.loop, j = c.z2; i--;) { var k = d.pop(),
                                l = j[k],
                                m = h.distance(f, f, !1, !0);
                            g.setRelative(l, l, m, h), g.touch(l), a.DEBUG && console.log(c.step, (c.loop > 1 ? "loop " + (c.loop - i) + ": " : "") + "SHP[" + (b ? "rp1" : "rp2") + "]", k) }
                        c.loop = 1 }

                    function Hc(b, c) { var d = c.stack,
                            e = b ? c.rp1 : c.rp2,
                            f = (b ? c.z0 : c.z1)[e],
                            g = c.fv,
                            h = c.pv,
                            i = d.pop(),
                            j = c.z2[c.contours[i]],
                            k = j;
                        a.DEBUG && console.log(c.step, "SHC[" + b + "]", i); var l = h.distance(f, f, !1, !0);
                        do { k !== f && g.setRelative(k, k, l, h), k = k.nextPointOnContour } while (k !== j) }

                    function Ic(b, c) { var d = c.stack,
                            e = b ? c.rp1 : c.rp2,
                            f = (b ? c.z0 : c.z1)[e],
                            g = c.fv,
                            h = c.pv,
                            i = d.pop();
                        a.DEBUG && console.log(c.step, "SHZ[" + b + "]", i); var j; switch (i) {
                            case 0:
                                j = c.tZone; break;
                            case 1:
                                j = c.gZone; break;
                            default:
                                throw new Error("Invalid zone") } for (var k, l = h.distance(f, f, !1, !0), m = j.length - 2, n = 0; n < m; n++)(k = j[n]) !== f && g.setRelative(k, k, l, h) }

                    function Jc(b) { for (var c = b.stack, d = b.loop, e = b.fv, f = c.pop() / 64, g = b.z2; d--;) { var h = c.pop(),
                                i = g[h];
                            a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - d) + ": " : "") + "SHPIX[]", h, f), e.setRelative(i, i, f), e.touch(i) }
                        b.loop = 1 }

                    function Kc(b) { for (var c = b.stack, d = b.rp1, e = b.rp2, f = b.loop, g = b.z0[d], h = b.z1[e], i = b.fv, j = b.dpv, k = b.z2; f--;) { var l = c.pop(),
                                m = k[l];
                            a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - f) + ": " : "") + "IP[]", l, d, "<->", e), i.interpolate(m, g, h, j), i.touch(m) }
                        b.loop = 1 }

                    function Lc(b, c) { var d = c.stack,
                            e = d.pop() / 64,
                            f = d.pop(),
                            g = c.z1[f],
                            h = c.z0[c.rp0],
                            i = c.fv,
                            j = c.pv;
                        i.setRelative(g, h, e, j), i.touch(g), a.DEBUG && console.log(c.step, "MSIRP[" + b + "]", e, f), c.rp1 = c.rp0, c.rp2 = f, b && (c.rp0 = f) }

                    function Mc(b) { for (var c = b.stack, d = b.rp0, e = b.z0[d], f = b.loop, g = b.fv, h = b.pv, i = b.z1; f--;) { var j = c.pop(),
                                k = i[j];
                            a.DEBUG && console.log(b.step, (b.loop > 1 ? "loop " + (b.loop - f) + ": " : "") + "ALIGNRP[]", j), g.setRelative(k, e, 0, h), g.touch(k) }
                        b.loop = 1 }

                    function Nc(b) { a.DEBUG && console.log(b.step, "RTDG[]"), b.round = Nb }

                    function Oc(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = d.pop(),
                            g = c.z0[f],
                            h = c.fv,
                            i = c.pv,
                            j = c.cvt[e];
                        b && (j = c.round(j)), a.DEBUG && console.log(c.step, "MIAP[" + b + "]", e, "(", j, ")", f), h.setRelative(g, Bf, j, i), 0 === c.zp0 && (g.xo = g.x, g.yo = g.y), h.touch(g), c.rp0 = c.rp1 = f }

                    function Pc(b) { var c = b.prog,
                            d = b.ip,
                            e = b.stack,
                            f = c[++d];
                        a.DEBUG && console.log(b.step, "NPUSHB[]", f); for (var g = 0; g < f; g++) e.push(c[++d]);
                        b.ip = d }

                    function Qc(b) { var c = b.ip,
                            d = b.prog,
                            e = b.stack,
                            f = d[++c];
                        a.DEBUG && console.log(b.step, "NPUSHW[]", f); for (var g = 0; g < f; g++) { var h = d[++c] << 8 | d[++c];
                            32768 & h && (h = -(1 + (65535 ^ h))), e.push(h) }
                        b.ip = c }

                    function Rc(b) { var c = b.stack,
                            d = b.store;
                        d || (d = b.store = []); var e = c.pop(),
                            f = c.pop();
                        a.DEBUG && console.log(b.step, "WS", e, f), d[f] = e }

                    function Sc(b) { var c = b.stack,
                            d = b.store,
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "RS", e); var f = d && d[e] || 0;
                        c.push(f) }

                    function Tc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "WCVTP", d, e), b.cvt[e] = d / 64 }

                    function Uc(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "RCVT", d), c.push(64 * b.cvt[d]) }

                    function Vc(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = c.z2[e];
                        a.DEBUG && console.log(c.step, "GC[" + b + "]", e), d.push(64 * c.dpv.distance(f, Bf, b, !1)) }

                    function Wc(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = d.pop(),
                            g = c.z1[e],
                            h = c.z0[f],
                            i = c.dpv.distance(h, g, b, b);
                        a.DEBUG && console.log(c.step, "MD[" + b + "]", e, f, "->", i), c.stack.push(Math.round(64 * i)) }

                    function Xc(b) { a.DEBUG && console.log(b.step, "MPPEM[]"), b.stack.push(b.ppem) }

                    function Yc(b) { a.DEBUG && console.log(b.step, "FLIPON[]"), b.autoFlip = !0 }

                    function Zc(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "LT[]", d, e), c.push(e < d ? 1 : 0) }

                    function $c(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "LTEQ[]", d, e), c.push(e <= d ? 1 : 0) }

                    function _c(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "GT[]", d, e), c.push(e > d ? 1 : 0) }

                    function ad(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "GTEQ[]", d, e), c.push(e >= d ? 1 : 0) }

                    function bd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "EQ[]", d, e), c.push(d === e ? 1 : 0) }

                    function cd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "NEQ[]", d, e), c.push(d !== e ? 1 : 0) }

                    function dd(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "ODD[]", d), c.push(Math.trunc(d) % 2 ? 1 : 0) }

                    function ed(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "EVEN[]", d), c.push(Math.trunc(d) % 2 ? 0 : 1) }

                    function fd(b) { var c, d = b.stack.pop();
                        a.DEBUG && console.log(b.step, "IF[]", d), d || (Wb(b, !0), a.DEBUG && console.log(b.step, 27 === c ? "ELSE[]" : "EIF[]")) }

                    function gd(b) { a.DEBUG && console.log(b.step, "EIF[]") }

                    function hd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "AND[]", d, e), c.push(d && e ? 1 : 0) }

                    function id(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "OR[]", d, e), c.push(d || e ? 1 : 0) }

                    function jd(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "NOT[]", d), c.push(d ? 0 : 1) }

                    function kd(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = c.fv,
                            g = c.pv,
                            h = c.ppem,
                            i = c.deltaBase + 16 * (b - 1),
                            j = c.deltaShift,
                            k = c.z0;
                        a.DEBUG && console.log(c.step, "DELTAP[" + b + "]", e, d); for (var l = 0; l < e; l++) { var m = d.pop(),
                                n = d.pop(); if (i + ((240 & n) >> 4) === h) { var o = (15 & n) - 8;
                                o >= 0 && o++, a.DEBUG && console.log(c.step, "DELTAPFIX", m, "by", o * j); var p = k[m];
                                f.setRelative(p, p, o * j, g) } } }

                    function ld(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "SDB[]", d), b.deltaBase = d }

                    function md(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "SDS[]", d), b.deltaShift = Math.pow(.5, d) }

                    function nd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "ADD[]", d, e), c.push(e + d) }

                    function od(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "SUB[]", d, e), c.push(e - d) }

                    function pd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "DIV[]", d, e), c.push(64 * e / d) }

                    function qd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "MUL[]", d, e), c.push(e * d / 64) }

                    function rd(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "ABS[]", d), c.push(Math.abs(d)) }

                    function sd(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "NEG[]", d), c.push(-d) }

                    function td(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "FLOOR[]", d), c.push(64 * Math.floor(d / 64)) }

                    function ud(b) { var c = b.stack,
                            d = c.pop();
                        a.DEBUG && console.log(b.step, "CEILING[]", d), c.push(64 * Math.ceil(d / 64)) }

                    function vd(b, c) { var d = c.stack,
                            e = d.pop();
                        a.DEBUG && console.log(c.step, "ROUND[]"), d.push(64 * c.round(e / 64)) }

                    function wd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "WCVTF[]", d, e), b.cvt[e] = d * b.ppem / b.font.unitsPerEm }

                    function xd(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = c.ppem,
                            g = c.deltaBase + 16 * (b - 1),
                            h = c.deltaShift;
                        a.DEBUG && console.log(c.step, "DELTAC[" + b + "]", e, d); for (var i = 0; i < e; i++) { var j = d.pop(),
                                k = d.pop(); if (g + ((240 & k) >> 4) === f) { var l = (15 & k) - 8;
                                l >= 0 && l++; var m = l * h;
                                a.DEBUG && console.log(c.step, "DELTACFIX", j, "by", m), c.cvt[j] += m } } }

                    function yd(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "SROUND[]", c), b.round = yf; var d; switch (192 & c) {
                            case 0:
                                d = .5; break;
                            case 64:
                                d = 1; break;
                            case 128:
                                d = 2; break;
                            default:
                                throw new Error("invalid SROUND value") } switch (b.srPeriod = d, 48 & c) {
                            case 0:
                                b.srPhase = 0; break;
                            case 16:
                                b.srPhase = .25 * d; break;
                            case 32:
                                b.srPhase = .5 * d; break;
                            case 48:
                                b.srPhase = .75 * d; break;
                            default:
                                throw new Error("invalid SROUND value") }
                        c &= 15, b.srThreshold = 0 === c ? 0 : (c / 8 - .5) * d }

                    function zd(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "S45ROUND[]", c), b.round = yf; var d; switch (192 & c) {
                            case 0:
                                d = Math.sqrt(2) / 2; break;
                            case 64:
                                d = Math.sqrt(2); break;
                            case 128:
                                d = 2 * Math.sqrt(2); break;
                            default:
                                throw new Error("invalid S45ROUND value") } switch (b.srPeriod = d, 48 & c) {
                            case 0:
                                b.srPhase = 0; break;
                            case 16:
                                b.srPhase = .25 * d; break;
                            case 32:
                                b.srPhase = .5 * d; break;
                            case 48:
                                b.srPhase = .75 * d; break;
                            default:
                                throw new Error("invalid S45ROUND value") }
                        c &= 15, b.srThreshold = 0 === c ? 0 : (c / 8 - .5) * d }

                    function Ad(b) { a.DEBUG && console.log(b.step, "ROFF[]"), b.round = Lb }

                    function Bd(b) { a.DEBUG && console.log(b.step, "RUTG[]"), b.round = Pb }

                    function Cd(b) { a.DEBUG && console.log(b.step, "RDTG[]"), b.round = Qb }

                    function Dd(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "SCANCTRL[]", c) }

                    function Ed(b, c) { var d = c.stack,
                            e = d.pop(),
                            f = d.pop(),
                            g = c.z2[e],
                            h = c.z1[f];
                        a.DEBUG && console.log("SDPVTL[" + b + "]", e, f); var i, j;
                        b ? (i = g.y - h.y, j = h.x - g.x) : (i = h.x - g.x, j = h.y - g.y), c.dpv = Sb(i, j) }

                    function Fd(b) { var c = b.stack,
                            d = c.pop(),
                            e = 0;
                        a.DEBUG && console.log(b.step, "GETINFO[]", d), 1 & d && (e = 35), 32 & d && (e |= 4096), c.push(e) }

                    function Gd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop(),
                            f = c.pop();
                        a.DEBUG && console.log(b.step, "ROLL[]"), c.push(e), c.push(d), c.push(f) }

                    function Hd(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "MAX[]", d, e), c.push(Math.max(e, d)) }

                    function Id(b) { var c = b.stack,
                            d = c.pop(),
                            e = c.pop();
                        a.DEBUG && console.log(b.step, "MIN[]", d, e), c.push(Math.min(e, d)) }

                    function Jd(b) { var c = b.stack.pop();
                        a.DEBUG && console.log(b.step, "SCANTYPE[]", c) }

                    function Kd(b) { var c = b.stack.pop(),
                            d = b.stack.pop(); switch (a.DEBUG && console.log(b.step, "INSTCTRL[]", c, d), c) {
                            case 1:
                                return void(b.inhibitGridFit = !!d);
                            case 2:
                                return void(b.ignoreCvt = !!d);
                            default:
                                throw new Error("invalid INSTCTRL[] selector") } }

                    function Ld(b, c) { var d = c.stack,
                            e = c.prog,
                            f = c.ip;
                        a.DEBUG && console.log(c.step, "PUSHB[" + b + "]"); for (var g = 0; g < b; g++) d.push(e[++f]);
                        c.ip = f }

                    function Md(b, c) { var d = c.ip,
                            e = c.prog,
                            f = c.stack;
                        a.DEBUG && console.log(c.ip, "PUSHW[" + b + "]"); for (var g = 0; g < b; g++) { var h = e[++d] << 8 | e[++d];
                            32768 & h && (h = -(1 + (65535 ^ h))), f.push(h) }
                        c.ip = d }

                    function Nd(b, c, d, e, f, g) { var h, i, j, k, l = g.stack,
                            m = b && l.pop(),
                            n = l.pop(),
                            o = g.rp0,
                            p = g.z0[o],
                            q = g.z1[n],
                            r = g.minDis,
                            s = g.fv,
                            t = g.dpv;
                        i = h = t.distance(q, p, !0, !0), j = i >= 0 ? 1 : -1, i = Math.abs(i), b && (k = g.cvt[m], e && Math.abs(i - k) < g.cvCutIn && (i = k)), d && i < r && (i = r), e && (i = g.round(i)), s.setRelative(q, p, j * i, t), s.touch(q), a.DEBUG && console.log(g.step, (b ? "MIRP[" : "MDRP[") + (c ? "M" : "m") + (d ? ">" : "_") + (e ? "R" : "_") + (0 === f ? "Gr" : 1 === f ? "Bl" : 2 === f ? "Wh" : "") + "]", b ? m + "(" + g.cvt[m] + "," + k + ")" : "", n, "(d =", h, "->", j * i, ")"), g.rp1 = g.rp0, g.rp2 = n, c && (g.rp0 = n) }

                    function Od(a) {
                        a = a || {}, a.empty || (Jb(a.familyName, "When creating a new Font object, familyName is required."), Jb(a.styleName, "When creating a new Font object, styleName is required."), Jb(a.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Jb(a.ascender, "When creating a new Font object, ascender is required."),
                            Jb(a.descender, "When creating a new Font object, descender is required."), Jb(a.descender < 0, "Descender should be negative (e.g. -512)."), this.names = { fontFamily: { en: a.familyName || " " }, fontSubfamily: { en: a.styleName || " " }, fullName: { en: a.fullName || a.familyName + " " + a.styleName }, postScriptName: { en: a.postScriptName || a.familyName + a.styleName }, designer: { en: a.designer || " " }, designerURL: { en: a.designerURL || " " }, manufacturer: { en: a.manufacturer || " " }, manufacturerURL: { en: a.manufacturerURL || " " }, license: { en: a.license || " " }, licenseURL: { en: a.licenseURL || " " }, version: { en: a.version || "Version 0.1" }, description: { en: a.description || " " }, copyright: { en: a.copyright || " " }, trademark: { en: a.trademark || " " } }, this.unitsPerEm = a.unitsPerEm || 1e3, this.ascender = a.ascender, this.descender = a.descender, this.createdTimestamp = a.createdTimestamp, this.tables = { os2: { usWeightClass: a.weightClass || this.usWeightClasses.MEDIUM, usWidthClass: a.widthClass || this.usWidthClasses.MEDIUM, fsSelection: a.fsSelection || this.fsSelectionValues.REGULAR } }), this.supported = !0, this.glyphs = new Ve.GlyphSet(this, a.glyphs || []), this.encoding = new X(this), this.substitution = new Db(this), this.tables = this.tables || {}, Object.defineProperty(this, "hinting", { get: function() { return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new Kb(this) : void 0 } })
                    }

                    function Pd(a, b) { var c = JSON.stringify(a),
                            d = 256; for (var e in b) { var f = parseInt(e); if (f && !(f < 256)) { if (JSON.stringify(b[e]) === c) return f;
                                d <= f && (d = f + 1) } } return b[d] = a, d }

                    function Qd(a, b, c) { var d = Pd(b.name, c); return [{ name: "tag_" + a, type: "TAG", value: b.tag }, { name: "minValue_" + a, type: "FIXED", value: b.minValue << 16 }, { name: "defaultValue_" + a, type: "FIXED", value: b.defaultValue << 16 }, { name: "maxValue_" + a, type: "FIXED", value: b.maxValue << 16 }, { name: "flags_" + a, type: "USHORT", value: 0 }, { name: "nameID_" + a, type: "USHORT", value: d }] }

                    function Rd(a, b, c) { var d = {},
                            e = new Ne.Parser(a, b); return d.tag = e.parseTag(), d.minValue = e.parseFixed(), d.defaultValue = e.parseFixed(), d.maxValue = e.parseFixed(), e.skip("uShort", 1), d.name = c[e.parseUShort()] || {}, d }

                    function Sd(a, b, c, d) { for (var e = Pd(b.name, d), f = [{ name: "nameID_" + a, type: "USHORT", value: e }, { name: "flags_" + a, type: "USHORT", value: 0 }], g = 0; g < c.length; ++g) { var h = c[g].tag;
                            f.push({ name: "axis_" + a + " " + h, type: "FIXED", value: b.coordinates[h] << 16 }) } return f }

                    function Td(a, b, c, d) { var e = {},
                            f = new Ne.Parser(a, b);
                        e.name = d[f.parseUShort()] || {}, f.skip("uShort", 1), e.coordinates = {}; for (var g = 0; g < c.length; ++g) e.coordinates[c[g].tag] = f.parseFixed(); return e }

                    function Ud(a, b) { var c = new Ke.Table("fvar", [{ name: "version", type: "ULONG", value: 65536 }, { name: "offsetToData", type: "USHORT", value: 0 }, { name: "countSizePairs", type: "USHORT", value: 2 }, { name: "axisCount", type: "USHORT", value: a.axes.length }, { name: "axisSize", type: "USHORT", value: 20 }, { name: "instanceCount", type: "USHORT", value: a.instances.length }, { name: "instanceSize", type: "USHORT", value: 4 + 4 * a.axes.length }]);
                        c.offsetToData = c.sizeOf(); for (var d = 0; d < a.axes.length; d++) c.fields = c.fields.concat(Qd(d, a.axes[d], b)); for (var e = 0; e < a.instances.length; e++) c.fields = c.fields.concat(Sd(e, a.instances[e], a.axes, b)); return c }

                    function Vd(a, b, c) { var d = new Ne.Parser(a, b),
                            e = d.parseULong();
                        ze.argument(65536 === e, "Unsupported fvar table version."); var f = d.parseOffset16();
                        d.skip("uShort", 1); for (var g = d.parseUShort(), h = d.parseUShort(), i = d.parseUShort(), j = d.parseUShort(), k = [], l = 0; l < g; l++) k.push(Rd(a, b + f + l * h, c)); for (var m = [], n = b + f + g * h, o = 0; o < i; o++) m.push(Td(a, n + o * j, k, c)); return { axes: k, instances: m } }

                    function Wd(a, b) { for (var c = new Ne.Parser(a, b), d = c.parseUShort(), e = [], f = 0; f < d; f++) e[c.parseTag()] = { offset: c.parseUShort() }; return e }

                    function Xd(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseUShort(),
                            e = c.parseUShort(); if (1 === d) return c.parseUShortList(e); if (2 === d) { for (var f = []; e--;)
                                for (var g = c.parseUShort(), h = c.parseUShort(), i = c.parseUShort(), j = g; j <= h; j++) f[i++] = j; return f } }

                    function Yd(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseUShort(); if (1 === d) { var e = c.parseUShort(),
                                f = c.parseUShort(),
                                g = c.parseUShortList(f); return function(a) { return g[a - e] || 0 } } if (2 === d) { for (var h = c.parseUShort(), i = [], j = [], k = [], l = 0; l < h; l++) i[l] = c.parseUShort(), j[l] = c.parseUShort(), k[l] = c.parseUShort(); return function(a) { for (var b = 0, c = i.length - 1; b < c;) { var d = b + c + 1 >> 1;
                                    a < i[d] ? c = d - 1 : b = d } return i[b] <= a && a <= j[b] ? k[b] || 0 : 0 } } }

                    function Zd(a, b) { var c, d = new Ne.Parser(a, b),
                            e = d.parseUShort(),
                            f = d.parseUShort(),
                            g = Xd(a, b + f),
                            h = d.parseUShort(),
                            i = d.parseUShort(); if (4 === h && 0 === i) { var j = {}; if (1 === e) { for (var k = d.parseUShort(), l = [], m = d.parseOffset16List(k), n = 0; n < k; n++) { var o = m[n],
                                        p = j[o]; if (!p) { p = {}, d.relativeOffset = o; for (var q = d.parseUShort(); q--;) { var r = d.parseUShort();
                                            h && (c = d.parseShort()), i && d.parseShort(), p[r] = c } }
                                    l[g[n]] = p } return function(a, b) { var c = l[a]; if (c) return c[b] } } if (2 === e) { for (var s = d.parseUShort(), t = d.parseUShort(), u = d.parseUShort(), v = d.parseUShort(), w = Yd(a, b + s), x = Yd(a, b + t), y = [], z = 0; z < u; z++)
                                    for (var A = y[z] = [], B = 0; B < v; B++) h && (c = d.parseShort()), i && d.parseShort(), A[B] = c; for (var C = {}, D = 0; D < g.length; D++) C[g[D]] = 1; return function(a, b) { if (C[a]) { var c = w(a),
                                            d = x(b),
                                            e = y[c]; return e ? e[d] : void 0 } } } } }

                    function $d(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseUShort(),
                            e = c.parseUShort(),
                            f = 16 & e,
                            g = c.parseUShort(),
                            h = c.parseOffset16List(g),
                            i = { lookupType: d, lookupFlag: e, markFilteringSet: f ? c.parseUShort() : -1 }; if (2 === d) { for (var j = [], k = 0; k < g; k++) { var l = Zd(a, b + h[k]);
                                l && j.push(l) }
                            i.getKerningValue = function(a, b) { for (var c = j.length; c--;) { var d = j[c](a, b); if (void 0 !== d) return d } return 0 } } return i }

                    function _d(a, b, c) { var d = new Ne.Parser(a, b),
                            e = d.parseFixed();
                        ze.argument(1 === e, "Unsupported GPOS table version."), Wd(a, b + d.parseUShort()), Wd(a, b + d.parseUShort()); var f = d.parseUShort();
                        d.relativeOffset = f; for (var g = d.parseUShort(), h = d.parseOffset16List(g), i = b + f, j = 0; j < g; j++) { var k = $d(a, i + h[j]);
                            2 !== k.lookupType || c.getGposKerningValue || (c.getGposKerningValue = k.getKerningValue) } }

                    function ae(a) { var b = {};
                        a.skip("uShort"); var c = a.parseUShort();
                        ze.argument(0 === c, "Unsupported kern sub-table version."), a.skip("uShort", 2); var d = a.parseUShort();
                        a.skip("uShort", 3); for (var e = 0; e < d; e += 1) { var f = a.parseUShort(),
                                g = a.parseUShort(),
                                h = a.parseShort();
                            b[f + "," + g] = h } return b }

                    function be(a) { var b = {};
                        a.skip("uShort"), a.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), a.skip("uLong"); var c = a.parseUShort(),
                            d = 255 & c; if (a.skip("uShort"), 0 === d) { var e = a.parseUShort();
                            a.skip("uShort", 3); for (var f = 0; f < e; f += 1) { var g = a.parseUShort(),
                                    h = a.parseUShort(),
                                    i = a.parseShort();
                                b[g + "," + h] = i } } return b }

                    function ce(a, b) { var c = new Ne.Parser(a, b),
                            d = c.parseUShort(); if (0 === d) return ae(c); if (1 === d) return be(c); throw new Error("Unsupported kern table version (" + d + ").") }

                    function de(a, b, c, d) { for (var e = new Ne.Parser(a, b), f = d ? e.parseUShort : e.parseULong, g = [], h = 0; h < c + 1; h += 1) { var i = f.call(e);
                            d && (i *= 2), g.push(i) } return g }

                    function ee(a, c) { b("fs").readFile(a, function(a, b) { if (a) return c(a.message);
                            c(null, Hb(b)) }) }

                    function fe(a, b) { var c = new XMLHttpRequest;
                        c.open("get", a, !0), c.responseType = "arraybuffer", c.onload = function() { return 200 !== c.status ? b("Font could not be loaded: " + c.statusText) : b(null, c.response) }, c.onerror = function() { b("Font could not be loaded") }, c.send() }

                    function ge(a, b) { for (var c = [], d = 12, e = 0; e < b; e += 1) { var f = Ne.getTag(a, d),
                                g = Ne.getULong(a, d + 4),
                                h = Ne.getULong(a, d + 8),
                                i = Ne.getULong(a, d + 12);
                            c.push({ tag: f, checksum: g, offset: h, length: i, compression: !1 }), d += 16 } return c }

                    function he(a, b) { for (var c = [], d = 44, e = 0; e < b; e += 1) { var f = Ne.getTag(a, d),
                                g = Ne.getULong(a, d + 4),
                                h = Ne.getULong(a, d + 8),
                                i = Ne.getULong(a, d + 12),
                                j = void 0;
                            j = h < i && "WOFF", c.push({ tag: f, offset: g, compression: j, compressedLength: h, length: i }), d += 20 } return c }

                    function ie(a, b) { if ("WOFF" === b.compression) { var c = new Uint8Array(a.buffer, b.offset + 2, b.compressedLength - 2),
                                d = new Uint8Array(b.length); if (ye(c, d), d.byteLength !== b.length) throw new Error("Decompression error: " + b.tag + " decompressed length doesn't match recorded length"); return { data: new DataView(d.buffer, 0), offset: 0 } } return { data: a, offset: b.offset } }

                    function je(a) { var b, c, d, e = new Od({ empty: !0 }),
                            f = new DataView(a, 0),
                            g = [],
                            h = Ne.getTag(f, 0); if (h === String.fromCharCode(0, 1, 0, 0) || "true" === h || "typ1" === h) e.outlinesFormat = "truetype", d = Ne.getUShort(f, 4), g = ge(f, d);
                        else if ("OTTO" === h) e.outlinesFormat = "cff", d = Ne.getUShort(f, 4), g = ge(f, d);
                        else { if ("wOFF" !== h) throw new Error("Unsupported OpenType signature " + h); var i = Ne.getTag(f, 4); if (i === String.fromCharCode(0, 1, 0, 0)) e.outlinesFormat = "truetype";
                            else { if ("OTTO" !== i) throw new Error("Unsupported OpenType flavor " + h);
                                e.outlinesFormat = "cff" }
                            d = Ne.getUShort(f, 12), g = he(f, d) } for (var j, k, l, m, n, o, p, q, r, s, t, u = 0; u < d; u += 1) { var v = g[u],
                                w = void 0; switch (v.tag) {
                                case "cmap":
                                    w = ie(f, v), e.tables.cmap = Oe.parse(w.data, w.offset), e.encoding = new Y(e.tables.cmap); break;
                                case "cvt ":
                                    w = ie(f, v), t = new Ne.Parser(w.data, w.offset), e.tables.cvt = t.parseShortList(v.length / 2); break;
                                case "fvar":
                                    k = v; break;
                                case "fpgm":
                                    w = ie(f, v), t = new Ne.Parser(w.data, w.offset), e.tables.fpgm = t.parseByteList(v.length); break;
                                case "head":
                                    w = ie(f, v), e.tables.head = Ze.parse(w.data, w.offset), e.unitsPerEm = e.tables.head.unitsPerEm, b = e.tables.head.indexToLocFormat; break;
                                case "hhea":
                                    w = ie(f, v), e.tables.hhea = $e.parse(w.data, w.offset), e.ascender = e.tables.hhea.ascender, e.descender = e.tables.hhea.descender, e.numberOfHMetrics = e.tables.hhea.numberOfHMetrics; break;
                                case "hmtx":
                                    o = v; break;
                                case "ltag":
                                    w = ie(f, v), c = af.parse(w.data, w.offset); break;
                                case "maxp":
                                    w = ie(f, v), e.tables.maxp = bf.parse(w.data, w.offset), e.numGlyphs = e.tables.maxp.numGlyphs; break;
                                case "name":
                                    r = v; break;
                                case "OS/2":
                                    w = ie(f, v), e.tables.os2 = mf.parse(w.data, w.offset); break;
                                case "post":
                                    w = ie(f, v), e.tables.post = nf.parse(w.data, w.offset), e.glyphNames = new $(e.tables.post); break;
                                case "prep":
                                    w = ie(f, v), t = new Ne.Parser(w.data, w.offset), e.tables.prep = t.parseByteList(v.length); break;
                                case "glyf":
                                    l = v; break;
                                case "loca":
                                    q = v; break;
                                case "CFF ":
                                    j = v; break;
                                case "kern":
                                    p = v; break;
                                case "GPOS":
                                    m = v; break;
                                case "GSUB":
                                    n = v; break;
                                case "meta":
                                    s = v } } var x = ie(f, r); if (e.tables.name = kf.parse(x.data, x.offset, c), e.names = e.tables.name, l && q) { var y = 0 === b,
                                z = ie(f, q),
                                A = Gf.parse(z.data, z.offset, e.numGlyphs, y),
                                B = ie(f, l);
                            e.glyphs = Ue.parse(B.data, B.offset, A, e) } else { if (!j) throw new Error("Font doesn't contain TrueType or CFF outlines."); var C = ie(f, j);
                            Ye.parse(C.data, C.offset, e) } var D = ie(f, o); if (_e.parse(D.data, D.offset, e.numberOfHMetrics, e.numGlyphs, e.glyphs), _(e), p) { var E = ie(f, p);
                            e.kerningPairs = Ff.parse(E.data, E.offset) } else e.kerningPairs = {}; if (m) { var F = ie(f, m);
                            Ef.parse(F.data, F.offset, e) } if (n) { var G = ie(f, n);
                            e.tables.gsub = rf.parse(G.data, G.offset) } if (k) { var H = ie(f, k);
                            e.tables.fvar = Df.parse(H.data, H.offset, e.names) } if (s) { var I = ie(f, s);
                            e.tables.meta = sf.parse(I.data, I.offset), e.metas = e.tables.meta } return e }

                    function ke(a, b) {
                        ("undefined" == typeof window ? ee : fe)(a, function(a, c) { if (a) return b(a); var d; try { d = je(c) } catch (a) { return b(a, null) } return b(null, d) }) }

                    function le(a) { return je(Hb(b("fs").readFileSync(a))) }
                    var me = 0,
                        ne = -3,
                        oe = new c,
                        pe = new c,
                        qe = new Uint8Array(30),
                        re = new Uint16Array(30),
                        se = new Uint8Array(30),
                        te = new Uint16Array(30),
                        ue = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                        ve = new c,
                        we = new Uint8Array(320),
                        xe = new Uint16Array(16);
                    g(oe, pe), f(qe, re, 4, 3), f(se, te, 2, 1), qe[28] = 0, re[28] = 258;
                    var ye = o;
                    q.prototype.isEmpty = function() { return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2) }, q.prototype.addPoint = function(a, b) { "number" == typeof a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a, this.x2 = a), a < this.x1 && (this.x1 = a), a > this.x2 && (this.x2 = a)), "number" == typeof b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b, this.y2 = b), b < this.y1 && (this.y1 = b), b > this.y2 && (this.y2 = b)) }, q.prototype.addX = function(a) { this.addPoint(a, null) }, q.prototype.addY = function(a) { this.addPoint(null, a) }, q.prototype.addBezier = function(a, b, c, d, e, f, g, h) { var i = this,
                            j = [a, b],
                            k = [c, d],
                            l = [e, f],
                            m = [g, h];
                        this.addPoint(a, b), this.addPoint(g, h); for (var n = 0; n <= 1; n++) { var o = 6 * j[n] - 12 * k[n] + 6 * l[n],
                                q = -3 * j[n] + 9 * k[n] - 9 * l[n] + 3 * m[n],
                                r = 3 * k[n] - 3 * j[n]; if (0 !== q) { var s = Math.pow(o, 2) - 4 * r * q; if (!(s < 0)) { var t = (-o + Math.sqrt(s)) / (2 * q);
                                    0 < t && t < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], t)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], t))); var u = (-o - Math.sqrt(s)) / (2 * q);
                                    0 < u && u < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], u)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], u))) } } else { if (0 === o) continue; var v = -r / o;
                                0 < v && v < 1 && (0 === n && i.addX(p(j[n], k[n], l[n], m[n], v)), 1 === n && i.addY(p(j[n], k[n], l[n], m[n], v))) } } }, q.prototype.addQuad = function(a, b, c, d, e, f) { var g = a + 2 / 3 * (c - a),
                            h = b + 2 / 3 * (d - b),
                            i = g + 1 / 3 * (e - a),
                            j = h + 1 / 3 * (f - b);
                        this.addBezier(a, b, g, h, i, j, e, f) }, r.prototype.moveTo = function(a, b) { this.commands.push({ type: "M", x: a, y: b }) }, r.prototype.lineTo = function(a, b) { this.commands.push({ type: "L", x: a, y: b }) }, r.prototype.curveTo = r.prototype.bezierCurveTo = function(a, b, c, d, e, f) { this.commands.push({ type: "C", x1: a, y1: b, x2: c, y2: d, x: e, y: f }) }, r.prototype.quadTo = r.prototype.quadraticCurveTo = function(a, b, c, d) { this.commands.push({ type: "Q", x1: a, y1: b, x: c, y: d }) }, r.prototype.close = r.prototype.closePath = function() { this.commands.push({ type: "Z" }) }, r.prototype.extend = function(a) { if (a.commands) a = a.commands;
                        else if (a instanceof q) { var b = a; return this.moveTo(b.x1, b.y1), this.lineTo(b.x2, b.y1), this.lineTo(b.x2, b.y2), this.lineTo(b.x1, b.y2), void this.close() }
                        Array.prototype.push.apply(this.commands, a) }, r.prototype.getBoundingBox = function() { for (var a = this, b = new q, c = 0, d = 0, e = 0, f = 0, g = 0; g < this.commands.length; g++) { var h = a.commands[g]; switch (h.type) {
                                case "M":
                                    b.addPoint(h.x, h.y), c = e = h.x, d = f = h.y; break;
                                case "L":
                                    b.addPoint(h.x, h.y), e = h.x, f = h.y; break;
                                case "Q":
                                    b.addQuad(e, f, h.x1, h.y1, h.x, h.y), e = h.x, f = h.y; break;
                                case "C":
                                    b.addBezier(e, f, h.x1, h.y1, h.x2, h.y2, h.x, h.y), e = h.x, f = h.y; break;
                                case "Z":
                                    e = c, f = d; break;
                                default:
                                    throw new Error("Unexpected path command " + h.type) } } return b.isEmpty() && b.addPoint(0, 0), b }, r.prototype.draw = function(a) { var b = this;
                        a.beginPath(); for (var c = 0; c < this.commands.length; c += 1) { var d = b.commands[c]; "M" === d.type ? a.moveTo(d.x, d.y) : "L" === d.type ? a.lineTo(d.x, d.y) : "C" === d.type ? a.bezierCurveTo(d.x1, d.y1, d.x2, d.y2, d.x, d.y) : "Q" === d.type ? a.quadraticCurveTo(d.x1, d.y1, d.x, d.y) : "Z" === d.type && a.closePath() }
                        this.fill && (a.fillStyle = this.fill, a.fill()), this.stroke && (a.strokeStyle = this.stroke, a.lineWidth = this.strokeWidth, a.stroke()) }, r.prototype.toPathData = function(a) {
                        function b(b) { return Math.round(b) === b ? "" + Math.round(b) : b.toFixed(a) }

                        function c() { for (var a = arguments, c = "", d = 0; d < arguments.length; d += 1) { var e = a[d];
                                e >= 0 && d > 0 && (c += " "), c += b(e) } return c } var d = this;
                        a = void 0 !== a ? a : 2; for (var e = "", f = 0; f < this.commands.length; f += 1) { var g = d.commands[f]; "M" === g.type ? e += "M" + c(g.x, g.y) : "L" === g.type ? e += "L" + c(g.x, g.y) : "C" === g.type ? e += "C" + c(g.x1, g.y1, g.x2, g.y2, g.x, g.y) : "Q" === g.type ? e += "Q" + c(g.x1, g.y1, g.x, g.y) : "Z" === g.type && (e += "Z") } return e }, r.prototype.toSVG = function(a) { var b = '<path d="'; return b += this.toPathData(a), b += '"', this.fill && "black" !== this.fill && (null === this.fill ? b += ' fill="none"' : b += ' fill="' + this.fill + '"'), this.stroke && (b += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), b += "/>" }, r.prototype.toDOMElement = function(a) { var b = this.toPathData(a),
                            c = document.createElementNS("http://www.w3.org/2000/svg", "path"); return c.setAttribute("d", b), c };
                    var ze = { fail: s, argument: t, assert: t },
                        Ae = 32768,
                        Be = 2147483648,
                        Ce = {},
                        De = {},
                        Ee = {};
                    De.BYTE = function(a) { return ze.argument(a >= 0 && a <= 255, "Byte value should be between 0 and 255."), [a] }, Ee.BYTE = u(1), De.CHAR = function(a) { return [a.charCodeAt(0)] }, Ee.CHAR = u(1), De.CHARARRAY = function(a) { for (var b = [], c = 0; c < a.length; c += 1) b[c] = a.charCodeAt(c); return b }, Ee.CHARARRAY = function(a) { return a.length }, De.USHORT = function(a) { return [a >> 8 & 255, 255 & a] }, Ee.USHORT = u(2), De.SHORT = function(a) { return a >= Ae && (a = -(2 * Ae - a)), [a >> 8 & 255, 255 & a] }, Ee.SHORT = u(2), De.UINT24 = function(a) { return [a >> 16 & 255, a >> 8 & 255, 255 & a] }, Ee.UINT24 = u(3), De.ULONG = function(a) { return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a] }, Ee.ULONG = u(4), De.LONG = function(a) { return a >= Be && (a = -(2 * Be - a)), [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a] }, Ee.LONG = u(4), De.FIXED = De.ULONG, Ee.FIXED = Ee.ULONG, De.FWORD = De.SHORT, Ee.FWORD = Ee.SHORT, De.UFWORD = De.USHORT, Ee.UFWORD = Ee.USHORT, De.LONGDATETIME = function(a) { return [0, 0, 0, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a] }, Ee.LONGDATETIME = u(8), De.TAG = function(a) { return ze.argument(4 === a.length, "Tag should be exactly 4 ASCII characters."), [a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2), a.charCodeAt(3)] }, Ee.TAG = u(4), De.Card8 = De.BYTE, Ee.Card8 = Ee.BYTE, De.Card16 = De.USHORT, Ee.Card16 = Ee.USHORT, De.OffSize = De.BYTE, Ee.OffSize = Ee.BYTE, De.SID = De.USHORT, Ee.SID = Ee.USHORT, De.NUMBER = function(a) { return a >= -107 && a <= 107 ? [a + 139] : a >= 108 && a <= 1131 ? (a -= 108, [247 + (a >> 8), 255 & a]) : a >= -1131 && a <= -108 ? (a = -a - 108, [251 + (a >> 8), 255 & a]) : a >= -32768 && a <= 32767 ? De.NUMBER16(a) : De.NUMBER32(a) }, Ee.NUMBER = function(a) { return De.NUMBER(a).length }, De.NUMBER16 = function(a) { return [28, a >> 8 & 255, 255 & a] }, Ee.NUMBER16 = u(3), De.NUMBER32 = function(a) { return [29, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a] }, Ee.NUMBER32 = u(5), De.REAL = function(a) { var b = a.toString(),
                            c = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(b); if (c) { var d = parseFloat("1e" + ((c[2] ? +c[2] : 0) + c[1].length));
                            b = (Math.round(a * d) / d).toString() } for (var e = "", f = 0, g = b.length; f < g; f += 1) { var h = b[f];
                            e += "e" === h ? "-" === b[++f] ? "c" : "b" : "." === h ? "a" : "-" === h ? "e" : h }
                        e += 1 & e.length ? "f" : "ff"; for (var i = [30], j = 0, k = e.length; j < k; j += 2) i.push(parseInt(e.substr(j, 2), 16)); return i }, Ee.REAL = function(a) { return De.REAL(a).length }, De.NAME = De.CHARARRAY, Ee.NAME = Ee.CHARARRAY, De.STRING = De.CHARARRAY, Ee.STRING = Ee.CHARARRAY, Ce.UTF8 = function(a, b, c) { for (var d = [], e = c, f = 0; f < e; f++, b += 1) d[f] = a.getUint8(b); return String.fromCharCode.apply(null, d) }, Ce.UTF16 = function(a, b, c) { for (var d = [], e = c / 2, f = 0; f < e; f++, b += 2) d[f] = a.getUint16(b); return String.fromCharCode.apply(null, d) }, De.UTF16 = function(a) { for (var b = [], c = 0; c < a.length; c += 1) { var d = a.charCodeAt(c);
                            b[b.length] = d >> 8 & 255, b[b.length] = 255 & d } return b }, Ee.UTF16 = function(a) { return 2 * a.length };
                    var Fe = { "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ", "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю", "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ", "x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­", "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł", "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ", macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ" };
                    Ce.MACSTRING = function(a, b, c, d) { var e = Fe[d]; if (void 0 !== e) { for (var f = "", g = 0; g < c; g++) { var h = a.getUint8(b + g);
                                f += h <= 127 ? String.fromCharCode(h) : e[127 & h] } return f } };
                    var Ge, He = "function" == typeof WeakMap && new WeakMap,
                        Ie = function(a) { if (!Ge) { Ge = {}; for (var b in Fe) Ge[b] = new String(b) } var c = Ge[a]; if (void 0 !== c) { if (He) { var d = He.get(c); if (void 0 !== d) return d } var e = Fe[a]; if (void 0 !== e) { for (var f = {}, g = 0; g < e.length; g++) f[e.charCodeAt(g)] = g + 128; return He && He.set(c, f), f } } };
                    De.MACSTRING = function(a, b) { var c = Ie(b); if (void 0 !== c) { for (var d = [], e = 0; e < a.length; e++) { var f = a.charCodeAt(e); if (f >= 128 && void 0 === (f = c[f])) return;
                                d[e] = f } return d } }, Ee.MACSTRING = function(a, b) { var c = De.MACSTRING(a, b); return void 0 !== c ? c.length : 0 }, De.VARDELTAS = function(a) { for (var b = 0, c = []; b < a.length;) { var d = a[b];
                            b = 0 === d ? w(a, b, c) : d >= -128 && d <= 127 ? x(a, b, c) : y(a, b, c) } return c }, De.INDEX = function(a) { for (var b = 1, c = [b], d = [], e = 0; e < a.length; e += 1) { var f = De.OBJECT(a[e]);
                            Array.prototype.push.apply(d, f), b += f.length, c.push(b) } if (0 === d.length) return [0, 0]; for (var g = [], h = 1 + Math.floor(Math.log(b) / Math.log(2)) / 8 | 0, i = [void 0, De.BYTE, De.USHORT, De.UINT24, De.ULONG][h], j = 0; j < c.length; j += 1) { var k = i(c[j]);
                            Array.prototype.push.apply(g, k) } return Array.prototype.concat(De.Card16(a.length), De.OffSize(h), g, d) }, Ee.INDEX = function(a) { return De.INDEX(a).length }, De.DICT = function(a) { for (var b = [], c = Object.keys(a), d = c.length, e = 0; e < d; e += 1) { var f = parseInt(c[e], 0),
                                g = a[f];
                            b = b.concat(De.OPERAND(g.value, g.type)), b = b.concat(De.OPERATOR(f)) } return b }, Ee.DICT = function(a) { return De.DICT(a).length }, De.OPERATOR = function(a) { return a < 1200 ? [a] : [12, a - 1200] }, De.OPERAND = function(a, b) { var c = []; if (Array.isArray(b))
                            for (var d = 0; d < b.length; d += 1) ze.argument(a.length === b.length, "Not enough arguments given for type" + b), c = c.concat(De.OPERAND(a[d], b[d]));
                        else if ("SID" === b) c = c.concat(De.NUMBER(a));
                        else if ("offset" === b) c = c.concat(De.NUMBER32(a));
                        else if ("number" === b) c = c.concat(De.NUMBER(a));
                        else { if ("real" !== b) throw new Error("Unknown operand type " + b);
                            c = c.concat(De.REAL(a)) } return c }, De.OP = De.BYTE, Ee.OP = Ee.BYTE;
                    var Je = "function" == typeof WeakMap && new WeakMap;
                    De.CHARSTRING = function(a) { if (Je) { var b = Je.get(a); if (void 0 !== b) return b } for (var c = [], d = a.length, e = 0; e < d; e += 1) { var f = a[e];
                            c = c.concat(De[f.type](f.value)) } return Je && Je.set(a, c), c }, Ee.CHARSTRING = function(a) { return De.CHARSTRING(a).length }, De.OBJECT = function(a) { var b = De[a.type]; return ze.argument(void 0 !== b, "No encoding function for type " + a.type), b(a.value) }, Ee.OBJECT = function(a) { var b = Ee[a.type]; return ze.argument(void 0 !== b, "No sizeOf function for type " + a.type), b(a.value) }, De.TABLE = function(a) { for (var b = [], c = a.fields.length, d = [], e = [], f = 0; f < c; f += 1) { var g = a.fields[f],
                                h = De[g.type];
                            ze.argument(void 0 !== h, "No encoding function for field type " + g.type + " (" + g.name + ")"); var i = a[g.name];
                            void 0 === i && (i = g.value); var j = h(i); "TABLE" === g.type ? (e.push(b.length), b = b.concat([0, 0]), d.push(j)) : b = b.concat(j) } for (var k = 0; k < d.length; k += 1) { var l = e[k],
                                m = b.length;
                            ze.argument(m < 65536, "Table " + a.tableName + " too big."), b[l] = m >> 8, b[l + 1] = 255 & m, b = b.concat(d[k]) } return b }, Ee.TABLE = function(a) { for (var b = 0, c = a.fields.length, d = 0; d < c; d += 1) { var e = a.fields[d],
                                f = Ee[e.type];
                            ze.argument(void 0 !== f, "No sizeOf function for field type " + e.type + " (" + e.name + ")"); var g = a[e.name];
                            void 0 === g && (g = e.value), b += f(g), "TABLE" === e.type && (b += 2) } return b }, De.RECORD = De.TABLE, Ee.RECORD = Ee.TABLE, De.LITERAL = function(a) { return a }, Ee.LITERAL = function(a) { return a.length }, z.prototype.encode = function() { return De.TABLE(this) }, z.prototype.sizeOf = function() { return Ee.TABLE(this) }, D.prototype = Object.create(z.prototype), D.prototype.constructor = D, E.prototype = Object.create(z.prototype), E.prototype.constructor = E, F.prototype = Object.create(z.prototype), F.prototype.constructor = F, G.prototype = Object.create(z.prototype), G.prototype.constructor = G;
                    var Ke = { Table: z, Record: z, Coverage: D, ScriptList: E, FeatureList: F, LookupList: G, ushortList: A, tableList: B, recordList: C },
                        Le = { byte: 1, uShort: 2, short: 2, uLong: 4, fixed: 4, longDateTime: 8, tag: 4 };
                    Q.prototype.parseByte = function() { var a = this.data.getUint8(this.offset + this.relativeOffset); return this.relativeOffset += 1, a }, Q.prototype.parseChar = function() { var a = this.data.getInt8(this.offset + this.relativeOffset); return this.relativeOffset += 1, a }, Q.prototype.parseCard8 = Q.prototype.parseByte, Q.prototype.parseUShort = function() { var a = this.data.getUint16(this.offset + this.relativeOffset); return this.relativeOffset += 2, a }, Q.prototype.parseCard16 = Q.prototype.parseUShort, Q.prototype.parseSID = Q.prototype.parseUShort, Q.prototype.parseOffset16 = Q.prototype.parseUShort, Q.prototype.parseShort = function() { var a = this.data.getInt16(this.offset + this.relativeOffset); return this.relativeOffset += 2, a }, Q.prototype.parseF2Dot14 = function() { var a = this.data.getInt16(this.offset + this.relativeOffset) / 16384; return this.relativeOffset += 2, a }, Q.prototype.parseULong = function() { var a = K(this.data, this.offset + this.relativeOffset); return this.relativeOffset += 4, a }, Q.prototype.parseFixed = function() { var a = L(this.data, this.offset + this.relativeOffset); return this.relativeOffset += 4, a }, Q.prototype.parseString = function(a) { var b = this.data,
                            c = this.offset + this.relativeOffset,
                            d = "";
                        this.relativeOffset += a; for (var e = 0; e < a; e++) d += String.fromCharCode(b.getUint8(c + e)); return d }, Q.prototype.parseTag = function() { return this.parseString(4) }, Q.prototype.parseLongDateTime = function() { var a = K(this.data, this.offset + this.relativeOffset + 4); return a -= 2082844800, this.relativeOffset += 8, a }, Q.prototype.parseVersion = function() { var a = I(this.data, this.offset + this.relativeOffset),
                            b = I(this.data, this.offset + this.relativeOffset + 2); return this.relativeOffset += 4, a + b / 4096 / 10 }, Q.prototype.skip = function(a, b) { void 0 === b && (b = 1), this.relativeOffset += Le[a] * b }, Q.prototype.parseOffset16List = Q.prototype.parseUShortList = function(a) { void 0 === a && (a = this.parseUShort()); for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) b[e] = c.getUint16(d), d += 2; return this.relativeOffset += 2 * a, b }, Q.prototype.parseShortList = function(a) { for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) b[e] = c.getInt16(d), d += 2; return this.relativeOffset += 2 * a, b }, Q.prototype.parseByteList = function(a) { for (var b = new Array(a), c = this.data, d = this.offset + this.relativeOffset, e = 0; e < a; e++) b[e] = c.getUint8(d++); return this.relativeOffset += a, b }, Q.prototype.parseList = function(a, b) { var c = this;
                        b || (b = a, a = this.parseUShort()); for (var d = new Array(a), e = 0; e < a; e++) d[e] = b.call(c); return d }, Q.prototype.parseRecordList = function(a, b) { var c = this;
                        b || (b = a, a = this.parseUShort()); for (var d = new Array(a), e = Object.keys(b), f = 0; f < a; f++) { for (var g = {}, h = 0; h < e.length; h++) { var i = e[h],
                                    j = b[i];
                                g[i] = j.call(c) }
                            d[f] = g } return d }, Q.prototype.parseStruct = function(a) { var b = this; if ("function" == typeof a) return a.call(this); for (var c = Object.keys(a), d = {}, e = 0; e < c.length; e++) { var f = c[e],
                                g = a[f];
                            d[f] = g.call(b) } return d }, Q.prototype.parsePointer = function(a) { var b = this.parseOffset16(); if (b > 0) return new Q(this.data, this.offset + b).parseStruct(a) }, Q.prototype.parseListOfLists = function(a) { for (var b = this, c = this.parseOffset16List(), d = c.length, e = this.relativeOffset, f = new Array(d), g = 0; g < d; g++) { var h = c[g]; if (0 !== h)
                                if (b.relativeOffset = h, a) { for (var i = b.parseOffset16List(), j = new Array(i.length), k = 0; k < i.length; k++) b.relativeOffset = h + i[k], j[k] = a.call(b);
                                    f[g] = j } else f[g] = b.parseUShortList();
                            else f[g] = void 0 } return this.relativeOffset = e, f }, Q.prototype.parseCoverage = function() { var a = this,
                            b = this.offset + this.relativeOffset,
                            c = this.parseUShort(),
                            d = this.parseUShort(); if (1 === c) return { format: 1, glyphs: this.parseUShortList(d) }; if (2 === c) { for (var e = new Array(d), f = 0; f < d; f++) e[f] = { start: a.parseUShort(), end: a.parseUShort(), index: a.parseUShort() }; return { format: 2, ranges: e } } throw new Error("0x" + b.toString(16) + ": Coverage format must be 1 or 2.") }, Q.prototype.parseClassDef = function() { var a = this.offset + this.relativeOffset,
                            b = this.parseUShort(); if (1 === b) return { format: 1, startGlyph: this.parseUShort(), classes: this.parseUShortList() }; if (2 === b) return { format: 2, ranges: this.parseRecordList({ start: Q.uShort, end: Q.uShort, classId: Q.uShort }) }; throw new Error("0x" + a.toString(16) + ": ClassDef format must be 1 or 2.") }, Q.list = function(a, b) { return function() { return this.parseList(a, b) } }, Q.recordList = function(a, b) { return function() { return this.parseRecordList(a, b) } }, Q.pointer = function(a) { return function() { return this.parsePointer(a) } }, Q.tag = Q.prototype.parseTag, Q.byte = Q.prototype.parseByte, Q.uShort = Q.offset16 = Q.prototype.parseUShort, Q.uShortList = Q.prototype.parseUShortList, Q.struct = Q.prototype.parseStruct, Q.coverage = Q.prototype.parseCoverage, Q.classDef = Q.prototype.parseClassDef;
                    var Me = { reserved: Q.uShort, reqFeatureIndex: Q.uShort, featureIndexes: Q.uShortList };
                    Q.prototype.parseScriptList = function() { return this.parsePointer(Q.recordList({ tag: Q.tag, script: Q.pointer({ defaultLangSys: Q.pointer(Me), langSysRecords: Q.recordList({ tag: Q.tag, langSys: Q.pointer(Me) }) }) })) }, Q.prototype.parseFeatureList = function() { return this.parsePointer(Q.recordList({ tag: Q.tag, feature: Q.pointer({ featureParams: Q.offset16, lookupListIndexes: Q.uShortList }) })) }, Q.prototype.parseLookupList = function(a) { return this.parsePointer(Q.list(Q.pointer(function() { var b = this.parseUShort();
                            ze.argument(1 <= b && b <= 8, "GSUB lookup type " + b + " unknown."); var c = this.parseUShort(),
                                d = 16 & c; return { lookupType: b, lookupFlag: c, subtables: this.parseList(Q.pointer(a[b])), markFilteringSet: d ? this.parseUShort() : void 0 } }))) };
                    var Ne = { getByte: H, getCard8: H, getUShort: I, getCard16: I, getShort: J, getULong: K, getFixed: L, getTag: M, getOffset: N, getBytes: O, bytesToString: P, Parser: Q },
                        Oe = {
                            parse: T,
                            make: W
                        },
                        Pe = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
                        Qe = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
                        Re = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
                        Se = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];
                    X.prototype.charToGlyphIndex = function(a) { var b = a.charCodeAt(0),
                            c = this.font.glyphs; if (c)
                            for (var d = 0; d < c.length; d += 1)
                                for (var e = c.get(d), f = 0; f < e.unicodes.length; f += 1)
                                    if (e.unicodes[f] === b) return d;
                        return null }, Y.prototype.charToGlyphIndex = function(a) { return this.cmap.glyphIndexMap[a.charCodeAt(0)] || 0 }, Z.prototype.charToGlyphIndex = function(a) { var b = a.charCodeAt(0),
                            c = this.encoding[b]; return this.charset.indexOf(c) }, $.prototype.nameToGlyphIndex = function(a) { return this.names.indexOf(a) }, $.prototype.glyphIndexToName = function(a) { return this.names[a] };
                    var Te = { line: aa },
                        Ue = { getPath: fa, parse: ha };
                    ja.prototype.bindConstructorValues = function(a) { this.index = a.index || 0, this.name = a.name || null, this.unicode = a.unicode || void 0, this.unicodes = a.unicodes || void 0 !== a.unicode ? [a.unicode] : [], a.xMin && (this.xMin = a.xMin), a.yMin && (this.yMin = a.yMin), a.xMax && (this.xMax = a.xMax), a.yMax && (this.yMax = a.yMax), a.advanceWidth && (this.advanceWidth = a.advanceWidth), Object.defineProperty(this, "path", ia(this, a.path)) }, ja.prototype.addUnicode = function(a) { 0 === this.unicodes.length && (this.unicode = a), this.unicodes.push(a) }, ja.prototype.getBoundingBox = function() { return this.path.getBoundingBox() }, ja.prototype.getPath = function(a, b, c, d, e) { a = void 0 !== a ? a : 0, b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 72; var f, g;
                        d || (d = {}); var h = d.xScale,
                            i = d.yScale; if (d.hinting && e && e.hinting && (g = this.path && e.hinting.exec(this, c)), g) f = Ue.getPath(g).commands, a = Math.round(a), b = Math.round(b), h = i = 1;
                        else { f = this.path.commands; var j = 1 / this.path.unitsPerEm * c;
                            void 0 === h && (h = j), void 0 === i && (i = j) } for (var k = new r, l = 0; l < f.length; l += 1) { var m = f[l]; "M" === m.type ? k.moveTo(a + m.x * h, b + -m.y * i) : "L" === m.type ? k.lineTo(a + m.x * h, b + -m.y * i) : "Q" === m.type ? k.quadraticCurveTo(a + m.x1 * h, b + -m.y1 * i, a + m.x * h, b + -m.y * i) : "C" === m.type ? k.curveTo(a + m.x1 * h, b + -m.y1 * i, a + m.x2 * h, b + -m.y2 * i, a + m.x * h, b + -m.y * i) : "Z" === m.type && k.closePath() } return k }, ja.prototype.getContours = function() { var a = this; if (void 0 === this.points) return []; for (var b = [], c = [], d = 0; d < this.points.length; d += 1) { var e = a.points[d];
                            c.push(e), e.lastPointOfContour && (b.push(c), c = []) } return ze.argument(0 === c.length, "There are still points left in the current contour."), b }, ja.prototype.getMetrics = function() { for (var a = this.path.commands, b = [], c = [], d = 0; d < a.length; d += 1) { var e = a[d]; "Z" !== e.type && (b.push(e.x), c.push(e.y)), "Q" !== e.type && "C" !== e.type || (b.push(e.x1), c.push(e.y1)), "C" === e.type && (b.push(e.x2), c.push(e.y2)) } var f = { xMin: Math.min.apply(null, b), yMin: Math.min.apply(null, c), xMax: Math.max.apply(null, b), yMax: Math.max.apply(null, c), leftSideBearing: this.leftSideBearing }; return isFinite(f.xMin) || (f.xMin = 0), isFinite(f.xMax) || (f.xMax = this.advanceWidth), isFinite(f.yMin) || (f.yMin = 0), isFinite(f.yMax) || (f.yMax = 0), f.rightSideBearing = this.advanceWidth - f.leftSideBearing - (f.xMax - f.xMin), f }, ja.prototype.draw = function(a, b, c, d, e) { this.getPath(b, c, d, e).draw(a) }, ja.prototype.drawPoints = function(a, b, c, d) {
                        function e(b, c, d, e) { var f = 2 * Math.PI;
                            a.beginPath(); for (var g = 0; g < b.length; g += 1) a.moveTo(c + b[g].x * e, d + b[g].y * e), a.arc(c + b[g].x * e, d + b[g].y * e, 2, 0, f, !1);
                            a.closePath(), a.fill() }
                        b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24; for (var f = 1 / this.path.unitsPerEm * d, g = [], h = [], i = this.path, j = 0; j < i.commands.length; j += 1) { var k = i.commands[j];
                            void 0 !== k.x && g.push({ x: k.x, y: -k.y }), void 0 !== k.x1 && h.push({ x: k.x1, y: -k.y1 }), void 0 !== k.x2 && h.push({ x: k.x2, y: -k.y2 }) }
                        a.fillStyle = "blue", e(g, b, c, f), a.fillStyle = "red", e(h, b, c, f) }, ja.prototype.drawMetrics = function(a, b, c, d) { var e;
                        b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24, e = 1 / this.path.unitsPerEm * d, a.lineWidth = 1, a.strokeStyle = "black", Te.line(a, b, -1e4, b, 1e4), Te.line(a, -1e4, c, 1e4, c); var f = this.xMin || 0,
                            g = this.yMin || 0,
                            h = this.xMax || 0,
                            i = this.yMax || 0,
                            j = this.advanceWidth || 0;
                        a.strokeStyle = "blue", Te.line(a, b + f * e, -1e4, b + f * e, 1e4), Te.line(a, b + h * e, -1e4, b + h * e, 1e4), Te.line(a, -1e4, c + -g * e, 1e4, c + -g * e), Te.line(a, -1e4, c + -i * e, 1e4, c + -i * e), a.strokeStyle = "green", Te.line(a, b + j * e, -1e4, b + j * e, 1e4) }, la.prototype.get = function(a) { return "function" == typeof this.glyphs[a] && (this.glyphs[a] = this.glyphs[a]()), this.glyphs[a] }, la.prototype.push = function(a, b) { this.glyphs[a] = b, this.length++ };
                    var Ve = { GlyphSet: la, glyphLoader: ma, ttfGlyphLoader: na, cffGlyphLoader: oa },
                        We = [{ name: "version", op: 0, type: "SID" }, { name: "notice", op: 1, type: "SID" }, { name: "copyright", op: 1200, type: "SID" }, { name: "fullName", op: 2, type: "SID" }, { name: "familyName", op: 3, type: "SID" }, { name: "weight", op: 4, type: "SID" }, { name: "isFixedPitch", op: 1201, type: "number", value: 0 }, { name: "italicAngle", op: 1202, type: "number", value: 0 }, { name: "underlinePosition", op: 1203, type: "number", value: -100 }, { name: "underlineThickness", op: 1204, type: "number", value: 50 }, { name: "paintType", op: 1205, type: "number", value: 0 }, { name: "charstringType", op: 1206, type: "number", value: 2 }, { name: "fontMatrix", op: 1207, type: ["real", "real", "real", "real", "real", "real"], value: [.001, 0, 0, .001, 0, 0] }, { name: "uniqueId", op: 13, type: "number" }, { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] }, { name: "strokeWidth", op: 1208, type: "number", value: 0 }, { name: "xuid", op: 14, type: [], value: null }, { name: "charset", op: 15, type: "offset", value: 0 }, { name: "encoding", op: 16, type: "offset", value: 0 }, { name: "charStrings", op: 17, type: "offset", value: 0 }, { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }, { name: "ros", op: 1230, type: ["SID", "SID", "number"] }, { name: "cidFontVersion", op: 1231, type: "number", value: 0 }, { name: "cidFontRevision", op: 1232, type: "number", value: 0 }, { name: "cidFontType", op: 1233, type: "number", value: 0 }, { name: "cidCount", op: 1234, type: "number", value: 8720 }, { name: "uidBase", op: 1235, type: "number" }, { name: "fdArray", op: 1236, type: "offset" }, { name: "fdSelect", op: 1237, type: "offset" }, { name: "fontName", op: 1238, type: "SID" }],
                        Xe = [{ name: "subrs", op: 19, type: "offset", value: 0 }, { name: "defaultWidthX", op: 20, type: "number", value: 0 }, { name: "nominalWidthX", op: 21, type: "number", value: 0 }],
                        Ye = { parse: Ga, make: Ta },
                        Ze = { parse: Ua, make: Va },
                        $e = { parse: Wa, make: Xa },
                        _e = { parse: Ya, make: Za },
                        af = { make: $a, parse: _a },
                        bf = { parse: ab, make: bb },
                        cf = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
                        df = { 0: "en", 1: "fr", 2: "de", 3: "it", 4: "nl", 5: "sv", 6: "es", 7: "da", 8: "pt", 9: "no", 10: "he", 11: "ja", 12: "ar", 13: "fi", 14: "el", 15: "is", 16: "mt", 17: "tr", 18: "hr", 19: "zh-Hant", 20: "ur", 21: "hi", 22: "th", 23: "ko", 24: "lt", 25: "pl", 26: "hu", 27: "es", 28: "lv", 29: "se", 30: "fo", 31: "fa", 32: "ru", 33: "zh", 34: "nl-BE", 35: "ga", 36: "sq", 37: "ro", 38: "cz", 39: "sk", 40: "si", 41: "yi", 42: "sr", 43: "mk", 44: "bg", 45: "uk", 46: "be", 47: "uz", 48: "kk", 49: "az-Cyrl", 50: "az-Arab", 51: "hy", 52: "ka", 53: "mo", 54: "ky", 55: "tg", 56: "tk", 57: "mn-CN", 58: "mn", 59: "ps", 60: "ks", 61: "ku", 62: "sd", 63: "bo", 64: "ne", 65: "sa", 66: "mr", 67: "bn", 68: "as", 69: "gu", 70: "pa", 71: "or", 72: "ml", 73: "kn", 74: "ta", 75: "te", 76: "si", 77: "my", 78: "km", 79: "lo", 80: "vi", 81: "id", 82: "tl", 83: "ms", 84: "ms-Arab", 85: "am", 86: "ti", 87: "om", 88: "so", 89: "sw", 90: "rw", 91: "rn", 92: "ny", 93: "mg", 94: "eo", 128: "cy", 129: "eu", 130: "ca", 131: "la", 132: "qu", 133: "gn", 134: "ay", 135: "tt", 136: "ug", 137: "dz", 138: "jv", 139: "su", 140: "gl", 141: "af", 142: "br", 143: "iu", 144: "gd", 145: "gv", 146: "ga", 147: "to", 148: "el-polyton", 149: "kl", 150: "az", 151: "nn" },
                        ef = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 5, 11: 1, 12: 4, 13: 0, 14: 6, 15: 0, 16: 0, 17: 0, 18: 0, 19: 2, 20: 4, 21: 9, 22: 21, 23: 3, 24: 29, 25: 29, 26: 29, 27: 29, 28: 29, 29: 0, 30: 0, 31: 4, 32: 7, 33: 25, 34: 0, 35: 0, 36: 0, 37: 0, 38: 29, 39: 29, 40: 0, 41: 5, 42: 7, 43: 7, 44: 7, 45: 7, 46: 7, 47: 7, 48: 7, 49: 7, 50: 4, 51: 24, 52: 23, 53: 7, 54: 7, 55: 7, 56: 7, 57: 27, 58: 7, 59: 4, 60: 4, 61: 4, 62: 4, 63: 26, 64: 9, 65: 9, 66: 9, 67: 13, 68: 13, 69: 11, 70: 10, 71: 12, 72: 17, 73: 16, 74: 14, 75: 15, 76: 18, 77: 19, 78: 20, 79: 22, 80: 30, 81: 0, 82: 0, 83: 0, 84: 4, 85: 28, 86: 28, 87: 28, 88: 0, 89: 0, 90: 0, 91: 0, 92: 0, 93: 0, 94: 0, 128: 0, 129: 0, 130: 0, 131: 0, 132: 0, 133: 0, 134: 0, 135: 7, 136: 4, 137: 26, 138: 0, 139: 0, 140: 0, 141: 0, 142: 0, 143: 28, 144: 0, 145: 0, 146: 0, 147: 0, 148: 6, 149: 0, 150: 0, 151: 0 },
                        ff = { 1078: "af", 1052: "sq", 1156: "gsw", 1118: "am", 5121: "ar-DZ", 15361: "ar-BH", 3073: "ar", 2049: "ar-IQ", 11265: "ar-JO", 13313: "ar-KW", 12289: "ar-LB", 4097: "ar-LY", 6145: "ary", 8193: "ar-OM", 16385: "ar-QA", 1025: "ar-SA", 10241: "ar-SY", 7169: "aeb", 14337: "ar-AE", 9217: "ar-YE", 1067: "hy", 1101: "as", 2092: "az-Cyrl", 1068: "az", 1133: "ba", 1069: "eu", 1059: "be", 2117: "bn", 1093: "bn-IN", 8218: "bs-Cyrl", 5146: "bs", 1150: "br", 1026: "bg", 1027: "ca", 3076: "zh-HK", 5124: "zh-MO", 2052: "zh", 4100: "zh-SG", 1028: "zh-TW", 1155: "co", 1050: "hr", 4122: "hr-BA", 1029: "cs", 1030: "da", 1164: "prs", 1125: "dv", 2067: "nl-BE", 1043: "nl", 3081: "en-AU", 10249: "en-BZ", 4105: "en-CA", 9225: "en-029", 16393: "en-IN", 6153: "en-IE", 8201: "en-JM", 17417: "en-MY", 5129: "en-NZ", 13321: "en-PH", 18441: "en-SG", 7177: "en-ZA", 11273: "en-TT", 2057: "en-GB", 1033: "en", 12297: "en-ZW", 1061: "et", 1080: "fo", 1124: "fil", 1035: "fi", 2060: "fr-BE", 3084: "fr-CA", 1036: "fr", 5132: "fr-LU", 6156: "fr-MC", 4108: "fr-CH", 1122: "fy", 1110: "gl", 1079: "ka", 3079: "de-AT", 1031: "de", 5127: "de-LI", 4103: "de-LU", 2055: "de-CH", 1032: "el", 1135: "kl", 1095: "gu", 1128: "ha", 1037: "he", 1081: "hi", 1038: "hu", 1039: "is", 1136: "ig", 1057: "id", 1117: "iu", 2141: "iu-Latn", 2108: "ga", 1076: "xh", 1077: "zu", 1040: "it", 2064: "it-CH", 1041: "ja", 1099: "kn", 1087: "kk", 1107: "km", 1158: "quc", 1159: "rw", 1089: "sw", 1111: "kok", 1042: "ko", 1088: "ky", 1108: "lo", 1062: "lv", 1063: "lt", 2094: "dsb", 1134: "lb", 1071: "mk", 2110: "ms-BN", 1086: "ms", 1100: "ml", 1082: "mt", 1153: "mi", 1146: "arn", 1102: "mr", 1148: "moh", 1104: "mn", 2128: "mn-CN", 1121: "ne", 1044: "nb", 2068: "nn", 1154: "oc", 1096: "or", 1123: "ps", 1045: "pl", 1046: "pt", 2070: "pt-PT", 1094: "pa", 1131: "qu-BO", 2155: "qu-EC", 3179: "qu", 1048: "ro", 1047: "rm", 1049: "ru", 9275: "smn", 4155: "smj-NO", 5179: "smj", 3131: "se-FI", 1083: "se", 2107: "se-SE", 8251: "sms", 6203: "sma-NO", 7227: "sms", 1103: "sa", 7194: "sr-Cyrl-BA", 3098: "sr", 6170: "sr-Latn-BA", 2074: "sr-Latn", 1132: "nso", 1074: "tn", 1115: "si", 1051: "sk", 1060: "sl", 11274: "es-AR", 16394: "es-BO", 13322: "es-CL", 9226: "es-CO", 5130: "es-CR", 7178: "es-DO", 12298: "es-EC", 17418: "es-SV", 4106: "es-GT", 18442: "es-HN", 2058: "es-MX", 19466: "es-NI", 6154: "es-PA", 15370: "es-PY", 10250: "es-PE", 20490: "es-PR", 3082: "es", 1034: "es", 21514: "es-US", 14346: "es-UY", 8202: "es-VE", 2077: "sv-FI", 1053: "sv", 1114: "syr", 1064: "tg", 2143: "tzm", 1097: "ta", 1092: "tt", 1098: "te", 1054: "th", 1105: "bo", 1055: "tr", 1090: "tk", 1152: "ug", 1058: "uk", 1070: "hsb", 1056: "ur", 2115: "uz-Cyrl", 1091: "uz", 1066: "vi", 1106: "cy", 1160: "wo", 1157: "sah", 1144: "ii", 1130: "yo" },
                        gf = "utf-16",
                        hf = { 0: "macintosh", 1: "x-mac-japanese", 2: "x-mac-chinesetrad", 3: "x-mac-korean", 6: "x-mac-greek", 7: "x-mac-cyrillic", 9: "x-mac-devanagai", 10: "x-mac-gurmukhi", 11: "x-mac-gujarati", 12: "x-mac-oriya", 13: "x-mac-bengali", 14: "x-mac-tamil", 15: "x-mac-telugu", 16: "x-mac-kannada", 17: "x-mac-malayalam", 18: "x-mac-sinhalese", 19: "x-mac-burmese", 20: "x-mac-khmer", 21: "x-mac-thai", 22: "x-mac-lao", 23: "x-mac-georgian", 24: "x-mac-armenian", 25: "x-mac-chinesesimp", 26: "x-mac-tibetan", 27: "x-mac-mongolian", 28: "x-mac-ethiopic", 29: "x-mac-ce", 30: "x-mac-vietnamese", 31: "x-mac-extarabic" },
                        jf = { 15: "x-mac-icelandic", 17: "x-mac-turkish", 18: "x-mac-croatian", 24: "x-mac-ce", 25: "x-mac-ce", 26: "x-mac-ce", 27: "x-mac-ce", 28: "x-mac-ce", 30: "x-mac-icelandic", 37: "x-mac-romanian", 38: "x-mac-ce", 39: "x-mac-ce", 40: "x-mac-ce", 143: "x-mac-inuit", 146: "x-mac-gaelic" },
                        kf = { parse: eb, make: jb },
                        lf = [{ begin: 0, end: 127 }, { begin: 128, end: 255 }, { begin: 256, end: 383 }, { begin: 384, end: 591 }, { begin: 592, end: 687 }, { begin: 688, end: 767 }, { begin: 768, end: 879 }, { begin: 880, end: 1023 }, { begin: 11392, end: 11519 }, { begin: 1024, end: 1279 }, { begin: 1328, end: 1423 }, { begin: 1424, end: 1535 }, { begin: 42240, end: 42559 }, { begin: 1536, end: 1791 }, { begin: 1984, end: 2047 }, { begin: 2304, end: 2431 }, { begin: 2432, end: 2559 }, { begin: 2560, end: 2687 }, { begin: 2688, end: 2815 }, { begin: 2816, end: 2943 }, { begin: 2944, end: 3071 }, { begin: 3072, end: 3199 }, { begin: 3200, end: 3327 }, { begin: 3328, end: 3455 }, { begin: 3584, end: 3711 }, { begin: 3712, end: 3839 }, { begin: 4256, end: 4351 }, { begin: 6912, end: 7039 }, { begin: 4352, end: 4607 }, { begin: 7680, end: 7935 }, { begin: 7936, end: 8191 }, { begin: 8192, end: 8303 }, { begin: 8304, end: 8351 }, { begin: 8352, end: 8399 }, { begin: 8400, end: 8447 }, { begin: 8448, end: 8527 }, { begin: 8528, end: 8591 }, { begin: 8592, end: 8703 }, { begin: 8704, end: 8959 }, { begin: 8960, end: 9215 }, { begin: 9216, end: 9279 }, { begin: 9280, end: 9311 }, { begin: 9312, end: 9471 }, { begin: 9472, end: 9599 }, { begin: 9600, end: 9631 }, { begin: 9632, end: 9727 }, { begin: 9728, end: 9983 }, { begin: 9984, end: 10175 }, { begin: 12288, end: 12351 }, { begin: 12352, end: 12447 }, { begin: 12448, end: 12543 }, { begin: 12544, end: 12591 }, { begin: 12592, end: 12687 }, { begin: 43072, end: 43135 }, { begin: 12800, end: 13055 }, { begin: 13056, end: 13311 }, { begin: 44032, end: 55215 }, { begin: 55296, end: 57343 }, { begin: 67840, end: 67871 }, { begin: 19968, end: 40959 }, { begin: 57344, end: 63743 }, { begin: 12736, end: 12783 }, { begin: 64256, end: 64335 }, { begin: 64336, end: 65023 }, { begin: 65056, end: 65071 }, { begin: 65040, end: 65055 }, { begin: 65104, end: 65135 }, { begin: 65136, end: 65279 }, { begin: 65280, end: 65519 }, { begin: 65520, end: 65535 }, { begin: 3840, end: 4095 }, { begin: 1792, end: 1871 }, { begin: 1920, end: 1983 }, { begin: 3456, end: 3583 }, { begin: 4096, end: 4255 }, { begin: 4608, end: 4991 }, { begin: 5024, end: 5119 }, { begin: 5120, end: 5759 }, { begin: 5760, end: 5791 }, { begin: 5792, end: 5887 }, { begin: 6016, end: 6143 }, { begin: 6144, end: 6319 }, { begin: 10240, end: 10495 }, { begin: 40960, end: 42127 }, { begin: 5888, end: 5919 }, { begin: 66304, end: 66351 }, { begin: 66352, end: 66383 }, { begin: 66560, end: 66639 }, { begin: 118784, end: 119039 }, { begin: 119808, end: 120831 }, { begin: 1044480, end: 1048573 }, { begin: 65024, end: 65039 }, { begin: 917504, end: 917631 }, { begin: 6400, end: 6479 }, { begin: 6480, end: 6527 }, { begin: 6528, end: 6623 }, { begin: 6656, end: 6687 }, { begin: 11264, end: 11359 }, { begin: 11568, end: 11647 }, { begin: 19904, end: 19967 }, { begin: 43008, end: 43055 }, { begin: 65536, end: 65663 }, { begin: 65856, end: 65935 }, { begin: 66432, end: 66463 }, { begin: 66464, end: 66527 }, { begin: 66640, end: 66687 }, { begin: 66688, end: 66735 }, { begin: 67584, end: 67647 }, { begin: 68096, end: 68191 }, { begin: 119552, end: 119647 }, { begin: 73728, end: 74751 }, { begin: 119648, end: 119679 }, { begin: 7040, end: 7103 }, { begin: 7168, end: 7247 }, { begin: 7248, end: 7295 }, { begin: 43136, end: 43231 }, { begin: 43264, end: 43311 }, { begin: 43312, end: 43359 }, { begin: 43520, end: 43615 }, { begin: 65936, end: 65999 }, { begin: 66e3, end: 66047 }, { begin: 66208, end: 66271 }, { begin: 127024, end: 127135 }],
                        mf = { parse: lb, make: mb, unicodeRanges: lf, getUnicodeRange: kb },
                        nf = { parse: nb, make: ob },
                        of = new Array(9);
                    of[1] = function() { var a = this.offset + this.relativeOffset,
                            b = this.parseUShort(); return 1 === b ? { substFormat: 1, coverage: this.parsePointer(Q.coverage), deltaGlyphId: this.parseUShort() } : 2 === b ? { substFormat: 2, coverage: this.parsePointer(Q.coverage), substitute: this.parseOffset16List() } : void ze.assert(!1, "0x" + a.toString(16) + ": lookup type 1 format must be 1 or 2.") }, of[2] = function() { var a = this.parseUShort(); return ze.argument(1 === a, "GSUB Multiple Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), sequences: this.parseListOfLists() } }, of[3] = function() { var a = this.parseUShort(); return ze.argument(1 === a, "GSUB Alternate Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), alternateSets: this.parseListOfLists() } }, of[4] = function() { var a = this.parseUShort(); return ze.argument(1 === a, "GSUB ligature table identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), ligatureSets: this.parseListOfLists(function() { return { ligGlyph: this.parseUShort(), components: this.parseUShortList(this.parseUShort() - 1) } }) } };
                    var pf = { sequenceIndex: Q.uShort, lookupListIndex: Q.uShort };
                    of[5] = function() { var a = this.offset + this.relativeOffset,
                            b = this.parseUShort(); if (1 === b) return { substFormat: b, coverage: this.parsePointer(Q.coverage), ruleSets: this.parseListOfLists(function() { var a = this.parseUShort(),
                                    b = this.parseUShort(); return { input: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(b, pf) } }) }; if (2 === b) return { substFormat: b, coverage: this.parsePointer(Q.coverage), classDef: this.parsePointer(Q.classDef), classSets: this.parseListOfLists(function() { var a = this.parseUShort(),
                                    b = this.parseUShort(); return { classes: this.parseUShortList(a - 1), lookupRecords: this.parseRecordList(b, pf) } }) }; if (3 === b) { var c = this.parseUShort(),
                                d = this.parseUShort(); return { substFormat: b, coverages: this.parseList(c, Q.pointer(Q.coverage)), lookupRecords: this.parseRecordList(d, pf) } }
                        ze.assert(!1, "0x" + a.toString(16) + ": lookup type 5 format must be 1, 2 or 3.") }, of[6] = function() { var a = this.offset + this.relativeOffset,
                            b = this.parseUShort(); return 1 === b ? { substFormat: 1, coverage: this.parsePointer(Q.coverage), chainRuleSets: this.parseListOfLists(function() { return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(pf) } }) } : 2 === b ? { substFormat: 2, coverage: this.parsePointer(Q.coverage), backtrackClassDef: this.parsePointer(Q.classDef), inputClassDef: this.parsePointer(Q.classDef), lookaheadClassDef: this.parsePointer(Q.classDef), chainClassSet: this.parseListOfLists(function() { return { backtrack: this.parseUShortList(), input: this.parseUShortList(this.parseShort() - 1), lookahead: this.parseUShortList(), lookupRecords: this.parseRecordList(pf) } }) } : 3 === b ? { substFormat: 3, backtrackCoverage: this.parseList(Q.pointer(Q.coverage)), inputCoverage: this.parseList(Q.pointer(Q.coverage)), lookaheadCoverage: this.parseList(Q.pointer(Q.coverage)), lookupRecords: this.parseRecordList(pf) } : void ze.assert(!1, "0x" + a.toString(16) + ": lookup type 6 format must be 1, 2 or 3.") }, of[7] = function() { var a = this.parseUShort();
                        ze.argument(1 === a, "GSUB Extension Substitution subtable identifier-format must be 1"); var b = this.parseUShort(),
                            c = new Q(this.data, this.offset + this.parseULong()); return { substFormat: 1, lookupType: b, extension: of[b].call(c) } }, of[8] = function() { var a = this.parseUShort(); return ze.argument(1 === a, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), { substFormat: a, coverage: this.parsePointer(Q.coverage), backtrackCoverage: this.parseList(Q.pointer(Q.coverage)), lookaheadCoverage: this.parseList(Q.pointer(Q.coverage)), substitutes: this.parseUShortList() } };
                    var qf = new Array(9);
                    qf[1] = function(a) { return 1 === a.substFormat ? new Ke.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ke.Coverage(a.coverage) }, { name: "deltaGlyphID", type: "USHORT", value: a.deltaGlyphId }]) : new Ke.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 2 }, { name: "coverage", type: "TABLE", value: new Ke.Coverage(a.coverage) }].concat(Ke.ushortList("substitute", a.substitute))) }, qf[3] = function(a) { return ze.assert(1 === a.substFormat, "Lookup type 3 substFormat must be 1."), new Ke.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ke.Coverage(a.coverage) }].concat(Ke.tableList("altSet", a.alternateSets, function(a) { return new Ke.Table("alternateSetTable", Ke.ushortList("alternate", a)) }))) }, qf[4] = function(a) { return ze.assert(1 === a.substFormat, "Lookup type 4 substFormat must be 1."), new Ke.Table("substitutionTable", [{ name: "substFormat", type: "USHORT", value: 1 }, { name: "coverage", type: "TABLE", value: new Ke.Coverage(a.coverage) }].concat(Ke.tableList("ligSet", a.ligatureSets, function(a) { return new Ke.Table("ligatureSetTable", Ke.tableList("ligature", a, function(a) { return new Ke.Table("ligatureTable", [{ name: "ligGlyph", type: "USHORT", value: a.ligGlyph }].concat(Ke.ushortList("component", a.components, a.components.length + 1))) })) }))) };
                    var rf = { parse: pb, make: qb },
                        sf = { parse: rb, make: sb },
                        tf = { make: wb, fontToTable: zb, computeCheckSum: ub };
                    Cb.prototype = { searchTag: Ab, binSearch: Bb, getTable: function(a) { var b = this.font.tables[this.tableName]; return !b && a && (b = this.font.tables[this.tableName] = this.createDefaultTable()), b }, getScriptNames: function() { var a = this.getTable(); return a ? a.scripts.map(function(a) { return a.tag }) : [] }, getDefaultScriptName: function() { var a = this.getTable(); if (a) { for (var b = !1, c = 0; c < a.scripts.length; c++) { var d = a.scripts[c].tag; if ("DFLT" === d) return d; "latn" === d && (b = !0) } return b ? "latn" : void 0 } }, getScriptTable: function(a, b) { var c = this.getTable(b); if (c) { a = a || "DFLT"; var d = c.scripts,
                                    e = Ab(c.scripts, a); if (e >= 0) return d[e].script; if (b) { var f = { tag: a, script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }; return d.splice(-1 - e, 0, f), f.script } } }, getLangSysTable: function(a, b, c) { var d = this.getScriptTable(a, c); if (d) { if (!b || "dflt" === b || "DFLT" === b) return d.defaultLangSys; var e = Ab(d.langSysRecords, b); if (e >= 0) return d.langSysRecords[e].langSys; if (c) { var f = { tag: b, langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] } }; return d.langSysRecords.splice(-1 - e, 0, f), f.langSys } } }, getFeatureTable: function(a, b, c, d) { var e = this.getLangSysTable(a, b, d); if (e) { for (var f, g = e.featureIndexes, h = this.font.tables[this.tableName].features, i = 0; i < g.length; i++)
                                    if (f = h[g[i]], f.tag === c) return f.feature;
                                if (d) { var j = h.length; return ze.assert(0 === j || c >= h[j - 1].tag, "Features must be added in alphabetical order."), f = { tag: c, feature: { params: 0, lookupListIndexes: [] } }, h.push(f), g.push(j), f.feature } } }, getLookupTables: function(a, b, c, d, e) { var f = this.getFeatureTable(a, b, c, e),
                                g = []; if (f) { for (var h, i = f.lookupListIndexes, j = this.font.tables[this.tableName].lookups, k = 0; k < i.length; k++) h = j[i[k]], h.lookupType === d && g.push(h); if (0 === g.length && e) { h = { lookupType: d, lookupFlag: 0, subtables: [], markFilteringSet: void 0 }; var l = j.length; return j.push(h), i.push(l), [h] } } return g }, expandCoverage: function(a) { if (1 === a.format) return a.glyphs; for (var b = [], c = a.ranges, d = 0; d < c.length; d++)
                                for (var e = c[d], f = e.start, g = e.end, h = f; h <= g; h++) b.push(h); return b } }, Db.prototype = Cb.prototype, Db.prototype.createDefaultTable = function() {
                        return {
                            version: 1,
                            scripts: [{ tag: "DFLT", script: { defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }, langSysRecords: [] } }],
                            features: [],
                            lookups: []
                        }
                    }, Db.prototype.getSingle = function(a, b, c) { for (var d = this, e = [], f = this.getLookupTables(b, c, a, 1), g = 0; g < f.length; g++)
                            for (var h = f[g].subtables, i = 0; i < h.length; i++) { var j = h[i],
                                    k = d.expandCoverage(j.coverage),
                                    l = void 0; if (1 === j.substFormat) { var m = j.deltaGlyphId; for (l = 0; l < k.length; l++) { var n = k[l];
                                        e.push({ sub: n, by: n + m }) } } else { var o = j.substitute; for (l = 0; l < k.length; l++) e.push({ sub: k[l], by: o[l] }) } }
                        return e }, Db.prototype.getAlternates = function(a, b, c) { for (var d = this, e = [], f = this.getLookupTables(b, c, a, 3), g = 0; g < f.length; g++)
                            for (var h = f[g].subtables, i = 0; i < h.length; i++)
                                for (var j = h[i], k = d.expandCoverage(j.coverage), l = j.alternateSets, m = 0; m < k.length; m++) e.push({ sub: k[m], by: l[m] }); return e }, Db.prototype.getLigatures = function(a, b, c) { for (var d = this, e = [], f = this.getLookupTables(b, c, a, 4), g = 0; g < f.length; g++)
                            for (var h = f[g].subtables, i = 0; i < h.length; i++)
                                for (var j = h[i], k = d.expandCoverage(j.coverage), l = j.ligatureSets, m = 0; m < k.length; m++)
                                    for (var n = k[m], o = l[m], p = 0; p < o.length; p++) { var q = o[p];
                                        e.push({ sub: [n].concat(q.components), by: q.ligGlyph }) }
                        return e }, Db.prototype.addSingle = function(a, b, c, d) { var e = this.getLookupTables(c, d, a, 1, !0)[0],
                            f = Fb(e, 2, { substFormat: 2, coverage: { format: 1, glyphs: [] }, substitute: [] });
                        ze.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format); var g = b.sub,
                            h = this.binSearch(f.coverage.glyphs, g);
                        h < 0 && (h = -1 - h, f.coverage.glyphs.splice(h, 0, g), f.substitute.splice(h, 0, 0)), f.substitute[h] = b.by }, Db.prototype.addAlternate = function(a, b, c, d) { var e = this.getLookupTables(c, d, a, 3, !0)[0],
                            f = Fb(e, 1, { substFormat: 1, coverage: { format: 1, glyphs: [] }, alternateSets: [] });
                        ze.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format); var g = b.sub,
                            h = this.binSearch(f.coverage.glyphs, g);
                        h < 0 && (h = -1 - h, f.coverage.glyphs.splice(h, 0, g), f.alternateSets.splice(h, 0, 0)), f.alternateSets[h] = b.by }, Db.prototype.addLigature = function(a, b, c, d) { var e = this.getLookupTables(c, d, a, 4, !0)[0],
                            f = e.subtables[0];
                        f || (f = { substFormat: 1, coverage: { format: 1, glyphs: [] }, ligatureSets: [] }, e.subtables[0] = f), ze.assert(1 === f.coverage.format, "Ligature: unable to modify coverage table format " + f.coverage.format); var g = b.sub[0],
                            h = b.sub.slice(1),
                            i = { ligGlyph: b.by, components: h },
                            j = this.binSearch(f.coverage.glyphs, g); if (j >= 0) { for (var k = f.ligatureSets[j], l = 0; l < k.length; l++)
                                if (Eb(k[l].components, h)) return;
                            k.push(i) } else j = -1 - j, f.coverage.glyphs.splice(j, 0, g), f.ligatureSets.splice(j, 0, [i]) }, Db.prototype.getFeature = function(a, b, c) { if (/ss\d\d/.test(a)) return this.getSingle(a, b, c); switch (a) {
                            case "aalt":
                            case "salt":
                                return this.getSingle(a, b, c).concat(this.getAlternates(a, b, c));
                            case "dlig":
                            case "liga":
                            case "rlig":
                                return this.getLigatures(a, b, c) } }, Db.prototype.add = function(a, b, c, d) { if (/ss\d\d/.test(a)) return this.addSingle(a, b, c, d); switch (a) {
                            case "aalt":
                            case "salt":
                                return "number" == typeof b.by ? this.addSingle(a, b, c, d) : this.addAlternate(a, b, c, d);
                            case "dlig":
                            case "liga":
                            case "rlig":
                                return this.addLigature(a, b, c, d) } };
                    var uf, vf, wf, xf, yf = function(a) { var b = this.srPeriod,
                                c = this.srPhase,
                                d = this.srThreshold,
                                e = 1; return a < 0 && (a = -a, e = -1), a += d - c, a = Math.trunc(a / b) * b, a += c, e > 0 && a < 0 ? c : e < 0 && a > 0 ? -c : a * e },
                        zf = { x: 1, y: 0, axis: "x", distance: function(a, b, c, d) { return (c ? a.xo : a.x) - (d ? b.xo : b.x) }, interpolate: function(a, b, c, d) { var e, f, g, h, i, j, k; return d && d !== this ? (e = d.distance(a, b, !0, !0), f = d.distance(a, c, !0, !0), i = d.distance(b, b, !1, !0), j = d.distance(c, c, !1, !0), g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void zf.setRelative(a, a, (i + j) / 2, d, !0) : void zf.setRelative(a, a, (i * h + j * g) / k, d, !0)) : (e = a.xo - b.xo, f = a.xo - c.xo, i = b.x - b.xo, j = c.x - c.xo, g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void(a.x = a.xo + (i + j) / 2) : void(a.x = a.xo + (i * h + j * g) / k)) }, normalSlope: Number.NEGATIVE_INFINITY, setRelative: function(a, b, c, d, e) { if (!d || d === this) return void(a.x = (e ? b.xo : b.x) + c); var f = e ? b.xo : b.x,
                                    g = e ? b.yo : b.y,
                                    h = f + c * d.x,
                                    i = g + c * d.y;
                                a.x = h + (a.y - i) / d.normalSlope }, slope: 0, touch: function(a) { a.xTouched = !0 }, touched: function(a) { return a.xTouched }, untouch: function(a) { a.xTouched = !1 } },
                        Af = { x: 0, y: 1, axis: "y", distance: function(a, b, c, d) { return (c ? a.yo : a.y) - (d ? b.yo : b.y) }, interpolate: function(a, b, c, d) { var e, f, g, h, i, j, k; return d && d !== this ? (e = d.distance(a, b, !0, !0), f = d.distance(a, c, !0, !0), i = d.distance(b, b, !1, !0), j = d.distance(c, c, !1, !0), g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void Af.setRelative(a, a, (i + j) / 2, d, !0) : void Af.setRelative(a, a, (i * h + j * g) / k, d, !0)) : (e = a.yo - b.yo, f = a.yo - c.yo, i = b.y - b.yo, j = c.y - c.yo, g = Math.abs(e), h = Math.abs(f), 0 === (k = g + h) ? void(a.y = a.yo + (i + j) / 2) : void(a.y = a.yo + (i * h + j * g) / k)) }, normalSlope: 0, setRelative: function(a, b, c, d, e) { if (!d || d === this) return void(a.y = (e ? b.yo : b.y) + c); var f = e ? b.xo : b.x,
                                    g = e ? b.yo : b.y,
                                    h = f + c * d.x,
                                    i = g + c * d.y;
                                a.y = i + d.normalSlope * (a.x - h) }, slope: Number.POSITIVE_INFINITY, touch: function(a) { a.yTouched = !0 }, touched: function(a) { return a.yTouched }, untouch: function(a) { a.yTouched = !1 } };
                    Object.freeze(zf), Object.freeze(Af), Rb.prototype.distance = function(a, b, c, d) { return this.x * zf.distance(a, b, c, d) + this.y * Af.distance(a, b, c, d) }, Rb.prototype.interpolate = function(a, b, c, d) { var e, f, g, h, i, j, k; if (g = d.distance(a, b, !0, !0), h = d.distance(a, c, !0, !0), e = d.distance(b, b, !1, !0), f = d.distance(c, c, !1, !0), i = Math.abs(g), j = Math.abs(h), 0 === (k = i + j)) return void this.setRelative(a, a, (e + f) / 2, d, !0);
                        this.setRelative(a, a, (e * j + f * i) / k, d, !0) }, Rb.prototype.setRelative = function(a, b, c, d, e) { d = d || this; var f = e ? b.xo : b.x,
                            g = e ? b.yo : b.y,
                            h = f + c * d.x,
                            i = g + c * d.y,
                            j = d.normalSlope,
                            k = this.slope,
                            l = a.x,
                            m = a.y;
                        a.x = (k * l - j * h + i - m) / (k - j), a.y = k * (a.x - l) + m }, Rb.prototype.touch = function(a) { a.xTouched = !0, a.yTouched = !0 }, Tb.prototype.nextTouched = function(a) { for (var b = this.nextPointOnContour; !a.touched(b) && b !== this;) b = b.nextPointOnContour; return b }, Tb.prototype.prevTouched = function(a) { for (var b = this.prevPointOnContour; !a.touched(b) && b !== this;) b = b.prevPointOnContour; return b };
                    var Bf = Object.freeze(new Tb(0, 0)),
                        Cf = { cvCutIn: 17 / 16, deltaBase: 9, deltaShift: .125, loop: 1, minDis: 1, autoFlip: !0 };
                    Kb.prototype.exec = function(b, c) { if ("number" != typeof c) throw new Error("Point size is not a number!"); if (!(this._errorState > 2)) { var d = this.font,
                                e = this._prepState; if (!e || e.ppem !== c) { var f = this._fpgmState; if (!f) { Ub.prototype = Cf, f = this._fpgmState = new Ub("fpgm", d.tables.fpgm), f.funcs = [], f.font = d, a.DEBUG && (console.log("---EXEC FPGM---"), f.step = -1); try { vf(f) } catch (a) { return console.log("Hinting error in FPGM:" + a), void(this._errorState = 3) } }
                                Ub.prototype = f, e = this._prepState = new Ub("prep", d.tables.prep), e.ppem = c; var g = d.tables.cvt; if (g)
                                    for (var h = e.cvt = new Array(g.length), i = c / d.unitsPerEm, j = 0; j < g.length; j++) h[j] = g[j] * i;
                                else e.cvt = [];
                                a.DEBUG && (console.log("---EXEC PREP---"), e.step = -1); try { vf(e) } catch (a) { this._errorState < 2 && console.log("Hinting error in PREP:" + a), this._errorState = 2 } } if (!(this._errorState > 1)) try { return wf(b, e) } catch (a) { return this._errorState < 1 && (console.log("Hinting error:" + a), console.log("Note: further hinting errors are silenced")), void(this._errorState = 1) } } }, wf = function(b, c) { var d, e, f, g = c.ppem / c.font.unitsPerEm,
                            h = g,
                            i = b.components; if (Ub.prototype = c, i) { var j = c.font;
                            e = [], d = []; for (var k = 0; k < i.length; k++) { var l = i[k],
                                    m = j.glyphs.get(l.glyphIndex);
                                f = new Ub("glyf", m.instructions), a.DEBUG && (console.log("---EXEC COMP " + k + "---"), f.step = -1), xf(m, f, g, h); for (var n = Math.round(l.dx * g), o = Math.round(l.dy * h), p = f.gZone, q = f.contours, r = 0; r < p.length; r++) { var s = p[r];
                                    s.xTouched = s.yTouched = !1, s.xo = s.x = s.x + n, s.yo = s.y = s.y + o } var t = e.length;
                                e.push.apply(e, p); for (var u = 0; u < q.length; u++) d.push(q[u] + t) }
                            b.instructions && !f.inhibitGridFit && (f = new Ub("glyf", b.instructions), f.gZone = f.z0 = f.z1 = f.z2 = e, f.contours = d, e.push(new Tb(0, 0), new Tb(Math.round(b.advanceWidth * g), 0)), a.DEBUG && (console.log("---EXEC COMPOSITE---"), f.step = -1), vf(f), e.length -= 2) } else f = new Ub("glyf", b.instructions), a.DEBUG && (console.log("---EXEC GLYPH---"), f.step = -1), xf(b, f, g, h), e = f.gZone; return e }, xf = function(b, c, d, e) { for (var f, g = b.points || [], h = g.length, i = c.gZone = c.z0 = c.z1 = c.z2 = [], j = c.contours = [], k = 0; k < h; k++) f = g[k], i[k] = new Tb(f.x * d, f.y * e, f.lastPointOfContour, f.onCurve); for (var l, m, n = 0; n < h; n++) f = i[n], l || (l = f, j.push(n)), f.lastPointOfContour ? (f.nextPointOnContour = l, l.prevPointOnContour = f, l = void 0) : (m = i[n + 1], f.nextPointOnContour = m, m.prevPointOnContour = f); if (!c.inhibitGridFit && (i.push(new Tb(0, 0), new Tb(Math.round(b.advanceWidth * d), 0)), vf(c), i.length -= 2, a.DEBUG)) { console.log("FINISHED GLYPH", c.stack); for (var o = 0; o < h; o++) console.log(o, i[o].x, i[o].y) } }, vf = function(b) { var c = b.prog; if (c) { var d, e = c.length; for (b.ip = 0; b.ip < e; b.ip++) { if (a.DEBUG && b.step++, !(d = uf[c[b.ip]])) throw new Error("unknown instruction: 0x" + Number(c[b.ip]).toString(16));
                                d(b) } } }, uf = [Xb.bind(void 0, Af), Xb.bind(void 0, zf), Yb.bind(void 0, Af), Yb.bind(void 0, zf), Zb.bind(void 0, Af), Zb.bind(void 0, zf), $b.bind(void 0, 0), $b.bind(void 0, 1), _b.bind(void 0, 0), _b.bind(void 0, 1), ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, void 0, void 0, uc, vc, wc, xc, yc, Bc, Cc, void 0, void 0, void 0, zc, Ac, Dc, void 0, Ec.bind(void 0, 0), Ec.bind(void 0, 1), Fc.bind(void 0, Af), Fc.bind(void 0, zf), Gc.bind(void 0, 0), Gc.bind(void 0, 1), Hc.bind(void 0, 0), Hc.bind(void 0, 1), Ic.bind(void 0, 0), Ic.bind(void 0, 1), Jc, Kc, Lc.bind(void 0, 0), Lc.bind(void 0, 1), Mc, Nc, Oc.bind(void 0, 0), Oc.bind(void 0, 1), Pc, Qc, Rc, Sc, Tc, Uc, Vc.bind(void 0, 0), Vc.bind(void 0, 1), void 0, Wc.bind(void 0, 0), Wc.bind(void 0, 1), Xc, void 0, Yc, void 0, void 0, Zc, $c, _c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd.bind(void 0, 1), ld, md, nd, od, pd, qd, rd, sd, td, ud, vd.bind(void 0, 0), vd.bind(void 0, 1), vd.bind(void 0, 2), vd.bind(void 0, 3), void 0, void 0, void 0, void 0, wd, kd.bind(void 0, 2), kd.bind(void 0, 3), xd.bind(void 0, 1), xd.bind(void 0, 2), xd.bind(void 0, 3), yd, zd, void 0, void 0, Ad, void 0, Bd, Cd, vc, vc, void 0, void 0, void 0, void 0, void 0, Dd, Ed.bind(void 0, 0), Ed.bind(void 0, 1), Fd, void 0, Gd, Hd, Id, Jd, Kd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Ld.bind(void 0, 1), Ld.bind(void 0, 2), Ld.bind(void 0, 3), Ld.bind(void 0, 4), Ld.bind(void 0, 5), Ld.bind(void 0, 6), Ld.bind(void 0, 7), Ld.bind(void 0, 8), Md.bind(void 0, 1), Md.bind(void 0, 2), Md.bind(void 0, 3), Md.bind(void 0, 4), Md.bind(void 0, 5), Md.bind(void 0, 6), Md.bind(void 0, 7), Md.bind(void 0, 8), Nd.bind(void 0, 0, 0, 0, 0, 0), Nd.bind(void 0, 0, 0, 0, 0, 1), Nd.bind(void 0, 0, 0, 0, 0, 2), Nd.bind(void 0, 0, 0, 0, 0, 3), Nd.bind(void 0, 0, 0, 0, 1, 0), Nd.bind(void 0, 0, 0, 0, 1, 1), Nd.bind(void 0, 0, 0, 0, 1, 2), Nd.bind(void 0, 0, 0, 0, 1, 3), Nd.bind(void 0, 0, 0, 1, 0, 0), Nd.bind(void 0, 0, 0, 1, 0, 1), Nd.bind(void 0, 0, 0, 1, 0, 2), Nd.bind(void 0, 0, 0, 1, 0, 3), Nd.bind(void 0, 0, 0, 1, 1, 0), Nd.bind(void 0, 0, 0, 1, 1, 1), Nd.bind(void 0, 0, 0, 1, 1, 2), Nd.bind(void 0, 0, 0, 1, 1, 3), Nd.bind(void 0, 0, 1, 0, 0, 0), Nd.bind(void 0, 0, 1, 0, 0, 1), Nd.bind(void 0, 0, 1, 0, 0, 2), Nd.bind(void 0, 0, 1, 0, 0, 3), Nd.bind(void 0, 0, 1, 0, 1, 0), Nd.bind(void 0, 0, 1, 0, 1, 1), Nd.bind(void 0, 0, 1, 0, 1, 2), Nd.bind(void 0, 0, 1, 0, 1, 3), Nd.bind(void 0, 0, 1, 1, 0, 0), Nd.bind(void 0, 0, 1, 1, 0, 1), Nd.bind(void 0, 0, 1, 1, 0, 2), Nd.bind(void 0, 0, 1, 1, 0, 3), Nd.bind(void 0, 0, 1, 1, 1, 0), Nd.bind(void 0, 0, 1, 1, 1, 1), Nd.bind(void 0, 0, 1, 1, 1, 2), Nd.bind(void 0, 0, 1, 1, 1, 3), Nd.bind(void 0, 1, 0, 0, 0, 0), Nd.bind(void 0, 1, 0, 0, 0, 1), Nd.bind(void 0, 1, 0, 0, 0, 2), Nd.bind(void 0, 1, 0, 0, 0, 3), Nd.bind(void 0, 1, 0, 0, 1, 0), Nd.bind(void 0, 1, 0, 0, 1, 1), Nd.bind(void 0, 1, 0, 0, 1, 2), Nd.bind(void 0, 1, 0, 0, 1, 3), Nd.bind(void 0, 1, 0, 1, 0, 0), Nd.bind(void 0, 1, 0, 1, 0, 1), Nd.bind(void 0, 1, 0, 1, 0, 2), Nd.bind(void 0, 1, 0, 1, 0, 3), Nd.bind(void 0, 1, 0, 1, 1, 0), Nd.bind(void 0, 1, 0, 1, 1, 1), Nd.bind(void 0, 1, 0, 1, 1, 2), Nd.bind(void 0, 1, 0, 1, 1, 3), Nd.bind(void 0, 1, 1, 0, 0, 0), Nd.bind(void 0, 1, 1, 0, 0, 1), Nd.bind(void 0, 1, 1, 0, 0, 2), Nd.bind(void 0, 1, 1, 0, 0, 3), Nd.bind(void 0, 1, 1, 0, 1, 0), Nd.bind(void 0, 1, 1, 0, 1, 1), Nd.bind(void 0, 1, 1, 0, 1, 2), Nd.bind(void 0, 1, 1, 0, 1, 3), Nd.bind(void 0, 1, 1, 1, 0, 0), Nd.bind(void 0, 1, 1, 1, 0, 1), Nd.bind(void 0, 1, 1, 1, 0, 2), Nd.bind(void 0, 1, 1, 1, 0, 3), Nd.bind(void 0, 1, 1, 1, 1, 0), Nd.bind(void 0, 1, 1, 1, 1, 1), Nd.bind(void 0, 1, 1, 1, 1, 2), Nd.bind(void 0, 1, 1, 1, 1, 3)], Od.prototype.hasChar = function(a) { return null !== this.encoding.charToGlyphIndex(a) }, Od.prototype.charToGlyphIndex = function(a) { return this.encoding.charToGlyphIndex(a) }, Od.prototype.charToGlyph = function(a) { var b = this.charToGlyphIndex(a),
                            c = this.glyphs.get(b); return c || (c = this.glyphs.get(0)), c }, Od.prototype.stringToGlyphs = function(a, b) { var c = this;
                        b = b || this.defaultRenderOptions; for (var d = [], e = 0; e < a.length; e += 1) { var f = a[e];
                            d.push(c.charToGlyphIndex(f)) } var g = d.length; if (b.features) { var h = b.script || this.substitution.getDefaultScriptName(),
                                i = [];
                            b.features.liga && (i = i.concat(this.substitution.getFeature("liga", h, b.language))), b.features.rlig && (i = i.concat(this.substitution.getFeature("rlig", h, b.language))); for (var j = 0; j < g; j += 1)
                                for (var k = 0; k < i.length; k++) { for (var l = i[k], m = l.sub, n = m.length, o = 0; o < n && m[o] === d[j + o];) o++;
                                    o === n && (d.splice(j, n, l.by), g = g - n + 1) } } for (var p = new Array(g), q = this.glyphs.get(0), r = 0; r < g; r += 1) p[r] = c.glyphs.get(d[r]) || q; return p }, Od.prototype.nameToGlyphIndex = function(a) { return this.glyphNames.nameToGlyphIndex(a) }, Od.prototype.nameToGlyph = function(a) { var b = this.nameToGlyphIndex(a),
                            c = this.glyphs.get(b); return c || (c = this.glyphs.get(0)), c }, Od.prototype.glyphIndexToName = function(a) { return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(a) : "" }, Od.prototype.getKerningValue = function(a, b) { a = a.index || a, b = b.index || b; var c = this.getGposKerningValue; return c ? c(a, b) : this.kerningPairs[a + "," + b] || 0 }, Od.prototype.defaultRenderOptions = { kerning: !0, features: { liga: !0, rlig: !0 } }, Od.prototype.forEachGlyph = function(a, b, c, d, e, f) { var g = this;
                        b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 72, e = e || this.defaultRenderOptions; for (var h = 1 / this.unitsPerEm * d, i = this.stringToGlyphs(a, e), j = 0; j < i.length; j += 1) { var k = i[j]; if (f.call(g, k, b, c, d, e), k.advanceWidth && (b += k.advanceWidth * h), e.kerning && j < i.length - 1) { b += g.getKerningValue(k, i[j + 1]) * h }
                            e.letterSpacing ? b += e.letterSpacing * d : e.tracking && (b += e.tracking / 1e3 * d) } return b }, Od.prototype.getPath = function(a, b, c, d, e) { var f = new r; return this.forEachGlyph(a, b, c, d, e, function(a, b, c, d) { var g = a.getPath(b, c, d, e, this);
                            f.extend(g) }), f }, Od.prototype.getPaths = function(a, b, c, d, e) { var f = []; return this.forEachGlyph(a, b, c, d, e, function(a, b, c, d) { var g = a.getPath(b, c, d, e, this);
                            f.push(g) }), f }, Od.prototype.getAdvanceWidth = function(a, b, c) { return this.forEachGlyph(a, 0, 0, b, c, function() {}) }, Od.prototype.draw = function(a, b, c, d, e, f) { this.getPath(b, c, d, e, f).draw(a) }, Od.prototype.drawPoints = function(a, b, c, d, e, f) { this.forEachGlyph(b, c, d, e, f, function(b, c, d, e) { b.drawPoints(a, c, d, e) }) }, Od.prototype.drawMetrics = function(a, b, c, d, e, f) { this.forEachGlyph(b, c, d, e, f, function(b, c, d, e) { b.drawMetrics(a, c, d, e) }) }, Od.prototype.getEnglishName = function(a) { var b = this.names[a]; if (b) return b.en }, Od.prototype.validate = function() {
                        function a(a, b) { a || c.push(b) }

                        function b(b) { var c = d.getEnglishName(b);
                            a(c && c.trim().length > 0, "No English " + b + " specified.") } var c = [],
                            d = this;
                        b("fontFamily"), b("weightName"), b("manufacturer"), b("copyright"), b("version"), a(this.unitsPerEm > 0, "No unitsPerEm specified.") }, Od.prototype.toTables = function() { return tf.fontToTable(this) }, Od.prototype.toBuffer = function() { return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer() }, Od.prototype.toArrayBuffer = function() { for (var a = this.toTables(), b = a.encode(), c = new ArrayBuffer(b.length), d = new Uint8Array(c), e = 0; e < b.length; e++) d[e] = b[e]; return c }, Od.prototype.download = function(a) { var c = this.getEnglishName("fontFamily"),
                            d = this.getEnglishName("fontSubfamily");
                        a = a || c.replace(/\s/g, "") + "-" + d + ".otf"; var e = this.toArrayBuffer(); if (Gb()) window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, e.byteLength, function(b) { b.root.getFile(a, { create: !0 }, function(a) { a.createWriter(function(b) { var c = new DataView(e),
                                        d = new Blob([c], { type: "font/opentype" });
                                    b.write(d), b.addEventListener("writeend", function() { location.href = a.toURL() }, !1) }) }) }, function(a) { throw new Error(a.name + ": " + a.message) });
                        else { var f = b("fs"),
                                g = Ib(e);
                            f.writeFileSync(a, g) } }, Od.prototype.fsSelectionValues = { ITALIC: 1, UNDERSCORE: 2, NEGATIVE: 4, OUTLINED: 8, STRIKEOUT: 16, BOLD: 32, REGULAR: 64, USER_TYPO_METRICS: 128, WWS: 256, OBLIQUE: 512 }, Od.prototype.usWidthClasses = { ULTRA_CONDENSED: 1, EXTRA_CONDENSED: 2, CONDENSED: 3, SEMI_CONDENSED: 4, MEDIUM: 5, SEMI_EXPANDED: 6, EXPANDED: 7, EXTRA_EXPANDED: 8, ULTRA_EXPANDED: 9 }, Od.prototype.usWeightClasses = { THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, NORMAL: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 };
                    var Df = { make: Ud, parse: Vd },
                        Ef = { parse: _d },
                        Ff = { parse: ce },
                        Gf = { parse: de };
                    a.Font = Od, a.Glyph = ja, a.Path = r, a.BoundingBox = q, a._parse = Ne, a.parse = je, a.load = ke, a.loadSync = le, Object.defineProperty(a, "__esModule", { value: !0 })
                })
            }).call(this, b("buffer").Buffer)
        }, { buffer: 3, fs: 2 }],
        10: [function(a, b, c) {
            function d() { throw new Error("setTimeout has not been defined") }

            function e() { throw new Error("clearTimeout has not been defined") }

            function f(a) { if (l === setTimeout) return setTimeout(a, 0); if ((l === d || !l) && setTimeout) return l = setTimeout, setTimeout(a, 0); try { return l(a, 0) } catch (b) { try { return l.call(null, a, 0) } catch (b) { return l.call(this, a, 0) } } }

            function g(a) { if (m === clearTimeout) return clearTimeout(a); if ((m === e || !m) && clearTimeout) return m = clearTimeout, clearTimeout(a); try { return m(a) } catch (b) { try { return m.call(null, a) } catch (b) { return m.call(this, a) } } }

            function h() { q && o && (q = !1, o.length ? p = o.concat(p) : r = -1, p.length && i()) }

            function i() { if (!q) { var a = f(h);
                    q = !0; for (var b = p.length; b;) { for (o = p, p = []; ++r < b;) o && o[r].run();
                        r = -1, b = p.length }
                    o = null, q = !1, g(a) } }

            function j(a, b) { this.fun = a, this.array = b }

            function k() {} var l, m, n = b.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : d } catch (a) { l = d } try { m = "function" == typeof clearTimeout ? clearTimeout : e } catch (a) { m = e } }(); var o, p = [],
                q = !1,
                r = -1;
            n.nextTick = function(a) { var b = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                p.push(new j(a, b)), 1 !== p.length || q || f(i) }, j.prototype.run = function() { this.fun.apply(null, this.array) }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = k, n.addListener = k, n.once = k, n.off = k, n.removeListener = k, n.removeAllListeners = k, n.emit = k, n.prependListener = k, n.prependOnceListener = k, n.listeners = function(a) { return [] }, n.binding = function(a) { throw new Error("process.binding is not supported") }, n.cwd = function() { return "/" }, n.chdir = function(a) { throw new Error("process.chdir is not supported") }, n.umask = function() { return 0 } }, {}],
        11: [function(a, b, c) {! function(a) { "use strict";

                function b(a) { if ("string" != typeof a && (a = String(a)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)) throw new TypeError("Invalid character in header field name"); return a.toLowerCase() }

                function c(a) { return "string" != typeof a && (a = String(a)), a }

                function d(a) { var b = { next: function() { var b = a.shift(); return { done: void 0 === b, value: b } } }; return r.iterable && (b[Symbol.iterator] = function() { return b }), b }

                function e(a) { this.map = {}, a instanceof e ? a.forEach(function(a, b) { this.append(b, a) }, this) : Array.isArray(a) ? a.forEach(function(a) { this.append(a[0], a[1]) }, this) : a && Object.getOwnPropertyNames(a).forEach(function(b) { this.append(b, a[b]) }, this) }

                function f(a) { if (a.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    a.bodyUsed = !0 }

                function g(a) { return new Promise(function(b, c) { a.onload = function() { b(a.result) }, a.onerror = function() { c(a.error) } }) }

                function h(a) { var b = new FileReader,
                        c = g(b); return b.readAsArrayBuffer(a), c }

                function i(a) { var b = new FileReader,
                        c = g(b); return b.readAsText(a), c }

                function j(a) { for (var b = new Uint8Array(a), c = new Array(b.length), d = 0; d < b.length; d++) c[d] = String.fromCharCode(b[d]); return c.join("") }

                function k(a) { if (a.slice) return a.slice(0); var b = new Uint8Array(a.byteLength); return b.set(new Uint8Array(a)), b.buffer }

                function l() { return this.bodyUsed = !1, this._initBody = function(a) { if (this._bodyInit = a, a)
                            if ("string" == typeof a) this._bodyText = a;
                            else if (r.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a;
                        else if (r.formData && FormData.prototype.isPrototypeOf(a)) this._bodyFormData = a;
                        else if (r.searchParams && URLSearchParams.prototype.isPrototypeOf(a)) this._bodyText = a.toString();
                        else if (r.arrayBuffer && r.blob && t(a)) this._bodyArrayBuffer = k(a.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else { if (!r.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(a) && !u(a)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = k(a) } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, r.blob && (this.blob = function() { var a = f(this); if (a) return a; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h) }), this.text = function() { var a = f(this); if (a) return a; if (this._bodyBlob) return i(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(j(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, r.formData && (this.formData = function() { return this.text().then(o) }), this.json = function() { return this.text().then(JSON.parse) }, this }

                function m(a) { var b = a.toUpperCase(); return v.indexOf(b) > -1 ? b : a }

                function n(a, b) { b = b || {}; var c = b.body; if (a instanceof n) { if (a.bodyUsed) throw new TypeError("Already read");
                        this.url = a.url, this.credentials = a.credentials, b.headers || (this.headers = new e(a.headers)), this.method = a.method, this.mode = a.mode, c || null == a._bodyInit || (c = a._bodyInit, a.bodyUsed = !0) } else this.url = String(a); if (this.credentials = b.credentials || this.credentials || "omit", !b.headers && this.headers || (this.headers = new e(b.headers)), this.method = m(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && c) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(c) }

                function o(a) { var b = new FormData; return a.trim().split("&").forEach(function(a) { if (a) { var c = a.split("="),
                                d = c.shift().replace(/\+/g, " "),
                                e = c.join("=").replace(/\+/g, " ");
                            b.append(decodeURIComponent(d), decodeURIComponent(e)) } }), b }

                function p(a) { var b = new e; return a.split(/\r?\n/).forEach(function(a) { var c = a.split(":"),
                            d = c.shift().trim(); if (d) { var e = c.join(":").trim();
                            b.append(d, e) } }), b }

                function q(a, b) { b || (b = {}), this.type = "default", this.status = "status" in b ? b.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new e(b.headers), this.url = b.url || "", this._initBody(a) } if (!a.fetch) { var r = { searchParams: "URLSearchParams" in a, iterable: "Symbol" in a && "iterator" in Symbol, blob: "FileReader" in a && "Blob" in a && function() { try { return new Blob, !0 } catch (a) { return !1 } }(), formData: "FormData" in a, arrayBuffer: "ArrayBuffer" in a }; if (r.arrayBuffer) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        t = function(a) { return a && DataView.prototype.isPrototypeOf(a) },
                        u = ArrayBuffer.isView || function(a) { return a && s.indexOf(Object.prototype.toString.call(a)) > -1 };
                    e.prototype.append = function(a, d) { a = b(a), d = c(d); var e = this.map[a];
                        this.map[a] = e ? e + "," + d : d }, e.prototype.delete = function(a) { delete this.map[b(a)] }, e.prototype.get = function(a) { return a = b(a), this.has(a) ? this.map[a] : null }, e.prototype.has = function(a) { return this.map.hasOwnProperty(b(a)) }, e.prototype.set = function(a, d) { this.map[b(a)] = c(d) }, e.prototype.forEach = function(a, b) { for (var c in this.map) this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this) }, e.prototype.keys = function() { var a = []; return this.forEach(function(b, c) { a.push(c) }), d(a) }, e.prototype.values = function() { var a = []; return this.forEach(function(b) { a.push(b) }), d(a) }, e.prototype.entries = function() { var a = []; return this.forEach(function(b, c) { a.push([c, b]) }), d(a) }, r.iterable && (e.prototype[Symbol.iterator] = e.prototype.entries); var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    n.prototype.clone = function() { return new n(this, { body: this._bodyInit }) }, l.call(n.prototype), l.call(q.prototype), q.prototype.clone = function() { return new q(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new e(this.headers), url: this.url }) }, q.error = function() { var a = new q(null, { status: 0, statusText: "" }); return a.type = "error", a }; var w = [301, 302, 303, 307, 308];
                    q.redirect = function(a, b) { if (-1 === w.indexOf(b)) throw new RangeError("Invalid status code"); return new q(null, { status: b, headers: { location: a } }) }, a.Headers = e, a.Request = n, a.Response = q, a.fetch = function(a, b) { return new Promise(function(c, d) { var e = new n(a, b),
                                f = new XMLHttpRequest;
                            f.onload = function() { var a = { status: f.status, statusText: f.statusText, headers: p(f.getAllResponseHeaders() || "") };
                                a.url = "responseURL" in f ? f.responseURL : a.headers.get("X-Request-URL"); var b = "response" in f ? f.response : f.responseText;
                                c(new q(b, a)) }, f.onerror = function() { d(new TypeError("Network request failed")) }, f.ontimeout = function() { d(new TypeError("Network request failed")) }, f.open(e.method, e.url, !0), "include" === e.credentials && (f.withCredentials = !0), "responseType" in f && r.blob && (f.responseType = "blob"), e.headers.forEach(function(a, b) { f.setRequestHeader(b, a) }), f.send(void 0 === e._bodyInit ? null : e._bodyInit) }) }, a.fetch.polyfill = !0 } }("undefined" != typeof self ? self : this) }, {}],
        12: [function(a, b, c) { "use strict"; var d = a("./core/core");
            a("./color/p5.Color"), a("./core/p5.Element"), a("./typography/p5.Font"), a("./core/p5.Graphics"), a("./core/p5.Renderer2D"), a("./image/p5.Image"), a("./math/p5.Vector"), a("./io/p5.TableRow"), a("./io/p5.Table"), a("./io/p5.XML"), a("./color/creating_reading"), a("./color/setting"), a("./core/constants"), a("./utilities/conversion"), a("./utilities/array_functions"), a("./utilities/string_functions"), a("./core/environment"), a("./image/image"), a("./image/loading_displaying"), a("./image/pixels"), a("./io/files"), a("./events/keyboard"), a("./events/acceleration"), a("./events/mouse"), a("./utilities/time_date"), a("./events/touch"), a("./math/math"), a("./math/calculation"), a("./math/random"), a("./math/noise"), a("./math/trigonometry"), a("./core/rendering"), a("./core/2d_primitives"), a("./core/attributes"), a("./core/curves"), a("./core/vertex"), a("./core/structure"), a("./core/transform"), a("./typography/attributes"), a("./typography/loading_displaying"), a("./data/p5.TypedDict"), a("./webgl/p5.RendererGL"), a("./webgl/p5.Geometry"), a("./webgl/p5.RendererGL.Retained"), a("./webgl/p5.RendererGL.Immediate"), a("./webgl/primitives"), a("./webgl/loading"), a("./webgl/p5.Matrix"), a("./webgl/material"), a("./webgl/light"), a("./webgl/p5.Shader"), a("./webgl/camera"), a("./webgl/interaction"), a("./core/init.js"), b.exports = d }, { "./color/creating_reading": 14, "./color/p5.Color": 15, "./color/setting": 16, "./core/2d_primitives": 17, "./core/attributes": 18, "./core/constants": 20, "./core/core": 21, "./core/curves": 22, "./core/environment": 23, "./core/init.js": 25, "./core/p5.Element": 26, "./core/p5.Graphics": 27, "./core/p5.Renderer2D": 29, "./core/rendering": 30, "./core/structure": 32, "./core/transform": 33, "./core/vertex": 34, "./data/p5.TypedDict": 35, "./events/acceleration": 36, "./events/keyboard": 37, "./events/mouse": 38, "./events/touch": 39, "./image/image": 41, "./image/loading_displaying": 42, "./image/p5.Image": 43, "./image/pixels": 44, "./io/files": 45, "./io/p5.Table": 46, "./io/p5.TableRow": 47, "./io/p5.XML": 48, "./math/calculation": 49, "./math/math": 50, "./math/noise": 51, "./math/p5.Vector": 52, "./math/random": 54, "./math/trigonometry": 55, "./typography/attributes": 56, "./typography/loading_displaying": 57, "./typography/p5.Font": 58, "./utilities/array_functions": 59, "./utilities/conversion": 60, "./utilities/string_functions": 61, "./utilities/time_date": 62, "./webgl/camera": 63, "./webgl/interaction": 64, "./webgl/light": 65, "./webgl/loading": 66, "./webgl/material": 67, "./webgl/p5.Geometry": 68, "./webgl/p5.Matrix": 69, "./webgl/p5.RendererGL": 72, "./webgl/p5.RendererGL.Immediate": 70, "./webgl/p5.RendererGL.Retained": 71, "./webgl/p5.Shader": 73, "./webgl/primitives": 75 }],
        13: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.ColorConversion = {}, d.ColorConversion._hsbaToHSLA = function(a) { var b = a[0],
                    c = a[1],
                    d = a[2],
                    e = (2 - c) * d / 2; return 0 !== e && (1 === e ? c = 0 : e < .5 ? c /= 2 - c : c = c * d / (2 - 2 * e)), [b, c, e, a[3]] }, d.ColorConversion._hsbaToRGBA = function(a) { var b = 6 * a[0],
                    c = a[1],
                    d = a[2],
                    e = []; if (0 === c) e = [d, d, d, a[3]];
                else { var f, g, h, i = Math.floor(b),
                        j = d * (1 - c),
                        k = d * (1 - c * (b - i)),
                        l = d * (1 - c * (1 + i - b));
                    1 === i ? (f = k, g = d, h = j) : 2 === i ? (f = j, g = d, h = l) : 3 === i ? (f = j, g = k, h = d) : 4 === i ? (f = l, g = j, h = d) : 5 === i ? (f = d, g = j, h = k) : (f = d, g = l, h = j), e = [f, g, h, a[3]] } return e }, d.ColorConversion._hslaToHSBA = function(a) { var b, c = a[0],
                    d = a[1],
                    e = a[2]; return b = e < .5 ? (1 + d) * e : e + d - e * d, d = 2 * (b - e) / b, [c, d, b, a[3]] }, d.ColorConversion._hslaToRGBA = function(a) { var b = 6 * a[0],
                    c = a[1],
                    d = a[2],
                    e = []; if (0 === c) e = [d, d, d, a[3]];
                else { var f;
                    f = d < .5 ? (1 + c) * d : d + c - d * c; var g = 2 * d - f,
                        h = function(a, b, c) { return a < 0 ? a += 6 : a >= 6 && (a -= 6), a < 1 ? b + (c - b) * a : a < 3 ? c : a < 4 ? b + (c - b) * (4 - a) : b };
                    e = [h(b + 2, g, f), h(b, g, f), h(b - 2, g, f), a[3]] } return e }, d.ColorConversion._rgbaToHSBA = function(a) { var b, c, d = a[0],
                    e = a[1],
                    f = a[2],
                    g = Math.max(d, e, f),
                    h = g - Math.min(d, e, f); return 0 === h ? (b = 0, c = 0) : (c = h / g, d === g ? b = (e - f) / h : e === g ? b = 2 + (f - d) / h : f === g && (b = 4 + (d - e) / h), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, g, a[3]] }, d.ColorConversion._rgbaToHSLA = function(a) { var b, c, d = a[0],
                    e = a[1],
                    f = a[2],
                    g = Math.max(d, e, f),
                    h = Math.min(d, e, f),
                    i = g + h,
                    j = g - h; return 0 === j ? (b = 0, c = 0) : (c = i < 1 ? j / i : j / (2 - i), d === g ? b = (e - f) / j : e === g ? b = 2 + (f - d) / j : f === g && (b = 4 + (d - e) / j), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, i / 2, a[3]] }, b.exports = d.ColorConversion }, { "../core/core": 21 }],
        14: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants");
            a("./p5.Color"), a("../core/error_helpers"), d.prototype.alpha = function(a) { return d._validateParameters("alpha", arguments), this.color(a)._getAlpha() }, d.prototype.blue = function(a) { return d._validateParameters("blue", arguments), this.color(a)._getBlue() }, d.prototype.brightness = function(a) { return d._validateParameters("brightness", arguments), this.color(a)._getBrightness() }, d.prototype.color = function() { if (d._validateParameters("color", arguments), arguments[0] instanceof d.Color) return arguments[0]; var a = arguments[0] instanceof Array ? arguments[0] : arguments; return new d.Color(this, a) }, d.prototype.green = function(a) { return d._validateParameters("green", arguments), this.color(a)._getGreen() }, d.prototype.hue = function(a) { return d._validateParameters("hue", arguments), this.color(a)._getHue() }, d.prototype.lerpColor = function(a, b, c) { d._validateParameters("lerpColor", arguments); var f, g, h, i, j, k, l = this._colorMode,
                    m = this._colorMaxes; if (l === e.RGB) j = a.levels.map(function(a) { return a / 255 }), k = b.levels.map(function(a) { return a / 255 });
                else if (l === e.HSB) a._getBrightness(), b._getBrightness(), j = a.hsba, k = b.hsba;
                else { if (l !== e.HSL) throw new Error(l + "cannot be used for interpolation.");
                    a._getLightness(), b._getLightness(), j = a.hsla, k = b.hsla } return c = Math.max(Math.min(c, 1), 0), void 0 === this.lerp && (this.lerp = function(a, b, c) { return c * (b - a) + a }), f = this.lerp(j[0], k[0], c), g = this.lerp(j[1], k[1], c), h = this.lerp(j[2], k[2], c), i = this.lerp(j[3], k[3], c), f *= m[l][0], g *= m[l][1], h *= m[l][2], i *= m[l][3], this.color(f, g, h, i) }, d.prototype.lightness = function(a) { return d._validateParameters("lightness", arguments), this.color(a)._getLightness() }, d.prototype.red = function(a) { return d._validateParameters("red", arguments), this.color(a)._getRed() }, d.prototype.saturation = function(a) { return d._validateParameters("saturation", arguments), this.color(a)._getSaturation() }, b.exports = d }, { "../core/constants": 20, "../core/core": 21, "../core/error_helpers": 24, "./p5.Color": 15 }],
        15: [function(a, b, c) {
            "use strict";
            var d = a("../core/core"),
                e = a("../core/constants"),
                f = a("./color_conversion");
            d.Color = function(a, b) { if (this._storeModeAndMaxes(a._colorMode, a._colorMaxes), this.mode !== e.RGB && this.mode !== e.HSL && this.mode !== e.HSB) throw new Error(this.mode + " is an invalid colorMode."); return this._array = d.Color._parseInputs.apply(this, b), this._calculateLevels(), this.name = "p5.Color", this },
                d.Color.prototype.toString = function() { var a = this.levels,
                        b = this._array[3]; return "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + b + ")" }, d.Color.prototype.setRed = function(a) { this._array[0] = a / this.maxes[e.RGB][0], this._calculateLevels() }, d.Color.prototype.setGreen = function(a) { this._array[1] = a / this.maxes[e.RGB][1], this._calculateLevels() }, d.Color.prototype.setBlue = function(a) { this._array[2] = a / this.maxes[e.RGB][2], this._calculateLevels() }, d.Color.prototype.setAlpha = function(a) { this._array[3] = a / this.maxes[this.mode][3], this._calculateLevels() }, d.Color.prototype._calculateLevels = function() { this.levels = this._array.map(function(a) { return Math.round(255 * a) }) }, d.Color.prototype._getAlpha = function() { return this._array[3] * this.maxes[this.mode][3] }, d.Color.prototype._storeModeAndMaxes = function(a, b) { this.mode = a, this.maxes = b }, d.Color.prototype._getMode = function() { return this.mode }, d.Color.prototype._getMaxes = function() { return this.maxes }, d.Color.prototype._getBlue = function() { return this._array[2] * this.maxes[e.RGB][2] }, d.Color.prototype._getBrightness = function() { return this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[e.HSB][2] }, d.Color.prototype._getGreen = function() { return this._array[1] * this.maxes[e.RGB][1] }, d.Color.prototype._getHue = function() { return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[e.HSB][0]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[e.HSL][0]) }, d.Color.prototype._getLightness = function() { return this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[e.HSL][2] }, d.Color.prototype._getRed = function() { return this._array[0] * this.maxes[e.RGB][0] }, d.Color.prototype._getSaturation = function() { return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[e.HSB][1]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[e.HSL][1]) };
            var g = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" },
                h = /\s*/,
                i = /(\d{1,3})/,
                j = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
                k = new RegExp(j.source + "%"),
                l = { HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i, HEX4: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i, HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i, HEX8: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i, RGB: new RegExp(["^rgb\\(", i.source, ",", i.source, ",", i.source, "\\)$"].join(h.source), "i"), RGB_PERCENT: new RegExp(["^rgb\\(", k.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), RGBA: new RegExp(["^rgba\\(", i.source, ",", i.source, ",", i.source, ",", j.source, "\\)$"].join(h.source), "i"), RGBA_PERCENT: new RegExp(["^rgba\\(", k.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"), HSL: new RegExp(["^hsl\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), HSLA: new RegExp(["^hsla\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"), HSB: new RegExp(["^hsb\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"), HSBA: new RegExp(["^hsba\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i") };
            d.Color._parseInputs = function(a, b, c, h) { var i = arguments.length,
                    j = this.mode,
                    k = this.maxes,
                    m = []; if (i >= 3) return m[0] = a / k[j][0], m[1] = b / k[j][1], m[2] = c / k[j][2], m[3] = "number" == typeof h ? h / k[j][3] : 1, m = m.map(function(a) { return Math.max(Math.min(a, 1), 0) }), j === e.HSL ? f._hslaToRGBA(m) : j === e.HSB ? f._hsbaToRGBA(m) : m; if (1 === i && "string" == typeof a) { var n = a.trim().toLowerCase(); if (g[n]) return d.Color._parseInputs.call(this, g[n]); if (l.HEX3.test(n)) return m = l.HEX3.exec(n).slice(1).map(function(a) { return parseInt(a + a, 16) / 255 }), m[3] = 1, m; if (l.HEX6.test(n)) return m = l.HEX6.exec(n).slice(1).map(function(a) { return parseInt(a, 16) / 255 }), m[3] = 1, m; if (l.HEX4.test(n)) return m = l.HEX4.exec(n).slice(1).map(function(a) { return parseInt(a + a, 16) / 255 }); if (l.HEX8.test(n)) return m = l.HEX8.exec(n).slice(1).map(function(a) { return parseInt(a, 16) / 255 }); if (l.RGB.test(n)) return m = l.RGB.exec(n).slice(1).map(function(a) { return a / 255 }), m[3] = 1, m; if (l.RGB_PERCENT.test(n)) return m = l.RGB_PERCENT.exec(n).slice(1).map(function(a) { return parseFloat(a) / 100 }), m[3] = 1, m; if (l.RGBA.test(n)) return m = l.RGBA.exec(n).slice(1).map(function(a, b) { return 3 === b ? parseFloat(a) : a / 255 }); if (l.RGBA_PERCENT.test(n)) return m = l.RGBA_PERCENT.exec(n).slice(1).map(function(a, b) { return 3 === b ? parseFloat(a) : parseFloat(a) / 100 }); if (l.HSL.test(n) ? (m = l.HSL.exec(n).slice(1).map(function(a, b) { return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100 }), m[3] = 1) : l.HSLA.test(n) && (m = l.HSLA.exec(n).slice(1).map(function(a, b) { return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100 })), m = m.map(function(a) { return Math.max(Math.min(a, 1), 0) }), m.length) return f._hslaToRGBA(m); if (l.HSB.test(n) ? (m = l.HSB.exec(n).slice(1).map(function(a, b) { return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100 }), m[3] = 1) : l.HSBA.test(n) && (m = l.HSBA.exec(n).slice(1).map(function(a, b) { return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100 })), m = m.map(function(a) { return Math.max(Math.min(a, 1), 0) }), m.length) return f._hsbaToRGBA(m);
                    m = [1, 1, 1, 1] } else { if (1 !== i && 2 !== i || "number" != typeof a) throw new Error(arguments + "is not a valid color representation.");
                    m[0] = a / k[j][2], m[1] = a / k[j][2], m[2] = a / k[j][2], m[3] = "number" == typeof b ? b / k[j][3] : 1, m = m.map(function(a) { return Math.max(Math.min(a, 1), 0) }) } return m }, b.exports = d.Color
        }, { "../core/constants": 20, "../core/core": 21, "./color_conversion": 13 }],
        16: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants");
            a("./p5.Color"), d.prototype.background = function() { return arguments[0] instanceof d.Image ? this.image(arguments[0], 0, 0, this.width, this.height) : this._renderer.background.apply(this._renderer, arguments), this }, d.prototype.clear = function() { return this._renderer.clear(), this }, d.prototype.colorMode = function(a, b, c, f, g) { if (d._validateParameters("colorMode", arguments), a === e.RGB || a === e.HSB || a === e.HSL) { this._colorMode = a; var h = this._colorMaxes[a];
                    2 === arguments.length ? (h[0] = b, h[1] = b, h[2] = b, h[3] = b) : 4 === arguments.length ? (h[0] = b, h[1] = c, h[2] = f) : 5 === arguments.length && (h[0] = b, h[1] = c, h[2] = f, h[3] = g) } return this }, d.prototype.fill = function() { return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), this._renderer.fill.apply(this._renderer, arguments), this }, d.prototype.noFill = function() { return this._renderer._setProperty("_doFill", !1), this }, d.prototype.noStroke = function() { return this._renderer._setProperty("_doStroke", !1), this }, d.prototype.stroke = function() { return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), this._renderer.stroke.apply(this._renderer, arguments), this }, b.exports = d }, { "../core/constants": 20, "../core/core": 21, "./p5.Color": 15 }],
        17: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./constants"),
                f = a("./canvas");
            a("./error_helpers"), d.prototype.arc = function(a, b, c, f, g, h, i) { if (d._validateParameters("arc", arguments), !this._renderer._doStroke && !this._renderer._doFill) return this; for (this._angleMode === e.DEGREES && (g = this.radians(g), h = this.radians(h)); g < 0;) g += e.TWO_PI; for (; h < 0;) h += e.TWO_PI; return g %= e.TWO_PI, h %= e.TWO_PI, h === g && (h += e.TWO_PI), g = g <= e.HALF_PI ? Math.atan(c / f * Math.tan(g)) : g > e.HALF_PI && g <= 3 * e.HALF_PI ? Math.atan(c / f * Math.tan(g)) + e.PI : Math.atan(c / f * Math.tan(g)) + e.TWO_PI, h = h <= e.HALF_PI ? Math.atan(c / f * Math.tan(h)) : h > e.HALF_PI && h <= 3 * e.HALF_PI ? Math.atan(c / f * Math.tan(h)) + e.PI : Math.atan(c / f * Math.tan(h)) + e.TWO_PI, g > h && (h += e.TWO_PI), c = Math.abs(c), f = Math.abs(f), this._renderer.arc(a, b, c, f, g, h, i), this }, d.prototype.ellipse = function(a, b, c, e, g, h) { if (d._validateParameters("ellipse", arguments), c < 0 && (c = Math.abs(c)), void 0 === e ? e = c : e < 0 && (e = Math.abs(e)), this._renderer._doStroke || this._renderer._doFill) { var i = f.modeAdjust(a, b, c, e, this._renderer._ellipseMode);
                    this._renderer.ellipse([i.x, i.y, i.w, i.h, g, h]) } return this }, d.prototype.line = function() { return d._validateParameters("line", arguments), this._renderer._doStroke && this._renderer.line.apply(this._renderer, arguments), this }, d.prototype.point = function() { return d._validateParameters("point", arguments), this._renderer._doStroke && this._renderer.point.apply(this._renderer, arguments), this }, d.prototype.quad = function() { return d._validateParameters("quad", arguments), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.quad.apply(this._renderer, arguments), this }, d.prototype.rect = function(a, b, c, e, g, h) { if (d._validateParameters("rect", arguments), this._renderer._doStroke || this._renderer._doFill) { var i = f.modeAdjust(a, b, c, e, this._renderer._rectMode);
                    this._renderer.rect([i.x, i.y, i.w, i.h, g, h]) } return this }, d.prototype.triangle = function() { return d._validateParameters("triangle", arguments), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.triangle(arguments), this }, b.exports = d }, { "./canvas": 19, "./constants": 20, "./core": 21, "./error_helpers": 24 }],
        18: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./constants");
            d.prototype.ellipseMode = function(a) { return d._validateParameters("ellipseMode", arguments), a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._ellipseMode = a), this }, d.prototype.noSmooth = function() { return this._renderer.noSmooth(), this }, d.prototype.rectMode = function(a) { return d._validateParameters("rectMode", arguments), a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._rectMode = a), this }, d.prototype.smooth = function() { return this._renderer.smooth(), this }, d.prototype.strokeCap = function(a) { return d._validateParameters("strokeCap", arguments), a !== e.ROUND && a !== e.SQUARE && a !== e.PROJECT || this._renderer.strokeCap(a), this }, d.prototype.strokeJoin = function(a) { return d._validateParameters("strokeJoin", arguments), a !== e.ROUND && a !== e.BEVEL && a !== e.MITER || this._renderer.strokeJoin(a), this }, d.prototype.strokeWeight = function(a) { return d._validateParameters("strokeWeight", arguments), this._renderer.strokeWeight(a), this }, b.exports = d }, { "./constants": 20, "./core": 21 }],
        19: [function(a, b, c) { "use strict"; var d = a("./constants");
            b.exports = { modeAdjust: function(a, b, c, e, f) { return f === d.CORNER ? { x: a, y: b, w: c, h: e } : f === d.CORNERS ? { x: a, y: b, w: c - a, h: e - b } : f === d.RADIUS ? { x: a - c, y: b - e, w: 2 * c, h: 2 * e } : f === d.CENTER ? { x: a - .5 * c, y: b - .5 * e, w: c, h: e } : void 0 }, arcModeAdjust: function(a, b, c, e, f) { return f === d.CORNER ? { x: a + .5 * c, y: b + .5 * e, w: c, h: e } : f === d.CORNERS ? { x: a, y: b, w: c + a, h: e + b } : f === d.RADIUS ? { x: a, y: b, w: 2 * c, h: 2 * e } : f === d.CENTER ? { x: a, y: b, w: c, h: e } : void 0 } } }, { "./constants": 20 }],
        20: [function(a, b, c) { "use strict"; var d = Math.PI;
            b.exports = { P2D: "p2d", WEBGL: "webgl", ARROW: "default", CROSS: "crosshair", HAND: "pointer", MOVE: "move", TEXT: "text", WAIT: "wait", HALF_PI: d / 2, PI: d, QUARTER_PI: d / 4, TAU: 2 * d, TWO_PI: 2 * d, DEGREES: "degrees", RADIANS: "radians", DEG_TO_RAD: d / 180, RAD_TO_DEG: 180 / d, CORNER: "corner", CORNERS: "corners", RADIUS: "radius", RIGHT: "right", LEFT: "left", CENTER: "center", TOP: "top", BOTTOM: "bottom", BASELINE: "alphabetic", POINTS: 0, LINES: 1, LINE_STRIP: 3, LINE_LOOP: 2, TRIANGLES: 4, TRIANGLE_FAN: 6, TRIANGLE_STRIP: 5, QUADS: "quads", QUAD_STRIP: "quad_strip", CLOSE: "close", OPEN: "open", CHORD: "chord", PIE: "pie", PROJECT: "square", SQUARE: "butt", ROUND: "round", BEVEL: "bevel", MITER: "miter", RGB: "rgb", HSB: "hsb", HSL: "hsl", AUTO: "auto", ALT: 18, BACKSPACE: 8, CONTROL: 17, DELETE: 46, DOWN_ARROW: 40, ENTER: 13, ESCAPE: 27, LEFT_ARROW: 37, OPTION: 18, RETURN: 13, RIGHT_ARROW: 39, SHIFT: 16, TAB: 9, UP_ARROW: 38, BLEND: "source-over", ADD: "lighter", DARKEST: "darken", LIGHTEST: "lighten", DIFFERENCE: "difference", EXCLUSION: "exclusion", MULTIPLY: "multiply", SCREEN: "screen", REPLACE: "copy", OVERLAY: "overlay", HARD_LIGHT: "hard-light", SOFT_LIGHT: "soft-light", DODGE: "color-dodge", BURN: "color-burn", THRESHOLD: "threshold", GRAY: "gray", OPAQUE: "opaque", INVERT: "invert", POSTERIZE: "posterize", DILATE: "dilate", ERODE: "erode", BLUR: "blur", NORMAL: "normal", ITALIC: "italic", BOLD: "bold", _DEFAULT_TEXT_FILL: "#000000", _DEFAULT_LEADMULT: 1.25, _CTX_MIDDLE: "middle", LINEAR: "linear", QUADRATIC: "quadratic", BEZIER: "bezier", CURVE: "curve", STROKE: "stroke", FILL: "fill", TEXTURE: "texture", IMMEDIATE: "immediate", LANDSCAPE: "landscape", PORTRAIT: "portrait", _DEFAULT_STROKE: "#000000", _DEFAULT_FILL: "#FFFFFF" } }, {}],
        21: [function(a, b, c) { "use strict";
            a("./shim"); var d = a("./constants"),
                e = function(a, b, c) { "boolean" == typeof b && void 0 === c && (c = b, b = void 0), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = b, this._curElement = null, this._elements = [], this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._initializeInstanceVariables(), this._defaultCanvasSize = { width: 100, height: 100 }, this._events = { mousemove: null, mousedown: null, mouseup: null, dragend: null, dragover: null, click: null, dblclick: null, mouseover: null, mouseout: null, keydown: null, keyup: null, keypress: null, touchstart: null, touchmove: null, touchend: null, resize: null, blur: null }, this._events.wheel = null, this._loadingScreenId = "p5_loading", this._registeredMethods = {}; for (var d = Object.getOwnPropertyNames(e.prototype._registeredMethods), f = 0; f < d.length; f++) { var g = d[f];
                        this._registeredMethods[g] = e.prototype._registeredMethods[g].slice() }
                    window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function() { this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode)); var a = this.preload || window.preload; if (a) { var b = document.getElementById(this._loadingScreenId); if (!b) { b = document.createElement("div"), b.innerHTML = "Loading...", b.style.position = "absolute", b.id = this._loadingScreenId;
                                (this._userNode || document.body).appendChild(b) } for (var c in this._preloadMethods) { this._preloadMethods[c] = this._preloadMethods[c] || e; var d = this._preloadMethods[c];
                                d !== e.prototype && d !== e || (d = this._isGlobal ? window : this), this._registeredPreloadMethods[c] = d[c], d[c] = this._wrapPreload(d, c) }
                            a(), this._runIfPreloadsAreDone() } else this._setup(), this._runFrames(), this._draw() }.bind(this), this._runIfPreloadsAreDone = function() { var a = this._isGlobal ? window : this; if (0 === a._preloadCount) { var b = document.getElementById(a._loadingScreenId);
                            b && b.parentNode.removeChild(b), a._setup(), a._runFrames(), a._draw() } }, this._decrementPreload = function() { var a = this._isGlobal ? window : this; "function" == typeof a.preload && (a._setProperty("_preloadCount", a._preloadCount - 1), a._runIfPreloadsAreDone()) }, this._wrapPreload = function(a, b) { return function() { return this._incrementPreload(), this._registeredPreloadMethods[b].apply(a, arguments) }.bind(this) }, this._incrementPreload = function() { var a = this._isGlobal ? window : this;
                        a._setProperty("_preloadCount", a._preloadCount + 1) }, this._setup = function() { this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, "p2d"); var a = this._isGlobal ? window : this; if ("function" == typeof a.preload)
                            for (var b in this._preloadMethods) a[b] = this._preloadMethods[b][b], a[b] && this && (a[b] = a[b].bind(this)); "function" == typeof a.setup && a.setup(); for (var c = document.getElementsByTagName("canvas"), d = 0; d < c.length; d++) { var e = c[d]; "true" === e.dataset.hidden && (e.style.visibility = "", delete e.dataset.hidden) }
                        this._setupDone = !0 }.bind(this), this._draw = function() { var a = window.performance.now(),
                            b = a - this._lastFrameTime,
                            c = 1e3 / this._targetFrameRate;
                        (!this._loop || b >= c - 5) && (this.redraw(), this._frameRate = 1e3 / (a - this._lastFrameTime), this._lastFrameTime = a, void 0 !== this._updateMouseCoords && this._updateMouseCoords()), this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw)) }.bind(this), this._runFrames = function() { this._updateInterval && clearInterval(this._updateInterval) }.bind(this), this._setProperty = function(a, b) { this[a] = b, this._isGlobal && (window[a] = b) }.bind(this), this.remove = function() { if (this._curElement) { this._loop = !1, this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId); for (var a in this._events) window.removeEventListener(a, this._events[a]); for (var b = 0; b < this._elements.length; b++) { var c = this._elements[b];
                                c.elt.parentNode && c.elt.parentNode.removeChild(c.elt); for (var d in c._events) c.elt.removeEventListener(d, c._events[d]) } var f = this; if (this._registeredMethods.remove.forEach(function(a) { void 0 !== a && a.call(f) }), this._isGlobal) { for (var g in e.prototype) try { delete window[g] } catch (a) { window[g] = void 0 }
                                for (var h in this)
                                    if (this.hasOwnProperty(h)) try { delete window[h] } catch (a) { window[h] = void 0 } } } }.bind(this), this._registeredMethods.init.forEach(function(a) { void 0 !== a && a.call(this) }, this); var h = this._createFriendlyGlobalFunctionBinder(); if (a) a(this);
                    else { this._isGlobal = !0, e.instance = this; for (var i in e.prototype)
                            if ("function" == typeof e.prototype[i]) { var j = i.substring(2);
                                this._events.hasOwnProperty(j) || (Math.hasOwnProperty(i) && Math[i] === e.prototype[i] ? h(i, e.prototype[i]) : h(i, e.prototype[i].bind(this))) } else h(i, e.prototype[i]);
                        for (var k in this) this.hasOwnProperty(k) && h(k, this[k]) } for (var l in this._events) { var m = this["_on" + l]; if (m) { var n = m.bind(this);
                            window.addEventListener(l, n, { passive: !1 }), this._events[l] = n } } var o = function() { this._setProperty("focused", !0) }.bind(this),
                        p = function() { this._setProperty("focused", !1) }.bind(this);
                    window.addEventListener("focus", o), window.addEventListener("blur", p), this.registerMethod("remove", function() { window.removeEventListener("focus", o), window.removeEventListener("blur", p) }), c ? this._start() : "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1) };
            e.prototype._initializeInstanceVariables = function() { this._styles = [], this._bezierDetail = 20, this._curveDetail = 20, this._colorMode = d.RGB, this._colorMaxes = { rgb: [255, 255, 255, 255], hsb: [360, 100, 100, 1], hsl: [360, 100, 100, 1] } }, e.instance = null, e.disableFriendlyErrors = !1; for (var f in d) e.prototype[f] = d[f];
            e.prototype._preloadMethods = { loadJSON: e.prototype, loadImage: e.prototype, loadStrings: e.prototype, loadXML: e.prototype, loadShape: e.prototype, loadTable: e.prototype, loadFont: e.prototype, loadModel: e.prototype, loadShader: e.prototype }, e.prototype._registeredMethods = { init: [], pre: [], post: [], remove: [] }, e.prototype._registeredPreloadMethods = {}, e.prototype.registerPreloadMethod = function(a, b) { e.prototype._preloadMethods.hasOwnProperty(a) || (e.prototype._preloadMethods[a] = b) }, e.prototype.registerMethod = function(a, b) { var c = this || e.prototype;
                c._registeredMethods.hasOwnProperty(a) || (c._registeredMethods[a] = []), c._registeredMethods[a].push(b) }, e.prototype._createFriendlyGlobalFunctionBinder = function(a) { a = a || {}; var b = a.globalObject || window,
                    c = a.log || console.log.bind(console),
                    d = { print: !0 }; return function(a, f) { if (e.disableFriendlyErrors, 1) b[a] = f;
                    else try { if (a in b && !(a in d)) throw new Error('global "' + a + '" already exists');
                        Object.defineProperty(b, a, { configurable: !0, enumerable: !0, get: function() { return f }, set: function(d) { Object.defineProperty(b, a, { configurable: !0, enumerable: !0, value: d, writable: !0 }), c('You just changed the value of "' + a + "\", which was a p5 function. This could cause problems later if you're not careful.") } }) } catch (d) { c('p5 had problems creating the global function "' + a + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'), b[a] = f } } }, b.exports = e }, { "./constants": 20, "./shim": 31 }],
        22: [function(a, b, c) { "use strict"; var d = a("./core");
            a("./error_helpers"), d.prototype.bezier = function() { return d._validateParameters("bezier", arguments), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.bezier.apply(this._renderer, arguments), this }, d.prototype.bezierDetail = function(a) { return d._validateParameters("bezierDetail", arguments), this._bezierDetail = a, this }, d.prototype.bezierPoint = function(a, b, c, e, f) { d._validateParameters("bezierPoint", arguments); var g = 1 - f; return Math.pow(g, 3) * a + 3 * Math.pow(g, 2) * f * b + 3 * g * Math.pow(f, 2) * c + Math.pow(f, 3) * e }, d.prototype.bezierTangent = function(a, b, c, e, f) { d._validateParameters("bezierTangent", arguments); var g = 1 - f; return 3 * e * Math.pow(f, 2) - 3 * c * Math.pow(f, 2) + 6 * c * g * f - 6 * b * g * f + 3 * b * Math.pow(g, 2) - 3 * a * Math.pow(g, 2) }, d.prototype.curve = function() { return d._validateParameters("curve", arguments), this._renderer._doStroke && this._renderer.curve.apply(this._renderer, arguments), this }, d.prototype.curveDetail = function(a) { return d._validateParameters("curveDetail", arguments), this._curveDetail = a, this }, d.prototype.curveTightness = function(a) { d._validateParameters("curveTightness", arguments), this._renderer._curveTightness = a }, d.prototype.curvePoint = function(a, b, c, e, f) { d._validateParameters("curvePoint", arguments); var g = f * f * f,
                    h = f * f; return a * (-.5 * g + h - .5 * f) + b * (1.5 * g - 2.5 * h + 1) + c * (-1.5 * g + 2 * h + .5 * f) + e * (.5 * g - .5 * h) }, d.prototype.curveTangent = function(a, b, c, e, f) { d._validateParameters("curveTangent", arguments); var g = f * f; return a * (-3 * g / 2 + 2 * f - .5) + b * (9 * g / 2 - 5 * f) + c * (-9 * g / 2 + 4 * f + .5) + e * (3 * g / 2 - f) }, b.exports = d }, { "./core": 21, "./error_helpers": 24 }],
        23: [function(a, b, c) { "use strict";

            function d() { return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0 }

            function e() { return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0 }

            function f(a) { if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) throw new Error("Fullscreen not enabled in this browser.");
                a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.msRequestFullscreen && a.msRequestFullscreen() }

            function g() { document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() } var h = a("./core"),
                i = a("./constants"),
                j = [i.ARROW, i.CROSS, i.HAND, i.MOVE, i.TEXT, i.WAIT];
            h.prototype._frameRate = 0, h.prototype._lastFrameTime = window.performance.now(), h.prototype._targetFrameRate = 60; var k = window.print;
            h.prototype.print = function(a) { void 0 === a ? k() : console.log.apply(console, arguments) }, h.prototype.frameCount = 0, h.prototype.focused = document.hasFocus(), h.prototype.cursor = function(a, b, c) { var d = "auto",
                    e = this._curElement.elt; if (j.indexOf(a) > -1) d = a;
                else if ("string" == typeof a) { var f = "";
                    b && c && "number" == typeof b && "number" == typeof c && (f = b + " " + c), d = "http://" === a.substring(0, 7) || "https://" === a.substring(0, 8) ? "url(" + a + ") " + f + ", auto" : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(a) ? "url(" + a + ") " + f + ", auto" : a }
                e.style.cursor = d }, h.prototype.frameRate = function(a) { return h._validateParameters("frameRate", arguments), "number" != typeof a || a < 0 ? this._frameRate : (this._setProperty("_targetFrameRate", a), this._runFrames(), this) }, h.prototype.getFrameRate = function() { return this.frameRate() }, h.prototype.setFrameRate = function(a) { return this.frameRate(a) }, h.prototype.noCursor = function() { this._curElement.elt.style.cursor = "none" }, h.prototype.displayWidth = screen.width, h.prototype.displayHeight = screen.height, h.prototype.windowWidth = d(), h.prototype.windowHeight = e(), h.prototype._onresize = function(a) { this._setProperty("windowWidth", d()), this._setProperty("windowHeight", e()); var b, c = this._isGlobal ? window : this; "function" == typeof c.windowResized && (void 0 === (b = c.windowResized(a)) || b || a.preventDefault()) }, h.prototype.width = 0, h.prototype.height = 0, h.prototype.fullscreen = function(a) { if (h._validateParameters("fullscreen", arguments), void 0 === a) return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                a ? f(document.documentElement) : g() }, h.prototype.pixelDensity = function(a) { if (h._validateParameters("pixelDensity", arguments), "number" != typeof a) return this._pixelDensity;
                this._pixelDensity = a, this.resizeCanvas(this.width, this.height, !0) }, h.prototype.displayDensity = function() { return window.devicePixelRatio }, h.prototype.getURL = function() { return location.href }, h.prototype.getURLPath = function() { return location.pathname.split("/").filter(function(a) { return "" !== a }) }, h.prototype.getURLParams = function() { for (var a, b = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, c = {}; null != (a = b.exec(location.search));) a.index === b.lastIndex && b.lastIndex++, c[a[1]] = a[2]; return c }, b.exports = h }, { "./constants": 20, "./core": 21 }],
        24: [function(a, b, c) { "use strict"; var d = a("./core");
            a("./constants");
            d._validateParameters = d._friendlyFileLoadError = function() {}; var e = null,
                f = "https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup",
                g = function() { var b = {},
                        c = function(a) { return Object.getOwnPropertyNames(a).filter(function(a) { return "_" !== a[0] && (!(a in b) && (b[a] = !0, !0)) }).map(function(b) { var c; return c = "function" == typeof a[b] ? "function" : b === b.toUpperCase() ? "constant" : "variable", { name: b, type: c } }) };
                    e = [].concat(c(d.prototype), c(a("./constants"))), e.sort(function(a, b) { return b.name.length - a.name.length }) },
                h = function(a, b) { b || (b = console.log.bind(console)), e || g(), e.some(function(c) { if (a.message && null !== a.message.match("\\W?" + c.name + "\\W")) return b("Did you just try to use p5.js's " + c.name + ("function" === c.type ? "() " : " ") + c.type + "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: " + f), !0 }) };
            d.prototype._helpForMisusedAtTopLevelCode = h, "complete" !== document.readyState && (window.addEventListener("error", h, !1), window.addEventListener("load", function() { window.removeEventListener("error", h, !1) })), b.exports = d }, { "../../docs/reference/data.json": void 0, "./constants": 20, "./core": 21 }],
        25: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = function() { window.PHANTOMJS || window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !d.instance && new d }; "complete" === document.readyState ? e() : window.addEventListener("load", e, !1) }, { "../core/core": 21 }],
        26: [function(a, b, c) { "use strict";

            function d(a, b, c) { return !1 === b ? f(a, c) : e(a, b, c), this }

            function e(a, b, c) { c._events[a] && f(a, c); var d = b.bind(c);
                c.elt.addEventListener(a, d, !1), c._events[a] = d }

            function f(a, b) { var c = b._events[a];
                b.elt.removeEventListener(a, c, !1), b._events[a] = null } var g = a("./core");
            g.Element = function(a, b) { this.elt = a, this._pInst = b, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this.name = "p5.Element" }, g.Element.prototype.parent = function(a) { return void 0 === a ? this.elt.parentNode : ("string" == typeof a ? ("#" === a[0] && (a = a.substring(1)), a = document.getElementById(a)) : a instanceof g.Element && (a = a.elt), a.appendChild(this.elt), this) }, g.Element.prototype.id = function(a) { return void 0 === a ? this.elt.id : (this.elt.id = a, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this) }, g.Element.prototype.class = function(a) { return void 0 === a ? this.elt.className : (this.elt.className = a, this) }, g.Element.prototype.mousePressed = function(a) { return d("mousedown", a, this), d("touchstart", a, this), this }, g.Element.prototype.doubleClicked = function(a) { return d("dblclick", a, this), this }, g.Element.prototype.mouseWheel = function(a) { return d("wheel", a, this), this }, g.Element.prototype.mouseReleased = function(a) { return d("mouseup", a, this), d("touchend", a, this), this }, g.Element.prototype.mouseClicked = function(a) { return d("click", a, this), this }, g.Element.prototype.mouseMoved = function(a) { return d("mousemove", a, this), d("touchmove", a, this), this }, g.Element.prototype.mouseOver = function(a) { return d("mouseover", a, this), this }, g.Element.prototype.changed = function(a) { return d("change", a, this), this }, g.Element.prototype.input = function(a) { return d("input", a, this), this }, g.Element.prototype.mouseOut = function(a) { return d("mouseout", a, this), this }, g.Element.prototype.touchStarted = function(a) { return d("touchstart", a, this), d("mousedown", a, this), this }, g.Element.prototype.touchMoved = function(a) { return d("touchmove", a, this), d("mousemove", a, this), this }, g.Element.prototype.touchEnded = function(a) { return d("touchend", a, this), d("mouseup", a, this), this }, g.Element.prototype.dragOver = function(a) { return d("dragover", a, this), this }, g.Element.prototype.dragLeave = function(a) { return d("dragleave", a, this), this }, g.Element.prototype.drop = function(a, b) {
                function c(b) { var c = new g.File(b); return function(b) { c.data = b.target.result, a(c) } } return window.File && window.FileReader && window.FileList && window.Blob ? (e("dragover", function(a) { a.stopPropagation(), a.preventDefault() }, this), e("dragleave", function(a) { a.stopPropagation(), a.preventDefault() }, this), void 0 !== b && e("drop", b, this), e("drop", function(a) { a.stopPropagation(), a.preventDefault(); for (var b = a.dataTransfer.files, d = 0; d < b.length; d++) { var e = b[d],
                            f = new FileReader;
                        f.onload = c(e), e.type.indexOf("text") > -1 ? f.readAsText(e) : f.readAsDataURL(e) } }, this)) : console.log("The File APIs are not fully supported in this browser."), this }, g.Element.prototype._setProperty = function(a, b) { this[a] = b }, b.exports = g.Element }, { "./core": 21 }],
        27: [function(a, b, c) {
            "use strict";
            var d = a("./core"),
                e = a("./constants");
            d.Graphics = function(a, b, c, f) { var g = c || e.P2D;
                    this.canvas = document.createElement("canvas"), (f._userNode || document.body).appendChild(this.canvas), d.Element.call(this, this.canvas, f, !1); for (var h in d.prototype) this[h] || ("function" == typeof d.prototype[h] ? this[h] = d.prototype[h].bind(this) : this[h] = d.prototype[h]); return d.prototype._initializeInstanceVariables.apply(this), this.width = a, this.height = b, this._pixelDensity = f._pixelDensity, g === e.WEBGL ? this._renderer = new d.RendererGL(this.canvas, this, !1) : this._renderer = new d.Renderer2D(this.canvas, this, !1), f._elements.push(this), this._renderer.resize(a, b), this._renderer._applyDefaults(), this.name = "p5.Graphics", this },
                d.Graphics.prototype = Object.create(d.Element.prototype), d.Graphics.prototype.remove = function() { this.elt.parentNode && this.elt.parentNode.removeChild(this.elt); for (var a in this._events) this.elt.removeEventListener(a, this._events[a]) }, b.exports = d.Graphics
        }, { "./constants": 20, "./core": 21 }],
        28: [function(a, b, c) { "use strict";

            function d(a) { var b = 0,
                    c = 0; if (a.offsetParent)
                    do { b += a.offsetLeft, c += a.offsetTop } while (a = a.offsetParent);
                else b += a.offsetLeft, c += a.offsetTop; return [b, c] } var e = a("./core"),
                f = a("../core/constants");
            e.Renderer = function(a, b, c) { e.Element.call(this, a, b), this.name = "p5.Renderer", this.canvas = a, this._pInst = b, c ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = f.NORMAL, this._textAscent = null, this._textDescent = null, this._rectMode = f.CORNER, this._ellipseMode = f.CENTER, this._curveTightness = 0, this._imageMode = f.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1 }, e.Renderer.prototype = Object.create(e.Element.prototype), e.Renderer.prototype.resize = function(a, b) { this.width = a, this.height = b, this.elt.width = a * this._pInst._pixelDensity, this.elt.height = b * this._pInst._pixelDensity, this.elt.style.width = a + "px", this.elt.style.height = b + "px", this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) }, e.Renderer.prototype.textLeading = function(a) { return "number" == typeof a ? (this._setProperty("_textLeading", a), this) : this._textLeading }, e.Renderer.prototype.textSize = function(a) { return "number" == typeof a ? (this._setProperty("_textSize", a), this._setProperty("_textLeading", a * f._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize }, e.Renderer.prototype.textStyle = function(a) { return a ? (a !== f.NORMAL && a !== f.ITALIC && a !== f.BOLD || this._setProperty("_textStyle", a), this._applyTextProperties()) : this._textStyle }, e.Renderer.prototype.textAscent = function() { return null === this._textAscent && this._updateTextMetrics(), this._textAscent }, e.Renderer.prototype.textDescent = function() { return null === this._textDescent && this._updateTextMetrics(), this._textDescent }, e.Renderer.prototype._applyDefaults = function() { return this }, e.Renderer.prototype._isOpenType = function(a) { return "object" == typeof(a = a || this._textFont) && a.font && a.font.supported }, e.Renderer.prototype._updateTextMetrics = function() { if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this; var a = document.createElement("span");
                a.style.fontFamily = this._textFont, a.style.fontSize = this._textSize + "px", a.innerHTML = "ABCjgq|"; var b = document.createElement("div");
                b.style.display = "inline-block", b.style.width = "1px", b.style.height = "0px"; var c = document.createElement("div");
                c.appendChild(a), c.appendChild(b), c.style.height = "0px", c.style.overflow = "hidden", document.body.appendChild(c), b.style.verticalAlign = "baseline"; var e = d(b),
                    f = d(a),
                    g = e[1] - f[1];
                b.style.verticalAlign = "bottom", e = d(b), f = d(a); var h = e[1] - f[1],
                    i = h - g; return document.body.removeChild(c), this._setProperty("_textAscent", g), this._setProperty("_textDescent", i), this }, b.exports = e.Renderer }, { "../core/constants": 20, "./core": 21 }],
        29: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./canvas"),
                f = a("./constants"),
                g = a("../image/filters");
            a("./p5.Renderer"); var h = "rgba(0,0,0,0)";
            d.Renderer2D = function(a, b, c) { return d.Renderer.call(this, a, b, c), this.name = "p5.Renderer2D", this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this }, d.Renderer2D.prototype = Object.create(d.Renderer.prototype), d.Renderer2D.prototype._applyDefaults = function() { this._cachedFillStyle = this._cachedStrokeStyle = void 0, this._setFill(f._DEFAULT_FILL), this._setStroke(f._DEFAULT_STROKE), this.drawingContext.lineCap = f.ROUND, this.drawingContext.font = "normal 12px sans-serif" }, d.Renderer2D.prototype.resize = function(a, b) { d.Renderer.prototype.resize.call(this, a, b), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity) }, d.Renderer2D.prototype.background = function() { if (this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), arguments[0] instanceof d.Image) this._pInst.image(arguments[0], 0, 0, this.width, this.height);
                else { var a = this._getFill(),
                        b = this._pInst.color.apply(this._pInst, arguments),
                        c = b.toString();
                    this._setFill(c), this.drawingContext.fillRect(0, 0, this.width, this.height), this._setFill(a) }
                this.drawingContext.restore() }, d.Renderer2D.prototype.clear = function() { this.drawingContext.clearRect(0, 0, this.width, this.height) }, d.Renderer2D.prototype.fill = function() { var a = this._pInst.color.apply(this._pInst, arguments);
                this._setFill(a.toString()) }, d.Renderer2D.prototype.stroke = function() { var a = this._pInst.color.apply(this._pInst, arguments);
                this._setStroke(a.toString()) }, d.Renderer2D.prototype.image = function(a, b, c, e, f, g, h, i, j) { var k; try { this._tint && (d.MediaElement && a instanceof d.MediaElement && a.loadPixels(), a.canvas && (k = this._getTintedImageCanvas(a))), k || (k = a.canvas || a.elt), this.drawingContext.drawImage(k, b, c, e, f, g, h, i, j) } catch (a) { if ("NS_ERROR_NOT_AVAILABLE" !== a.name) throw a } }, d.Renderer2D.prototype._getTintedImageCanvas = function(a) { if (!a.canvas) return a; var b = g._toPixels(a.canvas),
                    c = document.createElement("canvas");
                c.width = a.canvas.width, c.height = a.canvas.height; for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), f = e.data, h = 0; h < b.length; h += 4) { var i = b[h],
                        j = b[h + 1],
                        k = b[h + 2],
                        l = b[h + 3];
                    f[h] = i * this._tint[0] / 255, f[h + 1] = j * this._tint[1] / 255, f[h + 2] = k * this._tint[2] / 255, f[h + 3] = l * this._tint[3] / 255 } return d.putImageData(e, 0, 0), c }, d.Renderer2D.prototype.blendMode = function(a) { this.drawingContext.globalCompositeOperation = a }, d.Renderer2D.prototype.blend = function() { var a = this.drawingContext.globalCompositeOperation,
                    b = arguments[arguments.length - 1],
                    c = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
                this.drawingContext.globalCompositeOperation = b, this._pInst ? this._pInst.copy.apply(this._pInst, c) : this.copy.apply(this, c), this.drawingContext.globalCompositeOperation = a }, d.Renderer2D.prototype.copy = function() { var a, b, c, e, f, g, h, i, j; if (9 === arguments.length) a = arguments[0], b = arguments[1], c = arguments[2], e = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], i = arguments[7], j = arguments[8];
                else { if (8 !== arguments.length) throw new Error("Signature not supported");
                    a = this._pInst, b = arguments[0], c = arguments[1], e = arguments[2], f = arguments[3], g = arguments[4], h = arguments[5], i = arguments[6], j = arguments[7] }
                d.Renderer2D._copyHelper(this, a, b, c, e, f, g, h, i, j) }, d.Renderer2D._copyHelper = function(a, b, c, d, e, f, g, h, i, j) { b.loadPixels(); var k = b.canvas.width / b.width;
                a.drawingContext.drawImage(b.canvas, k * c, k * d, k * e, k * f, g, h, i, j) }, d.Renderer2D.prototype.get = function(a, b, c, e) { if (void 0 === a && void 0 === b && void 0 === c && void 0 === e ? (a = 0, b = 0, c = this.width, e = this.height) : void 0 === c && void 0 === e && (c = 1, e = 1), a + c < 0 || b + e < 0 || a > this.width || b > this.height) return [0, 0, 0, 255]; var f = this._pInst || this;
                f.loadPixels(); var g = f._pixelDensity;
                a = Math.floor(a), b = Math.floor(b), c = Math.floor(c), e = Math.floor(e); var h = a * g,
                    i = b * g; if (1 !== c || 1 !== e || this instanceof d.RendererGL) { var j = Math.min(c, f.width),
                        k = Math.min(e, f.height),
                        l = j * g,
                        m = k * g,
                        n = new d.Image(j, k); return n.canvas.getContext("2d").drawImage(this.canvas, h, i, l, m, 0, 0, j, k), n } var o = this.drawingContext.getImageData(h, i, 1, 1).data; return [o[0], o[1], o[2], o[3]] }, d.Renderer2D.prototype.loadPixels = function() { var a = this._pixelDensity || this._pInst._pixelDensity,
                    b = this.width * a,
                    c = this.height * a,
                    d = this.drawingContext.getImageData(0, 0, b, c);
                this._pInst ? (this._pInst._setProperty("imageData", d), this._pInst._setProperty("pixels", d.data)) : (this._setProperty("imageData", d), this._setProperty("pixels", d.data)) }, d.Renderer2D.prototype.set = function(a, b, c) { if (a = Math.floor(a), b = Math.floor(b), c instanceof d.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this.drawingContext.drawImage(c.canvas, a, b), this.loadPixels.call(this._pInst), this.drawingContext.restore();
                else { var e = this._pInst || this,
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 0,
                        j = 4 * (b * e._pixelDensity * (this.width * e._pixelDensity) + a * e._pixelDensity); if (e.imageData || e.loadPixels.call(e), "number" == typeof c) j < e.pixels.length && (f = c, g = c, h = c, i = 255);
                    else if (c instanceof Array) { if (c.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
                        j < e.pixels.length && (f = c[0], g = c[1], h = c[2], i = c[3]) } else c instanceof d.Color && j < e.pixels.length && (f = c.levels[0], g = c.levels[1], h = c.levels[2], i = c.levels[3]); for (var k = 0; k < e._pixelDensity; k++)
                        for (var l = 0; l < e._pixelDensity; l++) j = 4 * ((b * e._pixelDensity + l) * this.width * e._pixelDensity + (a * e._pixelDensity + k)), e.pixels[j] = f, e.pixels[j + 1] = g, e.pixels[j + 2] = h, e.pixels[j + 3] = i } }, d.Renderer2D.prototype.updatePixels = function(a, b, c, d) { var e = this._pixelDensity || this._pInst._pixelDensity;
                void 0 === a && void 0 === b && void 0 === c && void 0 === d && (a = 0, b = 0, c = this.width, d = this.height), c *= e, d *= e, this._pInst ? this.drawingContext.putImageData(this._pInst.imageData, a, b, 0, 0, c, d) : this.drawingContext.putImageData(this.imageData, a, b, 0, 0, c, d) }, d.Renderer2D.prototype._acuteArcToBezier = function(a, b) { var c = b / 2,
                    d = Math.cos(c),
                    e = Math.sin(c),
                    f = 1 / Math.tan(c),
                    g = a + c,
                    h = Math.cos(g),
                    i = Math.sin(g),
                    j = (4 - d) / 3,
                    k = e + (d - j) * f; return { ax: Math.cos(a), ay: Math.sin(a), bx: j * h + k * i, by: j * i - k * h, cx: j * h - k * i, cy: j * i + k * h, dx: Math.cos(a + b), dy: Math.sin(a + b) } }, d.Renderer2D.prototype.arc = function(a, b, c, d, g, h, i) { for (var j = this.drawingContext, k = e.arcModeAdjust(a, b, c, d, this._ellipseMode), l = k.w / 2, m = k.h / 2, n = 1e-5, o = 0, p = []; h - g > n;) o = Math.min(h - g, f.HALF_PI), p.push(this._acuteArcToBezier(g, o)), g += o; return this._doFill && (j.beginPath(), p.forEach(function(a, b) { 0 === b && j.moveTo(k.x + a.ax * l, k.y + a.ay * m), j.bezierCurveTo(k.x + a.bx * l, k.y + a.by * m, k.x + a.cx * l, k.y + a.cy * m, k.x + a.dx * l, k.y + a.dy * m) }), i !== f.PIE && null != i || j.lineTo(k.x, k.y), j.closePath(), j.fill()), this._doStroke && (j.beginPath(), p.forEach(function(a, b) { 0 === b && j.moveTo(k.x + a.ax * l, k.y + a.ay * m), j.bezierCurveTo(k.x + a.bx * l, k.y + a.by * m, k.x + a.cx * l, k.y + a.cy * m, k.x + a.dx * l, k.y + a.dy * m) }), i === f.PIE ? (j.lineTo(k.x, k.y), j.closePath()) : i === f.CHORD && j.closePath(), j.stroke()), this }, d.Renderer2D.prototype.ellipse = function(a) { var b = this.drawingContext,
                    c = this._doFill,
                    d = this._doStroke,
                    e = a[0],
                    f = a[1],
                    g = a[2],
                    i = a[3]; if (c && !d) { if (this._getFill() === h) return this } else if (!c && d && this._getStroke() === h) return this; var j = .5522847498,
                    k = g / 2 * j,
                    l = i / 2 * j,
                    m = e + g,
                    n = f + i,
                    o = e + g / 2,
                    p = f + i / 2;
                b.beginPath(), b.moveTo(e, p), b.bezierCurveTo(e, p - l, o - k, f, o, f), b.bezierCurveTo(o + k, f, m, p - l, m, p), b.bezierCurveTo(m, p + l, o + k, n, o, n), b.bezierCurveTo(o - k, n, e, p + l, e, p), b.closePath(), c && b.fill(), d && b.stroke() }, d.Renderer2D.prototype.line = function(a, b, c, d) { var e = this.drawingContext; return this._doStroke ? this._getStroke() === h ? this : (e.lineWidth % 2 == 1 && e.translate(.5, .5), e.beginPath(), e.moveTo(a, b), e.lineTo(c, d), e.stroke(), e.lineWidth % 2 == 1 && e.translate(-.5, -.5), this) : this }, d.Renderer2D.prototype.point = function(a, b) { var c = this.drawingContext; if (!this._doStroke) return this; if (this._getStroke() === h) return this; var d = this._getStroke(),
                    e = this._getFill();
                a = Math.round(a), b = Math.round(b), this._setFill(d), c.lineWidth > 1 ? (c.beginPath(), c.arc(a, b, c.lineWidth / 2, 0, f.TWO_PI, !1), c.fill()) : c.fillRect(a, b, 1, 1), this._setFill(e) }, d.Renderer2D.prototype.quad = function(a, b, c, d, e, f, g, i) { var j = this.drawingContext,
                    k = this._doFill,
                    l = this._doStroke; if (k && !l) { if (this._getFill() === h) return this } else if (!k && l && this._getStroke() === h) return this; return j.beginPath(), j.moveTo(a, b), j.lineTo(c, d), j.lineTo(e, f), j.lineTo(g, i), j.closePath(), k && j.fill(), l && j.stroke(), this }, d.Renderer2D.prototype.rect = function(a) { var b = a[0],
                    c = a[1],
                    d = a[2],
                    e = a[3],
                    f = a[4],
                    g = a[5],
                    i = a[6],
                    j = a[7],
                    k = this.drawingContext,
                    l = this._doFill,
                    m = this._doStroke; if (l && !m) { if (this._getFill() === h) return this } else if (!l && m && this._getStroke() === h) return this; if (this._doStroke && k.lineWidth % 2 == 1 && k.translate(.5, .5), k.beginPath(), void 0 === f) k.rect(b, c, d, e);
                else { void 0 === g && (g = f), void 0 === i && (i = g), void 0 === j && (j = i); var n = d / 2,
                        o = e / 2;
                    d < 2 * f && (f = n), e < 2 * f && (f = o), d < 2 * g && (g = n), e < 2 * g && (g = o), d < 2 * i && (i = n), e < 2 * i && (i = o), d < 2 * j && (j = n), e < 2 * j && (j = o), k.beginPath(), k.moveTo(b + f, c), k.arcTo(b + d, c, b + d, c + e, g), k.arcTo(b + d, c + e, b, c + e, i), k.arcTo(b, c + e, b, c, j), k.arcTo(b, c, b + d, c, f), k.closePath() } return this._doFill && k.fill(), this._doStroke && k.stroke(), this._doStroke && k.lineWidth % 2 == 1 && k.translate(-.5, -.5), this }, d.Renderer2D.prototype.triangle = function(a) { var b = this.drawingContext,
                    c = this._doFill,
                    d = this._doStroke,
                    e = a[0],
                    f = a[1],
                    g = a[2],
                    i = a[3],
                    j = a[4],
                    k = a[5]; if (c && !d) { if (this._getFill() === h) return this } else if (!c && d && this._getStroke() === h) return this;
                b.beginPath(), b.moveTo(e, f), b.lineTo(g, i), b.lineTo(j, k), b.closePath(), c && b.fill(), d && b.stroke() }, d.Renderer2D.prototype.endShape = function(a, b, c, d, e, g, h) { if (0 === b.length) return this; if (!this._doStroke && !this._doFill) return this; var i, j = a === f.CLOSE;
                j && !g && b.push(b[0]); var k, l, m = b.length; if (!c || h !== f.POLYGON && null !== h)
                    if (!d || h !== f.POLYGON && null !== h)
                        if (!e || h !== f.POLYGON && null !== h)
                            if (h === f.POINTS)
                                for (k = 0; k < m; k++) i = b[k], this._doStroke && this._pInst.stroke(i[6]), this._pInst.point(i[0], i[1]);
                            else if (h === f.LINES)
                    for (k = 0; k + 1 < m; k += 2) i = b[k], this._doStroke && this._pInst.stroke(b[k + 1][6]), this._pInst.line(i[0], i[1], b[k + 1][0], b[k + 1][1]);
                else if (h === f.TRIANGLES)
                    for (k = 0; k + 2 < m; k += 3) i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.lineTo(i[0], i[1]), this._doFill && (this._pInst.fill(b[k + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(b[k + 2][6]), this.drawingContext.stroke()), this.drawingContext.closePath();
                else if (h === f.TRIANGLE_STRIP)
                    for (k = 0; k + 1 < m; k++) i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(i[0], i[1]), this._doStroke && this._pInst.stroke(b[k + 1][6]), this._doFill && this._pInst.fill(b[k + 1][5]), k + 2 < m && (this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this._doStroke && this._pInst.stroke(b[k + 2][6]), this._doFill && this._pInst.fill(b[k + 2][5])), this._doFillStrokeClose();
                else if (h === f.TRIANGLE_FAN) { if (m > 2) { for (this.drawingContext.beginPath(), k = 2; k < m; k++) i = b[k], this.drawingContext.moveTo(b[0][0], b[0][1]), this.drawingContext.lineTo(b[k - 1][0], b[k - 1][1]), this.drawingContext.lineTo(i[0], i[1]), this.drawingContext.lineTo(b[0][0], b[0][1]), k < m - 1 && (this._doFill && i[5] !== b[k + 1][5] || this._doStroke && i[6] !== b[k + 1][6]) && (this._doFill && (this._pInst.fill(i[5]), this.drawingContext.fill(), this._pInst.fill(b[k + 1][5])), this._doStroke && (this._pInst.stroke(i[6]), this.drawingContext.stroke(), this._pInst.stroke(b[k + 1][6])), this.drawingContext.closePath(), this.drawingContext.beginPath());
                        this._doFillStrokeClose() } } else if (h === f.QUADS)
                    for (k = 0; k + 3 < m; k += 4) { for (i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), l = 1; l < 4; l++) this.drawingContext.lineTo(b[k + l][0], b[k + l][1]);
                        this.drawingContext.lineTo(i[0], i[1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6]), this._doFillStrokeClose() } else if (h === f.QUAD_STRIP) { if (m > 3)
                            for (k = 0; k + 1 < m; k += 2) i = b[k], this.drawingContext.beginPath(), k + 3 < m ? (this.drawingContext.moveTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.lineTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 3][0], b[k + 3][1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6])) : (this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1])), this._doFillStrokeClose() } else { for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[0][0], b[0][1]), k = 1; k < m; k++) i = b[k], i.isVert && (i.moveTo ? this.drawingContext.moveTo(i[0], i[1]) : this.drawingContext.lineTo(i[0], i[1]));
                        this._doFillStrokeClose() }
                else { for (this.drawingContext.beginPath(), k = 0; k < m; k++) b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo([0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.quadraticCurveTo(b[k][0], b[k][1], b[k][2], b[k][3]);
                    this._doFillStrokeClose() } else { for (this.drawingContext.beginPath(), k = 0; k < m; k++) b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo(b[k][0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.bezierCurveTo(b[k][0], b[k][1], b[k][2], b[k][3], b[k][4], b[k][5]);
                    this._doFillStrokeClose() } else if (m > 3) { var n = [],
                        o = 1 - this._curveTightness; for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[1][0], b[1][1]), k = 1; k + 2 < m; k++) i = b[k], n[0] = [i[0], i[1]], n[1] = [i[0] + (o * b[k + 1][0] - o * b[k - 1][0]) / 6, i[1] + (o * b[k + 1][1] - o * b[k - 1][1]) / 6], n[2] = [b[k + 1][0] + (o * b[k][0] - o * b[k + 2][0]) / 6, b[k + 1][1] + (o * b[k][1] - o * b[k + 2][1]) / 6], n[3] = [b[k + 1][0], b[k + 1][1]], this.drawingContext.bezierCurveTo(n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]);
                    j && this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this._doFillStrokeClose() } return c = !1, d = !1, e = !1, g = !1, j && b.pop(), this }, d.Renderer2D.prototype.noSmooth = function() { return "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !1), this }, d.Renderer2D.prototype.smooth = function() { return "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !0), this }, d.Renderer2D.prototype.strokeCap = function(a) { return a !== f.ROUND && a !== f.SQUARE && a !== f.PROJECT || (this.drawingContext.lineCap = a), this }, d.Renderer2D.prototype.strokeJoin = function(a) { return a !== f.ROUND && a !== f.BEVEL && a !== f.MITER || (this.drawingContext.lineJoin = a), this }, d.Renderer2D.prototype.strokeWeight = function(a) { return this.drawingContext.lineWidth = void 0 === a || 0 === a ? 1e-4 : a, this }, d.Renderer2D.prototype._getFill = function() { return this._cachedFillStyle || (this._cachedFillStyle = this.drawingContext.fillStyle), this._cachedFillStyle }, d.Renderer2D.prototype._setFill = function(a) { a !== this._cachedFillStyle && (this.drawingContext.fillStyle = a, this._cachedFillStyle = a) }, d.Renderer2D.prototype._getStroke = function() { return this._cachedStrokeStyle || (this._cachedStrokeStyle = this.drawingContext.strokeStyle), this._cachedStrokeStyle }, d.Renderer2D.prototype._setStroke = function(a) { a !== this._cachedStrokeStyle && (this.drawingContext.strokeStyle = a, this._cachedStrokeStyle = a) }, d.Renderer2D.prototype.bezier = function(a, b, c, d, e, f, g, h) { return this._pInst.beginShape(), this._pInst.vertex(a, b), this._pInst.bezierVertex(c, d, e, f, g, h), this._pInst.endShape(), this }, d.Renderer2D.prototype.curve = function(a, b, c, d, e, f, g, h) { return this._pInst.beginShape(), this._pInst.curveVertex(a, b), this._pInst.curveVertex(c, d), this._pInst.curveVertex(e, f), this._pInst.curveVertex(g, h), this._pInst.endShape(), this }, d.Renderer2D.prototype._doFillStrokeClose = function() { this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke(), this.drawingContext.closePath() }, d.Renderer2D.prototype.applyMatrix = function(a, b, c, d, e, f) { this.drawingContext.transform(a, b, c, d, e, f) }, d.Renderer2D.prototype.resetMatrix = function() { return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this }, d.Renderer2D.prototype.rotate = function(a) { this.drawingContext.rotate(a) }, d.Renderer2D.prototype.scale = function(a, b) { return this.drawingContext.scale(a, b), this }, d.Renderer2D.prototype.shearX = function(a) { return this._pInst._angleMode === f.DEGREES && (a = this._pInst.degrees(a)), this.drawingContext.transform(1, 0, this._pInst.tan(a), 1, 0, 0), this }, d.Renderer2D.prototype.shearY = function(a) { return this._pInst._angleMode === f.DEGREES && (a = this._pInst.degrees(a)), this.drawingContext.transform(1, this._pInst.tan(a), 0, 1, 0, 0), this }, d.Renderer2D.prototype.translate = function(a, b) { return this.drawingContext.translate(a, b), this }, d.Renderer2D.prototype.text = function(a, b, c, d, e) { var g, h, i, j, k, l, m, n, o, p, q = this._pInst,
                    r = Number.MAX_VALUE; if (this._doFill || this._doStroke) { if ("string" != typeof a && (a = a.toString()), a = a.replace(/(\t)/g, "  "), g = a.split("\n"), void 0 !== d) { for (o = 0, i = 0; i < g.length; i++)
                            for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) l = k + n[h] + " ", m = this.textWidth(l), m > d ? (k = n[h] + " ", o += q.textLeading()) : k = l; switch (this._rectMode === f.CENTER && (b -= d / 2, c -= e / 2), this.drawingContext.textAlign) {
                            case f.CENTER:
                                b += d / 2; break;
                            case f.RIGHT:
                                b += d } if (void 0 !== e) { switch (this.drawingContext.textBaseline) {
                                case f.BOTTOM:
                                    c += e - o; break;
                                case f._CTX_MIDDLE:
                                    c += (e - o) / 2; break;
                                case f.BASELINE:
                                    p = !0, this.drawingContext.textBaseline = f.TOP }
                            r = c + e - q.textAscent() } for (i = 0; i < g.length; i++) { for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) l = k + n[h] + " ", m = this.textWidth(l), m > d && k.length > 0 ? (this._renderText(q, k, b, c, r), k = n[h] + " ", c += q.textLeading()) : k = l;
                            this._renderText(q, k, b, c, r), c += q.textLeading() } } else { var s = 0,
                            t = q.textAlign().vertical; for (t === f.CENTER ? s = (g.length - 1) * q.textLeading() / 2 : t === f.BOTTOM && (s = (g.length - 1) * q.textLeading()), j = 0; j < g.length; j++) this._renderText(q, g[j], b, c - s, r), c += q.textLeading() } return p && (this.drawingContext.textBaseline = f.BASELINE), q } }, d.Renderer2D.prototype._renderText = function(a, b, c, d, e) { if (!(d >= e)) return a.push(), this._isOpenType() ? this._textFont._renderPath(b, c, d, { renderer: this }) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(b, c, d), this._doFill && (this._fillSet || this._setFill(f._DEFAULT_TEXT_FILL), this.drawingContext.fillText(b, c, d))), a.pop(), a }, d.Renderer2D.prototype.textWidth = function(a) { return this._isOpenType() ? this._textFont._textWidth(a, this._textSize) : this.drawingContext.measureText(a).width }, d.Renderer2D.prototype.textAlign = function(a, b) { if (void 0 !== a) return a !== f.LEFT && a !== f.RIGHT && a !== f.CENTER || (this.drawingContext.textAlign = a), b !== f.TOP && b !== f.BOTTOM && b !== f.CENTER && b !== f.BASELINE || (b === f.CENTER ? this.drawingContext.textBaseline = f._CTX_MIDDLE : this.drawingContext.textBaseline = b), this._pInst; var c = this.drawingContext.textBaseline; return c === f._CTX_MIDDLE && (c = f.CENTER), { horizontal: this.drawingContext.textAlign, vertical: c } }, d.Renderer2D.prototype._applyTextProperties = function() { var a, b = this._pInst; return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), a = this._textFont, this._isOpenType() && (a = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = (this._textStyle || "normal") + " " + (this._textSize || 12) + "px " + (a || "sans-serif"), b }, d.Renderer2D.prototype.push = function() { this.drawingContext.save() }, d.Renderer2D.prototype.pop = function() { this.drawingContext.restore(), this._cachedFillStyle = this.drawingContext.fillStyle, this._cachedStrokeStyle = this.drawingContext.strokeStyle }, b.exports = d.Renderer2D }, { "../image/filters": 40, "./canvas": 19, "./constants": 20, "./core": 21, "./p5.Renderer": 28 }],
        30: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./constants");
            a("./p5.Graphics"), a("./p5.Renderer2D"), a("../webgl/p5.RendererGL"); var f = "defaultCanvas0";
            d.prototype.createCanvas = function(a, b, c) { d._validateParameters("createCanvas", arguments); var g, h = c || e.P2D; if (h === e.WEBGL) { if (g = document.getElementById(f)) { g.parentNode.removeChild(g); var i = this._renderer;
                        this._elements = this._elements.filter(function(a) { return a !== i }) }
                    g = document.createElement("canvas"), g.id = f } else if (this._defaultGraphicsCreated) g = this.canvas;
                else { g = document.createElement("canvas"); for (var j = 0; document.getElementById("defaultCanvas" + j);) j++;
                    f = "defaultCanvas" + j, g.id = f } return this._setupDone || (g.dataset.hidden = !0, g.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(g) : document.body.appendChild(g), h === e.WEBGL ? (this._setProperty("_renderer", new d.RendererGL(g, this, !0)), this._elements.push(this._renderer)) : this._defaultGraphicsCreated || (this._setProperty("_renderer", new d.Renderer2D(g, this, !0)), this._defaultGraphicsCreated = !0, this._elements.push(this._renderer)), this._renderer.resize(a, b), this._renderer._applyDefaults(), this._renderer }, d.prototype.resizeCanvas = function(a, b, c) { if (d._validateParameters("resizeCanvas", arguments), this._renderer) { var e = {}; for (var f in this.drawingContext) { var g = this.drawingContext[f]; "object" != typeof g && "function" != typeof g && (e[f] = g) }
                    this._renderer.resize(a, b); for (var h in e) try { this.drawingContext[h] = e[h] } catch (a) {}
                    c || this.redraw() } }, d.prototype.noCanvas = function() { this.canvas && this.canvas.parentNode.removeChild(this.canvas) }, d.prototype.createGraphics = function(a, b, c) { return d._validateParameters("createGraphics", arguments), new d.Graphics(a, b, c, this) }, d.prototype.blendMode = function(a) { if (d._validateParameters("blendMode", arguments), a !== e.BLEND && a !== e.DARKEST && a !== e.LIGHTEST && a !== e.DIFFERENCE && a !== e.MULTIPLY && a !== e.EXCLUSION && a !== e.SCREEN && a !== e.REPLACE && a !== e.OVERLAY && a !== e.HARD_LIGHT && a !== e.SOFT_LIGHT && a !== e.DODGE && a !== e.BURN && a !== e.ADD && a !== e.NORMAL) throw new Error("Mode " + a + " not recognized.");
                this._renderer.blendMode(a) }, b.exports = d }, { "../webgl/p5.RendererGL": 72, "./constants": 20, "./core": 21, "./p5.Graphics": 27, "./p5.Renderer2D": 29 }],
        31: [function(a, b, c) { "use strict";
            window.requestAnimationFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) { window.setTimeout(a, 1e3 / 60) } }(), window.performance = window.performance || {}, window.performance.now = function() { var a = Date.now(); return window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow || function() { return Date.now() - a } }(),
                function() { "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", { value: Array.prototype.slice, writable: !0, configurable: !0, enumerable: !1 }) }() }, {}],
        32: [function(a, b, c) { "use strict";

            function d(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (null != d)
                        for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]) } } var e = a("./core");
            e.prototype.exit = function() { throw "exit() not implemented, see remove()" }, e.prototype.noLoop = function() { this._loop = !1 }, e.prototype.loop = function() { this._loop = !0, this._draw() }, e.prototype.push = function() { this._renderer.push(), this._styles.push({ props: { _colorMode: this._colorMode }, renderer: { _doStroke: this._renderer._doStroke, _strokeSet: this._renderer._strokeSet, _doFill: this._renderer._doFill, _fillSet: this._renderer._fillSet, _tint: this._renderer._tint, _imageMode: this._renderer._imageMode, _rectMode: this._renderer._rectMode, _ellipseMode: this._renderer._ellipseMode, _textFont: this._renderer._textFont, _textLeading: this._renderer._textLeading, _textSize: this._renderer._textSize, _textStyle: this._renderer._textStyle } }) }, e.prototype.pop = function() { this._renderer.pop(); var a = this._styles.pop();
                d(this._renderer, a.renderer), d(this, a.props) }, e.prototype.pushStyle = function() { throw new Error("pushStyle() not used, see push()") }, e.prototype.popStyle = function() { throw new Error("popStyle() not used, see pop()") }, e.prototype.redraw = function(a) { this.resetMatrix(), this._renderer.isP3D && this._renderer._update(); var b = parseInt(a);
                (isNaN(b) || b < 1) && (b = 1); var c = this.setup || window.setup,
                    d = this.draw || window.draw; if ("function" == typeof d) { void 0 === c && this.scale(this._pixelDensity, this._pixelDensity); for (var e = this, f = function(a) { a.call(e) }, g = 0; g < b; g++) this._setProperty("frameCount", this.frameCount + 1), this._registeredMethods.pre.forEach(f), d(), this._registeredMethods.post.forEach(f) } }, e.prototype.size = function() { var a = "size() is not a valid p5 function, to set the size of the "; throw a += "drawing canvas, please use createCanvas() instead" }, b.exports = e }, { "./core": 21 }],
        33: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./constants");
            d.prototype.applyMatrix = function(a, b, c, d, e, f) { return this._renderer.applyMatrix(a, b, c, d, e, f), this }, d.prototype.popMatrix = function() { throw new Error("popMatrix() not used, see pop()") }, d.prototype.printMatrix = function() { throw new Error("printMatrix() not implemented") }, d.prototype.pushMatrix = function() { throw new Error("pushMatrix() not used, see push()") }, d.prototype.resetMatrix = function() { return this._renderer.resetMatrix(), this }, d.prototype.rotate = function(a, b) { d._validateParameters("rotate", arguments); var c; return this._angleMode === e.DEGREES ? c = this.radians(a) : this._angleMode === e.RADIANS && (c = a), this._renderer.rotate(c, b), this }, d.prototype.rotateX = function(a) { if (d._validateParameters("rotateX", arguments), !this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode"; return this._renderer.rotateX(a), this }, d.prototype.rotateY = function(a) { if (d._validateParameters("rotateY", arguments), !this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode"; return this._renderer.rotateY(a), this }, d.prototype.rotateZ = function(a) { if (d._validateParameters("rotateZ", arguments), !this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode"; return this._renderer.rotateZ(a), this }, d.prototype.scale = function(a, b, c) { if (d._validateParameters("scale", arguments), a instanceof d.Vector) { var e = a;
                    a = e.x, b = e.y, c = e.z } else if (a instanceof Array) { var f = a;
                    a = f[0], b = f[1], c = f[2] || 1 } return isNaN(b) ? b = c = a : isNaN(c) && (c = 1), this._renderer.scale.call(this._renderer, a, b, c), this }, d.prototype.shearX = function(a) { return d._validateParameters("shearX", arguments), this._angleMode === e.DEGREES && (a = this.radians(a)), this._renderer.shearX(a), this }, d.prototype.shearY = function(a) { return d._validateParameters("shearY", arguments), this._angleMode === e.DEGREES && (a = this.radians(a)), this._renderer.shearY(a), this }, d.prototype.translate = function(a, b, c) { return d._validateParameters("translate", arguments), this._renderer.isP3D ? this._renderer.translate(a, b, c) : this._renderer.translate(a, b), this }, b.exports = d }, { "./constants": 20, "./core": 21 }],
        34: [function(a, b, c) { "use strict"; var d = a("./core"),
                e = a("./constants"),
                f = null,
                g = [],
                h = [],
                i = !1,
                j = !1,
                k = !1,
                l = !1,
                m = !0;
            d.prototype.beginContour = function() { return h = [], l = !0, this }, d.prototype.beginShape = function(a) { return this._renderer.isP3D ? this._renderer.beginShape.apply(this._renderer, arguments) : (f = a === e.POINTS || a === e.LINES || a === e.TRIANGLES || a === e.TRIANGLE_FAN || a === e.TRIANGLE_STRIP || a === e.QUADS || a === e.QUAD_STRIP ? a : null, g = [], h = []), this }, d.prototype.bezierVertex = function(a, b, c, e, f, j) { if (d._validateParameters("bezierVertex", arguments), 0 === g.length) throw "vertex() must be used once before calling bezierVertex()";
                i = !0; for (var k = [], m = 0; m < arguments.length; m++) k[m] = arguments[m]; return k.isVert = !1, l ? h.push(k) : g.push(k), this }, d.prototype.curveVertex = function(a, b) { return d._validateParameters("curveVertex", arguments), j = !0, this.vertex(a, b), this }, d.prototype.endContour = function() { var a = h[0].slice();
                a.isVert = h[0].isVert, a.moveTo = !1, h.push(a), m && (g.push(g[0]), m = !1); for (var b = 0; b < h.length; b++) g.push(h[b]); return this }, d.prototype.endShape = function(a) { if (this._renderer.isP3D) this._renderer.endShape(a, j, i, k, l, f);
                else { if (0 === g.length) return this; if (!this._renderer._doStroke && !this._renderer._doFill) return this; var b = a === e.CLOSE;
                    b && !l && g.push(g[0]), this._renderer.endShape(a, g, j, i, k, l, f), j = !1, i = !1, k = !1, l = !1, m = !0, b && g.pop() } return this }, d.prototype.quadraticVertex = function(a, b, c, f) { if (d._validateParameters("quadraticVertex", arguments), this._contourInited) { var i = {}; return i.x = a, i.y = b, i.x3 = c, i.y3 = f, i.type = e.QUADRATIC, this._contourVertices.push(i), this } if (!(g.length > 0)) throw "vertex() must be used once before calling quadraticVertex()";
                k = !0; for (var j = [], m = 0; m < arguments.length; m++) j[m] = arguments[m]; return j.isVert = !1, l ? h.push(j) : g.push(j), this }, d.prototype.vertex = function(a, b, c, d, e) { if (this._renderer.isP3D) this._renderer.vertex.apply(this._renderer, arguments);
                else { var f = [];
                    f.isVert = !0, f[0] = a, f[1] = b, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = this._renderer._getFill(), f[6] = this._renderer._getStroke(), c && (f.moveTo = c), l ? (0 === h.length && (f.moveTo = !0), h.push(f)) : g.push(f) } return this }, b.exports = d }, { "./constants": 20, "./core": 21 }],
        35: [function(a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.createStringDict = function(a, b) { return new d.StringDict(a, b) }, d.prototype.createNumberDict = function(a, b) { return new d.NumberDict(a, b) }, d.TypedDict = function(a, b) { return a instanceof Object ? this.data = a : (this.data = {}, this.data[a] = b), this },
                d.TypedDict.prototype.size = function() { return Object.keys(this.data).length }, d.TypedDict.prototype.hasKey = function(a) { return this.data.hasOwnProperty(a) }, d.TypedDict.prototype.get = function(a) { if (this.data.hasOwnProperty(a)) return this.data[a];
                    console.log(a + " does not exist in this Dictionary") }, d.TypedDict.prototype.set = function(a, b) { this._validate(b) ? this.data[a] = b : console.log("Those values dont work for this dictionary type.") }, d.TypedDict.prototype._addObj = function(a) { for (var b in a) this.set(b, a[b]) }, d.TypedDict.prototype.create = function(a, b) { a instanceof Object && void 0 === b ? this._addObj(a) : void 0 !== a ? this.set(a, b) : console.log("In order to create a new Dictionary entry you must pass an object or a key, value pair") }, d.TypedDict.prototype.clear = function() { this.data = {} }, d.TypedDict.prototype.remove = function(a) { if (!this.data.hasOwnProperty(a)) throw a + " does not exist in this Dictionary";
                    delete this.data[a] }, d.TypedDict.prototype.print = function() { for (var a in this.data) console.log("key:" + a + " value:" + this.data[a]) }, d.TypedDict.prototype.saveTable = function(a) { var b = ""; for (var c in this.data) b += c + "," + this.data[c] + "\n"; var e = new Blob([b], { type: "text/csv" });
                    d.prototype.downloadFile(e, a || "mycsv", "csv") }, d.TypedDict.prototype.saveJSON = function(a, b) { d.prototype.saveJSON(this.data, a, b) }, d.TypedDict.prototype._validate = function(a) { return !0 }, d.StringDict = function() { d.TypedDict.apply(this, arguments) }, d.StringDict.prototype = Object.create(d.TypedDict.prototype), d.StringDict.prototype._validate = function(a) { return "string" == typeof a }, d.NumberDict = function() { d.TypedDict.apply(this, arguments) }, d.NumberDict.prototype = Object.create(d.TypedDict.prototype), d.NumberDict.prototype._validate = function(a) { return "number" == typeof a }, d.NumberDict.prototype.add = function(a, b) { this.data.hasOwnProperty(a) ? this.data[a] += b : console.log("The key - " + a + " does not exist in this dictionary.") }, d.NumberDict.prototype.sub = function(a, b) { this.add(a, -b) }, d.NumberDict.prototype.mult = function(a, b) { this.data.hasOwnProperty(a) ? this.data[a] *= b : console.log("The key - " + a + " does not exist in this dictionary.") }, d.NumberDict.prototype.div = function(a, b) { this.data.hasOwnProperty(a) ? this.data[a] /= b : console.log("The key - " + a + " does not exist in this dictionary.") }, d.NumberDict.prototype._valueTest = function(a) { if (0 === Object.keys(this.data).length) throw "Unable to search for a minimum or maximum value on an empty NumberDict"; if (1 === Object.keys(this.data).length) return this.data[Object.keys(this.data)[0]]; var b = this.data[Object.keys(this.data)[0]]; for (var c in this.data) this.data[c] * a < b * a && (b = this.data[c]); return b }, d.NumberDict.prototype.minValue = function() { return this._valueTest(1) }, d.NumberDict.prototype.maxValue = function() { return this._valueTest(-1) }, d.NumberDict.prototype._keyTest = function(a) { if (0 === Object.keys(this.data).length) throw "Unable to use minValue on an empty NumberDict"; if (1 === Object.keys(this.data).length) return Object.keys(this.data)[0]; for (var b = Object.keys(this.data)[0], c = 1; c < Object.keys(this.data).length; c++) Object.keys(this.data)[c] * a < b * a && (b = Object.keys(this.data)[c]); return b }, d.NumberDict.prototype.minKey = function() { return this._keyTest(1) }, d.NumberDict.prototype.maxKey = function() { return this._keyTest(-1) }, b.exports = d.TypedDict
        }, { "../core/core": 21 }],
        36: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.deviceOrientation = void 0, d.prototype.accelerationX = 0, d.prototype.accelerationY = 0, d.prototype.accelerationZ = 0, d.prototype.pAccelerationX = 0, d.prototype.pAccelerationY = 0, d.prototype.pAccelerationZ = 0, d.prototype._updatePAccelerations = function() { this._setProperty("pAccelerationX", this.accelerationX), this._setProperty("pAccelerationY", this.accelerationY), this._setProperty("pAccelerationZ", this.accelerationZ) }, d.prototype.rotationX = 0, d.prototype.rotationY = 0, d.prototype.rotationZ = 0, d.prototype.pRotationX = 0, d.prototype.pRotationY = 0, d.prototype.pRotationZ = 0; var e, f, g, h = 0,
                i = 0,
                j = 0,
                k = "clockwise",
                l = "clockwise",
                m = "clockwise";
            d.prototype._updatePRotations = function() { this._setProperty("pRotationX", this.rotationX), this._setProperty("pRotationY", this.rotationY), this._setProperty("pRotationZ", this.rotationZ) }, d.prototype.turnAxis = void 0; var n = .5,
                o = 30;
            d.prototype.setMoveThreshold = function(a) { "number" == typeof a && (n = a) }, d.prototype.setShakeThreshold = function(a) { "number" == typeof a && (o = a) }, d.prototype._ondeviceorientation = function(a) { this._updatePRotations(), this._setProperty("rotationX", a.beta), this._setProperty("rotationY", a.gamma), this._setProperty("rotationZ", a.alpha), this._handleMotion() }, d.prototype._ondevicemotion = function(a) { this._updatePAccelerations(), this._setProperty("accelerationX", 2 * a.acceleration.x), this._setProperty("accelerationY", 2 * a.acceleration.y), this._setProperty("accelerationZ", 2 * a.acceleration.z), this._handleMotion() }, d.prototype._handleMotion = function() { 90 === window.orientation || -90 === window.orientation ? this._setProperty("deviceOrientation", "landscape") : 0 === window.orientation ? this._setProperty("deviceOrientation", "portrait") : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined"); var a = this.deviceMoved || window.deviceMoved; "function" == typeof a && (Math.abs(this.accelerationX - this.pAccelerationX) > n || Math.abs(this.accelerationY - this.pAccelerationY) > n || Math.abs(this.accelerationZ - this.pAccelerationZ) > n) && a(); var b = this.deviceTurned || window.deviceTurned; if ("function" == typeof b) { var c = this.rotationX + 180,
                        d = this.pRotationX + 180,
                        p = h + 180;
                    c - d > 0 && c - d < 270 || c - d < -270 ? k = "clockwise" : (c - d < 0 || c - d > 270) && (k = "counter-clockwise"), k !== e && (p = c), Math.abs(c - p) > 90 && Math.abs(c - p) < 270 && (p = c, this._setProperty("turnAxis", "X"), b()), e = k, h = p - 180; var q = this.rotationY + 180,
                        r = this.pRotationY + 180,
                        s = i + 180;
                    q - r > 0 && q - r < 270 || q - r < -270 ? l = "clockwise" : (q - r < 0 || q - this.pRotationY > 270) && (l = "counter-clockwise"), l !== f && (s = q), Math.abs(q - s) > 90 && Math.abs(q - s) < 270 && (s = q, this._setProperty("turnAxis", "Y"), b()), f = l, i = s - 180, this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270 ? m = "clockwise" : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (m = "counter-clockwise"), m !== g && (j = this.rotationZ), Math.abs(this.rotationZ - j) > 90 && Math.abs(this.rotationZ - j) < 270 && (j = this.rotationZ, this._setProperty("turnAxis", "Z"), b()), g = m, this._setProperty("turnAxis", void 0) } var t = this.deviceShaken || window.deviceShaken; if ("function" == typeof t) { var u, v;
                    null !== this.pAccelerationX && (u = Math.abs(this.accelerationX - this.pAccelerationX), v = Math.abs(this.accelerationY - this.pAccelerationY)), u + v > o && t() } }, b.exports = d }, { "../core/core": 21 }],
        37: [function(a, b, c) { "use strict";

            function d() { for (var a in f)
                    if (f.hasOwnProperty(a) && !0 === f[a]) return !0;
                return !1 } var e = a("../core/core"),
                f = {};
            e.prototype.isKeyPressed = !1, e.prototype.keyIsPressed = !1, e.prototype.key = "", e.prototype.keyCode = 0, e.prototype._onkeydown = function(a) { if (!f[a.which]) { this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", a.which), f[a.which] = !0; var b = String.fromCharCode(a.which);
                    b || (b = a.which), this._setProperty("key", b); var c = this.keyPressed || window.keyPressed; if ("function" == typeof c && !a.charCode) {!1 === c(a) && a.preventDefault() } } }, e.prototype._onkeyup = function(a) { var b = this.keyReleased || window.keyReleased;
                f[a.which] = !1, d() || (this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1)), this._setProperty("_lastKeyCodeTyped", null); var c = String.fromCharCode(a.which); if (c || (c = a.which), this._setProperty("key", c), this._setProperty("keyCode", a.which), "function" == typeof b) {!1 === b(a) && a.preventDefault() } }, e.prototype._onkeypress = function(a) { if (a.which !== this._lastKeyCodeTyped) { this._setProperty("keyCode", a.which), this._setProperty("_lastKeyCodeTyped", a.which), this._setProperty("key", String.fromCharCode(a.which)); var b = this.keyTyped || window.keyTyped; if ("function" == typeof b) {!1 === b(a) && a.preventDefault() } } }, e.prototype._onblur = function(a) { f = {} }, e.prototype.keyIsDown = function(a) { return e._validateParameters("keyIsDown", arguments), f[a] }, b.exports = e }, { "../core/core": 21 }],
        38: [function(a, b, c) { "use strict";

            function d(a, b, c, d) { d && !d.clientX && (d.touches ? d = d.touches[0] : d.changedTouches && (d = d.changedTouches[0])); var e = a.getBoundingClientRect(),
                    f = a.scrollWidth / b,
                    g = a.scrollHeight / c; return { x: (d.clientX - e.left) / f, y: (d.clientY - e.top) / g, winX: d.clientX, winY: d.clientY, id: d.identifier } } var e = a("../core/core"),
                f = a("../core/constants");
            e.prototype._hasMouseInteracted = !1, e.prototype.mouseX = 0, e.prototype.mouseY = 0, e.prototype.pmouseX = 0, e.prototype.pmouseY = 0, e.prototype.winMouseX = 0, e.prototype.winMouseY = 0, e.prototype.pwinMouseX = 0, e.prototype.pwinMouseY = 0, e.prototype.mouseButton = 0, e.prototype.mouseIsPressed = !1, e.prototype._updateNextMouseCoords = function(a) { if (null !== this._curElement && (!a.touches || a.touches.length > 0)) { var b = d(this._curElement.elt, this.width, this.height, a);
                    this._setProperty("mouseX", b.x), this._setProperty("mouseY", b.y), this._setProperty("winMouseX", b.winX), this._setProperty("winMouseY", b.winY) }
                this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0)) }, e.prototype._updateMouseCoords = function() { this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY) }, e.prototype._setMouseButton = function(a) { 1 === a.button ? this._setProperty("mouseButton", f.CENTER) : 2 === a.button ? this._setProperty("mouseButton", f.RIGHT) : this._setProperty("mouseButton", f.LEFT) }, e.prototype._onmousemove = function(a) { var b = this._isGlobal ? window : this;
                this._updateNextMouseCoords(a), this.mouseIsPressed ? "function" == typeof b.mouseDragged ? !1 === b.mouseDragged(a) && a.preventDefault() : "function" == typeof b.touchMoved && !1 === b.touchMoved(a) && a.preventDefault() : "function" == typeof b.mouseMoved && !1 === b.mouseMoved(a) && a.preventDefault() }, e.prototype._onmousedown = function(a) { var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !0), this._setMouseButton(a), this._updateNextMouseCoords(a), "function" == typeof b.mousePressed ? !1 === b.mousePressed(a) && a.preventDefault() : "function" == typeof b.touchStarted && !1 === b.touchStarted(a) && a.preventDefault() }, e.prototype._onmouseup = function(a) { var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !1), "function" == typeof b.mouseReleased ? !1 === b.mouseReleased(a) && a.preventDefault() : "function" == typeof b.touchEnded && !1 === b.touchEnded(a) && a.preventDefault() }, e.prototype._ondragend = e.prototype._onmouseup, e.prototype._ondragover = e.prototype._onmousemove, e.prototype._onclick = function(a) { var b = this._isGlobal ? window : this; if ("function" == typeof b.mouseClicked) {!1 === b.mouseClicked(a) && a.preventDefault() } }, e.prototype._ondblclick = function(a) { var b = this._isGlobal ? window : this; if ("function" == typeof b.doubleClicked) {!1 === b.doubleClicked(a) && a.preventDefault() } }, e.prototype._onwheel = function(a) { var b = this._isGlobal ? window : this; if ("function" == typeof b.mouseWheel) { a.delta = a.deltaY;!1 === b.mouseWheel(a) && a.preventDefault() } }, b.exports = e }, { "../core/constants": 20, "../core/core": 21 }],
        39: [function(a, b, c) { "use strict";

            function d(a, b, c, d, e) { e = e || 0; var f = a.getBoundingClientRect(),
                    g = a.scrollWidth / b,
                    h = a.scrollHeight / c,
                    i = d.touches[e] || d.changedTouches[e]; return { x: (i.clientX - f.left) / g, y: (i.clientY - f.top) / h, winX: i.clientX, winY: i.clientY, id: i.identifier } } var e = a("../core/core");
            e.prototype.touches = [], e.prototype._updateTouchCoords = function(a) { if (null !== this._curElement) { for (var b = [], c = 0; c < a.touches.length; c++) b[c] = d(this._curElement.elt, this.width, this.height, a, c);
                    this._setProperty("touches", b) } }, e.prototype._ontouchstart = function(a) { var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !0), this._updateTouchCoords(a), this._updateNextMouseCoords(a), "function" == typeof b.touchStarted ? !1 === b.touchStarted(a) && a.preventDefault() : "function" == typeof b.mousePressed && !1 === b.mousePressed(a) && a.preventDefault() }, e.prototype._ontouchmove = function(a) { var b = this._isGlobal ? window : this;
                this._updateTouchCoords(a), this._updateNextMouseCoords(a), "function" == typeof b.touchMoved ? !1 === b.touchMoved(a) && a.preventDefault() : "function" == typeof b.mouseDragged && !1 === b.mouseDragged(a) && a.preventDefault() }, e.prototype._ontouchend = function(a) { this._setProperty("mouseIsPressed", !1), this._updateTouchCoords(a), this._updateNextMouseCoords(a); var b = this._isGlobal ? window : this; "function" == typeof b.touchEnded ? !1 === b.touchEnded(a) && a.preventDefault() : "function" == typeof b.mouseReleased && !1 === b.mouseReleased(a) && a.preventDefault() }, b.exports = e }, { "../core/core": 21 }],
        40: [function(a, b, c) { "use strict";

            function d(a) { var b = 3.5 * a | 0; if (b = b < 1 ? 1 : b < 248 ? b : 248, g !== b) { g = b, h = 1 + g << 1, i = new Int32Array(h), j = new Array(h); for (var c = 0; c < h; c++) j[c] = new Int32Array(256); for (var d, e, f, k, l = 1, m = b - 1; l < b; l++) { i[b + l] = i[m] = e = m * m, f = j[b + l], k = j[m--]; for (var n = 0; n < 256; n++) f[n] = k[n] = e * n }
                    d = i[b] = b * b, f = j[b]; for (var o = 0; o < 256; o++) f[o] = d * o } }

            function e(a, b) { for (var c = f._toPixels(a), e = a.width, k = a.height, l = e * k, m = new Int32Array(l), n = 0; n < l; n++) m[n] = f._getARGB(c, n); var o, p, q, r, s, t, u, v, w, x, y = new Int32Array(l),
                    z = new Int32Array(l),
                    A = new Int32Array(l),
                    B = new Int32Array(l),
                    C = 0;
                d(b); var D, E, F, G; for (E = 0; E < k; E++) { for (D = 0; D < e; D++) { if (r = q = p = s = o = 0, (t = D - g) < 0) x = -t, t = 0;
                        else { if (t >= e) break;
                            x = 0 } for (F = x; F < h && !(t >= e); F++) { var H = m[t + C];
                            G = j[F], s += G[(-16777216 & H) >>> 24], p += G[(16711680 & H) >> 16], q += G[(65280 & H) >> 8], r += G[255 & H], o += i[F], t++ }
                        u = C + D, y[u] = s / o, z[u] = p / o, A[u] = q / o, B[u] = r / o }
                    C += e } for (C = 0, v = -g, w = v * e, E = 0; E < k; E++) { for (D = 0; D < e; D++) { if (r = q = p = s = o = 0, v < 0) x = u = -v, t = D;
                        else { if (v >= k) break;
                            x = 0, u = v, t = D + w } for (F = x; F < h && !(u >= k); F++) G = j[F], s += G[y[t]], p += G[z[t]], q += G[A[t]], r += G[B[t]], o += i[F], u++, t += e;
                        m[D + C] = s / o << 24 | p / o << 16 | q / o << 8 | r / o }
                    C += e, w += e, v++ }
                f._setPixels(c, m) } var f = {};
            f._toPixels = function(a) { return a instanceof ImageData ? a.data : a.getContext("2d").getImageData(0, 0, a.width, a.height).data }, f._getARGB = function(a, b) { var c = 4 * b; return a[c + 3] << 24 & 4278190080 | a[c] << 16 & 16711680 | a[c + 1] << 8 & 65280 | 255 & a[c + 2] }, f._setPixels = function(a, b) { for (var c = 0, d = 0, e = a.length; d < e; d++) c = 4 * d, a[c + 0] = (16711680 & b[d]) >>> 16, a[c + 1] = (65280 & b[d]) >>> 8, a[c + 2] = 255 & b[d], a[c + 3] = (4278190080 & b[d]) >>> 24 }, f._toImageData = function(a) { return a instanceof ImageData ? a : a.getContext("2d").getImageData(0, 0, a.width, a.height) }, f._createImageData = function(a, b) { return f._tmpCanvas = document.createElement("canvas"), f._tmpCtx = f._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(a, b) }, f.apply = function(a, b, c) { var d = a.getContext("2d"),
                    e = d.getImageData(0, 0, a.width, a.height),
                    f = b(e, c);
                f instanceof ImageData ? d.putImageData(f, 0, 0, 0, 0, a.width, a.height) : d.putImageData(e, 0, 0, 0, 0, a.width, a.height) }, f.threshold = function(a, b) { var c = f._toPixels(a);
                void 0 === b && (b = .5); for (var d = Math.floor(255 * b), e = 0; e < c.length; e += 4) { var g, h = c[e],
                        i = c[e + 1],
                        j = c[e + 2],
                        k = .2126 * h + .7152 * i + .0722 * j;
                    g = k >= d ? 255 : 0, c[e] = c[e + 1] = c[e + 2] = g } }, f.gray = function(a) { for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) { var d = b[c],
                        e = b[c + 1],
                        g = b[c + 2],
                        h = .2126 * d + .7152 * e + .0722 * g;
                    b[c] = b[c + 1] = b[c + 2] = h } }, f.opaque = function(a) { for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) b[c + 3] = 255; return b }, f.invert = function(a) { for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) b[c] = 255 - b[c], b[c + 1] = 255 - b[c + 1], b[c + 2] = 255 - b[c + 2] }, f.posterize = function(a, b) { var c = f._toPixels(a); if (b < 2 || b > 255) throw new Error("Level must be greater than 2 and less than 255 for posterize"); for (var d = b - 1, e = 0; e < c.length; e += 4) { var g = c[e],
                        h = c[e + 1],
                        i = c[e + 2];
                    c[e] = 255 * (g * b >> 8) / d, c[e + 1] = 255 * (h * b >> 8) / d, c[e + 2] = 255 * (i * b >> 8) / d } }, f.dilate = function(a) { for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;)
                    for (b = u, c = u + a.width; u < c;) d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q > g && (e = m, g = q), p > g && (e = l, g = p), r > g && (e = n, g = r), s > g && (e = o, g = s), w[u++] = e;
                f._setPixels(t, w) }, f.erode = function(a) { for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;)
                    for (b = u, c = u + a.width; u < c;) d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q < g && (e = m, g = q), p < g && (e = l, g = p), r < g && (e = n, g = r), s < g && (e = o, g = s), w[u++] = e;
                f._setPixels(t, w) }; var g, h, i, j;
            f.blur = function(a, b) { e(a, b) }, b.exports = f }, {}],
        41: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = [];
            d.prototype.createImage = function(a, b) { return d._validateParameters("createImage", arguments), new d.Image(a, b) }, d.prototype.saveCanvas = function(a, b, c) { d._validateParameters("saveCanvas", arguments), a instanceof d.Element ? a = a.elt : a instanceof HTMLCanvasElement || (b = a, c = b, a = this._curElement && this._curElement.elt), c = c || d.prototype._checkFileExtension(b, c)[1] || "png"; var e; switch (c) { default: e = "image/png"; break;
                    case "jpeg":
                            case "jpg":
                            e = "image/jpeg" }
                a.toBlob(function(a) { d.prototype.downloadFile(a, b, c) }, e) }, d.prototype.saveFrames = function(a, b, c, f, g) { d._validateParameters("saveFrames", arguments); var h = c || 3;
                h = d.prototype.constrain(h, 0, 15), h *= 1e3; var i = f || 15;
                i = d.prototype.constrain(i, 0, 22); var j = 0,
                    k = d.prototype._makeFrame,
                    l = this._curElement.elt,
                    m = setInterval(function() { k(a + j, b, l), j++ }, 1e3 / i);
                setTimeout(function() { if (clearInterval(m), g) g(e);
                    else
                        for (var a = 0; a < e.length; a++) { var b = e[a];
                            d.prototype.downloadFile(b.imageData, b.filename, b.ext) }
                    e = [] }, h + .01) }, d.prototype._makeFrame = function(a, b, c) { var d;
                d = this ? this._curElement.elt : c; var f; if (b) switch (b.toLowerCase()) {
                    case "png":
                        f = "image/png"; break;
                    case "jpeg":
                    case "jpg":
                        f = "image/jpeg"; break;
                    default:
                        f = "image/png" } else b = "png", f = "image/png"; var g = d.toDataURL(f);
                g = g.replace(f, "image/octet-stream"); var h = {};
                h.imageData = g, h.filename = a, h.ext = b, e.push(h) }, b.exports = d }, { "../core/core": 21 }],
        42: [function(a, b, c) { "use strict";

            function d(a, b) { return a > 0 && a < b ? a : b } var e = a("../core/core"),
                f = a("./filters"),
                g = a("../core/canvas"),
                h = a("../core/constants");
            a("../core/error_helpers"), e.prototype.loadImage = function(a, b, c) { e._validateParameters("loadImage", arguments); var d = new Image,
                    f = new e.Image(1, 1, this),
                    g = this; return d.onload = function() { f.width = f.canvas.width = d.width, f.height = f.canvas.height = d.height, f.drawingContext.drawImage(d, 0, 0), f.modified = !0, "function" == typeof b && b(f), g._decrementPreload() }, d.onerror = function(a) { e._friendlyFileLoadError(0, d.src), "function" == typeof c && c(a) }, 0 !== a.indexOf("data:image/") && (d.crossOrigin = "Anonymous"), d.src = a, f }, e.prototype.image = function(a, b, c, f, h, i, j, k, l) { e._validateParameters("image", arguments); var m = a.width,
                    n = a.height;
                a.elt && a.elt.videoWidth && !a.canvas && (m = a.elt.videoWidth, n = a.elt.videoHeight); var o = b,
                    p = c,
                    q = f || m,
                    r = h || n,
                    s = i || 0,
                    t = j || 0,
                    u = k || m,
                    v = l || n;
                u = d(u, m), v = d(v, n); var w = 1;
                a.elt && !a.canvas && a.elt.style.width && (w = a.elt.videoWidth && !f ? a.elt.videoWidth : a.elt.width, w /= parseInt(a.elt.style.width, 10)), s *= w, t *= w, v *= w, u *= w; var x = g.modeAdjust(o, p, q, r, this._renderer._imageMode);
                this._renderer.image(a, s, t, u, v, x.x, x.y, x.w, x.h) }, e.prototype.tint = function() { e._validateParameters("tint", arguments); var a = this.color.apply(this, arguments);
                this._renderer._tint = a.levels }, e.prototype.noTint = function() { this._renderer._tint = null }, e.prototype._getTintedImageCanvas = function(a) { if (!a.canvas) return a; var b = f._toPixels(a.canvas),
                    c = document.createElement("canvas");
                c.width = a.canvas.width, c.height = a.canvas.height; for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), g = e.data, h = 0; h < b.length; h += 4) { var i = b[h],
                        j = b[h + 1],
                        k = b[h + 2],
                        l = b[h + 3];
                    g[h] = i * this._renderer._tint[0] / 255, g[h + 1] = j * this._renderer._tint[1] / 255, g[h + 2] = k * this._renderer._tint[2] / 255, g[h + 3] = l * this._renderer._tint[3] / 255 } return d.putImageData(e, 0, 0), c }, e.prototype.imageMode = function(a) { e._validateParameters("imageMode", arguments), a !== h.CORNER && a !== h.CORNERS && a !== h.CENTER || (this._renderer._imageMode = a) }, b.exports = e }, { "../core/canvas": 19, "../core/constants": 20, "../core/core": 21, "../core/error_helpers": 24, "./filters": 40 }],
        43: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("./filters");
            d.Image = function(a, b) { this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), this._pixelDensity = 1, this._modified = !1, this.pixels = [], this.name = "p5.Image" }, d.Image.prototype._setProperty = function(a, b) { this[a] = b, this.setModified(!0) }, d.Image.prototype.loadPixels = function() { d.Renderer2D.prototype.loadPixels.call(this), this.setModified(!0) }, d.Image.prototype.updatePixels = function(a, b, c, e) { d.Renderer2D.prototype.updatePixels.call(this, a, b, c, e), this.setModified(!0) }, d.Image.prototype.get = function(a, b, c, e) { return d.Renderer2D.prototype.get.call(this, a, b, c, e) }, d.Image.prototype.set = function(a, b, c) { d.Renderer2D.prototype.set.call(this, a, b, c), this.setModified(!0) }, d.Image.prototype.resize = function(a, b) { 0 === a && 0 === b ? (a = this.canvas.width, b = this.canvas.height) : 0 === a ? a = this.canvas.width * b / this.canvas.height : 0 === b && (b = this.canvas.height * a / this.canvas.width), a = Math.floor(a), b = Math.floor(b); var c = document.createElement("canvas");
                c.width = a, c.height = b, c.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, c.width, c.height), this.canvas.width = this.width = a, this.canvas.height = this.height = b, this.drawingContext.drawImage(c, 0, 0, a, b, 0, 0, a, b), this.pixels.length > 0 && this.loadPixels(), this.setModified(!0) }, d.Image.prototype.copy = function() { var a, b, c, e, f, g, h, i, j; if (9 === arguments.length) a = arguments[0], b = arguments[1], c = arguments[2], e = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], i = arguments[7], j = arguments[8];
                else { if (8 !== arguments.length) throw new Error("Signature not supported");
                    a = this, b = arguments[0], c = arguments[1], e = arguments[2], f = arguments[3], g = arguments[4], h = arguments[5], i = arguments[6], j = arguments[7] }
                d.Renderer2D._copyHelper(this, a, b, c, e, f, g, h, i, j) }, d.Image.prototype.mask = function(a) { void 0 === a && (a = this); var b = this.drawingContext.globalCompositeOperation,
                    c = 1;
                a instanceof d.Renderer && (c = a._pInst._pixelDensity); var e = [a, 0, 0, c * a.width, c * a.height, 0, 0, this.width, this.height];
                this.drawingContext.globalCompositeOperation = "destination-in", d.Image.prototype.copy.apply(this, e), this.drawingContext.globalCompositeOperation = b, this.setModified(!0) }, d.Image.prototype.filter = function(a, b) { e.apply(this.canvas, e[a.toLowerCase()], b), this.setModified(!0) }, d.Image.prototype.blend = function() { d.prototype.blend.apply(this, arguments), this.setModified(!0) }, d.Image.prototype.setModified = function(a) { this._modified = a }, d.Image.prototype.isModified = function() { return this._modified }, d.Image.prototype.save = function(a, b) { d.prototype.saveCanvas(this.canvas, a, b) }, b.exports = d.Image }, { "../core/core": 21, "./filters": 40 }],
        44: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("./filters");
            a("../color/p5.Color"), d.prototype.pixels = [], d.prototype.blend = function() { this._renderer ? this._renderer.blend.apply(this._renderer, arguments) : d.Renderer2D.prototype.blend.apply(this, arguments) }, d.prototype.copy = function() { d._validateParameters("copy", arguments), d.Renderer2D.prototype.copy.apply(this._renderer, arguments) }, d.prototype.filter = function(a, b) { void 0 !== this.canvas ? e.apply(this.canvas, e[a.toLowerCase()], b) : e.apply(this.elt, e[a.toLowerCase()], b) }, d.prototype.get = function(a, b, c, d) { return this._renderer.get(a, b, c, d) }, d.prototype.loadPixels = function() { this._renderer.loadPixels() }, d.prototype.set = function(a, b, c) { this._renderer.set(a, b, c) }, d.prototype.updatePixels = function(a, b, c, d) { 0 !== this.pixels.length && this._renderer.updatePixels(a, b, c, d) }, b.exports = d }, { "../color/p5.Color": 15, "../core/core": 21, "./filters": 40 }],
        45: [function(a, b, c) {
            "use strict";

            function d(a, b) { var c = {}; if (void 0 === (b = b || []))
                    for (var d = 0; d < a.length; d++) b[d.toString()] = d; for (var e = 0; e < b.length; e++) { var f = b[e],
                        g = a[e];
                    c[f] = g } return c }

            function e(a) { return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") }

            function f(a, b) { b && !0 !== b && "true" !== b || (b = ""), a || (a = "untitled"); var c = ""; return a && a.indexOf(".") > -1 && (c = a.split(".").pop()), b && c !== b && (c = b, a = a + "." + c), [a, c] }

            function g(a) { document.body.removeChild(a.target) }
            var h = a("../core/core");
            a("whatwg-fetch"), a("es6-promise").polyfill();
            var i = a("fetch-jsonp");
            a("../core/error_helpers"), h.prototype.loadJSON = function() { for (var a, b, c, d = arguments[0], e = {}, f = "json", g = 1; g < arguments.length; g++) { var h = arguments[g]; "string" == typeof h ? "jsonp" !== h && "json" !== h || (f = h) : "function" == typeof h ? a ? b = h : a = h : "object" == typeof h && h.hasOwnProperty("jsonpCallback") && (f = "jsonp", c = h) } var i = this; return this.httpDo(d, "GET", c, f, function(b) { for (var c in b) e[c] = b[c];
                        void 0 !== a && a(b), i._decrementPreload() }, b), e }, h.prototype.loadStrings = function() { for (var a, b, c = [], d = 1; d < arguments.length; d++) { var e = arguments[d]; "function" == typeof e && (void 0 === a ? a = e : void 0 === b && (b = e)) } var f = this; return h.prototype.httpDo.call(this, arguments[0], "GET", "text", function(b) { var d = b.match(/[^\r\n]+/g); for (var e in d) c[e] = d[e];
                        void 0 !== a && a(c), f._decrementPreload() }, b), c }, h.prototype.loadTable = function(a) { var b, c, e = [],
                        f = !1,
                        g = a.substring(a.lastIndexOf(".") + 1, a.length),
                        i = ",",
                        j = !1; "tsv" === g && (i = "\t"); for (var k = 1; k < arguments.length; k++)
                        if ("function" == typeof arguments[k]) void 0 === b ? b = arguments[k] : void 0 === c && (c = arguments[k]);
                        else if ("string" == typeof arguments[k])
                        if (e.push(arguments[k]), "header" === arguments[k] && (f = !0), "csv" === arguments[k]) { if (j) throw new Error("Cannot set multiple separator types.");
                            i = ",", j = !0 } else if ("tsv" === arguments[k]) { if (j) throw new Error("Cannot set multiple separator types.");
                        i = "\t", j = !0 } var l = new h.Table,
                        m = this; return this.httpDo(a, "GET", "text", function(a) { for (var c, e = {}, g = 0, j = 1, n = 2, o = 4, p = '"', q = "\r", r = "\n", s = [], t = 0, u = null, v = function() { e.currentState = g, e.token = "" }, w = function() { u.push(e.token), v() }, x = function() { e.escaped = !1, u = [], v() }, y = function() { e.currentState = o, s.push(u), u = null };;) { if (null == (c = a[t++])) { if (e.escaped) throw new Error("Unclosed quote in file."); if (u) { w(), y(); break } } if (null === u && x(), e.currentState === g) { if (c === p) { e.escaped = !0, e.currentState = j; continue }
                                e.currentState = j } if (e.currentState === j && e.escaped)
                                if (c === p) a[t] === p ? (e.token += p, t++) : (e.escaped = !1, e.currentState = n);
                                else { if (c === q) continue;
                                    e.token += c }
                            else c === q ? (a[t] === r && t++, w(), y()) : c === r ? (w(), y()) : c === i ? w() : e.currentState === j && (e.token += c) } if (f) l.columns = s.shift();
                        else
                            for (k = 0; k < s[0].length; k++) l.columns[k] = "null"; var z; for (k = 0; k < s.length; k++)(1 !== s[k].length || "undefined" !== s[k][0] && "" !== s[k][0]) && (z = new h.TableRow, z.arr = s[k], z.obj = d(s[k], l.columns), l.addRow(z)); "function" == typeof b && b(l), m._decrementPreload() }, function(b) { if (h._friendlyFileLoadError(2, a), !c) throw b;
                        c(b) }), l }, h.prototype.parseXML = function(a) { var b, c = new h.XML; if (a.children.length) { for (b = 0; b < a.children.length; b++) { var d = parseXML(a.children[b]);
                            c.addChild(d) }
                        c.setName(a.nodeName), c._setCont(a.textContent), c._setAttributes(a); for (var e = 0; e < c.children.length; e++) c.children[e].parent = c; return c } return c.setName(a.nodeName), c._setCont(a.textContent), c._setAttributes(a), c }, h.prototype.loadXML = function() { for (var a, b, c = {}, d = 1; d < arguments.length; d++) { var e = arguments[d]; "function" == typeof e && (void 0 === a ? a = e : void 0 === b && (b = e)) } var f = this; return this.httpDo(arguments[0], "GET", "xml", function(b) { for (var d in b) c[d] = b[d];
                        void 0 !== a && a(c), f._decrementPreload() }, b), c }, h.prototype.httpGet = function() { var a = Array.prototype.slice.call(arguments);
                    a.splice(1, 0, "GET"), h.prototype.httpDo.apply(this, a) }, h.prototype.httpPost = function() { var a = Array.prototype.slice.call(arguments);
                    a.splice(1, 0, "POST"), h.prototype.httpDo.apply(this, a) }, h.prototype.httpDo = function() { for (var a, b, c, d = "", e = {}, f = 0, g = "text/plain", h = arguments.length - 1; h > 0 && "function" == typeof arguments[h]; h--) f++; if (2 == arguments.length - f && "string" == typeof arguments[0] && "object" == typeof arguments[1]) c = new Request(arguments[0], arguments[1]), a = arguments[2], b = arguments[3], "" === d && (d = -1 !== c.url.indexOf("json") ? "json" : -1 !== c.url.indexOf("xml") ? "xml" : "text");
                    else { for (var j, k = arguments[0], l = "GET", m = 1; m < arguments.length; m++) { var n = arguments[m]; if ("string" == typeof n) "GET" === n || "POST" === n || "PUT" === n || "DELETE" === n ? l = n : "json" === n || "jsonp" === n || "xml" === n || "text" === n ? d = n : j = n;
                            else if ("number" == typeof n) j = n.toString();
                            else if ("object" == typeof n)
                                if (n.hasOwnProperty("jsonpCallback"))
                                    for (var o in n) e[o] = n[o];
                                else j = JSON.stringify(n), g = "application/json";
                            else "function" == typeof n && (a ? b = n : a = n) } "" === d && (d = -1 !== k.indexOf("json") ? "json" : -1 !== k.indexOf("xml") ? "xml" : "text"), c = new Request(k, { method: l, mode: "cors", body: j, headers: new Headers({ "Content-Type": g }) }) } "jsonp" === d ? i(arguments[0], e).then(function(a) { if (a.ok) return a.json(); throw a }).then(function(b) { a(b) }).catch(function(a) { if (!b) throw a;
                        b(a) }) : fetch(c).then(function(a) { if (a.ok) return "json" === d ? a.json() : a.text(); throw a }).then(function(b) { if ("xml" === d) { b = (new DOMParser).parseFromString(b, "text/xml"), b = parseXML(b.documentElement) }
                        a(b) }).catch(function(a, c) { if (!b) throw a;
                        b(a) }) }, window.URL = window.URL || window.webkitURL, h.prototype._pWriters = [], h.prototype.createWriter = function(a, b) { var c; for (var d in h.prototype._pWriters)
                        if (h.prototype._pWriters[d].name === a) return c = new h.PrintWriter(a + window.millis(), b), h.prototype._pWriters.push(c), c;
                    return c = new h.PrintWriter(a, b), h.prototype._pWriters.push(c), c }, h.PrintWriter = function(a, b) { var c = this;
                    this.name = a, this.content = "", this.write = function(a) { this.content += a }, this.print = function(a) { this.content += a + "\n" }, this.flush = function() { this.content = "" }, this.close = function() { var d = [];
                        d.push(this.content), h.prototype.writeFile(d, a, b); for (var e in h.prototype._pWriters) h.prototype._pWriters[e].name === this.name && h.prototype._pWriters.splice(e, 1);
                        c.flush(), c = {} } }, h.prototype.save = function(a, b, c) { var d = arguments,
                        e = this._curElement.elt; if (0 === d.length) return void h.prototype.saveCanvas(e); if (d[0] instanceof h.Renderer || d[0] instanceof h.Graphics) return void h.prototype.saveCanvas(d[0].elt, d[1], d[2]); if (1 === d.length && "string" == typeof d[0]) h.prototype.saveCanvas(e, d[0]);
                    else { switch (f(d[1], d[2])[1]) {
                            case "json":
                                return void h.prototype.saveJSON(d[0], d[1], d[2]);
                            case "txt":
                                return void h.prototype.saveStrings(d[0], d[1], d[2]);
                            default:
                                d[0] instanceof Array ? h.prototype.saveStrings(d[0], d[1], d[2]) : d[0] instanceof h.Table ? h.prototype.saveTable(d[0], d[1], d[2]) : d[0] instanceof h.Image ? h.prototype.saveCanvas(d[0].canvas, d[1]) : d[0] instanceof h.SoundFile && h.prototype.saveSound(d[0], d[1], d[2], d[3]) } } }, h.prototype.saveJSON = function(a, b, c) { var d;
                    d = c ? JSON.stringify(a) : JSON.stringify(a, void 0, 2), this.saveStrings(d.split("\n"), b, "json") }, h.prototype.saveJSONObject = h.prototype.saveJSON, h.prototype.saveJSONArray = h.prototype.saveJSON, h.prototype.saveStrings = function(a, b, c) { for (var d = c || "txt", e = this.createWriter(b, d), f = 0; f < a.length; f++) a.length, e.print(a[f]);
                    e.close(), e.flush() }, h.prototype.saveTable = function(a, b, c) { var d;
                    d = void 0 === c ? b.substring(b.lastIndexOf(".") + 1, b.length) : c; var f = this.createWriter(b, d),
                        g = a.columns,
                        h = ","; if ("tsv" === d && (h = "\t"), "html" !== d) { if ("0" !== g[0]) { for (var i = 0; i < g.length; i++) i < g.length - 1 ? f.write(g[i] + h) : f.write(g[i]);
                            f.write("\n") } for (var j = 0; j < a.rows.length; j++) { var k; for (k = 0; k < a.rows[j].arr.length; k++) k < a.rows[j].arr.length - 1 ? f.write(a.rows[j].arr[k] + h) : (a.rows.length, f.write(a.rows[j].arr[k]));
                            f.write("\n") } } else { f.print("<html>"), f.print("<head>"); var l = '  <meta http-equiv="content-type" content'; if (l += '="text/html;charset=utf-8" />', f.print(l), f.print("</head>"), f.print("<body>"), f.print("  <table>"), "0" !== g[0]) { f.print("    <tr>"); for (var m = 0; m < g.length; m++) { var n = e(g[m]);
                                f.print("      <td>" + n), f.print("      </td>") }
                            f.print("    </tr>") } for (var o = 0; o < a.rows.length; o++) { f.print("    <tr>"); for (var p = 0; p < a.columns.length; p++) { var q = a.rows[o].getString(p),
                                    r = e(q);
                                f.print("      <td>" + r), f.print("      </td>") }
                            f.print("    </tr>") }
                        f.print("  </table>"), f.print("</body>"), f.print("</html>") }
                    f.close(), f.flush() },
                h.prototype.writeFile = function(a, b, c) { var d = "application/octet-stream";
                    h.prototype._isSafari() && (d = "text/plain"); var e = new Blob(a, { type: d });
                    h.prototype.downloadFile(e, b, c) }, h.prototype.downloadFile = function(b, c, d) { var e = f(c, d),
                        i = e[0]; if (b instanceof Blob) { return void a("file-saver").saveAs(b, i) } var j = document.createElement("a"); if (j.href = b, j.download = i, j.onclick = function(a) { g(a), a.stopPropagation() }, j.style.display = "none", document.body.appendChild(j), h.prototype._isSafari()) { var k = "Hello, Safari user! To download this file...\n";
                        k += "1. Go to File --\x3e Save As.\n", k += '2. Choose "Page Source" as the Format.\n', k += '3. Name it with this extension: ."' + e[1] + '"', alert(k) }
                    j.click() }, h.prototype._checkFileExtension = f, h.prototype._isSafari = function() { return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 }, b.exports = h
        }, { "../core/core": 21, "../core/error_helpers": 24, "es6-promise": 4, "fetch-jsonp": 5, "file-saver": 6, "whatwg-fetch": 11 }],
        46: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.Table = function(a) { this.columns = [], this.rows = [], this.name = "p5.Table" }, d.Table.prototype.addRow = function(a) { var b = a || new d.TableRow; if (void 0 === b.arr || void 0 === b.obj) throw "invalid TableRow: " + b; return b.table = this, this.rows.push(b), b }, d.Table.prototype.removeRow = function(a) { this.rows[a].table = null; var b = this.rows.splice(a + 1, this.rows.length);
                this.rows.pop(), this.rows = this.rows.concat(b) }, d.Table.prototype.getRow = function(a) { return this.rows[a] }, d.Table.prototype.getRows = function() { return this.rows }, d.Table.prototype.findRow = function(a, b) { if ("string" == typeof b) { for (var c = 0; c < this.rows.length; c++)
                        if (this.rows[c].obj[b] === a) return this.rows[c] } else
                    for (var d = 0; d < this.rows.length; d++)
                        if (this.rows[d].arr[b] === a) return this.rows[d]; return null }, d.Table.prototype.findRows = function(a, b) { var c = []; if ("string" == typeof b)
                    for (var d = 0; d < this.rows.length; d++) this.rows[d].obj[b] === a && c.push(this.rows[d]);
                else
                    for (var e = 0; e < this.rows.length; e++) this.rows[e].arr[b] === a && c.push(this.rows[e]); return c }, d.Table.prototype.matchRow = function(a, b) { if ("number" == typeof b) { for (var c = 0; c < this.rows.length; c++)
                        if (this.rows[c].arr[b].match(a)) return this.rows[c] } else
                    for (var d = 0; d < this.rows.length; d++)
                        if (this.rows[d].obj[b].match(a)) return this.rows[d]; return null }, d.Table.prototype.matchRows = function(a, b) { var c = []; if ("number" == typeof b)
                    for (var d = 0; d < this.rows.length; d++) this.rows[d].arr[b].match(a) && c.push(this.rows[d]);
                else
                    for (var e = 0; e < this.rows.length; e++) this.rows[e].obj[b].match(a) && c.push(this.rows[e]); return c }, d.Table.prototype.getColumn = function(a) { var b = []; if ("string" == typeof a)
                    for (var c = 0; c < this.rows.length; c++) b.push(this.rows[c].obj[a]);
                else
                    for (var d = 0; d < this.rows.length; d++) b.push(this.rows[d].arr[a]); return b }, d.Table.prototype.clearRows = function() { delete this.rows, this.rows = [] }, d.Table.prototype.addColumn = function(a) { var b = a || null;
                this.columns.push(b) }, d.Table.prototype.getColumnCount = function() { return this.columns.length }, d.Table.prototype.getRowCount = function() { return this.rows.length }, d.Table.prototype.removeTokens = function(a, b) { for (var c = function(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }, d = [], e = 0; e < a.length; e++) d.push(c(a.charAt(e))); var f = new RegExp(d.join("|"), "g"); if (void 0 === b)
                    for (var g = 0; g < this.columns.length; g++)
                        for (var h = 0; h < this.rows.length; h++) { var i = this.rows[h].arr[g];
                            i = i.replace(f, ""), this.rows[h].arr[g] = i, this.rows[h].obj[this.columns[g]] = i } else if ("string" == typeof b)
                            for (var j = 0; j < this.rows.length; j++) { var k = this.rows[j].obj[b];
                                k = k.replace(f, ""), this.rows[j].obj[b] = k; var l = this.columns.indexOf(b);
                                this.rows[j].arr[l] = k } else
                                for (var m = 0; m < this.rows.length; m++) { var n = this.rows[m].arr[b];
                                    n = n.replace(f, ""), this.rows[m].arr[b] = n, this.rows[m].obj[this.columns[b]] = n } }, d.Table.prototype.trim = function(a) { var b = new RegExp(" ", "g"); if (void 0 === a)
                    for (var c = 0; c < this.columns.length; c++)
                        for (var d = 0; d < this.rows.length; d++) { var e = this.rows[d].arr[c];
                            e = e.replace(b, ""), this.rows[d].arr[c] = e, this.rows[d].obj[this.columns[c]] = e } else if ("string" == typeof a)
                            for (var f = 0; f < this.rows.length; f++) { var g = this.rows[f].obj[a];
                                g = g.replace(b, ""), this.rows[f].obj[a] = g; var h = this.columns.indexOf(a);
                                this.rows[f].arr[h] = g } else
                                for (var i = 0; i < this.rows.length; i++) { var j = this.rows[i].arr[a];
                                    j = j.replace(b, ""), this.rows[i].arr[a] = j, this.rows[i].obj[this.columns[a]] = j } }, d.Table.prototype.removeColumn = function(a) { var b, c; "string" == typeof a ? (b = a, c = this.columns.indexOf(a), console.log("string")) : (c = a, b = this.columns[a]); var d = this.columns.splice(c + 1, this.columns.length);
                this.columns.pop(), this.columns = this.columns.concat(d); for (var e = 0; e < this.rows.length; e++) { var f = this.rows[e].arr,
                        g = f.splice(c + 1, f.length);
                    f.pop(), this.rows[e].arr = f.concat(g), delete this.rows[e].obj[b] } }, d.Table.prototype.set = function(a, b, c) { this.rows[a].set(b, c) }, d.Table.prototype.setNum = function(a, b, c) { this.rows[a].setNum(b, c) }, d.Table.prototype.setString = function(a, b, c) { this.rows[a].setString(b, c) }, d.Table.prototype.get = function(a, b) { return this.rows[a].get(b) }, d.Table.prototype.getNum = function(a, b) { return this.rows[a].getNum(b) }, d.Table.prototype.getString = function(a, b) { return this.rows[a].getString(b) }, d.Table.prototype.getObject = function(a) { for (var b, c, d = {}, e = 0; e < this.rows.length; e++)
                    if (b = this.rows[e].obj, "string" == typeof a) { if (!(this.columns.indexOf(a) >= 0)) throw 'This table has no column named "' + a + '"';
                        c = b[a], d[c] = b } else d[e] = this.rows[e].obj;
                return d }, d.Table.prototype.getArray = function() { for (var a = [], b = 0; b < this.rows.length; b++) a.push(this.rows[b].arr); return a }, b.exports = d }, { "../core/core": 21 }],
        47: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.TableRow = function(a, b) { var c = [],
                    d = {};
                a && (b = b || ",", c = a.split(b)); for (var e = 0; e < c.length; e++) { var f = e,
                        g = c[e];
                    d[f] = g }
                this.arr = c, this.obj = d, this.table = null, this.name = "p5.TableRow" }, d.TableRow.prototype.set = function(a, b) { if ("string" == typeof a) { var c = this.table.columns.indexOf(a); if (!(c >= 0)) throw 'This table has no column named "' + a + '"';
                    this.obj[a] = b, this.arr[c] = b } else { if (!(a < this.table.columns.length)) throw "Column #" + a + " is out of the range of this table";
                    this.arr[a] = b; var d = this.table.columns[a];
                    this.obj[d] = b } }, d.TableRow.prototype.setNum = function(a, b) { var c = parseFloat(b);
                this.set(a, c) }, d.TableRow.prototype.setString = function(a, b) { var c = b.toString();
                this.set(a, c) }, d.TableRow.prototype.get = function(a) { return "string" == typeof a ? this.obj[a] : this.arr[a] }, d.TableRow.prototype.getNum = function(a) { var b; if (b = "string" == typeof a ? parseFloat(this.obj[a]) : parseFloat(this.arr[a]), "NaN" === b.toString()) throw "Error: " + this.obj[a] + " is NaN (Not a Number)"; return b }, d.TableRow.prototype.getString = function(a) { return "string" == typeof a ? this.obj[a].toString() : this.arr[a].toString() }, b.exports = d }, { "../core/core": 21 }],
        48: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.XML = function() { this.name = null, this.attributes = {}, this.children = [], this.parent = null, this.content = null, this.name = "p5.XML" }, d.XML.prototype.getParent = function() { return this.parent }, d.XML.prototype.getName = function() { return this.name }, d.XML.prototype.setName = function(a) { this.name = a }, d.XML.prototype.hasChildren = function() { return this.children.length > 0 }, d.XML.prototype.listChildren = function() { return this.children.map(function(a) { return a.name }) }, d.XML.prototype.getChildren = function(a) { return a ? this.children.filter(function(b) { return b.name === a }) : this.children }, d.XML.prototype.getChild = function(a) { return "string" == typeof a ? this.children.find(function(b) { return b.name === a }) : this.children[a] }, d.XML.prototype.addChild = function(a) { a instanceof d.XML && this.children.push(a) }, d.XML.prototype.removeChild = function(a) { var b = -1; if ("string" == typeof a) { for (var c = 0; c < this.children.length; c++)
                        if (this.children[c].name === a) { b = c; break } } else b = a; - 1 !== b && this.children.splice(b, 1) }, d.XML.prototype.getAttributeCount = function() { return Object.keys(this.attributes).length }, d.XML.prototype.listAttributes = function() { return Object.keys(this.attributes) }, d.XML.prototype.hasAttribute = function(a) { return !!this.attributes[a] }, d.XML.prototype.getNum = function(a, b) { return Number(this.attributes[a]) || b || 0 }, d.XML.prototype.getString = function(a, b) { return String(this.attributes[a]) || b || null }, d.XML.prototype.setAttribute = function(a, b) { this.attributes[a] && (this.attributes[a] = b) }, d.XML.prototype.getContent = function(a) { return this.content || a || null }, d.XML.prototype.setContent = function(a) { this.children.length || (this.content = a) }, d.XML.prototype._setCont = function(a) { var b;
                b = a, b = b.replace(/\s\s+/g, ","), this.content = b }, d.XML.prototype._setAttributes = function(a) { var b, c = {}; for (b = 0; b < a.attributes.length; b++) c[a.attributes[b].nodeName] = a.attributes[b].nodeValue;
                this.attributes = c }, b.exports = d }, { "../core/core": 21 }],
        49: [function(a, b, c) { "use strict";

            function d(a, b, c) { if ("function" == typeof Math.hypot) return Math.hypot.apply(null, arguments); for (var d = arguments.length, e = [], f = 0, g = 0; g < d; g++) { var h = arguments[g]; if ((h = +h) === 1 / 0 || h === -1 / 0) return 1 / 0;
                    h = Math.abs(h), h > f && (f = h), e[g] = h }
                0 === f && (f = 1); for (var i = 0, j = 0, k = 0; k < d; k++) { var l = e[k] / f,
                        m = l * l - j,
                        n = i + m;
                    j = n - i - m, i = n } return Math.sqrt(i) * f } var e = a("../core/core");
            e.prototype.abs = Math.abs, e.prototype.ceil = Math.ceil, e.prototype.constrain = function(a, b, c) { return e._validateParameters("constrain", arguments), Math.max(Math.min(a, c), b) }, e.prototype.dist = function() { return e._validateParameters("dist", arguments), 4 === arguments.length ? d(arguments[2] - arguments[0], arguments[3] - arguments[1]) : 6 === arguments.length ? d(arguments[3] - arguments[0], arguments[4] - arguments[1], arguments[5] - arguments[2]) : void 0 }, e.prototype.exp = Math.exp, e.prototype.floor = Math.floor, e.prototype.lerp = function(a, b, c) { return e._validateParameters("lerp", arguments), c * (b - a) + a }, e.prototype.log = Math.log, e.prototype.mag = function(a, b) { return e._validateParameters("mag", arguments), d(a, b) }, e.prototype.map = function(a, b, c, d, f, g) { e._validateParameters("map", arguments); var h = (a - b) / (c - b) * (f - d) + d; return g ? d < f ? this.constrain(h, d, f) : this.constrain(h, f, d) : h }, e.prototype.max = function() { return e._validateParameters("max", arguments), arguments[0] instanceof Array ? Math.max.apply(null, arguments[0]) : Math.max.apply(null, arguments) }, e.prototype.min = function() { return e._validateParameters("min", arguments), arguments[0] instanceof Array ? Math.min.apply(null, arguments[0]) : Math.min.apply(null, arguments) }, e.prototype.norm = function(a, b, c) { return e._validateParameters("norm", arguments), this.map(a, b, c, 0, 1) }, e.prototype.pow = Math.pow, e.prototype.round = Math.round, e.prototype.sq = function(a) { return a * a }, e.prototype.sqrt = Math.sqrt, b.exports = e }, { "../core/core": 21 }],
        50: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.createVector = function(a, b, c) { return this instanceof d ? new d.Vector(this, arguments) : new d.Vector(a, b, c) }, b.exports = d }, { "../core/core": 21 }],
        51: [function(a, b, c) { "use strict"; var d, e = a("../core/core"),
                f = 4,
                g = 1 << f,
                h = 8,
                i = 1 << h,
                j = 4095,
                k = 4,
                l = .5,
                m = function(a) { return .5 * (1 - Math.cos(a * Math.PI)) };
            e.prototype.noise = function(a, b, c) { if (b = b || 0, c = c || 0, null == d) { d = new Array(j + 1); for (var e = 0; e < j + 1; e++) d[e] = Math.random() }
                a < 0 && (a = -a), b < 0 && (b = -b), c < 0 && (c = -c); for (var n, o, p, q, r, s = Math.floor(a), t = Math.floor(b), u = Math.floor(c), v = a - s, w = b - t, x = c - u, y = 0, z = .5, A = 0; A < k; A++) { var B = s + (t << f) + (u << h);
                    n = m(v), o = m(w), p = d[B & j], p += n * (d[B + 1 & j] - p), q = d[B + g & j], q += n * (d[B + g + 1 & j] - q), p += o * (q - p), B += i, q = d[B & j], q += n * (d[B + 1 & j] - q), r = d[B + g & j], r += n * (d[B + g + 1 & j] - r), q += o * (r - q), p += m(x) * (q - p), y += p * z, z *= l, s <<= 1, v *= 2, t <<= 1, w *= 2, u <<= 1, x *= 2, v >= 1 && (s++, v--), w >= 1 && (t++, w--), x >= 1 && (u++, x--) } return y }, e.prototype.noiseDetail = function(a, b) { a > 0 && (k = a), b > 0 && (l = b) }, e.prototype.noiseSeed = function(a) { var b = function() { var a, b, c = 4294967296,
                        d = 1664525,
                        e = 1013904223; return { setSeed: function(d) { b = a = (null == d ? Math.random() * c : d) >>> 0 }, getSeed: function() { return a }, rand: function() { return (b = (d * b + e) % c) / c } } }();
                b.setSeed(a), d = new Array(j + 1); for (var c = 0; c < j + 1; c++) d[c] = b.rand() }, b.exports = e }, { "../core/core": 21 }],
        52: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("./polargeometry"),
                f = a("../core/constants");
            d.Vector = function() { var a, b, c;
                arguments[0] instanceof d ? (this.p5 = arguments[0], a = arguments[1][0] || 0, b = arguments[1][1] || 0, c = arguments[1][2] || 0) : (a = arguments[0] || 0, b = arguments[1] || 0, c = arguments[2] || 0), this.x = a, this.y = b, this.z = c, this.name = "p5.Vector" }, d.Vector.prototype.toString = function() { return "p5.Vector Object : [" + this.x + ", " + this.y + ", " + this.z + "]" }, d.Vector.prototype.set = function(a, b, c) { return a instanceof d.Vector ? (this.x = a.x || 0, this.y = a.y || 0, this.z = a.z || 0, this) : a instanceof Array ? (this.x = a[0] || 0, this.y = a[1] || 0, this.z = a[2] || 0, this) : (this.x = a || 0, this.y = b || 0, this.z = c || 0, this) }, d.Vector.prototype.copy = function() { return this.p5 ? new d.Vector(this.p5, [this.x, this.y, this.z]) : new d.Vector(this.x, this.y, this.z) }, d.Vector.prototype.add = function(a, b, c) { return a instanceof d.Vector ? (this.x += a.x || 0, this.y += a.y || 0, this.z += a.z || 0, this) : a instanceof Array ? (this.x += a[0] || 0, this.y += a[1] || 0, this.z += a[2] || 0, this) : (this.x += a || 0, this.y += b || 0, this.z += c || 0, this) }, d.Vector.prototype.sub = function(a, b, c) { return a instanceof d.Vector ? (this.x -= a.x || 0, this.y -= a.y || 0, this.z -= a.z || 0, this) : a instanceof Array ? (this.x -= a[0] || 0, this.y -= a[1] || 0, this.z -= a[2] || 0, this) : (this.x -= a || 0, this.y -= b || 0, this.z -= c || 0, this) }, d.Vector.prototype.mult = function(a) { return "number" == typeof a && isFinite(a) ? (this.x *= a, this.y *= a, this.z *= a, this) : (console.warn("p5.Vector.prototype.mult:", "n is undefined or not a finite number"), this) }, d.Vector.prototype.div = function(a) { return "number" == typeof a && isFinite(a) ? 0 === a ? (console.warn("p5.Vector.prototype.div:", "divide by 0"), this) : (this.x /= a, this.y /= a, this.z /= a, this) : (console.warn("p5.Vector.prototype.div:", "n is undefined or not a finite number"), this) }, d.Vector.prototype.mag = function() { return Math.sqrt(this.magSq()) }, d.Vector.prototype.magSq = function() { var a = this.x,
                    b = this.y,
                    c = this.z; return a * a + b * b + c * c }, d.Vector.prototype.dot = function(a, b, c) { return a instanceof d.Vector ? this.dot(a.x, a.y, a.z) : this.x * (a || 0) + this.y * (b || 0) + this.z * (c || 0) }, d.Vector.prototype.cross = function(a) { var b = this.y * a.z - this.z * a.y,
                    c = this.z * a.x - this.x * a.z,
                    e = this.x * a.y - this.y * a.x; return this.p5 ? new d.Vector(this.p5, [b, c, e]) : new d.Vector(b, c, e) }, d.Vector.prototype.dist = function(a) { return a.copy().sub(this).mag() }, d.Vector.prototype.normalize = function() { return 0 === this.mag() ? this : this.div(this.mag()) }, d.Vector.prototype.limit = function(a) { var b = this.magSq(); return b > a * a && this.div(Math.sqrt(b)).mult(a), this }, d.Vector.prototype.setMag = function(a) { return this.normalize().mult(a) }, d.Vector.prototype.heading = function() { var a = Math.atan2(this.y, this.x); return this.p5 ? this.p5._angleMode === f.RADIANS ? a : e.radiansToDegrees(a) : a }, d.Vector.prototype.rotate = function(a) { var b = this.heading() + a;
                this.p5 && this.p5._angleMode === f.DEGREES && (b = e.degreesToRadians(b)); var c = this.mag(); return this.x = Math.cos(b) * c, this.y = Math.sin(b) * c, this }, d.Vector.prototype.angleBetween = function(a) { var b = this.dot(a) / (this.mag() * a.mag()),
                    c = Math.acos(Math.min(1, Math.max(-1, b))); return this.p5 && this.p5._angleMode === f.DEGREES && (c = e.radiansToDegrees(c)), c }, d.Vector.prototype.lerp = function(a, b, c, e) { return a instanceof d.Vector ? this.lerp(a.x, a.y, a.z, b) : (this.x += (a - this.x) * e || 0, this.y += (b - this.y) * e || 0, this.z += (c - this.z) * e || 0, this) }, d.Vector.prototype.array = function() { return [this.x || 0, this.y || 0, this.z || 0] }, d.Vector.prototype.equals = function(a, b, c) { var e, f, g; return a instanceof d.Vector ? (e = a.x || 0, f = a.y || 0, g = a.z || 0) : a instanceof Array ? (e = a[0] || 0, f = a[1] || 0, g = a[2] || 0) : (e = a || 0, f = b || 0, g = c || 0), this.x === e && this.y === f && this.z === g }, d.Vector.fromAngle = function(a, b) { return this.p5 && this.p5._angleMode === f.DEGREES && (a = e.degreesToRadians(a)), void 0 === b && (b = 1), this.p5 ? new d.Vector(this.p5, [b * Math.cos(a), b * Math.sin(a), 0]) : new d.Vector(b * Math.cos(a), b * Math.sin(a), 0) }, d.Vector.fromAngles = function(a, b, c) { this.p5 && this.p5._angleMode === f.DEGREES && (a = e.degreesToRadians(a), b = e.degreesToRadians(b)), void 0 === c && (c = 1); var g = Math.cos(b),
                    h = Math.sin(b),
                    i = Math.cos(a),
                    j = Math.sin(a); return this.p5 ? new new d.Vector(this.p5, c * j * h, -c * i, c * j * g) : new d.Vector(c * j * h, -c * i, c * j * g) }, d.Vector.random2D = function() { var a; return a = this.p5 ? this.p5._angleMode === f.DEGREES ? this.p5.random(360) : this.p5.random(f.TWO_PI) : Math.random() * f.TWO_PI, this.fromAngle(a) }, d.Vector.random3D = function() { var a, b;
                this.p5 ? (a = this.p5.random(0, f.TWO_PI), b = this.p5.random(-1, 1)) : (a = Math.random() * f.TWO_PI, b = 2 * Math.random() - 1); var c = Math.sqrt(1 - b * b),
                    e = c * Math.cos(a),
                    g = c * Math.sin(a); return this.p5 ? new d.Vector(this.p5, [e, g, b]) : new d.Vector(e, g, b) }, d.Vector.add = function(a, b, c) { return c ? c.set(a) : c = a.copy(), c.add(b), c }, d.Vector.sub = function(a, b, c) { return c ? c.set(a) : c = a.copy(), c.sub(b), c }, d.Vector.mult = function(a, b, c) { return c ? c.set(a) : c = a.copy(), c.mult(b), c }, d.Vector.div = function(a, b, c) { return c ? c.set(a) : c = a.copy(), c.div(b), c }, d.Vector.dot = function(a, b) { return a.dot(b) }, d.Vector.cross = function(a, b) { return a.cross(b) }, d.Vector.dist = function(a, b) { return a.dist(b) }, d.Vector.lerp = function(a, b, c, d) { return d ? d.set(a) : d = a.copy(), d.lerp(b, c), d }, d.Vector.mag = function(a) { var b = a.x,
                    c = a.y,
                    d = a.z,
                    e = b * b + c * c + d * d; return Math.sqrt(e) }, b.exports = d.Vector }, { "../core/constants": 20, "../core/core": 21, "./polargeometry": 53 }],
        53: [function(a, b, c) { "use strict";
            b.exports = { degreesToRadians: function(a) { return 2 * Math.PI * a / 360 }, radiansToDegrees: function(a) { return 360 * a / (2 * Math.PI) } } }, {}],
        54: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = !1,
                f = !1,
                g = 0,
                h = function() { var a, b, c = 4294967296,
                        d = 1664525,
                        e = 1013904223; return { setSeed: function(d) { b = a = (null == d ? Math.random() * c : d) >>> 0 }, getSeed: function() { return a }, rand: function() { return (b = (d * b + e) % c) / c } } }();
            d.prototype.randomSeed = function(a) { h.setSeed(a), e = !0, f = !1 }, d.prototype.random = function(a, b) { var c; if (c = e ? h.rand() : Math.random(), void 0 === a) return c; if (void 0 === b) return a instanceof Array ? a[Math.floor(c * a.length)] : c * a; if (a > b) { var d = a;
                    a = b, b = d } return c * (b - a) + a }, d.prototype.randomGaussian = function(a, b) { var c, d, e, h; if (f) c = g, f = !1;
                else { do { d = this.random(2) - 1, e = this.random(2) - 1, h = d * d + e * e } while (h >= 1);
                    h = Math.sqrt(-2 * Math.log(h) / h), c = d * h, g = e * h, f = !0 } var i = a || 0; return c * (b || 1) + i }, b.exports = d }, { "../core/core": 21 }],
        55: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("./polargeometry"),
                f = a("../core/constants");
            d.prototype._angleMode = f.RADIANS, d.prototype.acos = function(a) { return this._angleMode === f.RADIANS ? Math.acos(a) : e.radiansToDegrees(Math.acos(a)) }, d.prototype.asin = function(a) { return this._angleMode === f.RADIANS ? Math.asin(a) : e.radiansToDegrees(Math.asin(a)) }, d.prototype.atan = function(a) { return this._angleMode === f.RADIANS ? Math.atan(a) : e.radiansToDegrees(Math.atan(a)) }, d.prototype.atan2 = function(a, b) { return this._angleMode === f.RADIANS ? Math.atan2(a, b) : e.radiansToDegrees(Math.atan2(a, b)) }, d.prototype.cos = function(a) { return this._angleMode === f.RADIANS ? Math.cos(a) : Math.cos(this.radians(a)) }, d.prototype.sin = function(a) { return this._angleMode === f.RADIANS ? Math.sin(a) : Math.sin(this.radians(a)) }, d.prototype.tan = function(a) { return this._angleMode === f.RADIANS ? Math.tan(a) : Math.tan(this.radians(a)) }, d.prototype.degrees = function(a) { return e.radiansToDegrees(a) }, d.prototype.radians = function(a) { return e.degreesToRadians(a) }, d.prototype.angleMode = function(a) { a !== f.DEGREES && a !== f.RADIANS || (this._angleMode = a) }, b.exports = d }, { "../core/constants": 20, "../core/core": 21, "./polargeometry": 53 }],
        56: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.textAlign = function(a, b) { return this._renderer.textAlign.apply(this._renderer, arguments) }, d.prototype.textLeading = function(a) { return this._renderer.textLeading.apply(this._renderer, arguments) }, d.prototype.textSize = function(a) { return this._renderer.textSize.apply(this._renderer, arguments) }, d.prototype.textStyle = function(a) { return this._renderer.textStyle.apply(this._renderer, arguments) }, d.prototype.textWidth = function(a) { return 0 === a.length ? 0 : this._renderer.textWidth.apply(this._renderer, arguments) }, d.prototype.textAscent = function() { return this._renderer.textAscent() }, d.prototype.textDescent = function() { return this._renderer.textDescent() }, d.prototype._updateTextMetrics = function() { return this._renderer._updateTextMetrics() }, b.exports = d }, { "../core/core": 21 }],
        57: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants"),
                f = a("opentype.js");
            a("../core/error_helpers"), d.prototype.loadFont = function(a, b, c) { var e = new d.Font(this),
                    g = this; return f.load(a, function(f, h) { if (f) return void 0 !== c ? c(f) : (d._friendlyFileLoadError(4, a), void console.error(f, a));
                    e.font = h, void 0 !== b && b(e), g._decrementPreload(); var i, j, k = ["ttf", "otf", "woff", "woff2"],
                        l = a.split("\\").pop().split("/").pop(),
                        m = l.lastIndexOf("."),
                        n = m < 1 ? null : l.substr(m + 1);
                    k.indexOf(n) > -1 && (i = l.substr(0, m), j = document.createElement("style"), j.appendChild(document.createTextNode("\n@font-face {\nfont-family: " + i + ";\nsrc: url(" + a + ");\n}\n")), document.head.appendChild(j)) }), e }, d.prototype.text = function(a, b, c, d, e) { return this._renderer._doFill || this._renderer._doStroke ? this._renderer.text.apply(this._renderer, arguments) : this }, d.prototype.textFont = function(a, b) { if (arguments.length) { if (!a) throw Error("null font passed to textFont"); return this._renderer._setProperty("_textFont", a), b && (this._renderer._setProperty("_textSize", b), this._renderer._setProperty("_textLeading", b * e._DEFAULT_LEADMULT)), this._renderer._applyTextProperties() } return this._renderer._textFont }, b.exports = d }, { "../core/constants": 20, "../core/core": 21, "../core/error_helpers": 24, "opentype.js": 9 }],
        58: [function(a, b, c) {
            "use strict";

            function d(a, b) { for (var c = h(b, { sampleFactor: .1, simplifyThreshold: 0 }), d = n(a, 0, 1), f = d / (d * c.sampleFactor), g = [], i = 0; i < d; i += f) g.push(n(a, i)); return c.simplifyThreshold && e(g, c.simplifyThreshold), g }

            function e(a, b) { b = void 0 === b ? 0 : b; for (var c = 0, d = a.length - 1; a.length > 3 && d >= 0; --d) j(i(a, d - 1), i(a, d), i(a, d + 1), b) && (a.splice(d % a.length, 1), c++); return c }

            function f(a) { for (var b, c = [], d = 0; d < a.length; d++) "M" === a[d].type && (b && c.push(b), b = []), b.push(g(a[d])); return c.push(b), c }

            function g(a) { var b = [a.type]; return "M" === a.type || "L" === a.type ? b.push(a.x, a.y) : "C" === a.type ? b.push(a.x1, a.y1, a.x2, a.y2, a.x, a.y) : "Q" === a.type && b.push(a.x1, a.y1, a.x, a.y), b }

            function h(a, b) { if ("object" != typeof a) a = b;
                else
                    for (var c in b) void 0 === a[c] && (a[c] = b[c]); return a }

            function i(a, b) { var c = a.length; return a[b < 0 ? b % c + c : b % c] }

            function j(a, b, c, d) { if (!d) return 0 === k(a, b, c);
                void 0 === j.tmpPoint1 && (j.tmpPoint1 = [], j.tmpPoint2 = []); var e = j.tmpPoint1,
                    f = j.tmpPoint2;
                e.x = b.x - a.x, e.y = b.y - a.y, f.x = c.x - b.x, f.y = c.y - b.y; var g = e.x * f.x + e.y * f.y,
                    h = Math.sqrt(e.x * e.x + e.y * e.y),
                    i = Math.sqrt(f.x * f.x + f.y * f.y); return Math.acos(g / (h * i)) < d }

            function k(a, b, c) { return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]) }

            function l(a, b, c, d, e, f, g, h, i) { var j = 1 - i,
                    k = Math.pow(j, 3),
                    l = Math.pow(j, 2),
                    m = i * i,
                    n = m * i,
                    o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                    p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                    q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                    r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                    s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                    t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                    u = j * a + i * c,
                    v = j * b + i * d,
                    w = j * e + i * g,
                    x = j * f + i * h,
                    y = 90 - 180 * Math.atan2(q - s, r - t) / Math.PI; return (q > s || r < t) && (y += 180), { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y } }

            function m(a, b, c, d, e, f, g, h, i) { return null == i ? u(a, b, c, d, e, f, g, h) : l(a, b, c, d, e, f, g, h, v(a, b, c, d, e, f, g, h, i)) }

            function n(a, b, c) { a = p(a); for (var d, e, f, g, h, i = "", j = {}, k = 0, n = 0, o = a.length; n < o; n++) { if (f = a[n], "M" === f[0]) d = +f[1], e = +f[2];
                    else { if (g = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6]), k + g > b && !c) return h = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6], b - k), { x: h.x, y: h.y, alpha: h.alpha };
                        k += g, d = +f[5], e = +f[6] }
                    i += f.shift() + f } return j.end = i, h = c ? k : l(d, e, f[0], f[1], f[2], f[3], f[4], f[5], 1), h.alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h }

            function o(a) { var b = [],
                    c = 0,
                    d = 0,
                    e = 0,
                    f = 0,
                    g = 0; if (!a) return b; "M" === a[0][0] && (c = +a[0][1], d = +a[0][2], e = c, f = d, g++, b[0] = ["M", c, d]); for (var h, i, j, k = 3 === a.length && "M" === a[0][0] && "R" === a[1][0].toUpperCase() && "Z" === a[2][0].toUpperCase(), l = g, m = a.length; l < m; l++) { if (b.push(i = []), j = a[l], j[0] !== String.prototype.toUpperCase.call(j[0])) switch (i[0] = String.prototype.toUpperCase.call(j[0]), i[0]) {
                            case "A":
                                i[1] = j[1], i[2] = j[2], i[3] = j[3], i[4] = j[4], i[5] = j[5], i[6] = +(j[6] + c), i[7] = +(j[7] + d); break;
                            case "V":
                                i[1] = +j[1] + d; break;
                            case "H":
                                i[1] = +j[1] + c; break;
                            case "R":
                                h = [c, d].concat(j.slice(1)); for (var n = 2, o = h.length; n < o; n++) h[n] = +h[n] + c, h[++n] = +h[n] + d;
                                b.pop(), b = b.concat(r(h, k)); break;
                            case "M":
                                e = +j[1] + c, f = +j[2] + d; break;
                            default:
                                for (n = 1, o = j.length; n < o; n++) i[n] = +j[n] + (n % 2 ? c : d) } else if ("R" === j[0]) h = [c, d].concat(j.slice(1)), b.pop(), b = b.concat(r(h, k)), i = ["R"].concat(j.slice(-2));
                        else
                            for (var p = 0, q = j.length; p < q; p++) i[p] = j[p];
                    switch (i[0]) {
                        case "Z":
                            c = e, d = f; break;
                        case "H":
                            c = i[1]; break;
                        case "V":
                            d = i[1]; break;
                        case "M":
                            e = i[i.length - 2], f = i[i.length - 1]; break;
                        default:
                            c = i[i.length - 2], d = i[i.length - 1] } } return b }

            function p(a, b) { var c, d = o(a),
                    e = b && o(b),
                    f = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                    g = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                    h = [],
                    i = [],
                    j = function(a, b, c) { var d, e, f = { T: 1, Q: 1 }; if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y]; switch (a[0] in f || (b.qx = b.qy = null), a[0]) {
                            case "M":
                                b.X = a[1], b.Y = a[2]; break;
                            case "A":
                                a = ["C"].concat(q.apply(0, [b.x, b.y].concat(a.slice(1)))); break;
                            case "S":
                                "C" === c || "S" === c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1)); break;
                            case "T":
                                "Q" === c || "T" === c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(t(b.x, b.y, b.qx, b.qy, a[1], a[2])); break;
                            case "Q":
                                b.qx = a[1], b.qy = a[2], a = ["C"].concat(t(b.x, b.y, a[1], a[2], a[3], a[4])); break;
                            case "L":
                                a = ["C"].concat(s(b.x, b.y, a[1], a[2])); break;
                            case "H":
                                a = ["C"].concat(s(b.x, b.y, a[1], b.y)); break;
                            case "V":
                                a = ["C"].concat(s(b.x, b.y, b.x, a[1])); break;
                            case "Z":
                                a = ["C"].concat(s(b.x, b.y, b.X, b.Y)) } return a },
                    k = function(a, b) { if (a[b].length > 7) { a[b].shift(); for (var f = a[b]; f.length;) h[b] = "A", e && (i[b] = "A"), a.splice(b++, 0, ["C"].concat(f.splice(0, 6)));
                            a.splice(b, 1), c = Math.max(d.length, e && e.length || 0) } },
                    l = function(a, b, f, g, h) { a && b && "M" === a[h][0] && "M" !== b[h][0] && (b.splice(h, 0, ["M", g.x, g.y]), f.bx = 0, f.by = 0, f.x = a[h][1], f.y = a[h][2], c = Math.max(d.length, e && e.length || 0)) },
                    m = "",
                    n = "";
                c = Math.max(d.length, e && e.length || 0); for (var p = 0; p < c; p++) { d[p] && (m = d[p][0]), "C" !== m && (h[p] = m, p && (n = h[p - 1])), d[p] = j(d[p], f, n), "A" !== h[p] && "C" === m && (h[p] = "C"), k(d, p), e && (e[p] && (m = e[p][0]), "C" !== m && (i[p] = m, p && (n = i[p - 1])), e[p] = j(e[p], g, n), "A" !== i[p] && "C" === m && (i[p] = "C"), k(e, p)), l(d, e, f, g, p), l(e, d, g, f, p); var r = d[p],
                        u = e && e[p],
                        v = r.length,
                        w = e && u.length;
                    f.x = r[v - 2], f.y = r[v - 1], f.bx = parseFloat(r[v - 4]) || f.x, f.by = parseFloat(r[v - 3]) || f.y, g.bx = e && (parseFloat(u[w - 4]) || g.x), g.by = e && (parseFloat(u[w - 3]) || g.y), g.x = e && u[w - 2], g.y = e && u[w - 1] } return e ? [d, e] : d }

            function q(a, b, c, d, e, f, g, h, i, j) { var k, l, m, n, o, p = Math.PI,
                    r = 120 * p / 180,
                    s = p / 180 * (+e || 0),
                    t = [],
                    u = function(a, b, c) { return { x: a * Math.cos(c) - b * Math.sin(c), y: a * Math.sin(c) + b * Math.cos(c) } }; if (j) k = j[0], l = j[1], m = j[2], n = j[3];
                else { o = u(a, b, -s), a = o.x, b = o.y, o = u(h, i, -s), h = o.x, i = o.y; var v = (a - h) / 2,
                        w = (b - i) / 2,
                        x = v * v / (c * c) + w * w / (d * d);
                    x > 1 && (x = Math.sqrt(x), c *= x, d *= x); var y = c * c,
                        z = d * d,
                        A = (f === g ? -1 : 1) * Math.sqrt(Math.abs((y * z - y * w * w - z * v * v) / (y * w * w + z * v * v)));
                    m = A * c * w / d + (a + h) / 2, n = A * -d * v / c + (b + i) / 2, k = Math.asin(((b - n) / d).toFixed(9)), l = Math.asin(((i - n) / d).toFixed(9)), k = a < m ? p - k : k, l = h < m ? p - l : l, k < 0 && (k = 2 * p + k), l < 0 && (l = 2 * p + l), g && k > l && (k -= 2 * p), !g && l > k && (l -= 2 * p) } var B = l - k; if (Math.abs(B) > r) { var C = l,
                        D = h,
                        E = i;
                    l = k + r * (g && l > k ? 1 : -1), h = m + c * Math.cos(l), i = n + d * Math.sin(l), t = q(h, i, c, d, e, 0, g, D, E, [l, C, m, n]) }
                B = l - k; var F = Math.cos(k),
                    G = Math.sin(k),
                    H = Math.cos(l),
                    I = Math.sin(l),
                    J = Math.tan(B / 4),
                    K = 4 / 3 * c * J,
                    L = 4 / 3 * d * J,
                    M = [a, b],
                    N = [a + K * G, b - L * F],
                    O = [h + K * I, i - L * H],
                    P = [h, i]; if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], j) return [N, O, P].concat(t);
                t = [N, O, P].concat(t).join().split(","); for (var Q = [], R = 0, S = t.length; R < S; R++) Q[R] = R % 2 ? u(t[R - 1], t[R], s).y : u(t[R], t[R + 1], s).x; return Q }

            function r(a, b) { for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) { var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];
                    b ? d ? e - 4 === d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 === d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 === d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]) } return c }

            function s(a, b, c, d) { return [a, b, c, d, c, d] }

            function t(a, b, c, d, e, f) { var g = 1 / 3,
                    h = 2 / 3; return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f] }

            function u(a, b, c, d, e, f, g, h, i) { null == i && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i; for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = 0, n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0; o < k; o++) { var p = j * l[o] + j,
                        q = w(p, a, c, e, g),
                        r = w(p, b, d, f, h),
                        s = q * q + r * r;
                    m += n[o] * Math.sqrt(s) } return j * m }

            function v(a, b, c, d, e, f, g, h, i) { if (!(i < 0 || u(a, b, c, d, e, f, g, h) < i)) { var j, k = 1,
                        l = k / 2,
                        m = k - l,
                        n = .01; for (j = u(a, b, c, d, e, f, g, h, m); Math.abs(j - i) > n;) l /= 2, m += (j < i ? 1 : -1) * l, j = u(a, b, c, d, e, f, g, h, m); return m } }

            function w(a, b, c, d, e) { return a * (a * (-3 * b + 9 * c - 9 * d + 3 * e) + 6 * b - 12 * c + 6 * d) - 3 * b + 3 * c }

            function x() { for (var a = "", b = arguments.length - 1; b >= 0; --b) { var c = arguments[b];
                    a += c === Object(c) ? JSON.stringify(c) : c } return a }
            var y = a("../core/core"),
                z = a("../core/constants");
            y.Font = function(a) { this.parent = a, this.cache = {}, this.font = void 0, this.name = "p5.Font" }, y.Font.prototype.list = function() { throw "not yet implemented" }, y.Font.prototype.textBounds = function(a, b, c, d, e) { b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = d || this.parent._renderer._textSize; var f = e && e.renderer && e.renderer._pInst || this.parent,
                    g = f._renderer.drawingContext,
                    h = g.textAlign || z.LEFT,
                    i = g.textBaseline || z.BASELINE,
                    j = x("textBounds", a, b, c, d, h, i),
                    k = this.cache[j]; if (!k) { var l, m, n, o, p, q = [],
                        r = [],
                        s = this._scale(d);
                    this.font.forEachGlyph(a, b, c, d, e, function(a, b, c, d) { var e = a.getMetrics();
                        q.push(b + e.xMin * s), q.push(b + e.xMax * s), r.push(c + -e.yMin * s), r.push(c + -e.yMax * s) }), l = Math.min.apply(null, q), m = Math.min.apply(null, r), n = Math.max.apply(null, q), o = Math.max.apply(null, r), k = { x: l, y: m, h: o - m, w: n - l, advance: l - b }, p = this._handleAlignment(f, g, a, k.x, k.y, k.w + k.advance), k.x = p.x, k.y = p.y, this.cache[x("textBounds", a, b, c, d, h, i)] = k } return k }, y.Font.prototype.textToPoints = function(a, b, c, e, g) {
                function h(b) { return k[b].name && "space" === k[b].name || a.length === k.length && " " === a[b] || k[b].index && 3 === k[b].index } var i = 0,
                    j = [],
                    k = this._getGlyphs(a);
                e = e || this.parent._renderer._textSize; for (var l = 0; l < k.length; l++) { if (!h(l))
                        for (var m = k[l].getPath(b, c, e), n = f(m.commands), o = 0; o < n.length; o++)
                            for (var p = d(n[o], g), q = 0; q < p.length; q++) p[q].x += i, j.push(p[q]);
                    i += k[l].advanceWidth * this._scale(e) } return j }, y.Font.prototype._getGlyphs = function(a) { return this.font.stringToGlyphs(a) }, y.Font.prototype._getPath = function(a, b, c, d) { var e = d && d.renderer && d.renderer._pInst || this.parent,
                    f = e._renderer.drawingContext,
                    g = this._handleAlignment(e, f, a, b, c); return this.font.getPath(a, g.x, g.y, e._renderer._textSize, d) }, y.Font.prototype._getPathData = function(a, b, c, d) { var e = 3; return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == typeof b && (d = b), d && "number" == typeof d.decimals && (e = d.decimals), a.toPathData(e) }, y.Font.prototype._getSVG = function(a, b, c, d) { var e = 3; return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == typeof b && (d = b), d && ("number" == typeof d.decimals && (e = d.decimals), "number" == typeof d.strokeWidth && (a.strokeWidth = d.strokeWidth), void 0 !== d.fill && (a.fill = d.fill), void 0 !== d.stroke && (a.stroke = d.stroke)), a.toSVG(e) }, y.Font.prototype._renderPath = function(a, b, c, d) { var e, f = d && d.renderer || this.parent._renderer,
                    g = f.drawingContext;
                e = "object" == typeof a && a.commands ? a.commands : this._getPath(a, b, c, d).commands, g.beginPath(); for (var h = 0; h < e.length; h += 1) { var i = e[h]; "M" === i.type ? g.moveTo(i.x, i.y) : "L" === i.type ? g.lineTo(i.x, i.y) : "C" === i.type ? g.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : "Q" === i.type ? g.quadraticCurveTo(i.x1, i.y1, i.x, i.y) : "Z" === i.type && g.closePath() } return f._doStroke && f._strokeSet && g.stroke(), f._doFill && (f._fillSet || f._setFill(z._DEFAULT_TEXT_FILL), g.fill()), this }, y.Font.prototype._textWidth = function(a, b) { return this.font.getAdvanceWidth(a, b) }, y.Font.prototype._textAscent = function(a) { return this.font.ascender * this._scale(a) }, y.Font.prototype._textDescent = function(a) { return -this.font.descender * this._scale(a) }, y.Font.prototype._scale = function(a) { return 1 / this.font.unitsPerEm * (a || this.parent._renderer._textSize) }, y.Font.prototype._handleAlignment = function(a, b, c, d, e, f) {
                var g = a._renderer._textSize,
                    h = this._textAscent(g),
                    i = this._textDescent(g);
                return f = void 0 !== f ? f : this._textWidth(c, g), b.textAlign === z.CENTER ? d -= f / 2 : b.textAlign === z.RIGHT && (d -= f),
                    b.textBaseline === z.TOP ? e += h : b.textBaseline === z._CTX_MIDDLE ? e += h / 2 : b.textBaseline === z.BOTTOM && (e -= i), { x: d, y: e }
            }, b.exports = y
        }, { "../core/constants": 20, "../core/core": 21 }],
        59: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.append = function(a, b) { return a.push(b), a }, d.prototype.arrayCopy = function(a, b, c, d, e) { var f, g;
                void 0 !== e ? (g = Math.min(e, a.length), f = d, a = a.slice(b, g + b)) : (void 0 !== c ? (g = c, g = Math.min(g, a.length)) : g = a.length, f = 0, c = b, a = a.slice(0, g)), Array.prototype.splice.apply(c, [f, g].concat(a)) }, d.prototype.concat = function(a, b) { return a.concat(b) }, d.prototype.reverse = function(a) { return a.reverse() }, d.prototype.shorten = function(a) { return a.pop(), a }, d.prototype.shuffle = function(a, b) { var c = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(a);
                a = b || c ? a : a.slice(); for (var d, e, f = a.length; f > 1;) d = Math.random() * f | 0, e = a[--f], a[f] = a[d], a[d] = e; return a }, d.prototype.sort = function(a, b) { var c = b ? a.slice(0, Math.min(b, a.length)) : a,
                    d = b ? a.slice(Math.min(b, a.length)) : []; return c = "string" == typeof c[0] ? c.sort() : c.sort(function(a, b) { return a - b }), c.concat(d) }, d.prototype.splice = function(a, b, c) { return Array.prototype.splice.apply(a, [c, 0].concat(b)), a }, d.prototype.subset = function(a, b, c) { return void 0 !== c ? a.slice(b, b + c) : a.slice(b, a.length) }, b.exports = d }, { "../core/core": 21 }],
        60: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.float = function(a) { return a instanceof Array ? a.map(parseFloat) : parseFloat(a) }, d.prototype.int = function(a, b) { return b = b || 10, "string" == typeof a ? parseInt(a, b) : "number" == typeof a ? 0 | a : "boolean" == typeof a ? a ? 1 : 0 : a instanceof Array ? a.map(function(a) { return d.prototype.int(a, b) }) : void 0 }, d.prototype.str = function(a) { return a instanceof Array ? a.map(d.prototype.str) : String(a) }, d.prototype.boolean = function(a) { return "number" == typeof a ? 0 !== a : "string" == typeof a ? "true" === a.toLowerCase() : "boolean" == typeof a ? a : a instanceof Array ? a.map(d.prototype.boolean) : void 0 }, d.prototype.byte = function(a) { var b = d.prototype.int(a, 10); return "number" == typeof b ? (b + 128) % 256 - 128 : b instanceof Array ? b.map(d.prototype.byte) : void 0 }, d.prototype.char = function(a) { return "number" != typeof a || isNaN(a) ? a instanceof Array ? a.map(d.prototype.char) : "string" == typeof a ? d.prototype.char(parseInt(a, 10)) : void 0 : String.fromCharCode(a) }, d.prototype.unchar = function(a) { return "string" == typeof a && 1 === a.length ? a.charCodeAt(0) : a instanceof Array ? a.map(d.prototype.unchar) : void 0 }, d.prototype.hex = function(a, b) { if (b = void 0 === b || null === b ? b = 8 : b, a instanceof Array) return a.map(function(a) { return d.prototype.hex(a, b) }); if ("number" == typeof a) { a < 0 && (a = 4294967295 + a + 1); for (var c = Number(a).toString(16).toUpperCase(); c.length < b;) c = "0" + c; return c.length >= b && (c = c.substring(c.length - b, c.length)), c } }, d.prototype.unhex = function(a) { return a instanceof Array ? a.map(d.prototype.unhex) : parseInt("0x" + a, 16) }, b.exports = d }, { "../core/core": 21 }],
        61: [function(a, b, c) { "use strict";

            function d(a, b, c) { var d = a < 0,
                    e = d ? a.toString().substring(1) : a.toString(),
                    f = e.indexOf("."),
                    g = -1 !== f ? e.substring(0, f) : e,
                    h = -1 !== f ? e.substring(f + 1) : "",
                    i = d ? "-" : ""; if (void 0 !== c) { var j = "";
                    (-1 !== f || c - h.length > 0) && (j = "."), h.length > c && (h = h.substring(0, c)); for (var k = 0; k < b - g.length; k++) i += "0";
                    i += g, i += j, i += h; for (var l = 0; l < c - h.length; l++) i += "0"; return i } for (var m = 0; m < Math.max(b - g.length, 0); m++) i += "0"; return i += e }

            function e(a, b) { a = a.toString(); var c = a.indexOf("."),
                    d = -1 !== c ? a.substring(c) : "",
                    e = -1 !== c ? a.substring(0, c) : a; if (e = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === b) d = "";
                else if (void 0 !== b)
                    if (b > d.length) { d += -1 === c ? "." : ""; for (var f = b - d.length + 1, g = 0; g < f; g++) d += "0" } else d = d.substring(0, b + 1);
                return e + d }

            function f(a) { return parseFloat(a) > 0 ? "+" + a.toString() : a.toString() }

            function g(a) { return parseFloat(a) > 0 ? " " + a.toString() : a.toString() } var h = a("../core/core");
            a("../core/error_helpers"), h.prototype.join = function(a, b) { return h._validateParameters("join", arguments), a.join(b) }, h.prototype.match = function(a, b) { return h._validateParameters("match", arguments), a.match(b) }, h.prototype.matchAll = function(a, b) { h._validateParameters("matchAll", arguments); for (var c = new RegExp(b, "g"), d = c.exec(a), e = []; null !== d;) e.push(d), d = c.exec(a); return e }, h.prototype.nf = function(a, b, c) { return h._validateParameters("nf", arguments), a instanceof Array ? a.map(function(a) { return d(a, b, c) }) : "[object Arguments]" === Object.prototype.toString.call(a) ? 3 === a.length ? this.nf(a[0], a[1], a[2]) : 2 === a.length ? this.nf(a[0], a[1]) : this.nf(a[0]) : d(a, b, c) }, h.prototype.nfc = function(a, b) { return h._validateParameters("nfc", arguments), a instanceof Array ? a.map(function(a) { return e(a, b) }) : e(a, b) }, h.prototype.nfp = function() { h._validateParameters("nfp", arguments); var a = h.prototype.nf.apply(this, arguments); return a instanceof Array ? a.map(f) : f(a) }, h.prototype.nfs = function() { h._validateParameters("nfs", arguments); var a = h.prototype.nf.apply(this, arguments); return a instanceof Array ? a.map(g) : g(a) }, h.prototype.split = function(a, b) { return h._validateParameters("split", arguments), a.split(b) }, h.prototype.splitTokens = function(a, b) { h._validateParameters("splitTokens", arguments); var c; if (void 0 !== b) { var d = b,
                        e = /\]/g.exec(d),
                        f = /\[/g.exec(d);
                    f && e ? (d = d.slice(0, e.index) + d.slice(e.index + 1), f = /\[/g.exec(d), d = d.slice(0, f.index) + d.slice(f.index + 1), c = new RegExp("[\\[" + d + "\\]]", "g")) : e ? (d = d.slice(0, e.index) + d.slice(e.index + 1), c = new RegExp("[" + d + "\\]]", "g")) : f ? (d = d.slice(0, f.index) + d.slice(f.index + 1), c = new RegExp("[" + d + "\\[]", "g")) : c = new RegExp("[" + d + "]", "g") } else c = /\s/g; return a.split(c).filter(function(a) { return a }) }, h.prototype.trim = function(a) { return h._validateParameters("trim", arguments), a instanceof Array ? a.map(this.trim) : a.trim() }, b.exports = h }, { "../core/core": 21, "../core/error_helpers": 24 }],
        62: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.day = function() { return (new Date).getDate() }, d.prototype.hour = function() { return (new Date).getHours() }, d.prototype.minute = function() { return (new Date).getMinutes() }, d.prototype.millis = function() { return window.performance.now() }, d.prototype.month = function() { return (new Date).getMonth() + 1 }, d.prototype.second = function() { return (new Date).getSeconds() }, d.prototype.year = function() { return (new Date).getFullYear() }, b.exports = d }, { "../core/core": 21 }],
        63: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.camera = function() { return this._renderer.camera.apply(this._renderer, arguments), this }, d.RendererGL.prototype.camera = function(a, b, c, d, e, f, g, h, i) { void 0 === a && (a = this.defaultCameraX, b = this.defaultCameraY, c = this.defaultCameraZ, d = a, e = b, f = 0, g = 0, h = 1, i = 0), this.cameraX = a, this.cameraY = b, this.cameraZ = c; var j = a - d,
                    k = b - e,
                    l = c - f;
                this.eyeDist = Math.sqrt(j * j + k * k + l * l), 0 !== this.eyeDist && (j /= this.eyeDist, k /= this.eyeDist, l /= this.eyeDist); var m = g,
                    n = h,
                    o = i,
                    p = n * l - o * k,
                    q = -m * l + o * j,
                    r = m * k - n * j;
                m = k * r - l * q, n = -j * r + l * p, o = j * q - k * p; var s = Math.sqrt(p * p + q * q + r * r);
                0 !== s && (p /= s, q /= s, r /= s); var t = Math.sqrt(m * m + n * n + o * o);
                0 !== t && (m /= t, n /= t, o /= t), this.cameraMatrix.set(p, m, j, 0, q, n, k, 0, r, o, l, 0, 0, 0, 0, 1); var u = -a,
                    v = -b,
                    w = -c; return this.cameraMatrix.translate([u, v, w]), this.uMVMatrix.set(this.cameraMatrix.mat4[0], this.cameraMatrix.mat4[1], this.cameraMatrix.mat4[2], this.cameraMatrix.mat4[3], this.cameraMatrix.mat4[4], this.cameraMatrix.mat4[5], this.cameraMatrix.mat4[6], this.cameraMatrix.mat4[7], this.cameraMatrix.mat4[8], this.cameraMatrix.mat4[9], this.cameraMatrix.mat4[10], this.cameraMatrix.mat4[11], this.cameraMatrix.mat4[12], this.cameraMatrix.mat4[13], this.cameraMatrix.mat4[14], this.cameraMatrix.mat4[15]), this }, d.prototype.perspective = function() { return this._renderer.perspective.apply(this._renderer, arguments), this }, d.RendererGL.prototype.perspective = function(a, b, c, e) { void 0 === a && (a = this.defaultCameraFOV), void 0 === b && (b = this.defaultCameraAspect), void 0 === c && (c = this.defaultCameraNear), void 0 === e && (e = this.defaultCameraFar), this.cameraFOV = a, this.cameraAspect = b, this.cameraNear = c, this.cameraFar = e, this.uPMatrix = d.Matrix.identity(this.pInst); var f = 1 / Math.tan(this.cameraFOV / 2),
                    g = 1 / (this.cameraNear - this.cameraFar);
                this.uPMatrix.set(f / b, 0, 0, 0, 0, -f, 0, 0, 0, 0, (e + c) * g, -1, 0, 0, 2 * e * c * g, 0), this._curCamera = "custom" }, d.prototype.ortho = function() { return this._renderer.ortho.apply(this._renderer, arguments), this }, d.RendererGL.prototype.ortho = function(a, b, c, e, f, g) { void 0 === a && (a = -this.width / 2), void 0 === b && (b = +this.width / 2), void 0 === c && (c = -this.height / 2), void 0 === e && (e = +this.height / 2), void 0 === f && (f = 0), void 0 === g && (g = Math.max(this.width, this.height)), this.uPMatrix = d.Matrix.identity(this._pInst); var h = b - a,
                    i = e - c,
                    j = g - f,
                    k = 2 / h,
                    l = 2 / i,
                    m = -2 / j,
                    n = -(b + a) / h,
                    o = -(e + c) / i,
                    p = -(g + f) / j;
                this.uPMatrix = d.Matrix.identity(), this.uPMatrix.set(k, 0, 0, 0, 0, -l, 0, 0, 0, 0, m, 0, n, o, p, 1), this._curCamera = "custom" }, b.exports = d }, { "../core/core": 21 }],
        64: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.orbitControl = function() { return this.mouseIsPressed && (this.rotateY((this.mouseX - this.width / 2) / (this.width / 2)), this.rotateX((this.mouseY - this.height / 2) / (this.width / 2))), this }, b.exports = d }, { "../core/core": 21 }],
        65: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.prototype.ambientLight = function(a, b, c, d) { var e = this.color.apply(this, arguments),
                    f = this._renderer._useLightShader(); return f.setUniform("uUseLighting", !0), f.setUniform("uMaterialColor", this._renderer.curFillColor), this._renderer.ambientLightColors.push(e._array[0], e._array[1], e._array[2]), f.setUniform("uAmbientColor", this._renderer.ambientLightColors), f.setUniform("uAmbientLightCount", this._renderer.ambientLightColors.length / 3), this }, d.prototype.directionalLight = function(a, b, c, d, e, f) { var g, h, i, j = this._renderer._useLightShader(),
                    k = this.color.apply(this, [a, b, c]),
                    l = arguments[arguments.length - 1]; "number" == typeof l ? (g = arguments[arguments.length - 3], h = arguments[arguments.length - 2], i = arguments[arguments.length - 1]) : (g = l.x, h = l.y, i = l.z), j.setUniform("uUseLighting", !0), j.setUniform("uMaterialColor", this._renderer.curFillColor); var m = Math.sqrt(g * g + h * h + i * i); return this._renderer.directionalLightDirections.push(g / m, h / m, i / m), j.setUniform("uLightingDirection", this._renderer.directionalLightDirections), this._renderer.directionalLightColors.push(k._array[0], k._array[1], k._array[2]), j.setUniform("uDirectionalColor", this._renderer.directionalLightColors), j.setUniform("uDirectionalLightCount", this._renderer.directionalLightColors.length / 3), this }, d.prototype.pointLight = function(a, b, c, d, e, f) { var g, h, i, j = this._renderer._pInst.color.apply(this, [a, b, c]),
                    k = arguments[arguments.length - 1]; "number" == typeof k ? (g = arguments[arguments.length - 3], h = arguments[arguments.length - 2], i = arguments[arguments.length - 1]) : (g = k.x, h = k.y, i = k.z); var l = this._renderer._useLightShader(); return l.setUniform("uUseLighting", !0), l.setUniform("uMaterialColor", this._renderer.curFillColor), this._renderer.pointLightPositions.push(g, h, i), l.setUniform("uPointLightLocation", this._renderer.pointLightPositions), this._renderer.pointLightColors.push(j._array[0], j._array[1], j._array[2]), l.setUniform("uPointLightColor", this._renderer.pointLightColors), l.setUniform("uPointLightCount", this._renderer.pointLightColors.length / 3), this }, b.exports = d }, { "../core/core": 21 }],
        66: [function(a, b, c) { "use strict";

            function d(a, b) { for (var c = { v: [], vt: [], vn: [] }, d = {}, f = 0; f < b.length; ++f) { var g = b[f].trim().split(/\b\s+/); if (g.length > 0)
                        if ("v" === g[0] || "vn" === g[0]) { var h = new e.Vector(parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3]));
                            c[g[0]].push(h) } else if ("vt" === g[0]) { var i = [parseFloat(g[1]), parseFloat(g[2])];
                        c[g[0]].push(i) } else if ("f" === g[0])
                        for (var j = 3; j < g.length; ++j) { for (var k = [], l = [1, j - 1, j], m = 0; m < l.length; ++m) { var n = g[l[m]],
                                    o = 0; if (void 0 !== d[n]) o = d[n];
                                else { for (var p = n.split("/"), q = 0; q < p.length; q++) p[q] = parseInt(p[q]) - 1;
                                    o = d[n] = a.vertices.length, a.vertices.push(c.v[p[0]].copy()), c.vt[p[1]] ? a.uvs.push(c.vt[p[1]].slice()) : a.uvs.push([0, 0]), c.vn[p[2]] && a.vertexNormals.push(c.vn[p[2]].copy()) }
                                k.push(o) }
                            k[0] !== k[1] && k[0] !== k[2] && k[1] !== k[2] && a.faces.push(k) } } return 0 === a.vertexNormals.length && a.computeNormals(), a } var e = a("../core/core");
            a("./p5.Geometry"), e.prototype.loadModel = function(a) { var b, c, f; "boolean" == typeof arguments[1] ? (b = arguments[1], c = arguments[2], f = arguments[3]) : (b = !1, c = arguments[1], f = arguments[2]); var g = new e.Geometry; return g.gid = a + "|" + b, this.loadStrings(a, function(a) { d(g, a), b && g.normalize(), "function" == typeof c && c(g) }.bind(this), f), g }, e.prototype.model = function(a) { a.vertices.length > 0 && (this._renderer.geometryInHash(a.gid) || (a._makeTriangleEdges(), this._renderer._edgesToVertices(a), this._renderer.createBuffers(a.gid, a)), this._renderer.drawBuffers(a.gid)) }, b.exports = e }, { "../core/core": 21, "./p5.Geometry": 68 }],
        67: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants");
            a("./p5.Texture"), d.prototype.loadShader = function(a, b) { var c = new d.Shader,
                    e = this,
                    f = !1,
                    g = !1; return this.loadStrings(b, function(a) { c._fragSrc = a.join("\n"), f = !0, g || e._incrementPreload() }), this.loadStrings(a, function(a) { c._vertSrc = a.join("\n"), g = !0, f || e._incrementPreload() }), c }, d.prototype.createShader = function(a, b) { return new d.Shader(this._renderer, a, b) }, d.prototype.shader = function(a) { return void 0 === a._renderer && (a._renderer = this._renderer), a.isStrokeShader() ? this._renderer.setStrokeShader(a) : this._renderer.setFillShader(a), this }, d.prototype.normalMaterial = function() { return this._renderer.drawMode = e.FILL, this._renderer.setFillShader(this._renderer._getNormalShader()), this._renderer.curFillColor = [1, 1, 1, 1], this.noStroke(), this }, d.prototype.texture = function(a) { this._renderer.GL.depthMask(!0), this._renderer.GL.enable(this._renderer.GL.BLEND), this._renderer.GL.blendFunc(this._renderer.GL.SRC_ALPHA, this._renderer.GL.ONE_MINUS_SRC_ALPHA), this._renderer.drawMode = e.TEXTURE; var b = this._renderer._useLightShader(); return b.setUniform("uSpecular", !1), b.setUniform("isTexture", !0), b.setUniform("uSampler", a), this.noStroke(), this }, d.prototype.ambientMaterial = function(a, b, c, e) { var f = d.prototype.color.apply(this, arguments);
                this._renderer.curFillColor = f._array; var g = this._renderer._useLightShader(); return g.setUniform("uMaterialColor", this._renderer.curFillColor), g.setUniform("uSpecular", !1), g.setUniform("isTexture", !1), this }, d.prototype.specularMaterial = function(a, b, c, e) { var f = d.prototype.color.apply(this, arguments);
                this._renderer.curFillColor = f._array; var g = this._renderer._useLightShader(); return g.setUniform("uMaterialColor", this._renderer.curFillColor), g.setUniform("uSpecular", !0), g.setUniform("isTexture", !1), this }, d.RendererGL.prototype._applyColorBlend = function(a) { var b = this.GL; return a[a.length - 1] < 1 ? (b.depthMask(!1), b.enable(b.BLEND), b.blendEquation(b.FUNC_ADD), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA)) : (b.depthMask(!0), b.disable(b.BLEND)), a }, b.exports = d }, { "../core/constants": 20, "../core/core": 21, "./p5.Texture": 74 }],
        68: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.Geometry = function(a, b, c) { return this.vertices = [], this.lineVertices = [], this.lineNormals = [], this.vertexNormals = [], this.faces = [], this.uvs = [], this.edges = [], this.detailX = void 0 !== a ? a : 1, this.detailY = void 0 !== b ? b : 1, c instanceof Function && c.call(this), this.name = "p5.Geometry", this }, d.Geometry.prototype.computeFaces = function() { for (var a, b, c, d, e = this.detailX + 1, f = 0; f < this.detailY; f++)
                    for (var g = 0; g < this.detailX; g++) a = f * e + g, b = f * e + g + 1, c = (f + 1) * e + g + 1, d = (f + 1) * e + g, this.faces.push([a, b, d]), this.faces.push([d, b, c]); return this }, d.Geometry.prototype._getFaceNormal = function(a) { var b = this.faces[a],
                    c = this.vertices[b[0]],
                    e = this.vertices[b[1]],
                    f = this.vertices[b[2]],
                    g = d.Vector.sub(e, c),
                    h = d.Vector.sub(f, c),
                    i = d.Vector.cross(g, h),
                    j = d.Vector.mag(i),
                    k = j / (d.Vector.mag(g) * d.Vector.mag(h)); return i.mult(Math.asin(k) / j) }, d.Geometry.prototype.computeNormals = function() { for (var a = [], b = 0; b < this.vertices.length; b++) { for (var c = new d.Vector, e = 0; e < this.faces.length; e++)
                        if (this.faces[e][0] === b || this.faces[e][1] === b || this.faces[e][2] === b) { var f = a[e] || (a[e] = this._getFaceNormal(e));
                            c = c.add(f) }
                    c = c.normalize(), this.vertexNormals.push(c) } return this }, d.Geometry.prototype.averageNormals = function() { for (var a = 0; a <= this.detailY; a++) { var b = this.detailX + 1,
                        c = d.Vector.add(this.vertexNormals[a * b], this.vertexNormals[a * b + this.detailX]);
                    c = d.Vector.div(c, 2), this.vertexNormals[a * b] = c, this.vertexNormals[a * b + this.detailX] = c } return this }, d.Geometry.prototype.averagePoleNormals = function() { for (var a = new d.Vector(0, 0, 0), b = 0; b < this.detailX; b++) a.add(this.vertexNormals[b]); for (a = d.Vector.div(a, this.detailX), b = 0; b < this.detailX; b++) this.vertexNormals[b] = a; for (a = new d.Vector(0, 0, 0), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) a.add(this.vertexNormals[b]); for (a = d.Vector.div(a, this.detailX), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) this.vertexNormals[b] = a; return this }, d.Geometry.prototype._makeTriangleEdges = function() { if (Array.isArray(this.strokeIndices))
                    for (var a = 0, b = this.strokeIndices.length; a < b; a++) this.edges.push(this.strokeIndices[a]);
                else
                    for (var c = 0; c < this.faces.length; c++) this.edges.push([this.faces[c][0], this.faces[c][1]]), this.edges.push([this.faces[c][1], this.faces[c][2]]), this.edges.push([this.faces[c][2], this.faces[c][0]]); return this }, d.RendererGL.prototype._edgesToVertices = function(a) { a.lineVertices = []; for (var b = 0; b < a.edges.length; b++) { var c = a.vertices[a.edges[b][0]],
                        d = a.vertices[a.edges[b][1]],
                        e = d.copy().sub(c).normalize(),
                        f = c.array(),
                        g = c.array(),
                        h = d.array(),
                        i = d.array(),
                        j = e.array(),
                        k = e.array();
                    j.push(1), k.push(-1), a.lineNormals.push(j, k, j, j, k, k), a.lineVertices.push(f, g, h, h, g, i) } }, d.Geometry.prototype.normalize = function() { if (this.vertices.length > 0) { for (var a = this.vertices[0].copy(), b = this.vertices[0].copy(), c = 0; c < this.vertices.length; c++) a.x = Math.max(a.x, this.vertices[c].x), b.x = Math.min(b.x, this.vertices[c].x), a.y = Math.max(a.y, this.vertices[c].y), b.y = Math.min(b.y, this.vertices[c].y), a.z = Math.max(a.z, this.vertices[c].z), b.z = Math.min(b.z, this.vertices[c].z); var e = d.Vector.lerp(a, b, .5),
                        f = d.Vector.sub(a, b),
                        g = Math.max(Math.max(f.x, f.y), f.z),
                        h = 200 / g; for (c = 0; c < this.vertices.length; c++) this.vertices[c].sub(e), this.vertices[c].mult(h) } return this }, b.exports = d.Geometry }, { "../core/core": 21 }],
        69: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../math/polargeometry"),
                f = a("../core/constants"),
                g = Array,
                h = function(a) { return a instanceof Array }; "undefined" != typeof Float32Array && (g = Float32Array, h = function(a) { return a instanceof Array || a instanceof Float32Array }), d.Matrix = function() { for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b]; return a.length && a[a.length - 1] instanceof d && (this.p5 = a[a.length - 1]), "mat3" === a[0] ? this.mat3 = Array.isArray(a[1]) ? a[1] : new g([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = Array.isArray(a[0]) ? a[0] : new g([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this.name = "p5.Matrix", this }, d.Matrix.prototype.set = function(a) { return a instanceof d.Matrix ? (this.mat4 = a.mat4, this) : h(a) ? (this.mat4 = a, this) : (16 === arguments.length && (this.mat4[0] = arguments[0], this.mat4[1] = arguments[1], this.mat4[2] = arguments[2], this.mat4[3] = arguments[3], this.mat4[4] = arguments[4], this.mat4[5] = arguments[5], this.mat4[6] = arguments[6], this.mat4[7] = arguments[7], this.mat4[8] = arguments[8], this.mat4[9] = arguments[9], this.mat4[10] = arguments[10], this.mat4[11] = arguments[11], this.mat4[12] = arguments[12], this.mat4[13] = arguments[13], this.mat4[14] = arguments[14], this.mat4[15] = arguments[15]), this) }, d.Matrix.prototype.get = function() { return new d.Matrix(this.mat4, this.p5) }, d.Matrix.prototype.copy = function() { var a = new d.Matrix(this.p5); return a.mat4[0] = this.mat4[0], a.mat4[1] = this.mat4[1], a.mat4[2] = this.mat4[2], a.mat4[3] = this.mat4[3], a.mat4[4] = this.mat4[4], a.mat4[5] = this.mat4[5], a.mat4[6] = this.mat4[6], a.mat4[7] = this.mat4[7], a.mat4[8] = this.mat4[8], a.mat4[9] = this.mat4[9], a.mat4[10] = this.mat4[10], a.mat4[11] = this.mat4[11], a.mat4[12] = this.mat4[12], a.mat4[13] = this.mat4[13], a.mat4[14] = this.mat4[14], a.mat4[15] = this.mat4[15], a }, d.Matrix.identity = function(a) { return new d.Matrix(a) }, d.Matrix.prototype.transpose = function(a) { var b, c, e, f, g, i; return a instanceof d.Matrix ? (b = a.mat4[1], c = a.mat4[2], e = a.mat4[3], f = a.mat4[6], g = a.mat4[7], i = a.mat4[11], this.mat4[0] = a.mat4[0], this.mat4[1] = a.mat4[4], this.mat4[2] = a.mat4[8], this.mat4[3] = a.mat4[12], this.mat4[4] = b, this.mat4[5] = a.mat4[5], this.mat4[6] = a.mat4[9], this.mat4[7] = a.mat4[13], this.mat4[8] = c, this.mat4[9] = f, this.mat4[10] = a.mat4[10], this.mat4[11] = a.mat4[14], this.mat4[12] = e, this.mat4[13] = g, this.mat4[14] = i, this.mat4[15] = a.mat4[15]) : h(a) && (b = a[1], c = a[2], e = a[3], f = a[6], g = a[7], i = a[11], this.mat4[0] = a[0], this.mat4[1] = a[4], this.mat4[2] = a[8], this.mat4[3] = a[12], this.mat4[4] = b, this.mat4[5] = a[5], this.mat4[6] = a[9], this.mat4[7] = a[13], this.mat4[8] = c, this.mat4[9] = f, this.mat4[10] = a[10], this.mat4[11] = a[14], this.mat4[12] = e, this.mat4[13] = g, this.mat4[14] = i, this.mat4[15] = a[15]), this }, d.Matrix.prototype.invert = function(a) { var b, c, e, f, g, i, j, k, l, m, n, o, p, q, r, s;
                a instanceof d.Matrix ? (b = a.mat4[0], c = a.mat4[1], e = a.mat4[2], f = a.mat4[3], g = a.mat4[4], i = a.mat4[5], j = a.mat4[6], k = a.mat4[7], l = a.mat4[8], m = a.mat4[9], n = a.mat4[10], o = a.mat4[11], p = a.mat4[12], q = a.mat4[13], r = a.mat4[14], s = a.mat4[15]) : h(a) && (b = a[0], c = a[1], e = a[2], f = a[3], g = a[4], i = a[5], j = a[6], k = a[7], l = a[8], m = a[9], n = a[10], o = a[11], p = a[12], q = a[13], r = a[14], s = a[15]); var t = b * i - c * g,
                    u = b * j - e * g,
                    v = b * k - f * g,
                    w = c * j - e * i,
                    x = c * k - f * i,
                    y = e * k - f * j,
                    z = l * q - m * p,
                    A = l * r - n * p,
                    B = l * s - o * p,
                    C = m * r - n * q,
                    D = m * s - o * q,
                    E = n * s - o * r,
                    F = t * E - u * D + v * C + w * B - x * A + y * z; return F ? (F = 1 / F, this.mat4[0] = (i * E - j * D + k * C) * F, this.mat4[1] = (e * D - c * E - f * C) * F, this.mat4[2] = (q * y - r * x + s * w) * F, this.mat4[3] = (n * x - m * y - o * w) * F, this.mat4[4] = (j * B - g * E - k * A) * F, this.mat4[5] = (b * E - e * B + f * A) * F, this.mat4[6] = (r * v - p * y - s * u) * F, this.mat4[7] = (l * y - n * v + o * u) * F, this.mat4[8] = (g * D - i * B + k * z) * F, this.mat4[9] = (c * B - b * D - f * z) * F, this.mat4[10] = (p * x - q * v + s * t) * F, this.mat4[11] = (m * v - l * x - o * t) * F, this.mat4[12] = (i * A - g * C - j * z) * F, this.mat4[13] = (b * C - c * A + e * z) * F, this.mat4[14] = (q * u - p * w - r * t) * F, this.mat4[15] = (l * w - m * u + n * t) * F, this) : null }, d.Matrix.prototype.invert3x3 = function() { var a = this.mat3[0],
                    b = this.mat3[1],
                    c = this.mat3[2],
                    d = this.mat3[3],
                    e = this.mat3[4],
                    f = this.mat3[5],
                    g = this.mat3[6],
                    h = this.mat3[7],
                    i = this.mat3[8],
                    j = i * e - f * h,
                    k = -i * d + f * g,
                    l = h * d - e * g,
                    m = a * j + b * k + c * l; return m ? (m = 1 / m, this.mat3[0] = j * m, this.mat3[1] = (-i * b + c * h) * m, this.mat3[2] = (f * b - c * e) * m, this.mat3[3] = k * m, this.mat3[4] = (i * a - c * g) * m, this.mat3[5] = (-f * a + c * d) * m, this.mat3[6] = l * m, this.mat3[7] = (-h * a + b * g) * m, this.mat3[8] = (e * a - b * d) * m, this) : null }, d.Matrix.prototype.transpose3x3 = function(a) { var b = a[1],
                    c = a[2],
                    d = a[5]; return this.mat3[1] = a[3], this.mat3[2] = a[6], this.mat3[3] = b, this.mat3[5] = a[7], this.mat3[6] = c, this.mat3[7] = d, this }, d.Matrix.prototype.inverseTranspose = function(a) { void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = a.mat4[0], this.mat3[1] = a.mat4[1], this.mat3[2] = a.mat4[2], this.mat3[3] = a.mat4[4], this.mat3[4] = a.mat4[5], this.mat3[5] = a.mat4[6], this.mat3[6] = a.mat4[8], this.mat3[7] = a.mat4[9], this.mat3[8] = a.mat4[10]); var b = this.invert3x3(); if (b) b.transpose3x3(this.mat3);
                else
                    for (var c = 0; c < 9; c++) this.mat3[c] = 0; return this }, d.Matrix.prototype.determinant = function() { var a = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
                    b = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
                    c = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
                    d = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
                    e = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
                    f = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
                    g = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
                    h = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
                    i = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
                    j = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
                    k = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13]; return a * (this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14]) - b * k + c * j + d * i - e * h + f * g }, d.Matrix.prototype.mult = function(a) { var b; if (a === this || a === this.mat4) b = this.copy().mat4;
                else if (a instanceof d.Matrix) b = a.mat4;
                else { if (!h(a)) return;
                    b = a } var c = this.mat4[0],
                    e = this.mat4[1],
                    f = this.mat4[2],
                    g = this.mat4[3]; return this.mat4[0] = c * b[0] + e * b[4] + f * b[8] + g * b[12], this.mat4[1] = c * b[1] + e * b[5] + f * b[9] + g * b[13], this.mat4[2] = c * b[2] + e * b[6] + f * b[10] + g * b[14], this.mat4[3] = c * b[3] + e * b[7] + f * b[11] + g * b[15], c = this.mat4[4], e = this.mat4[5], f = this.mat4[6], g = this.mat4[7], this.mat4[4] = c * b[0] + e * b[4] + f * b[8] + g * b[12], this.mat4[5] = c * b[1] + e * b[5] + f * b[9] + g * b[13], this.mat4[6] = c * b[2] + e * b[6] + f * b[10] + g * b[14], this.mat4[7] = c * b[3] + e * b[7] + f * b[11] + g * b[15], c = this.mat4[8], e = this.mat4[9], f = this.mat4[10], g = this.mat4[11], this.mat4[8] = c * b[0] + e * b[4] + f * b[8] + g * b[12], this.mat4[9] = c * b[1] + e * b[5] + f * b[9] + g * b[13], this.mat4[10] = c * b[2] + e * b[6] + f * b[10] + g * b[14], this.mat4[11] = c * b[3] + e * b[7] + f * b[11] + g * b[15], c = this.mat4[12], e = this.mat4[13], f = this.mat4[14], g = this.mat4[15], this.mat4[12] = c * b[0] + e * b[4] + f * b[8] + g * b[12], this.mat4[13] = c * b[1] + e * b[5] + f * b[9] + g * b[13], this.mat4[14] = c * b[2] + e * b[6] + f * b[10] + g * b[14], this.mat4[15] = c * b[3] + e * b[7] + f * b[11] + g * b[15], this }, d.Matrix.prototype.scale = function(a, b, c) { return a instanceof d.Vector ? (b = a.y, c = a.z, a = a.x) : a instanceof Array && (b = a[1], c = a[2], a = a[0]), this.mat4[0] *= a, this.mat4[1] *= a, this.mat4[2] *= a, this.mat4[3] *= a, this.mat4[4] *= b, this.mat4[5] *= b, this.mat4[6] *= b, this.mat4[7] *= b, this.mat4[8] *= c, this.mat4[9] *= c, this.mat4[10] *= c, this.mat4[11] *= c, this }, d.Matrix.prototype.rotate = function(a, b, c, g) { var h, i;
                h = this.p5 && this.p5._angleMode === f.DEGREES ? e.degreesToRadians(a) : a, b instanceof d.Vector ? (c = b.y, g = b.z, b = b.x) : b instanceof Array && (c = b[1], g = b[2], b = b[0]), i = Math.sqrt(b * b + c * c + g * g), b *= 1 / i, c *= 1 / i, g *= 1 / i; var j = this.mat4[0],
                    k = this.mat4[1],
                    l = this.mat4[2],
                    m = this.mat4[3],
                    n = this.mat4[4],
                    o = this.mat4[5],
                    p = this.mat4[6],
                    q = this.mat4[7],
                    r = this.mat4[8],
                    s = this.mat4[9],
                    t = this.mat4[10],
                    u = this.mat4[11],
                    v = Math.sin(h),
                    w = Math.cos(h),
                    x = 1 - w,
                    y = b * b * x + w,
                    z = c * b * x + g * v,
                    A = g * b * x - c * v,
                    B = b * c * x - g * v,
                    C = c * c * x + w,
                    D = g * c * x + b * v,
                    E = b * g * x + c * v,
                    F = c * g * x - b * v,
                    G = g * g * x + w; return this.mat4[0] = j * y + n * z + r * A, this.mat4[1] = k * y + o * z + s * A, this.mat4[2] = l * y + p * z + t * A, this.mat4[3] = m * y + q * z + u * A, this.mat4[4] = j * B + n * C + r * D, this.mat4[5] = k * B + o * C + s * D, this.mat4[6] = l * B + p * C + t * D, this.mat4[7] = m * B + q * C + u * D, this.mat4[8] = j * E + n * F + r * G, this.mat4[9] = k * E + o * F + s * G, this.mat4[10] = l * E + p * F + t * G, this.mat4[11] = m * E + q * F + u * G, this }, d.Matrix.prototype.translate = function(a) { var b = a[0],
                    c = a[1],
                    d = a[2] || 0;
                this.mat4[12] += this.mat4[0] * b + this.mat4[4] * c + this.mat4[8] * d, this.mat4[13] += this.mat4[1] * b + this.mat4[5] * c + this.mat4[9] * d, this.mat4[14] += this.mat4[2] * b + this.mat4[6] * c + this.mat4[10] * d, this.mat4[15] += this.mat4[3] * b + this.mat4[7] * c + this.mat4[11] * d }, d.Matrix.prototype.rotateX = function(a) { this.rotate(a, 1, 0, 0) }, d.Matrix.prototype.rotateY = function(a) { this.rotate(a, 0, 1, 0) }, d.Matrix.prototype.rotateZ = function(a) { this.rotate(a, 0, 0, 1) }, d.Matrix.prototype.perspective = function(a, b, c, d) { var e = 1 / Math.tan(a / 2),
                    f = 1 / (c - d); return this.mat4[0] = e / b, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = e, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (d + c) * f, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * d * c * f, this.mat4[15] = 0, this }, d.Matrix.prototype.ortho = function(a, b, c, d, e, f) { var g = 1 / (a - b),
                    h = 1 / (c - d),
                    i = 1 / (e - f); return this.mat4[0] = -2 * g, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * h, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * i, this.mat4[11] = 0, this.mat4[12] = (a + b) * g, this.mat4[13] = (d + c) * h, this.mat4[14] = (f + e) * i, this.mat4[15] = 1, this }, b.exports = d.Matrix }, { "../core/constants": 20, "../core/core": 21, "../math/polargeometry": 53 }],
        70: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants");
            d.RendererGL.prototype.beginShape = function(a) { return this.immediateMode.shapeMode = void 0 !== a ? a : e.LINE_STRIP, void 0 === this.immediateMode.vertices ? (this.immediateMode.vertices = [], this.immediateMode.edges = [], this.immediateMode.lineVertices = [], this.immediateMode.vertexColors = [], this.immediateMode.lineNormals = [], this.immediateMode.uvCoords = [], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer(), this.immediateMode.uvBuffer = this.GL.createBuffer(), this.immediateMode.lineVertexBuffer = this.GL.createBuffer(), this.immediateMode.lineNormalBuffer = this.GL.createBuffer()) : (this.immediateMode.vertices.length = 0, this.immediateMode.edges.length = 0, this.immediateMode.lineVertices.length = 0, this.immediateMode.lineNormals.length = 0, this.immediateMode.vertexColors.length = 0, this.immediateMode.uvCoords.length = 0), this.isImmediateDrawing = !0, this }, d.RendererGL.prototype.vertex = function(a, b) { var c, e, f;
                c = e = f = 0, 3 === arguments.length ? c = arguments[2] : 4 === arguments.length ? (e = arguments[2], f = arguments[3]) : 5 === arguments.length && (c = arguments[2], e = arguments[3], f = arguments[4]); var g = new d.Vector(a, b, c);
                this.immediateMode.vertices.push(g); var h = this.curFillColor || [.5, .5, .5, 1]; return this.immediateMode.vertexColors.push(h[0], h[1], h[2], h[3]), this.immediateMode.uvCoords.push(e, f), this }, d.RendererGL.prototype.endShape = function(a, b, c, d, f, g) { if (this._useImmediateModeShader(), this._doStroke && this.drawMode !== e.TEXTURE) { for (var h = 0; h < this.immediateMode.vertices.length - 1; h++) this.immediateMode.edges.push([h, h + 1]);
                    a === e.CLOSE && this.immediateMode.edges.push([this.immediateMode.vertices.length - 1, 0]), this._edgesToVertices(this.immediateMode), this._drawStrokeImmediateMode() } return this._doFill && this._drawFillImmediateMode(a, b, c, d, f, g), this.immediateMode.vertices.length = 0, this.immediateMode.vertexColors.length = 0, this.immediateMode.uvCoords.length = 0, this.isImmediateDrawing = !1, this }, d.RendererGL.prototype._drawFillImmediateMode = function(a, b, c, d, f, g) { var h = this.GL; if (this.curFillShader.bindShader(), this.curFillShader.attributes.aPosition && (this._bindBuffer(this.immediateMode.vertexBuffer, h.ARRAY_BUFFER, this._vToNArray(this.immediateMode.vertices), Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, h.FLOAT, !1, 0, 0)), this.drawMode === e.FILL && this.curFillShader.attributes.aVertexColor && (this._bindBuffer(this.immediateMode.colorBuffer, h.ARRAY_BUFFER, this.immediateMode.vertexColors, Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aVertexColor.location, 4, h.FLOAT, !1, 0, 0)), this.drawMode === e.TEXTURE && this.curFillShader.attributes.aTexCoord && (this._bindBuffer(this.immediateMode.uvBuffer, h.ARRAY_BUFFER, this.immediateMode.uvCoords, Float32Array, h.DYNAMIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, h.FLOAT, !1, 0, 0)), this.drawMode === e.FILL || this.drawMode === e.TEXTURE) switch (this.immediateMode.shapeMode) {
                    case e.LINE_STRIP:
                    case e.LINES:
                    case e.TRIANGLES:
                        this.immediateMode.shapeMode = e.TRIANGLE_FAN } else switch (this.immediateMode.shapeMode) {
                    case e.LINE_STRIP:
                    case e.LINES:
                        this.immediateMode.shapeMode = e.LINE_LOOP }
                if (this.immediateMode.shapeMode === e.QUADS || this.immediateMode.shapeMode === e.QUAD_STRIP) throw new Error("sorry, " + this.immediateMode.shapeMode + " not yet implemented in webgl mode.");
                this._applyColorBlend(this.curFillColor), h.enable(h.BLEND), h.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertices.length), this.curFillShader.unbindShader() }, d.RendererGL.prototype._drawStrokeImmediateMode = function() { var a = this.GL;
                this.curStrokeShader.bindShader(), this.curStrokeShader.attributes.aPosition && (this._bindBuffer(this.immediateMode.lineVertexBuffer, a.ARRAY_BUFFER, this._flatten(this.immediateMode.lineVertices), Float32Array, a.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, a.FLOAT, !1, 0, 0)), this.curStrokeShader.attributes.aDirection && (this._bindBuffer(this.immediateMode.lineNormalBuffer, a.ARRAY_BUFFER, this._flatten(this.immediateMode.lineNormals), Float32Array, a.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, a.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curStrokeColor), a.drawArrays(a.TRIANGLES, 0, this.immediateMode.lineVertices.length), this.curStrokeShader.unbindShader() }, b.exports = d.RendererGL }, { "../core/constants": 20, "../core/core": 21 }],
        71: [function(a, b, c) {
            "use strict";
            var d = a("../core/core"),
                e = 0;
            d.RendererGL.prototype._initBufferDefaults = function(a) { if (this._freeBuffers(a), ++e > 1e3) { var b = Object.keys(this.gHash)[0];
                    delete this.gHash[b], e-- }
                this.gHash[a] = {} }, d.RendererGL.prototype._freeBuffers = function(a) {
                var b = this.gHash[a];
                if (b) {
                    delete this.gHash[a], e--;
                    var c = this.GL;
                    b.vertexBuffer && c.deleteBuffer(b.vertexBuffer), b.normalBuffer && c.deleteBuffer(b.normalBuffer), b.lineNormalBuffer && c.deleteBuffer(b.lineNormalBuffer), b.uvBuffer && c.deleteBuffer(b.uvBuffer), b.indexBuffer && c.deleteBuffer(b.indexBuffer),
                        b.lineVertexBuffer && c.deleteBuffer(b.lineVertexBuffer)
                }
            }, d.RendererGL.prototype.createBuffers = function(a, b) { var c = this.GL;
                this._setDefaultCamera(), this._initBufferDefaults(a); var d = this.gHash[a];
                d.numberOfItems = 3 * b.faces.length, d.lineVertexCount = b.lineVertices.length, this._useColorShader(), this.curStrokeShader.attributes.aPosition && (d.lineVertexBuffer = c.createBuffer(), this._bindBuffer(d.lineVertexBuffer, c.ARRAY_BUFFER, this._flatten(b.lineVertices), Float32Array, c.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, c.FLOAT, !1, 0, 0)), this.curStrokeShader.attributes.aDirection && (d.lineNormalBuffer = c.createBuffer(), this._bindBuffer(d.lineNormalBuffer, c.ARRAY_BUFFER, this._flatten(b.lineNormals), Float32Array, c.STATIC_DRAW), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, c.FLOAT, !1, 0, 0)), this.curFillShader.attributes.aPosition && (d.vertexBuffer = c.createBuffer(), this._bindBuffer(d.vertexBuffer, c.ARRAY_BUFFER, this._vToNArray(b.vertices), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, c.FLOAT, !1, 0, 0)), d.indexBuffer = c.createBuffer(), this._bindBuffer(d.indexBuffer, c.ELEMENT_ARRAY_BUFFER, this._flatten(b.faces), Uint16Array, c.STATIC_DRAW), this.curFillShader.attributes.aNormal && (d.normalBuffer = c.createBuffer(), this._bindBuffer(d.normalBuffer, c.ARRAY_BUFFER, this._vToNArray(b.vertexNormals), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location, 3, c.FLOAT, !1, 0, 0)), this.curFillShader.attributes.aTexCoord && (d.uvBuffer = c.createBuffer(), this._bindBuffer(d.uvBuffer, c.ARRAY_BUFFER, this._flatten(b.uvs), Float32Array, c.STATIC_DRAW), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, c.FLOAT, !1, 0, 0)) }, d.RendererGL.prototype.drawBuffers = function(a) { this._setDefaultCamera(); var b = this.GL;
                this._useColorShader(); var c = this.gHash[a]; return this._doStroke && c.lineVertexCount > 0 && (this.curStrokeShader.bindShader(), c.lineVertexBuffer && (this._bindBuffer(c.lineVertexBuffer, b.ARRAY_BUFFER), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location, 3, b.FLOAT, !1, 0, 0)), c.lineNormalBuffer && (this._bindBuffer(c.lineNormalBuffer, b.ARRAY_BUFFER), this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location, 4, b.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curStrokeColor), this._drawArrays(b.TRIANGLES, a), this.curStrokeShader.unbindShader()), !1 !== this._doFill && (this.curFillShader.bindShader(), c.vertexBuffer && (this._bindBuffer(c.vertexBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location, 3, b.FLOAT, !1, 0, 0)), c.indexBuffer && this._bindBuffer(c.indexBuffer, b.ELEMENT_ARRAY_BUFFER), c.normalBuffer && (this._bindBuffer(c.normalBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location, 3, b.FLOAT, !1, 0, 0)), c.uvBuffer && (this._bindBuffer(c.uvBuffer, b.ARRAY_BUFFER), this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location, 2, b.FLOAT, !1, 0, 0)), this._applyColorBlend(this.curFillColor), this._drawElements(b.TRIANGLES, a), this.curFillShader.unbindShader()), this }, d.RendererGL.prototype.drawBuffersScaled = function(a, b, c, d) { var e = this.uMVMatrix.copy(); try { this.uMVMatrix.scale(b, c, d), this.drawBuffers(a) } finally { this.uMVMatrix = e } }, d.RendererGL.prototype._drawArrays = function(a, b) { return this.GL.drawArrays(a, 0, this.gHash[b].lineVertexCount), this }, d.RendererGL.prototype._drawElements = function(a, b) { this.GL.drawElements(a, this.gHash[b].numberOfItems, this.GL.UNSIGNED_SHORT, 0) }, b.exports = d.RendererGL
        }, { "../core/core": 21 }],
        72: [function(a, b, c) { "use strict"; var d = a("../core/core"),
                e = a("../core/constants");
            a("./p5.Shader"), a("../core/p5.Renderer"), a("./p5.Matrix"); var f = [],
                g = [],
                h = { immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n", vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n", vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}", normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertTexCoord = aTexCoord;\n}\n", normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}", basicFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}", lightVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  vec3 ambientLightFactor = vec3(0.0);\n\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n\n  vec3 directionalLightFactor = vec3(0.0);\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, -dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n\n  vec3 pointLightFactor = vec3(0.0);\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n    vec3 loc = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n\n    float specularLightWeighting = 0.0;\n    if (uSpecular ){\n      vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n    }\n\n    pointLightFactor += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      + directionalLightWeighting * diffuseFactor);\n  }\n\n  vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n}\n", lightTextureFrag: "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  gl_FragColor = isTexture ? texture2D(uSampler, vVertTexCoord) : uMaterialColor;\n  if (uUseLighting)\n    gl_FragColor.rgb *= vLightWeighting;\n}", phongVert: "precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform vec3 uAmbientColor[8];\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void){\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  // Pass varyings to fragment shader\n  vViewPosition = viewModelPosition.xyz;\n  gl_Position = uProjectionMatrix * viewModelPosition;  \n\n  vNormal = normalize(uNormalMatrix * normalize(aNormal));\n  vTexCoord = aTexCoord;\n\n  vAmbientColor = vec3(0.0);\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    vAmbientColor += uAmbientColor[i];\n  }\n}\n", phongFrag: "precision mediump float;\n\n//uniform mat4 uModelViewMatrix;\nuniform mat4 uViewMatrix;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvec3 V;\nvec3 N;\n\nconst float shininess = 32.0;\nconst float specularFactor = 2.0;\nconst float diffuseFactor = 0.73;\n\nstruct LightResult {\n\tfloat specular;\n\tfloat diffuse;\n};\n\nfloat phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  vec3 R = normalize(reflect(-lightDirection, surfaceNormal));  \n  return pow(max(0.0, dot(R, viewDirection)), shininess);\n}\n\nfloat lambertDiffuse(\n  vec3 lightDirection,\n  vec3 surfaceNormal) {\n  return max(0.0, dot(-lightDirection, surfaceNormal));\n}\n\nLightResult light(vec3 lightVector) {\n\n  vec3 L = normalize(lightVector);\n\n  //compute our diffuse & specular terms\n  LightResult lr;\n  if (uSpecular)\n    lr.specular = phongSpecular(L, V, N, shininess);\n  lr.diffuse = lambertDiffuse(L, N);\n  return lr;\n}\n\nvoid main(void) {\n\n  V = normalize(vViewPosition);\n  N = vNormal;\n\n  vec3 diffuse = vec3(0.0);\n  float specular = 0.0;\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n\n    LightResult result = light(uLightingDirection[j]);\n    diffuse += result.diffuse * uDirectionalColor[j];\n    specular += result.specular;\n  }\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n\n    vec3 lightPosition = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightVector = vViewPosition - lightPosition;\n\t\n    //calculate attenuation\n    float lightDistance = length(lightVector);\n    float falloff = 500.0 / (lightDistance + 500.0);\n\n    LightResult result = light(lightVector);\n    diffuse += result.diffuse * falloff * uPointLightColor[k];\n    specular += result.specular * falloff;\n  }\n\n  gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) : uMaterialColor;\n  gl_FragColor.rgb = gl_FragColor.rgb * (diffuse * diffuseFactor + vAmbientColor) + specular * specularFactor;\n}", lineVert: "/*\n  Part of the Processing project - http://processing.org\n  Copyright (c) 2012-15 The Processing Foundation\n  Copyright (c) 2004-12 Ben Fry and Casey Reas\n  Copyright (c) 2001-04 Massachusetts Institute of Technology\n  This library is free software; you can redistribute it and/or\n  modify it under the terms of the GNU Lesser General Public\n  License as published by the Free Software Foundation, version 2.1.\n  This library is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n  Lesser General Public License for more details.\n  You should have received a copy of the GNU Lesser General\n  Public License along with this library; if not, write to the\n  Free Software Foundation, Inc., 59 Temple Place, Suite 330,\n  Boston, MA  02111-1307  USA\n*/\n\n#define PROCESSING_LINE_SHADER\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uStrokeWeight;\n\nuniform vec4 uViewport;\nvec3 scale = vec3(1.0);\n\nattribute vec4 aPosition;\nattribute vec4 aDirection;\n  \nvoid main() {\n  vec4 posp = uModelViewMatrix * aPosition;\n  vec4 posq = uModelViewMatrix * (aPosition + vec4(aDirection.xyz, 0));\n\n  // Moving vertices slightly toward the camera\n  // to avoid depth-fighting with the fill triangles.\n  // Discussed here:\n  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848  \n  posp.xyz = posp.xyz * scale;\n  posq.xyz = posq.xyz * scale;\n\n  vec4 p = uProjectionMatrix * posp;\n  vec4 q = uProjectionMatrix * posq;\n\n  // formula to convert from clip space (range -1..1) to screen space (range 0..[width or height])\n  // screen_p = (p.xy/p.w + <1,1>) * 0.5 * uViewport.zw\n\n  // prevent division by W by transforming the tangent formula (div by 0 causes\n  // the line to disappear, see https://github.com/processing/processing/issues/5183)\n  // t = screen_q - screen_p\n  //\n  // tangent is normalized and we don't care which aDirection it points to (+-)\n  // t = +- normalize( screen_q - screen_p )\n  // t = +- normalize( (q.xy/q.w+<1,1>)*0.5*uViewport.zw - (p.xy/p.w+<1,1>)*0.5*uViewport.zw )\n  //\n  // extract common factor, <1,1> - <1,1> cancels out\n  // t = +- normalize( (q.xy/q.w - p.xy/p.w) * 0.5 * uViewport.zw )\n  //\n  // convert to common divisor\n  // t = +- normalize( ((q.xy*p.w - p.xy*q.w) / (p.w*q.w)) * 0.5 * uViewport.zw )\n  //\n  // remove the common scalar divisor/factor, not needed due to normalize and +-\n  // (keep uViewport - can't remove because it has different components for x and y\n  //  and corrects for aspect ratio, see https://github.com/processing/processing/issues/5181)\n  // t = +- normalize( (q.xy*p.w - p.xy*q.w) * uViewport.zw )\n\n  vec2 tangent = normalize((q.xy*p.w - p.xy*q.w) * uViewport.zw);\n\n  // flip tangent to normal (it's already normalized)\n  vec2 normal = vec2(-tangent.y, tangent.x);\n\n  float thickness = aDirection.w * uStrokeWeight;\n  vec2 offset = normal * thickness / 2.0;\n\n  // Perspective ---\n  // convert from world to clip by multiplying with projection scaling factor\n  // to get the right thickness (see https://github.com/processing/processing/issues/5182)\n  // invert Y, projections in Processing invert Y\n  vec2 perspScale = (uProjectionMatrix * vec4(1, -1, 0, 0)).xy;\n\n  // No Perspective ---\n  // multiply by W (to cancel out division by W later in the pipeline) and\n  // convert from screen to clip (derived from clip to screen above)\n  vec2 noPerspScale = p.w / (0.5 * uViewport.zw);\n\n  //gl_Position.xy = p.xy + offset.xy * mix(noPerspScale, perspScale, float(perspective > 0));\n  gl_Position.xy = p.xy + offset.xy * perspScale;\n  gl_Position.zw = p.zw;\n}\n", lineFrag: "precision mediump float;\nprecision mediump int;\n\nuniform vec4 uMaterialColor;\n\nvoid main() {\n  gl_FragColor = uMaterialColor;\n}" };
            d.RendererGL = function(a, b, c, e) { return d.Renderer.call(this, a, b, c), this.attributes = {}, e = e || {}, this.attributes.alpha = void 0 === e.alpha || e.alpha, this.attributes.depth = void 0 === e.depth || e.depth, this.attributes.stencil = void 0 === e.stencil || e.stencil, this.attributes.antialias = void 0 !== e.antialias && e.antialias, this.attributes.premultipliedAlpha = void 0 !== e.premultipliedAlpha && e.premultipliedAlpha, this.attributes.preserveDrawingBuffer = void 0 === e.preserveDrawingBuffer || e.preserveDrawingBuffer, this.attributes.perPixelLighting = void 0 !== e.perPixelLighting && e.perPixelLighting, this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this.ambientLightColors = [], this.directionalLightDirections = [], this.directionalLightColors = [], this.pointLightPositions = [], this.pointLightColors = [], this.uMVMatrix = new d.Matrix, this.uPMatrix = new d.Matrix, this.uNMatrix = new d.Matrix("mat3"), this._curCamera = null, this._computeCameraDefaultSettings(), this.cameraFOV = this.defaultCameraFOV, this.cameraAspect = this.defaultAspect, this.cameraX = this.defaultCameraX, this.cameraY = this.defaultCameraY, this.cameraZ = this.defaultCameraZ, this.cameraNear = this.defaultCameraNear, this.cameraFar = this.defaultCameraFar, this.cameraMatrix = new d.Matrix(b), this.camera(), this.gHash = {}, this._defaultLightShader = void 0, this._defaultImmediateModeShader = void 0, this._defaultNormalShader = void 0, this._defaultColorShader = void 0, this.curFillShader = void 0, this.curStrokeShader = void 0, this._useColorShader(), this.setStrokeShader(this._getLineShader()), this.isImmediateDrawing = !1, this.immediateMode = {}, this.fill(255, 255, 255, 255), this.pointSize = 5, this.strokeWeight(2), this.stroke(0, 0, 0), this.textures = [], this.name = "p5.RendererGL", this }, d.RendererGL.prototype = Object.create(d.Renderer.prototype), d.RendererGL.prototype._initContext = function() { try { if (this.drawingContext = this.canvas.getContext("webgl", this.attributes) || this.canvas.getContext("experimental-webgl", this.attributes), null === this.drawingContext) throw new Error("Error creating webgl context");
                    console.log("p5.RendererGL: enabled webgl context"); var a = this.drawingContext;
                    a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), this._viewport = this.drawingContext.getParameter(this.drawingContext.VIEWPORT) } catch (a) { throw new Error(a) } }, d.RendererGL.prototype._resetContext = function(a, b, c) { var e = this.width,
                    f = this.height,
                    g = this.canvas.id,
                    h = this.canvas;
                h && h.parentNode.removeChild(h), h = document.createElement("canvas"), h.id = g, this._pInst._userNode ? this._pInst._userNode.appendChild(h) : document.body.appendChild(h), this._pInst.canvas = h; var i = new d.RendererGL(this._pInst.canvas, this._pInst, !0, a);
                this._pInst._setProperty("_renderer", i), i.resize(e, f), i._applyDefaults(), this._pInst._elements.push(i), "function" == typeof c && setTimeout(function() { c.apply(window._renderer, b) }, 0) }, d.prototype.setAttributes = function(a, b) { var c;
                void 0 !== b ? (c = {}, c[a] = b) : a instanceof Object && (c = a), this._renderer._resetContext(c) }, d.RendererGL.prototype._computeCameraDefaultSettings = function() { this.defaultCameraFOV = 60 / 180 * Math.PI, this.defaultCameraAspect = this.width / this.height, this.defaultCameraX = 0, this.defaultCameraY = 0, this.defaultCameraZ = this.height / 2 / Math.tan(this.defaultCameraFOV / 2), this.defaultCameraNear = .1 * this.defaultCameraZ, this.defaultCameraFar = 10 * this.defaultCameraZ }, d.RendererGL.prototype._setDefaultCamera = function() { null === this._curCamera && (this._computeCameraDefaultSettings(), this.cameraFOV = this.defaultCameraFOV, this.cameraAspect = this.defaultAspect, this.cameraX = this.defaultCameraX, this.cameraY = this.defaultCameraY, this.cameraZ = this.defaultCameraZ, this.cameraNear = this.defaultCameraNear, this.cameraFar = this.defaultCameraFar, this.perspective(), this.camera(), this._curCamera = "default") }, d.RendererGL.prototype._update = function() { this.uMVMatrix.set(this.cameraMatrix.mat4[0], this.cameraMatrix.mat4[1], this.cameraMatrix.mat4[2], this.cameraMatrix.mat4[3], this.cameraMatrix.mat4[4], this.cameraMatrix.mat4[5], this.cameraMatrix.mat4[6], this.cameraMatrix.mat4[7], this.cameraMatrix.mat4[8], this.cameraMatrix.mat4[9], this.cameraMatrix.mat4[10], this.cameraMatrix.mat4[11], this.cameraMatrix.mat4[12], this.cameraMatrix.mat4[13], this.cameraMatrix.mat4[14], this.cameraMatrix.mat4[15]), this.ambientLightColors.length = 0, this.directionalLightDirections.length = 0, this.directionalLightColors.length = 0, this.pointLightPositions.length = 0, this.pointLightColors.length = 0 }, d.RendererGL.prototype.background = function() { var a = this._pInst.color.apply(this._pInst, arguments),
                    b = a.levels[0] / 255,
                    c = a.levels[1] / 255,
                    d = a.levels[2] / 255,
                    e = a.levels[3] / 255;
                this.GL.clearColor(b, c, d, e), this.GL.depthMask(!0), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT) }, d.RendererGL.prototype.fill = function(a, b, c, f) { var g = d.prototype.color.apply(this._pInst, arguments);
                this.curFillColor = g._array, this.isImmediateDrawing ? this.setFillShader(this._getImmediateModeShader()) : this.setFillShader(this._getColorShader()), this.drawMode = e.FILL, this.curFillShader.setUniform("uMaterialColor", this.curFillColor) }, d.RendererGL.prototype.stroke = function(a, b, c, e) { arguments[3] = 255; var f = d.prototype.color.apply(this._pInst, arguments);
                this.curStrokeColor = f._array, this.curStrokeShader.setUniform("uMaterialColor", this.curStrokeColor) }, d.RendererGL.prototype.strokeWeight = function(a) { this.curStrokeWeight !== a && (this.pointSize = a, this.curStrokeWeight = a, this.curStrokeShader.setUniform("uStrokeWeight", a)) }, d.RendererGL.prototype.get = function(a, b, c, e) { return d.Renderer2D.prototype.get.apply(this, [a, b, c, e]) }, d.RendererGL.prototype.loadPixels = function() { if (!0 !== this.attributes.preserveDrawingBuffer) return void console.log("loadPixels only works in WebGL when preserveDrawingBuffer is true."); var a = this._pInst._pixelDensity,
                    b = this.width,
                    c = this.height;
                b *= a, c *= a, void 0 === this.pixels && (this.pixels = new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4)), this.GL.readPixels(0, 0, b, c, this.GL.RGBA, this.GL.UNSIGNED_BYTE, this.pixels), this._pInst._setProperty("pixels", this.pixels) }, d.RendererGL.prototype.geometryInHash = function(a) { return void 0 !== this.gHash[a] }, d.RendererGL.prototype.resize = function(a, b) { d.Renderer.prototype.resize.call(this, a, b), this.GL.viewport(0, 0, this.GL.drawingBufferWidth, this.GL.drawingBufferHeight), this._viewport = this.GL.getParameter(this.GL.VIEWPORT), null !== this._curCamera && "default" !== this._curCamera || (this._curCamera = null, this._setDefaultCamera()), void 0 !== this.pixels && (this.pixels = new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4)) }, d.RendererGL.prototype.clear = function() { this.GL.clearColor(arguments[0], arguments[1], arguments[2], arguments[3]), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT) }, d.RendererGL.prototype.translate = function(a, b, c) { return a instanceof d.Vector && (c = a.z, b = a.y, a = a.x), this.uMVMatrix.translate([a, b, c]), this }, d.RendererGL.prototype.scale = function(a, b, c) { return this.uMVMatrix.scale(a, b, c), this }, d.RendererGL.prototype.rotate = function(a, b) { return void 0 === b ? this.rotateZ(a) : (d.Matrix.prototype.rotate.apply(this.uMVMatrix, arguments), this) }, d.RendererGL.prototype.rotateX = function(a) { return this.rotate(a, 1, 0, 0), this }, d.RendererGL.prototype.rotateY = function(a) { return this.rotate(a, 0, 1, 0), this }, d.RendererGL.prototype.rotateZ = function(a) { return this.rotate(a, 0, 0, 1), this }, d.RendererGL.prototype.push = function() { f.push(this.uMVMatrix.copy()), g.push(this.cameraMatrix.copy()) }, d.RendererGL.prototype.pop = function() { if (0 === f.length) throw new Error("Invalid popMatrix!"); if (this.uMVMatrix = f.pop(), 0 === g.length) throw new Error("Invalid popMatrix!");
                this.cameraMatrix = g.pop() }, d.RendererGL.prototype.resetMatrix = function() { return this.uMVMatrix = d.Matrix.identity(this._pInst), this }, d.RendererGL.prototype._applyTextProperties = function() { console.error("text commands not yet implemented in webgl") }, d.RendererGL.prototype.setFillShader = function(a) { return this.curFillShader !== a && (this.curFillShader = a, this.curFillShader.init()), this.curFillShader }, d.RendererGL.prototype.setStrokeShader = function(a) { return this.curStrokeShader !== a && (this.curStrokeShader = a, this.curStrokeShader.init()), this.curStrokeShader }, d.RendererGL.prototype._useLightShader = function() { return this.curFillShader && this.curFillShader.isLightShader() || this.setFillShader(this._getLightShader()), this.curFillShader }, d.RendererGL.prototype._useColorShader = function() { return this.curFillShader && this.curFillShader !== this._defaultImmediateModeShader || this.setFillShader(this._getColorShader()), this.curFillShader }, d.RendererGL.prototype._useImmediateModeShader = function() { return this.curFillShader && this.curFillShader !== this._defaultColorShader || this.setFillShader(this._getImmediateModeShader()), this.curFillShader }, d.RendererGL.prototype._getLightShader = function() { return this._defaultLightShader || (this.attributes.perPixelLighting ? this._defaultLightShader = new d.Shader(this, h.phongVert, h.phongFrag) : this._defaultLightShader = new d.Shader(this, h.lightVert, h.lightTextureFrag)), this._defaultLightShader }, d.RendererGL.prototype._getImmediateModeShader = function() { return this._defaultImmediateModeShader || (this._defaultImmediateModeShader = new d.Shader(this, h.immediateVert, h.vertexColorFrag)), this._defaultImmediateModeShader }, d.RendererGL.prototype._getNormalShader = function() { return this._defaultNormalShader || (this._defaultNormalShader = new d.Shader(this, h.normalVert, h.normalFrag)), this._defaultNormalShader }, d.RendererGL.prototype._getColorShader = function() { return this._defaultColorShader || (this._defaultColorShader = new d.Shader(this, h.normalVert, h.basicFrag)), this._defaultColorShader }, d.RendererGL.prototype._getLineShader = function() { return this._defaultLineShader || (this._defaultLineShader = new d.Shader(this, h.lineVert, h.lineFrag)), this._defaultLineShader }, d.RendererGL.prototype._getEmptyTexture = function() { if (!this._emptyTexture) { var a = new d.Image(1, 1);
                    a.set(0, 0, 255), this._emptyTexture = new d.Texture(this, a) } return this._emptyTexture }, d.RendererGL.prototype.getTexture = function(a) { var b = function(b) { return b.src === a },
                    c = this.textures.find(b); return c || (c = new d.Texture(this, a), this.textures.push(c)), c }, d.RendererGL.prototype._bindBuffer = function(a, b, c, d, e) { if (this.GL.bindBuffer(b, a), void 0 !== c) { var f = new d(c);
                    this.GL.bufferData(b, f, e) } }, d.RendererGL.prototype._flatten = function(a) { if (0 === a.length) return []; if (a.length > 2e4) { var b, c = Object.prototype.toString,
                        d = "[object Array]",
                        e = [],
                        f = a.slice();
                    b = f.pop();
                    do { c.call(b) === d ? f.push.apply(f, b) : e.push(b) } while (f.length && void 0 !== (b = f.pop())); return e.reverse(), e } return [].concat.apply([], a) }, d.RendererGL.prototype._vToNArray = function(a) { return this._flatten(a.map(function(a) { return [a.x, a.y, a.z] })) }, b.exports = d.RendererGL }, { "../core/constants": 20, "../core/core": 21, "../core/p5.Renderer": 28, "./p5.Matrix": 69, "./p5.Shader": 73 }],
        73: [function(a, b, c) { "use strict"; var d = a("../core/core");
            d.Shader = function(a, b, c) { return this._renderer = a, this._vertSrc = b, this._fragSrc = c, this._vertShader = -1, this._fragShader = -1, this._glProgram = 0, this._loadedAttributes = !1, this.attributes = {}, this._loadedUniforms = !1, this.uniforms = {}, this._bound = !1, this.samplers = [], this }, d.Shader.prototype.init = function() { if (0 === this._glProgram) { var a = this._renderer.GL; if (this._vertShader = a.createShader(a.VERTEX_SHADER), a.shaderSource(this._vertShader, this._vertSrc), a.compileShader(this._vertShader), !a.getShaderParameter(this._vertShader, a.COMPILE_STATUS)) return console.error("Yikes! An error occurred compiling the vertex shader:" + a.getShaderInfoLog(this._vertShader)), null; if (this._fragShader = a.createShader(a.FRAGMENT_SHADER), a.shaderSource(this._fragShader, this._fragSrc), a.compileShader(this._fragShader), !a.getShaderParameter(this._fragShader, a.COMPILE_STATUS)) return console.error("Darn! An error occurred compiling the fragment shader:" + a.getShaderInfoLog(this._fragShader)), null;
                    this._glProgram = a.createProgram(), a.attachShader(this._glProgram, this._vertShader), a.attachShader(this._glProgram, this._fragShader), a.linkProgram(this._glProgram), a.getProgramParameter(this._glProgram, a.LINK_STATUS) || console.error("Snap! Error linking shader program: " + a.getProgramInfoLog(this._glProgram)), this._loadAttributes(), this._loadUniforms() } return this }, d.Shader.prototype._loadAttributes = function() { if (!this._loadedAttributes) { this.attributes = {}; for (var a = this._renderer.GL, b = a.getProgramParameter(this._glProgram, a.ACTIVE_ATTRIBUTES), c = 0; c < b; ++c) { var d = a.getActiveAttrib(this._glProgram, c),
                            e = d.name,
                            f = a.getAttribLocation(this._glProgram, e),
                            g = {};
                        g.name = e, g.location = f, g.type = d.type, g.size = d.size, this.attributes[e] = g }
                    this._loadedAttributes = !0 } }, d.Shader.prototype._loadUniforms = function() { if (!this._loadedUniforms) { for (var a = this._renderer.GL, b = a.getProgramParameter(this._glProgram, a.ACTIVE_UNIFORMS), c = 0, d = 0; d < b; ++d) { var e = a.getActiveUniform(this._glProgram, d),
                            f = {};
                        f.location = a.getUniformLocation(this._glProgram, e.name), f.size = e.size; var g = e.name;
                        e.size > 1 && (g = g.substring(0, g.indexOf("[0]"))), f.name = g, f.type = e.type, f.type === a.SAMPLER_2D && (f.samplerIndex = c, c++, this.samplers.push(f)), this.uniforms[g] = f }
                    this._loadedUniforms = !0 } }, d.Shader.prototype.compile = function() {}, d.Shader.prototype.bindShader = function() { this.init(), this._bound || (this.useProgram(), this._bound = !0, this.bindTextures(), this._loadAttributes(), this._loadUniforms(), this._renderer._setDefaultCamera(), this._setMatrixUniforms(), this === this._renderer.curStrokeShader && this._setViewportUniform()) }, d.Shader.prototype.unbindShader = function() { return this._bound && (this.unbindTextures(), this._bound = !1), this }, d.Shader.prototype.bindTextures = function() { for (var a = this._renderer.GL, b = 0; b < this.samplers.length; b++) { var c = this.samplers[b],
                        d = c.texture;
                    void 0 === d && (d = this._renderer._getEmptyTexture()), a.activeTexture(a.TEXTURE0 + c.samplerIndex), d.bindTexture(), d.update(), a.uniform1i(c.location, c.samplerIndex) } }, d.Shader.prototype.unbindTextures = function() {}, d.Shader.prototype._setMatrixUniforms = function() { this.setUniform("uProjectionMatrix", this._renderer.uPMatrix.mat4), this.setUniform("uModelViewMatrix", this._renderer.uMVMatrix.mat4), this.setUniform("uViewMatrix", this._renderer.cameraMatrix.mat4), this === this._renderer.curFillShader && (this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix), this.setUniform("uNormalMatrix", this._renderer.uNMatrix.mat3)) }, d.Shader.prototype._setViewportUniform = function() { this.setUniform("uViewport", this._renderer._viewport) }, d.Shader.prototype.useProgram = function() { return this._renderer.GL.useProgram(this._glProgram), this }, d.Shader.prototype.setUniform = function(a, b) { var c = this.uniforms[a]; if (c) { var d = c.location,
                        e = this._renderer.GL; switch (this.useProgram(), c.type) {
                        case e.BOOL:
                            !0 === b ? e.uniform1i(d, 1) : e.uniform1i(d, 0); break;
                        case e.INT:
                            c.size > 1 ? e.uniform1iv(d, b) : e.uniform1i(d, b); break;
                        case e.FLOAT:
                            c.size > 1 ? e.uniform1fv(d, b) : e.uniform1f(d, b); break;
                        case e.FLOAT_MAT3:
                            e.uniformMatrix3fv(d, !1, b); break;
                        case e.FLOAT_MAT4:
                            e.uniformMatrix4fv(d, !1, b); break;
                        case e.FLOAT_VEC2:
                            c.size > 1 ? e.uniform2fv(d, b) : e.uniform2f(d, b[0], b[1]); break;
                        case e.FLOAT_VEC3:
                            c.size > 1 ? e.uniform3fv(d, b) : e.uniform3f(d, b[0], b[1], b[2]); break;
                        case e.FLOAT_VEC4:
                            c.size > 1 ? e.uniform4fv(d, b) : e.uniform4f(d, b[0], b[1], b[2], b[3]); break;
                        case e.SAMPLER_2D:
                            e.activeTexture(e.TEXTURE0 + c.samplerIndex), c.texture = this._renderer.getTexture(b), e.uniform1i(c.location, c.samplerIndex) } return this } }, d.Shader.prototype.isLightShader = function() { return void 0 !== this.uniforms.uUseLighting || void 0 !== this.uniforms.uAmbientLightCount || void 0 !== this.uniforms.uDirectionalLightCount || void 0 !== this.uniforms.uPointLightCount || void 0 !== this.uniforms.uAmbientColor || void 0 !== this.uniforms.uDirectionalColor || void 0 !== this.uniforms.uPointLightLocation || void 0 !== this.uniforms.uPointLightColor || void 0 !== this.uniforms.uLightingDirection || void 0 !== this.uniforms.uSpecular }, d.Shader.prototype.isTextureShader = function() { return this.samplerIndex > 0 }, d.Shader.prototype.isColorShader = function() { return void 0 !== this.attributes.aVertexColor || void 0 !== this.uniforms.uMaterialColor }, d.Shader.prototype.isTexLightShader = function() { return this.isLightShader() && this.isTextureShader() }, d.Shader.prototype.isStrokeShader = function() { return void 0 !== this.uniforms.uStrokeWeight }, d.Shader.prototype.enableAttrib = function(a, b, c, d, e, f) { var g = this._renderer.GL; return -1 !== a && (g.enableVertexAttribArray(a), g.vertexAttribPointer(a, b, c, d, e, f)), this }, b.exports = d.Shader }, { "../core/core": 21 }],
        74: [function(a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.Texture = function(a, b) {
                this._renderer = a;
                var c = this._renderer.GL;
                this.src = b, this.glTex = void 0,
                    this.glTarget = c.TEXTURE_2D, this.glFormat = c.RGBA, this.mipmaps = !1, this.glMinFilter = c.LINEAR, this.glMagFilter = c.LINEAR, this.glWrapS = c.CLAMP_TO_EDGE, this.glWrapT = c.CLAMP_TO_EDGE, this.isSrcMediaElement = void 0 !== d.MediaElement && b instanceof d.MediaElement, this._videoPrevUpdateTime = 0, this.isSrcHTMLElement = void 0 !== d.Element && b instanceof d.Element && !(b instanceof d.Graphics), this.isSrcP5Image = b instanceof d.Image, this.isSrcP5Graphics = b instanceof d.Graphics;
                var e = this._getTextureDataFromSource();
                return this.width = e.width, this.height = e.height, this.init(e), this
            }, d.Texture.prototype._getTextureDataFromSource = function() { var a; return this.isSrcP5Image ? a = this.src.canvas : (this.isSrcMediaElement || this.isSrcP5Graphics || this.isSrcHTMLElement) && (a = this.src.elt), a }, d.Texture.prototype.init = function(a) { var b = this._renderer.GL; if (this.glTex = b.createTexture(), this.bindTexture(), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, this.glMagFilter), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, this.glMinFilter), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, this.glWrapS), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, this.glWrapT), 0 === this.width || 0 === this.height || this.isSrcMediaElement && !this.src.loadedmetadata) { var c = new Uint8Array([1, 1, 1, 1]);
                    b.texImage2D(this.glTarget, 0, b.RGBA, 1, 1, 0, this.glFormat, b.UNSIGNED_BYTE, c) } else b.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, b.UNSIGNED_BYTE, a) }, d.Texture.prototype.update = function() { var a = this.src; if (0 !== a.width && 0 !== a.height) { var b = this._getTextureDataFromSource(),
                        c = this._renderer.GL; if (b.width !== this.width || b.height !== this.height) this.width = b.width, this.height = b.height, this.bindTexture(), c.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, c.UNSIGNED_BYTE, b), this.isSrcP5Image ? a.setModified(!1) : (this.isSrcMediaElement || this.isSrcHTMLElement) && a.setModified(!0);
                    else if (this.isSrcP5Image) a.isModified() && (this.bindTexture(), c.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, c.UNSIGNED_BYTE, b), a.setModified(!1));
                    else if (this.isSrcMediaElement) { var d = !1;
                        a.isModified() ? (d = !0, a.setModified(!1)) : a.loadedmetadata && this._videoPrevUpdateTime !== a.time() && (this._videoPrevUpdateTime = a.time(), d = !0), d && (this.bindTexture(), c.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, c.UNSIGNED_BYTE, b)) } else c.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, c.UNSIGNED_BYTE, b) } }, d.Texture.prototype.bindTexture = function() { return this._renderer.GL.bindTexture(this.glTarget, this.glTex), this }, d.Texture.prototype.unbindTexture = function() { this._renderer.GL.bindTexture(this.glTarget, null) }, b.exports = d.Texture
        }, { "../core/core": 21 }],
        75: [function(a, b, c) { "use strict"; var d = a("../core/core");
            a("./p5.Geometry"), d.prototype.plane = function(a, b, c, e) { void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 1), void 0 === e && (e = 1); var f = "plane|" + c + "|" + e; if (!this._renderer.geometryInHash(f)) { var g = function() { for (var a, b, c, e = 0; e <= this.detailY; e++) { b = e / this.detailY; for (var f = 0; f <= this.detailX; f++) a = f / this.detailX, c = new d.Vector(a - .5, b - .5, 0), this.vertices.push(c), this.uvs.push([a, b]) } },
                        h = new d.Geometry(c, e, g);
                    h.computeFaces().computeNormals(), c <= 1 && e <= 1 ? (h._makeTriangleEdges(), this._renderer._edgesToVertices(h)) : console.log("Cannot draw stroke on plane objects with more than 1 detailX or 1 detailY"), this._renderer.createBuffers(f, h) }
                this._renderer.drawBuffersScaled(f, a, b, 0) }, d.prototype.box = function(a, b, c, e, f) { void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = b), void 0 === e && (e = 4), void 0 === f && (f = 4); var g = "box|" + e + "|" + f; if (!this._renderer.geometryInHash(g)) { var h = function() { var a = [
                                [0, 4, 2, 6],
                                [1, 3, 5, 7],
                                [0, 1, 4, 5],
                                [2, 6, 3, 7],
                                [0, 2, 1, 3],
                                [4, 5, 6, 7]
                            ];
                            this.strokeIndices = [
                                [0, 1],
                                [1, 3],
                                [3, 2],
                                [6, 7],
                                [8, 9],
                                [9, 11],
                                [14, 15],
                                [16, 17],
                                [17, 19],
                                [18, 19],
                                [20, 21],
                                [22, 23]
                            ]; for (var b = 0; b < a.length; b++) { for (var c = a[b], e = 4 * b, f = 0; f < 4; f++) { var g = c[f],
                                        h = new d.Vector((2 * (1 & g) - 1) / 2, ((2 & g) - 1) / 2, ((4 & g) / 2 - 1) / 2);
                                    this.vertices.push(h), this.uvs.push([1 & f, (2 & f) / 2]) }
                                this.faces.push([e, e + 1, e + 2]), this.faces.push([e + 2, e + 1, e + 3]) } },
                        i = new d.Geometry(e, f, h);
                    i.computeNormals(), e <= 4 && f <= 4 ? (i._makeTriangleEdges(), this._renderer._edgesToVertices(i)) : console.log("Cannot draw stroke on box objects with more than 4 detailX or 4 detailY"), this._renderer.createBuffers(g, i) } return this._renderer.drawBuffersScaled(g, a, b, c), this }, d.prototype.sphere = function(a, b, c) { return void 0 === a && (a = 50), void 0 === b && (b = 24), void 0 === c && (c = 16), this.ellipsoid(a, a, a, b, c), this }; var e = function(a, b, c, e, f, g, h) { e = e < 3 ? 3 : e, f = f < 1 ? 1 : f, g = void 0 === g || g, h = void 0 === h || h; var i, j, k = (g ? 2 : 0) + (h ? 2 : 0),
                    l = e + 1,
                    m = Math.atan2(a - b, c),
                    n = g ? -2 : 0,
                    o = f + (h ? 2 : 0); for (i = n; i <= o; ++i) { var p, q = i / f,
                        r = c * q; for (i < 0 ? (r = 0, q = 1, p = a) : i > f ? (r = c, q = 1, p = b) : p = a + i / f * (b - a), -2 !== i && i !== f + 2 || (p = 0, q = 0), r -= c / 2, j = 0; j < l; ++j) this.vertices.push(new d.Vector(Math.sin(j * Math.PI * 2 / e) * p, r, Math.cos(j * Math.PI * 2 / e) * p)), this.vertexNormals.push(new d.Vector(i < 0 || i > f ? 0 : Math.sin(j * Math.PI * 2 / e) * Math.cos(m), i < 0 ? -1 : i > f ? 1 : Math.sin(m), i < 0 || i > f ? 0 : Math.cos(j * Math.PI * 2 / e) * Math.cos(m))), this.uvs.push([j / e, q]) } for (i = 0; i < f + k; ++i)
                    for (j = 0; j < e; ++j) this.faces.push([l * (i + 0) + 0 + j, l * (i + 0) + 1 + j, l * (i + 1) + 1 + j]), this.faces.push([l * (i + 0) + 0 + j, l * (i + 1) + 1 + j, l * (i + 1) + 0 + j]) };
            d.prototype.cylinder = function(a, b, c, f) { void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 24), void 0 === f && (f = 16); var g = "cylinder|" + c + "|" + f; if (!this._renderer.geometryInHash(g)) { var h = new d.Geometry(c, f);
                    e.call(h, 1, 1, 1, c, f, !0, !0), h.computeNormals(), c <= 24 && f <= 16 ? (h._makeTriangleEdges(), this._renderer._edgesToVertices(h)) : console.log("Cannot draw stroke on cylinder objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(g, h) } return this._renderer.drawBuffersScaled(g, a, a, b), this }, d.prototype.cone = function(a, b, c, f) { void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = 24), void 0 === f && (f = 16); var g = "cone|" + a + "|" + b + "|" + c + "|" + f; if (!this._renderer.geometryInHash(g)) { var h = new d.Geometry(c, f);
                    e.call(h, a, 0, b, c, f, !0, !0), h.computeNormals(), c <= 24 && f <= 16 ? (h._makeTriangleEdges(), this._renderer._edgesToVertices(h)) : console.log("Cannot draw stroke on cone objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(g, h) } return this._renderer.drawBuffers(g), this }, d.prototype.ellipsoid = function(a, b, c, e, f) { void 0 === a && (a = 50), void 0 === b && (b = a), void 0 === c && (c = a), void 0 === e && (e = 24), void 0 === f && (f = 16); var g = "ellipsoid|" + e + "|" + f; if (!this._renderer.geometryInHash(g)) { var h = function() { for (var a = 0; a <= this.detailY; a++)
                                for (var b = a / this.detailY, c = Math.PI * b - Math.PI / 2, e = Math.cos(c), f = Math.sin(c), g = 0; g <= this.detailX; g++) { var h = g / this.detailX,
                                        i = 2 * Math.PI * h,
                                        j = Math.cos(i),
                                        k = Math.sin(i),
                                        l = new d.Vector(e * k, f, e * j);
                                    this.vertices.push(l), this.vertexNormals.push(l), this.uvs.push([h, b]) } },
                        i = new d.Geometry(e, f, h);
                    i.computeFaces(), e <= 24 && f <= 24 ? (i._makeTriangleEdges(), this._renderer._edgesToVertices(i)) : console.log("Cannot draw stroke on ellipsoids with more than 24 detailX or 24 detailY"), this._renderer.createBuffers(g, i) } return this._renderer.drawBuffersScaled(g, a, b, c), this }, d.prototype.torus = function(a, b, c, e) { if (void 0 === a) a = 50;
                else if (!a) return; if (void 0 === b) b = 10;
                else if (!b) return;
                void 0 === c && (c = 24), void 0 === e && (e = 16); var f = (b / a).toPrecision(4),
                    g = "torus|" + f + "|" + c + "|" + e; if (!this._renderer.geometryInHash(g)) { var h = function() { for (var a = 0; a <= this.detailY; a++)
                                for (var b = a / this.detailY, c = 2 * Math.PI * b, e = Math.cos(c), g = Math.sin(c), h = 1 + f * e, i = 0; i <= this.detailX; i++) { var j = i / this.detailX,
                                        k = 2 * Math.PI * j,
                                        l = Math.cos(k),
                                        m = Math.sin(k),
                                        n = new d.Vector(h * l, h * m, f * g),
                                        o = new d.Vector(e * l, e * m, g);
                                    this.vertices.push(n), this.vertexNormals.push(o), this.uvs.push([j, b]) } },
                        i = new d.Geometry(c, e, h);
                    i.computeFaces(), c <= 24 && e <= 16 ? (i._makeTriangleEdges(), this._renderer._edgesToVertices(i)) : console.log("Cannot draw strokes on torus object with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(g, i) } return this._renderer.drawBuffersScaled(g, a, a, a), this }, d.RendererGL.prototype.point = function(a, b, c) { return console.log("point not yet implemented in webgl"), this }, d.RendererGL.prototype.triangle = function(a) { var b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[3],
                    g = a[4],
                    h = a[5],
                    i = "tri"; if (!this.geometryInHash(i)) { var j = function() { var a = [];
                            a.push(new d.Vector(0, 0, 0)), a.push(new d.Vector(0, 1, 0)), a.push(new d.Vector(1, 0, 0)), this.strokeIndices = [
                                [0, 1],
                                [1, 2],
                                [2, 0]
                            ], this.vertices = a, this.faces = [
                                [0, 1, 2]
                            ], this.uvs = [
                                [0, 0],
                                [0, 1],
                                [1, 1]
                            ] },
                        k = new d.Geometry(1, 1, j);
                    k._makeTriangleEdges(), this._edgesToVertices(k), k.computeNormals(), this.createBuffers(i, k) } var l = this.uMVMatrix.copy(); try { var m = new d.Matrix([e - b, f - c, 0, 0, g - b, h - c, 0, 0, 0, 0, 1, 0, b, c, 0, 1]).mult(this.uMVMatrix);
                    this.uMVMatrix = m, this.drawBuffers(i) } finally { this.uMVMatrix = l } return this }, d.RendererGL.prototype.ellipse = function(a) { var b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[3],
                    g = a[4] || 24,
                    h = "ellipse|" + g; if (!this.geometryInHash(h)) { var i = function() { this.vertices.push(new d.Vector(.5, .5, 0)), this.uvs.push([.5, .5]); for (var a = 0; a <= this.detailX; a++) { var b = a / this.detailX,
                                    c = 2 * Math.PI * b,
                                    e = .5 + Math.cos(c) / 2,
                                    f = .5 + Math.sin(c) / 2;
                                this.vertices.push(new d.Vector(e, f, 0)), this.uvs.push([e, f]), this.faces.push([0, (a + 1) % this.detailX + 1, a + 1]) } },
                        j = new d.Geometry(g, 1, i);
                    j.computeNormals(), g <= 50 ? (j._makeTriangleEdges(), this._edgesToVertices(j)) : console.log("Cannot stroke ellipse with more than 50 detailX"), this.createBuffers(h, j) } var k = this.uMVMatrix.copy(); try { this.uMVMatrix.translate([b, c, 0]), this.uMVMatrix.scale(e, f, 1), this.drawBuffers(h) } finally { this.uMVMatrix = k } return this }, d.RendererGL.prototype.rect = function(a) { var b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[3],
                    g = a[4] || 24,
                    h = a[5] || 16,
                    i = "rect|" + g + "|" + h; if (!this.geometryInHash(i)) { var j = function() { for (var a = 0; a <= this.detailY; a++)
                                for (var b = a / this.detailY, c = 0; c <= this.detailX; c++) { var e = c / this.detailX,
                                        f = new d.Vector(e, b, 0);
                                    this.vertices.push(f), this.uvs.push([e, b]) } },
                        k = new d.Geometry(g, h, j);
                    k.computeFaces().computeNormals()._makeTriangleEdges(), this._edgesToVertices(k), this.createBuffers(i, k) } var l = this.uMVMatrix.copy(); try { this.uMVMatrix.translate([b, c, 0]), this.uMVMatrix.scale(e, f, 1), this.drawBuffers(i) } finally { this.uMVMatrix = l } return this }, d.RendererGL.prototype.quad = function(a, b, c, e, f, g, h, i) { var j = "quad|" + a + "|" + b + "|" + c + "|" + e + "|" + f + "|" + g + "|" + h + "|" + i; if (!this.geometryInHash(j)) { var k = function() { this.vertices.push(new d.Vector(a, b, 0)), this.vertices.push(new d.Vector(c, e, 0)), this.vertices.push(new d.Vector(f, g, 0)), this.vertices.push(new d.Vector(h, i, 0)), this.uvs.push([0, 0], [1, 0], [1, 1], [0, 1]), this.strokeIndices = [
                                [0, 1],
                                [1, 2],
                                [2, 3],
                                [3, 0]
                            ] },
                        l = new d.Geometry(2, 2, k);
                    l.computeNormals()._makeTriangleEdges(), this._edgesToVertices(l), l.faces = [
                        [0, 1, 2],
                        [2, 3, 0]
                    ], this.createBuffers(j, l) } return this.drawBuffers(j), this }, d.RendererGL.prototype.bezier = function(a, b, c, d, e, f, g, h, i, j, k, l) { var m = this._pInst._bezierDetail || 20;
                this.beginShape(); for (var n = 0; n <= m; n++) { var o = Math.pow(1 - n / m, 3),
                        p = n / m * 3 * Math.pow(1 - n / m, 2),
                        q = 3 * Math.pow(n / m, 2) * (1 - n / m),
                        r = Math.pow(n / m, 3);
                    this.vertex(a * o + d * p + g * q + j * r, b * o + e * p + h * q + k * r, c * o + f * p + i * q + l * r) } return this.endShape(), this }, d.RendererGL.prototype.curve = function(a, b, c, d, e, f, g, h, i, j, k, l) { var m = this._pInst._curveDetail;
                this.beginShape(); for (var n = 0; n <= m; n++) { var o = .5 * Math.pow(n / m, 3),
                        p = .5 * Math.pow(n / m, 2),
                        q = n / m * .5,
                        r = .5,
                        s = o * (3 * d - a - 3 * g + j) + p * (2 * a - 5 * d + 4 * g - j) + q * (-a + g) + r * (2 * d),
                        t = o * (3 * e - b - 3 * h + k) + p * (2 * b - 5 * e + 4 * h - k) + q * (-b + h) + r * (2 * e),
                        u = o * (3 * f - c - 3 * i + l) + p * (2 * c - 5 * f + 4 * i - l) + q * (-c + i) + r * (2 * f);
                    this.vertex(s, t, u) } return this.endShape(), this }, d.RendererGL.prototype.line = function() { return 6 === arguments.length ? (this.beginShape(), this.vertex(arguments[0], arguments[1], arguments[2]), this.vertex(arguments[3], arguments[4], arguments[5]), this.endShape()) : 4 === arguments.length && (this.beginShape(), this.vertex(arguments[0], arguments[1], 0), this.vertex(arguments[2], arguments[3], 0), this.endShape()), this }, b.exports = d }, { "../core/core": 21, "./p5.Geometry": 68 }]
    }, {}, [12])(12)
});