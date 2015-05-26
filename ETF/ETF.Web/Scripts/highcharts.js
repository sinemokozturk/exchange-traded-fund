﻿/*
 Highcharts 4.0.4 JS v/Highstock 2.0.4 (2014-09-02)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function () {
    function z(a, b) { var c; a || (a = {}); for (c in b) a[c] = b[c]; return a } function E() { var a, b = arguments, c, d = {}, e = function (a, b) { var c, d; "object" !== typeof a && (a = {}); for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]); return a }; !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2)); c = b.length; for (a = 0; a < c; a++) d = e(d, b[a]); return d } function C(a, b) {
        return parseInt(a,
        b || 10)
    } function ga(a) { return "string" === typeof a } function aa(a) { return a && "object" === typeof a } function na(a) { return "[object Array]" === Object.prototype.toString.call(a) } function ba(a) { return "number" === typeof a } function Ja(a) { return K.log(a) / K.LN10 } function ca(a) { return K.pow(10, a) } function oa(a, b) { for (var c = a.length; c--;) if (a[c] === b) { a.splice(c, 1); break } } function u(a) { return a !== w && null !== a } function D(a, b, c) {
        var d, e; if (ga(b)) u(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (u(b) &&
        aa(b)) for (d in b) a.setAttribute(d, b[d]); return e
    } function pa(a) { return na(a) ? a : [a] } function l() { var a = arguments, b, c, d = a.length; for (b = 0; b < d; b++) if (c = a[b], c !== w && null !== c) return c } function P(a, b) { ha && !Q && b && b.opacity !== w && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")"); z(a.style, b) } function qa(a, b, c, d, e) { a = B.createElement(a); b && z(a, b); e && P(a, { padding: 0, border: "none", margin: 0 }); c && P(a, c); d && d.appendChild(a); return a } function Va(a, b) { var c = function () { return w }; c.prototype = new a; z(c.prototype, b); return c }
    function da(a, b, c, d) { var e = W.numberFormat, f = J.lang, g = +a || 0, h = -1 === b ? (g.toString().split(".")[1] || "").length : isNaN(b = X(b)) ? 2 : b, k = void 0 === c ? f.decimalPoint : c, f = void 0 === d ? f.thousandsSep : d, m = 0 > g ? "-" : "", q = String(C(g = X(g).toFixed(h))), p = 3 < q.length ? q.length % 3 : 0; return e !== da ? e(a, b, c, d) : m + (p ? q.substr(0, p) + f : "") + q.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + f) + (h ? k + X(g - q).toFixed(h).slice(2) : "") } function ia(a, b) { return Array((b || 2) + 1 - String(a).length).join(0) + a } function Ka(a, b, c) {
        var d = a[b]; a[b] = function () {
            var a =
            Array.prototype.slice.call(arguments); a.unshift(d); return c.apply(this, a)
        }
    } function wa(a, b) { for (var c = "{", d = !1, e, f, g, h, k, m = []; -1 !== (c = a.indexOf(c)) ;) { e = a.slice(0, c); if (d) { f = e.split(":"); g = f.shift().split("."); k = g.length; e = b; for (h = 0; h < k; h++) e = e[g[h]]; f.length && (f = f.join(":"), g = /\.([0-9])/, h = J.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, null !== e && (e = da(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = xa(f, e)) } m.push(e); a = a.slice(c + 1); c = (d = !d) ? "}" : "{" } m.push(a); return m.join("") }
    function nb(a, b, c, d) { var e; c = l(c, 1); e = a / c; b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c]))); for (d = 0; d < b.length && !(a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) ; d++); return a * c } function La(a, b) { var c = a.length, d, e; for (e = 0; e < c; e++) a[e].ss_i = e; a.sort(function (a, c) { d = b(a, c); return 0 === d ? a.ss_i - c.ss_i : d }); for (e = 0; e < c; e++) delete a[e].ss_i } function ya(a) { for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]); return c } function ra(a) { for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]); return c } function za(a, b) {
        for (var c in a) a[c] &&
        a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    } function Aa(a) { Ba || (Ba = qa("div")); a && Ba.appendChild(a); Ba.innerHTML = "" } function Y(a) { return parseFloat(a.toPrecision(14)) } function Wa() { var a = J.global.useUTC, b = a ? "getUTC" : "get"; Xa = J.global.Date || window.Date; Ya = 6E4 * (a && J.global.timezoneOffset || 0); Za = b + "Minutes"; $a = b + "Hours"; ab = b + "Day"; bb = b + "Date"; cb = b + "Month"; db = b + "FullYear" } function L() { } function ka(a, b, c, d) { this.axis = a; this.pos = b; this.type = c || ""; this.isNew = !0; c || d || this.addLabel() } function Ca() {
        this.init.apply(this,
        arguments)
    } function Ma() { this.init.apply(this, arguments) } var w, B = document, x = window, K = Math, A = K.round, R = K.floor, la = K.ceil, v = K.max, U = K.min, X = K.abs, sa = K.cos, Da = K.sin, eb = K.PI, fb = 2 * eb / 360, ja = navigator.userAgent, ob = x.opera, ha = /msie/i.test(ja) && !ob, pb = /AppleWebKit/.test(ja), Ea = /Firefox/.test(ja), gb = /(Mobile|Android|Windows Phone)/.test(ja), Q = !!B.createElementNS && !!B.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, qb = Ea && 4 > parseInt(ja.split("Firefox/")[1], 10), Z = !Q && !ha && !!B.createElement("canvas").getContext,
    hb = {}, Na = 0, Ba, J, xa, S, Oa, O, ea = [], ib = 0, rb = /^[0-9]+$/, Xa, Ya, Za, $a, ab, bb, cb, db, ta = {}, W; x.Highcharts ? O(16, !0) : W = x.Highcharts = {}; xa = function (a, b, c) {
        if (!u(b) || isNaN(b)) return "Invalid date"; a = l(a, "%Y-%m-%d %H:%M:%S"); var d = new Xa(b - Ya), e, f = d[$a](), g = d[ab](), h = d[bb](), k = d[cb](), m = d[db](), q = J.lang, p = q.weekdays, d = z({
            a: p[g].substr(0, 3), A: p[g], d: ia(h), e: h, b: q.shortMonths[k], B: q.months[k], m: ia(k + 1), y: m.toString().substr(2, 2), Y: m, H: ia(f), I: ia(f % 12 || 12), l: f % 12 || 12, M: ia(d[Za]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm",
            S: ia(d.getSeconds()), L: ia(A(b % 1E3), 3)
        }, W.dateFormats); for (e in d) for (; -1 !== a.indexOf("%" + e) ;) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]); return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    }; O = function (a, b) { var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a; if (b) throw c; x.console && console.log(c) }; Oa = {
        init: function (a, b, c) {
            b = b || ""; var d = a.shift, e = -1 < b.indexOf("C"), f = e ? 7 : 3, g; b = b.split(" "); c = [].concat(c); var h, k, m = function (a) {
                for (g = a.length; g--;) "M" === a[g] && a.splice(g + 1, 0, a[g + 1],
                a[g + 2], a[g + 1], a[g + 2])
            }; e && (m(b), m(c)); a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6, 6)); if (d <= c.length / f && b.length === c.length) for (; d--;) c = [].concat(c).splice(0, f).concat(c); a.shift = 0; if (b.length) for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d); h && (b = b.concat(h), c = c.concat(k)); return [b, c]
        }, step: function (a, b, c, d) {
            var e = [], f = a.length; if (1 === c) e = d; else if (f === b.length && 1 > c) for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] -
            d) + d; else e = b; return e
        }
    }; (function (a) {
        x.HighchartsAdapter = x.HighchartsAdapter || a && {
            init: function (b) {
                var c = a.fx; a.extend(a.easing, { easeOutQuad: function (a, b, c, g, h) { return -g * (b /= h) * (b - 2) + c } }); a.each(["cur", "_default", "width", "height", "opacity"], function (b, e) { var f = c.step, g; "cur" === e ? f = c.prototype : "_default" === e && a.Tween && (f = a.Tween.propHooks[e], e = "set"); (g = f[e]) && (f[e] = function (a) { var c; a = b ? a : this; if ("align" !== a.prop) return c = a.elem, c.attr ? c.attr(a.prop, "cur" === e ? w : a.now) : g.apply(this, arguments) }) });
                Ka(a.cssHooks.opacity, "get", function (a, b, c) { return b.attr ? b.opacity || 0 : a.call(this, b, c) }); this.addAnimSetter("d", function (a) { var c = a.elem, f; a.started || (f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0); c.attr("d", b.step(a.start, a.end, a.pos, c.toD)) }); this.each = Array.prototype.forEach ? function (a, b) { return Array.prototype.forEach.call(a, b) } : function (a, b) { var c, g = a.length; for (c = 0; c < g; c++) if (!1 === b.call(a[c], a[c], c, a)) return c }; a.fn.highcharts = function () {
                    var a = "Chart", b = arguments, c, g; this[0] &&
                    (ga(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)), c = b[0], c !== w && (c.chart = c.chart || {}, c.chart.renderTo = this[0], new W[a](c, b[1]), g = this), c === w && (g = ea[D(this[0], "data-highcharts-chart")])); return g
                }
            }, addAnimSetter: function (b, c) { a.Tween ? a.Tween.propHooks[b] = { set: c } : a.fx.step[b] = c }, getScript: a.getScript, inArray: a.inArray, adapterRun: function (b, c) { return a(b)[c]() }, grep: a.grep, map: function (a, c) { for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a); return d }, offset: function (b) { return a(b).offset() },
            addEvent: function (b, c, d) { a(b).bind(c, d) }, removeEvent: function (b, c, d) { var e = B.removeEventListener ? "removeEventListener" : "detachEvent"; B[e] && b && !b[e] && (b[e] = function () { }); a(b).unbind(c, d) }, fireEvent: function (b, c, d, e) {
                var f = a.Event(c), g = "detached" + c, h; !ha && d && (delete d.layerX, delete d.layerY, delete d.returnValue); z(f, d); b[c] && (b[g] = b[c], b[c] = null); a.each(["preventDefault", "stopPropagation"], function (a, b) { var c = f[b]; f[b] = function () { try { c.call(f) } catch (a) { "preventDefault" === b && (h = !0) } } }); a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null); !e || f.isDefaultPrevented() || h || e(f)
            }, washMouseEvent: function (a) { var c = a.originalEvent || a; c.pageX === w && (c.pageX = a.pageX, c.pageY = a.pageY); return c }, animate: function (b, c, d) { var e = a(b); b.style || (b.style = {}); c.d && (b.toD = c.d, c.d = 1); e.stop(); c.opacity !== w && b.attr && (c.opacity += "px"); b.hasAnim = 1; e.animate(c, d) }, stop: function (b) { b.hasAnim && a(b).stop() }
        }
    })(x.jQuery); var Fa = x.HighchartsAdapter, V = Fa || {}; Fa && Fa.init.call(Fa, Oa); var Ga = V.adapterRun, sb = V.inArray, t = V.each, jb = V.grep, kb =
    V.map, M = V.addEvent, T = V.removeEvent, N = V.fireEvent, lb = V.animate, Pa = V.stop, Qa = { enabled: !0, x: 0, y: 15, style: { color: "#606060", cursor: "default", fontSize: "11px" } }; J = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
            loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","
        }, global: { useUTC: !0, canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/gfx/vml-radial-gradient.png" }, chart: {
            borderColor: "#4572A7", borderRadius: 0, defaultSeriesType: "line",
            ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }
        }, title: { text: "Chart title", align: "center", margin: 15, style: { color: "#333333", fontSize: "18px" } }, subtitle: { text: "", align: "center", style: { color: "#555555" } }, plotOptions: {
            line: {
                allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2, marker: {
                    lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: {
                        hover: {
                            enabled: !0, lineWidthPlus: 1,
                            radiusPlus: 2
                        }, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 }
                    }
                }, point: { events: {} }, dataLabels: E(Qa, { align: "center", enabled: !1, formatter: function () { return null === this.y ? "" : da(this.y, -1) }, verticalAlign: "bottom", y: 0 }), cropThreshold: 300, pointRange: 0, states: { hover: { lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3
            }
        }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: {
            enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name },
            borderColor: "#909090", borderRadius: 0, navigation: { activeColor: "#274b6d", inactiveColor: "#CCC" }, shadow: !1, itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold" }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
        }, loading: {
            labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
                position: "absolute", backgroundColor: "white", opacity: .5,
                textAlign: "center"
            }
        }, tooltip: {
            enabled: !0, animation: Q, backgroundColor: "rgba(249, 249, 249, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0, snap: gb ? 25 : 10, style: { color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap" }
        }, credits: { enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#909090", fontSize: "9px" } }
    }; var Ra = J.plotOptions; Wa(); var tb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, ub = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, vb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    ua = function (a) {
        var b = [], c, d; (function (a) { a && a.stops ? d = kb(a.stops, function (a) { return ua(a[1]) }) : (c = tb.exec(a)) ? b = [C(c[1]), C(c[2]), C(c[3]), parseFloat(c[4], 10)] : (c = ub.exec(a)) ? b = [C(c[1], 16), C(c[2], 16), C(c[3], 16), 1] : (c = vb.exec(a)) && (b = [C(c[1]), C(c[2]), C(c[3]), 1]) })(a); return {
            get: function (c) { var f; d ? (f = E(a), f.stops = [].concat(f.stops), t(d, function (a, b) { f.stops[b] = [f.stops[b][0], a.get(c)] })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a; return f }, brighten: function (a) {
                if (d) t(d,
                function (b) { b.brighten(a) }); else if (ba(a) && 0 !== a) { var c; for (c = 0; 3 > c; c++) b[c] += C(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255) } return this
            }, rgba: b, setOpacity: function (a) { b[3] = a; return this }
        }
    }; L.prototype = {
        opacity: 1, textProps: "fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow HcTextStroke".split(" "), init: function (a, b) { this.element = "span" === b ? qa(b) : B.createElementNS("http://www.w3.org/2000/svg", b); this.renderer = a }, animate: function (a, b, c) {
            b = l(b, S, !0); Pa(this); b ? (b = E(b, {}),
            c && (b.complete = c), lb(this, a, b)) : (this.attr(a), c && c()); return this
        }, colorGradient: function (a, b, c) {
            var d = this.renderer, e, f, g, h, k, m, q, p, r, n, l = []; a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient"); if (f) {
                g = a[f]; h = d.gradients; m = a.stops; r = c.radialReference; na(g) && (a[f] = g = { x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === f && r && !u(g.gradientUnits) && (g = E(g, { cx: r[0] - r[2] / 2 + g.cx * r[2], cy: r[1] - r[2] / 2 + g.cy * r[2], r: g.r * r[2], gradientUnits: "userSpaceOnUse" }));
                for (n in g) "id" !== n && l.push(n, g[n]); for (n in m) l.push(m[n]); l = l.join(","); h[l] ? a = h[l].attr("id") : (g.id = a = "highcharts-" + Na++, h[l] = k = d.createElement(f).attr(g).add(d.defs), k.stops = [], t(m, function (a) { 0 === a[1].indexOf("rgba") ? (e = ua(a[1]), q = e.get("rgb"), p = e.get("a")) : (q = a[1], p = 1); a = d.createElement("stop").attr({ offset: a[0], "stop-color": q, "stop-opacity": p }).add(k); k.stops.push(a) })); c.setAttribute(b, "url(" + d.url + "#" + a + ")")
            }
        }, attr: function (a, b) {
            var c, d, e = this.element, f, g = this, h; "string" === typeof a && b !==
            w && (c = a, a = {}, a[c] = b); if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (c in a) d = a[c], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d); this.doTransform && (this.updateTransform(),
                this.doTransform = !1)
            } return g
        }, updateShadows: function (a, b) { for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, "height" === a ? v(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b) }, addClass: function (a) { var b = this.element, c = D(b, "class") || ""; -1 === c.indexOf(a) && D(b, "class", c + " " + a); return this }, symbolAttr: function (a) { var b = this; t("x y r start end width height innerR anchorX anchorY".split(" "), function (c) { b[c] = l(a[c], b[c]) }); b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) }) }, clip: function (a) {
            return this.attr("clip-path",
            a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        }, crisp: function (a) { var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || 0; d = A(e) % 2 / 2; a.x = R(a.x || this.x || 0) + d; a.y = R(a.y || this.y || 0) + d; a.width = R((a.width || this.width || 0) - 2 * d); a.height = R((a.height || this.height || 0) - 2 * d); a.strokeWidth = e; for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]); return c }, css: function (a) {
            var b = this.styles, c = {}, d = this.element, e, f, g = ""; e = !b; a && a.color && (a.fill = a.color); if (b) for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0); if (e) {
                e = this.textWidth = a &&
                a.width && "text" === d.nodeName.toLowerCase() && C(a.width); b && (a = z(b, c)); this.styles = a; e && (Z || !Q && this.renderer.forExport) && delete a.width; if (ha && !Q) P(this.element, a); else { b = function (a, b) { return "-" + b.toLowerCase() }; for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";"; D(d, "style", g) } e && this.added && this.renderer.buildText(this)
            } return this
        }, on: function (a, b) { this.element["on" + a] = b; return this }, setRadialReference: function (a) { this.element.radialReference = a; return this }, translate: function (a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        }, invert: function () { this.inverted = !0; this.updateTransform(); return this }, updateTransform: function () {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element; e && (a += this.attr("width"), b += this.attr("height")); a = ["translate(" + a + "," + b + ")"]; e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")"); (u(c) || u(d)) && a.push("scale(" + l(c, 1) + " " + l(d, 1) + ")"); a.length && g.setAttribute("transform",
            a.join(" "))
        }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a, b, c) {
            var d, e, f, g, h = {}; e = this.renderer; f = e.alignedObjects; if (a) { if (this.alignOptions = a, this.alignByTranslate = b, !c || ga(c)) this.alignTo = d = c || "renderer", oa(f, this), f.push(this), c = null } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo; c = l(c, e[d], e); d = a.align; e = a.verticalAlign; f = (c.x || 0) + (a.x || 0); g = (c.y || 0) + (a.y || 0); if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d];
            h[b ? "translateX" : "x"] = A(f); if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1); h[b ? "translateY" : "y"] = A(g); this[this.placed ? "animate" : "attr"](h); this.placed = !0; this.alignAttr = h; return this
        }, getBBox: function () {
            var a = this.bBox, b = this.renderer, c, d, e = this.rotation; c = this.element; var f = this.styles, g = e * fb; d = this.textStr; var h; if ("" === d || rb.test(d)) h = "num." + d.toString().length + (f ? "|" + f.fontSize + "|" + f.fontFamily : ""); h && (a = b.cache[h]); if (!a) {
                if ("http://www.w3.org/2000/svg" ===
                c.namespaceURI || b.forExport) { try { a = c.getBBox ? z({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight } } catch (k) { } if (!a || 0 > a.width) a = { width: 0, height: 0 } } else a = this.htmlGetBBox(); b.isSVG && (c = a.width, d = a.height, ha && f && "11px" === f.fontSize && "16.9" === d.toPrecision(3) && (a.height = d = 14), e && (a.width = X(d * Da(g)) + X(c * sa(g)), a.height = X(d * sa(g)) + X(c * Da(g)))); this.bBox = a; h && (b.cache[h] = a)
            } return a
        }, show: function (a) {
            a && "http://www.w3.org/2000/svg" === this.element.namespaceURI ? this.element.removeAttribute("visibility") :
            this.attr({ visibility: a ? "inherit" : "visible" }); return this
        }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var b = this; b.animate({ opacity: 0 }, { duration: a || 150, complete: function () { b.attr({ y: -9999 }) } }) }, add: function (a) {
            var b = this.renderer, c = a || b, d = c.element || b.box, e = this.element, f = this.zIndex, g, h; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && b.buildText(this); f && (c.handleZ = !0, f = C(f)); if (c.handleZ) for (a = d.childNodes, g = 0; g < a.length; g++) if (b =
            a[g], c = D(b, "zIndex"), b !== e && (C(c) > f || !u(f) && u(c))) { d.insertBefore(e, b); h = !0; break } h || d.appendChild(e); this.added = !0; if (this.onAdd) this.onAdd(); return this
        }, safeRemoveChild: function (a) { var b = a.parentNode; b && b.removeChild(a) }, destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup, e, f; b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null; Pa(a); a.clipPath && (a.clipPath = a.clipPath.destroy()); if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] =
                a.stops[f].destroy(); a.stops = null
            } a.safeRemoveChild(b); for (c && t(c, function (b) { a.safeRemoveChild(b) }) ; d && d.div && 0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b; a.alignTo && oa(a.renderer.alignedObjects, a); for (e in a) delete a[e]; return null
        }, shadow: function (a, b, c) {
            var d = [], e, f, g = this.element, h, k, m, q; if (a) {
                k = l(a.width, 3); m = (a.opacity || .15) / k; q = this.parentInverted ? "(-1,-1)" : "(" + l(a.offsetX, 1) + ", " + l(a.offsetY, 1) + ")"; for (e = 1; e <= k; e++) f = g.cloneNode(0), h = 2 * k + 1 - 2 * e, D(f,
                { isShadow: "true", stroke: a.color || "black", "stroke-opacity": m * e, "stroke-width": h, transform: "translate" + q, fill: "none" }), c && (D(f, "height", v(D(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f); this.shadows = d
            } return this
        }, xGetter: function (a) { "circle" === this.element.nodeName && (a = { x: "cx", y: "cy" }[a] || a); return this._defaultGetter(a) }, _defaultGetter: function (a) {
            a = l(this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        }, dSetter: function (a, b, c) { a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); c.setAttribute(b, a); this[b] = a }, dashstyleSetter: function (a) {
            var b; if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (b = a.length; b--;) a[b] = C(a[b]) * this["stroke-width"]; a = a.join(",").replace("NaN",
                "none"); this.element.setAttribute("stroke-dasharray", a)
            }
        }, alignSetter: function (a) { this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]) }, opacitySetter: function (a, b, c) { this[b] = a; c.setAttribute(b, a) }, titleSetter: function (a) { var b = this.element.getElementsByTagName("title")[0]; b || (b = B.createElementNS("http://www.w3.org/2000/svg", "title"), this.element.appendChild(b)); b.textContent = l(a, "").replace(/<[^>]*>/g, "") }, textSetter: function (a) {
            a !== this.textStr && (delete this.bBox,
            this.textStr = a, this.added && this.renderer.buildText(this))
        }, fillSetter: function (a, b, c) { "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c) }, zIndexSetter: function (a, b, c) { c.setAttribute(b, a); this[b] = a }, _defaultSetter: function (a, b, c) { c.setAttribute(b, a) }
    }; L.prototype.yGetter = L.prototype.xGetter; L.prototype.translateXSetter = L.prototype.translateYSetter = L.prototype.rotationSetter = L.prototype.verticalAlignSetter = L.prototype.scaleXSetter = L.prototype.scaleYSetter = function (a, b) {
        this[b] = a; this.doTransform =
        !0
    }; L.prototype["stroke-widthSetter"] = L.prototype.strokeSetter = function (a, b, c) { this[b] = a; this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], L.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1) }; var va = function () { this.init.apply(this, arguments) }; va.prototype = {
        Element: L, init: function (a, b, c, d, e) {
            var f = location, g; d =
            this.createElement("svg").attr({ version: "1.1" }).css(this.getStyle(d)); g = d.element; a.appendChild(g); -1 === a.innerHTML.indexOf("xmlns") && D(g, "xmlns", "http://www.w3.org/2000/svg"); this.isSVG = !0; this.box = g; this.boxWrapper = d; this.alignedObjects = []; this.url = (Ea || pb) && B.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(B.createTextNode("Created with Highcharts 4.0.4 /Highstock 2.0.4")); this.defs =
            this.createElement("defs").add(); this.forExport = e; this.gradients = {}; this.cache = {}; this.setSize(b, c, !1); var h; Ea && a.getBoundingClientRect && (this.subPixelFix = b = function () { P(a, { left: 0, top: 0 }); h = a.getBoundingClientRect(); P(a, { left: la(h.left) - h.left + "px", top: la(h.top) - h.top + "px" }) }, b(), M(x, "resize", b))
        }, getStyle: function (a) { return this.style = z({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }, isHidden: function () { return !this.boxWrapper.getBBox().width },
        destroy: function () { var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); za(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.subPixelFix && T(x, "resize", this.subPixelFix); return this.alignedObjects = null }, createElement: function (a) { var b = new this.Element; b.init(this, a); return b }, draw: function () { }, buildText: function (a) {
            for (var b = a.element, c = this, d = c.forExport, e = l(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, k, m = D(b, "x"), q = a.styles, p = a.textWidth,
            r = q && q.lineHeight, n = q && q.HcTextStroke, G = g.length, y = function (a) { return r ? C(r) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : q && q.fontSize || c.style.fontSize || 12, a).h }; G--;) b.removeChild(g[G]); f || n || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, k = /<.*href="(http[^"]+)".*>/, p && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g,
            "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), t(e, function (e, f) {
                var g, n = 0; e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"); g = e.split("|||"); t(g, function (e) {
                    if ("" !== e || 1 === g.length) {
                        var r = {}, l = B.createElementNS("http://www.w3.org/2000/svg", "tspan"), G; h.test(e) && (G = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), D(l, "style", G)); k.test(e) && !d && (D(l, "onclick", 'location.href="' + e.match(k)[1] + '"'), P(l, { cursor: "pointer" })); e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g,
                        "<").replace(/&gt;/g, ">"); if (" " !== e) {
                            l.appendChild(B.createTextNode(e)); n ? r.dx = 0 : f && null !== m && (r.x = m); D(l, r); b.appendChild(l); !n && f && (!Q && d && P(l, { display: "block" }), D(l, "dy", y(l))); if (p) {
                                e = e.replace(/([^\^])-/g, "$1- ").split(" "); for (var r = 1 < g.length || 1 < e.length && "nowrap" !== q.whiteSpace, t, I, u = q.HcHeight, F = [], w = y(l), mb = 1; r && (e.length || F.length) ;) delete a.bBox, t = a.getBBox(), I = t.width, !Q && c.forExport && (I = c.measureSpanWidth(l.firstChild.data, a.styles)), (t = I > p) && 1 !== e.length ? (l.removeChild(l.firstChild),
                                F.unshift(e.pop())) : (e = F, F = [], e.length && (mb++, u && mb * w > u ? (e = ["..."], a.attr("title", a.textStr)) : (l = B.createElementNS("http://www.w3.org/2000/svg", "tspan"), D(l, { dy: w, x: m }), G && D(l, "style", G), b.appendChild(l))), I > p && (p = I)), e.length && l.appendChild(B.createTextNode(e.join(" ").replace(/- /g, "-")))
                            } n++
                        }
                    }
                })
            })) : b.appendChild(B.createTextNode(e))
        }, button: function (a, b, c, d, e, f, g, h, k) {
            var m = this.label(a, b, c, k, null, null, null, null, "button"), q = 0, p, r, n, l, y, t; a = { x1: 0, y1: 0, x2: 0, y2: 1 }; e = E({
                "stroke-width": 1, stroke: "#CCCCCC",
                fill: { linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]] }, r: 2, padding: 5, style: { color: "black" }
            }, e); n = e.style; delete e.style; f = E(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]] } }, f); l = f.style; delete f.style; g = E(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]] } }, g); y = g.style; delete g.style; h = E(e, { style: { color: "#CCC" } }, h); t = h.style; delete h.style; M(m.element, ha ? "mouseover" : "mouseenter", function () { 3 !== q && m.attr(f).css(l) }); M(m.element, ha ? "mouseout" : "mouseleave",
            function () { 3 !== q && (p = [e, f, g][q], r = [n, l, y][q], m.attr(p).css(r)) }); m.setState = function (a) { (m.state = q = a) ? 2 === a ? m.attr(g).css(y) : 3 === a && m.attr(h).css(t) : m.attr(e).css(n) }; return m.on("click", function () { 3 !== q && d.call(m) }).attr(e).css(z({ cursor: "default" }, n))
        }, crispLine: function (a, b) { a[1] === a[4] && (a[1] = a[4] = A(a[1]) - b % 2 / 2); a[2] === a[5] && (a[2] = a[5] = A(a[2]) + b % 2 / 2); return a }, path: function (a) { var b = { fill: "none" }; na(a) ? b.d = a : aa(a) && z(b, a); return this.createElement("path").attr(b) }, circle: function (a, b, c) {
            a = aa(a) ?
                a : { x: a, y: b, r: c }; b = this.createElement("circle"); b.xSetter = function (a) { this.element.setAttribute("cx", a) }; b.ySetter = function (a) { this.element.setAttribute("cy", a) }; return b.attr(a)
        }, arc: function (a, b, c, d, e, f) { aa(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x); a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 }); a.r = c; return a }, rect: function (a, b, c, d, e, f) {
            e = aa(a) ? a.r : e; var g = this.createElement("rect"); a = aa(a) ? a : a === w ? {} : { x: a, y: b, width: v(c, 0), height: v(d, 0) }; f !== w && (a.strokeWidth =
            f, a = g.crisp(a)); e && (a.r = e); g.rSetter = function (a) { D(this.element, { rx: a, ry: a }) }; return g.attr(a)
        }, setSize: function (a, b, c) { var d = this.alignedObjects, e = d.length; this.width = a; this.height = b; for (this.boxWrapper[l(c, !0) ? "animate" : "attr"]({ width: a, height: b }) ; e--;) d[e].align() }, g: function (a) { var b = this.createElement("g"); return u(a) ? b.attr({ "class": "highcharts-" + a }) : b }, image: function (a, b, c, d, e) {
            var f = { preserveAspectRatio: "none" }; 1 < arguments.length && z(f, { x: b, y: c, width: d, height: e }); f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a); return f
        }, symbol: function (a, b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(A(b), A(c), d, e, f), k = /^url\((.*?)\)$/, m, q; h ? (g = this.path(h), z(g, { symbolName: a, x: b, y: c, width: d, height: e }), f && z(g, f)) : k.test(a) && (q = function (a, b) { a.element && (a.attr({ width: b[0], height: b[1] }), a.alignByTranslate || a.translate(A((d - b[0]) / 2), A((e - b[1]) / 2))) }, m = a.match(k)[1], a = hb[m] || f && f.width && f.height && [f.width,
            f.height], g = this.image(m).attr({ x: b, y: c }), g.isImg = !0, a ? q(g, a) : (g.attr({ width: 0, height: 0 }), qa("img", { onload: function () { q(g, hb[m] = [this.width, this.height]) }, src: m }))); return g
        }, symbols: {
            circle: function (a, b, c, d) { var e = .166 * c; return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"] }, square: function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"] }, triangle: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"] }, "triangle-down": function (a, b, c, d) {
                return ["M", a, b, "L", a + c,
                b, a + c / 2, b + d, "Z"]
            }, diamond: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"] }, arc: function (a, b, c, d, e) { var f = e.start; c = e.r || c || d; var g = e.end - .001; d = e.innerR; var h = e.open, k = sa(f), m = Da(f), q = sa(g), g = Da(g); e = e.end - f < eb ? 0 : 1; return ["M", a + c * k, b + c * m, "A", c, c, 0, e, 1, a + c * q, b + c * g, h ? "M" : "L", a + d * q, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * m, h ? "" : "Z"] }, callout: function (a, b, c, d, e) {
                var f = U(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, k = e && e.anchorY; e = A(e.strokeWidth || 0) % 2 / 2; a += e; b += e; e = ["M", a + f, b, "L", a + c - f, b, "C",
                a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b]; h && h > c && k > b + g && k < b + d - g ? e.splice(13, 3, "L", a + c, k - 6, a + c + 6, k, a + c, k + 6, a + c, b + d - f) : h && 0 > h && k > b + g && k < b + d - g ? e.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, b + f) : k && k > d && h > a + g && h < a + c - g ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : k && 0 > k && h > a + g && h < a + c - g && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b); return e
            }
        }, clipRect: function (a, b, c, d) {
            var e = "highcharts-" + Na++, f = this.createElement("clipPath").attr({ id: e }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f); a.id = e; a.clipPath = f; return a
        }, text: function (a, b, c, d) { var e = Z || !Q && this.forExport, f = {}; if (d && !this.forExport) return this.html(a, b, c); f.x = Math.round(b || 0); c && (f.y = Math.round(c)); if (a || 0 === a) f.text = a; a = this.createElement("text").attr(f); e && a.css({ position: "absolute" }); d || (a.xSetter = function (a, b, c) { var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), r; for (r = 0; r < d.length; r++) e = d[r], e.getAttribute(b) === f && e.setAttribute(b, a); c.setAttribute(b, a) }); return a }, fontMetrics: function (a,
        b) { a = a || this.style.fontSize; b && x.getComputedStyle && (b = b.element || b, a = x.getComputedStyle(b, "").fontSize); a = /px/.test(a) ? C(a) : /em/.test(a) ? 12 * parseFloat(a) : 12; var c = 24 > a ? a + 4 : A(1.2 * a), d = A(.8 * c); return { h: c, b: d, f: a } }, label: function (a, b, c, d, e, f, g, h, k) {
            function m() {
                var a, b; a = l.element.style; F = (void 0 === ma || void 0 === C || n.styles.textAlign) && l.textStr && l.getBBox(); n.width = (ma || F.width || 0) + 2 * H + Ha; n.height = (C || F.height || 0) + 2 * H; fa = H + r.fontMetrics(a && a.fontSize, l).b; x && (y || (a = A(-v * H), b = h ? -fa : 0, n.box = y = d ? r.symbol(d,
                a, b, n.width, n.height, I) : r.rect(a, b, n.width, n.height, 0, I["stroke-width"]), y.attr("fill", "none").add(n)), y.isImg || y.attr(z({ width: A(n.width), height: A(n.height) }, I)), I = null)
            } function q() { var a = n.styles, a = a && a.textAlign, b = Ha + H * (1 - v), c; c = h ? 0 : fa; u(ma) && F && ("center" === a || "right" === a) && (b += { center: .5, right: 1 }[a] * (ma - F.width)); if (b !== l.x || c !== l.y) l.attr("x", b), c !== w && l.attr("y", c); l.x = b; l.y = c } function p(a, b) { y ? y.attr(a, b) : I[a] = b } var r = this, n = r.g(k), l = r.text("", 0, 0, g).attr({ zIndex: 1 }), y, F, v = 0, H = 3, Ha = 0, ma, C,
            B, Sa, D = 0, I = {}, fa, x; n.onAdd = function () { l.add(n); n.attr({ text: a || 0 === a ? a : "", x: b, y: c }); y && u(e) && n.attr({ anchorX: e, anchorY: f }) }; n.widthSetter = function (a) { ma = a }; n.heightSetter = function (a) { C = a }; n.paddingSetter = function (a) { u(a) && a !== H && (H = a, q()) }; n.paddingLeftSetter = function (a) { u(a) && a !== Ha && (Ha = a, q()) }; n.alignSetter = function (a) { v = { left: 0, center: .5, right: 1 }[a] }; n.textSetter = function (a) { a !== w && l.textSetter(a); m(); q() }; n["stroke-widthSetter"] = function (a, b) { a && (x = !0); D = a % 2 / 2; p(b, a) }; n.strokeSetter = n.fillSetter =
            n.rSetter = function (a, b) { "fill" === b && a && (x = !0); p(b, a) }; n.anchorXSetter = function (a, b) { e = a; p(b, a + D - B) }; n.anchorYSetter = function (a, b) { f = a; p(b, a - Sa) }; n.xSetter = function (a) { n.x = a; v && (a -= v * ((ma || F.width) + H)); B = A(a); n.attr("translateX", B) }; n.ySetter = function (a) { Sa = n.y = A(a); n.attr("translateY", Sa) }; var J = n.css; return z(n, {
                css: function (a) { if (a) { var b = {}; a = E(a); t(n.textProps, function (c) { a[c] !== w && (b[c] = a[c], delete a[c]) }); l.css(b) } return J.call(n, a) }, getBBox: function () {
                    return {
                        width: F.width + 2 * H, height: F.height +
                        2 * H, x: F.x - H, y: F.y - H
                    }
                }, shadow: function (a) { y && y.shadow(a); return n }, destroy: function () { T(n.element, "mouseenter"); T(n.element, "mouseleave"); l && (l = l.destroy()); y && (y = y.destroy()); L.prototype.destroy.call(n); n = r = m = q = p = null }
            })
        }
    }; ka.prototype = {
        addLabel: function () {
            var a = this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = a.names, g = this.pos, h = b.labels, k = h.rotation, m = a.tickPositions, d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / m.length || !d && (c.margin[3] || .33 * c.chartWidth), q = g === m[0], p =
            g === m[m.length - 1], r, f = e ? l(e[g], f[g], g) : g, e = this.label, n = m.info; a.isDatetimeAxis && n && (r = b.dateTimeLabelFormats[n.higherRanks[g] || n.unitName]); this.isFirst = q; this.isLast = p; b = a.labelFormatter.call({ axis: a, chart: c, isFirst: q, isLast: p, dateTimeLabelFormat: r, value: a.isLog ? Y(ca(f)) : f }); g = d && { width: v(1, A(d - 2 * (h.padding || 10))) + "px" }; u(e) ? e && e.attr({ text: b }).css(g) : (r = { align: a.labelAlign }, ba(k) && (r.rotation = k), d && h.ellipsis && (g.HcHeight = a.len / m.length), this.label = e = u(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(r).css(z(g,
            h.style)).add(a.labelGroup) : null, a.tickBaseline = c.renderer.fontMetrics(h.style.fontSize, e).b, k && 2 === a.side && (a.tickBaseline *= sa(k * fb))); this.yOffset = e ? l(h.y, a.tickBaseline + (2 === a.side ? 8 : -(e.getBBox().height / 2))) : 0
        }, getLabelSize: function () { var a = this.label, b = this.axis; return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0 }, getLabelSides: function () { var a = this.label.getBBox(), b = this.axis, c = b.horiz, d = b.options.labels, a = c ? a.width : a.height, b = c ? d.x - a * { left: 0, center: .5, right: 1 }[b.labelAlign] : 0; return [b, c ? a + b : a] },
        handleOverflow: function (a, b) {
            var c = !0, d = this.axis, e = this.isFirst, f = this.isLast, g = d.horiz ? b.x : b.y, h = d.reversed, k = d.tickPositions, m = this.getLabelSides(), q = m[0], m = m[1], p, r, n, l = this.label.line; p = l || 0; r = d.labelEdge; n = d.justifyLabels && (e || f); r[p] === w || g + q > r[p] ? r[p] = g + m : n || (c = !1); if (n) {
                p = (r = d.justifyToPlot) ? d.pos : 0; r = r ? p + d.len : d.chart.chartWidth; do a += e ? 1 : -1, n = d.ticks[k[a]]; while (k[a] && (!n || !n.label || n.label.line !== l)); d = n && n.label.xy && n.label.xy.x + n.getLabelSides()[e ? 0 : 1]; e && !h || f && h ? g + q < p && (g = p - q, n && g +
                m > d && (c = !1)) : g + m > r && (g = r - m, n && g + q < d && (c = !1)); b.x = g
            } return c
        }, getPosition: function (a, b, c, d) { var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight; return { x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB } }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var k = this.axis, m = k.transA, q = k.reversed, p = k.staggerLines; a = a + e.x - (f && d ? f * m * (q ? -1 : 1) :
            0); b = b + this.yOffset - (f && !d ? f * m * (q ? 1 : -1) : 0); p && (c.line = g / (h || 1) % p, b += k.labelOffset / p * c.line); return { x: a, y: b }
        }, getMarkPath: function (a, b, c, d, e, f) { return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d) }, render: function (a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, k = this.label, m = this.pos, q = e.labels, p = this.gridLine, r = h ? h + "Grid" : "grid", n = h ? h + "Tick" : "tick", t = e[r + "LineWidth"], y = e[r + "LineColor"], u = e[r + "LineDashStyle"], v = e[n + "Length"], r = e[n + "Width"] || 0, H = e[n + "Color"], z = e[n + "Position"],
            n = this.mark, A = q.step, C = !0, B = d.tickmarkOffset, x = this.getPosition(g, m, B, b), D = x.x, x = x.y, I = g && D === d.pos + d.len || !g && x === d.pos ? -1 : 1; c = l(c, 1); this.isActive = !0; if (t && (m = d.getPlotLinePath(m + B, t * I, b, !0), p === w && (p = { stroke: y, "stroke-width": t }, u && (p.dashstyle = u), h || (p.zIndex = 1), b && (p.opacity = 0), this.gridLine = p = t ? f.path(m).attr(p).add(d.gridGroup) : null), !b && p && m)) p[this.isNew ? "attr" : "animate"]({ d: m, opacity: c }); r && v && ("inside" === z && (v = -v), d.opposite && (v = -v), h = this.getMarkPath(D, x, v, r * I, g, f), n ? n.animate({ d: h, opacity: c }) :
            this.mark = f.path(h).attr({ stroke: H, "stroke-width": r, opacity: c }).add(d.axisGroup)); k && !isNaN(D) && (k.xy = x = this.getLabelPosition(D, x, k, g, q, B, a, A), this.isFirst && !this.isLast && !l(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(e.showLastLabel, 1) ? C = !1 : d.isRadial || q.step || q.rotation || b || 0 === c || (C = this.handleOverflow(a, x)), A && a % A && (C = !1), C && !isNaN(x.y) ? (x.opacity = c, k[this.isNew ? "attr" : "animate"](x), this.isNew = !1) : k.attr("y", -9999))
        }, destroy: function () { za(this, this.axis) }
    }; Ca.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"
            }, endOnTick: !1, gridLineColor: "#C0C0C0", labels: Qa, lineColor: "#C0D0E0", lineWidth: 1, minPadding: .01, maxPadding: .01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: { align: "middle", style: { color: "#707070" } },
            type: "linear"
        }, defaultYAxisOptions: { endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8, y: 3 }, lineWidth: 0, maxPadding: .05, minPadding: .05, startOnTick: !0, tickWidth: 0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function () { return da(this.total, -1) }, style: Qa.style } }, defaultLeftAxisOptions: { labels: { x: -15, y: null }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15, y: null }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { x: 0, y: null }, title: { rotation: 0 } },
        defaultTopAxisOptions: { labels: { x: 0, y: -15 }, title: { rotation: 0 } }, init: function (a, b) {
            var c = b.isX; this.horiz = a.inverted ? !c : c; this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis"; this.opposite = b.opposite; this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var d = this.options, e = d.type; this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter; this.userOptions = b; this.minPixelPadding = 0; this.chart = a; this.reversed = d.reversed; this.zoomEnabled = !1 !== d.zoomEnabled; this.categories =
            d.categories || "category" === e; this.names = []; this.isLog = "logarithmic" === e; this.isDatetimeAxis = "datetime" === e; this.isLinked = u(d.linkedTo); this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement && 1 === l(d.tickInterval, 1) ? .5 : 0; this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = d.minRange || d.maxZoom; this.range = d.range; this.offset = d.offset || 0; this.stacks = {}; this.oldStacks = {}; this.min = this.max = null; this.crosshair =
            l(d.crosshair, pa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1); var f, d = this.options.events; -1 === sb(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this)); this.series = this.series || []; a.inverted && c && this.reversed === w && (this.reversed = !0); this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; for (f in d) M(this, f, d[f]); this.isLog && (this.val2lin = Ja, this.lin2val = ca)
        }, setOptions: function (a) {
            this.options = E(this.defaultOptions, this.isXAxis ?
{} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], E(J[this.coll], a))
        }, defaultLabelFormatter: function () {
            var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = J.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval; if (h) g = wa(h, this); else if (c) g = b; else if (d) g = xa(d, b); else if (f && 1E3 <= a) for (; f-- && g === w;) c = Math.pow(1E3, f + 1), a >= c && null !== e[f] && (g =
            da(b / c, -1) + e[f]); g === w && (g = 1E4 <= X(b) ? da(b, 0) : da(b, -1, w, "")); return g
        }, getSeriesExtremes: function () {
            var a = this, b = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null; a.buildStacks && a.buildStacks(); t(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d; d = c.options.threshold; var e; a.hasVisibleSeries = !0; a.isLog && 0 >= d && (d = null); a.isXAxis ? (d = c.xData, d.length && (a.dataMin = U(l(a.dataMin, d[0]), ya(d)), a.dataMax = v(l(a.dataMax, d[0]), ra(d)))) : (c.getExtremes(),
                    e = c.dataMax, c = c.dataMin, u(c) && u(e) && (a.dataMin = U(l(a.dataMin, c), c), a.dataMax = v(l(a.dataMax, e), e)), u(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, a.ignoreMaxPadding = !0)))
                }
            })
        }, translate: function (a, b, c, d, e, f) {
            var g = 1, h = 0, k = d ? this.oldTransA : this.transA; d = d ? this.oldMin : this.min; var m = this.minPixelPadding; e = (this.options.ordinal || this.isLog && e) && this.lin2val; k || (k = this.transA); c && (g *= -1, h = this.len); this.reversed && (g *= -1, h -= g * (this.sector || this.len)); b ? (a = a * g + h - m, a = a / k +
            d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), "between" === f && (f = .5), a = g * (a - d) * k + h + g * m + (ba(f) ? k * f * this.pointRange : 0)); return a
        }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, c, d, e) {
            var f = this.chart, g = this.left, h = this.top, k, m, q = c && f.oldChartHeight || f.chartHeight, p = c && f.oldChartWidth || f.chartWidth, r; k = this.transB; e = l(e, this.translate(a, null, null,
            c)); a = c = A(e + k); k = m = A(q - e - k); if (isNaN(e)) r = !0; else if (this.horiz) { if (k = h, m = q - this.bottom, a < g || a > g + this.width) r = !0 } else if (a = g, c = p - this.right, k < h || k > h + this.height) r = !0; return r && !d ? null : f.renderer.crispLine(["M", a, k, "L", c, m], b || 1)
        }, getLinearTickPositions: function (a, b, c) { var d, e = Y(R(b / a) * a), f = Y(la(c / a) * a), g = []; if (b === c && ba(b)) return [b]; for (b = e; b <= f;) { g.push(b); b = Y(b + a); if (b === d) break; d = b } return g }, getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [],
            e; if (this.isLog) for (e = b.length, a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0)); else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift(); else for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b); return d
        }, adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, k, m; this.isXAxis && this.minRange ===
            w && !this.isLog && (u(a.min) || u(a.max) ? this.minRange = null : (t(this.series, function (a) { k = a.xData; for (g = m = a.xIncrement ? 1 : k.length - 1; 0 < g; g--) if (h = k[g] - k[g - 1], f === w || h < f) f = h }), this.minRange = U(5 * f, this.dataMax - this.dataMin))); if (c - b < this.minRange) { var q = this.minRange; d = (q - c + b) / 2; d = [b - d, l(a.min, b - d)]; e && (d[2] = this.dataMin); b = ra(d); c = [b + q, l(a.max, b + q)]; e && (c[2] = this.dataMax); c = ya(c); c - b < q && (d[0] = c - q, d[1] = l(a.min, c - q), b = ra(d)) } this.min = b; this.max = c
        }, setAxisTranslation: function (a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange ||
            0, e, f = 0, g = 0, h = b.linkedParent, k = !!b.categories, m = b.transA; if (b.isXAxis || k || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : t(b.series, function (a) { var h = k ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0, m = a.options.pointPlacement, n = a.closestPointRange; h > c && (h = 0); d = v(d, h); f = v(f, ga(m) ? 0 : h / 2); g = v(g, "on" === m ? 0 : h); !a.noSharedTooltip && u(n) && (e = u(e) ? U(e, n) : n) }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = U(d, c), b.closestPointRange = e; a && (b.oldTransA = m); b.translationSlope =
            b.transA = m = b.len / (c + g || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = m * f
        }, setTickPositions: function (a) {
            var b = this, c = b.chart, d = b.options, e = d.startOnTick, f = d.endOnTick, g = b.isLog, h = b.isDatetimeAxis, k = b.isXAxis, m = b.isLinked, q = b.options.tickPositioner, p = d.maxPadding, r = d.minPadding, n = d.tickInterval, G = d.minTickInterval, y = d.tickPixelInterval, F, w = b.categories; m ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = l(c.min, c.dataMin), b.max = l(c.max, c.dataMax), d.type !== b.linkedParent.options.type &&
            O(11, 1)) : (b.min = l(b.userMin, d.min, b.dataMin), b.max = l(b.userMax, d.max, b.dataMax)); g && (!a && 0 >= U(b.min, l(b.dataMin, b.min)) && O(10, 1), b.min = Y(Ja(b.min)), b.max = Y(Ja(b.max))); b.range && u(b.max) && (b.userMin = b.min = v(b.min, b.max - b.range), b.userMax = b.max, b.range = null); b.beforePadding && b.beforePadding(); b.adjustForMinRange(); !(w || b.axisPointRange || b.usePercentage || m) && u(b.min) && u(b.max) && (c = b.max - b.min) && (u(d.min) || u(b.userMin) || !r || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * r), u(d.max) || u(b.userMax) || !p ||
            !(0 < b.dataMax) && b.ignoreMaxPadding || (b.max += c * p)); ba(d.floor) && (b.min = v(b.min, d.floor)); ba(d.ceiling) && (b.max = U(b.max, d.ceiling)); b.min === b.max || void 0 === b.min || void 0 === b.max ? b.tickInterval = 1 : m && !n && y === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = l(n, w ? 1 : (b.max - b.min) * y / v(b.len, y)), !u(n) && b.len < y && !this.isRadial && !this.isLog && !w && e && f && (F = !0, b.tickInterval /= 4)); k && !a && t(b.series, function (a) { a.processData(b.min !== b.oldMin || b.max !== b.oldMax) });
            b.setAxisTranslation(!0); b.beforeSetTickPositions && b.beforeSetTickPositions(); b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval)); b.pointRange && (b.tickInterval = v(b.pointRange, b.tickInterval)); !n && b.tickInterval < G && (b.tickInterval = G); h || g || n || (b.tickInterval = nb(b.tickInterval, null, K.pow(10, R(K.log(b.tickInterval) / K.LN10)), l(d.allowDecimals, !(1 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)))); b.minorTickInterval = "auto" === d.minorTickInterval && b.tickInterval ?
            b.tickInterval / 5 : d.minorTickInterval; b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : q && q.apply(b, [b.min, b.max]); a || (!b.ordinalPositions && (b.max - b.min) / b.tickInterval > v(2 * b.len, 200) && O(19, !0), a = h ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : g ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), F && a.splice(1, a.length - 2), b.tickPositions = a); m || (d =
            a[0], g = a[a.length - 1], h = b.minPointOffset || 0, e ? b.min = d : b.min - h > d && a.shift(), f ? b.max = g : b.max + h < g && a.pop(), 0 === a.length && u(d) && a.push((g + d) / 2), 1 === a.length && (e = 1E13 < X(b.max) ? 1 : .001, b.min -= e, b.max += e))
        }, setMaxTicks: function () { var a = this.chart, b = a.maxTicks || {}, c = this.tickPositions, d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-"); !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && !1 !== this.options.alignTicks && (b[d] = c.length); a.maxTicks = b }, adjustTickAmount: function () {
            var a = this._maxTicksKey,
            b = this.tickPositions, c = this.chart.maxTicks; if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && !1 !== this.options.alignTicks && this.min !== w) { var d = this.tickAmount, e = b.length; this.tickAmount = a = c[a]; if (e < a) { for (; b.length < a;) b.push(Y(b[b.length - 1] + this.tickInterval)); this.transA *= (e - 1) / (a - 1); this.max = b[b.length - 1] } u(d) && a !== d && (this.isDirty = !0) }
        }, setScale: function () {
            var a = this.stacks, b, c, d, e; this.oldMin = this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); e = this.len !==
            this.oldAxisLength; t(this.series, function (a) { if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0 }); if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) { if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0; this.forceRedraw = !1; this.getSeriesExtremes(); this.setTickPositions(); this.oldUserMin = this.userMin; this.oldUserMax = this.userMax; this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax) } else if (!this.isXAxis) for (b in this.oldStacks &&
            (a = this.stacks = this.oldStacks), a) for (c in a[b]) a[b][c].cum = a[b][c].total; this.setMaxTicks()
        }, setExtremes: function (a, b, c, d, e) { var f = this, g = f.chart; c = l(c, !0); e = z(e, { min: a, max: b }); N(f, "setExtremes", e, function () { f.userMin = a; f.userMax = b; f.eventArgs = e; f.isDirtyExtremes = !0; c && g.redraw(d) }) }, zoom: function (a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options; this.allowZoomOutside || (u(c) && a <= U(c, l(e.min, c)) && (a = w), u(d) && b >= v(d, l(e.max, d)) && (b = w)); this.displayBtn = a !== w || b !== w; this.setExtremes(a, b, !1, w, { trigger: "zoom" });
            return !0
        }, setAxisSize: function () { var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = l(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = l(b.height, a.plotHeight), g = l(b.top, a.plotTop), b = l(b.left, a.plotLeft + c), c = /%$/; c.test(f) && (f = parseInt(f, 10) / 100 * a.plotHeight); c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop); this.left = b; this.top = g; this.width = e; this.height = f; this.bottom = a.chartHeight - f - g; this.right = a.chartWidth - e - b; this.len = v(d ? e : f, 0); this.pos = d ? b : g }, getExtremes: function () {
            var a = this.isLog;
            return { min: a ? Y(ca(this.min)) : this.min, max: a ? Y(ca(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax }
        }, getThreshold: function (a) { var b = this.isLog, c = b ? ca(this.min) : this.min, b = b ? ca(this.max) : this.max; c > a || null === a ? a = c : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, autoLabelAlign: function (a) { a = (l(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center" }, getOffset: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions,
            f = a.ticks, g = a.horiz, h = a.side, k = b.inverted ? [1, 0, 3, 2][h] : h, m, q, p = 0, r, n = 0, G = d.title, y = d.labels, F = 0, A = b.axisOffset, b = b.clipOffset, H = [-1, 1, 1, -1][h], x, z = 1, C = l(y.maxStaggerLines, 5), B, D, E, I, fa; a.hasData = m = a.hasVisibleSeries || u(a.min) && u(a.max) && !!e; a.showAxis = q = m || l(d.showEmpty, !0); a.staggerLines = a.horiz && y.staggerLines; a.axisGroup || (a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(), a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 2 }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: y.zIndex ||
                7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add()); if (m || a.isLinked) {
                a.labelAlign = l(y.align || a.autoLabelAlign(y.rotation)); t(e, function (b) { f[b] ? f[b].addLabel() : f[b] = new ka(a, b) }); if (a.horiz && !a.staggerLines && C && !y.rotation) { for (m = a.reversed ? [].concat(e).reverse() : e; z < C;) { B = []; D = !1; for (x = 0; x < m.length; x++) E = m[x], I = (I = f[E].label && f[E].label.getBBox()) ? I.width : 0, fa = x % z, I && (E = a.translate(E), B[fa] !== w && E < B[fa] && (D = !0), B[fa] = E + I); if (D) z++; else break } 1 < z && (a.staggerLines = z) } t(e, function (b) {
                    if (0 ===
                    h || 2 === h || { 1: "left", 3: "right" }[h] === a.labelAlign) F = v(f[b].getLabelSize(), F)
                }); a.staggerLines && (F *= a.staggerLines, a.labelOffset = F)
            } else for (x in f) f[x].destroy(), delete f[x]; G && G.text && !1 !== G.enabled && (a.axisTitle || (a.axisTitle = c.text(G.text, 0, 0, G.useHTML).attr({ zIndex: 7, rotation: G.rotation || 0, align: G.textAlign || { low: "left", middle: "center", high: "right" }[G.align] }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(G.style).add(a.axisGroup), a.axisTitle.isNew = !0), q && (p = a.axisTitle.getBBox()[g ?
            "height" : "width"], r = G.offset, n = u(r) ? 0 : l(G.margin, g ? 5 : 10)), a.axisTitle[q ? "show" : "hide"]()); a.offset = H * l(d.offset, A[h]); c = 2 === h ? a.tickBaseline : 0; g = F + n + (F && H * (g ? l(y.y, a.tickBaseline + 8) : y.x) - c); a.axisTitleMargin = l(r, g); A[h] = v(A[h], a.axisTitleMargin + p + H * a.offset, g); b[k] = v(b[k], 2 * R(d.lineWidth / 2))
        }, getLinePath: function (a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d; c && (a *= -1); return b.renderer.crispLine(["M",
            e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        }, getTitlePosition: function () { var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, k = C(e.style.fontSize || 12), d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0); return { x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0), y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0) } }, render: function () {
            var a = this,
            b = a.horiz, c = a.reversed, d = a.chart, e = d.renderer, f = a.options, g = a.isLog, h = a.isLinked, k = a.tickPositions, m, q = a.axisTitle, p = a.ticks, r = a.minorTicks, n = a.alternateBands, l = f.stackLabels, y = f.alternateGridColor, v = a.tickmarkOffset, x = f.lineWidth, H = d.hasRendered && u(a.oldMin) && !isNaN(a.oldMin), z = a.hasData, A = a.showAxis, B, C = f.labels.overflow, D = a.justifyLabels = b && !1 !== C, E; a.labelEdge.length = 0; a.justifyToPlot = "justify" === C; t([p, r, n], function (a) { for (var b in a) a[b].isActive = !1 }); if (z || h) a.minorTickInterval && !a.categories &&
            t(a.getMinorTickPositions(), function (b) { r[b] || (r[b] = new ka(a, b, "minor")); H && r[b].isNew && r[b].render(null, !0); r[b].render(null, !1, 1) }), k.length && (m = k.slice(), (b && c || !b && !c) && m.reverse(), D && (m = m.slice(1).concat([m[0]])), t(m, function (b, c) { D && (c = c === m.length - 1 ? 0 : c + 1); if (!h || b >= a.min && b <= a.max) p[b] || (p[b] = new ka(a, b)), H && p[b].isNew && p[b].render(c, !0, .1), p[b].render(c) }), v && 0 === a.min && (p[-1] || (p[-1] = new ka(a, -1, null, !0)), p[-1].render(-1))), y && t(k, function (b, c) {
                0 === c % 2 && b < a.max && (n[b] || (n[b] = new W.PlotLineOrBand(a)),
                B = b + v, E = k[c + 1] !== w ? k[c + 1] + v : a.max, n[b].options = { from: g ? ca(B) : B, to: g ? ca(E) : E, color: y }, n[b].render(), n[b].isActive = !0)
            }), a._addedPlotLB || (t((f.plotLines || []).concat(f.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0); t([p, r, n], function (a) {
                var b, c, e = [], f = S ? S.duration || 500 : 0, g = function () { for (c = e.length; c--;) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]]) }; for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b)); a !== n && d.hasRendered && f ? f && setTimeout(g,
                f) : g()
            }); x && (b = a.getLinePath(x), a.axisLine ? a.axisLine.animate({ d: b }) : a.axisLine = e.path(b).attr({ stroke: f.lineColor, "stroke-width": x, zIndex: 7 }).add(a.axisGroup), a.axisLine[A ? "show" : "hide"]()); q && A && (q[q.isNew ? "attr" : "animate"](a.getTitlePosition()), q.isNew = !1); l && l.enabled && a.renderStackTotals(); a.isDirty = !1
        }, redraw: function () { this.render(); t(this.plotLinesAndBands, function (a) { a.render() }); t(this.series, function (a) { a.isDirty = !0 }) }, destroy: function (a) {
            var b = this, c = b.stacks, d, e = b.plotLinesAndBands; a ||
            T(b); for (d in c) za(c[d]), c[d] = null; t([b.ticks, b.minorTicks, b.alternateBands], function (a) { za(a) }); for (a = e.length; a--;) e[a].destroy(); t("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function (a) { b[a] && (b[a] = b[a].destroy()) }); this.cross && this.cross.destroy()
        }, drawCrosshair: function (a, b) {
            if (this.crosshair) if (!1 === (u(b) || !l(this.crosshair.snap, !0))) this.hideCrosshair(); else {
                var c, d = this.crosshair, e = d.animation; l(d.snap, !0) ? u(b) && (c = this.chart.inverted != this.horiz ?
                b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos; c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : l(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c); if (null === c) this.hideCrosshair(); else if (this.cross) this.cross.attr({ visibility: "visible" })[e ? "animate" : "attr"]({ d: c }, e); else e = { "stroke-width": d.width || 1, stroke: d.color || "#C0C0C0", zIndex: d.zIndex || 2 }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        }, hideCrosshair: function () {
            this.cross &&
            this.cross.hide()
        }
    }; z(Ca.prototype, void 0); var Ta = W.Legend = function (a, b) { this.init(a, b) }; Ta.prototype = {
        init: function (a, b) { var c = this, d = b.itemStyle, e = l(b.padding, 8), f = b.itemMarginTop || 0; this.options = b; b.enabled && (c.itemStyle = d, c.itemHiddenStyle = E(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = l(b.symbolWidth, 16), c.pages = [], c.render(), M(c.chart, "endResize", function () { c.positionCheckboxes() })) },
        colorizeItem: function (a, b) { var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, k = { fill: h }, m; d && d.css({ fill: c, color: c }); e && e.attr({ stroke: h }); if (f) { if (g && f.isMarker) for (m in k.stroke = h, g = a.convertAttribs(g), g) d = g[m], d !== w && (k[m] = d); f.attr(k) } }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox; a.legendGroup &&
            a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d); f && (f.x = e, f.y = d)
        }, destroyItem: function (a) { var b = a.checkbox; t(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); b && Aa(a.checkbox) }, destroy: function () { var a = this.group, b = this.box; b && (this.box = b.destroy()); a && (this.group = a.destroy()) }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight; b && (c = b.translateY, t(this.allItems, function (e) {
                var f = e.checkbox, g; f &&
                (g = c + f.y + (a || 0) + 3, P(f, { left: b.translateX + e.checkboxOffset + f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : "none" }))
            }))
        }, renderTitle: function () { var a = this.padding, b = this.options.title, c = 0; b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: c })); this.titleHeight = c }, renderItem: function (a) {
            var b = this.chart,
            c = b.renderer, d = this.options, e = "horizontal" === d.layout, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, k = this.itemHiddenStyle, m = this.padding, q = e ? l(d.itemDistance, 20) : 0, p = !d.rtl, r = d.width, n = d.itemMarginBottom || 0, t = this.itemMarginTop, y = this.initialItemX, u = a.legendItem, w = a.series && a.series.drawLegendSymbol ? a.series : a, x = w.options, x = this.createCheckboxForItem && x && x.showCheckbox, z = d.useHTML; u || (a.legendGroup = c.g("legend-item").attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = u = c.text(d.labelFormat ?
            wa(d.labelFormat, a) : d.labelFormatter.call(a), p ? f + g : -g, this.baseline || 0, z).css(E(a.visible ? h : k)).attr({ align: p ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.baseline = c.fontMetrics(h.fontSize, u).f + 3 + t, u.attr("y", this.baseline)), w.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, u, z, h, k), this.colorizeItem(a, a.visible), x && this.createCheckboxForItem(a)); c = u.getBBox(); f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + q + (x ? 20 : 0); this.itemHeight = g = A(a.legendItemHeight ||
            c.height); e && this.itemX - y + f > (r || b.chartWidth - 2 * m - y - d.x) && (this.itemX = y, this.itemY += t + this.lastLineHeight + n, this.lastLineHeight = 0); this.maxItemWidth = v(this.maxItemWidth, f); this.lastItemY = t + this.itemY + n; this.lastLineHeight = v(g, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; e ? this.itemX += f : (this.itemY += t + g + n, this.lastLineHeight = g); this.offsetWidth = r || v((e ? this.itemX - y - q : f) + m, this.offsetWidth)
        }, getAllItems: function () {
            var a = []; t(this.chart.series, function (b) {
                var c = b.options; l(c.showInLegend,
                u(c.linkedTo) ? !1 : w, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
            }); return a
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, k = a.box, m = a.options, q = a.padding, p = m.borderWidth, l = m.backgroundColor; a.itemX = a.initialItemX; a.itemY = a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; d || (a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup)); a.renderTitle(); e = a.getAllItems(); La(e, function (a, b) {
                return (a.options &&
                a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            }); m.reversed && e.reverse(); a.allItems = e; a.display = f = !!e.length; t(e, function (b) { a.renderItem(b) }); g = m.width || a.offsetWidth; h = a.lastItemY + a.lastLineHeight + a.titleHeight; h = a.handleOverflow(h); if (p || l) g += q, h += q, k ? 0 < g && 0 < h && (k[k.isNew ? "attr" : "animate"](k.crisp({ width: g, height: h })), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, m.borderRadius, p || 0).attr({ stroke: m.borderColor, "stroke-width": p || 0, fill: l || "none" }).add(d).shadow(m.shadow), k.isNew = !0), k[f ?
            "show" : "hide"](); a.legendWidth = g; a.legendHeight = h; t(e, function (b) { a.positionItem(b) }); f && d.align(z({ width: g, height: h }, m), !0, "spacingBox"); b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, h, k = this.clipRect, m = e.navigation, q = l(m.animation, !0), p = m.arrowSize || 12, r = this.nav, n = this.pages, u, y = this.allItems; "horizontal" === e.layout && (f /= 2); g && (f = U(f, g));
            n.length = 0; a > f && !e.useHTML ? (this.clipHeight = h = v(f - 20 - this.titleHeight - this.padding, 0), this.currentPage = l(this.currentPage, 1), this.fullHeight = a, t(y, function (a, b) { var c = a._legendItemPos[1], d = A(a.legendItem.getBBox().height), e = n.length; if (!e || c - n[e - 1] > h && (u || c) !== n[e - 1]) n.push(u || c), e++; b === y.length - 1 && c + d - n[e - 1] > h && n.push(c); c !== u && (u = c) }), k || (k = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(k)), k.attr({ height: h }), r || (this.nav = r = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle",
            0, 0, p, p).on("click", function () { b.scroll(-1, q) }).add(r), this.pager = d.text("", 15, 10).css(m.style).add(r), this.down = d.symbol("triangle-down", 0, 0, p, p).on("click", function () { b.scroll(1, q) }).add(r)), b.scroll(0), a = f) : r && (k.attr({ height: c.chartHeight }), r.hide(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
        }, scroll: function (a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, k = this.pager, m = this.padding; e > d &&
            (e = d); 0 < e && (b !== w && (S = l(b, this.chart.animation)), this.nav.attr({ translateX: m, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ fill: 1 === e ? g : h }).css({ cursor: 1 === e ? "default" : "pointer" }), k.attr({ text: e + "/" + d }), this.down.attr({ x: 18 + this.pager.getBBox().width, fill: e === d ? g : h }).css({ cursor: e === d ? "default" : "pointer" }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = e, this.positionCheckboxes(c))
        }
    }; var wb = W.LegendSymbolMixin = {
        drawRectangle: function (a,
        b) { var c = a.options.symbolHeight || 12; b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({ zIndex: 3 }).add(b.legendGroup) }, drawLineMarker: function (a) {
            var b = this.options, c = b.marker, d; d = a.symbolWidth; var e = this.chart.renderer, f = this.legendGroup; a = a.baseline - A(.3 * e.fontMetrics(a.options.itemStyle.fontSize, this.legendItem).b); var g; b.lineWidth && (g = { "stroke-width": b.lineWidth }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M", 0, a, "L",
            d, a]).attr(g).add(f)); c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0)
        }
    }; (/Trident\/7\.0/.test(ja) || Ea) && Ka(Ta.prototype, "positionItem", function (a, b) { var c = this, d = function () { b._legendItemPos && a.call(c, b) }; d(); setTimeout(d) }); Ma.prototype = {
        init: function (a, b) {
            var c, d = a.series; a.series = null; c = E(J, a); c.series = a.series = d; this.userOptions = a; d = c.chart; this.margin = this.splashArray("margin", d); this.spacing = this.splashArray("spacing", d); var e =
            d.events; this.bounds = { h: {}, v: {} }; this.callback = b; this.isResizing = 0; this.options = c; this.axes = []; this.series = []; this.hasCartesianSeries = d.showAxes; var f = this, g; f.index = ea.length; ea.push(f); ib++; !1 !== d.reflow && M(f, "load", function () { f.initReflow() }); if (e) for (g in e) M(f, g, e[g]); f.xAxis = []; f.yAxis = []; f.animation = Z ? !1 : l(d.animation, !0); f.pointCount = f.colorCounter = f.symbolCounter = 0; f.firstRender()
        }, initSeries: function (a) {
            var b = this.options.chart; (b = ta[a.type || b.type || b.defaultSeriesType]) || O(17, !0); b = new b;
            b.init(this, a); return b
        }, isInsidePlot: function (a, b, c) { var d = c ? b : a; a = c ? a : b; return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }, adjustTickAmounts: function () { !1 !== this.options.chart.alignTicks && t(this.axes, function (a) { a.adjustTickAmount() }); this.maxTicks = null }, redraw: function (a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, k = this.hasCartesianSeries, m = this.isDirtyBox, q = c.length, p = q, r = this.renderer, n = r.isHidden(), u = []; S = l(a, this.animation); n && this.cloneRenderTo();
            for (this.layOutTitles() ; p--;) if (a = c[p], a.options.stacking && (g = !0, a.isDirty)) { h = !0; break } if (h) for (p = q; p--;) a = c[p], a.options.stacking && (a.isDirty = !0); t(c, function (a) { a.isDirty && "point" === a.options.legendType && (f = !0) }); f && e.options.enabled && (e.render(), this.isDirtyLegend = !1); g && this.getStacks(); k && (this.isResizing || (this.maxTicks = null, t(b, function (a) { a.setScale() })), this.adjustTickAmounts()); this.getMargins(); k && (t(b, function (a) { a.isDirty && (m = !0) }), t(b, function (a) {
                a.isDirtyExtremes && (a.isDirtyExtremes =
                !1, u.push(function () { N(a, "afterSetExtremes", z(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (m || g) && a.redraw()
            })); m && this.drawChartBox(); t(c, function (a) { a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw() }); d && d.reset(!0); r.draw(); N(this, "redraw"); n && this.cloneRenderTo(!0); t(u, function (a) { a.call() })
        }, get: function (a) {
            var b = this.axes, c = this.series, d, e; for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d]; for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d]; for (d = 0; d < c.length; d++) for (e =
            c[d].points || [], b = 0; b < e.length; b++) if (e[b].id === a) return e[b]; return null
        }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = pa(b.xAxis || {}), b = b.yAxis = pa(b.yAxis || {}); t(c, function (a, b) { a.index = b; a.isX = !0 }); t(b, function (a, b) { a.index = b }); c = c.concat(b); t(c, function (b) { new Ca(a, b) }); a.adjustTickAmounts() }, getSelectedPoints: function () { var a = []; t(this.series, function (b) { a = a.concat(jb(b.points || [], function (a) { return a.selected })) }); return a }, getSelectedSeries: function () { return jb(this.series, function (a) { return a.selected }) },
        getStacks: function () { var a = this; t(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); t(a.series, function (b) { !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + l(b.options.stack, "")) }) }, setTitle: function (a, b, c) {
            var d = this, e = d.options, f; f = e.title = E(e.title, a); e = e.subtitle = E(e.subtitle, b); t([["title", a, f], ["subtitle", b, e]], function (a) {
                var b = a[0], c = d[b], e = a[1]; a = a[2]; c && e && (d[b] = c = c.destroy()); a && a.text && !c && (d[b] = d.renderer.text(a.text,
                0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add())
            }); d.layOutTitles(c)
        }, layOutTitles: function (a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox.width - 44; c && (c.css({ width: (f.width || h) + "px" }).align(z({ y: g.fontMetrics(f.style.fontSize, c).b - 3 }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height)); d && (d.css({ width: (e.width || h) + "px" }).align(z({
                y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize,
                d).b
            }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = la(b + d.getBBox().height))); c = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && l(a, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function () {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo; u(b) || (this.containerWidth = Ga(c, "width")); u(a) || (this.containerHeight = Ga(c, "height")); this.chartWidth = v(0, b || this.containerWidth || 600); this.chartHeight = v(0, l(a, 19 < this.containerHeight ?
            this.containerHeight : 400))
        }, cloneRenderTo: function (a) { var b = this.renderToClone, c = this.container; a ? b && (this.renderTo.appendChild(c), Aa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), P(b, { position: "absolute", top: "-9999px", display: "block" }), b.style.setProperty && b.style.setProperty("display", "block", "important"), B.body.appendChild(b), c && b.appendChild(c)) }, getContainer: function () {
            var a, b = this.options.chart, c,
            d, e; this.renderTo = a = b.renderTo; e = "highcharts-" + Na++; ga(a) && (this.renderTo = a = B.getElementById(a)); a || O(13, !0); c = C(D(a, "data-highcharts-chart")); !isNaN(c) && ea[c] && ea[c].hasRendered && ea[c].destroy(); D(a, "data-highcharts-chart", this.index); a.innerHTML = ""; b.skipClone || a.offsetWidth || this.cloneRenderTo(); this.getChartSize(); c = this.chartWidth; d = this.chartHeight; this.container = a = qa("div", { className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e }, z({
                position: "relative", overflow: "hidden", width: c +
                "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, b.style), this.renderToClone || a); this._cursor = a.style.cursor; this.renderer = b.forExport ? new va(a, c, d, b.style, !0) : new va(a, c, d, b.style); Z && this.renderer.create(this, a, c, d)
        }, getMargins: function () {
            var a = this.spacing, b, c = this.legend, d = this.margin, e = this.options.legend, f = l(e.margin, 20), g = e.x, h = e.y, k = e.align, m = e.verticalAlign, q = this.titleOffset; this.resetMargins(); b = this.axisOffset; q && !u(d[0]) &&
            (this.plotTop = v(this.plotTop, q + this.options.title.margin + a[0])); c.display && !e.floating && ("right" === k ? u(d[1]) || (this.marginRight = v(this.marginRight, c.legendWidth - g + f + a[1])) : "left" === k ? u(d[3]) || (this.plotLeft = v(this.plotLeft, c.legendWidth + g + f + a[3])) : "top" === m ? u(d[0]) || (this.plotTop = v(this.plotTop, c.legendHeight + h + f + a[0])) : "bottom" !== m || u(d[2]) || (this.marginBottom = v(this.marginBottom, c.legendHeight - h + f + a[2]))); this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin); this.extraTopMargin && (this.plotTop +=
            this.extraTopMargin); this.hasCartesianSeries && t(this.axes, function (a) { a.getOffset() }); u(d[3]) || (this.plotLeft += b[3]); u(d[0]) || (this.plotTop += b[0]); u(d[2]) || (this.marginBottom += b[2]); u(d[1]) || (this.marginRight += b[1]); this.setChartSize()
        }, reflow: function (a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || Ga(d, "width"), f = c.height || Ga(d, "height"), c = a ? a.target : x, d = function () { b.container && (b.setSize(e, f, !1), b.hasUserSize = null) }; if (!b.hasUserSize && e && f && (c === x || c === B)) {
                if (e !== b.containerWidth || f !==
                b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d(); b.containerWidth = e; b.containerHeight = f
            }
        }, initReflow: function () { var a = this, b = function (b) { a.reflow(b) }; M(x, "resize", b); M(a, "destroy", function () { T(x, "resize", b) }) }, setSize: function (a, b, c) {
            var d = this, e, f, g; d.isResizing += 1; g = function () { d && N(d, "endResize", null, function () { --d.isResizing }) }; S = l(c, d.animation); d.oldChartHeight = d.chartHeight; d.oldChartWidth = d.chartWidth; u(a) && (d.chartWidth = e = v(0, A(a)), d.hasUserSize = !!e);
            u(b) && (d.chartHeight = f = v(0, A(b))); (S ? lb : P)(d.container, { width: e + "px", height: f + "px" }, S); d.setChartSize(!0); d.renderer.setSize(e, f, c); d.maxTicks = null; t(d.axes, function (a) { a.isDirty = !0; a.setScale() }); t(d.series, function (a) { a.isDirty = !0 }); d.isDirtyLegend = !0; d.isDirtyBox = !0; d.layOutTitles(); d.getMargins(); d.redraw(c); d.oldChartHeight = null; N(d, "resize"); !1 === S ? g() : setTimeout(g, S && S.duration || 500)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart,
            g = this.spacing, h = this.clipOffset, k, m, q, p; this.plotLeft = k = A(this.plotLeft); this.plotTop = m = A(this.plotTop); this.plotWidth = q = v(0, A(d - k - this.marginRight)); this.plotHeight = p = v(0, A(e - m - this.marginBottom)); this.plotSizeX = b ? p : q; this.plotSizeY = b ? q : p; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = c.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2] }; this.plotBox = c.plotBox = { x: k, y: m, width: q, height: p }; d = 2 * R(this.plotBorderWidth / 2); b = la(v(d, h[3]) / 2); c = la(v(d, h[0]) / 2); this.clipBox = {
                x: b, y: c,
                width: R(this.plotSizeX - v(d, h[1]) / 2 - b), height: v(0, R(this.plotSizeY - v(d, h[2]) / 2 - c))
            }; a || t(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
        }, resetMargins: function () { var a = this.spacing, b = this.margin; this.plotTop = l(b[0], a[0]); this.marginRight = l(b[1], a[1]); this.marginBottom = l(b[2], a[2]); this.plotLeft = l(b[3], a[3]); this.axisOffset = [0, 0, 0, 0]; this.clipOffset = [0, 0, 0, 0] }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground,
            f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, k = a.borderWidth || 0, m = a.backgroundColor, q = a.plotBackgroundColor, p = a.plotBackgroundImage, l = a.plotBorderWidth || 0, n, t = this.plotLeft, u = this.plotTop, v = this.plotWidth, w = this.plotHeight, x = this.plotBox, z = this.clipRect, A = this.clipBox; n = k + (a.shadow ? 8 : 0); if (k || m) e ? e.animate(e.crisp({ width: c - n, height: d - n })) : (e = { fill: m || "none" }, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, k).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            q && (f ? f.animate(x) : this.plotBackground = b.rect(t, u, v, w, 0).attr({ fill: q }).add().shadow(a.plotShadow)); p && (h ? h.animate(x) : this.plotBGImage = b.image(p, t, u, v, w).add()); z ? z.animate({ width: A.width, height: A.height }) : this.clipRect = b.clipRect(A); l && (g ? g.animate(g.crisp({ x: t, y: u, width: v, height: w, strokeWidth: -l })) : this.plotBorder = b.rect(t, u, v, w, 0, -l).attr({ stroke: a.plotBorderColor, "stroke-width": l, fill: "none", zIndex: 1 }).add()); this.isDirtyBox = !1
        }, propFromSeries: function () {
            var a = this, b = a.options.chart, c, d = a.options.series,
            e, f; t(["inverted", "angular", "polar"], function (g) { c = ta[b.type || b.defaultSeriesType]; f = a[g] || b[g] || c && c.prototype[g]; for (e = d && d.length; !f && e--;) (c = ta[d[e].type]) && c.prototype[g] && (f = !0); a[g] = f })
        }, linkSeries: function () { var a = this, b = a.series; t(b, function (a) { a.linkedSeries.length = 0 }); t(b, function (b) { var d = b.options.linkedTo; ga(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d) }) }, renderSeries: function () {
            t(this.series, function (a) {
                a.translate(); a.setTooltipPoints &&
                a.setTooltipPoints(); a.render()
            })
        }, renderLabels: function () { var a = this, b = a.options.labels; b.items && t(b.items, function (c) { var d = z(b.style, c.style), e = C(d.left) + a.plotLeft, f = C(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(c.html, e, f).attr({ zIndex: 2 }).css(d).add() }) }, render: function () {
            var a = this.axes, b = this.renderer, c = this.options; this.setTitle(); this.legend = new Ta(this, c.legend); this.getStacks(); t(a, function (a) { a.setScale() }); this.getMargins(); this.maxTicks = null; t(a, function (a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            }); this.adjustTickAmounts(); this.getMargins(); this.drawChartBox(); this.hasCartesianSeries && t(a, function (a) { a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.showCredits(c.credits); this.hasRendered = !0
        }, showCredits: function (a) { a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function () { a.href && (location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position)) },
        destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode; N(a, "destroy"); ea[a.index] = w; ib--; a.renderTo.removeAttribute("data-highcharts-chart"); T(a); for (e = b.length; e--;) b[e] = b[e].destroy(); for (e = c.length; e--;) c[e] = c[e].destroy(); t("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (b) { var c = a[b]; c && c.destroy && (a[b] = c.destroy()) }); d && (d.innerHTML =
            "", T(d), f && Aa(d)); for (e in a) delete a[e]
        }, isReadyToRender: function () { var a = this; return !Q && x == x.top && "complete" !== B.readyState || Z && !x.canvg ? (Z ? CanVGController.push(function () { a.firstRender() }, a.options.global.canvasToolsURL) : B.attachEvent("onreadystatechange", function () { B.detachEvent("onreadystatechange", a.firstRender); "complete" === B.readyState && a.firstRender() }), !1) : !0 }, firstRender: function () {
            var a = this, b = a.options, c = a.callback; a.isReadyToRender() && (a.getContainer(), N(a, "init"), a.resetMargins(), a.setChartSize(),
            a.propFromSeries(), a.getAxes(), t(b.series || [], function (b) { a.initSeries(b) }), a.linkSeries(), N(a, "beforeRender"), W.Pointer && (a.pointer = new Pointer(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), t(a.callbacks, function (b) { b.apply(a, [a]) }), a.cloneRenderTo(!0), N(a, "load"))
        }, splashArray: function (a, b) { var c = b[a], c = aa(c) ? c : [c, c, c, c]; return [l(b[a + "Top"], c[0]), l(b[a + "Right"], c[1]), l(b[a + "Bottom"], c[2]), l(b[a + "Left"], c[3])] }
    }; Ma.prototype.callbacks = []; var Ia = function () { }; Ia.prototype = {
        init: function (a, b,
        c) { this.series = a; this.applyOptions(b, c); this.pointAttr = {}; a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0)); a.chart.pointCount++; return this }, applyOptions: function (a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey; a = Ia.prototype.optionsToObject.call(this, a); z(this, a); this.options = this.options ? z(this.options, a) : a; d && (this.y = this[d]); this.x === w && c && (this.x = b === w ? c.autoIncrement() :
            b); return this
        }, optionsToObject: function (a) { var b = {}, c = this.series, d = c.pointArrayMap || ["y"], e = d.length, f = 0, g = 0; if ("number" === typeof a || null === a) b[d[0]] = a; else if (na(a)) for (a.length > e && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), f++) ; g < e;) b[d[g++]] = a[f++]; else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0)); return b }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c; a.pointCount--; b && (this.setState(), oa(b, this), b.length ||
            (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) T(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (c in this) this[c] = null
        }, destroyElements: function () { for (var a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy()) }, getLabelConfig: function () {
            return {
                x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, tooltipFormatter: function (a) { var b = this.series, c = b.tooltipOptions, d = l(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || ""; t(b.pointArrayMap || ["y"], function (b) { b = "{point." + b; if (e || f) a = a.replace(b + "}", e + b + "}" + f); a = a.replace(b + "}", b + ":,." + d + "f}") }); return wa(a, { point: this, series: this.series }) }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options; (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents(); "click" ===
            a && e.allowPointSelect && (c = function (a) { d.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); N(this, a, b, c)
        }
    }; var Ua = function () { }; Ua.prototype = {
        isCartesian: !0, type: "line", pointClass: Ia, sorted: !0, requireSorting: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function (a, b) {
            var c = this, d, e, f = a.series, g = function (a, b) { return l(a.options.index, a._i) - l(b.options.index, b._i) }; c.chart = a; c.options =
            b = c.setOptions(b); c.linkedSeries = []; c.bindAxes(); z(c, { name: b.name, state: "", pointAttr: {}, visible: !1 !== b.visible, selected: !0 === b.selected }); Z && (b.animation = !1); e = b.events; for (d in e) M(c, d, e[d]); if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; c.getColor(); c.getSymbol(); t(c.parallelArrays, function (a) { c[a + "Data"] = [] }); c.setData(b.data, !1); c.isCartesian && (a.hasCartesianSeries = !0); f.push(c); c._i = f.length - 1; La(f, g); this.yAxis && La(this.yAxis.series, g);
            t(f, function (a, b) { a.index = b; a.name = a.name || "Series " + (b + 1) })
        }, bindAxes: function () { var a = this, b = a.options, c = a.chart, d; t(a.axisTypes || [], function (e) { t(c[e], function (c) { d = c.options; if (b[e] === d.index || b[e] !== w && b[e] === d.id || b[e] === w && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0 }); a[e] || a.optionalAxis === e || O(18, !0) }) }, updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments; t(c.parallelArrays, "number" === typeof b ? function (d) { var f = "y" === d && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = f } : function (a) {
                Array.prototype[b].apply(c[a +
                "Data"], Array.prototype.slice.call(d, 2))
            })
        }, autoIncrement: function () { var a = this.options, b = this.xIncrement, b = l(b, a.pointStart, 0); this.pointInterval = l(this.pointInterval, a.pointInterval, 1); this.xIncrement = b + this.pointInterval; return b }, getSegments: function () {
            var a = -1, b = [], c, d = this.points, e = d.length; if (e) if (this.options.connectNulls) { for (c = e; c--;) null === d[c].y && d.splice(c, 1); d.length && (b = [d]) } else t(d, function (c, g) { null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1)) }); this.segments =
            b
        }, setOptions: function (a) { var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type]; this.userOptions = a; c = E(e, c.series, a); this.tooltipOptions = E(J.tooltip, J.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip); null === e.marker && delete c.marker; return c }, getCyclic: function (a, b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter"; b || (u(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        }, getColor: function () { this.options.colorByPoint || this.getCyclic("color", this.options.color || Ra[this.type].color, this.chart.options.colors) }, getSymbol: function () { var a = this.options.marker; this.getCyclic("symbol", a.symbol, this.chart.options.symbols); /^url/.test(this.symbol) && (a.radius = 0) }, drawLegendSymbol: wb.drawLineMarker, setData: function (a, b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, k = e.options, m = e.chart, q = null, p = e.xAxis, r = p && !!p.categories, n = e.tooltipPoints, u = k.turboThreshold, y = this.xData,
            v = this.yData, x = (h = e.pointArrayMap) && h.length; a = a || []; h = a.length; b = l(b, !0); if (!1 === d || !h || g !== h || e.cropped || e.hasGroupedData) {
                e.xIncrement = null; e.pointRange = r ? 1 : k.pointRange; e.colorCounter = 0; t(this.parallelArrays, function (a) { e[a + "Data"].length = 0 }); if (u && h > u) {
                    for (c = 0; null === q && c < h;) q = a[c], c++; if (ba(q)) { r = l(k.pointStart, 0); k = l(k.pointInterval, 1); for (c = 0; c < h; c++) y[c] = r, v[c] = a[c], r += k; e.xIncrement = r } else if (na(q)) if (x) for (c = 0; c < h; c++) k = a[c], y[c] = k[0], v[c] = k.slice(1, x + 1); else for (c = 0; c < h; c++) k = a[c], y[c] =
                    k[0], v[c] = k[1]; else O(12)
                } else for (c = 0; c < h; c++) a[c] !== w && (k = { series: e }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), r && k.name && (p.names[k.x] = k.name)); ga(v[0]) && O(14, !0); e.data = []; e.options.data = a; for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy(); n && (n.length = 0); p && (p.minRange = p.userMinRange); e.isDirty = e.isDirtyData = m.isDirtyBox = !0; c = !1
            } else t(a, function (a, b) { f[b].update(a, !1, null, !1) }); b && m.redraw(c)
        }, processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length,
            e; e = 0; var f, g, h = this.xAxis, k, m = this.options; k = m.cropThreshold; var q = 0, p = this.isCartesian, l, n; if (p && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1; h && (l = h.getExtremes(), n = l.min, l = l.max); if (p && this.sorted && (!k || d > k || this.forceCrop)) if (b[d - 1] < n || b[0] > l) b = [], c = []; else if (b[0] < n || b[d - 1] > l) e = this.cropData(this.xData, this.yData, n, l), b = e.xData, c = e.yData, e = e.start, f = !0, q = b.length; for (k = b.length - 1; 0 <= k; k--) d = b[k] - b[k - 1], !f && b[k] > n && b[k] < l && q++, 0 < d && (g === w || d < g) ? g = d : 0 > d && this.requireSorting && O(15);
            this.cropped = f; this.cropStart = e; this.processedXData = b; this.processedYData = c; this.activePointCount = q; null === m.pointRange && (this.pointRange = g || 1); this.closestPointRange = g
        }, cropData: function (a, b, c, d) { var e = a.length, f = 0, g = e, h = l(this.cropShoulder, 1), k; for (k = 0; k < e; k++) if (a[k] >= c) { f = v(0, k - h); break } for (; k < e; k++) if (a[k] > d) { g = k + h; break } return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g } }, generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass,
            g = d.length, h = this.cropStart || 0, k, m = this.hasGroupedData, q, l = [], r; b || m || (b = [], b.length = a.length, b = this.data = b); for (r = 0; r < g; r++) k = h + r, m ? l[r] = (new f).init(this, [d[r]].concat(pa(e[r]))) : (b[k] ? q = b[k] : a[k] !== w && (b[k] = q = (new f).init(this, a[k], d[r])), l[r] = q), l[r].index = k; if (b && (g !== (c = b.length) || m)) for (r = 0; r < c; r++) r !== h || m || (r += g), b[r] && (b[r].destroyElements(), b[r].plotX = w); this.data = b; this.points = l
        }, getExtremes: function (a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0; d = this.xAxis.getExtremes(); var g =
            d.min, h = d.max, k, m, q, p; a = a || this.stackedYData || this.processedYData; d = a.length; for (p = 0; p < d; p++) if (m = c[p], q = a[p], k = null !== q && q !== w && (!b.isLog || q.length || 0 < q), m = this.getExtremesFromAll || this.cropped || (c[p + 1] || m) >= g && (c[p - 1] || m) <= h, k && m) if (k = q.length) for (; k--;) null !== q[k] && (e[f++] = q[k]); else e[f++] = q; this.dataMin = l(void 0, ya(e)); this.dataMax = l(void 0, ra(e))
        }, translate: function () {
            this.processedXData || this.processData(); this.generatePoints(); for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories,
            e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, k = a.pointPlacement, m = "between" === k || ba(k), q = a.threshold, a = 0; a < g; a++) {
                var p = f[a], r = p.x, n = p.y, t = p.low, v = b && e.stacks[(this.negStacks && n < q ? "-" : "") + this.stackKey]; e.isLog && 0 >= n && (p.y = n = null, O(10)); p.plotX = c.translate(r, 0, 0, 0, 1, k, "flags" === this.type); b && this.visible && v && v[r] && (v = v[r], n = v.points[this.index + "," + a], t = n[0], n = n[1], 0 === t && (t = l(q, e.min)), e.isLog && 0 >= t && (t = null), p.total = p.stackTotal = v.total, p.percentage = v.total && p.y / v.total * 100, p.stackY =
                n, v.setOffset(this.pointXOffset || 0, this.barW || 0)); p.yBottom = u(t) ? e.translate(t, 0, 1, 0, 1) : null; h && (n = this.modifyValue(n, p)); p.plotY = "number" === typeof n && Infinity !== n ? e.translate(n, 0, 1, 0, 1) : w; p.clientX = m ? c.translate(r, 0, 0, 0, 1) : p.plotX; p.negative = p.y < (q || 0); p.category = d && d[p.x] !== w ? d[p.x] : p.x
            } this.getSegments()
        }, animate: function (a) {
            var b = this.chart, c = b.renderer, d; d = this.options.animation; var e = this.clipBox || b.clipBox, f = b.inverted, g; d && !aa(d) && (d = Ra[this.type].animation); g = ["_sharedClip", d.duration, d.easing,
            e.height].join(); a ? (a = b[g], d = b[g + "m"], a || (b[g] = a = c.clipRect(z(e, { width: 0 })), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({ width: b.plotSizeX }, d), b[g + "m"] && b[g + "m"].animate({ width: b.plotSizeX + 99 }, d), this.animate = null)
        }, afterAnimate: function () {
            var a = this.chart, b = this.sharedClipKey, c = this.group, d = this.clipBox; c && !1 !== this.options.clip && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect),
            this.markerGroup.clip()); N(this, "afterAnimate"); setTimeout(function () { b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy())) }, 100)
        }, drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, k, m, q, p = this.options.marker, r = this.pointAttr[""], n, t, u, v = this.markerGroup, x = l(p.enabled, !this.requireSorting || this.activePointCount < .5 * this.xAxis.len / p.radius); if (!1 !== p.enabled || this._hasPointMarkers) for (f = b.length; f--;) g = b[f], d = R(g.plotX), e = g.plotY, q = g.graphic, n = g.marker || {}, t = !!g.marker,
            a = x && n.enabled === w || n.enabled, u = c.isInsidePlot(A(d), e, c.inverted), a && e !== w && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || r, h = a.r, k = l(n.symbol, this.symbol), m = 0 === k.indexOf("url"), q ? q[u ? "show" : "hide"](!0).animate(z({ x: d - h, y: e - h }, q.symbolName ? { width: 2 * h, height: 2 * h } : {})) : u && (0 < h || m) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h, t ? n : p).attr(a).add(v))) : q && (g.graphic = q.destroy())
        }, convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {}; a = a || {}; b = b || {}; c = c || {}; d = d || {};
            for (f in e) g = e[f], h[f] = l(a[g], b[f], c[f], d[f]); return h
        }, getAttribs: function () {
            var a = this, b = a.options, c = Ra[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color; f = { stroke: g, fill: g }; var h = a.points || [], k, m = [], l, p = a.pointAttrToOptions; l = a.hasPointSpecificOptions; var r = b.negativeColor, n = c.lineColor, v = c.fillColor; k = b.turboThreshold; var w; b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : e.color = e.color || ua(e.color || g).brighten(e.brightness).get();
            m[""] = a.convertAttribs(c, f); t(["hover", "select"], function (b) { m[b] = a.convertAttribs(d[b], m[""]) }); a.pointAttr = m; g = h.length; if (!k || g < k || l) for (; g--;) {
                k = h[g]; (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0); k.negative && r && (k.color = k.fillColor = r); l = b.colorByPoint || k.color; if (k.options) for (w in p) u(c[p[w]]) && (l = !0); l ? (c = c || {}, l = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !k.options.color && e.color || ua(k.color).brighten(f.brightness || e.brightness).get()), f =
                { color: k.color }, v || (f.fillColor = k.color), n || (f.lineColor = k.color), l[""] = a.convertAttribs(z(f, c), m[""]), l.hover = a.convertAttribs(d.hover, m.hover, l[""]), l.select = a.convertAttribs(d.select, m.select, l[""])) : l = m; k.pointAttr = l
            }
        }, destroy: function () {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(ja), d, e, f = a.data || [], g, h, k; N(a, "destroy"); T(a); t(a.axisTypes || [], function (b) { if (k = a[b]) oa(k.series, a), k.isDirty = k.forceRedraw = !0 }); a.legendItem && a.chart.legend.destroyItem(a); for (e = f.length; e--;) (g = f[e]) && g.destroy &&
            g.destroy(); a.points = null; clearTimeout(a.animationTimeout); t("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "), function (b) { a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]()) }); b.hoverSeries === a && (b.hoverSeries = null); oa(b.series, a); for (h in a) delete a[h]
        }, getSegmentPath: function (a) {
            var b = this, c = [], d = b.options.step; t(a, function (e, f) {
                var g = e.plotX, h = e.plotY, k; b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (k = a[f - 1],
                "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX + g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), c.push(e.plotX, e.plotY))
            }); return c
        }, getGraphPath: function () { var a = this, b = [], c, d = []; t(a.segments, function (e) { c = a.getSegmentPath(e); 1 < e.length ? b = b.concat(c) : d.push(e[0]) }); a.singlePoints = d; return a.graphPath = b }, drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color]], d = b.lineWidth, e = b.dashStyle, f = "square" !== b.linecap, g = this.getGraphPath(), h = b.negativeColor; h && c.push(["graphNeg",
            h]); t(c, function (c, h) { var l = c[0], p = a[l]; p ? (Pa(p), p.animate({ d: g })) : d && g.length && (p = { stroke: c[1], "stroke-width": d, fill: "none", zIndex: 1 }, e ? p.dashstyle = e : f && (p["stroke-linecap"] = p["stroke-linejoin"] = "round"), a[l] = a.chart.renderer.path(g).attr(p).add(a.group).shadow(!h && b.shadow)) })
        }, clipNeg: function () {
            var a = this.options, b = this.chart, c = b.renderer, d = a.negativeColor || a.negativeFillColor, e, f = this.graph, g = this.area, h = this.posClip, k = this.negClip; e = b.chartWidth; var l = b.chartHeight, q = v(e, l), p = this.yAxis; d &&
            (f || g) && (d = A(p.toPixels(a.threshold || 0, !0)), 0 > d && (q -= d), a = { x: 0, y: 0, width: q, height: d }, q = { x: 0, y: d, width: q, height: q }, b.inverted && (a.height = q.y = b.plotWidth - d, c.isVML && (a = { x: b.plotWidth - d - b.plotLeft, y: 0, width: e, height: l }, q = { x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e })), p.reversed ? (b = q, e = a) : (b = a, e = q), h ? (h.animate(b), k.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = k = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(k)), g && (g.clip(h), this.areaNeg.clip(k))))
        }, invertGroups: function () {
            function a() {
                var a =
                { width: b.yAxis.len, height: b.xAxis.len }; t(["group", "markerGroup"], function (c) { b[c] && b[c].attr(a).invert() })
            } var b = this, c = b.chart; b.xAxis && (M(c, "resize", a), M(b, "destroy", function () { T(c, "resize", a) }), a(), b.invertGroups = a)
        }, plotGroup: function (a, b, c, d, e) { var f = this[a], g = !f; g && (this[a] = f = this.chart.renderer.g(b).attr({ visibility: c, zIndex: d || .1 }).add(e)); f[g ? "attr" : "animate"](this.getPlotBox()); return f }, getPlotBox: function () {
            var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return {
                translateX: b ?
                b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1
            }
        }, render: function () {
            var a = this, b = a.chart, c, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && l(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex, h = a.hasRendered, k = b.seriesGroup; c = a.plotGroup("group", "series", f, g, k); a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k); e && a.animate(!0); a.getAttribs(); c.inverted = a.isCartesian ? b.inverted : !1; a.drawGraph && (a.drawGraph(), a.clipNeg()); t(a.points, function (a) {
                a.redraw &&
                a.redraw()
            }); a.drawDataLabels && a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); b.inverted && a.invertGroups(); !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect); e && a.animate(); h || (e ? a.animationTimeout = setTimeout(function () { a.afterAnimate() }, e) : a.afterAnimate()); a.isDirty = a.isDirtyData = !1; a.hasRendered = !0
        }, redraw: function () {
            var a = this.chart, b = this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis; c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({ translateX: l(d && d.left, a.plotLeft), translateY: l(e && e.top, a.plotTop) })); this.translate(); this.setTooltipPoints && this.setTooltipPoints(!0); this.render(); b && N(this, "updatedData")
        }
    }; var xb = Va(Ua); ta.line = xb; z(W, {
        Axis: Ca, Chart: Ma, Color: ua, Point: Ia, Tick: ka, Renderer: va, Series: Ua, SVGElement: L, SVGRenderer: va, arrayMin: ya, arrayMax: ra, charts: ea, dateFormat: xa, format: wa, pathAnim: Oa, getOptions: function () { return J }, hasBidiBug: qb, isTouchDevice: gb, numberFormat: da, seriesTypes: ta, setOptions: function (a) {
            J =
            E(!0, J, a); Wa(); return J
        }, addEvent: M, removeEvent: T, createElement: qa, discardElement: Aa, css: P, each: t, extend: z, map: kb, merge: E, pick: l, splat: pa, extendClass: Va, pInt: C, wrap: Ka, svg: Q, canvas: Z, vml: !Q && !Z, product: "Highcharts 4.0.4", version: "/Highstock 2.0.4"
    })
})();