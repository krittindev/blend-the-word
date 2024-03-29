! function(e) {
    function t(o) { if (r[o]) return r[o].exports; var i = r[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports } // webpackBootstrap
    /******/
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function(e, t, r) {
    "use strict";

    function o(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(1),
        n = o(i),
        c = r(8),
        a = o(c),
        l = r(10),
        s = o(l),
        m = r(17),
        d = o(m);
    t["default"] = angular.module("colorTool", ["ngRoute", "ngAria", "material.core", "material.components.backdrop", "material.components.panel", "material.components.button", "material.components.icon", "material.components.tooltip", "material.components.input", "material.components.tabs", "material.components.toast", "material.components.menu", n["default"].name, a["default"].name, s["default"].name, d["default"].name]).config(["$httpProvider", function(e) {
        "ngInject";
        e.defaults.withCredentials = !0
    }]).config(["$logProvider", function(e) {
        "ngInject";
        e.debugEnabled(!0)
    }]), e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function o(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(2),
        n = o(i);
    t["default"] = angular.module("colorTool.main", []).controller("MainController", n["default"]), e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(3),
        c = r(5),
        a = r(7),
        l = "libs/codepen-demos/mdc-components/mdc-components",
        s = "app/components/exports",
        m = { viewLeft: { 0: "userInterfaces", 1: "accessibility" }, viewRight: { 0: "materialPalette", 1: "custom" } },
        d = function() {
            function e(t, r, i, c, a, l, s, m, d, h, p) {
                "ngInject";
                o(this, e), this._$q = t, this._$scope = r, this._$rootScope = i, this._userStateService = c, this._codepenService = a, this._$templateRequest = l, this._$sce = s, this._$compile = m, this._$timeout = d, this._$mdToast = h, this._$mdMenu = p, this._model = new n.MaterialPaletteModel, this.$init()
            }
            return e.$inject = ["$q", "$scope", "$rootScope", "userStateService", "codepenService", "$templateRequest", "$sce", "$compile", "$timeout", "$mdToast", "$mdMenu"], i(e, [{ key: "$init", value: function() { this._userStateService.model = this._model, this._refreshColors(), this._refreshViews(), this._refreshActiveColorSystem(), this._$scope.$on(a.COLOR_CHANGED_EVENT, this._colorChanged.bind(this)), this._$scope.$on(a.VIEW_CHANGED_EVENT, this._viewChanged.bind(this)), this._$scope.$on(a.ACTIVE_COLOR_SYSTEM_CHANGED_EVENT, this._activeColorSystemChanged.bind(this)), this._$scope.$on(a.MATERIAL_NAV_COLLAPSED_EVENT, this._materialNavCollapsed.bind(this)), this._$scope.$on(a.COLOR_WHEEL_CHANGED_EVENT, this._colorWheelChanged.bind(this)), this._initClipboards(), this._saveCodepen(), this.isEducationToastActive = !1 } }, {
                key: "_materialNavCollapsed",
                value: function() {
                    var e = this;
                    this.primaryColor || this.secondaryColor || this._$timeout(function() { e.isEducationToastActive = !0 }, 800), this._userStateService.trackEvent("userStarts", "view")
                }
            }, { key: "disableEducationToast", value: function() { this.isEducationToastActive = !1 } }, { key: "openExportsMenu", value: function(e, t) { e.open(t) } }, { key: "getUrl", value: function() { return window.location.href } }, { key: "goToHelp", value: function() { window.open("https://material.io/guidelines/style/color.html", "_blank"), this._userStateService.trackEvent("helpLink", "click") } }, { key: "linkUrlToYourClipboard", value: function() { this._$mdToast.show(this._$mdToast.simple().textContent("URL copied to clipboard").hideDelay(3e3)), this._userStateService.trackEvent("copyLinkToClipboard", "click") } }, { key: "setActiveColorSystem", value: function(e) { this._$rootScope.$broadcast(a.ACTIVE_COLOR_SYSTEM_CHANGED_EVENT, e) } }, {
                key: "_initClipboards",
                value: function() {
                    var e = this;
                    this._$timeout(function() {
                        var t = document.querySelectorAll(".copy-to-clipboard");
                        e.clipboard = new Clipboard(t)
                    })
                }
            }, { key: "_getMDCTextThemeCustomPropValue", value: function(e) { return "#000000" === e.accessibility.preferredNormalColor ? "--mdc-theme-text-primary-on-light" : "--mdc-theme-text-primary-on-dark" } }, { key: "editOnCodepen", value: function() { this._codepenService.editOnCodepen(this.codepenData), this._userStateService.trackEvent("codepenLink", "click") } }, {
                key: "exportTo",
                value: function(e) {
                    var t = this;
                    this._userStateService.trackEvent("exportTo" + e, "click"), this._compileNgExport(e).then(function(r) {
                        var o = "android" == e ? "xml" : "swift";
                        t._download("colors." + o, r)
                    })
                }
            }, {
                key: "_download",
                value: function(e, t) {
                    var r = document.createElement("a");
                    r.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), r.setAttribute("download", e), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r)
                }
            }, {
                key: "_compileNgExport",
                value: function(e) {
                    var t = this,
                        r = { js_beautify: js_beautify, html_beautify: html_beautify },
                        o = "ios" == e ? "js_beautify" : "html_beautify";
                    return this._$q(function(i) {
                        var n = t._$sce.getTrustedResourceUrl(s + "/" + e + "/tmpl.html");
                        t._$templateRequest(n, !0).then(function(n) {
                            var c = t._$compile(n)(t._$scope);
                            t._$timeout(function() {
                                var n = t._cleanNgExportContent(c.html(), "ios" == e),
                                    a = r[o](n, { indent_size: 2, indent_char: " ", end_with_newline: !0 });
                                i(a.trim())
                            })
                        })
                    })
                }
            }, {
                key: "_saveCodepen",
                value: function() {
                    var e = this;
                    this.compilingCodepen = !0, this._$timeout(function() { e.compilingCodepen && (e.compilingCodepen = !1, e.codepenData = {}, e._compileNgCodepenDemos().then(function(t) { e.codepenData = t })) }, 1e3)
                }
            }, {
                key: "_compileNgCodepenDemos",
                value: function() {
                    var e = this;
                    return this._$q(function(t) {
                        var r = { html: "", css: "", js: "", styles: "" },
                            o = { html: e._$sce.getTrustedResourceUrl(l + ".html"), css: e._$sce.getTrustedResourceUrl(l + ".css"), js: e._$sce.getTrustedResourceUrl(l + ".js") },
                            i = 3,
                            n = function() { i -= 1, 0 === i && (r.css += r.styles, cssbeautify(r.css, { indent: "  " }), r.html = html_beautify(r.html, { indent_size: 2, indent_char: " ", end_with_newline: !0 }), t(r)) };
                        e._$templateRequest(o.html, !0).then(function(t) {
                            var o = e._$compile(t)(e._$scope);
                            e._$timeout(function() {
                                for (var t = angular.element(o[0].querySelectorAll("style")), i = 0, c = void 0; c = t[i]; i++) r.styles += c.innerHTML, c.parentNode.removeChild(c);
                                r.html = e._cleanNgCodepenContent(o.html()), n()
                            })
                        }), e._$templateRequest(o.css, !0).then(function(e) { r.css = e, n() }), e._$templateRequest(o.js, !0).then(function(e) { r.js = e, n() })
                    })
                }
            }, { key: "_cleanNgCodepenContent", value: function(e) { return e.replace(/ class="ng-binding ng-scope"/g, "").replace(/<!--[\s\S]*?-->/g, "").replace(/ ng-if="[\s\S]*?"/g, "").replace(/ ng-style="[\s\S]*?"/g, "").replace(/ ng-class="[\s\S]*?"/g, "").replace(/ ng-width="[\s\S]*?"/g, "").replace(/ ng-height="[\s\S]*?"/g, "").replace(/ ng-scope/g, "").replace(/ ng-isolate-scope/g, "") } }, {
                key: "_cleanNgExportContent",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        r = e.replace(/ class="ng-binding ng-scope"/g, "").replace(/ class="ng-scope"/g, "").replace(/ class="ng-binding"/g, "").replace(/<!-- ngIf:[\s\S]*?-->/g, "").replace(/<!-- end ngIf:[\s\S]*?-->/g, "").replace(/ ng-if="[\s\S]*?"/g, "").replace(/ ng-style="[\s\S]*?"/g, "").replace(/ ng-class="[\s\S]*?"/g, "").replace(/^\s*[\r\n]/gm, "").replace(/ ng-width="[\s\S]*?"/g, "").replace(/ ng-height="[\s\S]*?"/g, "").replace(/ ng-scope/g, "").replace(/ ng-isolate-scope/g, "").trim();
                    return t && (r = r.replace(/<[^>]*>/g, "").trim()), r
                }
            }, { key: "omitNameProp", value: function(e) { return _.isArray(e) ? _.map(e, function(e) { return _.omit(e, "name") }) : _.omit(e, "name") } }, { key: "setActiveColor", value: function(e) { this._colorChanged(null, e) } }, { key: "_saveStateColor", value: function(e) { this._userStateService.activeColor = e, this._refreshColors(), this._saveCodepen() } }, { key: "resetColors", value: function() { this._userStateService.primaryColor = "", this._userStateService.primaryTextColor = "", this._userStateService.secondaryColor = "", this._userStateService.secondaryTextColor = "", this._refreshColors(), this._saveCodepen(), this.setActiveColorSystem("primary"), this._userStateService.trackEvent("resetAllColors", "click") } }, { key: "_colorChanged", value: function(e, t) { this._saveStateColor(t), this._userStateService.trackEvent("materialPalette", "click") } }, { key: "_viewChanged", value: function(e, t, r) { this._refreshViews(), this._userStateService.trackEvent(m[t][r], "view") } }, { key: "_activeColorSystemChanged", value: function(e, t) { this._userStateService.activeColorSystem = t, this._refreshActiveColorSystem(), this._userStateService.trackEvent(t + "Scheme", "click") } }, {
                key: "_colorWheelChanged",
                value: function(e, t) {
                    if (t) {
                        var r = t.hex,
                            o = t.committed,
                            i = { hex: r, preventUrlUpdate: !o };
                        this._saveStateColor(i)
                    }
                }
            }, { key: "_refreshColors", value: function() { this.primaryColor = this._userStateService.primaryColor, this.secondaryColor = this._userStateService.secondaryColor, this.primaryTextColor = this._userStateService.primaryTextColor, this.secondaryTextColor = this._userStateService.secondaryTextColor, this.collectedSchemes = this._userStateService.collectedSchemes } }, { key: "_refreshViews", value: function() { this.viewLeft = this._userStateService.viewLeft, this.viewRight = this._userStateService.viewRight } }, { key: "_refreshActiveColorSystem", value: function() { this.activeColorSystem = this._userStateService.activeColorSystem } }, { key: "changeView", value: function(e, t) { this._userStateService["" + e] = t, this._$scope.$broadcast(a.VIEW_CHANGED_EVENT, e, t) } }, { key: "getTextLegibility", value: function(e) { return this[e + "Color"] ? this.getTextLegibilityFromParams(this[e + "Color"].hex, this[e + "TextColor"].hex) : null } }, { key: "getTextLegibilityFromParams", value: function(e, t) { if (!e) return null; var r = c.Utilities.getMinAndRecAlphasFromBgAndTextColors(e, t, "large"); if (null === r.minAlpha) return 2; var o = c.Utilities.getMinAndRecAlphasFromBgAndTextColors(e, t, "normal"); return null === o.minAlpha ? 1 : 0 } }, { key: "getRgbaFromSchemeNameAndAlpha", value: function(e, t) { return this[e] ? c.Utilities.getRgbaFromHexAndAlpha(this[e].hex, t) : void 0 } }, {
                key: "getRgbIOSFromHex",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        r = c.Utilities.hex2Rgb(e);
                    if (r && t) { var o = (r[t] / 255).toFixed(2); return o }
                }
            }, { key: "_getBucketName", value: function() { return "localhost" === window.location.hostname ? "test" : "material.io" === window.location.host && "/color/" === window.location.pathname ? "material_io_color" : "dev" } }, { key: "startFeedbackWidget", value: function() { userfeedback.api.startFeedback({ productId: "1635333", enableAnonymousFeedback: !0, allowNonLoggedInFeedback: !0, bucket: this._getBucketName() }), this._userStateService.trackEvent("feedbackWidget", "click") } }, {
                key: "activeColor",
                get: function() {
                    if (-1 !== this._userStateService.activeColorSystem.indexOf("Text") && !this._userStateService.activeColor) {
                        var e = this._userStateService[this._userStateService.activeColorSystem.replace("Text", "") + "Color"];
                        this._userStateService.activeColor = { hex: e.accessibility.preferredNormalColor }
                    }
                    return this._userStateService.activeColor
                }
            }, { key: "model", get: function() { return this._model } }, { key: "activeScheme", get: function() { var e = { primaryColor: this.primaryColor, primaryTextColor: this.primaryTextColor, secondaryColor: this.secondaryColor, secondaryTextColor: this.secondaryTextColor }; return e } }]), e
        }();
    t["default"] = d, e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        c = function(e, t, r) {
            for (var o = !0; o;) {
                var i = e,
                    n = t,
                    c = r;
                o = !1, null === i && (i = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(i, n);
                if (void 0 !== a) { if ("value" in a) return a.value; var l = a.get; return void 0 === l ? void 0 : l.call(c) }
                var s = Object.getPrototypeOf(i);
                if (null === s) return void 0;
                e = s, t = n, r = c, o = !0, a = s = void 0
            }
        },
        a = r(4),
        l = r(6),
        s = r(5),
        m = function(e) {
            function t() {
                "ngInject";
                o(this, t), c(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._init()
            }
            return i(t, e), n(t, [{
                key: "_init",
                value: function() {
                    var e = this;
                    this._supportsShades = !0, this._palettes = _.map(l.MaterialPalette.palettes, function(t) { return { name: t.name, values: _.map(t.hexes, function(t, r) { return { hex: t, shade: e.shades[r] } }) } });
                    var t = [];
                    _.each(this._palettes, function(r, o) { _.each(r.values, function(r, o) { t.push(e.findColorOnPaletteFromHex(s.Utilities.formatHex(r.hex), !0)) }) }), this._colors = t
                }
            }, { key: "shades", get: function() { return l.MaterialPalette.shades } }]), t
        }(a.PaletteModel);
    t.MaterialPaletteModel = m
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(5),
        c = function() {
            function e(t, r) { o(this, e), this._palettes = t, this._colors = r, this._supportsShades = !1 }
            return i(e, [{ key: "getColorFromHex", value: function(e) { var t = _.find(this._colors, { hex: n.Utilities.formatHex(e) }); return _.isEmpty(t) ? this.findColorOnPaletteFromHex(e, !0) : t } }, {
                key: "findColorOnPaletteFromHex",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    if (!e) return null;
                    e = n.Utilities.formatHex(e);
                    var r = { hex: e, accessibility: n.Utilities.getAccessibilityValuesFromHex(e) };
                    t && (r.range = this.getColorRangeFromHex(e));
                    var o = this.findPaletteFromHex(e);
                    return o ? (r.name = o.name, this.supportsShades && (r.shade = o.shade), r) : r
                }
            }, { key: "generateColorFromHex", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return { hex: e, accessibility: n.Utilities.getAccessibilityValuesFromHex(e), range: t ? this.getColorRangeFromHex(e) : {} } } }, {
                key: "getColorRangeFromHex",
                value: function(e) {
                    e = n.Utilities.formatHex(e);
                    var t = { dark: {}, light: {} },
                        r = chroma(e).darken().hex(),
                        o = chroma(e).brighten().hex();
                    t.dark = { hex: r, accessibility: n.Utilities.getAccessibilityValuesFromHex(r) }, t.light = { hex: o, accessibility: n.Utilities.getAccessibilityValuesFromHex(o) };
                    var i = this.findPaletteFromHex(e);
                    return i ? (t.dark.name = t.light.name = i.name, _.extend(t.dark, this.findColorOnPaletteFromHex(t.dark.hex)), _.extend(t.light, this.findColorOnPaletteFromHex(t.light.hex)), t) : t
                }
            }, { key: "findPaletteFromHex", value: function(e) { var t = {}; return _.each(this._palettes, function(r) { return t = _.find(r.values, { hex: e }), t ? (t = r, !1) : void 0 }), t } }, { key: "colors", get: function() { return this._colors } }, { key: "palettes", get: function() { return this._palettes } }, { key: "supportsShades", get: function() { return this._supportsShades }, set: function(e) { this._supportsShades = e } }, { key: "shades", get: function() { throw new Error("Implemented in subclasses") } }]), e
        }();
    t.PaletteModel = c
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
        round: function(e, t) { t = +t || 0; var r = Math.pow(10, t); return Math.round(e * r) / r },
        applyLumDiffOnColorHex: function(e, t) { e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0; for (var r = "#", o = void 0, i = 0; 3 > i; i++) o = parseInt(e.substr(2 * i, 2), 16), o = this.round(Math.min(Math.max(0, o + o * t), 255)).toString(16), r += ("00" + o).substr(o.length); return r.toUpperCase() },
        getAccessibilityValuesFromHex: function(e) {
            var t = this,
                r = { WHITE: "#ffffff", BLACK: "#000000" },
                o = {},
                i = [{ large: !1, textColor: r.WHITE, ratio: 4.5, titlePriority: 2 }, { large: !0, textColor: r.WHITE, ratio: 3, titlePriority: 4 }, { large: !1, textColor: r.BLACK, ratio: 4.5, titlePriority: 1 }, { large: !0, textColor: r.BLACK, ratio: 3, titlePriority: 3 }],
                n = null,
                c = null,
                a = null,
                l = null,
                s = null,
                m = null;
            return _.each(i, function(r) {
                var i = t.minAcceptableAlpha(e, r.textColor, r.ratio),
                    d = i ? Math.max(i, .87) : null;
                i && (!r.large && r.titlePriority && t.isTextLegibleOverBackground(r.textColor, e) && (!c || r.titlePriority > m) && (c = r.textColor, m = r.titlePriority), r.titlePriority && t.isTextLegibleOverBackground(r.textColor, e) && (!n || r.titlePriority > s) && (n = r.textColor, s = r.titlePriority, a = d, l = t.getRgbaFromHexAndAlpha(r.textColor, d)), o.defaults || (o.defaults = []), o.defaults.push({ recAlpha: d, minAlpha: i, criteria: r }))
            }), o.criterias = {}, _.each(o.defaults, function(e) {
                e.preferredTitleColor = n, e.preferredNormalColor = c, e.preferredTitleRecAlpha = a, e.preferredTitleRgba = l;
                var t = e.criteria.textColor == r.WHITE ? "white" : "black",
                    i = e.criteria.large ? "large" : "normal";
                o.criterias[t] || (o.criterias[t] = {}), o.criterias[t][i] = e
            }), o.preferredTitleColor = n, o.preferredNormalColor = c, o.preferredTitleRecAlpha = a, o.preferredTitleRgba = l, o
        },
        getMinAndRecAlphasFromBgAndTextColors: function(e, t) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? "large" : arguments[2],
                o = "large" === r ? 3 : 4.5,
                i = this.minAcceptableAlpha(e, t, o);
            return { minAlpha: i, recAlpha: i ? Math.max(i, .87) : null }
        },
        minAcceptableAlpha: function(e, t, r) {
            var o = this.hex2Rgb(e),
                i = this.hex2Rgb(t),
                n = 0,
                c = 1,
                a = this.blendForegroundContrast(o, i, n);
            if (a >= r) return null;
            var l = this.blendForegroundContrast(o, i, c);
            if (r > l) return null;
            for (var s = 0, m = 10, d = .01; m >= s && c - n > d;) {
                var h = (n + c) / 2,
                    p = this.blendForegroundContrast(o, i, h);
                r > p ? n = h : c = h, ++s
            }
            return s > m ? null : c
        },
        hex2Rgb: function(e) {
            if (!e) return null;
            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            e = e.replace(t, function(e, t, r, o) { return t + t + r + r + o + o });
            var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null
        },
        blendForegroundContrast: function(e, t, r) { if (1 > r) { var o = this.overlayOn(e, t, r); return this.opaqueContrast(o, e) } return this.opaqueContrast(e, t) },
        overlayOn: function(e, t, r) { var o = {}; return r >= 1 ? e : (o.r = t.r * r + e.r * (1 - r), o.g = t.g * r + e.g * (1 - r), o.b = t.b * r + e.b * (1 - r), o.a = r + 1 * (1 - r), o) },
        opaqueContrast: function(e, t, r) {
            var o = this.getLFromRgbColor(t) + .05,
                i = this.getLFromRgbColor(e) + .05,
                n = o / i;
            return i > o && (n = 1 / n), n
        },
        isTextLegibleOverBackground: function(e, t) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? 14 : arguments[2],
                o = arguments.length <= 3 || void 0 === arguments[3] ? 300 : arguments[3],
                i = this.getLFromHex(e),
                n = this.getLFromHex(t),
                c = !1;
            if (i !== !1 && n !== !1) {
                var a = 14 == r && o >= 700 || r >= 18,
                    l = (Math.max(i, n) + .05) / (Math.min(i, n) + .05);
                c = l >= 3 && a ? !0 : l >= 3 && 4.5 > l && !a ? !1 : l >= 4.5 && !a ? !0 : !1
            }
            return c
        },
        getLFromHex: function(e) { var t = this.hex2Rgb(e); return this.getLFromRgbColor(t) },
        getLFromRgbValue: function(e) { var t = e / 255; return .03928 > t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) },
        getLFromRgbColor: function(e) { var t = {}; return t.r = this.getLFromRgbValue(e.r), t.g = this.getLFromRgbValue(e.g), t.b = this.getLFromRgbValue(e.b), .2126 * t.r + .7152 * t.g + .0722 * t.b },
        getRgbaFromHexAndAlpha: function(e, t) { var r = this.hex2Rgb(e); return t = t ? t.toFixed(2) : 1, "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + t + ")" },
        formatHex: function(e) { return e ? "#" !== e[0] ? "#" + e : e : null },
        rgb2Hex: function(e) { var t = Math.round(e.b) + 256 * Math.round(e.g) + 65536 * Math.round(e.r); return "#" + ("000000" + t.toString(16)).substr(-6) },
        rgb2Hsv: function(e, t, r) {
            var o = 0,
                i = 0,
                n = 0;
            if (e = parseInt(("" + e).replace(/\s/g, ""), 10), t = parseInt(("" + t).replace(/\s/g, ""), 10), r = parseInt(("" + r).replace(/\s/g, ""), 10), !(null == e || null == t || null == r || isNaN(e) || isNaN(t) || isNaN(r) || 0 > e || 0 > t || 0 > r || e > 255 || t > 255 || r > 255)) {
                e /= 255, t /= 255, r /= 255;
                var c = Math.min(e, Math.min(t, r)),
                    a = Math.max(e, Math.max(t, r));
                if (c == a) return n = c, { h: 0, s: 0, v: n };
                var l = e == c ? t - r : r == c ? e - t : r - e,
                    s = e == c ? 3 : r == c ? 1 : 5;
                return o = 60 * (s - l / (a - c)), i = (a - c) / a, n = a, { h: o, s: i, v: n }
            }
        },
        distanceBetweenTwoPoints: function(e, t) {
            var r = e.x,
                o = e.y,
                i = t.x,
                n = t.y;
            return Math.sqrt(Math.pow(r - i, 2) + Math.pow(o - n, 2))
        },
        hsv2Rgb: function(e, t, r) {
            var o = r * t,
                i = e / 60,
                n = o * (1 - Math.abs(i % 2 - 1)),
                c = r - o,
                a = [];
            "undefined" == typeof e ? a = [0, 0, 0] : 1 > i ? a = [o, n, 0] : 2 > i ? a = [n, o, 0] : 3 > i ? a = [0, o, n] : 4 > i ? a = [0, n, o] : 5 > i ? a = [n, 0, o] : 6 >= i && (a = [o, 0, n]);
            var l = 255 * (a[0] + c),
                s = 255 * (a[1] + c),
                m = 255 * (a[2] + c);
            return { r: l, g: s, b: m }
        },
        hex2Hsv: function(e) { var t = this.hex2Rgb(e); return this.rgb2Hsv(t.r, t.g, t.b) },
        hsv2Hex: function(e, t, r) { var o = this.hsv2Rgb(e, t, r); return this.rgb2Hex({ r: o.r, g: o.g, b: o.b }) },
        rgba2rgb: function(e) { var t = { r: e.r, g: e.g, b: e.b }; return e.a ? (t.r = Math.round(255 * (1 - e.a) + e.a * e.r), t.g = Math.round(255 * (1 - e.a) + e.a * e.g), t.b = Math.round(255 * (1 - e.a) + e.a * e.b), t) : e },
        rgba2hex: function(e) { var t = this.rgba2rgb(e); return this.rgb2Hex(t) },
        darkenHex: function(e, t) { return this.rgb2Hex(this.darkenRgb(this.hex2Rgb(e), t)) },
        darkenRgb: function(e, t) {
            var r = {},
                o = { r: 0, g: 0, b: 0 };
            for (var i in o) r[i] = parseInt((o[i] - e[i]) * t + e[i], 10);
            return r
        },
        lightenHex: function(e, t) { return this.rgb2Hex(this.lightenRgb(this.hex2Rgb(e), t)) },
        lightenRgb: function(e, t) {
            var r = {},
                o = { r: 255, g: 255, b: 255 };
            for (var i in o) r[i] = parseInt((o[i] - e[i]) * t + e[i], 10);
            return r
        },
        sanitizeStringWithHyphens: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                r = new RegExp("[ " + t + "]", "g");
            return e.replace(r, "-")
        },
        sanitizeStringWithoutHyphens: function(e) { return e.replace(/-/g, " ") },
        getDistanceFromLabColors: function(e, t) { return DeltaE.getDeltaE00({ L: e[0], A: e[1], B: e[2] }, { L: t[0], A: t[1], B: t[2] }) },
        getDistanceFromHexes: function(e, t) {
            var r = chroma.hex(e),
                o = chroma.hex(t);
            return this.getDistanceFromLabColors(r.lab(), o.lab())
        },
        stopErrorFormMessage: function(e) { e && e.$setValidity("form-error", !0) },
        showErrorFormMessage: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            e && (e.$setValidity("form-error", !1), t && (e.formErrorMsg = t))
        },
        hexValid: function(e) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e) }
    };
    t.Utilities = r
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
        shades: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"],
        palettes: [
            { name: "Red", hexes: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000"] },
            { name: "Pink", hexes: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F", "#FF80AB", "#FF4081", "#F50057", "#C51162"] },
            { name: "Purple", hexes: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C", "#EA80FC", "#E040FB", "#D500F9", "#AA00FF"] },
            { name: "Deep Purple", hexes: ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#B388FF", "#7C4DFF", "#651FFF", "#6200EA"] },
            { name: "Indigo", hexes: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"] },
            { name: "Blue", hexes: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#82B1FF", "#448AFF", "#2979FF", "#2962FF"] },
            { name: "Light Blue", hexes: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"] },
            { name: "Cyan", hexes: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F", "#006064", "#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"] },
            { name: "Teal", hexes: ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40", "#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"] },
            { name: "Green", hexes: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20", "#B9F6CA", "#69F0AE", "#00E676", "#00C853"] },
            { name: "Light Green", hexes: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E", "#CCFF90", "#B2FF59", "#76FF03", "#64DD17"] },
            { name: "Lime", hexes: ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24", "#827717", "#F4FF81", "#EEFF41", "#C6FF00", "#AEEA00"] },
            { name: "Yellow", hexes: ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17", "#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"] },
            { name: "Amber", hexes: ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00", "#FFE57F", "#FFD740", "#FFC400", "#FFAB00"] },
            { name: "Orange", hexes: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100", "#FFD180", "#FFAB40", "#FF9100", "#FF6D00"] },
            { name: "Deep Orange", hexes: ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315", "#BF360C", "#FF9E80", "#FF6E40", "#FF3D00", "#DD2C00"] },
            { name: "Brown", hexes: ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"] },
            { name: "Grey", hexes: ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"] },
            { name: "Blue Grey", hexes: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"] }
        ]
    };
    t.MaterialPalette = r
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = "colorChanged";
    t.COLOR_CHANGED_EVENT = r;
    var o = "colorWheelChanged";
    t.COLOR_WHEEL_CHANGED_EVENT = o;
    var i = "viewChanged";
    t.VIEW_CHANGED_EVENT = i;
    var n = "activeColorSystemChanged";
    t.ACTIVE_COLOR_SYSTEM_CHANGED_EVENT = n;
    var c = "activeSchemeChanged";
    t.ACTIVE_SCHEME_CHANGED_EVENT = c;
    var a = "collectedSchemesChanged";
    t.COLLECTED_SCHEMES_EVENT = a;
    var l = "materialNavCollapsed";
    t.MATERIAL_NAV_COLLAPSED_EVENT = l
}, function(e, t, r) {
    "use strict";

    function o(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(9),
        n = o(i);
    t["default"] = angular.module("colorTool.configuration", []).config(["$routeProvider", "$locationProvider", function(e) { n["default"].configure(e) }]), e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        i = function() {
            function e() { r(this, e) }
            return o(e, null, [{ key: "configure", value: function(e) { e.when("/", { templateUrl: "app/main/tmpl/main.html", controller: "MainController", controllerAs: "main", reloadOnSearch: !1 }).otherwise({ redirectTo: "/" }) } }]), e
        }();
    t["default"] = i, e.exports = t["default"]
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(11),
        i = r(13),
        n = r(5),
        c = r(14),
        a = r(16);
    t["default"] = angular.module("colorTool.services", []).service("queryParamsService", o.QueryParamsService).service("userStateService", i.UserStateService).service("utilities", n.Utilities).service("codepenService", c.CodepenService).service("gaService", a.GAService), e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(12),
        c = "primary";
    t.DEFAULT_ACTIVE_COLOR_SYSTEM = c;
    var a = 0;
    t.DEFAULT_VIEW_LEFT = a;
    var l = 0;
    t.DEFAULT_VIEW_RIGHT = l;
    var s = function() {
        function e(t, r) {
            "ngInject";
            o(this, e), this._$rootScope = t, this._$location = r, this._primaryColor, this._secondaryColor, this._primaryTextColor, this._secondaryTextColor, this._viewLeft, this._viewRight, this._collectedSchemes, this._collectedSchemes, this._activeColorSystem, this.reset()
        }
        return e.$inject = ["$rootScope", "$location"], i(e, [{
            key: "initializeFromQueryParams",
            value: function(e) { e[n.QueryParamName.PRIMARY_COLOR] && (this.primaryColor = e[n.QueryParamName.PRIMARY_COLOR]), e[n.QueryParamName.SECONDARY_COLOR] && (this.secondaryColor = e[n.QueryParamName.SECONDARY_COLOR]), e[n.QueryParamName.PRIMARY_TEXT_COLOR] && (this.primaryTextColor = e[n.QueryParamName.PRIMARY_TEXT_COLOR]), e[n.QueryParamName.SECONDARY_TEXT_COLOR] && (this.secondaryTextColor = e[n.QueryParamName.SECONDARY_TEXT_COLOR]), e[n.QueryParamName.VIEW_LEFT] && (this.viewLeft = e[n.QueryParamName.VIEW_LEFT]), e[n.QueryParamName.VIEW_RIGHT] && (this.viewRight = e[n.QueryParamName.VIEW_RIGHT]), e[n.QueryParamName.COLLECTED_SCHEMES] && (this.collectedSchemes = e[n.QueryParamName.COLLECTED_SCHEMES]) }
        }, {
            key: "updateUrlFromParams",
            value: function() {
                var e = this,
                    t = this.toQueryParams();
                _.each(t, function(t, r) { e._$location.search(r, t) }), this._$location.replace()
            }
        }, {
            key: "toQueryParams",
            value: function() { var e = {}; return e[n.QueryParamName.PRIMARY_COLOR] = "" != this.primaryColor ? this.primaryColor : null, e[n.QueryParamName.SECONDARY_COLOR] = "" != this.secondaryColor ? this.secondaryColor : null, e[n.QueryParamName.PRIMARY_TEXT_COLOR] = "" != this.primaryTextColor ? this.primaryTextColor : null, e[n.QueryParamName.SECONDARY_TEXT_COLOR] = "" != this.secondaryTextColor ? this.secondaryTextColor : null, e[n.QueryParamName.VIEW_LEFT] = "" != this.viewLeft ? this.viewLeft : 0, e[n.QueryParamName.VIEW_RIGHT] = "" != this.viewRight ? this.viewRight : 0, e[n.QueryParamName.COLLECTED_SCHEMES] = _.isEmpty(this.collectedSchemes) ? null : this.collectedSchemes, e }
        }, {
            key: "reset",
            value: function() { this.activeColorSystem = c, this.viewLeft = a, this.viewRight = l }
        }, {
            key: "primaryColor",
            get: function() { return this._primaryColor },
            set: function(e) {
                if (null !== e) {
                    var t = "#" === e[0] ? e.slice(1) : e;
                    if (this._primaryColor === t) return;
                    this._primaryColor = t
                } else this._primaryColor = null;
                this._primaryTextColor = null
            }
        }, {
            key: "secondaryColor",
            get: function() { return this._secondaryColor },
            set: function(e) {
                if (null !== e) {
                    var t = "#" === e[0] ? e.slice(1) : e;
                    if (this._secondaryColor === t) return;
                    this._secondaryColor = t
                } else this._secondaryColor = null;
                this._secondaryTextColor = null
            }
        }, {
            key: "primaryTextColor",
            get: function() { return this._primaryTextColor },
            set: function(e) { null !== e ? this._primaryTextColor = "#" === e[0] ? e.slice(1) : e : this._primaryTextColor = null }
        }, { key: "secondaryTextColor", get: function() { return this._secondaryTextColor }, set: function(e) { null !== e ? this._secondaryTextColor = "#" === e[0] ? e.slice(1) : e : this._secondaryTextColor = null } }, { key: "viewLeft", get: function() { return parseInt(this._viewLeft, 10) }, set: function(e) { this._viewLeft = angular.isDefined(e) ? e : 0 } }, { key: "viewRight", get: function() { return parseInt(this._viewRight, 10) }, set: function(e) { this._viewRight = angular.isDefined(e) ? e : 0 } }, { key: "collectedSchemes", get: function() { return this._collectedSchemes }, set: function(e) { this._collectedSchemes = e } }, { key: "activeColorSystem", get: function() { return this._activeColorSystem }, set: function(e) { this._activeColorSystem = e } }]), e
    }();
    t.QueryParamsService = s
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = { PRIMARY_COLOR: "primary.color", SECONDARY_COLOR: "secondary.color", PRIMARY_TEXT_COLOR: "primary.text.color", SECONDARY_TEXT_COLOR: "secondary.text.color", VIEW_LEFT: "view.left", VIEW_RIGHT: "view.right", COLLECTED_SCHEMES: "collected.schemes", ACTIVE_COLOR_SYSTEM: "active.color.system" };
    t.QueryParamName = r
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(5),
        c = { START: "_", SPACES: "-", COLORS: "!", END: "*" };
    t.UrlCollectedSchemesDividers = c;
    var a = function() {
        function e(t, r, i, n, c, a) {
            "ngInject";
            var l = this;
            o(this, e), this._$rootScope = t, this._$location = i, this._queryParamsService = n, this._codepenService = c, this._gaService = a, this._model = null, this._initializeFromUrl(), this._gaEvents = {}, window.addEventListener("unload", function() { return l.$onExit() }, !1)
        }
        return e.$inject = ["$rootScope", "$window", "$location", "queryParamsService", "codepenService", "gaService"], i(e, [{ key: "$onExit", value: function() { this._gaService.sendTrackEvents(this._gaEvents) } }, {
            key: "trackEvent",
            value: function(e, t) {
                var r = e + "|" + t;
                this._gaEvents[r] || (this._gaEvents[r] = 0), this._gaEvents[r] += 1
            }
        }, { key: "openInCodepen", value: function() { this._codepenService.openInCodepen() } }, {
            key: "setActiveScheme",
            value: function(e) {
                for (var t in e)
                    if ("name" !== t) {
                        var r = e[t];
                        this._queryParamsService[t] = r && angular.isDefined(r.hex) ? r.hex : ""
                    }
                this._queryParamsService.updateUrlFromParams();
            }
        }, { key: "_initializeFromUrl", value: function() { this._queryParamsService.initializeFromQueryParams(this._$location.search()) } }, { key: "model", set: function(e) { this._model = e } }, { key: "primaryColor", get: function() { return this._model.getColorFromHex(this._queryParamsService.primaryColor) }, set: function(e) { this._queryParamsService.primaryColor = e.hex || null, e.preventUrlUpdate || this._queryParamsService.updateUrlFromParams() } }, { key: "primaryTextColor", get: function() { var e = this._queryParamsService.primaryTextColor ? this._queryParamsService.primaryTextColor : this.primaryColor ? this.primaryColor.accessibility.preferredNormalColor : null; return this._model.findColorOnPaletteFromHex(e) }, set: function(e) { this._queryParamsService.primaryTextColor = e.hex || null, e.preventUrlUpdate || this._queryParamsService.updateUrlFromParams() } }, { key: "secondaryColor", get: function() { return this._model.getColorFromHex(this._queryParamsService.secondaryColor) }, set: function(e) { this._queryParamsService.secondaryColor = e.hex || null, e.preventUrlUpdate || this._queryParamsService.updateUrlFromParams() } }, { key: "secondaryTextColor", get: function() { var e = this._queryParamsService.secondaryTextColor ? this._queryParamsService.secondaryTextColor : this.secondaryColor ? this.secondaryColor.accessibility.preferredNormalColor : null; return this._model.findColorOnPaletteFromHex(e) }, set: function(e) { this._queryParamsService.secondaryTextColor = e.hex || null, e.preventUrlUpdate || this._queryParamsService.updateUrlFromParams() } }, { key: "viewLeft", get: function() { return this._queryParamsService.viewLeft }, set: function(e) { this._queryParamsService.viewLeft = e, this._queryParamsService.updateUrlFromParams() } }, { key: "viewRight", get: function() { return this._queryParamsService.viewRight }, set: function(e) { this._queryParamsService.viewRight = e, this._queryParamsService.updateUrlFromParams() } }, {
            key: "collectedSchemes",
            get: function() {
                var e = this,
                    t = [],
                    r = this._queryParamsService.collectedSchemes ? decodeURIComponent(this._queryParamsService.collectedSchemes) : null;
                if (!r) return t;
                var o = r.split(c.END);
                return _(o).compact().map(function(t) {
                    if (t) {
                        var r = t.split(c.START),
                            o = r[0],
                            i = r[1].split(c.SPACES),
                            a = i[0].split(c.COLORS),
                            l = i[1].split(c.COLORS);
                        return { name: n.Utilities.sanitizeStringWithoutHyphens(o), primaryColor: e._model.findColorOnPaletteFromHex(a[0], !0), primaryTextColor: e._model.findColorOnPaletteFromHex(a[1]), secondaryColor: e._model.findColorOnPaletteFromHex(l[0], !0), secondaryTextColor: e._model.findColorOnPaletteFromHex(l[1]) }
                    }
                }).value()
            },
            set: function(e) {
                var t = "";
                _.isArray(e) || (e = [e]);
                var r = function(e) { return e && e.hex ? e.hex.replace("#", "") : "" };
                e.forEach(function(e) {
                    var o = angular.isDefined(e.name) ? n.Utilities.sanitizeStringWithHyphens(e.name, [c.START]) : n.Utilities.sanitizeStringWithHyphens("Untitled scheme");
                    t = "" + t + o + c.START + ("" + r(e.primaryColor) + c.COLORS) + ("" + r(e.primaryTextColor) + c.SPACES) + ("" + r(e.secondaryColor) + c.COLORS) + ("" + r(e.secondaryTextColor) + c.END)
                }), this._queryParamsService.collectedSchemes = encodeURIComponent(t), this._queryParamsService.updateUrlFromParams()
            }
        }, { key: "activeColorSystem", get: function() { return this._queryParamsService.activeColorSystem }, set: function(e) { this._queryParamsService.activeColorSystem = e } }, {
            key: "activeColor",
            get: function() {
                var e = this._queryParamsService[this.activeColorSystem + "Color"],
                    t = this._model.getColorFromHex(e);
                return _.cloneDeep(t)
            },
            set: function(e) { this._queryParamsService[this.activeColorSystem + "Color"] = e.hex || null, e.preventUrlUpdate || this._queryParamsService.updateUrlFromParams() }
        }]), e
    }();
    t.UserStateService = a
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(15),
        c = "//codepen.io/pen/define/";
    t.CODEPEN_API = c;
    var a = "/app/components/codepen-demos/demo";
    t.CODEPEN_DEMOS_DIR = a;
    var l = function() {
        function e(t, r, i, n, c) {
            "ngInject";
            o(this, e), this._$q = t, this._$rootScope = r, this._$location = i, this._$document = n, this._$templateRequest = c
        }
        return e.$inject = ["$q", "$rootScope", "$location", "$document", "$templateRequest"], i(e, [{
            key: "openInCodepen",
            value: function() {
                var e = this.buildForm(this.data);
                this._$document.find("body").append(e), e[0].submit(), e.remove()
            }
        }, {
            key: "editOnCodepen",
            value: function(e) {
                var t = this.translate(e),
                    r = this.buildForm(t);
                this._$document.find("body").append(r), r[0].submit(), r.remove()
            }
        }, { key: "translate", value: function(e) { return { title: n.CODEPEN_DEMOS_CONFIG.title, html: e.html, js: e.js, css: e.css, js_external: n.CODEPEN_DEMOS_CONFIG.js_external.join(";"), css_external: n.CODEPEN_DEMOS_CONFIG.css_external.join(";") } } }, {
            key: "buildForm",
            value: function(e) {
                var t = angular.element('<form style="display: none;" method="post" target="_blank" action="' + c + '"></form>'),
                    r = '<input type="hidden" name="data" value="' + this.escapeJsonQuotes(e) + '" />';
                return t.append(r), t
            }
        }, { key: "escapeJsonQuotes", value: function(e) { return JSON.stringify(e).replace(/'/g, "&amp;apos;").replace(/"/g, "&amp;quot;").replace(/&amp;lt;/g, "&#x02C2;").replace(/&amp;gt;/g, "&#x02C3;") } }]), e
    }();
    t.CodepenService = l
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = { title: "MDC example", js_external: ["https://unpkg.com/material-components-web@0.8.0/dist/material-components-web.min.js"], css_external: ["https://fonts.googleapis.com/icon?family=Material+Icons", "https://unpkg.com/material-components-web@0.8.0/dist/material-components-web.min.css"] };
    t.CODEPEN_DEMOS_CONFIG = r
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        i = function() {
            function e(t) {
                "ngInject";
                r(this, e), this._$location = t, this._trackingQueue = []
            }
            return e.$inject = ["$location"], o(e, [{ key: "_getServerEventName", value: function() { return "localhost" === window.location.hostname ? "test" : "material.io" === window.location.host && "/color/" === window.location.pathname ? "material.io/color" : "dev" } }, {
                key: "sendGaEvent",
                value: function(e, t) {
                    var r = this._getServerEventName();
                    this._trackingQueue.push({ eventCategory: r, eventAction: e, eventLabel: t }), this._sendQueuedTrackingEvents()
                }
            }, {
                key: "sendTrackEvents",
                value: function(e) {
                    var t = this._getServerEventName();
                    this._trackingQueue = [];
                    for (var r in e)
                        for (var o = r.split("|"), i = e[r], n = 0; i > n; n++) this._trackingQueue.push({ eventCategory: t, eventLabel: o[0], eventAction: o[1] });
                    this._sendQueuedTrackingEvents()
                }
            }, {
                key: "_sendQueuedTrackingEvents",
                value: function() {
                    if (void 0 !== window.ga && void 0 !== window.ga.getAll)
                        for (var e = window.ga.getAll(); this._trackingQueue.length;)
                            for (var t = this._trackingQueue.shift(), r = 0; r < e.length; r++) {
                                var o = e[r].get("name");
                                window.ga(o + ".send", "event", t.eventCategory, t.eventAction, t.eventLabel)
                            }
                }
            }]), e
        }();
    t.GAService = i
}, function(e, t, r) {
    "use strict";

    function o(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(18),
        n = o(i),
        c = r(26),
        a = r(28),
        l = r(33),
        s = r(35),
        m = r(37),
        d = r(39),
        h = r(41),
        p = r(44),
        u = r(45),
        _ = r(47),
        v = r(48),
        g = r(49),
        y = r(50),
        f = r(51),
        b = r(52),
        x = r(53),
        C = r(54),
        k = r(55);
    t["default"] = angular.module("colorTool.components", [n["default"].name]).directive("ctMaterialPalette", c.MaterialPaletteDirective).directive("ctColorSchemes", a.ColorSchemesDirective).directive("ctAccessibility", l.AccessibilityDirective).directive("ctAccessibilityItem", s.AccessibilityItemDirective).directive("ctCollectionDrawer", m.CollectionDrawerDirective).directive("selectionToggle", d.SelectionToggleDirective).directive("ctUiContainer", h.UiContainerDirective).directive("ctUiMobile", p.UiMobileDirective).directive("ctMaterialImage", u.MaterialImageDirective).directive("ctMdcComponents", _.MdcComponentsDirective).directive("ctMdcButtons", v.MdcButtonsDirective).directive("ctMdcSwitchesSliders", g.MdcSwitchesSlidersDirective).directive("ctMdcSelection", y.MdcSelectionDirective).directive("ctMdcCards", f.MdcCardsDirective).directive("ctMdcMenu", b.MdcMenuDirective).directive("ctMdcTextfield", x.MdcTextfieldDirective).directive("ctMdcToolbar", C.MdcToolbarDirective).directive("ctMaterialIoNav", k.MaterialIoNavDirective), e.exports = t["default"]
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(19),
        i = r(22),
        n = r(24);
    t["default"] = angular.module("colorTool.colorWheel", []).directive("ctColorWheel", o.ColorWheelDirective).directive("ctColorWheelSelector", i.ColorWheelSelectorDirective).directive("ctColorLuminanceSlider", n.ColorLuminanceSliderDirective), e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: { hex: "<" }, transclude: !0, templateUrl: "app/components/color-wheel/tmpl/color-wheel.html", bindToController: !0, controllerAs: "$colorWheel", controller: i.ColorWheelController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorWheelDirective = o;
    var i = r(20)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = r(5),
        a = r(21),
        l = function() {
            function e(t, r, i) {
                "ngInject";
                var n = this;
                o(this, e), this._$scope = t, this._rawElement = r[0], this._userStateService = i, this.canvas = { el: this._rawElement.querySelector(".color-wheel__canvas"), colorWheelEl: this._rawElement.querySelector(".color-wheel"), containerEl: this._rawElement.querySelector(".color-wheel__canvas__container"), sizePx: 250, loaded: !1 }, this.selector = { el: this._rawElement.querySelector(".color-wheel__selector"), active: !1 }, this.luminanceModel = new a.LuminanceSliderModel, this.luminanceValue = 1, this._mouseDownHandler = function(e) { return n._handleMouseDown(e) }, this._mouseMoveHandler = function(e) { return n._handleMouseMove(e) }, this._mouseUpHandler = function(e) { return n._handleMouseUp(e) }, this._resizeHandler = function(e) { return n._handleResize(e) }
            }
            return e.$inject = ["$scope", "$element", "userStateService"], i(e, [{ key: "$onInit", value: function() { this.luminanceModel.onLuminanceUpdate = this._luminanceUpdate.bind(this), this._loadColorWheel() } }, { key: "$onDestroy", value: function() { this._removeEvents() } }, {
                key: "_luminanceUpdate",
                value: function(e) {
                    null !== e && (this.luminanceValue = e), this._updatePixelsByLuminanceValue();
                    var t = chroma.hex(this.inputColor.hex).hsv();
                    t[0] = t[0] || 0, this.inputColor = { hex: chroma.hsv(t[0], t[1], this.luminanceValue).hex() }
                }
            }, { key: "_loadColorWheel", value: function() { this.selector.active = !1, this._removeEvents(), this._initEvents(), this._initCanvas(), this._drawCanvas(), this.canvas.loaded = !0 } }, { key: "_initCanvas", value: function() { this.canvas.ctx = this.canvas.el.getContext("2d"), this.canvas.el.height = this.canvas.sizePx, this.canvas.el.width = this.canvas.sizePx, this.canvas.store = this.canvas.ctx.getImageData(0, 0, this.canvas.sizePx, this.canvas.sizePx), this._calculateCanvasSize(this.canvas.sizePx) } }, {
                key: "_calculateCanvasSize",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    e || (e = this.canvas.el.getBoundingClientRect().width), this.canvas.centerX = e / 2, this.canvas.centerY = e / 2, this.canvas.radius = Math.min(this.canvas.centerX, this.canvas.centerY)
                }
            }, {
                key: "_drawCanvas",
                value: function() {
                    var e = this,
                        t = this.canvas,
                        r = (t.ctx, t.el),
                        o = t.radius,
                        i = (t.store, 2 * o),
                        n = function(t, o, i, n, c) { var a = 4 * (t + o * r.width); return e.canvas.store.data[a + 0] = i, e.canvas.store.data[a + 1] = n, e.canvas.store.data[a + 2] = c, e.canvas.store.data[a + 3] = 255, { rgb: [i, n, c], rgbDataPos: { r: a, g: a + 1, b: a + 2 } } };
                    this.canvas.allPixels = [];
                    for (var c = 0; i > c; c++)
                        for (var a = 0; i > a; a++) {
                            var l = this._getColorSpaceCoordinates(c, a);
                            if (!l.outRange) {
                                var s = chroma.hsv(l.h, l.s, this.luminanceValue),
                                    m = s.rgb(),
                                    d = n(c, a, m[0], m[1], m[2]);
                                this.canvas.allPixels.push({ hsv: chroma.rgb(d.rgb).hsv(), rgbDataPos: d.rgbDataPos })
                            }
                        }
                    this._updateCanvas()
                }
            }, {
                key: "_updateCanvas",
                value: function() {
                    var e = this.canvas,
                        t = e.ctx,
                        r = e.store;
                    t.putImageData(r, 0, 0), this._softenEdges(), this._calculateCanvasSize()
                }
            }, {
                key: "_softenEdges",
                value: function() {
                    var e = this.canvas.ctx;
                    e.strokeStyle = "#fff", e.lineWidth = 2, e.beginPath(), e.arc(this.canvas.sizePx / 2, this.canvas.sizePx / 2, this.canvas.sizePx / 2, 0, 2 * Math.PI), e.stroke()
                }
            }, { key: "_initEvents", value: function() { this.canvas.el.addEventListener("mousedown", this._mouseDownHandler), this.selector.el.addEventListener("mousedown", this._mouseDownHandler), document.body.addEventListener("mousemove", this._mouseMoveHandler), document.body.addEventListener("mouseup", this._mouseUpHandler), window.addEventListener("resize", this._resizeHandler) } }, { key: "_removeEvents", value: function() { this.canvas.el.removeEventListener("mousedown", this._mouseDownHandler), this.selector.el.removeEventListener("mousedown", this._mouseDownHandler), document.body.removeEventListener("mousemove", this._mouseMoveHandler), document.body.removeEventListener("mouseup", this._mouseUpHandler), window.removeEventListener("resize", this._resizeHandler) } }, { key: "_handleMouseDown", value: function(e) { e.preventDefault(), this.canvas.mouseDown = !0, this._setSelectorFromMousePosition(e) } }, { key: "_handleMouseMove", value: function(e) { this.canvas.mouseDown && (e.preventDefault(), this._setSelectorFromMousePosition(e)) } }, { key: "_handleMouseUp", value: function(e) { e.preventDefault(), this.canvas.mouseDown && (this._setSelectorFromMousePosition(e), this._userStateService.trackEvent("colorWheel", "click")), this.canvas.mouseDown = !1 } }, {
                key: "_handleResize",
                value: function(e) {
                    if (this._calculateCanvasSize(), this.inputColor) {
                        var t = this._getColorSpaceCoordinatesFromHex(this.inputColor.hex);
                        this._setSelectorOnPixelPosition(t.x, t.y), this.luminanceModel.onColorUpdate(this.inputColor)
                    }
                }
            }, { key: "_changeLuminanceValue", value: function(e) { this._luminanceUpdate(e), this.luminanceModel.onColorUpdate(this.inputColor, !0) } }, {
                key: "_updatePixelsByLuminanceValue",
                value: function() {
                    var e = this,
                        t = this.canvas,
                        r = (t.ctx, t.store);
                    _.each(this.canvas.allPixels, function(t) {
                        var o = t.hsv[2] * e.luminanceValue,
                            i = c.Utilities.hsv2Rgb(t.hsv[0], t.hsv[1], o);
                        r.data[t.rgbDataPos.r] = i.r, r.data[t.rgbDataPos.g] = i.g, r.data[t.rgbDataPos.b] = i.b
                    }), this._updateCanvas()
                }
            }, {
                key: "_getColorSpaceCoordinates",
                value: function(e, t) {
                    var r = this.canvas,
                        o = r.centerX,
                        i = r.centerY,
                        n = r.radius,
                        a = e - o,
                        l = t - i,
                        s = Math.atan2(l, a),
                        m = Math.round((180 * s / Math.PI + 360) % 360),
                        d = c.Utilities.distanceBetweenTwoPoints({ x: e, y: t }, { x: o, y: i }),
                        h = { x: e, y: t, h: m, s: d / n, v: 1, outRange: !1 };
                    return d > n && (h.x = Math.floor(Math.cos(s) * n + o), h.y = Math.floor(Math.sin(s) * n + i), h.outRange = !0), h
                }
            }, {
                key: "_getColorSpaceCoordinatesFromHex",
                value: function(e) {
                    var t = this.canvas,
                        r = t.centerX,
                        o = t.centerY,
                        i = t.radius,
                        n = chroma.hex(e).hsv();
                    n[0] = n[0] || 0;
                    var c = Math.PI * n[0] / 180;
                    return { x: Math.floor(Math.cos(c) * (i * n[1]) + r), y: Math.floor(Math.sin(c) * (i * n[1]) + o), h: n[0], s: n[1], v: n[2], outRange: !1 }
                }
            }, {
                key: "_setSelectorFromMousePosition",
                value: function(e) {
                    var t = this.canvas.el.getBoundingClientRect(),
                        r = Math.floor(e.clientX - t.left),
                        o = Math.floor(e.clientY - t.top),
                        i = this._getColorSpaceCoordinates(r, o);
                    this._setSelectorOnPixelPosition(i.x, i.y), this.inputColor = { hex: chroma.hsv(i.h, i.s, this.luminanceValue).hex(), committed: "mouseup" === e.type }, this.luminanceModel.onColorUpdate(this.inputColor), this._$scope.$apply()
                }
            }, {
                key: "_setSelectorOnPixelPosition",
                value: function(e, t) {
                    var r = this._rawElement.getBoundingClientRect(),
                        o = this.canvas.el.getBoundingClientRect(),
                        i = this.selector.el.getBoundingClientRect();
                    e -= i.width / 2, t -= i.height, e = Number(e) - r.left, t = Number(t) - r.top;
                    var n = o.left + e + this._rawElement.scrollLeft,
                        c = o.top + t + this._rawElement.scrollTop;
                    this.selector.active = !0, this.selector.el.style.transform = "translate3d(" + n + "px, " + c + "px, 0)"
                }
            }, { key: "_resetSelector", value: function() { this.selector.active = !1 } }, {
                key: "_setColorWheelFromInputColor",
                value: function() {
                    this.luminanceModel.onColorUpdate(this.inputColor, !0);
                    var e = this._getColorSpaceCoordinatesFromHex(this.inputColor.hex);
                    this._setSelectorOnPixelPosition(e.x, e.y), this._changeLuminanceValue(e.v)
                }
            }, { key: "_formatInputHex", value: function(e) { return e ? c.Utilities.formatHex(e.replace(/[^#0-9A-Fa-f]/g, "")) : null } }, {
                key: "setColorFromInput",
                value: function() {
                    var e = this.inputColor.hex = this._formatInputHex(this.inputColor.hex);
                    c.Utilities.hexValid(e) ? (c.Utilities.stopErrorFormMessage(this._$scope.colorWheelForm.hexInput), this._$scope.$emit(n.COLOR_WHEEL_CHANGED_EVENT, { hex: e })) : c.Utilities.showErrorFormMessage(this._$scope.colorWheelForm.hexInput)
                }
            }, {
                key: "setColorFromInputBlur",
                value: function() {
                    var e = this.inputColor.hex = this._formatInputHex(this.inputColor.hex);
                    c.Utilities.hexValid(e) && (4 === e.length && (this._userStateService.trackEvent("colorWheelInput", "set"), e = this.inputColor.hex = e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3], this._$scope.$emit(n.COLOR_WHEEL_CHANGED_EVENT, { hex: e, committed: !0 })), this._setColorWheelFromInputColor())
                }
            }, { key: "hex", get: function() { return this.inputColor }, set: function(e) { return e ? void(this.inputColor && this.inputColor.hex.toUpperCase() === e.toUpperCase() || (this.inputColor = { hex: e }, this.canvas.loaded && this._setColorWheelFromInputColor())) : void this._resetSelector() } }]), e
        }();
    t.ColorWheelController = l
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = (r(5), function() {
            function e() {
                "ngInject";
                o(this, e)
            }
            return i(e, [{ key: "onColorUpdate", value: function(e) {} }, { key: "onLuminanceUpdate", value: function(e) {} }]), e
        }());
    t.LuminanceSliderModel = n
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/color-wheel/tmpl/color-wheel-selector.html", bindToController: !0, controllerAs: "$colorWheelSelector", controller: i.ColorWheelSelectorController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorWheelSelectorDirective = o;
    var i = r(23)
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function i(e, t) {
        "ngInject";
        r(this, i), this._$scope = e
    };
    o.$inject = ["$scope", "$rootScope"], t.ColorWheelSelectorController = o
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: { model: "<" }, transclude: !0, templateUrl: "app/components/color-wheel/tmpl/color-luminance-slider.html", bindToController: !0, controllerAs: "$colorLuminance", controller: i.ColorLuminanceSliderController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorLuminanceSliderDirective = o;
    var i = r(25)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = r(5),
        a = function() {
            function e(t, r, i, n) {
                "ngInject";
                var c = this;
                o(this, e), this._$scope = t, this._$element = r, this._rawElement = r[0], this._userStateService = i, this._$timeout = n, this._baseColor = {}, this.luminancePosition = 1, this._domEls = { bar: this._rawElement.querySelector(".color-luminance-slider__bar"), thumb: this._rawElement.querySelector(".color-luminance-slider__thumb") }, this._mouseDownHandler = function(e) { return c._handleMouseDown(e) }, this._mouseMoveHandler = function(e) { return c._handleMouseMove(e) }, this._mouseUpHandler = function(e) { return c._handleMouseUp(e) }
            }
            return e.$inject = ["$scope", "$element", "userStateService", "$timeout"], i(e, [{ key: "$onInit", value: function() { this.model.onColorUpdate = this._updateHandler.bind(this), this._initEvents(), this._updateThumb() } }, { key: "$onDestroy", value: function() { this._rawElement.removeEventListener("mousedown", this._mouseDownHandler), document.body.removeEventListener("mousemove", this._mouseMoveHandler), document.body.removeEventListener("mouseup", this._mouseUpHandler) } }, { key: "_initEvents", value: function() { this._rawElement.addEventListener("mousedown", this._mouseDownHandler), document.body.addEventListener("mousemove", this._mouseMoveHandler), document.body.addEventListener("mouseup", this._mouseUpHandler) } }, {
                key: "_updateHandler",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    if (e) {
                        var r = e.committed,
                            o = e.hex,
                            i = chroma.hex(o).hsv();
                        i[0] = i[0] || 0, this._baseColor = { hex: chroma.hsv(i[0], i[1], 1).hex(), committed: r }, this._updateBar(i[2]), t || this._emitNewColor()
                    }
                }
            }, { key: "_handleMouseDown", value: function(e) { this._isDisabled() || (this._mouseDown = !0, this._setLuminanceFromMouseEvent(e)) } }, { key: "_handleMouseMove", value: function(e) { this._isDisabled() || this._mouseDown && this._setLuminanceFromMouseEvent(e) } }, { key: "_handleMouseUp", value: function(e) { this._isDisabled() || this._mouseDown && (this._mouseDown = !1, this._setLuminanceFromMouseEvent(e), this._userStateService.trackEvent("colorLuminance", "click")) } }, { key: "_isDisabled", value: function() { return "disabled" === this._rawElement.getAttribute("disabled") } }, {
                key: "_setLuminanceFromMouseEvent",
                value: function(e) {
                    var t = this._domEls.bar.getBoundingClientRect();
                    this._baseColor.committed = "mouseup" === e.type, this._setLuminancePosition(e.clientY - t.top), this.model.onLuminanceUpdate(this.luminancePosition), this._emitNewColor()
                }
            }, {
                key: "_setLuminancePosition",
                value: function(e) {
                    var t = this._domEls.bar.getBoundingClientRect(),
                        r = this._domEls.thumb.getBoundingClientRect(),
                        o = e - r.height / 2,
                        i = { low: -1 * (r.height / 2), high: t.height - r.height + r.height / 2 },
                        n = o < i.low ? i.low : o > i.high ? i.high : o;
                    this._domEls.thumb.style.transform = "translate3d(0, " + Math.round(n) + "px, 0)", this.luminancePosition = Number((1 - parseFloat((n + r.height / 2) / t.height)).toFixed(2))
                }
            }, {
                key: "_emitNewColor",
                value: function() {
                    var e = this._baseColor,
                        t = e.hex,
                        r = e.committed,
                        o = c.Utilities.darkenHex(t, 1 - this.luminancePosition);
                    this._$scope.$emit(n.COLOR_WHEEL_CHANGED_EVENT, { committed: r, hex: o })
                }
            }, {
                key: "_updateThumb",
                value: function() {
                    var e = this._domEls.bar.getBoundingClientRect(),
                        t = this._domEls.thumb.getBoundingClientRect(),
                        r = this.luminancePosition ? e.height * this.luminancePosition : 0;
                    this._domEls.thumb.style.transform = "translate3d(0, " + Math.round(r - t.height / 2) + "px, 0)"
                }
            }, {
                key: "_updateBar",
                value: function(e) {
                    this._domEls.bar.innerHTML = "";
                    for (var t = this._baseColor.hex || "#fff", r = c.Utilities.hex2Rgb(t), o = 0; 1 >= o; o += .01) {
                        var i = document.createElement("div"),
                            n = c.Utilities.darkenRgb(r, o);
                        i.style.backgroundColor = "rgb(" + n.r + ", " + n.g + ", " + n.b + ")", i.setAttribute("hex", c.Utilities.rgba2hex(n)), this._domEls.bar.appendChild(i)
                    }
                    if (e >= 0) {
                        var a = this._domEls.bar.getBoundingClientRect(),
                            l = 1 - e;
                        this._setLuminancePosition(l * a.height)
                    }
                }
            }]), e
        }();
    t.ColorLuminanceSliderController = a
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/material-palette/tmpl/material-palette.html", bindToController: !0, controllerAs: "$materialPalette", controller: i.MaterialPaletteController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MaterialPaletteDirective = o;
    var i = r(27)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = function() {
            function e(t, r, i) {
                "ngInject";
                o(this, e), this._$scope = t, this._$rootScope = r, this._rawElement = i[0], this._model = this._$scope.main.model
            }
            return e.$inject = ["$scope", "$rootScope", "$element"], i(e, [{ key: "$onInit", value: function() { this._initPalette(), this.activeColor = this._$scope.main.activeColor, this._$scope.$on(n.ACTIVE_COLOR_SYSTEM_CHANGED_EVENT, this._activeColorSystemChanged.bind(this)) } }, {
                key: "setColor",
                value: function(e, t) {
                    (32 === e.keyCode || 13 === e.keyCode) && e.preventDefault(), this.activeColor || (this.activeColor = {}), this.activeColor.hex = this.activeColor.hex !== t.hex ? t.hex : null, this._$rootScope.$broadcast(n.COLOR_CHANGED_EVENT, this.activeColor)
                }
            }, { key: "_activeColorSystemChanged", value: function(e, t) { this.activeColor = this._$scope.main.activeColor } }, { key: "_initPalette", value: function() { this.palettes = this._model.palettes, this.shades = this._model.shades } }]), e
        }();
    t.MaterialPaletteController = c
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/color-schemes/tmpl/color-schemes.html", bindToController: !0, controllerAs: "$cSchemes", controller: i.ColorSchemesController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorSchemesDirective = o;
    var i = r(29)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = r(30),
        a = function() {
            function e(t) {
                "ngInject";
                o(this, e), this._$rootScope = t
            }
            return e.$inject = ["$rootScope"], i(e, [{
                key: "$onInit",
                value: function() {
                    var e = [].slice.call(document.querySelectorAll(".scheme-container")),
                        t = [];
                    _.each(e, function(e) { t.push(new c.ColorRipple(e)) })
                }
            }, { key: "setActiveColorSystem", value: function(e) { this._$rootScope.$broadcast(n.ACTIVE_COLOR_SYSTEM_CHANGED_EVENT, e) } }]), e
        }();
    t.ColorSchemesController = a
}, function(e, t, r) {
    "use strict";

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t["default"] = e, t
    }

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        c = r(31),
        a = o(c);
    r(32);
    var l = function() {
        function e(t, r, o) {
            "ngInject";
            i(this, e), this.rootSurfaceEl = t.parentNode, this.surfaceEl = t, this.surfaceGlobals = r || {}, this._colorUI = o, this.elements = {}, this._init()
        }
        return e.$inject = ["surfaceEl", "surfaceGlobals", "colorUI"], n(e, [{
            key: "_raiseShadow",
            value: function() {
                var e = a.RippleClasses.RAISE_SURFACE_CLASS;
                this.surfaceEl.style.transitionTimingFunction = a.Timing_80_40, this.surfaceEl.parentNode.classList.add(e)
            }
        }, {
            key: "_lowerShadow",
            value: function() {
                var e = this,
                    t = a.RippleClasses.RAISE_SURFACE_CLASS;
                this.surfaceElTimeoutId && clearTimeout(this.surfaceElTimeoutId);
                var r = Math.ceil(a.RippleDelay + this.globals.rippleDuration / 2);
                this.surfaceElTimeoutId = setTimeout(function() { e.surfaceEl.style.transitionTimingFunction = a.Timing_40_40, e.surfaceEl.parentNode.classList.remove(t) }, r)
            }
        }, { key: "_activateSurfaceEl", value: function() { this._raiseShadow() } }, {
            key: "_init",
            value: function() {
                var e = a.RippleClasses,
                    t = e.BASE_CLASS,
                    r = e.RIPPLE_COMPONENT_CLASS;
                this._updateGlobals(), this.rippleElContainer = document.createElement("div"), this.rippleElContainer.classList.add(t), this.rippleEl = document.createElement("div"), this.rippleEl.classList.add(r), this.rippleElContainer.appendChild(this.rippleEl), this.surfaceEl.appendChild(this.rippleElContainer), this._initEvents()
            }
        }, {
            key: "_initEvents",
            value: function() {
                var e = this,
                    t = a.RippleClasses.INACTIVE_CLASS;
                this.rippleElContainer.addEventListener("focus", function(r) { e.rippleElContainer.classList.remove(t) }), this.rippleElContainer.addEventListener("blur", function(r) { e.rippleElContainer.classList.add(t), e._clearRipples() }), this.rippleElContainer.addEventListener("mouseleave", function() { e.rippleElContainer.classList.add(t) }), this.rippleElContainer.addEventListener("mouseover", function() { e.rippleElContainer.classList.remove(t) }), this.surfaceEl.addEventListener("mousedown", function(t) { e._fireRipple(t) }), this.surfaceEl.addEventListener("mouseup", function() { e._clearRipples() })
            }
        }, { key: "_addElement", value: function(e) { this.elements[e.id] || (this.elements[e.id] = e) } }, { key: "_destroyElement", value: function(e) { this.elements[e.id] && (this.elements[e.id].domEls.inkContainer.outerHTML = "", this.elements[e.id] = !1) } }, {
            key: "_fireRipple",
            value: function(e) {
                var t = this.surfaceEl.getBoundingClientRect();
                this._draw(e.pageX - t.left - window.scrollX, e.pageY - t.top - window.scrollY)
            }
        }, {
            key: "_elementMetrics",
            value: function(e, t) {
                var r = {},
                    o = this.surfaceEl.getBoundingClientRect(),
                    i = o.width,
                    n = o.height,
                    c = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)) + a.RippleDestinationSizeOffset;
                return r.size = Math.max(i, n) * this.globals.rippleOriginSize / 100, r.xCentered = i / 2 - r.size / 2, r.yCentered = n / 2 - r.size / 2, r.x = e && t ? e - r.size / 2 : r.xCentered, r.y = e && t ? t - r.size / 2 : r.yCentered, r.scale = c / r.size, r
            }
        }, {
            key: "_createDomElements",
            value: function() {
                var e = a.RippleClasses,
                    t = e.INK_CLASS,
                    r = e.INK_COMPONENT_CLASS,
                    o = e.INK_RESPONSE_CLASS,
                    i = { inkContainer: document.createElement("div"), inkEl: document.createElement("div"), inkResponseEl: document.createElement("div") };
                return i.inkContainer.classList.add(t), i.inkEl.classList.add(r), i.inkResponseEl.classList.add(o), this.globals.touchResponse || (i.inkResponseEl.style.display = "none"), i
            }
        }, {
            key: "_attachDomElements",
            value: function(e) {
                var t = this.surfaceEl.style,
                    r = t.backgroundColor,
                    o = (t.color, window.getComputedStyle(this.surfaceEl).color),
                    i = a.RippleColor;
                o && (i = this._getRgbArrayFromString(o)), i = i.concat(this.globals.rippleOpacity);
                var n = this._getRgbArrayFromString(r),
                    c = this._getLFromRgbColor({ r: n[0], g: n[1], b: n[2] });
                n && (i = c < a.RippleOpacityLuminanceThreshold ? a.RippleColorReverted : i), e.domEls.inkEl.style.backgroundColor = "rgba(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ")", e.domEls.inkResponseEl.style.width = e.domEls.inkResponseEl.style.height = e.domEls.inkEl.style.width = e.domEls.inkEl.style.height = e.metrics.size + "px", e.domEls.inkResponseEl.style.webkitTransform = e.domEls.inkEl.style.webkitTransform = "translate3d(" + e.metrics.x + "px, " + e.metrics.y + "px, 0)", this.rippleEl.appendChild(e.domEls.inkContainer), e.domEls.inkContainer.appendChild(e.domEls.inkResponseEl), e.domEls.inkContainer.appendChild(e.domEls.inkEl)
            }
        }, { key: "_clearRipples", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0]; for (var t in this.elements) this._fadeOutAndDestroy(this.elements[t], e) } }, {
            key: "_fadeOutAndDestroy",
            value: function(e) {
                var t = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                if (!this.elements[e.id]) return !1;
                var o = r ? 0 : Math.ceil(a.RippleDelay + this.globals.rippleDuration / 2);
                setTimeout(function() { e.domEls.inkContainer.style.transitionDuration = t.globals.threeQDuration + "ms", e.domEls.inkContainer.style.opacity = 0 }, o), setTimeout(function() { t._destroyElement(e) }, o + this.globals.threeQDuration)
            }
        }, {
            key: "_fadeOut50",
            value: function(e) {
                var t = this,
                    r = Math.ceil(a.RippleDelay + this.globals.rippleDuration / 2);
                setTimeout(function() { e.domEls.inkContainer.style.transitionDuration = t.globals.threeQDuration + "ms", e.domEls.inkContainer.style.opacity = .5 }, r)
            }
        }, {
            key: "_processElements",
            value: function(e) {
                var t = this;
                this._activateSurfaceEl(), this._addElement(e), this._attachDomElements(e), this._showScaleAndTranslate(e), this._fadeOut50(e), this.surfaceEl.parentNode.addEventListener("mouseup", function() { t._fadeOutAndDestroy(e), t._lowerShadow() })
            }
        }, {
            key: "_showScaleAndTranslate",
            value: function(e) {
                var t = "scale(" + e.metrics.scale + ")",
                    r = "translate3d(" + e.metrics.xCentered + "px, " + e.metrics.yCentered + "px, 0)",
                    o = this.globals.rippleDuration;
                setTimeout(function() { e.domEls.inkEl.style.transitionProperty = e.domEls.inkResponseEl.style.transitionProperty = a.RippleTransitionProperty, e.domEls.inkEl.style.transitionTimingFunction = e.domEls.inkResponseEl.style.transitionTimingFunction = a.Timing_80_40, e.domEls.inkEl.style.transitionDuration = e.domEls.inkResponseEl.style.transitionDuration = o + "ms", e.domEls.inkContainer.style.transitionProperty = "opacity", e.domEls.inkContainer.style.transitionTimingFunction = "linear", e.domEls.inkContainer.style.transitionDuration = a.RippleFadeInDuration + "ms", e.domEls.inkContainer.style.opacity = 1, e.domEls.inkResponseEl.style.webkitTransform = r, e.domEls.inkEl.style.webkitTransform = r + " " + t }, a.RippleDelay)
            }
        }, { key: "_updateGlobals", value: function() { this.globals = {}, this.globals.tapTimeoutMax = this.surfaceGlobals.tapTimeoutMax || a.TapTimeoutMax, this.globals.touchResponse = this.surfaceGlobals.touchResponse || a.TouchResponse, this.globals.rippleOriginSize = this.surfaceGlobals.rippleOriginSize || a.RippleOriginSize, this.globals.rippleOpacity = this.surfaceGlobals.rippleOpacity || a.RippleOpacity, this.globals.rippleDuration = this.surfaceGlobals.rippleDuration || a.RippleDuration, this.globals.threeQDuration = this.globals.rippleDuration / a.RippleThreeQDuration } }, {
            key: "_draw",
            value: function(e, t) {
                this._updateGlobals();
                var r = { id: Math.ceil(999999 * Math.random()) };
                r.domEls = this._createDomElements(), r.metrics = this._elementMetrics(e, t), this._processElements(r)
            }
        }, { key: "_getRgbArrayFromString", value: function(e) { if (!e) return !1; var t = e.replace(/[^\d,]/g, "").split(","); return t.splice(3), t } }, { key: "_getLFromRgbValue", value: function(e) { var t = e / 255; return .03928 > t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) } }, { key: "_getLFromRgbColor", value: function(e) { var t = {}; return t.r = this._getLFromRgbValue(e.r), t.g = this._getLFromRgbValue(e.g), t.b = this._getLFromRgbValue(e.b), .2126 * t.r + .7152 * t.g + .0722 * t.b } }, {
            key: "_hex2Rgb",
            value: function(e) {
                if (!e) return null;
                var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                e = e.replace(t, function(e, t, r, o) { return t + t + r + r + o + o });
                var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null
            }
        }]), e
    }();
    t.ColorRipple = l
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = 250;
    t.RippleScrollingTimeout = r;
    var o = 60;
    t.RippleOriginSize = o;
    var i = 83;
    t.RippleFadeInDuration = i;
    var n = 0;
    t.RippleDelay = n;
    var c = 300;
    t.RippleDuration = c;
    var a = 1.332;
    t.RippleThreeQDuration = a;
    var l = 10;
    t.RippleDestinationSizeOffset = l;
    var s = "transform";
    t.RippleTransitionProperty = s;
    var m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    t.Timing_80_40 = m;
    var d = "cubic-bezier(0.4, 0, 0.6, 1)";
    t.Timing_40_40 = d;
    var h = .06;
    t.RippleOpacity = h;
    var p = !1;
    t.TouchResponse = p;
    var u = 80;
    t.TapTimeoutMax = u;
    var _ = .5;
    t.RippleOpacityLuminanceThreshold = _;
    var v = [97, 97, 97];
    t.RippleColor = v;
    var g = [255, 255, 255, .1];
    t.RippleColorReverted = g;
    var y = "color-ripple";
    t.RippleBaseClass = y;
    var f = { BASE_CLASS: y, RIPPLE_COMPONENT_CLASS: y + "__component", INK_CLASS: y + "__ink", INK_COMPONENT_CLASS: y + "__ink__component", INK_RESPONSE_CLASS: y + "__ink__response", RAISE_SURFACE_CLASS: y + "--state-raise__surface", INACTIVE_CLASS: y + "--state-inactive" };
    t.RippleClasses = f
}, function(e, t) {
    /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing(0.25, 0.1, 0.25, 1.0)
     * spline(x) => returns the easing value | x must be in [0, 1] range
     *
     */
    "use strict";
    ! function(e) { window.BezierEasing = e() }(function() {
        function e(e, l, s, m) {
            function d(e, t) { return 1 - 3 * t + 3 * e }

            function h(e, t) { return 3 * t - 6 * e }

            function p(e) { return 3 * e }

            function u(e, t, r) { return ((d(t, r) * e + h(t, r)) * e + p(t)) * e }

            function _(e, t, r) { return 3 * d(t, r) * e * e + 2 * h(t, r) * e + p(t) }

            function v(r, o) {
                for (var i = 0; t > i; ++i) {
                    var n = _(o, e, s);
                    if (0 === n) return o;
                    var c = u(o, e, s) - r;
                    o -= c / n
                }
                return o
            }

            function g() { for (var t = 0; n > t; ++t) C[t] = u(t * c, e, s) }

            function y(t, r, n) {
                var c, a, l = 0;
                do a = r + (n - r) / 2, c = u(a, e, s) - t, c > 0 ? n = a : r = a; while (Math.abs(c) > o && ++l < i);
                return a
            }

            function f(t) {
                for (var o = 0, i = 1, a = n - 1; i != a && C[i] <= t; ++i) o += c;
                --i;
                var l = (t - C[i]) / (C[i + 1] - C[i]),
                    m = o + l * c,
                    d = _(m, e, s);
                return d >= r ? v(t, m) : 0 == d ? m : y(t, o, o + c)
            }

            function b() { k = !0, (e != l || s != m) && g() }
            if (4 !== arguments.length) throw new Error("BezierEasing requires 4 arguments.");
            for (var x = 0; 4 > x; ++x)
                if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) throw new Error("BezierEasing arguments should be integers.");
            if (0 > e || e > 1 || 0 > s || s > 1) throw new Error("BezierEasing x values must be in [0, 1] range.");
            var C = a ? new Float32Array(n) : new Array(n),
                k = !1,
                w = function(t) { return k || b(), e === l && s === m ? t : 0 === t ? 0 : 1 === t ? 1 : u(f(t), l, m) };
            w.getControlPoints = function() { return [{ x: e, y: l }, { x: s, y: m }] };
            var F = "BezierEasing(" + [e, l, s, m] + ")";
            return w.toString = function() { return F }, w
        }
        var t = 4,
            r = .001,
            o = 1e-7,
            i = 10,
            n = 11,
            c = 1 / (n - 1),
            a = "function" == typeof Float32Array;
        return e.css = { ease: e(.25, .1, .25, 1), linear: e(0, 0, 1, 1), "ease-in": e(.42, 0, 1, 1), "ease-out": e(0, 0, .58, 1), "ease-in-out": e(.42, 0, .58, 1) }, e
    })
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/accessibility/tmpl/accessibility.html", bindToController: !0, controllerAs: "$acc", controller: i.AccessibilityController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.AccessibilityDirective = o;
    var i = r(34)
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        i = function() {
            function e(t, o, i) {
                "ngInject";
                r(this, e), this._$rootScope = t, this._$window = o, this._userStateService = i
            }
            return e.$inject = ["$rootScope", "$window", "userStateService"], o(e, [{ key: "toggleAccessibilityInfo", value: function() { this.isAccessibilityInfoActive = !this.isAccessibilityInfoActive, this._userStateService.trackEvent("accessibilityInfoOpen", "click") } }, { key: "openAccessibilityMoreInfo", value: function() { this._$window.open("https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast", "_blank"), this.isAccessibilityInfoActive = !1, this._userStateService.trackEvent("accessibilityInfoLearnLink", "click") } }]), e
        }();
    t.AccessibilityController = i
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: { color: "<", colorName: "<", textColor: "<", originalColor: "<", main: "<" }, transclude: !0, templateUrl: "app/components/accessibility-item/tmpl/accessibility-item.html", bindToController: !0, controllerAs: "$accItem", controller: i.AccessibilityItemController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.AccessibilityItemDirective = o;
    var i = r(36)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(5),
        c = function() {
            function e(t) {
                "ngInject";
                o(this, e), this._$rootScope = t
            }
            return e.$inject = ["$rootScope"], i(e, [{
                key: "getTextAlphas",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "white" : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? "large" : arguments[1],
                        r = this.color.accessibility.criterias[e][t];
                    return { minAlpha: Math.round(100 * r.minAlpha), recAlpha: Math.round(100 * r.recAlpha) }
                }
            }, { key: "getCustomTextAlphas", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? "large" : arguments[0]; return n.Utilities.getMinAndRecAlphasFromBgAndTextColors(this.color.hex, this.textColor.hex, e) } }, {
                key: "getTextColorInfo",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "white" : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? "large" : arguments[1],
                        r = this.getTextAlphas(e, t);
                    return "min " + r.minAlpha + "% opacity"
                }
            }, {
                key: "getCustomTextColorInfo",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "large" : arguments[0],
                        t = this.getCustomTextAlphas(e);
                    return t.minAlpha = t.minAlpha ? Math.round(100 * t.minAlpha) : null, null === t.minAlpha ? null : "min " + t.minAlpha + "% opacity"
                }
            }, { key: "getTextColorRgba", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? "large" : arguments[0]; return n.Utilities.getRgbaFromHexAndAlpha(this.textColor.hex, this.getCustomTextAlphas(e).recAlpha) } }]), e
        }();
    t.AccessibilityItemController = c
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/collection-drawer/tmpl/collection-drawer.html", bindToController: !0, controllerAs: "$collectionDrawer", controller: i.CollectionDrawerController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.CollectionDrawerDirective = o;
    var i = r(38)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = function() {
            function e(t, r, i, n, c) {
                "ngInject";
                o(this, e), this._$scope = t, this._$rootScope = r, this._$timeout = i, this._$animate = n, this._$mdUtil = c
            }
            return e.$inject = ["$scope", "$rootScope", "$timeout", "$animate", "$mdUtil"], i(e, [{ key: "$onInit", value: function() { this._backdrop = this._$mdUtil.createBackdrop(this._$scope, "md-opaque collection-drawer-backdrop"), this._$animate.leave(this._backdrop) } }, { key: "preventDefault", value: function(e) { e.stopPropagation() } }, {
                key: "selectColorsFromScheme",
                value: function(e) {
                    var t = this;
                    this._$rootScope.$broadcast(n.ACTIVE_SCHEME_CHANGED_EVENT, e), this._$timeout(function() { return t._$scope.$apply() })
                }
            }, {
                key: "toggleOpen",
                value: function() {
                    var e = this,
                        t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                    this.isOpen = void 0 === t ? !this.isOpen : t;
                    var r = function() { e._$scope.$apply(function() { return e.toggleOpen(!1) }) };
                    this.isOpen ? (this._$animate.enter(this._backdrop, document.body, null), this._backdrop.on("click", r)) : (this._$animate.leave(this._backdrop), this._backdrop.off("click", r))
                }
            }, {
                key: "updateCurrentSchemeName",
                value: function() {
                    var e = this;
                    this._$scope.schemeNameForm.input.$valid && this._$scope.main.activeScheme.name && (this._$rootScope.$broadcast(n.ACTIVE_SCHEME_CHANGED_EVENT, this._$scope.main.activeScheme), this._$timeout(function() { return e._$scope.$apply() }))
                }
            }, { key: "isOpen", get: function() { return this._isOpen }, set: function(e) { this._isOpen = !!e } }]), e
        }();
    t.CollectionDrawerController = c
}, function(e, t, r) {
    "use strict";

    function o(e) { "ngInject"; return { replace: !0, restrict: "E", scope: { isSelected: "<", selectLabel: "<", deselectLabel: "<", isIcon: "<" }, transclude: !0, templateUrl: "app/components/selection-toggle/tmpl/selection-toggle.html", bindToController: !0, controllerAs: "$selectionToggle", controller: i.SelectionToggleController, link: function(t, r, o, n) { n.domDelegate = e.instantiate(i.SelectionToggleDomDelegate, { scope: t, element: r, attrs: o, controller: n }) } } }
    o.$inject = ["$injector"], Object.defineProperty(t, "__esModule", { value: !0 }), t.SelectionToggleDirective = o;
    var i = r(40)
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        i = "is-selected",
        n = function() {
            function e(t, o, i, n) {
                "ngInject";
                r(this, e), this.$scope = t, this.$rootScope = o, this._$timeout = i, this._rawElement = n[0], this.selected_, this.selectLabel, this.deselectLabel, this.isIcon_, this.expectingSelectChange_ = !1, this.domDelegate = null
            }
            return e.$inject = ["$scope", "$rootScope", "$timeout", "$element"], o(e, [{ key: "buttonWasClicked", value: function() { this.expectingSelectChange_ = !0 } }, { key: "label", get: function() { return this.selected_ ? this.deselectLabel : this.selectLabel } }, { key: "isIcon", get: function() { return this.isIcon_ }, set: function(e) { this.isIcon_ = e, this.domDelegate && this.domDelegate.setSelected(this.selected_) } }, { key: "isSelected", get: function() { return this.selected_ }, set: function(e) { this.selected_ = e, this.domDelegate && (this.expectingSelectChange_ ? (this.domDelegate.runSelectAnimation(e), this.expectingSelectChange_ = !1) : this.domDelegate.setSelected(e)) } }]), e
        }();
    t.SelectionToggleController = n;
    var c = function() {
        function e(t, o, i, n, c) {
            "ngInject";
            r(this, e), this.$animate_ = t, this.$q_ = o, this.$timeout_ = i, this.controller_ = n, this.element_ = c[0], this.animationPromise_ = o.resolve(), this.stateChangeQueued_ = !1, this.setSelected(this.controller_.isSelected)
        }
        return e.$inject = ["$animate", "$q", "$timeout", "controller", "element"], o(e, [{
            key: "setSelected",
            value: function(e) {
                var t = this;
                this.$timeout_(function() { t.framesElement_.classList.toggle(i, e) }, 0, !1)
            }
        }, { key: "runSelectAnimation", value: function(e) { var t = this; return this.stateChangeQueued_ ? void(this.stateChangeQueued_ = !1) : (this.stateChangeQueued_ = !0, void(this.animationPromise_ = this.animationPromise_.then(function() { return t.runNextSelectAnimation_(e) }))) } }, { key: "runNextSelectAnimation_", value: function(e) { return this.stateChangeQueued_ ? (this.stateChangeQueued_ = !1, e ? this.$animate_.addClass(this.framesElement_, i) : this.$animate_.removeClass(this.framesElement_, i)) : this.$q_.resolve() } }, { key: "framesElement_", get: function() { return this.element_.querySelector(".selection-toggle__frames") } }]), e
    }();
    t.SelectionToggleDomDelegate = c
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/ui-container/tmpl/ui-container.html", bindToController: !0, controllerAs: "$uiContainer", controller: i.UiContainerController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.UiContainerDirective = o;
    var i = r(42)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(43),
        c = function() {
            function e(t, r, i, c, a, l) {
                "ngInject";
                o(this, e), this._$scope = t, this._$rootScope = r, this._$compile = i, this._$timeout = c, this._rawElement = a[0], this._currentUIEl = this._rawElement.querySelector(".ui-container__section"), this._userStateService = l, this._currentPage = 1, this._currentType = "mobile", this._data = n.UIData
            }
            return e.$inject = ["$scope", "$rootScope", "$compile", "$timeout", "$element", "userStateService"], i(e, [{ key: "$onInit", value: function() { this._refreshDOM() } }, { key: "setCurrentPage", value: function(e) { this.currentPage = e, this._userStateService.trackEvent("userInterfaces", "click") } }, {
                key: "_refreshDOM",
                value: function() {
                    var e = "ct-ui-mobile",
                        t = angular.element("<" + e + ' ui-id="' + this.currentUI.id + '"></' + e + ">")[0];
                    this._currentUIEl.innerHTML = "", this._currentUIEl.appendChild(t), this._$compile(t)(this._$scope)
                }
            }, { key: "currentTotalPages", get: function() { return this.currentDataType.length } }, { key: "currentDataType", get: function() { return this._data[this.currentType] } }, { key: "currentUI", get: function() { return this.currentDataType[this.currentPage - 1] } }, { key: "currentPage", get: function() { return this._currentPage }, set: function(e) { this._currentPage = e, this._refreshDOM() } }, { key: "currentType", get: function() { return this._currentType }, set: function(e) { this._currentType = e } }]), e
        }();
    t.UiContainerController = c
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = { mobile: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }], desktop: [] };
    t.UIData = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: function(e, t) { return "app/components/ui-mobile/tmpl/ui-mobile-" + t.uiId + ".html" } } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.UiMobileDirective = r
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: { height: "<", width: "<" }, transclude: !0, templateUrl: "app/components/codepen-demos/material-image/tmpl/material-image.html", bindToController: !0, controllerAs: "$materialImage", controller: i.MaterialImageController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MaterialImageDirective = o;
    var i = r(46)
}, function(e, t) {
    "use strict";

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function i(e) {
        "ngInject";
        r(this, i), this._$rootScope = e
    };
    o.$inject = ["$rootScope"], t.MaterialImageController = o
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "libs/codepen-demos/mdc-components/mdc-components.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcComponentsDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-buttons/tmpl/mdc-buttons.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcButtonsDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-switches-sliders/tmpl/mdc-switches-sliders.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcSwitchesSlidersDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-selection/tmpl/mdc-selection.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcSelectionDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-cards/tmpl/mdc-cards.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcCardsDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-menu/tmpl/mdc-menu.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcMenuDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-textfield/tmpl/mdc-textfield.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcTextfieldDirective = r
}, function(e, t) {
    "use strict";

    function r() { "ngInject"; return { replace: !0, restrict: "E", scope: !0, transclude: !0, templateUrl: "app/components/codepen-demos/mdc-toolbar/tmpl/mdc-toolbar.html", bindToController: !0 } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MdcToolbarDirective = r
}, function(e, t, r) {
    "use strict";

    function o() { "ngInject"; return { replace: !0, restrict: "E", scope: !1, transclude: !0, templateUrl: "app/components/material-io-nav/tmpl/material-io-nav.html", bindToController: !0, controllerAs: "$materialIoNav", controller: i.MaterialIoNavController } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MaterialIoNavDirective = o;
    var i = r(56)
}, function(e, t, r) {
    "use strict";

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) { return r && e(t.prototype, r), o && e(t, o), t }
        }(),
        n = r(7),
        c = function() {
            function e(t, r) {
                "ngInject";
                o(this, e), this._$scope = t, this._userStateService = r
            }
            return e.$inject = ["$scope", "userStateService"], i(e, [{ key: "clickedOnMaterialIoLink", value: function(e) { e.stopPropagation(), this._userStateService.trackEvent("materialIoLink", "click") } }, { key: "hide", value: function(e, t) { e.stopPropagation(), this.collapse = !!t, this._$scope.$emit(n.MATERIAL_NAV_COLLAPSED_EVENT, this.collapse) } }]), e
        }();
    t.MaterialIoNavController = c
}]), angular.module("colorTool").run(["$templateCache", function(e) {
    e.put("app/main/tmpl/main.html", '<ct-material-io-nav model="main"></ct-material-io-nav><div class="nav__header"><span flex=""></span><div class="nav__header__main"><md-menu md-position-mode="target-right target" ng-disabled="!main.primaryColor.hex" class="export__menu"><md-button aria-label="Open export options" ng-click="main.openExportsMenu($mdMenu, $event)" ng-disabled="!main.primaryColor.hex">Export</md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="main.exportTo(\'android\')" aria-label="Export to Android"><md-icon class="material-icons">android</md-icon>Android</md-button></md-menu-item><md-menu-item><md-button ng-click="main.exportTo(\'ios\')" aria-label="Export to iOS"><md-icon class="material-icons">ios</md-icon>iOS</md-button></md-menu-item><md-menu-item><md-button ng-click="main.editOnCodepen()" aria-label="Open in Codepen"><md-icon class="material-icons" md-svg-src="assets/images/codepen-logo.svg">codepen</md-icon>CodePen</md-button></md-menu-item></md-menu-content></md-menu><md-button class="md-icon-button copy-to-clipboard" data-clipboard-text="{{ main.getUrl(); }}" ng-click="main.linkUrlToYourClipboard()" ng-disabled="!main.primaryColor.hex" aria-label="Copy link to your clipboard"><md-icon class="material-icons">link</md-icon><md-tooltip>Copy link to your clipboard</md-tooltip></md-button><md-button class="md-icon-button md-icon__material" aria-label="Help link" ng-click="main.goToHelp()"><md-icon class="material-icons" md-svg-src="assets/images/ic_material_24px.svg">material</md-icon><md-tooltip>Material guidance</md-tooltip></md-button></div></div><div class="main-view"><div class="tabs__container tabs__container__main"><md-tabs md-selected="main.viewLeft" md-dynamic-height="false" md-stretch-tabs="false"><md-tab label="User Interfaces" md-on-select="main.changeView(\'viewLeft\', 0)"><md-content class="ui-content-view md-padding"><ct-mdc-components ng-show="false"></ct-mdc-components><ct-ui-container></ct-ui-container></md-content></md-tab><md-tab label="Accessibility" md-on-select="main.changeView(\'viewLeft\', 1)"><md-content class="md-padding"><ct-accessibility></ct-accessibility></md-content></md-tab></md-tabs></div><div class="tabs__container tabs__container__right"><md-tabs md-selected="main.viewRight" md-dynamic-height="false" md-stretch-tabs="false"><md-tab label="Material Palette" md-on-select="main.changeView(\'viewRight\', 0)"><md-content class="ui-content-view md-padding"><ct-material-palette></ct-material-palette></md-content></md-tab><md-tab label="Custom" md-on-select="main.changeView(\'viewRight\', 1)"><md-content class="md-padding"><ct-color-wheel hex="main.activeColor.hex"></ct-color-wheel></md-content></md-tab></md-tabs><div class="tabs__container__color-schemes"><div class="tabs__container__color-schemes__header"><h3>Current Scheme</h3><span flex=""></span><md-button class="scheme__reset__button" ng-if="main.primaryColor.hex" ng-click="main.resetColors()" style="width: 92px">Reset All</md-button></div><ct-color-schemes></ct-color-schemes></div><div class="user_education__toast" ng-class="{ \'active\': main.isEducationToastActive }"><div class="text">Pick a color from the palette (or a custom color) to see how it looks in a UI.</div><div class="actions"><md-button ng-click="main.disableEducationToast()">Got it</md-button></div></div></div><div class="main-view__feedback"><md-button class="md-icon-button" ng-click="main.startFeedbackWidget()"><md-icon class="material-icons">feedback</md-icon></md-button></div></div><div class="mobile-view"><div class="tabs__container tabs__container__main"><md-tabs md-selected="main.viewLeft" md-dynamic-height="false" md-stretch-tabs="false"><md-tab label="User Interfaces" md-on-select="main.changeView(\'viewLeft\', 0)"><md-content class="ui-content-view md-padding"><ct-mdc-components ng-show="false"></ct-mdc-components><ct-ui-container></ct-ui-container></md-content></md-tab><md-tab label="Accessibility" md-on-select="main.changeView(\'viewLeft\', 1)"><md-content class="md-padding"><ct-accessibility></ct-accessibility></md-content></md-tab></md-tabs></div><div class="tabs__container__mobile__palette"><div class="tabs__container__mobile__palette__header"><h3>Material Palette</h3><span flex=""></span><div class="tabs__container__mobile__palette__content"><div class="tabs__container__mobile__palette__swatch" ng-click="main.setActiveColorSystem(\'primary\')" ng-class="{ \'tabs__container__mobile__palette__swatch--state-empty\': !main.primaryColor.hex, \'tabs__container__mobile__palette__swatch--state-active\': main.activeColorSystem === \'primary\' }"><div ng-style="{ \'background-color\': main.primaryColor.hex, \'color\': main.primaryColor.accessibility.preferredNormalColor }"><span ng-style="main.activeColorSystem === \'primary\' && { \'background-color\': main.primaryColor.accessibility.preferredNormalColor, \'color\': main.primaryColor.hex }">P</span></div></div><div class="tabs__container__mobile__palette__swatch" ng-click="main.setActiveColorSystem(\'secondary\')" ng-class="{ \'tabs__container__mobile__palette__swatch--state-empty\': !main.secondaryColor.hex, \'tabs__container__mobile__palette__swatch--state-active\': main.activeColorSystem === \'secondary\' }"><div ng-style="{ \'background-color\': main.secondaryColor.hex, \'color\': main.secondaryColor.accessibility.preferredNormalColor }"><span ng-style="main.activeColorSystem === \'secondary\' && { \'background-color\': main.secondaryColor.accessibility.preferredNormalColor, \'color\': main.secondaryColor.hex }">S</span></div></div></div></div><ct-material-palette></ct-material-palette></div></div>'), e.put("app/components/accessibility/tmpl/accessibility.html", '<div class="accessibility"><div class="accessibility__header"><md-button class="md-icon-button" aria-label="Accessibility information" ng-click="$acc.toggleAccessibilityInfo()"><md-icon class="material-icons">info</md-icon></md-button></div><div class="accessibility__items" ng-class="{ \'colors--state-disabled\': !main.primaryColor, \'colors--state-active\': main.secondaryColor }"><div class="accessibility__items__section"><ct-accessibility-item color="main.primaryColor" text-color="main.primaryTextColor" color-name="\'Primary\'" main="main"></ct-accessibility-item><ct-accessibility-item original-color="main.primaryColor" color="main.primaryColor.range.light" text-color="main.primaryTextColor" color-name="\'P — Light\'" main="main"></ct-accessibility-item><ct-accessibility-item original-color="main.primaryColor" color="main.primaryColor.range.dark" text-color="main.primaryTextColor" color-name="\'P — Dark\'" main="main"></ct-accessibility-item></div><div class="accessibility__items__section"><ct-accessibility-item color="main.secondaryColor" text-color="main.secondaryTextColor" color-name="\'Secondary\'" main="main"></ct-accessibility-item><ct-accessibility-item original-color="main.secondaryColor" color="main.secondaryColor.range.light" text-color="main.secondaryTextColor" color-name="\'S — Light\'" main="main"></ct-accessibility-item><ct-accessibility-item original-color="main.secondaryColor" color="main.secondaryColor.range.dark" text-color="main.secondaryTextColor" color-name="\'S — Dark\'" main="main"></ct-accessibility-item></div></div><div class="accessibility__toast" ng-class="{ \'active\': $acc.isAccessibilityInfoActive }"><div class="text">Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger. Normal text is below 18 point or below 14 point and bold.</div><div class="actions"><md-button ng-click="$acc.isAccessibilityInfoActive = false">Got it</md-button><md-button ng-click="$acc.openAccessibilityMoreInfo()">Learn more</md-button></div></div></div>'), e.put("app/components/accessibility-item/tmpl/accessibility-item.html", '<div class="accessibility-item" ng-style="{ \'background-color\': $accItem.color.hex, \'color\': $accItem.color.accessibility.preferredTitleRgba }"><div class="accessibility-item__header" aria-label="Color values"><p>{{ $accItem.colorName }}</p><p>{{ $accItem.color.name }} {{ $accItem.color.shade }}</p><p>{{ $accItem.color.hex }}</p></div><ul class="accessibility-item__table" aria-label="Accessibility table for {{ $accItem.colorName }}" role="table"><li role="row" class="accessibility-item__table__row accessibility-item__table__row__header" ng-style="{ \'border-color\': $accItem.color.accessibility.preferredTitleRgba, \'color\': $accItem.color.accessibility.preferredTitleRgba }"><div class="accessibility-item__table__column"></div><div class="accessibility-item__table__column"><span class="accessibility-item__table__row__header__text-size--large">Aa</span> <span>Large Text</span></div><div class="accessibility-item__table__column"><span class="accessibility-item__table__row__header__text-size--small">Aa</span> <span>Normal Text</span></div><div class="accessibility-item__table__column accessibility-item__table__column__illegible"></div></li><li role="row" class="accessibility-item__table__row" ng-aria="White text row" ng-style="{ \'border-color\': $accItem.color.accessibility.preferredTitleRgba, \'color\': $accItem.color.accessibility.criterias.white.normal.preferredTitleRgba }"><div class="accessibility-item__table__column accessibility-item--color-white"><span>White Text</span></div><div class="accessibility-item__table__column" ng-aria="Large value" ng-if="$accItem.color.accessibility.criterias.white.large">{{ $accItem.getTextColorInfo(\'white\', \'large\') }}</div><div class="accessibility-item__table__column accessibility-item--color-black" ng-if="$accItem.color.hex && !$accItem.color.accessibility.criterias.white.large">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div><div class="accessibility-item__table__column" ng-if="$accItem.color.accessibility.criterias.white.normal" ng-style="{ \'color\': $accItem.color.accessibility.criterias.white.normal.preferredTitleRgba }">{{ $accItem.getTextColorInfo(\'white\', \'normal\') }}</div><div class="accessibility-item__table__column accessibility-item--color-black" ng-if="$accItem.color.hex && !$accItem.color.accessibility.criterias.white.normal">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div></li><li class="accessibility-item__table__row" row="role" ng-style="{ \'border-color\': $accItem.color.accessibility.preferredTitleRgba, \'color\': $accItem.color.accessibility.criterias.black.normal.preferredTitleRgba }"><div class="accessibility-item__table__column accessibility-item--color-black"><span>Black Text</span></div><div class="accessibility-item__table__column" ng-if="$accItem.color.accessibility.criterias.black.large">{{ $accItem.getTextColorInfo(\'black\', \'large\') }}</div><div class="accessibility-item__table__column accessibility-item--color-white" ng-if="$accItem.color.hex && !$accItem.color.accessibility.criterias.black.large">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div><div class="accessibility-item__table__column" ng-if="$accItem.color.accessibility.criterias.black.normal" ng-style="{ \'color\': $accItem.color.accessibility.criterias.black.normal.preferredTitleRgba }">{{ $accItem.getTextColorInfo(\'black\', \'normal\') }}</div><div class="accessibility-item__table__column accessibility-item--color-white" ng-if="$accItem.color.hex && !$accItem.color.accessibility.criterias.black.normal">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div></li><li class="accessibility-item__table__row" role="row" ng-if="$accItem.textColor && $accItem.textColor.hex !== $accItem.color.accessibility.preferredTitleColor && $accItem.textColor.hex !== $accItem.originalColor.accessibility.preferredTitleColor" ng-style="{ \'color\': $accItem.getTextColorRgba(\'normal\'), \'border\': none }"><div class="accessibility-item__table__column" ng-style="{ \'color\': $accItem.color.accessibility.preferredTitleColor }"><span ng-style="{ \'color\': $accItem.textColor.hex }">Custom Text</span></div><div class="accessibility-item__table__column" ng-if="$accItem.getCustomTextColorInfo(\'large\')" ng-style="{ \'color\': $accItem.getTextColorRgba(\'large\'), \'border\': none }">{{ $accItem.getCustomTextColorInfo(\'large\') }}</div><div class="accessibility-item__table__column" ng-if="!$accItem.getCustomTextColorInfo(\'large\')" ng-style="{ \'color\': $accItem.color.accessibility.preferredTitleColor }">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div><div class="accessibility-item__table__column" ng-if="$accItem.getCustomTextColorInfo(\'normal\')">{{ $accItem.getCustomTextColorInfo(\'normal\') }}</div><div class="accessibility-item__table__column" ng-if="!$accItem.getCustomTextColorInfo(\'normal\')" ng-style="{ \'color\': $accItem.color.accessibility.preferredTitleColor }">NOT LEGIBLE<md-icon class="material-icons" ng-style="{ \'color\': $accItem.color.accessibility.preferredNormalColor }">warning<md-tooltip md-direction="right">Not legible</md-tooltip></md-icon></div></li></ul></div>'), e.put("app/components/collection-drawer/tmpl/collection-drawer.html", '<div class="collection-drawer" ng-class="{ \'collection-drawer--status-active\': main.collectedSchemes.length > 0, \'collection-drawer--status-opened\': $collectionDrawer.isOpen }" ng-click="$collectionDrawer.toggleOpen()"><div class="collection-drawer__header"><div class="collection-drawer__header--section-left"><em>{{ main.collectedSchemes.length }}</em> <span>Collected</span></div><md-button class="md-icon-button" aria-label="{{ $collectionDrawer.isOpen ? \'Close\' : \'Open\' }} selection drawer" title="{{ $collectionDrawer.isOpen ? \'Close\' : \'Open\' }} selection drawer"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="collection-drawer__button-toggle-open" width="24px" height="24px" viewbox="0 0 24 24" enable-background="new 0 0 24 24"><rect ng-if="$collectionDrawer.isOpen" x="6" y="19" width="12" height="2"></rect><rect ng-if="!$collectionDrawer.isOpen" x="6" y="3" width="12" height="2"></rect></svg></md-button></div><div class="collection-drawer__schemes" ng-click="$event.stopPropagation()"><div class="collection-drawer__schemes__collection"><div class="collection-drawer__content__header"><span>Collection</span><div flex=""></div><md-button class="md-icon-button collection-drawer-button__share" aria-label="Share collection"><md-icon class="material-icons">googleplus_reshare</md-icon></md-button></div><div class="collection-drawer__schemes__collection__content" ng-repeat="scheme in main.collectedSchemes track by $index" ng-class="{ \'scheme--state-active\': main.isActiveScheme(scheme) }"><p>{{ scheme.name }}</p><ul class="collection-drawer__collected__scheme" ng-click="$collectionDrawer.selectColorsFromScheme(scheme)"><li ng-style="{ \'background-color\': scheme.primaryColor.hex }"></li><li ng-style="{ \'background-color\': scheme.primaryColor.range.light.hex }"></li><li ng-style="{ \'background-color\': scheme.primaryColor.range.dark.hex }"></li><li ng-style="{ \'background-color\': scheme.secondaryColor.hex }"></li><li ng-style="{ \'background-color\': scheme.secondaryColor.range.light.hex }"></li><li ng-style="{ \'background-color\': scheme.secondaryColor.range.dark.hex }"></li><li ng-style="{ \'background-color\': scheme.primaryTextColor.hex }"></li><li ng-style="{ \'background-color\': scheme.secondaryTextColor.hex }"></li></ul></div></div><div class="collection-drawer__current__scheme"><div class="collection-drawer__content__header"><span>Scheme Detail</span></div><div class="collection-drawer__current__scheme__content"><form name="schemeNameForm"><md-input-container ng-disabled="!main.isActiveSchemeInCollection"><label>Scheme name</label> <input ng-disabled="!main.isActiveSchemeInCollection" name="input" ng-pattern="/^[a-zA-Z0-9\\s]+$/" maxlength="26" ng-model="main.activeScheme.name" ng-change="$collectionDrawer.updateCurrentSchemeName()" ng-blur="$collectionDrawer.checkCurrentSchemeName()" type="text"></md-input-container><md-button class="md-icon-button" aria-label="Delete scheme" ng-click="main.removeActiveSchemeFromCollection()" ng-disabled="!main.isActiveSchemeInCollection"><md-icon class="material-icons">remove_circle_outline</md-icon><md-tooltip md-direction="left">Remove scheme from collection</md-tooltip></md-button></form><div class="collection-drawer__current__scheme__swatches"><div class="collection-drawer__current__scheme__swatch" ng-class="{ \'collection-drawer__current__scheme__swatch--state-empty\': !main.isActiveSchemeInCollection }"><div class="collection-drawer__current__scheme__swatch--large" ng-style="{ \'background-color\': main.primaryColor.hex, \'color\': main.primaryColor.accessibility.preferredNormalColor }"><p>Primary</p><p>{{ main.primaryColor.hex | lowercase }}</p><span>P</span></div><ul><li class="collection-drawer__current__scheme__swatch--small" ng-style="{ \'background-color\': main.primaryColor.range.light.hex, \'color\': main.primaryColor.range.light.accessibility.preferredNormalColor }"><p>P — Light</p><p>{{ main.primaryColor.range.light.hex | lowercase }}</p></li><li class="collection-drawer__current__scheme__swatch--small" ng-style="{ \'background-color\': main.primaryColor.range.dark.hex, \'color\': main.primaryColor.range.dark.accessibility.preferredNormalColor }"><p>P — Dark</p><p>{{ main.primaryColor.range.dark.hex | lowercase }}</p></li></ul></div><div class="collection-drawer__current__scheme__swatch" ng-class="{ \'collection-drawer__current__scheme__swatch--state-empty\': !main.isActiveSchemeInCollection }"><div class="collection-drawer__current__scheme__swatch--large" ng-style="{ \'background-color\': main.secondaryColor.hex, \'color\': main.secondaryColor.accessibility.preferredNormalColor }"><p>Secondary</p><p>{{ main.secondaryColor.hex | lowercase }}</p><span>P</span></div><ul><li class="collection-drawer__current__scheme__swatch--small" ng-style="{ \'background-color\': main.secondaryColor.range.light.hex, \'color\': main.secondaryColor.range.light.accessibility.preferredNormalColor }"><p>P — Light</p><p>{{ main.secondaryColor.range.light.hex | lowercase }}</p></li><li class="collection-drawer__current__scheme__swatch--small" ng-style="{ \'background-color\': main.secondaryColor.range.dark.hex, \'color\': main.secondaryColor.range.dark.accessibility.preferredNormalColor }"><p>P — Dark</p><p>{{ main.secondaryColor.range.dark.hex | lowercase }}</p></li></ul></div><div class="collection-drawer__current__scheme__swatch--narrow" ng-class="{ \'collection-drawer__current__scheme__swatch--state-empty\': !main.isActiveSchemeInCollection }"><div class="collection-drawer__current__scheme__swatch--text" ng-style="{ \'background-color\': main.primaryColor.hex, \'color\': main.primaryTextColor.hex }"><p ng-style="{ \'color\': main.primaryColor.accessibility.preferredNormalColor }">Text on P</p><p>{{ main.primaryTextColor.hex | lowercase }}</p><span>T</span></div><div class="collection-drawer__current__scheme__swatch--text" ng-style="{ \'background-color\': main.secondaryColor.hex, \'color\': main.secondaryTextColor.hex }"><p ng-style="{ \'color\': main.secondaryColor.accessibility.preferredNormalColor }">Text on S</p><p>{{ main.secondaryTextColor.hex | lowercase }}</p><span>T</span></div></div></div></div></div></div></div>'),
        e.put("app/components/color-schemes/tmpl/color-schemes.html", '<div class="color-schemes"><div class="scheme-container" ng-class="{ \'scheme-container--state-empty\': !main.primaryColor.hex, \'scheme-container--state-active\': main.activeColorSystem === \'primary\', }" ng-click="$cSchemes.setActiveColorSystem(\'primary\')" aria-label="Primary scheme" aria-pressed="{{ main.activeColorSystem === \'primary\' }}" ng-style="{ \'color\': main.primaryColor.range.dark.hex }"><p class="scheme-container__title">Primary</p><div class="scheme-container__content"><div class="scheme-container__content__large" ng-style="{ \'background-color\': main.primaryColor.hex, \'color\': main.primaryColor.accessibility.preferredNormalColor }"><p class="strong">{{ main.primaryColor.hex | lowercase }}</p><span class="strong" ng-style="main.activeColorSystem === \'primary\' && { \'background-color\': !!main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, \'color\': main.primaryColor.hex }">P</span><md-button class="scheme__reset__button" ng-if="main.activeColorSystem === \'primary\' && main.primaryColor.hex" ng-click="main.setActiveColor(\'\')">Reset</md-button></div><ul><li class="scheme-container__content__small" ng-style="{ \'background-color\': main.primaryColor.range.light.hex, \'color\': main.primaryColor.range.light.accessibility.preferredNormalColor }"><p>P — Light</p><p class="strong">{{ main.primaryColor.range.light.hex | lowercase }}</p></li><li class="scheme-container__content__small" ng-style="{ \'background-color\': main.primaryColor.range.dark.hex, \'color\': main.primaryColor.range.dark.accessibility.preferredNormalColor }"><p>P — Dark</p><p class="strong">{{ main.primaryColor.range.dark.hex | lowercase }}</p></li></ul></div></div><div class="scheme-container" ng-class="{ \'scheme-container--state-empty\': !main.secondaryColor.hex, \'scheme-container--state-active\': main.activeColorSystem === \'secondary\' }" ng-click="main.primaryColor.hex && $cSchemes.setActiveColorSystem(\'secondary\')" ng-disabled="!main.primaryColor.hex" aria-label="Secondary scheme" aria-pressed="{{ main.activeColorSystem === \'secondary\' }}" ng-style="{ \'color\': main.secondaryColor.range.dark.hex }"><p class="scheme-container__title">Secondary</p><div class="scheme-container__content"><div class="scheme-container__content__large" ng-style="{ \'background-color\': main.secondaryColor.hex, \'color\': main.secondaryColor.accessibility.preferredNormalColor }"><p class="strong">{{ main.secondaryColor.hex | lowercase }}</p><span class="strong" ng-style="main.activeColorSystem === \'secondary\' && { \'background-color\': !!main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, \'color\': main.secondaryColor.hex }">S</span><md-button class="scheme__reset__button" ng-if="main.activeColorSystem === \'secondary\' && main.secondaryColor.hex" ng-click="main.setActiveColor(\'\')">Reset</md-button></div><ul><li class="scheme-container__content__small" ng-style="{ \'background-color\': main.secondaryColor.range.light.hex, \'color\': main.secondaryColor.range.light.accessibility.preferredNormalColor }"><p>S — Light</p><p class="strong">{{ main.secondaryColor.range.light.hex | lowercase }}</p></li><li class="scheme-container__content__small" ng-style="{ \'background-color\': main.secondaryColor.range.dark.hex, \'color\': main.secondaryColor.range.dark.accessibility.preferredNormalColor }"><p>S — Dark</p><p class="strong">{{ main.secondaryColor.range.dark.hex | lowercase }}</p></li></ul></div></div><div class="scheme-container__narrow"><div class="scheme-container scheme-container__narrow__text" ng-class="{ \'scheme-container--state-empty\': !main.primaryColor.hex, \'scheme-container--state-active\': main.activeColorSystem === \'primaryText\' }" ng-click="main.primaryColor.hex && $cSchemes.setActiveColorSystem(\'primaryText\')" ng-disabled="!main.primaryColor.hex" ng-style="{ \'color\': main.primaryTextColor.hex }" aria-label="Primary text scheme" aria-pressed="{{ main.activeColorSystem === \'primaryText\' }}"><p class="scheme-container__title">Text on P</p><div class="scheme-container__content__text" ng-style="{ \'background-color\': main.primaryColor.hex, \'color\': !!main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor }"><p class="strong">{{ main.primaryTextColor.hex ? (main.primaryTextColor.hex | lowercase) : (main.primaryColor.accessibility.preferredNormalColor | lowercase) }}</p><span class="strong" ng-style="main.activeColorSystem === \'primaryText\' && { \'background-color\': !!main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, \'color\': main.primaryColor.hex }">T</span><md-button class="scheme__reset__button scheme__reset__button--small" ng-if="main.activeColorSystem === \'primaryText\'" aria-label="Reset primary text" ng-click="main.setActiveColor(main.primaryColor.accessibility.preferredNormalColor)" ng-style="{ \'color\': main.primaryColor.accessibility.preferredNormalColor }">Reset</md-button></div></div><div class="scheme-container scheme-container__narrow__text" ng-class="{ \'scheme-container--state-empty\': !main.secondaryColor.hex, \'scheme-container--state-active\': main.activeColorSystem === \'secondaryText\' }" ng-click="main.secondaryColor.hex && $cSchemes.setActiveColorSystem(\'secondaryText\')" ng-disabled="!main.primaryColor.hex || !main.secondaryColor.hex" ng-style="{ \'color\': main.secondaryTextColor.hex }" aria-label="Secondary text scheme" aria-pressed="{{ main.activeColorSystem === \'secondaryText\' }}"><p class="scheme-container__title">Text on S</p><div class="scheme-container__content__text" ng-style="{ \'background-color\': main.secondaryColor.hex, \'color\': !!main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor }"><p class="strong">{{ main.secondaryTextColor.hex ? (main.secondaryTextColor.hex | lowercase) : (main.secondaryColor.accessibility.preferredNormalColor | lowercase) }}</p><span class="strong" ng-style="main.activeColorSystem === \'secondaryText\' && { \'background-color\': !!main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, \'color\': main.secondaryColor.hex }">T</span><md-button class="scheme__reset__button scheme__reset__button--small" ng-if="main.activeColorSystem === \'secondaryText\'" aria-label="Reset secondary text" ng-click="main.setActiveColor(main.secondaryColor.accessibility.preferredNormalColor)" ng-style="{ \'color\': main.secondaryColor.accessibility.preferredNormalColor }">Reset</md-button></div></div></div></div>'), e.put("app/components/color-wheel/tmpl/color-luminance-slider.html", '<div class="color-luminance-slider"><div class="color-luminance-slider__bar"></div><div class="color-luminance-slider__thumb"></div></div>'), e.put("app/components/color-wheel/tmpl/color-wheel-selector.html", '<div class="color-wheel-selector"><div class="color-wheel-selector__color" ng-style="{ \'background-color\': $colorWheel.inputColor.hex }"></div></div>'), e.put("app/components/color-wheel/tmpl/color-wheel.html", '<ng-form name="colorWheelForm"><div class="color-wheel"><div class="color-wheel__container"><canvas draggable="false" class="color-wheel__canvas" height="220" width="220"></canvas><ct-color-luminance-slider class="color-wheel__luminance" model="$colorWheel.luminanceModel" ng-disabled="!$colorWheel.selector.active"></ct-color-luminance-slider></div><md-input-container class="color-wheel__input" ,="" ng-class="{ \'color-wheel__input--state-hide\': !$colorWheel.selector.active }"><input ng-model="$colorWheel.inputColor.hex" type="text" placeholder="Hex color" ng-change="$colorWheel.setColorFromInput()" ng-blur="$colorWheel.setColorFromInputBlur()" name="hexInput" maxlength="7" aria-label="Hex input for color wheel"></md-input-container><ct-color-wheel-selector class="color-wheel__selector" ng-class="{ \'color-wheel__selector--state-hide\': !$colorWheel.selector.active }"></ct-color-wheel-selector></div></ng-form>'), e.put("app/components/exports/android/tmpl.html", '<div><?xml version="1.0" encoding="UTF-8"?><resources><color name="primaryColor">{{ main.primaryColor.hex | lowercase }}</color><color name="primaryLightColor">{{ main.primaryColor.range.light.hex | lowercase }}</color><color name="primaryDarkColor">{{ main.primaryColor.range.dark.hex | lowercase }}</color><color name="secondaryColor" ng-if="main.secondaryColor">{{ main.secondaryColor.hex | lowercase }}</color><color name="secondaryLightColor" ng-if="main.secondaryColor">{{ main.secondaryColor.range.light.hex | lowercase }}</color><color name="secondaryDarkColor" ng-if="main.secondaryColor">{{ main.secondaryColor.range.dark.hex | lowercase }}</color><color name="primaryTextColor">{{ main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor | lowercase}}</color><color name="secondaryTextColor" ng-if="main.secondaryColor">{{ main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor | lowercase}}</color></resources></div>'), e.put("app/components/exports/ios/tmpl.html", "<div><div>let primaryColor = UIColor(red: {{ main.getRgbIOSFromHex(main.primaryColor.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.primaryColor.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.primaryColor.hex, 'b') }}, alpha: 1.0);</div><div>let primaryLightColor = UIColor(red: {{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'b') }}, alpha: 1.0);</div><div>let primaryDarkColor = UIColor(red: {{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'b') }}, alpha: 1.0);</div><div>let primaryTextColor = UIColor(red: {{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'r') }}, green: {{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'b') }}, alpha: 1.0);</div><div ng-if=\"main.secondaryColor\">let secondaryColor = UIColor(red: {{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'b') }}, alpha: 1.0);</div><div ng-if=\"main.secondaryColor\">let secondaryLightColor = UIColor(red: {{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'b') }}, alpha: 1.0);</div><div ng-if=\"main.secondaryColor\">let secondaryDarkColor = UIColor(red: {{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'r') }}, green: {{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'b') }}, alpha: 1.0);</div><div ng-if=\"main.secondaryColor\">let secondaryTextColor = UIColor(red: {{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'r') }}, green: {{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'g') }}, blue: {{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'b') }}, alpha: 1.0);</div></div>"), e.put("app/components/exports/ios-plist/tmpl.html", "<div><?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\"><plist version=\"1.0\"><dict><key>Primary Color</key><dict><key>primaryColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.hex, 'r') }}</real></dict><key>primaryLightColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.light.hex, 'r') }}</real></dict><key>primaryDarkColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.primaryColor.range.dark.hex, 'r') }}</real></dict><key>primaryTextColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor, 'r') }}</real></dict></dict><key ng-if=\"main.secondaryColor\">Secondary Color</key><dict ng-if=\"main.secondaryColor\"><key>secondaryColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.hex, 'r') }}</real></dict><key>secondaryLightColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.light.hex, 'r') }}</real></dict><key>secondaryDarkColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.secondaryColor.range.dark.hex, 'r') }}</real></dict><key>secondaryTextColor</key><dict><key>alpha</key><real>1</real><key>blue</key><real>{{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'b') }}</real><key>green</key><real>{{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'g') }}</real><key>red</key><real>{{ main.getRgbIOSFromHex(main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor, 'r') }}</real></dict></dict></dict></plist></div>"), e.put("app/components/material-io-nav/tmpl/material-io-nav.html", '<div class="material-io-nav" ng-class="{ \'material-io-nav--state-collapse\': $materialIoNav.collapse }" ng-click="$materialIoNav.hide($event, true)" aria-expanded="!$materialIoNav.collapse"><div class="material-io-nav__header"><div class="material-io-nav__wrapper"><div class="material-io-nav__carousel"><a class="material-io-nav__link" aria-label="Page heading" href="/" ng-click="$materialIoNav.clickedOnMaterialIoLink($event)"><h2>Material Design</h2></a><div class="material-io-nav__brand" aria-label="Brand name" ng-click="$materialIoNav.hide($event, false)"><div class="material-io-nav__brand__icon"></div><h2>Color Tool</h2></div></div></div><div class="material-io-nav__container"><div class="material-io-nav__content"><div class="material-io-nav__content__style"><h3>Color Tool</h3><p>Create, share, and apply color palettes to your UI, as well as measure the accessibility level of any color combination.</p></div></div><div class="material-io-nav__graphic"><div class="material-io-nav__graphic__image"></div></div></div></div><span class="md-visually-hidden">Toggle {{$materialIoNav.collapse ? \'expanded\' : \'collapsed\'}}</span><div class="material-io-nav__backdrop"></div></div>'), e.put("app/components/material-palette/tmpl/material-palette.html", '<div class="material-palette"><ul class="shades-container"><li class="shade" ng-repeat="shade in $materialPalette.shades"><span ng-if="shade.indexOf(\'A\') !== -1">A</span> <span ng-if="shade.indexOf(\'A\') !== -1">{{ shade | limitTo:3:1 }}</span> <span ng-if="shade.indexOf(\'A\') === -1"></span> <span ng-if="shade.indexOf(\'A\') === -1" class="align-bottom">{{ shade }}</span> <span></span></li></ul><div class="labels-and-palettes"><ul class="color-labels"><li class="color-label" ng-repeat="(index, palette) in $materialPalette.palettes">{{ palette.name }}<div class="color-label-divider"></div></li></ul><div class="palettes"><ul class="palette-container" ng-repeat="(index, palette) in $materialPalette.palettes"><li class="color" ng-repeat="value in palette.values" value="{{ value.hex }}" aria-label="{{ palette.name }} {{ value.shade }}" aria-pressed="{{ value.hex === $materialPalette.activeColor.hex }}" ng-class="{ \'color--state-selected\': value.hex === $materialPalette.activeColor.hex }" ng-click="$materialPalette.setColor($event, value);" ng-style="{ \'background-color\': value.hex, \'color\': value.hexText }"></li></ul></div></div></div>'), e.put("app/components/selection-toggle/tmpl/selection-toggle.html", '<div class="selection-toggle"><md-button ng-if="$selectionToggle.isIcon" class="selection-toggle-button md-icon-button" ng-click="$selectionToggle.buttonWasClicked()" aria-label="{{ $selectionToggle.label }}" title="{{ $selectionToggle.label }}"><div class="selection-toggle__frame-mask"><div class="selection-toggle__frames"></div></div></md-button><md-button ng-if="!$selectionToggle.isIcon" class="selection-toggle__button" ng-click="$selectionToggle.buttonWasClicked()" aria-label="{{ $selectionToggle.label }}" md-no-ink="">{{ $selectionToggle.label }}<div class="selection-toggle__frame-mask is-shown-with-label"><div class="selection-toggle__frames"></div></div></md-button></div>'), e.put("app/components/ui-container/tmpl/ui-container.html", '<div class="ui-container"><div class="ui-container__nav"><md-button class="md-icon-button" aria-label="Navigate left" ng-disabled="$uiContainer.currentPage == 1" ng-click="$uiContainer.setCurrentPage($uiContainer.currentPage - 1)"><md-icon class="material-icons">keyboard_arrow_left</md-icon></md-button><span>{{ $uiContainer.currentPage }}/{{ $uiContainer.currentTotalPages }}</span><md-button class="md-icon-button" aria-label="Navigate right" ng-disabled="$uiContainer.currentPage == $uiContainer.currentTotalPages" ng-click="$uiContainer.setCurrentPage($uiContainer.currentPage + 1)"><md-icon class="material-icons">keyboard_arrow_right</md-icon></md-button></div><div class="ui-container__section"></div></div>'), e.put("app/components/ui-mobile/tmpl/ui-mobile-1.html", '<div class="ui-mobile-1 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><rect id="XMLID_91_" x="230.15" y="419.75" opacity="0.26" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="118.62" height="2.03"></rect><rect id="XMLID_92_" x="230.15" y="419.75" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="70.97" height="2.03"></rect><path id="XMLID_93_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M301.21,416.05c-2.72,0-4.93,2.21-4.93,4.93 c0,2.72,2.2,4.93,4.93,4.93c2.72,0,4.93-2.2,4.93-4.93C306.14,418.26,303.93,416.05,301.21,416.05"></path><g><rect x="0.5" y="0.5" fill="#FFFFFF" width="364" height="649"></rect><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g><rect id="XMLID_94_" x="230.15" y="419.75" opacity="0.26" width="118.62" height="2.03"></rect><rect id="XMLID_95_" x="230.15" y="419.75" fill="#767676" width="70.97" height="2.03"></rect><path id="XMLID_96_" fill="#767676" d="M301.21,416.05c-2.72,0-4.93,2.21-4.93,4.93c0,2.72,2.2,4.93,4.93,4.93 c2.72,0,4.93-2.2,4.93-4.93C306.14,418.26,303.93,416.05,301.21,416.05"></path><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M365,332.56"></path><line fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="0" y1="89.22" x2="365" y2="89.22"></line><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M0,332.56"></path><g id="XMLID_97_"><circle id="XMLID_98_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" cx="323.33" cy="332.18" r="28.39"></circle><line id="XMLID_99_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="323.33" y1="317.54" x2="323.33" y2="345.93"></line><line fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="337.52" y1="331.74" x2="309.13" y2="331.74"></line></g><line fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="365" y1="24.33" x2="0" y2="24.33"></line><line fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="0" y1="24.33" x2="365" y2="24.33"></line><line fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="365" y1="89.22" x2="0" y2="89.22"></line><text transform="matrix(1 0 0 1 32.217 65.1794)" class="void-1 title">Text</text><line fill="none" stroke="#6D6E70" stroke-miterlimit="10" x1="0" y1="332.56" x2="294.94" y2="332.56"></line><line fill="none" stroke="#6D6E70" stroke-miterlimit="10" x1="351.68" y1="332.56" x2="365" y2="332.56"></line></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><g><rect x="0.5" y="267.2" class="void-0" width="363.6" height="379.8"></rect><rect x="229.7" y="418.7" class="opacity-26" width="118.2" height="2"></rect><rect x="229.7" y="418.7" class="s-color" width="70.7" height="2"></rect><path class="s-color" d="M300.5,415c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9 C305.5,417.2,303.3,415,300.5,415"></path><rect x="0.5" y="89.4" class="void-2" width="363.6" height="242.4"></rect><circle class="s-color" cx="322.6" cy="331.5" r="25.4"></circle><line class="fab-stroke pt-color-stroke st-color-stroke" x1="322.6" y1="318.5" x2="322.6" y2="343.7"></line><line class="fab-stroke pt-color-stroke st-color-stroke" x1="335.2" y1="331.1" x2="310" y2="331.1"></line><rect x="0.5" y="0.5" class="p-color-dark" width="363.6" height="24.2"></rect><rect x="0.5" y="24.8" class="p-color" width="363.6" height="64.6"></rect><text transform="matrix(1 0 0 1 32.217 65.1794)" class="pt-color title">Text</text></g></svg></div></div>'), e.put("app/components/ui-mobile/tmpl/ui-mobile-2.html", '<div class="ui-mobile-2 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><g><defs><rect id="SVGID_1_" x="0" width="365" height="650"></rect></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clippath><g id="XMLID_100_" clip-path="url(#SVGID_2_)"><rect x="0" y="269.65" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="380.35"></rect><rect x="0" y="89.22" fill="#E1E2E1" width="365" height="180.43"></rect><rect x="0" y="269.65" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="62.86"></rect><rect x="0" y="89.22" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="180.47"></rect><rect x="0" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="89.22"></rect><g><g><path fill="#767676" d="M34.89,311.1h-1.47v-11.53h1.47V311.1z"></path><path fill="#767676" d="M46.23,300.76h-3.64v10.34h-1.47v-10.34h-3.64v-1.19h8.74V300.76z"></path><path fill="#767676" d="M55.74,305.73h-5.32v4.19h6.13v1.18h-7.6v-11.53h7.52v1.19h-6.05v3.79h5.32V305.73z"></path><path fill="#767676" d="M61.11,299.57l3.78,9.51l3.79-9.51h1.88v11.53h-1.47v-4.62l0.15-4.84h-0.02l-3.84,9.46h-0.98l-3.83-9.44 h-0.02l0.15,4.82v4.62h-1.47v-11.53H61.11z"></path><path fill="#767676" d="M83.16,311.1h-1.47v-9.85l-2.35,0.06v-0.94l3.82-0.8V311.1z"></path></g></g><g><g><path fill="#767676" d="M159.67,311.1h-1.47v-11.53h1.47V311.1z"></path><path fill="#767676" d="M171,300.76h-3.64v10.34h-1.47v-10.34h-3.64v-1.19H171V300.76z"></path><path fill="#767676" d="M180.52,305.73h-5.32v4.19h6.13v1.18h-7.6v-11.53h7.52v1.19h-6.05v3.79h5.32V305.73z"></path><path fill="#767676" d="M185.89,299.57l3.78,9.51l3.79-9.51h1.88v11.53h-1.47v-4.62l0.15-4.84H194l-3.84,9.46h-0.98l-3.83-9.44 h-0.02l0.15,4.82v4.62H184v-11.53H185.89z"></path><path fill="#767676" d="M210.81,311.1h-7.43v-1.04l3.78-4.21c0.7-0.77,1.16-1.38,1.4-1.82c0.24-0.44,0.36-0.9,0.36-1.37 c0-0.6-0.17-1.1-0.51-1.49s-0.81-0.59-1.4-0.59c-0.82,0-1.43,0.2-1.81,0.61c-0.38,0.41-0.57,0.99-0.57,1.76h-1.46 c0-1.03,0.33-1.88,1.01-2.55c0.67-0.67,1.62-1.01,2.84-1.01c1.04,0,1.87,0.3,2.47,0.89c0.6,0.59,0.91,1.37,0.91,2.32 c0,0.64-0.18,1.27-0.55,1.88c-0.37,0.62-0.9,1.3-1.59,2.06l-3.1,3.37h5.66V311.1z"></path></g></g><g><g><path fill="#767676" d="M281.34,311.1h-1.46v-11.53h1.46V311.1z"></path><path fill="#767676" d="M292.67,300.76h-3.64v10.34h-1.47v-10.34h-3.64v-1.19h8.74V300.76z"></path><path fill="#767676" d="M302.19,305.73h-5.32v4.19H303v1.18h-7.6v-11.53h7.52v1.19h-6.05v3.79h5.32V305.73z"></path><path fill="#767676" d="M307.55,299.57l3.78,9.51l3.79-9.51H317v11.53h-1.46v-4.62l0.15-4.84h-0.02l-3.84,9.46h-0.98l-3.83-9.44 h-0.02l0.15,4.82v4.62h-1.47v-11.53H307.55z"></path><path fill="#767676" d="M327.17,304.64h1.32c0.73,0,1.24-0.17,1.55-0.52s0.46-0.84,0.46-1.47c0-0.68-0.17-1.19-0.5-1.54 c-0.33-0.34-0.84-0.51-1.52-0.51c-0.64,0-1.15,0.18-1.52,0.54s-0.56,0.84-0.56,1.46h-1.46c0-0.91,0.32-1.67,0.97-2.28 s1.51-0.91,2.57-0.91c1.09,0,1.94,0.28,2.56,0.84c0.62,0.56,0.93,1.37,0.93,2.44c0,0.49-0.14,0.97-0.44,1.43 c-0.29,0.46-0.73,0.82-1.32,1.08c0.71,0.23,1.21,0.58,1.5,1.06c0.29,0.48,0.44,1.03,0.44,1.65c0,1.07-0.34,1.9-1.01,2.49 c-0.68,0.59-1.56,0.88-2.65,0.88c-1.07,0-1.94-0.28-2.63-0.84c-0.69-0.56-1.03-1.35-1.03-2.37h1.47c0,0.63,0.19,1.12,0.58,1.49 s0.92,0.55,1.61,0.55c0.7,0,1.24-0.18,1.62-0.54c0.38-0.36,0.57-0.9,0.57-1.63c0-0.73-0.17-1.27-0.52-1.61s-0.9-0.51-1.66-0.51 h-1.32V304.64z"></path></g></g><rect x="0" y="328.47" fill="#767676" width="121.67" height="4.06"></rect><g id="XMLID_101_"><circle id="XMLID_102_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" cx="323.33" cy="564.06" r="28.39"></circle><line id="XMLID_103_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="323.33" y1="550.49" x2="323.33" y2="576.85"></line><line fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="336.51" y1="563.67" x2="310.15" y2="563.67"></line></g><g><g><path fill="#767676" d="M45.69,41.26h-5.45v15.52h-2.2V41.26h-5.45v-1.78h13.1V41.26z"></path><path fill="#767676" d="M52.24,57.02c-1.81,0-3.23-0.58-4.28-1.75c-1.05-1.17-1.57-2.72-1.57-4.65v-0.53 c0-1.87,0.54-3.4,1.61-4.6c1.07-1.2,2.37-1.79,3.88-1.79c1.74,0,3.05,0.51,3.93,1.53c0.88,1.02,1.31,2.42,1.31,4.19v1.44H48.6 c0.03,1.31,0.36,2.38,0.98,3.18c0.62,0.81,1.51,1.21,2.66,1.21c0.8,0,1.49-0.11,2.07-0.33c0.58-0.22,1.11-0.53,1.57-0.94 l0.87,1.46c-0.47,0.46-1.07,0.84-1.8,1.13C54.22,56.87,53.31,57.02,52.24,57.02z M51.88,45.47c-0.83,0-1.54,0.33-2.11,1 s-0.94,1.54-1.1,2.61h6.25v-0.31c0-0.96-0.25-1.75-0.76-2.37C53.66,45.78,52.9,45.47,51.88,45.47z"></path><path fill="#767676" d="M64.08,48.71l2.85-4.79h2.57l-4.19,6.36l4.32,6.5H67.1l-2.97-4.92l-2.97,4.92h-2.57l4.34-6.5l-4.21-6.36 h2.54L64.08,48.71z"></path><path fill="#767676" d="M74.63,40.8v3.12h2.47v1.68h-2.47v7.87c0,0.63,0.11,1.08,0.32,1.32s0.51,0.37,0.88,0.37 c0.19,0,0.38-0.01,0.58-0.04c0.19-0.03,0.37-0.07,0.54-0.11l0.3,1.56c-0.21,0.13-0.49,0.24-0.86,0.33 c-0.37,0.08-0.73,0.12-1.1,0.12c-0.9,0-1.6-0.28-2.1-0.84c-0.51-0.56-0.76-1.46-0.76-2.71V45.6h-1.84v-1.68h1.84V40.8H74.63z"></path></g></g></g></g><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><g><rect x="0.3" y="267.2" class="void-0" width="363.6" height="379.8"></rect><rect x="0.3" y="269.2" class="p-color-light" width="363.6" height="63.3"></rect><rect x="0.3" y="24.8" class="p-color" width="363.6" height="244.4"></rect><rect x="0.3" y="0.5" class="p-color-dark" width="363.6" height="88.9"></rect><text transform="matrix(1 0 0 1 32.0525 310.47)" class="pt-color text">ITEM 1</text><text transform="matrix(1 0 0 1 156.3684 310.47)" class="pt-color text">ITEM 2</text><text transform="matrix(1 0 0 1 277.5813 310.47)" class="pt-color text">ITEM 3</text><rect x="0.3" y="328.5" class="p-color s-color" width="121.2" height="4"></rect><g><circle class="s-color" cx="322.4" cy="562.5" r="25.4"></circle><line class="fab-stroke pt-color-stroke st-color-stroke" x1="322.4" y1="549.5" x2="322.4" y2="574.7"></line><line class="fab-stroke pt-color-stroke st-color-stroke" x1="335" y1="562.1" x2="309.8" y2="562.1"></line></g><text transform="matrix(1 0 0 1 32.0525 57.0959)" class="pt-color title">Text</text></g></svg></div></div>'),
        e.put("app/components/ui-mobile/tmpl/ui-mobile-3.html", '<div class="ui-mobile-3 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="647px" viewbox="0 0 365 647" style="enable-background:new 0 0 365 647;" xml:space="preserve"><g><defs><rect id="SVGID_1_" x="0" width="365" height="650"></rect></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clippath><g clip-path="url(#SVGID_2_)"><polyline fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" points="365,89.22 365,650 0,650 0,89.22"></polyline><polyline fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" points="41.57,89.22 0,89.22 0,0 365,0 365,89.22 323.33,89.22"></polyline><g id="XMLID_250_"><g><path fill="#767676" d="M51.57,29.28h-5.45V44.8h-2.2V29.28h-5.45V27.5h13.1V29.28z"></path><path fill="#767676" d="M58.11,45.04c-1.81,0-3.23-0.58-4.28-1.75c-1.05-1.17-1.57-2.72-1.57-4.65V38.1 c0-1.87,0.54-3.4,1.61-4.6c1.07-1.2,2.37-1.79,3.88-1.79c1.74,0,3.05,0.51,3.93,1.53c0.88,1.02,1.31,2.42,1.31,4.19v1.44h-8.52 c0.03,1.31,0.36,2.38,0.98,3.18c0.62,0.81,1.51,1.21,2.66,1.21c0.8,0,1.49-0.11,2.07-0.33c0.58-0.22,1.11-0.53,1.57-0.94 l0.87,1.46c-0.47,0.46-1.07,0.84-1.8,1.13C60.1,44.89,59.19,45.04,58.11,45.04z M57.76,33.49c-0.83,0-1.54,0.33-2.11,1 s-0.94,1.54-1.1,2.61h6.25v-0.31c0-0.96-0.25-1.75-0.76-2.37C59.53,33.8,58.77,33.49,57.76,33.49z"></path><path fill="#767676" d="M69.96,36.73l2.85-4.79h2.57l-4.19,6.36l4.32,6.5h-2.53l-2.97-4.92l-2.97,4.92h-2.57l4.34-6.5 l-4.21-6.36h2.54L69.96,36.73z"></path><path fill="#767676" d="M80.51,28.82v3.12h2.47v1.68h-2.47v7.87c0,0.63,0.11,1.08,0.32,1.32s0.51,0.37,0.88,0.37 c0.19,0,0.38-0.01,0.58-0.04c0.19-0.03,0.37-0.07,0.54-0.11l0.3,1.56c-0.21,0.13-0.49,0.24-0.86,0.33 c-0.37,0.08-0.73,0.12-1.1,0.12c-0.9,0-1.6-0.28-2.1-0.84c-0.51-0.56-0.76-1.46-0.76-2.71v-7.87h-1.84v-1.68h1.84v-3.12H80.51z"></path></g></g><rect x="41.57" y="65.73" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="281.86" height="350.81"></rect><polyline fill="none" stroke="#6D6E70" stroke-miterlimit="10" points="41.57,650 41.57,458.28 323.43,458.28 323.43,535.67"></polyline><g id="XMLID_109_"><path id="XMLID_110_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M163.51,225.5l26.39-45.71 c-7.74-4.57-16.75-7.21-26.39-7.21c-28.69,0-51.94,23.25-51.94,51.94c0,28.69,23.26,51.94,51.94,51.94 c28.36,0,51.39-22.73,51.92-50.96H163.51z"></path><path id="XMLID_111_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M215.45,224.52c0,0.33-0.02,0.65-0.02,0.98 h51.97l-51.94-89.96l-25.55,44.25C205.19,188.83,215.45,205.47,215.45,224.52z"></path><path id="XMLID_112_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M215.42,225.5c0.01-0.33,0.02-0.65,0.02-0.98 c0-19.05-10.26-35.69-25.55-44.73l-26.39,45.71H215.42z"></path></g><g><path fill="none" stroke="#6D6E70" stroke-miterlimit="10" d="M123.67,650c-7.55-9.02-12.11-20.64-12.11-33.32 c0-28.69,23.26-51.94,51.94-51.94c9.64,0,18.66,2.63,26.39,7.21l-26.39,45.71h51.92c-0.23,12.3-4.73,23.56-12.09,32.34H123.67z"></path><path fill="none" stroke="#6D6E70" stroke-miterlimit="10" d="M215.45,616.68c0,0.33-0.02,0.65-0.02,0.98h51.97l-51.94-89.96 l-25.55,44.25C205.19,580.98,215.45,597.63,215.45,616.68z"></path><path fill="none" stroke="#6D6E70" stroke-miterlimit="10" d="M215.42,617.66c0.01-0.33,0.02-0.65,0.02-0.98 c0-19.05-10.26-35.69-25.55-44.73l-26.39,45.71H215.42z"></path></g><g id="XMLID_120_"><path fill="#FFFFFF" d="M305.22,395.05c0,1.01-0.75,1.82-1.67,1.82h-85.88c-0.92,0-1.67-0.82-1.67-1.82V362.2 c0-1.01,0.75-1.82,1.67-1.82h85.88c0.92,0,1.67,0.82,1.67,1.82V395.05z"></path><g><path fill="#6D6E70" d="M303.54,360.38c0.92,0,1.67,0.82,1.67,1.82v32.85c0,1.01-0.75,1.82-1.67,1.82h-85.88 c-0.92,0-1.67-0.82-1.67-1.82V362.2c0-1.01,0.75-1.82,1.67-1.82H303.54 M303.54,359.38h-85.88c-1.47,0-2.67,1.27-2.67,2.82 v32.85c0,1.56,1.2,2.82,2.67,2.82h85.88c1.47,0,2.67-1.27,2.67-2.82V362.2C306.22,360.65,305.02,359.38,303.54,359.38 L303.54,359.38z"></path></g></g><g id="XMLID_121_" opacity="0.87"><g><path fill="#767676" d="M250.22,373.21h-3.6v9.99h-1.92v-9.99h-3.6v-1.54h9.12V373.21z"></path><path fill="#767676" d="M258.95,378.01h-5.04v3.65h5.85v1.54h-7.78v-11.53h7.72v1.54h-5.8v3.26h5.04V378.01z"></path><path fill="#767676" d="M265.32,375.93l2.44-4.26h2.27l-3.54,5.72l3.68,5.81h-2.31l-2.51-4.33l-2.5,4.33h-2.27l3.62-5.81 l-3.54-5.72h2.26L265.32,375.93z"></path><path fill="#767676" d="M280.12,373.21h-3.6v9.99h-1.92v-9.99H271v-1.54h9.12V373.21z"></path></g></g><g id="XMLID_106_"><circle id="XMLID_107_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" cx="323.33" cy="564.06" r="28.39"></circle><line id="XMLID_108_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="323.33" y1="550.44" x2="323.33" y2="576.8"></line><line fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="336.51" y1="563.62" x2="310.15" y2="563.62"></line></g><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M323.33,592.45"></path><line fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="323.33" y1="592.45" x2="323.33" y2="650"></line></g></g><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><defs><clippath id="myClip2"><rect x="0" y="0" width="365" height="647"></rect></clippath></defs><g clip-path="url(#myClip2)"><rect x="0.6" y="88.9" class="void-0" width="363.6" height="557.6"></rect><rect x="0.6" y="0" class="p-color" width="363.6" height="88.9"></rect><text transform="matrix(1 0 0 1 38.2239 44.6331)" class="pt-color title">Text</text><rect x="42.4" y="65.2" class="void-1" width="280" height="350"></rect><rect x="42.4" y="454.8" class="void-1" width="280" height="190.5"></rect><g><circle class="s-color-dark" cx="322.7" cy="562" r="25.4"></circle><line class="fab-stroke pt-color-stroke st-color-stroke" x1="322.7" y1="549" x2="322.7" y2="574.2"></line><line class="fab-stroke pt-color-stroke st-color-stroke" x1="335.3" y1="561.6" x2="310.1" y2="561.6"></line></g><g><path class="s-color-dark" d="M163.5,224.7l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H163.5z"></path><path class="s-color-dark" d="M215.2,223.7c0,0.3,0,0.6,0,1H267L215.2,135l-25.5,44.1C205,188.1,215.2,204.7,215.2,223.7z"></path><path class="s-color-light" d="M215.2,224.7c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6l-26.3,45.5H215.2z"></path></g><g><g><path class="s-color-dark" d="M163.5,614.2l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H163.5z"></path><path class="s-color-dark" d="M215.2,613.3c0,0.3,0,0.6,0,1H267l-51.7-89.6l-25.5,44.1C205,577.7,215.2,594.3,215.2,613.3z"></path><path class="s-color-light" d="M215.2,614.2c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6l-26.3,45.5H215.2z"></path></g></g><g><path class="s-color" d="M304.2,393.4c0,1-0.7,1.8-1.7,1.8h-84.7c-0.9,0-1.6-0.8-1.6-1.8V361c0-1,0.7-1.8,1.6-1.8h84.7 c0.9,0,1.7,0.8,1.7,1.8V393.4z"></path><g><path fill="#767676" class="opacity-87 pt-color st-color" d="M250.22,373.21h-3.6v9.99h-1.92v-9.99h-3.6v-1.54h9.12V373.21z"></path><path fill="#767676" class="opacity-87 pt-color st-color" d="M258.95,378.01h-5.04v3.65h5.85v1.54h-7.78v-11.53h7.72v1.54h-5.8v3.26h5.04V378.01z"></path><path fill="#767676" class="opacity-87 pt-color st-color" d="M265.32,375.93l2.44-4.26h2.27l-3.54,5.72l3.68,5.81h-2.31l-2.51-4.33l-2.5,4.33h-2.27l3.62-5.81 l-3.54-5.72h2.26L265.32,375.93z"></path><path fill="#767676" class="opacity-87 pt-color st-color" d="M280.12,373.21h-3.6v9.99h-1.92v-9.99H271v-1.54h9.12V373.21z"></path></g></g></g></svg></div></div>'), e.put("app/components/ui-mobile/tmpl/ui-mobile-4.html", '<div class="ui-mobile-4 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><g><defs><rect id="SVGID_1_" x="0" width="365" height="650"></rect></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clippath><g clip-path="url(#SVGID_2_)"><rect x="301.12" y="89.22" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="63.88" height="560.78"></rect><rect x="301.12" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="63.88" height="89.22"></rect><rect x="301.12" y="559.67" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="63.88" height="90.33"></rect><rect x="301.12" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="63.88" height="24.33"></rect><rect fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="301.12" height="650"></rect><rect fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="301.12" height="301.28"></rect><g id="XMLID_125_"><path id="XMLID_126_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M124.67,171.15l26.39-45.71 c-7.74-4.57-16.75-7.21-26.39-7.21c-28.69,0-51.94,23.25-51.94,51.94c0,28.69,23.26,51.94,51.94,51.94 c28.36,0,51.39-22.73,51.92-50.96H124.67z"></path><path id="XMLID_127_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M176.61,170.17c0,0.33-0.02,0.65-0.02,0.98 h51.97l-51.94-89.96l-25.55,44.25C166.35,134.48,176.61,151.12,176.61,170.17z"></path><path id="XMLID_128_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M176.59,171.15c0.01-0.33,0.02-0.65,0.02-0.98 c0-19.05-10.26-35.69-25.55-44.73l-26.39,45.71H176.59z"></path></g><g><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M256.82,446.28h-12.91c-3.88,0-7.03,3.15-7.03,7.03v0 c0,3.88,3.15,7.03,7.03,7.03h12.91c-1.78-1.81-2.88-4.29-2.88-7.03C253.94,450.57,255.04,448.09,256.82,446.28z"></path><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M263.98,443.27c-2.81,0-5.34,1.15-7.16,3.01 c-1.78,1.81-2.88,4.29-2.88,7.03c0,2.74,1.1,5.22,2.88,7.03c1.82,1.86,4.36,3.01,7.16,3.01c5.54,0,10.04-4.49,10.04-10.04 C274.02,447.76,269.52,443.27,263.98,443.27z"></path></g><rect y="301.28" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="301.12" height="80.3"></rect><g><g><path fill="#767676" d="M28.88,330.02h5.5v1.18h-6.96v-11.53h1.47V330.02z"></path><path fill="#767676" d="M36.41,326.83c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.81,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V326.83z M37.89,327.02c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V327.02z"></path><path fill="#767676" d="M50.91,323.95l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1H46.8v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L50.91,323.95z"></path><path fill="#767676" d="M56.64,331.36c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.06c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02s0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C57.96,331.26,57.36,331.36,56.64,331.36z M56.4,323.66c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58S57.08,323.66,56.4,323.66z"></path><path fill="#767676" d="M63.79,322.63l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97s0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.5,0.4c0.41,0.27,0.71,0.68,0.92,1.24c0.27-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.59,0.29,2.08,0.87c0.49,0.58,0.74,1.48,0.74,2.71v5.15h-1.47v-5.16c0-0.87-0.15-1.48-0.44-1.83s-0.74-0.52-1.33-0.52 c-0.59,0.01-1.05,0.2-1.39,0.59c-0.34,0.39-0.54,0.87-0.59,1.46v0.01v5.46H67.7v-5.17c0-0.83-0.15-1.43-0.45-1.79 c-0.3-0.36-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.73,0.9v6.29h-1.47v-8.57H63.79z"></path><path fill="#767676" d="M83.92,320.41h-1.47v-1.57h1.47V320.41z M83.92,331.2h-1.47v-8.57h1.47V331.2z"></path><path fill="#767676" d="M94.41,327.23c0,1.27-0.29,2.27-0.87,3.01c-0.58,0.74-1.4,1.11-2.46,1.11c-0.54,0-1.01-0.09-1.41-0.27 c-0.4-0.18-0.73-0.44-1.01-0.8l-0.02,0.01v4.19h-1.47v-11.87h1.26l0.14,1.09c0.29-0.41,0.63-0.72,1.04-0.93 c0.41-0.21,0.89-0.32,1.46-0.32c1.08,0,1.9,0.41,2.48,1.24s0.87,1.94,0.87,3.35V327.23z M92.93,327.07 c0-1.01-0.19-1.82-0.57-2.44c-0.38-0.62-0.96-0.93-1.73-0.93c-0.48,0-0.88,0.11-1.21,0.32c-0.32,0.21-0.59,0.5-0.79,0.87v4.13 c0.21,0.38,0.48,0.66,0.8,0.86c0.32,0.2,0.72,0.3,1.22,0.3c0.77,0,1.35-0.27,1.72-0.8c0.38-0.54,0.57-1.25,0.57-2.14V327.07z"></path><path fill="#767676" d="M102.17,328.94c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78c0.58-0.48,1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9c0,0.35,0.12,0.63,0.36,0.82s0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S102.17,329.32,102.17,328.94z"></path><path fill="#767676" d="M111.89,329.95l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36 c-0.95,0-1.68-0.29-2.19-0.88c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52 c0.59,0,1.07-0.12,1.43-0.34s0.64-0.56,0.83-1v-6.16h1.47v8.57h-1.31L111.89,329.95z"></path><path fill="#767676" d="M117.74,322.63l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97s0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.5,0.4c0.41,0.27,0.71,0.68,0.92,1.24c0.27-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.59,0.29,2.08,0.87c0.49,0.58,0.74,1.48,0.74,2.71v5.15h-1.47v-5.16c0-0.87-0.15-1.48-0.44-1.83s-0.74-0.52-1.33-0.52 c-0.59,0.01-1.05,0.2-1.39,0.59c-0.34,0.39-0.54,0.87-0.59,1.46v0.01v5.46h-1.47v-5.17c0-0.83-0.15-1.43-0.45-1.79 c-0.3-0.36-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.73,0.9v6.29h-1.47v-8.57H117.74z"></path><path fill="#767676" d="M135.91,327.07c0-1.4,0.29-2.52,0.86-3.35c0.58-0.83,1.4-1.24,2.48-1.24c0.53,0,0.98,0.1,1.37,0.29 c0.39,0.19,0.72,0.47,0.99,0.84l0.02-0.01v-4.74h1.47v12.36h-1.28l-0.13-1.07c-0.29,0.41-0.63,0.72-1.03,0.92 s-0.88,0.3-1.43,0.3c-1.06,0-1.88-0.37-2.46-1.12c-0.58-0.75-0.87-1.75-0.87-3.01V327.07z M137.38,327.23 c0,0.9,0.18,1.61,0.53,2.13c0.36,0.52,0.92,0.78,1.69,0.78c0.5,0,0.91-0.11,1.23-0.32c0.32-0.22,0.59-0.53,0.81-0.93v-3.98 c-0.21-0.38-0.48-0.68-0.81-0.9c-0.33-0.22-0.73-0.32-1.21-0.32c-0.78,0-1.34,0.31-1.7,0.93c-0.36,0.62-0.54,1.43-0.54,2.45 V327.23z"></path><path fill="#767676" d="M145.88,326.83c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.81,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V326.83z M147.36,327.02c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V327.02z"></path><path fill="#767676" d="M157.86,331.2h-1.47v-12.36h1.47V331.2z"></path><path fill="#767676" d="M160.72,326.83c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.81,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V326.83z M162.19,327.02c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V327.02z"></path><path fill="#767676" d="M175.22,323.95l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L175.22,323.95z"></path><path fill="#767676" d="M187.4,328.94c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78c0.58-0.48,1.34-0.72,2.3-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03s-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37s-0.42,0.55-0.42,0.9c0,0.35,0.12,0.63,0.36,0.82s0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94s0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34C187.25,329.62,187.4,329.32,187.4,328.94z"></path><path fill="#767676" d="M193.25,320.41h-1.46v-1.57h1.46V320.41z M193.25,331.2h-1.46v-8.57h1.46V331.2z"></path><path fill="#767676" d="M198.28,320.55v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H198.28z"></path><path fill="#767676" d="M212.59,331.2c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67s-0.68-1.07-0.68-1.88 c0-0.83,0.33-1.48,0.98-1.93c0.66-0.45,1.56-0.68,2.73-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22s-0.78-0.44-1.38-0.44 c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76c0.63-0.52,1.45-0.77,2.46-0.77 c0.99,0,1.78,0.24,2.36,0.73s0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88c0.03,0.28,0.09,0.56,0.17,0.85H212.59z M209.99,330.1c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7c-0.68,0-1.22,0.16-1.61,0.48 c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93C209.13,329.99,209.5,330.1,209.99,330.1z"></path><path fill="#767676" d="M218.31,322.63l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97s0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.51,0.4c0.41,0.27,0.71,0.68,0.92,1.24c0.28-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.58,0.29,2.08,0.87c0.49,0.58,0.74,1.48,0.74,2.71v5.15h-1.47v-5.16c0-0.87-0.15-1.48-0.44-1.83 c-0.29-0.35-0.74-0.52-1.33-0.52c-0.59,0.01-1.05,0.2-1.39,0.59c-0.34,0.39-0.54,0.87-0.59,1.46v0.01v5.46h-1.47v-5.17 c0-0.83-0.15-1.43-0.45-1.79c-0.3-0.36-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.72,0.9v6.29 h-1.47v-8.57H218.31z"></path><path fill="#767676" d="M235.54,331.36c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.06s1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S236.26,331.36,235.54,331.36z M235.31,323.66c-0.55,0-1.02,0.22-1.41,0.67 c-0.38,0.45-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C236.49,323.87,235.98,323.66,235.31,323.66z"></path><path fill="#767676" d="M243.16,320.55v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H243.16z"></path><path fill="#767676" d="M248.64,330.65c0,0.53-0.12,1.07-0.36,1.61s-0.58,1.01-1.01,1.38l-0.83-0.57 c0.25-0.39,0.44-0.77,0.56-1.15s0.18-0.8,0.18-1.25v-1.2h1.46V330.65z"></path><path fill="#767676" d="M30.56,355.27c0.54,0,1.02-0.16,1.41-0.48c0.4-0.32,0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 s-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87c0.63,0.58,0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.53,1.32-0.53,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C29.1,354.98,29.7,355.27,30.56,355.27z"></path><path fill="#767676" d="M36.12,351.92c0-1.29,0.34-2.34,1.01-3.15c0.68-0.8,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.81,1.02,1.86,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V351.92z M37.59,352.11c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V352.11z"></path><path fill="#767676" d="M47.83,347.72l0.1,1.28l0.02,0.01c0.28-0.46,0.63-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.74,1.37,0.74,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.63,0.54-0.85,0.95v6.22h-1.47v-8.57H47.83z"></path><path fill="#767676" d="M61.51,354.03c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78s1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.54 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S61.51,354.41,61.51,354.03z"></path><path fill="#767676" d="M69.3,356.45c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C70.62,356.35,70.01,356.45,69.3,356.45z M69.06,348.75c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C70.24,348.96,69.73,348.75,69.06,348.75z"></path><path fill="#767676" d="M78.57,355.27c0.54,0,1.02-0.16,1.41-0.48c0.4-0.32,0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 s-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87c0.63,0.58,0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.53,1.32-0.53,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C77.11,354.98,77.71,355.27,78.57,355.27z"></path><path fill="#767676" d="M86.3,345.64v2.08h1.65v1.12H86.3v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22s-0.49,0.08-0.73,0.08 c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24H83.6v-1.12h1.23v-2.08H86.3z"></path><path fill="#767676" d="M94.02,356.45c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96H91.6 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C95.34,356.35,94.74,356.45,94.02,356.45z M93.78,348.75c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C94.96,348.96,94.46,348.75,93.78,348.75z"></path><path fill="#767676" d="M101.63,345.64v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22s-0.49,0.08-0.73,0.08 c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08H101.63z"></path><path fill="#767676" d="M111.29,355.04l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36 c-0.95,0-1.68-0.29-2.19-0.88c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52 c0.59,0,1.07-0.12,1.43-0.34s0.64-0.56,0.83-1v-6.16h1.47v8.57h-1.31L111.29,355.04z"></path><path fill="#767676" d="M119.94,349.05l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L119.94,349.05z"></path><path fill="#767676" d="M132.41,356.29c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67c-0.46-0.45-0.69-1.07-0.69-1.88 c0-0.83,0.33-1.48,0.98-1.93s1.56-0.68,2.72-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22s-0.78-0.44-1.38-0.44 c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76c0.63-0.51,1.45-0.77,2.46-0.77 c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88c0.03,0.28,0.09,0.56,0.17,0.85 H132.41z M129.81,355.19c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7c-0.68,0-1.22,0.16-1.61,0.48 c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93S129.32,355.19,129.81,355.19z"></path><path fill="#767676" d="M136.46,352.16c0-1.4,0.29-2.52,0.86-3.35c0.58-0.83,1.4-1.24,2.48-1.24c0.53,0,0.98,0.09,1.37,0.29 c0.39,0.19,0.72,0.47,0.99,0.84l0.02-0.01v-4.74h1.47v12.36h-1.28l-0.13-1.07c-0.29,0.41-0.63,0.72-1.03,0.92 s-0.88,0.3-1.43,0.3c-1.06,0-1.88-0.37-2.46-1.12c-0.58-0.75-0.87-1.75-0.87-3.01V352.16z M137.93,352.33 c0,0.9,0.18,1.61,0.53,2.13c0.36,0.52,0.92,0.78,1.69,0.78c0.5,0,0.91-0.11,1.23-0.32c0.32-0.22,0.59-0.53,0.81-0.93v-3.98 c-0.21-0.38-0.48-0.68-0.81-0.9c-0.33-0.22-0.73-0.32-1.21-0.32c-0.78,0-1.34,0.31-1.7,0.93c-0.36,0.62-0.54,1.43-0.54,2.45 V352.33z"></path><path fill="#767676" d="M148.41,345.51h-1.47v-1.57h1.47V345.51z M148.41,356.29h-1.47v-8.57h1.47V356.29z"></path><path fill="#767676" d="M158.9,352.33c0,1.27-0.29,2.27-0.87,3.01c-0.58,0.74-1.4,1.11-2.46,1.11c-0.54,0-1.01-0.09-1.41-0.27 c-0.4-0.18-0.73-0.44-1.01-0.8l-0.02,0.01v4.19h-1.47v-11.87h1.26l0.14,1.09c0.29-0.41,0.63-0.72,1.04-0.93 c0.41-0.21,0.89-0.32,1.46-0.32c1.08,0,1.9,0.41,2.48,1.24s0.87,1.94,0.87,3.35V352.33z M157.43,352.16 c0-1.01-0.19-1.82-0.57-2.44c-0.38-0.62-0.96-0.93-1.73-0.93c-0.48,0-0.88,0.11-1.21,0.32s-0.59,0.5-0.79,0.87v4.13 c0.21,0.38,0.48,0.66,0.8,0.86c0.32,0.2,0.72,0.3,1.22,0.3c0.77,0,1.35-0.27,1.72-0.8c0.38-0.54,0.57-1.25,0.57-2.14V352.16z"></path><path fill="#767676" d="M163.25,345.51h-1.47v-1.57h1.47V345.51z M163.25,356.29h-1.47v-8.57h1.47V356.29z"></path><path fill="#767676" d="M171.5,354.03c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78s1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.54 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S171.5,354.41,171.5,354.03z"></path><path fill="#767676" d="M179.19,355.27c0.54,0,1.02-0.16,1.41-0.48c0.4-0.32,0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 s-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87c0.63,0.58,0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.53,1.32-0.53,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C177.73,354.98,178.33,355.27,179.19,355.27z"></path><path fill="#767676" d="M186.73,345.51h-1.46v-1.57h1.46V345.51z M186.73,356.29h-1.46v-8.57h1.46V356.29z"></path><path fill="#767676" d="M191.3,347.72l0.1,1.28l0.02,0.01c0.28-0.46,0.64-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.75,1.37,0.75,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.64,0.54-0.85,0.95v6.22h-1.47v-8.57H191.3z"></path><path fill="#767676" d="M199.64,352.16c0-1.4,0.29-2.52,0.88-3.35c0.59-0.83,1.42-1.24,2.5-1.24c0.56,0,1.04,0.11,1.44,0.32 s0.74,0.54,1.03,0.97l0.14-1.13h1.24v8.46c0,1.13-0.32,2.01-0.96,2.63c-0.64,0.62-1.56,0.93-2.76,0.93 c-0.44,0-0.9-0.06-1.38-0.17s-0.91-0.29-1.32-0.51l0.37-1.09c0.35,0.17,0.72,0.32,1.11,0.42c0.39,0.11,0.79,0.16,1.19,0.16 c0.78,0,1.35-0.21,1.72-0.62c0.37-0.42,0.55-1,0.55-1.75v-0.83l-0.02-0.01c-0.27,0.37-0.61,0.65-1,0.83 c-0.39,0.19-0.85,0.28-1.38,0.28c-1.07,0-1.89-0.37-2.48-1.12c-0.59-0.75-0.88-1.75-0.88-3.01V352.16z M201.1,352.33 c0,0.89,0.18,1.6,0.55,2.12c0.36,0.52,0.93,0.78,1.71,0.78c0.5,0,0.91-0.11,1.23-0.33c0.32-0.22,0.59-0.53,0.81-0.95v-3.93 c-0.21-0.39-0.47-0.7-0.8-0.92c-0.33-0.22-0.74-0.33-1.23-0.33c-0.78,0-1.35,0.31-1.72,0.93c-0.37,0.62-0.55,1.43-0.55,2.44 V352.33z"></path><path fill="#767676" d="M218.33,356.45c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S219.04,356.45,218.33,356.45z M218.09,348.75c-0.55,0-1.02,0.22-1.41,0.67 c-0.38,0.45-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C219.27,348.96,218.76,348.75,218.09,348.75z"></path><path fill="#767676" d="M225.75,356.29h-1.46v-12.36h1.46V356.29z"></path><path fill="#767676" d="M230.59,345.51h-1.46v-1.57h1.46V345.51z M230.59,356.29h-1.46v-8.57h1.46V356.29z"></path><path fill="#767676" d="M235.61,345.64v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H235.61z"></path><path fill="#767676" d="M241.43,356.29h-1.49v-1.56h1.49V356.29z"></path></g></g></g></g><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><g><rect x="0.3" y="89.4" class="void-0" width="363.6" height="557.6"></rect><rect x="0.3" y="0.5" class="p-color" width="363.6" height="88.9"></rect><rect x="0.3" y="558.1" class="p-color-light" width="363.6" height="88.9"></rect><rect x="0.3" y="0.5" class="p-color-dark" width="363.6" height="24.2"></rect><rect x="0.3" y="0.5" class="void-1" width="363.6" height="646.5"></rect><rect x="0.3" y="0.5" class="void-2" width="300" height="646.5"></rect><rect x="0.3" y="0.5" class="s-color" width="300.2" height="300.2"></rect><g><path class="s-color-light" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path><path class="s-color-light" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path><path class="s-color-dark" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path></g></g><g><path class="s-color-dark" d="M263.3,349.1h-20c-3.9,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0 C270.3,345.9,267.1,349.1,263.3,349.1z"></path><circle class="s-color-light" cx="263.3" cy="342.1" r="10"></circle></g></svg></div></div>'),
        e.put("app/components/ui-mobile/tmpl/ui-mobile-5.html", '<div class="ui-mobile-5 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><g><defs><rect id="SVGID_1_" width="365" height="650"></rect></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clippath><g id="XMLID_136_" clip-path="url(#SVGID_2_)"><rect x="0" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="648.89"></rect><polyline fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" points="332.32,559.67 365,559.67 365,650 0,650 0,559.67 275.55,559.67"></polyline><rect x="0" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="24.33"></rect><rect x="42.58" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="279.83" height="350.81"></rect><rect x="344.72" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="20.28" height="350.81"></rect><rect x="0.14" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="20.06" height="350.81"></rect><g id="XMLID_137_"><circle id="XMLID_138_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" cx="303.93" cy="560.51" r="28.39"></circle><line id="XMLID_139_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="303.93" y1="546.89" x2="303.93" y2="573.25"></line><line fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="317.12" y1="560.07" x2="290.75" y2="560.07"></line></g><path fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" d="M125.37,267.21l57.13-98.96l57.13,98.96 c25.39,43.98-6.35,98.96-57.13,98.96h0C131.71,366.17,99.97,311.2,125.37,267.21z"></path><rect x="42.58" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="279.83" height="50.69"></rect><rect x="344.72" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="20.28" height="50.69"></rect><rect x="0" y="65.43" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="20.28" height="50.15"></rect><g><g><path fill="#767676" d="M75.96,83.42h-5.45v15.51h-2.2V83.42h-5.45v-1.78h13.1V83.42z"></path><path fill="#767676" d="M82.5,99.16c-1.8,0-3.23-0.58-4.27-1.75c-1.04-1.17-1.57-2.72-1.57-4.65v-0.53 c0-1.87,0.54-3.4,1.61-4.59c1.07-1.2,2.36-1.79,3.88-1.79c1.74,0,3.05,0.51,3.92,1.53s1.31,2.42,1.31,4.19V93h-8.51 c0.03,1.31,0.36,2.37,0.98,3.18c0.62,0.81,1.51,1.21,2.65,1.21c0.8,0,1.49-0.11,2.07-0.33c0.58-0.22,1.11-0.53,1.57-0.94 l0.87,1.46c-0.47,0.46-1.07,0.84-1.8,1.13C84.48,99.01,83.57,99.16,82.5,99.16z M82.14,87.62c-0.83,0-1.53,0.33-2.11,1 s-0.94,1.54-1.1,2.61h6.25v-0.31c0-0.96-0.25-1.75-0.76-2.37C83.91,87.93,83.15,87.62,82.14,87.62z"></path><path fill="#767676" d="M94.33,90.86l2.85-4.78h2.56l-4.19,6.35l4.32,6.49h-2.53l-2.97-4.92l-2.97,4.92h-2.56l4.33-6.49 l-4.2-6.35h2.54L94.33,90.86z"></path><path fill="#767676" d="M104.88,82.96v3.12h2.47v1.67h-2.47v7.86c0,0.63,0.11,1.07,0.32,1.32c0.21,0.25,0.51,0.37,0.88,0.37 c0.19,0,0.38-0.01,0.58-0.04c0.19-0.03,0.37-0.07,0.54-0.11l0.3,1.56c-0.21,0.13-0.49,0.24-0.86,0.33s-0.73,0.12-1.1,0.12 c-0.89,0-1.6-0.28-2.1-0.84c-0.51-0.56-0.76-1.46-0.76-2.71v-7.86h-1.84v-1.67h1.84v-3.12H104.88z"></path></g></g><g><g><path fill="#767676" d="M44.99,455.97h5.5v1.18h-6.96v-11.53h1.47V455.97z"></path><path fill="#767676" d="M52.53,452.78c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V452.78z M54,452.97c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9S54,451.86,54,452.78V452.97z"></path><path fill="#767676" d="M67.03,449.91l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L67.03,449.91z"></path><path fill="#767676" d="M72.76,457.31c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C74.08,457.21,73.47,457.31,72.76,457.31z M72.52,449.61c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C73.7,449.82,73.19,449.61,72.52,449.61z"></path><path fill="#767676" d="M79.9,448.58l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97c0.43-0.23,0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.5,0.4s0.71,0.68,0.92,1.24c0.27-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.59,0.29,2.08,0.87s0.74,1.48,0.74,2.71v5.15h-1.47V452c0-0.87-0.15-1.48-0.44-1.83s-0.74-0.52-1.33-0.52 c-0.59,0-1.05,0.2-1.39,0.59c-0.34,0.39-0.54,0.87-0.59,1.46v0.01v5.46h-1.47v-5.17c0-0.83-0.15-1.43-0.45-1.79 s-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.73,0.9v6.29h-1.47v-8.57H79.9z"></path><path fill="#767676" d="M100.03,446.37h-1.47v-1.57h1.47V446.37z M100.03,457.15h-1.47v-8.57h1.47V457.15z"></path><path fill="#767676" d="M110.52,453.18c0,1.27-0.29,2.27-0.87,3.01c-0.58,0.74-1.4,1.11-2.46,1.11c-0.54,0-1.01-0.09-1.41-0.26 c-0.4-0.18-0.73-0.44-1.01-0.8l-0.02,0.01v4.19h-1.47v-11.87h1.26l0.14,1.09c0.29-0.41,0.63-0.72,1.04-0.93 c0.41-0.21,0.89-0.32,1.46-0.32c1.08,0,1.9,0.41,2.48,1.24s0.87,1.94,0.87,3.35V453.18z M109.05,453.02 c0-1.01-0.19-1.82-0.57-2.44c-0.38-0.62-0.96-0.93-1.73-0.93c-0.48,0-0.88,0.11-1.21,0.32s-0.59,0.5-0.79,0.87v4.13 c0.21,0.38,0.48,0.66,0.8,0.86c0.32,0.2,0.72,0.3,1.22,0.3c0.77,0,1.35-0.27,1.72-0.8c0.38-0.54,0.57-1.25,0.57-2.14V453.02z"></path><path fill="#767676" d="M118.28,454.89c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78s1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S118.28,455.27,118.28,454.89z"></path><path fill="#767676" d="M128,455.9l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36c-0.95,0-1.68-0.29-2.19-0.88 c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52c0.59,0,1.07-0.11,1.43-0.34 c0.36-0.23,0.64-0.56,0.83-1v-6.16h1.47v8.57h-1.31L128,455.9z"></path><path fill="#767676" d="M133.85,448.58l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97c0.43-0.23,0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.5,0.4s0.71,0.68,0.92,1.24c0.27-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.59,0.29,2.08,0.87s0.74,1.48,0.74,2.71v5.15h-1.47V452c0-0.87-0.15-1.48-0.44-1.83s-0.74-0.52-1.33-0.52 c-0.59,0-1.05,0.2-1.39,0.59c-0.34,0.39-0.54,0.87-0.59,1.46v0.01v5.46h-1.47v-5.17c0-0.83-0.15-1.43-0.45-1.79 s-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.73,0.9v6.29h-1.47v-8.57H133.85z"></path><path fill="#767676" d="M152.03,453.02c0-1.4,0.29-2.52,0.86-3.35c0.58-0.83,1.4-1.24,2.48-1.24c0.53,0,0.98,0.09,1.37,0.29 c0.39,0.19,0.72,0.47,0.99,0.84l0.02-0.01v-4.74h1.47v12.36h-1.28l-0.13-1.07c-0.29,0.41-0.63,0.72-1.03,0.92 s-0.88,0.3-1.43,0.3c-1.06,0-1.88-0.37-2.46-1.12c-0.58-0.75-0.87-1.75-0.87-3.01V453.02z M153.49,453.18 c0,0.9,0.18,1.61,0.53,2.13c0.36,0.52,0.92,0.78,1.69,0.78c0.5,0,0.91-0.11,1.23-0.32c0.32-0.22,0.59-0.53,0.81-0.93v-3.98 c-0.21-0.38-0.48-0.68-0.81-0.9c-0.33-0.22-0.73-0.32-1.21-0.32c-0.78,0-1.34,0.31-1.7,0.93c-0.36,0.62-0.54,1.43-0.54,2.45 V453.18z"></path><path fill="#767676" d="M161.99,452.78c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V452.78z M163.47,452.97c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V452.97z"></path><path fill="#767676" d="M173.97,457.15h-1.47V444.8h1.47V457.15z"></path><path fill="#767676" d="M176.83,452.78c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V452.78z M178.3,452.97c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V452.97z"></path><path fill="#767676" d="M191.33,449.91l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.32l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.89-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L191.33,449.91z"></path><path fill="#767676" d="M203.52,454.89c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91s-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78c0.58-0.48,1.34-0.72,2.3-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94s0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81s-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34C203.36,455.57,203.52,455.27,203.52,454.89z"></path><path fill="#767676" d="M209.37,446.37h-1.46v-1.57h1.46V446.37z M209.37,457.15h-1.46v-8.57h1.46V457.15z"></path><path fill="#767676" d="M214.39,446.5v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.58,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H214.39z"></path><path fill="#767676" d="M228.7,457.15c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67s-0.68-1.07-0.68-1.88 c0-0.83,0.33-1.48,0.98-1.93c0.66-0.45,1.56-0.68,2.73-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22 c-0.32-0.29-0.78-0.44-1.38-0.44c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76 c0.63-0.51,1.45-0.77,2.46-0.77c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88 c0.03,0.28,0.09,0.56,0.17,0.85H228.7z M226.1,456.05c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7 c-0.68,0-1.22,0.16-1.61,0.48c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93 C225.25,455.94,225.61,456.05,226.1,456.05z"></path><path fill="#767676" d="M234.42,448.58l0.1,1.14l0.02,0.01c0.27-0.42,0.62-0.74,1.05-0.97c0.42-0.23,0.93-0.34,1.52-0.34 c0.6,0,1.1,0.13,1.51,0.4c0.41,0.27,0.71,0.68,0.92,1.24c0.28-0.51,0.63-0.91,1.07-1.2c0.44-0.29,0.97-0.44,1.59-0.44 c0.89,0,1.58,0.29,2.08,0.87c0.49,0.58,0.74,1.48,0.74,2.71v5.15h-1.47V452c0-0.87-0.15-1.48-0.44-1.83 c-0.29-0.35-0.74-0.52-1.33-0.52c-0.59,0-1.05,0.2-1.39,0.59s-0.54,0.87-0.59,1.46v0.01v5.46h-1.47v-5.17 c0-0.83-0.15-1.43-0.45-1.79s-0.75-0.55-1.34-0.55c-0.51,0-0.93,0.11-1.24,0.32c-0.31,0.21-0.56,0.51-0.72,0.9v6.29h-1.47v-8.57 H234.42z"></path><path fill="#767676" d="M251.66,457.31c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S252.37,457.31,251.66,457.31z M251.42,449.61c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C252.6,449.82,252.09,449.61,251.42,449.61z"></path><path fill="#767676" d="M259.27,446.5v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.58,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H259.27z"></path><path fill="#767676" d="M264.75,456.6c0,0.53-0.12,1.07-0.36,1.61c-0.24,0.55-0.58,1.01-1.01,1.38l-0.83-0.57 c0.25-0.39,0.44-0.77,0.56-1.15s0.18-0.8,0.18-1.25v-1.2h1.46V456.6z"></path><path fill="#767676" d="M275.72,456.13c0.54,0,1.02-0.16,1.41-0.48s0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 c-0.67,0.56-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87s0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.54,1.32-0.54,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C274.26,455.84,274.87,456.13,275.72,456.13z"></path><path fill="#767676" d="M281.29,452.78c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V452.78z M282.76,452.97c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27s-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9c-0.39,0.6-0.59,1.35-0.59,2.27V452.97z"></path><path fill="#767676" d="M293,448.58l0.1,1.28l0.02,0.01c0.28-0.46,0.64-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.75,1.37,0.75,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.64,0.54-0.85,0.95v6.22h-1.47v-8.57H293z"></path><path fill="#767676" d="M304.68,452.84h-3.87v-1.18h3.87V452.84z"></path><path fill="#767676" d="M48.24,479.96c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78s1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S48.24,480.34,48.24,479.96z"></path><path fill="#767676" d="M56.02,482.39c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96H53.6 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C57.34,482.29,56.74,482.39,56.02,482.39z M55.78,474.69c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C56.96,474.89,56.46,474.69,55.78,474.69z"></path><path fill="#767676" d="M65.29,481.21c0.54,0,1.02-0.16,1.41-0.48c0.4-0.32,0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 c-0.67,0.56-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87c0.63,0.58,0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.53,1.32-0.53,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C63.83,480.92,64.44,481.21,65.29,481.21z"></path><path fill="#767676" d="M73.02,471.57v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03s0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22s-0.49,0.08-0.73,0.08 c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08H73.02z"></path><path fill="#767676" d="M80.74,482.39c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C82.06,482.29,81.46,482.39,80.74,482.39z M80.51,474.69c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C81.69,474.89,81.18,474.69,80.51,474.69z"></path><path fill="#767676" d="M88.36,471.57v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03s0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22s-0.49,0.08-0.73,0.08 c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08H88.36z"></path><path fill="#767676" d="M98.02,480.98l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36 c-0.95,0-1.68-0.29-2.19-0.88c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52 c0.59,0,1.07-0.11,1.43-0.34c0.36-0.23,0.64-0.56,0.83-1v-6.16h1.47v8.57h-1.31L98.02,480.98z"></path><path fill="#767676" d="M106.66,474.98l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L106.66,474.98z"></path><path fill="#767676" d="M119.14,482.23c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67c-0.46-0.45-0.69-1.07-0.69-1.88 c0-0.83,0.33-1.48,0.98-1.93s1.56-0.68,2.72-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22c-0.32-0.29-0.78-0.44-1.38-0.44 c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76c0.63-0.51,1.45-0.77,2.46-0.77 c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88c0.03,0.28,0.09,0.56,0.17,0.85 H119.14z M116.54,481.13c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7c-0.68,0-1.22,0.16-1.61,0.48 c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93S116.05,481.13,116.54,481.13z"></path><path fill="#767676" d="M123.19,478.09c0-1.4,0.29-2.52,0.86-3.35c0.58-0.83,1.4-1.24,2.48-1.24c0.53,0,0.98,0.09,1.37,0.29 c0.39,0.19,0.72,0.47,0.99,0.84l0.02-0.01v-4.74h1.47v12.36h-1.28l-0.13-1.07c-0.29,0.41-0.63,0.72-1.03,0.92 s-0.88,0.3-1.43,0.3c-1.06,0-1.88-0.37-2.46-1.12c-0.58-0.75-0.87-1.75-0.87-3.01V478.09z M124.65,478.26 c0,0.9,0.18,1.61,0.53,2.13c0.36,0.52,0.92,0.78,1.69,0.78c0.5,0,0.91-0.11,1.23-0.32c0.32-0.22,0.59-0.53,0.81-0.93v-3.98 c-0.21-0.38-0.48-0.68-0.81-0.9c-0.33-0.22-0.73-0.32-1.21-0.32c-0.78,0-1.34,0.31-1.7,0.93c-0.36,0.62-0.54,1.43-0.54,2.45 V478.26z"></path><path fill="#767676" d="M135.14,471.44h-1.47v-1.57h1.47V471.44z M135.14,482.23h-1.47v-8.57h1.47V482.23z"></path><path fill="#767676" d="M145.63,478.26c0,1.27-0.29,2.27-0.87,3.01c-0.58,0.74-1.4,1.11-2.46,1.11c-0.54,0-1.01-0.09-1.41-0.26 c-0.4-0.18-0.73-0.44-1.01-0.8l-0.02,0.01v4.19h-1.47v-11.87h1.26l0.14,1.09c0.29-0.41,0.63-0.72,1.04-0.93 c0.41-0.21,0.89-0.32,1.46-0.32c1.08,0,1.9,0.41,2.48,1.24s0.87,1.94,0.87,3.35V478.26z M144.15,478.09 c0-1.01-0.19-1.82-0.57-2.44c-0.38-0.62-0.96-0.93-1.73-0.93c-0.48,0-0.88,0.11-1.21,0.32s-0.59,0.5-0.79,0.87v4.13 c0.21,0.38,0.48,0.66,0.8,0.86c0.32,0.2,0.72,0.3,1.22,0.3c0.77,0,1.35-0.27,1.72-0.8c0.38-0.54,0.57-1.25,0.57-2.14V478.09z"></path><path fill="#767676" d="M149.97,471.44h-1.47v-1.57h1.47V471.44z M149.97,482.23h-1.47v-8.57h1.47V482.23z"></path><path fill="#767676" d="M158.22,479.96c0-0.36-0.13-0.65-0.4-0.88c-0.26-0.22-0.78-0.42-1.54-0.58 c-1.06-0.23-1.84-0.53-2.35-0.91c-0.51-0.38-0.76-0.91-0.76-1.59c0-0.71,0.29-1.3,0.86-1.78s1.34-0.72,2.31-0.72 c1.01,0,1.81,0.25,2.39,0.76c0.58,0.5,0.87,1.14,0.87,1.91h-1.47c0-0.39-0.16-0.74-0.48-1.03c-0.32-0.3-0.76-0.45-1.31-0.45 c-0.58,0-1.01,0.12-1.29,0.37c-0.28,0.25-0.42,0.55-0.42,0.9s0.12,0.63,0.36,0.82c0.24,0.19,0.74,0.37,1.51,0.53 c1.09,0.24,1.9,0.55,2.41,0.94c0.52,0.39,0.77,0.93,0.77,1.61c0,0.77-0.3,1.38-0.9,1.84c-0.6,0.46-1.4,0.68-2.41,0.68 c-1.1,0-1.96-0.27-2.58-0.81c-0.62-0.54-0.92-1.2-0.92-1.98h1.47c0.03,0.58,0.24,0.99,0.63,1.24c0.39,0.25,0.86,0.37,1.4,0.37 c0.59,0,1.05-0.11,1.37-0.34S158.22,480.34,158.22,479.96z"></path><path fill="#767676" d="M165.91,481.21c0.54,0,1.02-0.16,1.41-0.48c0.4-0.32,0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 c-0.67,0.56-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87c0.63,0.58,0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.53,1.32-0.53,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C164.45,480.92,165.06,481.21,165.91,481.21z"></path><path fill="#767676" d="M173.46,471.44h-1.47v-1.57h1.47V471.44z M173.46,482.23h-1.47v-8.57h1.47V482.23z"></path><path fill="#767676" d="M178.02,473.66l0.1,1.28l0.02,0.01c0.28-0.46,0.63-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.74,1.37,0.74,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.63,0.54-0.85,0.95v6.22h-1.47v-8.57H178.02z"></path><path fill="#767676" d="M186.36,478.09c0-1.4,0.29-2.52,0.88-3.35c0.59-0.83,1.42-1.24,2.5-1.24c0.56,0,1.04,0.11,1.44,0.32 s0.74,0.54,1.03,0.97l0.14-1.13h1.24v8.46c0,1.13-0.32,2.01-0.96,2.63c-0.64,0.62-1.56,0.93-2.76,0.93 c-0.44,0-0.9-0.06-1.38-0.17s-0.91-0.29-1.32-0.51l0.37-1.09c0.35,0.17,0.72,0.32,1.11,0.42c0.39,0.11,0.79,0.16,1.19,0.16 c0.78,0,1.35-0.21,1.72-0.62c0.37-0.42,0.55-1,0.55-1.75v-0.83l-0.02-0.01c-0.27,0.37-0.61,0.65-1,0.83 c-0.39,0.19-0.85,0.28-1.38,0.28c-1.07,0-1.89-0.37-2.48-1.12c-0.59-0.75-0.88-1.75-0.88-3.01V478.09z M187.83,478.26 c0,0.89,0.18,1.6,0.55,2.12c0.36,0.52,0.93,0.78,1.71,0.78c0.5,0,0.91-0.11,1.23-0.33c0.32-0.22,0.59-0.54,0.81-0.95v-3.93 c-0.21-0.39-0.47-0.7-0.8-0.92c-0.33-0.22-0.74-0.33-1.23-0.33c-0.78,0-1.35,0.31-1.72,0.93c-0.37,0.62-0.55,1.43-0.55,2.44 V478.26z"></path><path fill="#767676" d="M205.05,482.39c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S205.77,482.39,205.05,482.39z M204.81,474.69c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C206,474.89,205.49,474.69,204.81,474.69z"></path><path fill="#767676" d="M212.48,482.23h-1.46v-12.36h1.46V482.23z"></path><path fill="#767676" d="M217.31,471.44h-1.46v-1.57h1.46V471.44z M217.31,482.23h-1.46v-8.57h1.46V482.23z"></path><path fill="#767676" d="M222.34,471.57v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.58,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H222.34z"></path><path fill="#767676" d="M228.15,482.23h-1.49v-1.56h1.49V482.23z"></path><path fill="#767676" d="M236.73,482.23v-11.53h3.51c1.53,0,2.75,0.46,3.64,1.37c0.9,0.91,1.35,2.12,1.35,3.62v1.56 c0,1.51-0.45,2.72-1.36,3.62s-2.17,1.36-3.77,1.36H236.73z M238.2,471.88v9.16h1.9c1.23,0,2.14-0.34,2.75-1.03 s0.91-1.61,0.91-2.77v-1.58c0-1.18-0.3-2.1-0.9-2.78c-0.6-0.67-1.47-1.01-2.62-1.01H238.2z"></path><path fill="#767676" d="M247.83,477.86c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V477.86z M249.3,478.04c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27s-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9c-0.39,0.6-0.59,1.35-0.59,2.27V478.04z"></path><path fill="#767676" d="M259.54,473.66l0.1,1.28l0.02,0.01c0.28-0.46,0.64-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.75,1.37,0.75,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.64,0.54-0.85,0.95v6.22h-1.47v-8.57H259.54z"></path><path fill="#767676" d="M271.74,482.39c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S272.46,482.39,271.74,482.39z M271.5,474.69c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C272.69,474.89,272.18,474.69,271.5,474.69z"></path><path fill="#767676" d="M281.01,481.21c0.54,0,1.02-0.16,1.41-0.48s0.6-0.72,0.61-1.2h1.39c0,0.78-0.34,1.45-1.02,2.02 c-0.67,0.56-1.47,0.84-2.4,0.84c-1.26,0-2.21-0.4-2.85-1.2c-0.64-0.8-0.97-1.83-0.97-3.08v-0.33c0-1.25,0.32-2.27,0.97-3.07 c0.64-0.8,1.59-1.2,2.85-1.2c1.01,0,1.83,0.29,2.46,0.87s0.95,1.33,0.95,2.23h-1.39c-0.01-0.55-0.2-1.01-0.57-1.37 s-0.86-0.55-1.45-0.55c-0.85,0-1.45,0.29-1.81,0.88s-0.54,1.32-0.54,2.21v0.33c0,0.9,0.18,1.65,0.53,2.23 C279.55,480.92,280.16,481.21,281.01,481.21z"></path><path fill="#767676" d="M46.03,504.82l0.17,0.74h0.02l0.18-0.74l2.03-6.08h1.5l-3.17,8.57h-1.12l-3.2-8.57h1.5L46.03,504.82z"></path><path fill="#767676" d="M53.76,496.51H52.3v-1.57h1.47V496.51z M53.76,507.3H52.3v-8.57h1.47V507.3z"></path><path fill="#767676" d="M59.8,504.82l0.17,0.74H60l0.18-0.74l2.03-6.08h1.5l-3.17,8.57h-1.12l-3.2-8.57h1.5L59.8,504.82z"></path><path fill="#767676" d="M69.36,507.46c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C70.69,507.36,70.08,507.46,69.36,507.46z M69.13,499.76c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C70.31,499.97,69.8,499.76,69.13,499.76z"></path><path fill="#767676" d="M79.31,500.05l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1H75.2v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L79.31,500.05z"></path><path fill="#767676" d="M85.78,500.05l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L85.78,500.05z"></path><path fill="#767676" d="M93.42,507.3c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67c-0.46-0.45-0.69-1.07-0.69-1.88 c0-0.83,0.33-1.48,0.98-1.93s1.56-0.68,2.72-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22c-0.32-0.29-0.78-0.44-1.38-0.44 c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76c0.63-0.51,1.45-0.77,2.46-0.77 c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88c0.03,0.28,0.09,0.56,0.17,0.85H93.42 z M90.83,506.2c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7c-0.68,0-1.22,0.16-1.61,0.48 c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93S90.33,506.2,90.83,506.2z"></path><path fill="#767676" d="M106.18,507.46c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C107.5,507.36,106.9,507.46,106.18,507.46z M105.94,499.76 c-0.55,0-1.02,0.22-1.41,0.67s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58 C107.13,499.97,106.62,499.76,105.94,499.76z"></path><path fill="#767676" d="M111.67,503.17c0-1.4,0.29-2.52,0.88-3.35c0.59-0.83,1.42-1.24,2.5-1.24c0.56,0,1.04,0.11,1.44,0.32 s0.74,0.54,1.03,0.97l0.14-1.13h1.24v8.46c0,1.13-0.32,2.01-0.96,2.63c-0.64,0.62-1.56,0.93-2.76,0.93 c-0.44,0-0.9-0.06-1.37-0.17c-0.47-0.12-0.91-0.29-1.32-0.51l0.37-1.09c0.35,0.17,0.72,0.32,1.11,0.42 c0.39,0.11,0.79,0.16,1.19,0.16c0.78,0,1.35-0.21,1.72-0.62c0.37-0.42,0.55-1,0.55-1.75v-0.83l-0.02-0.01 c-0.27,0.37-0.61,0.65-1,0.83c-0.39,0.19-0.85,0.28-1.38,0.28c-1.07,0-1.89-0.37-2.48-1.12c-0.59-0.75-0.88-1.75-0.88-3.01 V503.17z M113.14,503.33c0,0.89,0.18,1.6,0.55,2.12s0.93,0.78,1.71,0.78c0.5,0,0.91-0.11,1.23-0.33 c0.32-0.22,0.6-0.54,0.81-0.95v-3.93c-0.21-0.39-0.47-0.7-0.8-0.92c-0.33-0.22-0.74-0.33-1.23-0.33c-0.78,0-1.35,0.31-1.72,0.93 c-0.37,0.62-0.55,1.43-0.55,2.44V503.33z"></path><path fill="#767676" d="M125.54,507.46c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C126.86,507.36,126.26,507.46,125.54,507.46z M125.3,499.76 c-0.55,0-1.02,0.22-1.41,0.67s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58 C126.49,499.97,125.98,499.76,125.3,499.76z"></path><path fill="#767676" d="M133.16,496.65v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03s0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.57,0.22s-0.49,0.08-0.73,0.08 c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08H133.16z"></path><path fill="#767676" d="M143.5,498.73l0.1,1.28l0.02,0.01c0.28-0.46,0.63-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.74,1.37,0.74,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.63,0.54-0.85,0.95v6.22h-1.47v-8.57H143.5z"></path><path fill="#767676" d="M157.64,506.05l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36 c-0.95,0-1.68-0.29-2.19-0.88c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52 c0.59,0,1.07-0.11,1.43-0.34c0.36-0.23,0.64-0.56,0.83-1v-6.16h1.47v8.57h-1.31L157.64,506.05z"></path><path fill="#767676" d="M163.77,507.3h-1.47v-12.36h1.47V507.3z"></path><path fill="#767676" d="M168.6,507.3h-1.47v-12.36h1.47V507.3z"></path><path fill="#767676" d="M177.14,507.3c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67c-0.46-0.45-0.69-1.07-0.69-1.88 c0-0.83,0.33-1.48,0.98-1.93s1.56-0.68,2.72-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22c-0.32-0.29-0.78-0.44-1.38-0.44 c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76c0.63-0.51,1.45-0.77,2.46-0.77 c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88c0.03,0.28,0.09,0.56,0.17,0.85 H177.14z M174.54,506.2c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7c-0.68,0-1.22,0.16-1.61,0.48 c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93S174.05,506.2,174.54,506.2z"></path><path fill="#767676" d="M189.17,504.82l0.17,0.74h0.02l0.18-0.74l2.03-6.08h1.5l-3.17,8.57h-1.12l-3.2-8.57h1.5L189.17,504.82z"></path><path fill="#767676" d="M196.9,496.51h-1.46v-1.57h1.46V496.51z M196.9,507.3h-1.46v-8.57h1.46V507.3z"></path><path fill="#767676" d="M201.93,496.65v2.08h1.65v1.12h-1.65v5.24c0,0.42,0.07,0.72,0.21,0.88c0.14,0.17,0.34,0.25,0.59,0.25 c0.13,0,0.25-0.01,0.38-0.03c0.13-0.02,0.25-0.04,0.36-0.08l0.2,1.04c-0.14,0.09-0.33,0.16-0.58,0.22 c-0.25,0.06-0.49,0.08-0.73,0.08c-0.6,0-1.06-0.19-1.4-0.56c-0.34-0.37-0.51-0.98-0.51-1.81v-5.24h-1.23v-1.12h1.23v-2.08 H201.93z"></path><path fill="#767676" d="M211.41,507.3c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67s-0.68-1.07-0.68-1.88 c0-0.83,0.33-1.48,0.98-1.93c0.66-0.45,1.56-0.68,2.73-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22 c-0.32-0.29-0.78-0.44-1.38-0.44c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76 c0.63-0.51,1.45-0.77,2.46-0.77c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88 c0.03,0.28,0.09,0.56,0.17,0.85H211.41z M208.81,506.2c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7 c-0.68,0-1.22,0.16-1.61,0.48c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93 C207.95,506.09,208.32,506.2,208.81,506.2z"></path><path fill="#767676" d="M219.34,507.46c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S220.06,507.46,219.34,507.46z M219.11,499.76c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C220.29,499.97,219.78,499.76,219.11,499.76z"></path><path fill="#767676" d="M229.62,502.93c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V502.93z M231.09,503.12c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27s-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9c-0.39,0.6-0.59,1.35-0.59,2.27V503.12z"></path><path fill="#767676" d="M244.11,500.05l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1H240v-8.57 h1.32l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.89-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L244.11,500.05z"></path><path fill="#767676" d="M247.79,498.73l0.1,1.28l0.02,0.01c0.28-0.46,0.64-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.75,1.37,0.75,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66 c-0.3-0.32-0.77-0.47-1.41-0.47c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.64,0.54-0.85,0.95v6.22h-1.47v-8.57H247.79z"></path><path fill="#767676" d="M261.76,507.3c-0.05-0.27-0.09-0.49-0.12-0.67c-0.03-0.17-0.04-0.36-0.06-0.55 c-0.31,0.4-0.69,0.73-1.14,0.99s-0.95,0.38-1.5,0.38c-0.9,0-1.58-0.22-2.04-0.67s-0.68-1.07-0.68-1.88 c0-0.83,0.33-1.48,0.98-1.93c0.66-0.45,1.56-0.68,2.73-0.68h1.66v-0.87c0-0.52-0.16-0.93-0.48-1.22 c-0.32-0.29-0.78-0.44-1.38-0.44c-0.55,0-1,0.13-1.34,0.39c-0.34,0.26-0.51,0.58-0.51,0.95h-1.47c0-0.66,0.31-1.25,0.94-1.76 c0.63-0.51,1.45-0.77,2.46-0.77c0.99,0,1.78,0.24,2.36,0.73c0.59,0.49,0.88,1.2,0.88,2.14v4.13c0,0.31,0.02,0.6,0.05,0.88 c0.03,0.28,0.09,0.56,0.17,0.85H261.76z M259.16,506.2c0.55,0,1.04-0.13,1.48-0.38c0.44-0.25,0.75-0.56,0.95-0.93v-1.58h-1.7 c-0.68,0-1.22,0.16-1.61,0.48c-0.39,0.32-0.59,0.7-0.59,1.15c0,0.4,0.12,0.71,0.37,0.93C258.3,506.09,258.67,506.2,259.16,506.2 z"></path><path fill="#767676" d="M270.28,500.05l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.32l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.89-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L270.28,500.05z"></path><path fill="#767676" d="M276.01,507.46c-1.2,0-2.16-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76S276.73,507.46,276.01,507.46z M275.77,499.76c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C276.95,499.97,276.45,499.76,275.77,499.76z"></path><path fill="#767676" d="M283.46,507.3h-1.49v-1.56h1.49V507.3z"></path></g></g></g></g><rect fill="none" width="365" height="650"></rect><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><g><rect x="0.5" y="0.5" class="p-color" width="363.6" height="646.5"></rect><rect x="0.5" y="558.1" class="p-color-light" width="363.6" height="88.9"></rect><rect x="0.5" y="0.5" class="p-color-dark" width="363.6" height="24.2"></rect><rect x="42.3" y="65.8" class="void-0" width="280" height="350"></rect><rect x="343.8" y="65.8" class="void-0" width="20" height="350"></rect><rect x="0.5" y="65.8" class="void-0" width="20" height="350"></rect><g><circle class="s-color-dark" cx="303.3" cy="559.4" r="25.4"></circle><line class="fab-stroke pt-color-stroke st-color-stroke" x1="303.3" y1="546.4" x2="303.3" y2="571.6"></line><line class="fab-stroke pt-color-stroke st-color-stroke" x1="315.9" y1="559" x2="290.8" y2="559"></line></g><path class="s-color" d="M125.3,267l57-98.7l57,98.7c25.3,43.9-6.3,98.7-57,98.7h0C131.6,365.6,100,310.8,125.3,267z"></path><rect x="42.3" y="65.8" class="s-color-dark" width="280" height="50"></rect><rect x="343.5" y="65.8" class="s-color-dark" width="20.6" height="50"></rect><rect x="0.2" y="65.8" class="s-color-dark" width="20.6" height="50"></rect><text transform="matrix(1 0 0 1 62.2893 99.1602)" class="pt-color st-color title">Text</text><text transform="matrix(1 0 0 1 42.2729 455.2571)"><tspan x="0" y="0" class="pt-color text">Lorem ipsum dolor sit amet, consectetur</tspan><tspan x="0" y="20" class="pt-color text">adipiscing elit. Donec viverra eget nulla</tspan><tspan x="0" y="40" class="pt-color text">vitae ornare.</tspan></text></g></svg></div></div>'),
        e.put("app/components/ui-mobile/tmpl/ui-mobile-6.html", '<div class="ui-mobile-6 ui-mobile"><div class="ui-mobile-section" ng-if="!main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><g><defs><rect id="SVGID_1_" width="365" height="650"></rect></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clippath><g id="XMLID_1_" clip-path="url(#SVGID_2_)"><polyline id="XMLID_25_" fill="#E1E2E1" points="365,89.22 365,650 0,650 0,89.22"></polyline><rect id="XMLID_375_" x="0" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="365" height="650"></rect><polyline id="XMLID_11_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" points="333.4,559.67 365,559.67 365,650 0,650 0,559.67 276.87,559.67"></polyline><polyline id="XMLID_24_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" points="324.44,89.22 365,89.22 365,0 0,0 0,89.22 40.55,89.22"></polyline><rect id="XMLID_372_" x="40.56" y="62.86" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="283.89" height="456.25"></rect><g id="XMLID_368_"><circle id="XMLID_371_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" cx="305.26" cy="563.33" r="28.39"></circle><line id="XMLID_370_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="305.26" y1="549.71" x2="305.26" y2="576.07"></line><line id="XMLID_369_" fill="none" stroke="#6D6E70" stroke-width="3" stroke-miterlimit="10" x1="318.44" y1="562.89" x2="292.08" y2="562.89"></line></g><g><g><path fill="#767676" d="M54.36,24.94h-5.45v15.52h-2.2V24.94h-5.45v-1.78h13.1V24.94z"></path><path fill="#767676" d="M60.91,40.69c-1.81,0-3.23-0.58-4.28-1.75c-1.05-1.17-1.57-2.72-1.57-4.65v-0.53 c0-1.87,0.54-3.4,1.61-4.6c1.07-1.2,2.37-1.79,3.88-1.79c1.74,0,3.05,0.51,3.93,1.53c0.88,1.02,1.31,2.42,1.31,4.19v1.44h-8.52 c0.03,1.31,0.36,2.38,0.98,3.18c0.62,0.81,1.51,1.21,2.66,1.21c0.8,0,1.49-0.11,2.07-0.33c0.58-0.22,1.11-0.53,1.57-0.94 l0.87,1.46c-0.47,0.46-1.07,0.84-1.8,1.13C62.89,40.54,61.98,40.69,60.91,40.69z M60.55,29.15c-0.83,0-1.54,0.33-2.11,1 s-0.94,1.54-1.1,2.61h6.25v-0.31c0-0.96-0.25-1.75-0.76-2.37C62.32,29.46,61.56,29.15,60.55,29.15z"></path><path fill="#767676" d="M72.75,32.39l2.85-4.79h2.57l-4.19,6.36l4.32,6.5h-2.53l-2.97-4.92l-2.97,4.92h-2.57l4.34-6.5 l-4.21-6.36h2.54L72.75,32.39z"></path><path fill="#767676" d="M83.3,24.48v3.12h2.47v1.68H83.3v7.87c0,0.63,0.11,1.08,0.32,1.32s0.51,0.37,0.88,0.37 c0.19,0,0.38-0.01,0.58-0.04c0.19-0.03,0.37-0.07,0.54-0.11l0.3,1.56c-0.21,0.13-0.49,0.24-0.86,0.33 c-0.37,0.08-0.73,0.12-1.1,0.12c-0.9,0-1.6-0.28-2.1-0.84c-0.51-0.56-0.76-1.46-0.76-2.71v-7.87h-1.84V27.6h1.84v-3.12H83.3z"></path></g></g><line id="XMLID_12_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="40.56" y1="336.61" x2="324.44" y2="336.61"></line><line id="XMLID_14_" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" x1="40.56" y1="427.86" x2="324.44" y2="427.86"></line><rect id="XMLID_349_" x="40.56" y="154.11" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="283.89" height="91.25"></rect><rect id="XMLID_348_" x="50.76" y="178.44" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="10.14" height="10.14"></rect><g><g><path fill="#767676" d="M82.27,178.16h-3.64v10.34h-1.47v-10.34h-3.64v-1.19h8.74V178.16z"></path><path fill="#767676" d="M85.59,185.42l0.21,1.19l0.02,0.01l0.26-1.2l1.73-5.48H89l1.73,5.48l0.28,1.3h0.02l0.27-1.3l1.39-5.48 h1.46l-2.49,8.57h-1.19l-1.69-5.28l-0.37-1.53h-0.02l-0.36,1.53l-1.66,5.28h-1.2l-2.49-8.57h1.47L85.59,185.42z"></path><path fill="#767676" d="M95.33,184.13c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.81,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.85-1.01-3.14V184.13z M96.8,184.32c0,0.93,0.2,1.69,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V184.32z"></path></g></g><rect id="XMLID_13_" x="50.76" y="269.69" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="10.14" height="10.14"></rect><g><g><path fill="#767676" d="M82.27,269.41h-3.64v10.34h-1.47v-10.34h-3.64v-1.19h8.74V269.41z"></path><path fill="#767676" d="M85.37,272.35l0.02,0.01c0.29-0.42,0.65-0.75,1.08-0.98s0.91-0.35,1.46-0.35c0.94,0,1.65,0.27,2.14,0.81 c0.49,0.54,0.74,1.39,0.74,2.56v5.36h-1.47v-5.38c0-0.74-0.15-1.29-0.46-1.62s-0.77-0.51-1.4-0.51c-0.46,0-0.87,0.11-1.23,0.32 c-0.36,0.22-0.65,0.52-0.89,0.9v6.29h-1.47V267.4h1.47V272.35z"></path><path fill="#767676" d="M97.19,272.51l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L97.19,272.51z"></path><path fill="#767676" d="M102.11,279.91c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02s0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12s1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22s0.74-0.36,1.05-0.63l0.58,0.97 c-0.31,0.31-0.71,0.56-1.2,0.76C103.43,279.81,102.83,279.91,102.11,279.91z M101.87,272.21c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58S102.55,272.21,101.87,272.21z"></path><path fill="#767676" d="M110.66,279.91c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02s0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12s1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22s0.74-0.36,1.05-0.63l0.58,0.97 c-0.31,0.31-0.71,0.56-1.2,0.76C111.98,279.81,111.38,279.91,110.66,279.91z M110.42,272.21c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58S111.1,272.21,110.42,272.21z"></path></g></g><rect id="XMLID_16_" x="50.76" y="360.94" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="10.14" height="10.14"></rect><g><g><path fill="#767676" d="M81.28,365.87h-5.31V371H74.5v-11.53h7.58v1.19h-6.11v4.02h5.31V365.87z"></path><path fill="#767676" d="M83.09,366.63c0-1.29,0.34-2.34,1.01-3.15c0.68-0.81,1.61-1.21,2.8-1.21c1.2,0,2.15,0.4,2.82,1.21 c0.68,0.8,1.02,1.85,1.02,3.15v0.19c0,1.3-0.34,2.35-1.01,3.14c-0.68,0.8-1.61,1.2-2.81,1.2c-1.2,0-2.14-0.4-2.82-1.2 c-0.68-0.8-1.01-1.84-1.01-3.14V366.63z M84.56,366.82c0,0.93,0.2,1.7,0.59,2.28c0.39,0.59,0.98,0.88,1.77,0.88 c0.78,0,1.37-0.29,1.77-0.88c0.4-0.59,0.59-1.35,0.59-2.28v-0.19c0-0.92-0.2-1.68-0.6-2.27c-0.4-0.6-0.99-0.9-1.78-0.9 c-0.78,0-1.37,0.3-1.76,0.9s-0.59,1.35-0.59,2.27V366.82z"></path><path fill="#767676" d="M98.13,369.75l-0.02-0.01c-0.26,0.46-0.6,0.81-1.02,1.05s-0.91,0.36-1.49,0.36 c-0.95,0-1.68-0.29-2.19-0.88c-0.51-0.58-0.77-1.52-0.77-2.81v-5.05h1.47v5.06c0,0.94,0.14,1.58,0.41,1.93s0.71,0.52,1.31,0.52 c0.59,0,1.07-0.11,1.43-0.34c0.36-0.23,0.64-0.56,0.83-1v-6.16h1.47V371h-1.31L98.13,369.75z"></path><path fill="#767676" d="M105.97,363.76l-0.86-0.05c-0.45,0-0.82,0.1-1.11,0.31c-0.29,0.21-0.51,0.5-0.67,0.89v6.1h-1.47v-8.57 h1.31l0.14,1.24l0.02,0.01c0.24-0.44,0.54-0.79,0.9-1.04c0.36-0.25,0.78-0.37,1.27-0.37c0.13,0,0.25,0.01,0.38,0.03 s0.22,0.04,0.29,0.06L105.97,363.76z"></path></g></g><rect id="XMLID_18_" x="50.76" y="452.19" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="10.14" height="10.14"></rect><g><g><path fill="#767676" d="M81.28,457.12h-5.31v5.13H74.5v-11.53h7.58v1.19h-6.11v4.02h5.31V457.12z"></path><path fill="#767676" d="M85.24,451.47h-1.47v-1.57h1.47V451.47z M85.24,462.25h-1.47v-8.57h1.47V462.25z"></path><path fill="#767676" d="M90.47,459.77l0.17,0.74h0.02l0.18-0.74l2.03-6.08h1.5l-3.17,8.57h-1.12l-3.2-8.57h1.5L90.47,459.77z"></path><path fill="#767676" d="M99.22,462.41c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36 c0-1.25,0.36-2.27,1.07-3.07c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02c0.58,0.68,0.88,1.61,0.88,2.8v0.96h-5.68 c0.02,0.88,0.24,1.58,0.65,2.12c0.41,0.54,1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22c0.39-0.15,0.74-0.36,1.05-0.63 l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76C100.54,462.31,99.94,462.41,99.22,462.41z M98.98,454.71c-0.55,0-1.02,0.22-1.41,0.67 s-0.63,1.03-0.73,1.74h4.17v-0.21c0-0.64-0.17-1.17-0.51-1.58C100.16,454.92,99.66,454.71,98.98,454.71z"></path></g></g><rect id="XMLID_363_" x="50.76" y="87.19" fill="#FFFFFF" stroke="#6D6E70" stroke-miterlimit="10" width="10.14" height="10.14"></rect><g><g><path fill="#767676" d="M83.31,92.51c0,1.42-0.43,2.59-1.29,3.52c-0.86,0.93-1.99,1.39-3.39,1.39c-1.36,0-2.46-0.46-3.29-1.39 c-0.83-0.93-1.24-2.1-1.24-3.52v-2.04c0-1.41,0.41-2.58,1.24-3.52s1.92-1.4,3.29-1.4c1.4,0,2.54,0.47,3.39,1.4 c0.86,0.93,1.29,2.11,1.29,3.52V92.51z M81.84,90.46c0-1.06-0.29-1.94-0.86-2.63c-0.58-0.69-1.36-1.04-2.35-1.04 c-0.95,0-1.7,0.35-2.25,1.04c-0.55,0.69-0.82,1.57-0.82,2.63v2.05c0,1.07,0.27,1.95,0.82,2.65s1.29,1.04,2.25,1.04 c1,0,1.78-0.34,2.36-1.03c0.57-0.69,0.86-1.57,0.86-2.65V90.46z"></path><path fill="#767676" d="M86.81,88.68l0.1,1.28l0.02,0.01c0.28-0.46,0.63-0.82,1.07-1.07c0.43-0.25,0.93-0.38,1.49-0.38 c0.93,0,1.65,0.26,2.15,0.79c0.5,0.53,0.74,1.37,0.74,2.53v5.41h-1.47v-5.38c0-0.79-0.15-1.34-0.45-1.66s-0.77-0.48-1.41-0.48 c-0.48,0-0.9,0.11-1.25,0.34c-0.35,0.23-0.63,0.54-0.85,0.95v6.22h-1.47v-8.57H86.81z"></path><path fill="#767676" d="M98.2,97.41c-1.2,0-2.15-0.39-2.85-1.17c-0.7-0.78-1.05-1.81-1.05-3.1v-0.36c0-1.25,0.36-2.27,1.07-3.07 c0.72-0.8,1.58-1.2,2.59-1.2c1.16,0,2.03,0.34,2.62,1.02s0.88,1.61,0.88,2.8v0.96h-5.68c0.02,0.88,0.24,1.58,0.65,2.12 s1,0.81,1.77,0.81c0.53,0,0.99-0.07,1.38-0.22s0.74-0.36,1.05-0.63l0.58,0.97c-0.31,0.31-0.71,0.56-1.2,0.76 C99.53,97.31,98.92,97.41,98.2,97.41z M97.97,89.71c-0.55,0-1.02,0.22-1.41,0.67s-0.63,1.03-0.73,1.74h4.17v-0.21 c0-0.64-0.17-1.17-0.51-1.58S98.64,89.71,97.97,89.71z"></path></g></g></g></g><rect fill="none" width="365" height="650"></rect><g><path fill="#6D6E70" d="M364,1v648H1V1H364 M365,0H0v650h365V0L365,0z"></path></g></svg></div><div class="ui-mobile-section" ng-if="main.primaryColor.hex"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="365px" height="650px" viewbox="0 0 365 650" style="enable-background:new 0 0 365 650;" xml:space="preserve"><style type="text/css">\n        .p-color {\n          fill: {{ main.primaryColor.hex }};\n        }\n\n        .pt-color {\n          fill: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-stroke {\n          stroke: {{ main.primaryTextColor.hex ?\n                      main.primaryTextColor.hex :\n                      main.primaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .p-color-light {\n          fill: {{ main.primaryColor.range.light.hex }};\n        }\n\n        .p-color-dark {\n          fill: {{ main.primaryColor.range.dark.hex }};\n        }\n\n        .pt-color-light {\n          fill: {{ main.primaryColor.range.light.accessibility.preferredNormalColor }};\n        }\n\n        .pt-color-dark {\n          fill: {{ main.primaryColor.range.dark.accessibility.preferredNormalColor }};\n        }\n\n        .s-color {\n          fill: {{ main.secondaryColor.hex ?\n                    main.secondaryColor.hex :\n                    main.primaryColor.hex }};\n        }\n\n        .st-color {\n          fill: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .st-color-stroke {\n          stroke: {{ main.secondaryTextColor.hex ?\n                      main.secondaryTextColor.hex :\n                      main.secondaryColor.accessibility.preferredNormalColor }};\n        }\n\n        .s-color-light {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.light.hex :\n                      main.primaryColor.range.light.hex; }};\n        }\n\n        .s-color-dark {\n          fill: {{ main.secondaryColor.hex ?\n                      main.secondaryColor.range.dark.hex :\n                      main.primaryColor.range.dark.hex; }};\n        }\n      </style><g><rect x="0.3" class="void-0" width="363.3" height="645.8"></rect><rect x="0.3" y="557" class="p-color-light" width="363.3" height="88.8"></rect><rect x="0.3" class="p-color" width="363.3" height="99.9"></rect><rect x="40.7" y="62.6" class="void-1" width="282.6" height="454.1"></rect><g><circle class="s-color-dark" cx="303.3" cy="559.4" r="25.4"></circle><line class="fab-stroke pt-color-stroke st-color-stroke" x1="303.3" y1="546.4" x2="303.3" y2="571.6"></line><line class="fab-stroke pt-color-stroke st-color-stroke" x1="315.9" y1="559" x2="290.8" y2="559"></line></g><text transform="matrix(1 0 0 1 40.6754 40.2647)" class="pt-color title">Text</text><line class="list-stroke" x1="40.7" y1="335" x2="323.2" y2="335"></line><line class="list-stroke" x1="40.7" y1="425.9" x2="323.2" y2="425.9"></line><rect x="40.7" y="153.4" class="s-color" width="282.6" height="90.8"></rect><rect x="50.8" y="86.8" class="list-stroke" width="10.1" height="10.1"></rect><g><text transform="matrix(1 0 0 1 73.0329 96.7985)" class="text text-color">One</text></g><rect x="50.8" y="177.6" class="s-color-dark" width="10.1" height="10.1"></rect><g><text transform="matrix(1 0 0 1 73.0329 187.6207)" class="text pt-color st-color">Two</text></g><rect x="50.8" y="268.4" class="list-stroke" width="10.1" height="10.1"></rect><g><text transform="matrix(1 0 0 1 73.0329 278.443)" class="text text-color">Three</text></g><rect x="50.8" y="359.3" class="list-stroke" width="10.1" height="10.1"></rect><g><text transform="matrix(1 0 0 1 73.0329 369.2637)" class="text text-color">Four</text></g><rect x="50.8" y="450.1" class="list-stroke" width="10.1" height="10.1"></rect><g><text transform="matrix(1 0 0 1 73.0329 460.088)" class="text text-color">Five</text></g></g></svg></div></div>'), e.put("app/components/codepen-demos/material-image/tmpl/material-image.html", '<div class="material-image"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ng-width="{{ $materialImage.width }}px" ng-height="{{ $materialImage.height }}px" viewbox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><rect x="0.3" y="0.5" width="300" height="300" class="material-image__background"></rect><g><path class="material-image--shape-circle" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path><path class="material-image--shape-triangle" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path><path class="material-image--shape-intersection" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path></g></g></svg></div>'), e.put("app/components/codepen-demos/mdc-buttons/tmpl/mdc-buttons.html", '<div><style type="text/css">\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button,\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-fab {\n      background-color: {{ main.primaryColor.hex }};\n      color: {{ main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button--plain,\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-fab--plain {\n      background-color: transparent;\n      color: {{ main.primaryColor.hex }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button,\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-fab {\n      background-color: {{ main.secondaryColor.hex }};\n      color: {{ main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button--plain,\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-fab--plain {\n      background-color: transparent;\n      color: {{ main.secondaryColor.hex }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button--raised.mdc-ripple-upgraded::before,\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button--raised.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryTextColor\', 0.06) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button--plain.mdc-ripple-upgraded::before,\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-button--plain.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryColor\', 0.06) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-fab.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryTextColor\', 0.16) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__primary .mdc-fab--plain.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryColor\', 0.16) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button--raised.mdc-ripple-upgraded::before,\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button--raised.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryTextColor\', 0.06) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button--plain.mdc-ripple-upgraded::before,\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-button--plain.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryColor\', 0.06) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-fab.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryTextColor\', 0.16) }};\n    }\n\n    .mdc-component__buttons .mdc-component__containers__secondary .mdc-fab--plain.mdc-ripple-upgraded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryColor\', 0.16) }};\n    }\n  </style><div class="mdc-component mdc-component__buttons"><p>Buttons</p><div class="mdc-component__section"><div class="mdc-component__containers"><div class="mdc-component__containers__primary" ng-class="{ \'mdc-component__containers__primary__only\': !main.secondaryColor }"><p>Primary</p><button class="mdc-fab material-icons" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button class="mdc-fab material-icons mdc-fab--plain" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button type="button" class="mdc-button mdc-button--plain">Normal</button> <button type="button" class="mdc-button mdc-button--raised">Normal</button></div><div class="mdc-component__containers__secondary" ng-if="main.secondaryColor"><p>Secondary</p><button class="mdc-fab material-icons" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button class="mdc-fab material-icons mdc-fab--plain" aria-label="Add"><span class="mdc-fab__icon">add</span></button> <button type="button" class="mdc-button mdc-button--plain">Normal</button> <button type="button" class="mdc-button mdc-button--raised">Normal</button></div></div></div></div></div>'), e.put("app/components/codepen-demos/mdc-cards/tmpl/mdc-cards.html", '<div><style type="text/css">\n  .mdc-component__cards .mdc-card {\n    background-color: #ffffff;\n    height: 316px;\n    width: 262px;\n  }\n\n  .mdc-component__cards .mdc-card__title,\n  .mdc-component__cards .mdc-card__subtitle {\n    font-size: 11px;\n    line-height: 17px;\n  }\n\n  .mdc-component__cards .mdc-card__subtitle {\n    color: #707070;\n  }\n\n  .mdc-component__cards .mdc-card__header {\n    align-items: center;\n    display: flex;\n    height: 40px;\n    padding: 0 16px 20px;\n  }\n\n  .mdc-component__cards .demo-card__avatar {\n    background: #bdbdbd;\n    height: 40px;\n    width: 40px;\n    margin-right: 12px;\n    border-radius: 50%;\n  }\n\n  .mdc-component__cards .mdc-card__supporting-text {\n    font-size: 10px;\n  }\n\n  .mdc-component__cards .demo-card--with-avatar .mdc-card__title,\n  .mdc-component__cards .demo-card--with-avatar .mdc-card__subtitle {\n    margin-left: 56px;\n  }\n\n  .mdc-component__cards .mdc-card__actions {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 16px 16px 16px;\n  }\n\n  .mdc-component__cards .mdc-card__media {\n    height: 140px;\n    overflow: hidden;\n    padding: 0\n  }\n\n  .mdc-component__cards .mdc-card__media .material-image {\n    top: 64px;\n    position: relative;\n  }\n\n  .mdc-component__cards .mdc--theme-primary {\n    background-color: {{ main.primaryColor.hex }};\n    color: {{ main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor }};\n  }\n\n  .mdc-component__cards .mdc--theme-secondary {\n    background-color: {{ main.secondaryColor.hex }};\n    color: {{ main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor }};\n  }\n\n  .mdc-component__cards .material-image .material-image__background {\n    fill: {{ main.primaryColor.range.dark.hex }};\n  }\n\n  .mdc-component__cards .material-image .material-image--shape-circle,\n  .mdc-component__cards .material-image .material-image--shape-triangle {\n    fill: {{ main.primaryColor.hex }};\n  }\n\n  .mdc-component__cards .material-image .material-image--shape-intersection {\n    fill: {{ main.primaryColor.range.dark.hex }};\n  }\n\n  .mdc-component__cards .mdc-button--raised.mdc--theme-primary.mdc-ripple-upgraded::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryTextColor\', 0.06) }};\n  }\n\n  .mdc-component__cards .mdc-button--raised.mdc--theme-secondary.mdc-ripple-upgraded::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryTextColor\', 0.06) }};\n  }\n  </style><div class="mdc-component mdc-component__cards"><p>Cards</p><div class="mdc-component__section"><div class="mdc-component__containers__primary"><div class="mdc-card"><section class="mdc-card__header"><div class="demo-card__avatar"></div><div><p class="mdc-card__title">Title</p><p class="mdc-card__subtitle">Subhead</p></div></section><section class="mdc-card__media"><ct-material-image width="262" height="262"></ct-material-image></section><section class="mdc-card__supporting-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</section><section class="mdc-card__actions"><button type="button" class="mdc-button mdc-button--raised" ng-class="{ \'mdc--theme-primary\': !main.secondaryColor, \'mdc--theme-secondary\': main.secondaryColor }">Button</button></section></div></div></div></div></div>'), e.put("app/components/codepen-demos/mdc-menu/tmpl/mdc-menu.html", '<div><style type="text/css">\n  .mdc-component__menu .mdc-toolbar {\n    background-color: {{ main.secondaryColor ? main.secondaryColor.hex : main.primaryColor.hex }};\n    z-index: 1;\n  }\n\n  .mdc-component__menu .mdc-toolbar {\n    height: 56px;\n    padding: 16px;\n  }\n\n  .mdc-component__menu .mdc-permanent-drawer {\n    border-right: none;\n    left: 0;\n    position: absolute;\n    top: 0;\n    z-index: 3;\n  }\n\n  .mdc-component__menu .mdc-backdrop {\n    background-color: rgba(0, 0, 0, .50);\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n  }\n\n  .mdc-component__menu .nav-header {\n    height: 140px;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .mdc-component__menu .nav-header .material-image {\n    position: relative;\n    top: -50px;\n  }\n\n  .mdc-component__menu .mdc-permanent-drawer {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n  .mdc-component__menu .mdc-list-item {\n    font-weight: 400;\n  }\n\n  .mdc-component__menu .mdc-list-item.mdc-ripple-upgraded {\n    left: 0;\n  }\n\n  .mdc-component__menu .mdc-list-item.mdc-ripple-upgraded::before,\n  .mdc-component__menu .mdc-list-item.mdc-ripple-upgraded::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryColor\', 0.06) }};\n  }\n\n  .mdc-component__menu .mdc-permanent-drawer .mdc-permanent-drawer--selected::before,\n  .mdc-component__menu .mdc-permanent-drawer .mdc-list-item:active::before {\n    background-color: {{ main.primaryColor.hex }};\n    opacity: .16;\n  }\n\n  .mdc-component__menu .mdc-permanent-drawer--selected.mdc-list-item .mdc-list-item__start-detail,\n  .mdc-component__menu .mdc-permanent-drawer .mdc-permanent-drawer--selected {\n    color: inherit;\n  }\n\n  .mdc-component__menu .material-image__background {\n    fill: {{ main.primaryColor.range.dark.hex }};\n  }\n\n  .mdc-component__menu .material-image--shape-circle,\n  .mdc-component__menu .material-image--shape-triangle {\n    fill: {{ main.primaryColor.hex }};\n  }\n\n  .mdc-component__menu .material-image--shape-intersection {\n    fill: {{ main.primaryColor.range.dark.hex }};\n  }\n  </style><div class="mdc-component mdc-component__menu"><p>Menu</p><div class="mdc-component__section"><div class="mdc-component__section__content"><div class="mdc-component__section__content__frame"><header class="mdc-toolbar"><section class="mdc-toolbar__section mdc-toolbar__section--align-start"><a class="material-icons">menu</a> <span class="mdc-toolbar__title">Title</span></section></header><nav class="mdc-permanent-drawer"><div class="mdc-list-group"><nav class="nav-header"><ct-material-image width="240" height="240"></ct-material-image></nav><nav class="mdc-list"><a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">share</i>Share</a><div class="mdc-list-item mdc-permanent-drawer--selected" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">cloud_upload</i>Upload</div><a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">content_copy</i>Copy</a> <a class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__start-detail" aria-hidden="true">print</i>Print this page</a></nav></div></nav><div class="mdc-backdrop"></div></div></div></div></div></div>'), e.put("app/components/codepen-demos/mdc-selection/tmpl/mdc-selection.html", '<div><style type="text/css">\n  .mdc-component__selection .mdc-component__containers__primary__only .mdc-snackbar {\n    transform: translate(-50%,-100%);\n  }\n\n  .mdc-component__selection .mdc-snackbar {\n    left: auto !important;\n    transform: translate(-28%,-164%);\n    position: absolute;\n    min-width: 240px;\n    margin-left: -16px;\n    width: 240px;\n  }\n\n  .mdc-component__selection .mdc-snackbar__secondary {\n    transform: translate(-28%,-40%);\n  }\n\n  .mdc-component__selection .mdc-snackbar__text,\n  .mdc-component__selection .mdc-snackbar__action-button {\n    opacity: 1;\n    font-size: 12px;\n  }\n  </style><div class="mdc-component mdc-component__selection"><p>Selection</p><div class="mdc-component__section mdc-component__section--size-narrow"><div dir-horizontal="" class="mdc-component__containers"><div class="mdc-component__containers__primary" ng-class="{ \'mdc-component__containers__primary__only\': !main.secondaryColor }"><p style="position: absolute; left: 16px; padding-bottom: 40px;">Primary</p><div class="mdc-snackbar" aria-live="assertive" aria-atomic="true" aria-hidden="true"><div class="mdc-snackbar__text">Single-line snackbar</div><div class="mdc-snackbar__action-wrapper"><button type="button" class="mdc-button mdc-snackbar__action-button" ng-style="{ \'color\': main.primaryColor.hex, }">Action</button></div></div></div><div class="mdc-component__containers__secondary" ng-if="main.secondaryColor"><p style="position: absolute; left: 16px; padding-top: 52px;">Secondary</p><div class="mdc-snackbar mdc-snackbar__secondary" aria-live="assertive" aria-atomic="true" aria-hidden="true"><div class="mdc-snackbar__text">Single-line snackbar</div><div class="mdc-snackbar__action-wrapper"><button type="button" class="mdc-button mdc-snackbar__action-button" ng-style="{ \'color\': main.secondaryColor.hex, }">Action</button></div></div></div></div></div></div></div>'), e.put("app/components/codepen-demos/mdc-switches-sliders/tmpl/mdc-switches-sliders.html", '<div><style type="text/css">\n    .mdc-component__switches .mdc-component__containers__primary .mdc-checkbox__native-control:checked:not(:disabled) ~ .mdc-checkbox__background,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-checkbox__native-control:indeterminate:not(:disabled) ~ .mdc-checkbox__background,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle {\n      background-color: {{ main.primaryColor.hex }};\n      border-color: {{ main.primaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__primary .mdc-switch__native-control:checked~.mdc-switch__background::before,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob::before,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob {\n      background-color: {{ main.primaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__primary .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle {\n      border-color: {{ main.primaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__primary .mdc-checkbox__background::before,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-radio__background::before {\n      background-color: {{ main.primaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-checkbox__native-control:checked:not(:disabled) ~ .mdc-checkbox__background,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-checkbox__native-control:indeterminate:not(:disabled) ~ .mdc-checkbox__background,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle {\n      background-color: {{ main.secondaryColor.hex }};\n      border-color: {{ main.secondaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-switch__native-control:checked~.mdc-switch__background::before,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob::before,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob {\n      background-color: {{ main.secondaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle {\n      border-color: {{ main.secondaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-checkbox__background::before,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-radio__background::before {\n      background-color: {{ main.secondaryColor.hex }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__primary .mdc-checkbox.mdc-ripple-upgraded--unbounded::before,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-checkbox.mdc-ripple-upgraded--unbounded::after,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-radio.mdc-ripple-upgraded--unbounded::before,\n    .mdc-component__switches .mdc-component__containers__primary .mdc-radio.mdc-ripple-upgraded--unbounded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryColor\', 0.14) }};\n    }\n\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-checkbox.mdc-ripple-upgraded--unbounded::before,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-checkbox.mdc-ripple-upgraded--unbounded::after,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-radio.mdc-ripple-upgraded--unbounded::before,\n    .mdc-component__switches .mdc-component__containers__secondary .mdc-radio.mdc-ripple-upgraded--unbounded::after {\n      background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryColor\', 0.14) }};\n    }\n  </style><div class="mdc-component mdc-component__switches"><p>Switches and sliders</p><div class="mdc-component__section mdc-component__section--size-narrow"><div dir-horizontal="" class="mdc-component__containers"><div class="mdc-component__containers__primary" ng-class="{ \'mdc-component__containers__primary__only\': !main.secondaryColor }"><p>Primary</p><div class="mdc-checkbox mdc-ripple-upgraded--unbounded"><input type="checkbox" checked="" class="mdc-checkbox__native-control"><div class="mdc-checkbox__background"><svg version="1.1" class="mdc-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" xml:space="preserve"><path class="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" checked=""><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div><div class="mdc-switch"><input type="checkbox" class="mdc-switch__native-control" checked=""><div class="mdc-switch__background"><div class="mdc-switch__knob"></div></div></div></div><div class="mdc-component__containers__secondary" ng-if="main.secondaryColor"><p>Secondary</p><div class="mdc-checkbox"><input type="checkbox" checked="" class="mdc-checkbox__native-control"><div class="mdc-checkbox__background"><svg version="1.1" class="mdc-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" xml:space="preserve"><path class="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="mdc-checkbox__mixedmark"></div></div></div><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" checked=""><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div><div class="mdc-switch"><input type="checkbox" class="mdc-switch__native-control" checked=""><div class="mdc-switch__background"><div class="mdc-switch__knob"></div></div></div></div></div></div></div></div>'),
        e.put("app/components/codepen-demos/mdc-textfield/tmpl/mdc-textfield.html", '<div><style type="text/css">\n  .mdc-component__textfield .mdc-component__containers {\n    margin-top: {{ main.secondaryColor ? \'40px\' : \'0\' }};\n  }\n\n  .mdc-component__textfield .mdc-component__containers__secondary {\n    padding: {{ main.secondaryColor ? \'17px 0\' : \'0\' }};\n  }\n\n  .mdc-component__textfield .mdc-component__containers p {\n    padding-bottom: 20px;\n  }\n\n  .mdc-component__textfield .mdc-textfield {\n    margin-right: 14px !important;\n  }\n\n  .mdc-component__textfield .mdc-textfield__input {\n    width: 264px;\n  }\n\n  .mdc-component__textfield .mdc-textfield__label {\n    bottom: 12px;\n  }\n\n  .mdc-component__textfield .mdc-textfield--theme-primary .mdc-textfield__label {\n    color: {{ main.primaryColor.hex }};\n  }\n\n  .mdc-component__textfield .mdc-textfield--theme-primary .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus {\n    border-color: {{ main.primaryColor.hex }};\n  }\n\n  .mdc-component__textfield .mdc-textfield--theme-secondary .mdc-textfield__label {\n    color: {{ main.secondaryColor.hex }};\n  }\n\n  .mdc-component__textfield .mdc-textfield--theme-secondary .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus {\n    border-color: {{ main.secondaryColor.hex }};\n  }\n  </style><div class="mdc-component mdc-component__textfield"><p>Text Field</p><div class="mdc-component__section mdc-component__section--size-narrow"><div dir-horizontal="" class="mdc-component__containers"><div class="mdc-component__containers__primary mdc-textfield--theme-primary" ng-class="{ \'mdc-component__containers__primary__only\': !main.secondaryColor }"><p>Primary</p><div class="mdc-textfield"><input type="text" id="textfield-primary" class="mdc-textfield__input" placeholder="Single-line input label" value="Input text for a single line"> <label for="textfield-primary" class="mdc-textfield__label mdc-textfield__label--float-above">Single-line input label</label></div></div><div class="mdc-component__containers__secondary mdc-textfield--theme-secondary" ng-if="main.secondaryColor"><p>Secondary</p><div class="mdc-textfield"><input type="text" id="textfield-primary" class="mdc-textfield__input" placeholder="Single-line input label" value="Input text for a single line"> <label for="textfield-primary" class="mdc-textfield__label mdc-textfield__label--float-above">Single-line input label</label></div></div></div></div></div></div>'), e.put("app/components/codepen-demos/mdc-toolbar/tmpl/mdc-toolbar.html", '<div><style type="text/css">\n  .mdc-component__toolbar .app-bar {\n    background-color: {{ main.primaryColor.range.dark.hex }};\n    display: block;\n    height: 20px;\n    width: 100%;\n  }\n\n  .mdc-component__toolbar .mdc-toolbar {\n    height: 56px;\n    padding: 16px;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .mdc-component__toolbar .mdc-toolbar__section {\n    align-items: center;\n  }\n\n  .mdc-component__toolbar .mdc-toolbar__title {\n    padding-left: 8px;\n  }\n\n  .mdc-component__toolbar .material-icons {\n    color: {{ main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor }};\n  }\n\n  .mdc-component__toolbar .material-image {\n    position: relative;\n    top: -64px;\n  }\n\n  .mdc-component__toolbar main {\n    background-color: white;\n    height: calc(100% - 48px);\n  }\n\n  .mdc-component__toolbar .cover-image__frame {\n    display: block;\n    height: 220px;\n    position: relative;\n    width: 100%;\n  }\n\n  .mdc-component__toolbar .cover-image {\n    display: block;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .mdc-component__toolbar .mdc-fab {\n    position: absolute;\n    bottom: -25px;\n    right: 28px;\n  }\n\n  .mdc-component__toolbar .content {\n    font-size: 13px;\n    line-height: 20px;\n    padding: 50px 35px;\n  }\n\n  .mdc-component__toolbar .mdc-component__section__content__frame::before {\n    bottom: 0;\n    content: "";\n    background-image: url(//storage.googleapis.com/demos-in-spec/images/android-bottom.png);\n    background-repeat: no-repeat;\n    height: 48px;\n    position: absolute;\n    width: 100%;\n    z-index: 9999999;\n  }\n\n  .mdc-component__toolbar .mdc--theme-primary {\n    background-color: {{ main.primaryColor.hex }};\n    color: {{ main.primaryTextColor.hex ? main.primaryTextColor.hex : main.primaryColor.accessibility.preferredNormalColor }};\n  }\n\n  .mdc-component__toolbar .mdc--theme-secondary {\n    background-color: {{ main.secondaryColor.hex }};\n    color: {{ main.secondaryTextColor.hex ? main.secondaryTextColor.hex : main.secondaryColor.accessibility.preferredNormalColor }};\n  }\n\n  .mdc-component__toolbar .material-image .material-image__background {\n    fill: {{ main.secondaryColor ? main.secondaryColor.range.dark.hex : \'#d8d8d8\' }};\n  }\n\n  .mdc-component__toolbar .material-image .material-image--shape-circle,\n  .mdc-component__toolbar .material-image .material-image--shape-triangle {\n    fill: {{ main.secondaryColor ? main.secondaryColor.range.light.hex : \'#9b9b9b\' }};\n  }\n\n  .mdc-component__toolbar .material-image .material-image--shape-intersection {\n    fill: {{ main.secondaryColor ? main.secondaryColor.range.dark.hex : \'#ffffff\' }};\n  }\n\n  .mdc-component__toolbar .mdc-icon-toggle::before,\n  .mdc-component__toolbar .mdc-icon-toggle::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryTextColor\', 0.062) }};\n  }\n\n  .mdc-component__toolbar .mdc-fab.mdc--theme-primary.mdc-ripple-upgraded::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'primaryTextColor\', 0.16) }};\n  }\n\n  .mdc-component__toolbar .mdc-fab.mdc--theme-secondary.mdc-ripple-upgraded::after {\n    background-color: {{ main.getRgbaFromSchemeNameAndAlpha(\'secondaryTextColor\', 0.16) }};\n  }\n  </style><div class="mdc-component mdc-component__toolbar"><p>Tool Bar</p><div class="mdc-component__section mdc-component__section--size-full"><div class="mdc-component__section__content"><div class="mdc-component__section__content__frame"><section class="app-bar"></section><header class="mdc-toolbar mdc--theme-primary"><section class="mdc-toolbar__section mdc-toolbar__section--align-start"><i class="mdc-icon-toggle material-icons" role="button" aria-label="Search">menu</i> <span class="mdc-toolbar__title">Title</span></section><section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar"><i class="mdc-icon-toggle material-icons" role="button" aria-label="Search">search</i> <i class="mdc-icon-toggle material-icons" role="button" aria-label="Menu">more_vert</i></section></header><main><div class="cover-image__frame"><section class="cover-image"><ct-material-image width="340" height="340"></ct-material-image></section><button class="mdc-fab material-icons" aria-label="Add" ng-class="{ \'mdc--theme-primary\': !main.secondaryColor, \'mdc--theme-secondary\': main.secondaryColor }"><span class="mdc-fab__icon">add</span></button></div><section class="content">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante</section></main></div></div></div></div></div>')
}]);