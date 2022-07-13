var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { ref, readonly, onBeforeUnmount, inject } from "vue";
function e(e2, n2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    n2 && (r2 = r2.filter(function(n3) {
      return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
    })), t2.push.apply(t2, r2);
  }
  return t2;
}
function n(n2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var o2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? e(Object(o2), true).forEach(function(e2) {
      r(n2, e2, o2[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
      Object.defineProperty(n2, e2, Object.getOwnPropertyDescriptor(o2, e2));
    });
  }
  return n2;
}
function t(e2) {
  return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function r(e2, n2, t2) {
  return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
}
function o(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return i(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || function(e3, n2) {
    if (e3) {
      if (typeof e3 == "string")
        return i(e3, n2);
      var t2 = Object.prototype.toString.call(e3).slice(8, -1);
      return t2 === "Object" && e3.constructor && (t2 = e3.constructor.name), t2 === "Map" || t2 === "Set" ? Array.from(e3) : t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? i(e3, n2) : void 0;
    }
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function i(e2, n2) {
  (n2 == null || n2 > e2.length) && (n2 = e2.length);
  for (var t2 = 0, r2 = new Array(n2); t2 < n2; t2++)
    r2[t2] = e2[t2];
  return r2;
}
function a(e2) {
  function n2(e3, n3) {
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.message = e3, this.code = n3;
  }
  return n2.prototype = new Error(), n2.prototype.name = e2, n2.prototype.constructor = n2, n2;
}
var u = a("LaunchDarklyUnexpectedResponseError"), s = a("LaunchDarklyInvalidEnvironmentIdError"), c = a("LaunchDarklyInvalidUserError"), l = a("LaunchDarklyInvalidEventKeyError"), f = a("LaunchDarklyInvalidArgumentError"), d = a("LaunchDarklyFlagFetchError"), v = a("LaunchDarklyInvalidDataError");
function g(e2) {
  return !(e2 >= 400 && e2 < 500) || e2 === 400 || e2 === 408 || e2 === 429;
}
for (var p = Object.freeze({ __proto__: null, LDUnexpectedResponseError: u, LDInvalidEnvironmentIdError: s, LDInvalidUserError: c, LDInvalidEventKeyError: l, LDInvalidArgumentError: f, LDFlagFetchError: d, LDInvalidDataError: v, isHttpErrorRecoverable: g }), m = [], h = [], y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", w = 0, b = y.length; w < b; ++w)
  m[w] = y[w], h[y.charCodeAt(w)] = w;
function k(e2, n2, t2) {
  for (var r2, o2, i2 = [], a2 = n2; a2 < t2; a2 += 3)
    r2 = (e2[a2] << 16 & 16711680) + (e2[a2 + 1] << 8 & 65280) + (255 & e2[a2 + 2]), i2.push(m[(o2 = r2) >> 18 & 63] + m[o2 >> 12 & 63] + m[o2 >> 6 & 63] + m[63 & o2]);
  return i2.join("");
}
h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63;
var E = Array.isArray, D = Object.keys, S = Object.prototype.hasOwnProperty, O = ["key", "secondary", "ip", "country", "email", "firstName", "lastName", "avatar", "name"];
function P(e2, n2) {
  return (e2.endsWith("/") ? e2.substring(0, e2.length - 1) : e2) + (n2.startsWith("/") ? "" : "/") + n2;
}
function U(e2) {
  return function(e3) {
    for (var n2, t2 = e3.length, r2 = t2 % 3, o2 = [], i2 = 0, a2 = t2 - r2; i2 < a2; i2 += 16383)
      o2.push(k(e3, i2, i2 + 16383 > a2 ? a2 : i2 + 16383));
    return r2 === 1 ? (n2 = e3[t2 - 1], o2.push(m[n2 >> 2] + m[n2 << 4 & 63] + "==")) : r2 === 2 && (n2 = (e3[t2 - 2] << 8) + e3[t2 - 1], o2.push(m[n2 >> 10] + m[n2 >> 4 & 63] + m[n2 << 2 & 63] + "=")), o2.join("");
  }(function(e3) {
    for (var n2 = [], t2 = 0; t2 < e3.length; t2++)
      n2.push(e3.charCodeAt(t2));
    return n2;
  }(unescape(encodeURIComponent(e2))));
}
function j(e2) {
  return U(e2).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function R(e2) {
  return JSON.parse(JSON.stringify(e2));
}
function I(e2, n2) {
  return function e3(n3, t2) {
    if (n3 === t2)
      return true;
    if (n3 && t2 && typeof n3 == "object" && typeof t2 == "object") {
      var r2, o2, i2, a2 = E(n3), u2 = E(t2);
      if (a2 && u2) {
        if ((o2 = n3.length) != t2.length)
          return false;
        for (r2 = o2; r2-- != 0; )
          if (!e3(n3[r2], t2[r2]))
            return false;
        return true;
      }
      if (a2 != u2)
        return false;
      var s2 = n3 instanceof Date, c2 = t2 instanceof Date;
      if (s2 != c2)
        return false;
      if (s2 && c2)
        return n3.getTime() == t2.getTime();
      var l2 = n3 instanceof RegExp, f2 = t2 instanceof RegExp;
      if (l2 != f2)
        return false;
      if (l2 && f2)
        return n3.toString() == t2.toString();
      var d2 = D(n3);
      if ((o2 = d2.length) !== D(t2).length)
        return false;
      for (r2 = o2; r2-- != 0; )
        if (!S.call(t2, d2[r2]))
          return false;
      for (r2 = o2; r2-- != 0; )
        if (!e3(n3[i2 = d2[r2]], t2[i2]))
          return false;
      return true;
    }
    return n3 != n3 && t2 != t2;
  }(e2, n2);
}
function T(e2) {
  setTimeout(e2, 0);
}
function L(e2, n2) {
  var t2 = e2.then(function(e3) {
    return n2 && setTimeout(function() {
      n2(null, e3);
    }, 0), e3;
  }, function(e3) {
    if (!n2)
      return Promise.reject(e3);
    setTimeout(function() {
      n2(e3, null);
    }, 0);
  });
  return n2 ? void 0 : t2;
}
function N(e2) {
  var n2 = {};
  for (var t2 in e2)
    q(e2, t2) && (n2[t2] = { value: e2[t2], version: 0 });
  return n2;
}
function A(e2) {
  var n2 = {};
  for (var t2 in e2)
    q(e2, t2) && (n2[t2] = e2[t2].value);
  return n2;
}
function x(e2, n2) {
  for (var t2, r2 = n2.slice(0), o2 = [], i2 = e2; r2.length > 0; ) {
    for (t2 = []; i2 > 0; ) {
      var a2 = r2.shift();
      if (!a2)
        break;
      (i2 -= j(JSON.stringify(a2)).length) < 0 && t2.length > 0 ? r2.unshift(a2) : t2.push(a2);
    }
    i2 = e2, o2.push(t2);
  }
  return o2;
}
function C(e2) {
  var n2 = e2.version || "3.6.0";
  return e2.userAgent + "/" + n2;
}
function F() {
  for (var e2 = arguments.length, t2 = new Array(e2), r2 = 0; r2 < e2; r2++)
    t2[r2] = arguments[r2];
  return t2.reduce(function(e3, t3) {
    return n(n({}, e3), t3);
  }, {});
}
function q(e2, n2) {
  return Object.prototype.hasOwnProperty.call(e2, n2);
}
function _(e2) {
  if (!e2)
    return e2;
  var t2;
  for (var r2 in O) {
    var o2 = O[r2], i2 = e2[o2];
    i2 !== void 0 && typeof i2 != "string" && ((t2 = t2 || n({}, e2))[o2] = String(i2));
  }
  return t2 || e2;
}
for (var V = Object.freeze({ __proto__: null, appendUrlPath: P, btoa: U, base64URLEncode: j, clone: R, deepEquals: I, onNextTick: T, wrapPromiseCallback: L, transformValuesToVersionedValues: N, transformVersionedValuesToValues: A, chunkUserEventsForUrl: x, getLDUserAgentString: C, extend: F, objectHasOwnProperty: q, sanitizeUser: _ }), z = function(e2, n2) {
  return function(e3) {
    var n3 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (n3) {
      var t2 = new Uint8Array(16);
      e3.exports = function() {
        return n3(t2), t2;
      };
    } else {
      var r2 = new Array(16);
      e3.exports = function() {
        for (var e4, n4 = 0; n4 < 16; n4++)
          (3 & n4) == 0 && (e4 = 4294967296 * Math.random()), r2[n4] = e4 >>> ((3 & n4) << 3) & 255;
        return r2;
      };
    }
  }(n2 = { exports: {} }), n2.exports;
}(), J = [], M = 0; M < 256; ++M)
  J[M] = (M + 256).toString(16).substr(1);
var $, H, K = 0, B = 0, G = function(e2, n2, t2) {
  var r2 = n2 && t2 || 0, o2 = n2 || [], i2 = (e2 = e2 || {}).node || $, a2 = e2.clockseq !== void 0 ? e2.clockseq : H;
  if (i2 == null || a2 == null) {
    var u2 = z();
    i2 == null && (i2 = $ = [1 | u2[0], u2[1], u2[2], u2[3], u2[4], u2[5]]), a2 == null && (a2 = H = 16383 & (u2[6] << 8 | u2[7]));
  }
  var s2 = e2.msecs !== void 0 ? e2.msecs : new Date().getTime(), c2 = e2.nsecs !== void 0 ? e2.nsecs : B + 1, l2 = s2 - K + (c2 - B) / 1e4;
  if (l2 < 0 && e2.clockseq === void 0 && (a2 = a2 + 1 & 16383), (l2 < 0 || s2 > K) && e2.nsecs === void 0 && (c2 = 0), c2 >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  K = s2, B = c2, H = a2;
  var f2 = (1e4 * (268435455 & (s2 += 122192928e5)) + c2) % 4294967296;
  o2[r2++] = f2 >>> 24 & 255, o2[r2++] = f2 >>> 16 & 255, o2[r2++] = f2 >>> 8 & 255, o2[r2++] = 255 & f2;
  var d2 = s2 / 4294967296 * 1e4 & 268435455;
  o2[r2++] = d2 >>> 8 & 255, o2[r2++] = 255 & d2, o2[r2++] = d2 >>> 24 & 15 | 16, o2[r2++] = d2 >>> 16 & 255, o2[r2++] = a2 >>> 8 | 128, o2[r2++] = 255 & a2;
  for (var v2 = 0; v2 < 6; ++v2)
    o2[r2 + v2] = i2[v2];
  return n2 || function(e3, n3) {
    var t3 = n3 || 0, r3 = J;
    return [r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]], "-", r3[e3[t3++]], r3[e3[t3++]], "-", r3[e3[t3++]], r3[e3[t3++]], "-", r3[e3[t3++]], r3[e3[t3++]], "-", r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]], r3[e3[t3++]]].join("");
  }(o2);
}, X = ["debug", "info", "warn", "error", "none"];
function W(e2, n2) {
  if (e2 && e2.destination && typeof e2.destination != "function")
    throw new Error("destination for basicLogger was set to a non-function");
  function t2(e3) {
    return function(n3) {
      console && console[e3] && console[e3].call(console, n3);
    };
  }
  var r2 = e2 && e2.destination ? [e2.destination, e2.destination, e2.destination, e2.destination] : [t2("log"), t2("info"), t2("warn"), t2("error")], i2 = !(!e2 || !e2.destination), a2 = e2 && e2.prefix !== void 0 && e2.prefix !== null ? e2.prefix : "[LaunchDarkly] ", u2 = 1;
  if (e2 && e2.level)
    for (var s2 = 0; s2 < X.length; s2++)
      X[s2] === e2.level && (u2 = s2);
  function c2(e3, t3, u3) {
    if (!(u3.length < 1)) {
      var s3, c3 = i2 ? t3 + ": " + a2 : a2;
      if (u3.length !== 1 && n2) {
        var l3 = o(u3);
        l3[0] = c3 + l3[0], s3 = n2.apply(void 0, o(l3));
      } else
        s3 = c3 + u3[0];
      try {
        r2[e3](s3);
      } catch (e4) {
        console && console.log && console.log("[LaunchDarkly] Configured logger's " + t3 + " method threw an exception: " + e4);
      }
    }
  }
  for (var l2 = {}, f2 = function(e3) {
    var n3 = X[e3];
    if (n3 !== "none")
      if (e3 < u2)
        l2[n3] = function() {
        };
      else {
        var t3 = e3;
        l2[n3] = function() {
          c2(t3, n3, arguments);
        };
      }
  }, d2 = 0; d2 < X.length; d2++)
    f2(d2);
  return l2;
}
function Q(e2, n2) {
  return W({ level: e2, prefix: n2 });
}
function Y(e2) {
  return e2 && e2.message ? e2.message : typeof e2 == "string" || e2 instanceof String ? e2 : JSON.stringify(e2);
}
var Z = " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.", ee = function(e2) {
  return 'Expected application/json content type but got "' + e2 + '"';
}, ne = function(e2) {
  return "local storage is unavailable: " + Y(e2);
}, te = function(e2) {
  return "network error" + (e2 ? " (" + e2 + ")" : "");
}, re = function(e2) {
  return 'Custom event "' + e2 + '" does not exist';
}, oe = function() {
  return "Environment not found. Double check that you specified a valid environment/client-side ID." + Z;
}, ie = function() {
  return "No environment/client-side ID was specified." + Z;
}, ae = function(e2) {
  return "Error fetching flag settings: " + Y(e2);
}, ue = function() {
  return "No user specified." + Z;
}, se = function() {
  return "Invalid user specified." + Z;
}, ce = function() {
  return "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." + Z;
}, le = function(e2, n2) {
  return n2 ? '"' + e2 + '" is deprecated, please use "' + n2 + '"' : '"' + e2 + '" is deprecated';
}, fe = function(e2, n2, t2) {
  return "Received error " + e2 + (e2 === 401 ? " (invalid SDK key)" : "") + " for " + n2 + " - " + (g(e2) ? t2 : "giving up permanently");
}, de = function() {
  return "Cannot make HTTP requests in this environment." + Z;
}, ve = function(e2) {
  return "Opening stream connection to " + e2;
}, ge = function(e2, n2) {
  return "Error on stream connection: " + Y(e2) + ", will continue retrying every " + n2 + " milliseconds.";
}, pe = function(e2) {
  return 'Ignoring unknown config option "' + e2 + '"';
}, me = function(e2, n2, t2) {
  return 'Config option "' + e2 + '" should be of type ' + n2 + ", got " + t2 + ", using default value";
}, he = function(e2, n2) {
  return 'Config option "' + e2 + '" should be a boolean, got ' + n2 + ", converting to boolean";
}, ye = function(e2, n2, t2) {
  return 'Config option "' + e2 + '" was set to ' + n2 + ", changing to minimum value of " + t2;
}, we = function(e2) {
  return "polling for feature flags at " + e2;
}, be = function(e2) {
  return 'received streaming update for flag "' + e2 + '"';
}, ke = function(e2) {
  return 'received streaming update for flag "' + e2 + '" but ignored due to version check';
}, Ee = function(e2) {
  return 'received streaming deletion for flag "' + e2 + '"';
}, De = function(e2) {
  return 'received streaming deletion for flag "' + e2 + '" but ignored due to version check';
}, Se = function(e2) {
  return 'enqueueing "' + e2 + '" event';
}, Oe = function(e2) {
  return "sending " + e2 + " events";
}, Pe = function(e2) {
  return 'Config option "'.concat(e2, '" must only contain letters, numbers, ., _ or -.');
}, Ue = Object.freeze({ __proto__: null, clientInitialized: function() {
  return "LaunchDarkly client initialized";
}, clientNotReady: function() {
  return "LaunchDarkly client is not ready";
}, eventCapacityExceeded: function() {
  return "Exceeded event queue capacity. Increase capacity to avoid dropping events.";
}, eventWithoutUser: function() {
  return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript";
}, invalidContentType: ee, invalidKey: function() {
  return "Event key must be a string";
}, localStorageUnavailable: ne, networkError: te, unknownCustomEventKey: re, environmentNotFound: oe, environmentNotSpecified: ie, errorFetchingFlags: ae, userNotSpecified: ue, invalidUser: se, invalidData: function() {
  return "Invalid data received from LaunchDarkly; connection may have been interrupted";
}, bootstrapOldFormat: ce, bootstrapInvalid: function() {
  return "LaunchDarkly bootstrap data is not available because the back end could not read the flags.";
}, deprecated: le, httpErrorMessage: fe, httpUnavailable: de, identifyDisabled: function() {
  return "identify() has no effect here; it must be called on the main client instance";
}, streamClosing: function() {
  return "Closing stream connection";
}, streamConnecting: ve, streamError: ge, unknownOption: pe, wrongOptionType: me, wrongOptionTypeBoolean: he, optionBelowMinimum: ye, debugPolling: we, debugStreamPing: function() {
  return "received ping message from stream";
}, debugStreamPut: function() {
  return "received streaming update for all flags";
}, debugStreamPatch: be, debugStreamPatchIgnored: ke, debugStreamDelete: Ee, debugStreamDeleteIgnored: De, debugEnqueueingEvent: Se, debugPostingEvents: Oe, debugPostingDiagnosticEvent: function(e2) {
  return "sending diagnostic event (" + e2.kind + ")";
}, invalidTagValue: Pe }), je = { baseUrl: { default: "https://app.launchdarkly.com" }, streamUrl: { default: "https://clientstream.launchdarkly.com" }, eventsUrl: { default: "https://events.launchdarkly.com" }, sendEvents: { default: true }, streaming: { type: "boolean" }, sendLDHeaders: { default: true }, requestHeaderTransform: { type: "function" }, inlineUsersInEvents: { default: false }, allowFrequentDuplicateEvents: { default: false }, sendEventsOnlyForVariation: { default: false }, useReport: { default: false }, evaluationReasons: { default: false }, eventCapacity: { default: 100, minimum: 1 }, flushInterval: { default: 2e3, minimum: 2e3 }, samplingInterval: { default: 0, minimum: 0 }, streamReconnectDelay: { default: 1e3, minimum: 0 }, allAttributesPrivate: { default: false }, privateAttributeNames: { default: [] }, bootstrap: { type: "string|object" }, diagnosticRecordingInterval: { default: 9e5, minimum: 2e3 }, diagnosticOptOut: { default: false }, wrapperName: { type: "string" }, wrapperVersion: { type: "string" }, stateProvider: { type: "object" }, autoAliasingOptOut: { default: false }, application: { validator: function(e2, n2, t2, r2) {
  var o2 = {};
  return t2.id && (o2.id = Ie("".concat(e2, ".id"), n2, t2.id, r2)), t2.version && (o2.version = Ie("".concat(e2, ".version"), n2, t2.version, r2)), o2;
} } }, Re = /^(\w|\.|-)+$/;
function Ie(e2, n2, t2, r2) {
  if (typeof t2 == "string" && t2.match(Re))
    return t2;
  r2.warn(Pe(e2));
}
function Te(e2, n2, r2, o2) {
  var i2 = F({ logger: { default: o2 } }, je, r2), a2 = { all_attributes_private: "allAttributesPrivate", private_attribute_names: "privateAttributeNames", samplingInterval: null };
  function u2(e3) {
    T(function() {
      n2 && n2.maybeReportError(new f(e3));
    });
  }
  var s2 = F({}, e2 || {});
  return function(e3) {
    var n3 = e3;
    Object.keys(a2).forEach(function(e4) {
      if (n3[e4] !== void 0) {
        var t2 = a2[e4];
        o2 && o2.warn(le(e4, t2)), t2 && (n3[t2] === void 0 && (n3[t2] = n3[e4]), delete n3[e4]);
      }
    });
  }(s2), function(e3) {
    X.forEach(function(n3) {
      if (n3 !== "none" && (!e3[n3] || typeof e3[n3] != "function"))
        throw new Error("Provided logger instance must support logger." + n3 + "(...) method");
    });
  }((s2 = function(e3) {
    var n3 = F({}, e3), r3 = function(e4) {
      if (e4 === null)
        return "any";
      if (e4 !== void 0) {
        if (Array.isArray(e4))
          return "array";
        var n4 = t(e4);
        return n4 === "boolean" || n4 === "string" || n4 === "number" || n4 === "function" ? n4 : "object";
      }
    };
    return Object.keys(e3).forEach(function(t2) {
      var a3 = e3[t2];
      if (a3 != null) {
        var s3 = i2[t2];
        if (s3 === void 0)
          u2(pe(t2));
        else {
          var c2 = s3.type || r3(s3.default), l2 = s3.validator;
          if (l2) {
            var f2 = l2(t2, e3, e3[t2], o2);
            f2 !== void 0 ? n3[t2] = f2 : delete n3[t2];
          } else if (c2 !== "any") {
            var d2 = c2.split("|"), v2 = r3(a3);
            d2.indexOf(v2) < 0 ? c2 === "boolean" ? (n3[t2] = !!a3, u2(he(t2, v2))) : (u2(me(t2, c2, v2)), n3[t2] = s3.default) : v2 === "number" && s3.minimum !== void 0 && a3 < s3.minimum && (u2(ye(t2, a3, s3.minimum)), n3[t2] = s3.minimum);
          }
        }
      }
    }), n3;
  }(s2 = function(e3) {
    var n3 = F({}, e3);
    return Object.keys(i2).forEach(function(e4) {
      n3[e4] !== void 0 && n3[e4] !== null || (n3[e4] = i2[e4] && i2[e4].default);
    }), n3;
  }(s2))).logger), s2;
}
function Le(e2) {
  var n2 = {};
  return e2 && (e2.application && e2.application.id !== void 0 && e2.application.id !== null && (n2["application-id"] = [e2.application.id]), e2.application && e2.application.version !== void 0 && e2.application.id !== null && (n2["application-version"] = [e2.application.version])), n2;
}
function Ne(e2, n2) {
  if (n2 && !n2.sendLDHeaders)
    return {};
  var t2 = { "X-LaunchDarkly-User-Agent": C(e2) };
  n2 && n2.wrapperName && (t2["X-LaunchDarkly-Wrapper"] = n2.wrapperVersion ? n2.wrapperName + "/" + n2.wrapperVersion : n2.wrapperName);
  var r2 = Le(n2), o2 = Object.keys(r2);
  return o2.length && (t2["x-launchdarkly-tags"] = o2.sort().flatMap(function(e3) {
    return Array.isArray(r2[e3]) ? r2[e3].sort().map(function(n3) {
      return "".concat(e3, "/").concat(n3);
    }) : ["".concat(e3, "/").concat(r2[e3])];
  }).join(" ")), t2;
}
function Ae(e2, t2) {
  return t2 && t2.requestHeaderTransform ? t2.requestHeaderTransform(n({}, e2)) : e2;
}
function xe(e2, n2, t2) {
  var r2 = "/a/" + n2 + ".gif", o2 = F({ "Content-Type": "application/json" }, Ne(e2, t2)), i2 = e2.httpFallbackPing, a2 = { sendChunk: function(n3, a3, u2, s2) {
    var c2 = JSON.stringify(n3), l2 = u2 ? null : G();
    return s2 ? function n4(r3) {
      var i3 = u2 ? o2 : F({}, o2, { "X-LaunchDarkly-Event-Schema": "3", "X-LaunchDarkly-Payload-ID": l2 });
      return e2.httpRequest("POST", a3, Ae(i3, t2), c2).promise.then(function(e3) {
        if (e3)
          return e3.status >= 400 && g(e3.status) && r3 ? n4(false) : function(e4) {
            var n5 = { status: e4.status }, t3 = e4.header("date");
            if (t3) {
              var r4 = Date.parse(t3);
              r4 && (n5.serverTime = r4);
            }
            return n5;
          }(e3);
      }).catch(function() {
        return r3 ? n4(false) : Promise.reject();
      });
    }(true).catch(function() {
    }) : (i2 && i2(a3 + r2 + "?d=" + j(c2)), Promise.resolve());
  }, sendEvents: function(n3, t3, r3) {
    if (!e2.httpRequest)
      return Promise.resolve();
    var o3, i3 = e2.httpAllowsPost();
    o3 = i3 ? [n3] : x(2e3 - t3.length, n3);
    for (var u2 = [], s2 = 0; s2 < o3.length; s2++)
      u2.push(a2.sendChunk(o3[s2], t3, r3, i3));
    return Promise.all(u2);
  } };
  return a2;
}
function Ce() {
  var e2 = {}, n2 = 0, t2 = 0, r2 = {};
  return e2.summarizeEvent = function(e3) {
    if (e3.kind === "feature") {
      var o2 = e3.key + ":" + (e3.variation !== null && e3.variation !== void 0 ? e3.variation : "") + ":" + (e3.version !== null && e3.version !== void 0 ? e3.version : ""), i2 = r2[o2];
      i2 ? i2.count = i2.count + 1 : r2[o2] = { count: 1, key: e3.key, variation: e3.variation, version: e3.version, value: e3.value, default: e3.default }, (n2 === 0 || e3.creationDate < n2) && (n2 = e3.creationDate), e3.creationDate > t2 && (t2 = e3.creationDate);
    }
  }, e2.getSummary = function() {
    var e3 = {}, o2 = true;
    for (var i2 in r2) {
      var a2 = r2[i2], u2 = e3[a2.key];
      u2 || (u2 = { default: a2.default, counters: [] }, e3[a2.key] = u2);
      var s2 = { value: a2.value, count: a2.count };
      a2.variation !== void 0 && a2.variation !== null && (s2.variation = a2.variation), a2.version ? s2.version = a2.version : s2.unknown = true, u2.counters.push(s2), o2 = false;
    }
    return o2 ? null : { startDate: n2, endDate: t2, features: e3 };
  }, e2.clearSummary = function() {
    n2 = 0, t2 = 0, r2 = {};
  }, e2;
}
function Fe(e2) {
  var n2 = {}, t2 = e2.allAttributesPrivate, r2 = e2.privateAttributeNames || [], o2 = { key: true, custom: true, anonymous: true }, i2 = { key: true, secondary: true, ip: true, country: true, email: true, firstName: true, lastName: true, avatar: true, name: true, anonymous: true, custom: true };
  return n2.filterUser = function(e3) {
    if (!e3)
      return null;
    var n3 = e3.privateAttributeNames || [], a2 = function(e4, i3) {
      return Object.keys(e4).reduce(function(a3, u3) {
        var s3 = a3;
        return i3(u3) && (function(e5) {
          return !o2[e5] && (t2 || n3.indexOf(e5) !== -1 || r2.indexOf(e5) !== -1);
        }(u3) ? s3[1][u3] = true : s3[0][u3] = e4[u3]), s3;
      }, [{}, {}]);
    }, u2 = a2(e3, function(e4) {
      return i2[e4];
    }), s2 = u2[0], c2 = u2[1];
    if (e3.custom) {
      var l2 = a2(e3.custom, function() {
        return true;
      });
      s2.custom = l2[0], c2 = F({}, c2, l2[1]);
    }
    var f2 = Object.keys(c2);
    return f2.length && (f2.sort(), s2.privateAttrs = f2), s2;
  }, n2;
}
function qe(e2, n2, t2, r2) {
  var o2 = {};
  function i2() {
    var e3 = "", o3 = r2.getUser();
    return o3 && (e3 = t2 || U(JSON.stringify(o3))), "ld:" + n2 + ":" + e3;
  }
  return o2.loadFlags = function() {
    return e2.get(i2()).then(function(e3) {
      if (e3 == null)
        return null;
      try {
        var n3 = JSON.parse(e3);
        if (n3) {
          var t3 = n3.$schema;
          t3 === void 0 || t3 < 1 ? n3 = N(n3) : delete n3.$schema;
        }
        return n3;
      } catch (e4) {
        return o2.clearFlags().then(function() {
          return null;
        });
      }
    });
  }, o2.saveFlags = function(n3) {
    var t3 = F({}, n3, { $schema: 1 });
    return e2.set(i2(), JSON.stringify(t3));
  }, o2.clearFlags = function() {
    return e2.clear(i2());
  }, o2;
}
function _e(e2, n2, t2, r2) {
  var o2, i2 = n2.streamUrl, a2 = n2.logger, u2 = {}, s2 = P(i2, "/eval/" + t2), c2 = n2.useReport, l2 = n2.evaluationReasons, f2 = n2.streamReconnectDelay, d2 = Ne(e2, n2), v2 = false, g2 = null, p = null, m = null, h = null, y = null;
  function w(e3) {
    v2 || (a2.warn(ge(e3, f2)), v2 = true), D2(false), E2(), b(f2);
  }
  function b(e3) {
    p || (e3 ? p = setTimeout(k2, e3) : k2());
  }
  function k2() {
    var r3;
    p = null;
    var u3 = "", f3 = { headers: d2, readTimeoutMillis: 3e5 };
    if (e2.eventSourceFactory) {
      for (var v3 in h != null && (u3 = "h=" + h), c2 ? e2.eventSourceAllowsReport ? (r3 = s2, f3.method = "REPORT", f3.headers["Content-Type"] = "application/json", f3.body = JSON.stringify(m)) : (r3 = P(i2, "/ping/" + t2), u3 = "") : r3 = s2 + "/" + j(JSON.stringify(m)), f3.headers = Ae(f3.headers, n2), l2 && (u3 = u3 + (u3 ? "&" : "") + "withReasons=true"), r3 = r3 + (u3 ? "?" : "") + u3, E2(), a2.info(ve(r3)), o2 = new Date().getTime(), g2 = e2.eventSourceFactory(r3, f3), y)
        q(y, v3) && g2.addEventListener(v3, y[v3]);
      g2.onerror = w;
    }
  }
  function E2() {
    g2 && (a2.info("Closing stream connection"), g2.close(), g2 = null);
  }
  function D2(e3) {
    o2 && r2 && r2.recordStreamInit(o2, !e3, new Date().getTime() - o2), o2 = null;
  }
  return u2.connect = function(e3, n3, t3) {
    m = e3, h = n3, y = {};
    var r3 = function(e4) {
      y[e4] = function(n4) {
        v2 = false, D2(true), t3[e4] && t3[e4](n4);
      };
    };
    for (var o3 in t3 || {})
      r3(o3);
    b();
  }, u2.disconnect = function() {
    clearTimeout(p), p = null, E2();
  }, u2.isConnected = function() {
    return !!(g2 && e2.eventSourceIsActive && e2.eventSourceIsActive(g2));
  }, u2;
}
function Ve(e2, n2, t2) {
  var r2 = n2.baseUrl, o2 = n2.useReport, i2 = n2.evaluationReasons, a2 = n2.logger, u2 = {}, c2 = {};
  function l2(t3, r3) {
    if (!e2.httpRequest)
      return new Promise(function(e3, n3) {
        n3(new d(de()));
      });
    var o3 = r3 ? "REPORT" : "GET", i3 = Ne(e2, n2);
    r3 && (i3["Content-Type"] = "application/json");
    var a3 = c2[t3];
    a3 || (a3 = function(e3) {
      var n3, t4, r4, o4, i4 = { addPromise: function(i5, a4) {
        n3 = i5, t4 && t4(), t4 = a4, i5.then(function(t5) {
          n3 === i5 && (r4(t5), e3 && e3());
        }, function(t5) {
          n3 === i5 && (o4(t5), e3 && e3());
        });
      } };
      return i4.resultPromise = new Promise(function(e4, n4) {
        r4 = e4, o4 = n4;
      }), i4;
    }(function() {
      delete c2[t3];
    }), c2[t3] = a3);
    var u3 = e2.httpRequest(o3, t3, Ae(i3, n2), r3), l3 = u3.promise.then(function(e3) {
      if (e3.status === 200) {
        if (e3.header("content-type") && e3.header("content-type").substring(0, "application/json".length) === "application/json")
          return JSON.parse(e3.body);
        var n3 = ee(e3.header("content-type") || "");
        return Promise.reject(new d(n3));
      }
      return Promise.reject(function(e4) {
        return e4.status === 404 ? new s(oe()) : new d(ae(e4.statusText || String(e4.status)));
      }(e3));
    }, function(e3) {
      return Promise.reject(new d(te(e3)));
    });
    return a3.addPromise(l3, function() {
      u3.cancel && u3.cancel();
    }), a3.resultPromise;
  }
  return u2.fetchJSON = function(e3) {
    return l2(P(r2, e3), null);
  }, u2.fetchFlagSettings = function(e3, n3) {
    var u3, s2, c3, f2 = "";
    return o2 ? (s2 = [r2, "/sdk/evalx/", t2, "/user"].join(""), c3 = JSON.stringify(e3)) : (u3 = j(JSON.stringify(e3)), s2 = [r2, "/sdk/evalx/", t2, "/users/", u3].join("")), n3 && (f2 = "h=" + n3), i2 && (f2 = f2 + (f2 ? "&" : "") + "withReasons=true"), s2 = s2 + (f2 ? "?" : "") + f2, a2.debug(we(s2)), l2(s2, c3);
  }, u2;
}
function ze(e2) {
  var n2 = { validateUser: function(n3) {
    if (!n3)
      return Promise.reject(new c(ue()));
    var t2 = R(n3);
    return t2.key !== null && t2.key !== void 0 ? (t2.key = t2.key.toString(), Promise.resolve(t2)) : t2.anonymous ? e2.get("ld:$anonUserId").then(function(n4) {
      if (n4)
        return t2.key = n4, t2;
      var r2 = G();
      return t2.key = r2, function(n5) {
        return e2.set("ld:$anonUserId", n5);
      }(r2).then(function() {
        return t2;
      });
    }) : Promise.reject(new c(se()));
  } };
  return n2;
}
var Je = Object.freeze({ __proto__: null, baseOptionDefs: je, validate: Te, getTags: Le }).baseOptionDefs, Me = V.appendUrlPath, $e = function(e2) {
  var n2 = { diagnosticId: G() };
  return e2 && (n2.sdkKeySuffix = e2.length > 6 ? e2.substring(e2.length - 6) : e2), n2;
};
function He(e2, r2, o2, i2, a2) {
  var c2, f2, p, m = o2 && o2.logger ? o2.logger : a2 && a2.logger && a2.logger.default || Q("warn"), h = function(e3) {
    var n2 = {}, t2 = {};
    return n2.on = function(e4, n3, r3) {
      t2[e4] = t2[e4] || [], t2[e4] = t2[e4].concat({ handler: n3, context: r3 });
    }, n2.off = function(e4, n3, r3) {
      if (t2[e4])
        for (var o3 = 0; o3 < t2[e4].length; o3++)
          t2[e4][o3].handler === n3 && t2[e4][o3].context === r3 && (t2[e4] = t2[e4].slice(0, o3).concat(t2[e4].slice(o3 + 1)));
    }, n2.emit = function(e4) {
      if (t2[e4])
        for (var n3 = t2[e4].slice(0), r3 = 0; r3 < n3.length; r3++)
          n3[r3].handler.apply(n3[r3].context, Array.prototype.slice.call(arguments, 1));
    }, n2.getEvents = function() {
      return Object.keys(t2);
    }, n2.getEventListenerCount = function(e4) {
      return t2[e4] ? t2[e4].length : 0;
    }, n2.maybeReportError = function(n3) {
      n3 && (t2.error ? this.emit("error", n3) : (e3 || console).error(n3.message));
    }, n2;
  }(m), y = function(e3) {
    var n2 = false, t2 = false, r3 = null, o3 = null, i3 = new Promise(function(n3) {
      e3.on("ready", function t3() {
        e3.off("ready", t3), n3();
      });
    }).catch(function() {
    });
    return { getInitializationPromise: function() {
      return o3 || (n2 ? Promise.resolve() : t2 ? Promise.reject(r3) : o3 = new Promise(function(n3, t3) {
        e3.on("initialized", function t4() {
          e3.off("initialized", t4), n3();
        }), e3.on("failed", function n4(r4) {
          e3.off("failed", n4), t3(r4);
        });
      }));
    }, getReadyPromise: function() {
      return i3;
    }, signalSuccess: function() {
      n2 || t2 || (n2 = true, e3.emit("initialized"), e3.emit("ready"));
    }, signalFailure: function(o4) {
      n2 || t2 || (t2 = true, r3 = o4, e3.emit("failed", o4), e3.emit("ready")), e3.maybeReportError(o4);
    } };
  }(h), w = Te(o2, h, a2, m), b = w.sendEvents, k2 = e2, E2 = w.hash, D2 = function(e3, n2) {
    var t2 = {}, r3 = false, o3 = function(e4) {
      r3 || (r3 = true, n2.warn(ne(e4)));
    };
    return t2.isEnabled = function() {
      return !!e3;
    }, t2.get = function(n3) {
      return new Promise(function(t3) {
        e3 ? e3.get(n3).then(t3).catch(function(e4) {
          o3(e4), t3(void 0);
        }) : t3(void 0);
      });
    }, t2.set = function(n3, t3) {
      return new Promise(function(r4) {
        e3 ? e3.set(n3, t3).then(function() {
          return r4(true);
        }).catch(function(e4) {
          o3(e4), r4(false);
        }) : r4(false);
      });
    }, t2.clear = function(n3) {
      return new Promise(function(t3) {
        e3 ? e3.clear(n3).then(function() {
          return t3(true);
        }).catch(function(e4) {
          o3(e4), t3(false);
        }) : t3(false);
      });
    }, t2;
  }(i2.localStorage, m), S2 = xe(i2, k2, w), O2 = w.sendEvents && !w.diagnosticOptOut, U2 = O2 ? $e(k2) : null, j2 = O2 ? function(e3) {
    var n2, t2, r3, o3;
    function i3(e4) {
      n2 = e4, t2 = 0, r3 = 0, o3 = [];
    }
    return i3(e3), { getProps: function() {
      return { dataSinceDate: n2, droppedEvents: t2, eventsInLastBatch: r3, streamInits: o3 };
    }, setProps: function(e4) {
      n2 = e4.dataSinceDate, t2 = e4.droppedEvents || 0, r3 = e4.eventsInLastBatch || 0, o3 = e4.streamInits || [];
    }, incrementDroppedEvents: function() {
      t2++;
    }, setEventsInLastBatch: function(e4) {
      r3 = e4;
    }, recordStreamInit: function(e4, n3, t3) {
      var r4 = { timestamp: e4, failed: n3, durationMillis: t3 };
      o3.push(r4);
    }, reset: i3 };
  }(new Date().getTime()) : null, N2 = O2 ? function(e3, t2, r3, o3, i3, a3, u2) {
    var s2, c3, l2 = !!e3.diagnosticUseCombinedEvent, f3 = "ld:" + i3 + ":$diagnostics", d2 = Me(a3.eventsUrl, "/events/diagnostic/" + i3), v2 = a3.diagnosticRecordingInterval, g2 = r3, p2 = !!a3.streaming, m2 = {};
    function h2() {
      return { sdk: b2(), configuration: (n2 = { customBaseURI: a3.baseUrl !== Je.baseUrl.default, customStreamURI: a3.streamUrl !== Je.streamUrl.default, customEventsURI: a3.eventsUrl !== Je.eventsUrl.default, eventsCapacity: a3.eventCapacity, eventsFlushIntervalMillis: a3.flushInterval, reconnectTimeMillis: a3.streamReconnectDelay, streamingDisabled: !p2, allAttributesPrivate: !!a3.allAttributesPrivate, inlineUsersInEvents: !!a3.inlineUsersInEvents, diagnosticRecordingIntervalMillis: a3.diagnosticRecordingInterval, usingSecureMode: !!a3.hash, bootstrapMode: !!a3.bootstrap, fetchGoalsDisabled: !a3.fetchGoals, allowFrequentDuplicateEvents: !!a3.allowFrequentDuplicateEvents, sendEventsOnlyForVariation: !!a3.sendEventsOnlyForVariation, autoAliasingOptOut: !!a3.autoAliasingOptOut }, n2), platform: e3.diagnosticPlatformData };
      var n2;
    }
    function y2(e4) {
      a3.logger && a3.logger.debug(Ue.debugPostingDiagnosticEvent(e4)), o3.sendEvents(e4, d2, true).then(function() {
      }).catch(function() {
      });
    }
    function w2() {
      var e4, r4;
      y2((e4 = new Date().getTime(), r4 = n({ kind: l2 ? "diagnostic-combined" : "diagnostic", id: u2, creationDate: e4 }, g2.getProps()), l2 && (r4 = n(n({}, r4), h2())), g2.reset(e4), r4)), c3 = setTimeout(w2, v2), s2 = new Date().getTime(), l2 && function() {
        if (t2.isEnabled()) {
          var e5 = n({}, g2.getProps());
          t2.set(f3, JSON.stringify(e5));
        }
      }();
    }
    function b2() {
      var t3 = n({}, e3.diagnosticSdkData);
      return a3.wrapperName && (t3.wrapperName = a3.wrapperName), a3.wrapperVersion && (t3.wrapperVersion = a3.wrapperVersion), t3;
    }
    return m2.start = function() {
      l2 ? function(e4) {
        if (!t2.isEnabled())
          return e4(false);
        t2.get(f3).then(function(n2) {
          if (n2)
            try {
              var t3 = JSON.parse(n2);
              g2.setProps(t3), s2 = t3.dataSinceDate;
            } catch (e5) {
            }
          e4(true);
        }).catch(function() {
          e4(false);
        });
      }(function(e4) {
        if (e4) {
          var n2 = (s2 || 0) + v2, t3 = new Date().getTime();
          t3 >= n2 ? w2() : c3 = setTimeout(w2, n2 - t3);
        } else
          Math.floor(4 * Math.random()) === 0 ? w2() : c3 = setTimeout(w2, v2);
      }) : (y2(n({ kind: "diagnostic-init", id: u2, creationDate: g2.getProps().dataSinceDate }, h2())), c3 = setTimeout(w2, v2));
    }, m2.stop = function() {
      c3 && clearTimeout(c3);
    }, m2.setStreaming = function(e4) {
      p2 = e4;
    }, m2;
  }(i2, D2, j2, S2, k2, w, U2) : null, x2 = _e(i2, w, k2, j2), C2 = w.eventProcessor || function(e3, n2, t2) {
    var r3, o3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, i3 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, a3 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, s2 = {}, c3 = a3 || xe(e3, t2, n2), l2 = P(n2.eventsUrl, "/events/bulk/" + t2), f3 = Ce(), d2 = Fe(n2), v2 = n2.inlineUsersInEvents, p2 = n2.samplingInterval, m2 = n2.eventCapacity, h2 = n2.flushInterval, y2 = n2.logger, w2 = [], b2 = 0, k3 = false, E3 = false;
    function D3() {
      return p2 === 0 || Math.floor(Math.random() * p2) === 0;
    }
    function S3(e4) {
      return !!e4.debugEventsUntilDate && e4.debugEventsUntilDate > b2 && e4.debugEventsUntilDate > new Date().getTime();
    }
    function O3(e4) {
      var n3 = F({}, e4);
      return e4.kind === "alias" || (v2 || e4.kind === "identify" ? n3.user = d2.filterUser(e4.user) : (n3.userKey = e4.user.key, delete n3.user), e4.kind === "feature" && (delete n3.trackEvents, delete n3.debugEventsUntilDate)), n3;
    }
    function U3(e4) {
      w2.length < m2 ? (w2.push(e4), E3 = false) : (E3 || (E3 = true, y2.warn("Exceeded event queue capacity. Increase capacity to avoid dropping events.")), o3 && o3.incrementDroppedEvents());
    }
    return s2.enqueue = function(e4) {
      if (!k3) {
        var n3 = false, t3 = false;
        if (f3.summarizeEvent(e4), e4.kind === "feature" ? D3() && (n3 = !!e4.trackEvents, t3 = S3(e4)) : n3 = D3(), n3 && U3(O3(e4)), t3) {
          var r4 = F({}, e4, { kind: "debug" });
          r4.user = d2.filterUser(r4.user), delete r4.trackEvents, delete r4.debugEventsUntilDate, U3(r4);
        }
      }
    }, s2.flush = function() {
      if (k3)
        return Promise.resolve();
      var e4 = w2, n3 = f3.getSummary();
      return f3.clearSummary(), n3 && (n3.kind = "summary", e4.push(n3)), o3 && o3.setEventsInLastBatch(e4.length), e4.length === 0 ? Promise.resolve() : (w2 = [], y2.debug(Oe(e4.length)), c3.sendEvents(e4, l2).then(function(e5) {
        e5 && (e5.serverTime && (b2 = e5.serverTime), g(e5.status) || (k3 = true), e5.status >= 400 && T(function() {
          i3.maybeReportError(new u(fe(e5.status, "event posting", "some events were dropped")));
        }));
      }));
    }, s2.start = function() {
      r3 = setTimeout(function e4() {
        s2.flush(), r3 = setTimeout(e4, h2);
      }, h2);
    }, s2.stop = function() {
      clearTimeout(r3);
    }, s2;
  }(i2, w, k2, j2, h, S2), V = Ve(i2, w, k2), z = {}, J = {}, M = w.streaming, $2 = false, H2 = false, K2 = true, B2 = w.stateProvider, G2 = function(e3, n2) {
    var t2, r3 = { setUser: function(e4) {
      var r4 = t2 && R(t2);
      (t2 = _(e4)) && n2 && n2(R(t2), r4);
    }, getUser: function() {
      return t2 ? R(t2) : null;
    } };
    return r3;
  }(0, function(e3, n2) {
    (function(e4) {
      B2 || e4 && Y2({ kind: "identify", key: e4.key, user: e4, creationDate: new Date().getTime() });
    })(e3), !w.autoAliasingOptOut && n2 && n2.anonymous && e3 && !e3.anonymous && ue2(e3, n2);
  }), X2 = ze(D2), W2 = D2.isEnabled() ? new qe(D2, k2, E2, G2) : null;
  function Y2(e3) {
    if (k2 && !(B2 && B2.enqueueEvent && B2.enqueueEvent(e3))) {
      if (e3.kind !== "alias") {
        if (!e3.user)
          return void (K2 && (m.warn("Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"), K2 = false));
        K2 = false;
      }
      !b || H2 || i2.isDoNotTrack() || (m.debug(Se(e3.kind)), C2.enqueue(e3));
    }
  }
  function Z2(e3, n2, t2, r3) {
    var o3 = G2.getUser(), i3 = new Date(), a3 = n2 ? n2.value : null;
    if (!w.allowFrequentDuplicateEvents) {
      var u2 = JSON.stringify(a3) + (o3 && o3.key ? o3.key : "") + e3, s2 = z[u2];
      if (s2 && i3 - s2 < 3e5)
        return;
      z[u2] = i3;
    }
    var c3 = { kind: "feature", key: e3, user: o3, value: a3, variation: n2 ? n2.variationIndex : null, default: t2, creationDate: i3.getTime() };
    o3 && o3.anonymous && (c3.contextKind = oe2(o3));
    var l2 = J[e3];
    l2 && (c3.version = l2.flagVersion ? l2.flagVersion : l2.version, c3.trackEvents = l2.trackEvents, c3.debugEventsUntilDate = l2.debugEventsUntilDate), (r3 || l2 && l2.trackReason) && n2 && (c3.reason = n2.reason), Y2(c3);
  }
  function ee2(e3, n2, t2, r3) {
    var o3;
    if (J && q(J, e3) && J[e3] && !J[e3].deleted) {
      var i3 = J[e3];
      o3 = te2(i3), i3.value !== null && i3.value !== void 0 || (o3.value = n2);
    } else
      o3 = { value: n2, variationIndex: null, reason: { kind: "ERROR", errorKind: "FLAG_NOT_FOUND" } };
    return t2 && Z2(e3, o3, n2, r3), o3;
  }
  function te2(e3) {
    return { value: e3.value, variationIndex: e3.variation === void 0 ? null : e3.variation, reason: e3.reason || null };
  }
  function oe2(e3) {
    return e3.anonymous ? "anonymousUser" : "user";
  }
  function ue2(e3, n2) {
    B2 || e3 && n2 && Y2({ kind: "alias", key: e3.key, contextKind: oe2(e3), previousKey: n2.key, previousContextKind: oe2(n2), creationDate: new Date().getTime() });
  }
  function se2() {
    if (f2 = true, G2.getUser()) {
      var e3 = function(e4) {
        try {
          return JSON.parse(e4);
        } catch (e5) {
          return void h.maybeReportError(new v("Invalid data received from LaunchDarkly; connection may have been interrupted"));
        }
      };
      x2.connect(G2.getUser(), E2, { ping: function() {
        m.debug("received ping message from stream");
        var e4 = G2.getUser();
        V.fetchFlagSettings(e4, E2).then(function(n2) {
          I(e4, G2.getUser()) && de2(n2 || {});
        }).catch(function(e5) {
          h.maybeReportError(new d(ae(e5)));
        });
      }, put: function(n2) {
        var t2 = e3(n2.data);
        t2 && (m.debug("received streaming update for all flags"), de2(t2));
      }, patch: function(n2) {
        var t2 = e3(n2.data);
        if (t2) {
          var r3 = J[t2.key];
          if (!r3 || !r3.version || !t2.version || r3.version < t2.version) {
            m.debug(be(t2.key));
            var o3 = {}, i3 = F({}, t2);
            delete i3.key, J[t2.key] = i3;
            var a3 = te2(i3);
            o3[t2.key] = r3 ? { previous: r3.value, current: a3 } : { current: a3 }, ve2(o3);
          } else
            m.debug(ke(t2.key));
        }
      }, delete: function(n2) {
        var t2 = e3(n2.data);
        if (t2)
          if (!J[t2.key] || J[t2.key].version < t2.version) {
            m.debug(Ee(t2.key));
            var r3 = {};
            J[t2.key] && !J[t2.key].deleted && (r3[t2.key] = { previous: J[t2.key].value }), J[t2.key] = { version: t2.version, deleted: true }, ve2(r3);
          } else
            m.debug(De(t2.key));
      } });
    }
  }
  function le2() {
    f2 && (x2.disconnect(), f2 = false);
  }
  function de2(e3) {
    var t2 = {};
    if (!e3)
      return Promise.resolve();
    for (var r3 in J)
      q(J, r3) && J[r3] && (e3[r3] && !I(e3[r3].value, J[r3].value) ? t2[r3] = { previous: J[r3].value, current: te2(e3[r3]) } : e3[r3] && !e3[r3].deleted || (t2[r3] = { previous: J[r3].value }));
    for (var o3 in e3)
      q(e3, o3) && e3[o3] && (!J[o3] || J[o3].deleted) && (t2[o3] = { current: te2(e3[o3]) });
    return J = n({}, e3), ve2(t2).catch(function() {
    });
  }
  function ve2(e3) {
    var n2 = Object.keys(e3);
    if (n2.length > 0) {
      var t2 = {};
      n2.forEach(function(n3) {
        var r3 = e3[n3].current, o3 = r3 ? r3.value : void 0, i3 = e3[n3].previous;
        h.emit("change:" + n3, o3, i3), t2[n3] = r3 ? { current: o3, previous: i3 } : { previous: i3 };
      }), h.emit("change", t2), h.emit("internal-change", J), w.sendEventsOnlyForVariation || B2 || n2.forEach(function(n3) {
        Z2(n3, e3[n3].current);
      });
    }
    return c2 && W2 ? W2.saveFlags(J) : Promise.resolve();
  }
  function ge2() {
    var e3 = M || p && M === void 0;
    e3 && !f2 ? se2() : !e3 && f2 && le2(), N2 && N2.setStreaming(e3);
  }
  function pe2(e3) {
    return e3 === "change" || e3.substr(0, "change".length + 1) === "change:";
  }
  if (typeof w.bootstrap == "string" && w.bootstrap.toUpperCase() === "LOCALSTORAGE" && (W2 ? c2 = true : m.warn(ne())), t(w.bootstrap) === "object" && (J = function(e3) {
    var n2 = Object.keys(e3), t2 = e3.$flagsState;
    !t2 && n2.length && m.warn(ce()), e3.$valid === false && m.warn("LaunchDarkly bootstrap data is not available because the back end could not read the flags.");
    var r3 = {};
    return n2.forEach(function(n3) {
      if (n3 !== "$flagsState" && n3 !== "$valid") {
        var o3 = { value: e3[n3] };
        t2 && t2[n3] ? o3 = F(o3, t2[n3]) : o3.version = 0, r3[n3] = o3;
      }
    }), r3;
  }(w.bootstrap)), B2) {
    var me2 = B2.getInitialState();
    me2 ? he2(me2) : B2.on("init", he2), B2.on("update", function(e3) {
      e3.user && G2.setUser(e3.user), e3.flags && de2(e3.flags);
    });
  } else
    (e2 ? X2.validateUser(r2).then(function(e3) {
      return G2.setUser(e3), t(w.bootstrap) === "object" ? ye2() : c2 ? W2.loadFlags().then(function(e4) {
        return e4 == null ? (J = {}, V.fetchFlagSettings(G2.getUser(), E2).then(function(e5) {
          return de2(e5 || {});
        }).then(ye2).catch(function(e5) {
          we2(new d(ae(e5)));
        })) : (J = e4, T(ye2), V.fetchFlagSettings(G2.getUser(), E2).then(function(e5) {
          return de2(e5);
        }).catch(function(e5) {
          return h.maybeReportError(e5);
        }));
      }) : V.fetchFlagSettings(G2.getUser(), E2).then(function(e4) {
        J = e4 || {}, ye2();
      }).catch(function(e4) {
        J = {}, we2(e4);
      });
    }) : Promise.reject(new s(ie()))).catch(we2);
  function he2(e3) {
    k2 = e3.environment, G2.setUser(e3.user), J = n({}, e3.flags), T(ye2);
  }
  function ye2() {
    m.info("LaunchDarkly client initialized"), $2 = true, ge2(), y.signalSuccess();
  }
  function we2(e3) {
    y.signalFailure(e3);
  }
  return { client: { waitForInitialization: function() {
    return y.getInitializationPromise();
  }, waitUntilReady: function() {
    return y.getReadyPromise();
  }, identify: function(e3, n2, t2) {
    return H2 ? L(Promise.resolve({}), t2) : B2 ? (m.warn("identify() has no effect here; it must be called on the main client instance"), L(Promise.resolve(A(J)), t2)) : L((c2 && W2 ? W2.clearFlags() : Promise.resolve()).then(function() {
      return X2.validateUser(e3);
    }).then(function(e4) {
      return V.fetchFlagSettings(e4, n2).then(function(t3) {
        var r3 = A(t3);
        return G2.setUser(e4), E2 = n2, t3 ? de2(t3).then(function() {
          return r3;
        }) : r3;
      });
    }).then(function(e4) {
      return f2 && se2(), e4;
    }).catch(function(e4) {
      return h.maybeReportError(e4), Promise.reject(e4);
    }), t2);
  }, getUser: function() {
    return G2.getUser();
  }, variation: function(e3, n2) {
    return ee2(e3, n2, true, false).value;
  }, variationDetail: function(e3, n2) {
    return ee2(e3, n2, true, true);
  }, track: function(e3, n2, t2) {
    if (typeof e3 == "string") {
      i2.customEventFilter && !i2.customEventFilter(e3) && m.warn(re(e3));
      var r3 = G2.getUser(), o3 = { kind: "custom", key: e3, user: r3, url: i2.getCurrentUrl(), creationDate: new Date().getTime() };
      r3 && r3.anonymous && (o3.contextKind = oe2(r3)), n2 != null && (o3.data = n2), t2 != null && (o3.metricValue = t2), Y2(o3);
    } else
      h.maybeReportError(new l(re(e3)));
  }, alias: ue2, on: function(e3, n2, t2) {
    pe2(e3) ? (p = true, $2 && ge2(), h.on(e3, n2, t2)) : h.on.apply(h, arguments);
  }, off: function(e3) {
    if (h.off.apply(h, arguments), pe2(e3)) {
      var n2 = false;
      h.getEvents().forEach(function(e4) {
        pe2(e4) && h.getEventListenerCount(e4) > 0 && (n2 = true);
      }), n2 || (p = false, f2 && M === void 0 && le2());
    }
  }, setStreaming: function(e3) {
    var n2 = e3 === null ? void 0 : e3;
    n2 !== M && (M = n2, ge2());
  }, flush: function(e3) {
    return L(b ? C2.flush() : Promise.resolve(), e3);
  }, allFlags: function() {
    var e3 = {};
    if (!J)
      return e3;
    for (var n2 in J)
      q(J, n2) && (e3[n2] = ee2(n2, null, !w.sendEventsOnlyForVariation).value);
    return e3;
  }, close: function(e3) {
    if (H2)
      return L(Promise.resolve(), e3);
    var n2 = function() {
      H2 = true, J = {};
    };
    return L(Promise.resolve().then(function() {
      if (le2(), N2 && N2.stop(), b)
        return C2.stop(), C2.flush();
    }).then(n2).catch(n2), e3);
  } }, options: w, emitter: h, ident: G2, logger: m, requestor: V, start: function() {
    b && (N2 && N2.start(), C2.start());
  }, enqueueEvent: Y2, getFlagsInternal: function() {
    return J;
  }, getEnvironmentId: function() {
    return k2;
  }, internalChangeEventName: "internal-change" };
}
function Ke(e2, n2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    n2 && (r2 = r2.filter(function(n3) {
      return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
    })), t2.push.apply(t2, r2);
  }
  return t2;
}
function Be(e2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var t2 = arguments[n2] != null ? arguments[n2] : {};
    n2 % 2 ? Ke(Object(t2), true).forEach(function(n3) {
      Ge(e2, n3, t2[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : Ke(Object(t2)).forEach(function(n3) {
      Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t2, n3));
    });
  }
  return e2;
}
function Ge(e2, n2, t2) {
  return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
}
Object.freeze({ __proto__: null, commonBasicLogger: W, createConsoleLogger: Q, errors: p, initialize: He, messages: Ue, utils: V, version: "3.6.0" }).commonBasicLogger;
var Qe = { promise: Promise.resolve({ status: 200, header: function() {
  return null;
}, body: null }) };
function Ye(e2, n2, t2, r2, o2) {
  if (o2 && !function() {
    var e3 = window.navigator && window.navigator.userAgent;
    if (e3) {
      var n3 = e3.match(/Chrom(e|ium)\/([0-9]+)\./);
      if (n3)
        return parseInt(n3[2], 10) < 73;
    }
    return true;
  }())
    return Qe;
  var i2 = new window.XMLHttpRequest();
  for (var a2 in i2.open(e2, n2, !o2), t2 || {})
    Object.prototype.hasOwnProperty.call(t2, a2) && i2.setRequestHeader(a2, t2[a2]);
  if (o2)
    return i2.send(r2), Qe;
  var u2, s2 = new Promise(function(e3, n3) {
    i2.addEventListener("load", function() {
      u2 || e3({ status: i2.status, header: function(e4) {
        return i2.getResponseHeader(e4);
      }, body: i2.responseText });
    }), i2.addEventListener("error", function() {
      u2 || n3(new Error());
    }), i2.send(r2);
  });
  return { promise: s2, cancel: function() {
    u2 = true, i2.abort();
  } };
}
function Ze(e2) {
  var n2, t2 = { synchronousFlush: false };
  if (window.XMLHttpRequest) {
    var r2 = e2 && e2.disableSyncEventPost;
    t2.httpRequest = function(e3, n3, o3, i3) {
      var a3 = t2.synchronousFlush & !r2;
      return t2.synchronousFlush = false, Ye(e3, n3, o3, i3, a3);
    };
  }
  t2.httpAllowsPost = function() {
    return n2 === void 0 && (n2 = !!window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest()), n2;
  }, t2.httpFallbackPing = function(e3) {
    new window.Image().src = e3;
  };
  var o2, i2 = e2 && e2.eventUrlTransformer;
  t2.getCurrentUrl = function() {
    return i2 ? i2(window.location.href) : window.location.href;
  }, t2.isDoNotTrack = function() {
    var e3;
    return (e3 = window.navigator && window.navigator.doNotTrack !== void 0 ? window.navigator.doNotTrack : window.navigator && window.navigator.msDoNotTrack !== void 0 ? window.navigator.msDoNotTrack : window.doNotTrack) === 1 || e3 === true || e3 === "1" || e3 === "yes";
  };
  try {
    window.localStorage && (t2.localStorage = { get: function(e3) {
      return new Promise(function(n3) {
        n3(window.localStorage.getItem(e3));
      });
    }, set: function(e3, n3) {
      return new Promise(function(t3) {
        window.localStorage.setItem(e3, n3), t3();
      });
    }, clear: function(e3) {
      return new Promise(function(n3) {
        window.localStorage.removeItem(e3), n3();
      });
    } });
  } catch (e3) {
    t2.localStorage = null;
  }
  if (e2 && e2.useReport && typeof window.EventSourcePolyfill == "function" && window.EventSourcePolyfill.supportedOptions && window.EventSourcePolyfill.supportedOptions.method ? (t2.eventSourceAllowsReport = true, o2 = window.EventSourcePolyfill) : (t2.eventSourceAllowsReport = false, o2 = window.EventSource), window.EventSource) {
    var a2 = 3e5;
    t2.eventSourceFactory = function(e3, n3) {
      var t3 = Be(Be({}, { heartbeatTimeout: a2, silentTimeout: a2, skipDefaultHeaders: true }), n3);
      return new o2(e3, t3);
    }, t2.eventSourceIsActive = function(e3) {
      return e3.readyState === window.EventSource.OPEN || e3.readyState === window.EventSource.CONNECTING;
    };
  }
  return t2.userAgent = "JSClient", t2.version = "2.22.1", t2.diagnosticSdkData = { name: "js-client-sdk", version: "2.22.1" }, t2.diagnosticPlatformData = { name: "JS" }, t2.diagnosticUseCombinedEvent = true, t2;
}
var en = /[|\\{}()[\]^$+*?.]/g, nn = function(e2) {
  if (typeof e2 != "string")
    throw new TypeError("Expected a string");
  return e2.replace(en, "\\$&");
};
function tn(e2, n2, t2, r2) {
  var o2, i2, a2 = ((e2.kind === "substring" || e2.kind === "regex") && r2.includes("/") ? n2 : n2.replace(r2, "")).replace(t2, "");
  switch (e2.kind) {
    case "exact":
      i2 = n2, o2 = new RegExp("^" + nn(e2.url) + "/?$");
      break;
    case "canonical":
      i2 = a2, o2 = new RegExp("^" + nn(e2.url) + "/?$");
      break;
    case "substring":
      i2 = a2, o2 = new RegExp(".*" + nn(e2.substring) + ".*$");
      break;
    case "regex":
      i2 = a2, o2 = new RegExp(e2.pattern);
      break;
    default:
      return false;
  }
  return o2.test(i2);
}
function rn(e2, n2) {
  for (var t2 = {}, r2 = null, o2 = [], i2 = 0; i2 < e2.length; i2++)
    for (var a2 = e2[i2], u2 = a2.urls || [], s2 = 0; s2 < u2.length; s2++)
      if (tn(u2[s2], window.location.href, window.location.search, window.location.hash)) {
        a2.kind === "pageview" ? n2("pageview", a2) : (o2.push(a2), n2("click_pageview", a2));
        break;
      }
  return o2.length > 0 && (r2 = function(e3) {
    for (var t3 = function(e4, n3) {
      for (var t4 = [], r4 = 0; r4 < n3.length; r4++)
        for (var o3 = e4.target, i3 = n3[r4], a3 = i3.selector, u3 = document.querySelectorAll(a3); o3 && u3.length > 0; ) {
          for (var s3 = 0; s3 < u3.length; s3++)
            o3 === u3[s3] && t4.push(i3);
          o3 = o3.parentNode;
        }
      return t4;
    }(e3, o2), r3 = 0; r3 < t3.length; r3++)
      n2("click", t3[r3]);
  }, document.addEventListener("click", r2)), t2.dispose = function() {
    document.removeEventListener("click", r2);
  }, t2;
}
function on(e2, n2) {
  var t2, r2;
  function o2() {
    r2 && r2.dispose(), t2 && t2.length && (r2 = rn(t2, i2));
  }
  function i2(n3, t3) {
    var r3 = e2.ident.getUser(), o3 = { kind: n3, key: t3.key, data: null, url: window.location.href, user: r3, creationDate: new Date().getTime() };
    return r3 && r3.anonymous && (o3.contextKind = "anonymousUser"), n3 === "click" && (o3.selector = t3.selector), e2.enqueueEvent(o3);
  }
  return e2.requestor.fetchJSON("/sdk/goals/" + e2.getEnvironmentId()).then(function(e3) {
    e3 && e3.length > 0 && (r2 = rn(t2 = e3, i2), function(e4, n3) {
      var t3, r3 = window.location.href;
      function o3() {
        (t3 = window.location.href) !== r3 && (r3 = t3, n3());
      }
      !function e5(n4, t4) {
        n4(), setTimeout(function() {
          e5(n4, t4);
        }, t4);
      }(o3, e4), window.history && window.history.pushState ? window.addEventListener("popstate", o3) : window.addEventListener("hashchange", o3);
    }(300, o2)), n2();
  }).catch(function(t3) {
    e2.emitter.maybeReportError(new p.LDUnexpectedResponseError((t3 && t3.message, t3.message))), n2();
  }), {};
}
var an = { fetchGoals: { default: true }, hash: { type: "string" }, eventProcessor: { type: "object" }, eventUrlTransformer: { type: "function" }, disableSyncEventPost: { default: false } };
function un(e2, n2) {
  var t2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r2 = Ze(t2), o2 = He(e2, n2, t2, r2, an), i2 = o2.client, a2 = o2.options, u2 = o2.emitter, s2 = new Promise(function(e3) {
    var n3 = u2.on("goalsReady", function() {
      u2.off("goalsReady", n3), e3();
    });
  });
  i2.waitUntilGoalsReady = function() {
    return s2;
  }, a2.fetchGoals ? on(o2, function() {
    return u2.emit("goalsReady");
  }) : u2.emit("goalsReady"), document.readyState !== "complete" ? window.addEventListener("load", o2.start) : o2.start();
  var c2 = function() {
    r2.synchronousFlush = true, i2.flush().catch(function() {
    }), r2.synchronousFlush = false;
  };
  return window.addEventListener("beforeunload", c2), window.addEventListener("unload", c2), i2;
}
const getLDFlag = (isLdReady, $ldClient, enableStreaming = true) => {
  return function ldFlag(flagKey, defaultFlagValue) {
    const flagValue = isLdReady ? $ldClient.variation(flagKey, defaultFlagValue) : defaultFlagValue;
    const flagRef = ref(flagValue);
    if (!enableStreaming) {
      return readonly(flagRef);
    }
    const updateFlagRef = (newFlagValue) => flagRef.value = newFlagValue;
    $ldClient.on(`change:${flagKey}`, updateFlagRef);
    onBeforeUnmount(() => $ldClient.off(`change:${flagKey}`, updateFlagRef));
    if (!isLdReady) {
      $ldClient.on("ready", () => updateFlagRef($ldClient.variation(flagKey, flagRef.value)));
    }
    return readonly(flagRef);
  };
};
const version = "1.0.0";
const safeInject = (key, label) => {
  const target = inject(key);
  if (target === void 0) {
    throw new Error(`Injection of ${label} failed. LaunchDarkly plugin may not have been loaded.`);
  }
  return target;
};
function useLDReady() {
  return safeInject(LD_READY, "LD_READY");
}
function useLDClient() {
  return safeInject(LD_CLIENT, "LD_CLIENT");
}
function ldInit(initOptions) {
  return safeInject(LD_INIT, "LD_INIT")(initOptions);
}
function useLDFlag(flagKey, defaultValue) {
  return safeInject(LD_FLAG, "LD_FLAG")(flagKey, defaultValue);
}
const LD_INIT = Symbol();
const LD_READY = Symbol();
const LD_CLIENT = Symbol();
const LD_FLAG = Symbol();
const LDPlugin = {
  install(app, pluginOptions = {}) {
    const ldReady = ref(false);
    const $ldReady = readonly(ldReady);
    const $ldInit = (initOptions = {}) => {
      var _a, _b, _c, _d;
      const clientSideID = (_a = initOptions.clientSideID) != null ? _a : pluginOptions.clientSideID;
      if (!clientSideID) {
        throw new Error(`Cannot initialize LaunchDarkly without a clientSideID`);
      }
      const user = (_c = (_b = initOptions.user) != null ? _b : pluginOptions.user) != null ? _c : { anonymous: true };
      const options = (_d = initOptions.options) != null ? _d : pluginOptions.options;
      const wrapperOptions = { wrapperName: "vue-client-sdk", wrapperVersion: version };
      const $ldClient = un(clientSideID, user, __spreadValues(__spreadValues({}, wrapperOptions), options));
      app.provide(LD_CLIENT, $ldClient);
      const enableStreaming = pluginOptions.streaming === false || initOptions.streaming === false ? false : true;
      app.provide(LD_FLAG, getLDFlag(ldReady.value, $ldClient, enableStreaming));
      $ldClient.on("ready", () => ldReady.value = true);
      return [$ldReady, $ldClient];
    };
    app.provide(LD_READY, $ldReady);
    if (pluginOptions.deferInitialization) {
      app.provide(LD_INIT, $ldInit);
    } else if (!pluginOptions.clientSideID) {
      throw new Error("LaunchDarkly plugin requires a clientSideID unless deferInitialization option is used");
    } else {
      $ldInit(pluginOptions);
    }
  }
};
export { LDPlugin, LD_CLIENT, LD_FLAG, LD_INIT, LD_READY, ldInit, useLDClient, useLDFlag, useLDReady };
