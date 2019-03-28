/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(44);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(28);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving the component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(46).setImmediate))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(20);
var buildURL = __webpack_require__(23);
var parseHeaders = __webpack_require__(29);
var isURLSameOrigin = __webpack_require__(27);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(22);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(19);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.trans = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        en: {
            date_time_placeholder: 'Click to select...',
            dialog_cancel: 'Cancel',
            dialog_confirm: 'Change my answer',
            dialog_message: 'Changing your answer will delete the questions next to this one, since they depend on this answer.',
            dialog_title: 'Changing an answer',
            edit_button: 'Change answer',
            next_button: 'Next',
            select_placeholer: 'Select an answer...',
            submit_button: 'Submit'
        },
        fr: {
            date_time_placeholder: 'Cliquez pour choisir...',
            dialog_cancel: 'Annuler',
            dialog_confirm: 'Modifier ma réponse',
            dialog_message: 'Changer votre réponse va supprimer toutes les réponses qui suivent à cette question, car celles-ci dépendent de cette question.',
            dialog_title: 'Changer une réponse',
            edit_button: 'Changez votre réponse',
            next_button: 'Suivant',
            select_placeholer: 'Choisissez une réponse...',
            submit_button: 'Soumettre'
        }
    };
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(48)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Questionnaire'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Questionnaire);
    global.index = mod.exports;
  }
})(this, function (exports, _Questionnaire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Questionnaire', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Questionnaire).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(16);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(6);
axios.CancelToken = __webpack_require__(15);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(30);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(17);
var dispatchRequest = __webpack_require__(18);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(21);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(26);
var combineURLs = __webpack_require__(24);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(require('vue'), require('../src'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.vue, global.src);
        global.app = mod.exports;
    }
})(this, function (_vue, _src) {
    'use strict';

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    new _vue2.default({
        components: { Questionnaire: _src.Questionnaire },

        el: '#app'
    });
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(41), __webpack_require__(35), __webpack_require__(40), __webpack_require__(36)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./trans.js'), require('buefy/dist/components/field'), require('buefy/dist/components/input'), require('buefy/dist/components/select'), require('buefy/dist/components/timepicker'), require('buefy/dist/components/datepicker'), require('buefy/dist/components/switch'), require('buefy/dist/components/dialog'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.trans, global.field, global.input, global.select, global.timepicker, global.datepicker, global._switch, global.dialog);
        global.Question = mod.exports;
    }
})(this, function (exports, _trans2, _field, _input, _select, _timepicker, _datepicker, _switch, _dialog) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _trans3 = _interopRequireDefault(_trans2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        components: {
            'b-field': _field.Field,
            'b-input': _input.Input,
            'b-select': _select.Select,
            'b-timepicker': _timepicker.Timepicker,
            'b-datepicker': _datepicker.Datepicker,
            'b-switch': _switch.Switch
        },
        props: {
            lang: {
                required: true,
                type: String
            },
            questions_array_length: {
                required: true,
                type: Number
            },
            single_question: {
                required: true,
                type: Object
            }
        },
        data: function data() {
            return {
                answer: null,
                answerFr: null,
                answerId: null,
                children: [],
                choice: null,
                choices: [],
                date: null,
                time: null,
                formatAmPm: false,
                nextQuestionId: null,
                question: null,
                questionDisplay: null,
                questionFr: null,
                questionId: null,
                questionNumber: null,
                rangeValues: [],
                submitted: false,
                type: null
            };
        },
        created: function created() {
            console.log(_dialog.Dialog);
            this.question = this.single_question.question;
            this.questionFr = this.single_question.translation.fr.question;

            this.questionDisplay = this.question;
            if (this.lang === 'fr') {
                this.questionDisplay = this.questionFr;
            }

            this.questionNumber = this.questions_array_length;
            this.questionId = this.single_question.id;
            this.type = this.single_question.question_type_name;

            this.children = this.single_question.childrens;
            if (this.children.length === 1) {
                var child = this.children[0];
                this.nextQuestionId = child.next_question_id;
                this.answerId = child.id;

                if (this.type === 'RANGE') {
                    for (var i = child.from; i <= child.to; i += child.jump_by) {
                        this.rangeValues.push(i);
                    }
                }
            }
        },

        computed: {
            format: function format() {
                return this.formatAmPm ? '12' : '24';
            }
        },
        methods: {
            askChangeAnswer: function askChangeAnswer(event) {
                var _this = this;

                _dialog.Dialog.confirm({
                    title: this.trans('dialog_title'),
                    message: this.trans('dialog_message'),
                    cancelText: this.trans('dialog_cancel'),
                    confirmText: this.trans('dialog_confirm'),
                    type: 'is-danger',
                    onConfirm: function onConfirm() {
                        return _this.changeAnswer();
                    }
                });
            },
            changeAnswer: function changeAnswer() {
                this.$emit('ask-edit', { id: this.questionId });
                this.submitted = false;
            },
            formatDate: function formatDate() {
                var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                var date = this.date.getDate();
                if (date < 10) {
                    date = '0' + date;
                }

                return this.date.getFullYear() + '-' + months[this.date.getMonth()] + '-' + date;
            },
            formatTime: function formatTime() {
                var hours = this.time.getHours();
                if (hours < 10) {
                    hours = '0' + hours;
                }

                var minutes = this.time.getMinutes();
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }

                var seconds = this.time.getSeconds();
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                return hours + ':' + minutes + ':' + seconds;
            },
            selectAnswer: function selectAnswer(event) {
                this.nextQuestionId = this.choice.nextQuestionId;
                this.answerId = this.choice.answerId;

                this.answer = this.choice.trans.en.choice;
                this.answerFr = this.choice.trans.fr.choice;
            },
            submitAnswer: function submitAnswer(event) {
                this.$emit('answered', {
                    answer: this.answer,
                    answerFr: this.answerFr,
                    answerId: this.answerId,
                    nextQuestion: this.nextQuestionId,
                    question: this.question,
                    questionFr: this.questionFr,
                    questionType: this.type
                });
                this.submitted = true;
            },
            trans: function trans(key) {
                return _trans3.default[this.lang][key];
            },
            updateDateTimeAnswer: function updateDateTimeAnswer(event) {
                if (this.date === null || this.time === null) {
                    return;
                }

                this.answer = this.formatDate() + ' ' + this.formatTime();
            }
        }
    };
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13), __webpack_require__(47), __webpack_require__(10), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('axios'), require('./Question.vue'), require('./trans.js'), require('../config'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.axios, global.Question, global.trans, global.config);
        global.Questionnaire = mod.exports;
    }
})(this, function (exports, _axios, _Question, _trans2, _config) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _axios2 = _interopRequireDefault(_axios);

    var _Question2 = _interopRequireDefault(_Question);

    var _trans3 = _interopRequireDefault(_trans2);

    var _config2 = _interopRequireDefault(_config);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        components: { 'single-question': _Question2.default },
        props: {
            lang: {
                required: false,
                type: String,
                default: 'fr',
                validator: function validator(value) {
                    return ['fr', 'en'].indexOf(value) !== -1;
                }
            }
        },
        data: function data() {
            return {
                answers: [],
                isDone: false,
                questions: [],
                serviceType: null
            };
        },
        created: function created() {
            var _this = this;

            _axios2.default.get(_config2.default.url + '/first-question?service_type_name=plomberie', {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(function (response) {
                _this.questions.push(response.data);
            }).catch(function (error) {});
        },

        methods: {
            editQuestion: function editQuestion(payload) {
                for (var i = 0; i < this.questions.length; i++) {
                    var _question = this.questions[i];
                    if (_question.id === payload.id) {
                        var index = i + 1;
                        this.questions.splice(index, this.questions.length - index);
                        this.answers.splice(i, this.answers.length - i);
                        return;
                    }
                }
            },
            nextQuestion: function nextQuestion(questionId) {
                var _this2 = this;

                _axios2.default.get(_config2.default.url + ('/question?id=' + questionId)).then(function (response) {
                    _this2.questions.push(response.data);
                }).catch(function (error) {});
            },
            retrieveAnswer: function retrieveAnswer(payload) {
                var item = {
                    answer: payload.answer,
                    answerFr: payload.answerFr,
                    answerId: payload.answerId,
                    question: payload.question,
                    questionFr: payload.questionFr,
                    questionType: payload.questionType
                };
                this.answers.push(item);

                if (payload.nextQuestion !== null) {
                    this.nextQuestion(payload.nextQuestion);
                } else {
                    var answers = [];

                    this.answers.forEach(function (element) {
                        var answer = {
                            id: element.answerId,
                            type: element.questionType
                        };
                        answers.push(answer);
                    });

                    // TODO: axios.get(...)

                    this.isDone = true;
                }
            },
            submitQuestionnaire: function submitQuestionnaire(event) {
                var answer = '';
                var questionNumber = 1;

                this.answers.forEach(function (element) {
                    var answerFr = element.answer;
                    if (element.answerFr !== null) {
                        answerFr = element.answerFr;
                    }
                    answer += 'Question ' + questionNumber + '\n' + element.question + ' : ' + element.answer + '\n' + element.questionFr + ' : ' + answerFr + '\n';
                    questionNumber++;
                });

                this.$emit('done', { answer: answer });
                console.log(answer);
            },
            trans: function trans(key) {
                return _trans3.default[this.lang][key];
            }
        }
    };
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.config = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        url: 'http://questionnaire.test/api' // TODO : Change this URL for production
    };
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}})("undefined"!=typeof self?self:this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=235)})([(function(e,t,n){e.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),(function(e,t){e.exports=function(e,t,n,i,r){var a,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,f=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:u}}}),(function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),(function(e,t,n){var i=n(10),r=n(20),a=n(15),s=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(i(e),t=a(t,!0),i(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}}),(function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}}),(function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}}),(function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}),(function(e,t,n){var i=n(37),r=n(27);e.exports=function(e){return i(r(e))}}),(function(e,t,n){var i=n(4),r=n(13);e.exports=n(0)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}}),(function(e,t,n){var i=n(6);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}}),(function(e,t,n){var i=n(24)("wks"),r=n(16),a=n(1).Symbol,s="function"==typeof a;(e.exports=function(e){return i[e]||(i[e]=s&&a[e]||(s?a:r)("Symbol."+e))}).store=i}),(function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var i=function(e){"undefined"!=typeof window&&window.Vue&&window.Vue.use(e)},r=function(e,t){e.component(t.name,t)},a=function(e,t,n){e.prototype[t]=n}}),(function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),(function(e,t,n){"use strict";var i={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0};t.a=i}),(function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}}),(function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}}),(function(e,t,n){var i=n(1),r=n(3),a=n(30),s=n(9),o=n(5),u=function(e,t,n){var l,c,f,d=e&u.F,h=e&u.G,p=e&u.S,m=e&u.P,v=e&u.B,y=e&u.W,b=h?r:r[t]||(r[t]={}),g=b.prototype,w=h?i:p?i[t]:(i[t]||{}).prototype;h&&(n=t);for(l in n)(c=!d&&w&&void 0!==w[l])&&o(b,l)||(f=c?w[l]:n[l],b[l]=h&&"function"!=typeof w[l]?n[l]:v&&c?a(f,i):y&&w[l]==f?(function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t})(f):m&&"function"==typeof f?a(Function.call,f):f,m&&((b.virtual||(b.virtual={}))[l]=f,e&u.R&&g&&!g[l]&&s(g,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u}),(function(e,t){e.exports=!0}),(function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}}),(function(e,t,n){e.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))}),(function(e,t,n){var i=n(6),r=n(1).document,a=i(r)&&i(r.createElement);e.exports=function(e){return a?r.createElement(e):{}}}),(function(e,t,n){var i=n(35),r=n(25);e.exports=Object.keys||function(e){return i(e,r)}}),(function(e,t){t.f={}.propertyIsEnumerable}),(function(e,t,n){var i=n(3),r=n(1),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),(function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(e,t,n){"use strict";t.__esModule=!0;var i=n(49),r=(function(e){return e&&e.__esModule?e:{default:e}})(i);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}),(function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}}),(function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}}),(function(e,t,n){var i=n(24)("keys"),r=n(16);e.exports=function(e){return i[e]||(i[e]=r(e))}}),(function(e,t,n){var i=n(32);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}}),(function(e,t,n){var i=n(2)(n(52),n(53),null,null,null);e.exports=i.exports}),(function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}}),(function(e,t,n){var i=n(1),r=n(3),a=n(18),s=n(39),o=n(4).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=a?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||o(t,e,{value:s.f(e)})}}),(function(e,t){t.f=Object.getOwnPropertySymbols}),(function(e,t,n){var i=n(5),r=n(8),a=n(43)(!1),s=n(29)("IE_PROTO");e.exports=function(e,t){var n,o=r(e),u=0,l=[];for(n in o)n!=s&&i(o,n)&&l.push(n);for(;t.length>u;)i(o,n=t[u++])&&(~a(l,n)||l.push(n));return l}}),(function(e,t,n){e.exports={default:n(57),__esModule:!0}}),(function(e,t,n){var i=n(28);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}}),(function(e,t,n){var i=n(4).f,r=n(5),a=n(11)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,a)&&i(e,a,{configurable:!0,value:t})}}),(function(e,t,n){t.f=n(11)}),(function(e,t){e.exports={}}),(function(e,t,n){var i=n(19),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}}),(function(e,t,n){var i=n(35),r=n(25).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}}),(function(e,t,n){var i=n(8),r=n(41),a=n(44);e.exports=function(e){return function(t,n,s){var o,u=i(t),l=r(u.length),c=a(s,l);if(e&&n!=n){for(;l>c;)if((o=u[c++])!=o)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}}}),(function(e,t,n){var i=n(19),r=Math.max,a=Math.min;e.exports=function(e,t){return e=i(e),e<0?r(e+t,0):a(e,t)}}),(function(e,t,n){"use strict";function i(e,t){return t.split(".").reduce((function(e,t){return e[t]}),e)}function r(e,t,n){if(!e)return-1;if(!n||"function"!=typeof n)return e.indexOf(t);for(var i=0;i<e.length;i++)if(n(e[i],t))return i;return-1}function a(e){void 0!==e.remove?e.remove():void 0!==e.parentNode&&e.parentNode.removeChild(e)}t.a=i,t.b=r,n.d(t,"c",(function(){return s})),t.d=a;var s={Android:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Android/i)},BlackBerry:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/IEMobile/i)},any:function(){return s.Android()||s.BlackBerry()||s.iOS()||s.Opera()||s.Windows()}}}),(function(e,t,n){"use strict";var i=n(14);t.a={props:{size:String,expanded:Boolean,loading:Boolean,rounded:Boolean,icon:String,iconPack:String,autocomplete:String,maxlength:[Number,String],useHtml5Validation:{type:Boolean,default:function(){return i.a.defaultUseHtml5Validation}}},data:function(){return{isValid:!0,isFocused:!1,newIconPack:this.iconPack||i.a.defaultIconPack}},computed:{parentField:function(){for(var e=this.$parent,t=0;t<3;t++)e&&!e.$data._isField&&(e=e.$parent);return e},statusType:function(){if(this.parentField&&this.parentField.newType){if("string"==typeof this.parentField.newType)return this.parentField.newType;for(var e in this.parentField.newType)if(this.parentField.newType[e])return e}},statusMessage:function(){if(this.parentField)return this.parentField.newMessage},iconSize:function(){switch(this.size){case"is-small":return this.size;case"is-medium":return;case"is-large":return"mdi"===this.newIconPack?"is-medium":""}}},methods:{focus:function(){var e=this;void 0!==this.$data._elementRef&&this.$nextTick((function(){return e.$el.querySelector(e.$data._elementRef).focus()}))},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e),this.checkHtml5Validity()},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},checkHtml5Validity:function(){var e=this;if(this.useHtml5Validation&&void 0!==this.$refs[this.$data._elementRef]){var t=this.$el.querySelector(this.$data._elementRef),n=null,i=null,r=!0;return t.checkValidity()||(n="is-danger",i=t.validationMessage,r=!1),this.isValid=r,this.$nextTick((function(){e.parentField&&(e.parentField.type||(e.parentField.newType=n),e.parentField.message||(e.parentField.newMessage=i))})),this.isValid}}}}}),(function(e,t,n){e.exports=n(9)}),(function(e,t,n){var i=n(10),r=n(55),a=n(25),s=n(29)("IE_PROTO"),o=function(){},u=function(){var e,t=n(21)("iframe"),i=a.length;for(t.style.display="none",n(56).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[a[i]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(o.prototype=i(e),n=new o,o.prototype=null,n[s]=e):n=u(),void 0===t?n:r(n,t)}}),(function(e,t,n){e.exports={default:n(50),__esModule:!0}}),(function(e,t,n){n(51);var i=n(3).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}}),(function(e,t,n){var i=n(17);i(i.S+i.F*!n(0),"Object",{defineProperty:n(4).f})}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14);t.default={name:"BIcon",props:{type:[String,Object],pack:String,icon:String,size:String,customSize:String,customClass:String,both:Boolean},computed:{newIcon:function(){return"mdi"===this.newPack?this.newPack+"-"+this.icon:this.addFAPrefix(this.getEquivalentIconOf(this.icon))},newPack:function(){return this.pack||i.a.defaultIconPack},newType:function(){if(this.type){var e=[];if("string"==typeof this.type)e=this.type.split("-");else for(var t in this.type)if(this.type[t]){e=t.split("-");break}if(!(e.length<=1))return"has-text-"+e[1]}},newCustomSize:function(){return this.customSize||this.customSizeByPack},customSizeByPack:function(){var e="mdi"===this.newPack?"mdi-24px":this.addFAPrefix("lg"),t="mdi"===this.newPack?"mdi-36px":this.addFAPrefix("2x"),n="mdi"===this.newPack?"mdi-48px":this.addFAPrefix("3x");switch(this.size){case"is-small":return;case"is-medium":return t;case"is-large":return n;default:return e}},useIconComponent:function(){return i.a.defaultIconComponent}},methods:{addFAPrefix:function(e){return this.useIconComponent?e:"fa-"+e},getEquivalentIconOf:function(e){if(!this.both)return e;switch(e){case"check":return"check";case"information":return"info-circle";case"check-circle":return"check-circle";case"alert":return"exclamation-triangle";case"alert-circle":return"exclamation-circle";case"arrow-up":return"arrow-up";case"chevron-right":return"angle-right";case"chevron-left":return"angle-left";case"chevron-down":return"angle-down";case"eye":return"eye";case"eye-off":return"eye-slash";case"menu-down":return"caret-down";case"menu-up":return"caret-up";default:return e}}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",class:[e.newType,e.size]},[e.useIconComponent?n(e.useIconComponent,{tag:"component",class:[e.customClass],attrs:{icon:[e.newPack,e.newIcon],size:e.newCustomSize}}):n("i",{class:[e.newPack,e.newIcon,e.newCustomSize,e.customClass]})],1)},staticRenderFns:[]}}),(function(e,t,n){var i=n(27);e.exports=function(e){return Object(i(e))}}),(function(e,t,n){var i=n(4),r=n(10),a=n(22);e.exports=n(0)?Object.defineProperties:function(e,t){r(e);for(var n,s=a(t),o=s.length,u=0;o>u;)i.f(e,n=s[u++],t[n]);return e}}),(function(e,t,n){var i=n(1).document;e.exports=i&&i.documentElement}),(function(e,t,n){n(58),n(64),n(65),n(66),e.exports=n(3).Symbol}),(function(e,t,n){"use strict";var i=n(1),r=n(5),a=n(0),s=n(17),o=n(47),u=n(59).KEY,l=n(7),c=n(24),f=n(38),d=n(16),h=n(11),p=n(39),m=n(33),v=n(60),y=n(61),b=n(10),g=n(6),w=n(8),D=n(15),_=n(13),x=n(48),k=n(62),S=n(63),M=n(4),C=n(22),O=S.f,P=M.f,F=k.f,A=i.Symbol,T=i.JSON,$=T&&T.stringify,I=h("_hidden"),j=h("toPrimitive"),N={}.propertyIsEnumerable,V=c("symbol-registry"),B=c("symbols"),E=c("op-symbols"),R=Object.prototype,z="function"==typeof A,L=i.QObject,Y=!L||!L.prototype||!L.prototype.findChild,W=a&&l((function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=O(R,t);i&&delete R[t],P(e,t,n),i&&e!==R&&P(R,t,i)}:P,H=function(e){var t=B[e]=x(A.prototype);return t._k=e,t},q=z&&"symbol"==typeof A.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof A},G=function(e,t,n){return e===R&&G(E,t,n),b(e),t=D(t,!0),b(n),r(B,t)?(n.enumerable?(r(e,I)&&e[I][t]&&(e[I][t]=!1),n=x(n,{enumerable:_(0,!1)})):(r(e,I)||P(e,I,_(1,{})),e[I][t]=!0),W(e,t,n)):P(e,t,n)},U=function(e,t){b(e);for(var n,i=v(t=w(t)),r=0,a=i.length;a>r;)G(e,n=i[r++],t[n]);return e},J=function(e,t){return void 0===t?x(e):U(x(e),t)},K=function(e){var t=N.call(this,e=D(e,!0));return!(this===R&&r(B,e)&&!r(E,e))&&(!(t||!r(this,e)||!r(B,e)||r(this,I)&&this[I][e])||t)},Q=function(e,t){if(e=w(e),t=D(t,!0),e!==R||!r(B,t)||r(E,t)){var n=O(e,t);return!n||!r(B,t)||r(e,I)&&e[I][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=F(w(e)),i=[],a=0;n.length>a;)r(B,t=n[a++])||t==I||t==u||i.push(t);return i},Z=function(e){for(var t,n=e===R,i=F(n?E:w(e)),a=[],s=0;i.length>s;)!r(B,t=i[s++])||n&&!r(R,t)||a.push(B[t]);return a};z||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===R&&t.call(E,n),r(this,I)&&r(this[I],e)&&(this[I][e]=!1),W(this,e,_(1,n))};return a&&Y&&W(R,e,{configurable:!0,set:t}),H(e)},o(A.prototype,"toString",(function(){return this._k})),S.f=Q,M.f=G,n(42).f=k.f=X,n(23).f=K,n(34).f=Z,a&&!n(18)&&o(R,"propertyIsEnumerable",K,!0),p.f=function(e){return H(h(e))}),s(s.G+s.W+s.F*!z,{Symbol:A});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)h(ee[te++]);for(var ne=C(h.store),ie=0;ne.length>ie;)m(ne[ie++]);s(s.S+s.F*!z,"Symbol",{for:function(e){return r(V,e+="")?V[e]:V[e]=A(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in V)if(V[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),s(s.S+s.F*!z,"Object",{create:J,defineProperty:G,defineProperties:U,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),T&&s(s.S+s.F*(!z||l((function(){var e=A();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(g(t)||void 0!==e)&&!q(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!q(t))return t}),i[1]=t,$.apply(T,i)}}),A.prototype[j]||n(9)(A.prototype,j,A.prototype.valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)}),(function(e,t,n){var i=n(16)("meta"),r=n(6),a=n(5),s=n(4).f,o=0,u=Object.isExtensible||function(){return!0},l=!n(7)((function(){return u(Object.preventExtensions({}))})),c=function(e){s(e,i,{value:{i:"O"+ ++o,w:{}}})},f=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,i)){if(!u(e))return"F";if(!t)return"E";c(e)}return e[i].i},d=function(e,t){if(!a(e,i)){if(!u(e))return!0;if(!t)return!1;c(e)}return e[i].w},h=function(e){return l&&p.NEED&&u(e)&&!a(e,i)&&c(e),e},p=e.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}}),(function(e,t,n){var i=n(22),r=n(34),a=n(23);e.exports=function(e){var t=i(e),n=r.f;if(n)for(var s,o=n(e),u=a.f,l=0;o.length>l;)u.call(e,s=o[l++])&&t.push(s);return t}}),(function(e,t,n){var i=n(28);e.exports=Array.isArray||function(e){return"Array"==i(e)}}),(function(e,t,n){var i=n(8),r=n(42).f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(e){try{return r(e)}catch(e){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==a.call(e)?o(e):r(i(e))}}),(function(e,t,n){var i=n(23),r=n(13),a=n(8),s=n(15),o=n(5),u=n(20),l=Object.getOwnPropertyDescriptor;t.f=n(0)?l:function(e,t){if(e=a(e),t=s(t,!0),u)try{return l(e,t)}catch(e){}if(o(e,t))return r(!i.f.call(e,t),e[t])}}),(function(e,t){}),(function(e,t,n){n(33)("asyncIterator")}),(function(e,t,n){n(33)("observable")}),(function(e,t,n){"use strict";var i=n(18),r=n(17),a=n(47),s=n(9),o=n(40),u=n(75),l=n(38),c=n(76),f=n(11)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,p,m,v,y){u(n,t,p);var b,g,w,D=function(e){if(!d&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},_=t+" Iterator",x="values"==m,k=!1,S=e.prototype,M=S[f]||S["@@iterator"]||m&&S[m],C=M||D(m),O=m?x?D("entries"):C:void 0,P="Array"==t?S.entries||M:M;if(P&&(w=c(P.call(new e)))!==Object.prototype&&w.next&&(l(w,_,!0),i||"function"==typeof w[f]||s(w,f,h)),x&&M&&"values"!==M.name&&(k=!0,C=function(){return M.call(this)}),i&&!y||!d&&!k&&S[f]||s(S,f,C),o[t]=C,o[_]=h,m)if(b={values:x?C:D("values"),keys:v?C:D("keys"),entries:O},y)for(g in b)g in S||a(S,g,b[g]);else r(r.P+r.F*(d||k),t,b);return b}}),(function(e,t,n){"use strict";var i=n(74)(!0);n(67)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})}))}),,,(function(e,t,n){n(80);for(var i=n(1),r=n(9),a=n(40),s=n(11)("toStringTag"),o="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<o.length;u++){var l=o[u],c=i[l],f=c&&c.prototype;f&&!f[s]&&r(f,s,l),a[l]=a.Array}}),(function(e,t,n){var i=n(77),r=n(11)("iterator"),a=n(40);e.exports=n(3).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||a[i(e)]}}),(function(e,t,n){var i=n(2)(n(85),n(86),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(19),r=n(27);e.exports=function(e){return function(t,n){var a,s,o=String(r(t)),u=i(n),l=o.length;return u<0||u>=l?e?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===l||(s=o.charCodeAt(u+1))<56320||s>57343?e?o.charAt(u):a:e?o.slice(u,u+2):s-56320+(a-55296<<10)+65536)}}}),(function(e,t,n){"use strict";var i=n(48),r=n(13),a=n(38),s={};n(9)(s,n(11)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=i(s,{next:r(1,n)}),a(e,t+" Iterator")}}),(function(e,t,n){var i=n(5),r=n(54),a=n(29)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}}),(function(e,t,n){var i=n(28),r=n(11)("toStringTag"),a="Arguments"==i(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),r))?n:a?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}}),(function(e,t,n){e.exports={default:n(83),__esModule:!0}}),(function(e,t,n){var i=n(2)(n(93),n(94),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";var i=n(81),r=n(82),a=n(40),s=n(8);e.exports=n(67)(Array,"Array",(function(e,t){this._t=s(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])}),"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")}),(function(e,t){e.exports=function(){}}),(function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}}),(function(e,t,n){n(71),n(68),e.exports=n(84)}),(function(e,t,n){var i=n(10),r=n(72);e.exports=n(3).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),a=n(31),s=n.n(a),o=n(14),u=n(46);t.default={name:"BInput",components:r()({},s.a.name,s.a),mixins:[u.a],inheritAttrs:!1,props:{value:[Number,String],type:{type:String,default:"text"},passwordReveal:Boolean,hasCounter:{type:Boolean,default:function(){return o.a.defaultInputHasCounter}},customClass:{type:String,default:""}},data:function(){return{newValue:this.value,newType:this.type,newAutocomplete:this.autocomplete||o.a.defaultInputAutocomplete,isPasswordVisible:!1,_elementRef:"textarea"===this.type?"textarea":"input"}},computed:{computedValue:{get:function(){return this.newValue},set:function(e){this.newValue=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()}},rootClasses:function(){return[this.iconPosition,this.size,{"is-expanded":this.expanded,"is-loading":this.loading,"is-clearfix":!this.hasMessage}]},inputClasses:function(){return[this.statusType,this.size,{"is-rounded":this.rounded}]},hasIconRight:function(){return this.passwordReveal||this.loading||this.statusType},iconPosition:function(){return this.icon&&this.hasIconRight?"has-icons-left has-icons-right":!this.icon&&this.hasIconRight?"has-icons-right":this.icon?"has-icons-left":void 0},statusTypeIcon:function(){switch(this.statusType){case"is-success":return"check";case"is-danger":return"alert-circle";case"is-info":return"information";case"is-warning":return"alert"}},hasMessage:function(){return!!this.statusMessage},passwordVisibleIcon:function(){return this.isPasswordVisible?"eye-off":"eye"},valueLength:function(){return"string"==typeof this.computedValue?this.computedValue.length:"number"==typeof this.computedValue?this.computedValue.toString().length:0}},watch:{value:function(e){this.newValue=e}},methods:{togglePasswordVisibility:function(){var e=this;this.isPasswordVisible=!this.isPasswordVisible,this.newType=this.isPasswordVisible?"text":"password",this.$nextTick((function(){e.$refs.input.focus()}))},onInput:function(e){var t=this;this.$nextTick((function(){e.target&&(t.computedValue=e.target.value)}))}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control",class:e.rootClasses},["textarea"!==e.type?n("input",e._b({ref:"input",staticClass:"input",class:[e.inputClasses,e.customClass],attrs:{type:e.newType,autocomplete:e.newAutocomplete,maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"input",e.$attrs,!1)):n("textarea",e._b({ref:"textarea",staticClass:"textarea",class:[e.inputClasses,e.customClass],attrs:{maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"textarea",e.$attrs,!1)),e._v(" "),e.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:e.icon,pack:e.iconPack,size:e.iconSize}}):e._e(),e._v(" "),e.loading||!e.passwordReveal&&!e.statusType?e._e():n("b-icon",{staticClass:"is-right",class:{"is-clickable":e.passwordReveal},attrs:{icon:e.passwordReveal?e.passwordVisibleIcon:e.statusTypeIcon,pack:e.iconPack,size:e.iconSize,type:e.passwordReveal?"is-primary":e.statusType,both:""},nativeOn:{click:function(t){e.togglePasswordVisibility(t)}}}),e._v(" "),e.maxlength&&e.hasCounter&&"number"!==e.type?n("small",{staticClass:"help counter",class:{"is-invisible":!e.isFocused}},[e._v("\n        "+e._s(e.valueLength)+" / "+e._s(e.maxlength)+"\n    ")]):e._e()],1)},staticRenderFns:[]}}),,,,(function(e,t,n){var i=n(2)(n(96),n(97),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(2)(n(98),n(99),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(2)(n(100),n(103),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),r=n.n(i),a=n(26),s=n.n(a),o=n(31),u=n.n(o),l=n(46);t.default={name:"BSelect",components:s()({},u.a.name,u.a),mixins:[l.a],inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null},placeholder:String,multiple:Boolean,nativeSize:[String,Number]},data:function(){return{selected:this.value,_elementRef:"select"}},computed:{computedValue:{get:function(){return this.selected},set:function(e){this.selected=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()}},spanClasses:function(){return[this.size,this.statusType,{"is-fullwidth":this.expanded,"is-loading":this.loading,"is-multiple":this.multiple,"is-rounded":this.rounded,"is-empty":null===this.selected}]}},watch:{value:function(e){this.selected=e,!this.isValid&&this.checkHtml5Validity()}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control",class:{"is-expanded":e.expanded,"has-icons-left":e.icon}},[n("span",{staticClass:"select",class:e.spanClasses},[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.computedValue,expression:"computedValue"}],ref:"select",attrs:{multiple:e.multiple,size:e.nativeSize},on:{blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()},focus:function(t){e.$emit("focus",t)},change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.computedValue=t.target.multiple?n:n[0]}}},"select",e.$attrs,!1),[e.placeholder?[null==e.computedValue?n("option",{attrs:{selected:"",disabled:"",hidden:""},domProps:{value:null}},[e._v("\n                    "+e._s(e.placeholder)+"\n                ")]):e._e()]:e._e(),e._v(" "),e._t("default")],2)]),e._v(" "),e.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:e.icon,pack:e.iconPack,size:e.iconSize}}):e._e()],1)},staticRenderFns:[]}}),,(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(78),r=n.n(i),a=n(36),s=n.n(a);t.default={name:"BDropdown",props:{value:{type:[String,Number,Boolean,Object,Array,s.a,Function],default:null},disabled:Boolean,hoverable:Boolean,inline:Boolean,position:{type:String,validator:function(e){return["is-top-right","is-top-left","is-bottom-left"].indexOf(e)>-1}},mobileModal:{type:Boolean,default:!0},ariaRole:{type:String,default:""}},data:function(){return{selected:this.value,isActive:!1,_isDropdown:!0}},computed:{rootClasses:function(){return[this.position,{"is-disabled":this.disabled,"is-hoverable":this.hoverable,"is-inline":this.inline,"is-active":this.isActive||this.inline,"is-mobile-modal":this.isMobileModal}]},isMobileModal:function(){return this.mobileModal&&!this.inline&&!this.hoverable},ariaRoleMenu:function(){return"menu"===this.ariaRole||"list"===this.ariaRole?this.ariaRole:null}},watch:{value:function(e){this.selected=e},isActive:function(e){this.$emit("active-change",e)}},methods:{selectItem:function(e){this.selected!==e&&(this.$emit("change",e),this.selected=e),this.$emit("input",e),this.isActive=!1},isInWhiteList:function(e){if(e===this.$refs.dropdownMenu)return!0;if(e===this.$refs.trigger)return!0;if(void 0!==this.$refs.dropdownMenu){var t=this.$refs.dropdownMenu.querySelectorAll("*"),n=!0,i=!1,a=void 0;try{for(var s,o=r()(t);!(n=(s=o.next()).done);n=!0){if(e===s.value)return!0}}catch(e){i=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}}if(void 0!==this.$refs.trigger){var u=this.$refs.trigger.querySelectorAll("*"),l=!0,c=!1,f=void 0;try{for(var d,h=r()(u);!(l=(d=h.next()).done);l=!0){if(e===d.value)return!0}}catch(e){c=!0,f=e}finally{try{!l&&h.return&&h.return()}finally{if(c)throw f}}}return!1},clickedOutside:function(e){this.inline||this.isInWhiteList(e.target)||(this.isActive=!1)},toggle:function(){var e=this;this.disabled||this.hoverable||(this.isActive?this.isActive=!this.isActive:this.$nextTick((function(){e.isActive=!e.isActive})))}},created:function(){"undefined"!=typeof window&&document.addEventListener("click",this.clickedOutside)},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("click",this.clickedOutside)}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown",class:e.rootClasses},[e.inline?e._e():n("div",{ref:"trigger",staticClass:"dropdown-trigger",attrs:{role:"button","aria-haspopup":"true"},on:{click:e.toggle}},[e._t("trigger")],2),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.isMobileModal?n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"background",attrs:{"aria-hidden":!e.isActive}}):e._e()]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&(e.isActive||e.hoverable)||e.inline,expression:"(!disabled && (isActive || hoverable)) || inline"}],ref:"dropdownMenu",staticClass:"dropdown-menu",attrs:{"aria-hidden":!e.isActive}},[n("div",{staticClass:"dropdown-content",attrs:{role:e.ariaRoleMenu}},[e._t("default")],2)])])],1)},staticRenderFns:[]}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),r=n.n(i);t.default={name:"BDropdownItem",props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null},separator:Boolean,disabled:Boolean,custom:Boolean,paddingless:Boolean,hasLink:Boolean,ariaRole:{type:String,default:""}},computed:{anchorClasses:function(){return{"is-disabled":this.$parent.disabled||this.disabled,"is-paddingless":this.paddingless,"is-active":null!==this.value&&this.value===this.$parent.selected}},itemClasses:function(){return{"dropdown-item":!this.hasLink,"is-disabled":this.disabled,"is-paddingless":this.paddingless,"is-active":null!==this.value&&this.value===this.$parent.selected,"has-link":this.hasLink}},ariaRoleItem:function(){return"menuitem"===this.ariaRole||"listitem"===this.ariaRole?this.ariaRole:null},isClickable:function(){return!(this.$parent.disabled||this.separator||this.disabled||this.custom)}},methods:{selectItem:function(){this.isClickable&&(this.$parent.selectItem(this.value),this.$emit("click"))}},created:function(){if(!this.$parent.$data._isDropdown)throw this.$destroy(),new Error("You should wrap bDropdownItem on a bDropdown")}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.separator?n("hr",{staticClass:"dropdown-divider"}):e.custom||e.hasLink?n("div",{class:e.itemClasses,attrs:{role:e.ariaRoleItem,tabindex:"0"},on:{click:e.selectItem}},[e._t("default")],2):n("a",{staticClass:"dropdown-item",class:e.anchorClasses,attrs:{role:e.ariaRoleItem,tabindex:"0"},on:{click:e.selectItem}},[e._t("default")],2)},staticRenderFns:[]}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),a=n(101),s=n.n(a);t.default={name:"BField",components:r()({},s.a.name,s.a),props:{type:[String,Object],label:String,labelFor:String,message:[String,Array,Object],grouped:Boolean,groupMultiline:Boolean,position:String,expanded:Boolean,horizontal:Boolean,addons:{type:Boolean,default:!0},customClass:String},data:function(){return{newType:this.type,newMessage:this.message,fieldLabelSize:null,_isField:!0}},computed:{rootClasses:function(){return[this.newPosition,{"is-expanded":this.expanded,"is-grouped-multiline":this.groupMultiline,"is-horizontal":this.horizontal}]},newPosition:function(){if(void 0!==this.position){var e=this.position.split("-");if(!(e.length<1)){var t=this.grouped?"is-grouped-":"has-addons-";return this.position?t+e[1]:void 0}}},formattedMessage:function(){if("string"==typeof this.newMessage)return this.newMessage;var e=[];if(Array.isArray(this.newMessage))this.newMessage.forEach((function(t){if("string"==typeof t)e.push(t);else for(var n in t)t[n]&&e.push(n)}));else for(var t in this.newMessage)this.newMessage[t]&&e.push(t);return e.filter((function(e){if(e)return e})).join(" <br> ")}},watch:{type:function(e){this.newType=e},message:function(e){this.newMessage=e}},methods:{fieldType:function(){if(this.grouped)return"is-grouped";var e=0;return this.$slots.default&&(e=this.$slots.default.reduce((function(e,t){return t.tag?e+1:e}),0)),e>1&&this.addons&&!this.horizontal?"has-addons":void 0}},mounted:function(){if(this.horizontal){this.$el.querySelectorAll(".input, .select, .button, .textarea").length>0&&(this.fieldLabelSize="is-normal")}}}}),(function(e,t,n){var i=n(2)(n(102),null,null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BFieldBody",props:{message:{type:String},type:{type:[String,Object]}},render:function(e){var t=this;return e("div",{attrs:{class:"field-body"}},this.$slots.default.map((function(n){return n.tag?t.message?e("b-field",{attrs:{message:t.message,type:t.type}},[n]):e("b-field",{attrs:{type:t.type}},[n]):n})))}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field",class:[e.rootClasses,e.fieldType()]},[e.horizontal?n("div",{staticClass:"field-label",class:[e.customClass,e.fieldLabelSize]},[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()]):[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()],e._v(" "),e.horizontal?n("b-field-body",{attrs:{message:e.newMessage?e.formattedMessage:"",type:e.newType}},[e._t("default")],2):[e._t("default")],e._v(" "),e.newMessage&&!e.horizontal?n("p",{staticClass:"help",class:e.newType,domProps:{innerHTML:e._s(e.formattedMessage)}}):e._e()],2)},staticRenderFns:[]}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(135),r=n.n(i),a=n(12);n.d(t,"Datepicker",(function(){return r.a}));var s={install:function(e){Object(a.a)(e,r.a)}};Object(a.c)(s),t.default=s}),(function(e,t,n){var i=n(2)(n(136),n(143),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(26),a=n.n(r),s=n(46),o=n(45),u=n(14),l=n(90),c=n.n(l),f=n(91),d=n.n(f),h=n(73),p=n.n(h),m=n(92),v=n.n(m),y=n(79),b=n.n(y),g=n(31),w=n.n(g),D=n(137),_=n.n(D);t.default={name:"BDatepicker",components:(i={},a()(i,_.a.name,_.a),a()(i,p.a.name,p.a),a()(i,v.a.name,v.a),a()(i,b.a.name,b.a),a()(i,w.a.name,w.a),a()(i,c.a.name,c.a),a()(i,d.a.name,d.a),i),mixins:[s.a],inheritAttrs:!1,props:{value:Date,dayNames:{type:Array,default:function(){return Array.isArray(u.a.defaultDayNames)?u.a.defaultDayNames:["Su","M","Tu","W","Th","F","S"]}},monthNames:{type:Array,default:function(){return Array.isArray(u.a.defaultMonthNames)?u.a.defaultMonthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},firstDayOfWeek:{type:Number,default:function(){return"number"==typeof u.a.defaultFirstDayOfWeek?u.a.defaultFirstDayOfWeek:0}},inline:Boolean,minDate:Date,maxDate:Date,focusedDate:Date,placeholder:String,editable:Boolean,disabled:Boolean,unselectableDates:Array,unselectableDaysOfWeek:{type:Array,default:function(){return u.a.defaultUnselectableDaysOfWeek}},selectableDates:Array,dateFormatter:{type:Function,default:function(e){if("function"==typeof u.a.defaultDateFormatter)return u.a.defaultDateFormatter(e);var t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate();return new Date(t).toLocaleDateString()}},dateParser:{type:Function,default:function(e){return"function"==typeof u.a.defaultDateParser?u.a.defaultDateParser(e):new Date(Date.parse(e))}},dateCreator:{type:Function,default:function(){return"function"==typeof u.a.defaultDateCreator?u.a.defaultDateCreator():new Date}},mobileNative:{type:Boolean,default:function(){return u.a.defaultDatepickerMobileNative}},position:String,events:Array,indicators:{type:String,default:"dots"}},data:function(){var e=this.value||this.focusedDate||this.dateCreator();return{dateSelected:this.value,focusedDateData:{month:e.getMonth(),year:e.getFullYear()},_elementRef:"input",_isDatepicker:!0}},computed:{listOfYears:function(){for(var e=this.maxDate?this.maxDate.getFullYear():Math.max(this.dateCreator().getFullYear(),this.focusedDateData.year)+3,t=this.minDate?this.minDate.getFullYear():1900,n=[],i=t;i<=e;i++)n.push(i);return n.reverse()},isFirstMonth:function(){return!!this.minDate&&new Date(this.focusedDateData.year,this.focusedDateData.month)<=new Date(this.minDate.getFullYear(),this.minDate.getMonth())},isLastMonth:function(){return!!this.maxDate&&new Date(this.focusedDateData.year,this.focusedDateData.month)>=new Date(this.maxDate.getFullYear(),this.maxDate.getMonth())},isMobile:function(){return this.mobileNative&&o.c.any()}},watch:{dateSelected:function(e){var t=e||this.dateCreator();this.focusedDateData={month:t.getMonth(),year:t.getFullYear()},this.$emit("input",e),this.$refs.dropdown&&(this.$refs.dropdown.isActive=!1)},value:function(e){this.dateSelected=e,!this.isValid&&this.$refs.input.checkHtml5Validity()},focusedDate:function(e){e&&(this.focusedDateData={month:e.getMonth(),year:e.getFullYear()})},"focusedDateData.month":function(e){this.$emit("change-month",e)},"focusedDateData.year":function(e){this.$emit("change-year",e)}},methods:{updateSelectedDate:function(e){this.dateSelected=e},onChange:function(e){var t=this.dateParser(e);t&&!isNaN(t)?this.dateSelected=t:(this.dateSelected=null,this.$refs.input.newValue=this.dateSelected)},formatValue:function(e){return e&&!isNaN(e)?this.dateFormatter(e):null},decrementMonth:function(){this.disabled||(this.focusedDateData.month>0?this.focusedDateData.month-=1:(this.focusedDateData.month=11,this.focusedDateData.year-=1))},incrementMonth:function(){this.disabled||(this.focusedDateData.month<11?this.focusedDateData.month+=1:(this.focusedDateData.month=0,this.focusedDateData.year+=1))},formatYYYYMMDD:function(e){var t=new Date(e);if(e&&!isNaN(t)){var n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return n+"-"+(i<10?"0":"")+i+"-"+(r<10?"0":"")+r}return""},onChangeNativePicker:function(e){var t=e.target.value;this.dateSelected=t?new Date(t.replace(/-/g,"/")):null}}}}),(function(e,t,n){var i=n(2)(n(138),n(142),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),a=n(139),s=n.n(a);t.default={name:"BDatepickerTable",components:r()({},s.a.name,s.a),props:{value:Date,dayNames:Array,monthNames:Array,firstDayOfWeek:Number,events:Array,indicators:String,minDate:Date,maxDate:Date,focused:Object,disabled:Boolean,dateCreator:Function,unselectableDates:Array,unselectableDaysOfWeek:Array,selectableDates:Array},computed:{visibleDayNames:function(){for(var e=[],t=this.firstDayOfWeek;e.length<this.dayNames.length;){var n=this.dayNames[t%this.dayNames.length];e.push(n),t++}return e},hasEvents:function(){return this.events&&this.events.length},eventsInThisMonth:function(){if(!this.events)return[];for(var e=[],t=0;t<this.events.length;t++){var n=this.events[t];n.hasOwnProperty("date")||(n={date:n}),n.hasOwnProperty("type")||(n.type="is-primary"),n.date.getMonth()===this.focused.month&&n.date.getFullYear()===this.focused.year&&e.push(n)}return e}},methods:{updateSelectedDate:function(e){this.$emit("input",e)},weekBuilder:function(e,t,n){for(var i=new Date(n,t),r=[],a=new Date(n,t,e).getDay(),s=a>=this.firstDayOfWeek?a-this.firstDayOfWeek:7-this.firstDayOfWeek+a,o=1,u=0;u<s;u++)r.unshift(new Date(i.getFullYear(),i.getMonth(),e-o)),o++;r.push(new Date(n,t,e));for(var l=1;r.length<7;)r.push(new Date(n,t,e+l)),l++;return r},weeksInThisMonth:function(e,t){for(var n=[],i=new Date(t,e+1,0).getDate(),r=1;r<=i+6;){var a=this.weekBuilder(r,e,t),s=!1;a.forEach((function(t){t.getMonth()===e&&(s=!0)})),s&&n.push(a),r+=7}return n},eventsInThisWeek:function(e,t){if(!this.eventsInThisMonth.length)return[];var n=[],i=[];i=this.weeksInThisMonth(this.focused.month,this.focused.year);for(var r=0;r<i[t].length;r++)for(var a=0;a<this.eventsInThisMonth.length;a++){var s=this.eventsInThisMonth[a].date.getTime();s===i[t][r].getTime()&&n.push(this.eventsInThisMonth[a])}return n}}}}),(function(e,t,n){var i=n(2)(n(140),n(141),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BDatepickerTableRow",props:{selectedDate:Date,week:{type:Array,required:!0},month:{type:Number,required:!0},minDate:Date,maxDate:Date,disabled:Boolean,unselectableDates:Array,unselectableDaysOfWeek:Array,selectableDates:Array,events:Array,indicators:String,dateCreator:Function},methods:{selectableDate:function(e){var t=[];if(this.minDate&&t.push(e>=this.minDate),this.maxDate&&t.push(e<=this.maxDate),t.push(e.getMonth()===this.month),this.selectableDates)for(var n=0;n<this.selectableDates.length;n++){var i=this.selectableDates[n];if(e.getDate()===i.getDate()&&e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth())return!0;t.push(!1)}if(this.unselectableDates)for(var r=0;r<this.unselectableDates.length;r++){var a=this.unselectableDates[r];t.push(e.getDate()!==a.getDate()||e.getFullYear()!==a.getFullYear()||e.getMonth()!==a.getMonth())}if(this.unselectableDaysOfWeek)for(var s=0;s<this.unselectableDaysOfWeek.length;s++){var o=this.unselectableDaysOfWeek[s];t.push(e.getDay()!==o)}return t.indexOf(!1)<0},emitChosenDate:function(e){this.disabled||this.selectableDate(e)&&this.$emit("select",e)},eventsDateMatch:function(e){if(!this.events.length)return!1;for(var t=[],n=0;n<this.events.length;n++)this.events[n].date.getDay()===e.getDay()&&t.push(this.events[n]);return!!t.length&&t},classObject:function(e){function t(e,t){return!(!e||!t)&&(e.getDate()===t.getDate()&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth())}return{"is-selected":t(e,this.selectedDate),"is-today":t(e,this.dateCreator()),"is-selectable":this.selectableDate(e)&&!this.disabled,"is-unselectable":!this.selectableDate(e)||this.disabled}}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"datepicker-row"},[e._l(e.week,(function(t,i){return[e.selectableDate(t)&&!e.disabled?n("a",{key:i,staticClass:"datepicker-cell",class:[e.classObject(t),{"has-event":e.eventsDateMatch(t)},e.indicators],attrs:{role:"button",href:"#",disabled:e.disabled},on:{click:function(n){n.preventDefault(),e.emitChosenDate(t)},keydown:[function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;n.preventDefault(),e.emitChosenDate(t)},function(n){if(!("button"in n)&&e._k(n.keyCode,"space",32,n.key))return null;n.preventDefault(),e.emitChosenDate(t)}]}},[e._v("\n            "+e._s(t.getDate())+"\n\n            "),e.eventsDateMatch(t)?n("div",{staticClass:"events"},e._l(e.eventsDateMatch(t),(function(e,t){return n("div",{key:t,staticClass:"event",class:e.type})}))):e._e()]):n("div",{key:i,staticClass:"datepicker-cell",class:e.classObject(t)},[e._v("\n            "+e._s(t.getDate())+"\n        ")])]}))],2)},staticRenderFns:[]}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"datepicker-table"},[n("header",{staticClass:"datepicker-header"},e._l(e.visibleDayNames,(function(t,i){return n("div",{key:i,staticClass:"datepicker-cell"},[e._v("\n            "+e._s(t)+"\n        ")])}))),e._v(" "),n("div",{staticClass:"datepicker-body",class:{"has-events":e.hasEvents}},e._l(e.weeksInThisMonth(e.focused.month,e.focused.year),(function(t,i){return n("b-datepicker-table-row",{key:i,attrs:{"selected-date":e.value,week:t,month:e.focused.month,"min-date":e.minDate,"max-date":e.maxDate,disabled:e.disabled,"unselectable-dates":e.unselectableDates,"unselectable-days-of-week":e.unselectableDaysOfWeek,"selectable-dates":e.selectableDates,events:e.eventsInThisWeek(t,i),indicators:e.indicators,"date-creator":e.dateCreator},on:{select:e.updateSelectedDate}})})))])},staticRenderFns:[]}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"datepicker control",class:[e.size,{"is-expanded":e.expanded}]},[!e.isMobile||e.inline?n("b-dropdown",{ref:"dropdown",attrs:{position:e.position,disabled:e.disabled,inline:e.inline}},[e.inline?e._e():n("b-input",e._b({ref:"input",attrs:{slot:"trigger",autocomplete:"off",value:e.formatValue(e.dateSelected),placeholder:e.placeholder,size:e.size,icon:e.icon,"icon-pack":e.iconPack,rounded:e.rounded,loading:e.loading,disabled:e.disabled,readonly:!e.editable},on:{focus:function(t){e.$emit("focus",t)},blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()}},nativeOn:{change:function(t){e.onChange(t.target.value)}},slot:"trigger"},"b-input",e.$attrs,!1)),e._v(" "),n("b-dropdown-item",{attrs:{disabled:e.disabled,custom:""}},[n("header",{staticClass:"datepicker-header"},[void 0!==e.$slots.header&&e.$slots.header.length?[e._t("header")]:n("div",{staticClass:"pagination field is-centered",class:e.size},[e.isFirstMonth||e.disabled?e._e():n("a",{staticClass:"pagination-previous",attrs:{role:"button",href:"#",disabled:e.disabled},on:{click:function(t){t.preventDefault(),e.decrementMonth(t)},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.preventDefault(),e.decrementMonth(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"space",32,t.key))return null;t.preventDefault(),e.decrementMonth(t)}]}},[n("b-icon",{attrs:{icon:"chevron-left",pack:e.iconPack,both:"",type:"is-primary is-clickable"}})],1),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.isLastMonth&&!e.disabled,expression:"!isLastMonth && !disabled"}],staticClass:"pagination-next",attrs:{role:"button",href:"#",disabled:e.disabled},on:{click:function(t){t.preventDefault(),e.incrementMonth(t)},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.preventDefault(),e.incrementMonth(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"space",32,t.key))return null;t.preventDefault(),e.incrementMonth(t)}]}},[n("b-icon",{attrs:{icon:"chevron-right",pack:e.iconPack,both:"",type:"is-primary is-clickable"}})],1),e._v(" "),n("div",{staticClass:"pagination-list"},[n("b-field",[n("b-select",{attrs:{disabled:e.disabled,size:e.size},model:{value:e.focusedDateData.month,callback:function(t){e.$set(e.focusedDateData,"month",t)},expression:"focusedDateData.month"}},e._l(e.monthNames,(function(t,i){return n("option",{key:t,domProps:{value:i}},[e._v("\n                                    "+e._s(t)+"\n                                ")])}))),e._v(" "),n("b-select",{attrs:{disabled:e.disabled,size:e.size},model:{value:e.focusedDateData.year,callback:function(t){e.$set(e.focusedDateData,"year",t)},expression:"focusedDateData.year"}},e._l(e.listOfYears,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                                    "+e._s(t)+"\n                                ")])})))],1)],1)])],2),e._v(" "),n("div",{staticClass:"datepicker-content"},[n("b-datepicker-table",{attrs:{"day-names":e.dayNames,"month-names":e.monthNames,"first-day-of-week":e.firstDayOfWeek,"min-date":e.minDate,"max-date":e.maxDate,focused:e.focusedDateData,disabled:e.disabled,"unselectable-dates":e.unselectableDates,"unselectable-days-of-week":e.unselectableDaysOfWeek,"selectable-dates":e.selectableDates,events:e.events,indicators:e.indicators,"date-creator":e.dateCreator},on:{close:function(t){e.$refs.dropdown.isActive=!1}},model:{value:e.dateSelected,callback:function(t){e.dateSelected=t},expression:"dateSelected"}})],1),e._v(" "),void 0!==e.$slots.default&&e.$slots.default.length?n("footer",{staticClass:"datepicker-footer"},[e._t("default")],2):e._e()])],1):n("b-input",e._b({ref:"input",attrs:{type:"date",autocomplete:"off",value:e.formatYYYYMMDD(e.value),placeholder:e.placeholder,size:e.size,icon:e.icon,"icon-pack":e.iconPack,loading:e.loading,max:e.formatYYYYMMDD(e.maxDate),min:e.formatYYYYMMDD(e.minDate),disabled:e.disabled,readonly:!1},on:{focus:function(t){e.$emit("focus",t)},blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()}},nativeOn:{change:function(t){e.onChangeNativePicker(t)}}},"b-input",e.$attrs,!1))],1)},staticRenderFns:[]}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){e.exports=n(134)})])}));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(t,e){if(true)module.exports=e(__webpack_require__(4));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n=e("object"==typeof exports?require("vue"):t.Vue);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}})("undefined"!=typeof self?self:this,(function(t){return (function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=236)})({0:function(t,e,n){t.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},1:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(t,e,n){var o=n(6);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},106:function(t,e,n){var o=n(2)(n(118),n(119),null,null,null);t.exports=o.exports},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(45),i=n(14);e.default={name:"BModal",props:{active:Boolean,component:[Object,Function],content:String,programmatic:Boolean,props:Object,events:Object,width:{type:[String,Number],default:960},hasModalCard:Boolean,animation:{type:String,default:"zoom-out"},canCancel:{type:[Array,Boolean],default:function(){return i.a.defaultModalCanCancel?i.a.defaultModalCanCancel:["escape","x","outside","button"]}},onCancel:{type:Function,default:function(){}},scroll:{type:String,default:function(){return i.a.defaultModalScroll?i.a.defaultModalScroll:"clip"},validator:function(t){return["clip","keep"].indexOf(t)>=0}}},data:function(){return{isActive:this.active||!1,savedScrollTop:null,newWidth:"number"==typeof this.width?this.width+"px":this.width}},computed:{cancelOptions:function(){return"boolean"==typeof this.canCancel?this.canCancel?["escape","x","outside","button"]:[]:this.canCancel},showX:function(){return this.cancelOptions.indexOf("x")>=0}},watch:{active:function(t){this.isActive=t},isActive:function(){this.handleScroll()}},methods:{handleScroll:function(){if("undefined"!=typeof window){if("clip"===this.scroll)return void(this.isActive?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped"));if(this.savedScrollTop=this.savedScrollTop?this.savedScrollTop:document.documentElement.scrollTop,this.isActive?document.body.classList.add("is-noscroll"):document.body.classList.remove("is-noscroll"),this.isActive)return void(document.body.style.top="-"+this.savedScrollTop+"px");document.documentElement.scrollTop=this.savedScrollTop,document.body.style.top=null,this.savedScrollTop=null}},cancel:function(t){this.cancelOptions.indexOf(t)<0||(this.onCancel.apply(null,arguments),this.close())},close:function(){var t=this;this.$emit("close"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){t.$destroy(),Object(o.d)(t.$el)}),150))},keyPress:function(t){this.isActive&&27===t.keyCode&&this.cancel("escape")}},created:function(){"undefined"!=typeof window&&document.addEventListener("keyup",this.keyPress)},beforeMount:function(){this.programmatic&&document.body.appendChild(this.$el)},mounted:function(){this.programmatic?this.isActive=!0:this.isActive&&this.handleScroll()},beforeDestroy:function(){if("undefined"!=typeof window){document.removeEventListener("keyup",this.keyPress),document.documentElement.classList.remove("is-clipped");var t=this.savedScrollTop?this.savedScrollTop:document.documentElement.scrollTop;document.body.classList.remove("is-noscroll"),document.documentElement.scrollTop=t,document.body.style.top=null}}}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.animation}},[t.isActive?n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:function(e){t.cancel("outside")}}}),t._v(" "),n("div",{staticClass:"animation-content",class:{"modal-content":!t.hasModalCard},style:{maxWidth:t.newWidth}},[t.component?n(t.component,t._g(t._b({tag:"component",on:{close:t.close}},"component",t.props,!1),t.events)):t.content?n("div",{domProps:{innerHTML:t._s(t.content)}}):t._t("default")],2),t._v(" "),t.showX?n("button",{staticClass:"modal-close is-large",attrs:{type:"button"},on:{click:function(e){t.cancel("x")}}}):t._e()]):t._e()])},staticRenderFns:[]}},12:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var o=function(t){"undefined"!=typeof window&&window.Vue&&window.Vue.use(t)},i=function(t,e){t.component(e.name,e)},r=function(t,e,n){t.prototype[e]=n}},13:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},14:function(t,e,n){"use strict";var o={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0};e.a=o},144:function(t,e,n){"use strict";function o(t){return new(("undefined"!=typeof window&&window.Vue?window.Vue:a.a).extend(s.a))({el:document.createElement("div"),propsData:t})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Dialog",(function(){return f}));var i=n(69),r=n.n(i),c=n(70),a=n.n(c),u=n(145),s=n.n(u),l=n(12),f={alert:function(t){var e=void 0;"string"==typeof t&&(e=t);var n={canCancel:!1,message:e};return o(r()(n,t))},confirm:function(t){var e={};return o(r()(e,t))},prompt:function(t){var e={hasInput:!0,confirmText:"Done"};return o(r()(e,t))}},d={install:function(t){Object(l.a)(t,s.a),Object(l.b)(t,"$dialog",f)}};Object(l.c)(d),e.default=d},145:function(t,e,n){var o=n(2)(n(146),n(147),null,null,null);t.exports=o.exports},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),i=n.n(o),r=n(31),c=n.n(r),a=n(106),u=n.n(a),s=n(14),l=n(45);e.default={name:"BDialog",components:i()({},c.a.name,c.a),extends:u.a,props:{title:String,message:String,icon:String,iconPack:String,hasIcon:Boolean,type:{type:String,default:"is-primary"},size:String,confirmText:{type:String,default:function(){return s.a.defaultDialogConfirmText?s.a.defaultDialogConfirmText:"OK"}},cancelText:{type:String,default:function(){return s.a.defaultDialogCancelText?s.a.defaultDialogCancelText:"Cancel"}},hasInput:Boolean,inputAttrs:{type:Object,default:function(){return{}}},onConfirm:{type:Function,default:function(){}},focusOn:{type:String,default:"confirm"}},data:function(){return{prompt:this.hasInput?this.inputAttrs.value||"":"",isActive:!1,validationMessage:""}},computed:{iconByType:function(){switch(this.type){case"is-info":return"information";case"is-success":return"check-circle";case"is-warning":return"alert";case"is-danger":return"alert-circle";default:return null}},showCancel:function(){return this.cancelOptions.indexOf("button")>=0}},methods:{confirm:function(){var t=this;if(void 0!==this.$refs.input&&!this.$refs.input.checkValidity())return this.validationMessage=this.$refs.input.validationMessage,void this.$nextTick((function(){return t.$refs.input.select()}));this.onConfirm(this.prompt),this.close()},close:function(){var t=this;this.isActive=!1,setTimeout((function(){t.$destroy(),Object(l.d)(t.$el)}),150)}},beforeMount:function(){var t=this;this.$nextTick((function(){document.body.appendChild(t.$el)}))},mounted:function(){var t=this;this.isActive=!0,void 0===this.inputAttrs.required&&this.$set(this.inputAttrs,"required",!0),this.$nextTick((function(){t.hasInput?t.$refs.input.focus():"cancel"===t.focusOn&&t.showCancel?t.$refs.cancelButton.focus():t.$refs.confirmButton.focus()}))}}},147:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.animation}},[t.isActive?n("div",{staticClass:"dialog modal is-active",class:t.size},[n("div",{staticClass:"modal-background",on:{click:function(e){t.cancel("outside")}}}),t._v(" "),n("div",{staticClass:"modal-card animation-content"},[t.title?n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("section",{staticClass:"modal-card-body",class:{"is-titleless":!t.title,"is-flex":t.hasIcon}},[n("div",{staticClass:"media"},[t.hasIcon?n("div",{staticClass:"media-left"},[n("b-icon",{attrs:{icon:t.icon?t.icon:t.iconByType,pack:t.iconPack,type:t.type,both:!t.icon,size:"is-large"}})],1):t._e(),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{domProps:{innerHTML:t._s(t.message)}}),t._v(" "),t.hasInput?n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.prompt,expression:"prompt"}],ref:"input",staticClass:"input",class:{"is-danger":t.validationMessage},domProps:{value:t.prompt},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.confirm(e)},input:function(e){e.target.composing||(t.prompt=e.target.value)}}},"input",t.inputAttrs,!1))]),t._v(" "),n("p",{staticClass:"help is-danger"},[t._v(t._s(t.validationMessage))])]):t._e()])])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t.showCancel?n("button",{ref:"cancelButton",staticClass:"button",on:{click:function(e){t.cancel("button")}}},[t._v("\n                    "+t._s(t.cancelText)+"\n                ")]):t._e(),t._v(" "),n("button",{ref:"confirmButton",staticClass:"button",class:t.type,on:{click:t.confirm}},[t._v("\n                    "+t._s(t.confirmText)+"\n                ")])])])]):t._e()])},staticRenderFns:[]}},15:function(t,e,n){var o=n(6);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},16:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},17:function(t,e,n){var o=n(1),i=n(3),r=n(30),c=n(9),a=n(5),u=function(t,e,n){var s,l,f,d=t&u.F,p=t&u.G,m=t&u.S,v=t&u.P,h=t&u.B,y=t&u.W,g=p?i:i[e]||(i[e]={}),x=g.prototype,b=p?o:m?o[e]:(o[e]||{}).prototype;p&&(n=e);for(s in n)(l=!d&&b&&void 0!==b[s])&&a(g,s)||(f=l?b[s]:n[s],g[s]=p&&"function"!=typeof b[s]?n[s]:h&&l?r(f,o):y&&b[s]==f?(function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(f):v&&"function"==typeof f?r(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[s]=f,t&u.R&&x&&!x[s]&&c(x,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},18:function(t,e){t.exports=!0},19:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},2:function(t,e){t.exports=function(t,e,n,o,i){var r,c=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,c=t.default);var u="function"==typeof c?c.options:c;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),o&&(u._scopeId=o);var s;if(i?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=s):n&&(s=n),s){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(t,e){return s.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,s):[s]}return{esModule:r,exports:c,options:u}}},20:function(t,e,n){t.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},21:function(t,e,n){var o=n(6),i=n(1).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},22:function(t,e,n){var o=n(35),i=n(25);t.exports=Object.keys||function(t){return o(t,i)}},23:function(t,e){e.f={}.propertyIsEnumerable},236:function(t,e,n){t.exports=n(144)},24:function(t,e,n){var o=n(3),i=n(1),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},25:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},26:function(t,e,n){"use strict";e.__esModule=!0;var o=n(49),i=(function(t){return t&&t.__esModule?t:{default:t}})(o);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},27:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},28:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},29:function(t,e,n){var o=n(24)("keys"),i=n(16);t.exports=function(t){return o[t]||(o[t]=i(t))}},3:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},30:function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},31:function(t,e,n){var o=n(2)(n(52),n(53),null,null,null);t.exports=o.exports},32:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},34:function(t,e){e.f=Object.getOwnPropertySymbols},35:function(t,e,n){var o=n(5),i=n(8),r=n(43)(!1),c=n(29)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,s=[];for(n in a)n!=c&&o(a,n)&&s.push(n);for(;e.length>u;)o(a,n=e[u++])&&(~r(s,n)||s.push(n));return s}},37:function(t,e,n){var o=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},4:function(t,e,n){var o=n(10),i=n(20),r=n(15),c=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},41:function(t,e,n){var o=n(19),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},43:function(t,e,n){var o=n(8),i=n(41),r=n(44);t.exports=function(t){return function(e,n,c){var a,u=o(e),s=i(u.length),l=r(c,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},44:function(t,e,n){var o=n(19),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},45:function(t,e,n){"use strict";function o(t,e){return e.split(".").reduce((function(t,e){return t[e]}),t)}function i(t,e,n){if(!t)return-1;if(!n||"function"!=typeof n)return t.indexOf(e);for(var o=0;o<t.length;o++)if(n(t[o],e))return o;return-1}function r(t){void 0!==t.remove?t.remove():void 0!==t.parentNode&&t.parentNode.removeChild(t)}e.a=o,e.b=i,n.d(e,"c",(function(){return c})),e.d=r;var c={Android:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Android/i)},BlackBerry:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/IEMobile/i)},any:function(){return c.Android()||c.BlackBerry()||c.iOS()||c.Opera()||c.Windows()}}},49:function(t,e,n){t.exports={default:n(50),__esModule:!0}},5:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},50:function(t,e,n){n(51);var o=n(3).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},51:function(t,e,n){var o=n(17);o(o.S+o.F*!n(0),"Object",{defineProperty:n(4).f})},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(14);e.default={name:"BIcon",props:{type:[String,Object],pack:String,icon:String,size:String,customSize:String,customClass:String,both:Boolean},computed:{newIcon:function(){return"mdi"===this.newPack?this.newPack+"-"+this.icon:this.addFAPrefix(this.getEquivalentIconOf(this.icon))},newPack:function(){return this.pack||o.a.defaultIconPack},newType:function(){if(this.type){var t=[];if("string"==typeof this.type)t=this.type.split("-");else for(var e in this.type)if(this.type[e]){t=e.split("-");break}if(!(t.length<=1))return"has-text-"+t[1]}},newCustomSize:function(){return this.customSize||this.customSizeByPack},customSizeByPack:function(){var t="mdi"===this.newPack?"mdi-24px":this.addFAPrefix("lg"),e="mdi"===this.newPack?"mdi-36px":this.addFAPrefix("2x"),n="mdi"===this.newPack?"mdi-48px":this.addFAPrefix("3x");switch(this.size){case"is-small":return;case"is-medium":return e;case"is-large":return n;default:return t}},useIconComponent:function(){return o.a.defaultIconComponent}},methods:{addFAPrefix:function(t){return this.useIconComponent?t:"fa-"+t},getEquivalentIconOf:function(t){if(!this.both)return t;switch(t){case"check":return"check";case"information":return"info-circle";case"check-circle":return"check-circle";case"alert":return"exclamation-triangle";case"alert-circle":return"exclamation-circle";case"arrow-up":return"arrow-up";case"chevron-right":return"angle-right";case"chevron-left":return"angle-left";case"chevron-down":return"angle-down";case"eye":return"eye";case"eye-off":return"eye-slash";case"menu-down":return"caret-down";case"menu-up":return"caret-up";default:return t}}}}},53:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon",class:[t.newType,t.size]},[t.useIconComponent?n(t.useIconComponent,{tag:"component",class:[t.customClass],attrs:{icon:[t.newPack,t.newIcon],size:t.newCustomSize}}):n("i",{class:[t.newPack,t.newIcon,t.newCustomSize,t.customClass]})],1)},staticRenderFns:[]}},54:function(t,e,n){var o=n(27);t.exports=function(t){return Object(o(t))}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},69:function(t,e,n){t.exports={default:n(87),__esModule:!0}},7:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},70:function(e,n){e.exports=t},8:function(t,e,n){var o=n(37),i=n(27);t.exports=function(t){return o(i(t))}},87:function(t,e,n){n(88),t.exports=n(3).Object.assign},88:function(t,e,n){var o=n(17);o(o.S+o.F,"Object",{assign:n(89)})},89:function(t,e,n){"use strict";var o=n(22),i=n(34),r=n(23),c=n(54),a=n(37),u=Object.assign;t.exports=!u||n(7)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=o}))?function(t,e){for(var n=c(t),u=arguments.length,s=1,l=i.f,f=r.f;u>s;)for(var d,p=a(arguments[s++]),m=l?o(p).concat(l(p)):o(p),v=m.length,h=0;v>h;)f.call(p,d=m[h++])&&(n[d]=p[d]);return n}:u},9:function(t,e,n){var o=n(4),i=n(13);t.exports=n(0)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}}})}));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=238)})({0:function(e,t,n){e.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},1:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),o=n.n(r),i=n(101),s=n.n(i);t.default={name:"BField",components:o()({},s.a.name,s.a),props:{type:[String,Object],label:String,labelFor:String,message:[String,Array,Object],grouped:Boolean,groupMultiline:Boolean,position:String,expanded:Boolean,horizontal:Boolean,addons:{type:Boolean,default:!0},customClass:String},data:function(){return{newType:this.type,newMessage:this.message,fieldLabelSize:null,_isField:!0}},computed:{rootClasses:function(){return[this.newPosition,{"is-expanded":this.expanded,"is-grouped-multiline":this.groupMultiline,"is-horizontal":this.horizontal}]},newPosition:function(){if(void 0!==this.position){var e=this.position.split("-");if(!(e.length<1)){var t=this.grouped?"is-grouped-":"has-addons-";return this.position?t+e[1]:void 0}}},formattedMessage:function(){if("string"==typeof this.newMessage)return this.newMessage;var e=[];if(Array.isArray(this.newMessage))this.newMessage.forEach((function(t){if("string"==typeof t)e.push(t);else for(var n in t)t[n]&&e.push(n)}));else for(var t in this.newMessage)this.newMessage[t]&&e.push(t);return e.filter((function(e){if(e)return e})).join(" <br> ")}},watch:{type:function(e){this.newType=e},message:function(e){this.newMessage=e}},methods:{fieldType:function(){if(this.grouped)return"is-grouped";var e=0;return this.$slots.default&&(e=this.$slots.default.reduce((function(e,t){return t.tag?e+1:e}),0)),e>1&&this.addons&&!this.horizontal?"has-addons":void 0}},mounted:function(){if(this.horizontal){this.$el.querySelectorAll(".input, .select, .button, .textarea").length>0&&(this.fieldLabelSize="is-normal")}}}},101:function(e,t,n){var r=n(2)(n(102),null,null,null,null);e.exports=r.exports},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BFieldBody",props:{message:{type:String},type:{type:[String,Object]}},render:function(e){var t=this;return e("div",{attrs:{class:"field-body"}},this.$slots.default.map((function(n){return n.tag?t.message?e("b-field",{attrs:{message:t.message,type:t.type}},[n]):e("b-field",{attrs:{type:t.type}},[n]):n})))}}},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field",class:[e.rootClasses,e.fieldType()]},[e.horizontal?n("div",{staticClass:"field-label",class:[e.customClass,e.fieldLabelSize]},[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()]):[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()],e._v(" "),e.horizontal?n("b-field-body",{attrs:{message:e.newMessage?e.formattedMessage:"",type:e.newType}},[e._t("default")],2):[e._t("default")],e._v(" "),e.newMessage&&!e.horizontal?n("p",{staticClass:"help",class:e.newType,domProps:{innerHTML:e._s(e.formattedMessage)}}):e._e()],2)},staticRenderFns:[]}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=function(e){"undefined"!=typeof window&&window.Vue&&window.Vue.use(e)},o=function(e,t){e.component(t.name,t)},i=function(e,t,n){e.prototype[t]=n}},13:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=n.n(r),i=n(12);n.d(t,"Field",(function(){return o.a}));var s={install:function(e){Object(i.a)(e,o.a)}};Object(i.c)(s),t.default=s},15:function(e,t,n){var r=n(6);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},17:function(e,t,n){var r=n(1),o=n(3),i=n(30),s=n(9),u=n(5),a=function(e,t,n){var f,l,c,p=e&a.F,d=e&a.G,y=e&a.S,h=e&a.P,v=e&a.B,b=e&a.W,g=d?o:o[t]||(o[t]={}),_=g.prototype,m=d?r:y?r[t]:(r[t]||{}).prototype;d&&(n=t);for(f in n)(l=!p&&m&&void 0!==m[f])&&u(g,f)||(c=l?m[f]:n[f],g[f]=d&&"function"!=typeof m[f]?n[f]:v&&l?i(c,r):b&&m[f]==c?(function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t})(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((g.virtual||(g.virtual={}))[f]=c,e&a.R&&_&&!_[f]&&s(_,f,c)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},2:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=f):n&&(f=n),f){var l=a.functional,c=l?a.render:a.beforeCreate;l?a.render=function(e,t){return f.call(t),c(e,t)}:a.beforeCreate=c?[].concat(c,f):[f]}return{esModule:i,exports:s,options:a}}},20:function(e,t,n){e.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},21:function(e,t,n){var r=n(6),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},238:function(e,t,n){e.exports=n(149)},26:function(e,t,n){"use strict";t.__esModule=!0;var r=n(49),o=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},30:function(e,t,n){var r=n(32);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},32:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},4:function(e,t,n){var r=n(10),o=n(20),i=n(15),s=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},49:function(e,t,n){e.exports={default:n(50),__esModule:!0}},5:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},50:function(e,t,n){n(51);var r=n(3).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},51:function(e,t,n){var r=n(17);r(r.S+r.F*!n(0),"Object",{defineProperty:n(4).f})},6:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},7:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},9:function(e,t,n){var r=n(4),o=n(13);e.exports=n(0)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},92:function(e,t,n){var r=n(2)(n(100),n(103),null,null,null);e.exports=r.exports}})}));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}})("undefined"!=typeof self?self:this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=240)})({0:function(e,t,n){e.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},1:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(e,t,n){var i=n(6);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=function(e){"undefined"!=typeof window&&window.Vue&&window.Vue.use(e)},r=function(e,t){e.component(t.name,t)},o=function(e,t,n){e.prototype[t]=n}},13:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},14:function(e,t,n){"use strict";var i={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0};t.a=i},15:function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(73),r=n.n(i),o=n(12);n.d(t,"Input",(function(){return r.a}));var s={install:function(e){Object(o.a)(e,r.a)}};Object(o.c)(s),t.default=s},17:function(e,t,n){var i=n(1),r=n(3),o=n(30),s=n(9),a=n(5),u=function(e,t,n){var c,l,f,p=e&u.F,d=e&u.G,h=e&u.S,m=e&u.P,y=e&u.B,v=e&u.W,w=d?r:r[t]||(r[t]={}),g=w.prototype,x=d?i:h?i[t]:(i[t]||{}).prototype;d&&(n=t);for(c in n)(l=!p&&x&&void 0!==x[c])&&a(w,c)||(f=l?x[c]:n[c],w[c]=d&&"function"!=typeof x[c]?n[c]:y&&l?o(f,i):v&&x[c]==f?(function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t})(f):m&&"function"==typeof f?o(Function.call,f):f,m&&((w.virtual||(w.virtual={}))[c]=f,e&u.R&&g&&!g[c]&&s(g,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},2:function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:s,options:u}}},20:function(e,t,n){e.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},21:function(e,t,n){var i=n(6),r=n(1).document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},240:function(e,t,n){e.exports=n(151)},26:function(e,t,n){"use strict";t.__esModule=!0;var i=n(49),r=(function(e){return e&&e.__esModule?e:{default:e}})(i);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},30:function(e,t,n){var i=n(32);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},31:function(e,t,n){var i=n(2)(n(52),n(53),null,null,null);e.exports=i.exports},32:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},4:function(e,t,n){var i=n(10),r=n(20),o=n(15),s=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},46:function(e,t,n){"use strict";var i=n(14);t.a={props:{size:String,expanded:Boolean,loading:Boolean,rounded:Boolean,icon:String,iconPack:String,autocomplete:String,maxlength:[Number,String],useHtml5Validation:{type:Boolean,default:function(){return i.a.defaultUseHtml5Validation}}},data:function(){return{isValid:!0,isFocused:!1,newIconPack:this.iconPack||i.a.defaultIconPack}},computed:{parentField:function(){for(var e=this.$parent,t=0;t<3;t++)e&&!e.$data._isField&&(e=e.$parent);return e},statusType:function(){if(this.parentField&&this.parentField.newType){if("string"==typeof this.parentField.newType)return this.parentField.newType;for(var e in this.parentField.newType)if(this.parentField.newType[e])return e}},statusMessage:function(){if(this.parentField)return this.parentField.newMessage},iconSize:function(){switch(this.size){case"is-small":return this.size;case"is-medium":return;case"is-large":return"mdi"===this.newIconPack?"is-medium":""}}},methods:{focus:function(){var e=this;void 0!==this.$data._elementRef&&this.$nextTick((function(){return e.$el.querySelector(e.$data._elementRef).focus()}))},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e),this.checkHtml5Validity()},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},checkHtml5Validity:function(){var e=this;if(this.useHtml5Validation&&void 0!==this.$refs[this.$data._elementRef]){var t=this.$el.querySelector(this.$data._elementRef),n=null,i=null,r=!0;return t.checkValidity()||(n="is-danger",i=t.validationMessage,r=!1),this.isValid=r,this.$nextTick((function(){e.parentField&&(e.parentField.type||(e.parentField.newType=n),e.parentField.message||(e.parentField.newMessage=i))})),this.isValid}}}}},49:function(e,t,n){e.exports={default:n(50),__esModule:!0}},5:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},50:function(e,t,n){n(51);var i=n(3).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},51:function(e,t,n){var i=n(17);i(i.S+i.F*!n(0),"Object",{defineProperty:n(4).f})},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14);t.default={name:"BIcon",props:{type:[String,Object],pack:String,icon:String,size:String,customSize:String,customClass:String,both:Boolean},computed:{newIcon:function(){return"mdi"===this.newPack?this.newPack+"-"+this.icon:this.addFAPrefix(this.getEquivalentIconOf(this.icon))},newPack:function(){return this.pack||i.a.defaultIconPack},newType:function(){if(this.type){var e=[];if("string"==typeof this.type)e=this.type.split("-");else for(var t in this.type)if(this.type[t]){e=t.split("-");break}if(!(e.length<=1))return"has-text-"+e[1]}},newCustomSize:function(){return this.customSize||this.customSizeByPack},customSizeByPack:function(){var e="mdi"===this.newPack?"mdi-24px":this.addFAPrefix("lg"),t="mdi"===this.newPack?"mdi-36px":this.addFAPrefix("2x"),n="mdi"===this.newPack?"mdi-48px":this.addFAPrefix("3x");switch(this.size){case"is-small":return;case"is-medium":return t;case"is-large":return n;default:return e}},useIconComponent:function(){return i.a.defaultIconComponent}},methods:{addFAPrefix:function(e){return this.useIconComponent?e:"fa-"+e},getEquivalentIconOf:function(e){if(!this.both)return e;switch(e){case"check":return"check";case"information":return"info-circle";case"check-circle":return"check-circle";case"alert":return"exclamation-triangle";case"alert-circle":return"exclamation-circle";case"arrow-up":return"arrow-up";case"chevron-right":return"angle-right";case"chevron-left":return"angle-left";case"chevron-down":return"angle-down";case"eye":return"eye";case"eye-off":return"eye-slash";case"menu-down":return"caret-down";case"menu-up":return"caret-up";default:return e}}}}},53:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",class:[e.newType,e.size]},[e.useIconComponent?n(e.useIconComponent,{tag:"component",class:[e.customClass],attrs:{icon:[e.newPack,e.newIcon],size:e.newCustomSize}}):n("i",{class:[e.newPack,e.newIcon,e.newCustomSize,e.customClass]})],1)},staticRenderFns:[]}},6:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},7:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},73:function(e,t,n){var i=n(2)(n(85),n(86),null,null,null);e.exports=i.exports},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),o=n(31),s=n.n(o),a=n(14),u=n(46);t.default={name:"BInput",components:r()({},s.a.name,s.a),mixins:[u.a],inheritAttrs:!1,props:{value:[Number,String],type:{type:String,default:"text"},passwordReveal:Boolean,hasCounter:{type:Boolean,default:function(){return a.a.defaultInputHasCounter}},customClass:{type:String,default:""}},data:function(){return{newValue:this.value,newType:this.type,newAutocomplete:this.autocomplete||a.a.defaultInputAutocomplete,isPasswordVisible:!1,_elementRef:"textarea"===this.type?"textarea":"input"}},computed:{computedValue:{get:function(){return this.newValue},set:function(e){this.newValue=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()}},rootClasses:function(){return[this.iconPosition,this.size,{"is-expanded":this.expanded,"is-loading":this.loading,"is-clearfix":!this.hasMessage}]},inputClasses:function(){return[this.statusType,this.size,{"is-rounded":this.rounded}]},hasIconRight:function(){return this.passwordReveal||this.loading||this.statusType},iconPosition:function(){return this.icon&&this.hasIconRight?"has-icons-left has-icons-right":!this.icon&&this.hasIconRight?"has-icons-right":this.icon?"has-icons-left":void 0},statusTypeIcon:function(){switch(this.statusType){case"is-success":return"check";case"is-danger":return"alert-circle";case"is-info":return"information";case"is-warning":return"alert"}},hasMessage:function(){return!!this.statusMessage},passwordVisibleIcon:function(){return this.isPasswordVisible?"eye-off":"eye"},valueLength:function(){return"string"==typeof this.computedValue?this.computedValue.length:"number"==typeof this.computedValue?this.computedValue.toString().length:0}},watch:{value:function(e){this.newValue=e}},methods:{togglePasswordVisibility:function(){var e=this;this.isPasswordVisible=!this.isPasswordVisible,this.newType=this.isPasswordVisible?"text":"password",this.$nextTick((function(){e.$refs.input.focus()}))},onInput:function(e){var t=this;this.$nextTick((function(){e.target&&(t.computedValue=e.target.value)}))}}}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control",class:e.rootClasses},["textarea"!==e.type?n("input",e._b({ref:"input",staticClass:"input",class:[e.inputClasses,e.customClass],attrs:{type:e.newType,autocomplete:e.newAutocomplete,maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"input",e.$attrs,!1)):n("textarea",e._b({ref:"textarea",staticClass:"textarea",class:[e.inputClasses,e.customClass],attrs:{maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"textarea",e.$attrs,!1)),e._v(" "),e.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:e.icon,pack:e.iconPack,size:e.iconSize}}):e._e(),e._v(" "),e.loading||!e.passwordReveal&&!e.statusType?e._e():n("b-icon",{staticClass:"is-right",class:{"is-clickable":e.passwordReveal},attrs:{icon:e.passwordReveal?e.passwordVisibleIcon:e.statusTypeIcon,pack:e.iconPack,size:e.iconSize,type:e.passwordReveal?"is-primary":e.statusType,both:""},nativeOn:{click:function(t){e.togglePasswordVisibility(t)}}}),e._v(" "),e.maxlength&&e.hasCounter&&"number"!==e.type?n("small",{staticClass:"help counter",class:{"is-invisible":!e.isFocused}},[e._v("\n        "+e._s(e.valueLength)+" / "+e._s(e.maxlength)+"\n    ")]):e._e()],1)},staticRenderFns:[]}},9:function(e,t,n){var i=n(4),r=n(13);e.exports=n(0)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}}})}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=247)})([(function(t,e,n){t.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),(function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,u=t.default);var c="function"==typeof u?u.options:u;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var s;if(o?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=s):n&&(s=n),s){var f=c.functional,l=f?c.render:c.beforeCreate;f?c.render=function(t,e){return s.call(e),l(t,e)}:c.beforeCreate=l?[].concat(l,s):[s]}return{esModule:i,exports:u,options:c}}}),(function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),(function(t,e,n){var r=n(10),o=n(20),i=n(15),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}),(function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}),(function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}),(function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}),(function(t,e,n){var r=n(37),o=n(27);t.exports=function(t){return r(o(t))}}),(function(t,e,n){var r=n(4),o=n(13);t.exports=n(0)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}}),(function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}),(function(t,e,n){var r=n(24)("wks"),o=n(16),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r}),(function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=function(t){"undefined"!=typeof window&&window.Vue&&window.Vue.use(t)},o=function(t,e){t.component(e.name,e)},i=function(t,e,n){t.prototype[e]=n}}),(function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}}),(function(t,e,n){"use strict";var r={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0};e.a=r}),(function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}),(function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}}),(function(t,e,n){var r=n(1),o=n(3),i=n(30),u=n(9),a=n(5),c=function(t,e,n){var s,f,l,p=t&c.F,d=t&c.G,h=t&c.S,m=t&c.P,y=t&c.B,v=t&c.W,b=d?o:o[e]||(o[e]={}),g=b.prototype,x=d?r:h?r[e]:(r[e]||{}).prototype;d&&(n=e);for(s in n)(f=!p&&x&&void 0!==x[s])&&a(b,s)||(l=f?x[s]:n[s],b[s]=d&&"function"!=typeof x[s]?n[s]:y&&f?i(l,r):v&&x[s]==l?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((b.virtual||(b.virtual={}))[s]=l,t&c.R&&g&&!g[s]&&u(g,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c}),(function(t,e){t.exports=!0}),(function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}}),(function(t,e,n){t.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))}),(function(t,e,n){var r=n(6),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}}),(function(t,e,n){var r=n(35),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}}),(function(t,e){e.f={}.propertyIsEnumerable}),(function(t,e,n){var r=n(3),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),(function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(t,e,n){"use strict";e.__esModule=!0;var r=n(49),o=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}),(function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}),(function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}}),(function(t,e,n){var r=n(24)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}}),(function(t,e,n){var r=n(32);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}}),(function(t,e,n){var r=n(2)(n(52),n(53),null,null,null);t.exports=r.exports}),(function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}),(function(t,e,n){var r=n(1),o=n(3),i=n(18),u=n(39),a=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}}),(function(t,e){e.f=Object.getOwnPropertySymbols}),(function(t,e,n){var r=n(5),o=n(8),i=n(43)(!1),u=n(29)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(s,n)||s.push(n));return s}}),(function(t,e,n){t.exports={default:n(57),__esModule:!0}}),(function(t,e,n){var r=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}}),(function(t,e,n){var r=n(4).f,o=n(5),i=n(11)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}}),(function(t,e,n){e.f=n(11)}),,(function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}}),(function(t,e,n){var r=n(35),o=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}}),(function(t,e,n){var r=n(8),o=n(41),i=n(44);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=o(c.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}}),(function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}}),,(function(t,e,n){"use strict";var r=n(14);e.a={props:{size:String,expanded:Boolean,loading:Boolean,rounded:Boolean,icon:String,iconPack:String,autocomplete:String,maxlength:[Number,String],useHtml5Validation:{type:Boolean,default:function(){return r.a.defaultUseHtml5Validation}}},data:function(){return{isValid:!0,isFocused:!1,newIconPack:this.iconPack||r.a.defaultIconPack}},computed:{parentField:function(){for(var t=this.$parent,e=0;e<3;e++)t&&!t.$data._isField&&(t=t.$parent);return t},statusType:function(){if(this.parentField&&this.parentField.newType){if("string"==typeof this.parentField.newType)return this.parentField.newType;for(var t in this.parentField.newType)if(this.parentField.newType[t])return t}},statusMessage:function(){if(this.parentField)return this.parentField.newMessage},iconSize:function(){switch(this.size){case"is-small":return this.size;case"is-medium":return;case"is-large":return"mdi"===this.newIconPack?"is-medium":""}}},methods:{focus:function(){var t=this;void 0!==this.$data._elementRef&&this.$nextTick((function(){return t.$el.querySelector(t.$data._elementRef).focus()}))},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t),this.checkHtml5Validity()},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},checkHtml5Validity:function(){var t=this;if(this.useHtml5Validation&&void 0!==this.$refs[this.$data._elementRef]){var e=this.$el.querySelector(this.$data._elementRef),n=null,r=null,o=!0;return e.checkValidity()||(n="is-danger",r=e.validationMessage,o=!1),this.isValid=o,this.$nextTick((function(){t.parentField&&(t.parentField.type||(t.parentField.newType=n),t.parentField.message||(t.parentField.newMessage=r))})),this.isValid}}}}}),(function(t,e,n){t.exports=n(9)}),(function(t,e,n){var r=n(10),o=n(55),i=n(25),u=n(29)("IE_PROTO"),a=function(){},c=function(){var t,e=n(21)("iframe"),r=i.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}}),(function(t,e,n){t.exports={default:n(50),__esModule:!0}}),(function(t,e,n){n(51);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}}),(function(t,e,n){var r=n(17);r(r.S+r.F*!n(0),"Object",{defineProperty:n(4).f})}),(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14);e.default={name:"BIcon",props:{type:[String,Object],pack:String,icon:String,size:String,customSize:String,customClass:String,both:Boolean},computed:{newIcon:function(){return"mdi"===this.newPack?this.newPack+"-"+this.icon:this.addFAPrefix(this.getEquivalentIconOf(this.icon))},newPack:function(){return this.pack||r.a.defaultIconPack},newType:function(){if(this.type){var t=[];if("string"==typeof this.type)t=this.type.split("-");else for(var e in this.type)if(this.type[e]){t=e.split("-");break}if(!(t.length<=1))return"has-text-"+t[1]}},newCustomSize:function(){return this.customSize||this.customSizeByPack},customSizeByPack:function(){var t="mdi"===this.newPack?"mdi-24px":this.addFAPrefix("lg"),e="mdi"===this.newPack?"mdi-36px":this.addFAPrefix("2x"),n="mdi"===this.newPack?"mdi-48px":this.addFAPrefix("3x");switch(this.size){case"is-small":return;case"is-medium":return e;case"is-large":return n;default:return t}},useIconComponent:function(){return r.a.defaultIconComponent}},methods:{addFAPrefix:function(t){return this.useIconComponent?t:"fa-"+t},getEquivalentIconOf:function(t){if(!this.both)return t;switch(t){case"check":return"check";case"information":return"info-circle";case"check-circle":return"check-circle";case"alert":return"exclamation-triangle";case"alert-circle":return"exclamation-circle";case"arrow-up":return"arrow-up";case"chevron-right":return"angle-right";case"chevron-left":return"angle-left";case"chevron-down":return"angle-down";case"eye":return"eye";case"eye-off":return"eye-slash";case"menu-down":return"caret-down";case"menu-up":return"caret-up";default:return t}}}}}),(function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon",class:[t.newType,t.size]},[t.useIconComponent?n(t.useIconComponent,{tag:"component",class:[t.customClass],attrs:{icon:[t.newPack,t.newIcon],size:t.newCustomSize}}):n("i",{class:[t.newPack,t.newIcon,t.newCustomSize,t.customClass]})],1)},staticRenderFns:[]}}),,(function(t,e,n){var r=n(4),o=n(10),i=n(22);t.exports=n(0)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}}),(function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement}),(function(t,e,n){n(58),n(64),n(65),n(66),t.exports=n(3).Symbol}),(function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(0),u=n(17),a=n(47),c=n(59).KEY,s=n(7),f=n(24),l=n(38),p=n(16),d=n(11),h=n(39),m=n(33),y=n(60),v=n(61),b=n(10),g=n(6),x=n(8),w=n(15),_=n(13),S=n(48),O=n(62),P=n(63),k=n(4),F=n(22),j=P.f,C=k.f,T=O.f,E=r.Symbol,M=r.JSON,I=M&&M.stringify,z=d("_hidden"),V=d("toPrimitive"),$={}.propertyIsEnumerable,N=f("symbol-registry"),D=f("symbols"),R=f("op-symbols"),A=Object.prototype,B="function"==typeof E,H=r.QObject,W=!H||!H.prototype||!H.prototype.findChild,U=i&&s((function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=j(A,e);r&&delete A[e],C(t,e,n),r&&t!==A&&C(A,e,r)}:C,q=function(t){var e=D[t]=S(E.prototype);return e._k=t,e},J=B&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},G=function(t,e,n){return t===A&&G(R,e,n),b(t),e=w(e,!0),b(n),o(D,e)?(n.enumerable?(o(t,z)&&t[z][e]&&(t[z][e]=!1),n=S(n,{enumerable:_(0,!1)})):(o(t,z)||C(t,z,_(1,{})),t[z][e]=!0),U(t,e,n)):C(t,e,n)},K=function(t,e){b(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)G(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?S(t):K(S(t),e)},X=function(t){var e=$.call(this,t=w(t,!0));return!(this===A&&o(D,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,z)&&this[z][t])||e)},Y=function(t,e){if(t=x(t),e=w(e,!0),t!==A||!o(D,e)||o(R,e)){var n=j(t,e);return!n||!o(D,e)||o(t,z)&&t[z][e]||(n.enumerable=!0),n}},L=function(t){for(var e,n=T(x(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==z||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===A,r=T(n?R:x(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(A,e)||i.push(D[e]);return i};B||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===A&&e.call(R,n),o(this,z)&&o(this[z],t)&&(this[z][t]=!1),U(this,t,_(1,n))};return i&&W&&U(A,t,{configurable:!0,set:e}),q(t)},a(E.prototype,"toString",(function(){return this._k})),P.f=Y,k.f=G,n(42).f=O.f=L,n(23).f=X,n(34).f=Z,i&&!n(18)&&a(A,"propertyIsEnumerable",X,!0),h.f=function(t){return q(d(t))}),u(u.G+u.W+u.F*!B,{Symbol:E});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=F(d.store),rt=0;nt.length>rt;)m(nt[rt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=E(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!B,"Object",{create:Q,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:Y,getOwnPropertyNames:L,getOwnPropertySymbols:Z}),M&&u(u.S+u.F*(!B||s((function(){var t=E();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!J(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,I.apply(M,r)}}),E.prototype[V]||n(9)(E.prototype,V,E.prototype.valueOf),l(E,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)}),(function(t,e,n){var r=n(16)("meta"),o=n(6),i=n(5),u=n(4).f,a=0,c=Object.isExtensible||function(){return!0},s=!n(7)((function(){return c(Object.preventExtensions({}))})),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return s&&h.NEED&&c(t)&&!i(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}}),(function(t,e,n){var r=n(22),o=n(34),i=n(23);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,s=0;a.length>s;)c.call(t,u=a[s++])&&e.push(u);return e}}),(function(t,e,n){var r=n(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}}),(function(t,e,n){var r=n(8),o=n(42).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}}),(function(t,e,n){var r=n(23),o=n(13),i=n(8),u=n(15),a=n(5),c=n(20),s=Object.getOwnPropertyDescriptor;e.f=n(0)?s:function(t,e){if(t=i(t),e=u(e,!0),c)try{return s(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}}),(function(t,e){}),(function(t,e,n){n(33)("asyncIterator")}),(function(t,e,n){n(33)("observable")}),,,,,,,,,,,,,(function(t,e,n){var r=n(2)(n(93),n(94),null,null,null);t.exports=r.exports}),,,,,,,,,,,,,,(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n.n(r),i=n(26),u=n.n(i),a=n(31),c=n.n(a),s=n(46);e.default={name:"BSelect",components:u()({},c.a.name,c.a),mixins:[s.a],inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object,Array,o.a,Function],default:null},placeholder:String,multiple:Boolean,nativeSize:[String,Number]},data:function(){return{selected:this.value,_elementRef:"select"}},computed:{computedValue:{get:function(){return this.selected},set:function(t){this.selected=t,this.$emit("input",t),!this.isValid&&this.checkHtml5Validity()}},spanClasses:function(){return[this.size,this.statusType,{"is-fullwidth":this.expanded,"is-loading":this.loading,"is-multiple":this.multiple,"is-rounded":this.rounded,"is-empty":null===this.selected}]}},watch:{value:function(t){this.selected=t,!this.isValid&&this.checkHtml5Validity()}}}}),(function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control",class:{"is-expanded":t.expanded,"has-icons-left":t.icon}},[n("span",{staticClass:"select",class:t.spanClasses},[n("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.computedValue,expression:"computedValue"}],ref:"select",attrs:{multiple:t.multiple,size:t.nativeSize},on:{blur:function(e){t.$emit("blur",e)&&t.checkHtml5Validity()},focus:function(e){t.$emit("focus",e)},change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.computedValue=e.target.multiple?n:n[0]}}},"select",t.$attrs,!1),[t.placeholder?[null==t.computedValue?n("option",{attrs:{selected:"",disabled:"",hidden:""},domProps:{value:null}},[t._v("\n                    "+t._s(t.placeholder)+"\n                ")]):t._e()]:t._e(),t._v(" "),t._t("default")],2)]),t._v(" "),t.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:t.icon,pack:t.iconPack,size:t.iconSize}}):t._e()],1)},staticRenderFns:[]}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(79),o=n.n(r),i=n(12);n.d(e,"Select",(function(){return o.a}));var u={install:function(t){Object(i.a)(t,o.a)}};Object(i.c)(u),e.default=u}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(t,e,n){t.exports=n(173)})])}));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=249)})({0:function(t,e,n){t.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},1:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},11:function(t,e,n){var r=n(24)("wks"),o=n(16),u=n(1).Symbol,i="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=r},12:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var r=function(t){"undefined"!=typeof window&&window.Vue&&window.Vue.use(t)},o=function(t,e){t.component(e.name,e)},u=function(t,e,n){t.prototype[e]=n}},13:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},15:function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},16:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},17:function(t,e,n){var r=n(1),o=n(3),u=n(30),i=n(9),c=n(5),f=function(t,e,n){var a,s,l,p=t&f.F,d=t&f.G,y=t&f.S,v=t&f.P,b=t&f.B,h=t&f.W,m=d?o:o[e]||(o[e]={}),g=m.prototype,w=d?r:y?r[e]:(r[e]||{}).prototype;d&&(n=e);for(a in n)(s=!p&&w&&void 0!==w[a])&&c(m,a)||(l=s?w[a]:n[a],m[a]=d&&"function"!=typeof w[a]?n[a]:b&&s?u(l,r):h&&w[a]==l?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(l):v&&"function"==typeof l?u(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[a]=l,t&f.R&&g&&!g[a]&&i(g,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(179),o=n.n(r),u=n(12);n.d(e,"Switch",(function(){return o.a}));var i={install:function(t){Object(u.a)(t,o.a)}};Object(u.c)(i),e.default=i},179:function(t,e,n){var r=n(2)(n(180),n(181),null,null,null);t.exports=r.exports},18:function(t,e){t.exports=!0},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n.n(r);e.default={name:"BSwitch",props:{value:[String,Number,Boolean,Function,Object,Array,o.a],nativeValue:[String,Number,Boolean,Function,Object,Array,o.a],disabled:Boolean,type:String,name:String,required:Boolean,size:String,trueValue:{type:[String,Number,Boolean,Function,Object,Array,o.a],default:!0},falseValue:{type:[String,Number,Boolean,Function,Object,Array,o.a],default:!1}},data:function(){return{newValue:this.value,isMouseDown:!1}},computed:{computedValue:{get:function(){return this.newValue},set:function(t){this.newValue=t,this.$emit("input",t)}}},watch:{value:function(t){this.newValue=t}}}},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{ref:"label",staticClass:"switch",class:[t.size,{"is-disabled":t.disabled}],attrs:{disabled:t.disabled,tabindex:!t.disabled&&0},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key)&&t._k(e.keyCode,"space",32,e.key))return null;e.preventDefault(),t.$refs.label.click()},mousedown:function(e){t.isMouseDown=!0},mouseup:function(e){t.isMouseDown=!1},mouseout:function(e){t.isMouseDown=!1},blur:function(e){t.isMouseDown=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.computedValue,expression:"computedValue"}],attrs:{type:"checkbox",disabled:t.disabled,name:t.name,required:t.required,"true-value":t.trueValue,"false-value":t.falseValue},domProps:{value:t.nativeValue,checked:Array.isArray(t.computedValue)?t._i(t.computedValue,t.nativeValue)>-1:t._q(t.computedValue,t.trueValue)},on:{click:function(t){t.stopPropagation()},change:function(e){var n=t.computedValue,r=e.target,o=r.checked?t.trueValue:t.falseValue;if(Array.isArray(n)){var u=t.nativeValue,i=t._i(n,u);r.checked?i<0&&(t.computedValue=n.concat([u])):i>-1&&(t.computedValue=n.slice(0,i).concat(n.slice(i+1)))}else t.computedValue=o}}}),t._v(" "),n("span",{staticClass:"check",class:[{"is-elastic":t.isMouseDown&&!t.disabled},t.type]}),t._v(" "),n("span",{staticClass:"control-label"},[t._t("default")],2)])},staticRenderFns:[]}},19:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},2:function(t,e){t.exports=function(t,e,n,r,o){var u,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(u=t,i=t.default);var f="function"==typeof i?i.options:i;e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),r&&(f._scopeId=r);var a;if(o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=a):n&&(a=n),a){var s=f.functional,l=s?f.render:f.beforeCreate;s?f.render=function(t,e){return a.call(e),l(t,e)}:f.beforeCreate=l?[].concat(l,a):[a]}return{esModule:u,exports:i,options:f}}},20:function(t,e,n){t.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},21:function(t,e,n){var r=n(6),o=n(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},22:function(t,e,n){var r=n(35),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},23:function(t,e){e.f={}.propertyIsEnumerable},24:function(t,e,n){var r=n(3),o=n(1),u=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},249:function(t,e,n){t.exports=n(178)},25:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},27:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},28:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},29:function(t,e,n){var r=n(24)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},3:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},30:function(t,e,n){var r=n(32);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},32:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},33:function(t,e,n){var r=n(1),o=n(3),u=n(18),i=n(39),c=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:i.f(t)})}},34:function(t,e){e.f=Object.getOwnPropertySymbols},35:function(t,e,n){var r=n(5),o=n(8),u=n(43)(!1),i=n(29)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=i&&r(c,n)&&a.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~u(a,n)||a.push(n));return a}},36:function(t,e,n){t.exports={default:n(57),__esModule:!0}},37:function(t,e,n){var r=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},38:function(t,e,n){var r=n(4).f,o=n(5),u=n(11)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},39:function(t,e,n){e.f=n(11)},4:function(t,e,n){var r=n(10),o=n(20),u=n(15),i=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},41:function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},42:function(t,e,n){var r=n(35),o=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},43:function(t,e,n){var r=n(8),o=n(41),u=n(44);t.exports=function(t){return function(e,n,i){var c,f=r(e),a=o(f.length),s=u(i,a);if(t&&n!=n){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}},44:function(t,e,n){var r=n(19),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},47:function(t,e,n){t.exports=n(9)},48:function(t,e,n){var r=n(10),o=n(55),u=n(25),i=n(29)("IE_PROTO"),c=function(){},f=function(){var t,e=n(21)("iframe"),r=u.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[u[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[i]=t):n=f(),void 0===e?n:o(n,e)}},5:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},55:function(t,e,n){var r=n(4),o=n(10),u=n(22);t.exports=n(0)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),c=i.length,f=0;c>f;)r.f(t,n=i[f++],e[n]);return t}},56:function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},57:function(t,e,n){n(58),n(64),n(65),n(66),t.exports=n(3).Symbol},58:function(t,e,n){"use strict";var r=n(1),o=n(5),u=n(0),i=n(17),c=n(47),f=n(59).KEY,a=n(7),s=n(24),l=n(38),p=n(16),d=n(11),y=n(39),v=n(33),b=n(60),h=n(61),m=n(10),g=n(6),w=n(8),x=n(15),_=n(13),O=n(48),S=n(62),j=n(63),P=n(4),E=n(22),V=j.f,k=P.f,M=S.f,F=r.Symbol,N=r.JSON,C=N&&N.stringify,T=d("_hidden"),A=d("toPrimitive"),D={}.propertyIsEnumerable,I=s("symbol-registry"),R=s("symbols"),B=s("op-symbols"),$=Object.prototype,W="function"==typeof F,z=r.QObject,q=!z||!z.prototype||!z.prototype.findChild,J=u&&a((function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=V($,e);r&&delete $[e],k(t,e,n),r&&t!==$&&k($,e,r)}:k,G=function(t){var e=R[t]=O(F.prototype);return e._k=t,e},K=W&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},U=function(t,e,n){return t===$&&U(B,e,n),m(t),e=x(e,!0),m(n),o(R,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=O(n,{enumerable:_(0,!1)})):(o(t,T)||k(t,T,_(1,{})),t[T][e]=!0),J(t,e,n)):k(t,e,n)},X=function(t,e){m(t);for(var n,r=b(e=w(e)),o=0,u=r.length;u>o;)U(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?O(t):X(O(t),e)},L=function(t){var e=D.call(this,t=x(t,!0));return!(this===$&&o(R,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,T)&&this[T][t])||e)},Q=function(t,e){if(t=w(t),e=x(e,!0),t!==$||!o(R,e)||o(B,e)){var n=V(t,e);return!n||!o(R,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},H=function(t){for(var e,n=M(w(t)),r=[],u=0;n.length>u;)o(R,e=n[u++])||e==T||e==f||r.push(e);return r},Z=function(t){for(var e,n=t===$,r=M(n?B:w(t)),u=[],i=0;r.length>i;)!o(R,e=r[i++])||n&&!o($,e)||u.push(R[e]);return u};W||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===$&&e.call(B,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),J(this,t,_(1,n))};return u&&q&&J($,t,{configurable:!0,set:e}),G(t)},c(F.prototype,"toString",(function(){return this._k})),j.f=Q,P.f=U,n(42).f=S.f=H,n(23).f=L,n(34).f=Z,u&&!n(18)&&c($,"propertyIsEnumerable",L,!0),y.f=function(t){return G(d(t))}),i(i.G+i.W+i.F*!W,{Symbol:F});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=E(d.store),rt=0;nt.length>rt;)v(nt[rt++]);i(i.S+i.F*!W,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=F(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!W,"Object",{create:Y,defineProperty:U,defineProperties:X,getOwnPropertyDescriptor:Q,getOwnPropertyNames:H,getOwnPropertySymbols:Z}),N&&i(i.S+i.F*(!W||a((function(){var t=F();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!K(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,C.apply(N,r)}}),F.prototype[A]||n(9)(F.prototype,A,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},59:function(t,e,n){var r=n(16)("meta"),o=n(6),u=n(5),i=n(4).f,c=0,f=Object.isExtensible||function(){return!0},a=!n(7)((function(){return f(Object.preventExtensions({}))})),s=function(t){i(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!u(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return a&&y.NEED&&f(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},60:function(t,e,n){var r=n(22),o=n(34),u=n(23);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,c=n(t),f=u.f,a=0;c.length>a;)f.call(t,i=c[a++])&&e.push(i);return e}},61:function(t,e,n){var r=n(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}},62:function(t,e,n){var r=n(8),o=n(42).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?c(t):o(r(t))}},63:function(t,e,n){var r=n(23),o=n(13),u=n(8),i=n(15),c=n(5),f=n(20),a=Object.getOwnPropertyDescriptor;e.f=n(0)?a:function(t,e){if(t=u(t),e=i(e,!0),f)try{return a(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},64:function(t,e){},65:function(t,e,n){n(33)("asyncIterator")},66:function(t,e,n){n(33)("observable")},7:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},8:function(t,e,n){var r=n(37),o=n(27);t.exports=function(t){return r(o(t))}},9:function(t,e,n){var r=n(4),o=n(13);t.exports=n(0)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}}})}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/*! Buefy v0.7.3 | MIT License | github.com/buefy/buefy */
!(function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}})("undefined"!=typeof self?self:this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=254)})([(function(e,t,n){e.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),(function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,f=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:u}}}),(function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),(function(e,t,n){var i=n(10),r=n(20),o=n(15),s=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}}),(function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}}),(function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}}),(function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}),(function(e,t,n){var i=n(37),r=n(27);e.exports=function(e){return i(r(e))}}),(function(e,t,n){var i=n(4),r=n(13);e.exports=n(0)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}}),(function(e,t,n){var i=n(6);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}}),(function(e,t,n){var i=n(24)("wks"),r=n(16),o=n(1).Symbol,s="function"==typeof o;(e.exports=function(e){return i[e]||(i[e]=s&&o[e]||(s?o:r)("Symbol."+e))}).store=i}),(function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=function(e){"undefined"!=typeof window&&window.Vue&&window.Vue.use(e)},r=function(e,t){e.component(t.name,t)},o=function(e,t,n){e.prototype[t]=n}}),(function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),(function(e,t,n){"use strict";var i={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0};t.a=i}),(function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}}),(function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}}),(function(e,t,n){var i=n(1),r=n(3),o=n(30),s=n(9),a=n(5),u=function(e,t,n){var l,c,f,d=e&u.F,p=e&u.G,h=e&u.S,m=e&u.P,v=e&u.B,y=e&u.W,g=p?r:r[t]||(r[t]={}),b=g.prototype,S=p?i:h?i[t]:(i[t]||{}).prototype;p&&(n=t);for(l in n)(c=!d&&S&&void 0!==S[l])&&a(g,l)||(f=c?S[l]:n[l],g[l]=p&&"function"!=typeof S[l]?n[l]:v&&c?o(f,i):y&&S[l]==f?(function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t})(f):m&&"function"==typeof f?o(Function.call,f):f,m&&((g.virtual||(g.virtual={}))[l]=f,e&u.R&&b&&!b[l]&&s(b,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u}),(function(e,t){e.exports=!0}),(function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}}),(function(e,t,n){e.exports=!n(0)&&!n(7)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))}),(function(e,t,n){var i=n(6),r=n(1).document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}}),(function(e,t,n){var i=n(35),r=n(25);e.exports=Object.keys||function(e){return i(e,r)}}),(function(e,t){t.f={}.propertyIsEnumerable}),(function(e,t,n){var i=n(3),r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),(function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(e,t,n){"use strict";t.__esModule=!0;var i=n(49),r=(function(e){return e&&e.__esModule?e:{default:e}})(i);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}),(function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}}),(function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}}),(function(e,t,n){var i=n(24)("keys"),r=n(16);e.exports=function(e){return i[e]||(i[e]=r(e))}}),(function(e,t,n){var i=n(32);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}}),(function(e,t,n){var i=n(2)(n(52),n(53),null,null,null);e.exports=i.exports}),(function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}}),(function(e,t,n){var i=n(1),r=n(3),o=n(18),s=n(39),a=n(4).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:s.f(e)})}}),(function(e,t){t.f=Object.getOwnPropertySymbols}),(function(e,t,n){var i=n(5),r=n(8),o=n(43)(!1),s=n(29)("IE_PROTO");e.exports=function(e,t){var n,a=r(e),u=0,l=[];for(n in a)n!=s&&i(a,n)&&l.push(n);for(;t.length>u;)i(a,n=t[u++])&&(~o(l,n)||l.push(n));return l}}),(function(e,t,n){e.exports={default:n(57),__esModule:!0}}),(function(e,t,n){var i=n(28);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}}),(function(e,t,n){var i=n(4).f,r=n(5),o=n(11)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}}),(function(e,t,n){t.f=n(11)}),(function(e,t){e.exports={}}),(function(e,t,n){var i=n(19),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}}),(function(e,t,n){var i=n(35),r=n(25).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}}),(function(e,t,n){var i=n(8),r=n(41),o=n(44);e.exports=function(e){return function(t,n,s){var a,u=i(t),l=r(u.length),c=o(s,l);if(e&&n!=n){for(;l>c;)if((a=u[c++])!=a)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}}}),(function(e,t,n){var i=n(19),r=Math.max,o=Math.min;e.exports=function(e,t){return e=i(e),e<0?r(e+t,0):o(e,t)}}),(function(e,t,n){"use strict";function i(e,t){return t.split(".").reduce((function(e,t){return e[t]}),e)}function r(e,t,n){if(!e)return-1;if(!n||"function"!=typeof n)return e.indexOf(t);for(var i=0;i<e.length;i++)if(n(e[i],t))return i;return-1}function o(e){void 0!==e.remove?e.remove():void 0!==e.parentNode&&e.parentNode.removeChild(e)}t.a=i,t.b=r,n.d(t,"c",(function(){return s})),t.d=o;var s={Android:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Android/i)},BlackBerry:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return"undefined"!=typeof window&&window.navigator.userAgent.match(/IEMobile/i)},any:function(){return s.Android()||s.BlackBerry()||s.iOS()||s.Opera()||s.Windows()}}}),(function(e,t,n){"use strict";var i=n(14);t.a={props:{size:String,expanded:Boolean,loading:Boolean,rounded:Boolean,icon:String,iconPack:String,autocomplete:String,maxlength:[Number,String],useHtml5Validation:{type:Boolean,default:function(){return i.a.defaultUseHtml5Validation}}},data:function(){return{isValid:!0,isFocused:!1,newIconPack:this.iconPack||i.a.defaultIconPack}},computed:{parentField:function(){for(var e=this.$parent,t=0;t<3;t++)e&&!e.$data._isField&&(e=e.$parent);return e},statusType:function(){if(this.parentField&&this.parentField.newType){if("string"==typeof this.parentField.newType)return this.parentField.newType;for(var e in this.parentField.newType)if(this.parentField.newType[e])return e}},statusMessage:function(){if(this.parentField)return this.parentField.newMessage},iconSize:function(){switch(this.size){case"is-small":return this.size;case"is-medium":return;case"is-large":return"mdi"===this.newIconPack?"is-medium":""}}},methods:{focus:function(){var e=this;void 0!==this.$data._elementRef&&this.$nextTick((function(){return e.$el.querySelector(e.$data._elementRef).focus()}))},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e),this.checkHtml5Validity()},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},checkHtml5Validity:function(){var e=this;if(this.useHtml5Validation&&void 0!==this.$refs[this.$data._elementRef]){var t=this.$el.querySelector(this.$data._elementRef),n=null,i=null,r=!0;return t.checkValidity()||(n="is-danger",i=t.validationMessage,r=!1),this.isValid=r,this.$nextTick((function(){e.parentField&&(e.parentField.type||(e.parentField.newType=n),e.parentField.message||(e.parentField.newMessage=i))})),this.isValid}}}}}),(function(e,t,n){e.exports=n(9)}),(function(e,t,n){var i=n(10),r=n(55),o=n(25),s=n(29)("IE_PROTO"),a=function(){},u=function(){var e,t=n(21)("iframe"),i=o.length;for(t.style.display="none",n(56).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[o[i]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(a.prototype=i(e),n=new a,a.prototype=null,n[s]=e):n=u(),void 0===t?n:r(n,t)}}),(function(e,t,n){e.exports={default:n(50),__esModule:!0}}),(function(e,t,n){n(51);var i=n(3).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}}),(function(e,t,n){var i=n(17);i(i.S+i.F*!n(0),"Object",{defineProperty:n(4).f})}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14);t.default={name:"BIcon",props:{type:[String,Object],pack:String,icon:String,size:String,customSize:String,customClass:String,both:Boolean},computed:{newIcon:function(){return"mdi"===this.newPack?this.newPack+"-"+this.icon:this.addFAPrefix(this.getEquivalentIconOf(this.icon))},newPack:function(){return this.pack||i.a.defaultIconPack},newType:function(){if(this.type){var e=[];if("string"==typeof this.type)e=this.type.split("-");else for(var t in this.type)if(this.type[t]){e=t.split("-");break}if(!(e.length<=1))return"has-text-"+e[1]}},newCustomSize:function(){return this.customSize||this.customSizeByPack},customSizeByPack:function(){var e="mdi"===this.newPack?"mdi-24px":this.addFAPrefix("lg"),t="mdi"===this.newPack?"mdi-36px":this.addFAPrefix("2x"),n="mdi"===this.newPack?"mdi-48px":this.addFAPrefix("3x");switch(this.size){case"is-small":return;case"is-medium":return t;case"is-large":return n;default:return e}},useIconComponent:function(){return i.a.defaultIconComponent}},methods:{addFAPrefix:function(e){return this.useIconComponent?e:"fa-"+e},getEquivalentIconOf:function(e){if(!this.both)return e;switch(e){case"check":return"check";case"information":return"info-circle";case"check-circle":return"check-circle";case"alert":return"exclamation-triangle";case"alert-circle":return"exclamation-circle";case"arrow-up":return"arrow-up";case"chevron-right":return"angle-right";case"chevron-left":return"angle-left";case"chevron-down":return"angle-down";case"eye":return"eye";case"eye-off":return"eye-slash";case"menu-down":return"caret-down";case"menu-up":return"caret-up";default:return e}}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",class:[e.newType,e.size]},[e.useIconComponent?n(e.useIconComponent,{tag:"component",class:[e.customClass],attrs:{icon:[e.newPack,e.newIcon],size:e.newCustomSize}}):n("i",{class:[e.newPack,e.newIcon,e.newCustomSize,e.customClass]})],1)},staticRenderFns:[]}}),(function(e,t,n){var i=n(27);e.exports=function(e){return Object(i(e))}}),(function(e,t,n){var i=n(4),r=n(10),o=n(22);e.exports=n(0)?Object.defineProperties:function(e,t){r(e);for(var n,s=o(t),a=s.length,u=0;a>u;)i.f(e,n=s[u++],t[n]);return e}}),(function(e,t,n){var i=n(1).document;e.exports=i&&i.documentElement}),(function(e,t,n){n(58),n(64),n(65),n(66),e.exports=n(3).Symbol}),(function(e,t,n){"use strict";var i=n(1),r=n(5),o=n(0),s=n(17),a=n(47),u=n(59).KEY,l=n(7),c=n(24),f=n(38),d=n(16),p=n(11),h=n(39),m=n(33),v=n(60),y=n(61),g=n(10),b=n(6),S=n(8),w=n(15),x=n(13),_=n(48),M=n(62),k=n(63),P=n(4),C=n(22),O=k.f,T=P.f,F=M.f,I=i.Symbol,$=i.JSON,A=$&&$.stringify,j=p("_hidden"),V=p("toPrimitive"),N={}.propertyIsEnumerable,H=c("symbol-registry"),B=c("symbols"),R=c("op-symbols"),E=Object.prototype,D="function"==typeof I,z=i.QObject,L=!z||!z.prototype||!z.prototype.findChild,W=o&&l((function(){return 7!=_(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=O(E,t);i&&delete E[t],T(e,t,n),i&&e!==E&&T(E,t,i)}:T,G=function(e){var t=B[e]=_(I.prototype);return t._k=e,t},q=D&&"symbol"==typeof I.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof I},U=function(e,t,n){return e===E&&U(R,t,n),g(e),t=w(t,!0),g(n),r(B,t)?(n.enumerable?(r(e,j)&&e[j][t]&&(e[j][t]=!1),n=_(n,{enumerable:x(0,!1)})):(r(e,j)||T(e,j,x(1,{})),e[j][t]=!0),W(e,t,n)):T(e,t,n)},J=function(e,t){g(e);for(var n,i=v(t=S(t)),r=0,o=i.length;o>r;)U(e,n=i[r++],t[n]);return e},K=function(e,t){return void 0===t?_(e):J(_(e),t)},Y=function(e){var t=N.call(this,e=w(e,!0));return!(this===E&&r(B,e)&&!r(R,e))&&(!(t||!r(this,e)||!r(B,e)||r(this,j)&&this[j][e])||t)},Q=function(e,t){if(e=S(e),t=w(t,!0),e!==E||!r(B,t)||r(R,t)){var n=O(e,t);return!n||!r(B,t)||r(e,j)&&e[j][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=F(S(e)),i=[],o=0;n.length>o;)r(B,t=n[o++])||t==j||t==u||i.push(t);return i},Z=function(e){for(var t,n=e===E,i=F(n?R:S(e)),o=[],s=0;i.length>s;)!r(B,t=i[s++])||n&&!r(E,t)||o.push(B[t]);return o};D||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===E&&t.call(R,n),r(this,j)&&r(this[j],e)&&(this[j][e]=!1),W(this,e,x(1,n))};return o&&L&&W(E,e,{configurable:!0,set:t}),G(e)},a(I.prototype,"toString",(function(){return this._k})),k.f=Q,P.f=U,n(42).f=M.f=X,n(23).f=Y,n(34).f=Z,o&&!n(18)&&a(E,"propertyIsEnumerable",Y,!0),h.f=function(e){return G(p(e))}),s(s.G+s.W+s.F*!D,{Symbol:I});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var ne=C(p.store),ie=0;ne.length>ie;)m(ne[ie++]);s(s.S+s.F*!D,"Symbol",{for:function(e){return r(H,e+="")?H[e]:H[e]=I(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in H)if(H[t]===e)return t},useSetter:function(){L=!0},useSimple:function(){L=!1}}),s(s.S+s.F*!D,"Object",{create:K,defineProperty:U,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),$&&s(s.S+s.F*(!D||l((function(){var e=I();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(b(t)||void 0!==e)&&!q(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!q(t))return t}),i[1]=t,A.apply($,i)}}),I.prototype[V]||n(9)(I.prototype,V,I.prototype.valueOf),f(I,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)}),(function(e,t,n){var i=n(16)("meta"),r=n(6),o=n(5),s=n(4).f,a=0,u=Object.isExtensible||function(){return!0},l=!n(7)((function(){return u(Object.preventExtensions({}))})),c=function(e){s(e,i,{value:{i:"O"+ ++a,w:{}}})},f=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!u(e))return"F";if(!t)return"E";c(e)}return e[i].i},d=function(e,t){if(!o(e,i)){if(!u(e))return!0;if(!t)return!1;c(e)}return e[i].w},p=function(e){return l&&h.NEED&&u(e)&&!o(e,i)&&c(e),e},h=e.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}}),(function(e,t,n){var i=n(22),r=n(34),o=n(23);e.exports=function(e){var t=i(e),n=r.f;if(n)for(var s,a=n(e),u=o.f,l=0;a.length>l;)u.call(e,s=a[l++])&&t.push(s);return t}}),(function(e,t,n){var i=n(28);e.exports=Array.isArray||function(e){return"Array"==i(e)}}),(function(e,t,n){var i=n(8),r=n(42).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return r(e)}catch(e){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):r(i(e))}}),(function(e,t,n){var i=n(23),r=n(13),o=n(8),s=n(15),a=n(5),u=n(20),l=Object.getOwnPropertyDescriptor;t.f=n(0)?l:function(e,t){if(e=o(e),t=s(t,!0),u)try{return l(e,t)}catch(e){}if(a(e,t))return r(!i.f.call(e,t),e[t])}}),(function(e,t){}),(function(e,t,n){n(33)("asyncIterator")}),(function(e,t,n){n(33)("observable")}),(function(e,t,n){"use strict";var i=n(18),r=n(17),o=n(47),s=n(9),a=n(40),u=n(75),l=n(38),c=n(76),f=n(11)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,h,m,v,y){u(n,t,h);var g,b,S,w=function(e){if(!d&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},x=t+" Iterator",_="values"==m,M=!1,k=e.prototype,P=k[f]||k["@@iterator"]||m&&k[m],C=P||w(m),O=m?_?w("entries"):C:void 0,T="Array"==t?k.entries||P:P;if(T&&(S=c(T.call(new e)))!==Object.prototype&&S.next&&(l(S,x,!0),i||"function"==typeof S[f]||s(S,f,p)),_&&P&&"values"!==P.name&&(M=!0,C=function(){return P.call(this)}),i&&!y||!d&&!M&&k[f]||s(k,f,C),a[t]=C,a[x]=p,m)if(g={values:_?C:w("values"),keys:v?C:w("keys"),entries:O},y)for(b in g)b in k||o(k,b,g[b]);else r(r.P+r.F*(d||M),t,g);return g}}),(function(e,t,n){"use strict";var i=n(74)(!0);n(67)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})}))}),,,(function(e,t,n){n(80);for(var i=n(1),r=n(9),o=n(40),s=n(11)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var l=a[u],c=i[l],f=c&&c.prototype;f&&!f[s]&&r(f,s,l),o[l]=o.Array}}),(function(e,t,n){var i=n(77),r=n(11)("iterator"),o=n(40);e.exports=n(3).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||o[i(e)]}}),(function(e,t,n){var i=n(2)(n(85),n(86),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(19),r=n(27);e.exports=function(e){return function(t,n){var o,s,a=String(r(t)),u=i(n),l=a.length;return u<0||u>=l?e?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===l||(s=a.charCodeAt(u+1))<56320||s>57343?e?a.charAt(u):o:e?a.slice(u,u+2):s-56320+(o-55296<<10)+65536)}}}),(function(e,t,n){"use strict";var i=n(48),r=n(13),o=n(38),s={};n(9)(s,n(11)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=i(s,{next:r(1,n)}),o(e,t+" Iterator")}}),(function(e,t,n){var i=n(5),r=n(54),o=n(29)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}}),(function(e,t,n){var i=n(28),r=n(11)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),r))?n:o?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}}),(function(e,t,n){e.exports={default:n(83),__esModule:!0}}),(function(e,t,n){var i=n(2)(n(93),n(94),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";var i=n(81),r=n(82),o=n(40),s=n(8);e.exports=n(67)(Array,"Array",(function(e,t){this._t=s(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")}),(function(e,t){e.exports=function(){}}),(function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}}),(function(e,t,n){n(71),n(68),e.exports=n(84)}),(function(e,t,n){var i=n(10),r=n(72);e.exports=n(3).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),o=n(31),s=n.n(o),a=n(14),u=n(46);t.default={name:"BInput",components:r()({},s.a.name,s.a),mixins:[u.a],inheritAttrs:!1,props:{value:[Number,String],type:{type:String,default:"text"},passwordReveal:Boolean,hasCounter:{type:Boolean,default:function(){return a.a.defaultInputHasCounter}},customClass:{type:String,default:""}},data:function(){return{newValue:this.value,newType:this.type,newAutocomplete:this.autocomplete||a.a.defaultInputAutocomplete,isPasswordVisible:!1,_elementRef:"textarea"===this.type?"textarea":"input"}},computed:{computedValue:{get:function(){return this.newValue},set:function(e){this.newValue=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()}},rootClasses:function(){return[this.iconPosition,this.size,{"is-expanded":this.expanded,"is-loading":this.loading,"is-clearfix":!this.hasMessage}]},inputClasses:function(){return[this.statusType,this.size,{"is-rounded":this.rounded}]},hasIconRight:function(){return this.passwordReveal||this.loading||this.statusType},iconPosition:function(){return this.icon&&this.hasIconRight?"has-icons-left has-icons-right":!this.icon&&this.hasIconRight?"has-icons-right":this.icon?"has-icons-left":void 0},statusTypeIcon:function(){switch(this.statusType){case"is-success":return"check";case"is-danger":return"alert-circle";case"is-info":return"information";case"is-warning":return"alert"}},hasMessage:function(){return!!this.statusMessage},passwordVisibleIcon:function(){return this.isPasswordVisible?"eye-off":"eye"},valueLength:function(){return"string"==typeof this.computedValue?this.computedValue.length:"number"==typeof this.computedValue?this.computedValue.toString().length:0}},watch:{value:function(e){this.newValue=e}},methods:{togglePasswordVisibility:function(){var e=this;this.isPasswordVisible=!this.isPasswordVisible,this.newType=this.isPasswordVisible?"text":"password",this.$nextTick((function(){e.$refs.input.focus()}))},onInput:function(e){var t=this;this.$nextTick((function(){e.target&&(t.computedValue=e.target.value)}))}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control",class:e.rootClasses},["textarea"!==e.type?n("input",e._b({ref:"input",staticClass:"input",class:[e.inputClasses,e.customClass],attrs:{type:e.newType,autocomplete:e.newAutocomplete,maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"input",e.$attrs,!1)):n("textarea",e._b({ref:"textarea",staticClass:"textarea",class:[e.inputClasses,e.customClass],attrs:{maxlength:e.maxlength},domProps:{value:e.computedValue},on:{input:e.onInput,blur:e.onBlur,focus:e.onFocus}},"textarea",e.$attrs,!1)),e._v(" "),e.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:e.icon,pack:e.iconPack,size:e.iconSize}}):e._e(),e._v(" "),e.loading||!e.passwordReveal&&!e.statusType?e._e():n("b-icon",{staticClass:"is-right",class:{"is-clickable":e.passwordReveal},attrs:{icon:e.passwordReveal?e.passwordVisibleIcon:e.statusTypeIcon,pack:e.iconPack,size:e.iconSize,type:e.passwordReveal?"is-primary":e.statusType,both:""},nativeOn:{click:function(t){e.togglePasswordVisibility(t)}}}),e._v(" "),e.maxlength&&e.hasCounter&&"number"!==e.type?n("small",{staticClass:"help counter",class:{"is-invisible":!e.isFocused}},[e._v("\n        "+e._s(e.valueLength)+" / "+e._s(e.maxlength)+"\n    ")]):e._e()],1)},staticRenderFns:[]}}),,,,(function(e,t,n){var i=n(2)(n(96),n(97),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(2)(n(98),n(99),null,null,null);e.exports=i.exports}),(function(e,t,n){var i=n(2)(n(100),n(103),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),r=n.n(i),o=n(26),s=n.n(o),a=n(31),u=n.n(a),l=n(46);t.default={name:"BSelect",components:s()({},u.a.name,u.a),mixins:[l.a],inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null},placeholder:String,multiple:Boolean,nativeSize:[String,Number]},data:function(){return{selected:this.value,_elementRef:"select"}},computed:{computedValue:{get:function(){return this.selected},set:function(e){this.selected=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()}},spanClasses:function(){return[this.size,this.statusType,{"is-fullwidth":this.expanded,"is-loading":this.loading,"is-multiple":this.multiple,"is-rounded":this.rounded,"is-empty":null===this.selected}]}},watch:{value:function(e){this.selected=e,!this.isValid&&this.checkHtml5Validity()}}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control",class:{"is-expanded":e.expanded,"has-icons-left":e.icon}},[n("span",{staticClass:"select",class:e.spanClasses},[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.computedValue,expression:"computedValue"}],ref:"select",attrs:{multiple:e.multiple,size:e.nativeSize},on:{blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()},focus:function(t){e.$emit("focus",t)},change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.computedValue=t.target.multiple?n:n[0]}}},"select",e.$attrs,!1),[e.placeholder?[null==e.computedValue?n("option",{attrs:{selected:"",disabled:"",hidden:""},domProps:{value:null}},[e._v("\n                    "+e._s(e.placeholder)+"\n                ")]):e._e()]:e._e(),e._v(" "),e._t("default")],2)]),e._v(" "),e.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:e.icon,pack:e.iconPack,size:e.iconSize}}):e._e()],1)},staticRenderFns:[]}}),,(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(78),r=n.n(i),o=n(36),s=n.n(o);t.default={name:"BDropdown",props:{value:{type:[String,Number,Boolean,Object,Array,s.a,Function],default:null},disabled:Boolean,hoverable:Boolean,inline:Boolean,position:{type:String,validator:function(e){return["is-top-right","is-top-left","is-bottom-left"].indexOf(e)>-1}},mobileModal:{type:Boolean,default:!0},ariaRole:{type:String,default:""}},data:function(){return{selected:this.value,isActive:!1,_isDropdown:!0}},computed:{rootClasses:function(){return[this.position,{"is-disabled":this.disabled,"is-hoverable":this.hoverable,"is-inline":this.inline,"is-active":this.isActive||this.inline,"is-mobile-modal":this.isMobileModal}]},isMobileModal:function(){return this.mobileModal&&!this.inline&&!this.hoverable},ariaRoleMenu:function(){return"menu"===this.ariaRole||"list"===this.ariaRole?this.ariaRole:null}},watch:{value:function(e){this.selected=e},isActive:function(e){this.$emit("active-change",e)}},methods:{selectItem:function(e){this.selected!==e&&(this.$emit("change",e),this.selected=e),this.$emit("input",e),this.isActive=!1},isInWhiteList:function(e){if(e===this.$refs.dropdownMenu)return!0;if(e===this.$refs.trigger)return!0;if(void 0!==this.$refs.dropdownMenu){var t=this.$refs.dropdownMenu.querySelectorAll("*"),n=!0,i=!1,o=void 0;try{for(var s,a=r()(t);!(n=(s=a.next()).done);n=!0){if(e===s.value)return!0}}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}}if(void 0!==this.$refs.trigger){var u=this.$refs.trigger.querySelectorAll("*"),l=!0,c=!1,f=void 0;try{for(var d,p=r()(u);!(l=(d=p.next()).done);l=!0){if(e===d.value)return!0}}catch(e){c=!0,f=e}finally{try{!l&&p.return&&p.return()}finally{if(c)throw f}}}return!1},clickedOutside:function(e){this.inline||this.isInWhiteList(e.target)||(this.isActive=!1)},toggle:function(){var e=this;this.disabled||this.hoverable||(this.isActive?this.isActive=!this.isActive:this.$nextTick((function(){e.isActive=!e.isActive})))}},created:function(){"undefined"!=typeof window&&document.addEventListener("click",this.clickedOutside)},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("click",this.clickedOutside)}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown",class:e.rootClasses},[e.inline?e._e():n("div",{ref:"trigger",staticClass:"dropdown-trigger",attrs:{role:"button","aria-haspopup":"true"},on:{click:e.toggle}},[e._t("trigger")],2),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.isMobileModal?n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"background",attrs:{"aria-hidden":!e.isActive}}):e._e()]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&(e.isActive||e.hoverable)||e.inline,expression:"(!disabled && (isActive || hoverable)) || inline"}],ref:"dropdownMenu",staticClass:"dropdown-menu",attrs:{"aria-hidden":!e.isActive}},[n("div",{staticClass:"dropdown-content",attrs:{role:e.ariaRoleMenu}},[e._t("default")],2)])])],1)},staticRenderFns:[]}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),r=n.n(i);t.default={name:"BDropdownItem",props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null},separator:Boolean,disabled:Boolean,custom:Boolean,paddingless:Boolean,hasLink:Boolean,ariaRole:{type:String,default:""}},computed:{anchorClasses:function(){return{"is-disabled":this.$parent.disabled||this.disabled,"is-paddingless":this.paddingless,"is-active":null!==this.value&&this.value===this.$parent.selected}},itemClasses:function(){return{"dropdown-item":!this.hasLink,"is-disabled":this.disabled,"is-paddingless":this.paddingless,"is-active":null!==this.value&&this.value===this.$parent.selected,"has-link":this.hasLink}},ariaRoleItem:function(){return"menuitem"===this.ariaRole||"listitem"===this.ariaRole?this.ariaRole:null},isClickable:function(){return!(this.$parent.disabled||this.separator||this.disabled||this.custom)}},methods:{selectItem:function(){this.isClickable&&(this.$parent.selectItem(this.value),this.$emit("click"))}},created:function(){if(!this.$parent.$data._isDropdown)throw this.$destroy(),new Error("You should wrap bDropdownItem on a bDropdown")}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.separator?n("hr",{staticClass:"dropdown-divider"}):e.custom||e.hasLink?n("div",{class:e.itemClasses,attrs:{role:e.ariaRoleItem,tabindex:"0"},on:{click:e.selectItem}},[e._t("default")],2):n("a",{staticClass:"dropdown-item",class:e.anchorClasses,attrs:{role:e.ariaRoleItem,tabindex:"0"},on:{click:e.selectItem}},[e._t("default")],2)},staticRenderFns:[]}}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),r=n.n(i),o=n(101),s=n.n(o);t.default={name:"BField",components:r()({},s.a.name,s.a),props:{type:[String,Object],label:String,labelFor:String,message:[String,Array,Object],grouped:Boolean,groupMultiline:Boolean,position:String,expanded:Boolean,horizontal:Boolean,addons:{type:Boolean,default:!0},customClass:String},data:function(){return{newType:this.type,newMessage:this.message,fieldLabelSize:null,_isField:!0}},computed:{rootClasses:function(){return[this.newPosition,{"is-expanded":this.expanded,"is-grouped-multiline":this.groupMultiline,"is-horizontal":this.horizontal}]},newPosition:function(){if(void 0!==this.position){var e=this.position.split("-");if(!(e.length<1)){var t=this.grouped?"is-grouped-":"has-addons-";return this.position?t+e[1]:void 0}}},formattedMessage:function(){if("string"==typeof this.newMessage)return this.newMessage;var e=[];if(Array.isArray(this.newMessage))this.newMessage.forEach((function(t){if("string"==typeof t)e.push(t);else for(var n in t)t[n]&&e.push(n)}));else for(var t in this.newMessage)this.newMessage[t]&&e.push(t);return e.filter((function(e){if(e)return e})).join(" <br> ")}},watch:{type:function(e){this.newType=e},message:function(e){this.newMessage=e}},methods:{fieldType:function(){if(this.grouped)return"is-grouped";var e=0;return this.$slots.default&&(e=this.$slots.default.reduce((function(e,t){return t.tag?e+1:e}),0)),e>1&&this.addons&&!this.horizontal?"has-addons":void 0}},mounted:function(){if(this.horizontal){this.$el.querySelectorAll(".input, .select, .button, .textarea").length>0&&(this.fieldLabelSize="is-normal")}}}}),(function(e,t,n){var i=n(2)(n(102),null,null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BFieldBody",props:{message:{type:String},type:{type:[String,Object]}},render:function(e){var t=this;return e("div",{attrs:{class:"field-body"}},this.$slots.default.map((function(n){return n.tag?t.message?e("b-field",{attrs:{message:t.message,type:t.type}},[n]):e("b-field",{attrs:{type:t.type}},[n]):n})))}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field",class:[e.rootClasses,e.fieldType()]},[e.horizontal?n("div",{staticClass:"field-label",class:[e.customClass,e.fieldLabelSize]},[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()]):[e.label?n("label",{staticClass:"label",class:e.customClass,attrs:{for:e.labelFor}},[e._v("\n            "+e._s(e.label)+"\n        ")]):e._e()],e._v(" "),e.horizontal?n("b-field-body",{attrs:{message:e.newMessage?e.formattedMessage:"",type:e.newType}},[e._t("default")],2):[e._t("default")],e._v(" "),e.newMessage&&!e.horizontal?n("p",{staticClass:"help",class:e.newType,domProps:{innerHTML:e._s(e.formattedMessage)}}):e._e()],2)},staticRenderFns:[]}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(215),r=n.n(i),o=n(12);n.d(t,"Timepicker",(function(){return r.a}));var s={install:function(e){Object(o.a)(e,r.a)}};Object(o.c)(s),t.default=s}),(function(e,t,n){var i=n(2)(n(216),n(217),null,null,null);e.exports=i.exports}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(26),o=n.n(r),s=n(46),a=n(45),u=n(14),l=n(90),c=n.n(l),f=n(91),d=n.n(f),p=n(73),h=n.n(p),m=n(92),v=n.n(m),y=n(79),g=n.n(y),b=n(31),S=n.n(b),w="AM",x="PM",_=function(e){return(e<10?"0":"")+e},M=function(e,t){var n=e.getHours(),i=e.getMinutes(),r=!1;return"12"===t.hourFormat&&(r=n<12,n>12?n-=12:0===n&&(n=12)),_(n)+":"+_(i)+("12"===t.hourFormat?" "+(r?w:x):"")},k=function(e,t){if(e){var n=e,i=!1;if("12"===t.hourFormat){var r=e.split(" ");n=r[0],i=r[1]===w}var o=n.split(":"),s=parseInt(o[0],10),a=parseInt(o[1],10);if(isNaN(s)||s<0||s>23||"12"===t.hourFormat&&(s<1||s>12)||isNaN(a)||a<0||a>59)return null;var u=null;return t.dateSelected&&!isNaN(t.dateSelected)?u=new Date(t.dateSelected):(u=new Date,u.setMilliseconds(0),u.setSeconds(0)),u.setMinutes(a),"12"===t.hourFormat&&(i&&12===s?s=0:i||12===s||(s+=12)),u.setHours(s),u}return null};t.default={name:"BTimepicker",components:(i={},o()(i,h.a.name,h.a),o()(i,v.a.name,v.a),o()(i,g.a.name,g.a),o()(i,S.a.name,S.a),o()(i,c.a.name,c.a),o()(i,d.a.name,d.a),i),mixins:[s.a],inheritAttrs:!1,props:{value:Date,inline:Boolean,minTime:Date,maxTime:Date,placeholder:String,editable:Boolean,disabled:Boolean,hourFormat:{type:String,default:"24",validator:function(e){return"24"===e||"12"===e}},incrementMinutes:{type:Number,default:1},timeFormatter:{type:Function,default:function(e,t){return"function"==typeof u.a.defaultTimeFormatter?u.a.defaultTimeFormatter(e):M(e,t)}},timeParser:{type:Function,default:function(e,t){return"function"==typeof u.a.defaultTimeParser?u.a.defaultTimeParser(e):k(e,t)}},mobileNative:{type:Boolean,default:function(){return u.a.defaultTimepickerMobileNative}},position:String,unselectableTimes:Array},data:function(){return{dateSelected:this.value,hoursSelected:null,minutesSelected:null,meridienSelected:null,_elementRef:"input",_isTimepicker:!0}},computed:{hours:function(){for(var e=[],t=this.isHourFormat24?24:12,n=0;n<t;n++){var i=n,r=i;this.isHourFormat24||(i=n+1,r=i,this.meridienSelected===w?12===i&&(i=0):this.meridienSelected===x&&12!==i&&(i+=12)),e.push({label:_(r),value:i})}return e},minutes:function(){for(var e=[],t=0;t<60;t+=this.incrementMinutes)e.push({label:_(t),value:t});return e},meridiens:function(){return[w,x]},isMobile:function(){return this.mobileNative&&a.c.any()},isHourFormat24:function(){return"24"===this.hourFormat}},watch:{hourFormat:function(e){null!==this.hoursSelected&&(this.meridienSelected=this.hoursSelected>=12?x:w)},dateSelected:function(e){this.$emit("input",e)},value:function(e){this.updateInternalState(e),this.dateSelected=e,!this.isValid&&this.$refs.input.checkHtml5Validity()}},methods:{onMeridienChange:function(e){null!==this.hoursSelected&&(e===x?0===this.hoursSelected?this.hoursSelected=12:this.hoursSelected+=12:e===w&&(12===this.hoursSelected?this.hoursSelected=0:this.hoursSelected-=12)),this.updateDateSelected(this.hoursSelected,this.minutesSelected,e)},onHoursChange:function(e){this.updateDateSelected(parseInt(e,10),this.minutesSelected,this.meridienSelected)},onMinutesChange:function(e){this.updateDateSelected(this.hoursSelected,parseInt(e,10),this.meridienSelected)},updateDateSelected:function(e,t,n){null!=e&&null!=t&&(!this.isHourFormat24&&null!==n||this.isHourFormat24)&&(this.dateSelected&&!isNaN(this.dateSelected)?this.dateSelected=new Date(this.dateSelected):(this.dateSelected=new Date,this.dateSelected.setMilliseconds(0),this.dateSelected.setSeconds(0)),this.dateSelected.setHours(e),this.dateSelected.setMinutes(t))},updateInternalState:function(e){e?(this.hoursSelected=e.getHours(),this.minutesSelected=e.getMinutes(),this.meridienSelected=e.getHours()>=12?x:w):(this.hoursSelected=null,this.minutesSelected=null,this.meridienSelected=w)},isHourDisabled:function(e){var t=this,n=!1;if(this.minTime){var i=this.minTime.getHours();n=e<i}if(this.maxTime&&!n){var r=this.maxTime.getHours();n=e>r}if(this.unselectableTimes&&!n)if(null!==this.minutesSelected){var o=this.unselectableTimes.filter((function(n){return n.getHours()===e&&n.getMinutes()===t.minutesSelected}));n=o.length>0}else{var s=this.unselectableTimes.filter((function(t){return t.getHours()===e}));n=s.length===this.minutes.length}return n},isMinuteDisabled:function(e){var t=this,n=!1;if(null!==this.hoursSelected){if(this.isHourDisabled(this.hoursSelected))n=!0;else{if(this.minTime){var i=this.minTime.getHours(),r=this.minTime.getMinutes();n=this.hoursSelected===i&&e<r}if(this.maxTime&&!n){var o=this.maxTime.getHours(),s=this.maxTime.getMinutes();n=this.hoursSelected===o&&e>s}}if(this.unselectableTimes&&!n){n=this.unselectableTimes.filter((function(n){return n.getHours()===t.hoursSelected&&n.getMinutes()===e})).length>0}}return n},onChange:function(e){var t=this.timeParser(e,this);this.updateInternalState(t),t&&!isNaN(t)?this.dateSelected=t:(this.dateSelected=null,this.$refs.input.newValue=this.dateSelected)},formatValue:function(e){return e&&!isNaN(e)?this.timeFormatter(e,this):null},close:function(){this.$refs.dropdown&&(this.$refs.dropdown.isActive=!1)},formatHHMMSS:function(e){var t=new Date(e);if(e&&!isNaN(t)){var n=t.getHours(),i=t.getMinutes();return _(n)+":"+_(i)+":00"}return""},onChangeNativePicker:function(e){var t=e.target.value;if(t){this.dateSelected&&!isNaN(this.dateSelected)?this.dateSelected=new Date(this.dateSelected):(this.dateSelected=new Date,this.dateSelected.setMilliseconds(0),this.dateSelected.setSeconds(0));var n=t.split(":");this.dateSelected.setHours(parseInt(n[0],10)),this.dateSelected.setMinutes(parseInt(n[1],10))}else this.dateSelected=null}},mounted:function(){this.updateInternalState(this.value)}}}),(function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timepicker control",class:[e.size,{"is-expanded":e.expanded}]},[!e.isMobile||e.inline?n("b-dropdown",{ref:"dropdown",attrs:{position:e.position,disabled:e.disabled,inline:e.inline}},[e.inline?e._e():n("b-input",e._b({ref:"input",attrs:{slot:"trigger",autocomplete:"off",value:e.formatValue(e.dateSelected),placeholder:e.placeholder,size:e.size,icon:e.icon,"icon-pack":e.iconPack,loading:e.loading,disabled:e.disabled,readonly:!e.editable,rounded:e.rounded},on:{focus:function(t){e.$emit("focus",t)},blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()}},nativeOn:{change:function(t){e.onChange(t.target.value)}},slot:"trigger"},"b-input",e.$attrs,!1)),e._v(" "),n("b-dropdown-item",{attrs:{disabled:e.disabled,custom:""}},[n("b-field",{attrs:{grouped:"",position:"is-centered"}},[n("b-select",{attrs:{disabled:e.disabled,placeholder:"00"},nativeOn:{change:function(t){e.onHoursChange(t.target.value)}},model:{value:e.hoursSelected,callback:function(t){e.hoursSelected=t},expression:"hoursSelected"}},e._l(e.hours,(function(t){return n("option",{key:t.value,attrs:{disabled:e.isHourDisabled(t.value)},domProps:{value:t.value}},[e._v("\n                        "+e._s(t.label)+"\n                    ")])}))),e._v(" "),n("span",{staticClass:"control is-colon"},[e._v(":")]),e._v(" "),n("b-select",{attrs:{disabled:e.disabled,placeholder:"00"},nativeOn:{change:function(t){e.onMinutesChange(t.target.value)}},model:{value:e.minutesSelected,callback:function(t){e.minutesSelected=t},expression:"minutesSelected"}},e._l(e.minutes,(function(t){return n("option",{key:t.value,attrs:{disabled:e.isMinuteDisabled(t.value)},domProps:{value:t.value}},[e._v("\n                        "+e._s(t.label)+"\n                    ")])}))),e._v(" "),e.isHourFormat24?e._e():n("b-select",{attrs:{disabled:e.disabled},nativeOn:{change:function(t){e.onMeridienChange(t.target.value)}},model:{value:e.meridienSelected,callback:function(t){e.meridienSelected=t},expression:"meridienSelected"}},e._l(e.meridiens,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                        "+e._s(t)+"\n                    ")])})))],1),e._v(" "),void 0!==e.$slots.default&&e.$slots.default.length?n("footer",{staticClass:"timepicker-footer"},[e._t("default")],2):e._e()],1)],1):n("b-input",e._b({ref:"input",attrs:{type:"time",autocomplete:"off",value:e.formatHHMMSS(e.value),placeholder:e.placeholder,size:e.size,icon:e.icon,"icon-pack":e.iconPack,loading:e.loading,max:e.formatHHMMSS(e.maxTime),min:e.formatHHMMSS(e.minTime),disabled:e.disabled,readonly:!1},on:{focus:function(t){e.$emit("focus",t)},blur:function(t){e.$emit("blur",t)&&e.checkHtml5Validity()}},nativeOn:{change:function(t){e.onChangeNativePicker(t)}}},"b-input",e.$attrs,!1))],1)},staticRenderFns:[]}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){e.exports=n(214)})])}));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, ".card[data-v-2216699b]{box-shadow:1px 1px 5px rgba(0,0,0,.1);padding:1rem;background-color:#fff}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(45);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(50),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2216699b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(49),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "questionnaire"
  }, [_vm._l((_vm.questions), function(question) {
    return _c('div', {
      key: question.id
    }, [_c('single-question', {
      attrs: {
        "single_question": question,
        "lang": _vm.lang,
        "questions_array_length": _vm.questions.length
      },
      on: {
        "answered": _vm.retrieveAnswer,
        "ask-edit": _vm.editQuestion
      }
    })], 1)
  }), _vm._v(" "), (_vm.isDone) ? _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.submitQuestionnaire
    }
  }, [_vm._v(_vm._s(_vm.trans('submit_button')))]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("Question " + _vm._s(_vm.questionNumber))]), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": _vm.questionDisplay
    }
  }, [(_vm.type === 'RANGE') ? _c('b-select', {
    attrs: {
      "placeholder": _vm.trans('select_placeholder'),
      "disabled": _vm.submitted
    },
    model: {
      value: (_vm.answer),
      callback: function($$v) {
        _vm.answer = $$v
      },
      expression: "answer"
    }
  }, _vm._l((_vm.rangeValues), function(val) {
    return _c('option', {
      key: val,
      domProps: {
        "value": val
      }
    }, [_vm._v("\n                " + _vm._s(val) + "\n            ")])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.type === 'DATE_TIME') ? _c('div', [_c('b-datepicker', {
    attrs: {
      "placeholder": _vm.trans('date_time_placeholder'),
      "icon": "calendar-today",
      "disabled": _vm.submitted
    },
    on: {
      "input": _vm.updateDateTimeAnswer
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }), _vm._v(" "), _c('b-timepicker', {
    attrs: {
      "placeholder": _vm.trans('date_time_placeholder'),
      "editable": true,
      "icon": "clock",
      "disabled": _vm.submitted,
      "hour-format": _vm.format
    },
    on: {
      "input": _vm.updateDateTimeAnswer
    },
    model: {
      value: (_vm.time),
      callback: function($$v) {
        _vm.time = $$v
      },
      expression: "time"
    }
  }), _vm._v(" "), _c('b-field', [_c('b-switch', {
    attrs: {
      "disabled": _vm.submitted
    },
    model: {
      value: (_vm.formatAmPm),
      callback: function($$v) {
        _vm.formatAmPm = $$v
      },
      expression: "formatAmPm"
    }
  }, [_vm._v("AM/PM")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.type === 'TEXT') ? _c('b-input', {
    attrs: {
      "type": "text",
      "disabled": _vm.submitted
    },
    model: {
      value: (_vm.answer),
      callback: function($$v) {
        _vm.answer = $$v
      },
      expression: "answer"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'SELECT') ? _c('b-select', {
    attrs: {
      "placeholder": _vm.trans('select_placeholder'),
      "disabled": _vm.submitted
    },
    on: {
      "input": _vm.selectAnswer
    },
    model: {
      value: (_vm.choice),
      callback: function($$v) {
        _vm.choice = $$v
      },
      expression: "choice"
    }
  }, _vm._l((_vm.children), function(child) {
    return _c('option', {
      key: child.next_question_id,
      domProps: {
        "value": {
          answerId: child.id,
          nextQuestionId: child.next_question_id,
          trans: child.translation
        }
      }
    }, [_vm._v("\n                " + _vm._s(child.translation[_vm.lang].choice) + "\n            ")])
  }), 0) : _vm._e()], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "buttons"
    },
    slot: "buttons"
  }, [(!_vm.submitted) ? _c('button', {
    staticClass: "button is-primary",
    attrs: {
      "disabled": _vm.answer === null || _vm.answer === ''
    },
    on: {
      "click": _vm.submitAnswer
    }
  }, [_vm._v(_vm._s(_vm.trans('next_button')))]) : _vm._e(), _vm._v(" "), (_vm.submitted) ? _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.askChangeAnswer
    }
  }, [_vm._v(_vm._s(_vm.trans('edit_button')))]) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("48075ef1", content, true, {});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(53)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);