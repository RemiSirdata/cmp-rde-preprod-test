function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
    var t = function t() {
        var t = "__tcfapiLocator",
            e = "__sdcmpapiLocator",
            c = [],
            n = [],
            o = window;
        function i(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            try {
                var _c = o.document,
                    _n = !!o.frames[t];
                if (!_n) if (_c.body) {
                    var _e = _c.createElement("iframe");
                    _e.style.cssText = "display:none", _e.name = t, _c.body.appendChild(_e);
                } else e < 2e3 && setTimeout(function () {
                    i(t, e + 1);
                }, 5);
                return !_n;
            } catch (_unused) {
                return !1;
            }
        }
        function r(t) {
            var e,
                c = o;
            try {
                for (; c && c !== o.top;) {
                    if (c.frames[t]) {
                        e = c;
                        break;
                    }
                    if (!c.parent || c.parent === c) break;
                    c = c.parent;
                }
            } catch (_unused2) {}
            return e;
        }
        function p() {
            try {
                var _e2 = this && this.sourceAPI || "__sdcmpapi";
                var _i = o.gdprApplies;
                var _r = (o.ABconsentCMP || {}).consentModeFromTcf || !1;
                for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                    t[_key] = arguments[_key];
                }
                if (!t.length) return "__tcfapi" === _e2 ? c : n;
                if ("setGdprApplies" === t[0]) t.length > 3 && 2 === Number(t[1]) && "boolean" == typeof t[3] && (_i = t[3], o.gdprApplies = _i, "function" == typeof t[2] && t[2]({
                    gdprApplies: _i
                }, !0));else if ("ping" === t[0]) {
                    if ("function" == typeof t[2]) {
                        var _e3 = {
                            gdprApplies: _i,
                            cmpLoaded: !1,
                            cmpStatus: "stub",
                            apiVersion: "2.0"
                        };
                        _r && (_e3.enableAdvertiserConsentMode = !0), t[2](_e3, !0);
                    }
                } else ("__tcfapi" === _e2 ? c : n).push(t);
            } catch (_unused3) {}
        }
        var s = r(t),
            a = r(e);
        try {
            s || i(t), a || i(e), o.__tcfapi || (o.__tcfapi = function () {
                for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    t[_key2] = arguments[_key2];
                }
                return p.apply({
                    sourceAPI: "__tcfapi"
                }, t);
            }), o.__sdcmpapi || (o.__sdcmpapi = function () {
                for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    t[_key3] = arguments[_key3];
                }
                return p.apply({
                    sourceAPI: "__sdcmpapi"
                }, t);
            }), o.addEventListener("message", function (t) {
                try {
                    var _e4 = t && t.data;
                    if (!_e4) return;
                    var _c2 = {};
                    if ("string" == typeof _e4) try {
                        _c2 = JSON.parse(_e4);
                    } catch (_unused4) {
                        return;
                    } else {
                        if ("object" != _typeof(_e4) || _e4.constructor !== Object) return;
                        _c2 = _e4;
                    }
                    var _n2 = _c2 && (_c2.__tcfapiCall || _c2.__sdcmpapiCall);
                    if (!_n2) return;
                    try {
                        var _o = _c2.__tcfapiCall ? window.__tcfapi : window.__sdcmpapi,
                            _i2 = _c2.__tcfapiCall ? "__tcfapiReturn" : "__sdcmpapiReturn";
                        _o(_n2.command, _n2.version, function (c, o) {
                            var r = {};
                            r[_i2] = {
                                returnValue: c,
                                success: o,
                                callId: _n2.callId
                            };
                            var p = "null" === t.origin ? "*" : t.origin;
                            t.source.postMessage("string" == typeof _e4 ? JSON.stringify(r) : r, p);
                        }, _n2.parameter);
                    } catch (_unused5) {}
                } catch (_unused6) {}
            }, !1);
        } catch (_unused7) {}
    };
    try {
        t(), void 0 !== module && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) && (module.exports = t);
    } catch (_unused8) {}
}();
(function () {
    window.ABconsentCMP = window.ABconsentCMP || {};
    window.ABconsentCMP.enableConsentMode = window.ABconsentCMP.enableConsentMode ? true : window.ABconsentCMP.enableConsentMode === undefined && true;
    window.ABconsentCMP = window.ABconsentCMP || {};
    var ABconsentCMP = window.ABconsentCMP;
    ABconsentCMP.loaded = ABconsentCMP.loaded || {};
    ABconsentCMP.runOnce = ABconsentCMP.runOnce || function (flagName, fn) {
        if (ABconsentCMP.loaded[flagName]) return;
        ABconsentCMP.loaded[flagName] = true;
        try {
            if (typeof fn === "function") {
                fn(ABconsentCMP);
            }
        } catch (e) {}
    };
    ABconsentCMP.runOnce("consentModeGtm", function (ABconsentCMP) {
        if (!ABconsentCMP.enableConsentMode) return;
        try {
            var gtmDataLayerName = ABconsentCMP.gtmDataLayerName || "dataLayer";
            var consentModeFromTcf = ABconsentCMP.consentModeFromTcf === true;
            window[gtmDataLayerName] = window[gtmDataLayerName] || [];
            function gtag() {
                window[gtmDataLayerName].push(arguments);
            }
            gtag('set', 'developer_id.dOWE1OT', true);
            var gtmDefaultValues = {
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                security_storage: 'denied',
                personalization_storage: 'denied',
                wait_for_update: 1000
            };
            if (!consentModeFromTcf) {
                gtmDefaultValues['ad_storage'] = 'denied';
                gtmDefaultValues['ad_user_data'] = 'denied';
                gtmDefaultValues['ad_personalization'] = 'denied';
            }
            gtag('consent', 'default', gtmDefaultValues);
        } catch (e) {}
    });
    ABconsentCMP.runOnce("consentModeAdsense", function () {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
        } catch (e) {}
    });
})();
var scripts = document.getElementsByTagName("script");
for(var i = 0; i < scripts.length;i++) {
    if(scripts[i].src.indexOf("https://cmp-rde-preprod.sirdata-test.com/js/pa/20876/c/h2hQC/cmp") >= 0) {
        scripts[i].src += "/ie11";
    }
}

// Détection basique d'IE11
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE11) {
    // On écoute l'événement spécifique à IE
    document.addEventListener('beforescriptexecute', function(e) {
        var script = e.target;

        // Vérification : est-ce le script que l'on veut bloquer ?
        // Remplacez 'votre-fichier-moderne.js' par le nom de votre fichier CMP
        if (script.src && script.src.indexOf('https://cmp-rde-preprod.sirdata-test.com/js/pa/20876/c/h2hQC/cmp') !== -1) {

            // 1. On empêche le script moderne de s'exécuter
            e.preventDefault();

            // 2. On empêche le script de rester dans le DOM (optionnel mais propre)
            // Note : Le téléchargement réseau a peut-être déjà eu lieu, mais l'exécution est bloquée.
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }

            // 3. On crée et injecte le nouveau script compatible IE11
            var newScript = document.createElement('script');
            // L'URL du script compatible (celui trouvé dans votre code précédent par exemple)
            newScript.src = '/js/cmp/ie11-stub-with-babel.js';

            // On copie les attributs importants si nécessaire (comme async ou defer)
            newScript.async = script.async;
            newScript.defer = script.defer;

            // On injecte le nouveau script
            document.head.appendChild(newScript);
        }
    });
}
